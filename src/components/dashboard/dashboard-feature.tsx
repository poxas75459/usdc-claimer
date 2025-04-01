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
    "45A78amvAnQMMQ1uJTMkH75pePK3gV1PPASvT5YfGvrfVtRNVsRP7Hrg8U6zv1dSBctSSm4YVATz5XfWXMLt4ypP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4df6ksYK1454yf9kQ9mEcwdvwBy9faJoCQPKpGnSUQFTPUQU83iTSQPGt4UFeYyjv7eTWvptVsJ4h2jXExxpgCKb",
  "key1": "3WdewzSGh1aae227jtbLoftn1yHVD5Gg6rE77W4asDRq8xKMKVWHpMKxDQPeLimoeGgx9HapjaFX6mHWsRSXSyCw",
  "key2": "2mQdpQ3CUzi5REG5PXX2AWtjtAC6PPcH9bGwArPVS49TFR556jCfhxtWccMGUDD4zHXwVSgmzzMjDXFHGTmZHYDZ",
  "key3": "38aibX1hdXDtk2qPEbHg7sxo4EyATDUU4vVso9nt7jURe8LxKUWbZvM4wSq88aMhhhBvP7BC2KnRqzr3hsP7yMhf",
  "key4": "5aqaNqKQ83tkYQ6RayWHE2qU1zyeUiLtD68Wgb1im4AdHAiPBYYY4cehsPodWEcYGB9urjcsBPdirF1JP9nS3MXb",
  "key5": "4GTaJKKDiWrhgzdWRhZbUkGQ7BfQ74qajphRN2wAJxDmmCPgZ3oGbxn9BDY9H3K9CCpHEnsg43rvpx5VwkDkr4PK",
  "key6": "io2nFbZJceNPV5mm4Kw8yLk9GiFBabXVTEzrVmwGGVvucCufcg4rsA171HkVk417Abh2NFyALd7p4dseVJr1rHa",
  "key7": "g3iZYbKLJTAenrukhG2XsJT3p7agTJaHsEgwern3z8eCLCgYHxa2G7jEyjeeMkBg1HoC3LYGetuM1xPiMmRd4ep",
  "key8": "4YeVNBiS9HHVTeY53ZqCWRj4Rpcw8JsPxmGDQA9TGfCLeFj1uM2ccyQfaPc5by2L1LKJDNB99X7SD6L2xGCSReQj",
  "key9": "2sxXGC66fs2z6S2tLCgxKLH61EAu5WJ3qXfeVuiMryyqtTQVs9qJc1Fn7Brcz3GCpZ3J21ovS3Auu8XQ9pR8pvhY",
  "key10": "LKzF38i61nvgfGdan2YLRSSQyuU2ZW1xA9h8p15wE4XKmJFkhmmC8fK54eP7VT1kNEc1Sd6iWR6ByBkJZzEvYWZ",
  "key11": "5gKBb9oiX39PzrX2dFksVKEh4p7f8CAzLm25dwqZpDFf8mRStRvrnSeu1dDhVA7aPyaUu4WYmK4j27NoVrVS7Uo",
  "key12": "5LJ4eJToqK3YFjQULA46TNbNVddzGnciDruf8nFDEfq8NUmS88vWHW8hyaU9h96Ns6ofisu42taBna1SRk1FwwDR",
  "key13": "5mXW7nezoR6KassZedJnUvRg22GgYQTnwHuL9udf8jt1nG4VaBAwjPx4LLXnZgLoHL79TBg7fNSTaRqU1pHkKWPM",
  "key14": "3cKhqgWhvzg2ZUF6CXPFhByqdgtTeuZayQcdKBBeJbLZ6kRqvwVBeLriKmfKvHdaAL58T5HNNe5wyynLdYTDAV6z",
  "key15": "5FUcWkftRnccRBv8quhLJ5hX6KsnaMEpkt6p4cfmay3AfD3zXaFZwDMXB6eio854Q6PRmtAzSaiLzgMbD1exdb6p",
  "key16": "4uhZRZh8U5Lj7nXCRdXp9cpWdeRsP4tHzYV2kb4Lsu54RpVMuMEJHCnWM4rAMn3eMZU8LeraGADtQPeRGXtKAeLL",
  "key17": "5h3P7g65Z9nDhS3Xs2LUKx8sz8oMiMYeMGHoGAyRAHDFEAp8UQ2XnmzH9Ybw4wg8mHMcBc64ZywTgqycQeLZ9TnU",
  "key18": "23QDHbZ7xJD2msHpV2D5KpULFTMaKAQPiVXu67kKRLYEbx2ja5eTdmct3f7TGVzycqACBvrnisvkfRSibeoxN9Ph",
  "key19": "47cyRVk3YkKAZ3uCqNPJEmMfUNtKZ9MFcZ42B55V6GywTBMqziDq9SZuSeYqd3dLLmMMHpVsAdsVwP1bmvmA3GCc",
  "key20": "2fMkJtFbRvANKypEb6a8Vmkq3SkrGyDwq9G3F7t98PPC6tVen6BqBxKVfL6E3WMeXUQzyHVnrJWBTiGSpnbnKA8C",
  "key21": "34jitNJUoRugLj3BNtBH332R2upZcYkD4zTgRrPtZEJxiFYw5F6gYtw3Twhjdh3uHNjcc9Qwx56uNfTX8NwS4igh",
  "key22": "QqEkoigokgsxcT6E2XXN5wP1ZabStZSSWS9StXjjb4jxjyDuokwVky36J8he1SPjFG7E2Co6vF5ScK1U2eWNxxz",
  "key23": "2s8B1wWnFVjUN7xTgVeeFKrAtc5VkzYayJMPoXjchQH6Yy4T6FLhsMzMbNEuacPcSsmPRXDZmwgjZQP4VbyzfGgi",
  "key24": "21re5yu1aymMgHm3LAfBv8ubM1Mcf6tq9kpV45uaYYeJg2BLyZ4LtDDTnYEGw8iKe3mGUPqFqNZgQQNe1GvBVDaM",
  "key25": "4GzLBypVnCZQkNzajz5k7Vr3iEm2aiDpKrdpvzK3ZHomkXzR1ZX22jqGW6EQAfh1agas6UtdHhMWjN3cWra4wWrX",
  "key26": "436dchcrvqfQJ4tiyVaMPcoBv44MehC6dKyaJdiuHojQ7NvjaN9rsD8p8M87gvbMxdG7PTp4fL7RqYPhMGdF3yrp",
  "key27": "5WLuT3iH8bCHGbi6ZL5kiCjv6183gp1SkX9WjP91QCRwZXqAMwVn52njyTc1MQYXPtmt1Lpxe43SrCKghdzztfv8",
  "key28": "5vcoM3bzo7xn4ppThm2CGcD9HjpbRVgGvbYQCarQ6t4HGC7DrAVgNyiVHqCfeMYFAg4ZAZ1iSjgXSkDnEfpFZqAg",
  "key29": "5wJogLVtEqzsZvcb9K5HWjJF9F2wX1NAGVaVRWFqZyFWJFh7JAPoWkeV99qNeva61uLcMCcHL6TvWhQyJXrFggKM",
  "key30": "41btHrXr1UER4uLrNfQz4zdKeRnijNfCFD1bX63JUoTfxVEESzamCSTTPzhhw1rHsq3iQVW6eyAFGyD58SK5H8JZ",
  "key31": "2CchN2tNcHDVkoxxJrUb5wX7WtNWUFNrqdWGbWdQnz9np5SQG43kmxTvRM7NXSrN2Dgk7umsybw2pPqgtPD5pWvg"
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
