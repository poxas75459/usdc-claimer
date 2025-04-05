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
    "3QvYWXHnWAAWri1x3R5H3XLEdKqP9cvjmUeZ4t4RRNYiwdsvTPLDRModBhJBbFUCpcTSgibKr2PQ6y54EvovJ6k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZRRduEbv96zcW44x4TPPJA2Runc1UcoUU9tkCKaddP4KK111PuibnHjofP6MxRzAcUnSN3Cm6oDmb6t3ApMRKob",
  "key1": "4iKhZ4ZfXQghFd6yYBHvKhxNnquqqZDxU33CUMghPRaCarbyCXzcqefoiB4cYnMnA2VV1gQ1UZ9ZDyEEwhnoAdpp",
  "key2": "2N9xtjp5sgJq6TNB8iwort5wxfYEJP6a1wgiZKhkBeiViQQpxyC1avFmBZtqndK9MynKFxQYE21ygd1RdtK5Utct",
  "key3": "3MRmwG6wj9U2d3MqASDLYDMuX5nqA1u62jdHYwim5tDtCANHgAEfSrDNUf9L9tVLHWF437uGjdhZXefDoivn2Bef",
  "key4": "4T81aMFNgPzoDxfZtFuVG5eSwTYMHhKFfvwtoAUAvC4LPBs5YdeZi45rzkJuGt5YbMPu3gA9LJYFKZMQkuxhEaqS",
  "key5": "2opubjzvgTsh3Uzb1CfyVBREzScHAGg29vZsc12uVKZYjHX2dcbvX9c7hGKrQFFuG1J45tk1G56d1t1AkSnaeAVB",
  "key6": "5nckB9YG4TBaTjJsehYFp36xBfRh7DMT4jwjqMTJcovRSXQxwXyse53JPUqtc2DdPk4LZ6W5XbmveY84YeyU2Wcy",
  "key7": "2szmm8dKQncMGPivf1cdCU3gsHk7CCSJ8cL593UgxJxTJb7HDTujeZPYUsYv7yhLyFsnyk5MSC7euRexkkQS6Ykg",
  "key8": "4psX12wm6oD3Mm2y1s1cxAgs8LJim45YKdE9QiSwozTfdjtWcBTVfahTkheQE5NUMfk6ikU3Esk1atmSNt1hrfEN",
  "key9": "5Vs7HmBaia6jE3iQwtqbCbDBhUTLYMTbVaQq1tSGx86KuCAQGaUfHSEe1qFM1eSsp2pe5PC4Fr4Ki5N9nr9S1qPP",
  "key10": "2HzW4MCRk7jRbvF5CaNj7Trr8T29KLVNjh3EvoYr16aWVUVrbRPmvMrefKH39dMk19etDnkyJ7gE3xv9dXRyRhx5",
  "key11": "4zTdtcgsq43dk8yv1HhdVfkkQ8WbAKwz8AhjbLA3mPHis2ihpxygk7BxJWT3gKhtk2vgqNdJ2cs3rHUjgoNfNA8p",
  "key12": "2g6z58NWqjDj8L3R5FSCk6bBdHVUZQUdRscVdea5ptCL7fUugs9KkxS3ne4D2fb9zNr68bQLrpMS5NxYiBuj3gg",
  "key13": "31jYQ7epU3pynuN3utWpY5xBuubnUYsjNEK3gJnN2NwYLRiCr87NEY5wAkouMm4nYp83nYJPHtSEL4Nf4DtuHcoQ",
  "key14": "5o8ELahCKkiUuZLXDo2gBoQtfxuznDFnaRAfmWzncxhrRxyQS4ion7MFqgu7bQ9szeGVSpMQSSixkDsPSR9mRjMc",
  "key15": "3saLbqBjT778KDEbf11M1W4mXkTMUpAiMdLkFf1U2nU4BFvK83PF2WCmkH3CoxSi3rBZuBf1TEQRBdnyxfy3kYD5",
  "key16": "5H2tiVdLTEV4YS1bC5AoZPb341nuWeLkuhMLaveNAqyJ3vCFj781S1RqG3v8BMoWP76YA38EBa13LexmR6fBL87W",
  "key17": "5rPmL7LQmSByv3PYBchhqkGuUzkyj8fvCT8y8zUyQgLSeuKMH8J4aJgtG3e791Cytdr29mkHyhzVQXryh6gr6YA3",
  "key18": "4zaGi8vGoYzHiPGndHxuLNpyKumoABTentMaEnwQdivtGBJQPz8YhDnyrKt8xoUyBxkM8dzuX85xPXyNT7NDYPca",
  "key19": "3znJCoShCjEv3hJpD7Eo5zre2tsiwn62xZv2akWPi3MjtjJRANZMD1HRb7tTbWr9DYwmTA8tgm1yyuQxfQz3MHJL",
  "key20": "38r5gj3cDJi55EHrb7SqxhP1RKtZFdVP5KSq3Dsu6jimeqZrEj8HQBttpY8X9kBKJZqpG8bpwa3J6GsjKJSf5TqR",
  "key21": "2D1wMUYeDyDVpqU34TfKkmDHyCEuapwvsf1EjRMAQDXBgGzgm5oXRfimRGZAv2Cvt4KWxKPV216QLg3cmGFsGcdo",
  "key22": "63L2cBJaLAyMWcbxCC2UviWxPgdusMJouGdLNsyjvpGnVxcgscQEiB42FSZSRfPotH5C2RSbkQ2setcHLoGf27DA",
  "key23": "3NQ2E462MKWM4KWbDkAcR1HRrkcF5KpMwC21fpwtqpai531ZYqKSbT5XZd7nk5teXqzdSwbnioyuzyRpsxrqt2Ku",
  "key24": "7CigQxWVq11667pccAzbUpv55BdxvQKomiGgmS5ru9XxVh79SS5FGbx6M91vrX95Pzk5QuGx1zySu89BNUXfw7U",
  "key25": "6126EMWvXerx5Qb6awr2eSbXpecSUu9mXt5EqNx2hGPm5XLkK6XnZixXhiZ97cGHPsvXRYqn9RHSwgKvQ8pPwRSC",
  "key26": "2f1t5nsD1oTuPCXuS6Deb8CMHh14key72HyWhqumXmqXeBXgRebBzggQ3cuZyngYd6YZR7zEvcyDwD9uGbPEkPns",
  "key27": "4voYjQe2LcZV8qpSCqMzYM7xze5C4HLYXVf4QyZELHNQhzFy47bt4gk54t9Sx7MJxRhJ9iSRd5KVYkM3QkYhLzyN",
  "key28": "4jizTs3aahbVMiX45KNNV3WVojEubcW8d9vzvrMmzeYU4F64icbxzonhaP2ypdTaZvN3Cp792CmR2vZpyoJghyA2",
  "key29": "3eQVt7bWEerLcbCHLCv5mYJ7X8VEf71GkBGCf41xpqtf4GdJQH3KLme7KiD7rD9Wd8AUfEHgMowTZnhjM618Lsty",
  "key30": "4Pq1taMyCu4H52wGL9W2ZAwhRtaHwhGxVDXDSLe92aTYPKnCr4KdLnQf7QnqPssyArgAzQ6351bYgR5sRVVNMVTT",
  "key31": "3x67rULKWNgWzAK6VRFNKXG7Sn73XXZqHdqDGMHbNucxHvaNaCoajtaG87cSt3mNpf1tvKUv4DJ911QqwERJYsri",
  "key32": "3MLowHtU85aJ7Qej2vb5bix4F1DFEgnJTheSKqe1EfFY1keahLbcaFBtVYmTnS6Vz54nJ1DNSdFFsTTRZgHULChg",
  "key33": "2wtpDXEyF8fwh2qVKJfDuWT4ECGGVdLawaFH8RT4j274cF4TycK3DRV3vyXyYoYtiDaMFkV8zrBw6DhdXjKJWG5M",
  "key34": "4vuENuYf1TwUczFHxEJmGv7Q2CUoCrAgfzV8YkKyCsTgCAFHEfL4zmaq1xp3EHpGAnP1jTksTDNrMpKTU2t4LLQx",
  "key35": "2HYLzvxLM2N1B6k44M5f7d3gwQC9cL8FfcMVhcf8H15wLpBkG3Q2vvabEd6EU7ycVzAxXa8ofGcfdWaAYASxTYWs",
  "key36": "3PuH2DPGL4UPV1REWHfa6GDT58EEejo1H98fSNo5EQxmCVUvowrQpbS8zb41oC6CobbxcbWNpJoriNvkekjHB5X1",
  "key37": "mabsMcVRPBRjhZu43phFRaujVY9YXwUabuFZiqkAResGKNqt83EaisStNhCUeCaUjy7VoxQduzp441aAqXc6CGN"
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
