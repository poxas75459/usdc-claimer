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
    "NLvnTFq2q69uxJakpqyjqcw3wHdLa9EAap6DvXaWoHd2Xx4BMSzpLwdeGfiWEAfU6hRgp2fUhB367yehiL8oqSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57B9cZBCRkTVNpc2WuxvZkbwbNFwkckTpaszDk6D2r4SG66XKvNCJsDS6uEtxN1qC8fVPR6PvNG7jUsWCc8Uu5uU",
  "key1": "4pbP8wRLuJyke74xXt8n9Exw6RWq7Esc7ecFtcVKmznkNtfMmaQJ5Hfpaj2WAfJcjuzKt7KiurQf3UXeXrHJGDwB",
  "key2": "5mHEwNtdREY5dGq751ybe6CMrsRFMzpeJFGYq1k9MxqJhwqpUTuw5RnY1tM8wnWskvGJVfxH6yRF9khPvnnVXeXF",
  "key3": "4CmKeudWSnucNgPZWGCKxLzGrd7jiMyzY83RAv1Thm5NYs5nGe4mKgrSYZr9eAZwR1rJnABk9w57XwUsHxZP3keb",
  "key4": "21RR6ZVZdHLwyEiWmZcGVfNKitTpuuuH795AuWJrLyCvc83ufu7KozHGtuRRvgcfjHQfL6m49VFShU1r77XogJaC",
  "key5": "7BxxcoNXxiqVUvaeiKJce7MVPTkefduJzSM18zSSixP3uGVbUCxEwDEt8BVyk8VznVocRFBKdgpPCiTgPE6vpHi",
  "key6": "3BGW8wNqhKWRa7KvGDHvBZH4HSaAX1cT7JTkratFJnjb9yrGBe8yzNsZ1rxgSmHsYHX9km51fizV5jhR6WPN46qL",
  "key7": "38VyMfsdKsriebrMTXXXShjUxZwknF4YuGfN7bFkwBNUJbxCFVQSzrCzgMBZhhUqzWhYrn5mZ5cZtNjtNUfjwLKf",
  "key8": "3yng1dKW8rjDnXHe3UBghUtvAUJAaz5zCRJRsDXhQJNyjRf4JwMVruqpX964rvnhVS9qLzMydtwJDrb2HE7GfGqa",
  "key9": "5CBVFDNvovtcDGwtKCuFbF8k66YoxgpZmuKEFoR2MTJ4bZqcKxRcN1k7ypNBp5JpxZyXbn8BE9TtVzKFXkQyyKnm",
  "key10": "5VrcAZGnTeHGj2h1YU25KR5LvHpMrKdwJVe1JXtx4xiAYotVotn4Whx2Fj3xioAL3CQ5axMzETQ2VpdS1nNafvKC",
  "key11": "YdhK5bnA3SFfkro7ZpuPqA9bzyJKBicUJgs1rqjFVDJ5DkeUgyuMyB4xVD42JYhA89HQad3dV7zMQUhTdf2nGkX",
  "key12": "4AoSynVtnh2HqJiJvWF5Na6fHgow2h6ep33FooWnaGKueAfHxrKLx5fgPXgMzUS27Quam9V1PXUKL8VF6qv4Fan5",
  "key13": "3gwZipoYsFbcuPPNg91ybhL7h2AgRidfqvFbaNNwLnxwCid2oWmVbCp72CcibRAy3vauUANumNFkE4gSyqGbiXdU",
  "key14": "58injVwBoWacV3xNPMundYxsthf6ogcmgCDYwaiDbJSwNB8qHZCU9AQeDJ65nrSQ81T36t1c8VFQvUm3D7PkJsvm",
  "key15": "4eXPEzMjwtc1BzEJzJvhVCi6gwCg6Y92uEMU66qx4adTP7a5rZBHwBLP26LiLtv8veF4zHY7iZfnxPepa6kdJqfk",
  "key16": "2ktT24LzLp8QCxmaJgarsyu1jjbVthN61L6oYtNA77qfTSXot3Lt2Lfx5KCyAniPegnxQTK3vfFUpKkRDC7UiTSj",
  "key17": "4ZcARkvYYkvXvuALygiJCZKtbiV32cqjud8FVqQQx4ugPpuhE3CJU29udbGcmDwCM5PoWDwVnv4nAtZJor78G7WP",
  "key18": "2HHZWVgoeYRb28mB9aNTzKXxgE2RWbdVPadjj8KPvCumfPMPfNtt76ju9smnoECfyu6kYAkFiTHaoKkwVqD9Dueu",
  "key19": "4STNQ37nbtYfdPnzacu2tS28RQo57gGk1h1LCiEc4YDQRt4JLKhVfdPW7mb6DpPrxsdaEScx7xi4MjsUeGKD5Qrc",
  "key20": "3yiN2E8zPr52Ru7KkFxq8bGiLiuajwULs9NeNQn4nJcyRfz1ZbBjCHiqMj1dgu2vFc6odaLgj5KZeSePTvrVz3of",
  "key21": "5UtQYX3rXeZ4c9TUs9oiXnxArN1QC2oh2gFGXfMc4Laey88SKQBcxMEKuvtqkPhKdohUJsSfVbnKMKGwtHud1P8v",
  "key22": "GTfJkUYwBDhqum83FVjJvUnkcdeZ7FQTy5RdTAYed83yJvGcJKrQmp2hjsK6U7owR4wYbkoHD7tYBUZvTpzixoL",
  "key23": "YN1RLWCSZsmpsRZujufUEmARL4S2rQujNdYU1iGCpJ4HMDUSiByQqzc131Q2HYRiW5LjuyjMNtTNXpoiSGc2tN4",
  "key24": "23xj1JRnGCmgz86TLBgYDqYZfCP7Z7LaLFw9FMo3dmr7S89JxXQt17BMqNdAzZcTJzqYfP5gPt297HxiU2Y6LgF2",
  "key25": "25DHN6GUTBfzvUzCWGfPKbBDShP1Xim73fpwXeFXLUM31kYqcvESSadU1JHAYBLK8qYYhpj3yE7gy7juDCEurzLw",
  "key26": "2wMs63LMsymHrrpVxQbymP2dmsiaRuvraEFMFR9yLigSXW4coiW96qDi6XYJ6LstdbXCn9chBEZWBfrjNVYrMnTc",
  "key27": "2jsfLNd6Y1SZZ1DLcxgxerbekb4sT3xKQ7wjLJe8CLMfGkvu3UPkADivUBPeVwpwaSkwiRsQVNmZRoN39PXFgiBy",
  "key28": "o4ZTtPAHEbyLicGEY3KobQgQrbHbwnS8utwSPDdoTrgcFhf3PAgRLZ8SeDaQUuHyQnrYpJD2SvUwUZ5CKmXD6EE",
  "key29": "27NbCn6uBtjCbjnKM5jU9KmKBHm33d7NUxVYYTEE45AJeamyakrEWwSborhPJG1UdknShu12rPMzbvG28J7DEEx7",
  "key30": "2SWzM7KbQWAHCeRCCwihCdzsAc8U8TYPyN5LZ43uELCAsWPfWpNWmg81T3hFQFwGJwoVPMQfRoBYjsELwBkXwz93",
  "key31": "4RpjfHfqSAu9HS2HjY3EbFpuXJ1nBtx4KPt44vpMa7dMMWBPZ6ZUTR7kiiz9kyC3xRGppRFgZRnmKoHbmDdcW1Qg",
  "key32": "2U8uQe4UddATmgaxzNvkyRq9RgSrAfUTch4EWuiAh94x9LM1FPUWMqh3rApJxT6DRHMv5LHmmkaQC9qhci86LyDF",
  "key33": "Ri13W91686bjoH6XiQqLXB1S62MzRXB14BY9tBkRyPhVWxvzbyTENgQweXZbAAjEe8VgfpvsVH7L4qpXsuxoD8C",
  "key34": "em4d2sto52LB75WXBn5PfXxW9HUDjgGww5HhhtPfg94NKReysPrxy5xm5tjVBrmzziW4DvATsDrFATqFxzQ15dC",
  "key35": "2vCwBVKBFTR7v8XKLD98KfPbghx4Y2UDLwmoPrkKJZzZDJrGYaPM1NnnAHBKqcTi56DGaKxNjKoiMp2HwM2b1xUC",
  "key36": "4G5RRQD8jU15GgeNh2giEAPTp5CYtJ9FW6cRF36mYCCuug3vMJzjPPd3YP9a7k8NiMDMupQPjhvmrqtF1zmL7Z7q",
  "key37": "3Z6cRteuPs3h7hnzh3b4qDUeHsLgYU4gYat6g5baxwRA46K7dgeYLdDuBYiadHXtpPAMcLLdFLsodbh8LLbRxosM",
  "key38": "32B3vSd7tV2JNcfVQBct5MVXDNUWfdqN3Sh269ntPEBHK3ayd2mqzuTfTJYogah3KFotJbYVFfUjy6JQ6FP3NpkB",
  "key39": "LRuw7zZzhzkxWAkh4N2ApA962woJxQWKapWMhfRB9u2EMdBAVpARDBqeukWMRPHDqL3us5GNxzMYjdMV9AwLA2B",
  "key40": "51DgMGSzhaGWGCirQxjdDkShpV394ShzdQtBnSL2Wiu3DrHPoi3LYi8XGkHeZ1Me9dUc6zSrgd3B8jaBckxAQmdh",
  "key41": "2VS99cANdKiFF44uWrSG8YvF4Th7qE9uZCj28TJCbXtjQ9FfiZbDfQYrkCxrNvAvPha3zZNhprrQz62NCF2noyVd",
  "key42": "5hQjhabskPeVFyV1GZmuzqmS1vnEdbmS4Jdj92fsPeCWXyHeG6mLRnnSik1efpCY54kj3zgGA2cELfggimDs5RGX",
  "key43": "5NAG2zUKn1mL7TWK9RhnNCcVwpc7TdDaUDHMdsf293ckNuScUHASZHwNTyQ8QWMnoHyAH7EB1XWS2pXZZ5xq1iVc",
  "key44": "28D8WhPMYnwN5vCnkH86aCzfmVaYaFX1LBKhvaD8fX958LWSTimcG3Kob6ZaPDu5YR62Tvor4wsaBDfB8SKUiw23",
  "key45": "4Ah9pwuQoCTUVdzVr9XCtSYrB4U21wdWMVr1pZreq7u12RCCgA85Ln1ww7d23PK1gbDUKs8kAJgbVFXaPaHA3jYy",
  "key46": "SJ5fmXRCbrJ15iDM55Cp5YCcG3zgNP8Ev1HjTrKmzjLtERMHuuDrjKA96BEoCs1UvwoSoE3PmRAT9HFg4Q6Jzg8",
  "key47": "3FGNeWuRrZuN4zEemTCn1fGb9XbEC7FpAWU8CBuscpwxhAYsSBCBKBn5wmj6sT2nDBSLnxwcdBA9CzgbcpbYzkzK",
  "key48": "4hT646DgWm481mRXtcNw7q7rX3A9gqRvsqG2yFJFsATjdaTCu2DTSVRVHNnqgVbEGJB9TGGRuvdtgRn56XEM9E3h"
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
