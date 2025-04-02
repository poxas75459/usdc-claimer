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
    "2ejoSy8xn4HfcYf5Xrr4PHB9JpQKP19mfZLSiMu6dQYbgE4fTQCzwBHwLFhqGhUY3nufH9YKZV2xjvJoE2MsGPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dA8xmUtqJBEJdFDJXSn2Tp28MxYdHoqwdwkocjcs3LKecY4bWoUWctvd7kc35wgVscUSXD5KkBfxvyKGjLMpXA4",
  "key1": "63csWUk4fNP4rZb8gZWpk8WReyrjXNgSg2BKowbHv1rGw6ej294DZSsuVorV7H9Tv5tVMe1y2tKsSsa15Qe9MiV3",
  "key2": "3AVyHQArbUEw2FsRewETZiXNC9xEkoNuasUQMMgEtvuKkfpCgFA1HqsmapEbNWBrBuWgbFiY5oQkDccr9yHcBSFd",
  "key3": "4JEPAMi7zVCz2FS2xNFaKB8y31wdghcY6cQxgLXo266cmjjnJGAkwhBAJHkt6ewz7KGb6WaJ9uyvWrTApKqSjjAm",
  "key4": "2BUye1ZaRBi8tQWHSTomdxQTADB1YgjphyWCRnp6PcBH1MeaRW5EPF9wnHNyn36QoteyS4fcB6yD7MTkwfi4ief2",
  "key5": "4qchdf2Kem4omrqm1zVoKJNJpASKqnc4bsrbAnDMqYgDymos7yHM9nJFZriJdHTVP2kVwBA6r2MTYNfAQXc2KSkQ",
  "key6": "5oysAxfQoWmYpow6zruJH8WGEU1e35qkMqXjKhmNR9HZMdktzY9JhiXc9PsJgeCJNP2jFk9D3KaDJh1qE61Jwe6c",
  "key7": "66koTujphmyiVsHDawgpjbgBWqAjFv8o6j4YB6QhGKRfhmAHwCeVNeHonW3AYUSPDtaQViFGTEAn97w5kP8x3noz",
  "key8": "4qtSzMYYm7Jh4RqyUuaNSXWjQCLqWZN2YTZjWhKmfDzkHagevN63nNX8oXYredTKRhPmgiZgbsUuhYHTyTx2wHKo",
  "key9": "5Z4xLw6MCEmiEqXuUV9fG9K7zy7XDvHuJKas9zrALfRUiGpaDrCvwW7RoDCP9Vv3tQQVned5dhKus4yuKwGhW6wX",
  "key10": "2wNwkLUPUhBZmYZf8Cmrg3k2Ftkisdk6hFFFNBo6RFzVe4V4ihxnb4LiuruWsCQeg1dDdNreAYY3oBYHrtan6MRd",
  "key11": "63wQNEJzyCZboJWYTDYaGB8TapGhfertpkEstEtn56EM6mMMmQapbm41s43rWgGDVWvUteQfhjcHWDjGTFMqnMGw",
  "key12": "2mNA4vhJYQdXBrgaG4d4KJ8mZhQqTE9LGGNBtcuRy5yTuu3THJh25SgccdTDBLu4Ny5We32UA4QeUL2yKkBin1wu",
  "key13": "mb1sCcyyagNrDwTfBcELNyyQtacDNuv7ubAqxvrVGM2KnGaPNo1LEmdBAqcJxDdf8epzQa1HLRDA5TgJNLe4ozM",
  "key14": "4VkFFyPaPuFVbrfqKtr1FxzByqD5uWLminE3Rdc8cDnkk7AYSs1HR5JFKDquYrDw7c3TN6vBiiyyeQuCydnFFwUg",
  "key15": "42xqNbNRpgxFtbA7L2fPXEPhGJkpjX8v8m1HAFRZ2RUet3F927oSPy4srsB4HUcqz1FWMoxKzZJ623tSgmUA1bhW",
  "key16": "221F7na6zhYz6bheHPfzgeL4ZM5ow9rnCvG5LcTETy4MLK1SZgkhwn4hDfdCwb9tGV8jpnSUgVJhhsizArotw18s",
  "key17": "3JBb5hSDeUduzYZfk8DjxXTTFNgQq9aZGfdrDz38VCrWe7Ubo8SNL1gKSRUNKyzcqjTrW9Z1zKhFAJZyN4MmM8Jf",
  "key18": "4AmRZSEp27gXKivXrKfNXjiMKQXe7oXVN5uFd7b6WJ8PaHwqJXR6WHYsbCGc6Xa838S2MDk1jD6JtQV8Ts5hqhxE",
  "key19": "5fssZ6VGCVkTvcLbkKmPQpZJTAtfdKfUVArhj2FTuk5iKkdqVRt9P6xVAuDxFMgw5NUDeabR8MGZ1fFgJbFbnWWs",
  "key20": "44y6VH1KbFHucTJ2bwWNY2TryR6hkeJs41X5Pymzz8uqVfxqV2FSznCavnQwm39GGybU6PjhcA1jgvroRjJSDzyV",
  "key21": "5YJ4HHMQC7NB48UpbyCCfNnH148pfUdHxm3dn9j4ndQUkNVVwBWNKvTkUN2dVcT8KUEJZ9YXzg7W57UaYHUhqYae",
  "key22": "3b9LHR3acAfA2myWKEeUTSjk88LFSCgjLz18FBMTBwJSZdeUDGt1wdsujTDu4kpUggjNH71HE3FRt2q3W1j3vJCj",
  "key23": "hE7hAtu48x23RP7rczjozZ3EFkcdKDt7QHYEt4PxgV8sKns6duzULu6s3nDpWbFHEvCcXxJ3fC5WKxEHGdnkhrU",
  "key24": "Gop798fwJmEau5BoU6LTW6fKHXEYDNYhXySKUzozdYx5fYFykGX8vwbwf4RE43RqDEcW5CqvZJrta3n2EGSvpUS",
  "key25": "4p7gpDNeKGiMwT4pW7ziVVuvmFpfaG7t4QauXNRVjD4tFfcSzsngbKgRE3UVpDVbgZsf2EKnXoWMWM3bdqWxTNx3",
  "key26": "51pB6PSfDNyMvjFsy7SrC1be77ag2JqQ95A5iDHuwAp6joPT9b2E8pTmUytmut6vKoW95udbMoWVrcPpKNS81uNp",
  "key27": "cHAjXDJFYvrRU4SGnx11MeJWwM3aipiVTqx6CQx4kpptoMmCiVVpMCJdgkMtDdkPNgt56uhWJgFkW5hGMoEP94p",
  "key28": "AiTfRnvMdvfYANqNDVAouhzeyEuMz7JWequogHf5KkP9t52BDA4HGGTjJfHCJ49as6yn1hfd9gLRjeLVQGuMCJ8",
  "key29": "STBnFLcRZy3PShwkbf5fNF92wBHtT9AaFR9wLzczNQsWKL1QbxpsFCU7VKTTtWQr6APKqPeB6v3gygxzWXbdvRe",
  "key30": "4e4arQLKSuwuTANqCFbRkXB2WbUWg2U7D42SiBDuczpWLUjSszzkepDcNhmRcRySp7hg1xZZEtoHTPLeFk5keXC",
  "key31": "5qcFp7YwzEMcDrHC82wMUHLvaUk431fi3X74Rnvpzob6oTBtXKSWirrC6DiBwZegw83SboesVFnuAJJYyYEu5dkU",
  "key32": "3gR8ASSpnfPiQQ7c43XuuYvYmvxwQDRgAAkR46dVJ1DUtXkABDo4797VsubnGrfd4MUve4WUsQuPncbq4JTZQWdn",
  "key33": "4urBUj1mv3L4tJESJQN5nTfdZYsSyZNoceH4QHEQDVwe5hKKq4Qb3o1gfJYMdd7q9KwXC32iGxcxwJU44NvXK1QX"
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
