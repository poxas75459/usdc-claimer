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
    "2BNkmXNsT8W9dq818Y69iTeoWy7RFDBdQUk77ihQtpBUdD6M69HxZ3wGSam1tCvfWTeZ96ne4AM2XnWoLRmeEHQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AkoVaDUpv5W93rLKeHJc9HFwg8ceGqhnSQExXHdXVLvPRRYpBvdkdGqmvnx1192u8EkvG6gkEow8L3oQMq4kKnc",
  "key1": "WHwqX1Bj3k95Ekp4e4G5ZHbyRwLUHNbTmo7LGoG4ztWW56j6CKmKD6ugNPm6NPpjDR9HmW64xuvUcaagXo2opsC",
  "key2": "xkKWsxXbfzXS16eUYnu8xzuV2uP61vsp3FB76EBgHzqnaywASHEtnf6eDatHsLPY1gfDiS57CH6Z7S9spwUT3Jm",
  "key3": "5xhm8mqdhStoTDrZYBTeAdgM9Y5nbmhQ7sxww5M5LVPbyjYChmxLn7MjaNzzFyZhSKKxrYRLR4ubsLrfSohpGqas",
  "key4": "2HL85DwzJCw9qwEg5e7REYUKRZWdvubZzGc2YWyDhKr6MjGt8PBtjYziped6fpaAwZSKXcGZKQup7e8YhmeMLVY1",
  "key5": "3jeBDQ6whUpjCyWQeBeoiqNVYimXVYxKWC5EWDzL7WvKdztK5FbrtA1AC8jamHDUS7JQMPUiycvCV7KdHCRsUe9t",
  "key6": "5w1QtfWDt9AtP2EgzuwHJBHz9oWyxdufNY7SWNFXDK2L9hT835DP311jE1Xsi2yGy7DRKR2natUbemsZorRvNJsk",
  "key7": "44fM4KW3MXtngpajmvrK3FJ2BCYuxhaPysogQWvqz6VALdXaY6ffB5FajGkqyzhGrdDmkZpenEJQph1CvXVBBNUf",
  "key8": "hnimxMeR3zAiaLK8BiGHw6ZPAekumdab8c2eH95K8e3SwDehhzjCmmREaKU5ST5ZWygNwCManGDPnezzJ3JBRPN",
  "key9": "5uHGTxrbgjwZUt3SzyzERKCvZwbs9p5o7cJvtwux7yZEe7MWqMygUimNPbC38rsoEMRrKh8Zu6o3X8EjaN5uMckR",
  "key10": "56a1yLNgbS57TTkMnhrsTgtGkkNWj6uwKdpoARhDbwpEKyWaJYtG8h1sGpFT4rannEivgJvbAKKikYJU4B5vi2W8",
  "key11": "5cUZVpST7qChpPFjpbnxtgaYHxnWx6sfgPaQozv28QrDYmxdChM56nwkpdShjMVm7QBHqVFmFeM3GnmroXytzHJm",
  "key12": "fFsNgVGe9YQvedbCQfdyvrDEMV5ZKFgbLsE1ynoJN79sHFkiB9ZBFK5S3pQZXTU3WiUr1JguszYAwDy89uZpJFD",
  "key13": "n5bH8ucbh2EgqxmsPYEiGs7tvNhyA7UR1hpqP7xHAGMwA4JMGpdQSX6y8nU3u7Achb7Fvi2a94Qz3kkExC843h2",
  "key14": "3uVDkoLg1TgbgnHRDBE6Yp1ALDsScdSPE1w3i9u2RvWot1v4g3TMSP7J4dxZE7pFUbB8RpeyJUFNVEzHFZU3deEB",
  "key15": "p8x6PBHSnVFarcXZGHLdRQrXWyVXG43C728Y1RuETtujtcsTq7bE32EaE45EPDNgiePGFzM6PALKHc32sUmde4B",
  "key16": "X6np4awpwE5iHhrSowmbFG3a5HBoj46YB9qimEd9J1zivhmcz9TooowvHVcNhfJNC3KsS1zyGeEkFiiQWjeKJ8v",
  "key17": "4t6asFwGhq3zYqtHo1fQveY6xdC94qp7NjVVXCwU5LfmX5ZnJz6sJFWEqaD1z1Bq9SpRc8VaqCwV1mf4nWeFw7CG",
  "key18": "4EkaTDqfXGHZuGzqh9PxUHudWKYcvLJ17TBSBvZ15WcJv4YcSySv9ZUSyvBWtxbgyUBDC1NEsdcVBCCwAKJUVzDp",
  "key19": "5GyoVQSZwFgE5L4SeTCawMd6G36F1muR5PDdVkuw52JAi9BPH65YGg4J8awK3uc6Zr8yMg2F1rhL2RHr64WP9his",
  "key20": "3sb7HFmm6YPYArUsnhRGXmJVXfB3iBaLvLQ8od9pWqFtKxarDnJ4nNfF4Z5SAkVvMhsvrp28qrUDkXsNwV3n4YDk",
  "key21": "wMUWttGZdZhUwA93bPmd3HxHD94sGGVov9aLMp1WcHL7Wr8wcVHjCMffk1JZjoa8x9JZqi1KaVZUcJUpnCaek7c",
  "key22": "5U5r2NfdDjFabnJhzChh4a3wtDziewV9rBizWf3FbnaerWkNhdYKspLF7kqmqQHS35GeSwv67janPvaVfY2rSFBX",
  "key23": "46Q8oVVMaEBhma2MV3Deo1H8dG1u5resauseUJ5JQccUNnBhpQ91NTRdanbZvgunppNwUEZNRY6HxJDm1dcUUdBA",
  "key24": "4YDhAJm6wWA7DeftVn5Y2HY8QybRhHkuxbL1ZXYFdfGoEPARzo8A4Xo8fv5UPtm6vkiqceMUqnQJtfmGRTwi4ARQ",
  "key25": "zmswi5DjyTUpCQRYEnkNEWkzjYeeFBRPxaN3NzrroZGtoUMtTvc448zSiRge1Ns9XkFY1j9QpN18PZSnJrUJoJo",
  "key26": "2AiY9YnvdCyDvt9rqKHjCvxWizUwWhrHP34CuBiV5EKiNvRKW28FFqRCLp5KoRnD2rxLuP7BHsjV8uw7yXMhDCWi",
  "key27": "3DSQnsCGQ2ti1K6xrAA83vJKKV9mJonyHNTexoRXAr12DATjKuPLADiFKPP7ZJyHaSrwybC62TWj7kD9L39RohEn",
  "key28": "5h7sj4usUtZDmZWhZFodEdxJhxgkWa3huorMfVbvsK5x99h4LtRyDx6mGYFMbWHjbMSWDQfANG83eqiGVhnfJLrr",
  "key29": "dR8MqCgpnHDejX7r38RbMtm6H2EVuaQmjHyJCsWHYWjA5B2Z4u8bRchauCK3J3XYsy37QS9zeXDKQzUs8feqFvN",
  "key30": "3xbuSSHF3VKsCcGRshyjYe6GsGk6NevjDjmbJoCPiQHzSrhpWFiEkz5ynQ212MT7LWC6gfS1LSG4bWViZmAdzyRS",
  "key31": "5Q2MV4VcweKX2uENCkU8eTpnK2bVgHT9ysfid1snNJBRSHcggzCyGCodRmKEe7PrnB4986LpHzYfZFHRa2cyXjdT",
  "key32": "3Z1srvq16Jw2cnrqTjEN3RKn6zf3G8uv6FqoZR8u93PwZxV1FSRjCrXzwWLe1rYHLsXmYedpfZpQwoUXkeLgGuso",
  "key33": "5iiTKXY1T3gTSnCJeuTKVqWt3ofbo134dB368qwyCq5CQ3bbKBgYEePhqvvXHF5ytowUPUSWTsJ6Q63xQmoN4rAJ",
  "key34": "45D9L2ykiiRS8yG7G88y1Aob7CDGSPv5N8iAxPbKXh1cSP4KjmBJ37bq5VQB4DGkpGqQ7zPMGLgfS37GYTkzwEEu",
  "key35": "48hEV1ZKqFeQPgkQxBsGiCGpAszxam98eVFodjDrmaxWpqc4rgo6MDfLaDtkKCHLFqrd7rbGR4t1CzvkdCsZVQex",
  "key36": "2h6fCZp3zDZtGRzN9qPtkjcbuYv3QcaRgJcRAbFZfcbLYdP8KUZsYA9geSZYy5p5G9a5xDsDdX4CAUuam6q8HhRk",
  "key37": "FqbstuXSHUSd2CVV9qXzymYBVWJNcgs7Jza2Nd3F4SPkEAvjDbpCf4rBJNdfHjBZUvphwNRvaq7Mw8HpEqW63Ud",
  "key38": "4Hm8mwzLDuEJydt1WhGY7i1WvjiyXqUZozJuptAhmXhtjKV1GYLSUHekmpRUKUtvkPgD1p2AbgoroZFkiDmgLyvC",
  "key39": "4XZKh64rWR11FtFNnT5Hkd6rfeqbphJfFByrytTujhszH4XjK5sSomqE1iUMKK3Mt7deQZHYNkjCqQAjPQqovKLd",
  "key40": "3BRWCEgCtBpb3dCUE7ibdTk8qQ7ULLLw4PWdgwrouVdPC7Go1gyt97NuzPwLRaVDtxCosZoKkjku7NyKyws4YPAC",
  "key41": "bnPkQ7FW6FpFEZEfQyGCdhGzjZP7r5gaStPFz9vBVzAcHazMdnsK641LMKVwqAGTSuRvT3uRxmo48959KNHTxPs",
  "key42": "4zHACYcoQNp6wDDqi6JkaCYTeoaMCESnheztU1HFnCTJtkgJ5gXMn8hTiXuH19KXsiPJXF5PB3svJugsHhK7n5f6"
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
