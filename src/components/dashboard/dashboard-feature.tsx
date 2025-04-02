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
    "5tWawX8D2P1LG2eivqVHLnqW8mwEPbFaeGcGmkcszFMqvaKkvyqjBsDgPZqKN2X6bjeqW51hxfEMJLMvpsWuEa5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nkgCh6yCwmaYaFFP3fXBCnTLTFW93TFYeYecJCbMrtzboc3RAcMBQHm83C9NhzKyTgateaPNfjQNWAww9fKcwBj",
  "key1": "QFvEkcRGqCY8X3RktzawbaHaUNZdHssfrJpcfu4VFYxB2Jck55mXjoZX5dDurByQkhz6vkdUWgLG1pSGj53mUsv",
  "key2": "2WpeGQ77VjdExkafnpXGN7u3tGiufz3BPMp7rmeFttb2cy4y1EGLXdmzWocEvyv2tQvZJL2bYtgbU9dgakGpvagB",
  "key3": "4Ye8CSUfeQkdLPwEv3iN1HqX5mujuQqMp1sDBCCRXumRtoyTwWuwAA3LtckJokZBB3Qh3BppHj5Y4u3AgpjfGtYz",
  "key4": "317PTdpzJkNULzT4aoBydngdN4815jQ3oSEkVD1dckPyVTVmV5mhExzy2FbrdaJRZLsKag7VjM9MSZ3gtXojwp6B",
  "key5": "5HwSQXGMRHgaku3ziMmeumHMuAMdnQ1wHKe9XcA1vq75prAeXLZHKr9ud5gbnbmw6yCc5edUJDahCKPodkEedyyB",
  "key6": "4SSwHXAAwf8Ei1FgFNEQcXRkrdACzPfvXQyQxj5agbj1zGQZYd6jRZT2wcuTmebWtJaQ5itKpzpHTbGdexV2UqY8",
  "key7": "3SamRVTaze3gg4XZKcCcz46ba6UtcQiihJi3zfSgtEacnPcibZ6Re61crJrhwriYCR9hiq1vG78DfPdiZNypEvpd",
  "key8": "5Y9r3pKVGXxyXZbYVkDpWJuhvpew51kUJ6ZmBwUKxcQfQog4mSmYnqToH4jTefiJCjwhWg7q4Th6zgvy8CnEgCyV",
  "key9": "662Deg2ihBF1By2mEwE8KCbXuTPnHPJX1yohNrvzZCkjvocSLgU49azFVv1ASvNRWHzHW9vDn34utizLE8jJ2ho1",
  "key10": "T5Fba4rWFdymokDRNL1bgp4vgSxTsA2TzsnGZGvCMqvj43RxcYHpdrypuAebcLGszJL9dwTJggcFdjAjDB7JESz",
  "key11": "CqDJWe77Xtan7yfb9MNRTNxGqFc1tV2vE1TiCSjXyvpJFjWsT5ajPQtEfB7Dz6Zt5kPMxfpTRcFfyyPdsuDiFr6",
  "key12": "5v2jMQ2CUqizS6LzMwJXqCANrd2PNXnkCCNm63fPyaQ3UnPiLkex46RsmKVwTVwDnMiXW4mos2uQVfPiPBmjuUJf",
  "key13": "6owkoy93BaWExmwDNmEaHH9fiZx7V2oofzA4iaK2sduyKG6PZ6bq2Z2eSy1RxjEB78qEcqers516h28m5kJz2fX",
  "key14": "4MSWkxDriUdAGtth4FKx6i8idBPwzbE4G1tSWdzsRqekyVn8ku44TRSLrytcfqBNVuNRVCsdk4racRFJWYhARqZr",
  "key15": "Z9LdAgYQYjSjNiKGPn2QcDpdoFPTrcWjagGAbsk1Ct5nYW3tpgLhA7NmnuqKJfKDZpP9xhxd88FK5g7PsS3oYb3",
  "key16": "31CMpxSP3LtCd7KHvxGqPcgru9Wudy9ip18AfVNU4ZSkNrpdeGv3HTTC4gWG3RR1SMfHRgcuVizGEtnED749Q8uR",
  "key17": "4NRGSB2LKJQcsQaqapx1jXw9ibCmHtw5nyZsNirCy9eokyMpa62P3QmYQ379Vy8ZhxGX8qhNohhmKgAaBrAvtNVX",
  "key18": "2FTxp2ZjMGMXpynyF37reh8c8GCv9yUhMVReA1SQxF4n2csf2NWG9LGdbUaHKSY9R847g5JsCEZrPedieYF2aeBM",
  "key19": "4cRjhG5obGHQRB2UWvnwzgvBvG3NiyZzAnp6MX2dULTyp6qSaJ24JqV1Pkk9zKw16pJRRD3SfVQr6wZuuDJkLo57",
  "key20": "32JhBPHdrZM7HL85721kcDkS2GX2bYENuzZp5J7TXAX9C2AoSjtkhLdZoJCA45UQxiRTJMNS5KtM6qnxN5gfyG38",
  "key21": "Gghq6QNrW4jeGJkymx1SxecRRTDQ5rocjRm8JBCRoADV9E8VRR641oU5LT6w3hrKFKEz2sLqWU9B5Zjvh42kmPq",
  "key22": "3hnaHNgKzqLk8Wbv5yfhqW5WrpHFawxi4npNV8qt2VkdoqbggrbEMrbwEyHvUWvgZ3ekLgWuRYZU931T1CM4RvyZ",
  "key23": "23jbEQ6FWYeF3foJxsjrFjmBXboXhoGgL9dQXz8pVW4BC9EBkgi4nLe4omf5LeuYyxHgxoN8nhfR1XJvHqSPc8yG",
  "key24": "21CXfZAUTEzgFV52nntaNheiGmYtsJHENjCRrUsT8T1P9YAF1X4Voj3pM49fMrfMwHEirJtprYDvDAaFmFsDJqxM",
  "key25": "493zpWRHWFiaw2fH3GDT4qVHsURpMSqW5LB3qH7WxuCoNnhqrXmcuLmKoE8eQ9UKSjqu3jpJucjDs4TgDnLS6tBV",
  "key26": "qqSeBfKjp5Sgg7Xbn5b8nohLfh5PuxzdXQNF8V51vvNmWt5wuhDKGwZHyMBfT1pNyaPQaBPk1uQFmFVYJSHk57Z",
  "key27": "2p3CP1i6b8CZqtAUv8YUmB6CwdCLKDzdxqHHk5Ev42N3uQ4JnQhXgXni78WVavihx7NeZh91qtQyY3EwBfNTPGEx",
  "key28": "44tgPmZqmxuzfY46yUKKkCUFy9b1pJR1mgcBX61CGwTFtxQsjpNHnBR7Qm1Muqze5PBhoVUAdM28RMsBgQyu5a3Y",
  "key29": "5dGZho2hgYMWzWUoT2Z5T99MkTLraPkDx7Hj3ev9K6rJao8t2L9Ux4hxrRocGPymF1U8SRdXokFD1fVRDfjxZWQg",
  "key30": "4eidoBXQYDFDnLAt34fx8ri7ArndRSZrT7HWRK8mtcHiyMds9G78zUXog95iep7ExgWqB4S3sDR9WzVBjpPVv4aA",
  "key31": "3bWhrBBdSTfYqa4ddoqR76VDKw2KTJrjw9kQDGSALLV3QnkXNzircVsrXX7aD11KfgVYZykU6Aps5BRs57DPj3np",
  "key32": "4Q6rhi7QZ4Fwr4gXKKeJdx8J38cmTM8dTmkpkW4ywyWGq5ootJtcFGevzXvzkjLFdvNv1ifQdm7AbYbf27ah8jxC"
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
