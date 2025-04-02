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
    "fxX5ax9GCp1Vexe8FXv2ekbdHxdWDaXWyU5A4gc6JHUakxYsz6qmndgwaxs6iJB7vdMxkR8qmSKD77nD5yyBsSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D1XENMYSgUU6EooUvK1gXy7PiEQz2xm7SfckvZ4QEeZYCbHCxTHuQqnYDJxpZdNmCWn53NuJAfgwAbvczCoxHHB",
  "key1": "5nAkFzsTBw1c63Z6hnnPgy5kETEryk2jAhX3MsCZKYn4RzyHjuev4TLwuUU2RMHDDbsjPhSwFBuRt1QKRu1SRuEK",
  "key2": "4iqRJak7rz4KPqVzPNfirW1G684kUeve3dAw1V1jUvvgdjB6BKFULAgqtzAzhSqjFRDmomYeAZRJr9wgGo6UeBof",
  "key3": "txV9AuWCxJnxYczKctJdJN7nSTFJfL1GBNef7VPVZEFbJVEbSoj7awMre7qJSDEhnZx6Qd9aSLWZYFexAQJut4A",
  "key4": "3ojgeTYfwxhY5J8uvtBruQL4EagVuNVeRoijB9BdoteDCpcW8cor7vEwiut5D1dBX2i2YdCmLWtUfJYhmMwxR1Jf",
  "key5": "4TnYVTsp7StpiJxMRKJg7SSu6jaykukxuemSieg6wH9quBz5WBVdaq9aMPCuGNcooC75NC7Mj5qsookbCnq2zJcZ",
  "key6": "FPUVjYvoRGySuDNDHeXZzbHTe92FMmixm1Fu6VUi8o9qceoaetbnh4ra2547VAC5LJ2aEMqZg7nfxUFLH9Fa2ki",
  "key7": "5BmMCHuYzXKpnBmKKfgqYCHaWr71YmWKkUwF6T6PVDwKq4AvthBFSmC7PMCinT4LaH1tsVMtiZ6sRgtvKuhuK8Yw",
  "key8": "5YW6dF48r8L5YV44Qg6osdKxGs216PoCGW17UESrUrpy28e4pR19aWSfAXZrgQKxdi193bpvszwwYEpzabfpqHs",
  "key9": "jXwgR46jszSaKqXq4Lcow8BNbnqAC3ctfskhuiZAUrRnC77GCtozhkQtDUwmbaEA4oaVW2bkZ51b2KQ8RkUxAX8",
  "key10": "29ijfQKUodWYozsLZT2wL8WCfN8N9FgnywnBv8TuQBKuCgakLVhALJs71YZvCgNkMp6BD75LhxfHqqzw1XCTu8he",
  "key11": "4zedSnBkrHDdgXaQSzzrxKy3h5ZoRBKya3GscENPoXMgoT9ZKfjAS1zk4WnPppSKDGrQ3MdwMSF9EvcVNiyZ77zz",
  "key12": "2pESn8tziNr4xrnUaTSZ1GbA3cGAkhqmmeyGbsKj5KcB2DAz4aYpzUbkLk97j7SEK4k5D4PC3eEqBpVRtZ6CXwFZ",
  "key13": "2JpFGCV4F8sCLurxVVkVDgPDnGhx6zQsrKHBueYe1GNfBXuRcdke5DoayAZpCxDsXYYHEvz1KpYT9nHnXmuhBatC",
  "key14": "4DR87sX2BgEuFo3ZMyt29oEs9fboESyrTPe5dZ4DHQcSAAiNFZbezGB5ajyDTZFr7UjsXEPTCXBeEevTy7dWLhh1",
  "key15": "5ubzmQ5KxQuPjHHVfi3SRpqNNKfnoo2HLZNdxDmbtXpmdpZdymPMkixw2P1iQPrCyBsBcrhdcrcp23S4U3XnnokS",
  "key16": "54YBssDDXii6r7awmx9AghKApfYqyZ22XYUd9XuVebt15iJEtgqywhiU2ijsFDPAWwqvAR1BXDXReNkHU11Pr99q",
  "key17": "4TiTDVmTFUJk7iBtbAu5Nf4csT7XtkMF6okYW3VWK5Uay3jLTUsfeTNTcq1c2VKbUq1EXsts8z1Wm8bJCu2HWuP9",
  "key18": "3GuEkb15w4Hd7tXdu9XqCzPPY7Eg1n2e2ri1YDb1yMAgfBtumbVvi1X1q7bm6e4sSpUjEL1tQpYRcspAyuinxmxw",
  "key19": "4WaPsbqTC74aZipNHCv3RyWGx3WTxTFpjnun473KNPpYpj14nrp3LzZakTWed8qhi265zB9kEEuoHM7P1BmzuTrN",
  "key20": "26JQ9M2GvVd6foZ8gsTzUZwoPgVUD8xxNtPCogP4UYfdeMnJS4wVfu9BShRsrcA3tXH1m4ZiR87KfhJjxzFgfEgm",
  "key21": "3sqsFBbtPtUp2c857pkLeAgmM18ErEHngWsEmsbrQDST9xfA3SVmzy5CKDtpaaM8XnYKsT8vfexgb8AoPn2n6pam",
  "key22": "3uTNHbV43t9yqCfruJ5S67BEbEN4FTNZtxS7keyhyJxWzxWcMbJNSe1Nf7UyUrgUAddMUK7qDdvPLL3aWNFbMnAu",
  "key23": "3hsCxfB8DwA81ECFMAuxnYBA29dACW1BYLKEz5XjfRG1wtS9sWqcKYPYRvPYLfRC6sjPgcTxWxxh8CvxxBQ3pe3v",
  "key24": "XofGZ7dva7FxgxJJbyXMp4H9ALkfNhMErtefshXHsJ7bcuvqWS51NQXjxdnkWXu5cPsjaajHwEjn8yzS7n7FuzN",
  "key25": "5DD5yZNLnFZ76KwAXK7XnbfxN29Ne5zWQ3hdTxTyJFPgm4ijBu2q214Q1sopXD6J9Rm3Qk82XuKXJ8bU9q4hg86n",
  "key26": "2H4LPVgGGPtUZnFjJfz5iTpkBW1SvYnm1779mbLGUxYRBZgHwXgGxz3r7qgHh6yCzgix6WzaXT7siKcwGkxwb8Xj"
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
