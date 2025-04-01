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
    "4TAfQjGeqcoB6tQuRcTSxjLBj8BxHfVsPeVGAEpkq9HFMAz4JxoRW2HQFPbfiVAb4Ys9mpG7Dx9y1MTAmTYZPiQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZZpo7EiQYNkPbUPT2XFkMHpBQUEi2BBDuvD5kXm5RKth2hyLqKTLBgAQskymvRqhQE6WmcgqFswq3npXenetzK",
  "key1": "2Cw2XAthTRcKFNXRizWKr8PcDuR8kj9UBjmFCKe4jcR7NAdEdsNWova3Mv5ahL39nJtoAM4EBctfqQ7x892GpxdR",
  "key2": "2hco84cJS5vy4NyQ1MGk7qLcLJUbtzLCX4CvkXDpE5kUkHi3zgDwmLv5WoDUU5x2yfRj6au4D8AunQ2yccee2CbR",
  "key3": "49RarUrr1nY5JCKRuFdnvHdopr7EP2puATHFz7F3AfvWsPrsLCwgDJ3F5h9RBF4cwLn5ueaBcBcyLfrasSHWtYXn",
  "key4": "5qipoXfWVjDGLeYJtRostfgRc9uCNNwfFkfGvBRSY2g7HriiLnVpiXgwXjaGKiaFjySGUwyGzoAtmsPLGsXATgpM",
  "key5": "3HFrcWC6cWMmoMhyGzueGayTwG4em5py25ZydUefiZjY3CCBnsVLY3PTkenQXMV9hPTNa5Ssfbj5jD8Zhzd3Zid8",
  "key6": "4SsdbbUQHpc8WoCEyd237YbeiLCGGdNcXqkM95znAxyRDtBrGAZxaLH8Ep7KpGQ2FXDRhr4SeYS2scRQUxhuphmH",
  "key7": "4RRnvK46FhPTDgzLmsvRfrzomMRVraZt9rc3ny8iWoHtj25Rnn8CjeU2zGJCSRCyzFWgcJAGmZisMnduYqgHYe8U",
  "key8": "3kEuM6sUPSBNQbuZNxnrTH8Emta54DqiSY1KGW51UN9mWAEqVQ9PPBoU5d6f55psscXjSg15UgfJkCANJDi1KurE",
  "key9": "4e6Cz3SpmPsA9ezxtHes4F86QGm8JPr2mjVC1emBJs6J6xtGDZoQ9NwWuQhXWY6FjF1G8AvBM3a3Q6xVDP6kMycy",
  "key10": "c7MkGfcUd2ySiiYnVn7qcXwqf1hPQ2cwSgK9tWK3JUMei6JtY4PhGgX11FwaXnDVXixzG6wZYrvtu3oFogWRwKc",
  "key11": "5STfzscjXrNq9K7VbtX3Xnb7iLuMuf3DkT5dJbesAHsA8FaQox6iL274BzbKuApadEuziQtYuhQupYy1Ne9VUD1C",
  "key12": "foaKZd9cJvDrLegiFapHPWTGD6F51FLW6tsRQSUDXA9hryfn8q5Qk4v2Vpm4wMdz8RyKWD4C8pWetRdvPowenfr",
  "key13": "5u8cnUoexTR7xA2Hf4Hyj9tmvdQAHgoSsLkZVHeFvg3yqb2C7Adxs7d8DyANF7s74k5ozexSRKMFFYDscSAcNihN",
  "key14": "56JVVLACEmNuHYDDE33SB48kvjmVvwD9DKdm6ny2zKmSXCoPqozDRMco3kiRzhsYbRLKhTorwA5UYoyauAjyHYq2",
  "key15": "4AFANpXwc1riAmbC8P8iQXy1gga9QdNnubS732JVaGELv5arZBtUnwqVe2rLZrnF1viDN2w2yBk8BREJrCFjiZAp",
  "key16": "3viVRdnq9nFoXEGyw9m2U91JRwDf2RJDxY6MpYpQADVmbSkgRUUCEPMsnRDBiJtErSJh3ZWzW53PyH3vpFHUkZsz",
  "key17": "37pzmmvDSm1jQ72xxppH3wbXEPSJrjSZ8Ff1JsnGT4LLn6uxTaMktmkJpHaG2x54oywBrhowFBcb3qMtaU1B9CXF",
  "key18": "2iex7RB9v8bSN6TZtJTv6UZ57FXSQcgXy6j45pJ2bscGFuoYLH5h79w4VvZBjpQtR66DgrL5PhExbgKK3mhBxZeg",
  "key19": "26xnstE7MVME3DLifb2apzuycWsFyF6DwuRdxjkb1d8sVaFTs7DeGe2Svy1xWdtXMThaj8WiJE1LKCNUESp1DERU",
  "key20": "2mUaEwWh9FbhGAXJYjUjCYQjNdC7TvecGLbwCEdmKo47ALpemkSLNsn1HaWd1Z7FD53rifHf8z2hzuqJv1Bvcsrh",
  "key21": "5QizXs7swTVUrZSAXKxFhFsQRa7cxZyDxbotTDUxyz8s6zQtr7RRW1t69JZkRr85SvyXW8jyG3Gn5uHNUpduq521",
  "key22": "5XCMf9v8si3Craq4McwfCUKysKKz34THBLabeWDCG1sCs4daes6mKC3kXqmUfZv68y5ZnGzu4VFgdSgMTuYJb4cc",
  "key23": "5tpNLWbaFSmEJBr42zmvjAC1trxJBNrSBCn6dyMkwaCKvmRu7BYjFaUsv8ALU5ptwCE4Fh6phwiBDNEqEULAop6R",
  "key24": "5j5h7MFQuBvenN1sd2iDPbo81yDMTTjd6NQL7MuDFEKaNUH9FbZ4uB2kFHfDBNMruCcSCBmJqtxwygAU9U3DJwAb",
  "key25": "TMDAjqePjQJwD8jLqwhSshfmmesMYeJbHy7vuAw3ty3aEKmwiZuTkbqQMycmZhUYNYPangwoXR6oj6MBF7kwNNg",
  "key26": "4nGh5Zy8kqGTguKgxRo7TzLYwZSY9RNqzx85Jj3kiKk9bWhnjRdNxZ1xmtzHaAyxBrMgK8mevnPVNCAt8vujsdyT",
  "key27": "F2RuegJfHMYpxSc7GSaHWLGRKoPs3H2f9FYUYZWftK43a6zpvbS9HUfrYyTnkbiVSEMdrXxAJsdZftZ1x1m3ZZ8",
  "key28": "5Khg81Sk6Y9mXteimw14FpiDDevSPyehMah9iAHcZXTtdxEpX1hN7wvimhkYhyZGbigVZ1JPkEFhrBz4Mej5Vd5j",
  "key29": "4dvddd2goKBmRizbutUw6iMCgLRPDTWzqKuv8j2SL6Ht6B9aBu1RwufTuWoxEX8dw5BvHDH15mcGJJq1eJayA5P5",
  "key30": "FRoozyEDwTCx1HxDhG69HhGJFV3oj1FWqVAkoZHNvihpRo8jU763Kmwn5XBJoBe4t93bnf4W6SYuoN87jb5xUth",
  "key31": "5oK6MEbTJ2cd6gNmUaxNwyWoYTR2tZ6wHLvZJkiVThKP2iT2X9MLE2ZhdaCHC43q2mTcZfHUcWhNSdCd6v3ShjXz",
  "key32": "4Y927jpjRiepmvceu7e3HG11ziwb2MyNfRMEK3JC48bhTriQQUM96N76PNwNbVVmYCcgMcS8rZWbwJ5qt4XXgnig",
  "key33": "4U1FFfXaTTGZc2Mhg4LyRdQon1Z7a67Nspu2HJsoZs2UpjRmNuvRCkBuPmVfP7bXtifEUrs6VWN1eQV65E6SAJ4f",
  "key34": "2xTfSLvTC1YBewE3vkXG7GB7pu8WvKQ9SsqbZWAUWToN8MPk2KFMvkLExC1uESX4s2uy72odBqNdYGodc7gJPiw4",
  "key35": "2B3zeM5RNeX65ybTyE5YN3yuoLcfdiNRxue4G5Mx3zTCj77Cy7VSfj4vozb2GnRbg8YkXdoZ2iE73R2YXqrta842",
  "key36": "3uyBtpe4rmXk3GJ9TrpoNgkGwQTBpBsUeQ9bwe1yWQkEkqqkH1hS2NPe9iGZK6sAyWvEgDbEJ4wGaAkRdeT9Kivx",
  "key37": "32LdVgLckzjB16NxSHj7QP4PiBb1wBhK1Wb5VVe4ZFeKwLwz7nuXkd6RBRHBvvDTdeTKCkjKqKQJfQ8NqzTMqwQ4",
  "key38": "4bN9DoWAEBtW8ytETz6SCCtTCVWPa9BWTLS1xDk3jYEEtn7s8mbVoF3T3koD28ws57DEv5kbJjHQsYLRJjZkpvRc",
  "key39": "o84A25aWcYG72hZ146a1zs4GWhfhSSdnu2urB1t2p4U7DoJNWLzhqCL1mKDWaTC1HHp2cUKFviv5B5KMbDrG35b",
  "key40": "jQZKQNNjhSb282HiKyitwZB2Ypkffow7N9WejYkYCCTV9N1ckn2kkezm2Bf1gbXiPJnDgnrVoUUGSMVub8931Xj",
  "key41": "2NUzjhkRdXZQbcx6m9L1xUqTxm5BCheQPmFeFfjL2LATPiscfisQfLNor9gb8XCiAAxwTwpg5pgeBvoY6mb66nEL",
  "key42": "NqLWpWpdcedPGvsS6Yb3PNNeRrUkghYQB2AnJHgFPgFo7ZDMEQS8HHS7rW2i7SFEU2SU2VGNH3XcF51BXDSjRZn",
  "key43": "51SbaNx8pSBq978VNRKged5PA5V58QSKi6cywuztYJho3AHH8hecUJKte9SLin9tLFw5xgs5Yr3SakjbTeGB9jHr"
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
