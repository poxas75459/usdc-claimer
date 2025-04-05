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
    "j59g36iZtV42X8uJRxkPXrnG2KrF2VrscNu4cKz83JUxsfVdm5vzd16trd6DvWZRyReZ2sfqvQhEnKPeqExMuNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e9ukTrw5FsENoheZjwEGykfjqbuLP3PBPpJDxBJpVdvFyBBXCEU842qxKTEHfpv4G8Fa5krY9htyEjfpFbKw2CJ",
  "key1": "3rwaWdJ1gnRkFBNKzrsGy5g1oKCyisd5fFZiZ4kmm1cTTstBnG8LvXFAAg36RV9mVnXmPjDEFcF1HQa2z7p6viec",
  "key2": "3BxenRMacAUKjpiFyCVXkpa4ywqQ4eeVQahaVqA4rR2VWdLFZo8xrr6a9Yh6NrWWJSW4v8iNuGVTCCPX1wSBja1R",
  "key3": "26xSdUSKEUUfTJKKzNFZU2qppKFcUSPgFGq4UR6ML6gbR6JSTegNHGyEFLSnZvSd4FufdTj6NGTikhhPpGV24aY5",
  "key4": "2zrP43XsfiaXu7cmmK4BNxQzNFyAnQBnpKaTCUQ1ncST63fVzE3wKkDYBHeGKpa5K9RGTy2RM5L9LUrCdhXCKPse",
  "key5": "59dLw6NYA7yXWaWR48Dyk8Td8YeomY7N9jwt6mNDWHt2FTANwDNj8wkSJR3CweqXQtVKed5GRvyB6kJYhHrBfcVT",
  "key6": "48GkN3TAtNx1AaxZNJ7as3yV1eQZhWGAAoP8MWZwLQGSQi1RRQzVQfcsMWeyxWUGyi1wTf5tcjwD8HufNAse4c2e",
  "key7": "5gxSUDP2JrGYEQPG4kmBxWLAZT3XyxoXYHzimcpfYfQS8zpj5yxM9j6D7dMcZyCSS5ug3U2o2uAupzF4AabsuMz",
  "key8": "gGoionTtczhwtsr5Lc6XZVgTofjMcp8pY51kAKhBTVmhuiGHGxg87PnA2qSu1cNNQ3dwZrPk57cDqzR1AcQBCN1",
  "key9": "2vE1oQ6QSiw5nkXcjfahCNRua6bL9mUTJw6T9wrzAihYrEtUEhgZQWLRwSTLB4EtfZpYimkmjNd9H6h7BYM9XRby",
  "key10": "5Yn94oVWySWa5NvM27M1hzVxxg1pSfknLLCB3JM7UjXQcwdvacxQR7MALLsVAWmfYEguXJqFShCgtLZNUrUchrAH",
  "key11": "5TB9weJdG84WUCd34S1VEc8EaecPzySX77FLpockPpwALcPCraALj78otVEiTeLnwANeNjC8UApRT21HVK1CdmFE",
  "key12": "52MNpNNZzz4ez3wMm7tZBXYhGzxPqHjkipu2bDvzekWEVVs512NBxQEijbhVWVhDgndLFnxWLFWBoYdkeEcLQ8is",
  "key13": "23mN2XZ8JcmSGaswmhz3L9DFi1YPGBwYPK3aWnpYMVseLFRPiwtbG7kyHoPKS9QPgvTmtovPNKuvC2RvS6SA7Net",
  "key14": "55FqnkTGquvG1imFxEmciRDYCFGZnVDoEXuCxTgNq7JBZTE31zBo1zK62nkE7o4Ncx69HGhFcewagpkMUywKALSY",
  "key15": "5QzvbF9TJtbcVfbvW7LTYmeao11sHFzGy4xGyLzzWdRf72QEgXcF3uXmYoVWH6s7ikmv2ioswU3Bx2RCCamjNsQP",
  "key16": "f5Wj5ajDpf2zGiwZPKFPqFrXGu4KLwWrA6xfKrVihNRkrF6aabH4zHWkDFs6VjpvhAKCqsMqvLTCCKDrxLq4ych",
  "key17": "zfqMDjPZ7vLKdg7VDBUx22JiTg5VMUikRYiDCubcVD22RufX69g3AS9ToaFTzQkBKH6potPN2ddnrazhmk3F2Dj",
  "key18": "5ELGNP9upii11Ao9AjVHQz4rk7c7kfLTS7hBaXBYRx25xqaYQ2M6GKbiPJ9QDk6R6Nn4XWvhKa2ADsHjVGgEWXcp",
  "key19": "2P7g9zPy7fcstHYUuveAEhvTQ6GS3TG1PfbuYfKHD619XRdUMgPf6dVvwohLvCqrRQPBKcxssawcPV9ke2mfUK5p",
  "key20": "4UAmuYx1vC186w8rAK4gAPTWqD9oENUM6eM2xSkB7LSkK3U7yUgeBuLwHYg6sUkSwSADpj9MSBSmwQ1eZ6HViu51",
  "key21": "4YPijCQnZz1sa32PkUVcUzQND4s8G3GTiPNMHRL49ysqESBqfGDa1M9KuxT99PKDegfw2xqi4mm9r6hTynJUVKRj",
  "key22": "kmMruefz8Xe8v48c6y6UpBAqhVrds6VxgGvCYfiPFrz4PbQsSjfbk9jop4PnjYWTULRsTmfhdagssVXB8tAWtuE",
  "key23": "47LPSxmGkxBc3As4ujhNMen5ZHCCnkU2G5DvxaMcSrVonFvdAaRy3q9VsEH1Zxje5q2wEK91zd4h1Qz6FgRVnRVg",
  "key24": "5w4NXrHvqx6QvCXuhHZTxyqPJB1YZw4Gqx9M15fFaMHhu1Sw5476CkaX4xGqTXDyFkgN65sGBtm1u5WFaEYbNGaU",
  "key25": "5N9TX4XuEyXN3T2brv53Pg7r9neqhkXHqNJL2SjkmZFyHFXE8uziPPReNjinHcMVspQFwG7ctx8FLTa8LCSuW2qT",
  "key26": "jt3pbBawQ6XaM356PpRXtFeaafBm7zQTxj6DV9oXZtBVwXCCjY253RNLV3z3CELkskw5iUjmTExZeLy74DxnzrB",
  "key27": "2uvcRhRAy8eLBUTgkZSUJEuQF73FxkfdisoCUXWVJCD3CJCPMhm3P3vrtEoSfnYBQdwY8sSzPyG2jpNxUx3xbmm3",
  "key28": "3XxVaFq3vKof4AFdeZ2eoexzvXbqS5xd1x6gRoZxNy18C1SaoivLiPg6FJTF8tDiee9w9Jovq5s9bXCoDmLtiuPW",
  "key29": "4Cet32RRciayZMfE99NQmvWV5gTCgvTa5eCC5AfmiVc6SWksSMdmQUBz5chZTTHjcnErm9xRufvsY5KB7u1Jf84E",
  "key30": "2z2S6dK2Roo2dnq61uaBSRUw4vG2pTNtpBWt8349u9WKsviHQRYnQretnY2CKYd8SGqgj8V58i9TboyMskwFyPfR",
  "key31": "3xEUXkZuEw3aDfCjDqonHo2QdhrKQc3J4tTqUBvYPLnNHAxBZseKmyh8iqfj9zvhGD6Ue3v4Z3hJLcjJ6qhu4oHg",
  "key32": "4KuPc975ZvKhb46EnvSQkrgYzqL9PioNdZGmAXoM9ixy9mGNHYT5vg1GL84myd7reDGcB5AmuVxx3Wsj6h34wdzd",
  "key33": "5eYKwkAwgu2wSDwSYCxDWTyfmwsWv4k2AHJnYDuiSzvh7db77qc3GZkBnLNCYWPW1vE3NPriHgHtY22RBuwXCcfu",
  "key34": "4geQ26eiFAxqkLTtZQdSivqYfHX1yptpHXf8hKz8S98uekJhJgLDQrMRPtMUufLTZ3p6ZQmZpfw7mUQWTQ8rViMM"
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
