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
    "3n2AYDmxTxHHsgJ9ERgkKe9yno2FXZAd2MS1KV1fjFkdVKuWw39Qw53oR9GEBPfvtWt3mLxCb35DmN9iyowwCrek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PFjqRj2iosc7s96k4CE9jb9QmstXvXQLrKjy5LA2hfiMwzXbq15ZFcyU2dt7tyjdNvnHAcAHm3VGKMF2gzbk1Ny",
  "key1": "4LTXFZjL7tjc9RiFTVykGGDL6fC2g2tvrubQ3jrGWFa47ejo4eX9o4XffRsdwvfRDJYbKZESoQ4Y24PsoWiM2LL",
  "key2": "ESW3abqcxbDVjdwvy7ngjEP8dhqtkxzbNzsZQALgzAh2PxcFFENBcJdtFi9jk2indobrWXgkUHQwM2QUshuipSB",
  "key3": "vsUemvH3zqwqdgUeAUMBrNNMiV6uc1Hd3ea1rG59x78waq45d19adBky5LkUEcNA1j3qkGLQrQRtV6vR2q8eKNA",
  "key4": "JY9pSxMJuAqpuSowBe37woBZFq6W6zPMpbmctgTC2g4dNB1HiK6TTinnDgiFL4FdsodGFFSzkLwBH6Ub4p9FASp",
  "key5": "2hzh77DcUJsZxTqhfKxAnhs4XuQxQP176xzhArmoMb8fyrPHMbmFciRiZRaKDvFm879WwSQhsn6DokJ76sUStqEP",
  "key6": "2arSj93CviYbLeF6eFJv83exRDZadLgZCQjFAVshKgebQJy5g4qV5ciZz2PPP99zNKdCUmAHERY1rAqA6rPC8Txb",
  "key7": "4PwULwo8PbfUJGH685z9tQ9uCooMB9SVan953LpCcGSZK65ytPBbJjJmrD8BZNMKnfsYExrPwjA78CtBKPmyd4Q6",
  "key8": "3pAY27rYcSxcDTCbjHo67R3rqu5dyXYUGwZYzGEYfafZ67pr3T3Atg33JX5nAfxzbja614j3kBeubBU54PwY9Kku",
  "key9": "2YAewPEHc7HusH1zFF2qv2s66P8UP728aa94yhf2KrcyYc3hM4AW8Gr51TLmi73e8zquJCckwHEcrBCZdFGzpuHT",
  "key10": "5AiHrhh3VSAVqz7Mprc34AhurawP3SNQ4fdYQ6A5CraDdy9Rw2UX7tSosx8iHtmiZbcFmqzVdjWpvCFUNSNLXP9Y",
  "key11": "AyZgpsBkSbUgqD5D2uqJsD6hkGbzDdpxuQstG22jbTk2KRta1RHBkhJeMgAupipmY4YYLQSdi6j75VwDxpSJTa8",
  "key12": "2EWGMKitPktY33b3u4e1WCjGZC5UAgMkxxN6eZS32zwbdFX9oJ6vLwq85XR5GUgdR318ohgYm7yCC1cQ5Qz9x4V5",
  "key13": "4y9QbEd6cSSW8xBeJLZkVNp7Afdesq9yUX48BznHkyNjmoRoWsmA1bvusDiW8aoTaDCBh3FsqBzaXRzryF3o4EGR",
  "key14": "5nWyL378sxXCzM8uBG7XmTaSYzjeD7boT7pUD21LQfYkcAdVRww1wCA5REo7n5xJkNodmcHq6g8UGoAvLr2aSw4S",
  "key15": "2AK1xebEwAFyftEWfmb173oQRc3aTeeDe4bEbqxEi9Mu2woDnnNpRDSxN5L8YJybNriSkFzkrNyf2XBFj2gsrW7p",
  "key16": "4KVBaoXBDo7sQuy1MYZWJzV8CEHkk8bNataih4JFfpAc8C8e6pWLK1yqqRBHvj7Gr1JdnvNa7ctE9giQfri7BWTn",
  "key17": "53brW7P3hfrefZKcHMFDKLXAF4UAgw1LDKfeJe3fR7Nq4S5EgjQGS9Q93e8buZ4zR7YPdaaU6hjFhE5bQ1h5phoP",
  "key18": "4t8K17chtGhkr2EaYu9FiCMRmhjGhcVTBVSf2wMR1d67aJa8fWp1N5xu5oWV4ttd72QwtQzHvbnqmmd1cxfuuCNx",
  "key19": "5K3mAhbuJ3SuuAUSJ3QkJhHUoCCsjPfJ3fE85DnBQffm2CzYv96AjuiSV6SUZkyPJbhokX8McAHpaAdcXxTFQFy4",
  "key20": "4DtJQpyah2zjQtDE8ysj7K8HEsauzAR1gtC42ViNvpKRfexyDKWafbXBmkK72GzLWGmQx2z1kkyCNooeepF8JcYb",
  "key21": "5vGC9Ck4PqFCUrrchkED54sp8sNJ3TWCxX8GA12yTEBCEKR3fZjgXMQkTjAaW2oHcQLi7WxDovGqMBBTfLUH3dMi",
  "key22": "JotQZD8hXgmMV2V1fbgR71aqs2Y5ftK7WbVgY1o68av1z8kMFYfoM8Tfd3zRBb2TzqS57hEt917NToLHJjypK9u",
  "key23": "2bgr1xLNmJP2fKoGdBiE7cgz1eA4twzZJxjQ9PphfUptiQjTSXv23FkUcAUpD5UXNvj91sJ5W1tzwhCsBAW5qC7Q",
  "key24": "5ABfTKbYyqoF5kTDppKinrggbJ7y3a9sjyhK7FbMbpJrFBYiENMXERf29VhAprBdm1quzKFvHLWXFrCB8HeSztTh",
  "key25": "5ajuLkN7WizVMG8tFXBs2xiTfCChzNAbfdqwiHWN9t4Mo2v5PKBCdQBSbKdGpTxos61cRnq4KSie649qXX5XNm49",
  "key26": "noKxnt4MbNhGKwaoWUrjguneN5753Y1v9EmrR7az8AEdsfY28wvkn4RNeNYxGLdWdnV5ajisHM4wbgrJYyM4mAV",
  "key27": "5cvP19GEsgm1UkjsqfQouLrjKzvcCaoA3By97vJzNbrsttiL7BH1d5cRdc48Up6ivqzoZxLLuYFopeiD2XYyjGWt",
  "key28": "678G7oFjHLMy8WiP4NiqfaXDdSPGyXojtzfs5qTvXY4FobDARj5HDQo3sXzqdmypneXQSYies5BNKyKL2A2LPLDp",
  "key29": "3dnPgXZRN4zXc8455uyawheo8X6RcuVPoWzeAXNmq9KxQaqcZNm7aiYdfJrzdufWSD5bpctBuKvvmuAqWDUSwNEa",
  "key30": "2LmqxRF6x4SJCpy68N9xDnsm8Z4JWkQQqvDPeTDnuCjqG4wFHTXEzWd427q5eBS2voShombBd6aGHHp1JpKmYMoa",
  "key31": "27UzmoLRGwdBfPqggHnAs7uL5ZgUJvkCS3q6XqSCaYbatgZeQkDssDpvh5xnfqYg8dpFVxmZFr82Sf5eSDToJ8er",
  "key32": "4AHwJh2rCWbmfDuXLuwm3JThk1GawDZmRVcj8dRTw6t6HUz6MJvcDPrZuQ58cgAPgVAmJ7eVVqutx7hZLgDHZRvf",
  "key33": "3kq5zA86vCcyE6npmyL6WD2LtfyXV5BkjYQCMEPTWYeZXevkfJgMbFkPtZLzv47nfWANAscypt5dyr3BjRPcqjdT",
  "key34": "fbwbxUe9LY8vaULpXWTDvjZRjitCujgtkW9pcUtfWEanmTA1sTdt8jVk8Qp6END5g1z4wx6trzYFA36marzQkQk",
  "key35": "41TpoS7whqdRf9A52CGDh69rgEnTQWxzCueaHYW7xxqqmt8N8A3sURoeoFahbzqWaZakuXtca4aMZc5YF2soiNYT",
  "key36": "st5iqgD2QW9aZosEoWLLK3HRjD61wcEURPRKPyv1h2YCiQyofJn6BdAbEySwqj9hx6K75cFRDeF6uN2LpqaGeyu",
  "key37": "4Acnitj8Nv2wYiwohRkbByYrnBExAgqvzfYZzaJR4vshYzEm7Wz1Ahp6j1zJ1EM3vYQz8PvxNHFdA7sLsZNk8aG5",
  "key38": "3c6wRnvsB2hG4znxvtVJUKm5zstUFnNHfYaE5X1xZoCuMzmuNbWDHit3HaiTVogBA9dRzsvxgSq7ApA5kUoYdobQ",
  "key39": "2f7YAAWMzaeiVt2HVVnJzVCMj6ooxwkh92FyBwiHNKpQj7GggYRKzs26LaWHG6tSWDCzDCQkN7z5aHpndhxfqkZp",
  "key40": "2uJvbyiX5ph6MNnqnXiMbkGh4264NTNYV4sthrJP8jvQLm7XfaJd8sCFaHBEDVAi7Cb9sjFMPzQZVcLKqCEtHvFW",
  "key41": "2ch7FHfW22NbDuD4YzS72ffNnyQSuFAGkBMEjyQg7zMwuZ6a7yfoygwQZSq2q6Bp2sHDsjWNyCjXZSXJQdQHHV5C",
  "key42": "2ro5q9hRSLRyDHcaMmtZPs2941YKXGvWNbrKJSp5xo5zuiP6ddLyExdfuYEx7VimCCfk5HWDJYRLToMJr55nGAVB",
  "key43": "2AuxqkHbgc3VxsSYGuNeCzh16nNhbyXnYxqRLx4n4chfdxLQ3dVe4PQGEZzmXnucb3KuNetGEeUuWTsW6JcZLmES",
  "key44": "8yMkSzGc2r3rA5u5bM9rcZ4JmgUa7h8vzGw9TCM33qPenQVGUTjwb2x3hRk3EyExdqkCHuqZUpmcdatNjH739JF"
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
