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
    "3e9xVcDhf3wJHFKe65bdyVZ3uN3k6Y54GpFnM6RJnELs3bqt3RteLtEf1nGYucVHDMiAD9GkrzjNfBnnwvKjmQ1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BMHjtfjuFv151YYaxW3hH2tvvWX6Mi4hhn2vkkK4C74PwoL6g4uFoXaPdodjeMuV2pGMmNj7dpPJJKYveX1J1o1",
  "key1": "3Mx8rRWv4zKaEN2NeVJfmvCjzYwYYZucTHEBeCM1nAQHx2DS5Vg469y1fiwcDpAsoa59QCWC3D3KL1bHZtdHEWBg",
  "key2": "2ZXKGGV8e3pnf1pFWhZdNV9ZDK5ULWnVhMvBFgAUvNmj2Jhrg1532dk9hPgQBW59fQVqHRdUDco1PwigmHx88sUx",
  "key3": "2joiPPHMFPbs22AUs1XRUnUUrMpE5pRdZkr7SuDsfVWEY8AFuJnYzqEPtVydQSswRtoGtpJym1JXj8HUZtFAqcz7",
  "key4": "4Wr6pcS3ErKeNaWKcoevUJkc8mxkz5RVFgiUd99kbUbE92dsZxNUqvbV5Enjvr56V89JLi7MSL1Kk1DEhPoCBjhj",
  "key5": "2jaBGD5cTYchZ3BgrYEAaE8hGuiDRLbkMEtLea1JGBC4riwXW9yNNB6LPb8rzMCgoEkE9VpRnESU4usrUmmbXQMZ",
  "key6": "ZfXEG83hbsv7hUQMFAELMzogZF24wmB9W3ETgjmngqn9S63kBhoqgqD85Gjz7pGZBS8qmeu12ereJBeHjuZ4A59",
  "key7": "f1XENTVuRA7WVkjigzuPo9BCr9xVqCEqXDRgpE396s9DpYSaVTswAZJ4fyyzbfcd6uR29h3rC7iu4yp9rU72RZu",
  "key8": "y3iovt2sUsvqcrSAYatvj3g7mxB2Gjg8TnXZ64DRUvaFhHE3UYVRZPkz5YBZRS31cRqnpBFT5mfn2zRFK3cZsUh",
  "key9": "4KszUyEPjNzQF9icV9AWJngdYiXLsc9YcHjDpc7b3GcpncrVmy7UwYg2Cff8vTaQrAzeTLbJBnQHgB2ZyRqhcnqN",
  "key10": "bVumfm5sPXimGU3pcaoGpohokAomxhQBr6e4LjsciYDPX5ce6HUxak8ESLaEKqHtoe5hKpgGso8G8pBpSGb4RCB",
  "key11": "3V2DhArwM66K4yxa52wpU25gKR3hqMX5cscUrD8NYmbvUDCXYukvxMSy2nVeKFVV3gmp4vLS8tX7VtqEeC3nN5wp",
  "key12": "p6eJabELs539me5n93CeRG6vqrcmAdAUfWbhs7K9aPyjcm4SZVpChtcRWaiNPdFEerJRrgQtdvztSyza2KnU82g",
  "key13": "33oTyFZQkkHsHjkN6CuZDgKrtPuQtxrzLLeWEXHsR52jYc5XchMr48DkjQ3Wm1ENCRGjpcmJfA3Q1gAd94u6Sn4e",
  "key14": "2YVtVft59knxqtgaF7tvzCQJWoJduKKwJTkaxh3sFnzrpJhC3KVrnac6UBGUJPvdGRKJsUiiS2tVqaiAxQ42P1rK",
  "key15": "YU6vCFV7cVJRftQmX8MkhKmVU91DjgnZT1MaWSN7hWrAb2RQ2TCDCFp9ohnQMrC3GTxVgSMF2UFSkTmym1UuqbQ",
  "key16": "5JtLNtyfwiZRPbLxfTuU2Sd4vv9DvnMxpozPCjvF7QKhUo9ib1jQqEkNdaRDSaduR6dZqpwNBi9oG7L7dhaczCzM",
  "key17": "2pUMBSbicn9Up8tXJC7kYf7yX2oSNrYaPohUtvor5vmMXnJYG9Sy5ZWNgmFZPTTGefhbhCRYFNpvagm59cFS6R2m",
  "key18": "4RURY72Q6ThUuukcHTS3wksRPbWGjFX68dcdnQCMJGgieQQfY7RT7thQbvJMMRPhm7wyttyrteLSyR77qiodgtpR",
  "key19": "5ERFkkQts1xjffwuejHfRGWByUugNAaDauPBVfSfyZEmG13GL5gueigjwQKr9NnUbBiNxhiTTXHw5wH9NBnsPvBB",
  "key20": "512dHXxeQkP3KFFXSMaqyhek4Rssy26Dr8pdTqLraeeuvWey6ki4RURATNCtbmf2FF1gyYVi8js4L8RmKykVXnRz",
  "key21": "2aigGNawg1uqLyw7PFVRu6J7g8uH3buyo9m2o1VtCvoHfYWv2Qo1Tgfu7SbxEdhcTjXMH2FBsjW8HuJAq4MUNLq8",
  "key22": "4quw7qS3NiTyoHo5bwSw9veZoSZVUKnLovSyabc5iGeg9Ji2kbvv5NfhZR9gQbTf4wLk4oYXcboLXYERBEtFbWHG",
  "key23": "3aViFMy8iqV7qGqfxmHcnCtBJMnWt1ukuVpUmMFEre4fUMvJAoJCHzUb5rQK8uDziL4eGR2rPqmKkkUD9UakJCPM",
  "key24": "3dSbFjKs36XMr8wdkbJBZcL5btJjz16SKtPGn5yscqGwNtrcsB1aADWprwFfiGS2Xys1HABdsAKvhJSRtv9578sh",
  "key25": "NU85UgZg1GjBjNeeNMac4pN2dqDvjB9M8kfmfk8bemZs6XEHMpfwTou6KUhfrVRvRDonQpn698WNHdFvEE17o11",
  "key26": "4fVdpjWECaweHpff6H54sTF56QDF7cX5t56ArGa4CygmoBwst5LTM1Cvnqq1a1xU4iQBGujGL7QpAq2dmSxooR9e",
  "key27": "3pXtR5HzVJSQML39ZaY2NzPf7LfC7B5WrQFk7AaHvBWnuxAeMgBpYsFgmBedLXGYc8wKxN559kRs42vkAu4ZNifZ",
  "key28": "5YmDbiKv74jomhV61kQ7yaGj7bD5LrUHQCzqMuLhQ1uANqGg6G1MxxtTATBxLTnu47ikrGjq2V2c65YKWNaLk27p",
  "key29": "2voM6voFffcmdAsuQRZ7MwnzY5WeRmoQMtn3dbBZqAtKudZr8uH9dTUsqJGPY7qY6qqjwpirAZGU9KH2TugeGkcf",
  "key30": "3s5DUxdfGX2bTKv5GJbz3hBmEqGHjLpbASyRPdLyFuwTVn9WV8E55z529M4FvwhmxP8Huywv6rJCAWwymB4d3H9H",
  "key31": "4wADQiz4EjkxxydxiQzYqDdYDZ52AWQTN3fU4AV4qNmoTz7MVSR6jKvf3RThmd9KtXYasNZ2CUMSZHVnfa5awdGk",
  "key32": "dK2XVi2A4jrhMHBrvcaTgQdQBFYrSVH4AJqmRiyTiHzBEEEzoP5ZEdvnwqhLvm2ybvfb8fvF3WjNDo7Sv1mhFX4",
  "key33": "vX4CMuRFPJYf8FUKrZ5GXCRFrvVAn4XC5WJRXk2taJ6NxukpFCYtKUMSkcREYSTNdJ3Zo9ny1UuAURY9VPhnweW",
  "key34": "49JBisMNkPhEj4owk7CL36gX8AdAu6STiaHzvrUmQPG1c9qCVsAeHHBVXwz3rL8sqgvZAM9ME3Hx6euscZ7zKdNy",
  "key35": "46G17Hch5FfGoKpTPAQPWzZYU8wByR9Mic2etNxTLuWBa63EZFUtLQWYB9dk4dUww6B4Hk2h9Z7sSh5uYMAmpdnD",
  "key36": "bRwzqBdrSntQ4Z2ZoXkJANpEYAsX4EZBUqrkDXkzc5f4fEj28Jd7LbshgKi2bsR6oirgfebaMT8hfpJFnvywqsu",
  "key37": "2ahGn4gBGFAPzWdtfMGcyqZDxRu6BCgGyoZpykh67VHhDFY5bNZZSjVNQstmQYLVqchZc1S1Em2wqQx21LMTFtMS",
  "key38": "4urZAHyPyAnuQHnmeJPmT5WdotndFrgsYyhuCASeutySwJe5i9VvR8pgPLPwhyXU7baGtYc7vvK4eD1DvQ9dmsb8",
  "key39": "juNsBzKyfwQvx3x3zr412fNkWAW18xvp3HzMh9LWroQ2JAp7Xih8wYCYQQhEv2yvxhWibEjXrmNHSbsFppvZVRZ",
  "key40": "551TEsjqAGwxoG8mYjabGm3n2mcKABa25C4LAJkrJdpG8QuU5ZPpc5tqAyAFmw1yRNwyMxKCxwVCkRxsb65pShig",
  "key41": "4mkVvqdr5Xp9mM3XJgM6FMDu2rUYiL2WbYtkYycwNxJ4tK7ZwL4xM1WUSjbnsV1pRSzkehjg3S83GEhpNV5xra2U",
  "key42": "5rfEM4dPvPP9X59TSiMn1KUDckkcThJjcaqqzUgQsjS78hgkaCtGpRVqSV7GwAGMPxgxprivRN8WdBy2ctbpmkZ2",
  "key43": "5t611Xc5zmWdry5os1vgXde6QornZiz6VmrwmWiZBxQdJomNM14hWd3omhrHRHASogzWmEpPD3kFQUqAn11uzYTq",
  "key44": "23tAeQeZB2JMhGCQj9SUrYYHfQtvxoq3kTRkDCNwyi9JDj4sEVyX7twdYpDzXcAtoPcLPM2dMqyVhrEEYe7BpcHV",
  "key45": "427hYSJGujbk5ytuLzgzvAYhMFEXy2ToztvEp2AA7vc38g7Eq1ooLiTCtGKyS5kJeP9xP9SPhhoFgJeSMgkDaw83",
  "key46": "2u1LiWSbuFZwc2WEDi6ZYQs6dfwticGu66ESFBW6qSd331Qv7hr3sc7nsVBRqhQ41vWis8J1pLPUG8kKSZPUL9Sw"
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
