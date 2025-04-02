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
    "3QoeYNdAcH2ysxHaQhMukbwex6HQbqvS4WM9TeGr8RrcMmiymfZirGrHF8zF1ZPxZHtqfFtcNQo3jJH7TqzrzkEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gh5kiNN8ZVvH6Cqq2YFcGmDwMYSjfA4DqD8pYE1RteFxM7E2tFf6JnvFH3Ynw6AdAxybBNjYZFYaDE7fQLmVpdn",
  "key1": "5uazCw1LFjzADDtHcgRdEk83yfsn4DNPsJTmhUrDdvHdnP2X2LfvqpnRZDYXDVLRrgVHCzGFeGZF18JPAHfEDyaj",
  "key2": "2kGkabyfYmpRRDBwB47vxQMEV2ZjNoqdQpBWYaxZZFqVcDMkwoX5MQwq6c2WCPKiuVTxNfRYPDrieay27Mv5pMeu",
  "key3": "2nvArqmFi1UTNkKqCJicrTUTQEhAry3v1wm9qQGKBCJF9vNK2hgo4o5DiMMzKqQap8aBRCo3UGjXxzL8Mj6vv3fR",
  "key4": "5qLxyRr2hmK5QMp9wqghZGMavGLVLf6HGdGHsHvF7au6XMsZ9LVjihNcE3rbAawVYkZwRMTgAQkY1xvLLKfs6kmt",
  "key5": "3gF9hziWvXaVna2TUzGJSLJU5DMzQ3HxX4N6duB3TccMfMUA7yzx1G1DnjQeobM7xyVpSCenCNftuhLFAK2Z4fD8",
  "key6": "wkQQ2zVVgJjVaCUDeHZXGCXYzyn1edcJga1qQAGGbAGVQTBVybVaAX8XusLtZBxSiRCd419GFDM1MQGSiwcbnut",
  "key7": "D4y8YL67hrPoBJ5zR4Q1Zob3N6y2fzJzEXPPjowXR1hf5uJGVaVra3DxxvVthtVhuhZpnpFvWJ5cvzsJN5TtSP3",
  "key8": "4frwxvxLq8QjrjkiiEwzZfA6YAkGP3r3oig4DwBm51TNxixQkhNzSNQHM3CLMmp4TXwSUahveJKrSTdRo3TwJhZH",
  "key9": "4Gd8PjE9DHP41rxYanpofTARVzg1ZW3sruxLXG3puW4kHLaymuEws5G1zPLfs1knpZH2c4cWmLNCUdChHqrBcCab",
  "key10": "5Qi4mXKEp4F5ruBigViaqB946micK4jPWcWqAvxm3wv5hoRTsCarezcyu8cyN3WLpxPTpGU9fHgxogthGpRyhs4a",
  "key11": "26ZWaTfbYN3QJt7KgJZGU88ou1Dzve1KWh3DEHYkzyS9e9NnbpaLVyV6bG9qRWFBMatn421miLUSHS7FMZCddNKj",
  "key12": "2hieDRjB9QRZdLSTU2BrEL9m4T4kKJhkJyTiToFxAPQEf3U4WPfrMqqbJZk9J7vKLyyYwmGQsza1BnrLC1Zn9oSB",
  "key13": "pChTUoqRbKufPreHyzU1WGPiDTDJWpbgag7CD3hd1xYa6qMzBxdgXrjJ1Lak6fewFdi4FbFnor5LowChMNSsn8P",
  "key14": "5nKDUqLqKC9z3yCS5ueB2ZYDjmKRYU1SAwJ7gtNzdswwRf7qE3y8YfWS4KYwjP9YHd7ebnVToQzyjPsxynrqPgdr",
  "key15": "mtgZa3RgXoFCvVcJie81bUMHTghkGa2X8jXUEiz2ihsxRBpnxe7AXanP2iWQ56sVwyejYD3hReArif1BftrcsMj",
  "key16": "4zJrKtmCfeUYe5nbcJgW8nnPXrSG4SY8sVVT9Yp9PXJ1CkgudA8rECSkMnN7u1s9JasrYu2iarTi9m7HkVJTitsg",
  "key17": "52ktgopUAiVnTcg6V4HJB2qaD3QsRAyU2AzdDcLx9xfQCVVM2L8L4h55U3t8nB2eGPqTn4tdikg2DrZ46gcf9nCU",
  "key18": "3fxZdZsZ5sHsgvNSXw2JCquCxqBKGHLtbk52HxnU1vp3wogxP4bsaHr4UpMiddy6cfoFVnGL6FxDHfs92RubyUH2",
  "key19": "NZbqkL5AUyKs3cNe29GrfhAe6Ra7XVgwAkcyX97eENhqPwQs3tXDHdZWUz9TCTE1QozrEwg4RGN3Dym11jifoXj",
  "key20": "5owLBqZATfwL9JQoz3S5G4TtCeBmzPENofYE8C1Z4sDRzpMaFxJNMLau2sRDCTNadfCYv93mdmsnbomkSU95c3P5",
  "key21": "3K1jBnGQpyWF2UoSinGsZJVoa6bHwKCYA8APWC19B1pAwdzgwMwmzppNBWHePhNxAeGom1gKD8GyTKFfNvknuZvV",
  "key22": "3ZXTnzH36yza51WdkmDUvNSjuLBWcw6xK5GZiiLm1MTZYgwepG7szZRyehbboULEx4GEWRMfTJCcVS9h1W5JaWwg",
  "key23": "AJue4Dt7rfCRwcz8UDeKrgJpVii5u1hQbafKPYmhRm3pFXvzyrKeEFGr4soVFAQujrCk1qPERD5FBv2AVh4qLoP",
  "key24": "24Yw9P4vApqVy9KCUTsxNdQndzo9XkjW7YwyAGYwTZFg3CLRcAWze64GMWgeTPxYLjpJ8EPNLb4meKbTHhRV7kyb",
  "key25": "3kMUAwyXFet5d1sBvts8iHMjSirrTV8EokRHSrr3GqSPui597sCgpnovdPsAzu4YdJAGEkY7HXurCL28uDWbQpCD",
  "key26": "4QZ5EzKkFixNyDXRMdxU7q9keJ3Cc3k555goZ1eP7itkJPTaG4GPV9mxBhPVTmeR3qJxhhLAi2EoWbWZyF73wwGo",
  "key27": "3AatfdjJJkaAmpyq68vRsBh4qHocrGL5dePnR3s1M1j2WXuQ9MK5axPQUjMw6aW9QCJyHFmmZkEYPdx9tvm3fyML",
  "key28": "4NwtVtQC1Pnp9LvsH8Ho8jW9UnrHE44C1GGgCuKw7KZrGKdzbk4pzq3c3pZK1rNzcpZHbaAyR3tgxqabeMbG7Db7",
  "key29": "3CugVY3xAihZzD4rhKkAASALpg4UCSrbDPbw3tbHd1HtnokJaNNrx9Rha8SjF6uzdExwrzRSY2bF3vDLASH3GgNE",
  "key30": "21RKR4BDALG7B8gGVvVrnSvcs8jGcvhxqdDaiA6mxPi2afL7p25NcRYmyWJfivy2PQ1bffDkNvQWfejC9oZEZxnB",
  "key31": "3mv74cimPtvz2sAtqHbC457iTe9BoWip93CrkYpUYKQmeQ9EkNJs37ReYRNysiPMd3J9nnJFM2twkjXGxGX3WPUi",
  "key32": "3GfS9erBE8zasWABeHKZzXJ5JM3YNYbs89TDm3zsSfkT1AmVEtS7qcx6wi8EG3mbRXofLALXCV9KVRtAjpJUGHwb",
  "key33": "3m6N6LJHf3VieFPjw5H4bjWzoajPZ7cV75anJ14ExJKZTXsgmo7tWxH4Gac8A9XAQhyMZHabkHMq6xnyBbZujCzP",
  "key34": "41Qq9rnaPCeozvm8pJRKkFVA916Yaemxq2vTo6h8QcbYQgUxu6NkyhA9TCHEHhRhToWra9bDnXX4eyjWhw6z828J",
  "key35": "5tJmbiMA7bVty15VGDP8HUkeiT7QpMgjXcsjaqxwJD8vapLJFNAceQTkSzmAZg2VSs4c4QdrfPqayrZxFkZpBmyR",
  "key36": "2YqnmkMfELdqpcxeADadB7SxP7YhXWAh9KiNWWzJUgZSt4ycQHbp9cGE1ooMq57xbDVwM1ZJtRz5Hui9nSDaZJ8v",
  "key37": "2RU3CRpt8zWXtJCMrVA95kgxtaP5V6FeADMJQYA8CReQWWT1fLGsvtKCJUXpfgknAq95r2yARds9pRZeEeSCDfzN",
  "key38": "2RUgJBzibA7Zv1eWD5xFgwnGiBdCam38jzgdUoZ7u5QtnfjGwuszXDKBWLeD3WkQsC6Ut6Fg5ehsjnwrYnTqEFLt",
  "key39": "3xvvis1DnxC17PNRcSju7fjJTf9oYzpuprVQ9grxojSgPzXaVSFE669d9AibP98gPiFDrpALvwSCqrxJk4JiuFXa",
  "key40": "JT73zpvpTvdmPVd6eHEZBH67FaytQRC3w75ENadXhSDK2uf29Mtw4fhmPKALbiga97ypAxMtxG67WtexjXc5yDD",
  "key41": "4o1VhYiv7YMcLPU64dnjdMpUCYw9Z2YbRUu1hskw5MzwCSpdnrz9xaUjDyEXdybw3Xi9xihjWhznfStT7hLfKs8D",
  "key42": "37Z7K8aD4qu8UtHKao99iTx95hYYFZbnJc7CVbUta7NJYadvvcq2R7Ky3vNJe3qeDJK3THu61CRc84GJm6GWHqqE",
  "key43": "3hH4eV8LBb8Awp9NMAGLcq9Kf9LY6ngxXRhHaAeM8zppHCR9ifYwbAVunAarptuhqhLepG9KiE8yCFWu5Wi3D333",
  "key44": "4CPawBxWenNRte97Bd7TxCkwLKes8f9TC4iSVBe4nDstDwCezZPjVH6YsWfstMy18rY6dkLB13kfjzxLb9k7ZivQ",
  "key45": "5LQ2Z6Kg26eJUHpxKja3PDFcLyoHTwz55pgm2CU4BfDTXvMdLJakRaKAaEPGresAbbNPYKgTozeoRGMyMdnNj9Rs",
  "key46": "2KccH9v9rorCJoeSHPJLAiMehwmhPBi5hYwj7ZKdcHiUmxKMK69ccjwcpDJySZRPzsfk5tyc4KEcuy5Tk3z8yPBv",
  "key47": "3WCnSz4RWum32QTvqWLVKzq4uucxqpfbfvapA4H9qsqTqMpyvaxQwuwVfLai6Sgw2ji2S2H9kQU73xUCJ1fdiAhX"
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
