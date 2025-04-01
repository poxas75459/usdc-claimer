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
    "4usvtkZbhDxseaBD7rR5XjQrqDwHRWmpiajNkyVPBSgjebNPj9Pvg5urfvKaHEx7eH2cnsqkTySGHQmV8iQAhrm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34b8g1cJhmZRW7PB8QNxQ8FPj5jWswC1H4apYpLCYQHQFVj7PkTta7bPa13UAkhwGyH69MVmvpFsXtPBQZniUhn3",
  "key1": "2Gtn1JCQ8x833LnsmgepySV4zmKVRtYtQ8mEC7TDgMRhqDjppiNKBvpYVNKrHp5z9e1h4CKij8UtwP1RvrFjwvva",
  "key2": "5baPtDG5N7RHYkhVHptTqvFvLoeQhGsWTqjPBoYfwmY8uMrunnvG1NAZqRFBsmejUEDP84x7FJjh1pmwq1LE26gd",
  "key3": "49otHg86nKaVyFxRQ5XrdkmSDJ96SkPSrqpC8aMXCaeLBPw7uTTN3QxBmnRRFPLWXcqP2VsuPNKZBHHCxvzfb6na",
  "key4": "4vXYZjvWafDXQ95nUvMtEhWEXEj1zrQrhgceLFuv92CTKGrNQxyBgTH7SFbR25DAPi9ruTQJmFDrTkKm569BUDi9",
  "key5": "3LuazWNfPrTNDh6jHSKhq75vnutNKuDtCxaJsDo8jhj95HQmSbvJWHVT72My8gHUTcR1573Z8cS1wTjPCmkwWxDm",
  "key6": "5rqaf7f5B2FP4DL4em6AT7iNwEN6X9sdrSVsifAXErHAcNEWSEDBEVidg8iNm9igtsJwgUFzz24sq7wztgaPLJFE",
  "key7": "4wfSYaadC6KzjHaxiLmWgpRs4SQxCdjbZx1FdEKYUEEXBqiW7sHUQDnHa71WohjUD9KotWoPTJHodBS96v7d4nPc",
  "key8": "2EjASFugxcTQ2SyegVxx9eR3opFf584JeryDahuYd21TTFo1q4edpNxXgBrZbmcuj5bQUV26aKVQWm64Fck9AriY",
  "key9": "4uYxjwtFrbzWVyVLS1tZ23NdRVX8HPUX3sBV1FyRzV5MxxJN9ZJP7VfhEivZzkaRcRhcfQqTKmYZ9kmJGWtfsNdc",
  "key10": "4EQkgFSdc8MQeTqwMAwg8WUs7o9tFRWNHj8ZBxU7qyUnAnLG5BAxNbi8bWqox67dMpcUjM1oV6Vd3Q6bLxmYZg8L",
  "key11": "xVDXbvbdPbagXaqbJy6QeCRm8kqDtR8Gnvo4HFBASBe2G38oJMDQmarTBrKSS54kMiy6szMdqo3odP3UNgDrNEo",
  "key12": "33MXPJBKtAJiiB5MMgbJyWcUSHeLCQheVrcaveuyD3MyPcHiuoYVpGpXkHRhWrGiu4aScM5fSnQ7vyy8nNjfUHV6",
  "key13": "5CALPgRjpQYocRk3Vj38sXNrCwNvsNoTwMB2PUejBmfvXLVf92TseGtXDyLZksdpfUMjpgW7AE7SmfjRRqzZe1fy",
  "key14": "4g9hLkXMfmzQ2EH3fhwCq2j9xzjtyEgk6n96TQEGpqPT3Wq6MFvDvH1AvURs6pNqerauXuN4AxrZRj5aiG2J8Z1P",
  "key15": "5Wne75fSu6Nt5yRYn89LRwdrdRmGAzV9nFmhXQk9fQfB4GhZ5PNm5Ad2AiRhtWQSD1C2GAksTsFmuFXF2Xvuru9f",
  "key16": "3WMcJkAqj9yxMpEn54tom8HmHPapDKBTBboktA5idxxS2b8i14LCAUkWcBHquXsSjFJYjxTvDQPEnFWb2rXsJX9t",
  "key17": "63xezYotvXYqcaG5NwZDKWYZw8CRMP3BdAysHt4s2Zb1EddLe9BubHyHeDKAmqmaqFYpMWAkLXiTCCJGN5VdH5eV",
  "key18": "4rY4BVPB43TJ6dZzf8FfpCxmdvTVrPRUyJp69pFz9pPpcKEc3UBXLjtg3kK54mYeahvHwWeb5rsiEAai4UKYwuL2",
  "key19": "3cu3J7QJehyoAA8r9F4HBdAag3Sha4nudUxUAY7fJV2ERmN5FBLqK9vDgF6vxNxvxsa5epcFJRn8pq1RTnVagFeU",
  "key20": "5ofPime1kPpQtPFBh1MXf6W9U2FDmNe1ugb3rCE5yXKwCwHvZdXcQg323vDTECUApsjpX3JARwtfrPjTNBGKHKQK",
  "key21": "4bwHwq2EWyrGQrXEc95FLrHeKDp6YJEH23sn2vQrBMWnACa1yr3gj5kEJxTj7fK8kU3mZ5nsbFgdZKbp9KCzSay9",
  "key22": "35kpzwAddVvvPHQvrGMjZQ1y4cfwKGdavK7tjWMd7r4n3Z2c8fk5sAc795nQKQaCGDeAPpLvtHM3YthmdQtSU9xz",
  "key23": "4KM6EiYNYtpEr6PSBGSZd1XSckfaJuTxGZcNJMNyMxAeBbSWE4mKRpZ5SvMCPG4rz8LsCLy7m952BHvWLzzMt3W4",
  "key24": "5Hrr1rP2Y23y4fT7Vt5XEZvdh5JJmPRrzjban6BhJZi7EY7rThxP4YCzNzddLxq1hUBWh2zLKyQctJmnCbTyts9d",
  "key25": "3Lvm9iBRoQAPAQR6TKFfxQx5HpWXzmmRxgUCsybSFrtcixZqiTQTMAPi74TAudcuGfZzEygeGH2TKxoUdso9dPRY",
  "key26": "4swadHdmca8aDWCKYBNpAG7uehzGmTLmDwoJrz4RaHYDFDKacDKjsNRRQqeBFLkMFrwfGiW7UuRKk5AEFNZFauH5",
  "key27": "2QVze1svEkRXHtSqcwWqGQ7JFMHjMZBoZsiWMRkF7oLUNuBnd3FBdV82q3GQ7E8B8aDhwoj2P2uqkVJLr43xQwia",
  "key28": "3mvTQi8ike5XU2CiavRqjHc5HLxKc65guBsqxZZqWHoj5S7EeGBDa6UKbVS45JHpcwE3eLmecurifGQk4Bz6v1A8",
  "key29": "64VCX7mTuXKrYKWEa1VwZahPjoqRgbJpe9mFZhDpeasTU3SgeGzry2r4svrucudM8VcXAdDVPdcWMf7Wbz2JdvUX",
  "key30": "3kEB9sx15qS33D76AkuiDa6bVfKR5jkTPeTa8RopGnJtJbN1q1nSw6SrSKxHaMVRKLeD85ssovXVaetJyYWkedU7",
  "key31": "3BYXwtZ4kKLnHfDkwPLJgVxKd3gR3iRMNuq4M23FgrbPPKeWTYjQjT3AeczLDzS2PEa2nN8vHVNdjALKJiWTZgsF",
  "key32": "5XDeR5nBXv6Bxchq46D1Z8wbVrz42cQPPLazSHrqV3LFMmVps57bSvxXBkYc6jUk47YfFM1XtzxuKp6EWxuqsNEi",
  "key33": "3a2AshnxLftYggRPhY7ADFT29m3Wu3WvfBugwMkSqcjHqsuGNj46oBSr2PUmXVXRGzpXyERkZ2AY2vjuWcaRJqeW",
  "key34": "2WYD5E5NeR31FxWDZd2so1w7kGPWmGizPTsaoamNeb7bgxKAAuCS6BAsg4mPZ8WwvT3Pt98hw9maasW9qfgRYYRs",
  "key35": "L4XvAEvQE6Ursa9ixgyds7UC8xs3CMyKwAeBfh4Se7PMc8BKMKQ8c18uJhED1wMENs3ZPR6YwzJTgr7EZRawqPd",
  "key36": "3TeMGThom7dR5tLkKzuYLtA7YxuV2LWpveQKJbVhLztjEHpgmwhCRcjKhwEoZV96cfu7Fujyv5mbig7zFSU3DS6V",
  "key37": "5b6qghvEcZ6EWES9LPsLLx36SyF4751n128tzs7wsBnEcmbQ3cLPpZ11rbZMpQeE1rJ5jsrxqvUA6E4cNSrE7XWp",
  "key38": "4h2YtH8UxkzdHkYyFKAe3p73PDYphQDnEZpmiUwHuoh7EwHskF4fVpERfFH2TRxLM5Zs5sKSdfRrFzpu72zUjnJL",
  "key39": "FftDic1qEaV4qU4fJyheZ4nPaeRsJFZpixMzLb1PCkao9sFqSaRTcxdRRZ23zkFyfbTHtR68XRtyDEq5YHvvvSM",
  "key40": "DeDp6vrYSgt3gKVFAqGFXnzXF3KJDhe6nccYsVbMPnZbC8Zm7ncuU74qMZZuCy9Qmp6qh93bx2ZHTHXQ2Hn7rvU",
  "key41": "4XaWcPpM7P8SDvYfiqC279KGiAZWmB5MaYv4fFNszHpvH2NJvp5xSLK1VssRUoHN5aHFj6ZyvgVobnfhUdecz7ZV",
  "key42": "2VNQ2Dqv76CmBi6XvauzeEU8E2qftJunHzBeUymQmQbj9hbx9y6T9wxRLKtiy9F7e8kJeKFS6km6U6TMzHP58ak",
  "key43": "2Ejkid8YUymdyyxvoZV2Mapz7uAFoFTvXygvLWpCazEQzoWaxFbDokkEZweyEy5mKRHWyAwr24MSwekTJKumvYjQ",
  "key44": "2KJH9jjLmLXJ74aPcYqXqi2kqNqxCVTD18Fq5g9qV42hdDu8f5eLDEtXENfPH9oZ71ny7rXSoBhSq6GdaMeQXwHG",
  "key45": "5eEVngKKf57uXeMHsqZQDjMHFHtgs1KSQ1AiXCZszhkn2orJdCe7uFXxRf46pcWLYXqsCm14LivUpXoGQAoQHqn3",
  "key46": "65zt6zjpYcpnf8Jn3LFWNTRWAU3Fsyn9MNBqL9V7ELKgcySMqhCVDeyNbDegKYToNaLMLrie8QQQc2YThKwTyRbi"
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
