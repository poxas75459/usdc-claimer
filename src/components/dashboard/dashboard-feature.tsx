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
    "3z6MXH3Dj5tfii6hRY6WQy5wAQ6kxTsHR7zwQjgmN23nrfgR8SGmkwSSjnC6A9tdQwuhNXCoFwsHXkvbPhiz7orm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pApuQRatetdFELHDid3nEWfbAcghnefh4foGWRhETXMYpcVgYLT3sNv7cHhUjbY2Qon6nLXm1F3yTjMj5vc2wDU",
  "key1": "25iW6YxqwyJzFhHx26cJwi5Dcy19XuqMs6GQqoi64e9omB1UB7addyKyDFyniFXLRy95dWDy3UJeNz7tcmZqQxLF",
  "key2": "5cdw99rW1NbonUCucVHQeAC87R1oknv2Tc97hiKYgoz3GGzKUyHS1zHZnzjUNwpvBNkAxw774M7dvvrrqTwyF3sN",
  "key3": "3g2MWJtmdxNAauErxNcXzZ9Q8ZpPCdnxjrjasBtJ8sPvpmY3URLzpQc8Dj7s9VMezjSAwXQpQKpwYTnAyQysNQc1",
  "key4": "29h8v9Q5NAPns6HNuHFG6QK1Xg9KgKss6ZrUDfR5YmebgKXoSGrHNGUokF2bcmEcWqRyvsz2RpZsapp2424rPWVW",
  "key5": "61e9QEyNZiGUKqLCYK5gPcLP6UPmojxCPERVJDdPa5m71qPjZBxoojTAbp5CToTgJUPDARbR4CSFjjcrLJkizUPy",
  "key6": "wc251xncz99mpmErDpgUDoPRtgYQqTQoppVdAjeLVJzgHpj5XEEkU7xB2zBLThCfTcc63XXdad4ahFNz3VC1EWs",
  "key7": "uaFDS9jb53CKVDSekmWDvRH8ZGMddXACrfiuSJGc8MThoG6oAyoiL2yjPjPFTaDcwA2g4bwximvU31nJ4d4MeNU",
  "key8": "5Wh1Ea29C832KP5VJgi8ySDbCsg8MSGwS5ijkqipbggtVg3hgdodsjBG4piebFCemTZRMqn3kPNMbreGKA3pDr35",
  "key9": "5NFAEDPqvKqSe74YsAN4ncyPKPnqxYrmQ3s7LHCBX19KwvUuaeseLWh3z7rEuYqG1zWVSBa14pKmJHgr1138Msn5",
  "key10": "31gcFCc6NQnkV4SNR6FnMNqN81aWx9R6Kkdo9zAzXeSdJENsH2TehdEeysTDZZJMTX69fzw5CCXbEuLTdeMRnJwD",
  "key11": "4VnSAF6cYQPvhHD991xVxzVHbttPk1caYqFPpdBFEvGShEkxUATgxHx3xZvVitdqifqoqvHva298RgvNa62MN2nP",
  "key12": "3DsiJwTcPRnhjRhZ5Fj2eYzcTRc2Ru7VfKmRKutHXseUN6BDvi175ifsYCNvBqqem8amdjuNjw8KcquBqvsNuTnm",
  "key13": "2mEJ4wgR9deBm6wuej69zFdZYA1iKN2Dia9LdLNgta1gFqQnvGfGTq7odoZy5aknQeS4mftYnFsTXhzkrm2jSXPB",
  "key14": "5UgotvvPHuNEsJ71jNgcjfSRmAgRQdDjfESSTEXro3gk1FkCJaMsyCAa1GCZQiau9LYfTA1PKozocG6EfGBaNhEm",
  "key15": "3qJnA7QiNJr8bSHzixKaces1o2cCVYCwB8uYkUugtz9N12yrGw6ChPiYDQQhM2UxUzZsXmtn7vPAfyKYhgHaH1Mu",
  "key16": "2qXJUo17P1cuvBwt8fhjxJszavu4NX4gULeoTQyqp6o2Lc74KNYTNF8hM3jJmbbQ2XvFsZcEQ6Pk4pWbpB4BwESe",
  "key17": "4ihhBWW8jKF49YGwyAP97AzEikWaaaPotyJL1xnT9GVDpDhNbyXqLjEVDBkuxpzYG5rCvrsgjYEyqJkxsaNpV8bm",
  "key18": "2vRWnkFYjtPdV7ffkvMGhKohGU1pYHrp5KULJpuCLBZYfrbgjH4cKjyHEUQbSrPnj5DK7jCBfymdUVvCpNY4KNSs",
  "key19": "4DK7h7QxoWjQ9nKoLznBDYf5rFFXr3P1VZJkNR8idpk9r55bE8kUUCiDztagFTMDgXZMsJ5o2ZL7H7LGcbXU8ztv",
  "key20": "5cVeCMr9BKy619dySNu3wxVEBdbCZRoWZqZm4BKuQ3LDwHpc3x1gJrLQ8pzBjhbxyYZR1STJNT8Bg51RudQfyAVa",
  "key21": "4eZ4q3FKRAxw2L9utXM2rMkqALhhtREAXfYxHf88hN8FyMbqegFnFJYtuTDUq3hE6iGDEhu8FueQr2trLgPUpVfE",
  "key22": "2YQfXKr3vNAackhqixgVG97CV4KkCTMB2YZbwk69kLwCiWchnNvtGxHDXTLsw2aut8UBN6xC6j1NoqiHFg6QDhoh",
  "key23": "4bEHis1mQoyRVwA7mj8BPXDx8jfpjQbWTvFN6nsPCucntoNiEDzN8veTqeSXNncfH27wyCucxDhmPNXjN9qBk1uA",
  "key24": "5g4u2Say9yZXRMjSYZcsBZU9qmZwDTnQFDaEXpexeAEJWoVyWFGD1Ek7FmAoLfBpRo21uKvpV1NKBFKksZCbKBNF",
  "key25": "4cB8YkRHkjVxdC3SoxZNPZxsTAByxnera7th7HRvagzbzrSxNKUrQGkJNWxPzh8PauHHc5DmwFxWHepkBHkYQr7u",
  "key26": "2YykQgdt8yNtdLBT1CHf5xA6LMouwRHh9Dt9acR8BaBiwYrU6H1EomfZMppn4bhbWAwCC4yPRhsdMXLwTmkjqND9"
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
