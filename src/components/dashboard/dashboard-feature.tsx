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
    "4ekLiMxPwET9SsTMnUp5QmXCtLjjc1ehfktT52sScKPrdy778r5ecxdUSnmDKpWkSA8YaDXSR3XzvYbepktJFBma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kdTokmERpK7X43tEXVAhejoUgQ1q6nSr6aWVYPcbBKMCEiu7Sd2da9oubuQRKJkX63ykFrgaW53fTgm3kySr1GM",
  "key1": "32zWeQCEwaaTBAuLhBfHc85o92sJZ8aBCbcvQzLhzPWsgzQMix8Hj9suaHfkyMPggSWoiKsm6WVPiTXmmai6mrrD",
  "key2": "kdfzPvX4FchSu2fJLjFosc3poAbrBgX7kKhkcEsbiFnfzorkDPPwFsruXjGJxwZjdMtmRExt9LLoJXSfNpTKftL",
  "key3": "4ZSk71D2GaWNxAbkgabjFfAo4wpWeNDpcQckWx2hFZ2LEbPjiEwhkG8JMbtgfWavpf6WTCsJQcKKcTNo3g8bPKw2",
  "key4": "4MXtuTTUVhVxskNzb1JeinoZfJJjAQsH39NNb2SkieQ2Wpr96TXX43kCnP6LrqzGYrcZLTunjRFwTfc2yRqgLEgT",
  "key5": "WhWBMf9iU5U8UmFn2g5wfE99ETgAxtiQxDw7AZmbJSkLo9VwMHiz8uPmkDzfNzhB4uAjZZsw3fgy6eLSuMpeYp4",
  "key6": "2AzdUPrN6eT6Evvk9Jj2XdiB1bzUdZdFyAabTehzU5hrA1aa2iwsbWGa5BS5yASr443QAR2HdCtWinpHR5wp2xD7",
  "key7": "2HNQfWJbKH9Lm9Fpyq55p1iHQnHUjMQep35dPtvLZM4PRj1vCbKwoQM7VDtqH6WRy7HEMnXuyq31CKEgfNATyXsY",
  "key8": "sEnY2PYfefqf2AHKJFynNTzLXiTrxDhBi5Fo9xVQUvLM3XJE2s7o27rYP66dXVR1W7532vxCep5URsXMtYQx9Kz",
  "key9": "4G4CvsGm9tGnCkfUH5pyyyEivzwkH9knHjXAqpw1HYHc2zeDHQWK4BAiD3Sn8XjsDfKZkmFGXZ7zYmzvX2aKS53o",
  "key10": "532FT95KqajphXgkU7UZt2A7S6nxRRJsND5Ab96eNeqB7bJZxaLHUZjBBvSoKDvYs1f7YepiNjceNysudA1cSedm",
  "key11": "4D7p1UKvmHYJmHpgcNxeoyaiicGgK1L3gt9e5dscQmSXzy7BFPfBHH6YJwcDYNDW9Mbyya25KbbHP6K19hUdJqq2",
  "key12": "2XsZi4rUXr65ino9VN3pBN3WCCnXTCZXfC4LwemrgqX2UvzXVzB9w5FEwPV44vypZjaZxXit9azuW8GR3ov1qKB2",
  "key13": "XWuyeUmkowJQixRjgnzaUusXWbiHS6UpVF1aUYrv8mbpFHWABjF4mZsP7uDhDjbqsn9ZYCqGwP6g3jRhWTqLBNm",
  "key14": "3Ms4mbQDAWbm3jD9F1ekcwiEEWoHipcQTUUjDREqo52Uwb95Xe6fiyv4PjkXSrw1pzqBtCrxYtXW5o5cJM28W1dF",
  "key15": "5a3aHJJN7YC6XbwULywKvt3rjrDQmtxNKKHTZzoMxBXztyxdMY66ho4aSs8VStosALajNXZ8uTuj2XVXda2Mjhiz",
  "key16": "4SmanXhr42Mq96fmcdpzgXp2d2y22X814fzK4DRhFALFoExd23EyKFcpe1zqac9neNKchLteYx4KJfP9zRKrbhUQ",
  "key17": "4L14npncsGNEtb8XHGTeJj8ndDg8uiNc8PwhkZ45V7NR1JBz2xkDcHyKF9bwHvKAsgD5uu7FmQFzYDjq6sZHuiEK",
  "key18": "4DP9aP45b3vUNWPNShCWahn5GGYLBy2pYJMRbYUtDNXndApUuYkwqGM4gpDGGaWrQgqVbBjC6q8r6ggQmysXaX6J",
  "key19": "P4sAUB16QQCKuaVAztBDg9aGAB587owbmfnFGxfnJZZVybDy4DueqTp5We4dbdpM9yewptsodbZNVjGmniQYCcq",
  "key20": "3yS3Nbd14ZxKnMhjCaevW2HKdzJDdY9p4f9gm3iXQubFThYQyyEMrFZzJMhxThc9Gkx6ydEvKiYurb3kgCTiRxcU",
  "key21": "2fPpBDraDNZSovNxHxA855NZFa9vGvx8J1MEJfgmkBQtj6XjsZw6vvZMNHoKWs6hev5W5M1x9jSYtzeTjuYM8kdT",
  "key22": "5io7B7xjEbwMyUpN9JycmtveR9egYD8GdkHQQ7pBbJvGsc6evLNdo9rCoU6LxfVv6sgeKr9pZ5Wf7WgGypHDkw7A",
  "key23": "4Vuts9o1BwviB5CvSXaDzJ6nqkNsWDLhEur3HrwwuFdxsBWApFBJFGvCmuFy7AJpnkFRDAnN8vMofBJQUrye4xwD",
  "key24": "5pZvr146nQwwrGiMtpx8bx8w9XDkkQ8XJWtwqEsYW28DBK8P2wcPPcRDVpP6Cdc5wGwX9Rygo2hxx2cPXXcXWiBB",
  "key25": "3qHEuHm8SPCu4a8pep3FpfKP538cLHT7aefwCZXRtrgfWvXtu2XHCCkbLZWmoCv4ccQxuj3PNcPN41SaFTosttxC",
  "key26": "5jbPVrSBH5nwME7p9PSWPLfLLK24oYZuP7qVwoSogvPiDonGNXLuYh2qDVWqHuh5NawrrV2cRDKFUkBmYAhJ3QP5",
  "key27": "4mQ3Cf8Z86Q6sVLmFA5ynB8jF8KS6vLdiS28F4QQgbNQESyHHSzG6yD2LGrqa9CDBcXYv74KbgLpYo3Q4VDnAaPH",
  "key28": "2PYvWCqaTQdqiyyZjhzRTLvPSwS9dWofoQCKunNpJRmiPfBjKcDv8nxkfNxn1HZS53dTH2X4BWaH8uUh8CNn1E31",
  "key29": "2ptBPTTRk9qzUdkzB8XhwhME6ARvw2YC3P448f7Eg61MqvcQk2HK5XmFFsUofmaWb83uy3WZBE1xQujwTUZ7TfGx"
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
