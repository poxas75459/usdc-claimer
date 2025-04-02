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
    "5xH1ur62fS2G2finqdLevTRSwNxsXHSgfqMZMYgVeu4hGBuAKKZL6TvMtMynia1X6MqwiuiVR86PwbbGvwxZU5FV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b21Zqv93n2PuDTdbUZJvNfpZaSaGX9fmGMNn2WF7gqpVaRAWL8cdqk6tQA7ekMTyBQGALdfRLV6PBABgM5vRhmE",
  "key1": "3xwKqC8VAYjRcsTQAUofiUrFED8BesQVPvENQCK6CVv46gVJXhcgwf7dAqoWoH1fbg42ZXnYC96eoXzWpfeagnsW",
  "key2": "5GtTnDiXeSH2H7Xt59DGpvsm68R4HirV5u6pXydBCbGEZM1mtePtndDwkBg2UULrTjmKAZnN5bdJksTveDPR6ja5",
  "key3": "4dpK1t1BSci5dDTUWCjUEwKD3fyRr993XbmfhGLzEVgTuYr6kKNdCmt8xxqL5ZNwEmrbZ6hzYXpYnp2okyBVrKoh",
  "key4": "3d4ezo4GBjRuxYwwiNz6XrUWtVxXnm8ejcUXNSyMD8aPqSiXrDgzL5rCxoFfJqsxaDrDfyc8fqMF7jgdwNdVwNWC",
  "key5": "WWUZZ7R3TnJzLUGNka8LpzSsQ4VzYpixVThkzRzYdLqbyNbA1vTjkKyVqnQZeMz3AbWbbWZS2naMkXpAz4Hq7nv",
  "key6": "5e9wDTe6uc76h5ZxfwksiwHo9SoZQMNsjL3rfdJVo1Jkktw2vg2JKN6baZRRmY8EfTcDQbLvadoH9peyRsXjKYcx",
  "key7": "2GbqVqWEJrkY2F5rpsgjaEBBr7EztBrEKrmSpV1o5unPbPejqAfP5NEoD1e5q6qShj6mEt9PYWneYgZU8bHZTMQs",
  "key8": "21y6Qnxn3thgVak6acsnErnwUnx5h3vgGceHUPmFXK6V7au9kd21qsydJurj5if4LQRDi5ogtQExc48PPDgffY9f",
  "key9": "2MEoarfeNDFPU4qnQGsyxHXGeMA5hXqNcx8jCz5yhr1xUWgzaFpUKR8Gt3dvN81RBCfS6JWVTD9Vt1gE1o8MeyVh",
  "key10": "1f5ZTjfu8aVzWMXQLkCa1bipoF9ykwP1vHXwUoBurf5Ye2PEzVXvsvmv6enuuXbusNtXX34yiJ8UGZnxtEHU9YJ",
  "key11": "4jVGQ5GYQUhYsvw9xmiPz2gxVPssSe7c2aJAwrNToF2zT1Gxa31geEt5rMmFbBdukRayMJg7NpEHen3i4tcokf8n",
  "key12": "B2CDfaPmn8MdToZsuJijhjmZHPQTF1i4rSjKE4wyrCEb9MpfgHzfHDaEnetWJoL1o3HbS6eufzhRrFGRRDcKKjE",
  "key13": "4EpkKDvNW4ttFEVTFHb3BVZu6tszRNDA2fkKikgFqbd2HvampdcoBrnQE8hDgW5WQCTdyG5RAKH2r2deYNZChcxN",
  "key14": "xXWFz4AJvSfZQv6jqjpyuFLwGKjb4TgbguuERPW7gLtGinzpmcFJdnRHYu8xSFMGqyA4hZ36je4eLoXY39y4A4Y",
  "key15": "2NoSr5mupx7oLhk8z9RPyywCZWGyoLND8rZHhXFRcG9pKpB7DEAgdyks5NzBETsE2kjoMWUyd5v3LBNhziP43YNs",
  "key16": "HuoJQcZddK9hxogfpejnLUYdVnwDdAoWUWJ2hKJnp3HAe7kQ3NxX1VkGkGCQQiKTb1GZ1QdU81WxP95sPVy7uA1",
  "key17": "2FNAFHs3GPqjbyCSz9duD15VzN8RJ5NAS8CxzkD9vAr86jWm2epG1kEab3zX7hdEjUzHpgwR1ZLPQZmkRKHNjD5z",
  "key18": "4FRRM6rY4ixXdMaBaLtwtKNXspw2egyPuHkmRmMCpZ3P6y4tE4M4DjVD6cGFnp38xd9LMvkfjBdy8SGubWKxajhN",
  "key19": "4a9CTNyRDEah3pPcZtNUNnDqynNULd6mPZ3akiEcLC4sAtZHU1kvkt3tfRArDkKLQPXahfwWpTdFZwVntPrszkCW",
  "key20": "4Ly57R7icUdVUr4jqqeHS1m86C1ju9tbymc1JHgUb2BHBYBDxLFsuByYoxszvjPUuL73zLTshc3zFsBB17FSjcmi",
  "key21": "5zE2SShAFY4fP83o7C2etMviR4tvFstrick9V4hZTz7tApv7LdXezUE4KjRqEMc5srFswDpoGmMFkVsEp7jwgQKk",
  "key22": "4kay8X1xkuzbJB5brpL5LxvnU5bbaYeheffDwGDcSiHa5AMQBpMHc8KjqYABZCqjhhx33SxsRz4iZZR8EYtpQYDC",
  "key23": "21zUsarTFH9N8rFjrR8cvEoVK9es7S14KAHJkWMBtvrvY5UUmCXYJkpTFc3pQMThTH43Vgw2bDeNSv78tFFUDC2g",
  "key24": "4UdUaetpkxSjutSX1AK1GYQjfp2ErjfYfUFkr62Yhz7bDUyqjURSLf53Lj6Ct2qY1FwtCw1Ego24JaNLiNgAmujn",
  "key25": "3CheGUL6KpbCiDwLNrDm8aJGtBxVqCzyTejY6aamJeNi1CyVaLxApQ9QHdyRzc4L3suf1iqwAioNbKQ33GKQL2r9",
  "key26": "2DMtMmgSNSJExXDAEScz4BREZVZVgPHSuVBnzoaYPF852RDGZRGigVniBEmi8dPv7mu1pYDWaEufwHt7rg99oLQ1",
  "key27": "67USrTjmjVmAp8ZRUHwTACShd5Rix59TZm9BgUtpT9Ffm2Br52ydr6k7TRTmz96cauDMfEejEdjguy7UcqrxtjPk",
  "key28": "58UXntYgfMzpQmUJSzNsBky6Ypxo7Q16LqhRtFu1z1y28bPEykDuBspiXTFk36J7nCEothMvKavZBNcZazhiLRXD",
  "key29": "4XwfGfpsW63CsDT87wzBrQvnK58MSkrayxtQuuj6egEfDdFzL2eDvWbTeAaDKPDReBXHMvT85oRNJjv5ebj497CU",
  "key30": "4Rau6LUtPbwFNmYn2QxP1c8E7TtDkjAKeX6A5GjrPohG2MbVzJjHwGbJT5DrbkrgxWve4fFPJtKJ24iYZWFHUJTW",
  "key31": "2aoQnyXREEzdeiRZy2PcddwjfAudppV1AnvGv1JpytqvJiEdgRCjthtCLMt7oRvf4c4wn7MdpgQwFZDxHNRD76os",
  "key32": "2BKc3NzMDsFZkUimtEEXJZTpj6GbfnGJqn4izvX82Gs5kztWSub3MnsdcdfrHm4N4cZqfMC2kJvWY6R7BqBDtwXc",
  "key33": "YhRxQJiajzWHQ9P9PPuk3dG3TRVeSTyGARfSJh6M5ud63LixPjpojHvz9yWcoU9YDGA84YobSft4KnkgFa9H3f7",
  "key34": "5yUarDaLLNmreBhzLSezygk7NLqgedGZxSGQW6Qs9uZZJ8ZTFGwfZRmgxzPeTi8aydWxrP8yd6NyKP2yhwoXU56k",
  "key35": "67oCcfPCUmC3vnuman9VSDBPVJkNf1AnX8AJopQ8siBQRCpDRqYCoQ1eHLLVN6FgAxdVFFANnxjGsJN6tMXyeft3",
  "key36": "2XsFAXng4rdiYDGeBWaPpQP6fpBA8TrSHTEsWRRK13Z8AsHFtFHfTUQWSNKQEcyDSDe8pP6ezRcQYZLDMjZoHuFJ",
  "key37": "3pApXCATYus4YpCd7ZJPVPZQm3ye7Li8ekyCLgjKyehwSHjt1dXg1LoHAck3PC6ggqpZcc3FzkKyGTsLA8mFb1Zz",
  "key38": "rZ4DFDU8Y3GKoP9GxiWQ9n89KYVnc4cJxdqzJ9pfUTLBocxAzevGcZMBrjFG9EXT3jr6eiqdCBpTm7V6k7uqW2P",
  "key39": "QBTdEVp1rMzB4azXHAYeaYUeAuMLp3bceZ8FA88UFMENC5xDsG4VCNTv4Fxm2wE9mW7hgNDTxoggVAMWG6yhbuc",
  "key40": "4vYdBaixEGwFEhDT4NLjxfLKZirSBnRTU4XB98o1WJvtd3YksJXhdDxYXBrhDk22DY7WhtQbe7uhTZJtYL5yJ6Hu",
  "key41": "3r4zFVyGMSkcpZBH73oj9sMkFRUcwdTYbSWXuk9Y4QPGG33tEVnMRZ6M5WgKroLqEMRaZfPrjyTasiqcUyT5RsSn",
  "key42": "3Ds4CX5uEwrti4Jb5CcBV5Wg89hw6xPVEgdcpWcetj3Wf1U9dEAu7kRUFHTWSBKPbEUJgmttKBEcBKPQbrpe9Chv",
  "key43": "3gNXTBLcDDr9H4XJ6Kwg6WUjxp7ihq8uuX6BL8aD714oUQYM4LXdcwUQ2xbp67SHzHKdTwMfmyLK1RNtLc5QByRx",
  "key44": "4TuxZub9Hrb8Yxg15S4Up93GWmDC5GuLNaW7n9sFiQdcnifH8AXWnTjjJz6V2PiAy4A6RkJM2RukhqDW5oVfxNAm",
  "key45": "32YA5f6ju55HqbYGCUKVhqrafFqmrKQ673nUnAG1AddVVs2Ltn3zt8mcCvgWF9PW3EppifZfgxzbnHKhCTbcd9qR",
  "key46": "2Jo7i3CNo3WnYBEUgLUWXtCDEfBmfx1TNTmryvzqtNEVtXVnc4Q65YPYpQkw3fHxkkqijQixTmYFvHjSJvEdRaQe",
  "key47": "2sXFdDCESpQdvSethbJrMEwxLBgYeqjaT8pUikgcCxPP7qJacekFbTKMzzNgh7DTRgq48RoFgEpxz4cFxeiPe6pg",
  "key48": "4oab1DajQkjAJyM7f4gT84JaJ7sjqmFubBWPh5t6tF2g28zYCZ8h7EFGS9rdfxmJGJiwwdfpAB5na8WQ3PiPSeS9"
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
