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
    "3wc3JWpV6AxroZSE9q84p3vKWXzAWJXeNtztYneUVuQHsxDexyADnzt7waDHepS6LBgdqiUiexGB9ogtwzMWPQCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4unRF1K3PH1AnPCeoTQVMaqWcLBVpm6vDXsZZTwnTzUQASfYkYUksuWFzVPpeiNc44BLp2ZQAYK6JjRUijftHVnA",
  "key1": "3hYDaicPsCWuwN78iRGKhTeW3pygSg8WLM3MxmJYmUNukn8ZYq1uwiCSkUg8xgkU7nETPohFJwwnk9WFnKXdew9M",
  "key2": "3MY4dC9iwZK9AA1wBZv5JL5LR8Pooks9PdkmgKbvmuHH5UJNbQRC4EPXs6QjyDn2hUsZSDsraLZktsCjfgbjXry9",
  "key3": "3LumLQDTAvpZxDxiep38bGjQNRogRpvveRKUxFjdux4U4Fbbfip6FN9NsG1cWm8yo7MPyUqzzfJP7q3V1FH3iWef",
  "key4": "2A3Y6mjSGJnpeua3PyusFUUK4B962Fjd8J93E5bHpuw1pxQjGBtSrXU5Zca95YVHSqCJU814pwHwaBP4k6H2nvVm",
  "key5": "5g8F6MNXdQov6CnkxjijAe87ZkrLPcVdEiwYgGk5VuvQRNLerPrnrAuKP2LvR1Dz7n19uMqKrq9LsrEDiEMa3KTb",
  "key6": "2rSwdZJmBpLxVQEW1pAvyTnirVnRD2KBpgrC4sK3Va4BvTHPS9VEhhfteXmVxRyFc3D1pbCjCJYm5m4x5cYAMS3v",
  "key7": "4jZFFJSRyJzV5KAxKP73okZDDSyqE34dM6hmgk3SVwa76D8cmqcDBJveo9DRrXBBkQKc6kz6ewZu4heRaDjGh5VG",
  "key8": "2KJQfo3ieVbsvvGkjcqDsYoBJPAEohUVja8m8eekXhoNcnLLyqXaFukSzzzX7rK7oySLpxNtAkKa4v3zWQ1rCs95",
  "key9": "3YyR8HaXEx19HNsD7yjEZz8tx6R355kAyb4gzTVkDfuM4kddgBWAKF3UkCDxmRY1G7FbQ1b1QhrEALV3cSqy2XQq",
  "key10": "5DxfM4BXTiMs4W1SQt9gU3LXUePPTyxicbBLYj7GUtgJhTJoFPuSKkibj8oXoqJkDDJ1fCPbWvAMbcbhYQA45qQL",
  "key11": "8yEesTZXD18Rz4zVMtRP9EfM7VzjCRBGELPnN9EqR26Y1sgLv2x2WAwod54kwWoKXkqWDRXgDEiH9w1qs1VH14T",
  "key12": "F5ZDeP19UZ3bCuQCKCoZvhzHoumCQRQeH4MZNyxQ9GEvQWy39iqBkca3x9hmeAv2fiGR2Qs7veP5Nzo5XbA4TDt",
  "key13": "23cTdbThMwbNbZxPZWhZwXBHg5HHYQciBF42oqZvUpHkLQ8NTzzBH2sNzkDhsQ7i4jejpwCmLVPTA5qRRjPLLwJG",
  "key14": "66ZrpJ5t4JgfGh5WKcVV7x2w8bfPwgiW4mHLq5n7J1UX4uouvnDTndb9gNkcissAubmuFwK6tG2Z9YbGa8WWsFsV",
  "key15": "3bqJ7zQGXuwskkSE2gharaYSfztPsmUY2ANN4xvB1KniY2TGYqJRasFeENvL7GiJKnnvTsw9SaE1zKZMmFFKQvbR",
  "key16": "2MyQzHQ3wX5BEqAfQiofRBwfjCDhj7rB242eXtdt6We74aXydiGgEK2FnAhWRZBznBpRa2AYypPHXUxbs4KzwQTx",
  "key17": "KTPwJ5mpYBv2SAU1oZxoiycvufzre7GdmKtUv3cJFNCtFoPjpyX1dKt1NHqkEMiL32UCYPgYn4iKbrBxNuZVnkM",
  "key18": "3x9hnTtNUbabUuHPgEGDBVvSLDcsc89T2MmAE8NQWTH83aCeQ92KZ2Rtcqp5D57YCTGAmKbUc72bD3ehYvB9a3Hh",
  "key19": "5J8EXyy6ZWr234BKJpnVHsbwSvdKt8Y1Qy9UUwzimKuYmpmY2169wNQsgiVDQktoW3hJo7zCVN7Cox4fGRKjc6z5",
  "key20": "t3BqV19mvMoNpAiuSaoj7QbbkyGNrLTtVQrxurrJMnWGtuXQbq2Kf17oTkDS5xbnD9owvAaM5Gzt9TNYbbpqJp4",
  "key21": "2MkoCLU4mcRXTsxgm9RuVBSq5ngoVaZsJ6wrz5rPJKYFwPifb5oPSp9ULXdnQQyDoQn3sVN8opLcj7zP8qBNBPgK",
  "key22": "ceo7m4zHEiHiHv9yrjULCJ34ZoysAo9c8nWUpdnzBEYsPNE3QsLqVY8zmWH4UQLim9ZccHoThkijJD2r9gKGLkk",
  "key23": "3HhEa2JdGaXiszWgTa7z5tJQZEzDQPT8HZ9h9ZukKf3k16X92Ux9Ky7Pfxm2tXme3YzGSXfMb8Ck9gJNptRanvPz",
  "key24": "3u1ByCqiR8FYDDM32N7TdYciDR5cxUJBzdbBuPTHGPLgjc24jPLBvfNB4v2iGspmBx1SLchQXoHgJvxcz3JvXXe5",
  "key25": "3xG2G8KQPdpm9fuwSxAhpSE7Lb6pVmr3MKHfbnF1r4WuhybXbSzK19xxuY1GxuCNujA5EZLjvnPLJrKcM1943QB9",
  "key26": "48d8eSKUhTUXTeaHavo3NRfm3c2xy6MkN84Q626sPPyf4zD8zCVymgKV1DznWoCjY49njtoPdWrxY59w4hzcfCBy",
  "key27": "2CFYa9196DHWxfRfMH9FvRADDh1eqf1btHXHrwi8oMn7KDeqb3P1RpttJh7zxtRSBpNRpdvM3Mrq1fr9aptjCeAf",
  "key28": "4ocoSaAzht4CQQ1n6CHQGHqPBscVYUEDZ2Av3ov2eyhe4wiQ8yBcuhLnJotqG8F1PZuK7DeQi46XXx4mJZovU14Q",
  "key29": "2TwBh5Pn3xqncycnWAaUhbhiWQGWeDu9w2UHKuchd8H6L4PkLMEY8sDPFPhJ1o6tLs2sFgWBQj7Qpbgk9YT2hme4",
  "key30": "2CJ6tgL6kaGLdiN6ggf2c9xsPw7vV57JisKhoiRDi9URuBSSkhVrsMh73WkXgvZHLBBBohXAgmXCZ9HiSv7trQZW",
  "key31": "5tbGS5bepbkmEdDMLXeawpQM6CcddQcQNXgLUkmxa1shrHgD8wKTQyiHLMcnzuNTrk6H2F3DsehBiuWwSAM3G22P",
  "key32": "Y6A7s4pBxN4JyHoZ7Yr4MtLg7sJTUqwTPsaYNtnXeRdu2YkutJvpwJsHNeZSwrX5dyM4Qqkc5Lpu3EnnyTUzGe9",
  "key33": "53dfGAU5aBfz5k1T597fenvt87FkYvWP8tB16GQAR47EBRU4aH5enZycJFpUUZrg8zxP842h8Y59NjbKbf85S5yS",
  "key34": "2x3QcfPvZho2oD4DTCHZxbXg2fDVCcUJ86fVcq9Csi3mA9ritXR9HTP2G45DC8TVNmEbTSzTmZy1wWbpNpMUpZA1",
  "key35": "sPcMbnJjhVXrpQLZ2y317j7Z2GYdQ4EB7HKW8bpvQaXVWTg2yLKcE6Zt4ukbqLRJRhZof79auwFsTyECo7kp2Km",
  "key36": "333LtjjWgduSjh3ViozSdFW3SYzu55jmFJVx7jPGgJF6UP2RkjdG6LbjwWYGzizvgGSAnHCx79YZxURYogBTHaKH",
  "key37": "35tNNizhSn7Hd3EdP5WH2qaUfSi7Ft3McgyM9dEbzKvT9T2MGPBtfbmbyCDP4xVsQmnwCE4Y5uw6z6cDaZwB2Rwz",
  "key38": "3fqHfa8eGn1kB1XnpEBJ1EjwfthXKbySZ2hP2867ZzgGPibSxpd2fdE9fKLm8yHPqD71VKRFBGU171m3ZDyAeKdP",
  "key39": "4qfhE7namz6NgKTR3M7kMZV8T5HFzm5zvCy7sXGFJ5kkKDE2B5k8iAaWx6a52ArVCXye74TCqdTa9ytzfN8Ru1UF",
  "key40": "3PtZ2aggUuHmutoc3dRX2sxfVttTJ4FnstAUxwEviNWzqYJamCkCweMDrwF4N8URRcE6gb4vVoWzrE7vuL3HSw37",
  "key41": "2Hdod2yDN6WH8dgG91RvggdXdkKd4M7vqc5mbwh2qb7Qbd5kmWgth1Vtb6HoWAPyyTMym4ZasEFg5V2YwYxFPVJo",
  "key42": "23wwnuWZT5pR2uoPDubByDUAoVPyf6g8KCiDFZ3awbHPPd9QaZnrdbJaUhVg9eMPyr816rcsBqafiFDgTE1TZ4Gf",
  "key43": "4WgEgKmSemQuKYVAVooQF2KQ6jZbcQkhoZr6xMZ22Zt1anEd2Ri3UJSEvfDKxn5sAVaZceHvadzR7fwvcQ5JuQga",
  "key44": "66PGVZZ5zXkNnL1DrH7XaCuBZ4RgMHBPVYwzYeK2nCSDPXKqTZhisADa4Tt5bkpQDsVYExRXjzRkSvYnhB5ZixN5",
  "key45": "4mtwXLmKXVkKAMxANPwproeF5xyDxGBMWGhzoHSEFi2xG4SyLQDqMsZjyH9skJHUdXs8X4fYSQVHHfUiPTMQxEWp",
  "key46": "3p4ZHtRhNKQiKXyHcXVKjq4GDFnhSFigCar7UFGghcVMmvj691UwxAbUSHp58YEhLX7SnM9FJgy6sSExrWdeaWgk"
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
