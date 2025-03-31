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
    "4urv8rmhdZNo7JmKpP6DULF3hn4Ua9aupiH6WtxjR46fMEanqkqjxQHadJJQsYaJpiSPHfQdY2Wa9yL4HvBy669Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TiTfkeWu6sQrzBva7Q6pvcuCUDvST8w17vs9AvHJpWGi5UV4JScNHqrQnjrXQeqebaR6JP9AVWdpjY5CJMQr6Ay",
  "key1": "4KNsVVchTDEhHFuKi25bMKZqQoMYQcQXTknmP6doViuMwmzxiyZ4DBmgYfXfMxuy6bV1CR43UQFYpQ5o13qqwDWg",
  "key2": "4hFuiAyTPV5EtaDJvu7sUo5unf1xGy4BReMWcidr4ZwbSdKeM43BD5QgHHes3fSWe1M2qGQYxFHe3kyqY5zC4KpQ",
  "key3": "4HMiz3yL2428S8eiwA9Xr4HA7q7f71Jj6ytPU2M2kM5QKA7Mg2kz5AQ1CWRS1jNRYg1jBNkwt4w2Z6Z4dBR352Ev",
  "key4": "64bPrR5nPDRqHqYy5xax7AhWBdgb9ySLjMZTBpR6RxcqpFpaaWYAz9Aq2Uoa74fdsAfpL6SXy6dNjMeuTMHG14MA",
  "key5": "4TrbZLSXCoyR9mrvqbksuNgXqyCmUk6bXd2QD1DbymwHYDDNLyrwS89rU7WkkLegzu7AXyjmfpGK7npDvJ5RfPaT",
  "key6": "36kiSjBskwk75W7B3bQGUgwiuYFWYfkzoHgD6bSRZgHqad8PF7YQCgTjaKXPHq7XqDwvo9vFcqu5PFNC7721S7vc",
  "key7": "3rXPgAzsv4eqRFUx49JqSMR7p41LNpHvYykVuhKN2Z96XvVJEzjm4grbvCqhnqCAfydnoVVmgkgBgjEXezxVQgoh",
  "key8": "2VN9hrzDuFv67LqepjR4T17WpBACdGekT7JBKajGFnRWbjutLoYdtwiceudJL4cTVzVr89UZwSzCBdTZ5rCRLHgi",
  "key9": "4qM336iYvZjEwypsUKdtoisiHCfkNKhr6JE6pdDfwCMxaSBfxXmVZrB59K482dTeC88P5QLBeTQ5bH8RUhiWDK7L",
  "key10": "3sNXfAWXdZFevpVkCFiBb4aRFtGPqTZYuiYJp4PxTXfgbBEWPeY52voFp6P5KDQhFyPkcLDTjqkaqvquSfFZzdCY",
  "key11": "4sZzCWGPAkyQ2USmY8SNbtivKtFsWAVobDRWzUAmbDTb1wH71tv1w1645TiBzxAn5frXUrcYKtaUEiNurPeGTgXq",
  "key12": "49s53Y21iMNtjbBFgNjZDL9eXhiVRno6cDR1dGjYZwWe5KNmxtVXn2cAAZunQ4MG4yCRWPiUuEs5VovRdBM7hYTP",
  "key13": "2xyGSf3AeQxeuLpdW9Rt9fK4hUFJhbVqkrT5WoKJeJcGForxJD3R3rLNkeFtbPFBAYQJErZPNC85HVRedQWrbpQp",
  "key14": "3eLWFRT2QdfoEmpK5ZVwGVFFtBxceRfhpA3S15jN2P8ptJgE8XDK3VFgfXNndLzcZR9aDJL29TxAuGbRgjP2KUav",
  "key15": "4ZfbY4RicLEojbgehpUoG38c8tAgBi4rGZ5yxskGBK7gcoP6ZTTL5J3PZTPKjyyKMvx3WJV9dgjFDPHc1xEZy1XE",
  "key16": "5Ty617ELcWo6pnwprZCroQaiGR2f35dE3qgQ48na2Nuyah9ndUBHCMYCm1yiAf3Km5XhNE5RCFd9TA1gfi6JC96d",
  "key17": "4ntQL5ej7KxkspWcp9n3kpFRZ4LxZVr8JTzvrwPFjVkQcC6anakdzZeBdvhdPH62rPVfEDRxLEggDmWmN6RfpuYR",
  "key18": "4bPKNcBxoZJ9w98UbX6oQi32zAfPdB6YFu8N8yfaNcM7cRybcQxJxmL3vNerzWXb7Vviv7JRoHxFExNw95kT1TNY",
  "key19": "5WRVKXAkFuvUpNtkynx9yuk2P57dhw9QGvMyuVhCByUcGSVjAfEtUGxgkNUL4UR9eHrLVoQLg9xv4SrusVcVpkUq",
  "key20": "4DmzakJzFU5jwFFcJ9XALiEU7kzFJzY4TT6GeBV47USfRd8iL3VQ7xUVD4SvQUeRzYET3SpEaAy82fw3Nbewshn",
  "key21": "3tz9Snu4PgoWCMFBXxyRb4SjtnDuqYeJvyk9VPpSN74vKPF8S6EWZvRvD1t4vJavi4RSvrujAWF9Mw9Axnea1jkF",
  "key22": "2gLTiF15bDw9MVxyyCZS6ip1MmwQ4StLehd2HMxi3pqcdekhSSGp5iQuBAAFDUByLDtgs93u4CAqvV7ZJY34msve",
  "key23": "66J25zhiqcWCqMw8Ba4sxsLmgPEdLKnCxcreq6f8bfnzaFnTRDaQEdB35KfgHWV47uC7avuySBA1B3j9QVSb99aj",
  "key24": "5dE4fvq2NzxosFcfPAgujvp8ote463FCubWKyYPnZRySCSCvzf1YoaiywxMeqoSQapf1uWyePq1HSnYA7mZVDWAT",
  "key25": "GWXrSwn5chmxK63rbN3PDw1CTHrzVsmyBnEAwQB98BDVzTriAgg3WQTdSLiGTUeJqxnTRQzVfDNWGLZDs4hf3rq",
  "key26": "1XPiXrLR2PUrbKcwsPLJis6SkUWHebGAQgDRqRzjjf9P2Ks7FZUwjTHfZ6Hg6U3EVDUKecW3HYcJxXPE6ZuoTeD",
  "key27": "5FmqTQX3E2k7xVhMtQdKpPZzHgYRXMVyFtWVqoLba7zpHx4R1sTZx5XPBQMRqHYYEtJXJ4GvCHy4UoospFxyYYiu",
  "key28": "3EHJeMYLMMGZFE4kmcVPTCpFWUnJ18Rm5hpqw27LRg9iBq6KddHMpcRiqQrYLwBfCn8uJUDEzgtjRny9Nm5zyGMG"
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
