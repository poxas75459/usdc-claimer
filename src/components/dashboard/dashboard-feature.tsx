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
    "4F7pKZhbxG6daEmCBZpMaqyJQR74NEGB6vh8SbeRaPMNj9MboenWXPtQmxdp7yjXerXaXPHcYqATJSfzKakxy9nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "336USSrX6ahSgKuoPWYfUL5gi3MrVBcidfbN2W4qPjNcPr3o5bdB1P4WCrmMA92hCPSnHiksoFo8URUKnVwfxSwR",
  "key1": "5LtoRz252VW2oiiHABR45zpdRQQ989U7HAQ7Gh1BXAmzzPPwXRM6WFPSNfxyvE9x3zpCXPnBRC9udMM98EpBWCLz",
  "key2": "5Ladityb8f9KcCAxChfwRGWkDsu8oLm1HewqoUc5uL1jB93vbmWdpMEm3WrGHHohcUd3f7dKfnLcuGivzgypPYrz",
  "key3": "9s761LX12TM51eQB3ko1px2uC8M315Yq5F4fNXZXLTEURcfRQvuAviTA5nBkfv3PRr9yaaBeRD3bhj8Lov8z9Xf",
  "key4": "4VCRUUxejyDksAbXwRUhkbHNZyXyrFWqoVMLvkRBfhReXmjX8zazqBEW6ThEJ6PQhnHxHgbTjkhqYDeF4K617B37",
  "key5": "2roAEiXCWyNw5eTP4f75pxLjPTX1Qh5TXZpLxEV11FV2mYJe1ekmGdV1FcXxRafLYdozkduf63uaRPAzE876KuWF",
  "key6": "c2YAthaqQs3mnWj9PXks4nX5thS6B3kfCp6siT52pHC1cNAhXY186cMWzrpFsAykAeG1dihR6nydxrB6CLMcYFE",
  "key7": "QREYAmeVfLiTRSAKm1LD5K3v9g4n12EC47Kr5UZqP5NN5FbUT1BCojQoVK3G9u1E7oEpDZEQnncSZ5HP5BxPvfD",
  "key8": "JCG9K1Z899cYYQLmsp9DxbZkQGNNfZdifEUSmV14ErCwfBF3rhfPYB4XpCj1CUNidHKZGfZeH1ZkD4LeNfjxaDb",
  "key9": "4UoUd7aS24Y8pyAaS2TGM1JGGPxmfh4dqkYUDqikjm5JuKEcV6kESTV1bwUfUAyZhkZqH3fBQ4z5etzYAQBVfxd6",
  "key10": "5ra1vTcGoxDjRqSuPTipv8fgQr3tHxWkxf7d4SP5C4FW3kR24XTuH1e3pFdB9eSbU3sKQTLtFdcj4c4CMpfYYq3g",
  "key11": "3o2NW8joE8iVpDuqQXTUyvq4q3kNG32enxTQVddgN5krxDU5LXs4iZTLsq8DuSPtRC3B53RBR2rYa3ysqdujgJpz",
  "key12": "4gRomghCWCvhG1XpoFGxKv4eeby585k6mxFGKnyjCE3QeEUVfGXCFYdfnLft72WXRVGLNw5rt9HQG53B8WYKez3T",
  "key13": "4S3uK8mFHM48FxGrDxWbNa56CpGEjTEFpbWRFXgvMzMysC1wFGD2sK4sNECWHxyUi6Ypo4pwufSKWaeQyUfqJGt5",
  "key14": "hc1FD6K1g2Z6gjaMcyc45iJd9Xv76jB3VzXQ5Us17uXcn1bLw6Hg59Wi8e9U8xbgTPkS7DWjFGowhppLp9yZKaY",
  "key15": "5r3CpeULy9gdEcUUEKWaSzg8GCJMqFX76V4iFrFPVei2kUyjKapfH3FTiLqtSVma7J1YAZMK9KCCbuZHvNDwE21w",
  "key16": "23G95XHYAshGGo3HLTEproRk3vEsqkJZgPGznTYyeNWpRwqBnmpZbWcNYWbvZrUMZ9ZNPV1e6GTS4WDwFUgTuNwU",
  "key17": "2Vp9gBRfczLyndgC6Hnw9AU276f8NdomJN3wnGGfHdLEYCPy56ffN3pkEAj1TNEZhXpQZr9rQn86BrbihZYmX9tM",
  "key18": "5aYPSPwwLNbZFM5rdqSAe6ihwM3n9A9xaNjLGCEVvfSihSkXc1QWx52et6mRJcaRF8kyvrGwVHMv2vTFjqMLWk8H",
  "key19": "hEEwQ8c6pxVdGcP98FSkondBoxsbj8UGQmKzLz4vbk3mnLqZnruT2B5P7uG2Xqo1gQAdQVc5scPXv9SRrEdQcSq",
  "key20": "ghjBYCYgDw6xDAtoagtKsVr7etpV95GYBsg7S1N6vgSv6Zbtn3nvdpgKVRMbQDpyqfL9BLZy4B83GQSgbFoBrkt",
  "key21": "21PBGFUKPwWLPCWTmwreghuWBAEoRZ7Di8EkvECTSnh7YHiksF6jNZL7TfseK73ezQTrjGRjinjJVRNE8XdqWWXp",
  "key22": "agNKex6C6MXKFAqeqTMiA2NVk8sV3uAGkKvzTFRTJAMznWvFXDGjz9YycDXQHEmGsfeWsVbW6KqjgeGqZbfU61C",
  "key23": "5EnMvuW6SHzyHcZ3kvYjDSPC4dDc1VYvo5Ag8HHSr21y9FqtxkthWGUhqmtmYT2cNxjzFWQb8A9WhQbu5VnyfdCF",
  "key24": "4JmEpBtgs8HyNvxksKVA988RnqJvgLPaacYNEPVNDtK5R1j6T5jkth7MHnStM69hbVVbkwHcwgVKf2hQQTbX19Xp",
  "key25": "4aBvd6hJpKz9dQk4vfL2j1ZcCucbuS5KdJMeW4UkuHdUZst7KsfZFr9mD32v3khDucN739bpFYb1pSxamkoHYGwN",
  "key26": "36gGiHm77rHCfraNsv5QPnW2f3c8aPJsnheGGJCyn4exJdRXMMkc4cNBQveHdkYFdUVHSkAF2NAZdo6DbKQxwgi9",
  "key27": "4nbrnckqDVpSCNK1Y4nLvihfkDWpRgCNRe4Wp357AVWhMx5HkTxvXZ5PvrQDi4tHFvVezUxtTwNqtGvUjjwfEWq5",
  "key28": "2f4VZ5CAwxfaBHQ8an5u3g6MvuH2WxHWH99j9X4PKuCXEj9NinxT5QDg4AKaVeLNndFgpWVPhsY6qwpBuWW8J3JD",
  "key29": "2GQPdCRGjSx6oUHRU8DYXivFWzuEovRKhz9iJBzMNV4JuxwTPGAfTMZQc4szJGuxEpWbdupRU5cFT7wh7KYvu1yf"
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
