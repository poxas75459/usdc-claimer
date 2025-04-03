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
    "2veSy46b9dvTMjsMhiGULpLeAvmgcRDTxx649jWpQFLQCwPjEvsEZ2vgEFXcv6EDMazbVHGHFokW2MoaDcM3phh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RqkkU64fAccgkeizzDFSLubVnRJvP7MBidwY3AAA7K4oaEffiFboTawKLx56uiJsrfZ9keCQHVgWFMgs1j1JyJY",
  "key1": "4SSdNvjXMVhFuawSdRRV21mDSTWLvEaKvYkworFhKAoocAp97GybiRC5cpdSgG7UWiUndqsVzRFiuU8uZ24amvtX",
  "key2": "2QKmYa5hrVvSfhJQ6MwY1DryhQ5ixNRUVnEnV3tQBNpFUipadfTzEtZkYWoFSmJG7bb9nsbBps2hk1HKFCtMMJ1i",
  "key3": "3BnFom9vhemCpKbGeRNFSAUyXhKJM2BbG98npcRuQWHiWd8bkaoFUwVXcV6RRQgkPmSEvdfZFjEg5Bsn6Q8YusTu",
  "key4": "54ZeNtVBwvUmB31ifzG2Cqfhh5menqxFioHeFf6FG72M4mdUJfiUKU2ZAGSqF61JkCBovAMoUxSjzP7tS9DiGnUy",
  "key5": "5ogLBjAsetHY2G1V6coGCxaRZxTVm89fnxkpbh396E2Xh5LcNM38beBtVDfsNHLzmJp6qZ8mDHAGerMtbFDXzePz",
  "key6": "5AEQxgauYvVTd76QyQk3NvNbFeY5LUgRNKokC717pjUt2nWBiNy5rKftBaXtcm1fUWRor57iww4BxSyrEtNPEcEx",
  "key7": "kLkCmpdZNEoqts8NFtwAPikqFgaUDygo5Roycy7rQ3QRKpnCXZ3o4G2xSMvjUqKzkEeU7DoAWgb3UL6fBKhLHHX",
  "key8": "4wLFxBbucBzTX8eczj5nLVDiwgH9ZnzHaspL4KS9QsW6P8qBV31UKzf6WegAjQ2CsFMAxc6vNZFzXHo5HQ6kMv7B",
  "key9": "2KDeCDQYeq3bnLc3iuXozaHP9Q3JbvRViEmfr4g8v6H7Hh7mkU3N5DxDxq4WWQRCrF2u3a7zVT2VeDzfwpxLMRA2",
  "key10": "4tjt2YHXjTVogcN29V61MVaD4KapWodtbKAhjjsNBcJk5CqAX9EVsadxDkzoG7Cm1CLKmS3nghK4RVKW4hVBKgHw",
  "key11": "5Loec3D6g1prFmWU6gUBtzPiVidis7TrPA2fdEom3pcgEvNX3mtDkkjCguoLgdCgger7eaWWH12VKakFz7JYRbcv",
  "key12": "4jtKktmH9NuiLotX1MV4x3VzmqfyFTk8ZrXCgD3KhVpkQb1zVoZE23LEEWzGNWWZpfvadbdSxCLZeg2EeK886xGm",
  "key13": "25uhtoFd3B4fy8XqSKxkRwbukCW3JLqXck5zBZP4zisFPbpqjb1PMkuh9yLU6E35kfgCMGkFmsk9kbCwquKbGrZ7",
  "key14": "2aKe7RgixX7nSUx6G22dia4NHc6RzxN5GNdRBmHASGNbAZ3vBTDGEBQMmDacUM3YhXeXUD5bA63nWMbVSAR5VMzs",
  "key15": "4H18WcnJGCe5CnbUzhPT1meCyGwsaqhXjytBaViUAJLuzAf5d4PpctNZFx65YL6SxQwBFwZrCmfdR9dnmhN6r4Ls",
  "key16": "4byGobD27FtkVNrgBkPPVqjU2fsJz5QQqsNswcyW8L5tj4BZeNEcxh9TSfhxjXB3ywWENcNwDLqibcDgX9uRkDjC",
  "key17": "f2w1XKkFpQu5qk14nuhfGDRVT7F3AtNKXEDbRNYEyNpZnWQzSrSFdopHD2w6b5jsDT3FysevcFtKJMe91BcumGy",
  "key18": "57S3dQ9oWqjrQLBxHBg4KjvRLYHgtBQ2es7CtQ6GbbFF1PgrApUC8FmUZB9qTqzXaDng9AqKTrmQ62pddHKy53v7",
  "key19": "5Ht77yQuqG5zq3DfUgiYuDBuo36haxyBdFNTZybYaRUm3drqiH8VwnBGa9ezF8ajkHwqg6HYV8oYpgpVNvwYVdoq",
  "key20": "H9jj358kmxCfUZohSGfhM6B18TfuuWBELMroetZg3YvSDMrwa3Mri6eN7wB4gENz1PrEgifzVf3k6bziox8Le8f",
  "key21": "3syHfTt5CaK3jZtDBBFHHhuGoG1HR9s2cL7tijekiVsoeXJTjQaC8nhwCTGJBC5MVofmmJokTWypAmUF5Zy7VvDD",
  "key22": "5jZe4nGuTZ2eLkwTGSHYShm2cXcMMCLfgdakQe6PSXksm3vracUGvtihmqafsAUdK3PsG5j8VPZx6TEVDjGx3Cgv",
  "key23": "25cTofKqeae5ZCXa9JKXB8FHon5gaArqA7WPRWgWhSjvuout1gMoqQEGBHHaByEuHQwn4Vvt7pAdwGfCQorLY1nM",
  "key24": "3GKEfzPUU6vthi27M41JaK7rexvtGvzKwL4XwJKZz1hFcKhM7za9wAmYBtg9CX26pmKUE3dGiLroWUjDYdHbApQM",
  "key25": "5KMVnf3QQwc1LjQa2tHPuv92gnmDRKiPbm3296NzkeP6BqX2ydhuVHp1YWkomfTtGHDe5mCmLizKwrng1AWiV5hG",
  "key26": "26XVvC71tw56Gacdckj2j5rTueh2kvfXav5qx4XmMH7ZoTD5aynWYaBU7Xbrob1hggzZpEvYL6NrUib94PpaGAcz",
  "key27": "KmS9u3PHgsqi1ZZgb66t7xEJDb3vT5qUeube6wNqSj5n9x5VUzEiDA4V9RQN39ww57amZ3pkUUzjiCXtiUzkqFq",
  "key28": "5Y8aeMKKXcr5raybFLxVfDSZ3sGxvG5xm4tdpmLJhvFNBpGLiTBYc31pinmHMNKMDKNeemKuQJquvtESsMKgGKeA",
  "key29": "48yUBubqobUFVbLfGT6VmBFShvZTgQ3hJpHnJC8rVtShKkuGPaLrc7zSnDkRDxFiV8dc43px9B5YVqWP6HyWkWDy",
  "key30": "kYWsDwVwujunRkyFuiddbRpYh73sRp3js67LiKPLR8aXANedNXbVGpoUW9ZByzhf8wYRsZ2vy2Uszs3ZHvjkbQX",
  "key31": "ry3oBqBMduisuTDc7CCebZpNKdwivTHDQfLNXC6FPcMDbFCMLmeyiBJFKwxekBADateiWBtbSkBzw1Y8MqUumdj",
  "key32": "w1gr8wToqrDbztwB45qqZLm1pTsj3CgkqG527w3zYV2XH57ZrDKJeGRTNWJRZ6Zw2ZVT5RT5SrQc3vVqn3pXsKo",
  "key33": "ikGjDXd3jFbU6TMTSZQ6wv8vuwBsidueQ4EbWSahxszqNbKkASKK3pgjunAZc1GmH2zoX87Gqy4FrnuYZKq9cDv",
  "key34": "55ABLKd8wz9rqxXv44dq8L9z4hNN96UFwxPX6fiAzJZVLCe8xm9eWxWfbfcKF4kKPXfskJR8yCRW1drjB7keFENo",
  "key35": "2r4XCtsAnPyNqCuLsWFhejsax1S4d7SL7eEDCpJuTej8c3SAmCpRBvkbaYb3idjfty2X4zfWiVLVmbFfqimk8U7t",
  "key36": "4DSByUa7h2svw6bXLq1Ai2sopctMeZJPMh6xXH9o7R4DVHjJfykqE4yH1kgSp16uKeETgqSzZ54DfxDEGmsdd4bF",
  "key37": "4tM5Q2cFTVXUq8gnyx5h7soHXWUPqNqEHHss7JFss643ThvPC1SC7Uvax3M4K7mA23GujFG6ww2JFrTXF4zYDy3N",
  "key38": "Eru7Rb1tLR1DxqvAx2foiiDPbKnin4xbW7GvGUDVmGZTWb8M2fzDYUA6PGunrFDvJzGp2PHBBaYRw1Bg3eLkG2U"
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
