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
    "4ptM23dNyiYqmYBtAxmhVYjTPNRAQuEDFwnjTZPVYezoWyhCbz8aQWiieAUGDCeERmTEx1TEGvipxc9N33TzdL9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D3zj6KVBWoS4BB2YTAYgJNwRXvyE7EdafKTZjs3zDDJxKeiBUPKPmf3yN4AbEfbM6vNii6WA6F33aba8hjsPpMg",
  "key1": "2Em3UiNJYtJftCiUejtrkqRbYR83fQch6PhedmJghKHqFr55WhgXcHXKNEUH3qxPHPq7p1N7hYDnXnznbcX4nYXo",
  "key2": "5NmZ8NRGQrpDpUBYzkqCuf3oGzGhE35g1koKAW7ezC2LYDedxJb5HDUM4xmxnaFBkj6wkMxtjBQL1q9VR9MQHo47",
  "key3": "7Z6Rhc6mPacqWwMC7nKePsamtsr8MFw8kVvGZSJgw9xd7puoid8Drm6LAsXP5sHsDDFJVdh3oErD3BqP23FMwSa",
  "key4": "4PURbWN8Bv57f8P2kJDrCBygTVHfGpMRmiyq59Mg9fgnsPRccu7EpiPP3xX9iRjYim3M2p5fm3ZL1etQH6Jz8c5K",
  "key5": "VHttem7j8yu8933gbQQRF49o3BX5nbEW2W3QtuZxLBeXLoSWZfpur2ebqHuRFoPBtEiwTWnEZsxdy8hJ46xp7RR",
  "key6": "3UjZGCTX656RnqKBTasiBJqr8UK3qRd14S4fsUmhM8we9M9NkzmmQzWrL68uQ85HED4gsMGctE1MoNmEunpeeR7x",
  "key7": "aANsjhXsCJBzqXFvPNj9y5iFnbCP4xViBZyY61b8bF6DHCBW5wK219hFtJ4XeNMDDnLwvCfiGt4Uc3KeCtZWDFc",
  "key8": "A3iUpMQ87K2JFkauG8BvVJtYcmqbfkT69KysXEniDohnzvatCadCAR4Lbjmq8hYW4vojGhVyiM8Y2iQqxbCrsrY",
  "key9": "5zxxGeGBFnFR2fefHtefNjeULpFmcpwKpMHm9QRkAqevUVR4A2nqMikzAei1cFnn5RjHkztKF8aFD8NMP3pe84zA",
  "key10": "3nrqLqoK3UQ1QCHebH3zt149pgJBA3oLCpb3xGPG83Xeqhm6FqbDHfH8a1GeaG9ek2WbJkiDoBMxTvvXdTrZLYNg",
  "key11": "3GWX8Mq4rrzwgc24696585rFJ42kyVAZv8eTTm35AseB5Q8dBi62RKdHK6mePqqrRh5qsvqyFnkvzt7gSsfjxvoR",
  "key12": "2CRpZR351UZDrq7UFJztjPSnpbmRcuca9rrt6uzS8cPkVNXYuGuEzuASL9c7nzKCZ5Sec93Z9SGahb5ssJc6rN8n",
  "key13": "4hsHbLVwzRctHUMbTvXT1NyN44KMUMRKDFvuEtjtSyrTDPTZzh7XYbKHJUMw7kquuwHViCKU4GfMdmjUcJbEktuk",
  "key14": "4416rwuuhcHbybeFcjDPKifMYqGw5XB2FGmDcasST1DX9krHZuggL5BR5Z765DibEY3u9ms24agBc1YphQNTmLbn",
  "key15": "2x5QQMKu11gkCDET4kgWQBzaGmUmqCrJy5N37rtw9Yj7LQutR3cJzppZ6q6kK1oQaBieoyxNZi3zZgysY2BhMEhB",
  "key16": "RtkPUd27KeiqzAPiMNPJ4AtCf5qBQCDBP5XRNULsiUfBFZd6aF6eRjQLpXu2dyeJApRhsTZHqwiVUknGdb5Q53u",
  "key17": "55qMeMf5tmEEfJ6YaGZ55SMPdnXgJMuwcGHwnStm63LDBbba6hn8ZaDcZvBDTmD2t43vxswPpyWXL7USpScFMn7B",
  "key18": "XLmpRS5KRHpRCc35AEd18WJfUSUz9mP9zD2hCSU5Lu7eRwptpZG69fiMfS1vskDDL1zhCTwd1WCv46aSFeKk5gL",
  "key19": "2ieaznMERxt6Chj7P81cJJFiSrspY2H7PnBD28qPWVMcx2cW63GQeJrAZ4X9SgF4cQQPYeMhTh3XGEL4mqiqDuaP",
  "key20": "3r7fEu1p9VTQbXD8TMUcHpb6taCiTEQg5Xhr2Y4SnmS1792Mou1UMkKpW2UH3ojw46yFN3fesfBtb1brpXWnrNjm",
  "key21": "4HKTUWSM3T8qKjesqMeBXhfDZhZ8fGxn4qP1MYFvj1X2KDFkyZsZw9sy3xuoguvmVHgQDrmABcDQxpP9WByhn8bi",
  "key22": "4iVSBzGNa3k6q6CAMuTbAy9JTdq4tJhiPiNtpCkPViNRDrVn5kF5ADZhU8rorknodsMSrCK6g4KMf7FNDeJCQAD1",
  "key23": "2n6WNmjEc2qpjNTh3HB29R7DPdLQP4UsGWESewegnSqQykZ1T5pEDruvh13rKr9PWjHrvQkcP2hg1sYToFF6xKi2",
  "key24": "45mVYXgpe4AScp5eJ54wvUKZyVxrrNuUq2c2Vr1sboDAGL4b2aDFzUbNRTu7txYBb3NCgeaW1E2pgFQ99fNfhGJn",
  "key25": "5NKz4QCsXXHxTSKAHBMaMmr74fR89XoW9au27rih1g7Nq5gyCgehRCMyZoJN7hK7qrHtGXfivLiEF3Db6q4PZbqh",
  "key26": "5UikM2eGiuyZLwu38Y3jfh5sk651JYCNDZ2CKQXVP6k66DFXnLbgmSFczbQPrLwwuHmzqNtVZiWUG5PxzTtVjMWo",
  "key27": "8SN2trMtz5VzwyVqxZdZKc7rppyfLzQfGRFDw2mX1fGnC3TEmRFCzfqrWv7ShE7DaNcMrjb5tA38EyQBRf8prZZ",
  "key28": "oFLaZSvFt1fmh3kByqQnjaSB7GaFTuxd4n66QX9HMr26Vf51yT4hmAB1pWemHBfVCnNiNNeaRRR62d2R1p7LtEs",
  "key29": "56AMZ7CgdCfmCBdkHepo6YNwqENCbmYri2GhUnjFhN1ec89xygYVU6gZBWENPBAYJdQwCU2utHhC6sGgBmYr7KrP",
  "key30": "2rT6qjQJjr56W5onj8Z6gLc69da5TeXNCQvrtSDwihocrhj23wxqdUajc26dX4fHkX8TZZnoAeftUzxEmor3341Y",
  "key31": "4HqtCk9dHVFB3aJhwjHvT5p7GhNYAMobqMSxPHESBFhu8xq6danwGNwfaHAs3RKtacpTGvzCNLxi8NUMAtGg3mx5",
  "key32": "47hEs3D1hYW1cJmy39MkLoTNMd9GWToMt5CiHd292bTZEzwN5yZfLu5PKgH66B4QHrd1Mdxp9SJrBkgYzq5EGPsp",
  "key33": "2ndnJREsNDGerLzbhLt9TxeXPvHcdeqpjhdKw3WzW5EnPd8ZDwHwGtfrWsdpF92XgKJd6ai7fJSvh8yNtBVJ2jN2",
  "key34": "4gJQvsP6iJBWB441ffVTtH5a8EeowDDQqgp9LyGE4SS7iaiagTktK6ov2C5wepq5njXWfwob8Zto1S7xmYWyHCwB",
  "key35": "2rtuEZnrjKUpeYUcxnw8LTSGzQtKDLf4BwiwbkU6wrUgGbczn3aLnR2LhFD2zoek4UgJQCLdo2DBnARvvEGKHYub"
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
