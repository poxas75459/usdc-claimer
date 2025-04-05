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
    "4fdWyQ5j5GeYjkCmfspFTqDxZjEvAVeFwHhnqnatGoNKCgYFvs9PthXiuiZs5d24tVDfaae2Dt6ZxwTzPP7VMHjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VCfuyaaQFewbXkQp2vpFCViJju33ibXuhUnEYm8DkAanQLEDyfq9CAuE4NaYD7qQ4aLbQw8SACQ5Tsp2zR62M1Y",
  "key1": "4NEaTU5e3ZbKWacKmbkH7PACqenYxQmVS5kXTYi8zSvmxBTEJMtDAdKczvY4YQrSAoR52CoXg6c2KbND4iNEuFw8",
  "key2": "q8URc29TKWzeV8orjNXseUAC3hqQuSp4XQibwDConoth2LniUhic67h6N1SDLGtmdNbSZRMfJx9GNqv6iy3Seyi",
  "key3": "EjgETUjHUwGzv23b6JgpnNoDcM12mZLzqhgNsQbo79Wf3AJAfu6p9LityrJMzk2gTFB8sPjBgTxDtQjqLuqbTjj",
  "key4": "2fRA7KnE5WhQwzRpzFbrMb1gb1LVXEooCF3tYtoj1bzz5QSECt6VKyZo8KpLaEXoA711wyEKuoMsMSf9HRhEjkYe",
  "key5": "2FebGzo3qeGve6JJn5PtVPcnzrAFmZY1HvsdEA4d9cMyHSCvxyddaMAtM8FM2PHUKoAU45RK7rUYN7rr1bxyNcJv",
  "key6": "5vur2obArrkXu8LYLQWsWRZrci9eYP5D2TtHg3sdEkCciQc42Lp8QCn2qF1tntUgsYVbfN1nzbnxGECZxUTH2jLo",
  "key7": "5A3zxdGq9T7GU41vRAjWYKejJoAFnwBoVqSkAGpZKz8WoqBxHoGhp4Ubd2c1gPmrLsRUt3RiE8xxe8VwZzsi2o8H",
  "key8": "57DJQFZgeAckVDy4W2dQzYVtxdiZPza5vyAgYsgUA3Szwz3WruzbaGnHBmtt6i1SSFoa2FxUWGBMWiRPEw5Y8XwT",
  "key9": "4p22gDMPiZhFdRRvZdKgsPFPNK9mCUu3YqXmhNuunCP9GBxag6yDSXdGpMiZHxxiHJkxHCqP5sSxUgmkn4UNL5CU",
  "key10": "51xnT4MSoJjnN8MyDMdyLVuyg29pVLckUgdScHr17aC7RhCrnBhCH8EehPw26653Fh3278fp2NrQJX5dNQK8VHnm",
  "key11": "ayq9dMfxbg1b9cyjNbVBc8CBxFqq6y9wGx5nAap3U7DNMogGYxwKVKgqv1unoStEfapRBu42o7BkAdaMs2YDesw",
  "key12": "2abiCMeuAdNQQxhYdQCBsahAQk812E6AuUHvP782GSi4yN5Tf3heHckQunpAPDckdYyuyvat1BuU7hLgLvvGMcUJ",
  "key13": "5LnsXk69vS1uNX6u3utLSEQ4T7uyXjwpECUK3pwkcSbcNFpaxfwGeK3sbqexGZA6qyTJ6g2P5wDQBKARDUHuNuoT",
  "key14": "2X69PNEbTaFdLRhUAW3G4iQ3xwbazfqQMCHPVtSN76eL7vH8nMCDJPmFdEn9epYZMaPanJrhXnGQcFwmdR1JipuA",
  "key15": "39v176rMfqvwx1KkP7wbMUn1FvkpQQhxKWwsARNi1oSUpeapzQYhCUjirugR8dM8qHYQtNysW1goPdic8mYkyCo3",
  "key16": "2629VrhDNmFyrEkjvy4w66M21nHwoDAjK1WCRcRtRKz1TF19aNTKxGxA5qB6L2cs6uhT1PCNeQogSskALJvNttsx",
  "key17": "4HbXqzjNiBMeVCBbvFouAPgwc9MamxGeLixK4En3G7bcGj8QmgB5BDaDyh5hx42LaCLm3iNiC8vfCdP57wGxsEcJ",
  "key18": "XeXw9d26sogMY9eSvECKmaegHf9ktZP3JtW7tHvdVdA9Cz61qaVTdQQyTsh8XFmSYSNay8awut58EN3w6oy538u",
  "key19": "2iUqcTw5HveabhZfCTKMcvBW6GnSY2M5rjGRc6WH5S6fhWtLcRqTE9wXtfYV2LBA5NAG9rcgif31YbWAKYEzmWn9",
  "key20": "pDuBKuePd7eJy27NasvxFjy68bKiz2zsK9RjdLa9U7URobzRpU6fb8X1LSqw4yT4EjQUrFNagDfMnH9Vg6uUH92",
  "key21": "5BqwAaMhSFtAbXYkhktPe5dEtKmcLY9CZTHvWvQedyWyhHWLQdc2MbBtMF4jQFo4qzagREZV7SvVejpWDEmsHKLU",
  "key22": "2uXJfHnqcABb2N5GmrAwPUaiiKTNV6VnAyBUnQb7bbpvyJwabDxzLsbAc9Wuca5aL91mmT25JnZRa6JS4SvKCTzg",
  "key23": "4zbP2N1jioYQbtpxcqjgAKyQBgJpuPRZvcfMd75TwRVS8AGi6e9qqKd87Ny117fYJ35ppBUXvR3Hr2D2ZdhQkoKZ",
  "key24": "2BiMcjqezUC2ZhV832D2ziXrAJFbP1F2yDpzSVhtYXaZvTbrtzwra5i8XPyTL539vbVjnBx4Ubc8w7Q6qr62kb4h",
  "key25": "4yU8QTdo226JBNkbfHQa9aS7SgdNBu2Q1S2pM2oSdf5TBv627QGstEwcsbvTCvJdbKnX5DrVPG4TknBtYYFW6oBb",
  "key26": "2xW4SjvsVrALfa5ff7SXSFe8djKFb9rWhW6k7Key9i4egojwxwAwpiu7SgDTxgE8aqqX1amhMasSAKFCn4qH1c1Y",
  "key27": "4Z6re3oAk4yBZPmMZxurzT5ajnQwXz17rHhryai8sYtibQrPGkPHwQUhxCxHnY5UEGWaWr1P2piijNXrLm9NFvn8",
  "key28": "5NYijka6aAiBFDJupJQ4EVJa1fT7zDKcrwy53vGauEPCmY56tUvhf9q9SJGS67SsgMbktbig6MzKRW9pJUcTWRrQ",
  "key29": "66wtAp3D3Ycn5gEUU2iKnbTg1EvwYMSZyM1YEhjUQbo8GRx8FVbNKZ6YDrcvxcU2RXp7UcgVeA9t7ab1smxs7Tii"
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
