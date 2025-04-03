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
    "2xo1uYh6MoajMaebnekPgqik63CbhBFog4zLvFRnRPDCQen1DAixxJVRZnsqQsgiMHuGLizWEcBtVwd136rGb4Ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BnJZBr6CPxL4gmo76qcTsBFCuy1N8KbWSiq4rb17X9Rn3bsfwV1U8AmSGYkbGQt5VxFT2s9vsnfN6B7d4i6RUhy",
  "key1": "bbBXCkq5uMAtff9eitfJTwUw66BQ1U3K8v2cri2fp1JDQgkfChtdfBupXtihbDD9LnrVQ6RPpkVRyEZY5owZz4t",
  "key2": "2m8ebve4ZhECrgyvQG4zmiW3YjXyV3hRycxJfLJz4Vud64f4KhXbqy4qqA6vTbRDoy91c4tsLSgLdRfErJayvrZ9",
  "key3": "2379VxHJLAEnHPyTxFLDiJiyL9QKxKsjR7SzR6QqnrmneXZjgHrXmDJxr7GHeBD6uLwMBDLDmSxxD4Foiip7DJcv",
  "key4": "2xqumGeB34mnbeWQTWH5pBcGrzzh3d7Gj5nBfXgquCUXiqdCPqyuXay414GcdVJPgqf5KenGh191X2Z7tLBavQaV",
  "key5": "X8FSbWZtqbioQGZuDLQKGC17BCnSZxPqJctJkCbwDPpSSuN1sDbuFgRhVXLfrucVevWBhXGMwmNLAY7Zc91vfUc",
  "key6": "2Qi5yp5VVCWGbgdBnMNNxKjPbQqD6BuwKJwhZ5QqF2MNiK2oP7rCjX7qMuCtkQAGX3rDgwHkQGA18EL5c6xR6iNc",
  "key7": "rp2mpDr22YvvbAWW4YRADYjc3xm5ZhpPkhgiFYZZzD2joLEyG6kFgY9np4zRphn1P4DFG4fPru87ykF1GrXiddf",
  "key8": "3sMePatBQpy9tatPxdex1uzn7QQdnTpf18nFphdKu365TdK9FfpV32QuxF1twsjtRPearDdWRzH2sSShd7Zz9ZTA",
  "key9": "5M5793B5TZ6JoWnw7beMfQYwcJ5NVPJuae9LadDtseFKRAhUn3G5T75DaR45GV4fmD9gQzUdtdjUuVrRL5MPiKNC",
  "key10": "4uUsz7Jsx3Myfvpe4ofBuogE8Fr18hB4fFeFmKMRipK5WNiQ5qMFRGMkZCvPiKWqCJXiY835hathydW3ykAeZysw",
  "key11": "XQmFiyoLpforBAKDycfmErDkqPhWt5yn7FpKZm4Er6ZqAZUVRUsGTUGzGJjjVxk7i5Y6sQgVfrqHqiVM1225gz6",
  "key12": "4znSNvhxTRHBQe1yr3vbuZCMNE5HsHECj1H655tnBfcScFACGJeHwVfp4MSftGbRyvQHujPQqsyZQ6q4euAzDsge",
  "key13": "4BhDnWh3diwQcahTjpSmqgyt3k1uRaFN77jesZGL7ePPjoFQUNU94J5hp4gWTDRhgvN14KkgMX4d56jaTckkszyo",
  "key14": "5NNTuiFWqAJzpX6JBnx2K7MsceUqPXzza8ib1aqENMC29J5MJThnp321e4asdRzZ2NmnXJmsVnP5C78xKvKV7LfQ",
  "key15": "2gYftFkXntaZgoZdfuCXt68paGSxB1npnQewum1i47wqQpn1vjG5QYQLmkYkNqjyg4JiBkMA4zdBJsPC12X57oNp",
  "key16": "3E3JMfaycrfzFxubAUZ8NrfXADQ7XERNLCDphcckscmqnRM7oqfoCR9FWuyCjyPCkr2XijMnYkHHsDfmFwdivmRR",
  "key17": "5kdQmgTcF682x6EarTBq7tExVzB556KL4NGAbMzxuAupyWHaWNXVGeM9UgaU5nPD2pAWUFPKjh6pTg29HKAf1Fn7",
  "key18": "62pEma5yNGKRAz5TZJfYgNSoHXmFC7fDAXXai3hkN9DE7Qb7p1kuPXDNi8qsu4b9895VguoU8aBV9UYLVbyYUbkf",
  "key19": "iW5kuwjL8ep3ksxGizbqhWd6LzDv5CyFUr2hEPTqrW6itkeeVsJF86Rau2ZvuHBA3K8xgWJYQiCcvaknDU9R9hA",
  "key20": "5T5kryyqQU2k1m9M24FL5r994qAKKHn3wj5wWNhPRSjAobNdakztKXrFPsTUuctNUkbrsQpPMLREPaTkL6B5WrDN",
  "key21": "4hNW1xNVms3yAJ4q9NBfusa6tW6yLxBPMWQ7eUmtfmP3Pp5DiNnH1EBtGiEwJMHrGULQajio64U9yoixDUBuaRiJ",
  "key22": "2E67dmARzqFGvzB64nbLLyoaLhVyfDfNxzpMc9CnkhSnW4BZD28S8p4pQSjCuqMPZVHPEGBhqWUEHanwxZqHi9Qc",
  "key23": "4A4mXPiMveqzggTEKCDsnnyJCcfc47ZAgUAcuFW1psoGjPBp1PMzS5MapdJSENemrSpc1HT2pDPVHLQ5R4wZJREV",
  "key24": "5V9AfMxwcMzv2zCdt1KQDP3muTT3B5HCFQehynXd4vAz4oh1QZFKVFN1iT7q3mknacgAozyGoLyKseHc3Hxcu5m6",
  "key25": "5TwdS4Y962SFG9T5w7dSu4WuBpvDca1ha3DbJkfrPQosbe7eUD7mw2FJv1tE5sKEF9QmS2Qf5ccdq3JxWdA6eydk",
  "key26": "37AnC7vhcHr5GfNrL8rkFLG47cM6iDbQuZwZT6ihPVMSSXKeMXTgfWFphMcCrVuFnobRSNnwzxmR2KVesnVGYvN7",
  "key27": "4Q7Vf23Ckquy5fpJiFqGEnA4PATzRURJQf2AKTi34DVR4Aipg2Axojazwj94j494Zh1g6HwbYPf2BCnHTTp6iuz1",
  "key28": "3QMvkhANuAG4dX2gcMZoAQtkZR6moV9DTAkjzGfhpQVh4dGY14UA6HCcdmCTPxr7uM7pZWWfHyPQKxnPgf7oCLcr",
  "key29": "4Q1Sr2rDapzb9S2CcWk2yVYKmYCthEFpezbvcw6vMMVWftm8HMsZz4N5rtrC5dRywjdWmjQZLtnbewcdY6rdGLfX",
  "key30": "3VXfSp3Uch4qW4JBpys7SDAKZiUyQZ26H5Sa1XiT3dwCE32V7dYesLNRwNi2a6bdFAQtnJhhPbPNuo3bJ8nRUxbH",
  "key31": "64ynFLGbud8VPBw8ziKfBKcDcHSyoNuXT4WkUBNt3ACbXxLTV8vdJ5DeDJvZR3iygGZQaey2dbvg68TXBEzEHLaU",
  "key32": "3pppM2vR7eEk82mrkN3Pztg9zcZwVSw6EzVHWF3KMM3Fa44MwhuPWeuQQvJ215dGjxp27dbs45DFbRPUVzZbzMiu",
  "key33": "Tvo3rYV11yDmgZMPoxQQxGJKsMYNpMGhxzGvaiczfBe7Sumhz3BQXwuMWEe2ebb3Ab5g7BZsXX5uhHMLbFnxafD",
  "key34": "4F8nU44oXZt9EtceozCurUT22RxZoRX39kLRQoDfhjFrEbHoEcC3AQrWRaWVdGXFHv7FFYifnpZRS111jcHantbJ",
  "key35": "38yXRSHwte6f8sEaxsU1WGJuPV5VnQkmd5nDS9Aj974DGTYjbVUgdYgNmNcs5ZQkmmcXpwd4yjN4jjdRAsvW5xQ8",
  "key36": "4gjUtf395LSareS8sUibAjtDDTnxnkAy1k8bNFSdq4Jsknp1ivkGqRdCnkaMxvogh7KWvpDxX6hZnd8JM2ZkY1cm",
  "key37": "51XTyrKL8V1jMEYkFMt66yH53QjwZeipBE12t8475BtUZ4fdoZyfbSFEcTuputEJJ3bif6E39iNSmaJLR3qRWz6L",
  "key38": "484W4sgpVdke4kGvjsXLDL4wYdTUtukbpj29hpUawqSfLUix4G8MyJLxyENk938Ezdgb77gx9pbtopTJ7NGvqf8d",
  "key39": "3eQoiuvo4J4fJD19kiHLRqUHJBcwCTA7hCpPww8R8Dq7yTAQqfPVNxzpeJYrjm5XJPsmrMkpWgDn7qo2weAJyojS",
  "key40": "5WTHQf1VRJYEpXtF3Cr2iG9HmsRZmEFif6zBDaMBXpqaL1QGQC2FTKwmpZpZ8F8fFAsA1bTCecidgB1Ds3E1TUbn",
  "key41": "3rjuXq2j7LxqHrysd4Vo8Dx8qpL3RwnL6YoKhxeAf77bkP4SSei8vbG1bZM8kt6NSWKY3ycqTgic8NizLo2wzmNh",
  "key42": "3qPa2REuG3tWRDwULoGwRZXF4nZsaKEFa79AziAt7boqhKs461669ZyLtsKTe2ExCYdzSPe8pjWZCrNxBnyV7xG7",
  "key43": "jtTEnU5ffLNiHVt9yiDUrH3zd9uKWPUDrpGAgKo7LkDe4NTLfgevmx9f4xSTdxnBMV1AwxpgeTA8pjM2WVXphkY",
  "key44": "2FeB26GumJazoffd9i9mcwAMBm8bnuM4xDR5Yo63zZJy4F4km2tA7La1fzCrits6rQRFiJ4rGjW2sBi97a89XPq4",
  "key45": "5vdFR7yLSR8bMGVUXJto7nxR5JJQGgMPSUAr8TH5VEGLfefJSAH532sZYNDhqru93fDo3KMGiBxw6FpGoUBB5ipt",
  "key46": "5wynDywLnj9Zixke6gRjcMtpw9QKsethyDmSEbM4P1cj8krFLtFKP5N9PH45nKzsuPU8mVdbXcZTgB9Xos8tiaNs"
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
