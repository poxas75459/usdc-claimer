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
    "C2kFdaDNvvJbujmbRiUTd9jzzeZBLnVgpJrYxzcdfbVkW41WRr416Hmev2wEtY8CixBCcbFp1eXaENsAYaxuWYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQEeN1csTbP4C5PxcnPG7krpMkYL5RKHfBTbbpEeFupBvW9ns5WutzVaADMs79Zor6n2rQu2fyAuTuMxUupxt9A",
  "key1": "5CB41dyNnU7zTYpH5cGJii9MbCSJnSAUdYXsk2UevxPvhrmTHe6ZfgjD871ZVRwafWHsKbcdZFwZsiWbAYGX13T2",
  "key2": "4x4UYdimjY9JLw5xK4rtrVwqo7jvux1HfErjTZiTTwmhYxDPXwjxdyDqCzDBTMjg6xsaqmuL6kCgRhaj1xWPfpf4",
  "key3": "5eNqsUBmuttUz34Eqq8cP9ScKKkeXxai8FK2EHEGha6fcLyyxncSDLXtdgsiBkxKoS3f6gBdKo5L6QzJUBKBky9h",
  "key4": "22grtf3KKbA753rftMv7NtzMuSNrQE2AabZxNtoiqovqmQ9h6SNuqnu1iZADzCPzmhccgBoa87ZZ75dFMaWvLtXq",
  "key5": "31efgyW3rYgjaKP8qB2vFDqnEXqJexwNDNGgAsdRTURG7fTyz6CXXSNZhL9YThxFuMnAm2LaUAY8LawNuMj2ZgJY",
  "key6": "3m1zqaHhft4bqfNGD6WRJ8GkJLz4KnHpLJW59d6p7sVS1FKKwBcVCNSkJTQax7XUs9ghkyPbeF3agYPbTTzY4Cec",
  "key7": "3of8NmxujzkHTiPWsoD8d4CatLutsnm52RWWiHGKuT7tS7AxvStBRJZ6ksm1WqLc89bcgXr5kvf4ugRv81yV9Kqm",
  "key8": "284XEaE1rhLLzNFZuvLd3rNHrxb7jg7dEKHWiJDVU5wFoYKzN1ZjrAvbfPea4Bny2bLdrooSX5T9uU6AgXKxQ29r",
  "key9": "3TgVzkPZXov4Ese9GMYQE3Frtu5d8XZdKxTsZBHBDDerk9G6Art6RgNKJ5np9ik85E8k6qvqZGfLVkkvdyw7HsJT",
  "key10": "57PbYRScuc4Saq6SWooGuSo2fuGbQsd5dBm2CAcdTzt8ZbCb3WXEQH2CmWnbm5CWARXANWSJibcnieKYkuqVJHCL",
  "key11": "Cjn2RxvPtTVNLpTZCfzAiEyh6fVCxhJtPrADD1daDvaXgt999GsYadCTyV2prcaFh8iuBkLx4PCXRswKxXBLDNK",
  "key12": "63FK3gJUyvR5eVCkCSzjhifExT3CHe78W7zR8MhNXjGezw1V1fyniF2gqzgPmMKqCf1LWMJbYLMtfgQzaNtcabmn",
  "key13": "5zR9fx6rPVtY3XoPTJT7wSNtcqXsoWEHRvz1Dcoi4fyASwdqJuqpQKWiQn2o8jKz7JmxbpMpJBWDs4QxUX8eA6ji",
  "key14": "26qWS4VAA7QSpEumsukqGFj84UzWYipjt4BH5qQgaAoSYx4TdopdfvkhyKEAQZxbrbnkHE5gFx2xtdXANbdo6eeC",
  "key15": "369mnmtq5zqtWfq4eMPhvGmnrSmcm6zvqSgnJguEe2hfxDV1ch3bdz8bds8PmXBiuFDzQHFgBUWzxP94qT9Xc74e",
  "key16": "5AJ6ufhoGLbaJ9yfqsKrdwwWhyUhsTrhxqf8pN3pewmUciCLtjupjyZzA8jUr5PST4fRaVicmn8KPLc2BZHYH6jt",
  "key17": "5SykSZNXiAjLkSTUyXVvSui8XK68NNtffSTus7syesdaZfb8qGBa89Qv1PNS2Tr5kuj2dgiQUSLHrxqy7f3YZdR9",
  "key18": "3muMK3m9YophRNm8UicZTRXqA8UevXCmLVrNNvZk7Riua17SVkNXE6PwK8W7Y72w7X4qGxevKymYWkwz9sZu2DGh",
  "key19": "CNiENSEYnn55FsHsgWQKMENarNV7woBvGMYpVTAExi3ZcF4RJGTRp3KZP2XUvMeKGiyPoBDPAshunVYp7bfyndp",
  "key20": "5bfLkx1sX6gZ9zsugYaxkfqzZwgAabHgCmuBRayWP2FcsMXZh7rgbuAzLET6hJ9fbU72A7nm8Ykq1Casgd8e2f9X",
  "key21": "3dBMwgcDznixP1zo9hmnNsS2QV2orAbJ3PBUKWLxQdp4r6ckK7vjZ7kqVq4hx5WHNyuT5yyXioJyNjYYpVKbr1AF",
  "key22": "51RpY9ZpSvB1yvMTHiXd2hgSEgriCPuozpSfAkfn2nQ1HFLV1qM939fN7iNbDaxfYsquWyUeiR21vrs2y88meRq7",
  "key23": "5FUBs1ycEamvwfyEFyAKhZvBDzveGoBvtZyN74Lja6y94BmesXw7uEPYfVn2Qt1NLm4cGPy6BvbuCDgXnimpK6cm",
  "key24": "2uuMXWMfxwa9Gsv5oWvDUHnDiZacGqfYB9ittv5PC5eu89iz9PKBTXvCNyvKp25mej5mxxfVffwrAKdc7NUVayce",
  "key25": "5ZGcdwpzto8xUsWcRQ2LpLevViagUr2WT3NE6pxSY2Jmq5Ki6LiwSyhZrcXXEp9BEMa9TfpCBCCC8PQpZZJgerzi",
  "key26": "242VSVKR7x3TeNKseswFU5iNyH5sMYNA9bvphkdfVehSfRJiAmtVw2J23MetikaCaUwvDqTH3jmPegXNNKYpdZrm",
  "key27": "3vTZdXPpRK69H8MLrwX17uu9LQRrLGBSbqngQjWSob8vsuAdD64YZ68MaPTZzRXasWDysUdjrvDv25cPtAvPyXbM",
  "key28": "56hkYbjR3K5AwbqafQMa3vPnwqZKP2we4CpVj6iQjFQV96eQxZXwEuyhzVBKzYNikUdHu41gULk4iNsfL4LX7a1E",
  "key29": "5ZpQBRZVx9dW2DiadLonnnsSsFfidfeHin6cWxdE1J97qRPZyJv81fyR3RRK9mDL3dN5gJwaHZr8pP4iydu3jiCs",
  "key30": "5oWGPfdpWQ8tKVrrVdui5Ng26eT667rW6ZXirKeVcx5PswvDUzRiGrqBc1D7rxrii7vCXtXSK39LLq6pGSC6Ewj",
  "key31": "4FoXQkgM4JMNLP2wEZUQaCohUvmX8buZNSNrgEnmB2FpdhNg9jaMzyYiJcUHTfo3ALmssujGMi6n7iSfE4TYQnb9",
  "key32": "3YVX2aQeSvESwoTfC9pBNJXb7xLSAi6rKWJLc1fioDHbRAAi4JzB9VHByKFtJBdCtVYqYmgQLd2Hdqp9juhVAsCY",
  "key33": "42zZbqAYSsEknTPZiKpAqfkFochJusQS1FdnRsosBsZZ7WhnqDqoHxZCH9TomqxjezJbfpU4nnGa2bC4z8GoWLAW",
  "key34": "5UtegNTx9WbZZqxmwtyCvX68cWQwEoL1MkxJcdMmqhpUAeRAvre2Cj2WPn2UML23MgGNPRAXoXp5gMLbVwoqx39R",
  "key35": "4LnaTGTo8hE6za1Vb3vdi2A8Vriuf6CEwPooNmnBud5Nj3XPdSNVnuDLrqpvoBnWsMewmmChDycuUSsgT5uwVUyF",
  "key36": "3j2NHkvVcC9vu5s4yJ8n1xYP1dwhdPEccneCELW52bs5arAiEQHGTGhNf8YXJHzeSbXWK9dGY7vPD5qfacDsbJfi",
  "key37": "4Mxm3wVDqTMP385YB9yiHwJCbAFns7jhWX2wTJBeEXhTU29Woqecck2fjsWZHnTknTDXEeNZFxaGNRQdtFDfDHxL",
  "key38": "4RAgoqppv6ZTQBEk26V3HPfQiZw1rePxMFC2bKUd54Sr7L5TySFFksuQ4U8iJ4bYGrvjytR3ZakX3ky2wdrXv3SG",
  "key39": "5gYck8i2YbRGAaokGDKqvmFhwxMW2iVughmG12CpQy1fa3wpoDLTswToXgqu6GfN6WvyS2jszZnEdPYWcDQnMwVf",
  "key40": "5ZX5zhTUFyvcsL3zbPZvq5wRRmjy297C2xGmSkbgewRVSuKvTuCq2EoBHnBVT2rppawFNXG9kPx1FL114edMzs8W",
  "key41": "63LiRQnH9Jg3mtBB9TJi7tX6d88pMCQ1uGkQQYDeQW1Nvgdtn7HMwJ3iUtPK9hQS2gA5xoeZyUoBfYvhG9yir65R",
  "key42": "2Dwe9BcJxAm2prKCmKXR3Weh3e9N51Fe77eQ1o6yGWnwCjTE8rsDYy9B88NQ8LPUiByTQycdTu4mSnjCn3NPe1o7",
  "key43": "34As34YPBy1akCnis5dBmJqoDwEGqFeHvQ7tQRVcNJTr9RP3cdiTf1Bn5QHSZyHdjRqJpT7JqyjwXo1HQSFc9DVp"
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
