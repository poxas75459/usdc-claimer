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
    "3woj88g2pkEgVvxHDoM3cZZJC4v52gnuNjti8khe8zkEvndu57uhrJr3CN8vAEV5p9mCkUVPKvPRRuANxeSCDx4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bNMo2uCoHngcE1vJSaSS6Hb3ztkAbBTjyrv3wCPoZE63tk1mx8v9VC2XTYQ2R7pM6tBuosEVMRH41jbf6n7uPNs",
  "key1": "tJbZezsHo9MjCZsnjDLoNZCzGUmyc9ztt2s7fRUQZrcNswT1knGRtDFr9wUwa4Zg1Kmo6j5vmu38naCi4X512R9",
  "key2": "5JBiGdq6kvGMFZrH2xj7zdXAaiVGYwNDt34uJGcNRhwHHQDWFT39K7ukW9GNwwXBYienSXdDRms9pRh4J6GJ7Bi1",
  "key3": "2FJSj52sysQaDjDqSvDhQyjh8SHpuFydg9ptNRDQicYowQNBLoD3ThVdZUp1zXDRCCPBwKDJLq4br25zQU1gTDa8",
  "key4": "57reBJFNmDmTY5VcZiHmhyhtd7kYUsdakFq9EvjatcqkiF5sHN66Ei6hViSHpstpdibvaxfk5XWLLYFNsGS2f4gG",
  "key5": "57fnoXhg2Wg3nVoFT8J1qhU3XrgWbzhKx3L5DFNUpYrLbdsB6NZTDufJtMVBrwMR2zdNh7obZ6UXDNr9oT9qiC7V",
  "key6": "3pcpeD9FiRgWhQqBsP9MwFzAhQDNjR2PkAyuv2fbiWDiQv3fbjfyek3ru7SDzj9EdmYmGJyLTfKpwLacheAiSxN9",
  "key7": "5J7AWinst5eNWMAUfZsdfULT4YJSay7Pjfg8aApaFjkQxVvHVtTarCX59AGQSs33fe6b8otnRxKQdbC4SyiLMEoz",
  "key8": "58haz1XXGyvgSAxn18jp7haZHuEnkoPhVx3E3hqX3vkaWZuSN94KCVLQs6xmJHEPTMGeRzKxW3qTnfmhZvFRHEoG",
  "key9": "5Ym1TR7UspajMK21AuDhEdULeJeso3jGksyneWVgMetEMU6ffxH37PMnpLZRjBx2H7iLRrY1F2V7WQiUgXt2gnjz",
  "key10": "sqeCDs12VuUDECTBT6yAofYkQRfgbSq6T5pi4FjR7P63H46hoWQAZ2wHh1CxQZcs9TR83uDfpS6QYHwJE2BHR34",
  "key11": "FPyRZwBbWF3NMYodZcMsd3koWhScVxg771YAFT5r5yohcTfBhukQWPV2cLUH469SEKj4KyDkK7WVJxfvS5ippKF",
  "key12": "368DRXmuwRagbxMyF6McqS6uc6m1grHVLtX58aULq4Hnke7WSFzRpQHgntSLw9hRgLxUM6YsNUQpHBvYoLjysfrP",
  "key13": "iffMfiu3f7Prr3aWyYmsQaSLMT7FarAvRnyaK6kEzPGc8pVNWM7MoCecaYkJcbyUvBBCk4aQUVLRwe2Ah8jUVGP",
  "key14": "5NoMkVSrSCzr6DKfaUyF64vkXjSoea1L552Uu3sYBhW9Tiw8QrpTPwfEESU6VuqNAnkCEHx1VDHP9hmLkmazHLf",
  "key15": "64ToDEqAVtveYyTasqCRhTSqdU7obo1hL3PQ2NQ9p7AFcyRzGnq8xsjLHPd1GLXYZhzCoc1xDtfFu5h2whywdNE4",
  "key16": "vckwNaezR4qGBp8uGQZdbu8yN21kTNnKmdmEGFJiHtRvHCFSvpxK7BtHpVNUFGTQwLv9sjvUDkMq88w8PrePSA6",
  "key17": "5tuTBMVPQmzdGYDcY6PvgREJdc6sisVvmKZEt5BDUdN7BWpHgSvgHbMZ7o7so5r9Voesq5QVT1cytww9YMTUFzvr",
  "key18": "eaDVhtarcjRr6JRFzHLB2A1duiNpR64C8DULHjbRHwX6wuMsr72KxYGLuczFiNkqdFX4eRq1DtJXrdZ5yW5k1mh",
  "key19": "3pjbryPQvJCmn8dPecHAbxTTHPuXN44dC7yF17GT1bxXwCZwUeh1UQmzXM9YanShtcyWj6PB3Gm2hoCwN3RpeaMi",
  "key20": "2fw5bAu1w28bYqeX4RUQzWttfgECB5n7tAmowXi6p4hy5uMhQaxfUGNb1nQq1pq1zm5U9Jw3PGfnhbgDfsp6sSJM",
  "key21": "3vHFunthaJD4qr7depR1uAxEH1Sx1bvSBtEuoGzBrk39UxaNtXE8G4zLN56a76KAY1WLiLg39rAVhnCfisJTn974",
  "key22": "4hnQDsr9S6khovhetYKEGzqje9Lu2f32moT9fcArPopu3EyPAfevqcnzaTG92tboiTwWwPLzX87yWrZR2KUvjkEC",
  "key23": "25DyoMPaAGqaQV72CrrsXsi8ZhmCaDv5HsGQpyQ1qDqXHS4bHUkCZQQYiE47XAGsbaXkAdu4mFVLKXRhqzGo2p3n",
  "key24": "3oM16sbaHxUZtFmTk1ZU8CwLNkpQcojrVrXi752gzQaxLZzgBTFEFvavLiieybHoxiXB412D9tpfNkEtewbwKcyE",
  "key25": "5uhRxCph2wNZzPVZWm59uNYWyQaeWRA98oUWiTGAeFMpEb7K6jSNV7HyDCwALjCxbVRHPL7GK6LSXfnsEkRZsmns",
  "key26": "58DU9omdjqXRXuSRZEBYAVo9NgDLHzWDXcibneTK5axfCq2t582vUHWVwNMbgegCToywh6eU3cPwSP54HNc3FGF3",
  "key27": "2kuDVV1QVF55eoL2oW4TRtSSk5gVqSYKHpx96c42XgR1CgM5MW2bWTR8DetQhDGGrKcVUkqfvi7UVh7XC6VEH5mL",
  "key28": "cVXnxsba54iuAdfnwjpXgRcGtUFTTVqfoV2Y8M1U5UhEoCyjJxk1X1kBJid1NF53PBb8ZDXaRSPeun54zRnF5LB",
  "key29": "pcge9fVmaNCrStBJjfJALvjPW9NvsPVv6v8BCqCRb3bDaKh5QizYiN5fQJTcBqMJJ5iVThxCz98m5pPLNdx5YP1",
  "key30": "4219cVtrVn8UvLLKaMLdaeYU4t57GEpRAsLfQsCag9frhHGtjK3dpLxWExjecTcktzHvRec6R51cs4WexreFxmdf",
  "key31": "3nADaSiFW3Uqy8iga9QhkKpaKgUL71AES1zbGk5A4dgvSByqvGP4JDW9ytiudTyw456Jw7H4fwhtNDwooRcYGBPK",
  "key32": "4mCEw14DAwmb1N1SHSPtKo2AXDo1PwREcJgVUFsP1XTPYDnmpX47SAdDBB1L9UWmyLiSGCetBy1hxBJ7erKhJZ3W",
  "key33": "5Gn1zXHrL62PSsacSo5DEJMnFYAaxxnJwQS65hTzKTMkXgDkuKEnhEycs23TzAyWrragKs6UTW42xnZS7mAJbHSr",
  "key34": "2gqYubYy7iP6cK4115QkZ4ZVXMcbmQWMbe2guu8Ha5uK1KgtFXQ1nMetprN58WZLjP26MbSWW4i7qtpALF8SfZd3",
  "key35": "35GVECPz1QhonEuKPsYvw5s1VDsdhgPDdGP41PMAW5ZtYsj6RJH2xG2ZroaD4Nv69gXLnrFTyCVYmC9u1KtSYLva",
  "key36": "4maXwUzDywPNEMQ7cRCRoi8aw7jH8HL65niLBuPQXE81FvBEZ9x42T6J8mVvJQXApHB3Y6oRwrUzFF1MRPoQauAH",
  "key37": "5YT5ma9cEN8ZY8uM8ki1JwuWyd7VshkKAAAxcYKtjZTUCRYr7A59QG5bBFcy2tsmZDzVVPCT89mCFjQ1otgcnPtV",
  "key38": "52LVDJfMH5fnmwhFx9j1YhszMqEkEAda7GWwr1netLkLtwm87wPh1zVt2bhNFKsNdTwxB9kHwV9y7D5U7dUXj3JX",
  "key39": "5LGuhcWBpWBAYxQ91FetLiXkC6z26yjDRtHYxZKc1nWkEXvzrdiy3DWnxSZLEg3C5ye8wJGe3E6RbQdf9jo7JXup",
  "key40": "2vUvVDFBfStDSM1M4pfhc5FfgfdDBNtXE8Qw1M6gUJKSviqgDS5ifDYEgyEfpsPsct7oCv1RNNvrsJ7ECbPoGTtX",
  "key41": "2qZ1aaZ2eXbjiV4PUSarbrNq9TNMQsm2joXPDzMCejMQQx1Kn2rr5pWojaA6yooMtjuM5AQZF4E7FgYsqmSWnJDe",
  "key42": "3mBK2pHA3K54BQm4e9mEoBVSYEsZMMBzMRKQjq6TWFP9qEnrrYBFT3s1aUDcfHP6SrMM4iFyqAWkB1R15YSCPtfD",
  "key43": "4ST8B3b183oPsPJXxFhbitAetbAoepgc2oFPE4c3w8Tc6QuRgB3aQr69gpSBpjVGowV9J9JtTjdbD8dZTkrtq9Gi",
  "key44": "4gFJ8UacC81waiM7ZqaWxfqpCFZq5o7muuCaeh5TL9LxSzUYGCrZDuHead9zzPax42bQNQawTxN3nH3wtsh1paty",
  "key45": "4eeR3Bj6qJHSeifuNc6ahb1Xp8RWPnAsTNRSdhVEDL86DaDMU3oRw6Z3hUTiqjemHwAXvXhs83LFYvyPQHZ4bXQS",
  "key46": "33W4MzQEJGe2DPvTQuZ5HASro8Cy6dSSFB6XQgN3zwTeUv9JtpVBxbojgckCnjkKoMEA1AuwjRfsM3CSEL235bP1",
  "key47": "2LVFWjbnCfzFPyzwVbVg71G6c1q8pkGgZVKgFzEDJxZxaRGWFSY2ycEyFopLatSMeTYG8kk3ZQ2rBfzf6urqXMSB",
  "key48": "7UApn1RBCBzaLzpyUiWbgmAJHvhE1hH8ZETfoAYuCvuXT21VXyYfHUKXzoLfcfAmN7rcVwU8hroFhwFU6Y12J1w",
  "key49": "5VZFws4ni2e4yiCbXqRQn2XJhZoesXAf7WjfYBURLdz29UatNbJkHLJ7AHJs6yVQgCSP8k5cKXYNKCURNEpionBm"
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
