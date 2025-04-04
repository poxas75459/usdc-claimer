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
    "nNRNTnK1ZX1HfgPrUY7dJCvi1HrCKhhjKeB6oqXQhdcGUuESRovRTyzZksSuoeBumxndJY8ydEYaCMcqDbH46Wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j1LVA1rKDfUrqVthCC4vgEYzrrvu5SBiy7a4jjpaNfpWqmXLMcCjnAYTiKXiicQVnCkP8rHXS3q9L9QBQDMgjvF",
  "key1": "4FjyrLF82gt8gZqF3xhow7BmApFz6oXvJYmAsJzpRpivnRHsyy12qVYeytNU51hFFakun2ZRP6hJcgoER1igdoQs",
  "key2": "wYAJFT5dzt3Tm8UAYwYfbuaPVLUzCSEDnryLsRjaREFYrdSwtJxNjmfaoDLWHviWkK4mMacTi4tKCYvG4iYRCs7",
  "key3": "43CN6a5PLnp7Wriop4gfRY6vXRpF3r6iMiAqvNG4DqSX3JaUNo71oPMCQMEPJSB4QTF7YUn3zQoYLRreAxDKaCrQ",
  "key4": "3QSdAmeJ4bTeRooG3WuqnDPft4h39PLp4PAQ8wm717H5ajWf8yjuMtBGmHNaWkfJbFkqhhkcaV5NGR73V1ZcXEYT",
  "key5": "5t1Bkuy7H7Scu3g3pL5SGKMsThC7BhipR86ADT1eSFHKFwvT1wDP11bHb3TvrZcMDBn9xqCre2eNFyBpcsEuvCAR",
  "key6": "3h7Ef8fpTFJVeZnPy81o1jqyzMXRpGgAMkBmfpSWCNuWLsQS8many7yQdKscvFGzyzSwbUDX3PkjZSTNugBRb6ks",
  "key7": "5S2wfaXRiXn2DNEgGRU7AgRQdgi7otaQVC3NsP6Ct2zuLJNmTYJD3dtUPFEmU3VTzQds7smK4nw49HYe6LaaZh7y",
  "key8": "GeVvZDcQvJcb1iLKLydyVDj4TQdMkdqEWyGWzFTZEmogFJx1uwB4f8urM6R4SsAnCgY295xC6PqeS2pWhFbjz6E",
  "key9": "2wX2xH1H8zQxKUNEMo4GTJapDZCNevQQiDGDHbZnLLNyJuNKD4E3hRLMNAywj5a1sCJ8WE5odMNukJD3xuUbgJGs",
  "key10": "2A9jGhr6uBaVYjv13LS3ZAxWzWS3g8yfGj1TbbGdExgEze1P598PA7kUeouwZ844hD9mXWPixHMocA7gpCq9ptKs",
  "key11": "5zCjLSsdcDumQF5K2PdsmYvQdNrAFATcPjZpSJVCAt8tvMLxq1iRMXAXS2C3kWBfWPGJZpx98GNTfmkHVgkmoion",
  "key12": "3tYdeDLQZwNiafWq6rHCpukP3AUsBqGBxBPcZRr4DsabnGydA5zKwZdJe34QSziTwoDhe25qEMBwwxmv2Me6b89j",
  "key13": "2TP2hoE7JKde7NmLdunr7ii26UhXHfrRAaUatYkmTGSSonvQWb5VfFmMQhM8KFEDeX7NmFzMGcuu4yixzPLsMYkt",
  "key14": "5BphAnuGdJDip2EJS3p1UcdArHngESXv6ka1YuC14FwuYsMgjJ5b7QoGAJYB3EzjtyDcT1LbRevaZZrkK4zWXBkq",
  "key15": "3cWUf1wTZjHT7GkSKKXq6WGhrzVDPTyHtYViX2EJRwQNSEDNPHqU7KPPg7Rjzm8ysGHApHYcGW4bw2vEVtfVbzNo",
  "key16": "2kiKxoYZapDdPGNgH54pYCpY2w237469Rw4yE3GsRdA9n8yEfXn1X9q1gz8b1KCtniTj56MkaLsPCh9JTQX4UWAk",
  "key17": "3F5DFKTnHEe6BJZJRRpKtpR8673rV5SFe4oYfdYu4LpSstB4ajb9hkpW5k8pojYrBTpWs2Zo7yNGoQWxLc9CucY6",
  "key18": "5yQNsHQdZZPhj6GRZZS3eJTwxFGDiXRhuamxm4Vo5swSDUk69L8u6MXz3y5tNKFNbFv2DoycgnSbuwWRTRKUcoUv",
  "key19": "neo9HHfgEZoBhjENTt8DeoPKrnQw3Fgcsd6mp533aXXdq4v1u5dkjFdshRsi8U9VMtNuTziA6zxBtvDya6CUtGx",
  "key20": "deNpihXe8HTdQJ7U73fHVEieXtQiyXTVU3vcBygbG3u6ByLTaS1HhfnT3Xs5r9erCFoThh6qJhFkuU8kWhbqFB3",
  "key21": "5Su7KtVj34buWg9p71zyE1yvxpkjmRYQv5KXfUS6HEWWChimj9bChpjxEgVGhvfi7CcNpQLemoSybkwgzkBBvxcH",
  "key22": "5poc9EJLBrphA4ZbuLQjCCGn233CnH5WCc5zpVa1cUg5a5memkJaAey48PkZdk2V7zvD4MQZQe5wAzXmcy7njk1z",
  "key23": "41J9TRq8g4GUsVTnAvqdiGio8iWGKCEVSZt29n11HEZCPrjzBknrnTdxcKJPpuMzvDEKvx5E7W4eL9TMc5Dy4UFL",
  "key24": "5Wn9ttqnUmqYeb2hHVq31pXrGHP8CD3XvGeywcYMZpH4kEFKCdL6wZCZJiDFeqwrQAXyd4KWYpfKMfmqvVGBfxQm",
  "key25": "5iiYKuq1AkgP1xPXhfGfR5aRkdZgEvwW9q2XhiK1wUSuenZPUaedtrMCXPefJwJxhLt4BvtjndGHQxYSdZBA4YMG",
  "key26": "xNyrzWLcfNiKoxQh9apXfyStXWbRw3DP64V3gm5eWQqkrEj56eXRV17UAUmB7DoExwB1Stin33ZHupXGbqhH5A5",
  "key27": "jcY2Kh2pCxk4wrQEDYPbytp4jjkgcJkMyZtuFNbtSqsaK7CiXA4vpz1iY6BgVVdzy1QP7Ke5p2SupW3EQJQ5xZK",
  "key28": "3x44csR4KHFunw7tp6DQaHuVdetPjVpT428EtVdfu9DGbWjrZxQH57JynZeSDG1c2CvEGyTWi4jx9v5fSTHQuj4U",
  "key29": "3G9hUHaRg1ifFxttsz3mC3cieSKPJnFpG2NETqCTJwKWUdZwqWwhQa4juKxZARn6y72o3zcDNuBdZEA7QH95D1G2",
  "key30": "22JmugzXqrTpEZrf9T2Y8Q2q2AaZsxnZSd3fmBGKbfmmArSeERWqqPpZJRp11xCqDZVhHhGqh3jJPuk7MAkcNCcA",
  "key31": "4SmoSq7xWVjTQKuKvmmYPKq9irkRJEveiCFXpQ27Tece9WE7DzW7tSm9skQ4U2phEK6kRw1Epr7hGRVdMV9gtvfH",
  "key32": "4JdBYd4AiLAtWoSQ9VoYcbxUgAPc6GySY432mypEDE2VxTks3B3tZmUaGibxNVMF6BdzhWhrZqmFjDvR1mDK7sWq",
  "key33": "5Nb1JCSEn9GVpKnSBS77LNUzgy9U3uDvtnaVLYPb9BJEbACcUnuJznkvKV8NYT5DN4nN7Gug1nNMMHuVR5K5BgPw",
  "key34": "5jU5TgwWVfxGs1WAP9DhLZK7S2BH3YH2CostxHp7KPE44rWcJbKh5DBb9czh1FJwBTMe8iKaWVNj1STN594J1Ref",
  "key35": "3f3Rr7Fv8L5RnfwxyzAmhvrAiVqaJ1zVpvjrkXehvKHHkqEFgY6rUhj4dYoEY6ZhaHaSZnNbkJUaQ9zWMcfYPrz5",
  "key36": "5WQSS7XCo28Tg13DCwQktVhkPU9vWsTbXY5f7C3QKMHaFTYKkhEL7dUUtz3HF9q1V5ggcgw2B7XQMcZ86afoLzKm",
  "key37": "XBZuGk8APc9WNRiGHJcq6Wq4KwEe58venJC3y97m3vK3XbomummsB1wLHmnzaA7Hy9zY4shNnSeriGziiaM8zQR",
  "key38": "2PCnZuYiZYy2EtSyhuSQLddyE8qHR6gvoSZqnSwfcvkh4ydQh7W4sNuLjHr1Tr7urZ2E2vauEL21wYo5d5wv34fC",
  "key39": "4WhiHZ6y6FP1vi4jd4uB7tp2bTnzrDgGQ8CaT9W6fsLfG73BXBUEaSzWpuketkcSBoCd61iy8AUPvTWq7K2dccm4",
  "key40": "2XMy3LzWEv1qmkwXRCAvDVF9CEXmXeRsJABJHnudthBMv93WctpdohCDdNPBMnCUDCvPCdNj7gftj2VMmUCsimKN"
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
