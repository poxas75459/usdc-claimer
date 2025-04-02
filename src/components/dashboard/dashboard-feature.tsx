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
    "SvyrRownDudFfFfTA7ERmxLdqnjTQPtXNSgt8H18WCg93DxvUEfYtjMqLScPZdLo11fxhMPwa1RiDsb21erEqkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Maani2vajbmdEJehFEDsYXhJqAfgS4XCWwWchmzShGMfqAP8FzNxH9d8AphW6Akvs77i6c1wYVJUVMKZKSkba4r",
  "key1": "5rieKZreBUqQQBX8osdEJrtbmbBCf4eZP2MTdRsNm3PqJvyrBp4vm4zUNJ9nifDUZVsXKUVXmgzYeAfeC4VqvUY2",
  "key2": "65UqNUB5o3XPnkJ6aVnrp3pWdgGfA1W7de9z3S7L8HuoZhTcdyqJKz9eADJLX7f7FXGau7Gytf3y1kGe9KZiCfso",
  "key3": "97axNtK2HFCXPjxc6cgpLgcnjhXb3XtTYMJzbhCP2eFQcWWh6oRGfRx8zKCoPETufRtESgFUnYLvreBAXyTc9mf",
  "key4": "EWKPrTaLarmAEZdZyehEZeJLgo9NbHsUkXwma4WDh8Xk9QSLg9ZyVquVpUUgp2qA1fv7aridXr3eQqnaLFc4DUk",
  "key5": "26dJEmk3rHqHNdhiL7vh4efvQaNqr6kkSqRQdihfpoAM6SXQhjUwtScFASRYVDYZkzgqrxUqUwHSfEfYByV1cDHN",
  "key6": "3TYscSjPKJm5RTSVS5iMZukcoQQYFpLxnTwU15VbphkkypGMdEXVWkmYqw29BKRpHUFkrBd5ZgJ2giKRKDjZt3Aq",
  "key7": "NrKN7H1Lz5cPspgy15izsYCjNKtv7dm4a8XrKmq3UzokDsmEDJmGRwFG96VVuxLfQ64wDiDXYqRyaynXKULE9CE",
  "key8": "45g5bw72beY9KThHbYfQgDrAZXSUDVAAV6kKMa2N3pLJsQcDPJF61CtNw8ACH5NzeVuCBzibRwmmQkWvi4JekhqS",
  "key9": "4crHkSaYVkwhNnua4JHLwP6eZq1eJLnkcuRyDTpe9CwvmkhcQGipRMJEn7keyFTPrhshovd6zbgTfz8sbkD5mac",
  "key10": "2L3SER33bmqfZMtuTwH8bMmTz7QJ3PeT3Eb4KnBb56by239sGMsD4FV1WpPTrV2j1VR43qY5kYD5ETXT6vueD9Hh",
  "key11": "5DbqKKhFAEvQX3nGm8s5pQzRX8LwF6LBvtraccHucvRx9oExkix8ceEVJuhTHc4kPNnLSYHpgnf6CZE8LEfDY3im",
  "key12": "3dYsNp5RPaiMyuCA1gCAzK8pXNnf9LUFczZTR5xGhie4xggzj2GsuaaeZwGJPfv7gmwumDZeB2GsCxwaASHfjF7K",
  "key13": "5hTu9UoFsP5ACGDCEqMuFL9NVfstm5eJAaUayXLXPqKAQAWFngBPgv7mn4KibtSDyse19o2Yx1byANEcVzVbqFxU",
  "key14": "3YJUcy4h7YXiYvkEvjJHuy3QLfceBKpe4GEuVjtGjDNEYP3mLGdTEDvn3QPWWi9ehWN7rvbJu4bLPf79BNpeG6J4",
  "key15": "4o42DMFp5P8zhPSa92aCGhPbLckirFEwLfY5npi9jxAzZDWinpdWnRA5Cs8HpkFdxg6oJ7kmxvtK8SCZNRDJnyo8",
  "key16": "2P9r9F88gbmSDooXNMqDyuzmtHgSjB6SHRqKYAS5wi3NJcUTH3eBPQy3dg4CSVfJUBLieTuVdZs3oWGeV6URtzmm",
  "key17": "61JUoasxkysUXzquvWVMihHcruewc1ieGGTpsLasR5vNbgTQFb2EDK594mRTUz8AjPpG4V8h6ajq6SvenTj1VmWL",
  "key18": "3cTy7icc3aeUsF9TRJ5xX96VRVmNMb6BMJvTFzY4KktnWAZpFU7F7R7Aq7GNWzUkqjVoXMYVY8dAvdMHiBu8aTLp",
  "key19": "8F65kytqbPijLAVYQAzP6gCZGD3gUu7xYH8G9Umgkbb67Rx317sHzkYbjPzmQJbRTzjyRhV5Mzz4K9KVcTe8HnS",
  "key20": "3WyfK6Yj8pHhvcF7xD71NUjKDxxrK8sFTy2uc5krhtGYSTLDvQstibdv7s4qYtjxmFmCMwRDELH5uRkVTTTBwWR4",
  "key21": "hCDpdHX1gMy2AUkfnk2NG6SXwLaDMzcib74BWnKu3V6Dwyi2R6vyPzFDhoMGB1hEtL4xT8G6KfPGL4J6tbFMxqP",
  "key22": "1FY58SYMot76nXRyP4UjB8zGfU6wn8gj45odbSCbQhyCVZy7eeQU44ETZnWbc1dKYeBDEBjqeQe6kHQ7Y7LGAF3",
  "key23": "45ihdwHhv7cAm5D67YiPZJZQXCeo6SvgKzk8diAr8gwTmkatARX6HH7s7fu93d4pgy2c7HNP9cX7eabk6jT55qme",
  "key24": "7hSd4CMG6jihCeC4Qjvz1YRtDnscrJQ7t3khri68NnFF3Lk8hpRPphPH9hNfPGmdzNqTYXc8y5xnqowoNZ8Jiki",
  "key25": "2N63hVijeTQyG2ctrscDHBLVdUfvmtGJ1HBZx4HYwoAKu2TUkUnUxy4WgDFdcaMFa1LLRazmZwoNrMdtu2dmwaH",
  "key26": "5RFiJec756opmKpdE8feB8Sho4wEYxRxycXuP54pN7dQ7dPpVDaKxvHdRWX8BeJEMSX5zUCXCX4sQcTmAgDT97AG",
  "key27": "4XnRfHbWooSP4hdMyPB3CvU1ETj4iebrQPjKEfp3aHBWobnTjeZah44H3aZsxVB3Yhq9BPheLK9cGv12FPGgMZ4v",
  "key28": "4ryjQsZiFN2qmHbVhASebMqeacE1sGF9ZTaXvwCByqYjsyHTeqGKrdfDLWDHkWFBt7SEan7vK8yddo8mzLzrH5tR",
  "key29": "35ZR6CuiQ3oqJmy9vg8aMwAYHoenBRjsSprWCDd6PXmc2NfcHuRfPHjbCrsVETTeztpu6WdPMMwd7BSJ9jfrMfWB",
  "key30": "5699FUTkmxzcDLfWPS7romsR3Fe8UiRi5pgUfVkGRjGPoALf3uyrm3ac1QqMXxHXTNCkip4VGTL8dx9vdfaixBHQ",
  "key31": "2Cdr4SN8pptGzgawJT1Xd8yfu9dcTLwZ5Ab7Aw9r1NcDeNyZ7XffZ6zAXXpWVrswHKA2nNm9diYPFbXBuWnouGEE",
  "key32": "4JYoak3tLN19JFGhm7KCyfe2ZrsANBGWeNiMMXnMJUufSdDqjyZ6VLBRQbJrXuT1Hopm8C958yLrdDegRK7thZ1u",
  "key33": "2LJse2pd8G6sDEAiUrwwDewMUHij622Y58J4sttcJLmPGN7ed3Sxmf7Mi3rMEGVB8wYFySKNHUbT53rJd77PRVMS",
  "key34": "4gFSQHHMygf4MiVo7F47iqPw9VukhW4T5RmhYWddNuL7i1dVyzsbMFxDNy6ZbuRFJxsrp57uNogmVvFLPi7qWCRq",
  "key35": "4JuFTQ8fA6yN6Lw1zKMimLE8Q2pYtawcSTNeGT8y2KmW5p4x1i4nGNo7KCwULAfueZnkorkUXTMjEjyDPqkdZUHB",
  "key36": "3VxmmRkUooVDN7wwCd58WH6D2c3Ut2xZsDuP12csxr4e2wWnKZSiqQ1HexbtLT2v7R7iBDqgzUtgB3JoBszQ7HaB",
  "key37": "5zhwUMDMFvdrYuy3Cbu8pEgPPRCXbr8YyqxawtMCsxtaiTw3sUJqPTmwiwB9C44Ssg8oZVhVcg8Vcft7cW2jZPZj"
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
