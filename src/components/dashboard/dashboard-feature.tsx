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
    "D4PaReA9UMYNqk6cYwDmjhQnAZLJ4PkUtuiCKKKRHH2TZVzGciH5p8kJknhgMHKrREC9LJzZxgVhfK1fphNnwoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NrnhJc6WhFR2ccm5mooX2sQLQZtt7eTdhKxW2DBwvQmCynUwJ4bjorCuWqEUGJBXcMqRdCqMNkAnCXu9KWYQz5b",
  "key1": "2J2fNnrSx1TMFsMye3ZVJ28pdaACEKqa4Lqco2WRVVbvcr4wtWD52irs3HMwAFggrfofSHTPU195NDYctgoLxBAf",
  "key2": "5L5uXszhe1F2avfEnZNkkj1EUVrYEAjGGuTHQBLMF7LzZuK2C562onDfZRukfBc7NPe5HzePRuXMjf1G3kERwFLN",
  "key3": "67b9e9NWSniLpbozX4YjueQ73hJoB9NhDPy9d6DkvVVfje5Rfs6NpjWHZDASeJRrN13ZVymg5YEvKmcwTN5Sh3R3",
  "key4": "2RCuWP7Uh8HBDVpnZZ9n68Kg1chxPDqqZUtYuXev7MaZobnurq6aULatNzz7tot6AQLBEp8L5GYWLyoWaZMezPk7",
  "key5": "5Hzqvwi8n2qmCwR617wEpkVoQZFo19WtRRigJmKrAVDNjb3c8xtXtgp95HWrdFHsiYk1xwjm1c47rbRpcHvHqRGS",
  "key6": "ovdc4KpZHn9kCBNFTdzBbQ5FmX59RNJYhqmw27eiUiTYawUJcxHrjuoGUo1u58qdHfSB42QQdhBgxrgey3Niict",
  "key7": "5XGd4ESCRuHET2NpdqRU6zmZeLqCULj6aGH3tHvmUhNpRRpZKyZ3MqpXcTJAHcPKYXA4jg2dXnsSC4p2frWnEVvg",
  "key8": "62y45fKsTyM8LHRYGqAwBtFTCFjgrCxwDuU91xoPaFqa3n6T3k5TgdMemFoXhEqUhvhNhjXBQ8C1dVGUpfAW5LJD",
  "key9": "4pFnbxnoyi9y8GV4cs1D7MKmFCU2TFhEZkFpQxTXLA5qiVjJLJY252Eq1o49p3rWZZZB1DqrRGjAtCmDCb7Q3ksW",
  "key10": "2ZN1ZHUFXSm3fNiSawUYgGgFdQKZ26UCnEWU32G18bwqfQ4QEh5qE2eBmPsnS8H3zfX9Sut51zyZZf6tjfB61wRr",
  "key11": "exVZ4QcaceUnqTXSpkSckeC379a1EB3HTXjePHN5ipenErqPRVooCMrPA4FnHqQ4jFjEAoy6SFruJ54xSNeZy4M",
  "key12": "5zpSHBSD4v2j72o6iGLUjXX1QU8DeX6drk3cCuJPVBYrLwntffPX2iofiXQVu2RDJE26MEqQ7X83Y8cgPCVfHbE3",
  "key13": "5ZpzZjaU5QBb2LQv9Cxyxse8mq8RGMnYpRLn7tmBgpG3q945sVA6UV6M1MrsgkXkUVmthpPL5x8kUFtHxE8GUVrj",
  "key14": "VvF3GrmBmGqfCY3VUrg8G11BXwKyEocA57EzwYxU1D5ewmtQANy8bZY4necV7Bgj83L2gNoqmSSDwDmeGDMoLpt",
  "key15": "4tkmFVUF1arFNNW1XvuLgPrwvorm7gksQY2fc6uCxugDECuMfJtnsxX2VfRNwkH49xuqaDrySqKHTFQQipcDjMty",
  "key16": "5jxGuuEUwFCowc3xej2SwwE2VV5VBNc9J4MNt19APXKjksdKNHU1MZvWqQ67T4ZV59wrscTFDgnafXsP1vd7daxs",
  "key17": "2quU2vsbyh6DARnjYkKudHpuDLs1V7GKdCd6FfA4UTvgZadoKV47CAGKrvR1NrB5WRKdzJmfXcEy4YzRzdARazDv",
  "key18": "3c2r4T5KNx1pJfqyL7J2Ah2XLBaHxDBXfxFkYr487oMx4L3nribbcCiwzwSMM1zbeRY3aqDoWjSoKqtu2JXJ3CE4",
  "key19": "WWRuMia1NiQiat8ChtRMUMzpbGFGQhficg9nKrM42qX65WsrZrrucS68RKsCbno9ovP2J6rNyEc3meRtDJHiamP",
  "key20": "eAfrVq7oSuEYGtn5Vw4qgDTcev9SGGNk8d5TogocbRj2CB1krUDsbaroCiMSteNFagrNSgLJHUAdky2zYNUDwHp",
  "key21": "3fDwSJosj1CAPJLPHhovJsZCxTLr1Zwj9YggDHYhS6RuvJuWjhaZCDSSLRc3aywYoSvkZJcbFATZSyB4nw2c7QNJ",
  "key22": "2EKpYmrtAz52dZvbpVZdWFhkBo8eMHYwkU2PZhotRHaSSSEDD9L8tWG28YHV2TX1ikBMQnhTBF5Jkyd1FyQawopR",
  "key23": "2PJc4XyVWj17ggJarqhrychLzFhi1Pf6HZ77MdzBGFXd2NLr9Nga6hojKBR6To65XRHqLXZTb9nCYzUGyoAKVLS3",
  "key24": "438cdrxxpAZJL3hTteV3ZQH1PmYwXSYc3W5CeMMaAKPVrZ9bgpyND5cXV1c83guAKu9BPpLwfHn769qH8er2VQUj",
  "key25": "2DBMMdNK37LXwZ56UigD7Kwo6eWcad2rw53G2QW9MK5EVpeL5SLUdKBeuV4QPMa787NAJet3P2dYyQVuZbzgjzDS",
  "key26": "4D9PBXPTmUTs6mT4hDwiFk89hw6MRe1jMrH2DggpiEMaWcLtQf7ijuZdrB58JrGAk6u3UPoQAy5sRJhwovAdhF4F",
  "key27": "UDWWSX2c3CU7KTgxXxBxkfPmpWV3oHQWGA528uFK7XKYLHn9xVwLa4NAr1ZeTnznrcJ4VtWoRs91P42kawaNe4Q",
  "key28": "5hyWUpnNjh3P6hN9n49EgpHoQ6wgFRNx64ECopNnjb1ftYZBTFqSfG6KKVE4WEodwDAnippyYkh3rkDvm9omv83k",
  "key29": "2dZmdCxmvvdEdykNMdfLuU4DFJLwhDh5xeqeRrvraKniMA32pWnEq936YbVHJm8i9LHxyXYyW8w7JPFygHmjWMwo",
  "key30": "5xvFfT9RBpEmu66rXANaJED7rQJR1bdzawYmjqZKchiiCQhVmu8Ew5HY7tHsCJJk3iBCT6TbeQfBHDhd6xnnzKyq",
  "key31": "oxKNcViqPgFk7bgqNSnkCxWq6uafBoEC9Uo7Vt2LaQGqefjskkN1TU5gQJMemfNZyFT8HeiiRRwa2VsP34S9mPL",
  "key32": "iJYdE6WeyQxYTjan2zhRJNybg9zRHtuPcqMLMrGCqSK6pgdvCGc8TbFqkESBjDBfs3MQstbUVjPcTdmm5hTJbKe",
  "key33": "5FV2KngkFw9ZonbdNnS4uh1SqY11zBjnPofhGNv2bdB9N3vKgWQdpAVmXsqJ9Dq2hmSyCcorJ7DkHwXZM6ZZNKg5",
  "key34": "528mX6udmvXWVkqGHRAvPAttPViezcd7oCb5x6GTCuC86ZyB9DqpMUuvBNHMmHoPFfVs1FYYBZ4QHuWnQoybhGKT",
  "key35": "WL95oEuRBD7CvwH8w1hWgASB7sYsTBFZardX4z2cqzhbKQt3WoyoNJABUJfcj3m1iwpLSrcvCsT2EsmNvby5E7k",
  "key36": "4hmoNG8BfAB3XniKEXaLcj87KoFCJnm7WLStySffQcXNQyv6LyURtkTcssMRZ4LUCLp9YVzdPqVWjs5KRDUqtMeM"
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
