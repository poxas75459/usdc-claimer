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
    "oeqNbochCJASQ5m4nhvGD2sfKkgK8hRwguww61NEFcTo56Trh235E4ytyJBDJPj56oiEvWn2h5TK1CKbqFE4DSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A2RYnb6TzKihXBk1ZGD3Bnw4wDqsyjqyhiusp6onwFejc8J3pUpw9bdmHj5WNJQyymdt9KK3iBfA8BQKqsUP77h",
  "key1": "3Uh2cbe9RT55VSNcwNoWNaBBU5nuSWEN6BcZYEVuqzUPaHMVTCtrs4tp3nq5AXqUsWtks6zjP5EFe9eoedaZMjed",
  "key2": "Rumv2vKyUnTwfPFqQo7ir7Zva7m7SZWhRhcX17F2WKTA5pTFwdq45CN1dXaD44djggExa2RgH87ceU3wkvLrtBH",
  "key3": "2E9S3rvFx59tySdiAqrSLcV9TGfRtz8fq3vwgDePudTetobfF31Fg4NnXipNxp8ygdLSo3PFZCbn63WGQQpD1tDg",
  "key4": "5oCQ6GVK146MhrcVsqpkJ2XPjenTeVgGbjLMHhXbsg2HfwmHmSdCGTXEnTLzFR8KyMNjzfC1smeTaRXnRQS9Qmyh",
  "key5": "38dAc7sdfFKMPnkukENdFFYXgQb8wXKAoVH9bFP6qqFfxbjByk3oAX9UujNKjpK9f1eN1A7ENZJPzAs7UQJAU8p8",
  "key6": "28xB93YHE5NoXJDmY1DXyomtd4Qik9xong71jZvKE7nfTF726mBjwGNJpJvySWS96iBaXCdC1ZUMNxQoVtPXQSC7",
  "key7": "2L17mmqYtmpN44BtZbMHrj1qgsnHtedoptatQNgMG8nUR951gwYWLSCu27iVwbMhACBRgT6wRyD5NknkWd3yQcSU",
  "key8": "5FUcZusEMKY7iyg3sdkKApLbtbjCogkyqai71nGfFUJk1wGz9fbpSar3yEvqWF5y2bfbV4XmRoxhno2E9FE7EmVB",
  "key9": "5pTVEg1c2ATwdNDAfYG6eegRZYGEjFEzLq2TqXuN82Gt9fK775g66dunNQBQe7vU11gepJUzm1AKHQnvXtW4dbKV",
  "key10": "56Kx52zfjbWYDkwFX9kM4TiqQqhUSi6dwqufx3EdMYu5rxm6c7Yokwetx6mJgdQxbGiocWZ3wK4iT78Q6JYDSQAt",
  "key11": "5rCTuNAGEeo3M8xnGVz4PyW2cbHvYGhsGGst6hs7K2W9frAcWtiy5vM2hejp4QCuV9ZzJxbeeKEEaE947AwaNupF",
  "key12": "5ADt6N3M62TfiozXrRGCxJ6UgAngHdQkEZ2oobyhdYYTDEKTdH2gNeWksHMazNTh4ayih8kBQAf2Q84oabCoenwV",
  "key13": "348o7edgkXW7xtr4ae5QzYWtxuNsbfZwKMGU21PaJrqtfTwikfk1yH7A1CEoeke1qtqo7GHRtFVsbR7QqWL8aG36",
  "key14": "5meeWW7mL8bYBG3DLMUB4r6qXm2LmyhP3F3q1W2dDbxW9ZkB2ipDAKUrkAexP2ChaL9omT3VCRR1yFejXdQfhw6b",
  "key15": "4iEpFS9rKySoi1VGvTDLkaS8btZ6ENaF6L6KJdR8FeTQ9hZ3jmNQ71ucPv4faZYXcr4VkrgoDDCY9VDmbR1tqbTo",
  "key16": "4hsTNxdG6pRDpB9CVnKqKBHxy7xwZrVuvrq3F1qMg5mHf6QTrNmqA3BA9K4osWtbh9jLV5LNRMreC3KtqweNafnq",
  "key17": "5BaMLgXndMGZpVDx3R31k6QPGGSJmxTsAFz4jN9XwuG6fn7FF7o797nu7iAmyCLi55WsW9ooVJcit48oLgHBe7ow",
  "key18": "24GrE54oxb7L18YauEV8dPK67SGxMGG5pRSyr5hfCopWcsFtLgMQYP5hJBzQU5wzzQQKwNRmC24GLGbe29X2Hupk",
  "key19": "3TrCdAfr2ufgeVCvgUS8n82HrqRqtQqt7L6GdFZiweQsZvvXkmdKcenUNrSeR9qqrjVhLKQLzcVA43LmJfuehqRf",
  "key20": "49RoBM8e19gkeCC2P3kHZzS88cPbFxHF6PUbdwrwMr88RE5McJwtVirMtGsFxTiEr1aGTTwddDcLF6jzMtCiSkjE",
  "key21": "514ErHFSTjkGBUbY1jUDu63xvXf5mbrnkXxwDsywWPvHNxzvAskDNjEDz3oxB4H2GmBis3sM4mDHbukRJcEHYG96",
  "key22": "2fDRLAkunJnYpsiUb8u5eVJmVTfPonUKqWpD47CcdroV1zq9vbMS1FiUSU8c4Xgh1mEPxK92hFZBQnTJqftKBHxE",
  "key23": "G4HRUw5KY5YjZZ4Z553AKmZt7g9BhZhC9hBUxUFD1k5GedXqL3RR1hrAKQUM3YoxX7ew4jvez9rqimdNtstUjqu",
  "key24": "4BVov6JUL2kw5Yn45sSnqeMCfUW8B87kfm5Qv1dTqGcWu1QBWfRugJb3yuDzfbTT1GjEthF6sCEZZP5jqSFoqcVs",
  "key25": "4jBA1n4QwHrfDYMhzZ6q4vt2wznTYxJcUZMhYtDJZninJW5FiDH617gHkcEdT2wetPkRbnyw4yWejksHk6swBNMd",
  "key26": "UcF4STBDGzxpqtRRWJenaNJdatK6Udj8GosgsTJt3RWq7n836Y8rSeNzumPukGScZKnn1Hzpnvvb1NPt3PmtNyC",
  "key27": "5fipy5iaJ8Y1AAUGJ3Zr4pTmJ3CfrgnjsQmteAynrDhAThU8iCgGUb7FPkRU3gxiZTUfXwpbLTFw8NbUEH5FcXCv",
  "key28": "9ovw1fu6YCD6B8p9kJ289AqSY54dXkyAXrY8U41uZNEhvrBX429VXsYVEywvRhYsjFLToYH3KuousRWbhomqN2V",
  "key29": "34yz9p9baGBi1FE3LXrCvyvvLCuN9he6fMBJYsz8wviGRXQeHuotvJxQQWEBn7WAkNQAmR9wExr2Pw6haiFt9GXR",
  "key30": "51AwvXMn8Z86PUs6zdaDEqZAHHvGSeQNiFgvXUVsZ1gxEt4YtN2o4vydHthAMNniXmQ2nK6KhYnAu39rMjnkyGp4",
  "key31": "42skMZMZK4NHeZbM7UHde4nWYCzeHauKuAE3TUJ79dJRZTtRSpnFFipF6enGsoZdxsxMPvNmukRdYQSWcYTeTYpn",
  "key32": "5zsU2HaH3cF8tud4tpWCEf6g9GZkcuRP32Dp81MRjVNV7fYiW3izZRFpRYn5eg1hqd7wT5CAfRKRdwbgRr3NNBq3",
  "key33": "4iEpRKApKvHiHe83iFLgWNuzHea3JqXjQRAq3rweN1Gr1PAvvqfyC5F6mnXeAujnW6nBQDHqYqQgfFfjnGYTX6FT",
  "key34": "35eWivUaLymUVuojHb5XKF1MHRVnDYWojmPcVzr2Sc9fge7wUY8P6WNMoNLGcNyqTmfMRHA8pKy2PwKKETA1DRuq",
  "key35": "4BWp4q41i1KWB2mW8vjMCsqxMABz9VR2w8VgjPMj2xrgvkTXUCD1jD416CLFQuPth6WQjwzawJwdjb8rYAk54pH6",
  "key36": "MLwyDz8FZekZDcBvYGwxUY4DeywKLKktQQFrbMBsCrpzKMkHDp2YeAgyuudfjiWKXeVA5U58Dk19eXrdLoY3XGS",
  "key37": "4X2u1gsSZ1nkmm6ZGM1dbcUvgCSF8sAFuDmYEVpt2zBbX9sZbBcsBqPZR9h44M7MFpuhR8DMtu7mLr39fr3C1Uq5",
  "key38": "3VCWDJXTZtMJ8K8TXiJLdm7hTUHBDDRv4GMSyDXANzAhw2imCMbAYJRuBnsuywssm5ThDALTfWvbwWCrLGx9jej",
  "key39": "5beQSEwJBxJ2LSttxWedftJtktXyDKonEMJAejnKnQSHxGsxRfmeHSMyAUre5RNAoubjS66D7qf1VhpLSDK1PdoG",
  "key40": "36WWXWPhTeRWv9wvgMiUnJPCe24JBwuiw47rZxKHzjFbdYCvBZuWZ4yAY3wN4c7BbhL9RiC3nzPBiw4FNR387rPj",
  "key41": "5cWpz9owTVeWyE1W9gA7nMKofYFt3QMKwB9JhVBtz5dKS95nZoa1PYDy7Ug6nzEXQE78Ds1WdZht9oenJ2TJwJZW",
  "key42": "4CLFqrS2jQYYXautoa7yM91sfEqqcNh8xZEvJS5K8EQhUKkfTYghtFPUnSwjbUqdtKhBPRNnfAg7z8GognKeZsuY",
  "key43": "2HnHdRtdRU2nchZfWkNKkuYQVGdwEZTz5KydY4qvVtGKbaLZ1g7QJaqQ51vZy98tcRaNF6dVbcNN5XRLombc3MWB",
  "key44": "5sqkojbvKL7t15rcck66EbSLRnfZJ9phbMkmefsc2ftkQ4SmBub2ZXJc2bwcV5JFbtDWUG2SUZoLqdhwvbiFLgEn",
  "key45": "499aAs9ZKRuTHVbx5zyHtUyGfKYbxMnVQaRa2PTd8cBLyfAWCkxKoX4Fjj9gd325i4YkA6d4DRjySzRfsUCwPWWX",
  "key46": "2TpzzW3d5cjQ7etqRhouoiyX3B7Hajv83GgykMHJ3QqzNBuNVk1qi1qhkPtxQzRdbvNyvHbuZAKgnyNqYkreyTbS",
  "key47": "4PKR1Xyd7j1gZDMQTM9vms274Hyon1BmsdoAktGuXdqzq8UWB1rq1xrHFzHie4v1rXeqwT95Av7vz6UxEfm3j3cx",
  "key48": "2ZQzmcEvsMFzwKnDyELryoVLhZNqyx3tEs8ytwcANJnM4eYHrGe4XqAFSazVAd9JfnnfijZrWSzgDkq8zHWdqEe5",
  "key49": "2SwHqvawM9UjQt1ErzoYEC7u2bzFJ7iS5BzVDwsEPtknWWQn8UCkngudDbiNoFQPCoD2ADwcwerMMNrQpq5zaTLe"
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
