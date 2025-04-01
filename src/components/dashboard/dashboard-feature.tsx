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
    "2wE8TrRoUogZgPCvG4aXZwwEGboo4BdXqx1PLh5bNLp9eiCGgtQ8tKpgVtHa5ntVVnAhVAE5Nxz15PyStPH9pS8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q6Wdu44aUk6miQmPjmuszvTKiFKeWPoAFryMDDKZtHr2XVELzx3X7SiEd2QqLhcjZZ73QLfJ891Hr4KqvAw2kWm",
  "key1": "4Esvi4UugTmXPteBJrSy2zsUP82j4PXwrDPcyJQnPUAXoF23wqDY8AyjWhRW3Z69y8FfmhvkPwCwdzLPY2zpy7FR",
  "key2": "4nA7nMmHGywmd9zrxbbV8TEwVoN7Kmuuua8bJiCUSJdxJp2FGQRthU9sGi8NqJmf3ofDT8117WyyHf8HDguECSR2",
  "key3": "VkMwANAzkLjvAnRT6bLWmtEpdsf7oRcpihvqKnsf5HqNwszv5bAgCyFwQaxk1ebdjZqs9uC5X7XWFJZkP6M6W7u",
  "key4": "32E3kaWUXAYMjk4iXifprRNKixJYBViYMYz2iNhfoEjgj8ehzNUxrQsvya1Ud6GJ2Q1EgyBydvJQN6j123F29KxF",
  "key5": "3mPH3LosR7R7jnMB1NGZ17Xmq6KPWTdmnk1DcQ4zekvrm48NyCRnqQah6ixbEsBMzQ1V8LjPkpfgmwHtYTnJedqj",
  "key6": "37xCbmuhKcwvrSaDd4Hjg8Lk9o1Y2fjMvf3d6aBQm294MFzGwVcM8r6JuN8K2maaat1qtYz5CweHmVb4zHkRwqye",
  "key7": "3wU4e44SDewj5WJZcaQUEf78xBys3AcxcwiHArjNHveTcnEo9Gyc8UE5my3gz8UDhyqmFSf1HS4adeQZeGfwHsez",
  "key8": "3i6aU44vrwCCQw16SM1vPFVNopmvaZt6U2SEXQz6T1xfHJtSrto2YR5pkCFbgNHsFmZLLpMo6VUVW1Fq27RKVmdJ",
  "key9": "2ZXKAgmwpt7xyNpiSo8xp4hdcE6AL6CNFCCo5UJ9Pnjt8VyCXdmq8xsgsaqtadGbp91kMiGbcWurD4hKr6KDJyZw",
  "key10": "MvQbFRxuoZ1GVXAsS2EUFSEoDWRx7Qe7ivshGcJCc5okH3UKsMChcGe5BEo5yzJF46DCknXAXXufHRmUxskUYu4",
  "key11": "3GX9g6mkhAVivQ579B7n341MBmRE2Azf2KcBWaq5fUK5s3Fq6s56wtTiKRUzKWs4NkvjjvgT2WdLzhz1EQAyeXck",
  "key12": "qPjqNUSQNmed5JPiAPn1hb1mLcdBSsuvWt4FSTWW3vg45UudcncND6Tj5mb9YghuP4AGJZM2tJBqKGgxUwysZGS",
  "key13": "5BChFhLYqt36owFMiyn9t36KFEwpFMzMQvKD564wuVoBXssc6m9CFJ7SMy36xe54eNPtGUAFi1UhfZGJDLUPwLnh",
  "key14": "3oBd1qaUS2hECsRcB3hKiwK5Kpku36g8CgQpCHh4Yhn1DH53MnL726XDD7MzhnMaC8XKhMFDweWw4H32EpLxwdUz",
  "key15": "4SxkU2ded1UrJzs74Lfmydrk8X7hwDyhCXTewJpavyhX9gHdfVj8ANKiG9pXJFLDd3h4P1Gx6YryYD5Jdn1X5L6t",
  "key16": "31FnuZmhBTgSojPJY7BdDAd8uXhVPvUU52MAk7V2NJK8myVbCy78DY9NQgjewEGR1TcReqdwzdozjsVWq3yYFuD5",
  "key17": "3kkn5k77TLsRh1baJFhzQUmzyRv5N3QKGiZFYxxEBVopTCTJNgFDfP7ZRvQyh1QvFsNw2WTVjHcUD9tfg5BU633Q",
  "key18": "5394J8gZf8fsdpqNCh9gJchzSF5TPXQyu4XqXntEfkKZNSgjPUGTZs5WZKSoTA3n8y4cNeDugXxSiV1RjieXdRp3",
  "key19": "5Sp6KyJdNt16gR4Ve69kLaZvd3zBzaqP9cf75YPCUn3xUqUn3kkQMTtKFyte5pSGTgBdsBtUaKPASjay5PB3bGc5",
  "key20": "4oVoG5j8iw5GvBqVbtvSC9JXw95bYPBnKJkL2ZyhmfdEawyfdMRskce92RWS7ikJJxB8Ych5ycQLUk88fSoBtV8B",
  "key21": "2zTqGHa1JaLHzTKmuYpBhkbiQ591wpsDv2fC1ohFu3qmg2Un7UvfZisATKar97GtQwX1B2hBxWKAJGeK3ta4Hxvn",
  "key22": "2RR9JFzdaexqQYjsjQDAJmxW9XrBiGzcDN4HH4HzvEw7vCGg63w2dBBkSwdLyqceuZv7KHZLK1V5iX2XeYuq8GtL",
  "key23": "47nwchW74Q8J1DXYdpQWGNYZc33mUwuvxgfDuDozJCmpRyuxebrKikLNyPJfdMccUEY8EgaN5PffASKQpf8XSuXi",
  "key24": "2yumDaQNY1CVfbTVnzGuCprpjWSiPg55KrmwBrcAdRntc4c63bAw1pvRYfxqxGy7APXBZWsjBrbPdfHKVq9vSHdF",
  "key25": "4dQgJhiFG7XthzMipDqoaxizWC1JJJPgApr3TLXeQLyXsthpkZ6zZAGFhAMEddTZihT42pASMkqW9PSFtDKmNJWk",
  "key26": "2Q9jzQdVcgzBsb7xxCDJXjYuToWnJfoyTEibrDyWmUk7sETBurkU1wx2gqc4Xx2Ubb6KwkTRsDRkeesWM3cPdYEi",
  "key27": "2z1iu3j1h2aA2v6fqNNXYXtECRWzb73fMAYkUXpmRq7nbMKpSZGyABGLFzRecHvtRtasebuWEa2WSgFS8usFtx9y",
  "key28": "2wLj8r9SmTDqD99NZyy4kpifwPJH25Ls1ep8be7SZBQCj9p7END5gDKx93KzLWbEtx3U2ncK4H3WDFJgSGy6tx1k",
  "key29": "45M4XbegYg3MuvU8M4nxq9vp991VGsgQiD4zovmWRxLVHAfba1fZUoq5efhPjc6E1yoES264kv7at25vhbt8CAHC",
  "key30": "4HaDoiTzxnmJacLgspVZQZxgHudMaW4GrZLnP5A8dBjVAcmiQYERmenzwWg15X2y2kVcvC9FmAvd6xC6JsBGfsAC",
  "key31": "NNuve5eabJrFeWbBD7qq4A2vGDRwFGieoPuRX8XMHBap7CqLenAnLSk9Q7nDPsqVVBNet5HRSU9xBLh2odJVyXx",
  "key32": "4GdoWn8faCFSFVMd1WTBb9t6wdJaRnNcmWS8xppGbHvAdDJ9tyoGk1VZpVxqP7dTRVJdV2BxMnBiZYCxyrr7UFFT",
  "key33": "4VRQjxSyufxy1KJECRZ29Bk9gfQwSE1SobtjWsK3Giqv7rRccrZizNaw2WAwYc4L8zKFYPNrfxfVfUNN5UEsGNDw",
  "key34": "2HhYZ5SnQP6rbZeiDqrLz3v2QWwbo7BLCZ6MyGkfekZhw96qnZBWG57qM7BW9Zzg43vfSrEHNCbvwtiNG3UHMfni",
  "key35": "2xFcQM3Q4Law8QrZ4cry9ihDBSrWWbzHmmnRDGvBgtV3gUxmJjMKj17oDcrZ1P2TwKSPoPKTHPWTkfX86vhLczi9",
  "key36": "3oXdPuAVpGujrS5gDX7WqpkXoXgREA8EBMtSZ82isaMnoyQEPeezp8S58PN2XCckrkoGukwQHDKjcNvTovNcU3p4",
  "key37": "5vFjJCzVwGhRioyExaokwyYWAv52HSwP14zfmed8NB9wopgsTeEk4rpGTManGPXobcmF7nyjkorFncQaGyBivXr",
  "key38": "4cfM1YNfVbHzjzus7VB6XJ7uk4m2MpSGS1wG3q8KSsEPmsBFifHvCTp8uuLxSUghKhrmjV85FeJum3dQBNypsUfF",
  "key39": "KaUDNg87qjYpiUcYPYq8EzksJcSKW1CMXPmD3ws5S3VJ5quWQk1BryZB7C51jcHmUeBFLycepp37nS8LjX3txJb",
  "key40": "Ukh1sQyjv8kYJBt6jPz9kht15aZdDNYCZBN6ikkV1bBgiiXg7YwWnSAkUXQk2jiXBBWZ5MPbF2WYPnc7vrVbPNx",
  "key41": "FvEDpdbDiKix7mvURcsPjt6LLmxr13ZZMQzPnNWQ6os7h54je8ikhyqXNFmZTZV6wCECDFPG1VMuCi7gx4YRvpr",
  "key42": "XB2gmdSNtvxiK8R65DAprWRNgg347RMgjBCSNRNXeyZJYLZ8zCE5KMisAACQAsWar8paPzQLTYGEe7wR3H1uKDF",
  "key43": "56o6yMzeQFRMRjNHQDjJoE86o7tFMJi7Ki6XGAyK9ydF6DCWrZrxMSUV3gXSc4TtG9cCrhKmR87caSXGpTkRgEPH"
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
