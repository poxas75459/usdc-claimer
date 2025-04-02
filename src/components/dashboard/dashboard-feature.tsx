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
    "5QZ8rnEc3nU58qpx3DuAN9cnNKdtm5TfisSD235f81bsxRvmcneuE3JN8dox2XMUT1dKa1rduzRGPbaLzVxMUYig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJmk8tTFm159cZaeuNyj8yUGYJTReEQYLebBF1K1futz5KhHXjj3H9JLCR5i1fAtcj1jCxTMp5FQC9oPoMpawyS",
  "key1": "5iNTiEA3Q3xpsdL73osi8C59CSzKuedz674vaa6a9sZD1a8b4LXXUMndSn8wUNfW9ccVo9mfc19y2GzrDHy78LFu",
  "key2": "xyTMMupMY4ZReg25gyjEtJEohxkseZd3YFxPzW2RrZEsNMyM7PbuTjPZbYPWVqrMVdqDtGyfgtSGPMj3i1xM1C8",
  "key3": "5B1bXVwjRb8LwtpfVtsN1XZc5MbUUzPQ5VeiViZYsdbfRssbgDy9kyGpMeugXM5t4R2qYaBsqDP7cY92KetDLvte",
  "key4": "2J21BbzkZzyU3wxHSwNkWtmq5Y8GZxDJvmSL1qhCohxtTJnkCxuxcif41xfDm31quYJ2Z5YH3AZ2uQtZA2iTSaL7",
  "key5": "vkWFyie33nodDzLaf7fYpx97oczfqEXgFM7Hskt9Y3XjttWBiG27tYSUtN7bVJUnCjDZHNgKpXtepsBXa2GZ71P",
  "key6": "TsXCNTnQoWabCSoDnwULi6Ld9EJUy2JtVpTLDzrKPNzMabkEEnC6PfY1wus7JjbF8ErAt6skfiFfHn9uJJp3Gqk",
  "key7": "3k9AnsTitoKz1qDfutCw52iasXuWFze9t2VdZ9vYYSyu3M93MtsxEFCkzT65E6fKPjEni9eMtgZivfnfMjzvyVxv",
  "key8": "gg2jHpuSwMhdVMbwYN6XNZFcFY4YBRpEZrV5HobobWho3gsLH688FCtnQb2rRS8NWaveSKcLqLiHDaa15ctmNJ3",
  "key9": "28os7RnU9xG9xhrG4Gbg9f66v6KsTJk1iW6a5N4z9kMMUyEvTNGoKCAWc5oUzaoAT9BqnDuUJ2YeyFktSJ2pMzaR",
  "key10": "398EUhfmppvG8dYEDvr1emvFfpkNRYzGtnxuLjye6oVW7qSHLD32ArfV6NBpEUfXpn23iNTT7d8ogdXz5j9hTsRC",
  "key11": "4jgSMYjroFfsC9PiGPks1maDuSU3iitTysmSBLny5D3c1C7nKkEDbBYgM66wQYP2zb4gxzXSZhYF4tCxokbbCG5S",
  "key12": "ryVPyeTJxnG5Xpc48cvm5ndF4RAGPbWmebM1WMe5R4dHyoKdicneKR6EKLNFNZzfvEhWkkrEz4ucP5dRet34VK5",
  "key13": "5VLphGJHh4PU5nn3Rtzw7sugkb371yTx5VqYhtBMKpusHBZRGuFkXA8wtNqHoRYqAgXZYbGpALCvfaP6GpVhwqqH",
  "key14": "3GNTqyNZrUjsSFAAYX44YigYzfmHfNqyDEd14KL7svbgohb47iakwbWeguM5kEnevon1ThThtdvGhFKvfmYHAbfy",
  "key15": "LZuN5LXjgMd8r6t9W56YEkTM7YjuN1nQeRuwdisn7wUCpan52TNfS6t589es944WFbcHbbzdvofibc1SytqhLYA",
  "key16": "3XykwjV6ZTfFLZR13GZYN7x2gyvss9CbiMnetb2jcfGp2SF8hQARdJEjoxeRTWtmUpnHxbAMfG4Ct7HU4Pg4aDZR",
  "key17": "2P7t4iDR8Xb1L7LdKCYWAQ8gbjuRHVb5QUWWTxZJe2qZ4c4LXnBRJCj8aCmKSjRPoUZN5B61MV8pvnZuiU1HMwLK",
  "key18": "2YxxtdGrzNQwqSsZ69Y9x6gzUUfixTuj9rYZxYwkL75Lax9swsHybTQRHJE7Jv7egfTvCxMdoVHUmmWoHz26L52q",
  "key19": "eErEnad4fBtHd2KNeJGkRgNFancausKPmL4EdD6FnWbaD26DPm7GQsW2pbLjvrka1G74rx1GRjErqhv98trxJqo",
  "key20": "1mkudwaF5hUHUjrB3v4AechffAy698wJr2WHv9inpZwPULbmdkyubTVT33vR3bQGdj7Jjy6Y1B6JSKpNXB6UGe8",
  "key21": "3d1w4yXAc82RxQitQat8GLcDoA9zrQ24xS4n1jE4cSrn58kiQe2UiFica8gvNfsMSEzGgYhErjmjYkWeLLhsQuDN",
  "key22": "4R3ZW9yXZhombtgFKM8x6RoRfrPVL9nyC5JbVuYgFuDkjk6kPqBMw4z7GJitZjDx7xfSWKiyXxUpY9XkM37jqpWF",
  "key23": "3qCvnN3G7R6dUbmjXWBFjSoVyFMNw38zhJBb2z3XjFjdbGwfP8QNfhcuKs9yxCo19MNfk2WgLUimZBY5szcLzrqX",
  "key24": "2YVDDcDLwDXF9vhjm6vZ2JJnjfhyAnY4WdH88E6kVfAawszuKvrTDSADAV22TwyCxHNFDQtFKyN6myc72tCeuFgj",
  "key25": "3UhCEUDPER8cQKvMPbsQdt3sFnVeYFrkwb2VkidTHbQkbZq3MPQpGWoKX5K5eQ7nC73QT76J7g3PSs7BRmJRpghw",
  "key26": "3wPW2r76L4zoFm6EbgAZyPUxBMyKDMtkfVjZjD4Tb5ZQEk46Q426QSJ1shQozceWhzGfwBAgP6hmPbTapwqxuZAw",
  "key27": "2GaBY6Y1AcpGb64mkYRe3DqM7y12MibHjbxhjuaKSftk2WAt5PU7qoPBthb7TCHLAdB8qtbhQnC85HSvdAwucWQF",
  "key28": "yyzjRLSMzic7RZv1ZbYx6Tq5Q1JVxoPswJjtE98zbbpMVeaDW99t1jUWHUQa6sweNQY1YeT2cXg87zqrucQKfg4",
  "key29": "67MNjCuBWQjtKyJhsiDBYebvpz3hvMBKHmLYWJBvMcuyt9956pwvEoMjqERcpMrguuYhg2U9Q822ojaBjYxtPgae",
  "key30": "4AcTfj9QDgWSXqBmS6sXGeRU3K8QVX4MpUc5uMuAyGeDCR6NK8nyajiTqcjUZnjN9HrXQ1VrWjzwdZTcRDaXDYTS",
  "key31": "utXnioywUkQHijgfZ18UcoKcoq3qT3DgA6YizjHr6hhNX6cAjYZVhZXYiVKXrK6XyppAyLUxBL7oYX3SH2fRi43",
  "key32": "3XpJqcpwRskdYtkHpME3wzS2XGDfr3E1zseDm6Uee8iUNg1augZM7Ys4wvSfd6RvTPNqid9fm95vsZzuith7cYJQ",
  "key33": "2uNN9gzwKJ3DT6sDUVCvQ5X5mnkVw7pEvJsi6m8vB7xgJLRrP8iqNtXAbxyGVPgC9qgtpSpQq2sMUF2vjiP4zvwm",
  "key34": "5sr631SPNC4Dfutj67HVoULpyXddju5XKVdgfbDFPQBRGCfPBT1UA7xp4NsNoQUu5DhdSUdLbdzduFcAe8p5Hr8S",
  "key35": "2ZKHGdxYhxckc4N4B1qkZtFydzjm5J9JvvLXCAYCsYXdinCffGE7zLkHYRHkAN5xfXhz3w81d9UAFhp3uzDGTjeG",
  "key36": "4pgEQZti1q6NS281Sqk5RkSzgJBGoXXnMszdkFh4FxhodzqT83cW8BzxhhyD9aWCCPj3UQ5te8epjmbW5vS7HXjV"
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
