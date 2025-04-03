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
    "55iDRRA5bkK12GTdEettYqcYJ8GCfBBkaXMT677dc1FE2BwXqrtibquxKSKi6HrNZW13jXAwkfVrhajATGM5wZwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53KdB6yVo35QfkBkLGqQ4VgehNgxpKauCJE9Zs8gzK5vSd7Xhpc2YGvDmfMZ4eJWw9hGPpXZsnFvd9rmgrQcJsT1",
  "key1": "4vJFGmodeCRMHU4k7JvbBmNN3TDfm7e6AYg13oiCjyaP75ksYLNH6okUApwpbg5Qi2T6gtSbQZeBskx2bYsvED6o",
  "key2": "3cX24LA5CqHKsZ31Vjo2cwF6vTVreXVLG5fdXpqrN3V7U5bm2QvF6AzwFyqn4tpuVULQSeCgNxs3vuD3KXjqtcQS",
  "key3": "4c8tsB5fbMNxjPnVhAvbH1XZjf956MsvtKSTkHGN4sAfvoJuK5qcZFaRKcHo8NvXv33RYAvkQa7pXaTkE7eqejQL",
  "key4": "2geGmSj7X8scL2qB9kXYWyE9YfTHADc8nR6RZUvoPoV9Zme5RNzAqB2Zh7N1Yjn7pNu9o1icQbXh3JbsS49daRwX",
  "key5": "2RLsysecBmD6xQqAP1FbZLCp7LKrCbm4yWPm4fPDyBK34iWMsxsMKfM4rfSdD7J8CSZvrwdmpeJTQh2JZhq3xqzr",
  "key6": "c3QZEEtxwksJLPqu82trF5RFR5WWrP3U4WNiELUN868JeCLagoENeZ4aUqgpS3ZHP6H3QrbT26j25oAiRpdP5Dd",
  "key7": "4xqv4fRZj7TUTwVhtMzRwYxKZWXY7XY8iqCNK52fNrb2ZHaJwS1bt9GJSUwnA2fcX3dto8WhjpgfUkbWaykQArLp",
  "key8": "YBKwtSoJvuJLpjMJENurWD28A8oNp6GsgDayrRgNPTadbEvcWobshnQwhv5C4mxcBXjnu4w2YBwY1VncP1GKb8X",
  "key9": "4nJjHyuw7Gts2VMjHqQuDENJyX9LcDKzR2UboCBeKo64fHdiNHSreNP9iuhMMGHQKjxLMjiM1HLNgnVEnRN3G4sA",
  "key10": "4s6wdW89MD8EAV6C7J2gpqczhN7aUmcLUrYEyPRSk5ycmZSGfJyUY526M9WVPWaAgcXnCpgJLmjDKgBKE9WroT48",
  "key11": "2XKHpfzpetp2w9FfhTNoJhhzCckUjyPLVhELnV68Wc7eJ7rr5mhKcPGPps2FFKf14VoyPZYDzKSHuGe31nsrukCn",
  "key12": "5AUHFJUvA7NK14gg1msVSEyBp2wUWGC2dYqM7C1QEEtWkBGCHEwfuSXNVh3MRfnWWsPFxHzj96RHdQGNA7pjXcVR",
  "key13": "2Zp7r48b1hCaS7kQLmGW2qXHjCFWBRn5xy6g33d7JzZHauhNQ47tSj491TReRgp78JKjA9ewNmiyEhqx4UmAZ2gA",
  "key14": "4m1ikffdhf1RKekaZq5MB2dLTJhHPJf5WRnfhUtCmsfgRsMMSEA8ozaN5mZdsruwUsbnrfwu3pVGD3BABc6LphH8",
  "key15": "5XATaWGmA4zRqi36aYQrAvVRz3YEMpZJkYeEseJ42V6xDJu4tzVCJEaoX29r6qEmVCWgW3tMRzYQDknu2HFbTTBw",
  "key16": "2c6hcKmY5WWzoaam9bMFCX1w7xRzaZ34gV1x4zXDBDGggcuUvuuve2nWcgqSHYQJvVyUCZ58DEuZJPb4z4Udea1",
  "key17": "5kiH16XkPhHkFMrLcHTtBMEvqNRDE7dvR8DJtajkEchb74jzk7y8iHr6X91xtvYuirEh1cDdQtqbKhLZtt9UF29g",
  "key18": "3fnNupzF4vWfgqz12nH1wn7s68b5ddN4WrixALqmb74yUGTiwDm4EF71jfUUevhqoBPmjWhmDCwEyH4jjdTTzVCy",
  "key19": "4i2YpZ9xfE9oSwWXECBh6LwsJ7r9FiADEQJvFHvNGzmPuR6fd6JpD7TmqTS6EHtc27GRZbJuzgZxm2P59dftKFma",
  "key20": "5RjUSWLFysma1fgGmL5ixYwkdLCVw3EFDvJgQsC4qmudTu4FCSGjNhxX346v4pSTxhN8tLMGdTNXFToZ6XkKiHdr",
  "key21": "gFnQ8cVjtpJ5qYxaC3yuC45qt9nKWMKdGQ6iL1pqMCATpso7qVUmjoPbQLcy9yecGmG1fhpASHUYHCD7g4jrvZ2",
  "key22": "61XiX5B7cxpQHcYQAC7F3jvYjpDq5a91EvMv2BiUjapPrfESP29618Fe3DWsF2xK1QDoYWLEKWEphMwHBmvJ8wk9",
  "key23": "2tSTaxpgJN1bwLbBc4qzeR7NyxBRjBsp77uoMuAPAXCYML9Rha1vVS5uEKwT33VwQcfx123FZ2DdbhFz8mKbhNJa",
  "key24": "3ZmC9KivQMaJjZSaSMGhtYXYnY79wgBwfbGqqsiDUzfAXn11nBV7KtPToGeQtPfs8UjQA5KNEL6epWRn5Bnx94vt",
  "key25": "2uh2RTQtFznLCTRNzUruhfvCtp4oFcqS4AJgymUCcZm2BwAGWqut8pxi34pQwKDKZxnNAHUnDmaHcg36qZPCe758",
  "key26": "2HXQihnPyCGYphy5gwukFErTnVYioCbcaTwaiDeW3myTd4qmdRW3PPEVsxmF5bZgRekfja5vyw8zix8Xr5HbB1VD",
  "key27": "5voJD78ErxxLu6dYRVGcPA9enGfzNcziKmGQyERUNFUTFtnJjNFPE3nWHrp3cToVd3wohdN2hHAfvbX9R1GZZ7JX",
  "key28": "5AhX8hY66n5KKDCMc3jHuNCTmuQ8pieBa7xX27qLzyUJEotUgg2kLMS95mDXAP86CF4PP43yQRWXfbYZJPWqWmVg",
  "key29": "X9Rx72RrfjRFf7PmL9CgJHkHxDzHKvv61t5q43o1J3Fq6BwToyduEvbNURgPz3MZh2oMcuKKgNr9hMEW5UX1p9o",
  "key30": "4NYBPp2uAktKhByUa6pwFC89pLCQMBLXUJUUGKNq9ZnqQKiaYfE2DsFxBGetVmFezLWKd2PsYzA5b7JDG1WCRVJH"
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
