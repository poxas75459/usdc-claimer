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
    "4Un6DoyDpVBeKqCHnupZT7SL7EwWkGVNbGzcqHqr9oemg4Pq2bBM6Nx9BVUf99iN4KmKB3QFRAEEg9v8S525EGFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nFuGJUmHtRoes1afrHbEv58AcdasQyswZDVru5S1XhqyCpHut7nDeRiZJPRbmepSmjUMwu4VmrruMkxUFW6RqUr",
  "key1": "4xvMYCfCdnYudDjxDb2n8SAoPTDxrj6cnQB31umdwoBi3bnsya9XLnA7fzmpg6C8A6riJKxv8o1mjJMMgh1VZH8R",
  "key2": "3hRQEym7xgh7buMj8uDLBnNBnn8TaD7ZgBfKMX1snsBtE7DsPFAfKckaibg1gJ13YUgc1gTp6KtwuH36FKruVwnR",
  "key3": "PnrnUNeGt2i8yPJWhVDuk6bjpTkz5XCQxRHv4LfJbuYYP7QUNyJV61Lsqe4nrpkjZmUQXpF2C9E6LkVZC4gczrG",
  "key4": "vzAqfeFAtbN2fWKWcmQSfcqMEYakZLhQi7T6g1AksWppCb9bVh5W34Md5DUZ53DjPHmVb6W6RAAr2Mbiac6MDvN",
  "key5": "5euo7vMs5gsxj5cp3AQxHnTcrWTspt9aC9gxnoHBC3c6Ysxew2CgErArgD6F88KFUH39x2coxSQrfVRLfUSa9a85",
  "key6": "5pVGfmeRdQhC677391sU1rbYWfYccvshChcYpXACHgJLnhkahFvrdSjw9o5vV6hXzn9GJpZci3dHDeqYm3ZAgAWS",
  "key7": "5DrVbbbCCdEft1fPgnGJKQf4UC7zR6YPv5peUeLT737Tz7QqB5ox1k8LUZ4UZq22CqMPSQhSDoF1TfmdvKQF7QiG",
  "key8": "57QzqTNSuGy9X9GZJR11EueSNvCa4Tu64gfWy7oZYJK9ZSotDW6A5v2x8ofY93eDHtd426FGrNuXUBDfzWKCVuWh",
  "key9": "4WPqG3rfh59GcyPUBGX6QsS6bLf5wcV1mzBhqZgrsMrTZPnG2DXmYHL8JRgix8uW4AYjhjES8WC26Quc3npS6wkv",
  "key10": "3TGHDNFj911QCzpaGme9FHzvEsUAEzZZzbuMTXX6kNwUEvZ6GnVgUWz1SWN67FkMB9vgQ2eWbAHDK7RZVqJ1PYDy",
  "key11": "4e9z53d7C34gwN26NJvTjBH7rmuYqkxg2CRZxqJimieRxJ3cgtZ3ayZYanZXe4F1WYuYz4VWsXG26T3ZvfJ2uK2e",
  "key12": "2ELf15beqB2hsGVf5h7vk3gTSFhNHwjnTGvYZZuidgYKJht5iyScrV1b7xqZcesAfskcDJ98KmTLKQ2Qh8TW3EmS",
  "key13": "2iAtEYf1ge7Vk9xyz3MX6GzP2325m1Hfq7g7owVPkexbhDnnVHbA8Xd4wbHd4MofLd85H95CLR6qCXGGbPWDVvuM",
  "key14": "2QzTwwibANZz2TAUmKWq2tm7Y46wGTUUAgGMX5eeTeDRiFzcucmupKSBvYDbDT1J4pwwdApr2wd1w4j12yRj3gFF",
  "key15": "2gSHWdmYio3X43iCbrteC36ntAscb9wJ4Tjqc3fQ9GrZm4FgGteHU77PPKAndXLp4U9kjVTBa7R6GMtFD8mVAXZa",
  "key16": "423Wd1wiiR3b6WhfnQMGHCrpKpFvCK3MC7N4ECMXcEeuKYZqvnfyMMLBnQvz9F9KNe8EcAwh4k8ZZvJsQeYVVD2D",
  "key17": "5TTbNLCSGVhtiXB6tKJFi45M2JNXJjeEw8T7XduemaL3er5yNboHontKq8Nmh2tA18fTEhubFHDrtV6bP27qA6r5",
  "key18": "sEtp3cCZD5Wn5xkjauSHeFNJm3Dh9vJj6xmtSEuXucvmvw8t9ZDoWBKEkhkRoU3YbADYYsvnVWuVd4MRhYaQyYg",
  "key19": "529YEJFMUhXZ24XpvqSGoaqUvHEQ1j6U5vT7SJrU4G4TPMVoCVYWfbdk97iYxCdbMR6yhv8pirNmo7rdAJiQ2qL9",
  "key20": "3vWvjx1PTRJJfuug56Pbz96jxaUsfBRQcUPWkFFjeLNrftGRx79ojcXgpqwDoUZozztpEd74zJxWnywaTiXTzxWN",
  "key21": "mTFwehxztAK3mSEHeKVNLd6aG9mCPquakY6BdwCwmiP5ZpjVgyP2wnT9suQ5wDiDhSie7Ac3yjCHvcSvH68x7e1",
  "key22": "4W5ZzrHafVvHDxyF9dFYPtmhxRLA7yKHbBFZBcx8St2cLzWJW1V4PLFo8Mf3EnXGLUq7ncvzgLWcU3z1FykoTwZq",
  "key23": "kT5sQwjq9VoZjwPBVDPsi9SEpWTMH7rPxQ16uYqFWsawr97mTDPW27ysVBFEJ9vGXYEF4p6yEdvZhmJ5URAHskh",
  "key24": "4FxvRsm4Jp9nTa2shGCRRsNjB1gGArh2kZxKjRLiBHUbMXFGTUv5NtkpawziRjJx93ChojG9anar7tdHiBqkvrXK",
  "key25": "3LmxWhGgiBrao7pAUfXoVUeSmML1Fkivx5a8metgyEqsxzUxXAeRZ3QLdbeGvcvSHzHTp49NyxftrbTyFxeZDKKN",
  "key26": "dtX3EWHQ6762Bb89YgxGbjS6sRyjsoh1REWkTAzTLFRgEQ1JnuUSaiL5MsBxEqTC79C1on5zg9PWfJX4mM1SXfd",
  "key27": "nH2u47bAtsACKypzeUrNQy1J4sDz6HYZGEqsVtp4xg8iBux7j7UNho1DHvkZQqF2agYb5Y1mJfvcgcW4qWvNasN",
  "key28": "3Y4BLroSc2mT7cuq79Zjh2BKouzFqTf8mRBz1AQMJ7djPLnkdA8HVJXNqtfcyH1Y5reiqKMpQXNDd53V5hq1wujd",
  "key29": "2Sv8iWZE8RreAyVoKYXfoJ2eT3WA29uXApwfjnUGecVxYooLjDyquMiEUSs2euqJ1yb2S54JWXZVkn3kSvsa6nR4",
  "key30": "4jfrXQPUmLrVjMuRRBxaHcxqyBiNFhSHeVVC1q5YPdAvyLzAKLkHHQXeypie17ZWVGUqC7y8dvuybXeumgfSMRT8",
  "key31": "2HY7CScKRJZu7Ba7WXZypxjo2n3DCwNdQYSkbTZoFpA2x8gfT3iVDPN5A5Eax2EDLdJb4Uaej1u8qXR4EokxKVtN",
  "key32": "2sKQX7mrD2FJsTSWDKr4gGYMiTYe35teu1yzaRbsshSdB2rbp79cqhwLJZEAejy9efasgG7zF28cym9Wj2GfhZ86",
  "key33": "2mrtg5qtYUf5hQMmEcsNMvixj5oKH4XY7NrN8Kr4nfpdYoXyygEi95kTgrL1wLbn4zRYT1o5vHmq8LWNSf2xYKhA",
  "key34": "25But68Hm67ty5CNpZaTz7tmXLvaYW8T9HW6KL61cfBEmE3tfQsV4J4P5eATRf2kMPCv7eReq8Y7mbMiszcCb7rr",
  "key35": "2xuqw3L52tDadKMJDi1tYMH6fjFfC7kauMDUfPYvP5UeP94DvbjhG2qqFHXDZKNZ9RK1fyKcf3gUknp3qLUHtHxW",
  "key36": "YGBmxEWZWeXukYy5Ty37AMvYdpVxauBGPXt3jMxQsjiBadm9vu4VHt8vBZU3yf8P8cgPCGBHGywT1Fyr8BKFC1A",
  "key37": "FFEz8zoULXENDGkdgztMmcPSfmy5ak3VeiJTtXJPmcQ1ff5vmHjB2AGHMNsSdvoTMgqkczVyFos3DYcmYLZhh7F",
  "key38": "4cRh3jeAFo2Mf73KwyCfgPccMoec9Cc4Pmd7egurA9boEbTexQ4fhZXTvce7AbevLn8NVeEy6qSFvMi46ME8sEsd",
  "key39": "rSBCRX86kUUhA1i1C5i8N5qfuzBe2p2SVNJFqfQRoEMyfJUEca61h3X5qokAfw9XVgNQt2EeABmdDfsyuUwvfoX",
  "key40": "tQYWv46NsnyoVorhnVPqb5uARRgMXaUDHDw2veYJDQ2h5L5GCokRUrq7b2r28ip3qetkLtKZpYdWaQTLbnkpogZ",
  "key41": "34SKXuFZvCyAvL3dcuEfvJk3GuBmpxAzjLQd88xFnyi8iJsLWjofd3E7N3vAdzYGuUM8ibgvpPqEq7NRS6FcLzJP",
  "key42": "47vRyk2VJdUzxghkWQ46S9ecjw3iR3dTFE5X1c55iKHkXnq4RMhMALQ4eamEGMDvzXR9ECua5uRqoQQKCACyQko2",
  "key43": "rDxCqAvRmfikxeGiZKWd4z4dJE64sPXYsYJ2GWMSCRwyMfjqaEnZgNo3CLEaHm46Ccy5EH2vfMK167ykQFtd4iL",
  "key44": "2TgAc9PA6itB4FMvwaEt5RRGJkF86zhJSaeZsoHbC9KVU7TZE8PKxzJhzzrDGHH4eUNE3AqsFq21nTZ4B4jLUnX2",
  "key45": "sr7RuNQVV1CdqnfN55eQ8zvb18i5uA6hARjN3ozJyG9anFQUSSUPZcu7tYbLoEBRkZCvyVtycLTX2UvK1H2ssnN",
  "key46": "62tpu3XcGj5viNPas11K3R7pVPRw4ahL1CSEkbsdWbJPHx55jmGgjhwin87KeoT9EAhPnzayHyJLhX2QLB8UWE8t",
  "key47": "2zV3t1gavo7TkVjs92XdPVM623p9mvBGYEHrwAsJf7ZacuLDai78ysTwCSbx1KdX9MZPWNqbZ7FsPRgLqmaVnMie",
  "key48": "5eevMGcfxdLr6SGrSWYffYVsZjJs2H9gpRAPjE1eyTgMpcryoSGnq5av28atNwsfuWy2dhXSmxmfsgAdGc6B2Jgd",
  "key49": "9gRbwNyW2rqUqrg6qvH6jxYJAr8AkJF15p4wTtGtHZkjYYVgj28UVVGHUS28tY8UiHzK8H7xE78XoPmmDZpBwki"
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
