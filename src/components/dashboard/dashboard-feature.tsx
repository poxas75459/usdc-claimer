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
    "2qEB5WkBoqz7VVBsbJbjTmnCniZygqXXqExYKw7j9dYZDF43B9JTe7ZM7My26rwk4g2wqQRXyc393nunsieyGchw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nUfQHy9fJs5ATq6mvw8Wabzi2gBFikCRhvej7XEev9p7aa5BGxPSpKvUihf8jddRxTG15Jz3Y6KzujZAQn7zojG",
  "key1": "35aS7bPU9Ph5L5qhprcMYBWFX43tQmZzLQnR84KmtobEdCBPjXece7kSmaTAqhoGQX9JrmoGNwsR3vCpzt1W77Cg",
  "key2": "AvQ5g78gFYL9XGFWjCjz11TWHcSJ4f4VmvhqqHhQMeea5Xdj6aGuCyA8dsHBSuGPEKqbYeormiPox8EukEyBxKz",
  "key3": "23jkkPRsjkkKA9yw7woDKacswg2YFaFM3d2Ry76iKKTPHY6fcMG4MEzr3KCwkarPB4TCus2GuZsSU2dJmTox7xTD",
  "key4": "2ZVaJ6WQEjkjb6rvCK7nhunrgzVEnqcxbwMMcXReUGGzniUGVN74TzsuT87NL5ELdoX2vx9PtWfHbQRA8UQb3ECR",
  "key5": "38i5x7gmeXUo9hfKEdNR2FEDB2XM4y85VKX8931E5YhUGEWHaYE3bfjyFRwCPi9xNXnznNrNxFAxFrUPdeEkr4RW",
  "key6": "4mNSaewcPSW9LnMRujWoTdSHc8WjeoeDCtYAUwBfE2FPxi6WyV1NesmfwJzmpL7mkQyqLTC7snee1WvHou7Ngetc",
  "key7": "64Z7wXPsKdv3kztQZGHdDNmQkau6n5Gbtk4KfqjDKHrqLKcvsEotB5YWgJoPLu3kArR7G2WHRYA4PmsHfNgXkxVb",
  "key8": "4E3TazCXsWTjZvPeqJQvyjS3kudaAAUATyyjRgkcfqZgGLP6yPCpPxgp7LiwmpfQ7ouA18U5XCkG5M87zHKYvR1N",
  "key9": "ZZEwphmcmoUbkqoXYRSnrT8SrGx9xwVXNWe1FAVNrNq26Mbz28u234s1vLDGs8W5TjR4fjVrcfashH9KPNHW5sZ",
  "key10": "33h2zbufzzeXJisjHK5icd534GUrpDnywwgXBfCZzjV2uJAqHtfVReeNgTfmzi1r4e6z9dRGHaqLvyoYdEM4iWZn",
  "key11": "6VU6jCoaqxi2CDVoA2p1kHx92zjUryA2SsZJD3X6jku6dZnjift6tEwtn5W8GuwoPmbUboBb1Cc9EvotNiRxTtf",
  "key12": "2xjCqzRzJQti1caycoG4nWsYfyoX1BaNrs8pQGY5PJmcUtkXrjtgvDmtsRRoZ3Jo5W6rNKKVQUy4LZFctfCpYpp4",
  "key13": "4PfgPMmJw3cHtADLrKAvdF9Y9P2RnH7EogiuarW37YVQ7wFEJPKV3wouoykNuomxcVaGZzWxnT2uhoorbB3coAwW",
  "key14": "2opBrGFsz4RwbNWpYM4HBycCGBx4fZDN5EQYwnP7rwGqHqU3Swad9kL2VsqdcM1ZV8NFuqRoLrQXikfMrn9r2J5p",
  "key15": "2C7gtHqmm3EXz7J1HAT7YQWtxGtUp6jvBD5NhtjGvrWQTwFTyW9yuxhU9DWNX3dULbrZcqb5MYrD5AzGfGUQirYp",
  "key16": "45fghpR9JrF1R7FoM1PYorwGoCdUXTJf5XxHEioXD5QL7V8XbLfCVGCwALDKGtUkzuukAmBFnL8AXH5TMZB2wyTV",
  "key17": "4oH3FMfu3LzheU5zjj1d5f4SCfF4pbqQnCXC5Le8ojTT7G59vTpUPL3tqt4pEAkDVEs3QzFxr7JtJDinqiwPF36f",
  "key18": "3U8PD1fDJbYpCwK8yFJT1eEWHMQJNeChyePk2hPHghJAUvUHfoJJBUW2R23Uffu8Q9GThaACB662DduzdWYSbJ9C",
  "key19": "4qehwP14B1MWQ8grVHp7kvt8m1r7rp29eeVVbXKNqKm4jUcyDTcTeqUJ5yaJtjnGpQiTpxuG4EAx34AGoz1iJW6C",
  "key20": "7SEFEuRaJLRYLZND1rvNjmpGxoV8dPFb5PMfqW7VnoNzR6aWdStAHhYxF5fgaCmuaGyYUMnzcd1rU8kfTecTrd5",
  "key21": "hSkYAi88TErgC4CfJzXtuHxLU7K4pRoEC7x68u5groJUZGnFb4JLLdJr4Xt7F5kAUfjvmsAzWvSvym9hoKXhbaE",
  "key22": "2Vkd5aX4pXzdcGwVLgDjdN4Q475TwGAdAs8Z6XLjuAaJCQZBaqCKhUgABr3uzU1HZ8FudpLgf4JyaJKMDzvm2Am2",
  "key23": "5Jcq49cXNY5gqaiZVRffDGfVR6xkx1tbyVc1C6EYKFJydyz3BAC58LooGLbtD39okh9MvnVHN32pUzQKXwUoVPsL",
  "key24": "EUkPXbMHuFCqpxu9SazfUmxffi6kKKBwzNNSd8S56yyDEtjKSz5EWFLDhAkDtkb5xMAEXQEZbZ6WMfKwb9PwRr7",
  "key25": "2jB2zKKBAyXdoVZx6YEWL9BS6KQNVNGKfdwj6vJw9JAW3iBXWBaQKyjjab15pg86Mhp14iCVreL2yGU4yvk17U9Q",
  "key26": "3Pbx5tZDNcqZConZzxBdyMfxVt7R5HeYpqfiBDYrym29Yx68eQbPRg5bHG1UEZj9LFBmB5TBsskTuhi5PWk8TgmC",
  "key27": "3u1VLnfTfDiJneWMqwcLjBo5Ztsc29y9rgyTKMB3XefwKFYu4HDa7PXZm3erJe5DFNLHGY4FbdwuUjytvjec8Q3V",
  "key28": "4g2YeXFPJkoY6p15YAGMyUA8JpbjqtCvy4a1pZbtbfiLffQJhqMNLRMNZoSJcsKKStMfLvaxU6Kme13bHv7quSWy",
  "key29": "3HQiK9Qiq6DYqLfYXHnMDbqQWLPGkq1u35Aof4nsdJz6Wp9dAGn12WhUTR7J8MbVETXT814Ubo1iswK345kTU4qq",
  "key30": "3kVP3wfRJB93Fettf93tuxNYjdFtwi1rgQsbfkWSgK1jp7yRUXxbusm5avD7QPRWR8bxSM56mp8Uqca82Rm62xrZ",
  "key31": "5KQSQKEGhkpAH6sFASj9XtiMmJYtA2WyXYmdESzCvAGx7Yp6ARLTRSUAQUTgb5WKryT94ADExTqU3Awk43HWA1Rs",
  "key32": "3C4wENufjSvtkTho4deTWzVzsU2zcmrk1z1jFtRhGb7uJSvQQ95faGjij3befi4HG7PsER3qcWFS1d3CXr8KvpVE",
  "key33": "wBWueQSZdA7nJ7LupyeJGxDFTrPSoutZ7xD1ZV8dsXK5J3DXVwMV2WfU6f9irXNLAf6d1cLAddVhutygEqhYPeh",
  "key34": "66B2EXiZ9P1yJrR9TJrzPsAhb73dw4uUEfM3XyqVqhcoRV2BxHmoBsG9cDpe2c2XGJyw18sBjzamaJL5NDQxjgvF",
  "key35": "3d9AzoTiUppGSZ5oLAx1PxaiNqVXosDSaD8EcvnHhyeWkeFGYCWNpRkpzuzU2mxK9bd3iQ8thxrLvZqD8UxUfX5S",
  "key36": "fC3WEH2ezUJxqkmb7EBr6EnZcSSCz9Z8fdNk8Z23ULWCrMumymdFcQ6GkNFVMzWw6AhNTMagNXZQSfHiikmzEnu",
  "key37": "3CXeFaPUrbxiaCYGRq3qNWXrPohBWTj6utAPYbyCxpgYW1DDduDDyvb24Www6xVvwchDVUbSrt32Eq9E2GuUpfdD"
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
