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
    "4Y7Dvy5mg2TDukuPAqMUsExhi8cogb9npE9oqw12AY3iS3ULBrHwNRcZWMYiUvhKfzdHPgUtzWexTVHwQ6SJp1on"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ENzHrXLckGk9S79mUwsjS3ECNnG1vZkcRxo6Xde6fHVCWGtn8xzjTPgqsPu3eepM1ovqLxZgrBpvb7KTQWxpK4g",
  "key1": "4TC7xTnyyTG8YKrds1hpCVprmN5yXAvy9abmzNosrvBf1JfF9q6B3cL9tEEvaZZn2U3YvKziBUKBejgzFs4cEKJc",
  "key2": "2BdSgTcFcMdXRiTJjmP3L6BUMbP3v3k212gHKvLF5742GibcZE7Fp5gHd4E6wWYyrWDx2bzr8vfF94rEBfQwN6iL",
  "key3": "5EKWfMbhfbF6SpNUrn3MSpM9zrgpBBZ384j1RJMcNGwsH8N9mwrLoKBB5Gtg6wqp6h5L2FyxtxhtwKmikupUKbmR",
  "key4": "2eHrFqeVZ6fxLSa1Fkm6vz8v1LRjiZFqroJfZA7MYHg3Gbs8Cj6NchfrTBNhBppAPdLxA79ZuiCWUVVvyAug6BMK",
  "key5": "35oqnPZ3TESMRLpUU7rvhjY1WEobbqLK7dB2RrB2MjREpggxfLPTC1ntLyr1XxMzrkh5LtmnFscgyq1Vy9KQkhjB",
  "key6": "3E14MubJE5NTM1mM1J3x3aW5Z6SsW11RTCTbaT8D1uY9NNRQWyuxd6Tokv6cEPwVZP4HLU2YeZmU9c4LoKb4s64o",
  "key7": "3tF41pAEk66qsHVziSvvsHqZE7dR78tvPnKXzhfajbvDwzENUJG7Qp8nrWY91RXGG2w5SekQ7yKNVYfpF1qcLAkb",
  "key8": "2UcNnBSWdWXpHXWUbS6MWmVnovxU8a36KKLJ4BPNJ1aoFNHYSefZ37J8um63LXABgY4AQyGyPDduJvqxMansidsa",
  "key9": "4G2YU1LWyoiPL267MNEunH7qHWk7XLC4c3KG8nHLZshd7YptRAtSyshur83XSt9KfFPKZMYVfAFkx5zNSKPm3RT6",
  "key10": "2p7Hx66KDP13FcPZ9j7RCXzkt5jP5Fwun7tAQPrE6TX4ucqAGVkxYeRPdn6iCRSx49xsfDtjxHxshXW9rZwjqHok",
  "key11": "56Axeq1WVcVBQKXab32w5G5MJxXBi8Fu9wpbfAwWvUx8UfF4vRNTdfxkStE69qme5WLbbLAKzZLgcvRuxRyZaTw6",
  "key12": "52xejvcWtiDnMwAvmYh67C7WyG1nU9Zwy4aUNVMemKx9KWLsfn6PLz1ZmBa2CPHkdWs4N3JaQiHug3e2eDjRwGgk",
  "key13": "2hx7RuftSayLNZzvtbr3ra7KMTxsa14sxkt3mkg4tpxG3wSuRhzXz4HSMMfaHhM3ZUwRBbeTcx1VFgQ3UyCNH6J1",
  "key14": "4z21JyZSFG5TiegJWhb1sqRojDtn8KFYZfJQXzYDNQxpZAAQ7ogRxXmdE2rauM3pbcUHicVR8exNm3S6YXP1CGyz",
  "key15": "37tE8p3irTLV9LiZN8GFwGz1b1roYCEJ2iZHMf2ptbwM7cdNVtSeVwFkiV16QehDu9ji1NAmED8m9o7u6j1h3tbr",
  "key16": "3NFt5pdusGMMz2KHy2qYccmGrXfcYcxXraqyZatdqmwkcuTWYpByNfLHXkEhKzn2v6h4ddzKuKKwfDHiG3AByzLQ",
  "key17": "2BLQ8rHBtdc6CCh1aojXDCY6782qpXn7Ar8XTx48XEid56XS5cN2wWviL9YS6Y3D5FS9Fdd8a338xFfT6VPAq7oe",
  "key18": "gS49phZMz9C4QHtxqU3GEySDqMnGeFiWMXTyGWkz7YdGXst9iJ3MdYrCSsMY1vB6PKYxPSi4r2MA2CjZRRxEUYU",
  "key19": "5VjxhaVWyxtDDXguZk3Q2gj7AeTq9v6LpX6CJyYq7J6WHGfQ2yKVJRKpsMdVY4RmVdNMsvkBo92hqDGQEmpaUBC7",
  "key20": "3UZo7bbtgpREQ8sTaDD2CvTG7HFsWhFmXdQmtQrsTyoEyJGiGKiNtMj2kvvi4ZL7AvVJBXsUEtWaPNfeo4KtHE9c",
  "key21": "316WjVXSUYfpQHvSnHovjaUy98MCRd8eYdpfGWnfn7hyt1kpJxzVqdRczhzkSQRSMxH9QdJ7LSz58cmvPhyLvfMe",
  "key22": "2qUXtbbiibbvACgNqoC56JwFesvk37oKCtvrVyx9cLJ6ZXuVnmeckRoK5eEx2bn2Ti5AtugXa6Y5qjePh3SMduGk",
  "key23": "4EiMgq1D8zSJBk1E1YbnctxbS2TZ7EpNPEbXsomaorjuaSUwyJGEs2xHi5zcStrxPNzAFAhJh35m8gX2RpTFyTbV",
  "key24": "5na7XjNxga2TC9BpzvWZaC9JUrHLGBJXviAFhh4tR17YmXunjQEKbk16YhM8TjCcurVQAyUodyZ4tFeGVT3qoFeY",
  "key25": "46kjU9jYt6A438RcD7Uh5VgSCLk6LHpofH5D4sqswwuT3LG3metNDD2srQeGCCv57o6GuKgYWGsNzbSvJwpotBee",
  "key26": "5DGpgoYUC4QoDuUk1cYUVYwm92dNmVc1VL4E6RmzNyv831PD4gAVsNVDm1FoetbYM4hRhTsNY2M4TNdvL1SySTLV",
  "key27": "3JcZViR2fXZQHCC9EyoxHBdnTCSmngxhNPFX1RyyCf2fe9YDKeRcGqiqMZFJr538bF6m6W87nprwAYrGByztjhZY"
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
