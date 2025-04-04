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
    "2ViNPMwBcLFKwK2BqiaEAeJwk2sGUzwhviRa7n4hAajCoVppyzghVQB71zXe9Ne6RpkE6H3SpfeFTjLg9WHob5me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "364bWSqeLzdGzBYzL7V7WrXPAC5wpKkYwuvQYkVfyanvfrREuziZTjaUa1a9GskA8XRwHT1sLkAWpwAQn2x9y32b",
  "key1": "4msxBAiw3FJsUF6BdE3KJwnYLhgEczE2LtmDkQRuEDGni5Ft8xiLAt4K2q38f2NYW9ZH6Ti9GgyGJn5iZW5LPxdS",
  "key2": "3Jaa7iiXYue5oBrdGmG6THzZ54cBeTuvYqA5FxYH9pWPh4RkiD5ey3sP3AvBCBcMgKcc8ybJxze5HRVjrZTsL6xp",
  "key3": "2iNVCFxKBD1nZomesWTapWMNJtyARHidxQQCGxMHBTGyqEgqqGQgngUovETT1DdCqgDeHm3HPEXfiBkUwddiE2Kp",
  "key4": "u86HE8daerDTGATeizMmfL6ndb816QR3d1o4nK9Y2dajYxzffYeNL2ZcpccF9RjgYPGn8yWx1dtckdYRpHQRZVq",
  "key5": "4UH6sKXaToGgRDUL4FfuuW9nGsxLUyBtx16m1sfJvEXf4n9f3Pwv7PLF7XcmdQHsezJaFhn63mTPaVWYDNz6nkay",
  "key6": "4R3JhCS5fAsUj15aqcAxw5YPb3aZLs6NsirTa57Hx9THWcdLTG6Scdr36RFMwnRUqXnqeB3gVQjJ7L8pSQaW7oBm",
  "key7": "3wkHTaTFAg2CB7EBKTf4h9is4Yg6RQVjwe7VU1fpnJzmNkFtfR6USQMz5CnWZ9dJRWp5eiGScqa2gDHUVqjSCdwo",
  "key8": "2u2NWtfpALtR1zQk4Nvvw74rd9WU95cZKGKsuT7maYChqWJcbfqjUEHTAG3oHCih3A1CPiYes2PxZVFuuoFWG7ZP",
  "key9": "4YYierdbkTHeBRHAsnStKR7133Nr6h189EFgN1gsrQZpkSzxbcbG9NpHvQZmQJQS8EkYHnru3qTTDEiUaR7t6Gtn",
  "key10": "sw27nK1yHKn8iUgSfEyEcAxTMF7wnnKCFfU1KfU7JAGv5KjFQVp1nqVsLzAz96fixXR1FK2detbFVm6krVAbca2",
  "key11": "3eaRAmyNTySzj6UD8zYeXWoAJ6cacNUku8emER7QY2x1pWWut48cMZbZbkZudYNeiqhAfGLRFpcpuJgXo98mbK56",
  "key12": "CbLEMt2FaFPisZ36upBKkRzvEgK35pDtpDu7yd2wRdqDMZeKs5VokSkj3VsajBdRdCWJZ2St62rdofeE4Qoaobb",
  "key13": "5jLmndhATRKWa8KpTVajHqDc5tTEyEKY8g3kXEvCFVv5b5XbYQPtZULGHjdHFJ56W8BNiTzcZEohZmRQL7DfU2Fh",
  "key14": "3JKmujRfdYgiRGS8DogLg6vW8Jv8Zg8dwjER2xigbcia5TvwxPmfPuhB4Y1HEP9poRk6yh2JhmW4nZqwTFW4Nfxf",
  "key15": "5HYqNwHfQbxxVGsTfygkrLJEd8TW1yiAdzZ1sg7ofYW1Qp4TP3HKFnKeNfPT7Uwgn4N6cPX2vJLDbJocjibMUHvL",
  "key16": "5PL1dit37FzRCBC7oiZ9BtkG1XRbfjm4FXQAm7jSW7WFYzNTMLbdC82XzCQnuzs8x3VUPftszvN5pRkfqs2UGQzF",
  "key17": "2tM4YCbjPHPBUgaFLinzUCbGKnavLZymFtfaBEFWcob15t4un1XA1ZFZGm89YefHBkQAvBdL6sEZrLBzE2c3gXVC",
  "key18": "43D6C2Xkd39mo12muZCaRKH779dUNy5VrhzcYoZ41L1DMgmAeAKrrTu9KWeicdnjwsn9TMhdqj2NxUg9853aoyjb",
  "key19": "3xqDpJs5JQMdLdPfi19fuwhzwWHebiQrFFejDEc7QbfwnW4xUBHjsF7Fj8u9uTgCbXEzN9ffZNK2RDrutzmXNe7P",
  "key20": "3ChKx7UYcn6EuRer8hWpvNJ6jJtNfQ3BuqaJ6JX2rA5J9TQfdNnhi5y3dCsjz1DGHk7a2iAKAMkjT3N8pjLqMhH8",
  "key21": "2Bjjcx7JpnYonvRb3dqxj33RFnc21ZUr9wNnVseH5TvqPyh1XjAtScCyy1vRDvp2jka7zJjG6KymZkg6hYxKgfWj",
  "key22": "22TkZ6xJZvJp75m5ac8JRvwj3VnjEbf7mG4bEpHp77zMQjapsutFLpiVsX4jimyq8nyoVxRG66kBBsdanUHAFTXH",
  "key23": "4v3Hpre5V4UxPgHRM34hRicASayWcsX4okPrU5eWjJzXpYb3QGDR9PzGHc4r8ypnZnf3VVnEMXgj7cnRq6mRcbJ4",
  "key24": "4T1t6xvCh91pCQLyzW1vSCiDMTk6gQ6pBbn675Q7WXsmRzfnxSeAncqtrKfazvU16kzkSyXpGPk7XQoa9pRni2q9",
  "key25": "F1dtya3WDCy5p1wCzkdq4aGGr3tLg62WWN3PJ1kvxKVkCmxEKhdYMF76J6xY7zNDop4VFuQatnFKfvh58DBzUte",
  "key26": "3SG6Mwgc5ZaZmUyC3tjLF6NhBM2rqX9DVviGWEq1oRoYSY6hvREepqrWefWNBNDSyEHUPZMQekMcFDo1D6BVy98M",
  "key27": "3vfEFxnZSMzZBzqq5RA8TWfkYt1feTbCASQ3wQWR5ULC2kVPR35psw83kXj6ciyKrzzzaMDzwMPnGN3qqMeuVRdD",
  "key28": "5EQDRZc2ERWx4BEQZVVxUwjUQfX2UYcrCfs7Lh5qoGunwwjDYtLLdmLAeEnCK2GrDgwywmr7xp2hGjWqtjpsfsAm",
  "key29": "4nkUi5kKf8pVBLMzMj1aiypyNuQAUrAucVjrmjHCzaobm26eT63NdLx7X8bicB1qZcYJ74LytafWjxJ4LNSaPayF",
  "key30": "3gdkimjfYQsBj2x4mg6bkaa6ue7GyLJFtyvZ5ZAYdzVm4MiG3C6rP5NRAQkcYgFdfVTFQuPHQyLxPLwpoAodoYft",
  "key31": "4RhT9SvuJUwbbp72zKH8nEGCHNeHKT7f7Da1sriqDqK2V6UgoHnDyQih8RXJ4Z4MemDE2UtBmvxfGsVq5o7yfXk8",
  "key32": "48b9XakfzcuyU6bwgqPCAMxdvxi3Hat3mahQjtm7tkYgxyKbzKdjpVEe1cYhWJcqgEMrDGNv2C4rv5wjDsAsHMRE",
  "key33": "37oaHXvTJrjQ5ZraWhqj86hc4m7zJSRVuEgz1gz2KXEUEFpszk96bS1cjc7fLewfbRNYivJGx9y6mwiiSoxy6cV2",
  "key34": "3BjRozpyWzRkgzVXqWsFquocavnzJSYMjyamTK7fzcZAFTzmqr6bLbbQR7jh8kHXR9d8BXonuowoqHL6ZAbSwoG4",
  "key35": "AGFZmSpoXHJXApgZKoe96n25fToMTcKeyvjEr6Dcu7SoZGMRij9FJAXzrqrAFXNE5PoEEC22xXBG2v1TzUXbRvj",
  "key36": "2fxWbBJheABo2QEk6W8GV1HCADShSX6nNKamtXokaPKtjYtHBBnr3y84U2SCaijJAJxRwJWmnb7SUZ7TU8S4NwrU"
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
