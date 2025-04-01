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
    "4wJ7zASjCkHhJeM6TrXSVhYQSZFv5ofz9e1xGYFNNuJ3Sb6CsU7Ui7TudQp4zZNVwFQMXw5YWA7p9weNsfBrU5Mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gabSSebZB1W7A9nhg92GAg4wT8jMQXwKzffShxUYa2NKCZRvpx5dLBVg1MyxvA8uVcNSGBMWLuS9eeC2cMiPUs2",
  "key1": "2SwnQaixYGB4NhMSPgF9njk85KHLsCf6FdPLtcPCmMeMRSuEHKW3CohHS7E7fqczJt9qJChT9Y2GTUAYirMrokkA",
  "key2": "3vc5kH5W41PA66i9RP42wH9KgdkNUVmFbYaCsHTR7SEfTcqbwqE1ruaSFQtYvPjzmNFwTkEwfx1QTWScXqfj7oWf",
  "key3": "56gYQmda7LDZb7dVhev91GMwgXf9dyTp2GjpdmK6uGqrV2hMxFw6M9xkQWTSzzQ1PYGsDjfkd3rGH6DWoTWaGP6e",
  "key4": "55kajYaGtkZq8Jd88xQwH3JyhfvGrZ7cF3V7Rusdb66SkQZwmU3qt46qkWWTQPmd2aTqs4R6MmjPuPZkkxL2msyu",
  "key5": "592mDKfz1C6vK4QYQjRgC4VZHY18Ygz7o9s9XNUe4icR1Vbo59UH21T4usKdw1u1bWGSSiM7Tz4BmePi45ViiqWf",
  "key6": "5AFXaJyWhEjQ4c5JpJVPbvoRxtc1PWmyJrtZeSmnBqoSSW4a67dmdJtEeTy6UQzy8jgc9pd5XHMsqr5X8bxq4fn1",
  "key7": "3RJKUNvuKRPk2QpU2KTfR8YAhobm7pnq2iBRAY8rHRtZJNetxg1ZZ2SMA7isKQgJs1xjk9Vpj8E2gfDsvHeZpDHF",
  "key8": "gC2j26GFLXRSFoPTKbPpCRkV73bhiT5UjNJXqBeuvBBryUiueBFgc4pQbkvNJSChY3RzZr2vsj5zS9Aw67s5DfL",
  "key9": "5ro287DtRcXimapUxc1EdrWuMuRzpbDwnLz6b2F6xdRFK1SoBVM655K76JcE9TPu9sqaeNEZwaNEoY9cipMsTLSs",
  "key10": "52YgH7abfjLLqVTP7TkohssCwedMtFi7o2HEU2yxnXMG9R6swAp3REUQDfn5fi6ngF6z43N4TQPYB4ywBJr6QqeC",
  "key11": "3ckMCYjVNXyjJRWFD4sxgiuejAaj5DET5TVSpFdARtg5bwvYLZZRdevDannRapJAC91vCNHLBpk9xUbeu99r9Mrf",
  "key12": "3LwWornaUft1JMkW2RYC9HY9HjEWanxQ7sUYxj3zN7vnCnLzrscx4LQGZeu2Wpu9BHdsKGJU8u2oQQnvUFHYeaYt",
  "key13": "2g5wxnXSwTxj6X7e3qAsnNtZavwKjnZ6fRj3b7P973hb2J5uceEvwpk1iTx5Nb9AgpSVMSLBGbPEaGs8zd5V1bb",
  "key14": "5awsy6cgyVEN5s4kmbY4awJXYmP8TT3ykc2b4qDYpjL2QW4AnA1JMhDkKtzwtYBkS4w8xx1GBbeQWH793CqthYXY",
  "key15": "4FV4SLtow2xycDSD9W5GxsVRuXvk6ixHFBDpJDnFGZyvvPoxiBksfoSjhoGvJpfGKyH6og8HWG9FJu7aR6rne82k",
  "key16": "5dbB1YqDbTH4MYF1YHV2bwePFLmHbYibkBhK6haw1VND2BJqWnkQDiJgQmoWVJXRL4RKxSm4UgJSEvfioWmV8xr1",
  "key17": "3u59dim8nutUH8ru1B16MFM8zDFfMyGLoVggrq41mWsfQy9Z4XuWCAk2mzZ61SdW3DQrmrnUXV93AYR3oyn1Zwok",
  "key18": "5w3w39v28UbvTfsC9xnXBcUAwNRurtH2MNaVNYhhTsGAsbwZodnQSuoppcPQDRPs5wY6mrvPfXLtLvSM5JcafV5d",
  "key19": "4A8rLVd5WmkUSKFnrP4zVRVGS4HVW1noNh4rKf73dGkvrTd5YJcjhsv1qd1MtkmnKFgT38uFx9uhWJKxVCxiAP7t",
  "key20": "2JfTkyQnN5tyHTAWVvFBMPE21s2eEzzNTqhYHdxZNn3ox5zkS6ZjJW3ZXnyaoDgBsKHuR3zGqRyEzVpdRw2EeN7e",
  "key21": "38ygAsmpuWFrmEMDy1XsZtQqv7eTWbjv76dfXFRBuywdb2DQEVx2BBT8KbVfnH7GdxZ8CbLB11FqeGTDAoFK7vty",
  "key22": "2yLUBrEmc6dQeApYFeam53Hfu3DTosNjTQSFecAVZZZwGSRDQCEhw5ZWR2hJAriNJAYzLRnKYTmZfZom8G8zyXCt",
  "key23": "29L12DhHZ6BBkAHXfg961WioqxMNH7DgsJyuujLqHTdr5WtR8eFYqSxKD4FYBUFxqqkusbDFXPL3yQvCXzAE5qMN",
  "key24": "4ZeUsryVzYap92SaqjaTkSHeo54Jogzg8QRue52c1988RUCkoTAEEqZgnGbtsfseXEe1tiT4KLqVejHCBpd4Wahm",
  "key25": "2Xe8q8Nc2r7FsFSM4DMfz7zofdx2YhuMtGLg772xt2ocgeA11hsmAaDyYQ1DmgpbWH2P2GYhJ4cUdbQF29myroSz",
  "key26": "obuidrEFmg7xevWNmTHYJqpQ1VTgMRzNwFWjKbkLa79MzxNz7BWqUXJhnTcYZzVQjidQzdQjw6Ecfbf7qkBuV7L",
  "key27": "486PnRyyaphHi8wb9e8ipAmGho3zAipMDcE9FMufpMeJc3hN4LK1WPRj5BcBXDgRSNXZwzJ9YPLqHAd2hY9fUCbQ",
  "key28": "5gvAjAsSyvMQ5aMkTZ4NHPrjbdix3UvBmre5NJeQeMphs5ayyZ6VbPW8JDgvqrVy4z4gW6YuiHkzodPspHv9XMoN",
  "key29": "2GiiVRVFJAC3NPbmi4fQCndKWtJbdvYayENoLVkt6XSzMogf8dJrhkFZZbvpVUrrcs59XZcU7HoVuCi3Wi6NSCU5",
  "key30": "2NrojtNMxto6pNdPKjmrPrjJxHmcvhqoGZQWyTrKvU17MicJPLZxfKcPdhHZW7RrEWQ86FABMBpQDti3dGcBZ2RX",
  "key31": "27joUKxqHxJvoCHbNwJSbBTPs8xDtAT9UCfevhbHoge3Q1dNPvVaN5Rtm6rCDatLNk9DYRhhwssHsyHTYeFdSBeH",
  "key32": "4Mvxqu5Ak3YG7mnosZWP2SmWPEzUua3CBzUowcuibV2uyd4HHAyUdTPt329qGKpS1Fj6Y8BFYTR8MYkJKGgRe22h",
  "key33": "2GtF3gm9JcyzVcGh1SgaDwbaSrCCdQGCpTdR3P4EhNmu3RJTcP1u1S6QCV4P9yYGdW4udXacL5yW73WoSnzY8u25",
  "key34": "4GYfUUj623ejEYXyi7qojvHBhx7TQ7xjs3JU881Za3mbiuXfmzVmbd2xp7XLgD5NK3s7av3RKq5faAoCeefW1A5v",
  "key35": "4oC1whVWEFpQo8jV3P3H9mXTfv4uDgvJJQmpDKcYYscGHK9GTxBHUG3GRMeYFgFf1G25ah6i4YAP8WyTGXsdPk46",
  "key36": "2dXMwTksxd3VZJGD7uDjaxCBNynqWsqktFSpcr5knD3XU1VqwPsXU9FXWFPYSQ1ZEbkdsRmtbZqGkSSZ8ZJh82ve",
  "key37": "4z88SJGGYnzdWM2ra45qxEQ96RUuLz99Y74YAD78q8VbVA5kNjeL4czCju7sTbBvbZamRms33yfBAe9v6aaWq3nP",
  "key38": "62Di5L8zWCSPHpbZ9DYsGq8bKuRf5jJPktrYaxUUJyRVJxasxsgcbVCtovtDVezE1DPjCR8FvNnPYmfmvNgNj4Yy",
  "key39": "2LqUfKzUgkoZxHw7zwVJnq2EBopSBsnaRb44Tw3n7zqeBDPkuNLoGMeUeGAe5DashwndFmn5ufCwgjLFqzrNLPxY",
  "key40": "3tvCXWZY9xJgok89vo6yMPC9FZncSnZTs1iPRr3BeVhAUTKjsic2sHvjPvhvnGukWd4uqBG92T2ZsFDTiR2FoMTp",
  "key41": "uwUjeQLmGfidxnDyZBzK95FWuimxsBh19VBzQo7U9PtB7bbwrSDS5DLhrYy6n4JuMLchhdVfho8Z6U8yywq9heP"
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
