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
    "26UpF8PtAQaK8DWuJJSAnvwYZLcZzGttAELEkN6d9bNgrhoYDPLiUTyjRkTJrf86dm6Qn2yjPw5VtabBqv3cit4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NnaNLL9q6MKWjYXunKppRUeaHruP78tmWE6RaomF8Bcu3bNSLJhSaxhRJEZvSjejB8BezV51BpKgkeWpRBxBo8",
  "key1": "4LJ9uDFyaq9EttHRWN3r1GuZeUkVQoyem9uY8vMktZ1KuftP82MACmkknQZbzkN7Dq7jjDPY7qdszWSVNpxSK7YW",
  "key2": "SHJNEVe3dVtpVMUpjqYCGbJT3YpPU3DEiyR3o86Zk5RXaWiNXF3pCKCQLdwVZQTRo29Abr2e5pTPL4ZKAedgLUL",
  "key3": "mt76v91yNe4xoryYDJrG7vq25XzjdpwoUyjfgWJZtECSzoNwrnneuKPjbCZApo1sCECB3JpfqN35x3WFBmfQT67",
  "key4": "3LidJCeuxHEESUD3Xsn2PYdJVrajm2fEwwgiZjDew7fKk2iTYkHNgHYhwBPPMZja4vrw48QrQFTrEhmWjRqWnpJ8",
  "key5": "62VpmEbzY1HsK6rfUxPnhhSrRzX98JFHJKLt1kLPQPNNzdje7TFM5tZQ4wVUTNJi3qJzp2NyEm2b5rEEzdn1ygxH",
  "key6": "XHKTGeQXQoWQDKBuTMxoXKZ66kE1XgTorGqPgKjUTwbMa1bDCiXNxKDFqyMh9BcNeBekbRmE8ZSNkJehY8Pq8fK",
  "key7": "3gKMSnajgnJsxpoTusbWpZdmsH9tTaqa9BXLwAFfQ7yn7osApe59hkSGdKAQntAf2oL7aiXcDgeU843yg1XwuwVw",
  "key8": "5Xc1sUDjZuMtD7F41zsj92wPGGFT9rZEiasWu5uDZsESaVDbrsG7cTHV4NkZi1GNFZe3aQNscGZVdjmptBDtUJTR",
  "key9": "3RXoviAwK2ZnHy768g7wjadq3QyQUSHBSDU1yqAn3D93QWBYGfM2rLQ6whzA8qp3nbf6PH9DCpVJytx25hYoU7Em",
  "key10": "2Z8wcosK9KWMjSmuEEbLf6yT9fC8NxbVUTWn76pBTdvmkowQ54Tx5tGVTtD9N4v9qUsTsy3Ws3GhEw5LHjYzefjF",
  "key11": "4JaKLcu529vZfvnRpLwexkNseyZLKr7m7aczPKTt7yijZTV8nUZ69XZNGKeT752V2saquWHwxWepeoWKFtVsVDxx",
  "key12": "3r4o8QQJ3wj5C7PtQ8finmZndJCBx783YRkrrp9AePdjgAmJAx2E98Dz7qMmVyn5hatNfR6yJAkia9JhjLdGSQHK",
  "key13": "5uNanf5Dp5A4dSfCSCkazAeUk9s7EVXPJ9fcFxBvfeWencGtkmGbCUpKZoQ2Rpp8J7Dd8WVGMP7nAs9BjsQnYsnH",
  "key14": "5DgCcdsAfEn79ygo19RL5SFPMGmgiSjAF3scB6BLfKwmgVdGKNgrrJhYWz43kt5jCwu4FtZwMuVqJpzE5GnyNbVa",
  "key15": "5RDoWruNSxdR3YjxKEkHAe7Ea9geaxrUaMeJJKgxrMyLffSymjKoUDMuEk5USFRU5Eg9T2GEWgTohcd2tdnGjtkg",
  "key16": "qvRzPvpociLPmQcc98MuGGevFT3VQXnnPNZt3yhUhyDUUdn1XY3X14kS3x4bMusomyAWWrdzmsc4dev1bgL6yA9",
  "key17": "31iYyMxQ2iJkeVBatKjtSJP3PVpCKb7rabiq9uL56poovGJn1pEUdvtnzKYP8hfQPV72FFSiQBYL3U2JWdYmkSw9",
  "key18": "3PNAxmycZ1zDc3K38fM7kfKJX1M4LY5scxxzHLFxHYXDMcyDZ5PK6frmWgRUHS1wyaYPkBZ8YG5bqjxFSAFAVQQt",
  "key19": "4dKa4xyPdnPcHCkSKQ98ASNXPE8XED8tqcCwqLZnFEJa2y6FE3XxKdTV6zBGwFJrN8NdHtYjkPfhmC5Xd2Z5aF1Z",
  "key20": "QFQoJe7BGUnA6SUaoN8pC6vg6AQjVjD2QqXuwivG53rJCk6P9QMeDfbKvq7zJdQs5H1g58FrFM51XpPgtdu4eWY",
  "key21": "5CPxmotYLUebRnhAqyKrmC4dYTMojrRKhgJvBBLDYFHSijnpoMH9Ndkp8BytWt1JEZ67pGjrfDxf8gBmag3Z23aC",
  "key22": "596p165J2zj5yhh9TmDguLKp6ovUTQj6YND12waqcQ7WvF93baQSPW66MVm1nkLdEKZEpHG4HpNaMQE7tBsJZ3BF",
  "key23": "RBFMGnNbxTbYbTvGNd33wKEWBoMZLe6D7SNTCWwQLv9tPMgUVt59VLSmTcgebLES7f2RXXTMAeinGU85y5WNypg",
  "key24": "4xQY3jojF2mJ8bTMiVhGdpWyrAZHWsMePT6BAYeRtqqeVKwuqm9VQsLizGUaHWyBbjYQKfasqnzA3UbKrcWxYLbJ",
  "key25": "5RiezCP37bqGxdLRkCRuHpJdQnYziYynPVJ2qVL1Sxts7SvkHHeiXqH5R7XNkJQD9WdhAudGKEkdsPC2YJFVR6cu",
  "key26": "3Yg6sia6KYzV4n14qx5XmFiVC6wwim7jm2PWBmrQP1LQ52KP7BBr7UDrjfE3G8VpWe4z6ZzhsQPSDwgShc8Uefsr",
  "key27": "EnMNUFDD6akeWNN3LrB46i86RXFDi71zZvscP5YaTW4hmBVMXopaK1dPs31T86S5MyiAEdeQ7PzeqA4Tdhx5W4W",
  "key28": "5oBXG8dc49MwQ6RXmuqUoe1EqkQm7r8n1UyCxaxdwfn6KHyXTojcZpqwcBP9uESzEMzepXuHGTXqb7T27Wnb3zTF",
  "key29": "5gKfGdJ5FHG8RQGXjzdE79in66yCT1aPdFmM7Ly4ZTd5e9JmrSvDs2adJeqQ3K6gzjaFHeNDz7z9fFUBYhrSwDFY",
  "key30": "4uDmRnCaC9XPR5vTzBR2y8ZvY7RA737qwf5uoQzvfXAzJasoFoaiLzLuq2fx7jjr6SRzwEgYdbPg44Dn6aYPNtk",
  "key31": "33smfZ7nJA4z48jCbBAyoFopkzqtUiKFHEu4ov1xqXdVPmpjrxmwxqBj4AzSq7YQ8bqwoTe7ocsn7x3HjyJNNmpX",
  "key32": "4WPiiZVJxjNZbENS26h5PVYZECLZgBodNqmZWfpoLryB4G6cMdDNgMv7pZwGSuGUdiADDYAzegs6mSiU2LfZVnA"
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
