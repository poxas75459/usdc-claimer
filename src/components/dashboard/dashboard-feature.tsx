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
    "2mRSfBjcbd2pg2zhC5hhjnDcEnSYwrDdxnghb7JRUnrWj6cWg5DuKKpqxVo2hv4eVaz8Pc5EDGgVamUM4C1B1aD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LFkRLeeVNvumDKFbxvSuNHpHKrpHYtCS7gojWUGx44cbQTobCwPiqmvkTiaFgTMAFhYgm51qWyqh5jLX46KKLBE",
  "key1": "2qzi2cQmt6eo6itnSEb19FWcEM8nRnXXMTbh6ovHqHnT7kmGZb2KzD4ZgDR9yBWKEZtiTiUcM1HDKTVdnziEbwtk",
  "key2": "nTX48GAXzwLzbbGTpskujagtq1bVhPFh9bLCkEnzqB1tnfw1msD4A5Y8VcsmJQJ7Asc5L6cmdXG8VGTKFeX2dog",
  "key3": "2hc9cGyy1QSM1wknt9NWjFmyz3g9YoMVErox9gtBjkHii7YPB9wMTZuPZU23HBx8DosQREb8b6MuWvamPTFMit4S",
  "key4": "1NwERyFRDHCpdhD9JWGPD4B64KvsaoAjhE46iyvBnsGdMDc34ayi1GhzUWAsBgUSUgn991FChaudTSvSoRLUx4H",
  "key5": "4G4iSZ2fT3mpPpCssQNuHw9XJbqCGXpRuCpFZB86Ck7iSaFCtK9zjXXeTNH8WsuwxRJvcMVHVs6VSJTzTY9o7LLG",
  "key6": "4JLsorspNoBpwctEx6hY4Tw5Z8kUUzgeEn3ZEF2g84vpprPizWHPBq6AF8k2dMtZnmptbuumGdDAzQiChBrYLRpN",
  "key7": "3Ff5jgrtKAdj3e8eQkdRHsMV5fTaWi4BzvxYoRk4vhHpBpGTf7U8nTCSRwcov7eoryazjn5VCy1Jxsmbs1JfY8nT",
  "key8": "37zzcFN1dYrL5wYFk68Y7ZfUwSdiGs6JEnyoq1sghqfvsQYGTYXL5oMTUEXbd3dNYzwAf3gq6oJLvEsjYcJJAbDS",
  "key9": "5MPwWWuqrMyYHvuUAv52YD5HXdVtojDCTY5zHQh9LogdpLD8hYYKzKFnCsVyh18RNtL8e6NBFnY2mRGGQzHrdMKd",
  "key10": "5QxurjczQVbfovbhFPC3zzXTPrCvfnavdRfee8mro4Piom4HBFJjPkTXXi2PikwvBMjGAYXV4vUubogtYBsqRyj",
  "key11": "scwRAXj8LwnxBhoByP5iRgdpapycYmd5Sg5yBMDThqzRd8SvaToEjBPuRQGnK2kK71vpxNEHQamp5dTBefVqcbL",
  "key12": "3s1YmdEoaAoM4oZKELe1N2uqGEUyzfwVcpxvnGDHpjcZxnm64gpSmbvvHdQEW7w5ns3uWULk5HYMMqoqtqbSg6EW",
  "key13": "dFn6sMhTQFUNXfNfkFKU5JZ4uHTDgmisBLMpWJoJSgNjmwSfdeB7ZMdPf5rjAKEDXj5idnW8rpAA9FzGEtQViSL",
  "key14": "3gU9f28eDfAsQuFoQy1fVHGtPrwzrEp9LZp1rPCoK4SJnCWNjRa6HAoh8yFB1CNDuWqCsAaQhQQPrDqv6hbpfPQC",
  "key15": "5Fsyo6dZSzUgQG3JxdBj3JxGrQ6J4sgnBvwvv4TNDaXvdH2Ey9DRtrPYUz392T7vMjTMAXNLJbjda6Ak9J8JQajK",
  "key16": "2KEFZp7q8WgpqaCNHPjQjjsVVS2hEM7LdkSf3LLa1mNjjZbCHZ2iYTwYQHDo9joqdEmjTP2MbRHfEnSHZTMyut1N",
  "key17": "4HaZYYoHrVDoocGgP4WFeg2isZJ8YpBZwmb2Pu2Cv6Kh732v9qGyQvMc5XRoX3CFudf7qPfRd9VA82zjJ3acKGd4",
  "key18": "5aSndKAmnbygzcE8ib7cVLqnEPVWNeeNZb9VeJ8gv7dVT9KxhG9XRzPiB3q8zC18B65RohHkbogvRDaDB8f1LG7",
  "key19": "25ycFrpn3nLT48K2uj8Q1z57NcD2YXsqWwu3jXRuVzZPNdP5oWm6V3bzBQBBMzuZwVk37AtsD3Z58EdyyTwonovN",
  "key20": "3t5tLkh45HJXq481CZaeaz1HhF5rKmE2SyuSg5B8xMGDfxsXgxmWTVoJnaws3oBZGwZNFaAuCzkqwGdvcXaSNcvg",
  "key21": "39Z2AUzGgcdqxsodDEkeCwjRRAmsnaSuSPFwijU3MiukBgH13kBG1Uz4KGX4mayK6vkMNhTKbuFej21yU8y5d2Qc",
  "key22": "4CuqgmHbXcBBVnKycChNLtDb2rc72o4naG34BLpUZS6Jada4nWfgL1ogAPz9Kft5LXd8EcUxTMtRUA1sL9TseUKE",
  "key23": "4yuERAKb6mqeGYuKkYQJ6KBEsCgZ4bero7KbDAPokZTiuVD9F5dro8mP6xSr6cr834Z8NtnQjUtEy837sQV4juGA",
  "key24": "5KNrL4mEepiukz1nGx7trHbpgHmyHDZGfRjEGrZRqAbzfiwSTjhyhkrgt47eQicDKm57iSMGWUVbPF9SRqgoc3TW",
  "key25": "gATGhjEu275VZgZtozoxfPr1Mrgb1sZqnZjGoptdWCYpBrtNDuEyDJQkevMfNtdJYA45C6g6pJ5cGTPp4Mjg4fv"
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
