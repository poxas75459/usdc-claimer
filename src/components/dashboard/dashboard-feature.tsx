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
    "3DT67zZiKzF1YpvkS4AXwZp3j9QdL6nsTGQAZergjeRax7KEyRoYKkdvenM5ozVk3zJ7j2c6rB9YDDZVi3VXM3QZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hwqpfdBakCdzh9z7HVerSKmwoUXMiUkwVSziQ3GzmD5JW9Po3qArAWsEKV6R8XFC9CeBDG3esmaHeiaue7vRKi9",
  "key1": "5Asf6zYyjRZ5ZvUrVtFqeXriLtvwzcqK8EZ8iq86HauVyVrSkztQpPiUyrHTzYLo9ZKwPJ6oMGi6hPm5kDtBWyQ3",
  "key2": "4bxeEZKA9M7BwNYxBXidSRxiLZ9kc7Wc8ewr6pBxoHS71a9GjrP8qUs6iTTETa225HJxnZkhcMGiVG3HATGd4NE2",
  "key3": "5k7xoK3h1cn934E8zR45Gt9JBwdGF3H9Qw5ZHvb2CvvtvUWDzXA8Th7AEPRYBEjmMep2mM7fKXxLXa9VWLGbwSwF",
  "key4": "3s96UmhWAZFfkTr5v4QpotDVDCNneUSnwRqWoRbrypzY1eLecPbqQpFeuNiKicTd1svSgQASWCowhMBaufPSkPmg",
  "key5": "5T9K3RBgtm8u6rvKTs8cK3seYFDaeALLpLWTGYrwGkrXT1W3fHcUmPf9nBN5Z7cz44FwrTgJKcjZEe2D3PH2ruK",
  "key6": "2q5J3ThQz8Cx7RQ7J5FLmcxEALtdaesMszTsSBKMdWgSSwzbC5CTLcxqit8khvJZcBVkzUFCThABquRBTca8Xzyd",
  "key7": "5u9yLHkr6SKoFrL6iYBgBsRiW4RmV54uE8MAHj6pfC9yMYjcbwWLq7MBvaUteXVqnaQBNCKLj58NeuTHCfr8BQPn",
  "key8": "3rWkgr3QoWtg3MS3gKuxzc4gpCvJHeXp6nco72Hwwrp9mm3CBjeXiAguNq7QnQobNGB2DiuRJkKWEQzBAUL7kTQc",
  "key9": "4JQxedxq2uY2md4nASwq1c33JxEaZ29E8wGhWGA9kUfpZpML4kRWZQDvWCeJdmCokwfWfHNgoFxQTNTKcrBigmyu",
  "key10": "a42m2VPFuTJR3fsMn8R3T1NJcv4uYnnzEja8GSHWiRS3MvGXQyBJssiteP8iB2XD63VrTdg4dohZBBD9cMcgtV1",
  "key11": "UbUjeP5yYGyo2FjstnAmFejkBPXXfH9pe7yYjTQCP5DfuFkf4Dqa4FUvJ3CXYtwHkoupzMT4WgeYaNkeNX2W61C",
  "key12": "4XcpQNcjfe3VCJKke8KaBLcSQY7Nudsy9ZZdwGJADMEfcmhwpozGSPQHCMhzMSG1M8bVbRsxPQDEj13zuXe5gxDG",
  "key13": "4HoBmfZubGSmEXyY8rmwutAbaWX8U1CQ86wQoE9gC6MNccQATvX5g3LPbeP8wHS1qToQsy367j9KaWKUYMaGMRWE",
  "key14": "3VUQeRF7TmNZZpg9tsUF5q1FsnsPLqFZBNh2JyRE7JVU4RBKsshxW7oK1baYWptvLrS2MdgtcKWhqxwwCA5nKwGA",
  "key15": "5w4Wkn8GQ8X7TdqFM4PYqF99FkMA3w1NyoAScGEq6pA6AP53XmhPBHyaaGisDdKKKe9AUVE8p75KLXvRtj4XJD1L",
  "key16": "2nV7F8NA1ybVUcTcUkAyuzRz8c9yMPqnNGyBwccy9wg8xPsNDJLhxgmDmLr7NoBtMmKtNCX3J1gQQBT3a8zr75s2",
  "key17": "4DjEcisxiDjxtWmQAtLpS5aaiFmp3ev8Eog5kcfnpLHmCGxZHNs3auW7eUDrYe3ka9L3wabyNu3pTUoydw8hxUYc",
  "key18": "31EAUJnyA29WHhGw7YBtCJi8XgBnoKi7bbJRorWk7rc2vmFmoTaFHJxJS35i5BzEwD4DJPkhUSZYVE6wexmpH42D",
  "key19": "3xEPBcpgzcmpUhNL99DkKfhpWjnHkNksXxmVThEENBXTyG7J9nxzZpE8sg8H7k4QvgqBzPHXGTNspKQHcmHJL7mC",
  "key20": "dJ55MEsaAPAZfYwKjzjURGHuFq7a65orSnS8yuRP5ZwEZvPYHSPcT6cnutqgMxp9LKdYqbWtDYpUxHKE8PaSnbG",
  "key21": "2VR7nJBaD2Knce3wLyh94ZnU6bs2zTFd2Mox33PbRpwPgGCcyXsrhCfPxqihAjngQYP8i3ayAP9XuY4mX3jQM1vi",
  "key22": "3jPBJqbUueWBukYUmWYwDcKTJRiYGkVKPPjj7KQGK7rEgfgooQTmvxB7zRCY53sgKb3RuEEFTgAPFV8F3saFbyJ7",
  "key23": "4wzPi5g8xQoKY45vcDfKgwQeSbwUH34MY8kxJFkFV2karGoSvwf8trF4tbZQxjmLozckw1WuBqRqHR7JGDkASb2g",
  "key24": "48ARNuWX5xxuLbSYSwFZpmoe7yESRGLK9i9MjvdDCR1qJ6TULst7ecHNnwciynMrJ4JwCFXsG1hpSjjm2LbSpZNi",
  "key25": "3955ycnavhxCeDQiRbYLctU1ZqeUBMh3UoEgrJ19Dk79CGptcVbs4UZH5wQ2VkN5GULtz9KtNXM696LHMbdhhqm1",
  "key26": "5v68G9C4tPHaBWXkcabpFkebvqfSXAQcVATQ2XncTcLxMqq9QVmgujyJFq7nZqgkJYJPDKkcBXssyuLxkJ4mhqmP",
  "key27": "3XU4C21qeAA3qvJSFB4D1iDe8V5w3YpT7b2ppbz1bCX2AyEqnTfnHiZHCBN792Sd1NgVDjEWa7XRUV2saUkmscwB",
  "key28": "4XFYMSPUqxMVHqnj1678ULiwQ2eWaprEHohytTTZiDkcb6yKbVbtXEosyMNQvz3M8CWviGSTvSMwrKxadfyi9aMF",
  "key29": "UrmtgKXmZSUdPYPRqwqA2izVCHeS5dgPhF1rYSsoVBuAzFkyACFjfuva7FFuxUhGpUnDEzHd8EDCtFqYHrMJZdx",
  "key30": "5hP12dxTbKvQkSCeJASYwHjoFrHWQPuqPaG1or4j9BVxUKQ77fYpKrbmzsSqQbpsKHTJN2hcBBbF3KNT4DY8Z34T",
  "key31": "LTw2C1bnojFnkMt8JkcMNpXTqHe3P1fagmrxcYjNfiiqZWF4o8pAQDKJrLskApbyaHpkk9vz29JDUjfFr6QUut1",
  "key32": "4PjBdvM3nKTqKBJcnHQ7aaf84qWp1mpw7mcq51W1eKMP49VVLTexgiy5NMd2QkJ8zpWdUMXn64o7xgqAYD6SQ74g",
  "key33": "3wCbracE5W8awMubyCbCHyt93KrobwcyGxrUwFhVptov5kVS7BkzpfaKfkCFBqg5PjXQR8UowvSNmd9aTZAcmwGP",
  "key34": "G8BEnNyx8LgPqmf8nfcAuXaYiLN4RGrE1Kdjx6dFn7vaDucRzmhENNMU1q3C3ThhJBcpqMmZZ8P1gJ77jrtQRdP",
  "key35": "3Nn7WguPm42mtc8epQroxiE9Ubrey2tqJKgQY8xuXhiZuuDkVHt8yXHiUK6v5SdfdMAkvrrbvFbXkcKDQTmeStDP",
  "key36": "37cmGLARaDGmLp4EXoeGvGkLfJG42nbo5bdXHBhbcCMZSPqRTcjpVXzMhjuTy4iqfEFjeZpm9qknKdPUfw9zi84e",
  "key37": "4SK1n8LWXU6zSFASnd9GzcvNLNnRDUfHFZs7b9oFmKqLvnby1RUoRGzeZQMpAmFuS8C3ARY2gafWWpqBRpnc1FKU",
  "key38": "3UCqBFPjcgKFQuiXojgEN19NdA5shtwKuHdMdH89de5BvpzhsXh3ggafFnAEEaKWyeucASQJGv6kUnJNC8jsKfHE",
  "key39": "4TtJeY4tnYvXKVeDM5e9VDjeziwn4oyNLdSDR3vqXALcbGJgmccDqGVTRX3D6hpPQwyLdeuemeDxLGafEZAXujAg",
  "key40": "4FfXURLkw1JRUUfHhYakUVwRfvfQf2e4zf1T5BuLBDhUa1ShFKJHp7E87CydZf4hGnYC3ednzt4xqkn7KjkRAXPj",
  "key41": "5rZSmpJi8yYEVgB7DzJr949pLMpKHuvmX3FSxE55HweGVjiHiFDboaz68fWTK981BhvDAqdoTs5H1MF82u2fiYZk"
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
