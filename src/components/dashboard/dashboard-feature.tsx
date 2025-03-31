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
    "4z8JNL3uSj7MyrCdXCLC5o3itAhxEhZtgZNsQDBzg17GrpfRDsv3mSivStbQdeqabPFtGFBWua2gLuGCT5Qpb4rQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GoAtBTmWd3Hja79zzPUvBJyAppmyNYaHrPHcvYdMLLNEsDdDE9BnpzD6EgdRCrvJLtD2uWAc2AC1A9MHyzfvsg9",
  "key1": "4WfX44k8QkbRuTWzBndwAS7tkn296hrRTzaYn9ZEkuY6xpwUCTotELjESTkze6tUrE6pTrh5XG2Kq1aYjA4vjpqC",
  "key2": "5XnYGuuZAwavFqouCtjCQzSon98ozS1DZybZHmaeWU8XxUkLR3i3EwxJh4JQbf6gQFuAUkfhmaeJynLU5aZ6tM1f",
  "key3": "2oVQgSK6CCHaa6EicDFmwmaM8xiXSrxxjKcF9YvSTJzFp5133Ank5XLvWQNCevA2dRarAnyAn4GUVS84uay6r6U8",
  "key4": "2UwhgSgcAFvMGHbujLwwD5DHN3ppgrzvXxDG1jQVonWF1JLYewBbRVGp35L7AGsYvHWbnoAdAv9G9shggbU6RSdK",
  "key5": "1jjnFw5Kn5MZXDb6MQv7hjAeTywQGzGEWzBWtDkwZJAEhvngp2SBADM49tstgSKJCN3acUDtuSDGv8os92kWetj",
  "key6": "5vBMcNfpHCkQPLToo3PeeWGB6ou3X6uDADpr6rRmbrKjHQWgdpaYSuu5t83kAFDJAJTBC7kAkz3vfGJaRv8SQQ95",
  "key7": "5SfrVvqYkUhAKMkEgvLhUfuaRgZ78a9LpXbNTsfAFne1BDHKtxr2Fugwb8aZrPbjfJtaBXqLQHwC1GkFCz9XCHLf",
  "key8": "3e3oqan9dRVbRokNXXCjKRiBui5him45pjKrqX6nst3jRj6HVAwsfwCa3ikjRutyhhUNrU7sdRkQboAngYy3i72R",
  "key9": "4zJzrQwc6WkCZBK4xLzfH6wVXqnLJpqeeJg5gsJud7KjegnYfSLx9e7SAZYyfWztaUdbySjjdaBPhLi52dS39Jny",
  "key10": "4FTRiQkNiTWNCbQ2dZrqaYMCkrrnauyH24nUWvGXhieXndVBJHfdA5U6oG7L2j72uYyx66FbgbrZ5jdSDiFseAuu",
  "key11": "4Q5PPxangV8qCHK33ZUEVHtgdKuKP8RfXcA3wvTiGGqcC28Qjb2xvcCEjS2SqL6GHyLqFH6owt8JvYnSv2CavhQT",
  "key12": "5QxFz7ALFgsiKEBicgX71aoeFfPL5fg6CfNzNXXBuACC2r98koiytCdkaA1gxhdKKZLtPF7BbQZdXKegXbfqWPop",
  "key13": "28U9nWnxnJtE435d963GNEiq1BEgSmRvFag8m55r2GsVhNkizvK19HKmcz7gZhjNhCa5EQw2yiM4YjE1WWyv1fJx",
  "key14": "pVVdfGYj7v9ktudrAg5BwGDZr8GChEEW4jSf1sxQsf1Uy98u7EJrShabdrgMPfyMpC4kMEDPfre9Hj2VZuxfTPk",
  "key15": "4XXGEqp9EdKviBg5BRH342NW53bNdfLzJdaBJuGoJ67FnU2H8CZdhRWj664aLE3ydCv29tZPQH7yPcu9W2LZRrQJ",
  "key16": "4X73WFxGiDgvPBfWHTZpipbLRkK44xQQc2giHJ9xeCf9RNGvD63kuwKbAJXwx1Geu3g4FkVCBJ4S49vgswWiU97c",
  "key17": "4bPJHM68Viok3zkE9D5Bk75oPm4SnoB1THLu3u8rAUQy7s79UoUQMKpsxzrGvNSNcNxMjemj7Q3qP8jBcYmzJBiq",
  "key18": "5soGr7in4KRVn6VqG1X647bMNUQv9qthvSnpVBtDRyGTM2WovVsk1DeJ9XQ5AJNxyvnugeVChNfsjqmqAP1Eoe55",
  "key19": "2YzbU6sYs7bcKu5AuC7XuPruadRZKtj7ivu1uqwYvfhrDDpLZGKy4QvA5QrPCrNWKXZ4ngb7JEBA3VNjGWmYCT9G",
  "key20": "5M3UCB7V9dWusiLMRSDR7eLQNNvoR9ZWVcsn4yeZFeQmgWe3i3cBXDrpAuu1UnJHML4HjmrmKd5uTU6BmvbdUhCF",
  "key21": "25LtKtRv23HtPFeesFVtnFVPUuTmwt8VrpMb24KHrTVkrYNKJkLgT5hTe75B39bVudsk9ujUDXB7a9cuzUMheQpC",
  "key22": "35ABGHTSisGtmXeL3yURHuhhuzxBpBpNT1D83SbQwkPdLzAbB7x4m49HRxQRUdcJMQ645G7Dc82fX4jknaMXiLCX",
  "key23": "2vtfW332meBYAdVrWwFX3mpppDtEDxTHKTDuuGbB6Tti2wzWfzUaeCh5GS2yEDMs2LzPB2QVc1PBs3kjnnPTcxb7",
  "key24": "5NP6DwqC4wp7A3T4EAjuvwfCLaPpBmHaTKo3NdmRn4BQAWLHuXZsW4WCzS59imyhHvCKLSheDbB6u3P5BvuvDqeb",
  "key25": "3FFE9hTw6t97zVAyfwXVhm11h4p9cHxq1rf8G2yfaNHHxDsQyM91fYi7zHJQahFUhp4AUMJQdEvDVR2LaAtpmo1P",
  "key26": "2Nokey28ujca5BD7RzcbKimG9aAmGGXtiS1Nus3JtLs1e1jRFE7iw2bTRCCAkiHM6DikYndxf7YXbUKZhNapFcD1",
  "key27": "28f42MuKPYyScyYjEiMiqchK3e3Jd6NmsskKf1qeMWTpuuzMPQHvmWiiKoSEPAw4c9ufjETF7T9rxtk2tfKhDs2A",
  "key28": "mg1726W4JJkueZrC4A8qV6KRd4qyTaKH1Lw7mNVFsis7DChgEdEo5cqfdJKRs914deM9o4enb2VDf7TUaHgaTKJ",
  "key29": "3QpQVkMwUKNW3LqpesAapwCrfKFzMRb2kaFJmEsRur4AL7U5g3S3cXQcuGs6prAfmmS2nDhVAKRNn4Lb1FE1WRn5",
  "key30": "2JP4FwP9X2wp6JrUEQ7nZvmCuWH1Ax8p4JXSSxvaQ6XD6SLU3dGQbLM9VevVJBWspynNeSt5QpzxoZSajTecfBUF",
  "key31": "3kjxAwMKUrixkdUoR4aH3QmqHkhHobcMZoevyi1SBxJYMUqe1GT2s18RPexjZJU7szpXJi8KwyQ5GJmx18CRznzV",
  "key32": "24L4vGsTL8rvycP7cG71GvxNnuuUZYNkcLmWuyv5deDCAkA93Y3FR5UpizW5RvVW7vKdb25fsYVnxKH83riBvP6X",
  "key33": "37JxRpdsZX3okABL5MRtjLfQC3otZZrXedjbtyKUqRHY24eKX8X5daR6stB3QwYvFJdaj6Wfs9a8P5WbFrGze1N8",
  "key34": "4feRJBAy7A4Hss5QdUX3oWRM9qq2yD8xvGi52ZMf7vjF4ZRovW3rdd6xLFQz7xJeUWCbmuyCAavLECgZrTeZTGPr",
  "key35": "HTAB9pDYH7FbcGcpidYku5A2Bz4mP2jfRtxBaecndCmDoS8VfD2AmpTnR1moMmjvhSToRjpgDzQ6qwDwiW5ZjpJ",
  "key36": "53hsSbNYMp8fMMtTjNYi6Y9PK7TTwpFpWh5sxuZUygvZjQkyyitQGxBvtpXjN7UZCwJtztxDGJDWWjRqsm25P3CR",
  "key37": "5SNP1MvaopfQp8EmtiRRZkFNKzPKquEyVRtfv2hbMwWd9zm9Y8TzkLBaCCY5ViM5LQrK8kyuM1DicNd215gdM41e",
  "key38": "zp6bgJJBvhFx1gytBQJzDfEeReWq4zBAnNfBXNVoi1crLttJEAjHny4MLMeDGZr4r7XGebFsWfePjhwLHbFX26m"
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
