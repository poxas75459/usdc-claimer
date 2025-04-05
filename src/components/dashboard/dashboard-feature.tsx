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
    "5JEzYzAV44yXTnNvBrrMpf4ifdqGnx36Xt36nETr9cAqg4eLWyqQRsS2goANnTxy31qCQ31EgFz29zVeZYob4yr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4idS7DjiHZ8FhNyKdZQsXcvAyGBkufECTEiF2vh61Kd4Rw4G2GYMhodfedm2Sj2d3p32m3XDSG2M8qbTo9mRHBBo",
  "key1": "3B3bd5isb5fToXLaAsMNSfHB44XaYD1BUe9sKVsKGykTRaNK4w8AYBr4dPBHzpTdU26cpqnURmAUafYDTRmqAR2g",
  "key2": "5QPnK32hPtg16bh64K4BXg3duyaQP3R35GXq6uNa9vd3tUhpQGwbv6g9mLXZhpNueTCHji8vQc43AQKRcqRWKUsS",
  "key3": "2Hy4u5zK3RuJmtZCE2iEfE124Un7T8sz3xMz7PTnhsUQawKnqgLU4YVg3MkyRsPYYe6xDCWnt8swcZUTkQVZH5GL",
  "key4": "2yfKhYH3GtQh73dFxLqBVabHcYBMZoZrCtGYLaLSbNMUKcFVCyMnLYPUT1cJCEjX7D2FH4uz1u1Lzj3KvGjotc9L",
  "key5": "3P1XWBZ8Nebx8Hk6sdPt8EXxfBcX7q5z1GfPPbHoKtjXpziHJobjKq8PoNtdVLpSaPeHwGr1ddkmi4svJ1fftWH",
  "key6": "2gZYpQJqweE2YDyqmYf6WRj3tFQLCtWMQ2eyf76C3MDiXRbQ5RSrLBKhJF65CAF7XLDVZE2hkA1oBgDdm5pU1Juy",
  "key7": "5MvrBC3XNhdxSpr2pFe8uxGM3V3XRL18ScPQdjcs1hd72YjxH6ErFQ62dT3CCtEzNpdvESAfjCJAwREoMyYfjVwR",
  "key8": "5r9z44V1WQYtPB1SSSo9dvU2urrLGnGRcYDG7Dr3MTHFtxsTp1Q9dY6L1McrSPVseMCk33oYwMiGjAipiNjEfK7",
  "key9": "4ttqHsjVXFngmqMKBjJL7FQGHETwLxQ9gsJ4tjL9H4sXRySpzVAMgmvEbdfBf7emD21SB7fawe7BrXJma9qt9t7o",
  "key10": "578uvQhrvh1am78FTjx1oYTbNQ2ugUTj8csoUDdYfKxkhtBuv8CWX3chuWVFmUmUhNLAKst4Uf21924hKmnyptUu",
  "key11": "2hZpoBn6arHnZu8Ls9K78a5AvoQEa53K1UszitC9uGn3aorczfNCFmYpHcDuQhtXLNTn9AX32LCaQUCvW2v9Pa6",
  "key12": "4YpuDEfZyp7vNsiWhPTipeuFKL8tEWxt7PHZ5kzR2XEdFkPViS1j1rBfNiKHPDb5vLLTD5BE2asoxw2iTkqpAdeT",
  "key13": "4GpitHTKPV83Cae8FvmqJ7HkjFpSSBAVKE4SjtDT9tFE2jmwfkXvxTvEKnzeeoTsfrJ7RHNjfr92s2mFcGuT2BZ6",
  "key14": "42HkYUTNs4JPviJCCVRXRjA5uDTZw8XhuURoqiRxfAURfjTMvgw587Dx8yKeXnFRg7fMye9hy5HjGuWa4ZUwam6B",
  "key15": "2U9FzRuCAGM2TFy1B8KKP6C3xfcrFBfs5gufTyCimrWPL3SmVDhsjojHRWhjcz7Gdc5jF2vRJsYSWZvhbKSSqkMp",
  "key16": "5RWRPAfw8T9payMCjENgdkKgTeQi9MHxLowZ86TavViA3dkys3oCypFJDvi22Brv1Ad8NtRgRt6ZbKhtr8GmcJnA",
  "key17": "ZgcQNg4eBop2w8c6ot6w9L4Pa95vBjPKFDN9az1ncq6YDcWsCHKaf5PJ9N6jB5hzog2NkRuY1jJybUaKvmx6EV6",
  "key18": "3Mb5C2rb4J6W6AfeNYdPi1xttAq5GRoRV52Lgezx7AdgugpuJbeERJj2m2ebUG5PnSP3YiznNpc2djhu7Q6Zerv4",
  "key19": "v6Nm3zbRToQRi1Q36dQsWymoEKvk6n4s8JgvhyTYSAf2APp785epKmtxwwJSptCfUJF4vn3W5q6sekWrjhCkaeK",
  "key20": "2fMdVjFCfM1osM8pXrnJ4jZgFs2nnKxFQET9Y1cGxBgnDLimXfL3LUyUCwo662HUyo7wZ4s6JNVn72hQGKUG6Ty4",
  "key21": "5AhXaD9Xz4PHUkZDNVAeyAE7qLjJVi22yk6ySMDMqDZ196cCuRbFyo5BaJLZYpPksmEdEJW6thcBtvz6GmGguA6n",
  "key22": "np61JFJ2gjRwpHtKvfk5eW28uXDfMi9bqJ9MD7d7YZgvqRmfDHa6Fsx1m8pie18jA4zQm6cxVp357TmrBg9W36A",
  "key23": "4bYdeMsbZLkni752SiSaHf9S9Sb6tGakvFJGzUGhasG9twm2TSQAgARUFGVWzcjcD9qqbMsMzBa4LkTUFWdF8998",
  "key24": "243HAL6TJeQ6WTbFJXX5a5KfKKNa3qmRTmyPv1ERh16L9wLryC8rE1G7tfZpqEGFSx6JQ687YESd63PtQx6xtSpL",
  "key25": "5LSE4w89aWEZEzQzd5i9spJzGuw88ZBzkVNjUmTfogvsT4QQqEewv5gGZsqzpANsJV9LfHqCAFCRnL9GXQvNyqns",
  "key26": "2V6niCU6zi6ea3odRBtxtKRwh6rhKXNpPD7pDFgr5nfBpp2HtgDrZmy4VstfJciYoZgKRauyuadWFPCuUJnm7mmg"
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
