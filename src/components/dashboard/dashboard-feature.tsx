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
    "234a6yFit5dxVpDQvicJWXwTAFQeUp1tLigjjvWVEiSkLzJC4sdB3Lwyo31csj5kG9hYEKMjdiDYFbu22UBnZm4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkpNPEXTskUEUqbShRp4aXae9DDyV5QbMExrBfMXJ7rczYSuxa3WQDunaikx4L1jqHoT9kuCXr4mmChxCdoiHsH",
  "key1": "3VybwJoYgKs9y1xxYETwjTPZ4o2aneYsrJxtkKqEWt2KMgKwZWkCwAx9ggb1W1WZUnWRwuryGLC4SoypKK656ejh",
  "key2": "5qCyxjfxTJKXYm5uW7yuMMT4sKaAiX4GXSFXSQKkKEM4mfCi9fdgTQJ4GrMyh6GXLLd8nRMPG9SV6vE18MxD8neT",
  "key3": "4tA7W6Ginq8fG8nusFMMgCrzJY6Yc6FNAH522WmftMpAWb9yphpYuPAWNr7LHWFvvTpFg9dsczHdgvVoV2MFnrmF",
  "key4": "uKjsJVbMq9KYKGkAcEQrcQgimggLodBLfiMYbYJfTP5UTmVURa6uGCpTDXSg3rTe1L5N6yhZjh3Y9TCrZjyZY8P",
  "key5": "2QdUdAY9SSFtMLXdqfEWyra6VxA5AfSR1hJMoy1ZhtDnYdtqYfSB2TX2BRvrEXAx1RGCpvzyDSngT6MEGECMjZkA",
  "key6": "2vBHTdMhGX5xquhcP3pXYEJdwnuDKDhmepXSy9epmEfYRt6cq91MFxtYCnA9jQPVMDPaLwxeDbAMuZDexExzRrgU",
  "key7": "36zT88T7AxjcemRFtZ2HfwxT3c3o5WMcVLTsE3jnH6bk9Zx2Es3PriztyDzTBXuo8g7uXBDBmyFyHWuh5yQqPtt4",
  "key8": "2PJ7sVkVFKLWdZQ12xeaYvcTikNz8XHgdfZyF8eDpa1Z9yd5m3bFEwe9d64GZvQmyoDgaBZRnsaiG7fAcBxJvLb8",
  "key9": "3LzPxESvkwiXB3MfSGCscKzsAXVtc8cjskh42EgUiyGGZkJK1VNgb8Aax9tbyPqeiVGY29AgUFnFSXCiSCvYbryf",
  "key10": "5CvfUHetSqg5R5xq4F3Pqp7YQ3opGx3eMrpRTLhp4QHJyj6FxnJTHnxL8w8EfzgHPapbbdYb3JMDMnmKTEy4Cak",
  "key11": "zJ3EGMosmsyAhGiQXYeC9MAaz6UGuzxVGz2bFMwnnuS848s4UYooMbBtNJs3qfN5oieTyNgXMamQRKdsfU6UqPo",
  "key12": "5RVG6yg6Mjpw5xjQ7f5BBCY3WZ59mrWu3X9c2bjVfNWSU6hiZJEevBvfpT3NjjgWchqEnDcS7NbYFQB1LeWJDRUN",
  "key13": "3vzZAms4vV4fpDakhufepmJKUVzsQQajctcd5y95CiDhSNTNYtsX5JBGedk6FNsZw2jLPRigsj9KC76NNcT7MeC8",
  "key14": "2xF4agy6V6uF7oPkhppBkMnoho7fKSmQT2YDvCjoucEN1Z7sifjC7whaGRbLue3A7ByTvPhHeW8ZuxrEu2q2arP6",
  "key15": "3FWrq7GpETBQ9RhHvMxfGBJs79ahvv6gYuaJUCpSQrZEJ1bJ3bYbpam15B7CQTXRW7cNbmov76DgG2p4Ne7VLDQQ",
  "key16": "3rZxkLi2RP8Hh3MiP4frrdWiUzCuzgJMqF5t7ugSqtLZfaEPFsNJausHUKN9ziBpZf8oTnH4eNoDtXirXctxX5so",
  "key17": "wBLvC6xCY1P52C3mMX94ak2UFYZ7P3a29rcM4yy1GyVUDP9D2q3KzkbHEG5amARMZETk2ny2ixTp9cW2opPtEWU",
  "key18": "2A4bF1WWkEYR5J36auPUxWosqjtoYgTqcQBcyAYa3VTCyb6pqmU1nHA4VRcJmNUyYhEELyBWuekJC3fjpbnPDAE4",
  "key19": "2qhkyHWUwpcDML5pN7doycXbHnQwydRghJ4o6Y4782YwUqw1dForfsAvYbGiNppTvN5QNiZdB7RFp7BjbHctfSKw",
  "key20": "DfaZEp72yjL5FBpAnbiNqvaLdVeVmT7S8PbdBWjq7bY346fvkNXPrxPEPuGfBS1dxFh6mjCTYELQNrmkPK5fviH",
  "key21": "5UZcRH2tu93oj8M6739nW3koUGhzubqZds2JEKtqJRFPC154fQy8yyrnE3YtY4WvyfmNH8N99GCCaYjmuhRtwZJT",
  "key22": "4ZMQQWb5k4gAKNYNUzr4EMz9QPNkzrdNtFzWc4gRTfnynZzNSVAwGp5ewEszovPy7qbr7niVHPuzF8JahHwYWyJT",
  "key23": "43ciLnmqTXd9CRcUcNegJ5u3hWA5yGJRi1e3a9hCkSjrFGkir5yw3nhigKetxRA4TkGR7wN7LRiiNcukpLnnJPcz",
  "key24": "29gVmaJa9YiNXDPt5hUUvCcvRUX7ifZnRkBV9t4n13HytjYiGeTjojgcWReoHBLhMC8pNWhDYxTCcKBnsHV8fhkd",
  "key25": "3qdG6HZuus7Mz4W1ZMKaJjrWETgdt2HbTvDXjeuvzvt2vjPu85GWvRydBvacLjCEPNY3HjJQfCkotMmrzZ6Be17C",
  "key26": "2r8RHRabAhijvGqmrLCVEXNx8R3YpxK41Qt3SQsu4ZNF5k41JZUNGA5DPo5XVjdwkZfU1oyN5w6w1V4NB2MnEsAA",
  "key27": "4PJmmVaLawyxcei4fybfCUbYeLAfwf2ki62zVuXYypXLRujJF5Uawx83gzQAPoxbBa854tMi2qNQN1Hg7sZiZPkT",
  "key28": "25dwvN1HYJKgpENbmaPPCG2yUXkuWDgrUJcj8xX8NnZhv1e2XPyTDTEwv86kJG8pWhaeyk2eYVRQesoqdMEqC7aE",
  "key29": "oDDg9fZBxEndhwT7qX4WLKjhNF4FamWsEs9vTtd2jowvVyog2oYxZRZ6PeJpafeWgwLQR2vMKGwAnE6G1rU5LUM",
  "key30": "Gv3Gz2H7ooeXuHhZqozmCpsLsuHcH83SpzbZ7oBSCXRNPbVZeiZVpWjHZucYezHXnURS5vqxhmU5oCEgAxb6c6T",
  "key31": "5RtNgkXBDo7sMfj9VvK6WRb22Vuin447Uh6vHZp5uwkSe5cCJ3RJrHhp5THn4RYkpyJ52znf8qjjfyCQXFUG4c9M",
  "key32": "3vkkVsufEZoDUvvcHzjHiQ6jsPNVfkF4puAeb6b4XJPzUJX5QaSKUCEzrvQPHsNpikuBXSJNuqvFoY4J6sD1gKmg",
  "key33": "2RpcWVixXsndpv17rnSDkhmsvBxj1wN9rLZe3T9oNV3is2UK2nNHpFDowe8TLCnHU38EykdTSzzz9CdjNAz1q6Sv",
  "key34": "2D9Dyf2sGJX81B8knRfUk55kUxhwYR8XswEFNRmW46MJf7HgMP9E3w6t9kTtcncgCzNNX9fdX9ucXmCJeuySA6PV",
  "key35": "5qMr7s2o3emyTJWnm4sEJpMFcJKxDmpkumX84hLbmEXFgra4jZGY5yPN5fH3WrJYBByx1bJq2zBftFpZacTvnARp",
  "key36": "3R375828SbWDcErSAb8Kct5cPiRw4zrvBM5ZcFrk3aLmjMeLb2vSYu5dnn8pVnh7gZTJ9b4wCvNmXM2FmE4zfsr8",
  "key37": "59QUkhB35LYcTEckeBjiWL18TjSNhiLLv2i7Q3CLbh7G6whT3co1nU2e8X8LCRX8ndWkW3f3YsSdxs9Mj3uydGVk",
  "key38": "2GBaM7HiNhUB8P1WWGkaHk6mJonmRThkNEPHGvzB3UjFEhnjrgtrQWYpz2bMUknYUGmFNtKyLkkFB6xJAQprRHc3",
  "key39": "4smLCArfo31QxZHhf52agC5haAquh4DG4qZ3U1xuNMAZEEArUJ1FSHFkQ1PfX3UQHne1ebeCPs8TshP6yTcQVsux",
  "key40": "3SKKjKVVAQhxQDdMJ5W19qrdgLAf8XjVP3zFhPGV1Q5KqUM9RunKBm7NeZhYqZ7ghSZGtQ4SYMJLK5be5i6wagF6",
  "key41": "wrju3XuxCdBgsuxn5cLXvFwLjKoroUGZyst9UjMkpGvh68nq98Vh8JtYVf33wsKkZHipN6c8VN2apvPiFCJFV4D",
  "key42": "4dQwTmZ4VPL8tRqcCYoJSb3BfaRPckV7y6WcmyqoEssBafhqMwoJzpivSjZeNLJgVYwSnP48xD8nCQHgtsMfFtSM",
  "key43": "5Uf4w1dHKPG4uk9wFS2pNhiMKWrPXHexD89NtWEJW7XVjrXQsUsMYw9C7sDhVGo3BgdbTVCsRMrN4rHGiM6m6hrq",
  "key44": "5Bkkitb3LFAKgnDZQY1jXv9p68h9GK83dHZmjsbJ1UQn5KwtkRDQcrk3SsCPfa76Y66Ga2c9WoR5iegeerBDZVMJ",
  "key45": "2CNKNXRQRiA7oBYz3nKVeMC25NRw8rDPfc8PaQcEddeP3gdkSAFLQ2MT5DJxXPfnrcno6aAwt3ADgiPjiv66vscP",
  "key46": "3RsqULRQwMc47sYomB5Ywi7PmXfDDPXRzkfiTyearEazE2q8dXi9wbmaaKCGmF1VTiSkRJu5kCj3AYizAVQV1KAw"
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
