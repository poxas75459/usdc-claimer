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
    "5F8gBhbKPy8huywd7GtsjatNvZ8yMBjTy5jEVy7YNTMXjKaf42p7v1wPcdAJ6UiKmNAiJinGNkwvoDVd8MRtvavu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hriVA4mTF2yfGfrqym6aV92TxVNndREV8Tizq3B49gBXC3MghaMsSPevKA4NB6PEwqqdBZZPm7sF8hV9iiaGh6m",
  "key1": "2oS6YzfKgJdtVYcoQHEXGLMEmQKcUtNouJyiEDwB3BMXNBV1uNAwaHKHDBvktbWyFBKN1EC2uAFeXVy6DAUCCkid",
  "key2": "5A3b7AWtNSu2nLAXBjCUGvhDhkGW2RFxtd7Hv3hXi1seaGYiLz7bgnRf7cVphFonpUNCmokXivo98VNkyXfpquzZ",
  "key3": "2KV7EroDBFQsDSwCzZaWSxhPfKZi72mRqvLnJDRoFHf47Dfnfgmzvi1ev7qExNeYAJPaAUJgehWt48vbNStjbAGc",
  "key4": "2RhDcuTit5T9sxVS2H9qhBMdZr2mmG6d3pxCw5DqgsTUhBSuK5TsJ2KMkgVy7Yg6sdcLrq7WD8kHtXEpHWRsBt6x",
  "key5": "4rKdWTxtkE6CuAbQPDBZEZhcZmbfnV6xDLbU8gS37jJWB9Ps4oGHXzKJQZu6JidAqGszLu5GMx1fXwo6Cth4JHzu",
  "key6": "1VSS7cnzEaGqEnPgnA1FCcjfiKAtRcfsKbvDTapE8c7oEfhEcd4Ttq7qqNtHV9MYbw2Fzuo6ihzPQTDLf69s7qP",
  "key7": "5u4LMgGov5HfEzxbW9wacmiPwU82t1915Dv5QkjJ8VFuetaLCsadvAbb78NfXAdqh76U1zN7SnMnPpy8ZDEJCepd",
  "key8": "42NKuDtoZ9oM5dRcKTcPKXTCkcvRmpeERo8Zm8WzEZwtwh82QDHGhvep5ExriEHjLrjV58DRke55s9m9YzDB1FBu",
  "key9": "2Amrz9kTgWTr7djNU9p5ASKGWMgQ3rHcS7xFCD6rMXYsMsgrTtpi55T4Mb6PBHo24MdoYCW7vGjZ5f6NXKBcedaw",
  "key10": "2fCY8uN5d2gdDcfctnWHUzznvH6heog2VEwTnPsdCQ4Sk98rYHRf3HnuATpQDRkvzkLLA8KcgdCohJZbrnQpfFut",
  "key11": "2LWqDWzpHsGLvCQ5VpYxxV4rpT4rtWqzgck5SVbKPGxie3wAY7WotsieG91EgbRvnVU93mvoEfvAveAjjuNr8nvq",
  "key12": "4bz6pL6WtxsPLkKFA9HrMFcTMBqff77c1tqqikrkrdGsVXmpmttoSGGCQ6t5k4bQ5sFp6fHJiDfYFzny5Cf7en2a",
  "key13": "hkT2R6mUiy8rsssBqBVWLKYxhqkcjWMrz1W38fFiRa61mDEEqb4QgK5YvxyYhPWzuiC2SWAjzyvd9NhPULBDzt1",
  "key14": "3T57pY9RTGaLdZKn6bkpKqS8tyddnsT5iQ1e4rX346MdcxghJSY3yYgn1QnJDzGFbvtXrtZPk1ea2npNPZeqnXDv",
  "key15": "3U38gJq9hYMMKECHKsfzpEZjM5ghhWBwGzC1BGXtWSTB76eMpK8nhpg6pAzJ6ABRMXQL767StpeGszYWXVjdYTRr",
  "key16": "3TXYqL8HNkQ9mv6wZSNPbJEZZcGy7wP22QcyQvSP8YtEku5afuSijJCVejiuEFTrbpHkA8Rmc4FrtyuwyURCZkS9",
  "key17": "41vETJar9DdgfffQybFLcCUn1bvinnZRv72UoWqqi7oQA7iPT5aQ7d2rfz6ZBBhe7KGuYFrRbH9k4KRUZHLpv4s1",
  "key18": "3CchkC5hTSoAXKqcz6aF4ZyPfSF2wErUyMwFAyfu2iaCh8kWgP7wf4q7SYPCozp2s91CYyKVyEet1MS151HK5D7m",
  "key19": "44vxDHEca2Uk678HEEWtg2iZ3mb7G15njyohEGUGbPLs9V8sQZk78CmBRrW49E6edf1YaAC5XSmWNXqknKb13vcG",
  "key20": "2vJNcai5bWKF8dZf6Ny4pxxg9EpsbGjWmf6wQbzQJcVWJkQArRjiuVGT7hzYUSKMVh1gU2tnEgbfsRYYiCEgReFM",
  "key21": "5kWfAEny6hXcF97g7PbPjXsStkxb4pwqN9QRjRtRSCxHTfNqrUsHeKezTn9eLZWdSbHcRn8kdVMZEpoZE2a48iV4",
  "key22": "4TtrA6L8RW2Qd2AQj4YPHQUEk2d6T2sDBFKD8Q5o7DMPDoh2d96KyuFkSTm52b4Swn7fxqius39a4KLzWgNifTnm",
  "key23": "4en6VcQA7ktJBn939ru71EAMcRLCW8ENBjtfCzKX34M5QcbWEjaNQ3mfo1UiF8V53yhbjPGE3NZeQK6eKUjAhedy",
  "key24": "4QCkzyLuAN9jdXbY9Yv8FTU49saK3vV4o1pxvQdztu8W2PPFmqNQzxhYFV7Ui2hnCYbgDueVBCiHTWzbJb3K6wFY",
  "key25": "G3D6rrLVMDreyL8XExU3JcoGAnVKVPyjWL9yLYfaGLz5FnNJFUUTGRfx2f8bHaWggb6GhaX2edN1W1v3q5mJnHB",
  "key26": "47TVywNy7pxitJu52HCwzR6GapByzo564f3FhrBUx67JBdPXipcSbLNU66tH3k4RsQbh9DVZtRmMFpctrTzEHhqL",
  "key27": "TXY5csp8fPqMakwec5H4xe7WSmymMS5qDMmnuaR58RRZZPSMWTh3NXom8U1JW12qy2JyYso5DGEWNbtUJjAAkwB",
  "key28": "ieBZyudK5HQRg1iZP6xR932qKnVW3djRuYGVmxqaovsqi766B8273uADYdQbeQF9zKVZ5gyHHrfM3E1Pbq4q49C"
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
