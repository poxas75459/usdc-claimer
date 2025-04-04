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
    "2kQx5fKkCft2XFEJp6WMRW7CYMhXYVFodYaQGohLX7uEHCsywv7SqDVwTJ2AxWj9EvDoMscNZYEvU123JESEXX8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61wmwV7G197YWEmNqwRMZ7qQxt3h62x8omGN9731x4WNrhCj6eMCiL3YWLhxUWJuES7rvaPfsHCMnvd8kvSG84kM",
  "key1": "3mDxGXbe78vteViqN6NUequ2efNW3Ytne98VGXpcQgxnXGMtixNzQkDSLLTRiUDff968CrFg2458ZDJwaCF445FA",
  "key2": "53fuwjK2bZHuQj7zJxUTSXkmT4pModTwABStQCBwKtdSiqkYoZbWSFm9qyEikit51HD6UDFfb8FUjwh5uYXL3XSw",
  "key3": "3Y5cXmsZQ9Mca7KEAmwQ5VXcTXw4j2NrUq4fk3bFYZhzZmmw3bfjXc6cnQr42wAuYT2yhYDVv21mVmMdQo1v6GQk",
  "key4": "hPiWJb8dJZvGTfozwM6FL2XDB4wD8CeCgCySorRP1ZNqyzUCYj1PBWjJu9LXeoAjqjVmXFz81Cbz8Hwcia4Qzpb",
  "key5": "3kgtEPCN3k8xnsRJb2owDchjvyzqxRgTTya9MWhjdNtJ4ZomUZF4NzXdfaxdwhAGVo7GByoErfwheTWivZGaBLkr",
  "key6": "WJ4F3jnJZM1x4uSrsVtetDRqSq5iBYXxYeTz8WZ74PWmtkjYjGvhgCD4oV8iYLiyh9CEvhvjipymNJVK26DF1Fy",
  "key7": "4FLTSnxH2vQwNYVKazGh5mMDQ1LCNfXaiqqp4sqTsYpFYfRwGY7tHS4pYmGdM5N3LrUrUvzRX5FXVUGiWbj4cRbD",
  "key8": "2Xv8srB1Anu55REPPhbcn4pNxp9xo8juqUUAmzy3DRTfYXoHKpmT555NNM4F2MuWHF71STnkus78g7Nh2X4zY5fE",
  "key9": "56K6JcPdi6Mhm62oyPZdRV53ZJoX74iBpkz2tkZnMEWsnLXymXE8t3Tb8Mhj6BJSRmZiXLTCbgoMHk4oC2t9iwRf",
  "key10": "5tZSdkpSWXvFwiDk2wrNftitDkwGaeavDxXCGSH5FJs3qsNfCBrG8vFgWvJzEew3Mew3R738yKGT48oXCzEYasE2",
  "key11": "4ZJCm4qsjfhDPwYxFWse8EHuti3WuPtVHeMU2vX7d9hd356nn3amjDoJe2QBS6CCpcjaCt23M7tLYUe5mgq3km8N",
  "key12": "3NFCtWRHuo3uwhP7KnicTYbkPA95FExdTgonBkwEFaAvY9Tb7tkdibJDEi3rDZLiBc5G6v1c68xsskevEYSinq8t",
  "key13": "5DpPckKG6bgiDhN5kFQpGf3HwzaukMqs3qL1YtzAQVYSufKfguVAu1AFguErgPnPkSwWP97zvuGbRY3vNjQD21Zr",
  "key14": "Xnj6eg7XJsuVeCXRQ3FXx4iWvzpHZbVQ8wV8yBij1kdzbymrnhX9bCo7pz9pReNyAzZvpf7dVNT7YdiUA5vGbyx",
  "key15": "KN86SYZ3wdZTusrgQYqmhewYDNXYEQhf7zmxzT13dmuHP5LAbSKRbbYciYUw7or6tJUvk3V4FQAtyWUyfcTDc5B",
  "key16": "5MYSYF3XqnpoYZRMMyREAqYzWuggMu9kx5ybcAsjUFRy4v93JXU6Ly71AWRstMCubaRNEXuXrTHvQ3NaSw8SFjTN",
  "key17": "5c14bC2cAJjPzWugqYpPXmfL1mucdtk1r6w4hMmLJ8vvs81iajqPAjhP5qeKyiJPZbUYENKcPidtGpydai873F2p",
  "key18": "3E2nxw7WFXFEXR7Jk5SNbMwXvueaETvBGhYZFhH7TbPmTJQXBbfEDBz8gPofEsxxwvVEhvpg58g6HtLVZfR6vDaP",
  "key19": "5eVmNrcNMD353WmuHAoVQ62aZpkmwS5GQ5wWb4jHgaoifpZkfygg5tnqA9TTRBNMHbtFWHboe4Y6cnJuLgDPZj7M",
  "key20": "5onLz9cdxXtbBwYN1wDPKtSJ57MzQixwrkz7dCkPS2quiBU73kd7b7uHMLBeCzwcXFEdzP7bcnT8SaDYjUERpsZg",
  "key21": "4ByFDuxVRyUmEb126yE6LbibS1jWnTorAbXWVupreUdLTnd9vGD67L5RPmZ7Aec6fCjPKR3WWbLPFhuBhk6Tq6DD",
  "key22": "5ipixVjo2QxUZVEcSVgZtcpq6ZXAtytHnPsDDk49qvxaDduGDW9FFNZRZco5gzwr75VmVWSmmMmzYoH9MfHurh7T",
  "key23": "2C4FGjYaZFUt1SUgCdzqL8rzAdnsBZDdgXbY5E1NoRG5FQtC4jhR5fqZibhyuNvatGuHJvBqT4iKXCQMnFUQyd97",
  "key24": "AdEocQHf3ygWmeASrS1qjZRQJGdqUfr1z19mR2HKDeRAq5dhtsQHWpjkKawmRjyRbo5yB6upTJZti5ghUDKJrGc",
  "key25": "3xkNyCCJxzNTbBPVNwvVmCr8yJzWttmH5XCHnoEYVvg5hW2TuxEg2iAetFEEconFdLstCpwacGaUqEmBT23WDXbB",
  "key26": "5b2xZz5KPhuwFV8mNePCZW6EHEKRsTKxqvmpbeHKgphNFKzoZD6AxC4tMQfD9NaHHQuwvbnLu3xQi4k4EfdoDFfv",
  "key27": "jLAJsgJFdU8iBtaKzPL9KSkdGa4yXNJCk8ek7j8zsQgE2SoQ9HWeUFAVqxvXU2adRWxvBQf7jhK51BeXq2XKdnu",
  "key28": "498zrfxFh9qQD9i2fqFLMBeA5gwNCA7CzT4vyyb4A59zVYVaWDXMf4faVgZEXzMHyFZKCKyYwntGpRNcVwQP1f5s",
  "key29": "5Wwfh9kfa8VmgRFxzGhkE4oGEGUyG1fhby2XQwHXpJbwhdEFWVrvg1SPUgLg8GrCdBCp7MoJxSSLq61UT6zhXTRb",
  "key30": "XoM6oNDsvXaRUJ7iZf2nMDLNwVi5Nakc38N2HNNKJQ6APmFjnwKWEkwdjHmvEA9qhUZPTchaU7LsDGPQ5BYScRz",
  "key31": "EXa5mdMXW6njTBy7VyX6xG5hsn1oFVnsj8dpwiSRs5e8ByuhQRRnAGwughmFNr8U5RcJUmuBZEquTseSUELUyGu",
  "key32": "4CzcbnJ597ZQo4Bt3yGDbZaT35tCptEb67u86emsBetuesMY2Dk5RSy4CAsiUXgD5FHXKp5J1zBVybvKGkWfuCSV",
  "key33": "3VGcZZojHC1E9mhV4goaMm1rKTgrDuRL5m83SHLsoPBcmx6LYNUvY6uzudHxHdFBg3X6XUJtAAWQo3Gs2cGZossn",
  "key34": "4dzHFBprRsezxrawqvP6eocHeja8cfD4i5f9KZhXcTSWm3qfeTMHbJjiPqX6gvkfF7vgaZfVVPTAgt41Fg5yJTem",
  "key35": "4AjhHygjSaMEpgqyHW4sdcAqPVsWNo6mhV4rCj8rMQWRp365EGzrJwmoVMRfqbG2E7dJhyJfTShTwzZJ7sKQy6Md",
  "key36": "5VJwe7K8w1nvt4sC34Cd4opNs15XUARe9rCt9yEEE8j2ApaYp919xcsmV1tuGwjm48bSCZw5V8WSyFf5XabNPox"
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
