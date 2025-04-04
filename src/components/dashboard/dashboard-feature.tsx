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
    "YavCPTB4dnUi1VEJ7y18DZ6FmbZb6JwNhbLNHQUGUKfj4EZUAZ6jChmV3f8aLAeJaLUJXDc68QBuNH4xGFJfn4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U3Se4FjTPkUVD5uBseRtXX5ffBatfk5HyfwJ4WUFTWkwokewAn7gd7hXrd8S6FyGdndhgo1eAN2pYc8L82Z9GdF",
  "key1": "2WEDZeFxRJRbFAYieSLNUuaYBYGzAZKvAjj84GCkwECAwMZg6tihPZ3acBM7t7WtJ2nvAe5S1GPn8L1H6W5moeKo",
  "key2": "5pHkk7GStGF2EkyUyNDXtPgy5mYMGb77g9k5yWEbuCs2iYKUHQ97Paar1JaWHuBeGYWigYu46eLLgRV74kkHkRm9",
  "key3": "2PNDUhDJASpGxmYcbUXXTdm25Q1nr2RRub3srgsEQdiie8fREcS1ufZshvxj934RSV6aa5Va9XDnpqnhTBduaHy2",
  "key4": "4fn6ne8VsTwxXkhGf63JS6rTRzWsPaU5iKqGFZL7hkV3vkEbAdJEP4ARE8RWf2dYxpZArLCQQmFEq1Dgvm4xzJbX",
  "key5": "4bqqg3BjwFoZzX95z1E2ccGAmawrWjr3wfoMmck8ZgN1f87Uyb9NTmPb7uB5gT25yzG4hggYqjujctN2zGpyvmJi",
  "key6": "2tLqEuqvb5omW8M8CoYneNac2cFpzHpquAJDbz6LBfEktvsQ2NJbbXMx8cWNJNFW7Ud4t2cRsaEs65q8dTMiyodP",
  "key7": "2mSxce9yHgqrsnEnNw4qJ3iEiM9PCKwVtNmrXoVDMixzbhSSPkr7jSBZNkLqz12cUna5L8WH8Z4vusxwxnNPXAr2",
  "key8": "4AsZgiAxSiBQRb54vgFWfvqYfbeAYaHNvDTSBAaHU7NUYPT5rxdGbNeByqyLbSkNyeiY9EprC5tNDkbbxUDwZC9W",
  "key9": "csFrUaDLfKtbQp48pFnSGfvV7UYXPyAg8WjZ29dQ3USDn5hWgHENASubbAmCXXKuQ1g7NWWdo7te3ZkmkQFLkHf",
  "key10": "5THtQKxK4LZHr1ekheT5qoo6WDPGhQWWmNeFcCHVF3ytsmUHYvzqMiUnoQRQqAwKghnBXNZzjiMjECb5a8cuV7N9",
  "key11": "5S9aL4cskTe44p7J22hSFyqpUwLVXukRJ5nBqN6Ee3JjggdiNuomqTqj4ssBG3XdVdjDuKnwhuVTfTLdzms8a37Z",
  "key12": "wY7GUpg1pskXcdhQA4VVG4sPQFkfqBkbmF1g7GxRuJm5itZRboaFjfq5h6cPnrsGuLUnCt7K3GpP2YEacHiwAe1",
  "key13": "2Ev9iiEbERpBYUSrSFpeZhLAXx8MVUcWG31HWppfpNDSBnEeU5LiUGfUF5aSJihRMUmDTErEn2jSLDdozSUz8oSt",
  "key14": "4QSHWFhhshqZNxSFz5xMERYxBTitUjW44Hh4dvWEP3s57QbpZZNef33FJtGyLABjWGCeWWfnWSPLpqC1c7obUiZf",
  "key15": "3VhNDccLbedAFt5isdjvxo3D5ctWwnB23zfxdKMBfG9o9nSDBPwSedkhqHdJGH7S4tvfhkFZby4xc59QzWDM63Uk",
  "key16": "2d3gHdDiFM1RngArQih4821dmXeQuixtjwRgyzMdUHzmbrWS3Ef1qSUAzPyYSme8SpfqtvSB8QoNXMahqPTSYsdK",
  "key17": "5mbQiYc6LkLfHtEgXku2vniGDG9apYEAy9KRGcofatiBwHLFYkR7HYLTLVpJoSZUiCjiEbrtTFY279y7W9dM9Vyy",
  "key18": "2J6y31RJbL4ngYVDJ5zDpD4Fyn5xYD8agMDGEL7FLVt63WNjBBJEewugBg9UfdwGVWt5ChW9D5ptcKteyC1Kd5pD",
  "key19": "3CJqTGG223HPehFAgD5KSpEALdHEGs6HGCixdA1HvYZTPSPqbWGpsyGGWqwSjACaMBJQVF7EXTnR55EgDrHMYEub",
  "key20": "uyDzaDhLDn7jykjL6HiXih9ucZCUXwTiajiw6FDoPT4LZVaQ7LE1TzroSiRUsQjPojkgzTWvWka4Af6zvjEC2jd",
  "key21": "HVCnBfEqcDWjH8VJpDWpjtjMBzpAS4K6zdtnf77YchENqTks2NtZajCDWest23gtYhRNJ3ieFjPvCNwLEQDTWyK",
  "key22": "4WYGfLWsX8uiT2S6sXArSvUQYFFNTzodKW2TsnkNLajmcHUFooQ1LSWdyu1AEHhT1bbYJ32CJS3VV5WokxAMRZU9",
  "key23": "3VgT7XXTHUcD4kpaf3kZDGNXdJsKq79P1oaCSy7nCqBxaAWAdcJA5JQ5kxanBLSyUp4cgVyf5B1CQQ2BRqPS3rdv",
  "key24": "5GnJcnC6g5KFEDqiKHXRZwMrp8BhhxsFkUH6GyZNuZazLmp14cJPTvj7kBQ5tFrQmZdZgriiDKKgF3qC6xUpBieP",
  "key25": "4bTDuVPUjsAzYUnSB4Noj6hBuQpsrgXU8Ar4MVXSRz7rJe7ZPehcznS4e43Npiij4uFBfYBQV2aJ7FSJrQjAu8Ym",
  "key26": "4u2soX8dPACUtge8ceepm4FDLYFeJeURdSgdeU8Tu1gjKYn2S5Nev3Nbm3LTUKR68UgXRGdq7GU4UodCWfqS26hQ",
  "key27": "59yiey89GxRsLdxCmHYLiDMrV8BFsjgyeVrQsQFNsEqDPGbae1cyMPK7TokqbKDodvHJbDDNBWfMwF24mBaAVBhs",
  "key28": "4xphjKJhcyDwVFyKftmcrQ4QLbymRyhxKHFdE4AaJaP1J88TQVgTgbcrSLY5xwSjCvAx5F8qmhfJ4r9GxCpearUa",
  "key29": "4yGF1otUoa9sdK7KuKbiUrJixRLhb2GEMdEQYghnqJTUPfAuRR7tMhqMjLEUNyC1d7meHi13EoTz6WZZ3x5LgNQG",
  "key30": "5V1FKE7bw3n9vWaoBywo5qJxfVwxeQ41CsYiTaKRfSdzQK3qy3HSxBnJJucEnWP7tiY9iJzpdEVPq7BjuvWqAH1",
  "key31": "45qMLe3amV5mDcbhHdcCGqQWGRv6vARCAv1xsLYocBN9qUkMKgq7Mzqf6kujayH63FgsNyMpbtvKsSAcH9w9i3et",
  "key32": "4t4TALUEa4Q4joCRjTBtRFnV3UQDdvqRSshwMKARTPWgyVMcYzgCJWdpsYXC2TtnF8424TXebsoAwGdDAxamRjWa",
  "key33": "5vrxLx4VodnKrJRYY1Jkm7hWU7wnUkpduVfK3hEk2onGHALnxRFazYLqmp9kASS5Ff9pob9mAmobeYv6QWw58ioJ",
  "key34": "3p4tDQPnD2xiGAcFAP7zAbUEvGGC26k1MADmYK44sxHmLMBSS9W1ri2gWg96EcasdTTKqrc3sAPDsSCtomweDXN9"
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
