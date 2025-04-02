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
    "4LGFG8bFF69JShWTnQ3ZNtmTdtpmnGKzRZsjpAGW3cqpYYnMS724QqFSQZJRthdBRu6Ry9suy8Css698F4QuepKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xR6dHzo7zREMebgifKKje8hmBB87hpdkZCwoqeHXHsuLhxCUmx6bsBthGYcy1yZpQzvdDAhwMCFAoFikJjZZfAh",
  "key1": "67ExNaLSgP4coLdRsC3JvpiDK5PFePMjStcGXc1BtwSuLstGodsSLmARRuYyFLEZz7Z2yJcy192FLSAfW78mxWuf",
  "key2": "2CFmV4JuBXwhFVQVevYRuAD2uEpD9XX5XftZjAJ7CqshsMJoLfMCDRTzRWEqMXXBxQx51hdvE1Az4xyAnUTgGLmr",
  "key3": "3jT7GC4uFoKZrYTNDevDYXoWKfBoacw9Y1RRqUmUhPgvLyMXP32hh7v2ifzj8VaUj9ptcwg3BfckqFxqsSSeBPAG",
  "key4": "4eequbYFwSYFfrHAfDtx9SoHSJk8YUyG9JWCLGBZ4GhEr7sZzyqGYjQgHiwEYFTYQr2xXNNTNV8oCAM1wybm1hT7",
  "key5": "3NC6TqwPJnM6FvkrCuY3KTwL61poManUg8wWhA2stfRBxYYg1DE259DFY14oBDHgMWfmWrLSVuFTnf4GNNuZejLy",
  "key6": "3aRhk5kYp6UemAPybmkw8zMj82DzpU17RKv9Tpu5iMQpM8KkzxV1Y5R13kNqCiTu87wjVo6QibY2u3Bs1GFe1DDK",
  "key7": "1dheUyrqFq2YXC34bQTunBVG6u6ZLmJvJStJLUs7KC4bmUgKRRgvb4kPbZ8ZpuvBWfYi5EM25oDjXUgoqhrm56Z",
  "key8": "2DQuGg6dPyxAxR5csKZBmeoSpM1un5PRdJqTsUyLBN8pX8bMBcjxWR3Wqmw41AdmaJckRRT1awa3BhQEENFDCQ4z",
  "key9": "2yFoTL4MgXQPsnCH2SwBJJn1AuA577kg33KWY7FH8RaE2GDWPEPXjBepvaiaaXs3QLWkf2mszLhnV5rcT4uvZRGC",
  "key10": "TPWVzB3Z3mZ21mYErnF2J4GtnLWeTQ9VFpwMKrjTcBUZzK57gzsVt1jwdNsrhZhU4wahfV4hQhWb8ghcnXLD4rs",
  "key11": "4yMRbG1MsdJVMZB34cBkVWgXYYNiKDpqxofLN5b81isuURZ2nRaQg5WPPw9MFsji7upfFeemhZ7Zr751fnU6vmJt",
  "key12": "5h8Zp6AaqFCY5YcWX52b37gvnHPyprx2acqUGh5eAxb6yD5zsef6ovRoaB5zHrdBUHGmy1MMAwzBikfspsp4AhY9",
  "key13": "2L3gp6DtFJTv7bd61tNFFrUnC89V1PjKxGFn8W9LX2N6Cvrje37n8v7qRUtTx71GTFTVgkXpqpNmaVZJg16EAwHY",
  "key14": "5yi1qK6m66gKxLK7zQG5yu75owksTZEfLWq9NuEJPDBJeQ8QSZFGL9X3dKT85zAQNghShKb9VKcDZYEEnEh5f4T9",
  "key15": "2H1BtuBouvYMVcJCXdcHZZfWLfF5YW3HRbRYEk1VnKtHEtirviL2jgAnW77XxZDtw6q7RqqB2bRbNi5xzmz6HUiJ",
  "key16": "21GGki9Tygz59AAd3Zwiw7Fkc7Ltw1AkcQJDx6cQECJxRVWAWmMcGcmG6kr9ZUCHt5rtcLXseuMcHyD21QEBih6h",
  "key17": "2yr86aJtJApJYEbc7DngZk7pkKRKQg6k3QpqeCEgKwbugD6w2WyX57GkBQyob8y9GZQTgh3MFiescib2N9MpH8hP",
  "key18": "3GpDiJWQnqkB8ZWvUtYt94tBhjVtvB1yCe9fdg1r5xPSpQZyomBtizKVqMRCRXZsK3VWzqjKL8x6WTPCohGiTjQ1",
  "key19": "4kZSHyXhkQV3dJVLJvR6NU7dpbUQsvZX2n3N7nH5f5TnVbtdQ7CKyHepanr8ZMjL9dPD7rZarwESPxDcN4KCZwtU",
  "key20": "29pbuMcuhAFBcWX1PNWzNwhyLC6eTwywGHdLNfUVoxPzCQs5oBFZDWhtvu1pjtKRWo2jrvWBNZJxHXynzwkpW3hr",
  "key21": "2X4Pp6Y7TYe9ihJKsFQLQ9KejWg1ctfZkiL1sZT4jjtMcG2he56ngirigyGeuDowupDw5hoCpMXMZ6EQc5UmReBj",
  "key22": "5ofErDSJqTnUYH7mD3CGq72EWZ2hnXBG2n5Vn43T7SJMDa771vRCfUn99JGa8wBnPHRVg8jJpUtypPHZvKuadmW6",
  "key23": "58nm8VqCSCEQeRD4k1Hw2q4XZnBNvuA3oPFHK4XPT7YptfM4PvJFzPibNkCgz9SdT7zBisJwEZ5eXMyCCtqjtqwK",
  "key24": "5ACrarQ5hCSs8Dk4kGUNfHnzn5bKEqCiGSun951yEt2UGkTADthVBAqNbsi2u6nKnuKBu4MiqiYA4LtwCPcL7BSt",
  "key25": "55ocet3a7GwKrQYkUMvEYWvFGC6MpuV1g13Fx7ZRSnMB2ZR4dyw117N63qEmsqkMQj2ahnfSXwLd2aAHTfbpsdkM",
  "key26": "3rfaMNnLwAAm1WFLcUpUwtfTEzRsEJ5A2uBKDoVvAbcwhczthzpLHGkTLonWjpXoqvE2Tp2uszn3CvAS359M5j4k",
  "key27": "3EHJoytczLgpdedkCXT7RFe51Ra5Ezgx8WwS4tBzLB1w2tVrjBdYZ8u8t7jVYbTbYhMsgrUcnev3KgyjH5YaZoLb",
  "key28": "4PFsvKHb6uLMe5QFXF6zTpxkZfQrsKvigoAMpmNxwdraP7XVf7ofJPdDEBGNgextem1yDmTzA5gsxvoemdvnybue",
  "key29": "2Dzjd5oRdYk85godqpZiE3VCqN9yY2PimigXeV4YCrN2scCmED1cRVuKCpRgRdW7xDQDjEamLzjZPTizyc4d8vyi",
  "key30": "3VpkVUaHAUdGEJasQkZWwr9DoUh41rZrLjoSX1hdX5toTwU9eVGbne4qeyZhdqguYTM1QGr9nGNitk4G3M21JRH6",
  "key31": "YgTfea3CsZFf4p1Sv7TxCPuUqyEQ3De6WRAKhTV1r4RRKmy5oYRMbz5j6NgSwKurjbW2A3SGBHF4P17B9a3eiYz",
  "key32": "eykcyCZ3YRrTekd9CSoaxwXe6krUfrXdmoiZzCMsQdPcxf413BwG9mwHqVE4cR5w9B6bMgPwWmZKu6aLzh43ryW",
  "key33": "3TR1JYEAScBUnh4fiPNi5iTnyQBL6UbTqijZjM5zmwY3ykquLrSSYudhiKKsaNHijecmHxvum2Q2YfHGoSMUnapp",
  "key34": "4yYpeUcwj2ByPYMRzoqcS4LHaBkQRryMNjKfrK22UpHeNsN9Xi3dbM5htgTZBPZnH89SJgqCYLFTYFFLSN9qJekj",
  "key35": "3yFUMs6ekUNGboGYzS3WWqDs4JobBxfLDEVpVAS4bAQ8wF122zrkc8ssX37Sqt4dT4ACynqpDBhUFTxQ5D91pfvD",
  "key36": "ZWepdbQaDcC4qSG3BrcgwVR1DSroJfkv3K7vyTXBiKJP5JWeb6uiivc6SAztEGrfPN1fUkvxoiVJk7SDWXn2mPu",
  "key37": "4qhonYoLZN3PSDUjHYkE8JMLmEka2Mhxk8WiD7q6ynGRk4GyyQaBDqRdaa2udTYkvV1U7ba1ofsbuTmk93XR7mGp",
  "key38": "4GdmoXAUbvGZECr5M7UF1QyavB5rVijgVYvfxMeNbkrAU43yVn5odJJr8kf9TDhRCd6AFhwR4Dg9CujSKjgNGck3",
  "key39": "NCjhYoWzSab49Tc3GcitecfaYS7M7NMogMEBsJr4HKTJ4RJvVRxaiGgXupBogztLbWraLQ5rDjYWbPzj3UDZj9Q",
  "key40": "3Sa3L9vDZQaAjkg6VjbxJAczpGAbDdv75Tuugx3awaGvcXA2vp2nzYpLsVm54o98ZainWQbTgMdGwWKfxbGtW6iS",
  "key41": "5ZfU3M5gxD2nweocxdBnLKgZwEwaVbbQC7pRZLSRKbBSr8GJ86RPdpWUvXB9Vuw2aW4yoK7SipHFX7vihq37moDU",
  "key42": "4S62jok1w27pYSLTVQfbKW1JBUpp56EZdUEXQ5voNp4psEDR1CZcADWMRX5V4TSH6HLTJJySYB3fQvAaUsrgWahW",
  "key43": "XrHnnBYStMTjXyHVtL9SDU3FvAtkQKqx4eoraLuSH9cbUESpe84XVxh1wnLzEGxNuBAVv2jMHRKqWqUp4Yw6PBs",
  "key44": "5X3EKEG7S2YfBMnr3oYcWUtYzwZn2Zqgjfq5jbAbws3McU1yyuHkM2EK6rBZhmuFvKjdxJNCgs3JbTFS2act2KSZ",
  "key45": "2wzbEG1fWwjXbmMCT83awMRmqchhBUGzktSyryj5pG9GvpCpEuAzsdgx3F9J2WSJJLkyWLHfpa8izkDhtP5D4Emx",
  "key46": "3mZCHm4t3WcSYQCrJKSQXjSFiyGjiLQbC5ymjcyR3UPLuid1rXA5xANGHFF7zQsntvArZucEHYwJEWispNv3HH55",
  "key47": "Zd172SPjUCPLZ8TaSusuPPcegnRCjcwqKXW96NM3G33gpv5pL3GnfF1ESXQvmbjU3c9Zefhv6dgZG8oWtiKqMtk"
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
