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
    "ex3oqJGd9qAL8y4XEPwwrz3U1MFHug3SFhX1wBvQFJGXPKw7EycNAi7HhaGSiZagvSGK5YkNZ2iDLvtuiwCVAV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RhmaAc8c86HAksmh45YaDN1cR3xvBfQdjt1pgDpXda6KWgUFYuACNwbvYXEzSAA6UHjpUq3oK7CrmCgX6zMWR9f",
  "key1": "5kvS5ZahdjhqVsu1CSvDQ2jbj3Ff4dG3gGy1VDLZwq9jH2nkXfs89nNuWwYMhpjtkFcwNsAGfSaQZqp9nX4YFsYN",
  "key2": "2MrqRrr5cst3fsSLBvRFghzF5dnC5kLREtsEEHZecDqyMRCPyt6uEMfuV8sZhohM8kv54SjHvdAhqJpR9bqHX8dJ",
  "key3": "32p8BZkUguHFg1Hpsmex85i2ndXyNaVNGbxKSnLGextPdGBeA8gAmttp8mFc8FyZixMHEkchAe7DqtRggz5mvkRA",
  "key4": "zgDMQw9XChtPzDr6AjgpXrMYWWyUkZoLgPCx8fPr65yiG56Xe2TFwyzjNsy37FvHS9h8R6CKgs7PLqiRp2tLJhW",
  "key5": "4rf6pabbaq7f9baprTEYFEAJ77TSw2CfL9yCvSMJRYueQfGZpTP2qd1MrxNGLvU7k2LisNYF6pZJNCRTuN7AtHUs",
  "key6": "4TBFY67LBi3ozsqNveknoc4N2S5vnVKpT7VNigvybr7SnFBaWHmCvmW1YxVWuXxoiE3tZFehxseJWx1WQy6QJJGt",
  "key7": "nJjBcsThqzXegsWK7Z51h9yWbJn7hibKED8isATD6UV4iPEWzL7GzvDFU32AkTaUcyMXwHaLLsAg1nHBGRidBhV",
  "key8": "2cPsSbccCUUrefAGKUbdJ9qWWzEF87X8i47Npp3tnwF7766hm3g5Jw6XLjB5DNuPhKzQpt9E1wD8bbBiw2uXkika",
  "key9": "5qPgmU5DTSLATztWJAQbUT7JDyXAo7Mn6kCHYyFLoeJj8btQ5Akv7h43VEVwzvH3CBjjUuWGVUxx4s1N23FKv4W",
  "key10": "5Xo6xRGqJm4ac3d6e4DLZcvrFTHxKQ4uLcu2Pa6KPJhzkZEW2TTjpncjGEsMbnqmh11mts8UdhN3QyHHayp9kY7s",
  "key11": "21pRBGkk64pdtpoxz9bqbbQYNnXudVA1Pxy9WuSv4ZRkFJX8x4WUZbVwP62dJwffuVG32B3Tthuned6upvMyjZ3p",
  "key12": "2ozek5sKrNtPLr5ZBHRZ3CuuXvtUcE8zxZe55g5X6bbtvk5EidcQMT4h38RJ2D6fpccGMPngEZYmKCFMHcXD8shr",
  "key13": "3begTd1e9oUHTAcjMwN5JHYKk88oBZjvjdywadFAbSY35ipzqyn3VLQ93GXCfec2bnQvrYKuzvwDCjgPN6KWBRQg",
  "key14": "znr6EVfN9WQwoF46HjVqNe5Q6nm87dcjNAVaBHySMwUPgcMkb3SqnEHPuX3exhi5HRSewQG26AKrvUH2xvmkKS5",
  "key15": "2fGUtZLseiSGpuiRVUUrU2yoXRuZGhVokwN2HfHBHqk3L6VBYoAXB3VHdufocgYdrBm6o4qPn16L3QZee8qsjAMg",
  "key16": "W4oU1ZfJmVTtRsxWnrqXvSGHLm8baX35jvCwDMioePUtgdxdFGtqjgq4Y2n5EQu6f7jkEg2eGnE8uD8fwNXCxR5",
  "key17": "5RDmRLRZQf8XxD4mjZWvraTFZzVbpJWsaoehUM1t7CGpPibgY4FaL1vndW58N8C879YShaGuTpUfZSh6uW1TEBHk",
  "key18": "nH1KsfgE2Qw5nfLprWGwSmwu8JVmLQ7PJsbc9bqcS3cHPRUGJ1zSzzHSegv6oq2ZLYx33RTqjL1et6Qe31uRuPB",
  "key19": "3HJ4s4UCoEKMq5NJtHu8wKnSwYfnYBsHWbqb4JpAcmueYMU2A8UcicpNLW3TmfkbeDT9xAxdGFwdYetWiz3ahKns",
  "key20": "4DdQMiSLNy1dEKhcwqoLhSGW2H7mXSKMEkJsdJBTcRymyQ7CokJ33PXLGuyyuYwgTzj131L2SWVVwBAyCRjfDakV",
  "key21": "3mUXpMNn5X1G9V9icABXKcmaMU252CsRSRNWouRZ6bXzAmCWcxDF3ZCDxNGJdgo29RtRvNUjRPRYaaMFpTaahqhv",
  "key22": "4KosbHgrmAmYD8jywwbDB64HKhBvwrxs99Bm82yCP3bZ3aNCekCWdHBDeS5oCYZ3Q1c9qfwtxgTv684PpGUWzgmk",
  "key23": "2wwiauJ9kovTKw47KptYJ4DZkYuMWoZCQ8w5ZKT24LufXBzpEZRR9idQv5PQrVSG84ne3qnkwDD3iGNzeEXG4gbR",
  "key24": "2YgWxvaDkFp9p8DyetH7tsGHoUHNxoKRsQZ224VAKcYy2EJH7zfxXgYaGQo5GMdSDhqxs2FrYAmT7qqtVDsx7HSh",
  "key25": "3kBT8ufcjpeGAUNr2Su9stncU8PS8L55G4V8MMPX4fWEsdr9yu4kr96wjQjorkUrehp8tnwAxmEJUGKcwJNb4cWM",
  "key26": "2k1TVMKZ1wExXR6qzgvxKrozYUzJkpQwKeJbhnWgwU8zwsdwmbZWhd2mJYUHqJvBmGLoXjG15TspN8uLcjHXRnbf",
  "key27": "5DLi3Yew3T4Jbx8WyG5VNQNGyijuWEVjZvfd54s8dZDBTXoa9pJRRzwkau4vTfCAZxJbUYuExMv1bKz2EnARjbDt",
  "key28": "2LMZbRwq4DAWWdqvtnSsWGQaD5j69YtAEkcQt82GkuYxXCfxc6FrNRBh12JZYoDzP8s3HZuoWy66VvfaL66wkTUs",
  "key29": "7qBnUatNHKpRdjTkojTUdN3oNxGV21eyiLFH4i6S6n77daZ6rdsGAKWP3mrioHVrv1xGmB1xvJBgf7sFKYgacAM",
  "key30": "xasHkcbppPB3RcHLxV4vVT4Ppe5BHDrxZ6R1PaNMGWJFaB5qVtvY8HorDyDoVecgpad2DtuXAowhv2yUPSfsfg8",
  "key31": "mrNGetu4aBbKBCHkwTh6PsbkYVsG7CwFXcrMgk8x3sjn8i83xyZXqjEF83CLwgtZKWyvjXcycxPyCXuwUykqvC9",
  "key32": "5eGvEKh7UwrJuNhKVGnkSf3ow7gXtfieg3Jx6EAN8g2bSfkhT2NYEnr6ZC3n1kr2hmZBdTMCVvMJZwKabiUAZBww",
  "key33": "3QdaULDfM4czkpDz5pswPMQCn25R1TW56pRfLcUpb5n4MfB1ZkpDS4kKfBuGtMTuHRyKSZcKzZizCbEwnDURdykK",
  "key34": "4omxCVm2SEjePBSBqq1XiHRvGE58cyk5JW8qcWsN2pGrFm6G4nrciYVGumeMoGnmqzYJqdkkUVScccoCmBBXQmd2",
  "key35": "oai2qALAZQFx5tdDZA8MeAyB2FZxXjZpDq4YzNgmZyyTMZBUWQg264hiS8mdTfVEJ2H2ZFe2VKPjxhLji8oMa4c",
  "key36": "XFGc8K2LScMmpnyycV54SQLktd3W8Kp7DTajvdTvWm1vpJmC1ZQHyLdWMy7ozhoZGgVYkqVj1t66rcC5CCai7hf",
  "key37": "3QaKjVTshvhaXTi7T2bnk8LPfNSPeUf3xB26kF2ZJrToUaSF3bE5R863TrgZfJgjbJ24Mt1KnfKyJ5nzpZQGdoMA",
  "key38": "2vtDPckNWRtzxMaSiJV4cz8fG3PxKAEqPPMtvbUWnyz1ur922cRqTeEn2PFkuJMDioR7mhiUmJ6oruG4jytahPjj",
  "key39": "46CmPwTo4erwYs7srtsDAaXYZPN2rxsBRJAecVsZnevR3b7e3px4HqFoQ2hLQa9zNRMfKTVH2rzx5kWXdauo6VRZ",
  "key40": "H78H9k8q4gcvB5JRgxVoyp5MfdHaTMGG8CTgbDFa3VyPLqgNFwDfDQw3e9pphSsCGd4AQnyhT468SXE72B7btRV",
  "key41": "54wyybkFs4oGQw4ywYz6u13s4FCJi9BqPzRSL6Zj1xXmXnCfW5zHrz19Uco7ShVKDohiAZujegPQTkQUv6t9wmK5",
  "key42": "3LzUurLHuFuk2vi6MQiWKJhMiDN5orveMDjPGaaAB3Nq16Dg3RSH6cVkNLcoQzrLHSYqamz4oQohixKX62WgwCAf",
  "key43": "2jKcm9UmA8ZmyNT9vhWvoRXYRMhPz9zE8Erk3pyPM6MtDK2esdN87aQY62gRXq6SPFD2xAXkNUBWziqYuZB7f2PY",
  "key44": "36UVCfkyfZpGyL4fqshHysnmeC8KC4actruxmFoUii368vWYKdrNoJohdMKwCFarybXTVfh347CgtDSxSoSveztT",
  "key45": "4QLu88TSQDJe5wTtmMyTwhntpdBMTCAuAkr3ciJDoSLUccxHAgPyLcp4ER2f6YhqwCQHG5WRBkoS47ehyZ7xkmHG"
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
