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
    "5vPJvBmbyhHfeDh5i4YWo939Y4Hn7jXaen9fnX2hPsNYNC16WZwPigYx7imNxdHftzTHa7e37KPpcMKmzRWPUnf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j352js7wX9V3qBs7VR49X8gzYKScEkWQqYKGCY3yf68w7x8dSgyheXMWDQy1fxowXazndqgYj917S3uAUM49t6M",
  "key1": "8YCqyAynXk6J2idEwupw7GrbMx8NivHDtSkH5tPXj7uA9AcbqEb8a1FjHPPvAbaHpSCrzWnE4JeyMu1aLuMg58Y",
  "key2": "233tgoMTuTBZzoTHBHx36ek1sPhVjsa2R6xpMfT179d8h1WwxbeK8pebTTuUHF9fe5VynFVPkYvhQBdj8gdKyuBZ",
  "key3": "taD6QUamm4uxKN4UuVSd7xT6CSzUMF7XhrxRTtfiJXxeptdpDsxqP3LEZqcMq2mHMkqpfc8pSUjYxDufhaGXjRm",
  "key4": "39TfYWkHMEybaRS9T7dUiZk3txFDvhm1ykbiztuL6kzNGZwzjifsVj2sn3dLoH6jzxDYYD4pAzkPvV24ZWAaokFZ",
  "key5": "3tWbMbuB2KfHDU1hzpAGu8f2nzdJrYwaX3wVCNqdYgFdVmNtaQB88Ks89j9sQGnGayCopNrEcoR3FrLEW6cwpBGP",
  "key6": "2VKvzK6ZHKAYwtDpt7uFkqykrgbuczqeazjQx6Ra74mp9rmHpz3mqhH1w6E45JgVWHhK2gckzzD44rxc36PArnBC",
  "key7": "5aqBxHz2DDttHY8oDPEHduzhhAN7xx8BENSJvE12dRccuUqFYgAi7SAZ9cBgU5joFBKXsWNq5CerD6tfkFsa9cSf",
  "key8": "xgWEyGSS1uknWfcEHhWP9co3qzTr3uo8eHhJYg3DwFVcra3dGJCrB5ssREEJcN4oAV8VSM5kCaSsAndDGH4hQrA",
  "key9": "htYdowYZZRxHiDJiFmooKFtXLdqAzgQGTS9M3vqjS3JX6bnk6SJRuYc1UTR1FWQ7sFsXc6zcwe39sMiDgp1qPcM",
  "key10": "yiyE53iq8FpEUrKoXsEsszz813KYuTXiLBoPNDFnkeK2n7eY4zFbReAQCeRrodW1NVyQEBiYEWicVRFktempzZT",
  "key11": "38qDyeDkW99CJheu8kP9rbiQemND1KCLSTSxMa28T2fvJsxcXdbHvhBTYTrRajHsg3sCfts3E5cxDHbgfGFQt33u",
  "key12": "43WsiWCEfypxSMqQxfjdkP4CV1v56nKS1e1qNb2S1RokhdyV9zngPjUa2phjhdGcrCx8tuF6AhccsaB1CPYyakj2",
  "key13": "5tcd2zkaoq5SFMKwLATM1oBBbGuBXhbuN7k8VBEHpvoAyQeqKu1HHHcCr9F8Tg5sNpDczA39gcG39F9GiXdqpHVW",
  "key14": "Dmz4Cch1GKGWmkhVN6bVmmESD7poVD3v8VWu9QrXXoqNnud4ZW8oVG6Qv2nP1voUiT1M9zrfPL3D2msn7MajjcX",
  "key15": "38kbRYCdNxJfDcHeCJc43qjDRa9hoqohfHbs3KRNkTvQ1NFZ74JCAYois8nhFHwKS99Wv6B1oVMJvH9BSLeMCKkX",
  "key16": "5Tb67FpdsDdi3fByL2ZFi5h4cxYX3NePZfSbvReuLgB2VvFNFsW3rusxeUG3QBQzo1zFYeV3XAucNg3gVTA7hdRd",
  "key17": "3E6RyRy36gpjffsYbjU361Eu4eB24xh4o6Z6hbiLjNympAHpjmZKDvgRG3m7tXqpB3WgmbWrppGHzNgHaz5sqzic",
  "key18": "29CoydaMhNGbUhVAFdhXZXfEHJD8m8RqueAVvym69Gd6of4Vtbrf6TzfeidZbaHBa5AAefUPeJZftxsGpmHYh9n5",
  "key19": "4ZoACTCAa4XFAQzZbHUTCZ5y5KELg3huNzNTHnbksxQkywGx44eMjmu9W647dVYZ6cKbRcSVnyif9cvbACFebTp",
  "key20": "25JYCTTpG3YCw6UkHNYF8rW8qJUZvAuGa8R8sLFM1A88v7FawLzsDR4RquCEV8EtHVkg8oeUhxWDUNYAf6Dr4b8w",
  "key21": "4R3spj27icrydas4bfEaRTGN88mDgqUvhrmocYW2E42xfYGMfgjL8hL4wsBGeBgX6KEJRUkowVboE8TPHcLu5iW6",
  "key22": "hGozEqhnLJ84upjroyikJ7STPEPimHq9DGos6nY3577s9MpgjAw64JAJkAYaXUoKvRVcSMitkT6uzLdXtqpZCsX",
  "key23": "2TKXhggQeaBCH4HHu5dxQbMQzbAC9VHsteMz7K3ojHVMzgrMLUC3afk9ze8kQ69XdfZZdz8UhXEDb9eeS9csZv9T",
  "key24": "pjGHAwh19fxN1pp1qcSKs2Gsu9W2hzrhRm5ditTiA2R9jcx9Zxtfkc67kZV1hN7Y2hXFsJ945yn7nfU9XFHArUs",
  "key25": "5hvxJrEFUDduTSrzHZDnjUS8ZXF62hikBqZ4hMdRD3uDbXZwHQp2cYb9xzhVF386od7zGScqTRJaLfWV5aZEADvf",
  "key26": "5eTTK4gGpBzPy94mfBoiXwynwv36UR8QHXj3S4HAGSRDPT73JvPQ2B5pS6ZFVGYpjvzgBRc6nbVmmBhyjzYHXFuA",
  "key27": "VJb15jc1eiSLYQcDik5CRxkjXhdoftZVF5qnHoTMobRyaNqo9MFxXiWiLJiaspAfA4afVTqrS1P6Q5NZnPoESp7",
  "key28": "5ouSUfBVYeve45D9ybjdfQBF9xvaeXkbNXSr2Aw8jPfBrA4vDyrkExA6dFfpcAGWFUTomU6eiEYKA1anGwNDhVpu",
  "key29": "281EnEZ2LiAQputm9f7s6HHpYkpP9XcLaN4TEU3ZVkRzYCPTo4wjUiBUWbWrZ7CqbTwTzVCtWvb21pSwFyF8RMsw",
  "key30": "2BBFK6DMK59TL3Ad7N7MUcGy6ypNd6AnV5nM8nAXA2fawowWyaArpB1PP4Q2guhAUw5q81zfjUcGqdvEtqbbMm6F",
  "key31": "khqCofM4yipk3vVC6hDbmSroGqau9o1ZYNNUK32Dyz9wTzzjqcpv1FZWS3x4rMVPkj7YAxhK4GBpbK3dks1wE4p",
  "key32": "5Ysr1A8ma5eTT6nyaHkKnouv4ZnEgHBpvK2AAEAm4S2V7gekK4VnkvCK2w6Sr3rxTm398HaT7oyHoTYyuXKYzCUG",
  "key33": "5rJ4tNG1MaiqnPR78J4bG5UJP5xjTdFYoPMZkbfizrTYwAML5wmH9U6LqoMhnVDCKmw9Yovhhv1jqdSBRPzu2JqX",
  "key34": "382vFpfXVxxvU7uo5o7QT7BkfbYR4RDsZVKLQsackeULEkvgwkTsz3XbQfvqF4jxZ6EWZhHFGysFK8LXkadACvLz",
  "key35": "5m12gWHLiwJDme61GpYEKj95vCmvd5D8KSm177Zqm3wri4TbKPu8hjjdvS8L47ADzywoWdJfJrURQkvKVQJPcLYg",
  "key36": "535vZxpm2BRaeG3emY6ygG9taScpegy2bbgZwQcs7RDcYHf5F19x5LwwVnMUKkonms7YvfDUzvr9YNg5qrA7D29b",
  "key37": "EVoxPrRpN2GweGEWrZ3ChLou3wRAyPaYu3wR7jd5jx6sFwmhtFFmRPbgsomZm7ViMZY5P11FCXoQngvAZxket6i",
  "key38": "2JpWrfbab1nj4AkmqhPbpjUjtzwVdEaDaEewSHfpwHcuGMZbx4RmarxxWHj9b3eCapaNE5As4eTcseHSRaRijwNu",
  "key39": "2jvsNQJ3VhqFSEkSfZGqhpvJH8TzyLmFRHHynud2csLvFrkS5Weusd4KvSrH8fU6zqrD81vfzEvnNpbSWMFYQsJD",
  "key40": "62H7auGyKoWpewm4S9h9UDLvP7uiQ1xFJctXhBfiGLd3PTW6PYDzs1BnkreyzpjUJRQAcr1mRH1E9CLNcg8jeixc"
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
