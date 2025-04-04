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
    "2F7DtqMFaGQ2CjR1mtoERjhauQSMMxARaKH7ZPpZwmybKgMarm7KE5hi2pPSvRiUsNg1v5A5pKcMhYgbt6Rh2PwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xEGtw7wa9M8bJZwAR2agt4rGyhWVRYHT1YpC1JNBBqaE9dQChoY76Z19sRc8ixpPipUWvZfXHdowq3xzVrfH1F6",
  "key1": "4K8bJ2Vo8nGVe29RMEXJWdB8YfcyMSkEJQohR3RCJuJq8wjCyRBWnJz142JV7iHTFbsoXYjFZWk2Xu6fF8bZRbfi",
  "key2": "RkbykRsVE7A2kLFdc32jtZV2UCRnr2x9qXrneYsEvJHcRA1ip5VKHmmYjDte9ktL3fE7Hf489WAMw9HZH7snNJY",
  "key3": "5eiFVvVi6SPXTvnZ688zSXhtzLrhRTNhxaNHbZf8w9FyNwDMHDUuHbcoWvWAxPnPGXHUemZdk4rvccQWfJSjZJV5",
  "key4": "4CLJaj8LttttiBLJFScXFZp5BytMzpEGLdJR6nt9WMBUdxP9Ji4z111Lt6w4kRgfW4156UcywcCZyyfBBvVyt6ZW",
  "key5": "2Tcz63WS1RsrEV3X8TQ3ctuuRttr1C4aEyh6oVeYgBFJYperSJfYCZqHMbZGbate6DELHDvZ95aMdRPDT7CKZtp5",
  "key6": "3TAMRMFUyJU941nSVwLAYT9vs4Pu2s7McoKg2JDoP4ow4egMU5JiRv5yqwh9XTFxyT2SFVQYEGDN5ztikfgciYem",
  "key7": "5JToRR5pVQuVCyGG8P3vejSaZxfkcSGuesiQ69ZjRNBTBqsAfkGboNdMD2g5vxMnHMnYZEtErGDLEpCMe9N9o7FY",
  "key8": "2jnHFPQrb3wQMLCVT5Mj3CD9WMBotLBzFTX914NQazGRy5Q22XsddLEVGKa8vNoifWm3FFQaZ5b229oRGPFup6se",
  "key9": "3CJLmJnsH6iitu8oYRNtq1PqQRk4qHRE4wMoBQrX1AutJ6drobMzJuR1T6iC34BxHQ5dS6w6FA6xx5ifFWdXuRJC",
  "key10": "R3aVKZ36Ft8yRn6XBM2eB3VreAhx37VCGbgY2bxkapuSvptQoudvphUjNRcqiDjXyPNFFxjivPjDd23oEY7SGDk",
  "key11": "2mT2bmNvKNvuAMBv8nbJNZdCBwRAgAqYLZWC97McB7BNwWneGRnPs9mJ5NbHtzq6RY7DcbBy4LYx5Jg8hwEpPv58",
  "key12": "3ByJj7DsY4U4jZJupbVFX8UJarU92AR8htbjvzmvuu1qwuxNn17XXQ4LfiqYWJWA3wWGxzJQsWYnz8okvQyr4yaR",
  "key13": "51QCq1bcsr26UFD7Ci37rwJ3vAbLNwFeNYTQMPVmg8iArGqUqCN7kUSuZSY8u3X6bbHizRASSeTjtDABqVbWW1NV",
  "key14": "4uzu6aGjkW6Hc4KAE5K2RrgsYJKQ6TKucnXWYHKCQA5JooZhaLx6ndAdqLrv9sC8KpWBBK4sMVxUjyCoqYTSKKo8",
  "key15": "5wzEH84Ky1km192atpNZtgofsAqZGNZRhkgfGVEenNLnMZnVcNPZWDJDsDZmtcqwDNsDtZBJoj5N6rSewZnrS4ij",
  "key16": "4YKdeW9MNBpAdwcHCZoXQJWPHP8DdQorEeNkvF5syD9DscdBiWwGPcx3d3ttfGsLGNdnULKN2MbBJEGuQTCDD35B",
  "key17": "XkB9BV5xZgvZkxs1sotQTeFySZLQrUoiqqr1ieqnASNT1Si2GsxEfXZ9GDE5h3AoRzFDJKiF7rVMDy84hvkFmPw",
  "key18": "4TTrYZouy1erLdvDvxfTV9YH4FB4C1JtekHJv5FoESqBa5BZipDzSEffiyDiE8FGZwnxAGL42Vn8dHU5LDfuJwNW",
  "key19": "2SDYFSRe8H2ZPsnFVVVuuXwrfYAcZCA1eJp7vFh795wAbtAwNSCJYhbq7WxsXwjDkFqZAiEM4TvAkeAQC8195Lxt",
  "key20": "2nbPc77CNdNGppz7PrpitFKMNvf7rgv5d2QREzBVSkWeGgcUmtUcwVrYkrMMUBP5vKLs3ZzK1QpyGmVzJCZ7dCvZ",
  "key21": "5oogfv8zkdo8N9gCw8NibTh583cWNAZin2Q5vfRkprrj2D4cvDpf8yn7AcfRfPAcFxhH32HMiCrwyZM2AGpDEdTE",
  "key22": "4AwGPfK57Wfm4hzFPxfxrVB979tnaEvFmDqpw5W4uusKSGHZpW51PdNjKQJzXbaWskEpNE4XWPRBmHBsRKSC6Bdw",
  "key23": "3dbBdZLnwRALttwwHesFhHNoGdBC7ncxMx2JQXmRaSwbCs556XUYqePAUpMCrYveZEzgAQF1g5YKSYyA9WLWKRxD",
  "key24": "2TtMSZ9PxV5jVRB3X3MwfP1SQTbZDxYo3PdraexwBWsqjQ8W5dPnMdm6PvVzYzHYBb2Fv65YMLBauWfqQn1dWWd4",
  "key25": "4QQ2Xjeg2Z8QGJSSgf64VitkD8UyJYtfAgi1LRHoMDgfnayTpRddi57Gk4upNhzXkeibVVpBiE9tbSMkqG6vXih3",
  "key26": "5iFD1WwgyaEx9Wg7HXjgAcvUMCkkjZt3mtaYPs5RtSRsuGtQuH3RrFbW6VPpmFCLFMmyEEGxrWVUvCjbzpQyMS5a",
  "key27": "64632aJPnF6jgRLj16u3Pt9QUcyZ4Fd3BsF62t5aPcsvaperpjTPN6pqQWKdQeZxL7FE9JV6kA2TAjWPdHopTLwd",
  "key28": "3viSYjW2kxrvNSWwJ3AZNJSeUcQhhVB5ioVGjReZya9QJjAFPkAGpRo9vbgMPptKUHLLw7VEPoFoa5EzWT2npvky",
  "key29": "2kCZzVph4dd6geg9jVyyN9mBKVRcNo4Qh9G5KKSECU3cfiQeXCsvQKizNjF2AYBr6RMinAAhENe9Ah2UHx8yBDUn",
  "key30": "38FeGGDbkUxANYbNCfbwmRkW1Z3qmb4prfTrCepBdAt8L2sotBaGXjsbF7k6DgG2LVJjpmwQVD8AHvq4fAVW1aRC",
  "key31": "cxdwiE3h4M17qYopKZDLKiHQAqHpPbcsXKWKpyJLWgbRv5cJCd9vqRUXbbYTAgBjFT91ZcsUH2hgDBEhtzS9mFf",
  "key32": "mS7H6RPjFKeNcLWnbQhbtNjeczdYyMx57HjgjMsMKum78VA94MredaC7xybfZrXr2uBa5qwxnoKtmzhUhr8sUxu",
  "key33": "3VEkJbaDnD44LS1kimrZuScHFFFym2PKq1PnEPhhdYKnzC9RQUoqh1sYAAr5ZMfZtx3yGucZijQqa4tX4LhBL1qT",
  "key34": "52hyTXG6gbZDG6GrTXZNUsRXHjA7u5LRbrV9g4ZZYJg8Fvdvh8VG3QNPWBGLRiTv9bGZqTsDzXJ5mDnPjh7fSomp",
  "key35": "3c5fnq699bq2asm4WNratx9tt1hNyD5Up8kfqBLLvqE8y7cWhTbm87zdFvb16T9Wt545eLVR6bwPB49SCdeWaomC",
  "key36": "2YFX8o3aWnR8ad5maHfEUZD5kpsMYt2r588vDyuxiHmup6n63K5aBSHCTkgSiJYczSSoKhniG9wsGEwRwVfjMmwB",
  "key37": "ubEyFhLgC2bQNwzwqPCaqJNKojLb1QS47wcyupSRxMK64SqchYfmjQtunBtVbvSQiCWSjmKR2sDCHmaNKLgGSgH",
  "key38": "5ZNn1vT69y5cGqBZjmQCSanTDk14VqcocZ4dvCX7oG7d4QE8Q6PncZoWDyiNjEkx1FtELVRuTt77HkLVz2wXVf59"
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
