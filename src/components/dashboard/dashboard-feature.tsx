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
    "bCumfwiNa1S2sCNLdTjSzbfx2KyeLa3553CLV1TKgzkPxN143kAZXtfUEE9Mn3djmFYcggT9pPrLc2odpG2XZK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xdScrFmRHp1TdYQxQzJ3y1h3H3T8NwarYtWoPRtcPi8c1ftBy4oezEhq66qmr3BZ5MSfDgaFMnmVhoHWBraGa8Q",
  "key1": "3T4N21G3d8K3dJgNxddneD52BCyXz3RbpD59udnToZbC2xDRc9xdJBC6wt6TnpePkPKHy1Fzw4t8AGcyhS98sbop",
  "key2": "2TceEFrTuDT7N9YCCSpe49waE3WKvMAXJvs6XYsTwYm8gncKMsAURfcRRzA9wn1N4QVkFFQx5MLRSjXh442V1R1P",
  "key3": "4eUywVy8WkBDiFPX6zmazZxt55xAAbd45wFHnaD6vzjjdYfJ82j2fGbhg8x56gEdQxuzeMPhecb33pDanssF973q",
  "key4": "2SKv3RiDg3nT2ZYbX5CiC2LK3tvgAPVxXozqV5xUZuwBXmMeLh1UcudHnhgys7WQYuJis2AX2QiyahBcAXacA1k6",
  "key5": "gbFAcLDPaDCNgAsxqftfcwaBdv7aZomfDH4TCaeuskTvJWWLhvngxCfBuajcvtBBwSLGnZXj98k9X9wr9euQRtu",
  "key6": "brahhqCsxZRrYKAxAhoc73jCPU6XLX9JnqMSJoatsJ2pHJQwKqFKikvEJdHNG6zKUoYxZhPuLd1fhiVK8BUasVG",
  "key7": "KUeBXdHbkf4wk4aiadHkZ8YxCxtezNtPksTbkqagrypq75Hnb6uHNsZzZNEV6SyrWvh5PUs7bTN7eUZV189mKwo",
  "key8": "3fGfVgQTskj24ihcm1yd1oPDXTwfez5b2DCS8beAGVx3CeB6drCJVvwKb8eeUCkdH9MZ5aqsgSDz7uWPUv4dbVa4",
  "key9": "3kx6Wbyfemj3DcLYnBRDwsPUpVohaGoQtoTake5RFZ71yY1BxweYVRLZi44eTqRuN56u9pVkJbd2NESPUTydRTy5",
  "key10": "eWB9M3A2W4XE2zy3pcwU6WtQ1GzBxDdB8RPR9hdh4QzbDgE2wgMfsAtf4DTaf5T3cyqjeYa5VChzeXe79mRGw2E",
  "key11": "3XtUsc1xSTrS1yMqwc6tWWEtdnkyNwkroZBpk6txDrPk9DUBKZFWxJPJX1ao1jbX3QsWgGaqrPodgzUjXoXNsYU9",
  "key12": "4rYWnKcn2MvE1adax5DnJT97QtXUTDAfm1qEaTPNSHNor9o7tkam9WDrGzDWMYRX7gtQYhCTgqZh4Fe2ebw1hHn3",
  "key13": "26xGcWaU4D8UUsuRTkkuVH1bv9XuWxyDpGuBSCQkYsMiF2ThaAVSbz5jjkjWwt5oZ32eqcVE1TqyboSemJsbAJC7",
  "key14": "3dZnst2UmccKTm72noaERAvpHNhi2Jno7CuLsGKJHgKhQzcCGTLtCBf6mTUwfLJmfKi8yiHeRvKcggexLUm9EK6o",
  "key15": "2ndE2aGtt85XgeTthbXp2HHzVP42j6nt4m6T2UJv63pvtC5hXNuz6PER1vJocYvtY4kJp8E52f4pTWsQvYhnL5w3",
  "key16": "5kdeQxjGiKPbdfSJpJ7s3QADgnZF4De14wtNVsBNzsKtkiNYRzU3v1FosrcKWynVNfkSfGsgpPNRguzLeQ7h14Jn",
  "key17": "4irxWPvzusUTZqxmpU3gYrYB7QF9tbFR1JMWdpPmMu4rdLJKnmR6C9crnxNpdTcYemVxCmDLoRKyAj1EK66tX8xD",
  "key18": "3L3rcn5b8csxLaY9yDi2ZXi1viLasnf1L9WGsprjNUTtw9ZTGnUT1pXGU2BYM5hV6tQzxh6KD1siTcdz9fQTekKZ",
  "key19": "3TAP9xQdUr7yt5dPYfyvtXQ3CSSjBA9vvqdYwtTWYNhRSTdBWA3qLKR8nahhwnvW2nVNsJDMYYNAbBhQdfkkDJZn",
  "key20": "2DuN7uJ6DJzvrGm2P4Zi5UHECxCAj7tPHxePNu5YSwK5iDtfxRBRhrnDcF25X64gPwoQdkrZTdqNFEpLc8vVeWX2",
  "key21": "52h8YAUdThKABZhj2wHcgqdji8TYA1VYf2NtxepA2dNywoZjpmGoDF2pPqZeGTvTVUNuQatRPwU6XEYoG3XH2K4D",
  "key22": "3Tj8uqHHhusEWNKn1Ed4PmD9LoddSsfkUgvpZvEWXHkFdpNGSXzNJQYQRtHGZKE915szQdUYtNx75V6pybuTHbtD",
  "key23": "3RwKLapRzH75sjd5PNqyX3QhwHMTu6Aqd5U6pyKh5f339SeP9VELEjeuLvd4qBYW2pe6k7UU9uzGzJegX5b9jQYv",
  "key24": "55QBzvPd7Qbv1UtqJidcaCef6wHz6US725vGA9png6DGNqY5yvenTGWPixAs8B5c65w1HW3vVqgHcSWfjkyjp3Y6",
  "key25": "usrG4pApcPxvcasKqPk9V3KY41qcRATVbJoRPncKtJrigscFJhcpXFrt8ytRhfg61DNy73y9BvaZXZH9kRfq8Di",
  "key26": "5fnY9XwyYMisa8wdpsoerb4FQC6Jy9jBq151pdTGS3A7VGdzSmMS3uEd338BRev3Q1x85zKYmFE6kcKnqt7Myf3U",
  "key27": "M8gDtJHk1t4Mohb6y4zuofhUp39Y8pjuj4qa8smCEnnv54cSBdwuz3Hy99euScR53sbQ9YFRkgSdkH5EhLyrUH9",
  "key28": "4tz2WbDPKbmWpipuyaNmubqxL7ioU3S7B13WsfmgByX67bUzZSYPbpEe7Sqwh9mdN5fnJY2qbPLUnFrPYhxSPmoN",
  "key29": "4ZFSAtn3vFiJyD3XFocEaM2CSTKvSx6tyK739PxcfbY4r7YTDfwT6pt9o8UuuSrgurQ8EPQQbH1gtuB4mXSiNXZY",
  "key30": "3NYEftN7cAG16uXsAE8hQb9sqsHuo2b9LxvLVvNfP83UWBvXd5YksyY9jqTym7QFHWg649Twbu428RVVJNPkT2Ta",
  "key31": "3PvmPBMpj7cU6kMXeFRcGi7S2P5NjABNhorLr5Yr6LAUYR764X57LwAWPQzb7TsxebnkvZX3RjBHgq5mUBkhbVXA",
  "key32": "2xRVPSqyQABYtQdGZKoMNHTDopYSS3oUBuzzS3cxhaBq5BY3LHkWYBaKHFBQcA5mG4iMnhv4c2bnU3bJAzZnAKbC",
  "key33": "5XmF3KFa3R1Wet9WqFGcy9TQPfCu3pFG8UjTzedGSRi1h8nP8zxjNZ9ZHmWZTNF5MKWWNGootEHJXktn1PgMHuzk",
  "key34": "3btJGwwMESrT4randWemVEVfpcgnF9zAywd51aZ5dqdKoiNhqiJxtn2YDHiAjff3CqnxakZnq66fTbVtGFL4Mfve",
  "key35": "5YLXtBL3KJXDPSjqugzd3GZ5qsgzeeFhQQCcSdW2zH1Lgdd2k7jyWGXH32xAkkvB1APR5t15Tz75adLfhsQvjLdZ",
  "key36": "3n3KDENyNyyFvvSC7KJWNNv72J6iVvyeLtChvNrx2MxJ8RwAo9xfJMp7Lrd2fp3UUmzPzdmb4HfLCdKf3Vo9C3b2",
  "key37": "4b3igECqWF8gtWCWJKiTpqJ3GWFn31qwUvx7tTQ86nTYyCVxs5E5yTabToAbrojKA9h7mgD8sk7kMFUM4tHkRT9V",
  "key38": "3xSLaJqrUoAeTzQvG2osb1a1b7Ht56PP3QkBujWyZ5dkZApHe5Nrujdc9py86myaGEAmSh2n9H3ScSDwxRYcjnW4",
  "key39": "27z37PqpZK7cxq3nSMp9YmvwsB6txwQsrrcA8W4bsCtc5eUDC6tfUZJg7Tqan55MexKmBKwRUFCMDiPJGMhQv97r"
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
