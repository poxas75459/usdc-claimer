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
    "5KUWqXTTwHjeXnUJhMaZAC8nPpudDXtBazgo83PE8oZ6oGc9dSmLZg66vnVc6YFtDFF23a55zVPiMZgd8ResArwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJicwJPXNrWhNwCwtPZCt3jyCoej2csYoSquY7yZoexQWpJozho2Q8km3sKJpnbDyxn4miAXUZWPmm5hQ9K6DVf",
  "key1": "3VapdtTvG9AZyLhgiUYZyCAaiyGy8QnVMD4F1u6fqzA8kx5c5PMg3ZadiaCASpBZA3QkhS1i1RZiTJhbXWZuNzAY",
  "key2": "5mfDmorVS1J2hZCjQwDKwzPMe4C7iggmDpPchqcD6y3gM9RwDr18URYcJG6qkm6acQQmk9UyoSMtB7XQBd2NUXK",
  "key3": "2h1HnjpqEZtqB6piz9gBGJ5xFuHrqY4WWyXcrCzHeTvY8FKeWGDYDPdKSumnzhv9ZX71EWaDCrwnML5uD4gHHimT",
  "key4": "2NzetuNeMVcqcbHpArevUREjK5Zkf8NZCs6gD8TyV6wrjdfPho4cHdGnenPKk3nYmKrJEcokw1BMD3jKjqNstJno",
  "key5": "FxLWM4DZv43aXE6mgFPMEsoHd9qBE2TxMfHADY2cRuMWkX8xoTqTXmKtzerR5U4LGBLx6FkCBzKbgSRqyrDaxUF",
  "key6": "3jGMXDCzJXzCA6Xga6dkCX6Rg5S8um2taqrYWN2hskG3D5oLxSivQRFZLAzAAoXmgQjrDbLb6s1kRhYCzoS3w7sc",
  "key7": "2yUXgk8aikUKkpM1DrYmtTWKYNTfkXLXgBzjUskPQJn2SSTEWjzBL2Sj7iWe3CUBBArEpkKsn7p2P1b3TSkT8sFp",
  "key8": "4AWSnXja7yNHcqoHEKyUJFK8fnRUeqScHSJh2pwG6F5ZQWG1rupezPXGw1TeQ28MUEW1n1UP92jFGq7hCv6WgtAt",
  "key9": "5TgDJWYAUiA2uhQT23vKpUtHzmSUJpmwoJz8iQap8nqCcfum5f1v91q1KVfHRoHjJhKCBbUCSTs6WrdjSUci2eDb",
  "key10": "67EvPyuajbUubzqpdNtiZdP4Zcjef5zD632PEj5hFahL3WkuWMBAJiJ6PtS9fcjBdBYnzbNQmjyYuV3vaow4CTwF",
  "key11": "pBxAqhwPP2KFoCUE4EbuQ2fjWZFZVR3rujRJMMuZE3N4msbrV51vF8UNnqs3TEZfX97HCytfW6mfsYHCmVJMsJF",
  "key12": "ehWyKeXk5nRS6Tr53grLSQnENR1jaSKDKQXDZMwerv9uoycWbmZskGZGMxYETeXLkdEPcVdh4UrTnLTVNPh5VvS",
  "key13": "MfDk28kqswcbVQJyXcai61XseuKDwD3xBLMQ5AoePJ4sbupNFqQBa5q6kowb4jr3riWgsMXHW9nTssgPURW4859",
  "key14": "2ZMCRz4StaCSE9x2TpMH3Ltm3gQUWDWkCJwNwbBxmEB581d2rShByMNYV5uJbuTvnoehi3eQgGTkuwko14YNgp5k",
  "key15": "5LhJBdYFXFP3xU2A19vKwdopxtNRLGy3VwtZm5fA3vSBzvgkmiYqZb1hHa7QaQuvQk6PAU8JeG1ugbUL8mfzUu5V",
  "key16": "2BsHWAdJibYjuqbCTctiMKfPgBM9ncyTyrHoCoVxJPVn6vbiVTS1sZeP5ZAJ1ewHQDzac77G3iMBP3KqsypqAoJ1",
  "key17": "3XwejtrKwfopHLv1A43RqV8Jhk9LaJwRnTJazMiCUhqzBooeou5qjL3M5Q54xSkt5BWABHccceAvv24sxLFD5jgM",
  "key18": "3RRZ555vKtEmcuo9HnRpb4No7d2eBYsYt95Kbci44pHbF6oBrCZwidaHUfUyh62j61Py58CRoCgR3AQBuvheQk5W",
  "key19": "5eKqJMtSi5TVCSkeTsqDaKQDsN1irrRxXtCkxbDhnE4ifQk581td7j1nysuH6jWrpUkuvMuu39dhj8SFhJG3y9d9",
  "key20": "5HRzfnT5MnMTy2r4JujKByYehRaVBiScve8b5ZFyKCPnM8N8W3k98411yu9waYaotmWa8LH4pW1sETs8UonNVxLa",
  "key21": "4VLPTc7TH8sXWH4AH18T6tXcYhGj3WASpyqXWkfnUddH2k953tZjhgTV6otvZjw5cs656eMfQQqjUjHkUwajVb1w",
  "key22": "3qFfx28F86dxnyN2JyRYmSgtqnCb5a57cUpyTbz8RfAHS1Foq2PPF5kYRgaU3tY8ZVWA173YBWjcv3Nk1SXpbwVU",
  "key23": "5VrUrQjf3rcmGbGrvhsnLF2urCLpPVwc73omPWLZpaCx3gZhw9HnUFS2k7sWHCtQNva4YA47WVaCuR7Tf79VXTF2",
  "key24": "4TG593WoqWDzYJxotEtrri1fV8waxt6iyCnZzcHp1oFegLf8QM4NhmjoauxmCoEGvDA4W4snEZqUbXtPxqcY2ty",
  "key25": "3WnSebY6Jy7iZQJzFGTz1thceRaRRuvAR15Nm78oZiS4trd31gqEXTgEWuPJiftQj1ZDKUou7BHLCbkJfFbv1iJC",
  "key26": "5Ly1uPWHXA6SCT1crVkZQWSn8EkL9BdVpG3MJeTkhf6fjGSwsPgiRD7C52jsPnQxxJyP2jgjnQRuHAWuVuC4tJNH",
  "key27": "dBPs2KbgcD8x66oPtDg6YtiVDTKHMgRm8fv1eDMaQGCuHqEbC1HzY8fJLgb6ZN41n45RPKdAxa9ekYktpoRFp99",
  "key28": "56FwJBPMh6qDKFTF8YWkMN84cuFKDT1cwBWEaJFE6bb7kcoqTgzXySR96JSh8cQAngtNYyzUMjq5RCqws7ecxrVe",
  "key29": "5TYsnb8HxryrV2mHCBQvD9yqwb9gmgJwBqEhsyQenYXQYFX72v4oku7o9jsnHA41vXqYn7mgDQE64aawRgaMyCew",
  "key30": "3wUhmFda3ezLrapTjPwNFA7yWQJpgqCwQw5r3ByGXgdf2XGqfHmkFKVyecWXsmxak1q9KHKcqqwHjJ3iC1GovHj2",
  "key31": "J64yxjd1PWZrCBE2QFzMEiaANMvPudQfZVHmaEqpmVJhPiyquVwvUdNCbMzpyNgunUZen5QGuZWLgCVsJYHzHUk",
  "key32": "5qQPtQhda7k315Uc2DiZ1jBwyU9zGJ5LJmbSgDmugAkWt8WrMBGnZ8Ufpc8Ra7gupUqVnz2cZVb5QvV5bZjsdzbC",
  "key33": "2yiuPZARADmPTKuMgK4tjjXT1rUrfQPN2w62jWQsQZ9ep6irjF23A7Eho8JVKKZB413tHGSEqJMRwHy9LVC2s9ne",
  "key34": "5LwgmCMHao9Hto4JHFPtsBodM1bbXvhSDVfhwQ4CK9CEo51mgJ6cpaeBxTYHAhZRBv4mSwQnvr5ifSBX4mxHSKu5",
  "key35": "4jnJpLGA4F1QA6ku8DMZA8GDsAbhT1h4HenpUd2h3CamKAUdGN9b76vo5RyjbHYhFHq6n8hSXvTUCQ9wMfEV4onn",
  "key36": "3cgWVdvSveTmbCGvkQrLqPWeUqBFkjy1gfzz86SQiMAyk6wJXJYPiAvYcwtPNtrAbueYbaSpEUV3jrbSawxaMFh6"
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
