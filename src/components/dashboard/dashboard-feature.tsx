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
    "65hXTbfJoA8TANBE1V82R1YCbnoWyxWrcxwKJcjGwzXpEasXETfFo8woaL1q8csYyCWECHib551Gni6sGWy9qSXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6q8o41iqVpfC3bjjKPtjnbW2GRkagp6bAnN6PvDtUjAYfnC1ZdCSDMh94YDKbfZYkdLDYYWuxEziRFs3gpDxdQ",
  "key1": "HBDKpYHTcvwVRc6CnMuhvxxJLavaiReuqMPfWxYFyWgWVRDtZXvudjvQRMs7712UaZC4xxFCMGDoaFo4qiyi8TQ",
  "key2": "QwnE4SXS2iAog7q8DvUqqiHnd26VVDTX52Cboi2vbWjws4Ax8QuMDpo46G3tkKi7L5QQe8Bmv3jQ58q5mrCSpC2",
  "key3": "28X4mqeyZgGfqX9AV1roxidJ6TRntv97LTcu99pAG8SpKDrqxZftTLTgADuLfa7MHVS1hhj81FqCPi68KgjUvYqe",
  "key4": "5Kye5MfHtX1GVE4LnHD14RteWrdfCKwUFLqnjRY633mTCNvaNeKvuSH71prZiX7hHcftADZhXjHEGeLA7bTiWcRm",
  "key5": "2PQni9LQNbLTEYbJ135W5tQF5scT5eTXxD6fWTgu175QutZiJ58kuBCoW6FSQBSp1PQakCXuRKLwmr4AemHuhNws",
  "key6": "638VAjLesvXjTXYw56Ydgi6DDYa26wYgF1AqF5VMSjNZEN4avZevkf6pD2FstXb7xggW1mdCWr73eHHKSQ5nrTCa",
  "key7": "63AshkBrxo9PhYg2Tfofncso4gEsNJLMWnvuc4BCTaJukyH9sP99rTdhk563ZHWXe3bkQzYzPPvpNEZBVDgwu3KD",
  "key8": "4t1AFyD3z2Mnm6H5LLekYKyioXceRQ1cwT2jRRvvHUNAJaD4ja9j2GBbAEUdNiee9XtwvGvuvnkWpCgm3pGYHREF",
  "key9": "bGeSh5rdLcYWGvjN4ZtzgDkKogwC3LHKqbmExXxuW7bL8qfVLt7rbSfRb4wSReVXjTK9YfCF1ErYUSEMa5YXCug",
  "key10": "4JvvqcHRZzmrp5qwHG3xrdSVvGHrcG57yg9vfhyiPVLPv7wqZyj1DhnY3USBPznXEzJbAMMvA6GmAfQyWVrqqkHE",
  "key11": "5YCAezHEP7uoPAfSayq9xUuvPBqv6f8BKsJcvmLS8ZoCV7Mcne1WCu89oLQQymNxJHKYT6krVh1tceMmYau6AEDa",
  "key12": "2FXXBWtkRDLDuEn7PS4U4aBoPTpRjv7PzgneZPUyqZvzWG49Uz74qLNBeP1sNfUJdWdox3RboHBR1EEnt8mimKyT",
  "key13": "3vYmXECZao34rkg58DgzTAjsASpFj31SLGKVSoskodYYZjHGWjRUnWczPrEGdAW14CS127sXQfnkkRTFUBvM45Tj",
  "key14": "3QWxMDTppQBiFU7pbtGJQMbZjWWcwa9v9zkYiuTE9isVzrDJdgYhurWhx9dyP4UZCJUpDPZD99TkDVrUxiEGYeRF",
  "key15": "4JorWJJUEhnFqW86YK46yNJmJzJFUApNK7LkeAUhZRdSypMiQM5BhFqmXSsu4CZVZKbSJWa3MxnqYe1s7UAfoTZ9",
  "key16": "4EBbQMxZj62PWftpiTYeFaSoM1GxbhUqiQHtJSX3ft4MpWDvcDGejJtPvctkyBvoNQY4eWtRGNeGCBiikKrGt6gG",
  "key17": "3A5DeXid4t96LcuUV9aMYYwa1pbqSDmvybMisJwDJcoAbAppodeuacAvkXJCPYESTMmpmxEQve5waYzbtzasN95o",
  "key18": "125fVukYPU53J6EyTNcTVPTatDHjSheLdS4cipGRbZNMEEomyiNCaemoHenwRM2GSaA2od1nMa7bVArEveWEf7dD",
  "key19": "4ck5TvnCmhc1bafEDWyjn8EoXcTGF6kyjKsHdjtczEB26dPhgdZNzKEVDdAF2X5GA7R9u6anAZ2dZVRJLTmcBEHe",
  "key20": "4cUBEo5ieA2aud54KxQCNiKfSmbL9cU3m74ZmnY2RhosRcPvGSSBYk4uYj1M2mahmoSYL7as3wwxKT5gPaztoBsV",
  "key21": "2VheAeBYWaC7z8QovTGNwsstZK3tV7ESKfSYDB6BZYtWr81tyDZ8XY4XqbzqxVRWi1JwFERy98PthbGLWNTSo2QQ",
  "key22": "5YxcUJ4NscQ6E9ikSyAepEoXyBVAJ2kyUTVn4REtfdE5VXXqynaMEfsRwfFTffCbo6wxg8kT3gtzb8WCBW4U4v8m",
  "key23": "peAvi22ZU3wL1sGwxSMKbqMEGrVNkarfza7GKYAAKW7KXnz7ZcND6ZeEytcpPc2pt61fF4KaSoJPnVr1aztYrTF",
  "key24": "3t3P9BrQKbvZYgFCpdTnvdzRYhLLprKwDGC1xd28d4XaJqaKtfswzJWUH3CVHARWyvje8WvPJLpn6kdanWDdAk34",
  "key25": "5WRxmgajZh66KJciMTrooZ5uYGXiGwczYZnfcKJo5PboDWzND5maeGu7Xaw1H95dHMLkNzVssTnPPB8YMovMv64s",
  "key26": "RgWCx1ng27NAtFjXuJKxxNxqNqS7qRopUT8heyJ9icx6qCvU9greihnS5t5GimpDFuKSHbofopZ3QWXx5czaMGG",
  "key27": "3QoTuPesqgr6mCVMeY7dpew9pivR4uFmNKmaEUfeFFREbToWcJBAavhbRTabKBCZWxGjga5djMLcgCnGqoYSBVmN",
  "key28": "2rxkRhyfNC2g73iKFn6f5UmGSKggjjyeYs9wJt1fuVkn59aCg8TbxC7jGx7w7PZ3Xt5c1bRwXE3WX6e9rWF4rrq4",
  "key29": "P8GXu9mdPkTGKFNveyM2tHVKehVaJh73Cb6VZRDBfK64ewpCaMNv8y9kcqFV2hsp8cfASYpW5mcbJhcnoejV7Ga",
  "key30": "2gtKAjd3wuiGupi9CyYTT3cKA4x1UBmVAobmJgbfbbcgFmezD1sk6X2Z6p5c5Rqf3E29jgNKS4s7MEPC2a8FqEbb",
  "key31": "5FBQa775uHReb3QdfAQeoZxoCvbCCxzT94biTciRQbXvgzyM9Js3C97FMysQNUbtGBD9SN3pFoh6bb99dVxBcSmH",
  "key32": "QMy2dpFFuNMKoNzjRfyNSXV85tdL5yywhHeCpqxxxpC8tvUCoazvuaBjDMX7DtvX7HhHVLAdtSDqqsbdLCasc3Q",
  "key33": "2NtTzvuvRhbyufLV4CZj1gXDJV4u4RCGpC5mmRfg1qw7c2Y6mTx93GhnDBYVo9p3MA7X2nsQLCbsvkhKG9FEfcox",
  "key34": "5w57M88WGAbz45UxpkCN9aNSsXLWpxoNVrUh12gnzVATSqMLCrdu75yxwBuYa5aJSpxQy6tRCL9m7dyPL8tERKcY",
  "key35": "25DbsmeZmLgFhHVkLLZAguXEe81aRrAP1gK8EzDj75CBNR7xx9RoSw4wJf3z3y5oevCEG1rzPCj8SJXcYTYD5w4F",
  "key36": "2Y85mywUmDTVX5Xe8mNa249Wnnayn98cWrWkzCprSejgHCxgE7nzfoxwRkaPu9qqGpiR6GyBCSQ7pRdxe2MyNPUf",
  "key37": "2cvBqiAXn6GxVEa6gBUZJ1tHCBjiFpSfEsFBjY6yAYYmJyzcksABJMCLsfYej7Yz22aURcwVUg28p3EhQVL12vrQ",
  "key38": "2LgHeJiqGL9tvdxASTVCSesC2vAt8sRLBxHHo95ULnS2nm8Utrvwy9aBe9ekQEU34qE59tMgKtyBnqyRSq1N7rVM",
  "key39": "ty1knqG9A7oXu1EeYLZt8wH4HRGGKp7UkrkF44Y9ZKtUDaACeQe1gPLuhZ2qdsak2YivAqLbDpqj6HzrkWd8MDt",
  "key40": "3xXk4V92fgU9X7zmTUUr6954PEstkxQ16a6TEFy1qBPXfHdXjNYb4WJURTmJTF1dx6zgXXnmYQ15W6PGgwpsski3",
  "key41": "57AebirQzgEwLWZSAhNaWhQXXWxBJoSWBYi1PNH4uwB8JJHkvQBfHhGm99d17E25cm71UwUqAX9vEWFkQhegfu85",
  "key42": "55x44GacriCaaTW95UJXs7chwhS79AHStyFj1tVorxwTqh2mB5xm8ZtLo92vUg9W5P4Fj1TxGQJsfWtgAJsmx9gq",
  "key43": "47vK5N99VrFeWeUUoXwnh6RkvZG7J2cgPUp8mJ1FNuomnp7EVWs68KyVVycr2K1odsAMSo1nm8nqHaDczC3KQrwQ",
  "key44": "5oVfxBMwSoQ2WfeNHsZB4BKK6erFLDwEhq8FphYckPmF7GC1XuArD74EhNqW5DvZ6od5YaWCTXDzy4k4RR96Rv59",
  "key45": "5TqoMgr6GpqhggwJZzSGrWhtx5siBTUBKGBdC6qrYfp9PoAzNfyZ9r7a3YiBEErQEQAoeKi9VvnT2JTeBVfPqwgU",
  "key46": "QnC1VK7dYnQ4pFbyrvEwKciD6L9AEyoJ9QuYHkwby8FEh6WqsP9JhDXcdMt9s36Kb3YdtQJe5qdqwXFJaeFxFNU",
  "key47": "4q9ex35bsjkoFKvw1sEFgR7jj3TGw1MWXuyDLj4gQ7ZboNhGVvHjS579XbxKgHqRZQ8CttFuXxjdmgCj3VKmfe96",
  "key48": "2Y6BfZmeaznbZehdiEGtK7qtJbEsfNokzYcTW6VFJ1WFSZC2UkMkkqzUGyoXPahTDiSkgTtxs2jJPvx8w1iPevjK",
  "key49": "4jfZuzqHWVDdPH2S9hdrRa2RFtCZpxGF24ua3cdS174cwLx2LPtXpuPN6yUUFbfcGB7tieuMCC2XYbgN39dJiG7y"
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
