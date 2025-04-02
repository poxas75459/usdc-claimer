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
    "25n4GgSXa46hybY9sV6orYACevGqoFe2ba3g2Kfs7UjPQyDAf6jWb4YtdfbyXqjdfoXmLn4g8ry4nHvCh6LEYmYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PzdxGX9aEuxDQtGYqMedZgsb8Q91SbXUmnMbzKoh6CyZ9jnSKiLYuWodD4CTP3uQMz2wLCsT2djRn3G7BfBpRR2",
  "key1": "3CPLoZU8CnusMCeG3FYji8k3PisnwZaYRTAqbtJpA61fcaPxVKBCey7513iHM4S9Kahk4DXRvKXmV4Cr3tC2MZyE",
  "key2": "4xbPDeB8XEM46sLW4r78XRTbCx3mgfqT4cFbkz6vNz9dFUic4covJMJs9XnuosNKWUKp8yKq77jAkN3gsp1Wpy89",
  "key3": "4kTAVZF9QhssJuN2FfrVVb9WzBC9KxpNX3KRySAqQCghvDu5UsgEwSH3GfwfGFwVzLV9DYRTfosbHUo9QGNNvQef",
  "key4": "tYAi9FkNNseYe64Hpo1NnDgz5hDVWW1fWLHeZ9UCSnXo44HUhUu4CW3NzXXFxmkfY1tTo3ztc4N1LSAWtw6qU4T",
  "key5": "64sHgkhQvJqb4bQ9CC5NAMXLwDUjJorgySBEZDVDKua5RGGrL2pA7pY6GqZ9tpaQwXdyej3EeVhgyg1dSp5jiNv9",
  "key6": "46zb5nRKShsvpiR3anG91RBaz7ibseSz6bu9GTxkKJSeNpq2EgppE5CjJSkpnmvtcYpAgqRx5PmVjtBmTsCZtq3R",
  "key7": "vzJU2Cc8qjreTRe9663jFD6Sooou2hYbpj3MQtG5GJLqbQYWTeDuPv1Hb45nKX1va2ibPofBHTWxj59Qmm29pVk",
  "key8": "4WucUSBJQ8rKsLrQXWf9CzfZMQTtzb5nBuwKkL6xsSK7vmCwfY4K6Q5azcShWLCwvM7LvhrB3sfVHUyEGSFzuAwx",
  "key9": "41cWr823k6Qf8hmCRc7a5To1gEobTgEWMjKB5a7daJJukgVYqRqkv1N6iMKRSY7vNLmz7Tk2bQA6SAf3tfPrqHtU",
  "key10": "3CTsfend3p9JQG8KNNCk4NFMwKCf8gH1VVG2xmRnyea2F9G1eAFnCcTukZJs6EDh5kRSACXRZCjfE3mfeenEzfji",
  "key11": "3S7MEXYigc96xUdqRznAvgtxPysw7Xzxiamx3uoC4HDmhaSQWo1mesrSiqxupxphHu9ipWxa2H5AM16FvmyLiRgA",
  "key12": "R66sRL7j2uteD8nWiWtZVakfgUXjzRGRrTbtrecKdpe6YfWG6PR7vnmTfKtwEyJpg3QKcXYFMLmWkkdpdMuPmdM",
  "key13": "4qbRd3Qty36Yzxc8JUJCZomKxArwDFm66MdZqjFNkCEpT9L96svDiiwrc5CyCQAmWpeYcraT9zi1t1ybG3DfrurK",
  "key14": "CxTxDyq94rT2tEyYsnQhtbsb61ZqZxk9hgvVKqGidbGn6vdHHpceFyBrgwRtvvjxhyEdKeD6EgQ47uAaA2oJXgq",
  "key15": "2CJ4C41rwsMyeMy3MnBUDwK85RabBuqA9xnQYow4g6nncEmgWpmKtKDijtUMf7EojifwZCiESzGecH68szgRBLuj",
  "key16": "5j5am2SYkViyNUUPRQtDHp8beKWqo1x3NG8rEyGJ6uqbqp8PPzLv1cPx2kiKmEKc1GZFcqBe3LYTmJnDBhsjzJdM",
  "key17": "4Puu5f955BCV9ytMaULzZ3onH4hny4t68t4FKu26msPd3mVNLYgYbErcYyGBaDVRRW2ieVeB7ERpPvm6Dqdjspg7",
  "key18": "3heVU82Unz14fYCVQj6LSXMjd7oapbXY7w9tEWEAcCg4hTNs3TejRgYyqNR9ThpqXdPtZSDEL3eWEpoGjjKKnDJ5",
  "key19": "3wVQiYDBRnAS3KWgi8HxWJzBoouNCEtz7paG9yMSPvc819eRTpNKb75357hei4yhMazDALbfud9HkGUSXdVZ9Ha",
  "key20": "2iAGgvQ4f78x6FG6GZ5FbvZCCYRBxhNjESogYe4PFzmESyg9LPwpw6hdE1HKKnbqcpcTZyx1F3EEbYxvFLYWaRi5",
  "key21": "3JALKioTqpjw8MJNZp9gVenmPA6BKusCrjFSsjm1cPejfekSBPHyfDySCGZj7FFYVJodpfhQYGSnuDcQPPTiYaSP",
  "key22": "3jCr8C8ANS79c7UQ1Ei1xfVHtgPzutBfqwxAaCeFpfGkvbXnMMQFDCSAoPdZ5TG6pWMaEzxQwY39hahXEbvyockT",
  "key23": "5ofzNxWV5VBnXzJ7t3LMcdcrobGrbNnu5iAu48G8GgZVe1fF1TknHJifL9LrZt67y4i4SPqX52wYPFK79uPMNHGm",
  "key24": "3HT6XdQ7dqKHhDCT58jTBmc4wTbZ6yqbRdUfVWE6eci1rQ1QhZKFDM7gDgPxjvLQN7aXuymr9souBWf8XratiLJB",
  "key25": "3JzCXpVYvELUu2KQLJLGZhhsTCV8vxPbGnCDfeLqLbFrsfed7wQsA8AeakhmPyp24TFFunfrF1dgPbxSXwg1RkP5",
  "key26": "34t378ANwLG6wHTih92oANTrCRNpu3H4utsmDgsgxU63rszQRN8g1V4EW8qvxREx9bCu3woEhptRDKb11Ty1DYrm",
  "key27": "K2KoNKFicftzowNrNDUUD2DEWS2jYkSaX1W8qZVtAAVBQ2XrvdNX5jFkWcQpmmk8W2tpAKrwgGpyLNkVN7KUWDh",
  "key28": "4nZht7yLPmNGvxoiSFz3xw4a3UEszrT7rm9P3pQ3vNDhLDFRJAmAz2SgN1BrH3PyzkNqj3bJ8kXTWCinW2K7F2Xq",
  "key29": "5AjoerPWULwLgs9XDXRtgussGf6cGtVG6qdBFMgvTWtBCQpPyfWNjyutetfMERaUeWDNm8RRq6Da1JQiFhgb2NbP",
  "key30": "34DBhZ2yYQyDnjJT3RimFBf4ioCfUmL8FgFHGDRbGeptwYEBQCXeBK5c9xCS2AgkVMzSS4JMzkosE9zNDczQgPzs",
  "key31": "2VikhQxK7HkL3iKdZ1hKKp3CpvsQ6gEuYbUry2GGTrwkt5R7sMfUP3rxmRmqj6rAKzwyymDMP9utG9Xv24evbP4n",
  "key32": "54jLjH7SMdRbo89t8BeWrbt129isZtrD7CTCay77TGNNeWyBZepvoqneefqP3LQspsxZi4TMJrEnFK5a2KUm5VkL",
  "key33": "s1vMWRNLUShNcDC7TrFRuFTB4MSvPDDoAxzDZ9fgE1qhrpCrAYMNHVpAUKpjbD5WgbxfoJXHaz57NYE9cdH74Kp",
  "key34": "4aMtjLra24cEpFSjCJD6YYGQNdVLVhP6B4j1HoVpKMbXa1TubzCcHR4Vkodp2a98z6sfdRBYA7cXHGJWjdF2mnHT",
  "key35": "435oK93gxb9BBYyJ3fHZmRimfnQzfjGLojU7z7mA5AU68jxzu5t2n27oyhETmAdfhenWdn5FkR9M9vKH2icPP5QF",
  "key36": "53wiwufQcPRYWpuYaJipVdp4RJszGkGgkkgMLnzNhTmSqLRCnmWCoopfBb1PCM4YKH9Wf4cg9qc6dEibMAF55MLt",
  "key37": "3MQ7Uk4LjJ7eQvGxtUY9jar7PQpfuWNE8du652JvRYrDhAiyjSpPeWUTp5HC2yopqa3hsS6QbEqTzCiNhdH3T2Ud",
  "key38": "RsckKH4cZYWzwMJyw9HtGa84uHyHDErJppZi68mw31xVJTya3oqVCP8xgsgixsMr5ZPxQah4TkdzstF6wN5jjZ2",
  "key39": "3b9ppooHeiVFGZuBehfhCibi2DYZrcWK2TMvf99boXCsZx9veD2saoF2MQLwAC4zPxYoeJfE38a4MF4ijBYkvYJ2",
  "key40": "5GxYah8XRb6DpRjFk8CvpN6AZQxndqVstAS1tC44mw39PM5kPV2iKQFuv3kCLZrscWxoUp2rXuF5YZed1rtMPPTu",
  "key41": "HUjMDn2QkYYc7XXKcsPgiY9f6v7wj1yPF7jAgrGDVwQjmfxFyzfeNQtx3XRSQmzALs4JRwjfPWVUjJBDLHLgFqA",
  "key42": "4uztYzkRyqeeJa6oWoKXXzm6MYSToXKmvVXsmAJ39NSAbMHsRVLk1tn8Jst6riq7Zb2UPAnKKwZk9rfkvvgzghDH"
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
