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
    "5u7vngHsSphKn8cDNZwDoMsUHnfomkk5oZDZGFuvmASoR6Fkg34o7A79DcLiNjFw8dNUpF7vWevfdMr4E5a8uS4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kZuFUof2jDdZY4KDM34D35du8kz3RFTdNej3rnDypc9AjMk6HR8ds1BSB7RqBq5KWFjU3iQXzufpbJqugGZmXU",
  "key1": "3xSFumxPWSxfynNTA6V9Vr266PAZoAL97QAkd7SnftLqwbH7gnHFMxSwGEypcfmEvXVEMr8ucXir13xGebJ1qu59",
  "key2": "5L98RDc4XZZm71rVbVh8zo8ys1jMAVPpZbmemMTAZ4xizRKko9kBC4K86RqQj9JEfj7ekwbeHjBHyXKwurfLZuWJ",
  "key3": "4m8qBf3GSJ7FxMAiFFnq9cVP6zdUnjM5WJenaFVmbLVjNzza6DZiz3uGQZ4HVzuChMLBSteQe93iGkNDZ27v8V1e",
  "key4": "5HVaCUeetorNh2xoXFwjYdqmEwWE2fviH8FgftGy4yN5qPmyyHGtqhuzTVGiMNrQoHuJR8rXouPZfpQQiMHDabWK",
  "key5": "3TuekD6ytRq3z8R3YyYy7L7i9yj3NvXMr2suqkrRgSn3rK65bLwFz9NmiXsFEbDFwrnE1EqZ891TbPC1WYdYPGVx",
  "key6": "2sWnjFT8jwvpU2r3afhamnnArpmeTqPzY7JtHjvw8T7okgpuaBHF4eet7rKRpc9FkVbJUqFqoc3NzpPaQQDvF5qy",
  "key7": "WLi6Sy9Hdtgy8NKy4vAjuKU8FxzqxRfsYCRxe5GHiNfb1hyfNJNTFdXNExk944Yh7Xdv7X4mhzLsFTyrhBYDxsy",
  "key8": "tVF4cGgswKRW5RwhURrmGH2trjPD3UhPvriZowYzTp3vYNoSy3iV8unyCnwcXPw2M1bxNCnweVHHpspNGNuhbLt",
  "key9": "rEMex6tSB3FMe5FpeoSDHNbiaeREoYDyYWew4j3SMwfEZ5vZ1buQ2LxNecxBia5pdzCzBmNqCfrYqaNUuE1wVPW",
  "key10": "38DWj23XnRHbvRgGeoyV9V6VYT1154XXccQgDsGdes8UUDUoMCJmiwRoP8pnDYcakmSaVFQ8Fn16YDgWaRJ83Grm",
  "key11": "25NovNDHyyZ4aUF7rpu4ReAcqM1ETwMLS8SceY4G5Pd2VNrZfqUWwZCkCLHLgM3RqRubPMJhGEuciRAxzjdZdrok",
  "key12": "4em5UXpGm1oYPWzhkrMuq66UF8uviLEdefG5RhDD5J34SKZN9KLRniVsuZVbNKH8Yjmagm5iwzsme7T4e5DQiDCy",
  "key13": "oJLgJhKRvZ1rSeBU4Gkjqmi6gnEo4ppwFBE84581nAr33NMDy8ZZrRbxFgLHYhUQp13Wbna6igzJCbsmNXfxZMV",
  "key14": "2JDFBsskpFevG9rwmenykigvwxvAXFXVZLnj6dWpTS7FohNY5STCe4jjziYoF8inianqAj34J1YzgWkBapxnp3vj",
  "key15": "H5tzWSeAkRsiqU6afy7gGsUaXthPqxemP38iQmbqdTnbbeBFLDXSTJuMKzjDQCMTsRLo3YDJk3XyasmnEjczS7u",
  "key16": "5VhcBwjWUeF5bDBWQhAEXEGESiksmym4CpXcvu8wJ9AjDaARqZhJ2hWnZh3TNFPwyfo65vYcXLdpRZoQyFu1rTqN",
  "key17": "5TW9sTKvY1bNsK2ujkViQNDAaVtyEUPTZUmUq6UWu4RbJT7r3b1sSukVfjyFuWvuBcUSioJ6kyevLVVRgsmRM1jr",
  "key18": "uPfgxPizAAwR5R6eauWA2Db1eW9dioqMytVLQRFcPdLgRNDaickJpebrvRLpyQo7yqch4WSVjD46TxaUpUpaV3M",
  "key19": "4UYcQLcULkm8dpH3tgfS5zc1PgEs2xowb7g4mZmjCyM3QcRpFpgzZHQC25x8rvaW8ShrVT2vRMDv3zjBjyHv6z3i",
  "key20": "3oPk42NG9EjSkRaupJZXDTAwDiCrLFADmbKgJxCTeHf2JxQwAs2VU85ii2mAFHAhwm8vdybutEK9TbKBD2Kqn1o5",
  "key21": "2qqZdAwXzV3rQ2Mz3iZqKyx2zDTV8aQdEQd8fW4tcXsZ8stBocoUYEbwEtUPS3471bUN2kWe2onFcHLZZqfpi6Pf",
  "key22": "cw5cCQ3WfAfWRwcLa5ABkMpXadkkfACtmJKZEAvHeRZxN7Mmmp2esEwbeGVevfSxzk9YUFSSrMfnPWGdRGtFJJ5",
  "key23": "3bwoBPmcQG7Q9ZM4dNHhon9Zfu7srxAkb6kncoP7tFFMZezgHT1dRwwJp7hiCeTkqzA5cEtUcCiRsNGxkDpsd1Qs",
  "key24": "3p2zxzhEuw3JNkpSe1XWxrTN7QWDyaQsdVbMHWxsqYss664xVh5uUXiq1KWeZDdKgtR2H9XCcg3bvfxuaAobKMFp"
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
