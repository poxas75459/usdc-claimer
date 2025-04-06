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
    "3yN7aY6eqLK9eRS17Av1jCYFmR9ZRwQ94eFYdYNNavoVjHtmTHmXUdvM5vm1Fxa92b9eowU7ku3yHTpRxm4oLunB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39SHkNqUY64xVTzNUwPCiPZ4YH6nQYc5N7n17BFYcjh3QZzN8voLhMWv9DKsAEkVWsoHbpY5fcJ6hq87mTgWpW4D",
  "key1": "2BxYbH5VBsHiv6siJHmL4t1wEyYu21UBw1GYJsLmYxZkhr1K4f18iTGxpjhTZX9CyhBrt4oPQtQsnJ3gFteZVLXm",
  "key2": "4r9sBGRrmcrMyNcdqeYkTcXEVKJ7wNP2SmgZFTugaUfGvkw9LUihTFQFhSbbLxmG7KhKZZssty8NnJkWGzCPYHtZ",
  "key3": "4dRroBJfYuhwVvSd6SyG7UbWhKsB3RqjQXBdSDX9ZYpTu6kepiPFppYSAtYRapqVw63afo6mX1icfsvRnbHmgWV2",
  "key4": "3gpdWVVRaoAKfRWhd1KDF3jJQ6dmdYfTMjaoHm35bRMRKZBLUSZG22yZvr45pQMrDSd4T1KGTMg2Dyxitqn8AQ2B",
  "key5": "51mNMk4FaKQbmf8KVL3b2k6Q2xJEk7Bxb9xnffxUBhnX98X3dRkWpFQc2MPMhVRQEoNtDyieY2WFF72TqrXCdbKa",
  "key6": "66puXUAew28NzXLdzVpGLPhgWErSaJxipeKDJ3ewth9dMs1dKwzpa9oVNGaHr48YiDqWWYwVxz2fjucTVpR6rU5a",
  "key7": "5paC7oc3zmg8zegpzmbdrrmCyGJqW9pUYSEgbqCq16s7jFnWtvujEzz1sbneVY8N5X1zHCjmZCuu2XeVMseBu1ag",
  "key8": "4RujysmiJNbGoaPkqMzTGCdCTbRguWvRufh1vTihNqraZyXU4Z7Lwbam6X1mcRQKF3YGeHCHGw9Lk8nnkBFrwKto",
  "key9": "32TYSRtz4giA9nWRHSbYZW71eAkX4Dhyi2mh7n8A1xsFcHDHG43vAeRMw8WF35wzoGc6JkvWahRu6LZFcmfg9YKq",
  "key10": "59CDGFUzGaw83FUEmwYz977SKP1pPfcY3ojA54dBZjFmeoGf9Sdorww3Ku6PnghAbABL6XjnnnBhoWPPnAqEk7mA",
  "key11": "d3jJMeGjckfaEHtHudpuHAbz6LDGY49sqdFJujQ95TuUpPbxFFUmQ9ZuiCjGz6UXFPbteVrXcwq7BWX8QikAL6E",
  "key12": "5EuUEH9aaPu9A8nTat7vmLdcdWNzRWYMfaACvYN6GfwjLkaAZ1DTbEHRDkRNtTYDEjMfUEx9CAwH63u7z4RhFhw8",
  "key13": "yDhUPHWjHGmGWuaR814QGHBmPMnYhWErGfwJpLRSuH9P6YKVDbCCLY4ZoNxt9yTixNhqXbHX1Bjp7LjBVnAuXko",
  "key14": "4g79J7Ue3BQmN19gkQWVrxD95cNBWzm4QBUyyZxwnnhMQ36qBV2bdjVCVK4b8u531vpZSgYB1rS1aHhP3xBX2pEG",
  "key15": "GYBdQGLDbu594azMULjKbSaNMq4jPU151j96fHhrkCyX5jWJvtGFU94g2ZVB1dZiX35CC9SsCYr3hqdBvMBYb37",
  "key16": "5F64SaH6oFgjVkb6zctjXoGgRerwsYBz6XfbmTMvaMESRKKBdceoAbWHaM5wxRQ5HoWhuspiPrk3KWD6bsUa9vHe",
  "key17": "fXrouwe6xboQ7eaXF6BDAKZrgtAcd3Eww4fL9oKVZGjM74PL7bj2bwd5VvmQhp5LwspkuK8iBA8sJFRJDQqa1tn",
  "key18": "VC2dUVibFHk44w2csQFRmMTJ1sDCew9epmCw7cz8JpyyZ4zGtbD1LwoynmmkQrTrqoEXHmD1mdr1sUSvjuXihuY",
  "key19": "4qUE2yBU5K38jVJdwUgqhNFsSHu2VQ7m6VPL4uvLVA1CtGJnhgYWshhWaCJ2tbU4pUk4fMHy9BWuiXjWeupAcGYU",
  "key20": "2CNkYcpSQAL6rpufqHcwsyCgR26uuMWK3RAN2XkSqqCnDt5PUUNiPKCYu6pZTvBvwNTi4MkvNg8PHYsEfjJeCX9s",
  "key21": "3xoutbv3VqjXaZF3sRCbCkoBss4heg8KJPmC2EA6Tengypjy5NJ87ZGwEp143eaLmAAh6ZW4uFmY8BQPdqY3deMc",
  "key22": "qRsH8X99w9Kbnsd9bzKtPGz5mbbNBpvWhDq3a8Uwwu8Atc7Xvvdnp3yMRfTXUqrBNibXCz11KgEqhoTks6N9Pkx",
  "key23": "3NPYUYhXu1vnU3rRQj52M3vdagvaThgdu5ZkzMtwBS5zDLn1LNj1uRpSWhvnGbf7BV7K2AC81v6ChDe5eLSJVui2",
  "key24": "2u31mUfB6uCdwiK1ZhmP84rmUN6UFLaYsPChMCkZ8xYMfjcuhhrfV39VGQtrEWZpXS6mNzredJNUXanpybZFuTQD",
  "key25": "2TwwbniohBLESoaVnBT9JTeZhAj6t7ww1Q7R8ws1s4TV9WCvcHUJvwVz4cHiZmkDjLTFnKapM9f4PCL6kG5R6fk9",
  "key26": "4F4Q9h2rnRf4K64LNmNyw6RdXSyqt7knM3TyPQhrAprKRSPDiwjiLqDL3b5TQXtW5Rjsd325vkQnWFeHB8fY14e1",
  "key27": "5AohmXXb4zX7MUcmLtKTiYnf36urEmkT5nv1p4hMGqUrzYiCDK4B4XArT8vHdijt7ZzUfTZ3c5bYgGx2HNaLZd4v",
  "key28": "2m9GKisv23ybwERCMKXDguHkGbint1XBSwUQay9mJmcHj3pKr1itWwFAJkNL42K8YV2QBKTNjavt7NgXGyPCKJ1w",
  "key29": "2VAxCvQJfWqSQ1XS3d4vvifXKd2sVodRdUssY3DixgJmnso16GTXisEp5JfqGpcAuPrvS4jcSkcKCQFetosH4cK7",
  "key30": "xUWBLovixWhvziVCR5Fda49dQgAj6TDERk1HcwcQVJxcmE6MMnQnuqpvXkpnbvNmKd3qte1Aie9SRWBj65K36T4",
  "key31": "pVMTSauhJUpBikSMYWdbUEGWc9SajdUjdhN8twoLjbak5Gzbczx3NZ3Nogw2HSWdhcprXb5XBSXf9F6TfKy79v2",
  "key32": "5mk3kaQLoZPM8WGm3Sry9svasgQkcLBu6HCpHrwAgVHWSq8z23Nmb4KA1MZam3mFqofNQvVQF9tbvqjGuyxxPjuj",
  "key33": "5LBbY47ppd2Yc8ZKKC2Yp6xL2Es2XKfuNTjgDJqZkrpiN52QVf9ikAkbRo7u1p7pjBfaZVwbWPAMFJk2Pxn4y5uk",
  "key34": "46pUaQ8jEqKTmQTiGKnSP17ueJTvXSz13rMFfk5uTFvsnUZGLjmBWdPqFkTpxamrZep2ELUEKqjaqhjbgn36XGq2",
  "key35": "3PUWfcaM2DGRJdkCsvamdvWsCsJnZeBsYMVmwvFH9qAUUYDaiTefo5H1e7cykGxsj8Pi5WhZZfDTUe5egdRcFXHN",
  "key36": "reuR4v2GM9XAWVr1HhQYR7MhmAbSN9bYbZnnLDvEtNRiwUJEJF4UysRR67gj4ziN3K2uVBkKqRMejArMx4r5ksD",
  "key37": "4HhPrm9fFCXH9MxJTAkGdEEtfn6hg4VQEfYoxdvTp2UVagBkzkomg8PKL8afj7jado46UBtnPNRF5CELDbN6fRMw",
  "key38": "5fqGb94qhHGWaWoQiKUyNwko3PLPRdNi7v1eVWrdQvZyJcXBmP5wK8HZCt15cTWN8dHvzRBm4AUBTiA8NhZT9aCg",
  "key39": "2qYJ2SqHM8x7KCxghuV4UbsvFXwW2Lf65Yco4B9KnPknHtsEYGod4jTLSVdp1CjTg5iWbeiRzzp1pVknLQSur64g",
  "key40": "5BsQ4LGSoaD1jqF76jDxnZZS9SYgTnk1ujhwHS8NkvpWxm4df8n1vH5uYM9hgZRpvMksNTir7DUguevcno8RB3rC",
  "key41": "4snBzquJNDXM1hysiTKLroahx3TiJbe5zJo4oKYNY1w4DdwpPfLbh89yYdBp8pq6kmdRrEBR6ERu71kCbCJ9KAxW",
  "key42": "5SbV7CvWCc2MmuyZSVN9jao7raB9ENzVcXMtfkMqjRQ85fFhUJwJvn8AjVh9nh2uiZXzwXpbxS6ktbDePGWGvLpw",
  "key43": "2QoFyGhKquvrdnznD7M4Kvi9a4d4rtEuyf9BTAcXLGwCsyW2S32oGWYt85Tvpn7dwjRwVUZswAtHhLCfFYk4uGR3",
  "key44": "3uu2PzXhSNmFJ155DGHstCG1mQB6m66ydvSu5D3iX83JEuWVJxRa9jzHobU4hmE5zDnioFrpD2QQE47p16v9j1JW",
  "key45": "2mtUqMmzmQGCEwc6caNM5edbMHTzCaDyJmK4R6m8c1oDef8RgskFmzEWFNCvZkzJK5SLyq8hrgxMDwTwK4L5eY1w",
  "key46": "4DiWhgzFjfQRnbkwd6CYYHzkaq7PSnojBJyQCeDBYoLRj35N3k2kud9zkd6bV5v5n9icL11jPJbmJ6xyt7FpnHEF",
  "key47": "DGNXknviHKPfWsv5idiZCHBokjcqYpQaot2VugtqjUp1VDAfF8ZFkwzDSy3Hi5z3j7PDbkuhhXFT53yTo4kPkgZ",
  "key48": "2717cZkTcZY3k9bxxPtrXrwRz1EV5AhiDSWn1PteazG6Eoi832NkoCNvRSaKGWr7WGQ2sqUWprfBjzycCnB5rZNN",
  "key49": "vo27XN7gESw9qH9WptAK5aRjFff9eJRdB5ypAJ6twoTBY9o5HvnZhv31FACsre734VJeQXuRaqquPhcwKLA2Rqn"
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
