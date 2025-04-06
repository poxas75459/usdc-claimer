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
    "4fNZ3w96ypPcHf5HkZPhNbuoerLUfRyTAAQqEJ9yE5pDdaBqtdPaUWuR3DgpqmuUMoZnYeggJS5jUcgBzeLjnzKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33SwrTLsfi7zwdDaMigC5dhCUVndeEpW3hRQnwxonT1LktjbX8raWYsH9hrvm4ejDFdHp1CZAeYi27N9PXJyM4rA",
  "key1": "ePtUC6U8HNK2Vw1RAQDVAMGpW5LijtexCW3UkNfzbSoAHYsG37Gr3gF5zTx4TGoXFZB7mo6JGbdbr2dThU2eveG",
  "key2": "3PLRjMAFZjorok4wvXbn6WKTkuX1WkeYKpELEfmrdXDhX5rAaquykDpjkV8cxw8tdoLoAcx8mTNd2ABX3enKdqPa",
  "key3": "2yeRbuRHuVvM6su6p11CttgShLfy1oobj7q5RhRRhVxrhB5WciMo3CaRmJtn4i3t73QL28mwP6kJKXgnEaw8JVR",
  "key4": "41yYdnNRtmRpNiXAzbudsXpfoW2RLogi9myvGm2NJNVqKzJzZnsUNDKWJSqyivdXitJ4dv9Yz7c8D7XyQHVTNiF3",
  "key5": "2GuAkDAtx9f729Sf9HXi583ZWiVwANdxv7MS7thPPsjXHwe5GgtZkDuoum29WAyrHVDieSSrPbuEtszhudXxQrUn",
  "key6": "4mLRokCDET3nEJmw5JWDXBM4MxbbbVxcGnoyqjUvqe2NjYuT6swKe91hBQaWGrEdP2VoFL2PhakJ77tjxs2H7hJK",
  "key7": "3qkjgqRUv6TvVYDWAe8kCMFbCESd6f4USbvcZMYxG5R7dwjeBUfcujN1Bu4At84RQdfMfP5jszqL61J8iv3D3vcp",
  "key8": "PgSvg7Z5Wj9d2usQUnMSBf6UojJG3A3Fy7ABTrhahoT48NAFoHBorpsGXr5mSq598HLQG7hVBYpQm3TMuhcxF7y",
  "key9": "4xvGBrARmj2uroAJtawqo8ZmbvzBuM4SwnEojyQyj2Nx4uiMgmtpGS7DdgGs8bFE9zEFX2gfs6dnxQjkcchUtc4d",
  "key10": "iaZyXonz5J3faMvk2XS2RhR8rB3nGaBDpTTN85pJifwmmsr4QepJvtskL2g3NsifrvU1bnVZk3BE7BRY4uDq8RP",
  "key11": "5NR48b5QbwLSJcaJXXeeqTtskMMjaVQdJE8wAp7CEn8tPpaSSkuJAyQUWajTcWRgeoqVUMzUgndivQZSpmyY5tDM",
  "key12": "5d8NW3uivevUouz4VMEmiFmTxcq2MPPS3ceoTxhFxpLz5i9bFAuZ9xxZyyo8jSFy3hLnH337ZmvVML2EAW1pYqim",
  "key13": "5X1qSp9nBpCnzzKTDw5V6k1dmzaTQAAJwjZfnHETa4pvwXjx7VuTkC85gzCRiBerWBBUzsnG8tuwYLgEWeHRwn8x",
  "key14": "36ZGazS5JweThBFNDCoDZC6VHNMmKih6kSXQV7GvJYcGtCvaB6UGFTiKmaG5uQnRbczoLLUNMYrStcTgWuYs9agj",
  "key15": "4SQ6vTswtZNkoY12ULqSaTSrWDBiWzHx4DiLJqLJB6wGP4CkVsKDZu95SNocbGQhabAUsABkmD9tkKoxoSKKUuDT",
  "key16": "aZXAvdy6Zxcva8Jb6jGVm8BQcuvTWFnqdR55GLcoRwuHh2tQmfBhz7EbkEYMP2vid2QBwpdDoKfU7JiGboq5TB3",
  "key17": "woLP2mnNEfKuoEMD6df2Bn8idspDBadumVgCYFUijSvP1HP8RCxTkAPJtTFnbneymeAQHfwYNbQzck6jNvkz1DM",
  "key18": "sAkDRgJWS46kYopqdZSStpbgpjraqkwfe7hMiTu64xAvVggb1pbqz1c6EWxEHAkTdGiJknhs6az2dsusp3spAEL",
  "key19": "3Y8xXqt6wKBBmaRFCr53HgCnz7ayGhMi8X3n8Je74ewXxmYDWQaQE2LWp6Sgion7vZKrh5ahcgX36gKduJ2FCEaV",
  "key20": "5XXASDawtjkPPBFomo5pk6RBvuDrkLBYZtL3BLDjZbPcKfDk5RgmqJjL5vZcyb4urX4hqUgYFY2LwLv9XgeEgibE",
  "key21": "2XFuQH4w1iwHRb9Mzuvg8GkiYcu8V6vauMD3wUNYNPrMeQrRzGPocmdHP42Mv7XX8MvsysKk6CmhE4wGc9kzBmFp",
  "key22": "4L96F9sLCsx1aMvhE4kahDCuKRSFCUnso9ouRKxVJcLhQjwYJXwF92cXP1rSajm57yvmnc5BMG43D9ST3zCr81vq",
  "key23": "316HUGMXoMjRXtT2t6AvMPmMNdKiR6fcfsbNooXJtJTqnwGaQRWSXQGEkyvuXgHT3hmmDSdmmn2TiWkzyBEEjHrd",
  "key24": "3TMHheh4V2AgXZoYpNbPfdLtfZrUnAic6wnMzKjYirtWaToNXjNu7maRzBca6HoD4FFqwEbrxtYnMSJQ7m54hECx",
  "key25": "5CJDxAGsPkBmbabE7wE2DrgFro2qdbbWm1nCcr8fxjSwnGoTZ7eGeoovSbeR7h2WRmQ9TiNpZ6iZgU7QA4KKEoCT",
  "key26": "4QaHF3u3mvtHkSvaCViBnR7mbhCJfDUppTYzJKjXhDPsKcsFS9GVUcXFPzcz81St6gWc933mZAcAAFcP8jodRZfA",
  "key27": "3sBxwuXtmVqxJmfhEoAz9QMd38coUkzwVCSu8pyMvskFoLmJvXuqiuSwPotcentbuFxBFc1WL43vkcmopehfbeMg",
  "key28": "3HmWPz4o8cxa6ebrrL2C32xcD5r5Rg6NWmAQA2LRJaz7vmuCeBHwwAiM4Bzu2sjEMJNsk84mhTEYxVC14KJGiCji",
  "key29": "5FBxrQYWYeAQpSBu6zmPZGy8emeVEdSD7WwY6BU4JxpKbG89R5JzVCNXXdQZS5d7Sr1jnzpJziVMh8AuGsUjJbYX",
  "key30": "26bDo93DeKxpS4Fu1AYZ6LoiTJ1LfS49hkUfs2L4UorvFaSG47k49EHzFQxzMJCuHy7bWFGQVoS7nExKPRofm4Ps",
  "key31": "3ffDXcX9xBihasHUsJtgQuyqMEaRsK1cimP4DZpcDDXNHTVfx3xeENUSfytVidr4YxzBCJFxz5z3iuiaHdbmZKEz",
  "key32": "549gu61Fk5k75sXUnFLEhMRqk9nM65668Av4NJsRUtyfdMuaFnbzU1LjyS6gAEZ1u1vLdwVUrdUP5wAYxyhS8DKy",
  "key33": "27sunR76DLfAJGAfCp7UnAeRz1DHY3rg3neDLW43P3Ln7qn67b9ZSKg5ZsoWnqL4iSLW8t5U1mY2BsBgYwGoTkKJ",
  "key34": "3gMELrdoPf866gDX5aCC8MpJMBSEZNq7kH3xgTHfLSecb62k1VsMu1YAW2TYWBKAunVGrRhidtQkyDpCrzLFsN4D",
  "key35": "5n5ESEyyrNMbmtDxJcixidhBgR7B7Kzmz6tWzf7zeTq3v8XzV5bWVm3bqvP5G9TTVH5cRSj3MfxrgnuyLBTEHNPU",
  "key36": "5ZKk4RCXtUrJrtrarcDvErCKt5QUuEf2TFH6cATHzpQHuAxdyry3nYKFHcZHNzHgw2YptM1TbcSqFuEUikAiXjSS",
  "key37": "zWJippmyMjFEKXZvdXrb2qzGxzFTbJcpMVNE2QeQyccwYvKmGrqwy1xuAxzV16Vp9i7vriZzmX3L3hDLDdfba2F",
  "key38": "3jh71GYrYFPZQjy67X7HosqCGo8Dpe3hZ9PgyV2QJiQfTz36cChqgGVSjVtxfc3NrMPWWP3bY5jwjBPsTgfd8GWJ",
  "key39": "4rrSNNLU2n93AXC2FWcTv15WptG759Sk5dMtaZKK93aqN91jyitgN5pYhG78g9oAcHeXYHDRbXV5gJ39A7QwpSDQ",
  "key40": "4h48SBF26iSZSf2TKZoBqyBeDgUrtgtJghq4X2kJrhL1KYrmCRS6VF3hCgiDMXJAACFH4dzGi4Qfg7FEnAxxJjke",
  "key41": "49ppVf9RQ4sojdekE7eKmEGbTv478iP1M3qqA8w1orn2EUPMxfMhG4oKRFrJBcEDLeWqVZeYGpiTcZgHHMt9f6vn",
  "key42": "5B9KU9U2MrqQGeJwsJBqGQkt3h334UvX9ZhQ1CNDaNAa7gB2dFqeRjubzZGDpVck3Tkr7B8qFNn62snySa1PeWUJ",
  "key43": "3gVjiNBtqoBDU7dBnBLT77nTCfGNYHMBZHiQxHMCq5dJctQS7SrsUWEHfTGLybpCiaBfnhNKsQ1Emv7qHTZ1y7iq"
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
