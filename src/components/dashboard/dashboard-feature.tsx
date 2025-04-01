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
    "43r7FdPExPXC3pioQCVuEsXkNRTZuZNQFYVzBLDqYG3eXEb1fCWhoDz5XPCpEddaJCwcX6Nd46q5cGZM1uMf4MDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e1FhoHGaWbhd8QSDm8tnWos23VyajU7KQMXiBLMcMLZD16T1GEmd6bMhVjtrj4DyJHZ94jP6PvywZqC3wKuaHZ4",
  "key1": "VWReyWSW5jfs1rEP9S2HhkdtdL1qbc3mPVdGZ8uaBQVy7cEMMR15cTinVoEhqcQHxmAoqPTwBARrThmTSqYZXv3",
  "key2": "4fSPPQDTmHx6wHqpCRW5jXFPgPgHZfZQyUPGDUfsfPCT7kxiZpb3ocLMMXrEjeBqWtrhpCgvHRUBazfzcfWwaJez",
  "key3": "2FuLo4aW79zaVj4RGFPBgpBGGihRm34B2QJ4SYjpgc2Bk9UHHkio6u285ex7AaCqXVWFEboDUKBRE7p8z2hWaSwE",
  "key4": "5YdsEo1Rf2pkqma6STsfFBnTi6cqNhSqYAqcfHXh6YXhk973PvKUmkvfJUvb5NDbsBab61qj7zRyv8T6etUKBdr8",
  "key5": "stELYuaNXC3zgNsVQhjCSDDrZYGtTsoKvpyUbNANVw9Rb5BHGrZFvgynqiHvMqXxq8yddNUn8HUXRBnvEzxRYx9",
  "key6": "mpqdjfboBDkHK5VKbS8ug2fgEaL8UYnnxF7pXUy4SNEWgHiVeFipNhc2jpUAQATRkrJ9Fir3XubsnwRLbK8ynk4",
  "key7": "3eDKkvLdXfdp4ksKv1ETHQtRKsZjaMsF2esYSxXhFWrevFgKqsvEDy8Y6oztBQJ2TAD9daREUAhSEJkiT6SX5S85",
  "key8": "2786gydSEwnjjxmonJTmjkuSs1TUDyCTTAS5WAsycEkbn5UnaUAAB8KfaawWNxWrsP1bdu6Sdd6VS56Q4D1hr6YX",
  "key9": "2TN7gLTZ8eTD8eeWo4W5RMGn1zkxMxR3qgusq6bFb7qtUBp6tE7cMT3jfgEZNKe9vv9ZS4oQ4jqaczTN1hNQSZ2A",
  "key10": "49fhHSgGgcdh3x8mYQSurFyVkJaEjWFKZS4QQzmrK7RNQJj4fG4bSKc1P5myryH1HBK1C8xT6iQvDPoP9L8RniB5",
  "key11": "3beJUSkoYp7EEJ5HbGZt7h3mYXoFykC4b71Jy3GweHMC6z3HrnDCCFfoxT1USSJ6nES2VwYJbPFKo7iyUbekLyDs",
  "key12": "2bhT1mZTB2MJxxo7NJU3VJ7bMLbWWYotGtfMhMWjwdVbsXQfpnXqp51Usjt4oXJV3tKoMb54fzMDm84TaE7afpTr",
  "key13": "3e7QwvRYx3odb9gU84VxJVyDkctLj8cVrktkFh1rkVCk9GZ6xTseGDpbfZbg9hwEoWNxerj2hw6oYbCYHQokUGYK",
  "key14": "3VkA7hrnfmAs74nb1QX6MsLeucr1TC7deFewc5LN6rFzPM7wf8Gp1rC783cWZThUQwV8yvdxYewuP1c91HFE48p9",
  "key15": "21pWZ3anx8oT8BNtTnxiRUqDEXuEdMLhpxDEoGz4Czv43joiQRippPeXuoDJabYpbqAYjsg5TWxmv8WktA46SKpk",
  "key16": "3Pf75RtH7YQjXrw6C27QpvuJGEeTeA2STvFXgcu8ca8ShkNfL1JMseogWjqraobCiTRkRgT7kmD7xMshjr3CYZAf",
  "key17": "MHjr6YERhCZ8cFGqZfmr5GUjPiAR39yWxNLqaMe1Vcj1SKKTsejYaakFfABMSYY4Jx2wwr6BGMUjmBEf5Jy21KB",
  "key18": "4NcdZPJ7BhhLtAsLvjY1K2w5nQAtrXMxzEkpsVMGv3gLJZps5aYNbWBA6vi5GhcepUowaTB9Q2U8s5zGJ2AGe9cX",
  "key19": "f7z4gfXmsYtzpvu1NUFEwXgZdvn8HfY6um5D3X4CSq4qrmFXxJfKCFgGJFAZYcHa53usYuYayAfivm9ZEcdS4sP",
  "key20": "aCVdZSAkttxzHYvPDY8B9imLu7YGNWNexYCg4Xg1So15DW66nmnNN187geQwYR7UETVqGwp3gmAWKSSj7xd4z8b",
  "key21": "2CziMt3XgYaEZ68rJEHZuCt94EcqRZZ3WuKoZJZ41XD2v8PHF8nng3Uq3Spx6t5fahDZHg2UL87MZa1g6ibrDUjN",
  "key22": "A9T5FMnY2dcsbFzJgG8tbz55uowFK4piNRReCTYH1ifnv7tup6p5KCreWpLiUGiBzZgeiMQb7YqDrFUXsB3vU9M",
  "key23": "UzzpWSDx3y8Y6xCejdwvDeLxf6sg6BUhWnQcAccEbQeanBQUubYWvuKgtCzTKMdHaNz8iWHR4vhKJSBys4RyAcA",
  "key24": "44H5TbRdDHap78JFjg38FnyUH4RVbxUyj4YV5ETx6sUcjKkp7trvy6dHeYxkBiv8N9BxVX5dEjPgETkvBC3GFZMq",
  "key25": "bY2dWVb4LKa6ZTf8gttKYHEsEWbQSzsAXKsfr2yjJWhSEC949CUks6ixH63qL3kj8ZjbgaF2ziPRpvGoVeE6ykt",
  "key26": "5rMCJrh1JTP3thXG52d4opiX1whEYYTvGBfEF78XrQmyWVKRWnkqJwv8YGwAoWvxSh4VwrMDro2LL7bACFCtt9VA",
  "key27": "58v5LX6mmaCX5QNCW86hJWk3QSR4YrXK52N76xyVms1JFKvaRDMb6Piiwq5kT2C3y4S3wESL9h2htk9RoegpJgb",
  "key28": "RJJ9HNtCrCxjyW7d5SKYZHMvUGSkes5cSUSPGS8tLPBA6gYtkNiievtfdcd35kPrJtWDgo4yUAZYd4WdfpgG32T",
  "key29": "5JWCbBjMZGjNssL8qmL5zNM5g6UNWmFuaLfEUjyZwF7a7YMSBLHiVDtT966mU5ZWRKioygFtUupGtAYjMX3FfQJu",
  "key30": "4BqFRRBKtnAbfwU7FtiNEpjidCEBdzS9F2Xk2UQMxwZ1vswCbCJa9pQfS3EZsCe3P91uGdU7HD6kp7hgChVxywMm",
  "key31": "2vYAZGSwbKLBvyrSeLExD81qjfiVgPFLDhdkWoxkDCN4dt4pEJREChACH8beTGRzh8hk1UBf8RZFK4LzGbe7qpp1",
  "key32": "51KqJzjFQq5DpCGDPXC1C5r6QkHsudqiTaHPu4g6uNGMMvn9FyEvyLyvut52PnJYxiJCxwDvvUdfy1uKFYYLTFwy",
  "key33": "22wXF1xsHnne2vnLMEt3xadweyCgrJUqtJZnfZDC3YtDCVjqMXzJ6KDnxBfib44ao9pQWkaadaPYcR8ZvPnGnLXJ",
  "key34": "wcJG3ogLXYxP9jZ7TpMBknzhJyrma4Fi8bNJwTh7BRjbgxJd92z9tz9zm6GYPXo2PWsUeJqrEJ7i2abTKkpEpsy",
  "key35": "2Zj885htt2Ax3s9T7tHGomu3vhexBPghdyki8tBqo3rictkHu328WD9pdMqGS3A6Mfzru87t5ZmfoXy2WQbWx6uT",
  "key36": "5crjqnoZQ18CrzF2kWShvizapPZobA74w9Ad8NokzbPCQivDCuRbMsAKchuV5ySZ1nsX6hSwAdDA2vy2HKm9F5uR",
  "key37": "3i7ukohKodgeubSduLNC2cxSjyfD9BUXPqJ4jB2EAEMVYrz6zvsShFgkbgXbQGBrZ1kknCJFDZmvETqr3fWaDJhD",
  "key38": "5bLsX7hw56Sz55Ni3MG9UjHLfyE22JmGAKhwMFQGineGt8Ts3Rdu9WTA1gvnk8bVB2itvrLaVmWyLNMC8powP6Rn",
  "key39": "3MSWD8zfCaixu5xWnCRByDoUaxQm8mDPHwr5hc96k918WqobB2Uy145N9WKcmPag5bE8zZmzvdqeY4b54dM7yRLq",
  "key40": "2CagvjvT4LNw5HFmwaTE5sUtapLfZoqvuLyLFTpzX6TP3LwRqDc9YwsUtnfuV19ZscA7Nkpdh9YVfQYj3VsB6CeW"
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
