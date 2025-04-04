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
    "44vRB7BuU7fmV3RcYYrWn7cQHcT1367fuGXWCaFDaRhhg5jzBRz6c6sMWQf9nTzhVDpi2t8JkhVwHo8foFPFj75f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgi3cVhYFq2STW6Pb4yZo5KuydRPJfVgJtQbZFG8vZYUpC9JvxLcv5ZzH2VCsVupDx7xXrtR1DvGs2yHwiFbXZB",
  "key1": "4n2iE9goiYVG6KHFxYxQ3mtp8n4sXuXANvKRvWBLd6bbUn41vycmxW1AcW2ES3Y5gtdUAhnKmFPa3RxMaSYqSY8f",
  "key2": "piQMgfmbJAUzVuojVUs9n6H4HNYjWFLGAVpuhXgoGbnYE7dGsyjAViKnrB2QAqiskGC7Ub7JWzbfkacB53krxAt",
  "key3": "3rXULdVGv1s2hPHc12gKSmi8V79o1AdfLPyfE3CdQQbshGx5MrgW1R5bxYSDifX4D7Nxm6jUGDGXG42dKrpubDmy",
  "key4": "HcScQkhhtVD4QG751kUm3UHrsYPHPQiwUxFxMajAtzbnAKtDsJESUWSCHrSGvW65Bg37xygtQwvP3XAtMk2mJ2H",
  "key5": "Vhkq1QvXimjfuUuKK8cMjezV1UJYBKJvK3JvGFAyggUqiQToikuwZRpF5TWXotjp2sGTmYNJCVPbRxcg23kX1hG",
  "key6": "2PWVjBrQvnS5b53PtdrNh55Zu1Jx877mNiCpDt1JXcna8VCdxj2cNJ9mdupb1KuUdKfE4fLpDMNo7Bn7aEz4xt8o",
  "key7": "2dZpbPF8QHgfLLDkpPdeKsjQJK12mcetwvmrdPJBK7ehVa5MD3QFUmDpUv4uvwprtYhnHcrXTaexYDqxEMFtM5Um",
  "key8": "Y8Q6qnWsfoyes6abeMgQiNAjHR8KRCrBMJR7Wo5jsZgctFePa7s6zzgVxM2rk3W5CJSkFfDLpa4eHeXgVSv58pR",
  "key9": "5GHSTwiRC6L2ETV26kAwji1JvLauhmnP3MPzA5nQcEhfQavi5aew9FqB5jkednDc7yr8oF67TGMpFYTsYkKefctt",
  "key10": "YHj8cAgwmWhwMSkiEXdGNyY8tfL3dev2dSig2xt5ANedhjrH84nhrVsvYmywZ8KTFwSdhJfyNZrwv4Gnv7dTw3F",
  "key11": "63eBEJCWNnUSghLtUdLyJo3tqFVkAiV2t1nPeoyhs1We9pFAZyzR11e6n9kx6ccAHTZEgkpB5HFMH4cJ3jF5qp8Z",
  "key12": "5CafhN2BNRSxw1rNap9ptouiE1nquNmEnHpYgTDHzhiqGaUK5aeGTHAAz2JKy2Nkv3QQ2Ax1pyywbZTjULM6Hx1R",
  "key13": "3vAwKnLCwNw8Vc3512DGYxquKsYh9YE6Lz7dgSsWEfBG4gP9PS2vVqxN4Ls1b4nUS4TDeDcBvPJZ6Ha7YBs9BQrv",
  "key14": "2MFkdTyzwJjDUMkiM67K7z8r16khGuZoBjJeoWfqjhbvNN4vwRiLWrdaz3N3D8iEjt9f5vVZpaJCS2zjpJHnt84t",
  "key15": "676GVNrnGutEsuaP3h2e5hieYmwEzkbrsagrR8A3X5rPGAHaFXZFFtd8FPiyCTBimToNxf4WV9fMf5jLgzFwi3Xw",
  "key16": "4DJ7hL4obZECLDxjasWFputTD7TBZgrdJ6YkES4CzEeXow3c5HwX4Ka1kDtFZSB2qNnTTAwCyA7HupCB7W7jXRDq",
  "key17": "4kfX6uh4qcgA9Y25sdZgpc8dkqnfGPeyEQVuBRqo6A9pR3D7b2s2oZf46QBCREZongyGnzzbcfMQfZX63A9ospYn",
  "key18": "fp4x15VPKwZzYHfAnkBQyWjhkahfKaUFawSv6tijQz7K16VBBvVtMuNvDk3xa3VLuETNg6itqtSDr7BiccdGX6r",
  "key19": "3JgM6FC6iD4BpC1sBZQTDQoATf2CGvEtXAtL1PU63CAuXihxUeYKxAzmU5onk1uBeGnCmwNvQs8PyB7ZJxVL2cyn",
  "key20": "5YK5XHcPhLrtMSg3vEg1jVbavvCxho3F6dbXn5u6iSHqTTLH1v87evxgFSDWLBCAydLMMMEEif3C9Z3KSzgpjKfv",
  "key21": "67qdZsX6FopveMkk7uCnUYR3z9Qtd4tLPL9ckY5E5BRxkpcuqwx9ZCpHLtik8ZJMsDJ2KSrVsvc95rovjcGLvBAe",
  "key22": "61LSepF29CeT8naQEgnv6yk61MvCF4ytCu1RKwwqqHeUm91cDu1pjpmdLrAibY9rymQ1L9TPXWxMRgJk9cjNfS1t",
  "key23": "25rKZwYVBvBXY4McndFTFgqv1Z3pF8q1jW1kfzoBiBeWDqTBA1tzyX92mDx7pSqvLmAvw9KHhGRw3wCSg2j6sy7b",
  "key24": "3wnbqgWiGFi1drQ5Chn8D2geERwn91Lfgh82a26tJhKA8jm75wHfn5fa8KsfR9UdL4v8NVN8Jn1ui35fsmwu5dyj",
  "key25": "5R1x7d8Lis3tdYmudrAKcVHox2kLwKsB1L2MQyC9md31QXP6gvMs8q6BLpg9crudz1vHfpsQiTpkYkkyvvb2GujG",
  "key26": "4aLHeDM5yQT9DehmxazTPLB4jLeWU4a94Y6Z7vPhgTyqC5HopcVV9GNpzt7GnGYjwmHsgPupTpiS994vRuGw4eCr",
  "key27": "2XoMrk1oT1vWQfW6Cpyn1B6FPHGZzK2aZjgLoU4Fyu7bhzhwZ4gEf2Dbh7Zw3byt52q4dyngDU3pJhVfSNVyqjQf",
  "key28": "2NncWar432vFejxVeRiNVUFsARx4bGyStLdNa9pTpt2xVzUmTBMAHa6gEa6za2ofpWL457JCBPTTPvw2JvEjNZP3",
  "key29": "5wLMx9DdxGDGFBQQGa9bpRXYQPRGTskcWNZWBKycjrR9R6shqqhPD1FD6xZbqoboACiZvRvLkTHj2D7DKzHoLZuZ",
  "key30": "4coqAGhCcbXFm8KwmaiUthXMHX4FnFqTuiN8fE1e1HWa51XpCZkgqFftWShU1XpVMqGj55qZ8AtbSNZBiLX9i9ub",
  "key31": "4bexFyESCf9CzJi88WrKKo5tyjESRx5yv1d6rqPd3jVZYwxNkPoTFKaaZwTzwAZxdaTZSLgUGgL8UCaoqXZmveeW",
  "key32": "HLiiiwpy5DDi3BFkaRyT16BKezabGsgGsKY2bJkm8BScPWdrH1QiYY3jzDjxbnbLbb4Z8ootApRQncnNHNCXaYH",
  "key33": "3w5yKnNnQW4BNzsuPQ5UZoNoT8hiRE9RWM1TqG8A7VHX6EETPoZFYBoh8q2VZxKgVLWHtVVt96mjKp2KVHS16mHa",
  "key34": "wJuALMcNqMydbkSHfmcBw3vJMjxVrRBmwrmd2HPShXfFH7pWUeoMmmtRcDXoREY3krZ9uo7M8YXxhv8KtE75bEX",
  "key35": "4xt3KBWPC1LkzrRbCsfddeTUdPLsvCt2rjFnpzYTdskCdVWUoGGc3NKKUiwAwGfE7eCfThFvbdf6Vk97aMxBbdXs",
  "key36": "3UJxAGthmcTosqPV6hbpS679UP15pVr4hMibQoz2eSjh7kcMNuQ8hgW9h66Es7F27Y7zynro2AMjqSGRQBpatNio",
  "key37": "33kce88DyLWyYqCYvDgMzq6BQiQtKVDmhgRtdg7J7nTfKTGHnozz5NUGK3PfYiwTCUjzDJWsMFzBKHSV1Z3yHKtt",
  "key38": "4PUeziM53VBrTNsBj2VF4P13ait8aZ9UbgNnyH3juYhyq4AP2jsh7CLdPAW7piaJduwEdMeDu7aMFY8J3SLCt2aY",
  "key39": "44xhW8pJqyRu2yg2rqQrKh6bq7CDF68pvakifYJV1YxzhGTDDX32rgza8NzR1bfgKUfZ3Fpm8N2GMirsd3BK3CbD",
  "key40": "TRYQcP6HPkBq1UULFay9X7X5FGoB9d6UBxU5NUtBmfoLByM8tUEnEgT1Ce2S559BTW5qE56sYCEb7LazViucCn3",
  "key41": "51VJtS7EocsWUEsXZN6ohUkehUMtZ3EwzsQmcXA8MX2RY1yaTdLUbGVmLxpwM6NcsM9aqAW8U4ncst1h54hGGVy1",
  "key42": "HBsXrEK6X7PTYeFSHL7Uz9iitjFN8JiQFK5kbrUuk5PAYoRzhpdfhk877Y3FxKtqHXFtAApkKJto3EPgXQJngBM"
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
