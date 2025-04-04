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
    "2CCaSY8YnrLR86nCQYGpLrXuwdUJPDQJZyrd4DTwRBvNn1msYE1KTnzrRPAuAhV81AQwqziJb8PPbtnSckhhN1YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FR9nYJPJtop8ivtn44The64Un4JdzRWdmk3mfAAGE1fCATo2EL38mW66VegSyfb5MifxEL6KyxkkhukSrBUtg8B",
  "key1": "dKDmcRpY4Nb8bgE38RxwWj6iuJZYvJj3BemYtYApcmKkrwrwfQEiEpHrRMztYHBYfaciYAMzkfGwpT2BKL7GY3t",
  "key2": "uLRkqooDioyFUB8uWacYbjzuPrTo5XnwUqxdGSVieuL66zwB2cEJbzFfwPyh3eZaptmgrzcqFNoGKRzZj24WP5W",
  "key3": "5dGkBTwtzhBApK8M1kpyvPxE8A1fa77usMKGKKHYYvLS2ffhjgiMwecuYd1gBryXBA8gTFAaUQX5VPYUXuvdmcxu",
  "key4": "ixfV3N2uarGgTnjvFocWsbNQZ3F2kCbDC1nYaojXQk9ka5WdMQaH8bX5qzw27MhN4Bzg32GfQMCHJxkxJMspwbo",
  "key5": "61drfKU2Vnqeno4JwVsz8R5UWJxN9ikgj8osasTtrnibBYujEVHmhDbrsyVLBaPf7TxEFVW56GCoFYsgCCRJ2vY6",
  "key6": "3FjSYHaTpgn48YRMoWmEBrw8KycLcyN4nYkbyoRZtgaUpn4TXTPqXxBn5XLHnuJpwuMX4g6HFBY6T6dDKbQcHeC3",
  "key7": "3KZAW54WmvQ5czjKghC9Nuuw69YsJjerNs5Pb3X9QMezUCaYPi6exW4dTmnX8Kvn4J7Y2jDcm8Ti5Cv6WRUTva8T",
  "key8": "nrc3wCezF7jEbgAZnuuMuFTfKcHr4oVX4cpgBrVBvmMuQEC9SJRPLnDL3oFRLsVfd7Gd9ufFSsJ9EbVZdn95HUZ",
  "key9": "392vuKYsu7sFiJ7h7h3BxRJpxNPdYnwwWL8U4fwMsWLafAGDvgcX5XvgV53iq9H8UbHCLHW36dTA8ynwX7FgoixY",
  "key10": "9nn2mmwtWiJCL7AprF2VtApk43jrHP3jhNWxjz2x1N33UCv7z5BEHEUwdEoniVtzLnBY535oc1gDyatmFf48i1u",
  "key11": "5U4ssdP5R4wMTvNFp1kPjSFAVai67Ba6V28p8wkEkrBfF6GF38Ksdvp3PUX9PeJVwwdirmCLNtjG5qY7RD3j6iRA",
  "key12": "emhFUmhFPCyBqATzaJwsBFBJEW9em6eiwS7niXoGe7GJ6g9i2ezpZocC8V1tqreBrbsCXT6SSXBrFocbzNu7SYZ",
  "key13": "2zQxxnUjR8d5DL7Xh3eDuRyLkVeHsNM6FTZ651zMTCJLpwvNS84uYUuotpjWMN82a3hoR1dLGFAFArZ4tuJAT3bJ",
  "key14": "67Eabw42m9eTowygkHKd9Bt9bwJshb9dXaQLvNKCPAi3ijudFXgVzR7QjAmWmwPWftUU5z2UpsCfDjLtL1Nu9NQM",
  "key15": "39rB2orijdtTUXrxyF55kAemhYUCnUNaFn5aS2XpEZCPaibFWvLFYJ27bZXGYR52GEuZ9EdWBqJV5PLo9v8P7PSJ",
  "key16": "S79g3Vw622AH456rufSTGCErJnueAF64JwJFL7uZQasiP8hVaPGXdpgRpxTP9fyJ4KHL8CYpqSQj7wSwnpxEzBT",
  "key17": "5DvDwVgWDqBaz56TH7EqQ1SdvB7Bv8gRDF1PnjbbcPyuvDAg1M81G1xgCziC8C1fKa6rUTYqjJTxNyNy6iGvi2Q8",
  "key18": "64q2CtknT5muhTxYBHrvXgNi3WdydzzacguPstuwibbEnD39e35BX55ChLtjhfB8neEs2Bqsoucax5uvpf7gH7HY",
  "key19": "2oQGJ2VxH6TUss9d1W4gTnXqX7tT31VNUj8w4fXXvhykBgrWHSq249CiuHDAQe28pHmjD8UqG4FsLe6AgBkxLTDu",
  "key20": "2jn2LdxbcwxsnLJZiou7UJjXr89BbkBQtirKHP4wp7GBKm1fL8WLQtLg5nxJLWmn797QukRpoQmL52LHE9QMXCxK",
  "key21": "63BYgtsrDeFaRsWQ4Yito2RJnV8FjZfckBQ9Te55RFEz7yHECS1PXmuzjCevsw8kiAoLrdSCVX9fXPLSLLgubdyH",
  "key22": "5XvtFejHvD3YG8f8yhS4K4i9HBHLSuStXmvpbbHP7Q3bgYp6qGnuzoBZTbvpPC7uQYN1AAgQsQKe5AwVExiUtRBi",
  "key23": "rvSSTJfWiFfPJT3PrPt6BkBc7hsEpGXSt2JkSYRUUB4fC6X3q53dtw354btGSP1QP4cdczRh3uXEP9XxYgbjpGp",
  "key24": "qQm5rLQaiDc16mswVfyizasoyM5tqU2igsZQmZeSpTVTQCwgcjCX6mhaaaC7UrA2AxyL4VmTSDCBuvLBYdFnQ74",
  "key25": "2ou93N58LH46PSm5MYE7RQqy5xrbXWPa97nvroLuYRPKeEdjFUzJDG72h2yYMfFDjUymHgzZCnd9F8LmUJu3bJJT",
  "key26": "R2dECBuKqvkSp6iKnkEogWxeveq688JAxE8bjLXixa34y4KYcj4sK9vTxUUzasZPHYA8UmqVRd93b4LYukgiuGF",
  "key27": "4znqgqCaqyE6AHBmTLysk5xFYgP1RpzEKcTFFFsuqyEJcxJ89ufnZ5eN8WVgqxtm3DSrgecUSr1eGkdp78WwtVAt",
  "key28": "3TxNVzDtfHYZF4dYfQtSUPWEAiLZkyCitFzZ4LVWvHEia1o2KJ2P9tuBisZBHPmdS2JJSxSctq76GxtXp41zwDWK",
  "key29": "4ZScy8XiLDsy9SxAZtHypxcQ9nLrLxjx4LbHhedRWXt2vTYf418kT9LgturjjNgtqGC1w8AV44m3h175CVsTjyKb",
  "key30": "4QP8PEyZtGLz1rPq7sy5wGixrRNkdNFTJqoEQLszHgHRAuB9sZFVTxP9wCVKqNf2iDVgnu1a3M2NxMw9uvXzxA3f",
  "key31": "3WWVBBFKvNN7anab6DaaQPapw25Gbg5azb1BVHNiKf8BJehMUcnvNb4rNsuDcXo3vawoEphqJArmdWPG7fGF85px",
  "key32": "3hxoS3WWguycia26vPBor9Tdvu3QBXUGKeZSejShFoTbB4gDsQEZErP7sFp1hJhRKtoWiKfyLdoagPfWqL1xcRcF",
  "key33": "2Zpvkzj1McQ4aA2NPkXehSp1gh47YbnXvVeA925WDKn8uDmh7ESNSj9dXzRVgenryPuJmpiA5CqHzUEfAFS7UFLY",
  "key34": "5orDiasGUNS7GxUX29AFeottNSyCudoffsUapje6CbNqze9NRuy9VdrRbbTGRrSe8RfXejC23qfPN1idCyCdoimb",
  "key35": "2nFDVJSvYotpZ6YkgFTt8WcGio9V6ebA9vNuSKeRogTUtiDCNfuVHg9PutJ43U1YpFH91QX15H6LcoqAEzfxLtP7",
  "key36": "3PNCL4xLQvbB4DBnSkSF6YjCDHgoqTC9b2YWfNxCuWaV2E2j2rnyHY5EFi1H5Ji7rFJAKQMPhirTiCZsAtb37CS4",
  "key37": "2oqAmhzFVWFkiVkynYKoeXZ7YoJ6hKp26UdjUaXGf8PRHrf6szf34EtSkqXVroxGux2kTctH6bEFEjtMYTtF2JM8",
  "key38": "5uvcJWWxaZb61uqGN2iH81iEV745JkAuBUsagtfz61JdoYvPykSn5YkT6jQTNt2iRiTYPmZBWD721rmDt1GmvNNu",
  "key39": "4muD69yFwLCswniui9UQNwWji74Lpmm3ZH7Tx24GK5oQX8dwPT5dusjfXfCdzKeT7HorW3GjJuWFxHGzTa4rB2JE",
  "key40": "4vtnVQpjEUbKVe9E6WLRVSRbupNyQwv1Xuif15g77Zi77E7GKxyzB41hB4s8rFnpjKUSaXgEHxbP7emhKwACKiyB",
  "key41": "4YYU2Ymb7wgqTCTsmztaaUfY3pb3Lz3qephkRm2QU2AHuHDj2dZCEd3sCvbrDBTcEZyTAJ6WWKcCbAAgp4otZis",
  "key42": "QHy6uZniypS1W4oW5XZE8QYejdszGCUwL2Dk5kyZmcHHWNo91n4R5hnDQz67jSFVUoFkjs4um5TzFMNeBPKC18e",
  "key43": "4p8QztKxiuu5AMwVxHgdF7zteByg412JnXNoReD6bLjQykp5kKBdwLC8HDAAhPfYBhiDDXQQhwqPbWtiDtoqv1Tg",
  "key44": "56Rzw7k41gL6HyipCvJ1LMdQSrTsDE9odYyTE8KLtwXDmGSDrHcyRx1i6s8m4RvJ43crKi2oujJzcRASipQFuqh2",
  "key45": "32UaqfJZYejCxEUWpqdZxxqKgJ68PYDxab6LGifoFZJGye8zGcqKJPvzF2vDbyoCrARPUYRKtJC3tyGfSsYiE2Lp",
  "key46": "5UQy7pY2EN1bd7TtJEH1EXuEFAWq7PG3L5fUHxPJpwacPPboB4GFYZmoup7a8q7CLwTbd5Y3fY2Q7ECK7kJ2NV8n",
  "key47": "2SyHbRJKyx57pq4Wdvid63wcafS3L7Bngru9SbnLq8V9UqxsakbAnMhNdVE9Fdcb2AvEN717aw4zUK9gm7m5qgxc",
  "key48": "35ccdQixY2yNpyN4o1h8NWAPtTZvZRwk4Ka6ymtJdYvmbtc6q6idhJnaBYWgVMQPnatyNuf1bxjauMnYTQAa1JfT",
  "key49": "2gYhvsxzxQeMRFuvfumdws6skNVkzsa8h1XVaWVpRQbbrE5wnVH5bKhp7N8zrVSnWTMZDaA4vyHoDN214Xw9aGoY"
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
