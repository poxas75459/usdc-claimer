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
    "2zicM4hdrWGhHFbAM3ZjCaTZqYD1TzxFM1tzzzUsgzLPJfZLmJrs6k7BzPoqGf9969HudDX4hUfttq6WnEy7W1r7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zVouXNqQNh36DMTN2tK6LnQXcZADuYQXUBYfzJh6CKwFDJqCwhooMVKHEnRKu1Lcb9qkJ5KUu4LvXS3z6AXLU6R",
  "key1": "3r82yuJGnbZuXW4arveb7HxHjAa2sHMusLvc6AR7rDZeppckfDQCd35KwcWHBb7iaKMsz3LWZ2fPsiX1hvS6Due",
  "key2": "4UMnyu5cvuC8aVdEQKCwUqTaegcLE3psGdiBctGvYv9ibfGyfFUZ3PKK4NXEPX6L1j3f2ZHn4pobMDz1ZXf1pE7S",
  "key3": "2UnUvCLAHhrpKKXUTNsNfwEBZLX91eMqijVbEn7soLCuvzvnRyQ2U6TaYeDcRrkmups4knziHfnG9bGPLqEVU9CK",
  "key4": "3BkFgZmmamH6qEJYHxz2E1AcVCG1WmJE2N641HswHCydDSTDn1vejicVyp8t126bd9ss8v17q83vLzt3gufeoq6U",
  "key5": "3yJj1YTRacV3YbZEchKth2S1Ai6iWRXKYuUdbBswug2r2nLrwGWcuNFgJdLibQoJTPTnsQvUe2jQTiSdnvjcR8mK",
  "key6": "t8y3nb5uMss9q6ejqRcajaqYWHEseVZfG5o6Agdh15zFjVHRFSctwZe7bjkiKw4kaLCccZik4ZYvR8wbM5tpCEb",
  "key7": "3NkvMvyKCNEqnQKsL75EmkJrhMhWZCwnJmaHWNfy5V1FNMMBdLeb7f96PozHKtX8XhdhBYkPv1GRnxcruia1yuCG",
  "key8": "2vsiETLV5qvK12ATXH6ptXJkK18ikcPj7DLWaNuZdx4YEB6DCSVEPetjZ7kJYEu3FzJUc4cnVrD3WbCxEaic8FEQ",
  "key9": "25GPVuNQLZiC7wa11NJaNXmN2NYNKyCdiAmDxGr9S5pWwufMZHwBHwTBrY1jC85fWAvxxqsDoMLfUveKf8SViXkZ",
  "key10": "PcMQiYFzfrMs7jAkNyjoSrCeg48tughA6wUBtZoA4rN4eBb3VZXWwz8BUSWU3XAu8qNNX3dbvGMKt8fD2M9fHBi",
  "key11": "beee8oGHj3feUutJjhzZBrrgX6RjyK68XcjWyDJeEqUbRrRyf7rzSry5k5PNjTVdKvotFPAFCZ5hWHgnMRq1914",
  "key12": "3RQgnE35rfbEEVQjHKkaZvoda3Xr2TbBJbxP6dsn8tkxT5TVKXF9f26cYUMjBcZbyqBaNGHZUREAYJjZGDNgDiCC",
  "key13": "4asCvozMr549dk6ySU8HsAwNrhk2oQB7r93JHnb4t94Z1C7bKN7iYcc1Jrfrj8Dcc4za6w8tk2pWSDmb7xwyd4vN",
  "key14": "2VDatH9EKncthpEKgedotosHXNN9zRugWJ2n1buA8TtrHMLjBhgYs3kcgDUiEpydbRnhFapGSQBBE9dW5EvAL59R",
  "key15": "4mrLX8bS3gZHufqZy4o64Z1Tf32jXGuGJc2wt9B6HLmHSdBSTgntoGdff75j3GiDoK4zjKVzpHmdYQzFYKSKxFzq",
  "key16": "387u7ynw4E5rQPfLTdetsTLPHMsBsMDEAQstGdv3qGh2fapbUYKDsGVN883ZH5nszPT8Hs6WVtW4reRKkwk2dHLT",
  "key17": "3ruXZHjCXxqHdMk7Ko9atZZAmXKq6Ny3Pke8JTiEHV5XuMWnDSoJbY8G3yTcsLMSRm5Y35kXMRfMgV2CDKACksve",
  "key18": "123Jcu3ajzVsB9vA951HYkaoKtXyKUrjxRCQytzVzMavhhKVvwe4DYgiRzBZwAWdFSu4ueQPP3pPHpCrtMDmduP7",
  "key19": "4JosYTxTcgyMAVKcFAAUFwVXMGwpRT3DDtaoD7ExW7tkAKd4Wys5KcVSUbzwwFpRFvmqEt9h5GBbYVL3FjehfuQz",
  "key20": "595BogjhGCXV5RNeBiLya4bvbehDLmURwDmq9rV2GP1amPVhxmTFH8LCNYKVepRQvKncivQvSaQX9at7NkTt9t4x",
  "key21": "42S1YpmcjE8FcqUyuSFtiAyDqX4s8FjfG3UU1WpmHCmhnUn6kvFnNs7pACjZq8T7RFLT8wFh8bUzQExPAnhV18H7",
  "key22": "p8UYNNFK9oiXyE9AKbf8FjrdLyhBjNHWPLfkzTVusW6PnorG1DcPFXE3wYP5LHmucG8UhKMtbkbYKDpdAcVVFBR",
  "key23": "JM1noEunJfazxNaz4mYZi7qxuHJVbbzP6sWpxCxRbmrTppcu6646skfYK5PF7xRkshpE3xHXJwrqMFEtLvC9btL",
  "key24": "4vN7dnbRoz373jQFjoUCmmhnhKEmLMHJyJs5kxo7KoEGJ4gKp2r9oWvRo4pBmyXgjLKPBCL85oEBD1vLaqc8FPD7",
  "key25": "3FyGf6d5skguoTnZPkNBZScXmQRWLrPAayzQq46yUfbTZw1gpxzJQdKD4MEzmcHAfaEoNuewKAvmPuHwJXAMGN37",
  "key26": "3zL4NtAqzKiux9K6pgmMCiTYrZyUGvfwHp6aH2F5DwQSTP4VFvUg6xDcZoTWHdLjzJ6h463VMhjPEBgp46eS74Z",
  "key27": "4edgkvzRZnBLNuNU3NS5cmd8aER4LvVT7ywySM7ZqbpGcbAjBegr6tRgoEBHaM38FxS9TBQgFDUAcFDcfyVL18xb",
  "key28": "3ZTMjUTSwBKFTgX6km167jyBt78oe9JVreqxozMVNNpx5bt6Mf55RrF5ChR7972Sq1PbNrxBeKfHKVR4i3A51L1j",
  "key29": "3a7rULR3UEEGFfegKFXxUjqaDaQzxYegpckcwF3RfjpvdWBe1SfWWMH7oJfYBvQrjXrdXJoPydx8cS5ujrGANfg4",
  "key30": "3P1LagShRcd1X1DaZDbQ3eKLec9ZFVG93vad4vmTnFCGGPkisdyzeM8ZEQDVhF2rr9iT7qTTEPfrTwjGW1u4vdBb",
  "key31": "5fyqf6Fj7e88XpPo2jPz4uswAQa2MZv8x1c48dBuRqfV1Nvp9c1NZwNb3RPwBE2ttVasNoLtemZD4BMbASN5CBVP",
  "key32": "ik3SMdKsyfWiPJVGULymGEtvBizGztroVAhKhcEHrajNd8P9KXzYxUEJbwSQCvJXSD6eBAjykM65G1sLSXtRMkE",
  "key33": "3CznS7889gGmBQSwcBrmJmWZCJ99FkSMM1E8howJpDeEAYFMeV5K6DCdJk7c6t9Csxc6qsbMRWXVAMwr593mU4WT",
  "key34": "3mxY9tiKFnt4tZmbmkwCEQA539XoCjdFjm8aokEx41XVyLu1aviYTCQvQbJ7fmG865fLkHsQQit2AnNvqSqDqEgA",
  "key35": "3NMaKHRsjho7RjxmXhnALxitxHzi1MSefYvueKZVA2TCHHJNxV6AYFAHGyoM1P35ZbWmcDT6tVjWziTwWJ2HgNoj",
  "key36": "5zSvpi5c1yhd3axMX2SV8s19XhZZ4J7aBpZFczyKxztWSeDVjrrGXB4n7pgVtKRq6wgo3dptWb7bvCYvUdsJNhm9",
  "key37": "3LZgx9dRzvoWJfb8TrFXyVTucDjSroXTSFPz9hdniMHhqsBtyxjwZXxWKDSYvWzceRH3aDmmTj74ECsVFZBwpgJR",
  "key38": "5ySRs7F4ZA8YQenufht95SxV3i1eavgEBiKZWSH7xYi8RujwcyiwC1Lx6PvEn6TCkZYTfgHCeKhGamN2d6NQocW2"
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
