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
    "qcEVgjExdW6A2hYCFZzxVtjdCLDN9PBvwCKEZamg3pp1S74bS7RL4ZjKnPJ6y2pfDCD2xHqUNPttFQc5XKCQZa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JtpjoKAqosq8PzU7TXubSEzQyzqeVQk7w4bWwmpvFVftE7kvwqgUWN6rxbCNGUpYdGfQ9qEFthT1fDDkRQstQH7",
  "key1": "3vYBL2imvuAUoezzzYM5FFSQwwm4KnwcZFoYH4jJHBVL6KQC6KZ5F2nV7W4aLCf9Q1SrHwVBw2jTmzCoty7xQJoP",
  "key2": "4E91WTNdWCzJFztv5Jokksj6pSqZZQc5TPdx5MjwxeFYk3yoqUot1Kj6Xx95B3UYiMpwb8AoUykDtxnyZUNwM2QP",
  "key3": "2U9b3Nk98uvzkp9NvvXKywFCNXvKx1h4rDRvCXHEP7qsUPkajxDfRgfTsaTPkMv6qXaQuMJkRS4K2icXmihfcby1",
  "key4": "jUZM86wcyMAsAoar9eMjM2jXP4BCvGydqSDMNa4YmmKybuUW4AQQj71LbRWaj2qUcWRyLjnAhKm3d34qT9XrC7M",
  "key5": "5XrLdB7AXgWRjbBrJTK1TLVxNcpi29APhkjpfXtKFzmHeSGPMxBxQAuKmNmpwACtAtXP86tay7nFD21xJj8Nr6uC",
  "key6": "oDCtvDDUbpRUZ9kWKUbzAvLELmMq4DcyAXNtB1KRDHNQvZFLwTQ3hp3JyeNx2Lwx6mWRgHAvZYigMV8b9NXY3xn",
  "key7": "qXD1Wep88jzNeHvmM7Ybyfd8TWoNhLwGaABvarn7dqU4jzbDLHPa9dMcuJvBUbxbm78RfQWCF9xjcApx8rFz9b2",
  "key8": "5LekjnnstkCAYGzZNMxrBgTXwNgU1qLpt33aqDQMHAVZVCDyxyvXgjaM8udpHQihRjafvtmN92HHyEMUmpL5X946",
  "key9": "3LxMUMswEfVHxvv5mPvo5JX6kgaMea4qUE6LvotMYbuH4mUE8EHHDHcG6Ds1Fm6gFFmjQkukn33oJjsb6fU8BvSK",
  "key10": "5eBVZHbhsprEGueBsxuAUNhHbH1GVxq6N1W3EG7pKHLVcBAANFBXaqcpFcUuqFZaKUbVrGd5tCoobSjrqAp1PyNf",
  "key11": "oXWxsfiE5uL9BUsEJL5vtsrGhQMUmsYrmwdyaiAn27Q84BidbeWXgMHva9hyVsAHSoaYbCPEq7ChYDuQNkirJQ5",
  "key12": "APGPEe52JS7vuxhe1xEmyGg9NBH4kQpcooNuqK3hNb1FmMrSLRq79oxbQUfWKu3xZu1pJrwYoQ9QrBLjVWF5mKk",
  "key13": "5nTSPRTzYLpq5rGNjMvqy6QrLgXXKLh5CbJdW4pzW3AHtBmQvyzo72xL4ePS1fELfLrPRctcsBM2vGevTUKFjgZF",
  "key14": "4KdyXGAWczudAoQNzMySk8p6dkVEe1Vhy3eFymr7T4eSsPQR5RnFBWPHJmXmibtobEjmmumDEyDm2aCuwQFEiWSr",
  "key15": "2NRswAZvaXZsfMnJENqHzKmp4AqJZKdyQ5Lqtmq2Pi34HT39VoJknm5X7JDvUrbzwcht79jdTNGyzTMUbRdvp9Fn",
  "key16": "5qVJeZMtwVmrEyz1V26cbpszU4jMPZ67PyR1aL2NTZunR144eQ1VZx47nK32UnFmpqVHqxRP2JPJPMRtDqB9pCLP",
  "key17": "4Frje32SB5EbtJArDC9GqBsRMwvceMk5xnNbJr3L7QQUGnkEsdbeAuS4mMAU2sugUpdksqSht8yV41dbL1PHMurw",
  "key18": "3rJS8EVotYXNrHnYo3TjZx3oJthAP5iAnESRTX3cTZ18XuApoHcLnKorjCm7d88bThFUUW8DtWh1Z2kSd5xrj8rH",
  "key19": "43xFdH4FhacGsQBwExPbv9w6B65bcYmZhzHvnrDbiw5mEfVcQeYE6M4c3f42fu1GaqL38usco75xRYPs4U1ZY8hi",
  "key20": "2PiWHhjJHu26HjSP7PAwKMqLSXCm19BVyQWS3hWsCDX1vGWd9irNUrq5uDaRG6E2vmK85M47J268a8M8apxpWdCf",
  "key21": "5cMKjMWmvhhUUpEthc3mtH4YFaUZTeEDD5Sq232nSQUeFcpJxtgcZqVkQd7VdjSRxnoPnFh9XxBUnd1CQy99AbbL",
  "key22": "5Kyr4HKaxeVKrha6U7iQBy6ujSgQB4Js8hwtwHjmyvEXAn8Lwh1bUaCLykUVei1bbmtpY6NBfsLf7FAX1oEsFcNd",
  "key23": "4pjrEBDfsK6Yh4HWJRUeyDZG5ZTtbXMS73u6LMzydVkrYrvM5EbXYq9uvsAHUCGVnqsiKUa3MAo6ATw51jXAGjmS",
  "key24": "5ANFJB1j8ZUHpgFyukhHujkvt2ZkMnAcTwYY1HkdeuNvf85vXjbAaszPeJZckmdbyGMNBPTfSinft7YbTfKAQt4T",
  "key25": "4T2YhU9JpqtW2snwc5956in2vgWTt5F4WVvKaUaX7V1iDbrMyFRS1XfQxJ3M5vn8obYswr1kN4zYbk2bMGvHW8uV",
  "key26": "2PjfKkaNsrragDk7frnfSWpaFvFy1HG4tYKneQbpZxKeEEdZPUbAZThXkpYt9cbR8ZfUUnFuGBzNWbmAb78QMNQP",
  "key27": "2mbfEBxDfRHv6hTPMLACQGqXo91d2YgdtYeUqULHxoXAo3ckajEmcKsxt4kM3P45pFvRaFikpCQ3v1WSAXfUVQJD",
  "key28": "63A832iR9rpx8ZzXFfTpjbHgmGarBLU6zf1eezNuzbuzUFhk4jbNcwoAUddUaHzKWBvXDgZymoiTopP4Pi9mP5Jy",
  "key29": "3rsdk2LHggsffbdhXZY6QvNdETn25yppAm998vJoqSuBusbSuQiD3gv3n9ufPof7Uu7UyganyFi26mnoFJNasUKB",
  "key30": "2HzcLDKz5wmHqfFQfZxijAnLFdwJHw1PkPuy1PcpHcEWapwmhjtCC2nodUozVmTc8kZKhKjvmkFVPKJXGwxSyP41",
  "key31": "52uZbJvrhoJYRpFhriZzigVgdkxb5gmhgK3nwqfdZELPx7JrmeoNSnW3zZrJXofdRk74V1vPeXYsyNEJvZLXaTru",
  "key32": "56LXGqvrMbKcb1A3uPrzxTVhDtBWteErXavXJovtUbXkgmvNhyVKeKVdgyWYx6KgJypBEyD4WbkJKvAHZMDuVQFS",
  "key33": "39wXDZRGhic4g4zAiGiARs6fUYriMukgb2AteU2DkG6DwaidQk1ZDmKGF3g1ZxoJ3KsPCqcE2BdTQ5TtYbgSGB9V",
  "key34": "4zAuXiqjESEc1UqDikmwsnUQ4wgXBbSHWzNZaipcEkUawfATznA35Jb5eTi7nnVF9jakeqfHgdzjuDvdxb4UM71F",
  "key35": "2Haq96wJW9VqDUpkrgTt1AwviJP7Wkant9evztPTdtVoo8mcUnNgsBixeLprfbJCGCmZ5PVhQppsJk8a5n5apR6N",
  "key36": "4VGmYYA45yRcgDy8fdAEhW9u2VW5mZFyLxFoLfaueWw9fxmz7EoMuDqX8qY6DiSskCX3VGF8J9P2VMJdptPmqasK",
  "key37": "NyiKJNrEewbvDesHGtViQTYpRpdYfM1BD2txpgs7wdvdjg7tvy9tVscxSh9JCMSzeucDg3GFjmQPe3yL3rH7RLc",
  "key38": "53mBtbUAQMUdrVodqsYPxpWTnnX4TpMXdf4f1Eeqf8LJAYCGrexZdNi1ZESPmEWxRHGCDPXuRh31iGDox4NfCw7d"
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
