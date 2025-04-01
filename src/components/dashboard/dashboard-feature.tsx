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
    "4qvZvtgLtCKHKBxcAkDsp9WRkFVDYHVppuQmZBHzZZEHHuvFcJN2TycdXkMkdfadyWE5yXBFhQMh9pvzGdn3ejhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k9wkHrSbeUkz1hvmhwiie9qVtuzZkJk4ndjWCytRHLKTvn3y6yYygiPUhynSjm44NayNbXKroK3AKbWwnuX3xqq",
  "key1": "494Aik1URJX5AKxHQCnSrN2RKxbiDH1SUB33uQ8EM1itNMT2FNPUAEnwCAs6Zj1Ep1RPXZ22eaDDqbbJ8HP4B7Jn",
  "key2": "xNVwbsM7VsYmKrvdg1cR5KJ7op74zQrQqdgMDoHP2scyqmi5N9trZEeZdz2g3cpVDDf1S7r7iZbMJDsq7mUsZ9F",
  "key3": "269WYiot8rtM4scy5rpvdorHdnc1Typ1koWQhcrGhtxkbjPtgbKSoF7dQDur6Cs6uvsfraidaqUSgAja3kn2yxEv",
  "key4": "5hLcwdDnZ8g8GbYKSktV2qztDm5qWZfeG88xmGozrhFY8bCPwSfNWRhM3M5xuhPxuxgs2Ljzp5ro45zAqrP3hBXf",
  "key5": "2mwcfyGGmqpgtRN4QFfVaBqDKcHCsh8y96e7vwFQjb725SsNNNqX7TAcb184LnHkoeL67tfCPXPMwWuZQpLhaie7",
  "key6": "4rPXLRkMCoJWpGzWUEd2Kunr2sH9d87wXwbTAPBS2BNvgiXvXPkc5dWrCMQyNKpttQXWXpnYnc8d86fVWqyyJcLz",
  "key7": "26X7L9exWyH1d8SyMzsYHFW5sLsNJXckun87dQdt4ktptK1BCAY3Mgg1JzLSEbdAf6mN2ZWz1wEQYFN6dsoSaFub",
  "key8": "3Y9VNNk2KqHjvwBsKZJhp8spyB8wh55rbx96NZcFJHrE5BTQs1iSirSMsj4HqbSdDZusyuKvcL1KtgRhVAyQqPoz",
  "key9": "5WxgJVFaurSegnTFwJ6EFjeEWLHYqpwvw5BVdVxuYSnRiGWnhUoD67Qg8kPtUsvi2havSbsmnHWQQYdTx6Axw5VV",
  "key10": "5MLS9jcboYRjKv4XbMQBWHGHiRtebpNh8AtJW8dRnQpGfTWHFgsSBKzhxQEZ4YouLghe2xFXxpTZFf5AUz8AR3c3",
  "key11": "4YF44WXSzbqk36zEgt7mT3N2wgDGLhmga4d6vF2czrMH7eiAUJdLZmQr5byDgtR89d6RYkg8LSqknYz8ZL5c8zaw",
  "key12": "5w5cBbRMSoNDst3FneavXgzK3416GTigbaZKC8fX6hT3zFwD8Rm1gJaB2GyfqbZYx96nRyp36Ao21GT6biB4tZyS",
  "key13": "X5UpVp28AMUeSBj1iEZAq7pPJ7s9JzWUP13sW7XuQDcXob2Cf4Q8unerLPPnEVSiDYBkQUf5cUDNohuoLwyyoyR",
  "key14": "4aCnS95vsh8z7Tb4QLg5sCnb4MtTaPs2bQMpRy7j9KrUAf9S3jGJK41eMd9CFSfLDDtKtwkBM8VDC5ksuTKctuvz",
  "key15": "c6AEdqYBVbL96UUTx7UVTRpdZZt7bQPymtMEtyjApaiu9NFMY7TAxXmDA4i8GpWkCrqQ5NULz5kBNwhgLzfR3NP",
  "key16": "4gFNVJnLjUKKRdcqgntpkgCQsc7gL3EpzehXBS74YCp1Sbz6m95SxvBNpNEZyKecs2X4KvCV6KnqVf4B2U3jJJFn",
  "key17": "j8ANh5Fcy53YT3kk3MtfL4BeVB8tCfXL58TM15QGNFaiLYfizU6vJDNw797DzXVye18nLAEJshXQLPX3pJgD7tM",
  "key18": "3KcMR29nFVuJos2EXLsvamsavaEqAybs7NFs3HsT7WS8YoURoVDALZchKfVGeB3AeSJo9D32X68Q7P86kJLTVwfW",
  "key19": "QEATNcdN2FVDjwvqNZQfMkhwK9vJAQwhKHruWk1pFhEoEScazC8zka9ijnntmQPfSQ9NnExUxWZMJw1Nr3MSw7t",
  "key20": "4VfnZdT9o4nZRsCKV41sFrEK3jzAWe9u57Q1YN8WuCMazLMac1pCmiMUxvEDaVaH6o1P5EfA7K1FgdjwUYN2Kb15",
  "key21": "2ze5n6gkz7zSNQyemTZ2M839GkWFvs1cMTgAGRv4HZMUGeQDgaxG3Ka1KXCPrA1tMPaj1r4JVfsC1YeVjuTsU9hE",
  "key22": "eJ5gtS3CzF7zugi6m4DrDnn2LsXnQuZosvpoHj6Enx7ZkUiY8Uhjap6RrULvLNCpz9SZz31cUhGUfJwydDynjfo",
  "key23": "2RKf3fCyk1oSRhPivWoT5r17S3gQFp7k4htnVzbxNKGznvJPNzUedpXtngAH8jPrfaKjkcTyphFVyKyWfaPAasqL",
  "key24": "DxfmDoSNnWPxpy2N2jHM8ATPQm1poKfdcdXtXRcLcDXFyUkwt6jmdo4thXSJTfwsZxEzckdniYo35KEBUJNqsox",
  "key25": "6152GocirxXUyHZ1HmkV7JzLvdiF9cxiMecNBq9sS5ZKYu7gZy3atD2uK6nyzgZcuerypWm3jmzLWTkRpgp35UK3",
  "key26": "5pvyPTmTKZAsWWMmQWEueHUBu7Efj8FoZA3b5k8uptxNvavCjeY2GBjimXHZsghZCMgWYDzAY9sbAsBNxQhMMgqZ",
  "key27": "4FZihvd8b96cc2ujc9cXxM3dA2aWXJy6QRxM7KAQBKs7EZyQx18DS8GvT1KoDK8eKqptGLcRMAA1X92HZZgg4qam",
  "key28": "4NyxNmXB1qKoxYFKDkf9DXwXu5PZzfMLq73qV3eXbqPDUneLZCnp5ztLemdSBrDyAafxnQ7ijgxPhcwH873DYS9p",
  "key29": "5ZoFtjLJypud3PT7z6mE3QAPP4BSgEw8cNW1VZVdNPMD59pwcsBzxwx8bEvaHgzmdLc2drGotuwQ8Fk73bsjEAEf",
  "key30": "5VBL3To34qRD5rBif5ppr3QYzUEVcqgEWZuswGp8Ybd7ztkPgTGR9NFPgLuHMAPzG27gkZYN44g2G1FvLoMDRZFC",
  "key31": "2eexTER8Zc4u1ZzfQCkkiSzdSWXg3kK2yCU4CouJnYuiLE9FgeL7EjetTRxqGhAtLZg1GjADicRwWrch3JNMxXpv",
  "key32": "2DAZQxohWnHt4TLMW5PiTg4awwe7awEswztZP6vVxqG3Ap7hTNHtbSEqDdkTtC2z42fZ6R4AAdatD5K2KvZXHiDB",
  "key33": "2sxoLgXSxk3zeiYELB2ckovcRzaeuy6U6HmbJKFkQJ9UsB4CkUFygpzp3Kg2mgJSEB51KcabUFV2xkbTHB81tC8L",
  "key34": "JPRCQci6ov32ZD8w3Txy1HkewTqMQC4cFQffWPKiDCVsho5WLmbLeF3JhE91deyQSC6CN29BFY8fTXoAb1BC1hC",
  "key35": "5r6seXuzpRagc5zAsDFa7eus5oneZbQxGSA9QoFKxrSNQtWdt1UBW6sTz5ZHhqVL2mp7dx6PweL4RtZjTWoqoT8M",
  "key36": "4KKKwiJrffhJ7yLKcN35SpyQqLeFzEBHHMfLv2dptYCvKwYDhTExEKoXZGegHgmpo2PRzReqPGmKM3n9A553pHY9",
  "key37": "3yFcqfgxysimCnx9A5NgHoZxmMXNybtGqUyG9prVMaThUqj2RiZyNDpyWR5oRRsMvBAz6omvZkAXMHmJZjf32Wme",
  "key38": "3LL2UkMavT1Tosw3cWsfYPAKAXg2dQx2Fa4frYNbAzcJBjZD3rfmspa9u36BxX18rmhfg496nSbDAVvvoZqi9D4n",
  "key39": "ajFm6uJykfAVhNc2GYaMA2qWEzqiyLxsoojDt6bFmZLhhJDwa6pVWXhThp8ymxFtazWKbkWSKeWZYFo7fcuycEQ",
  "key40": "5ArTbaraDgJrs2weXbgkstfzpg7NarhsRA1smK6ohX9zReGxjDJ5mgFcXjEs2XTMgrv9JNVc5fmuP9D199U4ModN"
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
