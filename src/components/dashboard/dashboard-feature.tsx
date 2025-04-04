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
    "4HTETmjhpk9HH6axfRQE2u5cFnebB7A58PD8T7doTpfBBVv7x6U7mAR5GoiPQgYUA4ebDgn1v6xbUvSBBkUZSjob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DWUzt9C3mjKXxsUGVAYAvQBpbJdavCFWLGxTeCvyMaKYgzCokwFM6YdBUbFMMgYeerEVz1M9hME62cn8yGDKmx",
  "key1": "QP6Gb5uT8rehpjQ5eRKFTrFhLR6XESzdgBEwiqirWRiaS8xtwFQCmT2z8bua4FSsubLABNrV2DPJUMuxJgVTk6n",
  "key2": "5RiDS5CVhy38u2rH2b1YXn5oQoyUCUzZTUmFxzzjUHi7frMPVH5RoAqohjeuh4uYzNUwE1LLkcziNfyyygSTsWYK",
  "key3": "fyhZKRn4VqE4MSGP2iXMAQWZYkUnp1AcnMedrmEpHN87w9y9GLoh8noWvePrABYJDpNEPcEyjZfGnQSPp7NZa5g",
  "key4": "2YY9d2oRYDRxrkLgM755J2oSTxui8WShMb1zASvf3oTgFogKK8zVAh1zazhwbQ2KuehmzgQC1eEHQ3EgdLV41zyn",
  "key5": "631yQkTjEiq3yEaX2SYLGqBKyk6Lf5dxETbS3Ws1tPg9UMVpZxgq2juqzQFAQWEU5JhLDW2BTYdH8cS7SuWnd9CK",
  "key6": "5i6Hkw4AbYET1RcTtba1mhH2mherZLZvJC5ChPQH99qEeBfPkLvksRKDuB7NWVbE52w5NBoZmGrGJtD2K3xwUhC5",
  "key7": "z52QaWS1usJr8J2dEkRt2vYWC5anvMcr2kHPncGQK1LLYWqT8jwdwfkGPL2WtRwp5ghTWiTVoaqnUSsityVCWgj",
  "key8": "2FdXTq6P4DN3EhchstudVvw4FTEpscFoj89e1h89zYxC1iZmA6DA9W3Df2evR41wNjexC8gP88CQzv71DALjVWsz",
  "key9": "5WJgVBFub3BwcBZquyvG3fHFVm8VEXhfxm3Bm2nwdPYvNKFhPrgGVxiUVNTF61KoHfGc4MMgypgaV45vtKF6EbfJ",
  "key10": "2W6nz6eSPAxZjRCUPPkti7xQEjDAsHoZKDSTxKrKcd8MvuTJBEdDHrMhtZREo2L1wh4VPRmrt8DoH1bQTSzTJwLY",
  "key11": "Waa67GG4eUER6eyCCba5BW1ZFBmv5JJRJ28s4kPzoEHVg9PJmsHuH9NH6B8ctnGzfw7UE2Wonz1sZ7nS58esAue",
  "key12": "4L1Bbru95ykHLw5va21Ly1n1vSq68kmfdYirYnkJfvmXuyJ1T8Tti8SM18ssSw7rbHoHtUUjiEtqVgBVmcudCgHF",
  "key13": "2ZEpMDDtqwzSgMc3H1ZpTQvRn2wyoAytznkfbzN8hWYZ1fyozyCLiuQXQSfLVxxGZ8XdQBfSPqAQgSRZQFLihgqm",
  "key14": "2drAAvGDybvojecLYxbBmbPjaeVt1HabjpwECVcT3He8u444CzkXb7DMtY1ZcDrjzgYWTKvrQz5seh58gbf7wTzr",
  "key15": "4Ch2rrFLPtyNm5nPo9NNVrmkzmUR1sq8VD2jJqfodwaV63fyzbB4diBfsWjZ5rQcJvYxvc9k4aZF21En2E1wqrAR",
  "key16": "3au8WU5HdydU9gaawLQn6wMsDFqw9becyhbcTvj1rShsjcraAwdPVfqaJ1JH29AfqURgQCc9kN6C4E1KmwN3SY3m",
  "key17": "5Jb6BpR315xSbD2f38dTDjXg5Mw6X7UTChGZ76iiwqonjmBVWDzsiP3adRmX2aEo3rhNGSaDHqK32tnvqhYq6Vu7",
  "key18": "328i9eq6zfjJ774GMsPNbSxs4ZKxRmehQL5u73PdqnhYwf1GVEcZBdGpaSHBKY1sDnnMioXBfjcN7aNZSgWTugRX",
  "key19": "Nj6XztfwgLxD3WZDBhAiFuE221fbnkMG5y7r1HXdNe3vPaTuu53jQQuU48nsjBwXARkQqbnxjEmucwdRDY8TfGc",
  "key20": "EjZ2GZWxU8T7BMaijZFYfEgGuYY6MN2TwbbH9SCBqvr2HoALR3TKoVxfxks9kB6VpQcrxc1KZKpfPc4redpBiiT",
  "key21": "3AnEQR1gK26ZLpho1PeRFN1gMagQmDVHtMffsQ4zHMFQwrmFNPfdqEJcE6isnPX2bQxdUusjGTXtBh1PY3r6PQPe",
  "key22": "2K61FeQZVbdmEhesDDMD7TaTuKytNoVrYXWZLsjWHLiDgHsHThfgPDmD8YurrMFZEQ8R33ymWEmkdcexYjpM5Xf5",
  "key23": "4Ko2TmQmzTA1e8PaKer6x3fuY42NWHcJ1Foy2zxavWrxdXhiBM3z8SC72Ar4NWZxESXWjpCqf9iatqmdTYLh2Y3j",
  "key24": "3tQxJHQHmPPuJdxxs1RNUPvHqx3fVcJqthCqW36bmPkMXNp2JtMJ7t96j7wwV7hERx4wzAFbra5BgT4K9XqbCtKT",
  "key25": "3KSg9UYjgRdceJnwUWY7UTvc1rKXz189jrHpCENcdzK8sWMq6mEw8hHExhkSTL24DRmbnpECkrrPsRVNssqoQNK2",
  "key26": "5cEzr9qkbh9KVV1oqrYPbqEJ3ZfXYTYm9TLMkRUBJWBwHM1MENyrgoC3SzNvYfEbBBofH62yhHG9SZ3DEwHpCPqc",
  "key27": "3QKfNYiRVhPf1wu4fXXGBapMDvm94gLHFLPgmAJQE55YSszW8fgKz6zdFV4tUh4hmGT8ATr14d518aHHUbqaxTH8",
  "key28": "361DB8JzrQjMGULH1S9Prt234ikbUL3Dn7c8Vv7f2HdRzHjKZko8mB7QBtgp4wH9fdKGuAdB9KZUozKkDRd9Vq2C",
  "key29": "3JeMv9J17yH86HkJn2MK5vBAGz3rNdcqc2biA7qkTQcExs6S2iLp8SNE96jqt37Gyg1KvVY7cDqr4vtGPmh8vrBR",
  "key30": "FMpVmrmKkrrGX1nEa4eR6SMth5rJoptwuzb1NCjByjWs8j2RtnGe9RgsEEyXpdPbhFxrgfacBqyWKdQDjzWJ5EW",
  "key31": "29ZhRsxJcFsVbaHyHuvdJweuocMiLnd6XbAnJhcxgofwNYNW8RtniVxwMnnvoW6Sku1H7TZMu5RmR28WZokAZMLV",
  "key32": "4ejrndpFqoV6YV2acvRTjpvVT7pboTScHpxryDq7R9V4zr3oNnvLsxsLhBTsp9FtANK3crsvwG7ZMwuyrGXknA1M",
  "key33": "4VCnyNR1zJCsQDAEf6X5NdQpDcCymvdVZv8Hv8xZdCTquwE3kisLV3HvJ5J3CutvrLUhceB1Gq9hAUyPqyDDUpXf",
  "key34": "3XQTqPbCL8LkaqHaNgVWiL6RvBBRNzmzdhFF8udgbPqGjYVBG1m2MddoehqkH8DEMMmytbaETeyw7gy4vfdYeMRE",
  "key35": "yASitX1FBNwL6rGoNv1hW8GU2sjaqp6ba7K7b25m8iLzHicPZjeS8aHZDAxGGjVsWzi3c45X6uvMTVpzyXq1DrL",
  "key36": "2hpz4rKkJpFGDm4T4Z1demXbeEV3T5Q5SJ9Cd1PXYWetXLDKbErfYkfvBr9EtgxAiJ2iHxBk12RBZNQ7yNUpQP13",
  "key37": "3vihgxwc3TqPSeMfuFmpToDJSFbKgUMJ7nCNZ2Xp3JSsJ1xHkT32P1g6xLcC9Adm1X3KvjLvjCuFpbXTfkqzHrPW",
  "key38": "4Qet5fauAk3qVVR5EcAQp2SgSwWGTuZBi9eL9w3fFVYej1veSvvCkPi1BA7JT4i6m17yDVXK8KewoXHuiciabJuG",
  "key39": "3ydin1d1gH15QrQuxuQVe81mZXpYR3G6gyQ2S23K9ssk1SbsJwghMvX5yDiWuEgHnyUWuLGxcBByg22R5xgCZjPf",
  "key40": "3oUNajY2bkt8VYYFyeYyPWpAEtbGydMTdn9Gr1uZ525GgtYEfMoUFLK28TBpi5y4LopcYtZaLiwCCdpX7j97C3QB",
  "key41": "66LhrvNAGCgAkiYWqfEVdMXDzxaLR5sMSBfJHKVtDRsBUmEZb7tdsoP5SicpqZhuxQf8qxXw8SsxmWo1KowWuzRz",
  "key42": "3kZHcjrZ4zhMaS5PMFYSor31Dd8gTcjFiiFHAERBVNs99VfadWEX7Hni7ziy3jnq3Ey5tx62kw8AJtCgqUvYiMxv",
  "key43": "4B4EThKf6u7WYFriurC4EV6T6s2rs1fxYTSXmY9fRRzSynWkTmDpWDtAaQ6rJFGpVJCBFNvKPbB6fN3rvb8nhTEe",
  "key44": "65cmjemoRMhh8redggLQPCTj7X73BYCEPfscNqHGvMCwhTqSMgrt3AFDsLWfGks6qW6M986ctvFBCuJ4bsgES7fZ",
  "key45": "3Sb8hwYHqJ52FRpWwVu2jEQLYztmLHtJMtQT46YmFgi9qErxSXv3jQtoZL1YLD3iGAnVR3yref9fyxdxm1Q3gRV9",
  "key46": "ReDXBUyMGH8AiXJMDqqVvYiW2vuKaW9KZpGjrusHEnMk2dmQq1MFLt6tGRCvu6nXa5hLsq1ykw2P59Ca9Q5CJ2a",
  "key47": "21DJz9xBJ2tC3izpwF6YCs2QiNJUFL2Q7XT47x3cCTuov4wHeTuwJ27imJWfX6rvH5GYXdTmefk3TNiRaFuRe2xP",
  "key48": "4uc4JPctnkukpmQS2EvFvGGnAYWTJv31Rdw8m51XmqRJCsm1Kaas9fFC5b2UXo3mohsCXjqm9ntygMpkh8VazVQN",
  "key49": "5VE7wZhUcTEJ4ti4diUA9EPpfxJBjxUvTuCDrzbiE7VBhzi9dnuZ7QZxiGNE5s5PR4nnADcUqm121YaXdo3NHDst"
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
