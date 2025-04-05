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
    "3VHtRh3jXAu8ouBzqpA5FqZFtJMrmWoLudx13Bp1EUWnRozbrHNMgAs2E46biPm88iywkRbRo59juDaq8bwAfBoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WNbXa8rw8diEFXVv5V4e7ok2VnRijyAvEaNob54xJEGTynxg6Gr9MXe1FvrwiRcGzk7qQwu7fmgF7DfpsBwMAh",
  "key1": "5jQNiDkbZegF2zXXfSM1Q46p2hF1FAr1dbhdWR4FwGHjGFegq88xG6ZZEbjYPGrwF9dmAZVQdAWTFhXB51ByMNto",
  "key2": "2Kkuw7vwi5BAiND2stzL49QJHjFbSSdsDjKZ9iJDvfJPCHmF1vcBLKLrJaCuAKrtrHi4hmHhLkTrDRGMVrjMszjz",
  "key3": "5QY9ErUXg6jfQaYvhu3xGSRXZAj2VMJ7hiZNgkLHPeKKEQppBmJLQbYRx8cEE8NHbTRWDp326k2Apk1S4uRHdC4p",
  "key4": "2FnN78kGtobdttNb3uvUpxf5wTWz7Ki6tfGkaZ7M2VvTcDM259XfHwHRqajNonR1c86sAEwRUvBLVS4AXdLXfGjf",
  "key5": "2zMPw7Whsg8kJzVb7L2hmbHihaneAhZsNmm5ZnUSWPyaBTLi5zMgEaRr5yD4XNQsc4myyDBwB4sFk2xhxBxNxCrd",
  "key6": "4aebchD7z1wR8YQQ2QYvotCYY8D4bFqenPFfb8chMJQzJuVKdfZJ9p1pEuGien6W7XmrMCaucYwQ3N2vtovRDSzo",
  "key7": "5C2TZv1uZmr7xmdgo7RTBBNKhzXquvBtnVSLYKhdG2caHBovcB1t7f5vTKbenMKgNtLmcSF6ah8B4riK4P53gE7o",
  "key8": "54Z5ai8ro7urgw4HTtpR58KGuGbckJVUGUHWnBcgtLTbk2vNzufKv2PnJDwhs7uRipM5vaaSAS5n8nLWLRKUF9cQ",
  "key9": "45AqzS3krj3kEDZd83vF95zZ8s4pcvw8pRShkandaUMCraBQap7Tot3DjBmGRegnHsL2fazRXjAy4yi4uoDybVuM",
  "key10": "2Nbg8Hw5Sh5ukycLNrX2tcpnYF8viUT5D1aBmD5vBmVtbxEptWvRdoSobUKZXvfZX7TwDe4GyE8fpT2nCcKM83HK",
  "key11": "24HdA2WtNmRoeSy1i4R7K8oXEMwfnVha6Nf75ivgLnScAJSD7u9ysbN2r96bat44ujgfApRxC8EoqTXdVNnXz3kE",
  "key12": "2KWQtamQY3Nb7C3q7XQa3BQZpFr5igHxHwNAAajFnWKScAWs3hPkve3gJJQbAg3bUfj8eG5rq7LwtUwtt2FaHKv6",
  "key13": "4pB1ekaAsKVnHJk96mUhmza7y8Zy9jN3JxMFFDF7zEhT7P1ksJ9jDvztL9o9XsGRZRANnLTmPWAEzaa8ubh7ieDp",
  "key14": "55bxJZbTzsYRiT1pQbcERGJdPRXBaM1NK648knE8Xe8gt26wKt8vz4Ts9guDYWVF7ATdJwDhqnPYrE4KWtYVVaz3",
  "key15": "3mCjvykvGKKLAcucx6yzYUPpK3AuLW9AfYL7c4hUUgDW6NEWnRPoJfUDpCBtrRSKRzK33wmgAHxVvrxwSy6CHRX7",
  "key16": "2u9BfssfkLrYvFfwvEUzeKng3Hpo8rYcbh4AgHd1katQtVjBf9Q2rnqMfYCpdpa9XT1mZ1SVJ6xtaFi8A64UhJE5",
  "key17": "vYmx8uFvNeHbxPudDxRe1bgaR4hDT8jYXhoAbfcM6H5iop8LLGaDGoqcfiqPbxVVTjpXTKNyzVnF9u1vh3NtwVN",
  "key18": "5WxEcWJY2Dj5TgxATAECU2Wd5rnRgPtsr7fEvxKvyDvjcLBatWSkfpf5PXBzQN2kWpi96ZYVHG8nQx1TAGa9SroN",
  "key19": "4wbtj1PSrPwHFwamGLU2FVG5JzSAqDv9gPwDogXHqkYXjftrPfGx6f6RyRCrfYZ7U2K1SWa8ZMF4BKhrG7JBJTAm",
  "key20": "4VSkAYzCRGwZCRAQZWX3Z2vS4DXbMZEbLzJzfpXUBJMNPuT2XwxiFjq5LtJunKWVJ58HqkMq5m47GnX8CjBGJMbk",
  "key21": "2ovMFNjSSV8WPZdrutG7ScvAiFyje8FadSdpVQGhShgfQGJkoyxxocW9jXHmRCrZBjkDT3i3dAUFv462rvL2zni",
  "key22": "2HLrf2sEdRBh2YAiV3P1GVxFbVw22qwPnkvMSU9Z2TiACPGc58fDPcRvazfarKE1nX9RZuY9iFyNq6aLc4k3MKAQ",
  "key23": "2mdM7ixuU7oYEZp4SatbRoMvvSvNRk6LzBzpSnnRzSgD2K5CFe4Bbdc2uqjaTNwZKCFYXqnqXioaBUXurPdZouj2",
  "key24": "5qUwrS4Z23F2QSgmepNVDKPnAwgdhcCW6UsFFKvuRqEVX7wch4C2dWAo7A4a2E42foAoCTCYmSq8UoRiagPeAsfK",
  "key25": "5g5jmo5D7CNJHD7vkvXAJfBVPrd9GxSaw3d9db8fcyK53AAmRD3UjG4rFVrGSNVcmJs8LUQtf4rdEyiECP42VJ9K"
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
