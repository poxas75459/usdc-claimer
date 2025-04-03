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
    "51tLbQqkwpah69iTsBkkS6wfwiZqzeSreqTH8K9U4KRw3ES8PZhJ4w83VWAErNjRgakf7jq3vtr6EGpxaLAprTDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dkv45fv5N85xmWRBiVosNjbJ4tjMh6qNr9KQs3MMeKPc31JctnnemwtqxkjUvtvbsPZ8ySvaBdJY8A95UR2GEGm",
  "key1": "ocd92pLWpdpTBfNQ8CFrAYmxcg7nJdr98BLn15Bz7BUJHA52LHh5ELr9J54kjFZawivVroaMxYYPDvBx25B2jN1",
  "key2": "5KMdswjwm4jFz8JUHnW9NiRxFJagjmKDkNmrhKDSrvv7wn7X4HvHoRtFoRsNoNVMpAqUvirCmqgrAc8sHZN7iPSG",
  "key3": "379hSLYL3a55ZtKe4PyB3yw1YRgVWxQ37N1VG3pxRpFuNpQfZwg888Fz9PrWFJ6TwrGtGNrNfe3mrAoVhqmWKr4j",
  "key4": "3t3W4ydco8eMQyJmPc7SnqaJmFqGx9MYvwmcjJxGVKUxUcbXZMG9Dny8tpejnu25pPvxtSvZna662stPLJ9aMRss",
  "key5": "WoTpRMW8cNVF13o3VJj6Atd8kg4UwbEvqcfykURizigZkgWGbCoS7N5jz8gdywKv8cnNE77RyZYAiBf1RoCfEwG",
  "key6": "5nJJBqbvSkzXemxKBGDzhABRGAvcUcqiTW2meRjPax69yEihobDUnd7AEhDPEaYN4AL4dNZkJfMEiTHHmbwrzwDr",
  "key7": "549W5FNmWJ6zwiXTwyeVdwt8dHRY7XbZq5rDX7BTmEG7ntUjHY3NhbQ5R5WZmdivAeKuGnVVR2YsdxFKWkapxtdV",
  "key8": "kArcmKY9YRHERVsXxj6SgUvTbprkitAFGwDFJzunvXBt1xgnwiCLf7adqDZs9WEbmzvtG8W9YbvDqVNmkkP55tN",
  "key9": "3jEE4fuPUrXQkKnEsBiY1yZMADuEL1ty8Nips6ngYtQfPvPtKFePzhtzSy6Gjs2zhVuWEcK3mMuPdTzxhAehNbFu",
  "key10": "254h44fUTrXr3SDhPpviwj3cgyV95YyZ72ZQRBPG1ftUJ1mmSe7XUi4cvYbciKK2EpiQVteChks9t3cedkbSiqzY",
  "key11": "5xebicJUr6VUxnZxq4WQtbRZe2vDYiPM7nz6ZeqP9X1619Zh1orYwdt5Q831tXXXiviDWhhFDE7JUMDem6N6DDD2",
  "key12": "2AoG9d9MpDuTDWpRGbwTEThiNTUVLBPx6rNMReaF7h4JPysneBvAabiBtSgmb6EWCyJe1aEooLpcWSgaFGTFm5bU",
  "key13": "58bH1xyQhMyNQ6wjGaH4yutuVV9Vq5Gzj33rvbvDXyGyFbQx1WWFWLLM5kukMS5FhdT8yigfQhuduwULEkpTtHFk",
  "key14": "4nYd9mLYiKtrEeLvY7hFNZC4yGFDDg5U7X38ygK4a9jTAJsSxRZTFTASX6g4ZfdoGV7a2NF74BVc6CCqMtaZG6d1",
  "key15": "acxtmKyN8AWYsHs4h2h9CVY95R8VcdEknAMRhxehMKsg1SXGQx3RHnFnv5mzga5fNBsEzL33wc7Bkz6DPEaMpYk",
  "key16": "4MjwCG2TEBdoBWWZgW8qG7uQwirBRYMnCga1x7382Fd6k8FnRxHeN2sRxmfGx1SBV4SHFU2ZHd5HYD8WThD9T44o",
  "key17": "54wkbbTFxfogzgLsnY5cKvMuHAqAr2Qyv3N1DnseJC2XtGmpTt9H5cVSe5b49HBVXhgQkvYEnehuqQTWUcLd83L1",
  "key18": "5LUHnpTbAjf75WEGrGTbhr7VuzSSD7MKyFt3cPNDDxmYVZmTpdLnaicNAd722dnjr8dh5ZmfjChUbwVPQPCD6DWo",
  "key19": "4kZGdrnDpt4RJYoDeSDCJLEGRVqbdMHe33xdfpdihC5DnPtFNSahhYJj3WQsPaYGrejUAJmmY2zUz5cUkDzRmuJ3",
  "key20": "41BVMzYRiQ3fEwRhZiSbvdjjQqTvG2Eq2x4USGehfhTH2mgDLJeRLCTvVhYGn823gaK1T4LAnkKxUkErgM3BUC1H",
  "key21": "Wk4QXfryyoAGbi2vL7ZTWQLzCDouFv9BME2quMAoWeBhaBUSDQsX9AYd7fwfrUg3ykMXrYDKvEXoTKtq9zDL1tq",
  "key22": "2jVps6bzY2B1fn7AFjVqqgAcetpz3Nbj6GnEai2uBPwVoUhJKc9qJZ4q5ZL5U6WzvbA3KWJUHiPBmFXU7dXjTkdy",
  "key23": "4aU6RMK9QACveA6ys8vzYcc45mfanTZvsRKuz8BzyW3AaDMT5zpjMR1iZ5Yb1HW98mE2y6W9C55GeHdSELK8CHvy",
  "key24": "3kzXuhaCpUMZAZ3ECzqAh4dvGqePPEamLWftH8gdYsJrPfcYWXLijwfUjat4AycYABb1NSG7vFXNraYwAUJR1ko9",
  "key25": "367k9RCiQtw8bHHKMhiDQs5eGEbP4LvFkTBagYAmtP6hkN725ekN3smbVAUK2XZgffFmANBUtmhLXPWq6ghB3ErV",
  "key26": "3gmjHpxfUApc9Bm7uCwHBkmYKU7CwBrYx9Ws2ECCGen3e1ewKaWxabU7NXegK9cLM77s41qetyPaegTBaCAC1hkP",
  "key27": "4T8FfNFC9sTHzWsyWPvWMp6GDzTDt9GKB8dhguHpucyPXuuGYjwT79s3id2ZE45KbCncH4ncfVQ5sv3E6Vuwt8iA",
  "key28": "2U9gfLAEVKUex5zvK62Vie9uhd1VcJuvyC3VWV6kqAjGtS5VXrA3y1oXvwRxfwpyc3sb5XhSFtPsfVEonBtvhWR5",
  "key29": "FZsp3T5sNrpubEBZxzfJVW8uVTjigwphLGCHHwaxPYxJF3jvXHRj5FbGMPqFTgexjHv7m4SJBHC2xzJkPUeXezm",
  "key30": "2kz9JTsCmuoPtwxS9682kno7A9yfniETFMKRVfnGqReC9WR1JLd3U7W12ZPkPLaN2xvRSKyFfRp5SNCRVxj7fQur",
  "key31": "5whjr5K3xe2SXXNWUH5wGjUKrSb3eCRifgaRV7HQJE49YzgnHZvsb7MgY3hhJ76wuYPtZcBxWRp3KYinMPgYF2Ni",
  "key32": "6T6vNpNeEVnzJVRjuSY4A7t9rw1kw151Myt82scxWxwwgnhfjsgdHbpDH6Pq2bTtw8MiJhEpK97J7oXpizXzgdE",
  "key33": "2iKCyn31V7B5YzUDUX14XvKYAdRmJ2N4Tf48xGzobH1KLC6Wykeogveiod1is19nszwLBoFRD8JXjgVYnavp8XCL",
  "key34": "2ij5rRFboV8ZMEv3hM88B53kNQGnYumGHm9N6hqyohHWxC93RVX3SxuobETq6C5dCUgiZrHwX5Yfi2gbTZ9emyTo",
  "key35": "45jX8AZKeqoqTPcwEE8w1486AB6YGeJ324GP7ehMMwTo4U2YAADMqqWvQfWyUBMcC2FQ8jRRjtETYAkpHdndnnt7",
  "key36": "3WPZ6t7QXiRjS4EJw7uT245DDfgpDSgk6r7VoxHHxNaRWUjwPhCZaPdAuQN2zQJoucj37ZDSBX7AV6Qj6RmAuiRK",
  "key37": "5H9hfd2DL7wpheRKK3teS9uMzCsPZrAJdf68uYBjTGWajYn8edCpo3uaRSmFbiKzBGVrTf92pvy4ZgYeed1K8rKz",
  "key38": "49sTUAPC4n1YV2H3BxfhcuMuej7fkCJj4A5nbHY9MUDSZcGRuroFHb7FFNQK46x7EQUWjDeuzMpC4FYUxVT5rdF1",
  "key39": "3iVeX3n1bNgRDpVd1ST29yYyo7uuVTE3bqPDqe3douVbJZwWpp1bmVSmTSoRC6CuS1rE124qKaFXLREDGK6jEg1Q",
  "key40": "2Ro4Y2brVYjPNa7AgfiSnwRVM7GDAE79Li192bXSLgKXvJEWwdhR7cyjX7kSKmHWcc3hEsoaPNmaVU5fUxUSnW6m",
  "key41": "4nnW2QmRyN8TcxP3gFv6AsfddE1NeHZ7PG5A45F4AggRZSCcSZAjyFUK8dZU4BLjyMkmSSNvFra5i62mhokW5Hun",
  "key42": "2wMPvrLBUw2BfQiQCr54nXw8HY7K5euMaTT2RoLGi1XvmoNB4x99c5GTbZUck6KSueBEUgFU4N8aztrPgoTx91Z3",
  "key43": "35WEbXfk93eCfRLNeBnHjZctfRtYiNgAqRgY9RGRs6fMSWvT6WNAzu1ALp7ywzTWJmbG2PavEKaTVUHdjpu4Qp6R"
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
