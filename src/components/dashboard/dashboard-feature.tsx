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
    "27mEBVZt4y4x2RLnag5T962Znt28dYDQfUBJZiXW24zze6Ydmg8xtK2AUKszUcxqy6c2wDwbe2L2f4dHeeVtTZxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X5GmEM4GR1E4nM4CaroGZm3Vq2RbAXdHVmSRqdN2VSyyqQsugnswfnmWYytFJXuQW24bbL9Dw7ZhFXDtVeSAJaU",
  "key1": "3nTRP7dzzCeR1iQ56jqPB7caV8qRGeLoE5CHCFr2psvnDqHjC2aWABbrzi2w1ogLHnxf286oBux1eRnFGkqjizow",
  "key2": "39pqc5D5PBm6r685ww8hjyisE494RDXrUdBimQAChZ3UE1zWHNoGCLnHWac2XgoJNLWasAHM8XzKA9BpJik4TJNY",
  "key3": "29763hT8DH68vMS24T2kECLUcv3Lfu4Va8ZgRctGXL6XQ3xhzZvJGfQdLStafkbEaoLdKqKmFxTJ3rq7Yn7R2QAt",
  "key4": "4q38zDXQ5tmxmtpNR6rVYcyaHDZAakCYDM6Roems9QYrbrN4iao9934j8MUR4ycFkGUgFjAti2267Lvx7Koipho6",
  "key5": "2ptgQdAmzEpxV4cxxZTVHDegn6nTRrf25fD6o6KYNnfLtAJVAA5eFXF8yjLXqkYmoRoXVPeiT4Y4pzqreQLkuABr",
  "key6": "46aVw6FLQ68odE1i5DZrNtdQnnCCqpRe674cMixkEGoC3qC7CcedY9LXjR7rkA5d31o87MRUZqsnvmVduGGzGkpD",
  "key7": "43BjY9hJuVe2npynFQYR1F1NynaNJD8x26sWE1bqvyMhSpAn8JGdRKTj5NmvaRdR5Z5C5L9wpx4VsX7E3DGLXRCE",
  "key8": "3XNFhDLoC6ZsGNbtqp6ooN9YiYZGoY25yheyxdAQyvpCqDAvntRqDumm1o7XxPBrMJ8JDSjTnXpvDTcxi98SSdK9",
  "key9": "5g84o1VJPDHwviBsZGjNqyTd27FnLp7UrwK5ioeHALWnRHAfhG8Vskuwy9SP8LYAw9tRvfuyfxwR9TyB1AuwnTi9",
  "key10": "5uHKhFJAYtY6YFZeWhQnn9berWBud4wqtEK3bb2keGzmF4jewReFfhBC4N4cq5fXeGgcdpqh9HP16qBuWBW2w4du",
  "key11": "GwzezEaJvFNarX3WtdpYtKRxVWfBgK6XALpxNhsx6XejganHvcpwVXL3N8pToMm7KFcXZ8WTrfMb34PWSPKFaRX",
  "key12": "2H8qHpCkAdwo2THhgwQE9EUWyswMU5hrrXtP5YMyDCh4jxsUr2kNxqDv2okFq9577gPPHtrq7jRGe6AvUATdyhq",
  "key13": "2GtjFnEfJX9X3yV6nBQ8NHQRDBsjYvDqaCLFeiyiNDur8VjwJnubrdLADesECCP2gq5oE4FmeWnKb7AyMEDGgiap",
  "key14": "5WWT9Q6922s3LkiKTHGYgSMztwaomWVT9Np6CyCjxVnasSeQiNfPiiWDCwn6zV3L1gxM63xp12f4gcwbfQzVmXT8",
  "key15": "2fRNtV3zUJ4xtHk3oGWYibUQYptJ1C9BEd9ousZMC7uxhZhyebcfu1YczS1vTQxJv2rbfZ9uyu4iLCRTLApqLQqv",
  "key16": "GSttVE4qVLJdANFZq2QPqnuMQip8PKJEPitdv3Amb8cB7fQFL7av3sdcFUaf37KJjwLPBGwcteBarMVAoX8BBCV",
  "key17": "4ZUUj9FN9TLeMmVhCTxFAXgvWqgfJWdpAgKDt6n4GsWVHABvAVx12dtzEHNY8oBnCZGie5HgCv5TJu5hGEpsUx2A",
  "key18": "5xgSraeGjh3bSFjLGNhCEVJepwaDwtgFKTy6Q63K165suNLVgxq8h8p5iPuHpz8kKWG14pCa5yvBxWcvvECwbYbw",
  "key19": "5NS2FtkgrLqs2FhfuWCN3CgwYXvMvTwjB3G72o4u3zDa3tNWxaPf8ip6h4s4MfMHiHuXhhCZQh6bGhAC9kLiaGo9",
  "key20": "NpSsFWnNNJfY58sFMM7fcsMAjRA4cUGBXNNj9dvoyvmoXSnUhX7dwAT4M1Gxs1iT97Atw9QUMZCy3LvKYXS5ePE",
  "key21": "2XnFMYeBAanL4LJTkLKPYKd5tuzhpKoDW4skk87KraiypV6RogCdyoNMvicKvdgEEXfuV8iukTSiZLhKWt9MREPK",
  "key22": "5YPPMoYGiTjoF82XV7esLyBn8YNmUBtvbR9Pggtj7ZV3jukATuGoT4RoGhnHZoAaQLLY4E3oPKWTnEx5mxnXke4H",
  "key23": "ZKK2Cj8d6BdmDGLDKVwBGUKPafTVZ2moHuMG5GxUNGmUH6p4FYa5pPUxuaH4JQBedzrHxwkMsu3Z92V8QfV7JeH",
  "key24": "2pL8XQwpUNJjP9BAVsFTZ526DVJKUz3g8wCxNmjig17A6Jpt29CBLtcaCs7G6GRcG2aB9uPG7ioNFEAMKT4dobsn",
  "key25": "5EQbTLoFyS4QhmtbuFZx9rYXv2PsvLWBfcY9BmiDjvNb94QdGpPDzuZJUGvPdxwd5Z7Y5FVBGbnmjWBL2ZbddY4w",
  "key26": "23PyeTNZKfWKRHQJHzQvX6muyqqRoYrtw5YYRAJeLiqWELShE74YYD5QxntAeNhtQ13fx7kebpeTmTMzdf7rnWb7",
  "key27": "2Qb1QB4XxEXiPKRBYLsHkJr8k5pF3fKwoSHDCNvgT98JQgoTKBSxMvCTWSYfvAAUzkJ9eBwN711cz7NgmerjCWVd",
  "key28": "3jcQ4Cs8S4RaeDBVp5ffupeUngLwFrRo5ME2LJNmNVjWedkayHtJaemgG5SPacMHGD6iEKfm3ErhMqpRNtcHtppE",
  "key29": "539MEUCVShyR3zKNHoECpQENv6kMQyRRZfEvr9v4k5ce4XbbbzgKu7UY9Q5oTjRVzfX1YikvHYBG84gZxYmqix2w",
  "key30": "2zp38tNtRDt65YX4XxNNDdFQaLSDhmKjGZbDXXdZNTytTGQDfggmS76UZ5z7DBEKVYw87TDb6pEGNRwXtLw18mbt",
  "key31": "22YZ58FtgCjTtKCYbUeTzynMYHuHJDQBZ5hsHgjjxPJiLaXQUpPxRE5oMvz9TJKXwKELnXMYhQSuDwfhgd3EW8DF",
  "key32": "4Yhi8tcTnC9UfyiixAZhPCaJCmu1Ynw69kKJTLZankab4NQsde1kCtfMxr6yhcbUCS91h6Shstz1JMsMGM9fUa11",
  "key33": "2SqJ2igtypb4jdzxcst7aK8P46PPMVLgVs5QW31eBTCKLZmByt4P8LTNTcT3a6vWTEkkmah48DUXVs975wN4qeHc",
  "key34": "kvVWpVc1og7m6yKZSVw3EwDR7S5Pbfu7E3Kru11XjRcTTQVAt4RhQzpJLMknHsa4PWXKZLJ5Wv1rxQYfsBYzAur"
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
