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
    "7NsUtdjbY1sWFa2GosNBqPu3vo5eEdR8i435jLbAMovXxeW9kRuiVUDCrR6xeAGheHjGEbQmWpeip8LkcYwqPC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BvpNPAfFT3RAsX1iTXgLT5qfoy6vESgauLQHsrJHSK3fXwxs23MQNXha4Bt9ri3R5xtL6PNtBcAf9TjKT2EZGDt",
  "key1": "3AFigvb3hwkrgSMKDPz6mgMG94PZWqRp9bYobMxXuZ7BaBBMUP183VSx84u11gMEW1LSzFKaE9geFPDqKy8s5J5b",
  "key2": "35Rr1PxBDxNUCHs1qWX79xCC3mkj7XybscFFWq5fVC8eJgfm1cCno4UTFHa6ZkKxEH4MwK25tJyskP9dxUy8uG1z",
  "key3": "5coS2WVVCnYs9d5MqCynXaKG9tqwc7qjo6fq4QgPon2wjJ2e773aC6q39DX46r5sWgZjYGryv9kQ5628uKd6pCLb",
  "key4": "5PX5CH4UFHUNVoWriXVougWo3vPKtnXRBnMLq9mTKpH95UPHWuULNHPfDmSdjzAMsKeBbPm3rp7yc7MhRV2faHCF",
  "key5": "5PbwMmmUsZ4fT6bsGcuCwxqkpm9f2NLnCcnskJqfKmspqWxEpuCCu1JyibqiYGN83xrZTvgGdUe4nY1kidEYqX5E",
  "key6": "1fB2MDhcgW7Gi4c8udQWzesERagNaU95VogTxD8gihc3bCj4UFmMW69sGaA1SWzTHxDnaavx9FHWviRysnybvAk",
  "key7": "e9a7XxSaWRiJ5TeGVz3AGqPm74cyoSNCN1ZugeR6fv1LRpQHuF62BGnNZ7e8NuNJNW8G4zP16oZcyyRHWcEeiym",
  "key8": "4mo4FA8XC7DrLbdZHAnuDpbC9WF6xr5YXkL75uhMoHqUEjBfFJX9XZ3vKfE8qAk2QGrnU1LSRWEhSMiHP7CY524o",
  "key9": "T1JqQc4AWN6qRPkVPiSAwWDpVQeqNizX4PrH2N33cAJ7C1ZgEYbPKY4kDnCSbfC61x5kqHC7jvhjKwZyJAdy6Bc",
  "key10": "3UnpusYRjLrRsM3yP6gdM6E5idfq7qdVvkZqrBBXvg61hHovzFE15b2sjtPMCuyyi1f3MDoucE4rQuMoTfveYqHD",
  "key11": "3yKfDRZB4kRSMJzRchBVpVDqzcSGio16dP9VbKKmvpydvE4MrnpCNoL1yLVj58qmLfEkNRtE7ZR43wQSqSQo1jsJ",
  "key12": "3tj4HVwBi4GuHws2Ea934jurWD8evD9j67Go9ZJjYJa2WV1NX9DdqFwbGpVrJ7wgL4usCRWTK2H3q1xxsXZ3FUMs",
  "key13": "2aHueWWkcM5z9nm6oR6jLSu8y857NXMdMNJQBmSbi5XNoAFekEKSAbYr6C4MQ5x1k1jEaxDS8rMdAey9RtLMsc48",
  "key14": "22EQkxbVTcaTth5YgjWFrdgs3XycYCHyhWvezLwNEK7BoJ5a7X6xxrT8VZPZ5Cuy9XqqTKMprjQDve5Rd894CYTo",
  "key15": "26zbxsviEbZsaWSTPzp9YHmwUiVCnEhxTARjTcsjFd88Qs4Sph1DrLaMZktDXNjbFBjVxhZWGPeLH6woeosrUcvu",
  "key16": "5krGvhReG24d4G3Xyp23bv1sLBZfP1g2bCNWxujeFzA9E2B635NvCS8JkvgEESDay9HxfAVG3zH6W6jq5D4nvLtC",
  "key17": "3AYRPna7bgGDF6VacT8J8uTmyYUjgC2EZLWnsh8LmRbaJUEPsHamWj6VWwpvhQub2TtoP5WNPvrqfqyZ15n8L3dH",
  "key18": "2mPBghiHhP9TtMGKviGeTZsV6grLXzDvEiMKNawsRNkzAZxv94ZphmktdmS9BtUV73RMEdAbsyQueuW2t1VvdTHW",
  "key19": "5JL7sqb4fmzhhYTnvb6MoxFEFJX8mkFr8XqENSF2MvFCRayX8GyBLdTyz7GKMzwD2jpkMATTa8knue7cZurr8HL1",
  "key20": "QReatG2ZT2MG3kWfnKBcbJVVQAgwgEKDMfnc1CktVhyPLTWwqULFPtm4KTXGe5rXuWDeXj1nvGn5odXMbvgqnv2",
  "key21": "tneHWPajebndnxf8wD5jvh4tshNNC3HkPsvXbeBgB83TV69UtGbPWTPXgXPYKvthPwV7ccHxiKnguDqdKziwcm2",
  "key22": "2z7BeXgu81nNe8EWMY9T6upMYXNrXoAvg9bXiwSmX6wHvY6AcLTHM52JdT8htU5ayUh7W6vyjPMgSJ1S3rh66dnc",
  "key23": "fvzwcC3GeFjvme9csVdXmniZfDqp3gCEsGXrZhTPV2UgNyNgkP4dJTp5s4unQ74anapFFj5Lv3BDVixvbHgw8X4",
  "key24": "3nj9BznyG22ZpgvnY2rtw6Rvkbqi5XjRf4T4ywut5QTQUdFbpxf67ftKTvbccpcERCFT5yBCpqiB9DcX8VniUBD9",
  "key25": "2jaNQevcFHXf5oJSCUHzT3RDih6YhpNtZ7gRCsJoHXGTMgxQshZru1MxgDpp5PnrJphGKvbgndzQrxV4SkrCLgYf",
  "key26": "2tNbE1ypafRRzEMm2TXzhUYtsq4beGSYd1vTNMHzpw84jJCMcZte9XWn1pYDvqhNmVEbrHd1J2DuxBr2peANbZhM",
  "key27": "3Nap7Y4TXxaXudfmbQiXqH3n7mNBqMYiSoDhUdtPJf4bZrX9rwv1CT3RAiB9haDBV2TUmCvdgaptXFRXKFF1oG7V",
  "key28": "4YWFEnPEupKJDxhsjWdqUzgrsFMm5GN2TxbzxuJGuZ7YUXhGVvMMzGoVkrUnm3Rp6Kqw3Taebn9xsoJAZsvL1sBy",
  "key29": "2YHoGcV4dt3jFTNLFjSyKfnzTuKMxLzJkxhYk4JfDc87MnKH28qPtdKxQJ1XZ6CwBXCULxmyJiT3WxpK1D4pMYwk",
  "key30": "2cSUJPdsbg8LedkMX4NZSRLuqFrFKLz9KxizwPtjmYfztaFBFfnrdd3Xjd132JL7n3g6w5QpYo7cEs3mNZB89haW",
  "key31": "HsHeMxGnfYgRqgiJcRp56oQtmNbSvNAw6LbfqvKccLzbyU5ufZYhzY12g7UvQaBiMaM5nmuz8MPV4CBMGVBUmCM",
  "key32": "5bixj3An1N8GcEn6JwxJAYQsgbgnqFDyBHaxreRHRgRT8mXnPyHQDXhJHyhiLH3WzzeFAdXad4ZwMZAts9dhksP9",
  "key33": "3CLJYb4vr9xDsHiXziyVE3QQsgthHguQmspPFENQNx7MFCmX8Q7B39pcRAtRSam6iaAc58w3G6Nmj7czivJiRzvf",
  "key34": "rPTtbnsh1NQaBdtsRSNZcgE84AUQR8WiQ43HSdM5ETG1CunrQhZUHuDvNhUmWnS4W8j7znXRgsMrMDV6xRdpFY1",
  "key35": "62EvxNJmPv7MdArBjq6xinRyPfyKFP75kahb5Snrrf4yru2VtD25hmBwQnn26GV2GoYzG27UutQ2DfDnmV37KjLQ",
  "key36": "627qxcMCS54ewjqLN7wkDiuF83fakxTysA94dsHtFtUTNxQhHHMhPvYpv2zMa94wFNvs86Hcsz5WVPXptJheyzu",
  "key37": "4g3vebA124tSkQaaKLHT47KUCkDN7ku1N25b83bt9vUR3MuUooMWGWXwTbYQTGDdSqvajsLwbPYzb1k8KrwCq3rp",
  "key38": "5D7qPt19FPBRBxFYP2WQiSXn1GrNXxa6GmcHBwNo1awK4AtPsmaicettZ3UphFniqQDoeFBBxzGtSFZPzGTgBBGb",
  "key39": "B9W6mF6vt9JPEENW8A8NbKhBLnoYRMDtN4BHPzGiR3rrtSxXhfhuMHZp7kDrG5b6as3mkHN5TYqe1YG7BzzEpxT",
  "key40": "4be7zXKxGe9fNGxc9389ASZ7afZkWyasyV1duFouAzpEbfBV58fQtVbV8hDLkj9cnYBTQVzCsd7m4MwvpyUzhmTN",
  "key41": "RFHKeqo28tAQMksDatobs6W2FqC4XVy9w2udsB9j2Xe5oBVondzaaRkEntgTLNdbBymy7PSvFCNDLBojSvkJiJj",
  "key42": "5tUbWHyqLwceb9vs2J4qUqkAXoKQUPKTExntePzjgPziDyXst4KpvQD4bee4ecVkoPVz3y4JouCzQ5MVCUPF6Koj",
  "key43": "61p75Q9oFkUdwvTt33aRhczRaQunbrvUPHzuQzoucFepKMB1M64jMq7MeM757UQQvx599gq2XbEF9Ech5goLTCyW"
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
