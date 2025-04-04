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
    "3jZtymLqFpnYrDJCzDvq81SE2su5aTR1ndEcnR8tMkWg6qQddQ39NUEWZt1SuB4m8by9XrKhpbqQCKsuRE7oRsVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zrHKYv7tXF9bDrPGzd6Hnu61XKTMqvWhJoSHTPa58XkoJwJBVpKcXCeMz8iYZpUz9kGYRKM2xjcVjGf1SF2UzQw",
  "key1": "52hDB9Z9BmYm47qc5bofuERVLh5HDTD6oaJwcaNYhCQquSvpBswuJdxDpDG6W5syn2UUTg8aJBQowRfSTzgkqs5s",
  "key2": "foaEy3i171nRzrJeNCyFQV9hJcd1VMj6o7c8Wdi5qBxh9nmxNqAeB3RXd2ek4rAyThiMN7eAak54LiKMrLkQCMu",
  "key3": "62TDCm7W7ymhTNudg8QDiPAeEof7udgqHdVzNbLpBYMezKH49zt6UMBymMxJHmGzZk3pZwWjJnPZuL51jYeQui7h",
  "key4": "3C8uUicc4VWjwuJaZZAD7TCaxfBQDnSuxi1EGg1PkhqxxhqVQNgPhPAeUEiqMZa3m7XBPqZpNj1o3nrthxTTGHFz",
  "key5": "qYm4bzsv35YuXhsmU6sTAN5BYvGYETup2gWM5caGHg9T8gRWWt3chh4FWf8hkjPxKwJo6qDcHUn6ht1pWiRNuSV",
  "key6": "dPSRHvtBTef4WyL8Mqx3kHUDiSvnHmSPiHPqMDGTDueFVDnfGiHfUES68Az7P7u7u74qRKXWYnBncR29Jkjhc3L",
  "key7": "YmgoDRGkisfkmNDrwh1pWNuWDkNr7m54uCknzAsxGiwQUoFKeHLZN4hYHmdzBpxiTWKTzJfU8GRft8DX5ZWwvdS",
  "key8": "54u3MaurqV9isg1rD5EJzdE2yfwNYMMPHb762z8MRySngGYCswJ7Hv3iShHiphF2HiUSgVUHCCUnbeMLDuFYao6s",
  "key9": "5fmMxT5Xox66wwbWimu35yqJJy4QMGpaa4RbTUgJp1e6HzdBphK2HMPDoRdk5iBG1WzfR93n7bUkKmKBMcqDgTPV",
  "key10": "38qJt96dXR36QTAo3oh7C9yBriQAR28Wr8efj3GxAKutmdUmda1MkDhnUqinSPkSQT8UUCw9R162YZ6u9iopu6Z7",
  "key11": "23ZQ9voJJZi7XBGnVXWdXkSPrXVutFdDcTcNfh21vRbNn5ok1kEarnkXMpfPQdXmuMkaKwhBKd1bNRN3eK3UiCg3",
  "key12": "42dpwJGcJyDZGxHEfLzw2ojQCQ9wnDuNHShEnhyQkLNhFd9YDJGgmjjncteY6EVMUP74EWtVrfe8AMfjbRs7GPvs",
  "key13": "4nNg13kcAhVzctgKh2cEY8W6F3dXRobbvVFwKLAFxngoHU6mLWjCyUDPqFKpnhSWxAr7rqwJTcSq2v9Uuz6Hjqxt",
  "key14": "4nBBTYo4oPaguQpyA6YRQXsYydywov7wBCYKKC3iVX1VeSJ7R9LkCby97Y4DnaJPMp8dR2HX34GHAiKqFTX9rQJW",
  "key15": "4dc2bTyH6L3TC1izGceu3rzJsrJ4i5Unq5wvzLixVFEhBae3jXD7JQWXSN3FeLSE6ZQEAkV8rvtNTExy1c1uuLpk",
  "key16": "56jodW7u8skM1WSuBBCJusysrPPrAL2EHU7xKE2XFTr4Z9vcMERr8fon971rMyuLM6nMt6WucAxB3LA4qQjcqDhc",
  "key17": "4MU6W2XM1yiiHynKoEGZKU8oELLbCFbFHhiWrGtnym1vapMhQY4qiwMft6qRJV6cTvjKAdskTdRfKxvdgnduWK4n",
  "key18": "TY9V3epNiSfBzXppMioo8MpPtQijjshDYaRqDyriCSVYRF3JS3kVh3MkwxGHzi4Tzc3GxC8KMX9HQ4U1RJvpSKC",
  "key19": "5HY6jgcHrRx9LtBYuncbcNZLxuJusLnRKSpKWzUiAnGpijzuGMFuxUQmLfbvaBXdkG54p5KH537rcfmNNgHSpQn5",
  "key20": "5kiao2qox45uUk5rM2UtArwBDpQifKY8eFHuewcAbiAY2phSfkWTNdmUfzLLZZBbgcL91zp3zRJd7A27oTEQxjr7",
  "key21": "4homAdv6sWPmpb8zByjbfLB1qeeVFTptACQGaG9LHnjQCXXnVAmbJA9WKCzuJqTMRYe3Y4WU3sgEaphvTmDkNkim",
  "key22": "334Q4THencjQCyrET2xzaXZQAay6G521xvdWmu6uBjeUP3Ts4CmSLnKrAmPXdMqQh2apSfeWppvThHB2aaymv2C7",
  "key23": "guTpa6YsVqd9UXvMeQu8v8CNYjn8uNzjPp1bmmpe5GXK97XQoF1r2pVY7NKB2a8qgvLYMURzcvPUkKZYgTgZLxa",
  "key24": "3QDVbbTZFL27HbKJaR58fonzu4xf7AWCBob9926pL1Nkvu19uGKQ2EX8nCEuo2NNjrmGfLWj9ywWRWcHUrzfy6Xa",
  "key25": "2EYxMSpzARdUyGWpwwVRWQWTwktsKSTN4ha6d3arM7B9oMzWqCK17RRXw71yCRY7F7A79awusYofU3XwDkRVFy5h",
  "key26": "2aKESKkU8nP9yv5n2Wb9nwf5uWtXzAh8e4s5NYj2pzXd5rjkRjyphV51oiigkC7cQBfVWauBXnkTGT1ziQntoyaJ",
  "key27": "2YyCjwBJLzMghecu8HarGXMcRxTPrhJPuRQf5D56RBV7u5zUTV1UcoYDhiVos6kpzwnvKBgaJyqnqZH6kFATEMJL",
  "key28": "n3fGguJxeYJc1pFsa4gbK7h349WanuSthweZqXYcvhtWkMVADUZCbrXFLiHRH6s4F3K997u8DU2VryzW2oySWWc",
  "key29": "VYawPzstafeLPDS4GbW7ExfKdNfHdtvNbtMfymewf98vmL8zMD69MtbgNe7GqTed8k8bLriUgAMsiA71gvxDtoB",
  "key30": "3ZPmHpJUTGscuvNAD7faEMDM22Er31a1cNEu6Ah4kooYa4juyrJC4LP7hbCSzQBkZ6NwZSVjgh5zNNZG1hY85nEu",
  "key31": "2EYaQhcnVTxffELWZV8uYvvZwsTS1n284EkD62YUVdAp6SgU2DiGbgbWwRPZbikkQsfRx9BfHhxgKNV6oL5jGwU6",
  "key32": "1vgxB2ReEx1gbyGAKpbo4UnKZxsw8Fk3kyQ81S7K5irL39nwLipzi4xu64pbZifirGo4FdFvAnVWB2rQUuoqT4S",
  "key33": "3wwcDdQWi9tC2db9fZHoEN7cpsfpmS6EwBdGoiSYMQGjEFHfTh8Kv5ryRoQgMRe674GoC44viVyDS7eL4vpwAvK4",
  "key34": "4U1uwgR1k7FWjUGeVUrG5iSivNaiyweS3dQoFTk3J3p3ZUERrZdmNKSmekHLsPF9B9tFMaUzt4Tq7AdQgHgJux2F",
  "key35": "2v8F8yf3iS7CQb6a7efYKFo98p2sKbfVjS7Xnw1eGCHZgxFEsydyerdEY6yoYxTPkkv5TaqnwVthW2XuNuQbT9Xg",
  "key36": "24P6hyt7gBFrcMz9URmc78iSRzMTPDph7cfXbzM3P2tYDpsNXjkrKyLSAXVup4cBLr9VdbmuxQByLwnJU7wSuvH2",
  "key37": "5MkL7TKaX5xen2W6RsZYGvUFDALHmJ2845ZG1Rq8n44tT7q5niih8xCRghUfPkpng9anyeisWNsuCmsLopV397Kv",
  "key38": "2qCTMdwJpxvgZXM4pNJCpJ63LxUhRGgSMoFj2YAxq8bTFuim1DyFtQx8LV2ZW4Tcv1Gq9LKJ1PeCN4YG5kw8KkVc",
  "key39": "qz6J2VQLNTmZbZFHzvhBbQQ1tAdrEgXo95zMRm9oesKxCdSm8CcGqAYH7zxa7d52fkyFWb31YaQAXSpRbtj3DPc",
  "key40": "G7x9MqLoT3VnVanQw14GpkpeoxKq2guYYvpPZApQqTKc7UeRLF1L6Uuc2zzY2HwJYVJtbwPoas46tpcPddnyNY1",
  "key41": "52LRQTcmyh7mGzwVNwMfE8mvKeAfEBRYVD1awYdeZ3Ua5XrV6zNgrdr3KXhSWHVM85Nc3ipCb4wKCC8LorX5EbV3",
  "key42": "3WFiFGQxxdwHZuTL2ZR8Qw9nxkvxMhEkHFLUzxkCyzvZ7hsrReKNmgeZkxykLYhfP1dUfgWMkVdxFnzpfg9QoJVh",
  "key43": "3LM4gVGyQCDosEaPRJPAzgGTtmyxnHtrUvZ9DRa9AXRRuT9dvoqEBCdiQkcfud6s7Dm4Kn1YxhhaWXfLZznDjFhB"
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
