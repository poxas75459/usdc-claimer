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
    "2nKu6NM2ykz2qFekRJ7oquxA5sYDdpFBAunYL7GjwY2RbfSVV9HeE2V7uwfEb3Pndd13DYnTvzhzxpC7zcq2MPkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RavSoCNhSeZ6eTQuhm7vJqMtkBGkidVr4cYN5tW4b71y5ysqymN2CbNxfYeo2QSAfEbf4fLSZm48VgTWmZpuXno",
  "key1": "x5juLmsx5VywEPPvCASArtBLsHTuhDy331fqKKdPMQqe2QvRmFyNhDYoKe9ML5DBd2JAU1c1KcwGF1SwfbwU7Vk",
  "key2": "5YYWEJrb2YNKgKpyqRde1baoKfe89wHEjicpojp9ck1yEBTC56kyoKBPdaC94zboQiToWodXrf1xhDgz8JNqUD2F",
  "key3": "5ixy3rqf3qBQMyoMieP8XfYSXw5EhUfyex6SAuwoY383sTXbHziwkJw88nT8FMxEX1uvER8Btfgi3ExSwRgBrj3s",
  "key4": "4w84Q4BNbpGFzXvMF8qMD4ssBgmDoMfpwibxbU2ZrkRRUYpKNPTobF1JPCSZ3H659zF4k1Rg3QpAAyRCKWnSqRbo",
  "key5": "2TPdF5SCfspDW7RUemzipRw6gae7yuUES8u4U3is56MgnfXWxB68LvK8wdVzohJtGjZkzdh4mrrRsrabyuonnjmo",
  "key6": "44icqSyV7pcmoD11AGxxqM7Woxfoqpqi69k4cCcWdQeL8mhGh9WvV7Kktj8pE1FZjvtnj2f1AKzpRXofu42VepAj",
  "key7": "4xcUGFcm7q1BNvUYoHMzfZY9zPBW3SFx1fF4HHLdTGHSjSXdEnYpzGQ9QUbWVht4AJzwzMfAhoBVoDE8nqoNiVoZ",
  "key8": "53cMNvJfNqW97T7yHcATC4u9LfWtu8Sweg2mFBp7wo678uxDa6fhMAHyLopJHZ9DLAsg68K8ou15Wzdw4NtnWdXk",
  "key9": "3NX4FQWUZtZMcDy2ToKZ5jEyTZzbwkmLt1MaPc2gfvgkq8N4V7KSwRTKVvvm7ygbDCDHjtu6HTFAgDJtmmjFRLK2",
  "key10": "3BAbA24HenLMsFweL4m3Y8BLE3cpvVYtZ82rVm63P937dJeMnsSoCguSH8NoU8JyxCfw8bcRL9rx8jDt4BnnfSQY",
  "key11": "51rrnFfg8SAiRUGdMzDW8VHEzLv1LqRVp4etWDFDxEc6xjsFPz4xMb7xJ1VF5xPXhbx5kokeh7cmuAxLrAybovpn",
  "key12": "MeLZg8ydmiVFqiTiB3FzAbxJAP6VBTGu5FB4uZDwt5uvp6STiNuhtz1zEDG8X6DzmVQMARw3BNkyxXTxVg3MuYL",
  "key13": "5tt818kYEVa5tzZ68Pq5BoqqvwA3unejeFCyKcsGYkkKxdMHwa1ycdn1594yxBZYggHqgKe1YJDgS8K6JHbdu69C",
  "key14": "s8GZRwbw4cT2BKj333kyTf8hDaWJUmPGcwzcrjeAUvZLc9UUK3sw7yESgSZ5fBGDgBRL12ZWFCkLQ242RhRse6K",
  "key15": "5ZuyoSXzM4TeSRVdtdZmb29q5VFNc3V3UuoUvY1j9FWsMHtyAAWFXwKRctDynUz9Dcy2GWfCNaRWXdGoUHRgcu28",
  "key16": "2F3NEiXAoWZ3xAPakC1p4Vdb5P3BBB6WfmDAb7H4Baf1H58F1ww1ymKFkYheT91SoE69jZxLQ4qMD9Y37XZw4N6F",
  "key17": "4r41eW3FWSnpwnjCk5L52PycfFdmLyQyqodfag2UdKNFff8XxgbhJ3u1aY7c8rTLD2JzicmdnggTW7CnmUsWr5Wu",
  "key18": "c1B7rTpbmGsXAkxGRSgBvD4dxdQzKXKCWS1VXKk1AyLni1D7LmGNPNJAUEwCtTXrJkPhNef1ks3E1VSo3TGHafB",
  "key19": "4rzQk9kSFg1cK1hWGz2pHcHLw35WTeuhEH2GUhDa9KMrpqcz7oMpjcRiFKLbd1EniU3CgM4wPf5FxSiXaz8ufN3P",
  "key20": "3YPD94gEkbnRpnwT5eNMLZTBdWV8vB2CD5bNx9nWEmhPdqbYccXZRGEXJzRtWv2L5k82ebianh5HzCsLuiJKYNNb",
  "key21": "2dUWLHWUpGN3TypQBp2AXQq8MEN9EAT3Gd9u3DAF8zUedd26YzqH6NxqEnAJFk9QdjqkDyMT8ckPA1mzZ211XSSw",
  "key22": "4zsSLnprmxTxtzaJdkhUebevZmsjs6BRGxdyHij2Yzampwq4c9FYBf7LrxDURYe47MzjCCyqWTAsyeN4vhiyhHg5",
  "key23": "3Sn51dsD4nJaKa7FBDQWgseSF5dLbYC5wZhkx2QBi6ZBnmDcunJuYACnu1hkytfLHNBn5SyhVVPvZNjAT2abdFk5",
  "key24": "vr6btAyW2tXUh8VLJEniVXFcPNB8bqZeXfsUqqGVvvBS2hAX42FjwspDXb9BrdCs5AwgmqvZm3peuBULMScBtYJ",
  "key25": "4orsKzxrQbtA4edRMajxXEUekuumGHmsJTjxtdSW356UMSnndY5KkYH7FTAuTrHXP8Gr7xKhL7wNV4uy5oGVJnVy",
  "key26": "3wgYFTiUm3RLfUx7UbeENV8T1JtgCtud69sf9gvsS6QEmH34b8PFQ7gYJtCrZocEVAHM5q4K1E1JNxesNSySPzqi",
  "key27": "5tmmHciswoZmPzXJECBeLP9bqqN8dYb5MB58UuK7Mk6eaCR3Qm5Ez76SdytkVHaTByTeS1VARUxAJWYksdoAUkun",
  "key28": "618ctmKQjy2qVKr1pYunWmDiqjr4gURiSmttz5zKsnUiEGhNGepPT8VwuSLogVryjrkEvsvxMmeX24VRMf5ehtA",
  "key29": "5ZMFqxEy2LAHoCq9RJXeGpupDgnfBWqdFj6uE5T6bb1cYEzHXth8NsAR1afYhSjXbCBFfvY1yCnNKsWi5mw8oSL2",
  "key30": "4Tds3QMLKDRyTyrTSxC9bW434Z2YbXAso1GY7MsYNWDAFpNm39mhBLTjAkbnFteXqdD83R4uVoJabzCxyG8r9Wtm",
  "key31": "5ZzmaAKKYmtynjg53MrYdfqf1oPMLWFQy4v4kUaPkLvPnZz5yZaiGTRhxVTmE8mjm4iWuwAk6PadjxxJV6V8x6aN",
  "key32": "37zrmtosJggoYhtBfzpbwEBRMKt9ADpK5H6VmBySrsEDk26bcAYMQuz7LEQFREVoujaLcSKs6ZJ58ekVWhh7ty3v",
  "key33": "3FLxo2eDrkkjisqfw38c4qnfodZPqWhYhT4yBJEYGSPYNGRLdf7SeY5CUjgWyz1BqQffXitQdiHUJxVBoQbJ7tgq",
  "key34": "2kajbq4EpYtRYF3wtUN79FeGmGS918t8s8tBfVDSw2X63YS9q3bfrHoBuAvP3MAJkNXMzKjqLhkHrQa2k7ckab14",
  "key35": "3YFX1sFRzmiT4h56pPWPHpYap6VSgQAXq8coKtapFj5Sd9fNbtbKUqNpJzEz2k17mYdzSWLseq7xRs2aqLkLPjdg",
  "key36": "45CNZcnTiZDYiutrDysBqDZhq1vKq3cT3gKwKV5HpeabM5Aag9u6qfXAZqT6XmZVcpXQPAztk63SsjJyWHKbVnaM",
  "key37": "RApPyUqs3poHznwKQTtJNCf2tVnoocvgkdtNSvcqSswyBRFDv66LcPdCH82UZ3gbkmwEH3SkD1dmEJYL6BtZXBc"
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
