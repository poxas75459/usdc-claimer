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
    "4KZzoK6gzKohi97GPTfbCQqXJHWPDhGv1TRK74PaPUBr6s5KtiHf97DFLAYREJ2FUeuraVsbWzs9d7hqDvnmYWXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vueeDg8M5m4Fhuk6gSM1U5SbshrwG79Ly2C4GSpFmVJKz2ByK6oLG79Q3F2RJxdz37qffNYp9YvdUPUSnZdoLMc",
  "key1": "5A6DgkRP9xUPvuSQYm6nW5Lt5eidv5pMC6MoHpkoMUfbW4DAnvggBR3EiAs8kgMqLLqLNmTD6Z7qTCAabJR89u7c",
  "key2": "62DsABtrQesAjWTmor2YX19K1XSs4aHkst757EcUihwTvSKWP1Ao4HAMK3VjJdpP1tBgrh4QfZMkgNNBWcfGNzD1",
  "key3": "3odvfWMSSPBMA1MZsqXutTRT54uh8Ap1bdCNPaQBAmh8yNjjZ7eMWTsR3vsLdLAE2BskSSECcKZKgxdzyoU7rNhY",
  "key4": "4i5xQt51HypNhb9MyMP1j4TgCwCR9qDnbPrhEPXtqEy3uCZLH4Pz7H3VaznLwJ8XwkboiUSiN2BQ4xZxEkk3X5Gi",
  "key5": "3ASqDige7GJAoTwTdZyAoZxq2aLNvF9dDLfyayjf3iHYKCUcj8rHiFjnJ45yoKcA31V5iyj9xbCziGT7R1WhtyEw",
  "key6": "5mznjSBZvKrsz4oFJcGdi9PpwNhHGuF9ak8BQZcJJdgahjbpBSCAsVHXz2cCb6PLGcr1FpVttZq7AFNGw6PFkZZ6",
  "key7": "tZvnF3FTNLsok2nMdVZBYj3gUkFjGQipGg9WJNXmNiXSsRxAJ9CujPQFB4MfmfXqyHCZzHcCbmQNnDtPhUCZNfF",
  "key8": "2jU1Lau9p9SNx2iY2pvqusD7epQgCkn1QmTDnYFRhHQLjMjr7ad4upwiNMGDDswtc5yzH94gw8rZeZc5w45K73fE",
  "key9": "3MQVkGMY2Nc7Xshq4CJ1c7pMwLz3mXbhGtoSEjVBwfjg1rwU3Cf136gkf8PUWTPGDPRz6eibFTWpKiSti6ZBwFgX",
  "key10": "3j8GQ6cMBWx8pXhfN2dxhHCWxu1gxB3Gba8xhuuWRMVpx1YtryWpkCyYyX4H3NeJp3bqrX6HsT7zDZgM189ZoHwR",
  "key11": "5aLF4SsKXzpnQ3kmrT5dgkBzJDoauwMzdZJXiF9npxsfThjZqoGvTeTN7M2vHLJp9L3XhcPyeQhSun6iT8ZgX4G6",
  "key12": "59rjrB3rjKKqGApqKGiJZhRcLtBEv7XWnBkCtLoxv2rqH68NqQHXRooM7ta9xwPzgNJtJqEVTohho6wmLsRxdER9",
  "key13": "2G8U9QBmmQL3qqKaFNE7cgR15B6dBDNWLN7ahgRfXo4kr7f3so5HJHVi4nBz1HysoxiXQjWeeAKi5KRRgBTCLmFB",
  "key14": "4vQtXHmyeHxCFfPBD1JVESVJUBSaUcsSG18iPdr63VPvenyd1B7PYexmabbgRfqVUN4VbrDJgmsHqYeDGe8AcFWU",
  "key15": "3NotfSULg2Yki4VvaSQSosDvVH9PGhyN1eEMs3khYV4W9Wc1JFhy572MKLb6vV9MgQTSkMXSHNBjAAwgdDxL5gg",
  "key16": "4crfnZNurggsKwMbjgV2zrWy23xrKS8SbaePKihiubKHBmKMyFYgYhs88u6azY6EQKxELDA65FFo4GhUEWXiUCXC",
  "key17": "2AQfJLjJ1yLR9MEhKYpxm5U3Wo3nsYCrNCVPN4Va99yWFLhFRDjzTLiKrAFRimsqc51Wir3Y5nHcBvGAdRtfkAdR",
  "key18": "252P9Yb9Y3CnuayPUM5rYyBSGxVnvnjG8ucayT6xst4zrY8ezMiFPpzShWCRe7T7AiYndPaasUChwVjk1QzZkZQ5",
  "key19": "26gn3tLkeHffKU2dpNL1SPgGv4i9cVxE7UyqAU5tCfZ64D9wJ8U2JeQ932wcaF2nWHJzwQFRYFeFsxL5sr1eVxFE",
  "key20": "3Qzuv19MLxagmdJjS8M9R6Lrsi4F4ny22WqzqAuErGbJvFbGSDRRF5qxhxAX8rUv7C2svJXeirrY3WAff29YYjro",
  "key21": "55s9cbArW5es9buWr8SoaG4Q7f8BJ586NgQgx1vWPLbDCarkCf6rhDgLsMCBBEybdvwLRjEvHC8KESxV3HV6V2hg",
  "key22": "3UTBzkWdpcVkTzE8PQiW7uK7AZcJsDHyYo5cHzSn4F4ZVMWYs5EsjQbgGCP7SwpRXY9KULT4KSKoDoFNHnqGLScw",
  "key23": "5uGxxRpkhr5AdnYhtzFkpjDJ2bX72e2TYvAUgHyThzMDb5QLbVvnAjpMSuNZm8XybGu1DXCtrb5ycu6SpcXU5HhH",
  "key24": "2S8bkhKLnCFJkkCJvqKZ8PKNaTfgY9JMx9LrRkFGrQDZ4cgVi6HZ2LbwjvQdycDqCfsyFBFcRccFehM5veKiopSC",
  "key25": "tAGE8F5PAYuFxfSddWYqPbHAQDV4KzsUDpok3U1N3F8boKDvBvfkbxRHDcFd6hv5jPDWxzQJkE6Y1gCHxWErdor",
  "key26": "5yMdiXwGN5aEHzUhFnXe6K1zpNEqyU351BvU98Tv729wc9WJ5EYRZnoG1owoUXnR3m9JfB4Ze6L6H5MnuMnxcsrj",
  "key27": "39EPG2yHtv2L3WsiPhMmgyuCy3zbWeoqfWjtxwAJaecRjha7PFHTremiFrLYDd87wBJ5JNp5Y8WFcKEYekXB4NED",
  "key28": "5G7AYNmmoxHUVthUJEv165YKKneVKSM8c6mgmRdzpR3REuv9qW9wU8F1es67MmnHNPoVeBbTsx5zTxh6xX42vgpJ",
  "key29": "5ytXRACuerJSH7dZa37P8SgWvKCDgc4FsZNUU5VJupV1erGwDuG67WpgqpxGNHa9hH4cXPzA5EVrC9kXXHVcPvJV",
  "key30": "4c3EtRxZuGmHrmNqcVHckyum1knHhRZqx91mY4sqwBfrRPv6Jfu1jUi7cu7eUA4K3bQS47X7BBLcpZcpNNGVjZ3G",
  "key31": "Wqku7gNP1Vvw7gm6DCqGQp3oCzoeVK2scFspVcjJHJ4CNFU2bN2UJ9hkaqB4VeknAWjNaFG9bZP8XZjiW3a2anM",
  "key32": "5FLRhnV4Q8U3oQvwUp28WqYsLSHwbrUQ4gsWZEPMvEMs8BSWG3sh4e6Que77aCsQhHrxo9BnFn1MYEZdPKkm5Dvn",
  "key33": "2ySuLNk7pfXLUAjQ6mpnLC2qBbhpFtkKftHkkWbLZUXa8SVxCxse85JnzRm6GfmgznYh2hYuvGiTUJ1q5QP12Myh"
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
