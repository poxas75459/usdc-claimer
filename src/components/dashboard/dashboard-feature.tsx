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
    "4PXWEcVq8YGL6PSM71cvbARBt8dWhxLyG5U5YJtxJtApF8fUu7VfnuAn7sCgtcVDCeF4bt7qrc9eB5E5eRsiGZ75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DzzZ6giK32hkLZkq1WKD9i8qrNCS95ochEJwHyhjTXAARHQLgXTxZzd4PMT6qe7bQssMbpjsFWH4jGsb7s12Jq4",
  "key1": "615Psosb5SBVKrBuS6RrHELagsZxFs9EDfR2rz3zHdHk2u46bp4cXfG27dH6ZyeKXSq8aenhd7QpJhbf4TGiDiaB",
  "key2": "2Q5wHBYcJjDk44rmzEWSUA6XDYmWcGoZyNE9a6M9CBtDFCMdvcm833CKQgcgqA6wDStUntS13VGwHpjX7yq3UyLb",
  "key3": "2WaYwhJm6BvUqe2ciJxe4cjkGsWzi1bn3w5z1PSSJHNxMru8FjEjTMbAk6HRb4335G9AUFNWJZRxA83nXPKQQNYY",
  "key4": "4MLaRPx86eYkgUHPo7znHaGC8tG8QQ1fZyiwWNeWy3fmEyVFnM5wmBU69QKnL9HobvsBR7qtdM5sHnF8mXHr9965",
  "key5": "f4j7dyfzDKEHhHiN4ayiuGZYiNCKLhQPopsme4wkNPUyAB5rvxkXJLCEPMFgXDvno1QajxADP6ynvt5Kaxx84nt",
  "key6": "SrWijvq88SfHLBeoibSCxDugVLN1HvVJLUPDRwDSR6f9hhfoREdvVJX8boaELm9jDBtP1u13gqpePYTwmBeLs7b",
  "key7": "3m3fs7RJReE2nK3FEy2xed9kQTVimNyzD8rb6mmTHrTLrD3kEs2yUroMtob859fKYBQxqRj6cFR2XSdyH9rWURTR",
  "key8": "4ss1f8cDETBL7mUta6FMwopvmSA1Us9MXg6ENUJBsGon3Lkh3w4PYb7NQVQzpTGTmJAckRr1fxM76A8bgxGYsjic",
  "key9": "41CeG64nwpUpqbgxYtBQKCCJTjaid7cjeK2pAJceMTz5GF2MaFKnVFJxuvmY3D2SFqHc6znXjyu95jgYfNY8mkfV",
  "key10": "2YyhunhdxMeohBjkAuiMXzxNFFn5hWesiuKSixDhhUo6VBY7Rv7p9XJAGxRuuzWjGJR2gNn5XFB2Kwst2hj2KG3Y",
  "key11": "49dNvfGUAm6E97tRB265oNRf5p5iRkwY3fGBGFX1Nf4jGc9S57LbMrTHFj43aXjPM1RPqBeKUjJyGKu5AVwShZbf",
  "key12": "3yUFCs6SH4GqvF3qDs8UkhTAWCi6hHYaBzbEBFH9Gkn9QQRSEeWejcWKm3NBGDDrBNU7tVbGqmzcZGnsiZEy1guQ",
  "key13": "UXn81YUGKqCpPx8uyjmwcNUnf56wPsmkN129ScQLSnakoAi52PwnisenNT1WdbDJ47MwXrDij1C38ffx1aw9siL",
  "key14": "2s2nhUNZ8v6b2WKjQaBskwxoGAU2NjeUW6WpDmVNDNUJxb7s1uw2XqgpKScYD1YNJbCpfGp4aCYZy8M9dEfNZmoa",
  "key15": "3s5n6WvbU42PSc4iJEgzhjK73PE989G7i4ph4Y2UQsG2z7E6qu7KFm8ygbY7trdhXsa128fhKL8rAMWLQqNoLxGK",
  "key16": "2WifWgRgB4kvWG45okKhRfrnvcwzCT1WXQr9Ydvc4mFm9LADatAKMYzXc6hMLbbxPZ78FczY5WqY3vBAoSpWDbe1",
  "key17": "2gPovXaKFFgNRm8ajKWUCDTUoL3Jo88t26m9ZFaeXV8XL3ivji9gJYSCoTPXXv2DTi3ZePzYuqJWBBSwEZERkmRS",
  "key18": "3JEQ4MZ7MqFcCToTu7vkgFKfuQgxYz8QYu29VC2QA1uDWoFmLa5xGoPVhsNppkY2wZyKaiX9sxgnaNdPGSnwELCJ",
  "key19": "25D9ymsxsiw3ZitiB4sreEhk5H8ADEVhu8BRg6RS3WngQqxTvBv1xCdtAW4EMoZUqp7huxvdPHyovbcQmr8bYaKg",
  "key20": "46NrWmNsGJKYQ8nHzGExY5Tg7fkFURUSA1g3Jp9RuK3enkBj8SfRx8UW8rHjnKfs75JgQ9dyGnWFmLBBrc5WCfGe",
  "key21": "53891jkueDJfTHgQdj1b6s7hAYK8DzYqrLjSAc3o4kukkP6maPntQXpSXqeRN3AukWjpbvka7a9jUNgiQn4nv1sL",
  "key22": "2PmZyavfR9Y6JQ7dTC91UpKMmFF6FigrSxAHfc8x2qFRhXwWtQbtowNG1nNnrkMkecV7hJRQjzSEyrd6SDNMcLoZ",
  "key23": "5he2ibsEk7S5yqsoJommrbaH6eEV58gTLfay9iKwZTL312vj2uZgLNNWggrHeFQ66bbER9qGw21K8Q3N4PKNiDaR",
  "key24": "5wBVVroEhYKM8JdeX3o7bCSD69QvYj6XK1AaEV9FjK2KocDYvKucCu946PeKhVXydpz8ahCw6app6vkFEqDC1J2H"
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
