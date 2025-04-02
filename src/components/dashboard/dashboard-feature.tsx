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
    "5cjvpycs6Jt6yMNk3fFRJEzqLnxLLAcVAAS2UU5LeyWhJL8Gt1HpUVodvjFZHrorAVeYX68gi3jPdX3DSqp2j6AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZgafmhCiz3GYzfi7UZhHzBC7k8egBsTmpUEz6n4myFcXjJNNAnStYRpAKxDBsC2w47nzZMMUB5FPtAgWtZvGVM2",
  "key1": "34buFoc9h7JTDWCPHj2ErEyYNwj84AWddgXKXU3Kidk9uTaSnyGjEdjnFGVCTtGkekrYLqER8N5j3SpU4sp99b3d",
  "key2": "4e3shD87wVGvLd54TEFmUDsX2xFFR2zjXwvm5H7UK5wZEpDFrK1B1tY994kfXm6zp1TC8p2DeA7FLJhd5eE2NT7Z",
  "key3": "2fUg6StLXgP9cYtZ6rWyFUWPgh2f7Ee6FEXX5paeAjX2LuULn3EdafxVVua3qQsHeCcwDMBCyxPA8RNByQgRf6PH",
  "key4": "3JkbBGXH8KVodBUFbaQ48B84sSxTbRoAWbqBanHjxFChqYQgbs74LvZQVM9uLaS7FetMiipndRDiZxAtSkbnPtDG",
  "key5": "5rp3evxU4CGmuvqjeMPxWs5wVSJUbm9cVq4hNUzHpHcHJdUJKUhg6MoVA15Rp24sJAUrEgFmWXC2M9VyLnV2jRfK",
  "key6": "4rTUxGc3qgYUJrxi6cgd3gzcXU1T4pnG2gyGJTYWgpK5FqgFsbR2HhqLnivZxxoEEHu61RVcYzchh5BbwtrsfUDR",
  "key7": "9StrKa5mgDZQRTgwe7bc6Xqpzk3A6ar2ShJ2V673svPi7nSWdbT5YTY4gbLhqou3ocHJQN6QLjTBA8VVB9VJVhF",
  "key8": "55uAcWUx5b87fNJL5dhPTBXJrJCZ6z9vA8YtRFkF7PjRf4ujjG2XTqnorULMoT7Sb97htfYN2wL1oZCBC6JKNk8L",
  "key9": "i8a35uGm3Jm8tK8gtd442DDhxnWd5DzHU9vyZCycDthHokiW754fMabhsz25wuPVGtVwBZz2ktM6LhndhRXjjrs",
  "key10": "3BHvtvHcTzDeqoykbTuHgtQgbPQLuvPMGAAtrNaxsMuT1UTferhVaMKZEv2uaJqEpLgzyMEr5SfEFK5EjEsR1z9w",
  "key11": "5VvS9SseskJRPuG3CxvxyvD3cX5LczhxXLgt5TjnpB6DcEyP3LBvy9stQYDCAWHKKEY9t1xvAQ4EGTVxHzj53wrS",
  "key12": "5rA9J8hQJPxsca6Gtoz5o3Tb9YPSR8F9AKNG7cq5DwLopv2N8CefN3kqV8jmMfAH3xCKypz22FBzCCnzUnr14BdU",
  "key13": "5WypYGZ5qUNbRuCYSBgyusXn5rYTngHLkyYZYnxVgawMkDx1Jzc3NJczfj94aQR49HLCf4pdx2Be9vSXKexUtMZp",
  "key14": "4bKEWiLHXDgwhpt96DMBFt9qgTwmKCoBWDj29GtS2p5QLKpGgJcsfjDNYHABosC4ZTVecsNALmrx2QkGM8gLbBmt",
  "key15": "2Fssp2ykgzeojoKuFTzwXScChSYXp12TNPY9s3xLcjrC3krjc8s5i2EZ65jqS8nNJSzxxcqn7JEe5xBRBZyYd3Bm",
  "key16": "3KX2PwSL5mBpkuqhu9931xTACmYQ9w3X1p8oQP6dqWfpDRyMY6zh6T9yHqjGQjBuNf6J4NbTTagTgmmS9EazDaPr",
  "key17": "3jcwCvMPDY7A1UwTJTJCoZ3DQwkXpX8zXJ49VWhbN3icSqX9qSfrYHbpgBAhFGqB5VXC9WxRnJr2dNRhVSVGYci7",
  "key18": "4AxM1mz8Ho1UmCNMkhLPYxAX2kVVhVrRHrijXVgoWbHP1DjsjpmEQ1uV2HC4uEgVDK9Qr9cQv5oeaY2kN84Xt7Mu",
  "key19": "H89GusCnFBis5vqeJZ4uUexVXm2V2NB4aSUWp3zZzmzbu4URzjncCfGTBRzaRrHfv9cKXUVyhn8numNSZE8ascE",
  "key20": "2fqbHaKcSGhbwfoUwcQPoUATZebPQqXe9khutG1ukWSBm4PXHQzrMAmt8cHZVHJuTERsFvWg6iTuquZBJbM9MAzs",
  "key21": "2CcVfjbm95E7CtAxh1S62Mc5U1ws5wDTey3TYJL2rCSm422nhKcxaRpgSLRNUTJUgdGPbG8i3K3fV7xc3tenAyze",
  "key22": "3K5zYLn87aeTDUGaUFZwFcWhFGAa7XQHfZvzpDm7MiLsaPb6Csd6fZqnykGCtzM8e6VUJvGENSRgmMorS9qeXS5T",
  "key23": "3DBFxm33983nt43x5ESGsywGt55QD6Dg7GztsppzLTAveDbBgs9cmeJL3q2QtBSXqSJVum2oEy7yt9MiYeXeq7gf",
  "key24": "sw8Lr5W8sm2ATAmAQD8kBvZBUzDSse6TtLFAdpmqvDvt6YZhxLSXpPBaNoV3QgUEecpZeRjYg4nH4KpH2YLyf6V",
  "key25": "5kyJq1mDdjDt7629ygZvFVjonUwDyRngJrCnYHWoUMNx1z7fSzcDSu5oggZSmcwYcPjnvgEJ6LUwrveK1WuQhzbT",
  "key26": "2UuTrCxehVQNyhfXJYXK9a7NrT26ksSPwsmESoU3B7qidqSSmsT6FD5QywMqTgSZHNmMXSRrG8vRSHLgqFiHuAsU",
  "key27": "665GjCwertM5waiuHfoNpxaHauUqKHR5UXDF8k8HzCkrnT8BWSVvQAzkvyoGWDcfcSCW6bgJ8U1ZWTDsKZmNK7GM",
  "key28": "5JHRW1Kfd89H46uLMRMHsZbLQHGt8VAMh7Zx8hsjFSbVupZHtsQ53qKcJYESvvxtYHooSEiDYUGhbjoBdWDdKw3b",
  "key29": "5MDLEN4M26hVQhkdaE4Cdd4QNJB3YKHUyrdp6mVsV1H63sVHsWLNhCx691MZyF4Q8BSGud5PBLD5zKXxqHnaYYPn",
  "key30": "3fCGcA1hGUYaqSdtg5qGjFMVVFnhiKpvDBp4EJim5rFtf5c9B1Ux1P7Pfa7ThMNnQ5RprehHUq5zutgXTBvF1yk",
  "key31": "9LRG7DyYuXR6ZGfDdMBzbvwhQgvqonZwXjsFPoMiKo6TGeTcGmDgnGxL6FdThrbo2foSMLunqoHxcJxXHq8zZUd",
  "key32": "3kbHzhtNtrLyqe1pELm1CSD6DbuQF9HMeARkndNm7gAwhCJ7PtkTt8GfUKAG5HiYeYsyqt9JfX5FwqXHmmkcz5hq"
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
