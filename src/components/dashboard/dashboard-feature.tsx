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
    "2QJhkpkamwxtc86726BvAoE5FKi9AGqYHru4y7WtajMp8ghAELL5JbdjdmaqpopSFMBuq5UzCzEHCH3ADXria5Nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NQB4NwJbj93poRvhZ7J3wk3MKzaRNeSTSEZ5GWMDMHenyxy5kva65eoFC8q4u7xXu8pyWmnUQ4csHjxCbbUJfhG",
  "key1": "3LDuCZwYy1gMhnTBy7E3xMek81V7si4DaDHUXpFVd5erpXJvyxcQDrbqE5BppUkKrdq7S28Dpee7VtY2jJKzq2Xs",
  "key2": "ygDNCmkwFfqoPpmVJB7sbxaFfpQuZayD1Dvz8XhhJNg9Uh6mTSKU195FovikN5YUxKNfakoFui8PCR7STWBwmJJ",
  "key3": "4LyGY5wV8CaWWVNaw4nLrDDP9iq6ya5gQhVn9rKfepEKuXf4arW8aFhw9oeQXh96rbJCNGJP27fZR1pFjtSzYX9A",
  "key4": "2WwAUk5HSfe7CAzocymPkGf3c3HKK2fmGuFqEVPoYS6jLV7h3Rs7g3xsVJt5rv9ebJba146HL67CvJ6Uj3HpWgNK",
  "key5": "5jr3wwt5HzFvQ7HMu2QTBr1PsrRqUq3iBRHdYXnnD5b79njiEG9UcYTocxGM6f3wc27zRsSKpCAWdyeRvjrcSY8a",
  "key6": "2Ph3YzqSLjj2u2Ra7WcPLcLVpGjYPRYQGLikNLM5qr3RLwTa7BbsZJgUcnCvTRmtGPLK1JatDHWQmU7JsFAm2zCg",
  "key7": "wJLpUaHjKfkn4X5DpXcmv9WfztT5kbFvTf2iA6uR82kuF2vG7x9EDMru5WCXjjqn4T2VB4FB6h2nVVrmnBxXE2e",
  "key8": "5Kd5J1JkuS6Zu6PDbJAX1mH1omD6bo7uyTKogKWwQBM7tGL6ZtSZdmLbnN8bdaSAH3dZt7DoKdmTkuj7Cy6TkmQT",
  "key9": "5QHebJQPVBUC1JGm7JKfwskFVTBS6ieYoMjdSe7id6CAEonJxe6QA1bp2ZUCtm2t8aUakb4gpafVpnCzLz1ncMDG",
  "key10": "3GoVDsAM7MEPkDzuxVmjeJrUyM5M8gF8rVqDZYRFQ2nFcpStWkWZa4HfKDk8GXKGcdkWnoJ2DUChsrSTdgLNm5N1",
  "key11": "25myBQteiGUauAULgMvZRavkb4v3kZLhwjy1wn7ZMmCDqwoMkQEjTWwUF5mxAAZA5tit4LtyvQhN7e5aPJ41ardm",
  "key12": "t1iKGeyA7x9kJp5Ms6mVd9gAi2DPAfgMi8864DLF5M5eYyzxsfjM7uVEBwiCyGH9hRMPjRoKx3HfWVcqCqiF6Nz",
  "key13": "3iscjWUM1brQHAKWpBB7NyALsmZs6CHcZimDfqNfqo7tqNkHvJRF3ed2DktAZjFmQfhFBrLNY7acjdgp1Fqppg83",
  "key14": "2ysVJxkZ1ptwUufTzGJZfetLRdHJdSqUrNCzNhDrPp2Q1CRUbiFHdp6sfpCKhd5SyJyvU3RpymGXoqKY4L812Jsd",
  "key15": "39qttzvwe16jNiF9GLZ9nJerD3audXcerc6tsMJAqiQ6CBSTyE8gjpfVYZgk4pac9ttFRy8nskHwjL7ZXfRnbz2o",
  "key16": "5uWMPvPzkNbCsQ3Pptu6M9qRUH9iQM3Ca6CYZjTCY5NyGVwddbQdw36x9QdEAP56znrJ4sRgx2XLVSVptktcAtw9",
  "key17": "2YS3GGFjxciwH2cjPh9yfi3gsrCMbgc69x6MZPAruGPF2qvW3PENCHbyApdvPEr2pdszTaMs7bTXdtwHzstFm9Ko",
  "key18": "hiXE14kgDK79ruKU4exYFsCUZZtkz5j2wdkJAB3F7veHGMETmaruFTZ7UcjaTGjT7JGeEZK29thCeNzYPUd1v7d",
  "key19": "E5MYD6g4oBWkzSiCSgZ1aD5DZZdTuVE37uDaTzUVZK9SPVHoMNzYviaYARx5hNGaDdbcKmSi17VVD7UnLF9p6Au",
  "key20": "5n8WbBo36iQ1iLQzvk21G9kx2UJVd4xcUDCvnef7u4Cc1XgwW422GM4mLB4ht2uySfhiojRqxNr9nEcfiBnt9MPM",
  "key21": "3e2cL4GMMus2HHCAesdmPb46mEVnd5NSwh5th2vE2dfapsdXG1ib488qVVYehmE1eaZwWibQg1cPxX1vGfxZCdT4",
  "key22": "65w7MxBS7Dv6hpxG7PdayZDhJJoQU8NEjjXNKZgnv2Doxu3Wxm7eDVJckyMwKjDby3zrcnCFv8HZNtVs7KFVn9pb",
  "key23": "UNEryMDJ64DWF5poCnLpmXJDhSAqUAGiiX4QxKTxzSMfjU173227L9MjaLUUbjJj4JBPwpRM6i5vwAwEX375hfA",
  "key24": "4XTmBaAwxVDpEhLEWwFbi9qRWyE6jupVw1cVTYALr78hTyTNcWyvve8yzCVk9nBntRj91GERsVJiXYVdkqCHX1FG",
  "key25": "2t8ZGqPuiNGRYBR9g6H1sMJGU5SyE8cCBgsNm63M8WzRZotCiLABZZSodSbtrovqZ3VraSyTYviN2CnArb9aZcL",
  "key26": "2xDKU1agbcKTwVnt7MUs7usZMadekqAhr7u1FKm3DXJF7mKP5S2qFx64mmu7hi8QRwp9njA5YUujMNUGRubazydN",
  "key27": "4S6frz6vkP1mKpuSck8NQGaMWyJuQJPajnBTZwptMdto6k4c1t9XGVDvv1uoqFxdoN5GxsTn2G717WjYhaTBAhHS",
  "key28": "4vLzwoACT39iNn5RQMY486YsWTPdaDkLqaD7PaWRWMiPuHnatJqrT48W9MwL8GktV9HZLuY1UN4NJGzVGX7PnL79",
  "key29": "5X7cwNUsMB1fLofpRuEP4xPkfLW2unSgBnB8nZ6T8t93W32HYKVjbKFmJSmQU9JoZqg5Tc8suPZMFhBegUiz5NLP",
  "key30": "5zggcVPD4zBLkvzmZmXC1cEowaQm3wtBPLF9uDNg6Buoy2BZyBdvrbT1jJ9vB5C2y9u2D3Fas7ZdmS3gUiSz4gj9",
  "key31": "4p5X99cSbbGhzku14sRE9DCUXFd7Y9yPw2PFrq8GL6smKZssAeZLePEBpNrNzR5LMxKwwE2unbEf6D366VSZVFG5",
  "key32": "2goAANXmFVtKz1icfRdcGuNPWHJ5cX68GNe9dYemmJcp9PJpGwVGUk5PEB352DP5CMz4ByLace5AivNLqpR1pC4z",
  "key33": "4ctWaHoUkaHEBizVhrAPLxjmQeDMQfzYryA9y17FyaF9H8VaNwBYZAHGLqKWrvo2quBEQfeYzPq47ZeF5n5XP4bk",
  "key34": "45EjqBHPjNGU4K2i1dMUYysu57ebaL8KERAmNjLN9tbXSkgJyZb6K4HMZht217fpeYVoP1AvgLvy6rcTzjHEktia",
  "key35": "BQo3gzc8nP4rbZDEfktmpkNmjB4LLZwP51rBKWLYCrqNgW2dDFieBSVekhn4TDE1MG7wXc8jM8HEjMYw71EaY3P",
  "key36": "5ZHG3uarmg5DQN3Z8QnNUUF1hE3L3EyUyLMWP8zL9Dg1YVPgAm4ePx3FD3uHE5hgRgAszqrhdxsvbDBeZWUM8qUR",
  "key37": "23nvqL7fvF8tWThH1uWBncsSvFBipvk3o5swn349KWnSh8ch3unnGu3PRANstWW6FBzyQbVfyzoqAsbAdwixAjDX",
  "key38": "5oHsVPfekZK6bMoVPL11M2J8AZV5E2QUiGz9pKQftv4HwT1HqYqBD9vR25kcNxbniz1Z23K41tUEqPa6ZJBo7svS",
  "key39": "iaV5Xzv9F5AiumuFwDABkCXzKZ7ptq2J2QpKG5A3esAtjaYHri89qkDqLfW8M4PHQw6rGBdMUG5qtUBE1t1zAWt",
  "key40": "3GuiGx3k2bfARyGNSgJ9m57JENLvWwT5S3CgLCEkhrWg2dUtiJF8QCREYyU5kTqSmasnCo8UBC72jodtFeuHqUuk",
  "key41": "4yMvjvMkzv6EuQ2P5bVk9gnC6yod1JnJ59yf6Godkd3R4MGoJepCeSS8NbXss18812ooATZz1vki2ZZ5SWCEDnoZ",
  "key42": "4HsJbW8uaJZdyYrwkaAAqVCoghyhtYvRZmMLhVWsx8orJgJfzk9JLaaLm94n2fE53Sr4UdSkiN3rL3T8fw5HyRuM",
  "key43": "2VqnTfRU8uXjeYLRkLKrg1ZAAM4Hu23zRistBRMgbDRh8EY1JbTGDYQrQT1fV2WUkLG43jCQhzfpg8rjvJp1ENn4",
  "key44": "3c2eGXGLwTwcXVgGdhnGnLbtFHjBz46YQczJVM7y7j6z7R3uniKohn5nUcZU1gaHBcasvqqeSSg9G9j3eEACJLqN"
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
