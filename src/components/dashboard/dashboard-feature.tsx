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
    "5L53TzosTAJ9TToaj3YzNAonQ5oEz1Hq89AyTRsLe2kQ9LYUeXkT3PPGPFTP5LFiLXUamwz8rQWNre6QwM7Q7MH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ChZ5ti4GzNwoApdn8FgyjB4cDeVUroJXJitnezvSBGfu3VZyGBy2yuQTyL5oCdqceSHLpgCF6Rsu1s7NbYuYBKk",
  "key1": "444EoH9V7D6gP1DGBcUyEgd7f1HLRTXBk2c7X5yATAwSkhiEFeF5S32GD1d5zBQzA33xCisFFUVK68VS42FwHWAS",
  "key2": "3ZhXEspGdfPsHGva1z6uBD79kctUBGNa6GGrDf8VE2FCNsXnVAuTMa2ukRepjG54rMArKRZrMuN9u1QPGqvu8kKP",
  "key3": "64T4hfxx8RUYRByHebxv7Vd6Ni1TgX2kCejwfSi9mpLcW4huTSkDAESdwRCDuvte2ZKJc7m26JpjDn6ThYvcZZfT",
  "key4": "27dCF11xNL8gbZqDJk9HLKQXL2EwrpiKB9VqpPqdCYs48zsJwHdG4GJHAgY17ZPoSKE5GULPA4V3k8vujtM6GV7C",
  "key5": "5pjahM88mWSWG3WQf3hcqy53KMsNaHxUGdfq8MuckFUVmVEjBdgV8uCnk9kH22yLth5u2ezZumH1PCFUZgbug1Hf",
  "key6": "2g1N2PXdsqLeVo9NYi3cSn873BiM3HMbgUrtnd42augABEtTvsS2kJdxpARVyy2ywuVp51P5h8vCxHAT1189Qrj3",
  "key7": "54voNG93JsTi4FskEfBiWvNewGp5iHrfx5zjdMrUrNidKgDHd27n22AQMk5HPj8vWA7XPaE3aCYjUb4a8u8cK9vM",
  "key8": "58dauLNSEYEtbGoW8d9ofFNVFNoCTA1s1jaCmSyBvon7wfLqHTTVeTgcJRPhHtGy9iRDCTEKxqZX3MXpr9JkvHyL",
  "key9": "46LKgUvRbXpqMkeyw72e6GSmdYp3PcXhFnU7pWwpvjMxLETCTyzsWJq3hrNmeyfp8WYS4inb1ZpEfraEJfB1Nuso",
  "key10": "3CKYTtHxcfySbp6RZeoyxoFSy3TLoQAgCEYh8YsQm1X9FDytJUz5CK6t52M8vgUxD1egqo5zCwkyftCk7z1ZZqmp",
  "key11": "xkEM8KNXzvk1VGeGZj8yU7tF43NbFGvkKqLPvmMpvV6ZNAWyZFLmGoCnJpXTwQdVd3yVsgxiHocKXPqLXdxf9cx",
  "key12": "4xhWrD7MrkCnfaFRmauqijXqXDoCHjvxzbWV6JjcggY5aCUSn7FFnticp34c3Hd5zkcsBCBi8kPisL2cEdRGkmiL",
  "key13": "2ir2rGm2ktktVcj3qk7LcMPsNsGMDz4faPJCRcMd6yEg23AtqDVYpLTa1VXfRvSkujdh8fZBmyT8QecBXQiR98yd",
  "key14": "4prmd9F2pHscqs1BwwUVsZpbjZ7QrwNveUc6xDB6ZWQWdGaYD4rk7YSWhtrjEZAWZtiQArKkzGKJS7dH5oG3XqNE",
  "key15": "5XzPExzwfXsGkm8eFHgUncgqGFzsWqDvziEdXEKGpPXPoFyffwBHLxC8txwU68TQhzDT9qi8nKRTuUZFeRg8PG5W",
  "key16": "3Fb1ds3kLoAbmcsvPudDvzP187FzHeSF6WBEASJSDhnUi4D3GM3inL3ZhgjCUuJL2pT2rGwWfhbLLqMAf2ueMXZw",
  "key17": "H8np6PPpSMdeP3tFPMHuh7tma2TUiGAtEwtPpVFoZuXzuX27MJ2uUptAxQ4hFAUNrbpJDRYvVV3sQTpyvBxjY2p",
  "key18": "3tzwcNNPK7djN35jcCUUJrbunmr8hnYhcymFQH8eSYut4KZsqtVz2rAWkXiBzSeK8ppyxn4drjjcBEEqgEJBKWJw",
  "key19": "2ixArbdCPuZLPQVR3nLPnemWUmVdBxBoiV4CETudXYWWDQrDrDveSkgCvAMqHBYe5WijUgjGdCwzqJwkVwyaCEcB",
  "key20": "2jdpQPpabSM7uJN1M4YJy7aemdPcT6XDhAhwJXNVn5exDk3wYWLuFka2vNyDut9CGdPtgpa9YXgaVGp49a3yQHbC",
  "key21": "4TcsKbjpR24SNRL1qyYeqdvwyNBcazCaUNgekmhXgNDAq1G8yH4YWCWLvg9dokjZ8vE98hVpCEtmJVmdDmB8ESM4",
  "key22": "4QZpnjUGqXicHK6iKcmxg33yLoRmarkmG4A6dCCayZCErq4v7m1Hqjh4nDan8DHACeuD8kQei8NciwTdUus6JBo8",
  "key23": "o6mv8HjkYacG86mL94gRfY4tCzXi6bPXh3DmKKFn3EUwoCPrLNbVqCJJ9CKB5KjJNQxwEsWUL42MwQLofiCzdun",
  "key24": "5EctyTUn8cirXPSKCUaUHHKk7VSUxFijFAiAftQpRw5PenmucYsUMFUwKGmTTuy1iovihENmLYdLK5gfQoW5tfgW",
  "key25": "5D4kzSCjgGwXptEgB6mzsZFCau8Fwn89BNDDD6anqTDwisTJVRWNarPmpLskMJqp1Rhi2VmC9uvNmFvvy9NjSjU2",
  "key26": "5aDYzJ9e2GQutACDPY1oWWvxzuost2Wv4A4bQzJR4QFfgovAzJKmi7Gd9dxQzLPav7TVJvQBaGceMMk3hpeDS2jh",
  "key27": "iAeuYc2yteoN1SYKH1H42diZAevBYTBf9qZgmuAbty6uQ5yDqCzUHM7iFZ18sNumSm4E7LjhUYzqGgGpFWC1BDd",
  "key28": "39iD7gnEur9ZymhnWpezzmP9gUFPNEob4nFfchAhGztHmxYzPw33TLDX8okVJrz7sbRcm71mGouhnrsDHvAtX8KL",
  "key29": "3p5KdfGa3f1m9yee5f28ffzQdpnaDoAsFHmY6V9QN6bVi67jyHC3TneKjmboHq7svtLk4diHpHRQqPmmuUPr8Xt8"
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
