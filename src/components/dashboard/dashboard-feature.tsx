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
    "2tpZ7RGTPun9ysgNzgJaWzt3gRJN7HgM8YTJtoVUGBGxjbPQxf5ivLnef1EvCom5rTa3hV7VtoKL4nSKzWCFSu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wwmZGKbiLbvfnC2T28rVJvXqqPFBHgeXdffKWgGj11oJznXpNPpEHCfUYJdSjsuze2rx3DvTnMe11LFJr5Sne9u",
  "key1": "5gLAbupLpWEEvQ8Tdk1ajYiTjfFVjHkLZG5cqhzAD79iMzFoVyqSLYV3mykcVtAd1EkQ6H1o8g87L5xSMzCbVrex",
  "key2": "4aBSACYy1y6nqs7kS7DNVpuiHot7T4Ro8zxnhYvyK7unCexkwUJKWEdCBmC7SfBMyfvsEGJq8x6ZvjuXgYVNjbQi",
  "key3": "5cwy2kTX1MnCGHHmViFULt6FqJdmvPHFZVTaQfUdnFXuFVAX5vUMs6mBUU69V1BepRSgaJUDaiaMV6kgvCpoTBo2",
  "key4": "WYLp1UcYFbmkQFZS7j5V2mu8cpRTUH2ubNF9aTo7kJRP2oneeuUq4ja3TDjZnJ7CjkW6yo7X5g2rtjavGf5uXRN",
  "key5": "4jnyHdqboffqdhD8txQfaWt5uHeExXE9a7K3ZSeAE3oAdTn25gumWnziCZfHb61XmvT7g2HubVVv7gt6sJNY9AJj",
  "key6": "grJUQ3xEHKt1KYfNW7jMex4m6epk7i31fLt6qTdaJi7tPRDZ6FzJsb23sTjggKWG9KfSY3PHPoSvaqqCs5do6JX",
  "key7": "5kPo9F8iPETKdsYi44woJ8TLMmgxaRLHDApE9gKvfJHeUGihDiMrW4yeeaDczMnsTbDMfG1jPoCiMS1CBhZXmqXu",
  "key8": "4h4pxBEUgixEpUHqYtfxbjC4AQRskyX4zoh1GPvm6y38BhuWGoSAPBNvXZZqwCzTeLy76gySTyk4WNz69i7Gzz99",
  "key9": "5Y3x1ADgCGF4G3DzRjRa5xjihf4CbMDrJTharv84ATHNi6vj7jfBNjYZBmfpkeLC6jHs6J5oFdpNmzMogEuFiW2i",
  "key10": "2Ggs44xphLVnCfi1TJ4vXPPyamhjrwAMr7ycfedJJSx375RJbtJBUBrg6CYj2xq6qiFH1yZW2xjgK1Lx7NBmkXc6",
  "key11": "3NXCs5h3pw5outFRX5hptnJeJNhs8yphjMZuC7GMRGHoYbWdT2zSeJg5uTj3CWhgdPMDhuVP7LcVQzDLMTmT4ATH",
  "key12": "3UZr787JBXPMcrHX4G7rXhNHJfbAotVyRg9iaks7y5vhpwwmZ9sYHfbBKYR2eJ79k8n3TPY2wyoYxtKkFp4ze68z",
  "key13": "2hMJ1xnU1xJuzDrr7o9r63u7ukVs1DdhQNCs4kQNAZu8qVqdmjBFSjPbcGULFsSov1UXZhvnKLZcEDLCs6fVDBX",
  "key14": "4F5meJx2tCgTR7jHZifMXwGrzpsXW7BLEbo31DmxtwQKeAihh2BefVjM1JVbkoWTwcPgKKSpqm3hUAMLPD1uZLRU",
  "key15": "5CW4fEmALuAmkLkFGRwpHVLi2th4NN3wJY5tSmL5U4FFS36TjXM3H4czQKHYnsg5Cj47xrKeJt3Cs1KDVEdU2cFx",
  "key16": "2itmFEUyoaEur7kDby9eeFkhvANSrGYL7Wpkw2xRo6UAkMyGPmvD2QJNCSY22bvSftNJp74WyCguYXu2hTiD6koq",
  "key17": "5KuBASv94GMzjy8CptHnttxFtJMu41sPeujifVVctMBu2n4YVzmmzQkzEf595tFEAqPEMAtCokApTkeyHr39jtjf",
  "key18": "66mcQ69GvhcFHLBLCqJrUC7Kbe2XBssxZ7KtVrqYfjmE8EmE4DAaP2XwtrWYoiFqBFyUYY2nD1v4YF58Aq2pR5Ca",
  "key19": "DrsMros9DCNZMJXrH5qiiqP5Bu8jhtcXXzTFLyoywfBFwWN7tz2LTRmds4MQU9EhJ6qH2uFhjY7LZWV5aXfmEjB",
  "key20": "35TASA67AsGE9LMLvRyAEpsM1zEFGm5Xd7j2gPbbYMQY64B13eLTbrrtZCYwwe7BM9aewAWnRerfFUJtarz7wFvs",
  "key21": "4KjJHvpdQ6K6VWSgb2RWWV96BRMUg63zuToLF1zRDuJ8Ryut7RPR2RuTDycQxC96thy8n6ig4bKpwmR6SsfdhdbL",
  "key22": "64HfuRWWPkJbV7bHsGK4pioW58i23vTiRMrzRDngHWyoUpZJ4RQhoZQz1NcigFiYXwYAFRp8o8nhH3hftNdKXyfN",
  "key23": "xLo1HsFoEtRw2QPPAeuCrPGxQR93ZKqEWyPZJbmB3ic63ptMTRPU33HDKVWkLzRaLxDUKq9LZyEWyD6DTWMKCHb",
  "key24": "fkwp5MYQbCubEgLrHYfjiXhcvAoNmu4uUzuAFVr3gc4b84SJ96kDg2AeicHgNLMueBCE4pYsqCgqXszKBbgWojn",
  "key25": "4m4vjUZgVrSLD2PhPQTtSXvBNqmkQEatEk6Wq9kWm4yyc8XLm1n7uhewB999HYbvkyarJoL7WVCZ7aZqgVzoR9FJ",
  "key26": "5A25g27vALePJ4o1zdDNfu1onyawnTs7bwqhqhdXwQbkWBymVfpJgV6UbnBR1kMvpwaXyU2g4nNd7Fi44DqNMn8J",
  "key27": "4YbtyQazhH3R1zcswcKjFqu55FhUbe8SghHzv5qVwpyCqpYSCHiDunjZCqMPiAvhGxrUGdRuw3aQoo46yz9h2bjG",
  "key28": "4aewTGocLeMX4Ti5NbwN9MJjUfXCeTUGynSt15QJHoYpQ1NXNAyXTpVQw8DpdU3Btbt1XwbGnf6eepUQ5HTZPtj",
  "key29": "4SaQJmYtMQMUGeecaeEntQop4bzvDXtaFiRnSoz6jfUycXGiLtrTQ2yYZJsKNSfxD8MnBbitsmjGQAnGKrhDFXVH",
  "key30": "3YJVLoHmEutMpQT3bdUoofYfAJD8tVcfHcGTVrGEWEuZN9HqDDmBxnNhU3vdmYYyQ4jG2hPQmCq86d169yFEwtig",
  "key31": "ycFHWXhp6gdcsjLUkT8gBwTGSixiF1YSojqV49RH6zEy1YDqvJJ3AMjQ2RFzuZzzwbDV3ZwodCgpYQg1YhQnXm6",
  "key32": "4WYdo4TzJw6aybaBnwuj9a96CDmVp6wf4aGshXKb8gmNxg5GVPpd5i2T7HnukMpgkACMggkM1FEEq17STt2UmTkz",
  "key33": "2zQxbj8KrTVozgyKcQqUvb3GE1AQ3VPEbyfV7WJLEWGFTg8DvinHvYTQhWywS1UAPPZa1whCx95DFjUDniv6Tvxm",
  "key34": "2sMKD2TDrDcj1d6f199ovaaMAAC1qbTMxhYLfjDipLGSZ6ZBCWGU1gbySc47nyuYVqqboTtFQRBZrbReNE1RJWwf",
  "key35": "1gEhx4AfLnC414hcBfXzeVmj6QgjQbQGPZLQXkQRnKNGJogkxKy2jJngzyrd5gherVJDa5puS75HzegyJEZxkWb",
  "key36": "2JQXVCBxHWJtFByix54GFVrTxwHtGCpBJYrfpj1sGTVCGLVGkngEhDy5RiuEmXy7FBeUYfEs5C2kTyjuZ3s11mLW",
  "key37": "5KrGAbCaP82Xk8zkmQ7wo4wmWckNqUFxzzKwe2b1rCGaCunRtcRcP32vUgmorUt85zGzTVqQLHehHZa5HC2i2g1q",
  "key38": "4WJNbSeguhbUxk3uS82cfeDRTjqevNm7a4Rr5amViDmSj51PC5v9Q1NDQNvjyC2RRXH5PxiorXkjMbgpHTvHstmi",
  "key39": "4xpubGGDKUTsquM3jQZetWTAgwzDMT2epAy7rD69oTDZVqg3dxUuzBn4SucKP3ooGejapAuGnFQPGwoPnVNKurU2",
  "key40": "2ymCfFYmmTr8RRJqzDm6MNTsdGz6HX78mfruVNX3JqZhSEwWv4JJuv9oHpmUNNAKCHjWfVVudRHG9gRmV5vWAYe3",
  "key41": "2PUsm41Tp6HYND29JKcnhedFvhp7RNbKb7S1g97ALduCpkyttDttjdF534Rws7MfR7ofbf6LWiSoLPiuKyurH87b",
  "key42": "3hZXi8T7krKUCUuFWTKkDMBeG5sgF9eq5msnhsG85THiSJpcYX3imaqFzHWVqreRucEdRoy4JFmjHtBSB6LgVUFX",
  "key43": "5kYEuoXd3c5mTfPx8gvhgerH6aTtPaLfsWU87j8jSKgRooGECn2H3hc6EAGCDauZCwrnXFtxrg4UuZcjWUZrpvPD",
  "key44": "NVmMSqviDU49W4V64LjMXnuGneZK8EQFvuPbKpLS6ghvgjjFBUuNuYZXhshypuTMZ4yT27ygvz8a7eApH534k7D",
  "key45": "Jd1CETKv2Yr5tWX71Gk3TejjpbsuuZcS6f2sZ9eUiwQWdcKdB64DpjkNJwVCybR7aLzhr9WLQo37vJQQy26v823"
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
