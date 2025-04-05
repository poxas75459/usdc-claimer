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
    "dAfUptFj4ckKHUkdinNp7U3mjsuL7s8SgC3aW6xHxERTarfNzPpvEtjtouGvLWPFoVep5AGw2nYByx2giJLUhfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48KU9j54qoNCRj3niGATGujxA5qXDa9sbeS74aqS4k4N9dSU6TqXXumprB67wQFha8FgFycEaAexiytZYXJZ5fTg",
  "key1": "4c9Z95gkiwS1PtJei3REiz1UQYb9wuXcA9dUWMv61ec2mbrZL9ws34MFCCGFjnz4MFZqJrfzd8M6y3v9u4XGE1p4",
  "key2": "5SmGGfTpRckjxcWsmtS7bqobTQYq1iGAXzptntox9MVQ6u7vpo286BhUUyWJEjNve5apTojvBaTYkhhUrhqUyaja",
  "key3": "5Nn9575PegsXmCutdCgKWeiXiK3X85LdpZRvc4FBsgsnurzd3KfG9WGmsBfWMMPNzzqV66kYwa63arqQ2caJ7hYg",
  "key4": "5kTrvjQxbG8JxhA63pVDAHMjiCf18rxcnHaNcwSMBgbTmKPav35Xw7v78GiAVT8muSg4ho3iBDKHjTcftJhuxExF",
  "key5": "3PFqEwjgxQjbDbRUvgcai2sMjTLFPwpnR8osAPypXVqu7EKyukGgYotxXebWN7zTPHabsNzaLs8yBsJDo6UeXZHP",
  "key6": "5t2YYbr8zS4Fg7xLPLxryEyz7nYQvjFVZHk1Gsqg394SAzzVmv8zb13tYoomkL3E9nDrzioLiuK4WBwMon1JeBH",
  "key7": "3LyfQL1XrEkXpbybrGCB2iRQ929dQ7XSLpUKtukMxBJmkoxuhc4JVzTuXw75eErhrFZDfC8pcBtmQ3amAekxP9aK",
  "key8": "3UHfT4uyixFBkxw6ueQMrW2MB9wfhKB5q2c3zFtwx3Sjxesy1k4MMch7davyvkqCrjrozy5CbDkzi3udKLA17bvf",
  "key9": "2fX3FmXiGeAgvwA9Y2MZNB9BdxEs9NcDYLcXzLGdAYsojU1RNH8nqKxVUp3MreVs5gm8wUc1QpwUfHfo7XtxbKyP",
  "key10": "3i8XePXWHMAudxJkfbai7q2vsX9zGmips36xSjXMZaKh4jjuAHGukT4CnSLvDGP8sJYctWFxvEw5mbrUv6bY6zD5",
  "key11": "4fiWP3BLSD93fqf11zoENuhBoCR859Y3toqsFY2XHSNKrUSgxK1YVzU7wktFSZTB78sw4RYYZyhVBPnzPXRJcMEw",
  "key12": "3u5kjL172CTAk57GZ5LeJMeQC1rYGFyx2pyEutof6pBPhyD7M9QXKuSmQ1HH6pbz9tED53k4MNEygpAKc3K1bbxM",
  "key13": "5S5Y1uV9FWWN9UuCTxUx4rt5JRdZFMpgDPqAHLjH358vpaScP3bcSuiChq8543RGE6saqfgkjmoUY9o1HfRgsJTR",
  "key14": "k7rJBTMyYM8iHEedMkoTPpLsZE26MdeEUmvzTMtKJSzUXJ2hqUj5fqzaQWD5ACZky7vMufsone9SrLhqMxPTffN",
  "key15": "3GdPzCjAnL3eQfbv2gGe9mDUNApmnqz1GgmbwzbZhuWrDpuEn5Z7fXJkptQDavjzeRQX53VqGjXRs99YDzXj1aKL",
  "key16": "2hzrT5xs9VqfR9anC9o83UsoHSENhK5tAqyuEvhCdnvHLBsgf2JLY5xKv5b39pnJKoRR3ZEdXZAtkt6yfQ7uDRbR",
  "key17": "Ep3SmdWTGiELWuJprPrPEoRcEoys9z4CSB8ZRGZtPCeBdew1GW7g62aVCzor2UEDqep1Z7pmWJtVDK7fRHAWz33",
  "key18": "4UaNVKUwqce36NV7WcWjEjcsrsGjwWJBn2sJ3aKcSp7F7HVjuXBEoHQ2Pca6YD8JbsAYuxB2xQRf9vrxp2r6WYhM",
  "key19": "3GbHmagMznsTYbqYZ1rUZzVuUCh6uPfCosLU6q5djKzr6gnnPPnDBazoSmsTDqf5dnGdCxyvPu2k3SksYjjrVMZ",
  "key20": "4vFVzyTcAVMQE1FgGVcdDrbPNBxGMyUr13CjzM9RUmnrH1ufWXDVa6cD6CywCvrny8utv4PQsn4rZVdoqSXZH6UB",
  "key21": "2Wp1DANdbUQtzXCcUGGfk2KXq95yimzHELw8WzBfnT9YR8sL29sAa822NoFrpd1zFNMbEukh6u7c1FpQhK47DJwe",
  "key22": "44P2zEyTKRvKtmZc595GH6WRBsAXmPEsdDMUzH4fMwx8Q8wxB3XERNr7s93vEETNbptxpBrvy6tnnQfWaL94m4M4",
  "key23": "2qcBLYvVwGnQqjpCofBXmWGx9TV7mpyK8qFsTtijLHBAGgAMWY7jvzkPNzPpg3iECceLyhbgpubtjdaXnLhkAi2T",
  "key24": "4DW6NX3m51TAt3VtQuhTJ6avso9H6WFypptY1JADbijZTyi7nggfy8d2VHJeZn2mCejbx7UJo5Fn5nUehSZ16NnS",
  "key25": "3uPkqdrjQeYmMjcRPBHvoWZ7FsgbkV2YR3fmw1XyjfWtWNpdi6Cc4kcZQPMuxq5wQuPo8GAagyE8GdFfBi1cDTTi",
  "key26": "5YawkRXET5bhK93UjvuhSQD9HBnHqEPsV3BWbe2kpAAEbgaGgBKnRJeRSuFv64LAdTYom7Su69gFFKotihrpvPUH",
  "key27": "294cai5if14RPbFGCfHV1Fib4KWQ4Em7z4NSbYaSSr2LH3XXPNxtHRqNZbcpCBmvPYoJNQsr137FpVtJa4XMsirz",
  "key28": "4UWxJJqAthpGbVR5JDrDHPMEdaabBQAjm18yAcPVW55wttRstk1wTj5GEvsTfEB5QXE1raobQPEgEtFNPumuXJS8",
  "key29": "28JTv823WULAx3HMRD3cYK9UHhXHEe6hZLvs4c5TBd22n54jkGJwoWHLSrFh93HjyEytpyiKSDvj2WxpoosW5jvZ",
  "key30": "45xsF8GQGoa59uy3fRcrxVVid2tagAc74JY3bd7jgMZegucPnSREEzc1xBjkW9LUvB3wEbimVGoKXcSayKSevsRQ",
  "key31": "dNmkR3vT3GgumafD3wSsHbST4y3FkD8QE59qcYRV6TJ5VkoiiveKf57xv7yVWA2F1Hfpd7CxDir6beGq5moijt3",
  "key32": "5gB3fMiUYr6D9nVvkcapCLUnhKL8qropPvnbjwAfCava5q5y2Ytezy7d3c2RHKw7XsBHuqkjQEQ9jYw88ZzLcBif",
  "key33": "4NxnNng2u3EYE3JJcGdpBcSvJ2hiNkXq7Q8qTkbuydC4vTrFykdBmDjz162fYuBVnrYM5hd5nMwPz9JoePLAemBK",
  "key34": "5dpmc1JtKQdCJQTUQYX3xDTidhhDtYTcfAYynrJEXvKkRxNtaw9pn6AhLv2v1vXzZEPaA5gNXYSD6Yk6CXW9kDoH",
  "key35": "jBYu8rseL1v3g1w7kU2WUhUcvtR3RwDcFkfdqeM8oTG7xk3aKSYXv6NzarmvgAGjsDUkkF6MUmSqrroLUNNnmLq",
  "key36": "3FUnmrNsf6K5KgDthmoy7V1ZymoFo7XfskH7RYb1L2vkHzTygbto7Ns9sYRNFUc6hALd377Jw9bLA7AgBw2bAaLi",
  "key37": "QH54hYjqN95dwHbMU6XJojRRd71sViqixwV5C3GjNQHz3wQcEDftYV2rKshqSqAdi3fzKVqEm568E891YX41VJG",
  "key38": "3Scwr2SBmSeqrk9fESvupoL1BeHWVg2pjpm617abRKsSDnhL6EdoUMeTooLSB47my7zexUB2b4WM1jEDfTCbyWaU"
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
