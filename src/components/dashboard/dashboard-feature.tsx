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
    "2qddspLjCLVrdNPf8DiKSuW8gTKyVCCKTUFVLbZXkuNAwKYV3PE5EehpDqiWCUrSKHunyx75gbB612M4P4syU2zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LSrsYixz3LPrqfokZ9Qij7wdaaXFQHeM84ZGM6GHXskTLeq1z6MToSWTMMQ3VwQXimL1wcz3rQoL85Ftge9pgib",
  "key1": "65hD1DoxL6UaF9N2mEwEqM3yLnCRGwYaHSuau684sboWnmyZHzu2oZvkAeygVXsk2SnQEMGDFPXdZHsTCSSgHuwN",
  "key2": "j3ZVJpqnzW4CCs2bTZizykLyBrK4t5uawuSSeqEDmKYNUrhus5xHkszZE1Rp7y5ULkd9QDvRuuW1ATP5iXiQ3Py",
  "key3": "4cbPmUj5HBCAm8VYin8W5RLwDh2MELwwvDZe7VSoS6ZUXkEeS5LxJjoDwEoZBrA9eUiHqdbyh6jMeQSPrnaKkBmh",
  "key4": "445oBPsP77tBnXP4ZMqWiB58YNCFmEuTTJZ8x49mQaCN87n5nuyp4WdvYPNUL2tzBhyPojmEsDRFewHz9igRYUyF",
  "key5": "2eXbWZL1B5vFNSUjdMAxNSuAgaov852goYz4b8to6YrWzWYcRqMEze2i6cgWjbjPKQ1TVQ6tHkUxSWgFDRoEY7j1",
  "key6": "4oXhvYWPHEavwrXXWXbX7w2PSSDH4mYGxU5kUeeyXomzzEKW2euSGKckJvP4kaKrRyu62bmotiWcQA4wh5UKdCcS",
  "key7": "5YE4AhbvZKU2XvRcUvs5A2Df7rYqLPviTrr2Ppa66JmKRxnH6BwZr3neLTGa3g24jZuH5sax9qutTdhwbnk3MfX",
  "key8": "3hD9cdebuhYf1Qc6JNYGFRWidesGtU8yDrotN22JDzzsLQJ3Fi9kd7ym3D5DK3C7vmZW5YcPfd6cDmMucMFK7Eun",
  "key9": "zRvahFHpJqLNY9Wn7WbZPTJY4GkmUZ8nf33cUdFMQqD9kFD2fHA89f451VY94JGJh5UgwszEqx8H8Csresuv2kM",
  "key10": "5fQaDUukmiugr63XFPKK4g65V18o6HwiSgqmKr1CmZVwYTMJCCPm1x2emxkFP2C9xMGASAD6FsWd9MNTEztDAtCp",
  "key11": "3vcNLi7CPPEJYe8oNG9t7Q2azxqnwWoL9zc3QAngFA9qxUTrLbJSVLQ9zHEsWasvAST3PxaLB26gQZEm4qw252Ep",
  "key12": "3we6zLn5PtyqHPpeJSofoCnb4NDHRjmQrQ3dCbpXSLGbN8JxUK1oGw7PjHdrZZYcSwqQ277heuut7Zh48iuZjtw9",
  "key13": "4qfWNhrTtMwp21Mui1YBPgW1hFVb2MBcjausZzyh2J5GyGt1CaUYEMRohxEfx6KqXeCFvQeTi4kxH4CCHJDLskWR",
  "key14": "41qkPo2BXryWXT7JS5Vb3FPRmyH2BmhLxWeJHBADs5CE5GLuYmJXYfj6wfzXWMngUhsAEJ7u4xHQdgdwUhcheV3x",
  "key15": "3pxLhAZG4QiyrhDaU7JY5BYgCWt6ucCUvygPWrEimHM9pDRpeaBqCbtR9KReezQRTSTYSBZAm2U84xDc19uVQFZB",
  "key16": "t2CqZtkvwX9tJtsXdTkM4CdFsruBhgiR9KZizLTBK3pZ1dTyhYyNZqm7HpJHpT7hUBD8c6WKfNhQ7po3sQZ1fhn",
  "key17": "3ugHcXNyRCHnPupcLPfENtmmixDdM1tJLa4xyx2jy6PLS1SiHm3RsUZyD5eFUkKDypZJHM8F5wwjfzW6UueXnnLS",
  "key18": "5oLmoWphu9mhcVCJ1Re3Xmkpi85hV9YihktKc4RryPizxBsz4ZXVYDxqdukrMy7ANyGtLeVWgdgFuSQ8mubCYAsW",
  "key19": "5eMzxnMwSPJC8paG3P8iCiQspGvwLvuEtVGqKSSTwsMBtQ519VkYyCX2jRBJx9ZAQ7ksMmYr4xXm2tvdmyAN9ZXf",
  "key20": "3ayBdXJgCv7DRHMxcjjFVzFCADw1BDopZDsAuQChX3q5yZHRjFKT6HB8wqHiiZuGjSMjxtqqn6ueVuoPWaGEbMJv",
  "key21": "3J5A6JHhy62k1c9eRaVXUq3M9Zc4vGtoqSUgiPk2VHWQArinDPLrEaaZ5orA3fR5WXLSKQYiZiKyrFi9pddzJJSa",
  "key22": "3Gkc1sJXvgtpJSSv2D3qvjNUTyoF3LCPF17VbuoDq4YBEuXSg8a1mugZfGcgpgqeCvWaAWVUfYn7LoK9iP64EWcp",
  "key23": "2SAMyigyY1gQxvYW3AL6QcXRGqLfiMeLYkJHJQj98qDeX7J35BhCRZDrqU2nze6HkGQwhufh7h5obMazjdDLm1Vh",
  "key24": "xBNekbqhAcCnQ4EFTWxpVurwmeWMSnkV15YsJbq6w1eshmqWsVFBoKLUbEYrGaEjEJwcmBYtDnUFtvtueZQvaBc",
  "key25": "3bjrYRzBzPFCcAVt3NeFiuSdpmVYfiyod8YYdrFCSbUMLrhjxgWQSmYeBD5vJz8YoPcQPRpa9gwXpc64M8FmjJof",
  "key26": "2fTkf6aYf3KqAehKKxXRJQJQcWqNRffmod3jXXQFujxQa1GaWSebMckKb8FsmYdDMuYyzQ2rT1VqYGWxrvhF9bQ5",
  "key27": "KdjdC6xBfKDd5mTa8J2ifPDPfhHwFAqcDYjPPZqiQJVvgqFqHoH4QPTvkxgBWNXp6MAUjbNGri2ZmEAPg9EFYS4",
  "key28": "2SaTn7KRHkmp3FLkg9yjGMU78H8zyKmdKJezD6xeKAar6zSVN2NJ1wTiE2vD7oFedB243NmigzfVQF8nxdSijmU8",
  "key29": "3vkLkSeVUk8QyR4B79G75VUN46GzvCaRRzM5ho6AyD35u6kLJ42BBBN5vczaDNh3hJ7RV3ry8ZHhbDQ6nyU4EcCt",
  "key30": "3zPtZBnvGmv7DjjuYEc7J5VuUDW7cK9MM4MbuaZCyDFzYRcaobfPwqQrXyNX8oxDYbjEoTqpEpnbcNALA3PU9tyx",
  "key31": "5MYafD2Xd4rMtSe7FTupvtj1y7xP4CruvJP3MCha48J4sGAZnGqRhJMsH3dTW15DtJrJPJ7o7jsb7GvDSt8BDUgv"
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
