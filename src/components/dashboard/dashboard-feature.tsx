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
    "4BxBMaMU2xtsMBYxerA89czir96mvaCYcommYs8kP76cju7Bj6WV7abiWKXE1RZn6tJaLmkq2ch86KPd8NJE2hFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32qGuwNtvp4xQiG8juTE335wG763WKd2VzxvdG6ew4bwBFRUDZmyS9Sdy86a1aMiiK81Gpm2qcsmQ1gLdsjVYgrL",
  "key1": "46KB8EbpGofnLRwigGi4th2btDvznQqhvToyogHoYFtVTr6MmpWtrJigZVb3DSJHPZbUaU7AqJWNUyfA86R3jNQf",
  "key2": "5iGWGNTo9BYiXhq9vjFzEBvd1KsKAuP4jXcnRusFC55sH8k4mv598AapByUD4rHoqC7ZjEweqM6Laps7po1SfZTp",
  "key3": "3m6grj1FZ5m4V4FuqWvsRmjN4FVjgdpbGBPQ7hJD7eEhp1S4xTNoj2ZgQLVSQXRvMRm8bfrhaQ2rVtus2bnZnWEJ",
  "key4": "5vFw7E9fGQARjfoEnmpis9Lvij6zCNDC2Rhi8uNXyfLJTY9vvQ2xMMd2XpNwFucFhh8ifx5caTKYZ1uviKkYfr9X",
  "key5": "3xosvAJVgb2bCJA1tyJeVtadBXpbqoYxvdxTm9TzDdagK2diQ1b4CxoQP7XLvphKBoFZjDd3TFmmxyjgSSngGLEL",
  "key6": "5dMzsijVTvjaV1ZcR4K3jYyPk7csgjGj44m6x8S9HWmvgW3qthYaVUCuW7eAqkb3bUp47h9mbd6R4MYvhCZDvZSC",
  "key7": "53foX9dJGeoajMmBH6sGdyctV4d5Mc3jLRFwMssTCUwWrGwvE4NWyTUHizzsjkyhEZbgiNs8oHgyam2bJrjEYuZN",
  "key8": "zbUVwBTmmo3TSrQEz2Vt9rCKw7mSfqufYrAchGeus1bhGS1aZXcEEggj8rbffNGw7cgkfsRBGcGpE2dATfrwFDE",
  "key9": "47fEpgiReH2G324C4NaLjKE69EUCaM65iicrZpQj8sRovswqZvmfcDRViC7e2Jfmqj3KA7HyicmbKHLq4G2QzsnU",
  "key10": "4YQ5z8ub2FqZ1kvubmB7weSQ6ZchDj4Gv1jAVEknsBRkRNkvdijhfBLqGZ1B45yQncSJHkfmnckpiV7MHwycF39h",
  "key11": "2CC7G2NPqr993hrCFKVnSnoDYsdXb3yBZkbyX6K87pRjqcGgYH3UhaQWjDhTkgB7MFpdd4p49XVJwekTbBzBkTSN",
  "key12": "4F7fWpEAW1o9doVuHxtbNYAe4G9yhwLW6tFnVF7XJjhkqYVqL33zGuWhcpZMm9eM78WcJkpDujG3XFeiDV7qrFoe",
  "key13": "3CXztBunnrVzt1PNoEJme3Gsm1Z8tQLrcAQxxCg5omcytqTbzV1mHTAMm5GoUyHB2sgPdfK8zpzh6VkyHSv4Vs5B",
  "key14": "3qpot7Ts3tgUUpGfvB77WHG8TYAP6NUCwdK64UYaga1D5Vf1F49NkakGPCmy9XAx66z3Rk6VyzZR1tGQDn2PbKBx",
  "key15": "sYD4sT2fSWMnVogN73Rch3oXeda3xtau1r3je63VG5HVihYqhm6XM6BoHwaZrUfH5e8GnG2iGGwsjtKwLNUBjNh",
  "key16": "9o8wp4BZjqs4wNq8SujoJdvAqrjBiaPYFg8qANjEnRQthMQKYcKinjUBkFj5CP8XoV6x1t2at71esKiS3nMkicR",
  "key17": "nDfDKnJCwfyGYDoUtWzhGEX1fP8SfRnowbPVapRViKm6uG58LHRCZgHB2vZE7Ux2B6PnbjpNDzqhL1zcKStxkWM",
  "key18": "5iMeMzsYyv8cJE8CJPFfp25CgnTKLazgbGL5NajKgqvnHk1vq7Hd97pkBCPE1ueLBJK34EWwVwac4LTv14sT6cYU",
  "key19": "4Qx1gUkpZedfaayDokTdnAdxNd2hiPMtau9myosxzSVXtpSAeWqZzxei3o9KBJbMvyPkbXnSx65eGoUnkM68UzRe",
  "key20": "3gG7ZX1kKcPjLJfyyrCAh65scq7P2gaapV6kpm4mdST9eJKev526EpPzHoNUJ4KqEPNwkN3tMKEsTXgA75vEQF1x",
  "key21": "5HZG7k81UoaUgTUgRsZQvhLvhymH9H13KNtqG77CPpxLcjiJGtxUVJ9GrAaBtTBnadTz9cZUssD33ZtAtjj5tuS4",
  "key22": "n8TEpExkwbQciAW13weLG9vSqG6zREnV7J6YGwgEmWGyb64DJArDCFGFDE889C4E9mkqz3URzdpZCNXCqVp5BPb",
  "key23": "2W6ww67GmfT34hDueFeSTRhzMbo4cxHQonTdi5Y6gBhVQjWBRnDfYCcEGBYNteFFmQuReTyDUh3oVqJs3uhDPkg5",
  "key24": "4SvSjsGrivBJPkeQTYNf36hQHofEgcSKpHfpqHsy8y9S7Puxef3xtZp7Xpv4yYoEPG3AZMj4kUTLVETzUS6rZ5ZK",
  "key25": "5rnDNkj3AnGguCdXRdAZA93PqQPhzLppg5opBbwoEBX7WaJcnUDX2BRs6jhcKC9dibZt1zFZ9wC1qiiN1YW29Lwn",
  "key26": "PQmzrkB8y3fD6gsCij8LdVyVypRDT7LTy4QoDoKY886BTSWHsp39R1NnMMFA6gYPFtAr3AvyxAbRw3wub5TCaG6",
  "key27": "akgBnNK44FccJCBwg8JfFd1kusfrSkBAdK3VfDjvWJPpBT85ggVENtU3dsDijxvVddiymaggSm63K1U9q3yDh2R",
  "key28": "5XzWvN2KRm47NRsy3rAofNMisJ95ij4FrKxbrz4YaWowfEf8ujSXTZG3JzhaSuK9ExZ8b8TBYCNzEQPxDtJr2pAE",
  "key29": "482nGkSgbQGs5MhoRfcE2oA3tSqcc93DivjVyZ2Ao6xftmBi2jZsQ67J7giizoefFEXmmfWVX711YK28EX4B52GT",
  "key30": "5vhBAodg14e8EGToYSXU4cRSQeXBmN52btjGdHT45tmx1bCbFwgrrReYafYk2WWhJULeDuooWJLEWPASn1vtPb7d",
  "key31": "qZZrDqjTs4TzMtCyGBeYMrginP47BhSuGgg2BVaak8KL3RocNNcJqvMMcAZfbbkGy9wrPG1V8frzcZMS4rKmbXM",
  "key32": "3ME1vjr7G37TdQbvtEhgLv57YJWSxo93bnjHZi7rJQMpP5Vt4FPJVwVky9Nunbug3oitEh9TU6gqfrtEoEvirRLB",
  "key33": "5EW77j6jAmAyWajPkZgynHrJKa4U9EzD9XZgBfKHbwrskKUHNwhWgY4eWiFhBtiedetmQTmywV8giYJaG52Y7DMW",
  "key34": "5m5x2GcMbCFJTX3VyjMzV5ey37kfDrtDtC3P5QYZA811rryDWwx24L1upwnjShu6uQ6aX13PcbqDjvBSdoVEdCTk"
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
