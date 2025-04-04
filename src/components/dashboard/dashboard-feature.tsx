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
    "5QNiS2CqaJDfmcar5aFRb8gFbi8LgSQi6T5iV7RZxVp3MFgB1cc1Yh4cm9mLGdvmx9LAHUfiihXZQHJENFJ5tFLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7qmHveMwWmrB14RyCxMtsi5xZBXeDwgotHktF1ALYPuLJbGt79MPeRpDxiYymQ6xWRR6PK7SRFqy7dSUAt7ds8",
  "key1": "32h4wEPuEknAFUwnpqBPmq53LV8oRxy9h2BAk2ZHPM7WKpUbTpYoHaxKSbCbe46m3WDkPA5avw7PMirbZoZYhK7t",
  "key2": "3RNtBQ7Y2Gs2nfcTHrTdDJmYPCA2ZsUeXca1PEbtcA88fvR8QDYuuPMaorfSc9ydeELQYtTmEXjYbRNtzMRMbciU",
  "key3": "2kCE8541uDTAvXLNLssUfLNyzXQ5ZZ6cBqNzBnNYwRP6nDixL2MwUHD6xAPjksStVgjosVBJrx8FHX3HoghCnCPz",
  "key4": "3MCWGmRxxm2renK3mhnSntBBzJt3FBbPPia8fxLmG5bxqWTa9MFrckiPctS9CwtLEMyz64QN38VgqMvfhgHaSaXv",
  "key5": "5D1Q7P4179mzF2fs7CaLWVTa7j6msTZGdQdw4KfN25MhjsvfhQhqN5LvZamwJagEzD2dDcbPq2qkR8eeiDqbTKyj",
  "key6": "3FPvjb7kMwPVBC5Xp9rpfdm8zWQvdPMhFpHJ8jQ4mzJhE7BcAdPkfjB2RRfAaMz6ygDiPXKZcq3a1hEsr8VvbJpA",
  "key7": "2xHUK1QufqdRvpky5QYMZyreZLfEfnfjC8iAR5VT2oqBjSPsTzGc5FQSrrpBeg7G5rwDCKvQi2NZCfPMszmyhU1K",
  "key8": "5UBF4B9qkoBPD82cmwu42UuF73dVf1ppbaD9AwoKcZ1v3wwLY9LSu39zjZnr9pPbHLcN1jsTGMMNFnLtSzPigTvH",
  "key9": "3EVH7GthCmv5GcWRjuU6hUwuX7Cir9Nd74KBUkPrdeDSYb7ek8JLjtg99nyWVw68h1cxpoDgPiETs1ttCpdX3Qsc",
  "key10": "25641M7Dz4hLyUfBYxVCVyYXtLovrEAw7gpiWzzCB1FFFtRAKcHw7cqPJM18aD1eE1WjXtR1si5ftQDjyBoYoVH8",
  "key11": "rpcGvMcw6ZDPupZPFnMJTihCuqxutQFnbN15B1JhrjB96ziZWQX1kgdQW7DPcCYGz5xouDw9vHEZDk3K1eiiVL3",
  "key12": "TgdXvStAuT2pbXx5T6Nvmh7wKjhCK3YeZLMW65DT7DJiN75gwuKd4kjYYj8RpyK79zCpXor29YfMkoPASQQXtud",
  "key13": "24Uj8znB13ojHoUp3ouMrB4Hs8vsnXvQXCnaAnwa57MrPi29R8a2Sk6msznZhBYGH7j9Jr9UU7tcEpzf4WQqzymk",
  "key14": "5j7AhzqoUZcKugyHf6jxoY3k4Qm85VTzZegMendnz262K8cqKeonSuX9bMB7fQZbkbYG5oJDVcoymVy2ghJVTgJs",
  "key15": "ZibvALnj3CvZjBek47feWzecWFYYWFoDARcpesUQb3wD8C65Nxo7wedC1AMrKWaVTgUWr55Nkq2F8Q9NLZP1g7z",
  "key16": "5x7AFR6o6xxRejsKbpTiRALsLJDqQVpihwwexSZrdLBc8xRWWqp3rajW6968wY7Q5bmboFvYqc43mwanpiYLZckY",
  "key17": "AaiB27m6PFeby4HTZHem4iGEntDkvHEBqn4nTf9Y5nr4TL1kCMrTC2FUBzVfpP5FCnCXJNuMq4mUmxvaaCmfyMp",
  "key18": "4oXMtRHnyAu681QyqeJDLmm688sdYQUeDC8vzQ3BUpAAzPUBKAiBvkBGd7AbVCSsYwgjCPtv7iPExaa1NbeUxat6",
  "key19": "5CApTYLjBwXwRawQvtWt4KJMWwj4kvoABxyAxSNdGDR3KhJ7YRDyZAAL2oM9vBjR9ha8d9ZAAoQP81mqquCa9pfM",
  "key20": "5SFExKc79SV2KQH6oskT3kk2TZ1AgeYrTF4zSRTihXNN5oNmxeuANkZMNu4oN7J21Ktze9tyBUedttUKRUYAnaCM",
  "key21": "ePHJJ3FELdXR8B3LYNTWsk41MkvHt8QG2bF8Ncn4a1T8A5wLuV8iGxZG9fY2jWgE1TX87U64ZuvUMUZ5pGQYFkJ",
  "key22": "3j8Lb89D5AWN2mCk43LWAp5zP4PGvyefKR7D4nbZmzGVdu2pACw5gKwezVisPGtpQwW2ijrGPWqmHQhKVGftpj8h",
  "key23": "21rG6CitUtVuu5JDjUY86ZyNKcJQixGyms4owYQeJDmzYcHxFk2Q5G4yenf4GHPoEVNQFXUgHE8n68JFpi3yWjt2",
  "key24": "5xfNUxBbD9YLTY2YG4ie8XXsy8iaQVR7eEBbdWtgy4r85d2emSXTuMJXM9JWF3MzT2TYZBX9yFtusx1SdMeysndr",
  "key25": "2qQhSsk58W5dGXJ8jSzpL6ybeUrSK8sRtkCoCShUmzbygBdaSciwiVFksPCoC4q6x9EhwzrpZy9A85qdXkeNm1C9",
  "key26": "9UJFpowfN3eryAwuEeQEsnaHCeE9BDAQQmh3uwaUrNWx9JJZh5pnMfkmpqSKD9XwXoBo6r1jvT3kKGxtm8Q3cYx",
  "key27": "366yNgFikAT5atg2iEodHHZPGsiyWbEmULmMurPCaWKjjCDufQ4ko3gcSBBcRPqqGLha5pjiC65Jkgm2sGYoswib",
  "key28": "Y7FQJFYZCDShGUmBzPrDiMbTbaTsgMiYV4Lp3ZpSfE8q5TJ5JfCG99kyvehCj5Hx2nofe2rM4GzHCsa2mAPnBjw",
  "key29": "3FJN3QGQXP6TRbgsFfjiV7W8JyTz5JAZ5i4tWBhHuaZPgxkniofndBYYQDWjMcZ54thNU41QZ5hcoscQGy5q8aG9",
  "key30": "DY31d1PF882GbqP4sfGuPjrRYdbo9AUxRZxLhf8J4ZhKYL2zPtxMCu9uF2bC45ZhznRoDK6tLkxeAkbNPmj8B8n",
  "key31": "Eo9xVdhF92xGjKqLFcoD24UcKhvockjS8NipBi78aUYUiS5WKfcpm3ooJM34ot9pbZHqWpDXDvjXyjM3gcHCKZu",
  "key32": "23E3VbHqEXgqVun5KxMi4Lz6DaumTcyXSFGJdHiU3Gfa1EtXGBDxaGUeW1qumr5ANKEYpr3hTudxou9j78sxMWos",
  "key33": "5zaR7sZnn3QTRzhCVv5WiZRe7dnUUZqPR1qAJ9H8C7KaJd7ZP1cyot9U9fhWi4de3e3qavkXDtNmwXiAZ59otytM",
  "key34": "kcJ3mgSzJcRPBauqGTHXeTLCgfmM16k6g4nWErNeiqdeDgpEc4Apqs5xZo8FrW2HwN3jYgoY8UFhQHrUwYqEpiY",
  "key35": "jsQzcm2zYV3mvtNLdT5VAnmnABDvYZkehc489HQec5y4UgNMwc1Pmf7MpjuAa5i8fpucRCrakfbE3XnzG1Aui8u",
  "key36": "3fQbKapLuxXzrMLGSqmFhyJtNK9UKCcdNPTvLbrXYCnooU5vDDkP6yeZR7J5DFAi8BhBWx74jPGXeN2r75sAmt14",
  "key37": "41dbeHgH5cXFgzhKF8j5J832Yhv1V4UNwPFAtZyfRvQHZBx6KoqB3vVcoRqCTEBoKHh4mGpioJAqxEL2J675K5XF"
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
