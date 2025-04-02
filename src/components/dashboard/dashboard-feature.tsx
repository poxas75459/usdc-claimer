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
    "28pYo1FheG7HMnfU9VFQHX3sT5yg5iz74ojeBq9MgNKkGhxSwUK563mkXjtzuXJPbSJbRxpcfcwL2vSzp9iWFh6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oRQuZCgrXQtScHMXgP58xrCTTngH45EvMj2XW8Go6v5CrHke6WPc22KvQff73GUevWtp9axDCTHkdSoTQvdhbdw",
  "key1": "5Px8GuKhnca478s4AKvNdeJvqmNMUxg7my9xYnuXVCAuHSCK4Aku6aic7DNXmbRxivm9eYGbLnCrYGN5HugU3wz",
  "key2": "4LiJJTiA5R6pYEJJFvd2Xv8xfVWevcmTC518hEQZGCKEHLVQioyo2JiFogNVoyagF5KBuyMWeipaBAkLzT1BBP45",
  "key3": "4Lqb6QSdr9ixyC4opmxfA9cpQGJEnS7cLKZpXUZYjPoodRfGpYoa6VfZechxBiGf46Ub6ap3hDMXUdT3J9aXokT4",
  "key4": "sYBZLfTf5NHyZxMwDWL9TmWjhWREgLWA22FkmrXwQKXd7ABTULkPtMvCsgafX6DSttSV9qrD4ffstTt7uCpKTJf",
  "key5": "3i6XoCyrsGEaGi6tmzzjraa84tDQSmFCVUgnzDE6PFN3HuBiucvMsuFw4NERCdJmc8LGUQgUb3KyYbSiwqBDRfSY",
  "key6": "235uJozyKmuxGSCnaLGCC6SG7o9Uke7RyxBbRV8GE81tCMJg3GYesm6RSpmALKqGhyFXj8AZr3o8nQfe6uAPHgvy",
  "key7": "4ojK2cPw2MUEnNFsK69y7M2koaJqqNghhdZm5BRCvZnUg9exxqmLAFi9sezbKAVjt7Wgj3ziekbwLBg17Ra7jkYa",
  "key8": "5m1F7PYzv2JLUHerbC1QpjvPt63hFxZkECGgSYdXNqysqaH1Xfb4NwCJdAidDtpeiD88JdtZVgnc8G6dsfXFpFXj",
  "key9": "3VMVGrt6y8ShvnnMDfcztKdLi2SYbi8qCgznTTqsLsXfQy6HutqW3rjHuGSzfuddasJcvyECxwyztWdVdvQgaWdp",
  "key10": "iVKaVjBYXpXi3pLXFnNwg2kTCx4dfJtd4x3vu8iPfqi595RErVwbpwuQBFJcyjUxUVLpM2k5gVi1BNymXKpRauu",
  "key11": "2iWqTwF7P9JDBUx5kQUSVXFfW4crZRFMpqY4dbm9nVLJeurfY6ySRGHLoSKmNuEHbm2T945HjvnakB6WJsrNUHfL",
  "key12": "61fygjHN9TFtC8Seh2yYsNtWvacVrwdXBVUFnYywRvmwCzdDN1x5vsHoeeA7kjezVK1YFhPV1pFAmF7vXX8uxqwW",
  "key13": "2sRCTBK6wjc6QtKh5dX2xAaqtU3u6iofRDqb5wya4MdcKG9W2ZwdTuayVvDB4k5b8t3RN4y9HnuEqpxWoGbpp8ta",
  "key14": "4X6RLePsmskGfwwRvL5HPW16aLvtUvL22igTZhCWSzXMnvRZfd2PwY8J5d6ijGj9HgdoTtxm59M2kU49vaRSwffa",
  "key15": "5BcGhRatNCdasmvSrgG9DcMDC67V1rq38nfpdTHRKEZds1D3DNFAEF3tgDuyGJ1eCBY5DBX3ZfCNi92Ko6XJ3xJJ",
  "key16": "43NHdRfJFq7CrrVQciwFuR44X5gkUoTjEXZDsoqwFKgZ5H2suqqkFGVD82sYgwPm7g9N63MuwnsCrdaAwSwxTrMa",
  "key17": "4yzpitjsX8utEPJnY9Ci8MpfjiKcUtWHfZGMwC2uMk5HbgE2PkahQn4kpyXfVvJrTzbEoevrWDbLLXSUcKULQC1P",
  "key18": "3SkRNJh9ngBSz9zduUztAoFWrcwvpFeLWcGmLH5J3Hwveet4SGuCS628RU9Ci4juQhGjg9jqsnShkx64h1NASfvN",
  "key19": "3qrY2zJc75f3upn9oDnuNvdjAnDPD8QK9qQKhQmfK6A8utmZ5ADB2wX8yiBypzYUTzDP4FmFz6EmP6pEiVyPoUZV",
  "key20": "4NsJAE9AWQ6Cnz4XTDiwNCECeYvr4Rd3xrmHWLP6nXesxQVrbZUxLKqe9sGW8ECauL58hcS64oLF6DUEZWubsjAz",
  "key21": "2jwKjGxChhxU358DC9Aorx82V7gTjnCxFxcV7uXFBcxtZqtjS3Ar3HjxmpueCCnbQS7spSgU1mQnXxA539mBu82T",
  "key22": "DanUNnGP9Kz5Gd73em7dMjaAZn6KvjCK3xTccfDLUgw2rkmjDRXbNUswr8F3mpntQBU8WjjqEij5apW3XiRzmKh",
  "key23": "2qa9b8dK3yGr1GBKZJM87HK6aSrVhedTgDMVQ2UPskTBgVqTunTgH5bnKoBF86kT9n2LT7Q5jtwPaWVVqQbrbP5M",
  "key24": "3YRxc2WAYtJSFUtvmiFduhVZmwDqZ3KxeRdHyk7oZL4P7ES9TfU26st6UYUwTd9cd18jceRoEZb8Qj1qTBeVV9ob",
  "key25": "41CbiKWwqMvRXzXzWN2Gxk91pqSPPbHTaTntnuZcH2f3vSFybRXNxvnDDWmgWNYdm8bkFveZsB4KTZFKHNssTUwJ",
  "key26": "UULo9ZftdzRofEFNZKCX2sYofTjmxmY7Mebva2vJYG4inFLNSWYzL2ybaWiXV5vFfwbZWohSYC1TWnt3grWn1JK",
  "key27": "3JqypKpDWPEoLNkSXFFj37YU2D6wJ7KTH9ViJPdAkKtFpEgn6eBA8JCiuSQZ55j5rki6kCwVWQZfBe9FDFi81rrJ",
  "key28": "3Aoricm8FdYW4aZTo3xMfScHfqKXbLewpkEjPgKujJBTM331nJaPHnAeVevsRanDLCJac5iyyyqTUTvbBUteuV1J",
  "key29": "5C6LB7H6JCgmbwxVutgBzfV14hgkcnYYsdQJiX8bKEypDb1RF8742BENqq9KxDEfvgpr9c4jgr5rRu5R1vQi891i",
  "key30": "2gKs25T9UjTDtRqCjq6qV8qYwfhB8SjWvvz4p9LA87nhk2x4fQHgkipUqCJw9BWokPAbKi5X2wmtUU6dFrHUPCJw",
  "key31": "56HYvQhdWTwhdHKeokFNEdVPx5mtv8y1WPNBLNTrz6PF94vegzmSrfzWvMLSiNgYvk1kxmLBaDjVfzuSpV9PmXuN",
  "key32": "51JJX54dtFApmSdJHDPCgwYpwWi13Qsz55ow2BQjUMdEB1LeMmtkNcopybEzXDhq3H1Yjm2TY23gYEivXpNMuteV",
  "key33": "58UvuJUi3CCaT4tbksrnrFPgDEXqSTNBzsV5ZL3WgGSCnpA2hfcRkouso15s5hBj8n66vjN7d51B1rmhTnWdwfg7",
  "key34": "AH3kN53UKVQwDm2Zu2vruike32keqDcUufVr3maU1ThLdnXfXY7irU2ZK7iS2fg4VR25UBiCTeBaYuFq6TdtVWY",
  "key35": "4jNgcPh8QjSo61FUmqBgDvQtFAfUN5mqosRyTaUHWjmpF7BLJ4D3o5DQXze7S7kCajvoAwpdjZXFgbmUs8PETXA7",
  "key36": "28HHom9RaCPfzTr5naW4jpTgEURS63jdmfK2MpxGxjmVG7rJYWyd4PQpjtLkLefh3BGgrBhiB4mphA3TzNxSpTsn",
  "key37": "XJZV7pGB82Lru7E6WjsNk1JrfJgfHCedsnL4EqFdmXkgVie2HKw8oB4PiCjkQf1D81dAguB6VfbG2n5rCJ4uuHh",
  "key38": "4PFad9tqSEQqLdCBL6X2FTmBbJpeWZ1RN8iB8uB5ksQJeZacgWXaz6FTRgNeKDUH3DpEE5BQaWXdkFXKUnt2sNar",
  "key39": "3infJTknXc7mNVA4WZRfYc5TR9picSnpBTo8ejeWDwjkJDZE8wVhsxEmDNTnbjyQnLXE4drzhBGTg4bZkFww5isx",
  "key40": "5AdB3QdWRU4rPk4bAj1Jn6RK72gfELM6MrvPaoNrVQSjTrpGpiiDskujjYYNe6mjvJSonqnMtpeQNEx2NaCze6XN",
  "key41": "3dwRwwHAR433AfiTcVA2PVt4D6QcZTYvVKt6EWj7jQguK17Ww9W9HqYftghfVGtviYbdmGU9pED12fi6gKiG24pF",
  "key42": "3px4KzzXKAaQNQGGQQTt9MFAGwoPedLSX9RKZCti2fmt84XpqvQPDE9YpE1f3pHfq5ucQFCDFuzRd69376YPvLCD",
  "key43": "5zaeFmA9HLWpZSNPy1nNmrSP9xQ2SnZKyxZQ89Wj9uNnF9tYmSVDFS1gteWiBy8nX8DDThHig4NBq9FbLTbwnNAu",
  "key44": "4ZPDMJvpLT1uaD8t4Jqn3rm1oo8MiMcih6j7JzuBRforh5E1ToGDmz78RmLKyKah8WRS61ezpjJVPd68vMktPMpN"
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
