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
    "LACLgnARRkFUJNr34EANM1kFcFQpBd6d3Lqw17BvMZxHZZmxrcFW6TuPwJ4aiH5rRBLAXJ6EZam3zp5xyhwdWUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K1hKAJUmdv7cb36ByUZ5AX7QZSobDLWS4qQWDuBcB55KfGcSy4FU3yvcjLmUhq7vQdJxnXtheF7LCz1rMaPa4GB",
  "key1": "7Fo3jX34SdxYLKQKsq7NS32KB8VKKHYh5h8cgRpDjALp5qWUFMrFABV5isnDGwf2YmFnWAz4qmQjeEMdBtuboVW",
  "key2": "3nLTLrz1ELySi8EVW22FZUyx9DuFVTqWxAid1phbQaAwcFEtHPCtJi16MQj9r6DnBoYezvWuQ1fJa4QPTPY8Bi7z",
  "key3": "53kzkoW4Svc4eShW7FaW3VGijKqocXMEQJWiJcjhNh8kKUkCKi7uuW5Zh6DBJY8qQGmDzsBc8uUhXbMuYiEffoUt",
  "key4": "2GxjZG1roWXuzKkGiyibWY1p3eS1rJNy3dWQJZKix6awLDPbeXBzboU2ts2WugdY8bdZoh46yKouWLVfHvqUNkzA",
  "key5": "5m6H6feVHWGXxBzAp5ExiqJ2qAqZMU7bTitgGg6XN1KcDLt6wWhkZbWvyn1sXQwrfU8dEDg5msGbGEAeyUiGQbLH",
  "key6": "31dTq3hYxCYW1cwQidbXdb8rbinN9fFYdG8BNA5TuhBca1JyKES8kQYeH7wSKhqXPFbSCFNkmgPcB41GiEYHEjkk",
  "key7": "3mb1sbATn5XAgUSSqNrb7yq3BEHFArdW4q3Pf3awQdwHZ8UHFbmiCFXbjzWX4R83YMTLyRTxJ2XUBMybAmi7gLuR",
  "key8": "3T9dQeSofGSDLYyBC9UJAV7W3ra2f3zuc2SsDDcpN12RVwsBRM9AwRsdhHL6cJH5sMGoqpqXFsZNPK5Qrm6Yrbzg",
  "key9": "2E4f2ie518DcJWwsgz6oSd8PrZJJGvMgLqUZUa5keGebZQBZf7xhVjY2jxLqiPk8a62NAmAa8m8d6V2jSpRRzeYE",
  "key10": "5QoQ3TFGsh6DdUa5ebB8YcAXySCeaUvkHCMwmzrxtpzvfpoMPPrcDEhH8adARDQya92Pddr151odiBhbbaUvTMJt",
  "key11": "5Lv9Z5GoUFkpSnFb1VDkKa1od85bKwePLRYEiKnTXWWm8d4YPhojyHPdfE8D2nm7YKdU6nnmbPEN2SGce3FgNw8i",
  "key12": "4AZPQEUxNMkbQnyvgpTjgxjR8umhVZG8CFQZLLZCUJ65mJvpB97Zpy5gV4wG1gTtc3fBhVdgF9DWBLu6hp2EHrTB",
  "key13": "26aJWGJxQ1eNezG7rVfeiqhr3kMZaWKud8kxng4m3YxpRVeFZDRpqfbmoZa8zD5zpPZAjaaqJTCQn8sknC7kuwJx",
  "key14": "2P5oDKu6UhXVw7iEaESQKwjEb3SZHqLSxz9XANQfyvDAZZMUezEybBCs9GAG5KG4LneDxsUhJyHusXj54cmtWv1q",
  "key15": "24zyZ84JHg7m1RCGvswugNiotLMSNSh5nHTRA8NwyaQ9PzfvRdn4Hq1Fr8BXm3V1e4z3aGMhkPJT56ZmA8pg7SyV",
  "key16": "5nexTaN2ahqCT4Ceqi716EiVrV3WRX2b2jvas52WQmNKfaGHY6HpMY5KHwDQYZ3uu1tqaDoqUHLxGvmpP94tWFwk",
  "key17": "5zEUyDLyZjRztvwDDkgbuqF2xf1GjgPNjEL877CbBkjyVAo1vmdCKqPAY41qXaZrMJU7n8AxxUHQubu79bxoDinN",
  "key18": "123mQcmMHNvxqKm23JauR1RvQZv1taQKjHeP4VP2skyJqMsbFraeRnVP58gjET8jtdnkkLG1JzdTB56VxSXEtyi8",
  "key19": "Kokmht39AXFtHtoH7cKymNpJJSWbLoERqnNBLbEiScojbqaif9DwsWgPA7VCrRXqJAtzN3fe8skx97RqGHcZ8sU",
  "key20": "2GbRnnGjd2JKBVWUiTCW2FSdz1D7TiHPvvAUEiW73qCJ9sWVh5Tq5Lyyha6UWyi3Q8MmRpNQKVnp81Y1gzAQshHL",
  "key21": "3vyAM5XUWsWqrbcZToLbYpJDNYptF3oc1QUGTt5wXY1BTXMXQYo8UMePAdt8jX8oniBhtNDJmHNYXQgCRbpLfUch",
  "key22": "44LKMdUGoDJgp1SHiyPw7BvtLeW54XQGdS6xUQrQ2p7jzvtyZ5dQdsYV4u6hirqJtiUesZGgYXyibYsvw1wxX8An",
  "key23": "32EtFqZuQJ2A9z5fKeqLQrnXowkL5U9zmhV1MK6VPNuxhmDBts1RubRmUP6ZyDEUEER4WD2GDisaBYW4RGyGrzQD",
  "key24": "2Y4xZdh5EmDQzWEwT2khcrRwFLorYqSxJLJdpszakN5ankoHuxWquUfXPMhxZHjt3qFYuxneVEtPWjoCCA8qhjdf",
  "key25": "3Ta1DQ7FnGKhfPo4notPFyDPCRr1G8i4jvKUmP4rb4JueS1c3T26n77k2VV5vf5iNVSQtBB2Mf3Rc7WsmhDQuDva",
  "key26": "5n6viFGNkEhGR8bYwv7aVqJqaYSrZLbAZHWDydByNeaiqsMupW84KEywSNjq9AFGWBeZdVLSKxu6KFJeaHqysm8F",
  "key27": "4gbmxvWo6w6Z5mB2ZZpcxRku2hem2xzQhzCu1KySaknZoEgidBee1cXXTfWBRaKt4cUiQD4JfyhL7E3V4r42zK3a",
  "key28": "2UZMRuVV5GZUtarPp3dbkEtmWxZQxAeZRVbguytEU1dXbQMGWiASE21tMZEVqxJkxVGftkw9kLR49zQVAmnsziLC",
  "key29": "4X5td4RsKcaWFnW7o8V3zRMfhoZv1W8Nvw1KY7TfU5cByECzxEsakacsMJAFmVG6mc2LWksMLgJthZu2osnR3YwV",
  "key30": "2dxaM3NYvJL6GQ3JqGUDvm2DP7Qo8tmHiggxg3ruUzsC8DQSUoPQjZKL5cMRb8bdRrJ8b6BrfRe1gM4p6ykGRPt8"
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
