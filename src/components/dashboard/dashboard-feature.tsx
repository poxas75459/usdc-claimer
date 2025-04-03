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
    "2brZk9a9g7c9K4tf5YEbAydcVnf5njrShiXJmoB4gswLRbgoW1ZDrPufnLXwzAhC24mLecD5bXzrEJgnQ4LVne77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65WGHCMHNJagUSzmgsticrh4AnwvMEppWfY5UEy9upeqeTw1Kf8yGd63ugjWNVyunPhxrZReLP1s5BCzQxgisx3f",
  "key1": "2FRub5cu3gS6B9jfHFgw91Fd2UkoxbfsoJJBvswsyFmDJR4fEh3o3BAb2cXdTWyENiuNfAybT9rPoqHYsAxeJEWw",
  "key2": "3beXxSbHcHyL8bajP5Gk9LPF6yRBntRLS5Dw8S7wAtY8sAooYNsCDyn3iv2msJYNHmjv1fo2yBDwedtTzVTcYr6X",
  "key3": "3sZoskNMFkAgwFHYVhacWLHkroVBgwtLWwnhJHzJ1JHPnTsybjEcFDFej2CRMsJr8JTaALKCyFwKrNjbxqCTh7L",
  "key4": "2B75jsVGAWN4ny5YSEsr5JhmE4pnKoAhyfkBG1FytbDBu9nGpnMDYDLUnyMxZGS9HrXjXndomSAw7jPNW2iR6s5P",
  "key5": "2FhukPpWjUbgYBYEEXvAEeqcxWuAJYHzdQE3m7G6oPKWvgDeZFw5iHaKFhmuGsAyoZYmDyWjqLCvWnkGdiErwHFr",
  "key6": "sf2N2hstH8HEr7ermrWxv74kAMAaDTvLr2457j9vbHokaLLBTrrhNkVgtKS9Xk329BGAsSQA7Kd9Si63TgXknhc",
  "key7": "ZBMR5mjJ19tvw7KyYheXjGk4CtvR15zKABEtgGZ84XKK6E9izmgCGn4YHwARrD2D33SvJo9oYyLnnFD9zgNFchJ",
  "key8": "3poZJGCknmze1acMUfMxqYKgsEZrNGUTVdE8WQaeMwzkfrm5f1BA7kpizDuoF8thxVb7iRpEk9mEjQMz2oX9yknm",
  "key9": "TuHQpkyMd9rnYQYZXcXSGxSNBR8McNjNuuh5UGPs7WWqw8pQuhh8ZEqXnkdJM5ErjZhHHC7KTWy7vym9fnxCGeA",
  "key10": "2KB1QB1GonLPK8bVARTLFMm179AScmg6BfnAZMe2vF3YvoyYE8GxQAH2BDJC5hpqnj6n4dZH5ZWxzuh2VebW42LW",
  "key11": "45M2tQuQWniPa74AUwAu4HFZmegERWk3gbKAbNSQsbu3Bo4uuMvEs26tKCnnXytMkw8ytMM94FkqzPaL14ZzXMq6",
  "key12": "4MDPfMbiUnq5JpLk5L9sRCKjq6AmeJ74rngn6WErYT4nTjtx5RK5yXAnoDTZgXu9w2pTxB6vHhnCpncpHPxmySan",
  "key13": "2cfoWYm4MZHciVHCxTcrsonj8g5wz57xbaayMxNMsHacuxcgUp2e8N45t27uyM2YcSTxBjCnDLJP8w5GdhSrcofU",
  "key14": "3DsjH7XLUZqT5bV9JSLahQ43HxZjKPtbxsuRAdAd44B7f11yRugbvyZtD4jNdoJfpaho3MuW5XsMoS8iH6DbzCy9",
  "key15": "2G1e1UrdpsezALHTLNMWPFoeQfxGqL71sYpESDyKAXH6NGukuv7pi6tsmUn6pEn81KznkHm7ffGtZYPUQuuaQzR1",
  "key16": "5J9DFFTthJLbWFPEgaJ1bDSz5V6cSuLKe3gp7kgDzddgqR9cRsurJ9XGPG2NJkqrxKGhxxfdgrJ5wSGNJDzQL9a3",
  "key17": "3Z2VLf73jdj9DwXDwbYhG5nztWg2XWoAj6hpnXN8f5mp4vCTWs9PmVEgN4muLZHJorWAqxpn4w1qufzBUDN1Ej9t",
  "key18": "1242fgKZxkRhcgEogdgvBsqGGHYaBsM7MnDMfFNZUSvX75xo4MHYoJ4XWFizzRvk62QV389oqmywx7D9zUDyVBE8",
  "key19": "NvZ8yv5JjmgUaV9W7G6pHbRQG37S64e6a9ydx6bjPsPPgnEkAeniJFmpTCJxF4KbgeHjTtGVzGS5djoEDnddfms",
  "key20": "3g41BCCjwkzurPfxhMLS5y7j5gJpuntnZDKhjLvKV3VHjcLe5MFw4aMmt3M2kqhRZXeLPGkkP26b3tf2h6Vj184L",
  "key21": "u9wrMRmBJ6EH5kNa8DVm2EavRSp4PXQbqFEFjkvEVhX3KEjQviCgaTkgCBEjwSeYa38s5kykXczxwQrEWmtKaUz",
  "key22": "3ACfzNrDhs8NySAuQRZ79T7scpyJNrkE7HatWPH7ZDp5sLcphmCZie5V2EiZ4jA7aBj6UC3VnVW99Sd1YWBghjAB",
  "key23": "3VZd18qUjYnXrzqu2p385rnj5i99iQrdw54gqTnwUsrXuzcdPFMDtDC3TBq5CqcpVueNA1B3B8wDBxLUAgEgAUf7",
  "key24": "LRrHGP1D6NQcMwmFTbE9cuCMkKcX8MynT6NrEkcRzQjPuL7evwFeoHyeYThRhut158v6ANQQgAjVoHZh2o4KjZN",
  "key25": "vw3f5NwfTtrtN21mspusVCAvCWtZH3gQA9e6g7stGjEKqKQxjBNhd7p3rbNgcR3AbVLFUBEUCKaw5CPfJH5k1g1",
  "key26": "2X7KAUoVan55bCBEzm7gmypRBwSwj2RNKAMdSkwbJixCA2aFm8f6VbtL9uEGPTH1Hpi6ASv6wy82bRGsDTfSj97J",
  "key27": "zxDzC9yk6HerjTgjeH7hzoneCE5nn3caggGnC13D6VJHa91fLVJtoHoXc2fpTLi3tpymMmX798kgrLfBvSQRo7U",
  "key28": "2mSEciK9okagBKEuLXC57QLqMse6p95XZqT4bVu6Pv2qLBCPiFvC3EggkWmqEbRuJQV48yxZyzZwSHDqTBJD27Dt",
  "key29": "2rEjg5m3pcSkXm4uphFVbESD4TwkmtL64cwMqAnp5YFWaGGhymYb8k5xgyU2cigFeUmfu6KzJb2yx7hysKVeiD1T",
  "key30": "4rKJuZiBfMrRQzi2KuwQ5XGBRLURG9qD3tfJA9YEF8BmYUtpwpqFq1roirxAgTyYV8Jr9zCaWjWBDa99vic5aPN5"
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
