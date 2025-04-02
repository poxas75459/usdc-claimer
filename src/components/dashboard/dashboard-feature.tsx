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
    "5c4Xhk4NMa76MWVBSqXZibv7KKMFC4Jqrt7v2ULNhNZKVWtrYBkLN5e2sASXpGPZyobcRrru9kBiHmVkiuPoHLqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khW5EZyyrM68mgvMRtBpkgtZUq8kSPWgRaGFqBMHfWrL1WTfnbVo3np6QtF3xMvhadAtBuFjYvsBojoLWaBJ1TH",
  "key1": "2FS9tgusPviwKuaLVzD3aZKv6CJAxtA5Ebn4UPWfMwqPzB7hn5tNB9XjUUtX5tYJHjATAB5ChHeZx4B8oXwcoCZV",
  "key2": "Un1eUMFBaBR24VWMcRBdU2v4uLLmvGXJ9QqiJZCSLEcfUZoxUnjYY1LVTEgnrNgHj2om4mFzNFn5t6PB4wBJ8sd",
  "key3": "2ToxsPjpHesPYSTqYcAZmahbhxfsz1k58UNvVZTdGW9344wwm1aauvgYC6Cojtr8srne9gvJQQPgLS3TeseioD55",
  "key4": "3uNPwrscuF4nkDgfZEeg1vQp38uiy3ydMwpG2nrjSqpDhiFycsaT4xD85XegS3AZiAmCBNCST9EkqKzQG5SCiZyE",
  "key5": "4PxttYs3f7xXu1mXHm6g61X8jXP2rc4rMt3ZMaxarvwrzDYE3edQk3Ek2EUnXGuAacYenwcamTAAF9NCQ2bPiH4F",
  "key6": "5xEsdT5Jh7EtMCmKvyL6SG5kP9w2Ka59RHPW24F2EqKBx2DEhyZEmPXES4mbyBQtcMrxgkRfsNBKwMNxHHH7muxh",
  "key7": "2rCEVBeA2YRwgebvXPjPRH5gmjd1fQtV6T9ueTDuDXejpn4VHsLbabYUXvJftdW1GQn377uB5DCUPQ9xt6XgHavy",
  "key8": "61xKzkFn75Sn4ndrnsZwGsNphKYnMkm2mUBEVSQhSpk1JD6uyfutGPgopMwMhv9V63N4fN4eXz8S2DvM6XXeYMzu",
  "key9": "67BEJfrSfBJE2BJdVHjUf7tVWFH9LvQMVvdvV11MfiwNZb33v21W9g2SAYDMHsGdLCHB5vzF7aMXjuvXhrC4wDWB",
  "key10": "3gtJd1R7yigJZHV9SRhtaxFxx9YZb3cburmKDBMRJb5L7tWPqAefvJfhmrLrTwwMZpQTwXPbW7FUodNWRh3HL2hT",
  "key11": "291h77ZfELXNZnULhjt61SBU2htzvEQnnKgzJkpS4XA5vjaM7SesPKVhbQdGxPhm2eWWuDuiC8Ne8c3XZN4smLDW",
  "key12": "4gqCMxWKVVYQuMVnUcZM45ADuQnmwUzRTDZunXdUpMTZr1TRpV9km9n877kqpiCRR5JEbEAS8imCDu8nEZPpGWWE",
  "key13": "5kDMc9BqYLKDaokBQQ4CrDXQfiNKdf9GRifSrdKkUqrQht6mH2HuFqG1DNob48PTufv1HAAEmw3BS5Bo3ZoWo5Zy",
  "key14": "44ZJN9U63NhDjEvx2GnkYysJLwwEFFoqRCs4WxH3wmKaxcX9YGb9DvpgLpbE5z8G3UCeu3UR7Y5Engr9M1dQ7EeN",
  "key15": "5qPNtMprsCk3EsLPFpemXAhuRLvThsT9W3QXmP7knVSE1TjCA5xKfkgsScT9Sz7DNv268JK1C4vwsbX6q16hY4C4",
  "key16": "63daLp14mPmbfuqxW3Auh7vpiP2fdo94772AMmGx4M1oGYDwCsMVmp24rcG3xjeXzF9HydAiPcgHGrHbyLkqpL1d",
  "key17": "2NBRTcZSgBJVEgiXuktiNiVeCDxsAdUEg22beHSS1rSQRQM5a7ENX7DA13NocUjgiVk7QdWV7g2oNqkdWstaqKfX",
  "key18": "45S4VnRgCr2ZxbGLdvyeaxRQ9jkduGGTk9A7kCdtTnxT1ZiRvhHY6vVXtJSZmJhG1iN3xUGVwrUoT84XbwmTevpC",
  "key19": "5LtUDhwuzZM389mbvWuLiB8o5mT8PSLxP6TLNXfWj55SkrWqydGuZcDYFiNPBVMzrEFDD1fJ1aTHweCdzozi9i76",
  "key20": "58eMgtif7ViDaJYGCJKgYqZ3NnQ7hFJvGNKPnc6snLnfCC1YDc8jqJk4xXGVx9EfAqUeTksngW45G6GHqqmvsKNd",
  "key21": "5qfEe9eD9bGs1PMJ9YTXNmVLpTueCjqTrF8Pn8S1K8nVxtrEEqZ7JCj3XRodT47C4DrmKbnGEYMbBj4qDaeb16SN",
  "key22": "437t5vw6CmvnfRmnLmWXqxJL6SWvzLGcLPn1emmDzM46Fbjdh9vNDuS69tSaHYLej93os58MVFtvSbV1Fxfe6XAh",
  "key23": "2WwnpiAg83UuKWskTQwf5At7ZhBYfcqyDBXrAMgoMGLAFFDzTYoUGTJcda9VGKJibDAUwynn5oQSiQryXXPjaR3b",
  "key24": "XVjgznXauUsFrzVor3W8TcMBnvwzVhVxb27A5PpaWQ1ArtRTBEMFbheNcJHv8di7rxuFz6Cf8LrVZXHahyWCYgJ",
  "key25": "3R5XdzZGpUV6zFTkCaZRsfKnBnmh9Mg6U2v5yQkoJQQZ7rMCCqnd1BpDiHcjPUvxkCk6TgRzDidXttPZYqpqy1a8",
  "key26": "u1R9LKDzEmpRbkg5gPhEXc6vSdVz98Jc6V9ghZWwnNfiuN8p73NCfRp1uBP93PE8pX7src7Bus4iscaXmSo19EC",
  "key27": "3pJHsGGZzpWfSUkJttpWUNheVdrMsaaUKukWDXubFymtR2eVTMtdZatwNN3qR2LgQcLKRzgHjxUWCKxyMJFvq4tp",
  "key28": "4eDcwazvNfh5iNfRxU7iaCDpJknE7e7VPrVwGVY9XAn2EizrbEZWHEaCDxumC1CPJ5Azi6Giw5wqHgXefYg6FHfm",
  "key29": "5ym7g9JgzKUi2L7m7LNnT2F5qZ6y3oT2CYkD3vn5TdjDdnmYAgXnqD3bDhwt7U4SVRgvsG5hMZMWEJj6c2po8ccY",
  "key30": "5Bkwx94GTq33SN7ZT1kEueaQ1UmPuriqcWLnEqYgb1TLp5LiwmMi4JYWUi6CkrTdF2QbkuyHk1Lod21Kg9cKiYiA",
  "key31": "5bGRVuuFmwGLmE8sovZGsqPpVWzYbmWUG5g6XKSCa6iX9znAxBiETzxJTB5Bz1oNWmjsjucCesggcBkzHcmU6nuk",
  "key32": "2SiTgbbgk74ESrWKZ41ut4Q1u6HGRFaDa5JvCT6JN5s67tZoWugHok6jSpGnkpbzxZwxqdwMgSvYSVghaW1guwph",
  "key33": "27CkCsFkYhhzDTBr9ZLBdYobX2iw5UQXxnKkHoXqTuydvg8F89LrhhpvqF2TMNwQqGu9Qa4nsyuA6ftge88SBF1v",
  "key34": "2MFzcLhSQBL9uemR8wNcspYHjUYoJQR81FEjRz2HixNydWCgiqhW7x8KfXEc2RS9vF58dfC4kocfKkXtM5NRAdDN",
  "key35": "5LrEDg1MqSrFnv7BQjcpiis6Fyp6uHNQ4S4hTV2siDGn8uZTnwCPzNig5XvVL3P3nNqdq8zwKJdsz3ocr1sEFTQw",
  "key36": "5HshomHA9A5cckLKvWQy5bubvCkViwZ7EVJhifDKiCgCV4YvLz96oxT6Z9uBdbQAuQZews86GLJhuWqx96bD8bYw",
  "key37": "4TUPBgns9znuxkJzP1ZWSpcAJLXAvnLKLue5zGQsD2VfVZUSKrTprR1xzr32u5qYkwBoRWk2UTyaCoegpBandtZg",
  "key38": "3po7BcVarUWHow12EkyvYjfpn7gydKm5y5X4e1y7SmTcmJWAU2TMBqvKY1PJQxr8GiV5cDrUiPkG7tjpfNxFh8pQ",
  "key39": "5DtjenzCHQ1qceSRpwebXqCXZfyt3w32hgetruhY6hb37n4GsATB36e3qA1A3LUdbENLJjyuUHvHeaHMv8o3uyo8"
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
