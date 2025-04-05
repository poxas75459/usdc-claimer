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
    "2LWpXiPCpQgCp7yJ6rrFSPgwERqAoqizkFMzX8W3MCPXw9kUEynuxYR3UsixFvXDZPprRXnAwukXcDdbbpMHg2ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NbcGCArd6c8njQWZmNxQ7UjtVdQJWYYPfq1negZv4nxeiipF4B3BLcNVRSBUi6nsg4q1NKJN7nPTgkyJmJ7wd3g",
  "key1": "p61DHVgFGBTyVcQVHFQaevK2oUux71z32mNnA9RTy3bmJPFo2zhzvR3qSiMv24ZDnj7p49zpp9hFrVHjXcrrioV",
  "key2": "5D2Ywkt5mKrPoBzy5XiRYvmyTZ5X5ipGjZu4vZgoimhCsWkw4cF8VoZsD2ysHKkSEe4DwjYjxha519R3Gh3LXXbP",
  "key3": "2XQtXsTg7uzzNwaDKs8J5jeoH1F2QcHmENNhKT6BPAKJhPpNazg6GkrhzfcuWisHo29aC9F6ZTh72PbBc9X65yMT",
  "key4": "4uyX6WV6uefuxYgZ7S8mjuxi6jDoWaLi9szb6Z7xYRKve88sT6vrU3xWQaxbjcSa9F4vZMqUvqYMzCtzN3YuU3ng",
  "key5": "KC2QmAV1w3QubcPAwvhcKLsntAAeoRhwjGiEazg42yd991Q3jzrcG3xCybgUUiX3Besax3uuDLzv1F82tXt7onz",
  "key6": "4X6ZTFetyw2Ffj3Zw29Hoafw6qKaC3znDQgbh9GcAuFLhgwF4xT8UznTCCy3XVCXHV7K2Auxa5pCqx5cyyQzpehX",
  "key7": "4KQFMbnjM3w3F5egdGQuZUrTjc9UwqLFZkQCFmzTrzeBjU4L1ZSW582M2JR4xUhWT5zYu5j6yTcVcDpAU1meiY9h",
  "key8": "49YkKwd23QyCNdLbsqrcSDvnqjXgGzKnumUDw16Jqbhp72m5Land2kUgZscLas9NDCaAV4dFczCj9chBT2J6g1Mb",
  "key9": "tj6U9sLYPXyVftaABhbF1B1WLzzMcH9gpLTLuFGXjF4Mp9RoJS7fo84Uez15ufih7AfJH9NUgbGeh7iFunok7Xx",
  "key10": "5pNrHef5j6FhoCswHpsmRzv6DGRjQkGaMNwDtUE88kcvapV3jZGoWGdsRi9yzbLtBzc39wQ4rwcptZnxyz7FNu78",
  "key11": "65eLLaXaVKz9Ms7FYA7XcAgcqi4iqDEB74rP1PTt1mAU89xus3ZauCkW3Eum6oquiXrG2tpS7BNE5FJGTpxaHdux",
  "key12": "2CYm9QHMUL8F5bjrCZydKeQNrRf7YCdr1JqcLEbUiSAfa1T6qVCh6gfpbQToeSZWEMFwk9w7NownKmEetC3VqFfN",
  "key13": "2Ms5TFem2BVvoddh7g4znxRHfDzwAEA63768eSzJwikRWyiyBPJ4HpC93xXYtRSVuAVrEUYfEkz9LxmxkGzzVVDV",
  "key14": "3XuKf2ctJEvp7FPFo5naZmsXgJWcitRidV9FrME4C6qKJuQBSVGyuEYTSvFZbisp8gp76QitB5QXzfKqs3is1Jm8",
  "key15": "3hbx91mDCbGDza1fdyCm2KsF58w4o4NHZxp7LzHbfUCE8cMeWGrQXeXTi8Qe4gghxBDuSoayp8Xj3BrtWSsfeW4t",
  "key16": "2KcWhfNk82wq7JVx6Mu77bTKNBheF8NABaaJfenSBGQYPrEMPJSfVwgPYuBpnHfv7XnxwZnmvLfuVeb52tML8yU9",
  "key17": "5wtKXLbaeXA6RN2xtWKYJzw6CRE6AHdhKKq4YUzTSFq98FJ96KkTWTGCTpvney6jH2QZNEHJLw1SjzQFy7PzZMCt",
  "key18": "5x5YhgqBrgeSy8vowcMwNfrGvuGQeTbPxJD6ZZBTS58cDNQU3DmEkU81kTwJuMUNpoYfCNJwNFjPfhTJoFsv9LDu",
  "key19": "dvEnXmZCtLacskMVJThN98tpM3exoc5AsyFpjBmZrhaS4Pm4ZF4FGLv2nb6RLpNVkbXWQscaLMDrbUtdapTjA4M",
  "key20": "2yP9mTSxrKRYaZxWZA5ggVT5UwaeBanCumFrqJa2M66az8D18BzunVjEffit7eUkq5n1BgFyYpiTmFioRej5WZpH",
  "key21": "syhPGcrwLAuSVWjQ1czJDPmoAdWMfxHBV3Xujvv61kDD2mFhq1CFL3tCnxxy7MCaRgz3uQRsgvaH33TeUUiiYrs",
  "key22": "4cyGwYSprqw3HD4btPv94YXYWnWiF4xHvMaFg5U8XdETzKhnwb4VQds56CtXA8UkLGoLE2fcDdivhYk6GxeyCWAj",
  "key23": "pq8BKw2dSjwLySH9cMj7r5pXJHhgdSs3u6Kz7ANcqCPrkSofhfsfGXiGgFhcvB9FbgPAHVVL6x1smYc6CfYdbhc",
  "key24": "4vtMG96tLuBwG65FZSZkKi725miU15p4kiVt798YhqQB3TEEtwkfwwk1Ts8K7GGdyAQkAPNgRJY4ZFLhSZdm4KxW"
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
