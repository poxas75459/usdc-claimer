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
    "5cB51mttdy762jVVGDRS7CNhZ9wRWxtry5smvVpDSQXqv7K63bJXYLbq6BteFdQvMb78JJrX99STDnCw47zzUk9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cnhVUAEeCcTP7DLPqo8B8jwh83xt7V4weQGMLgmrNBXLZSZfDiSUYr4LHKLhpax7iRCn4GqyTS85QVWujAetGoC",
  "key1": "4vjCEdr96mSJCZMQ2b1tTrgPmEHanNgpE3JrNfMoPFdHRbWNx7JudDw9TAniPAmu5cnvs6PeN8QU7SAoo5SeMFAA",
  "key2": "iq8fqUx8gybd8ia7Sfrw4Mtdqkv5UvuEjn5BDkB88ESuzGxWYuNUAxCwcsFjCszzpcSxRG5NqFcxd4PKX96cea2",
  "key3": "2MCq2qReaN5CzKSFkXhnQ34sgoefYQJdTqKNFiGLgybwqPqH1puBLcpJWwRtoPJ5hQwfA9e3FYx7VLPCuTzNZJ9N",
  "key4": "vb4Kti1XQo9pVpDVCDAJPTxJSLSLvsTQZUcb6hotY8mkMRhG9qCLfEfbWazwAJxyMogyTKprPCbAwq1frNgWsmY",
  "key5": "3tN4HZ9HVMdVNFPuvX8ZDito9mftaAEb67qQrMjBnJcYraEmZ1VPL3bskseMH3GeLnbAit3wLiLXoRaPUQyWtnkU",
  "key6": "23PA26fKPqNv2UgVL4JyXvLHyFQsNaECnk3yrRLHDkzZCCjmuGHmrjtiPq2PYAihWJVSSqYdPZTArP6EX52oBihN",
  "key7": "381N677pNGQeNny49s5WH56ZmGZhsqq59fn8yETBS32DQyPDPJiuTXiGsh5t98Yxg1XchQCNLi3rv839pHz9ngkJ",
  "key8": "4jqF8KA7pidRizqQRXdNnbNhHfVN4u6TWM85XeLNccg496NPwrbndKnALd8BFAELBxuu25BQeUfH9uEFBXcjVG8s",
  "key9": "3ZiiuFK1guDA7C1fc3PgWbERMZNPCw4Zh3AXysUoKHor6x8gAVhLtyqpbicTBVBSUEFzURjSXxkaxGsx3dLxLbhV",
  "key10": "EFv8J2pP4gZSbVoSyeYHV73PWMwYrC3UQjgTg9Wv4vowqFT9QTY6sRLDJTe5hjzdFTjgLER2nLZ46nxMtk8ZdA6",
  "key11": "4n35hXYsb6kj1vvdo74H3JgkaVT5WpUYrV2Lgdk18BvwXuPyRL8iDxCFjyvWHAVvieVU6KFVBCmAL74qgc4fa5zV",
  "key12": "5cmpLTdDZr2jTGFBEgp4ScaoaWfKbwz9rkAYJEA8fDkpk5BSsJN8PECjrVbqGfd4Cf7EJKt3mWXHnF6BzaZYW5rd",
  "key13": "28tAf1SvXaMnai7mRgHuCr9LxScSSzjDBQyU6A2AvsNag9vZncCS3uT76AHpMvaZgcqSmSJj3phex2upNaAynyxa",
  "key14": "3CJn9LvLWbkND7TtgB6hA9FjvQYPYJo5Q93R8dvz594reWHTmurTW1RhEXLDY4T13Xb6PT61ss9e9RmUYcXtfCig",
  "key15": "4U3QRbKG3Wb62LgQm28fBfqZxS2NnHFnUkvJ5MoMoFwmEGmDUtjWv7ixwhC2f3rJx11dXd3YK7ZRMXDN3CH291CE",
  "key16": "5hekxe7Z7rb7bt4pedfXkcuimZ9tER9ZrhgirPifCppRHNDuS1tRnK9ZFvKA79PZwLDRKyzh68CJhhrv5U3PeCUC",
  "key17": "5cE2mWuFdUELZqbxBfAhXKEfAafNAzVtRMnrsEQxTY71bcawoQHzXCAGChvPiJdGpmxESC8rk28iDen8triSBFHY",
  "key18": "3FgH2RYyJHu39hQPGRys3MP6hBFsyxcgi5zPPSkHUtodQiZd4kMFejdbsUETxqar6A4qxXz3Wjb53FBnaKMzdysT",
  "key19": "3LJaFoRFcdqZyM5sx8NvGiwP6JyqLqg7rbohVyPAkyn8czs6a3ER6iS5GwMiqU6efHrM8rckf8eeYoLphsiHFtEz",
  "key20": "2mDXRzoHAxxgxWikfgQzuzAfi4x73qspBVwCqACURaxJ5RNqpiQgFM1VrXXRDULe47vXAxgTy87DkEvgFbAQbR5b",
  "key21": "3rXVGkXSRcwm37PfdHQsGUmY1e38E65SeprhYZ97MXZRPWaNir4mTSztYz6XpFswHUG4FD1VVvHv5fYKHZVJSNeD",
  "key22": "3Z7UEdtQ8Xs9jBLrQP8MSCMZM5v7TFfdjA1TVbSvu1ELeeYj9uC9JRnazG8Qnzisdd3Wzvixn8SakZruHtH7Tj4d",
  "key23": "EyqPwTuYMwX2SEKvoAor4B3ztTmubTpZUsWPFbLfvkDKRgHdeWir5qN5u8uL5EtLrSsA5uxmrsdkzk3s9fDouB3",
  "key24": "2zTyFKtvfxs6nUXhB3BKyY4HzUbvShQm8fz7f3iMxeioh9caibkCUtcLiP4f79QN6sWFMQsq2qVu9c2umKVo3FZd",
  "key25": "4fHCzUEz4qmY1yBJXbE4K9ps4smDY3hkSoCmnLbpNkEWe927GnvWoZZeEcNMtyWMXAiEZNtcbLf7gYcw6WfkLeBt"
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
