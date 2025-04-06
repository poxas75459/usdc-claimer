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
    "54Y7oTLmo9A5LiddcqieTjuPCbzZGus19HEHfBrLujQrHNWba3RcA2Yy1yTBoE85TPiyJFnomnZrhtfdGV7Tm1Vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NaHQgbiF7yxNEGa2GuWXm7b42PCg3CJg9D1zEBuz7AyugGzaTc7RuJxTJ92MWVdLcyPEWh6ZsUYEhedsBaP1Kt8",
  "key1": "5Gkdvk6dc9id8CePzVobLEHbmskuev7NHCz7Xw7uPmpts9a8oKttQhTjjSkY6vwmuoqNggnDeGGT77mKaEjQNE8A",
  "key2": "4atJsJAPAbpYUeyxCbB8ggPJjACXGdu92CNyr7NCyCGEkmYxN2PnymYwcc8fwbxSoLcJER5rpGdZ7PwVP5AtBchM",
  "key3": "2F9LwTjJGDqH5JMp12ckVAmP1qVaCLANUFo4utt3AKnERd1yUysWMNWTPY183kTR7ZKYrCdCUUkDQcf4ubh6BnhT",
  "key4": "3wQ4tuaz1j49jMSKEaCRPJd4hraoB8eoccvYtShpLxLUUHzqs3KPhxn2Q3Yi43qZ9p6KpEfvXC3jLu151aHHt3tG",
  "key5": "zWPAsnFazi4tBRWF8tfL4oxQB5r5dQVdbW77U3y3tVskq8cRmgeUw5mG7pKmCGiMcgLgrL9qtjEGNqH85Ch7dxU",
  "key6": "4UpLrt9XAVrTTvZSpMCwaNkPDM9fo76hFiQmPbkVxcTMsUHpcDKtmTdG3vi4GPJLPpawd5rvExYWNGqmZvgGPutZ",
  "key7": "3EGJmmtQjfr5uKVwQZwXd8tsfTJqd9RE3T8p1NrCdZQ3NQKFD1Lq1zYWdP6tbJBwBJpGhT75o5D8gLUFPSJ441H9",
  "key8": "35weFKgR7hJ3ZzPmpxEVarxxzFvy8sQ6JsepYDpuamwW9rFvCW8HVqHnTTsi9xiqUi1vmgJaPPPaP2og8tYsi4gM",
  "key9": "udq64JNfqoxUPxCWuc8TgfiBSyMb7VzhYXMp8VFH9DmFHr18DjFZGvBGcQ6PcCJN3v4KybnteEvwkqs7oBiDV4H",
  "key10": "A4dQNCbWZXrUUaDkXQ1QThNy93ni4UJT29VPbRNjnKs1vQbA6AZdiqrFUaAJcWDUcaPSUp1EpRT5Kedsh58cVbS",
  "key11": "Je7xYA2ucWZ2JftAUnpb7F4hAHxrBwWBwL89zEvJLnAeyftyUSunm88AAi6fXPY8WX8pjyiiFt9DqpErS6eQfjP",
  "key12": "5Kn7uWERo6Drd3TJMFNsGtWQv28w1TpQeP93mmh6H8Qw2LtqjmyiQjt6oTzAURDpdjd5hbFVWpPeg3oA8Y6fzp7E",
  "key13": "4iVbKfug7ygYKsUWGchk9WyGgqdA9w1xibtgB4FztCx5VE7qwgXBFH4K2GPMRKufbv2Yd7duCXrsT2fNp92znf5E",
  "key14": "5PCBSRFYeAoibcbpeeATCt2a7agsXEGK6joRi3KGXELqp78EibBVyqTv5vm8NxBLR4gvwSj1xCwDdBgQFcEBB15g",
  "key15": "5HsNvL7LwtWLR7WZvkLTMpi7gcqVFs4XNfyKuk7Vrpv7obuCNDh9Z69a4aw7xU2diPEiyUrGzgE5Wjz6qCe4cY2y",
  "key16": "2QwmzPRgRkTWa1m8TbFXormFk8d48NKNXGkwDb4AkynAw4FRNPDNCNsFfGZo9x5iwAqzHjx7V6Ja3XjaNVpjJRjb",
  "key17": "21yiwora7S6ma83DgTfdsk1UVPuBLHqLBwiEHepig78EKksVpnGMN8PzpLQtoK6qaM6HjChs2Sas5KDwAFQE4e8V",
  "key18": "5TaMAmp45DmR4SuZ6pae5fFeQ4pH7on8NSRjTXdEcXPwWo54Xqpp5qz4z8YBYCFY34w1W2YR3n1cZfwwXAvkDD5X",
  "key19": "32MaYaYHyyjqxc5BFrFd3Tg2C5EuaTa4pgWjZAoB9Yb7FE47hQC3Q2P26qCpEVZcV6F7jcnBnLgBCN4W3txhEUC",
  "key20": "46ytFJEyt1gXbRobfhyrJTRhhB6hnJcTisT2JfAbcByVTRD7PvfjU6Xrn6NeC69XnUiDYVUveFe7r92H3z1wcaDd",
  "key21": "2edFy6G9wnrenAPPwS3gRrYbzTL6KP2rqYmvrVdd8CHUMR7BuqC3YvnNhPXPVtfgZvpoXeMGkaJLHjdDQTc6GjFg",
  "key22": "3mAMwkXHCp3WzpL8xzuGH6nJrMFvpUyM8DS6aP7SMeJhnrubcmiW45rHJCmpbSruL5ynUgG1Goc4ANCAVtkj5FuB",
  "key23": "ggfbZp7sG22DW7qbMvxt8Ct8S2jnFyYTEB1xpPofy9hH5wcqeAj7WMasrAfg7Th5fBGYEs22KWXet7UTNPMSLYD",
  "key24": "4XqKbcKo1Ax3PMTAcdQ7NQwEqE319uRpronuJsN6vJWPakxYBY885fG6azjLb8o4wjX1nkEBAaZuQT5DVYFWpoVs"
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
