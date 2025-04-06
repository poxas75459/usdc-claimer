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
    "3Y8XrdBynEw6wiVmxxWDAndCGcrBuZEFFWyH8hvPXffcJSF6dtxaEDohgcMfqNWH84hgEr78Kpd3qixTP3C78X8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q21DCjmd1YjtJQTb7TKphCxWj98WisCXT7NB92yWf5oS5mEuYSdEgeCEKSvCFWtWE6qgZXNcDSr27n7Y8yupgbx",
  "key1": "5Bx968iTnB6NF6sDQfJVKDej9YFSrs6ySU8ENJcZquwKJB8rW9Acc79Tmyuz3soMabWBBpxB7NCUgK8Smq6sxWxU",
  "key2": "F1m27He6DJB4jE4aiSRrsWD2R6tpMJUNQWCMg9byUZeGWxkos8rtpaza9bR112eCmxWkyx2qim7KMS3MuUfMJJd",
  "key3": "35Qa5JW5GgPGvEGuZWGuf2aWTrDhMTD7PsYrdEWEKUMgNhFnCaUeAteRnduTb38B9sjD498y94JcQbgSSpsU8mvE",
  "key4": "5aiqoXh2Ep1kHzfkL8d1Xd7fWJGaNRzwt2wfKCZSrfwxz6DBQcZJDi8eAwdGuFcSyruu6ecKnskaZgGU8FGs4vEj",
  "key5": "5E6htq2tXK1SF7fA3Kn4G1n4uHnCYUNzhKaAcgPdi8j7hvQ8CHFSpFVFwoLZkK7srWAX3UiKFCvjjhT1zD8mKws9",
  "key6": "4atJLrhqsQD83Y3aV5EwFciD2vbBysddjfHcB2k1upmT6db441oPEWe3Y9w6wnFahvbLNC5E5BdcEG7ojdEMf1Q2",
  "key7": "5g544f3kHaWqUozg6oscsqwbpKSreGHw1Xv2u8V9DP9yYjP8UgA5Vyqw4kT8DFym1KbS1juEjz9ZfmKYqzwZhDHP",
  "key8": "5iHH8kT3aaTTe2yn3nmeLKWHdJkxgRWenUvtr5BfaqrvtqyXPaYuCAbUqTTh5YawVSgqzVMRkyzjbA4DPTvb1Y5J",
  "key9": "3TXCbJPE6pnWf1QVodPb6b4rThCCQHGFQwMdLLvBcANy11TswkWZagoQ55mnsswBdPMaAw2Z8wZe4rzACkMUAo7W",
  "key10": "65Qj5saZmycCrPquqbFeJmoKyn8ZDjd3xQoD9cz6WSsEwYSLJQzzLXK9dyScEKitDa3gWFwedu3L1LfD2g7nZNZG",
  "key11": "2dy6dSQ2ckXYjB8xTY9G4wSNUoVucmFoGhQb7FAKGKQCGTxougUmQueeWAiAYZ1bXkxEpMseo8sFgG5AhmRw7Cun",
  "key12": "3FVfWhvANWmEEqZZZB2gjPUvChn1yursu8Wv3Dq2tooMp2Z58dBN9Q8Q4rbjs9y74FP3NxBKK8mkVedtTFxBJdQN",
  "key13": "2fJm7cBknkTnh8pCLJLhbcAsauLbHqow9FrfMRegYTwNb36h4sF935Z8G48Fk9AqsbYpdMXaWE6ui97d6HfcmCKz",
  "key14": "3Ee2h5hPpjdF9sCugwi7dQT7p7hxJUcusG16Lva9mh12J1b2SeBN2sEfyWSsJZXRmysUMmQPJrJUo6zP9ZPaspm7",
  "key15": "tXVHicMGaMmPyS9GPwAUsGN4aeyqfJHqHxjbJMpHqvMHmgb9VM8NJFiwCSFz4DWUcGLxcyVoKAU5XWajuJzg9Rx",
  "key16": "82ARhSyxnvtuLCDq4UwyDoraKV9KtGA6FG7th4Cgjv4oZhr5TAvrLHjVEEDqccBb2wJE62Bo3Fz17B4KLxr1n13",
  "key17": "5YoC1eZ8Av9HedBUphvXMePsRMEV9NShCchaWcXs4tbebco8EfXMU6ksybNujDLQMi2xWQLawDduTGCnzbWq3Wwi",
  "key18": "fDxtHn8QTgRPXmasq69kmbhVfJewXT4cWTHx1Ldk8wbaH7cgqgAYF6FU2ho7aSXfEK6z5kvnF1E3ETFbpYEGPif",
  "key19": "5MbvK3mGkdxdiVhciv62379Pe2qJqBYFKdV9WffMreSSB6VcHpCb2PTpsPciWq6PgtzkiCuuSMCVvnhS8xAWfpCv",
  "key20": "54hfxUKMMgZowWnqoj79rSzLrtN5CU3zYaF2U9EXwn31wTiavxjeitTyiqBjYH7bCyPihnjjeC28i9WkcPza1gKo",
  "key21": "3w7nRgwjMEL7zzTmbTg6vT7SdwYrJCVbYupytZE4k1ata2pxmuow2wRNM6pi1GmntZ8Wd5HB9nH7m3PYuVzq37ag",
  "key22": "431iGwoKUUbj1dJ4xtB2htNQVBvBS1jFigE9cVziXX3jd9Cmtsc3CQvU7x5C6TuaDf4L4L2sw3AcGUtVJUBoY1Qi",
  "key23": "2s7qGBf5HxTEefo6GGC7PtxHJoa64itnaBTTQZ5Z7RftuXQWQLxXZM3C4kvtSGnWGpKuTQMh96iHhKiWVuA2zuzr",
  "key24": "53owLKy8vh5WvxoKdKsSGkD4HrcsrCK5ujpUCv7SZddEnifqyPFd8YwxvDSPJo72VXQ85uqikfsT1p79DkhEArun",
  "key25": "Z7rvxHPvS9a6H763pa1RyBxeBZuoSZYQgbRR9B5YnHV1nGGEtFPnFyfwkMymw1CEcftm5BeYSVYuDvDTky867sP",
  "key26": "qLRxnxNPzDVcUQjzJqnbkhbLXxfnPCGHBhCNHqr3QgUigok2diHCN7fhtZ49ii4NydCkoRvtoomsM49jnr2KYdT",
  "key27": "5UiiwmPXxyyq3TNHpobdiEPfnUKVVnQxeujmF1pPL9QpWpCCuQbNo1YsiXSHt1QAgQuVfFWjN6gRYDn3YNhCpCNh",
  "key28": "34S4BpiKfxWPFCjgVSAVDSwGknz2vTzs4yer8y7H2CjK4Amm1kWMq2jFL9Lo1tUzKyHrViu9bp2JA4B7Kzt18eQm",
  "key29": "5FWhLe72DQXCjwvUCaKFBpP3bZueVjxAHoXwQkaVaLvAA5QKHJYrTzdUJsoxUv6oyuRc3BVfyZHXnv81uYi1eivM",
  "key30": "tt9iRpG3GnmaYkJo6D3gfytW69etw4hYSY1mf3jVjQRfy8yUBRPu1vedc6Bea33dESrCH3wDqXRgSwFzjqATC8F",
  "key31": "3bnf7LgkYqRGBNRv5QJoVtXfMRxNjLUgeLh5EP6iAwzJnQEP2yECAoEBGWinh5jQG9PPTV8HwtFoArL9gjGCXLnt",
  "key32": "2TKCjgFcGccEd5jWRxBvgTSqbfPCDGwsvqLNSg2sGG7ZCsMvDypLG2jqRtcKW1ET49buuDw6ToerzwptXUtuubGm",
  "key33": "2cKrnPtzM4DuN1BVZZtvV7aYZGoD6hkM9mChgta8rZ4NSTyCrbcdJgkpLhsvyjtbdyAyQEwFMfdo3unKc7bZQU2w",
  "key34": "2pJNfZqTfoWSkXc7qjef2opyQsrVnitCSnjkukEF3JB8ECLTCTFs2KhTbippQ8ZWLmsoywVZ7FCrojGDnSnNJbJN",
  "key35": "4bRdQjNhQBfGrEcFYVxFKEQUi8ci3F8HEJz512Hw6mzmCV7pZKKjpfbqfBv1uDmuEQf8k2AZ7MCao14oHknfuGUS",
  "key36": "2c5f9cmZoP9v4p9fcYpir4hNRcPZf3UDbNdDhNqoBg7w3A4fv9TCm3S9U2zR7NmUsDakFA3g5d1Sh5QnPTuPUo4o",
  "key37": "4RFQaDVU2yrtvjK5to1RS4kTq2xoTyjUeNDEeWdFUSBrRezuBMZXZZCq6mXGi2rFZ7XsU8k2vEaPcw8jmi8HkqKP",
  "key38": "5tV22CMEDp3tJkNnq89ai2wJoEbe7Dyyx8mAL7A6Qfjvtxe43ytd8XqwzrVahJ9wg8krhnruQBgQpx7mnfjYvrTU"
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
