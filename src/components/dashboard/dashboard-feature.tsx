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
    "3eYdV7bGmdVs3ZtHZFz7KYqnbwCbaTPn9HZ6pgW2sj19SzweTHwv4cjcugT46Jdkmz3FbBrpqvC2s3Du5j9RUc8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xGzxBuDDC5NuKYX7qM9JXaAywHFpQvXbqmjs8iQfjae3Hqv7VDmSuheMyuHG2YP85NFg7E4bfPz59KGAjK1YGgB",
  "key1": "3VK6RbfhH2EvtceB8dYvxEVfUPrZrpaNwSYT9PqAtHt4kRwX3iJLfdQfcJZ4FaUNi6buRTmVUPmkNdjW8ZA8UiA9",
  "key2": "4bx8QknEKZcEE5HFwdbk1Lz7w1XHKxUrYhafcrwJMmi94V8S5ws9Kz3JC3biY1tdE6idC6oQykuyTnuPo57S6Cj3",
  "key3": "3XeW9aBLTAyJsHMo4nqDGy8yf6jENdnBmLHP9XTxRWs5m3a62LTcwHxECDYRco8QeP9TQ2U44ajXkbfyyre89cFs",
  "key4": "39tWFFFAQJkuGgq5PJKmCoGFzmGLsQPYZgMKDeBsRCeVRRTqLQb5xnvzkqFyMFVN6T43PFBNw3DqF1A5Z9Fz6CDk",
  "key5": "5KV9fRppuDDoBhrCMrDXokjACZatAYKoxHwKUsmhuTZK37h44jcR8EvafBc5DA7hFQosAZjtct94BoZfU95TYRks",
  "key6": "ERSrXQrUJxL22jnM1q48KH1KmYcigLJ85nXQ8exeNy5TX7kYVYEHGbv8L1eMTctdYMX6CySueg2aAeRLyZNkVao",
  "key7": "gemmTLXnNzeYinyunCrQHAGVgNkH25Gn7JRT1pkBN2UDxPRoRJWLAH9dKGQ7aVaUjEss98UBvKgERHs8j4LqKYc",
  "key8": "4bcKsk8r9tCiHTBDj9jqHsSRz3DaxfnNbgv1bvUTuEHJT1powbCHRduz38R4qJuXtwQTaRMUUuc3NpERHrxg4sGT",
  "key9": "3U2gTxL2QFcoV6QDkECQzwpaibv7ajtRyfV8bJTQrjECYm7KjfZ87bYEbkT3NjgC8Yd7FKV543EUPUpeSswFryKe",
  "key10": "2hqv1mMvUg4kXNFK5N1KDsmWFsRRhygkPa5zNUiqLxQ2L8DVXzeYzreerMaYPZXnDxvDNKcnNRdQewSAePU1ZHDF",
  "key11": "27hNu7QYVQpgKrutWQ5c4pAT4NFGUbsGgMi1qGXXgMTDeT2S6o9LpNUYpGyhZQfpRMsWP3mLPUZvpH9YNh1uiNmV",
  "key12": "58mkHRebTaeCBDMScjJLSdycfzmNjrgwgEFgiDW81mhn5v9kwFVs2x7LChnsXcbJoXQ2Fwh63zjfpB8CDFbGJoRz",
  "key13": "5tx6kNFq9YsU1hoMLexEiBdPCs8A1VDpYBDYcU2HTnNrtYW3whQR1nV8k3WFyg4VpYbRbqGjHWZdRidV4XmJr9ac",
  "key14": "5YoNAYr3f6HHBpDchrmSoKYS4N8pGpbVsGKbEsLbE1NdeGsNfB5uzhFjZwhqsZXzfTjAUTkrpjwZfFiqU4ZtcK8j",
  "key15": "47FzkRv1zNguoV3Eb9VuWkEqrHkrxtAmQuWxZbjPJsoEwMJTfs7JhVKqJEjZmiKsyXGccXDFD4rLKCRYf9UmxuCg",
  "key16": "2r93UoFi6HoQDzCwQw16m9th33CgxwYsL28rfoUGRfYBDcK3dMbJp5wteocsD1jMsKvK8P1NLnGCXcDd96KiTqjE",
  "key17": "67VsYBTJKvETycJ5LnFNcdTebXLgyqBoYxGSjAokfreoxUrueBQBsNqmh2dr1UdASs8i3K6jeJAEDtaeeiGdPg1B",
  "key18": "5uHa2gahELv6bc2hGNvfgXhTDcPm9BXjmu98zFa4qFeogxuoZMQRfyWtRmAHE1qn5S725KUwuFGejnvbLDM4qDAq",
  "key19": "DHs2TKSJs6bdqicE21oZ1Smbu4r2TKVHBdrUu29QuN3DwJ8ab47Z1fi2FLWzUF1tkaQfcZDEjv8UZywHTfareA7",
  "key20": "27ja6F5JTkth1BBAcdQMJhZYnD73yvTb8dYAwKdbEoFzsThLr6m7PzUCX4GHyXnyS5WuWyxNPdd2YepRbcStD1i1",
  "key21": "2y9mpo6MmHhQZJ2enhifnFHiEVxF4AAZpFw8rYjsagtDJee3WNiHEcEx9bZsCYmFUYqWgQ9s8ytBpat2QE2DeoQP",
  "key22": "2u3J1HFmQL5TbFip9Yrtr5WBGydUwoJhwEMnoBKVNsxAN1kBoVs679Ho2MSzvNNwLeSstQ5dcdbhv8iAoYsCgVJn",
  "key23": "2t3oXVcju8tV5EGCfMCcXT9BAH2hfPCA5RQ4hzk8xfPip5Jj3imKoWN38AGmPzC2fNB6DyxoNcxqP7bWrKGRemfU",
  "key24": "ivkzqbu8qPNvwTHuH1awjpq6VEaEyoWy4apLYnvTu2Ysh5Rc4Fe8chqHhh6JG1oqxJjgS6VCnuLxhrHokD9FJFJ",
  "key25": "AtoFTfYxuWfJ3GxY6xYTfkrjQWoaDxdihPmC5DVriVHmZ8BPwu5QFxZRErSdHpYQrJH95NHYpGwo7PspKsLuC2f",
  "key26": "58vH9eztgc7R17vb8avDu9SkV2rxoyZkY2XGsdMcP8gZqJa3eNuVsZpiQTqF2pmd45zbwofq4DqzhsJEsjgLDcpB"
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
