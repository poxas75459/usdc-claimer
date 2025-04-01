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
    "3GzwcppBB45zPS2Vc9TGFQDGL3oxYdA9xGMH78yBBYiCePG8QFui3FvCX9BYeWjinB3DYgw7yauy6ZHSruX961x8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kc6TpfxUHoDbXfC5MsgzBZZGWZD9TnVWutHuGHTV8qwtWKBnHShgA6Tyvc52rd5KeYxDzTweQkkHH4DY124EBjj",
  "key1": "2CzBABebyEcs3Gr9VM6kjGS9o23UjMCxm4YUdXH9mBe1tAXhebVfW5wXXrtXugmPxZX4nENtCUZ7wJG2jXza5exG",
  "key2": "2dLY4kzjGAxcSE1YApisfho3A61a1QCBFDopeCB7sWethtR9Ej735Lrbe27gDHWwGgRKQUhrE34nakmNmN4Tjqce",
  "key3": "3G9xTGscSPueSsMYNibr5hUtP9oiaBHUC1rsz96bow45Qf7AuSnFBvyVVRL18zSqsXnP9uNETMgwdmYJ2GRnArc1",
  "key4": "3LapL9SrRuc72GBGenWp6CrzLB6NEynwfwKK219q9Viz2szrJQtxyDrmty8p9ch99zreVWfHj5Q5McRg789nh1uL",
  "key5": "5ufS5prsWbWR9YHig2YmMTYDBhEo3ABSBix5THs26mgcmYaBjoYwydt7WJskhw4237V72BPvdKfEPcDvRU12Yp2s",
  "key6": "3Yt3pNfBzW5YwWpTR5nn65Q4VQP4j4UyNgasPvbhYu1cKkMfX9iSYz8wyTz9hHudLBPJSzKiXxJxtrZqrgSEKwPY",
  "key7": "wxUsid8hfF5LkYXWEQj7v3nxSpukXd4bg4VXedjYtM7tiH3NTTeGwkMdX4Jp19e2jw9nhoja4JDer2x9XmbYBEp",
  "key8": "3Tq7QP5VDnxFHGupwfK1cohnX5a4fcLLNCEHt7kp2VKEgP9wTYvwrCBHLqRkuXzEPwmQUGEhzDmELXkPFM3sAv6v",
  "key9": "uLZpVsVRjAD5VPyCPwRZzdqLoTQuSFr3574HW4x4BBMJmHWNqNhjQUVAi4DZGbGuQJcuiCAZS4UYGAH39hVw62q",
  "key10": "4jLzZ8SMfGTEGvJD7UhfufGqm31V9r7VyhppJdXARxeD6SJV7b4t81dp72jBfJTMJJoXdf9Qe5sHVvBvhX4k9ZXa",
  "key11": "46WpzbXW2RKRAehX5RG8KZSvcANtqQcbLXyDUF7dyLK5EHNeQc5yd5SZomFZA9n1gaaut7MQ8Wo9ysup6fYQfP9b",
  "key12": "5DcPiKJQVaCc1SQDBAMjrztd26r8kb6ksZotPyKDzDUAjvwGbejnYNVkeUPQkBTHAbE66HWXte33HETGD3U8viwm",
  "key13": "2fVBfLgbjMfMwciFc4JEyuStmDsvX9rZVDvtzUjZXfxSRSKDo6sxWQTUe3phqcNdK2957qP5aLbHbYS4PuKD1cwq",
  "key14": "22dZS4vKJ6e9PnEodTyuGsxKPkhw8C5z6noPhrmNYFAwMJ8wYdWxEsMbFjen5xevd3VrPMNCemSFgakZGKhBDrwG",
  "key15": "XFHFVyNWZLHH8cwb92Xd25B9yN2i15iWFArrLw5wskp3CifxVM7tkgYchb7RrfREvAdDzShD1DVqQtHtF4J3EFQ",
  "key16": "2iypX8SEBqZstvT8cJqiDxgtbGVYNRdrBp7gKkomDfSiBcjS7CwBb2duZKdDpMQV5ZZYiBwNiHvXsBgRx1NjNpnL",
  "key17": "2iyDCDTYJB4RgNunGV68Fk2qwrL2R6VRwi5DnDsrHqCzdEcgUpmQiSNWq1hmvg82JK1tV8ntW4LUDRtahHZn2xDN",
  "key18": "55fQ8eriaj2Ncdu5HMJ18AdpBJ85B45Zaf1ma6N96obuLLyszSF5eb4GDZmRaXxFbdDSp7JdkBADSonpNipmA15t",
  "key19": "TgitXkGDG7WSZetDBJe1YZzWp56vbJ1tbi3MFzZsecDLLBuftipjLhiZcnEYvyFS4TDAXwUP2ZecDuKh4tqAm5m",
  "key20": "4wUScACZbUxSwxghKPnxicjr2RmjPNR18A2WAQnFgqfS8daUfVpUNdGKrpiDnkxu4C2n1FSHboxJgcd4FWhmvFGT",
  "key21": "5PzfxKw1tVht297nxVbzVsPAUBto7AoKQgpsBT3mCYw7CSRsXCkt9FKBueN2CVgrKdMgzGj1rWtopTet9Pq55HiZ",
  "key22": "5TaMRAPqFDSVaMEmp2CxxPKiZdpJYskW7M1GmcZZZGr7vCS3YeeBQgtTbkJwAQvAhMxJq73Yfjofq9iMhb1Wh7YD",
  "key23": "MmkrxgtYvcd8VLkzXVuh91j1odxM5KPeFyS68rAMytVXMBJbFob7U9aLexR3wixURHgksULyVJgvyCkfFbo63w8",
  "key24": "3HKPpVrAsDvCQiLDh5fPXXjfo7SR1AtTFy9r1vSPkjCckWwX8BDCx3qj6usrgmYmgH4wDzwD6C8KjL53dcxKa8P5",
  "key25": "5ng3fefGv4F5dYrMmpZix9AVseaeUdmPko99439VdtFxSd4mqRfgUxA3nEDh4SeFvHigsPFJbS9K9JgNWhabvdh5",
  "key26": "65JEEKtGGcFGrbUzUw7qbcRjNkYirTtDoM4LZj6NM46HaYxJFsK9CdGekbF6w6qb9vh9kCEbnSTn2Wviw77jUAa3",
  "key27": "6468KxR2Kjwj61RGvtZaR2aC2tNBHc3evsJi4C7jLzKH3Xjh6WP2DbM8N6UQ8A4mEvpnb3sJbRUhyA3BrnUFH7MD",
  "key28": "3RgwfuYEX2sU5Z5GTXmSmbX1efcnwU57Xj5cQs8chuS8DreggWtV9nkMquWe7fpYeZshhgCiEECRiUaxmheMwheN",
  "key29": "Aubp8LqjupenfiVPhx2wcR5R9bJsmppMn4SFQ6dhP93KmqfvYEPhqp8Cni42SMDzUX169Ukk4JLRp2e18fZ6oTy",
  "key30": "2iHCuRUz4k4zh78VVs4oqoJFRfkTQeMsgf4tR2KYkWmTadptjaW8Mn7ZmjqQdBHkUnMsR96ELSuxfb2jWaKkKsYR",
  "key31": "61PehbiEmQ2YNzzrNNCpXcQGhLr44TTEPbVXS7V5GWwcsJUJqCuMup5JmYEXtGaRRya7LQVSZhz18aeHc4AEqZs9",
  "key32": "79cM7HpXTmApiknLmQGB1d6LDA3jMkhHi85JAXCG9zZw7D5vtr3Fwvspe1BMwhUWsavpTsjskj8SFxAyPRPt3FK",
  "key33": "2niVesAgqVxYFKtQh5d3rSNkc9xrwc3FScZuhtpmYZcrKVJEC7gavNKAF5NsS2utzrKvZr4HZdztevgL1d8zx7sv",
  "key34": "cecLJTjTbdZjX9BNnGn7CNYo9dSQERRGaarRcVTzuA6Sm1ghgAswpAJaVN3TDvdsHVmTqNmoAY3eaePZTRnNm2j",
  "key35": "2w2setS1WM7q6yHGHy2sjKGmjea3fshboVQyavsihhRvw2kFz5FQW2JqF3ZuJ9xXsgjat6HZxdCoVCdcVUtG4jtK",
  "key36": "5ZkKJxhjbge3ASSjNtekF2czkbajEELoSSiig6hkYCips9kKDv1zfR6ga3QRSc3B1r8qcsL2jUesbewbNM8pjCbs",
  "key37": "4pCqiiXRTBNkR1xDQCXxEvyo7WcDVLw8fH86Mfgtzs1pcd5Rx4CrYCPVPd8fJhKsW8uk7nxzawXNFRaAWbMRDVPC",
  "key38": "49yz6dShDcCN1f8VmDM5NbBLhXdfDTvZmyZDQDpMjsWAbtz5T1c2LCHH5XBGWk8v1jrVsUaRUjugNatKDPYXx3Fv",
  "key39": "4LdRabzEPKDXnz8eGqmNTf2CLf8rRFhmEvQ3unVjkzLiti9NqfhtAnAf8FTmkGrJdtowiTCSpBJzCbt7kQSBQ3JF",
  "key40": "5gU1uEZVtnJx6rnvmphpj3cu61yczekZ5hHmn5AQuxL51yjX3PYMdR6UyXZsYhfnTbDs2pKYTHCoDN3ndy5o5rTf",
  "key41": "5AUESs6uxAD2JhRoy7chhtRkSFbpVoxoKCSu5r3djknHqRL89EqksdAeUVzRaWzAoCLMLk7wGSX2NZSuj1WuhV3Y",
  "key42": "4gWMu19aEPrDJStiZWcVtSZkCJebefMHUmmJwBJjCSeHyiPEbC4CyLKy3wJscZAXAdQKWu4WeYPgVw2hsZ9yTTkf",
  "key43": "2C8E5DDzs9TTHHKKRAuguJ5Bc5DLsnmHNuukSkaFHgAxJYmf5eaiovq4S6buvnCTXWxnMg5fs1SKLpxWUviFrStj",
  "key44": "533Ehcp99iunq14gFgbbDwf1jhMJS2sy3Cyzow9DiZDqfJozqEeW593tosBvhUX7sU4TgBhtuDkF8J8vJ5myV8s1"
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
