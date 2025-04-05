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
    "3XUBzYHBz1zMrWJRADhZ6rt1HqWtY4zrWYgN3LNKkKoUwaVFdtZHfNGti4tY5FthafjKQSoCmokKvoHjGTC2mHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QH58dfA4chnbPR9ViBGLxLhx3YPGKS4GHaWJq1wWtC1ut8uZTCbibHvX3KrNfwuKQt5b37yi6GAuBUJ6xthCNES",
  "key1": "34upfhUZjfWiYWHuHHcBn4UhdJiEiFcmryCFCRvV16FP5hMGcVfBTfZn2nTat57m7cNRAfp5Xua1VKnEqh84ggCE",
  "key2": "4wsCsX8iUtBb8939Um5nVwh6yBmADqwwME4SnMxhhTf4duFWW6QrcdgWWJV5HTMU9oB8TZnMUyir3Su6iuoUdsky",
  "key3": "4m1i6zZRpKGJKmsrfJq7fiYfxHFFk48jzeCUpbCjY1hg9BEb4hRYwcCa7Wyuzq798Umt63nyGSfTr2f8nndWvx8b",
  "key4": "4SSN7mFzY2ePtCnVF6XyJLAi7scHQmScofBpiX3o2bYGpgNuyfjifGorJtTGHYJt88CrE3bqFkMy9b8YWHu98yhR",
  "key5": "6hPWaDqmh5HwfhHdQzS74Kt7AB8cVkWAuZMbFD4vLEEKY55xfFwbXYFewyV3F9Aefp6ymGEchvz6KosrAzAU4p2",
  "key6": "8YP5bL1KuGEtdndcqofEa1aZA6baAgQpurq9C15j9qBGZU4xtp5hrpVazJjCjPtGC9r8rxUMkk2wXMN3ShV4qVm",
  "key7": "3iZckKSidXGFniAs7qdz7P5TwFPUyyaM8UBCNvQp3GexGPEwNPso3EJ3TQCsKTRurAAbLbopCzHNqcFDNPf7DVkR",
  "key8": "3dLZPYs7zhUybSGxyhR2exZj5ygvSJQ9ughJke9B89U3YgQgoSMNSaBQsZTqvJHD7b7T3Ja6i3GM5XWyYE47giyW",
  "key9": "64DWHXRB8wxy8KTEHhVZ9DQT1C1Fm4mSqJmn3v7fYbP66p81ic3mkuSLjS26kD7GaC6KaPgJFgNg3ZATDB87Pbs4",
  "key10": "5EADFuCzmxNda4cDoapcsaCwfXwLgzowzYgQY7mUdwMMiWPgoPQ7TZx5xxPWG4yaNCiBSmC9zv7FfNgh5qreqzCr",
  "key11": "n6ZLMek5LXZmHLjZBADyzJ6T6y6Hs3Kho9U58wjfZXruuN7v8DMJGg9xpRT4Hm7T12waBFHfTVYReEqHybCt8Vk",
  "key12": "5EUNdaHcRqjryhoowkcSeSnm8DL3GTpDWV4KyR4D239MbD7J8DzYf9MUMEq5aE54kE7m6DKA4y4xA59ygjTbm19C",
  "key13": "498BGvBSz5wqYYM2Lfxgvc6hgjLDX3cB3ES9fHK1wnNTmXRFMQxyQxez8S3Dv5SUAUbwRUtzdDwxdMcNxtCr6LT3",
  "key14": "NrE2kVPveBmpgnzkHVCWfZjbw68oEoyqhB9NzR9HCv1qrvue1JR632w5pJrWJNwMHwP4enwsfy4nh6vgik3ATyq",
  "key15": "63B9jCEYbVpvMQ7FpAcPqCSTNkTMsJfQuijd8haxhM31u487KWw6EKDziQzGG5DcSjxzTcAiK97pTNAznaHeqAER",
  "key16": "3SyRTgiSeniMktMLLGNfdnrPnHimkSe6n3iaF8Ea5akgBeYqgfv3gLGJQjEWuTiJKXGwaNNk7r9ePUaHPaGECTXc",
  "key17": "4M6MnvaXmqngiXvXiVMvY7roofqNUYk9nX2gyH6rC8vTD78AZinj84wxzEqUh5cDt5hybuvapmnk9ii1LP3sFnsa",
  "key18": "LnUcNFajr3iqZJzv1CmaRL1gHRcBk82KbR5vFkwowNU1E2RRumMcjJsVNWeyrktP3ZBNW4hYL8ZPV7bPSQEJxCZ",
  "key19": "63CNvoDJhe6kVmA4imPo26DQmxkeyuTLYC1beJWvGBKukpQrnq3Z9CmxKjx9E5izPNtThEMe5miv8ZcKLTHLfDmZ",
  "key20": "yhcahkiNKkpWZz5PEmeSvaDMxVxsMQdhqLQMGRxJLAnue7RE1i5s3bwoqjX3CPm7tFLU7SeDFG5Su3RCuR16kwt",
  "key21": "3zEa4En1apKZLXku3L7XW3vKhRLZkkdRWYAYpnL86JvP3TLMr1Npmbc64RygeE2LdvPC5w6A6vUNbkFH2aW5DZtA",
  "key22": "3s1rGvbntsbAX919aDNxZF1L4aNcJjT4Av8FRp5tL8cxjL6h8MdmLmGtz8sZAXtQ1zkE1cUfCBN7zaPqvVrwP8ny",
  "key23": "1v8DFttA4a82sxnhCYj81sJHQXBmFH5sbPgxkHPUFdnqnqRSsy1noduJbK1MfN3R2Gam5DbNuTdFXbvJdAhVhgm",
  "key24": "3EGTA1PUFLAWkY4D9DLn6dkaQUgmyjPzVqBKZcvAMnG5kS62y7WxSQRwiorTCtJxWzrokKFcbStsahmtUTPAMDkD",
  "key25": "5HBJJe15VnaMiUcJWMPpVSGAqAq1J4TPrbHJiNRCBs5aktrhCb5vo1MwkK8oeJQjpXX6thsB7bwAyEubY55imWKJ",
  "key26": "5Es6p3smqwFWMbnWUeVunvm5Zwg8xACC83r4qc1xBm6xw428wm5bGiW78hD8AViARmqChArwg9cb7dacfGZonEg4",
  "key27": "5QD6LdoSTVTxbC7cbWTePHX1ZWqeqmqucvTsu7XF33Ej6mA4YockYGnACnkmE5EpjeanSYBznVTcremjdhBLtWuW",
  "key28": "DmsuZ386iTDzBdAXKkKN64cDFjE55FPVHWKhiwiuH4j1bbvQzwFfNQ7F2Uwx4qukG1azxVJLT5hxsyMi893ZDxf",
  "key29": "39ykHgkAN2xenVTAzU1J6y4M7QnZJnruPiJ7sXQRWnEiD8mLnAUEzBmqSfRXvkZLdSBmYRr8CzcnJbEtHAtiXRis",
  "key30": "5Tyv3yM64qaWr4NzBFWbHWBrhd11tFkY8wCHeDjczLtNWcfgepc8eDxCEEeptAssYXJpwLFqY327RWMmZf12JjuJ",
  "key31": "2wyAbe9fqosJBGZ8rmnkjWRDcbPepk3S9JEfU8yssYUbx3cMSogKmUrkwgoGoUxiFgAW9zgRo94ugLPUVLBWzHPA",
  "key32": "4MJjWWMUd3sR6YuouFFUDjMBZcLAHvobV2CpNkYc82ZgrKtZT6tXDhBq98LZujY6EfGCjEHdRnA7zAodwfWNL541",
  "key33": "4tmu39uthhdZa3F4QuWF9TFVSDWnxXnvZrx5McxmVi9tak2EX1tCs162wEJ7LcAuV8FAieMmekR1hMT99mrzektn",
  "key34": "4Zar7FWu7FjcoDskgByCDXzV5dPH3g54zjSuHkwZjwFD3bjWo9fsyzmQZcFYKFNdvYmS9CEkjhfCdXfQKoEeKxLu",
  "key35": "33wbCkav1F8E7B7fBMQ9nEJgEDKteFMAUVCvtJg4mVGAyqpphB1Bs5Yyaf9Sa85AoXhwBbxbcHtXb5tuuSQodoeC",
  "key36": "3B5KbXtzjL6HWU8fUt23JnbgxhWiBfacXkPAEEPxa7Z66u3fERZBSDuDgWSxXbGUiurv8tsQf12Ebqss8ik8cTfq",
  "key37": "2uMtrC4ZE5oeT5gvRWsNyZCJUh1GYNURFBHzFBUzJdsPP2C8XizdHHrNAiEVU7ktJgBQN2nJceqR9PAq8irwco8F"
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
