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
    "2KQLgweZLf35Vkm1TjEzAMB2Y9Ajjcs8STsETo6pg7pZGMiFK6pLPkkTY5qZDnBCsmeRud81F9gZYFQGhhrbBB47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wvU6scYH3VWFUivz2j5fd3oLGj4qaouFbEG8U6WAysYFYjfPtbbMWxKXXHiuXuR8R1VL1D2c97ucFL6StCKDr94",
  "key1": "66vrPqrCHkTyETu6rWr3R2GLS56mP9nx9KNSz4Q8mwqnB8SgKuY7jT8e88dnoPDFixGJZ35GqFXe3LXGZysnWpcD",
  "key2": "EcqGMCgqpLgjwFDSKoPQN5ov7goLHSZ8BXRuy2YzTYdfTuAZusi2JSm8gjsdVSPCbW8pVFFKDR6PtShvQiqpuvY",
  "key3": "BD4PrBA6syLbasfbyDSLJdu46qw6NoxszVPUFEumdnZGtUkZYc7eWxtFMmeu9my6onExX45qbMtYQ9qx9NtPyHt",
  "key4": "3kzGwnt1iD1bc799UZq4ZzMeMYnmjMTYuEPUstgtQXn4CYBJPpD6EAh7iD1jc5KNQMaCtmB8ohK9PeSrKwsQcovC",
  "key5": "2S73s3PMKKqVghZvbb5qypE8zqYPEBtE83JE9MJjHgo1tDatXU9oRU8zdGWxxLmvyiJVNCWxJF8uLqEU4FJWAGAu",
  "key6": "3FrVr1kBTif3FYGSbkhUVEYpjZzx7AUWCjRsADRY6b5fB929iLEXauiXZrp9tkca8Tm68JeHqJSxJyExaxxTnpQx",
  "key7": "UwXGu58cpmsb4Gsi6vNqUwkgXMVmnatqwmGfDNh9kEnKWEpX7C7Ax41WmeZpdycLxzMog4d8m67GE11ddB5AHuD",
  "key8": "2jQwKyfDbUCryd8adC8AJ7jq6j6tg3WeV6KVj2G9LH837Sy4eB7zXzrCeHJ716ffuMBUWgVEnwST3gTMkH3myj48",
  "key9": "2rrFpFA6L25s5QPSzUhMWiyeUUvuwa1K7uahLZz9c6XXawk43Vy6txxTHKEioTNVcML8HyiNHBsGpinMmCSYMBt1",
  "key10": "51N3rFQQuic9BFfyxphEmfQFqntM5vA9osKqMz8xWqBveW8kFkZiBFSnSe69j4YqLbpmYsJ6Ztw2ZPEjMo9pyLRA",
  "key11": "3KKUPnQhsgwy4NSAsxBfEN5i7yrxk47bzkDm2dcCH79Y2nhqfrd9MhNQ13a48ZPm9gKwZVzgdTJzTYVACFMJq9C8",
  "key12": "2t7TTdKpyAVpXm2MWNDQhk8rhu7pQ5vXtMSNC88DpKU1Wh8Wp8P5bijCH45V5vJjZxmjKysKKXREP7z2ak1bmVJR",
  "key13": "wB7fuiXP6ngaDkm8aejYNsRJyCjzqxdjCyF72pNs4jaRQscYPrWgvp5xEmUXLDf5EbSep7aieCcK97yPKYsji4G",
  "key14": "41i41pTHVheR74xEkvfDkaAK22UT7mQsiRKeXG5HAw9mruHvU8KS9RocYUEJRXpXLK1GvgUQtDpzLCnr876VdVnw",
  "key15": "2ruLWd1EymYCoqrfPP5n9G36RxMVAfZsTNRBTfYNQyR4Mazqdgc2skQCLyNReLoamqm1WXYkm14zJ4zbcfUXSfhg",
  "key16": "2EcDdHoCUD5PtogqKAMkRUqqGpz8bD7tWNqPBhPY4zNuJPifQMrJkjyVwmPpXhyog2tuQnvKLmgq7qP47fcKLE7d",
  "key17": "7sMfSfRRerMtQ9cqjCEZLQ2iPwRDRwfDnBh7jpiyCGkV8fLqVMyUcQQDJKjXajZXPSBG2gH9cB36iDVNLFf76QN",
  "key18": "4V6aLX168UNGPGT3SnB5KzqwBesQzRLs67RJ3yqpVW1T9T2UQreduXttm75TVKxxZV3McexAxF2hbgsd8sK4MUDA",
  "key19": "PZnu8u5379irfSDhhtoV53Je6Mr9kN6Yj67YG9BTozrYzFZfQ26iarcCeEiusey1FqdroToyAPWpr4hGHa463pa",
  "key20": "5veJbWBKXUk8zGqJSaWi4wLKgChh4zfiPbwVTamcxt3W2aysTZMobZdDKYYUbd1kkE7CvoUCe6UDQZ7yD2DWerPf",
  "key21": "4A1HgdrPUoWLNMGEHiPqBS8KSG9VF6JGDfpe7aqYCdApFYDkDcetAYRcz4paCCkaXPMLSVL9affxM5xcDAKxYxQe",
  "key22": "3o4viMuvKajLMFEx3dtFYb7ipsp2h29vVUtLrJV69MP8R6B8nvBugufN7ppK2WFYgT1mG4WexveTXfHBgdYDCyXW",
  "key23": "2kaM2JUKYTyJ14chdxLGNxZ2TFSepyvfFRqL9HmrQzaNnoKrs3aDDZMjd3dVMjhJGfqwgzsQceQNBeiK9JVPmyDN",
  "key24": "4F6Pzcc5bLHbzmBZwcELf8jVYtdo8yfMxJYNe2UrVpZJuUxwMFxKJPX84tyJNjqYAyW4funEgPJ6N1dL8JPudBpo",
  "key25": "3WefxqbwcK28UQF9Ym2m5cqzt7WsC5WuLxv1nCbiSvX1CjrJfnpDAjXvtZS7T3oE67DKjaSisXa8KNDH1snhmiXR",
  "key26": "ojm5wu4pkxHNPqBg94u6vHCgctgn8qFGiCPhjwHro6iMAxF7ae1bTDPzeJwf6EaVfhY1ULdNWjZjJq9gWByvpgH",
  "key27": "2QQ8gEuFxt5jctwsUjFUcBKvVMixmY5rHJdTG3qEEmj6vQsLZrrNNB8FMwNSvE2MDpZSkEkykgAKNNN7MYZkiznL",
  "key28": "4RZPPJ5GfZiu7FgaipMEU3wmVTXwzm5JMfwhdsJwJMPNdCPDcP6dqTVgmwtJZTPdPCQUBM1xupFNCBHRFD4rAZwj",
  "key29": "4rckfkVftMQ1CZsKNEnaUZN7v3uhS8Eo7VPoKTnHU3UiAP6GKs7n1zd7vVZcMcFXUJH9jE3ceSJtawzsGArsHdit",
  "key30": "3UzMT5ANEdX8isN2qjG8cqzumGeBmSyBK2JajC1rSajCFPkZ5dFFS8rCdZjMDRUhi51zgijQ9to8NgcfWdVXbAeP",
  "key31": "5gRwvfDMLRvKiN4jdS4G4HQqzCW6KuRA7H9vqzYvoVjcBs5v4ynoW1vrydwJ24fMNoM3f6Xfdo4kU6rsQt7PhgDT",
  "key32": "5vFqoCitB91hsRLJA2PZVTxZ3fgc8kVf2FjGHKN4LFNdYnVW2GLLAYEc43JiZnY4AiR2E2LJs43K8z8MZFv3Fy6a",
  "key33": "5BkAg2ktjDhS6BdFbZ4nKFv9ghf61c56gc8JDnXwaK4DvRBqv1XfEX4hRvrC5wgE9q1LQDukW2QDQsdw8Z1R4JZT",
  "key34": "JZuVUQBn64d4dbJXMF2v1x6ifJcYEBVri2qQAGaHS2zDnFsxiiKNRhuge5xePk58hSVfV9GZ3DNGJwgt1vk8Sw8",
  "key35": "WWT2D7TCviJPYKyTNKN9eBk1gGBn41nczGPuSxVAuDiECewnKfTCjQ6MMHRDHxKoEGNA2rFZmwrbykRK31x4xCA",
  "key36": "x4RYECEeXucpTemM3BiAJgTFs4BDfPeyguXn1oPEHUy64tX2dFr5mEq3yc13v1R37dccUiZz4AgXGxZQynuRpWw",
  "key37": "3pxmZTMnNTNteYGHgo8fEB7Xex8eg5PFYVSjHnz9XaiMTChK9gfkBhzLfz7nqJktDNEKKQxPXkxgeBsK6Du75nHP"
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
