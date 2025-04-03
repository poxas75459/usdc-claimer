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
    "4FtSSuwumErjrJJjRkGVDceDdztsvXTm7vmvuHVX2LD2hJBBJpR25pCQUydshdwCRY1sJTJqRPra2e6k8YGrj6st"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SKnV2MmJxf7kGq6EZACQerRyZWrkeXHpM4aPnZJWQsqacWjy4At8gdvEYnvKuC7qx72FaPskjbSJocr2mo2xDeH",
  "key1": "3poAXVpRJALYFKcxhvLLoczoeApVP9cFJUnqEssbVD9nWeaUTNZqsHSQuBrNbRXHv3GBicMMT9AFNYDiBGgwsFz7",
  "key2": "5rDkMiGVLYVS5F7T8bw3heexLYsGbiVG2QKCBFwfRdiYy52ibD3KDvzSSxf9jTvckq1XnzXMoLdcA7m9TuuscHnn",
  "key3": "5vy3nDmaKxESwntgELua3eaoDyGNf3Hiq2uy5uTY8HsDCca6DwExjnsktJ5WpjiBFVEep9apdWSMopxcr9xpreSv",
  "key4": "LvCXLVJzscLePtabVn8hJrqxEfEsTW4ffHkxJY7itJMyRxQKHPDEXB9g6L2e2hsefxTkhaPK6A4xRiGQP5uoRSt",
  "key5": "5zZ33XFgmcC8As2qtXcBF7Zs4yjiezP2ehuBPAdxonuBdMnCZzpG3rqwC357fPkbqLN7C3onxoNBgBtvjHQcuhvr",
  "key6": "2dGCs3d5DrR59SSwRzNBv77RxRnzKZ47Wbda6asx8Y2993wbfLacZoaUgPnipcKLXwBXmxnGn7DBj1spgS3f1JVj",
  "key7": "5oKBVekYAJqR1DmUcqgnxrtV1Swe3v1ewGErszwBm3DJykgPBHa9rycwDhS5zHJ4XKW7JQQDqFx2wzxrPpAAswmu",
  "key8": "2eFeCAeag29SLSnUvbhy8xbbCUWkNaP6oz5sV92rfATfuGEgz4jVApPncHbACjRW7D5QiKZo8UJtPn4ciFz1reS6",
  "key9": "2f3D3SgMmcXSPfs3uiUqf62bZMfnj4wz7QovxkdtVDyQ7PDPqJ4VHcTEXuWbFVKXarKLWxK2j1aH2rKRVG5s1DCh",
  "key10": "3y1YT7S4cvpXstnnjLrqDvtgXnM2ZRK9EAMno4PgGMx7BJjG8Ce51L1WMuM1em7jh7arfKdiyqR4uF7uxuPfZbqq",
  "key11": "5CKS63dfybGq8KYPDS5mcfbVESGSpPwGwibRMWK2co5yYMV7PP1hVKn2LLQXuy4EKwqkonGNWYcW3pefCJ1a4JWu",
  "key12": "4wqNrAXgmyXJoi1C5pz5NXasBcHNPqBRceo7bAsuq6EsqQrHBFQvmtjc6kLP3MYzSHxSNL5rp7vx9Czc12zuVis4",
  "key13": "64LWfZPLCmfkREYt4deCZN9TfbfjCg9probAg8Deq1Brz7bUqMq3PZR9wnM4tEddrvJJ2jo9jrtytE5JnZmaqhWQ",
  "key14": "3QFziasDV7vXQphQ6jVc3QUXSPK1H2CA1PAiJqtwcfKY9E4ARPuvffcvrFhMAaRPFAZgSPhMake2nF8XZczxSzNv",
  "key15": "3Uw16izT4GGtSb1ot8CyxDgSqEFw1cpbk81DUnxcHVtwiF91k2SUQGcsHF4j8ov24wApmDX4sEQkorzJUcUvEr7C",
  "key16": "5f9yoVP9yEjTfGv4NBFSEaEfaRDEViWgdJesb1HNo6TVcaggxS1Z3jAbXezguVATTiwxgNAbzh5GVkGEosav2gpU",
  "key17": "2SNAnZ3CCrnddmgooDJgfXTQvjJUtZWaJnHYmwGpPQGGKheEHMT5bodTMegCY4PuRAXaS9embSNYvziunjah4X3",
  "key18": "2nw7bF5iBxZTvKPmGJSKJwD4M7fU9dioUqCot7rjQUYfXuNk8MPgoAmVsWKfeuAA9St13SDWLZH2KNorLw3wEyRV",
  "key19": "Pg7mJZqn2XP6XKdVbHZxrtLBRY7KUrz2oFYJWx38xG5MiVf719Ewt6EuVuCKLDf9ULpqdjgw39apW6BPDUSiwH7",
  "key20": "7nuf475Qv95JSDeMEfas9QJvjovUJmnP6j5rJpE8YRwm5CwkY4Syq2QngVYp3VkJYRiLLgMBt1ksmUu34j5Uk7w",
  "key21": "42Nxdby8LbpSifyrQSK2ssn6aKXqUtQeWRDNQtYSMwE4fbrCT1stuqdrCu8mYZXJ4gwTFdV1FXR6bTLLYvNhAroF",
  "key22": "3CNizByisM9MzeHWZpeQqYTXSgMbyb786KUejV9LFxkzvp95PDLRBUqrg8A5g3PzXCmrEH78oXGbde48sKYjNodm",
  "key23": "F1uqByfTktYNx5Q7QvHrBhYPYwvdSxnZKehxJcY94G2eyppV3hkAz5xp6Tj568r9oP7tHH7go5E6qrsq8i56Tz4",
  "key24": "53bGpyTWkS1Zz5UhatxW5jNrCKWmxTxDJEAuqXueFAiTvcKNduh7SABq8Umyjh58Y4aDb8QfMmxSmQoYYikyd2qc",
  "key25": "5AtoD6m4sBWbRotu7UNtTXNokuAVbV7TsGgLZZiaC3xmDYQEBMBuVBZkPt8fYCNxw6ooSBuZ5cxbYsoXJCYsDmnM",
  "key26": "24SidoHmANFaTKxhHnpfA14tfB4AMaLmXewx8V66vcRX4S3KJxqwV4NvmdKGMuQfF3GN3Y1W3ohLgqkBmBP6wpyy",
  "key27": "hmK2A7uxj5w4qbSxqkqbA7BEJC4QPZ8FM2kXoHqBcbZpHFnajHNB1E68BUy8HLL6P8B4fWxYnYk45oAuWmB1t2c",
  "key28": "5B7EeTQmMVCvhGwuWAkDCNUfQS38JWVXSxXeP7knR7VGtC22dnEEgVcWkgJVTcFgn8vbVLi6SAMfDULWH1V65tpR",
  "key29": "9yaAToBSCutnDo9XbJCDWYnudw4pCZuTpeDZCuZiFvYNA7fNzwACdMsXGbsHv6S2MD1kQx4z5XQpfeVEeeKGLt8",
  "key30": "5D43o7u8KeLrPzDfCv2o46UqqXhysasH3bWSU5Pwi1NFjNy8NocbRaA4ZNnfgK3YUfAfyEfDb8CdShi7srRBqhDa",
  "key31": "2PgCieQVK28Zi1y1JCz2ss9cXuD92XpGnPyiqdRwB8AaGCW8B3ATmfPfexbbgFgfqrQsJuVirrinZ3JfB1eE6t8t",
  "key32": "oKpe2cUW1e9Zp6YyfCNz49xo9vSQAFuXSPbGRq6Q7BTS8GV96y7vgwr8gpRMYbjZ9EVxPuF1fpbT9mePRyJTCiM",
  "key33": "3hXWiwmox136YS7ottorEdVtXgUzAAFPYnS2Nhtt72ZjPbD7B8qmBuNYQS8WVXchCCy1SK2LURfEHtgH7jHpykBQ",
  "key34": "DxGn3NaiUbdb24RCDx32bCrQuDar6E3MErbncWnJBSUsyYPQftyTn58AUCYRxyqs4z2yogiYRQdPGK3MQrzxYVH",
  "key35": "4rfimn2miH8C6BPSHaSrBWSAuhd6NCCZJ8Axpag4NFZKHPRzPvKT6VnD8tYBGpgWZXrx674XKGZNyM9Vkpvpy383",
  "key36": "3RyJqq2iWHJL5BLjChHYdff398s3x6mZ4dUypZXBjPcRSky9kFjGmnLDvFCmqCqQQ5wCQ45AT6B74Wp1TEX5zWbU",
  "key37": "3xNo9rr1oSsxE45jWwm3jud8BKjVZq2aVezXjihKKEr6tvch3pjmEY9o2Qv5mRA1gTndgaiWq6uU79F57jJXBjvL",
  "key38": "4Neo2bEmMaSpU8wMghQpdSvGXWEE5ymayrCVqPYJXXKu8subH5GC3vLrkYm2ToVeDD1g9EbYdoWWTfFMT9v5XSGY",
  "key39": "WJsuRruD9mi44DmzQB9ByLQbn1PvDLNW2hfzrgC2krbu7WGUVNGVBnsTzJy2PRATFxy99oeGGtJhkq9BGzGS1Uo",
  "key40": "3BSBiwp95CdTkmMaL3ijMYPH1XSZiDX3BBWV5ACeP3LqKedZnLbhJhdZNkALNwYDEbU3pDT11LihGvgHkycbVM9m",
  "key41": "3Ei3N5d9e53dHA5aaJ2TAmTHRqM1VxjeXsQgYd7B6gBxCjSwKfYcCXqoETfh6CpeNgoRXN7WbFRaD1ejMbg6pYbz",
  "key42": "5GURmUC5srf6rYLrs3pRguQ2xpMPKoCFaNYSzCeh759VLM1BVUT6SU7S35v54HgM9jsYxYV1mDFywrHSZ3gfRxBC",
  "key43": "5uwuypUjq6oC1vQ4BbWBpeQKqcVuAbbC1D2nj6rgsXHxiqri5wd2BUfLKMMhw2eRsDGkQetogFxwMLXWjapnqrb3"
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
