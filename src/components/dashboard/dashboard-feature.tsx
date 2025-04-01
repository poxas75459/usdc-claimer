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
    "5A5RPW2p9aMtJHvVCb1bduLp6xcvoNkZZBijBMmtyCUGpgWE1Zg3ZMzMQgTHg8VR9r3Vk6zJXgaXejBvUctER5tL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2se4H9FiMp5cqeS714b2PL5difCRFFwCusTrPagwsapggP19FEc35LDkkj8Md34RafjaScoU3z3yGAjiPhXX58fM",
  "key1": "4GjpcDz7KzodUq7U3hDZ3XdKSJBkqRpbLAXjbx6e3HFFr3L9PosopA24ZkTjYbJU4aH1DmQrBSErHPC3c1ZDZkCW",
  "key2": "FoW1Z3uSdzkGdgiJU5YvaQnqU5kTkWgYY4WmKfwHJhMwb9DxfBwR4FuNZKYAL45ip7gLToe2ewQRSqh5Yf2Px5K",
  "key3": "4zwC82w2DGPipmBrDqMhQSfwNzgAjNxYeEeNKuZdDhaR6TB5TxZxCe3U1soZBXCf5rxgDPbTmuzPgsAthDPuMRd5",
  "key4": "46rhNNUGAdKsqyzdTBuCjBzPnAUkufsJW1untx8JjYKMn8kTCADBbDQhU2V6Y57tppb4QdssQU5cTDAf6PKN6gph",
  "key5": "2tvwmYmeV8E3chRXmyJYWsTm1UdPgDzincRBfTULAke3SmvQVfL9iw4mU3gkjErKj2c9fGqvMWnXsPhaTcrm9u1g",
  "key6": "3aNDSnURK7MYAhAurWk6CB88ZnqLix92nvk2AxkBBguZq4EmrVj3eSe4kAfLfiJxZFzG1G4cogytPmbx5vKjAW4a",
  "key7": "4d6Brn7gRmyCcfuLhWxQ3putw8YKQgeZPWLhJFkgygqDmyyBGdmHzL3UtnjvRq1WoowX1qBJekrMxA9u2yVeCzh4",
  "key8": "4PmPAnavB6ePMahUhcYGTHUxHPQZ9dLfTfR4s5oWTspogszwF3A8NSqxHewEHMs3TkFMXCuE5hiNjt3zMf6AbeFQ",
  "key9": "4jKYv1TePoDjPJ2o7MoGdDxU6xNW5w6aWyeEJGL3hGvLvqXNbABYM3WJkRHtLquQDUQ2AJGrcqv7BvNg1mFUMJTV",
  "key10": "2TtGWnwcSwnx8HS8Zofmsykqz32AtipRKSa7MuVUsMX7VGpv1igmYCNU4KpM6TvJPPmutPvasQxyKGCUBKpJh9Ne",
  "key11": "48i1acbMQcPwxo91rWCcaccrSruQE7WP4gm3UAXKnRrRg3Kyr4Goi3EW6nSPptkJt8CJbo4EnzVYxhybRu9e3YYX",
  "key12": "2d2Cs9K4nU1cYw4AdAX4JbvsQMEAw9SWoJteFWnggSsuvr22ezqTALUd3oVkvFq5wb9BNmgM3EXhaAqgtCoC3bdV",
  "key13": "3DsbNf7se2tnAK8rD7FrNyDdFnAxXvrskgc3GxumUHjEwU349WQ2P8PwpoWFNM8cMKL9gePjwpUZgbQyF91zf7By",
  "key14": "2eyZJFrH3AVNLLvcAnFH1QkLUrtCgAauCp5D1CGGeT4N74fTW3FvGB7eJPAt9CdSoq3jTTYk11gnxQFAUCRfqYcB",
  "key15": "NAEiDN4MKYxWFLJTsBjVG22hyms3z6BYduaNAqLvtzcB6JfUFxpzEEaJgQfcnK32pa8f6bX41Bk8npwirK62yH5",
  "key16": "3hVETew7KbvBzyYBac6anxFFbQTdf4tfAnS3HRbZmbm5fRtGD8uu2evmdaLRBSRrJxcHvxi5JcaTJcJAsfTPsvCM",
  "key17": "57yTPiwTBYU6yhM7N3ZKN6YbdvAtBVNkHTwhkF2C792MRK4UnM9Mi9jfUXNRG7ayJgRbRZ2f6UuRPp14aWEE7aSR",
  "key18": "gDDVwuFixsZAhaWE2SPR5ee54FixhDZmsMdmwaTYzfnuyjowUpZFu6KxMvSSy4Fg5RyC8yVcN1JniLQg6C9iGhn",
  "key19": "49acn49DGCej99xzBDqrtQRXJcJBW5ExjH1pkWqa6dUJ2nY6dsh4t1BWJ7pYSS8uvsVP1m1D7Dx1jeDdrPHaNkTk",
  "key20": "5Fs4upWACfrzUKdW1DFb2SiRZmczcQfzyHaWBY3U7WqaVL4sKRCRk8o1Lw2gTNQC7Z8pcNRBRB9Q3bAbZERpT91A",
  "key21": "49wuzDCDUP4FhyS68mAnPDLGtrpL2TA7ymwsg4Me6Y57MyeM8Aj5b7N5QQeqwBUkxdxvZfEfqqr4L54TP1LgJqRR",
  "key22": "4sC4FdUiCT3ZRKZvpu5CUKP2Fn1PQSodu2jSbmbfwK26A5t2rByGM79UZyyzKStgKRoDStk4WVz15J4PHp8F9HfT",
  "key23": "3LMkegxbdzznL4uGHJneWop5W9mvaY6oWmRU8tYfomsHpa7ir2NJPPmvFPTsi8rBwYJ1fnzMJg87iaLfEpmz2vDY",
  "key24": "3632XPABQvZMagXXCLq3xdwUHqcD3sJRVH9aUGxB6p5ECEsBidbAhZRMHzgvUGV4YhZiM3aUk2F5Lr4AEj1pbXKt",
  "key25": "T2BBBoKAotPr1NrfdJogtkxcVNho6tpuAZNtTjBiqECyr2jxP58NQpfCnGdmGC8oFdciyv2YTGY9YuwDPdzRo9Y",
  "key26": "2oD7mVT8k8CRCtc5nhCLjxmic4fG9Nuybj5NMoarQRc6B5taoD7232NFZpT7xaNYqY1XmTFYGFAnzM1J8zaXQNSj",
  "key27": "3xPtScRgtj56u4UFw9e86thVaC787guxsW6jSTv9BDL2sXncjQbZFfQwjYnRphPSqD89NTvvascifKri62tsNCb7",
  "key28": "3eg3kqBuTZoYMJvsR8UBEL8AhoCFMaRV57ouhmHjdxrFkr9Bk9nXtxELyTYTYd5xtxcc4jfxkcVrnp1um1EcmRUD",
  "key29": "5SuN5nQGTVcbvs2e8SB6n2er2WQLzXKGpkMDYFVubyZae1efuEoqu3RFFkxsGLCh45fRduocar6iiogANcefxeZQ",
  "key30": "2GdKcu4AVFmoz9eyCmYmr21AjfstktSo4HawQC7ztagJyRW196Gt6g9fsWkrPZSAR2pgif9DR14GkPghykHtS7tk",
  "key31": "4EbNNzrDo7ATuGjuGkaHiNpriukvja3jhzXBaNM71ms4KYCP8U3BEYDVzqCb3W2gBLHeJ7KSjsPKjZnfgb2D8wAv",
  "key32": "dkr38ut4JqoNsxhADtmfffhYWyaoukzNSR2jT8NhujKNFVk3RatzvinUtcs75HMgktdRUYDQY94T3nLLNzEoG38",
  "key33": "3HiqXKNwoERiHwXd66BUYzirqn9uhpxHudySz9PSgH5KsBCJC8Bx9w1yJGeWTELBs2Rby1HZ18p4nfiZEXaHEQWH",
  "key34": "3zMQWrFzJ48JEEDA7jofyhMv92gpjS3cwRJJixb5b1uvRF552hzwv56HH5UGwicMwDbkShtmBXegfWWReJbQB9S",
  "key35": "2wWnKocrzVuWffqtLwHyAAu6rvzmnFQYqx65Sb2D4iJCHSfGww8Z8DkLx4QpTHEckQTA2cgvVvusGDsd7XPoxC3Q",
  "key36": "4AhwbWSxNq45Lq3RtFE2LvCUuY1hoF8vbx2gGMh8myA9wvadnd6oPVXd4M2ZspYsLX39ZU52MjV9SYNpdHqwzFhu",
  "key37": "5V27WtrMwreWAg8Kj4hVrZsrqqfDTDR3rMvJmCq8vHmuduqj4fkfSXEK9fhTaeo76sFo6xjrWaXGFBuDizzQ9nWK",
  "key38": "3PqvTjfp1sTxuaci22q4Mk47d8xszEVFxkDTx7iyekaMhp7Dva9GjPsB48sZbu4ti3d9bWxhHrtzfBoxe44y3To3",
  "key39": "2WL9fQDFSCnvG7fHPDyCvJUnPMb4ZH56NRptU8BzzunkuruUfWW3mJX8QamGh1YHyKeb5Qmbf9VBtQZWXrPGkyY6"
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
