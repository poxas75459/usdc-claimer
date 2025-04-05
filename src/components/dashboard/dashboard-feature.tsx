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
    "3PPWgoP2d6uM6rd9pt5KdcA96fn1awwZGJGGp4YEa5BHpV5NSSWNPbRkijN341os3KBAi1bBLBrKiXx8mprtFzzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4xitkdk8vQTYebSw42vVka7mvNt8p1hMfm7fN7hcvc54X944Bor3nsdospDm2ziiMTVjVaeLtSFRgUvQfdKwWq",
  "key1": "4fgMRHsdXxxsCSn3pBZw1qoT21HKCS2zw8HEHvxc7mndUvazE5qrSS3cnFZCm5thta1xZEHWRF1Butc7WSaRmgqT",
  "key2": "xuAK5k6MLmPUrit85Zega3qeiWvv7aEVh3jG2rkETtkYMpnsKwaPZgzQUEXNZD8NkVSkvqg8YgZcmDei7MJdVQb",
  "key3": "2hx8DiP3kjzfc91BdiQYYWfaxtRPczViCsWSqfkzdHGftzW2Fu9WoTUF19kL2nx4S7EiVRMJBgE13tGQLEhyH5es",
  "key4": "3cvHHQCJ5hdnc7PaJ7j3RWjdnEKmpx7ZYnnJXDxrFkxc3CAHaNUjgT11gSh8RAVjfbzkyBSdVqNgNDP847HvmxQF",
  "key5": "fHrWwsP4vrYHdrr8rpxNhgHczCg1W6aS6vkd4qCkQmAjQmfAa9bTot8cUtrQpby3HrJSbuvHxbnLEBHktvHuiLW",
  "key6": "2j7xPmj754UTQMs7QEYZBot4cT9cgZBqf6Sz3zYnRznT39w6YP3f8CTbUuEnUEdSigc4xQayz7nwsGhPwfaAjKdd",
  "key7": "3JtqYxwKMW14ouNNaXULQAx4Hizn4D8VW7wCYz9hrJz2SRSLCLS3LjLGmp4wXF8akS4KjtSqSxGCeTEBBTBi6vV1",
  "key8": "e56fZQCXJfoyDqfxZytbbgrHKUjzbdSYk9xnmvSoPwNp5RCY76p6Xy7NdZtMkGBuHH88eRgohgwSehw4Hog2oTE",
  "key9": "5Z1NxtBKhMmfhUEA1FjMYyjEVtzpqqvAQynp7nLceSE7YBFtTFgcxseJwkT1HfD3yftt55nVzAAV7m3mdF9LvmMT",
  "key10": "2CZsi9zmpEtcdFDJ8idS9gDRP8UwR6T8r8VyiNhUyKnV85PmfS8zEWcu1YRmT6DbNQ7N5Kv4G7V1vAJWEjEDGXTP",
  "key11": "5CT5V2WZhuePr5KhJnUb2AAsRD5pm6ACQJxJ7E8y8Wi4mtgQwQm6DBAsKVypmhsrufNwqocCn1ieyDH5sGhPv6VN",
  "key12": "2RZkSJY4AnJhmD6TkGZr3ZWKHudP4Xtmdqzia79eeswkF4ZNLdhNxVkwopoqtkAbE8RkU8DB9Tn1kwsNZZ35DhVo",
  "key13": "vJJsodmzBJ7wGgSMqwt58Sshgc1VKaGG85VEChK5TpUCdyib7NihBhzA725yWHi62Qz8WH4vVsCkuWAScZD5YQn",
  "key14": "kBihK47iJZNqwaFrYFo4u18hkvt41FM65QuZTT6gfnVfFAYpvJDRXypBztGad1tMDxVMsdTSijug1Yz6NWm4HQk",
  "key15": "4cLAj2vQv7gEPzVmFNHNTeV5434cwHqXo5Y5omzUnCfFPvpjbgrwJtckuCurrSiT7x7Nc9JoSCnsfUjokCCAKxyE",
  "key16": "4qQUokWQivwXX3rvm5wM8LmPrJUrTEdREMWmR1JY4MBbqXN3ZcZsfkjYocq2Fchj82yqBhXWFuEwdscnW7wE1NwN",
  "key17": "3mzZxJrMUaEzsk7g9JmxC1ePPjsBvPS31WPAypPRQg4bgm1UGeJ6Z3UYkv9nzWNzVrvYvgcpTHujLQyLqtvA389m",
  "key18": "v6gZCSsUXM17NeGRvkVuwGJQgxiMUoMkH6XCbnUY5kovPhXJwD6x7JZHPSvcoZzN6sKhW6r9WJLSv96LvPu4bK2",
  "key19": "2FSzxGmygkN4JweAFEbAkNTxK6hyPKXXQA3QkzXpboW6gQA1BB2vS3D9VsTnjmwFJpQHa9UDYbb4mrTjACJNpg38",
  "key20": "2TyNaGh5V3dnNp8gvLtbVXStwbB5UZRNBeT2U2xecdMpHxAK8kkpVD39hHNh5kafkqrr1GpFT9sxoN7qaBH8qcRS",
  "key21": "PkjWsRqc67oTVzQvzrewJqFqSN555eLahHuXAjTD5d525MkcQKsHfvLUhT62oBnUgcg3PavLqKa8TErS3TKZ4ut",
  "key22": "3jnNHMjQfVE3LBaZQhkeizzmB1pVYMkQiHdCgBrZQ4oLEsmkKcBLsfHxmSQQNJraMQCQi1r6ZSMEmTg8bidriuvs",
  "key23": "qMB2cvVovtQbyXZjmhEYcvpDGmPtBPmEJL2sJTEiMpdRJvrofc9Rm9Wco6RbayiyMT4s8epAjHa2fQPshQWXnbB",
  "key24": "3uiRPeDJYi16Wdhxzevq7CBzY7gJNizsRJerFFEHbfcUiifRNTHGufHVaMn5cVHFQgKtYXG78MfuGgnh18GUTYpC"
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
