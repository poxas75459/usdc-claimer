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
    "3wf9ziKwYfBxia9SGBTBz4ut9hm1Q8YzHNVCRtkZPPHkrAbi3147jdM2Ntdtj8uXNEpRkjCMPNFK7WSJkXrnbcao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dnSSpPShVK46azbt2Vp1xX2ikGTKaBxpKuzoSuYUgvPyFpjYiig1rH8BWGBvN4cVphD7WZ8Jp6YCMquHzskmssG",
  "key1": "2efQPwoBNk9ViFWkGjcZxmX3hfRukkVNxSfCaDqiQN5XDCwhigt1PVcvRzDNcaw8akgKKa63QRY9zHojF9YZC5Xc",
  "key2": "3eAPUfY6BsKkUEH9PMaq1RF296M4amj2qzejef1DKAVspYRvfgizd75E8UctU8KVT7yAbNtSftRsouz7ic16BLHw",
  "key3": "45AG6eEVmoX3oyEMNM4vs6v9bQq4Se4emuadcbzGCKH3MRaCtYVU6tTk3ctosBaABimFEYYWZHTpGA8GUw3EAToL",
  "key4": "5ogByEct99gtJ8WAJ5BX13rsojwskMMVvayd1JBFtu8FzjLLyGZnJtXRji4enpG35QRe1aWybzCo7uJ42cgxHGKp",
  "key5": "24ZLyLfrDrJjBzA59JLc3xNFgSW2VucHcWZsrHp8fH2bndsEkQPTReGZb6RrYmHwyWjkDVr95MremSg5r6r54F81",
  "key6": "352UbwJWJksLWwCtwFUC4i446WsyzXvpa3n7epxnf3KcAkVvfXBLCBhBrBzPvvEBupj5rHpvbcC595XZQwi56UXr",
  "key7": "5rBQqdzNcidBw4SpcgFWA6A4qHtfuQSL2CmyBZzTZBqktMA4pGkiww6mZEpXrTTyRW9gXFViVSWjxTEuPxLkS9BN",
  "key8": "65n8gMnu7c1DPdnvfJG6RyWUzVw4YdDrLwcGckxtWgZUMUq7LCo3tGkFFe4WCrbJMWgMfQRz4BPjzUEeKXxtsB51",
  "key9": "2VbHMkr5aDRSmFSWKU2ey3EnzBsBwyUUfg3iyRsqUvmuBLmyRPCQzwTtQ6KYuMfWas6QXB7atWhQNGd5k8EXs6oj",
  "key10": "2Y82f2sxdxWuvCA2sPnkwCBa9BQHyEQ5cf9X8m1jr1JUDF4aWJQAZMzFnEXEj7gKtaKnQRKt1xArXWKtaQqvmZpJ",
  "key11": "5LrNkL5z616fC3EHht7uKZoff5YeYuLPZ5ZLTAb6CUJTTyCoGGerEpUHvD5UgacbRtq29cV9U4Ft6Wr3aEzMU2BE",
  "key12": "2QskA6CZFe5EqvBqmK9oFGm7o1rMTt8UpGsVCDGjTEUpSXiaMYecDvqMWMkP95wG3FTn1nmgoZSnopiCQ48LT6P2",
  "key13": "66ouWigWmmrQGNc8RxCvDQRXmy3TzFZTgtrcaHSYBVjwrQ451WX1V6jLAbDVbivARc4LDKPezZ4cAERQsi1XHVFt",
  "key14": "2mNo6j9UAsEoZpqCSXztDUw6uWL6U9kcMQiMPMHNxEfky2cWA1W472mSYcj3MVWwpVsHvKDS87rDUvkGwfb8gWYP",
  "key15": "2sPSbphvzYgzqVkvqTwHwos792JBiYvXKNSujepeVBvS8sNrRnhM85MYHhsSvidJCNdShcmJGERc1yrkk9CHdeef",
  "key16": "7eqvUzZSJEQGAFqxJHf2h4ZmjwL6dDEiNx2M39Yx3jn6hwmqezxjTQyL8iMAGB1japbVsbozwcBAi8AN4Py47qy",
  "key17": "3yF9brkkmVgkQtrLPEvqUe7BRLRkut23FenojKxwyTATpJpskhtWgfv9c4RpPUVA8uhAApah1RNK8WdNx3dGmzGv",
  "key18": "5Qytk3ar5yn3wrwXHxYdNh2ynuQDFhiGwUGpvhEJr1xrsH3K2dria7pLobZMYkXffVUmfZyrL5gCHYTAtZ5F9YqB",
  "key19": "3YmcCMYBGNrwgjYD4gDYTQhq3skVY53P6x4hc6FXNBzHEpWgAZymiDDXKokMxi1DXAEuCTLUh9uYCffXWJyaaTSb",
  "key20": "5kkEc6GAiLj5RDgAtvWNdPeZbXwbFGZfBCd7ykBwBBpXRcZfUrjTnMc8GhJpJr9jfHCzZVEtWSupJxeYAAGeTbTc",
  "key21": "heL6kpgQXoKhaV9NQS2P3xsMACBNbrSUW2aySHvdWupNrM5f2Zw6ULzhAHm5Bz3DbUHv56STjDrcez76UXtDQbT",
  "key22": "2mr5DC6nN3RqU7WNMCx7g75iGK5mquhbdtpsqonqHA4XpMyzLDUX494KXrz8KvfDDTGwstw25KUS9GhCWJngR5ju",
  "key23": "3VoGqCDhLEWbfFgD8H38BDWmeTjucYbE31zJn8Bv13CTDV5yBuaF9wm4Qn6LVWCLUrHUG3YNYw2pZrcjYPwscx5S",
  "key24": "2F3sEFXvko8V3Ewzdwv7M2MKj5sCUDjJYYEFD7QiyRmo9thbNxezEpkDKKBZVRbeXyEDfB3hmtyLWfgDBvR9HbJr",
  "key25": "5H2saCmh36ASRFgZyetoims8nVT31wDhAefD6Q1Va7J45pnoZxkQXCiwHkpfbHiiC36PBYR7pcPYy24nY8m91PGZ",
  "key26": "4kKa6WYuYRynKHe4LLWGMs697gqNvcU4HxHAN743iCaP4NRU3bS1ZcSDm1W9WTCczNu4kLDRVvmS7FG79GjDBDZc",
  "key27": "3aErKsPuQZLnfUqA8KHu9UQvRAxjEz2KWHKfZvkaC1zKG51iZt8cecyWjKzEtuQr3Ljj7zUsU7UPhSRFdBrkzMhk"
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
