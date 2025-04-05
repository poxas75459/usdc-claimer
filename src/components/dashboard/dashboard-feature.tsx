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
    "2XHAMTDy4uA9iVJkpL9fZnBjSF22Nyjjp8k6tn6VMGvPdao4ZWNk7UJqE7oKDqb4cv6zvWiS2T8XURMMMsGGL8K5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QsU72juvaMcaxUQHHSsm3PfPYmCftxJ7ZxsvzKkE6Q2yWD7atLX3RAmQdvfrQoZuWvbEH1f6TEq6KTxNZQxuyQA",
  "key1": "5uUuf3YCGZ5XMbTN5kjUaxEXsBA8SJjD45dqrwxfzyNSgAgtfUoxn62fDhD3YUbMjd863sCEZTtUti4P5TXoPaKq",
  "key2": "5gMda6V3SE2LQc862mnPSbtfTjV5jqb2hMMbSCcoKXAgEEecaxMQY3JijFgQ3JJaQW66figA9L9HFeLpSucX9hcw",
  "key3": "pVruvviikCt38sLX549gJ8zG3jGVZwYvjZxrPnNjrFBZMj7rstRcjpNdgexgGUAA9xVxc1hqzbd7w5VybMkeDuq",
  "key4": "AsSmtaryTo95pg9w37rMD6vMDRNFTVNmcXht6RbD5Lui2hX4QcNsDbwrtqDxXdpBXCwydPddp29dFgi5kjAqWFp",
  "key5": "GgPerj2C2y4p2cnE2EPwCozwZDH4Aer5c9jzdqyaxf8Uaa9Q8jnRjp9DCduUMjhTbqRe19vWBT9mHBsncUsuZ39",
  "key6": "2daesk3KcNa4QjBrB2e6eJ8WisT17q3sp7nD4RnBYbgsHuBNPwm4cDDmeGnf19c8uHRT2U9bhrvT9pVP4vgMSwtF",
  "key7": "65ceGRA3eKzeG5fr7eFFhY9GcvhMuhSF9imqHdePDPNcnDgUUEHyMmPZxPHjYi7fsWCYVxeLGkyzDx1sWP8n9G2M",
  "key8": "3b6sWmzLu75eeEJQhW9N9vXYhRh99yY2pKM9SZCxoZkrufwBnjbdUJZwo1pxrJTvw1s4rp7sAsUszKjEneYXg9ck",
  "key9": "2hgMqyfXpM2rHUrnkVHwodJ59JXqq2HdUZ4eUkwhiQSBZ3ukMNpBrCXYmMpq8rjowCZgaNzG9U1pnaHJFrAxg7X7",
  "key10": "25jymiPXEmNXpcFaKccdPnbdkAtKnnDLgsLRGsEW8XELqicETMLGwS7mYXNmqcdN9xqXNBZgWc3Esz4rRw3Ki4Gw",
  "key11": "4UToRPBBEVca6L9sLkhebydRSNmWU295pQYgrQCgFWsVcyFGZQrQU38QXfWxhKCbonBV3PbBTNaqhSBUkzRWfE61",
  "key12": "4CypoLLT6ai8pzBrxEH9Hn5qS8yUw9ddvSgRwDwUtZyyDeJ7ShdUUPRr7Qdy2askVicLqyuRxLVG5qd4ic2irkAK",
  "key13": "Q9zytLDo1d4Y4vKscgAxBJyxBYD1h6Va81C9DwxGwE6GuiUqjHGRtWqrQbYZyct3z7hZ5TNqVarJK3AMAyfQgPh",
  "key14": "Y7DhCDY7xNfCdBJC2QMhTHPo1HgcT3YZN9MHFdWHuMZid72f8uhytimjEHYyGHRxMyR6VUmw3VL6eeVyAY1FijW",
  "key15": "5ttPSaKWhfkyxTCbs8UcC2LQpBuhVs3WjdqrzZzs531RMhLEq47w3REUuD1GmfPVm5QdTNRviZFH6gc2jdceSgss",
  "key16": "o25s6xjWBxWjxZupvpTurWBL4BNytzNqbrgukqDbU3s2YXGaMjeX3LtsT5gTwbNcVCFDRTxYNm35sexD4gm1cvF",
  "key17": "2YWdiYfMPLJNDEwuJ1y37im8M4eYS4LJopdbJYruS5DV3sGbpdtyEyzRYLy7rzm7XUzXBjcZonfK9X2HCVox2TUj",
  "key18": "5fKvd3K1HkeepApYpgt7KAsn6ZXCvohMP7TVB8FVh4ty815xtKQzo2KR6k2MA34pYbiqAXAkUh95mdG15pw2wiZy",
  "key19": "5Jy5jcYgaoedPg5P5wGsc24iEC1HCsBvrA5xEE3oArfqYLt8ju47tUA8TVeyM9crxz9A8JNPsGd4EuyXBbYohXmr",
  "key20": "5YaFSzKNEWUneHtcPFUXvoi6fdvD76Ty3k13N3ngatVT3MbkMuEXacLbQzKwGjXUxUyR216NDPsYSfc7qXMzxHHz",
  "key21": "ivkF2S4CWTjWexWVT9qpac2DDgtaTs3uUU4yqGKTEAkB2ju2u8dkq7bfD1Y1ZYiD1jsr62CnbbAjgJdTuFStPpX",
  "key22": "2sW3DW7REzzuyPknYUavGjUmoHXYfRRdfhsFbYtwTSwj88QXAthZf4uY1cYFoZTDs7naKZ8jaQV6puSrGUkdWwbm",
  "key23": "9mHYn1HGv1MvXgYTqkDS9xeu44t8m8HjEvV2krz8ND4mTqJPNjvbCm2nEyhXkgD3FMBPaXytiKwrmhKGfgRwnyo",
  "key24": "55b6NkhPVzLwm7Y7rEXWYVy83YW5RLJbymespPpDaorKdw5PJ9Jvv2UpuWHXpPu9Dkwk89tnN3HFsUabv7yDtiY2",
  "key25": "2sTmMHE2eQx23KcHqaLPxzywmusDwz3C35evpWwhi9aSfvXQDyS7SseNf4MRmPUDJVXjWLsZ28juehTRS82R1FUa",
  "key26": "41wkf2BgJTmw3MEcvxwfcWpKaiZZzaCpxTvyKZuFWZwUA7Eb8yYzSQNL94da4H8YFiJKXZGc71pg5aGMsWo2DYeF",
  "key27": "21FD2sL4tUD79c5Vo4oyiNYXoguJC2ZB2sq1r2CwGTzpD5vfUYQgYoWe1bya317VsLd2xAfJnvgGuugjDXmS29F5",
  "key28": "484hLPU1kbKpN49GzzT1Ar7Xj9HtrbYJG4XoGeLyWtim2WRQ4dVPrLsDm8D8LEib2eMpeakTYsxK6bmikuVqdSiS",
  "key29": "4cw4W9mPuBGvJUYYPbiMvi2SrUGRtKiqwhZnjmMvkd2bNZfLyu71B1yMCPFVi18sh9aWWvtHCJs8zE19K48XUCf",
  "key30": "8VyL6nNuMJHjRNeQDt1K9thXndEaPRN8dUoZ25xDSdyxrGzKmJ2JgTGXaTMnnnGrRs3ikZBq7TX3Vkx3F7Tam4c",
  "key31": "2rqcVRbNFhqDvQXBN3nVtZPqinEW4UfWruDVSr5z3QtbyuzPz5g2B3HH6L6uL5hdMgGJ2kUATLTKFTTu16df7XM",
  "key32": "oWLyK5Fb67LPG5X1emyE2NrL9uVKRU9aYYVUMVbxfQgpbAnroR5NJD9fUYtfWEkuKXbVKnsUtqcHQbJAjFGi2Eg",
  "key33": "5bjG5H2cTitMDucQQLP6nuff4uJ5WLsZBoG7d5VUonH5BAkbwaMgqjqCLhWkVJAssfmkvV8saqdj2pXDZF12i5A8",
  "key34": "WETAPMp9LBpEwyq3hiFFsyGNa7jDpFWHeigr9bobacuQA7gFaYBzxubuCBEQkam9oqAf1UeEZ6AjH5pHgNRFjWs",
  "key35": "4S7GvGHDUcubSZkAe54WNrXT3gA8qeCVWQqe7jAkf9ym1rP9kcX3NoP5UTW37E8XdpfaTVf5TRBaTJWkr2k3dNi9",
  "key36": "2D57Qqk6dzSzvfPgUZPhjjgcsL5SXD8bF36LiffMX3Xf5wFHBhXrQyaPkDhMmndbuipMFxCLteHpJGjciyhQSdHs",
  "key37": "4WVjGiGJ4YfNstcdqEwwFhVJgm4i2oZM1NaLsPJWvk2vB5q7r7UYY7kVQLhcFXV9KCd1JZDzUdADGB7Kgk561JoF",
  "key38": "3SHfKWH7gYUjv2Z89K8Yzeswp1g6bncqH274gJDfqpbqtUieYMqkfH3Ks44Qdh2FkSAc5JprQDMn6kxWMpmBjeqn",
  "key39": "4ABEaxNVHoBzoNegYDaHCjMLwsGZmV2zJtrPgH7Z6d5XM3SwfQzxGacx6PP2eCNSAMM7fbHffDckbPWpLCYg88jg",
  "key40": "FurNe4U151YJvc7NJrizTdReNbDz5H1htzZWErGPfKjL1MQWjrjLd8DDM4gPeDuBLiPTEmmSmrhz9rFPZTKrUP3",
  "key41": "XXZ8wnXSjZDFNuwEWS6XjcPPPpzNGvCVTUFgRM3jA5zQSg4KVhaXKWM2Fbe7kfMHMBG6tj5DkBu1CqVAYb9xhYW",
  "key42": "4U7w234mupZhTjbbHPoa6ay2nVXALtJfxG4xRUL6SWvyc3zpm34ridp3L56cqSgnSmWbqZ5nhvhUM8jJ59tZQEzR",
  "key43": "3dTNFXaAmK5AWVaKsaHPJ4R7cWmmZnypmBba5VNLZi13iXmsVT1myQyHffXKVgYQGyWvtVmfBLk6z8vMq18czs5C",
  "key44": "5ujHAP8YcjUZxRWycGiYTrcR4ztzCrvwxKLrbHbajY19YDEYA4ArQsyQ3geqg9ScqTVvq6Qn8dcZhLDuFbgLmkDj",
  "key45": "3PizdijW71FnCVuXvXupdcnC2jr1vSgfHrYmji7xpbjyPGduJpRK8cMgNsftgMHV51eYWcu9EuL8e618izqRtHW6",
  "key46": "3uQToSoE3PR7ztkrDjpJhn33LTy1Wz2qojoejVqYKp8UYYY9nRQDXxQ5Z73NJeL1fg7Ujv3ZYDgv3HSBixLZQKES",
  "key47": "2pDe4UapLaQgNh518uHNZiXdviG6Fi7agRBUNWNcTGjKDeNG1SAMyrrbVzpZkhkTafDNxAepR5ziA79JvEEJZvHx"
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
