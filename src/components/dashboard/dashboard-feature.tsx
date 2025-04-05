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
    "3ow6fHesdU26m2quqNrc4Ltk21YYcqHb9khqVcH9DRHe6i17bpVepJiurhjtcy3kock2nBYw2YmmkwUzYKoU8QLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCWvrCRFpHjf5sJ6KhDCXmGpfQWv3eMLzAHw3qvHP3vSvKzbjyva5vbxcoCRQDqZEZE87Am9upxPRphKNNbDtso",
  "key1": "3pxBGSvF9bdnFc31YtuQZk9hkaN1nKgjo25dUqutjZ9oZWYJ7trMCdc9SrYHtwRFqgtpN8LmnwS2iFTeLMMJj3eJ",
  "key2": "5E7Ei8XBYqtrk4H6NT8xBhb1o3A1SAuM1SqnCivkvVkxyyGYsvpjutMnbYyEc2MTaTynJWSaAiXRhkvHaVBmRx9B",
  "key3": "3hiDwfbaawY3SXQQE5S5orPAGo5LsJhsH1oJ81kxfsHJHxqDokdDKPgVjChL95gyPch7GBGXqSPeNuJJ5NEXDZoA",
  "key4": "uGw6EDumKkdFLE2vphAexLiW8gHfs7z1cKgGGZEUTwSxUYRaCSWth5fyUV2PtYWqZck2zvvW9VLepqLccJ1pTn4",
  "key5": "MkfbR4w45iDR3pzRmzHvPzW5Q1mPCSznV5RC6Akq4y7RPJgvspgQ79zv7ZHsgiBrFm9Sq2B3XEyhxmxB7NwXzF9",
  "key6": "3kyUiYkNbyBCvyBDBWVoUrM6cjf9HAsYjTxtz9aAC5e2Z93q4nDaAyqagTfdPY4rpfydN7pdvVDBzp57rNVWBgEX",
  "key7": "53y7qQnq31ZrHCdtA2txaiQqBf2arHdR8n7JhUDS1xHg8fcH7PPXeRWbMKFYyAMBydbtJamxfU6CUQUbeiAkmV8G",
  "key8": "ppqNvkRJuyj9AfPoqK7u8J8z9p3YBasuVpZymwV2FvMzTGgH4aDj47AnRoDZCusjErndoHeFfjGN35h87QH9hhD",
  "key9": "27rsRqKus5Lyp949Car9nJzPueJcR7x1QJ4BkNrKkEWMPpsh1fTSucff6Po2m5TH6zGQHeRdxFyqV2Y6du65X2t8",
  "key10": "5Zvjr2pdQzQEEQDR71bsMFHL9D6KG3kKBwvHz4ycBNJZHtp4DqFXGtoJwcSMM4nxSXcTJtcUiXogKLGY7WdqPAp4",
  "key11": "5dWB6H95UykHKBqwrLgMwj5eX7VdEExkCFtj2GvEUq7NS7Nusz4MmjRKJoUjyfigXPxbmmy5MRhzDt3W9s3H3zq2",
  "key12": "2TazKUC7cWn2LZVAf5oA7xseHPTX9Vj3gsSrfKYzCvHpqWbnEepKfHEmBEz8WQpGTG1BENgKSCFZ282M37ypCmLh",
  "key13": "3dBQea8r6pjR4ADC2GXLb4SH4gkFxAaoSZFMJzsxndNM14Xr1U7ZWhf4Rwaqhr1RbnjWgqY3b9R2JnpGh5ZPfZRU",
  "key14": "2BwdMyarMT3JC4szVEeDLEvWYHspbLWhexHdwmtwEp6tFnEiwjuG4znZAroHstTBH6SzuEA6R286NAMcm7CWqPU9",
  "key15": "2JhbsxyFALB8NeYMTqPCC1PiWg4V9RAhiu7NqWMtJbS41JSSijief4ebkwHrHEYdDodURKArVDodsjpF7jkmgZZf",
  "key16": "d77Lk48t6uBc79DGnJMNsk51V7DGM9myHzQsXxNn4pMBMUJLUxvuBshUGeLF99XpPwc8bKa5xCyYQd9Uhm3poyU",
  "key17": "5weU6bRMacZtUEtKPFZ6Q4eF26U8rYGy5Z3Hapir4X1JD28P9u9bYfrhRH5yJtGba9VPqKYFWYUYhNTxfaxuR473",
  "key18": "5uAZmEs2fGYPDBkyQo5PLQR5VnL1kMaFNcFcT8MBXPd3fdz9rDRyj974Bh3JCThun9C42yE8b6FgMnqcaKv1AAro",
  "key19": "3NLy7md43BRVtnJtHmNiZ9QFVzheJqA5yNMojohgsJp8VckFHhKaBgMrP3L84VQNF8VsUW8CxvvjeBu5QuUnwEX",
  "key20": "34StBbE6C2V8H86kzHURWG3U2M3gnTjeWqtoFSnLUfk9iD5VRqbkAYd4gBEPSeRevsLWELLzo4TmYeMSN5dToLFX",
  "key21": "5d9nQgwKMRagk3t35zXsopykxw4B7qRdXynB2BMrmuZySPDx9AZGTkweLffUyDaRzy957nsysT42cBDNCyaspAdf",
  "key22": "4L7hkZurSvg5VPgvjkncxodrLbFMfWc98narV7obpaxXm5itsy4Xkg723uVos75N63NvsyyRnKCuNyZBjF9X1j7W",
  "key23": "2R1CbZuXEjFYpMjV2SXYKzkUVWv6diV94DRkWaHKB3QAqLaKYZSASY3KhKQ3ckFZManiBNxBWNVEAe85EMWwtKU",
  "key24": "2UtsSFBTN9LnsSCNnpsFpGZxyqb53MpjyshhanrqkrfEKWNnEYeTGoz2KNGAa5hEKESyVxRqhKMFn5ZaDzSZ2uz1",
  "key25": "4sTP29fiUA5KzVjzhZvue6eLp78g4xoQiFNDwtwddC66VGmm2Poj6GVo17bahiyHiq5u4Mpm7nm6AH2VJsrqQJyY",
  "key26": "cAMXr4Sc1graF6iacDB59NaF4T7JCQWKqPR5MgBpp56N2qhct83cQYuw8Hg9bZLYuTDbDU2pLxdQ2Lrgcmvt6Pb",
  "key27": "5StX3Rh1Fy9ZKPDYpniaG7MYG4S6TxXDj2vPseEZPQQC37Fq4XTt9dY9JmxKiChVnTiJvtSSEaDuTA1uQ8GGzFRy",
  "key28": "XSHrAUHpHwDaWrL6vHhrsGW5tHBK3BaDsKExHQAPQUEFKGftigfYoZyUbM4JLjLDcUrqUjzdCQgToFqp9x1vj3T",
  "key29": "4hxBoZ5eYRnuqVfMZysQ3Tep4CCjP6zhVF4jrqVXvdiVsFSWrJH7PNunsdkCmFkWbt9szvfTH3xZosUyg51CMpNw",
  "key30": "5GxpcHUdQC3HQ1XRkeUJta6NBEJtRY6UG98sdqj9LCPinDKtu5oFbJBLRYFRiPbCBtDKMAKnraFkTTcX7xoPPkjP",
  "key31": "2tw1ia5QMSF6v7TbFzug5A457tsp7uWaJAoB33YMbH3qQe8BcpynGfjdMw8V2pHVZp9vVH1VdjhVQpvqYqCk3XhN",
  "key32": "5PNtieqXkaL9PTmHgai48p96oeiEk4utB2mESSLAqetLvLVCsAGPW176TcHCC3sp58N8p7VAXpjd2iiRjPXekvp2",
  "key33": "q1F4QRyrqY8187sSNBye4TP5jg1hPbVE4U9FGVCKCxW16nRwDVpJRzNgSKS6v6okcV1DJoeSTRZ8Gmx58jKfufQ",
  "key34": "z1PcZKw38KzfhZCJAJeH7p7pX7eZREJfFVT66qRFM9cV1Aof5JqhqpwdrCmwLhLgH7RBRQXNscuDJi9RoHTsjfL",
  "key35": "3WTP3iD7N3As3we628Q228ui39zzq8akg5kxPFFeH6wnvTdL3yFp2qfRvP32aBere2zVbH19aXBj2ivAdpsvoPjh",
  "key36": "56wGLeTNTyfd4ZAJUPiApD47CKmAgZoQFXAWaZ7sg7uN3hmJstwDi9GZmojjKoPsTnjcFatXhCCRmebjiBtoKrmF",
  "key37": "57CtnN2U6TrMSBX5Tp1gZzNLaax3G8RfH8uX5SXHQbdj6UL2aFP6gmYCQWesMsKVdYEu5Y5XixdBzhS3D2UaxoH1",
  "key38": "2Tvm5yCJSjpvDppAErTHU9GdyLjMoGeoxFYhtUJ6MotvvMCQDZtHmrHLz8dd1aPZLNDGozvjtqQ8ukZrWY7WpVUM",
  "key39": "3CqDEruEFqUAgkGzTJzDsG1hJBYeHypENgDym513MQbd6SpwS7i5npU6kbyBRt5CYRdNPPJ16vbQk4WT5yZ92xvG",
  "key40": "YNc5bQWrna5HQukz6m9Bpt7NxHw7HMfAGo1wBUFp5vr1rX8onTBNPAwGtTPUUb33BszdKL1U8PvBSSUrapPbuhz",
  "key41": "3QNq5DkCajtzX8vHhjPSvcCQ4MHD3XSqQ36qVe8EfsHPoVsBLcwCnMMUhNUQkaQVPKP6pMZ9jKQ5uCQXarjXVTsd",
  "key42": "3Ujg1hjCHazVT4pg3erNS97THr5dCyBdRMBDc8wabppaLfyHkCcgPn2ngDrAMagCMiUKjTXqNdZHqJjJ7sxsGkrU",
  "key43": "3wQ1MgT3r6MajdrbSQ8E7wTv5La2f6TxuizRxbKXDZy3ncCkLrjeLJWxabe9wEZWyubUAKjWz7dKFw8sD3feJqgq",
  "key44": "5fqfBkmw5Tv9WrEoUqy3QPQFgKMKpa2AYaVkiWhnEGP3mGsxun27x7Jvs87Rgt1ZicuHbhRuUx9srEci4mWLv3m5",
  "key45": "2vHh3HLgJPohqz78TFGSWBxHAUKGVQP4JCgcoAuKxMrKPBc1G1F6Wb3wyvAmqyL3RbwQV2KXz7qdBdqCKkDcQ29Z"
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
