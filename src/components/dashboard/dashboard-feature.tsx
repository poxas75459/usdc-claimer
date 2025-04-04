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
    "37kfagXACv6a52d5x8tw6FzAzmdNjP4T41i3fgHJEg9PLoxyRMhyK5qunRXo8QCQj3LVxQfxN4CMAZg9PpexFdRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NuNQsvUD8M8ajXCZSbEzeBxeZ6cZojJZpNzEXZsLXXiEtcg5h8BGZeuLYrJptGgD9TSPfmAWXGp8NyxR6hHKeSi",
  "key1": "4AQavcNVWVrQp6wqfJCpnupz1hHvCZNxXwoKtjbYM6uCp1QNZETiRRN3fXrrUZpW8YNbyTq9YBCNbfXWwxRoCW4b",
  "key2": "2v2crSESUahx1kybg2MhA1y9RaEPrbMyvNvQ8pTX2DSN9FYXkJSYwMSPuqsrSPE6SK8rfpD5FNQeadJao4WeBnLt",
  "key3": "5ZTZJZQyaFiRELdE64wSV1Q8JShcnog5xmJn6PsAFGn9CLn6Tr9aD5xf8tMQU6tmy3tuVZcgYoF3TAfAACfFvggs",
  "key4": "5eZsXie7FQkmAspN4yCGiauZWKTR7QWx4CCTVSXp2x58RsgxZNyF7DzNV8vqy73Pd97XWE8FWWHTzcijWRk9XTsE",
  "key5": "2ttiN9XyYiUnjFiuEtNjLiniz1c3MGAkjc1oYq1ah2t8YTig1zVfhyXAbqFyUZGDcZTtFLWWvd2dsaiPMMhMKVCb",
  "key6": "3J3hwgojsWcbbsnrhDFyQBDmoepU3wxuaxQg7aCDmXrP24yPHKpeDgFPfZBfm62eMMeyw2kdzAQPyBnDiVM6oooC",
  "key7": "5cdK7vM3eRvRu9kqijwA5KBvNDfZ3Y1FVNUZhyZkp4hmsJqJTBe8GoY5XPNSqQub4sLDY3Fm1xooArBZ8zyct2Dq",
  "key8": "2vG8NZesAHJ9BEaXkQ7VrQby7zRUsNCqCocRG27LThakQgEE7mkK2sph7qSa8BQXibfbKwdzSaMabNmuUsv1RbBv",
  "key9": "4YbqT1U4tKrUugakXKfdSG88NDKWpbu4XSt8mDAts9fku6xuXb5e4sqA6bf5AErwi5xZ4j8JtazSJL1i4Vg1k97k",
  "key10": "3SZT7onvXqvCLFzcQfsVzteqoBYneY83vHoMtTVQQNmyzf1cKgqeD7gmCAZsQYQMtwQCBiNC1rBHTV3JYhFV5thA",
  "key11": "3n9abzeTyrXSeiUKSiJAAtfMVRLa9d3cGpyJUeoZec9DxU9KJkVWnDZgupQjnhRXHfYx1umuxKY5bsGGe1efCd1C",
  "key12": "jso2SqTwops1NL7169noxNY88dL7AsRXDPxsKHQRVuiwnLgnEh9JSULi4PMyR5AMS54p4PkLEUTnebhs7KjKy9C",
  "key13": "2kvc8PVYkgREETiddZ1CDYJLRfbMkj1FJbBwa9KVh2TVU7s9botLpDjcy8sR9DgQP73LvL7QTpWFxpky8zndJjpT",
  "key14": "9ukACgH5zEFzaVQPzJHdppYo3E2qCh3WsQKSED9rj7q71WYktHALz6yetTJPRzYxqbCG9Cb4rtK44fCCuLroApi",
  "key15": "5u2N8eoc82RvVPcAy6vrWhca3bx5d9hUmuSQ9ScmX3wKu9dBJheMJggwrXXkU3F7NEaLWcehCQnNTvM6QjxftBkj",
  "key16": "4dCUHQQSjS9BkDXh3N1cCpd9D9UWYCoWWn1fXeVSK9PbByxgVXz22zD79i3MNXqt4b8NW9H31oYHP6kxjCkKdsoH",
  "key17": "4UQ5Kp8DrxqcajA82ZHsZ2u5sdLdxzAFMAFL22AffhTwazW38mx8jWVccYYdxq247HmNtmKX84Tt5bDhfcR7gbeK",
  "key18": "2sApUCFLcJmYicsuXAU3wjApr9mWewZhSKrUogrJmt4Fg9QLeenXk9y6p1Yj9aJoWK5aNj2j7Fx9xW2CUTBAaYth",
  "key19": "557YTJFezRSpbP3Xrgak8CP4xmYZfXZvqToLTkQdVQBLYkoia2fMXFC95LaQnmF1HGeK3QBqfyAnh9VsbvM6tp6B",
  "key20": "5chgqY729NWetQFvQ7zVsN3FXBnDmLykMfJop91urYE1v4DSA1FKNxzhrxXnjGc6vSTaDqTMVagG15kPwMWWzTNr",
  "key21": "2ZXPd9GPKMmieo8Qgtboi8EJ6HBtcHxZ2DwHcHhfTyR89pWaspGKKoEQqRjaWWZzbA4YSHnHQFiPSZyySG9u2M2X",
  "key22": "4jWm6FXcUs1oUZ4XonAbho4CNEgb89KmbtLiuwFUyEaznZVYrzSnmKjUb4FTdDC8nKb15UXcctMaax5tedCvkgDB",
  "key23": "44B84Cce1Wq3K9BmGc41B1w5cnRx69nmEN8b4Xj7cFMDScQNMvKbqiPuZ58CxM6zETiaPhHjdYsNizM3jRAV1nwZ",
  "key24": "3XBB8QyRnyr3wJooeEzJga7n6ZoJQWo7cbU3faWGNisqqVTUxLR4Qtas4EuAGVsoytASWqKoShsMnD9xZNKg2DPv",
  "key25": "2nusJdbfSGPBfuwPgES6JrYEGikFU4oYZVJwMPtk3AyN4oimS8859Fx5ZNKjhChMEngcu3UukKwMKLn9MAAbxMHU",
  "key26": "54QWuSKeB6wLidBLX6jxgmfRMNYJZyzne6wWsjxnBfenkHR72u5dycGDaLyEBWWaQMFQYDxuSkN8MEu9qsALbEXh",
  "key27": "2x35EcTfQjLf9yxJ1zsgWvvwjkfNasjPeBgqe96HpkK8j5ajKkGLNQeauABsep1ZgxzmWoAFZ2TXsAXCP6PXM4u3",
  "key28": "3ngrbQGaJn2d3CpHCJ9TGhRZcz9UdF9zVV81sq1Qsx6Mh2EhVxp5CGwsRci6tn8o1vhjedYyaCFgGkM3dmJ4kFUh",
  "key29": "42uQxvEGYYPdZgdD6DCX6nCL44hMPCZ2Y7kG1ZtHKGCAwmBwB5wuMcutCBxT6bLDhTMY3pCtp1wHJaQrcDBj5gGc",
  "key30": "4hSRQ83v4uB1uXhjShWutkRmxzfempnxX3skxfxi6R6T2dHKqyv9siTw61w3YDegiQkJWDJTEnLTUWNEnK6bpXf4",
  "key31": "67bpmkQ8nESzUnhREzZv72g39GFLiGnMzbs1VeQJkhaPtSUS5jtw1kUA3acMfkvuU25GW2psf9CU8oCp6apZ5jq3",
  "key32": "bnGRST7dG1Gtxu71rtXxWpLMzzwkn7qVdgcsGBHRXV8zznUyHJgL2cLZTaXHocBLna4Tgz71Fr8mGZNqpxEhKCj",
  "key33": "4ygY95ePPdh9RcpqD18cPN2YUEvqU2CGExuV66zLNU3atw6XJNpANCpUgxACm8BtNg9gQLCoHaE56qjMk3QGjaGQ",
  "key34": "2SdYEvqmdAfaJLgByz4eRLdGzaPB3ZNVtffLaXQAQ8mHBoMKYoJ494FeEyrrGzVYQtgTpydsngxvxm8j8HwZC2bz",
  "key35": "4SJ6nVdmfSZoGdiUauKLZZ4DTYBQbiXSxqYLUqwQY5tXFdKQNFgLuNJ5c33hVcf6TCKexm9hZcs4pi77Nzo7c3Mc",
  "key36": "V9bmy8RkBzYsT8aigx7VHzAW8Q5VNoFVCrQqQiKao8o4YHCVdsKQpqVznUxg5d27GHX9jXFC8kXfyy5uRHBzZHr",
  "key37": "2ajsBWE1cepNNrAYTdVFjkLgUe4pxHJedthfzTvDeVM6WtEMtBGXBmVZf6UKhTX363Gwe5mhZhHiW9wkgwEe5Biv",
  "key38": "251mWnXfm4iUyNNwJAf8kEeWWdBfrCWi5rCmdA2rVszpApMg564JuX7DeWpAUQhfwYEcHDMoxihayULUZtk3RAeN",
  "key39": "Q2M5aBNzmEDZ9uH4nffJ9vtyR4Hs2pATMjs96LwFaR3CS2wX8tDbrSCTuzo8VVqozM1a48HoiBNxf1pvXCNTjRT",
  "key40": "sVuYdBdvb5NKxbDkgKr4MrpbMjzhdhngSLPggcAivin3VWijdyfhnEGxBTLARBnPJ2Bumvc2VTwX7X5yoe8K87k",
  "key41": "3D6bowfaSjeVcDBmJ87jfE9R9cirsp9xjHnqfck3dgkY5q64dZSjUvTskVRiZjwtrvxzE2gmX8jhU8rQE67jLzfj",
  "key42": "zu5tEnCGZ2Vsv3vA3W4nHwxS9mStSQKfiWnN3xf7CWyehzg1VTfgZP1Jtaez1kQwHZtW1N4dWwVbwDsaDV5bSdo",
  "key43": "5nvN2StXyX5BfkUYBCfHvjJfNCDjbVZ3iS7VPH2NyYjmdjd7iA4FtRzQYMXPfrroEKnYrcLver6TRvwE93awbdxp",
  "key44": "52daDYdKv5BKQXDuzyq5bbacBf5mkmcZmmheHn31iz7AXyNZ3W8zdMTmixj9sUTnvE9sKeWcwGra7GBS5PwKFVyr",
  "key45": "RnbU1VF5u1oDdkhHbQJzE2RLsCAp3BFEHrsqdgDXCS7LDNpTfCJu1GSqWGCvkbTrXifpCq3CQMWHHVaEb5hBxT8"
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
