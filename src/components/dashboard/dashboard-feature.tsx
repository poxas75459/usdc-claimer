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
    "4hrPVTd5ruzuDfWgxkxMd5UpMnXikXq1S3jJJkeq8YJyZ4eeDC2N7jgwUMeoLyHr2updEEaQmu2EG9t9Z7dNzmjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L8uH1L9UWe1KBr9Brp8U7BfzXZUqHPrwgmLvXjcPuKBpdMd7KoN5UYuT6R1zewwq2o9EtrfNjWLj3iGqL6LYWvy",
  "key1": "5MH66MrgXn3P58459rPX7zU77f9dUj8GZ2fyCienyLP3iKCtAMGcvdXCed1xj6d4NWzR8FivYRmdtXH9BFrugeP5",
  "key2": "3nQkcAqeeFm7CJ17qcnJWMzqyfLAgefDbgjnpDsfBbio3Up2rmhobjvfFBJNZcofeNk4wnjnCDt3VEF5pPQ2Kahq",
  "key3": "24JB26dYmR9YZnU3CU1LdZDxsKeb4rzii51R4DdLXq74vPWA1foFff2Hq2C9b6aUZRRVmDGG7cqeZVgCSQ8MUapY",
  "key4": "TFhzdihu5JzE1rbPZwyXkiXNXCqbqnD3jdZvs5Anbxe6ATkKE9x8NcJ2LdsMsTeq7jqRBg79ruqPvzueN6fnTaM",
  "key5": "GDSPhmowFMSaScwxT9weMYFmXrYes8EG3Qg2YsmQn6ker6v8AWeXSAL7bR2EUBAHD4AZw6Ve9NvHN7Je7YvWW6a",
  "key6": "5Ff9am9zymrebVsZn4Yg8zxrNcxGKH18aHycBbp8DvT5Drq4dvi9dFPqNFfzWi6oPokVWVxqz8wYeojGFU2d2fAc",
  "key7": "4mJeGZd2ohcj6C58svwGM34uQuMb28vjNRP7LBphJ5tDUp7iJgnukZUdFNuzvNLE6rjmT9EhZSS2jN9KSx1TzBW8",
  "key8": "5jv5tr7HJzhMf2vnaKt6Z6BnWyUgap9m2n2od3H8RCi2Tdwm6Sw2PWH26Lfz9VFUVqyerJmFLB6NQJcDnREwhLqP",
  "key9": "52fi69Q4rv2RQcEPQ2ZwsTQKXBRskqD48arZrdguBWupgqT8MT3RfwWokk1E9BV46h3XMnSVTCnBVHdKK1yeB6q9",
  "key10": "2zm5DZBd1xyKpP4oxBHbxt6pWdzKrwT23wqAq3ixEP6vKQyx8wsM2gu2mU3uhBDaRzXbd9A65am9veZ4jzDKvrRk",
  "key11": "3NuYcyavumhFKuMZXfgWeh9XUZn7LAvZYFRupmivgUvGqTfwqiT3kzS29k76H1cug7wvBS2FtsRNiZCh8X7oZnnG",
  "key12": "2WqXLP3CRjUfVfEsPeGR8g2umij8WDCiUKhvWzBDS5FpPvKkiny7pNzKJwrss86UoskThEXVX2x7nXz5wW8pDypo",
  "key13": "4CSw3ASpguaP1v8EsSsY5eB6Q4PaARGm5MHZTB7kAQd6BcUpoBgnTdTVvYYNEeyqW8bJoRxnHfu7HE9kQidsSeBX",
  "key14": "hkkj8BfHy7hbVDNBnfrmpEvUMR9727yPDbpauYWf1ddx4e3ZTzN8GjxLG3goJ17UwbQ8UsjLztNKtfV6Syk3vPY",
  "key15": "4uRs4XJddKKQoe4ZLqsEtCnja4eGpbCMLA6XugcGjXQZWhkxPTdv53KY48wAhY3JvhVK9pjpBUDw2ye9oXrZXHkD",
  "key16": "4GPK221Bk4BwocmMV9jteq22ebydq2UMJQRuAs6gemxkvrrZVZXoSAB3FzdcKwn1PcTp1KBbcuRjXnfLhXp788jo",
  "key17": "2jnKmyM8ZWh5fNczqEetzkVmzdH3FAMzBwU2Vm8KnMhP2hLc7SsoMn1wmBXF9X9e4WRgpJk1S9KStc4f2DFRJNzB",
  "key18": "3QCD3nEVmjjxxtJapsvuSjE3vaU2TSZi2o11hyG5SngbshbrUjJQA6yNDCoRZ8eGMRkAFbyr5HKK391KYggwqdP7",
  "key19": "Gjy6mAZ6KrW9TLhyhLdGbQGoLK6PThmAcKTmZavhjPFMUzBVrE3y85RnorDXM6nFgyZ2T7WAn4ZEFYspHmivS9i",
  "key20": "5hibbHQiu9tTMxnVu2Nt1LgR5Vx6vwc2gL2TALCMQy8w6c9PLwtt65BFZCk1gCEgDUDjJcfjJRSJSe82ovmJQ48",
  "key21": "31tLanZZuLaYtp7DbMZQm1opUZR4aPo4cQybRvhC62Kc29ZUZy57k9C7BmsKAKeNiHiBNYi1SZbgSfmEy5iefCUQ",
  "key22": "Ws6KXfcMGkL1q4suWBmYQ866zH2fpdLjxmPBJEpbjXR3L8BdSre937hjG8iUBBLA7M28iNznUBWoak9wAFdoCoG",
  "key23": "gCms4fFf76msZGjwCSWadoL8X68UXPPr8HK96TB3KXP93moeD7M33cukLnioq4sKwRPFZBTBxQYMfNC5DBoY5w1",
  "key24": "3WZepqrRgSzLCDm1AKmgjzPHf5DsmUzjFeJFUZi1xf4T6mDLvpmDqUtNcYpSg1wWbnGrn5iRMEEP6HnN1vRZ6ir3",
  "key25": "4mpb3ZVRMFWvmrcF4rofcXJcEDUmq7Kf5HmeSDz5FTx3NRqLHrDJeG7paBAQ7fc5ZiB6YPqiLNas1mWobu9VsGmZ",
  "key26": "3hLhQjRuSXjyxVa14z5NERMbJFKrGSU4Sx7rV3MoxtX4VUVjAwkWqqSRoFFydE1eZpfPbhKSBYEKQm1HkkiGPCHk",
  "key27": "2Fuj8tfFnB6UKsEZZ9FCicUyMz8r4HWyipayHd48et9683FNkbuvoDkj2F32eSwaVMjVQMtiKf1CubQn5Vq938Q2",
  "key28": "2ihZKmNqe5V5aHpFYcxZ4BmfQZR1erNN8W4a8PSyKYPxaDaZndBCdA5RWV6RiXSddEZJ5TiEQFFZisXutPb1YeCZ",
  "key29": "3ZNGtWGE1cuG3RDcrA8vTrS2JGDgzqRQzcBfeW7UNdsLbXLpQSH4khE9NDoF6WDmNnepbLEskcDDQwQ8Nck5cgit",
  "key30": "5GioNWnD9PLqZQTDkZWGgTWQLWE5xm1cUng3eGVPuNHLWqdo35977FhMmRbYPEpy9FK7rdg7vrVUAbnnQFke5ecb",
  "key31": "613aLvGzrPZCSmtE41GM2JjLqcMUyh5BQ9vuFpB8zEDxo4qXLiDVMwMBdaQhmUij1R3aKsBuYKMk8TBvbsi4chYT",
  "key32": "22GEgSzYVVpgKWaijeAi8xKRPHhQMPp4ipFXrw6fAntYA7Sospnos3uxnYmzETQhZU2aHxXHYsb7X1XRCiGVk4hR",
  "key33": "so2diWLoGMUttuHMb9AwjgGe3Ym9RftQuFqQPa3aBadVTPMFqs78T6gpwpCYmP818BRKffcCWeCkTr2ZHFqQ3a6",
  "key34": "2HfzttTr8AJwdpKJhWCH2zxU2o47EH5Hx1k6AUnkWVpmKua4ikyuMCVz8hmzqUeEadmniQajJ26boR6Xxn8nq81G",
  "key35": "4kiDkrRHbj2VbjAb7WP3pEJerUHzxPTHawVCS1cCpA4eS7AYtp92A7uA9T2xuSrWWqoeLueZkbQXYpKet4yaFono",
  "key36": "3XHPZyJRo5RBM9g9wQ6kXGzVCSyAPemohRQGCUgEHGtKdFqCpzgMEUc8NkT88cJCHbBo84Swb7UgQDmqogG6xGDR",
  "key37": "4XWg6Y1AuXKo5xoBfwkR2RwJvDzYodVSU4tk9wyQkNP6hVr5fp2hGorQRbKSXe6ugBMpdsT8YKaiSpLTCQybB3vp",
  "key38": "2oqy6fBjzgnYttZV47LJijxcri8aqFPSG9WPrmwi3SAEE39D5zRNQN4po7DJ4uJveGoC7ay78swGQuQvAQvs3rJn",
  "key39": "5S6LSwvmSGFxtkr3faVtabAse7SWGKvtYbAzUr4zaFQ9iz26UUnXAehSnPYc4FsnUANUA87Em3ThFu8AsWkQ2UAN",
  "key40": "NXUbkeduoqLMv5ofqF7o9qeVrQyLC8hhZVdBozsy5TvzKvzyuHAtJ4nVpgyE2FFkvbX5Ks8Pzbv1pvMwEjTqsWz",
  "key41": "4i2Zg34TPbqG3WF38MHJ4NxJywUFSjfPdafrMVs33wk9zWuXbWj8CcsmRiVt1ZHz9ECJHqMBogvFar8VTiJFZ4WN",
  "key42": "epH8YbbgoZkb7GLj2xBySpMFxD8LcpeUzhw7ajX1AjEP6rUv62uAtnMPqWDQ78sQVqRj2Qepc6Uwu2GqoHZtR1c",
  "key43": "2MnYt9G892T4CgVs1MKTnPxtEasQ5bD7sXgDGdXyzQUqMi6XrWxjaJkjbkUYJqvDZFQEmwck8oGhefS3YUAigRhe",
  "key44": "mogRq79LSsa4ypiLpk5Jirc6ERbceB75PMhkbDzCVD86jccyBHGpvpt37Kju3K4ep6XDCMhHE2WS3KJ1abPQZdZ",
  "key45": "478LALC4CBEhmmhajhqGBP2vxcNoFeQHN8vRVp1RFvqJM1MSaK64C1PtmqiL7hrB35AxNWrDkV7KcZMqFMCFqH2x"
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
