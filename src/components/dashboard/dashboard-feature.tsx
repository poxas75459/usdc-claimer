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
    "2frbhnVTvNeyQAxpGs7Zqvf2y4GTsSJCcVhrWTqdEWf56TRcRKtGJYnoe1d4K8UrEoHw9WTSySKZ4MGBAPiRsmoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LLcCqLbSMaeQ7E2534yeYBTLfu1ubzikGTQPWWjTJ68ZMR3YaJr3fb9LYgDPHPvo6Jz52PYNVaA8CtaEzFLFr5k",
  "key1": "4tLyi4mRb5dJnyNbCjE6iH94nVchs3W9GJamba3LdXxUGxqgZwa27SejZftmwshmgExvwdMmVh99faweRebV6JLs",
  "key2": "JBWjYS4GCZfMt5YgX5WEJiNFn2AnRkgLiJASLW2yRKhenmWxTbvnVZ9QUMifxzszp7UB1h4tWTAN7L4r57truJy",
  "key3": "4jUNvgcPxjPvkqJSayLG2sTuVpTF3rPH55gJpv295zsfNZhSdjg7xC9xBsLUq6yNiCMKbsfE4zc5HUZ6XRgy54dF",
  "key4": "2jy1yLznxAQGAB2R9bhvAwAZ2KWhsKvoMxop2cDfqGswq8Vbjbg7MsXbXRuVCZY8PM4vc7sZrqXkKkAYXxc5Y2aP",
  "key5": "44XQjSuqZMecjQsfkP29YgNVLFayFZeHJzH4TR6nGohZyJ6Bk2okNAnEPqUd74CnCyMBBcyjFcKASLwzwgebb7YQ",
  "key6": "5w4vXGN1X7XcpVQnxAxqvjBbfuvchv8VAaZyPHBWTGiAETD7nrhoYrTwfgaNwF3MfZopf3nTWuuj1ty4UvP6auFi",
  "key7": "5QNH6vtTR42VYLmBTbbYQWJwbegPeVXmn5GNP4jvbFqDL59ZXLGjSZgzLFoGcuKBQX5QMRVEH9rcwQS8T7GDrQwb",
  "key8": "5PD2sebiU1fVmD5qftt5XWAWc9k2P8QqeVBdTbzSP3hp7Lo5CyXpoMgh5kkDA3VT4KvHQPfqGroCXvAKPC187Emu",
  "key9": "37X44ZveBRJdphqCdJUjbU57JrCPc7wR7Qowk6SxxfNU6UfN7ErRB8ZiHAmAZ1FaboWgPyUceJW4a92hAK3NAN8W",
  "key10": "2ydY6Cmcmu5Bsckgc7r1oHH28rW3ajKANgcwLAdbnme3N14W9MRwqjT6AT2pqvrZUpBpkYmiNVwtczA52ePXcKno",
  "key11": "3oCsXwAFJxsVvM7dfwjT1RztHn6HZp4RYVFgxcnJUreS8wVtdYDJuw2rLAZHPTCNuSb2QvmyR1Dvua9Y9Z6hy52b",
  "key12": "hSsriSfpph8v9WQGEGQRrBD94SMDyEXspCXP4gsF73CVV58EBYrBZztKnkBMgogXgUCgvxXE9GVSHqyxPgSbnYs",
  "key13": "2UfNJFffNu1FkssTybKwNKwzzt2A69YMoSrBertUVEhjH1ixcEHDBR1rQhGgRSnpZkyxt2cctdLaeJk4153uEdr4",
  "key14": "4drMv63sedGmqbnX49oTdeGevTAkY26yyQGgwFvn4w6njPsqhpzLRFwbVLhX9hLGkvagZwJ7dZWEDbqzZT9aWDSp",
  "key15": "4fH2iGB4K2t7kiYvCSkyFcKioWAFj1RyNgTZcajDuCzjh4LNhqSPKwtu1QwLKbuF3x2CBwa95isA1SCBnF8QU4ug",
  "key16": "2SXUVeuXgDrgVfRTpu2zFJZfSqCGJXaBbLJMAMSH89CyBqnt1syaNPBprSBFdo4Lu9BTSLEJrpuu4K2trgcJdz46",
  "key17": "m7qBvmFzq7yZtub7zPuyHtwPccHehrr3NwpVCsJ3i1W82S1X7bij3a5deDneitXxtLkZJiYgJajCwbeuyPMEA8d",
  "key18": "5u7jmyQeGx9wJJrZtGWVvLuUFcGB5kTc7bmGxDSb7AAABqYwKK2t3hevvThh6bo6uYELc1QBBjA2Ut6ftRkoqcDf",
  "key19": "gt3reA81dgUtSoCWrqCSHjGHbtPwKf4ATD5H5SpAcZeKA9TeSoEhuCndNuC3zm7SzoGvYeBXKfBf562pPBKjrdK",
  "key20": "5FH7STHoigPpReWyffzzqWufxvUEmfzVT9AGTGrSRwHbcKULJJBeTjVLktbdp9KF5SPREcbvpyUBLXYxGzz2ewd9",
  "key21": "5gimiPqzuWFeEGFhEo5Y1EaWbBFh2KFrdX2yAPuEXbNsVKLSfygF4cRmcJ2psHnLHEyQeg7nXAdpBGHd8dpDbxo7",
  "key22": "21WNyvKbwzwPcu8jqxUUPNNbRAPf1YzSBFYZiSUPS9so4BjZ7KFAa3PpvXHahGphzyiSfBwbDhJuh9pq8a9xXase",
  "key23": "4efEZetffUMdCLKvocjwM4ZUeUwUiPUGFzmuiaGFJnw7yPJW3nY4EsEo852EPHdtmfFayhx6qtL89CbssGBniht5",
  "key24": "2Drm1nULFBd8Xq1i3BcG95bM8dGEyN15b4j9goenD7kP1i5n64afF9Jc4SyKs54L8rjj9cqTVbVFXXJ1SnzPEHQo",
  "key25": "x34UnenjTNo9L28PGYf5THZU9VNTWNZLJ31xb6rAar9YUMY4GXjBQ7PQfk3LyKoQpDQTijeJFBojBHjZsrxRVBJ",
  "key26": "36GwDatHGim5avUTAGZ3qunjo4BzN3gZkuvdhTs4w6z983oDkMc87VeZdR9at5RyH27T8HPKR5QMqUTDUXGLcTGZ",
  "key27": "5hwKq6YG7Uy46rzKfkP1APta1oy1JyBNUFRztHrnyrkFRrnhhGAj4p2CQrpxMk3fonrPEkNTbzsujqSfkoMhq63c",
  "key28": "2eHEHfq3MVz5VbQQvBarFk7a4c6jPRfRPDmdiQfzo9GsQgYCB2WoFqabMMisvEnZpRSCZYwQxUFCpU5nkdSquuTs",
  "key29": "4GYh4Bocp2ZfzEEi7jbdXsDcnWjah1rMJTL8S1Y3NP7WrJDheRUxbnSvUyiGMGt4YEqJ5hgggvV3f9VZVPDeC3gJ",
  "key30": "3Gug19QVdy6Hea3udpSCv3vyV1kWzYcpeq37saVvVSMqmB7bTN6ibJUQTcpBxJHBzAUVizUkKr6uzWofUy8TnNNA",
  "key31": "3vWd5XVJ88RGnou8ccaxWeaum1hMURdj713oq4HKnLZspJeZ1gfwWvAfb6eDmEQySqheZDA5LiBk1kQQQLDpWrM4",
  "key32": "2E5SEcZHZMr8vP5SN81hxPiNFkuLCgm89JJ3Bhpx8Vcy8hU9rLcsBMgzYNGXgX8ZvAPKedUnzoafyRht8yUDHte3",
  "key33": "3Xw5bxkkYYftuuASXnFoGQZr81qHrnGYzDJLPH3dLMdPuDBQLoLJ5K5dK5pMeAJ4MXkaBa7GVmyeemRdD39i3vTM",
  "key34": "58yHEqqyS3MZ9X1PxprR1ipNresaDrPbC5M5ACwYCGjibtgNhxV9ZZuqCtYKSbZzqDk7gFSRXQqfr1mJv2KCkzbh",
  "key35": "5crd5AogTteFZcfKfZ1GsUVrwseKPbR1v6LN4qbsJaKkjh87zPpcqL4WjxXwn7kExPWkEVKTZGqKsA1MzGMF9HL2",
  "key36": "4GTXM5m3S5xK7aLYcZdeycQxAYSnDn3xowpM8PHbUPREBp44dWS8W7mgmBRAPH27ogfgi5HbUghfRqTJb3bSDpka",
  "key37": "5PZbZazVZ4hN6AuVdDzdxijkHPNypsGPUpJLnd62YyTLko68NR9j4Ze1Cgu5XeNvtuR9QxaiPCL2U3G6yku4ZnKY",
  "key38": "4iHYfXCP2CbfGW2XPGDr1fXd1ef9srmdiXZttr19TTtGnwPTJyGLhAxrCA1JEBKKi5BmpidmCo4kuXs2ct545BT4",
  "key39": "5PGrtK8g2n9zbgKwKHTDDz9rCjR4QkTPM19qCicJpiKjcM7eGqgwgAGo9nVC2ATcN5xbyheejWcuS4i1YwkNPJQM",
  "key40": "ZQ3uajvzy4ChsewFFGAgqfy1m6NDDifBHWE4gGV5ai3U52enJyNEqMJQU6qrtiPbyaVWEUBKjwxHLJVq7GVBH2E",
  "key41": "RL4d7GyZwNyUaEaUN52DXTexno8yjPG5EXNJqRTRvuaBBPHCt5T4CMJBhMM7zeaqtizZoSgFwuK6fFAWz93BvCi",
  "key42": "nak7TCM51Kvrf9DZmuuMbwbffJQDXXme8BtFftK7C7rSdZhTFfjgmajrGca3fwDiFiKgLtMMZTsi3RVzZjXX1AE",
  "key43": "4zfQpTkHPMHMEXkZiwWXHzzVYguZQ2MZUrSaqWdKTg3LvowkYCfqCYuGoi4RX5fNj8KnW5rKW6AC9E4NMyFPCEet",
  "key44": "4Nr5WnYBZmKquTuP3GojkkmD8TS94cbNvRaapzsY17cjFwWpnQbsGpwMivdcQC155cGqTm3TDAdNXyn2xDNvhbGf",
  "key45": "3oKdmB9ediSDZoHK4sZ1H2sdXwwj93FmJnsC4QaZXkfbBPkZbK41MqZm7fYJKmXeNnDZLbrLf59hTcxYmBbNwKMt",
  "key46": "2P7szzuTcyexeHHJnHgAp41CXLgKYQ6vYhSB2vBX9SXyMzSkaqqqRSDvE6q2KipMrPHymFav9TzzpB5zUG4H6yiU"
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
