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
    "ZDiv5rUNTkhRWxe9nCEQVcarm8uzh7gWkkYA8KFVohxiNqFBTSPEUEt4qN1BgrmeJs5sA5vnTqTUew2oVeMySQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8DvaUbSECVaMRmfF5PLZWPYaYrWQGPBQwYG4xbL8inuRnmgXg1akHi8FhHgry5oCmEma4zvnh1juUsGdNGtMq3p",
  "key1": "5nMNLNHQQTdwcNNQetXpsVXrjKAqSoXnLJXgqN72moZSc5uzZAjo3G9PqtAu53XYn4PNkU6qZofBGhBW9Hu7Ay3e",
  "key2": "3dCJBZoPKNBqrxhGSyeyhudRk1Xse39LA6B71KifvKjzsdVVVZAoLBaiAmJG3oaJLSjZ5qW5Dhwzdyt7WqcB98xF",
  "key3": "4NWScfBX6yj9tm1TF6Nqyh54Qs64WjFTsTJvxKRBqD8UAC4xp9QdcFPK9WFzQpn9ojc8RS32hLtGSXPLV6Z2wK7x",
  "key4": "4hTXGUo6DaLaPqTfEJLe3T7R8h9tFLFkKhwvvkVEJpZd9JsWt2czAVeVEEqFfcsvbstXqRPmAxSV2c6ZnzWkFRFi",
  "key5": "3Ah6LnmZsqh1KmPepzJQphSySxiKkHuwzcmbsSogEgCxqroMPStbaTocFt95BwJnK4t1pcfievwPC5hKGjbVU4iW",
  "key6": "44qXjrqiVM3NhdVqXQU2hSJpsgSEmpri4eLnVmWjbRNe3BNyMRVsXF36wryGhNKadxsamSpMdVbm84D5Rr9DSd6x",
  "key7": "5b8wchskFmqaqLrRgCqeopvvtAXjdN7DjZu9jj6bon1AAjR8ZhYn57U5p3JAWpEYQ4JuedxxosD59Ksf9nmQCbxp",
  "key8": "4UPHeiF8XTKg2k3zcDL8neZsfPGzRq2366fY6PXPKTvWtcDD6qHTcQTaVQ5eqL1NTGUhFEBSPL1cDTtXQXtAZ58E",
  "key9": "EafheRYN1NdrXbzEfGq9xT4wVihsZi1WceygsR5JATx8RKnwigEsD8SSDJGnK7ZkbmbAB2ck3ctLQThZBbqwt9Z",
  "key10": "45zLM2KP9Rg37XET2xHYakTLN2ufdkvuToF2djX1A3beBsdJPbqqsMbZjiCJCKJ7nH6koBMgdrg5BnJNrEkbyXHg",
  "key11": "23hxKMcCqyhtnoXJjHXWDe6Pq2ptEUoDMDWaZw33cwgfEP4MrzvYhzkCaErMYaxWCwKVS6tRm6UQxKEdkE6rT2nd",
  "key12": "pEhXPcFmC1P7QL18BkNwKCGpHQ4w9K69tQ1gouAJhTPY4sNSqaTVxTobuKvE1qj7yLzi7kvovUAfXBTCfRwu7Lj",
  "key13": "52GeTdKU4VhmssDPEWYf94xVT6YsJkutCgBcsaMfTCU114c4CMzxzBqgTnXbGCcmAYHbYhwXSZTcpzYbhMQbGPpd",
  "key14": "35KeTuRaDEb3tis7xRsYFTggaY8KHAdnamPQ2TyJtLqstCWqsoBzPEtQ9ihRKLsqM3pv7kp2S9UKMumphVDC9bAZ",
  "key15": "5EaT3rccL8ka5Siro2c7p7xQcSG8ERcpe8jN2kFbn7zhxocwfwra2NJ74rJzU2Z7jQYxemnNE4zZoYxQa45eyAyL",
  "key16": "4DsjjKnqssg8UJ26HCSuJHAcUhSGdNiPF4cWnLWjZYKt3EEJj1HZJXf6DVM6KqGPgi17nWC1jf6Gf7qigBepsKeu",
  "key17": "5KZdVFRV7GDW6CaaE6x4yjsRezKQ2vRTLJNr3JG81rDpfGFEHYrmbevfadEwqPCpNN7ym3j76GVSx5so3L4top4f",
  "key18": "4kNzxMEATULGRtEf55WH3vFHqLFdtKEk3GAw5vV76auR6ygrXZG9j5uH2zRwcDbEtTbpwjaNmN3KAjVSDH6S62Zq",
  "key19": "47gLSCtJWWfQm27V4gMBC4TSJ5gdzezeyywD7MdmoEVPqUUU448sZ15tpGoQcQbQw79LUvUL8QXjbQwM5eWtdTCK",
  "key20": "4PPnE4ZWGFh93SCe6npeQTwRvrRt7mUD2GDE4GpeQTuPzZA4YCZoSwPUQDg1aNMdxjk79zrYNK6aXFEyqfbHAQep",
  "key21": "4A3gzDXPAcXtY9zHtvgVZTTALALmSPT5ML72DRgkqm9NJYi5fbUC7JgefCGFLe11U67D97vMYuDa26iRp4TkEgWJ",
  "key22": "5ap1oKmGy2bKqMBeayvVUnoUhZG3YNtJGmnJHpypS4xX54UzBEs8ufthZfKrKQ4DhaLM376XFkjTjNdJvhdEjVuE",
  "key23": "3YEzjfBnUtaBxdkLAramfMn68ygZqSv18FR1qKNrWAGwAgS33mE5uSKXJU2RYhv495DhNjduTPH14zJsoWv4bEV5",
  "key24": "495EF83B1ba8RJW8Rer4JfDHnDZgDiZxHmWrsKYyAdtZkHB3F1CEiehmwz4CzJHxFYmctTEYYZQchAV4kEYqWqc1",
  "key25": "4tyooLBafESZTKro5UhYBhCVk557jhXZ3DBMZZfzC9K8qx12PYdkjWH2odSDUgMWJTc5fadvWfzMoqUhNyR4wH4K",
  "key26": "2P2Y7fm5to2hdtY4XD4MDwXvxaZN43vxh1nhXjxqBQ7iPFMTXwwCgPix4HHpQNGRwQzBg8sEF5L3pt9eUKR6ceph",
  "key27": "2w3jo5EjGG1KtHd64UGejQE1o2A36bZPs8hur2NmyhUZcTCNEDXh3G6nvdPkdK784ZWH2Mu6GhcvT33SdTMurzf1",
  "key28": "41n521a1nEpAaZQfeLu5psNXNar91q1xYdQ5UBNQR64Xg3DyYLJKPuUYsVwbMMPWAhCLrwpGKeC8wDFC2qQNkEDR",
  "key29": "2SjQuDP6KaQh62dEwUTVPHgFTKjUnPxEaAHEAZKWyhvdoTuKZ7pNaMNMbnHjeiRbFAEuXkiQceWKJeFnHnoeWkYq",
  "key30": "46vrGmRtgVAAMcGDFA4dw5p97zRa6jdLrUKULRePC2vyNV8311iGcgfoofzzAggtkLAhphAfKvaEyvkJFaDC8o4e",
  "key31": "2n6Du8RS2FXkukVAad6gasvxkKLavYNMdS3CNaiWpFWHWATzLLS3vefYBs85SWFXE9A55xxMcB5RKMRCsvhpBLGA",
  "key32": "GuuTiRFBuA9xMGCsWERdSi9xLrwffKzd6dSvPe7y86G5CXzLNaemQqHHskMVpSrfpRbXp1pD5Kr41aBtSu759GU",
  "key33": "38ugTe1o9cKrpKyxVqFw1MU5SPRjYQBrtFcR62pWHxp23C84XJax5ALsLUTQr4AKvwJBzuvKxtsAZSgxxXawhUrB"
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
