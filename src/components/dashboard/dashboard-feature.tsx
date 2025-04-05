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
    "3apeYk3AddPqTK7p6Lvg3QCqmfvXkpYNsgXJzCp1gBaheKprcdkzp651uwmb6Q64ah9eTeLwNP8sYWziQbQkTKXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a3VnN5qkjkBzt2wtnK12hWYqMzUcGWDqJeVfg2yK2kBus1JeASAqP7dngytT73GiRQF7h8ntbjADYohmzVYRTPq",
  "key1": "3tTXdBDCnj98MAiSMth74FoaSLSDauKqSLBDHJzRMuGUnz48H2gY5cZHbA5P3kTQeC1XaGS7wadQDcUC2PiM932C",
  "key2": "P5m2oL2gFxd5FAY7mibAZe13Qyi55pigrwXXv24bcCdExnwyDGeoZsNDHZ32KeirMgvMm81u38d9Hp1jjU8RyyS",
  "key3": "4ZViSBxavRfT4JT8Wjd2pJc4W7mggG2gqEQAsSWA2xSZZWxyHSmZCVS7FowjNu3wJbBG96VNxXLnzAuXQUNLv1Ge",
  "key4": "2wh27teSqDpLUMQfy7aQzgiXHdEauofETtwsZtZwdWg6grcZtVwczzvX3VGiATrH6aanJ5pi3WpPKZJDC78U8BCs",
  "key5": "4pWhdLpb8rAZD9ZmaeCyoFb1KWCmzMP4s4TrTpVWzeW3guNeGRaf1n4WBcC7THznAoX2mpAMjgaNA5Cm2qdKNqcz",
  "key6": "4VNCABnii1Y9Z7oZBuyeFLVruMVo3AnYov4GfHQHQ78J7koX4PJyaYcRDUw9pWSnpAyz16M5Fe5o5GMPNRyKo83z",
  "key7": "4gGy7rsXUAMQ2q58PZGSRgX3zkkEqowZeVYdbN5veXM9cviCVsxWpesVeA61zwJMZWcrdKWiPfBJdgXg65p8BGsq",
  "key8": "5MzzmaUXvhFUY6sDH4QDQnxRMVDhpQqWtjGs76YctBubncVFAxwksoF5m6X8KWoGgv8G8r112QZRmGBBarcq3r3",
  "key9": "3kwLGcgztD5G2LWwxSKD1d61qRh7UvnR8s2EX9EPes3seBDM2mTtJmGDVKFBFJhUfuxTkpLHoD6m5U7Abq8TV5QF",
  "key10": "46Sb4aCP5LJDw78sgkmzicmAtez4vpvhcGvh8LCbrNVT4U9LE5LL7M29QCi1USHi6pVygCnhjf2hGd52fV6dBLED",
  "key11": "2mMarkPaWHXqFXXP28oMxB94N2CkCB9ed7tXF2ipKpQ21PpKHC6Lhqw1hnfUBT1Pkz4LzvxKL6xf98jYahfU3MHJ",
  "key12": "347hLwRCjm9CbENS8jdXfYbNKmxw59kkgTPJK7JtFeUrfPf4LDytcUfNw9j8zAH4FgaXke4PEaasbbKdDDNDJCWL",
  "key13": "2ktvKfUEPjong8KmsMy99PGNTET4KK9oFX12XDnu3wHp7PgmXA4LosMCT4tQb1HhNUurujeth7JVtV7qU9Bwpjp7",
  "key14": "4Muknik5aTLUQ9YE1C72ZaeTW21F2k8BwtkGnd7YxdeLdQVKcFpABasfALsVynyxhfSUY9CNaSJz1v95A4nH9TdV",
  "key15": "5wvFu49yia4Pxx5q4hPP5eV2cCQZqzuHVfbFZXSxuwTttq6dsuJ7ruy7JQmM9QrToEqAh7jn3jJGZhfCu8hs92zq",
  "key16": "2EV5Ue2oZxRYeQ4oCTrnDv9ZopNqmvJrkpvMGfEmFNq4B8MnBD9VDN2JTECwsTuvXsCdvURkW7dyzvisS2xDLS66",
  "key17": "4yTxeF2EN4S4vSPpm42kndD734hXnv9EJM1QDdsFphNwJMynYa8KSBxpCRGyKoQaUtptZtP6xxnXcXufGaiTyM8i",
  "key18": "4ZDVCnyGJFn1FK9ZBbxUND5mpua6k9FW9CaAX7aoHRsATbbRHaCWyEaYUcKtUg445WGe4ndcjib5QMiTfU1Lor2J",
  "key19": "5SiYFnU839diSGvGcTPxKAKUZRai7rWN5cTRCqfVAxSBaGN8vB3hCLDPUunELQ78w4Ha7KhrAT9fpQ3QGwde9b6b",
  "key20": "4gf9rcVW5uzaFXFufNgzVfWZV7iDZrQ9AyN5KvU7L8w4iHF3nhWUzt3Cee7uHCKyfPwD8dhNGTWp7EQ9B6ZUws9H",
  "key21": "51KZfTRLYcUeVsDrAaZF2YXMEmDU1efBAzcj5PMPpdsuBAhVh9AyvRevv3TVCg4fvqd7FtA4RgwbVk7uqSrSour9",
  "key22": "ua9LLG8Vz4cbnDVmjkR8UEuKwduZFH5o35JrifAXzVFpEHHYBwTUVRcMExLuvRsbf9YJHmcrRxQXLpVHq8fxa1K",
  "key23": "2NRSazyKTcMo1PRaMndBX2q8NH9Dei849uZB88JxnmG6QmBCBD17HSEVGdrk6mLZsCwRYx9tmkFWYZbgjvczMt4M",
  "key24": "zH7mZfwjR6re4zkW6hj8XATnmotLggNzCJhk7ZKe3VCJrZvXy1Q34jXtYMUJ2uxd1gYUz4E3rP5sua2yGbBHMni",
  "key25": "5CDU2jdcXddPKP6uhCER4SqJ2MMmPK9cEVZ157suDpW5YbzsdH8NzRvbzH1vTjZVe9acotFoVWqVBAafwtgwReKk"
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
