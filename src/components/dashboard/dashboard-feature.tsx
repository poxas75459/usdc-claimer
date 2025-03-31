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
    "31QLjFAWkhFFyzMy7hv4MwAfeT8PXY3vyRAaFirZN4aVjg4RPVuz3QKWMyCdBX9xGgniF1fiXGBsWV8gUqeZqBG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KFDKTH1DYAZCPCDq5vnQ2gfuNoz6rby3KgcP73BJDrKKijuXu4VYNC36f6huvTcuzQEn4GYKL2D8XBXhjX6jzcJ",
  "key1": "KVn6Am23bUFobUrnVKMaCdwJ7jAeQTgrvzU1wrVwSdCMKeqNLH9RgdcKJBa7m6TCnZoeUCR9J84shCNECVBamSi",
  "key2": "3rr2ADA8DxuQnkDtrgJ5bHhFH3AQVBHiM2zzShDa4Z1iEaE4icEp65cdtNsfyJSNxZEdumD3WoE5wp4twLsECteo",
  "key3": "uaaEKts2CpHFhKjJnFbKfyNpBbPxeoVGZmGcmCC57Q1pq69KHBskZtT18h1KtY1FeqobanttNmAa2JT525tnZW4",
  "key4": "4X7SqTEPXypw5FE66JCrLgu5YKjVThidYGNb1xYWpmBXacK9qHvvhrXHRTAvjYLEMxxxPoj65kfMVN8wAJjZemBg",
  "key5": "B4Bk6odaVmqZaguyTgypdzzd7VnAAF1CsE8Mx3su3PvRpub8FiT2NUKBotRFbFhvr64GvBRuj7E6wUjKzFTvScT",
  "key6": "ceNtWFCyxFeAhpBqxh2pugo9BZJWyVuPGqjKNseCKRfrCfGy3JZmcySNq9LVbTVTF8bGypkQfWhgehUNTU7Tt4U",
  "key7": "4y49oFXsrMiGEECoxqKWYgE2z96sgpFCCsmM2JDRMgJCrJ6TLW5CZhpNG5VtZZV6rtrGTmoG6RPfzRbumn1jAjWq",
  "key8": "gb2YQTFnwaNCWnTQqQY1BNkdSTvGQkLut8LJzrA7dWiC7yd5oaPAqBeyaafcg1yhA6qXg3ffNAByWwbKfXKmPPW",
  "key9": "xV2xc3AWmTPvY5ZewzbxW2DkXw9B2zTugvSVnPqL2JpSVdKcu4nhuEroMiiBLUhXX8CYqheB5mqcxRHc9yemtrA",
  "key10": "41hntYKWE1PSfvMd97K8aFoxud9u8ZqGnSr9vb3Lhxwp2rvf5YdrVSDQsgTqFeEp6GwTEUEDG1k6FGscnAZpbNmr",
  "key11": "4BXZeGLki3etkPAKjh36Q6R7UvcowjWwhzWZcMBw2khF4gZtafonBdDqn42kr1gNCwcSq2MPPqK3tbDMDycTNtYD",
  "key12": "3bwq4suU39BV3hMuUhD1LwMNbnphZGXLwAEGBajVXmGUPeraEwmDSxN1P4CNnVTm5Nu3ztu1MxzEQQu4PuUE48Cy",
  "key13": "3mA4WYgPXisqf4hWAR7SGFZm84rrxGd45Lzx6dxPYDhJzgm1PMCYQghZ3RGPuFjpaXwbT4Qp3FY2aApY7TvY6YM5",
  "key14": "wq7utsyChdedCjSs4LGprxRKsX8VL158D3VNCNcXaE4dcdeZXxcBWJzJZYvPLF7uVajGLKmaUunczLXvCwWdP51",
  "key15": "5mz789ixGN7vyREq7QFmskK2NvgMvP4sjp4wAPSABvrQbjSW6uwbqUpqPRqtdofWDLYYAvG5WKBV4kSqCEi2qayQ",
  "key16": "4CqZ19uEyRbHjU9DQqfVmM8xBickWpqNsppJma7kD7v5yStrzRW2TgU4ChdcR6SMRgHBzHLZa8poW1ZtsYvcFZgZ",
  "key17": "3VBUumfsChDFx3kUJJTtyXNPeQPjpNfsF8k5NnaKdRBDDQwysE1Wg3C686ZwC9qwHJfyarjnCJfSh8iqeF3AxmAx",
  "key18": "3shdgxxj34mfktPdAUfdcbYNCvmyChJjcb4HuvDx8SfpKuRx9C6XgYAoBxfpbS8tmcuj6NuGrLNxAMoTrsc7z3vt",
  "key19": "4576b1r46pLhGZVvEezQpuELbYjCNPYGiRSX5MhaNMJMNjgpaA4XW8LFXKNn3Kaa9wAC6mMGUzhw6rUUKdBc9Mj3",
  "key20": "fBy4u2KxbfjK3Rr1e51tEf7nTm6QjjJ5SGkcoVzU3zQT94mnDzBZNEDyc8Fr16eYGQ71Pz5kzPAzcGbv48kQzQT",
  "key21": "4q3MvX7K1MAaaXUoWUyQDxkrehfdqX7hFuqvHtwKK7nJWNNR3tvAW47cyPYnbAJPsTbtYrrdFdUk4Pio8x4EK2Nk",
  "key22": "4PfWjSan1U9r1V6J1uLw5XfBtoBdoxh7fvQk6ZwRqyEZ9qc3nt9ADotJCPrpJ7E1HM4B6KTb2Z63vN5StV8P4mBA",
  "key23": "4gmeMnL7McrfUnMU2vaJAMsYaHzs23wvMk1tJxUdz8H4BjUrvv7hL9kzGiy96FS8D8bTykx5hR6yBothcdY92zGj",
  "key24": "4YGChAAxqVVdxoPetpVfk6AJgqVwnoE9ne8VQJJMT1oPAAEXwG2DVJ3J9rEVQAAg7Sw7vV9XGeYwiijwDGerX6d5",
  "key25": "5xhBjQN4TbHse4HRX46iGP6vstgnUpYZ6gJ24CyNonRhGPQtmR61nQcoKeF5wTogY6chWJnNRQmaPPxAGJ5XhGYe",
  "key26": "3oGZUmTQQN5Jh3iS6oQwdQWS51f9LLSmdaitEW1icw2jZG4efjAuiRWj3JxgZpyLAfwRgiE24zof2VTyt4k1Ce1t",
  "key27": "B61yFSh4YHAdph8WH6ddLhs6iQU9PeFjvzq6sDXa3jhGah68RKJAnYoTXcogXTKz4EfZGEshfmiypytmYQax3vH",
  "key28": "gSi9AwE6EHBGvd1JihZDPysHf78GkhoQ4PiztrsQGXmExK9Ff7UcU76rBMS5y45cbkuPGLeiUU2LggvvZUqYmU6",
  "key29": "6WUzRG8EMcZKF8bAuT978qHioJw3PJ2DVYhi7hd8B9xaQcWdFtwLWvqVNmQE3B2Xxzb3mHBoQ8PZPuqJBBoWhGM",
  "key30": "zmak47jRwfEf5FxVH9mc9cgRFakdv6yDXQagE7wrSzW8DMKTpbxxqMUGLvx6f9YyS5MpBptVZTF38FytKHaa6JJ",
  "key31": "2fpMK3q5g9PFa7Vi6ivhdDFyj6N4pwHGQkqYrutVeFE3pCpgDKr1b6z8c6oMkHTHg6pvLN2MNnFTbAZvTPE6722A",
  "key32": "4bdXSZ3S2WTTY87HpPX23D25dnvmiHAJFPvWJ7acDVkwpXnq59enqB79TZNz31c3NFhSE61YgvcZFjaVKaCVY4TU",
  "key33": "4A5YRPo596rZx922vw9xFVqXKKYfhfPgTAjTdvxmn1mmJeRNTgc1aWyrF7FeN22fXgQGd19wzeRCUYDARVQTqdAP",
  "key34": "3HASFSRzN2cn3uBswLQKyn71122nWE4fCyqpTsmwK7hMJ8pejxjub6trdhvwpJ6Vqej3GbqvBJ9hAhhkrrEaBNGj",
  "key35": "4v5V1FGqsnDrx4PJocTXXK6FAeir2pA7x9tugruB9ymz5AdZXjc9dLV7HgYoP1Nhrc4vgoheYbUoujpF5m84GMG9",
  "key36": "3sa63Vit87fsMLzBbEpUFSK4sZSHFUeZXp5ZXKW4cvfBQAZDU6PodEJTaKSUj4UZjxnnZgJdBnvoisPyrC6x46Ti",
  "key37": "zwFrBYGji449wrkMLHbw83QMpdWPYGK7jPUNXQCNEbSEA5MeS2pJbijdnGCAFUPDHBCHz3fKmA125LaEzvsLz35",
  "key38": "229Mu4CeJx1twkPziEuiM99toKGd6u3vmUUeRhKJqJQGSkVtpjr5fE96mCRbjtgxryfzjc2dVCttkQWjmhyj16Rj"
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
