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
    "xy6VJmZGsxqSs2CdGoT4JNhVPhnQuzUTT7eZdvGoSFTL3hxudSKc12MLqaG9RN8j91UfAW4ajuR9nScnzd1pnwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HatifVNqdpE281ktESnhTxMdHSYznQBgSmt52a1GKaPJ6sEs3VL4WBm1qxMXftvtqKQ5RWu78Fv3AbXoFvPVVJk",
  "key1": "5pBMMe7dYdhKXF567wRDPk9Dn4WeTuFafu3pob9Ub4CbdoULnuxyiTfZmQbYyxqfzR78EtjzZSsCgctmPrwd3x4m",
  "key2": "5Dg4dHqTT1LEr4mmLFWS7dLDjtrxA3gCZE3NV6ubM4znYx8uBMcwjcay8cnZPhKctERVqZzTkpku3ar1VdvFijTz",
  "key3": "2jqCwPhtApFsacmt1vuAwfjtk9Sk89NYUFQfLVZmt4g6tMf8jP4kGjYoHBfe9HCGnBHhx6dWfUDcXL2UNfeGse3q",
  "key4": "TUGSiaFR7oFaHGyVaJetyPRstuBYiZuoFx1u7Davbr934t5wN2KsAxgVMFoYWvYpYfhCg2xkKJomTC36pKUc45g",
  "key5": "5ADKWFTWzc3dSDsxpWijXFYNooJ5yVEUyrsDCayc3zDjZJQssme5vZw92gHe2e6cNU6vjRtZ9d1opBvxUc47Yim2",
  "key6": "5LBBdDZocF9VLZxYLkw2BLv5vQZut8LCt21pDKCGHjoDDXU8YJEPhGenfE9LbekizDsJu2BeL6SWvyeHHLrX5XgC",
  "key7": "ZXwCnt3cLo7PCXM6Cj7RX5qamzXa27vcnYEJxu8fporoTC4PXDWWeFaP6HYEd8nLsUnFE7voCg4FbuNv1cTGQg8",
  "key8": "uFHAuJCtKBkhaNe4cgSsjebN9tu9czSP96tN45KSvvE4TZq6VEpMGR9MMLjpnLLRUhounafzudycqHqD2gzCiN7",
  "key9": "4QEbTay68CtwchZM7pJxhuWrY62MnNato3h7PjSpLgpN4BgBQxL6xVi7PWhYkNNFszfXNuRabjfjFFRhUXUxDDAB",
  "key10": "5YicEpqLRKu9WBTuFsBqHoT1Z7usNMFZHH6m84RZ3qKsg4hkfsRwQ3MkrqFM8PXNHVWApw1wG2AMotNnC44vHjTY",
  "key11": "22bJ8XdFgwGg1zXYRFHPBt8r7aTrZ5jFyFrVgYkWmP1CXccW4JYqtnBJRrN9DQmWvfMhx2BqT2TYKERvJ8sLYFYB",
  "key12": "2GBYowTUw2u1y54qFZTkHnRoRZKBeFEoASPErto8irtFtiygFUNhDmjzrENbdUc3H7jabvxZrQRKwTDjhXhNx7mo",
  "key13": "58KEKTAqu4PCTsh19vMdBHzUyZum2mEedeYrSzcnKrm1k6wjoLnQ4Uw871ywwjqCdnb4wgFs5d5dUYtHuzjtFypq",
  "key14": "44HZhKs4k6GMUnMK7cK5DfueCgFXYVq5sPbsM2ty7MWNG4tSzxYz673Us3mcUVPtKyoyN2HBADeXzQp6DrPTpMXr",
  "key15": "5n8XnzFgdV461K6SkNFSkBX937YStQcjvr4yt4CZ8ZbaC3wpgBCrQU7qDdYRfbAkDqXgvSYg93Z5vviLnbhfa3t4",
  "key16": "4vsr2DbuFAAsdWpbrxo49iBuhfA7FBkgLaKPU5cp7fYmgrSBTsjdhDFCCxburU8aeYs6HcpdtihbR1m1Yv5pKsgT",
  "key17": "4Quc8DeJcyN3TCsH6muZtJpFYFtwfkG188izCFsbT7yqEmxxwLrQaLhnEAV9n8Jk8CsQqXswK1N2hngn8CaXYqiu",
  "key18": "2SyWMccfAaLazEDRac3pNtVeisf6Bim2f6thRnguAG5g6oRmjwLzMgLQejK6d46VnvrqQfrQXbCSAHKAuBsCFAur",
  "key19": "JqkpiaSQAm8BReuYGo4iQVrSs22jDnF24p6s3zM2ViR8VMR9C8YEk8HxgJQBawdefZeBoAtJCcNUxxCcDDtWmCg",
  "key20": "fyJUqwC6xqyr2AyooyDHxkysP8gXh74r1qhaYm6fxAawA8pkPSbMbgSSf8Ndbu6u55A5hDvSV4DSh14JCoYPCnz",
  "key21": "4K9yCNowkhfSGSVT6MMuanqHdbV1c2eRbWuJtNPWfgJuijJSBRcccnjzmv1N6vpq1JwhwLzYaqkB1wWNp8UznDSd",
  "key22": "3hRVkQU4gB2qtrCFMQPfA4NPjpwD41g4zAtX2xuodeMy6fYej37gpZo5dDVk5Cfd4JyxE9NmwUkDAj6pv4HGnSVy",
  "key23": "5ytrc3TFBU8vkerV7djYMh4LF1PC6eKLdEm756bdm5cugFEigzvqHprp8aY2wbavEMHieQhUJFQjp1XnSQgLEFJY",
  "key24": "2oAbdp9H3pEvLED6fQ9Wo7wPiRS9kS5QmQmHnhrbEqYu7CZQJfgWgVzjAY2zSBbkXSRLXEjvBvxbKGTYfDiwyosp",
  "key25": "641gGo9zxXBSaBCEr5qHjW855wov7s79PCk3Ur1KUWe7oNy9zY9XxWqiZfsg61nVUP8G6veYbMXrws1dKnGCrpG3",
  "key26": "2rwSB33mMB3cV9ZJQwYL5WsKVAn44tVH7cf17bV8eHkHVTkfxiB5zh3Usse7MRH4U1p77TJLQz3duSuEWkC6DSkX",
  "key27": "3wdphSov4ERUaPRx6VHczJX2FYjdR6KwbhPaMFH62QNSgi7YpARHSrGNQzzsyo1BepapwqwDeXiQe8in8m5eCXQS",
  "key28": "58V6U59mKnAgGVPQ15PMpZuWi9oooaZdHqanQeVt8JG8DMs1xXPqhH1udWmppKh4UrQ9X4KHtFXNsLs5VBumMQqj",
  "key29": "eo6Vxwovs7R64YZcKQXttvWkmuBV1GP21CHSzMM32ittkwpv6GkZBM8LZtptVJUj2DKTyB9RWGkJ87sKiE2zq1y",
  "key30": "3tAKqRM9CswHkAPLUghM8ho6daEjVBc2oEkC13aro1JDRgcixYUMb6ETHpAB8up416ihqRbkrnW8nLrSdJt9Bz3X",
  "key31": "5GViHLeGPWx5G36EPiZcTfAYSDb19Gkv4KQkcjdiBnkfps2ZnNi86vHdq7GotHZFQ8DG8rvh2TVej3yUy5KqGqWM"
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
