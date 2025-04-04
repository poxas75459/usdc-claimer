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
    "5Vq6FVo6zJMzyk1yVxRsiuvTxcjxoRkRkA9WZft1ByL5wFCXGZfQ4TJmaWJEnHNbYKSCyNxhYAnwkB1oDJ33FkGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AYQjSEvE8vZoHKtZpddVKKPSiDKr8tsBPUBV33czW6mxFv2X13UgNSRbD45nyQBunRvR2Z9hXjUUmfNcPLNzUhV",
  "key1": "559D6C8MCN9VnRcNCmvLLQMG9YPma42ktDDNZTKk6bNb5nR7WEJRbn2VFn4Mb76PeJpS5YCsvHAszeQEk78VM8sE",
  "key2": "4m3cW4k5idzCDaGywNVK7Ze7SfC9GaNiAC8FEKUmk4pYFnuyT9wLwAEcmzSE9dP63uJ7E2PiYaYJZ1mupXKR2zr4",
  "key3": "3X5mbTMQQApF6E2js8qQT67Yir2kbs1EVGuZLcxZo2qRVPyRpobfkHMvGVAyDGV6UkaipgsawyNAZKL5GmJi3feT",
  "key4": "3bPXjQDNSanwG9MSo3nJQhTmnwZ2SEZcbdDvsx7fxx3o9PNwUKmgeXdJDeFEfPftmcpa21crE6xpZKSGdW2pYsEF",
  "key5": "4y2hbu1C2agdqMZySRx3GYNteiWCDehdvUxcTRGpfK8bULKwxzVZACXqQ1FQMkRgGfYDZyZ9fxdd3ptJ3spaZ4mv",
  "key6": "21w1LW5CdSkSGDYb8zR5J6eCaMYti8KWhG8GunKuML1PAVq2eWKjfKydaV99mhD8FctE9i2NH5TkQG8mjWraJFuc",
  "key7": "w892KwycVepdzHg3D4Q6VpNFsYvy9mGYEnmqZiGvP3jtsDc9MHjHUrcbAmeVNsU3ADxjLS5CZJ2DzZuReVbZiBK",
  "key8": "3APUceP8awvoJwpgxn5qZ7zFPmoF4R7hxX2KpvnKYYNwkRiMQnurtNKRmcA1ZqzczAB2C1bBkqfFqou1JgiBjS5v",
  "key9": "3z4UNymtD9oi3JtyWztcA7NbmYfBWekg3rRHjpGC2vgNtpqYru5EhSgW7BbADuZFMWMGis1qCjuAMpYM2LtAaBm1",
  "key10": "5oS2kLD6jBrvDeN3QyajFBm4udtRCKsWYLr15cQFYnm2WDfxMexdN4MUqTqLYKgSANJQ5sVnekbNTuYeyB3AT9X1",
  "key11": "ot7RXkhJa71vwLFaoo5BdCDftWuWdQ977k8iS2QbtaNgCmUWgjJTXJqGfchfE8c3Gu7f42Q5F3naYnJ7H8GGwnH",
  "key12": "4jCNwyhXoB3vLnAk2M2QzDSdYV3n1C2fzUam2tdgGfK1mQKh5Xp1AiSgDnKKWFFcuC4RVi2Exs2Lmg5K8XvMUiCa",
  "key13": "588rHzcsDAu42Rrm5ccwgLLGjUVJVBMYzDNRFF7Y2efRW4scanZvbtrbLuR9J2gnknPuiztnKpdnjSf7Dd3mRfLu",
  "key14": "2H6spC9YhVxPQ1u1ndzihqDuK1zwBbpceWnPEK2Zs6ciQFx1o4Ly21WS6WBuTKUPrSnM782pPrWYrih5dQcTTX6c",
  "key15": "2cKtdSUhVo2Ue8RZfPfF5c6zfosKUSxmsmeDnes6Gc6TzE7y2Vo2aEuovrzsyYUjGwqGRgtw6tcEaKJCCi1TNWsx",
  "key16": "5zamjjy3ocHsEkFZgCrwkxyFkjnD2spKCuqzEb2WxtuAhqAKaqU6apJXoY4wkvFCHDYY16bkhiHFTnbWAwAWgUQJ",
  "key17": "21h8B4eHADUSKCvNgNRaXoY5AGWYhD7auUBF7bZiHLeG4kzfSLjwHcmLjxAJErdW6oPEb2h3pCAkFqZZPKxCSr3T",
  "key18": "2tScaazfFcmVvapByDPicEsAPdrebvty1yEZhhWCL2K5itaam7egahE1m7AAcJW8TT6amf45JAym7VvogxRVzHv9",
  "key19": "oZeG6HNoiKf3FiDSZnfPGE8dFdJq4Gt3LUdRPQtxQXFosJAodhZqp5wiR5JgVa58iCepwaAyy7jsLWGLYtRTobV",
  "key20": "56PG8LTdNBafMi768751tkVT6c4bAQECyDpQgWBgctKrKrAXXiAGnFkRiTiSzmgn9JWYUuFdTybhoAzXq3Bx29dJ",
  "key21": "2XAFhVFo86ZrMTAQj3ELi3FqjfWe8qJDx5y5LByN36zHpdRgVLmbHnm8azQdszsq5JbwMzeezNYD2gnXR4MWbBM4",
  "key22": "22RSj2Vg7pQ7r4sJ9ctqaAZYwVk67sBUNmNoBjBEafB6aP2QV5g5vaTz6iQSr6QAFM9GL6QAsuapvsF4NfWQRszT",
  "key23": "LsKR46VZsCv2hKYCGU865WcSjTGjDiqwryJTd9nqoPXXtXMfCQBYxjNbGJ8QjgGgcJUxm2rDg3PrtKhDy8e42aB",
  "key24": "5fqM9uS75YugvTGZLMjmVjr3t3hSmUMCu1Jgh2nscbG2dVgCFU76XPLWa2SoRFEnRTU7QfFCi6CdYQF3L2xnCTHC",
  "key25": "5cS3XWBHdSw79EYqjxGbsGX8vbVw9bD1v5TFcDm7YcJjJe22z1i8MaGz8g7PxZRQCeNNAFKG2GuyjwtajmxKHFBj",
  "key26": "4XFTG5hC9PY5Fd56dztiCxHvQ5LVyfz5rU7D9qj2iBBmycC6EcesP1rZJz2xDhPQZo4SoTo8p5WZ32k57Fq6CocE"
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
