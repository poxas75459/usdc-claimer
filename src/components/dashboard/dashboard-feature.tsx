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
    "2koDnu6g7xAppiWSDE55YQZJZxi5iU136RHRXjnm39JgtnCu1BHJoeYw8naBJKfFwfYSjcQmqpCKw8H8v6418DtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JyVDdmUAxEYg2ksybiKn8JHHGLesNkNnLwjXDTHajh1TkPoNnGFrPu7Ga6HZ9uaBJ2p5QPsk6behAx61FNPuewV",
  "key1": "mWV7d16odchC242LxFQhq9F6nL1GTf6c4dftGVFPHR8BF27rV3rkSrKbSZk2MxGrsZKZavaC5wgC5tRQhwF84at",
  "key2": "3n9zTwE6ffYptHtLHaA9LxMba9fxjQNXjPxo6CcR2pGxA8ouxakUTPMyHGNJ1hb9AwFLULpsDtGHbvSKLjmaXbSV",
  "key3": "3AgfYvppzF4NbF5EXSb2vxAe6XH9afTPyfQwdF1Cq2Q317eb5vpmUHto3cWFRfrZ245fHMbvbZ8FG5gKadeHibCV",
  "key4": "2L9jxPE6a5gy1o9AQDkez8viz7jPJbcUVHomFGwG2p2tPkdKdmutxV63amPX8MZfaN3LdEVLz5jexhr5RTruxibt",
  "key5": "4hdV935kSvc4xLpDztbcrJ3kbpF53bkMbKv8KxfHB1HhX6hgtfLkb5XMgWSNuvQYjgAwVCwZrZx3mWuoYwExwFpd",
  "key6": "3bJNHtvUA2qdTijMZUoZSeg9hFwMwxRNEGHGkkawW5iTX4cUTaeeu4hVLQqvGLpwucWq7Akur5F6NSbbCr2pCubg",
  "key7": "41KyYtvXNSxMxVontvXgBoGWN1znJTb2dt8XgH2ELFF71wAWcnysCzqRW1VyJYVAFmajEMa6TxtSyAZVqi9w5CF1",
  "key8": "5tNLM2mYm1LXQpnMoa3PM6uULDadysnxojJEi3i3KyxBHBAKEQxwhu4iVYdo6CJjmEJB6yGJLVshsePZqfHTaYGi",
  "key9": "26FXvfYpya7B1JtPwPEuPTyJy7fR2K3k7W8EPzkwV77C3xui3PezfSin2gdF6dDafzUNd6QhrHEBvkksHrQG2T6T",
  "key10": "LpX12YF1th7zoNaUZmqErL6rgJxqyeU16EUPsFbuwNgr2zHyi8d3qFyg6nQzLVRiBudHUCozm3xs84BRshart8Y",
  "key11": "3h6S39UwgT1b3cefkwBFD5hqwbw6P1c37ExoVAdpBvHxi87jRmEmRdL2caa5S4tDX6xKo75fUsQVWE3oDyiakyye",
  "key12": "3AEyB9iKkxf7BcC8Z37KShMCAUtBfLHcMWNygig93e1F5yGuJxSy5GNrW7a7FHrefB237xnNk9ESAvU6JNuSWUEJ",
  "key13": "2mTMzJAjQqMaKWb1TVqKSR6vvPtfw6WjnA1btMiKbEqjLP2rN7siTQMMRrTtQLSqS17JYYZbt1NoNF5Api4Z7qjE",
  "key14": "2Hoif2tFFXfyzRQXVfgWNetFr26dbkjj6HSGkgKiCdN6DNHopgMxago7MzBEuBRnR1jNoZpg2oBHqycWnbPbHYyE",
  "key15": "3onmqR5NvAfStvnQAoJqDXtETBhE5PVhwbVXZtuCt2wUMjzdLyBJvzQ86eh8bNVooyAMKUmrytRmziTGH84KQYQo",
  "key16": "sf2Yj92gRvamRBm33yAbu93Ftcq9nJzi3ABzwLMegXvGTMSMfaSaAPiQ74Y1AyzULMgXby1xLa9EoJk2je3k1TC",
  "key17": "43gvLbDaT3xX4HjiosycAW8Z7TL4K2aeapEihyzNibqQmPxGXEEWXNLBFmZC9rMsFHXwne1wu8d4WczgwfN5LvC1",
  "key18": "47bxKiA1rxtKhmAAjy7xDdKZwkgFBKW3ePtiM4TCHAgHkEmrQcYiJN4dmvDHapzphr8nLE9wmL7kSkYgJGpf3sy",
  "key19": "5UgdMxA1VcLmfbcu4hbJBHsU9ToVLTMLyAJ4NsHprc3TTRAYb78qKgmpbZHxEBh9Wi7AW4BE5ReVfmAdHoeQaNeT",
  "key20": "4wqJwbKaWVQ8LjmtkHzybzswf4rSiMc4z5i6BYbA3HumnLMGWnt9cuH3w9aLLGpro4nMSU1gM1V6fXARWf7sNcVq",
  "key21": "5ozxXfBGuR2gDcAUzEF4Mi44c17UoAJNBGAjXm8f6zFu2EC24Qzo91thvA8QnmH4ntBW9LNCpMzHNkXoFEang4kK",
  "key22": "5bnCNDhwBsbMpFPpJor6CB9fnhv1YdSqFfcqCAUrquE1tzwcwhtY3RNB7sGVxk2y8nBzaKf6PrCo2GjVvGdn5GQd",
  "key23": "3D9Yx5NvH4tHmrWLaj9kT8FkTV3VpizVqjprma8FmDq5VL3QNdLsEUXjQxSasDGDBLuV54KorHTXNGW3ETmo8S47",
  "key24": "4NU5BU8dYMgEntJBK2jcyF2CA2J5EnkFJe8Ybv34c8HKHSLNr2R3BEHXv1DLH1ARNvHxRERu35A5bNxXM51hAFv3",
  "key25": "4AE4dcZjUXRQUT3C5tryrxPdDKgPwPKNMaU77xpUYzEWLDVkYT8UydvqW2b84PX4z4ZckGDXhnDB3tekzeh7QExa",
  "key26": "2PP4vwa6RRPUokT7svEZ6Q9ujvDUSD31HTpausA1GswRqUFYd3TR1zD5CbyNdH2TYCweqSaQbRWvATVxMYrQqHMJ",
  "key27": "5mciKMKzaoAK3koDfh4bR3Dj1AMXEu8epegz8MRx1YydtTeYGczGBgbN35hXRzmEjbNTo39VpYyFWb4TdBeMwXm8",
  "key28": "5CFMrRVRLevzoJzYTXz7sGwd4WVe7H4hojVxB1dVHPxJwzL6QgPTiWDmMhGNbBDiVUQfDVQpXvFRr9hVCcbdh8mm",
  "key29": "3dns1vmuvHLZc2tuTGQA5M6DAcSoTuJRao1SZDFQMhPB6Q7XbYqtPQrS7JvBRgv59bkGGLxXPrnNejFuhF3K7znW",
  "key30": "27b8BEaBXVRYh8ycvkmXL7wGdSkZZhRwaSyuzTxCATqXNQH68Cf9HLyjVnWKpUZVz3SM394RR5mmqrooB7XiCtJi",
  "key31": "5JpVsfTmsfwV7vYGbd4v83V6vB9BMBrrhAt5B7QF3TiYeMvFc3srjfzoTnWugwdgsyK1DpAWQw2X53UumYRCU4Wx",
  "key32": "3MuuVFvNS91ogBXxR4WTRMADqVJLJNbXBQnsU6rpMsCdxUGUKuUTKG3xe8AnW6kVo2F5kKW7PxSbmosF6e8pyA54",
  "key33": "66GwbL1tvFqha1KHd4fxx5eSJDneNLZwDwNQPGpzifjfxKknTvbFdr4VrryRjfJJBdumK91uaxXc7LTyjyKBY8ae",
  "key34": "3dNroxQjVXT9pTPzhtvbX2kp19Vn6AHtW6GqiurvHG3XJvhRSKCntueYFyQzW4xcRoQnQo2WxC1GuCxL1rxuSGee",
  "key35": "4YevdExL8jD7ooeGvxmLtoq3V8ta2bG4zcJVnxEKP5XJnPxQzvfXy4cnC9m7bwFUGzGU2K6o4AMvVGPHuKQhFQUR",
  "key36": "5LtASsrpXdMrrvgrnAfBn5wAMM9sQCRusDpUuGituJ8gWDH5XbvLhSKpn6PmbQVMb3bMEipkVYbkV2cD2bcLyHg2",
  "key37": "52DKyaLWjJ4xr5CdvcprEsBiQC2aCAeEJz2PSaao4JJSNeks9nPuuLwgXEBAjwF7PbkmGS6gkvBrwHtbHGaDLHgd",
  "key38": "4eaCHjktJLBzGRxMCGWvgAY8wXmqJgamYdLYnQfJagUbAPgZur2wmGNr6ZJjphq2bcvYazSSUjmgjz3NJeXNRPCv",
  "key39": "5wWZHnxSfsQVK9p294mu9nwuMWBBGRjqQ31j7w9Q35wXUBPceuEpt4rkt8xoSK5KQtSXWZk6SDyFhJksN1Kuqc7R",
  "key40": "48zuecFnFW9R9YibE6mFV4skKWrEHVVWY1VedUQ8mCb2NtwEDDtXCELEDbSPcGQJ9A9QcGQHPPDaf2mMWa67QLXw",
  "key41": "4feGe8coFWcJ7pxQ4gXJ6FQqREeuL7amCQUa3qLbstGoixxPNEuyU8JVWhota859nrWfpC7uVh2mYXpvSV3Nfn9K",
  "key42": "2cu3RWXbr9QAXwDuzP4bH2Pma1UZLD5J8MhvjzH8R7AmgrAWMV4AsVyc7PH4zkUGAYAYLMPoCBSA6Jvyx7tJ7ZqH",
  "key43": "3NRfEmLGpvcjHdDUQuMPs9TkUJsadGpULmX4181xwSYpC8FgnZuXVdvomdXnGmp58spQhMUoULU2SQE1AnDiPmaz",
  "key44": "5eEUBVCvSpf9kFoE1kXobwCxPBwfFbMXLue6eAd77KfeHLFFGpXWJYqkdBuRNkWdTshNDewTgfmY1A2tWVpyCgQg",
  "key45": "4TjJTdcSpQpJVm7CsYjMPdWz726YW15uaKfvGsDmb5do3Dbdm4vLtmZLiPSGZBpk19hq3ECatm5dStiwv8zstB1A",
  "key46": "5kiSoDJYDSQuft7NxaPujDr8Fy2JUwBzs1nQG1YqKAgN4XRTax8FCqV4irp8mfWBhUYvUrq2SscmTQZosDdFwqvZ",
  "key47": "5aokeo5AJZq73Ay7SfVaiP1mceh6cQybg5czjwPwTjEmzgC2FtBq5oqUVVCAwYbUTx67NKkrVU7CzSfPQQUi6Usn",
  "key48": "3JjpAmP5csncU6WKY7KWCQX2hUCL2KD2sF3RvQhpRkSoaokUXXHxZ57pKNiYhxFmEEAqnVafPmH2diud75WB8mpN",
  "key49": "gKrxjsgPLdZnuJm4AVr2zzWRvqtWob5SGXzBGyCtBcA552GZMEvR3jLYm5QgRAJp37VCNmgRHpkpG1G31RNcV57"
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
