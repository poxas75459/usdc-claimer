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
    "2LmfVzeQJC7aZgaupwaRSCkTZDd6KttBJPDrGtJkZvNP1Xg6WXGwMLxnrUzj4GdsYo41a8uJwJzMsBL4uKME1p2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uDhdny3B3nttJtc4Vcjkxpn5XPyBaZMUqJEr7rG4p3QgHRGU7ci7tFyHmdFyVq5vhNJEXxM54RSJ9PhfHed9syn",
  "key1": "65qB65xFsxwbvsgmT2Ea41cJa64haaT3xKcvcVZbMVmCsLQhp1c7DpPaw3LWSodpjsLzNELrh423AFkQJEoN8Xwp",
  "key2": "4kAMYyKu2RAtAC7WQ417dT15i6YWTAewCjyiGZBUBGyzRMtEa6WjAAmjR85tL7vi8yGo1k147z3LQS8US5sb6kS",
  "key3": "51TZdEo2ADHLfag5yy5tjZWMXS7PSfpcEGWrccS43S1Ge5rjPwW3brtac7EStmBbHBLtxZxyvnn8TgtLkjgV2kBi",
  "key4": "23pe4EAievA77Fkmz2HK9h1tEctCfWdmxXo61eNjL817QeY6DLBKEaJsPNWWDY7JfpWXJCdRUcjWizNYz1C48tBs",
  "key5": "3yRZNwmw3yh3EhwbJ6VvFz1B11pfirpSgjBDvVPMe568m6bBnny8c9tpVCgxmzu4DXd26o5GCtYGyAaA2vTF41QR",
  "key6": "AkoeMVVfb3BR79V4EpY5wt5ATWC1TYnueMqeJs4i9JuaZZueACnBYc5mKeJpAGrbBAgihvbFuwYEsB6x3CB9ohx",
  "key7": "8BuHCBFb8hd3Zpm27VEBHH2oseLcYfYCPBCvCzNXUCr6QWGLYFXKMwNYEzynhbajpgFhWZiMzKXMh2ismdNNEHL",
  "key8": "5NnyUsmDh5xXcrMm2fuDKyzFHXPLYbkoQ8C4Dn7iM38vQfBqYg1i7QeZEonXdFrMRJAPdpsNmyNb5Chj9PP1iaau",
  "key9": "3u3jjqDVuLh1GUeMPz88pynkseqah89NeZikYhGbKnWurtaUin1UbZwk6r8yJJcXECMnjwPybixrDiZZ7LnPzZ8p",
  "key10": "5CZ3HzK9Z9ktqT3jnPkusgp3SRqASpCfYSTUou2DfJRn83E2c4yMBJSZUcg29yvSv37mHVvZhHkDcgpeCL2gmMDf",
  "key11": "5q26BJVgguEKZabznLQi2vDEQYmefoZPkRtQPEaiDFpEPB1k4TjMU3YhTRcUYzha8mdFiDm53dBZn9vAzmjPHhNf",
  "key12": "5qyBC9Gd7StYv3XJ3MebzsGJcgsMcErXsGVaBdKZjSw4NFM3nnnJj8DAP9jzoqTsxGut1NUoUnsTyrDfvu7VNgMr",
  "key13": "54VZZq9TZ9ykLWmDwTzC9tFSoWsJXEkjG9zdyumXRXLxjthUT1fWtaHq6Tv5A15E5D1NvuKrwGMdUjcyC8nBhRpn",
  "key14": "3XNUURZ4CFtGR9sH8kFVJkbSdLQzV44cChSCRyYx41H9rmktwMXbTVRQigVuigvPYrXuJaLC19qMGEyRP9PhXHkP",
  "key15": "RxUu7T8f9QGqGt8xMe9PdFPoxyKqod21m9pF4uTKx3bUU5epJ1n7wAfUUdb67X7BaEc3FNEEgKKibDbN8NYGXXr",
  "key16": "3EGGVVmJUXpAqkRMtNkRf11SXPfHRtTweiEgW51UukAZpj6YTwEtMXsCVzpUJDQARZdfMtXJZH5oktsuWcSo1piQ",
  "key17": "4vfHtSbYKrtBJxfH5HpdXfRC9mYfbQB6yaNyP7DbVYDPc2uq8pEzop1ZFD9J1SzzDwxknutwHnQGwj8XsexRp2vV",
  "key18": "2AVzQtDraESg6X1hKxcVpvuY2Sj1EeDEiKL45Ao7YtkfdyC1D2gWjBndVrmSQ65CxAm7dkKzqVrg5vxkMTaVNmNV",
  "key19": "287MgWmAKNiXr7SgBpkDNyas6zHjLRUc1QrwGHt8ctdwm4p2UX9KWQXniQiwDvcvxNF9XFynSN66JFct4953ujEB",
  "key20": "51za1HgohvxwvDVmDGs7Z8jNKzoGdaLCpcDopPg7yggvzdfYSkfXJv2FtM63jeSCCg6j8KVsvzwqMBFpCLiWnYv2",
  "key21": "2FDS4mHFAqgHXaTsDBaEUzr7SxbdknHhMVHmedrLfgUKd7arHicCi4f2sZMiDQiNGc5YQXMaTFseHC8PpwCEMzvk",
  "key22": "2YRM3t86u5RgJv5hqWGuYd4hJgPs7w3PD8QuT1bhX7cz3k8Mbj4ZeRMqWfgQZHEDoyf1KUv3UYDWNP1gVvM6DpCE",
  "key23": "4MpSv7EPfTAWAqwYBx7qpSLRwwo3oVbbDaH7LJtjhqxPBe7SMt1P72eHYjj8VSWQUyiBgjxUyvFNtNNHiUJqJ5sg",
  "key24": "5yv5TNV9tM3mhFc2kTvq5FoxTbjwCuT5LZD2QVj6d9BvmLZZmh2zUDka9sRvuyf1bX1K9XdTrUFemfDFy7m2sTsE",
  "key25": "51LMxQiWdvxXpUXWnGVTffNFF86LeC2aftf6eto7AAxSq5tfcsqtf1eEVhqhQPQWShDCyngcgF3Utch5scjuWLQA",
  "key26": "2Y4te2KcbMmoRgB9fH9TZjVQ6RAUNeMnTjewKKGnhpKYUJJWzZVsgdgFS2zemdmKMp5RYPcbCT7b7nWicB9EXReB"
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
