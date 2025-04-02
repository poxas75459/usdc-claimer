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
    "3GAmH8GGDaZE5HKqEQ7ZcGsxJJC6dBDWXWFF1TWsmXowuQ2tfHFynUgdxyMTtAQp4csGAwyam1DyMyiEsZ4jLef6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VaZJuHFX5bW5fUzzddYRBeQFDcWM1w5mw7Fug53c1o8G5b5d64UkCYt81Rxm9Vp6FfoTBNa9WCfbbrHVHh7dmWP",
  "key1": "5PhfJJeija7QhzJJivjkTDuehHxG9ezxKvqfyinVQx5Ji3FXEoZB5UnTgo6ZiX9qdN1H2PwDQPLToStmkUUcKfUC",
  "key2": "4BZ7LKNiZEzJ89aVrjTebeVFoea4DLmjEGiBo2PdEtGSvrV5scypmRey763iGMA4ERAXz4dnpbrW2NdRdwXxrCCw",
  "key3": "3aLpHXvH16eiArRGpGwuNSfaXaEqP5teAWutn16broGPV2jPoYFC1wL4vh4TgENGXjMTkjDJNiNXZmdKUtYFMH6g",
  "key4": "4vybmV8LcoBGEJ8qzF3cQuy1yF1UanUadqwM3Wap5toeVmcLm14RN7CdvDafLJzAvjmU2QoPVH4x9RdS7HMFBAhr",
  "key5": "3YVjmDvvsuDQqzWNpP3KV3XUtYhMEcWXE9ACneDoy7ByYKxKQSLnb132XDTkHBPKtwq6jK9n5PCseswGicKyh2cs",
  "key6": "3DUFysSvsVm6cAcQ7zc3VALjPpYBWJDjpV4VMA8ossvt1T5VBG5vzb5QDLiRpnP1YbhCGmmaXvfPVZBTTXNhrAqY",
  "key7": "HXbWQ8Y9CYYBFS7YzkhnCi8KQrBzyYKHLP8Rw3QZzHHA7gG2sjN2EG8AH3a86aXXVZNNLAjAXHVMBBtbAUX95FV",
  "key8": "USSiHDjM9ar78myenVnYtLRyLsoQGkNJPHopYDB44mf1ciBT1bRojRU3ckFaEMvurGgUXQKSsLgdtG4XrJxyoiN",
  "key9": "5LYXxuqNT5q9tFq1S51zyaQNFxvpsZoaMKQz4q1y4rzeNee6h6ZsuGUjWqdcxpyi4fbuDhyk9ndaSbRGQnifBDiQ",
  "key10": "mDDBV1eUmeou8wzCRnQuKFVJVDWGPeUHTtnM2wFSRbgu52n9Ld2GvqhcgxRp9nwQasqWPEbncT96HsjSp1YeJpx",
  "key11": "4jgSMqb8Lb7Xgdk4hRL345ekgtcswzMpSYDaQ7bwq91DfrRhpE4vUDWoJ3cdY6UbqCqn2LRPL8HAeP18LjMkkSYt",
  "key12": "4JQDvFqNrvPU1NqXrsr4AcvgQzbpVFySuUhFTpw9CS57XczCe6BtSQxqBsGTDWa7shqsgtJGcshxAcXYzkSHyyeG",
  "key13": "5c59n9zda6SrJhFfpa7fBRy7rQ33VRsTqqLqi5ZHeWikVozseztV8yZD933c9NyNZgkWc365motoFh3V5MbgAKQX",
  "key14": "2pY6Utr7SbaguXCGdqAJegFt4uhfKsS6YXTm3x5u3geLzABfE5FNAtCPM9PqoUcDbYBgh9VArjF8CGmgM4hKAEKq",
  "key15": "3B5AHqFd7CeR5vg6sdkGJemZyHwiAseZC3JoivgaWpAkujx53K1vDf7wpADnyqhYK1nfafS8TamWqFWzPK8GS5sV",
  "key16": "2sHFQxgaswPbi6paVoHatpVyiCyfRLxPoeVbXQSaE1nMRuGGzVHoxkanWCxKdhJ43yCLWW5Grxcb7Ur1KwP6ERCg",
  "key17": "M3GKxawkerDHzvnR1zDS9MndRYLnkCBJZ8vaJHhcVn8R5wFit9NCFmPQm6vi5vTekA8ENffm8EAnmNMqR4LmtBq",
  "key18": "5D3mGsmFooK7coUt9J4reFrpeSinPmBv3uQKGXyQ8JVtkoYpwpf4JyqFUeBPnJaAARp5gYz4uv423ZKTs7PEqLWY",
  "key19": "KZFmuLVvTf3JqB5Bw92YBhKPxYPkAxZQg72NfEUWTbCVGSohPm2RW5eBMRB9ozaSJpHocVULzxuDSKFgxiv8HBs",
  "key20": "2HXYfQnaCKGdRvPLrhMR4ZektP4MaEu6pkiqFB9DsKbaHF8KaGWR9v4HkJ2QYePB5EoiYnidzkPsoNuHTXXHRnMG",
  "key21": "41dkKifFnjEz8Qw2c4xnoeDz3LCnK9Mr2kzoCUDQotddDcFf1oaroz6dXkKduChsGvPkMvTQ5TxYs989hfsyPJGc",
  "key22": "2fqanumCVopwyaDJRjpTyhxwBYnPULsWafvPbct6EsrEyxfpq5o4naMa5hZnoFiUzB1CWvzE37md1qFcyN6J5BTB",
  "key23": "3KcGEJKRzwNJ5SYWyVBjwZzf3kFDNuKnqSsuhJWJ2GnyJc4T99tVWob3gBsSD7Y97NYVtcTV8svCu5qdKp1t83ND",
  "key24": "4rewi8cMa4xu45BxjbSVw978n5UK4387S6DvhxyhkMxGBiQKPz8i88PTiH4DsqmN32B5XFAsRnCaQtoJc33wUJ8T",
  "key25": "5RgLrXkfDejmK8xERvQufppQbcF82KWGrXeVuqHUfWskgihqfP2eNTsZEAZ37bXfcR4txyRZDpFxCgTsgQq5P5RD",
  "key26": "4Q5PuaKdJSwDJ64QBWaFsYbre1nUYSVkTAzZ3fzHvJQqq1K23XxcoNxQzBFa79hDnnbtaKJ5BNaPtin4fJpFKZtr",
  "key27": "421E5VrBCEF1RVog3ycKGx8ZdAPAJ2ZxCgZTVa4zTPguT9Xsr6ts9DFomWNdbUh4VYZrHirRCxb3NxHhxmM4BArj",
  "key28": "34QecDM7jhBbQGfb3c1EeENJGAu3sP3cBmEn8Rpp8MS2535qmQQZrBExNCw8ogZPKe2dtNmKMobENgipkdqkKbbT",
  "key29": "2SC8GYS9pXgxK6hABWwYh2iYoh6th2eDDdUbzQycVPwmDGR5BSWjnsuLoYFPeN3TFXsoxnioUmHrbY2iYEFaJdhX",
  "key30": "4QQwbDszci8D7TEVkULrcgZ88ZqPut2AVnhJNBYf4biyr1swVhwCc77RGiBFetHpXcKU8LKUESRyD5vDiKAaPNX",
  "key31": "37UtcD9m2Lvtrt75ccGcePnb2y4oHyk7FhTHwETYj1C4Erqa16bC72pX95GcrZy5KwV5Na9uL4DJbsNbzHPX9375",
  "key32": "5hTeLftD5qYAZuriH7RLKdB8Dga8ot8b9AfNVXyMveDeBRMJ3P2DFK2RzAgQZVdwQyhvHrb4o3q6Sf4NhcNjzGbk",
  "key33": "5wDzMDAo62VT6eJV9eqriathHVjUppSEB9FdGgzZYw6pauVTbt5jhN3r7c3VCLAZLJYsthHmmShimdQktHa7wsvr",
  "key34": "9ZNSfMTmQ2qHe8KCuk4W8kTRYm3XD3mZQPVZEHsozpQJrHMpVCo68aCXPNcBprjNGCPhLT9wkLr35LntxXEf4Ta",
  "key35": "7z2zJth4B5tbPdQxUuUmZ89vkGy27wd5xRLWuPZ3JA9CwzJ3QqD499fC9tbipKVKnoKe3r3rMxVsVH837fwky27",
  "key36": "3EA3xFZCNugqNVaSkAYdw1xziqj6NZ2cRVsYzW3Pv5p6B5PfLbqjzERHJrRHLTqDVFmmKGkvVPqoRtA2x5XkU6pD",
  "key37": "4DbSa1oL7bdHzx17HYCdKxCv7dByZvui4rZmpbkPX7bREPKSRcnruLYYCcdFAm7MTxiF2uabJFciqNw5Hg3PN9hy",
  "key38": "57mhTFN2GHsi5ozJThRUjUyNzxHnNVZsGiSJotubhegWfkfXtvb6vdi6NMn2XNuPtcWxiXZcGi5EqMjZyua6RLKv",
  "key39": "k5rZhzXdqXxYvAbkTzA6rCytwZQimzA7MKVr8E86MGWdeHngxd5akc2WMmQQpPg69V7wrgKkFkiQFjWP1VNEN9S",
  "key40": "HosiMseYLZyQAqU3Gm2S5BRKEJRaDcEtAiNARZv1kWJykYJT5zrxxPXAUAcoCv8zPiv7qsLqzmnFuUmyCgcFQ4q"
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
