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
    "5StxQNsxxeTeicnN6pwfduiwAy7kidb5MEWe5QXqHaZLxr89MQtyDGLcDgrtN74pYLcQsXSzA1p2Jhu3Cg7H48SJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55cvgwgHe8sjBfLX9AprocQcG2HSAeT7SC2zGkymwNkJEDLAPB8TLTs7p4A72zAgGr5tGCMkT1HHjGCJicpWnxS",
  "key1": "4t1o3UjhjaADxnA1aQoAN3GaH2jVQHFitqZyMTdzig9grkenQKhjVHobkGDBeVBox5FQFbzQb9YTrw373D3e1GQE",
  "key2": "qYo9tFdV2MRCmgKzA2JwEv7Z7TF9x8weMNAfugGhr86WEP2Go4tkKSSp7FGxT5zhsqdGMp3HQsaS2QMeegM6WU4",
  "key3": "57G2fLUfhmN8QVzz9cmww3UD2T9AxnJboXgFEosZ41H7k1q15qqt9fpKkM5Kk3oFL17enPTiQRuzFKdMETjoXKJg",
  "key4": "2Yd8ceXTyxwQSV7cioXkSrvoR4B8fEwX2KMjK3nsKafevMUpCu5qsdsUVWNKBkahPczce99iQxUjSRSnyvKXoaUk",
  "key5": "4A2NrHZUdDWBL1AAxn3YsTcBQdVEwqL1MSjCPk5goT8gxH3czLXpzUJt9rabGwaYRrXBk23yFRtcxu6DxJC2KM87",
  "key6": "4HJxbbejmQsQZHuqJeQQE5XqM5g2HZMFZoQfnb8e4KS7zFyWDBJP7R13TNiGvBoYPui7Bg1KLSFMMpEiibAzFLyW",
  "key7": "45eu2az4bSRrZCvF2z6g6DGv6nVkfAi3FHdJMehqvbj1NiUSv49Mr8SobikRQv9ESQGJeUwnNc419wpBASU6A8Wh",
  "key8": "2f4WbJt6ui8bYgNbdGBbRLTgpFCXzYXFbz12it1Hqb9A3GtmHExmuQm3ZQvszAaM23Xpcj8cyHdxbY3XsxbSeqoe",
  "key9": "58hpJZTqctWvooFRaGfRtEHjASjU9P2WkVsRqUMVcVQW9tMrbqsokLhTUpiEVT5wpLouPcYPXWAAxAiDyheaAyvp",
  "key10": "2oY9DWAo9b6KzWYrG6D7jqafKRgacmXqMmzWP3Ev8roiABhRkvj1qs2YK7taiM8A6qV8yuGLA3y7wYkypa5iAgG1",
  "key11": "353g4chCHEA4hsuqwKYXU5LuNJYSJry2KUooFxqXua5VvT7jCJFacv1epAquSfoJN3mhEmRNvYPMm59Bs636WW77",
  "key12": "46NFrQvqMXsoMW3gWAvPs6izTknTJveJYzG3nioLbKocGqVbQuBosrNdh4D27pZoUV36oGQah9FeiLuQ7jJtYcBn",
  "key13": "4N56kSMSVi15XNQUdHxgSjo81XPgZN54FFqWknrMXfBQfA4pwDmELH8tmwgpF3RRDCGPYpYcvpfN3nMGXKbAh8G2",
  "key14": "2389EhD5KBDK4mxTR6thLk9h2knWR8sm1dt8B5UMr5PzooPdBYMBT5a2iQygmX2FZPSgFVfcxEZw2ydeLCBq51jQ",
  "key15": "3HHtW4Ka6EnwizV5jMsdPCe9xsusVq3e5X5CkAe1N8Py1iNbsVSAwFjVpNNrZiUKtvUBK3SFtb4Ej5bCStAnEtky",
  "key16": "397Xcn6Nc6CbawkgC6f19YZE3iEVgoJQhMXHiRLKcmoJr8jyUVDT37WnTLJiaUQ4VWa6g7ettgEsB4U91Lq924EA",
  "key17": "2zEATMXegdqmr4ewnCumkpUNvDXJLc7GdKd93H54PdcnQkDbuQtGttLqmanHHP51XH5yGBMef1UU1sgX5wNoTsof",
  "key18": "5rDiYjwN3S3cUYu148NUE85dXJmqjzaadD4RDNxKXeyANvDbcvNUNJ1cidd7w6QH1hKNDtnReVzCCkuF2aRPuso3",
  "key19": "3qJcqTCT8oSLTZxhE2yFqFEx3zrAsgU2woyfcKMHcueMkQNBBfyzjKtStMTQnsvdPTrfvNDxsEWWVtvZRdsBeXXT",
  "key20": "26rApNCXGoy4fTn1ydU7JQkBGC3g6E5TQkmj1TyR3CJgAsdbUuKTDvKVRzNsBZJJoRV2twZyfUfYVxdkbaiYozjU",
  "key21": "3hiWxrgeJSzuWrTDsQAUbcyjwijj7gQHCND6kKGYfmjGeYdmofsQsZMJujxiqEDzo9a9iqVuUZtUq7iPGnhcRdSo",
  "key22": "4Eo95bZHgfa5TQJAtGxRRz8PkHCj3SjEeJbshKmCqDxN4ZGADrT3cQVbtU4tvFByDDYqUDdmt4NfwjVAF3NfALG4",
  "key23": "2c3o9S2tEnJBio2fA7oFr5dsyWrAfVHmMXW2j8U7fY9W5SbCbY7MhKhoQKiNLbLoGJRvN4DNds8nhEcMuvLmKRfY",
  "key24": "wmzuQQJVBWNND3Lnd4XBCVnzyWvK8q8Ga66DSb8G641fquroy8N6hywogN2GcpTV9WfKjggAk43m2gbFPekKt9F",
  "key25": "2xqL6wuq43uJXrc7CnPZvm5tk9eEWRj4LJezpJonUxH4Pkg8fjxZ86pq1SsYpBTtAWDh6759dwadtBHeeHShDVzD",
  "key26": "Aa1u7gCtCSNEJuqiz4ppQQPULXVH7mAi9f6gd3M963TA79EdG3nLpYZvRB5Tnu4r8p2T4QCdFzKds23pnrKuP7c",
  "key27": "5royBwXDfKqNsTmWxFFLNwQqFKBBNTT4Ufx542Ngd8n4qZsj2QkGs22S63coN3D2ywoYDJvJvkkS9xTwW1NFKtH8",
  "key28": "4m5kvBSmMcMeNxv2y9csCqE7SpCJir7LHCGhf79Z1H2CErGRjX6en739xbFqqH1nVMrhkJsGQtB1yPRfV5HESNR2",
  "key29": "535EcyTBEpfzCNy7M5ZNMqo45pjTuF4K8txkDd3cPDmHepFoT6frXBkuKnUfTw9ghpkRzzCFQJ33VMaxmBFTBWNg",
  "key30": "XL8R2bKdMhrKwvzAfPySCU6CcYLwysFdbcaXmA2cAPBKwbftnSckeuxoXBkkN8CcUx3mNac6Hua2zdptRwPr6so",
  "key31": "Z1Jgd3cctiF1Uifp79U5Kb26kDCkeofneLCRM4CRaPUrANqnStPkKVh1ocDPA7rY7PJ1umdfCkSmcY6yoVMGpCD"
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
