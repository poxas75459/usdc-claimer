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
    "5RpL82751bceZWzKHx2N4Ef72CJffZ4NXMxDXqKo5pM5SwPLkSex5M5VViGXFUcTpEnzhHj5ZptUVcZp29ZA1F15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zhmh1UZ2MPXBQae5k8FaQb6v8HoHL6F7tx6SBAnFgd1riq5ZyXPLmhv1oppEV9th8Z2MYWtj2uk7GyFXW4iw8YY",
  "key1": "5BGvG1W1ZY22SrES9Qa47SbDi6rLwpVGrXFqtsuY5XUMBiAE93SWcHPeByErPJpkfvpSw1iNXnMxirGR5woMNuRW",
  "key2": "5yyM2BsuXsVyCDHA5pE7FFRvmiJuU5LX9x7K9w5Ktu8ah6A7pQWdwm1shcgUvU84EaYAmYg57iXXhXFSq81DvQvp",
  "key3": "5t8aj24JhPxKPriZMA37LKvTR9uAbgtbTHNtnwRAS44FGpJv6JTjZ1vjHB8h2E8cPiuu1QBGKLUL5c8D16akPvcf",
  "key4": "3Rn6DGaRNvjK5i2wGQos3GpZZAwnrvozin3qdWgDjG3WDduZRriWZsCs5Dqjjy5CwXkdzbuRynUj2BZk2o27RiXv",
  "key5": "2hqYSwjLnV8ymYPpUAc4FuRew7k81TtKyrbwF6VYet4VVqwYTXpGVccGo6yusFSeWdedbNMqWGfhf9zb9a5EiYWe",
  "key6": "2CDcjpmysLJshmc1zU3ZFMnZQB4zVm8MbSEVxQ3dXtYJ7FxeH1jahYvZsECvWCTUvxDwvGkGn63WwYSdAh7iirVF",
  "key7": "2R7Mvsfwk5sxWL3B4vm3uMMyDCzjGVSJbKQYG7p4cy16RnnMY6N2C26FXUHcm9Lhh1H1qMKDCzWShQzes7yGLZ7L",
  "key8": "5u5DWWri7eqFnKxPCCb3KvYnTEEecEWLkkrDYfQayHR3wbzfDQ4TcNUVAUagz4E9jxvgGCxJpakzVxvBhTnhaXr",
  "key9": "2YgD3P6nq4dQe8RVQ8SkFEfHbyXJMcokgDqStk4QECtGNnhENxT51XGwPzTZqrBfTAQ63dxeny3BN7kTVuXwpw55",
  "key10": "WcqtXm2g3hPxA2qFdpkdegg3CA2SxEgFfXeYjt4Wz4VHj2Yg1saFGrEoVmgnjvFBPGTYmgdEdXt8S5yvCpsUmS3",
  "key11": "4JmSnqjEEqB1brgKXvaDPDpkuBfypU2cDZdHohqgi1hJa4D9mvaFqbWe77LU9UYvGVe4Kzthjom6fGpXJXo69Std",
  "key12": "zFVjPf8jiXeQQ2Hr1CoFt5NCg2Upe9AuVnTk52pRpjdVdRUFQ35ah6ReLRURSVStbQe4zKM5sgK8FHUVb5fcppG",
  "key13": "2znZy7kGeJD2xk4SvW6zGPwXzwtPGqKX73gv4EhqisZPfWAUcTMQeByefhtRaP5GHJ76jsoftJiuoaUiyPKngh8B",
  "key14": "2nLLuEcpmUbqvcpU4UX4JBWcw5ovmDRpdeEPeRihaqVGJkUMMQ9yFThWsXzgnEjyve8yxbRLNZXoZBVvMn49fxj9",
  "key15": "4z3nUAJJKYVW175HPPJqPjfHwmkzz5WhKdHdnJbJoirZFwwjXvTzm53GTJKqJFfLu6KXGgt7tHUjqnFzArswkTG8",
  "key16": "4KXHYpd8ktnHs2o8wPEmfUvgGvmqgbmVREEN2M7mJ554K8kXVGucV9CRyWVKCg6gAJG2BmFpa6LE9An6sG9Hd8i2",
  "key17": "3v24STwXkhiABqwcwR3UHDZyJtzMmY8UhjHBEjjRjkBDD7QxX2BCyggRTdWBqwTWHypSjcG7NQrDhA74DB57ZvMr",
  "key18": "5DX2i5GN8oy5pg2yujHxXaqeAy5vZm4v7ateXtvHuQWet1qnttCC7gTAht2eJsgn3RdPyvX9J4ZY46gnRyPeQChN",
  "key19": "2H7fg9Mj9EbdLpyfoQs3rXEgemFGH8pnDd84ywrNYphPWTdyQtecuvHJNErUvqf73evgAd5h53KzHkuDzpPD4GsT",
  "key20": "2xmvHZVo2XK6RDAP3diHpBmW8dGEu2AvvJZkWo8Mo2fCr4VZyCQ3f5FtySQha1knWdmCvSA5vdYBaNfJsDcfiQZV",
  "key21": "3JupyfjKPEF8gNLiHx73LSJVDeKQMLM9fVd8KjMjcGEorwMLQQovrgS86nWBmr7se2bbTp6cA2NJzk9hmTzW6sKz",
  "key22": "vmHC2hVnXKXRwYtcDdA3tmeR2GSPgLkAtjbZ5kTLL2uKXm8C13unD9139Njju43b3chqtyvhUhQgDvE9sb8yjow",
  "key23": "aeTpRAyuGoPwzNFfmpuHvf1dhdZy7yhq2QP4DKW4MGFhBytYujmKEvQGwUg79HSFVCNZg3Cx9TEcC4FgEqyzJvj",
  "key24": "8Nyjzwm8Zw6FjmyKSrAarHmvrYUt1s6usHMYwyNrdPCAXYuvtZa5f5rvhQGjP45PnaZnjZDsjES6PECXwLTaAJw",
  "key25": "5Sk2F2oCU2yPp7kAGr6qKC9xefFfmHHrUvFKR2ynUQ6cSJgAs8e2tVrqeF31sYGd4o2oPdhnRVyyiS8UgH7Hn223",
  "key26": "ji7Wp3LsHgULaEbpwzYMF5GwngNPG8j4P7a3rkNHuseEkJVNcs3ajv8fraBTjfEqJm8Twf6F8PsKnmyGamMcwSv",
  "key27": "5rZUuwVy5SjHLEEgZSQ2TzjLZkrE22SzveutG2x1C2y6gVUdde9PKfgv73DmMRRjxMVAMQsEGrBJobAoUoEwirNR",
  "key28": "2jD68DZzdxENuUQjx4M9mHvJYpWir47eLGfyXXhE1XL5cvANc2gnzpRLZDGksYkjUs648dYDYkcMS1i8pyccjZGL",
  "key29": "HmEziQEMnKGNRAucpNgnbbjAggq7T7mmeBjSwHkuVD8tLb6k93NzVq2oBwyw3R19UeMHw1oq38hvuKNxVBBZK2e",
  "key30": "4kafx9ZvmBoMV4KuuiJ32wmHqUjCHhu7YUXMZ73po1FzDQttwcoqNEKzJKTTsJakHZNQDfUNRqtedQm1Fuj5Rtrc",
  "key31": "Krjy6Cms7SVpZhgY5uHLi21ML4v4qLgREMM7UHmDbfx1xB6qv8eJN7S1ZEwaBJmbZxvGBAzZRACDYBFZ2C5Ek9h",
  "key32": "H53tAYTGiwTragxSLrXwodSBywWnNecsERDeTCVr3GZob2h8hPxoSUMGfbGofq7EbdxgBmknvw8NJDaWwSacqK2",
  "key33": "2GPpANV19dfkogmZjg6YPSL6eKWMkEfGPxycGN41GoNAE2Mxng3AR2H3Z76dMQR18HCHjKjVqKsRgqzfQj5JRH9m",
  "key34": "3gVvfPH4tzAUf4BShkkjvUKL5gjKYrSoSHFjQcccReTzfsHfsJULBAiQzUC6px59zaSqdYfszsNL8UejxXVxrgNG",
  "key35": "3s9vderjrCYHZCV9UGvaroEuGAhj62RTQdqKhaVr2HVyGUg6DNmmDPBwD4E1YjTP2ZRGYYqG6SAmm9hDGHUJ4wkB",
  "key36": "7tRXUa4iSz3TvumHgGXgPrZJNSs4yRopMviw3JYwBtwq2UEHLxc5Lyu4iL8xJwjnURqYNtpWmf4MTa8nKbaGtNx",
  "key37": "4o86CvJtQijww1TGvDaSgCrFxcJKa8PvCJ5LRp2ooof4td9FCUgsSLnpSvaVtjZmBX2kQRdaVrkot8tBia2rxtn2",
  "key38": "55HkuCeYL9zysMD9aTS9m6Sd16C9Wuu7yzQAi7m4YS1CHwm5ZCtFJtdBz221KD6Kz6acxGXWTf5EVGvswjxoP49H",
  "key39": "23CyPEEKwPg9oVf5DY1P6sftb8GETXbf4UVXiKUrk4Gn8E2LdMtzeTMAKFrUQcZo7zoe4unzDa7YLt1JWLZNjUz5",
  "key40": "2JCPPF4j9WgAWabLLvE6xeDAZzaExLSnyAW3MWkEpyB7HFxnAu3EJ4fvzFTLBu7zTPVAmLz9EFNkaoARBjmAy5uk",
  "key41": "4HEQDswXXh7DcAUJPA9AkQh75VpxMKMHgmqBf7hDuAuTTtVy7kLcH8mESyTkTLeFMqJaEAEAALes9JzJNoEibun3",
  "key42": "2TGEyGDwmtjk4E1gMmCR5EUdLrxvSLJgqu5ghL8ZVBJgnjj9nuXdACpbZgBmUjYvAci7WgPbSez285hkZjQDoQpH",
  "key43": "3o3ikyWhcvLzZQmbEyVajhvxYA9jvzNxVepnUftmx8JC6dNqBZj6H7AQE3v9VXKFXHVQLiSSvQZqnwrSPZLZcE33",
  "key44": "5Y2eXSC8ZETHtx2fuKmo17e4BBite9kjmXva5e6VoFL3DXqtpxH4WeqC2JdYhChHJSDaWdd9d9RmtdwehyMXuQta",
  "key45": "yf1NcL6FMBrpJ1jyrxwsK6K5THM7bx9kv2k79qEfoWuWdZwBJfYicmaEViieT8XxEKKPMUuEszZUUZReW87RN8S",
  "key46": "3eGbxJw3J9f8s6yiMcVqNxqFqJ1rL5jCWSsAWT2xJhEYz3Y9jTjTCa9D6gitTjCzN3dSrZNWxSNmBeJi21WtDMf5",
  "key47": "2qjfRDJqf8rRs8BADidFXr7vV9Z24tYx1xkeGLkXW4jARcX2aAkSehvYxWV1ievybvF4GdZE4jSxS5FpQGp1masM"
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
