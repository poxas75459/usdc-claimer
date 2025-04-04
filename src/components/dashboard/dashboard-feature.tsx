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
    "5SR8eUAkdgntYEsWamHByTHjC8idq1C5xVFAVMMVDPF5hNyq7B4m4aAKt6LuyHWdGsKWwStywvnhcX8gXeYyYBgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYSFyTSLZLvaaaNkNpT5uzJXNQCDqqrXBQRCbfUgqHb6bffwDaRim7s8Kqwh2tU23p8za6ZymvrN8kiq5cMxyQg",
  "key1": "4sC5zNCaemPWUvq2c8ztr5MRFipCjF3WabqkAguo7rsiTEtnregZVHfnUUkpPPm79VR7X98u9d6QGb3dpp5DwzJn",
  "key2": "3qZtWNJrJC599xgGrnt9T15AJbkBsaXxxoQUnzwsUtiHHuhisFMj9d31byGxxVfkpPzWrK1FvM9NMSDMCG5e52ys",
  "key3": "5SLedYWj9G1LEfmap6GjTmebST1P3c9mtSbAJMggQywA2z73gLcknrGwr7A6Qy6WKSdLLZAUTSifF28jBJFYUKs",
  "key4": "3cqX2EXSjYm4e1ywmipEfE3twNMc572xb9wRkag2YTRbGXfuvZM8uxq6JGCCqiqPLBirAPFEZqia1dkFEv5Zz5fK",
  "key5": "2KrihTqWgfTPhYWZnKJmGHzSNF8VpjpfRYCp8DA2HxwNAWBMD5AeVoqqrAXxBwG8HsVyytG1ZUpcnfbUA7R8GZbj",
  "key6": "4tksJszi95YZjRqRtaTL88uE7zESiEdBch4nbRCMdbREmpBjR6PmuhjcTufHtQpX5ATq3rbj6m2trp9S1bAVBTzd",
  "key7": "37JXYMkG28Jj2Zj11ZqRGBTPdGfYqEEdgn5PXw3KMEiKtYdT5nymeqwwQFQCFfsNHPhNdkWaLxhSfLsVmjWjHXaW",
  "key8": "J3XYd3XJ9zrvHSZcMVXTR1kQBAEY6ajvmtMYCozoCWtj8SN5eLkCeq6EVKGp1geoqnsYkXjyigdwpdsLhFd1jJE",
  "key9": "4qBAynfsNxHQpHvSjUv54Qg6Y8y9D98VZuEvpSHQavzwM22ThkEL1tbLzFYXzd7hU843PDay4d514DuPbNa5JtV5",
  "key10": "22GrdeA6UfsxKaa1FHA6T1CB9rBRG1Lfc7G9sSQ67yMDSjKJz7CK4eASN9QtwSfNtHQ6ZWJhSpwCKctiu5m6QrMa",
  "key11": "5umHPEbD7XsCPp1JLmLqXnyWyiNq1dKsuLDyAGk9w1jgj4bN2y2UV2DYhNzSqgjWdhjpJYoo8Mnv5paKyjA7sZtA",
  "key12": "5NxysYzKzA8xbKABynWhUCKjVqksr24D7TbcgnRrjTxHFV5qR86CPHVB7cPkC7Y6KTEJT9BAbvQGFU5s2JSvQbWy",
  "key13": "3LFKi6WZrjzzFPgKW5yEWsgiAqqdi5Vhm8Jwth6fxKuzhuck1gucxMEJoZaab8mKLtgpGkpvE3tnvPygoejMtt66",
  "key14": "3DiLZBzg2TDDCHEh5rM2CPpaEbb75cLTuohFPPHAHozzvxB4bS61oHR5vyfcsvzkuBjieyH75tSDMwkrCsYMmLcJ",
  "key15": "LEyAaLjLk7ujsxZ1iPJyUBpU97p1PqkHqYeZQL34cZSpZqL8SGoKWDVUcPwQDPJDSCjdW7wdN4p58mWxVCtrwau",
  "key16": "3Nb3TE3LQsYrPUwhmpe9eE9tm9BNdHPsyvQwxh7RAfNqzVdqFPycBvb3B1ptZ2jUjFG2w7UyLXvFf16PddESVhrk",
  "key17": "2MNJWxcGMWYHjrhfRwBiLJkmrGwg5KiMc4xDTDuTQLKRvUggmDVF36StVYnbTCFGJUP9HJ3m4rSjfAuMDZiEfPxm",
  "key18": "5B18c1dXVGVbcrxMDzKZhvVtFpj3XjMDQFpEKT6VrafK7d2i6PkKssRRFFS4VL6VWq6SV6d5foM65WBgYmrMccvJ",
  "key19": "9B6PHB9q6TdaBK86F4FuTSBeYDBF2Nt49ESBh1TtTFzwPTqoM2uPoiaKfuCm7YDHD1hZPSejCtVqBv34iWzcnw7",
  "key20": "2T1CeFu3W97eWnt7SXpkmUB2teeajGqdjRjQZhNQ3Fhq8sBZ1ik4xC14epQcyN3T7dW9itQaamZfgPm1BbHyn5S4",
  "key21": "4mNxDr9HQpUFQU8WxbQ3paNT3LfZAFvfVBbTLVsb6UthhGqXXJRPhY9apgQzqCoGusqBUWbeXpdWZuMATBT3538J",
  "key22": "47usu3b3466LK2MaZqNg3pGe7ExJBvf5gCnpfQvuLN1gaAnufVe16eoPbjVsD8DdrdhNv42PGahCVZEp9DP7Ea56",
  "key23": "2Xv4vDgXmozBM4Fa2DE8BEKZSniAbwsk3C5x11HbKbitRKX6ZR3DouzZA9AhT9VqMbqGEonSB7d5gCLWkVPwicqJ",
  "key24": "bZN2dmkkafpEDdubb4YFciRs7n8aASGJMV3HwiYkUKMoNESEHjehLGbv1nsVpi2Y7EzpBhz1jFopTsFGDvx1hMc",
  "key25": "x7tXeQ8BkBc9vk19xn3a4qCe847wtfb28qojB8Tv8YFLbhRYV3RFLx8gxGUvVG9jcNqHqZnMz5PMzqMUcM6M8Vv",
  "key26": "hfp5Q4NSCzyU2W3eZbphUa4bxHYwkoFY7diLtkV77mdbfcmwmwJeRv1gQmzmFZ75maJQTZSzbrWbHPfnu7xc5qy",
  "key27": "4LorNe6oZdRePn8brgNEThsDYe5MZnZVn85ZtMYjZT5CPv1XoHkoHvHYM24aojT2igci7kKAjn5ErvtnRwZvfM2H",
  "key28": "4oopMCT2aowW9ybwXDUqqxGmpMXPGpR2jfUuvsDS5kmMVYkU9ihoJuq5bJ4HrdMaa71SUaZiPfuz3cpfKgNVS6F3",
  "key29": "22Y8HxrDfgC5aUkUr55WhUFLyCmUvDkxje693GfM2xAJuEgn5CvEvZwtDNnBFPQ3jXs9jankbH9MXkpFX2AnRnT6",
  "key30": "8XrSbCUsfJMFd6TjJZXeJ6jPtMN4BW9LBk1TJLyenZe4zsymMDZMwrxyGTpj1MPfCzo1gANcrV5Et9LymTV1FE6",
  "key31": "3UDnNc4oBJwcYqkRCcL21NjxQAA3Ce97KXEKF85dPDNWUkLSw9zZfGdoq5NiN37ZwhrmQ2NmCBHYhKLrn8FDPK1N",
  "key32": "2516LUkAv8sLd5TPqm4gJC7uNsaLZCzdBxhFD9EA67bL6ev93PdmtoVy99PS866a3EYmVpK7rxkgFpDAXbMu48Z4",
  "key33": "4XAC9pebdZj2TTCqaibpmk6Wg71zk6wsTrH6Nfvd8ZnDEWkigovXAaTufucewxAiTXgJtwkDgVErk9tE9NkSpRP2",
  "key34": "2ZAJmrT66wqNEo84q4T613tb2J6MCezEvwJZTABoFfB4oRtkPg6UkqkDGJtc8oTiQKCRAw7Tv9AGiBeJxGKsSsjQ",
  "key35": "5hNZhPnEVLy2rq9itnwG5c2yGWAHHWtgxd8Wck3pjUwPfJ71pqnK7suJU6sNFMfh9PrWp64KCfK5LRurDQmz9cMS",
  "key36": "3KtPVWxxhWDbZt49e1LTbtzX2LmseLs8dLBHwWfKiDpsrwSz6Dup4ncXybDe9WL6bJT22ReSo8LW4qbf8jDm5CFy",
  "key37": "WX6PeyVNpu2HLs9WDCFVtckDxQHwdC9Smf2qu4TPpaVkpohWnKff291fogAbXcBrabsSncpVju3diRBDyZmC5Jj",
  "key38": "51VrUmnW182guvtXNvpAj4Q1DX17kk8kbEt9UqCwF1emxhR7zy2mrLXQmbwkJnXcAZVixtrTMkSCPc8zpnRxfA4T",
  "key39": "3d18ACDgAt3RuZEjy761jz199PSwySpTqkeS6uiJ5gwiTxPiQNRwpVCLXe3gyoR6opf8931z8JzY3okfNkv4zUN",
  "key40": "5JCQhrYjZyLekEfDojcJgqAK7jpXUPPb75vEb6q9SnCm5zv5jtkX9uK4rTvcscwDJ3q6A8kRgkdPBPATHdqDfsQE",
  "key41": "5SsjUDYP6bUAxd9JsoYHSYqqquVqJanwxWWXgJoLn35r9YwbaAjEBHbJu5sPK7mV4bTF7nhL4ozamim648L4vVWz",
  "key42": "3NhQzyec3TkXfsawEeihfQqH9YQ8YZxzQ9RGndxM1NLhTcBTd1ZU1Qfm33dfvrA9T4F6hq2RC1nTpwmgRfeuGXDB",
  "key43": "57arC1wFvvZEzHVZw6SompwoA6wicHCnxGWp4eCXZWwN8S8ZHGAk739pecGU7d9Z7dV6LfDfQSFBJjutw1EMC1Di"
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
