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
    "5beSrLRzUFHxFErnULgsDYePajq9SfddshbuPnMst8Fbi6CNo9vzf7nQ9iVRGx5qyMBRosxW4YxywSCafSP5SUey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z739RtxCLTzYHj53DNWAybn7RHjmU7R6DUVF9D956ar7Hp8N8FoWcRbwVUGynGGZFCkdKMB6XDXtMLp8A8m4CYS",
  "key1": "exRi9MD8Tj5e9wu9tanHqWsqSt1PDXD5TZNPo93YPdhCi9emcodbyyDk3MfAu2ZEoxRH8dHQmNYvaxorAWMJXk5",
  "key2": "5VPsgYiLCTfWL6E4AWfhME18LvPPeZPkKQex6BFJ1iuDrcSsEE6CgFuWFBt35xNJtehAvy46ZCktUW9RBsz8C2rw",
  "key3": "3rgCKDY18VDewn5yocA9JnvWhh2RSSvWxAQaprNXkkkw54cNfNbiKLZVcTymBxhTnoHHh7Qotk3rkFFTdYPagAHW",
  "key4": "2saeqazwfYYGSXmZQyr8yk4Zufn67KdNTPQTbXtt9caEiUfq6QFoDML8j7vcnwTPpjcpzGJxGFzxVgzfHPaCY8yD",
  "key5": "5azSVgiT2ybomLw2Urf91ozGyVNH3dfoyP5UonQQzfYNJ6Vk9z6z4DuCMJfrWjVdG4Sr6ciFoXspZjzcenodPawL",
  "key6": "4My9ccaPF5Pc4AqKDJXscyyCs7hpDLWnoHPhTjNWU4bN9qCE5jBWHJDPjnJg679DKgidL75a2VcUYDMEnc4sXBqG",
  "key7": "4sVn8LbMakGd8qQVViXWsDg2U3uGgGXwcr4qZGJauLc2tcFKRKF9wn9SVqsPtzfmfgqUfsaKncExPEm9nE7Cd7Br",
  "key8": "4ZfdfHifevo9nNFGrkyVBpCoBvpeXC2aEUtWojQaNe3CHU7m7L6LsdmtojLX8tsn4n4Yq3amXc7j5Pn9Ffw7pPEy",
  "key9": "5wjJtYhh97XUTmiczYTmLzdoJ3fwoGQcmUQgAXBhyUZ2fXcAQMbuBjKQSWFhoUjSgrvJdui5nwEnmwKRCcVByLJD",
  "key10": "5BGzp1tWGEjf7BYDEHQhuhSV5AC68roGeWepwyTzTdU1DZiu4UqGvQsHGo74s64bZnia6YCnVefGg1qtCrbVtadn",
  "key11": "5XMnu9V5pkB2QuuC8VNeY49y9vxVHLaVp8EKWztBwWiE2a2DzpmRu3VAUEfL86vuURHLPcBFR6fio4gymQX8sESx",
  "key12": "3HrseseEZtyx75csaswCGoAcRhEmmfW1Qeqi9bCVfJLGekY4FctqX7kEhWzh3V2Ns35pyTrEGiMMpuN7wYCCFfHK",
  "key13": "5AG6Zthi7YjsWgHT4irztM12otha6v4Pd3Ua39aYBoRVY8ajvvQn4v9eAqouQSexeZ3EUnxcRW7PnpPN8J7fxa8C",
  "key14": "5uWG1C3hrh3oCq9JKryBtyttGo5kkRWsfNhrpCj1ffJj2Mh1EqfyuB6CVKRVtUNarvXk2JgGJqvLABmNzYHM2kEG",
  "key15": "Vjuetg9bssNKXQKBBt2SM9gTMReLq1EpAqNvW3hKGd1KxVDdnrDGVJ63goe3AaesFVAXB7Sf4RqeJSLK3Ry79uv",
  "key16": "5ej2cdc6k7KSKTQpGBr4wh6TtHo8ZTDoMEXaTYno5ZJwmFDtTzUw8KHdEkicjT7Kf6MyGZyLMmVMjpK9YZsJp7Ff",
  "key17": "3jqZUPQAsUf6J3pWs7EmZaAArDXHe7ejcKHE1AFzoyetpkLJMZn4ZDXbz6H7r4iTW4oMceF29mvXGM9Z83A3xDPt",
  "key18": "4zpd54jPhNGUYgSEtC1LY9Ks9xFvAt9aAxiECpxUHZaTmU8JG2erUT9CjxwrpeaCcyT25HzqpuM9oDDgD2ojtJoH",
  "key19": "52nJ1PddRYyYSv4UvpNnetiTZUZKQ2UZT6v9uNZ5AY45y4a7RXahuJRwoUqo1bLFaKMMVCj8P6bYxoHpTvV2ekGS",
  "key20": "2wRHL9m3g4tEXbg1M2xspk91ER5GCxZGAt8ZKjf3YAN3pF8JbULS2yBrVeHYVsPweDkaGxryVErGpeUDM7pDAdsA",
  "key21": "5AzhfhCsdvWGXNarY8Ye98L5gQQuCMRL12SVqme1kfFkNBzZNy4DW8vCndZXyYc98ac7LGNYKaeYT1VniTJgAZ6p",
  "key22": "2yq2EWQysUCroJZfH3eQrhB7BvW6vbhTgz3CFKfuZBEtxkZenMas1krb58tvvmfazLkLsRU7QnDdJiwdZDJEt3D5",
  "key23": "hkwwNgeQhFmpUWPyBb5Rq3ed6JvK1AkTmYdff3NCBMUithpQFLyKxg4nyWV13UAsfH8svTt3A3tdRaxJ4kcPuMv",
  "key24": "5mTYXv3bsUKcztvMb6ViB3EtXj38DNuqBSPjwMpmhd52DB52Dva6E813uRNTDTeKxdbMD1xiFfwG2typskP1dp8",
  "key25": "jNTWQANnPVSFZxfuxjFexEYYxtn5mYYfFGPAtRTCdnaCMNHfJkAAfh3U46K7WrH48xXNwnZ9gC9YNAaM9JcQRr4",
  "key26": "3WKpP8JacbDpWGYKsuqawa23aNEkWsYh6Hex7QFctzEcY3yKJXKg8V9Ub5N7yF42wRMQ6HKw3z3pZVwddCHqwBX3",
  "key27": "2SFodsGTgTGr4YrkkiPpDY8Fqag7ABe1TkHB13Uj1SEf8Z41MCUGAuu7KPi37R9yMajTmHRWHMUujxLt53mj4V6r",
  "key28": "QEBGgK8Z3esmAxV528X1DY7caQaUGGB77FfWR462BJGYBkGmQfk3qaHGG1fVhxKgYSu5tyuL6jLJDEbSGB2yk2X",
  "key29": "DhChFXpNZv4FCjnJ23vbrfNHs85JwiCA8F7E2rccQty1bPgwcisrq9pMFnuMr4pquN1XsMqsrpq6YhK8NVtTUBX",
  "key30": "UfKAz58XdtRdtGCstP7miKjjaGRWmi1kybbXRmDTgj13NH9aS6dreoChMQ5by5RzwypGLbUf7CP474PU7LQPo6z",
  "key31": "52gMrGuVMRzQTJKrvn1k5Z6PHvgDujqkDKU1bR1brJzXZZQH7sstBFCRsV99NBuXHPb5C4yAeTEXPNgzbBYGQTLG",
  "key32": "3HuFDea5nfwfd8Fb2z4Rf5Yycfgkt1Zc7ZqvYyHWJCo4bgXp8MjHTovRvLyqFhoAVKNEvogWKpevvR934GBUkGt3",
  "key33": "4DhWvTXVstMmwd2ivxHzbpdxowj3N3McUe21TNeFcztMMfftDJXpecEZSTDYZLnSbFMU3qc324RTR3WQTft62NXh",
  "key34": "2eb729eNoXejXNHUr4W5JXLzcfMNbqAwrSgp8J66rxeRM3ePCvTDo2W6vrcsHaHppW2qjJVtrjqdLLGWnbG5xzUx",
  "key35": "3cUxasFMrD6q9HrVJhkWsvtk1CDbckytGPXdWNimQ1fry7Bkd7pqXA71yyh8G3sNfBqij5yPbivwnD66Tr7Ftp3x"
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
