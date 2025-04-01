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
    "5QgXZ3jJw2PdVUxE5ghdPodxk2qCbM12DDzv16gq95cSGLMfrojah8P9GyutkDnz4ux97aNJLRKekgWRrK9smdmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V6nnca54zxp7Pu1d6WtU717XebW6QodCkr1hexSwbrHZ91AYod8hrHB48QBYeEm5AgrVvo4CEFTzkge54KzG2sy",
  "key1": "ud6XE4X2E9HrWSUtppVawx4cjoZVAPZDfhQr8s5kXmJE2xVejwQ9odjJCpJUvcBYqNvzD9brHxW3MokiZUELUFy",
  "key2": "32FgHga7wqvzzWvR9FyhYVZ8qBh4cfo4CqbpGt88et1cYcuh9podCKSX2akV3ks7PNX1DZd5tXpFwRWEEgELuzvZ",
  "key3": "3TRJMsygTVanMHAPn9cdKdMCzB6bYn21PQQ4j6aKqvKKYRLzgWquGXtHtT5iJhvNTEyuW4juzy49BbEwAM4mTaLR",
  "key4": "2ML9E8nVqgd7iNqRY4yHJGQZQCkHdQLaQric8TfbfGvzkfiJ1PyPZzFCLfVMBubdbmXYsfqXQaQEVi9dnKeUhnDQ",
  "key5": "2Vg4DyJUhGPAt1S8iTRrLQ3xRpd7zPBYrZgT9jECJ32qbzVC4WfuTSZoLLWUdjZeeMhusdDc4emhfCrSgZcE49Kc",
  "key6": "eUjuKBmxzVjqYxeYptiKSrZ7nroo4pS6VwdtozQsrHLCBf8GhePcxCJvmWoHMW7wPcetxCiDq1og5GKFTa6ZDU7",
  "key7": "AgF1n643dpiGDqj3DvPpNkxse3e1g6KVDsMgnAKP8y5mGTcphHbiNAk6VCcYuNjREzLxeeyNJtXo1JJLMP4bn8a",
  "key8": "3QWjSjpJEmfNcECzUYrZt15XtK5mkK8GpTabLra1B4mrZwTV79hEmv3TM2drzA7kXEiTz9eS4jQHg6nxVq3bjeno",
  "key9": "4D1YYEEiJcjDbQ6FCUdNMwLv5Sn8UoCuNZYE6qe2fEGLhbjcdE93E8KKECPAjTZXMYE8DUGHtHTn1AbJDywVH2px",
  "key10": "5WLs6n4PBDHrF52vMxqd8qzzEWuJGkpxAqj6B8CZcxNL3uBDrCoVw8ewe115KY31nXHZaXjjFTWQUSkRGcQFqNGd",
  "key11": "2YrL92pnzW7fbaKoG7w8rJYdbyfjJf96HQCWyWyf9PS8cMh2aHooMBoZGrEYASFmEUqKxAvNM7AL3dkqDsc27FqW",
  "key12": "4iWWZsvwewjZGSkbaF3BRaUPRSZ1HrmaC54D92FqFGnnrFH7bujFSesVYhPKNbTXWBPqWAFWjFVwz1EAYZfSyGJZ",
  "key13": "4yjKJpX6TMKAVLYG6guBbohb9MYxXQyhVEpewDAPPPWyxFenyUJpf4bA28K4veZCdQcGU6HU5JiFYzio1uVe2Bqc",
  "key14": "4zVxGWpuF4iZDdJSu62XtXz2rzMb15ygrrvF8sWAdx8fPta69a6bNh2A9iAUZj6mizvxdmWRrZe8RKQAYGur6Cxv",
  "key15": "3rgsoAY3nDxU9DKBykqgGHRiJUi1x8UaFp5ZonM4v5x1MdXJDYFo8teeeTcnYRGrGKrPzAyUdBn2MkdVPPngKZJ1",
  "key16": "XSFgg4MxAihbWhyDePbo9KXCpPNz2Zg8jnXEwZp5781wm63epZzs8DzKEukmmuyS4SGDABY1SGcirYnRvo1Ukk2",
  "key17": "53r3ca2TZjatmMAdUJsRTVqrW8bXGiUUtGyxfqFEuoAhc6LyP3TBuWaPEHMzABnN9RaRom9hdimXd5a3Naz9Qurc",
  "key18": "5L11tphL1KJxaKKnRDgxYjhrWyEbrj9uNXuYHUMxW3oVkiVALX5smqXhBAKNqXY4Ns8ZNHGJvW8xcGtyAfk1rJRV",
  "key19": "2aevXmrj92Znq1xSorRuqXHYQGz9zHMCydD28mTfWVxEKmMDQhoBfRfxhF6teuUi2uLWD2f9AwJTW3PUUYEHzdDg",
  "key20": "GLQNRVwrd7fFy1xnZ4XFy49WLqHkPNupwf1TVyqNe5qMcdQ3BzSFJpUKkLxnzUfVceSp8t6QqkuyZXpTDRN7jbm",
  "key21": "3o42VA2LcqPp9SrVbqqzTYVPyamR3jpUjFUxyMzy4tW2QrTNCf5opeP7h6zX8XaKx8NAibTeT7mUqT59WzPcnteH",
  "key22": "53XaMVPkKi3grzsyZG95fPamoiezBeiq3hjNG5doSsGeXoLCAJ8LBo8c4NgNZjcBUjRzBSv2jYQ3afbs6itn2SFy",
  "key23": "3WSpEenMoA8dkeMFkpVxvd8aemhdF5LuZN9pwd77atU8kcDjWpPgfb7WgYvvjMmr17oBujoRXSHYy4mtWALSqCF1",
  "key24": "2hm9mjQZhaWpLJUSQbVD5ka7yXjDpDhPbpKoczeJZ98QJFD9zceXMqWkxZgmNn7Ef29VMXBL2tEJVvNTVMuLYe6F",
  "key25": "3ob5rd2v7moeHCFSSmEA7Qsz3Av1SLbZKgeQ2ub9drkDD8FopsMSbC3WxGSirbx4ADgHQeDfEhujdACkNTUprJwZ",
  "key26": "5fhPctd8LTSkh1r9MgxPRYtSmyWEsSL83zmg79cPiuTX2T5FcECy4gzJiY9ZADqaUciFbuZY9nVncVHuYSZZa4iU",
  "key27": "3tci1aJLAiAWtboE36mFJsGHZaY19NVfie4bZwn116MHa7R2gudY5hM5iTeYauvSUuNVJHkF7p7Th47H3L7N6S5q",
  "key28": "2qhqw7bidtDvoqZ6vTtSsazQpRzAfBcrMpZJXfxmwmDmthKSMYK42abCbqqyQG46LcrqtLDx8rduKwpdxLU3cbsP",
  "key29": "2hT1f1Nx4g9sb3yoWugYqxuYVzcGFykSx6qUn3QPuYw7sCapjhy3y11PCgMW6Zcr6UunoUL1zs3MAKzjWeEp249H",
  "key30": "4andVgSNnDfFreuK6okyoBB6aQR2G7NTcCvwQGYeM3VJAFUwVMkdd1hBVCq5FgV7KUJfnvWfkRyXPhxSteewQQT",
  "key31": "361ytEK4AL9KthGd2zU3XREsvv3SjufAjq6WFmq9xncqKmbnCjDS6nPvFxKmM3tBgWYSvT1GqBvdcABvS54u6wet",
  "key32": "4emiGjehCVDvihfusT31ezd3ZPBEu3iUie7yGv9tvFZgwzbeAttefonrXqP9MGesVqBWttjamexiynMXfvrGvMn8",
  "key33": "552Gu4AXX3kQAh535FxJNKucy26BtG4XNXzu4S7N8VSi2m5paz7bCc6Wu6QZSJmeAKqtYxigNKRFyBjDsEEJjFrJ",
  "key34": "4epUvdgP6PkeLTCuzKM2npoB81deRFxtsCKC3s5WokzQ4wXX17zTXde4c87XPRyuydzpo4w81B888H5dxHTDXKyn",
  "key35": "3hc7ZNgqn2V2eraeCnSMhBWtuTmhgoS9m8AyCbJrEhq481W9dKbUWwBaJUQ1SHiSa7mMdZHRnkwg8GzGDcaNTMqT",
  "key36": "4YHAMBWsPaec8s2bCVZsTfe27NnBawr3BWT1Zj3qptNKtPtg56YsD4T2wkMPPHfhbxS7HZar8kibd3aP4d3vqiXg",
  "key37": "3nCJcMYq9LdM9qz1rzLD6ThvxZv23v3hWVJ6gXG2Xfp1SvsWSVq7MgfXSATHk1z48GvXF3BjZBq2ye1tBabuayD1"
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
