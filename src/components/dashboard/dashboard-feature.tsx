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
    "5RnUdA3L4qpf8GuBJdPGbRmMQ8P8hRLZ7bSAv1NZ8yYjWNe6L4tAWUUNAdyfYtYeikB6XHe3pMTeHfr9PdV7V5Bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64dWiPFMRCdSTEkLUajYV4nr6J9LfJVd9iEhuW26kVVdRHoWqu7KzFvJ5A5tSoKRyVgHHbm9KMG945iox4NwFnGH",
  "key1": "5c1g4oWEVX4U5EFy9X6MLoGZ7KAHUHDXiBpwbhR9wBfpf9zQkwSZEcZ84vgPKN2caU8uf4L9mzxoHuVvLSkd3o26",
  "key2": "3UzGTrjRgPCvQwzWhwdLqzJHwNTQogTbjyUKbspqTezNQVMn1461vPK7Fs94n4RwBLi6aMbEwV3GA8vdH75PcHbu",
  "key3": "5VWXpWoGPVQDpzcK4bnusFzLZ4Ky4wXgURg3yNPenYGYBNXvP74ATJhVtaPQQyuozvc63NQwdjkN3pn1ogYKGGk4",
  "key4": "32W1mw58SawHp5tjTHhLpb9vLBHGbTt8YAi3RYa7DkE99qCUvCLdbTak4ScFnsUU7s3JgSgd1cpyfdEAuQvZRwmU",
  "key5": "HiAhVxtHsg7DoXxd7AentXFxhZ5arr6r5wRYNU9WhouGcCyzu5DgoCTk5uewp3HmwGZTTKphLLGdA2E9xHV5Aqr",
  "key6": "2rHpyNCryTNmHg81xdUvsFXfovAgVUVQA6Uk3QKyxL8YTdhqWdExDa9FQNFrCddAGJEMdLKiMGP6qaM8rjeGpz4C",
  "key7": "79ANZvWXSdCyrQTNTX8Nn69xQwVagz49rvGPRzke4DGPc46yDCD6MKB9StMgoS1jUhEYAmgWbXahx5T4K4WWWCa",
  "key8": "4aZ2SogVskGphEjiZX8QnEvZtfZtwtHef77Twa2D4NS8ccBH17GaDxAksS5ifbwqjB3pMNkeLhtc6KLnEuCTXb43",
  "key9": "37x5RVBdZ4TRCzmCefY7NDt2qNG9rY8Rs2NavsKwaRCA3GCUWvbvoodRnfgyUQ1TMbxwiNZbrxio5f4UX6Y6VTaN",
  "key10": "sR7igvuGCxvu6kenoEDELjbZ2kWL83gfBArx5FVHJr5YHhUqhoUxEkWCiEJSuw5WeJNbsNNN1JyvYVzUn2Mkxf8",
  "key11": "3cyhVdwYZsajogdDu9PKS7iGPphETfhy1DR3QUxJ3RBSR75a6vhE51h3amogmo1Jcy4MgBnWUu2Vcv2sSc3WYGFB",
  "key12": "3ZrqjqjCBjEVKpZLTjju52uKcHPARfWzq71Ai5EUP7qDP5vCp9p8upPU8uP8sKisdheETmgDY4aQUS6MtVdLNtqe",
  "key13": "sG8MuuBJ68zPBURtN1NzRT8i2TYefZUd7D3bbcehkWK9SEMjdQW1u25dUqVRQvHVSCK796ZXqeu9fygNGtV6JqL",
  "key14": "5VojACK1qChvWbFruMdi5gHerukboVATDypNxDejzhKaMuhbifXGV5pnKfHYbK6mDr2Vow2R9xER3JXbY1wkDCN7",
  "key15": "45q6FAM8r8DwogvPsApMCTnWixgaUT2hxPvJMLKMCyY3XsC63gWAUbpviNrHDM6jYxCnebYn56WL4imfgkPyttit",
  "key16": "4YepjmRfGdxP1xDbczU8i22AhCAbqVP2b6csyGcSD1rzUSZuehyMEuWTGWmFE2oJkxQYhmNABLtBXiS2jmKY1phK",
  "key17": "2HfA2q255Q1mC5htTW4WepeSiUAPT8L6TnAYCNYSVoZniigHDXxJvWpfPZSpBz9oyjpMFK71i247CmLdBmPw9BXj",
  "key18": "22kdPFT5oF2mtbTxNPeeQ6KHgxowDDEG6kcgcyux4vG8EFi12vw1DJsKWH2KNkZwyiANrvmJLyag7PSQw4D9zYKn",
  "key19": "FLAsH1JkP3nrqzzLW9z7BuV8fPptk1RKamvzSLJef83N7on29x2TEMY3ef8Urhhnh1Kf7xpVyJffovsiLqbuU2o",
  "key20": "558ZeimqQJhDCKfeh5RN45y8x1f4q8eSZn41qS49Xm1gzVzoNcZhMzLvDt7skEbz9yurY2h7cPvMmgsJogRmRoeb",
  "key21": "8bt9cBbUfBxDTabPTntBk3CaGvgnACUPfUphDTycqVFdqHqnLhinoV6TJ7uFx23PZ2fKhmz2poHqj9GTpTEFNf3",
  "key22": "5trs14goJstgrLYNbtGtKDzNGVXGifW6nFUmQTH7iJEXERjXozBzERum7ZagXVZmfWaWbQSTw5gfdUjs8JKP21gz",
  "key23": "5sBoWJ6d17F6GkADKwVJ4hh2pak2eJjpXDFWT34ygmz1At4NJXi35LwV1aXgy52ocBzC6gJNZXbwFAR7a5UNsZVx",
  "key24": "wQuKVsuzsjobk6oxtravBBLeVTTVZusidLmHah2qNNTWS365JNYJz8qdpoG1BBxx5Z62zmMW5jG1wVbacE9Ldzc",
  "key25": "5r13evATQL2ejv1C5yXe5XZhzQ7d1SkXsJbJ31MYh9AUWxmjA2waoQsEicr37dyCQ2nS2KnJemRh1zmYSNg7H6gk",
  "key26": "248hPu16y5BPKTTGyjS3CS4ynW4FtRaemuwZzdP9smwbFdSs187QGMXoAGHdLrcfKf93CCsCcEMryZTSaxLmHARL",
  "key27": "mmjVb9uTSKhQ58ncQ3CLACnr9MPiVRS64rAP1KDcT6NYe52rsaZs8mYDt8seDVXMN29EeWDUDoMoxbq4JonryW2",
  "key28": "2aoftH9SkEP6BoDtgv42w9x8iFbGoSKZ675MMFLMkWYEmA9V4aoMq7DUYXWjCpcz9uwk7RdD2hQ39qAcCut4t6fT",
  "key29": "4eGuA4zxELxzZDF1CEYhTVLz8JNvhUneJf7FC8eAptT2QYmH61fRDe4uCi561HQinCHgjhTorCq6f7poFPSX5b2M",
  "key30": "2qoQwB2atj7uGBY7wSkA7E1buG1GYXZrjMBid3YpgSvtFTdUe8bHop9P93tFD9jGoWVz8t8vMdrYy8rWUZz4Xe88",
  "key31": "DXgWja2TjmSBa1WdyiuV6GdrvKjfhP5wPimePe2DmLNbzquBf5kAVVt2GTyhYgFfLtUoVW3mMyVKKoL73aJHiPJ",
  "key32": "sagamQQCWY1PL7b7wAcExQ4Aebo7mezwkwHguWQoPGEtevLcjRn7YSCqQSb8JqKYDCoMrzKqTxHvCAautCKCL93",
  "key33": "2wSQZ5nyCd1piSBoqZpv8a1HNuf1jGywkmt37JvRjezp3Ve8X61Pw4JjeQ6KcjZfSUkTkmBBgLsoSqzTqRZyYGvi",
  "key34": "3Y5Kv83LXRQfMhjRmZnDS4T6WJP54zDz3AM91tg92vS17zN1KW82TURATG9SPJkZXhazRJoTtNE8gmWaaoqwmn1Y",
  "key35": "4NPMQaGm5V6j9wvXJ3Yvj4aJtnBkKN5U97at7BJMvcMSBozx4MRGWAHYmiBwHFvXLENBteeFxKtqjV3CdfLvTLsM",
  "key36": "5hqrvJSbxdhkjnjpoRMYQFspagLhoKs7J2AkZ63fB83LVEGvff1m7sWzaZJN8TPEG6oTY1TsnPq8nrMSk8nQ7ViB"
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
