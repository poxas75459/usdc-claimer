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
    "4W9ifbYKJtquZhZdE4MdFd5BMMFY19y8PHnXhyvVFNVBbF2Za69PxEyx1PyB7ZRqCDG8weVWgfHZMBdfkFJeyDoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NaQGVzLhF6YuLLJiZcuFzRQ6WbPoooLopiMjiEq2X9JwBJnGuXgyHskpxVNZFmMK4kt59ddXjnXaoxxRQe8S3zj",
  "key1": "4TGU2r6tFX3vbqavQ2T2j6ebmD7mFgbu6p4CaBtDGWKDBDjwQmtGC8UthWQ87zZsz1v551DmUtTLPCqRLc5Ms5fy",
  "key2": "5GAek1y4SQycfd7BQ7B4h6Aq4BqCGsB8aUYBHBa5gLsf8bSbhNk3NkGqFtRWg2PVPgXNqT27LLxjH1jhrXpmS8pL",
  "key3": "4miFs2EmxMmdbD4CT96BbHUDb5zpnTZZg5dYAz6iyXbe8aJRCbrmST8ziYHjKb5aPm4H4qgkUroHu7HsN853MmqB",
  "key4": "dPDh2E4w1ifrZnZpuZE6e3LZbBTeoJ7CsTezLbuV2JKsg45i9qFewKP5RwvnnobtxfyNwN9BejvjhdipcjEVCe1",
  "key5": "KCVGzQs9yngToFKPV2ZEtKP8PQnKsH4dqCSkjhmiPanfbUVVhHQmh12kbgGMSpxuhqvcjYjdAdziLVpVwd9LWEV",
  "key6": "648hguwRXNSGs4EwEkguQBX9AYZ332izFp5KR3vFUyD54gbM1G5SqQH1vUtroops49D2rAfYSHFRkASbM64M8yzU",
  "key7": "343B3rtzU7PMB2jG1dqqtHDUBcm6JpeFW9YToM9WGyF6XhBi5pmY5HtghY1oWf8eyJY5K9NCmUssvCtgto5qEG9j",
  "key8": "27vBWk55rCVE5wjyNH6dzL44YgSCQqZeSBuwe8kSTWXw1Zq3ePoP3hWMPLQWD4wEyX4dMqki8z97zyiqn9xbTuDR",
  "key9": "2ruCMxX6YezcvYZzm7bE7HQWk7K4Ma8wrJrUvgVMb4ZwAiXMGmqjQu5q5Ro4vyEqHqyp3K2YJvK51uFF8145HTf6",
  "key10": "5teQM2DmzcPJg7K3NFqCmyf4ft8Xb7dsCSf2zSCvtbNmdRGwPxg94kM6mzsFcRj8JFCE3a3HnLvXFHRy8LdUQECy",
  "key11": "4bpsfDgZLUPXyt1CapDQjKscYhUqwboEJkPnDAy2TA3SNdLWg7GTwybSBuaSVvD7MbR1aLnWMm1fGGP2FwKZ8YN9",
  "key12": "4r8wX2ut2aMTbSKbk8DN1h6PCdQBXSYSFeXmjJkMpURmQTeGnB6rqEnZw7BodeMjzfgvcCiPCGP5tzJxsxhnMrdR",
  "key13": "5mb9e6GEgmWbuSAUm3rgX7XyVySXivzbUEyjweQT1zfP8Rq1oFyyv4djhGF12PhqBNCXWhgW4NScoNcY96gGkqwH",
  "key14": "nnFRugLhdYeAsxDUaCqV8Rr9LteC1nvsd2bBcbnsfBaejZVP9jXh1peNXxF283dak9JyLDi1V5odkPkt7RDuRH3",
  "key15": "5ER8XxZFhG6U8HEEEjLyPqjeHjsJKj4Exn67tY2kHbDuWeps5A3SfqqaYmwqY5fJyJ8gsPxzFVW69H7ZG5m8ksWa",
  "key16": "4CEnG7H7bw1x9YLKtmsxvsmsJ1qFUcumP4FWGeBrFkQj6ahVtGgpt1NGqTCMuDkBih2NBE77Exj5rmxzJbt2dZjM",
  "key17": "5YPGHQtXp2MSs7Y9cMswJSanbDiDpKzxZWJAt4cQDMaor8ih8BiM4P69JVj7dkz1k9KZanbcJ1LvjV3eDW1RTKam",
  "key18": "2UHUKRS8XkF3hPKCARpwCtFXsXEGvvcHLBmy6oFe3zuq7XYpbVDX6ATwaMgm3LDFzEcwU5qoLxAgGPqaSp1Tdnad",
  "key19": "3EN4norXDC9X4ZKCtT1j7dStsofQmKMcvWSGSFAG5pEnkrXjDshw9JF5xx1wTRAQwkBg3ZSFHcysyN52GxXxtpC6",
  "key20": "4KP3232sHLp6mFUHJCRZhyxJBXa1D8PDqCwuJn3PeVbZ6MJoLwW2x6PEbnw9vAUoitkz9V8XMtE65TXnXixuWZWz",
  "key21": "49z6nwTByFBMyTc1YGyJn6WrGbUk3LFm8NB47CEHhKcazJ3S36sB9vVGxkPrVsNnU8QWXaeHmNYHD7qsdndQQKuj",
  "key22": "21dp1RHakoT48LQGmfCsKri4hMJ4Y9Vd9c1teaP1FNoebSyprBi8Ju2SvfAuoUYWEdFujp9M2v8bTrji4xtVoZVU",
  "key23": "439CddzyFkg9NbNyrBy2chNe5p891fQ2r3g2nhrGMVQSxegaPuquNNubxmhiouvGwmwYctunp5AtiwBpeuBJJ5UW",
  "key24": "3HuDF4mmQueKQ5GJvTZPRgLh3KcvJh9xyaVeoR4GywkX2uADWWzFh1wPRd7wDCzmhtPM2KM8duS1oveFam6WVZEs",
  "key25": "26n7aqLqjVu9Y4473yhyqAHBS45KhuBPAVxtQWmjyj4rJWuQisHX2btSMxtaLyY6T7RHKfggTJNyBPobq3fU4KMX",
  "key26": "Nhuj4WPFxciDv9qm5qLoMc6iYHTVjgCZbbpANQkLcqUfvjdnu7G1DfFvkSRDMuHCwPLb7Yf6f5C7JHkUxGxFZ34",
  "key27": "4kHXnqP3Znd22buhgEMPySYjqDqwmHsSp5EutBBC9aA4caJhANZgjo9bPkfr5wD6xvkiMzUaJ67FEpmoJnswq523",
  "key28": "2xeWB1tGsb4die6kkNYBtCBpfVDAMJ3YgHenfUYoJSh1jPkTtfNzKRTBYSko2q7EsCxSDuehDfFTVTeorvrRc5a8",
  "key29": "5RMb7hsKkAiiTDPf7mRaym8JXSCLbjj7MhS1xnP8nSZFebxFiFHH5sUpbnNZ1tyTwKTkMxFTUvyfpf2UWVNG5b3L",
  "key30": "mszstgHJtW5R1R6odLHKdcCjRgRwfSBqZv2oTyrcwuiHBWjg8zB2aZJ6DeGgqpAcPauBLa7xBGn6sycbSibzCAc",
  "key31": "3UJ2EbS9pobY1gfjiuxF1sSiVJ7DFeUDFuRHGN8unfrHPZoPxxm1KvEALWT2R8R5uF7p4fhR162TW4FuDGDuxbkj",
  "key32": "5WzfCnEgS1D8c3fT5BErYDxwGW62QU8kHWiH1bThrnwUprE5wgmavzLhsassNUUHg58jKuEN4rnpg3cbs1Yr7mzp",
  "key33": "41EfgQd4m2Ejwe3cFwwfCqJF4oAJsrHygiMz96hDWaEzWftFkDbDSJGC9hX93VtCCrz25XcHLjKn5rdmEUDBJWog",
  "key34": "32e6R3w7Z6og4CzXfmcRcDcXTXeEUorxxvuqyQrBL9cnuFGozBzpAbUZ5HYo6ks1PekLaCjr8T1mfpxjCbv1Ai5c",
  "key35": "4ah2MYdwGiBNYg7kk9pQRduNdmnqJEEPV7xgC8EdXTsn21dGnsKps9bGJmqyJjEmxz2j7SUzBY5vsK9aVngcYfSe",
  "key36": "3PygEfeCuXUv5BMzC14TTqkVkNweoPb2feHgYSeoLUNa4KejZgWj1CHEwPYNZR8nrdK3njDNH8P1JiatDw2khpAJ",
  "key37": "3rG3age4tYt3VADr28db8UZADY3h53rBjoCumVbj8LhjMmj173PZZYLCm6aBdXTRS69g3DGJfBW5op2E1tEvQEBc",
  "key38": "43A5xUEWUxbxPZAoRKH33XZekSen81bWr6KoEpyXAaSMRYnt5Mr9TiJw4y5fSzi8CwL57ysQer3be9FBTEjkeF6g"
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
