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
    "5RqpWT5qBYXMou73CLHD1FCh8231rTHzebFqKhUwiyWhNQrCWGRE3yiB7tPkmZaT352HSkYBBMpUpEi5TDZwHWpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34TLUjRb61DPYUV1BBFkD83T3m38Qc2nngm5gLiLEdTy1kiUjeGHLueVms8HVRuUsMHYuH1NihbmYmcMReXjwSsK",
  "key1": "57fTwwUwVFAFEys6id1nedErNJ5fyQfkNNJeUSiNqfR8xiNncZ7JYyxTmj5YtswT67rsg8pTqtpZfq1Tw9MKr8yo",
  "key2": "3u5pc1EKRC9CJZsLazMnpo8fvL8DKPu1DKLoRnByWpArUS4yf3iwP8LNAHWJZhFosbRX5dCBBfFvkr5TGTYFqkx3",
  "key3": "5YcHKCqzKT1eM4YW1JZ1RLDNjgV2eYiTvAU5CMdtYBRMw4NCbMUgyAjU7Lm8ydvjcCRPGnurmh4i8EVPNn1xce6E",
  "key4": "4uPgfR741HX7guMteqTyySC5EAKx9p7Air7HsWDcH57CniNy3VMpFB5RDcx3QSQRp13iE9p8rYKpMJ1BXL7vnHfb",
  "key5": "3B6KUye1Zr5Z8vq52JqJJEfz8YyGRgnhUK1wHAF3kWVLWU1Jw8eXXYUo6kZFQV6kH4FXnkRM4b5e7F57J7a8T4CK",
  "key6": "5vPy2chidSN4LTJWUeMrrRbuBUCRYGqFUPHE7cwA69irwM6YvbwT1XLkJUnj5WevJtQXY2pCg4ohpetaJZpYLvr7",
  "key7": "5t6xbQZ27g9dxrh5VVimHyxNJuCRwSMSUm66uWRGk1hxhhLFgK1bNSYKUfFhMRHaeiVwMBXjvnXr2UHhXR3dvY5Y",
  "key8": "53iY71Kt5cXbYQZaDfDb614bwq1p5gXdwyK2yES8Lz5SS4pKeUTvgU2ckNPbZgA7m8QpRXV1F3pPKZ9h3Eyd9y7i",
  "key9": "5C9M1DhKjUECjUsgBXyhRdT7qKkQrQzxbwLTqbNnWxttvgwL1UbYpZVqA7nafTngqXHPKuhLZdPYPpADV4M6eRJf",
  "key10": "4BHTdAyYfaZfj3ucpyddykoGq3hqjv772bt5ypvJooq4WF5KaRQ23DaLqbhn414xcmdfjRtgk7kjY3erfHLcErAg",
  "key11": "GzNfQShkLdd8DY6TyZsLdPxHN1DcujsZPS5FgC2C7vqg9c4SUzCtyDYtWe6zqhz6HzrimDeENrLMBQU7xRQRmxa",
  "key12": "2QRK4KVSmcx8V6G14TabpQyhiGU8G1w2gzkNtVEiqayyrnwTAtxbBvd6yqJehmhbWacHgAiZinWENPB2ivkei8Sm",
  "key13": "38NdEY381LRfJ7UK1yN58goAhbf7wa5EjwHY82HW6Cwedcr45b6pk1o6z5gEtHiCRaGWZh8DvKD82cbQFiZhU7Yb",
  "key14": "QYcxJ6EjBA6c8iDwpe565AMrTo3RYxGwoxhZkCgXaFc7yaQfGEef6GiTh6TtGaRbzudJXKeAa7dytVLizEmDKMA",
  "key15": "4WigckgxZ21J3dPxW9wHtm1Etq36uKFSYwg7ba5srUqVy1npa74oXebw1aZXXgvuDXsRmbuLVtjCDKLN9ETtb5yy",
  "key16": "Ps9ihDHUjJyZ4yj1Do48x74GXsfzz9T49MsWxQMcbATSM4TZ9NBzjrsxUrSefSDH8fLVMu6ihkkc7mgHyeFr8VH",
  "key17": "5g6E4MBDHuTUqwFH6xk7Y4iUzmtztNVdkfz2Qs6iZf9f2eYcNUfZ8C554LFrkXj61WfUee9h8dQ7GyKyjGRUr4tW",
  "key18": "5einTg1EzkNbSkn6Nyq6p3d97GbkpwtxU58KoZDw5wSD9LtzfFfdK2iX618xUVPAwHqKqadrmuy9TgmEFXd7YhfM",
  "key19": "5u5qwUqgNebD8W54k6goqmyKT1HhYevxymfrUJCzgLedqvKkJkBYCZXf7PfpbG7iBWCPMEfTUcvZf7M5J6KSBQie",
  "key20": "25iYffgfUvPh3nBPDaKJHZdJ5kzf1VPaj3ymaDPAwfdGUDnPnh1VMDb4GtvFeguMWR2yb4UpTvMdCieShMkUDRcx",
  "key21": "5dtZ6TaubjfK1L3JyBeNhVYpRVoy8oXq8WDkS6TRqEhAHxMGweLMDeinyooVdr95ZDUXqaEihsc6xTZ8u6qMU7ru",
  "key22": "5rLkTeotW9T7SqxkUFouJfTeiwpwD7T3qbBvAWqugE2VdnMVCARnVMC5FAacsawWXpAukBCKN2ZZveG18sUK737S",
  "key23": "5yVscJ7WXrdxvDAkPnoEbormm1cW55sSUWM2GS7EKc8esqKrZd7gVZzc3ftdVUmqDnTDtuaPJoZU3Ehe8bDusaYU",
  "key24": "2SLtXgNNbZRqU7Z9idJEVusfdn6xcFLADDDDmbi8371Fokmx3RcYtZfLTBFAxUYFufK4tCz9wicbtHRK5RgTA9WW",
  "key25": "4L2ow9vFtDEokR1RXQ8HKyjo2wjWDsEfwnxzsMxXqzUBr7xSYsDiat5m2nbmhosSJJMJvLqGHUEHbsY3sePZDmiD",
  "key26": "ieADUbu37kuKu7KPu3TCyZu2zMTdiY8MxR4zUUFSa5vzPf6budnThCw4dzAF48Ea2BDzzkmvD3SiPESp9pAEdYo",
  "key27": "5KicRisFciCTtPb6XpF83EFAmgYQvkQvQmPQVUy3yKuQyCUCxKFFRWeFm8CKhVm44TqsphGvnd4FaLeUj9cRSKQN",
  "key28": "4JXvfonwPFPzTd5nEW4ULdTbBjKyyZAyg4oVv62voLVs9VbdZPLVA8599sCsatCnqDS5L8nk35kez8CsusvJoBRX",
  "key29": "4DubJw8UVub1xRUyc5ZKakoEm7GqKSUL5MbWtzPYG3uvJ1Ka4i3Z5xZbb7PtnRc2rj1zfB7nXrzHFtbzPAAt7pND",
  "key30": "53efcRWPpVF5gGbpQU5b9MsPnkvL9XJpJNN3mBDFMNARHcJau2UJNxCpP83eaioREdNXTSsiMSLGafzwMYXWHCAJ",
  "key31": "4VYqkpkW21J1yD9TM6ZSNqj8Zvc43yBwfF4h5zgtfDpC2Sed6tawGgDgQNQCCkWCqYhNs67DKBSWXYLe1Z3USenp",
  "key32": "2B6bXFyNhgoSoDf9pk8SztMEbjK4wuVNAv2WH1HsYDfKeyye13T27M4gwfZm8hNpKTENyZwgqfeLdidSBwGH91Wi",
  "key33": "2yvMNyNtV6TcUeWs5qPn2FnJTV19ZNZrcA4pBdj9hE1KaiU8c7k9Ts3tv1jnEd3k3ti92ir5AU4wJ8d67eit3mik",
  "key34": "2LRqKnQ1xN2k18iTxDyvVJpR8kxzbFeFZg3LBubjqzZHKfurDFCNCgD7ZGhHVcby6wNGfTuyn5xANY78caXAoSx1",
  "key35": "HBa3tn1Lkyv4JzUZXJUN6oTFqizuRmQKPVQmdXyU7bomoenWXCeEKRxse8435C45PQ6NcUkZgbFosppdcTjR1Ex",
  "key36": "ccdyKDmu4ERwxatjanVN9Vuivm5qR2E1KUApp5T3K5mJdgAYZUQoWgn9ws85B2e1zb55E6uoLGPGPbcVaeRin7i",
  "key37": "5hyB3MVMDZxSPBzPR3RPhED6x7A5FPZHT6VsEnME8p8x9NK3cYN8ggvnLztybseAGM26VHDfRVZv1if4RC2MTCPa",
  "key38": "5BXxbwW4bitYBGN8TiofcoTvT1VfUQFHvaHuRFgG5A4oShYKL62a2VYrXqyJCn8YHQ3uWWYyj1gN93iWbkuc9hXM"
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
