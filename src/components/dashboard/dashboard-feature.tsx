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
    "4gByJLoJpJ681T8zCYvqVNjnsgaKrMd5im6PSTaN34hUgL4a5wtfJcWwXhb84aoYjZURakaM5BZaqsL66KgUw7DZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vMksBNUGJyLKSjZu8RWoCZbWBoacH742vyiMpznkAL7JiqrzyMdrwrBSujCPEmnDS1R3FQEWt3vMJeVA8TDrzDX",
  "key1": "47Tto6QxPbuVqd64KgEzrYBmmxr2JwngX94Hpk2x6rfrgdEhnM4rpmxKfcFgEhVEX8eh5rcG5w4E2tbNptfCtVoE",
  "key2": "4Lvehoj6SFp244n2RJrn6A7ghuoTrME81QH4Cex4me9RitfNeCuFz6nCuCacbPjnTX3Yadp2Ui738kFeeBDWewkG",
  "key3": "5n1ArumvzryikKQEBTupJjteFGgcRdvjFo2RyNyVVitbBnvtk9K4UatYUpsvTgjBvYCScZ2Nr7nH5ZeoDv1E5nxB",
  "key4": "4JdXJL1ApjK2ARDBYi8hcGvVHWDt7yLf4zab7H2d6bDMYoM8g8rXLY5jSJBonpwgWMSQSJKnP4KHGNYYTQ9MVGV3",
  "key5": "2LZ7jdyzJBXq84P3ALtyVNRUV9DcLsr1pF8D64UntC8VdfhNc6RxaxSABN3uY6Zt3dY91PgHXXVZJv17UwjnFcHH",
  "key6": "D4D5tCAatf7bpxcBo8HhrWRTVgQ9VsPCX9ZRDqw6NSLax1wP1kbgRosBVcQRUsuAJer15hdYFCHQWxLAUBUK4J6",
  "key7": "5pc52US6q2QokJuVn39mq1L9iGbJpf2emogKWXzFk2xegcSnGZYcFwgtMAjkyM4KPGysHGbTeKxEqidHnK38uk75",
  "key8": "x92UjggoDjigB21qveW7ejLYCpZGPF5B7mqi8TvFgsu2Hk2btcZkmkZurHFQFB7LZQPzzEsim7HqpEzrWMWuGiM",
  "key9": "5uq9BB5zuvzQFpXTTB8jcRA2Bm9CrrRm9MykBQPUozhrEytjnfr7SEqzecE1beT3oLSZ4pPYLFUGQ3uaKHJJgVyk",
  "key10": "4e1HweijT3RYyAhJ5MuTTLrRFzBcetvpAShseRg256VpiKoTVHV4h1S7dmYUgJfdDGtpKJ3D3DxdUsYN9KNqU1Uw",
  "key11": "5Nqs98y28haheezfV8YXBwbjGFemmA75yGEGVLH9EKGsPU8PwnEW1Jozk2yRksuvYyBbHatct1sgNWE5T8xkn7KH",
  "key12": "25ZA86JNAXLEantke11EwYT9ewW4YjvAvnFTbgF2kMETabGcxcJjxy2DTxsN9dzLWuDFjEcLERdBjao58bdZuJkp",
  "key13": "KrLGsDSXWKJMQdSppByaG5LyNBsutLCjbAK45QbRDapZDfKeoHSnwfuzVC4VP9tGnFFMwSQatSsxCVcbqdh7tYd",
  "key14": "3K5oWWxHnjQ8UHnXgRNJGGdgdqsDNHRuqyFNX2FVLcqmyp7vxbZCgAc1FrRXGM3LzhHrzEyzPcgX6EoAwTGiFF72",
  "key15": "ZR2SVQexsthAwZLkb4GjUopjU1DZuezmo7NAzvUszeyav3fLne6mChHVUY7kGp89bxox9JievYueMFQMZFGgUs8",
  "key16": "BrTc9GAtcbt5XJZfCs1r3RfW7F5SVSyA6erDCZ8ycF7WuesiS4FQ8jbqEMaGZWQd5L1GFaRzncoTBuhzF1cMYZ8",
  "key17": "DK6mFF3Bu4SUBacqZiLgs8HafwRRLuEjyu5qd8RxGZ9UHPwhbZ8ThpYbUd6gQYJzQkMXescJ7U66bAYdwK67iSC",
  "key18": "3bzp3q7o9WMAT4Gxb7P8cvijQjt8C1Tci7b4mrcapDWfJihjwrPSK4PsyeRcgp8USFcKvTm6iRm4QqLDJiSkzWur",
  "key19": "4D3jSHvid2S7qvQrcTaKMhYYHQzS61ZCDabHonzSgB57xxayyJX1XRS9rtn8hZWcnM7seuv6nxWP8p6UpPpsqGHm",
  "key20": "4uL4E2bvjobtQ2tZJbcv55S9QXvsw5naYS5GqCv9tUPqdvW6vKRwRByXWEFALAEA2gg4sqFFJd2rJ8pcPanWm9So",
  "key21": "EQ91krV9c9izXDenSnggS741fvR7a53y8A7EXfpVxJ6NzBSJY9NcXYXd3sMSKgMjTLqdSiALeSAiutzUfntuPZV",
  "key22": "4rQBHrVvKCNhjVxD8T2CRhKMVNinm9vAeim36kfbaeaKpngA9n1hYRxnU7VZ4Kah52qyeGeJr3MR5imitwF5wBao",
  "key23": "4X83kccUHbqiVxocPVBG6qpfYhkNNheEKWosprnNPwkSpYUTUtier4k4cviNqr8AzGPNbxXSgz5tEwt7KDXJpxh7",
  "key24": "4cr7k5jyRon4w4p4hJp1DcQ6rHgngms59LcuakvcuxEGghVop45TCJgWgFxYAwspg6Ltb5dayetwwmYKsUEDcWWS",
  "key25": "3KMedxMMVtkpFD2VHraxQWSJygx4cbzAR9FYzbYfkDnTTJhyzRRFkre87GfEnmr4Bs2LQtzJZZa9HCHDqrGaQRpm",
  "key26": "4cSQEmQjebFURSPuZFj2zZdJwkv9rPk5jJXVsza4k9uZzVVfoMDcDEJYX5vyf2LFapeQ1oFXLHCVA5kqFAsVyJ1o",
  "key27": "3BsCaR2AJMm6MPihQhd68JFMnykYWXqd4rkezmGerdxmnEJxB77Z4qYE1CN2izUGu4wcqfxLiZ35dEe7d3aYMLHt",
  "key28": "4CTXEiaz2WVZpoXHB6N7ZDrfUYYxxWS5WigKjdnMFQf57KFUzpgTLfvh7JZMfnM8tn1T9oYPWEMQ8a5m3svGuB1",
  "key29": "5HNZR6W5YuhVSiqMbs5mffuFPEiZGtKYVRAevt4WZXs3vcik7rusgnCoDgtERQaKDwNDhAVb3gXWWm1KK1sETAyw",
  "key30": "52E1KmjPWQnAjSqCqGGTbe5muHrNgWqJe2KcfZmvHmwzdXeyj4w87gsha1D9cvoC6BiwjEvZ1Qo3vFZ7MqSX9Gd4",
  "key31": "esn2fNtv2rvkavixUYM7wHfeQKLCuBTzeeHqM96nr5sFj1wfLTb9jLF4X4WYTXeYr6W1DrvV4n41BgtDQtnS2er",
  "key32": "3o9DWDRa5sCM6kJkwsGKTXmRPNbPyB2Hzgwz3hX2o916oUGiDp942RZkUgQE3HaQj34wNni6fzb3TSMnfpppNnMA",
  "key33": "K7vHcrmDnPTR81fE5H93gbC8mowq8DXg8zKDLM2uKGNZ1DsssHyMQmqnCPnn3TKb3H56eq6vAB4p4QCETw4BJcw",
  "key34": "2N2cgXDmyfRw6DHoxw8MU4LHrP1sYszVvpdmpGLAvQ6nL3hWX9VQTfKWNSyK5CPmoYwAfGYsfV1jBDTkDkSR244u",
  "key35": "2xu9YssoJa9WQ16rMZYv4kbDLwnmQftPjyYHGmNVRQoaMrE9UJoa3ogvP58HSnmGpJpDBpUMzrrFyBKXEN3nAPcD"
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
