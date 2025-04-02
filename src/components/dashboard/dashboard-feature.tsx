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
    "3Cp9ji4RCNWU6aLXwuKPN7sWJxsxCE5yPz3JD7Ji4bRZTkgoMyNC9xYHRUVXv1GBo76Ej78qXoU3v8mFqYQwDzy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ab33h1sRq8sdezj86NCozdAq8ZFH5cn1XySmmHj53GumQ39iJsT7P2k2uGSPxDDm4ZbZMd9VhbauENYcVcGrRmQ",
  "key1": "21WuhtA699awL5CNgf3QhNSmwEJSER5S9tF4eaYRkRjmh9W3FCrDskNQsXL8x1H7D3kXCeH2BD6ApFbn6X7EY9RM",
  "key2": "3vi8s8Nbv8Rhj8Xa8yMv7hUTW29BVVsx2U6azJGjp1f3y8RNf3G3Eb6dgj3gXKL68e5cxKxkrSPRWpXMBFYrEsN2",
  "key3": "2ThA3dRDhusUsszEVqEHSzgi8pDoYuo4pShuJUNEtedLGajV52FACpCez68TJhvPMbmg6fceJVUDNzdKoqkYkqvi",
  "key4": "4S9KCkGtftJyxFhKzHTPN7v3uN3qGmsdRGMNDjyBoTYaCzfHw5UoHqG8wvdK1qfQMenFtgYmEnbo1SrCtFqYUjUr",
  "key5": "66HLLRd3oYBbUyiiD4qF4NCr9tY4otBCFbam7rBh1jdLcNsCekAukoXc1YrbwBs3TZ4PKHcvvnHcdUZ1HQVNQNaa",
  "key6": "JUFMnXwJwLH5R9HGfRtVUzZpp2152UF2Hys9uNX7GXy37m9yyXcvrQp6nZYEYY9kYJUqXmWio1EEzRvoEF1EUuq",
  "key7": "3oRBp1g5m5Pj5kTkEQxsvwfeC1U6yRgFtCHm8BsrsXQM72g7HCVJNyEa6sEgCo7GCRhiHMoNKWjxgGSQ2B36Fpjf",
  "key8": "3dJJg7WmtU5ygNtrGuJLWD1N6u67DdP4XcaP3KbWQScg8wWjt4TBwDFKjFo2WTYC5CPRRqn1HkeN9cMffitP2BtT",
  "key9": "M24QKheXVUgVbk8bFqU2JsPVpQYUnhJ7yL1JYHxWBMjg1HNC7bz65J9x6B4WAYHGJ5gXpFwz15hF8NZ5rYjQGaX",
  "key10": "2KqkBa3q2RUjqb1gVda5D9hmeNDRDpwoF6fRxvpebrgo3u19Mu29QJ8WFNwhEYhmpq115wya727ZEvh2z2EfHXKr",
  "key11": "4ejXMgZyfsBW21rzF1nYxbXUF5y6yorvaQHi7m1dwfgSMske5veoz3Ci8tF2tngxvJfmdrm97QeYggmcx1TnZ4ZG",
  "key12": "58wDMHBtLrMayKMNcUS6HYXWwFN47gChXEZdCqQPcfXqXHbFDa9qtXY3WB7EcQ8udND99oTa1jL1QmUGtsAkmQgH",
  "key13": "4r7jhHhmRDeWcP7sW52x8TH4ZWHk5ZG5NsN8W6wUGfaBRFVqnahoN8U3xAjRBh2R4dWUPt4YXw5fsvxwpFUJP11h",
  "key14": "rGJzgaPE7uUjmqJL2cFQyy6j4n7jCGpfHWNDteLjZbBXf36QzirTzpjSEgQPdREQ55G8nNXkADYwbJ6knfqLNHD",
  "key15": "24RfxyrgDPSNhgvQ7xhps72eoHwz2aypQjSVr9xKMEtqXFfpE2RsHmzg9Uwuf9UB4hvDgfvCfGzf8S9Z19RgN89A",
  "key16": "3aKpBMdftm66FuztZWSEXD4q8XGQ5jD5u6p2uYT6i2Ss6oDpXyJv223hCKT6VyPs1koNv6EVPCJDHRb4g9tZu66E",
  "key17": "4rCgT5TmdrDexBGDuCiWSuLwMDzQnjuw2wFPUDbYUhvPVmZmsD8a5hG6oxNdcaYxt5kouWTeHKvtq2Lwu4SECc4p",
  "key18": "4x8ExauvsktDviNJuQLLMYadwMkJEPk1E54gVJjcYgFK3XJcsg1pHdMcqW5p5ACBDpxTSW9gVgzKiYZMMTrRVegW",
  "key19": "3QzCSyn81AxJERGbA2ymCqypxuWc7JYzdMK1yjHjTZBxHysE1zrSLAdnagnPfwtUjJitP1X1PjBGWeEfXQqNeBAU",
  "key20": "2rJ9PFcvpqixQ62MgFo9W4Xh96ZPgWz5dwjfS3CDLvFzZBVjee2PGzNU1vN8QzTBJJNkbdkfny5qGxNYJ639pJcs",
  "key21": "eXuHeaRGgpszipZHp8etg5SaRSd5gF3XmuPHAvFMjQS1NzdtSBbSasoB8rTGdXjZyMqQG3PmGfqbet5L4ZadGXy",
  "key22": "3ZSy2hjFss6WPZrivb7Sg7FY1yhtMUMW2JRUxBSrFYutrsSejbprvmJcbSVJKbJwJZY2mxw5LqpNsERuc4XcBUdV",
  "key23": "h5SchjBT1dtkQv8cJ1br42qR2vkP8QtQvmgeAYWKyihQZAzuctotVU4gFS1uLMa6oAKnmTz4XN4Zhza7JWMZpiu",
  "key24": "4FnfhYYsgf6kyaPPNkUeRF1NQFVfgZYqpev9tj6ckb27dbDd8jsttaviiEi3Jpagtbedot5w2Ao2DodR1uj58BYF",
  "key25": "2WWMzLWdANwZik4Q9ptJSLJHep5zu5AiP7SqSXvtmZMDAjpNSvWdCM7y595DVbCKf9iLxSNXkY7Qeecn7xj6jXue",
  "key26": "jD23LVEywk3QZ49uyeAbCCFrQb1t8Vv75s9cjVu5Yd3bBz9P3mNJsD8otZupf4oKNgaZFXXfnjRUXtmnbyP9QNH",
  "key27": "3QBooC9kytAigrX9bCqBhDHoHUyvTKFNniLHXttWgFD2Pch8P9bMqLFD3KT7eJK2VBFAF62kb9FRMDe5xA1FDgdw",
  "key28": "2pepkaKXWhTz3tHy5ri1XSwVo2okjhChfj2igBtVyTx7ComaEDt64uWgZmH1Joa5Jckad6cay9ffP2PJVFiVZyUs",
  "key29": "5xHLHwmyFVyAcD6U4rVhAVxe6LWqrhgWBz5vFwF4hm1SLquBhSFPbaPADe5sY1WgBp4r9roBWgzbCFuJPpx3TUpm",
  "key30": "2B7KEVRt2Ag5iDA7fkMSr7vwpyV1VoNpikA6mZLwyXDpc6bPbQ9wF4stMKacwEhDpWqBA6Gs6QnFzqc417sNRCQt",
  "key31": "LUS3JzK5G6o6niPyBG56eTjck5Secbz6BbDXeEfiHQeUD551K3frwjL6K4UbUFmKSCfUh4uySa91qUcyV7duSWk",
  "key32": "XmnyoNoXgVd3syUZp2LNGTdVrLK6C3c9sbZewRL5KmaUbkNx6zoMKKHVNBDvwPnySHL7xTQz6nBgRRtNU4ykaTf",
  "key33": "3w73sj6k88c3ViiGaxRLGmuEFjEN77CMkD8FWx5co7XQVhFxtG5S63euFgxDnQasvbjAmr4aDJ3ShLa1tXFjTo5r",
  "key34": "ixi3PeSK5HYUdmUKXWsjfcpfFXHbWcz2KCmCQmj7h9ZehutMRXCzRZHUUjxP4LUAmX36AnNpEtpm2C59nh4oywF",
  "key35": "5EAKmHdzH6Ff64G5GMGZqjTJ6LeHUTGtqoUDFwNLnramJ4unu4zZUTXJDwB2Emy85qnpzEa38kYYHy3NkKmdahaT",
  "key36": "4jopDFrMNivjsdkhfh4dfY9GwNWnbmXeBsstzn5XnzXeCc34xgYyctbfVcr86L7Y53jwe4zP8WDryHHYRdaEugpS",
  "key37": "veFfFzWd2KGgVeDmf41udWbjpJoVKANzEyD6cLsfbJdFRd2cqL3MK3XVH4B1QVGbteu3TCR4G3CMX9xpMvycxqy",
  "key38": "45vfKDRUQsfrFVM2Pm4BtS897AMqY3YBoqmw1pq7pr9VQrYdpBm5FiamLkwseS6qwrhvWVfEjFC35Kbbw3mnSxBL",
  "key39": "3jzkDnQx8HF5JGjGDkTBTtWjaGno6zZ3xmcseTNKTpcYD9bPL2neAYq6CWzegVkdT4UL4Dtp4P3huu1S3d7LFCme",
  "key40": "5rfeyXNmcdrUmpfUeHyUuNKXX4BA2KFCdzEy3JznGvbVBchMPeKNEDghBkL3nQGFJ3qhdVADBs2oowU3gY1b87tU",
  "key41": "64fu7Z1kaDSecuGznFYCrxKqmGw9zxXQuqhtFYyZxX5uJ8eiUVTDqULiv8xbiHeuTJxib1G642xCty1mSQdrZoGS",
  "key42": "45LcSU5a7DHif7eQHWouYhUHyDB7HCG424fk3QRi4P1qzeNQPagJVbCgcp2ifPik1ZSjWMJkpfv9GTxrEUgwkyyv",
  "key43": "2tFgmCa7juSEp7jvGKy3Qyvyv53Mi9UkMfuXm7yJ661pKwPuFF5kJmdMj3Lxqt3hbFTCQPcjM7DXvxXPJ4wqgsuE",
  "key44": "JhLbHayXyVdHno9CzcRs41biMV8tKAWxLwAep3wtXF1DKDr9tMm31pD3DXtZ335c6fCwNDMqSwBrBdEVzPHmmcQ",
  "key45": "4dPXJdQ1Ddtsed1p4yJGsBVPtPf9g4NxswYomcs6Lp4nhLSqwTKAwNHhv7oS5DZb4teK6qdPfm7rXercqGjnumT8",
  "key46": "3HYwx2wKUViFd6iv9WZm8JUpqLPB8ED84HtJvCXwHwZ6kH5EtknERcQvzBBosjRfkPTy6ggoPXUeVdAdSVr6xbxf"
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
