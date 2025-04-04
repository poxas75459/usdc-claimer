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
    "3GMomQ4et75J5CNtEaXe9sZEQuoesmMczJWDNva2yT3m1MhEj4VEUhtX8JaUU3u8QRyvYmZTwNYQvXrr9yEw4haN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jo6q6E3RGeQebiowvLfoZ8NGLi9nYCVRnSP7eYdBthW854R9cXCGB96kHYjrwrjnJ339XoatuhJotn9t8tZAi3U",
  "key1": "3fZsBT5j5v6BGKEtesmrE2HE5S14Z3odr67KzEp8K8Pn8bE1kCLFR8njBAbrDdDq8vo5GhReoCVdKvCDQwRbUiUW",
  "key2": "iMc6Bvve9ud2kFuTKyDQcyp7HoDCm29deGuDEspDSBsVLgrm3UqPZSarBcnyNsXxmkGGMJWfuN2vpQtZPtwMjP8",
  "key3": "241AEgvRQsbVDNsUvHD2nfWr9fJ2SZJTp1X3ZjZLFBsgVnYyZ3933Wmc3uRDFBw6ehfrh5sRbQzESpbVkwYzbGFz",
  "key4": "3tFWYyZxPvJDNUJaS5qfxtnH9j4cMoUaa4SvxsZbgKo6JMeGND9w72MsWoF1DY5kaFxgv8U1V3EXSHDP33Ur3fGf",
  "key5": "4e5avU1baLUcJYHpLUfgKKgmEYyqRKeuLoNQLPunTzU9ZHYyjxqXRNakitiNhX52W9SW7jVmmu37YHQs3c9t9JZ7",
  "key6": "4bkR9mV27YXSne2YgUGnFsMTYdpDotJG8cxLfw7ATxpGVKdbirFJWKCS7eRXSp9PUEeum7sGcg869bMKe4Xb6Nzb",
  "key7": "5hZ1REUQf7jVfmXdRwigmwevhBYCLeiDWfvTWB6cVwPUCNmU8xNEgYH3fPwyRTKMcZN5ZLYngV1uTMuEwBmBfD7g",
  "key8": "49pULP6EWd2YhfdwF1S34f3shFjkzcMupZRywgancwHwfvjLnqzSMUM5EotDcnfhKnEc3iyQ9qyw7GWHjFz6zgRM",
  "key9": "3GawFF8KnCpZmJi66FrLwKkpwwWijume9ZZGx6sJnB1zm7SyqemsnbCiphRtPfp5MdjqBNYA1ACaSxUousgaU65L",
  "key10": "2uczggF6S6kqxPtp8MBMbCEhc3XjoA8LXqCq1xdeo2gjoCxPcTKJSmMozgwzfJQJKCqk68QrjAaUDecxN5pxL8vF",
  "key11": "2X95oGbgT16XM9KAtZzSxemsnX4kJAsQvFM8sLBhuUQGjhe2otKsP348VutW1th6EinJGLu3x9xpNHqHr6rELSjV",
  "key12": "314zFVgcVxSmMDAGthB63z651zdGa8g5QfFmpnVFMrhgj955xaBSBcJdkLRZmBAQqKNx3AYaJMUjxEWYkyiomAHs",
  "key13": "2yexxq3aV4qFvhxw48G9j9kHRZi9hHYKh5iWJRd7r8xkN5in3BssXvb2KSyCH99EfuB16ypr7hQWsETfq1itbSAC",
  "key14": "3wcg7ZmnenrwcYpyZgjqu2F7aY3zMDg1wZvzQ9Eabk2EG9iBez7pmY1TheXbdwq2VJUqSfir5rjchk6LfrjrBLnV",
  "key15": "2CL4S2586UqvuV9iujRmxGxbeLH61ga9HH5eubSipf8kHVcErPiAjRNA1m4rfiKaW7KwpM69YQf4TuBbHGWpcYiw",
  "key16": "5HScXEs2dR4GRroeMdYwwtaSXnosnEAVZYmDMSGNZ6RQVi3GF4zQtwBtRonHmdLsq4xjuzPA1t2oV2xxZm11uecZ",
  "key17": "3hbgwKt91yqGo97mJ64GLGF1rV8X3FzsRj5hLemi25LtzBzUhJjCnHe8o8EHfxfducvFY5GY2cxuF46jLtcXzgL3",
  "key18": "2pPa3CAGteQL43vdM2FsEUWxtin9spJgTym26AyaQmmmwmFESpMfeQfY7srsdWscYNvn6MQPBzhpz5ULz1L1CCy4",
  "key19": "KvWXHw99CZESxvdiR3farAEk5tKR2r6EkpXuk9yWcC6vTNtr7xX7DqLmQnrdSfKAdUQDMvCZMezdfS6anYpzKfA",
  "key20": "4YGDe8bKgmzFBGsF7ZFqYttEdWqx2c4yc1cEoBd3usP8qw6mJuKFWEBKugS63c1fvahAKo5XVvnQxfpLVogJxboa",
  "key21": "nE7FzKXUwsWM5tx3GUgtqXm1Q97VokxgN9W979EW2tvEeVNLhmUZ7aHTV6fbsrvqNq9pHfqHw156dJVSQLjBEPG",
  "key22": "4n8ukPEWSdgQzVwVCeWayU7ok3R9wWtR7oiR6213jhQph43vtLtCGkrP7TfFSN9JwnYr7iV7HQV5NjshVMvzr61S",
  "key23": "5pT8GxN3Vu2EjwrguHBxqEYZM9yeauLBPSssirBrYifQ3MkatJ7XPosFxEKmUMVynFQtB43VcqBfGfRidCrL2Nrn",
  "key24": "x19jxQCjEsTnBJjXptFT9yCqF8wFtJpFFPja7bBqKCVLVjWw2QxHj5CyJu4BiErekmTLcfr4AxdcmLPRtsfdaMv"
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
