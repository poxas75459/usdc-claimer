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
    "2tTcCGrk3XNsepyzhMNnT2NgViRWxoiqnz1HQE7hZgFSgg6mBPTK1FgNpFsYxCAfTKo1a1B8C13Z1gc1RC2xuMvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z8iKsfThYzy25GyxsJFTLqNbFvNV32tGeTBn1Aw6ASFjDcwB2EizYNDKHjZnrXGEPyiDUP9rinwq3GeLgJCqvEi",
  "key1": "4XjQCuNXFkFMcZT1v8tZVHghcuJTC7NaknoTnHEahhZ9USHscwh6jkkz2XEYg7aXcZwQ5AHJ8KHsbegRqrdmmpxg",
  "key2": "4ZNmrAmv5oUCC3srZeMYpLeuQnmm2PZyazo3jeySDmAcvv5vFAe9btRoMXdCNnn8eNseMvC2K5YPJWnY4fi5WQ3K",
  "key3": "E4T1cyZSdKtDs6zJJni8KPmBgvVQEfcec3WDxCxq3x171ghoZ91LcRFrhbhuZGxnRUtvQkwAd8Q1ZUTuhvzuHhb",
  "key4": "1qmqsFHx8cfcX5RY3Qpf7E8H2ZfpHfqpM2FxX35xpg2XdPqLD2WBusymQ7hfs1pGo6r968EMQY5S2UuphxEfA3G",
  "key5": "2jJk8u82zmiJw6TKVPgjC8c1XT2H4MwP7fhgUgkxqfQbG8dbUdb9shMEy3nZ6YDKtm6BX2GWC12tuF67Xh26wNX1",
  "key6": "K4Y3nRaLtpZ7H734HmCqycm5vQED8ZueKgm9xZrrhwhTW1HTS3UYcCFbRkXWkeghCAJgwmUtYdNCnAoxXkXNcFh",
  "key7": "vahYMcokTB568WdM3X4tHZCTZavPbEXwNLdYMW9hmqcuKQ66GNobMEHp6sq7hcSP9GNusZED9TUiqwHoRaMpXis",
  "key8": "3JkXYGG1CvrfK9guCGzfDEZPTTSJMgpasEafzMmM4y3vJ5sTRKbykSSwGVnTGFK33NMG6VupAP49MFdu9ZQXMcYS",
  "key9": "4QrmV2t5JA2hrNxo5aVzpYvnhxUN7YbygoUAiXNTMk5JuR8YdBgmM2TCZUB3fx8z2QcyUteJWP3bVfw1ZMC4hUmT",
  "key10": "3WL2fv1SFCg3zhuXE6MKGs7FesDitaw6t1du2i2wUaErB9HaRudVfHHzrL1BsdN39nFQNUPXg7MrPK9L66CoWgtx",
  "key11": "56ev4kauyLwCuYFKccEvNoJNKVESbXv64qyoy4bd556kGumqFrNgZBuCBHJq8VggwQVkpaTSmgLWJCvG8D5XisPD",
  "key12": "4zMJCnw8eFbjQwmWMtmMMu2GBKZKw3sfQS8ByJtVHWLn7ggUGXckdMzYpF3tpYiURjZ48rm4UsapextxBdyWCbtR",
  "key13": "3d7SDPTzohLFXJtBzrFRZ3pGHUgPy3soFh1vnmr4dogubGDkUYjW8WkZUgbWX8zGiYgnwcQChUtL4cGVUeUUXrwF",
  "key14": "3VWW9EMxhi4FR7X6rqPFJU6FMQWuRcdxBtq2S9kmdgakrvFcmhyB7nvEm3HHepxt5x1gzwfTbauRbJ5TEYMLNTZk",
  "key15": "4D7VvJ8kz8CDvkEbbcyTR4Dqm2CgVDpCmizGXaJz84Lo7NzNrQHHCoAfwtcs7a98XtuHGRaabPWfa4wKr1afiyWQ",
  "key16": "ARWQhRqZDVKYJer2e2YxgVbQrYvA7xXnL5veHqunV2oMtigkM8jawWooQxJZ34Y7vHF1wRqxvxmrEfQ4jrBqKVy",
  "key17": "4sZpEGmS2eeHhGW5drVU3EfNz4psgi1vDYAfk5qbCDprYWmWD9rreUJpCYLM7XULwhsvsEMo8rgmd2rkuoEPG38",
  "key18": "uVKpMJ4UKE4MzwMWDQrDqkZwmFK9pFhk3Ke7WSccEoxfHvNNoiHLJBWFHqzDobDrPr7U9d9V9Yd4HLxxfW6nCnk",
  "key19": "5GTHk17soZboQaaZD5A2arAQP4UkBoRqRb7j8ego61joXBUtgjvApxQxS6UGjqW4JCP2dgRRYsS7EBF2fwt4By9s",
  "key20": "41vHg2FsxVpeKHLYw3zv5bJ9uVmbvg9RPK6Lf7QAcdvM6Gc9FHHwy3A1cF8L4CZdUzpC3RChSR3WHgKYSZF2oHtB",
  "key21": "3c8dP3TxGc6kDaybFPDXgDciJazrhLpCga5FggDLn3iuQ1DXJuRL9S9VPyHT8ZHKSmPHWkK71jtGv6A5xsV9mUkn",
  "key22": "64LWTyPAj2aBhr3NvBVSssP6gHkHqi7xV6nYhtn9CMk4nhUcnQjWzAxdKFfnYHTujHJPstuPqcQfrGqfmhPHesUD",
  "key23": "8RZzyn3MYdWJfLXWLmuqy5o2p9TM3Gy8euE1uwhHWmWuns2N4ZrQGqpd36kNunDi2TpV6c3K1QjJJsmViLVcYv3",
  "key24": "5obGG2qBUZamHgpsvZHLAq7f9g8xoGsM8sLS9qCaQt2gHhMGLqvqsZphoKhTDNX6wRvZNhrYa5gMD7juXE2Xr8yJ",
  "key25": "yGWrudw4eSEnJCzm7dY2NASyKR1sRvWsHnjrGiivdq9R1ALEQmQXsgBhifukNhmi8UzQDU7WP8JPZamvfc36eGw",
  "key26": "2fXYe1NpCMaqRqmyY9HMDaWi7pF9RyBKvRAYhze4yipmnN9S9oyy6AxLRnQsPVwUSvHjo5BQzeWLnQcG28QPEyBh",
  "key27": "3n5HL6yQuTzcxcSThSTacHNjRgSwsmJr3VwUEvcUiVeT9xDZ2YemxTcLCJ1cVzVEV8NMAopPScNsy5rFyaBgFeZU",
  "key28": "3joUdtYYqvLn8cHZ7f2QvvHjm1XkSzbjE5TZF2q4sZGE2E5njhLt1iA3oaQyVVmuYZ6PMAL5n1kdGXT2N1Hq7ZeB",
  "key29": "4oLtGuAaQwQMx6PekiLQ3CEwMixSUMpiBUCR2e2dRgZAm8EWqcAbVfdyL7L5oGATaNo8jbD4yR5m917hgbF2n1av",
  "key30": "4fYjnZi5xzhypxnYemkZnKiKLrBGHm6bwgirnuMGAVvyo5gTT78cYay2GRW66SRaEW7DRhanaWujwdUpKsJ6iQSo",
  "key31": "48JMWWdgqR2FPEyxbCk8RyhqyzfvaJH4S1dN3sRMFv8LLn13n5U3HmHfGEJt816k3DoD7RT7MHrwxNnzXBrPmT3k",
  "key32": "2HCeTSMkGDvgX9mqe34UQWDt2LnRZr9TVPcGZnsd3QujgsgnLeY3YpKgjQVFq9imunv21qw52QzSUZrteLK6JNmF",
  "key33": "5NEhVR5oeRz8zaAZ7fnVPhov4Wrxw7RzcQr18pPx4uxRD1vVeHyK7yxDgWFQwtu1UuA6PWmSsV3vM6c77Vs1CTNx",
  "key34": "3g5jXtuN66KkvowDd55Eo2NavbbReUZLQP194N9cdEgDZdWgpKib1jcF9ztvTwTAE9rw9mcXJBXn1SsYJStK4nDz",
  "key35": "3Pv6ArR8t9XaKhjTNKTHjRWWTApMUeJwyfnYZbyahwBGRuW3WasFHPF1vy5ezvg7z7d6PREaLAE79GzhKMzAh3Lq",
  "key36": "5S5hVqSVefxR5SZZDwBwmUbYMBmJgEyf3afjRqdwhiLZLC3EUXs8A4W9mxUzR913f7jZnxGbgtm9mXFnTxvKsGax",
  "key37": "2yR5yeciiwNFWxHTGHSaRinGvghxBSQasSHRG55Sx812nWaJ1kUaW3eLkKsBJA7wdCCoszDSdAuzr8UbvDTT1Sc1",
  "key38": "5CufVfZQNAemQxBd7RN4U3oh8AYNVveKB64sGaYLQdCJakfZWH38nD4s1u681ungCHZdmhqXBFJtsQg8BTYoNnmS",
  "key39": "5BAMvamEC7FbpZrjWaUsAUGCuj7oUZtmCWSEcFhMZ9GqxvvuhcbfeVyJjSu2nXi2WEE7ZPRwcE67ZBo8CGguK3Tf"
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
