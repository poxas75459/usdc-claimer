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
    "5XLWakEJfnwP4ua9Z9Wz7c9ftUokWNAqAJwPeByQYNXQDwoAUx8nTo8GtQJUvNAsTGsrRvtvtGCiAewHAg7JcZTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XkYrUYWS1e2w3uiMU3chsit92e2nQUdqoSB2wxUbhSKNDA7tZ3Fhaf3g3YKyeuMbhL72R7LD4iaAZf8dwvBjp7r",
  "key1": "3UG9WNct41wKTKo27BDpGTmoGFNZDp6EDKfEiKdbxcoFb4JMmUt1PFiZahfB4ysQAWfZrPj2K2DQXV1u4pFjPXVz",
  "key2": "3hgAXjmPVxmujB4kDzGVyd6pdqecZFUSFHCg2Uoo3wopni4tZAiswsarUoE8qSLLgz4AT6spPDazzRdat7kyGDEh",
  "key3": "qRBakLWk64bQ2zbUEnWdK9NByBmMAUPiws5PknEGsNzgWariGFnjLH848QbV8xTJt5KtLBfA93Vzo4Q1kDJiS7C",
  "key4": "3LqKS4DChye3wkoPeT8qRKd6oE4SDnZF6et236UZZkbYrp1zPfFM2i5sXfYrvxC7ueSK2zbqbHUrErkmV2FUbHoP",
  "key5": "4ZBbMbV8e29zjrMqRsJ7VjPAejZRjTyPBbTdxVC14h3CGknqW8rDC3QbMTmtKNpg7cPqWK29aT2j6163RwHXLeF8",
  "key6": "2FpHUvWGHgJ57pfZnCd5hi2Nnw8ABYfe2fvrDtR7opFuuRuMfxD9nEudBnhwssZdBjmMV8AVsmLMHQdmi1FbDVmz",
  "key7": "5gUN4hgdUk1gJWNQaMPm7PB673UQncn35nX5wSNL5Ygh4KMVwYS8nidjeJoMj3n3DAB9tkaZfQnwiihrVAWPoUDZ",
  "key8": "a2PcfuEDFNfnRznkUFVMJ6ho67wj3c3bKTBk4wHnYwto9EEexSUxh1yEhpiLDBFWz6bQCWrrQ3TwAKbUYhpAXoE",
  "key9": "2156Tf38NGPoiWohWTpsq8BMuMjAF9XvLVEn1exu2rPGvoskFkagRn8SvYsSpXTZRHqGPKrf5EfqYLRUBCdrpwp3",
  "key10": "5JsC17RDBY3YCyg1D46k4Np4kPV9e2K9NPuqsLkE4YrHsEqTK4hGK9qTjZEuJjkMPTWWs8b2zBQivkPZBdArv6yE",
  "key11": "5CLomoEYMPYXFPMQCtPZ46rZBMKQU7p7T4rnzrSGEjSgg2oUfBk1QcDYdJEwWDMj4oxc9M6ApAggNAmFQZRqxmZT",
  "key12": "Ko2jALe1r99NRFtzEi2LFJoPDc9pWuwBc9aPDjzBXTYCvwH4mourqTmLgvYmJkENnSKssczdpgfYYhXxJmhUUVm",
  "key13": "3LQqPbtuWG7vVnoz6froRvvEaijLKio1oYRV6Y42T1h9TnrrRVNJV7QvnHHsaRmtF8ojPrGm7rKYDe4kdeVwXRSr",
  "key14": "5uYnZyRBQNppeEduyW7Ph73Tgb8HGFzk6xhqGZbcABJDLk4av7a51JfrqbRf5UAqxaN8AqEVfwFoYA28osVDAiBM",
  "key15": "3k136n1Y8n3EmH5QheMoThmLcHPTLyJmjcimVDQM44g3ae21ek7AhA6j9BtYdt7xKCW2iocLX7cFrsp6B8Ym5jSh",
  "key16": "2aNfD3nvmxgeBNEuq3McJmJWTRYTfwqEQ8VQhQDZrGnSX88qhrejyEtremeUwJngihAqG81m63pHgS4MqmtByCQ4",
  "key17": "5oQ1DHdY8TwPwCncMRPpuJQiSJpBDTsXvM5qRJKZxGzKx64yxx7nGC93ESF6Gi8gLQ9hjmWWKrwQfByUrsH9dJKG",
  "key18": "5PbVN2JouGXfzA41cN1qhbhHiWqWf88pTS7UuM3rxjobu9p9KT1HXsnpmx2DPa8J5QN8Nr9P8xS1vTMHyE6vvPz4",
  "key19": "2ewh7NMBYhxaCKWnxbcZNTTvR211yejQbho5fS2nAgdJbrjhkkX6QLMN13sbLBVd6gDW56K1uDDpzAuqxLC9xBLw",
  "key20": "wHq7jZQeMcrWN54GoDLaDJXxz4jgrQpFYcMzBF8ATmR2De8ypoNo7jtW4h8GnpLCegX94RM6AqZLdFUYphYhCsr",
  "key21": "4JgTFmLECN6wdCHP3dbZdGHFLTydQDH9UCNxKwmNU5FZdw2fzs5SFQv8M5QHXY97m12VKSu4NQdtFn57UndFMuCx",
  "key22": "5NtRjzg43bubrh7Qj1b6jj8p7bCNZMc5V7ap62EDTMvkfTMDbeJn2MFopNPStjHKZsYurEZ1CU9r35ikhdbqJFYf",
  "key23": "4rncat6ABfBYPx96v21xe4YZz4WLCdBt2KKN8rbDN1Zk5saZLbB6CgyV29AFZGa8bG7inqrC9rcRFeo4mQfH1sUH",
  "key24": "3obb5UaS14BKLPo6g96oMjY3Hqoe2VNMf31rcyfFNPmtHwnLJ9mS5PxRWJGjSNgmxYyGVM5wcvgUQdGJV9pZKmvQ",
  "key25": "29kaW2CW6H5TBcxsLZmEYTQ66XiLJNuZ8AZVoBu2NdGGs6PYATTqqdAq2xM24t8r5bzsopR8CN49S86MD6BHXSXG",
  "key26": "2q3Xnw3UtkmfXRgJLEmfds7dsE9NPNeXWSTwWGeYPgqeocxLkPK44x2PZJpTLaBB9Pt2MbphqkDQvwPujNgDCkYn",
  "key27": "4wdGgah5fV2PuUVBGDeR4jCsySuMjJQv5NLb1ubwKRAMmQzPNprvnzmWv8pvQUXRBfE2V5qrDLiuqjkMWS9nNXEe",
  "key28": "5DVm9HftR3jRTNtxToiB8ngivUNaA4LzWtvTptK3PUT6Zi5s1cqpHpJ6Xfz8AeeRDLroTaNPWqJMjEYjpUwKDveu",
  "key29": "2e3FgKkmFnyo7PASDRtcE7LfEnxaUsUCLYHHTuBrR5Co8av1DfBNFF9t6qwFH66f3tS69y1mikdadbFkwHrrGSq2",
  "key30": "nmx21s75yjQYfakJ3ZJZ6dfMNV6DVPZQkUoyR7QnX2EAAq9m93sQQat6C5H7MJqBDDAJ5ghJLLwUb3y7aPdzmjg",
  "key31": "4qnrPHMaoFJjSNwiiJzUebezVMLpEVtrwLfXf1PoCSFbJBwKkgnnHGdaJ7iHhLgFD1wVY6SGUYzuqSjfy42phDLu",
  "key32": "2Q1Z2J7RKr6pNjGphQd4v3KWWsVuqMQ2MoPWoQ2hMzEkp5WwvxQ3somLDTDj3cWZjjSLTg52gDoZwUQwBtpCC1XT",
  "key33": "2Yrsqt6WDutgwzSfSFa6ojhr9vdkKrc6V6mtaCyCfSBb3TsBMYaFs25qkuB19MwUuoX2Vd5FQUF5RdxAG27NdNsM",
  "key34": "3GjL2WUfAEJnDReNdAWaQJdYXfQwg9yDQjZ5zmPhNgpxnVHxujAdqeypEv5R5MmX8GphikeGhbe3gspnUUXBRnkv",
  "key35": "JNmZPs6VmcDYgVdaN7QcydhyFioUE1Gwr1xD1si59AJmVSgkAUABmX7FedMBwPcyudGDXU6uMa4Z4cH8vkmtEyU",
  "key36": "4cN2Tjg2tXejwMHRH9uGNFmSboYmxKfTFYYmqnQ7kR6GrxfjNhzQu7pqxwWW1qqNyWyDmahVGKqMbnXgtZBaevZd",
  "key37": "3FF7FacKjrdcw9XduHoNxjpw8wdT8CtzG4vxruj8i1fC2UJgKD7PoWH71kF1x3RctQEsL63bqi1nCiv1LD3o4j7J",
  "key38": "2kHdQWKBcgXzx7yasHbNbGTm1uLXXojqfLLgtHcsEyKTjCKAMy4YkDDiE9cjwv6tQv2WNnMEyRNpyUcPogFTCGoM",
  "key39": "58LRvHqMgJvNXS4xe1oL249ZYxB5mRFS1exjxcbQG2X5xhEncARnvKnHg9tfGPULyaLVoA2ivWN7ctjSzYsY2eEE",
  "key40": "frdaQjNuMjkLUjeHSuPDwbRMDybmX7AeEYRxDp4RwCWVHYv8pd7G48yH5WNP3jKnQhwJRMsnvvGm7yxV9A7kC2Y",
  "key41": "2JLLZc18ZZbG32tasawDWXQsZCRfjRyoqgL1HSdvdfNRwRF8AjpGvq336U57kbRfwLpKFRFrSvS5JiLcBbh2KaE3",
  "key42": "2BZ77DmxvxkX8rNN3RjsWwJYZFJTMHKoVKAKpq7yfKeuVFD6ipPARB2y4jdjxuvHVPzVo1VFvY9JRryTS35qb3Ka"
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
