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
    "3prncifyCZPPsTCZakUxcTWSFMzeDR6WfDgokt3CYjx9hCXo3jyZdsPvYQ2gdTKPregbYFxT9QG3GSKKMRDVBbT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67FhRuFSKbSEWwqmgJx8NX9hQWNiC1XKr4jp8VEWHMPMUM6su1bpRcBR2QUgBDuiZre3Rfz9WjGF1uu7GWcy4RcU",
  "key1": "5M6TgyMpe9u4VxKm9vwZgswLgvq6FNDQPWWjLQvDMrDTeBdNsZSSYrpP693YNvpsAkKv8xaXXFNrNJEF1FCxDfzB",
  "key2": "5G1HLmYzG4gLANYJLSkBiJsH7CRPDCZJJELeNPsodHKhQauWLGjmHjd2mxpGJaVixUKXaYeS3SpcwuxU4wFxp88g",
  "key3": "3EthyPykzxDYBoewFZuQYjRspXgk6dw6bv1f41QFEAT9UNgc67B7vNvEHzniFN9NdiZA9bZHFxzEGVRYAjn58Z6N",
  "key4": "2ouQbkBQsjez8wwJazyGaNeYA9wxTR3uD3VhWnqArsZVhtZ9gkTvZ9cJJHzZwrdYZp5NB1t32Tnkn7gaX3fporzx",
  "key5": "5zfeL7s87W5sa1YUvnfAumY5yD85fMHBP4idKqBa4F3AdYatGHV1YHV2E6PEpVNwfrka2bTSP1KBmpoFWLk1F45Z",
  "key6": "493kNoPbTcWdHoBXJeexy6wNurjwRRbc45vgoq3zrpFsnVKh3jYcD15pHBD5SATmzagw2XQZwzLdyAwDVjkTANDM",
  "key7": "5Gd92LfPVQ87rbe1A7FJAiHZoNr1GpsYvHYbh3sXVUSU4hiAxGsFw2KhsDr5gcDokQKdmzgCEWwyDABq5JaQoyec",
  "key8": "3yAxeKpYYLtZKVt4PYADyaNGMgDR4qEFJHMYi5BPWZYioxewc41Za5a7CxwrHLohXVbzqTc4wrRB8LDGDHddkL5Q",
  "key9": "4rW7d2yNXVAsuyM2Tbp1c68KKFcYhdz6nN9kZPwszrbaFGeT6zPYHfK4dAxZWkdVsE4UsdxFwQEufmYfVdiSRXSV",
  "key10": "5obJRdNPrq11984ftVmwY41C13HES4w7AGskdQMpLh3QHNGTUCZFdpToKZcAEUJeU1wyBXygY2Qrfu9G1wPWxH48",
  "key11": "3b2sd1NSisCuXRyMgDwdN457fevth4C8BA6ytrwd3h9SHSPSryia2CrBJFmqqWp6fc3SPnR7XiCquHsRMFKLnGnA",
  "key12": "2diB14K11486EL9i3GuaZXF7MQUi1qcp7bf83K8z9mWBudM3RrEfSWdHQ1cJXWV4wb6mEYA232umsYFgBtkJEA8h",
  "key13": "4QE4gEe5t4fvXozD2QPetcr1S9RLahrkGoAoiBBZQqJ4v5ehbsWGzR6UhYAFAu8Wb5aseGg8jWJqhW9A9v4mxdgB",
  "key14": "3WYrx5NEC2ZpgixKrVJjcq1qYcNcCJqt9gWLgUKPtMsNwxd4aDb66dU3WzJ5p4jmSZiC646UJbpkQwNgnHumoy8d",
  "key15": "22UHBTE7JGMUVrT1LwFdkC1RPwBjuHZN3xZKH8hQ7xQeg8SAHZNWu56WJo1Fzb2tYhHNyQwgbWrsgjCTMvpsefg9",
  "key16": "2rB5sEDWFunJfBpdJSmVEfq3CJiEgqVLA1BqRsqPfSMkRuXhGVxBTLRKNVtJXSfKjcDCofEQCjc8cb53cr4T7DRz",
  "key17": "HeK8uSN4JKjJit5h4vovu7CgPPxVverCe74Uu6oEmB5NgEteCqZRyDEZMAMGzBdYpiaJXfWAb6Z6HFPgrdmqnK5",
  "key18": "5WViVfBq4cM5B2PRDvMyriXJ1HjpdXMQBos6PazMKHMnUjYnWTewsPNp48tqAQnsDhEzvSWG2sdyyqLDeVaKohEb",
  "key19": "aQNd6GFGh2W9vcEQwqPvNWf3PZ5pgmnWhdvCYZRpZ39novE9QMbn38mc41xgKeQrJbdjgdDpSCpvcTpJujD4aWx",
  "key20": "USfJCfsiafiVEvyjbELHsTHuBFy5xw8iNf37gBPwJVP1LHA8NVZjmb7jV2yShD26tfcJEa4DZ7fAH45aD5psdN8",
  "key21": "QMNK8qbR3zPpRGptqKKLpKZwQVbyqgsuvTdWgGNQ82cQc9DfM6sWyVrtA8ji8h5haxdXiAa6Q87LWHdDy9aLwLi",
  "key22": "2HrFzCxRxc8S4qFgUDavBVRJhnzwqVV7gn7XJfeLJaEoWjFqYdW7XK61pxD1jGTg3epGbmJSCkxm94jmzMRSmLa6",
  "key23": "2RzUGTTjsFApsuoauZaPSfVoPud79W1HaGdiC5tgPPmFuED6Fi1P4dw6TnpRncX4FHVxKLFxAKPgG5xvueFSyiyu",
  "key24": "3ZycRD6QAwmtzujjweTrBmLQWbEAF82LkUZEMiyBj8dPtmNq3MxegQx2T35bnyKuGXct2CRKoyQ5BjDxJ1DhJ8Fq",
  "key25": "5evWzusLocpAS3N4qz6Xay7qvxwLS8LTiYNQEAvGo1aZGw6Q3PRXeTuMxtPQNwfy7xCukZykU2GF2VDkyTZgCUZa",
  "key26": "2QXpgKy1YkZEsA3ojVWY8EFNNkKSeBpbxtdXJvUyg6oYSUPk9ahjvehzmz83QNwhx8tftFSTp2tk8uqt7E11PY2Z",
  "key27": "5eAAGiuvRczoFvpW7T2bn6Fzps7DCRhnEcna1MwpiBr9Biauw8xseHEgiRcRR4puJX6mKoYzFdR5i6JkLCcn6oKu",
  "key28": "47a3B8ehfLZvtR4tJ1ntyWgw33b347UcVCdpUWXqcxQpyzkdqdmdGUagBsvcZojhpDELXriB6zNhxFxuEkRihy5E",
  "key29": "3Gfmyuw4M4mAvXCinnJLCY7QUopo4t4bAwB7Yx7Rv1jEsXNc1S5qHjrLSt3BCaZf2zd7oARX4AYQHZfKKF55nRBM",
  "key30": "2C9KTSMcNyzbJRiuwshWHy4oBxjqMK6mYGhkDwBPeMdq9gaKAs1DiiZXUSXetGe6maEFV2CmbwwnkEJXVKxF9yGJ",
  "key31": "mwDEocHESxeC2m9BpRqJUEpG451SjYBQae83pmQf3Nopg6RRXurEoHLF4NXUCXiYe43FhqKFrcENiz7mo233umA",
  "key32": "5ddwE5X6DknD8rFRTivgDnXDSKRvpoed7PWtxTpobMgBL27ZTRpVpTX83gHpN9Euixy7376xe4YdB348pv6xpcQ9",
  "key33": "25LuS6fq5VdqVcW8Prhpu1wHEwv7LNHsgnnsqeKtKGU2DC5dWvgWLbvx9tP7fwcwA41cjypf7FuBLfnbxQLnnSS4",
  "key34": "5WXfq9pfyC5ZAMmf1Y6Da7T9YqnXWFNCsSJTdpXTR1Zn6LjcnzAELxdQ7gjLQph7csiNGkgTpQz5yVBzUTGeAU7A",
  "key35": "3CYKbjYmscSkyfRdFEiivLHxFTPLLgLZo44UW3X6NHfEW33tWtbghZPZMjVUdTQQcHs1k538SaibBFZ4eDb1hyXD",
  "key36": "2BJBXv5EDZtQQy3c2rjqeFyaW4GG4vKykfoJwf5GLFRHarxVAQCy5ZTzYYoc6P95vrwGcrKQu3qxCf7ZabxhWDRu",
  "key37": "PGk8nxGuMcdK3vBXooQxLR1h4AGHEBqYBA6otHeyBN5gWMf7EdbyBChjvGJeDdjhKewi5tqGrUBtHPjLxx7JUJP",
  "key38": "2mv5Hph7usV5gsJdo8kUwpyDuHKUrDP4PTeijYG49BfPEoSPGMqF4p2E2vLxbLQckpX7nox1nsJybvCVcbQbCNev",
  "key39": "3mC9vGUb3VQGBwrR25X9Cozgcnvc2LVaF6dDTkeiRuJWq3AvK2cNoUwQErUrikCTnYV9TVerznM9tyUWQCy9hTWt",
  "key40": "3G5TRedHmCrH241eJhEevXN91oTV1BAnSwdG5joLh4DUPXtkDDViTKjKpEZa2nWfkp8d7KegE8kf4ojqcAM1MyG6",
  "key41": "4fB582QxrERvVrQdKQVsGgTQXen6j1yMyrhBHq4ATFyTWrwC2jBHJ1nY9rAEV5qb5f3W1M4ALpBV62FQ7cM95q16",
  "key42": "5vco6W3D65n2PSkQKFkxP8mFxYz9AYsxtm51D4aG9LQZE5R8MUKYX2fMCfY1ri45mmyekTjJnWaFqtMTBDMnoucF",
  "key43": "2fWsRzt5KyoQ8abPJxwTKrYedESzLdijAgGpnjBX5sw1ZxMDEFrWxDVviHjbJmFhqrenaapY5XvHHQbcqpyZaf8h",
  "key44": "3TbY2zV6pG1xhx3VptX6GN3rd4gDSTXSaoA7L3sEVB6PvoXtjinLt7aZgQNjc4Mm13Gb7aoJuTokMRbNSDYSBaKv",
  "key45": "2v3PA7uL4Nr2je7QuLDdEj78FiazXW5cfdcmjm2mN3f51H9E2QCDCH9PUJ6Ba4dfqiocrD7sZDgFSszzAeS4VBUz",
  "key46": "uTa3itERiFKeMD7BCAbD5TXULaTLBwSjKtSG5y6e8BmvWmiFmvC2XBQNVdm3NyPjj6aGxoiAmAd6BoyyBjr7Ny2",
  "key47": "5jMrhbcBWChfzVyUeK8DP8hDUTaxEWTyhqaDjAJXFSaLcCDp3QUtvfTexKzhiz9ZJkq8nokxzTeWyqcchoQzFAMB",
  "key48": "617o4V11wpEmWoubKULXwPUoFd8eYGScpoc39kDX2cHhPqDR6DcqjEiHMTExakFTkbWUMkZgvCtQwGH3jAWbfRNH",
  "key49": "3YE7thp9oEEznyXujcMnRzpuiFoooJFRrz2w9MqmWWwLAwXVnq2nZ8EZgg5zhMjiJwhBdhz7Whv2Podmfv2wTPfq"
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
