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
    "2k8zeCLwfcTWEWNNxjDYt22UMPoKqXs8GQAjaxeqYAF1EdPzztGbRmF2tUvaY3z1j12x8TaKdBMRvEs1yJxsUV2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WQKdqeZGf2wK8YV4nmaBdMTqE3GAWwA3yY2oPVnYubYa5y5wfTPWa71bAFxYbi1rBvmwoBuM2RuKfCsV7HYY35f",
  "key1": "H83wA3YBNYnDDjsUxCLBxCGvhu1qgUvvUEiniaXLZasNGWAuA89GQiCCPmdwQJakwLaZaMbc4JF4t2dsr7wk7zD",
  "key2": "4GNcX75qjZUpykhELwFmTCBwyuTQFGNyUCYKPKtXygJ95zoxKyJAUdWeCR5BV67gCn8mdJtP9H1ANJdV8f9XN8d8",
  "key3": "2R9Qj2dfvxBt27J9DwcP8e6hRZcCVh8hwJJotwxp1N5iNhJTbW6D4eGouY1aAvGpfC8ik7wH8oaeHLVmeFUsPFD7",
  "key4": "4kMRHzYHg3GECv29TJsBb19aNUL4jWYtmR7D1JccNfabRpyW2LtpBo1SVqWjqtRuPAGEvCdTqoqobJFE6NAKErz1",
  "key5": "5wmN9FuCWGWuqgCJuNqD9B9DBM5MYp1jK7WCQpvxWkrEj2jYDTVh2avyPdFeTipg8ic8NqhznfzzPW7EnKRwEyXN",
  "key6": "CKwbL8nnk3X9TeiuEHsqf3FNsAyBUg9KdxVB6hZv9t94W49YiRX7tskvxdqVmMvgoJbWxJu3iugQf6Knw13Y5Tx",
  "key7": "47ijwpWcPLbkNNFpZQbGXhGi6AHoXiKZnYuSXA8RXKQqNmhYcdZod8j88pRNDH4uDWpr9B7KbXDSVt54tab16ZiE",
  "key8": "FEPnYSYVKzNAHw5BjAAQFoD1BVYxukJdEK4Wg8JGbK89ajDbMx87a1LzW8o8bfAqWpBx7sckqPq1FporFZ8i3Lc",
  "key9": "2nhyfzkFfKzembKuiYfZuyJf3BA2waRhh8rP1PvWNTaNYrrjqceGA254SunskzWqVm4sDYq8pFTGr8i3fzpu9Sxp",
  "key10": "6dnC8nDoB37QtuX4UkXHBEMPBicuq3PpQAjxaHaguVMp4EeJPSAiHoxKGpv1PG3WmYYs4CiY2Tmno5aoNFHGhba",
  "key11": "Y3UZwt66p3XAF6UJRQi7V4iuukVsHuegWBLSnARnkTgtSmHhzKXwEN4fhPj12sZ94Bvi65eqLLhVFe5Pcf1Twjo",
  "key12": "q3M15ame49Ds74AhFqvonapi3gKppnP8C74s34R7RdayNXh6TZcuzUS3ujLB93Uwaf7u4JNAdpqGmVx5EgnA3HF",
  "key13": "5zAzk7eqQdnf7iKZM9xgxjBoH6XDnJo1mQ3km24r4wmqQ3k3KFKCTQFBxiy35fvFbYVfYbwR8W1yi56HRawsqZKM",
  "key14": "4KjyFVwmk3xrN8CGLLRWiHedis5VGvc3qTuCk5od5XjTeCz1hnQQ1a7zCeHsAwP7zj9vB2y1Vsx3Xx2wDK41TCTu",
  "key15": "328YRqnQgqSZCWkRJvwXKDXyf8DvcjnXRDCc3EhAGrLa8dXCMBvNSPNxnacyZJxmfJ5nbbFxjqWY5FQZhscfKhv9",
  "key16": "GrAKorpa4cfVfeJzK4jmpcjfPM3RYVAaLeDdGijNhH5BuN4gdYAttgwYjCxf8wYFVH2yHrmXjeLbqzQ4aaWhKhm",
  "key17": "3ZsUQtDDucnqKmMq4B7A5STUeRG6xAceKzWCFSG25Ya1UNVsTvntd2ZQnyMTbmQGKLc7NNRLk1dusFPsbmGG17vo",
  "key18": "5mUiME7o9XKkCj3RB74vHgGt4bbyobemK43iPZfGrpkomqufAxUTHC78od2jttBmLHVRMt6RZtvamc454LbUEExR",
  "key19": "5tx3ibuuZmXVmUeoEBfmLpQH3CcoMK1m1NQANv1g3S4KraPYpwoaQ1cguYniWASnvJ9sZVTFDhrey8LeenwH5AWD",
  "key20": "5pFxxv7LQXeup6sKp9MzPP8VKz9aua2GEd1YA1wfFrJk64BASBfufNvGwNzrDaPFuiVVpsnfqy14XG2fmdxtJ9TU",
  "key21": "svcbzGBVnLZoH9hafph59G2upn5hKpCd5a1qszMvfvnKHqybJDF9ttTpLv64aay81bUos3VKACttpv5WwZ7vwhf",
  "key22": "V9AayCAKnJ9Pg9uSXM8KgJRHmwj8SByxKKgwZ2WJea3iZFEmH4XBrr5nbAFyLdF7NwBrG4Hiqkh9YbX945LKS1h",
  "key23": "JHiRSKzR7KztCzhrwF234EvzKk18cw1mbqaPgHky1Nb4jtBhgvGdxCLL9UqPTLFw8mMRrQ7FPEMcPbHVQ9jP68R",
  "key24": "cWndsXdS84LeAAWk1KSA27x9gtZpvHKsNjKve7E618cACEhV44iNCMQj9K6GTCxYxPQB2EdgiWBTBuG8PSwaRes",
  "key25": "3uQtH6Nhbj6vJEHryLtPpHNFNUt55RHctShZko8gGKMDUszYLQZneYSre9sGtFTSk9kfVkegp6Aryb86mrmPRVrq",
  "key26": "2aFnApP3qraf2WaQV8dyKsFXvBGCeDMVoLWBw8GdaDUyeJFhcXffz5XjuPKMMMVeVR1nZdHRHdK8ukNVDkX9V2mX",
  "key27": "5M8CnTXSbLBYXMphkgGwbAD1ptVovXAhTFAQJABrqVoKASLEMTbbDyHzcTQSEUwjSrfDRtpSqh4kBu5RkmBx2jBn",
  "key28": "2cpDXvgSJ1HavPBnt54sBXHzY4e14WiXN32Y8Bmh2db5q5N6UytuWUb1A7tqgcusYZCdXorCYsgkartNstQNrtFp",
  "key29": "5wsAai1XY8Tx8XBDxw5q4Xu1fHHvRN57R44ei8LmcKvdseQS1wehcX4nMiYGhoy73dWnQ9zy8G395bPkK68zP3hh",
  "key30": "23Lkn3jWn1x7PZ27NXFzTgZjLZvsgA1TreCNhEDmg7KQvZUzTG59BbqfWb9wotPqSvDBy5vN4xiMVsWVC8dVQMXB",
  "key31": "q9AQ6gPi1ysSUVZR2kJKXosaCGhYL4Ff9wGnVJeiyR2cesfUuA16aT6Uhk1WpwJtfNfQgpBkUsuNNnTo7vazZMW",
  "key32": "GT5cnaE9QxJ1zXdi7AKmw9hGmKFpRinCNSDgiQaUJE4pk6YqStVhh3u8vJ1MpWpD5JGYogzDzHykDPfsXCCcTdp",
  "key33": "2xWYHryzr5jRjZvRhgdvNyKBTJ233H2pLUQny1RtcnxzgBbVaubGZsBG9VFK3T9wLPaxU5cB8G4BUzgbYZ9Tergt",
  "key34": "4aExigdvRgBXiyZTdoW2jgnKgsCvR4iZspss46PbZzps1DEHxmUJ5bWinQ7MopbCk2wvZahARRRhMAKV1Tge6fi2",
  "key35": "Jir9wXXoJwqwoDh3E4fUJV5vqNTTNFTfA3ftUWDTNLx7DBg2twPLoryNGkXruiam1AgfrZN2iP1rjyTqvyTnWQf",
  "key36": "49ynZAoixDYmWdp5DwVNCxfj1Jg7mTQDYqDyvNFsmQW8t8tcMEqwhAaYuUbFXwb4Xcwb3k3FJzdTPNteX521ZFi5",
  "key37": "5df18YpmkmoQWDfj81jnubEZqVARprnrQE153Zj2eotaxFSCpnojfWPncrW4TKcD6VvNuMA5ujQHY7UoTPryjgCN",
  "key38": "3bVE45oVqbYCbc38ywPqeDYcKDTptwn3votAWvCSUe2Xs1WkZBvek8Lpda79ZaMpaMa3tUxTLLW8PYDnPL1QQRsm",
  "key39": "ugDCA5WG9JKmrc8zbgXEL5TwMcrD9WzzEqPnkh9hDPmeoM18RedEMMbMwRKKbdNNQzLqNQUEyJUSr1mz3qAiuNg"
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
