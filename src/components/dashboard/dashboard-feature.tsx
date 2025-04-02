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
    "32C53TQWW5gFQ6bv96wM2tAQ6p8orLaXYrX16meZe6qLD57HNAgpsUJ5gBiJDYUdVRRAz3arCnPBnb9axrLyBFia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MjkY2qpovLCtqmP2RhM36qfsbK7Qt8rMH5uvWVycMVbHbzRSJ5SCbk1yAH3XgnJLJXorjKkWoq9jyu7FhCJrsG3",
  "key1": "2wbGpsAksgUZsWKCEK1Hiry546Kjv3rZEmvhJVLQ5K2uiJYbgh7qaMeexNnen9wsvzKHdKc8d1hL7J3bzGWgUQa9",
  "key2": "4kiJ49NALA3xw7kdTW2mtPGU5U6MSDdbfC8MqqrhGpJavwEzJHKPEm93HgwD72mE9wYhYby5miVQPQkSEK9Kxk1D",
  "key3": "fkehNuSSeB7ByYEZpoGPVNgCgdpqfTK95EP3VrfD5SvSThkbNWoSEQbpCA5rfYkGNQnWgWjtkb2pmf2DNcNvvDa",
  "key4": "5m7dQfDNk8521kfL8938yWHVsciYqVuCt1i33FTmK9YmRLjnGb4QujxA3rd9NMNYrSHuda9pJDDfcARudsJCQZ7F",
  "key5": "2NNq9jnzgmoBzua2vKKmNZ9B5bvpEj6awtfZ4PJPtSUL4gY1vN5Cc3XCccQMqYraRTV7gRVknJvwhqJZy2pA3CCQ",
  "key6": "4cBPoAzpo8DzaxdQicEFSNWGjeCPweMcVYZVu6YH1Y25GyBRh9TUfNY7uZqQK56CSUcP46wXarnd8xnqxLoGroFs",
  "key7": "78V1oUtmSTwnRakm8QiLxp83tTkN1yryXXDeJ9461iAncMS3jtHf7DShrQ79zA8cRhqyryTV4yLg9JkiCy3aHsz",
  "key8": "3fYo7iqD37WffB7SoELNriHua5XpaEx8CjhVq8i2XeHQx5xX21PXqnU6jykeFUVNf1mjYte7MQTTNCMiXGCu19tG",
  "key9": "65oMxkbVqGoqMjhUnahv9Tp4wBAgm92YkeLoifqnJLDgXCpVVgRq94myV93qH5qacxDKJCG1VZ6FgxEnKuZYErmn",
  "key10": "3VVWEPxggBmdHVRDyjnQErDzoiGShMTBvcBzjUX2QdnDTcjbmA9RVUGFDtKe1GfCYDfLXpw2vKphwLYhqu1KirWK",
  "key11": "kXnTN4kSSQ6zk16uP7qYPfdTVn3deS4Dq8btbEPDo951cZ2RnVitf7LAyz1xoNtyGwYyF6qh5xQdXJhCHRU48cw",
  "key12": "51RtMvhEautqeE6ePbQ7yRrNKyuNdnMv67hYpuVQBa4UEfKmgfhJTwH8srcnDHhAdswsMh73gydi2t96pU5cnHVn",
  "key13": "278uqi5u3U66wcQSHYnDpw6o3WsWtoJWCnegnvR7oJxUDtfW484RRv21Qnikq9XLGYsHBXjcSzHatfDrbag8CiNb",
  "key14": "255XV11KDRiP8sJuyb1BQ7eXB79Xrqg36y6HVaVHPtvNgWv4gbqHBbRADvYWYjLGvyrGkCdssmwSyc5m6Dxu92uL",
  "key15": "3yMzGihTo8ZSLTVv7v6RAkV96BAYAx8bfZT1dWAhjAf4utSLTwAYHd6LuzxV9i8c7URkWfqrZxrJRGeSkZriYgpL",
  "key16": "2aFTeaCc2ujEmdY76kd2UTP8aB77wnNJJMtq7vXRyrABTCgLxXZReN2f92f5AD2j3TwvJXbp9GgXogoaafG3ALvA",
  "key17": "3TrLstzMhoxQXALKCk4HpMRjFuCmoyUUrexP1mPoRVQJq6nB4FH3JcLPkxM6Wj5nG2PHhT1WSUyvp2rezn9rgud1",
  "key18": "51oabRakZJbk7rtyL6dhKWWskr24eC97fvkkKD9iUTZAaV26DwT8H2yyuyPSfc2p6B72gmJ3R1YqBJ2poKfNM7UC",
  "key19": "9ff8J5qbBT8PCV53tYftLL5arzChp41ShZRtEUCfxPYQs7XYx8dm4ZWxHv9gEdn1Ums7bL2uD66of39gQbRpoxH",
  "key20": "4fid5LvrzWuRKY2dYMbXavHfNPZMeN3Fu4HKqss2g2jntaj3qMjm552wtDpo4MW8CnHYrFo71abxhKA8s5D2Qnzg",
  "key21": "5pggXVj3qryduS6avrBN8F5B9hTJ3ACFLKCX4JQQ4YnBcithkuz7FDzLyRTn8jZ9gzf7DxeeabxX1cyashRKvWyJ",
  "key22": "4kZWeRyawoqafd9MRBxF3GkG6RoUKiwd1SY3UbnHAzj4uBwEsgkkALePXr26fuKErsgtsb7NsUdWPyFizC1U8mkK",
  "key23": "2YggEtBthbeces9FFa1cWuapKdnjqueQE9hNGvEQJEQhvemf8rN3tkJLghBsqbYPeZeC7PWZd6QWP64Gv46id7Np",
  "key24": "3Uo2bZDYKeC155U4Q6C8ktHfcFEekQUQ1CCppq32G2fGCkPkNo1h9Ab6YNXtyho5ywYg1ze5vfEZYQ9NiKHxGgVJ",
  "key25": "vmeEmAUjCJNH3nxQghoGQZReNSo9nYs5ehTttt8oYCBiSWUwmHWFMrQ7jKne2DSMrtyeZdX7wFHvk8R5CwxtwD3",
  "key26": "2tqA3Hye6mau5KjTeSPDaUBekusVWAQi8DrBswxwjSUfMXsKMzQVRBcasfT9phcNE4voAEJhLcpAgsFryXbaEY88",
  "key27": "4UTj289xMPkryQhgvPqRX1zJnqD3L9NNdLJW6AzNXjxAXSnfoKvfg9WW1NmEtQUYuox3RJzu37sNd8gN9dwj6yAr",
  "key28": "3ftVP7akAeaMsZoaHZdAu98ACHVPWrJeKZY7A39CWN2qDErFA1HD6dUxmPUWaFvoRUphmTseCFusGbunijiFfQAM",
  "key29": "63EP25Xvay5u2ZrgQwBcroC7qc7HoYW15Rs1NRGSTGtaJzqyQy19f5j8NqVyMon6mJFdE3u1Yqzw5xTSUxM9HCi9",
  "key30": "4vuy5i475UkmFVez7W99SMwtUWTGAX4fCuox4zwNb5xCyUP2e7Mqit1AT9S9MdfQUWXKGUMdr3XwPSrv4egcPapV",
  "key31": "2R1rYKaPfZj3WTZiSrRyYaFTusaDbgMdcuzE2HGyyxM39THouhug14htJXZZZ1DUbkbxC1NPyT93P5cfkka6K9T7",
  "key32": "22WVZXKWarukW6rGB1kaoLDHmHTjEFFsuERqy3x5XyMqVJprMzeRmVpodR4WPPSfzQjKXCkG3oKDzeFw4TaD5b9Y",
  "key33": "2L23XSDsCLxzsyCQvEwortEizX3TrgvdVHaPqoirJKMjtQ5FXc2EwPQEbceX6Kz5zyMUMPRcuPcjDEtRKR4J8czN",
  "key34": "ZFMhmP1VJ3Remhf4fvxX1ohkhaNvPhf3QU8eB7ih15Ux3Lcre7SF8KdYMLmpeuF7j3zvVBUAqBCMA45yhT7uYdX",
  "key35": "2P7hfnLNRS9dpxqu1KniaNGPj67bbVX5fjZ8MGHiwjmtE8czasLgB88ggK7deJq2zykVtvr3mMeXGHBJkK6U8CeD",
  "key36": "2pBnVN9p4nymJUZqb8Jq2c4pD1RUVRm1wptsCrW5LxtaRUprKjRQnNGtBQQejxqyng1crEiiv94UQPYCmUrzG1Wg",
  "key37": "4jiBR7CL5KRtNwfeVkPv8sYT4rUw1NBHbYLb5wnwsTaA8AnHJg7tJNVZgBTEWg582RWB144ugqKMcsNUUBx6w6HW",
  "key38": "kube6QJMNAuSX8kDtjXTrLhxHinMDQfWdbzodexJkKYZsvWjCVFKmDQQouoFMksGueiU5sq4JN75DDJ2ewp3rju",
  "key39": "5hPHy9YYm1y2Da7gcw8dPABqt1D9b2ivkwjmqMxCH5mbvqQmDDHk86QpuKDzU3rzqbRgg7ZDGrtPA9UUDQE2vSg5",
  "key40": "4AonFHVeGsA2LNqfz8mPJ58E4AAfCihtgTXQgETpGjebDvA1y5khp35QEfBbgm7AAzWvx5dW6FT6NH7TBXXu76xA",
  "key41": "344w1ZSpBhYXbF29FbjrnBJQFVnyQ4VaUXmockTKfNSWmLiqpT29t3URkuoQHECfGariLBMQQ2TpfNTKMtQEnWX",
  "key42": "24xu2m3mwWoXYtdPYJe2hNVhdZ1sa75qTJ8AjooVonhjq4LFEwBLVHPjHJ35f83aeVvbUcAgRXgHZJBB2r2LDG4Y",
  "key43": "5MD71wSmywuP5i24o9KuEDNLTFNPUmUY7Ntm5uas1KFudDagKpB8BnhkCA5x95hGj1fr8NZATy6Qh3X6ipD1qEuv",
  "key44": "3r2bQkyhYss95LZwTMMSEZK9oxQ4Pexk1amqnpbBA9v1zqtyFWfKUh1h9s8ZHBjKkA9AV8LeEmfXvW6rTYLWkX3t",
  "key45": "661QQF5AMCGxuozp6QpZLumZJ9hguYHVYPVU9L8gQ3K7jJ57jfY3qf2HDjLUkAET6fLMtiuyAFBT38qSKHX6iziG",
  "key46": "3JoLC4D5d61AaHCTWfyoC8ujPSCFuXTTjnWa1H92y5Avu793PNcxC6VAjHx9WHi2FZhKKMxHkG9WhFKkvheng46y",
  "key47": "43eDfCbJcVnj3RoYJJomajap7gx4DEyuE7oFaRPkYy4hz5G6pTmxKUESLaobg9Lfnc2CyQqppKkuZD54KPJ3ZVu3"
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
