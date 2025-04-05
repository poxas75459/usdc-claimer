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
    "2ouX6gpKQL9qkWzx1TQ9SkGq5XjcKXFR3qHkCftKUD7mwFaar8U93hNC1rjt5hsh1PWHz8EMF8AgUfzYub2RjhuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lk8JoiVrmFuaJfnFiJUXJcqZKBGg3ytw2w5ZK22AH5YYwsH5vv3c91zUmGudgEa3TQoorEw7CKx6oxpqYGY11AJ",
  "key1": "4Y9rqQG3a69vJvz7Ro715SktWD7V3DqyosXVd8JqDhYXLvUFdjMp5H8MWau8E2735rJmkTGDWW1WYXeRTXVA19X3",
  "key2": "41YAWz17z7ah6bmq3ejcCavEXBvL8xiULvJpRPXcpiPGf9kJ4Dy4mvTfWdhhwqfkYFYa1gpxg581M2QWnwD5Umhy",
  "key3": "4QqbMjj9NwGycGxwUZniWhT38VKSidvyGFrNbQvN8R9brzH2gxZhmF3UH8FiL3yisbywVQ2bUHPcNrtRAUEzJ5z8",
  "key4": "2VfFJXPs4ps5ZxRzmVPmGutcugv7enbukB9hqKRVPE47JCHkRq8K8GMadDR2kPofzTazA4vASYvcdWpw75PSjiJa",
  "key5": "4TKaoTUAvR5TfCLqvPRbcPLaXQpp9uuoWGLcHUXxBTC1iaasg6bWogSAPFZb6ayV9qBs68WZfMexcXY3EeBccdxW",
  "key6": "wj75Z5ZvMdZt9K942FjaSLQgRfwih8YYq4YkD9i7U25jF192QW93GxkoxyH7Xhmc72JdoygDQ1pXoWxuLL52V1X",
  "key7": "23hTAF2HgtF6BVPUkjcyim1YyQG84EwiMLydmLDMLHokbYEStcGwc3EddGfZ8uxD3Daqxg43s6YCfEY5ZqV8MaVc",
  "key8": "2UVdhkMuia2cY4sfMRVkmsEF2myH4QbjmgSJD2GQwZQEWLvgJCxBDsM2tJ94ZXwoc25AnSqRMU8bALdCm16gyfjd",
  "key9": "2Vxy9imKjTLrdp51TvjFKBKz2XLwVpRyu2NXtP2scagJ29yfVaxD8miwyo5ymtKS2xXFj6T6gbFC8j9tHvRX6S6G",
  "key10": "5kWA3ZWkFvWePTLr4wkKa65Km9KLXGSLSn2eaN8jFPFukAaK5jE5h5YKjJbWwxr6M3LjtgyshvFx2W5GNsppdec7",
  "key11": "26C5kYb4zbWFCD3Hb8Jb1uVnRj5VxFPheUhGWcJE4s9rRBrD97kznzVuFibT8QzPnd71aiD4dpHHEWwqW3jzkHuJ",
  "key12": "29vcrfqiPtrT6HJffFLNRZAtwC3LuQJ7w2JyqWU3cULkKmNjA23W1NTnC6txfc7wrNbkN2tZcCLKeqNXczSvmMta",
  "key13": "SsgbjkcGEV1FjQiexzQdzgF9XiNqGub6KQ2JDYLRZ9AJYkiMrSAGv5m9ERvBAqQhUJNbN2WzVmfrxRd4AJh4mgT",
  "key14": "3VKRJRm62EQA6h5LC2K8cBfh3eyj5rEZkEwHXSA8ThoyBZhy45Exfm9Rwh2YLCM1yELW69rRsU3UzLDa5nNHg9bq",
  "key15": "2uDKq8p6BWn7BkzhAT58KppXDRXUDXpSaMsUWUjpxUyfmge4UwjZmkDbnZ8HbUnvPBGSy8kY5AcYPDshjVnNKrf1",
  "key16": "Wevssubs7eYyZEnrRvLGyAYQoXuo9hE9WkmyCeqMqMuWbbezqbBU9Zb84YLJgYCpjddS7EWytqAzjKDjugADuAp",
  "key17": "4kqvkbgsRrdoN8PMnwh8Hwu8fxNLRaF8fixZNPQ2phU5MtGWEC4Cxee5Tqm9TCtcP8X7W5SG4xPvzkXHzWf8MbtV",
  "key18": "26DNB7z9CwGJcNfUBfynUaSwfWq1R2JMyuKtLynK2szNQP7FBW6MSPKXHUgHt8FMNvvWwGkbZXkWQbz1rA1K6xaq",
  "key19": "4GyTp4sPwnUBeUtohL4VAbJumuow7Hmx1xqsjDz5jHZFAHng6cN3FNE15HG85KMhKVHD9WRjJ4RfeFacMChztRYm",
  "key20": "2gThscW7B7FssNVEhpLHzkfgFR8XjkEYZ2JRFYS6sH8EU69kwJfMKT3EXhPC8ruE2Qd4osHCS2NNjkxofFVLguCV",
  "key21": "815SECksKGTxDxrvr9qzDreGLNqZZfY16RRYqn1v9j7sehfTLAQvmYuRgqb98VssRLqCGHFNU5xvpDr8MYPf17J",
  "key22": "26d13XnyFWLfMzMpp9GhxMUmPdfsD5RYUY27Vq5mT3iKJd86ySoCaiBs6fxtjeEueD2Nhe7dbo3UYgMr5xJQuKrz",
  "key23": "uPpBSShnQcUbUcEuYqcsKX6AeERF6piAzhumQRUzWwURm4dcsj97bicWzBQnm6iRPNfrBUdmgwAoge7B6Y9YzGe",
  "key24": "5f1q2JsMGChDNSTMzjyEJAAjweVT7KkaeezpqeudiaKTgrdU9cmrY1hnViw5CH537MNwGdyMnxD6GbT6TMSVTCMd",
  "key25": "5gbA4p48es1JjRfw7oSd2NKHEbzLJoAqiBocHrW2mkowy7AaNY89A6998z9Ca2BfWD7y6VUEUBpyxTNowf9sBg71",
  "key26": "2VaYhH9T1NrwY429pJeeSjHMMzQqtKcJ6sSk7GQUxaa3NrzoqjTRSpqcKWy72Yqoo9xARUXViRtT4MBXNtWLDjYB",
  "key27": "4afRyLwtaKynJzn7sNhHp1ZFLqqSyYTdEXLrk2HCpfr1gimUqxgityBphBkVGX3nap7NiMJm2rMv1uuEstLsuufL",
  "key28": "5NoKu3pNyAuRjskPyQBhFqVQvYEkrBYj7beyB8Rdqnsmzz6o2QTNh4XEihBGgZfqG3UXa3e27xTLDbXoepqLd8Zz",
  "key29": "4iHFo16zL3pYqn3stUvnVE3sW5rhAMK1gpTQh5aEkAqE6JMgYcP2sZVPdG9vUkuVqJosovHo7wFtztd5SjbLQ37w",
  "key30": "4pGoU3UP5dJdtYCTkY6syF6oUNMbBMdGX4AMoeaG7AGEnAk3bs1uafRWvkCV9ks7H1v3ZpGJU55TaCTHS3zPpx6q",
  "key31": "4UTCcyHBmdCmDPQNZMWN7yUeA7gcwWdsoBXPW97KknihAdM26G8oPMbCH9rsmmTWmetZBnamz5qb9RK4U8DNF19",
  "key32": "3mW7FyYMXHm4mmB74rEzpuxvkuzmnPVCytMthTSTVwG9WuwNGRDqxv9dVNMn9E9wyxN6HEQFJTM1iXGx1kKZ8LF3",
  "key33": "5prCAEEZj6iE5zCfTnvCMtcfhbs8DUawGa1NShmpffgBqYkRbt7Pm5fY27pU27XwfjLH9PrJsUVcSn2952qsWFgm",
  "key34": "4CJLeg2UtGhqFbwyoComufuRPKaHkg3fppPdj6AKRKYRBnCVJiyy9XjEkSKP3gyuiCGaaRcLczmesc3P2BX5hxJy"
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
