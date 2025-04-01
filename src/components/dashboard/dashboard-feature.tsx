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
    "3oKFcJwsSserKYsN3Z8v6G7Bpra2MVRxmDV9B8GrLcEQZNibLtCjg1toQjwy2RrdNdfkRYyte9Vad2NpzdXP8RYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ob5Ldnqxortpjw9xoHVSanQDEVE15afHMMCzxzKDKaQCMo5fGDE9zjhMqzjmWjEB3X8WJ9T75XtRDrZJtuYZ9EG",
  "key1": "3bC95A5EuZuHgT4JXSNRjDFqonyxfaV116BEwJuYzUAjr4J8L98Q526EwYqsdKEzMVnJXYq4cXaQJMGEJxA61XVd",
  "key2": "3VedEVJyCdQ3SjEbDL2tHBo2Nc6NvsdgmTfjHmp8VcpgNjxsRzDd7LCgr5TtEVNYznmtZfjBCmXcdz5zKYpvVHUj",
  "key3": "3M3mK39yh93vamv5VnfsR6vEg3jtaNhg9PFDec1kKqxSC8qudm9WqHtT2UfzC6MCrHrTiJvjnfDTF6WLvmfBDbVP",
  "key4": "5yAxAjFPKgnMjN1GVbpMwm4mKrSUe3PAQAQuuKDTK3aMjwjjn3dFPASuD8KZg51jioK9XxwdGBS9MCd4J2LzBW3B",
  "key5": "2aivYLryyHo8GV2ho6okzQzaETQFbuQxtQSiMBheQRU7LXMCkEFK3XTbbeGKSeMCSEoKNQhdSAhRNSipcJZNC7wE",
  "key6": "3Y9YjyCPc1GcsowTeWCskU62a62FKEo1HD5DHvEjBGtuo2wQB5HURzfPCmJt7HsQyCcqyKRzSd9XJMKWct1oEbJk",
  "key7": "3Kta867mQMRa57QaVK2DDywg4XBF5LBHoM69Sb9GhiASfVERtG9fAfkicTzBoQYHmq7JXspsDu8xUfhSmYcc4qWi",
  "key8": "fWb9TiFZzjZyViMisRpka1LEpzp8UAh33EkYee5earFzxgRAocAtbfNzibX3GnByZyWeS8YsVonTHKZAzXrLE3X",
  "key9": "5KsDsrUFiNYh6wPa6seMMgG1WRA7dwxHdCxSiRDG5kHXjqK9qvSGgRQjUHkHYZaDamiH1w8ktxguUrFgXfEfdfyX",
  "key10": "MNnouRoEMBHcrotC1BjjF9T3VrrcVDeQSqS6Qu5w7s5TkHjn3R6WmMDU3jrnP9s6KE99iYAAR9NJtZRt2z4NgoX",
  "key11": "4XN7uD3NyepVwKKuwvivQYqFxbe59WAu7pbzyrQ9nZmJmmh7aMKPrAAtft7STnxTd2yLjEqniZTMAD4DXQhnfu7P",
  "key12": "54bp1A1Ag8Hsa9N3Akvv9MzXyqoKKZsWMt4n7oemdtvPzdyRDyaVF34n8oS5NrgWYih6U5m4nqer34ZgKsBuyPo1",
  "key13": "36EfisFKnwNoRyioDZPNqayYGAMmDr3ag7DhyhHpm4uH5MzY776FgQDup9yNn5QB74jwL6X7Dy9eXcZWtGQLmAgn",
  "key14": "ofvxdBjv3gVF5SFYgJqkbzDKpUwHBsFP5yp78yYSoLs8kXGuZAC3h5im2yWNFudJp1wCzDKwS3Wo868jxD9cAti",
  "key15": "5EybTkWcJzaGTJmrURZTz33rL7xTgUvF2j9LNEZJ2bKBrsvMtFXYSSwCyNfUxEx2AxDc3oWQYpACqAHD9qMd84C6",
  "key16": "4UoUdyzb86GQ1anP6wVNzSuTZk1FMU9rcMYULCfmHPCtnkSEguxoSuhmjX72cdRkt91EGsUPwbasqY7Q46vKfgHy",
  "key17": "3DTya34DZE2wYqomkK5atfmTjquJLQ3L6ujj6zpkaaW6V3HxWTYn3rrnTKfqFgkFVdV6xpa1aHHzW46mHzfsvnxT",
  "key18": "3hgTV6J2TnXEHZVtkVDJSLUe97tv3f8nMK7Q4c8EkKzUxiVBBFZbSDU7uhBZPhpRaZMnEugxmUJUnCqx9s6meJfu",
  "key19": "3H5D3mzMHsCDSqB6vyH3J3URNZorshw2EcTgjmSweKxdJaE1oiY3AkcBkfUZGKHmxPFLugTvgHLQDBPhg28NwNGJ",
  "key20": "25qVu96fEELbsTKtHGmpS5WL9QuEP9GiJRh15JNCLyjaQ4tWgRk75sqE6wjrjEkcZkmErBvYTStFG84TTC3ra2rh",
  "key21": "3Dm2PqoodwHvKT9uq91WqoTs7oVQK9xcZzgmVje2krJwFR8C9DnvZgjjt7pQMsCs5g1iuA8QDzUxTDMtHXHmuwSF",
  "key22": "5Y4Awvu18g5mWLCqYJci5DxJmMMdTebn7qYZwP7Qm9tHQPQT4xi552dVjPMakffFW19Ze9BGc3BcogKmaptdkUza",
  "key23": "HENXryFmdkhpq9H1VxwdZEv9E2Tm9XsQMhEBANJLSyYGh6N93WPMYCk24KtyACCetxaXcegucrANXSLfgnsdW2k",
  "key24": "5kgfunZ1Ae9gBAU3RS1uLL6fQpMLsebbCmZ8dqwdFbQoS3R6vWpCZ9tvBBeReVWeG8XQJZLRQoyPZ1RUokjwF6w7",
  "key25": "4EjwuQRPk4kC58EKbHTdoFahtHXgmpviVo5mdc1yWJyw2vf2iFXN7GM2A46MTrAp9v2jDhrV7KKL1m8Y9RBon7Cg",
  "key26": "2Ks2gLzw2hAhjZsMHbxXGNb9qtQ74YkUDadGtRHKSPysxLMexTEGCgdin7vA3pY9FrUvhHmzFWbYmF254dUX2MJ3",
  "key27": "2HtKujEGXhCLUe5FV9KacUY3YJQxUgs6TbasBkjbYd1Pr4tzgPb1GqjEdmCA4wJwfrdta7auzHT1874VyPETgyrJ",
  "key28": "5UV2mdynS6NtniKSGXJmypgZ3pE8weo2DzSNuVNU9BkoQsPVkrvpkEtsrQVzNdnrBrjErZxYAxVdi91Wipz3YXj6",
  "key29": "3ZU8kuf6SCVcf2pPMSYGLP3DuZ5khgq8m839zpZMfS8mdYfVQMmeviFb3SgSKuqW4QxBAssPChZv8BFTzjZwRsBe",
  "key30": "4N9Eg3etuXHWLLG4TG5EfYzoBKR8f9ozZXzJdnzjx3i8WrSiFQTH1jwuJPGiEoY7XLgtpMoyV3PSesZg2wQ6btVG",
  "key31": "43onvxWs3zdEh8fH2Lg1UefzjisUyARVnM9PzfLjqfqwmS5jTgeBZfhTg67UsFAUYeu9D3pBQz8kh3FkbbJHCRHc",
  "key32": "zvKTR4e2ggK7FTAk5KSJAcEWanRj8r5o8qEuKcqHyVXYzphe1YcCzsHRizP1uSNqqPCWBMNT4MhSS7bAAYuegP1",
  "key33": "43UBZUaMFdASx49ZgSABf8h1HSx5YpF7882b817fWyWYJHCUHiDDp87K6L8gQJ6QACQMCKuxDYVs6SLeQJonAPqD",
  "key34": "2iKHtXJjcaojgFo1RedMhVXgb7JaUFhtGDr8adDDrLhAcXDNx165orwMXsEx5Xz3rch4rnJxMTc2LNeKFSw7GLnD",
  "key35": "3XUdZAF5gViaoDsqv92v9RCDR7yi1RHUia3pmVPiTHwac9phuhPAcahFmsSUEQ11hi8BFvkepwZvXg1oCnzRao63",
  "key36": "4LXuayMwnpRTe6mwTEzL4BgRANuQpYYaxCkmGBGEGb62zdpoJvk97teB23AovUpw5FDn386cAHyNTYWaGMWD7FFg",
  "key37": "4vsiyUcFh5TrRJw8FpieR6gAjRD6cAyPkRm7DTRYym65PQ9GuW4whbsHPKG2LVUiLPYE1uwokBdxJcRnt2Z3HUjD",
  "key38": "4ENaGdNagGX613WTPQcGa53wczBHt34sjEviwSLRh384X4tKHUdRC9oSmPjDknjWvf6WpeATvsVPs2KFpnaj5oJo",
  "key39": "4etUbE2zJGZN2H5hua3jvmwKft2aBsQxfBou8mXcVx1gvJJz8ezLmp6PeGg2GnQuSCinytN7Vfnk5NE6eRkYtFmj",
  "key40": "479VcFHqsRrYb8HekWfSNrWaSAsm6yk9q3v2Dvg3qTQjYdDGnq321tw1nzwykWrxpHDeKRkAoUcH1X9kvhdBMGBB",
  "key41": "2ZP1CMbNkR6qNLGUKy2fWKtY5DKk1HeesL6xd74tyWsqTtgMnxnj16VCFi23L6YYoELoVw2khHPyJY4BJ6WcuVri",
  "key42": "4Z6yMrJmecHgXBhU2Sj6K3qYvWHgTvgE6VCg3Tev3RVXpYH3cV4awGQpHstHyd4qb86VvJDKP6kNsju47LT3QZyx"
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
