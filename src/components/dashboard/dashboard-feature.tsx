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
    "5DXaGXQeLBtzytF4CgXzw3gzBDhVVXSZCRVQRokx15zGQGG9k5wMGtmtsc7uLmMwCg7PAGgPEuG3tQJxaKqvew6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVJ4MTpez7c3DGAifpgYzACZEkQzRA7Zm4tGJgr72w6dqHfdP7nJomXd9Q3xxTNNi1fjgqeqJmHn72LWgASx9pr",
  "key1": "4KeJk7mpXjpZwNCj2YniPrZJJTD5mSbJ7Qa4DDctxeJ4Hxcvw1MwpMnw2DiZAWYGMeC3T2J6RNAreScA5bDH12K8",
  "key2": "2rgKxJ9YAvxfNf4sBWGuMybibqpztzrdxeXJwaoEDWayaFrwqF5eZtJGANTnKggzcTiLWauuhdYDg8RJWegHvpHY",
  "key3": "5BnD4XUagwX5cbhqAarKz4cRAGfHDEuDQ1mixXZnHmDdNSdkR1iJSnCeB9y754yp9EqkZAEt6d6n71nWZ2HQsJwi",
  "key4": "H5Ro9dQ9ycNN7j4rppRCVjiDTfPKQrPGmWFcMH8HSQFpqLRAaTpaS1qyDKFHXnurrgzm126pC4F5W5HLX4QgnBG",
  "key5": "3wMbmwbZDV8pmcTHUSs2PHZkfbeHQxvf4evzXcNDd3fJqHNYRwcAMwjNbxG8jGdauT4eTwcMQo9tQPCaWeTaRjq7",
  "key6": "3DKXwzBcg7U5s8fYH8Y8LWUeo16V1AsuMXsvk9yBCjR3gXRRmJKKTZAdTPRmBjWvS4o2ZbQcVb8PaEjktw6gkGfP",
  "key7": "4DMQP9d2C6FfegmcUg2oKHtgfhKps1uTJZRf69cHWFpj79qYEbeKKiLjR8bkZcfd4cxEmQwBXj9pKbgyrVkMcqyc",
  "key8": "3UhtRXrx3fW4qX448gq6hQCwssbqcVWUVnw9VHS9fJKU9rc71w3NcsqCkeU3TqCUMvHzgt6Ubh79cqPxUKHrEBwb",
  "key9": "5skF7x6eJDfyMW9vHdH2KgD8VPzGuVsXMsqshNXxtQo7w4uaNViaoR8t8sHCUsjMz9uQNZeusW8ipPUA7FV6UXQQ",
  "key10": "b4tB8x6aoPmKadmF37kdiU5D2ESWL6bYTafR7VntL5HW2msj7zCYEXGEKUY8TdgHMx18QF9GEWSrnDTtDcL52Rk",
  "key11": "2gpWuroZo88EG4ychhugjKt268jpCumtteWpMNuyXduZMrUggpXZTJK5RwhptCbUov7XpYb91zyQo22Zbjb8mUuu",
  "key12": "46hFsD3wMvBvWXbUKAFAyhdFpXDd3oFMLfrCyhFFMURCZkt4xs11jzPTgsBLTKMGncYBMfzPWxHJkiZyxxPkeK6w",
  "key13": "tswdVhvZimtH1rgYUmMdwW3zHHeoMWdYRA7wdsMBzzJ6ZmY98aa2uyY5r8i78NcGpQTMA9NkUpAnmqwoyYnZyAN",
  "key14": "m7p3DT7zB77PMPGZFNZCLJoibiYUQZK4oGaUn9MJMSGYr8uWQpbjYXJZqabxSYAC9kp3s9Kec47qVYFNdoQGFHh",
  "key15": "2NjRFrqZ8Vi9ahfinHicEwnQEGFVzCf1i886ZkJfdpVsaf4tAWKWaY8gVFsQdEpGsMryu4ksy3JVquwzroCyVJBu",
  "key16": "5CqspPbgzJ662bb7nFcKLbaGK7pX35GW4yjYXeyRW69JLzjmDs2pVpbGXLi1DFdLCKjXLNqrz4H2UF8gHus6CVRv",
  "key17": "22WbGqMCJUWLK1EuZCtHicXDPSo5qT8KhPFHHPqpw7J9RtwhJ4dZN1das7jGsZayR35f5dVXyB274qvB163J96YP",
  "key18": "2xhCTm8ve3JUidak6r4ez3wigVTKwis8At2V6KS8VHCPYGCg5iz4kFLAkhfuqNse3kCPJ13ogddtaxJ6BaNLcyMf",
  "key19": "5mmV7FdWy8Xgw9Stq7Zy5AmVw3t8nj2FKnNHafyafKFJXRj1KdVxJaVpfFEqQmA9ev6Y7txnMfXjpzxXyzY2F9Cf",
  "key20": "3dmcJPebbCYeHkZkn2myQ9y1BNsfsA6yvEvvwaygJUXsfP3HaDBKsZgAPDxfceopQJtpHQyCXsToB3UmfqtHuKg",
  "key21": "5DWK1eLQPvxRFbJ4rJgyE1FAM19pabPWSqjyhvGaNGJkGP3TcmEAbg5zTRCUPK88iojNiAmk56J7GmggTrs92Z5o",
  "key22": "2Xv94RwbMS2s8arLhYdMSMK2cHGU2eVR6vrws5H897xVMYaEjZJTNctpu7ioN14NsriBmrY4JwppLCNiTN2sEYBa",
  "key23": "jMZswamnQ1iViZujcKLfa6xzUzXfag1yfX12doWdU7MhvCMMFiFRGkBk4wg36LQKMHJeoueS5SrM7bdD7Qi4Vh4",
  "key24": "5sSvisR4MwAhTzgGJ4TjQa6PhxfQnL3wGG16nv1MNqJdzrdobEpwQMXkpEmv9sJG1yNCqkJbsxCRZHWZZqQjYPv6",
  "key25": "42T5KDzhvvT4PMLLP5hDVs6o7cdKx66otApmGhcaCeSBzReEr4zAYJhegqDdSxnBpaBsYCRPQ4hdUnYPgFsjmQ6g",
  "key26": "25ztzppHfVkDg37aa5WqJSJg1kHPePg48z3ehYUTjGMxBWWYs6scVxTkamGnXDsQFkSx76HkJKsAa5fGab2e2hKf",
  "key27": "35GgtDHweqYkck6XVZJmkxH4fLJ4SqL6W92LRqdcioovxpPBLH292F8U2esjhuZVdzRCuCuM1QKAgjmHsK2xoe4y",
  "key28": "5b6W3qgUt8D34me5K156dNNMKJcZ8ZPZSV1jQMWbpojjNGn5qoT7MMFBKtUEa2pkmazVV7zLQJx1RrdJKiNGubdr",
  "key29": "5ZvsE6fwLb2dpku1oC3KMoqmQ8M8o7tVN5akzSsyjpprdB6cNBXjgKSDGtQnkqrN8Ngxp8dCiyr59qXev3j5dWs",
  "key30": "5rk5uTtC8bA1LZ8UrfKxmVWHLwqLDVjdH2vhWXMTYUaAsjTYQ2EP6mG323Ww7p7FT2MMQ2ZsLhRr2YgyLNMr6J2T",
  "key31": "BG37CP5EXXXtfV77ZKxWAnLAYJHEiQMofCaUC7etpRCdZMvrLP3QcZoA7rXALZ4rATfPRnZmmKFRE1gtjSyuzxy",
  "key32": "2Eo8auki8725UMTK7xNJAMk65cDTZhLfUSyCWGpagHDhD2xzAix5YM1pkoDwnxmtECo7czMDDKav3GLZNW85Yf2g",
  "key33": "5K8QQshaQXB7wBwZ1Wz8DcDJG7mAYo8nzWUsQNM52THL6YMiidjXJ45qtgRnjhL2hi8prRsK37Km1JX2EcLvCNuf"
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
