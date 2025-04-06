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
    "P8GmYMk5dFN7QQQZzNn7G1du8DdaH1u4y4DF2wfxFHP3SLAWuw8uEfgfnuYU8xZ5RZUKw3W4LWsGJ7qhuir9LUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNs8Sfk6CfwRDLc1vn2EzrgTfvq9Tf3TRtQXWc9EreKcJqZeEqcUsDAtvjUhZu3GAzpFYqzFZiVNoT5hnrh1j6J",
  "key1": "5piaHqu2He7FhYcNidxXnRJnxWZceRj4LdYHm5zjHk891bBgQUPJnh6BcjqPvVhtSsKfG9sQ1fQU3FDQyQG6aXjX",
  "key2": "4QQWEC3nyrzotGtRrEWVWUWaARuMaBwt2YmDd3m1346SkHQDsBspFwC3tJgD2oHaAT8i2x5eu6ff83hBk1tvgLig",
  "key3": "2EfbVA2N4T7iPMT5fvbZkAZiUPk9TaS9sVTs2Beg9dzH5ikGKDWxU7ne3XDZ8eN3vYRAToxvJZVrWrcEZ8uFAkep",
  "key4": "2nxB6fxVs1qqVi2YXtbusND4nXLf9VcD8rumtMF6f7sSHY5dxfyzaLJ36qHQ9nCjKvxDP3LDdrPF5XQLT8AYDtoM",
  "key5": "2jaiwhEVw9hen5Vs1p1nSqqXJQxTBrFMXfBsHg4FChBV24qfT6jSUhi5gxWwHAUTHTmdHVayM5qj58tKQn69PZLx",
  "key6": "5YWPsAJJcG9Bh1xBuPK6BqGLLemM39cb2WiuzbuReGmFX7YVGR5Td131NotUdcfhZCWnQxT8nxNqGWt46BCdJT7S",
  "key7": "4HRoRkKvHQrhBA9T6nfoh9xm5XchFhJX493Ry6NCQmh5etK1opjw6GcKzv5CRodUbPty1hyiq5w28koEekQEnnM1",
  "key8": "3y83GVURpCYaTJVpvj1TSfZ82exS9mBjR77dDAubPgkr2LZnz2EAHyPDHA2bUX58ckeJBV1N4avH7dTAo7Nhp31P",
  "key9": "3Mt8xsVYdAMHQWE9PAwfPD3Q3oTtgSg9CXBDDefrnvMCpBNdpYCGRcmTxmA54gvUTtyPeTKrjftJX2sEkFqBabiG",
  "key10": "43hGyi2oCBeYRGFZZyaMfJgnjWbidTRFFB575vk7WiDC4Ce3JSVUbaVfA5gnBUSTpeqcQZWsSuP2Kmei5azGJXcQ",
  "key11": "Nj3cGqYGd95MPKsgRVP2f8zaeTBopmPEYZimiYcDBNaK6SNQ3nxX8PVapM4p45e8V92Rz9PeV15dQAVToM7YVXt",
  "key12": "gezvGsE3ecjmfA27uPVWRYmnzyWQuSFrehz5cBDfB1Cf9a3nAz51NdFWPmFa5YyLDaNhG9Lp5Mnq49iMatxqGyS",
  "key13": "2DboaW8V9CnmRqwX8MKN1TZwvGAqEUWkLQ5YeAA5ZFMY6YpKdm52uevNkucSAKhEsyLWqowPLRnvRxSjVDFrGrap",
  "key14": "64M2EqKeQnSqL5v61PfxPUjf74GF3z64SRaZWSTHzSuiMjJxCdcFG3qwQ78ATD63UPWvisqDnpmFPTM65R6tLajH",
  "key15": "HT2YDC67Xr6Kgd23pEU8RyVhtox5h8MHRZg3XKgkq8x4tYjbbbjvZGejhbsmAhL3hrVQinLkQLFaEjiXFCAZBZg",
  "key16": "5Y89QgH4uNXyq5NsQJHFzDqUG7knRxCcPAYWCU1DQ9u6AaXg5PdxXjFpRybKECKZ2fv4iv3qvn8hGBBEQbzaujwZ",
  "key17": "23J1dHSLwr3YwYKtNFh7vFUM1PDgggZxGMsbgW9iWS8wJgLzsepWEprVV7b44XvhJBTzsK7U28GhfQ4VqVdt4XwJ",
  "key18": "EXSiR8i7DizV2NqjdMtRSczwmnbeoxn3yP5cu2BEWJZWeMjWVVPcwmxP7ejW5gNQW6xfadv5oFRS2ebmdJja1FX",
  "key19": "e8Yhhiu5Gt45zF4ggX1fFH1uU87e21YnHgFko9ykkx9aM4pjKTLZtAwaLcThtvr6i3xLhcoFskAkUVPydHoh6Fz",
  "key20": "5iJ5KeuHAroLnqedP1XXBGSXsjLvtioXYsBksSmPTB9ZEzVse3MdEvKizkiXLcDLPjSgEmXYJCwcusiEa7HuWXu1",
  "key21": "54PAip8q9CdufiR73KmE1oGREsVE9S59x5iV8ujBFa8S7N8EoLd34iNM7rXc4bWPU8Lde38o1kKfuCLWbSM5MtLm",
  "key22": "4a6NJueXP8TEb4WWDBCVDibThpZzVEy6Wo6rZZethPPqS2uKhx4fH7t4mdEqHV6Qqysxx8MdxJ9yqvKWiPSBqGDN",
  "key23": "gGzUmVaPbs1J2JRz3wXmvQwP52AmVr3QzbwHETxX7KvxqL9mVVXthR4sD3ZFouEfUj1iSojxkfVNYaxZkECAu2F",
  "key24": "43auSaA4aB1pbqi8YpYDsn5ViPMhSiVXtsV8GdwWttoZX62quvUKkeT4exMiQsNCAFqs4obsNfrhdQNuaTJamNfg",
  "key25": "3n6DaS3dCGp1NoSBupXRkNNtYuzDT3zbeQrfyEfkokxqtgyjMeYXdRxm8msovTLrokSuUnjaL8Mzq7BbC8WWmzoN",
  "key26": "2aN1cxv1SvsUBuWJgD8xgbKYwehHov6tW6ScUXBAWerVWVMp62x1APjZNJPQRLTMYm489kqxNxYy383vZdvZ2nQe",
  "key27": "4rfAa5MxgQyZHLuaoPJhtHJyVC7gavo38JsHzxKH3pBfoZA9x8SPXSunm7u2JFBFBM4brjqi4Y2tHKT73kASJ5g5",
  "key28": "5Jhkq1cvgJmAWuEWqCc9VKSPAmYXvraVD9dxr5Uhf25ZSjU5Z3oF2J14rzZpZNPQEMA3WY9xrLfEbvpSkhA7HWF1",
  "key29": "3JydQb796fM41HHfukDxDrb7MfvuzzgQBycqrLL35t2DhNdaUNczS17XW35Liopv9vDqm6YFtrkJhDJKGFQzh3LG",
  "key30": "4QkN9jQZeFD19VN38sx7mCUJCFBHGmRXKL2k2ZpjgJxYMvrfMPjEn19WeLuDfAyBaoswd1Vv1tuFysdUdKMnKccv",
  "key31": "62dHNAjSrF9co9xwP4Wjy5cUjUiJUin1uHw6uTVK2yw9RjXUoXwWbDUu11VXChKgieJo3RFSUU6SuHoRUVF7yNvx",
  "key32": "3cVgbeVhYXs5YbtNAnbouk7H6kHjHRu6aBMnKq3mmAmTJ4px1awY6T5LQVxChmzvrQHjjyVUJiNaMc3P3jUWYtMp",
  "key33": "329mWpbMX5m6cakDKqtKFhR9UryhYSoZYA4aZWvAj8GnqWjZkTgsvtvxHpjnRvCzQhhr9FjRZSfoPxxzFTHM55u",
  "key34": "5LoDsbjoJ7CqWmBX3WXWW8MFCbQiYoQUH852mBcg7fGXGgfwvTbqM4XYkiRc4xb8dJJMQ7AnADmYBRyJkUQLudZ3",
  "key35": "559h26kNgL1cdNkwKDDddfLHqVvJTZhGwydUdgvYZg6pSedgayfJvkzyTNS9snrHQCWYAYQtbXHXiZGosLbYxDKR",
  "key36": "KwxBvJERRJVDy5UUKbFUiFSvWrAzFcUnnYDb4kSteUePkc3XA5FZEaHGg6g5cEPTN2s1uJW4zQDQV44R737us9d",
  "key37": "22rB5VgMQ9vJUUn8ps8XptScPzR7ER5bnZrQDYi6YrM7RopL1SRvtNR2noMcMCx5MH2bT3swhXzSzMzpFDQeDHwg"
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
