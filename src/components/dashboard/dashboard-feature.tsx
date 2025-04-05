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
    "3s8CqRZpy3SdhpfySfkD6s7CEpb5dWsRnKKoKWGHH8B7RqWELyZjzmSKynPyusDKxk848SpE93dUZoyXzDvhJHks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBhYz1cbPNuPYdhT7jBseoumZVGnTfgHaDJhe3dDmUvohaHPnmzRU1sbSMevKm9SGYXhsb2B3XPQxaeNTEfaigN",
  "key1": "2cF4kfBwZ14KMfnRyeNCzWiNAjhFzYXThaW85MphCbRBiEsGVuFpT8dba6G8HuYzxppAjrKVhmhtxRxJ9HfR4cn5",
  "key2": "4p4kNyRA2cvb5o9D8QtvHa2BHJqFdXqLdUPFrYH8EYL8RbgF47B8qQDJ1YzDtg2tzY94XVxpsuYpyVYJCEpvbSSr",
  "key3": "38tDY4WZ4vn3NifxinTXRZogr97wkc9yUtD6WU8TPAXbstnjbLBFvqyJits5zmiLgBcU5PwA4ZaqjmgYnpt13LuF",
  "key4": "4e6CxKiMRXVvXwVWrHLN3keV5rmQ2SfXpAgW6PVeSEfXmJfgfZMmMXhwicFXERekxeZ17ecWDrogzBCiJPPUwcay",
  "key5": "48gFtoXh8L8w8B4txdYfDv8ftrGiaJBV35XZaNZc5wLLpsbXhA1obWzmqVjhBDZ6cy7osqbVteDwRzB4XLUXVdYL",
  "key6": "33XvaGHaHw6eVRBBXekLdzAqvSt6HC4vHS4EgBkorRX9aJzjhhwptM8fueinjoXSb6EzPJiVqxX4uoTgHoH2onGA",
  "key7": "213ddqeENuNH6VM3DLjsPFUsSwBeuLjwzb9gC8B4wvtc41fyM1N8zsocGuax46vaMkSergtxyKjo5TyKtW88VJZv",
  "key8": "5cWy8Z7GzSSdeVc1gZ3u6bpzAMw9RuNZRQrErcUwaJihBktYvngQ8CunE4r1E2xenPN74eJCR2j6TAV1bjFp7ZMo",
  "key9": "61MeR3RHsh8MqHNGAuLqftwtU61RfkAVfQyamKfa8FFQs4E1jVZiaSJFhdBALnfWvrTuktkjL5ycXnrXBeZgaWYj",
  "key10": "545Qx6rH8q1NpeNKWyHhFPNFA36h7bq2KyqfeckstjVTp74gn2HUGL2FpQzTJMdgRC8LsBMcAdEbW1jx48fqXXi1",
  "key11": "5sfkdhZWJGMGkEZHVpdSUM4eF111hAg86ZJJQfJGr3BArrnSNRJrb1Dia1oDVf5ycEduFc2dif5U1m6Fd1XG1Ezb",
  "key12": "5kXD9u2Kayv3tJg4zE18d9kGtaWW87YrviXEs6Y5EdrUc3qyLC3BDsmoFWkYWQci5gH1r2w8fYXSgaiM285jnJWi",
  "key13": "42iUn61qsAMkMhGESkbTfDgezkxbq9qPw4riKqoGX2Rk7faENm2Jwou2KTbRsRqV3riCRQnd2PneST7aMVjVyRxj",
  "key14": "3ctsk6Xq19a1ft7btDxwQzV8awgJ8vp58wwuQYzmF3xQokLJj3hicjDtHWA8LXiUdJfybvPifhmBNhCzWSRba7PN",
  "key15": "3dqCteQFLeBCy4mFSdVcGfs2Rdm5cQ7xWvqGApFfiF2UACxhXp4mNAnJDKiA8xX36ubdcyHNccX8C6ejVvUQD8vi",
  "key16": "63TAmhyVSpAim3PVQVsfC81bQVNv7tXJ3kL1pKpp4qtM2W5KbBz6SQwbBLXG2wkA5UTc5wXaRTdLQfYspQJ8MiLY",
  "key17": "MpKPya95G5pnTfVhVcXicDtDZoitvyD7uoCHJ2A4amzJ5N8A8sxUewB9CBYPXZCsxKbiiWb2YNEg2bBzU5hmnUa",
  "key18": "3AWFjzf75ukcyU7vyh1ZAKkyFtaTTZmAzzzTivzj2Avb2ymYpZTVEp7VXDREzoRWqXiHbT3BHV5TGPd8tRq7ZKf4",
  "key19": "3asFAZuMjKm3Xchvdyoxz96DvnCGbJQ9tPq1QFmJT3mfJJ1LoSW6kGeXAYhvXmnvMMrHZLqNxP3pjLeLdccZm1qU",
  "key20": "wuWwUBXaW44gUuvTZwzdSpcmU9yW5nmhdGLp9rUGZyEzh9sD7PLh6XUPifPQX7gWiQpKQuYQzQMW9yTWSRWYFux",
  "key21": "xmNGm3PXJ5gvrwStep6YiRk4YcuuGG69uVQq1Rc23oSKAAQUEoeekWrk4iQCvM83fmkfcotpkdA9SfxUc53VSAS",
  "key22": "5mJ3D3ZmrF9t12mdD6AmCQAtkmJJbMNWHxgoC29Dh9mWpBMN8m4kYjfZmCMsZYRyaq9DHo7qamDc71xX61GDrzMf",
  "key23": "5zjMAuLf1PvgZfDpfM91AQaNX9rCcDXRNohjEvdaWb8TqrC6dsgvKHerRtJqDs8pLyuS1xmqpz5ng5Hi2Tt5dXpY",
  "key24": "dxK2PWtWkGkLwZLRjSnGYti4dyMhauyFkHckj6MwX6aWgMCnLjvw43Qw34sjeRueSfMz55cq9V1QawLrVonmMLe",
  "key25": "2VgejGS72ZAQaJemaNiZcdNXJZZ3ZUCNmVL5RXJKZ2mFMRYtAxbQfVPMT29GWGKmdvn8QdeQDxU8FmRy5hVPKU4V",
  "key26": "5hNNHXyWBsLY2jqre8ZSbnte7tuZ9m8VCgmJmQKe6pTBH6c2JmFUDv933RbxoH2nH9K3NPwnwc1BFkZqznqwFbNJ",
  "key27": "YdcpeDvEkunbAp5VZ9AT39SigMvmscKuhbA3CdRaEDm9yToVcYiTT7vLtCyj9XisHaCpqkw7U9aRzTZnLehNGdp",
  "key28": "5eu5A5ZLkCt8hCcgnggBd11dyzune989aBgAdb4XvkzcqXymZbNDExyV1Jv8vAPwqNr1QScTLE65C2K9cVZbh7Ub",
  "key29": "39tHAyE9eRTgEDo4obHDXaSaFh7dVp76FiPZAuZ2ySfDxH9pSQxE3mRyDRPNfnkMBZCYcfRTsdhbJDTBL5ZBYvLY",
  "key30": "4WXr5mRRMy7bQqSa2ZFRpuNhhK4eirMJQrSoxTTHxpQW8RXfGsC13qYikB4TWS3dgJwpqZyCAED5RvsVF7gdDcdT"
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
