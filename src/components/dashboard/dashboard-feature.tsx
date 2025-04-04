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
    "4HMLaykwArosacHjAgZZoo4VyWMNRqKe8hPUm6GxhVgSUT26VssaFwreQEsMxVhaqWTj1uK7TyVXqxicX9px8p51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6C8srqvGDNop1xD7sanEdA3vZ1vJtzp6GB3gG2UuUZ2yAQLiAL1aJ1Nar5n5HJCnmWkb9Zfz7zgzVHLn1uuCBh",
  "key1": "3CuRNhZcWYrGqYnLSRyPLoPznGpiZviq1n9ksug5Q1JgYeHydfFEFGvAxYpvGWAxoWRDYsgkMwFdCYjKHz3HJXrz",
  "key2": "4VCaK14UcneW42u3jZny4eR2bnqMU78Ho5rN65qYAqNybgAtyw8D7UfsExHrECbPvcFjuf2kDpm7VLNdzsSwypEQ",
  "key3": "4kXHeHfTuqxWvZJBXJ9VdwxgBrAjL8ZP5D1PF9rv6ujHdabidfLhhhEMJ2dBiQf9F7MD98VSqusH5cWVxXBRYh8i",
  "key4": "5J9z2btVW472ofoq5MqFiM5XoHjZ6CpF5YtiPhnZzGkA5cFtpw8XyiVQ9YK4nvfSZSxYdEdftLnD2ndA2McsriDk",
  "key5": "4vmSGUZ6uPFxPiZ3ugmArYtzDrS7dLkKHAuLvmJX8rRCptT4deP9AE4BqdtUiC7kGtgBpi838tAN6eNpaDr4Y9DQ",
  "key6": "3N28Yzc4E3rr98AVHQruqKxZEwmhEJABYB4fqJst9ZBGoBYRXTbrSQobf55vtxjR6LXBwj2PWMrLNckdtqUFCkz4",
  "key7": "4fp6CpQT95cjKYEbtZC3wiCXLNemrnk1T6sTzpZB5PWJgZbbJudQvNtPifW3Z6Q7pffPhBChvM2Zreon2iU1UkQL",
  "key8": "63a5RJdhpPvkH2FWBjLfoqaBs89YKwpn6b6q5dAXf2X1noYBeZPPhWmxnQAAQKEVsL13RRwuM2dYZzD3Z8unu64R",
  "key9": "53phyjMn3bTGbUizHK8tt4C7H5RoUBbDUMB1tcim4koiX2aXcY5sxE4VUTA64jUnLFRGKRvJEjtQdHCvXf4pEzTz",
  "key10": "2FvdQAYneE1igBAYg9FGJKMA29K6utEcvoWsWFuESaxjQFfMkn5g9ByxjpGyR8k3f5nvcrEBRm7ptWypTc3zw7s2",
  "key11": "uD3Fh9gDJfV48NcCUd9Z3bMP7j24Y8dFks3gKce3V7VxzU1i63N3KPzpPhv8fVuDnq1yPvjVhRh8NYtB9CWX6vQ",
  "key12": "4XZxMGmPn7ZDQRFchn15gCo1cRbxJKv4ymviECjabM9qLbsQDkX9ibctKFSA6RAtG75D1w43oced4JFjp81yUXDi",
  "key13": "kmHGzzYgCjG1jeBBNECCHVHwUHVCrThz5ARtnvsx7XocDhsurFxAN3nBJB6WLeEASepX4rcXAHxoKwZwxkN5LfY",
  "key14": "A6ije5oio5xwYCprTjwScAjWb7rFTgM9MuGWkNyWQMmryov3NgfyByuHRBw5jGMe4L1u3N5WUwDUTBehdqUUTUm",
  "key15": "6gaASSSJxvrCyTgdKyH6S9bWwuqXDVwRUWqVCujUH2zyu4LDjWjoTw7hNLnXb3zPyoZUNdrSiQEHej8jvrYqfDM",
  "key16": "3GyKijGUC4r18f1MZdXGmKHvkvDb5iRCKuZXhQ1sxgRmkR5xx22UAyLr4QdeMCy3omGdBKdc7Teid3XroENL3QZf",
  "key17": "65QUjkzcxbxUk1odTsrHS6BkBhiHPB9dpJaA3zjBB6RSfr8FiYUeaz4919t5ERe6tZYtE6xm4W7HUb6koF1UgLhq",
  "key18": "5f7sGFAYTmYb7XavzaXTpkggxw9PG3FFrfENXHZDXKMmKj88U6Xs8hzPVs99CMf5ED6SeXYzUEU7twmPp6LfKDLf",
  "key19": "3VBQRbowxKvceir8NU65oKUcGJUf8jKjAiSbJ5tRbqRBYcABppWtxK927246aZ6Vs8nQbhYWHXciRsSHTmREzzni",
  "key20": "4AVS6cpNqUmkx2xA5UxgspaZxSFtk4zgW6953BZDDsDqmxDvSuESiiRtFieaNnkJEXxpDtcyk5mRjtUfY24Pwq6k",
  "key21": "z7BhpPgme5Vo4c4MTJyqqj5WCkLxy1Bc32dWDdFcg1Bh6byUL9o3XrPjWzkWeYsifmx4NXGf2GBwzC5q7DKDEo7",
  "key22": "VmUGti7ydrLFGtjpZ6QNpR4gTJNhd1jrvftKErvPTzz3dEfvbWtwu9SQ5wn7Gj6Qvpu4dvsupjmo96qXRb7aSru",
  "key23": "5xWsx3KTdP9apUugor4cuBF1TjBkcTq4uH5ZNsDdHFzAzZJL8Azc2hSWASAeyzgqypErefp5ww5pJvQTpBQRSY8f",
  "key24": "2HMuHti33fZkkSS1M1xB3c7X2WLckpWcnVTvvgfW3oBT46VBE26yw59vwNhVzLxwcoGQjrRMR8X14Dr5am2DQ9V4",
  "key25": "47JmdZnpBbMZTQhyang4H79mjt7RavoHXNmd69FwvMftUWvWX88Fr9URD3TahH89BRBX15BcM4xheSHZsw5ghb3H",
  "key26": "bse5f4CTCzrFP7wTWZg15dSG1JJvuVPoiucBqwbxmu53ZdAKwCw1yfysCdFpfaZZAPj2nB1XzyQ7ywggkwYvBMw",
  "key27": "2pwqBHBR5LrwF1JkBfEMqB7e5FC9wrPuEgqXnuzyS2kpd5i96eey5UhvE1f3N3864xynfKeqmmH4LtXTrMfzXn4s"
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
