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
    "4EBQLQNqGQywj4UFup1rdfe5dyz21KnLzrQYUxTBddpNrWQjmwcJnbeKynz2fBpVuR7h6c7SyhKvo5R1LsQ2shW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H56xcBDq64VfXsxwr29fLcA3RFGrEgHB8yCu3Z4VtobMpLNvP4avjvxPnBmyxETvhh9ju3x7BT55krzhjCCrn1D",
  "key1": "2TuMwfAvJyVLkTenqPTyGPcqVKbZCbwu4C6X5KRysLjZ86jHhZ9jMvMHRLyvAaAv6zmpwxARcSvzDVBKXBmFJU9J",
  "key2": "2w1gBhbhvpKFAey3eUs2bXF5kBrinqb66xkvJZyvpeH3jA6UJe76hNUWwbDXqo2PCJCaVQqXpRMFq2imj7W3Mex1",
  "key3": "nQUiBeeNUQ8prkQQd4FJv1szuyShPpEbk1qmWpouePcEmnJhQmN1YaUpi4qSZ7GYNmjAMdqB7goG8D83zvR139K",
  "key4": "rZUZ2i64PMJmoFadFN8JWAgZLGBmGRPhg59jzLh2kRYPQuXoBV6eHg8mecHM8Mt4Y41kSwHkHCUEEYyrNAdjDp9",
  "key5": "5m6mYC9uMmN1X7gWb3929NGQhntNrj3tdyZRnEwjvR3pDPTxT8bcSQBfZwDTLbNyS3CHKUJw6f7idCU46U8oELb5",
  "key6": "27AKH3APTneVX8jktzG6puzTP7jjM27XLmyPMECbgNJBZEy2XR9AZ9h3vgpNPTZZnXEFEWfDTiDd5EfYbEzNpNfC",
  "key7": "2TwEpFPBGietz83k213FuyN9iUh5ZaUhsFFNooMxd8efB6A9E7HMMzhRfnQHKthkbBLt93AXiPteyae71EGe51Av",
  "key8": "a4uUSiYGZoxAMgkot8FyukEbczS9TDgWFqZt99H8Rhqvrk4y2YgkoUJhyxzxUCcrPA6oTsbxR9rnU5aNSmhpAqs",
  "key9": "2fLJhCWTidLCGw8zFKhticwmfeH2ubsaYYiunsK72Tt6fVePZRn4bej1CgpWTRFAu8M9kEsKDCygcbSCNABLLgY9",
  "key10": "bU2TCVM3KcLcXeFGTvPLmuupgxj8tp7yV6AEZL7XZrF7RwT81EbxnAoLa8HmCLqXWWkjYNpq2fVHqC6hyTKN1np",
  "key11": "RTGLRJ18zQR6w6VtKENuPMvdE7Rt6bFysG818BBfKeL1sKWfvmtnfsDtSF4PCM8JnfZ1q6JEJt1KH6KnFC1gMRk",
  "key12": "4Yi1z78Rd9SFSnidKwyhw795dWSgrqmimAHSkwg5zxKxHEohmp3chtVuGDHjVjLtZiYpz8T9uaB3SycVfXcZHTrC",
  "key13": "3ya9q3w7bAsdh2WxVMNnwFsyQn3Kd99Uq47zEfoLnmxydV2BEdNiBrUKnx6D6n6eaQfAf69ayukupzwKK1RburA8",
  "key14": "4frvFMTifWE4asfXFq4SwR5jE7Hq1ncaEZJEjLjvyCxMMoQD862irabyYSCXvkH7phDhPRdwRpAGzSBMhf4aaPKD",
  "key15": "215L7QR3ZH9pVDtQJjGTXWK3nqDtxozuKEhuqjQNsH9Vq2ny9BmBWkm8GMcDfejAaZQJNJW4uWHhLCB4GUDAThi9",
  "key16": "64ZpQaasWYF8NhQUcwRMiCQyYyyLLYnA4v7nYp24DcTJboa7noa5bLP48y6XUYiHsBhF7YiYJuZShBeMN16hmvzu",
  "key17": "3P3fUkgyPbqsVP4jsrhrrMBDQwPrGMSUvegftAmgoXzx2CKBK7qu4dASvsV6sKmeXZvDEi39TchNJmcFPs1xgPs2",
  "key18": "64eS3hMxpKBgVnUuxk4iJomWCamdDSDArAdHpE18Qq2QvDzKEt7y3KNUrdrxhMe6hA54K1a6o4kfHufhJBUAvujY",
  "key19": "4te6RnLqsym2kVNBVyafFZc9k94wSKKai1DKCUCSVDcN276AvQgNyYTopYZ5EQX9oEjphi7UpbnCHMpm9gd18Mbc",
  "key20": "26EkErEHfp5uNnuhkJ6L69b4VGMcG4u8Bo1vfkiL2upB5x7BR6HZ3Gy5jdP2ZuPj4FmbyYREvX51GPm7KSCD5quW",
  "key21": "3swQ9kAJ5zAKMALb9Ko2PXZDeZvJ2tB5cmA1SA6urxJZAez7DQzj1WdWuL33bzDtqGAVZ9kPzdn7iKcarJjtHYUT",
  "key22": "3GPi5DinKtKo3YueVcGSxyhA5QaXH7SBL1ACvqJzS36AKTqw7gRK5j3DzuBC6sgEE6ogNcRMZhrYFWiSRWzH9CW3",
  "key23": "2Rkenke25VwNQ8KV5VAT58xbcE3RPpmgNp9mp7fb3i1nKh655vKpieFg4szZCt3PjooKtrQAZdUegLYigkP4qkZH",
  "key24": "329WpoWurMZ5R8WL1FDD9XmPZt2dnPB4FWRWaa9VzFTHqdKFS4u6JoW86i3t4dTtEp8JMutMrzr6CEpadzzojwkF",
  "key25": "LB338wbdekUuktLbwKuB5h11ubcx5QmwZD3oqLLqq2Vpm3KjychCYkMrJ1dejRtR4RwE71SYJB5qaUucy3hGZ6i",
  "key26": "3ZYWBq6M4RLxx2aMnCNBg9Agh7pPTq25gaJUPX2DqHUdY1rD7ZKqspbG6Mp5hT84cBkNFDDjQCTiXnzPngDsq26q",
  "key27": "5QsFPECjf6J9SvLPytVCaaaTjPczn35VghQi7VsrdfUvpj21pPW2BEPxoR65g91wyjtw62wMa6AE4MBxgD8AGifd",
  "key28": "KxLZnB6yBf5rpjJdoaPx6Nxu22KKPmzyUDQJw5bXoTWqupH567qc3v87jm4ogqyKd2njJVi4hGq7m6w4JqkxaSQ",
  "key29": "CcSiL2tipjkJ9iXQeKVzrwM3r1r5CGgRtA7bsK6VCjvTPnzkyr1Tnyu2uWjFHEcyGz46r8GHT7cndjVDPyHr7xM",
  "key30": "4ENsdUF5Bq9giMrV7pYKcDjVKVcHzgp7F2AHxVjg3xcUSHxV8WKU9dyf2VWeP9QXWRJNcCEj1rfSWW4cAaLkDZ1L",
  "key31": "To8LdSwwPA9gCzhS8ZwjRcLKoHmP9tsJYWWcwrmYFBDjvNzoVq7sheunEkXsuG1yy3GpN7JrVmh6pTre8REcoyX",
  "key32": "5Xso1SiGy3UwGanjPwXj8MwDWT2svEpWxrYv65CjR2TWksbHfthajeT6XNt792msuwE6ECYaneWGp5tg7AyBFeHc",
  "key33": "2fXAudZMa2iorwd9eMCkRFybjKwTPpfJBDgVsdyfJp3DScp41MQzYaumBggbB5Ey9MN9AxMAKBzYNa63RZgLTUsz",
  "key34": "4JinBx9nK3AgbDxpE2AZVzeHwFvVibYnbuTb2fLhyk9gKAWGW2cT7CT8GEtBc1XWn8YUvrfuJbLEsTYiPdp32dPb",
  "key35": "4iTF5MJD6SRtyNP5gyXsYJYmqPjMwCCB1sNURKdNfKVmJX7kpRBiR4mqfL9ZLUvFMWpYpYUDMoFX3ZxeZdyqUnbR",
  "key36": "5pK3U2cy9SytBauAB3PTYK8naVTZLnvLSkKKkq6DXGqspq24zgESeyDQYex8zWtb3wiCF7AvTBWAzEs2giDzbCGw",
  "key37": "2GRGa3L8n3qchwVAMC5evZmGfGx5C9TV6qWZ5qD4WP4Sio1gg7FRwBvKajZbGAqXZCTkqbKPeDQ6n786GaYU7FP3",
  "key38": "4mTB7GEizYb4qKUB6mS92ukLcPTucV6qYrQtxWziDnRtUcMKdHHs5XW8dvRXav81EiNonfPuwLBAxmYUF8wv8yBR",
  "key39": "4YsHgDnqHpe5Lt9aUo6tQZbmj6iay4QDG9gd6M12a6WtQ3eepxc95jNWNNTgaXNwvi5vcjT8Eh15PcaYen2XmYV7",
  "key40": "3uKzCechRHq2QF8Ccgqg7EUWyUZHVikQPXXsQczugKwwH3bfowoKbeVNKma1AnJDukb5uURTyFt1iV44v11eXBSP"
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
