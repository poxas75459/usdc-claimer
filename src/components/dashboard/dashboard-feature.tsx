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
    "5aypNGbmWq6aoskRG2pGymoeG8SiAiNKDvrBFff8y94532qVuReUUpR8MLe6AoaJUEhKDHf915jWs5gtqBt97DCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z5SvYUUVu6YErNxurwWLkqzvHBjUykRcpoXx3n8dmU84RhERonH4iQoZzzyfctznQL2R7AQbZTLqbSD8qkbhrUX",
  "key1": "3RmKRuRGVcd5wKLBcdxfjLf26uQedmX79Q412oWz2CBL6K9k8NHa5GSh5FRfw3TENP6nbPeBdxHcuoe8NLuyqqXR",
  "key2": "2qhkcr36ABQDKTy9KihfS6q1G5rCzpgGo2QZtTSkvZ2vLsgz6CZed1TBxjpor9QDRa9jp6AzCXEMeGbkwuBLq8cF",
  "key3": "4hUq5bHmfbuDWZq8DLTNPdiyQhZe8kNazkBg3B8ZDD1nf4Fzs57eM4PzQTBVkZ4jwiP9ZFU5XnqrSjgdkEK8NAWF",
  "key4": "2jpjUmdzxaGV9JMXrHuQkXw7gscqMswfABaEWEbSNptBHu7WEWw7LFwtRn2GNedEQud8wk9s91rVfcMzvMaj4LYM",
  "key5": "yoGtXjLGTEtw8pGsXWDf1irjuaPMYF9VtZbsn7y33PEfF3LahQXtwLkT2Do2Z5nY9Z1jkKzAvAh9NRQqB3boFy3",
  "key6": "wCThYqR2jFUrxiyC6db5Gczo91oQFYPuYPc4DonBJZCkjGuBAJvANfQwUm14R1wix6HXDx1C2iUetBdwBM3bqqB",
  "key7": "27NNtfxuFpSuyNatdiWMkgBJSyCb8Tyqd14sCsJUZJe2tTiXXbSe9cXjzL6ftqqGbgvyPt6RKxGR3fiis1DLSzwn",
  "key8": "64Pk6Dcr22fFrwoAnXbkcuA77WFhS9o84nPPTMkN6wG3KFqEQ8WGbtsYBSYGZ2hQuiAEg7Xd3KvsoKBqJB6etzMv",
  "key9": "2s7sMrA3nfZ4ArKnuebsMuMXnLKyfEJiV3WH12aJzxfzcWMDhMNurq19t69dUrScUtTnanSs5Sfm6PNfMy6n8rG3",
  "key10": "3NEsGNnd1LxjeiohUiwgkypcsmAR2fJzkSQknLzFXtCRQzpUcjgN2qiVuvLtEjv6WTgczogWV9tuUoqWn9AyAg3y",
  "key11": "GJSCf8qRrCoBb6pyrRHa7DM9D12rJBJeyMK1dKng9fXwwcVu6hz59Ur6A8UfbkqG7Lxh46Ds6fGzGYpdS9VDAML",
  "key12": "4dHzicqqzeV4dnSpYmCoVajAV5TvPiUecsM74gc3S6C6hyi8usHD8k9bqqEXbr6ok31E5LGScpRATpHkQ4yaPpT7",
  "key13": "4w3G1ibCQ3xLPz79vz7r5EHXknuWbYuUribf9uMeodzzNfuSPT4cwhbeh97Qg1iqdJg7g41QVVitTBM2z4wceYNa",
  "key14": "3Evsowt3fjno61rAhPwRYCHyKtLmyYqBzhvR9WdsnruJYFQUDosX6SWH2cVJRhSgtAPFQE6jRgsim9aXqLcaGvJb",
  "key15": "2DUDEEtxNxuh73pVdfjBb7xpgt3tCCSP1gdRhMPAHHtxwiwXLHoS237eo5JkhCNSRU1fvzEWJTzkLp6RbLLS7k2",
  "key16": "3fjzsqTBwTpH8mq2fHHM4LHacPLt8BRzvvPb8zPKhmfMT8xyTsmLgQGeaxmY8cSakRiVGLzBNGU6sSYd8pzNSYFH",
  "key17": "4eSGE9qFmemhTpvYwAWwiPrbfkgjFDH41qoBpiyEUhpLBVmdG1oTyu5nHG4iivX28AUA6qNsAxAfWWEL7JpcJ7N5",
  "key18": "2mUtmKgrMEbNsaGYPius2Mo8ym2DBvgiA7pEwC9AYnWr8oGpQVN8HokmV78gS7Uw2hHA5qgfHZKfCTJ8dpvtRyzM",
  "key19": "617cpPrUxZzxJGhvaUjFRadGgCibbvauV5615ZJwB5ZZJLxJ4MjNEyfcXsCBfiGSgAjtatiAK12fSrLH9tumqkhL",
  "key20": "3dwLcsKqgjkZd1mccdqsRc4hUSBhPrCm1dEjF6yYG3bA2bsVkcp6wPjNAdk7fQiwboKwEWDrDVYwvtLkoaG6CARN",
  "key21": "3ZNC2RHBQsxTxre7yv3t81dyuemhESdXjpdiKnoaYSwZas4nxyQSGzegXuTgQtmq8HEvT5BUgWYWDFckYtpJm5FU",
  "key22": "2JCfBiemCVh9LjMxqADKzbrV2VqmhS5K3ckWXqXzqdHBcu1X3G2fNk8ERECMA5GYSrGFbyxg7bQBxNL3BwAKvR7V",
  "key23": "54Tf2z8bx7Ymgwm72iXghZrH1xahA34tQHrLVbRxac5sGGLvzF4Y1ifhJEV91De8qCCBw3Zzj32CemCsHbsSAkXf",
  "key24": "2iywXcLZBqsBKMVjNMVEMy87KJ2yWZeSpJTKLbwmXvMK8NFS19EAH2pmg5THoQ9b9R64ijpWL3Wz6ezUqThm1M1F",
  "key25": "3cKPVvJDZECUHXRu7khRj6GryVHWT3W6JhsM6RCdNbKiNcCy4rgxjqh3dDBJXGRMqxSsjamhKNkT8zqMS3wKHD3R",
  "key26": "3NQRojp1srehbiuj6LuPWF3v5AuXGtGHHHauJLWAhWU7G6iSBjJadST2fCacA3VWuwd5HJTABhryredDcEyDbz3W",
  "key27": "5PpaDH1xcUzqCuA9i12QfQkCD4rnyQwcEKezicCpsfutfqvXKcMthsPZfFgKyETcuaNxjHzr8teUt5ZRCRTcCZAK",
  "key28": "itPevMkiMth6AXRZNdSaydT1pPYhirFQTQ1ru4VUvT5XD4m26nnb9GNkuU8SrJWQEPPcpwa9ZMaGhAFQSXVaSet",
  "key29": "3W2Jbj74pn8UmzwwFSD3N6drS2wqzgbuDxXnwVyX8vW2q3nC74bDW1Wk9qnsNfh3EUpXfrQ46Z6yRMDrbxDctVmA",
  "key30": "4bXTNSgwNteEFifn5m9MQvwq2cg8kMiZGZSjiDSKHg5NSLKPvcEQiTzsXPYRwYJFGLzTAsJrgQyYqSSkg7jUWJ3L",
  "key31": "5UgXNCRSeMES6pa2SNa8KKdsern8BaU1Emb6wEwXRvY7JUu98hMQaB8JXGYGTDD4GwWdLTwesQaWGVkrpAWSCEb",
  "key32": "reJ8prPP5FyJZigAyUnGxVEXUwsXBGyh1UZYaXYcPnjhW4LfJ1MNqaXRca1z7LAky7uUMYq7j84aKmak27yk78T",
  "key33": "5GENqbMs1N55r3wBhKrZUfTXHqMyk4FuaHFSxMGc8CVs5dph2hDAAvXBMgUBjPqLYAxRUh3BeX5btLFyeTSNCwX",
  "key34": "3RNCuvr9QJF3pEJxFD3CjmXSC7dP6oSa5AfLDi8P8zmhuGtHNhHfczKdd3vfV1wgFZ1qeG6ivooMf1JuPH5V6PRy",
  "key35": "5Qeu4PD3Gsxrh8Cc8NigTrKLsvmwS3jLzvgMpKAB69coimbLAakS2KsZKKfbk6N5YdKC8WWVCvZDCiAAhtX8BHSv",
  "key36": "4EZpcDHtQwNuUK243B5hKmwJsef47NoetzE6K9emJTpSYgzvsA5TVUVRq8agGavLRXAMX3WsPmvZ2z3rGKewqPEn",
  "key37": "3Bw1jDDqX1e6aDLX9bwixey3gEDtPoxija5h9yyJfHHM9jbPC4uKXmfK9o6WZVJKQvfFtiKuk6AKdYvC5GyYwfgj",
  "key38": "4L6kWfLdiUEiGpfZCYhbC2jjFrNiPA4oQkucrkGWMRgDevbvwniEs2Zd8a37WyWTDPa6qGBkgej3Z5yz7bE21N9X"
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
