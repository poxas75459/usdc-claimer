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
    "61rx7szg1XZvEkH8PoUUF8t5Z3BAQkRc61AT7jQAFbRRNHvaevTCAapXza8vnKg7rt7Q17MTzNPzE3njcfGGV4bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PQ858tbQrSvUQwKiLjk4mX5KJKMAHK1K6smx6ayjNJNm4DpLjEUzQNvHmTMKJwust5g8ZeLQT3rFUoMAgGpngVT",
  "key1": "58K7Sxmj2F1kmngvzyzFV6FF4AWRVLwXHC14quXUd5Rcd8bFgMW2TafYYgVTs8uuvSa1MHgVWiJHhWs9gH4JAhJy",
  "key2": "3qVKhGameQGjCa7KVS7T2mS3aBphgNTo56mkwrPspa7tzbfRp8rpbcGH3yeVgMFBgJ6hT4LvWVk8V31ZabaWzaHK",
  "key3": "5ZdKoEFLGZoVBxZkpgQXjtmvtQKimbMed3jkJPUskRKe6AgGPovf3MJzyStY4FENF1B6q3axD8PzStTY5taBsF3w",
  "key4": "5t35iXUy8C4yHEVP9zbxCUdwfv7hLGGnhVAqUNRU5rX3Werboh36voUAjLhwWC9b5qcUTqzvduXcK33cVBiUxwQ1",
  "key5": "3PezAokhJfTQUuvDHFC6nSDhA4ueBCZdpwTKbYy3qe4FbYNAkW4Y9wSQsarnqBYGPTUGMfWWzHStQVowk7ghYvZS",
  "key6": "3B3xyqiBcpxpvpRA6UtLviTdS5dKaEFnrVC1Dw4RgD8PYtJCN5dncXLjzmTFVtZYjUzD3nd34NijbDP5Z8cpYNTt",
  "key7": "2X4CyWetay1bYZXz1Bi22FS2TxuwbgWFbH4V9ausi8KS48wqyefTrfNy9vDKwkrCTj2smftMb77g6ET54Pw5Zvo",
  "key8": "kzUQ9AwqEt2brJUhv7BvwjhLaqK7KHWT79Kwd9uM6qf7vvU1xxGPiRuAiPD3yczMZcU25Cezzt1ETzLwdzBE6q1",
  "key9": "3asj8JtPrzgga719QEBoA878jAdvkHiGZxj6rf1UVZQf9po7PjpUcbCsTBwDnAx5KYTY6H4nvBgStMshsXwS15GW",
  "key10": "vYamohMRVQS4MJDcexvcv6qKeu948r8Zr6zevGyYX7MLb51MbmnoBVBHrpR4WFNAy2me9By2oCtoiTyZyy9K77g",
  "key11": "4Xu7exiw5dXBTJdLzC2m1HTvGS6ePCS4SgchzhVRWdmpALGVULkyBRSLofdUBUeXzepQE2DDj98VQ7S8UKo88sA1",
  "key12": "3wZ1HNmrkQkcaDU6nR3zzWi9ixdeENYpHugmaMFXixYDXy8Cnf7ia8Fn5YkKq2iYf1BALu4QKqrRJTwundcPpz84",
  "key13": "ZvnYWip6CZLj2TERZC8amFHE3Qk1wb64B8jxijJno91GnvGWsBR3EwU46mdTL9ebFXYcCNH2yapB1j74XDfQ6Dz",
  "key14": "4xnRpjbEsiAEsq1vSHon63hYkYKXPoStvD9mGP2jGEu4Yc1pNwzA5LoRyoyajMonK8KzPrxdemDQ9ckqQsKM7qXp",
  "key15": "42YfsRiVW8tfZEV7cRSjmMUn7U8B4cjrhcLF7NAw9xMSkCmTUTFg6Abm5CeA8N3mwLRNJAAZKkfA4zdCW8S4hhWD",
  "key16": "1gzzLGXeX5ZsZj5v1RaAGXBXaFp3aYVHMia9zwhcqmRC4dUJETfXSv9ek2wWoGGy5bB5mXXtL2nNSc3hFpsNK2y",
  "key17": "3ycUtsJeYWucgM95BMhGgGswywFfZr1KEGNPDEJLt85sR2MDEHJGSwKh2rCZRXKeMXPL73rskm8ou5Dp8JNFoXSe",
  "key18": "4whmN9sL7nXRE3qiEFhoBjRaJnU3gqPxAX99LgSXbZRRFYitj8S6f4neBwCVJTN3HaRmgKVLPnhicuxjNduukPtt",
  "key19": "bYmpHPUzUyAtmtCQieF11aTNyTXNhaSo5962nAWgVq8T1UQdxmfzXhwmzDTUD3Mu8jqZYhvgXyGLRxrAcTL71Rm",
  "key20": "4ZxKbMgM29M5nnN9pW4eTZiXSPySHcJMMbWneybRfnLZSc6NwrMFEtPe6faLGojkwgmhvDwkuHYu9Rv2JPsNVAWQ",
  "key21": "5jmmTCAGUfLL7JX4T6Wdma8ix3UR8cnZWyuqxjFJh2eoY5eoeYmW6jPCDkuUf242LeNzKFcAh6ASzQS3f5HaBj9U",
  "key22": "4swGFid9DZXnxjzciuvrowSyEhvUe3z3XSQjQ6M3zR8GeXq9nrzqBUJB8c231sKxqxVc6M7Qj5Wv6K4FszDt1cSm",
  "key23": "24RYFd6nX6wYFoZSrfEebaSZGY4Zm84aonrGiqeMuikqeBpZbanZryLSvPzk6FV3Se24wTjaiZkcDzw2Qg4Po3R9",
  "key24": "4RD8SxepBFBZUCsi4xobbFmWFKKTAiHqf9yN6iL6CqWSysLVtKeUqCguKNYqkm26rTyMPsKGuWoC9UCQyRbz4YGU",
  "key25": "7sY6f7xmq4sjchBoquEGZpU1EUVzhtC3uz8N6V957tdD6AVeLVLR3SwPbAKcpAKEEG7hoeodosgaPbc8GpmsQY9",
  "key26": "5kNQLoyyG6sCMK9WsvFEQcNp1z3BALiVireNd6tGVn6FWheWh9WYQedanTXQ2DYdbJ421W8Br7Rzvfw29X7yxgb6",
  "key27": "2D7P6cuGgGtHGHwy26hoDHEJxqq98pcSjM24xbYn2M7ZBoKxwxEQ2YQC3ucLDcHaj3xfiAMqwrn4c49pjFjkNLuu",
  "key28": "4JPtohKYguFrVTDxjcbq3YfvPpbfVgKSaHCzEtNrGQgLbZAeJF6DCUwvvFabhV8UcXwWpHhh6eK7oXZCnPbhaDAJ",
  "key29": "36SnfT2mvVLS4r8UAbBYTZtgciAfjxTp34632FYfESTgJLsob9AFzV9Tm852hg4AqAvze8t1kF2uBvCFsT8ux5VW",
  "key30": "5wJQuCp8vZL7A1LFKcLmmLcdh3Qd6C6CuzALgLS5yPum6FUsuEGW5TsCYQDUMtLYQSkzvSYUVfqFCWuTpwatC7a4",
  "key31": "2tpnoTEvCcca9pZDu9E11mRagkDGWi59fLUJ6NtzweAVXHDarEUPBA2njR34KoMieTBNdVpjMEbzz4qeioxmuuha",
  "key32": "3UWzmV38KpRsfSDUsRmDBxNL4KufRnkYPwBiYaSfMb1RSuaStEr4SQBymsni3jQVsqVnPEKT6MKrawaJf7tYJqCs",
  "key33": "4ukudj2fKhhP97yiZnioJYpRVwNHCEs4BRc4jK46yfc6f6cniKpYzx1eLoe6gMsqSxVkUoFHgQ1h5ec7th4doXdN",
  "key34": "2qq5GK12wH73odiASVreArpfV6myneTtQQVRkSKPsCr2qxunk1GKH58qGiVV7DNp8EC315zKupdrNFD5EnYptLUr",
  "key35": "cbx7f8tqSk1ZbU6hsytvXoFYaVMP9fxJS6kgyyZkBCGPaescghqEW726YJHT5GRPG65TwTGD1WVvjT3eUqLka6f",
  "key36": "Sn4MakbMCVmrjgFgjoU3SLytLqGkLrGkLdUqtSnLLDCuQZ8DuUKe48hhqR4UkTw9LasNeXQ4DWSqMz39KdFQC1L",
  "key37": "2TrwW2QJzPtmr963xg9eKBw79QEyxQ2YcdY3TCbcYuJ747VKnVUVQenTSdhfMaeGHJmbe2UjS17fPvfAgDM8rq1t",
  "key38": "3SP4Eh5YRnM21eWKgnnTGxntj1zjdRFS6cDUjmxcAZ5SdG87eZN5Rb4FryFMMbVahMoMXsxjMgJRYZnTsyeRtYFp",
  "key39": "4UZ1ZNgqBZQfi1n29ant4gk6mp9gts8MKBFnfnVaBDw8Lv8dHeEwMg9A5RMCqD8CXjrRN6xWLJtvab37PBhfLKo7",
  "key40": "5w1zJAFSXSZLqL92sevqciKj1Rgkk3CNqukPUGkbgGpNqgxzhph4QFx7jqvj8Y5mvoqWSohxMZxCox5GFc8og9ch",
  "key41": "2YyzvgxCa8dYGHULNjFqX47U58bedjs4SB1YuaAjppydnyswTaEuyJYan5wqoEC2wWaqCTumNDf2SgLF2qZivmdb",
  "key42": "129YagRvaGT1wwWdhLvZkjDhNM3cFQ1XzdozJjitmgBsA33Hgjxyf9cYu8928dSUvXNyGggc6qE8d8Vhpg86iv4c",
  "key43": "fExYrLm7BgMFDUySAmvfNowyKjiEFzeaXrkXKaoRP8zjpwwpJHcizBaR18jBfZMnL4F4mW4cqNx4vUL5rbE9HQs",
  "key44": "Ss3Dh8vRCPwpnVP5qsmUAwgbecyn9J4x7EFAF7NmJQmxCCmCHjGxRx3hGgiCJStbDVnT2LxbwEsTtsAqquXvzzP",
  "key45": "4hPjVP8vyqseDbiRcRPTo5Suu1wvop83X9dUrvQ5MvHDdjK6JdtU5yjcgpJSpKxoja6TYM4QaiDpHft4Yg8Sbfic",
  "key46": "2bKMDXYp2ysePNbpTyBXv7T1CGvHQZg92v4XFJwGwmXpSPL6Vt8ZfHoqfgKsmYJgP3twhMsPtkimkW4y3rZUrhCD",
  "key47": "4SnSSUiqUjCiezdaW79yyRRpX1q8fMyCXBxtpdhuzryMSWK41DpNPSAC5G5GFNGCoc4KP48DovTwwazsgHZjgZSz",
  "key48": "5LxETZ9RkUfW2AZaLvtr7KiUu9BLwQrnUQTFo4LLf3nKS3DiZ3u44evrSrRB655Rg1gtPkxAdkHNJ1cLyBQzLsmp"
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
