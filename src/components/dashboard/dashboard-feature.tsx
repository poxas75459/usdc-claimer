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
    "rUo1SXxwqP8KnDsgkLh7uerq4aX9G6sv5WQDu2dcHDF64BLhLN8jJ2EDHfNuLTBPCGT4KbfDo2MZ5ujaVmAKWQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BrwSprJPoDwQtxZ8QsKnM14xwdSY6w9pZ79VMvbLP82wxHMLGxZU5sWeDspCD5iHxp4vR3piwv5XaPuTHc63YKV",
  "key1": "2T3HmwbvWrePjzPYUVsJnbRzRp1oiTfdBSaAqnzj42K4mE7w9jNj4ri82nmV17qSoH8raZeBJNu7TQ2bRVgzZvXC",
  "key2": "2G1gcr1pTcKdZQfqVYFAjciKuETszscJGyEqKEY31yLZKqE3zzTdA78b1bJ4z3t4jsKLi7ZJYGgSktkh8ziHQwAD",
  "key3": "2zPzZTovqw15tXnutJkw8HhCUZmFx4xTxnG7NruCe7B2JphxnerFsJ4525SzBpYrHEEM85yzbWrZ79yJ5JkxChAN",
  "key4": "2ZQXSvN2nHzwHq55jvA54a6VRpzSb5ewhov2veWj7WaAej7tcHyC7sA7aaotwHfnDXhgkPivxUaT261M6V57PbLQ",
  "key5": "5dRQJmT4E6HJfH8HmyrDm4JCYoFgM6V5ibnt8knGYmMkfpRLD9uGCSgfM7Kkev6mCSoWvvRo9WcgzU7MQWzTWVHs",
  "key6": "5njUKi48NsL8rx2Mm7oXypsrQuwWZi7NiBeY77N1oPVovfwHwAt6boZhQoXUFALbLGvCtd3KuHspcJzJXvzfVXzg",
  "key7": "4fMQiwSFZarNuSZuh6yyRziC7KBVDydfMP9FYnCAbGEihKWfVtPLjig5FBUfxjG47aogMVMb4KTvJZqAmAnFna2X",
  "key8": "5auEqHEg9NRwsueznfw1zhQ8PqYwYigQkaeMn4JRwj7WWbJWSEGfUqeXF5YkMfpLB91RuyV2mcnDRp494TZbkiqn",
  "key9": "66dexY6TJpCGaEfGExJtPCuRFbkaS1UnrUajegg3UHidPkooYk5Ak55PyAnFjMXhQ12KHf3dt7GnMQpVHEpXJnYX",
  "key10": "5VrbzX6FaQ3NAcxbRi4LuT91htD1qE8rJRKwJeW6pvGTZpKn8kcnN7i3RjZFJYgYnzzXsTYWEpKGXwKr1MSRFBo6",
  "key11": "SdG8dtrQpEUV3cW84w2ydv5N7c9VBkEfzbbxXQCe2nZW1zQZVwYqvrh7S6rVDWtk5wSMrL7U1WYMgK1zYCabq9e",
  "key12": "5XXegRHooZYjtbFEUBJLGv1mEDRuif3vF1J2zLmcoxCpi8msNC7LPTWjVRgcQkZvcaFouAgYkGsjdUjwxmt6mc4j",
  "key13": "CbqNNYwCr1Co9JRMxwji53ueoPeAAcKma8m7sGvrEXZzGdX6PkW7xVpx3tiJFc4npdwwZhNMJLgnp6nhGY3L2oC",
  "key14": "5HjspzjD6FgfgU9hNhtKviCNM8p2mPGz6e2PgFobT1qpAKe9fC6eFiGxcAfQPUtmoKGvZDypkPQbiW3Znc5hWah2",
  "key15": "5rrJKJg43fTNLxxGsRD8m1q1s3DL9Dabmr1E6YB58osiTYJY2teeovGnHxReAAyWtsGhEhXvo7nztuZNM3EAY1q6",
  "key16": "5E5CDb8ZuSWoiHcgf5BjN6trHQaUM98Vhw6uaSynRXS6ghA8onAnB3z4mPBYcZPPunFzdG4xLtWGV6VX5zZoymBh",
  "key17": "3QNdF8wXyUmyVT3LZ8Z2a9DJBp63TbGfbZKuR4zh1U35y94JTY5SXpf2c8BH6A69feiwsNaUr9NV65m7sXQ8A6iq",
  "key18": "23qK9CWzbiVjiLFLgEGCYazdTCa5oF2cf8sCPVZii7DRHpft1BDEtcV3TB61NVz3nkMFTf5Z8fWe34RSWgExm8Hr",
  "key19": "2Js7JRScWCFfk8oWKpYeKVNAAHtiCm6etbbU988KmQNF8RpBS4MEdDWMECu3jXyNBfJMxNKtkBLXSfQESJ7ngH6N",
  "key20": "5cU6PVDAsMZBRZwdcm3v8KjWYMrmot7WMXgYBeDn2qJDHxW3jSS3qYmvvkoKMWgjYbUGBAHxiZxsUpbUXAxKG7Lz",
  "key21": "2Z6aHADZW6GRkVuHCXc5bXwy8765suUdX91x8MqQpADv7P4BtJJyeiKinp3xN4xrnee6WRdjb3dWvYWjCLtzigdq",
  "key22": "4sDc5FDKGLvNEgvApzVyYsLeVJaYw7Wf5F4u8W13t1csRWaeMRVDQ5phaG4Xahv75ZvfGz9gBMpSASB76g8X6dDu",
  "key23": "2xyBpZsHiysCnMPBizpDnhDVbVAByvxVC6XW1LzCKXm5TPATMTo3eDACuc8qedEvYXNbjaR5s2momjKNo5UdB3tw",
  "key24": "5ST7CgQGEPTPmAPyXW9cTJycxbFnVuUj2CbwLuS72e5MAav8e9GUAKJBNjsE67uSeY1oK9G75nCm7WhRE2WMeRjX",
  "key25": "BRhHEj11TyZhD4REYi6p4Ge48u24LgfALsWhddix1CmeqJYCX5W39vun2h6Pr4nSeaUkq8jiFZZz3fGY8maLEgv",
  "key26": "3kgqVT1G8Xngpp7BbELUqAmjB9YQsHX6WRU66sHDLKoyLmQLkrHFHhD2mcPq8LiMX9HMtnvXxHrUkreFcsEsGxLc",
  "key27": "4tduyYT1tG2Gt4neK2kGZAiKjAqQ17vozwegwJha3DhftRhqGsySHRoJp7U1fsh7kjNTHQuvgdzaFg39M3nAqevV",
  "key28": "5AyNbGACBAP46Ko8ELp5qjqcy9Uj3fvD3iW4UNeCKL1sEo3vFWJUPTJhf26GxrX7b9TzFnUNTzosRAAxVyn2YJsq",
  "key29": "5R5Ap3sKPBeqmRpnYYHHa8r2egC1rmZNDELDo5RtQYU2MmBFCc5g5prtsXP8CaBFjPxc7tpnqJMaDG7CdDNvd2ts",
  "key30": "5zLTK714onNKkZeX654Hpn8cF9VWBCDgMpdx9QjmatDw2LsNuNA1kxNMM5Cx3cPNKqLenuGG9ypoi6JZ2XsbfFBm",
  "key31": "4M8yTZCwZE7Z8pmKgR5CrZkVoRh3VSsieUn395bcD2GoT1GcEuZUuKueMQNMSDKUGZcCQhRF98ZfkTq17m31E6Lu",
  "key32": "2nCWPmZiMMQikQC4VpMXTSoPbfMF3YreX82cpkGrLUsyBCKUmheDFPSGJZ7GQuhWY1TeK24R4NFHsBxjWWpdJfpS",
  "key33": "5GgGhJG6jMrXX1GCgeQEE6EPfM1kPLnWTi1VgjAiGtPtnwChHBanLVfpKtHf65uFRnJqA1WnL8GWeiFsF6FwTYh4",
  "key34": "5PM1Au7GSR2jChgwVdxFqkQVcCVWoWrKmiMYhV7JJZLQ8ENdetLgqV2muNTL9i7nyMugtZsEhppVrWwemWtNP3vK",
  "key35": "2GZmHJXgnjGkWE63GUWvZP7brjvgp1gHgz1CMiGs4Dy1FkaUygQjwtXg63FDHgYy8TtQWJGMJLhRDrQQxb7oCiWR",
  "key36": "guKNraAJUrQEkh4Ybs3PtZvzLeEDZ7M8x192MKcuUJdwMuo3RJ97CXfs7mD1gvFP2zEstZZPgh2UASecw715nRz",
  "key37": "zPFXP4a68ZhMaWiwi11i3L4SJQY7tB3XQCZpUxQspHuJ7eYqfE7E6XnRuufRYXwst9m917svujCg3jGsnP42Qfq",
  "key38": "5YzAvWzHK2ytw9te5PhRVPNfi9VQr48aWgbSbwkSNgERU8Stq2ck2PYRHhiLxGHwJsw41iS7eM7WYsd8Xmf96niS",
  "key39": "3P1hCXswTpfRokGmfCRkjjHxGuEbBMvLgNdvtz4Nmopdxx7WRZbpPe6NuchDem7nTVb7yRKV6UYnYyN1LXCT3F1d",
  "key40": "47gQh2CancoLX3Wq9J7iLZpNKBZHwctWzJdnjWJt37Yuwz1hDNJY4wQAVt223UmsnJPWhfmTTtViMxUi4EoyWtxB",
  "key41": "29WjjUnJm2btySDnQgPvENBtx7fzpMjuS8dJyjcJZQJ4ahc8F6Cttjqj1jGcZJeje2y798VqY2UK3NoZDTKkH2mM",
  "key42": "2bpxXBtRwoKmzcaLDKajg158PFAetQBZzcmPkDcMPN2XWo7rrG764u4yQ9hq7urcUj8cFro38mnSTda4q2EgTiBN"
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
