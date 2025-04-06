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
    "4miqM8qEaWcQNwZbeGGZR8XEEzeBX9gtEfdozo3e6xT7QAqQoYjNXqaToudzQ6GkzcdvN9GPRDRisd5rWH33UD4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2emcHPuVz8pP8MBuLZeCYiZixeXvSQPpE2fZD9u6edBbQoXTah3YcxPPkQbuncNr23DrrCL1xGREZigdUfYgZJm2",
  "key1": "3eeXfjR96i3Ty6gYbLjrawcEMkoJWsJJoLYyDnCrsixMPaa3TXtzMAZitdPtZdFufCYKndvuYVijsnUqQQEmb6oF",
  "key2": "64wZQ4mk8kwxF19eW53ePq3QKFG6YVxperzkDwXiKkVxjHdN6wPbq2J9KBU6KisWqj4jCM96hQqsdKUN4rEDubki",
  "key3": "2c11ZjJ3iSKqK9EQdW2SkXiFenNcr8NRPvtH6C2kba7BxnmMYMusAszhwQRHe5fR3Tk8tKX8HhT8wNLmdEkvUmnu",
  "key4": "5jLSe3SdHETuW8TVgdZ54LxckMs9nRFGYrVNnFAC4DCMeAFgJ1sK3z76kpSPyiiDnp7WMuKuxQk1RfjAYYKqXXSz",
  "key5": "259WeVt9qpkKngYijKMu2jWhQcYCNn7Net6x7jvLZgJAQ3CwudarHtcRVCcNMJQXerAe1Sks5xEKQN3yVC6f2QvN",
  "key6": "xAs1Jhj7f1mfnGjByCrxZRvEDBcMeUimK2TS6CJmMCSYKHEGWTS7thEm9LFG24V16n8LF8VDoJxvmwvmqDGq4h6",
  "key7": "2SgGEASbgDuRkpqK1TUv2cD9aGpBnE2LpeWbY8WusdG2yEwXQvFdNicixGsuwJ7S1nh3JGQ4F7kcBwwt2DVpUmgC",
  "key8": "3zQ6n6LRSduQrHdh1W2oviPdjkGDGFGWu6ycrUyGrMhUiWLcVEBxZLFB7mwkFEvbN8GJd3Sw635rCab4pSc2j5Ji",
  "key9": "SHWgP6iD3KxZjukQRnvYLnzvcbiZYBQgTEjjXdWSJuUo2KG6HmXVPG9wGX4DPLEqKpUB2d7Mbja49zijSrQLjdc",
  "key10": "4KApmsMGTrYYB3rdcoK8ACpbNi5VQ4nagBbGEQNFL5y4ip15Digg62Y5nm8Xi6RQ69oagxY2kZPwyWUiSgQPSnE",
  "key11": "34eGozb1F22dBhqcdcZWAUHjWafbysW5ndU9k7kCrBeXaK7g9ZHSadBxeus5yAwatCVp87cagXgkdRVeZ23uHwDE",
  "key12": "3XqAHfe1pLqr8XEFnsx2aAQAdtrwxpVaLb94YknjrHtjvsCRiHx5u3Ks1mdj5YEWgZesXiJ6KYqKc1fMzAZrjXV6",
  "key13": "MpXRJ9HN5DaRKKxGRELhikqZciRKSAhjvZEjnYyjxq49RCWAzKmhtethKeYuLv6EQuuM8YWvDCcPviD7m1S7y2Y",
  "key14": "2khrCtPBca6D3A2RUfM7H7uLYJwYtBmYpRkDgFVnkR3zjWMUVRiRppQxwR5SRzEFGK2MTARrtcxBwqfu1xJocXf7",
  "key15": "2sQpgLhVfMY4V3Hkoxg3qhT2nxKfLaDPsx1daaEUgnn4SFbv5vHrUhC9UKt8pP5t6saVuTicrdnwqzagduByUcg7",
  "key16": "4nkRwbmqWRe1btzdnoh8x7V3kP3MAePkGGovdxKvBQebxW5tZFjjXsAPECaiNiHiydNnZdbZsuGkuf1kGHTq3Vuk",
  "key17": "fmtcWGNAXCRSdGxA2mPp8cGY3cfBEbRJp3h8tkgJFwD6BvupF7U1m4hwc7DHfVRvmihgHyFELTeLZf2FkcmfSb6",
  "key18": "4ivGnWtbhX24q8ZrrXYEKMr7PoUZHASXeSarZPzAoco522q8hRYATZpnAw68Pz77o27wfic239E6wo1t6CvLGCLa",
  "key19": "2jUUYVJsAQw4KXsoWmd8geGpXJ8q7es9UimwU4MTnTpFAEbCr4TabjoEFszcvXSYb9gUxkn8EJZjhyrUpDFbvCvg",
  "key20": "3KDqKMg9NyqaPSRDK47kbQRTkfcN6VewUmZ7EP3sGMEbD18HxGfKCKc9UnMptm4sMrk3AuHqE59ovCdGsx24mKoJ",
  "key21": "5EFWDqaH4ktjEPLfbujn7z71ViRSE6SUtKVJDoYYuTxfMgb8NndJTReXMAK8GSzt6zpUudgEtTNWeRatcV9KYEui",
  "key22": "4oQxUJEfJA7FBmCqmtv6jVz4uZYNjtXjZf4o4rPaaQ8aouZJb2N5hP8ngJZi6ZVpHdfNVPgngh5Jxw4WNKPzU6RN",
  "key23": "3PUEhEpPGQrPfFeCptwGqnhpskUTrsVxk9v6yJYBAojgcqwiwEfAZ1rrdbv7xnysTxCmYGBvQQbQHPuQR6fEk7ME",
  "key24": "64PESPC3i1bms9oyLDc1Jex2iYJuijBMLooTSiWHPwJgnYSa6RDgMt8ceL1C6tV5pDmSgZJnkKCTSvfyKTzepkRy",
  "key25": "3wXi7DyGmZ7ptuoJRN9mXZo6w5pLfanyvCxu2n1b3VnSu3RRGrqpQtxzg3yD1bAnZSB4EsgaM8CcNHFfMkcrQ1yK",
  "key26": "46byWTrtThFtks8mRBrgXxn1MU32o2qfGAREki3gXXA819LnQVMCfYmfNWqJbnTHMiMNhnAjxoZz25ff7ENnwDX8",
  "key27": "4wBUVjqVMxfLuMJxK6myRpZReWGSjuN3b1tZrBYo54XLah5pEyjK9oQ7WwZVUykBnne4QhVQGpcDoakWr8PNLRAT",
  "key28": "5Cv5EiEFZxexLoYTKrSYK8NAvVDzmmq6mEAZv9194Fpf3ESBMcCUJEBucwj4xtKz4iLyxdRUyJ98Sh727PAAWsNL",
  "key29": "5RXoHCGXNJZrWHMnENGXmBXCSJMK3dqX1oWze7g2AaAWzQ6F1vNWnnwqDCkntnjRxPvLiHwCDTtwdyxEtX6ZZKxS",
  "key30": "3cjRARRY22PcjzYods68HHQBCe9RxMx3EkYwKgMpDkjhjrB8xj5G1xgnr29hbMTLtpD6bX8bnnrYhPD6sui1uZ4j",
  "key31": "3CnVEtzD7TEHkG46mW4oYeNC47BZU3tbm259FDnxabgDRNTq9Pydo26BZ7Z91T7eeKGQXkMf6HZP3ZbyNMEVHVqh",
  "key32": "AXrX91pG7Am8KMfFfbSP5WhJNk1kd1QgcezQR3nzDhgD6EAuA2uzTME5N3rqHvmCiiYj6foMPs9zZLwnivZ8FgK",
  "key33": "pNgg92gxv6q3biQ2KEJqasUWXdFnKc9wa1tMsCV9Lx1YAgywFDsuy3TC5VNexY5d9Lj5yzN9gDuKihBUjaTd5SX",
  "key34": "2F2hRgEwcNxihTAUMvaEBEBEmjhszdRu394y5mE4QUjPWgrajJNJigz7adHXFBS24tKTXYuCSgHEqpmSaFwxHwrr"
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
