/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3owTNgTutcKX8AZYWC8iTLFxgWjwWxPqt26ZzvxroQnADgDsasPA2wr1Cchtvnc44se1dPXi8Xj4d61cfbo5y1NR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zersEHx5Zmq6YPiYXgNT8tTiQwTSvksC71vioETxMmUvexmTufPXAiDn23jTVEk1upGL9uhiyHY4RY8kyZoTr3W",
  "key1": "26sH3qmGfdU37MdT8MBrT212PSQhrEdbLWXAaSs4FAxcmKiiwxsQZTC4HDoFBcVjer4bPuYVQpJ4Jh4owCPNLSqV",
  "key2": "5MxmkK7trVoaFVMsTe9qYZVWx7Qh2WGcxZj1TVRHx4fa7szXisJk7DNPVdUTbXV1W9NeedSbcUQ3VR5tf8jQqUyH",
  "key3": "4wqf7vwt8av9WytGYTMjUfNexnhNRoXeBfEm3ZYAs8avvwTG1b289aFNpgG4p9bu3JLhh7yB57qdFEPTpkQezDy",
  "key4": "3FR61Y9hPnaqPVDMLmiB4T8pSN31SHnHwye4cBjxMazP1WJru8hQjpqWKUgNB7GJczzqUsYNp34aLhCirTvX5WFL",
  "key5": "oMFdrXAUzRt2b4dBornr1LNBo6zSuk5bKzDdqzQpjFzK1Jvnhw7gaAgdrfuHypHNynWKLySNYBNzrqp5ZbtqC1B",
  "key6": "4B6Y3EKJhTXoEpHLWc7zonHJjTAQU7d2GsaUvCJ1tTtb8ANXNyjipGDNBTgSL72ZCqGC1z2gUgHKj5Fc4CmkgEaH",
  "key7": "h96j98qvYif3gT9LBx93XcuAxZC79F3tx5uknVxy5V2DfPJ1AviUVVdwxJLTGsZxTSdYVyxR98LsmNGnQVVVMXZ",
  "key8": "3GGVPQUBiGRVuNtnd3azMpruoCRdC3Sg45vqruXTSoSSYFvxbNxCswebHMGm6drujjk1DpNqYmvC73s5HEw5JSm",
  "key9": "dBrdPd4B76NcrERTNxkW3HmE9FmSbi4Nt8BWBN2nofPpCMX569QkHH9PGUFcF65nu5UwJTcTziWfbzmSkPRmTDL",
  "key10": "2Ad49VWa7LKjgFptApb7H4SrXMP6HnZNGooykZFFVUeyCUW52R6Gp15X4fzYGkM66V4tyJRxWKPy3rZtcReULtGB",
  "key11": "5P4Dk21Ftb3ZBRiy8VSMieWt4YuLaZi7X3JkC6et7ShWTfQYKXsyCxuBx5MKicYt3wp2Y95bD6mWe2WNQKTmYh4t",
  "key12": "4MqopYVmRNdJaeBxCQ7uM3FFp8F5CLf1T1ipbYprSeHmgMCZeCxVuoyBzYa4Udh37ghZB7UmkypdjKWYz8LxPgEa",
  "key13": "DEEwc4YDzTVVtWeyKUZ4VjswX2xSP6RUcDaRFLiNpuyaWyAAyGK8hijrcDmaodCG4YGALgZQwUiSjKy4A1qf1zV",
  "key14": "21SAcjyA2g1yCSxyDx2wCCM4PvjJExHK4UuBZ5r9bRM984eLbVugxsqbYLfPa4uycrhEDYcez7babxmMizvN1Fue",
  "key15": "jEDUSAJ6iYwcZBUZ2nLRoRcghRxo8Da3AG8Lkve58aaJUmrRRikPuvTRhFmLyj1ZLnzqH7zv5zXJLbb4q8w6gzj",
  "key16": "3GyAv4t5rWoQHtsJEkpMrsaDfznRqVCiot5ff5mX8qJzqvsnWNyjo8Q12wRVA9jH6DouSKYnFsLqaA2DNWaVMGXX",
  "key17": "64zmWRR93LVLBpkvPrz99CS7jq33cdtejpojc4tLTzsyZQpmxSiYyVweQYdHphyKUxw51DSsQZbj9onqXGSL6CX1",
  "key18": "H8Wu9MpfqUSiXWSrmtoK2FPUaAdbVP4tSi4Vd1MNcVHwqz8daXb3TVNMyfVr4hxkmnbSZ2kzudc5pioEteedMQp",
  "key19": "5bdcTFiRMYnZXVXyHzHKBqqzpNPSjqHTd5Q4UZvKw23dtDgz3uktWSXxP75WM1NaRnB9q4KTFZ4CndoRSPWNWwMA",
  "key20": "3df9NFYy2wGbYQV7GqVQUs1zTwv4CNyQy6hQ1CMgjtyU9JM2caqAXE8b633ke6jJ6MDZQQ9LG48Ne82ZKod8Jnf3",
  "key21": "3mYX66MEufADAJ3BCytGYSwE4y7qf4YjZ6Yaq45doudyRoTLCFTCvSbZhRA6FfoiW5gDN6wX8C2L3EVtJqqxY3dZ",
  "key22": "3SSxxY3bj1ihb5vntY7Vt8CRiVHfqDH2bo72vYM4evmKJL22jHxDcEyVAM6ssADWfA4FoERRmjBy9ZmpqpCihaZR",
  "key23": "pk9qvGXhkYfjXPvmNKfYEQWzFdeonafgzBVZ84zvG7g2KZQakhn9M3Fj6e8kEEK99nywpnsojUhzs4MgFU5tJ34",
  "key24": "5eTvRGcpaoDdfCWCqLSxHKwxRqEUYL7zYEVGGdPZxDeQr5R2MATZWyEfhDJQkBhDxwkpJcUKHKYAYRksvHC3aQNQ",
  "key25": "ScZD74yuC8xLjPLQQLffSbZ1cfBHVHFLZYbLgdkdzBDaYBSHGpkQPJoLdCDrrg9fzwT31UohqidtoqnLjKT9eS7",
  "key26": "4y38k7LccGdVxWvo5z9UwAaHJ9jwM4dr6PFTt7MXZZLKfyEVkWRAjv9VbSpxPSP69nxWi8cWCcqUHQrWxNxGNfYD",
  "key27": "5gFp3HsGdJfDZoRUBeMzy5bzELFYTG8g5oDmZmaYmcKguLBKcHd1W36ChmvhKUoGpLwgDsttyoDEPdXTWLSAdnLS",
  "key28": "CkagpseoBZcwEVmAMhSECwkPdwxxq3ocaYxoj9gLGrQkfEm7jSbHum5sz4VCQCAB6z9wRC2CPXSUiqnLxCZ6Kjm",
  "key29": "3M6fMLGLpPgVagFXugNoHELeoHufpSAXrFUR4jXq5fuW7G7MTvcm77jWBqJj7ajme6YTpTfYLvp363KwzbXPPW2R",
  "key30": "gGKUDmVNBdq5GY4DHzGRyfVC2SXWHH8Zzs6gZePburgvVpQHpDDKTiJkgTsmahno6tVjqeXd2DuDbkDDK4sui9Y",
  "key31": "3J4czT4mvKmcS6nCHHiHpoRUiZEUgAhoEJECbcFj4Bpis2USieZtFqJrUdDKRqXYwwjWopQ8hpZoPpWHou7eNVUT",
  "key32": "4oNedEioqGuD9yC13CMcFxLZoMzpzZXsZr4PBXjU2BkjPmDUoH5LPbUdc5PYRaJm7aSjpht3voFiS27mdpDhF6tn",
  "key33": "48wcAsqMYEhfgy27qvi8ZpFAWgV6gPPqH7dbaNKhgs5oJiohq6M1epRfoPcHk9BKrw1JgCNC1eY1uVziQkqatJ9i",
  "key34": "YqS2VmKbq5PHRKhgp7XCWhhRtqjNBJdj2em3u3xGaGUskWajUGK94kbKiwntcayn3GG72tiy2coxybrsoWpQcTJ",
  "key35": "2ZQmTQSY4f27ToSbiRf6zwYrk4vj173v56MR4pEbDMbSbu2N8aEnibJzgnr8id4WwhR6rX2ABiG39feaRPbxtvKU",
  "key36": "5bq5Js2NeVZGwHS8ne8UjobpFgHTr7DvHXNx8SuiWXfmpmQCAoijaVweXvEf1WyA7nYkR14CedmeuSzJBTDD9maj",
  "key37": "5W7B7YQUQWt7e4bR7vBseuevJSXqJXRCwUGUBik9qQd4dHFf4g9Yj47ZD1apUd8xx97zxE2bGahsSXhfjexXhh3b",
  "key38": "4rZN6hcWLsVjq1iFDEfGDPReynsGxksVfQroTVuW7EkLE59FH1wf4uJvrn4vPJT1yFitS9KDQNaWbMzkLZ28ZeoS",
  "key39": "2ZwrFqxniLNGFw7TjHnEr1JFAPkGSffEpiG18eoTMXe3w1GWAik6RzfwDMSWUtdSP5h2CzXVTf4Ntk4c4d849y9V",
  "key40": "2Z4mjYeUFPW6uEgsvY56DBpi8d4ZwhhJZraSCaU8Q5vVSZQpyzASvLV9kU2cQXUpB3S9YHrSuVueabBejw5WXsLt",
  "key41": "3pGQg4vDu9A6HpHGdLWnXv4jK7bvfeUgEkiWP5UckGmB6xi43MhoMYQAjSpzAveL9sg4vibe7DcGvKFaY6ABupKG",
  "key42": "42jZKDyFCt7kZjV9TU2zKqgF9XegE7qYy5cwQX45qnCgagLzLDjjh5ECcJxMiHLeyB1NxGRBaLZ9ia78pS428zF2",
  "key43": "BqVXP2wnaKka9s8Y8PnX7fqM1S1cY1pDVr3ocohkBJkyLzq3kyPSbhzUg169SbkEqzk5nwm1DXXpmeahb8iYdDx",
  "key44": "H2rsQFAJeZZPRH123NX8sYRhjo3QrBjE9nAbwJjcdjDM97FkhLhD4TJR2gnLVsWPnV1kSpEij9xCuTCpT4WJ93o"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
