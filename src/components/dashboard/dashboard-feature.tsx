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
    "5deAhu1aJjGYAU9TzPmx975HnGgV576ZCBKAGwmktyBa6Q11d23g4LYMuRSHLPCteagc3Ed3uLu5dxQAk6GzkfmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NiyR6XevHgJf8nTKG89kXouDDKwtUtbNoW1Ebs6U6iT7UfLbR69K4f6BqJB1VCG6SUg9FQgXRsFRvfoYLZRtbUV",
  "key1": "3RpNSN7Y5PuJHgi4xx89cKf2DBTokcQbATgVrP5dz1MYHfir7bkxWNivnbHFjC55BY6C5GsGdFBKyjAkntK58idd",
  "key2": "SeV2uQLiyWs33K8XS55ukEVaXQzR9hFYsQ5ZphtLVzebvBkvb6WBsrcam2u3UadkseMbH3C31865adc8hsjFXaC",
  "key3": "2uPn4qQeVPivEcVMrN8f2WvwuwL8jbcZFqaSjzych8X7wRK6oDCoUhVfxX6wpMpUZWXvZF4WsQTziw7voq4dqvRP",
  "key4": "4YwXpjKX3se27gJyxY5Yisi2Edq3TFzZvwW7VKVT4rCeBeKEGw4q4diS4ETsomGSs8moRhJSSruwN6wabQgNiojA",
  "key5": "2x5qPzrvVFFQvhsbSbTegL9SXQCFwvQcZu3yErNeQRpZMyYyxcNJHk5Sc7fzEVBo9SEU5v616FzPorEMWkuXbo3v",
  "key6": "29BDcNdsq9jQsyQf9aBdA97CZof1HHn824hq63uqxARxmFsC6uqZJZpwQZnSMJ7PSfe7vuEYB5fGS7JMbEp7VEpe",
  "key7": "2XUSQRaiJ9UKYr3LxDtLLiUCXuuUrux1SPmwwEKkoooLeem9xpZtBYMij1KM729bk3YDGnaNM4J5c2jrARoRjc3P",
  "key8": "JSTQxU4GxGv996qebbVob1p5duWEEFaK7wUtr6Hun8ZgGQzzETgyF8eAMsQJ9EkKv5ejCDJRbELuQAAfCUzjwRi",
  "key9": "62SiZgf9NAj7iAes4aVoWj6XzGj4n4Eez2YusGgcs8U5HCfdUjMySgUvjyYpgrAHfZ3k4uebVKgJqFS6UjYFUMLL",
  "key10": "2CDcmPLEJQ48p5yJQA4jDQ5Hvt93HwFP34VuMLutaQEedFz5WbHbnUcyJZTrYMj9nvQNaoW8FngtpoSZ1AJegU7U",
  "key11": "5daFfopWdZPgMoCrYVUHKrWDgt7XDrAKxWikj2geLtPmqMpyYZdXK2kqiJoVKpw7FPbEvmheYvuEVbcoSXdXxaE1",
  "key12": "4T4DjRtVncbug6BEN961q5XFxfLhgVqB8DcTqHoTZA8tpvKAzGrgnw7rHyQ3X5HjzU2muuT8GYG3CEvkX5JT12h2",
  "key13": "45KMZzDa9v1LrFQFUWqD9AiLrFdR9ZLfkC8Bqa1nB1mQTno7jAXKs5W9hQr9KX2GA7WnNvrDJq5VCWpUWw3JU1KM",
  "key14": "2UXCRvGSj2M5AsUcEfhtGk8z7HRh6NcQw3TjigRrMqmwb7Qw2m7Kej3sjyCVodeUiHxzPAMB4g2EgKnPxG7m5oNV",
  "key15": "4cHMrmH4kvBYsyyQSZ7MYd4MBikGK4qg6SX9wz23MmYpetGGXafG3hRgCjNT6XiUMQYLLufHX1MqCYVEWHt8dCeM",
  "key16": "5YFX9Ut6EWRCXFVH756RfbWCFBnAo6dWeSD73fKovnT7iWCTbc27bAdT7DNkmgMrFNUNXxTomKd3493AKh4nZLBB",
  "key17": "uv5fFRghQVwik6Ub2j7EHnUGrVGUHFYKuyYpwU96C7u9iBHKEQWQkQ8BLjk8BncNDZMrrpWvpSbBymmT1MHZN3A",
  "key18": "53eNXBbe3KBNPt9LEMz9eUomTN47kZMbgCeoTqUrDDWAREo4edRsa69CvjCJFk3EGf3wqefQd32dD9ik4pm18MSV",
  "key19": "gSQDZ5UXxzhBPXRJ3XqpN5dfbY9ZzLEmAhCHdM3Vy28JYyYTtxajYgUCx4znNR8y2ho6UMYshATiPmGMLiAdc54",
  "key20": "oKmjRLjc5VawNgGgnSDM8sD6o66FcyeW5wAvRW4FQJNGDuy9Qm8ZZ7ZhuXDniDUL77AaF4Rr7FYE7EQbRaDTMib",
  "key21": "3dF6SHMbxgSdVD9mnCHYA4rv3D71dh1o3QX1gbx9PzEvkqG6uJ6PeqEL8q9ZQP6DfvrjrQqdnspYYjxpUEEryJvU",
  "key22": "272XieJUoW9vF8Cqrhq1sXiTBJApsZcjWdNDD9dUSeTdqxpPHwxUbdV3jyh1WxtfymoTsSAYWm5qCH9CpCzwJysY",
  "key23": "4sVTbXCVrxWJmmETVdrS7MYD68Hc5w9E1KR8h1CTo5ztk53Hf65zooYZUxGjQWGqvsQh5cBCtJC7uY2nV7CSjgV2",
  "key24": "5QXGAAWVBvJ52YG9LsCaLKXoP1eEEgxvZtbru5LYz5NFd1Wvgxf28yE5Yb9QJc1m8GyP9UCGxhXxyMBd6YzsMHmQ",
  "key25": "3sTkegHYoR6pgyZFA78dvLfo3gQQvVvyxq2yFvCP1uQTCeWgx33XU59Wc5iUjvmRhEEtQW7iBGa3sxqwtw88uStT",
  "key26": "1aqbLEKzkvmyeCTCgv3Ksvk2X1wFe8gNwnh6dABscPC1TRzTE3G78oiu2sc43nv23TbPCqrQcSrppJz8aUav33a",
  "key27": "UmAd6caB83y5MBU3FvfFUJoMbZcZp7H27WbMBXQUyvwPDSW56axmZCtJYCvx3xasdupDLMVtu1RAQjrXmKE5oex",
  "key28": "5VdYp1bpV22owTtNjeCyF4AbwxhY3Dsz3SymQi3noPtgcjkmcwWCjKvySz7uNYaEKFMmMPqaM2p7dhduJMpPpPbx",
  "key29": "4ckdX49sEsuEDrCk3T9aY3wUZUWFzdNUFKWU4dxkuzQc3PHjc7zScf8YfMCoZEewYt3zRGYJrCp3UedxBwwc1sLm",
  "key30": "3FZTsgusancx5cQew31nwkpTkmsAYmh1JHpVX5PzzjQrPw2LVW1dqgCpCasSdM7Ph3ZMWcPLMDenDUPQgLFdPNYg",
  "key31": "63n41aqKYwPXaCXJGQR1a5pic1aNtSmM7jNso1MoiL1J7dquZrdP7ZpbQuh7VEBzrFTaxygkqUxyADEuF3d2zgvX",
  "key32": "Uvzu9SGq9rhgDoFAfXqWYw532ZHY79XSQk8y7DV56Vt7o4v3x8wvX3QaKPyESNGD8BqsekZ49vEA37vUUArUpNP",
  "key33": "67QMwA5D2GLspF3RWHdaYzATqt48i2a1YJu8MvUPcH8umiCXF2urwC8TxjwhMYvSJyZQGzoboGfAGU1amMzKUkZ8",
  "key34": "65sVm9uMKuQCXTRBpTq2mEDJoAhPPT8L5LybNQZL8e3fjsgsc1gQWwFhPJLu2eCspEgibfQLenxkE4KrPnchw9Bf",
  "key35": "5qReRAM83VqLumB8qCDgpdiPYsWdxYNe23dNrzVPPPhjYArVVuvhVjEfPHNe98GEdhtUFAQtxVtbqoPa4JCij6XC",
  "key36": "44CG7vWy5HF777afsweexyz6uWCvXi2cAoeXZAYU7FX2AQEPnamFByG8TbdcVm732ecUHuAkkLakMJb1peuf3xWq",
  "key37": "3PErz8Na8AFcVt4qYjbkPwUDcdMvRgETzLAg1G2Ba686wVri5p19NGnrLwmybD4eC2WadEaAUipBsZmKb2MwATf6",
  "key38": "3h2ibFgQw5BvqGRv9wcsaeGMftjTZrh7eoZiTck7FNJpWPzgYiawPrUsBAATpW5JaA7xYL15tXqFdWdd3z38jxUG",
  "key39": "45Pcdd6rfFaMhgh5cUXqEasicTGQRBPvz66RymhJz7WvPfCok6k5dnCn9Spm7yC2qFfb5QernHeoQE45my6ktxNY",
  "key40": "5wQ67FgGY5qtwscCb2PcECRcxLmUU6YZaPxJjxQwrDDkT7QBgRhL48cERojUmjwzZqhYeqvCygPz9ds5op8GFK2P",
  "key41": "WT3SPBY6sq7RZfq9eDaRGf9YyVKk5yU4Y9GMdQpF2fj2DyTu1fLG6cwDjkCgAqtZpSBVDLaRoJ6DdEdpz3h1H48",
  "key42": "3nsTcFzEhHAWS6GAbgtuyLtDPtiWuxzL6jj5Z9HZvmnFgL6HvTY7nRCMRoisfkRWPqfE6qRA85YnuVPcwTcMT7Wy",
  "key43": "MFw8q6fnBZgLXgtQ6bfHf49H5zFXyB2wJdAqvCTm8xKdmGt1cu2n66huFdieMwwUejTf7N6nSGhaNKQNzYqF4uE",
  "key44": "34Scr6ribfeJUDByBg5y52nJcNzpFxth9rYFWh5uQBjHuJWwtTNNQ2khp4Bzv7qSF7amjz6LoVWc8Zmt2rjG5Z2t"
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
