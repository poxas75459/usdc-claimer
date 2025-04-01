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
    "3MjnfTH13a9UcRXGdBuTptd2S6WDRZogdQCu7u9ZP7FUbF8k5f15eNoAeVQykjBQjqaCtuEJ5XHXshkaYSuGt7pE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61u635f5ZQFDZBVqMMT2SnP7mAXyCoRW1q2yw19WTrkcufSgPC9YuUbXxqjKG3DLQdVa1MHsGtnKkgBU2XUerAFD",
  "key1": "2rQFbHs4tUCstz6SUtwvSL2PFuqhnAApp59oiLJPZMrs6kC1y2mDhimkyChMtk411HDSiARYhPyY23sDUA5H4HpK",
  "key2": "4mqwg8Y5fLW1oj6m1rHbFpQNcYbejmqHmuieRCcFAzeRcwbkub5ZJoxyEpegtFokT8GL1tJyPE4oXSnXcEJPFHPJ",
  "key3": "5PpENwCkYwn5XdxQMt2c1bqwn4MasH5QZSc4EAoRyXSMatK6aWQo6Q3fYCZAcktdvp5WVzRgK3b5m7A34H5e3gf6",
  "key4": "KLkTs9v5LHJmcnFju9jahuSwenVTjLRyC6KUvZ4HfNuLNzhLDZgqKrAzBpMiALA6datriqrEE2WLDeGoyoWcG7g",
  "key5": "66rotVPtjXTduhd613gD6hqRgKM1b59cPUviABiB9rXZ4jQbCf7FNtuJA1x1JvnQCu8D366nyipXNLuC1sanRYcS",
  "key6": "4mHnkooJjBquPfND1B9Zkdy63y7XpXvjDd6qabt6tRt5QQ6LjFV8Egg9o1WpHEXBwUA7HiiCruUqxN8av2g8ve1E",
  "key7": "4P6qHTKwGTC2NPcmnXgUaRWu1zXCH6w1ta5iRhP7iXx842QF73CehtxsPfZ59aKzzYdxLBjXqVUfaYHqvgmbGfQR",
  "key8": "2jpjvcgnxzBhoYU6nUMHCiszTH89t8VhfmN2tMbYpaAZxeg1SmbxhRwQ7VgPVs9F3iLaAZMuvbnocUCqqm4bUnFc",
  "key9": "4EcHwYLcLEZHBujzeWpwsuL4maajzJH2TDKXe1fAbe4xoxzY5EWPHhVc5FeYKiCd2SoQHWSYWFjN4CtUewHNG9wm",
  "key10": "FnFVRQuoNrRwf2k6ZN93Cf9vWjzmNKH5em5KQ2iLHDzNLEiyayLBf7umswubp9UY8MHcgW34sZRBpotTWc5FWUP",
  "key11": "635wwcoefQKdxZapSSWXE9Vx5PwPCLbZaB5SWhYBQrksa5ma1dBgwmtRbTN23AcCdtTfQ7k8NrSCLJmNUViTGnru",
  "key12": "3Ye1Z1R5zZSUeorteXgtELN6Wg53Q2yZ1PamcYUzNAuk5K9VVSa1Lqy6cEouJypst4BBeACJfdjQL9e2hYPr8Vn2",
  "key13": "4LzunQ3qPZ9JZFf5MnFVD7vxPAQnH3q3YRNLyhqaksckx79Na3U6ficQYoRH9uhMQBQdLmzbGCP1RMTT4E96xK5M",
  "key14": "3NmiWaBnVboH2QNrVZv3W4eB6PMt5vmqDehFfrLtCYsJcJ8Z6zBf8t7tFUQQ7YJ9wFMdsbD2QheSxwRhNfe2azX4",
  "key15": "5bdBsjsa5irJFtcr8x4ax2m5yzjmZ4VikVnzhfWTurALMkc98imsGLcGay2y14GQDDtrKzSy6Wr2tvY248L5AK9w",
  "key16": "4J9FbKaVpucNcy6NbP316FUVVk9sU9ES7kE75rAY1vzbrcadVN5xR9sGAbnB5fQy1gf5phCxndUu1xzjwUwovZan",
  "key17": "Bwtw7XpkFbwPCvn1HMKi866odrBVQZwgYpPgxfNthTfYFjCMuqK5SrhERSdBrUrvrgdvvJB3j2gNo5NJsQV8Eti",
  "key18": "4o4tmAqcRwjRtBrcymT52vLhD1ePrdKRvtNuwcBa3kMpckYf8LedU9FJCrtXAkQq2Y9JsaXcMWPR5HJNi5Ff3cU5",
  "key19": "4WhPGfFpzrFB9qtL6uuLUo3rqrf3e5CcSJg9paqpFDoosJCf1j1VxDdwK8RXbAAFHSpTgZat1hy7RK7FixxXJuY9",
  "key20": "8B8Q5RtxrZX2aPXZzeY8f6mGKZeoC2y8ZTf4FqTzK9196SCgf8g7WL8xsu4xqZYruR6KTRAaVPbAzLNwEGmMAEF",
  "key21": "2iZtLiGrk8a8X8SBh6DnpnHFAiHPKdUD6PJVUesyDiyfeoGGa8pQqF6GGFtLQgzq6DbAFHwAShbyAidhXWV3SzGF",
  "key22": "2xPUV6YPjVhTQLr4WJo5iEywyoAkWWmuZv5Xb58hMi52cjjxHqVGyCBVyLe98ELECNTgoDoX6CKifzJ9mLHFGxTF",
  "key23": "5kbTf3r3PH1bZ6DSxYZuNbw6gSeqj3ZuQuEstgADE55rvrJnuB6YAhYzAicUQyKTCM6CF66DvAanqoP5B35gcuJe",
  "key24": "3hKQFhyPcfsTB36jJreRSjLyq9pyuMiLPmsydZXFtyyQ3jNrdTkHaBGKoRf7ASL5pFskcuYQ1YdkTqbLqFzKEsN2",
  "key25": "2nch5dwe4r3weJaoDu4VGb7JrBzrkNXDRj3FghN6uPxWVzZZFK53KV2DaBxZZGrDYvfSPKTYu2Kuhti8GzMTsFFg",
  "key26": "22PR2Kr7saQpxZZbxySiCqpY4ugq91J6xmqMAJhtAoWv8gSPPgmpDrZXpHkwjthfUhbc6yAdwDMBETVBfcuk62ME",
  "key27": "5qX56JVs7ffGQm8sHQt2KUTneEfnz94xWPEARSZ49U2jN5W3oQm1tLqaEgGi8K3auSpSWDcfQecFnWpM5bskJtxn",
  "key28": "5WXCGer2uNVo9KnwRhvbSb8SrmLvxXc6KXhyxXuFweYA1NQ1ZqCxNj2xfoqoYFdqZLQ32KneSPkyWQ2EWA63hbLX",
  "key29": "23oyWGkYkuLfM2bUFgQEXaZmkpoZEzmbEsYDENcCw4eVaHignWAMawshmSUXF6mep23XZAqL8DwtCTUstwSSXj4A",
  "key30": "5h5QfnZcpyjPrdR3mwDuSDnKAUV6nkCWuAHTKxF1AJqNXZWmVbTfoNJBo7tZ2Fb5vqaEaA4R1j77aLnmJt7TNN58",
  "key31": "2bLkv5mq1o5AMChVnoxskkn9X2o5RE4qVDhdo7ttKBWLjkywU3PqXRQ4dZJMJxomvWVa9BxdgAnZ1uqa9FJU7E5s",
  "key32": "2WLojpFZUgpWv9VjTbhm3YuW6o9rXK4HsLHBEoTbYuzNvXePEAxwqCe9yFNYpEKwJrXPrAgcyWtTQnnbTigazuFL",
  "key33": "2xuumGZ3zji5oDQ67A64PwCx2P4h9qEJ2mCXHNGg6eo4uu47eqTYYt8iG8qv9T68ek3DBUEgvHrtc8qkV6DoUG7y",
  "key34": "53bx6e9QW8TDGKmJhurUVXL38488VQhTjNGCtxS7dPYfsNPSsPKqoMaZWg1JE5SDwRytLCC4tvWe3YzhgjstdraV",
  "key35": "2QDREBYjXPSnCiizMgENXQYZMU6uEdXEpt587xJvKkAyP5BKczLgAzxoqZKoirw3nQjgfxLj9or62JVgUQSsm6Qe",
  "key36": "4xYM7wUpjqpnUPzEx7S53Ww7gMNY5ggVXxQkp27NiPydaExaMfZaD2fyZFCgoVyMavvJuYCiZ2d6f6rdobazRTto",
  "key37": "4DvoTkRn8co74W68ZRwo5BLCYr9ExDrPmvKnYC48nPFNsWURiAX6UGSUPWJtBAe7FSJEZpG3Yge4nCnDfwgrpLtU",
  "key38": "5HFA6cZsbDYvVMcpeuZAViYkNxb762wEzpLBTaKJwZa8hDcZf3vL1GQSjxBLiRSPi2jXHaMekqUjsrmfuSMzzoaz",
  "key39": "64wZWeGGnDL8ofXWyrN7jED1aoQxpkotXrLqpTebWGvQw5GdyjL4WRtYcRPcytbXMa6enN63394ni1SEZeYsSzxK",
  "key40": "2L9sVqS2HsEjo1UNkYrrEXdfcLJPPULpRSepufsBEVzGJ1o8CyPR3xTJ57mCpEn1MALE1brnK9ZF459GZPfmR7AS",
  "key41": "3oM3SSdvWtDpxvjHexVTrerYyVbFQYL28ucVSHttfg9QM2Eiwvi8VoK4sdwZU1i31RNArFoVDGUTFwFLGHwrnN1p",
  "key42": "4bZ293JqjAXqvFRenVEdokRxetXTHHk3BfTmbcUdnXhc7YcFhZMYe4Zf8U3hKEY4mbtL4QwkecU5VLDWy7BgDF8q",
  "key43": "37UuHtU6wJXrTqsLdcvRtvx915S2hXVjvYPjFjgVea5BzBgLpyaRHdYLPMsypNJmaoURpc9uGy332zUrLPvPkj4G",
  "key44": "3AXfEtHFzgbZnu5oeDWX7QbpZgAyFUJyWBeZB5SRjCUqJZ2qwm6BbDBc4QdL1JouVgBDCRvSYhGvjhYDaMNiJX7v",
  "key45": "GnobLSTAqN2B35CYYniovrFKWjVKxDTTFFmQtcaHev2HRhSGjnjcRuxmpKhJ6u1jRo2oDawyiyvi2xv8B1ngher",
  "key46": "3FXzKBHF3S24YnyaV2h6fVow4rFDfKnFusMYpzzzrHUS2GX234dZQ1x78TE7yz2cWZKaRhwKuynHUnTMrQBh9NWX",
  "key47": "3BYJbDStPQgDePknDMAx32aXv8vwpXZa9UnDLSe7WwMtH4o5FWFaAerSbbFLyvcjr8BxRorZWX8vBgA88JKWjixK"
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
