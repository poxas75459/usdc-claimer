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
    "4oE2UhBvoVPcZzVhyNNFgGNPs6kq5L5eqVLyP8u33qQhNzmgRgnXhmApUekA1gDpcYsFn4WFdFPt5thSAiTufE6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YbchQ8ghPYWPRo3mVqupkHkt1oQ9KcaevArUS4PeRkXGLz19Epy7HQochz19bLVncp9vjDgrzrkLmFkyX7zzrke",
  "key1": "5hJNfJb3KHHJhFbhXnNtkJWrgcXE4vJjEUCth8mdurahsSe9uVs9UQg4ogsUYuECeXpM8q9GJsQE6FMsAcfbyBXf",
  "key2": "3Y8A3yzNDCMMuP3Rmmoi47y5AFwVfwTdjJCCeKd2G1KfXMzdFMLyFCfdL5jnxJtW18gpwZk5Z6funQXaYSPpZFzZ",
  "key3": "27VAwjKsyXf3TLRXkzano1HAmMWNhktQz4uE6PKb8u3WVcAcKGbW6ezBu4mfVKbdYgd1mgDB8LaAEgm2jXj3bTRx",
  "key4": "36D8WmNisoMVA1HQ3TYz5zvVTds6U74RvvEsRBYwTYK7casG5nNMEiewKAnc61qqUfdNBz5dt3fGPmsfb8ZQSmpb",
  "key5": "43jLqxoidx2hpC55uBsP5Wj38BpS35CPsXQG7bdY7uyLgBam32RWbx21FrDFeKno5JAD1XrGuTkxYnqd6AxX3Kjy",
  "key6": "SycLxhYvhEqGFtWYKv5DSgX3En9TFUUFGEjZJkMqAd9jxmBHTpwsfX3UNbguocRqQaEMR589yRfm8adf1AmzNvW",
  "key7": "23R45G957hQeNmWDJmqTGxmbZeYd5KtVyg8gvHmUURhB3T6kUKTPapCwdFGXZMpCqyULimaWFWb96tNSZ62V8dqX",
  "key8": "nbfhJGmfwouURUCwri1vtEcCVENoPpYxn8hwPpz1oSuor71CpaGnzh54gNdMXHpCF49bdGeeh7cwEiqbjkHKvAt",
  "key9": "KeaGh831VNBkmuxa5fHDcfKDnBxYgnxt3TJhecFKiAUP3cbTScxYr4YqVR5Md25AoGa2tp6E6DUVwxWaB4DJE46",
  "key10": "4VgfPMkXo2FiP9KKCsS1Wn6rQwU25PDRNaArKsq5HxqL9WtQPd26bsDaVMJ2vLzr7EcqaKKP9Ed7RQtLBoJrycPA",
  "key11": "4Lm1UmvLtfN1AcbDSZWaSWx23DLupzTies5vVFqZgseFXzSJaWwfE37cQMfHhzVTbV3E8uj6U2uhtRYJPdh87HXz",
  "key12": "3uZ8eDWL5uxD4NbWqz6qBHSRWhfuLSySJxYd8zMwdDMGqQjxh8yrYrJTxzqfLiTo8DRzR3b5hd6swqdKiaLLSCXy",
  "key13": "3ghuUtFw9k3bkbBzJAqgYiS65yUDWDgnCx6grGJpTXMnQZi2F2baSs8poQK4ECZmD7mJ3uYvj1Q87WYiJa5ywpn2",
  "key14": "b1QyofzgwvgtkjojbUYn1HKdykCtuvvyenPbVyfPnKnnEXAAJivHeLfZy65x8J9hnq92A58JRCStWuVE55LcEAz",
  "key15": "37gsZBkRRQZPKcWqcoDfrEzceCkYhSVe5CxEbgKMXkfQkKRBT6tZLjjMwGFG11p1GYp9izrCUMxgcCpiZ7e2RfD3",
  "key16": "aJxawZU6Sr7DJYoA275YzN8WE2Prpbm1EChQsEehFakMUHmRGHDrMaSp9uUmc3WYEZjaQLEhprKJfErrobyQwDK",
  "key17": "5XnLB1f86zKM2cvpskMMNsQSzZuJbTYvMK3UkXt2byv2VRzMJiGYeYFCjBZxQM8vpXnkjdozfssiFADmJgjryPTg",
  "key18": "4iXDE9pphKAaZShQyCebp3UNMqfPsSXGs5p1P1VQ28AdE4dG7QW8XPfHJA4CSeVZek2ea5YQVFZyCCuGQvrsfa5a",
  "key19": "5KfwrHmf4gUi28RP4QXkm7miioFBPJCSgtdXK3rV3rvnBqLbjnx7gE8q1uPqo3TfDuDq7c517gUv1o819c1LSAdY",
  "key20": "4dVdBmWwTLRYsv7rfhFk7cYQ2rGGtq1FJRhKxoT7tWPzLcrwH8wUG8ujUDpan97LUKtiR9UBU2o2XLcFmiG7ax4B",
  "key21": "4wTuH5ig8RkExAFEtWTkEX91R4qtnA6D7j5ZnKLzCrACWdU6EDYRYuS2LXHv6ji2di5Q2gqXDsHau7Y84K4ps7eR",
  "key22": "RzTcF32exAqeFVF7cKdy9rXwtAQjG72FLjLvDv7zWjzfmaxdL1DtAkXHw3JtVzzikKAk82iep6pvsAhy9bEfa4S",
  "key23": "dCTydB3Cmt37FH4MhSdCKBc3CsWoc9qtMUMGeKHYDqp1zEGk7M3nbrb7GaL9uhjwmqjh3Pz5cA39JGKm1eYxZCJ",
  "key24": "3bwPoEzybMfrAwYb5knqMPGa4JQnzta1NThBTcYYajstpV1xZSXCns2D7Yxqz4hGSDtuzjpsmJnoEUpcrvPWuUt1",
  "key25": "2wrBD12A8xv5MQD7wKeJm3ux9ntQJ7EeEsHHht7UmGJpp6FNAWrSdnCn1Z85QKffJqWeiSCGrxYjT6RwaiTrEj8K",
  "key26": "4dxHp1UqLjrfn9CKQuEqDf1e5rv4qDEgYxqFf2cVJSJcdqM3nAYJXc8NPyTuWoFEmCNFNbuVFAmEjtkwjeU8ErTC",
  "key27": "gVA7CfodppC8d1v36HxYSN6C2JKRcQrxgbFxJW92oN29N9nz69fxtm3DcBG2cx7epJR7zQXqt3X1TMoC2eeCTWr",
  "key28": "y5KfNe7ExMZPtYqFS5ZrUcQJcin5f8hnpUuSuj3QSZnPBjnTsodr9oMAfgCVgDNuJBoGFxHGoGhSHheZdCALNif",
  "key29": "LSdjXmbQKCmebrcj7VGkxPbEC9PkJ3dfuoYL9RTFxcLoKxkk7cnSEXxFNsioAAqv4KtWKFFW6VzvfcRURd4TvkR",
  "key30": "3kQMkVFv5Tqug5fBgHJYgBFhVCwpbmbNBv33n9Z2AMVwnhu2iAexA4zXq29vaj67cdNjpfNkvB6zZAdX1K4ZbeYC",
  "key31": "2LmzykeWodn6Gh8bzuUo6PEQf64Kx3ydN74TVEPJwCuPUWV1WkTqGXe5T6C8fHA5JZJfGR1JJLjSr8xm9eCAFttv",
  "key32": "53jW2BWtyjxhBc8P7sHs5hiSHKVFxGM5qY4NWJjp29vpMwpic5ERqkrKYq1kqWTuXf9KfemBx2aj2csKbNNd6QWk",
  "key33": "tZo32QZcgQgiQ3cKqEh3SULf3eGY8n6U13ujM9VH6YB2qvD4GHQR1ize186HuZyBWCCDDhAdYNbYRG3xz1eFqnP",
  "key34": "i3LQp7CDDXAmsqwf3HxjLLDrrr7izNped2CQNVDYHukdsZyA64MhU3TJPCdTeWjxUDCmaXYoNqvSTakZpmWZb1a",
  "key35": "3wStjzrnT8vDUTDz11RSH499WKpJDvWezHVgSU5bzGNcQjJsHqHZodpF5tqBgqFkNq8z1d6CZsdSqq3XDk6Sd9fr",
  "key36": "2nUY8PfUUkX2yftFE59BL2juxykZZbXfe6cHLstbJuFtFszM5vGDP5PJmRMZ45HSQyVhGZjsPys1EBXg1zws9eHk",
  "key37": "3kaRnhSR5Ut4D16PNYqSgswPnDPXw8t4nFQHrWJxXGAEvpsSt2PmHvhnHbkpUvXwimuzFogo637QHxjRSGU6jH1u",
  "key38": "ZCCNEeRjN7vooLNNZvD4ty7jzX2HqsGSqrScvGK5zBgRy8jB5fi2wmbuqwF62SwkGrdeAuvhgsVkzZ2bhUtZBrr",
  "key39": "3AsmU9HSNQN7WnDnwXj9WeD7iwjgeLWjkjF6PFrnB3kd9cjn33VizKUzvMj7qcD2w2QuCwuFrNnRer4iucGiWJVN",
  "key40": "27EQxrhBvvJACfrMGPZHg7i6GjCcCCpAkJc36qFSnBQz8Wm3HevSuwZB8wVcUrmPrQ4jdrsQbqQvy1dvtW5ZP6Do",
  "key41": "22pAmPsYqzX8V53oXN8cgb1gduBRmdbuEWmJbzt34nYda6V3Yo9wwmTUTa6SeLtYVoK9Y2nszors2cNvZs9n78ET",
  "key42": "5VvGhjLvtNrabY5dTjrNg7SGSVM9VfuDNxLrAjbscdo5Q6gPNTYs1ct5LLLjRSQTfuSBDGoNt2K8yXVogA5NCMqo",
  "key43": "46Ts7so13F1hFW718CErpyAdrWRgsX3VsqrihxcetUj568A1k9VNmRtUj7KMqG5vfRqbz21jEY9BRtZsgVmYYNTp",
  "key44": "seSdwah1joRawzNPsiesktku3AmC4unWCW9f6NyUtCPhqs94guer2deatJmusMHM6Q4vEUo9LReroHpnb2VMft5",
  "key45": "2PLq6MaC2EWmvv5aJ1X4gkNGyuLYMmJbXxksaRfBUB1aCYV2Zdh9WuDzDYapxNeE5pzQqjpqcMzNmv1CH5MjqM4q",
  "key46": "5t8SmA6pdEirKLdxg5jxRCVbjC6NiYBjyZX3LBA9ywCzRWrdLdiMb3iTax8gFGmzZ3keoWMCYi5CWLuf7u6EBNhy"
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
