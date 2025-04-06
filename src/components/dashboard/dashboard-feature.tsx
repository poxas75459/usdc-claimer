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
    "4AXkuYhtiGYgbpfZgYHpjF1UTeHZ9LgKR6mSguvskKm8uCgnZN5xaSszTSpKqDbwvaqFDQEkD9BTSKZMvRZEmLh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vwwggbYCt2kwP64E9mzcXzkcqRX8MroLqUAFBDyJYgWtAPQ6LKkSfQXZmpjcyUVRXWunLCRmo4vaQsFWyrTFGWU",
  "key1": "Ec38UrXYQnMQYFEHtTFBEixEFdYybw5RXc8FL6ow29g6xQLSj1Ac1cJCGa2W6eyYzh6CKeVcut4aUT47FyBebCx",
  "key2": "4mPutHDLTasTVzwqGdF6QyCPr8BTkwZvaVRhA3EnSPpQerdFskXHbqiexFr4AKuo7eXD7mwNcFtGZhnYDfuX8Upz",
  "key3": "jdMieP9Um3kzdFjW5euQMq269tiZmLdcxWz8MqRvjb5RWhXZP3WtiH7sJJHcxd8Bmb3X8fT4Fr9uAfYv3wSp1f8",
  "key4": "PsYT6RDmsj36HN8fRgrn4VmSE2T9sTLjQrJikrRw9FjTg5yJhzps1pjJF71EMAgfAF7N8ET69kDcuVubgkiE9uG",
  "key5": "zzmzy9ZQ3ArE6qRG2JJBNdXKu1asLPPvA6YX6SMDhWW7Rfk5hGueBdsscxrZZub6zzrpAhVRRvxiKG21Z7wMvRT",
  "key6": "3EbQYnXMwvvky331YPL1Q3wHaB6U4NsAJ7SHRJzLHuWj788Fy1hZg7GqTwTn8uqoGmcNc5es9PxDLGpoQz3mUwiE",
  "key7": "4a9MJjuqnSEsUFWGkptB9W1sU1gBQyucHLguMb9t62yu7NNC3LF3nHFBrw2uHaGspCkbrWHVb7J4raYq3dBTLk2h",
  "key8": "2krX4gL33qnnue6ShWf8MGYyWB2SG3VoETVneMHTgHqxXNA1VgJQZj232RjJXipQX49M61YyJ4ijiPQSPmWBh39s",
  "key9": "tRRSftfeYbnDqJWjYdrGqhhUmgBgCRL8oAGN3zNPp9oY5JkDfpcf71CzD9YDJX259QUhwHQgPMvcYd9soQcPwsV",
  "key10": "5HCkDMKjWiZLm9bhAGWkwcHFF1F7KF1px8SGFHGw8wJcvQuQ6cxkLdVRS9ZJ2ZnvNfHfj4ojA59WYTtRqLWWTp7a",
  "key11": "VR4h6vvnPJdW15dwAczizcdcLsc1bJadfMaXp4gAFvequbU18HjJKFg7sG6nM8VsMcW6VtujobDFpsdfvPLhmZg",
  "key12": "2U9L4nPjHEGDdZZnT1qws5ZRaMbZHE6fyjHtkbwLSRoN1VHZ5nCPeYHK9ejYWtaZRUctvc2w4TQ5xFGqHzK7XpC8",
  "key13": "3fqT5tti1hoN49zgn3n3rywgKy2uiXEyRDQWiVFT3zvp3XwSqgKuYTMDsV9EJWoCryy8XzaUw4y15qSFi1ATsJXi",
  "key14": "59ujLy3vUbT5JqnNsN7RGoCZKowuxiCFpDvN1DRcVfBPgffc8rR91LcH21RnxuiqnSomWSxNpJM4m4adFhxJryuw",
  "key15": "2uKxpz6mrwXAesxxRiiUGZMNu3HGJ6of1heEB4SZphF1vMP6Rii4EyMSJhU2Hy1pddCYXL9vXmZr9URa2rsqm9qG",
  "key16": "34FY4xYJwLF8CBTHbq28nPNMxpvCV1rxGvLiVXh2C7uyewwspuriWF5gVBx9eYX3JzkEZD7998SUeevZ19RDw3Wo",
  "key17": "5fAx2ydKXsVkcZd2p3yhhAJE2CcSSvgJ52QtLaCnnLBj897ZRB4YVXp2dkRrHYJGRPkYKfPCh8pBH9yGFi9GeF3j",
  "key18": "4GLnMVZNFZ2cMugvub9fjLAjYqNK9N61PN65HkmR5ZMz7YeVdunBmDCEVBm9HMeuYQwNvyXSdSWYgDjP5ZPt4fsR",
  "key19": "27Hx7zjxAKU9dE7pBL2KMXzXxkZw9ndKjjrP2aaVCFW5Gi827crbDGC3dQtb7Lo7AMjnSEwRnaETxtqdCq8vwmej",
  "key20": "3NeHMhBNrp4zhBNGgrgyzw69yguKo25nNmXX6k7Gy9s9BhfZurbq5rMNfv25WjrvowCzdPMD688oaBfcL8jJD8JD",
  "key21": "5bPVzc3HemFGv5e9Mm9YcNTqqgcU5CHqH7rdfYP27HWYj1kihrSNL1oLHbN5AR3bVZrP88y5wU923LhabwNf97B3",
  "key22": "GG1WybVSgFkhSPhGxLqbrhETB1zJmZ3ZyX1UNfw2VxNchnoxX5r9Q9rhYAm2ZKuqiaesVcB1n6Vbdv8UwvHnBCY",
  "key23": "4HBSvHUuSqJkyp1F3BybcBcG5sjJD7QPS7SosmbXENxMku8wAxZZkphb1zJViwXp2jFEWeB4GRK4e6XG9zCkVi5T",
  "key24": "2Uskyed5YfdyijhMEL4kM1J11KzYd8ckpstYjzxdMYXxeV8N85aBu52Z4jaUS8npLdBrxp1r57n1GNvK3dNQ72qm",
  "key25": "2CN6mesQhzyJvJ3bEMHNPaeVjaQSCTBNTotcXPsCKM961Ykp28FyhKcZkfKV2ti8qLJvm25s4ZNpSxfKV9SMd5GN",
  "key26": "43Hbm85Rc44ztTT8NHaL73C4oxAPL7RY156g7Wop8GvfFgNbiu8tgU6V3H2TSTU472HfSNRSM9ruHs46WKfLxcgP",
  "key27": "5zxceH4WGYzFgsUnaGuYtuVBCitxJ32TiLmnV39vZBM2o63VdhABo8tUP42rMFLvMsCZNMJSjkWHM3PExPqDLdtk",
  "key28": "Any1WvntjDm7hXkJmf9NK4g82149wWW9UGtLbNeQdck3Khnso65TFxZdAKbmYNnT9DziZBRh7HWAAAzhFiG9w4r",
  "key29": "4HWZdAR95cskSxjfSWZmDpbtNaSbwX2iHioVWS3M9zMjRZG4YDNUnrJUz4V94mdrQ3YcGY5rUxy7m1CCFLSUXzdz",
  "key30": "32zp6SoRoEuHpb8UX6SghYD4u9pQ4WWBh5HshvgANyobBFCCe4fezVP5f1fHEdVj9yY5qeFYxmTTmw4MApwRoJUi",
  "key31": "3Gtv1R5e63LWhqhZCEiNbTEqz3TPbhaRVkxzGQqqvjkD2YkTj9KkX2aJ5XXPp8DAyVU8UB29EUhzf2e5gpJaPeLJ",
  "key32": "3uB8gsEbmEzySuMqkeADC1pEjB6pFvT4QGR7TAnsEhuyvfEu1hgAntDm9SRjcdenPe5Kti6QDmTccDPmCxsijt3L",
  "key33": "3hhVCxifYnVenGUnKSJcwmeiyzKTkxmumGgoSKM4pxHPUfvsAG3NTXDgm3PdXtLiu9uLaZKGyGn5nh1SJ8pYiFjs",
  "key34": "4VTCEeKVxTLm4LuGuiK23T8TSeajQWsAzfEAw5AqQV7J8wbYD95oJnNZ5s9p1GSgL9LDuedUiwSs3J7Dib9r8Eft",
  "key35": "4jbxUHsyVxMEE2pqFsEGHHVChgS5euq6ezQRniXjzQ51Kb2b9aSrqFwVgy5ZoSDXczAi767viYdSLr3A5axpQkhQ",
  "key36": "4LdZrtwYN1sB9hxWFeaTVphJMC9tPtGvHd7Cgu4C4bHcntJTJCdhRM81hCEKkC2Zrx8LFcSqrKgZA8F5WWPN4yw4",
  "key37": "3ikxVZay8fv3hDvKUJfSTvJLYudBegNfNjd4q4GNbGmDeSZea7dgZKPvkkM9qrnbRf1ok52hLBkMuirnpGNEsSaL",
  "key38": "25w3xFajRK8mut8hvay5qLfiFW24FJrtPz9F7yW5fTc5cGacJRfBDvvGrhhfoY1hazf4hBk2fqJHm61UmGQLbJEo",
  "key39": "3PJbD1bi9XQybW7JfoiKDFJALL5K7soABSjqXA8EiujuEJDbdxkP2yN8vM5kjnPYMLLqvDfWCB2t69UBLwFrJqTT",
  "key40": "5yYthNmeNXapfAdvhasyHBTx8AmjzPcv1XE9Az7hFZTQ6JEf1qGmueSvqz8PmGCG7QovbG5RPcde8dZGwts4a3kF",
  "key41": "2jH8TEcw7vNsgYzHW622Fh54PNfrMeiavjxS1WcHShb32rp4JJtquznV5frtrK8WEpn31BTCZpgwRmvVTPiHPfhs",
  "key42": "5P4rG3KHmmTXvGu1eynyia1teWKQaEJVHkyEXh5yRzEGq5KTvCjzk1MsbfR7fpu6z1Ssy1BhDawYLN11narSMSj9",
  "key43": "FZh3db8E1LHqbL5XzBxv7FfRxHW3Ju37AaUcg4FntErRrWG1f66TMKFVVoBYGv3CL3XjvgbTMPVGbvsSE29BdrU",
  "key44": "67CrfLum2Fx4FrZ3C7frAUMw5Ttk4ynmnnqTaR23muMbuVmyLMVPDzzipmTniHmiG7TX9VJDtEJitBChLqMyahPB",
  "key45": "4pFgpJNsWHihWQvfCbBANxcVy33sGP1XpPGZQAwbXcuFiySodhcV4F3ibPmjBDs4j8q2pVgwVdKFcWtsNxie85qc"
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
