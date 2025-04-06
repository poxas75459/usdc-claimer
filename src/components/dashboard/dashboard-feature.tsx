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
    "MCSniaACz8iw4CTuPXagQQfEEx8oQJF1hD1SCwDhrtiVaE4gghgA8dMUwLFAw5DaYAhTooeGsaZk7pw6hTszFmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDWjqmWmNPgMY4avbPZZnc1r1yjbBxry4DyutVWbwzQnyMbSL1VdyW4eq7q6f3QuAcAamaKgiajEEJHNKJSGHMv",
  "key1": "C3YWZMb9bh7dMTq18tzN62aRSy97UqYtUbcssC6fGgAx39oca71eFDLqMgbMFEVbYLGKzjRghVCwy8WGUqdAr3c",
  "key2": "3aw8E4LHKWdHy7y9vv7wjKKMUKEFv5UrsCJVJsKJ8EZjdUfFrS1bNqEwCapzZ6ZFCJTDYLa3LMCQwJiNYtNNkubT",
  "key3": "5hajAj9Lwt3gcN9DwNvVNaTXSq8kdThSdbT17veLaEx1tJyw8P7ECbQhMud8dGxoiFgdz3cuaC1ZRFnQLok8tXMa",
  "key4": "4vDnftkM1faxcW2yYnT7vr7YnSG2xz7wNrNpJxdGsU3GNnVK92M2ftqwD3DAYZQRRNmUFXdjkiKq4jZHm2nfMXGk",
  "key5": "5nCGr8ev982ighseXK5ztx4q9FWDLYnf84o2EzgGvwrR8fFxcZAC9kNpCF3AGDsdMQfJLYYGuitwv7pQp9JezUKD",
  "key6": "4tWnBZZweiQAee3f2uRHQP6os9k5YtKzVkcPLEMkGQMFNMysPrHs5epzYU4XAhHnsspxRd1UkEZXaNTWf32j6MGD",
  "key7": "3Lswip1xoJbKHZvJzaGjzx1Yf8SH8Skxy2EDcve13mLqj9RznqcRpdYPPznaUGX1QZRb7yVKPqrjrvF5XCyTbtHY",
  "key8": "tUPApxKRsYJ5uLpCkSPEupYan7sMEUfcxXN7LFuRHuRMvUi7NEz9QFkLJa4oq4FUMkxysxdWieuQaqiK9VrCFjW",
  "key9": "5F81FMPD5jKPBTTpwGJhoKJCiE5E2MzykVWickoUSaoTeoaPaqbtG2eo38VDDvCYixV5AeZ2fyCD3f1gJXwEiZG7",
  "key10": "3qsT3wHmDweLdNd1fg3cvoiiWEBDgP2gSFZjHh1RxFfPxYdTAs7oqG2vDEK4QMJhdwWDwujwbLue6mbCNJ9Q9oeu",
  "key11": "4FhMxWBEw87cmt4aGFWhHxkaGWeK5PLSYyDVFWFfKiJGbPW5i6ek5qJWQAqmR1kCPdQwZgsHF7TG373QjpiZwYEU",
  "key12": "aF7MBZDXTnr8DLitXVbStDgMag8NQFHuS5QuomDCKrJMfBsYDuVqVKoainAfA9qLFN1aor1fHFZDYr9LooTMYrJ",
  "key13": "3RChhjuthCwZHJi4Yx27Weh6YKJEtjbmr4ZBu5SXVrPRSyymyEAi41xxuviKbvWBHPd748NTMrFS1yBpKitXWd2p",
  "key14": "2sMsEtZJinddKU2U3aKQBuZeNj1H6yUfawBBF5Y3QHCaCFcMUZv1DQLc79eAwF1A8PPjwaMqaADYo3rLUSk7t8nL",
  "key15": "5h6UgvYRkQ8Ysz75HLSCYkrGz7png9nBLXqRdL8z8KcjvAFE9qdPnSTB6KMhECcWTQUFCzN5PzHhmEhTjJZDgfdU",
  "key16": "X9VgcNEf1voEZLtZm4TBSmeSdmYm9wUcDqpBbR4kx6D7aWW6DeWDV8hryhPAJYxRnDR8wzYmwqgy7jtvHm85UwV",
  "key17": "5oRg8224Y1rza4nFcrFtKY58QcKTRWkj3mrNCo1aFTR3n7XCaCJaGLJ4GtofuUq3KrAjFjFeG5wqZT4s1jYECwTQ",
  "key18": "4FsEnw6GZa1GaxWBtSiDf2WNyYBLJdb2z1fam3aFmYUt7pPexKqcfQUKqN28it2qZyFRE8BHDbgY847H6JNr3Udj",
  "key19": "48jGw7RgtoK1GwHVhGdPrVd1h8VUyo99q3ighvrukRcSNoeFxqL8BF8FQyrWs1zoYRHmeUNmeFdsjabbqXJg8gpD",
  "key20": "4CvXo1QUNZ5FbxwUGt821JgJcpR9etzs5TmGom3dmpF8Nj65a5HtPPxQqJTzCnh36zc26aHSB3FVD2vF2mxQmPU6",
  "key21": "558cKxfVJhURHpK8niSzn1qDcWj94ncavz5viG6jUpTRHk3YmCfCbQq6hNhdxTcn64tFEt8ss1PPLpB7N6Qnjh7a",
  "key22": "5PRSYotCnK2z47jgYTEMSTx3iZBtvW4zWGwjU1Re7GRhxuYgjw31x83ZEacf8NcGCeT7MZsgM4WHxWs5D5VXmJRx",
  "key23": "5ZiewPQRcTYJx1dWajPNjHgH1mBA7rXT4hZc5drgRuhhYuzF8fndYkSPiUkgbxqEVn8W62Mydi2QS5LP3STtTkkK",
  "key24": "r68KWSXkvnb8U2gWzsEGGkAFMmNyTovTxZv9BA4JBaEoLdAiXHtTMv2QhamoFBmX77sjiG69uo9zTFN3tLb4H4T",
  "key25": "5LbRcKpXfzjbNSQdoVhdKvvRCSq5u813L4X5Xb1saHcBZr7b27rPhwoLQPaZQW6vzDdAtimWGjTQ9CaiTpgDostv",
  "key26": "3DRFwUEzrroq9dujeTd8iew96Xfgtffco3bGkqPZ4XzL4eNrYNXiwxTWVEyAZbBsKzZ9FJzW8EEghHFwvp7iuWH3",
  "key27": "d3Ja5w26nXS5yGF6TNaKH46AMVsxsdGjNgrqk9DCLQkMSC5Zgi7Jg9SjzNBAhJZ36Psh9B5CHNGdhJVH7Va1qj3",
  "key28": "Yb6A9zCYiLYc2YMwztbU6TBByJXPuYcqqH1hm53arWzAjXX2aNVswxPxYPG2dS7yzjFG3L9T7hwVK5e6DeLt6HA",
  "key29": "2oP5LwjY37D2dzFWPb4R3ZkA7b1nTHLVxLMgAsJeiAabrDiEyeBtRyJCGdaAoeKtTYdaVbi6iwPPMExQDL9FbFmV",
  "key30": "3Xcm8uMequ5gn2UWBf7R4USPDj1MHEBc84scgXujE2mNJmqbfEYmgHYigcNLdpqwjtkcK2h2Kz4xGSTLLBNGPbmF"
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
