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
    "54fYhfMqW2jVFFkWJfmtTUV9r8j4d6wj97Gw7b8vyWzeQC2WJugGHMfcUVoEecZiMqbkpV4cYWUWnWXjkD3dAmiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37xGJCaZSgBcnbkKULPSMnAW6dmWxJmaVSUn5xwuxveP2ZmbrubtmkJUCsx6cpTEcoPeNGxhHSnnSLZqPZUGC5HD",
  "key1": "5qsUfi3upqSZ2rav6ecAYAV99SE7rBbF3TMzESGWKBEszYPA8YjxtyRXntEwChT1hzckV3cXYeSNFkagXyoCRGmt",
  "key2": "15NZYskzXa4p9PNUjAWiDuEfSumP7tTdmpGNbqe6vtuk1TWzzFL8MPkD7ZmT59Ka6XKZMkM3ADPgvX9Ddn8EuqT",
  "key3": "5XGmCE355gKHau7oSkX7ucgAzekh3vFEhDRjheue7Qy6yGDWYrrWRZZEr2dk4afFxVJ8uJYj82EytAfq2vWpev1h",
  "key4": "UWzDbu4JoXbPMuiYhW9BD83UiLzT1CtgYrdnqjiF68zFzYPhj9CwZpRjPjgEMot85KqPMCQsViPix9G1ArKEeyB",
  "key5": "YbRKQFX2y5asKx9Ma3BN4XL58xx8WnKQLdoG6dhv5A73TamPTZMBtCKBT47J8xp9RzgdoLMm8T2uBzM697YviuN",
  "key6": "4NMjwneb6bdWecri24WydwCbYsjutRMoBxnETzUsidJxCwpdKgYEUDy1vuMGXmb5iSDm7Sr5gZtLcP94AhoFZGzx",
  "key7": "4xe1rvafq2BKoSCUV2QhkrLCgTwcAZM3KKuHkWREf7X4TmnebejVc7ah6CzuimsKuvfCqPH3ZHtuUJ51JqXNkfaH",
  "key8": "4MtpZpSqtR7NXLsNsCPuzYp8XH1BMhQFNe8MdputMTAHnZnMSUzpCLdggPLku1kauCFZqNqSyoC4WMpFiiutbzZK",
  "key9": "3fN6cfxv5EdEu2HguP8xxf9SE6W9zQ34gVmyHQi48y8ZfW9Pmj83tZfMzVocDjD78XQTLRTFw3zJ9D4AizbZ6btn",
  "key10": "i1uoqu3N7b6UQgEXNuwuoxoTBjA9E1k885BXcnMVMi4jsdhEHtBHNHQ984s4SKKsgefWaeNRk3pzdrtnS5jB2FF",
  "key11": "5d62FZMfobzinNzuQNtB9uoAJbLXurmyF72fL7WH4izUoHQGtxsi1zFZYdnGjppUXmEsmZS9JLqrpfgRvqyS3TSU",
  "key12": "3ttMEpDX5fDFybp1er3uCE2ep1u6Qq9XeypDBYwNjUh2G7wBcesjersTmBG66K3R93RpttfX2DX3CwMjVjouhVGx",
  "key13": "kM1x86EqzAY4r3yhWRZQV7ddXUQAbCRSALjCFdSvfT4UNdbtVvbHuFqchJtG4nprsWVKYW4AihP3tZR4A1Jm6Ug",
  "key14": "JMkoNMkhSW9vB9EPUb7e8kyfCrf4tZ6g1fWDg1dwNWQ514uDbGGaVBd2pzofyCKd4AZgjeaDq85BnQnrHTcYdRd",
  "key15": "4p3ELhgn9w9Gm816CkuopsQYJHneUFHUKatV3mFxiyXmhASGsygJoqmuWheVMD7mFx84YkzQUk4c7fdz5sT6yu46",
  "key16": "5a6Q6gtRQM4x95iA57AVB9dTGpVkQgr4Kr8n5n14kbNq3kjgH4zrLfwDxwusgcyvctk3f2NgsasXfSrVtU5ZsuuK",
  "key17": "5XqGrM61hmf9TiKNhRf1Nq5EB47NGnoe9UAWADWiteNfGrprr2SFru8UchjdPkZKgArM56hByLmWx2Xx6PqV2uQA",
  "key18": "4wQ9ppKqRZmzF61aPUjzsvA3Xenbw9ffmkn8Z6xDoJdA7WtY6aza6M5xF4XmXgR46uMgBNHoVJbjRee9cYS2Ronp",
  "key19": "5kpSuZoLBHjrK8vVdhaH6ED3AETTAiHLxXLePKpViHSHdLnVxFfQcgqLCf2N8YHpx6Y62jrg4sLDbpCK4dQuUUPS",
  "key20": "5qC52F1UPA5K8ygcCnCnxyMxtu76Xzx9asCkLEwKRdyZ34FFZsYFmfPFhSAVarw7fwSxuZmu2E76jkJ6ZZi5AEPF",
  "key21": "4SZv4VABsYm7jMkF6Yp2Q72YDsfHgJTZ6JAD2csvgZMtpB6VaeARSsbNEEa9YuwpE1pfTq1RjXG44V9o1vNE4GBt",
  "key22": "5FWcyS9phCzJ5G6mCrK241KR6mc4ByopfanyxGiYcQSVXYHbTf56X8o4CozwQNaL3UZ2AZDg15dU55sDCgh3v2FL",
  "key23": "4eytPB9MV42BekiqfWXGiaHuKWUxDJgVTdfKDvZEx4K8R2KmbNhyVuc9vW9k4dciwC8wuSQNeVQXbm8aThyrZdzj",
  "key24": "3mAz8oBT74jeSS6jbZdNnyZNRfkyyzJDGq3mcDZ4d9Fp4XPXiWeYqoEXa8SdyzY4FWcMA2ynHPaBnP5DHB4K2DhH",
  "key25": "2LNafVSuwN18LQNLf7qipKmj3Azm6AvKJd3KwzaR9kuCKcoPrLBdVyxCiR8Y7d1zi252htKefe7m6L6qZvR4X8e",
  "key26": "4QJUEwreBS2EB3Ms19qQDHLSJmgCkeLDCye97werdw13yvREcjymkB3vQ6RHHvPAcniTmZ65uXRSeotvs7oyEREr",
  "key27": "2bJo9fbN76GUkXje7yyC8kdBtt9dsRnXYPGt3WtVw43vgDvEQ9dtS24GTCB2BQ9hwwoVAbG4rzdEvydaF1buNJkv",
  "key28": "4QhLHEgjx3H13yDoKJyoiutYh8FsmfvZNbHZTKs8zvYzS9zvB5YMWRktnbjSUUmG1T1GWTt8HMEKm2XZd2eKVpZc",
  "key29": "2NKphTWH7xtSrgEszMmgHBjxxTSCWogShLkTVV8NhnWitCUM5UMezA89dJJP7rZHgMpyuPWNMtbDsVGA191tpgeX",
  "key30": "2x17Ds3cDn7JDUiyRfdc5SaSo1tKtM3Tv7zSvbtc8bWnXKSrb5ys8zcQSkPsCvn44arwdya4BBZT2T8rKRjPYAth",
  "key31": "46QPS7drjAFicUmnjFTgsjnfWYzwJnjzftsXo9FAx6AnuqyiFDyu1tS6dyq9jLFjaVXUnTe4j6MQaBji6k8tdiwE",
  "key32": "2T69i1xhDbbLRf9JAd1KhBPy7hFELMwMmbbC4CXGc42mXLkjRejiFWHqdpnZ18HuwLS527VdgmDFrtC67iuWSz7K",
  "key33": "pU6f3kDTjPvQoMxqk9Ezqfcwh55wk7AT4JgoHDGzNxyTuVBgxAQDyLYhim2jiWrpecCgzWUwYKBB3trGj3LCTiU",
  "key34": "4x5Wgirje8NF5xTM9pVrtgDaFTZAAdgFziTsJ8XPDXG2ZCZzjyrqyQjmfFV9gLeQCJJWbwJ63xBj7S2X9VwZCMV4",
  "key35": "2kNW6yVahKQPUHKmEGVoU1NacCxy8jMWPu5WmUdtameBz3VknbTEokfoBqfKhusThQEuSbVGvMg4jjoo7uusMx1z",
  "key36": "4a7X2D5PEZvungdYdFp5XPKbuVRvdEPoQber7tWUqic8WANEY249kZ2VgcSBfa6os9ddDv5pfQDB4N6t244jpFn3",
  "key37": "2q6ieFLvwYNZSWzknj1JUemH7KxNzjaxEMe3sZMs8unRP2yHXVfqXxtDkf9uNHiN1QLPbWbBrspkvATdpW6sYKSy",
  "key38": "2tqEk16MsTqosw9Mvcpii6CU1Rkepra8NNrkB3HJT6YNd2632uUAuNuvtBJm36cS3HtHRnpRo3F4KofMe3DPwP81",
  "key39": "54f2a4uJceEqNE6WTAvjpnrHqQchdE6Rn4nCDQnKNhp8bqyakx5uu5gXt7m5y5V2EAV5dUuq8U528RND4Jq8wV9u",
  "key40": "5fTSocBgtGnaLM6D6siZxTsbNG917w68aVgfJJYwMTs1phedJd98p9bZ8nziEAnA6cq78PMuM1Vc4kV9TVDBBqnE",
  "key41": "2rQn7yCje3nZokCV1R175pdAfBZf2QhQgUUy5WCngoQafNQYZ7CEQ64uMjPbigWmyXeKRTjobDsxJroDGC7sEc7h",
  "key42": "5yuPUyoQQS9qoLJwkQvgi2cyHwXRR1SEPNoo6kmGosFe3CNzoSziBJYXgQrngEqu1BaSZJGeXAB9UKF8VaMhWmMA"
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
