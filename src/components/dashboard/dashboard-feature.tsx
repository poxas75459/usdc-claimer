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
    "56p9sAMp29VercvFBfqdBVKVaKdfYCqKVYxWPJCb2KnZyhWogeHS22GERzPggv4iopTYFZcL8Ld9etMKJGrVzB21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vEbKTnbDdvg3gCVtduXch7Rab3TDB7Hv3ZCrJNv9VZJxwmAd2FjBwJvVe7Yjbub9EeUwXW1vUdUzqrVuvhWCwkx",
  "key1": "49YKgyUUPBr4WM1hkA7PZUGGdPXMVuBzmRe6vGNCEzq5LD1oQWDisZY4vhZV2MX5FBQHVtLratBz1XLzME2xt3hZ",
  "key2": "31XAuVMzKtEWdrvgogCw6fC6QHpbiQjq9MDCYr9FtSHW4XMeKGPpRd8DKSpy5fpEy4qYKmkUB7EstHHHDTUfVNnr",
  "key3": "35ZZjGqaYsXveoSudhN8iv69ww6rqa6wtxDe1GUpxn78HmsJtcSLQDzRWqCtCcLnuiXxVUaLzgVnoVwpypF8q3mV",
  "key4": "c9KW51MvSVm6DT6Lt4QMBpLtTMmBaKeMH11ePeMZJTSb6xySW2yicYSt7p6fuyYnurp1rNCm5FxHeWCJ5bVwTyh",
  "key5": "44UP7Ny8kg5s8w7rJMryMdAYNZ6Z5SQX3kBPrTWFaApvNkALt2GuPeBaXBmRH4PRoGpL4qs26V6ECpjjTMDUr2BX",
  "key6": "4JZ6hc1AjWmZScDR1B7dBXBLGXBGuX1pAiNjcnGxWWWTJuUACWwCArph5gUwugvXrTcAcEZhfXwTXVrhBTe9R7vq",
  "key7": "5o86UzU1ap18ePVo4MMfs3yBb4Xe8MNrA1ySB7PQaY7x75Gfe1zebsGFmdbEoZxn3JUiM5WZefk98WSDSjcELBod",
  "key8": "5AY9D3ytxHWaj8dEUtrvSv9qfz9WxMQueqboPai8vo55J3F4wP2FocuiuzQEzNX4BhrHErs9Kf36Ajcu5NrbAULS",
  "key9": "miX4iCN59GzKfMCa52b8Kj4YV4yVqrCYwaXKzKKgNCxtd7UYmFpNWUh5wCPnzvWtqPkSDBY1MWpkWrpWbnrA4x6",
  "key10": "2dxoMMiXAm7CNnySsfAWmLwWvAKPajXPG4omMv8tGJ7y4cUNDW4aNZ7qbndqfRnR4btEDhtW9bMXeFvUXrmDtWpZ",
  "key11": "3uz4PpsjP5TfUsSng1ivVxWXa1wF1ZJP3iFT6FeSi8C5CBjJTMPqjWFHGLkYkHiB4dGb9TDQ6V821T5q4fNaE7eJ",
  "key12": "4VJu35pH85JYzDE2oc2U94KWYRX38ynaVx8BHZ5bpSwkwMQPrRPuEayQGKdFUJNfcpYqiGA3i93u4Pk4ZKsmRW8B",
  "key13": "3adixe6YHLwYg1bkcpmA2ZvW5gMawRLgBBVxoLxUYYP9v4J66LPoPmHXqyQCpxcCxTK2YRM9E2LjuP218vfepFvZ",
  "key14": "4mq4z2zmYCLWAVDDNBjw7tSuc5e1xrx3WY24B3D2d84dyUoaVNaHKwPshSuxUbjj7pyPACUgTE1KXy5rhekDEyiw",
  "key15": "2gcDtukURAcu6PGJkLYKU9ynZy58wUE9K3DURznE1L6pBzhDSVe9yrN9sN5xXyP2YjztZeMXZqFtTQn6ZcboV2JL",
  "key16": "2NKQYWEWpKm7zWUfmkPn8iUBqPU2LyHWeonU1ZerQ5pHWW1WP5Z7HQpk8G7KCcUp4NDGsn16S7xh2HeFKh2MkBU5",
  "key17": "Nr6qPVS89BqxA7D6fcvnqvcNMf4fa9jU7GYirY5ayGAPwWnqghFmWbWhXUFaP5syhorY9iq4Wu8b6oUhvKZroZz",
  "key18": "4nLQfMSE819JoUmmBochTdeAcQymdFVH6qKgbTYQDzJHkyJ1GfynEFcaApTg9xnv7GFiEgBZbsaWCQSUw5vMp35F",
  "key19": "zHLkGFauatazUPgV2PCiPquw4t2DoHdm8s2wgALRYqe2xeZLC41tKsJgBHkzBRbFsdZHWs2FamkS9HU9NA8S3k5",
  "key20": "gaanDt2dTgfLitYAYhLvwh6F4QqX2GCZA9j7FEP6LJUqvZrMt6b8pjaYzaURdUsS6hickvCiVSPv1qsBB5vuL6X",
  "key21": "g9iT7owGfTNWK7Pz8eHdp9Qrc68tBVrGFJrdscbpVRFQUguQ3iLMeyjp5vcW821e8BxE4Ri43BmUkvhvozAdnJE",
  "key22": "5QSrURQ6btT2TJ72yoyESm9LchGnwry1dHxRphGZA5SYWNG1uzPtwKGAYTCkFo9VTUPhTEePBA2ArQqLxZwYzDGv",
  "key23": "4gBrds7MMfy5xGFo9bHYFSEY2mDa29X9pZsjgerpxBkEtKcP9U7p6bDuTrgK1mz2ecJqzRyQoEwHkRu3aEVnpyRp",
  "key24": "2bLU8rvYxQoQh4hiCgwJWzbMabm5pZYdj66XmRcZu98AhUYU3GuFooyHTkkyf5wLcvmDTnGGktn7jZ4EGcHXb4e9",
  "key25": "BGbqJcPCnSnmcEqHuHxB6nBq6NKP42ctS3hBM5naYE5zEfZRBDXX69eZhkRakmhSi4zqL4QgcYFJ41vWXZAnHgh",
  "key26": "5hjYTJEM6AbbeohL4Lgi656TBvJURTUVMaoUCgdbv1EzQgBuzu7csSVRb2ifnRMjrTFyiuSZ66257Vvg5afmX1Ua",
  "key27": "4yRgo65ieb2KoiHbN1JJp6eiJdp5kV2QxFG8zmT5tGc5detcKs9GZL2nGHU6ipup8ASaWLj1pSaGxpopKMkfjdiY",
  "key28": "5wJHWjr9AQxboJcQF7HMXgiqCKweKkfWHjrAnRYmaoat2M54Cz8N6GHciJrcadvydmWRYywZ6Z6jdpL2ua4D4BQS",
  "key29": "4feZYhcgcqYXBg5UrAPZYi8P8tSwEUPTUjxcTRCc59JF5jf7Cf9P3SGhDhBEzczRS83FrhLZkqaYpmUpH1KhmHUy",
  "key30": "QHDfQUe5DYabfwn4QYWhZsv9239a7MH8N8iNQpfY2QAPJoeyC3MqLDExHYKutXKfgXVyiX4ELtakJ6reRj6Byip",
  "key31": "4oTCfpRzCzYos6VH1yur4mqn8E2wfE1QMZoL4HeDLTSiBdd355a1CM786XufwoBQQ5hGJmZgnertML9curTzZWfi",
  "key32": "52yZH1cJRKUSQgMsJ5UtkwojdR25qADqUUFcEq5NTcT75fE6YLaZnP4bguKbt5TMPiTW52MCV1FFL1z4qx8YXEy4",
  "key33": "5xNkXk3sC7K3rcncv2HyKcZWqh4a6BFDj6LGw5h3UAT3tEpmLjsCvgaKDXkJ7gpVLbec2neLZkmNuR2FTQritkGg",
  "key34": "5Vue8kZq6EMRDykecMES7JVA2YEhG3uEzLVmPLUtGZGBH8EXQg8yUanH49BFsdzDUFMxiqXVDG5g5MtKzg4FuN2",
  "key35": "59XCm7R2dqQCgC77wb3B9YG8XcJYPpx6y5c3WRERBG9NcREvnFM612auxpDgYjmeDCh8cqDFtBmPVFyYELxgmAhV",
  "key36": "2d2MX47aY7oAvANLfSmSWCMU6Lma5fjHgDJsMVzJFUxKnQrvNV1c19mYZwTryPk4iSZuyhhvE3HgppPDfakDR3nn",
  "key37": "jwM3HirpAm4oFho8Sq3ir8N5C6rLAiR8LNbjddky16oQ7KdRbHSwhJXDZMfufUgXRhfEzhp285UvBFoPnEHTujH",
  "key38": "4S16x5DckbZ8DxJnhRMiZrvTRiUnUoKfqtErDeSfXBScc1oTnb9b2ST3zYDCcSENafaVKzYzJGFCtZoz3vr43Mpb",
  "key39": "5dzkjB7hpXBYfv5zXVC33WBZh9Nan25DTqH7zWXzxbZ4p95idpKUm1mHAVjeKrRfVn4WQkQuHwfnMS8Kykq4HNxA",
  "key40": "354ywFSgndd8crzygQXjySmqYf5o5nJ1Krk5hfiTTTnbX2ieh2LFVgPQYzR4WXCh2AxayJvjy59UTxDTkDTRAZSQ",
  "key41": "3YhNjJVB9ro3oDdiLShLG7XJfUypEkSGzTUEhaumTT2XXVNDNSDHeomBsijheY2a3s1tet2ker2h8R9L9kSFRcKC",
  "key42": "2WK35LziwsmS49Jjth6z3VkZKu48bbkDbknkAzYmNTJ3UPiHaVRhczzSME58SS4qMLZ2gZC3d2gkwJ566v33L9zU",
  "key43": "3voij1jSmTWzRUY2XE3VpvkwZQ3odsDcD2rA7h46RYj8UQZgfQ1WmK5n7z8jejzUFwWndfoJE9BReXFDmCnrVByF",
  "key44": "2tphXSP28raXHsyXL9UGph6mTu7Ymj6uvXLU6ALz5jvJiy16APDM9mvBsmjtM5X6oYCERgYmkuMJfoJ43EUjd1bh",
  "key45": "sWs17DQ4Bs8adGuski1U2QjCE7T2HWKQumJUoetotrHNLjJ3iryjUaJv3cHFvWhgCtEJab4ivMG3SRyevLSDJ7u"
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
