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
    "5ZTyiCye1SNxRYQfzNse5YMEGTkgMVD8CDZtGEhsuH5XrjJvQqsrw3vbUU64JUdvXR5MqqStftBCuj5cpd3Ti9rU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wb6QxvGdPjiWW1hzrNkgxpN8Tr6RVT4AEPh6EPmBYxNQ3Hrxv5DSJUuvzoRxcJthsLcrg6VqWCFFsnyvt2HatLu",
  "key1": "52Rrvhd9J3NcU7nYTPMTsWde7PwUb6zCeyseVSHS2LqnMBuCwKeBR9xaEFGzXwhQ7rFX71h1agLF2NV5f5TJs1Cx",
  "key2": "5worPCkm6dyLF8vkdtdpKjSEuihke8W2ivYW3upnqFhiP9B9dAwrZK7MC7ec2qY2qeQ5obvXW3jAdcghuihaL5BR",
  "key3": "2yja11CPHZgDh8UxpECovtjYVhVWL96SvaXpbzsr2QsfMKL2ZizBabGV5w8h6NHtqKPWRNaeHCsWqr58TxiKzew7",
  "key4": "3mSG3QxinXYiwqa3fp6DJ3ebccNn6kyySGB9LzeUXFfx1GwTFrCHZr3URFDoEzAPNcxJ5YK3ws6iDxLj2iSGiHBS",
  "key5": "4Y9DTVpxwXWRZu9EWsoHqxGAL2k2S1oCUJd79VptqMqyHiAtTFzqHhM7cZU3LDFMutTojDDy8Wx8q3qUTb83Cq18",
  "key6": "55rLqdDAJA8ieYGFKgVsEjfsGf7WZ5RPJcSK3BEffrNZqhEpGJcuccqWqVAM72zuLaJYjqajHek9S4N7drx5M3oB",
  "key7": "5aRDhJAjUP8iDkoRiAk9oSmLMLkFaoHUArhtDDCWZ4aJxwanskGoPDAuLCxcX5Xc9vhckuqMZThofgVjTu9JmEcT",
  "key8": "3iMqmPCvjUvNtWrRoz4K8NQEVFPDh17HoTJofGNqo25tgNyn9wJsGFGqYrYS2uFa6655HJRVFuDjasB2F9dboPD3",
  "key9": "cscd3gxweV97Neehxo6gD4ryyAwePPeCWytDgqmdZfdx7ATBiGoNbkiHCYHN8myeP4VTSK1NomJX6Wxw6euPhu5",
  "key10": "326RPEPCyugzcBeaFrBVB4gFApf61fy7FT6auy2kr5aN39RqiAarwYmy8QotQrBkgmn7SaP26nJ75QRL8LHNBF35",
  "key11": "7G5PVfMsKnAW5apiAsAJ7pTcvAaMYYhHPmt9QoCXXxaUAz9tojr1R6ENhwMyLeYwsW9JD8RLkujwu2Phi5dxmbP",
  "key12": "3Rjzr9PsrjE6St7Uspei5toSArTRaYs2gKo7AVhbRLXHCgN3mWEwXu1X2PQu14SpAkzyHPqyf5cw8TfNC47kPUqw",
  "key13": "3ce1oEbPHYi8FTHJ6h8TA7CVBN4PanfLSxuUdZzg7BVgwqdTwS79FSiH6t7SwiQsUa8B8RLLYjA19oAKXbHdnVsK",
  "key14": "5DjxGrLXU7NmiFoB8d2ak8czxbHw11UbrPCnJPpnwL8mbESZyNyqy3xSegZZf1xaawuoSg5bC5fwx3VBPCjbb8S8",
  "key15": "4xxQ4pPRtf9RKXoVxn3JGY143JenQKEPWDBPk3jraY2grT93C25JWtHr6cUpSZvxb8wJRDffDwWzn37Ec7F4PhdE",
  "key16": "TEpudGxTQF7dbk9NNdDoTL98smaiYrX41vGPpLZrJhhPD7GGJrkQZ93k3nV1QGtbW7rri7hB91cFYA2umA8NJFx",
  "key17": "36fPCqYHyJHDXA4pBEe5jFtDWK7u7aY6CcHser1wxnKZWppXseedPth2kworax6kTYTWJnFvTitzC6mgCoharL8q",
  "key18": "pr4PGq9QuHBfyXsz61Q6hzV9RoGNngZcQ7QQyMn56GweaV1MmUDtnJM7uZH8B2UqfbhCskWMNh5iN4AcC9K3VEc",
  "key19": "XC7DpJmad6Ce365AFzVRfqSnkRiKuck5Cecy6NnqKFadNrgJjKDKz1pK6j72qk3jm4y9ERdQzLJekrWqj5aTF1G",
  "key20": "4oHygZe96pHeDdd45aVUT2rS6WuJj8af1nKHmwAQZhApZ1wkD3bKPLArXuYSuSxn3JW5J82zBGpXgTEo4nHjhfz8",
  "key21": "3gaV8HiLsjPH9xANq1fU6XKhVuBKZ7faBzkf1efLMKXAowFNhmq5oprTWn9srZzRRJmwzv1gxFejhyWJ7JJgVRdo",
  "key22": "3aVSSGXPPg5edEHNPq7h4SuZ1gP5QVpypJb8hmFFDBbHhVdP6CutHkNoocTPnTdRWspM2iE9dzWJSuG9PGsK9fRK",
  "key23": "2kdAiyG1ChMgVjBLmaqHoYPvNmz2UfY2j97VhN3N8j2zW2XP7re8qygR4UKeaGSxcCxoG4HkxLQLpMLKWk6tGdWG",
  "key24": "523NQFZ4WkNJGPzppG3j2bryS5Smk8Ef9pcmZfYV4jQyBjvhkh8CS1tkmjTMbMbfV6ymujLG1A2jQtwRS7VF1FEZ",
  "key25": "5q8NqdYxHTq9Szf4VbgQow4TfegGfVj824rfabJvLhx8iVHjS6iQJsowmHrQn84uJHKaBGSjbHdKV96ecCtxFSna",
  "key26": "4ub5kPFBP7dsUL6CRbT9N268DVfBwrGUiXRUnuSsbo1tthQVj9aecRDM5MU9ZzmkfxMCLy4BCg5mTzyhxeENkuvU",
  "key27": "4fChBgwEq2B12vZqkSjQ3u5DL3fc8J16unaWVcJgYvTpLcqE4REnEWEc53nZjHA3hsKUr5ZvL5R6S9saWaAbLXYs",
  "key28": "2AT4UVavZw1x3Awo4gnCy9vLHYXnyFmghsT1QKgJBDbLZBu122tfe2hXtjE2yhNwrf5EBZz5J5CbqeMUgXgPozxT",
  "key29": "2GebSf6SXdEXB9zQrgVzFrAaaJAoAZiztXDQRfVP5FQi7L8ESnvn8N1uhu5Zz69MAEijHQ1hs7aCLAwb4rFrex5a",
  "key30": "44ZryKyamYLZPkELKTgDZ95d1wGsNG5rUbqeY4VxvXXwmgEXWnR6mP67WsSaz5fGw2hMVJQUzzs8XSGG9vPrN2Qg",
  "key31": "3ELEAUKMUxtgxF2wUZ7NQCC4FhCGE7393hPVBcBKcSEtC6BCDdNq2jKBY6SeywMdMn7mZN7A8qCZjZEEMvKUv6dz",
  "key32": "2TLw93xxmLV2nX5xJQciNUNX7QNUQHz1xgTKeZ8ZDwh4ViP9C2yuxajJ6eBjSDXQ3KmnUH1Bj6oAPxqMRX4mM8jH",
  "key33": "dFLtGd9J6WXFS89MF62ZTVTpmKSc7VEjuC2f6LKWAU1YdhjH7VSFizus8DYPbmujRUczr5oh1zZZ1SAfd8qC1Pq",
  "key34": "4EQ2NDV3NkMvrpZkgCyyu7xeE1aw5Fssy3o28mvJP2eyfAGsLefYunTg1CZsyqnzNQy6UHKjdEnaf4HECNnnNcif",
  "key35": "3g2CF4myeWstarnxLfb8hPeK2JjDP4xWCrYfMroWZPoVU9NuzcNBjZpBjAdMUeCbntqwLhq4YYF9yTVbZJaEF7hW",
  "key36": "5AC9TT64XnWRJG6UBftyRMmCXfWEkXVGexFC7Vp3YYVvHcKbAoDVnUJPckaoreytBzr7PypZMtHZP6gyNgnitqA1",
  "key37": "odGPc56u6Q3rLXp3Uy2SpfSoXrJkTuTgJLGzufALVoq6EAFQFsJVFE4FZW5AoruEQbbZzM3K4tb6ZqTJga7nWSJ",
  "key38": "CQDvR8F2sysAoCg6MHerVTi6x4uWpJ75ResrLGV5TjZpH7uK4bDQuTrxoqDSAsMswuVX7hpfXRyYRfYAsrvwrcR",
  "key39": "3AdTXUPFTSCkhq1ZKHcE7to8VXwrmosUhq8tigvj83EJkhqPwiuUmWjXpMBi9Vt21Ygg6FKeEhBNLtkJTQur99e2",
  "key40": "SA1m7qHHaTZyVskcs3YXfcXtHuW4AVNUftGNa1B9XAANwvDSG1JgSveyTbcQnj3tLmSFT6KGMGJ5HiYXc9jqaFV",
  "key41": "mFCcr28TFjVjkVpj2sVFBdvL5qPzYsmbeTBCio937mwMhMxWPV4KP5bqNKf7dLEokmps2xvg8LBfEf4ZhHupWqB",
  "key42": "5pMDNVsrms9C4Suaxpj5aYc1rY7BiryujAkBGGzuPgNEkUWysekbBSZNmVpYwVty28VujEAWybNnmUxHAf2oLyoJ",
  "key43": "3bFtTRkQMNnzVXrBd4LiKppUzQXHqAQS8PzWwvLr7CvXgNUBfQQWj6thF2G5m9wWX1iiHSBRytQDpxi2YfWXKwit",
  "key44": "4n1YCnSRs2HX9RTXqCwxwqF66DBBqRs4yKETEC144E8gg4e3AWkjKxPHGFRbTrc3kcX79Cf8UfW6xrSCQ7pw9Chu",
  "key45": "4ktNVce7LqrJgCskKuj93iKwQCixE6Swguftneffd8V2Z52tibwbsXMg3bLLc9SwTarP9NAhFC2tTg5FAJCLf2Bd",
  "key46": "3QhieMkWizNPGcReEkwWaKDxBv12cob4J54WLGTxUQMVudh3Dm1ZBFLGhHowAQKJCvtJWdMgAujbLL5JCFQWs2vU",
  "key47": "5URpseX6SeNyGMzQJm5Nb3ksRWFrgCR2SYgiPER2CRtNaRH56NemabPJgPdvrhtDk9NKakWVtrmsdhzJqMbfRhqh",
  "key48": "4cNtqmZyQxLT7XS76sjt69uhsnRnaTu2waJKRrLJxtX8MfeZw1Ca9kq69pwxpXqkB4nK2sDghB4FLrpJwnrxWZk5"
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
