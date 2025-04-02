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
    "4rTskj4jo2419rwrSCukr97M8RTV7faq579NcrW5RFfagtyqTQgvdwzX9vUA1WRkhDrPoH9P4BVr4oB3gdo6p4Kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vaWchhJWiN1BYKy6DWMD6nmdNhqNXBM5856zvMwA5Ag1VuwccXLxAr2yV75dT2zuLpNdR1w6ezd5mWcZkvWsnhJ",
  "key1": "2xegNrY7YzDKeJJDoxG1TPV5HVs9GqEBdAaohTi6idwcp3G3Vt1ZxMvU4vqWBoX96dreRtTakoy8PKm2sXUQAfRi",
  "key2": "L7yttFYwrWqw6Us1Zm7hwCYBQ1Te5ghfibCcHefLF6UKVZqA3uRUHUfKsJD2EQj1SnV47NjKtWXDSYbZJY9Vczz",
  "key3": "48NjHEZWQMJeRJEVLJA1mSrHSynF3u4XzcfE6wJhsjAft1wCJt3a11G1WdRKdcPGkzvif81s4xqhQdm1vuyiuKKN",
  "key4": "3WWXLVFJAJZVZa7UaJT8RL7quxcC7AYsdARJhPy7Y6pHkBjAtFHd72qjzCvuUKxoMi9Ru9fG2hyuwq6QYTHwzhwX",
  "key5": "3asqWJdCZLFMMtxPUf7pvXbYNQkBsG1iCmQSsig8VsP5wM5fcnU5EdrYFUP8VUKFzCYsr32aWHBypUjjGtGrGbac",
  "key6": "FY7hE9vUdcfmMYGGt5jNPQC3AyhhzhKf47YLv3TDf6XHcytr5PMWnpax2Md7Mgj96PWkGFHqzZWjarVW9hvoZc7",
  "key7": "Y5Mb3RBTpWNbWuAAAgKAwzfDEENKFkkkpPSB1BDqrmG6BxAu2LkG9ibEmtwHLngKCnepxGDfm9T1kUrapPeUxLr",
  "key8": "4YdYMt7iGPTPSKEZki3fBWBg9BoCNig2zqkG6MKpnWLYYmt1r9mDZgiLZEpT9anfYZ9FSQTZptgRjA9thiAHP22r",
  "key9": "5HENx1pMNhtFWVo4Hp1haVWshhHcuaaXWNx7fhfwdKB5X6u6UQAGYrAXxDqns6WbUJxmWj6A7HRSmzi1YaK6ebN6",
  "key10": "5exg2WW8xRqumKFfGy5vW6azBEt5ee8TdCUzzc8oQQpCtQQJyrRH1PKJ2weAJknESN7PmbR5Q8Vv3F4SaKnmgVdB",
  "key11": "o8GNdDHpVDghsBLebREhzea8YhqpATPDA9ZRB1i1fxAa9S93BdktvPtrcpnKUJwRwaUPE5iza9NPSusBqDrVW36",
  "key12": "5mzuE6SmvVLMJPT7yRmTNX1sbP3w3Duq9w44bqkAgDirYHvgGwyNVRH8zYSWavUbdKoNyjhV3Z4PmFKhmux9Vt4g",
  "key13": "2ToiBKygLwggQPv1e936WWdsoYAdu3N9eZoic8ufEgBv8iVW5UuQDTNqnWCAs5RekRqqP7vPtU4MMyeFGZFyzSpq",
  "key14": "3yCF1EjQz2FtpfYNZyPNe18YDVSb5RNRRrVFZyNZE1bWmrf1Jo7rnhbc2574v8YcgTQW1VnGACuZRaFQohjifYz6",
  "key15": "pSDoBQsSTgcq1U8At6MCA3mJM1TKHakpFkvkBWrcaURzksQv2ZJVnnEBg3AAuv9jqGcucVBB3JJjgG6H41MCNB2",
  "key16": "3LRoRUyH3g4ipM1uSrbBBqTYh6QvkKY32RGHWgAMDF6v5ndJa2qLGgMeXFZcBjD3eR5wwboQpStSMKmTcuAe2ekh",
  "key17": "3V7TQtnsUFFrkde3N42mMTJjaCToyX6Hd4nps5Sfu2hisUZXZeV6LBbgVuom3nmveGd2WG6JU4ykGSFKpF2Sh9kt",
  "key18": "2gte5zRUxGbFWQJTTNXnjnbCJmNUe1LHRdQVCtoqLhUms887YxU8oHxfXLvcNtunLrunQ8vEidZzXqs6JJk9kP2Q",
  "key19": "2G7rZ5FrqRCdPLrVkDYwZenkCkwmMUxdaif1zQmwvEefCv9hRS8kPawTQKN1JbrbQZiN1gETrSVYCsTtxB3HLdjx",
  "key20": "5cS1qhFRsPrs6GmuFhwENLLQL8MXt3459W15gvC47wEZnWnSuxg11KecWMh2eQjj2vcK5MGe9oY2fsfUWPG6AXGA",
  "key21": "5QfWMFodRRzerGtNxg1zUkcf3h5DEi5uiLzD7wqvqfNQxBfTqEEUPyfuFZyuTSbZkfpsKMr5aa5i9rW937dMQ2cG",
  "key22": "3xzdyuEc8gZDvVDxY5uMDzbeQWmtSSx4qvZmvxd5MDoedGT4SdenKMzCgjjgS9jcCiuBENHrz9aNZxP9eHx6G47u",
  "key23": "5JPWCQwYaVZTc4PcV5VTVbRddegH9aFgrCMYWHD6tnL2YEwoctsFR31yBhGWuMCR5LM1461UAEWMCnYmh1S95TEJ",
  "key24": "4D4ScZKAZZyHA6U6kSJo8ryMZbunzUn1SvxSWMoCe6nZxkMMD8qSnMHS58trTpSrvt7d22mTZFKLiucTt4mxfGZG",
  "key25": "4RbGdPFW5cgyRg8Etvqeytm5u7HgckuFRjmgM2y1xiph9YPDZnTT5AWR5SReb6GqKqLiN86xJvSb758L5fRafhLG",
  "key26": "29kCA2suQ4doKcNPADVjGvD1YiaTUiy2knGkGpQRmcC9g61W73N1wZCjzv6VvmK3Ts6PfEtF3av8XhzPiD7iHBcz",
  "key27": "5Y35MzGcvGCCUiJNdDnSkK9P9Fx4s8CnL9VigB5XvwrKqHDyeaRXitEYQmspL4fJ5bt43ytMg5vh7ZhTdJ262z9p",
  "key28": "5TBDJmYMpqE8m7jVkWudov9tbFZySYAxPPcJQn8kCAuAQeK7Jqd6SDNC69figH2P4NSaDW32QM1y4zxdX4gktSTA",
  "key29": "5fUdsXbsBSUNNjjL5L3fm3u779L7mPLeoPFnAutkuB4XxK6JCCb6x8TmPMHNbPUTnB3Kjuj8NyHrkVk6CA9XGm62",
  "key30": "3qoT25ZjoLRztQHzuW2XrC2TLYx5awnWiEMUVKNJyXgxuQRhdHx8FMLGYsPEuNnoNH88fFc3vut4W3YUrh9njuFo",
  "key31": "WRJHWURmZFjBHDkt98G8jkJqoyZm2UojAfs2bxuoBC1pJmegJZTZg2aXmaPmUiFt7SKTeoaJdfDBE45PJftpdZM",
  "key32": "29Ad5bGhUyfxJgdmLLAUpyixZ9tf4WRmUySuZYgCJhBPM4TTUFx8nVtBrLUTz3SPSN67iMGv1Szx2qvLrkPQPoHU",
  "key33": "i3gFYPBfFJjnAhXwnGdyVGtje3qniNTnua6Ck2sQnyeoNaxE3mzA6RG9wQvJ4uWUhFUt592Ri5jEjA9Q4R28ehC",
  "key34": "4ViEbRV1EgfxNjN5HutGuT5QhvupQbVouqHVpbQ7DVqUxmfu5dcByGWdg9r9x2CG52J77QbBhG7cvnmtbKnGsVwK",
  "key35": "2sztNZrneU2m5MCdnMjUMe8eBw17S5qEpCVotwZXfiiXbdczNMF936NNSGsxEwZbyVbGDCZRcvAg5EfgifPE3V5c",
  "key36": "4Fv1gpkXaHuGs1DBX1eM6GCivsXYzjAH2NeA7462p3pjf8KHCLfXmo9F5NS4aRogbyAQSWQd9kPSTmLL33Rve2CN"
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
