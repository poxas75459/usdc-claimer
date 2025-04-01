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
    "2r6FBxYnfYoLHkDy8q5tuCLdRatLFkts4ruLzvHxRd2tJMQZqKeiXnHDhtksGDw2zQPdeVgving29p2HLWKPFpkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hm9YidTyan55z7LUrW5ErKo4FJx8FkxwThM1VCvtaj2ooKirRXjS12UuZku9bCEGhsUiKonekZ6xRLJoKS153GR",
  "key1": "KGgEj4UoRSXWEcRE26nTiH7y3yMh6SGNV9HcKWpEabaRkfNKjzeSXiQyEyRrKgFBWFBWHmzW2yCPQkZMK7zbASz",
  "key2": "21wLDZX1nu5D2vdtznpFNGh36mZWRTV42eKSo5mytF98yyTpb1PFA3koJeF49rGQqEf4LsBLSfgw1AjhGuMAngNw",
  "key3": "26JbZiEFnGGpryTpSJg7FQ9uThniV2DHSLsBbUgaDGm7LX1yrjuoAmGzmw6dHdYxnhBr8TbJS6Ygi7haf5mDrZMs",
  "key4": "5tTrmmJUJMm31fGvtrLjYutz6GVsKdPjXcEdmSkfSvSZFsmCRFXZWQyZh71JQiTfqXndjw69GawUALyRCwGxgzhd",
  "key5": "45dpbp3mNHjrMU2shiCvYtZZCBfDDjDSZLp7M1iL7usr8sWbnj7wcP1EDRL9dZmQdjt2ycvQB3C3UMwUJkBXx8Ct",
  "key6": "2ZNToveMKXytrXZZUZ9VPdWkr85VEzmwknu5Lar6aXxANrjSWGzB6Whwpz6ZE5eLVJzGLGPWCUmBsdDMosf64CTt",
  "key7": "3szKSEea8VPjySuFUUJyR8YU1bvMNCK9j63VR5h8Sa6y2K5k1rd9tUttPAufWVBqFQAyHfC8A7D3bda8Q4cL1e4Q",
  "key8": "2vzhtoRcodKcTtC5mzPe1GZDkpjpxsh9BpLpDhw82iuX4JEg1Hr1FcdCCCNAajgyhRAx5ChkWSZp61bSpcVGCYFu",
  "key9": "4d4iudxC9nLdKjvNratj5bFW3hUa22QLmFdGikH6Gqkq3AaPBMF8M2WiGk2dc6e7YWZbv16FHLC2dXpfpcT7qdTL",
  "key10": "4LM32FwGJS5k2VYBpRuvVfYVodVjV15vCHBUyVTJUSbb5Na6LhBevxMeaghXo3JijdayMSber9K5wka6SWHbLxiF",
  "key11": "4a6xn4P4QamwtcBMAwDvCiNfda77e48ftxyGGpt7zg8hSj8PjoN3xQ31GJfH1bPfLTgZphAJbUad3zsDTc67cuN3",
  "key12": "3mTsSEiqibo8xVamZmiQTijjT3aw8c8V1ykHDA7SfFyz2uydp9KkHG8WkUb7VbjW7z8oV7Rdd5PxCUASDwEUNYe5",
  "key13": "2jTrfroUg7rtrU3be3tpBymWBtNFj2ZRXWeyc5N5dSAPfne76pjWB2dB8BZ8Ayy23rV6a3UDQ4vnaTLZCk6dMQBG",
  "key14": "3tdsPoqrAGRrC3ogp8SFzKjiQSKmJFfvib2eZFM6Az5XPMT5oTvaWN4CsvVacnopZJbtTH7UyBpTqH72UtvgLeGe",
  "key15": "4reVSNi7aGTaMe5eMmVKA4bYLkYYPZpFCQsV2kFRFdupxFsSdFAHYUzgkjXyEeuQQ49UvhNGfquWqTN4HbYiZXEp",
  "key16": "2dg6q3tR1mK5KMwcXxMsnGbX5398mB2rBEgKWzM9yhg3e5hHBf1VdqdvxjbQNBizY95JkpiDUhnH9N6YAQxCbd2a",
  "key17": "5evrtEKyojKzJk5UAKdr2ybQgS8GKngbU8Kcz1divkL4SP8sA321GopmZKjgjcQYTkrPzC8ZkduyRmLepGBZ7uUW",
  "key18": "q5BcUkF7xiZqC611bPvanE1cRR1GY1YNATfALAXt2mbUMFVcsMmoCtvBNkFrm8xwdufeUSVNoyKHG3qUFt1j4Sc",
  "key19": "TcAe7qAdvpmvgAaxZN5hyBaSUVsKcQgJvksgaEVojtAQJtvptAquXKEn4DGUZ1YjPxDzKiwdEKJw8XJhu5rBHe2",
  "key20": "4GkeK83oYyQjqAgg4MavtHbjPo1rCWFFntFgF7F2B7vVz9ndDWX6bw6AcYYahF5CHS2oJrcXqARaFwo8kutWkk6Q",
  "key21": "61N2CT7B7nrko5GyZjmGsEv6QbGkGiqu9DWqGJs8is1VucsG4gENgojJTn7qB9mVBybiuqmRj975GRofMdj2hdTc",
  "key22": "57Da3FGo7HiPTriBiHDFHj9pd9ESEkU53NjA9gXqcDWBvV8zz9G4uGbgfGv9dSVUK8D4rWLtAVYBEuk9Yjzvi88a",
  "key23": "3DcxYxpsa2m8iPKmfG7A8BA6g1A66X6rtXzaSAfBe1SQbq8ih5EaekSoLDwTSyavXa7wjuhdM36wmwsNGAQAHq6Q",
  "key24": "ZUTdiiWbwpig37tE6bnV1BZFQMqyamd8CXjbG5pMNCKGZkNwWYsNUw6jjZDSLSR4u8NAxLKhLYi4G6ESDcZWuDi",
  "key25": "5QTxa5jUFNfp8698Jd75pwN3yCJNtPr6BSTVJLJgSK7iUJsGr5F8gkAa1jmiuqaa7LhvJqdcgdFzctVYx8V4DXxx",
  "key26": "4kW8hCr5ah7CcEBhUriGoiDjPm5Fijas6qmgaLSft4dTaTJupdoiNvBL3CwkVhS9RsrdqrgJ6bfiAgfmd4ABXkPp",
  "key27": "5FJvsfWG7jJqb43XZo9fx6AaAcTX2sWEBACYfgYTRea2Qh1fhC7xChwkWwZjN6ZMpBPec5uAH6P2VbQdguHt4Z8G",
  "key28": "2zR36jYAGnPQhM4JZnrwNoLvfQKeHrWTW9d1oUrak3APAgXEuFowPNjG4XjKSi2FKEm1ZrGExiqRLsi93i4FsSb9",
  "key29": "5SBTtVZikrjFepCj9cgquFHJNMszEm4JLwbbbAikPEkusmRuDrMQfKLZgdyKeVQ6ZFH2Z1h7Tnhns1BMX5ujQtXa",
  "key30": "3UeJPsQJ4roveujqcVwGD3sHPjhFsTohmeq1f1sf69gmGuEw8BLwdRvY6BjZMqa52astPWHg8cfitSk7eLyXvund",
  "key31": "57qtiC7H57CdMrPGhPDgEtYYZFjaCxrbSTYJWGfKD2oyWHFsCYpwbRLPxYW4GZzPxrb1aqvPGTPCjUDqrwwKi38L",
  "key32": "43Tz78cxd4Luw1ZLL8MAwW5FpqBbXrBCE58o3w3eVDoGKqN1syd3vJa9dhDV1EKFNjjaTJ4a6gmnAApxtkyW6rox",
  "key33": "2XPS4C7k9CjipZN1dw1yEztdM7zgSPLWVepNkbo9tRGk1DSzQ8fou4g5GpdEi1ycytH6utBMapoLf3KqsUbJX8ue",
  "key34": "3zASCvtNvUssg5gYS6xZExzgCG5vhPm2yekdagafRjiuoVpVAHLbSX5r1Yn4WKGa1GQHX1inKc3R5QUn6nE6Vgys",
  "key35": "2cuS6zsz3Kj1Cse2q34QQELmL8kqJbc4X18i79YW88v94Gah6LKHuPs59WsgYLDKwzmyoQLdPR9ZMyYJE5SY885H",
  "key36": "2sE6Jwzi1kEVrP4obrPjxCk26e5wn2c9XBCToUQVKQBDfwJNuztpGNMBRQQHCnQCWSjn24NT5emKrEL1uSFZJMQW",
  "key37": "5mg5EFKnZvX4xriDd2iiuYTQkBX7LbAr3Xv9JcTd9SkG1zcTrsREzuGTVqPAHjJb92JA7aRUyJ9MRoz7L3UaqdBF",
  "key38": "5dq6GapFymETGa7xmZi3yDnMXGD7rThszuqJGWYMrQgGWuzKjRjg8EoWWVD9zwTzZBf1FgAYne5sSiB1oSzjp9N2",
  "key39": "3dRqMDBzDqns4dwoFhYxtCZRxHp7etS1DGQqLzSRB6hCXmyFvY2eEiQVk5k9peswQJjqjHJppYGzFcPncPXJprMj",
  "key40": "4agAQbuNX8gPgtquuFTtS5SihHncE89d7EHzJ11c6nraiTzQxgkoheLdULx9pUnzAMLLHkYVRqpcEiDZh1wbAJWv",
  "key41": "ZHpvb1RZjdmUJwnjURuaoo9eF8JPbk3zEsXPXnioX4YvsN9PAjB2N4w7WLE3puuKz9KjcSLYktBCPJKjPnSsL5z",
  "key42": "mmwe5CfAoPWF7g5bMiLo5LqvZ7R4KXpjM6j3aQzrfZX7k4WY94rbrWMzG7YUBZ3EPjwTEFQAW398WzquqdiRPj6",
  "key43": "5z9usoqU7SrKmjjx18xJZd8NrmvoC8ieTSRnzCtwig6XnrwiCkvNDJ1C69PwZxuRZLyEGRgqquR3PZZz1NViGP8Z",
  "key44": "xdNf15Sbti8rb3LmGcG42brKbznzmvDUoeFTEgPazZW6mgTLVf1Hi1VPNpz3MvZxTESBZbWFayQXPMnEC2sbQ7g",
  "key45": "519kBySuGpVvzus2Y9W8AQQ6Xve8FpFwwoCC6yKzpBZX1NpLL9ZiZq13QmmjwWpArrufGAqbNgHtjJsqZXNeMM42"
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
