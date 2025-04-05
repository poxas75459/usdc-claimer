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
    "37MeUiDy3ab7Gc7k2vvQACuMS5qdd3pU22dkxA8tc6q6QeusE3eAaMfRBjSvt1CxNfQxj8Uhr66z5wPb4dte11oX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pEt9qWAPJXEWaBUReTVFzRKjCaLMVnXNbFoiRmtPB173N2VuiuEgYSFWdawT6yvnEYPXkeKgKP2LAuiATvVKfUs",
  "key1": "47EiPo8gz4rPo1Q5QtAcvLQ3xyV5frugiKGZhQRspDaiU7VEdfoVdeodU5AHpGEj51cxiMGjgg55Ppc4suLAw2H6",
  "key2": "99F4ry3ijdQy2rHrdNK4f5ytzAZk3BZZnJKeV77hcwdTRMisWo5ibXyWxJ9Zj5xpHFf4xCthfX34fuzScmA3XAC",
  "key3": "2xtYDscq3T1Wjpw2BnEFdTqDEatsfzeQRvu2bkhFVADgMmon4CtACBJryDHSPFcafvx3ckM6C2GuJSemPrbwrsCc",
  "key4": "24FKg2xVuAhwYLq4seXL7LnYFJbMLhW2vHqPXQ7nCQAv6kKCWSzXV143iU84SrKDcGBHCyh5CkCde6a4KQtnTBcU",
  "key5": "2bWaeRBPLegceSqACfUstdLa87bz3rdd99HhDvP4AHn6oSkCZDGFxiNw5HveiobZUz71GbAuVmsQQhvLyRJMw6u8",
  "key6": "58LB2dQxG3RDcC5PxdW7T4w2zBFgWkK9gQwa8pRk6V2J373L6kM9pJYi1WmyGxKn4oGFdHn3EpcAwapT24vavXFN",
  "key7": "5B1t7YVhNEvfxB1ykVX1TrHxXQm5sWUewrXoJZTqagwyorgdJ17wFXtxprsRRgAE1AFSsrNzre6nGBFmKr1Q9Svb",
  "key8": "3fSgdmRBVQtTqidVyni9s73kJE4jRSS2Z6MKg2xGyCX1xCX5VWv1hXNEhBGrqPYfrohziR8fCkcL9o2z33eWCQdB",
  "key9": "2xjK8oheyBfdjtz4BtGARRXYyLy4K7oY4d3ABjz1rrnfgkeJWfNfXrocrPMbmhrsdpvQVLig3fx6TN2onc5D6GwG",
  "key10": "57mw6CJDA3GwDVAk2B7RYutPQP9n5DupGtbsLzpFnXZyivmqnrvrWG8E77JuqR4dzyvCPXeGWcSnB5EpWeAnVxbo",
  "key11": "XZsE27KYjKRhG1sE4C1QWgPPGf1cPrt5aMhMszH8Hq5DY34JaXmR157wnJfneFCQ3ScTHvSiVsdvq4LjoYWw3ZW",
  "key12": "5ToyxMd7hB7n45tYFgTfwSFX8vfnVKdtyLVG1SPyNrKErg3zhsNgq3NRooG573EaJ4kTZ4xKGsq1LFVivs4ENJKC",
  "key13": "AyyFCFP6WMJPBqQzqmaf1MjatkvwUo8DAgMd4SaCxZZEyQ6FGZxkhRa8rdxbECrRwb4yP6WbzjcPa3dGVyK4huq",
  "key14": "3d9egaBtnWVZA8nyTyuLFqTcfHrxt3DtBjdDvgFHc8D3QnxAejjYXABZ1ZbURWcChCHJdj1VLTnMvaYLzszwta8h",
  "key15": "235GrJxJo53pNhsJWUcox1hVyDfffU2cC7wcoTChQeYjhT5styn5Q2BHEUPAeeo6Vy8YQLk4waes7v3NFseTyhU8",
  "key16": "3qtZ31QssH2QTrMbBruwVmLumSAeaqwmoZzf4oJscLoYZzijUbA7NxQCPfytGasee3aJmRbeBgFkuwN9z6JiQaTY",
  "key17": "5yruBoRmiy9masw3XxSvxsnmLdRKH3fC16JAKmJq5gtgEvi4brk1Er8wWkWBcfQEctYDk5yobQnUN1DcYUtqZEKD",
  "key18": "4wyPvuVDjPmgP8jgpSwPgKf1h65fRDdPnnVLkYd2CtRNgRonT87kir82yc2anF61YTw4HtzNknr6yNVCQDjV8BCZ",
  "key19": "2jreRHTZWCfgYynAmbCM37GhdivjYgVfsSYaXz6ryv8cRR1CYPBLLj2SEiFuzQ7AuSXCXFLEWoY6W65G6UVLVUSG",
  "key20": "2c4yfcBTeSVq2e8Ab2jG2dKyWtXfo2oYxsLuirxbHNG3J2Muq8d2HjRRLxK3F4AWdgyrk4r5tejENDqeouj1Bdh7",
  "key21": "4Xnodf71HdRJRrmiBDNNxKqZJZMANm3jZ25h1eb4HB5i478DkTvQBFckRBor4gdbQsiJciMY5XuQFQSfQvGPtVWj",
  "key22": "2y5T1QXst7o929iyoNZ3zXADr2GSdnWdoPV96EkxS77mFrHBXriNDrr9mq2QqFxeZBQzGDZhTdPZYHmqrXK6RVhp",
  "key23": "2rygxDKHcSxRp7qiq2yHKZ86Wgo5m1FD8MPY6N4takAZUtCXH1bsZZThSMXXB7b9jZsC5TdPZevVTaNo91FnfwBF",
  "key24": "2sunjh9X1KCJeExH3Wy5RVGZWLV2XBdUJGFoBLHJH2AZ16gWZK96YffBipAEkQNLM1V7SrZ6xck7yNmbnPsPhAbe",
  "key25": "3kDn2sCv3E6LzpzuTcHvkKEYDJjdufNYrwpbJWiJLrVpYCfwL7yQzbQLksKY1fhv1g4CXEQqHnragimv9zmuJV7s",
  "key26": "4F8c12XHVGvSN7PQpJbB1gqc7XvQK89B8aGnhtimPkbNqfL1DfJpDabkbxVc4CfxA1vgXDXicjZrwnHtoq3X7Dum",
  "key27": "22n8Z1kLXvqtCM2SteuDC5PEXYPjNjxM4izJ299cgp1AgRt5aP3nrEqar9nBnQ1kWhN3LCLcVW1vojwYW3Kpr9K7",
  "key28": "2ETfZjSSBqT1Pg7jNqoVoF6aNYKkzUFUE6yNp3YgXHuXkrJ3YbZaH5vrSxWvS3KQwtLNtkMSYUiK6uUVyZDube6r",
  "key29": "4uCN3ufuS714dCRrJASjaEoLnqD2mg6haNPbjpjwvLxifppNpV3gzv14fy8QNRHVQMyVx14FXL9szKUbjBJJ15cy",
  "key30": "4RuKCjp6c5X7mC92n6abXnVve87Gsvbyyff6tcKLTiEr3WZMmuwPheCpRZHMawu5CrLwGSwPuc8QntdZcVEUutQ9",
  "key31": "65h3rFBDdrJTbVvs4PWcio5MXcAourkw8kNrTuj7Pj2giXem9wYMQu6LNKM9eSBUW41y39165wBjsVcgz1eXRCJB"
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
