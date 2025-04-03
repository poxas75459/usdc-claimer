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
    "4YTKW6uNprzsb1oWyUNyCxau5aRkqVn3LxwukB26VteiWSXuzywYfREzoCf8A1xiMqj2qb5yt7uqo91JXqqotQAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g8SJDMUpcwdz8Gx1iAqQB1j2Kfahig6GAk9NjsbfbykuJgPU7R2rvn9JganYyFbiAJYBiQqiZZZ8hDvgTnChJxF",
  "key1": "4KjX2E4kzCLxWgefZnKDyhVzYUqGYsdLCeK8uNoYgrTxmYM7ySaay62Q146txz1GDeT7yUFZegx2epqTSc9HUNdt",
  "key2": "3wMHHKupRcZGr9NhXy26yhvM6Ki7nZrdm8Mgr5PB9o24TKdt5KCzCksay995xweNLVHrw1GVeSUXyia87ApQGUJg",
  "key3": "3pUQW2gfqZdwo2kzDzthWvgjwSfKekUutPB4pUoDH8ZXMAqnwG2RmdycHsDhbqFD6uYt4cMzMX51fNyuorAzVCmn",
  "key4": "6142MHXJprwQjSA13PYu4882x6qiQzv7TTARxcw3x4RcprB4nPYQ5NLvbBphngxiZWMEZHGQ9RfW7Zn1pWAPeZT6",
  "key5": "aP7XMDbywQ3YaPCitrgvshfP6xMKhzt9Cj4eu2KdCcU9J9AWmtbKQz42sKR1V2w7NzLXPSMpUF9J1Y9oB9B13iy",
  "key6": "2sRS44HPMRhEv2yvqoFUAo5hgRstqcBvn3XE9XAttWPsA8r2jrrZpMHJFG75oFDDvJ7XDgbuVoPNwiCZYo2HSnEC",
  "key7": "3Q6BLheX8n2U9Tzvc7GgRhS3gMcFtoveumQWwg1TWij8yEn1Gsw9iQRRU71okPNddQSRiBMSLajQ5AMKKTyrFb7R",
  "key8": "geDHXi1ZifoodSuo81k1JzrFi6hu9szdKs1hzRBZu6U6nJLyfpTtvfQitzeYr4iPuv1krKTzg7mqt9LXpGGzQ1y",
  "key9": "4fxcPrZ5Upd9LU22Vj3AHNwsMAtzyrLQvEoLH2nHF9TfDGfhmtTXqHMKXFqfMRHmrUgJ6sjXUTsAPLkBnFDRpBcZ",
  "key10": "trSuR3fiK8x9DnA5KUXrMvF1b9gu93x5RZRE1qijgL1W6h7ZXtUztQz5CYXghZ5WfwRXegkUjQLW62L1f42pRXZ",
  "key11": "3Y2vaHEnYzCgvCArYUNphkx2kV3yQyhWpBbYnxeKKhV3FqSct2rnHPSYYUYPuiyuCWDT7qJp4tCdNbuBf7scbfvf",
  "key12": "35D3ixyxxFtPHQKdi1mpsndvBWmmDmhBgFywagzuKQhxAAXhaMsxWavkv7CvBFEmUm53T7kHczY1RAQejWX9c3ht",
  "key13": "3ots8N8Y67ApUra7znGeRk7fZNMBDnaQaZEo7ERwEt2megwfWNYGitGzqpyW5srhzcQVCAE338MsXXhWg9hrSX2",
  "key14": "3AW5AFwcowanzgjLcW3UdWY7CPh3zxD8BoVZojuBEeGcHu9fgKnoVSt7jXqQj4XQzpp79VEWxnCMYPr9thAymdjU",
  "key15": "5Kea1YeJR2uwcQocNVx5tq83hJQnUq1DckYmctZEPneT7FyXck1vu8zjUr7s6yx8GujTW2buCKbzPWF1nTubXAbs",
  "key16": "2FJ854C1dMEa7hgHSRgMKG1yrNQ8NjqrVCavPBgF3TpBT4Sz5Ms3S4nAtZ7qRzcCoTd1gkNtsdfGeLAh2z3gJYaK",
  "key17": "3H8gtiVw5i3PVsNXt4cnnxHrkFvt549tJRQ1W7dM7QmNzzENNciH7ozsu69c8QALh3GeVQTApCpYdLymiP6YVwix",
  "key18": "3pzvb1pDn6k98egUinGsDVfHsgvqHdLCzuZJyf9SKn1hcstA5eFb2pNTZSPwGkKLyGsfwbomr6nkLQYtVGMqvnCY",
  "key19": "VJqRB2JUf68fZ3rvNEJxzGGPNqU81uBBHTvhfDNuScugiw9SLyACmkCKzij9Ceeq8x2Y5fFS6AQfn9Vf8xmqcWL",
  "key20": "DmZEgvoMzV2ow3YLLDoj4yFh5vz1jBBDq9EZfbNuaZ6fjwnaRd1tHbd3Y9borvdZH7vpKLp6NxRvjn71FeasvPn",
  "key21": "5zx2M2LJXZ8H7ecv82z5CZgCQk2aWFZdrGtJEYz34eVJX5ujXvVnxukBYkHp9RfbaidVw6YxWfx6GZ4wGjYs9FKZ",
  "key22": "2g4sG5ns7Kg1bTt9JtzpocyhUtJUvrnRyBGML89SWBzkemABmGCZ2zodTkkQjWjoq3Kqoh7JQHc61KcKAYUCRZXm",
  "key23": "61JY8CsPL9PkaqTj7HiSQdwr4QqzK1xuRmsTrv7pzVkrfws23CHACeJMQRaucEL8Wsestx5PAzVtpShuYndCr1a1",
  "key24": "FGovGErovVho6ka71SWMP2CQATbaVFgfDxyg8hDXvCiy9rrkLRHSeP3HXNs3iQEj7XrwFpAaP3jxwZ2nB3sMaR6",
  "key25": "3ZWbVfL8RHm8DqTrjdtywdSsM4pPU6fbw5fuRwpSs7BKSbpNFPqzVjtS4WeSiYRiVYVPptcr5sbiZQdPCJz9SvVx",
  "key26": "2qEtMWQ6wKMcggD1VGZbjN6k59FexEKDv7kmxq5Tcau5Nq7A18kk3gTW4vAXa3oUwMtyyRw8cqPmeZxmqigWPFvt",
  "key27": "53Anxbd2u3bvWxNVKryAnFTaRTNZ9D7Xw9WFpvnjDkSoHVWHBaxEAQYKSmmuDJwhZkHpppLjUbi3JAS4UyAunM2W",
  "key28": "46T2iWnM7ASmFBrvKju21ZdnzBxdMRFUQCgoMQhefTwgLD87A6aCL2n3cdUyB21w2UP4rrX9962vRaK5yCxz9qFJ",
  "key29": "5JAK9SZPHLWZaa3umwZeVcstyGQZaaxggBXFC15GEb3BhVaYY5zeSvn83rPkmSt9wxdjm5uZQcCVBcG7VqzRHrHD",
  "key30": "4w3GnFQ8SGJm8jD92QeCQ4RaZdYpJVMX24YRViBCACUDhg1Emo1DepKsydDxMDkcjNQMFn5BGSd96KZuv7x86P8N",
  "key31": "2XuKjFM3pgPYu5h4qiHYhTxLruzPdoQ5mvdw84Ugm5sPvEH7dsdmKzpMAEd8pjC8TD1emptGj1FapgTkhz6dZKoJ",
  "key32": "2tcBWj82dvQB2WsDPa8MXHxKeRdY3W4YENX8BEjfH9HrK9ajGoJjjKGSomUWsvX14rrxMhwgkxuLbWentcgGTfzS",
  "key33": "RebxAwP1dzxPU47Za1aD1H6LLBpKrzj6tkmS1AB5pNFMSHKNQfaoqFEwP86Xe4ZeNDseuiVu37bz4W1zat7mPoT",
  "key34": "4wa7jfyKwoRLdMaxG3GFKCszFW97V3UR2mC1xpSxe2U7yKvUzwYEsHkxXY2nD1Q1tAjmVi7LoZb7NA8xvAuC4WoT",
  "key35": "5Lw5cPdrsZUvuuBcNMv9QuRqeRS5qYFd9Q5CxnGvac1AHG9peEKvFaYbtQFEufcUNhsrVR8ag48AtUQzGSDhqwMC",
  "key36": "71MCTqbGRokto5SxqYPqvEtoGuQnQHzjxNCjJ5FDQuUCFTeMRNjvpQybexbqLcaQuDgcXBVnyAUW1ke94CSdnop",
  "key37": "52CMHYDoFcBcsKWkAQhPUMXg7TGNCdcQkayJ4LvCtjrePW8ZhyfBhPeAzeyzbHkPuhNM7y8AWWaEraA5znD7PKoC"
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
