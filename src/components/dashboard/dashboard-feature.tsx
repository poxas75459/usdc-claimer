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
    "3RKWrQSSLpE6hp1u9Ybh3t5eASxjVS5xrSkAk3Bvn84FV1NXDx3kxT1WqEymUysvj3yCYexyXbpB4RYqPQWudJDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B4kmpEdCct2G3GFYXBdxcjPFuTUP6Y7DTS8c9iq8UX98QhVUFnLSR3X2FcYWKh5mVjjz9Bbgy1ScuLkdHJeqCts",
  "key1": "3QhenBPKbf71frSD47wu5i9beCCtd2vCHwbD2WB7waHU7uBByjco6on4ZfwCTCgxKwwJD1KpQs1vvjj6jb48nwc1",
  "key2": "48cNaS1hBUC4cbBbnUAAhqbq6DwB1Ws9CM95VLqGWHvdzwvBMxpkbFHedDTF3Wpw2pynWP9XSYFDLsh3ESxB5fft",
  "key3": "21aJwDwEU3obZFgZE7HNNMMfgsHbrSijX5EjjX9oRck6BrYQDHdfzAqkGQ2aCjoY36S7sRai3n8zsGb7PNcWEbUW",
  "key4": "ESzS9ZaRk67apfDLgWNYGxPWhXX2pCGh8iytUJxRQdSTNDCYMq4eRQxupJPsrCvaV75iVAfSebvqkuDdCJBpx3t",
  "key5": "2AbJZ7c9aD7uw17MVhUCb5d8XtZ4Nq75HjtzH6ekFMUmhLEUTSdQMiRMucK5TzcjXvLk4iE7TbN8Rrr5KpdtLd71",
  "key6": "39m4hvLVDTVwgTnwrEgvrJdrYqZEjpJpV5rJ6rif1cpCk1ZX29deY4qvgLcbpEDtbncuyL7FSXPB4fQS4rzWSTAx",
  "key7": "2dXnFeKgc6fFWnPeq5nL1wfWPdbUBWKKjTS74ggkkuEyXcb9NuKkhm4HrUPx3zudg1U5kWqavK7YAkuAyvi2S2KG",
  "key8": "cqJfLDbGCgABb8ddnRjxGudTqX6tmwsMjp5QjmpqNY9WAXdRpdu9Ns2B6TLnL6kqpFmDdTw44yoWQFtbDCZpijz",
  "key9": "4JWt3wNjaw5KJRN7Ey1A1W5fv3WJ5wFXefP5Cx4mLtKDnTjL5osXva2ab261dqkgk7x57i2oqSkgEr1ozsjZCXe4",
  "key10": "wpBbsqAMmDMtWhp3cXGQQSLeN5tE6Phf6HDtoELQtpCGpTWj4zNcwZex2QARsMAjbgTXMTNShzpki651se5GXNB",
  "key11": "5TaXDsJDZdJ66iXRpY2EiHHGp8cgDjAogJkS9CHgPtZx2xfzDN23Cc3eTJNbbN786rwXDC8ghpJwBUQzPtRQxg7a",
  "key12": "65mdwpcmHyT6ppwZhqLBWdfxWZBbZQ486peS9wqdfeEZSweAT8urAggcgjCNv62BRUko31Rt3kY2FKKH8yrfBEWm",
  "key13": "58APL5pHwcidSZdmGdnmahQ6cPvDWqmpt87LNk8eNzLYCRqDNT5QD9kF7hWw16qvFt3rKBEaAdFojZ2Jj7FaxBjL",
  "key14": "354LGtRgpp3jXmuMRGaJGs2LHHvYbzTqWFiou4AksmDdKfbALws2urFXkrSZr5NNJjMpzX4CygBMfHbdWw2dEGMb",
  "key15": "P8nUX8YqY8vZSwMkkS7GdifyHRoDTFuT6SbYVFk5Kf78SdVhLTQSnz3RkPhHiyukgccneDFA4jae2fiJfzJPGqB",
  "key16": "3b3WkttZkK79tZCg82Fd6MVjhT9qPcQ7uBcHQw2kzeD5VCxmpDqMhoKw8Yhfcj5SbK1RVPmdS4jRNyGwQQHCCj2x",
  "key17": "4FGcoCKiKhQZzY2HomraS7jy8N43cgBWjgCPw5UuMspMEoFxyz466RAGA3X1eKW5acYyad9asehpj8m18pMJZHiq",
  "key18": "4fQhTZHTppzFp4jsteWg5DrtfjGET4R4ctJNX6C15NDFTvTKfyt8hLuJuEsNCxPD97vo1VC77VzpukJyaScPmZTd",
  "key19": "2RTiCxEfDh3SHWkJjARJyRXUmeMkhutPhAVqJUaUV7anx8w2nCKTeiQ2gfuXp6MRroq1rhd36fdYzFTasnTLFrx",
  "key20": "3xzaqCUT8BviHBckFoNLXxqFeFVV3nV1EGzTTtNS9wuH3epDQ8dtcmZYQR2MQGBnmg5vffosTbgJ7EwsXCc9FxyM",
  "key21": "5vh1RFPVu3nqe7VFjEYNdttZ826crzhoxerdFByya2fr8AQvxj6j7LCGTDcPPTqBPuyc3p8s5v8veLSTgAUAgfus",
  "key22": "4GFDe13yrM8qkWvLdM9uYoLkeEH47m3V8Fxh12sAu5jdK8ctRf1c68CwTyEc9FX9kjso8NHqX21WYJWcimxsQS72",
  "key23": "5G7NMz8Xpstixn2S9HcoJo4yBpM3CT6tqJYF6CZAPCy1MaxxHP21Aao5m9jp6anJpQKoPvycUdu82KLRLzUyCnmr",
  "key24": "5e1FFMLoxe27CJGQjXesMgWmK4mPbYrCUnxpf93t9TcqVwG2DFpaC6VSQmFSEntvvfrhkUiK6wKBeMpV4j2rh7dw",
  "key25": "27bNViVuMEyw41F57M5bjQbjH5DtC7MHWB5RzSnJhrCzrBodzRQvWp7mMaA3qm84WQ3K31234CW9yPmKngsCdtL7",
  "key26": "34Tx7NY8bQWtBN5cR2ZA5kiCcB9TYEYTKf3qXEnMKf5GYuW9WZBj7BibXJ5gVeDxWYBaUzEu3f3pasHPLsbU5Pdt",
  "key27": "4jexjhsvxwTbRE6VRZoPumw4tTopY8wdyZMX6kB9AtVixK5uhqpUw84TybMekwjKu8TfDcdoh6Mu4durcYhUkW4M",
  "key28": "27pRJr9s5K8UBMTzuqXTPMEURiaDjgtvUZ21GPHrypfCSY4PVS92EKBGX5wpYC4o3AJ7WusTmaXGproF1KMBBnXM",
  "key29": "2KQiZE2DWm1YLVjotYqLRvTWsG7jjxywjeRcih99yggQUf8j1Wiwov5DNcBE63j6nsrmzVch23mtwiNydHC9fxjf",
  "key30": "3dXagPi8rvSo4gt1WwjLEpcq8wsUWF4jG9KD6s99yzYGTkPUhkhHckpLua73vdhVTjmpHaRgLcjXwHjEbvmxJV6t",
  "key31": "63pKWYiKkiHrSKDJDzxCbeH6F98wnuNq5FQ1oGaGyVdDqhZ6PnU9jmx1aZB7QkZnfFtsLfmvtUjygDViGFPWyBPT",
  "key32": "5p73yEEePeCy4ziSFKxjvZhaAdCMMJBs4ws5GGW25VspPTAQscBhz25CYp1NLnwt2Gfq7duHMBCwS6ttaXH2ZuW6",
  "key33": "5oz6Nzqm6GgrHEeDvn6m1znzEawBds9Xixk18RkXWbXhZVQMhKUEMM8zkj8y4ncxmLJNmuA5yaS2vNf12y9dQYUe",
  "key34": "oHJbaXYnqifpWhaHhh5yT5mDRiADGoBQC8QaahuncedBp8xqxDNAbKUKJHNxPmF1RmJoziNtYnbxSdV54akj8Vv",
  "key35": "5h1gTxf7dmStpCMMeoM9n4ZKKR8mPUcdKVbzDFJP5NzEaMPLJ4rrifvToJZsoFoGxqvVbNC7ArrP31APGQzyooxK",
  "key36": "GM44vZ4J6Atp4Cs38EYSRnYzrxm31FdqtWbCxxQuXrK1whj7UGxgwU4FxB1qhMYz9jmDAKFFy2wjo3WLzik6SW8",
  "key37": "5RzDLXLBFV6hA68M4f8Nf82AfAfHKaQfcurqop2Pa8N14idSToWs9TE5yGmkEyR89JDfzSHQhf5nrqTvs8Gd4yaS",
  "key38": "5qrB1ZsMtevQoRbZybNFLCbAPPbmpq8CywJ5Dt9BHToRnhtK7zYDHny6A9AKhevvfyYCtDoMo9nnEK6rPEiSBPDF",
  "key39": "3sChQrBkgoQRxwGPfNU3JqZCYmbhFV6c1V1Pr6jiP6mdyrftTvZGWaQv8hfFLrr23E5fekXTmaLDqcYh2giXm9By",
  "key40": "4ZGimz2hPQAfHHa4xPWtzFzRAGDi9wiukkDEpBPesM46WwoCuXLSxhbTzojap363pHjKcMumNETW5jAyxvnvFbmL",
  "key41": "4cQmYxKpp3xaAUooqnzxspygAtCNCrPkpj1VCdgc1VSk2krA5GVBRah8j5JfkCpKuF1yfKSc5UuCzmkmGjvUC9w9",
  "key42": "UXfFwgpMjEE2R8FdzvDQedRXP637kDuQo9WMmZeVkkaHGDQfC3GkJE9P2YqgkB7Sm5ietSzbHEKx3xMf3AHv2wu",
  "key43": "3AsctpzGhNFEzaoTdHnq7CLKjAumFuFmR5vh3UkV2AsT9odqmY3DhBFwn11njsaF1bf6uJAcdDQdFRHAUfSBui7m",
  "key44": "ZWrFjEZoe73UjdZtyR7KPScGGFZkBqnPBSQFmpQsfxW3nLoojkM6uoNP9a9vyDqzZ8Gtv9PnCqCGHZuAr1rZB1P",
  "key45": "3yNmYe1Jkpm7nP2GtyCFnUVJR9UXa8ZGSkoPS14YgpYZMtkfwzZxCpwzDRmcnz2mCX6FUSYF7uMKtbByfhGUxrcR"
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
