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
    "2rJTQKQGCQEbopQYLttuLhsZ9AcucUoAeiJ2iqeqH816R3WXACTpVrNxWWoCgtxdrq4X4pj9oDcdbPATUqxyoHgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sR6TR1NVmmxJ6J9FWddiL8PmfxErSCqKML7tdSQTqkm5tSPxCH15LG3QJRFZYzp9e6BKpxbhzcDzHN4hTFmA2aw",
  "key1": "2JUarSHQpqJPqpXUevgNMTdmyDgJtA3fwiZdpbA92EsDKMdmL8P3zCYBaYUmoYtp5F4YeNnxga5V12XutDUCKYqq",
  "key2": "DDnUwuz3uNN3GsVpgBGBtrksg4UWL6QFCNUARgTa8o8zrztkv5GCV8Z3HBHn9AkqsNAFCkixpfpHcg2CtJmnQw7",
  "key3": "4LMuXo2FpfWZYS9CdghgiRoDxvyQi4Y1wQgD9qS45CFGFisWLWNWN5gNhXtDbYtjQXFDMGgoW3YYCDi6PgUpHNZ2",
  "key4": "21ssd9ny3toR2uWz853BLMAf4xF3E4GUbXNHCMw2ZpbcShPfk3PLUZZCtkc8JUCqc2VRAaCVsNk1XRgjNwcFApA4",
  "key5": "3ULxWy2GK2rqXD9RKFUaZd7U98HE3dvbWHcZpWXRRnMkojo5boAmL1vpxQc5Qo5xWuU24EPRSEsor3wK42TEw9kQ",
  "key6": "5PFLeH4oU1Vm7B6htGA2JhX5HwLLKks3xVyBRTAzAu2YvvGAwvdkmsdFM7kDxKsZMxfNiw64rDQr3FRhXW7cbyN7",
  "key7": "4wQBpuBq1rdRX1XDZk8CTwBZEN865yXaZNyVqgt7K4fwjEcUkfrVsVFzQApCdhmWhNt3iUhg6rz7UvAGi9gr2swt",
  "key8": "2ypQ9bBzDWqUKrvyhdaqKrmvTDXDM4wkpLjpMkDBY6uqkrCMP9pvzJbpctftZZjLwbWQGUnTccbeishGYZKgcCic",
  "key9": "NSeJsVHoxyDSrATD3bMzuWSwCQTTY12p77w3pFpGGTzuQ9iVPejpWeSCh8XGqM8b4kXvtcEDpZTVW6HxGQ78Mt5",
  "key10": "ubmpZRG1W6Umi11m29RSY62BZXh9SGDzxaMVpTmPZJp1JpXUKvTMFzUyc234XsWGLzqSWUdmHfeAPRQd4WCDJHW",
  "key11": "4y2s5ShQGbKeVM9S59vRFRQePVixthaTJLKuMCqTSNFTGk68Mxr7tRLyHRQcjBYy17P92PKYdQh3v4brqmngB2pD",
  "key12": "2VL2Q3U5QGHGdTyCLG2xFR5od4dxKzaqdiB9wJVBQSTzAUuqgsi8JAoqRUyKrARULy2nEhVs8E7xtA7RHxfX91Fw",
  "key13": "2Z7C34bydQsFGy2VTB7pDY8V86yQsCtqcw2zT9j52C1c3SQrFPo6RvLDhrcFZ1vibxr43aZRBGr8gPitNoRZymRs",
  "key14": "ox8oJ6nBcGoDF6He4qDo13dk8GFnk6WJGFbFvbjWCzEn29SijddHQcAzXDqpGfuEdcSpJ1MXHL8WE9wBg5BNNb4",
  "key15": "315EHuhR5HBA4pM9uKq5du9cPot3fKSiQTwuhsRkk6WRaJBXQSagK7x5RVK62Qjqvk2Xqsy1yJXfHyTzDzV9dAUV",
  "key16": "2QzXMUMAeaakg7QWknVSzTGscGsRXdiDvhRZmZddmy3GJDc4AGLAYZPjjCWJyNnBqQtD8zE6MaYgFPj7stAoQZf",
  "key17": "3hKcCVLAbx5BJ7zm6giTG2YskUACMvGrPdTrTo6Qd6h5SN62TyS771m9UyAhsvJaZEUbNFuTvXWo1aQeCTbxbMg3",
  "key18": "4yS5s8Dao5t7n8aLhxTifmDiEQAS7PMH7FGU1vBRv47hkXBGRhtPjMfNa32zmqpVo2vNNEG8ezLvmYsvLng7ribt",
  "key19": "2ZC1xnVczLLHeEMZ6fdWxFc73ynfyPuTnGmfEjG7vc4sFLAPL37MsbJU7dUxNbxVDZw1W7nx826bX2CdNPsdthKd",
  "key20": "4JM6pogyFz6W9Uiriyhsftzrd8HUp5r6FVVocKXW8kTV6GzAZLMwpb4PLsAE2TuYc3oXKPMmQTD9gkoCzT1ogR9q",
  "key21": "AjJFJ6NqnfQNmWiyHR1yfmpF4o3nzTj9cuDPS8NTDLry1PVtFe62Vx9uXQcqrXxaAHUKGBkTmurgto2wyV94Z5x",
  "key22": "5TDv3aYtTJSfTmDVBCLK33iEtzDmhHW9ZpVVqqnRRW94QCqj11EijhrMuF5CE6eU4ys5W6Qz8kd8aGK4Ypkk43bC",
  "key23": "2i8oiPrdLR2gXDDXMfpr9U6MWizMsbxyWpGS9iTQegniZuJkHvwtcBJgaSPtoGCYRCzjWSiTtPpLXjhoepr9Azqu",
  "key24": "3Gwoa53mLJHfv5hp1dBdVtY3N7BT2Jq18ZmVTRd974zLKLP57CAk5awQEKJDXhDrQTPsGtYYP7GrzLcxfXxCBcHa",
  "key25": "KH2QAy3PJ1hJs2uRtfnCGpC4yTD17frpNDL8SNQupmsKZsEK3ZkUqFRe78bTWTqPCx9kFvVTnUSzk53BFPE4Mdo",
  "key26": "wMrfEB6KKAzfkZPn7Bs5M1vvHXn2ZBsQovvHVvvDXGta93tKzAnftKHH5L6FC3MFCA3KDBytc6yPdKNjcqN3SUv",
  "key27": "3t9a24TuY93RR2ZUjEJx7UdjA7cMAoMK2cuszER8bGsu1Pa8MJtnhwLx749eFkjabS5iNwhF77FiWEh78xUWFjju",
  "key28": "3BHGGDF4LfYagr7GeGMCV2zjxF7d1gmjFp5t1mMra2mtm4dRXpZsu3BHxxUeVVJAYSkZkQeDbhr7YWzuuvwn7zNv",
  "key29": "4Lk7ai1nD8cQTe5sVKfdRhpuTPBT2wLScrYaH3KKZrvGWBg3gQjCfTyJPACVxgVaxZg9hKDvUb6dGwYZk968aeSG",
  "key30": "47a2G6X3Uz2meZ2B5YBLux6X93DAFQq3B4zDmUEkpp1f6XEmPjQko8xJ2FSedKRNkZqAu4wqDjgwRaAdJ11Jdpsk",
  "key31": "3K3EXS6vNBbCFEGyUerQoXMutbKAmnPPKiVgQnC9t8UaDFbLmqNbRE58pvVzsWFhUrQrMnCQtpPTobAjWxdosP4h",
  "key32": "5z9yYpVs8oaaiA3rV79AHXn9MLMwqoCvCJJLQrAT3MuMyvrA2bMcYsxrQNyCxC4gYqvpQ6goWkr7b7zk6EpgcpHB",
  "key33": "38JC7EhraZfKcRtw8ug2zvAijzX7awq3uABsLy23kJ4bEKrMMdr8wrLAMUoXcQDi7X1HYhpkp1YoqZ8AvFdYBUHQ",
  "key34": "5o8E5rm4Y6Ut7SxpXKykf3iPCn88dZXADohMfB18ipXxgThvQKhV7oE7pHCsuV9Zrf5VkLXriokeRqV8uqn5xjee",
  "key35": "4QZQShoNf6ZYik3Q5EUB5Y1yqbF3jow3oFXoWuRaxJF5bhfMbMmESwXfPhCxytEMVCp5nSrw9SnbUCeA2t6ctKHg",
  "key36": "5jM7RPEPTkoc3nbM1d6D1vcgMqm6QKioKvuE3cNM58oiyGkzsQyyvKh9zYggrRD13UfMcCuqZ7oJLz8hSfgUSnv9",
  "key37": "5nq8oTf6f83ZK8ZgrMAEX9WwuebGNafwGBRwEVaqH5BPKTYqvzWSic1QDAAtAg1kU5ggh94KZEPE8spyeuUyTcer",
  "key38": "29ZmxgdzXYeK6qJp2AbnSvxt65nUgGPy4BEcZe8Jhw4VgBBuFECNDhJcc9fYTMnbgdzoiKz1ATCqnvD98anN4PQB",
  "key39": "2unpTDXhGwq1ABmwjjKQxsYiPAYSye1RTiwgG2oKtkR4ptURVoxxEP2KysCQapwSHwJSdruaF29jnfiYggAGRG3p",
  "key40": "2fXkddx7W6rh1vswruwsaazMygYg2cVEDDdgXYWFVrRfqfXRiCULJ8hVm77p1fNVqLfjjgTxnuFn8CV3x8hvKVZB",
  "key41": "2ki6GvhG9b77XiTXZwtfthby1Jx4Rc6Ex2bZHEX5fzFAKKxvo7a8QsUQLhGoy1TGtdNQdAxkH6bjJ91SWzDfHBkf",
  "key42": "14rJzURz2mJqpp9AWi8o9gS4jfyUdFFQgs25Y7PEiSJ8Rp6WMEy9sEKV89xTWdR7uFhUwvm9z7iR8Cwd17fB3ck",
  "key43": "5cPdGqg6pyNbkX6XFREgEUH8yoWMnXykeZCVcXBXm1Z6idXChCaondC7999woQb34drXUyyn3AK3rFmQN6wEFnGr",
  "key44": "4mY5Bn9nC9rzcrrarVUodUQHjXkVwE29auGkxNPhijP4yTEbMQw9ARgCTrDrMgNeKdgdWfFo4Qotv18VHrjzLxLU"
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
