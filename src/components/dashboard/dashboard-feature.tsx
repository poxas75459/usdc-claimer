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
    "5h1JJ2ZdtG4NZfoawzXdysVncBbNxfZxRhQK633zGTC9Ycm2DruxP2ndoBMPQLXfWAwh7aXLLT3XWHR1LL3brnKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVMYpMNKDq68xwWGJPv4Y9WgZSSe4CxXSAMyyupnSjQ4bJkyg1EnyPhoEqVx8ATtXAHAdR5WMnB9bQ7A1kH67Kc",
  "key1": "7wiDV5VBsCmTszpyRsXGVm7Gy3ErSMmppfhXpr3FeQ2euxizHeeWjynncj5ARSpwBPDwxVmD6LTiaqLeE4WwTMP",
  "key2": "5cEq3FkdV7tsU6qFoytMjuQvLykuDtRtYhyLV6NGU42rJjFw7fs7D7V565Td3G6HV1Ku94qFWut8dLMRzYyxSY25",
  "key3": "36GDKccatVRa6XentXB64n7UCYMsmoPxakNQNhqhJpU5tFJUEJbhtEv9XSEVvbLTef2EBbDwnbVnLkJLQXVY786E",
  "key4": "32HtgYBUtbmx9yhLDjCob7m4UepnVeGmYJYureWyWYyb8wDianSfp8gnb8ogjKQE4tEzgjStjCb7pxydDSyhrjBF",
  "key5": "23vMfVForQ76apumfwN3s39n7s8VcJSFEi7dKkcA4dbm8aGuhjum4iQNjErasHugxPz2d15CX5rwd1AM89cu5nuT",
  "key6": "29JSTtNHcjdoVPfDfJpV9sxXFrnzAcgxgHy3LQPyjNgbVWvHFfBe5KLzsS4UaYbswucKU1T6DP8WNGkb2HrZ87j9",
  "key7": "3eyEeDqveK4wwyeYt2sMpUdHxaY5wuQezXWabtrzetfoCMbkkvQfhAA2AFLpBjUgGWS5fn7q7GoXaYKp8Wg9p2Ub",
  "key8": "3TicxP3Hq3bVTgnQveeAAEmXgcMeP1kkEv2HJA1bBJbs4gRewP5xJZtFi2VTsmjERVsh1MeDa9rjTxxdqYXfwSi3",
  "key9": "42wHa2EWXcvETVzehoA2Gcr7gsvL8K8AbSXQ2d2rp6wfcFzjmZ6SCWB5tPC75bqU8xqNu4cb4K48S2mm1i889KZB",
  "key10": "2odqG3HdbMJ8rRf5EX1T11okx5Mk9ByqyQpug3QhBaHJgKGaG62G1BeBP8ehwgn4J6aoTmmoorytFTTB4R3m5FSq",
  "key11": "37RKeLsFX9LfMNvMkrT2MFERXBJiVFdCVnp8r26aDqrePXMPZpVjmTp4D9GCPsMp1DDZBnhEpcpFmTUrf2CnzWQ5",
  "key12": "2wHKUiXHwQPqxdFqTSiCL5cSmM1GaEwiboQKSviaUgw8X5sdkAU7sG9khgH9d2MmQ74oqphCJBQRu6htWnmKRVHr",
  "key13": "8SqYpfAbjHwaed7hc8CW44z9KarkNBZoMoF57LqZAgg266HCq1NoKVbvZpwPxZQKrM8fjzANG4UWCN4J8qkFZJ7",
  "key14": "63pJMXFoLTKHCJAftuUePLZF8mgLk66WGJzXuZn9DXR3A74Q8ALMwPgehdyYwKh3eJ8oziLcvizJP7cDFJFZzi1n",
  "key15": "3DQ1a9bSj7YoEaCdVcxyNgvH3wJX3u57cohaifkRtJMnHvgTESoLRnn4ihXQAjqQQSA6ZaJL5tWeAPh3E8f3P8kH",
  "key16": "5MDoezBe9PPvwyFCRtQK4Ln33UbksgrZGewhXuxnrkC6BPo1uVmFuPbCQD8CSANznG4X9EYCowt8fPmeypySmhaS",
  "key17": "4KtzKzL5gVo6CH2ZgNozBDJkfdUFsxZLjXVQgh7PtWFZ7MEEDVndenmPqnLMDA4HJ9by6ANcd2pHpKUQCK8GWBDe",
  "key18": "3vjAZAxkYfMRgtYZDreh7rv5u1WsRmLqktd5V3LwYEGzH8zWWMEmamUa4fuYLe5p6PRHhHxLYHGVL7kESm8Sx8ES",
  "key19": "5t3VpksDLdJsQLdoJwUUe7rGzp9ViUnFFzDwQvPp3mQxxZ531xFDr2Wvgtfhqq5d5bJpGwxqmdUT4ZXvksKa5zyU",
  "key20": "sb7faC6aHAbEt1TPAuY3tfWNzn1A2AnWLwzPoXzaUu3b61k3g9nvDMsSQmB5GdWb5Q2WparE1N5rf2McWCjxDrt",
  "key21": "2nu9KSEgzrKxEt5aCc3kgTUy2hxUmZuiSUFP5jxGLsotskQiGBT2KZbvgCycG3389ww8M5HjFu3ZmKFXzSfk9QVd",
  "key22": "3p5zbxpBrwcu2HVxankKLxiUydyPPAG7Urar7h83qUCb1Q1coou4jmFTaU1pjwLDHimpne3sMAzHh6NJ2m91Qz8d",
  "key23": "4QpHtKzuTPuSAHBLDu6hDNavVeHd3415RdqUdva1dhnd5UiEb1SqafzE5qnHccVtC1yFX94mT7zp34uxMK5MRGCH",
  "key24": "mxNuWmLPLVeCwZpNbfTagiQK6E3d9m8phqNpazgvveyxsGoBJWn4vcyPwuDZCDouA48zKjiMipjr3V3921ogCmH",
  "key25": "3c69Vivz1KZkXezkPrzhmSE29j3jrFz2CU8sJUCwj9NCWwy7YVEY2camv7bjumEDgqXtbNSmfbNVRdpm5qZmf96",
  "key26": "3s8nR62D5McVVsrZTD8kPQrwj4vjAV7sDLJvVMwWo6DvgqDjE6BoDi8aqJGWLTPMhSLFoGAcFKoE1b4TeLzgdUHj",
  "key27": "3qdYxSKoVibhZvYWen3wXkqNnNcxJLaRvMfiu1SS9tNT3RSeUT7q2XW1NhipvWrQ1K9EHpegGvMvHz24k27j1Dmj",
  "key28": "5wwoqZxwFoVzih5fhXEM8RRF2kKtZ3HHhJzT4uNTd2YCzB9M2gN9VNNgbJ5wiSbvCqtJjCKB8Pdid95zpwpyM6UH",
  "key29": "HT3LMkyExnhzkZaFKBtY8ppCstGKRG7maSWDN52EY211rRSg5AH6okJVmk4rydBKmE4EoXQG4BpkJN1yrf8EZZ7",
  "key30": "3sa7jqDiYatm4aLegwP4cAy5AHcaRWxtZRQ2gGXQzy6FpJavnQohdHkFKgzBDKBdKZsQcQT4TzTP5EqGZk7ot4Wx",
  "key31": "5SyeZhVjW5Yw4RjrF4Kq57KtDAEoSJbZLdnUjPz1AoBrLdpXs3DUtoRvTxEB47b9K39cGDrZiLuKKSoKEHyeRaVD",
  "key32": "43m77WVM2zj25gCB16N8e1MF1a9n31fttooBC5bb9sYw5Rm1ptdjfUiofNMqs5yFxJ1cnmRqm8h7bZsHub88G8Gx",
  "key33": "43DnLxZonzBAjjouJ4rUgXvFVKArt2ByFMDcNZAto8d54XH45Uj1fDbmZBZQZaKNSSKeLP5CN6FgdViQmdQnbtAd",
  "key34": "3Gkuzk9vdZAdaxdTneh6AQaReo2YGmAheWFVr7F1LEty7Vcb9AmiuuwkWzpJcunSZ426RndGKxak2yfzXCd3sq7t",
  "key35": "ki7xwVaECgHvJU6S51weQ9b8D2WifQrD5dS5MrkkGgfrwt6fsS9LpwTxYHDJxX4rkcCkUtHi9kqc8DjNPVfw95S",
  "key36": "4uRa1oRsZznFsnKSxfrYmqsTyFyE6dbJCZqgbUb59qxyEKYrdFLRtvGZLqQZCD62a87tj4sZy4EoUnkQxs3ueq54",
  "key37": "5KSN6kG3dWQgJEMg9WTt5UjRXiEp8PwKbqdGbXZwctTkgwwWznRh9GrpSZA6499GpRfowhqvU3c8xHzt83Wogk73",
  "key38": "2gXxXT2Lwke79kvi4kMPMTRh834tTqdSsLYBnJSZpWqw9swE78NYdjaRURe7rdKzfauhGNVkssTNCkFSkMXhmkm5",
  "key39": "CZbfr22Grnfa9wRq1fZz5yjFcVgBogKAjYktDQw6pL9vhEhuu2p7rb9prK736qVttXYdJr9NUV7EEX2KLWKFFFa",
  "key40": "wkvmnRu6QPkfWPiayQ2v3911vYiMN8mwpcJtEMtGbvUtFgFj6kFXrqEXvJLy1oZBZAFFCYQZQ5CnkNLEfdRcciP",
  "key41": "P6iUkYrjQcsTrugFwsNwFUqMCXpsL2fuoEHYz9xPiA81WMobDrcyAaBze62c6ASZFwzFeLCcyHtz9C6SUf1NRrh",
  "key42": "3y7YTxi6Z1hFiUwtHUrKGXVtbz1DFkuUbmqSwXwqp4ZM487NhcUX1vLfQVUkAZT3f8vZEiZrXQUARuy2PGi4zY4f",
  "key43": "HNnbybsvZcEADBRvTsXmdoMmrpNu3SCTh5uttBXgKVpviT3AaVer2i5R6ee9ADFs114CBBBpDJNa5gsAVRLYD4H",
  "key44": "5o7rJ1Q7pAnQceJrq7yTxpDrJwitwA6vQaJNJkiR2cC5EnBSaqUgzRZcmbACSh2tfvDthbEixuNQR6oVnjfbBAqh",
  "key45": "3wcRHZahqptYXKb2wLkud1yy8yRW66Umd47qmuo35ifci25V6Gap36nj2gHWLe7FS9z76GwgfNjCPwjtwUSWBdHL"
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
