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
    "eUCFGJfQuXEGwajZF8Qeq9tn5vGSuLcPzV8U5iupM7hnEv4F94cKe6R21CtWDXuefxuGPKXHM6hQ4oFmiGJPPVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vE49R7hA7XnB6xAAb7Qds4gFX7by1JyXg4pkfd3KN9eHV6XcWDPyWeAgE5xwKBA8RkEDvoH4nQcFWdqVYo1BRkJ",
  "key1": "5Fzn8BQZF8GqCzmqTSSzu2eiVKnb1r8owr1wdVS735KFhpPLHiNhEMSk8uuog4bHM268kVxb3jb33LqmhnHUK4FB",
  "key2": "3ko3znFtdPsAJgQw143KzoHQTACxWYaKzuPiF1vPexj5NXnVYUE8WZzCPZ4zMP79YEkcg53JT6Saf2NqBz74YmDW",
  "key3": "5Ns6En4pArbJB5HG7kxqJisYf35WNm5vxQwoeaw6LwmScG4QGstdQbCThmFC7wCjbYdVthaYaFb153uzrQwRuC3N",
  "key4": "37NvsDVGkenNYJMGongAFaypw5CAHs3TCEEiEnhPaY2jA9Uuji3AKvKgVTfNd1Hb9TC88nbsysYbM65PzDmUK2Bb",
  "key5": "3ehB4dQAPLxmnQkWdKcsd4NJDhBezhttJ7QjFGd3Cma8mh2qyM8q4yUy7ZJq24ofsCP1VfM3akQVzqb2fzspqxci",
  "key6": "3k592gM7KP7yVPUc7cpkHvR6Y8XcwNhW6gQ9cjSXzbdNNtqCgE9VDMAsyToMsTEbnLc9UfvNqZTh2GSDDgm1ZKu1",
  "key7": "Kdg63FLs3GKnLsJXApTxvHsSKavaedjfWYx8CwgzMeZ7tY1rSGdqq5hFFvCmjDz4j2uoXiQ7wH5ur4GmUcubVd5",
  "key8": "24PjaAMAZ7aZVNM2BqYBMNsdv99su5ZxwYUvwYdt9xJZNmGA7GLRkoFM2cuWLwjRJRKUep1h5u7FxMFBsJRVCr4M",
  "key9": "3yooz3wku61hkV1rjhsGfNW1pGYVgnzRRMXw37S2K4URo9cNNva7ZsnbW1pDQwn5kx6BcBGXZKQn4x13o45HKqT6",
  "key10": "TKG42eKdAqtDi4RDmMBmG3UMASD1FHMoWTM7HMuhdDkog5H57dPZQJuvdjop3dwattkwv7zmmuFBmo5tkWZAc9F",
  "key11": "4KVdxXkkPvddfzrEC3rPPop6oTEuQMezZUAFnY9JsV54Y5TVfdGawmmi7oHiNR1VRUnCGPwSwsMnFxWbDhq5c2re",
  "key12": "4wVe9GVqbUocQ7oThYRB46aTsmzrPbjiMCMMEwrREpSNQfSm1rXdtc1zZjUJuMZSJXd1ihh8D5vZvmi5TrzbCMq",
  "key13": "4zVgL5RngD45fMHYRmKxM2GEieh9tNuLFQagTSjmXtygg1w3MqkPR9qHiHpKvEVPnfeoKNbzuirjLmTtuk4adg8e",
  "key14": "5CakDNPsKNMeBMsV5BLedZgaehW5YQCPxZXf4PeBUjgW4N8ASfJybu4XqfBftTjcM5kQgj8dm1cxQwHjE1cRxPkc",
  "key15": "KZYejERn65PT9yLYpLjGfcrAnmWVPG9SfSmakDfceE2tr1bBuy6vZzngQSiNW7uBV6hytysQ4Ggy84TxSX9a9kE",
  "key16": "Q1YkrU8Vd2FrrasUJsFcjxKhdrPa5zj7uKy8qdfM2DsutChoQmp4iKw2qopxjXba4ErQrTgZkMjscRkNVwUbPSm",
  "key17": "gkNzAiqkdmXjYF9Jm3U6A98k99ktfQ4qoJkQQgws8BmgunT6kY8UuRcYvieek9v8eevCwWepBH6XBbKp4iUHPoh",
  "key18": "3EMHJ33ALccnEiQEKDPmegBtC2KJ2MEKAVNH3bA1zrngw3yXKVeH6r94j3QAxKWVgWWCKFnYRu5hxvYxbGmdRv5f",
  "key19": "5tSXzRzpYNuwYyiH27CTXS7SwMg1EcgisvyS7pSrVxjhTsHWrSi4eEu1y2kP3B5fBY9K4NqTDwfHYwmY441svPge",
  "key20": "2HvJqf8mqAEP5uYY8pGL89xELDJPTR3WcFJFGXWYs6oJr5UvEneCJSBKojZ16cNESf2rM4R7Vg4Q94MZe15jANS5",
  "key21": "2A4yEEauoQfM2HTqHAXbRSNsfAtpWZ9mVJxLawgsgbMM4aBBGGeGRdKQKKQoyVpcDZgq4YqpMdiko4Lft19uiJPQ",
  "key22": "4RyfLEqKDsZQjXj3hiPgsBEAfSUrvyzvsYhguNmRJeZw7FBoYckcsGe61W85eMWdRs6yaao2PGzxdjjTuyoovcQs",
  "key23": "3Q5CXVjtLQD7pfuYCf67EmsSKHYobw472trPLzrsBWHNhxQgbiazbGU6XSqdKmiG7QcMWzYxn79CcE7EehFdajwb",
  "key24": "4GZEgEW3WJ5yNuD5mCEQocT9WXALyCHpH4LDwLYcyB8xR2Ypzwc8NiQcEFx5jMm171AmFwFHATcWNYRdfgqEYzmF",
  "key25": "2yDzNBARo5z5GftDg7QEnaDFGTitWm8KXSKE1TW4b3Rk6EgcU7L3DELCzezC7WNKgR83Tav26eZ699x1b5yFmKmk",
  "key26": "5YYf6aC7K1HF6vihwUJPxFANbBeSC8E8fWf9yL2uHTKvBZVBWn7fkKdRjWmu62cqx8TX4Mje5JCP7MrcZBu9v3Ph",
  "key27": "5auKywZ4QojmoEksXchpX4UTfRuTgFi8nqKZJKusBoSwLPqBHK5HrFBAHHFw9QtS6J7jmSBPanpnqGAVfoQkZVBx",
  "key28": "2RVnGRvzbp1YGjmkCxm3HqTPhhbiDKPFnHqXkYDYMFkGMUBPHSfG4FZKoman89ukJa4HPuJLA2rNqB9bxAHra1RY",
  "key29": "4aiCaGB91ugaGzANb9qbwsbPXUKkaq3FJq3Tdq7JX37SLcLgjBtGBCLB22mhzmAd5H4kPtBTZuS5g3u6SsBczhqZ",
  "key30": "2i2hF2pCyV9Jou7MTqL3NYLpVn7QjVyGxXiw96MJoUAyu2bcQSfB4b88yJ3uqxrX6VPfNiGUvhX4nJKB8N3H3tW5",
  "key31": "5e4HwNw2Pkmv45CBXr5XRddctEoJ9D8JL9LMdJBe4ooyJgto1a7WWBSduwvFRGbQiXQDoAs54KcYHENXzTJtk1Kh",
  "key32": "382CJWLc78wED93LAh92SMtXoNvn28nC9ddWVPMHQ1b2XUDpkN6VxC5YN3g8hcGMaqPoExmiZMzknb2M6ZqJJMys",
  "key33": "498DU6SXBJcfZdTjzjtEg69KNjVt5a9js56VhZp4ikSFMZoKdyvSdGWoiMg47UuXT9P4M5WqUW8bc2VnULr4K79K",
  "key34": "MdUaAdJTKQrsftQyx2A3FQ6zKZtV9aT3uyv2Ab9TB7rXLyGUSJtx385y64RdH8rUs4gSg7c6FSoPVHm75z78KYQ",
  "key35": "2sKJmDRuecesfdt98Y8kbSuAXMCa4av2H29Xy4UZYtaZikXUpovdHNSv3PYBusdWBBxbJr891hBrFZokqA43RG9q",
  "key36": "5VRBL25ouLDj6zCAVsKD2z64z9JTrfbC7YRug3LoEbb5hZV8psG3s5dszYyfKHCVCmqW4qEvz22sfxNKW4GWGHLQ"
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
