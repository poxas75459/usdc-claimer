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
    "yuyzy4YfJXSXV2ShW4xLPwrGiMUQxaMSrew2haETn4DdW4GNPphtXM6g5mErJfTTFaq1KFeEHUmfrbQN9Ziogtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LsZf38Kpp9dmAhcR18MzUCwA1TBeW9qjKD4i2sX5zMt5EiC3acNuKpfV5Z7EVNBetoZdN18bhPGHo6izQT1EGUz",
  "key1": "2WM2nJzfF4jygrENmJeGqAZrxY569BEqUzXTrWSHEBLejWHi99c94c3CvdvE5ct8oyFkBTAatKMTgZPHyCVyH2uJ",
  "key2": "2CvMKD4wGrVXh33jEuAriSQU7PriLBThSCqJTgMJw6QvgSY7cxc627jCwkmmag7yz2giSWo5FxNoGysNXuro5ow8",
  "key3": "61NkChsvYTv5xv8sApdYdK8VJSjvbc5eEUGJSTwU6hczQtzQ3BFaP3Y9kRMrWZU8aw9pFbrfFYHZ42h6CKvFaC4r",
  "key4": "4YecCHqnfTWAH26MQETF6u9V9pC5kS7v7QqNiM5a12mJYsgCBr6TUYy76MMz3oq7MhrBmyDSLoXTZPTAe1yrZDLM",
  "key5": "y5pRymcezLUfY1jJWh2cg4oZhjCKDjBftjnfSuphbJQbYzts25ygcCCRvJtQPkwLKKubYamAobcEKgvUYPT9AJ5",
  "key6": "3ozsP33BZQnF8XynZY5KvhGaeAVLHQoH2XVYZy31Y1CqYr6ujz62FQtXvVZQHCCSzCbdDajuhA29Pav14A4qteJJ",
  "key7": "2rR3xgoiD8cQy2m3Q6HWWiBArU9KYoGiQRKZBqwqdDfrZSNSDcUKafPxSNMtSgGozTaLWL5ZWWroitdGqReF7L5D",
  "key8": "2CKdkQGnfcrG4FFpeT3xEuYjiH5XJpuNsfbPZZWv4pnDPcrjqgW3Cdj7Y9zmWKJhqDvEkjNQoSVDoNVdsLrBVPW2",
  "key9": "35msoRSh2dsxQvjFrmwNipiPiPDgquuCXDmBJeBzEt2xjB4vu3mtULkppnnVyowveq6qNX6uQB183PD3woyNtoaR",
  "key10": "5U7a9nk1yMUznHr6zMCNhfHupoS7rJpYC75uVa9Jc5KTTPiVU1KfW9ebhPT3YnCoTswziWijHqzp2y1QA75TGR19",
  "key11": "3g35k4thwQF7xtXr1wCbLAS3zVzdP2gTqe6dES8Fm83gUHq71veEpxc5hBv3fuSWfsffh3v9wrf3UQS9jwJDKrbJ",
  "key12": "fGJp29VnRvXRXjD8Mg9tLiSutzTvkZePB3rzPbFCGpe6pGyijWPpbbTMDa5m9dBxrHAffzkTFdTznKTsn1gWAcC",
  "key13": "5zWqoSHEfP1LdZHPQrigTvEakiYuzfXbsZLpRNrssNVnNBiqvby3d9voTyAMHHz8UcWrKC8xgmwenUZya9CDHoBE",
  "key14": "3WXreq5WQEyptL5Ts6FE1YKhueJJ4XfVSqG8JdT2bmkrHfZC94WT99JTHXxsFoVu2QvwPk3xYhqunRePPSoPvNSN",
  "key15": "Jvwn7xZgRV14upyJKZQ3n8fLhFhhbPXcR84vitpm1CMWrayi4Ff4YVySBBw8NNpWsqenSMn2VwZhtFuQpdQa3Sp",
  "key16": "bEDB38MiP3axTn3dTywiXpMMNcWoK1t9748Hy2Rhkvyz5Fo9KtrT3X5FVk8KQ4CvwkA1rwD6srWoY5dCBUjc3wS",
  "key17": "4Di7v4vvA73PptkCSkj5MV3ZuBSeggnSP5tahaf87znXtrJi7pfdcxDjNCJASfHFQJ8q8AkUrioiLUBpr5mdqbEv",
  "key18": "QgGbVZAfBoFBPctvrcZwkrdV5cCFCptrTV2qXnq7M6zbr3cdQCp6apyjHd1uDK3KLiPWfTUzcoWwhg8Adtfw2NV",
  "key19": "PUoartRSCcuZa2RJkB9EK4brwoTwDJNxi6gEXx6mTtZ3GXRGkzBZad2LkQqXyMMfRGB593NSS3HMjmsAi3jKgDD",
  "key20": "4PxoTfpBopThBVNsneP44hszcXW1orkSy1acDfJErawiso63UvMaXsSt7cSTKsrzSjReCzR1bscnP2BXg4HrgCCW",
  "key21": "4JeghVfPDEmUsdvTA3MxXfCHpFBEZ9TWgQTxe65kX3vCht6eiE6Lhdw2iTy1k1qWjwqoUaZfFGx119BwNnkiTox6",
  "key22": "pUaXzidj2RtRtjvSVqR67RF2sNZDaV2rfbWDa1XkLDeqxLEsVXs3B7cnjQqAEE5ZxtahZGj5sA19Amtmw9AuHPg",
  "key23": "4Tk3maeUTc26hzXSK17amcKKykhx66NHzmknGYxApGZR8HQkSYtiu2QPvSkgczJqUJV9sreZCyYD1GNw2sqLnQWJ",
  "key24": "iceCFGmV4rnMX32TwSkj7iMLpJ3SmxUe6JVKMfHi3SpLq5XVoTSkCdKUnpHTAt7WupA5E4hmAppk6ucjKz6DbDq",
  "key25": "3xsdt8zukhiLFRQZwyhCtf7HjvTkzovUB3VfHgjQRKQuqA8sEysqmKaduBdTL39ppGCgMuFwTqHYVZd4zamqeMvA",
  "key26": "4kqamRNg21ghJmPBHASEYkkexm5dDm14HikeVzcYwLSmo3k4a8SKMnGCcGgvgbvwksQ9Epjp36PodkWo38i9Kaue",
  "key27": "3GzYKjXyYnRBDnCihY9EqqMxLcHvoXfpQRivgqNaqLbbDscB8V57YXzRJYtwMDi8yjf2WwBkQzC3Suaj8Hfqd5Ft",
  "key28": "566TgKCTyJnTczHgr5mwhEn2V9qHgFXGjHSmfBgZxdk6LS6ysC8V6XmzCUVUArcS6iNgYrCjgesjG4tXhLiv6gBi",
  "key29": "5ZmNqBLvCQcbv253NGeu6bAQokw4r8XJS5jUyFyxJ2acCZ2vyNcHzKZHE3bD617afs6dY387s5rYGFK6NatxU7i8",
  "key30": "5PgJSnRbSfg6tP929Bvyz5USV8wTenb2DAbkj5nCafeNQLUQJY3DWPDYCjWdUWvr6tMbbCPJQGjPHczaX71dscPG",
  "key31": "37nDvG2ykeY94gREwGgFSm8sH7e41tE2aiuquU123cjLfnAGjLVeoyjj9u7FLQwBYN5nCjiupdbFsU1MpcZW2emi",
  "key32": "4wfWud5oCYUTvbSQS5RLxMNZuaUPtLQXibq6B5ngB2y72LqqkLNRXWdBjWRdr7pMfLdVn3kHY75ntPvUNAZQJLRW",
  "key33": "4LDtX9GQcJ9KFu6zW6cVJVxjzboC9ykebEoD8SKBufQ3v4H9wK3WpuZ97sPpBgcUNWJst4vkpUVKZPN3Ag3i6sdv",
  "key34": "4N5DvqMKk9GRctmoXTWpFD3c3vXpc9zQqbAYJnhvjfdy3Hdc4R6gkF3wCvphJtRBoEK1XmaSab4JPXNE1uYw8BT8",
  "key35": "2vr16VetWgqdVaiCR4YmFiwfVMeURV4XqRV4Ccis25Jf49EQ2rSRqiMA4h1WCqcLwfkjBwXJ4R3aPSbuqqg1Ennc",
  "key36": "cCzSg16Ui7eY8D5A9EyUVWgBEtfUDmL2dfkg7m7zo6snrQoKnL1cFj5DBsYMXBXV69mbyotEwRdMTEAx7Ne3WxT",
  "key37": "HXpt1A4kEntSALydd6sA1NPgur78zcgfPrhP69M9YakLxADsDdL8D3zoyLSkjqdTBxUqe18yZjZLN7ixnSRS83N",
  "key38": "37LhULesgtJAwP9iTNZSuhxxoWLpj3Jvb1BdiZj6aidYe5C57E9E8bENKAQ53scp7mVA3A5UZAQSbWtmpSSMk9xe",
  "key39": "28Vjze2bebWATVNa7RBK5ZdC45ELwiXLwkMMLXNqe8PktU4QqmSW3WmBDTjwZCzV25E89v9txecaRTtsQYysYgGZ",
  "key40": "3cUmiXJLAVzDvKVNMWrM5UJrS3Zsutre278rgmr9qk8P7G92f9V72H9TDMjahNnHu849rp3Yw7Ysx4uuZnbZo2Yd",
  "key41": "2D8dqZTgyQ5vy8MNQtuNz1CgVe4vUA5oMDc6VvFHJH5wtSKk7wJNcSMBG1JjJ21bTBTybSzeE62wd5R3fQFzUfkT",
  "key42": "5nCNhUiSmmrtwKoW4hqMusVp3GS1zRzGpEWnVXxr9oRbcLwzkCDwHfqbjAEnQstgVpSSm5waoQuU3xPRBm3KRKsL",
  "key43": "5tXFVEGJVAQHVsP36Hx7zBfyvm7XxW85beEKCDDSYR9VqHqwivo4XjTryXeRiZkQm76ny2fwNPcz8pCZ1bS1TbBW",
  "key44": "53fDj6yPQK7JM8gJVfZ8zkwW8CBY5z52k2RGy5hwFtion95KcyfXuiLouwrGkbZHKMPnbWDc9qRSAGccDUVf9b5m",
  "key45": "5S7iER9QiphXPEELexDYJnhPiNe8KLFGJz7waPvqY9RQ1szJU74nFusoR4971yYFjxUwGF4mYdAthEK3WfE4Lr3K"
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
