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
    "GQA6CBVWQzS5FhaRYR33iK7VFKXi6fxFnrNXttUbM4bnh1s86ttDiUtDAKZXHkxqXxGciLSwFMH2K5K7tjV8iXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wM2ve8AEG1WQDjaNuTjTefp5pXx2eJX8mYYYWq8G8wdH6k9RLQ9cSffgtFVWijsCN8uuyQfjamHyzNJm4HYEi7Q",
  "key1": "5RmDMNFBakHpzGiArTAzvDabTgoE8nYQBVBKnN5g13X4zD5BFTjoDZcfYdUUM9KQefe7MomykBiup6JTfJhFMpQc",
  "key2": "5X22pQj3MpepX4yE44BpsiWMRFnQHm577vPUvWDxBoWUq3rTGLRFuUf38fwbRcJDaHLtjsbdNNrU6hVC5DoAkzmq",
  "key3": "2CBnivzoKPke6c6nUD337yoKuAV8gXCeqraK8FxCsPi2nxoHyMFe1EvG118ngr4ZyAGzaryxpz4iLUVofey73jqz",
  "key4": "82MYb8pxRuSxNX3Q63ohCPBQYauXxUgwF3gWkHBsdhqLWaAxCUSa4Mo2keG6xmFMgEn5rQHi6fZLC8Hot9DTs5K",
  "key5": "48Xxsz3VP5jmHzipo9fWMAVGHX8shac72KCF8uNygkHcJwmZ1cTsKgNQ3YcZ9JbMt4FSRyc5oGPUJZrKHJVLtp9j",
  "key6": "3zNMXe9XYAVyTWXvywKDQoqyoecfzjsWVuNGuWysAFLZMvaJkWE4ZXjER4AWUqba8j43fXeoHBwUimVYGA6VxmUN",
  "key7": "4umcVPeR5aswpaqc8x7Q6yfQUWBNhhLtNezKQL98AQmDQVnQHHfNMKAXviRjWDAxiDSYoAbuWuk9Mz98ghQL7PGa",
  "key8": "4bfB1ts8sCQuPZRTQSP4WkD2oaxYr5HQs9jhqyLDoJicez9ue3WrUdTdPaRSvUepyd5hyooZmFqAwByfJvnDcdhQ",
  "key9": "3xJYBgahDXYSovYdpcPTJCTgp46LwprDUp2MTFV2Ds1HYe8qtVkah9kqomTYw6AQyGRbuMdriCbVE9AD67n2S9k1",
  "key10": "JYcUHBHQb75XJVLGXHe7yrw7rf6bgGyr2aV28GPmKh6z73o8FrYHBvchDDtWm2yme6Ca14WRZGTUNJfwfWvzvf9",
  "key11": "2BmbLyroSZk4V1czshytK3EmctAuCWmiGgskAJkRoR2gpGaNARaXFERvuPDZMkFAQvvfpwdNejJ4dwF5vwC8Su3p",
  "key12": "2KxLovWuXmWNw8oZK3stG8N3BtR7RbPtLcLLqqTjuETuiX45fx1qSPQCGDT1GMRzdHA1EQPZ2qHB27QLRk5fR3rr",
  "key13": "3W2hAqFG375cdCyuYtVU1kn6zv7m4tUES1UnGjQLdt3eDit7kaCfv7Yv1NjJPPGKvG6HJHjqe1iHPWrK4moGf8XX",
  "key14": "5AbXcDRpNTNL3KPDmQB1WEL6RaAKHZuUJHYFJk9Fcfj46VyqSjGAZkw61E5dPytpgqshRsvzSatRCBqpi1wZq2vq",
  "key15": "5LAewiZawxarRyeb5oQep9cwKnUY246CDHVuuUv8tLikkNhU28dWJwMF828zhbk8B9J4gohbJBTshwEzePiec66c",
  "key16": "3RPUmdurt2S13QGWctvv1Ys8sPaohXYen15gn4aP6YDdV18ZedoGEwacQbJU5AfzSYrWstMGEDM3Bvdg8FEwip85",
  "key17": "3GwErAKPGPKGG5pdgrMngnZZV4B42rxJQwhFeW5PXrGQYFpyzTfXVJHEFjHbCWV9tLiPJzZ56Gfqwr5wSWHXDGxE",
  "key18": "5ZtbaejLocgJaZUYf9sPmApWFWRmGbtg46PWHe5RM7zne8xVEaVBv9dtj7vteLzbprR5eYasiiy7TAzZGy5J8h7J",
  "key19": "6rH8SxopRDKSiT8BgHLLHsByL3hnh1CRK4mzvE57FGnU8oEZAT1b7ePfcV8wMmiWFVo5cWg4UDdmaVMm9v6ERPf",
  "key20": "5Jeba4LGGDWe64kDJnBVpqwrQFL1vPh3WRLATqH1YqUUqevBuNzcU6rrqhtJSCUi1SWYJXXNSqsu4rCvA276kpYw",
  "key21": "3gFG7bJY5xNnoDmKCh7GHEP34J3EVurcfHP2jnxdFbMK1is3QUyLwijcyUjofEPMeQWoAtCFVjhLaHAuWKHRgYFM",
  "key22": "7FQ74gzq4oE8rNmjq1vLBUfo6YvqPB5AGASEz46JmdV3uCxMq2poCRaety7z7GeUKH56R5yuikFwpokQVEULj4o",
  "key23": "26feQXUHRMZFXP63PiD1iF4sbeJxe3H9NsHsHjM59yn2cNRJxyVuxywbCGEVDDBFMdSYcVaoptWXjq7YpDmmB8hW",
  "key24": "32D3dveoajRuyxH43jqkQ7zT8g6jpWa3EKjMgwprWMC38xTJcTQ8WwzaAqTfrAKgDwAx1YnDKXf3KP1nrjkUS9UW",
  "key25": "5g9RnF4owAVs7653oK7ZVaobi8pqSSSeURPPZ1DucXB7hccudsAmv3JPTaQ77Lm3yA1actYshCgnV7Lsn63ei64U",
  "key26": "5RghwhMTCFQWXxYDxAHaMKJpAR7kdffk3UeLrWjLsvW9DFj6w91gwx5oyb1DFbdDr881aYUq4pXvDQdpAX3hGtFg",
  "key27": "392xMUtx2AY5ag4oaaE4sxUXyzQMB526om4QfZNPJCdwSZ5rzwzSx7KUWtzeT2rsn8X9WvaFsx2HMKGPbcWPjf5Y",
  "key28": "4FmK7EKhW4LXm3p7gvF1eGgzq3BqfEurkxsVTfyjKZDiW1eaVnB7bZUNU1F7RjmjiGWWAuNibzeQbSdxAopSDQrU",
  "key29": "3cMf4Zbj6bxC1q9hNwNWzGDY16UhbwXQ99X9BJBeg9c63yXRatJxB38g8jMKYmx7zzNNrUsdyfQNSy853r11azgA",
  "key30": "5kFYoFwpoNLF7s165aHH2aAjxVFdSxFVSWFDsXsFaQUFqcBgur6bnpPud6omLDyW8ewPG2JTYurpg1NZm5osinMP",
  "key31": "kQjCWE9WUaE53DCTtMCtnZjHZBdmhtd1BYGAJ2HsnVZzr1s2T82YiBidBAWxasZ82nsG6Hy73MscH1Xfx2fctqJ",
  "key32": "3kwkAzu1xDquSe11DumTW6ENEpXFdLL8xAZfQkWEmFUeUypzi8PcAWp6p7GRVSQJUzBYgc71Dua2ACBuZvkKhHSo",
  "key33": "66HFvT8fkkezu7zVHS9g2atoGuu7pvaxue5yMwW5bm3gQXV3zqeaFUgLmZFaiqRUjAftmeyNd1ubNkPmacTMNoSg",
  "key34": "5eEfpKHSUmCWe8ELJkeSp7bSATo2iw77QGq2zBgWPnA44vEzjhHbDu3ZNXMMraY16fG6ZK9Leh9trz6sKbkGkXJv",
  "key35": "3xK4Kg34antzkLdqBkbR8bCp12kahtgdAXKkRdHoHS33RwmncMRd9MoC52THRodqusgNC1YNmJy89pjR6MnPiPiF",
  "key36": "5oRbuQPTSQWi1kYSWGXZVqhTaGEjkGHQzqF74FX24taNL4RPqumEi2LoFfvPctRvugkPC5G1QtJH3WqbqQU9Rvax",
  "key37": "4PBpFzKHr8G43bxAocwsLjkz2o5Rj9hso21d6yRMVEJmWeyDysk3P6ZRGrbxLJ9WtwHvBSeBNYQB23nfgJsaWNj1",
  "key38": "2EY5MRuXbdmk3icrrnbwqwCvUYoTuieY2sM2cFtvyAyzHqU92kf2x8R3JU78dRftYsH38JC9VbpuTyqGPGmTUSQq",
  "key39": "5FaMKJpnziQzC7nY251NkJ82fUXohU1PCKdhsGwBcM3AmojWR1PjtpXmKw5m67Y9CzVnX7moFa3cB2J8YgksPfui",
  "key40": "5LfuUE6A6dmui4mHn3Rrr4SmmbkWCtBoHFfLqREyxrKAueGCX4f99oJPmUtR3eMtd6mLMuGtrzokxDGkBDB22TcD",
  "key41": "4xKbyECp8r6qFp6fuSySZRWPvSM6KLNF5G72poxJUvgtZ7FndVo7WENdBGm3Pty31kZFpSuVaUpfB4TxyiDNGW8m",
  "key42": "4CJaRVBqyXcHpa1t1xEwmPK8P16cba7gLZVCb5nSWJyfJ7h6V4SYBx2Shtuu8rJay3rq47YfZHqXAW8tNGeioDdN",
  "key43": "2HHNSNjputFwAbxp7BoqxJHjaMDWXzkNu746yx4SnZe1pxs99SX3DDfhu3zLF2fdDYHSSNR9sm1Fjn6mKgz469t9",
  "key44": "49JS8zrJvmdyPw8h7M13gCmmmwbwGy5PgxpfVrbJ7Gxhw9QMamJZtM6D6jAe4qbjJbW1AUTA3ArGsFPC9BqAM3Pf",
  "key45": "ESquKGeik1WqCiXPK7YfCgioQU3675v4keMrqXASwKYenH88TTQyMFHJmmKjyz1vjxnx13rCBbXozTvEJhLVtB3"
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
