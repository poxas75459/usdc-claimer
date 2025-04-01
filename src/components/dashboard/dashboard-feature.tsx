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
    "FW5qmDLys83kFG8SurMHHd16hgp4pZ8MT5RsWuNak1EHioCfGk8bnZiijsPcLXSTTFpPGSyk2aNHkXiX5Y44tsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukoMqdKXLsXBLmLBoaXjKEYtsLX57f4TW62XK5aRkzVqWsYwhxHE12EeUWk2ghqGshtMXb227GiySWx66348v2x",
  "key1": "39tzyN8qYqGN3MMuK1SaZHbZEt8qzeB6dAuRWfYEEq87AQS1M2fWSSARCjrPH7e4pRZpFVPG6ibapwYqpUx1VM4e",
  "key2": "4Nye5XsK1aVJCdyzSHbnNfB6JRxfq2upyH79zLi45sssTNrL24oyewrYakTGS8BAnf6KW8VXUKHK4W67Mjvqsw8m",
  "key3": "2KbayJktu93y7sKQVsE84LVgQJ2pTkpL3PKrbW6mLxcBHV5UQpnZ85bVuc3Epf9LXYLsQA72PqH1Ukvu2puyY4di",
  "key4": "fzNWASJo4rPZbHqUP6QnkSCfVGg29jdS57R1MgYdFb8rw8MTqTcycuEzj4Jw7dgA7VvggzgfUiPM1FuXXtbvwYR",
  "key5": "FByoY1JuVLidKH6qkEnoL9dEojjBwAqFye1Zim65raV1CH5oj653JLo8bFZd7jznWpiisjQNeCx9ikNL4tnBeyj",
  "key6": "5Ds3gg787vpt9dJtHWdfUqLTpLoQ7GKRRys7KvsngCbHCAKTRMkL5bUzCE1U8WUi2TAuKDkSuLeB9PUQoUQEBnG2",
  "key7": "2jJBxMnaWZrobZpUCgzmAhf6uZK6SETk5x82cvuZewDQycEnoBQv8YyH9e8pF2NC7BkEra5HMhNkx9xcC79ucvS5",
  "key8": "2VC64V5KgDB6ggk8Jc1tegUzTPD594REcBwbHk2LgRZ9yxVjs6rvd3Gedzfh8wHhTRarK8XLe6ngWZ7ow29pAJEH",
  "key9": "5jtuGWSfzpVitc3gSd7AFxumMUbkZ3q4G7s34H1A1e4JaQndUBcXbyufRyBbhcdpn23UojxWNmeuHGKTPPRdUgs6",
  "key10": "jxi8vK5ECw8MCKjTUeYPtW5YsEyP91fQGHzTge86DmvuWBRcNCRdeEwt1Uyp9t8WkusxDkoaWkM6ymsAgQH1GX6",
  "key11": "3TsPoGUQBUot4p7jVkQEVrYeBAEEAJQWYeYRHfymPrm3nYE3KPWzDNWZt92fxnV491HXrFxpiTAEcMydV1ceeksa",
  "key12": "u7Lb71nPsbodAiA29zffgWkJSLYHXW68uKDyoiQijHuxZqmUSUFecvREjC3Y3fCCVTXyAsw6mJC5fBuq3h7bPLq",
  "key13": "5LK6kSVqxDeNHGCLH3U7SSnZ8iRwm4ypwXFhcTRM7AwTKRt8ivBJLxxvZZMud9FiqjbGADtqcjgMANjoic5rPSe8",
  "key14": "4nyKWUiWZidADEfyytxw5Drz817p7oCURBk3wH2tjba3NFw1Whn5emDHDLFKQLihyHHvvfmqEUW5ubGwB12qzpa1",
  "key15": "5oaQxadKpMKaWxEhAvEE9dizXEAZUTLYXNQ59sopBnEQj76t5GysVBT9T8jbptxBgjXQ7a2EUvDwMgK8iywmrnV7",
  "key16": "2HaqB87aWj943xHpkGHm2KWoLgnMEzbDpmC1Cio2TH4wrW3r59pkcRe6FCkmdsjvLaorrwJ8vnAjE7Shie9i7eKt",
  "key17": "3beLjXRTW8JcQ1UXSDGvhB5WW4trc4h4NzkFc384iB1MoUmydzVzMyibPhuD4NaTNL6xJyEYgfVm3jeiyBa4Ztkj",
  "key18": "2ePuVD7oKEK7yvshGcMDGrrGmsQGKziExjdaqFyUCLuBhk29PSe6am6eechqDBb2hQNRFtTz6npe3wVLg7iipfpz",
  "key19": "66ZhX6YZaNZe3QUvR9PfcSsu3CBr2Ric65wyPceEAno3HzqdobL1sfDcJ3tXddXzGPaZWmXmhpjgmLT2Zj7hgRza",
  "key20": "3YpcUQTZYHv5MY76H5qPNs3dGcTYGvfj7FBsTE5G9NpG5LMoB8uFqacYYLtTXQfjSovPP6ai4VevfkqH29jvUMzZ",
  "key21": "JfkRcUxJmTQpYTeEpnSC9vYFHxj7WwWPPLJWgjt6NLLTfTLd8X9AbxWFZW9XJteF94Szw7iw1fEmCunRY7XHzAG",
  "key22": "3X5PhdW5DRFXBc8hDHTeknRatcBYRVtqHukkjeJMJJvZZ8evNUJVUn9EKWTdERnTm5XsNhT1L3P4uXicWKXSm1uy",
  "key23": "2umDFTc1SkdkAbi8fh8FrjneoVRokGZZZxp4ZiWmpstUAuad8acaqrpqa8FWjAx9dVi948D9o42qUPDLBtEU2w6n",
  "key24": "49X7XSMw94EH9RRJTh6s7nveN8QJVFZdR2yoL1Wmsrp62WiX7EjrbaMvTmUt5LwZXHoAZDC2C1um9yv3df5zQ4R6",
  "key25": "3Wjxm4ZZhedMkRUK9gk4VSGxkTq5Q4BdJgyLWM1NJbuvGSCP4zgH6bpNzm4b4HE1bEtQUC2GfQDGcT8WmjcwxUfq",
  "key26": "4yS3xL36wm1hqGbdWsYmdSg2yPGNZAeX27Lg8S9D5AGzWDJQjVZVJ7kDgUx17ZVgh6PihPY2sMPaamMGPQRoYQU4",
  "key27": "2Zdgc1MvL44VYmaF6hzxM79CwgUk2ys42WPyBkFbcWb6Q3FzMxdKvTbvieY9qrfJbZ7otFHd2uKQ2xu1t98dFUXG",
  "key28": "392gZgJDq1iuQ1YXBfzKkFB8oXM3S3qo5dg1ESwUfcDPp9FrQECxSxC9893kExCTUKP6NmW7fFjBTbNwkssemPNA",
  "key29": "CgAqxoF6JD5WWDgAUqjDsV8pVJNtf2KS9fBBkVnjUJKRyM7Gfrjkh3evWAyG5CfXVYs6vKrKcKk7Ww4KQMnPms1",
  "key30": "5iAide8dPPB41K9aE2KwUiBJ6e9AFLz4e4fAqkct6jThRWW6bfpVbkZDxdf4PXzsMS2s4vhnVv644yTyX6LLdE5w",
  "key31": "22BvHoCcLgXrhFtppJoHKS6K3mhapSohMdX3uKktvskaY6uagLQ17rgJg9sEoUXt1VQyJiyWXkFXkYxXNBS4cPT1",
  "key32": "5i6GFv5XKcoa2v4icJ1E5syWotKw3fJMqPm4eetGWswNedtJh5d6XydfJZybBiCrEWnwPdibdXfWGu9hU97YdDB7",
  "key33": "4Tho2WQMoMhJgKEUCfpLugzaHFwMu2JjACthfSvYRzdRoVCLTK29fPTQ3wASmxpcZSXMWJYvhj9fYLsFjNrHqXRL",
  "key34": "4zFWxuAD2MB2MF5vWiWa34mXwYr2rpBx6HJBobhmg5Anj6e2uHE4Vha3zRUvTe9FQVT1TngiNn4YVvLcHbZkKHtb",
  "key35": "5Sc44SHoLNoVoQcFrqou4iXT3NwT7dqgR1ZaoTinR5LdL9bBBjwJm47UZMWU2CgoZFgGBrbSa4gNzpnqGS2GXvkA",
  "key36": "5MfbxNaVAunCLDwCBoninC3h8LDTCYNLjPCqUn6BQhSFGhQugGHqLTkuvkk5yGHvzRsT2xVLioBxsxCNZh7tvZW5",
  "key37": "4jPYysGFY1TgPVtQa2msvVc4L13a8vRjx87dbmwxAUymwgxLVatemjri1xn2cU4541trU83TGPt6VHhEgMP6ZHk1",
  "key38": "2J36ig5xMmTqcAQPdQvfFQtvH7SURxSrUvrhKUUmhiokno8dB1gaKBgf7uEfVQ85A8XpLWXkyJmnXNkUrtw5HRms",
  "key39": "2C3bbdrvA8Ge3vmuknqYVqXfaLLLKP2oVNN6RpYTPFyp9dfGhvorSyFpv3sz5384uAXSPQnSMHHiQm8eUAsVUyh1",
  "key40": "3YAGX4ryYxc8Cr3bkUGaUJfQXRVGYhjE9AhmBgYURXu6QHoEU1RsYF3FSP84iNF6cthF9UpEvkBdK9XsttKBdpDF",
  "key41": "5Mffd9DfpR5myGyWiWzx6FUqeH13fCxRgVdMBgqWyUNXZmrbSg3aQxNRRN3qvVugEuAHqWuiLdEpWz7YKTT9vces",
  "key42": "4XjxCLwYrn1rnDGYLgJskEvs5mpwQXNySez1jBe1QazEsRjLkWRDbYREd7b9bx8NbFTb7JtGKy3qrzCa8BQUsg2A",
  "key43": "3rsMbHZnCrKWhrHoo6pRoMVMDqUwW8v8BbUadnmzoERLC96z3fu5Hoggr3BPqiEensutJpvShHw4S2cNdPf3WMRc",
  "key44": "aRgnkz8y91uqZoCTtag7zGrB8sf6cjfVCDJozxznW1dMQYkUrY5XrJ3YPyVRQunh2YEs4jUiwapfpSDPw6tzCAh",
  "key45": "26HkWt3Aeq4zzPRLZGhxsi5eFevc9WrczNGxEksbS7bCmd843YB3JpvgpvLa53Djkt61ocR245zjHsGkJrmvYWE4",
  "key46": "3wyZLAvdp7fUiq5PtNFW2fw6J7V5BUhzK8pt3wFkaU12HNn88k8b9QDXXCzkFLe7yqRJbXPYqDXowBLNQrSVQEWw",
  "key47": "4bfXkLLQPeBtTMRbJYauj15Qu2VFWXydbUBzmQpKxZR5iV7XjPgePRFJfYUkVpztrKf9CQcfEybLVT4o7KhJXr8Y"
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
