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
    "48jFHZud2n5pLuqxBEKD7wA9ENiVRiWjQD3AmnVA33Lo9ymdJduYweV2Xpvpy8U9Qhi2DapGAiK15cJ8Horz9QUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhqjRD1krcyqGLGc8GepLiGYFGzXfoMu1hKf28Nk4eqeMgNegSc2hEuZhLxDVbKPRZama8mCo1U5B1tEwuPFuEF",
  "key1": "2NCWwqVHJw4tBfme9jih2uy4zM91cRFqH2ZUDndnSAQPY3cDbZwN8Ed6RTjvKKyxExdU7UhJnJcLaKFP2M2jru34",
  "key2": "2ocRSHgDARSz9YZ8UgimNHeYzzJM2utbbaixMR6iiwthkmgn2df4DGc9WzZjnMCEC6gajiKswmbjy9TDf4uYVhuh",
  "key3": "45jhDGwCENJJYTQwCh4nRh6Ha4XnGko4z2oKN8mdXVZG1HURm3deYjSfKashAc7tzLEvVTFVskvHKxxYbYFJmgHG",
  "key4": "5SxjHEMWDfgTCxHv8jecbMMDbd31Dkb9V56W6nCAHhwXPCjNWE2cVNtcM1E3bg8Su4hbm4sp3Rn1Cg1kYpv2fmJQ",
  "key5": "c1ghcoBaXF4gLXU1FUq1KpXaJGPYpP7Ctb4D2Yov4Th9q1tsjbMiAf53WGvnzwGaD5g2CsEchV2sCrJC9T2sV3d",
  "key6": "YaAw59FjaYfzexzLeuv9X8P1hEog4xHp16Euuk3aZQS2Nq5rwGs3NtLJenwvRBjURoNeptYH2a3dyKLJKZSFGxa",
  "key7": "SEjRtdmKQr5rF2Rx1Bdu3XNe6XU5tB3teheAUBGyUjj4cgtbjkdXE5aG6NDb9DW9JRvS9uafrMg5YVDYeZ7omG9",
  "key8": "3DaGjHa82MMUGFAWLfQvwCH3wVzks9466rZjQ9wThYugJMurStnqATMdXKrszBgGQUyUCV51arTS5GyPTQnKEUXo",
  "key9": "8ujJdYLotvAerF7KgTMWSawpH6MHn19zyYn3Rfdtv51F1t7HqQ3JRmjHyMFQLLL1eWThWon6RFX16DrxCSjQm6P",
  "key10": "4gDL1FesXueWiepPxasAs3z2t1LpbziQZAg6jPzz42TM5DJ6Cwi1q7Ra4RqjLm3z7owFxvgknScN6WPkY1UFnG32",
  "key11": "2ZKAuwxwMJoYXK3RUbX1S3x2pnLy1oy6soVDLLSj1KophNDMjWv6bWt5ypxAmDuCSGeSaB3DLXYYoT11uWV3FQCi",
  "key12": "jaskAfCfddL4RBABqcBaCsKvpvTRqZGvUct89HCz9ckj8ddpk2qpQwMTEaMxBb8rcweD7byDMoJZgYzcAJoSkgi",
  "key13": "rvKhV56apRLsWqxDQo7VWfE9tdvANMypJY2c535AXfgjrGMcnbP7QVC5C41y4Vq7AbDvvoYWFAj1rpFikpwU2Hi",
  "key14": "5knyiQvD6yfPpbe1AhSrtNCK76CTP6pY3K9cv3JESwjBoERnKitwqTWSecvQBN5n16oz4AoRKiXJe5ypgbgUHhXy",
  "key15": "5nzUvYZjXfSCBCHVzrwPGkeqwprXpxCuzatAVJ775tZKjHHUWvzRq76mbyHf3Aqay2xoio5tk2VtL7gAX7pKLdgw",
  "key16": "4oRxsbAy8C9hAAWfuEMHyGX1QRSvn3NsQMJugkehCKEHkFTebMeBFNqgUZv7PvwWf2KHUCHKZFroFFqatn1fnosF",
  "key17": "bG4o9TUbVMauxUH7oayrZ2Gh5zLghaBvRiZws36rXcnhPwfXSAcN8RMxkvUtAji5AfeURhdoxYnpJGNtCEUBK2L",
  "key18": "5yG6fhiGuDmDBxSrqvafuyEivjZZNDZg4x3BoTWzhH2HbC19kfksP3JKQaLVdvbuBsEM1YvwaL8rQG1oKyuKUoXE",
  "key19": "4FJkKqYp25YMWTp6pCQBX3yk91mYQzLHG9bPU6b8oWvLiU392euRx4TeJ2rGbmrF1wovfGLcK3bgDnFS8JwfCnET",
  "key20": "4Q2uXWrqZGPUakTEuqqk96VewzSndH4kHqsuTX766CTQaQwf5jhiyGMec6AynjxVmA8SiNhcirKHJF19x8UdgV3C",
  "key21": "3Xo3sUmko7YHnkQk7NhKVT2b2syPPFHPis5dLWXS5MA1PQCBXtt7TqGxfbFagDabhUd2gBzsHDNDJBEKgEH5eeNe",
  "key22": "MQroRmyTVN32WChr5F1FdwdtLhjCFTf3dwZ3ENpERPnszcWr8FD5h5yZyevuQNqmo6ef3FCW153itp67PFs6bHP",
  "key23": "3i1g1MdF8r64bTiLwdm8Wrk9PBDQsgZ4hT8YccoLkaicduxV8JQsEqvcn53Ai2oLW1UvxwgaToGeEvEKJLYMq2Mp",
  "key24": "4MDa1S7ururcc4KrPigsweKL1kuCgJvAzZatYRCvhzetJaiqCEzHwE63xfUtmL4UueY2uWqCbNZGcDd47GXAYemH",
  "key25": "5fD7NXGJ1XaPK54U4pZZVt2okcdtcSa2rLgEUP72KWF72qjU27pEu9uho1mXToipdBVVgpwpQoaLCHFARRNjYB8o",
  "key26": "4CWUVuGoffdtKGe7s5KVust7WntvYHY8XGey5uTMKvsGicGZ1rt2ap8PtdNAWRPYPGPupNRZABngXCRgEHzto2CT",
  "key27": "zCURF4nMuKjmgpQZDeARUvUmspHG4uK64VNsmV6nQy9uct1run7GSvRy9qa7yJANaNfsR9cNPQonojKtuptV56h",
  "key28": "51fq95xT9CQEp7doh6SB7nzw3wqZb1KBrSGniBdB7pmu2yrBBdyBoCPAo8Lk4qek8SczndNCZZhB88toTp6iboQZ",
  "key29": "tMQF57NfpNArqmqbZvm6kiJkvQ16V9XLSK39Zx7k771k2FSc6nkkPprfBGpJYLKJnBhvVLF3evi8Rm3PvgM2brs",
  "key30": "2faMm3n8gR2HfxXUqgVhKgphHUVcVbfb7TYV9YQuFjuvEagJfoUeTTTX2KYGNCxSXo9Wv1mPQzDzk3sqFp7roU9L",
  "key31": "4MuQrX9J5HQFhVvNvt5rgMDMavy2cPoLmdea3rADqe7kp1s2VFxhKZenDG13TJ1f1YhRq2qksr9mS9qxJoBujiBj",
  "key32": "5VERPKV3gGTbC2E9NfHZ8cwUccGcxmFBhQ91bb2e8cGNdK3vqyBUcgZEmmcfx5jdabhaRbQEsLKQmQShJEj6QARw",
  "key33": "27TkVRoADTgiQb6xCtpRwmizP8d8cCmJYBw9DTB7jzxvBuN7ezSdiWBszLbCQqhUPYY4DSQDo5DZDMZRGxZo3AR1"
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
