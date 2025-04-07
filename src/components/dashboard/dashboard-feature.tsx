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
    "248xWnsZRik1iLt9bKq2B1drAZNWdFLSi8PLZDybBh2iiYM2GUB7ud7AqpPSDQLVi25FWWxAGG5KjmyevsgKpfPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M44MgBMrTJjoXFEESfuGosgsMPatMEqUcKosKX7rF9C5tc1eAhTNgyUuh3m4su6UrG9ypTX3iQaBcPc4C565Stj",
  "key1": "5uxDPq8MwSZ7fESUwn264wskpdG5JdiiiRxrFjPtieW9UtXv2hcsXYKNQsivfQZQzSs4Xa8jk6jH9ZcsVk3GKh2s",
  "key2": "21fZkkj619H3m1EVvrBxpGRUeRYrYVWsQPTBZ64YRc3z5B8EXXovucSUkByrkrM6Wb5LZxwTNYG2ZfNQmuBwLP7w",
  "key3": "41VYf9rQ7az4kDWWpAqdFnHMdgmDsgjMHF1GG6KWhHufHmhmR3YqcZJaKexmHwTRCo2u9K3ws4gikzwYyLNdbKXp",
  "key4": "2JT8pJRhtZzUZ8S9kKPvfihE6FkUmRc3wVusrhkRcbroBAVmEbSPZJEqEHEnf5mdiKNrSDfwsr5qwFXP4FtRYZEU",
  "key5": "3p4SRf8ip1R56p68GnmMGAVoDiuYfk4bdEL9n3v62R5CDaKUosBkZDgNPLUbpGndviRsvNBGC8YUXCvgbUs6LLEZ",
  "key6": "3QQjg36miQehGL3uSybd9sMMxMgvCYJZPBHHq7NMt3gDYFhMANUB9QiQKQ3VE8pM7yriYwKMMWz7KF77FiV6EKcp",
  "key7": "2NBpi6ymcy8U9yCXhPFgEXVuxF2CPN2SwXEn96eBTsqwRd9wDdRsJiTbh7XykKmVDPxGVNnVxdrUW4gMo7K6xqQX",
  "key8": "38SkuRvJsgtdmVAoaBH8EvvcbYXAxCWLCiBZhoMgSeVr4WC9bJHCHu8A4S3aaG5iBw5Amesk7AuHxK6aiKFHGHes",
  "key9": "2oF5rtLAWdC5rxqj6hdSj88CRux94ZEJyJ9MwQ8Zv3VDZ1scuHJPzdjxi4VXh3dAAsT53CGaxhGaShsANqvdwHQT",
  "key10": "4XiPCi2wQH4LfUnPqVf1qBitkrH4egi12RCJ92ovdz6zrtM8nR19yD86Vw3za71DwvDg7fEFtCE3N5cocJ1Hw5Pp",
  "key11": "3FeUAusBL1PD29gtjBCYnFAzqcafNbtpsnVcXdsuTcY6tCCvkmyKk49cSwnassAhoC96DNtQwRLNTCrYG9rNG9nM",
  "key12": "4tq1CcLzPda21o8eiNvWgufJ2aBvgN2FnJe56AFgHe1R35RtF2BRbQtKLKUELba96xd7BoCDBBuknef4keSdGvGa",
  "key13": "27S5JKsGJWnW2Hfz1nJXexJSwR9NPNjA14bS5Jt7LeCfQgqvknhgKPd4h3TLPd1ATeg5RHFLHk3XRt81qRZwHJct",
  "key14": "5P6pqy8byHMysNh24arGiqNNdmnxZ2YNAX6whaRRKRbD2sgJQonh2fMzgzQocyuF61eb2A76az51kjQGcjYWvBh4",
  "key15": "2kChByeLin7TREhMV7JcMV4devp9v7wDtJ9CamVaifmtu6gf9AUdCaJaMTmBNJ8g3WY2mgMD6B7YkD8Gat47EsDB",
  "key16": "4e9o3NKam1RsYGiKqakWTkxn5TeHc3vKMnWEG1PjFtLEsRZeizs9srS23AvXhAY6n5gk7TtmZQhqysqQeVKqBdfR",
  "key17": "5W6JR1qyTX1e6imM569qa8nc8mPWJQ4UgnyttT9avtCCJVsbJwB4WsNoHzaWYRnPqzj7F4gLD29Z982dKJZpue2J",
  "key18": "JFkJNnwx9exbvG9yU6Vk6FxyBdahmfGhsdQQpu7DWs7vHTmiZDzVFhiSAh8kABqVW7KwUfcuwssN5eH6rqMxCaE",
  "key19": "2rPKKYgfHAeCABH3XKF6ywvtCbPeiifnRbqAdmNnx4uPSbPxiRrjXE8KaWAppySFyUxbV7QMaGbgbttzXy1NB7aK",
  "key20": "zYq4wqFwS9up2NHZrhecR2hhx7KSgHCNynPfyADXhs4VKr3JAZt3z7dNogrdCkNkocCQtzfgdupAFGfXoNLho8X",
  "key21": "AvfGgvcpyGvZdELoF8gxnQbDmE1BfyafxU2vxqy3TfcAbNtwwFgb8g5m4gZeprn3d5AWbVJtHqjFAxC5rdPoey6",
  "key22": "qo72XdCpxrmAaj6Kq43FB9ChJq5537HD4vdWMW4eh2axD18VnswSn5M4vbrdPhyri3kFRb8BNi592d4NG5swxbD",
  "key23": "5AyvA5LjnkiwLvajnTi8fn5a3G9HCyXKjw6RJBWoVkyYHgz7vP45XA6baCczsDCvDTRDkiKcoimtBXtr1WQU3vgo",
  "key24": "5QCVSgdpiKW86NdFBWffy9ter4mWTSqtvj5BH9To5UXSZFua9CanqpvqgTxaUXurp3aDjHAcbMtNXPDcXSVcqzmj",
  "key25": "4CmwFGbyvPeRNruiEFF7HdPJtK8QuX7N3sFjQyshQtH5xWcct415epG1JFaZKh7TfiGi4KQ8z5XVNAhjuDVTyKXy",
  "key26": "4H9b8K5kf6tuG9o8nAJzwEXL1c13vvvgJwhFv4ZAAWfzN2h3mZYecxb4wkWA5PTjGwuhznk8zK17aMh1fMQLMfCj",
  "key27": "2hRjVwMtSRpebo473pW7sd2yQzMVU18WK66XoJX5f4tT8JNhDwbUUeSfqVqwmZbsGabKMZCkdkriFRUvKxPobqBn",
  "key28": "v51ktv8Vs6jRFf95SJihsHjpZfd7A1frzTKSju8irU4tk1Gf2p2ESrJBTWQ6gUbKykExBtrkzNjQ1NBvVSKsQUb",
  "key29": "4yjTvu7nSMrA1UXX4tPwnE6EEtty8nBuc7KVotB3mrqhdCDHTKNixqsN3UDrNeF1oqSdGT9APax23UbB7M6smgPF"
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
