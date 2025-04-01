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
    "4B8ubmoYWp35FR1JafhwFuLMR7ZQYJoPTRGVoUZ2KceJ64yD5D7oP63KVuAYS6pzmMbaKEkE6J1e8CgSiWaMZUrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uUW1QMaxEobu1VJDpG1CLQ3yBcbU6G6etD6WVXg7jMGrc6iC2QJcHC1zuqN6ZTLDZmAVVQpXJigCfponbPeYedR",
  "key1": "5DZq8nDM6VfVxHNSvzBq4TaYrqHgLNjxS6aPdz14qZcHPQ7aVCgmygha6TppA6VWjKnSMydp96Fck9iZJnTYqSLM",
  "key2": "2Jp6xqAycFAtpA9GP2JyPoAC1k9LwFzQFBq6qpMNysfkBs8rZUC9oACPXwpaYc6hAw1HHcLcPKH5ZJ8cN7Mp34cC",
  "key3": "Kw5thUEJz182tpjhjHjXSouWCpzPwZig6q3MHzF5fmuVBMujLFBodip9zAiKmosSuuToRqGfYCNX1AFqidCpya3",
  "key4": "4SbfnWZSyuExKywE4geEp5RE45dZy61WwQ2bnfLCpFGM6JGtpvMKaAvvF6nZd8MVJcLy6YxZSJHwjcMfbbYY7ZyF",
  "key5": "pd6xmDgBQmUNdM9QTr1C8R62wMq3aGYkXrzT5C74pEExoLsQzdmM2Avvav1iykRLmpvfawqAQoLuJmVKdEsv5ca",
  "key6": "4UprBski4H96aNuRsgQFGa5wWCqGcXCCYHAKwemDKjzEaKmzBiTsAoX6cEq7mSsB461ZXhkPEuyTdLJfXX8vgP4j",
  "key7": "3hzZY8BXNZUQEtGZU7cSgr3UQP5RVubjQd2QCtxLg8qSDLBBeCSzTJkH2vuXVTSLbEup7dryiDmT7SF1Zxg264DR",
  "key8": "4WB6eWSLEUJhv1aLBb5LiEDpCTTqb9JyUcnz6NXitPTD7gS2jPycwiDHUbAYxRXxG2D2RY7HdBUkjkjK3Ha55zaZ",
  "key9": "D24bxDstDiuJ6cKybzXeVvE3dQeY2hjvgLrumSpihuWPmguZEU5xEwdnhBeXTXBuJEbEVfRGNi8QjMDjqk8cvQh",
  "key10": "LJmBdY92v7vwSQuivbs8qhQFZFXdbhs4NC6434BJaND17QjobMP5EWSCWWckNkZ2An5mKeHWf3tBGpLoCc2JKYT",
  "key11": "2PKRcyZEfRRAGbmiuHMTZcnZ87AnJZeTeysjXeJ8AzZRwVyeMU3ixBymgVfJTShkdxLoa6jM45NBJ5h9UuXYem9G",
  "key12": "5nTt7zQtCcpk8wxEkM6DCneQKi9iCrHKKJ5Z8CRQCE9N1FjxSGLQRDbSfCiVCykwPPZYbaERtNW5AsDj6ByhNWud",
  "key13": "dFffLVrjmAYRGDEzbdR25icw5DxfNXCKabV6T7CDbLqVwGUy4GvNiPumz6RmUrXgSR1etg2wqwMZbj8KMqNdHBg",
  "key14": "4cUGGxdRPh7NbPasGhtZMVyto1aze1yAHeqkikXbW3wvs7PFGvmY7BCozrjsCNwWA2T4PhDbpkB1zYmEdBPyjv5k",
  "key15": "72TVkyD1iaTwBN7d89vGBYtLiMgbHmZBzA39mLxyzjcMmkChsUKXAezRwZet8xuKTS7mMKhVPx9dpYGLAQjfkDc",
  "key16": "2FsrrT9hy8tqzm5CqH39YkWHYvcPmt86KwBFiehzMEsopL3mdD21VyZ7YTqFnQAL4goDmDtqLxXKqgrwRYaMn3de",
  "key17": "mZHywE1RZVJFSpRmAgirYg5kZFi7V1UWUhcZE5iiLWMYfYXgi1UXCEqkULUKw5fgrjJH9GYc8Q55ApVfYu6wm26",
  "key18": "4mDMGW9R3WeE8VNVyMADDPwh96v4oSg2LXJo72kKG3TKnqH2P5YX7VourWLgPWAUcrQvd2YYhyNWViz6HrWfvRD5",
  "key19": "ct1LHPbyKqG66s2uihYXSzDMCkzsgbxLeDa7AroJQQKYY2gqhAUah9VwiUpory2WSQWfFgYiQRfL8Ftfs7UiLYo",
  "key20": "4zq1QuTejgbkfo2d9NNgL1KYWTmDYNkfDUJbv1ATASf7NHi83uV1ZRcL4PJFGVfqqwgKoXJrgPmruPwdKhFeFiJa",
  "key21": "36W9K2wovYteYC1ijMypihFeVVWSzwjZeJYe7RQ5Y4RF4fttgUcwMYFfgk8M6Dvmh3NVfEE2LGAh6WeqqSueLk9w",
  "key22": "4RjTUgc1XsbwaXVA39jrkwNzW9pBcC48jU3u8ue75E1ub86SkaeMArosZESdxUYNxXz2G4WTq5ZJ4meG51UTeJ7c",
  "key23": "33qNVd1Sy39P8vVJaPnUoEprjNKWGJA7w2EodkrSXxahPEor5YcQo4cSqU3spgewqsEhLVkExiPZzM31x4UPPwNP",
  "key24": "4xn52s5MgqZKdKzifPkNw54SCjgsbJwCkffpX64BqhRy1U3Sm1tvA9r6nfBzacfXYD4tnYpYTeLhAZokPEzLB5tm",
  "key25": "5wzztDdvxPqorEg4pGjt9zTPfKhozWnokKCnt9Bdpxt6PLMN7evneEmLMxzhtitETvq2HtS2xBGTJRPCrTqy97VR",
  "key26": "4Lb3iWq8YHa2ekkZ9hEUCkjn3oRLQ2zVkckfYyCPYuK3GtWEZMNC4neberekthuCUqmRuSWckdGkR8uqvBxBUCZr",
  "key27": "48jyrXaKD3eKSyp57MhyPDMoWdzS5Rromr2fWwYUW8NULmMkyKz5RbVjVzufJBd7w7HPxWkyt47sBxBW7RcXctk3"
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
