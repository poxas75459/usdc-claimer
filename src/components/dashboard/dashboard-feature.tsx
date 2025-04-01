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
    "4MHfRS5bUDTE7iKnHULwzTMxdsvDPubbeSxTdR9AkKqtWYJgQp1pCFBJSLfcG9NM49SBTFYUvEfdLGq8PykqQwmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDwuhKXm4fjXVMtVvACruom416EEB9B8AYep6jBXudzj1MMw4nPTBAMo7sM5RRZeQQXVTYJnpETK8QmrEHS43DV",
  "key1": "3GVns4enHGr5Tq9nuPtsBc56AMRJ2wsRid5hF7ZLCHSn2vyk5qgzvTkYapEVQs4sDmWbx73MPNc7nsfmLjqdhnhg",
  "key2": "2fodGM733ZfBFKrY4fc41vSC5gQNn3F4PNu8MnGcZg5J8eSrLU7JU8WKAnt1xiJDPFtisiBJBCLUb72qvX2mWVnX",
  "key3": "4cVZHN5fPyZQivNAcbv5AK8NNSsb31HECpMJJ89ePwraw5sTNTC5WMDaVTHMnScYjhh75B1wnTBfLCT6L1pPo4Bi",
  "key4": "FwBwJTbfSzVu7biSTt2jiJ2f7Fk5f7a4wetBtT2VVdRGZ1SYPKsMyKt6TuGUA4BMPiLA7iUiXB4xz9Kh3pKRLEt",
  "key5": "2cQ4eBoV9r4sAbMUksQtaoGVNeQXfr8N4AfBcZSQfkbkuVMSf5nzou1Pe2srcExGcbvYAwdbd4SKJDkJzA9BM7Hk",
  "key6": "i82zqnDQBgzoUyTmguYTvrFH7cPd9gfx3cHu9qNfLuwk5gJvedk8b8RvvDR8gR9gRXhDeAV9E5tK29HDhepug9r",
  "key7": "5sE8JmNdhxvy7yuUXv3vRcEurRZUzdibBF2GksEyB89A1sojXbWyEmAt67dG6kUJJwbfJF1wG7sZEdEUSYwWNLyF",
  "key8": "4FizrtUFDYCdSgULM3aunrfWyjiJiPBDgchzKo168YrFRGtuwHRftaRVsZfmqkjqPuGA7yWachQNCkcTtQ6jtja4",
  "key9": "2Sk6KzvnS7Wgti1c3xE4J9WC9fC6oAwVoqAVZftj8ZqEETiL7upTti27GXccUswm1pWnuxM9hvqDLLGVbCoGePxA",
  "key10": "4ZxNEVndRZkYNjHDzHJHUkK3yJJmF8JephCd8UPjz9BRXLysyzo2r8ZKtkFfbSejiW2pfWc1UhPiposPAT9V8jCt",
  "key11": "5Hoj8QzFJ64MZVGokRtApoxF3deLNEocqCMQ6eq9js6DwYaCQb5Zm4g96GuAqkbQTHaBC7SJbf1N3pxJ8Zv962RU",
  "key12": "4rBueLSJFWJWFrcATFqxLA3kYBQbMFUWDJW2kFECYmbKrvZuQNq3pzqUTorvwRoyhHQxG4STb6bM3oMSmSX28MSk",
  "key13": "2sNUdYX5BKoBvjQiXraXc2wgmf4c5Bx8kDsvV1DKp5eE4t7iNrARdEsAsCuuryz1PDSdmvCtkDuiv7ofdr7k6aMZ",
  "key14": "3RLZj1px5oSj3QWYmNBEbkfvp4Efd4m7UXeWrgxsYUdS2utSfjtjPbEW6C5EmbaqbKXNFJ4W9tewtXhTwcB4ZeWM",
  "key15": "2zdcs1oG9gHhjNN8rMvhUowqNLvnbAjt4mxMX6QFJjYGpi2Hza7SYFaS7unfGiwRUEYL9AbQUFrb8fWRBLpvo6CG",
  "key16": "5bVokdvrrXddQ98m3XigbJCrYTVAmn6BifBtbJt9MhrAPLKs8A7vS1YfHJ2d95Q9TeaLr33URUrqmjPS6XcV5Wa7",
  "key17": "2DfCnUaHp7ak13GfJjNFMkDW9GgrXV3W4QfUJYR1TuAakebeGnb2UcrSYYEjFCWpy6A8q1FQq2ybewtuSG1eJHDz",
  "key18": "3sWuxBZ9KCDD6JEbr9srvj6wVRPCVwbcrSyNjxHVLCkBWsm37jxDfWjGHCdrz7jDFME51gQYsyXG4ZDTNKuPKyyG",
  "key19": "4abE6tu8mjcJZopEGrBgxfwT2QMiRJjxbznCxvbWMueWkXUjdWqPdpTtVELvWP9eeL7yYfWLDKdq6P3myQS9ozzS",
  "key20": "qqWwMs5nqPENWrKmmV9m3SexSYVHD2ss62wWJfXDwukBvWRETZM5UPFGpjv9YAxuG4XUqvbMQAVwmbGAFKpSQn7",
  "key21": "45dxLnb7eh88QvKXCV2DwyVVWTG1htsLR4t1egwbm4Ppe5B4n1t8q9aLxMhkSXehTMvanALQA28QjEsQVi4b6cH9",
  "key22": "5Ji2HQwEj937wTDwycb6Vag3bxDqtETxhatp9B2eiAcxFrFPn5yhKxqYk78zr6MV8B18FaDAXj5ZfGFbLFzK8F5t",
  "key23": "2BoE5Jvuyqtg4GV8z4pwL6iJsRCWWht7BbP5YkLZetJQ558Fm4fhW4sK7CBBMZYHdppo4rWLi3Re16AKn1qVuh4B",
  "key24": "3uUF2ff61EMQBLFak83CijMgkFysp1x7MMWGjEk1fXd67z3gJSzusN8Dw62YGZWx1NGqkpFnJKtpVh4nPTXCojWN",
  "key25": "4yoMxr2Ku8LnWKBRcmfYsu3dYWxkrpcFoG4YYBKpphfeUJ2shDai1PdYUaHFU5ECswAa1BToiEPyznRddTicoAAy",
  "key26": "2SEkh33LchHv1ApnTziWppfWo3GFrdNbh5kVU5Z6381pUh2cXBimAxVH3sotLeT3UPgKD5bLoTQiVJDt2rhJwC4E",
  "key27": "21UrMHcyPqa2Dn6nai6HJe6N4pt7nj1Fk7cxuQhX3Gh4htLYJJ4uWqjGw4SRsn8sn9jQD66Ukz9D7YoSoNXKwDds",
  "key28": "FjavzFMomuqetY5k8ZKp4CYW3XsTzcJzgRgYSTAUGABFbmAAYEoq378C2u11v2jcTPA6sjgz95dVVjvaZXptfpy",
  "key29": "jAbPzKNooLJFi9HwduRW1WzfV1GC74Z5YLdbdP2wAX1D7ZNo2bKKNNSNDTscsXA2HV3dbwc4FL82SqNSUaAhfbY",
  "key30": "zrWJ9Waej8UpMLzjSMq3pukKa3to1JnKWzcDAJUbmSEFbm4eU8Z9XHvoZShz8cxn7M2h5EMz3iCDgDM69Y9hRd1",
  "key31": "51q3W2hv9mYQczuUUbRrsMKmBypXYzvhcKHtriNBuaHPVshFkH6rbdgGM3gXLz6jA7SdQLRF8f7Zy46pbhzzGKw2",
  "key32": "4JsbeBrRpiGe9dcBqNeFRqCnmDH4K3fWw8dS46fNckoYXV9JVuLH5xcm76XzbGq2kGV5dRezRzY7BsziWwXhS9tJ",
  "key33": "2f354s6ipYnEJMi7NXUcSDiiyBjqeXjcAtzdspYkQ1Jb4DYV9S2yfbpUN35ir9zvx6zPfSXghctq4CAE5dGizTbi",
  "key34": "2RBQXxkwCUHGBoQK2U1LD8qLJhbKJUAa31UqD6whqWTHHTBUp6kGNtic84gydqTdfGSXQpKiZMD4qfWqUWzeHSFE",
  "key35": "2EeMhn1Ftu4rR1C5w8zZT9KPKmHJB8ofQqWEfCbbq8g7CctCnH8isPNNLoBMetrFUSZSWRAnocu1RqDQbeP76uPu",
  "key36": "2bP3jDStTbqD5mKKkC7XM38PJpRcHXytsMxH4ZnryCoNzJPYi1kZU8bfHG6ULYsLuHWkWVsxAyhAnpY4ts2xxKWh",
  "key37": "LJwEXh2nWCXmwp6qhgRJQ657uzQTcP4Uv5qo2RJS2azdQARK4tcqnCMKDrj7pmCUaevFyQdcvC1u59VAkvus3Gs",
  "key38": "62PsPBbhcSJLdajXHEcqaUE6V6u4e21xMNrHer2cqqPuxMRRNhfmkxjWmJwfat4mW8vyqDJufhUd2fwK3Gsv8YUx",
  "key39": "4woz34s7wgRe6wwjtNKGw98FFjrShoneXNYC54j96Ventox2i8ttNEu4pZCZgpd7Jx7PW92A2tGacxMjLv596Q1G",
  "key40": "35XDJ2yFLJHLnnNGxQke2Bd63LHYNddGhGVBgShAkmNxSqJD4fCoB2JLj3KGarCFfyrB7WrYXphUpnDzJt5Ytcmf",
  "key41": "3LnxbfoJqK62xejwYzuEiKEiuTktAYZG8542NHVQgxdb6BzA29yoXPXYhu6CWdugyojkLTRV4McSFkP1v95u5GDM",
  "key42": "2nvvnqNuHhHDxw9LZMicbr8Cs5AAu1dFeTZLru2FaUYoewCv4jDHxckjXcSHpJUTtrkNVhcYYZXNPk5RkvB1D8GS",
  "key43": "5r66csvbvGm1oSzd3ryAfyF5fQ2KrqWdjJ8L6ginJvsLBLAtqJr65exYzHvGt1DnkY8jS79EmcmNcY5uc7x8DosZ",
  "key44": "3Het8h92Mz7VrXCCCKyRcXjtRs237zbLbTq6g5Z5Lecpgi1B5434Sk6tJGm5sKZTSEgTuo7MfpQWcWUNuPjHKru",
  "key45": "53SLEWNsmyBmjht73y5J9oPFXZYjkFNUVpftEjeFVTzD85Q3jy438HYLzkV7cuLUzpZkuR9JfRMaZmcdkCAYd6Z6"
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
