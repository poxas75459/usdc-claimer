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
    "2XkP8rMsJNhhfV8Yoxf7TadApvGN89RfBXNywyLBiX2gGA75m7BxHH12KfyiFH8QZ6AeLtpd7SPc2ay5dqHyrrhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3crorc4pHAuYDorW6TQeXTWAvd4aXNvdH5GP9D2g77q8xSnwjJBit2dt2q5UfNwB8mzmQHUpLCM6ZCRfDqBmhStQ",
  "key1": "WQg8aZSzDFMvaMMwQCj99NtAjEPL2Xqj2JzUTKFtBsRqM9LZpcnrVNrRhKbYAcaKCko7ucby2Aesu6Csn7XkjeB",
  "key2": "2eLVZ8AXhtsM8De4QgWY6bSM93X1nHjnzoEc76YJUTWsPnrwTafPwSCTdvgXZbRd415raJC6sqTgRgZxc7PnpMHe",
  "key3": "7WCjZyh8sztf1Nq97BA61bz1FWk1xXKkQn6MsQuvbGPKCGKVB2GaBtGeNT6tYF6FqiuCRsVHj7GphmhGP8SejLH",
  "key4": "5HJAULtTPdQvwXfneUm8Xyj9zNudMvqGVh4BtGNLKLzW8hsNAZuvBRorX2tFwPBSwiYzU8rAJxzL3Ffo2YzfbrL6",
  "key5": "3YQvK7TeMK4uioATxF6tejiYkMXVNFSFx5TpZ1xzgNNnb18Q2bwVMMFbBVJ8diPpNPHKkww2KjA7mVCLjmuLXbRj",
  "key6": "3sR9v5gRo1zzeqxcGiiZDjYKis1sVNCvnw9jwnRTH5SVJc8qj1zxAexLBzUN4k7QKisnjpSALush7vtMxFiJnGr5",
  "key7": "2uoBAEFusBCsB9Gr59NHJLELMsKJPhiYNeUvsdHyDbpZir8ydRhKdqH5JuwauuH6VvkV3VbYCZqvHE5SJPL1CWRZ",
  "key8": "4d9jubsY65j5WcV98ETCAU7QbGxifTETha6bS7PaGmbWGbateaqqzU2vjs9v2z2DDJLsRBGqvVjeLX1pN1YTfq3X",
  "key9": "jS1HfnkEcYbaEykqkNmRzwsd8PxkCJai8qnuq96uWNgFaDooHgSsdmWQDY4w2NibJ7xQPVg3moSU7nmp4uxUiD8",
  "key10": "2GUaLCFf1hD7sWUkcgxbTnPTHoJE29AuNZTRQWuNfVHGvEBybdtva4kFDDEk1ptsEw18NcVpC3N7VBSRV3wSsKsB",
  "key11": "5jttt82rSGzzuMZHXvqf7deghwQhtXxq5RLsbLNoHXWs8emooNGPBXJvc9hpsKZzevTeDrv2djetZnJWbQvZKPvk",
  "key12": "5fgazCAJMotGd6odYqQTpePEUN1iCwnYvTHvCcEJ8bTTMTjU8a8yRTXJb5wTWjwt2hKB8ZSRtph6HWnahxziQ3G9",
  "key13": "3ssfNpRM3i84gHayYQBPdSt1c9rufgDdKoyYRScVBk8P7Nzd4FGT65YDfWBd2ToTyuqapaZyg8eF3qzAiXQ6rM22",
  "key14": "21yCgAtAL73zzbkW3QLLqjPMJ9MpxPmw8vPXNudGCvRuja4oAUnx75naMyDQbHi58TBm5Ebovu2GJARc6dr5ETxq",
  "key15": "5MkqJ5vBtS23n8SJTYnFDjYVvvbCpMEGLqFa6idkUcSowWso4S9U5bgvKt1pLkEUAFGaCc2xMUA3tim1Y9FLW8v6",
  "key16": "2aKJVz82zpbfCiQvgHRpubWAbjVWYJNBx8y9hJSxjzH1ezMoh2KCcAqBs6xzKFrFnCCVCXhnQCH1CTAZh3FaMeLW",
  "key17": "66mCgbG263m7HAxcf7aF6ad6mJSkMuFak1Q3yEaLSWgosVy3VoYKgwAqtRvas5dijB723Wi5zyjUTYCAikDvdrr4",
  "key18": "2GgUzGbYGBdATbkkdVf7uRmqcJ2akvpgdAPNpSxSdkfVbGngrGGzqhnfDTDgDcGmEofpgwL2vNNBAfjH2Yr32uNq",
  "key19": "4vMwDJdsnx6veC8b9XfYvZt7MCa7gFVL1tdsgbw2BH17Hyg1dGsqVcXZGW3SpzMESr1351BUn2xpBBphWT25bYZA",
  "key20": "5MaKxTCuDML7CX3zTMsk7TLrXbmje9wxyCfjKKqnndcrKv9HHYakbCgrAjtcA3c6CBD1EipfGP4xN2XYdVABUYSd",
  "key21": "3jm3nLK5zym5fvQfYSW6br45LaQ7hSFUVdcFJSj5koNZjoG79aBoATqed1sJniLor62vwZAeCUDcXd4DL3sDcmfC",
  "key22": "QMhgNwyBJcZrE5sn9UUmpSwmxbKW4xKTNYCgdqUPCNRnyLuJJFhdHUgNn7Ja1zqDK6rWhKqzY7CAiBMNojp4rhK",
  "key23": "5Cz2bfue2JrNaZEhfXA84NhwBvHvm3GWFX79Wqi6ZMcQjSf5foUQauoQXczKivENsUerdk1to5kEBDiyy2xSN4q2",
  "key24": "4dKYVrYRgGLBTRraBodLq3rqdFjGp9nCRA1R6T9fiFf3qGpfF5nJbxZ4MjBacnzk4KRLg95DXTHtevEd8uPekRJd",
  "key25": "4cFArU6XVRovBTxow2aiSUMdWfpJF7XiZ344N1J7gnKK5rMqp1LhrrvUMX5ZiLxrLaeRhxKSXQYX1Nm9Cs6eCQAo",
  "key26": "5Ea5WaESHYefhoFKeQe6eksKEKtXRhs3KcE9GPvz4pN17qKQJVQxLGe2GbY3buik9hRdoo523SKFzhBgzjWL2ExH",
  "key27": "2T2dAVMjwQEMpNg9KBWXkxcFy5cxdnuD5f3EHKt52HUm2Rig7w4oFHjvdkiK6GLzEPVDmzVc1AASp9Q1ZZ6yZWCo",
  "key28": "2P7QvVMDBNJ8jCXagUHVRPr2ktvyycNMcf9ezykzQrLwRrnZQTrn8X7uPLbq2PTC8g5h7tAvHScAzNJjQxaFHJNw",
  "key29": "UGeajgPSFyfY598DyZdGfq2TmenGy2MfsoVgCrk9dsJQ9WVkiWbANiegfVjZ6VFiwLRN8JBQvZ17dGSyFENMPDX"
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
