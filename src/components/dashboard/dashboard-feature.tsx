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
    "5S4jFvrrZxHjPKxGcuWwKbP5f9XVLKCpKGhLow86Sc1n43phmdMC1UobTz9nCrq2DL7yxt5jZT7xBNTjY7HEbrJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nhrmTuSJ2UBDUyFQ98FyoEYcJLRqDEtVp2BV8Sv7rvDVo5zyvbeGytKt9Vw9rUBHn1oqCESuVjwBxS7uLajkhFs",
  "key1": "jnFAERpBMxmRgEjHfjCm3YSQ7E11kTgSdJH4ycp1uYV2wdDjGekcZppBChrFyFQjtZyYVpjUmKkQgaQiCHs4Vjt",
  "key2": "M59yR7gukbPzJQ8SRWWEVSna7CinEFYgKoSEcrGgdhLcxBekXw1r5LUNNX7pTgVgKcwVESXBMxDZ6fXV1hK4zbP",
  "key3": "QovWfC2cF56Q4vPwKp8D4qFUp72hsQRsS9koPhUHitd5AsyD3DAb6F8GzYUz53KN3Jg4ufJZbySxKQoRq7XYeuP",
  "key4": "5C5AGzQe8Sm6YqkxTpBfr9iyK3YnHYCtU7owj4EvarGf3uCZiinU9qzRDD4ny24xM8dBfUfaJDC3tZLTnoy7DcRt",
  "key5": "5E4dD1M6jfa8jxNvyCyrQBWZdixLu8Rc6wwXjWr33qN4cK8dQW1wdVA9yAbCnLqEScNsMdfE5qhpp5cbi6PgETws",
  "key6": "3B1azWAHV36UdTeLTPGN3Gg1M7snm87bUkJDanVWbV8mgJBRuNfhqciJjR4qudbZRQiy6mqFXgFzdQ2Ar9x2f88q",
  "key7": "466kvQ6f9e6P1notiDnmeUR6Goittq21yMWJi1mCwekmQFko2kNmdXntJ4FazDZkiqqG6GTnGwS5yghzXC7mZUzg",
  "key8": "55fgwdJrjryAUPk7wit5vAtRQKKwLFPNxUdwQfES3uhm8pf9BMoyFRGP7fZ83jHLGSrG1T5pZFNtmwL2phv54unZ",
  "key9": "5aE8d1mWup76qqLwrtFNnPx8o5XnNwvuaDm8rgYAU5xGBmwzjmiFRpyho2RX624c28VQuN4KFHnqDZCjqfV5mTg7",
  "key10": "3FgSpEojavJm4aGazPqUphCmFUmNMrZM5eSzAapr3phfgAt3xCPHrFshZdByh4fPqEUxoEGodV37b5A2DFx4Tvqq",
  "key11": "2pd2xaTQ948EYbMHunbLttQP3x4f3XvBYRsGGHAnG2sCW4a6U3gTQDzgnzX6DeEL9Uz2ZtRbhZee4TG9d43Czg9M",
  "key12": "2KNff7Fogf9j62ZTLxAXS9ppcK4XB5eorkyxXYuCrPo52tZcUeo8NUc8idUe9qgVRXa3bRdraH5jJKNhNDQNYaPT",
  "key13": "2q242sHnPzYTp7Fa57F4ZhvCyS9XwZynkinYLy9xrxdQGviwaw4GC9LGbCvMXSBUQ12HhYoU6dpFMkHgK4oNyhT6",
  "key14": "4Y1wgXU8NA7V1w22B1Hqs2KPJTMiNaczp1g1rUAxQNu4HE413YkEzjPcxfK3ha4uJUCmrm8UsSSE2ZtivYVc5R7R",
  "key15": "5N1ttKf5NAZ67dKPgUC8dPXhLteT17FNkawyGBV2uTis5Y5z5n7pms1DTx3HhZcN3ruUHL5V1gsLrEoS8zDid2mt",
  "key16": "3mkBUuaqJE4nKHuCz2uRNiAAAFbRiZQyGBsb58g81QyuwNq8HxRQ1hXBD8iRedGg1a9x8gN1u1mrhxAV7P6kR22e",
  "key17": "48M7egTCMFahRftrBnmW9ZfAsP38YHmNNs5T7H4mrrAQsA8NezTQYneQPug9vjdwHvr8SSaDJUT3tW76KuDnkh7F",
  "key18": "4tZ4sW8HGBhsQVkFtkpijYuJapXKNGmVkmYRWTENMD4rLHQh6HsM6pjXvMSfJQLSCY5LDPHoD6b2jgNKJ6q4xPJo",
  "key19": "riJScWPGnBQkBAaFcN4mckCeQhRPVzjPJvHuNA89NB6dcCz2U2gpqATNPbntE1tV6gBxKtA5GyetcJ48Mdfr3sN",
  "key20": "2dVVWWKX3kjJF5qkvKkuNpXDJPBTV34QG8ugSxpjJF2QTLX5HwhUQzsKwhkc4yGAzN1qqoZW7Ag15wTuZF3ksohT",
  "key21": "5g6Dtne5gGeADGRKn8J6qojhwEBr4JkpTVSjtcUjTDyGS87e1p9puDhwuCRUfu5UK4DEJEAGz2bES5p8Up662Cok",
  "key22": "bnAiSyrFPAhUNsMciXUcsjF99fwztkcHGdsiP7PRjSrsqg9NRW36v6BVT6e2hxivdxh2ay5EG3vDdzRWykqxJZY",
  "key23": "36ZYuA4BVgDa8NKrKEyvHB7o4AkF5z63EoE8pUQyTHPueXaZqqrJksAEJZZr574kGvt4zVPzcegHpKbLemXhdoLr",
  "key24": "2ypKTNXGwLbzpkffG8rv1f5QTSVWu39L9kWqkA8SnGzSXfY8fvAyFZzKHFt4rhTyLpYt2nbtJmzwgHqE4r48PNPC",
  "key25": "7Be9vdUiakqFMPfY4JwNCkwguTAF53AHK5RbvZoDVHpnPALGeuJQrUUuUzy88uce6sAgPrPN37hRWs36oJkjZXc",
  "key26": "54SLD8qVQEfN2tduZouJJZhJxWsccbVCELb8R4By8GdWYitg2Ur9GmAhSyYrJHxGfsAyy4E5LgVWFdvvJX9G7L4d",
  "key27": "44B4JA9BjrJT4su6wn2KQfa6ykMV5CeLYLtsq2u1cGF5e9vkpD2aTMHTAzzXaAGSDJTtupoA6XCF1KWkftCXdrKe",
  "key28": "3tVkqyuKimQayhpsRSVKaSzGukvMt23mDaWoGXzauF8SCQg6Z7eirtvU6TYBQ4Hbxqaz1ntjVjooXZVkBiWgjtai",
  "key29": "3dsLnooJa1KX1YwvzU6XG9WodrwUzVcRE7ovjAQJg2YHcUzZ2gLSsbEpEKit6tsH3yhpkaEqEnt2pEy9dGh5EvTz",
  "key30": "3BSC9RRHLBqA3fNxqgUyFkB5EnQddP2UJSyNVZJv8JkVWCB5x9udJgNTGDcnEFMcjqSfX7qZkPKS15uTyQxoEnaS",
  "key31": "4y8uKV6w2fusTejg1ZvDXur2coqrPB4tuiJw7Z5AuAEySeAYheHkeV3K3gqgYszZZED88uSZLKG5v5v4FSFAvfjY",
  "key32": "4xrCBRMgU6Xc9bSEdHCz3Y54VEwFUKu61ZUyr2bzBp8E8nyGZToayVzku9Mk4pF84C8serzHTyi4vKmwEB4mWbdg",
  "key33": "2hZSdmaugqQppAVzFLcZZoYXEXh622pwTzuUkEDehQ9uB8EpP6yGm7wCKPxxpQX71KGMLAFnaDdmJ5LYyLFaGfsA",
  "key34": "cPv4eidJUzmoB4eVRk9W3fy6uY2AqUVABkGXLEStLUjXgiFnRxbVuZqAReCGtM75vDyACeWRY249BYDFNXM6GyC",
  "key35": "31wwgA3UoMueC4TzGxcHGLkxuV9KvFf3Bd4RgnqzhyT8f5dx2HdiGaarBKexqPjG45xxFGXUAk9VrtGBnfZLwBN4",
  "key36": "2pouwJdHJsiBQQ6xkXRRXSKoPLSVhfaTm3P9TLpqmGA2GZpi74QX1jj9dkL9oR1JWCCZqiZG6Lvrm17mdhQY73Rv",
  "key37": "3YhVUgsLyTfMj8nFEvtwAatNP6Ur3CUZbWLz28VXtD2T7u9kEQgMDm7DfP2DZdwbsRnbzkBi1wYuQx3iv9qZoDv",
  "key38": "PLmovimsHVT7pJYrJ51rE4sfzkJAQFgEKJypNh3MyfpGC5nCnt4CJps5XhGiBvT7nKv4jpXHUua12aw2418Sgof",
  "key39": "5PZuRyt7LudDbwiA5Vw2tLVinNdAfmKVUZR1DZM9xAzDZEDD1HXRP4jYHGPAbY9b3iaAHJ2jpsjkTT3p4vCAe2X1",
  "key40": "22CA8wXVd6mLJHCQuMUmFhn1zJZDW49XngyywzPdgUEraAgqtcHWyCyfgD8AjzxHmie6yNaW8EYHMcT4gkqHFivu",
  "key41": "5RGu4jLjzxepvaVu9DxBtGyShZjTJKcs79zb3Tjv2MTri6p5v1kSPjZRHkqRsiwnmcMNmFTBs2CmoeWt4And3sv6",
  "key42": "55nKpZRKh1y5gcKC5Xf9m9YFbAcND5XALL5TJd6S4D5LB4AM7rArDJqK6VoKkZcXVYHWwDS4m4GmLT1w9pUs7Ry9",
  "key43": "25Gu1WwcGFY7zt2r9qQC1bYSs6kNXqwAhMrueuajYB7bB9fbT4RfYs8pRyaxfydfwApmcw5kALQqUErkMWmxVHZz",
  "key44": "3u5MTWecrxXw7gD7UyALjZh47XzW6b4HGedt9dhs4twvDnGdBtJmvzF4KceLw3Xw9KBhjGHs1iEELzC5voj4Gcw6",
  "key45": "J2HHWFjqkwYHfBbxMx21jxeGjRcdb1J9budg6tGmZB6jBSQsnUNUjkcks3FUjrtXfWM91qhDKpRyghPdso4pGzn",
  "key46": "2KTYWwtcJs1mHtLpMd53a2UwYrxEASSggsGjjSqhpLGwgUS5qAqp6ECvYx6u7kyH54cq6Y1hrPsjqQd4ppwxf8sZ",
  "key47": "543V9PKYq4wLczNacqD4hCEr6ypfQhqbm1UNDG43Zb3fXsMqJbUNz3U4iMzaF9ns2BfQRQwuUiBveuquzuWVFA41"
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
