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
    "yvMeYJ8U46uHp4W8qZSKw9KBkvbBquRfL7eunUmEvduDeGerQDNN3WBHBiHBJrpLbvM4moyHPwfhWnZ4iK3HQt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46X3Lvbvm1RBVYGmj4hDVTgpSydEEdMPdpRrD6CJUpJgggxa1mNwLGQg7SFEihnHwZWVqxcsMQaJqdmZpPRB5zHx",
  "key1": "4b3BGb58joG7BP4seFmvE9rA3eNBjs9nT6LXGpyt6nc6Yk9RmhYaCFJS8iGbRhSHK9qzz5hrWwESvQVLPvKv1dC2",
  "key2": "7WeaUBNDvnGiAN3uGTBsPeh66PsBMRzqLy3oU7uTaXMosT2Q7EzUvKgkWpWznLEHFGXWPRFBspXRTwxjP95DfDt",
  "key3": "4qZDoQ2sosKPRMkLfFmHay8gHXqmn1p2GcA7ABWB5cifCQWbbjjjE5H1KUiKtduLEe8Vqp8arwqxo71FYcf3Fh3o",
  "key4": "2TTEWFGGHjQgFEZQKQnCHqRsivs1itFQ3X9CEFsd7iJsNnuaU19kvs41pKXwyqhqT6Yy9CoQ9b7GAEJ6CHfBEguE",
  "key5": "5w4gLgTUYYvd8d8JxHY6c7R3dRDhYpmJWCQc2trbm5AHdewrqzZhYhxEGWgbxqF9BVjfFAkqhNuGQGv3kPy5CsyT",
  "key6": "r26Z1dfyDWkv5i6xiGFyd7Z13ZnYyPotoTGm4d5Vkcgqsk3v3Usdx9ZScD4pFkuNcNRBumvbQtEkfraR2jYJkHE",
  "key7": "63Wk4speQJAsMDnEW2vYMa87Z8eLZLMvY9vhraK5ANk5EUm9u4i7zUKFWHrj5Ratm3UFazASinEzd5hxfZAHj7bT",
  "key8": "goeX7L3JaehoTtYyvs6D79DHVwkg2i9UvXrPNVbyfWdJEv9q4EZvoqFRYiyPS2XwFzbwt6zgyJddGFYJU9M9ePb",
  "key9": "3q3CgRwzgnpAmrxFfZogCNf8BHbp1pPLQ5WeqZ9dKGXk3PmpJE3v4gCwJEVH4Rz3xjspPRu31twRC7YfqxjPVgBZ",
  "key10": "MDUhHj3s6mMUJx6xoMMPXVMmcs9VX7TM5etrcXkoR5yTDZgfj8wL1UNjjzdKZ7ESUgVhsZRHeXMpnvGM9y4ddnX",
  "key11": "2874ZPgpFWuys3Vz2eaL5EQnUzvwKXaD9PpzEsnCRxF7xDdTHqUobapyeGQtFQ9XVHq9kSBu1LUrKAqDQsG8axYj",
  "key12": "62DYDPAz17HMZbaFZGMEKrRVr9qw9biHh8DjyuAayXwmkZ9Qo9xyWyWwKpErhz1fuMHXojM5Pkq5Yw5Ji7GEfKiX",
  "key13": "5cudnDVSVg4WLfYFedaB5RGk1YAXU9qaZHf65m6ogNsZvoZyJJhq2C56VRAokeUAR3qo7frZ5z2iiyzxyW65xPmv",
  "key14": "5qiFUy1cVm5tT7g4AYvHeKBRWCZzXG1KHzKZm2r6MLdnhpukzkPAZMxA9gzUeSayexUGrpZBbcYGkhQ16EsX1gPP",
  "key15": "AYYFmPWfWjb6UxBfEzjRD7s3seAnPnD2aJPe16uxkaikjiwhx2JcGGsXmfi3qzjh1YRgwcW4zu6tDHoazRkkBB8",
  "key16": "2JCqDEHMQLfhxLJotvrzr4vLsx4sKpzC9J5rohQUQfQSjkVYipLcAUdt37Q4EVQKBfFiEyZts2kBZjHHt3KiRyFu",
  "key17": "55M1FhkiKwrEyQrpAw8ZmEos6eDGUu4EKWFGM2yUkYtnvoza9xAkW1oRL1jgAHdAvp7YX5XrRA7KZU5zpvEqHVfW",
  "key18": "4DssdLkcQ4jgtr9P3UT89fqMJKTfVQ3BksYSp9Gwhn2Qzc9xcGA3SUBRPoCGLGtE5wjwVKp1bES2CnuQZYfpXJhA",
  "key19": "52sPUfMghn1sGqGtBJY8Lz9KUxNP3J4GaoiJ7g7kfrxopcJneoB1QfqxF5DDnC6joH7FYLLYc6gHx3w6qBQLHK8e",
  "key20": "2yERGujJMR247qXGBszzUHhCy9ARSKvgj7LDgZk5uSbcag7eRR5cYhSoZbtwsJs6sXR5airrAXMWYi93u2JGHPLL",
  "key21": "2dznVz9w4eiNshGQrjjkSwFJGey6a7GKxoChBCMJRng5AoVB23Dk2BxmNXQTE9k12So9z8tsyFXc3PHveoRV7Urs",
  "key22": "3F8Novr6F28SJxkfCV76mQnCH3AgWP47xstYfhQApFUZUH6hWD6beewDX9hpehSzRjSeEACtsLi8U9bUr5YTZDuX",
  "key23": "2Le9i3YwhvE1oWpK7QEGEmSr9bWgLaVTrapUtECLetxpopF36mXquc5a9JHdwdhhjvi67Y2tjDpMFZLWm38tXcoG",
  "key24": "4JYs9yPNDBSjck1JAgeqieJJkKbWPaz5krC4veqAm6aKHRRpU8LTFTRycpMdce5xH8i8FSRSbE5tj3CysCEEzaqN",
  "key25": "4oXnX6ZgZ3vRdyHAUXLAfuDnkTKgdM6NrDFVWZdJG52yjCZidoVVMGHpH1gpC8WE45S1CeMqwzGGcfhESzuWLfDa",
  "key26": "2oZpo9saEjL4S8ewcjC9s7WTscfktwCXZF4TMKHvjpbo65U4dFzCemB6Kurbk1BiMrM6NqTTzjLSUqrpg6fdcMKu",
  "key27": "4DaePrkQFmAreUwWNBfwN562jEGXBLbbvPhtcoBTq5snqP3Ww4pTzsdSzrVpaj3K7mGkobBQGQQgiJwzrYCXfXTp",
  "key28": "2MZop5No3fMMgWYGY8VcjYBB5WNnmnMqUUzbqUvwUwcCR7di5kdXrvSRiZsfBG7QBXZuRQGXN4rHqude7szZZzoA",
  "key29": "3pLNxGKGTJfEChLHB5i9hoowhWu6JraB2Xt7YufJExWoXCfRrgUzDP6AvsVgHugUXXYNr8RSq5enyLPDGPzeLAmz",
  "key30": "2pfga1CNi3Gznz87GmR7KNXz52GZnrzDAqBiuidfLyGN8Dhim9NabdCBLuGEztLhq8N7TknMiS8TLXHp1judU1hk",
  "key31": "5qsLHuNBzrLjAhArG6NvT3KKgo5JXvJ1eh4uHpqtNGU91z5c1G3ZoLKoY9DYDnSxqNfSnnDoHWyr1dS7EpekkQFb",
  "key32": "37X1Cybmh5gqJkJTd5vCC6zesKayu5VPCQhvcoUzkYW2tYThtPYGa25gQdcX4dvobkCemFqcZ5J4xxaSj2PZdmZY",
  "key33": "5CnmmxTD8ytVFVpfU3jKwbB8Un6JJW9hdjqLNJR8ERUZLshzNRDMD5WjdmbASdbX3bBcB58HpVL5jmw7d1HLZhx1",
  "key34": "489WnibbJ66SRFhuBg8LSuSvjKpb5j9GEperzDrk4eUkXfMBQNJdo9zyALonaPCrPZg3qYbapEy4uxLyG51c7nS",
  "key35": "3XziRZ3WgpwTVEwiXLHtEQ1j1kdf9c4TH1uN3cpeKM1KGZWpXXCj8ouit4iwyAKpEGgbQH8eCMpiTFbpeJF85KKN",
  "key36": "2k2JTFYBMJM3AUTRxGm9rhApHSPmRovnph46bguQStbEBXiC9wACiSgMEV6bKSe6zmgeT84qUPBPLAkmhbyBGb1w",
  "key37": "m27DTNmnZhE28QGNiR7yzzpLoGL8Hot3W6KAcPAKS1ydepGkjehUSYNJvzD78XE737dGjA1eWx4vxcPvnh9poDo",
  "key38": "D89HZsZvZq9DBSVTk9VhRdwrwhZ1c4A6MAfvoTbFbSZynbGgc43ck6rVFR9WPaqThXU5vajr7zqrXtEtVELSwGo"
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
