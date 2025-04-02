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
    "5ZcStG3kWLLk9gnSqG4hHZaMfaJNNvKcAgpLqMSQE6TFNG6x6uCt1QEdJDxix4s8eGUFR1zKkWqikXvd6pTTjmMa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xLLEofmKNFNM8dgg94HUTYh3L7L7TDycXHYqAnk6gpCoYLFDmgq82JY7LPRw9GHb8dsAV1EVSb1bjD3gfPJsbFE",
  "key1": "2HYYrhNe2mERB4cKnP1Fw2JwNvfNkHWRvSeMcNG4mFScen5fjcd8R1DEa1kPJcGNVu1XsuGo97TkesxHyHtSVrLg",
  "key2": "4owxDJ7UQWzjk8vqFanxv64T2Gm2eaMDvknRUVzn7KzouCrLeB1ZsHoii3n4qjk5UbaEmiKUbiP4oiVjfcEBaCGB",
  "key3": "4GSb7HXikd8UcCry3payA8PqUoiLqMWMwRCa4JsySAR53TqE7ZwLTfyPv6dqxJefcUjhtT2WjSDYYvvkdp9kZpGf",
  "key4": "Pd4LQZB3XkuW4DEBhT3b8KmEHtNK83KEhTTjCSsZnBA94pxbt6PtzvPW9yMBmHc3gMeVsTXPYTUz94rRAeRhZy5",
  "key5": "5nzhiUSqfbKCPQFPXmZdu4NhpFr8Rv2qDbZ5ZqgVFH6rs7ifjqwbbv2utUcB3TAhD3DZgGf3L5zrJPB2ziNp5McD",
  "key6": "2ugfRfRGtpXTU4WMYa1qRALQVnQpwunnUBAY7vEnzp2ixJUe5V93TjRXm3d8NM7B7d7HeU7E8V7rwmCTn9UioLdE",
  "key7": "PNU6YQxQMYDTFWNgqTKvtToqJezqiKSNbgwtm5DxiHDUfJJgqaVcmTKy2vDiXvFoyZDFJBAxAjgUmcD8QMUKHDz",
  "key8": "44mJXHpQtR7VAqdDX7p3FSXMQ2zrrvtsnXroMwoshgDQnWMRQsM2obtSMCUXvZWqSS42YwTD2xSfsa1Dc88f2N8w",
  "key9": "3j2W2a1gYNiyBQeA75gueotsPoFW8NgENWZr75PKCK3xonvM1y1kL9cz2Hd3V5djMLLXf5JfrSMpRsPC8C75Ddv3",
  "key10": "5orybb1srcUT2VgXcQAnBKxgSy2AaMaw2n6cQLKFMdBBiUBPgfA4degNb9WMK7avCcci5zaLJj92yX76AatCp9kF",
  "key11": "5aY3PvTgTAUr52V9dGSeY1AgpGm292RnNPBvRpaMyeDgkdiMCrecK43S99n7FME4cHs2pZFduMBwoDit7DWMM4kM",
  "key12": "2GiBrJpFB8krT8SvHEVj8iPNmy3BKBC91H2TV4p7ujRWqyhpZvrXBCEvt7oFSeLR1JQ8CCNJZbcE4ms6meib44Gh",
  "key13": "2GrgThNNxiSNUJqxgzC3txiCPQjVzrDfaATFkkNYNK1LDRvEdBdQtgps4mzWMEnfoiYym4Hrqcmea5YCT7A81TNv",
  "key14": "563NmB2hGP23VVPsyLHHWnHPPTSJ8bUHXyZQZ6iQVCg9UKRQgUDyvd3NLJkkgxjLTY2GrzdVVu17U6tueDJfNLG",
  "key15": "429Gvfvdh6SAHkrp1LVW1ceXUKtJeqVEjdydBTDWx4coMpeQjPFupxeM3XeL6iw7cjn4UYk1sTfXXB1RSGrE3Ys8",
  "key16": "3bfePEH1zdc8F4UJAkshFJRWw1gtWhbbF5kTCdpicPMzYVoFJSUyMc95gjwzLNadafWB8QBNREeRPCwBCbtbbiXo",
  "key17": "CUeuGTrDXEMot8b7WYqwKm686mZvEuRYa5YFohefdDS18CtTqKghrwdwmj1g6niakNgAB44iECWdAmGXDNKNbJN",
  "key18": "2QswCfaT4tf1GyUMYdnP9hEQAxvAkAbfbHmkbxHUTqAM5p7pYA6X8dpg27q23GBM1gZareLgeacwWabtgstbXjRb",
  "key19": "4Z9MvJBc6qEYxmKcBrvYh1eG81WjoS4ydbXpT55DqBX3EEnC1S8ZE65oJpM2wXViwsDE2SrKqSbs5o8wEthGsiSn",
  "key20": "2Bw13K1bPZSxuyhT8ReLZZ3YmTdgnL4qyhZi9TqiuWBFyQPGpEaHQwDWkVh3nnemVWyrSXhoqiMJNKp2yhcuoCBj",
  "key21": "31CbdPN3ixpQ74MBdVBhUh7RvdwHW1Vw7k3Tes56jeeVA53zPQ544hHvdU1rr2wnPPP3Y8m1WbE7LJGENYvz7Y8V",
  "key22": "53qRKwWDq3YrJQqcTsVoY85jVtNLDVhCm5VLz9Eohb3UwQNYR7kYTx44qYBQpPfXV6rH6arVoSJUf4yTY5hP4oKF",
  "key23": "zcsWSsEoRgR8k2DknTT1gUhjoc8Z6fWaDwrBhHpa2Wvpvo3vSbbaKni1mQWjsESgK7QtJi6jqFbv23AcK6MGzwk",
  "key24": "3nvADAi4k3zBjAwi15KcdmeYQymMKtac1J4DzWkh9caS8xjwPGyTKXuvpDwzoyhCHR6mxJhKgaMBGGZ9mmnmELEQ",
  "key25": "2RaDE2f83zadnrLgWb1BbB5aKmD4DEvFWdSNnqcY958MsU2QnjKbvxx3wNNe3LyuJje2EqdZ5U9xk9GtWGNxLVva",
  "key26": "5xSEpyXbhwc9GcJdqDk68edeMfygeBUfhWe9f9eJa7NUWPCighgcSit8zDw9xxFGmSEGdzNm5KtwdYbF2UXg5E8R",
  "key27": "VsByT9U4r1Bt7axakVG4pHv8yTrBUSgT34TXdBJroCKcjMpBX3AgAn1RuPAH97SNuDaL6KJkUgYzf3EE9riyXif",
  "key28": "4jf3ZeRA2fzUqFgKUmDtVFkfTibtpsEDEYH1m6C8ZiTQwQtP8piRNtG1B6Qv19Rc7JB6n4zvThika8Zt3rQrg6MR",
  "key29": "26gWhhhrkidDLU2C3ikCwKDDXJ3NDD8xCHEhdTe3ceG1Z6dD94rs116LH6R2QwG1J1eVEMUG7G2fsMmUi2Yqnk9p",
  "key30": "34zDzUh3EmJwFLZGNRD5k2U7zHmzHZmadr38ZD4VGMciNeCV6s7m3jo5qDorQ237CpNTVqpRhQ5EaMG8WVRxfgSU",
  "key31": "EMHPcBvb8Nco6csxj1mrTjdhRFwH9wtd93S9sWmeLugxMJLzVvFtLC99ViYcasqkWWpw7YHpR6t6u98ZNAV5fpM",
  "key32": "6123BNn4AAxB4GwUWS98Gu8qPJbWCyPpoLKgDkdAJgE3hLBey1iUGZcBwgL6vZ5jyaaTmiQinSdawrkNFBo9CsgY"
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
