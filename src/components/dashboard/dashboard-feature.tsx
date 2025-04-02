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
    "4oTFrRJQk7MFzuhZ66147S6HN5eZWDqkfeYXA8WYQoRBTMjF5cfBqbaWprHcsNm6GEZvjLqVp1BbhoauXS1TVkeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ihPTNMztCQ9oPV7z6o9phkTkC7iWLL66vyjJHENieewHatijQmpAE2TCi527u3zEupTY5r4zPQwDscQW2XBGrSd",
  "key1": "3hu9KaQBAdKW92cavS5WWpoS6JUPxo7dsQUDZGxLGunkbro4tGJAAsbbSW9RZ5JXYiPrfDUz5uGsG2iWd7dH1daR",
  "key2": "3hzrebPHivBrk8xgrkXC8kgdRBd3ixhtikNqmVXcA17qLU1h14r5FA3YHmhaA2BQkPb4yzq9oUytqSMYQQVa8HPh",
  "key3": "ZBgbY5ktm3RMTSJQ94mdDwM2s9zy8VAEeiVAQyorH8mb2zhZDaRNgLTg4WYEZfb5wq16iLooWKrHHxCruNZnoMv",
  "key4": "5jATzkSGkGokkyRyqsg8Q2RXqrvLYA94XGy2HRAPvkYE5Cynk5zRAA3ZhoGYhqiCwtxwXA2Xf8vRR2GfseF9vf3s",
  "key5": "2RRFwf6pdyBjYeLwLQzXoVWNRsE7HVhXvJM8Eh3P5zxTZQb2eE2th2bc7nzCfEYqVgqr1sX2XvkTurVER5ujNziu",
  "key6": "5yP3d35hEJ1XVBv853SaWrMRo2fNe4zyVPJybtZRY8TDHHtgtxmSrh7d4sJyHQ8kfczK7Fu2qnSyX4B4nTggMpNN",
  "key7": "mV7cx3TLXf36gjfRmrn2pwDjMeE4z5M8bN9i1b4hG4pysFCZorUGAYJ5uvKzqhqyFdQhGkCjbDLc9XQEaErNc4M",
  "key8": "5NU3ciTdg5fZy8CGUDFPtyJkUsygUkheVECfbdgYA7iBPd6UoKZY6wgywaeKi4CNQJXyRtTufm4fRKEHfbxtmXdn",
  "key9": "65r7eSSk7BLMeNHKXyY2kYa75MKpsecSGR2dCQ1oq4rvSYQDzkjQ9B82FR1vp2xu7XBAcZG2EGLUyH4Y3MUCGLDx",
  "key10": "4QoETUGfuTSkABHeEN7fUUb7ky1vhyLXgDgasvWPUC4TKAwX5f4smhhfurx6WXahB4UWnxRYcQgYVgNnba95vNzp",
  "key11": "56656ADfRjSro89kUUZueyAxPjUVAF64kRc2Mc7GJfLtQtB4WGoeFAuxcYiCi4BEeR898XhYL5BrsEyoSbabTjYG",
  "key12": "rV9oxhUyjCGiC49xtWxzZnWrBmZeJMBKpAGmEzr7QiqM5qFSR7tdB8qwVTPQWcSrH47UZP1Xq9wsBSPJGQV4Duu",
  "key13": "oc5sStNXVVFe8PKZegnw6Fot4KxihSSNtxUw3GaszoR9PxnbVT8yeDaffuwPm4wYgH1cpFirWH1jcPaPLXey2Yf",
  "key14": "3iP6G3dbpL7QWsdD2ENi3CjvV6RCFF8EWk14WfcTJ1wE3W2iGm19vYcWZGfEn32YeSSJ9JxY4UsNiiUNxZzLjUEq",
  "key15": "4eqb5F2McBHcMasXunvY4tVxrYw442aHtZCJj4AGg68hkiZFhY9bZewDd5eZ9JXCGqYkJBmoYumKEegQiQP5Zp26",
  "key16": "3WCRnktkxgrcy8uaufHiz9gFnMetHtmYcTfLYixdx7H4apTwLs4qrpYRmFmqyWvuMrae8F81HzRPowA5PjAXURvR",
  "key17": "278aW9XdwpsKS1dzv8LWRp788ohAWU7XoaCQJ23XfWJkD2TK8zkAo5aP8jGhoBXWedWNH5uvSTbqfgjWPEgLZpNT",
  "key18": "42jnkhCU2dY7iTX4kciDQR9QRzD93b9ZBfBkYJdK2Td7RHGqRBS7hieMKj68hHas5QT7n9MRa2Qxw2fChoaaXPFG",
  "key19": "ELAMH61QKomL69VrAjVQoSTHkstcPn5Ku25zddUvobR7nLLaeieKLmBZnNLGZ4k1de6J6kmbNQQ4UjPyT6mnUu8",
  "key20": "X5pu4UoEcLA6ksupeYpsyiiANktHj1sAgNf7A9yepsxDBV2ViB7xQuMXh6MiGAzoN84qVm5Dzs3R9DbfCPdZqGf",
  "key21": "34u4arcdEZJPdUM6qBuiXSPzdeG2Biy5d83q2nMsEpn7CpSuhn9kqCQ99FnsNbkcN29xDkhRXgwCq9pMG22f4XxZ",
  "key22": "3qwrbeR6pdL17X5MFNdYpEnU3Vrh6WMGGfJuihkWEzW4SQYRAwPyYBx9GgxEXzTsbA9KqQmHRA9Ge67Vpec2T52E",
  "key23": "5Euka4E6msyhhnHvRNKgEJsUZswBJkhy1hsLtG4LpDCaquHcBeM6cuK1Srr2AiCWvnxzMW9StBBtwz1zRA5H9yRr",
  "key24": "3pD1ZSaxuPeZdLmeZ17UcgRmwmp8hycunYse3n7BKDNj4QcsAsoVqunNG7oGeEqgKP5xLcALFTLqsTxs5Tuwjbxb",
  "key25": "2Dk27FJmJRpe1pk5CPPBCpECYAHfSGVwq1nXAKdoGeTXwQrRQiqbre8n3AMpXGsKG8hkVHyXtYJq8x6yWRTsUHdq",
  "key26": "57wf7kJQYPVW9quRFob1wvDFhziiU1gN6HaQFPhHzKQAdsJQuPm4tcgRAf8jeWgdUmNqD5Rus2fPHuFQodGHNdHx",
  "key27": "5bmLnnzcFBoHfB6LZuWn6PF7yDgjz5Q3pRzLEdrPiCdCMJWsEqjx2xNokHap6d4pKeDAb9ZqfAbN8CGEEvtqL9Qq",
  "key28": "3PnrCawDSZ3NC2DSkwZ29rYBk6VNethmFN2z6hikXuVQojqCsvqwDkoDexmbMA7ddXF9QoK7Bkw85BmjaNwa7FdD",
  "key29": "3gvPrCwJUqcTB7UpCqHAJ8hAcnnJmqMs8LP5bHxMYh52N2E7EcUZmBvSM7fJehaSJGFXGTuQ5cf1xPmANjbXCsMV",
  "key30": "4djHQfeu5jZHVQTQ2n9twwBgZpDZBo58cY1qydfVdZer8dMQWd2jP8CF3XRZUCti852jc8M68iFWSsHkVgogrzvK",
  "key31": "5xELXL9wWiT1QQtywi54GxoCBfs4NAf7EpXzU94Gi5SCXbyrfd6xVujraEizEvWrfk2DWoiJS1YvWzjXG7BBX9w9",
  "key32": "4a7G3p5ZYHaUjRfoAHkcAKDe9wUfDKFTHLny6sGoWct37o6rQJbFdYLYAW8yRv3q2fHxXKSUpoJYhJFPmfRMTm9R",
  "key33": "4a4UQ18L7qqcwzpKwxaxP4q8w6xSaszsFfiwds9KkAsiHdcTGb5SfmcbZqpsLS6FYxbe7FCizZwce6YqPnRj6yxb",
  "key34": "3mZfaApqPnJvciGobo7f7XjddynzsrpwRJcvK2QPHASPdtRhEdZz6gFeqVhpfQEhrs5kUH9RJPAyYBuGpyWbPe3C",
  "key35": "29KMX2ZNS4YWG9Yh6hj17YMYA6c5YnhPhvWvhWiUeSBsZQ8unaXnxwvGduYQKbiTVsBUHWX43RREgrUZnDQzLeAp",
  "key36": "2k9aMVGXVEQjkGVufqvryPgkVYcjNwWuLaHeJxXULJH3g9xUBzn62zqtpczU8o9m4dEVnq4CHVGBqkgoh8NdtUVS",
  "key37": "53utuP3gQ5sPjY6zWSiXPxTtBvQo6w3dgQT2g2WoYXqGuTjeXY29a6HvnUwfyPYsqRQTkc2mKD7ZeF8zU6VUV2F",
  "key38": "5fhouhGpiFhR8RYGgrVXycXZLShL6NRGXx8UbFeHMcCCBEtec9z51MEPEvkdiExJKghooiiPnuq76bv7ewJ6zPMN",
  "key39": "3SU7y6UJZS31aVQvRHb8n8XZjb3HWkc9q7w1qUFsm2P7CH96T5p3tRGf5uPQNkSvxNuBRB69a1M7a9L8SfxeRJ7p",
  "key40": "2ivU4kH8XdJMxyVVryNeKAZrsv6QQA5ngkKJ2qGzPbs1czK1aTfNeHGWnny4Woh9787uTPbQ34Gc1SH8XqGbtrHk",
  "key41": "LGtunc6Ka934wLzNZVuL799fkfXkjvWw58Adn7pRVW7w7mCLK3Q4rdUdW5NDhoyJqVmjVoDbKbcLiuDCsCjSeb7",
  "key42": "agmnz29BQFBwdJZRDLMNK2KTm3R2eVmzBhBd4dXZfhwK27LGomQbRhdFJeVAfznoXc2gEGBGU3YWw8VMWUNpGQQ",
  "key43": "JYEpf4QLwrn64EsQsVBRf6ksPDubpqUFdCmzsrzs3rxzvhpCjV9Df8JQmHmWbHv2KSEioDBNtPvoDSSYi8zXHQF"
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
