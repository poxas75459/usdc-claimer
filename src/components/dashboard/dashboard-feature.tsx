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
    "2QYqiiP7iCEgMi3evqXKa9peRBkgYHf9c1Qaa755ooA3fM7ySER8s8Lz6chP7txZdeZe6WJSjJ6dZo6SLtLsS967"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KY1MeKQszTUKdtUTPqAhFQkgv8a2E99m6y38ECUcUj4nG17LrebWGbrxLNeG4rA61Na6Rrm311fjv9mGpbZsuuD",
  "key1": "4E2dMTk8i3yCozv1X2srCDyVp3wp8yVModrFZo8rEx2Hvthdw28xqqNCipb4RExSTZfXXhcKNQnp9aN8gSZoEs3U",
  "key2": "2jtKTjaKvWx4dx1Jx7JksdQzVg2GoJbFNTfxsRabtnhRMwfBADTAGQ7DZzJQgUrnnmDsRfhcPQuKFtYaqaYf8fdx",
  "key3": "2mEjfit3M1gwvgHzr6TFcJBNBpdcnpWtDxoUvrWF4j6qZoYg34Se47hact17vM5ekuj1P4WL7hJz4GWTvBDpg8YJ",
  "key4": "X2tzfYrNHJcbjHRpQhuRSpFPRCMx1scXqWQpfypyoHjpZpqxhsoo18DV7dhw1k3sCGGNzZGHWKE27LxXCVLnEgZ",
  "key5": "4kRLvWMxTMdYMEe1T1RpLzRDPdjYQc5XMMKnnoF2btP76FfMi2fznQk5ZQM8SkjNxWVU7BNAMUvsEtXHwfutV9ee",
  "key6": "37CwoQ6MvXTqCDXaJaH4X9cwTAcTboUY6EfyvUnHW5ky28uFnQQ6AmVsNFGvLJ2p8SRNSyB6jCKXftToT1mXKxW",
  "key7": "3p5US5jydoiTFPK7ZsC4j4Jenu6PKuPCxbgN7RvQrxeEKtiYer7hU6XvpDq67jAGv8wNu5mpV4vx316Zuk6mTd7o",
  "key8": "4gN7WATDVop7t8j6NMWUBiEqEEbRNXBQfYfkNpKoZk1cEbCxuqn9ieiYi67f5MW2sM5wsqMa38e6c5Pms9tVKKy1",
  "key9": "5ZQzvBNtBUwTXDXx6q2qM5n9CYFmdvdQbyDgU3dyExSGcZWTzTJ85FcEN6ANtZHR2oyDoAQYxx6n2817qqpMf7xo",
  "key10": "5Wvp6URNRDWMoA2wdfaLGcw9825ueRiRNH1NhNBmeCsaFjbY4ew2hPaCSxoWjYjyzWQ2TLGczYugY5dNNLb9sdRP",
  "key11": "4YdwG5oxuQWWsBrAhRS6XqJMJUv4WVe3yUnJkmWHkxqrtWS9y5GvE9KUJTvriWv47d7PjCz9StL5CUg1tUnjxDN3",
  "key12": "devWNN1hAcUXv56Lu2Y7yAvmrzMKoirzjNFnsWySgTmuHXTRJ84FP7cZYY2SCDA6qSQCWhNVbrHZ7BAfdgL3M8C",
  "key13": "4SwEShjZZEhBVNExnAPgxnewmH2Zw2XCGVVsSURaDhEkk14QoSzEPQjn8a3uoEZdxGYZQVwrQkeW1ftpGVgJYhrj",
  "key14": "2tyhoqgkE6QtowwQauEftX58aBjJUzjgiRMTDVvfGgLpbuuzgGjYq8HoXAS8t9Y128GPVBAfFksdDogLLpCg7SiK",
  "key15": "4DCCS22x5Kcb8ffG2pC6GsnwYoFy319Gy4NRXo9RoGLbmgShUBD15D6uyGrSyob3fMJzQWgTN4XhP5HgswosNM3S",
  "key16": "3zuRkYhJBZjmXpgqNnJVQh5dqiCcD4bHLmswZN8aUyHZz1vLu9wLsTJ3uH2pyVXraL15ELCUtaDLbQEdU3NDZqKf",
  "key17": "3njhHm2XpJUswY5iZzSho6zDMYt22ck5S6xZD5n2Z1ghZsdqSkdAx2juCNf3X6TxsgsrdycuhDRRg8TDyLCWVixX",
  "key18": "2CbPCKvvT6hm66HHHiKwZLyBqe9qLWnAa2gqfMT2EZqqDmvfKo3gpgXoQJZMCjJ5trQDCistShwpLhhCdu4A3zGv",
  "key19": "2WDhbDRbZRpmu1W5oN3sM21CXrisBXuePCwQ7UvvMTb86uLXuDmVbCe1JarAbSQq9sj6WLL2GNetp9wb8G5XKbGc",
  "key20": "2xQf2TT4QuAk9fDEeJuhS93kM4EwRPxYTk2YdLksAk12zv2dTYFahkjGbrGFNdGKR6bh5uu3WU9oqvsJ1hXQNkEu",
  "key21": "2mLzQRn7nb4PWaehnEJbVrKAUAHPejVzkJm2WUfrBfRhcrAVK2LnUqtgUbcwfRrpKf8WovUud2CL8PMBH6vBCeYW",
  "key22": "2byJuVUDBaPxwqLLHARGPkRJPa6Qmz3WvAKJhwSnWUjnAPkZbqR7KsmWBZk5R1n7YUuwx851MAsGS14wvadA6Pki",
  "key23": "4zYJayx5hSATqxUhN1Nf964ESND37Sup4DKFnb7pN4uHftsNYLQ8ZHrrxBaSdiz9JQJKFYxFkUZaLwzUnSyqM41v",
  "key24": "3QsKwdhqbT2Pwuyc7s4s7DWNTwBh3x5QcF1GX3spEe1LwnPuuFTyBLobpgE7TGbJfUQgfZGdcd6gxSBRGqxkmr5J",
  "key25": "38cQwv5BjpXYu1KwYnopb7RV6yfgp5SDTnzMXCNcQMfzumwd9xnPy2R3uX3CSQPz8Y3wMkZXQa7Vs1MhymbAJXGE"
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
