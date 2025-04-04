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
    "g3SGrHfJiBfYYwnyqjbV1hF8kNqvhjuntJXgYxMNWTpF5uMJRBCb1pKsih99WdLaWXrndbkW7hvhttHyu8xeDTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mF459WuMNLTAMc3nAVdpc1qrBZsQNdXdpP6wa6mpP5CZ3otdJPGWtqJT1ts1z5bmDpiFCoEUyBfqnapGtd38cd9",
  "key1": "hQDKV8pYeR5GYjPHCNvXvR8HKEZAca8K1nKXvHYWETcSkht2jtKkkwvDLb7vA1TW8nHJWw1BYyvmrcYsRXefH26",
  "key2": "4Vu9jqf3tmUDFMQBPdMnL6WFBXwrUuj2sjjNkAmcZGbscpiAcWynEdTh5LE2D8AuMnY7YjBE1yVoYFmwn9daiQSb",
  "key3": "4ifbEXLXBzsnGmnbYcoxk6rmbFzfLdW5f466n7modifxvo3wNiax3RRMNBZtVWYpHG4bHddVi23KdAjCHcDR7tRF",
  "key4": "65CApYyCC85W67qc45jFs2gHYSBC9X8P9U25i9YAzijv7ELa5YsPaTqwNnHUhcrdyisxzo3tSKgFqkS5RJV1thYM",
  "key5": "2etfo1DcDXxr8AHdfMwazSRSLJGcrNpnU8qYedo2iEwmVNVRNFhSkg8vTqTTjZ3wWKvyUrJpU3g727WkQVejLGXv",
  "key6": "aQzuJaFY217oD4diPy36JvkNA2UCHzExNNTfMpcjeBUmxxxNrK7AJiaFHty3ZEQDRpD9mv4AFZan5jYBA4nFox2",
  "key7": "12892aVQpCTaA2JrogGDmc62aQcTfhGJwE2Umw4JR9yfNvWtkWMGgL2pd2AevkuY9M7wQi5yA4TA9bwyCsqHekWt",
  "key8": "2NRQuTvzxCAN7ChdZxCgULve6uVGdDFqjjh4fMUSU55rT8FJkeXqqGL6ZftAR6QZgvrXx5zLyezGRSxgVX9RYCg3",
  "key9": "4Mwx5rvaCqh4K14uo6NmQ2A14gWKpzPYaLuGPn5BRXvJDhu5yR2VAm14Ls9NzxVYgcEr8Mko5pY7cbXH6asqnbXJ",
  "key10": "4wZShYnvHyeDnY7AepfzkgRDLwL8iGXnaD1zTSucY9hYfAWbXZWnJrZYiYadramVWuCngJ74KxBGPSxU5qXA6PHg",
  "key11": "41CAQfge4GpuXvoo9M96RPSdpTZwWo6SBJVD5vc1S2g6LjDL7XvW78wFEfjefmEYuZa7MwMvUMmuUxUywibiQ9N3",
  "key12": "56teSy9nB1qkfrEyVVM3XJg14qRMkZffroR1TsuXja8UzqnAvzXmdxQ5XR7aZcVGh8xF5bpZLeYiF3YEHCkNkLKE",
  "key13": "5VuwpcEnafGL8NYo2PsdF4Jh3RJjwfPJGJe1Es5XVZpgT7ZuudL6BTvBcJqncyifEJD7z3m3wPLEyNSs2LcUtbn9",
  "key14": "4ndoJ139RvieH5gfDLjHrKyroeM1L48SrN7W2XPWgzYiX7AP6U3PdvWymRmBFKxLgU4HBYFwfouqk7hCNPvBrB5i",
  "key15": "3d6BhSzokiN31SV9mMa97HSUXPjvgey5qMmqCNLchNt7JsvmKAnLwtYX7w69HzqFTM6tauAcDb6JTCMGt7nXqbPf",
  "key16": "3JwzkfkVzZzkymfxJS3uJUiAviDdiCxe8oW7gtHsKwzi1y3mKQ8Pd8LQmBctg7SECvRBcv49fnxFvoZeQzUCMCfD",
  "key17": "33JJprzNWBGfcSGiDTi1f5nx1QHHqR4KyF7oBVem6fjBZM7oSNtf2n4s4QLoUHFAweCaixHL5sf9gnZhsQNEAc8C",
  "key18": "2vL3twjSGPngknD4ZywS364Ea2wmau8SJHzR23rKXofH6bcrWJ7rWF3jFKhyMRScxwQCBjMAjcfvFTX42MCviwdk",
  "key19": "2ojY1rX2sS4AyLDY4dtiuxqtTgYHJ7eqAtaqo1hTjkxVnQMJ8eYXUBYCxTFz1pX686GVYLyMQVQzykqnxNThCRnE",
  "key20": "42dDyVdQzs1TTFbdLKJzSfmwXoBf4AFUR4S7vFxLxZZY2SJ3A5pEWPsZgfrRehYV3BRmLopjKLA3ziXV1jNHX9D8",
  "key21": "3yeKUm59i4cAKVNdLgZgRcAKFf4NUDanHqsjGjt2653ZqJLg5J2yKCvYNk8XaKdjA1t9kGckXdpbZg1okC6ZZw2i",
  "key22": "5PxEbZsTEiCm9MeBEjQzsxdskUH7qWFcGGQb72g36sNar7gghM2PzMz7woWnkMEXiwTBAfkMJGJfdMC6snY5jKqA",
  "key23": "5mZgw78r6ZwZaGvqSWKoApBTAvySUULwpLR3FP42oujBce59u83W2MVA1975D5XT42iN2RrfUpGPTcBuDig5Y9Wq",
  "key24": "5q9QoGot6GsniE82ooTc8nyZVsyxVm9VfCkLHckXC7mMZq9bDgUari8VLCT559pTwFGdtRcrBuEmorH6ThpqUuLb",
  "key25": "9oqFbY6uVHmLYTjSip22Nn6HDjxymp7gB329aXz2c3wFwJFYNS7ftzmWKK2a53ctUNHhg1ebvxWvBr3pgP7DnYm",
  "key26": "3cqprVZnciCHfW5UuL87DxcmzUW1X88m8ePoYefMaCb7ywdrtmTqLKk6ypeHvdMPN8a8qUnVfLCaLV6ZN8JUApW1",
  "key27": "5cNKh1XUr3xxxcAxGxQjuctnVG5HpDmdjkyWFKig6uAKooTQwoqTWbmeokGdKnvXy4qZ5EVnXaSUPZyvzVbMNfT8",
  "key28": "kb6d1hzntbbZSF2HZ7LqzQzk3pmH6VpGT63ytq7rbvpD5Aa4ddLqKTFvWJ7HRvZDNFqjhSHPkphyLwBSqsViahg",
  "key29": "4HW9hxiuxBmgHTdBCfXmc5yMQgHqy8qy3N2bJ4HEWff6ggjWCeMECuL2qNUxwRRF1BVYWNU2hrWjagMhrAbaXzSt",
  "key30": "oQ9WFmzXtgE3kTJsUd5g8a315SqtFgn74tqu8xEGd6sLoK4KcHCXg9PC2F1B7kcwKAbW3RdqXFja6ktXEFVzM3i",
  "key31": "g78v7yzcWhQevoxLP3yzQswNSJYH8Ruz1VCx92Fvg33zzSqPvt6rCNgwSWtVfCJyp1KXEz5DkgT4AZkWyaUmx3W",
  "key32": "3nDaLmgcuZ5nP5d5MCkaH4PvXerc8LjRz6ajEo1t93jxK1r9P7Ssa4p46WYyPw1ZFsJpx4PUANLQzC5sCmZE6Hw3",
  "key33": "HgG9iY8rwYAqAjgMGLU2YgzKHwRwzf1U83jEEA5q5i3YYDfMHMnuhicESXQpMSHaQoPCLdkhbrQQ5e25cX5cPNH",
  "key34": "5L8PPiKbrynKZewqG4PpfLKfrSSkakPBWaDAqn9su31TMPZQQPpGc2EB6XUWGxrytsiHdy3eNBPxjWJsrn67s2fV",
  "key35": "4JSqFV45ASYJZdrrS3oPGNQbvinYQB5fj6Ru3dwz6QHA8Qf9BHszMFtFNaKSq6kDN91KXaUkpPcgUTM33TLoP4iS"
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
