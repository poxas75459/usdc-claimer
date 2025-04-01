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
    "32SyA2rjmoigmJmvsB2FjbhG1PAXkQX4TMNyUrpKtpiVGd87XGZphYPsEMQQqQ1FJtpXuEUAwxySvPWTeSvoLDMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6rVuptRtXmov5JGEuw9wS6SZsFiJ8FskzYdEawyQ29AdC21Kujgudikj9i4zeUYvwGCDbFwL9LMHStZbr5UAYg7",
  "key1": "2TQGCABZkvTK4aubToE6eUn6xRFZa5iHfQwJwrJxa954fBg4kZWU5hoJ8HHSgnZjkn551aUKafk8edmsZEeAMpQT",
  "key2": "4kda9fC5CGM9h4AijR4pAtnzv6YKdKKzWt7CyDY7BMAnaibax11KhAWmG1U1TUS75BmGf1PmB3z6XaqcCHE4rtVJ",
  "key3": "2dqkxHSUZECUbuWMnpaRcr9Znpxu16LTH8K4e7zJXA8PnoJireH9jZbr1HcUEhZVYZz3tVrawkFLndtXY68EZEu3",
  "key4": "2DbUae9tqRCwdKjshCZarBWABK1UGKY5HCgqnMtGtayyQ5G8okzwxXh9H8Sb5XN5iy5tL5HBwMagTvQQuq2v15hU",
  "key5": "38wHLL52q6bu5pjAPsvtTYZy9dqRYKR6RgHHtNyHZ3qCtwsnBVz2dYBCh37PoGi1dbWfRCNgXjpjwoYgQVSNr7hs",
  "key6": "5XsWtyTbfEDjxD1dmqyoRHgMMRRsMUkf11rS3vDLq5QhDdRDChEYTDvNy9GEMYMZspXEqgy5yBEWTMyRw2XQrDkF",
  "key7": "3wFcFRPAn6CLPj9AsHjWKCbibXvHpBYFujAmrRrB5s9eLe6DpWhZsZEQqUHmt4GAWwHLUvLeSfhKDQ3DuP2ht2ke",
  "key8": "5EgMJnW6gnu41ayzrxZA9MTNfQdNqRMf8aCAczXSB5XCtFLkTMtaAhsPNrVRWahhXLoYioU7P4vgYNPzr61TRLwU",
  "key9": "gm5wYmJrxvNWwyg8V2D3hG6oTfSF2y5wxh397MVsoCG1kYc6w5M4MoWGPg5LarnkPU1SHRKgxjqHQRUVctNoWmn",
  "key10": "28JftUqcTZ2z9bLw82HsF283AUd1M6oaMXdUcRyjq4pZ4WyhPfDNGGVXbKGwnt5YAjMCwaUunjjokMizsfRk7CYQ",
  "key11": "5qC6thyo31V9gRHuhj7ueAaKVaomp6LdjkWit7EZRaNyfFaprXw237Bwn5LrKRBM9Tx6Uu2FAxCoW3AKxduidYdK",
  "key12": "3mnpenEWPnk6XegTVWePwMZdYtQ1tgJTzqs8PpDL8mShG3E37E6Yp8tXG44rYYQ2tVsMCrNtBR8zzsm3L9qPPi14",
  "key13": "4bJgR5GqgDrHeFiUm3r1ABNjy2arsMXaRXNur6PYN7QKnQEbTLzRFXvsmKAV8Hrq8hkfnZxMvhNXNTCcncsa5tGc",
  "key14": "4YJCLkXkvqoqFX5QdBsRVNrBKWNxcYY549zg4zU2nn2xwtWdTovUDs4sxTF9HRF7qh8reVpoNZwJ5imwA3hZHPxu",
  "key15": "2oF4vaCX5B4TzUjr7gQ7NkrGpELKB1UdTFgdMqW2zukScbj3ThnVeXpw87mGXw51jmw7SSiP2u7JsNRHfHJMSabz",
  "key16": "2dUi4Fn9asGqCQdcDFPhMrJwunWpyudSaQ6VNrgpRBFCRWuanj18pDQUvPdBduVZb6e4RK4cmPs4fXauhbyjo9no",
  "key17": "2MicFyqwoSNYcNDxEAi2SCraRw8QAqSJAeKhARLAhXYYR2RFMpqVXBFUqhng4NX6WbTunrdsTqg8NpafQre6DtMb",
  "key18": "5mvcFDzTMwvE7FyCBJLSxnLPjJTJhmK38xKe4amXRFrtHuRCfLAYftwC9WpbAssUJUqiZfmyhgeeLyHzt8969UYv",
  "key19": "2i1qVtWvW9c7upqf4Vb3Cu8cDZHJTFVxJYENtVv9VPSUeWKb2eWgZU6CtXsF4XTpVLcZL8nL4FcUjsd8KfFtK1ZC",
  "key20": "3Bwu5ZntfVPUSLMMYwHvFNiRLYU2wXMJjLKRd5X7oTLy2EDb5QUh9gFACbmri8mFipUuB4unLUusrbDgzy8K7nEt",
  "key21": "qzpaazzAQj9QfvWbqkiEco4wGFSL6MWqShBYCeQVzUZzeaommozY9W33oD5xEMxFWsZC48w4XxFGnukFaDQq5Ru",
  "key22": "5bfRyRRvit3KugfXedFEhTcaWL4zPjknVdMzfQz17D8K7q9nyGnx8HghpAQWXUbmmQVaBdEBmMuJEBvuYBQLXWZW",
  "key23": "2Qt5rAd7ja2xk8nXtTTW3aKeqMUycwUZrq42jKiUnRYakYAv8BaKJqovXJmR2c585DgzMiE7eC2xkezx4tT2czAE",
  "key24": "2tMQmYXNFywrH8Ln3mrd9A7JTGxRKW9N4SsUVPCcavzxWpEJDCSY4Puo6ZyfBzkPoMbnEWxbQFLA18ec85c64jpP",
  "key25": "5y7MA8ud3SgEho4rVwaQtDRAgbbWEuSegC5hveVgz4UMwzyNzGtNpJZNrFHQgonh45uku5kikydYAMV98vH1B7sZ",
  "key26": "5ML5SaNZybKg8jK7M2EeQzNF91DZ5goc9kue7YjpRTdz5rcb4MCCR4C387REFDqp6117sM45jnwm1BPNsdfqwLa2",
  "key27": "cD8mmQFJCCETRDX8Wyy3V5Yj5knDVhhKweowdyUtZbxET5QrhWLawFs6CPJQnXcM3xumrU8jcbBK56m3iWMJC5s"
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
