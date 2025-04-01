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
    "29VGKVAhMwsj947VUW2LtCuHnABTLRywwLmHuTjBGuYFBehHRTBk4HPzLBCPPnyeTxCuB3jTxjMf2S9LBxmhU1pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L6vAwy1thR627xSf6B1dH6Y2x3RUFEmCkAqxTm5fBpSbhWjfroMcLwcPB3nr2bAiHjdVynNEzTPVk29ZJmyRzAM",
  "key1": "3Kp9vaBgZK3g4NJiEeooVDGB8EvszgA1ph5bxfnj5nb45Jq5bvSBuAfkufGKi3R48WsUnCdqxhDvSRw6EGRYdi97",
  "key2": "3FVS9nt3KTBEqKtjuH2oVPxorSXfcTKQShzBYgYuPYQL3A4Foys5mtbzALWRriTcxPkRqCfwiyrPCAg56UmAGetU",
  "key3": "1s9REGJVWTibHk5hPgN3mzw6GecSm1QmvtuHWtW8dnPKD922WtUe4nJTeo9Cobtg2ZTMXdxqczeP3qwNRJkcQwp",
  "key4": "4c5BtGKmYd9KvgFp74YhrDJdk3MHgwKLKZKi8ot8G2CHVbqR4hs84RtaG98tx7aHNBbqERJKjp7VdqvFUAYF9jab",
  "key5": "41Gv1wQJ2Tv4p9AMyMsgm5mMcNUsE8xRL6Na7yUGH7r36jfuSqp2bkqsEMdDtyk916x33uJwTnEV9yWzLzzMEGXE",
  "key6": "4wAmS8i4f2eJaectq3BgajA3VzSUjAckNoi1ipeq3GCAyck82cM7nh5fSkzxBMgmh9ph1JLWaZA8kuMBQ3eX385m",
  "key7": "4WyLd7myD5fSdosSj4PM8TNYjsgRrFNfH1vFkH5Gwq9P35fNGbbNjiprwy7C9MAZDtNaArvgRNtRvg9rBjv9FqWf",
  "key8": "499PxmXTgibChXh7GAi9GGFb1Ff59opqdiyvEmLzqT9v74oiygEnN87BQWHVfULiCY7wc679SSD7N4D64ptU9uhF",
  "key9": "4QTXMvMtXqBnwkaRjdvmist6a9Pw7ZnGNPsviBYZDBsfB9Cz4YifsS1V8Tcuoq6qUbttxMRRaPoQYyFZc4gSieW1",
  "key10": "3uChYWHfdWqY1Quchd1R6SHJ39VQWpjDRNkZZEZL8QjziGFhtVkFWcCtbEAUkzgQGjmc5dcxSCopCJszbZzonN7C",
  "key11": "3SrZxzVEZea5WSvRS6HSCxG9pkq5vG6Ft7aCvpek6JMa4A1CLb1VfmHen2UFeuiGGXkDG5D2hTUKRbWkUhZAy4Gc",
  "key12": "2oSbwMuzhNbXaxk1tXxwKUNuUvqk83V9GAELWZNP4A4ohVfZDC4CVSJrAzT8kJt6uZzwrWs5cN73xgQnJYxuP2v4",
  "key13": "32JnvTLSVjcVvgkKbKykQ4vNUgDSka2S4xKwbmmjg4RHwZg5wqpmhZigkhAY8LGewwnxWLv13BtSZCQFcGaEWQCJ",
  "key14": "8U1eNR3qtD6tzyzDYPUTXigL6UJ1BHf29EpdkTvS9w3NjYcZvPNMffDv2MwXRVTEA1L3nJwYXTnXhqPaV7fFbiE",
  "key15": "bTeQZKmxiRPFF6uYMYYedw4UvGp8KTNUXDgt9iMYpffekHPitAVkgsqpCugNuLfVHJGE8Fj2EFDXbhrSWdh41nK",
  "key16": "3nuwkLPqrRv8wStZxD1njZD4DEfeiQEWRNFLmi6WPiiPa194eoG6cvDoy6ZZvqzySELVCX3LwENZss8B2XATuGy8",
  "key17": "2S9A7qWywZNTx3cCAc9p8fUu9Ww6PRaJehSMEe8zsAkZ4NyQ2mqZmK6WTHcGjvnRZmaMPfdR3zoDkGNFXU9ES5o9",
  "key18": "5d6HTcbUw3KEgokUteoPWeRisGs412Yur8J4hiacK8LHTwkqHz2WRwCfNCV5mUxmwXTakT9y4gHD3MKQgzgZtGL7",
  "key19": "4qHiRMeMgoQeJS5HqLDzvEygGi3iYYzjFQmDu9oiPLnHbpatwEwt8SuMm7d4va9ArcYr8pTg5Q3vaK8WWa1kJQc2",
  "key20": "2nnBFfQfddNQcpSaXh6hsiUx4aSL6qre4hwp7hecz1qcUGB7wozoE43FMb29MttPwwEJb9rpT99ASKb4JrVQJDyb",
  "key21": "4BMAKj8CBDaNMb2nb9x3UuuCJxseKJdFbuHBrjWQqRKmhn2DWd4jPPxnBbrVdH5pZfv5THn7ArvritMdsS21E2zk",
  "key22": "454TowCSQTQ9EtfojdCia9DCh6dfMg2Y2vUMz4BpGwWsk3hPRiyzS5TGzvAchLC26Ac9kujTrSTcGLKzF5VN2uN6",
  "key23": "CcmWAcpaTnus8fHdtPvH9P1ZtKmFD4dUpzVoU4y8Jji4hUdV9tFDqz9C2BBZasPSZBrUEDAE94SrN6WowoFgL7v",
  "key24": "5LcCiCYgKCFnr57sumoEESgS4bdi3sv1P13WZ2YvZ4KLyyEnioX4FhtEKhyQFWK2xZo3PXQk6XtVdpfJC8U8jNhT",
  "key25": "3GZacarzaWHYG9AgXfjx6TnMhTAzsJvws8RzPBwN3YmGeLH6gzWyVkF1xu5Nfg67KrX3phe7ieQTG9qYCB8pmhE3",
  "key26": "jT3Zg3FGcNiACzEwLZnKw4iL7SpNrYU1K7mzbuG9xkRM8SJBMPM4aB6vjdg4zPw145DvyojFkuYg7QCAHPgBmND",
  "key27": "5Y787PLw947vvqRuMo2xYEFCLp8qbyBvrairJrkKm1awiaPzwjaRmw4tBQoxVt9q8TG3NwkCmM1ex4fpo5CuzF3K",
  "key28": "4zbBkbvpsDvbZeqCxAirbyCKYKhYfJGHoaNqtRbe8joDB6VT5u1YqPtPWhLaaJWYKCbhwfhJxvp8ZUiwQUAyhsg6",
  "key29": "4cgcKZBnKS2MMhJeoKYDcb14R4Gqgz9QmNSMNZPXtZgkHgUG7s47rAHETfXgNFvzY3cH22D9keU5dEzmPVaJMGDK",
  "key30": "KUFebrTnHJGQN23tiGtJCog4PZfa72msMkD4aUrGMNaqn4fokuHXwDyDfHdeLnnbw8RBqdjJCgAeQDQy7LYQBGc",
  "key31": "2oAsxrVkuXQdcH7JqXPPfijZoFTRpvdDfNWYMUafNPEBmnH8MqQwqUKejujJ2vdkuZgYaAQHupyEuH7ayUjUoaRM",
  "key32": "2wQvwYwGFA6o2SvaeD6uNcuHa8Z1LpgDuQ9FxEnhFokunP2BSor8XGvceANuDG1j6Kb84VGYhB2C5nefL6yGPCgf",
  "key33": "3DJStHYWFXSS2YVxb54AePUynvpzTuN51wzcQ3rNQrnzRjTCeAe1hwaDQvtSNEuQvqaadpFpYiQetByuQMGqmLz7",
  "key34": "648NJLGNpgR5HD173rw78aJvPxvLwpy64mreukzXrf4ex5oWbvSS1WsAm6CPpnYZ17vEcwcx3hwidh3SZgexDfDB",
  "key35": "67VK472iPyzZagzqTkgo2JHx3ckkCzzz2REabnibUhztzeQUcHnGuBY6uTn3rdAViz8EJpHXQpnco1toucMkrAKA",
  "key36": "5KMayRWkNGaExzHJoUvGJgZuCJcjsyMRrQUQbbpdH3AK3MHi3wkK4maKxMT9g75FxqDyoWN5EW861no5t2hNQrF",
  "key37": "89yHyXFnNMYVVUFLhoxafZ12LCK9LyP9mQSdwkks6JuNhUpqJwYbiVU81bRXZMAHjQDyVroKXurf2SJCbJMR2mj",
  "key38": "2E12EagG2KLUSu2ZUDTZcqSxNVCmex54pHgC6yGKibK6i8wscs6bb7Ue8RvfCxdeQdZUg1kxhrGSYoSJ1yaCFLcx",
  "key39": "3GyMu3JnfjUzG1C9PhdrX9EXXN6z2M2N4jEqWBv6xbZC98FYaHhYhQXE4ddFaTtmiHhAgKy47n6NhQZuVLD6ppQb",
  "key40": "5QuBur32Eapmz7qLEdFqrmqgFEWdurZkbxySrAbLvd29RUxohgLbRGd2JZXxzZFPityGeyVLqS6RJKdBVUe3aMvj",
  "key41": "3dpPPYwHWmdE5Xii46VmgPxjSfXAAeHcW4fGPouEDBbYjr35SV6SHYPJS3t7ZFSVFy7YzcTQ1sntyKfEUouMVSBV",
  "key42": "4Awbo3F7fbxAU9FZj4m53d2TXJDfEec1jgmVRTYMX4cQn3SCYDCABc53eaTVwdKygZXNN1yxsZWvVgePjbNtaC2P",
  "key43": "3TRLWCxy7KTkZpCEaqXWGMc6ZaoeLAgXxuiiFAfPpZTsWbSQfzgGtDtL31vPLZgEg43S6Us2XjRZzGckSSwiHtUy",
  "key44": "5cmbJuMR6vCFRJXY8EhviGuzn2gfEq5WadDiMfB86Lk55eC4geWJc8bAyWnpRAMRQkGSVdMEuHD17CwGaPUgPWa3",
  "key45": "4fckVgcMvX7eniiJX6tTgPbbqWJ8X6Nt1ep7gQVH95QhWdQYHPypPCigLV7UqJqrA9TPzziy5iN8K3P47S1oJC5E",
  "key46": "2YXpxnn2zcefCET5mYiGPHivkWzT89cBExq4h4RhNp4mWSafUZdTk2iH4UvReoKHrwCaEiJXn632SPWPAY2XE9Xm",
  "key47": "4HUb6opryL79wjudR6PXn39rdxQyUndjosoZavShAB9VBgDf98EefegyaN2MT7HdRaPwQTP4Mc2JEZ7wGZaa2Wse",
  "key48": "5WFcfiYTJNfQjzHwwkB8KF8KaBNPN8v9LWvp24tLS1iadhxSRavEL2h1A2Sa4Yij1kf17mwB6vmhNR5zZ1CNXFBy",
  "key49": "4GUJL3TZvHUXgauLAvZJ5PfuXqjzCkVJnpv24XYZJZxtU7dZcMjSqT3AD8V6L8FFBTSjTaJFNECScd4oqE4eZuuc"
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
