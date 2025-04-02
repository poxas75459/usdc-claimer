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
    "5hEPWqJ6DmVu3RfcXHTf8Q2NPVeCRRgDBXQybAbEzqnTPV5eCro5ECkAqben8wkqy4DxFP8nYve6bXeBDFjWAayy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jBoQ6pB7oMgLvLGw3mHPxuvTeNez6Yy1UJEpmKmaN9DcnjNqLANUYRXMcKNmfJRreXLKZfW7fQmksdfozN9TjKf",
  "key1": "2MWtwbxXpsB3wSL7VQ1z5mfA6JuAJAqnwpQSuwL38YU6RosxsHDyP64nwZJSu7h5NfYAQb8XsoEvuuCjvRmcAEzh",
  "key2": "2rBktLsDUmMGibaVza6DAdTg1RNR7sNfpx58jc9yVTwNDbTEP83i8ANNMLVxWoUmnVR9zCzeBqD9qFzmT54cq4C4",
  "key3": "2RfNupqGf5xn52LceKW6cGRhDYzReavhmeChXUy6YDn5JVnRzsS5okPrk6wUgfdLn31PNu3cppJkG1t18yKVf2Wx",
  "key4": "5Cr3nXYPqDrJReTF9HNu12Yc7gBH8ZTRzE3ETrZpTH8u7m55F5rNEMV8wZWtEhYJeFYBRKYXEStQg1DjXUcLiLxY",
  "key5": "632eotdNLnvtKn84uuc6Z6UZrGysbUsCvotS1pZ55u16FdyJb3gcNHTMvzsdFPTWik9ahuN2jQqJR2mhoo6cdM68",
  "key6": "SRVy6afdzqnYfkLSnYM1dvuCSNjbNTVVuaHyuyyzUhR5TUKyquaxrPUCLQii76vi1yuf67aFiDvtoGGYMfmptbZ",
  "key7": "4crBGo4Pu8z3TyyMwkLJE7BPb7NSKg7J9b7zrfwUMuHw6i5hfheTFerEATTL7YPqDL7LiVuG2jjHvUN3CcVmN7xf",
  "key8": "64bJbzBrNY8Gfu6jTSD5eiUoctsuJD4o6r2gGBdMtU1Fr1zTVaH7HZtmb9iGcHZV3FBmiY37AUvidVZak4yxabsE",
  "key9": "EdDQsh7EDppQTnN8TN1uuJQZLdrfFheVRHcjVgsmnPzbm4oRYmh4yvytmDDibkGnwfedfmgp7yzFN67RVApwJq9",
  "key10": "4JmR3g1W65RHiCvxKg7sRfr3FXifVFtXtRuHo1VcxS295uFs3o4PaCwqxsR98WzTEazfxXbZ35jCDjjtj5sXi8ZJ",
  "key11": "dtc4PfcPx2xx5CQidXGts75EuAMJCZBBkVEiREXh9BJ8JiyDxfVuRq3bGbsLyBxdYSVXNdtBSVKQfmhLkfeZpWu",
  "key12": "3txFSc96zArTYLLBvXzoenbX6b5JqToBLug1qZanFRjvNWmjke3BxjwjfouwsjiUt6fWa2GKzWjgzrA9RyiJA2sB",
  "key13": "4JDkPZsfhnJaBuwA6FAQj1XmVL9NoaAuqQ4Xw4vvWx32C9MtX32cLarF4NSTsPNF9QbMJkQwchNJJGAq2GVDqwSE",
  "key14": "4xj4ct4YkHg2MLP2YaHAdCsWNReG9Kyx4ZT4Dc7izcsw3xDqzvRqx4HRZcfc48eAoLMNP73kWwwZWxNCouNC8CfD",
  "key15": "38QNzeFW56WBt1RQpNRLwtS9WJvfAc3aX1uLuTuo8LHu3bnimWro94tDdMFp1cPrzrhZxHbRYgXtBsimMZVjv5vc",
  "key16": "P1N68C8qDQkQ8cefMty3mpsnEiTvw4TSPP99KK9vhFwG8eqppCR7cjJV1doGQgAKRhiyNBJeaUxfhnPhA4RCABW",
  "key17": "4ytAtWdLdorxfWanH6PWt4WvKcqXigstAQjFaeXAFXQJjbiRH4vs7hjcVRSabBzGPM5jKWUyh6pybnT5aYKv6RVp",
  "key18": "2Hi8v2h9npbkyhnpdboUyTCpJip5P8nYAkBjuLzcM8UqepjipDxryWVjKsdcNdPjZ96uxfbNwSR37Xn4xtPiNXGR",
  "key19": "2TvjSJNRmtcvrTS4Tapy58f184TG7tSdqVSvPj39QwPT86vDXwiErU2jzoTxNiYDWcC9773z1nrMAY1jftR6rBi6",
  "key20": "3d1ThAi5K1wWk8LiWo3DFE9x3XuLwZRux4Fn4VkJ939VqHxCRvjZaRVECDDrQGfsut2pFNoM3TanKh7vaQaJxArc",
  "key21": "5P1zGh1b7QTSvKRAVDDV8SrG9PWTsd3c1yu3mQhN5yqCCEDJnyc2Bod4zU9YbXqPFSAocu29WUjGRy8ydRoYxpGH",
  "key22": "3DjFnEikYCCvwDrZJcSU33BQmQZFKPiMQqeN5Fzr1n6DQtsRPftnadA358WVjDoETqbgJQ9t7KuYFmmQ5D3Asky",
  "key23": "28n812a5yvkrVqQWcHPe8hRbvhJCgvdGZp71a47hLr8vdqPK9sh94Sx7jahmZ8h55cApssMJJUvjkeEWcepBsmeP",
  "key24": "3fSSYmwvCu1hyTRvLVZKwrdMyiUM6HKXtFn3YLFLZkLknhmkNmtbKdYz6pjMXrHp9X5xwoWHoQAQbgekdkfGbBbv",
  "key25": "4SZDh8NbaCv7isnn4ieLxUbr332Dwp5zcKefejHg6EFz72TPTGEKszfTXGnad4A7jv28x46H2W1JBYTb5nfm6NoT",
  "key26": "5fTpnp1ByS42iS5AXWXYeXdhw2q1iYM2sRsRzgDz4AEmn1ddSEexwsfTcU547j47zBdGZzsiXxN1QbMppj6h8Ezd",
  "key27": "2zoFrGPPbtdWCYK4uxX1nTHNBrVvVsYCB2TGfuMMQBxR64RYVjybsYctHkvBDrQTaHErvfd5EUL7cjvh4xoypPpG",
  "key28": "4afJZod2KDLCDv2Q7RikBQn5uotWjmo1z9WD7PocckbuyzmukSERToD2PpXz5CNjnCkqp7UJJZdhRfWSzsdd5MKU",
  "key29": "cX8H7bF7CXV5gRZFMZpasCTijo6gQEM67u5yTchf4aAM6zYunNPHCDSgWMzdcYmwHMqPhrabmT2SjX7jdVfeSYz",
  "key30": "7EJ6YSfeZVQMramCYn67UMsCNa8xeQNNzwBdcLVUHB6gpMT1WwbTyN4bAieAyhH1jM9LgeG9hLWXDdVAmbVfu91",
  "key31": "57XDidqFPpEEMcrFfHRpXXGmg2hd45p5TmuGRb3VULH51UyPnMufrkKa1q4m85PGMP7x47y6VonmFB7zCZoW1fB4",
  "key32": "4JmPc7U8SbMdpFvX5XP1jZYwcuqwieKaJYZvwUnDFuRxCHQ7eExqRSsK6uuHrRrzPsARESgCXA2u6yhGQWsbtWds",
  "key33": "2p5d9XqCMy9B2T2BguZxeacUPmEnd2Uh9X1bjFFdoKJWNkxwet3QwoA5n3TRubLZDc9eKVBSTR14JHN6Laxa2tzn",
  "key34": "28Jw6ttQ4qUc7iZfEwVWFdnWVLmKRJi6WdMriTwBAcqoTDG942mrCd7LwMtbFyURHuiSWTTaz3qrPytoJc3qLpBa",
  "key35": "csf3jwEqjQLg2EqrrncgTyZyscqbVozKbvtwUYsC22fYpJnygzSuxTNvYNGn2TQxdaP7Po7BLedo5vrbYkWrTww"
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
