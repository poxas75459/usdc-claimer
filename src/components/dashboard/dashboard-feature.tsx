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
    "57tjnHt6ib66Xo5Csm4nUzg1oS7Epy9FRK5RJvpJp5nTZ1BnsKhtgDuqfmmPvRADVvx4vgYDcvdESMtZq6qn6Yvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2St6hwQ8yn4XCnrbF18KoTBFZrGrYV5YxdTwHStczEij7MTghP9nAcJPqFRsA2Tsi4P1aHHNadcrBc3Wucza7Gd1",
  "key1": "2VzvoG7kxLumZpSxVWHN63twjeyaaAfAP5RhxeY65vBaJJgU8WUs4HcD5cfVdpfwuZ9MejgNp3Rwo84LkkNWUNhT",
  "key2": "2ezL86QM2DT4YgCbE9Y1qNvh41mVBnxiqvP6W6uzUWE87JciR47Kp7En9vN37xbZbbnzjcdVvjeuTBJ7V4Fz4anW",
  "key3": "51HsRApFEtG6FhBni8Wk9PLj4wj9o2piYfYHwEFiaLUsCyHVjB8TP4fRVHiBTLcVxGHPEh7xfT9fBDgZRHixFmnZ",
  "key4": "3nEboEweescnrFViJsFqw7TWvQqXA6W9R67wDx7mQKXGzMgY4ZXZ1CYehLgar7ah1R1UsAGwgGMsfvc1z3G6LpnZ",
  "key5": "5kbiJFcTBixW4UrH1KSxcCMQfUNd4iGmQcXMptKqF5FjQWWbcdZ82gVNb6KtKixY8YqPTUYd3y3G3HsQJaQW3rED",
  "key6": "3A8dQigYWRpNsX5rsRQyU1MZiR4UddvrzZ9BYHTQDwf5bkyEsjUYJCUwzG1Swq3WiCGeRuF9YnVKeaeQRTiZy7Y6",
  "key7": "3NQJh9mLkbZwD6xVFv5f7cohM228dtQLoJKLRA1xmA2C6pGZLKci1UBLPaDmstNtTWGH9ZZBcQ1pH5zmhGFTkDU7",
  "key8": "KQUbCQXHRAKrghVHA9xAtfkLpMi9m1F9Yes7QKXvoq8LSTySaMVUCDcb6cHJhkrk8NR7htPmRbSYShgb4qshkvi",
  "key9": "5Hxyt1SRGN7vzRynjTBxYbzNBLVgxSFM1U1RtbsR6YdvTWpqqurBYtgSgprFz2fL9AfpFiYMFg6oLU7KQ2DQNsqg",
  "key10": "9EqZDmRkgyzDV7cB5vQgqFrHwfp9YhfxmhFsTVgwKNmvT1HEVAvS2Nh91LFvNaMsbL8kHAsyhy7DthoFRefGeo5",
  "key11": "59oBB7wFvSYLkuvHaebRmh23ZiaSEcgsHTQxQhY3Zn1x7Pw5oZTeHfT8bv7i4fwUdEV6HAh6LtUin6GCPwCFkdRh",
  "key12": "irfYzPCoC8GgN5Pz2KiXC7ktww3kBA46bxTXatdSzDcW9kM88L58zsUCigsi6pejwxuUwRKJJb8tzqU9gzsPY25",
  "key13": "ULenVzmPopB7niJYo6VpFFjh9Vq5ZxJ777ZF8HzY9JjqJYVKGT1hnL1fJW8oLmA4ywACRknB6HP8zLqCWvbHAGh",
  "key14": "5ZajYTHLjTcxqHLBffATLifk4oEkcVhrxGmLkp1jctSmkvVJPX1RLdGYKD75GxTE5DhLKch9ig1G5nJHejN2VKgB",
  "key15": "2ugQjLkzc38QRqUJNVxzcxkptYXvrUmwFgAbWaPDMBGir5JfQnytre9Mx7oanEnXm6gCi1TmqRV7dJpHQbK1GNPA",
  "key16": "4BV5X9cpjGrv7Xm6UQUGhu2c4ge3hQVKng5pnPaWPW2ab6jvq6yVaqqvuGsp5BgA5Ps6UNzwUG4Fksp4N3dQbG6i",
  "key17": "2TScrTU9jDtt5qBSkrWbBmyJ37918NpBcM2c4nxWT8NrBPuDD8JP1p1Bz5HVwnmjEhxyzs9SiyLtmC1SxmSGBdvB",
  "key18": "pdShAQ2nE3FMQkvBM8ZdyuKWCH4htyvUwP8tHo8NiuD4YUHmbGs5EsCdmgERqyKxsEoN61j2gKHdYwr7yfciZbf",
  "key19": "4deEN6p6foXbvXudcUNMz6L4surgjiunB2fCGcsknVYkBFDQFuRb71KLSEQ3X77XPFF6fs6BE2eLYRg4sSZhfJyz",
  "key20": "4cPN1oztD6rwbqFLVkKydRdUzvsA4Ke2hPu4Swtg1tsRyvhFRaLcsSkKkEtY5qVkTL5D1WgMkBRJRCnizdiR95ub",
  "key21": "2fVymrjTaQyBkkVAbxKdr3pUTWS4f78VNfd8AqiVhiVJUFVqN9rTRjrp4hno1rTxDYSBjJuB9ZEDhKBXpTjnGtRX",
  "key22": "5mfDGMuMRv2vZZb4fpcpHdm98rzJx8nmVyCNXeVMZNfVQsFSWk6rDnLfouHGB2xgWoSLkj651z3oo3mpom6DeULf",
  "key23": "3D3pPZB4bPbpokmuJhNzETqxrdgM1fnQ2X2U35YqhWrwbsbksZVnDxs1P2gowGvMT1FhFcs5iJGuc9TWaafeEPuf",
  "key24": "2z96e6ukFbGzF8AEqj6E8cgArHYih2xuZiMabu7fch1bnrqGv8UQ9WDiAQ9JpKhuzqcJ867ihGYb7PV5PGfNkYGy",
  "key25": "4kDDxA2WsAcLog3AvMQrmRucHR6pPxjk291RXFUW1TrS4jj19b2eXTqiNZghyTyzQhm6xsjLCb59KfQXok1eRh8p",
  "key26": "62RZu1ngnGZG1NvkJDzxBi8qT1HeZuopkMAFTyBaVbXYS5DRP8GTS1Bi7Xp3sT7NyXb6uotVJxk1ifSGWMLEi8ey",
  "key27": "2FGFysogsMN8kb1xMziEQ9raeJM1DYyJboE8hQzahySwD8JEaCeSjVmT3QLP6qdrtHccvczsuQFNmUvhFGLQ6DMp",
  "key28": "2jAzSDHA12tpSojE4Umm47sMNJxo2aL2Ts4uvEtv2a2Lx9bnm2K4U8TstUh8AKhQjxFLtUsa18ozDzr8MYLbX6vm",
  "key29": "3xusYeL9pzxCyn7c1PrpC6v1DhLoLkCidmCVCFRXFFsknAD8PUVTQjfMN46T6RUASKKtXuQzX4AJW5wdwLEahXCp",
  "key30": "8jdweQJa4d6H3kUmJCSaAz4SWaG21PPRBCAQTAdw9dZKckEze8u4U75ZZUsj7NoRVby592va7RCMjufnht2twzg",
  "key31": "4XZT5yecRBfcMDYTpa3BNjz9s9Vd86DfbmCQh1gNqEdYfogUmzij9uUo1GdksCHCqLfM9XiQj6eeDtLgGuHqyfi4",
  "key32": "2aDYYo341iLh3Rz5sk2tQows5GtXYaxYTdAnJdChpLicFxS9C7j8eERjmQQvtCZADCw514vEpCiXMpRH3Mvk2XJ5",
  "key33": "5pkTdj5incyGiBGWDLW9nUa7pyCtAsWWDpRz5VWzroYmiJStqS3FYB6pwoN1JksSkDW21W2xRdGYkHBoVeKmDDBR",
  "key34": "3rv5NwVyB7sYNhLjoj4JAXcKyhEz1oxa1mVJGngm2p51jFeuvJTMWghWUwA7BuuH9BMYGnQ4PXK2jxWGPyBt7gU3",
  "key35": "3aWuHB3qyp9ZXiY6cDGiy7oE3kas81F55ZY6PZgAxRe1FjZUGK6kkuQdLTcUoKbqK9hkRXMQfnFs87ixAHtuSVta",
  "key36": "5Ay7Pc6N7nxsz1UK5Nwxi8CacMgeVUM8bXWBXgyFia3qhJ95HfsNgBLwAz9A15RaMAoNQUVUzFzSWw3A7fz5KQjn",
  "key37": "3JQCFUxFF8HsRXDuiwB1c9aASVCBWCJXbvsvCYhFBBBt9gcZcixqH7KMVigX7KN2DWKp6j1zpz4KVPadQJx3TpAA"
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
