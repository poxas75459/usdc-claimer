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
    "5PcxLdZv8jv7hpE2XL5wwz7BVZHG5cKr31RBVTvSZhwd515SY1SEiTwiutwNV2GDPHDGdsafL9Dj5s7ibLTFZjX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vpS69rHzHhsY7MPYCciV7nyGGA7igk1iogXGVzwukykV6p64MTmBAuTJvgy1D9HNrxUvkaEnp1uVEW8aURjkcMU",
  "key1": "yc3sEaDbn7fuemyuAMCKhBUsRgA4V4so7Yh346A1N7RkgtLMQzGHmULfVH7zp8CQV567cDixwSyVe5P6shQALfZ",
  "key2": "4hr1EU6ZUQ1Pw3kttQHBYy64biGmJU9cbSuKKMonLDMWtR6G7sFTqC3t4K34G8piyCasZ3dCXaKK6GwUTMnnK7ez",
  "key3": "5hw8SrGpe6sY3Du77RQ8P2xaUHU4XwXQNzV9XKrzYKYcKYWewwtArRq5SgzV3Cx4uwffGAcW6mEkbKorr64cjtyB",
  "key4": "4ZcJ3pHGxWeTtZvNLtUB7QjxWqkcnF46CXMrP6Xm63udSzYE3uoquwPN18wpnGFyHBjG6WE3CJZSFGMKbttFVx2z",
  "key5": "qV9CBHMUpFaFM4Hd7ARA4D68XX32vf2FDm1fUv6wkk8iDzZBpZVE3nBvuYYsFiNvUeY3xPY4VaZUxzuuC7y2zbS",
  "key6": "3A5Lxff3eJRNpRK9pHZCK53gachKZEHFmwGgxwvMk4k9uaT1em4T54qne1Cs9LfLvYhDkZmSyd3JCczNzBEdPDyA",
  "key7": "3dYruZAbWsnygBKjVmEm6XKMxAneZJ4nt6kz6ZUYSzY6FiTPeYHrnBVQHM9KNwB5qPYdokxYX5MvJpVRQhfW477K",
  "key8": "3CwVWpGaEQpGouBvPM6izdiD1yWXkPoYeLm8D2QGWnvfGGBKZtrsMcJtiVrDzRFvtLYWLeroc7CMm8ZeudeE9H61",
  "key9": "39zQ7oCaRcrkBbAxy23cpzT1kg5K5ouBEYDiJeaKXqjFe91FonfYdoLz9fz5hGoLF5DjR7qmBuiChqq9PzxK2F9r",
  "key10": "3DGxogDtNbTzJTg7M7oq9dtq15gkFKQ8xzcgkRzcU3UzL2QyZCtzVEDtVnb2Ddtjb7Ypt19nLw3kcZLBkV1uF7qn",
  "key11": "3CVPpd2WtqgzVoLCuaqqrTdHfCssGcMeXTdmqRipq8A4vYwj7e8FW3qdCpQNUEXjsTJcusRXcGHKk8vyzg6QqV9J",
  "key12": "5hsxQCooPsiNCxCfyRM9D9sijNCXKP2SvLXcK9VYpUy9HwMs3ZSSsHD8fw5hvPneZvP4QLRhUnoqfb9dTWBan7A6",
  "key13": "5t9t2YLhJ86dhqSB8SN9fh1m1bjkF4tKaFiPbMQ4zac2pqtRy1s5iFKwkTVcowKwx6Z2pSL96aET9KpSWaPVFe6N",
  "key14": "4eNVf8xJuQJqPDGke4FqaNB3gtwqxv57QAW2JqPg9pXDpfjzkPhVyhnB3Ay9KY5SQet9EdbGyreLFXh2S2ruv6eU",
  "key15": "6BXAEnbKZr46DaATag4vFbNWp5JTmrNRvkai2P4bkJKjgFUaMn39FKCEty2XHJazYpiCGBGkHH9pUib9GUSfuAb",
  "key16": "3kxVYqMfWvRE43dWhjF63VuQxQTNMLXH6hg45LYcbyW3ahUgoyCtWwv7omagyZE6r8WPaWZ8SdDVNzTpVpG9cRyQ",
  "key17": "3oDLhXc3ZZ4C9acG5vjivHFvnExxRhqvYrKPt2Vr9HdqG6AXztBByKKrQdHyuFozDBqGBTvtqiLzFbDuEp6ePPZh",
  "key18": "28cCJMhVAcVzNDDLSec2jjL6DMh4QXtq7WRiB4ttPQJdc219LThYd42MH9sKSgZFkqkrKUjAJGRiLKqKAXA2eJaT",
  "key19": "3v8eLdziJn3R1BDrmKB6YBPKr7aRykpmPu8qViL6aXnS9hhApTiCpxptiRbWpgzxmpEYLjFvmmQQ5Br94LhBYyDc",
  "key20": "5hEuEvc98fk5pNdAfY79RhoB8LFR1cePeLi8yk8Qoh4k3xDDni5QxPfHHhvrNiQoJKyWXA8eNumqfpANLqefa6yw",
  "key21": "5D68foT3f5XHk1sDSi5xPxCS4JWKRwpyvvn8sJrQm1Cz5UsuhYrmVcrTSPRsrYaET7BmokngUymPFBdSft4EqJAW",
  "key22": "3zyzuuLbVMLcLdzc94kigDyfHdgJpdHXhqSJ9zeSJ6orGwgAkEu7QKb29oYFMzjqEZp1ENyNGehETWYyogrxHNfB",
  "key23": "2bAXKtYvBjDPooijXbzv53g1CXXoJeQiy6dptFxytazHpuwtZvku63HXkxVndSS4VkPcg9ukLSseSxqdpEdR3npF",
  "key24": "4uKizKBDWRLydNkswzv4Rae5nKFWASNVEWK9r26GtJmioKp9AW8CGCQEQHnuqF23TMJ27wwgvqc4WaHod4whqSUy",
  "key25": "2o8GGGqqch6SrNoyFb2nfhnRWfQFiPSiLF33tHHzMfbbUKZyByMDBbyp9EGJGfogcFmqGbUxfuLDKHPko5NkDDEW",
  "key26": "29h2FQ3dtuSx5AvrBRuGbEVyqY6TPdVDaFBBNXcMmnjUCZbdumNPyuMNWef7eU2jhF9PR1eRcrTRMvvyArXwWsao",
  "key27": "31GAhEaLTB6oaooZUjcfdk1KWgspHUDyQNf3fFjEDmr7YAwvhjP1wWV5bHyuLeRYzcz9FqirFY52wdeh1PG9fjmz",
  "key28": "4b2CwrZwwuJLbgQRKjfBEArXGFWS59mY5YVNcxorpb61CebYL8f69CYNhjHdViREVXJdWg6kGLge1ryAaxy4gzzG",
  "key29": "2QJih3YFyUtur7vDCvbvgaoaENJKGcdLqNvm81LBA3ZLZffQuBA75zkY5mfR7ZGs5k9SJKnJ91TaTftZXNbt7KRP",
  "key30": "4w21F9ij7EV6hro5oMDqNPuxf9eKFEfBvCZ5y8w2qbFjxrSNAFwVW9jTsDanjMnLgoWGcjQaDFuidp42t8eJh5BW",
  "key31": "4gUEaGKFjnVwHr8RybCBB2ZREusArTnyKWxfYzy6PAWnvNisyJUHbjC2eKinPTCunV9ZPbYcXXWzyz88tJ37vkVR",
  "key32": "2bH2PE1ikTUCf4uqw6wWuWKSG3LRm75DpkggZD8iNymDEcGuhiaNsGfEjy3zX1oHUviWhAfq3MBLteMF8Ro31XCo",
  "key33": "2mKHwVW8AQf4WFmBieQENSqEbQY5MVmGmsAtGZbJhUNkPHxJCoZKLx6DMmpP3r1kraz4Z15gjToxwQwU8Qu24g7i",
  "key34": "GhCuvV5dGgs8a7gN3YUxjuRzzDYGDYU6sFCWEaQYGzRJGcj6MYhWMsFBfBKxDbbFymTHpoB2JcB5XymudmHuhBN",
  "key35": "59bit1jh8JoDH6AUPZE8sreeGCkMF47yRh8MeF5DYXf1kapePYdWsc6QPfwX6YWpdQymaZ522r9tLHXFUmJrRnX2",
  "key36": "4U27Gs7t8ucYdfkHkQ3LmUjfn1ynVpi2QeCXAk3uRV16ZYbbxN24MzkzzoYpPTNdZEFvDA8EBsBzo4epbZ9yiKw9"
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
