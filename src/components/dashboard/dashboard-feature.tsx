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
    "3EudtML2f948iJzpcCiaEJo1JauC5VAX9BwMp9osuqxMjtT6i6xGLoYU748aJZLdUED63qFpvY6KuwtFEqwDg925"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6aBHrjCfZoLpWBwsB3fvY2V8vWF8NymM33fXy4XrSJewmnK2yibY6TQs4AnZh9KqBefrBU5ek1g19AVJob4NUf",
  "key1": "5SUUQDfmigcvFXW4FE7Xhdm4P4qVuhMCRkdLXrZePGqHbpFCceBpXaFmqDVc2kCEZq6Zr3wzJ1pyepzsyy35FeqP",
  "key2": "5LQWcyLCQVeBhc7aetVFcPsap2c14jcEgb4Ac42JnM4tvGxLsyfCgKdTNdpcyZbiUCoVLSnirFoUMMtq6q6TUVNV",
  "key3": "4tw3w8ZCohhhwDDPKvMm1ybb7oP5DY2eYgb9i4xiP8X1dEiJaJm4QunGSFzY8kZyDz8DCNLjeQB1NA3gQvbgYbnt",
  "key4": "3X6CRy8AX3v1TrkJCtpVpAjJPqbKdiWBpTqQHFwyJwXBUrbkzy65SxDfrQZMQ73gh6oN6crhB14VZhAZvXJwdeXP",
  "key5": "TPEC5qD2LQ9k8aBsXW8PPvUWuCe749Ui4g7CnHX4u6qz2rtsnuuNC9MiVBPi9TwF7xpFkXjsDsdPaBtYCKBSoME",
  "key6": "37sjKgWd8xei8W9xfw4Fn2LrU115QnQ4wGw8f194oPafEUwAWVnSxJrEQbiPQKXniF53tQLrWgEzrDWfnk3EmiM9",
  "key7": "5CNiAUht3sS9fC45er2VuqN5TjLvCn3EvqgGYgufwCtBjBL6zzmTx94Zf5PggnQV7DMZLEBQCbj9fhfqeSAjQEB1",
  "key8": "H9Neb68cRsBWDD1vUcs6sVVnVgERXp9Wk2XqbTGkuk1gD88sAqfM42GpGy7ehL3qwnhrf8ZzBcVhbxp1vpYFTfe",
  "key9": "5sQ1PZtrHhXAUVgp7tfdNBw7G5avVcxbWRt4wT9nXDh3dr1K8o1aqnmaX8HL9PaQtN5UTuNiF6c73g1dsLDd3NXK",
  "key10": "4Q6CuDWvHCDc1Kxc1wZnhvXip46xptkhstrhiTNjw1M4jXa4MrNDQPKdcwcRnLGNDRXAxNUNuZX6Y5mtBXJKQHEk",
  "key11": "2jhZPtRJbZjTTLyCmxJTPwRoghPoCA2tAAbeXTnuGwRBuC4MhqSCkk4zn4c8RkWZsbTNwbuTX1F6ejWhHeNkjtui",
  "key12": "4jHHmzY96K7mEF6MqTTZeqMXT4PzoR6es9GucBHhaaMg5ab4jSc931Kf3qLbhq3LJBYwbdnokM3rcTuB6aCnvSHd",
  "key13": "3L7oUrzy92AUTqbZm6MRY4kszgH7gbcaYM7Xoq4uHPHfid1f3kZjBsfh2o3rCc4ifoGLXsRivLg3RUME6VnjAQ3W",
  "key14": "2UcNmrk6a9UjCizev2Wx4a82MJtfSvEkMUerpvXNG646aqtza3VyRZWKrDKyeJkNNQ43xX3n4Cy2tC2R9veh26Gd",
  "key15": "3mb17u4bWM43aZDYsXcQ2SkbAPSxrDBP6MzEmxbQrL2v5PgcuPr1venPqzNd5i9CT1R9T1k3TDSApzSRNve1JGT4",
  "key16": "ojZ5LgZfPTRchqj59KHyX5YHCdHSPcqF9BdqpfJ28sA8p1yd62koe2qPmbxXWXrVJwauej3c8ne3enZ9j3qHDRv",
  "key17": "3Mz46gB41HG4N3eDroUjgACKb9n2iyTfxFEy6ehcrY9EPufMM8VsZo3QUoaA1WQZGoZXiZMAUwhxHVcvogVfSSpP",
  "key18": "5NNEPFxW5AFoApLndz2pdm5LLj4RMdUC4gwso8KDoaZyQpcbHB7eapoP5W5Hmy8G7wdTGAPHa3rcjLha2t5WzyF9",
  "key19": "4YuZE6QAxFJKxNr6oVtKHsGJBQ4Rp9Y2AGdq8W5SGpstDRKKRoqwvC3KNEi3GGxg21nhjry8aDbWLi8R8ehm5FFR",
  "key20": "3JwzYPMj49Vzs2vr8HNwXi5jYu8JcugnPNM6PGS3wR5MU99Vz9B7uFceADpeZUgr5Y7mb2EvuV6cCEXKQ5xPXkq9",
  "key21": "UfkAjjnV4tHvqqKdgnfDrYvhacxfnhYaqiNeTvLWAXo4ESV81zAegwxvzvXPvXqoNYMjxtCdc3jWRQRyMA28MVh",
  "key22": "39aCZAqFqg1yDEtWfQCJkVycAKMqFkNzBAzMQFyjUu5mRfCUoGvjCsk5yPvyigNF8iR3xSNqnLXBvTCjySXB2joi",
  "key23": "5V5e9GMr1ac2hopo3shfsPqHSW4ZxGQo9Ka63C9XbrtWi6fdgfChyex8x1U2ULJuDZuXT6KLBeXrTF2D7qwG9sPc",
  "key24": "2znV3HZAUV2SxbvVznkUCRGk8JoBf8p9taA1sYbJf64sGfjq9bmDKBbwP26suXWzyTsU8r6NrHP8HanPYGxyn356",
  "key25": "3bPMeB11cJFvmqVis1PQ5R8h6qK2zcrgAbm5LKP8EewBpxcUk2AzKmnFnEKYKCGf2izjreGiwwwErop7F8BDyGYx",
  "key26": "5cabVe6HGHigi6zPbHcXgj3bRQGNwYhe839ZZ2eVL8raSCnv4mtisbrgvjtd26dxZ5Me7STP4tfpMm9eQR5Jh3nK",
  "key27": "5aaZFZJGsycF9FoogK8sFvq1GV1YvAbZsd2PFB9DTkFn93JBYupjqBiTv9Ph5f3GuBjhyHkDDWHaR4LFvuvZbKj2",
  "key28": "24muTG9EYGR3kSX4zQJirpJ2ogsBzpcT7y2XTTx5V2USF7NMBYy5ngmJnvyUirRBM2hEz6iT1MFV8pHB913sCJ2i",
  "key29": "2m3Lj3PPkuG2hnpUZrSmwVN7NL1yLWdergPPejwvpX1ozDSoLHE6jKmCVo8hoavTqkfjghhapJgYyKsoMXsPBEKo",
  "key30": "3SMSooTtXEPLUQPgFTR7yhNcZp2KDm9Bsn5phMLsxx7fn3bmbVjXTH3BjCePLwQVrTRPiEjrVpJKvs5iwaCySd9q",
  "key31": "5CQGkfSMj4Jzh7HWj5pqNUkj924kTvPh8j2xhiFLAftg4TrXaQ6bNzoZ48CGHLiQHNRP4YRvKbyNdMruKC39UgLs",
  "key32": "wVptdiR7oCxzRkRcUrb68hAreUaQyTsTqsHujDuoQiyM1Btt7VPMEi7wjB5c6cuYgeBgpaRmW6BmnLyMrgELHrx",
  "key33": "4H4LEzzAAjCKu2pQ6eaaQJUkq8NQ58n7NCAMZ9dicbTr3iWy2iNhbVZ6CoNHrcAKTFvPEQkbUyk9JaNa3t83mFty",
  "key34": "4bwYJ8dfVrrkfj8cZWvqGRbWK7fNbLNPQg9ULx1n8v4oz1Pwbt1wFP2vAM5yG1ZRUrSBhgdv87qBM91KQrD3eRSo",
  "key35": "2oKCH4mbyVv9KatXeNaRxkEKZRpqgnezYQMzoQF6hP8QnJLD5UX5ZqoPG2FcRQ42n9Ew1TmUL1JKZ1U1VwpLnXDU",
  "key36": "37iMgduJdGPh8iRzPA6YCsASAqoBRqmLZvri5WVSmwUuHE4BsdnUophVBR2UDipTaHdrSt8PcNvt3sqNPVcf1EAL",
  "key37": "mcUuUPNXGJw8dQMXK9hchKRghNSu9kVC4RKyNC14YycJ3qNKYXCJAxgG3enJKNe87i1VuCeaXp1XyC9RBAR6wmm",
  "key38": "21FNtbdMoT9akmXbRVUgNy9sFhHAsSafYDTTMnUskoAaeznpvdYq1GyuKBkRBnGj7wKV9kNSW6R1UEJXrrKkwRKG",
  "key39": "4CEgXxqgzXffGVUtTg1n5HCwvdsHLYHn1GXiu4kUy9LetCfDKq7kDdKW7DJCjC8BXqiamikPvr4XPaPBq7Vt9P2n",
  "key40": "36oXXXxLziBb37Qg47r1Z6y1XAUmSb1W4X7XkgwRJ35pi6FUSvSo3DhMQoJcTW6VPQkQYjP5M5pGM42tSdLCozfq",
  "key41": "5ZatmEofv3vrTc34S1ZG4F1yBWELMoPTNuFuHuiQ2B5jKJmBiYVhLz9ygaWGKiD5HbW4vLZmNYZV8vdu4Kpn4YcN",
  "key42": "3Qvd8SP9fFM8c69UFHJpp32R7bdmScMGNFRW4JpzY8u6U6f8yR8fiDq1moSUrSyHgt2E2BUFMfcxkthHGhmq2hac",
  "key43": "2LXM4GohnTyrYTfJiBMmMwN7CKTFFAbrPRtvF9BSoYX1uPy9hV8LnT3nvuADRcHsi4rZfWUGk99YqwAqQFDCTyPk",
  "key44": "2tBeLErdkbcji22jshhJi9ZmJCE3Di3ArHsTE9tAQ8kuduhTBDGagYSByMEMokY3ZssUsuSaNKqUwE56uqbhGxjg",
  "key45": "29fgQ75vDUu5adJqFRXNXpyqzo2qSjy7Eur1WnQrT7RX4VGMaV9s3Gf5P3T6PWJMvq5CtjPL5RgramS4PPTjf5eV",
  "key46": "3NS8MgYHoSS7MbLdMTfzmftWk1z5YBtnH3pWw574i1sVxxRX2qpXzz6nmGHALQTbLpnkaQPC5ZxLmciAfxcbjMC3"
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
