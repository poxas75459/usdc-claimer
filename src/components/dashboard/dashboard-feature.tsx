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
    "k4448FnqzLCq3DeQ9AEypv6j5mMaEKDh2Ts4UysXJZByS7nWZg9LnqoSzTezG75atHCabD4WpnsJhXAuTFA8cmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PrsD9Mvv5BZkkxae6mfzS71xB1mZnsGCC7vinGw4YxBdaorkWyjzmGDEF2q47hwJk2G5ar6JecgtwWNG4z4aron",
  "key1": "2r1TrisDPASJmwgbczAV7EQFGZDTNXHEnPVgb67uXs6weRYBG4CV5ptjVi79TWTqeaBZY7DiNhiDrsbKFjsh1JzK",
  "key2": "2u1tfQqn1BGuidH7jmZQTMZm9UxUWHP6FDWeCXzFCxTsXBJWKmWftNAQixENAxKjM6GqC2Qd8PrsHmcinnhNRmP2",
  "key3": "2FJkDAXNN6yaB12nS7Xs6MLAhbwT3giuPKLrrebmWGLLduRSKtibm6opUcawUR5QdXh9WryP7ZrGLBNfE9VBWEUb",
  "key4": "GNkwgKAuKpnnHtMFS34qCN5D5oaLvqe8nqkL72R3bYsuF7MozX92U5cNo3Vtb3Ft58MsDc52anZ9ugCj4UYL7An",
  "key5": "3Y7UUHrLm6gxZUthFRAv1oGJpWkFvq9j9ACdwXFDAPuWLJoSqyBWzpab9RomqwuxGY1Nnm9LaM37ruE9wWqwYaPK",
  "key6": "3G4DMEqQmLR1xNWrk2Xay2dWvqL3UyCFx9ZynGkpeeH7nxYepzY83jyADBK2tw3yZyY9r8hTMygn4yEHfXoj22z8",
  "key7": "4HqU4ZwGh8u1Dum2kx4EfYvPfAva5c72TCyuiLRpY1umxuYEwG8sQPYjWE2uHfpjXkCq1LbffAEsNNFVpand92Fr",
  "key8": "Bh8LQKrFsYUnYVBbd1wZedY8dbvLaziY7DscjHiMrPHWUr6VHZUxXDUXtk8s3qCSAHtX9UX7Zcwtx9rZCNvmqX5",
  "key9": "2aooszE3DbJrYbi99vgEzSjAB1QTHc5gQjfvBSbx5msSm39FxHwLKhGkKMaDGEebcJwsFb3gioAJMG6jf1frPdfx",
  "key10": "5LFHR23WmQPJQ4FBja8VVAjqjPfsLzK7ug6fv3X2GGvemjY5XDF3TsADdbCefGF25pTQcupPcBMMmtCbjJb2ck7U",
  "key11": "5gzocpFRCxQYxL6J3QzqVBMSafwVCXR13EkMyGvbXF7Q9SQifDGnNUb4qFBS6KfDMC77Xe52riWmocXo4Li85PYX",
  "key12": "5eCGmAsh45FR1e62KyCRJwM6FERcDPZfrgFy1VjyAA94c5LE1674TZd5p3VDb4d7JErbeVaSQ8b9NVtULXz48wnX",
  "key13": "2GhVw3otSwd3ubyd9C4d7WLFrbiv6XfYqfmMKkKu47cnrn1o8bsgvMq7Wg6qy77dXJQF1ZuJyZTL87mqwoN8UFUD",
  "key14": "REwkhVRJQRceNFmKXb5joLnAmmpq3yTojZ6HxcuzkAJGYi4TQeteTN8apGB79rNJmfF3cxonupGZQuoiPXri2c5",
  "key15": "WtLsYvUjq2CnRU7n7Yg2zfY6SUcduUcLKyJMMxCAzZWrmLDqaozbieKC6G5fX17bssCXxfEZG9PEHfGV35tYmT7",
  "key16": "3icfaGLCFS4H2EUFee917Bb8gaiwMMiyThSb5dLRbQfX7ptKN8wyZf8yRM3QrBkbfyWUae8kwnVXgZHnfMkfh4n4",
  "key17": "5gADjot2pXeEnZxJMVBZG3ZaknNPAE8Q1FTmvL99XLTCmEGT96FwVfo3eNsqUUf6Cm4GNQo3N7N8dRFz4TVagC7o",
  "key18": "4Mg81m8yTRwnvLcDUMw9QVUTaX3YUNbQ386DJgJ2vVczjJdxHhgizwMKV36SF7HQ6L9HRDeiWEAMp9cyAq5Fp7N3",
  "key19": "2VdMvc6qNRVcry6YenZXfjkp3bDYXNgkGTdM6qRWunV6XH57otmEfuADcwkaxSn74SBcd4VVGHVdbfZHd3J44Lcp",
  "key20": "2iQUrLsnGfgfhYdfEGgdxPzmUSvefLDfFDpojisAWQiyFHYpYGMdDxY2BNNXCTaa5C5K5CihsNrtXLTQZcM7DhTu",
  "key21": "4ENpQJiaBngBATUzkjxuKpFdP7FA4UGBDTaVA4uNJURA15ThGaPN2SNhVQptdZn97UVqwmapRU1YkJNLykh8S7uE",
  "key22": "Gdt458EYAAKqXgeZmWM36Qy7UHcgMoab9pcvG587AKCAWYuTVEE9WP6YFjgNjtJMXJUKxshvNc5uGdcq3wKwf7m",
  "key23": "51AJPxXsKgy5E4t9rXXzfNUd2RmWfzNUAM7DiNQtoZ7UjTcrDxBfvtt8e5TFcPu6g2f3CcKjx7ps75rMJG2n8b96",
  "key24": "5dB78ohS9oV5PrTXAATYEiXw5yMzHP2KHx4WeaCJsFUmGVJL5XuyeMXbdg796RtgCBXeeA7JrxNM4pmSWr3efUUw",
  "key25": "JrDaSv3t9GgguFGqUrdLv4tMfkur5JpduSckmpXCuYkmuyVJx1n7h9bPomVx1rYCFuyugLjTUeNtG15VjUMULaz",
  "key26": "4eXhj44avWpdFQ5qCS8f6TowAMTsi5tL89y4EGeDBhKwX7WerKdvWieXLwnMPib4wHphh8YGgMq9mv6JrE1WDtK3",
  "key27": "N7rUwH4LTLhPFnrrKfka84YCj4VGgxPuUjFqXPZ8Py7DEgczjBdP2RuB5d2e3NM3m5EUyw2WVjfP2FzFTG9EQrm",
  "key28": "5an2TjTaDxXsuKBPm2ceDeBPoJ6qz4232nBSj4cH4fFz8b5jzFZsLjWSbSWJuFXmHr2rrxZhX9AzpanihSoFeUQy",
  "key29": "5jvwjwTADQ8EFdpBDwePjjzidMQmDnGktYscsaUQrgXXEWAiHjkvm3kxranQn9XE4mTMYYY8pQqn1ATVAa3K5n9C",
  "key30": "3qHCKexcKXNHs4Qo57CqVrEeJLFQh1xh6rweF7BnL75KV3LMC58ngx4hVuP1zRXRUcmRicNwMZGrwNUuSmWc3abx",
  "key31": "5A4tN8uuMEbwx2jvnQ3mpqgmNUb2KGYUqLTtcAt46YBLVQPE59wwsNQ9eXuTM76U8h7zpTNTn3yNb7o8mRmVGB4G",
  "key32": "2zFPv7RqQrh57YWkpqTwHqGM5HjDAEYF4e3oduxrQZUWpvRppGUcb87aCaubVp9y35T2r1rcWR3jshtkZ9EPPc3k",
  "key33": "4aiq56BJrorZCsQ7ZwH9zc95Qq8KVkdou2mfwysixGhwujsmBx6R9qo5CyXBrnqh2quQ2ks3KMPU2EVoCNc2ZMHh",
  "key34": "4jAv14J7oH82keVam6VEfD9x9TEAGU3NoZ71biidyHSc5xT8xX2F49bRqRhiS5NVgqabrCupyuyD783kfURRBiPF",
  "key35": "3QqYAtz4HRTxLygqTbhw3x18G3BwFQg8tqJ6XMvNGus1DCLFRFhTouRprCP4JwUTLHi3VkdfyKCUUjQQpkQWT6AQ",
  "key36": "4KZ3Vygq2g41RqXiCgRq1YxWbD3rGmzNw9DVoepSKu8Jj1Y64hrrgfguqxURtYHeDdXoFAgKmos8su9bShkMLERp",
  "key37": "4WALmNaz1HaCBQ9fGosLCxf8sZ2iWiNHji9ACp7dxc9QYjuiiqru75saSKrFeRDV1JV97sRoN5nVtrs5nUeCAsnc",
  "key38": "3AfhtfCauakecRYJXHwvNSgf37Ja8GYorMknFHt5AJqdqi888AZj6kWPwSrHGJEXThRks4sDq6gKSnVxUtYR6if7",
  "key39": "446qULrKM95t4iDie1g4CqCue9BrKyNeRCkHALwLybdn4zg74Rqhkn4UAbx1r14yKv3Lmo7TWFaybKHzjwZeWnEs",
  "key40": "5ikmKrC2NQ5SqRi36LaS9gbrVBqnVUDtFRUpUxG4TTXfci83d36cZ2S3m1hUWun3cRDzUsNrE8Kw51mEYpK8nU1u"
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
