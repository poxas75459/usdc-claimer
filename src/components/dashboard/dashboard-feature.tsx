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
    "5hJ74jQgZT8UY1731r1C74qkj1XE85fHvRFoY8NgXnjrY69qx4J93ov3PiRhJJt5Zi1vWBVqa89CMP3aEMGtVe88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRMkWy7RSy7pe6k1UN3rFNWac54DkLQq1oTF2AaHqpNvyrEMxjs5f7ekMhjN2Fq2PoAsoY5zt4UqKaFysHM5gkP",
  "key1": "3s5ZerDwaZEqqhy4C5YBiVostqQK6sZRJxo2SQFUm8XeGKgq2tmukAeJCmQeby4EHjVMGfiMMxb5T2dJvuE2emMm",
  "key2": "3pahNJLwTS4bcuoUdv5b2HtHmmjXoUoMkNR7r5jPNa3mbiLetsNJfrnY6vGf5bUhmdkRNgqSes17nZfnGQjHu8Aw",
  "key3": "5qgZyCkRSYfDsRHnQwPujv1LnQ3nA1oeTedr4cRLC5fUxEkjyk4eb96Vpi3pWY8hXCoQB8WGGTi37oV9nSpxBc1L",
  "key4": "5kuvz4ZTgjdcz6oG7uDf8pR9KaYWMirGtEikNNetRQtMevZuMUJbBM7qp2tshUvqPArXxjDdDPkuZfteU6Mv3kWE",
  "key5": "3vrdc9bQfXgwLYGuWe17792AJZGD3N9bntRbm3bELq91tojo9yQvdXCFF1H8ZcLbF1uC8suZSAY2LBHZeNxKHv6D",
  "key6": "2EWVJRxEcMmD4sbW9dN74UkhPQjdW8DUuE7rnm3At4k9LD92V8cVWyyZoWoDajmDQzLHCjp4rpPJJY4VmrDmNh35",
  "key7": "4zwi7XJpNQiBZa9ahcTkEDJxqHZwtLnohsubNi92yKFVu8mMTUTd33y1ppEReXRGuG9x4MEqGJQSqtX5GWwBaCvb",
  "key8": "5UWFhodoVydh84VBDnj69n61oxePRQXLLnrGRuJUXdD5qTLdGWc25ABujjvW39SuxuGe2v1M1wYtVzxGgdh4Tv1M",
  "key9": "5UZ1jz4NRdwpyADwWFKSLwtXPXgx9hx6kr2QtdDrpYcHXxEp77Nqg7s6wZfMSCfqTm8t3uYcRERVH38T1UkLxeaf",
  "key10": "2aEvieuRisWN8FeDW1fNqCGVyWNowxbSsCcCKJmvZFWq2yoHmAm63S6ZQQwckda3oSLueEeKyBJAz3qqUf7MBEj1",
  "key11": "3sMBSGM8KuY3Ydcyjj6qgvaaHXCxGdkr1qiF6ZVYbyARkCoDicaQen4ytX3YHrBH2S2hKaBoeJZAMd8LVnwpysUa",
  "key12": "2Bm1xSTqzvVUMKyyW43V2iSPqhPEeJ6pbBf3UmvUwD51sXCMeo9RHTD2QyTyXHJ2zMpLSYn8r4ARoF6YZLeUMX5x",
  "key13": "2CkPKi4YU1Zpc9eC4QeGYrVyZaRWQTxP8bsH2eifksmBoZ7cUngYTaN2m2SvM2ViMEXdPC5wp25QtZ4vDfiBesBE",
  "key14": "2NXArCFFegpbeNAu8JM9P3uKfpT2Xcgt8ASyRH9RhYET8ijzq7MPfTBTJDNQ6S3mGLE9HEV9vyn7XAHhxAf2yxAs",
  "key15": "2aZsDqQySD2e6psNLUBcP27f13XudLQuH8LW6eaVicGEokNMQAhrPKupZXZEk8EYU7jFCAbNdTKWoJi4SQr9B8Ba",
  "key16": "2kyUbaf7eR3Wkxri7PM3TimvERobgEFGYNxhgptxEo2ANCJAy5r7QU92ti1okC7fZTKD5A9RwzB15J9Lxd3AiMXM",
  "key17": "5JkuKF8B4QFGFQTUvwn6stTfUMdp2hMUdtMn3fQrqbwoXrTQ4DMGBeUwkTNFHpUGVoi6H7Jvr3wXPhxSRYuaQBeC",
  "key18": "5YHHnspYPq9hWzKN4s7SjHFyMuz1BuBhTXDfDFmDR5ssz48wdNYDR5AHapqkWoHVgefMHarwZF2m48wnD2TH1DWq",
  "key19": "5e9UvoHjvxrQuZhhWbSYfLCa22XXZWRjY6Wm8tztpavEAdnw6DtirofirMniAMj3VaxiJZCtJS9udw3hUzbU3aXC",
  "key20": "5YiAnvwkMCAFBzCebtxLJzocmrVRzjYJ3gxZeonN8M7dy5PMTM4DDDYJzLgwZzciJCDje5n9UzHAd26TmK28C7eU",
  "key21": "JKEE8YawqRWznVyWomPdpN8FhZrqGLv7w6Hyrv9C4vRFRRqZbyKYJpahrRFBv9mpSvP5mhFkUagfmgfuuZMJxrG",
  "key22": "d4SaGEnwXJomHNXyDY65Pca4uQL5xHVZQXjvT9B8SgfH1ap3yifM559twFHPzhuGQyyTGEBAkC1GvPbKDxS8E9T",
  "key23": "4yBQByfHyqDC492Dm4rFawZ9fkWuzNvicvqZVn8uH4TcyhJu4Sp8PNBC5rttA3pHQmrYtVG6ghVR3b8wYuBqqG47",
  "key24": "2iZYDJE2gLehsXcjjh4rM7DfLuXYMJLtX68eaVEvkXLzvVESWmH7SCv1HFtMm4kqG7qhxbD2qopxCK4Mv5o84MLh",
  "key25": "raCqK5GsQnDW7bMvzGpdVWMzvexRNCiDWqr3hmHZFwfmeoXSmtjE3ySy4pJF24zN4XPvfancKLQdVmmDATnp2Dx",
  "key26": "3HmDGeBBMK5WgZqM6yp5ewzxw1Wzs468StKoKM1qpAbqXSgd5Q16piKD6VXwi72Zrc1sBH8eHjiPab6nc7V2sN9k",
  "key27": "4K6gyD7TQqUxDCHcZsD31iRJ5EDhXhYGqEr5r2wkVN7BrDPycLQ67iEKAoXk7PJXhYuGQVJVi8WSExGRp4R9WSUN",
  "key28": "4Gashu1kigX8w23WVy6MEwFTxxY35tKspPG2gYkqGEkKsvpPdHEXpLR9PKNNsWzGWR585XErvFsrufLR94TqCR6p",
  "key29": "5mTK52iiT3gpodWoWDFod7ukxrMqD3WnZ7HYPVSbVxYhfwhFPzZMmRQXTZhmjW22jEGyk2C69DYcURT8kvTA3i1Q",
  "key30": "5hUrxtPGUGqrUxxuGAHUNMW8vqTMmQtp9R1uA6uudJZ5sJwJyPHEYdiBEBEqHaSrhvWkhiwDJgK6Lpt1JVCNuHBm",
  "key31": "5sRQXPR8JbhwPXx847k97s7r7w7c3EoosHfMxeu6wY1K8coug8VSMQaW2dGgSjfTBgGUdmuSH13Gs5YtVypYR6DF",
  "key32": "3eUqkSidKQJgt1UGzwgspHTV8eeZPV15TkaGo8u4N4CTDDQP8JtjicKEbDySimrw5W1SQ8kyp9QCtHTq7VJYAWpd",
  "key33": "59ZyRwLruvkMJgVUXsafvVwdJJ32LNv4kfxgCwdB4pyQNowG9WX7U9WSHK3QYYcTsLtAyPxzJKpQEpAQhHY7ABzn",
  "key34": "5onMD7mXQTYU4E1Ju6UBFeej1JkagPeTodbjSLkLnwTjLQiCEUhLK7EyvcF5k8SCwRMAfSMAkGpPEwBYmnHxwBnf"
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
