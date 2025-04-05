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
    "2JZPDvNtWYdEkwjfHkfimA4KzWVq1yKVpy5MGYKY5j4MHok3TqZFv39n9XBGtiyPQQSAUtCqzE7Bfc3Jty3a1No6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHV1n8rdK8UckBay4rRL3RzDoWkK9dM4QbZhWtJSsjJef2yH8hdkrir4QP3gM1Pb5yQxiYxR9J3cgMQMMPWcjfq",
  "key1": "4FrqtAd12GaNPp3LKhTGdMhSpVvGY7pxVB7fppMyo2nRFSCkjK6PCWjKrxaJ3hpugSDb7ojwgsaMvPqyG4YgLQw8",
  "key2": "35TRhAay8wCCsvRWtqCugcEZf3jsWfeXdEWSz1ynj2zrqce2jmMqpGaG39PvTeGWXqi9ryvUQDzXdjtZnTv4PbXt",
  "key3": "4qmRc2tJTaZCqcmcHPn57q4sQooGYzvCeqbbcYp6K7ikivTXJVWhuYPqE94PW7Un3oxinKjW7AESBeTmC17bu6ur",
  "key4": "3PKRgZBMvCsKWKFnJa34fzgRGfmWeiJhHZPMEpDjJP78pM2cGajqCS9VKn8rMTp5fUSXTHAHQQq1UWfsAavdZvu1",
  "key5": "4unpF2Msjsn5q27ccephHGNYQTpFjQ6RcRr7WSn3it82Py1ef8Xp3tvZ3YAWPTbHPqJEP4kQc9fRzRRthMp3cxMH",
  "key6": "23w6QUdMaKLqTviaTZAaXQpbCJ4rFW715Q9SfPKfHXtybUvsvMV6duy5Jpu4zWfDhRhXYXW1Awb8Nr9wotyfsN2K",
  "key7": "5f1x215bmKNKa5qUDKVom8XtzgDMcypAutQvs5L7iFVunYoym44ZfzXkvVVw5ubf5RxEdajhwt3P5vMzwAs8yRty",
  "key8": "2XPokwKaS9EpHqUxH4DJmBsYm8yqpAkfsQSj1TKWknTUd4SSgSeiw8Khaz85LCmakM6HPjnh19TdirtmDGFToi98",
  "key9": "3EbezsKfQCwNtVbqB6a7qY4Cr5z95Sg3RWdLUTr9AiooShNeea7fcta5YTpNXURFDGP1ks7vjonNB9ar3DCqtT9E",
  "key10": "4XWbVsqpmxqEUADJAUtvjYkdBH695WF2prRBZSi4m1B9tqNZuaBRJANxnSuf9HQYzAr4g3NfaSNMkYMPbHyQA4DZ",
  "key11": "2X2x2UTZx84avyjSqDPSEiVFXpyYqADuv2fRP6hpQzMwpQdbJx7tvJkGMawh6RJyGiE4FxiinwzC9Kk8isDtD9ru",
  "key12": "4crSMZhXWh6MBncBQsb7dMtPQ9XKuAk8x4HMKToAurrweXPqQxcCPpW6nFLuhsjipVed4hBNhtHZW7gcth9vGhKv",
  "key13": "7yK8rE6voo6VuFkabXfyZxptUG53nydXNhaQNyZ15aeXEiTBAS6QW6r5jHesXURCjweU14Wn7rkse5btYZJD9rL",
  "key14": "2QmEqBCBypr7LkckSWAchK5MjpZMiWvSuBbhxiF647S2CcM2bafxHBomFwrQuDpcEjHgmVdxfz74yKGfYwH2YmNB",
  "key15": "2h91ue1hfqF5onUH2JA7s96rwGY3SkpkfQDgwHNsK5NuD9MxTvcB1QhVxVyNHiGrRzU7BLgGEBLwryywVBTJByoA",
  "key16": "4NJhGLoHtQbTzaFZAsEaajTtvrr63pYxAkPqMg6mc2oGCd3gKsjw2esDBeftzX5j672Gz2U5FyfuHaXS5nMbLLM7",
  "key17": "4DWrF65a8PkxjtFbhVQmhEkhzJZgBrqTH25EjfBCCFiAmE6Vgif6EKqFSRiiKyijRhafB4gjFHhzL4PL2NcdbVkQ",
  "key18": "5coQjjBG7v9YHHkKW11K7VmBJnxEXQocimSAToCJ3nvGP4pwR5hNe7BAc9dtwTX2RSoebipFjzVDbGCW8sDStLoH",
  "key19": "3hV646r2cpb4UpwxXdXphbsLTkKhf7VtMb9CC9C7ET42om4XjtQUvJ6eyZn3Nzkbyi8ssMq26nK5Vh52DH1hhPxH",
  "key20": "4GAVJ9P2MyVwhQybBGnA45fqHcgtBBwobXyiyqbXQw4oWHcKsKV8gAanbZwahC61Tvu17wjtXeFan82oWxvaCKjy",
  "key21": "3wh3Uz13NpdxhNPvMKzsj3Eu76n1JrwVmG62UEC53jcHDrR6DYjNBANTMjgLrtqz97paKv7JHWx1RE6yHFHgjs5V",
  "key22": "2daMRFX3CGAGwGWUAybst9gDu4WBxFaQhL1tB2wDbij3LGj2wV3ke4jk3uviasc2w7mJgtyVWthMwYPhrY95H5DC",
  "key23": "3wu7MatanG6oJYtKFxSVrBQWQFPW4kMVrXde9ETWPM2R8X62ELRbsSuhvdpfUH9UUNi3hVsZvuBtbpJ2yjaz7yi8",
  "key24": "FWEYMgnshvb9uoK6kwTfHb6vDL8V4AK43RLEdm2pCkD3vFnWsem4iLfwmjGnpqLmpNECHCf18mkAsXUEnJ9uW9K",
  "key25": "3TZuTP1ZVqmthfmtugJcRrcV6BvGKYivHawzu3ECfS7x7v5v8KzJoLB8TAjj4cNajGwQnQiorNVScPyHWeUFs3jM",
  "key26": "44eRtTixS6xbQhBAhuanr4xaNQqEgJ6MmN59Zf9dA2jMqUVxYG7bBMJaGoWVY9ziDwgyeVgLx6Q4VKdosqsWrwZn",
  "key27": "3V8z6HkLuhghypZDgZsKJQXGJCKuzux5TUQSRkQmue5617aKKqM86bjN78jpBBSynJs4Gpo7tRuh15BGcyUmsxJN",
  "key28": "2QehspGmWEpkaFpdhHVefC9DSVySRZCkCn16AU81rkoggQmY7yrtbPjAFFSitDJCsz9fFPk6PESVVnhdELrSHYWD",
  "key29": "2jCVtic97tijEiGHJ7zDfoCw1e67kZAwK3pGzpqspoqVWTHGT266RxUFfukCvx757wQLQDWgX1hqg46JqHpvSHfa",
  "key30": "4UuwgbHqwfLHHWig7KUQ68pXEiYpcz9X885YNFDz1pXDrVWESmcY9UPZANrBsxJDAmerbLRQKijFyrekr54mbG8Q",
  "key31": "44nAB6RafQhjmLEuh6BYoQ5AXaCPC2QvggSCJFYWZ2oYxLZKbWNqWH3iiZVYpy1AYA1us5YaZPVEa3MeWegYzrvm",
  "key32": "2Kvy4qtMWtkSDRqforkUUxtjiHrRkKAPcy7Tu2vK9NugdZkdz5an1Yni8UPeyVLsGzE6HUnL58SxrjC93zvGhgzE",
  "key33": "3hoxYhNgmDVUNyrStZXyNYSLqkbdQGjHj1Y5Xf55mncyMkrhtgT39KszXmuQY3VmaFJe7HVkJdKpsZoH33WEfdS9",
  "key34": "2StRx2GVAD8o4dAdBLziYjcpqrbPCkzRak1foJtVLbNWUjw3nEB8AfPnGweqtDRMX9iSPxVvGLtB1cfun25LVzmf",
  "key35": "39D6LFa6oGhpoDhp9vW3HsEGT8oJTCBrbMM8ka7yGj5ejFhHvk9PnduKbrrP1Tt4Djd2kVGVfDuYPzYArGbDYetk",
  "key36": "3kHjA1eiYXncMYz6RYsdT7ftArbPJuP9Rb2N2PT5ZBDswYsChMrv3iZWRZxq2wgVxkKqdXKeiHCYriy2bR9HPoG7",
  "key37": "5bo5UA9pG9tFRLv4a37G1yifCrFKtTgVDz5mQRJxLZJK57sqkpwcwoFc6kmBh2JLEk1xXNr1VTonyuQKQEw4Wh2T",
  "key38": "3AecdLfXiPg5vjrirh4L6ABuWACAqVfx9mPtJWkAFaVBD5TUTqzS2hMk1FxegeqCqrbMn5U9XpGZ2heHfDhH3dD3",
  "key39": "3XKJt2qmHrQ2AKxQ3naoYzvs13oTKzQP7ZZkemDuUJMnjpQbFf4t43kLSguGJVLJWq6TQh14pa7yRqGVUaR5U2Ye",
  "key40": "jvzfgJwE1CwfvphA5xLVdWH4oLqMbt7f7DbeRtfGBuzMMcPtHfAPsRL4QPHxd1nHoCfTtLyCFazm72qsRcRANEe",
  "key41": "GaLzS5dTZdKqsZoqa3HXPxWXoaz9ANTUDzPnKBzAf2d69gK1586CqnsafdC3XQqFuKx4qAMGZxjACBSC3nDg887",
  "key42": "4AizoYuC6ze8dhb5hdjXYq3u57AAmbVeBabYTzyg3kda1RdRiv1nfAwyZ6s14gY9iJ7iCd5ieqLEM7sQZnCTHNkS",
  "key43": "3D4xZDPzniJYaAzU697t9NF7txL67UCnPZBcK9MHV6XrEWaJrRx8afhJBQoDMMEeMQWk6nohwxboepwRsoze8kac",
  "key44": "29vDWmWUwbtF34b3qqMRQeAZk1bUa25zRP4NrP51nAKrARvQ2jKqzLCbie9vVm9XbQqGnVazyQNFrKgfKDS34M75",
  "key45": "2x52pYq9cMuGPKRwArWzknQgfanRMDjdmcktvZFp824zGtP1nB287mYcvAkKzxE24msS45uqF4JwKE6YoVX4At3W"
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
