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
    "4vzTNJFPLpUTq9dq15BE7oBRDTRB454vcKPAGNYuit6DqPqHo38uqmWPRY9xcrK8dcKsjPcN9M25XcH1Qs58mFmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jh7DHoKnfBkqJvksEN4KthCK89jW9cEYWYYdD2kE7dU32xhd4EWGStGm5R2FX9VjsEsHCWQ9wBPoJmP8tjbLoLZ",
  "key1": "4xU9dZFXPRmn44fora2c66EmJLrXmjP4D1RAhq7nkgNvKUwYfmEiUMjHJM8VFXcnqakzUHeDdMESoTLZyVDUN7kH",
  "key2": "4PJdKkjLBBGXiaR61FbXyKT6BXZidJ2zbGoxkaqB7dUX5q38rwZuHaZ3v1E7zJsW9adntV15o6SbQLLdVLbidoMn",
  "key3": "xPMKy1afUKYAEenvXL6LfEgABqT969ntHSRnXhg1j1LdnFwxRCsxAVmfVdRd8upqq1DhP52ioRiZdsJEWCgUkqf",
  "key4": "3Yp84JvcAXQXyA2DwWdyn8CSpwwL5nVzkcE56X1c4LEVDvA8UmhMcTjw2C4eyYZQUnvD5ryjvi6GHxyPjuk9x3cu",
  "key5": "2hbNoFSj5HE1jxgWvyGdE58kP5MMmZEA2hdRV1HxpfyCpczp63Y9536SqBiAoqk3ZJSnctEz1jwSeuArFKPayjei",
  "key6": "3jMTsm9Bbqq9e6cb71tiFLmhgRv41ihQiwzVY6xjszkomQkFPHpj8g7o2pwZzC4EnMqpzHdrSiMqZXHg4pZVgYNS",
  "key7": "b6j5M3nxGU6UoWA1zXCMC4S4qxQ4PexYm3qABsRGBBatjj1A8NrUcAQQ3KVa2zTAZYGJvKYQhNeHQ7CmnZYkXiK",
  "key8": "2aSUr7py7NpzJtwUSSmm3ZMWtQAsawUmKq57hYHrQH3t9K2TosYZRWrSNPVLrq6Vk9PJYnv2PxXYxbbmYVKvMXBo",
  "key9": "4oaBzr46YWW6YTaVZ9kRSxVDry3LytKbmQw6G58XEHxVPRX1ZFT37sLE1Xv7a47zTmqmQ7WRUZBNH7sKkmfJgZWP",
  "key10": "aj6ERQ2QjzHMcQDJb3nJZht6WmfXvYzA12QvyNhXViDj1cQWGCGYD58rQpo5waK7p4LML8cMFbFu3uX25bjaAQT",
  "key11": "3fVzsHGEKSeardYC2PGpGfddEav3N1q1iu3wSPDCiUfTnm7uTrcBUioZD3c7VbuSA3smyzzowDxTijHgU6k3BduP",
  "key12": "4Xd3e2EqojfDy2i6tApGtJW93AeFg5K9p56LvkUw8qBJ9VoqR59mrEjvxKAJVieHPNxtzgFHdoVmkH2qdBdvZLgT",
  "key13": "3DZXmXqYGTj3UgEEdJajso7emU8G5HC7R3zzMwTHd6o7ETj4z4JJXzNeFsN31ezdgHLPCUfUWTHDBr8cPHJk3F3X",
  "key14": "63VNWW5BvzFwWHy6byEr9vK62gWkRsX5sMYJfYoSVEgrNa78N7KQGZdzJSB4FEYZs7cEAdbqAkLjnznw85qPkPC9",
  "key15": "45QXfPqqjowSLHeWFswkTAVvVToZ42sckJM6KYgpc4YoRpwU2dHarL2iZnD4HAayQodVXixm9P4ehdwTUJueZZ7D",
  "key16": "5XZcs6mXSrC3N7Qehj2t5WA3THnivZXDTiYp4zGHR61rLbfi514SKy3MUCdL32wpmuZ5eEpyDE3qMx834tVsBgFP",
  "key17": "2dU3WEYdCEZZqk7BU1SBNLfCNeXjdwbJoExtmcfnRgjeomJgq1htvFtvcGiktGuZbcVUygL1yycN9PJcBPCbVGeZ",
  "key18": "3171nWZJBJvq8fSKQWH4S8ePXmLbAD7KYAao9rSskwimz62t9jdrkBDSZ4uwaJttkfYBEGooHA9vsaw1YHv1j2ZL",
  "key19": "2VjESQTMeDPYGdVNzhGjfovvYUc5n64LPnZ5v9CMpNftmPQQovmouTnifJeKCUYoZhuQvA3Uq9E6FaMrp81eeJ2Z",
  "key20": "4QDRoy3sTP6HanGnaKAjJYAjb9UgE81r5oNu18XWPPxjn6WVr8vP2tEAQXHmwdFi1mmiRTPcg5Xu2MY1WtNTCpiM",
  "key21": "ByHEs26eD9cwxicj5HDEMkKj8Ui6WVizFEbUaFxnVaNeSXaH7uXAQ61wn1on2w1sgyJ4YDrJyRC7K9P5UkeDWvN",
  "key22": "3ttJbFWPAVAPhvD7sF8eJS1CTuPhCL9ktXiPJqu7wGSVWkzp9CcTrhQ1gD8DjBm4SmX8mbg4wHH2Vo5KuZSLfFdL",
  "key23": "57G5eKpappAEf5fDAtbzktaFHttGv4FXK9pHGzoYpipMouCteArSQVXaYNcND8UeiMCAqVVWJxBXSmL4dkFbf37",
  "key24": "SJVWWduVcCZYEnz156FvJmApWUzQ7sQtKdvraADzr9yK3V5v8GkpBQdbNiYwY37wv2GHqitYMpYN7S2LeJjuk7Q",
  "key25": "4djrMXYpMqBu7Q8Dhd8mdgHWKqV6LzjD9Let32gUeQPnoPvKWpXzUvVKg9BaSTnEs9AfaWKoe4WUy8AMtCQX71WZ",
  "key26": "5Xv9Nqd3pabHuQK7NgsfUVmfbQAXyYZmo8WMXSNghoQAenf9pgtUbrY7YbJw2cz7YkdTvW7rad6k1Z9rE4y8K1BH",
  "key27": "2Ni849cdvRKBuaTeZ1RPHC1WaTzqPaPEcpky1WScmd3mzoathGiJaUTVP6sB9gCRzfVoDzASMpFmZqWNFivpXNW8",
  "key28": "2wsNVovyzo3WyFigDKTBnsBKbStJetwUjok3vFb23SE4kWFGxMnhz8Fk5pEJaXALWWyCGq2qfLpj2s4Ut6peH4rx",
  "key29": "4gb6pzjQW53qC9JE114DUTmaXxjjy3Hd9UKJBfDwtKy1gZJKMN97zqfhEaLowht9c9chuRZN8BkpYCdtcoZViykh",
  "key30": "bGafxgjkg6FyktcV5UEPJ7g9RGUmmiYEFVMci6XKJQpqwxWpki3ZW28Hhy9Tm5vjB7yVc9rpNT6MrNyLguZRSBQ",
  "key31": "3iYc6b6SVUfWpEZ2VR4B4c5h9wUUsKeXaBYqsWYCDXKwWpLsaWFxEWUgDJPgTkAdNJynXjeUovfaxW7hkbRvkL9u",
  "key32": "4tydsamxXWWXryNpzUJeabBwM6348aKRdc6BE5Pw7T21nfuxNExWLP6XAr7bPsX7Y4ypdJYbYfAS5iMKTbzAyYnv",
  "key33": "3b41TNpmjTNCXe5t7yb56Aem4vBGzr8D3BnkWHNJzSMcmUPYdi5gnh692yuUrNVZNtqtRmpfgnbanNSqgNJx3SCx",
  "key34": "4zLMe9oBjLFwHU3WA5uA5MiZEsjssk37e2Ngd69L3MadmBumHCUM7nr7H1XKQvNvxkybRptUTbbm89mFVt24nJ6s",
  "key35": "5AfVCemiJcw3itMZAj2pxZqnXKb4pQRczpp2Dyix1QCmVq2XoXAKVThDJj26JXKw1dkd9dptNmcH91pSqbtJFRiF",
  "key36": "2qU7RiYHHiwawP153EtwoXLgLLYcKHA4beX9b1r5uC7tKjZqVjdoD9gxmMj4tM4pLkXe3MxoXQKVfJFHyxqCVB1e",
  "key37": "pyFDsArNfjr6LUn19QKCwbcmcrpP3r7nFaiwTKoShpYZwmsGsUZ9kKvC68ncoSsorfvPnFzVFvWzHSG4sWKV9ka",
  "key38": "2qd3wiHLo74TvS1uHn43ieKnBN9H19UwGorEDuK8VJzoyy529UFkgWTb21Q6196MKswtKN7CW76n2pEp32GDP12a",
  "key39": "2DLyDtY98BeG8r73KJV1EXmA8qknznEwNBsMLgQhYMvTWdenSHxufDheitw1cuYdioscDtwZAJKipzJz9J9JeGvU",
  "key40": "2mfi2XBy9o54HAdHyM5CqARfQGePbcGtcUkU4L2ng1DKa1GMLURDnthh5vm21zUa7cf5YvTvGYMfvwrWPTQXvXYU",
  "key41": "4C9wL4fjaNG44uMeFHs4uscAYpWraHb663QcuMvgTTnw5uvJKfyEWi9br7Js4NDkKQCYf6CeA38sbS6ELsBuF6pU"
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
