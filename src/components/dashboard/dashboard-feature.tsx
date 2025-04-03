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
    "5o7mzwcmALpVCLyEJSsXr856hTY3cheGWHYJpMNAYyuKj7mfWQxPCtnTmqSK5tbUWnWTiV6h7ZaR3JAXr881Gx8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dk7YFMSNpMj1hXvR1jveD9WNykSRQbLZ53CMYVkeF9a5fjir4FGFZoQSq3EEnatRzJypn6yheMKaQgQ2UTVmG6B",
  "key1": "oaxg5JLh6AoExuenMoLNBAVV1VU4pmfzFUpSQg3TZg1pbHsG7ZtnzRGqpHkAeNbKRw2TyR7vJzTrLFaa1Z6gtcj",
  "key2": "EZgFJUnPyUxDuwERm9wGVAz9cmRYPU7CWagBWMYrWqTezMBCD8yQjaMNzPZ9TZFgxpDfs6NAQF4fR2ZBeLoVsMB",
  "key3": "2v7snpBvPCzE14J8mpt1kUB8pF4wsf1Q42HJSWtb4Mn35KsvUnC6imUFwgBfyacGgNNfbFfd1gwEEE8aQxeVtcZK",
  "key4": "xjy3G79fcKCcPHrygXy5mWseHTiufSZZ5EXtdAPnXJhFJvKgqQXhnrNEhoCfjEYnB9jB1xrR7mALVHdQ6ni5fTT",
  "key5": "5Rs3MYxNYZGoRRU4Yd6Bk6S4EHNC1zwvxsKwmwSMEUMrPU6nv2ecLmbbDhstH1gsokiHsZBFM4yhWnt4PKU1H5MW",
  "key6": "4UMb54NqeLvEVCqxoH26cd8YmdMLmKbhEHdmu5pvGVagGkz9vhrDkHshBPHZjBbwJAXq2EK1bdCX5kWwX93Y3F6P",
  "key7": "31bYr4exzxqDgMtu52NEd2E1Br1LZLRGhLkvZwPoXDxMUmrGJqLn82b4T65Qo4BVEzHdqBBDLm8W3yGVeu271Tav",
  "key8": "217vD3iCPgbtt4yjzoeQjJeWSZqRJRrjzdYzuQUtqxVgqDsHQ4oCtwJ6XZ9HtnNUg9S8LuL2sbXnQFmjQ1Meburp",
  "key9": "2zEKbpvCZvKVG9VeysFvV2cuMY4TWmpKjJKKEoxrThTtZTtxugJmzrdzYSLKE89M4wQ7oJooyNSt8JnvNZEHjCAL",
  "key10": "3FnH6Xx2YSGMdHeR2GzRpdbaw8JJfy2ziZdfJuTbDuW18vV5SyhrmDpc6u54q1u7rD9Aq3Mg4Msnbvc9Bq26guAe",
  "key11": "3xFuY1NQYuZhytxiWAPkJ2XYovcA2FjJwtA3u1T31r6LrbtYhDucmAVtAQM6uY8YZ9dnR1jyJxnJzCZTqrmSX9hU",
  "key12": "5jSSpWDGPxjN1xs8hHHt81BzKufjATzueuGrN6rpZqKPaeqEMdm53XDtnTShQSaZZ98sehgkfn8gma7ftwz8VxCj",
  "key13": "2agAL1tmC7MoN6GKVZTkK4xqKC8HxyGqyLRHTC4w6rmjSfGXnj9ihqty4jgkZ6gf3UR77nxiRvppvM6aGD3yXDEH",
  "key14": "5egBaWajABJ7ZaTZGRrFdgoZ2eeGMdPsfchriEngRCzxrsZzXMaTkiHki26HGHLAkNdh8TeaeUZMpux9Zpurxu2K",
  "key15": "efPJi8QYWy3srxsoJ2deHrf5fhhyV47RHcAyP7YSBdSbFekYvjiJJW6tD8NtRTgL73owBDX2u8G5J2Xu3S8os9b",
  "key16": "3TMKVXkHY3AtDdjt2k9rbmQwVb9PqGB8uPH5utkVbgapMW5xGYzk78QNknqLkEMWtq43qjtP7x26Wuaf9WkQwd4X",
  "key17": "5bVYJU4ftFxrgs7vmmQp4pSBbJV6WYyVsUc6EvRG2Xnz6ba848WpEPgiBgY5BjetMZoiMMNPQKFwJTyhkyMv1SZk",
  "key18": "3WP9C4pDWXg11wKV9QWp1TqYHGXo12sazT85DJcmPXkXZwu1Yurcq65jWQ2TyaCgvoprNbQw5E9xa29HDtaDksK8",
  "key19": "4JkK1gbiLat25ECyVdTFhq1Cqx5Z2QuWsggM8PX9k4kVYZWSedWpq5TLCs3xHEzucNkYhVpzM5gLX253UJk58eZo",
  "key20": "5gSZL3SciEEg9nzxj1Rpnktx37g3iApwGvGRMTT5GB3NaYjrBQRaUGXRRe62QFrBSi6he2jGdwJR2gT1mEpnZyCT",
  "key21": "42nir2qG4Uuzmu4RJj9rNhBCxMg96uCRrF5VjE7eeLn4XRaEH8auVbdjZF3BZgsdHvRMqea3i8yZDWEhLVA2asL7",
  "key22": "37doBTGYcTve3i8Eh8tDquJa4SHnqBmPeLKuRxjRhD5Lqmqf276fUg87B1NQzrzZWkxneDD6F3t9QwnCJoQFMGH",
  "key23": "66Dc9WHZhbevFG8tP3saX9ai41A25dH5KDwQhkta7y7uotxxmSqRUvnKoSTQFBvG5GRyVYSyxPNt5JUoRbWoNhZV",
  "key24": "5WMXa4SDSPuzXPa8Rm7WNiCChKbb6pWtUoBCHFThHEKRmrx7vJo7uAFXSj6ARXpZk4hJ1dYSEPyWoiKXg4JnrMR7",
  "key25": "4ZhHJ9ZtUn1pKUj2P2Sb2n2XoUWNs54sCR516boJx9Fj4E5XVnN45RinwRqhAVXL4fFpxqUtSDG2Q89E7vCTBjLH",
  "key26": "CFxzJLf8JX91vjuz4ry5aX5to6FkehLtpVdia1Fh1fZ1STQ23XVUC8Dpv63Zvj6ZuWD53aoUuM68X6UX7nYhsWL",
  "key27": "5V6MTnBMvWSwQaKWcNKc3VRhFsTNYqtSrVidvVBvpFYkp5amashpJxbv7DXb4tW8CCNhkUiNyutdiu7zQtZFxL1h",
  "key28": "22jSkozoszsogw77gcsvydtBvCcKWuwNLRY41Fm5R7nRTh93PuhGukuJbaTBR5Tce2HrP18ZDozDeLzWGcFp2giV",
  "key29": "DejsLyGuK6gBpMVmLSJRJr8nNNFcxozYmZhzKQsfmmDhHWQ9MtZT6XP2CYm8EchAAMrzd6KuWWxwdVRhfpjC93b",
  "key30": "5dVXH2Ji12qwwJ1mePmEvJu2J5g52SQ5TAv6tTR7c2jwHF1XAc31zSa8DTubDbKeoGbLMZ2hMSQRMCx5pwSMiBRN",
  "key31": "5SidS9ERyw4NRNsjeKQ1Hfvy1qDFXsNVJHteggjxUCsu3d5ASc9amd58RQ1jFytiLporKmuvqHocz8VXbsVXaxxt",
  "key32": "ZPo5ALX9q7mUQxNwEaRaGcg2xZvnrdGC77NeJZ4fWw5gbLmhxvHEJ8CP8XYMo3VKHB3sAyGdBi1GCUFLxR5eTWW",
  "key33": "3sKjJLt3CtMyBLiA6MvULtdZz8QTZdZeVzv1Gxuy53JTfT6aPwagNZNQcVAbTZHEKaVhRpZLbkYcmMNViuH8JBd4"
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
