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
    "3C5navciu7N7CS9rpZkVjWWre9XCfzDo7schbKZQFZrcFJuoRf35Afs6oE3XTFbacK3cEqLuKndNFw28Pe51gSWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wuf3AJBeiRaSjUYQyA74BYDCvFVLPxavhZt5MHwxrph1dS28h1Wu9Pp1fFT8WPbGXq8c8d2YMncR5EwMC63KiKR",
  "key1": "4zG8XCpvH5vUdHCgLBToNa5HZaBi2JrvmQFNQ5ymfWDJ2Ccwew9pri2iiU4tUptxZstKBWtxP78GoRoUWzEHsu5g",
  "key2": "54cSwhDt5S4u79VgXjWjHSqekxancwcyc4jzuC9AjPsPsesEfZkBTVBjwQQsv7rmTpgeowfkYML272ffZN8rQpdg",
  "key3": "4yJ4rVnXgFfA45cSoUW4g3EZ8JSDiavTQwS1EYwX2tLc3JronbrAMaMJCUutmxBtzUXjTDHEfk4fByf1RbHzgVxW",
  "key4": "49NcCePJTUzfEavMdVB1FT694eaMzGJxd4o92LqtAtB4AapATaexHo6JcmZz38rKaag5KRy2Y4fPVn1sHqPKE1Xh",
  "key5": "4YAKW6fdXEfpLcYyeqC6DAuTxyxAgjUVcUKrRVNKo1QKk3JyPBdrnmWt7cszBBaq4o7Son2ANDBfmaPZDDQDaYiX",
  "key6": "5gzGcqwnuDms6EnVbmWrgVArSKdPCT5xC6x76eQTCkNDVdEwBKCYUiyADsAD9SStLETEoGpmhuAKmevDUUi1Zo87",
  "key7": "3eQrSUcy8WqUM3tLWgx7VzTdne3TyBPprysesZuZ72HVb6N8S5EYQTTz8VMvgoNawJmNW2svxjhHmQmmtmiwbxr6",
  "key8": "5J37ikTwMAweAJJ1QfjgyS7VRJXSQb94FysuqA6MpNd52bCYnsq8Nv2tRcRo222fofo2Gr5A2n23NZezuAtrdS6m",
  "key9": "2y2g1BqGUQa8GT3VCZkB8gWCjt3yaMMzkt7dLSuNNsSZmf85fUuYZktxx9Pqv5AX4FwmLBtzEcZSMvUZ4EhmA8Gx",
  "key10": "4vJJwWCG8UJsBGrmDM1cYXiMXT6U9RhvkN7gguDZ3UeeGKXc72Z18mhKPboeipTRM3y9yXpTucV5KAeMmJAkCuVo",
  "key11": "29X7ZwDUnHc4c9A7kpV42122FTWmS5eTuBrJtbeE1ZtwXDbJKuoQ4cnKj8S9gjM2rNEtzN7ZVThtCSZJ5XAN5FWK",
  "key12": "4gXXfHNJTJK3ibbGWZNR7CPKyygsCB8JvFvweN37za3r1CDG32D96MhqNLTFfAyv4i6XoAyHqHDbJFAqbexNURGr",
  "key13": "5pY7CzLsb9iYGekSShmUyQSMXSbZiqcUMUVDHH2KLqFm2ESWxPvTuJan4ozat3CU1FJGGRtxjuBxd3AiDSS9ff1L",
  "key14": "5exPmKAMLQU54AZMUen1iC7K8aWLs3CaHW4n5ujqLt7Pa5p4zptQpdeFjhkNuRa9AFBhZ2q42pK2RYvBa2RYGThq",
  "key15": "23ZEd8u3ha8AXyw8AnvUzEdqzp57BwVaktU5jDEhGVio9Ti1EfeRyv8j3k5dmku3Tiu27F5YsYMWSBLEYosuSFpQ",
  "key16": "Fav5hMsxoeiJB2HUWooNP3h8Ln63By4Kc1Z6h3auRqpmXgqPTa4aEHmLZaSC4kgWy7JNZMLGLiYfDYqa7EXQq46",
  "key17": "56FtXePtNHjdgP1MJfHdaX4yLvViNd59PsrxLHKveynHX8sxHCzFkDvRiGcMHkcY1ZDA7AAbsvnEoijYwnxwGFGj",
  "key18": "3qZFp54r5BpfrUtKRXE9rSCgq8voDcAwRbMNHT5x2SE7TWCadcTmEupkPzpsNCoQfWTkjNL1rFRYUfCKiVQmLrDc",
  "key19": "3vYLgsr5tWCF57xBZDf64bTbBdrUJb6JdsSvn9q6Gx93K69KNzQhyhaCfHeLRA7ReVJGf9Gv6ypbRmAEQhNdciBH",
  "key20": "26VvAKTbCjxjC8zMQw1ZrcBc2ooxcE7Rj8MaNZLKxM35M5k1ktvxxqjHBupJQCsnrG6CaNfLaNWQqHKW35wBBfWM",
  "key21": "4XwMRK4KmwmCKK5Z3F6Ugy7Psaydmczrs6gy4614axDwKjddn9nsrJUNgVQt8GuzhoBccAb38YUipg5JE5e24f4Z",
  "key22": "4tzytmTAssc5P7KdTxMqV2uDBfADha26c7upFGtZ4M98AshBkA9mKTyVriJvVWMd9mSu9wmsNuxUvhbbQomADNJM",
  "key23": "58moQY7HissWavL2aW334qCGb3WtGNBKQVUy5Y6kE8ZiCbbB7mF7VDq5exV5zNLt1L3RRaUs8q28k4XRUvHF3UxB",
  "key24": "557G5E7pqszeDU9UeLVcuoyb9e4XrwKEBBcexfKNbEboQuuRSDV3RravRner7da9r3FS9HQ5ye2o5x1ty5uPdRHu",
  "key25": "4RH7hdJdyuYGgUhiZDHjY5Ey3VDc65T7hw11zaQbDanTpHVmQmUYynHXJRBfVaZj3gUcuRk26X6VddBn5GwWJ6XS",
  "key26": "3ZVeSrKYULu7XeyC7pCXb5KGSsKqzrGVrwe3fxp1NMvC3ew76hxKaTHqQqjHnkpDQg37PbE2kC3mFYu4X6daH9nr",
  "key27": "5QhbKG1XefA9dzxL6pHiRkmPGQuw3iiWbyRyFg1A6CXuCGoeJ1AJmNU5Q55v6akDwfhHwDbsBdUTMCks9RNSS3Hg",
  "key28": "43S1oZLzBBskktCfu95dqKcFccG1btfnMaXkp5Bemad72Zb2eyyEKipt4tGmcSVW1UqRXitFwtJBLmRnNr5uNQ6D",
  "key29": "4oBi8MKpHTT8GeKzTitgyNq5znDYamLQkjaq73R1nRx8mKuQonJc1qA1cYkvLvQqS1VtPWoxoRuPrWCZWziaw23P",
  "key30": "5DowVjYSPwBJ3hcpSH3TGwPN2Yf9QDzish8uskR5dqcxAJBKWesZMkc9s4mjmmCSBYdfddxQGAYSYycGfSfEJ64e",
  "key31": "X2yZDUCs2cLc5NYPhuAU3m6MV6ktZZVyccbNFu71ieDWPcUDXag4nM5uRGief82pXZByvej4LeCUgRFUZn7VHCd",
  "key32": "4arwRpGGZ3gDz5vrCAe2vkVan89rYBFBUqJFJ5Au2YqNHWqfj2TMvkcBeBWtYp111vwCa5zMFp12P7YzuYXKAdjJ",
  "key33": "35oaCf7VShzvMkRJCYSUW5g8mpaiwyTv4kfyFyqd4a3nhbvd8w7HGPrPRxtrqiMgRg64YnUtXmsQvmA3EH5b9H6g",
  "key34": "1Q4RTPS81jkCFsDp2kpDADpCUPW6UgbezH8mtMjJ9FvnFvy7mqHk5Tf5oSyMJtD7SARfEHswASDJUYPQXU3knk9",
  "key35": "4PActJAhUMsW1CnQ4CfWipAVfhN9APY9ARRoNvsZhh9kdzKoXk8cwcMasebP9zSoQdpTtpzTnGjAC9bB4c9SeAiH",
  "key36": "36CDVBJvjj3PDAuYoXjRb8AacevQUuNEwSZpHP4kk5G37tbkwBinquGfkh549e85QDgSzkrW2mB5tKhrXCur1YPc",
  "key37": "pTwMRxanv3at31gdBKQcM8DryKEbqB3fDEiUUztdUUB9xaf8FDftnUWMDBL2zoQNdh5WvataeJNuxYg9havf4ew",
  "key38": "2xW6mpDbxVTTrD8P4wBEUtzVfnhA2UmZzAo1g5crwTcotMUyBpNiTEEekuofMmiZ8KCC9siVA8LPrCpaC3cVvY6Y",
  "key39": "54WNTnhVmKShWpknng1VDh349qsrgY6AuQVaJZKAPYCYB2Nn2bJ8eYZyyUiCPrdiHBzxCCPjS2ojXs2eHvkE5Ja3"
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
