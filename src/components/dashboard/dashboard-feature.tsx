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
    "rTbvni3GHBDGqPXDHhVf7kQsfh4dwPpzumxTokXRqt5MsZ53NgCJ8psaAz8SjXek5jHVd3NAquMZmGt5spy2Gjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AHMbULBU1FDQ4HnwuaMjn1NrHazuusM1XyQbWBLzgm4nhsVRYhWWpWa17cLzMR8mSwKW1AsBiP96V4pbN7vEmSN",
  "key1": "5FX49ZNr77Adk3zS7zsCtpgxZWpUoJc7eoYRU12wTu9S8XJtgr5ohUjFFpY43JVmABNckaW4KnBheEHZkEpgsz2r",
  "key2": "4AarsJ2Gi79vZrCWtJjckhNL5G2zmRfJXrWs81Z4VbVNiDQktbdm74nZgo4rUjvBoAZAwxyjoficn9E5X2Wogad2",
  "key3": "5Z4gjQwCEdAu6eoXrKkgkGQ89rLNMNT3F4xfXudxhkxKxkPEUXimWt97GaxWCFUN1BUBK4hYh8vc1fVpVF7cb95t",
  "key4": "4LRjPFugfLB8FKop9CEqy5ntVzurarroQT3pTkVjuwrrbZ1xLLTUwSkWY53eLcPzen8KDWveQUx7HrUCsaL2NPvS",
  "key5": "38BCYSpa6cNk5JTwSQPpeGe9PbgjHnPbJQwoBiAsAWRQxfteMuSG228TY7HK4RAxkfzcvP2xAGgCdYG9rBLGpaTc",
  "key6": "5sMXUwNThdigGGmGZUPQyFYc5tw1C2jxRnioxTZ9rAC38zaaHNKbVnNxf9P5uzTeuwBux88rkGZPHvhXzT5ZHgtY",
  "key7": "sfDwYZ58Ssf4bbQ1vqG86QmkZuHfA1E2DUGgk3KEXfJX3KuwpQVEinRXphrwGeBQv23Z5hhXw2YuLebDVD26T8s",
  "key8": "44hk9j9eNS23iYRF2Ky65bmrGcvCXgnUYEtw2biUs2fjNZjpiQSVdWnvJ7c85ao7wcRW8133tvw1713P5wbXRAJM",
  "key9": "2r9aEmSsf9jixtnh6e4zkv76J9C3nLHP2g6a7rj2vPsopdWakNsxSD1J9fcnKPeJe8WLBu69hXi5SC7vznbNznWM",
  "key10": "3irwnBWCfLwiJNwky9Z2BjPGz568YTRh6xm21ZKTLvaYZa947ngURp8SVQNCUXJn4XBH7uWb4grBMAwyCX4fKXBt",
  "key11": "4PZwNUj54xcJjGMBShqLP2TXBZV3nqW5WDyiK4fyKU35eJiZkBpNABw5gqPK74mu46qbdo5cdY6rKq4GyAVcMZ2z",
  "key12": "4gawnjn7KmQDWysvJ6Wm9uBbff2jzcF7d9cUoywf6PXSDHSEeTcLhBSqyFFrrJCkyfGXxh9U4ojobJrVtngMqYBf",
  "key13": "33zJz9MdDaZ6VevZsc5vZuPQypHJkn1yz6RuAP925HmHfe3vakQptd2eWsKEwwGXRGadr357y1MKCF9FcWeuV8pN",
  "key14": "42yCx9fn6RgUiMu19kZqozGq59ikK1k1y6gnM9ieJKkx6LNvtGq8kjf8iYAxq4N8bgcqDKtfmr6H9ZavjihmmgXR",
  "key15": "4VARPaQUrmnr17dcCzyUtFVPhR34FWBmEjccXQaKgsGjbCBrgaF2kkhqDaEAhCiKr5XsV5BxjXNPUf6g72U6usQJ",
  "key16": "LGUhv6aQvYFDsMSMPmyey6JoUS3XR3yVKjSXSuUEtzxZbxfKk5guV867wi176UZZh7sPJxEM1ir5Ytz1PkZn5hT",
  "key17": "2EUF4fidUEg86LkQSBv61P3M9ZtHqnLhSdBH1hbJrQaFW41e9zAMrwXtCi1iKZr22zh2HJ92qhwQhLwgD5ZpMREE",
  "key18": "TcpGop7tVVbtsn1JW1WPdUo9XJxK14kJLy7pXNTtCSQFCatXuG9ZVB2Y4KChEHRH9uve3oVagcXEaY18nhbAA3V",
  "key19": "2ueEpjCBj9PRWtHV8RCGENNP6Y7avmcqS5DeTGTK7fnqDLWju3jwXP9rmgpHVjtBCcdGGbRwGYE2aBRxFxFShWfv",
  "key20": "4yapMe1VyygQmcrrEhZ5MvLXCiSjikf6e6cg4Riawo4DwU8WR9k1pYUHe2c46Wt1kuxsNouRrasW8XgDcmZDSyVm",
  "key21": "2Ek7fgHncpS4KCpX5pfzw29Ar48k3qNGKmre3YmnzR8HJjJBkMXShTAHiJL5AiXBZKXBAmbq8CBx9xQVdsD4i2HC",
  "key22": "2sCVRuzQr2TuU9o5FcAHhj8ByzMti1rq6Y3en7iEJA69GccP62dEcMmqzCxccbSHxCPefuHkyj6ixixj7PUGxNJi",
  "key23": "4CgzpCXWzEFXWd3nmf1jsRzaTSEbNNTFdbPSLimXJPS2gBWtr6TY8w7sB5SzAXgtP6e2Y1hM2occirfhvUPMMizp",
  "key24": "5T3ypuGQMrmTvnbTyjPsK7yti3YxDTPXBDWFiji789yXX1rAJtPbCK4KxQ6vQCbLLhhvyfD9t3cdREspgDoLXDpj",
  "key25": "sBVaZ7P1D18xnD67tqfQtmGd1fsZ8J3YxFwmhhQrTYiLDpCoKE57vKofpXsqg1VbDjuQ4LFSPsKYAh1ds4teYsF",
  "key26": "5BPhe56fS8gfsRYD2HCidMJUvoRXvnJ5jXeZVG8xyLWphhowBD9iqyhbaN8D12zVpf3HHVoSCGRErbAQDq6vJq3b",
  "key27": "34a1QhTA3sMnYzTucdDPP6yPoSLpiCWnsuUiEV8ATZ799q7wYc4VKYfoqqb5QQz7wJzzGWkpxbLfA7WobS7mWGch",
  "key28": "3Xh56ue6gp9gkj9ESbbkxZZ8DyAmCJmG5qsUgW2msGmeGMi3duGfTX3qyMndH88yskHoKT6R1BxzB1fL6cbetDPV",
  "key29": "5XpLxq57gfuVmuEPyQe9krqZArG94Gn76BLz232m8nGin11J5Es9mf21tZGtQeBiKRSqfvC6YjPAzmpNKqq8roBn",
  "key30": "5KwaPgvd7QyTeqWBPpraPWRZcMD33S1ckuU7YmVrmo2W6VYxZfoum5RspgpZc7qGhJQTxHseP2g4VUVccbRC3Ss",
  "key31": "36W4RrwMJyT5tnq4xJBXEuj8yqVbkYrgRkYDeLBqMhNoBCb6ur6JcMWzGMFdSkKMark2iMG8ohhVmvPG8piXhUqJ",
  "key32": "52wrKf8EuRR2h49HNqXJJqi1jGfvukbEmLHGHyf2hk4cMNWVhNqrH7zrMHChWpFTgv7x4vJCoa9nJPede3NNeBjy",
  "key33": "66SQ4CFDv8noYjaxGub6ZvAaJ5rrRc6bGK4miiEXTtHasF7aTgvjhSQhMvGuZN332XZzF2i6A4zVbjpz7i9LeM4k",
  "key34": "5gDcWrMDyqjsnsi21RvmEVCsNPpJwDtvw77R2Qj5a742ezR7bFsB3vuzSbsQCKQkqciemdBjebPY5Mwjc4gHeQuC",
  "key35": "3g8K4wUexaXRcuaZbA1Nknn4XWAyiF5FwVm7x95XYkcADuVV4LqqKCs9ZGWC7Gnb3qZ352yFdatLA2RSiiathZ9U",
  "key36": "3ZVUewN7DVDATbg7ysrhYDaLiLm2Y9jLwxSJdzNT1kUPKCB3RbYSRKX14zrtoBijXsnPX17pwVh3M2ZyH35qkc5T",
  "key37": "5kkAMcL2YUxYKJaRMrkh9LXvsBBC6TJKrRYQE6FsfFwJ7dPY9gFVR49Wgu5umftfWWydTd3SmbwZdLh7UoNKEBWq",
  "key38": "64BeeQto1VwFuXNvBG8NmpgCF7tRLhop4JJYw8qS9xZFhUgroeS8H2ghJhHXeKCLaREt2ix4hm1geeK3BsmJNTv3",
  "key39": "4BYJDrQtQKYjJJxJKQJLJ3aGtTrvdXPaViqNhLRNeFwCSamrwfhsiTZ4s9DLtBs1jS8vxawB5ukCJHujkiKGhdyH"
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
