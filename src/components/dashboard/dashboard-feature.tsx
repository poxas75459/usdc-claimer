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
    "5zyjzUxvbqRbFtWdUjHm71DxeCZiyJRPDE4GxFmHWyTMCYgEhzQVgehcvF1jLwcPpu1GNr2r9fGMGE4GVtVHMWE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A8cy6BRAQPHhaNif8w69dfVZFwMqYWJtRygi7NhR6iLKoow4Jq4MGy7xyJrU37MEbXC5eWdF2RKVztSjqS66jJN",
  "key1": "5AA4svMez1xgKYjEEWS9VMNtq4yHsHsSPf6Zgvnf245m5cksPVMMhFbdn3YBnRkmxSQx9Rcm7VL1dHLaUzFoqhC",
  "key2": "4CRyXQgG7QtkWRf1H67AB1Xf6qGvh6YHLupYiQ29YC7GqKx2JN63HpSA1WAJfPcqX7Cawe4SwQCcBBp4CCTGBYVf",
  "key3": "3UEF7j82E9xh2QkGkH4ij6JwBD4cgfodDvnNkPSkEqVWAXg5tv4PeQyEZTFiVUAjYBMBuuJeHDzHf8pW49NSRfA4",
  "key4": "jTY8EVg1F6e8E5VZWegrbr7PcP2FAdAoak6fbCUZyjvs8ny1ju3NcmPjYCxA1j62ueVL1tMKM9nNxZwt5gGYozw",
  "key5": "4hRYrLvPv6MEUH17R4Zh84egCsdy2EvYhF4sQteRKBpuo1vEU6jCqiVVhqnTB2eWi1ek57tX2MLwdwsMuonq86fZ",
  "key6": "4CJvGRW7MKeVWeL1yoCixzdNvJXvLvRYktFmk3KYZCkxFtbFgPgKWZ7VuZgrBnberL8ZhBGRDtKY9GYYUreUEiuA",
  "key7": "5jxMGgGtnyeE3R64paQNdBTwQbD3abSrynRZWh5iTvvg9hSJh9uPsPQkwYG8YAqSzXa4QBNENBJUNQC1QsLN6a99",
  "key8": "nCoL3jhEBVcsA17mXv94FHZYmrrpHKmUTNBhadHMiYNZK6g5WkHpBrHvsYnDoHLvQyvQPsYscRdXZ6K4362dqc6",
  "key9": "5tUBcMQZj6oiQYkr9YY5tc1UXzUYxjhLPXXdtf7iKeHfDSvuYoFKkbfnBtTr7aPsoyQBuvn23gStc6d3sbMGyoWJ",
  "key10": "zU5Yc72ZHzSjG2fRaRwSG3tn9hHP5PSbbS2fgUL7DDoYSB7EiicNfryVZa6UJEYGra3Aqkdq2m4HjPz91Qm9urp",
  "key11": "4UeLePN3ZNNHhz58rxomye9BzHUcQN5sQHzwwqeL6p3TUsMPrdeYmLVQ9Hdj4tLGLMDW8AqZAeNPXY4JWgcWBiSD",
  "key12": "3rBgNBW25bvA3xc1BMukf4JmX2AomHbh55jU4gCSPt7EyKoAFqmxcERFXXok3XbiXWMNSbMXeBbXNKSUpyS3bwnX",
  "key13": "5eTdQNM7BxkyXNaLckkMcP8ybnWmCwDFkpe9VCzskgTqj3dz5rn79pHKNsYNWUvGsd57YkJrXCvEEzb9vt9gFdQf",
  "key14": "2YjykZKufaRHc8FRWVq1Mg5Gv3zJYEsnh7JowsVvSPRbuUEFNvkimYr2QCLznaDKZFtdMyVaBJiHosVuDvECLm6W",
  "key15": "2ZyRXr6rsDLH3n9JwpSvnastUpDPVbZh9RUffQdhNmLL36khyGybgdrPM8HcNrN32Dv3gny8vTsBLAAYhHfqNRKh",
  "key16": "3smVwPJ1vYQsuEYPBCtPDkcF736DRApNm3DR37d4vkK3QLrHqMVVmUfzXLS9bZz5bLmzfySmSWRAJwUge1gpS1Dj",
  "key17": "57431K8We4cnCCtGS9LAgBnuy6narVfTQ8dYeQJnfkKiBwyEDL9fDBcxcUWd79fYSQarztQ4f4e6ExDz51wY1rv1",
  "key18": "niWg4x9wyAnoJ1JUbdnkPh8wjdqHEcXFTJcddZwk3rByCevzPw95YZHRYgrF1vTzRrKLDDxdwfP2HHsKL9jBCub",
  "key19": "2enoVMn85KtXZffwwBGfUyKBAPTFpk9aSuamh7D54RhhiGDYr3PiBoJa7etneTz753KEeYJUH6MFrz52tcqxcJym",
  "key20": "4Vvop2UyyN4nqDXTJXhao1CAnyxLZcSVmkR1rsLBc6uCzSAMNWx9gWpEPf9PuHB8S9obRdvPkEjZSEqWAAiJSWQy",
  "key21": "45ipAZi595t8jqnerafK4zKXeqyVVu4CvNYbYca6SRgabonV8PVxwAWKVh9kouCDKX7rnp8LaMXZUEmaSumb1v5w",
  "key22": "2gud6kGpR7sbdTsg88QkNzk486Pryfvd5MLFXjKatDDik6B1B5i3rtTPn53xukLhJNDqafmV2XDyHMVtpfGcJWZU",
  "key23": "2H7CMhRmAEMCvHnzpVyKdc8j4Cuo18DhY5eXAnPRR3r16J2VpMG4QfxhWHvDhf9jfmG4nkFamsJJg213D3Zhyc5S",
  "key24": "5k1wRsjFu7DDkN33uC3Tg6QtS4ugLmepq9KGSrek4CpGQEBPakVpFtyLBbEgoosz84J18rrYFU8c45qw48Lqd27k",
  "key25": "n8oohaJNDN6yXoKtRB7CZijyChiXgcPVE5d4kUkCQhqs6rR4eMXUZ3MiDSB69Cbn1KBsdpMPxAdguxiGk9Ss72t",
  "key26": "qZfFhdY3jiDk8xGzF8jPFqGbPPmQooSTxvgR1ThB2eNwsUzsGqaGJSfDwetUKeDvN1vSyBmB6muuXmcEFu6QBMW",
  "key27": "3ACRYQ8SehLwZDhbx2w9BG5ThJtssSVRPW1SMiCP9xTWnxoYTtvEZTmjYTZ3RtW9hYtWZJghxMagf1uK5zJpGYYt",
  "key28": "qMaWW8bK45BUk7DuyueaQk6kTmZFwitsU7Bz4LHeQTUZXi1xQBXAT1V1K8ZLFLBxGTxExboZBpRsyNXRdNUFkFv",
  "key29": "3LF8yNWau4j1cYJuAizQkHjS9YHvqtDmzv1rHJLcd2Dyq46WC7XG6dY7iqi87H57GodADPMorCgj7KGHQSg1RwQb",
  "key30": "3VtkyJjVJLfHuvpPFLcSw63Hi85zR3octckhvc2Ewdyo7uAy4hvnHkSVqnz4PWkUzV7EhD1Zg7oVHLAdn9HtsRd7",
  "key31": "3LPjYe59iE5XpDPHz5QzaxJvf3hw6Vtq9QpUmVticfXyWZhAbbYzS3Dkgks2AgGzSakKH5JFbFj1Z9CRE7gDQsco",
  "key32": "5csV2N8XpzdwP2wXZJSCkG9mdJD3UR1WuMeRJkzfEntK2bmQX1xpmXb198xmAM6upAWqE8BTpiceUzoKiGGXKzdM",
  "key33": "RfXya8FZL9ztXp4UNmzgSfMqqfPKWsSjCP6wTJrPi9XWgQaF3ZMmuCGi7mu7zwacnKr6xnqA6u69vLdDBi9bWyR",
  "key34": "3SAS2sjaLE5vHrZita6f7guWB4Z3RH1batNbUxcCL2rmkAdsfdp3iwXpNyxuHZpiENPKJGUo6d2Jew2hJdZkUbaH",
  "key35": "3DvSY7y7ex42dbKhwLaTV2PYJEeAYpJLL6PRbkbRzzzrKSQDeRekAc4CCKndw2qJKNTmgTKCrbozq63Ys39LB6W8",
  "key36": "5viYg4v4kQ9UQjKkjhFJFkN3SDSfWKAgFL8eYRdmsvT1yAj4kLbGSFEfrBeLvw9G21V4zJfiWemVySjpVzGxdXdL",
  "key37": "4oYpsovPqdWe3ctM4oPAvJnAmVmWEhiJunanoDuGGzbEfiWKmCQPhjt6ZUfGj5omb8RxjyrRmVKQQZg9SQXWM1Hi",
  "key38": "4azQ24wj3Ci4aCxE5K7w3gbu7oeArsCaGXFqiLAyWfDWCTz6rnwC2yWdDTzErEbG18J7AKihtiZzBZzce64kNpeV",
  "key39": "QEWV4ffy3vkTqEeFgeepeVPkvisyShtkz1b8SvjjRDTxoWFryBvoUTYqTbv35aYPew3dhnSGnNWqMJ971vkDqCU",
  "key40": "xqKKHF1RedBvWESYHdivrDT7KGKQph9QZwdBfX6uC78TxVsXTpar9ht4XBS4kywL75cUMFcaSHLVXuXj657jpx8",
  "key41": "rN5vrw49bw1ijF2j5TevpWDU3pcyCo9E21VjnWn6URTRDdaamKM6F6NavsU7nNvMT8Bz7M5cmGAbaX4yTAVAYeH",
  "key42": "66zmLCdXG4QdB1vWwuXNzoHE3ApmQVyp4WegVgYALRp4xabiXvKXMMkxWJShLjc6noiWSgYxbAFo371tVXwqAstH",
  "key43": "5aVS2H2hNLKbY2NzPPnx5WXTn8xxiFPb5xt5jpSWaC9jexFyHtFBcJi9ByMhZbAqRkdYgJaZ91iqsgKWndpW2y7d",
  "key44": "2GyzrVk8EQXCLjgYxBJ8ZZqmVwruCf4NinZ5LhoHu3h5pQbYuvEULoGMLiANLqyxHdrVbEeSPV4qe9FuA5GBpNuz",
  "key45": "2VHTW2jyLf8zecAwLKgQvhZcUES3ZEa9KZpiw4TKe9sJiV52Am49qaiBMnZxWSLz3rvsgtipXkJkBfZKwtKfW7fj",
  "key46": "jGgtSd99h4PdBYDCoN8dFc4KynpKmeYQxHWTEXYF7EUTdB8V4p9Vb9uhAJ1L41ZqfvzBdTueJtbE2r4zSNB7wz4",
  "key47": "5XLiHXHXMxfrqtVCc1nPFXVEjqfbku82jhYGeFVGirNAagxYYA1v4zpjr6u8Z4kDcVD8KLgxmtbFFdEiAPugDpet",
  "key48": "2qsthE8jpCLZEMi95345oXaxp3hRzTThYZu1vXT6VK6LHbUU5Thft8TXDCXg1St3wj8bWLAniewWMBfnJDKLf7dY"
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
