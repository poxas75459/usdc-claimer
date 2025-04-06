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
    "2wzcBiBHoDvdUWxLJ8JuUdv4HYoCkLip7nf9KnPxaRNd2BA9PTWAQqEBdbiF9ekJ2N3XSWd5sQAPkGxhN47PiQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V9vcaatzyT7MHYMwsunXSdUxZCWvidTS41zZofAJxaVsbprp1VZL6g7VyErajE5tGBfreiWKNrsrqcskqrGLhog",
  "key1": "2hrQTrXCGFvCgxF4r74HX8RA7SkW9BdV5cFpcEMVq8uvGmNSPw1DLJNaJBTvgG1y61xpPpUG7M6GXsXoBaKLtnaM",
  "key2": "4VidWpeefeGPB9uznLxJprS9na33a61Z1N8yRuGGwrgtnKmVhE6oXbCaBPwBqLEMWoohGFRvmXqtjLvFzgJqyVoF",
  "key3": "5VApzzuctps6nmF5xFuYQRSM8gVd8hvVoHWCRPdt6j8giJd71a4VYdfXHX8RmsVyf7M2UhwH3Bo5SgAJhVYt9tcU",
  "key4": "5eaEHHQcfYJUN6McSjtXoE6aPD4tZNZ96Y7KDFQ4jgNMjPAYS8irnnmo7nwYFEg9p5vgh52nQ3GNKCghn1oWHaVw",
  "key5": "24YeoWChuf9yyJS8VGRXGwHtH8YaKo47mVCNUa1FL1fPaKMx7xHTo2eahNupBtVqhXRhqZPBH3cKgRhorcuENaTV",
  "key6": "4LgLc1VyGEtfdfAVL43jc8cSzYRviEYaSHNCuYYRyLg19pgruLCGN6Cb4d8YdGqCYLQkgFyg9kwzq33D9z2MoEXZ",
  "key7": "2uzu66wxCfsYWtKtrLcPFanhGxhLExCfuZTRYHLynHwh7FNTAMvbdb35oZFz98CjBXNYynxVNqUDSSTLhWDVJrJj",
  "key8": "4GRvApMPvA9v8TCXUPMcFDQnwS6QsaGdG8cQHxKYXTHcp5Ej1pkpayVKyUi4BRXH4EDePzD8hWvZP4jdc4RT7NGU",
  "key9": "4rxrt6fqyGMJ6QeJU7Rg98uTryKvUxqdb2PxFebUWXpU6gH5kMNesReU9Uapm1fQRjeTWvWFFj28P4PS3LWWo5hf",
  "key10": "35EjXvXyGgUVFjHmQq5Tk94mQSJXRNiCYWKiTC7aPk7V7E7bxwo6qRtnrzJkEtAjkYSbSvDzH1QjkV2o9qWSw5EZ",
  "key11": "wmkLfXmpRxkgx2LefZFmiTxfyzRuZ68McvokkKTULP2JGj2yUeTuyLMmUtwKaV7rvGPPv1ZbcWaFTUpztPB5DXb",
  "key12": "qbzyzMAmr6X4CJoN3HXkQmKB3HUFzttr2Hkw1knVMec8faApZJG6hrqgJuAKeb6EP2iJ23AkHttvuEN5nTy1pR9",
  "key13": "4SnAZMoDiMKeBcTGFs2C9pTvxr63YsBaiSMLWLjiAhXpBafqvY4Em2UJ1wgUHBFZmRQjiKooVExj2GpQWRh9K9nY",
  "key14": "2m52Kf1JSLb9ZuXeKzg8yUExsZgfN7VPa8Av9QQJgutK6cC8xSyagUXmSbQcVnzXyinYfaMZTn8BQqMWUxU53wyz",
  "key15": "3h4xSNxr4BxkGabekkpS9x9PJ76of9r9xS5iQx2Lt9nGmVEpe1z1TsawgT7tyVpXoJYVkjPtb3Ke88VugsUsBjZA",
  "key16": "58UAAU34wucyfnYaYV9rufCj5fZQ5wjAiJb8cntpvsBrD6QA9iU6jM4k3RiVDeJbssBbY47T7CpfMnfHqT8Q2Reo",
  "key17": "3d3R9JXQPbqkUigkVh2iM6Uobyf2UoKfHMSuERDfC3WuzH71YWfUd3zkoPoAdMKg1jytrnYD22r5wXPY91qiVvcr",
  "key18": "27BtnfacQ7zCWRA3hB3hnGpcu38cP6t46AVGt9aYF8bKFE1yjrVSwSgomiy6AAVABipjGZRYbdEBJNpAm7vQnFte",
  "key19": "vXDMLgKKoZiJoiLYUcjfEM2TXpjrHn4XrE9gWuCqreho3ca2k5vp4B9xwmhNxCRxdHcv9iZhWQNRekY24BGg2fU",
  "key20": "5Xmc7UPXGo4Hvu2DrcRY34FvofZThX7Ytr5r5giJgLSYRhKbXeU3P7tPzvGgarqXWnTMdDqYaPustRj5xmULVoUk",
  "key21": "ST8VK9P3igsRphNzgYn7JGSyZJZSaTmKygzwaN2mcaB2Vc4ez5DHaqmAB78VZ6iAJzfg8C26j4Sw8kRVCgtmvUs",
  "key22": "mGM2cUSn4EomJb6b1wSxh3QZH5M9BEW3ktC5eKQ9rspzv27SrJJeYkVPVfw6YgiaK5YmvczkBAhSjJpuAgggwgA",
  "key23": "59J5NX2vc4ty5msoXQC4oU7HDviPzN5DAexQCuY7kPzJHVGdUEmKioovHZPGmTtJUdCs3S6V2BVWR2JzqUt1uJbg",
  "key24": "3C3u4p3aLVRo1mDxnzB3ZeTFeGwjGoZxbf2oKgAaL1twag6LPrFrzYtdqGqDn1FHm4ZXhPH7pkpaB3hn1LmXL3bD",
  "key25": "2mm2kCZ8unnEHLG41zHaVu9tPDFUyJieq3L6buNXe3AmpCWUDd4kq9UCrCbfq8eFgPo1S5h4o4tB3FhaGwDZEGRd",
  "key26": "3nZJ1LrSdr3suxJ9DnYfFRr4TYP62Ex63NBndnrogwfLPMeSSxu3imGGisNzVhYLbUuWxCoWKARcb9HMiUTCjm5h",
  "key27": "2x5DsyaypLrL4pRuF8xpfV2LE9p52aZwdVoobuhjWcrPEouASPF8SozoNeFSMTsaRHBBgmQFW9q9YmT9vEeSMGax",
  "key28": "Z8mHXhp331DPBCcPiJLdHo4FLwPVhzQ7SonaGKEzEHLagxRt3QZMv9QMFXZTKzSGtTTM6uee8EX556Jz3VzUz8R",
  "key29": "5RU9ByvWSwaU1jQzPQbVJ41z74PFCLyHNXCmbDjntN4GX3RtnEjtP7GjzcgfjN1iH7DTV3xonJPNBifx2ptk2gZn",
  "key30": "4v2mHK46uMFqUgFUHdgnqsjXg2M1otWCYFc4kUmYUJniwedr9RL5gS2b6tTDTcs4qzMFYgb6QPobvDxmT7HNmYaE",
  "key31": "3tQFd6uVjUmjHh5VKBZgbEvyNQLuKN8mS5b35DssbfmogHFQEbd2oMuYChvYQsw54dAYPwYmZhw46BABMXYtdV96",
  "key32": "5GYG1N7EUHCGSFvGim8b3EJHStqwqXV7fCJ1wGqyfpEZ2Kw7ZQhc9yPixLGvAaLsYzH4c91jqQhQ4djXrm2FnXtc",
  "key33": "64e4JMqBz35QKFjZWYCadjvLc6Km2kZbKA3YbE2RJeJa9EaiLgQ1zuFRwfkeSA67cykaSrfkRescpZsEaeXGTr5W",
  "key34": "2fshvd1kBStHEidWw1NLrpCAZA47cvw6QhhgZi1Ty3EnN2gmZwR1M74Se9YrxoZ95HSX2ge9dzXZHTEtoZ8mwSVK",
  "key35": "865BSuGJQC4xZTUuvNnqjrKecDzpTvuWZp8zvz3jFPU4FQa9X4Vnx45o1bD5Yb4CE15g2eCHfXGbMXbXrDHirNy",
  "key36": "4d8gjrkLAbkyFDaNfLsCGHE9N532ivRhqKrKz5DAAWhNYMn7CTuB2khgx6kebBFwPLugfBsDQVRsH9qMRghYqDYE",
  "key37": "4YwAxe7EDWbFuULpvdC7h9SYb7Lgc4Yj3KDzmi9gnn6etqHhUtX7E8Rb6z6MaiGeP22AB8ReCYvKNqtEYU9Kbx99",
  "key38": "354SuNugCANEyNgA4NRHGYKdFyc4ermqv3YJ9RPrwXQSN7PRXKSgb73wDVskd1ALvnF2eiu9A1M8TswsJJuauS3Q"
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
