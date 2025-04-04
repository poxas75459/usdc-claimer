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
    "3JjhVAN1XaBEtBrvGzGgqCQpegpFDHVH7iJCtisNNHVd9jTQ4F6H9E3jSoWBHZkuBVX58T6ZfXwE4Goim2F2vG3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A8gDFmssffyRBisuW1HeXeiyfvaFRs5GHdhFGbrE67B7dpmgqEidcHx7QoVJzMbGcinomX3tWNzueMumUiugyJo",
  "key1": "4MTwkw8EJiRUwKie3WswyySGf5jdrhX4wmF59evDGYVowbFVYYeUCMEBhKFiSsiihcdK4a71RrfMxx2h9aLLEF2",
  "key2": "3D3j63mvwhN7GdgJgvzkEseS4yX6MqdeFUGPWWJ19EwMdSTLsuGTdNWT69n5WiFr8SBuDa93pGqFTbEvpZ8mE5vh",
  "key3": "2Bmnysb8gQnoAFFip3D7L8FdFNAGoKPfNEfXNR2KfWFm5UcLWjXnSLqHhCn9CLxVWBE3gzafq4st4XGSYcmk4iFk",
  "key4": "4Gx5ra1GsCy3kxmLuhqb5MrzjZKzXLbbS9FQBRiwgPczKYFFJGpwyfPXuLLLZPvnRaGzQCXtJg61A3dab3LzgCEM",
  "key5": "kFurnF5NhmcGNzwKhUo9oWkk5XNYgnbM9SZBTeKcDxu5LugdGyVgKLhNGozZS7mk8WbULZnx3FLGagrvmoJpabM",
  "key6": "5VH9cGLMGuMaNFWpZRcCVXGLVZjbjHi8r9Yv92bhG2tqPZ4ws8jFXTw2A5Cu9T27UTRunpPLUbD7oeTP4e7jFeo8",
  "key7": "25f21Q4G9HukC9Ho5mdaWVksvgbkm9x7d7kMMnUHczxQgbKoew6yTkLNmhcc1SRFbFabt3XA3YFeoVMxmNYxisnY",
  "key8": "7TCFCN8VBWFJg6ijha9yVwCdv19htR265U9M1QQ5Mg724jLXhiKK9eD2FPCunUYiC56Jakw4Y7eGWPA6rCTb5Y1",
  "key9": "2D31cmqreckAgy6yXdcnEM8BCs43LLT8zSrHKK9niCZWRJ8A1Bp2ufGCb4z9z4ji1VhkjUy7wAEBoxGWoGFrnWYc",
  "key10": "2eTRj7W8NxTxSY2KtDUhdnVmLyarLCqh3Cpyvxb1wYw3V8iWcSwbg5oLWyAeSMwbPby2HVPGX5ZquTUk82geo4BQ",
  "key11": "CZnwQRLhwuk7yozBCHR9hQCPxHYW8jDgrARBbnew7E1mBTJakSVd8XQQouzAoGScXpPMrWW9Akm51iqGsAqy4mJ",
  "key12": "5DYcew4evm1Uoo7kKE1EtvMGiq8nUi6vrfzhYC5fXdFMJSToGow8oD8E4BvBUW3jES2WiJ3aQXqeHx8xcFqxmigA",
  "key13": "487Vjqqt8L7VnY8HTvxBYRnjZ6w6S8y1k16zVHkKHECwV11HDQGHdVMkca5AC7z3HX8wMFhcF7WgMxju3uptMNXu",
  "key14": "5sDzVvX9KofkoDS6HEnfvsw5ef1QdJQaZCKLFJCSWyfZGY5R5rrbSzyUbSuscyd3mBhWgdaTZWkz4PRPF8dac1F2",
  "key15": "1UH2dbX8dvVczTYjvSa4Qf1xZfpcQmyXG8hLWcJY5jEDteb9tKuArQ1BJEtaDWR85yDoEUciAq5TiLYXQKGb24G",
  "key16": "4RNqFNAosyqLsT9er43MLwpZW1yCnqaNd5XuUicgyrP1Ko94BktSyrPc5m6ZjWsqkPDZQVNAX3iBcYCRcvGngpb8",
  "key17": "XKrehT6oKAVMYabJeuZRqFzfiRyryrdTQThJ3EPwHv3x8sippTJokjBeGEAJ9XZ6L41k3kg58MBWaUuNfctyDPZ",
  "key18": "3eDG4swz1BftxBauCZj6QvDfaD1rbjS27sdrYYasJxL5y3MwvqY42cpFscqyx1pKsDozXc7fKv4qpbdM7XMrEbAK",
  "key19": "4a8p7pnJWz2ua4ZEpN1G22mzu7DBed5L25vVYvotT7D81rxxmTH3cmjoMb9uYghxUuRgnejbA3w1r834SyPgLtGq",
  "key20": "4VnyKyPH9z7cNVmw9b7GW4b13oyeczfAMmmK7ZURSUh7eyaiapi9D2zkHpysb2j7bHqJSskuZT2QJRxsw3L7cEAR",
  "key21": "3XJL2wABUeiHBXoa7RQB8aobU1GUpbDUQY52JowZNsDeCFN62KVhNdcACHAg13dv73hF2Yw4YWV1YFFtaaicWpgJ",
  "key22": "54DAyKR1mrYV4KPvxw1q7xmyUGiNjda2GnkwGMDzputQ1XbMcXL2NZU11FHSiXUthepGxPbAEnYiv9xxPQeUYebg",
  "key23": "5yaSSUGhTUw7tRgx6deBYgR7GUpFQ6JzcYjSmrT4hQzxZuy1nLWEUoGzAx5Rk4rfq2ZHneooQ3XAyiJh8TjmLjce",
  "key24": "piSNXcbjG8Sp5xC9jsbnwVh5d7tdFsBWXKKzsdseHsnWw4ZQkbe7ud2weB6EPsWES94fDneRJ5D8CV1TUEDQRt5",
  "key25": "5hmKfHJaWMoAP5BJKK8qVRGELmj8CsPeCRYd4Xedcniuq84SBak6uCTsyA7Ro66vx5PdzJ2unYNTBF17Hdiqiwzr",
  "key26": "4rgA1GHLXDqYHsKDTQn2jqFMUDQ2v8UAMELcF8cSRpg7C4rnjMywTT13N2o5Fx6xqpSt1KAzNY4S3gsgCse9fpEz",
  "key27": "5g1qNzHih2TdJdBkEQbDo56Ea3122T8Wdt64QZB9qjSPXFzTJ7AEkVhXn1fGBCpm4ciVW7sZoh7so87sTiPyyTYE",
  "key28": "49H5VtQHiEG7oo9ihrnngnQk3Ax57fFUJp3rGPJszKA7H9URjzRwLn2GYCcFU3hnBQtLo9uAiuddjs9jrjX8uLP7",
  "key29": "645FiVo3RPayxnYxiz6Zy9kbppGZKFEyD8jKYWjfbushAGApQ2c6icVGHgKrthEJcjHHVnqAyyzZTYLTqNrTxCrX",
  "key30": "5Ei27CsixQmD1whLxYyp5JmGW93xQKpsMSKo1yVNP6P8sGhaYc9NzYDpEfmGPTmizzQZeBYr12KEf69gsNfZF9FF",
  "key31": "5x728yamR3ZWeyZAsS5bw4keaAsHH3pNHcWNNXfMeZ695UdMYPjEZEkyVdC6hxxFVyAGvE4SSw7XrhvVNejFmqE4",
  "key32": "25XoDS11SRFea9b6zbHUbmnLrd2GdNza9eZPJbnx5PBmX5r9x95y6nqNbwAZQv7hxb9vht99VwBoqzyNmxEfbBXz",
  "key33": "2YDncBNpKNEtJ8d6PYVVeZGbuLohTGR34qa7vx1j5zQs5gygxZTMtCtnxyCt8Ktp8E1XY1NoCBk6P9ENK4KnFQZ5"
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
