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
    "5iJ2mtzzFatNQnpxwgVzGBi6wTw36PTtYe8cVviAB1xkQ8y9VzDUDD15djCy1ocz3Hwrh7iUGeb4mP9t6N3Wwdan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TTiGt7eeH7ZJzzszQLEfBNoZmXBzC3RMQYSJdVPiXqA11naos8kc9ASg23xJ1nWXvMCTHsqeoM1m4ue16da7Fu3",
  "key1": "4Sj2RiHFqM1m2hDqkbT9PctqvZihwv1SrvV8Gxyr4Uv5Hm5gVYoXMGxcAnXj6SSFZc6AkfvjZtULRMJkNBLTc8cv",
  "key2": "2RVt9Zz8dsEs6TwYnZMEZtsrmUiu6LMwaoUS1pB1HsTAmVJk9zM85pM5Ep8iAWB2jr9Pp3WWL16B4hH8oBJeHhhR",
  "key3": "3SpFGDXxaTjB8ntYUKrh2dBmk4fCK1ZsTCp8TpjA9spqhSWaPkvbfjYJBnF41hhWCv6g9hB4xtxyKhweTCrGBEcg",
  "key4": "3raHLGBYJEQ9Ejh32aMg37YwtWd51W1zuAPj6uu36rNq28B9JpFrvT2k1nGnszHVf1pM73E1LbR4t2DUnAHCdSeq",
  "key5": "36otdUphpvNXQBKWERcwhuWtSuFeQNZQhvsxNHgb4TnHAQ8TuUFLsVE6Kkh1xKttqYnxQPmar4wctQbYQ6NuA6d3",
  "key6": "39qKJYc7y8fto6NuGy7GyCRnUrYXUP335QJqLoMrBnDsEmWFKdUAawcRzkDmuhE55yRdzymydX8p4FnUJmpXrTf3",
  "key7": "KBQGsJdHoZq7GnX8j9Zatc7zMf7BcoFRr7XWnNCUEzmMyHEgeSa4XcU7ym11Rb5zwUbF5R6yS5gxEnL7ynnEguq",
  "key8": "5QwSjoxzMZptmNVE52aD9FKL2qjYbrPAyiDDeMsxbjc69w9VeamZQGf821nbUzYLosSES9PYF8rSvUCfjSvK9AmV",
  "key9": "5XKtMTc5PBsRo9Lz8VUXyfrdiP8ELbdZs4DBTwden98DZFD9UDfe7JZVfCczxoQx5QD2JXcKLj42m5H84vnnLD25",
  "key10": "487CW7FQexKKsgeVMK9vNow6LaDCjtkKYCwo3jhzssvhM3E5AwyjxD3WarVKUWEGJpYMKZ1WqPbBKZnwwaqTFx6s",
  "key11": "4Sf2sGBR1Q4F6T8fVXxMPMFDFJQKCprEqzZFmYzpGdtVSwcQQG61CYKmHh1ctCyNMTcj22LExE1ctisrcei3BvcL",
  "key12": "5Xq29h6i3CTtmpxbk1hkEdDSffJrJv77yZFTaJZtyPa7eMtxmwJjdBYNyr27WVzMmVURCPJM8KULyNQmAst92Ff",
  "key13": "39pi2d4v7JNKY7MrjpUoXZxEUwtvmWPXQY5BEA1HETVK8tqefmvx8jkW9YeBKuJWGrrZXrirwLXf7ojmx97Txuma",
  "key14": "4CNQ7kEv4ofrbfAwb3xeGUtft3LpVSCdPFi7FrPbEtauKMZPQdPfvKavJSpn7oCfE8GDQ2eVpFm4QGcr7YwLkLce",
  "key15": "4zKaPvF8eqUnp8iwfdAZcjghZxbBFo1LnSQYrR7SsKs8ufpKxFvMtRivqP7SCrA62mRDoQEZpWwkF6GiUqScQ7XQ",
  "key16": "4CdK9RrKKvoGLm1WUpQ2H7rPh1ZCtgVWrr76a9B8MZcXMPKZt9XR1nJ3UsKu4shtFtmEMBuGaodyWTEU1dNjSgVb",
  "key17": "5bvPCWaNyZTNtCMf97yaMJmBVYYv7w9AAEhB2VqxSHkU81o8D3ugvLNLigRDK1J77UgCLDem5CGeSs28TPkEApYH",
  "key18": "4gFdE24yfHdp2vwg7Svcfdag1rw1QXCMGndUNCrEkHXLUynZ4mH1RqhHj4oeefhPaDzy8z2z6izxhw6sf96RiwGP",
  "key19": "29qSvq2mXL6XfhwVnCUB8a6SK1s8ySw79DrGyRtkxtqfxLvDsuBS7eXe12a3nrbnrt8yEd9ajz2mUstRKRsPZpA6",
  "key20": "55YrL7pnHrjH2WXSq6MMeNsQXcDa9EY4rPDesSMUuurAkpU78ZRH9bWXTMZmVeLRTPFaMqbLFJefq8xRH5E3Hd9",
  "key21": "2bwyov4HNbUXLXx2ZMde19JEo2w8xuJn7G9MCjVsh7pL31ZcW6iGdZP246KthwM5KHDqpDAn4HdGPJRepNu17Fqh",
  "key22": "31fwvUiXxhTcvrYj9bGcgLxkzkyEyUdFfvDbAPEmRheSL1ZwgM2sy1Ny3bN8aF6F9o4DaTdn7ErXoLQZm9xvFv2s",
  "key23": "5TNGnLNuwc3iwiMhzsziFK45QvVAHMpBtWsNwopyPQijhp4mFRGvezE5RYbhNmFfc7dhzTminQS3fGTzewzFRnzM",
  "key24": "2MZmXx6s4kdQxVffyByfRv4D3RsRzeZQ3rUHqAtzaafjuhJd3pkVputnfFtuzzAZRBGYoQULYTHFf4ZwRRF8CZkb",
  "key25": "3u2o9tow7LaDpLVn6JJxhgTrGeQVw4wjQAm4AnWdq32DWGLjahEU8oWNiLuS1f5pk4eDtirajvWivdGzXQtqX7Ck",
  "key26": "3ELpsnobuVf3HTLuVXSvV31n5bwCzQjcqBShPMkHTWhTQjrBeaRYcdkgBfRajma6n17X8P6AJ2cJanGx1s16KY2b",
  "key27": "Jm3hLVM4WhKyp3GnRZHFbYMtt25BixBSBujQnnMEhbhacCn4uWdFZPVtppyBRDd7Cj5eH8pKynZ39tSzzX6ZW7j",
  "key28": "pU8ErDABxdzv4hHKhty6ypaCU29PrSxnDGENgbyHziHa3eePHqPEPk9nmvaeBms7cFi8XNkXPDYB2qcf735krVw",
  "key29": "4SrZUBWYAPxfBjfGfVQ8QEY4gzUN5EUuKTaiF86Jy8jchZgW49Kf4NtkqN3P6KzmC1YFYFBBQQiHsLmmbBEqGDEw",
  "key30": "Jkn2gGRiWcyCYBwsHjfZ4s1S34Bt6nUBW3VcWGdBHNidoyQjDJ1auEWqMsfiK1GLYDdjVqTBfuomRgvAFBVjqFz",
  "key31": "44FXh9FMXFPnhwdkb3ZXjYWWVGHRVN8NP6fU5uZJ1uMCGtosZh3fcY3XdX6bmPQFbpZvLwHtdK7VKBYsGH2WTPiA"
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
