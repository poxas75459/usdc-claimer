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
    "4EEeBV1KPZvBZNftg7Ewv6VRCY4vuqSzzLz9LYVHBb8z3TuKitgJSAa7sz3rCDEPrNpxcaSQVZT9GGc1ZJEuzfQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DMD9eBML9dc193KnXUiigPveiPN3D6xNPKb6sEZvi2UHusCwVVXvFRB3ij1n14jiaEpDzLYB2Q7vF8PNKSnkPb",
  "key1": "463ujX1jrCaEs3ZjmcD2V4HszHPQ8SPfQ4hTpxFEuhqjeGbN4juXiWb7b9p6eD4UNYMwWQk8CavFNW45oSQHc3nr",
  "key2": "2j9Va6eAUEbNBhhSmheLHKesBgR7a1uzDpj59P1yvBVGGWdJkHKXhvUAH545rjUeNdGqkcSQG17SufJMtxjWvEXq",
  "key3": "8Gp3HGyWzYxpHJSQPfRwcSQ4zYKiWDui1vnxyvVG6DgaW6NB3rQNURrSAAfzAPGMRpzmjhSh9DA44Bksji7wC96",
  "key4": "8A17rzDmHD7smx6SCRW5w3owTF8ruZyafXqD7i9YmErRJbTE2r7qZnE8FqfjzMQWcTpzZdjZhHTeDDHq1Vf1qG8",
  "key5": "AhjWuxvzdVUJau5DFLMrEhjWTCgpnmzB2hzzUzmpQc18dekYqaHtbgiwH2t5oaxLSpHJ5KBJuvtTL3UppsDiE9M",
  "key6": "4dc2eAvZMsZ6ucpSFRtTsytTKUPRupx8h4WqZAWLCg2GjDFgmh3fwcF5vVkfAscu6MyzzYuCABgS2iCsa2zrv3uh",
  "key7": "418UvNXawRkNys6rrFDYa5pm3WLT8DNYKj7R5VN8ApYZdLnKzRYUwk7KCdwwK6bej3SNUx65FBMVpGruDJKdVv1F",
  "key8": "4MfRjRrWaVRPFbTKQUayjmpxvbZcGtojAmLKkwsXW8gxjEKhuh3qnHtdwzazRHPCSfCjyL5NcY6PnT6sLHP2rRHr",
  "key9": "5Zjt6fZ6nHKq3p6kTV7BoQ3KauvMW3pqvQBAwRnEALe4ifYtvq2oEruGsm4EQSifVRoqhcASNbqaCWgzCLqc6qw3",
  "key10": "437RnZ8caJGCFZhuYuPMupQUkSYqsbGB9cNxTDwdVE5e72jURgVWsecLmfKCgZ2CbCZ38CpbVBXVzzc7jxMWXB3h",
  "key11": "4RZMdfGzAMvjzBwAnosGToRFVDNPyfcmx847MLrg9Vqc7KTJuvM5PmTZNGUqg4c9GAyb5Fi1EpS6etGgScoVmpDS",
  "key12": "2UyCjH5jDj9MS5ZjHiYxeimptuEWbGgo9BEZMVFdNnTHntKDMnVMdz455qLqN75e6iqwbL6xeqZmzK71iEQvgZQw",
  "key13": "2m2TXZknuRS18WZgULzrizguk6QDqbkuH2giTB23dByzXdE4hJggYrPJsRaUUEF4uzP6fnSgKHaL5ALDWRs85ZHQ",
  "key14": "6yL97syL2cQX8LMJzbbWVU2ptZP413GAXCufjeLoemMMtvj4Tcnx3drcVxjMhWGUkEpgPhCo5aQnK6Ta2ydLtWp",
  "key15": "5FkF4YurisSGbSaMYYhCeH5A4mVFuFQhUZYzh6n68UcNGgp1QrvpnjEh1fo7vDfi8wxNxwAnk7bCbMxTXvmW7jUh",
  "key16": "5tvFhAUqbePT74foU8SRsg2huYApS9cxXxNneTdcm4kFu4BcxKvDA1M3xtCWrgo8K5chpHWk4n2FrLMMZxtt5tHw",
  "key17": "Xc57svrcJRVN2sujv5M2c1msC9odBEj5sZ1ED8tVDZQTcTi6F6gA1Kny2zwS9XJR1Q3ATnQfXyD88koMmWNxtJv",
  "key18": "xsrUy4w7Uau2p2xq3VqHCgzQFfhiiGJxKv2o12G4To9pBUnNUdbH1uahKnUAV3UyQ5F6SwhXjVbzT2AT9QnkYQC",
  "key19": "mXxVYg75xoY6YgFp2NZdGF7NLRmCrjE22rMt5gjXCzaZDbxf7QkS3ZLiProAYiPQibggwgWjLwHH9vbzY2xSjMQ",
  "key20": "34ycRL3YUMN2HEBRDqQ1s6u479nhwG9bDTnHAEZdyVwKEAh6vWsFw9yfQCj36bvZDHMikyLNg8KbhnB5ELY3MFkq",
  "key21": "4u5wrotsgD1cEYFgprnNc2a7FokJejJ3rhA1iMarYXBX7M7t9s4TGypZ42m6KHDDpW5y2QZHoiV8MiQZq6CQjk3D",
  "key22": "2DEfkAENPH4GJJFwzt3i28PeK9TShddhaUDKS1L1h7PfMx1c2VyCBS2DpBw5t4a1v231xH2ufAE9uH3MjXUSHrCH",
  "key23": "4H3rQVgbPPzQn6EkfBU4XkAtiPpJoS26efd1Uy5KLWKvuqiciVZew1tCFaKYn234fRX7Yk6AaUDvJ6FZ9tjp534W",
  "key24": "3hwEF5hhAaBYP82chJ4A8x3GTsm56CRSKh4q1uyxvZezD6Rw7NcUz5cQif1B5WLuTgx6YbxB39Yewu1ZC26RF8vT",
  "key25": "5QGFvSjKeHmNRNhPFPoBdnHYoMk8cf5SELFaebRVbEUFDgdoSDpvpbUL4vbEJqeXYMHSJ21Yqts2LFbKzUFxvMtb",
  "key26": "5W4UJ8to2su6E45r1VCq1ScqwgFjowzyt2qAHbSkbGUUH5Ajw9xX2ShijNxy9HfAHVRJxLYmyNAyd5GhjiPFMTPk",
  "key27": "2vUirc6Zi4iDH5o66ptxXHfoTw96sYJgJiBCJZCHudjGT1thEVswdJvkUi9UcotHbF5ZAKTdpuXA36jsx2XQiCmS",
  "key28": "qeXNSLvkPdPzcGkk8sXKt5CRRgjWTYYDKkc2tDtBkRyjsdRHdmznZWbrkKY4wchf1h6bb5jqawmvx793xG5vGiA",
  "key29": "3kfa8YXFQBgca795wtwivMgrAvtwkatfCWwFMofJmj1sWrGSG4ZwUy2f87xtNoRxAsrYPRmqQ2yGcbcLazcV9UtY"
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
