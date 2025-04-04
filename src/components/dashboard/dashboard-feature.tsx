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
    "3phFd2pdxdN44jpACwTZSXhyScreCMuJ3UvXC2Uv1vav5FY6PUtpqbFRujwmmua5iZesX5TYxYgvoDup3hMPYEnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BQLfRSsRpsN9vvQT5QQTaEYrkfATc3qV9GuJGyFTMvPgK27K6TucA3xt1juvzxH4MaGKwmoGpA7iwYA8kDdEHeU",
  "key1": "5FLxeFWHxY8pkXu5eaLuGu75464s2m3t4PExrp9MLW2btpsXHYJcjD3dnsJriXmoysvRpE5VeALqiLcSS33Nq2h",
  "key2": "5oc8Npm6SBvx84HrNJMYNFBBoAH6gN6LD1mWVWnTW7TMabq9Xn77ZQiKVGhBpAPBFajY1MBHGR9scNtMBgsBjQsm",
  "key3": "3ADiG2tgQfKsMzsUGDDkGwUhWQFfNCJ9qEpo1MJfjzQZxg9qoUChS7aGYnGNNnC17kapeLSShUeci1kc7J6e9DoU",
  "key4": "4Uov1gadHo4ABp2jV9vveYMseTZRQzb98CNQ7fTJyXvcHVWHkiRijBZUprnBVDAkoeDiyXaKSR77MaRZCJDhRRuz",
  "key5": "3tv11fvs5HpiyqEFkJVpKM8wcX7kdrs3wMusy4J8GTBbucPHC2kxmuZ8yBAn1LLqAmYkgGJAnLQNWo35PquCmSCL",
  "key6": "5yjF26A49wSjzLvhVceBo9ohnDYBN5U1RVhqBmBxQdgedYpjhS98SDE7pxYXWq9ZyWh3YzUoKHodrDxih8r1PbXk",
  "key7": "54AMSchcik7TuNDcknLwjoxwqMVEk5xqPjwCry69UCAQhUfQWvX83Z9FYjVrab6RV8C1r8BYCUPYCkp3eCyKbCJ1",
  "key8": "CW7YaZ5iACycsh1Repx7dkUyriExJTrjzMPAMgQWNqqVD4Q72subXc7qdpkp9C8GYP6cWE1ssP9yaPKQVnzGhbn",
  "key9": "3BA1Ac2HpkLa1EHwbjq3adnWwrEdZH9yqCiJo2NHZc5Gb9oZUX5sgFut5jAj1DUi6KLGGtmhgpmaUuaY6QdpnmAS",
  "key10": "5QXgSg1mT1JisQLt8HHmqhmagz6EtpRVfoMEjpVF4bLwxepPiEeWqM88HKixq13xocB5bDd8Qq6grY4Nuqd2w3JE",
  "key11": "5BvzSJjHyiVWukj1krVP2Fy9QG2wXVPa48HZ7dDrh42VH4s1V8T3t5PJFLyziivWa7iuYLKzt8qn6X5ZuZQYLNP5",
  "key12": "5dcyKEaMdjedd5QUcXRzg9tbk3rDVF9Q9VeeoYZKjDeqK2bRWoT53u9zbuuPyMbQHKb9Z37fsDwFV5xj2uVozzpa",
  "key13": "4wKjaSJ15Xp65EYZjZQLDauN5SKrW8uhhcxMtSTsmZnLkLuC1KaS9Fpp84SvEeWkJUvyqijgdH1HKKH3EHNyGqLe",
  "key14": "3Kp2Fi4PQjL5WYtU92NmrixJtm6PCet7BVUjBeEXok2vV2hVXNQj9tdd6HYxt25EpykRBbzr7hCqEhtKLwoM8txp",
  "key15": "pXokdTfgnwL45aVUvMTUCcrriZb3Rk83Sn9vAfVYPyL8TFQ9LQazL1LwBS2q1eVg8JmQQe91H24HHh5zQqd33e6",
  "key16": "5wY3CYyr5mi5k6QomMS4Ri5PDwzLeXigy4MnoYXrCms7TUmegVvvki9JJc1GFmWeYjoZZctWWvREVUCypgTXkrJ",
  "key17": "3NBv9kLvCTsbYLGcsj9rbfNQiAdLaSdF8AH5JWScDHnNFwppWMDheKzRrAxVWpaZVcVEUj4ox1Vo9WgBbCAbXXzJ",
  "key18": "5C5HwsfumBcna4EhBN6PB9bpH6PNgmpMv24JLpnPNQCnhrGxBktxK1ZbH4pmBsEz8bPpqmRrcDtbZVYF8fAf1UYJ",
  "key19": "61pWSBBXoNButD4uiskybopNeq8gaf7npqivjRx8PuvoWzXHes998h6Pit5YZNpv3PjHQUCQ5VRiz4xeGt6hwHR5",
  "key20": "2XXvWpoiSV1QuHv1QNoLqqMA6fji8zXhtnEUFsLczhKYKPEnq6wvi2hMtsyzjByHgZji3n46MxV6UFE9nD15t85W",
  "key21": "4ngkYvVDmH6Qma2Tub6ERzkBRDFybJLDytq4oYYJE3XBgAG1jAudVNwr6RWjtWBEsHm3SLfSbDJm3mtoXpo8TdG1",
  "key22": "286mVNCBMsiVVBV1TWWy2sAkjTo56b2TP2YGye3YfJsZt4ip9df7c9JqKhmdfJogQQ1inV9RbJ6Hf2sE2uBWUkUM",
  "key23": "PF2kwAaeFh34MbMef4sWeq5sLSkFB7DT5oUVxD8dcaG3t8qAMRmjGHgBwc3MLYykZc97RyKmwsFwDBtA4HBhvau",
  "key24": "3ZbFeRpMxhpVteHrKowXsm9jBhZiimkio5FieRPf61LTaU4ZX1A1ZtiJyD18ucHhAZsD3A1AQauQCWwixmPETdkM",
  "key25": "28K6H8b3v3dqFY9uqNW5iHVtkdxvVMEcE2aiuywkSZJFkcnBrmUhNbBK7NjqkibCTnkPCH3fVbHpdMhAfQaEKraf",
  "key26": "5UJGRnsCngHgVZeQz5qDj49NsyyfUdydLrTjipun4tCJNhdDYsHCmj73WqA5fujwyq8zmJS2vb9qoYCzUGFze9Jt",
  "key27": "KDBLQwjR8ie9sNatcenS4s5ztfG4rGDAWRRucJ23zQ5W6GMjuD8DH4tiAADttzkSrRc8Ux8JDQPZr3tBerfNxJx",
  "key28": "5CMr59esMKoRp1WGmJLjagzKmGQy8LUZctziP1QPyhfF9ipmwp5ZXQqt96JjADyESJ5o3Sa7ABjamrXQ5cx2N3dS",
  "key29": "4fjLvKtyPoH11iXTPhLzFNUZwcXC7HVuZqusRZrmvNCd1L81jE7sQyLYLfsNPZMsNQuSE8kVnjEozEYfoZdZdszN",
  "key30": "56QRvKw23U6u3uq7r7335eSxTEKWvmRuQ6zr3woeaSJdVPW8oYthJFtiFHmcyXDEVtomXoDiXE58A9Tiuu1FFbCA",
  "key31": "64D9BQvPsa3wNZixdzXEk4VguMgvL8eBZ8p1ykHUV6fSEdRWsxhtQeFYLq1aws88vcKsUyEqzZB6kkKFytA8wpH5",
  "key32": "4CbbEZTLdHErpnEoA7xwn14EN8TJbp3JRQAYM4RhtSJ7rL4WbiZtbQp3qqbC4LGAhLSnrnLkZ159RpyypdndqZai",
  "key33": "2MjaBQejtc8fWnk1MhN99HDSoaWUFvC4ybXbAsQvxCBSqdt1rKAt94vpncVfnQAEHbeU9rASBC5ZXRQJ5SHbsmAY",
  "key34": "34sSRHtaJCXUuAd8dbxuxWbdtoeGCwXEvqZznDZ2VeNFFdwUx3opngm4pCAmmdXcpJK7HZc2ZAm2sE2ch88TePBd",
  "key35": "vgVyAARX7uxQLEwCsSQ5RkhS5LbyXgpWEkjia6RgvN1V2V971FUykFk3g1Mzhq19CSwcX9mKN6W13yBFb9vJZgr",
  "key36": "bTYCV23DvQB2BHgSkz7tFQx8Q5rchRN4wpmi6y49FMrizP5N2p6B9W2U13fuk99unEVACn2VJJoMqWiBxKDDbWX",
  "key37": "7kdkSofRmE5cpWuDUXAmKhXqSNNP7o5RbeQjrcPAvDXg1j3A2peWnN434yMcxDyj7F9KH6UJKJ8bcgfguvGnceF"
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
