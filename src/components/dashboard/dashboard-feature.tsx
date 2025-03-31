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
    "3yXF2gJxtNuHKUdNAUgT27HBzNpj9VqfgZhR1dyQ6PxWz5MZhqMLqMvGXTedScu6URBfUvtCWVYbeEZG9qSLVtFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yLCroh7FQAWk5qcHLQSeH7Ez7jLSvwUQg9ZTrX9W71gb99hsqRYVUN1vBjjHGX3yFoCnFdedK5qM8McxF1pDqjP",
  "key1": "3GmoQpK7bewKar9iCGkij3ft4dobRyDpDQAv31HaAvjH7tygUnqL89bVDH73maf34rqDFLojJBGgDsumER9v2Huy",
  "key2": "5uT4vXnmsaKsEVdT7ygyHe7sFYf5fHdJLTpPXC1RyPhGGwGqFksuLLRHqc9EaqYRkoNyMoJ4V6KRseRb36c6fLW3",
  "key3": "o4jTWJ4LVVWGSWoD2Uc2eZ9QAduy3WumhFPWYVNW3NuapjsmgPLr89JLon4PgAtU7MoRTy5w8VQU5LbUmLbjHBw",
  "key4": "2QS4CgDkPiobarxPsH2q3ZFzA6piurSfXGFRE4wsmfZRSRMcA44eWZG1HYvaPJ55MnJXRzsE1bGMUpXYY5XGz7b5",
  "key5": "3iq6tUxdu8WeARP2KSFPLCQpFakLBPYDzJL8E2U1djSW6kZaXuvDK7fmtgdXdpScAi5LjkZ2iFPVjfCbfoprJhqR",
  "key6": "5bUHzqr9BXnthwZbcz8B6zPCZMYjkSgypgPVanqpVadZuyrrAXSa63yeLxsJcah4Hb7FqpyGhsQsJMRKhRrE9r7S",
  "key7": "2GafhGE8xhBves11t8u4Jfvz9BjjTsEFD87XKRmw1yUXgtq3AdF9h4WEoj5dnMbdZVTx8hrTWdcYfhPTauDfPYGS",
  "key8": "5cKU5muij6QXTQfhCGVsZVXnndNk5GDVEUhuJi7Tv62ysC3LJ8ULggsfkBkgQ1yF99E1uQzokZ7mw4Y4ACeKZnjm",
  "key9": "12A6EqNqpgiRjQifwWzfsTVLUt46HF8wawhvzwhrgBxRpMCVuMALc6JKaRqgh4o3yHTUB3UBoHFanc7ADezGLuep",
  "key10": "2TKz14kAYxyk37N21BsqHYKmqpxkMmtsDEDGhSiGtsxx8MQPAYYpoeHX9oSAheGT32r4TvxsaMGs5EG8S5N3UCHf",
  "key11": "2Vy3ngccMGWo9thrW66Q6ZDKQ7gMHDS6B2Tjqm14apq5LHMAYnLVmS7uMJBS1j8hjzH81Q6WtAZcSfb1UjPGrEvS",
  "key12": "2KDLDHTX5trbRDx5fSr8vg4kjRMCW1MJ3M99YSgDtpgXFhWSjK385i8xVGd5myEZyWAkN349URBjioCbjp56HLG8",
  "key13": "EgZtVkZRzshZNrqvfGWypyJAXWF9NAjq3ngATwr3uGCrSp1cuBoAWUuBpFnFcgnSndV8QyazBhbuG4FMP48hZUz",
  "key14": "5YWnXSHEHSVBrfzWCXreBhXMJJj84kFCSRQ49AZG9jS5sNsKFY97B4ddVLTwTBiGEhaJG1R1pBTvk9ugbLydGQ1Z",
  "key15": "43KwBBD85fHZWdZVnK7bvMokddwzHbJw3DeYF8JYZw9k7Sf9kikozQmbeAGcUTj3Q9NDFn9gmGmcKwRGsJCgbf6z",
  "key16": "4EuTW5Xa7NtoiVZ3jsRyG9tNA8NRPw2snP7yTEW8ABP9ZjmbiWbwm3zZSS4H9yM4fJHxwLKbR16ygcPau56yoPUW",
  "key17": "4kUdwZK4smv3QMDT3hoeSuLyUYH1ojQ99CpLG4JPNsApdDLTnm7EsZu968T4dfTXgxEnNDsNhAajyG3GB4dzE9vf",
  "key18": "4PqJdiXnsuomUYEmHEMhRYDjd13TpGdxQ8qeP1gU27cXE674NYqsnw4RRXDhgLJvwZtKF5KDKe7bBbDT6kztdaAL",
  "key19": "XNqQnmsS1NSeVdwZmM7pYHeyY6ToXGYuPeHN8sPgAHpJNCnFnbViJw4m4XcQ3pdUNSfdPKrRn3UVvkmnSj2kMmA",
  "key20": "g5vBpmzPX3REu6SnXkG9fu6xNsnVzM99Ca152qZBz965x51Djt2dCzB4MNmsQgmn1kx3HLoUgbGkhfMWpV81gbx",
  "key21": "5fDKb5edaQtjXpuobyP96UZpmGaHNnJR29k2A33euoSHTzBksrKS9V36fnfSSAuoWDQVWL4uEhBxh3TktxuxbjFm",
  "key22": "5QHdJFgvQexT6Ujr5nXTEZmdBBUQ1tztvmpmzcUu5CpT4NcgSHvyj1K2WE5QTvbxsHNiRXmHqn7zJbPQzAFGX7dA",
  "key23": "5TPc977jNbxkcjbEfPg24WSLpe2Q3xt53tPZjw3FoiYktHCcLSLBMRYNrCEkE49b2DQGtAMwTa15DZexUrLFFcJM",
  "key24": "E4vpRZfFT2oLnLkyjjEZHjviAugVL5ZXpQNc1zdffawr7uj3ZXMDVJEfg4resPrrzPodahmEnnqWDbJcDdCJPPP",
  "key25": "2Yn8nLMM2Hkj8aTjCwvASuBsLKgRXMy3oBgDC75S9SCViyu21PPDHUsaxZ1v5u71mz3vQba9TkTJmnvG76UPFjbC",
  "key26": "4PJZvUuMBr2AN2eYYDFvHqBaiDmLKyAogJVHT4rfN7ej71WuYpoQDGyrXDp5kYkWYd3BU5aTa8NPMMHPjUQ2LaR4",
  "key27": "3jpCnRi7mJUd7XWuWcCbewmWjNVLV9TmKGXXK9CrCZZ1CoD1iiSsRRvyKkbdMN8Uz4HsET8RVXVxrT8iNuz7DC58",
  "key28": "2SFXBS28HTPsec6T9Po1R3NXMZhvUCMSC3TVGgUYtjvUxcivxmY1g7NCP1v3mQp7wFHmrseN9UbmGBBr2cUZDPvW",
  "key29": "49oAv4yJ8i3hqFCWCoUHZuEqkxCx3jWwN6H5NjrSBWmWZH8UMeKZmys532zQqoCmYh3PhJBEg3BoSHWSaYhwceR6",
  "key30": "4tnSpF1w8eeBGYaTcGDxTfi8qc2Ds1tdAzPQGyV1rN739FahXre4qiSVNZbhZKA4ELanrphAKvD8WQgqHdzinnZ5",
  "key31": "4Vxs5GfRVttN6dSKbg38VLphXg3AEjSBhPSugUMUcNrpSYdEq1NxuA2ijKcQwT2GgL5WRfKUauo2998kJk44dqEf",
  "key32": "5AeqHDmoyYncYVrVbfPE1ykicuEhS3BAQV7X9fUpC7YkHLc2NRqWvSYJ162TNiWr3Cx29qCKLFEzsXJL5gerJWU3",
  "key33": "2JynY8gh9Z58FMjEcs56UjBj1MZqL2Vt6RnQxWG4Kw8eiyzZdKW3WSRdVAQbtcG7DEwYQjb2GW6cdDoPtC5ubhuD",
  "key34": "csyPaorQmcsLNGBpPrQpvhneHYyxQi2xQVFQubkLEuj9Sa3vMU5H9B9r9YRRrCLX3Vy1cCpZ9sh9aQv4iNorJqD"
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
