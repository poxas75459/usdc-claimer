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
    "qpyBfqX9ffYrhcHFLouPg237smBtEuPL1744Atyvwg14p1bCEJDSFhyDYLW6B4bUBKTWPm47bzHsoak55n5Gfpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ERxYNq1gTBBGdDip6NAsfrzx2Mcsjdh3wCvn4pcZz1hVGScGKFnCm8gr4pLGtz7F4MLxHit5ESpGiQVfsVdj4wu",
  "key1": "XCqh2gyMX6r1PRocgtKaivZwbKAGZRkPxuRkh4cQFafFET3EVXgQvcuLicg7qJmRVxknT9d4PL5UzWd6unqGqqX",
  "key2": "5RdZ1B5wbhsLADf8Q7rffNQLsSp8YcpwtEAFoJdLQfuj14L7rKSSe63rk6pNUVNc2KtqzH3WYg8QFJeQVkmcoB1s",
  "key3": "5jgqUAj88YTtUvErtu8Ek5vJZC8UsACdQRckCoG5obsethYw8NnGP6MHudPjhNyg8LgoUSdWbDYjWXbxcaCkm1nC",
  "key4": "41x9vRbBsVdNHniUrZxJznKLfLyfkrZPG8YjwtPe17NbiPqx5xoJqTvgHGcxLfGiT1s1UbZUJ2geyLtiaAko6Me2",
  "key5": "2VYKE7abSnUuZjGCF5rtuv8xvSTMNhHaS2TCzvcSrtginb5PWwugaGEKnNeSFg5RchWQuFqYEv6FPQawVWyfiec9",
  "key6": "Znduhy55girdY533NS1tWsW3pD6ckfQ2F8TKLpcR1hEefPjuYS7Tm6z65LeNr2kWtWpqGmgqz1fToRJsPi3DsRM",
  "key7": "5s37NKyuDY3D6qcAygGf83xrhARagkVYwuAxhcyeiGS2e1BfkS9fJw64byzLR7mFECrgrFnSZDUkthWAP8h2SXTk",
  "key8": "64XPiJPQfeeucQ7y4qDvmp7cgQ4mcqxS2md1sHux1BtTbkmYTvppwq1cXbFdZ2C57bubkewuoxLCFSqbykquBCdD",
  "key9": "4i2tAE9v7fgHX9FhFfZYDYmuiRTPaTjTcB2AwyPrUBYN5nNv3PVseeozYJBVXJ3wpZ9f3VnCNW6dDK3DFoWtbU7M",
  "key10": "42vnbfZwJEy1J24ziRjMzPeZzZwtTKVKhghxqQPeAc5rE1UzyvebW9ox3FSEUDx9mFmvh6mRegVCJ5Lpg82tfv2Z",
  "key11": "33G4guPP4j8EVwrF89rYbq114rWe8Dbi9L9oc2PXz9rHviTWdJX5XmAQeYPG6Wt9S6CDN147MCwBYrCVeirQzNXb",
  "key12": "d4HE4tvJsWWX8Dh5CYd8k49kFfBBuuBY5UDQh2VRDVzxbsQ8EGN1nnh4yX4QdNbMPczHwapWtghKH1UFDZbUpHL",
  "key13": "5ymXQL6mDGHZ8hksSVSMpHCq8n3rxAK1fxaos2KcuCGhChi7Smu5m9HwgifGNMJnTWXBdpenndCKffzBY28gxqte",
  "key14": "xwoMKdn1UdwDk7eLJXM9zzFS5FEjCp5z7q68oHyndAAQX8NEadpmHX3jzwqDuSkW3Z3AXAqsbTxzP1a5XdpafNq",
  "key15": "4tGEZCMrSZsZ7Hvp6tJiucW1RoJwzZvA43R4HraF5F2bECSDjgDpPjQi1G2TrUem479Hn4RMSHDMrFBBKCzQwXZq",
  "key16": "596HZqoV22jD4pSVQ51vCZqJvkDrzYYenJXZ3c32vWGyvVJoSDTN1irxfCJ531i6KmBYVYAPjPekw3FXRfwUbqU7",
  "key17": "5A8SdAq93CMYzmNUd6XfCMhxHpxCWxLrSVqp4BLjoayAB63j7NpijneLXjDQGfPyYqv9G6Cok2uq1WomsWpL7rnk",
  "key18": "5XadcaLuLFKDhsUPrPkbwoy8rL6MiVkkgQdAaTJpRYf9EHR6ZK7uy4jj1NKhN1YYcWappVig2mpQ8NfomCXEimPG",
  "key19": "5dreduY8yq6N4w9fSHD7Pp9YHByYwapB5EVHr7vbCHJJ2qVu9yzkfDvdAvBJVx9mQm9vNLjWpUBSEByCShgBDhoo",
  "key20": "4T4f6cHu8R9uVsE2HFrHwrEAM8JepqYC7LuRjSaS7vzCXvp618SgojZzQ1oA7J4ZrN5po4Thx68SMwT56q73Ewbs",
  "key21": "52P23TtfD1n6hP6E7iPnqCyDBST96PRL9kUQacgwjvAvx92kjvCyimWEYPLjAuVaPJGnnzKeAoWaGVAHNNzVSUuo",
  "key22": "4V7bfahTFm9T4ESsNnLK5bbZTb3tT81ycdUXeBK93VaWecoZu5Qh5Bd37fa5LDS6St35wmTNdnYzdtNAFdo5qEzp",
  "key23": "54BHWMykFcDffYmFjS25FwA8TLzQ5RbcDxH3uuvF1ipu561rDSTwKm9E3rTFA6pYZic8bo85sfDnXgxmpobtfBfj",
  "key24": "2KQnVursx81fGhwoZuxPnK6CEZT6peVDNF3kzU934vQgQbSnFa4NtDMw9eD9k7rzfE7qHbDgurSAZFKmkxxSU9XB",
  "key25": "5pLQGfYN1SzmxMZudpD92mMaBaZ93DipNHe9jxXesx3WCCyZznYAW7fSdKxt15XnFnm57wCDYeUzEjMNz3XRNqyk",
  "key26": "4aPGbc6wFtQAyRwxWzWVktRk6Y6kKmr5hHh8zkVpATKtbhUmgCEuj9hyZ19G82ftQvrwf7Vf4DxAx9GDwuqwzP9a",
  "key27": "2TSHzXSYq5CpZYPTe4mTGpQuBnrZGWBzz6QiLyE762PNn1HctCeo8S27qJzwp7TTCMmwj7HiG9xMqDT2ZP8xMkm8",
  "key28": "4RoyAmZfoZ9vALozdUV7cbDqtCLfN7D2dmBmKgTHTTXf2gb4oqW8n7X6HtrCzWyNvhL2ogfdbtTuKGqiiJ2pSX3i",
  "key29": "3cvkn8tkf6PHk5HArqSfmZJDJYE7sSmpJiz9HLW5Ss7wNQ6zwWZRwTKYZdkdTPBacoDkvdpCaaAVkkCevenLw64R",
  "key30": "37343NT4E9LJAxpWbS8tfbj2jtsuJQhMjvVmMhvSjve6kgavzDnZw8mDeQ8WgoHCeBuArfkpLCnFnzVRauXCvdN2",
  "key31": "2frKA6eHGk463mCrsgNWTmmoQXbVkbwXBCpst1umJyZ8ZQmN6jjjtnonFu96sYSCWHpXP1PcPr5PfyHqnbeQwQYC",
  "key32": "5bufckMFtzY4jdqrgXPSj2uaHjkuUg8jXfMbqYVAPUcM36FLV1svFqPLFLfHYLXxZoAZUdLKhRJ3wWRugXyHyGDP",
  "key33": "5TaYQsGsGomPZrT2sfwM8FstgBsrXrXTkxi79Qqtxxcg58fKBd1cgNnb5AJA55uuLdrLo67FKMUwVANuA8U8uSpa",
  "key34": "3dDU8JBnvLvCHSVbpZxDbLEDD51ttXf9poNfJdnoVvui2P1tngrAKKrJsr1JmbqcqC4TgC7My9iw15d5dqXY5Ce",
  "key35": "qTfAQLXb3k4SamC9RX3py3eULvJ2AAmERbCVRdsAkhcnkUKQaWi2MbpFSnrKTZU1NwaudqTKctzr9mg592ZSVFv",
  "key36": "4yb17eduVdHd3SXk9Nn34bL5zaeEe25s7aP1386JktLRYpDbuiZ12Uqhi2fqY5WP5AqeTQfxX6BXAN4vySCZyfE2",
  "key37": "rvrxsDBFpWHfAvFGAuH3E7n955DdsQWqaM1d1qk7e6AnCSiHWCXXuF5i9wCZyzWAUkFhHsjCfFJW1ZGf3KniA22",
  "key38": "5ZCvvxnRxAJEvK5XJBWAUXQ2Tuv1jjk7m5fSs6pzrVYRCFdp7iqM9BN5YiKVERkKhQq8pGWyYAYGG1pcmpJVP9W9",
  "key39": "3ouWSKs2bLVUhkE2a6ZJaVoWZqpZygHdh5GH8D1K19gvKHcCK1xUve8FRckMUJesixsUJ9RMy2s8q8wDG3vw178E",
  "key40": "3LGjJojFXjGAe9JaSJjkH68VD8YdyagAsGchMwtUWCkXMkz6NcpG1BuuUHuDqm8RoTwBSTryjo4xRpgkjinjWeTj",
  "key41": "9tNRhWDEzLbBCtA3RrxByinV6C3tBVmp6MgL3BmFypTjLUnoDJooFEYnDYRTyjkAREBEJSWCFNZcEEsQxijPmCf",
  "key42": "2fXysiC8w8gHSqnTDZUCijKSuQDz6TFzaVd2FRtkeNgYLhHfFRAiS9yWW9kbxv6DUtbEimTNzS8kMhfK7c2oFCYu",
  "key43": "46Mvk2QLRuW4p9QEZSMoNdCY9DNHEsMVyvm8bStLf2f5wMFBGHXP9ZtqCKs3RUKwUkVA7LDXjX2DRBjsgqYh5L2t",
  "key44": "4huwjKjAQ1NcJKZf9nj51CTV23tDTzuGY7VQW5J5Nv4t5RCmG7f6AiLN8nXpVajsAhGeQxyASQarv5jMd2ahiAq1"
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
