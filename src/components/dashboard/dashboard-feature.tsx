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
    "3qyXP56QsvLLG494MZRyuVYy2CPBBEejcCTpEFemPgbKypRXzDqLeCDRVQ3cYnjizzhAm1HZQmes19EiWYQtgjYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62w4RWhhVoGWXYZ4EY3VtCEpbzeYD9kgg6JppdWkGkYfG6aD5tgT4QZ7gj6C25uWgA1SgkvrnfA96RLAMwomoKNx",
  "key1": "MtrUwKcAb61zLsZ5heCwEaVykQQ1zTL1kR9SYHvW6eYJh2gMp9vzSgMFTnEPEweD77UR5NESXhRXM42EZhNgQEj",
  "key2": "5qeVBNSnJz19KbkAXho2eQ751QZ7wTbPc3vVcsPRmPczKKsfkjkDU8gxLuoX9bZRRimHyrjQLGUj3hEoznofWbN2",
  "key3": "613ZNdJCPxEcUwmBSTMNioxG8Ha8fBF1qveBJ2uxfB3wZBhuuGTFZ5Uqi45xmQqeEDKpaFsG5NhKxt6BnohGtbB9",
  "key4": "EU7hEiQ17JMJCjteSHSQG3KzVT1cL5pNxiMHKxJRjMqjunvpEJSvyCPZMpyz8B585JPL8syB8cB7D56wD6pRS8d",
  "key5": "5jJtYWbaNqupapXCwjACx5JJYv3giPEAFSVMN8o6hFbV9S9ZeGFUZdkJvbrfmDNPJf48p1dLSFKaixWQ4qKiAvA",
  "key6": "3c2GrV2JP9GwGpAre6sVHkAkxsMcpqG8DovJrdnW4fo1uxfkyzXvrbMjs9rduLu9rhjwzWhp1r4xBV8GPUyCNCJa",
  "key7": "2CNiwNurSpfyNbhtspLNTQSHHLAkqNLvhFCkCVyt59ajZU5KS1jtXE8xcJVGyeMeu5M2aHuVjS6TpCgAZoP8yCuu",
  "key8": "eHRCW9raB35QZmXv7qJBRynAMeAB47KTgwV8QsfZ8Q5R4dpFq4S7FKwuRSTN91BZe1YW5RpWEdJstX7fJRepoKk",
  "key9": "Njk2czK1pqPeQdb6FgQ6iVW1BKgFvMWSCDobzYhAdwVcgmMF8ZGAgpjQhwJYAM2mazza3JWaPk4SDTaYZ3vpVd7",
  "key10": "3KskVmqD3Dt67umLVEPfzbjGLgeTKHTZQgUkegPo2ZYs5CJxKhtRt2N1mo2f8sRAYn56XX47RGy4Cfpk8uKnJJSX",
  "key11": "39GETmzsGLrQTA2C5JeUy98hFxJfse1eQsNAX5r7UXhueVipBLjPRVvtBHrE2KTx879tyYcXodu8swBoXTdny53U",
  "key12": "52DWzScRQgZ3PS65z3wLTsuWcabbavduHyRi2DZeihTbKYfXYrpWnFm3HmWYbpEMT4MezN2VjEGGGdfPQdJr3BQA",
  "key13": "3tg3yVAhHdb5r5DkiEu7yxqh3BAqTJxLT2HiKuV3HBqumJCvpXcCsdCdcM8Yf9whv6HEhRBWujvW8QR1RR3bQKo3",
  "key14": "3gwxacoarmt9AWvtyNpkd5pVuHxBtPpDm8qd6PWLXzpCvvy9vrDqbX3fs8scCKaoDbZFN2eLuR2gDTaFUjEyzXJM",
  "key15": "5YmKR499umXazjtKC2ggLMo1XQynmrAGTr5uv9ZZxCjVXFF9Jn4SnPRUPH74CGyEPB2hFyxEbq53xT9DPUqB6GmU",
  "key16": "4ZUZbDcDAQbsHxRDWQJ5dVSWAayirudas1v2p3rtEdDS8hU319rUb6r1vC69voKe3nFJU51sReUhDw5tiyD45F7z",
  "key17": "3ZqQymojzn8aFmDVUHza9CyaypSi3LbZZ4tcm5p5h4V7TMZP2vYthutqyrt5dezf45m67pScLFSCjEWed5o9YfUJ",
  "key18": "2NLVm28PPr6zJtRq78xxkq6Qb3pFhqoz87rpeoDA3Rvo2A2ub5Zi97QQne6SG7q8wyfVHnhZsMo7CyJXgpGS2KB1",
  "key19": "8URcCHQZ9Ek2ewiAtwfa8GhqvUskSLsNxS1Ch6udeZEznkcoFcSA3pWGFfj51H6x8PpeC3DP87LKNGxkBhGMmir",
  "key20": "3dhRgkxtDW2m3U7Wgm52bURyw1aTVjaVsLwRvSDi8CvgktnCxUi2iWRrWVYNpKtD5DRh34UVJrb1zUcyJruP5Czw",
  "key21": "nwvm5eot6UV2C4UpvZ3bVDTq1m1tf4vdmGbK1SbzquCCPAWQ89kxF6TDsL1m4sqmrCAAqPkv7qkeX1KjY9MiZwn",
  "key22": "49JrRwSpH6cu6uXPdscakh9LD1Mmb1PL8eEznweF1ZyuWGax6FPs8qpKTJfdtrjfC7GDZhKs5GT1b86aq6YMnLgL",
  "key23": "51UDHUKz6Ud2Jkv9BN4PZAD2JULzVNdQ7teypwAdGKGA6DzKbLaLjqsDLCeuNXAR7eHSKSXjzsUhWRpy7Hu2Bwpm",
  "key24": "5XRz1kGNpcJMKfuFWy36kuDqEvKX3qgqPyCTwBnZnjMPNcwz7izaSpt9zFQKtsjzyFV7CcFwRU2HZcJHpdSbT9fY",
  "key25": "2jTTQghnsh8Nc8huWasZ5F8kCakE3JqGMNQF9RsAV2anAscHNP3ghdUzMfkgUqJmqkqj6oPvZUgkFHz8ee6qeKT6",
  "key26": "4wm8Rd6qQPjEsyjU7cmHeF8N2rniU1H9qUXq9sCtPz3Ap5ZzfJS7ZMmymFwLra2PjkUQsgcBxDeCwSWmRY5eQMeL",
  "key27": "Pr1bjGkTmhbmfDqXKFYFU2boGFFa1rrmYjJrfat9aJzZixcJBPY6LbBPrRt26tE3t9p2juTDGw9yrBRZkxZqgXL",
  "key28": "35UQrRrVSRQ9zJ4reURBk46kaXhWqAxCx3yuShZaRZtKfLr3c12Z3tRNND4o93xQBKgzbkh9HQXEjujvKLjadoMV",
  "key29": "GzyvyBQqHrq8GfMbdLDwrJ1XYayMUEkfLnLYS2yTx8cCrXNWSzb6dfTCvuaffekX91rLkes6mc1CaCGvP7i82zB",
  "key30": "4RF2WN1nSotjVH1MBu6o2B9N7GGkREDnHSqvAc4jQjssKEWPpW6Wovo1D7uZcXf5TjpZ3c9pzhfXwX8nj2is3V3E",
  "key31": "5wXpg5XpRKwzkmwCVY3U6XMRhHczHtYP1AUGAWp9z2XP8HvPw1fHyD7jiYPxPyp5VWhS9yfpnwPhfxe1w3PPueWy",
  "key32": "5Vic41QCBcdd7QWuJqcPTLFYsLJ4ue6HBXazJfLvq4APEvC3VZ5qqC2YXigEqL2gxPZkKxUogZ1VJEZzB3Un7SPD"
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
