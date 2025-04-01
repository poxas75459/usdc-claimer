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
    "5gbiTvy9Y2hAzULcJBzwQBaayHvpDvivYH9waRoNqL4H6XKcV3kC4XcPFjUfWkntLSD7XgQfWQdVEoSHmZDemxDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64qmXA1HURN9D1KUc9wFAsZriNQcrkikg4iBDS259pG6qJ3U3BYy4HDfR8pEubFbLdszjfxz9bCmeewtLMje4tf6",
  "key1": "LhhNhGUDECDqfzRVtbxnqSwjW6LjWCkf6PA14bitNq3HFpuvusnnxDZDxTbTMJZEzHT6eD2tkQwZMGkEkbdhAsB",
  "key2": "bCAZkDbyL7HxzptPZ1wMdwip9tVgWwL2iYD5UCmpaGnsPArCPbMpVzy2cYSDZqPezucgyUhRndfyVU7ivLcfKrx",
  "key3": "52CPFWR747fzn6onW8G2GZi4sTqUxk3j2QPfgzQWrfkDBksB6WbBLAk5ZSsfX735m6GKcKDJF4pg1eEE3T8Gc1ji",
  "key4": "VGkvP1AtD7Ds5S9nNHhK8UtNQ7hhY859z441h1517THkEwTH24a8WzFu97aMsvmnwGJYmYKQ4UPwWuPsUvkRHeS",
  "key5": "3onhFe4cFp6GLPYimMxqYkTu31aEkQYF61U3kRHstCfznsTYPH9R6EH9m5dTLFZ2Jgxj97a9KV6XVPKkBXE5V7qw",
  "key6": "v4NX8FBXY5bcE9zpxDtPK7RkENdz6N3tFkkff4JGvhst5fynFppB41Fp6g8uRtt1B4ZNzTFDAs4wXZsUobqd15a",
  "key7": "3aX1torY8xJ6HT49Y1kVEeT4v8WGWzG3LuWLpSnMLRG5964P5xhgPzqTvzUkst9nrXACcCr6K8FVyFZt4oByiS8k",
  "key8": "2oXiwUXRt1zoVcF56G8GhHNdBKdjJR962NTK3GuArDouVRUBb4KAqKrwN8wyJ39TAPjBSafrhAtBoEDqY35r7vHJ",
  "key9": "4PxqQPALFq9q988AbdmzMWQAd4ju6Qmj7gXYTXPRkDvNJLMh9aK7h2CArxL2e3aSkdeyud7FjcMyb9ZMhhRaQJAU",
  "key10": "4tHVqLXUMap18KXUCsb76JueYguDQfoNLqg8L9CA27hFowWiaZ79W2fyDVv4GdWL1mF1t5ECwBWNpFRSHK3Rwv3t",
  "key11": "K2kQ5sHkEeT8d3HAjth8krauw6gt2d9tpKLqjDUUTeCVcTm6VEkFb9XF56nuXAXUQ6BwY5Eu23FUGqTjkYDSf2j",
  "key12": "4mPeeezjqNveEC9aTidcRhmcWCfr7byK1ChfoEsPe8GrKaSsi2LZoTWSeuX56Ros5FwK9tgYmbAMQZe4BfZufc2L",
  "key13": "4zZLf1aRyTqKHEqc2ULScgqDz3EtNbmtUiXcgKDyZEDFGKvhZkZtPfwrKAPUd2Ed4ovRffHvcEnyivpwTzqB92qW",
  "key14": "zeHdoY4vHMst7bPZWnPuohFfQEK2eWf1tBp5VFwj7RGjpvJMxnUGykXEKKxasjZD1mams6KCGkhHRmjx3qpckmY",
  "key15": "4Pd6sShBHHJgnPqPMEjAJxGgV6yK2qESh8BvSUzjbjq66eZ1utoAjq8WRm9jUE24huxmhFouByvoYjxHckKdvTqZ",
  "key16": "2fFRaW4BqmScWZN5HQj9BV5qxt2y7XUseQTvdynE44xakrrbnQ5bra31rBVa6XH6mKPi2DFEBRZfM6nY7fUJnasZ",
  "key17": "4ni8cTY5QjC7G3UEmqWZcFFAwLUN4T2BXGD3DEx4svyZbidJrmiyyVk4QvcLohMMXZXXg31ayeoYMP3aTPmmQ3GX",
  "key18": "5ezCHax6X3cQsTERd9yusPnCZCQ9krudCywnn8gPfLvRZyWRZ1bGMcbvSDjauTLpKnvH3pMCmqCyEG4ebRoLWZqa",
  "key19": "5P94pUQngkCepU1WkA4cRJR4L6rmzG4oouqC6VpkWp7J7SgeHZKdjDhoHLynMAVxpX1S5VHELHNmDfUx1TkjrM7q",
  "key20": "4VzdsJcRoVP3M7HEBcRUNMxGusVQhJ7xs5ozYPsS3M5Hp6Wz6dqDfwREfFdyjCpY5jRHYNVfd2rL6ZVV7s82EcXt",
  "key21": "nazfWeX8gpcmAyUTHmRxmmn5eRXFTGPj2dsv3nCa5c3LQYtNuzhxvjM1sperHaA861xyajTJm3YhnMx9Am5WskS",
  "key22": "4uHddAs2znBcUC9rCYswHgrwvMj2pAQggXk1DtvEftcdTKjFX2H675358FGNtiDTEMCSk6of9bE2V1wouSVGSXA3",
  "key23": "5YN3EPLLkQNjZFBBd5XPDzY16yQKsMp2ZPYRyCsNavxhs9EMC99RAiWLEnapzP24yjPyQLdeAiYELyS4smT6tg7r",
  "key24": "29MWd5uJybsUatBZcKWj2jzzT1dao4Sy4wZEhddxbmzgxafQcqeWdHrsERTaFLrkWR45yays3zvPB2EvSYNNdhxM",
  "key25": "5TZktZMJ6gBgm4qBygwWq8PNV1GZ1hNqGjPXH2z59KEHGpwAPgmKYy4xnMCMqWvyJecT3NZ9QtPe5vnPtKcSo9XN",
  "key26": "5utYEnMYpVBS8vX4W7MMAqZwXwaHS1gvn2WuWiR1f4cgKoacCjJ6hqrWHGNC2Bpg12ziwrRJKaxpLmPSzC9ZEPDZ",
  "key27": "5fjZV6V4iUncMuss3WDWAtFxD8J8wSeuQTnHtRBCJUSiGFPfGnKak5C7ZkTAJcjaGejDz593oKcrJPdYbJ1mvWs",
  "key28": "hABj1B9Fyrus87LcPBPR6mf6HPr7wGjmntSfePcFp3JzgbP5xSAQX16czbF9SBw9WJ6ZUAhfbh8nMDwVgUjvjeD",
  "key29": "4Dwtj1NoaczJhBF6zP8hCSbDXTP3sVADyvpPLWDirTu5BA7UxM1JLaJcqcSsWG3drTww5wB4UM4NZnchTuVzt3w4",
  "key30": "4WDG3eXu3dPQriF9VEUyFrwJMPCZ7fLPV5nKncEowUPfioHZNvTGwNBceLXvNxp49QbF9hdN832b1gyWBmU2oBEh",
  "key31": "2bTiHNXAJsEzRxmBJRqxmKkwRCEcWkxtdjtDdQGTZdWbyJy3xKoknPpCwrXTRCiCBMu4A2Bt8XEkoFmmq6CNuaaM",
  "key32": "524mDPXsC1FP8NH976gQdzRmqDdkcuZkVUL7DJBKBfACD3qrgsPb3vFdResKUTLyGfbKyjc7tvHuXia22SZoSAfA",
  "key33": "6noBhcp2khfqqvoyGHmon8ZbFD1aphas71B6FzVkd7MthRZ3Mh8ikHGfnjQsLLvvi6ccHSfkEL46nM5KV7Psjdv",
  "key34": "33oTr6XQv3GWsDSgdrqR66iB8TwLTLFQ6kjZRrnjkEnX2qEVorSz5J78YqYLKy23JCL6MxJvqNpQydmkqyL88xbG",
  "key35": "2JrwmTJ5CRYBnRt3KdeusYojCjdmkkbEo9q5dbbksae9yX6Uge4xEqxZ5vLV9PDP28nNjfYkX9wMNtBqCTh3NSpf",
  "key36": "34CCeaDBxUiVUF6EoZ9yvFsC2JLkFb1SE4UBCxn54P1WzChxse4xvGtp24PdvM2k8YuQruQL8AUPxcuKLapAjiw1",
  "key37": "5g89wGubaJTbpnUmM7UpPVnuyZscAmmZDzFiZFpQgiUTKXkEezpZ8xni1d7dSvvKCjFdZ275jr7X3wH83dVNS7z9",
  "key38": "4J8yx2mxEqqwG7vvAFkmZVXYJm7FcGbmoQx9GhvsDsSUMh3cZVYpsBWWyJrtRofAAtY43u2fhgPC2oivbS2AiEdM",
  "key39": "3vErQHnUQfpjvHet8jFKAQdWUJxv7GrPrb6LHVbeaDU3boFUAJZ1C6JeTwwSM1QKadqGdnKVG8D6HfAHuTB1T6vk",
  "key40": "NR9MXVshoESUBA6kYKHfkiH4KUHQxyamSFVsxzszYmUqX4QgSd3tUrRzJH1JeJVcUtJ4EndNAZBCRzPruGkCqAT",
  "key41": "2C18KNjPtQQHRMmUQAPNVAYdyG7NVtueXAigNDkzvA27RCCyhPHxrRVRbjnaUpagijjgAkAfJB3AqMC6NGbaH67g",
  "key42": "5f51Z3FxRQDeu7FGLjNaF8EUvgkvQHe2UymfNGrLr2Y4NEBDM8DXrwxHBDnDgEmGhq9qySvcigLF5oCrtzPcMqCc"
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
