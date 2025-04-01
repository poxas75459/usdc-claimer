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
    "3XLQnP8kpReUKwbndLpuncUYHZaCqZJ4mQDVjk2YRbkw6SvH93bHPqxvUeFXaenJmo4r2L8RvUCBU1zfebeTpZjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9fv6yvz3aYWcUFF7XjcS3UB3cNEpRtrefH5wjoyJ1i92DSdcuK3fN6fsAigWb3S5UC6q2kFmbsxzCrhqjNCvtSa",
  "key1": "3u9n8dNesJmMXC4afcRnUXYTGTJuRQxAcRSzksshpWSgCu4DkG3wvfXwmXP1uk4t7dQDf3P335fjEv4ruFXtPqgp",
  "key2": "3Qx54qmcoponrgyApDiRfZMN7FimQVxgmsWSjA3Us7CFTYpYRgcuWUha45AmoHJqvN3siSDVa1b194Ksuo9h4V2N",
  "key3": "56G8rRh3Yoa1A7oq2vLNTsm59sfk8zmvtRmrC1KuTrvwFgKajhRpodP6ic6u1M3fPR5ERFgnJLt6QWzSvvtZiEbm",
  "key4": "3W5eKpVUjXCjyNZwym9p9dtcybeWPSyTxesXSqm5krJhrKoA88jJEhAVtiM1h8i3712e1qnX3C7GRZ2xEBnf3uzN",
  "key5": "2fLRd4jf1Wf3V5He8xEZ2Syp1fzb467RL53RPRdNwLFu8ERhfppdk8GD9foB3HVqhnC4zyyTUxpRAcTHCAEvHRLZ",
  "key6": "593h8F2N43YUgKjbKpG7batZV8W2DwWjnT7KGL1zZ9V3vBzLzxtUx5xuSdisHGGmFpMkQM7x4FLXqrjHYT9qbHRL",
  "key7": "2MPjUZV7G7wXXp6DRRbrHw2ADKspRbn2JrW8RpPm7CHAKpocJQqo2xtLXn6Joon7c1NFGeTZo7gKXzu66ZcQ3KZE",
  "key8": "2hpgAXN7aVKi7qkkF4P533iNEs8K8uiScYpWTifcZaQpQaikvoNTA9xbHoLkkpmuUKKif14BiSuQt8a8XUPtcD3e",
  "key9": "2h1FLpUMnihMsgRS7EyuVUyBbG4uBG8B2XC1pzm58b1Hev85wyLWRFQZwGAcW9mxvsd13a1ELXPiuFBXBrRSpDCt",
  "key10": "62aG5BPNThRtEjfUWnV5BBGmMbtKzXZqt6nES975X97N7VRGiYYVqcn7MH6aFFjdQee86QdQmW9DENJZvUa6gQru",
  "key11": "4z4GACQSMFs5wQUtPYCyAcntGugpRQSgfJtdxiSxTSNtmmQbofeQqtd8pQ4Xn2JA6cz4cYxNYbyhDmP16LGDfyLj",
  "key12": "2NpGWd3B3m2AG7xCXrYwHHFJno2uRvgQcwmNA9dMt2fcqoD4SwRRaHyeLp8LaJ5hbw2S438xoXTpTAme2bW9w7HX",
  "key13": "5N2L6tGDCzWjMdbjJx2XkuMVHQsGSrQJwCrSAW7Z7MeeKm38amZKNNqB7VAbUpsjNwbMG2hDmjEy6ZDFS5KQZwBQ",
  "key14": "pEh6U3xsrW1XHP6vHchL8QFdFoduqE69Cg919EaXyW3fuqbtbT2de2YWLnG2HYJYGsFJGdekENsGMFmgvgbPgUy",
  "key15": "HXgkkQCC8BEyVZ6kJMfrsJhDbQrM9LySMkJHGw3i8ENQs7nwuJJbWB4EMUa5TzZnzNaoCHHPMKNpuNRBbtaQthi",
  "key16": "duMfMEfdCnnPHny1mdvwnd3T6pByi39WucJqzSyRWgYrmkchABn6Yc3dUjCy9v7p7tdRy5vrQBtNxZMkPhNrUzH",
  "key17": "5Cri7zCnpyqa7GMspwZ3cMhSgurXYRghWXFQf6YN28AcVzEbSDVZfghcVd5WhVcdFayqh8LvroERosSuixt5SyXy",
  "key18": "67YU74DNkxdyN6UnHBvar4daq1Sdcm8gmGjgNXSWQRCVoHYT5FKiNWCQKeLw4CHAQpXevkW1YC1cKkc8y4x1Wfwc",
  "key19": "e4Cq9usbsTCo168QARsdFuYAo8AH7CbBs3SpJvaBYLntG5MoV2azXgWQfp14Ciwdmfrh3ZegjpYiTrypo6fA84t",
  "key20": "72LQ57TQK9oebLKJGavoccTDZPbjYAXCBxBgoi2QcRwUoQ78uwnbqCm2RKSJP58wimgVAxLSqKi2WGBCM5Kwuhw",
  "key21": "5zf8K13pc29oVg9utVRiJa1Unj5cj4DCvHLBXH2EUBHN9qnTTt8kWJEXype1cpKBrjYJ7Zqe8MHcLkJQzXH8Qdx3",
  "key22": "3JhwNe4pt5fs6p51vF4Wev33dm5Tewu4UtikXWzGuZ5T1VpZT3KwPnXGgZ5Ny1fepGRQqeonmAWFoN28xdYaeYnq",
  "key23": "Ts3TEx7xN4i6maq4PvsMtvaS1Z3zi5Cftju4UKMgT4e6b76mrYoNg8PLYbwym6v4gKUHtNk3YRGgg2nJptNrtoL",
  "key24": "5nPGcvkLM9dsuf1o2XZYvE6NKbD49ZmJmE5bsQkPZ3XMcZqf3yHxtEQg1oLhC5KuS1d4gDxkmuk2cCy65P2rCyxh",
  "key25": "3xkpoM3JpegCLebQLbhVhk4T7GDnvH6GD7wkwUgfmNhd8UwK5kAHUu6tQVDeQYTM1vkTYcqnfRyeCwgAQrxFbQFQ",
  "key26": "ZfLPnGmo8MPJsJpWBdfEWd8tvnPPW5LgdRgpEJFKwxYHCK8uiqaQPAJMkYtraWim51FHi96f8nmLoYKyJm9T5MF",
  "key27": "4CCCu6Ya5qLrg9e7moZfwk4eYX9gxijbu7s4yzKkAYZzxSWBTK7DR7FpMS5x2UZ5KR7kHctfU9KoGdTh2aX29ET2",
  "key28": "3Mt5Wk1p3auUJgSM5Arz51TnfXFck9ULr3mQ8a8rTvBaqwQXWYZSjwqm6sbRLfnGuPirt4NQkeQj6WL27pWVRmst",
  "key29": "725kTYB4yR5eVUzqfmWfJEBtLAnHqfw8iDyP4jHUHQLZrawDLacjENhtvQfrK843e1YXdu5yRuKcPrggENHAsh9",
  "key30": "2geExVxo8wnqmHGyg2w4xbkh33ZgMUEDFmwk6RsWmGB7RWMmVeaSbvjTvaQM3x28NVtFcmcawX1vuigfF1TePrYB",
  "key31": "3ikbCKNAFinmh1UQXsWfLCr1QKhpfxq7Rd8ooQcMsqRPaTpqPqZhpxnVaaArt5EGf2x3jhCFULWzeDrJob74MyMf",
  "key32": "4a95cyTR2N4DpoFCKC3aJ5ZM8d1eMyoZxgH6rCRGeknrc1S42jkWq6tq16ZU7dCXrwPdoUU5p6dsC96oCqEw8kMZ",
  "key33": "5qVcWJaXNtKeRj3YiiPrykAdLAmrgSiAu4qJ4uSAUfyEQxVpHYTiJQ1bGjZmzj2rTCAkmsR1G9FQ51nBU2sJWWpo",
  "key34": "XryvJZ2o4fsCuSdqgWsZDpeKa7nFtEec4qCMJQfuveGQqGAMEDetm5SDWeyKYJVgTq42n4mFErJJWnGNM1rKTZy",
  "key35": "2ALpe4gbU7gM53h6uAgLYvZcFrJgNe4MbqAK3khvKBqQmhExtgQJcmV2qMp2LUDZ1GDQ2q2gD1cabgf2NKnFsGHR",
  "key36": "4h856ybeZKjoQKkduhmUdwKt492Udgm84bus6LJZEb2XxHyPFAtgjzjPe2hDkPad6SwrUnudhqVpcowxPVPTQUwk",
  "key37": "55LkhPb8cxZfqKen2auvWZ4nxodkZiqwzk5rZpSKKVaCc2swetc47y8ch5yR6JZ3kpBe8PpiUYkUTwDqginZz7CC"
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
