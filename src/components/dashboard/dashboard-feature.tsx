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
    "DCzkxhxvk7YyFtGtSaG8oSdNDK7DGryJJYtjbdNqGS8v5DJo5dyCExAHRCnfQS9ncDtrsEo63sQmLjAFKkqSETF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VepURT2yhhvAMcuJEKkmrYbrngiV85zvNNvk9LLFBbSwFoCP5KriqUNZsDJrtZEeCXdynaaSDQHFBrXaBRDYaYg",
  "key1": "2N67ZtyydJqZSTweAPXRSAwwbRRVE4d8ogKKGUSqbQoayhbwXEJtVsP7fqeKT4ikQ8oNV41wm2StvEpbkNJFTq3V",
  "key2": "A757rYdgPKcQx8QMvabiE7mC3bx8UT7kMyi6syWQZGCeFiCgc6ZeogCXLVUCW1KbEdEUAuEzeussv6sqTLjMRe1",
  "key3": "2SCf2aWR2XHVq7uep8u4Nsh29QH4UCSEYB7cnWs38dCVNnERU89uWoecUd6YafwRMypsSAyHmBKGbiWkRdSmiN8W",
  "key4": "4XvmXGTxpNRq1nHbMVs8ffqrBJDfd1Jnjp6iieNhtK5SXjyorNJXu7nqjhuwVfBL4uhBKKD59NYAyi6gaDDk4bvR",
  "key5": "4p1NhzRHJ34qaNPQfVjSfEHHKBmNoYZ6dTbfaA2jeNRppcbQGjtBnAdu2vsvQ4gyRTxUK7VG9bEmJn1BYF4y6x7z",
  "key6": "4q4V55EduR1tzGUdEXyzLxCWJMRfBvE6tu6QNUgSHfDbxD6S9vJKWyWxvbMR7ka1Gx5bg5RyMuLztRoUaCPLYxnW",
  "key7": "65Dr6evsQXxmU1JCpVi6HZnAWau7z9Q4ARvKgx33s9brSjqRj8BhbUzjrMvt6co694t7UiyzbDJRayGKw6gsYtfj",
  "key8": "5BE2WVhduFdVs7z6JTkdWeXK8jdZZN4enNDgt3B3nc6xs2EF2BkZAY3m5J6V492E4JQxeTsgnDDF472MgBTg2i1n",
  "key9": "3ZRoNXCTaVLVUtuYWu9fD6SrhZzfmULBYi15bftQUE1eRYk7quSLU7XzHnPbDP8ZxhzcjBnM5J3zdRpC6gDaGVC",
  "key10": "5wKXnf59DRLifRnLnrCR9ozsYHBpWGqsB3dVXhf2bQAesqjXXbD2oMtdJzxfbbGXFcL2o1UYosDcWe1S4RALxqPs",
  "key11": "3D4YTxBBPC53VdaSNQUTBfu3fp8epdC2wC4APwiTfTznStKcGoKRxuRH7PAGdU34AgMb7YkdGHqKcBcCE8yfc2Uh",
  "key12": "2FdR2Qhvf5RvqJF5d96XUCnNRdbzrVRUFqxSVq2H8g5ECWxrQGYdbeAFpgQ1ESX7a1MhUWNvJzgoL2nLRSpy6Hea",
  "key13": "4WKVNkT8nur3bUfoows6bGJz7oqm5bU8QC9Ddt4ZjyPNK8tLVPA4oPKDJeALjM3kTVgDLWGS7NX3Q7AWaBFa1LCM",
  "key14": "26cbKiuRvo8X1rt2NQSeX7vEMoUJYDQiKkTCxUANH89umwRPXEpDdjiiXAFm4mGtHNgzL3kT178XQr8kPuTRtVAp",
  "key15": "4xhTzw41DsvAvsYyo2N3Vm9hY4Fwx3vMRKV6V7rWwV2JPV8sShMWWm8A74BhaE8cpDEWTx8f3CiE3fLAttXEKGkK",
  "key16": "3A8xd2zn8Q8MxeBr9YTEq9KFRFXtoVvKnvAYqJVddfWjZC92mBbYqN65WZsiHy8HCansqXKtujHNe8VtBt8swDHb",
  "key17": "5gxoQ3jzPN1MJ4MneyDisppVXPtnESYbs3Y7D3gCKeB2cFcftN17tjEhmVGQ6HH78ckpk3vtEFLjbgMvg2HsR33B",
  "key18": "29ZkxtGwTkKuCFBrmjxiLyHvdgoN1pS31UXVTcje8CpjNwvdccmJciD4ynEZWjjTzSZu2NrLo1mRNqZJtAWLh912",
  "key19": "5q1LK7Xe9woPu2tXXZNvY9KdP8g2JUEB47U1vs1Qc7jAPdYsXK5KxxJwnxkRjxyH7THgHqYv2y91dbEib7VLdwcT",
  "key20": "5SjL1Jzh2pim87js9viNFostKpCuuQyLv2fzyDr38V2ReYEP6H33gTbytpG6aLNCEL1L2mecPQEJxBBBy4VGWGWy",
  "key21": "3NZPoRfvgrzwz6kGcqBFKAD6sot2UYF33XLk3AYhmhcDDKbTACxxochY5CgKriiwKW49F3jzPVcCt18n7enBZomt",
  "key22": "QVUo5d9EyGWFgczGtpniA7nFMxy72evZ2qjkge3WuDcj5zhETotgWMZhyVfpZULF9FLBB3EPbRumTo9AP4kt8kk",
  "key23": "3BNegc6hLqBiMgmUTdk8MjyexnjwfxQxkrx9CQCfVwPXTxK5mnA3AcxVSKv5XuWYyLoSZ1wTanMfQG2TqgoFVeBe",
  "key24": "3Z4rgoFiGyQHw1aPCMxYL1mSKFX3Kb8w8iCDBS5vEhjQet9wMLtq9aBJfcqX4fXJTepsvw1Qe7fgYsJqfBAFuUps",
  "key25": "56bNvVswP9eLVLksQjYHpC3JtoJ5krZjefJSLtEWXaYZ5WKBZe4iVXJbeYgLJ27qx3uonbLxexv3bDEU4SHV3iiD",
  "key26": "3RHbNV8TTQwPDgWVCnjSas7kw95s3SyJXvjhCmmvs5fHpDwfToU2hUB4gWcXDsTCc2dQL3xkvFyGTiub3Zs1CggH",
  "key27": "3AtchPjssAJZMSH9eApZCEkMoZwFsXxr8jvb6EhMyFMRQYKqNbsaTGF1fVsjEZzCNbJ5sjrqmW4NystT5eap2d9i"
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
