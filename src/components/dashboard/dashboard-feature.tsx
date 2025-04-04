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
    "PhGpWzGAEmCtPxs95Z5KjgQbNPmCL5No8do6JX7RfiK9sB8LpsVaqydS1PbG4VP25pzrz5EqaEdbeNZRr2Bmqcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVKDhwKMnaDThEjepjiMgzw8Fxq5MYRAVeiXHEHz6ZibveYJY7zoZoaTth8yeD7ypzCwL1CL8tEbhYZwpdTuCwC",
  "key1": "4PXDNN4w95eKUkbkZAgmspWB1GCpyWhYziNZp5aM4Vd69JQf2dcXRG5nmbm1fEHKXW9FTjhjVw5N7VzatoMni2QE",
  "key2": "3SxXCfWEWMvu6rwmLpiBA61Fxn2eCetk2FEbdsqAzUw2QAZZ7jcYcqGc9HyDfxKw2Ev4UKqNNpm9JLd7waJqB3mM",
  "key3": "4BkynVbjCgHkqTWYZrpnkuFb2rwBDqQey2NcLEnzR6pzPnjysNJ84bNW19ihMRzE9h9QYnpc9jhnHQGPvmKeSZc2",
  "key4": "3eKHgggXrJFDhXgreCgcV7eqBhP1sUgkzD1U98ceXSbE5j3YC64fmjbesd66tikGosUnk615DUktnE6aY83dCwbP",
  "key5": "4Td4LXG7JfUsjYMYLBbJthfsZheDSYGdmZwtkFvxJ63ZLhywdXA98kywHuVCShv4yw7zuu57bTMXmonrNzQh4NEE",
  "key6": "4JXbLxMP2XJhqVpuhPeFNiovdi1UzWPqyLvzqn3rg4dGZzfJsPmPRY56LVRp12DH73zGJ1kqjmRbAcab8jgCEsuy",
  "key7": "Nbr2LcAjkep5v7hJBPzSH5o2dXQwj6Pk5HMZ7N4E47kvab6Mnj4CifV2itesKXax82fwyUe7jGE3mEkUXqBqZtx",
  "key8": "qaDtBvKt2JZc5r47KmAzvQvs5nMS45AXo8z3tXDDUh7AG4joaZVgC6MYx1jzw37u7jHxnJ5ZAzw28N1MCbL4bC4",
  "key9": "4MkNsp4CmgjCfFtLJ9miwiyRETbmfQE2BpR435g6tBSv5dXgdCUCctHjyAgV4s55tCXrgMpHLmnSrmu1A85a3ETC",
  "key10": "48FMZtk3qoHx4NRPWp9QT6L1y1cPm3bj1ZzJ2s9guKkPULqt9dRJ5FK9wqjbHR6Wi9BazNg7MD2CovrJSqZZgP6w",
  "key11": "4dU7L4exXZ9JQVW2UTJmMWbtUFAFTgWvuMZ9D7R93FGh6jiHvLWmZbb6pXg3wnB5o9igSn6xTQpPt3S9Nr8hpkDK",
  "key12": "8DnHKzJVp7mZ3ARd95qucuNPBEoQ3JTjGy5pTLWEcaQ7yNEzkcyAmGNSe366Rg1DS49v4QYBHPUBHgnPWUdNb74",
  "key13": "2ccq8YsyF67HVfHvSx7mwEDbdDSJYbnvWYjqN44smRF6ng7e9h9p2E5Ct4wh4Y6SCoFrPVMU9Bs5m5m6uLcDcowG",
  "key14": "5Wynx8rQYPgxCq4VUZPaqdm7r6uQfHNUqCSj6byeqBQB2s7DfF6ekvokyDxaLkuGyo8967taCFhxdUvC21gK91i",
  "key15": "2DV21WLy2YyY2v3picwrGyCQmXEw4KgoRURNPoVTGVtiGirKFTNpXCo4tmsrmhP6rnqc7gYX5YkYJyX5pTuWvzV8",
  "key16": "4GcdHdtrR8E9RS3t7UbFTUeTUETR8VMePDRNqSXYbfAdfy2AwLSkhPLXD5ND4eSg4HQstJxvbgowTyhUd5vcYJ2H",
  "key17": "3vTan4nxTMBLqCiqcaxXFZ8GRFNRYAHzoztBXXytWZGWBspxcDqq4kYUHuhDhMAQnHUEBdW9Z5PF4NnwH7Gwdw5r",
  "key18": "2siPgrZxSbQshGiREbe8CYTgTu1pQWcHEM5tBAKHr9FVvYypcCPazcY7YKFPmCyHpzLnUrZcZHRGsJ2oBysLhbvk",
  "key19": "NfLESEy1MGoXTQBFvfkpha4ETAe8fxiNMaUfqf7XkJ44YaE1n8YgVwemYbS7FK8jNYRTVdAawzUnBQXePFPxkxc",
  "key20": "5inWYuzPTjrpT1DihERWCGTPytYFh8h96ZGw9mHy4CKRLmE64SFq18kpKSGkUKFSd3QBBQuoyQiDWQ39TPGowWjN",
  "key21": "2BxXmkTtE9GBbwD9BWxr3T4h2DeQBcug9stq7BBB7c8pJkGEvUGU9Q6KFhisRm1k3r4FUapiv1qus2fBitYvy1XL",
  "key22": "4SFGYAhWX85ujEyexuebc3cKFWhJxcYNP1Tv6h6dSDyAkZuXFnVW1jpcGHXTkf5ap5AapDmYah2TcR1QS3N73YC4",
  "key23": "5qovcvALFvPbD7zCqz8Kri8KkTeyDj7eJN3UVFNyR1pWbWwU3Hxw9H4fgmVgHzXGMnt4mZFQLx5iR1swVuErYspa",
  "key24": "3sr7xvwZy6rFfhVzsqrLrAnrSCnPRLRFRkvs2fykUXFoRVAf25uDBsDHpfPsbXYE3JKn9TkPgKA94iuQjzFzUE3x",
  "key25": "51hasBjJmvheV8rdgQZWPBRK8E9dzJhSX6SGtTvWi61LEMGaBkyweGtZDCpAf35TgmMdxm6HGkaBT3DiASXBz7dE",
  "key26": "4AtZF9XfsVxoKPEQAudaqN54du1tUuQHiW3EwbVVX6MKL36BGuEzQNPAAfgB5Uc88PfHh3G8qYuEqxZSrnUTWynC",
  "key27": "5qhEDs5eFiRBbdcABa4P7ex74BVWTaBRtVFKY1e7cwKCje2UV3C6yKsQu87CsFdc4ggs2uoDqJyHfb6vDbVS7BwU",
  "key28": "5J7UQe3tgs2Q4fyRasUHzM6zTgoubP6JjEwMgaavhU4R615F4SG4EAnJ2pkKB8reUPFrwoWNRmdScGSMKoHABQw1",
  "key29": "3vBpjkbsRrvM4UjopUiNW2mJJLm8wy3axjjM2yswUkAZzyrgXLjRctSj5zZRtsBjPsUpF7XxjssZD2HypMQQAMY7",
  "key30": "5pH1aJ5wAhbR7NERdPyb9BLGvTmCuRiBLvyyL3psbbi6jEcJHmcn3xUL9iuaft2J9SVfyb6Qxv8ZvuHorQT3Ckzw",
  "key31": "5Pnnz6GQziuUVn1N3ZjFf5qiQ5ZcjFqsKR2qLyaVDaXS7qSTe57YhLRTQP8CVk1aT36QTfg1pvUTyLdYib7dA8Ae",
  "key32": "3azeyYHcDuuLKqMsSLkVWWZAGGkyt8METZQvT4k91aRAHdsztiryJYPvj3wZYgm5WvpQxnrgz9R1pirRM12ZMHdf",
  "key33": "2VmnAg2fDqLUuPqVzCGgYT9UFGb4DGHqpA9HNvdVaimsTmiDuT8gYjwrZ1bTEcpbQnAUkdT65uW5rikm4c3gwF6u",
  "key34": "5cSCStAADS94pBCzq5hnFVPciJcv4p9NzgCexTCqy4EPKrGCqZZRQ7hHTzhzoU9ozN4mmBek1TxwYz1gVoG6Z8qh",
  "key35": "5J6PLE6gEKtmkE1i22SN7oqD6e1SxJcLj6VdbA7Tz71FG4N7AKexhDyR18H22Z8LqP8zMn4qrS1Zr96WzWyB6u9",
  "key36": "551JFtxn5LwhNufL7rfMvXXY8upV1PmJaVTZrhM8CQFtbmKcHxmokGp5sX9nFEBoyU4gfBKuTgK5keJGy46ZfFkk",
  "key37": "4eLE3gtLM4j8EirFXbEdv9KxDMqtWQP6uzLv49h5iXPHF5kHPRZAGotQF5BXDhT5tN4RbkJWynmPMaVrCBCKxpM2"
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
