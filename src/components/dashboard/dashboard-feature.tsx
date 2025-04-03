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
    "2xmGSwmSK34R5JxahFvq7QzuSPpjRsQQvwnuLw5q8XivWx92TzmQHgMQpbCd1mgisn8zDem11QqZCt5vEuKFtnPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ZrWRvFsPtcue4zhujRgyFYfEG2ytBUod3eypbHCwczWBVevfUsz2vvZDnkwdmBsmUEFWgX4UZFPA7tmu4x9ETP",
  "key1": "5itEPjuEAdEWrs9BtegYt844vyEtsNoGL9gDRYh3DqFW7oxoDZnHpL31EPqrVEsnK2pUeQeUbUkNNiiWr63wTwGs",
  "key2": "21jyXZmbpNpSmX33hxSavmGkfyndd6AWb2Q6VboW7kaZTbiXS8DTyj2aQadE4eWbUJDF7pyy6YdAP6z8wBMnGPLP",
  "key3": "2prR32h856EpBW2di9QjmwZ4LYcf7oB3TRTphmjGncXUw8qczoFEKnbBUMuU5oTU3NtnGNM6JQo3RYBznbGBCFyw",
  "key4": "4hZ6BpBQbqf6pfUtA4kXfwxN8VJiweSMPuEV6XjodK7nLcmHFTZx9ninyxsTmzufauctbdWa9sGoRjo5yLa5skSr",
  "key5": "5S1DhHxKKyfHh5a485tAJDUG24igRty8xVLbczT67np4pxvN7a1GG3wQuWTx9xpaN5kPs6vWhRpSocu7tYzK4ksP",
  "key6": "r3t6w5Q4pRiT3pHzkKBYKnkLx6NEwMQiju9ytZZ13KXPNGUg7GGkVC8DofzDcTKG5Jrmc8cm8KTfNZWE9w1Fy9e",
  "key7": "g3NAGCnYaaWq4mL92BN1Mufe1VMNuKRx8DFG5z5gwcp9QK5ZVB35487bbWtSrnLYV4qggqmi2fSP1ggANBdtXaU",
  "key8": "2NYPQ25WPYz8no4UstP6FrZ7XErQ75BjrSPYyhJaiWHyR49JyreEApWyCYvRzChuDMxJHocZxqAwE16Vg1wTtaDi",
  "key9": "8s4SEFCUJTdMajsktWpXR4MaDM5ULGVoDd4Frkd8eS6hiFxzWdy6fxwiUgVYE7j6RpWTKrvh1Rjs68seGCXjjL7",
  "key10": "5iu6P6ujhyoyLFpRXmqPvvXMS1BxKgsRmLioPqoWpFAqx1REqNvJoLfrw3GRmXDJh3HDEK88gTLuWZgEq1RFTy6P",
  "key11": "2beZauMc5PXhr68mHjZjfXa2zmgRRikahhFpyf8KdPJA3fMd5oMsADMbud6d6dmoYQiddtW5n5Zeg1q2jcvFdHmM",
  "key12": "27bKTjjHGSuAGotRqp35bTTX7zEpsJjTPu1dwrT3bgdsHqGPo5u1TZUh6uTt9kJHrhfzXtNAp4fSwDJ5Xa5mw2Jb",
  "key13": "3TadidPJEQ15UNhpXANNCpruHZv2c3JPUSDj2DkUTjWNTN6VnqQRkVYho2eHxXr3hTEEHZezrEHqUKcKAQpqjYzh",
  "key14": "65amJf8vSV4BkKdaMiuD9imEQLHK8n53RQtQwfLgcFExbJfuUcv1YmapobfsY1qdHASeEmvV7Bo2jKhSY8FD1eA8",
  "key15": "44FkZAiEdsSKHXjm9CrHCLV45icJZ7r3bR9UBxSc4vXonqDtxxLBf53mFReWLuCUs2h6koiVYEc92ABJoKqcPcZR",
  "key16": "3Zhjjic5crzFopi4Ldya6zDAfqFBfiDbJFddwW1iAVM3YP1Vdg5H6sPAQ7kxBgpQR37CqsXnxDWJ46qvrjTo3KuS",
  "key17": "3BA1TQUoQa85rySzUzLb4RA87nNYoUtTn71L2GVTAGnMfMVef8r61esgrfrXZ9xCFDc7otPLUH35413XUPRpTnp9",
  "key18": "5HK6NbRgp6qTRrezURoE6hRB4u3NKYqxoB2Bq6HsRGv7GW4mNbfJnZ4r4HgJEYh34YBiYEKxy3KK64p7bhoBFSMD",
  "key19": "4WafKrcZUiqNbBZgZGqesTEFLRDXWgs5swuFzmcpzpjAadnMtzyqWXXt9aumoTy3Bb6NBbzct5MwzKaqDB7c3aak",
  "key20": "JDULvWSktFqt6nA9XVoFXJZerEcB6MujTgpPYVjTE6EexCNwD5RXVtiGa5ATQPo9Q8J7fxkHRmsgca8zYAEtwmk",
  "key21": "3Az3N2uEgJE4fm9bvn85x2Eyio6d4nBoW9Ge6YYEiQ8rHS8izuzfrVU5gwamv2YQaAmXKHbzgeYbjn2KcmaTJRtZ",
  "key22": "3YbFZg1mzVuyJKjnjweFpmSaFKaFnMFCr87LYx95gtqRpt9h5kUq7owP2eMbgrJpwFpnnZBRBRBprwPfaoB5LnBw",
  "key23": "3HAVed8nRpFuKri5Yc7NGMNqgEak3GFdfBfiQhN5hWmmBwhmTRR455idhhasxqsfKTuok5R2TFHmcQWHmaoyWkZj",
  "key24": "X2DCFjBfjZ7KRctSSoEzJtVQPUr7RrQv9RA3NUs7AiPHqnj1ZV4UnYfoAgoB8dKKMR8pLsNbh2gFwmd4JsUAyvc",
  "key25": "QaxWN3VeBBKnhTLus3HWg72AEXKsnwWKtAYYZihKoyZBVDvgVCAZXzYaYwaMuZAerQnA5D5QFydLRpg4bp93V2Y",
  "key26": "5VgwdE8aZdyujshxYnqPT19gt3n4yS7PEsj1U3RisDSGqfxwM1fZUEE8JVq3VKpCpRR3VY2T1FwQgfGUX6og8Uqv",
  "key27": "2sMnkJk5hURPcHHczZn2kXpodRcdf89VtbA2xd8W49pyncGKmcPh855CKHAWfQN2g9X8JschSNTL9Zi495fqw2TG",
  "key28": "3BNGbTNUbDhGRptMBZxfDK2Y8q1SpKAw2FYjhWuJHoP4zXmTooN7MZtTzEasSkxoG5za7nsrqRBJUo7t6PEA4B9c",
  "key29": "2vYvz87HoHJtprFfmThgnUyAzuYQWtHcn4nssMJ1NwAR46sFXDyhRHyMq3XjN6PJjzZkYhm8a7bZSVUHvjNsF499",
  "key30": "2wdDgwEzeTduePcooKgzE1hQMZNawB8adnZJWguj32XKdmgCKTbmCM3WhePHnij59MskTbBacZftHgumHYmeY6Ms",
  "key31": "NLcWhPUm2XTjDjmouAt3LdvS8g9VYe6rd8geHe1xvRpKu62ncs1Ts3McBxttNubg4YUu2aMMWW4gQcK3pQbuDm3",
  "key32": "v4HAcaDG15fcApWC6SKb3NBQiQp2TV62MGyMDSf6KpabgvFtxDuz4YwgK5Bw7XsgEWQdWe5pBJxx6UoCD2u21hh",
  "key33": "5Qy89HFvuosKAf3gM4RUsyU1kTo2WDHajrpoNvJsCEoGjD65BjfkYfJsq5hMzT6kuze9BDpDAMMqETHCMB4AKymN",
  "key34": "rNtovx2WtsRwXMmfW8tWBHsVxvvcYYsxnoBa59MMp6nXptQukQhXuqxdskZn5BPB4BckPY6Vn97wpTkr6gpCM8v",
  "key35": "2yQCRim395ktjVfVeXifpPWLi8vQ51YAdYtRP3cNzN67eh4PEbYSxMNQ6xyZeBNZ5utVzjncTskACLX3KJGqdGrG",
  "key36": "3p7K8y8YEuhXdTzyh2EKtvK5mCmM5gVV7SLYkK7thJbn4CtYRTEAwr61tHDjq6WqUXvDbh6sXH8pN4LDHTcYhrNc",
  "key37": "41vtw3rYBCmmUQsTg6XLLwX2QuvmgiAYpVQU912FUwSqVjRpCLgJqSmckK33KnR3NFaYH9hLF7438pDBGFcfL7ua",
  "key38": "4LFMPE6GrT9aDheuP52NGGXzYw9yKAr8kDoAuQa5pbjeCDGoVBEiEAKG2YyDakUJ1cNfbSwrpvpU3qfqu3VSv5nV",
  "key39": "539gCHmSrfW7erZgL9fhCy3wR9fQzpr243baPbQhYM6pyb4bVkDbA7hqDxwYcufPT3B1QK666TrsjZvmYbenTvpd",
  "key40": "36Z2Gq8nbjctJ8tJHyaCrcuL11Rr2yWt9JYZSVRKZyqYSHG3EKdgGJMdY3qqvJ35AdgTcrLHg3V5WJiqaAUwmKS6",
  "key41": "32gvrPG8sXsTpC4yFYCsBUvamW3bGYw4J9SkyoCqXBhyHoT4NW5Cf8zku6kUHDkyJjmnggav6X8xNiCMymckA76L",
  "key42": "tCVEi4dDjg9asTo9N5pAmmEDjd63QSD4DpTGMtrmLnyecSs6uf5jk8a8rMCMCmypiKsn4w5JSZ756ZK1fvRkFJC",
  "key43": "3i4iqsNtoNp4FixPYJ4ihKtwNriSyL8CEUrrwbunS3x3j52Sg8MQxAQ8d1Tn3i2dfYuMWVgN4GPAgpmKsE8ev4z5",
  "key44": "5eqKoR8BEdZQd7A878gFLQeDFsyZsFUK1bjLDPDLSEQ9q4zDDWL1ghzeJ9uBiGejUxH2pdhzbBbg7U2hXYij5y1B",
  "key45": "5d3p35gEdUGDK71Gv4h82uVjKb9h5gALEFVanATjd8e4U2pNSYxP7utYtcDMAWmx6sdL3bketFYpHyncvdnxweDh",
  "key46": "2rm1B4knq5WofUx4QDqCQfJjJT8gtZQyfioiXjz8xEvLgS24zzBYkDdEkuu6dzKvfL1wkeEivqgWYjbQUyXNoUiw",
  "key47": "2EtaHdoLagKKehY2noaReDkpfigVz1jxNGtoi4uzZUgTTM2rzm6max2NCcowDoyuD6QKekvjPMvG8JCXHa7qdsu7",
  "key48": "4UvYMaUADgKr4ZCT8eMjrQcBgg4p8N7UGMaQSsfQrvBoGguuUN6CGKCHCzrCvEvJetzh9efVFTtW6ZPgrvf1MiAw",
  "key49": "5FooUjD8HXCGs3bMkAeCv7bMMdVCY9EKPoKhBg1XBLUaMp9tfTrGqm3wXuJthBxU1fn58Q1B5g1sTb9DHevRNW1v"
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
