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
    "47JWSMPGzaf4ynJkoh9EUSnsaiKrRjXaFVfcd77MWFVeQZgt8gDqefDHh6Vo82SNbmLL8j5Gc2yXA5PCNSJ5nq5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6pDMpza1rBTLrH79uUgkEE8TfytLueXu335ZRgTPEmXtu16NDdZ38b2ALaMXMorYJF3X6xzs24Ue88muZumoNXy",
  "key1": "3dvpyaQrtJr8XFsR8NWqChMpf3jZHhMLa8W5vx6mucmAg5bwWjyHoAWhSzoBkiH55eLRjP4AsQnHTg9Z5Xu7xweW",
  "key2": "4zMrypvEVzqejNTnaQQ4v29Xh7w4aUVqYQ1kiaC4gsZ5UWhHeMmxDkpTkEfGqobW55T33i5axknmKj9weWRj2fYY",
  "key3": "4Vt2qKV1hkzyBJy5dKNrDaMew3TpEbNz6bz9xKABSfnQ8g1agP9QJbxDqFEU1ZMK9txjm2xnRWi8P22ZCUca5UFE",
  "key4": "2KqygigjbgQfDnfxcSnxXM7aErRxbkDWztjic4xnRUmDK7yxLF6YopGFphMdcKhohYqFsgFa7vPq9cNBsx5SikDD",
  "key5": "5gQqNTFv2mrVKYwyWagpu6Ws8afgw3awCnVvoHgrmd6p3QjxaSLPnXg7ineQnaB6SLqtwXWLFVAwKyojXP4hTmKS",
  "key6": "5a7raFk7fafk8tk5ryhc6N7TqWV412hnjiHRshuP2aqXYPyExK6kxpbJXvfCXkhYZ1SxyBjZ2YW1tEcNxwpUN2qM",
  "key7": "3czTF4w69m2zquYoEqGd1wyqsX9737PDU6YEwe2CmUjEV1JfkFYDrQfKZC64BwsQzpofwZkYMzbreLHQjEkX5GDR",
  "key8": "LCTPfg3d4nkJoMayHWHdnVBsgchXBxYsanqWYFF3XDdW4kcdVnFrKwrA52BDE6QwmoK1uLW5ECNdapxo3B2fHEs",
  "key9": "2WxWz1Y32gzYwmkmWy3F2X5sgJTEQ4AQcRGYxMZKqyJS2hEAyPEVWeg669SVwhLRsGjPUigDahq3Y3BL9X7ABJ7v",
  "key10": "3WMKYR92hZJNuPzS91yvn6AmFnpUwTdT3BnGm6FMhWn3RaP7V7WfBwyELp3RqA4rpe2wZV5gy58nyvn6ckCrchfb",
  "key11": "3Pte7vZw1HhoA55XSnTd1gJ5nX2hTV3RgrMYAucnnEws7RivYNyPMKaUS8Q72UPfuYPtnbJjnJYUnx7D3ggdymPZ",
  "key12": "4iY1JnpoE9V22mAXicn7i4Ru9FEhkPN22t7uZgNWUruciSanJWDnpVb2ii96LwECNUPNeWLjdWqKGGjU8DaaBeR2",
  "key13": "3Gq1MFL9oYYKor8x2dZuVr9L6oB4UEh6HoPfGVxP3tF7W73X2TVXMSi6a41ZXB9TuDCrJozMTXeWvmSAWQ7ZHk15",
  "key14": "3iK2homJXoBE6UrYCVnWyCnSWzF4DfTVSnbJyy27pqEnBvs5kbVwP3Dyz3MQxPmVEtDp5rSwBTdj7g4BzrMmUVA8",
  "key15": "3Z6jDKd8iJysDBZcFVGJmoup96GAZkNJTAvYdZAM9t71DpfU3e4NEKJDu4w34EDGBt8gZea2ozXs6UPHHey7WPf2",
  "key16": "2PMB7gAbRoQpphgd8Q1pAWEtNjkcGGL2obrYWmdAVtmyC8G5G1tDDsDiG2Eh6qLkj6maiuydQABtPAvxP39di9BS",
  "key17": "5myW1CmZAFBmWCBwN2TgcaGVS71C781AnSyHtRWZysmu8uupC7EpRxRhdvjDRLgfSfooBMDjy7SQp87W5bK3Ws9F",
  "key18": "4dSQpLqx3e5YLp6zNCupZ7s5KVu58mNmKgyDuD9BXK59foY2LAk1G42pU5NHEp9nB2XPpxYXeUvgyTX1zwyV6gTr",
  "key19": "5VjXETGdn7UY5bhVa9YavPHh7vUn6CP9xHwUUoS7w9ziJ7tEFxZtxQ8yeTY1H7i4eWBRawzKkjozQFBDfd8eMmkp",
  "key20": "3DX1EEUKsDYobwvuv3fxgQL1R4BmrZgxLbgLBQhVAhu5APzd8f7ZTsynixLn5dnjShXS8ytAKHH6E5a14aG7tFPd",
  "key21": "UJp357uxN31f98gZn9j2NFJmZzbjWtNpTxFHKBZUcRXENSjNDCG5vfCmKDf4g29tGhjLzNjsuK4CBpFk4vL6dLc",
  "key22": "2BtxsHcKSX9jKmppaoFoG6UMhBJuo3nnuxQKz7GpKPLmcpC6rXuMFixfr4JJ3kPQxnArqKcqrmBPbobpbPt1QX6r",
  "key23": "4WtZjzHyo5iRVnghAZQjyFXwSrRGxkFWETfgCBM7wSfRSDYJZBQByGqqhYeyF1umKCgUxpTEfNjqyZhDznCHyjCZ",
  "key24": "2aaoL4Jo9v3ZmGztC8DmfGFn7KRjr13wVGiRCwFXWTY17UtCC8MEDbNiQkpj3LPkKA8iBxwPFqqFFVaLUpe72mKt",
  "key25": "GrNkVUEyrzb2NgWUL9nS2dekX3u4VwYiNwEPJtnnhtXymkU8sd8KmR1rmjBFwdG35vfA4d9UmdLwDscctU68A3b",
  "key26": "2yuX9iRtY7H8xe9yeWKAu2Yzo2zzavxRHVG7eWNSBoKm3qUB2WZFQKwvdBhuxmE6SrB19Evi4sLumGC3T3FxREAL",
  "key27": "3WGsJuBh6zcAahDh3ADEbFc1YdAW2FAGdumuhANKEVur9x34C2u9Evxr3ppYBvp7wsgHdQ4rDCFEjcSb6Jd76yai",
  "key28": "5y9U4mhoP62nD992CSXhJL6qCVnJLqA8PPz5ni4Ys6hJraxQoDK91DLRPMYw5F2J5iuwc4z4hZ2BmZCA4TH4DBbG",
  "key29": "2K6cbWRoLC5ZGnHyHcb9XqTQzfrbjKDKDPwPyiEnM17beNaRA1MqAcVGFqP59aS7aAvrdEsVqg4T4BNGgYY5cdxF",
  "key30": "5RmgS5NV7suR3b6GsraUtuFFMzWSs3Y3w4jnJY2T3j5KZQsrLytQmvHRcfjmjK2UQx4wW1ehtxGj8Q82QUoRDeQX",
  "key31": "213KGzm7269ekDioncCoAyagrHtpmCFeBSUndgSxkXmwQB8gd4jAJpj5yF7FQ5taLLnBspiCrAHLZ7pSU8kPbvjH",
  "key32": "2yAShEYL98oQdJQSchK7rxBjPa11Fw136R1zjKJUDMiRcwYHStDMtDH9JWFDYquRgKPfZS7qX1BoY49BQGCWiLUC",
  "key33": "47j2AzMG56t97jssxhZ3HEbVCjeww8fPwEv1MnTuYCEDJJaiZF4bkSypsN3xJQK6yCb4dHpTNvapMhCaSXU2drRN",
  "key34": "4sHSjR2FyLyJUxkA1U6TeEGbXtNDEnjJVkar3XpVRmcN2jsHPwxGjz9uHxtN9PRTmr7128ySNk6xmNdiCAuoSspH",
  "key35": "2LpPL4REqJyhY1iyzickDvuoHJHQD9T3T9ghLfJzvBzmhg3mYieUtUEKRZ4Qv6rC2Eg4k412vJxNzJnRcnWEJff5",
  "key36": "4wsdeod8C7jRpajXPSEtF8FS1owvcfJDZ2Ls4fjpKTrWWAuA12B3H85jbCBUwZsRe2h9LHYSFB3jBSt9d7mQ17P2",
  "key37": "2iPV5VpTR3fCfqs8StsMMWt6PrrgG5XELdvjcjXXfHEJVzXdKx2guNsgpeDh8aSRKG1efgJ1rMEWHmV576A4UHgp",
  "key38": "2tVyaofxtchfG4SF95aPw8wU7vUpKGHLNpihmXf3CvS75NmrDh3gmiwChtRHz7kmU4CnotLSNToasC9uYwDEjsZb"
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
