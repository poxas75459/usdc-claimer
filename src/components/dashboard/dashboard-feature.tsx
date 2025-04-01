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
    "3REL481H8dJNNtq1mY7vmWEh3cSdXN71AzhsY1QjqUn1gvAyxkDEKBTubXuBThX1t2rhzBKNTTPBXypiq3uvSFrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48szKbNYtmAKmJdsHCXxnTxGpiNqJmjupeDRw3RCoDqKT3FgjQEvkdfduBzc7Fm3cpJqdZsPDgqQeeJZjAfWwMYT",
  "key1": "45LWygdxmronyeKQbAZLXNpXKmqLr7M78zKRka7WKRFLcsse4Qz2MDCBvjXfpuvSP8pkPqqphpJw3WW38F5zpPuH",
  "key2": "24ULvUbhmVi2zQB2AmvEDnZSWmMbvMDvVEFR2crHhDh7YQN83RPnamULbMAZKYax4DiK7JxcWRfxwwvoamBsa5Vn",
  "key3": "3spDCPmx4b7nELsXAXSzePjmP71rLY9CLuMtdmDd7qSr9p8dexReUGALEPyEhdx4uRSL6eS58RNiWDMr1hS5SgEc",
  "key4": "23QAjK8vyXA6DFMAmPHvWKzhnzwsjdjDRaJHTakKhTMohPWd2BSzhUZRWGnQiQ8SdFckoLBAfG648FVVmcX8GTuh",
  "key5": "5TYjWZHmsFwoRXP4V2UVe7xE88KpdjugbKgb4syyh4Jh4q1xdsrH9iRYKTLV3AnoKXJK1HV9uC5wCadvfuh4Qqk1",
  "key6": "wu9xF4oDnfNWUFLYxK6iqU36kzqTNHr871DSXzBjdJPk7cRWDobuXaNF658KUmdXLcSttgY3FYkLNicRxmX2yVB",
  "key7": "42Sn2LtEcX2MxYhfz8Z5aQATFp8H3GU8P6qffUNeRd928o4LNsBxUTQ29irNWoNcS2Fe8RjMJ4vy1VMupFsy3e1A",
  "key8": "3rKrcwo1W2kMMibdTDafEghnhXAXhfS3LwoCQpVsZwYL2jcuDKniYuNK9LzRNiRUQ2gGQPQBzKm6N1uTv2Goxmiz",
  "key9": "2mS2Wni2m98y54vkrE9HTC1nxBsqqhfvoy4sjPzEdwvRfwQHY2aXrGKHXvsVJW7F7p8xonoEgyfG1NM7z9dbLSX9",
  "key10": "3Lxtf4yCMt2U46SvWczUjJQ52N3tK8RigUYgWwvFBdMQRJAPsJLReRy7QEVUvicAXwnSW6q47VnyEfb7qqubMFtP",
  "key11": "5BrXYZtJPDRXL9z1fVqfaKi3iaZFLMkPk7rugB4UKAymHHeJR76n7wRYGNmafSMHR38p2X9NMtQc6AbxAJQRYPmq",
  "key12": "3jW7VATTJVeQS4Vr8H3aqSHcwffprfxUhKxmmGiVu2MyaYU3KL2dvkvZVjg3rsduNjeLPuYN8DSchmH9vt8mfXSh",
  "key13": "5voesYCPWCUstAwrPXVK8wZHgwgUPXEUADTjN18cq1Brff2WxwyVqzhhBnVwc5WvdHDaSQ2ZRJVxV45wNuo81cyz",
  "key14": "4zUiqL6qJ1HChfMsNAsKcevhWV6g7aeTK9BvwqoMxK2oWTTQnLueK2aiW3Tv9E5jm8XCioP8RnbD2iPgrn1bJomV",
  "key15": "2Wg8aNc9qqVxL7gbLKP28WmCycosDc19W83XTLyH4UxpgmYqHhQgWczuZNSZ52EeHGuy6y4E43AgJFRDYg89wDmP",
  "key16": "4MqNnkHpu19EwZ36zQpntEjxDLGaqzmzF5UqQbeDAVpr7JUvapZbWpsSHXHY1bVw6LL3GeJWSduMzpiH3dS73477",
  "key17": "FjSHZBp6QsH3NA5sMx3QvBDdoawG45sRqHmyJw9dRyewnBwRmJ4TEPV9CxRyoYgXjsir6QcGH43wfnYzFfEDTFh",
  "key18": "2vgDcUG8giahAg53vtAVp33aVN1PwrruGseuihF38228nwW3vN7NLzBpgieAuAoqmnKVgPBy7HCZGiXnCuCmMu3x",
  "key19": "2BwqSi7wkJa76mYPRRcozVGV1H3rWLPq7VuL2Q1hQ9yWnKV5U8ktTjNZg33x1Zj52oNu5QXmZQX7UrA3MuX5wHSx",
  "key20": "3Sk56AaXimWMW2ZKhTPrEHFYjHKFeuCTMtdfGkUYGRZeTumciTpHroJjRvtMXrpmWuYRhp9yS9fSjCQifTSCimar",
  "key21": "3J3daud3bQGhSCK6beDsfuqxnmWE6rVyruRcPUvKNmnozWMg2NvyKuKhkkW2y54BZnVvLbopr1E24hCBdxCJj4y2",
  "key22": "2zzQKk3sBsWMrRB5wUT3ebyLuVfKBJYD7xn9G3VtGKJSfwPyCgnVmsPGLythVReqBx1GY2Ua2dbwcFqZpoPdum1L",
  "key23": "4Z3gxXBHgSmEeH6usY2JLe2wBxiKyzi9RQPkK4FZucD4H93mDpV2B66H26WokwN3YUQicgYHW9MhrJ495dNXMucr",
  "key24": "XCh1xsYyDoYTXh1URypNU9XnJUd5opsJr5ept67CDRTqHJuJx55MARNKdw9yBfoZynpafntF5eAxw4Lys68Z1ib",
  "key25": "3tPdAaijFycoQSfMGt3gALknQtADVnGcpvFGXsg5nBxirbyxo3eMBwtv6UryHzyMZZywz6yPom3g89eCtz1aEPio",
  "key26": "5XpZj7zYTpXKP7aRKZQMD6WEVSHR3PjqKSoai4Zo1yc9Xn4ry5RgXii3chKeRKpyEXLzFGWzHq8TBPs8w17Fv71D",
  "key27": "PubmLwtapgvGrvZzxxpQ9ZqZwXrwEYr1fNd732519p8zFegcPhY5hZ2HQJfsB1gEvA2rxDoKNwS2FosEaE4qRF9",
  "key28": "4YrJi6oSKtoa6NWahMNDwRtdiyeuKq47AqjVztoXVUTNAwWmKa7PdS6rw84YTvhqBMaYQeTA8MfxUrPEi5qUrWdt",
  "key29": "62ot7mNEfjGueFcKqwYRZPbQYybeVfdjnSueJPnhvrG7CFDkmEvgzjrVVVnNL99ZYFx9o2iqtahm37PQmVL38EnN",
  "key30": "3xxfbefYVv5k3QtPFnrq8mr7CQTbVfqsjkntp9YJU72jD2K9F3BpsJcjiJAUYz7EVSKZgRav3J5JgxVJ3PpmG6AZ",
  "key31": "43GwGpZeEuwm9vJMFzsACDCk7CP6XwxGQEfs7ysxHgPauvj6STmdvLUCbhuCMLppykwxkAfjDfo3JLjUehGqrxvn",
  "key32": "4dT1b5HswYDqGbW8jGeXngDPbbZd73NKss2UJgqAV6eSAm6ojpYKrns5nVTfLcn58Vip1qn8z4Rhk2JTEinjy4wv",
  "key33": "4qq7PePaGCmMTCfpf3MXKq3gXDdvaRhQ5qfMyhbAQE4yWyaQtC8g9SBEEojrJz9huj5VZ71tV6pWmwZ7hUKPNVJ",
  "key34": "Av1kt4YaLS19DYCcZaFsaovFndwNBuPqJn5HLiqGVngcrRVJUH9PLitMQuP2JySYGzuNBhW8yKv7UwRjtQvc4Sq",
  "key35": "54J5qzetdK3XxPEPmsSExidvqjZ3n9Lbb8R7oujb67GGC8PRSaAWgBv8zuGhZUbCT3TBt9426H3hwUiK7katX8TN",
  "key36": "4TH2huczCMqgS4G1QHr2tCwURE5JEUv2hj4w79WGUKeksWrbEMSnS949NMMWQNAreiz5AuT3bX8SsTUp3jphU4Xn",
  "key37": "4iP1Kxb2Ypn1z4HcAFfeU6kar2M9zESCHL4jfzGKKdiRnKGcHGwiEg9K29U6UrFhcRzipnATM9JUYQxZQzyVpaUF",
  "key38": "2Zs4vd1L1zXvqSYaMZXcBBe4uDNLccXVRnMzqtgxfxBPTahyjD6skcfkm8Cdns8nVxQiUCEwPKhjSQsNE876auBr",
  "key39": "3ddKRKfBj2HbUM5rpHvaq6kftQexNNA4nwumbJLWwSfp8frbQSs8cXQS5XdFjjGPbKUb45L5mzFJJPoxQ9YCzp8U",
  "key40": "3aMrDp52fEMDW6xhaHdYvAroB8bosq4FJj31xKCYYp8oo5L5Y4Jvb5BnCcNhf6yXrHudnGgC3DTCaBMY6FtiRkDB",
  "key41": "y9e72zFfrkuSY37Tpys8XztjonxrzKL4ujQTMN2synJy4zgC9qBnbEKrQLdAd1nV7dLe1VcSPiJtw6isetTSG4U",
  "key42": "5md8UzeDB1gFhmRJ47YsuLtfjzPMHqcx7U6mEM1QHL2XrJLk7bumxHJyPdQZ8SvFCJp3MSHFCaGBXoMiEVBd8e9S",
  "key43": "4Xw6VX19427thbtv21CfW1AFTpBzwePtWSQi4FextQZStXv4rJv3vhc9p6f2gpacynzezenS2SoQnW3NZmXYVF8t",
  "key44": "2qRaSaCwmicCUW1GLFJQGxeM8oE1ueScV6zZC88aSmkULS8o54qZJ4TuMMyF97sxxtsCnFDGL2fbinTYeBnvmmvT",
  "key45": "4ijZGenUsDwHEdvjrtkXELPDFPL1LppYcUhfCe1eD975rB8NovWLhboBDQvGfmrQ8HtwDsGz4Sb7r4a7xq73ymKi",
  "key46": "3tREn99i573RR3VxW9mBdojVdEc1TN357EB7QK5sXZcJPohrdYhs63M1KdJLjbCHyNnnpWmkDEYxixuWB8MrqTtT"
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
