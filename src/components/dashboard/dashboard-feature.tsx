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
    "4zhyvWC9eNYZNw8dG4UGogeMrgnw1Yn9wP291ZUDnW2tzmHFqrwqkBZnVNEEXMzeAn4tFCmDdnXfeCjYpqLZdi2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QMSBatc2FoEdEWE9Hbkpd5f9iqKhHrGm7ZaHyffxr9r1o3eR1bW8o1WGgY729Qd2Z1dNZP2BaUbQTYZcKugZHqK",
  "key1": "U89iWTk4QHSE8rRsLJHPEXDh1TAEoDJYmWinnAae147EHdKsfkQT7sHx3DsiJ6q3cfg6RP4gjiN8nyNA3pLnZAX",
  "key2": "5dG8wUhYwW95W64ff2tjUTw8UUahR3hNM1zPXXFq17vXi35qiF3LvYzRhsorBPxhdNfvyXsm17a9cTuwAnVN2HQW",
  "key3": "63fr84nXSvrZ7e6jr3CnWuovwvTpfzjf33DvKcLZJETbeKJLNSanEd1wW7Cb2bGMtjqdQYNWtVXscCWJhqXiUtCE",
  "key4": "4HNcLNUrSsPkxLyLvYfZGSNZzYanUvjKH7yXoruXFAM7ndsN6yaTaZB8pEULX8MzYW8QHF87XuK4zsZsukm1L9NB",
  "key5": "xPQ5E7mFzuHxsDx5FNDfYfG3ngeoEuPvXJhcBx5fhf42F7DgfMqSVdYksDbDe6hjqDUd5UCVrZjABTEi6gyjEXG",
  "key6": "61szTMvyUEVKzxUeUqXpptDncWG86FXrawFy6VDYa7HAwoHHaYvGaXG4kmk3qptorSf4jHUm9CWJmS7cXaZSMJk7",
  "key7": "4kh6KGc1Exi5fmZeLELH91NeMLj55QheabR7SEVR3ehTepgskgfhcC4vrNR1y2w6A71d2HUtzCpyEVaBun1bZwwE",
  "key8": "2FmQwCyS2NF2sRQcfJT2z9xb1oTWfasEo6VDY7WLAkfiZ9WSY7SkinQ6MtMsGvBV1QNw8zNzuhTu1MB1yPMpPbLG",
  "key9": "2FWnvrXJDd3GbwLf1tGWE3GPH2WdjibfJZDZwug9iXGriDuoTduo3EXtjXweFQ5oiW9PpmGrj4R7QanrMriG5HRB",
  "key10": "21M1UHvadeJgDUahD5BYX5N1ArKF1DRVtPMcQ8ViRQQz7vQ1CpTE7rBDZhiffo4eMMTaxFjJtyeBm8WH14WD1Ai4",
  "key11": "3RPs8WJEfUxMVyyUsjiAzqYUu7gV5scqSz9iKJeiuPwHn4F14EPfgvkRYA8ydi2hi9D7mfEwZqLJWjMQ4kCMGqnY",
  "key12": "2j4Vz7HLzct6ikTFTNV6dBN7vy9uKrB3xsazWiXs7BJYHsYbHxPDavDdMGbimyGPrbp6rdfp1wfX1JzA3VJmoQmp",
  "key13": "mFguDTF4qHNdkWPcgSuH1RYTczYhLSxd3ERQRSRVt38yWfLAMVyguJ3JrVWUZhZ3kgyEnVHkgVvEr87LzUCpfpy",
  "key14": "64U9YoZESsJjgniwE1fQXikQz67Co6f5PXQatQwRChqNhM8CpafJkYj5E7BPTDzSTRxtGyw98qxC7SDPZqGbtTF",
  "key15": "9DFLd192irzWx2xDzmscpn8U6Mdbmipx9gvSbEJQKJDwV9XGc5GWWApfLYDR7zE9ncna1mwSzjnw14ACBLxfsqq",
  "key16": "46u15bpSVVzMb3YcN3QywhtAFeEsMiKhAHTEG7aWdvCFzwH7d6QTYwjmUPXPGpbci7e7qKtbigLKjnyyjvuzhgRw",
  "key17": "2xKA8FsvKc7nDoQsnmTNsBcY8JjPR7pYuuQSYb6VQZY6qUpUuhXspKHsqRCELkZYJj9NrsGwmFeHzgQQTRsjiVUZ",
  "key18": "Ap9XrZ4EmvbqWp8P1KLMbjnJPhqjvcK6abpHni1MhQaqrWuCyJyYfdgTFb9Zky1weL19o8LTjnsF9kqc2SR1ykZ",
  "key19": "ntuJBPDuVhmFZM6GbJNAWwqiYdnsokPGQhqGnra2PNxDCq4HDtPZD869dqvvMWsxH9Ckq7mT2QBgHG4DTRUqdZZ",
  "key20": "59WGsJYj7KcdLAiM7gsH3Jx2hdQfXnjXqaBrKinopdAJmMFyZGkshqufQqNhU9iJ7KxKe7ZkKzk8hg4De8RDK1cJ",
  "key21": "24Zno4P21NQ4Mi7n5aEBuQ3r7eGjtMJRjn642xtv95pJPn8suw4auSiBLZAWGVbXthnfF1dafFbsKQyyNXW9R3kk",
  "key22": "rUzwqqEWH7F9xKH8Jt3FqJwTNXi7ThKejq4ctJ4jsSuGEFyd5n9qAasVgAA4XEmtyTnDevsY9xBs2VE7Rz7LipD",
  "key23": "5SSwXBidhJu7ZSzhNfhRBw8iiEHQLpT9ZjQZEexVVYU95BWduGQeaGE5pJfqpaRC5Y44DcQiVaqzjcygLuEf3etV",
  "key24": "5zzbbHsXhRRrju3SBp11v1JVzeW4ZwoY5FNcN4PjKkjJhQ9g7dz6EAvyesitrhfsUGyuMrk2ow3hLEP2Yz7SwkKU",
  "key25": "5vQh7iSbDFZwvQ7E1GTqXaufAPPMBMHbC7UiwFDgiF8igXktr2UfGPuLTP85gewq4U3VhRQcvYEGkQbakcRDHEAb"
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
