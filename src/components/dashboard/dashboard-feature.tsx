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
    "5Fr9a5E9gZREQn6yYJNHZN3gb9N1kprFqLXN2pWL4BJxHhB6yhknaM1qjV2YEb4ZEb2f6UGa7tsKsqG4wFhWWK2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VbootG2bQWyrS6uEU7TJqxxFvujy6SbHybJxyVv1F8itJaQ263zQMk6tyZrSH3sjKD9ChCxFzNQVcDWDKBffSqP",
  "key1": "4jXbjWy63PoMFxYWoaR8FCjbL2Xpueus91gf8G6G1VZLk5zk4uXSZEPvbEqTsRNfqHTt1jXFbHwgp1x9QboQuBMK",
  "key2": "5QunF9cfUDbc45BM6AMRi7rZTtkniqBLNEzVoJnArXt8N67jiyg1W8uXkP12cQDnsdRJAbYaCXNqNLZZ2Uki9rbC",
  "key3": "2E2LiXfoTJzukNKhe3sbCsvDd7PSCM6AwpKjkEQJ3iZxWecBVxYSsstxzvJTxYwnxRukJyNPpUpczYm2FakuibRL",
  "key4": "5ouY3H9X6MaSKSqnDggi7grpsXFRpAzzZSwJwb4JbjHsk3RwG1Pk9eBo7bEnAg8QvZCszDMUSvySNSmEkLNSTPzN",
  "key5": "5dhv62gJzCic2j2iSojNgxFTX74pGz8GrqfZneHTPfFxMrKyPjybEfLW4uoZx4kn7NE31pu1KCVEsFD6AYRSxc7",
  "key6": "3hnUH1Le1Ne2Eu2xhVtyi2fE7AJTx5h7U4dS1uKPUUGjXs6tKzHYaNzieGoNkXaAbGNuGWqnzGjzBSo296injHVE",
  "key7": "eeVe3fCUryYtcV7578ocJ9Z9e8a3CgDn2FSAeBa5ENdT6zFhCExcKYho2LUNgTacXyBMvCFUqrupqWb3Ms8mYhh",
  "key8": "434UsaadrRcFpsLRABCr22tptbBfgT3JChmWuUpTuiMzMZGksSdB5Jb5skqudeMxq2e3bfHRtqAr5URWnyBYHSqo",
  "key9": "2ZPmjbCjm9PkFDn7W5mp5nAcN6jxPn4dtFWmS5Lt61QoXBNiBKPQNCWKnm81rvSLpf8AVzECmRQs7566wpFEfV8E",
  "key10": "617EnV5PtTWHbunURSqBuhAMTZAGg5kR6zcJ9jpc5Mnn3nGScfAdBWudKcdfjbB8TLt95mPYp8DNd3rgPB5THd4g",
  "key11": "4VuWfDu3nH6H5R7hk7rG6xoBY51JPio3pTNFDyUTMr9MZxevztRzHhUs9cPNScZcFzirhLwMj5zB3XAiUv7swp7C",
  "key12": "2KPvrLnsVauLFACG8NThz2rmANrPH88FocdbJeT7CeFjCanPZFyRdCyWn6F2RjA7GeXpW9rjLYJHqyifzGDkb3A",
  "key13": "5SokYTFd9H3S1yEuF636jfUT8qBNyhT5mdMVb79BCLjuCagvBGD1p6ziLG4o1zBtbaQhcLRxA1DFgNWsanJnNHpC",
  "key14": "MdhvkAfEjz9yEZHWhxZmgZM3ArpWxnSoAMhutiPmH4PrhoCWFWVX6E6Lu64FvRrZ9dgSGquSWR6Jivrqnm8V7Wc",
  "key15": "2ppFrzCsEE9J756YU6HjBPJkihWPk35AiSwhhvUTB2PdEWooUkrAvmKL64XNFKLRMQ2wivcjHnp5svLeDfwjhQzL",
  "key16": "2nGgWj9wANN3AnvLu88WJCpkmHAgzKeNFdn1VWcPVJiwzudiWtmbJtFj1d3wsziHzkdidCDrUdyMkJ4SQUvZb2d1",
  "key17": "B7G1bE9agUmHYij3vHs2UufFkvkWBXvp1PpeDJ9JesZCnvEPj3kirmMaY7FUJTjZJTkgEBsXbfV8v5ftJc8rtHf",
  "key18": "3mfhuE4h3B2avWVhVR53CoV4iL9ZeSxyEcPHV8tZdErQYJsL1AwQ79kvcQ9tvyEgabNqtJarb1GJ6K79o8QAZBtt",
  "key19": "3HafN92Xp8AkuWBmzwHy4SHfqePZ98k89NacNsxGZ5bouEayN8LnAgTBAMXWa6PiSC5Qe7JaN4GMpd9raqvFSX9",
  "key20": "4gU1kQ2QcqMpwi9pNUGaWs6gUnCegDAunFbjJHGASGSKgTkd6CJVyaDBrRUr5ZivfDXhNQ8BqpBQrrJt97SjWb5b",
  "key21": "3rSB68JMx3ykWySsXfLDzmN9hp6oAyQBt53M5SZ9Hjx4vg9ju3rTGJj76whtev6vBxiYsqJhxFgALULAUubRGHhQ",
  "key22": "DyHqc6WQ85Lroyx29Ahoj24osLSnxkAUF65MdAk5rbu1teWYdJ4ouTXzVEUpaNxiy83tZY2pHBBEwNqn6QUbERo",
  "key23": "3YiyLF4ra7AYxE8J2YAoNNkrRERz3prdruU7HrAoL56jEejZGrLWHdt8UWRfo5Ph2avyLgputf9cP2odRhQVnQzV",
  "key24": "2bCmgMw1n1a1sKRA8LSp2vWnXpoXjzc9vL6MmjsbwygJKDmNEizbqXFiypba6oSJ4eAZz5NSVhx1rXMfaBEWd12V",
  "key25": "41W6kWZndpMy8zJZqyKmdx2UF5U2st3jBWPmf2qWjuFiMRdaQMyDaLfk1C5vvfsAoq4HzzdYdZKvAzT93pvUwxLA",
  "key26": "5qtiBbJ1M99Srb3onXxBzui5hndCvzaFTB2rjGd4ySi86XpxHQR9aAQZEeYLPMXTHFTZMmAT3W2SWysprw3XjgmM",
  "key27": "5EtmBspcHhdZ2rWRZBeH1itL31mWZLxZoK5GtUt4kjnzRKzJyda1wigmHnHY5HCJzUxLYpPj68kcYL6G3HT7emzM",
  "key28": "4NsaTXQd34VNRrN41NfawurxVdesJkn6K61j4eV9yssHeELia9rx9wYGDRnk95CfYA6eQMpg569SboPpekfWKeTD",
  "key29": "5es5ZTMQv51zSEUMfLW65XSFUXMjKfEGU16pjGAPMFE3PPtwmaoGjBLCTfGW6tvhG12pyq9q7jk5msqU8jPJ2Ari",
  "key30": "3qbQdx5pcfYhp26HM5zGwr2aKMMq9hdco5fJKrzU6YmyzG8KurVCPCUreNCCrgUmpfSQmNPZie3g3MX12mXPNtjB",
  "key31": "2LxjdDY3BdxXR89EajSKZsG5HX8exypioRWLqGjWFMrMK97pJVNX5UmfoJqQd2qiSgDQq2DzpYxB4Ye4EuJQaLe4",
  "key32": "5eX6ZMprFTaFhLDPfKMF81oLNUK3d3AyYCHnihLmrhxco3qKV3kudxR6dfFSGyaYd1sWNi4E4Bqa3btgsX98dBHk",
  "key33": "36ccPUpdHc1aJweNSTZeugXuENJKv4f9jhEsqEqm4AqDBe4iFXNLACscABPJBReiDKfjpdkZ7uLGxsR5GMEMJQD1",
  "key34": "3i4yLZ9CWk4AhKMxYdBEwtRpMXj2uGwsu7dZcRDJ2FnWHAh2bCCcgwQwLD4TSUd3Zm8ueEQQTZPoVKUrfsRBsELU",
  "key35": "A3exYYUKyshtg8m7oiGwcg1vk3QJTotsd8VWTvUW8rsxkQ38y7xuBGqGeU8a3XGgjpzHTStJ8nwwZabhLQqGFth",
  "key36": "zUfXri436DbviVtY6tZg2HfrTMdMemnAH27daYWD5WAeBW9gM8NyqwXLJAq9eu1kef4JZMNLg3ACVrgePA5jSaU",
  "key37": "UneBuqhJtGadPQbw4u3TrXYdU7nCCWsPvxLhEzM7VWBtd41bNxCfiGywoHtHNuWAmcHEF6s3k6xt8Qd1NFzhkGM",
  "key38": "34y4ZzUcpLQC4ggEjsYvbYzDjWhCMvteUEXesHzbP5DB7BHQfsERExGSfsHqdEZdnevWACjyBYosW1Po2L8sFqSr"
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
