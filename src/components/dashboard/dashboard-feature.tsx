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
    "53h9yLF6tWcZesj2q8C7mVd2oLpGX3sFDuGVCg6CbeTAgD6upTEyEqu8wjSVaRcugCZ2pSY3DzV6cbJqX8gVM7US"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5bncTcZQXf9AFaSXazohBGCTCw7aCbqD22xugdU8ApwzetMSR8PTv1rxuVCj7KRrqYypdYptZufgxYAQ6BqLXg",
  "key1": "23cH1mAz7oNFcw2m2v9fJtfPL9RVLJUue5Z5vrAGh1WY9MnYWVKR9pPfqM9ary5mAZVY5iYecg5DU6RPACpUw1eD",
  "key2": "3SEXybi5MqH8Liiix75bordJJ2sY7JU12wWgU9tX9EoPbd7mj8hmfSBjHgZRFSFkvkMX6EaUw1Cdq4HWNK3FygCd",
  "key3": "5JN1jdB5c1r3Y4EbVqzbPPjTbwXpaYGwNECGSRQqdJ4KuDsanFoVo1hExYPBc5mNYfNEUDof3uVDQKu1V1wQHPUM",
  "key4": "Rc5dsMA8Jdguw9w1RZK5R1Eivmq7Auirco5xU3iMUVXs6iv8cKUuAGH5gtJxowu2hn8hYFLQn7RExX3Azn2boUN",
  "key5": "2uWmwpQRGjRczkNnpAX9vdR8mSfrft5eK6C934vLcaLAGb23QiKazHn3yGnMvT3kCnhcs1Qx81pXdZWonsPAxBkj",
  "key6": "4b1wuAVfnQLgZ5nFvWoT71FehEvPUY8NejRHnw8Yx22Q488TsAhAPE2Aa9irfJvJp3DASMEc21ZdEje9iuiKqML9",
  "key7": "3D3SDVuovVRAx2xHLkB7KZf8cFCVnLC42yQexfZ4cNjMzXjb96Jmb23WovSnHSpfNx9TZPw9wQxFUMvWWQnhAHf8",
  "key8": "4yXufnGnWdCuBT4LmyvVjKDr6fSFjpsU73BmyUAav74iwFpQ8cwxiZExa9FVNVWw72MZMWTuGPpTJcJQtxh9oNhe",
  "key9": "2cXCJEEwY1K4eNkbzyNmsBDH5ntsEMTn6FSeBQbmNCJ3W7dra4rdLKKxzWesGYRide6nbKYmBbXKWD8qYFcGrGM7",
  "key10": "59LkjpvVYAkoM3o5A4U5UGM5guw23UpRmd5oezKSp1Kkks6E39HrXJNSLhJEHoo3kgbuoPCU2aksAh9SVuivJw1t",
  "key11": "2BXwVQ9mosziCDKppWsAF6tg852aQ4NVK9yG4bwXaqVUTD8DRaaVWyuueBrHxsxY4moK981xnk3rVNk5tMNevYbG",
  "key12": "4MHzneuFMKU9vsH5n1GTG2SgEY63asT5uJsq8gUmzC4z46yowRDTqbKmMT6PQqVAJkKvSjedbeuPBScdHDcJ1wEW",
  "key13": "48eCEox1Pty7R4m8pKr4cCQ8ttKfz9cy4Vc5QfdJYvoFTqX5HDQ2pS9s8o4hJYFGr22eDSLWp1wUtTJk7FkLFaVy",
  "key14": "5deYoGVvDnjrnEnn1NteMFyPfw6BoqhQxajqpPTyrXwKCLFa3A2cWC19gYujJv6pQykXhiCTasA5NWy3ScHjNNAX",
  "key15": "2SQgy5HueabJhaPeqyQHzYoPEtnZbBThqoFoHuKophMKFR9XtSoLLEvanyTcKwXaaSKaz3yW8XEX2KxqJcN6KSh9",
  "key16": "2jmeeEC8T96JE9pKPpo9RgYRmGPZe2Cs3ZtCjfa8x5Xr2crwEoBZAMH1rn96P7xkm2EFEoYJr3d7RkJ2PbUDh5pu",
  "key17": "3R3ZxXiVhGsgqZB7PyT8wc9UE1RY45tMJbNvKjW3vGCx1MZ69pwHJ75KDom2eZ13DTLsns67VMZaxMwYS2Nx4bPw",
  "key18": "3FSJDJXDjjZC4yzdhn3SGAzZT5QPJddJdoitgkeofjAg7SdyDGDoQBqY1iAKesLssYvbkr8SUYqQ8QXCymhvmYPT",
  "key19": "5RsP748FMvy4s8xKFDnAvxmYqtz6S6L9czvXQcnQeSjatMfJ31js86bNk3oBXqdt8X68DYTfaAEX5w72Gv3ciCdP",
  "key20": "59PvVxUStBe4uqEUSQudZARuTvLcWr7qTdHhbrdHFYEXfzp12smtTdsVVPUjTChppbwkbddJCd1qZjRomg1JXmW2",
  "key21": "2CFVV2GF1kABGe6rtRGeJvKCVmhRaFNhPDWGUEKEThniCCsopkQBkKCkA6pumnbdvaGzS3nWnAs6J4hUn2maEVgQ",
  "key22": "2Qw9WuCKt1Ai9SMZTcB3wfwyTnzN1pE4MxjNY55Jovx55Hv2M2gqThyFUbd3QsQFb3iwgen9wAwFrmNvf157ivp7",
  "key23": "2cFJKCgucw1WKUR4RST8jPRUG5bk1MAikLi1D8M93UwpH1fZaxc7N6YabKRs7QijJYDSMfd1tPFf1Wtsu9m4tzXf",
  "key24": "3ycA7eLPXXQyQREdowD16uNTHd5ANS3Q3amg9ZHvFNXRXPjAaPREs7q8GdBzqfdLNg6nHbikywrVwHhPSGTp8Je3",
  "key25": "4Yao8PsmwwiycawEoZL1BzaByikEzva4zMvDEvsZK8mWqcjYRmpgcNnQfh9Z7fUj875Z2M42EfTr6DyGHG7hckS2",
  "key26": "2aaMAc1kSDtgeSXc2zUeKUq7xtzaJFsgR94wcEGaeYi9MT47k9mz2LDP2hnf2WcxAARnoG4Q2kdHF4mS2kejJe6G",
  "key27": "2dQbGTWNjGqVmz5HLd57x8cPkQ9zcwgMAmS1uJqaJcBG548QRqCaLFMxPeRiW6whjzuY3NS1y4qZJ5DX4W1E123A"
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
