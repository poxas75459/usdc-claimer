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
    "5cDqcU7eY6bSyCk8Qyz2pMLtPZCS7xAVsmt96BhyLDJPqtj9w1YDBkgNtAraAGW8N3VsGE3RWMLekB4T99Bv6VsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yp3pcP6eRRSprioet1j39ankPMpws3uuv36713uUvHSeavALiUwUtV3vHzcAZdDHAXWiMRBcFVHHgMwYps1JnHu",
  "key1": "4x9K5C1fBbkvZGoUpPQ5a5G9QzqnfzsKGZ5wd65jRZbE7xwwHW8Na2KxmX1WqPRiF1GDsNWK2g9zmtoYAzzFgQAS",
  "key2": "uFMocZ3TMkEssmXaksKZ4Hc2i8x1NiBsGV4DvupXMD9PvFmdnEWqXNrYZqrqkmqg7S5bJ8ZUGqdYZnZmrE5Pzxz",
  "key3": "5M9PrNxSGSyx2ScjD2YPScUiQofVD3JwDphXC496cpzrDWt62iawtxapQdsYz8urNtVjejCtPhN6Fx7b5kjgE3m9",
  "key4": "MsPCbnvi9ZWguH5iBmR1sndNxxsPgzaKz59Va8YVn5TjfZvAx7vVK8J6HgzrQQJE5vdctmxXTSg2VaWRwUxA4FH",
  "key5": "4ATVSSwZuNvSL7Fp8QcCJc8zUnc2LzjmCJrdpEbcPPberuE5ih6jFkUX1b4ThT9XEvkdYsWymxYSyegEkgE5WR8m",
  "key6": "3xhNRCpdCPQ8XngSdSe5cm24giYf8XyikfaqSkv2BPsA84LvHSGJbgmHnsKbnvhiqUPsvKtzSSNZyVBNAuzZsYfU",
  "key7": "5oguZp976GRoKy7dFockUiNNmMnbAZH6mcUoHbVY5GJo48bk8LqzDFBK58CLLM5WT9GzVv7um36Z6i4jqxkTAdey",
  "key8": "zev3NavyzHWDcNSUjTtcE5fqPPpbtFS8wzY8qj2isPCg5BoTDRXE4UWm4V5rqcGdB2e6XGhAS2JieFs5MtzByGP",
  "key9": "53FmqxtPM9rrQE3Vqief63eoQwXFn8gTCFnysqEivQmnMSKY8o6Cc94kvdv7TuvqXx8sWvJjnSXqDhQhgNQyHe4M",
  "key10": "27nsqfmiRHjGw4pFPeJmVkArMUbjoWgZx3wM9NSRorT26KTLEYzZKYpa6crbQnV6RmNY7VUf56bxG6q7ueAPRfeC",
  "key11": "2CAQh2fF4RpMr9XEnoiBdBu98aDHpMU423qzMMF2Fp7vaL1WdE9ThfXmrwaWb6Q92Cajkoh7Db44KZgWd3pEHvJS",
  "key12": "2MSp62vVF7frFeGLcdjvf1EJ4ZWHtBT5t92jHK8SHcE5PhtNWRL2DqLtZiW2RmuP8LsxCrz6KH1umBq2mJ8fdsKJ",
  "key13": "kD14WzArXC8TLii9ZABBtjMnDyN6RcWcwR6hkFmK2t6Ce94wFZCfb9RrbYKj1pVuYVnc36uk9WS1cGP7dJxftbg",
  "key14": "AwZsFgVXrxjKtGhkSkjXKqvetNEBP6oF6zBWdVJvTs54y49oXXqEM3FHqqRXU23xrWtquZJthw9on8HscEHuEkG",
  "key15": "ovJe3XDumXPUe7hqPDQerg8t6UuJPNknK5RXSLPTgTNQ6MZoETt12uip7WjQrDAXtt4rd3WZoLLdM3wxZ53UGQc",
  "key16": "3EZtmknr7QWCLGBbVA5dGu4GSgiSMZBbmKfSBLTBLAEwu6Ysg1KHVozK51KBGWGonuKBTHpjhFUwPSojxHakhYAB",
  "key17": "3XfYMXexQtS6btyXLBkC7yN4dXJsS1KEJ94xXPSNuFhpieNqsvtomLD9aTcbUsTmPbJjQe1z2QwHoH9rnLSRS4JB",
  "key18": "5o33oKqBEjgcrw6J4ZSMSN2pPDmQagW2NSdebrYBEdsgUNXRpZa3QSGuWqTD6jmM9yrGZGXkutRZW41NTToZp43e",
  "key19": "3MfPuomqardynJfpiMAsucss5rnKSY5QQRy9hn7MvXCSuw2GNWs7VyVmcSWn3WFv8Mi8una7KMufRaNkWMeo64wv",
  "key20": "4ZhpUGUAkH26uPE4NAiCHnxXHNeaQUCeEfkbaNPtgGBYBC8kuSAdUdSoqUhqxWHkNoKGJwqzKhe24gMkd3f3BrUt",
  "key21": "UWHYU1btsjb6FrmLfticVneGpBTwJC2cYZMQcimWkELcKEGxyJwd8mrLoEGq66PZyUZWUF1BJek5MD35kkJnptZ",
  "key22": "3YTVh8nEgYrgWzCdw48GeHwQTw832Xcoz7cX4bDLgutXVAo9BJ19fJ9fyNLyMkPV7CZJBc4mQgo7sBibiMvnapLC",
  "key23": "23hsRzcTuy9t88Lj2hTvan7V4bRjgs4peL2AzpaZfigVUX6JizGDsDDA9MBFdsTJi7doYcAaENyZAnE8hc9S5cpb",
  "key24": "4bVad3CDiAYxMner79gxp3qkTg28am9ZkRRNGQCXB4H9CekNxHxnk7UDF3RjZycFVEp1AaXXkKRuGZavi9Y7kckg",
  "key25": "4i4yEurYhnzrvQNH2mVt9ieauEiXyYd5CmYNYy4bZx5AiiTWxnVRy3zi2the89t6ZatAhXTZhuiBypWMyHjALVzX",
  "key26": "43WcsR3YE8qPx8byJ2L96ex8dHasqYau1XMt4u4PbDeQTiLnyLCuXEo4n5yNpBTUeJCE6QUj7bUwfABzNn81GqKT",
  "key27": "2RwxXGmsaLi25nvujhwpaNMa7xTvxvN3t2w29i73F41MSLaPKZWDgYSPbSg2Dfgoq4kkmjhiWbtg1ZZwa9JL7fXg",
  "key28": "3joWPv8DhUcQcDYhGPdbuKsSpvGgsFT1gsr5K1bHo6tWfF6Cr8umVHZ64QoSdHXXb4Z4dBVHCLjndY5XurdsJiNt",
  "key29": "2pjhKULDwi8A8KHM6QysgQTbuBVhEdgMRkCLPeESoDq63AHN7JLBcyGv5sA4g79rKeQfCYNuWDvVqyR34AnZKDJ3",
  "key30": "2i2gMSUYHvWAmkZTjPHPTJo7LL6k2HrU2N8khatPMCeF7qqpmbuke7tbTBFeCCATK9xjA1qxshjJn4dejC5PMgDF",
  "key31": "kZZQQ2WGoVVu8XiCTSehqjCvDY63Ns7JRU33yexB73RfeeHNzhfBPNVSFa31ju6JSHZrGmWuEN6r26GcjmLwnt4",
  "key32": "2udb5Cy3EqhWpsGCD72MdXYHwanySZZd1aQBNAJAmPF9XJm5BFKWGNqqxN5fv99SsE6969o3vfoygpJWc4DakkSf",
  "key33": "4Dxm7xzGBAHANewpMzwCpct6UKkMzXjMWXeAzkfLzhTCPvMjNgXJVbSuHmxjmgyErABwjMDNzpbuGPH2boxfQjPU",
  "key34": "3rXKTmZ9V1MPcWgjKNkDK9sjutCd6GbJ3uL4feTwEQq9s9wzBJ7gYGoWW1TrrTz6FRsMiQqj5GdCDSJpxvmNeJCM",
  "key35": "ysTzqarpypnvSZXtoi4kTNQPbiuxe41f4V7eMY7RzysJTB1qiTUMsQGF8wPCUTAhj5x4AFn5HJunzQJuBaSgXjz",
  "key36": "2ufJoUZE19GcbmvkbYmCxebwN1g2voFM4bCUCDjzY2GtkmymwYTtuHyrvDQGg8ki1gyuYHGFJWVDPJJxQUW15Xvo"
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
