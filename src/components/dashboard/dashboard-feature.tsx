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
    "3xVJdQmZqQpyy3RUfGoCPBV3w7WWt4jVc4R6d2ogGo41NtofiRKfnaEVkUu6hVjjvKoZRB3ECXJmsEUqLd2tFWa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UWLo25mR42VgsgrwHpoM3n5UcoUU9JTotj7G7eixvWpysJefPtdJmYMUKSgf4jFneH2FGJNhyWyCUZaVHTbpeiP",
  "key1": "3a6oCUUTS7AnHauDm87KQPZnd3BjDyph9HsE8zoCXN5rnnupL3j9M5cmgrvNgPtm1KCsabE2FtiAVutimZD6xTxc",
  "key2": "YauZXMGvWBoAfTeGzYicmgLhZMSSrjNnRFb3Z4ZHkoSoD33cDzhrk4W4y5waUzwTP5quZadhL36KQxnZ8rhxUFc",
  "key3": "4X6Df9ebEZUZAhR9VtB1tm569b6paN2zzjDW9Jrs9JQ3qwNx67Su6XuuEsz5q1JbLzCP1qgDDPkDLeHj6CWCQmqB",
  "key4": "4jtaSXsFS6HWpFzjdWafgyovH2BSRmVmjw5PwDdmJSvn9uZwjQWVj9pDf9cTKSEsYaXrLonbUkhMNaEExLQkw9Mb",
  "key5": "5vvtvqRebUzQpFrcF2DS6Aqwtqcp8JJpaqjxswPBZCbPQ2cYyewSXqMA66VSnZUV4SEmbzcB3MXF4MKM2qS1FXCa",
  "key6": "2exKk2iq1uXaT7dgTzkH1iaToC1QUEPJZum3b7LvwvDxEapfz7cXYxpCoPS1XzhZq6P3hXZ8ySDFTnRyRHntTA1o",
  "key7": "VWHvcaJsDGJwaXRAtsjEjcrHYe4gMZmari3eHBpgGW8yCsFbXUxVX8J8GtUq7h9a4rvfdcXdYeTwwkEXtbX5nLv",
  "key8": "3bvTLZ1FrSEYXaFBaSmiwiticyicNCLP1vNcYEggthZBybiahwgY5BkyNaGduiEfGjeCA7cdxJMhoGw4WqTjfDjW",
  "key9": "2xfUHd6s23j2cKPrcX2khXfM2JcswPZpZSZ7xaUp7ZEtbSVEzEbthjJg8Rgc3GUDcd2yUhe7oNStyESsTaG8reDA",
  "key10": "2qjthWYT63s3g6h77eeayqLst75Bu976SVcmAogeczFDJMhNx6YpNFsGMjzfwj8sjF2Zx44dU34k9d4Fsd5pcjrv",
  "key11": "5xVNdjWfdXcLruaYWkxotXAyvRxoVJSa6EfoXyZY34zrJN6gPcUp94UzPTFQCuWcZtrShSmLF6JZmnggevjut71V",
  "key12": "4iXnq6CkopFNxc96fVK6rwjSrjwNjUNPfxMsatkUCfUGbs3NRtmMKGKPppxhGFF1fVd8nerbajmj9ASHwMRKQud",
  "key13": "cPFmJ6rcy2436ASTSs1EHBkwzh7F2BvpABgw5bMnYmJCS5x3TddyxrE1cShVqHxtYYD1TJpqPgX7ptvctycFzeV",
  "key14": "587GQoZeVvkmnFshN6v4paf7UbAiMjgjUsXp16ZYTzqgWKJWcm12nqQ2ybbhu5P1914bodH5GCM4dBUP7xKnVYSG",
  "key15": "5f6JF9qKz1EvhNN2rJT3xHbN3bVK4Wk8FuqPAQ24ut1zBxbresA7Hu8xPeuWdVhGGbnaYWX5vp1nq7BLVnF5jjrf",
  "key16": "tzfGMZDAqgChWXRzmPmixd75psMr2NTqNuigKW9eAD3a5FAFSmYGxyqkNGNA1GxixVM56iN86JHxk2Mn5xsYCjJ",
  "key17": "wVjnovLJbtwTSC2Cs3uRE7GVBMQSmnXm5J9By9Y2xbe1xB6MV3RwXwosC2aUZpcEwaJqrvgPfPHHmmWy3FbPxxW",
  "key18": "2e76qkp3DHJYhBgJpYSzmsga2SGGA6zX2cpajcRMr4Z1x5Sw9pfuuu76tyBwDjmb1wFWZiEWUNoc7iivdpC17Lfv",
  "key19": "vuUmCW4mD8CtJVyDNYXPwEasFrJmHVSfLhC7dVuGGRR4BNhdaMMasG2jotzYSHceVNjZi4wFxjHByz7bkY4FjRZ",
  "key20": "2EYrq9zx6uRro27ZH4ufQt9NRnzFTXi5zG1nB9B99St8FAVKrzqPSpvKbNs8SUoMMm5xbSzvgBbcSyxB6NQbF86Z",
  "key21": "4wgWxjzSsDQNszGrMUW6LtiiuPMom7z6SJfiLBSrUbSkgrScBg7Hx28kKvbd6n6nqFq33ZFxZ73P8dWeZJ3gGdQ2",
  "key22": "ePuLA1Qs5RJJ1hQidchEVgik5rCGQcaJPtSdfof6dCpnRjZ98yKATRZnKvrnnJpa4PKmPiHVbC5fMZJhDx9nB2v",
  "key23": "UdkrcjnN2VFVv9kTpupA2WEiBm7cxkMMzCn8W3EpyduGvY5wufCDxAHuvL6FGn2kiMVUxeR2g4zGkRBKet9y1ks",
  "key24": "QpLcYk2iJ7TioMA1vaB3Ehwd2Zx3bitfZJSgoHs5yt5jQVLctuJeMbqyJtTjgevSAftLM3bLANYUzCarg2oyKE4",
  "key25": "5P9hREQptdgBAvZweibSKFE5P4P9kdLeFFkoiCg6cotxrK6heCD49xTM9puKG7GHUVLXbE4NZntfHUBemoKkhHdh",
  "key26": "5M9taq2RHcaJXEhYGvCVZ6tFAKdFHoJxGrbEyEyDhTj2xYmK7UyRUKteS8fYbRb3eTQW5HeF1jLgTRp1scdhgos3",
  "key27": "5n6prjyUSSSAnTQGpeV4WgqSUsnew5wfNbz28Tfjx2VvgWnnhNTJvbNe2jetdCHvpGe6tp7MQUJyjmjQGX7NJXzV",
  "key28": "2FwbLxHTCb6VVdpLCbhPw4MUfMtXucozBp1jdqD1EnYrXMp4TpN3arQj7iTCaHTF5uWDYkpC5HPptWefWRP2pD3A",
  "key29": "4XkriPYn5ePFMh5muU6oTKu5sshQSJffYrbW8S6vUbzCPpyZXWMFhUKgVm6jU1qsAX5FEBadbAqWiaApMXAorsdr",
  "key30": "5B3yhzvdMQ558qW4Sp7rf5sb7X6z6R8SUqxxWgypQnagsMrMRdCMfgommcEKF9HZesmSUXbsYb8qhTiNkeekqmjG",
  "key31": "3o6Qgt1W1aHrzQ7sJXaNydiDo7zH25hGwLkcrmUysuj3CUs1ffMCK1HHvnXdBPeYmFbSQPCJvWKE1DQCZoU8kpkt",
  "key32": "2e7hDpLMqrtQ4tYiuBVtieCL5FqXPtWmd4RDigg5eENs7RCUXGkEcUiHh8bZWTf58Tm6bAP9vpYgpXzJmbpJJpUM",
  "key33": "oK7PDvhpqJCkYTZDZ6tvghBq8srvM22CUgYB19M4n6RRT6bCpmDDFSJk4Y6pjsJDEiRT6aCnwxcYwMnKBs13v1N",
  "key34": "54qq4qR6u7Dp9FQtwCtttE4Kq1dnCW25vVPpq8kPqBwtfS8bcrEUJbDmHC1apLEQrtE5ib2811xX7TQwaQjmwwYY",
  "key35": "5kSm3vBmR6EijJaMbeYAHHC18VVe4o9wasaphhn9jxJpqj3cyGywLv1z3KRojp2LNvPCa9Eyh24JT4RGU9ayEUZb",
  "key36": "hZDoQTLh2hPK33G47en6dqFBPrPzLuRhsQthbWkoVPL8dv487EcUjaSofdi1koDmq3UXVoP7jrwvRE5MiPSC75V",
  "key37": "278dUWqsHt4P57H6g6iCp1KuvqaMo2dbhLThkNBXqRk96EFjS1kbQ7z83mtMUBToH6Rx9mpXfdS6EEVX45NfaPoi",
  "key38": "5TahRihjd8myETX1t5jQrApfUhMRi2fbGATzqfiZAD7HM3mcMRvT7xaQ5ddpegy3UdVBhsxcxmWy9F49hjxV3inX",
  "key39": "2iMUCFVm2ocCnKML51iyGE74u5gez6wWTMyHZJSQNSnSPgThqUmmfQtaE2XDLsQwrbYnBAFQM2so6a2bo4ktUL4K",
  "key40": "4nfXffZUCb5TaX5H9jeR19freF7VX36nmMBhN3Dg8U7JKp2dsEnMTZwraHD4JDhkzeznoABeDmvHAsX6USCn5WLa",
  "key41": "2WMTFjCWQt21MJP2NwHUCe2ojajfdiWbYRhbthkSz5S4hZR9oGs48gbW8C8wK4XZT3uu1Ukv9fHj8YsXsYeRqBsH"
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
