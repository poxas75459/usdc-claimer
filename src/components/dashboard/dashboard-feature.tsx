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
    "4Jr5ak1kWQPPHjZXyG5kD8om8Eci7Ncni32FGyBApYignEiccJhbL85j7Akt2WNJpmt9BYyb2GMLruLvyduH3NsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rw2VW3VHhAM7kuFT7nKMESjkTyKZZV8MyibafB97THm9QKb2M3uc8HN3YF55hwmxGF73U7nkjCUCrEXSqdARtK3",
  "key1": "5j6PP69M189Ce5kfHJTxWZ4kzoiBgck2PLUffoUSNYzeuPcqNcHHDDUtmCta8rJH7ncfbMWGuVGgtdJsvV6fvLan",
  "key2": "49zye3sppXtbftn1uY1V9KKSYs6sfbTBmDsEwEg9B1ShEaPRDJ7zhE9Ri7n1pLB4LziQSn8gjFqssppBbisPuye9",
  "key3": "5CLsWkBYP8z5dtrrAVKhSG1jEjHPcr4pp5jZafnjShmQEtUmhBjGTSSG6td2ctkUHe4rMdvjFonp88CGe5xngsao",
  "key4": "2SRs6JEE29hcFsLspNTEP4wwVpvH3k9S3C54CcirAuexjqJwBqNW3f9AVpKQrxst55cusFtWupLfMRFBw7Sq1fqv",
  "key5": "4DcA3fm6gXcsCbDNYvBUobvfvAH1VB4dK1QtMbFoGBKTjbUwXhK5h8SbgxSBqpGar4SURZJM2gs8xVjoWtVsom7Q",
  "key6": "4qXEAbAmBHiMnzw7ozy6r2qhQBE4T9gDWtxxRCnPx4XfSKhtuHNitDqk1FVnb9HaUuuhfU12YThz9qp7aBUECQUm",
  "key7": "7LkRs6EosYWkd7fFPETxGPx7DpVVsZL8p7U8S5byqysi6zpxywf9W2qA4XiefKckFrsETjQpjnX346GJrKA74Yc",
  "key8": "fLcoU8fkKdMQELstXjutQKmgYchMLiCpd6267erSDFjQuJ3apJ7AMWVYvjagNiWbNUFwbvcQLzawUMCiRyzpbLy",
  "key9": "5PArwa6SaQUatRq7XM8ovzMZP3PvbwsVJTQAc36aAxRiqv9Fw3MYWHumAGjFB2oiN77WqFS5QQ4YVXK5j2Abc46L",
  "key10": "3L9X8tLkXntGcmcAEzbqBonKkoSCnGgoJXZYQwjTt61C3Z98vCsjnSNfC89ZJySE77CqAELXMG2zXsQj1XJhdojD",
  "key11": "3NUZhEPPdsoArmT5DbvBpYa2iDmSbCGNieNRtJjxVCtDS2s6khzYf37pWtYuzuGW6irgXKsd4ocLULYhdC7bRi1V",
  "key12": "2F9MJ5oSWaif9fqGgaenAirBJMZzSfY3VrLirvAsYdq9poxXpyGvPoGaCwzv7cXDbrKVWLBkZVox9kB7RdUReGtQ",
  "key13": "AXUvgWeTVnezVzKEwMZdPsc9qUY2KzHKpbXLrrFLbW4D23cmAwXWpQEENFcDGrhAedQDjAY5rDRYLxfMMDseDm5",
  "key14": "32nFSzG11wAhAxKykVSreG5WRBuoohtXkF7TLXFAtcZHpqu4bGXmvHN8Q3kdhLDGrh9qPUJdeXP2TX9k995sRKVi",
  "key15": "2VybfC7RXHpsVowcKJn5eddin6jGDsMKk5skDuRvqPDpNHuD4Q6PT8o4s2iHwxfzUMi1UgpqewnMUW4uDgQvEXFA",
  "key16": "2xtiGWJaPnDBrhkDK65fFV9P267gXDyxZbe8uwF3BW5PsEEvuzeHsKCHqq2QReoMVXmhfpjsCvCLkXi475DU6J3u",
  "key17": "4nSocBznPnnHnYBopH7cgb2e9JtzLhdRFfVo5gwZ818KqgnZQX7q25iD73hZXpfTprmX4uWSvM1sZa2SYRsgoKyJ",
  "key18": "4MyWR7nZv3ZLTbsRs1TU5SfT4PJVuouFqgQmbnkSwTqe26VL8oChRRmPxsxPVBUSk7rujKBLADnapxK7aZSm6ax1",
  "key19": "3Quix13RxstZ39YDE8KNgAhNX7Ps4RuSLXZHJzpaqCu2cEunaeWywTEJZAZunLb7YseprRguapeTRMjwJih1kQiB",
  "key20": "VaZCCZXDka5qFSYKWn2tcag3ta7SbHKaEiCcMB8wkrAk7PRQtASB7C8bEVCGSusFtWnY7LsY4Hpx3wXRQTaXt8T",
  "key21": "3yzTLnN5pKKoNtUX1bhpEEwmPwcrs6iTJ7tqk2XCawBxopjzfP6MrPCm3ExiUcmJyCe4Uidd5C4nJj6Z8cx7Tz71",
  "key22": "4f55sYPg99RoK5dJynNrGU3qCg3YqGTeMuHXz1yDE5LswGSdRqUqKQoerP7UVSJR2Tw3jSr94WKuVxN6uVpmvgBV",
  "key23": "5jDhe4aQasgVMJvjzQx8xUi9u51af2bi6izaiCLsND82rv4PcH9y3nMMUuyhwpBbiR9ggFhUYGib9a1ANHaQWQVm",
  "key24": "5XeGreQFi18JFCGW5gpQbYomvRZRGoVVdiVxDpzyjL45Na5mkV8ZwwDNsvwcLPBMfUjaUFi3MhsEuD8r5DVjHqAj",
  "key25": "3apkmSLbBgLtixQ9dDLogKQJhYg6F39Tm6LL5qGhzRnX4eH4kQqc8faVUfBP4H47ZppfQ4V5aNsKFSLAJLV36iCp",
  "key26": "2yStRY2eQwih45Bnbzwj9aSNPRFTw6EV62TeJ9HiHryN8cMPhGUgvzZTzL1eDrYhSYCcWqX4m9kRFQZLFNbLDXQ2",
  "key27": "4HU2fSi6HVtd2NZ4kRSkATrxtEBdUyZc9DSSNjpccecnzVmnbwCyhXM5fCtq2qTNPsAq6g4voW1hTPGttZGSoE6p",
  "key28": "3KMjcY9gWw2ET1EMLAJi9YA4r3um8n7DHt5Kt4LE2v4xMrbG6kvX4RTvMvfyntBsk4rnsvV1TGCrzda2YXzDAiVb",
  "key29": "3n9o4Pv6FvmwwHAKd7HmGFaTZsccjmoCag3EMoEnsAw8q1KvR61DDhoNvnh6DziPFR7fWNUPtpUh44t9jSxWHj87",
  "key30": "4VNjUevJpdFTRssVZXGhM8q7vxLQWJpCmRJE6YR6MY2FFyxrWoQgCAjz5WHK1hgLVtJ8dbHPSSF8wdjyLaGaVPZL",
  "key31": "9MdtHuqisrYLsqHBxH48PXv5h4vnZ992QMvaRE4Q9VR25Mv7Kob4tRD66rsFxANEtu6Wob7tQc5PFTQiQ9L95p1",
  "key32": "TNiS8KUohBz1YkUvGo84wyBsGjAeUozzxLUcu9QsKBqykyY8TU9vuceMTSBLcQEBHiKsHJ2QYp8xSvjWda6u9ND",
  "key33": "29jWExXbTfAxBapXpXmY3jTcD1F8EdBGUtDbxUGuzf1pZLn87TVYTHkVgyLENzFxYb4r1x9soZ2BqaFBEuW8XR2C",
  "key34": "zWrWJMyJkRSUsqmgqGgpCP8BKjP72PVSW15hf7FctMrxvgfhVLtXTYymA1FyKYc5EyjNPV1F79E2K8mjBwu6zmR",
  "key35": "65FuVHuys4ELdQB4DXYiNKCRSpNkKL3Xy5yGy2yfFDfPCnqS9uhjwXF8EfzkNTZZpoDE4fMESrt71TL1YZEHin7x",
  "key36": "5gtD5AwqaK1he1q41dwZmU9r2cv2UW4a37DJ3JBqDfvTa7e54zLygWK7svhywQFpcss5KbSEPrkhAMtW9aLKcVmi",
  "key37": "STc4ZErhPEhHTYxoRCsNFTz5MHDi54DHKoD1D5s7C8q3eXzjzTWCBNZMNQy1vf8Am5Qj9NJ41sNJdYtpVtyCJ2x",
  "key38": "4nwqBYdkaRhiYeX6gj3tWvADf4nRaCNHxqHzZ5XoAVNQy1BuYcdfKrx2s9vq3DemjHeckuV9yjVwhcW3jwcKPuCQ"
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
