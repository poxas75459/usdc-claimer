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
    "2yG29Jtn78kQgMaSqiT7UDKn48sXfnHZEEwFftzFsVL7JHtS61RKA1buhnd36uF3vQHHsunSXXNf7RoQHegPKnC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tm7sPfM6E8t858inkKzBByxTJDcVczWgsmsETWsrkbgBjVCoAerm2pWAuJXhey6Afv9V4xAYQEZGhraW5GJYuJn",
  "key1": "3LJ5srS9RZZTcxkxftp3CU7bUCATJiq4GvoHa74i9hDHUzuHEsEbG53DhbHzxTctRQGHtumddRf3HKEz84go5apa",
  "key2": "4CEP2yVM1HPG87QougorALSAL9oaJAUzagDudYBMAf4GD2PWCUkkXH9ai918JGrTqDjbsiVV97ZDbTykkXoHjPnt",
  "key3": "whBneDd2KEqsCYXSQNSDjwiwcbScGDw9HjA4CRH3om59SvCRzewHFxgHCTWXbRkBrBZUsPtH6v3VpDh5cGZt9ca",
  "key4": "21X1Kdp8kXuwTm996zaKUu4dtnVB5EC586ZavpEB26MJGBo6AA9rPsWiu5nHhqsmNCpc6Peh5mG6ju9k43upu7aq",
  "key5": "2RPHjjgDWpZjm1wbCgNrJRc1rXEU1HoK6amjFjU3Fy5rDGaLmSyZezcMwmWTuAJVbmwRZhyLCqzZaYjfY1diBhxe",
  "key6": "4u2qD2Dbw4QbCvigDht3tvKmBHw3JjKqbmUwef9i8yR4iTZdCRYjfH964GjHqoMy1uH2aP9G35S7pH5xJdRdkjFi",
  "key7": "65H8QdJvvxed7sAATQsGn7FyPAykspFqnu2T5Z135jTLTQCmibCiAJtRkCxCkfknVCy6AFv8kbCU7rh63gwPsmNb",
  "key8": "5spfqYEz8iGNrFxNdxeed4dSZ3wcqf86SVnpFHtAXPYpunvgBKo9GDqXbbKNXAszVSVBCfEoEZYbobPK2aQ3tNQG",
  "key9": "2nRavmWV8DWcbbrS84T8PJqNPVWEZ3gnjdmu7uwg5TVEavKvpkTUHG5Rqe7BxhFxrechvrkiFt3pJNhgujaxQ3fD",
  "key10": "2iXxphEjPhPhbd8s32FUq2BRgRyjy2fsJAAjh3LBaL2nu9GEX53vpMUE7rPw89wGq7evjDy4ucyuCFYPLjqiGmGE",
  "key11": "2ghKVbH6kpHvj4gXQABEvMf23NrRV5mvJ46PPWR2ndWtNR2rNoEea3EDypEnUTarbg3PZjRPg9anbqgkf7diWYfi",
  "key12": "RVXXwTU7CNaGgYBfQgMPpqAbTvRTo1BFH2UKB9B7r8ji8YEAz9ncjJDZX12qtSMLNWozxKRhJotwgU4cABu1cep",
  "key13": "3faU6bFrNFiLzP29MTAafqCVxi2kpEBavC6tk5sSmdz8QjBY1jKJ1rdWJ16H8mo4H4T6HR8YtKD2191Mvf16ixeH",
  "key14": "2AL5nDCj52RJQNELwcxyvcaDBQeVVEmXpxZf4KRrCg9qXzKa3VNYQd8WawG7ebKSMCYb6PX7Do8QvEyiLm9cW6uJ",
  "key15": "2Q1Edf8UAAtDBgcMoCk36t6eHwBUWMRcVKPWjd9msSRq42whe2dHDmgfy163yABe5Knh1J9BZa3ovaX6k3LXtwBc",
  "key16": "5DzYQiPf4RgWHVKJEGBMXnxuVkPS9FSNRG5Ub3ss3ThT4jbztAJ6xe1bVka7eXc4P5f8YApxCMzpcj4cKdz6FME1",
  "key17": "3QfL3zpXQeLsnqvYEFDcccaYEBsuacP4qtwEtLvWqjmz6ExrdZY8218vhQpGanU4t4gRQ5VPhKqm1S1XpRbBVMjX",
  "key18": "43JewtT7zTsQDGkJ98H6tFao8KPGGyTemsV94TwDKpsxLmYTVQkgxqQFK9t1YXkX7Wcm7LRhS86SpELRccn3fs1j",
  "key19": "4Zw5xWHJrGkev1tyT6C6QZWysj4n3cSCJiTA5QYZ5FrAB6ujUUq8bFh9cSgi1Nq4M2eHUQJZ7TPiibgsER1MJFFP",
  "key20": "4ZR2MkYXQfoqpKNSGnkHdt26EKpTpmZNBy7rtMmCiU88exM9EpcxXG1hqbYGKqdcQTZWWe5Qe4CVxSjFTXTmAjQU",
  "key21": "43utxdun1qvv6Dywph36kL3bTfa17zmu9doHE4jhfXRXhsdCb4Fetf9ewsBiDHRLjiog5xUmmNVNAYeBG3fdo8F1",
  "key22": "3gCQ1TEeHeBGeo8bjYFiGtfGiiXEZP7BtWoZnHhZ2cYnyi6GS9CiYorQJP8sJmqt99LaAhCFz6p2nXeqNmHDEDRr",
  "key23": "2WmG5ahPoL4NKPPp6nnc5WMn4Mm2CMQ1LmQYFQcGPwFybmFEuQRuNNwXtf6n7Bw1CSwgH8zVovQNmfwNG8CLRxZp",
  "key24": "GnvKpYKq86w2Pts1aTG93J3uvGWcxyftwFoFYJFC83VmSCZbvvkbq1SLqSntSBPPnLgagULrTcpTEVNssetkDst",
  "key25": "3hUHNq7a21wvxHc2oXifJ79rF5Xgz19DyVU9jsAYsDUNACuibnxsDW7Ww9VKsrwh7HdHmhWWJCQM3Y9TSLun2z7F",
  "key26": "5rtiBkvmpZf2wQVJZEE1SDhTUmZRHCYXpR8j5kAkdA1NGykSkoDvJVpqBBHDRyN99YMpkfcAxA1CdhR7cT32Nagb",
  "key27": "FmJMpmndwwnNssMFCmcFHQxivYsdWBqiCGdRxhsCJRQXAKBEUS8hdz1cwbR6xGRVSNuG98CJyxVsCoSqd3GgSJD",
  "key28": "bQqkTLFkgd7bvH6Xk4kEj1Xnsr9v1bdN9PrE7Jo6Ri9oWJoJct1Wm2EzFUJ2rLRZYRL9CmHrEXwhM4uMdubu5xM",
  "key29": "3xhqLftUiQbK9dtR4shupe1ASNHtmV3yizSYDmjnHWaHPB29yK2vNzZu4dBSsC9L1XR43Q8v7TV1tCwYo8iwvvh1",
  "key30": "2x9ra3YxWmYHSWCNuXAqf75B4Dce9j3Xdi6utT92G1g13pmruzSembgChtZe6MpiGYKVoebXCunAYf7mkS4Q3Hrs",
  "key31": "MtdQfFEaYXBFMicdbLvTs75UzR8yF5NJF29jDmrChjMSBJf2Z6s79zw2Eou31juZkhVWe4XZV1FatmU6oBqb3Cn",
  "key32": "3R4Yv58wh5Yu7xDdgAu6Fb2kE8GDHySPV5Jkb7Ds2tZ7ruK8XgNXtCRrZssbKkecuK61JMoMLYuxXV5zv4xRWGPR",
  "key33": "5YJKkXMTUspWzRXF9rVKrqDsUCWgovYBejAzPDoyEmSALA884UNQroQQJiGFpfPKViZfiALCEjYTFnnRfUjZGv24",
  "key34": "3kvNRHvSbMSgxthRAwhhkpatdVu1AdoSymuT5zQnwctkacV3iRq1rmmkeQLL8CNzAyX458mb9kxPmsvDaK4hbesG",
  "key35": "2JooXSsfuD7NwrBxsbb28joj5GzoaVmnMmKL7tz5Kc9B3YicoV3iR9Kjsw6r7XYuQw2VVTon8vLC7N8Jt9eGYEtr",
  "key36": "3tQJJQ9eYvfMyfYT5xg5vVGSvYr6vrvu5pQ9nxsLS9WRZJnVz6CVpm1mCDtDb5nwGaCDXsoVU6XGanxKty68NaQ8",
  "key37": "qNBPG1WJBvsfcTLbz8pWfRpmHmZtkwrv5th73QKyn1FNtfgF2j598F3pWq7SHiuR7Fu1LptyHmTALDuhFa3FAsS",
  "key38": "23auRqsmsu5zdiorXRkxnqX5q6iLDkcMVRs8qFEbUp22CdEstuKRQ7Ls1wQVcRhKprnVGiSoaEM6QBTZyiBSX9Hm",
  "key39": "4PdSTmkfZXk2wwgpkDyrw63wPEzcU5PE8HUmkqbqcJhxP7qNnWcNPPBgzg5McNtg826TVZUhNZxt1q7pJK8dDZdT",
  "key40": "2Fp9TbH9Bdctr9j2LToUKMYHc1C15iTW96pnbnKou1xAZdeTBCqSNQNpGZtkrx1t4yEc3uCLWtcq2MYxxkkXngjt"
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
