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
    "5cdR7XYq7uP9b2HA76Byiwv1bSQ8hr2rotaZRQBTVYXvqeLw8NQnZZTgMuAwfgCFBkZfcynGJuhb6bKNG8D6VP8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nya8BneUJWEhn2LrDybt9zHSLMpkX9cc9rDmshRZfgBW6yYb4oizn1KJrEL14V4JTXpNEme2nQFC9nuPXNU1DGs",
  "key1": "4pkdXZJs3p5kErAPynRxaEW2c9nij7DUKr57akzRXGyXf8dPan5KY9aefkkZDosfS1abxHTgnJmYSq7nPYeFJ1yX",
  "key2": "ubsaXH2fYARfnkGnzNVtJgatreHUf9toXFWuhsN9Z8h47kGFYtFbUADe5rLtfeNt6ZnbhoKNv6o562HbWdPgyPm",
  "key3": "k8s8UEVzHHAMKxMrE4Aa3RkNgnueq2qjJEFcmRyKLqSNXnkPfHKyfRFPt4RHtdSsfMFFLxyTUwh4KGpaxdx7rCp",
  "key4": "Z8GkES3ohaUdHD7EJukdp83DLK3XWSKYbbyBMafjAJWg5y1Lke8VoKXmQyUqdAd421Axcfjyx6YtDNn4A6HrL87",
  "key5": "5WSWMpdFWY8xEckqaBe3GkT3zGZMMhSTpSWXxUXvfLEsBoYSfF3N7axrL5CBafLvr7JYxEsmZR9jWnVRtJ645YuY",
  "key6": "22ch96FLXv7cefpqRYNbLfFGNdkSaz7wbJrpsH8swChfDEacPRc1ZR8tGWHuTJEPLuedRTF2Uwja6NQxhRCKyhPT",
  "key7": "3evP9uY254cJdz3XoPhbHmrHrifjimTJKaZGYS8SEfpmvpkz5a89g5e1R7Hahm1RkZccXRgTd85SQueoa6K33fRT",
  "key8": "2SmU9xHHRPsJycvUxav6vWBh58q7zxiCjq197vaEKjxAgPwte5WrEAnmPVrtHKiB6EXKXFYVwaU8yGj2tDrZWdWV",
  "key9": "2RW42Y2wYKrJqrE6jRj9cp79hUo7T35Ba54kyWWw2qLVqgu6R12VLG78aWDXzDvxR761v24jgdGNaacm2rQPtRZm",
  "key10": "2RYPjC7HbYrFiRD4bJw4Fd1AWcNqprm5UY4GYZeSeM6xfTMhVquq8cs9VrXT1v2YbfHJ9MNNF6BYzXa8zH4MoxQG",
  "key11": "3FhY26qr6VxwJ54HU5UK3BmeE7kPcVUX7SkvxoUTa4DqNo8otpFWv8QWQgv4XfvndQjZiy3Qg1eWrtsJNhaGbg3H",
  "key12": "KDB3y1yFCfvsBC53KDJapgfPUfpipzitLzuVH3vYsSvBKE49g5QYhoZGwhuN7WZZ21yKDJYS92UXzKHrWfG6sJm",
  "key13": "39kdediqXQFQNbw22EUHKjCoCKR5wArEuMj66w7KHRvWTXa17ZJCneoeu8HPu6HDe9gqaEuY1umxoocWxUWxzgiG",
  "key14": "nmyZScFMzEm9dEN5tZ3L5mBgnbL4VphiXXY55J1o2Hxg4YKRTZTq5PXAMe7wAN2V6Xez4ivPDwww5tAy4ZdpLS4",
  "key15": "4kZuX1QcD3djYixwQH8LjiTpQJCY7cxMiigEV7f6nM1qXVGKZbyqUhHuWV9KudEmGv4LniNip6PicypMhUyQechR",
  "key16": "4yivri31pHWjtyAzjiDcF3HR2e6D3w3mjENtbXbL6Qe7W54UGMGAc9h5Bg8GRz2g1zRBsm7Zs6RU84ER97i7BQvW",
  "key17": "51K89zuHc2AVAfwmqSpDRqtVq1QGam5WmaUE6sEHjsKe5cTZEWnS9iX8Yb7oS3MDQsspBjxsQCDUcminvhPMCD3s",
  "key18": "2CyrVzetGfmoX3d5rhFE413TzUxJKpnTGHJASA3tiHuWYcLRQeLCHhQs7RLYYhk3LBqryufMdxMcp1zhZ3NFjJRC",
  "key19": "5WgQ7MimwpionqwGB65VovZTYmytyNBSpwxjSgKVPE56DwMWayPFCTKdTPqrq7cAMD69FYCopK8vANNPnQKmMfBG",
  "key20": "3MRa5vhgPLm1QmnMVdQ9e49gW8SF3A1GrS5eA6sjSZ7FwURnX5BVDNeZAzqbPA5VM1k9yC3ghQhqeQDEaiVCowuj",
  "key21": "58wBP8oneU8UU8wA4dMZvUFN1yQF2P3pkBoV2LH3oFvBkg5UnmUgZLWbkLDPt5bTDhV21NkWHVwcsQ9eRNwRCGqf",
  "key22": "5pssmhkjfdDk6kMorzoV1zRRVuCJHq36KHCUNapnfS62q54a2FYfcemSx2ScTcAG5i1RQSgXTvnDSrMyCthG7rnN",
  "key23": "2YC4tXuCrAsTYzn2TvtoH1bovm9M4TyrFRu4BfL33jjdMdJdQNmmEN7u28AUKzCxYUz6YQRdAKJQ9Vts88Vn3YMi",
  "key24": "53zowG4gMKMb1VonGLYXTf9C6dcpmpS6JEi4uPyomH1bEUuat3EvV38tm9AN8NFLd2Ti4oLEqdoxeNJA5ovhD8cD",
  "key25": "qZaoQAa4GYsQsD4zydASfRPE3FttLTrRRQDVLXfCmYst9AHEE1YLpimR7tiLTGX3CqAsQRLBmnfJrMUjMQWu7D8",
  "key26": "5xGnCJdiqL2FM14Q9dnFcKPFm1mJPtLUL9ABQUg6fKxiSwezJ2aXrCoVQ3kqF8gWDgz29jcpwgsDfGGQTsg4XX4p"
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
