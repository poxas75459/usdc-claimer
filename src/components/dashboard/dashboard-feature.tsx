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
    "5tmgzYLoyLqUQJxVe6QVU4vzt53abu4tidkaiFkzVfbFGCcDXmCitA6tP3Y2ZfSGNRYX2wwjxsU4TnHjTv83MYSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ME9LRrirR8cHxpB5EtQJFFa5nv89hCBgfDonh7s95th2i5Wr1BeDeVruezPqSRztcEnc9EAtJdozAHa99DvUmdV",
  "key1": "3XAPWSjkRauSqunpzewUF3FjaqhjR8wTv3hVMtPG8cp7opXj7nX3tdeg3wXfoXxPhsGWdmDsQm5Vg7CqjcR97sdx",
  "key2": "41eTJBccxDFEE9HNvB64LVTDPmYGYRi7qifvex2F6uvZHgMHBQhJ5VMySTc3J6o82vEjZV2yLKtA64tNUDfaRgTd",
  "key3": "593K2TTXcvPvwNnv3fwrqJ8FRx1qgBh1ztJE8KXsbVDxjYuMEEuVKmW7Yyw7ZA7YHjkJWMdHYDfSccgxjRFH3KW2",
  "key4": "4PYTMqsSLf3uGGReD8moBdwihrQ1hsgxEnED6LWxH9hSjzdMacyVfgDZYXDgTefcd9KrSsVgALe3fJ9HoE1UAAtD",
  "key5": "JYyiiSQCyC6ZmQng1jmneVEg1XMYChgXzqtcx7tjeebExT2JaQgGo9dms8tUXDZeTjmvC4de4NixXTK9Cp91z8M",
  "key6": "3NJm1xw9hvYQ9MhDW5sXpBGNfdeGaF4NrkoA2Sj6N9iiZrUjAfefgQjmZQ3vg8R7b1g7vawGMaPDjdPvxnUBxbJv",
  "key7": "4ZGF1bm6bHdeRWm9YTYr515cgvMEJY9zqQhKoN96qojjvyjQeJQdXCEP9FtYcU1XwWDjbeDGxh6vpgaAnXnAiMce",
  "key8": "2nmerSYwi3BznS7WPj5QmRGhHDyr6wLsSqMMnVxoGAJCumDAUmXNrAxo33YPVpPQiWmhbSBsfCsuTeaELYcsujN8",
  "key9": "61aiUKMvdGbdcgRMASXZe3Jb72tKVbkW9zNBNRw7RqCccTF3getayH5WHQ4ijwqTkR8KYQDw5cbWqkz8NDzq73Zd",
  "key10": "5nAsCXGotJ5WnJErbLrsXWMuWMmKoiVb5q8Uowpm2Q8TSdAbgyQGpMftR7NZrtP2w2DVnyCbqiQriAH3WNVeDPKJ",
  "key11": "2tzNuhoC4sWVUrZcvod3QNUc1eWmg8sC9KVh5XCdVrEySrFSzgqYmFDQiiMKXCgS8n8UmWHBHf8nCjxeRNtsHMzV",
  "key12": "2KQQU1hXpaxkfGTYreETyz2aEGBNgyjYHjGU28bmErGXiTqWDSwLrnLwACzF2cHkfS3DjAJ7KiZyPeiGEpUimsay",
  "key13": "VyGESEjoa6jjEg5Cf26SjaX38nP4auS7wng7keysRhbzHqA8mjyG8oa5u7p1LP15tbam8suqxxFjWTzrM7zQVKa",
  "key14": "2vdGAr7yJwQyLPc31zKpeA7dGuRYQgBW1ec1bhXiQydC9WCz3T5yDE4SzuUuGh7CxGipR1P5G4MS6rrgDy6V6N72",
  "key15": "4pErz66edUw4oqQ5hBPZsPbTri75vxZjowVyW9W1qiFSmSPSRdCkH5k6PnaAB8AiC86cfYCQaEcHYDztmdYWVEpb",
  "key16": "3tPiXakzhGEAyWptD861xizXxtWhNoMVbStPReaDLjEbUCA97wNwhsayeU84EQuBtE9NEWC9v89kfNguoVW4jCyN",
  "key17": "5BjUsBRDrHzYZ19igZH457gjsbD3tpoX7BTfrwbDWRAz8zMi2ezhx4SGkikR1xZvAX6BJDQqLXGFsu4yCYqeDXhP",
  "key18": "5JkXcMe7udRjhER2XeJYAJ4yj7TxGNHTyB8FpuYfgU3v3gFw5e9mpPnaRNdeMk3m3Q6HswJ5QiCXRiVoTSdqkjtN",
  "key19": "3LByp4Wr8FeYzxvdKCHMjcZMjNsWrXANy31VXr4i5CjKaaVLRmvwDMtnD2vVFWeFY1PgCMgrKLfTfgxzHRwdQoV6",
  "key20": "2PWNmX99JXu5Sgn2W9i9zX2qFo687agKtUkdgztBVZ11d89iuzoXZ4799ib4ucaUJRJH4mt7wYPC9QQ42pYxQrbX",
  "key21": "4nSvPzPWDhQvs1fZtb9Li7mfySAVKVL1ZebVNAb7QYuPpmomnY1Ar45XQpD4zsX6m3cApjV1zqwUEVkABT3MJccy",
  "key22": "3NdgdQT57srmRpmqqaVSYJWmijJmf3bxFFyPYkehDGY1yWhgc86cYJqcFb1JV1UQXSs4GyQaWoHxb3E8PHAgRb5Z",
  "key23": "5g66fnbng8XZyVw5a5qVEMCt3FKqwx71Tyg8Lns4tk2ichpov6nNLVhpGWy4Stk5DjHch46T1EraJRMfFqme2q3i",
  "key24": "apbuLCyE1GRP7ReX6KUaWXaUMjtK4gTTDJLRGR6azJHGBcCLcEHs4xoQpWJtomFFR1PU3WYZVXjtnWxmYjwguQq",
  "key25": "2BUUtC9uEsRooDxT59tBAfTNATpBf55riquowv9haPm2MfZqHSbdXfsK7M6L54dGfv1jhb8ZigPoLnaVkN7iE6nu",
  "key26": "2dvaq3Fmn2EX4KFoEduYv9VyG6veQtdg4PqXSgGWwhqgNhd7WgNWyyaSNmZKYrcVSdGY1U7p9hJ3Fd3QjBRvQjyi",
  "key27": "4vrAU1aCdqBwVRaCTRoMk1VHDxb7i773zeuucruyk9LdFNT4A8mmbSzawZRZBvEwVXA7GpKdFc1dmBdtzufBwZye",
  "key28": "2dq65EWjNnurwCacPgsGwHyBTAUVq7qjpmhRqjfWD5WsuavkKqacFLC8JHjLbHShZQ9vdyWafkxvi7u78v1aCEko",
  "key29": "3chYbTMLHqaU75N4ER5WmibTm15NDDySPEcDjsue2BA5Pr8HRzVLXd3DTFB9BLyzwhbRDQXNrf4wwHP1uW2xjEug",
  "key30": "2qdXcydnNKwTWhHjZEFQLcuVB4qchyq3ftgWpP4aEqXgsjQq3o6m5vDaw9MLR2k5xbsqqM6bvhbTG7NpymNzqk4F",
  "key31": "RRfgAxAhDvwdVk4xzCtPiiYMrsGQPnMwA2UfxSJxYRDRE2uQsHiKr8Gr9xh7b7i5oU4oW6J6bovGRasGqCEsbG6",
  "key32": "4AYikLtboY8mX2Uvj78ksB6iyYjZBDhCqMx5h38GFMd8vSoPUeNiWpzYBhD9jZ8yrsnSnkzUM1qxFSdEkyfTeVHm",
  "key33": "4z75HYaVrsvXJGw1VsZPWAaayJG47inRQMEee2AK9LoN9im31Y9gjxnZJdQJgiZ5qmEhRpQYhPhGF7xDN3JwNiM2",
  "key34": "5M8hCmjdnpLMbMxgaNB7wcMyat195heNHbCgWVAHAoeWdYCgYS6y14kDSJ9UekfgutvvaYm5HX8c4tEHE4h9UJms",
  "key35": "3uF9UNjXtUU3dSbqSC1yNo9sSoPVaZgUVe7TwJDmp7YRY2wA67K8XncL9t9ZPSeZyNuDTRBZmAAUsDXHifaKQCYY",
  "key36": "3t262ocNPYvvBxfr1KiTd797jyAk2ujXyV84FMmWsCWG9RvV8YixYRawyyUDz5t85mmhqkVrxCFsVxrennPxpqsu",
  "key37": "4eQLYSrq9K7eQQ9EBUjg1GC59SXiLBcmPAyteyU55aZcgLZVKPXZCfnRQNJPvPn5SxzuoeB6D8XxcW25vKwz8P6x"
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
