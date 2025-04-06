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
    "4PMAZUxVUj4gLkLLN9pgFRBeTMjdDQ7Me99xcwFcdxri1rDnwV3eWoNR8ELMDeesuGStZzR8WvjsSSXx6RUgi9BD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yiez7XpNvwzXdi2Scqhkx2LTYZYtDTUte223sD1gYS6B6a1wMfYNHVKmy6gtUtZmJhn44n75BY5muq82eYp5LmP",
  "key1": "3t5rNjGDsqsBDSnkbqT33qPKBFLQS8fNMQVKcER73pf8gyrjaEK9NGUykv7QPt9rVoase4gvmE3135jDnEs2bhrs",
  "key2": "2huZC54usERTAtqrnJa9JfkaaC2tHgGQUJPam3r1RAAbMg7Z4FBDEmALxuEBgHQrHfj9QKPdXAyt162zvq3dgMQw",
  "key3": "4B6WVC1oy7qabNX8TG28oFN4m9qKFkwAUxfDeNx5y6gbfDzM4Y4MfEWDnsJaSpGhCWozaZeBBuNucSZDu51a4mjd",
  "key4": "3uKs9jjXrWuPZPX12MC1hRWkAuTNaHWUCDBzbKgj1YHvVuoKrjwbjzxoKP1J53vm2T8uTuwimcev68qh5NYgUnoc",
  "key5": "4ZdHQE4w87PRyZDH1rmwiyJGG2e5Tsp9uUBApkFC9wk15QLGN5izHc6C3romVG5MEwWt7wPC6bGpZTXKB3qTGMVn",
  "key6": "4k5zLAqTYXowJ4TadC32C8btZZL4wkxiDSk5B4qcTUnFYjCKxxcZ2dej1DsZtMHzqY3vY4mjfYGWhV9RthGuxJDz",
  "key7": "8F4Z21L5EAG2kCeDSnRzPWBtBchsQAJdk8UVAmAYPc2s4y7AUxtDqzSmGxn4ErASk2M4JAuhDQ7Z2PxFhRQRVdt",
  "key8": "5P4xxQdHmc3MeszmLFP4pdrFMN8SkwBFabJc2NYqWPuLdrX2w2J4fhYzNJkXAvz1bZvPgmpgscipLfmhU8TfLAUZ",
  "key9": "K6JfK1jQqZCUeaRvT4Ajf24iK2thx15Xi8SCmqBQKgBhTc6iak7U1ZqKenD3LEAhD2EsJLQQS8sgwkTgYbGzi2F",
  "key10": "3QwzEujuvDLeBQ9DrX7hkCxhxvkQaU6op6Gk2GeLzhCpF7DsZfPwxbXKX9hoembNCCTx1tphc9b6ooKahPJkKSxs",
  "key11": "2cziY3C7EMwX8G4MUJMwwQcK8iNCxkLmPtEEtxhb2RFkS291Ke5YL5kh1hwN1bnvHrRADtTTrjmV7reixYJfo6J3",
  "key12": "5dhzWipiGnFazABdt7mU8z2TBhVd4eveK9AqfWJHzkstK8XJc14fNBSxtqRBafiiWAs2o3uJwxneejL1vFV43Hh",
  "key13": "cGnNVyRsRRcLA1ybdg7UMnFATHQCaFuD9Cq71yxNfGKeqA1Hnb3mmr6xfVLdU3DutMbktWz2xC93D5MAU8C89FU",
  "key14": "3arPTpQ8qVnJ5iFJy3psdcsdTwJvBtnnGLiymBimr72nKLsw3DaPawgXW4DizXosxV9BDPx8s42pcMAbw54bh7Jh",
  "key15": "4UgWcyYBMjH43b74BkX8V87Uw15KBZ3RDYxNXK8XyDPsUEsHDRArMqEUSkXZnWg9Vs4BkTpMpw7N3ZT4zw8scEut",
  "key16": "2k6aXqhUxQebnMnrBvPfMRmzJLrzntk3fcL1kb8qZLZ12ubFjkhfEdXqtSQVYfAndzdzaUrT4pWQoWG5zcbgeDs4",
  "key17": "2zzsGjhszcMvRrZvWFJWTEd2QjDTY484davs1bwttym5BA38dtGRKzcSU7kZHTmZMpEmscLG9tjPeA9STYhdUGq2",
  "key18": "2jjAytjndaTQSZAe4C63AVWZ2vhwywvXY8WWiMadYEq6M2zGk8mz1njf9Do9irLdbXko6V8sHgMwdhKpajDvBkgu",
  "key19": "5zmudBkYhPfno2cYEUbA93j29gWNBKzLQXAgLni1q5jNjx5zTj4FvkS7rhBKZ5kahHSAU9bjgZiLsCH8Qjc2GMUU",
  "key20": "2ybBzneQ6eGkXiTgyJQXsz66cEGD9Y7sZ6gZXrkzG8TYxoGmLP2N3iSMLNrSfrPpfZNMsXAogKiKH9skfsGL8LuR",
  "key21": "2CKpTtxFs6QGqiJ5s4a5qtySwCBEzqdJvsy6qR8JsK7ZXkMgAgHHom3g4nqH8T9VMP3RTKfiH14MSHFDY7umCygj",
  "key22": "2apWpu2MYVUxWkW7ErvBWxnps1Nygpir6GXQwCKyW9epfEfe1sQX64NobVj3EzgpXAVt7Sqo4mpBymi2UR7on22T",
  "key23": "24J183YyaCgWLwui4ivuQMKsrGWa5rmJrHSMk67ChcqEgoEeDDZK7rgmPa9cjzRaCiegbHCcw7j3hJvoMVQcefvN",
  "key24": "4xjeNFSxN57L8x6q9DAHekYeVMFd2WPb9VdAcQTYy3QgS3LsERaTtGanxhQPszjz5ZVXMiwT2Xqh369vkbTGYReW",
  "key25": "3dudc5MhvdrfJZFPAiuCgkkpKFfHkX1AjzagV9v8vYQKChw56JEdLdiT2J6APSH2K2Jb3qZeGP8xGnZ2m41tYTiQ",
  "key26": "4XFrqfLc8dSVGC2ciYPXaTCqPLf3sCk4KSC3oge9RboHF3AHHdDMXRDoNZSpFzotRuZZTFQ998S2fdcrMwEs4aLF",
  "key27": "4NVzPQa5zHNVPSLGQt77pHaiHKxyEpXnABF3zngjVpm5R8pKvAbrrQkCCiLFPUYg5ofjhzF7HJjpzzhsDzmzapZz",
  "key28": "3BUkLRau73gHq21m144GhFbtQJzqKsjuEiPzCruQJuXTbcuNdqyohG1C1uFA3XiTHGqhhLUZv9wzuVPFu3avLGWF",
  "key29": "3mG7R6YyfSc1TFofvRZA8fCvjTGikq6VsdzPoVXZhyXpiYbe3ABKYzmyw3kQUBf8b87WkotFijkQxqQbHJHg2E2K",
  "key30": "66AZJsbzJWyoPLhj7Y1e3oT6bNM4byHBTR7gHRBwVHGdaSLrBud71rQ6h9ArxZfQtxngtHo62U7Y8PSvgbepduS7",
  "key31": "UWeyyBkFn8JDW6gnfpRjb7n3Q6GsCNKTStai42G2s6iC96C4sTp9c5PAssqWxaa1zyr4itaEzfSyeKB6xGDKFb5",
  "key32": "5S5gxvM1Vc9JKp21tmAhd8cVwoo42YFyVPGLBaKfykNGAffg8DJYXS85At81VGRac549n7bYTxWf8TbG1mwVTDoo",
  "key33": "bdo3BvVv41rHLhgWcjZqdEG7cuLeEKqF5jAkkSeqZr71o2AkkJCzb8gefmB89W9eTqn5bhdxmmwWpBND1ZrATSz",
  "key34": "3y2sS56hPhqqaWuqN6ApWcxVNZYPTEzK3bhRjUt7eyN8JgkCp2NY9b8oYgxaEsyMfgD5kiKo8bTCxNVDAwtX3s3h",
  "key35": "GKeRiQyM18GqqYV5iMJbEhhH9gXbJ7nAJXZcTEjuH6PoSwuxKSaEBVRsv7nkGcT8BXcTY5y7LFKALncEgBtXpWR",
  "key36": "2mNR5FLnVzSn2Xb8LPh7616rskwogyKeqbbeb9TK7yXp7AophohD3EvhzH4MG6T9tg3ay4Ux2eybfNXs5dxMtdqb",
  "key37": "48ZZojq97it5XVQLdMjpyvsrxLndbwPKqoyi6HYQjAu7HWab1ojASAHbR4yC1uPzfwXnKUAfv47smKeAV7y79C4o",
  "key38": "4MddctjbTnvcmpFprqEh98TJ8MnfMoSDwwenGJhEUXN94ovYgytBwkVGrap3dueWPYVjAWYSRTcTVvoEr5g2J5zf",
  "key39": "4FPDWSYWkyruzSYuv6ZeCjDv8RkhmxTk56zA6x3dSv4KmdAHw6gaqaReBuiERJq9kiu7tqapZoA6Be4HErK8cuvD",
  "key40": "47oi7FNc57ZWmfG4euKw118uQrEvA3McAGG8QtN2CwxDCrKAdcooag1987jEQG69R12roA4Cmnd4S25yQFyBWY5g",
  "key41": "5iSAE6Fzyu3PcKMRQ2SwEn2GWZ3AaopwRct6wKZweYvqntmGYHDkE65sfkqSatmmPBbHBdAejQfuhbo65PD8ei1T"
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
