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
    "4yCvXTkD2RtDyujWcjvH53iR3Dvt8qr1GQeKZsSkWGPj6Bi4sgeCENpzNYKaC2DqhrG6aqUKNDB6Q6WecmUyszi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mWV4tbGwdiCYiGQwehmDWxby1QnNdojyeFrgA4h3VV7BN9curXKofvLP4hMQnNDyKTCm7Qe7y4tuVUvQGZQDaBe",
  "key1": "4h4EdFCapVFofkCzC2NeyKoDvAXqr12hKTRH6spkTocJJzLwLyrrKQAM3MY3PTzjwFxSpfxFHecaWoRx1XCyGciC",
  "key2": "43UWRRf3wy4ELWAvQh3MfbY9pUtkNnrTVCbjKhhVwrpprTLErJdm1d2dEEUfKeC5B2NATnh4xK3VG8QnRynYoeAK",
  "key3": "5NStv1xbTjfyVkaKV42Do2AkMCY9exvaxPtDtQjGjF53He2cQwS38S5Gj7duB4MbiE1BCvaJyrCr9G1rW1GsrQRh",
  "key4": "3WrYXew5zkcJtXLNTT5rXNgN4H7fKRvpBSFuZqdpgGL4cfCs1RFvY36pBhaAF2f5d2gcUdGXBVD49PV5YNsD7MQD",
  "key5": "2cDJweGLypYK1xDjn3chPVwhLuiJrswiRVxeBLnjow8HtxsznUL52Zp26uWjSQGhmVeRHMr7nhJ75SJPHuXSQiug",
  "key6": "2zRD3TJvt7XT5NEypznVHBWEHrB7myNyzRbmH7weGhinoDoqx1vfYTTgtd9DkEautLw9Bpsoj8JqxYCumJshSXos",
  "key7": "84cX4ziPnys3Dm4Yw4Mdy6Yt6R4JKrRonrSB7F7zLv9NjQ1Akf3p32XWWwkNEHUz9vH6GQHuHGoEkbr2opSCvmM",
  "key8": "3sdkru9FoWverWVNzj6b5nCYnv1RS3NRzauMHMHKoqBADDcPqxKzN1EBd2LYVuK34Vkdmb2xinEfbcyXhZYg5unr",
  "key9": "2SVPQRNAkYAToMBscq737pWAuCFVa2bKd5WW58bkwjHdf5peBUyttw9YD7hD1BbHcMXfE5b1Rj8ZQayToXFYzSab",
  "key10": "3HWb9JnUzkfJb6V4kVNix99YbJLhRVTy1hzU9PeeSZT1yvMk9qZQAvbgWhxvPU9iXzxCbDYZ2ZUGyE4CJiusnPwD",
  "key11": "SgsWJWNTMCct8xnPKcTf8Y7xpTZ4X9Xa5wRQzSBX3kRv62fFykBBcHqdcsPqACbAikJgCaQLqg9LhV5HTBPgytk",
  "key12": "aZguz64d6cVniiXE2MPEAgC1My8mLgpoZi5zfaVuE9H1VPYt9FziticxfodnR7q3J1SgkE6tPMbMtXWhAmx86Ju",
  "key13": "2y6reo4P5nDp8cX1NbUjVrWs8NTsP8CZ5SAYAtrVXmZtFfCmdk4CB7LMRKuEBfJU48YS3MFdW1oKuNH1j5e3D4AN",
  "key14": "nuv3xbaxUVhYg8SZaCceoVadYSbGfvec5gUuX8hA4KWwuaDfwafDtS5Vy9i9UbkK6XBacQSSdyDMfWqkJDoZbTz",
  "key15": "6PaLJhEybeFD1oRk7Sw3SoRnuhES64wiXXW1sXkvZrA9ZiSnzebWtvihmXyD74EYMVQYB7ruPZct8sfqXMm9WE7",
  "key16": "3VwPPveaiVG2X34ZoFg9o1LU6XZuyGApCGDs6JVkaDdqqiwRhof7kiaMWg59wQhmBfrv9JAcqjtF5azFVgYPxgLj",
  "key17": "4cvRRtxzkzyS3b3YJyhvNiijmBxUfJrLfLpFMbaNQT5XboGtu6FkZaMNFUF31HG7KBbtNmK9vos9vHgb9oLYi5eW",
  "key18": "4U3qxqGqVAFXg3UwRbA157dAgg7S2DMumpD9MuaHSncbfURGHuFx7hVYrrFT7sWYtukHag1c763ZWsGqknMBKYzX",
  "key19": "4x8Grs1t7U3BCdSzRF5G1t2n5qSkyqc3mmT8VuWtrQhMpRgmNenTte29mUBbjfZVPKq4SsxRK7nWPaZabFCXH62o",
  "key20": "5arHzPi5fjEfNQtVikJb3vhJ7hPmqLYczB96XafJjC1S7La4agQHXBqSdyP6eSKLADfVSuv5bb7VwSTc8AcebfAA",
  "key21": "4Y75NdLJp2ZGwM5DnpJRMTGzzLbQHhjRxbqD7J4VHW2ihbuV9SJz7RXASvmJoLUH5WZspinZgzroCA7faiRzVQXs",
  "key22": "3x1z29Vip7Jj4x2Qch6W3UgCQ1yUaUecxkNKeXUyCov3uwyyY1B7q6FDCwKkBBkYZVdXQFQxpZvfLynxKtntWoKD",
  "key23": "4jfJdPbWKNue3mVM4VhHNbqCGSG93w1xp1HQviuQiEZPxsrPNdLaJjLXBhcnS9hSZzWRkKfi7NhnVP7BAkCn2sBZ",
  "key24": "5N5PuChYPEd6WRk5HpPxb3Bi581Pz8z5HT45BVqVHNPB2VK5N8SiAzcg4PabqxsGGCoH9nd3tbk11av1JAafv9if",
  "key25": "3fRNCwdvpwdyxyaurjf9Lr21ctcn3ds4mLvEpSnvjkv1hDo7mjS8bYDpTnURJoA4bBoa48EPQ8UcxFrocegG6CnR",
  "key26": "3gpXwhRyH1m6et4ZajtjgtFTpshGrupqUwpTgkMoyC6GzfrUZCJ144wozNSGg6HJTx7BM9Y3BxeaD4wYUPvGV5Yk",
  "key27": "4X54uwLmEga9XcVwnnyfafVzquwEJ4ztxK8inPv9pHowSkZRzLFgUnRp7dnscZRbhyNVHhWfnMjDwTsjNSHYAX88",
  "key28": "5LtPBAnwwbXNHnry39DqeSV3FUDTKQqsHX2tEKdZRE55EEcjbtWJq6tYFHkiCYDuDXdzom4DN81mParp7RBU8gBQ",
  "key29": "RZA9SnGNEjMepQ1wWrBGN3KdNyppzC9kJ7Ghqq8t3DXE7JQoBDXJuvCbi9pmNgmvJpQiFTWYo6Qjghz6F7x1rZN",
  "key30": "2eCF6C7JY4hWmWdvPneunb4pbpmXLWQ3s8J1QxeT8ruzp43SMF395et7Tkov59NijM9BFdkDdHt7JBCchwnZQjyV",
  "key31": "3BSmf36MsHxuwUC566EPiqHfmtKHWDSqYWsJNFoKQxZQAmWbmkXgazvqUbYSy4cMryFMMUmDDveqKvhn1kCdYjsq",
  "key32": "513jYCkaF37hSL2tcjGJGyvTCqZ9c3Vm4qkzjEnCkZ3DGZxVXnsCNsc3p2drX5Pc8hx5BDFouNv692JW6yw2p79t",
  "key33": "628mpM7wekAcv7H4ktqvxtkCpx5VE3awrd5idzjmncHTFrRoPJdut8xtCzsLubWZmE3fSs7ozqwKh8m2iQT8erUF",
  "key34": "3HkA9TXfVssuujSnU4fbaiFMW97tJdphL9vKGTMx6aBCeTtTXyuZwNwWBFKpZAVGwojKUVNsWotoCsJWoq8GFpZd"
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
