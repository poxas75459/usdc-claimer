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
    "2aEmorfgHjzMLm7HDHepRzdrzgvNG4qy4RftPT8h6UPjcfnGZHxnBErNUi9oz9CVmDCjsxyNUmBAqqnrepNMoLAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mpjcmve9eb1EYkS1ZX2Ghysawg7n5ziJnLv39yaeM3u6uKbQYEozXaXwAStE2J9topLLdGERVu7QXVzx7ndnoKh",
  "key1": "4aLNXuPttZPLx9gP3rvSmPf5hvcWQcrbesrfBpYF26Vq9XDeiDgn5rZBx7qYA7RBv7n2jxqPaSPdodtMZ3SMXU85",
  "key2": "4c5ZhavRHu7j7BeehjLAHZPapSUA9QxVEYQmcmrsQrEYDz2v8k7LZbrGfeCN2Ah3quzPMSVXuh8sN8QZTE2vqtrm",
  "key3": "4oBHnbUp7yRRLtCKMPHwHcT1NacCbWYTjLqTVzJ4DyuDiFpwTZmUXQTJ7eUoDzspHNmoBM2qcZ7i7YR5zPjQLpeq",
  "key4": "2A82WPSmD2AAHrTYhKJRBzDKcJsL4hP8SkZsKXyVapm8QaAdjmxBc5fdnBRcsPq4Z4QfMczqmEMZQmsq6BR8aSvL",
  "key5": "3AtDo9npaByt2YSQwv9FmooGGw9b1D59npJRGzBWBNEX9YFQNsN7Ajk42jXb6upYq7dxoXp7raxg6KngMpgLqx7c",
  "key6": "3KiEgx6jBZddAE5asw7obJHQ9PL1pA6oW2mWqe1kPf5UuNcue7MRP4k2CZFeEQnQtYhKye5BUXPzEcAwL7CrnnT1",
  "key7": "47uE8ZdsZoic8LVGqyiH7eDbWbpuTwto5Kz2xz8uN9qb1Dh3kFLws58iFePTSzZDEAw7puSKQaBgxju37TRwdFsA",
  "key8": "uQukhepxqq4d4yZrQWjL7zttRcyRsAiYntbKxvZQMKpWJovDdMLBjrh3PztPijyU9tEL9DsiRUmuiNTAAbRH1jf",
  "key9": "5sz9Z2eG7jiyr3kCQZNFnsbuRghP5M4kFEwVJgXdPxsuUhmd7xr7HmMHC6PSoPuDkMGo8GSWBEZ1BMvaDNn5HA6C",
  "key10": "4MtPuz8rHdJ88gi9TY9J6iv1MNE5rHepftoqJWCR4AZeqfg1igzRoVjVUjQhhHRv14g67uejcDRRCRxLSPZ1bZz5",
  "key11": "34G69P4BkucojK4hUqmRrELt5TwNWGMEKyyXyzi2KSPu59HKcz8ozbU1XdL5mM4sYXUiu1ADchDuyzrcD7AaYsrA",
  "key12": "2msJByt6tE8aMdzMC4RFExXVrhdrVGUNq3sikYwCFK58sv6KfgxckJVLRQZYZRXPiwnyw2YzGAmkNenZh9BbvdbB",
  "key13": "4MY6uYtJqwZpMuwKCkmXEDj5dZuJ2WegDCU7dxjBFDczvuostw6mP6yBy9tWf6aZK8WgyviJj3RS4yGXQpeqN4m2",
  "key14": "53hegaehoxQEGUFpHfWFrGkT95jrcNpj4WLaK2fJsVZ4v9iSHSfrEYQs2QdGtKo2aWkhy2VYUZzA1VchhpU5hfnF",
  "key15": "2LwnjNHvVRR354uRX7kxHTacYRgxpWzHgJwjJYos7kLh6hwFigcXATP3GVVUp5SetejVbZcYxVdpvaL4AoTeRo6k",
  "key16": "3yxBYzhioRkt5c4dZzNS2bDMFwkcMKK59t61tUtQXYgFqJhNsJhwuq5vpogYK5mRhFWpAw4FN7pUVRJEg2XsRXij",
  "key17": "k3PMLzGD4R9TFBYUZUumcbxKnpfJBDtEJ3EP8WCVLYtzGeyeQC9pks9QFGt6iMQbzy8wYvveSuF1wL4B11tZsgA",
  "key18": "4kwj97by8UzZkKhSU9Sa91day9pbE1ifCBkZ6rqQvBMbdqfCwn5UTwRGWWworiwbu6pA2dvbVZinitzsk3ujuuQn",
  "key19": "3MSnhuDXasjmWsQdNm9cheiQShCEpCwy8mHw2WRYGXqfPjtfQjz798jKs8S6QA991ByJQYZYRDB3mKzhdmW7qznG",
  "key20": "6wvNHgCrNq6WuujUjDZRbGtCzqHMmt6ubuPY3AAxG4vUbrvVVQ16prQH8bGsXTGtfUCiGs8mQZhP5Y7T2pSi2Ev",
  "key21": "WqM8venj59DYbdFQG35wbFgNu66czhgqpux9DXMJLyT51Q5Ajg5LMKECKZ7LybvLWC51uguY6RbiQuzG1X9da1H",
  "key22": "3899tAMExpevmExSmCHB9njZdNCk3meNYu2e86eFLvVQumWxbniAWB1x98JS49ESYtirwBUCEWGiASGugs7gjmcK",
  "key23": "2ypyobmdPVRE7ZD7f7KGGW6HCgGWXEArLf5FuVa34QwJf8L6MU8YXqfA2XUesVqa6oNa3UM1wR7Tro5jqxug4PeU",
  "key24": "2DJBDM64qX9i33VHzRpFf2PuPo8ZJVkrVbtxLxZAVNeoMWsJBFbEYJNoiCMVV87RyNoALCLctKTfpFF3ufK254xm",
  "key25": "2GsEQdWJPTSpBfzeB2kh87z3agjnHYga82QCUw1UtsKLZ3EmEBytvwhUjaZ2AWG7bfMrmp3K8vRnw2WdpJdog6Mg",
  "key26": "3b87ULNSJJz9V4t8BPJrsykh5BXrt589BBP3PfC59nTiNmCMJPauSsqAzDZpm6WXdvru5NymHsU3MLuisJGK9ukt",
  "key27": "2UpRe7n6fv3NRf2qCuuG2bcQMcWryWSK7UStFSr9Vbkut3xxvrsKrFmjLjoNapY2fS1GMNUDXrHBrUPELHC5AXcB",
  "key28": "EJogn1AibmNQp8g1iiPL44bSCzH4oZyzABUewNUvkfLb1k8vdvzwxqqLgktri8AetKeedy3KADLvwZHsctkzufr",
  "key29": "2W3WXUaA44S6zEjqHXzTULFL3k5PDodBSptMjE5zFB5mw4FZqW72YFBhDGDoNq4cC3bc88aQn1fSfvmtTpbXCSG2",
  "key30": "54S2raKjkY24YTdG7A1yDbkjJfgkKPL3Ex47sGbMFYsusY3WFMSUzWK1xGuCYzpPdFjNvr9guFrjkwqEokXaggfM",
  "key31": "2TsecdNR4uGfNx5ZMeGMta4Z6KuVDSFsfcMX5Yz3YBFpYTuMMwGs6zUz8oPev6MUTaAANLyf8hvufECyLJMmtPUq",
  "key32": "sQ7fZtEZBfPj2sTq8c8Keb7FAAYn89yroHVCwcWf7Unprwfd1b2x7pbEfkZqPft7iJjsateVrmBmsYFn1wCWqh5",
  "key33": "3heudJA2EJebMhGu2FZQ6BGzyU86Jy3TiH8L9JCLMxRHpnLiLk8NShqZYrg3XE4qrN3U8sgyxQARfsDfiqRTBn5M",
  "key34": "3Vnx1KWUdVrVTYWMke3s467NyDpvyzQFspf6Vgmc8sredgx6AHZfNsi47TM1USFKFzSjdZxksZRfe99a6FfcQXre",
  "key35": "28zKzB4nLBgn3WAreYGEC3ZJBbTRL46g8GwaZDLxzp5kDWRzBbpMyVoVwz1NtQDQT2kuiqpo2SyD12LeNajFKGHn",
  "key36": "3yazWwerHFmsDYxva6vrDnHcmzQdynDyFYhftKXAo8BsUWDfya8AKjyVVtFMRCbWdnNktYB2Hy5WYUmoyTFREyUb",
  "key37": "3gxgQUxHjgAibnjkD469Qk934jEJNKJS8TfvMGuNLzGA1zqy6NNziMuQcrJ3sDHrrMuTxjmbDJz3CzhUyBU31fG6",
  "key38": "563VCikhx7xZfARAEN48wp6QSGYEYQ96uxFqpqEKNtGqjZKhfWtiaZpesAUPfJNcmc5spRkqdLr9jhjqAqD6qxke",
  "key39": "2giYdvox9sZbqeFnXYtJeSzyYYY7mNQcPzQr31iEw6wbWLwa2dbSLZQJpbgNLRbjUaKJoxyzRUHQDeKE7jgthpNH",
  "key40": "4vvmYW7M4dFwvxAFKoE1eKVzAvPoqkai4iKvvxNLw33RVWBcT9JXzKAG72nosqiStwGf2J7rJ3wh7rBtDUMM2pPr",
  "key41": "5w2uYtvfPPFy34Qtc1TBERbsjQ6YZcmscSxAhVR8Jg466FcMZgtHS1DBNBDMjNgzaf8vvm6seaAjfEigChknaCZY",
  "key42": "4tCbknAAcdrhcJso2mHs3QYaGyhm2sNGBw4zpt16NHUymLQKvsVkYRu3M1t4LAJNWasW5na6spJNXd1saBEH2hfk",
  "key43": "5r1JLGP9wSB9qu5Q771htQPV5o9h8q5UNRMnzWmHSQnTWYAFXmojgYNyTeWANpw62Gp1cmmG3xjRCaHt4BcNj6Px",
  "key44": "2KfDRs2YZYrMtR8or3gXC4FTfjVjNs7ebqv3TRGpCvmsW54fGn2rJ9Ph7P7qUv7o3B5UadBNPjPSTTgPok4z5Wm6",
  "key45": "Cmz9S3kQABTQXFHiuswFw2fwJ5EnJsimgadqyxkNbJXseQgqVGBSfuRMuLu6LZa7kcfXEQe9Dge2ZXCPGVeYCyT",
  "key46": "7S2fUX1WBE7THXqbdqdKQgQ37xn1PJRJypa9W6SWnxdCimzcqGmsrbqPhoKuxjDBRofG7eTFKn3bTunoW5HCCnt",
  "key47": "muFdTmPJvsNcTt4MrVc3fbTqfMeyYR2CChJjxb4P8g6Ku2oRF1RkMRKFFhTD288e2sMZB7CzvnEB72xmyT7mJ56"
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
