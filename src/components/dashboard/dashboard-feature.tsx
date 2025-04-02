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
    "3EJ5dfUoxJXvmc85hxDUcpa2n39iSNBKy25ouN4aRpqGgxagXcpzVk6QVxDAfb1mAXFHYRJnxsLSJjVjr4TTCFFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dKjrxF4DdVvvsvXFc1ALRPjmrCNavEHovuMTGXWxnjzku9aG4V5ZELKskLkUHxPSZPn5tiDntPTysMiCStqZF5h",
  "key1": "5WcS5P1Ejdhz65qMcWxNYsRw4eunCi7z3PwDQyw14u8jCZwbmXK4dkpgqU2krvdLscz2jDNvF7Go9m6Go9drwb28",
  "key2": "3zMN8sftHKBYYnymWxEGWgTAPqxbkHZKXoDds9f7NpESZyuXU1KE93BrxxofJkJxufxThYcS8pa2HAnn6oPyL6kU",
  "key3": "5XutardwHxGmH5Zqp9D1GWEdDnqypdfFAjEE9dwGBDwq8sZyasqQ8LBjWbXSwiLKci6WSjWJdrdR2vjX4GKpWhgM",
  "key4": "35c2iTBKt4ZB56EG1CCqSYE7dyNpSyuT1EPuu8G42cWg5j2KeTDqyFcbzM3tE2y5rJNN7Po7TQm35wDB8GGebTL4",
  "key5": "TWsDYowHFMLmLrMxRJwRxUvzepNSNT1d32qFMWy3w358GR6Uq7Hqa31KrmPgaf8ZubNGGxQmSED7pK2PzNwNCn2",
  "key6": "5geCqRB1Uwr1PL9xpdDF2biye9dEmK3REoAt531dmQ52zanZvobgNAup5Lzbhp8Ti7enywyYhfSsL8exdf7AjR8L",
  "key7": "24boXzzQmh7Gs1zfMEFaX1LxJgEDuAbDcNY9Dwqua6Rjm2uQzrsPaeNfgfMc6oPdDHfdUQhDU8wTq7spy7MS5rDQ",
  "key8": "3ghuJUWPT9mC8ghreupUWieBpdWb7WP65xc7YvzSTDxMuXrTn8tcL7tDjEZdUDgpY8XPEgpgPN2HLDvu5iDmbxSZ",
  "key9": "4KdbTqNctuFYwMp7e7Lon1dQhmW6U45Nhhcgvhtz3bvHs9o4MSYdY9mormzYSb8jAiuJW6u12RWfpTY3vFhgFBnr",
  "key10": "2Yc2Z46jK7fEY65nC2prirmQYBemHstfCvMHBXyXkyDiy6eVYnNejSd1evvT9rjrdSTWEEG5BrHUPcgHnqr6hRqY",
  "key11": "4SJTsBnJrmANFhZjwvwmtVbCXd6kHrCrSGYoVUXDKwVx7o9FfCrEFw9DXbHveDYy4DXcwjWAG8rM1xYRJfLXuKXC",
  "key12": "4kzbCRtHNB64f1L48PhmTihWi78SJbTHBsTSr7Btq2DxXUg5ymBt15pwoY5ixGFbijke8W8bnmeDmP3wh3Rbp8np",
  "key13": "2T8JsAcUYMQ1GmUtax3AtqUUVY1x8aTG7SpM2SrZT3j69kQmdYErXywx4j74LupFvaQCgRbFFYtDV6Cq2yvEwQat",
  "key14": "Pb4Yu2Ks99YJHfrEbviJMfTzXKKLTe1rCf6QKFPe5HfSZbpot3mZfHmN6VmBjQ8HCvarAwkajVCUkwzZK9N96Yn",
  "key15": "3L6HmV8wRUo56npnvh9bvormGLtTPv7JD5s3cwwBsi6iuE848m7zKWHM28yXS5VywmswxvcMTtFsNNRRubNT9FE",
  "key16": "2duF2NQFpisM6oHFMNS29nKhmGjz1MYa9CJVj6T4SA3h9LA5yPiNKpiGMLsx6jCRHrBrm6DzxQ5RjAc5MiebUieM",
  "key17": "3cciTkyWpG2Gd9DvnfoyBv85qYZrnwApFfu1fixBXSvy96s55Z9JUnSipPJ6DKXs74fPcU1LfrYaN6LSYTQvey1d",
  "key18": "3NmoC76eRQiYH3LMeocXBNQmNmZbZSztkuJqhTFSpozwDA78vi3Q84UUe85WdufR4chtX2XgEnM3GUjcJ4DBffYL",
  "key19": "5ZPnFPYmZzaGkDgZ4Ts6PJoJMS2WPUnwFk9Z91uiqaZqLuo3CH7TkM4ey1jqAWed4sKPo5vLrSvtjT4HtzYaS898",
  "key20": "ABa1eruYuB3YJ9tx8NCxExiaw5ht9qLFdd7oKcVSjkKq218ctrFFTNTMDqoLKSaNML3i6VkCQhrY5Jopox5B2p4",
  "key21": "3XjpBRqJ4MM46fNKsXWeyS3CKB1sB28N8b6KA8PqAAA3iMt2uREXy8Pbbdh3AdLgHj2pq3AJWb8rghezWjsjeJ65",
  "key22": "65xPn5HmrhvbTbqnoZSw2c4YTDZyViEy2EyDXjZ8UqvZ6npLNhLKR4UQz3b7snonadWaBeGRhQ9jsAV9Xcmqye2M",
  "key23": "5P8ZuUNig5Hy9JVV5cC8Vr25ZE7mCD8LfREBE8NRFA9uaQnLrxUEMt34VznZZAogbXFV6axRbFKfPSt6RynsPS79",
  "key24": "2QDwGk3WGvAK8P59Y4Ru1FgpjW4PkQBJ96rqi5fVmKqCkfnKuD8YBpLDuyZmYQCTUiFjxetDw8pV7xmoQ8Fi6ngn",
  "key25": "2LBb8FXaf3GwJcAUNcSrPNX4jTJ6YscaWshur9inzH5wsc7t6Mp4xtgwbMxhHcdrcnT988urxQBMMXjVH2dAcjSr",
  "key26": "2q6UmoqamPV9TUL51wTDAicGde7TU3gE7ZWsTEd7CWWyAtPT39pea7ApNBy7pJUVWH9msxMotuoAJe2LYCmcU4Z5",
  "key27": "5tkD3Ryiws8u7u5UuApgKmuFsESbHP8yLP1Sxt6Kjoxc3Af7Fs6TktehWK2WEfrzPU9PSBmdnGUVGyM1X6ZXiTAS",
  "key28": "2C4Pjze911QX4KC1uCCwR88XPsRL4m4DQ47QWe7nZ8vZkCv59JaEXuHaWX7bQTXqhD5GV5tL562Hepo7T3AfwvyJ",
  "key29": "6k7nrXXvrn9WCthvQVqdqi5tjop5okAhTces5PvDCi8a49KhSd6m9RN1bqKBuvvC4hWgVVWiSUjX8t3c9HUWstv",
  "key30": "pVXuM5CNMVGwgjbhws9hLpzSwpSJYNHPvg3NkQ2Q3giyDamh6NMUs3czHMNHjfq5F1JBVuBxNib8WR62wHgc4U1",
  "key31": "3wD89Vr8AT8gC5QpeTk2revue9Bzxhd7beYDCxXXh3Koo5aHtx3tPf3oZVgUnvA1DaujYTc3rduCkoP8ZcxmfunX"
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
