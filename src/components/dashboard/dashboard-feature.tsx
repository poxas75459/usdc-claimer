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
    "4D9goUTHjXqwUjKrMxjv4wZ2ZcAZ26UXRsXRWE7BDT9dfABQdJqCJmNPm4pNmKhg9C8dSVadhxQXspWXr1P65aQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65bEXcHajzYA8843NAmDPWTWQmMKVETx2YrUFdQJtKBFYAVzJrHzF34GjiaAs68R5awKag17rPgfZ4tbMckNS8DN",
  "key1": "2XYaSe3L9tkBikD5tdkjNYiyUCw4o4wTvq5pJaCSXyib3zuDCzr9o6LKq9uqnYnByKW1miJkSye3is6NNATTaWun",
  "key2": "nKUESbF34QDCwXgChn4fK8imZ6W39Wv6aJhKz93YraGntwXHpTWKsn63W3UYxfuQLdpvQ3X2Ca8oGd7ocsmDTb9",
  "key3": "4bbKAuz1SrgE2QciWLaC5tMxPqxeK1FCaJgfM7De3Wfha9WMkZQ2nQTk4Cac6XgicNuqsEYQ6qozxh2HyAkNx7FK",
  "key4": "5XuMG4xe2hXSkdRFC68Sje9uDwEwzU8QpLvGUWSzA8m7Coc3xgeaBu7EPakSh8i2jtuARfoCoxffuJAzH4VFjfap",
  "key5": "2ohJo7HEKd7kxNN3FkeJ7hMc2v5yNi5KwvaiNHx4SviKt1Dbf1MnYtnpzCcbSfTkiLGQtXet4iLeSbcS3DZL7YZb",
  "key6": "2odppk1LRBkoe4S8WMtqsyfcjrLns5JW9mREGxkRiKJLESKnjycYfyBfUB2vhwMpK3UyEFywMweUdYG4DYekoDLq",
  "key7": "2WzzB422EC2b2abUhSNKogZuZm7YvK8Tnid3aNP32zkQSyNKiWsdAw87Zz15WZ27uRwh2zUPND3KFgzF6SDitkU5",
  "key8": "2bJ3nJY7jMuVKPEou9HAkgEVXermrDZm1FDpK9698hv1343tdxkbJTjnvZx8uHuWSpZoNXdfZ6WxF1VJTe4Jt9bm",
  "key9": "2saDdzTwDRYVBonuUxiK4JqmrnXeUyThG9VzciqLTuHYwumH7mbMuj54oN3YUXzRNP2BJLabxCVkZ5B3US9QJ6Lv",
  "key10": "2eLj5BAtyUTZuL9863UQ5nQn416imoXwep3vAHAoVJwyvrVuFVuEher7RNYfJspykX7aY4QTKn6biwejafWNfxZr",
  "key11": "3CTCGQbjdu552cYHNUmyxp5qBXanfEemXtvxjDjtMZ4B8FjgyyZxen6CL4aitPr2G3Tp8nxzVwr9RNyj6EdHFKSG",
  "key12": "3BZ5p1UGE3ykhN9ccfgEvA9XffKuPX1cf2YCbRhaVkWfE19Qx1BfnLpMRVCVM2FBDN3CgcVzHR2xwxVpzGr3NLZ2",
  "key13": "kkWuUTMfC7zU2FDXBPENaUV4K1cRn67BZLR2VugrFD1HTcYEM9ENGhH9X3eHcMCy8SsTYXaSuoS2mNectTXjh7j",
  "key14": "2BxU4TvTMZfgbZGKD9dQTuiN8Rt4oqnpPK3XggC7nXLLN1caQo133WcpedgHJuFhddT3MZVwJqDeRtBjNMup833p",
  "key15": "E1PS3vgCVsa1pdg585CeijY54tLDkCi6kLEpd8PWKSrKyi9HeMYRRUHuwEEVrCYp1bpLdjJ8KYB86yPtrpjwYqT",
  "key16": "HPc8mUmJHzoSQwLpb5tKFbQwvCJL6dywqQWL68kiBKMWB2StTzZjWqsUKYjaigQpBzpT1UzbgvBHWdmwDxemCuC",
  "key17": "nKqYzMgsG69GoTHdxzDhxRqrck7ydJTW6YwzWUWCf7UMes4EAXmxBvTQxMSzswPfpFSKKxFfrbtVjAGiPDzYVdf",
  "key18": "p8K9un2WX9U3ebjeDnA1FJofe8qA1T8qLJiY7xvoAwAP4K8qrqmnbeN5WjWmdJBVeNRBFqccKDAc26drqXzRqu5",
  "key19": "2GiSTuP5ANMEjNdEMqpEW2cNMACBjzifYB7FJ5tpgKct4T64mzCns9z5ENkdb5seNohfmXm5A8W6RcjyQpRwayBR",
  "key20": "34FvfAnD9apFzikfDYoix9YUDKtoHX2dvYKVPT29rkhVDTVNg5fcyXjDSCuXkJEjvrtwCmnzNUrMLxs1hLGbmFEG",
  "key21": "3ob1TWJrDR24MTfqMspYR9VMuWZTTPMzRwvp2EHy8dtDnhKpBxG4ZZQ1CBueKvLQgfPfRGk8AXYD5msXqq25USDk",
  "key22": "j8v2wEEHzaVHD7wQGExTTCJFTriFsmLicbRJTSt7EPLNthhDwGHYAHoULCWAsqVCk8urRtX3guShGuHDbQEVDYS",
  "key23": "AreNpgzurWkPn4jxNuEav3AGgkBACJYK1LySCDTFUtEi11KgbWE4nM55UztwDru7wCgWC5vwczeTVA4GWGM442S",
  "key24": "4QuZGjbT8okQ1h4BTb7gE9gEY4fkEuLh1PEKgqxGicVXTH7Vw3HW4zxCDR8FF4tUPmFW8ZPiXe64tWvct1hKfDu1",
  "key25": "2L4CbT4jGBwK86mhTZPUCxURJeBXRwkCMQPvqRiCMxwe2hShyjpccQbzsjLNG34XvcsmEXu3NyP72s4LPm1VBrRP",
  "key26": "5cP3xrAkKg79d6bdzy1mSLv7bdPxy3oAcSg19BssMFsgWpULaEvfz6nXuNZZ1PN3ffncuxTcq4pATUAuDobnUEDT",
  "key27": "3W7hJMiSKQCGPkj51e2fpv18ptHZ8bXk6JQnrLPWvWHHstMrcUroakyTyRWffZvWf7fShMFkszAYYAxai1DRiaBF",
  "key28": "FkxXVLDSk88MZXxpYp5Cqmn3V4ncBM9zNV7zJbLTJ3qFcSm4BQEuvph6bhaak4ksXdBsfY1YAFrjuwKvcXPYfuo",
  "key29": "3HVLacPGoR6mX7v3msH5iptjQL2kzeKDUHP2RUEAaCFdVCDqkAYTWgvknCaZhJ6LvYdhDmhuvC8Aw96uWmPKjJ4P",
  "key30": "4QzhPd9pt4DcyujLu8RZ5HfNsmPq6eXp3ghLWA7fB3pgncFGrxVJg2YVCugwtuS7GmnVzoc9LZHpE9Sxp6Vh98Kd",
  "key31": "2veQZyFxnrB9gwVGkJgf7GsnGtvFkyyasYKxn9Hb65zn74Tuvd9uyGzWVWq12vEHegB68ok7F4nc5uYvcuLoTppP",
  "key32": "2hLJR6wMhaoSc7w9aRBmZNaiBRufL5L2egtZAsqoJTx8gB5AyvDwu1c9ZEyZoMn1ytyVwa23DqBNXkQCGu4pDLz2",
  "key33": "3xqyz5nKr2SvAETx6WojBRdzVhysU33Sw3Ad3LxTF3gpxKgKTptqk6HY13BHnme9rneeGZN5BWJXYxwTeRzZspEW",
  "key34": "2mrkMNS94F7hmwt6MQKADmq69QmipCwWiqBeutByVD3aSu4G2pDjBzqdD77b8H74eAGTL7S2Ykx5QnDAY6b8qFds",
  "key35": "3anCvMJbqn4kXdBnY2MdqgUgm39zHWmDVME9iM8sfVT2JR4FqGMDg4bsEUyLB53i7saZf38QHiujsdqK5D5QSZ7p",
  "key36": "3KtpdsHz6EKKu7G5nUmo9uxRk4JMSCHBK3XxPgLTNqjGmqryiy2wrV9Ufus7YTxt2Ksb5xQrSkBi8athJFHLt4aB",
  "key37": "YSZEpUzEJXmyTnpy23Uft7kK2fwt8XmCsyRy2Aaiaph11BRzsijbR8KTWfvcnXXVSVbj6p14Fcu1ehaNcqi5HDy",
  "key38": "4eWLMrEw2b2SeLF1TusCXYHqUwn6k8JVSr2X4DGRj6VNMqENGdTdNY92GV3UrGmFMMXutGZ3uaqHrA7NoDNWvXES",
  "key39": "3ghZaW4APVkqiAsMwZbEsNEVUrdMUyK6KttSRAqrC4UKHwseKPzPNmuvW9rewtSjJhVXmbkrgDsSDLRGFSi156ir",
  "key40": "2EZFYD6NSirSoBquEbi2k6hPjCB71fuKepx3trbCJLD54wVacStV7qR935a88qaBRc3wpnH2mHUkx2nRWC2Ywi7Y"
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
