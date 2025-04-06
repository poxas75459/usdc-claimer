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
    "8sU3f1FVntAb4acHyDQk3Jh1L5ZByeXzFZWJx5B8MBvqAega6QsAQtTMR8LPaeDZ7kmFvyumzKjRhwVugY2VcCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jrzkFotBaqD6ZEXAaA5rv2i7tbDbvrkuzYDgbaGvkwc8jw57T1fuUiBrwWK3fZUyjLuT3TRg4bB8XqW5iKhCpwC",
  "key1": "2GzFAnj9ntShe9NeJ76U828N2isQ3a2D1ucpLvx7XBgogFeacdY16cdDx39yovHA8P5xt4qyM7en46XsTFvM42Pt",
  "key2": "3ffPhoFfJs2NNDw4jRjUCd93edMkyBFwY5ducQ5StB2rituiruvg3hiAGEy5jcjDVvXeZ9XYEegUtdzJ9nDup6vS",
  "key3": "Ch2owfBZZ3GpRvXD4JwnyZ57viMPWgvRgHBqcNkmXEXGfXPASqdwLBXq7PQUNrm9Wh5cYE7Y3nwZgvjshs6TWMN",
  "key4": "unqajcB7Ga551VhgtBnZ2N46m8GfDqFfiv46pH3bfvisa9rbkt5Qb9uUJ1q14Lbas85S9FFnHTm3mRuTxK9DhZq",
  "key5": "5KyWww4ohjQYK1HSiV55ZBvtop7iZYzmK9Cvbb6VB9YpkhAyh3JduykBbmhdALJffesB8QxnoH9Qvyqt54heD4Zk",
  "key6": "242zqTMEszkY9m4PN8BcCGWWW6foRa7GPRASitL16xyRg55TjcT5huxUGDbRfvn8VpMRahEHgo6mmPGxWjkX1jU3",
  "key7": "2j46u7CYbgvAhMwzPpQuHm7JhpvB3FvKASLxebAA9FtzJ3K9kigAZGQqDR7tAwF2NZBDLc1BtxuXo7KqmFrbZHLB",
  "key8": "3Sia1gqT9YkHDLPdzrFdRsL4Ec2rm4gTUfdj9db8yj8xMbWV7fTnzHPVpuujPCNGWiQ6MmDVnapNPUYxARYUy4gB",
  "key9": "2gVetZbky4EAgEpWhFCvu7XjVUfW8W3cCJhSRhZtx8UkAUJETaQsDDM5JHce3sB9e4KyZT9D7xw1wREdX296XcjW",
  "key10": "4azSk5pUkvU4S7Sv2BPYh1RZ1XciPxG2b6f4vNWt4cJB7uwhkYNU3m1DKt6eQKhVXYdHiLfwceP8xDtG2mdyrqjN",
  "key11": "4ZD3vQ1LaGT1jDjT4itaCY6M6UdMAwRnfbZ8iJXbD8ujpEdom79Zw2yFtCQN7xQkd1VE1qBrvynA514RMkgEVQoJ",
  "key12": "5atryx55ZyQHyofGx6MG16xbtrLhfZZsBqU4fcr8dC9NFr8rDHgEJuonM9V3Rs3Q9moJrcaU7DXWaFhkv21amsB5",
  "key13": "3pk5vk2FJuVR3E17UeNQTtXSn5N5jBmzNVg1Z7oztqwJ85drK8NBFp22zG3UpvaV5WA6B1jnp7c97ZmeNpa9imUE",
  "key14": "2bJg1fuLsvHThzxz5F6FCKFZzSkB4dUXBrzs6NJrNsApt3FZ8YX4aYQS27UwHX23xAZ6DbwSwDVTbhYLzR1Hoxs6",
  "key15": "5oYGzQzxmbKhzWJyFExyTuNpcMutFxtNGHNcnZGEu1k81nknVaJioBdaTuEeoReLQpYMJQPSvCjrZnbZ2skgfg2g",
  "key16": "5uquavX6XpMVSWKaadmqmr4stG6BsKKxmodn7E6t64G8u9ajScFBJUyEPiCULZE9sZZd3zHUrZrhAbu3LBnHU73N",
  "key17": "2ve7fRLXVMWkYzrbAU1kUoR8kKTWos7rVdfUnQPGUdVD8RT34BBYce3UnunNMuR9Wyfo93PM9oJWTraAwZowsVxb",
  "key18": "UzB1ctDHaB3mXSj1SP5Gum2k9t4mP4jaftcf8zBUgJc58JdQt7D3D6fvCJuHqZ8dXHMxSEdE74ctKpLvyHn5SsY",
  "key19": "3DEvkFSCoa7TU4j28unX5GyA8afHcB9imx9sfDdMi6pnt6XWskg16HiAdDNrTw3YgpAmHeVyQabyczRSiudF2nzr",
  "key20": "3kLBTuaNaQYFsd3YeVnc2wVzKrtczLsi33L2o9nC2EGNeLtmT3qBYkFN8qhfgpCiLAsaUiAoEyZMYGWEsda8unik",
  "key21": "4oZPWeGrcdFHyXWwL1DKPg7WY9XMQuGRNcFoGiv48a1c8Gq3ZyDcJYhTaBXtciUWVAfxz6DPH6xsPcgoJ1zwuA3X",
  "key22": "55GPkPocCm1dBkcUTCtopHHjbQJHKCERd6TTtYV2gwSbRFTZ8DKajP952xfhR9RayqLWUpwj3nnZSAAwPLiPhwo8",
  "key23": "45sPeBjmZQqnMjdyJyDE7pu6RccJDTkUJtiRGGAV7fb1E8fagbAojHjwYHXtYX2qF67Wm8CcuGRaAzHDPDDE4pQt",
  "key24": "243dAkzjHenqZyHeqaydjSht69nQtAzebzJ79GVkdC8UgaMosPqFZpmvU7aT53YGR59eZR4nvtL25witTB3KHQiu",
  "key25": "4qv5ThR7Na8ULvGkP9Df9SZ94hma3phjS76U1jitDYAGo1duofHuwBVe6pLGFEwB4NuooxGkMFaH6ax7btfvXySf",
  "key26": "P5VrTqz3nG2rnVeQ9ZTqZLXqycu7auK3cP11DbF6WfWLd68EkmpDUQk2xK1TFpDQ7CExe5RfBu2PUwEXh5UoQjy",
  "key27": "62sQDcqov3HnDQC6jL6Dj2LGDsWxJb4WdQbC8PqZvKGmiM4JsJnUJvWZJQgo72DYnGd9XtDprfya6pAnAhQoh9nf",
  "key28": "4YwjKZiP1eDVWejjPetqJtKeZ5131jBGE7CYfHWjY3Wu9Ffa9jiZ9vUdrzi8ZQ1zynCGR2qrB7apoXybCFBU2E8b",
  "key29": "4ZSBJNBvEvUKbWeTR8kEAHmzkjmz7sGM8nQ36gVRaKBrzKq87j1MaCCVzzbfQKXGyqSZsrsgqoq1ZCPXT3rwLBqs",
  "key30": "4asmPTCt1cB6WE78agnuEBcEvwFQqoEDXdSH2FJEmKYYsBv3ZREd6b6X1FE41gnKCmzPcyGg4AuCut3p4nnjdRAH",
  "key31": "GUfYy8EdNZfpqWXGo7uFn4D5uwThA1avtS7AyBQg1ourVHSiCTL9hJny481AzMycVmB4j9vMVbykbMTBVGBXQfK",
  "key32": "4dmkd3cRtxvKn2msyr2T2MCnsotpjabGaiNLmZa8FqZ8sutQA5YvxJtuNd2sM1t6xVNeb4UVWR9G9KZeTFCQ4WVe",
  "key33": "2P4B8pLWj7yFTmDs8nUrqKhgEaUhb5b8KcS39K2LemGw6hVPeei5PQPzHfXLQ6kWJGyBS5gq2gAFdwZFPwJ2NJNt",
  "key34": "5K9hjD7qBehX7Zn5tVWpMo4QNK5BiZNHQGC9oyMTCDb3ejq9pkoAumGpzEBDvBT95wUr4E3FBGv3iFGFM9LddcAi"
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
