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
    "2wreFFxnPFWfAuZdD6B8jhdtnwbqLhtpampDKBxuGPA8bRPv8hPNFuuiB6aPHUaoYJrkWByt9HuUF4RJkeVBaAx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BGtX4B2zTqFjBC9oqfaBPRVRje9avYax4BQxcqSqex7QRvTvgCRVKBLFM3DC1CgokPqn521sggubgfH4uLBP9y4",
  "key1": "5CcQKmUS4TW1bMzNGLURcuGuxY8S8gZACnXCrWgL2zkN4SLTFAMpXg7Ycn3ay494eZtir7F4j41BRMFmLM5cySG8",
  "key2": "48AmeA4bniSqNdzPXYcXvbpff8NySd1awyyrCnoR7zCVAkBndvzi4vmn2w1nkB8YsJZYjVMPAr8vYL4id8W9Qvyr",
  "key3": "4dYYb4BbLEVBMHhJTeUHg5DvUyGCkKDLYFzm5KGrJLWzghCof494qcXig2Qc5LGnb4YaN9yfgVvi4HcPDez4atFa",
  "key4": "4ErbErb8xconPNfwmKUuWrd6Dt3DuYG8YFX92Y4X3hBcxuaNeYhjvioAdbeQ5ZS9gqFBVxtGa746NRLfVbJSTcRG",
  "key5": "5DTogqT2FmDkJ59v2omYQmffzKQCXqo13apjwbipxRPCBzbmeP2MWGVhULNvGNVkqea2c7j8dNNQR5WWtfrGRNpL",
  "key6": "5gyypCNEmsAN9UwYyAjBkrnbNTs59TdQugbDuYixKDKVZzM1a2DfPnFExWJv6Nf13hAWh2TwkSUMKBb6u7oDqx8t",
  "key7": "5NJ8P4hDsS9c2nF1FuLQqChSeUeBJnmF45kWFhVCroUTZCLp5mXkitqkm1N9HeaVP7fjdyu7Ss3GicGnKk7VpCpq",
  "key8": "5iSgVpTmPX8JaR3oLFNJHHqeQCjU8YgsircsdBKiRJMrjzTsS77yuMZz2yU9jkvSeweFTSAW1z7ebaLaFuyZmgrB",
  "key9": "2oMewvj8xTW2YofjdT3SeaXf2RQxb2QUoRWA3kuGv3kbhADocmK1Q2k6Qmf1UPkRkzACnMWHwgAJVEvXPchAtCb3",
  "key10": "52nzs1hQqSQspoqeiXBpturt28ZcAuUGhYQG5MF6eou4smcVb2zFju8t4rei5n1dNLHkY3oTAM79x7QxFKPSi5Bs",
  "key11": "5iq2Li2CXBtsM6mZX3wCgnsdw8Q7TmMnm5dfbZa7Dr6LnAabuqKyhqf3peTbdNb2VpMGrXxptXkuw62LkLuXhs1e",
  "key12": "4qkRU9cboVX5bEDsSo2fidZcz5ARUqPfkJGKLiDXbYKwSM4Eer2npv5hfDh35xNHNCc4vJ125Nz4zKiqncojD6R3",
  "key13": "43XSGGz5y5wfwkxSZLgJc6n8PRN8agkx3UE6kWWz9o35VkRDqpvAEfG9eMApnQgZeZu8fgihRuhaBp9j31LWqUc3",
  "key14": "5udqABE9A1Ja7FMfeYPbf9ZM6pGaUwQzLoB4ikuAe9gKynCFSgnLgWFrFZBRaej3TBTf8sC5tARcXGJqtB5GbtV6",
  "key15": "5Zx9BrUGoZKV3AJ8L2afwZJNNDDSK5dE1KfTQAPq5rH7DhCiicqJ4zCMTzD6iJ46MzXsgrp1QFgvtv78eWAgNz74",
  "key16": "fPgWbSoasXgkgKteqALHW9EEHK7CLxqXQzJt4yYqvoUexMcj9nzDXapxPCe8p6DfbVsTnyoGSmRTvKvTLn7GoRv",
  "key17": "4FHvLtL3KZh4DhjkcRAFMGE1ZAk1JruB7VHM2GxuDj6omoZzoesynhkNM5kd5WFHypkFUT1imK3nm2nqc1N63a4x",
  "key18": "4mfRVtD4ArP4V4MMLYBinmkPUEBceiAE4WkjAm28V8VeMYK1msSpMDUJC1JMCyqcJv2DgDvSb2vpUXRkLbLC8KfL",
  "key19": "4cLBwQNM63HHvRwSvqC5p6k24CEpNJi1ZD5f11FsQxUqtjqpqi5x4CKWG8EJiz4iDHcBzhTKsNAy7GQGAwLkWZSr",
  "key20": "3HcjqbC5VzczwPQAt5QQcwmhgzompYFfNBSYdCx16VyVx6hJi2MhMyCn4gTXki7JY4Hco1kq9v9A28tCnHHj5Kir",
  "key21": "3WvDKvva5cKkz3sr15yoXtiurwrxdZWuuDNY6VJeG3KUHWHU91dkGdSLnAF9EFZdcbwAKVvv1ofh8EVsA6JpMmko",
  "key22": "4c6x9S16Ey1EsvJYuTXym9pShesQGcn93s36dd9jCPibMDaEXyVkTn5Du33ur5o7xeZWELNzxVL1gUCaAABACw7A",
  "key23": "4QNuaHi8F9iceSwUJCP5c4nU2JgkP1jeQuEFUV94TTC9i9giGKcySpZ1hkG2N6xDfepjzzZQbQ4i2u9mEkD2wRaT",
  "key24": "3ReWKid9VTFGzstZXULK8sXsCNaaH9QRfAaczo6g9GvhSax6ePxUNCjcmKkMuAgz1WCnLzWw87KuQEPtw5h8MniG",
  "key25": "5MkKed8R9JaTXT8tvCn6SKyAkpVC2TsrkAWaNGsLTZz6AWyqmVpjgKbEeKU8ZNMh5oytHWp7KZDZgyLaFrhAKnH6",
  "key26": "4Q9a17GnWqBTgR42nBhHkxeq1dyV5zs8d6xFvcz9A7ZzN1PX91fimHCiEabqCCGVNDTpJtnD7zpK3SF168sMkRjb",
  "key27": "59nHwztyo4jhtVa2BSXDNo4EY831tiRujfAZjUaAMAQYvjtkxa52k98eXwuAMsWwvm98PWRKaYZGZCN4cQ1ER7yo",
  "key28": "b65kMvFsWrru4DzuYx8KPFnszQVcMTRdBHeJTyEeRHafwzSqQtAYLxjFkXqJV7gwk8EjsHUAQ4yLfZSonrSmxwW"
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
