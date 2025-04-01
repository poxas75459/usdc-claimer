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
    "8iFwcF9jccQ3yW9Bs3RdrfLDbHfgNeJYRcxYTvsEF7pLfPCc2eDEUSzi5x12txBFzozxJk3QLbG7eku81HZEYTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWpSFPBBtmFi77KimHHNVfm8iFAKtaHVvj97toePp3QQrwCttPx2FN5Gq77cFdMTpxY3tT1SZqh2eBoTg2BdPDA",
  "key1": "J45GY6atPpN5dhxGoHjMzv7LBwPfYXxoit1xTGLdajTYZQ4ukukkR6DKYzf9VF4WJMgDaPuDqg5qtaoiT747ZaS",
  "key2": "46VvjxaBuPKjEu52R24Kv3ZMuDq1tAZBnZCh8xygaFp72wSXPgmMRVgUoMvo6cMyW2GoRNQXL5yaSNomBVqfyAum",
  "key3": "3vfUt6ANxj6b5xUYpyT8fiQKAYx8fmUPejafr3oNyCBcsnjKQNxsthuhyRr9ksLEMRRCYHdEidicutYXapezxBJG",
  "key4": "484HQNeTYnnhddFRRKs7m4JGxuFwDzXUj8rJdRgDuzEmmAVRH7cR2kkzn9FyDYy7exjrSoxPFi4ju4J8LH6cf24m",
  "key5": "33DVdxrnZNEhr1wYNuoHSGBJjw6hf8TP72aMTRMDRT3tMs6LAiQCQSWRFM6hiT1hyRU9zMyAJER72y5Gn25txJfj",
  "key6": "47ydTHfxFGm3S4AjFz3D4BGatqUFQxzzRGYP3o6JzfXEYvNdyzoXT6mHeUhdZAsVGeaHNnn4RstzFEx1zCo6iiwH",
  "key7": "2WwWiYEJPkoqKXtPBdULm8WAhmbx9wvRF1SDKwa1h8keuhU6rKkJ1WHY3BHYNuP4xAn6SQawNKa84Ro1UaLaVnwy",
  "key8": "21xeohBdizTtbxcj7JFinura1b1edb5vAuvvqRMNRHpr267iy3P98xbgjnfgFAsCDR9uFZtH2BdyRBpbCManFXBj",
  "key9": "3wis2XXBgdyqeeqYYof6SDGMr2iPaWpTH5P49pBPfbtgjeMvZV68nSzVX1SG2X7p8pPDALTBcyuNxQJRvMhetbK7",
  "key10": "2bnCtA13V6p37342P2L6cjvEATaWiLfxT8PCYQcqZp9DE2q3hZfiDF4yYtJzszbS84pvHazrs13xL6PvT8ULTfN9",
  "key11": "3XAUZbeEACCn7j1LgFuyWyrtYEN4qBDUjdiYdkiWErt4bQ5vqyZRnHBvpGRDc8ZZjU4nthQb8h7B6x66VevD3rJF",
  "key12": "4XTZL6FMan99bEiTjnGNwfR79RXX8wtgdi23VbvmnExULybskPtdCmvAFSMfcuwVmCkv5bfs55d5MvcR1ku9PTQH",
  "key13": "5nmAQr7pHqUQLmP6HL7YicPNdTP8Lv8EEHT6cD5SkGjVftDKR9HBviEjfQraPxJYdHVAK5xWR8CGMQc7CvcgJqBB",
  "key14": "5XCm7wTWFD166P3nUTrB98xCU2yZybsPA86Esn11rr7bBd8YeZVc4kUekSRonjju12rhDz5mSRRWLzR7LdGVAFay",
  "key15": "33nRxBkCCF4dx3oVrDLEoQSDYwEWVG6r44F355vqTFAT5JB2GVBGWeYBNJHMww5BV539EUWoTRCwJAKNdfW1qxgj",
  "key16": "5z5RkGhbvfeGJkCFkjM8o6YDm3Ldv7pSXaSuw7uENTWPNYyko1wDPX4YWCTwivRJGigwtX2f5rWZr5wX74TK3naj",
  "key17": "rMQFgxCbSrfa3T3U55fd74NJxvyj9we2WZYrzKE6VtHZsPG682pDi8mCdtYh2FBESpa8kr4MqSp23TcDmQdxFAJ",
  "key18": "39jFESyTCjWxofWHgW2ejadL2ygVcMMzE6DZFHJ33cwJ8a4avhtP93eonyj1Xuo66j4HDUJzwQmbaMKmgMZqzARd",
  "key19": "2arb3yQAqB9mzvRuwusEYcM2afW6mSdZUPPYYeb6mNYfasxAi1gs7v5S2swnhT37Zhb6ttzf4kDak2LSU53o9RoK",
  "key20": "3gnipLXBHmFJBrnCh6vZihdpyrdif2f1uhrpWcGb1GtEodrpr8kb8AfMugxhav435qdaXA17KZwxt1ecS5k637KQ",
  "key21": "2VizWihE1yP6PRtgFE5PrgA1bMmWn5tKz16FtNiA8PKXSHPxZ3CL6YPeHppQ341mr9gaXv3GiTkNdC85Y6WeaHb5",
  "key22": "jP9P7dyw8c7wuVne8o48nh7pHi13n38N6gZZ6FH2cGF2VFiW1eBo8W9uXtVgMZvQZtp1dnEsTsvEYh9pqLCS5qG",
  "key23": "TkGaW3cxNjoHNjrSZffBRHzHgFopCqM74mdks9uzD5oCAuthwhXTn5W7t1buq3zehpjViowvDGaBaC1ELKEzAHb",
  "key24": "HTzm9FGHfLHrQSrqZFDuWZKdox9Q3LjFiYb7Zm6iK1kCF6X8nxGTaGrPXXME6S18bfRyW6hAVoFVABJQixjVFN9",
  "key25": "44htQqttcDaCBFYs5DgvtJkt5JaUgdJeFhVVVf1AdFrqkuXQEa54CrvcRWQ6BQAukewLPgp2LqamXf3bUKbQMnhQ",
  "key26": "4cnc8Vu1RuthAyJRgEijYeJJ3wpUdWYaz3EnYqmWmBqrYzkvHXmP8eCtvvkdkHDTBCMS6qbJUv7QuQvoTrETLURq",
  "key27": "3mf925NVw6npRG5JPV1w1qUHWzTMKH6Q8xDbLx1DNRjGCLhoHtxcY312cctAshYAAmAnKSnE97b71KJBCNi3DGfD",
  "key28": "TdgQPV8pubKjv8wPqmkw57Jwa2G8TKRkhTEPvJeR4CJHfyC7amFYbtu4ESAEYhRiQrPjWcUBUqTRJoNE6yofFD1",
  "key29": "i2Qy1VLd9Hp2ftRgKL8HCUgVLLhFcMg8L8EsWmHYz6sKq2DYtgF5DfNDnjqBDuTuqw7w46nd9FhsEBfdRRU9Kyj",
  "key30": "51uwoc9N7b4PjMRvrCW6GURfHWGQ11quRE3h7ivzSk23xhfgVW9j4iDf9uhSEJREttb8o78u7FdSSeZBuu64szTh",
  "key31": "5AZin6xFCEHNzd1kmF29gxEuKGtZuCc9BE9JjgDYLp6m99SHwZUx5dCABCUfyzNLx27h6KEWqLoP4y7aDb1tQgfa",
  "key32": "3C6ZNHoTcSWdBKM1LXZzmmuwfrfMmkjKiZ4JUfJhQd6vhx7Zwuq9WNjEQcJBExWG1AZcFWmpLsjNznociA3431RT",
  "key33": "5tbgP7oMZ7zycxLew6N8gkE5ekyQczh2dpFwFtBd6TCHkABmDcwC8a4GiDjzu2zYGU4V16EdMEJNPBosJLL5oQ6Y",
  "key34": "3owhiECgr6HrMvbkUUXr3ZsDvrEKtm6wCL5sZZBXx3nWwurVgd5NoQ2yJgCJ6ThmhNdmCpMLcvtUGTFQQkgMbWkg",
  "key35": "4WVAeKBMscSUUJd1QnSzNRSpxWM8RZ6hqRzVtY8PEkg4uLDXRp5DfqPGN5nFRBqFo3pefuiadaEpChE5jp8JTyos",
  "key36": "3CgodXKSs5ytj6xCtEjWAdVA6RoEiFPo9UChVErYGus3EH2pDNtwbctBZrQab6mmnMmXPvVCideP2TKUinPjHG4E",
  "key37": "4xGa8H51JMsvukfYmwJKenT9WLiAoaeDHzaMArCjVtv6cAYAeWttiaZc6Fr3WwUctufHi2SSWxUDrB2k6veXQEx3",
  "key38": "1hGLz37DbgZ6K1NArpE2ds6gjLkQAbgWckjAoNkarnNXZnj8XPihyogk3bDyEY8jHNfpxGsUBAXDA8kNHCwHt8U",
  "key39": "2CGZvZcybFfCfXE5jzcjvxdscUnta1TTpiFNz6ihuBB74vCz9SafzqBzSVNCzaNReSkPWNshutkfh1ruB2gAJ8hE",
  "key40": "66THPd5EfMw5i1s2yJZKh6At23YiE6xnswBJ4ku2cn5Cxe6y8oeit4KFeZoMXBRBMCfEMimtpZW6zyKG85vPWrTP"
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
