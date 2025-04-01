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
    "MTNuMXGtDZrG4JHRZgWZYf5mDMHXxLSSHSAqXWBMXicEdJnJThBw5fjxpS7QVBCd5otDqNJdJ8SQiwdBfWaVnfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KzjMvY191sPNKCFJHavphxStv3AECRUe1tbMsgyLtmUqrWuFkmsvjdCwBLv9wZ94MjXJravudcjobQhkN1DEeRL",
  "key1": "5fSJxkZzTpgU6RhijsKmCAD9UXe5Zz8EA8Cr95K4VTZRFfd2TQcBMbWWPwPjjFyGkVikQpK2uU7BSEu2SGDXnJqT",
  "key2": "2dxEFWAJ1FotMRWwgny9dyca7DFMP1tpmneH39Tf8QqJqdvfZzNFfDDwSupTjKnYn8xamXeitcUad3H46d17KXcL",
  "key3": "3LepXNbRjZ6hQBkFFHL3C5yNvz84SY5ddXRdQmg5CBgvjuyRe9ta3jheN3epGEy1ny4TLJSC71mN53bmAxWDH9YH",
  "key4": "5cdmGKfsxUJQTpiCU1B9NthxoEt8ioH8ZP7p97DXNjmg85camBZ4kPSVTAYpDY1cZBM5ybvDkHfhE1YAVUvKGr7E",
  "key5": "59WWBAWuaa6Vq458oDv5nTbBKA8kXM9qUdKRTVByXGtudJKKf5C38KaC5EsSDo3kgXgjSvJa6gFk5F2FH1H9zVh4",
  "key6": "BGxuzg16qvCo8F32976Y9tkHX11T22uvYfw7Es2icDNqa2548vSyg9cFD8VPN8GHSuDvibEnjPUDyiqBQnYB7Mb",
  "key7": "3ncpB9ZzN6CSEPHUX7iBBVwrZKUZJHQqTMZRhLqEEJmeQNQyAnrWpgZtv3APaUpwGW5L47iRFYe8GnkA9kv9skPk",
  "key8": "4H8AvsE9EGEc7oFNNctVt3dQyuZbcNBfYvquM7HeuUEPdZNnwpruzUdxnGZs15u79vp517bjp6PBMA25kShf3SqS",
  "key9": "4WUGyQxCbDwj6th9NVb2K968oR3Q1spvScVoQaFC8T63PWsX3Gocia2Kc4M5vfJ3Bv1aTXjDkcSGpNfwZiN45kyK",
  "key10": "3zCQhrHKU1SjnJRLZt3CAoLTU5STStkKwkcPRpjdivATrSDrmaHi8LCvWPRCFUP5VtGYL6bXaBxbW5N3G9hQf4wH",
  "key11": "2MTGqXgrPvDSKF5VCSBawy1JMD6pNgTy8tV8pSQLX8E2LtbWmrVXCQ8AkaWde6Z78n8YSA9ipfK9jNhumesb1zQc",
  "key12": "59twktAgjftbFf32FJ4owVjGVJCrsGJ871gwakGvgHg5TPvngER36Jn1jziYvZpVpWQApJwM5nCjL2Puy6xo14ZH",
  "key13": "3NwWCBocoDDWAqbregSNXhuUoap2JrV4W6UHPLXfxvfx6KrTBEFjPNxsDWoWd2UuHA9YFKsaz4Mj6Y4FRiJUv34M",
  "key14": "43FMia9sFtAGCp1P8cbmNBHsGSUjNdne35dW21EHn2jbwxWrrzyDA6BRdr3cbbxaQNgHsXo4ZW7VoVwiujbLrdTy",
  "key15": "3rJGQVC85Z47QAKcxuooTxjhd4RKEHzfZuyMKKv2dAaLjqEoSz8DShyGmukr7HNYUBA7gheqyxCHmKNRH68nXWjS",
  "key16": "F94KgjK7hHS7Hi1Tus21nLPE4jgu9sHMNBM8KXqEq3erPnvFkumWBMXtpLNk8862CjuWeAnkzudtCTjckfXMmu2",
  "key17": "2ojKT8ESiwvXnx2fczgFJYsocVsd5ayqvPfK7BZnGS8352ZYQmDy1rsPDKjgdGxWQjuyvrdpQSYpDUkXYmHDYezB",
  "key18": "CZryYsDn7rGNYuLFdMHwkUsFf8mwxfdCKAyYmv2oUkp1XXL8EftT7sZRHYBZKwsDBoejKuWePb6xc1U1U2HUPUw",
  "key19": "2Bij1idqGBsVtcV1Qtxgcq9eF9TqzS1UbNbHRqNmmE1xJ6JrKwkpSjScSnbgu9QjfnnyYkGkGwPhwvM4TiE8zLK6",
  "key20": "2ot6zVWBUuBSFjQsxwznm4VWGrWkBn1WtKv96SGAvsxSDU6Gvisd3SktGNVevtBnbJA8Mnt5mzGSuBY7gVncshyH",
  "key21": "3fPvDakmG2x8LRc8f1Y2R6vc6CfbgEAyDiaxbaA5BQEhsppJNYLtyEqzj3nm3aZQViKjBH7VeRUTeMcSYjriXbBk",
  "key22": "46gw9gKcHpMb87Dwvr6xjJWNQHvgaGreYD6cUwRM3D419fxupKJ1timHD7HET79X4oQzvbCEGaLdjGWEVJDe5kQ8",
  "key23": "3qRyyy4gWSuVX7LugcrEp3cVqHQLmTosPc6NJRppP2S4AD5FG4SxTyN11oGUUvb8XKkZ5TxZh5kGW4VKLWzntvKf",
  "key24": "4Q5QXUAeNw8ygLQLpAUnsGkeRZE3tGydRsGt53vq7YGTzHQSjnzgVRwDmotam8DxkoNLM6AQrCRwa195WMFno5Ln",
  "key25": "3fgLsiJs1K36Ht3482vX4oUPEYWmYzHpFFRs72NhzU7bnGHFwMUgyRzLSfrCnx9djL22XSQvytkHSuLuDzZphR6V",
  "key26": "4j4ahHLFcuGpmki9FqLLBBYRgPCUjcaAwdvpaPkz2sSWmxw3LCsCcvnhDAMwVQjCNMwfUWZo257U7Cfd7uQ5XXjG",
  "key27": "4w3o7aHGK9wvWEbxGeB2jsdVzEvWFTMD4keRAGVd7ZjZdokGFMTsRntqxaqfKGHSZqZ58cZ93YQ8bNLKK4rLoLJH",
  "key28": "2dBMVXQ52ercL2LYKYhPGRAibEFBXdrUCCAPKqEZZqMXvC9g8TtvtMRPvaGi2om59n5nV3JWNXVz1DsZSMKxadJB",
  "key29": "44k3xQ9AajcJPJz5vRuuUFtyexJnFx7EaBHotFtXtXXyHTpnR6hWFAxHz37DeVo9PnEHTc4GWTBK1R8euDFrZNbS",
  "key30": "rttqquXasQizbeKcifaN8VxCjeFNNEHnQMpHfAw3rmQ22txBu66KxujNbR4BmUstDkxRVskq1bMtUaJ2i5jyP9f",
  "key31": "3uU8YSC6DM9YsqLz9KpAfgMKtty3KF5G9VwYasbyvi69MRJ15vdwsYvEVztabS1dWRBCkfU5sD5Jr3epFjBFeFkG",
  "key32": "21fAAXiHUapo1aUQ7tNLQKfDdJFoz8dGwRCnQ1dRaTNWXVZYobg2xMYxkAHBLjFLvvBuVRA7mZzNDjd7Ckykdshp",
  "key33": "3Z6WKQpGmkHT1PEQTECZM62AKpbN66UbVfMcdfC7Gid1YqGFHtb5bYt3cPRJr29fku12hNcLQJdPBj58UABB7spm",
  "key34": "5bVedZihjA2EsE27JrRporraNsoCJiCeA92amfaSp5pCYyWzCuxsExeXWs8GMYyjrB5dGntYwgxFuaX8ZRfQmiBX",
  "key35": "3BBiDdvkHHATjD3QynuiBuSYh727YJwxb1NzybjnrB3FTFsE1A5oiB3r4kq1viFGirEH7ZTjJXkxjZ2QdGsRVMM3",
  "key36": "3ZLBYKPHEKqivFXPzuya2QYdjm6ixS48yx2FrWh4b7wzhrTPrPFudCDwQ4QAGNzJEeAkreaWTyU7j8zshPxjhV7B",
  "key37": "3Jbeqz2JeQwPrQFsfPKZMFo4g5vvHwh7oyLktjsixgwtwuU8GPbePdhADzsCE8GjoGJ2gxgEqQphmv5rRLWh7HFb",
  "key38": "RHGTBuTkgyj6WuT7Jp5kfSUkL9PBk29tdLmUdquRa841Sy8XDvYFU9CJQEJpBxEkjE5KE7D6RiSKsUvfGwMTeoT",
  "key39": "5TG7DeyokNXP8gfDGCb4QZsS5WNgEJfcdfoEUvRNce3Hk9iXHJDToJqpiunSKzJ5DAESViDXZ68BrNjN2hxQzx6",
  "key40": "2GMZsZS4JgdBHjpjLc8QfNdVSBLscXnRYVHYi86o9TdqN5DkLtXRAoz53vC7v6sY1ZVAiKzn9Z4HSLFFCXE7HeUi",
  "key41": "2C4gXXMgZTisJfqcXN4LWcHHksYZjjcXYMgRpggQBZA1gj2GSXzzTzPyZwzxyAZnMzyYrJsAzCUQktkmjpGvZmxE",
  "key42": "5oeD24HLVCFpXkPptqM9S8DcNzyQVTehvudEsKUjcjakLFiww4Pq2WxdkvQURgCcWm2YVLeQBAx2P2KkH1RqEeYF",
  "key43": "k1TpByK4Bda9JJiPTk1DZTE7oVA8pbYLLwLXdJU4uyhtq4tfiTkKRFACFWmekZpAFEcC5wtk6LEUaysBGLx5RT3",
  "key44": "3zmmTHPK99PKnWM2jYiaNvccKa84z8ZcqxwmoPbegxTV38ZBsAx4KYvBuMCZkw7fFLdK2wzXpq1FFdUZjj4pfJbr",
  "key45": "2sWKWgSM1bcz7ppBrFPWX8Ho66xLrg8RNjcyUmavWCWMp2PB6D2b5yd4PfNT5bkNNVKydW3fJ6FZ5ybcVWD67WnD",
  "key46": "4V4tiCBozzTEjnQKCi49vGiyoLnW5VSQcD172wYdgxbC25X7Cq75RBShFeTDemkj4v4ors7nfYiMmkpNDeGkL3GV",
  "key47": "4SLVwngpqkUR3Bv3RnfC7dBU2dMUxEJQR739BMhrmLyzabwJPAgYzQGM6P29JNQ8KUtbGVdE6nBfsA4McyPg5N9h"
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
