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
    "5DrWgVS1ERMQhATnKvBHyATzcXpDLyR2Mdo4r7FqSPg4YXME2ToLSrS3mp5u9DPQJZBhvVb62QWp9GZqz9jFVVYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67hADXvwt8AFttYu49fF8mdwQSsSoZJBQ2ajG17pKrVpUa3bmjswxovNb8rqTV31ZGdnLyAgCcd8wm67voredoUy",
  "key1": "3aGWBUxBJtPiP173gArzSgrJSHmmbCZmLNdPqyf7HBd2sJAAj2VSzLoMU4x3qSvA6R2AmXtaVLjtwLM1YHWieyby",
  "key2": "41D7A3kVCKKPW46Gr3YvLn5onnuicJBasoe7ecqcTwszxyu3CxMoFfYW7sGcB1FMYzxLapbMJjo9GbFed9HswwZi",
  "key3": "4LMskiMr4wUHb74CyXUrFBh8i9aMYbk2gaToc47WKQ4cYmvJF18kJh7151QTV2zmcwC3bgQKQiXLPRbwHDYcu4ZR",
  "key4": "3iYyFs66d4fsiBn9BuzbTMQiswepPdSQ7FbB6fsqmXrXSp1zJnuibxDFcFSPTkvrnAiZiJhowYH1dvycEBS2KH87",
  "key5": "RVZEyeA3ESSxy3mP97QGJAcQjMNJgsR16WZ64iQzakh36rrso1Gt3YxK8w1NCoCVrXFdEnNu4butpZ42mkgCCsz",
  "key6": "5hKomA2XXeJQJ1xRngGrRqpVzfGvrUVbi3NEHvWmreFdTkpeerptCfaP5K1Mp4fSPvCFDCTaWxYkRmUAQz8wfQVT",
  "key7": "UYBkryThJvt14pKnEx3mVKBetuqECoZxA9f719k5WzTaVS5B68PUTYDA2qqk39WLrqofrUCMr4h5gBL4irzh4Ho",
  "key8": "4N8XcwXa5gC5EWPfs6H1ccQZL4BFRqF6XKrSUpoHAJ81zaW4QzbQUeS8zqvR3YqWz6TqL5GmY9sF7PyhNdX8yycM",
  "key9": "2pUomt4S56vQn8i4FkMfFAuiZCyUK3rjSS81QkhYzMZfEbvy5XTgHQNbExJTxQRDFTk3BQPzNWK8a4LqEVXVjaeQ",
  "key10": "5FUcoKy3U5uxDV4R88vjCgLN1UDcK2nnkA8zRvHiVXa2JJm3wETeMjvbaCZFzdREoxKrifGY2VZx5yusv9MSuaM",
  "key11": "5wN6gYKs7LCQbJoH2R7X5yFqfd8i4oX94aeTyG6VKBwxoR6QeAzUBSE3jixca7beG9NeVA1jHLNLwUDGpoJYCGVu",
  "key12": "5q4xi8we5zmEfi362nL4w394SbtYrgoevpKxY43AuhwZkhAJvb37uWgK8yfctoq9ZTcCUusq9sjYxJUE6aZJR59M",
  "key13": "kj9cBNEsNAFkyVGbFdVFfWGyLbLCokLP9xfKHhSLfrcUM8ZYsMpYA1qgubxuWpjUmJTV5FBPYHBU4FNuApAG2tD",
  "key14": "1GRsoeCDyR2z4tGsb6shMQEwxASioknwx4SVDzdnVgoWv9NP7MZKp1Cu58VnFmik5JKbuAAnFCnzyYyndH2hsM5",
  "key15": "3SbuuHJ7Ww1xJ4mtLC8HTwb6UzDAarJedypxisVrmf6bXUx5dVaxwVH73nNykLXL38WuwKivg5ZJWsqQL9EDvN4",
  "key16": "4AWRbC3jKwMabibNNeABFAJZyB4UtRiEAxBd2cDJCi5GqExKwsmWTc8HuLxy1pDnjt2i5enHrFk5hGPfABgjzwb7",
  "key17": "5EcvNMTAZ9T7T6ejw3o6xdLAoNCXgu841UghBnVLW7aoCADjfY4tP5kyYU4fJ1ueX73PvMvaNp1z2AcdANqERVU6",
  "key18": "5TaDDTs1f9BGXxKK2jNPmj52UNvUyiiCT8vrhGPK88ZLAhvaBarVRwrgb4EfVCKym92HUXwU6c3UVcZMR6qV2ZKL",
  "key19": "3fFPjWrbkgGntUstPE8UEBxqpPbZreGHnsMPfqJuB2F9TmFQoAdheFt8E3rRrtCidLUxqE1cwzz5tyC6x1yyrVod",
  "key20": "3bEA98Cg6etebqjDcFZ7SkyDQ8AXqjuVrLcbmRzET5dBBegqdTd63WyZgUbykYer9RBJjuuGKMVgfwKujDknxi6R",
  "key21": "3MgaNYdD6AgTs4qmvJ9jyvNk8mKeR3BpBLxGZMCT9CVTPP8dbwmaFUeiJ8DNuezkLhayvHhjSbUVVMmdeWiscVBt",
  "key22": "2PRmqaWvqzu4A8Pk3jGxA5tdAuiqSTtD3w5YxHBK1XqJhXTdCDzvcz8j4JauAqfv7RM2ZmD9oqKGXx6QUN2YzURU",
  "key23": "4ixqsACrgkQXv5vtP4tamggzh6m7Wy6dxLD6sh34oTGZqCmEzwjWkPtpM5aot3aw8VemMJWh5NVcwZTFKyqodCoW",
  "key24": "61zYvKZmxYB4SDE7VHeEVkCqdoomgTc8qWYUGppNoLqNguwPLs5DdRqd2a9izokbKwhSnmrudiAdUZox366D5W6M",
  "key25": "FeXGpnzYD847ExvF921XwYjDzZRxiHvqYrLjbch67gMGcxfMgZnR1WYZCUiHD7U4pPkjS4iy2WLL7H4sw66P3z2",
  "key26": "2ddm4XwJXgn1Q1t2G2g5HM8PA52q3b9VVi6qXkTqJCj3LJZfmbx73jXvNP2BFP4moXtBRVXy52bfwEBckKakZ8BP",
  "key27": "3p7eaUGkh4XqLVfdc51X8CHzCqCKPa3s26ivwUbUyVUWYj5JeGFHgyUahJewfP8jmnX1Qy48joLGp8PcKa9Shh7C",
  "key28": "39Bpiroagztfzp3mJrkJFZagLeYQNG8t2JKBGJu8FgT6bg5p2ikmSc2wprrrXP41igQdPm1Mz6SRhj5ogu8jYpdh",
  "key29": "5CX1gMe6TNUTEbZ4eMe61yaNDr7QZHW2HEAZ1bt2txKFtv3w7tLKPSjanuhsvzC84Hc9j8PZCw92nCe5YMrUx7Mz",
  "key30": "57kcREpn2TSE57enRwnPUpsw3bDk9nAVtcYyAPcM9a8xA3we4We6qtD3YFLDyQYpfQJ8nubnEN5orm6Md4WpH2jR"
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
