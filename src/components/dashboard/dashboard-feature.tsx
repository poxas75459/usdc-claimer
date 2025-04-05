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
    "3KvZhQNw6zztJaVTsQzjAyJ6iZ55zFyFJS4svU5HEVZDXx2DFR9YVdvYQRny4MQbS3tRni2p4WtfsGKzu99nmsFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ShbgPKHUD4yzBXtvFGfGVVpTjw9efEmTRidr4bDcqkMq86iFtLLBHDxF2UUp9sC9VqfV9qyHQEf8Y19Rf6FMZMv",
  "key1": "4dhqmFHt9i9RXWwkTRBtymHn76yqGZ34pXmTPXdf8cJr8ThUMbXaZvoEgLjUS8GonhrppgJbV8WxH1rAJr3iHU1c",
  "key2": "4LBSDgnNJf1fDi4Y9BgtuUzjZphpcKDMER2NuTJySHr6H31Sbvcvsmov9Cy5ShbbqETzRqe5sAowNjdqnkvrtKEC",
  "key3": "2CCZSdnBLALmGcCkHjgGb9mLdUvKy1GmrbSQazKKNFwMaZL6tVt5VjbryZ3qL2eYD8xv3VpDZQa5SDoDr2aRtWdS",
  "key4": "4buEAARtBEwMaFTZutsvkWyBXGCNT1ENN9BiaJfZM83H5rkPjD89qguXVHeiVH7rxV3fvxWY526QDPFwP8srUD4U",
  "key5": "5ogMUPP2i63TKxwKzQ9LNjmHrsb1gKj61xpbxWifDHxY4uKCPFGksfM1kcKCnheEaCUVQxa9FuaWokKfybpLLaN5",
  "key6": "3sjT48A5awiZx52hW5DzZvQra8cky4jXTiDZTw6JNuugCmv22g7S6cMv6Lff8fZd4T1KpndJSsx4AmH4kpWRYgAa",
  "key7": "3s5xQ7SirhsbQs7ubCKwpx6i66CuYmjDjTc8YHwAtZbS5AYawPuV5tmshxiC4c7Phh6QYY7yVDMbNhWNmBVvRjPM",
  "key8": "5tiKKxTRoHkK3MSKXwZbpStScQHgmxBvsPGhp9WgVbfwKJtXTKoU8SZsjdoZVzexZ585dPXhVWDQwftjnx57otnt",
  "key9": "2DKB9A6RoR4NNJVNGRE2iZMriWbjfbfKxo8BQNFYE88UpYMBTnXxw2pPxQPhhUGU3KweAdAREcZAKa9R7TVg4hqh",
  "key10": "4BaXrDKY6ZUPXJe1N7a1QchYte29SnoggqWkVeHgBiaahKLM3YGZDFvdV3765drM3xSRHicPyZ98c3y71SvuaPdM",
  "key11": "5SZhvmpPsoHqXF8kBvAuqkTRDpTLkF2S9d7u7EjSfyymnb3EQERknLTJ8xv71mdNo951fzxEKdYT3fta2JRMhGGX",
  "key12": "2pcFLpgnuge3Z5gRrHAU6fpcAhaYmXgdcRQnw7m638fQNC1aMdJpa9S3rsqZA7Ttg2eW4eWfN7sQDLPi7Z2ZnymC",
  "key13": "375bbbgvXW6hAb1iuMuwnqKMYUE2RsXt4816WHqknq5vokDRsJTQ9ZT4i4iKCQSPZ3PELeTJaEES1GawshLWdmR",
  "key14": "2i5B5F6XoGSoygCrQrXdgTeJ1Y9SmsGmgq6TNE2cgFzCTV3zsWfLFTc2DuFNBcJs3yZtmWiKetkKwDxFXUDwvsND",
  "key15": "2bb4apZwg2ey4DUwwRo7dHjmrZpajvHb4ySwUqDxbh6qyaqtnUx1c6NaToyWRGELzocDb3GZazsHGvU8cNbYzmuT",
  "key16": "2c3H5F2eT23BN15Cp1gj49megXyZci4meM395rznL22PHrvQMWpJjtu5wzcdAQnD1YUaLJZRURoC9aCiyLXUNZCa",
  "key17": "HVQGzsCMxmt3HUkpanHQgc69o9XGMa92nGaqoPTY6gfrejvp6iPiLhxLjtwvT7hhGBWaPaq54FEeAKWvNs8ud9v",
  "key18": "679tEQaebEX7Rny9z7zY3CccVe5w4JFwhp5yWqrLDJMUBCJB5UsVX8YWTXYpbC69KUTqmNJVdYHqn7Fw3hEwe2Z5",
  "key19": "21kxAqY4gYdaz7stUNfTRVB1VdSXKoapBZeavsYtUJBeGtkMGvwS2aYWCnvvYNr52SEP7GQrcDQnY2ERQQDu2R9M",
  "key20": "3qWMYBChk3EP2vXEtj8BmvHwzfJx5gcyg8pCXqVVK2uASPQDmAZNszBztDKR6MSfwgUyxfRuSVqAeyNs7sUigb6j",
  "key21": "jxLdQDZGrAVt8cmgfq2ux7zbsAjK6REijv86ApCsHGWqJDVV47wJK8yspxSFN4LekG6nh3nXpnXBXiLWufujSAJ",
  "key22": "3yi5euVL1mR9pcgKwsBMjGyvaPVG21gJMC3asdM5uj8JrZQ6WLNQsG7AmQnJd45zj4CgruF6Knbc6fdR38G9ARPx",
  "key23": "56cAhwn1RMenkk4kvv9kdj5auQC1Tm4qKfvzT7fJ5D1mo3hkWwVYwRcPajDStTozyDUVScMQPV88BFz2FoXvKh8Y",
  "key24": "4sZrgD1dHdnYjn5YyCKsBQKiPHTUPBeaUiH9HeGoAxVnXeQtEoogpsdyis31ocagW5mvAJCLw5kB8bFu9YuCCqVy",
  "key25": "AsW93jmwzWi2UW2v1aVMoLFgPkB9cSSsioJ58owgGsoyZeLX1nVKmr4CjoFkgrRLrBdUa2zUqr1LL6KWhZnAPEj",
  "key26": "22YfTbb49vmU5TE6zcugDHagh9yuJJiooiNH6tLPVyrr9LqEFYL7642koumptKXs3PvJwyRJBupguQShdKniTkvD"
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
