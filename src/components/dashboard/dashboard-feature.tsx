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
    "2HjxjFihDQotHycyu2Fqsiok3gJLnRPVWsibDwGKaJiak2TjaT5K4Xgfj3kHYcJvXuR5YQzDbMjsYacrKJmkZ9XN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X1j9JWJ83KRidoZnqAhosSGsu4ntkdbAWDGTJv1HQmnccsLzbKRxKQoDCqCZPna1oWD4GGKJYfde3K93fXViqmG",
  "key1": "3MddfoZ6b459HmZDBn9wuMtkhgxZF5435waETAcS2oASXzBxTq4qZjnB1B3tNQdMPmgZzF23djCV9LRtqnesNWS7",
  "key2": "4J8V8cW3KQ2Nkereodf2K4xJPdRXLiLUJFiVaJeoMuSsL4MYJWQ1smv9asLaadUo6CFiT4traFfzRTT3rJGxJ729",
  "key3": "43GmYhEDMGevaQ2srfq3PxYKkXeHuJX8T2SbvZwy8CEXKmPR6RwhexikusCW1iorEpbY8mpPyxqnNFrioPvmdmY",
  "key4": "4i929h6a7XJQv3NbLGtPpe2fwM9oNdUh9yT5cQM8JurFdBRxjnwRyNrxUKipdJ9qUQg9sz6BnNaQvExUgZgkb1JM",
  "key5": "3sCbaGd5C6UFSWxKF24ST5hACAbQ2Y5nxyxJh1UwU94BQXPwjx5DcGQYJ6yzvxFJgfGi2AePfRrV3sxuqL4fPgxq",
  "key6": "28SYJWZD2QJTHHF8d1VtxLV8STQb4mbs1kZnjHtCCW88VTA3wNgfHF7UE7WP318Hvinzof6f9NMWGuaqjYvoLJrw",
  "key7": "Rb5X2wZM4ohWSgxbBKtjXStMeJ899agB1Qmusoa9VYGeV7iBv9xH64upDSR6Jg6xceTQnQ2SNHHjB6yWCAE7vXM",
  "key8": "58j19gJEiQDNfTbaF2KzHCcmg1htLs57aWYCVdpqFmYcetnaaB4HQ3ryeitLtRnQSFY3RX6bVxqayaFmWFrd3R2J",
  "key9": "3mpFosjzR7mRLZWBRcxpAPKoL9n7Aa4aRLiYxkwL5u9zLxjSy9dgKRRN9nuupdbuQgfQ31EfPTGLPUq5Qfki1ehJ",
  "key10": "2L4eWBsEjVprjDmHU5tojBR589uDWYVV2P3Dv2DUTfsBaeozPXqVBh3kPdmFwv32LqYATVK3Nn4AimAvqzDoBUdM",
  "key11": "JvLV1kC6KKCVc8DWSthgDa5BrYSjmHweDhnDc6cAAstMnEDiUYDfc4nw2a7m7pDqFZvRfByVYncdAkDNZ814ZSU",
  "key12": "pcJHNikAduKpuTRiSrc5pZtMcHCKbT8KqQsNwQqjRKSxgaCLW98smG3WPbyiV2MQYCRebcdqGH35jNahjEhgiT2",
  "key13": "39ZBrJse8QfkArThBmvmD1NWSeykum9QLcfi2CTfBUFjDQVPFYFZ2UdSYSNWniEfMmxm4AfVvUcc2YzeTf71CnS7",
  "key14": "29xPTkULwABfow1Z2NxLYw82rNft1T7vsRoE26bSJhbh154p6F7aAhbm8p1gsiCjuENbJjYHDkWFXm3ADXZjTGFZ",
  "key15": "5CStpJzd5efPvCLYR7M9Xzp3xuYdp5m8ZfL3WeYBnpvtpUraMo8zhKCjtKJwDnMfKx2ri14HBLiAepx4fHDFSceo",
  "key16": "4XfHySCcmgj5JTexU3mtV6P3ZSQeNyy1ckvirbdTPpXepKAg9YvMyxrLxiuCa1nbyfQU9UWQVnWQhyLtUHbT5Wzf",
  "key17": "wKT4knn4DRAPMncMWrvJ3cTb31ZSaCBwzvXxYgenHEnS9cHsbnd29FyyCvA4d9GndFu6W78YDxRaAFvLPtzv4Ym",
  "key18": "2797TEMegPbDyshbXRE2UVdpDhm76ScPXM54dKe8esruTf9njBdMvdZcDcZEzuD6GsKPPHP64dDve9pfCmcMNaoR",
  "key19": "3iz5gptDs21cbFTB4yoq3Qpc8GKRFiYGRg84eqLQG3F4dJPTVYu6tv6FTLf2nUAFhyUJBZKr2hJtFE81nQ1bc2an",
  "key20": "3u1KBau4nxU2x3ySewiXXGWt7U4Kms1TxVdRGFzCfjZJQ5AordBURgxy5mvPPcqHkPyuFZiQT9tBypH83TpTN3NU",
  "key21": "2CTGNs6E2eCeb7J5KmxtVp3n2mELvYCDKRLmcupHmEm1adoooieBw5QrhfZDW1n1qgQGwemhnitVBTiiKvpcHdzU",
  "key22": "2xRqcyRXLpxz2xyZ3Cjk6uYT4AGZ5eTTvFmQw7tYQqrzN9yakKNBe2mtSkxGFrxgrzrzCKPKVmoBzPKR7VD5xMmJ",
  "key23": "5oU8u23yx7xFnWBGbrVdojYwHNwTdg6LpkH1EbSu9HSfYGUEaG8diEjkKMGsxFzKKU9AtFChHNYwQ49Jeey16SRH",
  "key24": "34SsGdPtph1fug3drcCo4dn9Y2h44ZLfeRL8TLzUo9sdSsTbTBJnkz1pBnnrUDp2Z67ncWSNTTmFVY86ArC85zFi",
  "key25": "4dZ3aPCstoWjUtd8KmGCCAaA7kxVKVeqLo4wVG8iFcEGtCidpeaS8NCLhGSpyQXQUsuU6iw7k2X9jyLPsPvtssiC",
  "key26": "5M6FKvGvutQ7hHzJzMsmBzSFnMpxMJ34fap4PUPRCRbvtGjwz9uN8yGMC8xE42ujNGpovffpomGFuhpGNUDzrVGw",
  "key27": "4Lq19LL2iF6DUjahJs8wXgKRdG6vHw5TRgqFCxsX8di3rszzLTWhct2cdyR7nPCf94cQArPu4HJaD3Hm8Etjauk3",
  "key28": "3pQBr3DYEZt6qQEVxo5jsAy2XJdGcqLG73nAE7bQuy9LoSNc5DphSbezeVXTVHnG6Mfm3AhSY9vAaLqMtbKaYNf9",
  "key29": "3WapWt8bbYtEBUv4oKjMS4T9tLXkGRQgkBAreTmRMFaikbZiG5XvvxueckaFhr9R2xNjUdTBRTGCdL5mUkegBXpc",
  "key30": "3JjNMQCHuXPDY6SBZVyZjg6Sgum5MqUBoC9dis48cg8XieTAGjwjCSSczM9CzLBuJDpFWbhVX5fLDbu1V4hWXGNB",
  "key31": "67foiJQ4H5UxF3ExBbW7CZ8xuWqdn14Aa3gYTFpaTCHARBLUXcYoCyrkUaGRZYsoC634gARDoHY6US2e3uqW5eWe",
  "key32": "3pEcUEA4hjnzn1jK42vq8u7sPorfkNZRdxU8riD6yoQPTSLGiJbH7JJSmhN1c1tEHFL6oJ4kCtNUg2DuTtoQzMHk",
  "key33": "dUfi2xx5Jbsb9t4W9DXbH9gpsKJWDjCKqF9o2AJwx4HaWVcFsAqYe5MoKyCMUZstKENVS4PJsa4f4KmpocJvct2",
  "key34": "31rhfJyfGhqHrW6TcTpSbCsdHXJwB78EgjA2HZqfXN8vj7CRMPhiCuGoxx3TK37pwVC82D3sG897UeZYfVLaPK53",
  "key35": "25Uy32vyk3M7UKy7LrhrwhmEhyXwFJWYcpjYg1hAEcuccpiVycJv8SJgc3rPwkxTEBWv2YGodgQ2YKt51x1bsdYQ",
  "key36": "4bP89YfEtJk1HdwyBdgg49D57ycagyvw3jitawsCmBeJjDNeiHTUosdkwE3faSZTtCrtTBVEMuT2bDJNZAnGxMiF",
  "key37": "3r9CBhxGP8NTU8h8AweVn9WrAKdZGEANhtkwaEWD4S7eNJqwNjFJBUyZpgJuuHQeDnq1wdM94HkxJNBrskk3YDYV",
  "key38": "eAPioH2pLWtMe13MjzHtFhUL1QHMRKU34cKHaQdow5fztLM1hVoZaQdaUedtuWzhncvW6DNSLaRaab2raZMcTPA",
  "key39": "T5GcuLmUJ7iBY8Ef5TQNvU3Lh3hSyq4GdCMAYFgaqCbFbCDW5EedoxffTE3i5xqTJ2NC5REvz5G3oZGVEZi2jhp",
  "key40": "jwAcUWbY7UogwmPuKi19rkzPHHkipqRfNj5rjS7291HtsXiHTPozdPogTqpEYA5Su34HdL2QuEW27gAFFZwWktV",
  "key41": "4tFWAi4EZmmVQwaEEnoHijwrctuznajrz6nPtzc1VPPh2qCMk6E3UxHVgenCr9kfH51dFpLwCN6i1jmosVrsH2Er",
  "key42": "4M3NMGW6qhTXYpzsWwieZdL8kvb9VbFECkF1aimoZ5oEgUEMiSmebmKy2FcnMdQWD7yyy5Z6aGGvFvW6dAo6G9HU"
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
