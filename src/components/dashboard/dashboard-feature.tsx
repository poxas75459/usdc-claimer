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
    "3Mu8if4Eqnmggqo3cuGte6CSCL4H28SV9kkCq6pUZcQo6ZncmVUPHcKu7AyYxV9ZLDJBeGgdz47Cq26quL5KuwGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AqBz97qXTUfjmvmbJSsQLnbo4nn4EG94zzpGtELYCBTn8QHoTxDkBDsxzYNcx86JcZ4dtCYosyykZv5jdHaksK8",
  "key1": "56nuyYRWKm7NN6f7BKatqHz6ypGBwUM1jffLBpgfczPCcagSqq8xnHEyuLLusBBicJjjpApRwZbThX7aZzGJdKYW",
  "key2": "4FCTtjDaWNDd8Q27sBLiNAR6g7rJeeDgao4GGs6QimqUdPjs6n2DXVsxgTWuGkPKuZcyuxz7czNfTGfhSvdNGtur",
  "key3": "mUDJ71N82DLyi88R2iNNwV1Bx8MvR6DQi49CRZkLphWLkVgvQ1XKZeyyYoDauz4BSwRwvUmhEvboVuyJrdh1nQk",
  "key4": "333ZbSvUJDHtNUvjKXyjsuBakaaMNdxmExFjETXoARRWcmHjYBwDDDMuEV9vqiTMnWb5n3B2fLgKUjYabcsNswh2",
  "key5": "66EXPvL2WakfJfm2m6TqStXUTcmBK7RaCqeEzfboqaR2ynBsZMqqPFSvyPHsqjWzVm2To6bABVQrVbMi4jsEZCFU",
  "key6": "5K7FJv82Kh5gtTSdA6Mffhupy7A7oM6xKZ1QU5nozWHpgyuRcXG98Qz1phK2XgR3nsVQ3gVuAwkeXpRt57Q2c9qP",
  "key7": "52uX9aL79o5i8AD7x7JpzmMm4WeiP8ZrNFtYrAY7zSQhqdKihaA7mHaLuPU1ktby8xeuVwu44V2aPseo9FnSkCSy",
  "key8": "mEywAtpAzJ9b3ibpVUycyaGytCvyLZHTYpARrD6A5Y3UweTAgsCF64qn2xdCtoUqxVmg4YrNQt5Vu3vEDzprnPy",
  "key9": "4bHW2WBDsoQwKk1mhhys8HH3j9GBScieAMc8zLhAi2UM31ten3zH19dUm4Z3GwjFjHoKfgMVNaKNBrctwqv4ePaK",
  "key10": "2BYPoUNbpTxAwr8RAkGQ46fP7apaRw7uYVbj6RTSe7RUuYX986VEbtiwV8R1Z643Wpez6XxixnoHemKKJKQGk9LR",
  "key11": "5jjDniwfXyaWCTvtU353hmpKjwX7rcXovbC6Ukh9okNo1EctwsTu6fnnrspcP6MmYkZwA7J5giVp5XKo26uPbbuk",
  "key12": "4UmqpKEu5Vq49KZ1iLAPxk2roffXqYVSiXd5zUoFHYgsK1abNAmB3KNuhn3gowTb6CD9vKxerDsk5541zWmJHR74",
  "key13": "2idtkDauUNUQgSqrSL6hfUzRY34KmzSk3n6PGsz5RxwjFe1k7QaagbCCiWjSenjkikaYtMS2CtbFhdZAFPqvhkQZ",
  "key14": "2tpYHrkpuAFGC9FcWSRxUTxNmv6kupqaZmLcMh91p7iq2HGrYLHDj5nKivn1fY4UwXpPKNtt7pk2BBdFf722TWG8",
  "key15": "3iRjJHTciRuPMxQoyFpxpkgFGApaxCquhcx1rK36tioWfcfYKDwi1ctSYpM3CeY3cHnDvYu3fZYMZvd65RWYDQ9k",
  "key16": "3UgwCu2eKs38sMK2mR1U2AQDC8iBfZaei1vDGinmaKXmB48La9jTwSebRDuXmVQYoSQizbh3W4ACE2UxXXpFjwam",
  "key17": "3mLz834rAHK3CmQyFVmFgwQmBcPXRsnAmJc1rFjLKqbpLmU5TjT6QGHvcez1iZ8b84SWoUTtNmT4UGmFWEhMLJGC",
  "key18": "5tYpWJuoyCWHajU9iocuBFt44ZuD4UXRhg9FVtQR31Z94HmAyhfoD4F6dpYmzsdjaZpxEDeocUUXJcY5Jbd43qLV",
  "key19": "5JmXdz9azkcBihipiFo8tTs5Z7EqzkNhimmFewcVe14mFMvmBrJVkkiBwxCJqcJ4G6rpbvehZx8ExEg3SDkGjWK6",
  "key20": "w8Fg28GKzo48wDWvCSYuuZrNVJFd4PyjWu7U8nWEQuPHjuSCPqBt4GtShcd6pxih7fH2T4RmY7bc4abzsmeTceQ",
  "key21": "37wnXuMW9QpMzknFUAVtH9b9SdxCQjRHyVFvPQ4YMUrjQDWfPq5yg3SpwLGdAjubgsNJqbm1gzR62ZzDpX4hoBZK",
  "key22": "CqypCtZ4XWL1WSc3dsJZ9hPXmacThW3WAqdSrUnzP8E3MTGU3VYxhfqjdFQu58f6QLfLsfTdvqLp5Heg9KxsNGe",
  "key23": "UxvF1GSxBL1Y8cNCZbfjSs4ZxxArXS4CLuZ9fo4vkBMPhPBrB4rmhdstwSHG7bqeU2yY2P8XWJRzXryfJu1Tbkk",
  "key24": "4iEvDigiRHXGxUrkGghFeeh1WAVj4TVDWW51Jwt2cgBVUN2CJi7BSWrDmevVaZk12yEqs5fFwAXbucGhsYZFCvFU",
  "key25": "55FBg88EgQ9pCthuKTnak7JuLWkzgecrjQiWNMoBVNEeY1evH36uWhM9ovfuz9ZGaF4bnpREBmv819jRMzVEpndb",
  "key26": "4vxg9eLtXoGGtR9GerBHBSYD1gFvdecKwGwYxW3rr9n4bj5Go6LghSbUVt5p1XXmn5e7ikeMypS5ZkSJBvzijVrf",
  "key27": "5wm2svAwEHuUjAagmXC6YnkNmv67KbDqwTFyTwMPifBH1wNdWbPUYpZUcbHULd92MmHQ1pywTiJySE7QS5y64UMY",
  "key28": "2x3SPurTyBtHu2YLwqRRrdMWNiq38HAnMwSPcmXNPZi9Be5KNeMuycmoEsWZj53HnNNyQ92TVNseiKtmSPghzPs3",
  "key29": "3BMGnMTvhEjWHbKcno57ttarMqSYkKKhPeDkM5y8qYXhWXru99A2Rb4X6zC9nPiqvx5QviYGtj2vKDXvnKFqfBhQ",
  "key30": "46Rsx9a7W5fESaoGJ3GMucsrY8Q1DK7w17MpsznbtjJxexfoPks7LPdvBsuLi7LoHakjA4RrtVnagCnaGnJRvA1a",
  "key31": "2LkFw88onU9ucLzApKGQpjTXAox99NSzKkNVUgZagwXktJdvEmtktt6DhATsWGPAyqVv58ZoqQ2bLX5PwmRxp8H9",
  "key32": "39uog8HyxvLii3NeN5JNWPfH48PbR5D5YDK5HRs9WXp63UBnGLSVRZBzEtF8immJQJZrqfoGU5LpncQ6AodEJVMk",
  "key33": "5jc3LfJPn9z4Kk7t3Zeg4nFoX4xq5dPyCSghDM6w1APCjaxNnn69u1Anaix3mAwJvJwv4dVnt5mqaU5kHPu3posj",
  "key34": "5LD6MUAwZhsCJ2TkuUjgUiLpEFT4PF7BBdH8xg8sRHEB4RekcawcAucPuQKh8AhMS43KGRn2qmaQSjYcvCZxdEyY",
  "key35": "3odNWUNxzUTCxsXRcynMnYW7xSmzTcrFGo7gwbAf5cmEnixjyUF5x8URQ2FX9rYtzzy5Zv9dJ86YoS8RojwJQVrZ",
  "key36": "4Zuqo6Vqz7NyLzf1oZ9Nivu5CnrHGun5SZ1tc4LLYd6LmCtBWdGbewYcVCBQRhcCtZXTJ7qjLdaJsrjqzV9iwevu",
  "key37": "35gpbPrHQPFN8MoXtRDdy4jbtJoaPbdYX7vnAdMHhPbtLEWPQUWUjPtmujHaPa3BoWRmipJfUA9aVLGRvHkPAVTi",
  "key38": "2TboPrswgEDnHsNDvYGTG2Ddt141gmbpBN2pFxbtZGqCSthcCLt2Wqj81Sz2zJrEpCg1hxk3vtPxwKpaRYdxnAj"
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
