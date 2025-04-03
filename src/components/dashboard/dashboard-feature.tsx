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
    "23FaC8tuZsNgE3Pjk19z2iw1gxjH8y5eZRyB4vvsBhsLcdZZizcaMJ9yb5bqt5XcwfqtmSuizvf5EKx9RMh7enpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v421cTbdF1wFfELbKWwwTiEumEwTC84Edy5WJybeaU23V1pLCBNTpsy4fiMqeKehSSEtRjzwD7r67gVMgTZkwcr",
  "key1": "3QvsocTDuaz8Jx4RMsboNEcE3Wn8qf5iFYfxoxLvRe9LdVor63CLAsS9o5yKkT63L8DzebCGmshsrBmEZDTkhBPQ",
  "key2": "3V8edu8j5nnCMvRCaSiHmLkv7KkseEbaWJk9sN83X5kLkLWMiRwUxfhzXAM8zvJtL4EfV9wmKiUysPpDTM7kTJAq",
  "key3": "5KzYCAtH1hm5LLbdToDyaUqfk9VAUHBNvCjpyFkbTevy9wDcY3HZFs47ppGUersdGfZavMeazgya1SpU8w2jaiQy",
  "key4": "Ndjx2Qg7jsWxVJik684oAJ3mqMb3ujtLqvPoTg3rgddYau55whVVwc9WPWitLA2YbswRWL5xXDGmHVVmMfPGsX5",
  "key5": "3mDTm7ppL1o6jpaTMBnrrEBEHKuRYRjFFqWsBJQHt5rqrXBLgxTh5cMh6Fw3S18ejm6Ngd6BPoC2eAAgUaiBKKN4",
  "key6": "vySrFZ6RVBGWAMUhxPqu3WAqDo6YfJiZ4Vuh6mYkxMwQo6WM4EJk7cJyFrFx6Rp4rAZPRw1GEoZ2oYQqy7W8heL",
  "key7": "5WqbBviV6EMNxPMPKDd9cPi6wxp2iNhmFnCmKAuaGqkZScSBzxJi2rfcjP34hfGP7NJFBRByibHUdA5k9dviqS7T",
  "key8": "3bxh2CMHV5CZb8SXPfdvx5G58rFKXw1WgdJH24SUoG6BknqvcF1RsYw4qCJrG2ygmGY9qadb4UgDZAdkf1aeBq6B",
  "key9": "5JDiXTwndzxW4upQAuScqw5GYBPnEBXfrWLZJJjBmqCM2u7cqZwpUbDdhb3EHDDhsQDumszNFv8wtQt3BoS4GWwm",
  "key10": "3HCTJNcPQ2QCGxfagtrsGxQvXMznBk9v4yWJ3SYJbCsCSb463z2WGkNY4CHP3vKBVeMoHwFmqysW5SPMronsETew",
  "key11": "5u6TnxF7kvAHMT95yGNsV23E5oxgUR5iuYZuXGRABQZKDf7ksJF5PRSXktELCymfcT1FCbq6rz3b7Kk18b4y7VJP",
  "key12": "5hxLRnTkQFLbxbPDf4WQhRPpQmV3ncgJMrih1oYmkH4v8BB6VbZ373rE3metBT5DuLsCD9HsrFudVTLqAdSNDnXC",
  "key13": "24ee4PEPbqtiJTTZhMHgfYpyGfooTxguAvLzGQVQYdrqz3sd7w9evvB2BC6xHongd6K7rLcmVhsTEqdmc1XXDYzG",
  "key14": "9aV4NknzZZrm3DyGL5nDYX4wTrbNyJR8kSSo3izAadNiutGANvtjkhhAPqPM6XL9xqYogCRZ1rBJyYjDqMQkCT5",
  "key15": "4F7CWb9PRn6qiYd1hpDh3TZLjQmsdasf5vt5M2fnxwrsibystZm3VNhXGGvEoB6XEZsz9axh48pU6yBMURUyyUxw",
  "key16": "PSgbEXdUidGFyo9bVVVscbggzEL7S3BVvuhYKF9fu3q7mhDqFU2oXCJHhjcpYVyeZLnSg54mv3rWfvapfgiDAJ1",
  "key17": "q7nYPZkHuMMD7VrZhgv95L8Vf8gLTNwK8Re9q5rJ1PAs6D3mtF5sSoAg21e7Df2VrYEHg732cmvg9Rxhjgan3Ed",
  "key18": "2A7bBTEgKWRGUNderJDG9HxtwpK5CXcuSsNyPYJxj3aXcatyDqL39ac11q1MSBS2FKUCEu3pkAq8rMpDH5owcMZy",
  "key19": "32u3V494yMCHu1f1prZV6bZi2uMnzkyLqpWkYhDw5a7KdFRWv5tKmvNVQppTkTJp9e8SCJrMHeA1BNSVJXkUGcsg",
  "key20": "nALobLdA2QeKgRwWwDJ8PKfBZ5DU2o7qF88zqR5VuioP6ueWUhhs4U2F5k78VTS5vzxouRqcBnAVxwf6RFmZJ2H",
  "key21": "XS9eSmJoMHaBNbhJKdishSWQYbRMM1Pw2cYisgVxWeThNFSQ8xzRoNsSeaEzxe4NhxiuGuGo4JaZK2e4fUjLG4S",
  "key22": "HJPrMsWbLotpKMGGtCLzmtAj3Qe8aAzv4XR9qZGnVhzUVYsANxRsWTPPGTAZECiaRmLm3KdQjvU1G3KSGSDgFuF",
  "key23": "3yXAQZtXHx5V6LXNh741teTJC9LLhMrrxnjXEx61KYRn1Eq5rqLTcmAAiccRPUXwTqoPPZLzFtpa75MLcScGWKLi",
  "key24": "4hUBMY98YWYTbX4EcMXba8FZX7Q9bFHgXbeiFrcjytzTuPQyJRzDMmVHg72Y24QdTT75QXvKfhUek4tM5jqxFQuq",
  "key25": "2r4UBSVJjZqxYiyDiXEsEhYfgSWCWQTy3GJusMgkaKya3hzuyBhUUQwLt4J3v1p1zNKfpf3F4oGpjYvoAwLkKzeZ",
  "key26": "3F5T9WUPfXhkCsDzGByFzJL6qdyk6NU42jmgAbkEeoVvKLUQStA9SYKZvP1J21MvuxBMuJKjwCcJ8NQkbgNJZnbY",
  "key27": "46ieQEig9NNpvPXgnu5e6dX1pnAMpUacX1nx4M5r7Qi1hf7WX379qhGV7G9Qu231X7iXuTeYLJKb1PUMMY3u1oFd"
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
