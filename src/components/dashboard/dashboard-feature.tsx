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
    "4dABBA7mRUyg6qhT4Z87oBD41y9D7auPLYbobknsS943bdNLf9tQcrEbL4cRS7gHJdr2pobNHqz4Qhdmv8JkxuLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YBKizkoCDg85x9JooC5ki5YuAusjZHKW5rZmvaRd9nsHrawLZysJGL673fm8zUYoGMNSeLeoLHDRvfBSiQp5jdW",
  "key1": "65CgVQtqKWufGoFeHiz5k5Rqy6ybbXN4vvmnV8ZuGHjgHzCNeGfv6ouyJxrELooKu4uEc32yXLswVEyLbcP3aJoL",
  "key2": "2cJbnGgZxiRoHrRnD4fFZ4dqXBBc7jjRrt1sW9zBJfDM6zfp1s9vyWnQEEyDEzNsgMRTwgXgysAJqz38phosGwLq",
  "key3": "nDsdRPrW1sUNHWeHBa81apPh2iXbZmNJ7BGVWt3wPEpeLMBXvE5tKFPxhcERVcQVEtMr8P5UeCqh8S5ABfRAR6N",
  "key4": "3Zn5swizLLXXvJ8JzFsYzV6mbEcXgeZUn7mJ6eRxZ2sHJrTmmqBqot1N2KH7o157uQMNwRNADkj6WahcdPwus7Ke",
  "key5": "2N31AkG8b8jFKjZvAaegFtkjefoZ6MWV3dguV9CRHkS8y8gjRLDSjexGb8b8QBZsXfXypoom3B29HZ8vujc2GcJH",
  "key6": "3qWGnWB1gFyCXjMxzqCxQexcfUmLfoMM6R2wbYeSccdsGs6ajN5MJGK9YfxrYiQoumhNd5puyMhJbsufBnkBKTw",
  "key7": "2GJhFo1PaSH4vTwuJdRtwr3W4F6cEQ9GwksHXqqsGmdgjNtxWMnQZ6zmY5ARQh8RBHZ8tHEaWHEY9pHfmHfdZTkU",
  "key8": "5WCLyj2pQESo9fdQ6Qt2dW3vtSKVYRoaK8fnr4sWfYhK4em5KKSjaGswg12UyRciMM7gLztLb3tgSiXVRCV6F1KJ",
  "key9": "4fqUw5iLanShffV59d6wSFkL5xqx7RNVQ15NMZgf8tpfYY1ULAgqmbBNaHCfuM8Jnm6jQufVdY5ybLtnkvfrFZyX",
  "key10": "2c7M4zs3oURnrYDz3Kj8BVx9vzXYgrSb3NQeGDKhY3nwoSg6A3cKXKjwda6mmspWzfnRpbc3cFyLrHee1aWfZE9B",
  "key11": "ESaV2H6LkFAWBqvVmSybgyzxf1xZKAzSHyNLp5eSHN7oNK5xQsb6swFyjmXHKD8852qGSizy6wQHdsUrwkSL1hY",
  "key12": "3y9ZAywYNTdw26BXab2ZXmJjjgVazYDPv8nh9d7rkhGHrG9bpnZwQavxUpGfrHJod4XPYkPj7xWVht8BypDLJviw",
  "key13": "Vofzn3mposB2Kc9AKSFCgtFcojkMzkZXBYLjZzDVLza14xEY1A6rkK9jwwbsFazssMrsgCo4E9M2Q5PLNRMGg9Z",
  "key14": "38dQhUza4L5hU6NBAby3pmaG9RqiChoNtqsTZzfviTxnAeSvbYi9G1vQ8C6JnCWDv9hnFbYU3dyGHe7JVo9CRSYX",
  "key15": "3socoDE3o5qYwNvw2P8e68khuTSGGLgriJs8kLi5HnmLQ9FLEs2Qt7ngHmjhwCrZVmM4twvum4X8gB2fQhDYWmN1",
  "key16": "vwTEkgVLHZAu8LZhio4NugEAqz4eX5sNMmD6gdED869iLo6sGzqvpnjiEr31xXgdxrfsv35WCo6WqCNrokTr43C",
  "key17": "wvWvmPRzgHxZZxQzdU3puqRC3Do2mzZ6q3CbeVS1QNcMjix98h5fQdUmgaxNPQbMSj2giC9KsXkT4UdVe3mcGKC",
  "key18": "EGy7aosmQyj9W84FRckPNYcdQ2g9er8KmXCAFeDnwkVKXXmfmMU5sLZjqTGqAK9b2yHGFPwkhWpEyjPjZbrMh8J",
  "key19": "3nwenEKbciG3ZoNoPMbtWbRmV3rSCr2Zwi5tYhGvg2YyFvbobMA1DxZ676Aby8fMifxnw1KBR8ck3RoDKjo4YpUV",
  "key20": "MX4QanhcYqZU5Z82tpdAJfrU5V1KDdsdruJWN6pP6NQnLti4urrMXKY2hokD9k8PYNWcULhLhdC5AmMP6CAvVtw",
  "key21": "4zpvWg5mg8JRYZgvdvtE6vrD3SGe6WWzsz18Gosf3i8wStt714Viz9jGo2aLRDuRC6rijf5JEhLt7yQk65gH7zBV",
  "key22": "JsAFFaQXmgQy5qHbdxRgm88yx5jBsSriVXc5Xm9ANDz7Kzyp6XDmbXLc6Yist9nxiZbDuXTh8K4KYxtA4gYRguo",
  "key23": "2ytcKrN3cQCSV88qkgUte3HeURhCWAKqADHyPug43PxgxHu7J4ZwwevcjcUm1KXZrqQC4sG7DWd7qfYFX2PhdyPa",
  "key24": "2Zgo3zSe7LcF7hL7mhHyYkDcUy1SUvDfq9ZuJdMfxjPZwRzEcYX4PAKdLPM4XELYezVsTf5umNFcsZJP8EU8fLYT",
  "key25": "3zcDdzJZp9k8AVVD7sLbtZKoPMWUUUSNvt93jwpoju6xn1hwJtJFL5Xyj1nGAUvWp6rR4KfVteMemJ164Ati4Z32",
  "key26": "5SSLAKcKnNJG1qCTpPsj7T4XZc3nK5fkXM1EHtBYDpWUmTJscr7SkToQxbsTEauYL25V377kCJGqHtToQKM4tdyo",
  "key27": "3E2Nvq7RPaZgkWQ3R6nV993HW7QaorG3ufthBGW8DEch9d1dudBMwHmtP3VS1Zebi5Fvp9tBsjBzFABeXzzfpeNX",
  "key28": "3p26YGVepDRkV9hjeEKnk98emqLppqeq93rCgg9XNRR9xeqpi8BHRPPP173N35CfouZnWFRNkkfmnj8Ws7SMyuXb",
  "key29": "RErtna6MrTtrAvQo89EwsqPiNJn1Rx4j7UASFSfqhdPjCE7KhdRQJxbp5mAdwUYhv9Er4jAagjjZXY3SyMCcMbF",
  "key30": "2ZtfpzuYJDDkvHanW1ptJwthCN5V2Tj1gQqFAdkDrKKeENMFAK1wMCrxGC8mTkd7LZjNZgH1ME3K3f6NcZWbwhkU",
  "key31": "3AXPm8tpewKFYi8bABe59BkwWH1nZ2TEaLqtgeHuaBKCYav57iaFNrHhAu59Z6h9RFnMzPgF1BUoTRDy9TftCvRe",
  "key32": "4oDfvFwY1pd3HeCPEvbDTt6tcDDdDtk1QLjjHqsp5uLjc4EQuHBEW8cPLgrMSSpap9ennSxGESa2fd6gDJgvhduf"
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
