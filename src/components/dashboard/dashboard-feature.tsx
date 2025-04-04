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
    "4gZYGfBbJFkjL2SfNFpVDWBgHFyZWQQ6QchWwio7T5j7yBfMP6sViWLKJG9e9DbPrnDqQTepwXyJW9CZAuBAwyqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CvaceTrGEzqsc8RP3i6BXxKKKY6y1tkGgDj46VSWWQZYyW8C67KBkh1x5sdkd6XZtPfFqoRuD14g3TU7bAcHY6p",
  "key1": "4dT5r55oM82zJ8vukVX3QKkNA1phRfbsZzaQ8iZZbBU89KWJz9H5xnAVS9N6wWuGFteNNcFKaB1pnJtYTaw3TuyG",
  "key2": "YL9E9J2qYTJabEykFFaJAAhJVp1ifHSe51Q2DpFnrWXFRRx2p6VDHvijNYiFnBhX3wYPeq2mWkdibi2rsjc3oFg",
  "key3": "3m69SgYcTPkvdNqLSQ3GYbcrLT1vRuRWrtSa98Uoab6mvJMsZHP19KJTQ6jhuM7PUrPk9vuGkH4G41Kvqp3KpABr",
  "key4": "2Y6CrwBqwV6SuA2tj7c9ZzDk29suWw9w2VXVFnWc7SGNNnMgDNzMdvpsKyiWPLgt7Bti7fckB8bVtjo5JKi4SQFj",
  "key5": "4oLtqxJrZxVENXibgMAdVrWTr7Y58JLJBG63eD8LUjYJtoorr1fsS5aDZP85M6WW6BoVqYtFHJBQgbTKdG9Tq22U",
  "key6": "hsNB1B9YdQ4ZY2Xkom3P6fjnzSAXjvRv5mqDnE3dyR4z4CqzwTcreZVE8AH7W1vpM9CQUR8FXdTNvEkUJAcTWcx",
  "key7": "2LHNEFGkNQ31egCVa6L8WVqNuA3PAwgyoNu4V8q9qH1sSDn25dVhyMcWfTRRNCDg879ssvByF4v6BPZvt8vjAodg",
  "key8": "3JKzpnwaSK3pkk2eu3ZDoG3b9kzG1ceLtb9cnzk8yZ9Kgh9xaf7mqGiB5DWmHJx84gSZP8UQXqQHbP3uyKmfhEGL",
  "key9": "5wV9uh18hnnWaRZ8yajDpUELpQVkP95tgxrkTTnrFfxxGZdPN9dRqCnaVqxgYkAbYbFLXaKQFUNvQ7u3KBk4ohHa",
  "key10": "5Ysx28vyhyEPngG5BWMM3mPgzTnyap6qiSGUHH4i9fk6oNBg4nYQNiyYd8k81RtzEmrXnM2YhRNNZEFQ25RW7sBG",
  "key11": "1wSwkFY8eVhtuhmgZRsdT43YLkFyVXbGJMDz1PazQbCdpA2V7iTVGWkunTnwym7yx9SPRPLnP1cmjaJS7kDyAvE",
  "key12": "Ldqc2WtF4CYhuoGWMgbH533NUiXdd84uHzwhG2kdrs3wqRsAEiPrR7VKVWhxRC3KZpESHuef9E8VRLvYqKi8oK3",
  "key13": "2Z9QqH74atHmUbXiMibYPfNCUfnw7AnAvAzSpoNhYbJGMLLW5gAMUoAocMXroA1DF1ibsGhvGkmJqwjsL3yaGxgC",
  "key14": "3bs5C8i6AKDdpmnE9zYeieChNCsy4kgsKkVYPxdhRPrPppRaWms86dGtBMUNx5jPwmAar8BV1y7UdULzxM2ftGkb",
  "key15": "5398RLoMpPGcaFMHkWmERzRRJ3UXk3GSNQQPHgedzmykfHUzUiL5R8GYtQWscG8RMr2w8fwWytsGACfhsvagmfVj",
  "key16": "2zAhAWx4v6josLzpKnDsrBeSs9TXjxRN6bbYhJaXduFswCV9JfiAVYFmJWKwv5URsrsWFzCHUHueTskJgaD41Nkd",
  "key17": "6692H4GGCiR4GS4wTeK9MJjPEbF6arjbvr77i7kEczHFZvd5wGnZRVBhBrMpE8db6GLwcR4GikSefHSFpfw8QbK4",
  "key18": "5PAjWKCW1rEWmuoLaT5G2BMYtiJhmed2SkrQn566FqpQ3q7fP1Sms52dDPBEmjFxMsdqHQKfbCN5XuTGxEyXCMxQ",
  "key19": "2FkM2XEayqHr28iLVUr4PZ1bQBAUqZRqgw5taNxFGCHY8NXZW221sZy1DaeRsDkEjWWve9gWGU6isitGFWddwJGv",
  "key20": "Pjt57gc2t7V31eDK8GXu2hkwEFJEfMKGWmxaXHfbV7Nmbug4XpD99ajA8dRsmtokDRX54maVqbDQT3uyXSKb93m",
  "key21": "BqDzpwmdc7UvHkMVvTfP7qMFmiLaqz5Rm7xuX93qig8SxjSEp2mF9dxKyYp57cqtABGm5BtLd8pGGCs5E5ns5KK",
  "key22": "fy5HnZMEfNPR7gFqwkJrX1t7GqgjeAT1aNnP9N1dLbBW35HsKpKy3zjvaQNkkTgMX5Y7S9EYaP3CCvcv5E7TUJi",
  "key23": "4kwj8B6v7vE2fZNYzoLq4jL7Rp3QvH4gK6fkktsWcZ39Fqg69nwixer5uvpvzfDg2NwNefDKN3J8a19WkGLmEuSz",
  "key24": "4xZewHb829UyxCPKt9j4YsPrac271Z9Ks57cyk5PHw7stHixvAaQLxaGx9J9dhaLaKDFhyBLj3nUnnYTTqstGF1U",
  "key25": "3nvg6zZ8XU9PUbhuabB3PaNSwDB5BsDd283N57kgDVAAqd6RGyb28LuFnumu8wzutdA9Wrgxd2Hs7aVjjcN7ZURs",
  "key26": "5STbbJj81BzRm7Dcm6taz48d5CPG6zazGqxijp8xEbXXdbg5TGNKXHciJsJYF6xQ8p8qQd1aik1m9xqWmDnQXbaS",
  "key27": "4m5dGftt7jCejmxxdCvEojFw7An8vod5Ma3uJ7ekxe5VP13eVWszeWgcHNHG8GkCdD96LmusrcqpUMJ1ifxixQqF",
  "key28": "tZyXULCerAd8tLGnQUkjdThBbAxvjnwRso98b9MQggEJbe3ZTDYYy11NLMYZDWgPr6pUEnAHnkPgH7Ppr8yY93N",
  "key29": "4bjiAMaV7iMvnhyVDzFMLmmswXxi8SDx1hjEaeSvygADhcaw7NHUhcp6xg2sq17N11Nsc4fgKt1RXtjVAy2kYVDK",
  "key30": "5L3SFX6i2uRTQqhBKF6H4WLRkVFUuaapzZUAo79TBciCypguXZzNbTaULMvkfFvU73QyHfJUJmsZW8BL9pBydwyS",
  "key31": "TZsXg4LRmhBmFe6kEmfeCEn6G1hRD3WxLxQirsVve9FVuvgJxtZHDTWociXk5z3cV94HWcBgzeC2JWfBK5gFZxH",
  "key32": "9cPsbNdnpRKi74nDUDQSJHQW91VrMFpWx5WTNCTJaL9nHKftJ61pdzYVV3rBbztabsXCYmXJh1x6RV6Y9YwYF9V",
  "key33": "398neix8hhWQ48sTdRiQv6j1vUb9FcFJjdCVTkTZpp2fLX8165R3oXeGrAyGxzysmFrqz7C6BmVM2orQ7XYFyL9c",
  "key34": "Vv7pzRd1pDyppJdGBUyxDHXE6mBtBxnFuWH9B6Wmi889HdGb9mL6jrSEwo7mK5AmGbadCHDq4toxvoXQuP7LvNF",
  "key35": "3r4hb9Ku3YJcTcbb21xX2wBagf1YgibKG9Ae179LWWCcgYB9ZJhzhXKwQtKLT1iXWxb1BVLkgAbibJJpmJfJwyHP",
  "key36": "2zFyDksht9DsUPv8tiUqfhVkBf2ANNT7FC51Q3cAPnCA2aeVZuCBv13n4ii5K47sJGMcFQgBYRdF1F4T3tbm4nRA",
  "key37": "5yJxEW7w892KXGcnAomhH5p8Q1NU2fbT7VuUMJjb3SHZzoSpLagHUrUPGqW5nbDJnxw5u1cTtePuzdAW9Rha5K5Q",
  "key38": "3SoapjZaK1AtADSvoQ9YH17JQeFVGQCFQmcXcsqzvHvCPX8mAXVLMm2wAemNtH5SQU12ovY5F72oqVEHCWDyapza",
  "key39": "DGNAA8TmCpTvvwmBAsbkHVkQXa3ep5mrE122yoZMiYCc7iYBz17jbtx8iz24NtecKyHSpTR4PBx9TUtNfVD31PZ"
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
