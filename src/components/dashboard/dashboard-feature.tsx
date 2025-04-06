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
    "5b8UuQnehC5Dbu3eefae2ayZF3meUbXdJJYjcYQ3xJ4mS2df5svFVoFt3zMVQJfiaa8uzqE7pvux9TSM12SNsgKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EGJdo9AVpbbunoqL64SbVYwm5EoU4ea6DdWkAR78ewHPVgNrMhpKpnVB1PdyLMUWd9xyRgJ6qhu5pbkXer4cQro",
  "key1": "3PukrHgjQr1U19sUidbHbeZbfzTyXQqkbnuH5KidwRQh92Y4XQTHghacxpeeiFVZ8im3Ucs72QhHAPo1LtbvHMKT",
  "key2": "5KUsPgMndHPpa5na5pbVdk7z7DD5XMtLREHSrGs91fJznsnF1FydxGVxbTQ6vBZ3jUorhbFR1JsCz9Y6vhaFuAzg",
  "key3": "59ph1LuZvn6peeHXC2y7VzumEJCp3XBFE29TEeyUbJRMja9AVxyVWRoWRsnNy54WDNFFPiKc5YfginREBJJWi44e",
  "key4": "5g1LrQf2hPgSiNhZ3B5nytuGr116XKGN5VWLuCByKyrAo8wirJBmZoN5FAzPKLGSqLEtuSJ3DorwbtpcUEFmC6wh",
  "key5": "5qVDT8sX9bGrcvGuiYzYqjK8vVbMWR9hDsfB7ba3H2zje4eBA1QqqLzPCZmryZS1Ljdp3p8TNMUjB6AESJzyk7dT",
  "key6": "5iy1mU8UN9UMWSaJX2Lcf9DHv7TzhJDkWJed6DqHDgni3ffpZSqVpnYux2wLRf2YRWRdcr4DZvJ772pVdJeptS8i",
  "key7": "24eHqV9YxdFnjp2153bbGWyg8zaNxJZRgLotLpSMAXz3JDyhvu48t8BSSnxnd5n2yUm6syFCYjB8jrvFtZvELDKQ",
  "key8": "327EfXgA5rxVSw1B1CEW2z912wjBQMeLrn2pV7EoQtw87za7Z5FnsQzdEd1fbBnxfzWTvGgCq75x3YKcU7RbkuWL",
  "key9": "2n32X5KH7B8PBG4aQTcmpCW8EUZxTV5osjSZehQchTzpvB9tSFpmHYLbxRCJT9ywT8xdfZuXjYWEg319A2rqJfnj",
  "key10": "3hPcaS1wrsvAYUi4sLMbmfEnN7FwoAz1bjShiMnBVE2hiEDjjpuza9uBPuz2KUCDfNS38AxXC6nT3gK5f5yyP4XB",
  "key11": "3NJ3JdeFdvbWGPNfvR6VxbJK1QCHdYpJEpWsxNWzN9Mr5uYny2UzvuerNqqspDrJnZmBQwyKM5FxKEcwtPpHrmyt",
  "key12": "2dLVBZ8SikksJhx9YfqfkrNLpZtm1KRUcfSSqfz2dEYkw3wmhTr3cpodoEuDQ2HcGvTM1rPV4q7UETUiMLBZz3w1",
  "key13": "cVqAAFqiSMMUkEqv2vVdvXTMF3S3b7BWeNcWAgZRtYHenTRVKZthpbCBunG94U2tLYkPNRiUuHxc1YXTamHGgyD",
  "key14": "n2Z7ZXekrD2jjn7BN8Gn9kcqqu5LnDaDufYsfEysSv3pMgyHBjGF8eFdfvfM2C8kATEGPHMcze5kaKpf6tyQrY4",
  "key15": "2BnhZn3UibjDjbrj6t15Z6eTmjFm73oLSYRUoN8WmN3k8LaV82p5QWKyfwAsfRhnBffyZpdFUngJdy1ECwfPhsh1",
  "key16": "2bvULH2Y4UmZWg7hzEu5P5aaGsPACzSpgruymwgN6U1orvS8FWRPdr7eUv7NtQZvBS9xvDEKzMRyVm6cbiwATLSi",
  "key17": "2W3bvPJKuMfKvAtAjTpPp3YoeZ4M4sctHTFwubqB1Z5tzykqsVZXKwbMqXyL2jWgTSpBoos66Yie8Fe868rcvhNQ",
  "key18": "3b5Zr1Y8FovXHdKb1ZoL7q95UpXM2ZhJnwgHZ2AKvb5GoWymyoB3dHo2a8qCoKLY2ANmEEUmebfMpcLSL2G2J9Y3",
  "key19": "2tvEFddMsYpzVvTDTdGitwVShSguBodW9yvzqgewm3Ky2EzQJMCXgfzm827b3MXkygfGPyppefW2sZYjCuo5KQy8",
  "key20": "2gdQ5u2A2w4ET9KVHmHZxvy379uywSuGA6T1vwFwr8A85CqjMpYjzKybj26MSVh7RiwefyTQTeEwkqNTyHKrT1d4",
  "key21": "3tvoEMBTAQxtMG2VwnaCTFgvPcB7HutdN9JCf7FTnPsUmAVYpYkfB8PBrMm7XAMjsenfZKjuzQM6vG5xU6M7cJUW",
  "key22": "4e5YEqrNotB33LtjPEuW9AyWJF8rn9hp3jbkx2R2pLEZNaEfpUFEKpgCa4rGoBrEgmh3pTNT5L3gy4cpyge6aHAg",
  "key23": "32RnRVKSKG4LQ7FfaxX7miBePv5nJzKMLwSyvqJeJkgfNSkB4XtvoVavPgzB8rsV8cWzCfB9dzsmiXr3t4Gt2uU4",
  "key24": "4su96hYBAzJ3LwQYZLbA8ApsD6vaBHFw7C3pWP74bpAwmUpuj62zrVqyxnvnS67dh9G5PAhqzH6LMQzev6dCbV69",
  "key25": "2TuBzkJmQgVjHjrmHXbxkBPMnEyExz9XTUWPfcDGaGv1iqdcxWZuhFYaWvQgVvHNdz7ZsWybE1P67z3f6oZaSpX5",
  "key26": "4dWiF1pUYU9EoQHiL4W89BSmVemWtKgAxc9E1QoBXRMy7RNPfTtRceySBjjJfFxCVYq4FS3W1mAbPTPbtxMrox9t",
  "key27": "37gx5thT1xYSLAvxyT9SoxzwkbTuN12x9RRLPRqZhVGtEAK22Nwp9uP3zi4GvzsyDJLZEBwPY1oErmgqRLm8fXsY",
  "key28": "64mDs9wvdKQiRNkzogq7NkmexTP7v9pAqWVwtVTLwpRUKCi94KSW4jBc9AicAvskANwU9cMm7HLFGoHJ1QsN7qz4",
  "key29": "2TTVM2LCgXQDkxTGGyLSNMXYnW5Jsbkgq6jmGKqWRpQkSgvHbbKABkvFhsN1X8UNn8W74NbwwN32NSxif2jF3yUw",
  "key30": "2rqPhm6WH7EYwFSCPGUV4J7yXEwdNUwTSHxirXhdfuYXiWgfVwzxaKbUowDoJKvNVCqia8Ss3CxkU3BQTHVPSztA",
  "key31": "58LtL8FbsrvJULXWJBNPFamyNJzJ8npcRy4t27FwirJfLcMip8DWjPLb27Fzinz7AtzbWjShdqFiucpPjqL8apuS",
  "key32": "PHGnQzNshja6N5qdVViKP2hFYAH4y1DNPLFi2gNEEM3K4q24YHMrFYKSrKcbeC8yZKihUThFfAWtD581TvH6fYf",
  "key33": "4LoMcLm6CEriGk6NgmJJPkHvno5CDEHLaQLSVeC5F1FLHjZ7p6Q5aS6qn5eVyDmnGtgi6FQVnEvLR3J99fdyhrHW",
  "key34": "5erJ5HaLaQvqZJm9ToMEFeqm6qt96DrjMJYD7QKRDBH76BKg78pJtCmYyN61AUcba5ZPmZB468JJ281ouMQTC8hj"
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
