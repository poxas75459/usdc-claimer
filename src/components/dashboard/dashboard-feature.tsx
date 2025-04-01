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
    "3zdddhx8Cxmc9yd5oUTY1HkbNbxa5B841DRtG3BsbT1QrcUuzCTGN18nMkwFh5CjqkDrC4eMfxEWzXrsq6hDd1mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jettm7wD7dMHB35Bpmqnq2UAKcJkdzuamKtAX8WK37V44gsc2JfirfMy5WjrQuSZfGumFsJjEBcuD7hw13zEiqk",
  "key1": "5autzUNPyWBFVPtYBHMrk4YKJdYHaWNiPQiQu5Z2qpVT9zivygFcoYW8CNQMTzp2DBATRZ8mymZpmfzmivgLYSX",
  "key2": "57UmxSUx1awehPm5FmzTWXa8CXNHjKN8JvfjERMUUgMFGaKKbaYbCz56LEL2fUohg1dEv3tmL9ENCfwMGbM8fGvZ",
  "key3": "4e93maVdQfFDLjxbgCHeQnU2N64g5ReLLG63Zn9K8C1543DJzjyBkTMcLBSxAXFbH3hg7GNwBPxfkFNEfofzCW4w",
  "key4": "4nenVoYj1ciU8CFwRj2iWMq6BuLr1USa3oc7rFeX9cGaWiwUDYw1FnRQDSse1YGAcgMt9iXeUFpARXLR8oKNKLgt",
  "key5": "5rC237wk16V1itWKYAX97D8CKvP1YK2ffFzHJEDVVXiLea6ovnb4hEnvbf2sFrhyCfXAQKyeMrWtTXkaXJo1DEvF",
  "key6": "4RcMVGPzm4Dk6Wqpke5RGAMWbj3GZiwJVL2RuQu54XWjX2X85YyoEPRRGjxwYMYG1Pd1eMBGJLJbzBnm4wqvEqsy",
  "key7": "pQYxXLFm8JP8vp7X9vzL465FCwi7QHp41YS8NLWmFwujUK9DMZGh9amdEdUQQwWn1srksvwoMWf9baGzEbnSZbF",
  "key8": "5q2tWUzdj4yk5vY9zkKV6oroMXwVkeGCmjX6W2gASDVpSeqQJZnQViyfCrKsEna9KXmvK824dhPJqi1QfMXNfHVm",
  "key9": "4ZgiPhPTQusDkfZ2qQfs6A1Q47SqfFjFqbpHpMLU93Nj36fwkKLRyyK44CQda3eAyzu3YmwgqN4DszeaTD6puV1s",
  "key10": "4twiLxmKdKVMB9vaqWDC8zkCVtqcfdhK8ZnxgG1Whmy9UizBfyQkdBLRyNgyh6pmBAvMaj6Fb2PYonq3iZNxeyS8",
  "key11": "2bbiZPzSBvRhvSAHiaHQDceKoWeCu4mabM6eWmoKE7iAD4RQGbmfQhxBc8xNFKdYPqyXvZ5tuPhbXCK9NbZuQNUK",
  "key12": "4MKBPoTs85YGhBLmGmKwbrhZoWBvqQGwcW4MPp58dj8DucDdXQovh1P9Lp2zfn91SdP7tNnd8fmWLGT3VdNShLbq",
  "key13": "5T8kouteHYdUMPQNPppTFH199J5dZP5oeP7WRiKTY7DxVAK9GiRJvdq1pSEE2xbgoYYvPyUcpegYe4kbPN2dYQoi",
  "key14": "4ux8v9dJGkM7U9s6saR58Ci9KW7aQ6CVNwaE3hLJX62LKS2LE24MCUw8A8iMuoZdYfnnZQgdDuP79Dpu4QbgAMiV",
  "key15": "2LX9fUNZrxeFN1sDu2d6wCjHP6DVchjWqBBHWuppTyscatt1Gb6KSQCJA1PhMHfacQ4xLPFBaa3cyFtSFN3PvGoD",
  "key16": "2y2dTXnABrXYr97Y2k2GV38CJeJQYzE1thwnMufnVQcAcYsdTbTwEkSTWU1LXHYvjH7q4MCCtjYR4WXQYCTRFcw4",
  "key17": "5VZk4vjP42foTekXjVCzXYZoS2Nrbk9evbQ1BS2WjeJpeXZ7osxMJy1HVrGAoRPgGXuSseyMDHmT72cmfqcR9r8U",
  "key18": "23iUH4x6SGh1bpL6suo2FVE9J4USj9vurHupm6d4kbZbBiUY6TNeZ6HFe9sEKzdQcjCpTGaBUpUJy7c9emT8dGGZ",
  "key19": "5iwvTMGbqmEUUFjyYuvH5yrjKiPyWhLYtkXpNSRLDtLvStTjyp4XkzoDKWPeMUxpAhv3LjCQYykxgq9aKCMGPMb8",
  "key20": "4eRVi4kSLFn1cS3LbEfyYdp4UZjKCJARZTUBFdaVwSq1xF5gGhUHts6zgr74yrCzoBH4soGLEt6iigRtSJqgcCKS",
  "key21": "5m8Ggoy3SD6ZKqDAeq4gjqgaxrLb1DVjhtb8mRFxMdgdRTxDg7P1fka7pXTb6G1AMBn2MQVnM5zZtQgrG94scPLH",
  "key22": "42Na8NKWNv13NkKGQ12apMmTZbLEPDyEqdDmhZy7aPSMSsyCaQjeen3s9QEoBmUkKNC6eCPgUUPtvaBuCXAQCuUh",
  "key23": "jL8nPuxwZj63yRWzb2K1EwBREL536G97P5rxYVSLinm7XixUfBAv52jotmTxbM2W93gcGF8Bn6vfPLQSUDwxRR4",
  "key24": "3pDquDVTF3Hn8nWGpox3xAUuxMerGPZRyZtjdt4UaxYbcUU3YNz6bNySfk1bCTRutMHEx8sqNJh5nXfzBzLceEFo",
  "key25": "p7o422JjfnjD8QQqFsqCLxEWyJQVMfFzYmK4hsekPWHAywHNacaqQpx6VK4LiSud5YuYxDK1uJkMDgMzEgSktkQ",
  "key26": "3sDou1ntckwt1neoUpixJeuizkB9Vj7cLrp2YTu5Ji6Sz8pGvYE2jtmCsZVtSoG2sKL47eqaP4LKpx54H8TVBMdf",
  "key27": "3VYLSfUm59UTb2q9DsMhQfJX42wDRqFELqo4etmnauKr54vStEKVVNiw1CEoniNz3rLq7DyPfZh42LfradrBmB4R",
  "key28": "3ytpvXRhtThRsMjtQKGEXaKWQKjEEF3dvL1JRHp1EYVbH1LV4M2Dy6nky1QDQ4chGiExemhjzF3EGMqNqyKzu4AX",
  "key29": "5PhuaaWqq7atjpgvGZPJ3rhDnd3AcEa7fvRzVNqZJa9KnRbpAYVxGkAQW6AxnGt4UgpwpjKv783JFoGtfmnNP89j",
  "key30": "5Qoyacq9nGueTs2EZ1L3hwYd9jkX6dfT1Z89HQJD9eNRYEqtEy38Yh3tfjwqMj6d3RQtvDSgakEsLt9eTiQ4uimK",
  "key31": "JQZezRJpoJpH4K31M2RueMBvPHWq17r8Hpfuuo2Ed3wQoiSMwngRefm1nJcryjD13EEFKeMLxPiALe8Gba1mBD9",
  "key32": "4Zm7GKZWD29B9hqdyXFh1YtSoDafi3SLqhWnnxmJy1Yi8kfxr83AEGBqBSem7gQeDCTf115Fuhu3291i1SBxiNKc",
  "key33": "3mS9zaPaUqiXwxYqKLrgtEyEQC7grg4YGikyStAr3RacnuMSVxMgDWUaKxCBYuqv6pza5k2iGXoZcngg6hogp4By",
  "key34": "3pvUUKL59Ws5smXBJCFgwi3bQCXX5eqFuSSLMWwxZ7knRNGPn4GCY6s7bHKn73NYETgZjsbFhkSbkKisq2vHvcsN",
  "key35": "3tXMGyHjBjBk4yyrJ7vbrFQLMDGx8vDvoaiDasGSSfqWw5fp8nV7KXWNrpZc1vCzm7C1XGkuij7FhaVugsaQryYq",
  "key36": "3gNvZiq456dQGjGtj81gftwHwYamunmUK1DBL9Vy8Vyk51sheVYLq8oyTZKoiK9KnxWLrAYNrS3KxfgCihTvgcvy"
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
