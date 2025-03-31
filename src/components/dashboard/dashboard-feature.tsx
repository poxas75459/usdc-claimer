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
    "yAd3bS7P53DvqLGWs4LBnACdDD79EuW98DVhChP155UhHUnka8Ajdxi8qrFQnYwbFduBcM5jTcQHfgxQwGDxEaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkPL2DEYezYZrjQ5sCD3ejakSpRhP8Q3DLdCyoSUHTtUre18EVwLf2NeqxEGWmqzGVEdXuxrm5QqrfmqLs5ckbM",
  "key1": "Hnv1PJyTYHA5BU32vGSEWp7djbYutWxuFkVUN5HRvC3hNnKz5qHMJKGo9RUrN6tnzhCvwxRp8CQwjtvWZas9S45",
  "key2": "5LVmgoVmeQ9Goa7hmoJpeU8svmonCD5YukKbZjoF65NiPcf7maCBdxaR3U3WXwBSNtB5QSGT6YchVuu5Tb1hQQP7",
  "key3": "2x1DCZkT66ir56arfsBjpPfzh9gqeZqYKcrBDSqNjFuQUf5TwTYtWuih7r8PtEoY1qUVBbaySrc1DBTdmPP4h93K",
  "key4": "4LFtFWw58v5wPpSad816L7erwPPgxYJRywBCYsufWZxtuhZ9xs9zg4aLFzwDWZYC47XcRgcFhFFp6qE6KMD9bmiP",
  "key5": "35chKwxtYT8P8VsC9G5EjeEFWwY9FpAyueG1qAcv6wQJ9kKQjkgrHCLXs6pGPk4wZDEPfEze58z7BAUuw1yyVNFp",
  "key6": "5WGKMixKs1XbPgnH3Y7oinYueomKppBQzewntnTs4gkvf7vXznwoyKb3uuCB7amKgSgsfkFbmsacHLgAgsqqaKRw",
  "key7": "YsCDZu5sN8KY5T1pRnGVLWMbrf1XHfQ8pd32PMfVqXhdVhrRhGhrGFK1NX1vRpYSXVBwMDefmPzPf9TNBfetF6Y",
  "key8": "4Xe4oJs5vuZaq27pxEF2z9jqKZvKp6ok5oNB6cKyPdrJzjs9uiy7BBN8VPoY26NB1yHDRFTBdpieTB6kX9yssvSF",
  "key9": "4SpnMZiuyD4aZzvFyCCFUmZhm1eM2sFedJN3ZMPorj2yvbc8AkMW9c4q3KUyd1nqXQDhJxvFTZKrNn6JMxzx4eim",
  "key10": "kW5qLNveJxgibFP8DWxkmBtSetFAPG5e3hW8Q8spBYzjdmVz4AqgGpa9bh8g85nHYjtn3mJLL2aGKhAQAhzEMcr",
  "key11": "5uc2oekafuGUYSNLDfhombFz5EbUUc75AVxMV2n7tGv8GRXwECFYTjU5PxLGsWK2MaQdVMfqPj6WioHAetcDviJe",
  "key12": "3rnVuaZykXqZ1SxiJ1gm3JPoXoccfqu23iJfuLLjVBrsinUyUuHYA1yV9yCiCKd3YVnCsfoy2KGiXxEQvkQfxQCK",
  "key13": "5cQgLXnqQgHyYZBZX3bMyPVU9QkHe1eyt2rYt81eRpPVxsL4LMmSNyxgbxZzFZqeoctrb8AUxbcuPydaChuEFYee",
  "key14": "3QXGWCezRZnXLoiP3jGfjMUc9ZmN6ap85Hmw9aTph6nxqVWS9sZKaV9LEmgBAm1f1S6YYxomonmsJaDKzef9irwq",
  "key15": "2pJPW7MdBy19cnzTAuDErEQUZtxQpVe3zx4msPjX7CLzFH3S18f9aCVEEUS4sLibDRw21ZVHS1UdJZ3TXKso6SXY",
  "key16": "4jLrwoSJ6TkVyiTHuXNMx6nT8sZFsiM6Sh4EvJtqgfuChBYeZuAhVrj5PhPSMZ7E1JYyQHwAPL4ir1CeDFrYH3gW",
  "key17": "233coeFqNRCWkYSkvWSLU53UDGtaerYV5noRBErbqbNmpFH8ZVKxAZGUZhW9uERqEn8UR9xAxhLEpxB1Tvc3iF1j",
  "key18": "4aVeyZMvhqk1wSSLhPUaCoi2PqAaY26kWyAQkZmVsUNS59UoYhtvZHTYXmjZAuQm9LMaSjAQpeqXEYVSEYwkEzR1",
  "key19": "2fzfcCepr3qJkpE1t2MXSpXgEhTYqSspoenn6iAnRhMD1q7NiDsER1Q2ip1kt96HruWoQXwjZuR5Db2EnrhdpMY6",
  "key20": "64x5GATHGQ8B2d5XbL9vM8pC1TR36sEHdADRTtKtSEh4Gn2Y5dqyKokExugXMht3VDxaW9W1VNqZTx9GQZYZzeG1",
  "key21": "hY74vTgR5NHZ9fNq8Y28uVEq9DaUsgVDxDm2wS86uYm87DLJQ1v7PJ7jgaVCC5XNnhWkfiUBaGQz1ReVxhYwqNM",
  "key22": "2H7G8aJrrRM462wWSuCUpXcKEDf9sRuM4baaN8X3nTgcamQ8BFK3QSa5JUoZiNnY1B2bQMjFj6WUmdD8RmU9mi76",
  "key23": "3BnQi6VLGEDMaHi9vGFSCyZvGM5N5jXUixm2ViXWMTZYmS8thS7RURwpVggQircBkvBtsuvH4KytEHud3V9rTF2u",
  "key24": "2tkqWRT7qjtdjNukUBPmWxTD2Y8aRnpPvCjShjkr6Lf4LhR9tsn7G9XSpKAVioMqTFipV9XpZ5p7cArMEtTaFGZF",
  "key25": "3mSDxGzF4PAuhmbgEPvUxdyY6MQALJzbmHF4A947qQDHgj9mwMb4E69d82Cvq6rMiH8PAhoM4djkjNjw9u1AFB2Y",
  "key26": "5qnFdHY3ytndTUhguhXggTNgP61VaBG2ynYwgnYYStK2upHF1nqZUemyKtASvocmpcR8WLADM4vyQH1tHK7zDvUY",
  "key27": "57RUsAKrmV7HFDEJ5FnrfByeojeezadwrAKdnp63mJfC7Lfgcjdz5FaeAvL6iyc6ngXHJRLisgnnoUcJTWV7rJcQ",
  "key28": "5vir1Cgfh3ddFG3LXYsrHBvEgfm3g9HpfS3erQP4HVFM5V5s5wSXocWWAkt8gc3aiDUGaaGDHgPfx4acKVBisNEs",
  "key29": "4oq9XVYLFQYaveJbTwN5YbXcfYWBPnAjW5epuE1Vez5Uzk7jth645s7mUsxL8N5tyAxj6mDTupmrboCq4AD9c7Ys",
  "key30": "5czxqKN6QkQBx3vqVPV5r9U3Bn2RoQf8Mn9po5LHJ57LsDJgGgAEfFparfTZUf4b4XqRMTFgELGw7p86tvzCFYUt",
  "key31": "P8r2ohjFH5aXyJR4tb79WGMafjajBWnhcKdgXioQCBiMSAvMAJLkL6v5hZNVkHYMRYX7xQP64ZQQDGCUdHAJ95H",
  "key32": "3D1j2VTfR1CDADykiFuM4rexcGsHc51RBwb9kqkeZ3veTavKQdyL12BAJxHUST7VreR1punUWzDyHnhMn6F3LNJj",
  "key33": "4GN74FMMnqf8BYHiqJ1BVWQmusLXsvTFJ4hMaTT2NBfjDD7SNWHK8aSKT4zxCkFpzr5KzkBAXALaUgwB3Yo3SyGW",
  "key34": "3mnaQ1YVNtWE99AxQjTpCKGP9RY9CcdojfiEzBEF7FZb348Fdps4zynoLs7KXLAMwDnLQXjZWu7tAbkUtFY894gG",
  "key35": "5UE4p58K3DbxrB83DxQvzHJSSan9UxdFWpdZrjH11u2KEmpC1JXH2REZ8QcJxFNoA9Nr9ExJBCZywL6HusiK1qfP",
  "key36": "3yC3vz8FVM3AkYjRMLL31LwKRMSQWgKtcytpc3WJVZf6kQkYoJchFcG8qDsFixhk2ea8AF7So3B9SEfdiksjB7Pk",
  "key37": "2Efex21j8WUKfAXyCS1e23Wn2mVNSE37UqCg33JcTWnp3B4bZdb1NTKHtqJsV2rJuoVskQ8yU844mgpjKEyusdPC",
  "key38": "5j5aWPNzan4xx4G12u6aaGCjJtGoShjdmoiAXRkAyyWHWp727WCXiYrtewqo3wiC4Gtfz4UFXL5g6ZGbxq3UZccY",
  "key39": "52u7UfaV8tCGTAoxnr74S42Qt8pfNqNH1FShDgw1k6oWUcoN9i2eWWKeZVXa7HAm55JRgWrdXZHfsPBezR55Dm6E",
  "key40": "5cSXNjt1ddDDNHzcmVAX7mM5ERGpCaW6yTGiY1ZAQm6eXnrPsCqsqTCiEPabWGqocQuwHV4CRTUdsKjd8ffqwhme",
  "key41": "4ajfM55vqgJHcJY4LcEqQYzTtTajmyxZX4Zd4MsrPLNvb4aZf9sKxsX2htmMVsfzrdRJAX5uRRfvupvzJgTxQyY4",
  "key42": "465uBia3ttXKrQhb222EuvKsWTLWim9AawHwTzh98A26jz1mDu9udPTv8Na5ibpzvEGtSAm6cSqDPHY6eieLGZpS",
  "key43": "3ot1Q4BjahHaA9PzY5tW4rzHKA9cgvLTMkGkCyPWWz1PQDNX5hNhJef8jC3Etsu4bbucbUY6et3ib5c64TRm5hEs",
  "key44": "2q6J9YM8aLjNUxi91QkKJ847nTnxvKQ1xWnt8xTQxL2Yhm7zPB9CdUSEMJFY934p4xDwrCgvoCkP8KzGMTMLrdSf",
  "key45": "4PsmSbo9brxjJKZpVQ53gx9fY7BGxrzJaWuwCsQzfqbpNLWScMcMNQwVWxjB5a1xqrq2d2yzRvUQ6goEBkLi9unE",
  "key46": "xbmvx9xzwVkyagm6qCGSz2iUPf7xkGBiohVrLfzLQXez8qheajVPWbxTvh52KkRK9Cw3L8aGGuSAFFjCW5HRp1L",
  "key47": "4SCEVkqrfAxpmiNksvov9DNDqsKmUSfZdPnrx9PmqYq1Rc3nr7EPkZV1R5weSaYuU58FSBspDjNZrJDCnzFjmcgL",
  "key48": "3rzBbbArxFv1QyuogVuMxCyqhyNzdFMaud72KyGGLu818drWoZR3GTBm7nKWGbUKf94ZFfTDGqQ2zHB2BPHr2mZk",
  "key49": "KT2HLwABSd1CwMbzYdP8uNn7e1LVyGedZ8yHT2mM82VVFNsumNkLwcaKBwcrxtzZnErkZiTCcEmMS2TgC82HhoM"
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
