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
    "5BfQvE5w4cxwy5zHZNFx5RmjteezWRDwCyAtxeZGwge67aPz8zF5Es3vgaZmSQjFMGpBLjmSBUekjy5erAo8DCfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zjvAvcRABU8mwP8VYqjMbA2CzcvRB6CuFh4YyEcMnR272T7sdHF6jDjNBVFFvsET4M9Pp4waioyqHth56uoh411",
  "key1": "4ZXjpi1sReo5dB1g7Hy42735JL2xKP8zGSWfNA9yC19qDo6k2XEJaLuA68vT2JTmZGLZJGShvZNj6F1hdEQAHszk",
  "key2": "5xmLM3knxBaTiQyVVWYCmjg3a1FsAbME1VeVXCZHAeXh4hxDEUE1rjgW3WWhhjgryLQDCeGHeQqrHZmwnX5PmDzU",
  "key3": "4LtYrCt1AbBsQamHHLHjeVqpkSB7WwGRgcwRfefwdVt1YmZA9oxsPjg9n5sQCrn4xkW9AYAotTUeJtK1pFDNTp8a",
  "key4": "5AztywnXRaGAPAYVTiwmtpcN8Rj1GcvJSkbyLdCAMYENm3sBvF7D6zHSE9UbYJoML7ZQjokuZGVdTjGHn2RaV5vi",
  "key5": "2fGzwBS9HTEfppREt7Mz2cc1TvQxJKqbuU2BjPK7B6EkMWJw4TNKQRtNv58LwktbfzpnS9e4wf7568vAAS9YBb5H",
  "key6": "3WpM4fxuEdYCazMrGhEC6wHQsFwxfprwEQ21wjjQUsTf2P253M8mCcD22HQXRfrnmo6QDo7eZbFoAM2N8gNvbrVN",
  "key7": "2ugU4G8mbrhH3rncXxo1Lu24t1VMmTpdBCKJxbpXB7REWLMNUg1JTcuxQwX3ukGPG6SPZwiZNkHsYKaS6LX2Tacb",
  "key8": "4He5VjyvfUwhZ5jZbzaKESCaHr13tJQGwWhnFZvpio6Z1pG7gM45htUYmvBpFFeAJKLegobMzXniXHb6g8Zki1Mp",
  "key9": "4mgfnf7UL8KjNELoFJ1ZRAuVDd2nXqs6d4ke7z8bvFiQtooCRh4bnhx9FQLowUXywsjFjo2qEM5TY2dEPEULxrTC",
  "key10": "5ay2q5BEuXzvuNNbWz5tRqzBRH4R2ro3iMojUXAzGvWYcrwpsCo2eSjydyHDfejEhRoYpZ6DnyTafc9V8ev6kSJs",
  "key11": "4XHPENmGVqvSaSzZmPpJbuNj5d2TWzfJxXVPbSXbJGXJ6NdV654ScLWfn634yawB8rPjEcCkbnPin1bnsByP7BQe",
  "key12": "5adrQaETqL9586bAgjJdAH8MvNYfBTVU7a7F18EW73SMf27dkJJf7TtpT61tYzwUzbzMrEuo3NTA9XnHwuu1Qy91",
  "key13": "5o2w8Qz4jaR7nCvD9DDYgbCeuVrmPxitVihxrTZjjQq71XoDqQ34qYy2g8ZbvYmJNvbmGGswyASzWJuYFrUtz876",
  "key14": "3hEcAb5NWdBbqMV1zmSJNqR6fjRWaxVfHCG866UfsNLEdkhsHYdEpk6UJd78nuYYcV7BEfWXi9sSxidGpNGU6j3y",
  "key15": "3JxytAYQCsB4LBUNqWsVxew7b6amjjmfM5g9mdHK1b81pxiw6HipJaaBdQKKs7XEcetwGMJdmwxBaqj6gF2Y2D8v",
  "key16": "5qExkyHPpATRU1HaoAwktKpAMaeGkbPdZSDi2mMkqAVYXMDuiDgbWwyQ94CEDfXk6QfkaaiiGbEgkmq8pMk1vmSQ",
  "key17": "oMkiZyqtPn5iAdMPMSHm3C6F88sQD1qG2yVN9QxNTGHM6CgAu5zU9HE7U26gW61z8zz3EUP7xGJa3qvSUqp6Za2",
  "key18": "4wYBkrRwmib9qNtiDWipqZ3SvqQUPUZU4kvPH2VvwJ86EMsj5LcA846j9bhHLhEvhKogZQ3Gkj2KGK86Y4s38STE",
  "key19": "4vv3PZNige8n4owGCQq4NVAP2hmjeqGQmFPDnWHG4211Wrz5PS2GsS6w62LaQmcP8vWVh7SgpC67XUu5QpBuhTDJ",
  "key20": "2foaz85hj7UEt1P4d6MsArDmHKA19E3xT6fxFCHfhqVxXSe8mDr1Avfyjajz1qnNcARBNdFK5nQKex1tjbgKGnLD",
  "key21": "4FZh7hAFzcXH5Rp1wftCZFMcbxNbLw9165Djp9GswT4DqQStfc2XVTJxLBAof89kkf8TXocxHTxVAsASWj1rsiZf",
  "key22": "3uHdXpRUEx2uQEyQzjpDZrfo6PS6qgg7Te1hDzwnGxgM7CfBBA7ibrCUrzNPHRYVd7sB6q2PfgrxuaVrnb5AeDjD",
  "key23": "5LHZ2B1zbq6Jxmg2GrTxwaqJzqC2kURpiprbPGh65BZupxo4cjxokMnGiX1Cqobtf8oxZt5iQjvrrVBLWfJUSrQd",
  "key24": "28JdJ3vjD4ak9D9vJ64oE6xDekMUHaNErviq8DLzZxMSbRiEyan2sDyHStYEwbfFQYxspJjMCapJrQEjJYRqvEMT",
  "key25": "5PLfGBhqyaFAtPPQaK7QNFv842ibFVR3Gs5ENFC91esknAEFcYNzVGycx2eVmD3ACSgoybJxoU4THdg4EwE4VVNZ",
  "key26": "3U3FcQw6VFEX1N7A9ZikZ7MhwTuDkwLDe7mJyRVuzeG3LAZGTjxdTQP8t3QJehHeCyvLeWbMyiocarEk6eXv9jvU",
  "key27": "29ab2cdVRfH4hixfFjfc54Z8vMoNJ4M96PnWgkFqWtr9LucqSBd3TvWj6TcMTV3QNHvoFzMKC9j2RYsqwoDdDBVq",
  "key28": "4R8FHD2wgPBVDfFtUgPPGNp4LwVeooo1AFxZKUYBkWrEPNDtdBnMxo4m5x8iUpGYpxvB8ZiTurYc7K4d9mJb9grs"
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
