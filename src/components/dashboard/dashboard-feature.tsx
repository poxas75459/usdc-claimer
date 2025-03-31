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
    "3sjkmFbCPvn4n7Zt3859pDbXC5Yw6SdMD1RLrVJT2h3XH8m9D2XYF1XLzpV5auFSUTxsnedtmTY875BCG6HXwRL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFjoePx638ePm5ZAkjHXfYUXbuXzUnQNovhkT4M5LJx89tpQEF27DEf1ZJGAAx7ZcJhJMLuyMjPZ6MLc8QfpGKo",
  "key1": "3hEzbkDPadSgNUDCcTJkopAxD5NfTRQpqyLXuWtXdWoGHH28QHfZ6aAt18G6iRe19UZ1F3z3j9u1iLJsuLjW6CjW",
  "key2": "2n3PiFmQTPKDzXxuJxjSJLH9sfAZgpHuZui8ijXkkxYQ9addRZQtARjAqdDAkbbG1jKDHvYKnTkhdE3QDG87XKiE",
  "key3": "5kDSi2NZvbXX9rJrg21inPmVesw7rwbrsQk8J5b3Aw8qP5osaneesfGx4xAjHAc7HTY8ozWFHkrmMZsT3g2fVobp",
  "key4": "4zoWwsNWyo43eazPLQCxvpsgPk8fE5E9uDMqkLyDRzagmEJ8XeHchEqFgk6sYzF3jhphRrjA2dpGjEuaR5jFwrQz",
  "key5": "3K96vTRat56kxQoF7CMgHtbza1HhLtp6W4r3gcVxCRM71fAgJEoYsZAsEWFDCDCokmb69aDcKi35U7NJFx1eLCPk",
  "key6": "5Q3vSfcoZKvq5deFwxrwArMF8bZpFVEtmekAAqSsWK63R3LV1Q3avZicidXbkjRKZZPnfvpmuV8D88oK3VtQHYi5",
  "key7": "4odmMH11sB9ptsAY9hk58wg9ndDmqCpGZ3L7Z3YbiWRSRDA64qbdaBUM64CuvRbjVKEyCEMBSrbiYHZBrencHrqH",
  "key8": "4HKZ3aWxSAsrbz8JfcHX3zoNV2eGxSQLQdPXpF1Xk6p3Sp8QfQuQUCWByjsNun2ATKTA4SwuZnV9NpAUbuSHr1fZ",
  "key9": "XZ8jqUXdtKMGdYKTK9XDA9yj5kMtSnB36w2FkfMNWz78CDTNHuVcav6oVvgeod9CvbvUek6G1BhK1Sqgufobz8T",
  "key10": "4tfMKhe9wnzLsAeS1GMVdas2a1HhqeK8Qjo6TJmcPHUf1Er8bXQV414TF3JeTQbVJELcAxZaWnYtKazAw77NSBMN",
  "key11": "JGFvsxVPNEbzfyfZcqw6Wtt4ZUo8ddjEBBbY5rWT5xKYf55XregFadhmmBhW7NcVwDgMWUCshV3LUSftrQuYiG3",
  "key12": "59p2VxAG1wktkvcNn3aMq2aSB1f87KB87oZmhTLit9NZBAE63byRp2U3vNEM1MNtVA9hadmGsN1HfygBMeMZDk3X",
  "key13": "5ZoPtXg9RWYaJERrf9k8xdYCVhczebMf8cKUvouBSjuLZPqoxmvZxtt9J46SyrCdHUyuXygom7VUPrL3Rhv2WxdL",
  "key14": "bjV2r89WHz1LWTLtiJjf6QFwTMtCMr3TnHgNtERFwowuC9ReqgEzMG7uCmeLRWiwdPjJKSwUFxYmSX8jy5anuBW",
  "key15": "2XBtrhjTds3nhWqfaWNp6etfMv6yhTBVXRerqHZz6q7GHEUJdesRLW2m7aY3eDA2ri3Lt7oswXpJYpkKCkgZub4E",
  "key16": "5yQEy8Csad6wNg8gtPLWdC2wwLFSyDhgv3Q1X2KNDQjeFRhReda6NaiQwGk5bMduEUgwiVPyDH13rcRD61rbH9nQ",
  "key17": "4y71bE8CTRXdoWeWXE9ihsroLgMAjp8PMjnFPj128u14GFdcAweMdoz1SSfzsyca2dsQ8Y9iwXFqwms4Eua2b97c",
  "key18": "4A9TP6fqUbDT8NvSjszTc8zZiQmaSCgX2df7jxhUJcaTTwLJ2cjfv29bXN5U87oz18a1eUct9ruUQSfVVTpeex2B",
  "key19": "2mBKyfvJmNCHA1dGK13Y5JcWmCYYTCyveQkcFEUsmrLay11xF2AafJdcpGeLoyw5CBDVGCUkz2ZtAyWQ8yCBwjVL",
  "key20": "2CeGnfoRh5DjinTSUbyT25cKjHkALssnTW5X1vSipg7X6A8Dm6Aux84ufvkx91Rbhj9ofJRvE4HXbuBCbtXQbfGd",
  "key21": "5gvD5iQXC48m5z4muMzHuJ5VhPACvHs5zy67SXhpA1xYAdTrQ3Gq7GrZpxioyKRhvLP21PzQYaBJs9u5dvzHvDvX",
  "key22": "2n3JVZA5CaLckwXwFbiMkrhSEsQLKxEdgin6gacAzy5NYHAGg1g7U3RRsRMmVqsBp6YyCbs3opdDp5HyVk9CsHbp",
  "key23": "3n4KPGjoWbr3GmW1HBHEUYDmWfZkjMstZSZSbCKmbF1tVodY2K8fKw6cb4XCfEaLu3UgYd23Dd93UiqU99rgQ8uz",
  "key24": "4N4wR7MKFV4QHuShCPTXcWeZvjcTBq4iWdBkDgPNmd2VPfcoH4pXuDMBzVZbgnHagnNnHnJjTyoi9CCsJ3BneBug",
  "key25": "BmiZkLBW4L7VQNjiS4HswCViwPv495wiEc3LA1XcFGdwcKdMeGQigzrVo9cUEisvBAzVkbzGEjUotKw5DjVjoJW",
  "key26": "3Rsy4UC6KVJCHcuLgw6U6Pdhkn9wExh6pb4FY6SXFuEt5yoqCvyfbAvYgVQLk68G9ceuqJ7RAaHYT1ykkqeSR2fr",
  "key27": "3jmtPpy5mCcRS77xaHAuRcxD63Y46YpFyJRTvEDj4MBwcAp7xL36LuCB75RxA51GTx1RbMQfd9wXGZfEd5QHAG56",
  "key28": "5EK5yJgq9nXB164RpbSoBCM1utKqQeYgvLAyDg8TfTu3odmaswCqkz2szoPyuGMAVugvGjPfE69mDYTAWtYhFE3f",
  "key29": "KSD3cgt3LTRzwhhhPeTYzcMLP9ZwnNvqQMHMDCFdsxb2HtHx9HzBRYaxp3DsPqSBK88Ts5osbHyZigFvTQrNgDH",
  "key30": "3XqkSvB7WPAHkY2bBvVYVtucrQgcjx45fNtCnLwPtyGPT7vJzmHcDbX4H5AnKPudqCKuyc5vMX6jdPgTFMgjizh3",
  "key31": "2sSy9Mkz7K86BS3Qm6Fw3cp6dgdZ1fgRqi51gKWst5dtkQwgkLFSvXM5WSotVsdQP9u2wfvkoJ623rDphK8wpcNS",
  "key32": "5Bt2o8X3JzrnH1Cqpd5EAF18E3UCcZQS9EQNfpVraR9vzhwvsUMHcnTVTyexry9Um8dE2jsLLhyhjzE7zTpCSyXL",
  "key33": "5V4mvjgLRufM9YVuvjj1aPGSLXdLYZMu9wQ9vNciihz498iqkBj2qUpixXZeGYSYvWc5xgvjNniJURonWipr1iWB",
  "key34": "4GJhUqzHmDTtSSPCZ8LaNB3szuTVExGpjWJ1hHP6neXhYT3PnY4APvQhWBjpc9wjSTeWUk1FSDR1EaG1fV2jP6oy",
  "key35": "TjXVcL9BSFBD2Kp2otPLq42c9YXkmwohq1b8CMKhY3tZ6eBvD8qbcQCs7P7x9y9UZhzvEHhQEV2uHsMpjv3JBir",
  "key36": "5bdqJkd43DG2ukcnugvbi5rmNKsi6o48xzqp2xApdzX48MiouBRnxhiugNbvsjhzxQnjZFpTSkY98Z8P72rF7mJE",
  "key37": "3QbMPGE7qgr16kZryvq9FehMQWic3LMnsyR8F3gPDb4p6U59sZethxMZRvkQGP9Le5yXPbbrtQQNNB8DY1LjMobu",
  "key38": "ENssSa6Y4GwzQggqk72YPJ7zsfjdmnvLGn8M5Gqf7h51sf4xopR4rKc6i19GJTdqQXKgw5UbzAzNykTN495FH1T",
  "key39": "54VrPoEm4x1hY6K5ESCg9fpEDPnAnru13xsFQmnzocnp1EhUkUmokgSgyGQxXACTH5ZmcaLpEXDpc7mhSdgfWeND"
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
