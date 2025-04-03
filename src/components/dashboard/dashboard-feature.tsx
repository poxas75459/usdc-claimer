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
    "3YPQhjDQfrW6zCuSgvMmBa9E2xGoFcFoQYgVVjZ2R8YwhBPi5bRobJWDYcKda6QtzSjiiFto82B77XutG6j2xXXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ZAwWnv1Ddi1hfXoBt4pk9LRpfY31znSyp4QKx4U8W6bhpUK1Po2is74TSsSMjcorB4VWsnxPpgCqjUZJAcE58e",
  "key1": "3rsvkiFPcQv6x16kRJdT4Ah8EZGonF7JGXx8mRKtF8UiUZJ319wh6V6DZYRXJzLFAEKVJCsGQyTqSi539AW2r45C",
  "key2": "4QY6Vj1s5tL6rAufX1e53Yj5ouhnuspddwkGi3KkyYLjQrttn5PbZmg22PMNQmn1HqfQGJXSm68xRBGUTGXudQnZ",
  "key3": "2T82wqN4skk1pcVq3YMp7XAmbpu65tAVHDWcRzH8mYKmxrQs2wQb76TeY9XtPAuzzNwLW2vqkSoSTZ3GKnqSKfAU",
  "key4": "4HywnkVh4eBC5cpcEL6cAbck5FUFezHcQXDqpRCZhU5Gph4UBLCgCz1umtZY5PvFRXcYG6Bds9ad5uHuQFZoLQSw",
  "key5": "4u66VhefQkshknd2ZzDYHptfaeAKKFhcUqdNv8HQUtu2GuRx5srmxpSBPsi7SP5DLY2GvvpkPdzCJc6RvWr96joa",
  "key6": "2pFFxXmaru4EEN66Xd34q8ebhcGA5YGFKibzn72ixNTKNk1hFYhQnu97MLAvXFeg17x9ECxJ5vq5T87G7XQ5W1UE",
  "key7": "29TmmUvsCSC4y31emWj5SwG5B8V65DKoB1d3CMa6gtM4nS6Mb3Hswxr4Xd39SmneHQSUkvu3F625FoNnS8RAo34m",
  "key8": "4hpRnyRWuKKySrWUEaU9q5pka9fSyefeA1nacPzMLRUorAfmFC5CMTiFn6yN3gsfJu4d9Pc6FT2BDL4WUahpthSc",
  "key9": "Ar39jyQpUJSKCKyauzxhwKXxAAzbzqa39pJC4EVAvsydfocm86M6NosHaocvtQQrSPJ6dT8TUzyHBqq5zhfkXA6",
  "key10": "JPugLsEFWHw5RufjSAwHE36QX62KnmETPochLRCKWgJHBMMH1XezxuZXWsiB9zvwEquCN7pFfZF7UyEeJUfperh",
  "key11": "2W8vBLU6Dg9udpMpedyaD92A62vJuoFXN6dojv5otcrPxpPpbFEXV9uoW32V5BPHwtYjEtHqqu1gE8vSy9BiV1VF",
  "key12": "64ZS4ETMNu4rjSF31wok4pyrtQDc6NYK1tCjUcgmvABVQnxCMTZSsdCp2rkppvkUYoTjHVSQn5if8ezt9XtZrzBQ",
  "key13": "54VNDTMsMQh9h44tcXAb38rmcXat7VgX9VPBmYofERwSEBksc2c7QMgNVnoHYLW1X9zWiBqvtRkHQaCSq1NkUdx4",
  "key14": "5qQJKrupsCSYbdjxHQbCrgu7DXU8WFNdD383F5miQ6YWXHm6hnt6VHShYvjUAGABaK3ngabtgqprapkoJ2oktg1r",
  "key15": "5jZUf1Sbb3rCK2pcP2hLGprt9jzzzDqWUb5EoteswmeivSR3oXtUnucNmsSfA2wShwE9eMXHTXU7JTn2Cr5pXK9k",
  "key16": "cduNAE7TU6BmLHZT3G1dNsr3qE6BZJxvpsPzkd4o3QmagpBqvKh9cnshAwxmTh4nY4j2tuaLJ4GSt7uBeTucjAd",
  "key17": "3Dobd3Ny9SBRPmc5qYjN92Cy6ur8vnVTGsv6C3QFFdMpiodRYnfXXr9BG5S3DkDdRHE1XxYasNtoGDBye2YKurH4",
  "key18": "4w39v8b4thLYUVGkjet9La7vPdc8S3bTGbafhmW5yvrHpKbwbLoF14JigdEu2AdGFdMRYcmxA5okiupaqUMF3rU8",
  "key19": "ZXENerZdcBiCWzju6CfzSEd3UvFktRiqAmGq63F2RRa6phRdhZsJaq7F9KXwjJy5YSCJpxCVb91Vftw8nVMjnzM",
  "key20": "2Tw1YrpbEpfM1fEK3tDrS4k3yvwJVCh6T8muZHhE6tLCbcV92Mcnva253ytJjRhZpjx7J8XpYHbvfhu2dqMKfqqn",
  "key21": "4iSkPAmmEN5vioyBVofaB4SoYueVfNUgornKJb1DormKXjh1u36s3mFa8oDKRLoUAKFrwieGf17Szx74MivnTCpS",
  "key22": "7shTjPasyD1SidLD1ww9C6G2PeB6Cgt4pYMsPCNHFAKenNXt8NfvpyStqPp6fQUaKgbgydCpskPXvUJEBsUKA9M",
  "key23": "2whmkApTRZx45p2Jko35mxdoQbfnbUbs1tnrPAyqNA2JyggFsUTTkJud49pyWKPPyb6uvpiYEAF4T5d35HsookzQ",
  "key24": "34xYN32dhSbAKgmDuzg75eFQhb2hfbAnbtdnF6j4j5JoneEWHVPzdmdVafQpA6KxMkPh4QLBg1jV9gkoHHVvcGeQ",
  "key25": "2thVDssSqR5m3n6ym5YpvNQ3cQMyeJDpDq9bHP1Xdfin5oLPXw2a1KjEAuTXH2d8STCiJSnRBM9dsxkFHP3ZLnWn",
  "key26": "2sUYHTWax6E22zhBnJfpwizu2GkUTJ1m5RhTWZ6uev9PSFiFAXeH2DXcmCRovRPTrbSNKLd1C1LeDCRJrSjEMW51",
  "key27": "5mGhqa2nFTYfSEw1YCg7VmuhW4cnXkZXWXfwo5ehsYhAc52YtFm1rRa97wzuVerBVD2C2Spz6zRJu8x1ULvUtoyW",
  "key28": "2djncaYjKaMfnRsm7mHJ9Tu1kjVHTLh5Tkr7YprGv5CTjAmfz1ZnHGUEVGTTV5oDRHM5brjonshmdJqhyquTwxYH",
  "key29": "MB6p6GMXhrWRHKYsfBfKtmb5fRKH1f5eu9B43xLMJFr7864A9y3vn2XHJiHQNNaTk8TyAD7EQmmYy4Thi59rqGQ",
  "key30": "2ZxH7Gz91pxD6qrPAitiHGGZc1tYE1BhC7guaMQvGPJbSUC1XSX4TNDV9GfBQmAzQs9pTUWGR1Ap7KJqjx1VtSyC",
  "key31": "2wex3kgpxbUUzY7TTCpaWJ8wbzUhqSKuL88wjKYyMLB9yXauhyA3Lg2Hn36Fdi5mPcQjUo3BB5Fg3s3oEDcVBroW",
  "key32": "4n5B1tAYwu8c6FUQjeMzUUuWinRJBRAQxb5kZhXXwjNcu1jaZaSdrXRKU6SqtrWZJ3FAMtsDKyrcSFixB8zzjp9S",
  "key33": "3xgEGgF5J7jKw5u42AygLsN99EvozVR8yU1NpfT7dz52qibZdKMrvwvz1r6JBmtrtruhAVHT2cbqKaFHKFUWiDmp",
  "key34": "3FJyQTwEpnPqJKaicXbrkMyWrU3bSBJehMngTwb1ySQ7McQCJv276DhTP3DEgiv1ekerFdpcbZCww76GQdQvG29A",
  "key35": "4HamhdaQy4wbApALrVENCpbcXoYRAEVytQurMD2s7UeEeU5v2Q81Xddy3CFuZE88xMxBEZAqEY6HJn2A3YseRyht",
  "key36": "5NJM1oUPwppcnNxvxkJx9fkQFin1Hxwv8fUP7ipiSrpa8SoRgL1hJzsDUEq1KgM5zVr7wuvZLLFuJ4XDjhQh5eVX",
  "key37": "5cqU3CAJTEmCHx1V9w7nsxUxmbxoVHySadTtsNX31rKse8A2zU3BL7MCNHQJucpswnNwqXHZd4r5bBTBmdmVwRqj",
  "key38": "3LHEiJf2JaEi8ri2999Hcb3FwaPrAzqPEsFj4h4Hh6cFtpk9HbnJ8PT65SUdUyCFFDY4yw6Xp5b5jjzeXhhEPjtg",
  "key39": "Q42bmJP9KE8xYsEzfHbCjWFS6JtaU19opP3GCaXKRTEKSNpZD3v8icprdUEL2CHAKRFLC7Lyn9KzRed48SJ4pKL",
  "key40": "3JmdHAyFii1sTM2eyT7ULX8uFyJYxaSkGXQbVGjW5nBc6vT5pdPauXfhWoDKKpyYpwtQqu7CRaijg7N7EsQcuFAH",
  "key41": "2HpUqhLA81XczgFj2i6tVAKzP5ua4nqQPAj17d3q5dfSNxYAdcLNuN9iYH3QAjc6Yd7hWYZqnAMny1E95s8fkrG8",
  "key42": "4LnjyQ4DiEQo2PZ822a3vWD7aC2XTvy7MKevqsY5vECdaY6xC2DbEGHr2vef66sYrAQoB9LAPuAenJyLME9EDsT9",
  "key43": "4iqeASweR8e1BAFNA5VXxXnf8TbRuDeq4A3tAJ7BZobkAY3T3NmPn46EtMB5kx7kKd33jhtSWZMkoKXrm7uPED8e"
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
