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
    "2ipiR6Ro5cLKncfzYZuNpnGzkC54juAGx5GPSrgH63RhkspkP4vpQXZoVR3XszoKK2ABXQRjEA6dmzqGmBTxEQaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CxS8zkZiTLsdhQBjde8ys1vxMyMi98waNukw6xPmYCCzQhHZGBNkrw5LszTrcHijDfrXkfPK2BUeHqvT4XTYJi9",
  "key1": "4YX11RFsUhN7CoMT7hWba4oRNr19sbHVKcGvmsjDgWhsf3e59pEReDqKRwKm3pAksDWNPfWdfz5rqyZVRZjx92xR",
  "key2": "2FDe6bkEm9oN7WuMYG3ftzhNewUaZZSGdYod7iuxmk8x9dW8oUN5AZPBWAPGd3F7yp39gKdDKaWzS66Bh8927u9E",
  "key3": "5t4wjmfbMJpnpkc5KeCm8bqjWXLV4p9R4G5ZD45fo83LehAyciPTT3LizxRPukEtb6ehsWkUdGfsTyTJFoWsPqag",
  "key4": "1yP3ErEaqQRA6VGfHuxGfNay5HkBPByiXwng5hKrVa7MEkqjUGxv1PKYQUkvPTxrDhTWtRryxojuKV3Y79wqztz",
  "key5": "4dKuosbZr2YXgqDbmjLviZD2EhWSSCTGvaxGAmyQwWpYgNsec8YPq27aA6Gysi6DNqhqMzeaUGJeGLD111iQ3fTx",
  "key6": "5DxXB87LRRCjFrKQd3RQ3bGZbjzcoF2KDvYjmjwUiE6i6hyEU7KVVcxKAmpZt4AEhX9NAvBvm9b3P18BvZ6Rg8hU",
  "key7": "3X4iDMiVxbmSQehwrtFinUFj7PgV7mRyKe1nEr4GMamWFK2sRDkrQWSh1kvpc1boWtNWMN1oo5yj2iQTx7k99y9i",
  "key8": "35pHBu5oeyFnrc8LoPtb6dACyckNqWvfGzBMBnjPCTJPHTowX32KffjkiMp5tKr9tm7S48A1a6e4PVqjsh2gamfB",
  "key9": "2USghiAuHiQ55u1Eh4zEAiByj6f71NhHbT3hGQLemGRNPj5zB4w9pQP9MSdSAnm8FgfXKDvNDGHfZU6fnUWKy3v1",
  "key10": "57ERzL8wrcH2P12S1MC32C1urpYgUTJmDHjyDRhmk4NxSJ1M56hUKaMkeos5Q7XGaLEGkWscvQBPyYBGmzMjDFk5",
  "key11": "2NBaPCNua7fkD8NE6UD5MjSEwkdkMRXzwHBn3AY1tA8E2Km3TFqeVEFkrUczchj9KCnFiTg3ZdinQahHa7q5TCAR",
  "key12": "64v6G2sQjhw9VD6xAw7T9tZSSfyzHzhSMrDsWaibPf9apTvDrKApdwKtJhVeAqtC4k1xGcUePTFqw6h87roZVadx",
  "key13": "3hFr3mJifR52dhMNBDg1Ap1QHg7dFr69cPNq6eyTDcfUyAXEFhrboQyqJ7G8WJDQ4VZZFeUW6KjqD4T9T4t6JpQV",
  "key14": "3ymMu6iBQrGjtYhRMVgG7QJHcF97DR9uX6sFQGYJLapiNF6iuo8dyr2oaG7y7wjH9fNievEaSNHobssWKD9ejL6R",
  "key15": "4aYokYHQLr1BFnsHvKxYjxLDp4PomiJQaZC4FQuWFi9e9PZvpxvPMyjCn77mC8k6E6XM2oBCm6WKPc4BPNQCBy4v",
  "key16": "3a1uCyJMkr6EMn1PzmWTGdVk2KjbpEpQUPYn7yHTshX23VQsXtH4oaN2gJPa47xJMxgsy8jyeXFTxY6ZzzQCgqxe",
  "key17": "D67bWbkArzotNt38n2tJSH217kB8pz1Z7koFpWKuthnYytD7ygoa9NmDgpjzGk4pcbSbiDbnhBscB5Uetjgn1tb",
  "key18": "DCWjihmLX9g5MXBXdNVDtq4fymRFjwKhsM4oowCz1HRPdAF35R2QmqVVgq7wiDTAvbxKLbXW5heBN9sudyf4YG4",
  "key19": "3AB3jLLnaUwLYxofgWJNJx88QMN32eFHcGzVvrpA3kJP4Cp8hRpHzdZBAV3bajKMtnCts599jhVdnurbjEAnCPGF",
  "key20": "3Rz3hqMjokzTNhPi6rrj98EriqPeehdB6M5d7FFzSToaQa4CPMyJTm2r81pBWG87mKxwAjhRkFfGkpEqu8pdVjrG",
  "key21": "35NKxua8WXkHSy4UEeSHoWUsWh5rBnMV9rYA35eXBSKZYUfPMjXTsWqegUaGUwY4LMXpkPCcMRxgbb7jiEzFF7Nt",
  "key22": "2BcG7KbWyVKi6b6wVSAyE9knw6YUbeftQwPq2815cqVj4YEkLNyu1df7HcbbWpWgo3PK87v4sRwLqAdthRYZLWH4",
  "key23": "28wCxJZuq6hZM2NemdJKm5tchiH7zBnhiGrmZ9FaUc9e72sDgj3Nw1btr1MJpXDkZvPELM1TDZD52KHM1PQi8ga2",
  "key24": "4HKAbfZz5qG8A1EjmhsSprAd3r5BU3fuFfXz5iWhGWr8Dxrgoq9zsqWQ2ZBqe4iiBgMC555cL4RnAVMZhj7cWbjE",
  "key25": "5Ledoi2SK9MpLrjVtcHkZW6auDMLeKm7ZBPZLVSrcLhLi86SpWGducPPhH3393UX6c8xAoozxYKux1zNsi2zJ39q",
  "key26": "4pGMMmc3Row8QT5h2Qni7aUdLAgcXuY7YDDnoHdcmopdWgQBxc1wsgqVcy1YhjuemJDAmPZWHYubQYQd2wJpX3Wq",
  "key27": "toNLnmqnpzDmn9s2HcFERk5cShwzGuTvkvUkJYj91DqdFCTaamStsod2uqVcZ1qj5PDXbwZxTRhN8QmRpQsvLXH",
  "key28": "AEViP1bGhFDQZqsfHy9WGnkVMYThrQ6u7p7i5bjNXpdiZ6ivqZjM19frozyzcnbaYLhhhcboBmdnE2vxNVUnTke",
  "key29": "5v4xfhPdPtWHH7HMYdU52gPknHTpcgdKPhh5u6x5hTPGFLFtbyWbPgLFdch6mh8EHMPih7swNqUT7d3XLWjQ2BxY",
  "key30": "64wgniDXraKnJV4pb6jRD8iPJuukiLDurh829bcBDydx4JGvKxzMrqQ6EX6Pkpcd5SmjotVtw7qLvPig4XW1Mqk9",
  "key31": "mV5fAqtZFvNYEUSBbaMyhm6PAz6MFQz3tMVxEEjwqEwX5ZETE9inN7RWAdr8mj53tU64jCz1iVtdLxSDhE6NST7",
  "key32": "3Cso86jdUkbE9rg3vuVVKsp2MHw46Bex3EmUHKoN9hBw4DfJ6FPersCR7he3hrGbaZwGZci3GVv15JX6VCu6TXdQ",
  "key33": "QYXiXx6yge4cp4Ksu9GbnQ8j3qyBfKCdeDK1inZ7RLA3oUYdq8emvSYsjnA8nA6bRZiXuUZYavbbQSEZrb2oPWK",
  "key34": "QgByzsZMJPx3jG3sW65qpFC6wnWryt4LX9wQTruVnj6rUshwDLenRzByFF6RjxRiTbu4ic5kvedfm3ywvbVpVYj",
  "key35": "nSEdAz5M1BN3EYeNcAuUauxDKU37HQGrH6L5k4p1EaLNwV4bWn67Y8VopxiyuAnUBRTEmv3L6VdBN2rZzSzFNJ2",
  "key36": "4pj8oSFAXyM16BWqYk94o6APikYLq5FMFYndptDQehULeFu6BQmhsy6CrHEVHn1RMiR1Fn49CHY6f3VyE5NV2VJB",
  "key37": "3caDG1v1y8sq5AUu45GiCmQ642P9zhndLeJ3micmNmYZtJzcBhL3Yv9PeWChXVGdeTFjV9REucvY5cAc3YRykJhB",
  "key38": "4A3cH9xJKQm4EdjwniDAi611qZLhW1CrQzmrJwk7u8aT5nsXk5FrvhBWqVNuvEypvRJZCVWfHaRiff4b5edmPEnH",
  "key39": "RaEB5NeeiJ2LEMPNkj6mYnu7wQPsdeBuN4fKhoVG7UEn7Kgxkuf6CnvZ5zB9kcEbDT1UsMtSZoffWvdiiLKGhif",
  "key40": "4xHgyB8r9njKwNpY9Yb5pFPVeFJ8U8t88RP2ockE21NJG3cmdKbHiqCjLpkkt3voBRs41zTS2ji6mzBinCPKrT9h"
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
