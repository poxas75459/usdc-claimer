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
    "JkkVgweb3K9G7yJd74d5quFXBpeGLBnBqwGgnMnAT1oXDew6CCrKwCibdJmhv5mt6arECUWWHXk8RsncPSuk1nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uec3rkJxorjaUDrWqvCdBSgLqnMNmy1ujZvS2oVqZGbQNjmY2yx1VnPEtnNtZHdphkV5UPVduz63iFXAk88pPWo",
  "key1": "4A4QanSuKxPsc52Ji2rz2r4p7fFu5nMf6b3BuwptWt99JoDQkhtU5nhLfCgqGshViG9iDPqoJhyLWoRJzsZZb9Lh",
  "key2": "3ty1Vgre8vBozv5GcWpVMPyy5yX7mWnzovXwnMhUiMiB1xwYTw6ZPD4QDUpzAYFmNrCK2YsjbaReYbBmLP8sMduT",
  "key3": "tUuGdSvZQDBvMEturkEDeUriTXPdfsPyaHrJ1hcTaGwQ62f2E8zcd8Q26bBt5pUR5pT6GQksBdXK9kJKSkeYx8m",
  "key4": "5prFSxQUDvHUbcCmVMdpPk36aifyzDqeJTrjpdkNRRVt3yigczbFU5XXY8UFdxudhzsVHe1J3J7ZhbszxsaY9vwT",
  "key5": "3HyCSCXaZWWRzxN2L9dCBrfRAGrm1G2fJNfrLckJ1h1cmf25ynxi4jBEuw8niX4nQDeyVZkqunvLu6P9PwQx8cdQ",
  "key6": "3Cn4nA2h8ZddvhP5HKShDM4SdyDXf82oRKTBxh4SAyEfWV1J2dyiBd1TBLJ1qSjdjYBcUto6ekPf1igQAiDYgNKv",
  "key7": "XPAk3DfQscmdQW33DdfbmkedCN6s2mW7ADA1PkoZuvtUtBGPheswHRgiLiqYggRnisXNK6E6UDCXiuDxNfKozgK",
  "key8": "3VpuX8vsSBn6ym7rSYkWJZ5kMi2zY1VDCitq7aePc7ur8BJp42KULjz4aRDCf7woftsAASHiQgUW6He3KkmDLna9",
  "key9": "qgok6gtzHqa6hX7SuJyt7bqkaxEA88PHQicGVwSFEdbJaUdqhcb96VSK8w1qYWjjPb5Y7HXECiVUpnU25UqUViN",
  "key10": "3WNGbc2bSgZm3PQiVxaiLKmKXEJq7E4T76qMKbC9xnrjXPFk8EFhFye3V97S51P9CkekrsxtuSRGPmRAP8SRiCEN",
  "key11": "U64FrhNWp7ENysZGjFXFaJeQcpdtKQezxgQaNuefHMo7PF68u4YMYiCADJshsy7VXRpLoo2ypYbkb2MYUinBVGs",
  "key12": "55a7wMmqabWACHzGM9rTvYEL7GhZCXUdW75yjjWuQTHuAmV9rnGQKvL2VEUdktxRGjYDTDVrrx3DypBnUsjFTgv3",
  "key13": "jSvuq6MGUd3rEUfuhdQXCxY6U9VLSCMNeYVYZaBeux4nMRgCvX19eRWE2NMEENKDeFTXAJKhwWwJKQCW8nx5uWE",
  "key14": "5fvFZyLmSCSrM6E4UzjGWoTjzyYYprQsirApaDAWtCrJpUyp388ZidAkcD5TVPtKYaef7hxbG5dH8m5DVj8dpN3S",
  "key15": "4LGVPTy2nuSvgZ4xugCShs7gzCKYpYgQmUYy8xdQa4thWNNYQLCxSCU7eQXvy4ktdLjTkesLvLhSJS2wD3cvEqae",
  "key16": "5VsM7oRziMinD9Pq4UKATJKFWHdSdB9p369pdQ8KrFfp9cn4DNw8gr7PkGpjxb4TWvL7Tf3mET3ZCU1gmW5WFq5Q",
  "key17": "3TwZHAyBauHeKV2wHPpF3aTuspYr7RHMUw2WcEE38WrW9w5HaCK4JKJTwENsihckSqmLL6bQoPmrSciLc737Chw",
  "key18": "2eb4Q3mGRKYFgcPr3argR1JhQ38eRzCZHDkxmvs4y3bEuQw2SUQD5nkFQrrUa4qpS43rjuaWCCM8MVALCQakgxJK",
  "key19": "4HwUR5hKVvNbuBfVPPfGdzLVGMkrmUkbbFZa649kZxWp2Y8DmqNpwgZrqGU8FhERTtDLH6oR6CrkUmVZ6NDuW3qW",
  "key20": "345ugypPYN4PFvghn4KEr1H5jV3Vyfvv7b65QYVFfGpUxQYiChUuB5D2WrEWyogjiSdqCFBsVyQZAjWx6ozPaU7y",
  "key21": "3PTseBXk4Qrk3AB5Fgy8qtoaWMSaQSp8GAqxAC76ydDMdUQpkdsNUqQkP9mNBVf9tGsdgW8sD1c7diUfNRVcvm6S",
  "key22": "5hQ8ZBMSSgMvAzNW4yrQtuD7R2WhoTr7hiEB1T2NjocnWopjw9W7M8rS3ycUeAnmVfbfbFzy4bZWbztBS5xGWDqb",
  "key23": "3J2mCfxouFT473Wst2Tm47cwWn8e4sLGKUz8rhtaFTTsUuQmfAsSnEx75c4K2Bf7bSiEwdHjTMwcQDkb76j7sd2Y",
  "key24": "4LwEHXgZAUWFVoozaTow4qk7BNbTdtt4RAYenmCFZacomH2Cq47xPH7xRRxi6YMYJk7coVGja28zcrdgqU7HGpJ8",
  "key25": "3SJoG7yduvnxCSefx8tjBL7twqJwkD8a7uZZhuKGnN52EGnY3nX3ZXab97r9Z9U1AjjesmD84PUqXGRpRDg1nVao",
  "key26": "3cazLgmYSPufEc55tNjovJQcQPr5QfaV8HUhQ8rnaur4QzyYRHQyQU3gWVzLRqAZNU296RkJRCY8B4Aex5CLX1ZM",
  "key27": "3k8L7Qt2VWhcNcfyXZPYMfK57pQVXUNAvhFLpFSC157A8e7xo5FY7iypgi65Bz9HRB9c8PFRBW6K3QV2kyMzzHhR",
  "key28": "6SJ1brgA1Tn5r7mtu4RxmpGBR8FrSpGb3oi6Y6Pc9JQwvRqqf4wYPhP9FQuQ787r35gQRfwxUQVLQ1auEEQuEgM",
  "key29": "28j5p5s7JXa2JMVVdAKzrYb3FLDdhVxzh8oYTKgA3duTKnNmdxrbvetq5J4J7oLe3AvSWebQYQXHgcDgH2PqWfK1",
  "key30": "4CnGWADPU4h8gHTVV64iN3qDmZcaVzAVhc37HWgFtREiVxLQWZJsGUmrhPVqttSC2DywmkYJjQf3cJfKDGc8auU6",
  "key31": "2QfJsaw8BbEUd1P8T9LvwEdmw7mN4KQ5zkZho7FpwfmTLoBqf7SDdwvBpGfTV7vk6Uto3LLqWFif4JiDjTnnFXV7",
  "key32": "2C4b9jNqWeb2rPKaKbQzDKC9xXeEgh8D9CWqtYXMu3BtNMcQGAyckk6VDZN9FwrayMe53HhgDioyJUygG6XGKczd",
  "key33": "2GUkrhVNk3bptqJGTF9ov6SfiWtz95tYL3oW4o2dCDXgpHH5A2n2T2masKotEqybaNyqwWutkGYgJmuNWu8VNdhv",
  "key34": "3CJ7iFoobkv6W1MrcL6G88fKk64MvV1ewmz3GvMcroC7Zz4Vs7bFckr1Q5yd6bVcGStgM1tqeWEGFzwPmCgsxjMP",
  "key35": "huZshZijLUrQCqooLnJJjMHNCjgTaCsqjuyy6FwTFFMCi1Lpd39bVBqRzEpZFx97PXMwz7dZ9y2vJsTz8JJt8k6",
  "key36": "2QKTgQ2QwFKdm2bHiB5WaWvcwBgTnir8Kd5nqtakYi6LRa9fP1JQhSXJ9Nhdvv5vujymQLSjDrXmaay8igsNr8Gy",
  "key37": "4yyaZRbydNXqPC5GHJxcSTtX7qEZGLP8LepjbbQNBjeZJRovfY9o1dbz5g1rEsExq3ZUp6JrxtXDSpfD3sv87zg6",
  "key38": "62bnUHWawykoag3pUMYvy6818Hqb8gJvovXWMFZgiET4hXjGDYrK9nnrQ7CdAKoMco8DwSnnQv8Ab6hKjMdqMpMf",
  "key39": "Z6KM3JZxMLS66Nw9XgZofSqdPnDqM21Uf2pQm43jWJxEJiYP8rCsap6CftKrEEawTjeVEK88zPUmmr5Nmj1Pzr6"
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
