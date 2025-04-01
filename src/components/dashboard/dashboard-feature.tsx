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
    "3zyCjVfKrLJKDWMHApCE83RaX4GZPU4VWHLUKsUHv4A77WkE5i5tveDD1HQFvEwiuNkEF63NDdLgEQURr15ahhip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BF6XFmfZDRkSsuocRHDeu7zXA2ifQCXdYHq2yxUMSk1k8F3shy5ChxGjGTbEfbCoH1q1oUZYFVCNPWQ29m5swB",
  "key1": "657rgMNrkPXjDuSmrZNXnUj7eXh99FYchifzJK8Xn1bmoKDEFntFmfQz1ETQEzus238ESASq3J9jw22VYjgfzEP7",
  "key2": "5RdzXBVE7kKXrAzyCArxZ87E7P5AaiY29STnWz6GvvKXekuqbLwtGNvkFeGSGbifqfkVccx659RpbcEiTw4nQoJE",
  "key3": "2eUiAQySML4T5yaStNdeaPuTq3YsGnN5EwXTN6TY4eZCVG5NR7miZsk1PSJoJ6SPLsgsg4jYnTWTs2YA41mvvDKz",
  "key4": "56nCEES4KVYRJr9zd8V4zXMEmAv76qJcLXAqAhdPzMPp6HaSdzVw9TNdaNNDQ2nUrSkVqUsJEt8eP4dv8kcdj5kR",
  "key5": "67TAbKcfTwY4mY9nrfFNzo1LDw2SPLmmedaX3eXLcdDyNkFBVFXyRAwmhbEXFuPgfpKzMWjaqJq6mfHb7H7tvecY",
  "key6": "2XnKiXtWxhh6h2ZSCfTRDNk5MwroXWfMfg1HDtDwfSq3kiwLeAfosHC9HUdxzJvWUd5WA9MxH8xYG7gYUQVhN13q",
  "key7": "3GFsjtUeywzJAXyUjeNVum6hKUAo5XFFvHx25EP5NAETSRHF6ohGDofDZiJBAZXDMbXN8KD1vVcHtY8RKdzE6FqN",
  "key8": "2TBE7RRgCYyCLuCRz6D6So1LPN2HNpZdrmCEQbv1CXoUEZZ99ZjuTWzdaYBVDVj9w6UikdQfhgfGw3QPcco5cXDi",
  "key9": "hpEMbuvRAYPZMowVuToG5qwKK64XXBnMDuXaKjvoiTbkuxWp1DSubQykidPskTnzPoopsMZwV8jHE3a2cjY8biJ",
  "key10": "3V3QaGwtXokAJKTVHoAvxrbc9Bd8ZCa195ZGRpRjdsB8oH4EexmoqCCbdYLYS8fwtAUGEvDekEfyGXpcQrnyBnC5",
  "key11": "4JQn6nGKFu4GatSFnPFBzPbWK6NMP7zqjT2aGqBXnQEXWYHMKj54sh6kM3H5EqEGgaL7Y8Qi6H1JrKXmQ3ZYeJro",
  "key12": "LcskS5FpiaRRFAaAzs29dF3jiKEuM6NfC9KHJ2TnbNa5GuURnBaBYS6YUwcMwau1XE2sjSXTwC1QohJy6sSTTm6",
  "key13": "bafuufrYryaywgTocew4xHyCb7CwZCEgZbceJDqMbtyi3t66JMcC1myiuGU4aoxf5bDU83GtbBZpq5a4NqMLBE8",
  "key14": "4q8izn56C314aH22CD1gnMayVPozgDfBLgJVCKs99LKGTVMDD5DVWHu79NkfwaQ1XuTfhLATWqoHbNqUAUAiY7Xg",
  "key15": "4yLcbh16zsvauDA8UrcPyRUDBQjg1wXQqsfcUWf67YnQZmQpUxBCY4Y33ndtfiju9zmiBacCAs4UD2mjv6gCqxjv",
  "key16": "2t5wq4Hdd9N3gEniHeebtvZzM6NoPn7JjSf9PGVapFqvBBjLJ8RBvzXq8nQNTFiL8YLZPKx5Yag1xw5X3rp1kz2N",
  "key17": "5kXBxMheck7wxfRYS9nxvxa4fUWPWQrtiATSUCnAhQGPptZs7qDJuemi2VtUu6kWeGt9mm6E4H7WczgutJ441i2s",
  "key18": "4z72kE7Ughy1tLpWQzgdnNNi1uXvK5Ci3TkUEXA6hzEKhSB8QhNm8E7bLkX66vv1GYjRL6otqqex9d71iaxeGAc5",
  "key19": "kxDEbX9HoC2hQ2C27KewadrE8QfXMhJz8MXvG1nw4mrBdktGLEUHbKZXaErACUHUbRZyrks5pZUmSGr4LAnQVFR",
  "key20": "aNvmqAZKvXuT1e4jfHa8T73YgMcMT9oBpVUsFTrdM36TjJtrKejfGCPWVJGAeoM6Us9H9DWRFc9wUPiY1R8tUw2",
  "key21": "3pDKuvXGKuE83ToGGSnRyq1cN5aBjFbwSGwyDwjAuVNtukRea1R6yFJ9xQwkQBHEhTimBu4V8Y4jWwhkuetkMXCD",
  "key22": "4XNsJmpfT1AKftbNQ6kGqSJaeaY7phdsjJQV6GZU7PtDZN6SkMDp1tL2qvDRvMzFizxGB33QtPBRiiwDidN2ZCLh",
  "key23": "4WZjZj8JwVB3KkATebGU13LFg6U97bFPfJmew5wHm9SgAWy4pkZ6w74BRokyRorKUq43FDDMbUng3AtVZB19yo8E",
  "key24": "dR6pY2ZgMMiwf5AdyVeSU45t6QhUmpFsduWLYdxeRjh5mddnajmiBqDBemExx5nGirFGnQaFjiNqPewAohSFQXY",
  "key25": "23BTTExZhrpHw3LD41kqnDTtNakyxPnLmPfTgHf4MGhkodGg6DwHiF4NoYt2Qi5N7JR6L1UvCyYtHq3gU3UskgDN",
  "key26": "5ufD6zkGMqRvBiNNqVjY94NgvDvYSNESoQGtZTesSnoH23PAa2NnebTp6VdvrwbyrJxHXbz5g3mnoR9KLEiQzDUF",
  "key27": "5FELfvmv9ZNWDGG7qvpvU4tv2jk13r1hFXmdyhWQ69451E6wGiz13zHw5GWqCWbAoekBtS3d17vGPqSPLLb8LRBJ",
  "key28": "4eaA9krxVLLLSTCHBGwXk9fHWHBH5FLraDZafni9oLcm3T1DPaiZFGzThQ5F84w7csNHCq3wGpsYDh9ysY9PiYyQ",
  "key29": "4LbEgsZs3fXRCL7VsWK4Lt8QmPFL2dSov6QXbzChi6qqTBoEz8C74ahjhsU6L1sDkdRmKE4969uTLi6F28oK2jDe",
  "key30": "3hfSnfxndHjBQ8Kd1HXZ4LbbfyMhyShwX67coqPALzQ4G6BDsZAHXiDwXJbURFsSmuyyt5QB8T9hk2PTPWcHQjXf",
  "key31": "2kxTG34dgJGAGdHpTA94xF9fuaKfcKW7uT9Ejv6K1ogHLZV4jTNCqREwyo6oo9UBkFrzErznYMj23ZczjejsFkUg",
  "key32": "3d27Pn2vfFfZSxdfMYu9zMwp7h2XgabfVvJeCcwv7hRH1HYJmuAMGnUPmiqQ6eJdqMJ7UzDHrJBP18ZfvzBKAmvS",
  "key33": "5kyXnwDiwCKq6WVxvv7BtUtgBXYMmKotq9M6FWbcBz6Zk12hUxFkgGnhxXvBBEX4aS3Dy9DSsaSg56t8wwjxcoc4",
  "key34": "iYDGdZoLHVfGvpvNjjfjFphU1TQBQkjM3WSYQPz2eTavTRyqx3reVErg1gAapyLtQMXgr4SVAZUUMZf9iQYpoC2",
  "key35": "5W4Cw16EFS8e5apYvdjNhkVidkZNrQm3QzGyT6R6iYvnKPoCsCK7ZKM2NycNZXDBm3J7Kg49TEaEhKfFP1XamkgH",
  "key36": "N73MwxuoP5uZZfFeFvPB39o8xR2suY1rapVvuq5sppqii8Jw7PypNQ6DitHvZECfKkhAr8SnRyfsddrFbr5qk4Y",
  "key37": "5iD1uaAgHjWXXqoMvYSZDZLEL9Qb6nySWhpgGZ9usiqnxsbhfY9fZ6q2gw8tmNGejx77XoUCyS8Cu4QKTh1oEszY",
  "key38": "8XRnHmoSTTKJuCCkkFSghC9BodtoBGLVBMMYzb1vohG7NdqRcaZVtT3QR9j9WppArTXthJHqaDhZfM3kKJQkEpq",
  "key39": "pwequmSk8iexD7DjATSKDJAN42davEehaxTnBzdQNZyq2b3Khhw28onMcnCxbARk81KmGYCT15BSYgMmonhZ6Le",
  "key40": "5qNZXeGHggrEUtKezkUtZqfKcKDL8KwKUmFEFufBP1rKsJ7aP1yF1MCbVSypMehReZLdcMoa5StBLAXM3sqdGcc9",
  "key41": "9B5HVEX9chG2sHz9A4ZHEXLkHXo5w3tNqVpzsCySvmDtyi85vM3dUoLQaNXkkuPCBY4bsdqa6cgaXBMYDrVhfrm",
  "key42": "3KrcG57gJ23zxdST2FQ4FS9nHpGxX3qxCcKF7RFQeLVA846hCut9sYXYiLdkvbq9HvcQwbmFsNuAE3aGL4765aiL",
  "key43": "4LSHxJ6aJVyqDcCUyd8MK9YdseRq54epW9hGGdPUpDmu5yJKHBavPvKmjjcpcVef9C79WxpW954fE8WQ16N77Nou",
  "key44": "2vwwM3NGRwQ7aPaf5Zz2Z7HRYqqXPs5zRHSiFMoeVP3b8KsBG62spvkYGms68wts2yUnFAYDWEatkNFS4CDkhwy2",
  "key45": "8rpaaDv8ZEdt9CaDQQpE9pKEDQU9sJmuLQ9PeTRR5uG6JJKG1ALHpr93QQaUAqVYatNfNFHef57VoVqHD5pnXKz",
  "key46": "q4E6KNf8xn2MYgyqSJ7f13QYkEajzmuycvnBcJrCFK1JJPhu8qxKjB3XYoLBbbgj2Rv5R12AZ14qFksUKKCVkVd",
  "key47": "29SDM4fN9nCisswmWHohqTSwVZnyYEemicSbfP7Vc6bcZNsBkNrys1Gz1XLz8wM79ktJ1H8koedmpvZNMWDHnt5G",
  "key48": "4yd3YocTaDozNDjPr2fSxvKnMFfB63YTM8rpTv88CTkG22ApmrTgdukcsFBNUQUdoYK23nASyZDYQprpWFaVEXP4",
  "key49": "21PNf4mQkcRPTkgkdUbFxaUE2e2FVAUjMwZSWnNryBGZ9yaAuCvMQ7CXNwr5CoQQCGXcVkuNQT1vKTnQfWgHEQiZ"
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
