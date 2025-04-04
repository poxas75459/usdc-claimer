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
    "2mfrnPeU3mA2yLd1xFodp5nBgAKTAJbKyKSYFa44Q3qgpvh1TJ3nzXLgMRYbFGNB4xY5TMTmkE4cg9gWuQGkt5ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U29V1N9NdHa6qKLhVAKufcJ8f8QvU1mgrjzx2QgCrw5DiqTgyoKZHrwF5YiPABJZY9BiLvFoBdKnS71y2CcXdjF",
  "key1": "3ujaUgVwBWgKJRbWoUjF4H6V5n4iaWLAx4xVYu9j8AXEqth32dXrCxaoSCbg8JiJqmZE3fcuNVYZTPgBasFZwJTJ",
  "key2": "5Y29UZvFHWMUjLidEwWQRyVbXdUkAuC4bjgD8rTiRUa1XPE43oPWnnvT6KjLnTHgGdnu5GQ3Aac3TdVG1vAyL9TF",
  "key3": "hWR1mWddPgyLFb5j2EYFfGhMethDUFcbPCf7yNrDjPiA59B6P2JYcCxquBVtQLtcq5Q6nTtaDMaaWLxdw9L3A4w",
  "key4": "2s1WvKdt94GvbVGusyvUViiJp3pzoXz1snU5j3uj29PjRJpR7tJ4tnr2QkZj2m57YivW1yYZbq2KLEZQWVBXhVhv",
  "key5": "U9r1FZ5TkDp57bJ33KWxM6b8YULxRWQmt9hyMTqqDspFKrCi53R1gomvMDP5Dq4hKfF22u1HrvBe51YXEQ4GhfK",
  "key6": "2m77wtWW8yD4YruaAQGmaReRFuGgBXmNbV3NUPXePr2R6dh9kbxYVz5UBHXwprZjjgEzPvXGWEkZZJBGV6P6ER68",
  "key7": "5cbghXE8L1YqJMkc6zbrKwMQHs1oNBA3aU43DNMZF4UAP1wX4Dm1KTpjqajsmRqzcGqsZuFwBkZyMWX51rzQp8sy",
  "key8": "2mNRZJKVzuy7QK1sPpJ2Ggg8njpEovNhrJiLNdRH5bt8CKD89sK61vQGfMcEPmE2rqZSJbYedf163Bsbt7U72XXp",
  "key9": "57mep596C463KUMbEsgHEWLr2ZMeUqrNDvviGzSZsABYR2iLHmxuyQDVFVai6MY1TSMfERmmiMbN3fcf1ohZBBSY",
  "key10": "284nFVTbtojWqmLGg1SsczqUHjXFU8Gam8n2V2YX3wL4JgdMgvmYdGkMLMXAxRMFGsN31YbUc6JPgiX2Psj5yYBt",
  "key11": "4sHzV5YRNGio2JwuH3XRbkhreq1TaggiRumYWdjnwmEcigE5Vohw2xdQUGMCYtjankdQ4kTd61feKH4B3TLS2TjQ",
  "key12": "5Ra6RsSr8VmG1kADWqvUcYpjNozgK1PMM8GRh81GHYqbfkY6898xcKmiszUNouN5haFy9RCQD8cBqp1FHZZ3of21",
  "key13": "32au26iYwphY4TqtsfSkSYmdvzufLDxbycdPAQkvBi9vcS5vXfExVtEUgwuuWfEejC1Ts2UBDNoZVHM1pW1t9Mc3",
  "key14": "3JXKhsMn9YHTTduS12TXVxkNKoWf5kUTE2b3edfPBtWmYzxEopLBsjNeQn6YgFPXaqZ7VpSBDMgV2AFWZVfrJiuK",
  "key15": "43iEbtQ6zJDdwvy9YjjpQnNCUdewbTxZw1iKyZCeZ4DCV62xJ2GavgWgVF3nCFGY5FueDuFejD9x6qzx582N7BHi",
  "key16": "3e9kbE7kkgva2aNEtfWV8mEQharJtd5yw4EoZ13u6DshDU8VPeAZNEd3c2xE8xJtvWFLB8K7eX1iJVpwmxjxPqj1",
  "key17": "4Uyxib1PpG3fzNu3Dt8iwfBrhwCzUYijWGKwMHnWYtS25usU6KD9T7mWtcxneRbChNuTBrcn2hVtUyWJDhXHPt5q",
  "key18": "25p3Ag9XEF8kaHe5hisF4LfzMBbi4CjxSSywVM9dgUf2c8riWX2WAHLeEh2oRnK1izW93Yf8KCqZwAq496zbv6KV",
  "key19": "3iWs3vu6kt1LgeJ6hnn63S53A6YSeHzVPRirHabB8HkceMEn1piLis4ss93PjYrXMv3n3dxwA7SEUqb9MgiT7hG",
  "key20": "5mQUXARb9g6L28sndMBmxGyXSyumACPY692XCXF1tvpmQKgMob1SrLZAsGuntmu2s5t7cRuGtGKYTpoJYU5yoUqb",
  "key21": "BpymhEaFjhHxZdEhqhLmajgAzsZ3YGaw4ijZnfP9Emz6K2YE7pQrQ41WPZxVKpadH99PK37c5F2w235bzLA3DKm",
  "key22": "24HtY8mQuGEPJuLaBJsBy64cFr9J9zzMrNuBsxvYikT9onZ5ssqBkVjfCbUgytCBaeqWyGBvGYd6UoTcDCoi1tbZ",
  "key23": "5zcam753HWtkzSb58DtqXvUpVLELyVgcFfLix4qCeMHkZ7TLeVHQx3CGc9oSnt7frEwUQuBmZavkZoS21miaBEGc",
  "key24": "4ub65RJjuTLdXQVVywmxDMqmdeUMJVkQ1HK7SHcUM3tBAZqPYeYAcC1E1EZB6AY2FNvpaPivxnYyb72Q2PyJ6BFm",
  "key25": "3ZAy7Uqip4J972ivyiL9Z1J93YKp5yPZdc9AiZTNBL6uykSzH12ybWJC9DYa9vQB2zEnCsrnbGKdBJ73gn4zi7cH",
  "key26": "jEV1oJYY12tp2yjskJor9GEoMAwi5dm4mMJDq6N4mkb76h8LyocSW26vTB5f5XaWRYFPRAsSGiFNsKLHVcJACyu",
  "key27": "67RhHsMMSAVXNZaeMCJPZNCFp8sFS3s9jZ2SebDzGQRsyEc5BYmDRWYicdbFDTFY9dYN56QCiieHjKkhkUEyP9Et",
  "key28": "XR34opSDLTvfuhMNUWW1q8CurqVd6PZiMT6MiJcYqUYEbPgxW4oquAMGdaRUzkFAoqyXy3MeJCHNP4kBRw6oFBW",
  "key29": "46NonhGtcFsuFNphVZ3skag7Bcmba4cUWGzYH1QWk7CnuCqgahAZZVjhg5zk7UUNdRdUGUbaqndzjoCisrBKmGXd",
  "key30": "3PiNhhsST6GSGGwLuTTP4EWiobbiUKyQv92rgBaQkZBHMe5RQYy9gufoZc2CqSrWzm54zZGcBdsxxLjscNDjDyjQ",
  "key31": "3D5KW4zsoBhShyRnRoYytmna8CypKrwHKRXpR4FaZsoF99spFUYSsQqGmPJ7Gb9XqQpBMtpbBtLruUyesXKHGSGV",
  "key32": "42Zo926eDwfNZRfBv5h6mCJxLEKwns546E5qYWLtZyWx3d7TF2rB2AFZXrVmSmKwDp3StGj3KGTrt1d8qiowmkhJ",
  "key33": "2x6JVVTSNzMJrQBSqnfaQiDPTxCJc7qvyTTRWXKV4gjyceVNeuyrjv86ihW6SSA4679Er1AEaizpvCZySY1F7bwv"
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
