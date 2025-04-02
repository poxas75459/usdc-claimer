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
    "24DgPEJ3qLFzEqUVunLMdwwoBpS4VNgT2shuZhprUY61JQtV11qhG5dRxzScwGnnCSdFi5LY2xDTvQWaaU4bhy9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Recqqpyg3ubkRXSg9zharzSC6ePAW4D9W8BNDzgJLBZC3THC7VNyenYHw192AA3QhTadoCtN6z5ZCj8X7fxvxxo",
  "key1": "2DEPA4XkwA54LT92FtRecP6DaT3i2kcZfbnZYqjzgCDdizrxTeii9xDekUSy3GW5nrNBJoNvS9eukW7ndThRPvTJ",
  "key2": "5gVLANyaGRzxcxGnwfuZZBY87dKv75BXDiqnMHc1in2A17Y6UPbvPv39DiKhkDfthnuHkMZ4CUu7vX1RjPKhKR3X",
  "key3": "2oCYBgLyYuQaXRaa86igK2bu5QcigakczZQY2gUp9m6rdndntJmkunPitj2PaaMNjHwyLSXN9kn8h6VRaRQwMQ6L",
  "key4": "2vGmqbe5ENZRxWoEVJnZbwEbnkbd8ezYyziXJqy8qhgdre1dHdVFz8xjtXZ4H49c9tWgaUW1Qi1vgCnoSxhwXgCc",
  "key5": "vdtHaWfWfUhE6WEoEuGBeaLanxfweJ74t5niiFCmfp9vc2W7LLhw6fhdhLmjzEfFvBQUQttdXudqbXf3JireJTC",
  "key6": "3PJ8dv4KhB1Ps8VQ2o73tXk7pu4d2MxpZAVH9pLKz7X3xuiPB2KqdLjFNVgBEujnd1W9HVg9DoXSxP8mmeYbGvg",
  "key7": "2r1tFh4zMAxGGFfuGBnFFWzSZfJxsgbz7yhHpuCPiL1vYv9yDa4t4jKrbpmLavoUFfGp3QhKzHb3SqofRwuWgpA4",
  "key8": "2oHwdzd6GYJBi3NLrezLWeL7K1SHvkL4csg9ZNfvg9bVYQyugTuZLayZVCKAnsd9xDu4Zc7KbHKreFTjUnzbzkHo",
  "key9": "2mmkrGidCQQh32fHy3FRhdRSbkcZpssb9EiNA2nCpakcXeRLKm4x2XoNeHtCGntPxP8qMtb7x7TbUV2DF5fCdtKF",
  "key10": "22cAvwY4JyxtavZ5aLoSWoQWAVyzGgbj4oLhe2Ce5dpVGBRwr4k22FWGhD3KdUP6hKdEKhY9HFR8PriJNncfwFDq",
  "key11": "28JTvGbGYa4xcg72oxmwhcEa4gtVN1g9ZT4A3C8Zg4UeV6cRSWbzkar988AMefzymkCNWC7ipMorRgnun28oLDjv",
  "key12": "ojgW8xQ3NPgjEcTJGXVfThPsisEAm6T8gJTQeff1VWMKoxqTLm4Bh7EiJLHpDv1wuWzmWR7KAz1AjQbbJFmQCQZ",
  "key13": "xB7Y3CLiYp82zoNfjtnpqxxaHGzDA4NzmGQaevM7kZNnuNk7B2F2Wiz64zs7Coh7j8LwmkKQGLcwV6LL5d7KaZ3",
  "key14": "4gQY6k8YwtorkzBrosZKgyYPn4sMejJHW3yLUP5n8AuJWSue2a34vavLnxpF2mepBF7gnjPCVUyPynyuUU5PawhN",
  "key15": "5DF25jFuqktNGr9L4fBMsKG41kb2jqa5NRTLWTXjADkYLKWE1LsMAJWznLPQuFGYWmF6ZCWtx9zmVAk3qUuQU7Lr",
  "key16": "4NiBSPrxp144YhRAQzsQ62UxB4eMaCDSh5dLkXGFFcWmFDoaUmNuVUD859Lf5SsMhftbHHszsa4YfD3W46winNoH",
  "key17": "2F6VqtygtcXUva5fyY7pLUtrRFLWMnvtbGkJmYw8ca2G5Ao2LfNeinMFtC4aATYAQkbzNzLaTxQQHYtJE2ej8XK7",
  "key18": "WNeB4qahPtUHGUJoHGkHusNiqiiCZpsyaLPvYipBE7KtF78hUTDQjnhvi43MVzhifr5jAXDXnLm8yP3eSA6FHWx",
  "key19": "2c3yewqBvs5jtksCqD5yC8v9FtRc6G59BQMuvQTB7zZbWSuQ12nFfc3yW3BzhEWZupeAVi2wd2ijB4Xw9DqDjgnF",
  "key20": "ijrYo7MBRXGWdUzJ8ZgqYucKnoR62g5AzyydKXHb2g7Da6edTL52XQt4mjPe9eWusJS8Z8R1Wm3hdFYQpQhcdDF",
  "key21": "jG1cRZBv6EQQESghFnvTEpTzQ4VNWUZn9CLP14cNiQtBLGUdY8UYmUJ2qNa1k9Cm8oDNyNSTytfviy3DEwr34BV",
  "key22": "5kXz5ixQH7i6s5gehLN4NFcoZCdW5rFKhhqTXn8imq2bVG3w62b8AtYzUhybodqaNWQrWgunAgbegNpRjJY855Bb",
  "key23": "38qMEt6Mpu1NTk2a9xtPFQG2jKPCmdaDh53qHfG2bEsPGjQNtSUpoqRF95Dc5yNXsVkLbpDMy4ADwuPnkjhCp7TS",
  "key24": "3HM8GmoJMRcV5sTEYb2pKiE3W31CCwZP9CRriXPXDD8VpEjRGRARtE6xss2h6UHRKit5SM2ZrcrPnrKW94UckNMt",
  "key25": "653r7ocoAutUhSCXwokC4XVaXLMroJD48wAb1KvzfXtab752xCLCVohGdKCzb5cBD8Cjtskaz57VtV457yfrBhWV",
  "key26": "4x3SWj1Uu3Dpz1UEWktgSniKdbqGVKkikwZBbKCRoFM7wiYQUFT1x6RKfNutegrwkBEYyFXWdWLsCxCxbU4qyQ9Q",
  "key27": "3oSVhsMFLg6ucoTd2Hb4aN35S2gHaAAh5K9wcLLgS25tFspyQFi23HcWBAcg7e5RDzsm42EbQe2kkNDFN4cYw7FG",
  "key28": "3E5pK2ssP6pJpKzqYzhgkF7G4ERRZYqNA17VcFppTYpDy699hCRtZTJRVefSB1HEYsA1suBGZgVWb4rEULj5ytUN",
  "key29": "4XbZtNy8eF8hmkSrvTzpcGnQxz9oXknLHKm4SKqQyz4uWq7gdmMC2D73KxhVNhkPbwVMKEKK6N4yPYnZr2GjWNhp",
  "key30": "576aX2spng5kwHMYhu7mwWgYUNazWXvARmqHyG3EkD5mEZ6tRCrqaby17hm69D5Vqfrowp48HB2d7iFqgHGszNJr",
  "key31": "2diFBLMz5ZDdBXUZKP13MVYQu65TCBtGfF3kS6YC3RUudiRFUVzyLPHmc1fDmYoToHAdDj8HwnYYFAQrzWi6x56M",
  "key32": "5Qk5Zkpxvs1AaXiqWxVmG6bDDNCSozL3ui4RqWMfsDZjNzMSxYGfVJLRsat8qrY91fPojVYwXivR4LCQUxbyrZnV",
  "key33": "oXE1jTjmmhnGddcwuAgFH6tURWek3fZATBAsARWA4ts4BbnNgRpNQnGKHqmzfdPVgpio18oMsDb4nAWu4fVDUjT",
  "key34": "4in57iF8drzHcmYBig1fidJMQKs4yt7Mea9gKzFguuwn15cFf32zoovhPwt9ajrYFDehS2S49d7s7pNP7e8nm8xb",
  "key35": "7eVbK8kZKVzc64BHtY1ZjRAYNU8iW3tLuvHjk9enZg7qZYQGBEe1jWcgwBu6fkoSSM7EP29gAnZTxuegwksbRVz",
  "key36": "5M24eLCwi1P2FKNhNAFigxvTegJodYt8rrQyjw2gbhg4tsukcE88UHFCHn2yDuRgpDf1RiKppryUgYf3BtSvRMwJ",
  "key37": "QWyFwJ9PL2XDSTUtxb2aDmzbSfQJdJaC1gnksAbSsXCK3CXt5bQXnKUZ2iTNp5JyQTm8CDG8e2LRYdDbiw1wTnp",
  "key38": "7Rq74vePhpEiYPVjueNXimyk9Q3PtT5QRwREvMVJ25MNVnwP6NvJdvtGBBDyavhnL1ZqBQhSVUTpDh3pjjdaucA",
  "key39": "31xBnUke7ud4G4NZhq52KM7yRkFXNFKiY5n1cWT3LFnaAEuCE3QMWLrXiHqZuf5D5KqFHJidYgSBLFFJmAxM9hh5",
  "key40": "v1pFpptC1s2MnVWeCPexZH2yjLYmgiDG6qXHLt8BXm13xHi9cJf9aVkMTChJXpnUHFvoiQxFHBb83RsTH1kq26i",
  "key41": "WAbPgRSjw4grmz6fr1QtjSHohDoJHorUU4tGeGHmrT53Lw6xpuziDzpganRTvXvVjEMWJBwUDpjRquboamFXbxw",
  "key42": "acDFoMjKaDBdr1XAq4T9Qq1epi4wxxD86bTWhmQPUSYJGzXoBPoFvjobeTGmPTwTxVwD95vaoAEmXkVwxo7vgkY",
  "key43": "44XiHLdYeaPN8rJNhMfWeToqfcnbLRMVS1Vzxid2zwxvbnkbjXpfFH3jgA9EnukpG46r3NER1K3xe6PNgVSjyJUs",
  "key44": "4ukjgsuPb7Bhi3NasHVaJspbSUo9VVeQjaFTGaKQt7p1UsbXw7MpAjFSVXPWLxRDFZZT4ETCXQS1ktYjAh2GmofT",
  "key45": "4MsP6jNriSMBC6K3vQUBRpCenRU1a2NkK7ZtbXVvJRjGigdVgFA37eHuo9vLfwBCSQ5Ee5mgDFpfEz6KgPfrtBtw",
  "key46": "4NndDwpEHbk1HdJuV2VzN2Yb1aurHi6GffU2G62tLBV8ZubXStLS7dKhABxcpH9NeqSnbPYhdS981V7m5Fr6Cbep",
  "key47": "3Nvvoc4KStGMH4mDDfBAbfRT9NnJHkDbUhNCoz5qu4oLkuDQDo1SbR3YG6N9U1EbgXCAsa9PahUhLUpH9cK1SLd",
  "key48": "mGrMXqcFsdiFwHsN5P5mqs2GBirYq5a8M7AjuFT2sF2bLRDYZ3en7EdU5PA9npFDPHzbSQSVusyWQiXVfX2Q2tb"
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
