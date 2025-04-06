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
    "4F765yLVfmciLnyampbgZNMXv5yKDhGNornYSDECSkxoWAD79Udyrm1hdvMdhNtZxWMn5HPP8P683bWJXk3LAopc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZxG2f3ani594uxm3rdv4U9ScXuxvSpP7Q31szENdgekzWVkpthK2HZSdAJ8RM58sXUBnvK4d92pSLExBkLb6Suz",
  "key1": "oCmUJihhviRzmBmJT1NBYezDKt7hd8MUWNci1TLoRqacJyZJUSnRdWahDrdWNnAj2aFx1p8D5utKonGQaNVoH3T",
  "key2": "4HCryiX76czPVecZCKVeg4joE4gUTwdStHpdDjB2ViQkbNp4XRcnhir9URfMuUxYkmguJv74GNjcEH1WQuYzdjmN",
  "key3": "3ExdpQd7JWXmqwwKL6wxsUd9NyzTKvZj8zcV95Fezwfn1L8jPunWVkn91BXH9MSfmSAQ9MQkEeDheUYrQFRsAzE6",
  "key4": "2aUyP36iqc5oN5jF8tt5e8DB5L7SuZze7BvfmFettbwa4wjvc5SUPox2z1dgbrm4qbSNHbDvg7PjR1UNfs2RE436",
  "key5": "3EyrdVgd7wgUPsohanbykytqqGnQa8F7jJ9h2caFAsrZbXEMafiGw8MmngC3U5k8dw9vsB7tkLxryjMcVp3jgE3M",
  "key6": "5xVow2kRokQjPFoXDCDsy3gqp3Qk996a1xBft4DcxkEduN1su1jQZqymJ9aQht8Z21wK4HrvJ6rr99oQyBESDXN1",
  "key7": "5GbmErbNDsYJgmmPWyyY75cg1opC76XET8WhCo8P1Yzt3G2YvhmM53jKh9HYwvB9mng2qBZg86DdKBq3bNCyC6UD",
  "key8": "3hPNX393dmvSkz6hQPiBw6Shkq1KKJCdLbUUg3qyx2h73Fp3L757yLLQWPYZimNQB7nAkuR4mBXD4BS36BYCH88S",
  "key9": "3Y5xbm5jTvu3AHRxixjae1dL7R6zwdia3xFB5kmTkp1MaTuLctSY9SEL8WKA324tp3NuYQ435cC5W7tUKWNTMoBz",
  "key10": "6u794ZVcAyy5TNxm2M6hFQYHtHisMnPNe7XtpsXqXWeeQ2o569Hq27zRG1ukkTRhjVRaLQJfCamrGLcSTc1xFaZ",
  "key11": "4G3XNwJk8LSQUjL7Crpq4QwCRBibA5jkNZkFmrsHZcS8QUgRcvKP9PtiFDNobXrgMAJzjdAvHGMakSEj3Hj524Pe",
  "key12": "26SZZhQaESVSs6vaMU6opvgPXECTPK41npQa8choUULZoWzh3JTE9WVQD7Bsmw6kJFygeboigxNeo3FUEPe1CGvZ",
  "key13": "2daos18DdzhyRjbMTvrwnc5FMArK7JYihzgn7ihr2ok5HsFG59e7hYPaLZVMRCXt2x4HCwA3LcG3mjx9H6X6DEvP",
  "key14": "WzRMTuaM9NPN4BQGzf6htP33oxjYYmkiM5L8hfLXGT7SMsZ733BLhvrE4X7eyQp1C7CrBvSShmbtNwPUy5sc99Q",
  "key15": "ijSSAVVFhY7BjSrbmfpRUVbUgPTsASEaz955G7TPoEUgqmCtLEjfBzYy2bUEFYVAUPLcDExbH3iHwmFKSTpLXSx",
  "key16": "5aTQSEnnVXWFMwpPW59fpEG67m6sinLQiuiXashVaiiTWyvDVvQ6wAdHK6tsbhibpAMdPWFwKUP8JQ2qBLSPeWNa",
  "key17": "47sKw31CHLwR9xosEqN6tawv2ajmBqmtxSt49ieRvB9EisyV14Kg6C16WpFyMbQyz41xc9sXjwCtmuouXCxYyQnX",
  "key18": "Q3ugWDaN2gVrh6Sr1a6LuQ36ZdFKsE4aWd9gkXirXHj2vkhNp6g3bXgS8cHc49trmGdCd56mqPvPeMA2DtUD6TV",
  "key19": "24d2jhiVP6ii1q7FbgB51YqTtn8KHfvPzJtyCwbv1EPHRyyXQZtMLM7eQzSq6dGfAHkYFpz7mgtcH1TpMgpe7tKN",
  "key20": "2z8M5q3ceyatoUamE1g4Qv5XZct8Ne7kK6fKGigUYuDXjQ6DvKcCXcfpbyxcEJQLMGrBNnNwtyz2rMT8amecxSkn",
  "key21": "5GFVa6iQqP3SdoTcVe6uDCnfUxYs4M1w61sxnArf1Xm6MxshcSci3vXzHWeZyf7Abt2mmBptRw5AAFQQYXaJwySr",
  "key22": "2HcnefzXp7YAHoL4J6yhDddgSepaAATJrU9cbcGaKoscJLnhFH6am6KgZ1wWv2zKy4HpSUnzvYqnuUMywNNhsfzD",
  "key23": "4zYckjV8kbyvxkeRJ2gzTGVt5v6T5Lfh4RuZVSqk1dksKSnkm1xxRTokhyFxFmCBfhAe2YYWYUZEC5oHKN2ofgaj",
  "key24": "4RyHR5wwgD9JPMqsW2yyJnttuxgDA96TAMFX4ZT67JFTiKxSVkYDbtkA2aZrzt6twjPuZUQbRgmjbwxYdtsGQWNW",
  "key25": "4hbmt3wrrgREEvFp5Ldkn8zEdVMnNc7ydBRC1Fd2vNjbJ7vgqWNqMjUJyW2Hdu7UJiZ82y2bcutm8HmEZhdsJWBu",
  "key26": "2Qj1UrtgdDXjNhNsEabvpXEsmSKNXCdvBWJcBtD2fnrQWFWD8hJxs6R3h1nFSwMWvNsgahr9VeXYPi7iANAY47ut",
  "key27": "S6b5XXqgyRThowFGRyM3scEkxKyR2g8H4bwMjAWpfVqkJkRAGVdJWKaTiWwW9wRKZTDYGhMGPvajAkNcqgtyctA",
  "key28": "wAZnL6VS1Y4rJv8yJ5QoiTcvEjY3MquAHWHkRfUp481mRiieiGFYTwcbkbM75tB4hR5yzLrEzLAdBZaZDVcS98a",
  "key29": "2c9Ry2zWN9dyaeBsoQCYTd34p41rutJbidhDwjKDL8bjXNWzXp5fni5nXkBCa2bhJu9JjvnmHcczejYvEBdVtweJ",
  "key30": "2DUdXY9tQVVCu7cjrQpWu2QiMmK3gEMcLxb66KuwcqqryfcCfmBmurPnUsHdi44NuEhftrzZeZJg6jQztg5SW2Cz",
  "key31": "5Ed6hjHeCC7rCckcQrQH2Vr2fGz1Vmk5oFY2H3Sth3WEsWtKF9DXbrL3Jcgcag3SVeDTE7FAXVHoHJNB8Qv59sNE",
  "key32": "2Z9G5BrJEKSQ6HqM2uUcm2r2Sq2qYzoK3NV21C87tF9JT1aG5dNw94kAiQc54bqG26p7XUWF7UnBYv9y9G45c3vY",
  "key33": "3MafYLA2Las1SeVvnRFE5R5mik8JKRUz3u8vA9RqJAPUu6rFdWCW231dCdhnczqw13rtmcbYbu2KwzXWoG8uZ9F6",
  "key34": "5ndNoT717z1vBfDovaWiiRw3b2abZYkYwPB2eBGDwNT6AgC2k5csT1rjSDeGQtekZh718SHScYKV9HXt3jui8uKz"
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
