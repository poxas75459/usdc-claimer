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
    "3wTJLEuCHQBcDoGyLNwKbtGWyze1pGQftbpmCQHz6McBfej4Un6v36gzrkRh1QzDcUUWYiHLuPtW9DQmcqZYD7ik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjvFrFNAjNiMqC8qBLrqESoMhqJCGR638zGbD5sijVTCRQu1tKXJmRvEV1eyvrNKicr6CABBcspdVsHuYD7a6gQ",
  "key1": "eoJHa35vXyaUoE1WGitgfjJwyvoD19RTDPLT2goA3qeNzCwZqE5HxxfWn6Vyv93NfMkcs1fVx2k5M74AmSXa5em",
  "key2": "3jJXEt86EHvtYwj7X7gF2jrYQnTaR7tZskGZXaofMwb9kgB4auC8Wkaiv6FSXdMjkeoExVgCZz3CEysYv6g4ECbP",
  "key3": "45j87pv4kCK2YrJJWtKnySXB58uW65xBSo1eugS3UK68r8jaU2pyif1LiZbKGRjFLdkAuaDMdV3QBuhKtMQcaf3f",
  "key4": "v85M6RgxNTGYfFpKrBCRK6J8Ex9VoBEyWxJ3MCJkrqCgjA4TzQsEaLHenPGEbJRMwBPd39CoJD9xDxr4ezLuhkr",
  "key5": "3D86pnWPyM6QzQtdMFnhXKCkL8pRbMA2T3dkvXQjnyNJqEjNFsMS5PvxW8KurV4gbxgKZKVTXDPoguJWagKnYv5n",
  "key6": "2W6pY83mXQNmwEoU2auPeVbcaFKMpwSccntmbKwdXfkb5HQykHy4HPKF3aepWUgx5GwGpSf2nexqSpcFmHHLjesy",
  "key7": "2z9sdiUqjYuN3gCFwP3gz3PjuN4pfsFTPk8KtKos4wP9wvmgzDJrdkxLjiawnduWLVSnqtnS1v5G1KzWvqYSGYHc",
  "key8": "58G4PzZCNtA58KRh4XhKsPSFJg2kk227XbLwy5248MPFpnnNcqixRQyDnmZf53oHeBoKTZNhYNqbC3fxx2QJtVQF",
  "key9": "Y9GP8trW7wo8yCZCgp3LuLwsptEP6tyVM1bxX4fMFJFainXi5ZAfG9n2mV9P4C6XvzmbvdK9oqhJx479JwyPVD2",
  "key10": "rsfLpbwJddMHDWgPUJLA9wha42kXctFwqHFT16BrHssjKkwBPKqBXcmWTaMSkGwoJ5CM3USBs6mNJrvHHjqRZuk",
  "key11": "2PE5XCA2KbEoeJopwLsTsEXJt4CXmuWQFMLYCj3CrxdetGmEadR2gQfZnDRUouBTEb8axwtLfdpxX3eHLD9UXUpo",
  "key12": "5mUFFuxD4qeFhfGbWjfUQE9T4rWTGD6kp375XpTm2VyL5Ayv3vz7Wq4UnJx3oztitZu7saR36z8GVqqWLpvut7JJ",
  "key13": "41iakeiQfRrCaqqyePtJtiAsg2cKstnvzLcs4DCezBGF3XgAjRknxbRpoFDCZ7LmmEHBj1C38q5pWwVShP1b5SdT",
  "key14": "2v2kA5XCWC5Wzrah7RW6esGpNFc7YrMAtK5baDPa83R2USZRsQXch7AfjaDJCiviwfWzVdCtRJyNAp9TmePKnEnB",
  "key15": "4ZwMUhaRwDas9SgV2jRLrzPGfRvoh14JwwoKR5NpztFB9NgRypzcSFTyKAF83XFyKWxZKoQt2LGUmyteGGom7Nmb",
  "key16": "237dEJdaGocyxD5qsUoGBSCNVrcJGTMGzzWT166UQgWhmMbXwKxYs5K2FbLB6Bat1ZcWnptK9JLcyei77jsvmM9W",
  "key17": "BWYz6avpeym9EwwsNjpEKVvYvvJe8RmXM1YzLWzcymYeJcsJhAp6UFBPPhwaxT3HH9KbybfzAtyTLXV1FJgkidR",
  "key18": "5q7fPChrVsmDFcqoZxqLM8CYk81zcibM4E6DTHxtewXXio7BfWnG1awY264ADgCD68ZnW9KR8M5gaDNv8JmLwJPb",
  "key19": "2xaDnryrWvzkL7NBHVyeu1FDymnN43omZ27bZ2QZJ99Vvu2U2ktyhiZMPves1iVfTau8bRWtXhQYi4pmErNa7xDx",
  "key20": "4wdvdUqFpvES8CCEt6eNhkKYjWqgfAiTaELfEAdhiVKx8j1ZHP6Ko1xXT7ajQqJ2dMLWwvbuMsJ8PCoTH9KayMiG",
  "key21": "Fc4BWyNJisiUUf3zdpgZD2fyKxyAQbdKpVs1DEfdE4h2ufhZn8wpao2WSknYdwdBgNttrdXdfDA8n35pcKMTUbb",
  "key22": "2BvSVgrZMe72T9DXKuKwMnV28pxh6ss4F3nNcGKZ3KvoH8pBLwU525xk43qnpJXmPiFrG25X3ETH1hJHVAwALvgq",
  "key23": "25UovNV4Ai6agkYDxmdSfSX2yQEg9eRFRwQ138EggfLm3ynL99KCXj7W2eKZnBaoRr1KBqWA9xQUM5snaDC7Qjdn",
  "key24": "Ed7qo9mjjDD1g7d8ZuAGrVUFUszZytzgR7cT5rikUdNg1yedvQPkK6uxY3fVDFDKhwFbHZHF44uy53DBEuTKK2S",
  "key25": "5TdT5ndU82cGDWyXdPnB6GGp8uctPgFXqZUq4N9PtoYppg1UhhYngZQVSyXRchWKFhQ2Xh3WhbsS4g1ZTpBStrtD"
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
