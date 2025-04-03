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
    "5yXxC2b7xDXBDwtLSwc4zTtDoGCgMzk9wYPEDY1h8eYUz5wvbRovz8Evyq8c7e9ZB9RumJuVXVvv8ueDDgUiatEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imHJteALpV4NsUjMAZLtkfJHoBK4CuCWGL6yWV39v3Gp4oFYhA6RoMMUPpnZw8kc7qdYsZTd1JADy6o9CaKPcrq",
  "key1": "2Ga1AJHqEmabXbXxB7cu85CLGGbv7qgu3jC3teGUCkuvVMe9wTsa4jshLFwtbzSJLmuv76G8pWWavyH7hZGv3w1e",
  "key2": "4GU3rXfrjCY8ThmAaPFi9uZByNzMTVQy6h95kSYpza9YYdkCvNS5vmUJ7pJq4mBTvpvkztPfXxXDLr3Vdwiotk3C",
  "key3": "2gv7JduQ8MUkCA9R7RXiiTkJZV36RRFFULLD7sin3nAVdavVfv44XygzCHH4429PLQz5SNjBeGRg8Zv54ghboHsM",
  "key4": "4UmLrZKz5Q9XTMUeQ24Xob6HZz4fCitFDBPPSMEacNZQXT8nNWcGnh6m1rSriLizCopPXkaqAHf5sL5XVBtyQCWg",
  "key5": "3NYA5KXW8GhRkWoWygaiqziXtfbeb1zmPup8gstaD6tmiveZ2Zc496gy2CasJBq4ekZnCHAjsvHRN9uHPM62RCuK",
  "key6": "4mrSSPLhXRDRDGyjihcmygnM9x9YpxNbxdSxY296g32bhDM1E623Ew5GFteqGYYyScjSC22zWMXLjTTFRqPvqAMw",
  "key7": "VxNbfPXoYD5xcGvVSwQntQKbUBC2HCCdF1nrtCKtNr1acgCFo23NQTQHH76RZWNYZ3dLdRqEj5WHkUnkCZPhQ3W",
  "key8": "QkKJd6Yws3ecp13FGFCqC1qCi71EEHGyjU8txgRoJ5PFVhy44jUfzVwsH5HzCzrbaejtc7Qtjqqt1ygHDeJhe85",
  "key9": "45o7BVmiyyR59u4NutxPcWBkFhPPpjoyoJDgwo56aNtpnVN4RRHRW8wFxGRpn1KTZCUVixGFhK1FYT2Z64iKsxzS",
  "key10": "2Tqu3WsLhZ8RUFH2o3FVht4DXcVuU4jbKRbzv6u2ETquaCJKJvvJx8mdYkJPiKyYYpRR1xURfRWsHaUqERc5yqYv",
  "key11": "66QFTsAtmLFU7xcV8PajfGbP5YYFmR1BGRUqpBUPpMDYB6hk9tbV9BxfQFs5goLa98nyKA46fFuyLEGSrNK5FPWX",
  "key12": "3ZDuJBHGKRuBb2CbztsbbVjNVNnr67WXnejrSMmEgND1YygQVcVVhL34ZJCBj4u7GsH6qkGnfnMSqPK9inAwq6mN",
  "key13": "5treCuxPiGHq7XQ92KKstwHe8EzEn8scVEhofNnWAPmHVNMgRLgpbJzs788RJAQh3u2jQTdohdHKxb56JMjuJTGi",
  "key14": "49phziurUn52tTyK5RPkTdwqTRXiZZMBM7UmpDfwfaQVCtXuprjwZtL2DwaVQ8g8sY5LHiepRa1gqkwtyMq1bZNR",
  "key15": "4DPMuEGZhKdfotn2HTAgzxJ4fNPBDpZcPJTnvDoD7xgMKfBhfKKdHNXpoYsNZatkLr7dHzXvUfUVkaEi5bMpXrkd",
  "key16": "Rr1xLRUAJm3xyzqnvLvHm5auT3RnmCfogyHoFrVaqHURSYYGMonQNqfexNyDRiycCzfdumPBm3d2Jx1QyAw3tgp",
  "key17": "5PYxV8AZqcc9kieyMeDH7EYxbVvvaRTQAuzMCNNEWwvWhgSznojV6bDyhU73PW6WqiWBKsWSd7oayLSSNCaG8WNK",
  "key18": "3QjKdx4NhNYNRXHDdUPzuNZ4q6xGD4ZED5NeLeTRVkunDEsNQ6CREsXikB66zKjtJ4tYhw1wytEGHPj9A9mnBtTT",
  "key19": "67E9J5Bsf1M4WxraQozRcQem7cXxcJyziwFdTE8gELY6d4KoGPd8aiHCWgzZvMZNy7xGEsUf5uGW3QmThXp5Kc9v",
  "key20": "3ae4TCQ1U11pjr6QB6AQY59WfxPuScM1tFCik7FXFx4Dpko2j8RyxrAmoPZhDSmw6iKEUgN86ToDrPk7Bx7QgSwc",
  "key21": "2ykK4vRJC4Qxuwm7KrSHNCogwYZu5YRNPmMAWZprRrM6jAvz6nB7deXxrQvKR12VhYtwNyvUmSFdvTK6wrUNskqr",
  "key22": "4KQZxzD2JvTe12F2aQ4FKv9f4B9dQkbZWRLuv4JYVoBbReZQNpodHgJKk6tijces9jXr2rcjDiJbrRtmG5aiyRzo",
  "key23": "5LvtZWcaMn777C9wcXn26tKzp1E6owDPPFXq8J6LyyUMxFxZnBgSErhbKm5Z79Gn1LgMr61vdxaKbcEEC6h8dD8x",
  "key24": "2HTPsVVo7r9DPiadMxNoHNaFhXoXp6AAPs8gqMKr8fgoMMquNpYFi9X4ehAfhDXVfYF6JMHTUL886tAnDsTCyzp2",
  "key25": "2ttghvHw21MLRXw2kNLMSWcqb2188RBcHtA4HQ6vT92xQ6JJEY1b67CTsdpjXtwh2R1bbmMqn3a12pmbB2hzp8a5",
  "key26": "5qQVnbrPJB1XW56gDG3kmqtwcHPXdYxpaifaoha8Jawe8Hxx6gWiyci1CUC4a34sNoYG5grMENgLZxSfZFodj6FR",
  "key27": "3juvF8v54rrE1Rm1hBTUcBoeNTBcQFaUy7iYLV4ZcLAbZtEdzMYFhs1bY4caKKzGykfFRdnr9HduZTNZ9NfZ3UkP",
  "key28": "5tZ4g8B2AMVvXnEqxzZ3EDmCseEHVSuW8zWomFZ8YXn58mgW8vqn7MGsYKRzFpKrhv7csD2yH75Mwq3Ya8H39ydw",
  "key29": "2ZEiceQqT9imceMcGEK2CbiBW4rXd8xGq7ZZYXVeYRsE71dqptuDYz8bCkvZtTU98WcnkWsLA45D2XprcwosRVqe",
  "key30": "4iiCaQURxrHX62uXX3B7pJawHYineHUFKGt3yqJEuP5ttJznqVocTgVCoZEuHQN9748HD5pRfiB6DYyQFnn4xHsK",
  "key31": "44JqVHYPDHcnf3meNvTzqXHd2nLD8AtKnW6f9o6QNBWYRpbtzaKzBB6fhKGwAhwfg2zdpdkjragknWqYvWfVucyZ",
  "key32": "3cntGWQaof6wGssuBbopoW9ogXW4drvHruxis99kCrtha1tx5pQypTtXYc4g7J3Er4frq24Ksj4nACZVNjD2diFK",
  "key33": "XkQRKa8dRp7LBHpu5df3ka89trtvcP3XCXJm68SSY9eCBy5fs7vjMSoSTnwVVENAtpjCa8dkWKXPKLEG86vxvcW"
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
