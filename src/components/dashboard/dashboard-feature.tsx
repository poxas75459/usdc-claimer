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
    "t8Fe1UVAAkzYEkcFaxJXYmNTGDEnCnwaNVywR1wHGyiihSSVQgAW3mJSeVfAjzU5c4ypweYM7s4xax5vjuKbWsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bsrCqddTAY7wGoenC3bEGqPzzVeePu4yFpuJSx29Z6P5oTP8JJwULAiGJHTjWSKg7cKa92NpH4ycC3UAQ1oYgKq",
  "key1": "37SUx7df3ptZNYzw6qPwjpyPrEPuMQM46cpDdSsYVMWW47Hzkh5BzcTfDxjmxcRr3io6ZsJh2MTrUM8CEhURsLZ5",
  "key2": "4QMQ8BP7nynBnYjftRgVQ31Y6PddK736XyJGkvVcMxrBBUMzEACtVHPWGd83uWrqR7ynsHNKK3cjh9XNpBZutXLU",
  "key3": "53emXGj3xCN8mc5EQgo4uQTT1gnFiX1Yx5y6mPuCFCfd59wc2DtTRX8uWo6THQUTaTyzNySN1m8VZf6Z88bzEQco",
  "key4": "52SRRSH8TA7C8gmLzYRrcuHJju1ccGxNrM7asgA3uBCKwnw6qgHoe23eHDGMjZaAJiRy7pMyWqg7WCzQHfV13Enm",
  "key5": "4nSFEphL2Jx69Ag2oFxKtiKbsqy4UoFVrTEJKUfPgQYun1EhX1MPgipUcHhWx2G7NziVLRdC2bUbPFQ7VdPqyUTh",
  "key6": "5czHsNgmKQWmEb1f49sk9iH5TXrrMHQ89mmkNSJFZRvdCk2kByzM5VB1w7AGcU1hcaE3LTs3x4XVmGtLTqpeyCYi",
  "key7": "5aMF4wXf4kceDjRHRLEWG3hdXQ9niDQTPQSMLe4RYGRi3ffkopXNxfmjbETpa9nA9sUeMvFXzCfBXFfwBzPWGn4S",
  "key8": "2LB8EQAwicsXGq3VVFQzwUvzhCENC1WYkNBXEFt9xQjbdCjc1WhbNp9wRZxu6cYJRnfWQkNbzVRFQHs5Sqpe795B",
  "key9": "2Vm8qFecdnbEZfCS29zoLKeVX8gD5YWTj5yC98wsu2yc6Ntb3yXqmaQ3W7qCzv7t6hJEKwPBzgnMGdhgm3H2RTgL",
  "key10": "4kG6TZ6fEsKNASNHJv5fvSumBVAtX6jqid3dvLDEfBkZQCsrNFyPEE64Wb6TLVHfb8N9bUwGHpXKMZrmRvp4YjFz",
  "key11": "5Ki9ewxpHGqW2hPuXpcoVM3Syo21CwRmzJbK3w1Enz5uArNvp2FZebiqnYoKxE6LWpzvuFZLxhyTSojKe57NN6Xk",
  "key12": "5rdPJyiKH17kwjsRokVuKARbLDM2VqWv3WrkqPDGxnWfeHxzk9knoChKjX6erJfQArsQTQuTsRUx8PaGBSQJwP15",
  "key13": "5HMdDHuL8ytAsJ5imFzfmbwc9WrhW9wzBkPFkxTYznQgijvaenLfC5jZ3L7Lbqdjwq9k9KrhrrPBQqVGjr3X6yVZ",
  "key14": "4V5fnFzFsQzudkyfUxZcoXhaPMtUiq2ZNGeaHj4ZmudBeY1V7Dy8WfQ5V1P4zCbjRcrkETYBhjokA2WcGEHeH3eE",
  "key15": "2xzU8Cj4vECf1LYHFjNCFw2ZXFRpdeLCLGs2imHQSB5grJx4dT8LDSAxJbEXvo7wyZ63Czyk12DWpCvjyAgv8StS",
  "key16": "2UWQJ1SAKTb19oeonFE58Da7njcGQcHeG7tPdynHg2Phd21MMfyd2y2yZeCyLNikJCaVopMBdEokNWAwsboTmntg",
  "key17": "3i2y8ipx842xrmXf1sPYDYyRZQ4n53Soq74EGV7ueSv9yXtKwvbwmx5pBhWaA3RrSeorVDsHXk1byvdeksNcBEeK",
  "key18": "5ckssyCwW4sJYFvC38WcBHU7mjyUHvE3ke4Bu6SnbosYCHpUKLDGuyVd4tjr4woLGpoobLq5aenjF67gstT5fyHr",
  "key19": "DQRGBHJhyFWMxE19xnvgmjgW43mEyjjZqmzty63F57fRcnBavxevPXMEouyZ9xwFkGQEkqY9RgtdmStfsbTLoPC",
  "key20": "2GHrtQDfCC7B5f8uXBR8jQPc8RFUFbajBbujxmioiEPQhxkiGRVvnovjDNwpWzMWvSAQ3cp6uDoc88qAf4DLrdva",
  "key21": "42ZjgFfg1gs4zEuwXv6Xirt1SQ4xmBtqdBjmPgvuq3bSd9Xrn4a2maMvAKfJT9UDzgRJBhUXjgTutkNmkX51zhQ9",
  "key22": "3vicsQk9KzsDX82k5AaquzUfBC2MUsKTDyBZHfgdToAcXrHpgeCLQxcDn7jMxe8rTjvfZ5sioRNiMd6ZXRLRsbgM",
  "key23": "5S85w4fETWCfUDHPJQ1hDJwcuqqDLxfwZj6RRtGuHqaRF6KsNuqcktVx7jsvvrbHp5c9qrjRRjXeXVV4rtw6yyi4",
  "key24": "2h1KrtehK4pkUBwxg9a6JkVzubWxaES2BMrivFxY1rgtyjKmgMAA3yT3Jig5RVx4jwU8PcN1mzBuDNpQGdUBdRPd",
  "key25": "3ieqFp9NhTfcoxGzJ8heZoSWtBbMbf2CQYDpubZd6Nynay3ZoJ7PEeKkFJLRbR4H4NageytgSRFNfLjwdt62DdWF",
  "key26": "2E6nrXfumjbZcUBvGH5rJhJuZpZHpCLBPktJXHs5aq9kJaEiYmd7YE4AycfkDDwrobPosWAj2YekiRaF3XmQ3weK",
  "key27": "2DNNQrmg74s9GR2Y4eZoLFsRmTqwkPvSaszJkN9nNGy1PqgPPSeGY2X76VaXfdSLkS8X46hTK4hQGuMRMXADu9H8",
  "key28": "YQnmaamut4TeJgU89UzJGUs7tkeAET17A2R4t4zimEa7PPY2NZrLckr6AYDndgeTChjGGbBNmvjQggEznaavWLe",
  "key29": "2zoTthDL8yfkipPqq55dp6x4Y6sTc7upGKAKcecLEdhrKfjdM6qBj8TjMEWBRGaWCarGar6NEXnKJMfcsk1oSsef",
  "key30": "3m8BcKRMLQbjP49tB8UQncDgeBwhhN2VYtwGkDaAYXs1LALCEBDMAqovvgGP7uTiQjPR8WCRmE2Qf43RoNYAooSR",
  "key31": "qm3p5atGXKh4gNdYQHUfqWrcA8Ts6BnsTwRCH4EiU59ELtUF7sp4JTYA4QKnSWfBRwhJzJthmzW92fhUWMrKhtj",
  "key32": "3STuK5y9c4p7z7eu4aXGiisUcSwMTUuC3FUqJTDJdkTwtGVBi9Wp3LBGmuyxPEuQ2pstwhC747komypbqZt8sJ51",
  "key33": "54QPG9tuMMK47uMibKNv3NzTmy7fUPvvA2Pemqw5GpS4EAjQEe9oYmxggMf2bAemKgPfnSnkAnbLCvhZAHcz5kms",
  "key34": "5SAM7XZtoeSwp4dA7UfpxiZTETmzk696buBczchaYdr99yfekgEKoH8gikNFNc2UnX8YzczQuExbSNS85Qi1roYQ",
  "key35": "2NgJHVEPjX3vu46pPN3b5MwC11BEMqFojMQ74TLYpLcegEM5DwFApVJfDHbQtUwtCCZHUMGLLptbZHvrDwuts6cH",
  "key36": "AsfNr3HDvGsdTMDiC9Htu8T6AjpbvzihCzAgRGyX8ThnRTV2gH9mzAvKGFdkVJSTMNAaF3UHF5mWuNtBcwxFRZD",
  "key37": "2hyVxoB5ajC32YZfZQWDbuHjtG2d88LXV7BdvtYHxfNLa4An5RouZitJ1TyzHQqdCtZUFSfo8xJ4oApkV8a5kvE8",
  "key38": "3587kn2kHWKwJXff5apyu429ybUYjStrKBgkMU3HGhBtxkKAwAfkzsegAhPKgB1rJ3LDsJynVZX2P77EPJccqLD6",
  "key39": "5GsxKhts3d5pcqs2d22FEqm1e1iK28ZoCQBWb5vUGcvJheDckpQYg8nkxNy9ah8L9E9ekipfKyAxVmns1t5P9C6E",
  "key40": "WfwG5wwDxPMiJUH5EobDpPubeY83CuZWRPe56jSD1SSarp6v2epCmYqYHUJ8jLvWYp3CeqiLRPRG8vEnVCZdg3s",
  "key41": "DEAZhTtfs17Yqgj1Q3ycAT9RFjm2o9iNZtPg8Btg45zLz6HKvJK3QWkZnNuA2UHoVytqvHgJDhvmQc2wYx6ygYQ",
  "key42": "2bHBtdQdwSuqQmDQ8iHc6yJJmHzcsNqcvMHgfqgxAc5SV6NT163NoaBaJCFdvy5NwgUJGf8Zb1D5WyZt8jD4qayC",
  "key43": "3e7nfMwGqEhruTwvLsZUj9uTXtoWqhLeDisNukQ8FRMtaG1rRLh5NPhLfS3KnrqDbHU8Sc2cNVtZq2GQSTneyEEP",
  "key44": "5dBpYwCGUP3aVJZV3USGMfLm53XdHNDGEd1EuRn3WzwqVS3uD6bUKZEByf8M2xsHNEn489MBrwrzgA67oSXHa4gn",
  "key45": "2pA56ay7GWyezkND6dAzfhhmZS7EaucRWLwmF64VvysB4RmM7E1aw82qcnk4ePqmuQt8cy9fK8vHTMHrHNoRPsT2",
  "key46": "2t1SkvAkhjEMBzizVA5biUD98HQLS9c3KNQ9wmvXasWx7SE7dm9akrXjLdUr7Tqn3MXeX9qQYEGjVeZm9d3RAasK",
  "key47": "4vqDjPiXYwDavzmjrBuM1Ad8KTWLJZ95qauFcHLYWcpJQEWu5jGemD6ur15yndLLTRjZGRg48xoEHKrtF2ua57w2",
  "key48": "smYnWWUQc4FJSQFQgjvpKgc3EmmX8ec1QWuuXvRkXbaPb34YxdhL7Hu1mw16WcTdZLcAgCia5zKipa8pJjD3w9g",
  "key49": "3XceQabBX1pWUoKaPGJ5Dz5aToui2TEAxDFuotb7kFNbMnC9pTxKCybATrQ8GdwDot7oCgEJMMBy1ihHg8912RNj"
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
