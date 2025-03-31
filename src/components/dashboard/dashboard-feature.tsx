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
    "3tpzNvLa1aYMuwjGfbuPFFkVJbyet7bcL55qzpM7SvgYKSH6gNcA6HKDxeVUjzgAo2oWmNFAZNMSrXgUKF8rVVcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "14HPochsjsPpFnrvPUABzE91vKHZMvx46YaJo3DjJJAr4gXQByyT5wW6ZFntumMWM31GaEreAXcapMrPnaEp4QU",
  "key1": "3qVXodA4bmk6Hj4prjNTDBbyRMt5DEY2vyy9dbUQou6LvqQ6Cco2N9HWnenyBeiT2yJWKosm7GxSULa1ebQ5UV3p",
  "key2": "5x4nut1RKXX9zXRHFBKhZ1W6XS8SnxdA7Lg8wGCxFC6kVyEY4NBujzzEfBUsRh1mHCRbtS8geS9w5ur5uR97WC2f",
  "key3": "xhB22FxJLJZi1MNgWwueZe7J6WSAizZfZwMr3SYFXLDHyMosDB5V5iECbChBWueDYSsHtWB8ZVL7bmx2GQNuDD9",
  "key4": "3fMvUnKsFZStQyZC6g8RYAZZjeMhjwaTD3VhZudNo9HPwiPAKdPwpmDCywEWBwjcyJnjeSkVXGpPgVtzgYbm3kUT",
  "key5": "4bhuc4BtegkgvkV1Er84PMvXnufiSkQ63cwx8K1hiWzSqVcb1TacCsSCDdHVzsoGVk5BjYHwmSvYYF8hp79P4Fd7",
  "key6": "3MMiCBhn3xnixyEFmueNVyB6aaLdPDyfqK5PmMdYTg9dGNWQE46sve2P6o9r1DxnoWGEii9UHyVYKnpsvVHameSw",
  "key7": "511ZHZgT4Cq7M4gEnvKUbm7Q3U4Unz8oWKLtcwpfgN6fmrGU6kj6jop7tCPeYt2PwFwYG7u8vLKEQv1D7VyS8z7T",
  "key8": "3MJSzt6KE5mczmDt2wzJCRxbKENuA6NiHTHmKegNpZsFMnXXJqhJf1AdsMhTfiqJLmNPnmuvZYHT6pU1PAoNCZ84",
  "key9": "3G11VUMw66CuGFR6o2NbiQ2vR8c2TvFixsxLs8P3xyAGb7Ek4NNZtZtPPikGa5wxcdBUx4XSzpSVNngU2BXvgeNs",
  "key10": "5v3nYcpui3EngjaHTpVN47ZK8nzrkaNaSV23nN2pceHEqq7h8G6Bi73TwToLe3XNke6XpBbzmzHfTSSVyN1d1X6s",
  "key11": "3Dxcg8bM8ikCcte7bh6DvHYWgxdkXnAueoo2Su2qhdZNxbMu6qFpikxZ29JMxLhQKjbSAfgiNWoWXEj91GhEGgjP",
  "key12": "4W7pn9Gr1oALUZbw4WH72MRJLQVHjixX9UnMK3AC6bo1kFA8oSEmm4iZ65rwff4Ahisr128J9xqpBA7fztzjEanZ",
  "key13": "2x9L7uHKLWrbnMYnkM8p7L5f3mAYeoGNrNsyaQRnL1sKr6EdJ3dxddykWx7yHDifq2oVKCXhy6f7vve9ovj2SXQt",
  "key14": "4zyAhqe8qwtTErAHmqV3RPxh3ufSB2XN6kbhqqE1z1DibxL1LspBSoiG2wK1EeHTTKeBbRLUaMSyTxhBjXRoSJpN",
  "key15": "3dvkhLetMSFX55Q9Jc59Lgb7jqMWd22SEKmTGCiM4AmcZnbhNZKBRXPrxv4gGJM3xWsfo2HX3RwonaX7YX6wxqax",
  "key16": "5wrndghHQjPaksVhx3xMS8TXK1pz9MZr2bB6CBYGfrZSEHEXTQoqge9GwkfzVZZNhEbgMNHSwLCcjgK7u3xTKegc",
  "key17": "vpTgaEWaH5QLMsSx6fHJwvJcXJ3cYK61Pyj6FzYChcMW9t7fMUnWzGaW3YWjLZEharqVbSWaor6yCxzayhbGFZN",
  "key18": "2RFbtd1fwYjk8VqCXnhkFm3sNT7nnLFerBtTdAhZVw5nP8bjjcGK4rdf6LuPcAgHUSgrKympx5f5NNDGCreyGKkM",
  "key19": "4sT8nzqMpUpk5eCfLYTcPnRE2vxGzJjUwzaaZUtXFJhzgjZRd3VLx7RMbfg4FesBb7DPtuEwvSta9qZAfXLG8bZm",
  "key20": "5pNb1nmxbZw1qZNtYDBi1w7bRWEzrtbH3EkvQAFZZpGKyNqga56gqtmJMqKGDsM9hVtfbf7Tcj4SyGja6aQyMVeh",
  "key21": "53C35vQKwKLCjgrxnWqnGMcffjuyXDVcmCPkNMiYPBANq9hrZTHE7KmnB57G1Ko9dnkVBYdLrxxP2xi8t1dtZadY",
  "key22": "4fyHjuZC1pxSkiSJqEbPZ84esaKLrTNFZiFcQRCba3AUotjjejq3qUQkykYuw7uqHrkkT9YY48zAwwUZhMHHW9Jn",
  "key23": "2FeMCHBJ6iMasnxJGjN5Z8ctAquaPXuK1HT3EGmbKQtXGQ638wBsD6J8zcDGi8AbdytVibd74A2vL2mNy6HHrP3X",
  "key24": "4LcngT5mzv6L5FKk4DzSkWrfjmv7fYt1PdqZVkEvsGRvVhbbzsv2UnwPpPP3jjEFVUoWCpS9u98DLokRh8sXfva7",
  "key25": "5hayXznWmf4i5gB5JdqVp7kYcjZxJURtUEbNV7u146jU8QbrSTuqwTSyo3g3wfKuM5Af9eM9Awncw5NqsGN7gZth",
  "key26": "34B39nKTE1v3GdMjcxMwgA1yaXiJHJttgbTrnVjdHK9ZTyai2FfSZEYACJNfJFpdNk3a1E2N9ypqzMBJHJ1ZjTd8",
  "key27": "5jWPcBX2JyNR112WkNfvFCYiYe6yXuYKzembF6nQWJk5mcm3M3FgD8LyNejF8HeYCdp9z8V42PGPrGDzr6KWQN1i",
  "key28": "bKeRYnNxyy7MbiQDkbmiX5JPnKsafwZJEBsD5M7mgRfdJoFkQWwwxaTBvNtJdqZvCG1ks7Z4JBsxBRjBJAY1Hvx",
  "key29": "eK7TgfJpUNqpNdSN5iH7esT8LYTKbF5BEtKYMd1BQDpwbuxujMXGyFStcobAfxv9dQew491xZt1JvGPvt5tWDVN",
  "key30": "xiUBkpeJ1wEXnWFBetHchJxvzdqs8yaF52La9kcmPa5qDzfWuhZi5HAweHCbJEnkq4uSGLoJWnqc4wVZAJUxtDk",
  "key31": "4qF2bApkwh1m429sEkp7FDnHFvXyfpAPy66EHcD7EcrMGHzrEbuqbJuVj415yWaVduuAhSbTT8hCHJHGYqc8vjDw",
  "key32": "VEE2eh2mjpWV3YE6kndy6wsNi4G4tPQmpjnytzwm1nrwo3gUB7628xUkNCqZnEQw4us8TH2NWzNA4v3tm2bcCSs",
  "key33": "57CgeoZgLJnDBKARLjCx7PZgtxhHAVYoDhTS3iPnvCUv5sxWVp3NEftv4RBLNYefDM8mromDcESUpoBuCE4vV4bA",
  "key34": "YfSneGW323SR5E868AeisiCsCv9n95hYNQfnn7zLUpYYq4hADrFCQW2bd3myj16Kd6rhik1XdJrd2pjE8mL9WB9",
  "key35": "27o4PCWcAE91HJeJweF9Mcbya6zjRndrvGfcdH1k5VaQZWRfsN9KGGSaKnvEXUBYo9WM6F67jgwT87kiLCfAkMyS",
  "key36": "2Bw7jE76tEZZuV5ftqqSmbWbAiCRVjosRT1eT72qc9JTgfr2dASBBdwx9dCK626pVw2SoH7LE8UiixePorUnMs4j",
  "key37": "yJvupZoP1YZhKtmuLXAv46V3haPGF9C89MWMQxaC9za5aqbd2fv5pbdt93UkS9tbtzxraJMAxH3Fbdf3kuSQ1Ai",
  "key38": "2fytfSaPz6hm8v5zd5EbKwjptfUGtCwB14ddCnVW9LdmUYKePa6JC3G7p4TRgP5rHVPw8ZpQ9uHP6vLAWJxHsr4H",
  "key39": "3cCFvweVJYWe6dFHava2Z2oJckSJQTCra2EAmb28QjabdFUWTeapvwyUBBnXciQ4S4gbF94HhTJEz9idraK6RT43"
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
