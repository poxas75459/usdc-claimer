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
    "3QnBNdVzNG9fNaAHBA4eBCQ8Uz1aNudmqZAqbmwpUsZFBAApmj89xtckXS2qjNJ4DFJyFAZHNuecU73dQ3Ekg8Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L87DPTyw7wwHX6RsoqEVyebRqnTgTKu36GAXikshe3bhFacuogstj6NhQEVQ5Fu5GeFKZPMLh4ev1neBXDub7VM",
  "key1": "2xtH6AK1vYjddH3eSgHnS2HKjwMuU6tux85yMUFyCpdZjbDycPJE1xDLwTdW9DwArpDsXuxNv5VTtDDFqT8h1RT1",
  "key2": "xnimbshuJhbjvBSG5jLDVexrShneY6ZwvPu7gVwtL9RZRTJRdvCkAbyLLBzYKVEChVTkU696TnFAkg34wwgifW2",
  "key3": "5aX9FVTHeQGFeVN9EwEqrkBvpooEnaWebLVoabsmwEefbM8oPmFjmfJ7c8FWTfTjf9fAmLNinv22roacvKhJFR7x",
  "key4": "37FHzBS85HJirQAqFckrFafHeHM7G7HvbAknCxhjGbGXHNeupsNKzRZk3pdyEJAHmKGT7qPXnw8x9HouYrYJSpUX",
  "key5": "4tG5CHQqpEsEw4wWZr1HNPyGQy1joj2WnHL1fvx1HsXdPRTbrYbJWGxLAoSJ1minhEjvKZqqbnDw7zWaa91Mc5pe",
  "key6": "3gtudJYRBSAqFeY3RRWgD5DsPBWYJyE1WrZtTGvvF9Z9rAbqqp3X8gfgvfBPEpwukBq27askDdAK9sKsp3kGCHuE",
  "key7": "5SJoZccYsx497xkubYNXpxDgpRwTkSrUrUucwe7dz9wVQFQKRWZkjyuSsigz8UjKYXtZEiKskLZhfFEKXjmNgu43",
  "key8": "x1TGM1CoSb6ptnDNdTLD9r1zDBBDvFA1h7z845Bx1Dquvyy8m4UMj4VkSKAdjM8DJzLC6jk2khYUZfnJBSHaUes",
  "key9": "4ZTPJT4kCpM6xnJ2c1FLR3kJd3osF1W5mp98zv5GT9JrHtmPqzxFbMfWpNxSjuk5K6mznWwxaT9JNyNihLEX7yU6",
  "key10": "acebKrapdLiXxV7sLLyqcBXazKx2UVknXFicgKxis6BcPYUqRMe3889gNZV5yAjkjum35giSf7H5MpvVdXZd1sq",
  "key11": "2XGJzKutXS6p1HWP3mc4X4vCMsTanL96ptKuXRf6uPueTibbK4EnCMAxXfiKP6cpUadQEBabD1Lip4NhgXcg2MeW",
  "key12": "29xaokvZbPZT7nP6o6b1iKHPqHwfA3CtabH1985PdaP7TvD89sRCqzCGgb6KkR1odxwp3cAsHC1A6P2AdYYNEjaY",
  "key13": "KaFa4qZsJ9xqJdHESmn3f3i8kC2pVEYZncSJN4H4PEUWEAAjdRMdcwyYKdp8bH6XJ1z51jENCqBwX2bynvJpGyH",
  "key14": "5yPwu3xnZzSf2gLEcSaFijrZ1AwsHAAd9sGyeiP1HRzJRVWiPQCZJ7rXWhvsCBifHof5XX3BN1nnhpJuM838eLBb",
  "key15": "2umoEEcFHK7Ragx5JkKrZ8gdMZKQ3tkeuHmhxBamEBt1frkfq5X3dNoUwpovp3Nr6tHdLX26K4wc8FakVmx5aGqj",
  "key16": "8zWMHJG69e89gaczLeD3y1heoayEXNH8YmwhpxZAgf3kafgy7stLRTarWUA6DFRYiApLLMYRyDVcsZ7RP3bSnkQ",
  "key17": "313ixUqtNbEsXCcEmR4BPJc2p91EsLLiHQ24FMcvo9mnYxyp11ef2VBTiWwtaN2nbhrqMedcmDUu4nxxw3Q2o6Vu",
  "key18": "5eRF1uT8avXvPJKDKwpeFhF3ZTE2MVL3qFzcjzLXHMXjBkQGihCkcpw7U8CHrfXAoJdsKLv3ZWSMzajuSpzH3ypb",
  "key19": "5Lc1JPNw6phpJSq8AB4sPwe4USVamLgv4Nzn9vGLrtJger1BUotqtTfvmnvGsz3TWAL8QxfDJJdEbXnbTnRzu6zg",
  "key20": "3VGVCUPx4Q2aFcaRJqKF8rsTqAdHzPPXAsk5SMABNCtQ5wcD3nK65rtruwu8JFt7wjBtbVk2W8HfjxCMj8x4se9h",
  "key21": "4eQi1wfTtpdRZM4ZkGvR69Pcq4249D2Kpj2NvzhZFU2eobuPAYGXdgxE9X1gjmbRFhcwWkcdqyZ9soAa3iDbqKCn",
  "key22": "23iPPbTJ7tYN91jAzjuAHVVBNzyiww2utimbe5ehNmzJiSKD1Rr7bQ1XCxfYwTqLsdPVuyMBdQaC3ZmnPSYcEYBT",
  "key23": "54WL6s6iPpNJDjJY2NQjGnaQ3LatCdt9nrSggxyn9psMuN81oEiJq4iB9U3ReWtwoXVVJ4Xuge4d454MoFwmfWEe",
  "key24": "4LE1KGneGDBSG7kFqBTA9HxMdiRDqwtSkG7dA5926GSDDNArX7ck9nXL98qQUcMNNeTWhujdoqk7rp6az9TfMmhA",
  "key25": "5pocgG5n6DQQPRrYs8LSvdqWcnrYqP3hgaZGCXTShuqRy6aAPpmVjivGgEkcyNc4yEn4FuoAmm8XUmJN1LEj8piK",
  "key26": "2m1nbSGRk3faLsQ8s6FdFhFutDFnmbpwyTLJ3hiag7v6MQkrc3LnEgYQveUVhXr2bQpVZXThUTUcA3yLhxhroX6x",
  "key27": "2PiswvixqTA8keEXEbWFxz8wYFWBkrx4UEAdc1nBuqYwJy2cgVLgJmSVGoX8stRHHA4Q2rvMYeAk8Zjn2JkHp2sG",
  "key28": "s5veNcQAeMadHVA6mnNLZRBkbyrw5vFrGjCQnbY2wF4QSWN5trDbCV6dmR6aWLeTyAxNdT548tza88PfQeSDt1h",
  "key29": "3zMD5vFL3tUhW8qdvLomnD4FoRytZbqeNpXsinkY9fmx2ahaSuX7ifs6Wehb7mkoP1VnJeogLw1exo4UdKtSPcQY",
  "key30": "QBAn9m4cujbcW7U2MztxnrPbbW1YQvSkaWKr7uUTSYrp5Nzpg3XNeJ2EPamu7BJeZMop4BF7cSy4Ny1jPHqXgRV",
  "key31": "3TM7WP5TBmpUTY4z6jy3NkqdyBbSCQEcDE2DxfJ3JC7fDJPn5mTAVFqr491ULF76usQhz8k5JF1Z6tFzgpRFuwDj",
  "key32": "4C6eLect7mwncnJE3hTJssmUhAhX5bfZJnAtJ7r5BZdwRCmPC58bgMxZjP4t1E4umRbCZfP7J6o3j5iN58tTM2G8",
  "key33": "5fxQw9YfDNV9tShY2u31AVQLQPyKW6fEUzRFwuiecVLkRafeEbc9e7TkypgthZ6i62pbCG7AaM5vHQafEH1ABtCs",
  "key34": "aZQKvKyLEZKx6F7WbYbM5yRmErx6QtKGzrPxjBhk1awr8EgHyk2KNiEyT7apPRoL9XG8R5Z5xpiKHd3TEMtjTC2",
  "key35": "2XpK9nimcNDfXQJGUuhuVP7ov4qe36Jts4U3Zz392uzQsXn5trwRpxC4yTXiCXgRLtPQypQdeFKEvSPy1aj6kG4F",
  "key36": "4myoskkGkGQGTgokttiSouqZZQxNwHNDf6VA8z7s3zeTDzLVJ8tkpSjyhx8p2GdfDq3owur3HVD3pwp5CDxUXAPB",
  "key37": "4wRfQtnmqebNDnTjAMmPYiBeCN75wme6DwfMu8o1XvfpsQdD8BUARUebSTcDSrLpTYg8fE9HyxBRGr2BrzMK2j18",
  "key38": "CLMd4krfcXvcaRKAkM55zSVDbRvEg47woYyzsmt1ibqiRnjgS3sFLA32q7ciadeySPjGd1XsMw27T7GAaWBVYKY",
  "key39": "32X4zRhpx83qPZyEBU1cMkiddHrJCxxn6ABJeqZLWbUydaYLVYJRfpq3zxvNaYPpBaXSHxq5URUZmnTHce5pfyGc",
  "key40": "5ERBD6vgUCLFnUUVUmwnvNmGRJBf8jjQeAEdGDHjymYPofihJNYqv3vErP5jbQgVgHXn8uW9H7WZxanXpCfEwptW"
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
