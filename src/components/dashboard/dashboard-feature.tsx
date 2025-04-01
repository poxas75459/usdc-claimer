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
    "4QJAyK3aDmX289JrsPFyQVpehwNpkopUyzzfhudeZW5xXD11vWxhix1T2Si7KCjbUmdkDpyCFGmQoic96yb45or9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vfxtqC8pXC2YTTzhrotHdcLG69BGjthH2GLHUFCuBGCVBz8y43y2ZHej8SGKaeWw9AptPGKYmfq7k94otNL8JJY",
  "key1": "4zdfasPFxzF6ggSNy9NBy4GpZQcvCH2GNqTmDjgDS14tfuCwxkgDRJTDwaneHEzXjq8aS6xQVdCzAMoMFjtigV7U",
  "key2": "3mairA9H4GQTTGeHKzN2Sh7pDJHsbywEaNhN427gfzysA6sC8zFYui135vp7jeT7jc9HV4Lwwb3nRj73oox846gn",
  "key3": "o77CqoNPq9XbD517Tb27F34i5zVMT5zwuoE6dTjc2Lew7rYRFTa9x3F7bLNNf9hGVBMfKoKnGbdQKhyinMQCydM",
  "key4": "4vTtWLVyRdXfRxTqEzLNB57ssDx5tJ4kRZhgFamEhQCiere2TySNZhJFLKmWsuKTojWBz7JLxha3h82EivdCywnV",
  "key5": "4fcy8LZk8FbffVYEhRuCTDpK11RcNb5wSa8Lf1Tuf9sQxbP8sqdM1vvDiZ1SJpUy3na5yKZR6HibVRcJvZsShcDL",
  "key6": "5S6cXNwsJFZ9CRJ76joJkgX97cpaMkvvWCXRF2cCrW62BggKPNNhBxJGxqyoJU2UJpKpcCDdpWoAuG5kdSHNcgHb",
  "key7": "5t7pNw24UFC9swWfwv9sYzuomJGqdWVMpugPixKGtpeBCb6RQTGnLkxfjFERj7WL8fy1GGe5E7Lo7AcXcotdan61",
  "key8": "z91tr5JwNNQFuEYTtjPzVah3nkdZtD5NqLr4CFpw8rdSgBfkarSuE3pWoUGdMUdj6WN7bivSZhE7c4w97k9rWsV",
  "key9": "5buxKnw3LoZ5qbEbWU59nZ3pMCYMWNz98JUQELcrpaXTJpLABobkVewoXXhY46E5sieWw43VugSEq4a3iTrURqAC",
  "key10": "qEaW5ZT94SDWBwYSfZJYpLSCNkGtYLEzGSPzyGNCkCcnmKRLnSKeFxihzENXRhBwZEYzByXJW8zsSQ3eW6RV5bx",
  "key11": "4D3ZJshE2dVa3Jho6rEXVLwAgr5fcaZr2knEkX7bzCFS65bN6C8NTbosLftHhoFbfbW6eSQgDC7Kz78xP99GT2xc",
  "key12": "5U25rzkj5tYDPFKYvywkmuACTWSXWwHaFGeGv9uDWXexomJUPHntKToKEqK7cYtYFHaW5kN7n6XbnrDxLgi7Fyvo",
  "key13": "3kPbvCpEf1x9Rk6n26obu9eGtzjeSNmLVKEMfeNhNQVJVgWJv1sQFDsHn9JS2X92Di5UtQGZngSRPhzPDL5Nmru1",
  "key14": "7yucWjNgfma33P8YhT1dUD1trafmcBJfc4bN3h2yEJwA6yDe8QDscghaabsKxHRRoqq7AV44pdVUXpR5NXXusuv",
  "key15": "5UHLjMyQi4xXN13foe45BspoxUzFLcZ3mkyoq8gJXPLdYVoyTfdQKP2JcheTqa3TjdfW9mZfz2cZvH6Yy6RisMgt",
  "key16": "3M1LoH2Gg25ciE3axLtWLYYraUjms721phczLvBrvroUvAc26KNLRqXp7GNDLsPcKnPGVPhfJZbkeSdWozXvf9BQ",
  "key17": "4VWzAETiDYmcqtJRsm9Myh5iswUKJ2AziTXeH3b122XMj4Vzp9wPnrqtC3ax48s3RuJtnxWRxU9GgvpCcnB761MS",
  "key18": "2WhFWEA9jn1xRUjcUd3jy8pAeL81iUuWRvDHh2xoUMPVP8AUL7LTyHStfGcuNgFAh1mdWNmLu4x38ZaBHreHgrzU",
  "key19": "5mmLGfZ7RbKt5AzU4bjcDsKwoqyiht9mkCDc9u4zzuzZFtkud1sJhwuWJeB7943cVcM2ZjNaxCAsrC7T7325oXii",
  "key20": "4q81cbi9rApDhS7aYbFEoyCKKnnCdf7Qt9LGoarbaUXUMiDQa3tDMy1pZNeJB9MVNRKAmZWVuRhMeYMnR5Ls2dyr",
  "key21": "KxPfUnYQzNJTQdS3hKvCEMAL9i3xMNP4dVFg6w9v4Yz5hAkAnCUSDyGycHu1CKFF36831ykzcUD5b1NfRe4FFMd",
  "key22": "3Mo7Ryozj6LQGzYrK1DP1AYWvfpZPB16SgL11EbafZkMn699MqX4oLJkmYTrZu2BrY5C38Rks8TU9WY4JyK3f3qR",
  "key23": "kXLcJjifi5xapgV9zP2YpTbxzzUHEbeNZLgFj9tNuiwJMoLwfkMzqCLNAMXmmNBY8oPiWj9iminRzoUWspB8gHL",
  "key24": "3mBZ16qUbXQaSejUG1Zd6iioxU3hmYjzzXbhB9UcMezEvCNLCynbWmjK1h9XbeehSL3a7xZDp388sgkg6b2U2HC",
  "key25": "5AXuNAezHMJtDwSvu5aMtSqJeqDYYSRvpHtJsr5ygEbBHNJz9pRgso9DCzNvstUysxeoHC1SXa3r1W3aYuWgSStX",
  "key26": "38MPZNbmJmHdQq2BEBJ3sTjD2Hy1roAijv3RJUSzm5NC4BepgQRiXhHDveuw3L4iTLEfskp2kCjPnpRAm9cTocZe",
  "key27": "35Z4LCioWmT1p9b2scT2M2sJqYcVNpSG11pQLCoiJic47UwJiHQwAyfwt89hb2SVAbj38y3UfEmgEDGQkmBxf5p",
  "key28": "2Fs8kfe8PfstawXhwjyCu2ymPuUhR2RDww4Y931pu4fLTiHYxCabJtsTwWzFtWwNVMotUHf59KxVXd9LAa2ZiAJ",
  "key29": "27w1x9JeptAQUzSKosPXJLxAZr6qEnVSVHT6vT7YJDBQPU4TKwqfDBRVPXD8y8VB3mZn7eaRxcq4ToTyvNsVLSQw",
  "key30": "5cDe7xTLzzfmucGjZptRuqyjbeLS4rFbb3GJmSwk5otFJHPRspDd5Wj84mqiv8KFA2K9NUTHMoj2Jf1XHYkbSsNx",
  "key31": "rtVpE2GcdiRajbFbb2B7WcWeAXQp5jbZDgoBsQnJ8fPsFpfURgRrqWHtASeJjfNRvuyF3MEitnabKi2627D63hn",
  "key32": "PgWcnrAspPbr7d7Sh1vzz9eDRa2gfqpLJCcnHjaJqW9YbPpdy2QyNL7fWF3mB7n12DEEQQNjNujXFh8bEp117C6",
  "key33": "5yW1KjJLZJBJ9JPejDfAbTacBabxCsNzaDRMjKSS3pNQeY786xBpRboUNVgRPt2Uk7t1T9JMF4UqeHXGvAZooyZL",
  "key34": "7hfSvevKsLKv8xoW75ETZbDwsEWPvtfrYuPBjBGHacmVmTQZWbLC6KTugViRkMWbBo59iF9Mzdz1836QmMmFf7w",
  "key35": "28sUQ7r48NX85v7FjfgPiGE8mq7HQQu8nPVQCJViyveQCmw6JxnnHd9fczCyUiigdYqXpUPiHBgtAzA3H9uznNdY",
  "key36": "4vue8r7BcnWPx1egShJTokkPFyGZgdByCeM3fb9b4WtCiEKxZvFxtspprQTHzfgBd4BCfqDvDbox72eSH1e3BLKe",
  "key37": "1GYo3VMKKb6mc3otXPA3NTDXApQRopnrZDc1uCyY4miSJoW6seYFmWHHVLrYmAg8NgKnBU8iiz7BCn5P8cakE4y"
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
