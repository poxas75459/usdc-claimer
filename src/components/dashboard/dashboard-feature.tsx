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
    "2Beua69ryTaf7zoLx96HMCosroPFKcnq4m3kmumkz5NzqqFMazW1adQHv4FdNj8oHUV98Qk6RyWaDvPy3wGptCBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vsbxJRv2GG59ozPn7ZKLAFUW54NGVmPKSg4tQkbci8eZGyMEjddkcH6CRwpJDLAEnEYQjfFBTwtcbuuMUJBXaqW",
  "key1": "3fdntF135u8bTdEbFfcZQmm9dJcB5QZzv4hou2XZfJSV7WYTsz7d4XPG4yFaChErMLNYbfDgcihZKPuwE3EkPtm3",
  "key2": "2ssYZNjtUwAFk7xQpGoDvC1XUibUEjcfqnyqLoSU95MTzBzzKoZNjJNxduK8DvYwoHAcavap71j1oecpJyySoqSG",
  "key3": "4Z7tE9AzWvznSFhNRNceiX1RA3eceXkyz81sEkKyz4PKNKpL4wCD8GSTErEyyWBo7wKEARZvckju8pbVXv8S4L4u",
  "key4": "5gqY129YYZ2MyShTLrPsQscdaUsTB3Z9MCfsL9DLqHRThhfyqrtsbN6qr2nRXAE863TcAWxEhXwQeKEz5aX1JV2Z",
  "key5": "3GQ3DLuk3myqjqeEheCD6KYxpSwu9VR9uA6WjSmT1gUsB57xjjLdkuwo9a4pTDA4HUMdTUYU6AfwR91q9guYGC76",
  "key6": "3XiyXNt4NWHnWnvqagMWarA2HtHeCgoNcrFXs4LZWx2Dx51Z1vpMGUMAtS4WnZHRzgMot1p6MnVe3Ks1CN58P2fi",
  "key7": "45pAzUJreffQBjUSSJJQo96gTMuQibpVg6B3jYV9TTDbPB1yj6JyUCBtwxPJ3tyuqGMtdTHCYAApyCk4vrak2Rmg",
  "key8": "2LVtj4RMcnnqqEZYsFM2pmaXPcgFF75nkJboj25rsv78VwvZmuB2vmD25EUrCESiBPiyTiPcBRaC3h9TkvW3EAe1",
  "key9": "2CArPYoutkeFLe6KaLVgyYQcCs77JS7boJMMRPtR6SxXUwyB3PaDp1TWfgRDUo6HAykTGD8vc6zc1RwQxFrWAUbW",
  "key10": "thfpowbFokyUK3TZsbqpuPpJocSagr6mwwcwrHoPgf5az1aErs9yv5snmxamKpqraKyXjLxHxKN5Xw3LbA3BYku",
  "key11": "4KreqDaZCPaw7WwQrP4teaTfWQGfxgb5jhkoG29PCp8FFQfkFX71jhYqdiG7TMRjpgA2uYZ88vxWvK26BnGK7y19",
  "key12": "MRQsDJ6NrWrk2m8tEB6HorjNvCeQ3X2dp46mZp4eeCkgsRJGR4C4tGFf7cbRD2fiidBVhKfhdnWLyeZiq1iTVNG",
  "key13": "ui3MXGsswN1FGhp9sLhuNdbJwbFbLqP1NnZNKQS7auLJXUNZCrdVHjNWiZLJHnaV7vzHnv3dJWAF83Yyr4gSFUH",
  "key14": "3i1P9EbyNfd6eWm7FrRD2JFq89sYwdujuai86HenK7bvVoNKsgc4UUGRJ2pfioZBXHuPogY7pw3D2Pk94c9qW69S",
  "key15": "3DPtkYuqMoXe3nY3a8fuXhHWVzzNrmuyy76B2HiojcuqxTCDodagiV1GzMS4bKb5tdn6pA2utacSk2cmB7S9Q4J",
  "key16": "4FwTbRUoM7WgvffqdoKn5WVy6CdQfbS4p7fEDFFWbSSZnYDyTTeRQqZXpTAZVNvCHLDFTR9XdKuN1QCYerrnFSac",
  "key17": "5J4gJchhahu5PTw8Baf92iJppV1XGPYRjLD1ae1uoPdJXRU8xJGZppzFL4qgYnR6Z5wuXfJFiKJzgfyysVbhMrUu",
  "key18": "4V53NCyae3mSyeUcB9MU8k78V5Qo88rkTEJ7w6oTjdbDWnczVSd2FtDT2R9fxVcTKgtDkopNdbJGou3FvWd5fvvX",
  "key19": "5WwHxyprpGVqHjN2Shf3LAuJuPaZHpQcg6mXHJXwyD2DYAHy7xmG27Xv3rJG7NFbKBxfUNVy2K7CHQSoKsTDgJXV",
  "key20": "4pHnUeWixCric6jBs6fsRfY5LRWh2uH7Mz2ywHDEbDV4TaKuoAPD9SARNaadbf9L8bRN9iqLmM6E4S2dMimZyfVV",
  "key21": "svp1VFyy92a4jdtp3azvpWVnD9Kvnrbi7V8Ds37SrwTEajagELNLB413TUNK7fX8Vj6gUZuAjbkvejtyQVFZ7km",
  "key22": "4GywJJjZSHvsaWaZgeWzz8o7DCdRbu1KxMsneVtkAwUM6LyiUFcvJKsmr2ntPtiqLoEpWYeh4JLQhVHsQx1UnYAR",
  "key23": "5ESCjEwD4mKXS341RoqPbrCj27EsFzDw3Z4oqzjHUKgCLQtqxJC2cEcfPNFueQKWNUFJxUPELucSivFxcTyihPPn",
  "key24": "44wsEnoYPacEyRgtfbJLhs2ucoy7ogrRPqWQYKev5pXjFhxgoowj3dr6JWCXerusbcFDNRHsDiZP1YJ1Z3U7fF6C",
  "key25": "YPaWx31iaZ7aP7Q7xeesVS7AZApT4b73xtToZprTskZFKYvbMshKp7UTjjeFSKmoFfSMyCcAn2QSStude54wA3z",
  "key26": "4AKqqfe19VTFSpAwTcSMgMaLCey3LdmBJHGHXLUXXAXr74NSdxe9T3sdTp5T9ceqvYKXVh1U14LmfC8vGA7LU5MZ",
  "key27": "9PPFKmfB2wMvQs6CHAYoiV7Mxj2LwVvoWoy6G8S6UAmuuanGHXgoAcKGRNxiHhPBV9nGttndfzzUJRZAUXELD79",
  "key28": "d3dA4PwRiqTkYi2hJHe1T8ThYGomDUxGWMvsCcKmvN4JTSHLzNC7hiEMURVhtX4NfdHGziVHqVu2MYq5Smnc18t",
  "key29": "5SFHLBiDiuFQWVGny28W9fq2PJNYDBeWGxYezTbj3nMCeW5QbGwDS1X6b5XSeddc3aghtgsQLhUsgZUh8gfXNRbM",
  "key30": "SuXxhEq7Cu7ZeNx4UMdDLnMwUoHotKNgMPm9B55RYo9mWPahvfUq6b5bzNjZcbhW4Ri1r6fT6qiiMdNundGrvqC",
  "key31": "3mCa6S5zgyF1rnH1MyYeDvayGZGNyGQ5CrQSY7WZKRJekKbrept3SRbr1QBH1bHH9XbHi5K66jgAWxDHxd9cMdDa",
  "key32": "Tzw2taft6RmUdUSrJLdzuFnBkosHAQcRct7QzSkt6E3r9XfCeBPydkCfSyy7MQTB9sbWtuX8NPbcctdrtD5EhGT",
  "key33": "2hFq49vHprcaWVtnRHoCJhsAMuh8GSBQtTtoMXydzFP9GXx1sbKALhxuWRdsV9ZFTyBFNhuGsrxiRVHugcMWJehZ"
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
