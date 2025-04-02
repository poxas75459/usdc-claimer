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
    "2b9G5B7AvkoY869w5bzrTUFeiszn6dnwWbnZ1nSQwHes6Acjy2CzxCzeUVLKrvxkXbQU8XNFy6azaZpBFnca5Ujj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBwdiG8DTja41auUoMuYhz1ZQBzZ5sofD8sHNAkZQARBvRcJb3mu1UuPLkmJnwEgzFx38Dt9JAgnKEx86N9fRo9",
  "key1": "4PVVZuYdVrUXfgzgcNfNnPShpGgbrEXMUBBSD9ScNh1hr5BH5Vr1U4JV5bx2eH31EbJVJ2K9zp3wwnN43X58xvNw",
  "key2": "hREKC7ct595mTjUGx6ZDrkejg8FfR14CZ3qFHrhZjcEoegmdQdntfuCDiPHzFgy81eMY4s86N6vBGkdGQQF9fBP",
  "key3": "43ZotsH64mZLEYZBQBcXQMDGt6W4NVZJ3zMzTzjyV1U9KEjUAQbehZqu6BHk4PUwE4twP3G4ZUyYGYDuc2WaqCMM",
  "key4": "5APZKvxEqcbNSL1do4CAk5mdDyAt4zU6esmioDo16Bbe4ngz117iF3FCrmRqPpCf4bBTcEPkMzGEW7AoJseWDqiU",
  "key5": "4tw5Xx4odXZeUagyBvQY5v67VpFzDgvdhETjTpP3cCSSXPMJ2s376uwPFpCaV94jWUaQCiCcHnaqBZBHjhief3R1",
  "key6": "z4CP7XPLr4KAT3HD9Z7yPvmNatFTJj8hMDHtbByTfrWBSyXYyRMBGo6LX6DxFhDZ6YFr6PsNRaVaQwogb3jVthD",
  "key7": "3ywgeyesRcEApkruw7yzrNtcUErGHFLoVJBgsYTvKEUqB2irRdRcYQJU41riWahoo21byuKGNB4NpQmao9be8YGH",
  "key8": "3cqkC4G2Lxf2vWYi9gGMykxcWGBvj1zXJGYQpz16ECLVGPVwRiAqnBK78ab8tEmjCf9kYvwJMLuBwZfU4Vj7CGrr",
  "key9": "EpyEXYg2aZ7E8yV4BTW7NiQoiPDX7ofoYXaDri1p8z7uptBFMUdMbrWKb9Sx3Lv9NXJhtQUVy7c32Z9pZqzdEkK",
  "key10": "4zhqsA64dmr4SMLgtddLrA8xm4pEnxVaG5acjMvx95rB8EiWRR6Jjadyu9o9qCJwRf536YuDkCK8YAdYtaC7EP26",
  "key11": "5mYuLJMon4N4omiimMfqot1Djd9vWGqQQbfHmNvxbT1Wez8n7G5oh9XhYt1fXjWXYhMFGiA9tXQfzeWeZsZUhu7V",
  "key12": "25J6tU6HrFk7yspHhCm3KeM8gZe6Jym9aWf28Ue649cJkBmNG5jZP6FA7JFEA6TPJJo17LWiJQC9xhUMUmsG9Z5c",
  "key13": "2vdCypYqjf7AZg87Y31iQPoGphLc7359ujtuS11JvTZHbcRaB6tg6u5kAqVr7rUNnCedozLd4UgynUEvJVJ6f21Y",
  "key14": "28chDyPjLUw5s6wPUZoiWFdX8F8JPNt7AZXCF8hrkM9djoxV7WLHaTvVgNc3zaspmTGKqGnYZ5RXaBB3KXcheSpK",
  "key15": "xhtzY49QUZBfx5ukpDQBXhyjGPomEEGpQ4iiwaCbXUKnboRvKpu8sHh8B2ksbZeggA5Ed9CUhTBYqyTAYc2CWKN",
  "key16": "55yMXaQ5vbdjyEWVGkfwYkFACnmvhdKBUxfkwYWHpMXeFA1vUGSkpYAd8wmSwEagSEfzzgjvt29Pjsb2X1PDRQC6",
  "key17": "2GWAXjmLXTYTFhFpHga7GK7vYCxDJB2WjXgJWjGJwMjoHjRKecUU9UBx1QugJdCqUUaK75PQP1etaJLZNgMYtkvk",
  "key18": "4wyd7BSjnU8qmHbMZRbh7huP6x32NVxnsxw9QdKTXZbyQydTu7qQgBcEDCttr2S7nN1gAEXqJn4wcaMmkvmjVX8U",
  "key19": "3fCzVzswY3Ue7b3dxpQY2W8oLb1hktaJ512XVYqEd1iWRVUu9LRGwbn1xH9TtChVJbatKGbY9ZLeJGTkGJidYCAA",
  "key20": "2tXrvmyGd3Gvcp2JqbZrMfYsDWKhJMrqyb9bAmwof1UXa2MfDBqLdXTi2bfUkcqTo6BHCqfFWT7yrvVbf64zVzSK",
  "key21": "4fN6pAzakBndXF79zEANhQQmcFHnPULHscMJCt3dnbVijaCvxLaXUogMUcT6SKsputGwr1LDEAuSu6tNEPNJvbY5",
  "key22": "5gSgwHrZ1ZJ2gatfAA1fBSsruLWCCpkctKoF2NbNcorC2sXuSjAUUBRbDo7YkJqugFEtucDLXm5Xcmh7bV6LkvVh",
  "key23": "4UGSLfc5AVXUwDtXoVXfkCbdgcLUQMyi8Fak2NTqfV1ZsEGG1JtDegJjfacrLVNgsRjNBxggUgCyQmqB1xHUeyyi",
  "key24": "5xPbBhRkH6Fq1q5Ubo3DFdhyjaSM1raRT4fZqTDmWUdizpoAUCsvdnRirCYLCN9entfAkkMW7GFqYAQT644S1emG",
  "key25": "3zM85S3X2eSHrGd1w5Rhiu9GJuB4LyFDa7KZQZNZcSZqyzQtbfHtESKQiX6uzRqUMhGTFsVcQRB3nXdpEbgussqZ",
  "key26": "3tPjB2JA8ZFV2EryRknRj6YPZj4TJ8snTPGtQEPhGxTFaEnZ49ipq7QC6GV8C3KU96dRua9fRezqwfxp767PcEyi",
  "key27": "e1m5G3Tnrokvp4AKL3SpkNGxq2SVk5UhbrM527LURokZEkeSfGjUAwdpQPTbE7S2rJjxcEaCHHUsXKngXQDv2U4",
  "key28": "3t8oGjXE345szU8Gs17etEzSadHByFdBkHXGEonvat3Lv3fUcBRTbFwdRWtXGTWbj97x9EWmNiJt85yqjUv5mnzu",
  "key29": "Ef5YCFTCjgE8NcJBWnUNqLixLrfyS4LG7mb6GeJwF3VWDjpnMM33yNJYSxqYTLqirQJCJ5nwfRRu873NHqYKT7o",
  "key30": "2Ucher24iAHqrxTWqLAwPWocAcx7zDQPujVeJDh35nQzHMFyD8uXDq55DD6ggHDoPR9UPoxqkbk8uGqnh82K9vnp",
  "key31": "3dSUAWainchjG3PX31d5gBxE7vPULF6yKvvYJHoPfZKweL9APEzpnzUwLTpfzww9fpNW2R9NbaPzpa33gD2MdHjY",
  "key32": "5RHrwVfh7iGCyEPywdqrGJjQ3rzCDwg3JxzwgBwGCSw6RciLxie7qaBFK1jCWo3x5M29kQ6zizfD9JSuq1zWGrfC",
  "key33": "28oEEHovABpzsF3pkxTbaw2ZvUU8FSYrj9r6nJ49bkcWMyQ9q4DpFvzZ9b6mfuA5HX6L2NYquHRJ7fNXSWu2jZ44",
  "key34": "2FjW7uv6aGgdNZHaXLPnkb7PSwKFHZrB9BxDDNyUZZQrc2qX9VzQ5RT69L84GpNUNjT1TAMuuwHpq4ARXTG15q4e",
  "key35": "5gHgLsHSyxtpLy7WVc6ZTYuJDXQDdQDYGi1ihdBjUopUbpSRbs9nzKMuqJL8o49sod8uv8LYKd45hhSQegKtzAtB",
  "key36": "4NKG9R3HqrK4nqK6eD5obQQ2DLPGx5nSVDz6BgL7zYsG1VbtNiewkaF2YStRKGTepC6fTBtSh3VM9A7iveF5Ctrd",
  "key37": "3CuMbGGY9MLxDRDhSeR7UaCNkdVxyU3xH26Qqgeh6FM1ncftM46brQKAdada2syFViECcj5TCpHeT8pVTfN9Nn9w"
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
