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
    "5bVFMCSzoctmuUThQQ1B2EP7CRtpspMhKsQdEVHyATShnKFdvKfjMYqegTdJUexCWvcVAMKwbDjzLSwY2cyEGWh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CWchgeSVf43vayZwYqpinUpb83sc6XSCWAGy4p2sW1QtYDY12XFvcwZ9veCMwrCF9qGeFaQpgcq9cHyZV8vyXq2",
  "key1": "3WBo9ypSq15m68tjte5DTY99BHNZHBwRU3CpsgRkKyVadhaMHoCMye4ZDSBH298iahE97f8mpNcn2QuychoqRwmh",
  "key2": "2JktGdMG3557zXcPkDdzoxMizXekbH6kzxdGUbzXVeVYmAoCwKErEAeX9gDkHLa1BmkjPMD73WrcfqAX6mLrtL3k",
  "key3": "41vWkUTUPU4g3fSRtopdwggit6YHg7BAowHbQg2LTydSzJ9F6oqvqf1eMi1E1noFmk7TSMdjbTTBbXJvwqw9vhui",
  "key4": "38rs3uiAFoVBXAUdN88nXBCLtQQeDXPLmQoorPrNfMmfBZgyDQTsTZem2m8xYfkZ1BgJPY4YVpdiQKibaUB53FbJ",
  "key5": "jLV3pxqL9wsv6zdcSGCJZD2Ay5f4H66krAbNQ3pKCqtrMUdYK9D4ei7LBZCazbiay2CmYpfZeUmfL5zUK7vkbgW",
  "key6": "5LUnD8qVK9863dUY2JyirJWRbs4Ky9tSaBDhoFPGDCMAbHACoUT8JuiE8Agt5hNx1dKU8gVxukF4Z84BSMYeGB37",
  "key7": "3sZpCYYfvDnv6S8RcyUvyJETqAyAYvqZccndCLFgSQcXi6QSCEXTuu1x1nnhrbYaAk6s9HDPR5G3Ka77b9YAPsWL",
  "key8": "4YhfviMMgNLzTPZBkS3pEXykVpZF1PXo8dfCyvsq5gwxmteYY8r6pgRdrJietTXurk17xiXbYnGy4H8xPJ3a8nMJ",
  "key9": "mofjdXXgm7DJVSHq7koEdTAGtcBUWrZ93Yci7zCotKcJQejtbNjwLgjA2FJXqsk7DtFbjaQCEGrDevcNGLB5xoe",
  "key10": "52ydt9SguZDyk8QK22DDzQKnxFmcUzUTcH4uEa1QFUVRfY61Qj7Vf4eT4nq2mrqncJbWZw21FKEEAARbYf3idx8H",
  "key11": "4BSAuQzjUCM7PSykSdtcSg2YeVxZeTN68hiqbMSa3RmZzCGuouEjHs8eLBE3Rhrx8rTR8AGA5pKpeQRqoeSK5mVQ",
  "key12": "H9qNGhMUUVg9cCKXMHaEFZ3Yyd95uyqJvQAVDbzVxDAfcZQtbad6EeHRqm4rwLoFga8ccNqErr8RDmFbnymR4Ho",
  "key13": "3n6JVNhhWqmxnW8s8ebCNDmhvTjBemzQtEATi7SkaDQSYVAkJtYSt8RpU98kYdijXJdiRttn5sSi5ma2Aze3hBDj",
  "key14": "5wPhzDdUkNGKYRE2rCg5qwu1eDRM7rQmRPdcC3diGtKGatoQYqZTqA1a9vUf9HKqRsxkRnfrfSg7EzbXcKuDbmcT",
  "key15": "3SY9vBEAAp6PcsLgJt6s1nkYS3hZexf6XftpoNaWhzsS3zRVqTFLSzKQAtmS7qUfXkFF4Wraf1kLnZgzp84mpEM9",
  "key16": "3VktZAg5BYBdAywuDm45y4vKp1E8kSXfTqmhgmuq3LRbC7pnS3mSxZniF4TtGMwTHpBYDqubYBv8NsypxiRayeMu",
  "key17": "4HJ9ZN87KGVDFSmxvSKnnrCFzn7U7b1gb5TTpmNQJAtGmSBH6dCFHYvGEMY4d2xc57uDi7Snd1sReznbsYSWq6pE",
  "key18": "Rw6E5nDYADFFnakG8AdiGuXndBZU46pKmmdLJ5pD49uQHoTryaowNmgSf3LR9CscyYrEicYeDSsP8KBeqY6oggh",
  "key19": "4Zs3DNNJ5nuJDyGuzAMyqyFBTPNmfJYStcGsY7rvv51RshSo2zhX7M4w9UUrUHiAnvxHS4LwfKxDvjQkMT7DfTmS",
  "key20": "3ZBLZDHWPtLcNTJvY1uKzb5r9s4ht4NTYnrpJ5CNVUJoBS9CMtmYQ9zT52LmRJvJ36CzKDTwkiNGdGpw6gSNf2ib",
  "key21": "2GV6x2KCmfVNvy2E1jANTs1p4ZvbNfikXbMJSbsphYbvHSJ9uWeaw6rBzqSi4ZWMwcVocQzE9ti3GB7B3uQRgo83",
  "key22": "2Xd9V7PBYytnbrdxHuyGaDVwjicWkXggJiFTFcCgcnYNzjwksFggDrAZeDSUHQMii6FLz4bPtzuxnnMyvgTqZbPP",
  "key23": "3BcJuEooPFB2YAv8JsohhRXs1MorHHpuHXt9paifF3yoQ7sfgj7oWMTeQmMxynmgGjeBmQBuqrgAmfE34qPUFN5V",
  "key24": "337JhUszUVWMe44KFa86XC2nuzUdAYWsFWj3WiJBTzzZ1D5i3QP8AK4hbSuqTBBwcvNxJuXUXr3Gry7geqaGxKbG",
  "key25": "CiviV6s6m5YyZxLY7XD1pZpyXS4LpudDrZNiLhXNuGRKBst6zK7AnyH6kihcHpVWEG1YtP6Kb1ToaXu8rAyKman",
  "key26": "2HA1XEQ4DM1RGJ8Xf122bwAUbbFiwyo2GUZuDZzGoWHz83SQztL8PRditDAFeyesCameq9puRWv6kFtxoFvsKdXK",
  "key27": "fbsvcypNYKPrhcVLED54juSxR55e6ZB1UU4H2Zkp3qNBpbHZgzB26nfAe2XFaaThbJg3Gf6UEF7w2s8sPDjrqnL",
  "key28": "3B3bVEB5bfPNpiCkVz728hqVP2MEGYyTxLppFq1vsDaK2W8zPDwP2GDJRou3LDQtvQ2QiwVYfSbjA12C7XgbnuaN",
  "key29": "cs2v5GSZfJ17zY4krKw3ssPGyxK9fdMxUXwtoaEraS8aXDteSWmXLbzsfnLv2ghdumBSmU9iNs7rSv7K35EwhGG",
  "key30": "ssjHGee4wkmXMBR4DoBrPpo6HK98Fm6qNPjwGBiRtUTucqRd8XFE9aEttgNRP5q7qzgcBtR2YyxmpPrLxhusRpp",
  "key31": "5TFQE3u58bcxkLS2ocxjQ2hwMs4RHxxvGjxEAfPK29i7S6ek4B38iDFnyf5h6L29Ed8gT8cUywFrafWgyy5f8osk",
  "key32": "2mxoxLKqDPvjS7cYXyveGABiiBJzm7SaQ9G6kjgJYTJhLE8iMpMeJJC8jHYDeQH526kmxXARnNHAc8VL53VbKEip",
  "key33": "2A1Uw2ygfuLCcASX1SXK8qvUPryRHNsvktxWkCDndGX1HmUcJtJw2iQ4kt778ZsqufojxZ7eWsyfkBPrFghjqzWn",
  "key34": "5TvnFMFTieGMCeHoNv76MAmH3bo4qMxYJbpFkb9hBbud2nUUNmo5n8G5MTACRxvDDgu8t2HdkoZzxfqgoNXBUC7K",
  "key35": "4YAKruojbNrbgddvJdDJ2unWgzLPAv9Di9LdmByC4qNK9Tn2o5mRjTcnk3HcxCNS5hdGf77yGEzqVAz5RZj3649z",
  "key36": "5EXRNnqsCjSqn31gDUeUHaH5BXucoHcXR8RQyf9Mmdunv3cRu1Zi2TpsCt3hfdbGtHYBKg4CQJ3vu7FvKt4fVUn4",
  "key37": "uuc6rEpHk5nNkcauxvNytGarK73CTFfVfV5sTr61vt3fjZ5sWQ8kh9njZGGj6FtiWQWdQ4zfa3aviXrKNtcmBLB",
  "key38": "5DUBQmokXcYUhkfJd1hMcNvjZxHc4wKbL68MsoU2gt8Me56z4739aiERDToyLfH22P258G8pD4ViMieNkHfEH6Ry",
  "key39": "3RogWX4fgrJm78zb42Axf72gML2cU5cNJfHqgMJgwbngrbJWfsCXDB7SknbLJK6kS9hnB7EXTknRxkdpLe1AkFaK",
  "key40": "VdKfmU21ZRSKKQbMvbK1S4mvj4U3nt5WhGZEQQXFFsgaLY6o2k7TE4ZbWD65NruLZ5Akq6AT7k6MvjTyczwwuqC"
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
