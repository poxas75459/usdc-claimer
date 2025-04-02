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
    "3zo3nVU9XQ7QMtXbx54Ujf8eQYWqTgdw6GNKzTfKJZpGWgwjqu99C3Cn4BBypMVTqvCbkHp3ir1R3gSBn8A2WBns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPoSfov2JH8t9xpTLwBqfjL9jjk4SJ9ubXkuirGMsngjMTtfjwV3U44wDsyfoapnZjBjLtyn6CYcN32xTqfUPq7",
  "key1": "aTGtFGk4qSeCHvo7scoL4wXtH9WEvc7MLSWNUNtGDXur2guTZkFANTP5SHABSe7tXyU537WyqXX4wZ9mUiMPWdW",
  "key2": "33FD6SLvhtP3HYkyjCoEufZHkXgFZ7Bu9HgUnSM2CG5QkhuLUJhf4pD86RKehHaXncyBYLpu7YvnyL6bStqpWYHf",
  "key3": "2VAKsVrLsAghoDE3UyZKCHYGtyjGfutWW4Q5rTG8hd6HqYWVGxWvcadrihLQkXDU4GPLa8vfwriLxhnbGB9RWNSN",
  "key4": "2ZPWwtZVEqUHtfgww25Dh1gaVnfSeEA8EHNaPb3DiRHaHfHzKEeahfPG3BPftjese67ztVqhd2gNoUrfh8Yx6V5t",
  "key5": "2ZSXxS3ptwuUhHGAWiPZu2QQxDjWgsyYVdnfQv6mU1JfUt1hZxr9A8JHDxmhLh58GsGAfsxSn75xpJ9gksVkHU4j",
  "key6": "2fLd1cWQfgoQNe8kUHwQSduKbwqVk4G2VdotGifAwvbcsdiQpAMGExpgF4GGM7X33a6Rp4CS5ZE3T2qw6tQ2azc2",
  "key7": "5tHop4CHGg9GHw3Q2rfbvTzivmZo2fy9tuFzzG59z5HB334X9BM9uGRQZpL22uVL9LPJ7SjXkXptYv4bqLJnJptC",
  "key8": "4VNvGtbUEg65zc8AUbpUjaoji3FTrQnB9XWvyhgUpQNKKzjiTBZWoas7zmZPxBkhCp1hebd4sRP7oqGEzUPKcw5y",
  "key9": "3TP9aG3geCmFSVPzj5yngih8eBT5G3thBYjPkKintdoGv6EYHuizDVWgXeetGx131qyhXddMKVam2awg21ECZe4S",
  "key10": "Q92916MGqz19P2WmHgX3SZboii3gd2264Lx9SidNdv1Lb5MiXzXzjQHXjjFppkRAu8gorN4KD9veyUooVZHe8j8",
  "key11": "5VyAvDpG3EypWMYGtWvLVS36Y2QHWLxXfsGeqaXRhgkPx2X7wg5G4DmhW5g9SDwevYz7XJxoxbJiFKqwL9uQiSRp",
  "key12": "2W4zpWnMCQ9f5L4bwmYo25SnApb9GbenY8itWN7hw24zst4NxUFVdoA5dZW8oJ1kReiFunPQDRd5dDQyi77WdQkQ",
  "key13": "5SpTBt1HnNTgeyyT9zrGmkdKUavDo2WBmRCrauhnuAQjnqcdwdtiTgiiChXp5sEyq1He5FqHJr5xNXaSsbKQWq2o",
  "key14": "rVJWuyyZveov7yguBvv4BD2tXBnnwnUwDnuNuenVxMmH68AZGPV97v8YHLQHWfb2LPMVkBRm68LucPceGrH6RJS",
  "key15": "4ePiJejbx7QmVvs97U9VCufYVKX5rVseDnTmSPvXDe82k6kWDNyQvUf7xFhXvkPz7obpH7akPJ9LG4Ykc3RWEPye",
  "key16": "39oAD6wE2oHXsR5XavjLc3gUnGSA37859sT9YmSrBBxMSThNYDkxvdhmbaNrHfEVx6HoVpLLgN1JGWvCtSTV8QVq",
  "key17": "5bh7sVMGtLHpZucC3wtL7J9Z7GddQSageHRuN7wdBZS3Ht4TztouXvXynjh2cXYGSCMzDdS2iDHW8PTXyRbMv3Ew",
  "key18": "dC5B7pSXgqVsPN98jBL3uKc9rSpeXfEoCY4wJWp9Whg6aUFXWCjBHG3hpvHYYfybGVBdEZNhtD3UZZ5xFAkUMdn",
  "key19": "4CPCAi31FzDAq1MMeaFKAS3298ZuUjRLqmtrayqu5hFSuR8sgSvjc7qjgkqhsH7EcMKPD8pVL7cG3cQ4LHMKtqed",
  "key20": "3RNQVrV7XfcrBpPCnjD4Gzq3R5HXQ85QWh9Gj63XefYdnH9Rwd982B5BdT5W4FmcuecFyk9fYZmHcgqUqSx9YyjX",
  "key21": "3UXBaWjUyeg3ZxqUf6Lq1V6QRZZSv12XwMm5DheoEnfb27z6PwxEWy88ousQrZHPNcojTvExQZkNQf5Yh3jGE9Nx",
  "key22": "5kjR7JTDYDHso3PcPC6hbZoujorGBtaz5Sg5WYqM614buroeGjjAxzfyrQ1tcKf2tuWRf8g2JBfDd2881rpo59J8",
  "key23": "43SL4p1tCTTwqLz6dhPByTk1kfmtCu1gbHaccCxTJYi24e4PtYBX2eydSMm4tYLAfPz2FZrzqHL622hgyQ3jxnWo",
  "key24": "3Z8ncgcjTpRbTMvV7JbYPSqojT2fxYbQm58st2vGwZJGW8FZXwjSHu91jokuYQLKvh9xC78tNdStj72S6pqt8r1E",
  "key25": "3CUKTt7GdzojHJi4RzFScQzV9R7ykzvbNpkWf7UukVDsPtQQpARw3d6JNQByvDoo8YmaH8WBPxLMrzpYWCUtyaMX",
  "key26": "63V817Ed3DqDZmG2heMcoe9fzotCKbvGpJdYdgNGTn51FrfDpuSePTsv7U9fspm1WN58zrHupN65Lttr6vPXe8by",
  "key27": "29ynaoSdDvvaG9oUr5FPSLAngoeTEdcbZrior6EB4w9eghgV31soqjasiQHD4qWgNhRtVPw7inKTU8jQ3foNs5YZ",
  "key28": "RShRkdUFjAMM8pu9xJ9iBXaEHnrgo5nn7k7ndNYhviu6T3gub4kjbrnkuV1QtUHVTJbrSTyMsVVAScwmpK1rkEf",
  "key29": "2xrwQ6djxgABDiSgst457wgmTyVaUmAYU81QxNhwrL1R6GQWt7ArGxbxRne6U9jYdBJ5W5NywEqT82Kfm3Z8ctpJ",
  "key30": "2SwntXPVJdUt39uZgx4P3hERWK6Uz5K6tDgYKYcvzm97XkKBCsedPKi1Ucq7gwAMkzDcoRbvkcUX8DUqsAr6Kowp",
  "key31": "26Cbx7w2r3amHVEH1Cx5LwxrzdYPs6vUKNBuXNwNBt6HtozcWPXAiNvWwHbL2EVy7Jf3opbwDzrvTxNLHuLoZb6Z",
  "key32": "dJNQTauaqGEm5Zonjcjugg2ZByJNgzh3W4uJ9TW1eptrGreuYbTdhwyVu9MVUWZsumQ46jMVQdvgWdmntsPmpq4",
  "key33": "2aXFKVxRZuocxVF88C9vBn41RFnNvSYYegvvsxnZmpATtVe6tJmX3Ve85Tj58y3XXsNmuEbTvF6ZRetXz8BrDNZL",
  "key34": "3dMMU6ncXK7RkbKMBnq6XApr7xFDoKUWfAQen9ciWyvsxNpiQkZ8Rwgmnq5CZ4VqsFEFfWu9SBEEVXbdGGVwN2U1",
  "key35": "2o6gqXPhFy5XAhcUuNJHxaE12oGK1efXSMiNpd5LJ2L3V59dwrWiJc518kTgoiCDKyRev9UGbt3RWQvciurQAzc6",
  "key36": "5m5saRyUtRzt4HPaDw7LVwsuNEYvfSBTAs6Rz7YtgpqpLfRvF56ByNGwZU6mkVba16pvXzNF8jfGrqoAi8dZJ1DP",
  "key37": "53TYpAERvd5cMriQdcYanKxxa9JK1VwUyBJeaRvH2dzwV653M9VgL89he2DdswkDjfL8FBhqoVVgrpadLwbPMaPP"
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
