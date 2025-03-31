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
    "21Ej8JRrn8SKySrhLtHrhWmJ5aJD7nYRL7AkNN8eAWYnPXvik5QBtL4nC7y46yz7ntMjPeAxKHoNUZpe5DRY86pK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzC2JThGsorpF7SyvC4DdJisLpCSsLYzvWdurev8BGBjnuEg6FCtLpFzShxrWG7PtLXkPeDB1PeMyhogB1mLx3Q",
  "key1": "2HhhxbKRSTz7Z88PeRZeMZciNQzdKvbF14mKSRLq4Uu3gvkbj5XMjjaYDGJMEVt2g9stVQw5Dj2ADUdD7Bg9NdCA",
  "key2": "5hpn6Lm9FN1PYs4L5ZFSLJXUauD6Sgr6RELoqXZbCkL5z9JEjUSWxs8nqMfDLzYBfvoV3qWUCZ58gKicmaByYL3e",
  "key3": "5Wz1fnx9gJHcRkyKiFYTQdgFjSZLYnLqgNdSqKbQiyPiBRTn5HzjcQSC9uqxu3Es5e7Rk8NjovXYtfi4LV1wKxno",
  "key4": "3zFvoFjhw6Pjp3R3YpCWGYnD3JpVEciYL23VtJe3MoN5koo7HodyKxm1idCY3qyA8xgj3ghU8ZAUmMdPcwB8jhkA",
  "key5": "2U1mGQpdtSuUBRdLXdzVHmQdzdBa957qF9g4DJneyMvJXackokCJRKR45Yph5f4jRu2ooExLhiPJkGLCY3vCHm7n",
  "key6": "2U8oiA8ovrBka26z6xqaPiyBJmqoz1pb2ocTaQtnNxwJxkHdnAfjem3ixjX5coWBW9tiHcAe821cPvbso2SHeLdw",
  "key7": "3jPTf2Nowb2jYbc6FrH9piKtk7qtyLTMY6skPgDrcJhMDTJrHXLzuQKqXkc5z7s9wd7Qt82iLjkadzyCtwVKwM3S",
  "key8": "5hAuK1JkVTCv3MQSwERSHBqUn4d72cg537EagCnHsez9sMbEtjGRem96CsE4ZkZV1z3Gp5ocgsfXqEJPBT6rmn9M",
  "key9": "5xaHM4wPrPEZ1Hsax3Z241Pyd6z7KJaVjnJ22HSPipW1BauMFpvfv3owM3dcRJ6osToMCYQh9PkqbwJLNm4brRLg",
  "key10": "4GrHcf3QCBkjjoB98MsgWVNKnNyRhrqXe5weNdeHGhCTY6CtsMANZbVuxSbcGgtMatWJXdPmk6L1G8J1X4aiD87o",
  "key11": "64rN3nGbC7sfomxigWDHX4cMKNU6bGgKFMM2jCbvkecPebWmqrBMx9qdhBjKrk18b2sLT2hgAYWJgibQPd48mLvq",
  "key12": "4WMua4K6it3YsJomGLWfoauLqAJQub453bDhQLqSw8Wani45vt8YwpQjpK2cJnju1VtmwnP69ZTzXdvFUPfwUiuC",
  "key13": "Uegafubwg2UKCRKgZGdBBcj1RQfMbMQ4XcK8TCqUcXYwhW4vdQoxYHzt231wtQZseNvu1FmaqjFKfsBZajf6yWV",
  "key14": "63a8HeyFRbcT2QbuWi3mnq3XGkasNBevLDviJcuDuiyLqZA5drBi8bcQMbyau386r3wXPiNpamfNm4UvT4ARUMS7",
  "key15": "5QgnDx1u7X8Sx2Bg6ysjEfRw9ALUUxNrnuBCgvvAZgHHTSp5FfdvJqSSnxdpmhXN7rQwRQgcxjNLRrH4LqzP4Xzb",
  "key16": "3jbo13zBsxqnPErHgeSzBkWJ3KThXuCeNKuizv5o8QUUpTQXrnbh64XxHMTvQ34JhN7mP7qAtciD7DmP3ak4PToV",
  "key17": "58rMfKrt71qAMsnfRDcV1jHf9drf6ebKRGAfEq72kmfvgpeptC5KVEu3uPxDQgEtYDHfz4rcKcnNm5BXtH2R1wV4",
  "key18": "Ns2dHAQpJM6oHVwGjvBi44kZ4ikagZnXbDPg74SwWuXV3K6fCvDEyKcbdNtYmuMyBSDRf58EBfKS8iZ5BYjnUfv",
  "key19": "54wNbA38HpkVrCrUghx6yJDM8PJMLkTMEpDbKrzAaMsMsrEHxJ8oDv8dcvGJxycd1wrNZHL3xg4ijDr9TFRv6Xfr",
  "key20": "3ZbAYdnsMK1xu7MMdTKEQYVwtpxaGEP8871p7M5cGXKLUCdR7oN7h2iJDEwXGHpQhSHhNpAxFQzc17WvvourpSuV",
  "key21": "432NECzhKvsr1mtMm41BrrpBS65ZXwFMQpYrRV9NwiZKFXBeTTxLfdQYoG2rmyaMtfE1KkQTyttFvjZGTegUWf72",
  "key22": "4tHh5cEHEzCXisWzDfwYahtfgjrFMWAYcif6imLWbWyTKTLXZwBz1gXDhk23hfRVa2dfB6yLuf6mVwcNcB7GXvhw",
  "key23": "yyybQK2JvegBLxBXG8s85JGhxMdchZvLtmiqw5pH7nr9Se3XbtZitJwpWoorMQ4BwEj4b7zarafcKuEkmXGwp9q",
  "key24": "3py4PwsSrN6HtzCnJvyFsz8pdBeqm7P66v5g7nvcq4Xz1ZmyCPUbidDJ8PG3vZZ6HajWpzTcDwyjvrbdUYHkLeDF"
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
