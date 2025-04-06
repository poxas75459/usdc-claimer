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
    "5PHrhuw1KRNd3T6XduVdzSBeAhtHg3aWi4ubgfYqaV1BxSu8rAm2dFRaaUUmXpDJ2FrejDLEszh4iVoJytQW4uhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZqX6grm4ivgQfSBtexxpoA8tPEJBiWNfnRGwGX34ZunHJoiorn45W9pysFufjktKSvYBnzskurMtKaQhNtkCQyE",
  "key1": "5iCxEBWvwtUfPSULt6h4nasCLAaz3af8xzDrDvcfCRnhkNvukMzALfCh2Dk2QwF24EAS6RUJAcdxGCRy2XdjVs41",
  "key2": "57vkzSKwsBXGCaB4rSw2SZJd8hnuVQGvxj8m4juTWZ976UxZDx78ZsvFwevWEsZ9GTu1Qg7Qvrn1EbStZFUw6CSz",
  "key3": "2BrDrFWs6Us2QKLja1ZWE8Gbqf6UT8TpJ8hinh8Djqt2YbBEjW4nLmn75iLBHFQe2msEtQ2jXRG62NpJRUCYzP1L",
  "key4": "3rjH77b4qFrJkhomZtEcKdoWq5yDvc5WaADSLSc2bXKJSRnfHWFTand7VSFXJP9T6ChFsGNfQ8fY83peAqreRzuL",
  "key5": "3J5M6c97pUSrD4FN8HUqrrpW7FhUojUdX49WYAuiezQiY2Ame9VuLxiuxpTsZ2oimCh4Vf3pWRsArd8RTvFmm5B3",
  "key6": "dw7pu9YJabh7gSNkH7hmTUYWwG4p8CSFd6Ws4owznR9Scvk3cwr87iygponD2KVww7f4Qmz1N2t8YyvtBhoEeBK",
  "key7": "3hzQfVnqgfnXLFNtHbexux8crTwWS3VEE5DfuQmnr9cTKmKV5B2wAJS1KLXtthm2wVvQ4sRzuYxkQRt6HhgWYdiq",
  "key8": "oXkfeRvEupxv1GAnYoFszEXcVuwyqS2c4oiR68b5nXCE5K79AaVJZNXz5gCW2KdevZNE6s8JEweoZbTWGAakKoB",
  "key9": "7pqT85KuxRjqfwBj6TfLj5yHcsDikfP5GUEg3CQaAPmCyXxhyJ5VupvkEfT5ajk3zudhLo8iMYVchb1QsGk8vsV",
  "key10": "5JGnByse2xDp7ASifUJRG8ZatTUwJo7wDuNbSM5k1U7v8tcJ1YiLXSYiF9ywsxNUaJDQrxHKPXUnEU2HTpUAhGWj",
  "key11": "y1aULFm6ZspvYfutebncW49z7E4TCTAkgtQ91CrxzgEWuNGLCd6WSC4ap1gNw3H36EFMyzFFgPUy8KPHx3hxUan",
  "key12": "5Htmiz2Qd8b5dowWaUGKZBKXSs3b6ERkP8Y5sUWFriKWCwHTbEdpzyeoGUrNZPFKExM5bEixiAm6Vg95bdKez9yu",
  "key13": "64yuYMQcMaD2KzVYpU3zNDLYZaVZfHwMbYbfX6oAQpJwaELwN1cfASTM6P72xQJPeTV2QcPyrXxjcS1unBKLwBnS",
  "key14": "2KuqzViGrAWV8J5bgVP3KmoG9RKiAgwJagEFVTA7FdTj26Myv4g3CkTjs4cMut66c7XbGpQ6S5XwzByKZ83jd6Rg",
  "key15": "4DbsADYmjZXzcRbqWaUzQgmhtkvRYqpGHDG7wwTkYhx3DcSKH2ibXbeTzkjvNUeLk5yDLvg8HuXpYSo6yRjDA8kG",
  "key16": "2vyjWPELoMB7ZVc4Lqw6jMC7SVpGpwgrSee3JVyxpc2JPGJHo3V3yNiAoYBAJbQGB3EY53et7wypFDfuRaiy5gYJ",
  "key17": "2hh1VWVw47VscKhyrFvQ6q9NJu8r4Bf9zJ1gy3zEVd7x5QEXk66LLDAJFqNYsZFhTyfvhrC4ZXdVbJEoeWoFiJVV",
  "key18": "5BkgzdjvJm8RJ72yEkGaDBsTQrRPWJ12UytqCNdq953pTgZgAPNNbDYDE3BUQPaDsSFN9gB7PgEnWzfNM6HgWNzd",
  "key19": "2araDKE3Y95Ad3M2dBFQg8hUJL5aDH78VLpPxvc4Gk3kz8rhUyGUhf4E1q8U1LjybG9SwJjeiMLGmTza62CAirwD",
  "key20": "3fnXwxxZeotbUNbaNaBLqyfw2FecYL7o9t4peL2otpwsdXXTrmJ6i1YMJs1p5G2bvhh1v6JNVTgugooJgNL5pN9F",
  "key21": "ahbaePJ45NDiszUonGnPjPLFDSsmQJw6epzkELHSbopkz5a78yCmksJyPNFLAgataizhg13wubyaPGD9c2bzhRU",
  "key22": "2sr7TG8YYQ8Cr3wWvyXVa3KMdS9ofapfczThqDmMC58JabnT2YCmczCSGSzNXTt8PsnGhgA8BAkU3iadDf1RRfha",
  "key23": "4uhEUXZKddCmdGg7BrDSNAf6smw2qcjZYCS551R2yGXjxBpVZAg27LmsgojguYL36ULf22awXw5yjgKCCA1YBSU1",
  "key24": "ZUsjqxyEGCpiVJ3G4MWfNxbGwHY32GQoLkuS5m4v5N6pKTdAgCXyCgdqz3t9zuScuE9orXsCyc9FbqsS7Km31Jq",
  "key25": "2co2MCPXTobJfpkJguQG1a4gxFgeKbi5Gh3b8kme47Ep4vrEn9dQVfMwXXzNhM2i7uEKbr8zrmMZmk5CP6UxX7wp",
  "key26": "3N3w4qx4xFYSz17kMhuJF3uxTG827JbbMpHfurHtPsYTguViGnXwVtxrUbxUPkQAtjND4QAhNTiP7rgmi2aSWFwh",
  "key27": "2CeojUAPQWwHdjTgm2ouGFJFQdk8Y4bFLzdr1dfBRtXfcW4hCMduuKDwZwB7B6bxvj9sd7Hqy2gQ7AW7qD3Z6wRv",
  "key28": "2htzGvWJFiJVn8G9MnTCJkufMVD14zuyGPUGwCMAiAVnSGapVgoezxHu63LvFbF7b9qNxTxSdusxRPH1VKfXHHeo",
  "key29": "34TqTorpwG3eC7YNT5x69mTRoX8fY1tQMbko7E7Jnqz6dJ9UwUZo9Li4SaztP4BeCbfVFHeD8pT5s5r67pq6GYqi"
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
