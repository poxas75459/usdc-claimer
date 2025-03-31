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
    "5GPpXWrTBxvjUA1K4fe3BFteUF8nQQAfsyCHLuqNUxLq2PdZt4VJ8PhYnRQ9LK3kzW1Bw4dwWXE4XKgJogzXb4sZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n7F55BAWsVms6646CnoRi2xpKd656TkiudwGGVVsUERg8AXYjXLtYYtHb34GFELrA4c3f87i9HtaUKFbxcdkMMv",
  "key1": "5o61CEuGKLocMGrqQHyUV8Skiw6HR2X9ihdtfcx6VCAvk7LEZPxPp9V7p7Lr6xog5hVSZYx1qNQ964WEmeLNdDky",
  "key2": "2JgiZUAFfnkd2bKerPcTgft9TnAw46wui8hDCqnwADrZw8GdKHNcuFzwAGnyZ6imWA2dKs9dwvb7Mxyi7sE341en",
  "key3": "2X7VmRF8Lp7MmNpf3FU4e3RmXZrr7fKW4R7xinzZPrbhrUic2rRrHonfydwR8AJ6aYgAi7Ly8yUQDrvVbPhicKGw",
  "key4": "5PVjJQUTc1htd8CLjDGgAxjS4we2iyRtJDVzfyhCubhWq7a2jGJCWpo7ADwteFSst3FvUWBbVcgpEHtPFthN9Tmf",
  "key5": "NbUWpssRinS1Prdu1xbdJCRbgeJm7UrUnvjFDfMfu8377RVofeV1oDP1Lrx4CrLMMqWPURkjaG1WSxdJKkdA5VQ",
  "key6": "CsKcvRqxSKFETFzrJMXFF7LdoQjDcKEtFjHzFZW9LXcz1FZ9A11ya6XXEJo2NTTA1CVZSp3EhwdtCVcHBbKfYJi",
  "key7": "gMfQHJ4UXgQVocDGLMkLoYvxRE1yCW2gfxVTRdV1Vqn88XwBaPuGaK5EtpZ5F76YuHwhDy9aUM5EFK1u9gZ8fgq",
  "key8": "4SLjKUeEWhMBARmXbYipHJC45Z9YeiW1yFgpdePX1NvWJHy2VrBcfxbJZceGLJEJpcMrUd4LAP2LyHSu9xkmZoZ",
  "key9": "YmwCDMhGr8vUaRyjgPhS77yqpBgViiABCcRWNr4b6UUkmkk6VmK1M3VaMnkKm1ZYChzUtbptrjZKVXoykz9wUhX",
  "key10": "3EUYSFF6yGJYFhhBHGR87Kt5NBcmsWQ9tLa1SScodtQsHMnshtaSt4UPXcfwr2Sch1ibKUDNqPV7fEQ6n48j8X9H",
  "key11": "4K9H2YdZgVhkSjXNnUpk4wxhyELxVkTmrwDXJpvU9xwg5PJq73qANGeerexsEWMcd3EdbRixonpdf4ygpgRM4Vet",
  "key12": "3zrQXR5X3CpFDJBi5VSmScvcjDGS3PX5TguwRqkiDhBNgyPdsWmUwSQfgZXDrJqSdLFJtmPHhLE8yDJ2Kt6hjdzF",
  "key13": "uzGYxR4eUZnDvWHupFXzVdEZtyQD6baWZU7NkZeDjrh53LbG3mAbz1Q23Q2AZTpnsrxUKLcYzn9GN6rEmdU6B2F",
  "key14": "4qFAkJwDp4U3a3uz1Bfty28Uo3MkNnRaWzh1Fwqe82sTAw9yY9kjXr5YrXfXbgL5qfvbPf62WWh7NXjDeVAPxqBY",
  "key15": "2WFQvQQ6z6ievptKFwhWQeVjReV8iUzS6578ZaTQ3KqE81DGXTk7auKL56nH79G2x9GErcE7448dZLNe5XgpxmRc",
  "key16": "mk8gGjdUQD4i3xpuQoUzeseKfrEjce8G1n3p3PwwCN9HM8g9bWechDMECMCozYRKv3E1N188tBB6TDP1zCHgTEd",
  "key17": "3o3xWRw1wzZD8g9wNa6yKwKSwoZkh2tUaSsSrGD11cgdPWPH7YiURoMLEgatidS2URzdSxEwFM6zp1vFbDVzYBMt",
  "key18": "5auKmYgrWbBuzD39386cnQweTKvBbBp3uC1FPajWZawugZv5fmwJCqQSEoGSU78HX6avdQRSmZtnFVBQP8xFZiUX",
  "key19": "5m5it36w32fq48x988h6823xiNipGvtVK6KNuS4PQBUyTRiGcid4gMSGvfKHCjVeAFB9NHgeciEJkUfJhc7Ti32U",
  "key20": "2p3gZCTBSAu5dNMa2WhU5BpoN1QoZVUAtHR7CUSrSv89t5D7zfeYgd4ckbAz2dwgnvVW1pFutC73goL8i5gKcAcc",
  "key21": "371ir7n4uAEKpQHe5ZWZ9Qm74BZb5nPabFSTMFwYkZobw6E1jq7L35RJoWwiQ3bUK6Gr8JGtfdpkDFKcB8aPigxe",
  "key22": "2HZzGGSbQSMtiMXTinBKvwQnBxWGSiLQeFVyHubvCqX2sZc2SetKq4CDq5Utxu8HJABxhf4opywoyRZeUDhXEsGL",
  "key23": "21qWWBFooQPayhV5cNNq7KwC1yG9yWyvFKhKbyTcM7dNFdPEci8U2sHK3Xo6gd25csqVeWxzQJ6j33gV7iEhGjTP",
  "key24": "4Gbbma35m8ojx44QHazWoiUjxyv8zJdViiagCfp9pBDoNzDcRh2Z61iqhrnVL9WFgH9eexD5sRCPWYFazPtxDhdq",
  "key25": "5aPo7YmWagguzKvPYyiz29aWqmQM4fUfJ34jU921fGVxf3BJ1EqKH5nnJGU5eAXnxbju4VBLtpHSdkwDdrCRdtVv",
  "key26": "5hYCFYozEsgNyDzcawf8ZBWneosJURPi7RrKd1k4yAfCgHKknmY7fioekm8uvD5etWbrhEytcGzYQ5kuL9QJoryr",
  "key27": "5WZ7V4Kums3usdyfq6zricePYLUh7nhDYrep3ABbyK811Sx18e8qjzhZpkuujRwmPTAhcYaJDAR7C1dXysryqTng"
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
