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
    "4MyR2yGaDanZHBtcogo86v21PFPkLXy1e39fgKqP7GuarscyNiWbJjoJzigd5pW121zQX9WyVde5crVvTxySn7uZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EJNypmhwbsS3uN8HX1EWrRmVuZ1FdMSKnmgH9NeqSdAXV7djvvhRF4yzXgYQsx9ww6zXczvwa2vnanMcYTuEnCm",
  "key1": "3XcWNhM7mXD8Xf3p1hZjQETBsTJ3w5HNyHBF2oyTNiTBEmgFYS9pg1x5WfgdvcAQNoT3waBYkEKZHHZGihU3egGj",
  "key2": "4UncgxWMUZH5LWtziWJfM4vpXw5zmVREWmgNSQMLnfVSH3VKEArmUrxDHb8JFKs1a6XEp8qiRb6FRshtpkLQq6vB",
  "key3": "MNw2b5wuex7xKytGQadPQxfv4m33RYnzgagVysUgpJ5W2vDYeu9QBGQechTVvhHQiGD275pg1HM6CQ7iqZbMqA4",
  "key4": "5wbNg69ZqKveq5FbyTTg5yhYEFvzXiaR7m7jqDqKKtA2tHJMqk7erD1hbgjo44ghsi32BWPC71ntcqsq3vFKkSd8",
  "key5": "6Zg5xeXq68Emy36MR6eYZEo7PxWbiLhQNSeT64sHVd2U36U9g2VJrVN7AC8u1rCnqMXRfRxoDYwZnREveijCh6h",
  "key6": "5HCa3g3T5hLHucGjJ48UfGabp32Pgkya2rx6s3MFdvGAvngXL3KzSEHjjjdgbi392CDnFgmjBW6PjWpGEp52VA8D",
  "key7": "5txwrHytS3H9xpaDbnX9f44zjnRdSzPaRfgXyLTwTUCSLmbfyRZf74YjB7kEENGT8o1nVRE5Rt9uAzULigwtA3RD",
  "key8": "2RNpRvGLQPrSntVZgHiLkfzygQAcY7yB9KiZkPLtWzJZtCvWyhjuapoBqJxfNcv2MKniqppJXcmZnnq49aS6vMGR",
  "key9": "3TU7ovPBpeqcZAHFeg4bZG18GLeh9pYcTcHmSjiuNsSPYZzzs2bPLTgxhqJpUJtCX6Ri96KyenzQeB9PfUtfX1pu",
  "key10": "EfogFp3AuWrFhQcUMyhAtEfLdyKMx5xuewLpciq11ooYvGmYcW2QjgsvjhL13akuK5Q7LC4amiJ53VuJUUBJkYR",
  "key11": "q7WApwd3hbT6baNPnGLPzvTCxPTAYtSb3LuEQrus3dQmFVZuYoVB6a5dhH27t6HqKX5ra7fkByYvQnH58YV55am",
  "key12": "1gszBCyuLrdBTZqGbuzPcpsWxn6HWSBaCUvFxsGZhQfW2PVaRH6QcHWNBpMo1pAexWCbkj4KxEhQK2H4wKcn3ZR",
  "key13": "4KZiQioxaCcXoBySYQ47m2ofeikpM7KchwmfLvivgyRZQVvFa6q91y94cEU4ty9t5Q9q7LyogWvML1sZ4YLeqAMK",
  "key14": "4zx4CwxFy4q8B2kUxksgyKtQ4V95RNJVR1pFpWPJxkLspDpHeX3ZfCy25nh5g53XC1JPDje1jsE3fwZL9wRv5Pq4",
  "key15": "5x7U2Adsb1v6FUxJbn5RJpFYE4TWjo5p3By3Z2S3JjkCFXmoHCJm6Kec7PLYnzjUytA3qYctD2YEoTgc9i8BAhTc",
  "key16": "5YxtCrnswyfRQUZzA5iKJC114z4vU1wNsLVMsvuMdaqYGb6Yozc3XBoRf6c3thiwvDXS1gnkDuvm1p2Q8m3EyGLQ",
  "key17": "TYq826ZiULFqNDy8dRqSpdbsW58qVqLV7g49jnE9jwTkjjVjGaUoPqtc499CHs9mkBqn57NeBgqmAL2awQhdZUk",
  "key18": "2JNkm7XPzoCe3MvqEtGwTUtCQZQjYm7vY2i1JuCpvvFxTRdmJRhdxFcoEJgkyjt9SggfNXzzgjJybmPBtGGzadJe",
  "key19": "2yEVwkBpqekxbWnsez2837qZpSN8EPGgm6PgR5NwHh9PSg5tcPU9AogZFjVq2qYcT38ZbwRCu3LHLsWsDuQCVjLF",
  "key20": "MGaJH9W7dcSMAU4BgtkHYHfYyohdQHM3AWexJvEPYRnM6BmoLxZZBRfGk2th5x4X6rpvMR8ocCLHVY9mLyoqAd6",
  "key21": "4dVH9ydBYiYeruyjfw67PH22hPbSaoJ4nSvSH4TskxAEJJgcWAyJu7fTFvZYnLyNfSYMe6X1hnSnKsExY2QwSdff",
  "key22": "4Nc9TFTXQRhSJGwn8rHmUumYnwMPdkPJUjM9TnNrZsNHZ3KTDuaMCf7pgZKW2eitHmBVg66A5VpFcziV86aNRvcM",
  "key23": "2wm3oGAaC1rMWooHekmo9yHiXzQjRGCp41iDcrWwhedM9YHH7CQLjCzsNMDRpMXJRrKeEQfq7ir9fatQbxb4AdbR",
  "key24": "LYCgr3h4sGP4cjfW51XJGRw22v7btpvZWe5ykJ2cmGbCuFvmtEYM8DPY7hTKcKSsUGXd4VabUEavjBTn1d8LT4s",
  "key25": "4KMWyUJEdFAvbTSVfGHALXsdy2QvTtXZ7woPjS9awkoU4QcGfkGptY8D9ZPpt5tTkgkMcbecZc1CzvPgihFpoqdP",
  "key26": "47NwqCSdts1uJJ9sKdbapuSwGFas6rkCBiV6kXbSYMKTzpwkxVBy77FyEsAdW9UnJanZy2qLcRntg6Yu4VwNJvTA",
  "key27": "44LtYF7F2R6RWgMSBjo1tsEBarxWCMwP6cvhmiW4nzCgNUm3WP8Lo1anuCrF56DURAaSEKQtuqcfuJfoM9ut1rpY",
  "key28": "2oAKLiqzmb8nBYZr2KE4EgFBkQN5ttMb9RG8cfjkSjxTNdirwiwaApS7Y56L4johRUQZdkSGgFHT1AnAZkqjdF1B",
  "key29": "5fJa21cLUSMbjaTrv4YCAZjcBA8Lf9UFe8vqMRFD3g87EVHTmbJrVQd32kkfVk2fNXciiJUCegLcsHruwLAK1q4p",
  "key30": "5TAxj5VTpRhAZM4DmCMrut5VPZ4vktRunbuHaBxsGo9zCsV5SfFbRfF4Sg14w3a3eBP5JdEZFFyPQa2DGqVSNeh5",
  "key31": "3YC1yjD5CUTW8VHZW8j5JDamtH8nwKEaBhz4FyRbykPv1pM4mCzToSV3BSTQDXHG8CqYcudERhVxYnEdJb4xHuSw",
  "key32": "5EsF2dL44k1anhXz6bEAyLh2i7yz3KUjJTaviAXxJ2cXy1NdNfyhk3CvWBJkLP4vsVsTzFjXCcw7fULQsRmLLH9D",
  "key33": "SAzqaiu7QnkNDJBRrh6HJuPizAUr7QXzqakimwKB2opuSctGCY6Ew91u2fuWb2cJ4e3vFoQHc8sowfMv3c5fjFq",
  "key34": "2wufe2Y32UMqR5WBUwNhpxvUatQEAibbYpfT4rsVZbGx8wYD52VzDmVDinSSyyMoLmo952cGWQJB52mttKtn6Ze3",
  "key35": "3P33Ts9yEWKVwbn5VHUGWR7Pnqdvm8kRZBRG4CQfAqSvjrffoE5CTRQAA6u7LkXYxzaMdQE5d5JGdQukhiY4H5p5",
  "key36": "4guSA5UGo3NabicThAqbKEpsPkTCZvYLjrsLh2RPgY5FGk1Twu3UXA1Gehv2RCujwXsFCaSYyGxiX1FcL3GNUUUg",
  "key37": "4sqp9vALbPeh84YjjhSG3bXFyTEfaxrZRWfDSHrd1HQ3LdKtxuXBXB7JSSfN4uw17H1Dddsj9TqRnnTq8oLAD1yX",
  "key38": "4kHN2ZJdPGYyzoc3hN2WbjxHDYgNnDHQSA5dDGvzFCbw8a61so5pkPD2M4M8yahN2ALpBLd1x2mb5BpSMFey4ZT9",
  "key39": "5URmHPNbX2Mgb1zR9dPQaXmxdDm5QsmHqEmNXWKuDeVPT4BMv2fnK8bqy2SeJt9VwKuncQT2eEMU2AW7NbGuDKqa",
  "key40": "3GYTiXpYEY9NYjTSGg1h4cboFLfZacFR355bencsZJnGPUrTmTxoPrQ2z7QAH7ArQYwvfaFzb3YnrYuWyKiJRQKM",
  "key41": "44piWvXQJyHnK87XEn3X9rAJQ17q4g6iCKuUqqeVsHJgYcVyn5RMaAC6Ewf1dXQv4wxx1fv7JcdAm4vyaKaTQ7uj",
  "key42": "2n61ifH63LX6uUd4mTDQtfbGBm6Y1dDiJuwm9Ry6dJRio93TKJ89fFo66afmLVFEBceZFYHgDNMXfzK54YWT8KyE",
  "key43": "5AQZb6mtAhdgDMeDoy2qkPgsEPFvE2sW4R23xhoicSbXBFavEEXKL1WhqtyLs8K9za6MpNfrwBcjQG63qeHk8wZ9",
  "key44": "piVPv4yZVfYpMjBVyE2ps7aTxGroZrfwVzWZJj8V6KhBzYEQkXZe3dSpwAt6wF5YUnAjtsatUu5W94AY21Djjii",
  "key45": "2f4jJDJhggua6HG3wDJP5LAauQcoRsv9GbPnUjDm1g3yFEP8Ct2yre5DRUB7xaRAPH4wcHcf4VYkAkSybEKp8Xcm",
  "key46": "2Nr5LE9GMSZf5vFQYi9rwTvDCjCRQifTx3aXBMTuVHVQtpBPJFxM5WJZdUx88Sf5iwXptRSPg5azyD5LWtR9EfDt",
  "key47": "57KCrUqkGdgnPsNbK5oR3ohVcSwXLJbAj9ZVogjq5azxYiGMN1DCUnFUHKcEdX75J3J6fmYjF7SkphmzzJyPxsJW",
  "key48": "RjpnjBQXRyNrqGjGypk6vUgzJ5Xc1rmFtzadVueKCnzoWJy4uRMbcXmWELJbxPaLqCkjVNEgiPUmJRfKbArCobX",
  "key49": "5orzwUafSUmUrudGZYUhMW8v2pu4qpbXTn9Si93V9sJAyyAYv7jEeYQn4sqmGWUfxyuS58Zy8issjEJLEQfvpSDM"
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
