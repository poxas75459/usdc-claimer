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
    "4X5psaqikV82L6Kmx4f4GUtAqYcAkU8NhNbd5fFtBPYi22jWCDBNj9qVwhXUud37P5CQH5boWnbczNU6vqX86iWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQo6iJiFT7Fj63iFMXQ1kjpFv3YVczKLhaEYcUcnC6Efa3z7A3Esf7WTn9r5wbqGsTwwrHyJ98EobBZbFdEJjQx",
  "key1": "43kwYdPvZESze13y77sq4ich6w6ijF9cjrUtKMwg3TLha4AXsanAzeQZJugaCDqDatAcN85XGjvmkfj95JvQtiXC",
  "key2": "4a1R6ZeiWEaud5ngkDKqfffsc96HxtqQtZfNq4GWfgCYK21kuorr8LoGfmgtpwdSEQxFz5nmVt7UkZFoEry5emo5",
  "key3": "2FuboaCScHiDyKd7ubnmnGLNmRVc8rhPtMp9A12qVrD2dHMpvjDJXZmGbG27NqsLQ53S3PbPowPRVBdwRLSaeNcV",
  "key4": "2yE8ZULm6yitGYFWCMGxspaFt6ptne7q2DYGNqyZpnH5b7o2voM1XPFW1DHbAJKS9oapASaopTknYiPaNMrM31dB",
  "key5": "DNDyA9qC64XEno4E6TKtQ8xuyxwM4VMYpA6mHb8FyM75TtXnmdJPqtisfMbaxD5VVfRpAxzcpzDcKdEvEhkhj6L",
  "key6": "3GESA1ZK5aZKDNY5geg3mxfK1VZV2Aa1A7ekHmmyjmHwwLAuv4EPYSSQyZ8upv2uNPGjREhBVGYHA3CsbVv11V5e",
  "key7": "4zRVbVhubDJPPUjZY4aAUx7yUcAyjLXRCfuPCB13JR1sTgXay18EhrvjxTDcsNUU9SuXeWKtbJu4FYjUWj5JMtNv",
  "key8": "3crMwoQpxsXMTumHc7ZVYXRoCFRFeBTRyvdZ5yXw4Dw4PW7263fMjPikkEbVmoaUPg79GMdmFDHiDbgRDEMFgkBK",
  "key9": "D94MTSxJCf3aym78DCpCGzVG6FM4jLgV7NTMjprG7aqvSTUpyj3JSu9HkBhJCvYX77o2bDs9qWUfrGfru5p4o53",
  "key10": "28saGvbK4KRz9qToUNKTmDHhmwPRgxTBX2Bg2ZCkhGUPZbyeUqSh51j8Mjo2UmfFwWyJNbT1EA4s6Zh6pESQTQUX",
  "key11": "GQ8uqJWFbDc9GGUN7Hj1xfodzBQWQohb4fzqgip4ERtYpz1rHMiG1CwnytEyE7A8rkQBemdL5vE9uikwcAeSpxW",
  "key12": "5FwNtJ4kpKHTvj8ypw6R8EwMuSCjWi88PCn8UUyNRG3sxwHLBDNsGe6RC6t9zE8BudMHMrtGkcCkMinqt2g3pPM9",
  "key13": "5bPxNG4DiT7D7xuzGMU7o1D9QJWZwW2cKrELLM7b73S8ik3TbKvECCRNLRU22Ug5RTz6wbsiftNeMN7bwLLu1a4Q",
  "key14": "2Ercf9xQeBamYYge8mJ4f9zjxrvZHTkr59Evi9At5j1K4eK41fBpm2mBBVLqCjpgxkJ3HsATthZzSzhgH4umUtcV",
  "key15": "2UqSjT8qZScBA9cY3rdCWRDt8vTcfM3CinZx5fMrobW4q2memxF8a5fDmLumKdrw5xfgkcg2TcNJ46pofWVLgoTC",
  "key16": "2Z2y8wbu9y2gMC7on3yMK1UiVGGNoVJtDxDv8U1rD5wgYrs4gbZBHDi2qEsPghRuQZfPxqjGs4z14NBLUPYA1dmh",
  "key17": "ty9oUnVHfXq1aJLjCTTVZsnZxbiLw7V3N6ppmYg2iU8KugpBfvm5Ntbmd8CR22uxnd9MkYm3WiRq1QSc9iEXqbC",
  "key18": "qnPib8H2LzZrY3BrrgrMrnYbZ1kZpgiNZodt7ABiVh7oc1rERVdisRCBgPFo3dmWaVXBSxEsm8HCj5V5ctUPGfp",
  "key19": "4dToFHptSQjejGRwBHHw6gnSHwRz3ZMot3tUNqwAwPhksAFEiRE75no12QZgf7yDV5N5RrKofEVN6bwEqyAKqR38",
  "key20": "Ro6bqKJMbpQwXqmTHu5gJz5TcoF3ShbgVuZZTJqDqXMFcYMsTZLVP5ad3KpMDHH4mfSTJ4kw89rH4AVuH1mRyj3",
  "key21": "42fCKLzhqVVtxkQXu2UtJ3mbRTYh57WYPyj3SfPfkpZWriNBivFDeRjHTy2aSFzYgfk7fwkHhvZ3tLYnfWPc5JZR",
  "key22": "4WJCJLQVzy2wfke2L2hU9yUTqShkajGPfNWcno5UBifuwNS5T3Hugd1zUL69QZxqmq6ThSGT4q7Hse5rTiTZxSVE",
  "key23": "2iopK3YCKWF1vx9kwAN87yBd1MfYSC61G1CrD5JDSL1XtLVBuP7EWmyJBFSDiuUKTAPodyiKvtGeruWmWJfGgY5b",
  "key24": "5UfB9qRcKmi6hbVpgo69U1VKE7snVPPsSNy3t6QndZZA4FYyPTjersNtcUh2Dhq7GtG3ywdwuTvcKd5AQrknNT4p",
  "key25": "55UmuFZmWMaV959LG7JfaSfyUgC48u71vPx59bSf2Jrr6nKCM8WniEkskwLRLH2u8jAWhwk6bjwyc7BgqXnR9ZMX",
  "key26": "Tgu2s1465J6pFYrFwcT7msjAbbcC5MGcsQRPFpRomwwteAymhN1JFNYjRvQaYYE8yFzfTJeBC2t3YKdjfdZpV4A",
  "key27": "46W8CxYDWZnpJYha8HroERrhYtZm5nvyFrebCfK5x3qBqfEKkiwggV5KebFckjyTsPdQ5R4ZGYD7VyGVqWjTsMMv",
  "key28": "qSZvvnwNWRzVxgzeEzhK6rLP5jjouPujUzwEe1cNpfFBiuzPfvTWgx1ufg3UcnezpKYijNrS5a6bFSBNWuoqpNg",
  "key29": "5wM5c7GNFdkUpf3ijrY92FtK5mg71YgCU82pGmb8eFhKkBTqSGHkeMNTgnk1uEzkor2p12E5hSEAtjpWkcr45ier",
  "key30": "3kjQrACL5JYh4TYLYkGoKTgcC8joZokPbXXdMiD2QWfAmxiLg8HPv4zTRVWUMbp835hbtU2Ti7nQZHxEWuZaNRHi",
  "key31": "5kA5k4rCMx6nNebf3xTePbD8ozRRwZgU62QmeXJGd9i3DwjdbRi9UrC5P3Ch2AZsWhqWGSp682EwFmnPC7kkQgx7",
  "key32": "39m2w1tb3PBShoxjvyCoQSYvmehWcWCcQWGM5idx2s57ZZVBDzL8CkGMsD2auC4wpGUbnktCynEg6Q4HDZuBvqDW",
  "key33": "nQcjzwBcMjTnycxxHo8iiXcCnG8iyMdg4B8Gd6kPqhY2Z9WvKHBVHCoXhceBHTjC2uFcvTWKrY3fKaKzsXVUTRt",
  "key34": "1Sg5NWathVD4J6nKmn932EKmWCcG7KTfpWn3SvKxybNztg9RgMzzqc5k4gRHjnYpHNeivcsnWVvALw1oJaMdLuv",
  "key35": "5L1T4To88xjDisRMB8mG7wu33kFwZBBwL7oG8eQAUiovALq1MupqpR3Lzz7kKo2ozdD562DBAJLSnDWZivtqXMDB",
  "key36": "2PWPTrDSwv441tLbyXhGGDhyGDwX7VXr9RzgN1ieHyQTpYwTr1T7PBZSWvSoxsgZb2ZQNG1xGQtYvksveKZTwqst",
  "key37": "5rEAKeudkXYq8z5YgcRvReqJDKj1uWdKDbaRYNJvV1qycxutoN85WrG7HyLoBWVcQ1FyCFeGi6zem2gfwHyG3zc8",
  "key38": "9U4LWdaFyzZeEsd8kGa3gRVHFN5oSE338ePgcnWFZNNnutwE2dNER9CR6rgZw2Hpp5njs818yE1EMNNMnVB7vtT",
  "key39": "4K7MjXdiEhdLbJ1suCkTkaQhMfWpW8e44tEZGfF5cCbmafLLveWRsXcNMRfpcUKDv84VGyeu6nK2Z3hVJiHdF6Q2",
  "key40": "2d2Dg38KPb39bQfe4AHsqBKDS4mKJu81cyd1zhjhm39BMShd8Yj6WCwgm2kofH4gTTpFYQkysZPWDKG8GgjQLMhG",
  "key41": "oDdkNr3LakFFKZi9eDZMJsVQS5CNDwHfmdLm9osoCN382YkqPeEBSi1Bc7xUjkFpTjUcmmK8EmQKUkxSHSgUWss",
  "key42": "4cEfNRYVuov6tZbpCXBcFVGMqpxxEhyx9H8DUjLZg3rU9LwcrG3a5sEwgY8GJ15SQXzmt8u4G1snn8ngqDjCo8kG",
  "key43": "3Vt2xATX1N4DRXcbGGEZvwdeFJCXh59DXMHooHiNVuMkeiZNH5cBZeKSqDJ8EozDMzjCPuwmVTR35fbYaWi8Ezyg",
  "key44": "4wWqSxVfJnkTnZtrezMHafsPKjVtbABn4SLZ9c469oXEGKJxxc3hzgLgVaGByuRNwZDE5w1asaRZADrvc54phgxw"
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
