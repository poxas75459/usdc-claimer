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
    "2hq7jc2PvHJUXf5ziJRZTbKi4w9XJM64rFGBXpFuyHaGuaJEkveXaJ944HGuKbtun1Vj826HPPVQSDh2hdME4RJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Q62Wta3Vbd7Eujhe5tbRH5RNDwf6Y1qm3a8X5sXShQZUP8PEHKH8T7u6VgbUtJYSV2Y7ibLe2FJ392HMUeCSH2",
  "key1": "4yhoQpMXLAJuP9Hd4CoZyXZpLRn6tJroXs6NsBQqbmZWzd3LcbzEiCJvpNXhpz9wfsvqsACo25WLeukdVeMJ1vXB",
  "key2": "44mCS53EggqnKXQ6XzhgYmP1b2QUAnzFBDBUmyGh1ixK4jy7pv4tbVhkAE8vNrsTSz3bepumDX9xj2C1CuqJbvzz",
  "key3": "5hXiDy7VPecDT7CgeLrcqjRPe6aVXcF8JPKTrxp3SukTNGsc2NFS5FpFjG9gSHCZQWQD8gzxqr8zt8XKFLJ4Um1r",
  "key4": "FoxTYBok9Q89PQQX18rJRw178ETgYkThnR76LJ6FVS4nnTYsqQxAXSrGsJZSwmtRMcYSuX4WWARL5vZFEw6EJxg",
  "key5": "3sGZ7uGeecRGgAgwjCSKo4CmhQAXVem9dL5rkaM1DoPGmdSXh2XBiV92LuaC7a2AYf5L6D565AgxnJw3gXFGoEqv",
  "key6": "5jxkiedqi1Zic1t9sUgCdM5JEG9T5REa864fc6WMRnEMyrGsgQY6Wgp2T9e4ir3numda8mU3okngBWCGS8aJ5xw2",
  "key7": "5NAFo8X4peuhd2WEkXNLPkBSMCwHebxxLg2F1Hr5NfU6zTNLHcLzhZsgxDP8zqJQroziLnfLU4ZXLvEvQoG8v99y",
  "key8": "48uY76q5L6NzL42uHzwT3JzpjNjkjwr8UTRr7HcP6rmbTwMLKRueoNLqtTaCgysuS2S8UN6FgyeHx9naz6HfkvxH",
  "key9": "4am7jLmaRJnRUCn81CNVSTA4GGjc7XG45XJXLVi7xA8R15KtnrtsWikxBtbKgXA4U8zaGnWfeUL7TSQM8F38Xexw",
  "key10": "BL3mMtiGszf6uhjPvauUsrJHxwfpegqVhVFZWksUWKj7bMfa5PDEHHgjqUAz9EZSPyvYyYMxRDHiv9Kx8fimuq3",
  "key11": "3pWp1ezNYCLgs55TNGCURjwD3vpgFNCpWguu9czTBwnfJ2v4gz45GwEwzF6DqubtuX4PjsnKdNA5kymawfgvJBae",
  "key12": "3jNvMYVYDr75na4RiYQ7SbrFmZGCoK8d9oyC4Vo9jePrkEQhCKosPmozcn6z8oTqjmUTjXMKo4Jb1vBuDBnmV7nc",
  "key13": "2zhWEpmHL3qDUNCqfJgvqfdKvdqKxpEXbLJVKzB79dML8jUJ529ZCMqRK3viEQ15tcqBNRCkbBq4H4Q8svdCPpdh",
  "key14": "J5EUGZAxHTYHs5AVwQJBgsBTwE2pXeGXFUCpt5pLuVAq1itWNb9Y7eRbMGLeZ9U1hX6e7bzYGkqP4FnMQoaftLA",
  "key15": "3MZhgpChJb8cAGTrTUJNEufLuc7XsRjggAFLJqVw15BSQ9LoMED1GT9ktTabyiSEbGQJkEC29rDHvF7c1fYtXMJH",
  "key16": "3GSWoUDkKzPA7swSpaKzNxy2r6xyKBVcRE8ifRtcVmERVUVWdfGxS93pgie6btNUMRqtTuuQhZ5U1AK6XTfgaP6m",
  "key17": "3L3psjVxoQvFXDbzzU6MuyLgVWrBSQbnkDX933GQEMpJNGd1wyJnkKNGBZjyvPw2HntYQYzMR5BCHK7szTdcmgp8",
  "key18": "5cpFEBo7XYY1fvVEC1NUVJWCRQ8GptRANkxZv9tGQJDcnusxtymWgn2HGtgmoqBZSA8AQ9HcXJJBmV9sxDy7CkjE",
  "key19": "3YUZUpFHnJsvTno7nZ1rTCEWCcFRP2uajfSo64FxVKr2GuV7yR3sTiSYzLVcpP3z195gFxWeNQZMavNhxEvdBECH",
  "key20": "Ltxvgkx4T87QDL5EKeDqong5Z9kLja6EmqzuLMtwTJG6KgzsDL15NZtqbtghXqxdJQngqpvdM3L5PpWPgTfxVeq",
  "key21": "2pnW6Bg3xLY3gTtkR9BfwRgq1vAY3mE2iyuEA4qLG4UGoKmeB9zsW8a2XH93G8FsrvPd2xR2WGDgvvpjkyAArV1J",
  "key22": "38qWAuon5j93TwAvCHgb1GX1TT4HzpA5iPLxh5RAEJCau9E9UB6cX3uH4ayNKfJBr7Aoe4Yd9dr58E4PAMJhBeMe",
  "key23": "2Yv8iAGizREecAnD7oXMXkPqpEDKnEaMmqhSLfSTGMGugtKcSZvXRAav9xXs44vY2zX7nNZxPQKA5HuJZx1BgQHE",
  "key24": "UtZ5z8Ua3xMYpVGZeHEdhU9YmbX4ekFyuHvcNPdwZazcm4F8DkgLLiLAFMD6FnqNWfmzkPFLYD2m29u5KzbVdv4",
  "key25": "Cu76618UQDxGncwk2E5xFgSBnw81tR4wPxFqnDxoT6PbBAbYFTEw59MQLW3z62bZTLSekv7Cw8MvDj9tPxR1yjH",
  "key26": "2xfNpbCAkoA3td641smjNczbLCSFbCuefz2DYjwboM9abmCKYNTtBETncY1izG7FAU3Sh4TEYDDKzx5yQiT46rGi",
  "key27": "NzJkPu2hdmHTy5fJtThc6yGLHiqMAzG9sev6pPNDmnGxNJobtofa15BfwbqSgdXSs8SK2G5r2ePg6dym9urFkSU",
  "key28": "43qzTj2jLoXHdZtHVVrxscxLY7pqxKWqMFbsEg8H7nw4iUAu2k7U7zA7ENqUgtDjpvrRWztPhrxkZGpDcx9uwiSf",
  "key29": "1KPRSyrJ1XUtn61yfz9ryhs86VsEFwM5mWXbfFFmxLe9YYAvwge1U49q65UReW4uUBeHb6rfK4smsihcN9DPcYf",
  "key30": "4LYT166a2pb9G4Vm9fXvdqPie8fJeGdNaNUEaPNWTCTCsDjApNxYK9gT5DnDWhJysAzfXS7HF3HaDmWUg6KeUyiJ",
  "key31": "55vzMK6KCDDP89zmu1d2hqx6sg4SMq2iAm6kvr23PScXwDfnKnhgCbf3aCwyFQrhkiHbPvNnQ9aABgpU4LgCf5MV",
  "key32": "3Wy2Ankm2fnepqsD4us8zYma2f7MqobLcCb2sr8k2op2MPWho45Ds2xmuc4L5duT95wAcwM9CWPS7BT4wvvMByif",
  "key33": "27wq6ek172G6nMqDn6iF3BHffUzwpz25L4bQcteck8FLfKWYxuiU6TUehfbLo9eq8eT51k59fLWcJKzf4q6k6MRW",
  "key34": "39wKyd58bRzfiQkqD4fqBWDUVMK2LKFmqeKYR7dEbkUiNByPK3bEHkA4fPqDub1zthN7ZAxbrapX8PDi4jgLm9kh",
  "key35": "5UmjuPXMNLtrxmJdgSLJiwCTsRbe3dWEZvztGxbat7tDZUcEoJw24JBhBnrtdjHKE1dtaggu2SokYFpfnGWRTAU2",
  "key36": "5eDotEyTuVECPZ3aLXP82ePwY1vMs37RwcEKCTZdWLt5H9a77FH2XVcas49pZjMHHUnHFSbZiXntBudCvWj5te3v",
  "key37": "4YjNMoJooJY3wh4bNAvzmVq9q4jRNtKdfjqLPPTVY4ue8vE9KjfgKDT4omhZs4JpGouAZRm8mSmZz8NQauzKGUjx",
  "key38": "2kdUTPyp16mmoYB9NVawCkKSdaLGLmzh4W3qaW1dw3V8AFzzuwVebMXC5jWkzfYqLAMeSXJND6B49b8etPA95Fh",
  "key39": "3YD6iwtC6DSDiNBfV1o1r2G5ygjCeTv5bxcTzmJFZ9yGEaqJ8dLCYkBBXDLZJzEKma6qzKJiTuZFTwWqEAF8oKYb",
  "key40": "H6GUzRyUKhrUfEmeitrRL3SdrBoJWS1JgE4GhACz45B1ftN3qWHckioUSRSiZFNGj7eVCwLVwmcedAVBztw918L",
  "key41": "66RKX1YBQZfr6RqNp16MNs9TcqwXG3DMDF3tpa7j9M4Mo73w3inarfdbTPpHSo2eT1a8Nmrdd5JWgfPJuJfvAgsJ",
  "key42": "46qTW77sBp59TxxV9H5zHTmyGyPfugicNNWSiFqf2YMTgZJR7FPhZh6fAxDVxfCcTYNTCjTWEagSdWKffVFSqhJF",
  "key43": "4tQ7Z5HgV2sTj4zdLK2cnErynaDHLBTg7TRn7aYVi5RQwFCfYnufjdWJEtE1eWMxFefWf8Y4g3ArLbDaD6vaqtsJ",
  "key44": "5ZUySDReq8vKvyns9fSL7SABiVnVUsQyDm7LkG1ujNwup3Md2nnbs2rbehQK3kspkVXcojjf6MVKDGdENLttXkg9",
  "key45": "9XkM77YVy6RSTWpkUb8Vi4Ltr4kUSA6wuxW7BgpLzForPsq6f5Y1uwzKTid8JnWsZzgG8M1pw6ArbLCrRPyQXQA",
  "key46": "5vQN8Eo22G8QoWpX8Ke9XR9j4Hd1uGkeUfAJPxJPCMsBx45VMWb9KiLpZg3zwGTMtXiBRkvp5MbLcFoLx3p1Aw3g",
  "key47": "37Fto7kq6yV3932gMQTWDueSy5JVQm5w2KnJfpRygmG5ogq1qnBde2LQ97PqQMbpVbM9RNQ2dcNoWxnUAqoBpGvB"
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
