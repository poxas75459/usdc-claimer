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
    "4M2KMBqHRoz7nJsLPVoNkqiUcEuGfavFDMjiGq5w9emirrBu8XbFHSZoCGBh5FVN24HSjRDaA9f6osxz5EybcPd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213w7vz1MjQw64VWkjeShWxJSNTpJcZw5rH9ocfA5Hg8VfhZ9VgKzNbdPszt8Y6K7KUK5bEoQyndqA6CHkP5Cfib",
  "key1": "53ocFmBqZnq34jmxPLgDPzPxPfcuo4v9PZjYTdEypvjkiBNPuU4Mn5mLbWUoV1iKfwMoBL88UEMf1fpvmFLqQ8qh",
  "key2": "3Lw35PeqsjcCzt7KubKYqrXJnmYGU5KUWJ9oWfM3MDmPEoFGcRCvp3wTx8QVTrXNigY4f86at48AEWo1FvYZdggn",
  "key3": "5VqVUXqu7Vcjf5f28y8mxCME7rctEkz9XcivL6zvkjChN2dwA8HVZoduX1QknTHpEqhWrtHLTpxEFWwxDFutQerk",
  "key4": "2QJE19RQRyLvrF4BSHVa9NzRT3tnFgtexdwFKY1393L4j7atNxk1dtxhnc19wkuH6AvWWyZKuiP6ZLv2LdokQAut",
  "key5": "31XvyGMfZ7SB8p7hmC79qK6FqHo7QfZFrAWxT4V6seoewBLGCNU3msaPUJerDYjE5RmsnqZZ1CrsxXPC1m7D5DZ1",
  "key6": "3pkAiNNRAeGcK9pL1DsBPok5no8Y6GRu6PAgfePG382627ofk8qeh3M33MLAHqmhdvyc5UQaxMe6DkQDtgkLCaNA",
  "key7": "4pLC7a3V3FNnuMmh3jE85Gsn2sPgyy3y6XMNzrKkVBRmGVRP9kFsVGayBkA3F23B637m1w8Jh84hvtMkj8ASYtFU",
  "key8": "5RBPLKzjCexCGpjNkiGu7d3BjJiAiCwfbMVrSdagP1s29k1yVvat4nMyzuZkjfSckASDrRAFPDT37KAVmVN7hCke",
  "key9": "u25ok3ZDkvS4oxboiJ3fdeWNR7hxxvNKjB7pD9wwXZif4pFAJnFFb2fGpn7NmDznD4ERN5hpJTgAgG7TR8MUphC",
  "key10": "4xrRtXfHzyUaPrayWitXpt9V57nGawYFFBPrYj2XkoRnLWyXmeq5xNvUcyNqFjTPXLPdzZBZ7kQ4ykbqAbvNAdRg",
  "key11": "2GrMdn4rmywXxNsr15s7fLWif2ve8J4Ys3RdWPTygJ5qC1JHg5cGKGJeKXH3s1FvSAG8SZS3pER9V2uvFEidTGzk",
  "key12": "2PUSLF4uD4rwrmmKwnE5bkbuRKBGh4cpfV6YzPCvxyTckEJnWeK3WDHc5eTZyoZv35qLGNnc3dkNN5r5nn5DaQwz",
  "key13": "2e7o6EgA9tRnDKbmBeEQgY63VWhjyRquSkX9tX1E11toBvJAWJ1z7XjoC6GrkaKe7B12poDb96LpR885NuQaX75g",
  "key14": "2x9dykLQDEx8563vGwHSLjBPvjBEbGMAUjhzwVkVVLSxqabreQdHXFJhcz3W4wQzt9yo9x75SYvvKihGy7xE16Eo",
  "key15": "Jh7qV5NcSHBQe3NkcrTCCrm1zEiFPRU2iuz7p2WRae4eTM6YSvgStR73tjdLQneLbW2rUDDePjPH92NH3ZXHwwB",
  "key16": "QT91sTSLns2HSRy2UHzukfCfTVN1pbyLfxH1idtjiohxQfp7zp2XrZutFHfxFrv4SDjMnExsohsXL9MRddpxfCV",
  "key17": "2Tpn4ji54ZHArUKAd8hMCBQvCCm3Ki51DZVs7UZQoMDHKbGimh6DBaRvnfFRuKsaUrHfT3CnNWmY9VGt1eSogic4",
  "key18": "5nguYy9LH3TH9bSfckf9MKMDzom3nEfXauZnqS312kNdW6R8QkJEgVfPddfyoMRz3JwDFBvtbNgx7fTSRuak8m2f",
  "key19": "5kskApqnf2ekrNApQTPuSzFfsWRbw6B9BErPpFAckT2Lg1UowYEKQJ6rEH7CPS14fW1msTaKLx2fZXzj6rKR5AsW",
  "key20": "try2qTSfQD3ZPkZpaHmkThwNEHa95g3kw7dLfJCpdPQ95BnkgRyCuyzaEYg8zq38mbawXKQd9L2EGd6zYdj3vze",
  "key21": "5Fs7BeTFPg3RiqvFfLL6FGh4F5xwjgekfW5YNMXtjALPp3nQckEFfF7GSNyTEgMuNc4Zup7E52LUrJw7wxWgojXi",
  "key22": "2N7UPdSiZAFVPm1fitqMtaspDgK2jiy7c94qf9i7EbZCaKurLhQMutnop6baDikakXX4uUT49GU1ThJjorht7XSs",
  "key23": "4zERUgK6tZtwFg5Vquq2CfXZxr7vFaj3RY7zqJDMRqZtxA9PdBD71q4PhQBjMF3cKsrpwWJZGCvpvvgmwBVGSGQC",
  "key24": "4QDSQxYAwp4TLh2R8v38Nwd74waraMRrBEfRT1XApZHDAE2vLZPFyKC5s3oceWGqBtWCCkki4gKg55NAaQhe8s7g",
  "key25": "PxJqnkuMQs2xgmrPUSSRmcpGSumXfRjJvbw7vr9ujmrY4r9SZknfPmzMXwfVQ4egofPtMke31L3dzG27LLrV6hn",
  "key26": "3Mqsqarq5iZR7SUoWu44tgLCUCGceKmKXPTXunqFPfj3WtT2SuEWe9tCkNcYNk8vR7CjZZgVm3nDpYPUzgL7VfRu",
  "key27": "2dqudYXKt4JeDUMmqfZ1fGQ1QjWL1o1g48PL5agPhYm12Gn524h35Ck4BQjAbi1hKFpJw28DJ5GD43qMwUXDCcuL",
  "key28": "5XgDH8f8DcxrRLm2TWY4898VaNPTkUTokPAudztb5WtsrUqXKtfxA3v11t1gXbL6f4cUhRjq4XsqnW3H7EaAtAmk",
  "key29": "3ACUaCKL6As4TGoqseXzLu2eEDvRfy3SyGwJcKirALK1aoU4am7qJ6JFYb3hy7rp8kW4aCmPTigxco8a82hqEevs",
  "key30": "3meMZXSxVyhVJbg2YoLyeHp7J7CQdNQmkW6kkJkgVnTUXAfXs8bmW4KP6MLhrniT2N75fM3n2hg3Ex2R2Phmkhi6",
  "key31": "3dGmDfKsZczXgLrsrScsogpFvQ11AmwaWja7XYvyTYvbttW1C41gmSgHdUsKS3RUKzdLiymBvWVf3aUZPG4DUK8K",
  "key32": "4qdhenUYGeiViHTJErdx4hif8F32g3chwwuQPUv1maLXrS212QesmJXMr3VtcyPYwqZHSdFEa5td3NSdaboTQ1n2",
  "key33": "5TWmbBbC7LdMwKeHAaadxACeierKHHUkyrpYWe2btTN1wwoRLcEbXyP2pJSVqbkMFYJR6ixu6tDhHttSAUv4XQxS",
  "key34": "3i6dByynz5WSFTP81zCmvdRgd6oEmzjJPqwetg84hHhnjXJZKhcYhXKCWYjgwr2eVZq8eQJDg9kL9wVtq2eN6mL7",
  "key35": "42Ax17m24yZzeNVkaS2HDa5ZqUsEcdbod2ALTGPgmiJ2o75yx2Jf6Le9TKvsxgjwrSbtLhGeNv7AyBDLkUtkwH4S",
  "key36": "5DXqXuXneVqmwtBnSrPrNs1ogK4zjAezNMfMaQUms5p13aSx2AHrwC4wyjvBPTFUyP1pt2veu7xVSPYUofQDWhg1",
  "key37": "dFXSg6bkhehzHuetbvKRQ5eFSikKkukgHkJmLe1qBApSfZuBqYBdThgQ6kAX2CfLtm856jNfJajZ7cs7ysBpjW5",
  "key38": "3mVaUEqNQvH4cTvz9CTt6sfMcoon6xbmBdTDGzef9z9BqQUt3wFkaosgr4qPAqE8JukT1giFgc9wTsqopGyniFkJ",
  "key39": "4npX9a2whPUNAD51rbz8TwdBXnPYxHpYFBPqHNFBGN1pYsdgZSA5RyJ38CBwBDzA5ox6rS3xbPhL3NhDNd2z5syK",
  "key40": "2db23qrvSGwe7Xz18CrceME45w5rQ7S54pr5f2zZrt8eFV7uaRMRLMTcTXbYhqzm2knwRdb7nRNd6KDswHzuebA3"
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
