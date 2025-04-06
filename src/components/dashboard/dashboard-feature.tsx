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
    "N9jeFpQccqsSU31CyvPtfc3dTUEa2pAYCfmurCVqGRJe1UiDV7WUetJxUwUvE63sqLJEYGDsDp46MXZn5jhXSMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tXZam6Jhq8vSxzPVS72bNGNVPMVTvxQFPhV5eSW84tW7eARudM7TR2WJTZmz5D47sC3JiKcDMkrNMh3tsvT1YZS",
  "key1": "2Dm6QxpzH316FJVHrxTDZJg5Jdx9caL16B334cQKDBzHHHBTYS8E6vWfaCgxmv1bA4P743oTfJN3uqSkTc1551RK",
  "key2": "4FEHwsQBPwFmKbQHdQKLriMTPzgtsBg5r7kxhXaeGc5eaE8EjZTJ1CKsSgvSUzkXyYoXuuQnUBY8q1z3VBbr51vW",
  "key3": "3q2AFb1xSMgKbhZBSpB6GqerFmKAThSYVjuCHBdVmoLfL2AhV4MSwHYJKjTtZUznfVkHZpbi7JJQReJxdwr1HuQK",
  "key4": "3AnjLUenQNKTYzoxNXKQpoKEPhwTUcXsqHsQT7fyMqpK2PoVsaUt2gciruqSEqVEg1VGHL7fHRL5z45dE3xe1NTR",
  "key5": "2MVk53WRgEMQishffJeYdNT7t2AamkxeyR687NFBsN1sM9JPS5p1Loyf8JNfdrFdLjKDQ4mEUFUSjUMLDToKtsdq",
  "key6": "34hvN3p5df1wgQZot86HEdzDdaGyAZ9aq3qi8KyPP4uvXLEVqkz4zk2Xsays1kGUM7SUehQwE4EoWar9TuhGZXdf",
  "key7": "aemReDiz6LUkozCKdWGCkY4hsJctWuTpLqFEfw8C9u1RguMMBwbj8LntHU5GWsDLWXUDnFAAsjW86sAhdAMVjqR",
  "key8": "3sVkMJNirYcycYLQAd6nLHaXV1UeFCyGutaHD61xNuTUSm95Uyy1TLXAbhgmCxsW1vMYinRquZ38MPitUG8NLX7o",
  "key9": "2V6heFghtsJBmkqo645W1kxi8duxPHjA6r7BhKk49PkPkzsGiVc345QoWj6yqAj6SvxHpKDyFgmEwzbLoJwKMSff",
  "key10": "4wR3Mq3G2kCu84UtVAxHvr3rLWSNSxSQhR7WC6epVitoFkJVFxGrSXH1DJUnYdv7mZmzArdQKGtd4y3SyS36iZwL",
  "key11": "6a8SFgDEXuMRjzaNFuLANn33BviW4XxtbYtoYy7jENdiwfkLXwn5gxH1MpiBEtueJMxPz61W1uz7yV8LeZpBpJ7",
  "key12": "4rSS5wt9MMyzKpKc3wCpg2hPw8qqJC5SbnJvVJnek2BoCD4yTzg48BS8rHAASfBBmMvQkU9DrBs64CcHLrzZ9Dv1",
  "key13": "8rWedwX3oxgd3tm7JPbgnaqKh1yJCTJTsvnbb1Zcm7aAx7EFj9mcbm4WkxqzPwvYe2VbsJNhkdJ6nKuPknoADjo",
  "key14": "3SwbC37B44HvBC4Px4gjnTJc1pRJNeyTtfbD7U86JJAzAJKAm958zDDKfRZA1uKtdGNjB67iWdqbVSGJaxuRedSQ",
  "key15": "289463pDny5gN3w6YKm55YspKVFkHTY1nnnr1aqizT7REYkKiY7ri369s6UgVuuPZD81qmkjFhmgae1ZKkZrnTjV",
  "key16": "67baT1VadiL43MEi1bJXaenBXgCkj71zAy7eepdcHboMTsG2sm5RJzFC1pm5btjzeNeKzpNRydRyVyrGurkqYLvE",
  "key17": "5WvUc8WxYhT45NXsmsW5TfzPXwbEey2uhDRVhUtP9NLhzkuBRDMwPrXaPS5rKVwHjs46BMGdv4ReVkH2oKkd7DWo",
  "key18": "2bNr4462LaAgyFF1gkuzmUEE1HBBaDvwT7jLLUam6nFzkjPsCcWPyykFcrQ1WKCBHTvvMssT3g2KMVt1DrAtgTiV",
  "key19": "5gU9ZSkW7vHLGNzR2ngotEHgJNuJ7MHW5nZGyX2NeMTyYdyXm95huLmYTTPsUiTPtv3p2XjuBS8nHWDtyhcbqgaK",
  "key20": "46kzKwV3mRTvxjBGpjChc8FKUHCV5LTfSNPYaHXQWKFiYS1s6tRanYPQ7GyHERSPK1b1e2kNsi9sogGKCDxzvyQ1",
  "key21": "5z3qRRUsJ1kC3avigmjuDhYo3UHB4SCqkdHHU7CiK95YKiNwu5z73xPnh8ZDrpYLAMbxZa3S3EoNQUdHdovuR3j2",
  "key22": "4mEQQ8TAVDDEX5ponRxhkmV4RUreo2xsq53e6HXeVwhgRx4UwbZDhVHwZtKJ9r9rySGiaUN87Qsm91NvUJEoLnSm",
  "key23": "3JW18FCQxuK9vatzyGiox5R9y3YnJXegmWa3CPGEWFzrAwvseGWUrzBt7jmcyM7HyqBGmC8AXs5rYUGRUu1w8Q2T",
  "key24": "5sZ3Wwd4cfwGbzA6cELgqHaAhxLaxKhAsPwWGvS2d3MsDPCy6C1NdGQsLFRkZKyjm1oDep1zv1M5iPo2w17bN8s1",
  "key25": "1BoSDEB1ozZF2H5YSdUkgps7dxy1Z6uXtsQ5GxkL449WyVjEnirZg8bZEEcMvUdKnWChMdbkz3iAyq9v76t3sZc",
  "key26": "iimTrCsu3bELkcY7Nqv5DECW9VXG8ndeJnbLqBCjzxWK8Fbq4Dz1s1dYDed6CBRn4MC87YyfgW72fw2V8U5iKiH",
  "key27": "67AkEQon9wAMsomXb769L5TL84rLU8L7shdkK72pzEcWukReuGvbVzNkcJLUppbiLfeXtJAt4xN83zcW6nwEHEWJ",
  "key28": "2gs2tnJrH75RtBYgfL8H3izYXHES9khmK1qkJo4d8KfwhBsKH9JU2qD1FDLU7A5NjVMymKAhsY4F6JR5XAEh5ttE",
  "key29": "4MYGo1hRfVHJYweLjgcEKNAQLgDdTdqNvFQRWUhjzMCKq9URHMNAjqbN7CeR5upvvqBiwtkhghuqwzcy1So4Z6YP",
  "key30": "3U7owwSmRWsqQw4VKwoTcHxPi8KgLCJq8NmQBrDVKBjd27czi3j21TH9xna5Yv8cDwh9LBJwH4k9pSCP3yJqo4Xy",
  "key31": "95afrFbraCXZTQTQxL1ArmbRFJ1dCXG6zeNmHNFwgSCmjfvcLeGCkqtNoE2PCbttyJALnJic1sae2RBJTESXRnS",
  "key32": "2Yu1hWecCtLFss5F1UNQdEuC5QUDSY49MyNapHha8mXGGVJ6p9Z3yzRcQTS4jAfJjCZmzCfXuT5CfpY6eSQrn2pA",
  "key33": "4gQmpVMT9rRNWf77Pwe7kxLmJWZgUzNC8BxTgRgJ9WLvtzeaCyQ1ChPjqmqvrJdT2UhNBXc7H316iNiXw7mtU9Hk",
  "key34": "54rXdPd23YsrPgwFFEg2TSZcWdxNgt2aDCmpNdVRnr5WWpaDyEZ5gPqbwGKgQcaEsRyxLqzoLtDtRFSdJV2ejAcU",
  "key35": "4HM5xUMFH8CAYwjAjVmW4r4Xf4MkTfP1Z9kwEXevuutKbm2mKqSynto1RQQ5dQZcUrnnerx5HCiUo2XygtZF2t5Q",
  "key36": "gUCgfbDn8do3DA69Znp29wLTJrkGHPjgCJnAkzmRb3pWV3BCiAb5FnqWBfYbhno1TSv2vkpC8UWjMr5bSWtwUXn",
  "key37": "UUfJuraABiwDtgLVkx4jLSLSP9WCfu9SJUe4RfbEiVxZkHevdh8p5Jyxk75hkvJ2GcphAot5RPKt13DFXamjaqe",
  "key38": "3T6mX5ffhvU5w1BMZpfVuNP2G8bvYhKeav4A4XNt4htqBvtiburn77yAaShDzWN1u7VxEja6hb5FFAXVYneBffwC",
  "key39": "2nLiEafh9q2FA86ey9RMietRbN8YmQoMxsf1xHTrj3vBQoh6u5pq6HZ3pmpdSnS6brEA93hyPLsoLCv4DNiPrWFX",
  "key40": "2z6W3EVCTivBv1qZKpbQDYWbybzeL71fRUU131jDXqEKFdL1fGnxpC1xizJhYBfpqwu2mgvw4LR7ZuLHhR2rPBXj",
  "key41": "3RQufHGjb4bgxj8VGRZMGY9uFG2Df1ZVh1qtrryamqK7Jb8BQgyxjyoJwMugVZGSyBTL8ov7raUnfyB9t2VoAcHp",
  "key42": "5BPMH2ZAXwBsougjAGXveLmBT4zX38tsJazMrdJbybu2Lt8sc5w6AmiCULafzKkJ6DgnQKmZQ3E6cykUoYZkeZMi",
  "key43": "3DEm7zekhQYANYwWXiN7TyxjCRi9cnpvq1BdsWuBZsQFANHNmNfRxPQiWFDJTovPAicHmgE63F4qYAUFyfsYZxMp",
  "key44": "4FjHrQhhJLyrVVBhe5HpjuXkxSG83tNGKTMtaTXXNn61JwwPvxmMqJwEj8Q8r3AnL3BP7k9QUbntCSAuqwNeXmY8",
  "key45": "4E6VXv2CYS9Co8JNV2FBdENUmUpNbP797cq2Kc6jWbzDQS5N7QMCrQgKFpkA5LvQE1z17hWHUt3VD9JyRkCCdn55"
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
