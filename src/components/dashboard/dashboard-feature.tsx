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
    "H95a2L1BqnzNd3LjU8uj6jXFy83kp3QQx7CaugpQSHmKx3TB3gKHY6swWRKXmt6kCFmCLapaW6fjaRSZDFPNZ8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33FviWkch1EXn2sHq1GizXPAAV1GWMxTZUNCsue3PzgmDGyt82ze4u6YXWLgieZuh8XXgcAWBAU2AaU7uUrt3Wzw",
  "key1": "56ABG3kpukfRUrdZqnY2m7XRq8hijiGBrgyPtmEvhMRZrWwunSHAP9X5nrgWEjS76wb3RcZPyNWS7tPMev6U6AN8",
  "key2": "dxfCgh51oFzwAwB43kaeNmk5Zc2a7xTPfraVchFqPxbg1w9bUbx77ytPPfsjJZunZhkWvjd6wz4Nc139buojzoC",
  "key3": "4sUZwQZbnXa1VvUk6FLJDB79UZP8nAN5KCkEgtxzVtiL6DDTKPeoTgcV75h3hzA6ZPsKiQyDjkBc14hjuiunypce",
  "key4": "5tesDHNSPNBakY6kjnztjE5av3gqzW8kxc4ipMarosNHNzGgtpF2K2Wv53s5ezodeggCjyivtxEayEK1YKXHvsXW",
  "key5": "2zUzVJYQQowXUVwgqzZ7BykVxwgDLTnNMNpvWsTjWfijx8rfEt44WddpZZ2tTxTTAjRebUmfqQoHeUFd1Qts2Ct4",
  "key6": "5dkDx8XdfdWT9Ph2wngAyipgdTHqWXwD1Zfn4wHYdMAKzVNhM2nUqQNYZ1n2MFG7tmf9kEAoFT9jnxu2RqinPz83",
  "key7": "2x8TSfbiGKiXbG3TYf1G8DpbF8xpsjz73gaVNktVPpLmFHpLonWunWHvJfqHvPw4J2rPMN8KqvZfH2stpoV6ep2W",
  "key8": "2SqXzeAnP3SjYLFTjVMcutoFmojRv5d69izv3gYtVVvuzYyNR16Kf4heLCkinJn8rAwF15pbU799JdKwYFd7XHNM",
  "key9": "2DdDkpLKyKX91jhhWuH7ySCtHdu84KpmA9cvk6yrSaxkcXPYEdjSGjC7ZBNotfyqSCuxPJ1FoEzTXCLRmsVoP7yy",
  "key10": "4TTvSvt3yrbkAwZ5EVxmaAwqeYX6hqoV7jXV6VNrHDcBL8htdqWNzNPE7hdjxsZ42CYosSqnLQe2o1ofkoxWqse9",
  "key11": "3CqzWQo2zXbYWrgLAc87a5Ej4awbVV5ngcdS9NiBChmiNDJBg4EgXix5p1pjNfVxaKovtCfTVYuNJDxJpQW5QMAe",
  "key12": "AV7eNGhorrbFjisQWNC3tZozi3sABfeFNVyjZ8B3r58LtPcUWCwYbMBpEJwNbsZQGn8EBW9aaZjxieDJkzUjTcC",
  "key13": "M3oAtt5wMAFctdQwqGKipMC9pd7hHT8LXzdRny6XRrTExZnauP3anQejeLRz8dYKi9kkbdcdHmjQFvpGSoocJZ5",
  "key14": "3yZEzzTx4ZnTZgXepXgEc1ZqxGtjCqxEiwT6SvD4drnv3kd9iprdDR92ZPUjhPzoPqzc7HYGFyYhSQDDf63WfPXC",
  "key15": "4xH3yPnKqSLkDQMGEQLLgYj6rzSAjuDzi59svMk57kpBrFDCBaCZhsuP61cmwJ6CZR8RtvjEDKmbMLVJBBKe1SDe",
  "key16": "51RBHPXpcj23fgzdG3gWMYCMUHfkxFaUyKDAz5anSzsPTUJko4mvQHbUuMYf6a6UyrunRhRNt6dfakHkxQDaeubA",
  "key17": "M1QiczPYc5tXbgW4XwU6zo2ezTmBVZf4JG8HQMvdwfrEVKx8AqJUrD7cgJHPhtq63jytyBCYmXLfxZN2RhCaNd8",
  "key18": "6gxpTWEGNsMeq79fgQ8QHDifkPsYQ94t5BmLJMvSek3fBCdkx5LFcKt4vbU38beEX2qmseUiLKrsAtAGhFC7y6x",
  "key19": "Jd2PieZYRnSgbPGFm3x98BhbdxVJpWfx2iqjydosrz2JNrVy1kR6uuabESTUcjnmAM4VeDL2Qwjq6X8cRxzuwz1",
  "key20": "4n78oMWiuwyfARyz5MR7wcT1DvSCTfAPyb9jnJDBxec5jKjAycAje7ERNtq7gzHG1sTLpjxokZCYQwUHoa8tRjXK",
  "key21": "58QmPiquYKN8mjWPcfiusQXWbeCz47W1SSzDtYKuCman7MdfH2fr4bVmRvDRWJi8MSETdxMB5JVYZXiZ8v5wUnNx",
  "key22": "4U8UsTumxjTyf9j4a6mDwtGBUmm3CyxgbddjnHhDnCWbcQMLv1Ep6ysveW9LJrL2eS6DGZyzn5Pf9tUbtvrNbQ3g",
  "key23": "4eSHhz1aacvR1HKveQHgQk2ff4gMw7rsCE93ksVoE9FnGuS25kJCd9WimCGDifJUKYM3eiEhwrtBHkV1NPjJ174r",
  "key24": "tgMWYK9tvWefkABYyc9QB8cXwqmScQVrwcgF3vP8iYGw2MwoshR4NQKgpKm6gJwhoaNu6uiwKUco69Pjuk8ncjz",
  "key25": "4XwDNSx1FLiTKwYALTnbZsSBd1tCRVboqpsxTcaFSmyVn1DjzUeAvBqmpSd4dJRSWEwakb24n2jvg1LofBEgbpR2",
  "key26": "3PP1gEXpvQ7PLQGvhn2ViurujC3mjYCr7J5eHD4PmWjyUQWqaMc3RNM9RCYYvNcg1S2mkqKX9Pm1FbL2aHr2guZ7",
  "key27": "56KJFrfSaScEyUdCx38kkZzGVbJk3MKXXyaYT9jFbd1gAiwm9suV6bbXZon8wzC6heJfc6M4AK4yitjJRgcRy7eN",
  "key28": "5z3DaM1s7bY3ceJLArLmCma57dybsieXhThfWDAivtmhEWwPJieRLafySLKL9SH6LENAZ83NPWuTN5JUPZ9WoPyn",
  "key29": "JEcJTWMvx9ZSDTUZR5nwSd14WhWRic8QVUdQmqHDF29KPLb5vJTo7Sm92uaF3wgrz8QmrVRcPX9iwx2WnQLYK3y",
  "key30": "4Kxn9nfQ9q9kh5gT3fx5t12qmgDhtYCSj3bUopmMKR5e57GMG4ULbJh4wbee4KFbKpNJcwWoi2nfqdsVETvHCTce",
  "key31": "5ds5gNm7Smk6Y1D9h39xhHQLDgqs6tmHrs1GUmxVBEVcjvqXJHZ2zQbEcdi8dZb8c4NMWpQeHzsYG9XqY9z5J84P",
  "key32": "3SojX3EybiGxdMGV5icAYqUvLHYfauUC9UEHKBc6gK29dauXGLA6Pk2ZEA5FQceAGYzAT7KoYvv6KYoNs2Qx8c1p",
  "key33": "37vgykcpNXzk56LVoyHsE9coKbvL6vmd9Fri7ugbTZHJyqxRKGD2q6Bqz2HZPDr8w2BaTFfNvJJniCHE7YRzNrGP",
  "key34": "yvsLCW17CjhNf5P4fBj4yK3bM72r92Z75jRy7ZhBsuhXv7RnXF4H46W3X6iFAqmSREnWRKqwHL3EWnwWDEZndso",
  "key35": "2fmvwJxWm3Qqb4y5Y1i9hRJQXm1YhbCpGdBMLeVisM1hzHTBNSEdS6G7iNfvhNmCxKSNmvvPKcLN1zAVSQttto2J",
  "key36": "kQwTvWWKsgXHYk3xvo7UrnCDvk2kR84bKFPJswZY8Syw2yq9z8cZM3n7SJ6Gqra5NMPmQ6okgkgrFB9Wi6n8row",
  "key37": "3oH3w8hrjTYw1XqwignfiQQgFFFE4XjeY6TwSY4QzDwAbUSeDVjsvXLxuVqvUfU18XZ9RAE9ffJccVFyMCbaktno",
  "key38": "3uYmyoaoHpFNu38No7oZZxxT1bxZp62FTFUVoYNd26sTXsCesqSgZM2cGUhBmPyMLuVXn2UjEZYUkpzuxKr6Kqp4",
  "key39": "2hiWjMc2155dwFtD73JAzu5qvfGp2m2QPfnwbNUd2mBMhGETt5UGQyPB36HWBT6LzBaxVak3N3ykDR6azxVjjhyH",
  "key40": "vsVUaVgxgeY1azQVJ3fu3yw7f2Qv2eBNyzarNdEWy2LKSLHhdoHmmpYooWscQEHuhYvH5R92xLcioxk1az5Axrd",
  "key41": "cJUuBKwCRLwGq9rUmeaTyZ51jgrYWwtM84fx5WrpjEYywjbk7xpN8SVWAChSEqYcAUQPDD7vJSUh8NDQHfrGkap"
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
