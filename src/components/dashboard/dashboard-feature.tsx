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
    "5niyUPbm22XmMLrmnFhWaFrQWfxaygSB6VHx8pazNdVPQEZjdsymScHH2digmKy6XXSfg9NmJGNbAdhfWyCm4w2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kGG5tKE4qTkFZtUeAyY8pBixrHccWxpJvMXGYapumhHgYh76bswL7XVpuypNEydA8eaET94woYmykZ4uSrBWLh1",
  "key1": "2BQp1ed69QZfe93HSmbgoT8DcYN8hdon4NN6Uv4wez9PsFdr5y4sqdeeuBfwyYViqWcqkih1EJ3ZCYFb2nKfkm4P",
  "key2": "2kV2VZBy5QNSM9rDtEsqjCyz1DymAphjoPDaDQahAzPiG7bNeELJq3iUsFLKw8avhKpFm8UpPxfrbndMLBfF9efN",
  "key3": "2hD6bs2dUhcZmZ85EN1Psh3FC4xEcDMcrHjCYbSUXkrRZeFpsC6BWf4bXhzX6SBSqTZcxNXv7YvSkTz7mHmkbs9C",
  "key4": "5nxabcYnnKNLz8wPrDVAxFKAzVsMUBWQMT9ucLgyHKffNKf5b3CYoitaU8VyVms78EFcVGtFZRyMCUEkju21WMg8",
  "key5": "5zvgK9YN1iTUjWs7th8SXZFgQUV393x9RujWLcNWEPm8B6eRhM92MgJaRbeubGaYd5J5ejMb8FrdDkyhf1AyJNXY",
  "key6": "4eVYtCbZ9HbxJoZsb6A95xVKp2bK8UQvhuUEU2ASKfvmHwDC48yKF7YSvTDDy1TFJN4f2VgmvEdpdgLfSgy4QjiR",
  "key7": "3aua9sq8ZCVYNCfzs94CSzoyV66YhuuEPktoyZBkQVrTYcyH22eBTyPuqUbLqLtjPEUuAqfnRGqrVDUk28soq6h6",
  "key8": "52ZYqtgdczUX39trw1xQJzkH3DK7DA8ULGg3jJE6pNtRyjcaCWXmuKjnqbERM7hEVzSEd3QEFNbiF5SSKtk9ijRM",
  "key9": "2LZFy2WU3yqhnvJieXhykNuGZazeBhomxhCN8M2bU2ks5BXtCytbuQrGbqDDSXKgxzHfv25uz8CpxtF516PEcc6y",
  "key10": "2VByBgHScR5WjY4zRLQErj8h1cotomB4ZTvZnW7V2zeiwjzf5tcJiyGZEVUMRY555fK9tkA9hUWP8DoeY3J9PY4s",
  "key11": "5krqvYK3kh2f5x7Wk2QkPi4LSRW4n6Fc3dw6eTzX1MWPKxN3eHGUHaeu6ckPC69K5taBhYTbhHtJjwb64zUsZkyY",
  "key12": "w7GyWYsKNNPw4URD5x9E8z52P8jbubAzuGw1QM8BXgWoyGauanfbscADjvrjmTPbiENdETpGV6QYZgVSKsBuDJ5",
  "key13": "5XSLwR5wDJr4MLuhYjZicr7sbhJLBAfP44sxcxHsR4uCh8vLqtAmKY39EZsYwKahTwFRV68fLRoEsUBTSkSKat9q",
  "key14": "4kaaSrU5BeNGaWqwRpdTNqCoAYPXEemRC7p9mMBzPE59VXZFRhipxYnP65CgVEDc498YsENXHDaaaabpbqPYsQcP",
  "key15": "quaHuzzGXLSvbpQebSmhcuXEiJXHXeumoyaNhfxVFsF1bUWfMsc59cbAxJw4fbLHwNcyaoGr2g7EnWLaxox6gbk",
  "key16": "2TJMD4qbkiQAspyWuEcNokgGcDxdBga3N6Bp12CJdtTeyHtqNMdrb2yuKYtrRRuqU21Ny3h3kXXus9MoWiMqxCEk",
  "key17": "2UfgraKGoJxnjbgnfXoCut27A4PprciB781dDjZC5rb5cPGCsTiajFTvqaPkcBo4BqTZgAie1nFkFZM3z1fbKu7g",
  "key18": "4EhDXesgexZzepCfNJMTkfCSE7WFCkH37fShVSWhvgPD1dK4izqEp11mnJiSXszNH7rMbHBGfgz3NymHCzy5ZT7s",
  "key19": "47rkohTq3hFdCVC9mEoWFncy5aBUvmx27bsadaKQhRVKHzUpcmF7dQxWZpUNx1SSMtMxe8jFr1FttCjMyT2i5ybQ",
  "key20": "BpwsGhwSmStjX1SsH3Da48eFgZAD4SCtz3eNJ686waDfrfVdfrGdL2BCkrosjT11p9ba28YgD2MawSKQEe5sV4G",
  "key21": "55zXhh3ue9JA25FBf8NBEgQcnYgMn3WjYhr48NP6s6MDgZMNhTRaWN1VGa2pbpQ11Fztzb6RtiZBoP3uGFGZpWDK",
  "key22": "4dVbUd3mNN8FThTMC2uW6YiAppm5dJNegV9p8FHSeGm1SXqMh68gbm58KP8puLE1Xbfpi4Ss4UuVwD53tEQm9Laj",
  "key23": "5ySTvLHUTn1XpJQCHR8xFArj2W5DTrSiGZrtMMwi4L2JKa9AdBC4i8GYTzbrTMkjoDVcyFXUZc2G1bnCBm9DzBgY",
  "key24": "5S3Ew8eDv2zcFv3e4wEA7fbSX4cMHzJgetfDxTc95JmxtHZ2s6yEv2cFg6GkbPJP5ASMWfMinEQgXQeHwQF5px4T",
  "key25": "5rdLmo1wpjxcrZmMs7cyW5KbLCLh36cv5bxq8PYX6ff3QLKTgrs3FTjMoa2zASqafZwsKtCb8MnBiHcmVBwKdmcd",
  "key26": "5h4PNjWqbYZHD9T8QWtXbRJcbCSrBeGuNN97kosg9vAyeDw9wYdxzM7JDmzpGbhUCqSAWpMryVg3k1DGvjjbRj12",
  "key27": "3a16Atm4JMVmgyW1wMA3uftc6xhtiVXKMpho4gDQzeLWs7DsYrLNBSWFnB7ZpbHE1p1ubcSX4maVd6c58dpsf1kJ",
  "key28": "5mEBD5rkgEBcaomQFvJx92MHF2gBhZKd4LUd1qy8qiebScXWU3QQC9SXzruHYgB5z73BXBndcwEWHKrnh4C5QbwY",
  "key29": "UvwmoVaQwJa4m37QrtLX2SY2nCiaVpX22Ay3FpAEjsFjjqizNHLZj6bCmyXwTPfpgDRiQnAD8FxcZySxJUSt7CM",
  "key30": "5Kg2DqtrWZDhcZmmewQSE7fpuwTJWxfrHBEGqPkyHKrWxy34SGRUGy3kWNrcz33r7QjyRWTpHxgpA4hAaPX5pbk7",
  "key31": "2vwPUXEFfeciwSUhAwjKbRsHtAmcSaQPUFuzVr7HUyvAbfanbgvWyMfi9muKYggxBJYmz3zU567FwYXvcer5wpZB",
  "key32": "3c4L3PSZAyLdWttqEE6VcrejVtSvbA6XPvsuAu6QFzzNtmAgiPpPVAPqfzjrCkv5ji12Kwy6N8s1SVMqnidAwcuK"
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
