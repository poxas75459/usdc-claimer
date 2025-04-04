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
    "53udEV84VRUqoyUCwToti5eJYUnWLQjBrb6zQo3d1m1JRua6WmNSNxJPfWo8tkb3yvtonYhtY5S4L1df164E7UJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LALdLTxA5snH7sEeLAQ9vhF7A9m1iZb2NrnyuT9E5kSiQqsLqeWwP2CeAhARB9tvPTPnnj6k5YPr5AvmZJQYNau",
  "key1": "2UjbKvc9W98EMgpaeM7gaHJ3e4zAyoUJvaQoh8Z8HqKmD3Wj2qUuaJMdLWBYVENnTCvVxAPzNfw1Gb3bqsJMH77p",
  "key2": "5hUTWmwsJmTKUzTS4JXfMs3p9EEaoaErYx9texL2LoQYZLcuUtmoxJDBgMudNtnkNJx31dvAnZJjZJqnShAdMmKZ",
  "key3": "JsZPp5GeeSSnRLhXFn3LT5UXxKCFYGQVMrXhBpLUT9CRf7JnkB5cjAotqpTuXWsKAaW2fJiyTHWEvifrjWrw6eS",
  "key4": "5c8Y2eLAU4wVsz7NTnvdeWSVDwT84cD4MbdHjwCj826y4bf3FMxP2NSmFfrzXUJmJggJNtaPXe5corN3Kvr6rg15",
  "key5": "2fERZh8P2AFZuTMbmofsfP7dmpC7Kibm2BkoUzCt9YZBqX6mJWo2mrKTgSkuwf31MMH26uRqaK3dbKg82FuXUn96",
  "key6": "2Xy8kV3SrmLqjNDU1VCLH3qszQ1Mv88o9asdRCpHMm3QdMU91Gh2DPMPbBAE5LJTqXsNtUATZG4Fnuy7NJHiPhYZ",
  "key7": "2NegUmAU89QXN5dM3drhAUcxqgR9PimL25C5VZP3tZCKKMGezzgcjb1eFAxfDC1sw7sJW2SHJgVfALURNxJUAcJr",
  "key8": "4D4QYYh8j8sYzmJZREZRzbDksrSC2oKAxbP38bQ1FmWJDUrqxMQFFEcyxQ2EaQmY1pm3drEwkh1tRCBCKbioFkY1",
  "key9": "43Xdmb5a6jHebGU1z6uKLtcakfjhzA8rsoTCw2M9Rqtx1YHTapw1JzpG7BcDzmZJnj4Q3t4Gd5gGBJ9maJSPwmPj",
  "key10": "5WtnB2ifnXRHx5mYmjwfyqUkvsJLPa54Wg7hGeVQu4HfWTfpshVky5wwQqm1gKQowPXoi26LSkp8kNogrBHF3Gw8",
  "key11": "5KBYY62Lre6DismKrRw8sDfKvTqHMaqXLGqpWeDfexYWkD559W2mtfeakvVHdjVKummu6bUrayNJ293pTgbuczd",
  "key12": "2ckKTguToSDPYvbXsrCLQtQKgjhwqBVHHYPvTS6HGFw3wzvdXJZt9m5Tqe8CGzUXCVzhwtva27pdUEzhNAHRCndL",
  "key13": "3Z1ugEpDTmKhFcPAsNagsWZtyTUa7iXuVveHG1qSTPw65GJCRKmDAwq85waRuHpTA67z4UVojGcYK6iNXBr6WXFY",
  "key14": "cHib4jTpNqooZ8Q5k3PPUZDpRpwDLpWhyvAgcDWsCxaFsHLA49gbZ6nfdukUw3X7fpauaRPRkS6yeax4C7xcwHy",
  "key15": "5ThF2ob7WdqPZxafU7eAmLBp6nA6tym2KgLPzhhy8SVkk7pJgYy1WA3WfnS89iaxkz67YtyumWRXddHAVxErJMkb",
  "key16": "yrVQ6LgU3JzF9CjTrCRsDhijmKWdPwinCmRpwxYPYDAxtG4yNCxUErqp3DxcPUuUpP2uE1qD6J7w8Vfykas4sHK",
  "key17": "34bduAfzQzCwLxMjeNodRdRJAY7F1FufTHndQPmJ5menFfqtHjJQvbiVj43pAbowbP2LWpbKctuJxSgLU8afcVUc",
  "key18": "4oY5x7RC9Ajx8YAPRK2vUgVr8LU6zG54N2EaaB3R39DbR7VCbuCNSaGcpBK2DkvFG7poaGxw4yZWFnkedPDb4vHB",
  "key19": "sGYKscbmfZdVDiH7wbA89KUppCCm1FFnCbAQi6Kekt6tAULyqZwQgiARaw6PMVJtMfxjbqDDdK6pqokjD7cTi5J",
  "key20": "3eHhySCJpJTpkqBrSE2nqYeewsYviZTGiDM51VpgJVoXbETVq1W3VH2jsmYREkMhZi6PTpadqepRXYqDCkUUWzPr",
  "key21": "4a4ZHpMB7qKeJtLQRVooVc7eMJbqsL5a8grmRDUjrjT6kT1vBv9ht9qrXSTievgGgGSJ4YK8SqQv9rZK5XFFcdYT",
  "key22": "5kjfnfyRN33wSJvLpYAzaaiRhdcey34orueJxAxZBQAbo9AgKppQhhdwGTQczJD3pRKCJenCMbMW95ZZYwjf9Sj4",
  "key23": "3CkdKJU4wuiXTZpsUDWDhbKY1jYwWo6qwpMaUs66R8n1Gx8oLWHBmqwrsFkV1ayLs8PXfXCz6gqf89wGXKC8mNZu",
  "key24": "4PxQnufAtzX9CQsS75dSCbv9rt5DNL2sCvbvL6qkwDXHrwWMnDb5yLZdNyXrwJHyfLM2swy4vQwAHe1XJX9Cka34",
  "key25": "2zT9NrFg21ND4YBH8HSGtiQ8ptZ8XCaNQ1BepjphpJ6bMDDrVAonQq8xH9KAa3dJ6SSAiaNv82j9de8HhAgYbRmn",
  "key26": "4en9Bh3qtiQcf37xYtNrGJBY3p62qx5uoqofhEcYHgXyhobBdupu73guJyo7Mhq5chuZKCoWNxbajCKnPb85jVMn",
  "key27": "5JtUk124mNtUxrqAfq5z2aKi1UeYULiogpA52sNhbkEeToPV3ocPszfywxpPn4dNuBTte4RoeMg9E6f9pAgeNJZj",
  "key28": "5h5bYb5eT3LiEe6oRVU64uHovP8jNdPH7dhpyTgv8Pe3zwSywKNLKmQ4ox2rrUnZLFMkK6qB5yii19w9T6VRHWqN",
  "key29": "3GSDD5Aq4yL9m4KQLmem8Bvy59WLU3PVddehhmcbhM2f5fqoeiJytfDpJh56PbyrJ3WeLtAPYZwGaa6bSp7t4gky",
  "key30": "652niCHA9a65qjvQuqo6ZohaH92hwKMT7XoNSD7CcLWunye8cxVao2oswi7mrDZzTaaAvy8Duf9UL51tk5USexLW",
  "key31": "2RXNDv8YbNjVPnvoASwvtKyRX32AWqwQskj2Rxz26oPagCzXxrEXWufykjcmFpDTLsFgbs8pVga2GRjVagpfF2ic",
  "key32": "EccAQ2XJE1xeTKy29RKuTW28uJiYytvKDuvMmxAp2bW8RBgVtw8toA9Nqjm5MKdoTTfAepLLnuqXB3Rs6wKjj8m",
  "key33": "5QUkRyMFCBQyoaP1gSWUPkFaiqoTRZyaz3UmMN1rQigPG26sHh9uLcikkafnxV7rs4mKt3thmWEFB6HWQmhSNxGb",
  "key34": "sL2VWfHovU1SqJRtzGEKkAderCy2WJJaX9R9wzenDJ4KxhjehfQ4j91X15Muumg6Txq27GzMNUr4K1EsGCoLhmr",
  "key35": "3PuAa8dXFU83T3dfvAFZLD5n7LBtBbKkQ9qbNkvGsDFEh3pMk1tWfSv7WbDiuVoKPFXeTMPohKEtb92TLkg1ARXx",
  "key36": "2mRDs6CeQQ9h4XK8bBf9sBTFRqEcxFw9u1KshnNHUu24QKcxdpTiEbE9J92hSyziaon7Kv1BMQi1TCmQxwDRtM6j",
  "key37": "2wKspQ3y7bjvAPSbMeEHexKCRcwjBAGxzxrBw4UqHVAr2Zhs5BPcYMdbkGKH2DxKVfZsreLGjLumC5fY1K58fMfK",
  "key38": "4W5iLGxHbaR6YSd2ggMwfbaLSa1KRicDBkgyj6aEFHanULCprXBRNZWkkX5sWVJG2BaVPbSk9cWFjD8G8ff5XJCa",
  "key39": "5TKcJorjhiQHmsPosHvmYkFcybSPMePFsyE7KTJRU7WdGQCvjQzo2SnqZUaW5gn1oG45poHMQFz9tf4v3hGjrn3g",
  "key40": "rysHQPnQ61nvYpun5865n6K9Soz8CyMFLUwbNapv3Z7tC7ZnhtBYem5kcyPdpWibJvf2kwtRT9PtTNomEECDYsz",
  "key41": "33eaXRDRNQ3r8QB7Z1dZvvA13T1ML1CFXnXR7bSCUwwmBoV4SScxYVzr1AP25NNHKNtMEcMEZxocT1wdMF6HGApv",
  "key42": "4aZ9Dw3Tgye7iiRdP4PuSZ44h7zw4YkAZHkwHnedMsnw9KAXN28RFLbd2R19ANhX3Rw3QxuK3tNVvKiqJTMTFPCJ",
  "key43": "3mdPC6LaLFzMZBGC1RiCHDVYgVhuuE1KQw6v8DQaBideru5Ycswv3xSar4burqFTvwKuMGjyXwqUNJ91oFp4hXP1",
  "key44": "3Sh6E7p37kqBxEdApiY39h25RXEKxzeGJ6PiiEeZH1u1eJfSmLeDPFbo7bMLi66WsrCKTaVcsztoKf6hHuENgbkC",
  "key45": "3gGygmfkxdSxhGu9KCzpPg5AkZM3wo1AebvXpPwZaw4w7ZBabMHNVKQRz2UpyqpCT7jRMq4hGHLE5JW6QzPEQSBf",
  "key46": "3vC1foKRgqh4MeZ9JSLyCJdH63grxn3tzaoVf6r7ohkWQZbPqfggodyKWVdNZpBcPifr4SGjDf8HA7CSn5khLDd3",
  "key47": "2pBJK5usgHywiv1uA1TviHQW3KNhawB9GNjQjEGH3Y4b8p2LSg92qysZVmDsLwMKC7v2Q1RstuRz4NxAfiPcreUc",
  "key48": "3B4craiBVQjP1LjFQg3xfP8MPiahjw6oNydmW8nzqqZhstXPs82ExdFwBSJ2V6syWmSELSw2smYnynTuxPkGREyP"
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
