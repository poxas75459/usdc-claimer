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
    "QzygrooTbkse1DLp2iNTz87dW6C9whraxUkoYx2QttaZnqgtxH2Uw3Lcw4x69P2FkBQDTzXdfDQqxmvPsmCsUCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F5vXFTjLtRUC8Wmt16DkbFBKqC25wGLZKCKacqKAbuZJHMQ7DUPPspBqHDyDc5MHzkknMs3kJL6j1hskNLQTtj6",
  "key1": "2DGqb5hHFehco6hRnBG2zmb7ztvqgfPdUyeHzgQb1kUuUYvZzH2iXxPwBJ6ujS59PWWNuKofofKaDzHKULbNXjjk",
  "key2": "63QSLj1hKmFpyiK19ZdZaQzPdi8pbFE4w1m9ni1hvMto2yLoPN18kV8K5XAX3Lbed4RadACWmZycK1fFTVnfaXUs",
  "key3": "2bdSfEjiD1BhND3sxmQVbTnMTFdcLPdjAuC2srjNxyHqYREvnN418u7wU6TDYPrycVYFS5X2nNy3BNBnPg92VHcS",
  "key4": "5yVuvbzdute68NtgNRHz1r8A9Bkuh7psN2QbNwa79xUc7uWAqGx4iYmPk1cXLvePCnxPwE5VPyyAVypzGgbnKVmb",
  "key5": "2wqxJkJdKb9F9mnGL8cCg7X2nfJNegb7RSvEibKtgLLv6WVj96atthZ2B5qvkji4BUA7vX1965bYuDDf1MN5kHAX",
  "key6": "3HooUvqBXUXxmUR2scpmdnbhvDLeFSFRhNe1RDeZuTSxwoDR9vxH7neGFexebQ9KDi6RpDkx2aRi729teKSqx2ed",
  "key7": "4mGZoFYKNhoVcoWAfPUAB9ohgNr7SCZSRkurAuNtVrbTexCd3co3759gQx6uRNqWZDqp2LVdaePyXkzHoA3fvDVy",
  "key8": "2cfUbJjfXqFdqSjCNPByCCTgX2YQHZGxn1v6VWZyAebyqLakgEaoWr2WJpRBW2jFfSUyrJ68THWCyg1ZPCdP2xAX",
  "key9": "5vGBVRNvkn3hhJpanLYmdxs4fNwcNk7hep22NcQrRdgRrxchArrgAFJSj5hBmLdsUumK7Y6UxYo7T7R8pkHSbf2d",
  "key10": "2oXfFk3RNj7DyboCER779ksfM7GbkUgsd1hpNSXpWgJrA3ZHCnraCf2qyoWh4iRWoLfbVX7jcxutYQ1pbpf3dQDk",
  "key11": "iir9Dg3A8m9o3V2xk1amJS2AmHWLqgCRrpzJ4MN1WTgaUoXhXadKtMiJW4yKhr1HZcgoPXgxo4W47vTngMDzWeo",
  "key12": "45Fr8niVtdGgHYbQvDMXh5nEENtF86oQxoCiy8FoT64TES9nyiNXThnMNir7ETBcKAupT6qQ8QPNUvLZGMVvfZUs",
  "key13": "313e73qKXWktEbs1XEC9vc54FmGMQzygQzQXVjH8k6mdQ7GYFK5wH8AFWVf5VTTTU2XFV9zZbdt2W2cSc428WwmS",
  "key14": "4dmKMUAUidtnqsGGCK6Ye4hY2nedPj8B7JWkEhGsWt7z5Gzg38z8iHWiqPexB2pmhYKXx6sg72BLD95zPvu7d7u8",
  "key15": "3Umo1it4uXbghHvkFdjmR83ejWXBHaSMZWwK1Xq8WiL6S8kQsTtKKhNLmAUmGWoVhbpr2veMP2WBxwQ94Q95anEw",
  "key16": "5hWpZetNofrtmFp5qx5qC2ZJH1TRB1bE9tH1xefE7HFT3aMazweuQCmhLuPvbjJi6UeLthd8LqTrdZ2uHhZudC5D",
  "key17": "3kGbyt7AkRAJCiADrhw4oDp5QyT1JaT5TVv4SEmDFozt7MvGRM6HCUP1BAQ1BWHQmmSUhG7yAqPnZa36BJV7uQpL",
  "key18": "4arLKDSDHAcW212YJV4GVSDxDMoy2GLpLXvmkJKnQ2URRoDEjz2shqs3NYopUWXETyTcSgoqYfn4cADNQnjSQfir",
  "key19": "2y1LGFL7yk9y9Birhk7CveqPgP9838cSUnFFt5vTmQatR4YcKdmGVKZdBiD3npTfoxWoK91xRpHmAzAnWhCxWgtx",
  "key20": "PP4bvJcVVPsr5cuReoia9NAdTGaawmvMSN37V6uvh1USu5Gt1s44HXX4k5LmHtRZ5ewQ66aSxWYX8qW67K9ScoQ",
  "key21": "hDyhiunpigfR3oqT4EdLG5XpUrhvKCBfuLLjDq3EFgPFjq8sPP2WojjytnNrMwrwcBoyDztDN6FVfzmBSZy5KY7",
  "key22": "3bzcjJoNBUzmo5ixXXx5fsRZ5N3EybAYCVTZSh6kA1S1L9mcU7V62X8Bv3dN11yYroSgxnindTFSaKXyxuW1dGXK",
  "key23": "3S2jFQKhN5utvjbd2DpvkC5aFSK3ryHpujzdCw425TmC56kkuthThQgUXU7uuJ1pBgnbLbguXX1gY6z6WpeHa5Xj",
  "key24": "456XbpmZtsoGL6aGjck2e7xEdcHoBF64jaKycqfNLG5LYTbDuSYPohcajeELQZgvA8eDRwDxAkYZuJEc2otNeE6",
  "key25": "46qVytd4BKnfZGDks6hyPmCPAUMCwya8jN1tYKVvnmnTVpEhsPSGt3F1kqknWJJ6jtRAo6hQzVTgDktjCekuqa7R",
  "key26": "4PXH5baEVRFadPhdKKKutx6XZ6d5jaN1Wreiein1PRUx4ZXZRM9TMsA6X8o9TNQhPqZiZf6kKm8ZtuB1Z7eiTZP1",
  "key27": "4jWyjQKfHL4p8vRCMCenTaF6DUuLTQwjHrjvXZiayuDieb5D6cErQP5aXFh8vwKrrouQBgFv9aLCDP5dLihTmndS",
  "key28": "5FLTbsmBXZXDraKfjFcCUG37payudTRP9TEaW87esP3AEkpKUa5kLKc2Bx71PzrwGHEARgJrb5ReZ77KZAxYSopu",
  "key29": "iuEBeQi5fAnmwNtvyVJi5RASi2Yw7NZXUfCa6dWH6H6gsc8mNMM6a6j97QiGRNgCvm4TJxg55JgEWxWx2MaEEz2",
  "key30": "3Zcd7TFt4tM4PySoNJHyckU9ggkwbHFBwoMaXSfurh62bCbZxvAjxyxW4Zt1qPTc6m1v81eBPLekkAc8NC3GZHUb",
  "key31": "4QDpigU4QY6fxHm86sN1uxzWS5FLDxsrnWXoBgXvpyJ7dBGnitYrGuawvTSsB83qsDNomAuEC67Z2PHg53To44k7",
  "key32": "5egvU862m9zS1CGSwFNAHiyvtjm9nTVeiUHNzGRPXR7mDJcWP8DYH1nWGWzpwsVjA8wPPAvaZXT4rbiTHNWe1CV",
  "key33": "38tFMamMGo8Xin9Q19fPwJvWncka1veGni4rLcswE3uB65mDwPqJiARNsEKmn6JHpyE38sr47FmnN4jbn4rAmq4i",
  "key34": "42ACarBbLi2VDnmkBGdnXKkQqZHCt2593WDf9hDhkB4172unVGoh3FijonLUqkrudUNmEy7AANngiPiRrzMLXKLf",
  "key35": "5Xndbf4PYao6xG6nF27WJwbaz7b7q6wdJUyRyjsrLdrLrvJ9j54yAjEwK7zbqyPD6jhsYbtLU2YfMDHhZHKp4CZu",
  "key36": "3g7o9UotV9qQA4BBBGhDUQG4EmUyZXyVfnYwgcLm7MSHskPcBbRDxizqRop5m7L3ep9FEVffyjHYbwimb6x8ZRtF",
  "key37": "2a2zLbxCY2w9zjM25xXJ7hx1AUCHCXJorfX3geetou335HLWhzGZuSBgYC6j2w3wcgNfa7HAmde9LWyqKrePsSav",
  "key38": "53hcgicdw7A8QVXH6miLy1NMp92JdvLi7HkznwehUmAfmhxzDyuDbgGAVbmnuhhnQzhWEPzDJjZxAzyV8PQTEPVW",
  "key39": "5x34hHNq5AUF1yxZmmtoK8CcJAQHfd7xPg6CFiyq4VfyQHb9H1FhGqQphobu4jCKGqhAnFJf445CquGHzPhkN5zQ",
  "key40": "52oHQ2KPNALSbWCrYApSC8ogzQZjNctE3f82B1GRXkMqbS9xJrgz3cy2oDoiv6D7fU8GUCnPc9tnaR8jNbDwF8oj"
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
