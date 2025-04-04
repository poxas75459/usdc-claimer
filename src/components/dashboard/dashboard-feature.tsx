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
    "2DD8MNZahFyYtNAJrj8ZM6xXF2QqcdZxP9hWpz16GyFYwZHG84T84kyGj3xj4uyYEXQ9Tkjr146D41EtDLBP5EDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aF2Ymi5hCZySaH8EtpFMEWDqJKLM5Rbe4yqsepsznC8kP6sgrp6BmDLeqfMTMDPn1snhoyt73jwnAmfKYRJHm29",
  "key1": "4fsX66g5xW9fm1Q5eZwfnRFDrFNt6ofws757qKDWy8hg8fvtHbmt8ERNdDQ2Liscia7CcoYmgy2MSfRDc5BaPJo6",
  "key2": "45qTct7YV6ZibKrDueZZGMmGLoeKVV8sAV7oQQXBuvhmETfHLfaPHXYj5VBpHtKrmpz7f9CNuUsctG55Rcc3Udo5",
  "key3": "3YLvGjCAhcHQpySJPb1CDoC1yz4uvmLJVSUfhYA2vcaCCL1kvV8cSQaFRAVAAXC2o1jnikQBgDXJjgUEwuSJCVCG",
  "key4": "31WbTV7kaXgC7R1TY8dw9Rj38STCyHr2136ziESPERxsQSysheX6TXuDDuwkpQ97Z3ZvbDvxm6XAnvjgALuwjB6v",
  "key5": "3Y2LbJvdsvUV3L4g81wWYLKfa2YWhJub4evX7Tx5drzbV3sSSEaT46tiY86jWhTEBcSBZHeuvzAC6NVxamm9MxTa",
  "key6": "5RBAUdnQ7xokGsRC7CaSuw5bgy2Bgw4fe4vKSDrzm9Asq2LrRpzUBgTJLzvs1e7EnfV71XRJVvUxeHSvh8iHxDuY",
  "key7": "4iqTQGU4AK3hjPUjgQ4V4caFwrY9bZZcEKzr9TCvCDmLirQuybSThqp32PkvmVYzcDJyx7sq5FmzdyKeBLDtiMAQ",
  "key8": "2pQkPwpijL2aWYRiqAn9QT7hpFQiaQF4yzFb6gngoEUCXer7RxqeP7yEkf53b5jowLWTZWETX618DTwpgDMNP4TG",
  "key9": "275rrE4Dffipp4LK4HSFGoAkcokvgZ5pKtp8ps6RpHaYzzR8oaBj1a5chJGRWPD4S8voxRCjktZKDQeu7FQS2yWS",
  "key10": "24hvpQ3BBd9awoLE8L9kVFQh8412zchyoqp6A4j7F1DmDAWdPjqmrjGWqKK4UAa7WK2dAmuaKo5Uvm3dKzHNY1cH",
  "key11": "3AEYNBLxttJ3WTnBxWidgR65CBzUeJ61chbjEAKA19UZXZyRhgAzWks6XW2UUgs4D95iX3Red6PnpRcAqosbyEMg",
  "key12": "57RccvnReNsUiJa8PP1mPYioaPC1YMtQwjwNGDTnn6tBWCg1sivNSjcaH7HkF2RhXyCAsqBJx73hbSunyWapK1uA",
  "key13": "67QDHDd6UJLQniYPiAamwTtvtQW37ErNYxV8es8cKNj5aC53pVbryniKKLV9QhNWExVmyfznARYx56gTu32gQe3B",
  "key14": "z9Vq7D23okpoNTazBLnHK1sAikqSJ8AHjugXwKBEH8izMMzeb49HEMAVdqHEXV1tiZuirXSYB431DMxALRWAwSA",
  "key15": "QK3Y84P3wBuviGyAnYHBTsCBS1LR1bPcuBeZK2UUKZQyvfsL81PFxmdrUuytPJTNtT9ANH5odmeu9zaUxfBEBsd",
  "key16": "5HH2U9fXwnp8sEcaVU7e6ivKczSrLFNuFSneAsXrLgYsxvL3jk1vB3kXB62DdA6zuMiTmufdpckjEkjZnwyL7b5T",
  "key17": "3chiWSorNAkwPnknx7J36Ue2sGBWTwGppiV2R5LBVo9GKmrmDqg6MZtXJEnW7CsSyyxzUj5HH4J4LNHojysfbREs",
  "key18": "4zm1Fm5HqGGZwkunG1CWVU8omp1krco1sg5ieuD6jMeJZJCMQkZQDyempSboJBUkU1aiRFkE8URXPJExT6PnzJF1",
  "key19": "KbVQhiAxk39b51UTp4iQjzh8uKZ19dTZyaWUe9JwpWdfFmTWRerYfWVycEHWA4HUQkbW6PbKxeW1Fv8gf5gm2nR",
  "key20": "kpcKwX1MVxwzx5WvhcKizbWMHPM1rXTQ3egJKdrYHrhUxzjA3Y4s7M1LZufBmiNppiKaLUpZXPphYNgCsnFjnAV",
  "key21": "59t29iRiYMxBgzyXmPEs53EtmT5ofRTSM8SinJsy1nHTpLwCdc7usHpkcbrYVK4bWbGBRGgexRyNug6EHFTXs69t",
  "key22": "5k14Z3xpNby4tYgfodiRbH85G3qmL7v2vzXiRcFyzwuhLkJhfj5J5DXfxSZX37sT5VHjz2W75zRepyojRv3Chq2P",
  "key23": "4C1WbxfpRwM9K8uGerMA3LiDvyEgQHpepLNhnwhBWX3Aaa4h5L9XZuJXRbohWsUqazGJufUdo2uxBwpc8z7tbjHD",
  "key24": "Y7AMvkUssDuWy8ekzGRfVpuq9ktnNTYB4b3byMiaAkGLrQkgVAZ9r8U88itqA4Ba68Cum7qHKANySJwfyi1icno",
  "key25": "5n6gQ5aNxvUJ5kHAQKv5HgLUiX1LhMhWCyF14Y8VeGCJrPZKy2rq7dWaGZNk9XLCTP49RKQM6n9GrH9tq9w9B5nC",
  "key26": "42ztJs75F7gUsV7TmY1mRsiNAWR9XZ4JhXCUf3H3cFur3bf86DHnSdEyfWXfQK5pDTyHuXPGQbu9ktiiZgFPnNTm",
  "key27": "qw1PhgsKpRP1U6C2b1YDNFqFA1jc3pAuLXE9PE68ZKCAqXvRx66rEM4jqCrcau1KVoxnVcojn19wHEVfFTRR9yC",
  "key28": "2bPtXVhYEJYi9GewrEb9XzZJ4KdWe9jQ8oS9TRDQwWACkB75RdcchEyBXrJRBf1JK99VpbrGiGCGCVR5M2NhNJvx",
  "key29": "JUSFStKJGBu9YNajNahGTQJxCBKg2jSUoLnqrgy8qCvi7P4tv7eNyz76JqCpbfWmzWdP3JoiSo16nnPyeDmJwFD",
  "key30": "2U6q5optV1mRMadpEQqmeC5TZ8Fhc14B6Kqz59jDC8ESH6AseXqMz4Z5op7mRkya2nxukhb84vhw6Sum2PKpAQ6n",
  "key31": "3n1tsHz9d8Zgah63giupprzxKBZTJ5BEiPXXeoq6aLEdxe7Zo9PZJthMWw9LQ5ms8s3Efk5srTGVmXrkWuLqL5vH",
  "key32": "2VTMX4GzXb6jnj4a39vZBXCe3zwfoEAUSr61FESrZVGoS4Pw7LdB3CXqHUV4KUTxiDRkvhnNz6pk6wss1o9DU54w",
  "key33": "4zVZLvudL8kdn7DVyHsg6XnTeh9z9u7UNbv45grBhzaoLFxhZbDkuWAyFNBkMNUojcAZZ2Sf1xrxzHqY47YDqwc3",
  "key34": "2EWyDsxGJcJCZupafXvTkM5TxA68G1qTuLQgFX9DxoqtPnNtHG7WNfmxecJizGgZAwZBwKnt2zZidypfYt9RNKXm",
  "key35": "5worbTDS9gJKiscMHodypbTNhAsA8vgLmNHHTP28kq8X8QVwFom33x7te6VCMnPvTZJTwMjU6BV38JzxXCmsdH9i",
  "key36": "3n6stNRGHCzq12tPXJcMJUbRH4b5xTqLNPb4Uxunk9M9poHB5jpkfaoy6cX2Hahem5sNNiTPcuCQXKVa1QK4R9oQ",
  "key37": "4ZygJtoDBgMkvvLYoMRFm4SMFjsvysFpnWourwNt7TRzGzRxq6WHsN8T7cB2Y5Vvnq2D9271bmpxfuNCwwb2hEYh",
  "key38": "66W9iFC1n9wYUEqDBUcnijUFAsdwwkEzKyrLYKvF5A1qBfPdBWoVhR2YvixxaVYdhr7UQdwg8y3XH8syhYyPZrnp",
  "key39": "2EyiofbeWSGiohfTMGJGxjr1u5Pwr6y3BVpificajToPkXTpKUE5RDJgzQMe8x4FwaZGBDcMAZXLJwPJrCmJDJw5",
  "key40": "5urKhSceDwd1u4XbhhDjDuiEN37vuGErW64tgxezWsmanVArezZbU5v9VQ611MZkH6WxDFGx4XupeFxvwA6ueAvc",
  "key41": "5U4RiFaJUgM6gXAFs4oDw1tbngtP7EgpRzLDkXcYAXyfCH8Fjgg2VnWQWKPhf1zgPYzRkaZHZKsLvcGJsJC3eosZ",
  "key42": "ASp3DfPH1TdH9RiYwjhKbKwuv6aPRqBaN6QUjMfPAJeJcKxDQovGLjLFAtfYHBRwrX7FUMRMFdGvy46H2Sx1ZuZ",
  "key43": "4tBEVeeYZPHo2VEW1NnR2Cep6MgbHx8nQNK5BWLUMAWrM3AUYsrjuywdLMBARJRxHkfmRvFD1i1grKnMWBEqP6yJ",
  "key44": "3fLNJsVvDXS2VB1QspUfhCPTvMLwsJ4UUbGAGEXofwf5vR313we9vEyiaqb6JpVj8enLShSqGYq8N9dCQxaegVpa",
  "key45": "3tse41w3zJe9pZXrRQCCHaYs48aEwXVrAWzkb2m3L4Q1CmC299XGN9KcSdKA6yC2AjCNEFLwo4fBnX2R4cy59zoR",
  "key46": "4Eb1XuXrPvDLzZygBWZqWTgEhbAswJsihdrQf3RRmCR6QR7ZpR1Fnns5k7ey54jrcaPDwnXgHU1dbVYLo3TiSpuL"
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
