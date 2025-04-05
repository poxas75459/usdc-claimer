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
    "3AJm2ojbEDEkCsvNs7zmHCsEwAqpLrkn2A7v7AUna9d2LhpqSVgySF5nx765MB34cZ7YswbdeSH4yFipws63MZzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m4S1i55QLgn3bU1FqLUa8DVjGwf4Du3ZxKK4C7GqVCDXRz9raaCY4VNiZ2Gu7sj9JycjgfCu624junGD9G213Bx",
  "key1": "2tHawHSeXsj71KKiN9mkQvk2GvX9m1N991N714G6wtUjZEW4H3gFAK6QjkRxAYEuPtWKjF8DE7VnQccT9xyrDEdF",
  "key2": "5j1i8ZZ9Fvt65cUNegnG1rfWPFKfRj51TV3BAUnbYcjjCqsLYwb3GYjzNnspTKzn7ahgSXhCtia6mR46mY9Emq8k",
  "key3": "4sBuzVPuzfSB6vdtZkctvcV6GtJQugmBpq8guQKKrPm5nmKjZVTMgBeGDoPxEjGqsocyDzvPob3QMojZehiurt8H",
  "key4": "5JDtHNUaBbbU8ajydA5s7WQ54NjYJW8Ah87qmwyDNbVgq6FmC8Yuhrw6aEbmPkEq8JmHMVyVe3vSbCCfLwW3QoRH",
  "key5": "5ZtvQgSfqW1kjrWeQF5V1eC1hXgcwv5Dr7gJMq14sHrFQbZ9Gu82tRyPyvDjbSbvVR1LCqMAcRZFxZqn6rYURvUx",
  "key6": "4AJqVtCgDtYVN7Sua669ivzys9jhezFFn8XZfX8HawUv94tf6Y63AEmsLTork7tsRQCis2hMdNpvaMtTBAeGBHVj",
  "key7": "5E25ucVi46GxEg6ovEiWNzPs3N5wPtyEgES1KGsizRm3YrDbKg98i23uWV1Gkb5q7hPeuG7pgivph5UBzHHUeCg3",
  "key8": "WTaYb4gA7KkTFfcHmbrfoSSHPZqBZLgzmMwyYdZ81bdJUPFTtpvCvV6MdgYpc4BSpwh4R2UWeWhHmgexW3SfJ4q",
  "key9": "4H4iWY1ogkwBdcrBAuCq5KTVF8HtmmjAAiTWP1Fza9cEY5XdhnEDJff9ZFDSPhzBvqxGViJHLNuqXtnJW1MhD9YS",
  "key10": "61QGMW5XWj3kbVgkbP3Uyu1ixB72viZAxPAUKqj7Bg8QYbZFZ8459yeheLyH7E5WNri29unouRgbawfVjKiGgnzp",
  "key11": "3c3SRdEtszTDLgW8WPJCZzrJRRtJR3T9xhEikocHjio3UEvX6rn7Ei7GJNnypEaNTb1v8KFne8KJQ5Zcsi4t7E4n",
  "key12": "ra8kGHxCfufKN1NDP9Nw8zZcjZCmNm2RGXbXibE9bJvK91WL2LENf2jf3VPdQuJTUFkZGkLNT4VhJofVFYhAGNW",
  "key13": "2tKTvXpwdtNjdKnDEAwWpQ5SK4dEHHTAnsLvsP2QaG8tZg2qBHFUQH1ZgYK6rwDaCcxEFGF6Zdw7xDwnyzzuW7Hr",
  "key14": "2z1YjNhGh1mXkZoRYmBTvcuTzqDQBL86PkVAH3kN7DuNH2JNPGJMSqPcJL8EjBe1gyDHRjvVHsQzzajv6JdPkMKK",
  "key15": "5rgyo3Qo2GFGE3yyzi2mLZkRSbhZutbcTvcVcCpDMqPWoUij3ZuBrGioXpsnxZQEP5rsVhcDVQnmd2a8nCa6QgRd",
  "key16": "BPTzE8tFpfVjTMAHcCYhnRHCQUwgmkVskUMuE3uE4q1qQLe5jvHyCVVvosWy3AGSRgMbvbEKZub9G1JP3XPRaVu",
  "key17": "2PEbT2Bmv73TcKp2NvaGUeDBGwUGQ2crxpNoWx112Hx2H1SZwb8DG45bcFJUhZFeibxQY9yu8rMXLKRQh7HBxehb",
  "key18": "XD1upJjSjf8Cbz9x35QasaQcg1BAiNUBh8KmViuCgvXbnngudNjrgz6d8HJSRXpwePdjZmazLm77tJjp3hkSeU1",
  "key19": "5ygJavVHhqtieBxopVhBmJLpCAkS5AQq1kF97WEeWHqbHRyuksYCHPUiNT3Lm6D8GtjkJiYdjDMJaWEewCNz9wRq",
  "key20": "4cCveA8Ky4TyzWyrYSBR4kM9UqRNftpLtyp2NG8Df1anr5XXftMY2uE2Uq9SKssNDkJvPhw1YhacEmsUKBV87aNH",
  "key21": "35WZnZyJyoNxUz6DyE56FPtJtB53kwd9YSZjB1EUiJtjZud1Yu6uPK6xvqr9CwtypnkMrFj2uMNq6abeCDKUu6xY",
  "key22": "2j2yq5C16NqjNJFqjDjWRh8vCsSHJHnus5ypEAZyGNcmnJBHULpngQDnJovhYXQUHNx7G86hrSp4vfR578o4teTt",
  "key23": "3eTTRDvqK5YBWH2hpCVWDJEiP2RRtf3GFvHsTbtguk6HyvuaE3LPB1CsoivFS59u8V3DDMTTv3xV66Tr75fajAvh",
  "key24": "4HfxGohGmxzyJoCkEUHwJFycFUgC7vnCZ6LrXxbnAWMzmtRc8MoEdJYG2W3sPjvexdUhcF8ysPYe7YU3KPFnJkLq",
  "key25": "46YTkLfuf7DFuYSGR5ttDvBcFpkUksgfMQhWNciHdhvyyoQ9Fr9SxcdJ9KkkLLgfr8zh2ZtzoKhyvC8dVKyLRiNP",
  "key26": "2fFKZhejrRGvExVnNyvF8jVz1bY3rNP36FQ9cTDuLHR8V88evv5mKHYLUP3stLn3L2qVPX2Vy1nZ37GAE1vXZVam",
  "key27": "3whGbW6ge8pYGUrV35xBgGeWVdoc5epruj8KVjC2187254fs3CRGiiHnZBaUerwqLiNvb47e3Jf3o7gjzxhjQCP6",
  "key28": "4qbgu3pQ8pnNhN4c2VaAdM8nzCGefyNj3XDWuYzeKExDJYZxoJ2vBSD7QF5XN3tk3252ifUrL4Sne3xTAdNVGMy5",
  "key29": "21QAtFapazR5fK9yJ1Wfw19R8iogdidD4vLBtQ3nA7NrPesZrDZWcVNs2S184tPpJjxazftZqJESsQW8kWHBT6Tx",
  "key30": "tnRAas4KKrKJWS28Jquu7dM6kViKpTT4i8E9tbLi42Dw8MrkRZn3vo1P8GNSLfdTACXajR6JLQBPdSPk7rG7e2U",
  "key31": "4oWGtV73Jdh5VFA2mBjuNhBhMWKgSik8cB4i3ufesW6Q5fjxuJd75THY2jx93kb5NYRhz4ZosCRyPNDxmVEh8UnV",
  "key32": "56eYV3Q9FGkR7afKPJ5cF3Dnzfh4GqQTD6DgsCk85yiWxJ82RPdgwF77i3SxTMujzemJRFE7H5rYZ6daBbNze6MQ",
  "key33": "33FGjZxt8qqETEdTENnPYa9zrN4kQUHzbzHKDe3ndbNkyTqJdMPVJvvHVciFrtzEWdpkzk69Z8f2HQacDHnqjEhN",
  "key34": "4Mjdwqivhv65vU7G8DkTZcbm9eYfCxJhNZXaHeqMAgwDNFeS1mxJERnFV4YjjVgYG49HJhSbZ3DV8tXzrGMwfwTV",
  "key35": "2pj6ECNVDsQjUmJKGT7qFPWLWMzHW6zvBmEMXMTd7626Q89T1BCNptitSeeD5NoJdoo1ukzuhgDNyY8AAx3pK3Z9",
  "key36": "4uoRgrayAwAffqYA3dMNASLXoKPXttP5ZvdKKgCWzzquu6K1NoRBFpCsqNr9coRYN7bnyD2Ri5xR8zUFTdJdfw43",
  "key37": "3nyBy1ssiUueMhGWYQW3nuURJF5FxfUYXUZzcBWqSSrUXoMQUJV2Y3uyJDHTohnovfRoTteFeUndZeLHzuiUEhuP",
  "key38": "5fwxuBTXXxDszbUqePqdLdufNbdFknEsu2LdebWKSRzeN5NxJuqL7WDfovWcUGvg8Z8PGDed1cxTz9xy4VzW51jE",
  "key39": "4orGkLYabYafRTksGfPLDCpeBmtAdhrELffMrnH3c1r9EpexY3fsz3p6LEkGPNrcNoAeWDVxQMWMoZbtJj7PtFkT",
  "key40": "2SdYBg2tvj1Ynhtmm32zUYF4Nwo1yWa72T628iBakZ7kbWgnZTa139JPF2QXFW4W1D8VsuKVduohar1k9gL1GKfT",
  "key41": "36XV6Uuw7reuEzYxNawV9G2QcpTvTtqTb2x97JCBy5Woc4z8EavmiFdu7LHKkJETGWMVEjAJUbKoK1BNDYgSJ3CZ"
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
