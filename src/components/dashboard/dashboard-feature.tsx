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
    "3kSA6cz5ZHNNUCwkXaJpRRyhw5J3AHG3fMyqNateHXTdBtSRrXAe83k22xgLR7XnhZ5cyXExSq6NaM9H6PDnZ4J7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M86qryhcyLLM4Pqfay3dvS23yDhb6aiN8ckSQtbjrnYWqiNopuv92AmyDQiwCgUwShZ72QadJfpC3tJjFazRDx4",
  "key1": "5LwsEEg13cSqCsQD8k5ssSATkoMGRSYrEvoUyPRxeZfu3cQKdGZ5kzVy4CW3WhNXf8BFSPfsCeaYi7BSmjxfpxwL",
  "key2": "DDxAig4712W6MvcN8Kk9DtnZ3Ru8UUeRTHKqdzXzSwo659V6ozBNQczjkTBAotReeqZLjy2CtZmmJv27PT44a97",
  "key3": "L4YstVxCJywDGy4uGHP6tbyb87heprHRqvUnxh77jNFrYF7KwcWgrY1nK28JtEoNddxFsejJaZPyYXpUc8Z75Nm",
  "key4": "34KB5Dwp3hNLEPUw7c3nJhJALmfPcjXK9w6o3yPdotowHVcaWGymoVbcvFJkXCjKpU9g38iLh9ECV8qKJgF5yaRj",
  "key5": "217GYumoz2iDwQcwGLExiKuxtYPhNv3DjFY8pqekwm5Z4dJHcyU8NGMVVUKaxdowTJQJQFyQXy6apkDiLBf4Vetf",
  "key6": "4M7isZUYsUWsoXCNpUXUcDg7LdRpVNk2KejPY6SVApheWfN1wzSz3bQA9B5HpAvZjkTjcf1h4rZXQ6MfdkF4Vqnh",
  "key7": "4nGjahgQLu2fPzVY36CoieWW8MZ7EYvjAjvyG3hUtcbYAS7KgyL2XyFYds2jo1V9bZ65zotHehTkZLb8qQtNv27w",
  "key8": "4apbuznJPw1vJo5LBvr6Rqf2A3J8Su2JLnatMwuWHgkUVEdSqrW3RLBGVKMN7H4tgVrNLotBFf4AvxFu5voy4H96",
  "key9": "4aUfWsgczpcAkpLGivF2do9np2cQ6KASX6w7CCQgSSmcLuqwuxSQQbUtqjhwpDgZ2xPugtvx5K317p5irRHQwPxX",
  "key10": "3GAM4GSdCFfQVWwPcQqrTXQovxXUw1W6oXiVmeFWr7CEYEs6dorwj2wAM8E7DPcwnRJjd2WXyv1V6NWcYRPWgX9u",
  "key11": "5VwcGCwhcVqmZV8TC8DmMR1NdAokwx5SsVfR2NE97paonGnvvGDLnc1BBREZGsge9Z7WjzF1yTpKmpFrVojNYwPD",
  "key12": "43cNLCLDVTNtST885E3Yvdmqj5svN6r5Fzgz1oyURSizoWQwhmsr47fLeE6sC6bCL7uYkMXjZKBpmJ1tq1zfk3tx",
  "key13": "4y86MTT3sr66Vx9A5WP9qgNjTshK6NktpCS8397MZfuDWGj5dR28srP14K3Xkutaf7u3LjeHETSWJuzQcgSQEfDi",
  "key14": "4XD7454VoKZjzYRFDQjU8SJ3EFKhYicP2WAxPz6Spu7E8in1CrzDhDnfsXhWqe8QnbcEAsj63D2e5G1WVg7Pt4g4",
  "key15": "5VfBoCaQ28edkByToFRELFE15FWc5nHM1L3AZJsMjUJ8YJmihGBQHU8VnETWh1ZSgjkQgvGTjWPKrQFEzk9JDBSZ",
  "key16": "3dimwuhXC6roBiWiNHZF45BGpL2ebHadtGvt5EHd7hXkGZU3tJngLmPskQyU9KbfUMXyShxTFtdVKTc5MhA4LUBs",
  "key17": "5BVskBZ2A3SQRtTAiKSpqZ5j3URyiapmQAE4qACsHWvRHZQ1pQRjtZbyYrR4RuBBpEBxn1zC5ScwL9uUW8zSaEQt",
  "key18": "4KFN4HxKgvm1yLF83LPZ4YdjkaxooGAri7M2tN3VYT3mrx2wSmF8K4mE1xUfknpjCVaPaQZL5QprCYnuhQh4dk2F",
  "key19": "cVb38yx66Qrrj8dKRAkgUBqW4niL4iqn6mkoP1hhGYGSVidMaCB7SeRNradxmXRzgCVWSfFrofD6WdFE7M2HYgd",
  "key20": "4CLFg3PXK8aSCLYPkvK4dDh1eND3KzNRLdLE62d6tfnFYwqpVMMzCfuHH3Udzt95MUJ67hWF9vaecvSmtimQ9EGW",
  "key21": "4VrGqVyVkwu825QTD68ARHYF4rwgdqJAdgbvQn99qoUVnZVJxHYE38mqtTqNn4HjRSTMKMisgQ2jDAK5isTh7ZEG",
  "key22": "235wWW7fu47dwwdYVbPmDwuUTVuky1CzKUFSjEEX8vCf7xsSqBKJ1SKQMxnfiPWSNK4tpH9ihud41K3rCGhTHAmF",
  "key23": "3oYtfBgmubMTbwGoZpg7yeeGFrxzEKUMTX4Yqdo8D2RD9vDwtgvijmVFuyUcruBCed4VPAkUqFZqfGimyRtTiusL",
  "key24": "3Cw2fCVNRryUTySAwWJzJ3VQy29sQG53muqEGQfbDx6MQsTLWnubMLQ5hLHfhMh9pGZYr1i288gGkhJrrisnhazJ",
  "key25": "7579pX2CJp3uTXqCjMkSHdE5JeSg5F4dAqcpaes7j7FgjqEqyed5MRuzb3715STfeKoaRK6Zr6FtEJpz6wVUqyR",
  "key26": "5VTpgTSNjxtsUABohXD2TF1CzsrP2d5SvGZhku3272PsGpNDbQu4tkRdvdDhAVNLB6LbFK65YYj8eXq9cDEpgpB1",
  "key27": "3xadicaErJYQhZqPGEiS4UjsxTx1g56nU6vggZXKaTkF6s1G7rHA7TchaqDf5iVgcLwmREaYM3gMA7e5HBmCfVzo",
  "key28": "4TTRxxkRXkJkUUiWKGN6h7QE9jZ7hN4rnvcBqAiZkGDncJ6VEHDwsaJ9RTr8mMyZBz43jQmADMt2woc5aDwQJg2d"
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
