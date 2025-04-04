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
    "5QzpGEP6HtbLgKaawb8KiqbNotaTAS73kQnAjy3FPfo8VStyAdQizBm6igwbtzK9rAUap8wszgey3hwEa79WkXsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eN6h4ecuKZR1MKikBMaKciyD5DTyuxmJUtouMTBLktTADf4mzRh9Q1PLrDjbJTSa4Hq3nC33ayZ6wPBhAyZfiUE",
  "key1": "2KFMpBkTWBW91wM4Tq1wF1xgeSjJEfEHd5rA9pvcmrjqQwSvTAQq8wUKeWRUaKH39X2shw93A7MyLAqaKRe7ub3G",
  "key2": "2vqNatkS2P7eMbqaGKdU2DNXw7fuJw6yipAMt41JC3jhLGmDnVKMqrh7t4467DA6erVcWz43f3H7Tx2zvngaXeWM",
  "key3": "26Pwjw7HEygsMAoU1QxToUbox9nhn313j6YFPjzCJPymghWbbwHwdRFYdzdBXAKqwHeAnPXoRNGwdZ4QHEHmqhzo",
  "key4": "5kLoXXsFTXMjPNsWLQgC66VBjiG2Nsotga4HEJAg5ahgLvxAFhjcJGXbpfFcwdg4i1szUAsqkQnUETPz3Q7BdoyS",
  "key5": "4VnFhN1mf8JAmvxW3BqShu1pHGH2kHWmxeHPJSB1jhygHhWn5ZPr1AXLQ2R3QMtKk7STdNKjncxFUE6fjh2QVqfe",
  "key6": "5TisgMTgTYn4JcVUucbJosWhpx7GJ61G5SoynwZWBB6Vz4MTQowyR9VTEJ27qNMPBFSbon5nCd3x5nN5QqdNoWN9",
  "key7": "46ML4jgTGtAgUWrBH5WsESRtb5sB5GWfoyZ1FqrxdWiAKyevhCXiTXVPgLab6Rms4kb3JfL3ZFdUo2gieSmiMjrT",
  "key8": "RNaULEejrG2w8bjWqtorQDMq4tcspS6ToLUSAiQdvZ9tUvEFZewcKfryhzS1tAygZnypTZpyyYtGchFpzbr9EoL",
  "key9": "2kkwk51wSU4CG7BRhXAcBx1gNvK5NS1rCW3x3GkAh3F5JanxFXhZ7traxq9iUjZGc246SM4NBKRKSaxwaRhKmUQ9",
  "key10": "65z5L6MaLLFbQDLaDEvyPsnJvBUSxstTZ12jFnrZKYrwVW268WK7i8DEbqfHZu4gvpMmofGvsU6L67o3yDQepDs5",
  "key11": "5Ki9cJUgvgURe66rZFan5Fqha9ttLVADm9AWCK4CQMMr2UimGMNEBADRes7h75JNqAA8EeNmmJ3tzywbPgF1mTGr",
  "key12": "3rsyxEcaqnvMcw6vBgj8yxD7vgc6w8ZAKtzzPta3rEwUYu81yg2J8Y8DftF33ck1nh9oyAxdrrQdZwx7Usyqbg94",
  "key13": "DKRHdhPdomjjeVBTNWS5zyqsHZ6SBS8iDorWfKMVzWwb3hedSrBXckDrK2UrcybHiNmbLkGzZ7zAd4fcCR6WSn9",
  "key14": "5jLgCFSi1fib2WDG7zsoXYCnhp6FaAnmGeGZKnw2PJv1Aq5nps51TsNV35VemQ4J8nQUFbsm7VjpXjWzteJsKuuG",
  "key15": "59FG3v8qnmCLn9M9KuCQVoTFa5DdgtdYdDQ1nsFd3bQeangN8rhCMRowkMyAv8TBA5yRoejJMpQX7ewPiVrJGqNQ",
  "key16": "63mBZT7jL9KkhScRysYWfvTAP7mtiUNutJLAqrBFuRXXEywwGsF9ejMWeDywbN5BsAeK6km3qjMPgEqCxAS6eeTg",
  "key17": "e8ma6NPscaCBkjhgURjjKzj7Vn4MnRTDAwspHjhQgZ8v5uTe6EKHbppFtd2rQmKhp24fpCZU5fGVpXcqxHypoeH",
  "key18": "4crjvvLzXep5ZGdJ6LCJVjq1xJzoDxeaPiaHgjLbguLiHKWN1STSu1kCF2b2Qmisy5pTH8rgmQdmTNFzvY4a1jFA",
  "key19": "4dguAgp9WoQke95yyiqcEqCNrq91cSJzvbRBHePhTF5MmRy3W2uuCk4wCiwfim1Y4Ud8Jrwnj1cy5Miv4XonXSar",
  "key20": "3wthmPf57jrqwYJFSmNam6KqUjwzwFNvdKxnKotirtJzsHdgJKwo5z2mjj1Zu9Gw2xKTZWDwZPXq2ennj9NXpLK2",
  "key21": "3ToHDZvDpCZKSoraUBuFdepyLq1S6YKqHjc94PXKnX8wThXyyBwrj6Y8CgsnvjqTVkUA17EiJWHDDhvo524H75EA",
  "key22": "31MrJmEQwtnTAC3LkNjL791RFvRaVpYorxLmTzXo2tDRwXDspXYNP4tgKKkXpCvSr3qtuCmgoHVBrCv86DcmZiK7",
  "key23": "2eDXY2y8dr78ff7z7nCcLD2oDkCJZjk4MozXAVDDfBkB3ZL1zTS2Nwt4n8UowYrqtaLwiMBGoxBuMpppmPTKETjQ",
  "key24": "56tsLQF6sdrqSK3KAFRiK8CnbKJ8HxQ4z32Me43mRQU3nSKFWg6cBm4SicLpYJpFwhcJn291SDqi9fnKAQeoY78c",
  "key25": "5MUtuJsKPgAoArLfLNdaHKDTLeaGGysKKob8PMDxuJAX5geAfrcMaq4413JeECwTv7MKRW85SfiPQ6ksSv2XxTUw",
  "key26": "3jmbrKszJntspVUVpFq7ksdjYAdu4YAEfZWqL87tHXNL8irbmmP8gES7ma4U2C7HEHwvYWJBv4DwScTgfLHW91kW",
  "key27": "2p9yfh4RhLNNXNrrnezgsYkizvjvkVRNEyeNHLhcUBrXMWPuCVz5nxA8tj5s6rJ26GDQbvLEiyCqCXc9j7Nv4oaC",
  "key28": "4Y6LvxXuBhu7Eati1pWMPHpoh21yYGT1J8XTkHuCNU7Z3iYC9rtsJCam4MyxP1GZtkW1GnnSMaEpJdSFxStD8UXG",
  "key29": "31e4fp3idkTSVgNDsEG5HgBEsvTPLB3jVXURMafCzZW8ApiuzjuMv9Nq4tZEf6osQ8E2EwiQbvf7cypiWtVRJRcG",
  "key30": "3RjNTvxiFj6QVwm9xv3zVRD28w5YJXm6HbVcpQoBBGwg4v3zp8wCNACoSygwKuti4us3CnrKK4iBtZhiP5NA3NM6",
  "key31": "2oBwghvq2TrTjGybZhKghakxntPgj5UgHV5p1HB7qbJ3fuQshyBrdpSyHjAxaEexCKmPDSs5qjuzPNsPnraKrvGN"
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
