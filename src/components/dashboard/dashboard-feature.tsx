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
    "25rMpZheoJe6F2CVc1STxTD42qU5xVxXPoSDUVJRVE6GAqgBB5ygFzAYVm5onUxjjVZH924FhNnurwWYW6Hrzm74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fvduuL3CvpwEoD1DBaBqqv2U9kgQpV3vnnWA4N7n7LHS7WJF4KPsuwiXkQjPxuK5YW65HYGURoro8Tad3z7QoD5",
  "key1": "64xQWqaEbK7w8wgnfzG2i9JcAfGrUMAXPXi36XKanQ2CgQe1Sayvi8MkuStR1VctEC4gRBnSBg6pZDFkrWoRZUq7",
  "key2": "2nLP2YYwWajM6LbiQJKTJ3muhUvaGR9ffrtJaWGwUT5vkecgw7wwkC7GBJJweW3DE1KHsHPHMZ45Fv9jz4QZsBMA",
  "key3": "4ANnAx6z4xdf1D6UdU5cocpypg88kkY6zqYovaoYagVL3W4hhnmRwK6jPkkrtEUdbU4hcXuXsvejScr1Kx5Pzt2w",
  "key4": "4i5nwHp2ncJ4cSvPbzG8Pb3X6M7Cyyem2zqZDA47YE9tvHShjjD9pHdN1uDSbFuU3P5gtYhfXqrcahc8qiEDWLYv",
  "key5": "3ZUnUejVjVLatMQPHcQaPqk92QQfoTqBQgiaK5Ph96NJ6bG1Rhme3cKkz3cUsS26BBD4rqdtWq4qWgF1BQj2QBnm",
  "key6": "5Vd7XuG2JWHT6nRd3xPMrY2i7zqVYuaqnH3tLvYsA32h8NKmxKGKi3Ha4xDVxXXutStwFWmcKNiqMeovvHTbgCwK",
  "key7": "hys77TETLgddNSu2wCRtpvQrLxpT5hWe6MLjp4cJC6KRxZ6KZbHgdxaTJdhikpzMD6JDBA8HEs91HzDzGWuA34L",
  "key8": "5CpoRwJvtXBcLNmXvuq5VNdutQSgvsy2vZ6aWjFfWBD778FczJFQwTVtZ7g7s3HKjwMXz6jRofQgWkm2PJA3o84S",
  "key9": "3eGQuPJhVkSem9ATwYjrHhXyEsgnPLJv1MdhcKuujeXcQLXzrPiujkgySK6o7wP9NNnYHC4mCFCVZGUufxsTu2Wm",
  "key10": "3oU4yVDfdcVmre5m6qytj4VvGXJAiARjZTm4wdgdFij7khoYKisCF8ThnnTKGELbbwhBwttBYRoiqFTu6jXyxk8H",
  "key11": "2Rv4NxGTcTQkWwDCH3C6jmgVqEGqUyWV1FQs8nUJHQoWJ1yPKEtngwNoZCkgqLpPBmght6Nd7mSHrsVSgE56fHo7",
  "key12": "2MqGLmzqFjoG7BbbZaoWeXMRWD8LrjihtPdEeczHpBwBHMznDizh5FdCbppmrsqbhGFXWPZwHdfhj8LKzv9CSvtK",
  "key13": "2GBQx7BvDSSU7qjpfvx58GPpK4PhSPg9NZFWPfQVqGSGTHLP8k6KAvXJtnBNveJcgzw72QfBdnXyGbYffHN6wNVu",
  "key14": "4n7hpiC7vq4CVTeBgVXpoj8GKmMJM4b38L2k2FQn3Aw2X2BNkh4YQXHBXFAStqesoEeFmz4zRB28cRjBv5NBpJ8v",
  "key15": "65YUaLBjes58ZLeL1jZqSZm6Gv6dbkQF6pRLmJ2rmUpcfvF6AsokMZcSdMPbTs6oskXSB1zf3RDvTMbRJHmwfBc5",
  "key16": "5NEjnzMrVoxixk6fjGewTSKYM5mZGqPk8AKvcnvqYmdnKCcLPsdr2Kzc6vs4sWJZJT6892L3JGG8cMFTZwL8kf6Y",
  "key17": "3nTpevrn1P21u4cPt9qz4vCEmz2mhxDWQH2CvtYVFcrVTcrHz41oZRrEvUC49uZ7zadtG7AtDBpaeLa19yX7SFn1",
  "key18": "3Ayg3Fzz6qqeByTgLJQC6QQGDXEbcWeoow7RJ2D1VPtcqMp6VFjSRRqWhoXn9eEWaqEzAn7yWYVBX1F7VdWk5zQp",
  "key19": "5zRGaRB692msiurb8JgiJNXoNN9areuwBXM57y5qzgK4FY5PzbJXkpX9Hg9gCR8PJHssAKgCS4E8HzfAMzNYQcg7",
  "key20": "2KCJQpMWN5k8oF3UiwgxMBmew2WYFJF1NHZZbUmNiKAnmWzyPrXN1D1zakbbqeXbaDQQCv8HM24JSBV276fDpBGf",
  "key21": "4orKfsLaQGAhUsf9tQaiJtUbXBVUYUCCCHXxRHCuHzHDzXWUUsCz6sSex6MaQeW5ipXRZvseehvcgTio1dz4VcnP",
  "key22": "2vzFhTNKPiA4xVmukz1vDkzW5F7eEQ2vExSw8byHra14Gk5YzpmGXpEXhqzSjb1c1B4ASsNJKcrjhUAS6x6kvNbP",
  "key23": "XHJ29Gf4QDTedbcsXSpUbtf1e5xKxrVEaqkMw54w3yCfVGajkG9qXTW9BBAWsqCtzaTSLodcLcTfnCSTR1iZ9Aa",
  "key24": "jRavzXMRywqrn2uNRs3LjFUFfV16KMHcf7KMCLKw9i3GWTgLHL6H7Tq8U9qHXx5zxHEtAP3BXTn25tJXQfeCjSU",
  "key25": "5smQkbwsC15kuHVZuTfw2ZoGLXztBS8xiKwoUmTK19crFeGxcGXiEFotX7nSVQdC5Kj5oKzujhKrqi9sfYqRejKx",
  "key26": "61eA4Gi927oabSQVw7ur3ywCUhJnduSa6B4ReKswnkqfqHs3YMrg1hkNE9K3A46pdtMVksPXYemRS5vdhSNhBKR",
  "key27": "56LyggswpMyS9dDcaLW2NWUgAdskREWKh2XkAToheWkXRAAj8H3jbnXfaAcvL4FiQSo6HBSY1YFMLLqA4xkq3B1v"
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
