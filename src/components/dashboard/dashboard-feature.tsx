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
    "Cpbvj3SR1UjXX7qRCwnT4h3eeSqofsGax4Aru3YZCRjzdTSKubnE6zwjFrLA18P9mTnpjwKLkdCvymMeB6LTXRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28vthWeJyKtAgNoi6eGcuwLR5S33eAtYoSdttrAKNhxfFtSpDnNmeL3ayCUzCRhDFnZKo2UNhy8aEPiXEp2z3ZXp",
  "key1": "32ugRbNA3Qq27Jay5jC9Ut1mRewrfaJqTWrT7JSP2hyhcsUjMituqnjyrFo6zQuSUNEKctMdeQK9E8fjW1fQnD9Y",
  "key2": "3dRW84Q6VnJN3MAE46AqVuz2KStiyi6JKzcpgMvS17HmibdHexMzVDu1FjvPvo4b5noNXy5Yog4BEAMsMg4Jkscg",
  "key3": "mcVYbtWnfJnC98PeKBheS6bzpxmFochDm9CDh6QguzzEr5g2Aj5r7okoRS3pf8A16Zz9pDbMQvJHoWhqTqYygoS",
  "key4": "2JyitzH5YbJ8YBzE7XsEXKGh339zuSChDHDVRgokgFhctKaAcDi4cReuYrYejeE1MMxo41FQs5zLo99Jt2wXz1PE",
  "key5": "3FMaamaascdjLLZVbqJk67dZCACpghEtPR8Bf3mFQKGs5tMAmLpaxSyt5ztM6Yf1c4HijXNAyCYJqFD2PQqaRg5a",
  "key6": "227nfanZauajSMUhRxbQDCtyJgqqs88XsBokCykbbd2kXwSwRZPSwUz2yYBs2CdJtajbq9DDfo5gdrpd2cooFk3E",
  "key7": "28NsmmNwfu3QtXoLsS1UmezuY3nTQTB3NYpBBdffTGVoNRGdL7zuX89Yg7E9tSXfZGKupjXeAwWVNJj8Lxjd4PMj",
  "key8": "4YFmtNV4Jq4kLV6b7tpnC9xZWf3F9soNm7y6BioaQ6U2EAt1k7xoHbzMHQ1Zc8cgrg4BwMTRZYKqdidNMEhn8Noa",
  "key9": "2jEARwSN9gPhdmqyzDUASxdmGNX6iovBdSVUxpPerQSzcL3doY6rMqJD7Vn5LxMC7RkgUUokTdX74bCPeA8SesSu",
  "key10": "4FQGSx8Yib7fn8tXQ1QaZwiMEwGx6Kc4wXRNwNEp8wcNPmQdtRwFKXvotH1AFKSgo4i68QUL1B6SidXVRFbt1kGs",
  "key11": "5tiW1VaoZmYRnJB3Hq3NPmaKkKwqfxxJ6ggzFKR5AnXPo5uDqwzLWaNa76NvaYJ5Fi1a5GJwuLcHSzy2HikJ6Qh1",
  "key12": "5ewYfWPrq5ufQjboohwHRa6kqrwhYAQHMorGLufJqSPYZKV33SvdZCKbS5gL8UYgNQpAmrDzedzsJi4XYynok8w2",
  "key13": "5ghapn9brSU9rBsQkpEHWYQy8J2nAciKJBEJnVdvJzahtyBt2BGVVWzNmyEdokFwqFq785EeM3QBBqzDTQqtTt3R",
  "key14": "3jSdvVNX2SbavK7RvGGzGcpxbRYpywuiS2ejNQWaYvCC6XocG7xTVuag3Cguyu2Mh3ZmnVCSWJPpAqaHTx1rmwZe",
  "key15": "66nL7H2mSTL4oUi8YgdT9qtsnxQP3mmqy5NKyhDpGPwszSPYZESYiVqfGnkTHdVGskCZv2R7LUvxPWoDQWiEPziH",
  "key16": "5ngeQNq6LDs3zQLeDQBCfLCM1caVtHPMPKRqNNjeaTyHRnKFZzriudiNEKoDsecjzqdtAGMZTRXn3ohkno2RccWY",
  "key17": "2yJ7EefoKamfiec7cG8JW1nU14YfT75tjzhyQ4xxrjHLzmWDoaPVRkarAqJrQwF31D2EAyFhDwgEymZKZtUbjUyt",
  "key18": "3fZRF936JZQ8GdymGdmaURoBMstxY8ifBbMgc51fFDjjYmdUB7NphUfUgGGFmbWnqLvegNWoQA3iDKPAzgzbuysM",
  "key19": "2JG3GqYtgCM7ASv26BDJWXxs3CVxUzmkuhAQQv4QucmHvgmWPSDY8TZGxubcexjW3iCDRdsZtW4aD2RcbrTLqqEB",
  "key20": "26P8sW85tFWNLCzbxKVf8RzMVvgWCSyj2CBUMBdmNS7eFofwAQtocNc2JPChFDpEZ2HaDHrWXR3jyFDDDkE7nYds",
  "key21": "5XUAUmpN1kCM9KEMMYoaz9N7YrsvcYkQ4aAMsrdBAEPbFjU9jEU9SFDwRFeHFEKFfYFRkW5tpeed3ZZ54rBD9DUF",
  "key22": "3qes2TAfAbSCer9L1oECihUhwiwVn89K71yowYLM84FFL7aN8dgDj5U4rBgdDhpZFfhmRbYdQE2CSNgCyg7eH3gp",
  "key23": "4Cqt7oYNzNWfzrJRpnE628zCnmFWZhso51AtJnmorPJ8CymEnuqUonZnaqVkiRiWrPZds8DU9qD1WQNEhFv2bf5h",
  "key24": "2RnhU7QcV6rzV9gzWVBJex32RraZBwMrCk5UWzjDRQu31FPMhP9ugcRdyUSu9FotrRiumVyTuUSANXU3H2WcFAmc",
  "key25": "4gHYXUHbJhrq6WDSKEa6smMrsB9AYbikQ7ZofFBdxc3xnqxjTkeaSGr6ZAQcUZYUiWNtRenCoCYvaeNvVuSJ1kf7",
  "key26": "2Jo7sgCTv6epBiDdN5AFaPYqvjo7pM8RrQfA7KtuTs2UWBPk18Ep66J9A2aAK7zWYY9VkWrQ85qaLgE1Sr8vXxjP",
  "key27": "4vxir64b29jbtJwX5EZJR1TFsqaif28G2876mY14mJp3hyUMmu2Cogoav42rniA2tARBPNHr261ZgxgsW37tEQbx",
  "key28": "36YhpCu2BuNsRZhUpDe3rKcV9iyErtH1Ywn6WXvx4uxnx2EKcsXfdSwP3PwGSZozjjGH78EGLskvysMQzAbujP9K",
  "key29": "5j4ywJX9NTVEfmycLQxsex6fddFJMCiF2W2Gut8PwKQapzqGz49Ws9kGGiyaQJTrB3jHri9wFCfXMPJCGqitoWZN",
  "key30": "3PtM3jN3Co4SDgW1EpDTvmZBJBRGjL6XQmJnuzw8TMqwcZ5QxkF4m9QeGKHDYSTyryVkwk1Jkz7WDDJstcEibDd1",
  "key31": "2EAkJg8hSi12QxarbFcG25fjbes2cQyV1J1seGhE6duGNKtpPHzzsaTGZsEU4UXTPyMVNFeQjS8TKMt4V5gVWSoN",
  "key32": "5ykg3TBDCGm5SZYxbFLuaovDe7mMUo1PPsESTozYzE37F9W39vj2TEQSQKX5NBHLdjozxdw4iCpG75KpiXfbHDsy",
  "key33": "5fdHF8nXRnZ4aVxaxWpCDvEukQh6uG5eYsq2mVDFaUJr3Nzgt2oMi2zDr7BXyQdpfcMa3koZ6z3TAyHXUYLp2RNn",
  "key34": "CLUo7xtW4pj4f9kiL5VGcjqWFcjuMtsmtcEuKBJohpY26gV9ZTbZNGSXhTRaaBMiBeUe68rsTHztaSQhL2VuisV",
  "key35": "2Xj6UP8W7mMicuvoLye2E5LyAQGM2BMqhytkinwPuiU1YafyBqcYJkvqyoEDh2F9WjdN9bidqqqVwWv1nzYPkpG1",
  "key36": "2urHANS6qGkQYRKigDQGSxQDHoJQYrgKiaZPiAWhW4EMHrPqsGUFYoxb8H5QzJHYaZiJufAHsCBqhLAUmVHyNau9",
  "key37": "HkUBrwVvsv47rDaQ2NcemNMu3XjP1QzLhc8iaWDkZ698zaMfPWj7zECZ9pMMXotjctojUxtnah2TD8gHxqDjH9v",
  "key38": "3hsuvavj251USXbKLg6Vy3hjRxaRJWDAbb5M8ZXGX19GxYMU2JknhkQF4yMCs4gakyYTPmDmf4ESUmnnm5QuGMyn",
  "key39": "5ejuUv3j5N6Zyhx6srwKw2UZY5Kej52Cr4GUTFjUCRa6JZWFAov3CR6ohs5yjCU7St9gt93txBp5Sri7WthEJYYS",
  "key40": "2DQufwVsyzKjprY5Nk8X4QEgV3rWGar6maK9JzDiBohFopjUgY2DyQPSxRpd2dqwgVj9zY7WfFiLMyX7itdWhTXy"
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
