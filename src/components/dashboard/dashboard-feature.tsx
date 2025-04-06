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
    "5ZvTtee5qQYEvaPzWhwYY8MAHvaX3VJ4WZvgQLYGpgEkZzc2c4CaG32E1DkfSJfW6UHn6CV7CFer4Ld5D73HuykS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y7T4uWDED69QHfcahQ1azriKQXgNGRgbFe8AputNe7kefNxFuwyAHsq8a3hAr9K2TJwBLLygjqNvwbrMt3CBNNP",
  "key1": "6MaAEm16pFZnJ4RRi4zDE6jCFjbzLFBynPZ18kqV3oefiExY4ZECxKLkLmqHiR8hrKK5ptq6db78BDJe5JEsMEN",
  "key2": "YnnAmFH8bkb9x2JH58VgErG6YXRyRovrvKdqc5CT7mriJp7cVFWoe311Dx9nZnPyL3zFBhbYSEu6jg39CYU5nRm",
  "key3": "S51BY4iJRPTY2K7ccifLkkptW9sqhwW6cGzxpXEetQYzSPT9PBdb9Zg6ci7m4vy3TBH4gb92xYuKMSA29vM9VuJ",
  "key4": "2gnD1FmciL98iTTazYvodiM1pec81PzVX3UidMNsjj8x8gd96zu1bEHEMTvgrG68P2Xruy6SCFieqacSuHDrhXtU",
  "key5": "652Bsb7uc4DCaYAkN7tomLC3hhpnMF2msKeNEQ5XnQJk9dkKQF8MvLG836DTahEah6Xrc4727W8Em1TSnNu2xQvC",
  "key6": "3TPXMWNtF4a411qMD1hcyR7t51kZHgrgBNYy3J6K9LHrekuLT22DsVCgLMr9ViamcXnZXUtEPsUBiuVQdyzu5DCZ",
  "key7": "4C11wFEc1W81P8TokA7vYqrwATkSp9FqBAxDEXzfE9H9dZH5u6cXsDALNqj5KeQqTswymp3JTZxmXG1o5jxtFTVj",
  "key8": "aK4paddu1UZCwqEkpFDDrqsQ8YyVS1ssPRJcRF15GxHAK5Ka1u98gEqoUHRC8DAbAT9ZFGMcxnbbWxSr8RMJwp1",
  "key9": "4wLedgaE2ugitagoxuzsfs3wmkcorJtutFC7feB5KveyMMCKPNWvmY7Lgw1m81tMRNQRVdf3scvp5jN4vzz1HwKG",
  "key10": "2ZsHTuAJPg1KcJBm3jHtAipEK261MEiBxq9d32LG7LZuicehXrua1YT7QkL9vPvZ1EwuPLL78ZjJ9SjRxMtZDRd4",
  "key11": "55FfdjpYnUKT8xkkCYSdwc14ZX6r5TgvzpjbtPfhr21EBQkrngD4zkAdsRmA1iNPnfmTzTzaTr2WitTaBnuGZof4",
  "key12": "E6jzVMMMAPiEnTc6qES8nEWsPLfFbwFY9euZyAtQBQuwzN6aP2usg73eeATxC1E2FrDb4jZaQohs1Csno3BJWtc",
  "key13": "TcYUkNRHzUDFWdgXop5ryecniwtU62UjhX2r5yXoFgQ93j4ikPcZeKQL48KsARckrJfcKep26JsXhBURbn1yWrb",
  "key14": "vVAAhz6CcHj7272vAKDXmwUYvJG1LJ7DTfUzTGvHZjNRmqfSh2ekCRZ1n3hPt1tGfrKZh4MafQYeQ41JRxsiCc5",
  "key15": "4r5neVZQHhd7e2DQDUSrMPjt28cRb49vdouCheRsz9g3kjHTBv4JwL69KuNbULiWZzEZZx8Snzoh4FdSf4As5FTY",
  "key16": "5XhHGHQRKXYb13SrjJHhUHKt7rhrSTRGZRxxAU4hS8Kb5yjatPJZBL67hcUEzg4ykfnK8oYaEHWiJACtTdyyjw8H",
  "key17": "2eRUtREA2XUztbRTyCpb2UU97S6Y4cazEaeRkARY2baXKcuaZs4C4X64vWVmqzSgE7CHuRE5FbnHFHFAbZXyLuVo",
  "key18": "LqaqUNnfSkfC2QzyoN6Qev8UjeCvAJJcbxZiEqC3oZXHAongmEoYUiJW4EYWC4owyfg5Eu7Y5iD6JU9mrCeExwF",
  "key19": "4t2g3zSu87wtmtm1zp4rcT65cHBBMNWU7S1pk5bqVPsAnyDpE99L3Whb2xivy5YAK3677hHPBSyEDvKmhPvEGgy5",
  "key20": "2Eg956K7LKTqj1hzi56a4HfZTyPXEzXXbj1Ry3MEw4wzersyrv4YcEhbjkQwY3UUC9n8MMxH3E5dciLJrca9mYjk",
  "key21": "4acC4UnSN6p8xwVgY3iUxdMfdutRLWShiUUgT3iNuxf69vkDHkH7pZX8Sp6XsPdnGZ2aXCTiWaPkCYbyaz1DqZWC",
  "key22": "59uERb8hcizxJ3Su3LkGnzosoarSDwCKtXv5a1DmQNk4KE9KAWdux4jDry7y91KkD76979bZQaPWo2WrjHiky5WD",
  "key23": "22fcHGUBiubFdwMy6EUpSgkgDSNytJz4RwRvXjjL3ekP5GXqnCKZYNvtjuPtCa5XHyYC7XeKSBsmkbAQbXkGYuRh",
  "key24": "4ZQMGs6iZcN7d7EfnkBimaeDN7hEZpTqn9QQfoN998X17Cs2NK13XZ3gET2DPiYyuVHRChxbuXuz5pMGsDNbCeDw",
  "key25": "3DSUcvjiAmDtwKoTq5152tPASPgrnWpugubPPcZ22NkKkzwdAemyWCbJa5pWVJ1xJ69vpZ9kfgHRYtn5RJsGPwe7",
  "key26": "2GfDc1sEh7QqHdfTLsJ9G3WXzytYvaTznswQN5AoLbwgKh7ouj2imMG3Gqqumjmami4c9AWJCiKd5ks8nsERuNqn",
  "key27": "3vdzvXAGmN9WuHKBaoRRdSpH2kn6piuHhiaxu8bQfcU6hpwkxQrxaM2kM5MQrT7pt1SRzzP4U4KDRkWYzDSJ2w1T",
  "key28": "JTM3uCYpEPhSPCXyL17cZ6u5yuwTr38CqvAx1iZd5Cza1x9XaKuCwdnZT2K4LiM5NJsy9rRq16N2KToTs8NjpFH",
  "key29": "y38JKEC7WJkDLdh6iGtQtfofsRNUvYC6U4VL4DC2fV6M1f4dK9m2WjWrNGx8SdoDqPK7L3E1ZveaqkBynihZ4uZ",
  "key30": "5suGjcGrLNkQiQorNyh84rPgYGijomtdTUdGvbg7qRwzRU7QXJaUGKNPzXNu1SWPzkwmigSGqGxJ3315dNRqLeH6",
  "key31": "5w6RaWi1f2jJFv6JgnCgQr8qyLPbeP3SCRsZyzx7VKSxTgiqQEhWaGRrKy3dGzZoi9coRu6AoSUXsW2Bf81yU7mG",
  "key32": "EkFpJkFd1uJQ2AbKoG3bHSQRqRLAeGMvdhy62hhKrFgt6TD5tKda5MQpE6ZALxdNkoC6hrzw8Dw18TbbqFgf8ZL",
  "key33": "2Wv6FLAUiQ5c6yvZvBcPWBrpLCccUN4RaS4tvmhxprd6KUW8SmHkkv7bBx5wEyDoJeeee8aUxqGvputbkfr1DRSi"
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
