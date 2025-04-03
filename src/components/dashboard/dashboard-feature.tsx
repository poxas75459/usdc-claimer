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
    "482YVA3hi2QWAw938RNTF2zKrY5XwhJRmHCkpuyr7aZqqxxRJXn9CgC3EmRJ8kywwsBiVSisJfD9PqCTiZG3mWZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VBcGGZBsy3LrhLP2e1VXLABeRzjk7HKrqe6u8FwXmvHqyW3arMLkwuo68ZnTjU85rZs1AezzCrpwvLiKdYAGxZk",
  "key1": "4uFBathATr7ZxRPCQkwocnx2Cs9WErk97kNByZCsVJAzjC2D28pZXyVxiuE61i1rqGpQ4K6SD4pPZ16xWcyTG7Ym",
  "key2": "41UQB85jd4eZtdGfqA3FPhikat5EL1mwpdaWvqSkjYvsoPAmw34LwGbRwQsc4e58ft7evXxAEfd3DBND7JUBXZyf",
  "key3": "4GLPjiiZLdkjF4xm4HSjSwXtikBEuEfDqTZyx6QMduAxMzWQjxPEnd5zgSibWCapqMTQVkHgUx2wcFLzU4YPr46K",
  "key4": "2CbXeV1ZLDbaXK2tvedwnDuiU86yv2wb7G29FRTppz4bAfU9z87fYvkJm9rkgf46VHEffaWqwt1WDWz1qAxJKSo5",
  "key5": "4AUmyTYBgwBZT12zbNBFrktTrPu8Fi7Y3Ay9PWmdABmarRaRjBXtZakcxM4XhMxy9Hpo1DFQE1UQUpgpww5gWSBm",
  "key6": "YZEsMCq3J62hxfAc4v8Fr97vaW5pyj1WqdocJgS3ejmSySwboekQz727q2J3tiJEZaz9phodfS71oFnnr4YE7Q5",
  "key7": "3QPVaCGzVeiUuukcAgPDTzrmJFayGzK6DFT6AZGy4asK7Hyjh1QyCxrTV6dzWgsCJHKVupXrZuCHmmbLcK43UkDY",
  "key8": "66gcpJw9DX7SxvvWLyyM5ihoqjASdhpXqN74EMPmeYWUtasDmYL8dfHGAwuEKNqLQu9b1z2TUVysXspMCdyxJgvV",
  "key9": "54L76aTRHS6sUZmj4asfNcdqdjFeMg8nzcoCMUuWzHJPkReFHDLypoeqmTgNizUtYthHxP4W2PGhvWzhuSVTaTDm",
  "key10": "3jKPmZuLVwB1HF2g8ptVaMxtKyFdE59nQvJRRejz4FfUgfUP13SMcD4zcTGzGrWDJHHKy6RDLZNM9VaoJQbwKva3",
  "key11": "3Crw47SzHJDdPPJxMhgemeo3zpjGhLW6sSNRfr6HXVCgxB42bakH42YriFCX8BVJAghEkMJ96UDN4fAiKZLzrzkG",
  "key12": "5ZX7ZQxyaWTqyMKVZKX1hkgjZCc37TEeBNwgSNDzxNg1rk41ccQiUVPMvS9M5JvVXQevnYZZfxP4hPVbawuhbTme",
  "key13": "5hHBWzZsi8i8J63cZ96BSdHv8NXKufEJ1q1Hbxsb54uUGTixmvtgvQQXp9twjEn97ysCyF4fwnRUNoCaDksBzaQY",
  "key14": "262SDeRmm9etaNc8aftEh3FkbnAA2RpU2YfJwax4BM7p97bVoUzNZk5inF8rB6qqhjimhDG8SUTri9eHjZVHkFHh",
  "key15": "4iN6ieQVNp8ndaqVuki3tYZKiRT42iNPpkxq4PxkWyGouPD7c5PX7xfukKqYC3ByiEbQHC6h8jVMJ7N5sRT3NjBo",
  "key16": "2iakekPwJwdhPnqV9M5zJt9jDuANKbvATXjgq7Yu3AkDGYUrwzf41GwejbvLXtKv5dR2q1jyjxJL8n6vDPHRKEzY",
  "key17": "3Z62EgGaVHCtQPBm358GDLnDxQiZbGMyzSZtkMzvGvx7ocWJ3MjknYbDQSA8ukcUroApBse7Y7R2mzEnTyuuGro6",
  "key18": "AM7dR6UzEPyJcihH38wqLtSeueYjDvKSvoMGXzwczUefKZoxdYV7kiMv8g8hCTn53xMjYQvqYK5JtYM31Eoikdm",
  "key19": "5bHtCKZWXBHkypJ4fara3d5FbszrAsCn5qD1ZqX4HWueH8HhKijSE1iGkFXheevmfJJkFmr8o4fWBZi9mwB4XFQC",
  "key20": "2K4R8RnQ1BQhQ6L29pY8a9uAzb6WvWujmqRR8u2ssEBbB4gB4V9jJ6dCZBH96m3AWBXPHapXMmLmpg3uLGkVJafm",
  "key21": "3QpH7NKYrg5AX7X7xrLRTNrwXzLXArBNf8FpGq7QU4qGakQ3WwGR2MQ1ozntJtQbKgKBBh14NAbCFT1TQ2zuX2dg",
  "key22": "2HUyhuc3K45TABwihjSGogd3LxejRfSrzaSi9d2dMcaQ6SsdHKvBLknocgwmCcEwjNCCG1264Xw1hN2g1wqRukAu",
  "key23": "4X2pBk7aQf4n6RVnTQ5PvwT76ATuc8dhoogXxUN7m2gMAHq3HkqE2yLKxpnVDcDyT8AVSLAs4C5YgtJkCy9wNfcA",
  "key24": "4uGkqTmgtmfZRhKa8r8iAaihTVnmjLjqfNXGEoiY2BjzdGjELZrDH4rkR6LL58F1Xg5LNfxe6qDmtokP1a4uwHhs"
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
