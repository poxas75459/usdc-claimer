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
    "TaAacF5nGdbh1bzWnP9NRq2vyAspXia4asE1opQtZxGYRRWf3wAtZeht6UzMM1xXDgDGBBudQMxXe4LQFPLEVN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4ybivE1KXZq9DoFvhtmQP6KRUsNf9HUabFET2cHuEv2o5hhXrHmfjoWt9KYxwFZ3wWHx4F95yJb9FCEdyTRh93",
  "key1": "2Kk8E4pNvZy7P2VRxUWg8582V48Q7NyRQXmowaHdb2PvfHxaKWqddhzS97GW35WrhMx4MRG984u3RkhsdV2kvhaj",
  "key2": "bbiq5az8kShfCBekFKwcL5AVZNXPtNsdySa6PDDpeGDLxWEmuQYqtFtUnWRpq36SqN14ExJq65zhxFAH6kmDcSF",
  "key3": "2oyFxyExjPu2eWx8WMwZGtwJ8dsFJj7ivk4dus3gdMDieZDVj7gE3DPWQ5R19tJ7UDuNYiohJnjAvXhnWw6V9uzw",
  "key4": "5VxgfbH1PBmDEyCjH5PRHf6F9ovwo2sAJ4yVh4uTKrfvbdWsxDphawfagyF5YtoyLZqg5g78Wb1k49v27u6jYfSf",
  "key5": "2R3NLDoyWidqg5vfj7VTkaU5yq8comFWG8XPqUEKYUvPejczBT6ZJGLK9NCpkUq2Fa4hMTn7cqSWPPeWcxe3LwHS",
  "key6": "1r5mkFuyssCCPfNRU3k2m83PbDac8fPnqUPf1ffsgyw37PNjgfZ6ws2bJCLR41SEF6KphTPFkvkbMKSaZcwV1V9",
  "key7": "3MaqwKkD5Yem65bLQ3E8CsJin4Qoe2XcP5WdeVzDTnaAvL5voUEidMPc3da7MXLex7JbmuN26p6s1LQSxJi62EZh",
  "key8": "4Y4zAnZvnnWMpBCjHGKLvy6ymzRS5TMKfR9SKq126ibgPRqa2WF16nx24DThF3goBK8tPjVvuCPnEW5QYRqWLoXx",
  "key9": "3h2HMDHUAFY4DTjYYxqNC5TSkn8L2tRNZDSGLCBNhmSgVetCstjfew3dJ6XkgAf5rgjQbbFXQqWLTpEvgAaCrN4",
  "key10": "gdocuZTcGmPtyyEseefNALqCHJR9NrneRytJRG1rfyQYmFQHo9RPoNTJTYxPiJDHjpx8D4DZVb5W3WdczFNJgMp",
  "key11": "3CozPdQEnA2YePCyUp16BH6nDURZhjGiRXUGoATZS6MniQfZacsbQWioAEadL1morygyzyUAQBw3Q42A1qQ1treX",
  "key12": "4YiMbnyGxP58aADHERRD9SxUQkbvgKCXrTCRboqGag6jykPcNCnWx2U4icDEAZTS1dBAioQBsj9azEJsfDFTVYNy",
  "key13": "4vgHurwNxtEgYoRtPnc673vamcJkBPY9xz9NBtZP42d2RNKttSKVwa3vABoZKeFgQEMdbcgcoNLKGUynGwPYMTFJ",
  "key14": "5yrtNzbQ7vMG2g9rXCTiLtBHth5VTiU1TiosCnFQStZKnyVVbBLegYwasA42XsJMeeTA2mHGPnuqtgfP5uRFBiqc",
  "key15": "3JQQHvEaR3r8oAzEf1zEtitDDsvDJn1xWAqcTaXeJgb8hAyza2gJ21h3eMoAmuDLQ1VEmUXtGJEz9eYKRkkj4mKm",
  "key16": "5CV9J7uVy9GirQWh5XiUHyZNWfRDa2Bv6jcSuK5V8eEzCSZt3ai5v8JfWLg1YuSJk7ccrp3cb2aQc6oQUit28Xhw",
  "key17": "5jq1K231EzDGoqky7WF7yBiAtWeZk47Ftjg9aRNhF5Syatt2JdjSNxh98QCfrnMsETs3CuVcwWDrENb2eRuMtiSG",
  "key18": "WSxuJYCLqKNXGwbD7ACqPcbSVpQU1NQQsw8nLkzMDxCCjHcbyi9K2mfqSdT9A44umF2zSkXMh9PM8sJmjgAzkk1",
  "key19": "26HYDxU1q6GXPDNT5nkChfRdCmu99aFEcnAU8tERJD69Rs5vR64QfHBpvEY2rksUi2Ynqs5L9BPJ8H8RYqphGdNo",
  "key20": "5rVCHSRhT8otuj2KNvhbXAPxvQk2ee4L4R3F2foaS6iayti43NcdrtnLnzCt38zx7oFjPuHr9rrinZvtGJAYoPXr",
  "key21": "3fFcs72wkQ4jjHnhrFp2dcoUCnQCc1ZMq5DAR2tNT9nero5EGfnS6iR4qnqtryKdpdE9yvD5hK36wBGLQajye3uT",
  "key22": "4kqazJmAwvRYz4T8RCBq4To6KVRnEXiWqTKaQuHQWxpuUBs6Zm2j53xN6QRRHMs1GGYECJq8DzuCtYH9cVedax61",
  "key23": "3RDdvkVXPL2nRboVopNDQ7wsXwWdj2qphR6U2uw9Ka1AnKBA1nyoonwUAcrqNMkg88boDu1Ldyd4jTpfyAh8AgDC",
  "key24": "4BAzDTVHniqu8inprq6Lh99AWTKzVsEAEDSJUBY2QGaYsKCYRmU41PQ1uHZah5JQP2rvZcEZpZ2SfEZk8kmf4k4X",
  "key25": "3jXtkvbz3PMbBC9k2cz1keqQg6B3WdvJMJdK6W4LkhT2jZVhu9tUEPccaPufweFUb3NYehLd9k9j61pTY7VoFpVZ",
  "key26": "5keLuSHzb8AFfJKwzRDa1hj7DTVtdhJtBkTfVnTy22nzGwCoXnWje89qjcBBQGnuBqZ3zkWkvZCqijbC4a5EfLVs",
  "key27": "258GxPWfju2eZdxHZ2b8x4dvx8sgM2CRCkRqdk4zpd7RXtPh2SdE9qJ9hJeDqtvDr7yNTmuL2bQSR1FT5YBiwaBL",
  "key28": "gsuNAx3Nd1hK9Aup5Y71tQqt9bRpJ6jCU6nhp9CzomHteBDtFJHmxYoZ9J3aftKNi356v8AFn2JyKDyJHFo7rqb",
  "key29": "5JAyFjoGp4NsMmmDoDCb8vXzvn1ZWXv5xhCKDQJZE88Aq43xqdE4DooWGiwzJJTChjn617khb3q9rVEAKZ6aYMot",
  "key30": "3365Pn9kBBmLGSSKRAq8ieR7AMjH7azEVcYf4A5spo4aZUDPheB6vpHiMhSxUXP5xdRH4zVW3UWFVrqQkU8JPyDk",
  "key31": "2g1qk3Sabg6kGtEvGBAPrHKe1MYirREoLSwrVP45Zmdwf2s7K9eDYz3NnQWcaeiFZHX9PH9zXFN19xNLFnBVA5Y1",
  "key32": "3QD2obARCZvLHyKYTJFwxU11duxRShifN65Eu5mGQReUt9XVTiF3rVePJTBYYhTsz7CwN9eeNy9VMHiru3YoDu92",
  "key33": "3J5CpQaT8SXkVqa8UE3jzUgLLKDUrQBWS6L4tQ2SN6YS2w3XLaDJD5wWUVqWvUaGK4vsu3Hvfm7GUh4V6fnPGWtS",
  "key34": "4eBorbqiZFtTuNUbPjZzRgF2MMtzFSXwqoktRpSLTKvK3QvFBdsM6YRMpAfVnqwT5Ypo6A61f5bFWm2gmy4Sy9ok",
  "key35": "3DhLbSmmVL81n9wAextHFbzMk81ZS4AroWs9ogjPgEc6cYK47ZjGuKiP1oa3vzuWAWWgi7ESmNXZTHwD97RDrscK",
  "key36": "5mpfHqtG3USgmyiccVcfji5dwWjo1k7AdnZZvz5URdQF9iEHtvb9uf5sc5aona1Rw2K39jnMWMTqk6cEHkxR5ak1",
  "key37": "3xV7dViSbXS8q8p5MEsmz2j2iipGC4kpfi8qs7mTy8Ba9swRyKv97S8D43pKxDqoQvtLeXvSMLbScaoiGkqF9kGB"
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
