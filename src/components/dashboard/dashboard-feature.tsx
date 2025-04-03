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
    "4GzSBreopTgJvdVtNw7ViAWJwu2EmZF1dbRfZPnmKbgaGFEG7KUf4SQs17mpTuVA5B2CbEhESVE9ZPYa5NpmqELY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "296QWbofdW7H3NCKLG276mb6yUPsfDhXh9i5NnwG682PKEmr2mASFh7NbDeGH9VN54wgThD2SXbtP6UjuEfjHxvQ",
  "key1": "5u1uny32dgyZLv2EWwoBvzZZfnZ6sVhtwHcbCaxZqg7oStWgCMQ1CCX57APvMkRrQrrrCtEKLZBKGZWBxUS7XYCv",
  "key2": "4uRrBYxgNHWzVpzTSifq5YmUUhYGnwjfsc7qREhtLidEYriYMkJDreLkBumt9BnPL7P6stpdafm2Kvm78EJNBt1i",
  "key3": "3kd4zALoKBiCtPyPHyeA6kLdhSbwMuKkVHJxeYJ4ERhmYfjg6iM6RPxpbHWqmp3vQpkyds6C8wvKXqtCqc52WepE",
  "key4": "4fqnnX5p394TGAz2oGBnGy9hs7tT7AVDpPiM7rzqqak32LfqEktuDnJiEorEtFXJoqZY8JVy1q1f28VJYJDdx3G3",
  "key5": "9zy8ZduroXMdxF3oDscQZa3a16YoninbWAXSKqFxZNkWiaQrMrPh8Nn2BaURDboXjQEB68zANEmjnJaiGuEHr4R",
  "key6": "2vS8ZAsRvQ1WebMvhvMpsXy9SX3uzGk6aA5g7BjfrJ2Y1VWZFmdPVonZA39vSdGx3K95yQKzYgrjtyy6vumbDY5f",
  "key7": "5aS7jWsjquyhsunn4Avpnsf2iiVQAQH37N4jz3dUBLKuf2Gc3Q9VS3NqhwRUKg5A4Hg2ejJbtQMabiRtaNd7PmgK",
  "key8": "5T3pchq4xgjBEVNePVv4YVRFgC6CM3Kdc5WiiABuddr7kWBY8sXbWfcSAfUNpzKxUvE1yzGUas9MUCq2anPzSnzG",
  "key9": "4bckraK1tctDCcgP8gy43ZrDTC6PjRWeiTkgXfPL73Uyy1niFa2rn1PATS9APWrbTcVkHJkRD2odQiYrCznfFfp5",
  "key10": "3436Dwz8HZ6BSN3eS94QKGYcv4C3rGYCy1cfaZw6uLSP8WCUpusXTnHFc58k6b4KFW2zQ5mtpaYX8JDKy2Q7pF8p",
  "key11": "4KRguvteSXf8KjUM2yn8HbMZst8VdkSr6nAReegYFM8zRyNSWxAKs2xn8qR2N5iMi4LzCn1hqXtG7B12CB7rJRy1",
  "key12": "5AEi2bbA3aZhTEAbnH45vVzpZzaLEr34ZLPiW9gFXL45GWHYgE2jUsNijYNyQ86FUbkUTcSqTQWSSjzffEVip7Lo",
  "key13": "KxPPoXCXAe8EBRDnSxhiE29z3ghzSKDTCWsz6eGFhu5frsGMhpePAs1yQZzeaxsbo4kJEpckxYLjvF6sbhq5Z8s",
  "key14": "5zWF6kB74YfCA8GywAwuxAVwbn9AESo9aurDaHV6YCn3zk39Cfx9eE8b8QfHrfnhu5hdy1481b2iqkwYC9xqUBrU",
  "key15": "5JqYswRQ7zYWxeEgRKsRKbZcPfQa4UR7eDgD1eQv4nvs9QjvDQitBrdGqPP6t64K2HswAf5Aeh3dZPPsKRWZMNns",
  "key16": "2qfkTUdEizmEQR6uZGL1mm6hTpErwX997Ewnc8wwHYgTARqc86xnreyCdbMpxSaoEF7S7VMBwQw3ydn55pX59JJJ",
  "key17": "hFyxBBjtBYVTsYPpvbrEoEMA9U433r5xXgAy1GGkTHCpf7G6Lqu9JpvdL3HKoxdX8qQ9BV3BHjRdsATkrMgKEe3",
  "key18": "oaiXWZDv14C7UqAZg4piH5zHuHB4abhXdWrnQrzhtHCpD2C4vPqQ27CT8RLQ1pZQP9L6dT9q5VmtT5Fihtheezt",
  "key19": "5hC3k73XHKSs6EFuBi3oFQGg2CmD6pk99mLVEVQkU2DwX5sxqxZbtXmCBzWs9TAVZeixo6LDDvhf3J4ejW8W4Tkp",
  "key20": "3YYGbpTmAiGSnEGUitEeup8xatoZEN7Mxrg3yW56i94K2KsSXiErrTNrAWaa9Yj6ny4Cqv4mkPkKSauxUw4eVcHw",
  "key21": "2VQt3pG6vsQRdy2Cjq9hAjcZVswcE4yW5Q9p8ipRw4NZjfkZNFYGvKKP2mPgqMSiDjiVBUqzHkH4FUMkzFgwekTS",
  "key22": "2RsLbZ6wCtAZZWBeqGhcvfrSgLprtm7t5PiKyNetzrHgpjedMmDSXdGmK9Waadsn84UgajxVJedX1FC6Wp65qnHn",
  "key23": "2F5EyF298G2woTrEnzrQpdXL2rtydeojRTRcMij9QH9C2RweTAqqQnjExTTW46pp4wsX1nkNmszxQCincGHyHeD",
  "key24": "5S53QBA8xPXxuSyH5CPs3ro9p63cbRvadgQBZpBB1yFwfSKkskUtw8vzhSJLY8nC7kjbDsvjjEMHZcJo1yosimWH",
  "key25": "d5uzD925WJPubmg1aQmjp6RCB6rKocJjABXn2wacU4KHWpwyVvCb5AHkWoVXJRUzMLzVrrUGQSgosXqUWotqRYB",
  "key26": "4xpH82w8tv1pekYFjxSZWqdYY4vSAHiuLt6v1bu81zDzoZ2m3oRoujpjKrXvAMhSjT1crFPPjKw9PMtLkrb5RbCx",
  "key27": "2D5ndgVE5afQE72USoD663UtTAAJ8iWKx2tqa912aVocXsnk8WPiphCBFKUQmxxCFZKsphUZcAGaAQN8b4KZHYtg",
  "key28": "3eZ7V2nPGT1tXgHzPeqF4d9f3mXtTqUk2Q2SHhWnyChdQ2s2EQyjTKB7FEakMDQ3iycgqfVjCk45Cb1sNmhzcLdi",
  "key29": "56jut5RLYSq7ttMvi4bgbhrHqkYz5PnujuERdBZvqVfgRARuxgE9XtnEAe14yfnhYXzLHpwwwv957RLS6mq47y8",
  "key30": "5qMKDzdAzesryTi8ef6fyvQrpk97PNRZs4BoWgcxjiDp8tnn8mkgkMDR9aoRnPhWtDUmmf8Jo8ARynH4vyQjHngA",
  "key31": "3517dP556xJM2gGF3V9FdauuTp1jmBCYWyi8EB5F2fbpEoJatHph37qVqmZj8fGVZikD9ohsKHKr5hU7e3XZKXBn",
  "key32": "2YL2bpd1ZbPSrG6KmqR2XNZVdnJj4DQcDZ83VAi1SPt6XkWAwYzsVbms8LsYqic94w62NYVimPWNEsfT5xTH5pc2",
  "key33": "2i7CAxepvsjhGtLW6uraDx2w6srBeNQT5rd8Gtfe3KbTL6QBcbu3M7hcadKZpwpVVtG5g3LeUPHaxdCDqvw5CE3b",
  "key34": "2EtyFJmYVk8rV9Xbv5d974gG61J2FoBWTUkWcDBCsXiaK43JrH5FvY9fwnMK3EM9gKY1VmsaV9wPu13Yd2vZeT8r",
  "key35": "5PT5HeCvmZicwAGmRP3GMbYar32ngiyVKYpUTnpHZ6JappudKgEDTPDjY6ayLR8sn6xCWsw5UX5MhdYox8JgmY6M",
  "key36": "3ZKoV6vEUg9UsEgDKDRvXEcFczmVUvy9sbjtLDstjHBByktmbKJLgFefPq6uJssMExF7mCvW4sCrVaU6RXzL7JES",
  "key37": "2cMJ4sRrvkCBSZkcoDv9aaiv2FzmvkWyMwbdsbUceqRWaTFivCpd93t9Ephg3rVp3CqXzHBopyQxgrB8wMhm9tkm",
  "key38": "yjB5gJUJBHihJ7LyFMQY31wZcDv9Q6ZGSD7x5U3EhAYiX7BAZezBD6oWUmTQvmwkYprFVGAx2uf5CVWJ15q7AfZ",
  "key39": "386r5LuDAKXVVkbhTZqooQdMSDzmw7b7B7B24zSFQZyzcbZig15kSr6sSF3wLJUvNhDcMKYmPwCB4TrwrKpiqA8A",
  "key40": "aQqc466gWHF5Dsjw5M9Rbk4FnMhBkzsGkWg7JBjstggAWns5i4HDJLZmBiUyTUtkEjCZRiQ5JdHY1RqBWUZJWpH",
  "key41": "4uVxHBJHVyqMf1GaSuH2cMdFdy8Dwvv5pBWp1hwsgdt9Qsux6W9aVv5p4a28ZmR5TinLLgUcWx9Qw6yFz56kg9Zp",
  "key42": "2ihpKP4hbHSG6eXJW2UvD82PG4YgUUPJeRVbUE87n1XTg8eZVbhV7rkv4btzLPryfFVnbaYLz1PsgJnxi1U7pGk7",
  "key43": "5wjmxDJ31PbADkNa36b3yfg1G9aAHptztpiV58UvjQnST9Kp5C6zoQjqy1dezAZBtnrDAgDgtJw5dtd4ya6KfYqC",
  "key44": "2mvQ5hhwfCUqidD8PdiZbWYewZCTHLa6J79FHWpcqr5RAe1czFeHLrXJYRjyHFUeEHx4p3wGvu9yiULkQ82hStVQ",
  "key45": "5x33AoQJqfxRP5GGmyP25pchKgpSdFfUo3M3JJyktcgKix5v8ffdqG4cfXcoTUnjrj7mCyHgnhA5XJckFM64KAPF",
  "key46": "xGtdBrpdDi2zN14h8YEP6GkMGREnS3eng7uMKcxkNGsJHgv7goX97Asaeb8KJbShkTENpimBL1GFyqozPuSbBaQ",
  "key47": "2x9x4gwzu17MjdwirfLdzZeZDNjL77KpESZXENUsj5pjenZuvCXp2VqaGEGcagpwaWdN6zQiJTHTd45WLTbwLTr3",
  "key48": "trLzNzVgtsttxnxCbhedxmCmvbF9LitV3tpVjNid7p6QBaZuXMK991q9qrnpuAcQkMSwt64TFfE27Q2n7QeZPmf"
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
