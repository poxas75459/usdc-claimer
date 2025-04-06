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
    "2wF22mjwnJqM6zFS7XTXFWzsg19YaNfVn9E986Yap2X3x7y8Urb89TA4xwkGTeAn7ZR9iaPCgX2zzXZymncgrsqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ze9hphfazXWD67mj6GTaRAQQhk5sf4hajVNvUD8BHVBAuYZP9zEU4DCJPPGQYWpk2fhocDmKPNQKXYAf6NumRHM",
  "key1": "28azKVCq37NW7rsAczfHWMFDvyyo7ktFh2tWsR47uq8epaRHwy2HikrTgipjVvzB1cXKHYhFD4Jj5WsXQdjFhg96",
  "key2": "5sSAo6tY3sCRLtff5yPNrMdXqdkX1kW5QMqmbYHojgVbf6b6DqDXVidTRjHuuB1HG5btZCE3s1FLhUigziza3V3t",
  "key3": "4GLmVawFBWgHRhGkPQNKBeVcUGjmp9xb8H81D44BVPBWnP9eQ8qqwCDV4TaM5coynLajjRqMRTRasygng2AahT6o",
  "key4": "4oD4RdSzFb5FUgaPqiZ4k6CC5WVJSTRGNjXKK8vAzAWVmbApSp6mvL9CPwRucseVhRTkus9ABWKP1eFHtBsmN14U",
  "key5": "2qpRuTmvVvqLYvJYp5qrLKi5fz4YWfgTut1sS3djNZxLYkeMMPn4pyjFxdsN2n7dec8w2V8HYrLockofAW7Ckqrb",
  "key6": "3aF8j8LWv6BME6NSsKSUXqMPeFGaPSk2Fo8N7YkuvyewVG8fLwQbVwPUw843vYEShyBUxg8ZtwXJhHqrfGXyA28p",
  "key7": "RsvPjk1RuS4EMbtXVk7jpho7cm2zHtXaTaPt1QPuPc7YddjyeeDocoYnMMTUxBrthJoRSLkumtNXE3zovvsWUAz",
  "key8": "4dHtZqHkLogwR9Z9acLBnAMvY4QESTiDwi6A2aHFEq9CUJewizWze2EcSUxS8f1ALVKhJwY2Ls85eg9UKk2dNbGf",
  "key9": "25xiA44uyJMDHA3EZuKn2EqNaMfVHeT3kqPEhxy5hsp8TmVkseqTaswBqFCmCSX7Egs3kpaSKaJECifzjwModMmU",
  "key10": "4HsWzVaAtHEtDe3qhPiTgW6aDMggEDp7YQTMpJrs8KJUH2qgMSgW94wyAsTSZ3A5ixvkDwY5HSNhhWUMt1968Nf5",
  "key11": "2TTU33c7abZCbsSs68gn8UnmWQeEDcV7zxA8C83ZD3nptRBRyZQ6d9WrEfJ9riYUBd4g7FKa9Ga7QuQjy8jQHXKv",
  "key12": "EJ9L93hvCYB499kJeyfN8rherzNDYzFyHXknKCe2fam7W6bXJ1GMNMUfw6HTmSgWVtzpUZUJzJLbPdrUAkP8iyS",
  "key13": "3tNEtHbLcDLjc43DtGcrpwfJzpDjXCCMxhz4uiCaCK6pLmMnjzpMXAVaBcVhWLYZKZiXb8XqSohLJg1JTeatMQ9n",
  "key14": "4YdnRE4jZAmoaJpFntRqB8eQocMbLy8ZeFRTwm23yGDfzchb98ZgeHpdYieZQHqanyX1wJbPC7roG4KcePZn3gER",
  "key15": "5wuJDFhxokJGaRumhcdPvpFYwA7stbLrWN5oRgcQyKbTE585r46cvocmAqMZdVMc7neMBFTGWNLnzDG6jo1YX3E8",
  "key16": "3kXQuM8fB6CAkSThiJmdQ9DxVPsjk7FN7VqDkNaWR9yGpCy5DgYzeshcwNgmDKRYCQtyQYjMkVuceyMxuRHLL4X8",
  "key17": "52JdoChevedpWk2otyqjAn1LTrpExao7ryA7WYNWWEPdtVB21Qdnr8CEkSK6x6eTreZ4MWhLEVdBujwP6K9A7vJG",
  "key18": "AE54ZqMJcBRKLYTRRmWpBhEjuXdxbyvhrfXdUNxLLoKm9hZ1EqFUkKzRNDQepo9iUH9nQnV6HA1wxctGis1uRoA",
  "key19": "5sAURuNQxvrdeNMz5nJMUVsD55ECwFWLNqdWFJVet6i6QBLrj2jMNUbjEZjYh87WB4AmV9fjWG7M5Sg44D353uqQ",
  "key20": "2UgECQpscGt6zq1Jwh7jUT93HrX3MmNyebzNVzz9RG5xa3RUhyahL1N72Pvm7KB48qKk6zJwu5nktvC8FHAEHp6Q",
  "key21": "3hNxyUFCLFSDGdhSLQpEsYshgeQW2Cbid77tSrPT46usz16qF9HU7xgxTCH6uoK8Z15PaV1JSCuLohB4B3LRkwMS",
  "key22": "4VXu57fy8AWJARUnrn9hLWE3SPkbiR8nQyM3GbaRZU4kgdqepRboHBKJtksuDbzatQFMtTb9r6mfv3LKvkienWKq",
  "key23": "26mxJMTrcjx4USMDBfDUKGBs1ktQAsYNDPRZtEbX2zZBc9pJHqZegaEyo1HGwyX69C6ZLg4zVqPSALnHnSyjTcNQ",
  "key24": "2Y7c31w16mc2NaxGXTvegBNCxrVBkmHvYv4mNiPzqGdNJN7w3jbjRDW93GGijc1kgNGkjzt3hPNeV8qf4xhnHPFf",
  "key25": "2vgdPUrEJxm4ZijaGQJkxhVnyQcYY8Kr7heWKbqCrzc1q5jNLGDBUwUXqMYvJF8BidYht3hoPsYrx2wZ9QJqs1RM"
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
