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
    "2eVTJHLr9Nk8CxQ6mCDpc3CEmiWNssXeszTpd5gBKPrRBZL9XbHdCEvaqU6VS8xHi6QGV8BNNpxrJQ6XAv1w9iTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xWVPYPP2Ss9V23mH1n9JNRqFsSnMKfDxvxSjPjczTThwtDCQ1nLMxTAs6KCVzRFF6VY2HKNkdoX59UFLZB3V1ES",
  "key1": "42kbGnCjixBWtAUDKtM5fUvoWxfaqVnMmqUuTa812MYmKjaFsCxhtu3UtaVnxvifqAZ1ug5zKkV119XWtJgij6m8",
  "key2": "Eg1gKHRuuuZjNpb3uXF2ZbE1WyiNzfQdVn73FcqPj73tkTnX3kSJ41WJRTC9qgopunFSumjNf438H7UyD6J1tPg",
  "key3": "3xaWYe6WuRyr44V99YjZqdhvDTz7TPC3JrpvEY7uBg9hcXKn3tD35BsRKV8X7eNU5QzaAdTDNo97cac3xKkE2DQG",
  "key4": "53s383aMSPgdyoXPXRBMauXamcBySBhxpMPb7sVtbNSoasMvRgAGL3fWTamVZe2E3t2vSRiNFSjRzxHvfsLwThef",
  "key5": "5KnnBgkx6W5cZ8mXgfeRSED4Sw8vK2KR4Tty5PKAXcYKCoFNqJiooTkBUeLerT5BZwYhQWXc1Ycn5c4gYKG1rd8a",
  "key6": "5CSh3HvZkqRr9AGJjoUgpCHLqT7NvMHc2fAemG5UXjqE6NZKVq9jRydzSfZLzr2WQN7ir69aUFvjHoYt1Nm8djBA",
  "key7": "LLxZv8ffUQ1j3rSGyq4BmxeVfWoqWCF85wNieuvR9QLT4ens4BEQh5donUCZzQQ3CXFvXg612qHp5NZ1ZfEn2hk",
  "key8": "5rGcMrQdkzwjLWXWmzctLNEDCP2mLY9JrdH1rfVMXPQ45wF9bJ53bZEoqQezAi5RVtbZiN9CP5wfep4nrD2QDyCG",
  "key9": "3wpFZmLfKJen7JHiAiVecnbCJauZmkF9GavfjjTUGhLNnQzeZEFcPMHf4r5xCim9tZEuS2jB1tfSpiBR8cZK7Esp",
  "key10": "mcYxr618D6MzxwXSCo9JdJadavjEfHYP6Cs7JeBtZk9NGVgSC9i2ipDGxrP1ZY7o3om17cvZgJReaf4XDSoTd6r",
  "key11": "3vBCkaGdduMu8EP2TQdT1Xx9Wk2DBT2huLqpLcitx8Z2VpQz2uv3zNtAMq3R1U3eHorsx64hMv8SsFAeVKWexoJ4",
  "key12": "3rd26k4kjNpWB2mKE5wnT6gTEtG1A8hwzjoiveRDBQTkkfoD3MuzaAWuoDPoUoqibv9wtdKNnRXHbqEearSemMsu",
  "key13": "2hSxotiEm5PNQHypSmL3yud2FL6aLJYPjRCB6yyAKPnn8huGRS6Feu8Mmot8Y3h1DnCQ9LheHfuivX3Vr4QDC6yP",
  "key14": "2SDL4B4G9aVgvaTr1mu3okpDPhvhEVUX3frh2RZTR1owGvw6uHN2cY8adK7UnrfukfZxu7vaLJfKQRcCtjhNtfbg",
  "key15": "5DZQsZJv8eQFuUjdfGjU5kck7Fpfpp8bHhLL8D1axcjtx3ih4i9hFDgfbtUJnVJAM6vakCUrMLuMtHAueNXgZugD",
  "key16": "3K99xXZMrYC78MHWUXhgbNKCx6sDirqb1KSYMWCEn95p2cgMYkvUTSnyw56wUf18CKZzQoLeZLX97JaFDnyAanji",
  "key17": "3wk8xfBU62RWGGw1fNRTUg4P7PqjnbsXjRvJGfyUSfXNgAGjQ3zxdsmSxbtkHyZKuxvRwqxbqo423F1DcUbgZC5h",
  "key18": "2jXaDCje54gUZkBmccEDKppvUCd4fncR8qwtLbdgP7fiYeARAoPJidk4oSHZihUFgpBNeyRzDnMjEuMFfqBD65ZZ",
  "key19": "4VddvdPC4c9z5xR6TFBpxa1pF1jvSgY2UZMrCwGEMWZNyto8DFJGULhv6mjzpUREaaoTEK9Z4LSEdPieBaomWtif",
  "key20": "3adeSNbuKYCmHCWrPcYabmJp6pMwPcAF15sQjpTongU3HzWSGdADHGgnqvmXYSkyBEb7gzpxRpV82FoJUGP4FTFJ",
  "key21": "LgAhEmn8YQ33xPLDJmVjijM3Wjv8jhJ1XcMozAxwrUr9ZXCSuvBvuVqcNZ5q7qTNBjieaMQ6Pk5BHVMV7g6u7GJ",
  "key22": "3Zcj9m2ymRn5sn1QP6QyYGWsmhT74on1yBjnHRmYNebMjbKBpsYsfw2oxeGt1BjwpgpxizqqvvwXpGZSY8b2zNhh",
  "key23": "9BM9ahKkcP9yXQTuGZtbnD7qAEWSxEVLkrNvXtjX5itDWeGoaVQFrzYnJYoWaVwo2iqGPpUj2MefrErYSV1RKtK",
  "key24": "2TVJFUx7kQNL1dD7CwidgU52ZATJd3T9MPBqMruMU3Qbjt3f6px4A2c4hLHYZbimTa8xjGPJzZbnShRYAFvcoWJ7",
  "key25": "5BoEmAWpyV3Pj95662wWpqwcNhVHBvXyYQGdtmHf5Q3qWuHM6UENCN1uVbLW4B47LQXvZRwBr5PUrr7ibz4AvDHs",
  "key26": "4s6SKT5uf8aQqBXKLXoymm5wY281xQzMjFGVibhoqxT3brzATWA2fdxJgsoFuiX6EsV7LgGwrcWq4Dk3vMcCBKLK",
  "key27": "5otKkm8SMo7J5KeYqZ6PFfkQpxFnLB7B5bo69Hz7Uko9ro2t5YYCs5sFEbweDvuoNcZvZmuay31KfLFqGVZuhPRT",
  "key28": "2VqcSRG1qjQLGXRMhLaErwCU5Krq7sNJY8f8YGdfsLXbgLWy92c9952v19QfeZh1WHaxdcGZYWiQ2ovD9X8eYLHy",
  "key29": "iqjrvc14bugRnXuvPPgVwpL8pbaznJEr7JKEQA1NKVq2aLrEqjARH8UZFiXPnYq8HejnJpbeweoCsTAXn1Cqwcb",
  "key30": "YZEzbRK4VqA5r1nVPbnQo7hKYYm8bUK6kYj7SzKxcy8yg9su6cmATVM8HH9V9CS4RF7MzV4YxeUBff6qKJ9dsrx",
  "key31": "2nSXE5oeT8A3CzifX3ep8K33KdKRPCTq7YBH5mh8taDF9gFuxovjfA7xHcSpJRC4V5YVKaSSt1LLtDHVWE9kPed4",
  "key32": "2qnY5LjnmwTkaidCK54e1FtcXHFHGeJyysRfKT7KFSUQnQa1emb7Q86yS83oacnixfsEJtXzDc5syKiSHhVR41nC",
  "key33": "5jcdjF936iwQLLPvvRbDv4fp3nPh4NkjmCGK3fFAme6RugY1vdhkRvdMiiMrBBDe8oqRPmbkywNuKY73E6SZ6AmM",
  "key34": "37sSeEEEoGTh6aH1e34YKiM7XKXCyShKPVUkem7kzPYBpk5i5BH5AxJveJp3VsaksJTemep1RwTyEeVkE8vaEFra",
  "key35": "4ArN1acTJsjzizYVSqaDr6GoEMBnwcvEuEQ1yzw1i6LWPcSwHc2eeQX4cpGBrFt1NHAMtS9swBKmZjdR5JeNtXbr",
  "key36": "dWpE4aoq5hPdb4YE1eBE4ACGUHuXJxGxgTUv4WpMxLpSnm2RDjNPqsn8LDnus1FqoU8wX13mmbKDSsvpMWvj9Nr",
  "key37": "5awnRhjXyT2jdJMggxB2ZeEhpUsJ5Fsc1kENf93osRhBihN5v9L3URka2GvMKx8BaT46znrnpv5UNPqk2Lp5P5KD",
  "key38": "JnC9vc6zipkJvAcUCaXyZbmMQGda8QfF8zRknxtxC1Z8Ria28dvDq31mfmJJsFkV5keVCb7uBG1JHTVLEiT2pnq",
  "key39": "92rM5KahERMPvXQbdGQ8ziMpsdkS64MxrF3WwoCVcndVzSGGqe45ywguwPc8Yer41exGnarjQ3L5isrUNN1qncs",
  "key40": "3tdK44nEs8E6rtGcFT6xDarWhCj4rRTwWrEpfDm5ueU2XxobQ2Sy1CY7gjeQ7ynBPFM7Eh9mqEkjXjm52cLr6HWi",
  "key41": "5qr6m5TDDFvSqoGxUskY1fMReyRDhAz4eAVT3xbrese9TN3vY1Z8LQNqEauQhicdzcH339bK5tVozAN96VZuZFFA",
  "key42": "3x8fbZ1evAU3PqGRiez5PrYXkUyDiUtM5oMae6w7LiJ7iBYCfFBHJqbGgfgsFnyeN7AWLZyB3TBaxLGhFNi81e8y",
  "key43": "52HnyuVMwWPJXNcH5H8qFvDTh7LkM3ss5GN6JLq6YwWghHr7YDbPk7oAiHWtApJrWodfGxt4jNrtvYkSdCy5A1GH",
  "key44": "2icZEseHvxiEu9aRqGfzzFFokpijYezdcszVqwSY8uzeCM1SkYzQ2P1zFfwvZW3Ns9KE5MGmhpHdvfcHYG6Rt62p"
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
