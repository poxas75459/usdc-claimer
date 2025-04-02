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
    "9JvUHJfM9Q1ziBCPVRtsiKWCiuQBpnfrtNaZGNBfo7mYcVPzhWrPUwX1XQMubCVSeM3aKyMynSX2WGoNLjV2z7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PzZEmaxmbiUzEN89chnVunSyuxtwdmo5vwkZKTxBeSSngEMDtFi5izTNjVLYmAz2DNb1FSwSJv5koY2buqS6NaA",
  "key1": "3DeWoZDBs5aF29xFvF9vPEVKduC9J3x5Pi2BCRA4qAyThq83uQp3WaG3TczMXiMg9U47Cw74S6Ev5LwcxLszJiQJ",
  "key2": "f5giyLx4jZNAPiHKrx242AzgkQPwHteAL1eSLo2vGba5Rf2HKYT5vLA68pZFA1q3cBT553aseQnzPGPyrE54gfo",
  "key3": "4ogYiMEesX5YcsyudZLsyNS87MaFTqt3pqUbY1x4eAw91nodbtFNCVMA4fG2m4fHEyF1qn3HjFpEpbEQQ84AYTiX",
  "key4": "7g6R6uBkfzdaMFHAGxAtbSfa18C9bQ7dpsvNqGNfbkeLXQzG4SdsSPC9gXdewLu9eeKaVXvvjePwSeq5hyNT1aq",
  "key5": "A9k97R7DbDhqeRyKdXkHCvDVJTM1oATMqDg5pdB6Lz1vvaXZerVq93omo9FtCf4XwiRNY7ERWx5YKeB3afxJnRq",
  "key6": "5ctAqQcrq42NEdN4NJ6KqvN5CycSKa9nE5dMXNyQD3wHxQL3XEKs2rgxehf4aJVMSQXsvipwjbD9P5dpqAfemQ8S",
  "key7": "486246QA2gBbfK3Z7Wsn9wnm5KgYnuvupxRxmU82vXXkj67jBumMan9WBLH56Z6jR3gwDDj2ehUG24x1hSSXeLQg",
  "key8": "3fj4n3qyRzeoX5wMeLtYDCKUUm9KsK742Emvz7jNEsJpUkuSPZM3RvnPBc6rt9imMm4hhfAw9Jq4RA6JaNrd4vQu",
  "key9": "2MY7HJCZXjazcBvyJsTnwyutq1CJezfSbmsUjuuCB8ayJbxpULXX2zKhrR6avdx8pBMnGFpN6iJSRXd5DBSyf2hE",
  "key10": "5hBcBUynCxkWDMQFe9dwsBqvHrhU6Rpq2U9FmhgapmsgZuzoBSJxKAq7jmeZ2n7MWXsiJpPMebNqAcR72oUHQje9",
  "key11": "2PkFwHT4HnS3PjxZJSJYfMvUzFrJ76Aruu9tLBaYkSM5JLgpBvsMUtFHqvToZ3PxzKe7Xz7RDWfYXZCKBzxcdT2V",
  "key12": "FBJAY33Ddyx3DCvRXRQ4DYA6nCdDsMr8PpijR3FsAmJEVxseq7S4wyQUxpYAXCsqJSDhC8AyZkrRMLbYbR5xjzS",
  "key13": "5QFdLvdv6Try9UX7v9woBWSsG4aPbgwPrfSrr7aZHybMwv62kcnXDUCmzcCr1gZBz3yNNKnAvQwuBUDpVkBmbHTh",
  "key14": "3oyyNzb5W78uMfzFeyZ4CAyK63tBMp8DWB3f1rndkS94UGoQHJYff6VaNcGAELU9SqNTidmmi2oR3jKc8tA4CLLK",
  "key15": "5r8FN7Mp2p2qRonQco2msuZAVJGbEBEizBdoZKrMgkPhdcPtVrQXMnEMNPaqVKMg71pniVegZByYTkfKPX78KyNi",
  "key16": "5sLHbukQNcQwi9TJZdoRF8uakEYfe3J6WfWLKJfdQDrkqouY6gAB4Lq8NhpM7aJMZrzG4RtraE2djhL2gf1sFS2U",
  "key17": "3VTvwP8ZRfNhzBCb32VKcdXsn3WfvhWNrpA7rKMTFsuLqy2Yk9C8E2wXMaRNb9o6fgFQzjiwrs8Nk1QEmuzJDxcw",
  "key18": "4Y46WjfBHq3MC8ybH4He91X6pMcdkm6t248afZsUhQmWbPkSCD7RPB3nYjXQUXK6WKiwPi2S1cgu34ZfmiW2FzHM",
  "key19": "3e26bMYvKr2CeuSG6RpjuCf4GaL7RJ6g7vwLJTxzxJGz4hZSBg6PteB5NTzVVb3vRVCh6EHE4spxKjbi9MnRBeYq",
  "key20": "3Df4czKSSgqAfmVVHTZ5t8EF7MCsrGQSagt3b83tEGxkFKn3N4X86JbzpGTSbFsjxLxaCup6n9UBeT8E7vzm7TdA",
  "key21": "4PHLVpYyz7biajX7eBnvLnX9T7YPqKfAHs5w1EWuzmkHc4P4xWUp9dcayssSJdtiVXiE3a4ZmEGUqCNmVoKTN6j",
  "key22": "4qqc1m2Z6YgifvRzzSPbgYTPnsSpxrXYcxJQddeXhkPgVhUoJtn3wFAMLhtdLvoJp2gcAGCmTfreXWZtzibYRU2q",
  "key23": "4tcEWtPYPNBaVCWoqi68Jh66eoZtkLz4bfE7LGLdUzZfidnkFnCLmWBSboHbE2zTtsuyrrvFsX68pCwL1ojpDh53",
  "key24": "awVzbhmpi5MCRP8snK1wEZLgEiaSvM7VToNtykJkkneyp6Jh8D3xG1x6NQJpc9aWfgxCgWq3c2U66z8rPC6TGQP",
  "key25": "4EmmBE5UN5bdYdnParjqeLt5QgAH9bvgJ1F3W9VLM2TCYM7sGjV77BctKSgCrxpLHbjzmFg4CSTKjxH4rXcNWR5m",
  "key26": "5x1GYqw3EpD9JqapCkJatKkz4oXgZzDpZyrtw9132HkSpVkNjZxvdH4SQWhWd6j65BN4LmxKwhcd2AH6R3WTVkGz",
  "key27": "3oYx2ijZ4yNTv946N5aSvP3V1DZL5sRko2t3mxepeMP9LcdjgQ71sXENweMVxrdgsd8iDcmrbb91nDYxhwZSjnKu",
  "key28": "51TzTi1P7LUwK3hw5yJ6KHCDuCn3yjWD91qKamoELkthVi26iB6imkCYeHX4knP9Gv3vTb9RBzDyP3pFTwzmyKpL",
  "key29": "3sfo2j2T7QJfQ3ThQB8KWrDBn2mSAjvTP8dejVW7u2Kr3UZqFbbyktes8eegNn2nG7uRcv78bUP6YRx2yAJuxtr2",
  "key30": "5oZPi3BZgaVJ1NrKibMTaufFrabqKaQUGMnryqWUCWnvAauEoXtUNYR9eDJayLkWNtH42QZfJMsRGA1WG3yWLzTM",
  "key31": "4e7hGUGqK1nGaAwbEuomReKYqYgeTPmfom8y53sPTMqK9gHvSS8cJxPAW2RvB4stZDYpNekkYV3VXXjsCyjpvb1e",
  "key32": "5MZKom58VBXE9HBhradiUGDa1NZgC8gJn8UoAwEP8FNHbLstrTgmjupmjPRtWaNnniv5Av3FjEJqc5PdrZfR8aNu",
  "key33": "ShkUyM47hQNTLzPu8ehi6GwU5gwz2XQrxWNBbYxWuCLDNcDKkCMAsPuhict8WpSmPVjQfYBTvhabCK2HA18pAjC",
  "key34": "XiACTafj1234cUzQTQLXQ6r6F6dJTcuZXw9fp4WoMq4uTqtf3ETvEHFzRhjJ1XoXN3532RL8Ap3jkN6zb9dmJYk",
  "key35": "5aWqxWFnYbNXVGk2AL5vXwUyhfp92QmxKpajFBg36zBqhuifJtoQy9pnBT1QvFEgHwxg4KtPaFnqhUicCBXpB3e",
  "key36": "si99g1aUGbjAakbEzqHXcArbijFEubPz93anqJBexeMiYKnYfmhMx41pdxgn7MJbgxfEiynxwjiFyvrMrCUReRK",
  "key37": "4nZWzk4ssdZbpBASs3g6WX5EUcJJhkM5fVyxw5N9SFGJS6hFjE8QMz3PRvgirrwL7YqtZkaDGjidXKLaamJFBRLk",
  "key38": "HwafhjXTthpgkEzqzrXKyhhxwBG2iKLntFxzq3LUik2cX8Jqkv5PhaxRfswwZPPj3Ft69z9h3HzoH3WZWBzE5HS",
  "key39": "3pwMdqqVksoNMmYRtDKSmsuqHVuYoodQEUgZci27SpRpXnbKCbeERmHtmbr8Nw1HYnMXj4XD2QD1poXHqPepTArp",
  "key40": "4FRhpRujm3uD5kSWb3DETJuP9CXSFdRPjkits8Hcj435E2VLQPBNTEYgzadBbZoTSXxhqX1GWZ4pgBVBZDu16V6C",
  "key41": "2UZc5rEA2UV1xdgaxWyMTy62ja63bXdHNrc9EmNfJj44HqEbvFdhKGrgwiJrstcVnw6855QmtsHFutGmqXMj8eeJ",
  "key42": "5WqHe1BXnsN7Xi21btvUkuXrhP6CJr4z1bR2VEYs82Vfq7H7DgM2RewvH9BAzZhyoDvhkrCyKtDRKDKSeLNP4hum",
  "key43": "5t67PGd9VV3s2Q64TgGRZ1EiN3UzMK8eHp7ea1FXwMSMfGbA4SNboeHt4JrGV6W2K1mbdJn4nSVjjRhKPFbywUJt",
  "key44": "3k7nPTLBrVHzXvwtuxLhLDLDU7qLFe8dWbDFHJ1Jd5qHhGVhTAScfd8THAasC2JR1C3hUro7aUfJSPfdHG5YbYvk",
  "key45": "TteymJaFtLBdgLQptiESWdTuZf4utxBCHdDqGjxo7ZweTia9f764VqUDWBsniR8mBpjjMbMD9RWEjqMFdDGuVAZ",
  "key46": "X5dowEgNfUfcYAcfvswnAjgQyhpLXqxx5qzxSeGWAmnu7tAynmQARDxk5hoeEab8QhjePnXQ6dWkBorjLUdNxLx",
  "key47": "3B696fpouRVMG9DKEdKmw4w5GJxwJxAXU81wxJnxYFKTB4YDsaSWujZhWpVYPD5wepGZx3fG5wz8dFkaYrLJjYKj",
  "key48": "44wJeeGi1pS9smw6JistSDTEsJfwqmW6875uZaJbEfh7vR1Hy2hiZdJYYsK8WZhBKu2KyT2ifAda4f6KS98h7ToH",
  "key49": "57hiLudb6nrCtYeBuq3qSzSLBi9KXKPhrqULq4HUUpFFnMWFHpT5CELAZi459S2niHH8JDTDZVjjEj93cniw6paV"
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
