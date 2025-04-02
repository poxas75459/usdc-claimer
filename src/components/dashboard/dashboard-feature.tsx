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
    "5VHTAbKR27k4WNEvNtU9M8RTL1wJuQepDDpGpDxA99A5L8D9aiaTfFmYUiGPcNtk43MFG1mHQKyrRgsParTgiD9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A3jzi7L26JSDdSQZr9MLADaTVp7LquqFb7YNXG6Boub7aU4xWqRCqX3wK4ScX2JdVTcNpaGaTtHaEeyN3bjCEd4",
  "key1": "5nmtezn7KxNekvkJztF2r4QZNRQytehekbnxh3Xp4BisQCr4rW3t78sfw6GpU1UVKAbZ9xpgGQE44zTsqxLaJptz",
  "key2": "5YZj4wuPx9Hmn9vAwbmwoqnHkh5zueNR286GxjxGE8v5HUWkhUKUACfyGAmhQNFgbjkXedyGzRVT9m3SLmBEXrcr",
  "key3": "41K9MRxrSxDmRaHJw8mNVCoc4XonGKnvxei6WMmthCB5Eiz4KXkWqMxAJUKKEAKHDsu3tQYNE3aZ1tmRCqAVjSGx",
  "key4": "2gMSDkoRSwqoXh2CvWSHQDokMvGQZ55QeLBUxHus8gtViWp4bUYsea7Lz9RHP4emiPHwdAdpAiRdYj9zmUUUdxfo",
  "key5": "3HnUPr4ywwaPJWS2MENF2Ec8KWxasBp9esvmt1mXTj2mLRgGdXLq8f7SRR15SanzfFWcMJxZposMNqjnLAzi8nmX",
  "key6": "32ZMXQF1BG8wma2yL8a71Gwxbd3Hz6NzrY422NTGM9vKDozRibvThdSG3Viv396tr1X24qSHNbkiFn79wZGA4KHp",
  "key7": "3iD4RPukFJnDpMVoBPu4knrmahWS2kJzgkEw9unLU78eeN3yEkJPcfZszAANef2DWkSvgjmmrpbbyg4fmHQKFmCz",
  "key8": "3A3uKcGcmKvdVxWYR3yNNN4xqG8soCuazfrjsRGyMk6x1n9xtVbrFr4MXsV8T9JTbhCD1pqck8r9P9b67crrZhdz",
  "key9": "2cGx3yn2agJ6MaywoniPzUDuJXp5maFuVdwUv93KZZeJjhmMpgv4kj1E6Zaim5xpis4TcUDRcTdCxQ6eBPYw5Gka",
  "key10": "4hWaZw47MDptheffPALKtr5ajFYf2yA8RNCoLAWsHLkPUdKE4xePA7xQmntiHPP4ZrCkvPdKY995euoWNm2XqKP5",
  "key11": "4k82uVRUwUxifHSNMek18aAeVkst6LxgvndZB8GjpUXUTk6vQpGYnk784ZX97gxpmvGdyFYKXgyUt2ehgckBTCEB",
  "key12": "38rYQoXBEWWxanfeCjAht35pJrthB6A7Gh5bavrGcUpC5Hzk2aS2d9WVXYFVZ4FyfyBvJjShjJvY3Kh63NNZUhPZ",
  "key13": "2MLaKZVP3y5mAzdY9UM1dh9sNzKuH8rUzR3Tra22bPX1xnegaGzUQaEDNQvVhAyYuwnCG3fpps7PiVkFQW1dotdj",
  "key14": "59dtEwFcfJ4TwzrswEAsG4k1E5xxbJDT9K8sxbdVNRhtcYNcXQTDRTSbW1PrKgq9UBUQK4icvqBtUDiNGmWU93wo",
  "key15": "2jSfGGk3LtSBUyWq5qZPpL7YmFq244qT1gytB3jhZRRqxW2L8Hk38i8qZQjSboKepaLciT3YyKSPFHUrJzdL6nMS",
  "key16": "5ReVLNQeS1MefSvXkPDxCnNffrD5AvXnrdoHE69FuWoAo5r6pYfqXXyU7Xd8aMXWJruwKovrzJ45fK1HsNzjZi4r",
  "key17": "261dUnNCSc3TJXYWER9jdGUCmQyEtLxupz3EDGorpngN679VjE1YTB4nehEcJwZH9Uo23mumnTzopfoSrMabHKZa",
  "key18": "5kAijMfiBmMD9XdWtNd9gZMcgw6dGbr3MBJ3k8oevJgko9XjjKswMP8GHnPKyqLmnLYeeE1hAaCbo8RuGZPhf3ht",
  "key19": "5xC4i3EAdV8Tjt3rJjWa9xdZQFfvtPVVHFmoiv8D2iKwqBUrwnZKyo8tCRFC2tjnKQmSrVMNTgN7P9geYBwxS5Pj",
  "key20": "4nFqfQe6Yc7xqLbUgHXyu885xDrqCqyyQ9nQkUzKdr4BnRZtPPYWhDaGmf6qF7XzCfPxFuMKjnTjbCXfHSsHS3au",
  "key21": "2fpVjpDi6Vg1Av13DqEnMJRujMhnANiQqxpVK97cYK6Z3y9tUgmdQqTmKJGXsW27SkwQSUW43vFDTEn2by6TojEv",
  "key22": "4uD3C6kiXBW3FwJc1hmRaWdJ2LDuztZLreSYURJcP5YjqnJjBA7moBsucQST3xT7xUjS1RYUhCzVgJoT5F4DKKtJ",
  "key23": "4fR4hNMXon29otXdH3XKwk9dAiBVC52y5vPi1WUtkkon21Cpso4EbpedGfQ4bHLEQPzAp8puffzjgAzPnAC6zghU",
  "key24": "xh1u5WGCCurRCBdthDT3JtQTbD62wp8v18b4NzgEb8DzaWjiWs3bzfbnGgrHMDjA578x35B9XF42ws79CZ7HXna",
  "key25": "3YsawiGZXq5uzYNHV8d19mwox1Xa8MnQAMR1shgDepNWjwxyMzgXLFogFwDrcEe9ctPkhfYSMDuHc4rZsCA4P632",
  "key26": "5kVYWsM4N8RKRRygLSgNppekyYutM33kbv4EH5r2q1vbdxUNd5in4sma556aNmRL6qwHkT2C577tuSGdF9GZMLBg",
  "key27": "3Qe7GewKRk3UYJqgZ1RWfmiXDKtvHBAzjcecx3ds2SQ6ZPDBMaozFZG2CxrVp5tvDcTBrNxDR56S9f5USBxp5ABE",
  "key28": "37G59HBe9FrkqtLFtPgCbFgua1JW5YvXmLYt2M3zWrrQPo43ovKzEjwyCye9ke89oGSbAdUPbkxxagorjHC5BYVw",
  "key29": "56FzNtUfre4p3heqpzL1hgBLtDm895wW9iby758FSGMKBHDhuA1KBm6voHRYBCdxyXyskTKvsw7uvNNoKNxG6x6v",
  "key30": "BAs6Q4U6Nqzjh3KJF5MShgk67dGSRRHD2bNoKbathyBY9GPS8VsRqWAPgUV8H5RwXPRnG9KqQYHKBpZZninCtZT",
  "key31": "BV6ShNmbDyohDLBEeVsvVWZs1HzQ1bKXmtTxmXRQW3PvGr81sazjvHRiWC56EAz2kqAYwg9FoaEhgaR37ZazDzN",
  "key32": "3x975rTdwAgm36aTnt8Bmbmq6kco2YWhtehuSKfKzvBycpT1ct6cGMeWqRgCnW6h56yhakBBrii1wReh4TMYK13b",
  "key33": "51xth7y1wR7Ts5GE3YY2LodwBKNky9sWQezdnD7w9VYjAtjBoHGUHTq2W3Cxf8DuqjTywgkPkdq18n6P5dQpUe4Z",
  "key34": "26NtGoYM3Nn27veMzusgptVv2TvhPDF4edvyTSwcvGCWs6Y25ouzez8NXJ99e7sa72CHurcNaz9M5EwojfddULB5",
  "key35": "4a8Q66ydfSD3FMMhWYgYhGPi5za2AXH1kLcUaYc4AMCiagTzBhUhxcovTampiPPBsdAh3NgbXpkHUmQKz7GFYufV",
  "key36": "3Kh3LJvBXKB2vexX2DCeyN6yrV77Wn6D7NuKHzPVb5xQoxceX1rydLGJDEZr9zrUhC4Rn5kZEXjdqAccp7HzXMxr",
  "key37": "5jyNE1RRxwuwDMFweVRW3dApwKY2uBZpULpDm9XKen8vaD9wbiFt9sby6G19AzkKXdbiguYzxZgX2MDY7RisVVxX",
  "key38": "45TeyMsf4yJ7e9HChKiH2ym6PbZUtM6kphT8uA5geBJPhZn314HgKgSz4mPcizpti6DEMQrrjrXDHgyPu789K6PJ",
  "key39": "5VQYXPGJWJtzYJtWx5G7CMPgFK5WgkuZ8owsJxqpUx7b41v7j4KNATsSg7ronLD8jTx2f2Wd5nZv3C8vt24fBzWG",
  "key40": "49oEZtn1yncjeU1Y7ut2iHmM3HDKkJQU4y3iJaRG49uzuPWR6P2SJ4RMzyDQXqkFxrCZVZrd7jvHaZJH1AY6XeD4",
  "key41": "evQxts9A9knY235UpB5SBqHmsKH5GpbUKb4o6XMDisRNZgYbnygpPrmVEYcr41uHuCUax8dC8fihpRTFBeiZwnm",
  "key42": "5uqLRy2cfoE3GJbypNQu4pAhUDq3RJHgsXvSFJBJ5WK6XAXHZPVyvXtzv99EcJAwxLC3FMMQJuHJENgxZoU5kMun",
  "key43": "bCYH1enRURwGDdCoKPP59VmUNTzciMewUYoVxCc9VcwwyLVNEUPH3ziGyUSJX8FK5jvjruLuqanmYQauj6bCWJw",
  "key44": "3ALcRqvLwf62zfq98AX4nD6cXy12eb4fk5RNE32zF7VqqGNG99iYLXBkznKefa6ApDxXk2Lj2R4Hk5BQDDB8a6C8",
  "key45": "5KkbBjAM8vo8y6FiPbZcxTG5i3srZwx1Yk6Z4btHuy1kZSku6dSnaN7Pn8RJkRTHeXPaj1yGshgvHNW8cxjuLd7A",
  "key46": "3Dt2o46fbvUxfsF8yFoPRBhTzvCwMG1jiQ6fgJmYH1FCWmDKryiZwU5DTTnc6vPPAjtXGNMDDH54qcrbVbqYUyvg"
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
