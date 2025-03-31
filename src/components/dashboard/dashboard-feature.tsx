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
    "3zJR4j6HDcq4uLJnG5vcCdyDQA6MXZsTgjW6SYPyt9kZsoGR4x4EosMZFkZNbJSVEf3VxBUkLDJzr9vv8bMs3XdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "234Gcmrx1mb281BbPYG4FRDFXohz5NHdD5M4nvXpm2197o2EcXG7UJGSUeKbEPCc5sRevtUtR6nokDUjkGcbiVmd",
  "key1": "43qT813gg3NVTMCxwajhFeGgDJ9Bgz3TnuhWVZZzNjx4F41W1w8BRAacgWS5DajvfQ7mtCpBstXcc4hBXKhKmwKy",
  "key2": "2iaJrSC93qGmCCnw8aZe3vJ1VTQmWqqBfvRxgN63KwXsXc8RQcHfSVCi1xT9AwDwm4GryZNvH6Pt1Da445ZYJ3Gk",
  "key3": "2WV4cgp4p7deF3EAck4etZpck3LuPwqEbKj7FhmU8qxcjQFNFdaScufQBa1xJswfuDyDMuy2ZHb3npaxZpACqNhS",
  "key4": "32LriMCVL3QxCQmZAvV7WLd7ZYw3q37o8e2D1cxgP81xyggYutCuCVhpPDDCD3AwSYH8AhTd4LLyojh434eS22iK",
  "key5": "5wy8JWwudb1fo6uHhbjxYKk7XhYALiLpX2WQ6EJL5y1YavQ4kzfEC6bgb8g9na1QonwaccETdD1whQmJmYPGFkY9",
  "key6": "FBbhFd47dsqsZD7aDroTktRFtdamnUUe6efepXpFFFrzSuUBUoNf5kBsBvpD48f6hSMGmS4LxLBP8s7APEfd1u3",
  "key7": "4qZCiZztaAomtFyHAPLxbGYZeub9xnt3BE8FriAAdE7Fbjp2aPT3LkT8vkpoaxDRRHnGcxwz9unKZsHPoeCuWVty",
  "key8": "56odjKxDphaEq7ifgk3MJ5PMU2rxRu92oMjUzQaTB2e1H9UThbYx6chzic7VQYN37gkYDAGSQ1VMrsMtjrCafqsR",
  "key9": "3a7GwkbodsouTfSFLwHmjBFqrX2DEpgUxktQWxXaSRhFkuWeDAWBqNkExPXD2rnCi2PZeUVe6c4QS6hJGNdo7CN9",
  "key10": "5wkvJGCn4E8r6QF629GpZniwG9AVYWtWq31M7PCRVmhiDQs31tt3TM3w1MCjYAbXvoqRGXa1BEEoNMYU12JHAY5R",
  "key11": "48GjQJR5U4dDGRRf3PWVtf9FgURq6UMRrozUT331aZ5z9P1eRdzufjvMu3Sabh4vywYwZR5BowMwimCWmzZpHR9g",
  "key12": "5nXqCK1LPzbxurmn21UPBsQNxokWHcVPu2gnV9m4eWtQqKXLW62RAXtfuHgAqkczZEVN8zNx8yJcADweCauLfX4S",
  "key13": "4UFwmq3DdHatjDCXicoQTrdV9K8tVUwvbJsKr9wXv63ZgE3nQn2ZtuiYvwfknQY7rZGr4c2k98mcTfzhPCA3Apjx",
  "key14": "2YCuQLeFtF4gj3bcehMJMzKFBZBqkk2eD27GWSmxw28x51X7WTNNx5ujdyX8DBPEWWKhtCCpk4Q5cxUxxPC3Mxuu",
  "key15": "2Ff13qDBHZnL9WWQ9aPRVQR6r1GEXjUhq1z1NxkdutzVKgDxqZG5jgGuwWqi6orwHHwZLCtG2AUGXLKHW166aSKv",
  "key16": "s4DtnC7bhU7gz1kbMmYvjcYe5w6zXppFkrCjJnyFpQ1vydb9ELJb4KoRdMQT4qPAMvZyb4rGAr2KozUDVCLyHYc",
  "key17": "ezfc4fjd8cgaaHBqv3U6BdCtfgJg4A2zz4o3SjqKVEGwsxdDHGfrfnwF1a9ybWj5LpMXM7wXFict7wuVMXsoRou",
  "key18": "4wczJRe8VGJS4EJcf5a5EvdGGBp2Hih5uqvF1fiMT4ZHP7heuX9Rx6KXKPyFRLkBGDAq5EC8MuiiJpUp7xFWqt4Y",
  "key19": "4m8hwUTzhtXKm2Y9VddPqBgcuoBiEzYuVEFsgxxGCezfMYN8JxmRhTKzwCFR2HSQYDtUQQZyCs7N9gDNwPfAfMk9",
  "key20": "T7AsQLQKRLdi5JAa5Po65KX72JsuucZbQTQthujNYJshb8TgoZSEptJSW8qBMuzoMkh1a5SnwH7apNDYTBHwXDf",
  "key21": "P86z3YkXAwMTUzKhWUL79bJVJcK1k29xTfcGzvDujBw9sx6AcYd1qStauuMja8UtnGsQLYiKv1gCF34caDUKBhq",
  "key22": "HAsWaa1CbBivXgMEYMXE5T7NSBVeadHbaCvNbBNYy2Zzdjne6vAdE9eMUdogQ8NadBi1sziQagniyEQgEk4D5iG",
  "key23": "53ArWjxZGupME8eC3dCekjum8C1QNBuyYLUGGnrSKUxwTF9zYcB9fYUB3dgbSaQBPHYBmjGaiDQsx96ZhwrLW5Ma",
  "key24": "3nneduXEFq7jz371BbED6dKV1yH6mZamu5Uim9mp3eFBa9CN6Bg268nHY7x2uiTQivVBiD3UMV9WQGsPRtKTx3pX",
  "key25": "5rVaBuGye663fmY3AUoo9yhYcR8mXVByNXUFoXNXJQRsypUYrQkTnJiAYpUoZjeSpCEkE9aM3dUWJpwrLpoUvHqR",
  "key26": "43rvKfBd3ySkeTZCnnZh1vKLpgGAvjvYtZvMAJHpA5HnJGxRRY1YC99RooEcKaPW68GWmYfPyKWC9BYFZPX1Vipk",
  "key27": "4vFJXdCsebERMMqvrQyDjtz5Z6Q3nVsh4YLPQLEaeUp5EY6ndZDi8sAuaCfmj9PVXEb5cP8cRFSadh4QEcpwitqn",
  "key28": "3fuXeCuu4HGWt3k7AA3QwbEyHWoocWzn7wmggXfbKd5DmyxJnxZ8kKuy2GYBYci4tBBq6zRCq42egAcWwASF1z9j",
  "key29": "2F1EqsCLrvXcxjMbxK7CtQBPaY6Veny5jvLramtSkNAcuKJotvQQyqRnuyzMnFsXHjyrStiFtXofP3vGzqAhjQdQ",
  "key30": "4eY7u8yGvfHerJYLUHwX78DSnPCdnfk2LhcfyXtuBfxToKq5YJxSfRnE3PYHg4qFPHHFffB35cm3dA8DJ3Chr9AC",
  "key31": "4DnStrgsheipEsAfZGWsKsaBoEyR8G29cXPQjf8jSiv36XDzDLMLhpWmxNWHHxPg4tg671i4A4Ds9VN2zk6VZwgP",
  "key32": "2LNqigVkQAfJ68DqtHenYKH62Q9UU1tZCEmWVT6WdJf6noz4K1L6XEAzM9Q7o2dLpkZt8rLNac2p9dg8LUMHfhcg",
  "key33": "5wpQCQ7feeWkpJg4LVZgZaRu4CdGESXk8cH2uZjreXQ7VKmWY24Bhgtbs1iAWkuEzb7f9HiwrM6FRnx2Q9btMuDs",
  "key34": "4HEKBsBeK2UDBZtzypbxnzzMKsrRYFDeSt4qQMzLaao26f3Qt36WnVjkLrKQi464AhvrxHooGMcEGRZREEpjM7Uq",
  "key35": "5b6fpY2GtmMUyLms5F21AkY5PKn1jHyUziXZqAoc55NJ3yc7Ts5umkgbCVw7LvBddS24gssyAAvwsBsKH4LfWqET",
  "key36": "57AdP4F53UqQjMuebYLZXTWcK3UiPxawJf9L5ULSxexXXb8L1RP17NokCBTmNGb933KmcugJZ932GDefXf9XM9w5",
  "key37": "2s8fpMQYRgQ3Te8cdWM3rK6vf1qjKeeuukLju5xwE9kD1nVQQfYcR2Qi7RZ2jTL5gdNqa91iQJyVk2nQve7WR1ps",
  "key38": "3mw91yuWtMN8zmfKt4yUytvmM8YSKXw1nxLxx6KeoL9SwSr5sxNmuDhaTjDiU1XM89AKgQeuYtT18b4ahAWuMNvY",
  "key39": "dCZt9PUtXXi7TGnJKNWFVbc3qiACRkRUWSK6VQ1xsqeo9VuFZ8TWmoxdmycHfDz982sH5yGwLy2jqWDiQ5a9AU4",
  "key40": "639S5cwQ7BDh9Lpqd8sxG2mfpDMjTBhDsqYN6GCrusGbWuWj78JR5khTqHmr9Z4Rjvy6G7HgAm3aknrdHVjShSsv"
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
