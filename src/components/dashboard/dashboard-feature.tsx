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
    "53kAWjML7yhJxqCQYzd5RVVwa9n77omrrqyhuo6fYT9KMFBk9P7jipaHJY7UMbjoSFNQPM8tetbZWicJoyoANtAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YtiEud3HSU5dTobT9KoyK77RAkmDvsqDkCzUt7JVcrFpwgs7BQUcGZnPKiEZavqGSWYbZLMMetiGfkt1K8sCe5F",
  "key1": "5hSEjnVgcXpfMCWCMXnAkA4HkFkiFDV7AYKEQ2mfRQ3Eg9ifWrKhmC55LMBdKdyN7dVvSB4fNY2XFyHT4ZNDSwYN",
  "key2": "31SMeo9dzXuuCoZBYyuaxUeYGM5SY2pLLtuzAjdfZHkBKAVwLctpNLBDjcnqmYt6eUaEkJg2CpJf29xGKn3J8WG",
  "key3": "2PwgWdBF4Ljh9UCM6MDi8jczjgQPU7zsiLUS5kmfmuXZtqfFP4dFCmr5jNBXUnGSJJ7xXcvJrKAEkD41sn9d2Exe",
  "key4": "4ZM9gd4SvZ649y1c6k94dXLNx9kNnyKVrgjGNUaZhFtdJEc8MCwPBgxPegdo3CJqMF38DV7aPgoivsA4bE56CJM",
  "key5": "5Jzb5rXLE1JSHcR2QMRAbrXcDFdfs32RaeXgau9Bn7gBQ6rYPC4JhwYT1AbUUMiW2yYgiXqXi7P4waC4vmEhTTBr",
  "key6": "i6pWcAyBEc45GtpKyqLBvdqZPig78WcMTguy7NY58tKQP8zVGPP2jPuj6QXVUW8XaJ8Yp6jhaJX54X28rtoUbMT",
  "key7": "bpDmrTaZMVy4S5iVtBohYt1UviKcyQMvrxsnMc2AMpVuM9FBzaaRWavpyf5SiSXPisQ3BK1LG7gFmfArFYWTd6Z",
  "key8": "2KRrPKAT1Tg6qP48o2gJK4fhEQzEK9PzFfr89RBNTGez2AjXJiSGVgh6D1Ecpa1Byz8h8oGfZYULmY7yUbxxNJBm",
  "key9": "5khiVWyzC9uYFvtxd7my3RhsRqPFo1X9wnNguBtZvHTp5rJsHPPxyXuGwcZergsT9ihuZTE7TNeUpJ8tY2SkEqfG",
  "key10": "3MsGrXFik8aQ92a9ckytR2EGnMWernaKG9tDAmCLKnppHjHBsSGvkZxAUz2UTUmy2GdAzk57dnVYAFUp7d9JgJWt",
  "key11": "4d12krF3HDSi2Ukts1DJPvz2mRyP6wLimLaSUz1x8uQ8MMCekyqZ9PTVLEGioHxTuKN95uhf8KSXk5TGrrSyWAc3",
  "key12": "4eAqhD9B9bAP955KGmjeTW9LnoUEn6jMVSDLcTYC7LejMg4jDr9SkThmr56NtcHU8BnJwgx4yjKActAxXdcuBNTV",
  "key13": "2fv3cpqDnfNHkXMq9Pj2zj3Rs2KFdznF14nMG17FvxRjbkra5c9bTMLMM1xaFQwEfWgmMFLDrpQR23JvFQDsVVPu",
  "key14": "h8T9Y4eKFWTJJUVs37jNskC7GLJ1de93KrecvVQGiZZXsy6MxcdShRxAhYN92Fi8CU2ka7HykaA4DdAVkvnVpam",
  "key15": "4aW8qvXURjsdCSeDE2tqeBaLJSLhQHsakhkXL3mUDETexj8TEb867paQKPq2WAbiCLZqxrofPxo5vBVYN1DnzKfr",
  "key16": "2kiysUV5XR8KpgKe2iFVfKD62td7Es7bTbYrq4mWxXfcjZdWCfMb2VhJRo8Mgzw6CALiPT4fPzGw2LNMsK2cFyNg",
  "key17": "3XfuWFpZfreTdbFG65afubvevkspr8bBm4oV42g4x15GxkPgHVS2Nt2yS2Lt2AKJbbSec1QRvG8QiuQoJBVGZUR1",
  "key18": "65GEq8DGwCf3qkUmXBzL7t9ovzGGoftUvYpVRB4hhh4Tpb13mankSe6LUgHzx6fk3M1LrdNwaHWXawG76rEn87cU",
  "key19": "2Y1JXfLJsGrATJh4uBZLkuBzxfmjtNurnosK3gWZCapm6UNgo7VRddm8bPjLS9uXeuwnM6gWJVyeXo2J4nsXB3E5",
  "key20": "5QQ2xiVdiyGqN8Bty4fji34xJ9nck1qPsnUHqf6RboZvy4uDCW8a3ciTDQkAfqdEY9Qm7L7iA6eUmgB91uTPtYaY",
  "key21": "4v8fz3U3KDjWo7bTNf4eWS9KLLsTjcuQzqWjWv3tUy727eRfzh5x2EYZj3sdxAJkNXcVCZ5isbLX6dtpuPp44kcC",
  "key22": "4oTF7vmNWSiwBRptgaqgXig8pv8cnqzKjjU25tLRem12APTaLKCgBd96AysKvuDHYgpZnY3TNkZZzP6DMPE4NwnS",
  "key23": "22b49UFa5dCGzdPfbnA7bSR1D4YoUwMRo6oFtjSY7z8QTEEEa65M6WJmtCKXKJar7Z6WMyKRohVyFsGzxSdT9114",
  "key24": "24qfQ8XNWbz1nC9X61x3NLqoBHmgqoUgJCAexiZfZcErjqPhZCCqCBs3hy6JHeTYR8wJRbA5HiyeS45Vco5AqZh5",
  "key25": "f6nxnsWdtN2YUjNLepTfPdaoau6mQMZ6AJbLQQFogS9ygTWoJrXpa7C3VQCTp78j2Ct2B8H9L5xHsG21HwqwEh1",
  "key26": "5e6vWYimCni6NoJ6pq4E14BuSKfgAVbixVrCvnWAuzimR5gWsb9Ns3T2kqxkXdHh1TNfupBaMwVr3TPFF9U15byJ",
  "key27": "fKAssP9UyDWBrRJ81RAwhYXYNrNsHPRyM2nc1EV92oG8raHVkszWwAhU2S4ku7vFeMr98Ki5Ap6eMqY2a3ZGC5e",
  "key28": "k5Drj2e2AEYBqD3HLLrQ2iDmmNDfkGxfFjBLF6qFHjeVC7eoqFzizQsrsFF477Tuurmcei6LxgAxesL58ueGsPj",
  "key29": "2VbEWKi2cRKpZxvmo2zEWktdwCfofT5hVNJwhsctsRzeJboaw6A6JZ7ksdPYULg9MwFfMSV1wQsKRaXfNS9LBThb",
  "key30": "qdPXUQv15TfdsYd2hZUjvWp2HQ4TgJwtnhptC39vq24UxzdngBPHUEYfa46DBWKBDWYuc3ehXXR9s5sA1JtVLgv",
  "key31": "hrBLpABi4ArawGap625rFGu8rbcjgqojsaZbCuKiBuYTCgtppyJofUqPHWPpC5xW5o7iQPUY7CQ2YCimCCCzgit",
  "key32": "3pn8DEcWBXPhU8oJHBvHiEJovbLLpLbSsyDCQ9QocVVJL7D9WiGkxZuVt4GhL2JP91BPq7UB5RcmEcCHiXcKqX63"
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
