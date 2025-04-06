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
    "3FaGr1H32fg15Zo4Xs89UmRFZHCK5kg26zjcqUfTop1mroVLQMjpNJ7nyHv2KtKaAKgtDmSAYFHkmCeAreXs4Hen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31HwVujDDq5QMxUg6sgF7CEjzwNbW16SxQumQGUVGqJJFheaj2D9UE24y9mw1LzG8vQxg2QmbyR6KSmc9XdeBVN3",
  "key1": "4tUSNE3FPFTkmw1ytnZBcyqd1nr1por1hUDjygy9G7azgVaV2xcqYHw31eb7KYQsahfc257yTwsb7utVoYAQyijL",
  "key2": "66oh4FahXHXTzYMjjWvMc9aCdig7dyBSGfRb7MZXvf12aRowxX2LZWMnAxJv57AYXSEziLD5pgEDWSDxH5PKzDf2",
  "key3": "5C7RrjJaPNMWCgJSmzXRvdssh8uR4bf9FVrNycsmDDySMnEgP5uxoCXRi84eULgSkJKSgo62pcc2sg1pJhtwfSck",
  "key4": "5oXmFG1QGDcWkgqx1qwxm8Kh8htXh3YfUQpEbrcQTNfw13dDXFy216iUMP6hJeNqrAhdHB3rvky9c4FhR3jbuYaR",
  "key5": "4o64dcfbkCaJ4Vwk7sZb1nEaVu5G97LyzDZXNRxGvU81jMorg3omuHaid5UrDbaUqLDC5skwqyUdnBeBZooWUKwf",
  "key6": "5ukC9eby41gw1aQ5Msh4w8qqVQsABkSoLqR6zTB94BoBGEanvXsUc8owCGycuEwYyRHFHKBk6phvD5PKefYYnoYx",
  "key7": "433A3VgBbi7CWxPe8swzcWPSzbHSBFXfY5F4vcqP8jdDa7Et8pemvDJgkejecSXZ8xWFnotmagPqrYW77yoykSNq",
  "key8": "4ufHSbsU7MhJkkzwW1J8SD2Np7yZ9PuwpG5ux3jD2nXB2sk6VESF1whJfmNeHHPx7rQd12HKTk7uNDJH2kwBat3a",
  "key9": "564sVLwXKFzcusXQQMtJSHZ37TAkQQhLD8xBydKBGKKw7BHkgEJsWEshDud8eCJDoLZawkmTzxXwG5Tn4kVmHX1H",
  "key10": "2mYGzpYxigugxaG7bBZFvaSURJZLHVyz17n78G2amM96SB5tDQvuqvg4nKowskVE5bUCeKzvf5g3xrjjxHG5gPh7",
  "key11": "3u2R29SDyxdHSzSjA2W5hpwMV1JeQVgxQ49gSWaxRJsoitZytPyCtpTgWnuUYsXLa2ZYPti6yMiEeJ7RhyZqvVRT",
  "key12": "2v56iRffZAA6FAJnyKaNBQWHhgoirWX3ZeoEht4SDRdStLAtipAaMETp6APjFqtV52KfzGLo1JrJpCjCaVQvtf7B",
  "key13": "NzuBE69TMzQ2dmWb3Rgf5TemrurFgwRZ1ez4iVkg7ati53skDCipKEp9Mv2MgHVjHRbWt9VdN2VXi9niuBLTkgZ",
  "key14": "3ip3f6GtTnxSSAZwCNYNGrnc4xTGZPAFjJAZYJgyijFxGn8tQ58j3fcucT4hgnmLdh8xYNbnWuZ2PRz4GrUrMcm5",
  "key15": "3f577GWm1Lkkr2K9M7JPJVqy2Br8Ke2McMXTA79PtfDTf88LZQ6n4EE8pKvZ185uLA7b6y4gVfW8Bze2yByrjwa",
  "key16": "34v6JixzeBWtNDF6aWA1WEDbieNqJJYN4UiQX1QkCQKMdmWXNDvuPB47ULJquc3EyYoZXd6mzwQoVoses19aWvUQ",
  "key17": "2GJVXaSw6FJuyDMAfb5CwsCYGNrioDk9Ar1TobrL6244qGwtgJfTKYEkXY2wBv12GQxRCV9WFTDNHd2U9Y7Vfx7W",
  "key18": "4wUXThnKgGDtgDBtywt8BkVEXco4PNU7zPSTqSz6G9hYZe6ctHUqrZSYdsRgg6XctzCKrfp3q4fqsnV5oTqKVsZL",
  "key19": "4T5R6TGjfgkCDT8gEfJuh7CNbZ38icETFCph3t9QcT4pVqcuSEdAENwwFTXeToD6L9LBEGut7p6rcZzhL3R2KK4u",
  "key20": "4Qipbx4TjP5ZwLmSFLxQ79zcL6MuDRFixykhwHZNayCZSA7FWWJmK3w5gRRGuL9GAfArDtu5AD47Ry7zYfesZdRv",
  "key21": "5Gpc63k6AMABCHkL2sPc6Lp3sAhxvfAK5DHCjJR69yBoasM1NnWzbo7g5a92hsShzCeEzjtVHmyU37LN87DeSSLZ",
  "key22": "66qcNCx1YXYn4HzRL8i4FHrwm9YZNSk3YYoFeuNeF76WYPr88xamNeZy97ArGwVJc9S63NpsMrq5ifjFVt5gsfh3",
  "key23": "4d83TK8a79jw7FM2xZU94TC97CmYD8QHbxCJQvMQ5Zq1GdmWGi2kBdjFnVWSnPDotuECe65NLJ1ydfmDKu3duTxw",
  "key24": "4wNXaL3jmkCL9q8GzVGpodNWCMDfu2z6qz4EMxvHfEMU3tr5rZYPM7e14RivemYrPB9Nk4AXhEcE1xiWitzb5o17",
  "key25": "5GVhAzAKvwxoY2A9X3h5kqfMxbFrz7zfdnZuuKcik3QXAjUgKUszoDcY5ErS6tyquYdJAP4FmGZK8v4PMv2XPZiY",
  "key26": "4AcwW97GQGmpVi76EnWioX9r9yLqosKRcUgA9Cbjh3KtXsAW8awPJvFJBjDLzbQHWYX4epaSEovpiTA9u3XvnCwc",
  "key27": "NyPQ6pKk54Cbrqmh1aPdDq6L2h9ADQtTfkvXWoduX4ecLHhcCX6m77zC6xy9zo6t6GhM7rguTCxpMYrcxuWtXjz",
  "key28": "67o8W7QazKsLqMNwY9nX3xtCRJvqqDEAn8PDUKzRxDPRkncRtSsjuSPx23TEiPMfBrKrBBt3x8puoPZaB54UwE1z",
  "key29": "v6S2mPKXg2wR2HAxYGTH2QXoyVMuUMg2NUUvTKsC9UcnKVes15wjFNdpS1ZrGZg5WXphmzZZ3ZQYchbxUVWBimE",
  "key30": "YEUmkHCs7SwAUXXNNT8otatvfrgCgv4JhXsPU6XG6f6nMutGYEVLcs7FXRjeDvP7MPuUdvXpYqNUWwXKFZAwiSj",
  "key31": "4FDYhdwq7JuQii3UMapb8JbsEPW9YpUoAbXf9uixFSMUpVkvWYJhw191yTYCjocS4YNYg7eDgUqmL1dXiuCJcuL8",
  "key32": "972ypcvuCZxnC8L1wy3PqDdv73PSPoVq1A5SKM4TSzfzWg64E1WaQEEDEwLnsVDjPiteUMLnKa6xLoyxZjcVzNm",
  "key33": "62R2Hf13uC8pjKAVYWdY18yPxaMCdE4H4LgF1R5n7MqZL9aPp4Bn8Kf9HZrgqsj9znLjjeGFkA8YP4DychKne9yy",
  "key34": "5PNQZXEfFJSq6RxAK3TQ5bj8YkqjpoKDekFcyTBPvQTaxBro8hhQDLAESjkkDHfqY16BmqEWH9BUBx1v6s9N39Gf",
  "key35": "2mh5aewgiPDeTUH5R4aRsKZKm8AGwiyqyM63FPhmFsq856RsKWraTNENNcKEoSkjfL5KTDVayqMydu99b4Y6CKB4",
  "key36": "31axFEX2TRaRTjddvBGVBh35Up7cNz6tmVoqSqPFfy18LcfRaxE5cgFF9rqdhhq5K1xofZUeackC1NxxeiLVGkm2",
  "key37": "3DtDyD9WjhYPLQUx3XALPzAPz2LvaPbUWt88Ro8129bRbTAUAP7RJfpJfthmpN65QuKS5T2CnrLjizrbVKqesybo",
  "key38": "2HbdkA7vPLwdXkYBnzZpLaneXJCngkctGJbVYraJZ3zumg93vLW2yf6PWkc3gg1QsB5RkMDcLwB2kak1ptBbv67g"
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
