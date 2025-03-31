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
    "yHFfwBJzvqHH4TcADLiYmrK39PVszUJeP3YrNLUdmzib8o5Ud2vFmExjmiFnDsYdEXakHQuBjxC3BLiRVSt5YWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CggT36hspXYYmx3JPqLZJqDQvo3qVhdfPc9iRZTcLq1tAH1AgYTdh7gEidBgWuzmhLy8qF5KvyrsrajqPSYJTqg",
  "key1": "5bnivui1ThHKjavVwfxzJQcVX9gktwUerZpzkiKMpQzpTyFynYRbES2KvpLxJrx85LKhkF8Kgo5jK8QzCnz9g3Ut",
  "key2": "pqqiyfnKWodXn7tEWhciQ7tdDvRM7erMT1EJS2VGLJqXdk7dnNefwCxGSndxNcQhd2WfyXU9H7HyP4Kx7P29pSb",
  "key3": "5WWEkCzKBDZmvVB8A85XcEpacmcF7chRhQipXSPpBZsNbk77xKHGJdMp9Yv9dckuCvZhYZQHHets83em96rmpESh",
  "key4": "3Jyaj1qBn2sNud1p2Xejse2tSvG1X7PpZeV5hASnoixB5q8ikPy2vc6dAJEY9Aof3WfGUcuLrCMx5dEnkt9SiYeT",
  "key5": "39ZQ5YHRiFAbsDc328AX6h2iUCfi2zUsuKiRVMo4oMjhKUy7UJBGULTtM6EqFjvhUoN3nTzn79QR68X1RqN316XH",
  "key6": "56qXTovXWnm4DYP6QBykY4bE9aKHf23LW7kZTPdMdWfQQXfFY5GXHtP6ok4tP8G6WhcZwGjsp2469rWfZw2VyDrc",
  "key7": "226yCYCeLa8VzR5rNocAqMqEYvQkxcrgAkQZDvuQ83tHfrSTS2g3rNEiw4wtFQ9Axi6hs5LbdHz7UrbstBc3WQL9",
  "key8": "Wz3wjRzxVygaaW5RnGhWNmZsD1gyoThbTeubcj7Sy8HNgreKVrag1nq52P3tUZLu2TT3WZjeyth3w55CCuiFcMD",
  "key9": "67cEJ4tMDXHViiEqtSEXo7XAapfBd8tPE37MF2By51dq7SFTDJF1jER1Uqv9hS9rUMEGVx3vyYkjTq5snHYFVgAK",
  "key10": "2Es4F2Z3Nm5wgQ7T9ve8sPzeiuy4XyskvWG87s1QhWzXMfgE7QUDFigBiRBtQz88STHjz83Po8N7saEZ39Aqrnbo",
  "key11": "5eFDQz6tJMb54YkoVsccUVbVUzRun63DEPmbAXgAozvf1huNfMuRQkTtbiZJNbZpMoTFRfHhaiGY8tQAeUEGu9DQ",
  "key12": "5RyHaMBPj1oYZr9B7dLFaAeMc6KnHyVHPMgUXVczbhfDwArCxuUWJu3shPMRELJJU7UXjy4E6m56MQuK6qespway",
  "key13": "RWk1E3pmcGLXUe536G4oHGffSkU97kDbWttjfUuVoELNVm5RkqfCAMGmEGAMLzieMwsejetvt99n6437RServEu",
  "key14": "2ey51BmayuMArPFvrjpAKKTDHgpyXUP1TMT2e2gNxQBfX7ter7zbqj1PKDsAU4dZsNEFGqfVRGE7FcZZfPE5JCNu",
  "key15": "358WUgm6a6R73KwzNrEWZcH9CzB2qKUcU73n6V9W2ZxUYyB4K17yqHJRHZNvyNHpMZo7sNZssTSqosUPEkjnLpvc",
  "key16": "55g3HDZd1XhiU7vYCABvPeHvEtT1D7r9MzXu9Dsy3sHyDZuYkpcgZyinjZZLwmvUMDvKahoRp9io7HybP2ZhLvxb",
  "key17": "5UoGTSdGpS58PZJ3i2RXzyrgHvsB4nehZ9GPTjKGepwUPnQA5hxoGa2SMvuXcwdorptj9Tbe7eQvnLL1Ka4QZ3au",
  "key18": "3wWwBNTobUDhA17myhidDYLLfx8jbUVgNwefXtim67DSLHupqxtCr2QR9dtejERfVB78ekEcx2w5LZpyf5vE41ER",
  "key19": "5dPLYkw68EA7oKtpmKgcbnU26a3kEU5E2T9DYW2zAPgFpyf5VoeX1NqMf9mPesA1uZJZGEAeEBQthX6j9hDL5u8c",
  "key20": "3JPLhB6V83ZvZbv8vxtWc23s5JeUQi4fGmbcV9J5ALcb5iU9UwfyHgBEhRxv5cRr6UQeUc5ERQim9wawb1kyAs95",
  "key21": "23GadbuSuMjZJUhoA7tvBhjerTBv8wJfj2rdWU124DGadVLrYTCk8w62JEEVLmJ7VYSNzmGAqoZc7vPYnYHFZc2S",
  "key22": "5nhUkQxgnNV7Xy2WP2qRUDTXDvDkUqBRPctjakQWf82jpHaZWGQC1aJ5Pm4prbqZtCxw2Q8KQN6eMHnrNPeKgEiA",
  "key23": "59Zn4W5sxTJcyFq31rNwxj6t8Jn6mW545JzGRvJLstz8horY7zNnGz9BTH6R62zvvPYTVCydYZoZgDu1kAjCJFfd",
  "key24": "4XxGs9TaPBHR7EotWLevuorFZ9anmfS7odLdaV4L1vvGVAFYT6jcr1By2qsfkMWHDQagg2L9sGspxnaiUkvrToDK",
  "key25": "3JXDe3sxRpNLYnyYDSGVMecLWm3GBSThPLYMooTQ7f6HgqzGZQ3K7fyHmjaiH2zqdQBGuQ7ESyLkPPheYPgtVu8Y",
  "key26": "2iMJtcMjwavVGqtCCVTfDXbJc56TcWokwGict6ueT82z3rXr6hAP9iBER8gniSJSgiAnmH2rbB74PxQ1DX8SyTxY",
  "key27": "2wCgWSnchCETVJJ9cj9jcVpizUTqYd4tKsUthyo7T6uDXEcHbgUienwp5WadYrM7DicgRb6J3sLjj6ERP7jS9kk9",
  "key28": "5t7iLHQAL9nr57oCFo2rosVPw5hKXWhVyWZHMx85GsQRVb41ZuDMgAaRZGgbALti9sHRyy3rh3DJhobuNTNsfSbc",
  "key29": "5Kq4VPygknBKWF7S1mC6k8XfLTKb9PgeCjepUDhXHPN4u8qEyScPY2m1rJ7ccoCqgksf1yh4s1eBkuTYSuiug8Fz",
  "key30": "6UWhAYhkX2vGBX5c8Wzd5LUidYXi5XkiNLPFp93YpnbmYvco45DS6KGyFAeusHpdzyA47aD1ooRh8WN8ziGxNd9",
  "key31": "2B4vP8rDDGmD4jxT4jNdSs8yvt1d3KZZXiv21tnXe2rGfRpVYYbcsmGVJxXTnXaQLwhQQ5qTZS5E6UVDx8JbBF2h",
  "key32": "wE7sCycE5PsecF74Ax2eSQGJBuzaKtJBsSPJotVqk8NneD2KYHFT2VzKsJwhdSGMsZWA5MHQN5dLMbgt5EAeYp2",
  "key33": "5ocms2SNLY9bpHFL411N43XRyas1uW7RyRDkB2MzkEAyHGw5Ass8onqmsS5uwgMCU8RUrFUnFWAKAxgKNn38xSH4",
  "key34": "5GYhetfEZQkxfo3odgtWM6D1J3gB8jTrxZDt4iJyx3jxtbE4VYu4ScfbAErki5YtqQTfR9uusYRVVNNypg13SN8f",
  "key35": "9snWqbLJuJ83YRirb8f5faJUdhRQhPfr2rRK377uAJnzUn1jUmwHNQDqpAg5s7qKzTexgWbGVW47yXLz8bCZTsu",
  "key36": "53SJcpLtcA5rnv3FRCe3sHtAYhDqdAmE6YqLTFkdqMfXFtzw1zZfeXzCoHNUo5DmeKW6uM5j7MVzJSavmS4pLWHH",
  "key37": "38m4jz5cZweSFcLe77qqjkyavySeu9nGaYScNmxhxeimg2X7RZcSh9vhC6cNjhCWjzUT8MY2Rcsozmco5uVF1QkW",
  "key38": "5qvaYRPzY2cGQaiMacPjYBqWbZhkwr4UcQgr77nySdnVEfh8gAb1nPJgpEgaJDXBWedgb2eCaB2cioEjRFA5sEn7",
  "key39": "2UQZqzjYf4KnMUwDxnmqNRMSxqpNF4aS1n5pG9b3o4xE7PCPkXbhVnBhHJdd2w15v7cbQyuYzg6vwS3iTqKZyLXV",
  "key40": "3rmV9HVoEtVSpMDyiBByMGenVsC8v98ktdRc9gYummQPkQu2716zpHE8RdTY6dWBhW6V16WaYAD67SQ1kc7dRcX2",
  "key41": "5PoUToZBeeUWSnpy5QFUZEpzPDFUfY7Du8rywbLmBZTJDygZKXVLxrFLdfie9foQZepyvBaCvP76Ar4rGN7Jqhg5",
  "key42": "3CbFiTLXwH2No9S4usGLPSvmR4BAXAFFBcDPnBQhmkMxs3s2LUbyFqRtYfwgFFJtkSqUG8wR8ph8JDADSoenuej8",
  "key43": "51pVPkVnWBuEVcbMiGJRh7eCkPuAvPvThmUEgkN3mymeFXG1XYYnmHW288TC93w4CBrB7Zes2nHT6FZU4QCv632a",
  "key44": "wmTmSe4xAeZSBNE2u8QqkRf5gYF4U4B7qUmqws9AV2KmSJ2iZRhTYfKrHYaxmZAK5oU9u99S3zgZDvWu6Wuxgwo"
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
