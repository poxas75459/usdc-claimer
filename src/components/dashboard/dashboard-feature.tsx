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
    "33FZKQVnaP7hKRKeCQNsSHY67EBbf3dGoPtD1waYsptKSKuYZukusedUDsvpLEb7zhdAjztvKdecFtEXrJg5Ugok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GG326hmJuu1PJ7EgmTX3rqnQmUNkDG26pySZ4nY24esMDxjY1nV1RmafrEzuw2HmNbP7Cfwwpe2Q3ryQ6BvFwFp",
  "key1": "2p7ceEHERRZJVdCrVTbe6V3U7vbDHf3wUJ5xTSAD3X9kxapuKqYqDKehed37ELCP1Wfp47Ebpt2HwDwYX1piEmCS",
  "key2": "25gnn6KuyaLUkX2QEiZFVEM8JYg2p6uApfWwGTSq24Gk2f9TnQBUR4xR6JeAbsfZgXNqnkgtYAE3T2h1UaUifKnH",
  "key3": "5ufJGeUa1Bt4QqkRRtKURHwr7z3e8vdVVFuPRc7ZqbxLLJTy1ohDMckTM9KS1s34RgVUJijNfvPeRAskd98os6Wn",
  "key4": "3sRE8VsSNf82nJQq79mpTWgjJVJ1XEYGgc4Pe2KXv1Cz57bD5YX7qjxrJ1Xh8PRkNJea4Hdrnts4udLZDoRcUrPF",
  "key5": "2Cf4stU65sH6h4f9S1i4XdtYZdPVhFmg53A3ZXMgsEZYVKccdE64aFSUyQxMSEHuQjBz3NMTPkG9E3pTe4xiFWyE",
  "key6": "2yfjxEpkyUE8fFWNnj99GrR3hmarkbmttmmLFJAEcG6L1dUibRRpdkqHTF2tzDQsoyVSHjrsGX9QjnsjZfN3wVQn",
  "key7": "3ahCZ5hT2TtTYcUrUvy6Lw5peMMWYNHL6Lgcqti3wjH3KYTTMHUPPxKevUpF7DnzbC8t1dj5DpURo1xdfafoxVsM",
  "key8": "2GHr8chRitKy3q8PaVRQLjjGXq2NfwTZU855apFNyAZy5FcgEDnjoXKvPZgDAUffa44VXeTvcutNREXgAZjyXQbe",
  "key9": "4kWMxbp7RxtzhpeaRDUj7v4pPeJJ2hmELq6tZt9qHZNo4zZ6ZK1E2Q8NrgBoXN5Y6SEeq43ZDyzWggn9eGCdJokp",
  "key10": "248yiWvd5xxc3s4LP8DLwhRG5xQrst231EmAt1fttixYups7vAw3pfgLV4dZm4nEtVVXNm1CeLEw1L6fr28CS81U",
  "key11": "2PopB5LC1ZY4bYeFmD6bWrTXcKBuZLAUCx3hyTujwbHo6nHtNHmd1svU3KsdYqUrP9whUYNVussCb15admrxg8cL",
  "key12": "Pi23caSJ9eZ2yHre77kPG5BhT1ZvmnmiydGy6RpPqFXVKM8tTfZpRdofag4Qfv6o7TYuzUtjuEEgVGoVvSk4CVe",
  "key13": "5SBQ1L67a9H23HbZRKYEVRqy1EHPPgo7ZiT6iNMZjBujcESzBtD5chVah2D4iFR5nfGuwoiQdKadonyH2Y74JbCN",
  "key14": "3wjcRWTpvdJDfWRBpM7j84oBjmQxM8AGojLtoGUDyLF9M3LpLBTAxLteveAKaHBnEdjKe26LjBgGu8NfHxpWitEb",
  "key15": "35dmWsEqzQJiyZu8wHHeTokGSc19XrNzD8Gk5L336N4pYwtdG83kBqFspMabbYCZXQVmFb5rS45fE1w8UQd8hwfW",
  "key16": "39eKpQPGLvLPqnotnAmGmyrafkezqrrJ2jemwd2gSqULNYiNYDvmzRqkNaxFtMKxfJd1er1ffJZobQntQ8qJUKPA",
  "key17": "48hXCHTc9WfRQ8RJA8kyEGUKpzKX9yLeebsDmKT6GRnqQBjKnFKGWsbSsNrStivH3J31RhYLR9Pk4UDfDpscUunT",
  "key18": "54LPAMrgCrjGhcEGKbyhEYhcLhyjKLE2qFCLf6H1RXsc9zdd5h5UdrQMZhVo36MPSTa6kXLoPcwiZpuNRSQhQ3AL",
  "key19": "LdnFuYa9GceBbEWch92sJyH83X17QZnfNGGMYBKrG9veQDpLt7RfSRvD7fHA1aRGA8FEsUDhV5sk1qzdBbCcnHw",
  "key20": "41vRWV4n6a3qoHeDJ5VCcNNHCdXAB38YYhbj1YqPxeaQzfBPu7qLYJyNgNGwgXj45XXuTtdjSvmJjkAaZ7pEV6aL",
  "key21": "2fmk87SwhDLCgoFGcMNSLjT3wobm7ZMCNiDABqL99M8Jzy9dm4xH3skXvcH2tYARu68JsydcPbVjrxxynb78FB7k",
  "key22": "qTZ7pfi2Z9HyHMYyUqC368CDNDrzig52hsmyRk4YaryHNb7TUhN3zTn6zC77XpPtaQAs3KKdNkKrHL2uybgA9Xv",
  "key23": "5rnjCin6ZAFmcd1s6mw3fCxPWcUrTuo1erZfjJxoiaV2Z8jUZ3EUKikH9g2BGV7DWLaKwgnu2jx7tcYkiYfGYRnW",
  "key24": "2Ym7LuUmcSvJKxqACLEweM1msyyTue5sBo7TurVdARK9BmX84CWqeP3noSpRmEu5Yefn2K2X65q4t8chbYvhmc6S",
  "key25": "43frBbLZVhvogic2iQAh7f9UZTuVxDCCkHiSZhN1dyPe8kMaYnsQfQT3EnxQPg2LyRby26NSida9C5o3XZfkTcmo",
  "key26": "2wToB4tRvEhDXxFCy4ez81SYQFGazxQiny1zEz6GhF3763Yz21E2LP1dCmyc6jNP7mXLyDqatio3oDRGsehQZBAQ",
  "key27": "S1jFhn9aFq1x4qySNYGgUXYWTZReCBhoicFDQ6UThVHtLM7hzGSzv6oTKkMqqkQB5JVhrrdPW82XeupvXsaYMx9",
  "key28": "2CFTXSecmRkZB7kvrkGHnnjbnoo3Qt1ujXf1UWYMfx7CnCr3Lc319UjoWFCbnK5obGWC44Y2C7eKSj2ev86wMudv",
  "key29": "5FYvME7LA8emrt6AhpzNrBnXJ5qKR7uVDQvZiQhjD4fVC52rYB4dVsZqGkYbQG5Cbo9UCu1Gpaf4Kvj4mz1kigy",
  "key30": "4pJLHVb69w37VuQoL1JRRKHBYca4EZNHMGmfo5jm8g9cSfaeJGwjoZNp7CZHcxNh2hrox1iavMiVwKn8TftgjjYr",
  "key31": "3AVDDsMU7CKbrw2MVGaaa9bdDXBsWibgmpLVXNWY4asFu2zgkSaBHKwoqy6ww8v6vs3Ag92DswF6Cf4ZvLeJDD5o",
  "key32": "2u2Ah9vAnUjeCVPpEC9Hd9cHx51sz5xorXYzhQ1AaoajJGJ9pyv1hcVda6d578yDThGBDXLT3BRd1ocPeJZrNQyn"
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
