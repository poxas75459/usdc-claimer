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
    "2cAbCLRxEj4yoRXzQ4t5tx2tKYRNbYMmeKZRYgRTNz92Kh97mRpV63TtqrGnYfzvKn2heFsZNVJbjZEKzL6YY9et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmvXsCHphYSZieKkb1bgFgWEo9G3gfA5Wu12MnF4diabM7FwBCfHo96NXz3unvHd6RJdyfnwGAkrggAVGnN8YaY",
  "key1": "3eSTKStfN4PKtJN2b7qycL5Wd1EUWkmNDfeHb3xWom9VbDKNY7fVnpGj2YQg4UoJe1CWkZz2RtZBfqVUmwi6Rzmo",
  "key2": "3z2M3ovwRcSfBZjgS143BL2bMAkXGbrXkrwv363ggG5XEPFpv3DXjGr4U7v287m4vFRDpU6dqWHnHkMpnSU3cdy8",
  "key3": "CVPS6sL3ygDmQjutPdkMxD3eUxybhVRku9qcsaqXQtw6zWrHjL18FuU4QPa9vh3T2D4SqnRcB8J5tJazwq2FEZc",
  "key4": "55TQbhgsWLMRf26QS9svhXLEJStNEekoqYUxcLTY8MhDnMDVji8QNL6JNuYC2gKDp9yaqs6jvE1wnokomX11mYxV",
  "key5": "2igGLf33fHvb4DQSNfBcxKtCyV5ojbmYSiW6AEiRty18Q3Xnio9e22RNbWePrWMcKsD5azVNzQD96yN237YWQcCW",
  "key6": "pS72d3NdshUu7Yf7BkEwduYX4CLo8YFAUQAfebqhLQpQLDD9AFvHVXV2xmUAMQjMHFoaVKV4xBEAFqQoXntbff3",
  "key7": "5aqKeHnhLYwQNZ8bwvCUefJeojYnnAwVMGPRrzMajdH2fE4t4wSnQHZYRHZJBK1n5yxBdcSu3w6vVspTPw28xBfN",
  "key8": "bkgAKFT6UkRVoBiGynU2ChYRMsEQNLdwNGuiYDpXCp7SsDmiiMf1X3wi3BZr7haCQm9yGLnNVkCKqRDG5RgXhup",
  "key9": "cNxx6pLT9aC2roAJya9okoFcGe2ojJD8a9t485yGGuBkdVpDXkSaVhiVp3HaLP9TErVWo7MXw2SQWWZp9f6bNGd",
  "key10": "4Bb8WxiA6qMRTMDmKi6E7DDLZQrbp4uTrELU5oxC9mEfwCWdE4GSNbVkWd6Jjj7GyZbQFkCSuVN6kWKLzTAkbj66",
  "key11": "2GTtf5SSaxxWLv9QWX1DNngoSmUn5hL1rNPgnuc1fABze9219vcxMDzFnH7BxddP1T6y7mEXy34ycoxM6tt9QJ6n",
  "key12": "BX8eSAdjoUrKNtHMKGB9zdcBDZJKtjPe9bUeh8zvSHhjUiCodGCjuqo2YoGUdb9tWoQ2xmqyceL4zhSgrwjwXCM",
  "key13": "34mpDXdpnm1RRDWHAKncqUTzvnA3WGnwbXGnFnGkVitTLXvpQhE1g7wWM5RiNoz9ShnfP4MEaVrbYQYLc4Wb6vwH",
  "key14": "3trtvc5XXgSR5omim7bEfKHZxEUbMnD5Ed1QMTmVy9cJ5CAa4gq5SEq5bVKZ6GKU5sm4rVjWc1dWVrzpT6z4zqBP",
  "key15": "5F5Wk5PwiBHYbSFtFidBCubRgFiFMoB1Afemgd4qzVvP6UnK21g7nBwK5w4jQyD312LjfriGoJUnYWo42CT9fJsk",
  "key16": "36vA4mMh9KMeTFEcXCgLoeqybZxPtJMPtQA2UsYiiafxGtzvbPPc9mkHivBsRRRebVFH56iK1q1NZwfFZfnrEe83",
  "key17": "8bUA16BHNkcjHQjmwcL5cHv4gQjzFbYxs2moWREj7e7R4vMe5THnpXdP7QdwXUFqK1KT7dinqu9gHiyfE45b697",
  "key18": "4e5Dnp4jMJYvZCg3zGzgSJQ5QsiXism3CDfs27DoXSbzwJGNcnRmyYmaHhNzJJ8Cw4j1EtztKGmEx2rDUD6GzLdz",
  "key19": "5bvcyziSsK8CaiGjD2y3SpyehxaDS3k2ZVj83EeFNJ13RdXpxUDMomA6a77ZMw1xLvrH4zHPuWUSfmffjhyr6WtP",
  "key20": "3DFbYgENP35rnqiYqeRkGfV2hXwfvU3Adfj1xvEo8z8H9zumtxhLQTngK293u4Pxsn1PtyScMzYBSTJyJLCaixsX",
  "key21": "DoiYJ52jNEmvN3GreoWkANg9m77yZqdr4KfawurCVpkynVkCj6kALUyMSPMV9R75VDLRUos9zM1UShp5N789BRQ",
  "key22": "5kmdV1u8yfbx8GZ6sqpFxpvrzjqamKuLkj9jdoYo8DrcKa3oabGgbYvDEg8vzBqW8VfgnBU6TwwoJmneELKhGNFG",
  "key23": "WrJ2Mv6q7kpRReEEzQtYeHZPEVZtwC7LE6QB8p3bZj3NsqYdnpU5LkCDuwhJZw4iWyo4xbmV6ATMnYpH5Ts6wLA",
  "key24": "3QMgvmkAUEkgrFo68UrNiwnj5X8XXptMhgdFZfWJ8WNXTeqv7S3s2KWwQakSXZovgAN8Nhrf43Jrg8Q5YdqeA2oT",
  "key25": "3ZBGCJ4B1SLHL9dSUbTSYQKSNQCyfDkgbMMNBTbmbdLRL1rPB9cw7WWf6AiwH9YbCBBbN7AXdJZjE8eVgvfktYMT",
  "key26": "3TvbcimDXfeixtvj597rkXq14ZYT7vfpXGvSuzzUeea6H4aht7RKWiVKQicjxoE66EHL6AY69pWY8Wt9Fsa42EHK",
  "key27": "4BTeAW33Tm4Fgi4TRNvDonYQm2RGRyXaP9dmSxt1QUur5qGZngbUEDhCSKwmfyCx8ngH2YSFXecKXUyWfv3HCuWN",
  "key28": "67ZFwkr7HCwwjTcW4gnx8uLQp2CcVSytYBm1mGrS58obGhpBhX8NsdMse1NwQsEHNFxZ5kpU19kFeP3LS6WVXhgT",
  "key29": "3KAdxt8NT6RAZD1GASpXWZXdopaV9uTovkYXijkWRenBKEZewyY2ynp1Gd4zmb5tGEtZq6vCKYL9YXBqoCZB8sUK",
  "key30": "3kV4oNqwJd7jkafzHQJ3599P9MVuvgpmPJ9WKxxtz5b5bXMC5hnbu6M2pATSiHZ2RgGGiZiaZaAFujjEbbQPvCaW",
  "key31": "5ggD1bU1NomFwxeG6qSwNdNRwnpBJGwevGaig2rf1utJ8nBLMFJ8FbEW6c6vLUqk7Ve4JXF2UgCXyE6KUMiMStQ3"
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
