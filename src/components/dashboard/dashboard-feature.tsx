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
    "FwbTWVnvS28sQPc44QiaT1tYRodpCrztrC45XhkRtJEWKn36b7ftJDohwSVYqipbVaSWQQubkib7pTPzfrYvX59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GCp1u9wmFERhPECgA8MHSD3bjR2uy3CKMo46VuRuDfaSDYZMPx72mC8wgZLjRvbZked2HXZJogT9oXxBBy7s1SH",
  "key1": "PPpiXoSexo8pwDVgA1tqYmmT9ePb4nvr524CiTMt4ZtuFNbWSPQLjsFzcxjReYs6Bh4S9cVbQdd1mesYCdfo3r3",
  "key2": "48JeDoqrUe3b8qdrRPZqZ67WHvMTT1aw44b75kfvVJkGMuSf458SHWSccf6DwMPxjVJzcnL8P91ZN5r69SKRp4ee",
  "key3": "5kK5VH5sber4F5463rfe1NJ8YJhhSbDtpLGvdcnDVwTzwp9hQ73B7Qs7kPsT9BPrg6DvnZ534jhGWWLzgrLBKMiE",
  "key4": "5V1srBS79p9ao6FNTUXyAnYgkxyus4KcsDs6H3RUwbpBvesW6TGqUMSfoRV6YREoj47UszD8MP4mfi6Baovtrr9n",
  "key5": "PgH9GQ74FYCAWdX1uZBdFmCp18aVemahwqsPbGEjLmJBStCiCFEXALXTP8ZuSFg2KokEvEGQ5B2CQ8B73agpCDM",
  "key6": "3cS4crH7R4HcJHDQs5C45rafz7hJQvyTCSStLLASgMZDpxTy9oQqJW9iFfhK8qxivYGKtGknjdczFcbmjzKs5B6U",
  "key7": "5ULy3ymLtTtgCWJU9s62AdCf9h3FujMk3Ynk4nQJpZKoV8oubExNc1PxRNVesCQ2x3pbrNKNcK1Z7rj8aPqSzJBf",
  "key8": "22MYaCTH9K4LALWtYEbHQL7qcsGT8F2eNovyQ9EaAQM8U3T2eS3tRy5BV49ChsyYDKGLz1vYYxGYKjb6sQdE41nR",
  "key9": "3GjrQPeig96gDasNEmEdLRWkvLhckC9FFtQ4KET7kFkCCSxe4WVZf2Ch5evRQbmie29NGxTXGZ4UyY6m2aHC5dr7",
  "key10": "34mZHY7wzDi23f6oUQF4EAaa2PFGTYaBzz99FvY2dnwDb5hRMozimYi69TdmJZ6cu8WkrXu9J3uyDAp3yJvHJLUC",
  "key11": "4jnVqC5ZihBrrn2cu14hAULCg2T4u61b2Va8yeBgS1nunVY35ptkB91VX8eh4HVYsNnJcAgvwPuFxRcsQhQDDJBY",
  "key12": "34pqRGMab8w4zsS6TrnjGuid45Xmx1xwBPhUvcPcLtqpde98PEn7aAZzS9t3hiP3TaHv9Xueh4iSM9gakxaga6k5",
  "key13": "3fiG6Fmr4ENnowuPvusbVQJxsW78D46sV6uMJx6bc71KWnfUJ5vYxU5bSZLgK1mStyMQtbTsVea9KPFeuPcRKK3E",
  "key14": "2DmsWfKAtWVsiVe4TpJ6VYqbqwGaqUApq8PKuqKnkrCRK73NpQ4pQ2v3aVMVSwiQQPPBVZWJura4cpb4XH5eqqrS",
  "key15": "57R9nY4hZHwegLmVN9S8Q1Y7CJpcuxMSbJtFLngsiTx1Fok76UKdoGqavhrjCRCDqrBFMyExppmkAkV5pYX4VbCw",
  "key16": "4TuSPPjvsvzXjXMFDezbyNnSaXFonfRhuyVHgTkhRH53T9JJ8oRFGTrw47KmEW92ufxjJhQRdVSppyBYMDf5hwwp",
  "key17": "1sm39nFdkFnAYzemT4MCAYSK5QhF69JM8HFg4UQiEYiyNs8RJ7kRpmM3oXLEe4jsiZjPQneAWKjUV8MXTucspxi",
  "key18": "2pvc9J7gtX6MEMDuu23YPvoivamYM1tzLgAmycoRtSTfH9QjMstjfNusU5GsdbhtF8G24CmEmG56zonS2makAWPk",
  "key19": "4D4kGdBUB5upxycG9BupiUZpYhzVNgnLDrRUkdtFY5cdCKPjX4BEsitwL8eJPA4GwkZRyoekPP6Eevq4j6uL3uf2",
  "key20": "5D54As2ZQWxkRuKtuJwnRF2LzFLHCEmyov4FhPFsCMawBBSqspoVnLa6wKqFFmSfXbisJLadPuRC1vi7Ub2n5cU3",
  "key21": "4tkrQgN7ZorA8B4NxbJhv2QhjxJERVm3i8Anzx4Lk1AfMmScypGKNTVP7z23j66ERFqmZci1mSBfF751MRpbxgbK",
  "key22": "4FSPFAXcCgRbwhVBa2xRiGH7w2yLhSCcbcTLavRxE471Lx2oZbgRfey2W2QT2Tkp3eR2H3sRFbHrQ56WYmDTBHRn",
  "key23": "2MxzUMGf9WmE6MmWDrQRkiSrrFyGRZPeYSxxtGLu38svgYAHvcxmJbDTK1akX6NLwdqZmAptfEwGEdE469UaVLLG",
  "key24": "5CaEy3fk8LRELqBTWq2UdCP84AhRxV86ctX9GCrFkM2jGKuQMuSUMyU15SwW5SGD63TZ5atUvLwq1crywgN2CAnD",
  "key25": "YpurQZJ3YxLZXmnQwccJhhrnt1V4n9zRz8nXxpqYs3zezYTmjRCeqiqhCWwUQf1at3m2F13s7zrNj5fsjJf3XFB",
  "key26": "3s65MyoV4Qyd6KhULm6pxLJYMrqV3EojMRMZHppAZg34FfqceXYfmUtv7q9vThdWVXbe28FHPDDyTmb1w7ESQ3RB",
  "key27": "32iQLGq9mQ9yT95NCnagphTe8BDWfEK7HDL5xwrqD52kmRPtdPAgtsZfx7H1PKUopP1BcxGhA2F96B6qCW4tMvuL",
  "key28": "2aLQzjrQzFZ4UFtVeRiD5KtqMm96HhqeY5QNGCW44U8Va21L4ntEHEiwt9vxabo1LqrFa3861R5uk1ybMKqiTe54",
  "key29": "3atcVBThEMcycr62mNLe1igR1iDBzdV1NXJGt7GSWtFEGFVYBcCpvxk78CtAvt3XfmicK9f3BjaKdeMDN7vF72R4",
  "key30": "eebvTnz9PfceJpzX5qy5e8uLGGYRCkVENNTpKJyYQTt2uYv8a4hJ9nFreJZ79p4Tpid7k67zgTdh75fkKYdEAmL",
  "key31": "2C6SsHKN3oAyaJNaCt4gBBZPUGXS9nG6t7BfuJ692eM78sxDLUXnMyxWjiTXnSwrijiwrRHBQufcNJVpng7rqwCG",
  "key32": "2UDjfKXhrGEru1zt1wyGmn5HcMaxWbnSrkqch1aphua8gTZuvbsWrBZPQYfePTmmpzLoyMbT9C3h5Lj768vTATdz",
  "key33": "8QoCP3QsWmE9D8JTD5UQSXmGxz9deqAvW6FYkBtuhjZsfjcavXLsS3cL6q5g8jVE8NDGuWJ51cHEQ1ShGXSTeg9",
  "key34": "4scmCSU7KP15R8R4bvjXZWJwft3T6deGeLjnjUkmMEtvSBFBQBTGaTH65TM1Lg5ctDCPwmkCRupVSNtserukp3Ek",
  "key35": "4zg2EhrGc7jQkRQj6646ZDyJFYkodN6nJacQ6kNV56F3fWwYbWxWws8osxAwQLykXDRYC4j6frMwFG8kyF4QdKQK",
  "key36": "2hWq55F5x1HC1BpzWaJTFfumn9HkCv2nPaSfAGNPkYieHgmdqmpmH6Z2SR5gjh8mAg6ym4r3ZiXWcgTyvVrHrCjU",
  "key37": "4tHwtnnmZqVm5uqneqtPUUCN2THfXhi53fMcVz6DuA9XArQzBXgSkcb1M4Dmu3BYcLqiZdr99MdWBTYKaMRK6rt",
  "key38": "4tc9DjmHhbXLrruiWbpLaY3VcJ4JSDLLJutWM2NUjpFRZMypM2Wc3QNT4na93JNb8vJDQirw9KX9NaHSrwqL1NkJ",
  "key39": "79XtTJfQeTMv8j39qFAqkT1jEk8cLVfiWdAU27sDGiw9u8XyNDJut21wpZrn8FefYXoGL2ix1sGPLU8R8n2EGcH",
  "key40": "BDuryySBcWErHQpLTXDahYc5iALg3dYsh8kWN874LtmpzqScW1Npt8edCF5CmCU8ZVAV3WZTRN74WUuQ9mMYDZv",
  "key41": "3izvM1ZpJ2USyQFBzRMPSNbbmu7MW8GHC85qAphXBMu8eJKzbpv4pLCqT8sUn7cQoixXysfJ7rTbUtmasCUjwKtM",
  "key42": "2pmo5CxNe7yscJ7UKKWrFNRCaH98Ywss1dk2id1RaxdBUdcsPdshHtfQ3AoQnoMVDeNhoSGJXJKxfo78CTQX76Uh",
  "key43": "4XJXYdyunYH7h2Xa5NTBhnyaWBHtoCzibqDYEGtekwpsMYQxLcJTRXPCCKqGsdFsvwFDspHiXwYFudKKLBNoAqKE",
  "key44": "5mhE8fcMvA2w8gCk7X5CEZ9ZssSWFwotJTLnVmrePDPDsLzGyWxFNoUj9iV3kNW8vsdYb45EboDScbWidyaoGNs7",
  "key45": "5p8kqcmJDPyMzbTxMcou36CCVHhCw2vn2XwGKzqA7uhM63tHeMFxqJfRXx1TDKawoNMm6yeSX5nvGfBCmLMnB6C8"
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
