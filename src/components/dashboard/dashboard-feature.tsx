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
    "4E4De3ASCcg2YzGspoum5Tt6UVAmfQfiwtTXzkqp3aEGiFMo4bKb4NCdQQbvF42kQcXUF8etsKxP9HzuvfysbTjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DrA4SkYXj2KnYmtD4hdLNAcyCU6TNKdwajdB34P4oh6VT9fFMrNuXqx3nBm9MgQ35BjYs5oUSVJqGCXrb1ddy2f",
  "key1": "2D4NGB7W6AfhqG8939FabcgC4Tvvb4JPWjF4CsSCArHBd4n9YATMggCfiQgYAMWG6a655EatA8Tr6fYDizzCSG6L",
  "key2": "23G5WYQNELnX8jabZLMcNpVg6q8u5xJ8RNJq17babpVPR2oyAj6aFimMM42hnRttTgwxMy4JjSjXkLN649Ux8yAN",
  "key3": "5NVayAsSZ7JJLjwY5an4VsEtvS6RrxXSTjySsddPRXeWM4Ccc33W6JjStMzS5z1WKF13VzRukGFX3fzrbLtrxdw1",
  "key4": "4kBb7sDjQmtZDjzAhgdS6CmtXXum93oH5yCZNqv3pV9UAzMtAjwnjEZt1wd3D3XAsuC64p1HXgRf4GDUMnAxMD5K",
  "key5": "2PMb2DRmk2ncd74Vvahw9LQtpH2YKnoqQs64qx9y6rXkXoAo17kyoj4akTkSsMCBuSLxJjeayQYDwsytXuoxW9Ss",
  "key6": "c5g83vzqF3BDpTuVQERRWmVC2xxgrise7bnDyuLXpJ4DHVX5GXZKfCF2KE4Cy2zToEqfLAqDnjMNhUPRqQTRDUa",
  "key7": "5QyqLue3dgwaekV2GfnTdes7JKZFsnLDzjovmkztxzBetuTLUBrnXc42rxSCYyLunN62pbgrymQv5oo2fd5E4Nx3",
  "key8": "4cRNEJwargFt4ZhYzqNCwg2bgPiLrfDhfy7j6vsJ51XjeGgfZaUtZV7TBcVoLYoF14t1q1Qrke5JyPseXCLK29Pn",
  "key9": "5UwkyDGPpAsiYDmzgBzyodDAXQmWj9ZZSUuMCyeXTZCXqhv6AG3zGW4AzfWE2ijrej2rdSMB1AmWLTPcYqKG43uV",
  "key10": "4NT3xQRMmPVyuz2MuE8DjQgf5jegHMgBpKb3WWz4nM5jZR9biaFGEgadbWdGQJzy2X1Zq69EzKqMxYzW7bGzCcfJ",
  "key11": "5WAXicfky7ALiD2sTNrkdKsv5Zq3ZQECwqjZTDDhtSNrp4vYH31XaLLo4wgVbmmmzt6Hozc1dHYpwevLPRRUCSiL",
  "key12": "5xrqskhxKBk2GvbdWztAnfmdRJVvjGLL3wMy8JUfHbyActJG8DSM2NAQYUuD1ht9R4bQUyqAQVjJs3TErqE9toGY",
  "key13": "2a78XjAjJVvwcc4Usesdso6S4wvKknGRq6wEH1FB6u6d9tH1ziWnxGWGGx99ooQiZs6XYUEJhuevw4pwMGhUVVFe",
  "key14": "Svr7AQT6SfHafGgE7CqdjCk4ufrVF6xohTRVujpzXEM5TfUtpgkjAvxwo9WHK4E6wF7GB7RgA5BGoq4M3qKFXah",
  "key15": "37AqXytgi8wN884dNi9icEBQxdndi31XPf5yETJqy4B3D6Dy978vkLqme78pAMHcS1eGYpcfVedXdf1skzmmCYoZ",
  "key16": "3QwpxP18NXdQQFQRnK1pXSoo2fNqrLzrdZDgc2VHxT8pojcYQH42RQaeRKKwdtCcDQBKqM9DaraqyrCBjUEVbp7f",
  "key17": "3uEmJdM9zS6JP6v8Tkt7naNu7kXrbUxn4Va1LQtEY1P8Bw7tPFmeGmceKQ852PLtNC86qBgPLa5JgVfh8sGg6ep4",
  "key18": "4mdtZCNM1DD42Cc1eUZvhEbMYb7K9UwJsXyvKVwyFaJvGTEKyzNxVimHLx8uukQG8auZtXU9RqrPAmTnu7ZkcoMm",
  "key19": "4R1bYfpfjm2k6wDUReKbZSY4xNQrefo1JDv7xzytmKCGs1evoQTs3JKZrbPTdoiPQTCLMcAHn1Fv1cxfEd9RSmAP",
  "key20": "VqLw6iicz1v33PpYQFoHgyLY6NUTHbPp6ZaCAu15ZhZXAHkCrKJeYtzXe23j92jTpyXy8euHUPeYnn5ne9Z9rAE",
  "key21": "5vgvcCaz1ZNGW6dUbvYEogBVA7ryqc5nWg4erWaJCaDgTRVKeKKhLWcyLC8ReDW3YnhtZ4sJ8nTRixeg2Z3cMkKN",
  "key22": "PSmRaj1QdWec96AKY9tb44hiYswnhj8iJ9sXPjqeSNF4dvZb71uvJZjirVF7BxgX2aTrSz8dZZXJyQ9rrrw68wQ",
  "key23": "46putCPC8bzsfcy1vhQwNU3xifwA1PGFnf1iSPUTKTe1mkRnztAhJ1dwSDjhiJ1VisgR6sYfLtTqjP5uMk2FtLyE",
  "key24": "43nfJHoMTZWrX1RfuqmEVG8gg7Pdt4Dr8LrDYBKRhmWfU77bdj413DNvdS9MCCArTp4BVxASsUy6HbcsBt7zpLDV",
  "key25": "2oyjfd5DdD61gF93p9YJLsNJZaW9QKqEPgCLJDCstrpBc4Qy2DZy7uoBmMZSzKKZhdn6xTVFr5JPZKqqt5DvRGy5",
  "key26": "wyjsfCpXzQjZhDWc7yBZNC77GA3CEP93LYJc8bWVc3YVP6DkudTXdGyZWM1tmqy7RvtfYDJ2LETixNiTq1hV8SJ",
  "key27": "2qyCuGBmFnSDpEKfTo2ysi2C1rYWMLfvvLpyEj3acqrKDehPPTP7Q458D4W8CF25NXy1stux4f5Zups2xW7LL6sX",
  "key28": "3MHcyTAvmJjQoYwySSqtf7Uuxmnm3JmoBVnrM23LK2u54Q5fqjBHvdpaKSE7gh6KqKPYwPbhtyCzPuBdE8UdctLk",
  "key29": "3HnmazrPeQUH3yUKrvHH5yaTB9f89TEY82MyqQk2nipcQEdq1F6G8yfgJSYy4Ze6QevbuDucyBte2BYGpbacKNi2",
  "key30": "fUniBG7vf5G5p7CjyBuNSsUY5N9KjUVtVkGzgvv32kmug3X5JsnPdYvwq6TSAJrp4hDiyyidMgJtXBCJ42h5EJV",
  "key31": "4w26DCbevSoLxu2TLe6yraiqbc15BDgBgFmTCyMrsUk8ZQ3N7M5UgskcxkvigWvsA6z56Lza3h7AHVcFTXg8tffr",
  "key32": "41CroUBxBnikWCC1U5HBhr9YYL11964gXwJhAGeuqMvdZfmVimX3eVUFrYCsFFDGVeX3WrBL8umY7ATUta9X1hif",
  "key33": "7TejBY5LdhGVVz6Jj1RGFoLYie5iLtPBuAKuxftywFd5YpKSxPEdgKoe8JU735br8yoGQ2jK22q8jGvKLhVpC6N",
  "key34": "3PvVPPKLyP9ZLBzJ1Rf3DFeBdJj8xTHDNduEM87Z8pXBzEKbrWFDR6cRn4gUszarQy35qVQAvGMqoeAdfyy3DurG",
  "key35": "46Lz686pmUaJ9X5a881GDDtdCFzt8Gnyrcqv2wbsHSvg4ztSfyXV4PzcaDgFMQRbwbb5KSTNGFpuWCtZf8AFweYZ",
  "key36": "62e65UKii3UjFHjdnPT9HEfACnmAfoYM2s5W1ocww5NWWqqBWmRbWs6yFWzCYUanrBy8QF292uZ3G7tSmT6EjeTN",
  "key37": "36MXpgS3U29QerxCyeuig43FQAJ35D7Be9FpLrUWCZBALJoZ5EYTtEDWj9Ve1sNQHGzJJ5Bw23HLhctZfLKFF1aZ",
  "key38": "5VJs6Y9Evghe4ms8oNd33G6jLaeg2ooVfD2QF8cDaAvjUt8XvXFWmvr8SxqnfMeb9H68oFMDppVoTzZvd3766cpy",
  "key39": "353jHEjk3gihxu8KY9BDhsC8JwqjEPoXRrWpyqXZkb4TXEMc77n1ZYRpWYgX7PukYy6XwPG1UE3HWKi7PQWtBhYX",
  "key40": "UkFu6ygggiuHU4Y6fkmPs8sVt9WBGHFD1RX8YUnUbu5e1Ywgwr8BPWkUPU7w98X7mQasaBZyJebLL5qmJ4speAx",
  "key41": "MvS715eoriKd4D2k7nDAQhqoW21qFk8WkEHnTokQ9eyaVfJCHMWWjQAWiDmcXoqC7qjMeD3TgsK27WQA6YFo27U"
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
