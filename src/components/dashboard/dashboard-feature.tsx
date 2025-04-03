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
    "3UaW4pXEPeKzGSp4fDeqnTQNbzszgwX7kKJZqrp9kKi4cYMjTAtPzYrWfA7iYceLsMZwaSfTNXf4kQkspayJ3JPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bEB1Ht5hUF4pV5jkbNGnuFeGZxx8JxadxQo18ma3CAtWMNd9zKHiSG8CZcderTDVP4f2EkdFnSw8yUDVkQvjnZ1",
  "key1": "2pvHJKbc7hFX3hjw3qmvpQWe7ee4wsF3x6rRx35VBLLyPyae4QtATaVF36J96wGzEJMKnczoYkxqKDv72DpqhHXg",
  "key2": "55ZenGiiiQrCXkGRzTmM6vAruyBeJpucbDv4QJTGwzgXMCPTonS8trByTFQaqLZ4evjx1TVXCnWE8Mcus8prf72J",
  "key3": "5U23KUTKXBqgtDYk6kPCbedtckLkNrna1qBwjuTSNZZCWF9CZgfwD8adh31G3kUBcqSQbciGGV93PoKPJ3E9zD4Z",
  "key4": "3cjApKuJPY15BRovuLvM1FHZ8EhmPnb1i1FHL3528dCAWkqV335M2xLrJEPhzae8D8PPsMnvJLryHZEf1oN4KNoL",
  "key5": "4JM8cmE6nkXo5BdzSGncKkKU7ipVPeYf4aTVB1cCfpGp5LkvT6QjLwSw21xA6JXQY54yArydWz7ZEGf7DPiw9AwU",
  "key6": "664CRoTzMznVhPd4EV43eJZB2Q5yBmwAXBv3UGbx9KmT54sfi9ckFRF6CUKDNorHVLZY7PkPRvFzYfDuq8CGM9jg",
  "key7": "5xwmhXivjSE4tTLY4M5dZteD4Q3PHUnCuJF8Bj5fTYYUGZAF6pw3QtVEMyqQsFScrkcYaQvqDp531yLhVZxANtJH",
  "key8": "4s9r5RMcSRqhXSAGXhPPUUihpQB8pxF6kRYaUZiYShbgaC7maNYxVV8DxgbD2wr2RghcWirAV8WTHu9mgK67749k",
  "key9": "3cMkLQjFYiREExifse491YzLF8Ri5hpAEErskAJAkARM329hspdc8LSKTELXpZNYEiuKkNv4yxdDiQwDD16KJ6XF",
  "key10": "UyFkndEUrL2tZerB25rYbAgqVeC8S2jr8NZuqEr9DTNXwz12BEfM95tujwYknLaTPzT6iSXt7BtG9PzKFAtY34J",
  "key11": "4tV4xAET8DYd2GqkVtk7iWEaBYxGnA5noNCpst1tdEnAGYfMKoAjSn2FwX9YEjhYjpNAQdArsZZnYa7AXY8nfVPH",
  "key12": "2jLESukB6EWAQvLieS9Gb3jFh5jVw1TAdd32rAr1EKEPZifVVhbu2gbMNhP6cuH62Yq5KYsRGRhFSUsJxrDdVgcx",
  "key13": "3w7U8G3x66YC9BqXEhL3zsRmQy3XxG7kcHEQvoseLq5FNQWLPXgNVNR2RBu8UXmGRYCkyYkti19iejuauDJMjRsa",
  "key14": "5r8xZbo81H2amUUFDvXCf4iWqTHSCDNR6tifrEzGfvTomiSy18wHpVGrpuSyhvdTxc4Zo2vdroHCZ4Fhj5uCKkbB",
  "key15": "3Q63WzGbWu1Us2521rkN4y45HKNxJq29XZjx7NwopGoqB9wbjjZgJJZ8KMGa3TKKbd2B24nQihvMTkynewgey3Py",
  "key16": "24tRgpxyebkGqWmDrpq1vqs5TtAmddNZraR7bYwwZLsaMM3dq48mHuz1cFykPtMvuzHrNayogx24R7E5AocZYEi6",
  "key17": "4NcayUbWh9mXn5kxmX7GBzL3XhqUJMHkirGWqbXjBeQmvmThvLCTUCnkZV8a7npogrL89rqubdaQ23DdHXyoavCz",
  "key18": "ApLZeSJ5pSguU65gNe3MGCF2bc6b416RZaeMccyt6jEgnYEwM7Rar2yMDtE7u3M228ANhHanA6usSwZXPNCg9L7",
  "key19": "5MqpTwB5yfiQwRig38y2UjkTzcMySpq3bZtxev5PaSj9pwissT2YBV2on2HfSgRnRcpWXqTSc8jLVYVshBWTYGfb",
  "key20": "ZvDC3nTSbd9UcmsZtfEonivS5US5nXMqvJsTCQporzCQr9sAvtkoPAyu7GTfsXiWFi985t4sAZM94RjDJrGCHzn",
  "key21": "4h4TKtc4tmaf462euV5r8N8UqLb6G2NTSnK2CpZL6egg7J2wqw5dBzC95rocNoLa9Q2J8aeQJstLnNauL7ZSAsYD",
  "key22": "zJJzzHoXR9Ci3umMuQASrSLzGN7ynyqoMeSdEEwbYuKeRtnaFJM7ADxfzWL7Fh7Ngw6HUyw1znDJauoJGnxiXWA",
  "key23": "Z422LaCKfE4XeDmnHySjhnauaN7SpYiix2qkpbQW4BgDp2mg9Bp59pBWYta2JYK3WW9oFGKXjf9z6erjAfUuTgb",
  "key24": "5HhBbhkQLUitoir1FDzQTTALaWNWsD17iroAMfoyuz76bUb1xXqGPgAov9uY8be6di9g4nUkQE6ZgvjEnTewoKy5",
  "key25": "2o5XetvZNQriuYvg3txYxwGjgEwWjzvcrmEeUCPDiKK9kWWhNifacP5HknsqXrQqvGYYugGiHUjB62fq9VRM5zAj",
  "key26": "3PhPFo34FyTLQcvNWqnwvxvz9gTrase118h3nQR8sPMCMKxQLY8p7e8skzZoE8AE1EpXyTNVWHWR3wWKVX3HM5ip",
  "key27": "52tLdTYfZrC2oo14hwDaEhGHW3BYcRs44pWXX8zEx6qHwXCvzGHLEYC4fDFuGcwcJcfyAzwWrY1bEUYaw6nfzaDv",
  "key28": "87iLu9FtkSpsL2iFA5jHgoDj43F7LavHMqehoq15wHgNfMqgAx9aqGqSB9Bmnpv5bXPbPDw8tvm3iJd8kM45vd6",
  "key29": "3PFSiKg9ksW6z8c5BUF9EUhFMvNCuUH7nW7pEjSbqsg9Ph9jujp4Z7F1mfXF9Fcz32b9K64sespDLMRQ1NnCcXNu",
  "key30": "2k6kANUuBUsVj2kekpFsCwjvyegg8wpha7L5kQtM8kwdcjXJSmd6NnZ4fj4nknTK6Y3MiD2fGxBf2Y2KHwH7hSLY",
  "key31": "h376PPcFmZrdXpaeJ2HCwmRueAsWa4WAKAF4ru7umnxNocsdneqVkJwEiByc9c9XBcK5VsfS95EWoZMMT5H18Q8",
  "key32": "3EBuDxSbJokd5hPDLdYqyxbDoGGxWC8kiDGKBPceGJme6mmBbcfPVg1XbxwYMGDjSosQY5TjbGfGTJuazDFoWCN",
  "key33": "58Dqetuz81tWkbtFC7hpW7Mts2pJVdPdPVRaBJKSrtUUvnZjpQ8DRyLS1KSq1jadau79iNTyF9KZAwr8N6T1NYQC",
  "key34": "66wrFGQECp2EG6fZVFGvvedFEsg3PMXXpotbxNVQxBi791G58XjCbQ8Hpsfa2dXw8EMbzSdQKCkJuhG9sSXbUDzq",
  "key35": "WremxZhsYp36DMCVovgp3qcu1rUVRg9kPLL4QLJTkSsLKhz5LUF1Ng7qwS61qzkBJ2L5N3XDU4kqjSuYVuNHnet",
  "key36": "3Wi8nH7vdsEvb29b7qnoj9YmG2x7wtc5mP3a7cpGjotLwd3bCAE24TVpAZWv92NGzTf1uKs5h8Ye91yNvmL8TSkf",
  "key37": "4yK8KuywxidpJh8LTCD8ZpYGxgFdmoqYXrP5X3R1jE4K5Jz719wDc386b6GVNrtApFgqPpzxS3haP3NHwgd2suGu",
  "key38": "2J1RG5w6bFxWWDvwFAwA1g4dM3E9bahQsHTAkVuEDYJRy2ZSQTZqjoar6ZhPdFJr5xMpDUiJgZuj8kBN9pybzWdk",
  "key39": "3WNDgH9vwENhbXrQJBXRTaZrMVsuNgCvmay15pjtmtfgKEDAayEnrfEGJ8qvExQfZciNKhSXBDaFGEizLHghNwiT",
  "key40": "62LpzQrnHwqoF86QdqSNaBNZCSvqLJ9aTXdGYRsY9sUyuR9HpQ8vt9ffzBzYMPttkxPUNV7ASvaqSSQw9nCrf3Mz",
  "key41": "5xuWPgYox6sXMt1A9RyNzKWqJijHRRFdf8ELtTNEzyvwSsACWyjY5YceD8fUWoXwoyEw7AUM3HiwYfT578HQWosK",
  "key42": "2zA87sLionR9paRLwERbcSfjzndWkXK5WNNXqwu7iBER4AxMjrBsVyVoXPPQiBnGWyXsZ8twZ9JwXnQmEeaoFbL1",
  "key43": "4XuMs9iiFGZCkdW43qoa41z1AN5hjvRvWCXL53iECu4xaM8kzoPVZHXFU7axCjEEtPrezutunyZXb7jyyqcbNzDW"
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
