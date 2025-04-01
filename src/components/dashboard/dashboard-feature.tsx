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
    "2Pwnj6h5Z5hay5qB7gAJuXhXngew2L4LFA2UmK5mVSv9uE42SzNsSRLPXqK32JoPBYDpYCiT3kxcWq1rzcWWjNax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L92PR8sRzPxwVXSi93dwPCBVM5pqXZSBfmjhZqbR3aePXDT5e32ekJ82M7Tu6sacgQXaMvxQAUdfCCrL9yxdzHz",
  "key1": "5AiQzMYqSoKAhvmiJ11bs2ahgSu6bzMX3JzfBLm66q9Ruu6oarhQ593wuPoEGmVP7VYRRpBcZGPisch8RqurQVnZ",
  "key2": "yyr6xLa5xrZCfByVTmpW3L4P2Wxm6jPHdoy8SzWkedMQwjsbrcdjoB9N7akKvYrFgKRb7LeRuTEQ1hJHDvv5oDZ",
  "key3": "2NG4CYNupWVzNxQSgamUYwPbqafUzv8ZbbefdRFnZSLp9ZWKYEHUbXRV1edFRHY6mHfy8ugnKoWdFgba2VT5dvzd",
  "key4": "3eNamHPLrsVdWJ4FMu3AwH3kxdjxuaeo8uWQPCbFrFa2eQ2TAaWLhaNErtRNiPdqkeke36a7Q4wb3LDA2KKXup2L",
  "key5": "64CmLq3WmpKQfWv5XcKVkXAE9EuscFFC7v7vAkjguoxsyZVR5gCYXydnCupg6V7cZmAvbDUkqf8faYifXhFXYC9N",
  "key6": "4PCuyo7GJtz78FDk4jYfF4xgrYScd3PASrrySxAmYE9ciVUEF66MvZoxZbCZXz6Lv1nvLe6bRhUKnUgeSTK6tTmC",
  "key7": "5p9AE8FJhhVoYoKk84VgS7N8T4V8X5p6WCAWvJvPNt8NSyHPQuepLtZxUhocchqHAg3Rd4nxkQsmQrb2ytTRCEKE",
  "key8": "5W9zvw51waSnkDt5qFxXa88dCmoB4JvZpdNbNndqmYACmrnpEexiPtvQDTV98nvLPNrkDetv1DJHMAGMx2nTP1Gs",
  "key9": "5qPXx7aU4xjLPVUc3LQhpowH4wjDnC3wvyCZZ6ZWpseVxqfq3h4zUVKjfoXepuARPZCpxV6QQ2hMHqCMXkbR78qT",
  "key10": "5u6UT5eaxJDzELAgELNZDmW2mvyL3RbPkFt2vPgC7QHE5DUFdHyeV91ve7QzTpPhHfnbNMxuyzZ2b7Vv5SfCxyTm",
  "key11": "31GwXhoatsNEwexLq2rKJEg6ZSBRDSQY4CLxNSh2eCfCSHViQSHEcSRREVpbQZw8Hx5edqDRa4Wj9X71Xemt4ohj",
  "key12": "56qbVmdPn8yCNH9Q71KPEubwQd3abJ2b2NL99biZKPd7x7q9W8pzkesUN3xHqTstxThmP8H6dbYnpp1NUd6H2xfs",
  "key13": "5gobKfaWYPv5HjpXczMdFjofudWxdiBmBKqzcsPwT1BWH83h4Hex2sKB7bb5DAFDhrdzxAtjBdaxin6PkuHre3hh",
  "key14": "4NWCpM6x1MDfHa1AyUmJFGMATAzg5FSzkqdZ5F3H71DPF4rUDBeiVnfA8AQ27M4mrpUikEcfaF8QgJE146kwfyL",
  "key15": "5rTo7uwshZB1jKWE5kiRP7fGboxJQrhi2NJCXd3ZcyxLXYTNe8BsmrysUMFmWStDYrbv7YXYD7y6iWrQuNMKqA3e",
  "key16": "uQ6aRzVbNAdL53ckFoJnbJQutWwyT19Li3AjkmktbNi3vgwghxt8DmY92Y2VyTaKNv7RnULh6x1rMTHT5V6Rpbh",
  "key17": "4Ab55R3SWiDNbWwAqhiTFMcPUjkF5YKED5LRJZV7ezgHQRtsyw3njov8m4LUQ3MxMyChpLj1QKm8H1q1nNsmuh2Z",
  "key18": "sjgEXTH89fYTPz6Y5SRb8b8c3ps2pVRLtKUgaF9SW7QNa7NhYWNHurus9WfzZGr2XMeTLZbpzYpAAwPMua6sTck",
  "key19": "2SEBkWvMpmcHT9ZQ3ChL1iunhqQsNM5VY8N6N9vKgcgGxd88nYbT5LjaN5GsmKVjuPxTBCNUn2ixhPpzzrPCM3Xs",
  "key20": "25uxiZEEthTvy4CAQD4aWr8cJM1MrrdiwXVoXjMBZtG2CnVeHUCPH5Bh2ZnaJQ2LPsUm6FMpb3YEnMsEveByBd15",
  "key21": "3PqzzVu8M9TfLm7GCUUKDJD9svyxYsnxueT25Az5fc1kGr532y5EPgP1Zcq35qNpaBFx6kNKHKHa253MumDzzrPu",
  "key22": "34X5cBzotxfefwcwjkLCnCotKoDXRJPZbCKxDBSfZsqhMA8utwaFvV8hM3YCS16b5RuGbUrM8mewYFi4MHv6PiZp",
  "key23": "hsH2rSFHLaNtps7ncSuYvw1JmvM3UcWvz7XTU8ncjVwirAZnLAnof2KruCZ2tHjRp5inGTZRuSWFXwkiWNpguHi",
  "key24": "3CkUPGJPXkJENhKnGcqABL3YXuxngg8L34rAGH5nNyZeEVTgpNeHGLcGECTPmdgYjfxtViez2oL1s4N3t3B7DzqK",
  "key25": "2k4rnarAGmcXLBsosChECqMU5amzjcVtVYs2bSxgeRCz9Cfy3bMCvmgr13K1meHDHR4sCjM3Ur4b76pc2G1fjffo",
  "key26": "nN9bKkAAdTxTYznXX1MHZ3KqZr3gRoMKh3wcF4oNtbcvxdNs9VKZB8m9PKQHA2sH764ecBDYFihUYqeJ9Ymmzxi"
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
