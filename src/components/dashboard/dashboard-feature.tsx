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
    "ieyJDhogQcuC4Q9giW4Tm64USj9KgG87MN6bANi1AqdPzL2FGZWxTJJTq7XFKZ8bVjvDfg8ZEFm8cKu2kRXx39u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mtgVeBA7L3KYvCSZx8UeeFCmYX15Rvk4NCDE35X39T33fknXL4hZ9uL4qofCZkc4RU4Pjs46gBjcyU25es42orV",
  "key1": "5dgpAMCkJKGkdHCQVbUFHgsqtE67UbSBPK5ufcbdXCavCsoXyuXBJtynuGc9z4g1myjSvJUanatzGFivxzXCtEQ",
  "key2": "5ECwn3339bXruahmvUK1N7a8tnhv5yTy9WJugHTqFGnKbZXiGBYc1ZgY5tg83WHU9mwhukXgT37MnLLSGeaLk3L",
  "key3": "4BwnNHLvuPGZPnuGiAD721diofAoaJXaBFAHf5bE7odY1JEGzXhiA4KeVWjF2YwsQxEWpgh5Wp86HVaBwqwtbd8c",
  "key4": "46eC72ibzVhAZRgk4hp1EzcmssaAYuXwzeP163tULiJTKbZZ8jro17p22b6cxbedWifjFfwetwyvjp1EMFdfDMnU",
  "key5": "5DxRjQ4g1Q8wCVuZd562Nnp1xhwqf7B8u1JFdMxnJzmDvwp658TTYTSnMftpM8eeaZ5ruviTiiADRsXKafKrfhmc",
  "key6": "3udTk2meggVdG18RJx8m1qonRoDozkwVnc6VsUsVCCt9nQGxUBMuPpHhjXkFDA2uyUvS1wydK221jE5i2CXktEzo",
  "key7": "57QZ4zsMCDDDUsPbXTjJ8BEQM13maeW8TTM5n24DvgLrBVmD5MrHZ9pcd8bz7KQWYQDbZCiZyffKR73apUQSnZDh",
  "key8": "3p3iPAG4L99gLmt1x1zKLJHBcWf5LxN9U8onxav6vw3M2RgRuVSDL5BTwW7xL5F65YKwbHXpAj7hxQyBnHhq9jv2",
  "key9": "3gsA3Wg7HXX3Sa7YaLE2qTHquXMjPUKVEf3STEKprn9DVAp4qpcgrS3HoLzWqeyR8h6EM8Q4ufsTrNoN3dZ6CD4M",
  "key10": "2dWUhH5TYShVxkgaD7yL7u7gnX2tpjooTjhRqX22CZPU53g69Be9UeTwznorweDnjN9LxTfwDLgkQrpAQP2JffVx",
  "key11": "3F7EeFQP78L4twSMddYW3zQ8WtwvmehdAryW7ehJuCJ8zCrLGne5MYSLfkNDMLUfRA4B9njkVhxVBiJ3QgXra7Ew",
  "key12": "WHqCXrMHtQoh3WBAVnAuTV7k2e9Wssh4ciPMEQ75x781yGpntqoH7Raxmvc23PAbGswUE3jWbDZFH3dq1iFJF45",
  "key13": "4HoQR6Q4YTdkwwTvwtdjEZ7466ZWYEdububV3JC8KAsRMoWQgXG7c1ZgbnCYfbsbasFtfNDbtS6XtFsz3ZysNpkF",
  "key14": "4beiW9RJHTFNDNRtvu6ge7PmuquKSNkxH8izQsezYisrAGcj5HTxjkdPCUNDxATsThfi2ArRS8CYsPaEtwQQZ6q4",
  "key15": "RkCewaGmZR8ihMy4Buktqmfc59N2wgAAHRbr7b5gy3ShaKMknfFSbn3sEBAqsH1eQN2Ufc4G4HTg5uwhQs43zwG",
  "key16": "4iJaatD5hxfvuGTHzLXWzTjSiEXbjJCeSPKimkEufcp6rTREsKQzyHeHt149cHtigoscqfdQEA1nTABdegrYwdG1",
  "key17": "5T2FGYPFHnyMKQtMJMzBKF24rF2bi8sv14uwgSxpgVUxXEbrDADv6gKsnm4DSSXhurR2AQX6bWsKVt7n3c1S6dbW",
  "key18": "MtCZcka8mNqNFnoQRZzvdQrd1ANT7zf19sFQoySLMxPF492DYz99nXCwVoGCaqfojPJctfM3FYcRnce34zxPod6",
  "key19": "4iKJrpqTsx5b9KBxM8LgSZWirAsZqo18TexLw9k96tbX4c8neZzxcXN43D2KxPdv3GQwitg6cX7UhxCD79uoDrhR",
  "key20": "4nds3GBjAe6RncA8zgzR4HLAzvLcEHvSHMtJgDh3ApEgBYbkBfUXNqqeDuQHKEwdj9wDXKSezRDUdEBrb6hzYhrD",
  "key21": "9aHShCaWXHUqrQE1sh6p9i8Spw8yL7uA2k2hj8NvGwa42cSwNugzfFRhAkiL599V9gitjpfgZ76B2uGDGXEpwBA",
  "key22": "42eVStAUtuwFos1GAiWzfiR6tRrDtvJGxmYzBR2nRa3qyFWLwxiQwEL7VJZ4WvKriwHo5QFdKTu8dF8jGTqNytsd",
  "key23": "2vj9JLdEsYZRHW7KYembPrxRpM1ZXeEtGhWewmdZa44yDm8SxEeg7AwpTu4fWQ2GfuFntfiz4ASVWBgKrYR73AFz",
  "key24": "NjoWFQV8j6KtDLPhy6PTXLairaoKF3ciBrfPQxffuwFyS49VaVL2dFCX3y3ZG7XHtvRGnjKiKFQkUKfQRQsDVz5",
  "key25": "NbAZvRg7SLy4DeBSfBFQcj2LnwHKWn6YdKLjhqXJLQUGKbt7JbUAAYU4iye9ofoMjaEBKkJMnJrtd3rdfJqoKkk",
  "key26": "5YW2VmN9GApUxmkDLQG1jKYCsqCyakaDRwTbRKvQTkoNPyqTfmYWqsukTLwD5AdF5D2r4pLijKndkziEnP3iBB4s",
  "key27": "4dua2pMaWqAcJZbpaM2Lj7pES1EpRqypmE3FxwtBULZ21gJ8DcwM2qh17GGKjQi6nFNQgLAQ7jVBGqnj2WNVP6kC"
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
