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
    "5kuM3WXtWWTDKYCghR9KTEQ5eo2SpQ83weqzEXeJQtd2snJ3vhy33EzKV8VywUePMX8mu7scL2Yv1sQN9MK7N6QX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZvC8BukVYb6YYkQd3JP6VZKTuKJrkihiGYA2UmWTGkvzh4xtM4gFRrmFT4JeqqJBuRMxKQuxJqydT4ZWQhs87K3",
  "key1": "4d3AJUVYwqd3SbsUkN7kcJopnPcYVZJHNgjXj6zqYLJsbdpoMjQ8hxCKCCip2VwoaxJZLEX9RyzPDyzRm8M9cYau",
  "key2": "5DdBfrjWhFkRafH88Kx6Sqbyp2j5FQzJjoLtjugKcoW2gbVg2gkHqAMZBGhV9XxzqHadourCTEjVSqLCmNB8Er45",
  "key3": "VogGP5zBYCrtypKTBntfQxLSdELJnQCu3BmCGz8PkXFwoGfH1Kejw2cR91NwCQhg5Pj9YRG8S3G8cfWP7WEyLJ6",
  "key4": "xNBaAFecBaeo11iAYcJeA28niTPyKLWsWLwVieHwAb65kbF16GfGgbbBWnpX71LpTEBE1q6yy7q2XAVKuCcuM2G",
  "key5": "4eDV9vxE8k7xPmrE1spHgHj1GmQ6kq9prYqAgecsQEkUyXRy8WcQQxTkh8vtKk8Pf8JGDHU1CwUSEDBexTiWfqwS",
  "key6": "5df6irR1rZV4k6wquu2DgUhU8tgQzSqQQcBM7M9LrnaQ6YpzZgzGMiAywEF2BUPnkq2aVrtWWXNS4VaPfg2rq4iD",
  "key7": "4ywWqUabPK7Y4JGcSkR1y1VX3MWr6jCwcvyRCQtGAWeMqby71fPas4BbKEN1V2HGFfdTszMfJXLLWDAT9QeHtmhN",
  "key8": "4c6krCZFxoG2AhgPRhZz4psAzXMjgxcbXcdVFVkBTLFkuAht2fuGp2MvxERyUVsMCi9p2dq7JTHeNS2h8egRssmt",
  "key9": "4f8arXaw6PGPKDkCiW2AGpUYAELjmHQETPUbdYfKeodEf926FDDW5jqucQVtaNfH6RaJBtB5ta55JXyBMwG4nbYa",
  "key10": "45iSohYibjjkog7ktYwtGdAroCfNhSKkm8sVbKA5E78qHKHC6xrKZJuzVANo14tiETcGEn7AHudcezcoCwoWvtJ1",
  "key11": "38SB7yiCX8BbQTdQHT97GSU7UxwkAxSrehwaHH8fxJdfAEd2UXnAbCJjpjco4u9V7vjdakeUSmFzR3ZELMxm6ifH",
  "key12": "3Da2LMtLkXcNEFNV3pskturGyq9HfNXwSHKdWdgGiBRq9psutn9CLv9epsifoSpH6nfYUg6iCbM26pU19tmL4Cd7",
  "key13": "3Hf2UKFKCRKinM4fFKtN9YkJrRDopGGiKSnsdM2h8DgRHQHQAArAYNvmyvywJbmkU7K1GRSn7bt46ycXcAfpPP4c",
  "key14": "49uCJB6yCHkByg4Y4zyF45gV5CMPqDEzXysHz7ePtZrQgVofDSyyxuYhSGPNGNrhiHE4VpW4NkKtki4eoLZUqBfo",
  "key15": "5faMBN2GBxdy7CD65tzg5HtkqgDbf5pTo15Mvxbd41onQZNn3qKjh6AXNC3A9oGeGpzKG1tFyJfHD6D2R3hgEG9",
  "key16": "2sc3KPiDQECDPgXQsxJZGuwS7sB5vw1KwHts2nFn4AAgdUZupaVZfL12XBkKMaQhZS4odLmtVN8QtevZbN5zSDbX",
  "key17": "2U5E4mzMrdUD98DGPMp4DfT9td83EPZkNUHzYh2VJactKdbJdZPpyby6td6hhHkpeREZz3MCcfPW7pp9MHJqoumg",
  "key18": "591Jmab4o7xTDZqwPhQchQBrnAeeR66bTgBxyKafWSpKZywKa8SaKANqushyJtEdVqWe5vy8jUfHiY4SjbGk1H8R",
  "key19": "3ogHWfFuAZmwNqUj81Bu6R23teAQWxBhejYVAYDTnwryZgSY2SY9PU3rBonEzde51RM8XQtHs9bBQJAgG8hPdCDE",
  "key20": "4jBprHYLbhyYSRzXALFrPkfMSGiRkqNJwkPmRqhnT3fAqhgPrU7vHSnK9sTD1hEVTPMef5x9rcyffGLbRG5P5hx8",
  "key21": "679foZWGJdj4A3F3rjW63X6rxS2KD27Ta1EREKbbFQnvaUUQB9SUeKDNMfPaia8sd4biLhD7MHZi1PqNZ9t34FUx",
  "key22": "3gq6BygnHf9EE4b7mBpD9mbs1qxFj7D9mecFpqaJBL2bJCMFh47GASLUm9Y6pMnGgZqLTwMyXBeWNaGcYojv7Lzu",
  "key23": "35eSBjsEesNBJgZ7NdgCcfWqZ7tuGwBnCboLVezaqd3T8XuQBiR5GySC83XNHK3xTkvp4dUqwEfE3azY8GuPuYPL",
  "key24": "5bKZVDigzxjdEHNDQQLctUZtfkhUeMRhLFHV9y5UKp44WYJn3UiKVvqAbk3JAv8SKcvgpw4Ju4cHPi3zCJAgyrpf",
  "key25": "F14nijoCoS4DHX41DBajdHugfsmZcMfD5N1rHFmrpvi3ue376wrcJguJ8HDLDTkA9yCGBLReMDXeihb6SBvpGeV",
  "key26": "G2P6qiUmpPdN2Hpc9San4wyVxc9Td5cdzhxb8sZCXdxafLP3XC7rjbrocwUhAaaBAx83iVi13iHorEgaC5TwTEA"
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
