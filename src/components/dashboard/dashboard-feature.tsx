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
    "KkoVuP5XHSJRGxgUiQm3qsb1sS3F6p5erUxkT61uPsa3FxA4dTwBiz5tZuCPBz9o3upug9CZBwhPHEJGrrPuHzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bMG7U2y6nHpz2ZGh5DDRT98czWpdXjhP38QQGxRg2eGozwxA3EDaUDcj8PAEJ4a5Z9ciZV85LLqNba5fww4dypp",
  "key1": "4vBKo6jSgcaLvafpp6YuVvESETM49EUYvv6ix1Z2JJr5FC5UfBND5moBPatQrFsyM1PvNroP2eJgnNgR8B67Cdbu",
  "key2": "ZNj2hwPeG54Cwz9nbpiNzv2gdXZvTdiKXZwzPUaJJ1sQEAf9RECbfNJp6m2fgBavgCr263gVDAqKWd8ipPqMpYQ",
  "key3": "QPRvfohjRdsmWsFvST8RFm84nM4vAxWPVtrtWNV6qx7myorWrJhQZFykubCQxwcJswy2GGEBh93QzkZLdxsqMjq",
  "key4": "2t3HxtFezneRfP9FtmMCiJ6gWTPdDCEJYMnyj86oZYxh9YfsyMqFThu7Qcnbeh2c6rctNZdFRdRn3XjxWWfnkrmi",
  "key5": "8rXshF1nH5KLuYHVT9jgmfB5qQGitzssoyXhfZ3hbs6uzA56TsGshb75J1qhxuQx3HHDdCCFbivsHKPm46DwJHs",
  "key6": "2iKXqCY4dgd51x3zVq1DtbpUpVJsFaz1GgsinzEPFd1gD1w1e2Cp8743mLMbMRMY2NDkhJiadnHRUT5Auc6Wxvbf",
  "key7": "2y7eroSCraq8Ef9i3BJWDSG9UuBBtsq75zoEfbaa3DX6q3Jz7GE2UfFoz2gLQcdZuCWHbbQEHWYxR4wAw4eXZLgQ",
  "key8": "3PbznxzmmxAZyVeABcTPvyZyFhJnUgQA5eUZpThL82Kr4g7CJrCvHJcRRShPa12iNoXc6SWJeCY8b1a1p7P8A2iM",
  "key9": "3htRLRW37NStJ7HtrdEsFQTfRzbZHWBg19b2rFCYkQdgyEBi55r6kHondnSp9nknZ6exgXRRdUZSBsX8d6hbXJcK",
  "key10": "3xqp4SVAcZcw9jS46gAm7ne1qjTAtLVAkDGi9wtxcQ9bjpvGiWsjywvGKxWap3pVsa5pCyWqw3bcDECcfAeoBqS4",
  "key11": "5BgCdVB22BXAePTJzShGLj1oCqVfXv2Hc8bYV355T6WtsxEqnAAtQhRcuU4simCUCRd9wpnM9JfcN3mfwMHkY2WG",
  "key12": "5ShuXe46f42DehM4MrYsV8pJrBq8Y4q5uAcwKWdyjiJ4XKCN2sfB1wUxff7cFQdseF4ndErhEKJsPJGZMhRHpCot",
  "key13": "2DLDmxrcBmASSDvmQNRM6gV1te7t8J7FEta8jZWht16V9DDvagajyJHXBEqHbYPntRFVDXGm3arjypeBURryPkaQ",
  "key14": "4zdTfnt5gALe2pMCSfpBtNc6pjvMsVmkeE4GFekTJGsyH5qaibqXHJKwjqr3ghMutjFcWqAHfDmipASPXHJWUMCm",
  "key15": "2KhJReDQbkZExCAx75tWRha6w3vxAv77rfwPxq4f3evGYrzyayHq3ZDznbmziEUw3e2nbGmgDPnhTxeeUjwGg6V7",
  "key16": "3NzsyuAsvV4HjrvNV65iCnPzZAvq4X37EGRk4uioCAzt3Z7eDvMV8hUHHzRBbLk3tmyt9ch73KyynJ8aKEVCQrq7",
  "key17": "5qpqALHn3WL5GcN3q5rShnQao7Yq4kELvteYKh13Zpa74BRiZSWGj9B3K1pFwtRwm4H54fS3GqrbqWg7G67QeT6B",
  "key18": "2mk4tZAaaP5QHXLfHmKqEcNxzoMYmT1xDX4VUiT6GjD7EhRMDL9QJ2E9djUrVrFVAMFdhuCMCn7tS6zoMf5T9Umg",
  "key19": "4DhuwFpgn5kpckGF9eDx5bLpjtARmR54oxs8ZbdZrZsNAtUxjXGZjVLvK1YP7u4ZBEJidMWfakjB96Rvq3Q7QcpU",
  "key20": "4uYqQsDZcgyJPPYR5NnzUKMgsmBELWdZAy4r7Pt6QSYBtYjhKWCBhskSjnjBe9REpRxwPSBgzCEeJERLpb47GSBh",
  "key21": "23LX73TaXi47hVqVUXujbHLYdrqerkSjGwwFHKVSD6sgtyU5MwLix3fmXmGotazFHfjf44isUtnrCqJwnF8ZXLoZ",
  "key22": "3UYSTA9W8ZYGLv6EcUDgMXqYCgJMFekCTAbMcTgxveYLdBA7pxBNwS4LrXKZ5jr9r9qTBRd6hb3dht4M9fUgg21v",
  "key23": "QZ3Exyb5tEK3KqS1McmkwNoKnCJRNcQ5U187rGrfWXbPhuF5LGLpj25Y8jUNoQZZ2TA5AdBrr1atN5YFK2jM9Rp",
  "key24": "4bb7ZLJtobPmsCLQuJAcWysWFXVbm5LzEut7BV5ZWzTvQqWHQ8v8fnWD6vAtXCfGKzf4paYUcdfhRwa4aGYADvgB",
  "key25": "5G1ngmoXkKGzXSidyUjtoPnHitSZjEPUtVLpYAYxd28xS4hBsmjBPLSVCofdDUyAj9CzpDcXbWZ3LPh6wf5JUZo8",
  "key26": "cAeyFT138EBmuaYBFQyid7KrDcb59aAKzt4SbieXy1T2aZUYuq5iPYoPp3GmmPwB6gd2r89dFfRPYdHgBHciTro",
  "key27": "5Vn8aFbLZPtJ9AJKDC8wDUR8ckF67uneFyGEoEQMWPoaVCzogvb8ge7HSRjCtjoRBVGHJvoCUVjFataYo85YjodS",
  "key28": "53kukr9pC4Zut271iooNt6pfeiSXkXhcpGnE1nN3swZ1dHX7rg5PKPaDXk6PUk6q3bdubRVvK2YUmKwPFixfrNXt",
  "key29": "szze3R9L5h6dHLhhwWmyyFDUJchNbxyNVC5fMQAFhxj8MBAXRQw2JKJJeCBtvRiohy6w41q9UfRpAK7mMkwxDBt",
  "key30": "2KBzKxK8ws4R2TqKaYBE1gVEjW7SMpYAEHrLzePdMRJYN7t8fD73VxNGFaLD3m55xquDTJEDjT97PiF9u19eDSTE",
  "key31": "4qXgsRp6LZVNfbqEDBc1S93gjSJvds77WCZHiZH7Xin46hN5gHPYejKCLXMyqbnfrvj7gLS5Y3JaQFJbAbsA5bDv",
  "key32": "4gwkjZ4fB6Hw3mz4PR6WkteGef4au4zuudbzmQqhZ29dxTzbsSHZz2j1vnikQ7EDEWi1dnKmzCFnZea9PGNEqB4b",
  "key33": "2EZ34SF1YwZtoYUP5myHwRmVoQ1w9C11cAXRD3gAYqRDredS9Ztkz3yfozq72F9HovsuoREtewXGrYYd8kBfoFNv"
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
