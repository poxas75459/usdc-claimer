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
    "3pCETSc2umo98kstbZLeWkhGbxR72VZHhmmfczAATrEgSyFB1b1ETxJXkwmQmjDYPwBb2UfecieGGvLUocfEP78D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fgs7V7ixAjyFA61Xp9ydmo4fe3RRhTHUoVgA1u3qakUQQs2z5ax9h12CYW5ifW7C69hg3Yass5QpxdN1nnh2E8T",
  "key1": "MLTuSZ1FY9fAa2LohidmC9pXeDEDAjsweR8dRkXdYY6CD7pRS6xgY9k2eGH7XQusHWLmkAr6uvWPikyJ2Us13Rq",
  "key2": "5TdHRSnVZ3rwFPPVCqKmGZfUEd9ub3zdJueAT8A4mGE3xStEew6KkrMVsKAaf18rbXqtzjkrWDTZXbVSRKwy2ixR",
  "key3": "4vLew3ogmVpcqzn6mHC8W9HGwvqfdaYMqiPdpMe5XeE6ddUTeRxGP2sszUAmn4xnZnJ8DJ4FYTucXCeXjN2tURnM",
  "key4": "5HWD356DRS1iUgxAzmfirWnwncd5VNkf5c4oA4uEnLRnFvPygqpiM9xEGioN8vcmUKnhhRMoXZMdNWDE2RHscPjQ",
  "key5": "5sF1GEtJg1SaBDtFYqf4Lnw1pAYzAH9dYQTCqPfcJRXX5pDCQovcJ7GmchYN4MckpHDaGyH4U49UtwrdG355Kp6T",
  "key6": "4awCfu1jtrvuPh99wphBTrUkAo9B6MsPLtPx4F35vYwNwLSAg5zYbg32nGSQSD1L5ax9EUyiX6NmrakoFP8mC2RY",
  "key7": "dUBYGb8Btom1KmgeyDJfvHatEc6cQkvhFSL8jcohshK8MLsFFgHdEgX8BaxUXc7UKwu29Psc2ThkJHmymjPFfBn",
  "key8": "4jX9CtrdXKPyQi3TdnYHFk3QSaFCMqnHDRSQeUFCAjgBBP3t39nt4oQ5eg2KAdmH9ge6Wdt9GMWmo4oKxquLB3YJ",
  "key9": "3egEVZbz23UpyxvFoSDax5WLzNrpe7Tdw2szoCUTQ8iXS9VyVhjv4eVqgTVTzgbsVyk3zkBKEf5rEm2PAhM7mwzb",
  "key10": "66mBXa3eu51s2aXZmpEGAmPW4ZGPHTS74v28sRKkTzCoSRhbXG3D43kV9DBMniaLmp9ywPaTeGw6f4n6TYZLAyD8",
  "key11": "29Qf2aLE7z7mX4LhtRetHNAPMiGVdpNVBKBZQRHoUw6j2JNEG9Xc4draCQp2TyyotNRSPFCvruTvcGv2qUvbtArb",
  "key12": "5vcrv2bRzJW9S57BkrYdKDbgkC1ppAHpFfoNTQtVPKjd8C17eoBSprxt76ha6HziMXMbSsoWprrbutiWJtZtbiAt",
  "key13": "TrQZULvSxaDz9JQQxtrFbPYZN8NVaDMLhQBTFbiqgbE1muqDHqUEe2QJ92sveLNHczGiqYMUN2Zb2u9wHEVZJcC",
  "key14": "5JQiVCzch2H1GB1jPEj39KmmwUsQD9wT4Pmj1mGbWFZtR6ULgSqeXu585N7ubBdxdFcmwJ5TLzgmsknVKVqEMWvc",
  "key15": "61nWc1SN4rYK7kdnCp6A4p15jEKEA68JRj1BgmFKiQK5mAQ8cxTVWKQxZrAhTN3TTbb9nv349JVtojwD8ZmY59Lv",
  "key16": "4JEZ3fREpoN5zZkymdsPUYqsXXBHJz5LAJKE6jReGE7UYB136EEgqj7dnfXiMGa36BnMca1KrUkcsfE1k8iXfnoN",
  "key17": "351Tbr2eDJTYhCJBNjSgLCFo5o3te4myPBEbK8qVoJRq1HewDWn6i3CVNB5Vr38KM4FC6g9aDSZ8eKb7bY99gXQS",
  "key18": "4x2ZJfSm1Fni2WCBfU32Ad25rymWJrowqzgEMuhmp7Nq9sAj9xLp3MY5LMZtH9FJ6N6vEYrJnUJwxn5aX7auP3VG",
  "key19": "3JP2fy5o1j16sTa2HeY6sWcCpAqToYgTQMPe9C4Mv29WC8ibnbZAJnjYN8BFXeEcq7yQDEYowv8GTsstP7WKgxhd",
  "key20": "4fuDX96B1NooxdSSQkQM5GrvHfZdYcjZpskXXkbRBG9w8kPtXsMRAr1gmpBpWddyEBujykNu24J7oN5pqm3CVVz9",
  "key21": "5ykVu81uLETCEahEeLcG4imagyQ72H8vRAN5nCGg4rjZjDKEcX7aE9Xv1Zf7F1QWfKNapigEK7D6umDx7PY6Lx8y",
  "key22": "2iPHVPXmGR4THrWRu77Xqob6N6ava4DS5b4gizy9mF1FE7UkkyLA9TaBTgWoPrhdy1gnD2aYT1LNuBkqSAkPiMdj",
  "key23": "3yrHdLZwKpA6MxeXw3bkfmjuExJXa8ajdnZniJa1y3zKkm3McnA34sD7E1h8ja6aAqDav1e46zjPAMCZRHrCKLUq",
  "key24": "5djcv3Unj2iZ9yU7hYbF2i582RxdAnmKUtr8Z4iCfVGDu9mmj1YxNm2mcoPyntTbgtgAVFG3FyJ991v3PaHEcms4",
  "key25": "1xiiXe1ok4zvb4hSK45QZ642NqKMtTx2XqB1ugVkBCarZqgWDjmT8hfJLsHn3RcXrFTaNN9JzYvg2GiLuMtv3Qj",
  "key26": "65T7A58qoQvGwvAc21k3XfqfLhRCnfNb2x3tHYTCb7d4KXBANe8CaDdPSBhoCD7MWXdiyjp44WpmXHLNv6jf8JrD",
  "key27": "5Vgq3bQham7cp352FixDwK3f2iVMCvuQpufbymqDMXxbakU3dk4zYGaQehr4pg4UxsT2fD2dTvvCBq3p4WDWKrB6",
  "key28": "3Zcn3BAoBAkzv6pDhhCZ9DFLeda6DQoLqYjsbux7gwzQfv2kVdzxLhXWZ2ajYkHTdYGgnLghTATFrdMWQeU5jBu8",
  "key29": "3DYSyt4wcrKj7ystnMFqsuKdMBTdQC9b4ReXe6CuupghLkZHaq8mZVYHsKLtq2cdqzzTQNHzoMjGTpBx4QrM3j2i",
  "key30": "2senFx1XKxxnDrjETPm4pixAuBbp4itUJVCyFTsT8yJHNUF5PaFKUR4MagEoWSDajZUfYmVf6RExjVdEWRrMdthh",
  "key31": "gkMZmVQWGTfhPdtmrmJsyqeoe3E5zMfe3cVtvrHvaQGG7FsJi2q5XJFAGYW48RKTSjqjLswnS9TSfo8AqW7phEf",
  "key32": "5GLwTauizRGgewzx4uGAm6efvvmtXQ2UZBD5VKk6jn6e8JfpyZrYPAGDtRa1ZJbLd7Q2jkTGs4NAooFVUtYqokb",
  "key33": "5g5NVoMRBLKSioxpuCxmcsVj6d5KjkwkJZCWt8yYZuqGMKfBSx64Qx9vhJah8ULkciHaoxYCDA5RcxDXFyQ8FZFu",
  "key34": "5tijFxNMKY8N18zWHfazX6mA3YuJz1xaY296MErLBnVdhNUq2hFoGH25vLmzGgza7mSCab2ZjtcgXwLAPdKxnmt1",
  "key35": "bv9TzwKqdhkD67RuVNxfTNzrQSxWLdsMo15Qq4jJ1WTQ5MQjJEDo2fNVMkPg8SFuiuDDBE4NLwYsqVdxAPgeEnh",
  "key36": "3Ux4bWr7PeDSxrausC4ygmy7PvXsuAmrxgyfMGw2kc9dugXeU2R9cyLURESTcVtyGLuzSytFMR6QdzdkM7SxJX3m",
  "key37": "4XJ8x2XKfXCA1sUHpuQnQpycJc6BtFu3Uwx4iePZamtexrfC3UtaTQPMcDzM6UXpAeYpNXsCmvbNCiXiug6LTQbo",
  "key38": "5xSYaK5Jfo3NDg988aHvNXzvg5pPntRc69sicrwsqNmrwmoPupyrmFGybteNnhD1aDaT7ZcPRat41X5kpok8Tz36",
  "key39": "27bhqu93gfuZexktAcjrLsVoU5PDhKoPd771UxaSSQE9a6d4kjvBXgsmHjUA4hzw1oAAmFo1BxiSZ5THcw9JKuEA",
  "key40": "iCGPg3rxw422XVo4iqmH7vCiV75Wx4gtEuCe7iMyQHdQEgjtzKLZ29MD4FA8Rcm8mgimbXhDLdt9qGRCQ5b8TEC",
  "key41": "5BhES48ukRXJSDJzodWDSUXWjpLc2oodxbDWXuTqdRUNsU3nFH8phYEFjqmUG3GppEfJrGzytPGJSRxBHaPoDn34",
  "key42": "39b3bgg5mS78vyszrvGTtUvevTUXt6LrHjdpU1Lq5pDR2MZRjfFbvwFyRq666kKQZfCxSyACw5x7G4g1atPqdpFb",
  "key43": "2h7q2ebxnjz2SeZDp12MuRBE6fzuRZ5iE6XwwcPKXrt6JGo2waUry8edCnAaUuncuLy4tTeEjRgTitudyW4e9zHc",
  "key44": "4xqiZr91Bwae6o2tZeFfaks2arkTzqnoDs79pFUSkN89HrJPvSuzjSqNc2HzZqNbo194W3Jkjxo3iPiUWetFc6yX",
  "key45": "2HGBT9vyUnxso6vjbjN7P2P1XJ5fCUz8oKWroUvXJLVqaBa6qbUEMtV6931UoWebv8CotFotuLfStMFmBozwwqqq",
  "key46": "49D7YAkbc4sKYuaG4UjQc3S2e3wfHKkdjsRJV8gpsuHUrYU4fnW3muKhwXj56f9F58KhXXMhGrzXXcUSjsiQtYq3",
  "key47": "3pwfmPJCAwM7hP8k3VLy4BCXZydxMVhDE5L9zFUyRoSkbzBNFAp3BYwpsgyWWcewP93JY2yB7jhZEgxQr4UUTHcR",
  "key48": "3hx8SdYFuX8pXbS7MP2qR81bq4Tj7rqiUR8ZFXjkJ4Lu6h4ymbxYYJiLxpA2j167pa68hotSMZjqhE4Cv1MMbiH7",
  "key49": "64XpoRSd4r7jUVnXMN21ViLZ6sQJKafrKVfoDofYTxBgpgct1Lm4vuqfcdaVh4rnmosbRhf9gTZ1di4hUBRScmZw"
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
