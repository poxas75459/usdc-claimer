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
    "hrWt8J46bo2D1nRf7nZmgKWR5SWLsRVfsP6qqgNFkP96qSqJvNkyMAcCy9rdxhUxBtS12stUhSMNHzZgqRygBao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YgXUMjZjmKqUXsMPotE8YKi6u92uNS79weq2oZWXYg3bgB7XdTAMo6KA25MwR1GWQEDVruU7yCqEeCewiGRctiZ",
  "key1": "3MZKHeDM41SuhyCpmDixJnC8A6YhttRYQpgHnio83bUsFyuT6ANPsEbiXJf9BwyFSrWpNiD276wnUeeBNayF2pUu",
  "key2": "34WVvoqBnpTmUQFwCC7WHGF9VF3qxh78BThs19bx2unKW1VhgqXfNNrnSySzYvSkKsMPfpjuoni4w5zAakZK861g",
  "key3": "5Zr2PYsa4XNeqKSht8D4tVJhrxebe58a221zCFEw6ekUX9L7EbfnSFKq6R9Jzgrit6YKaqwnJqAqHvKbB8d9yDGs",
  "key4": "yB2W3TtjNQvjPKKhGuJx8xde8QLhbJy7LM5CwLJnY3MLcZ3qptNSB9hf4xVBDfyiNokGDPX42ypRccfoELPSsXW",
  "key5": "qKYPZiYm6fHiuFxPoZcttoMG6sshYDQ3FddjzA8jxdBUyYucA4rkJDTVojCks1XUo3ZhXZrUJo1XDj3cZqZTR8S",
  "key6": "2Ak6CGYBaKFkgQ1EzZnCWHaVanZgKfTjfusrKpZaTygghw6NPRVgCmH1QBhEiEPxtfqAQNFJDRsNrcjwCg6JgaAQ",
  "key7": "41aSS9LCQVS3MviWiWSkzXrCMrdRgofmqV52GNSYMXEyFTcXensJZ4yMaEX6qknWazoiFSrD7Nte4brsTb7fWUvG",
  "key8": "GSCBkuZRAf793vNLnt7cShFfyDeJLJRGt8tD388NYRgE8VdAEgaYoV1nwzN4oCu5aqgu45cKhpTSyeNXGtUo1fP",
  "key9": "48WggenxduW89mNT78yAT2xrMRHWtapM8Ya3E5dSwbnZNH1BcAZEoZR2XdX2sEg6XC26jTWPicNdPQVZvaRo1Dko",
  "key10": "aP3h2V5rePFyBhLwAEjHMo6t6LHycjSzBmBDCEphcLkaeDcnidS9Nr2CVevQy7J9ce4BK2H5LZ6anFLF2tNZS7o",
  "key11": "4mKVA9NiMXWSacSnswMEYccebvbyY4DQW4QkqxeKH3YH4nRSdBm9XEceKCT6UKfCwtDYrihk6vmWZiARYGEQmC8m",
  "key12": "49M23buT63kNa5jp9zrN7RSaA4apju2RkFvzh5FeQs7bjSrYFDbJtrnSW4eBJFfUfPzK5DJCdc7V9pDYK7EmKbyG",
  "key13": "55VXqLL84i8HVwoyMwWoTBcPxTLwrFJgMMENAgVSmHuDdvd2pGkxhe4qWgXqkWu6Gk92u1zE2XxXQYrG4jNCfBF5",
  "key14": "39uBaMaPCPh4h74eT7Trr4hYCnMDYZQUobUxxZAfoQYNsLTj69bQNorsjWpxTnivhJk3WN7sVno9KCL8U7Tj45ej",
  "key15": "SRmvwPc5nquvkc6K9gbJ3jxi2GhhZx5FVRcZBy7n23ABJFCvYrEairoHPSmxPjt9wWYRumE7MU75UqQHamqXsY4",
  "key16": "4zFyG5CogkSvvp9foyN6oGZWC77V4MAwtvJV6CCeuFcud42aAF2bvHwDj3JdqHJ7KnxxS3J1gmxKZoKLHkzy6boj",
  "key17": "3fdDtfFUvbGBZfbDriQuF7Ytdcc1NrK3cS4u7YhNnKzrTkiWTxKWQtD51vhXZecy7BVz5AVqcXP7Y3RTnUoKrn49",
  "key18": "4ir4FFpwK1ZcTEidScbM6kHuxku65WYqroGmLL13Mo3TFpvwznXgDTrgkfZnzwcFioCHXVCHBuGU4NFnNf5qvyyy",
  "key19": "4y4M97QmmPsRB8brffSN2ABtwG8v4vdGkwCetmffrBbjUAe5nDawa5k2PbzJ9WpLSKXdhLnHjexzZQMKbYdjc7LL",
  "key20": "39YeSq6oNrsfruK43tpXkfs6vUu7fzwzN8Xqw6Qm9Do7Q79h2FZLha4MD2Um78HMH8sfWfW4HgJdYmAjZ5YL25r9",
  "key21": "3xucvGWyxszkTf1grbmwEqsDQdSbWH4v1LMY8UWDzRvXab6wPZvLA1FGytDJGg3CgMgULVK8oefFhfQ9TUKngAfo",
  "key22": "2Yt5FdsNxDhkiGc15qQVtBHsdPqwBF9o3B2gy7b8YBHT54Rp8w6igiJrozhKuVgBRgQPQWsNgugj15JKXVaRHVfE",
  "key23": "VoF7sNDTvFXvzPbrjbyKyJa43htSzbq6eBdnUcxhfYykK2T9qmVu8GTHmJHr21jpqSgy7SkyFbSj4UwhjMXnMSe",
  "key24": "2VqE9kuMcpxZCoxiYMszuZJcTp94Zj8pvVPZ8YFM2ZbAaXGevkrMTn5bZYg7FNn5K6y6GbsiJ6nVX2iJwUvadQjP",
  "key25": "4MHRuUSECUsaNx3L7tWiPY7Z3uqoX97Bk7rH7nHnBZcxVZASc9RYSFdNQu3BVepV5qud22Cu94cMGaP22DtkK77X",
  "key26": "51QKJBpcqX1weYTzymE2gn7M9xNsQ5XvgbARDYfGbDLss666UftdJ8khT4dKgqig2XAEywYQWsRy1Dsj7j1xKvFr",
  "key27": "3MdgzkRFpNC2CPMpbesxajSWySMyLQ2ebXhXeCuyV6Vb58QiGrfrjYGZdcDqBubwqNffbTDvggsrf9ZT2j7qi3T9"
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
