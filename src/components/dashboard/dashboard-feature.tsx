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
    "4YSAf5KKdxCkNzh12nyEfFmAGqgdGuTHzRMpZ3uobcB1kwtLWH84RfydWjs7XqDKUEDXZheQEeap9c9jaAnEknXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jTMgQ5wimGYzD9tLiLtLmxnWiTPWUvix8PSwqM8YNs8uaHsyprvYFyEPWBeVyhAAynZ6G7krGBez6LZ2mDzb6Kx",
  "key1": "4DnhgeLTk4XwRwMHm3Wuy3i8XzrokoeiaXKAChooNSoAhDEcU7gSdvtbnt1axEzgSkjajWXjgfvhP7gxCrqgCtMV",
  "key2": "2d6wXW5EmLV37SjgPauSC55aDkdhL9tmqETnVyR2WvNyXhVEFedxtgpw66YHgHq4EreQyByaNkijPdeyXBUmwsq6",
  "key3": "25XtEinHUA9QtFK6dWBNRj4zL9o9zKu2g4pJ5CiCMXRMrMhT4Lhe1T7M5F79z1fMY4sxinWY9PcLxYH29NKSMhLW",
  "key4": "4cngUWwk4MFz38VTWt3TscKwttY8uHEQtkMMybhBXQfmRhYMaGGf8C2zsVpJQcbZcac5hKBmHMEQF8C4WMtSZysB",
  "key5": "AMQAhtTJ4iKLfVT5wLfKr5zyxWqF5KStztzBpSLGw9fFFiQNrchY6EFA3MTYhvhZnSmzzoSkkVUn7UDiEaqskUX",
  "key6": "4861x5TX38hBQuLW2zDExNM9AgyWNdyrUT4xjQsXtWJ7dNs5QDbfasCAggXMzZdVuQxK8bta5dSAKCaMnMYoth39",
  "key7": "5bc3kQrV9q3bD89aCpzJuUN4ZhgKSLZq8PjRpqpWzcRN256ghsu2gp99dy1JU3sAjYz2W8G2kHzdudsuZK94kpU1",
  "key8": "dpZ3HxqUvEUw2Veawpzdo4UBrvdXAFMmASccacnUe6a3fR3SMU1BPYwUxKV9GWqXZ26Q5H8eNN2euAb774ckNDX",
  "key9": "baqEVx4Nu12HV6zUT6tmR7NEy6dbxUCdNQbMxKqVTCv2akGUuYzsfjvk9zG788v4XyEC7E1nwwTgmLGNNhqFRqN",
  "key10": "73mWfstzfu3tKrRqsV8EvkdtBbvbvRsW7UrTNnbFTPJVkuYuhxsAKYRRcZ7FuzsvccAJJQ7mCENPcUrGmsYaGW4",
  "key11": "3hx4BYDwY47Hmbgooh9SxJ9hjeRX3Rg6M97WzMrbFwjsrnjUoJWcCc6n9cD8LkTV4oshkb3mpqjM4VHd527sN4kg",
  "key12": "4qbJjRyXpxnqTLnyqjuasn8soexcR2Uq4PKRL5VjUEDgLVDwfqoytEtAhyQEXGbV8YwBE7fAFmb51nFG2s4FhTSN",
  "key13": "4ZfzvgtxsrVybyxnW6U2N1mAg9QNpHF2eKQZAQ8cGo32344YnWUREAyQo7dSiPwduRLLZh2aMsLhv4vR6f8DwLtK",
  "key14": "4tULVwBL7gsvEX367neicdqXbYWLHTBMXRm9UNKmrpLyC7DB6yHitfcLZwDj6NBaV6evQfv8KNWe1iNY6r1BE3Yb",
  "key15": "t11QPcDoRHpzPoeTA193rGD5V6Axaxw61GfLfTh13nEgyepJrSTGTmM9xv6hExVJvLvB8LMpHYR4R32Waqhezx5",
  "key16": "3Tb8GYAP31FLb1GJtZ4XBVvgXG7bmFvoyGPUNfKaz3x5r26jytr3wqEpiYjL9rDF15YDLguj7FxeksnhoZsgRUYi",
  "key17": "5wxwnoPKySKbSbKHBwZ5qsuppw5HLaXuwXU8PX3nnTYhKeEoJUw1ReKMVXGey6FZpvrvKzyMigk6hjx6FhFCz2eT",
  "key18": "2itc1KekMjmFooNmBngMAAU66Kh5ioyi7s5Va2JjbEgS3s8GJ51jcai8J6ZdN7yED3fnek9BMbZt8dhRo87wLhKy",
  "key19": "2U3knHQR78ga3M4McrjiC779dYZGFkmBq1LBmdep1R2YdtA9ixCnaGgSvfQyxeH6zg76c1MFBYL1nXVKjHncRYih",
  "key20": "4ty1d1w1cfCArxCyaDQZhP6P29HceExEnXXRiwTM2iau9xGuKq1jwy6QZnk6hotpueC2W5YnTiyFbWrzbycV4M25",
  "key21": "4JboYFLDyAXx8gWsMDeaFz6mj4GdiBpnHeoM5LbvCUyHrcMJCa4hkRYLzskGH8KfKdQVm8vmEkPpawpt2NrnSc4g",
  "key22": "NsXovP6RWumv5T1jvUqvguQ3fKqTf6apKSNftsCSgFsaWrZJhH4AMFrM3ryagaceA3ZYNm38JmSQGmhbT18AjkM",
  "key23": "2KWk539HYHbAqYA7T1LYKFgwLggFvhMH8Bc1Hhob4UwcwjG1uycJfH3tRABzqG86SFJaiLjc29yzA6k75dwabCBj",
  "key24": "2vbvHV6J45w5SafxSLEYGVRsiY7PjquCVqiEYC8ZXRKE8QCVjcZtnGeZGY1QYMkhHPtBaVieFwk5gmeMn1p1Cmz3",
  "key25": "3Bk4b77tEAH1jBsJtA97isfCsu6doP2kjEfMPpP3GC3uaekfugxEhazTwwvBDnxpKRskLvcaPT4ceH6HRk6CJQ6P",
  "key26": "3XGMm6bMxLkh7jtTHtdVGbHAbEnuVbnHQJfhYrnX5AYuV6TX1naAkf878wardPumx6pAv6UtAV3vNQmDsNcddwbn",
  "key27": "4PpePDRLe6mTtNfceqBAVPjNg9v6sUpN9WgMsmgcB3CPEyQptikbgaJqQLuHC6PxZxFmyi51jH1FgaAwAeChA4dB",
  "key28": "2LF83FQFsfHmnx7tg582G7EDcH2KZvCeidhqitmWKUL7G4zbFNcArSPH21qbwg5YrJQWnsobaYu1G4uwqmLH9qTL",
  "key29": "4AR3XAKLtSCPQaN5CsXR8jJBFa1BG458Xx6b2oT2KpLHGw7KbB31V5BDB2RoKpxmQgoGwoAZSgEMd8RVk5Hv646M",
  "key30": "4cZ3rs7HisoXGFNeEhFg9emwiLJiiw9ZYTveE7KkJduieCvoJcv7jeb65Q2buWfuGWxfPafujiQDaJb6bJtdHZk",
  "key31": "zSK97pPA2stKUbHNkbypJiokDAxfLcK3p16MYDwrsy5KHwdcrQQ8bpikA3eM7uBEmnrk3fYzkF1VdsDafyehzq9",
  "key32": "2KNLi4R9cwtugiE67K8QYkYerqMBS98cM3uBgXDeQNCA4mzJSGPVJCyrqZtBZQCgzeX5Ch8JyRG6mDv3svZbBY4J",
  "key33": "43Zs6UhES6bhbjci55s3kdj1ox6wuEPh33mtQiXDBBCQtmqKdHJWSMXo2TAX79gDc4PGhxEJDEybkGv5FX1Zj2gB",
  "key34": "3d61LScjCKTmmxBnHMLXZDZnsBgbzoVYjzychMa2pvqwUc7Uc2cFQQEYC2gBoeHXP5U7qHrYcqbDaefnwDhQ7PXo",
  "key35": "25iVrCVNSGGuwFi9uXPQ5a87tS4XYouLXxQd4tYoMQVrBvonghYuukpJHErRTe1qYffUyQ28wzu9bSVMJELB6oUJ",
  "key36": "33HyRLi7bjMZvH2oWDvQiAaEiCgVzHUaBXZt6piTTQCPchcMsbXi8YTYxjp73Rh8dSDKDKJFuvnat6Qammg5NWbR",
  "key37": "3hPXgWiwYYytD8a2jqrzswbLu2G61RS3kdhe7h1wmiqwprDuTjJUqvSUEjB3TYvge5yfSaK7NW6ttALNadbjaqfW",
  "key38": "2YVSD3rn2AbPq4ZdBjXXRSsBRUxxHUh5J9daVTTRRhP232fPcca8CjjiXm3RgSoi65wDKng1ajBLvEAfRqM7Pi8E",
  "key39": "2hDZccw1M7sFaW6qbvYKd8zXqD39U1uH6y46yfpacrxZzAzQhRJo9jVzcwww4xRZER4N7sbdEXN2Tngei9B98abq",
  "key40": "53VHYiEoAMLq6Quayf5NNrwJDfhqjKZ2TNEnaSoud4ZnvkFe49mCSPb9tLhEVitn5SRtGBdmRS4iaHbZBhLG4kFT",
  "key41": "3h6hvZHLuXRQYYm4TuA1ERbxUs3UB4mSAMW4eB3FJNBMHcm71kAVCJD5LW5LuhBtNkbNJGnyaK8zeAkzxZfrLmEv",
  "key42": "4HcpZKPAdd2x73h3KssUUTsEfgyH4au1BZtQo4XMgPVEo4NVt2KSpqYPo8E1DTCHjMxE6zrkeUgwGpnTJ2efiT4y",
  "key43": "3rEno5sKx1mbLZZrbCqZgGd2Jr5oHT7zg8WRi3HXQhigVUyaVjg9iJtRSwAdcGWpyTkUGfAfvsHdhc8WF1SYM3Q9",
  "key44": "2c8jPSoKqpUEzP28CG9CAf2CAHX33koXjWUWB2v2pStNW8kDujvFwYPfyX4f5aZPH8HWgfzCV8kk9EU6Xju3dHgv",
  "key45": "3J73FBZuxo9Szw8EmrB1pAPthQSiUBpTgD2GQtWjJh1dmFGRzhfjqARKLy56PQ2BFFh1mRUBk4c2XTsfijWLXpsu"
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
