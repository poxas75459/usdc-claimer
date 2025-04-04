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
    "FyA9uNqF51dSQnDrowVZDG1he2ZTjWgJEeED5NjyfrGYCwCj95rdZDK7vqs2ZgUux8GtpTsEvTMVebBD1UbBte7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mFL4GdGjcWwaMEeUSBRnQUtR2SiKXXtf2jELPM7S36nmWKtUUWjUtPb98QCvnqJxFwc9kX5pm7GxB6UAppbQTRX",
  "key1": "6vLcVXWUfj73u7pBKg1RPPgxD3hX2kGowNVfoLPHodh15gXePxkDgBh75ZCL93oCGdBq1MjB5cxMd4KfUv51diW",
  "key2": "24oMPuwkZ7hxTtpDDEHmvjhbhmosc2AyMx22fnJRztdBQMKqB4QhYsosWB8he5Qv3T75JYz3S8M299V1nSEz3jXw",
  "key3": "3t1P6DoLSHJi8S8rMy3mFJ7FkMkitafM4RB7uefojiKtCSdpyrg3DuthMyDUEm9TG41ZBGwfbtBYygKV98aZbkft",
  "key4": "2C2wNGo96i3QVjsJUyHmZf5q8LEfWKDpHPSi5gNLYfVLQa4SeSw7TZWNMFXKKFZSPWoyMCk5zBgLX2tW5qHhWPUy",
  "key5": "2VrD8ZnFZBArCgjpUXvsZM7mMoxuiqr24cL6T8DwjmWXn45EJZhiL4QQu3w1H95qg9TUYakPPbaysUDpuZaPVDAH",
  "key6": "5GLWpcqhm5vbQiztW6wLm4o1wFTXu8SjWsaNVYRL7fedwZzQvwSAKq4JUJBsT3ML1T2h5De3qk5VR2SjNbYQXgQK",
  "key7": "55iRi1XM3EK1hMo2Zv1go9KzcHZPD47kp8VR37px1Xwv5oyQNzDMpzqqnDkZgULA9SVgXMD6K1uvZhY6YV59X73T",
  "key8": "4GYedvWfeoy8dpNHGiUmPD4gU9JMaR692FhvMhz7apYphwFaY6NgeoQ6VnD4BBAyVob77FuvkgEiaLUJf854Jyy4",
  "key9": "54dcbiNt6QPDj712Kf37dN3qoc8h7rJaicbVYF3jPywVXCTWzN2y356ab4oMQXCncBn26tMnKdevwvdtJyjnxUaT",
  "key10": "2fobRJLY5ebRjTqmD1a69B4FMMbJSh4t1z7CVbyjDYUXYyDQnXSZ5gbcEab1JiyzCdfdtwzbwtiFDS8b5mMA7hUt",
  "key11": "21dXK2hXtdU7aXk4b6mgfBD7tN1npa5UB7RMzKHFc6xw3imAdpAQteUnCfvMRfnEEfpQfnsTtBmP8B37StQmhG4c",
  "key12": "4CcK9h73GirChh7QwrJ6HShiytNSr4Ek7EULnwg1a2rtLhqzWqNDY7gT2Yxz75gVEWyUzybybWGBsxr9RqyZnK4o",
  "key13": "657bGtF5AjM5FLd1KbVNnPo3y1L8oTBuSiJw3PaYP65RUUmyuDL3PaLbhgwqUdSGKQeo6kHbirt71EtCBXRS3BT2",
  "key14": "42C17ZR3QAUVSRTnaaPwtryoFQYx9wFG1wiZFrJgcxsypw3iBjyfwqi5xVY8CREQRPuw2dWFZMDUBg3r22VrkKJu",
  "key15": "2i8TUQnM7ckgPXZNnmEimr9ZcidU84fFccF2YMrNzNowkAhcRyc535bpQ1eJYnESgXraZMtADpMXf7Y7LEGZ8WzX",
  "key16": "5kwTevN6xzC5Fm3H1F9EhEBfP9sRkEF59ZMSvwP8L5KYHN6DxgsRYE9QcNzE7seEJesd76CdLT74bZNhnrgrrcYH",
  "key17": "2w5gXe8FFKBkbawcH4qNskz5z5xUVdbMEz1H2A19c87CepY2HJJxDyVr7Xv4xwwBwt4dq5kJjq3j8zoS3pi533n4",
  "key18": "4dNPe56bLMxtARrWvzPnpVs8QRQoXa41Ey5exrhWJ6ghWWBUkyRCE2S7hQJsKTyyxxW6Jxt65va53fAhw7SeDpee",
  "key19": "5DxXpwhDDU3EshnRMkXUsi2JPeaHihi7vt2BQ5UDZ959LHW9xZ3UgknNiddN7FMndLrLuNA6c32ryHcSk3LhLULP",
  "key20": "aUJ5NTd8x26367S6vu6m6dWKC85aKh2jc3y6qd5x9HMMFALrAscMffeaEJLEpPbBhKf9WMLV3X31bhM35rNdLdk",
  "key21": "4KqTdQvqdKRhL9FCZT7APAyJY2ANoUHgN25VvjMPaLrrjSds8pgYsHT2K3THdM87rAn62JCZeH2jhuwe1ju9HUN1",
  "key22": "2dSnNoxtePVJYaqiXiCGYuTATLfS33LaGUY5bmfdj8aDr5m5LsbW933RPStZNq3n13RukWKDZLPJJ5dkEmjwLLWE",
  "key23": "9YEbA1kZaLvUYgb5jvHk23fNMP3U2zZL63dy5mqGN9XEwWZYLHDY5dJEzUzw8RxxPLEmJLmzXNgbfJLcwsgMfYo",
  "key24": "5AxuKveU9FhKBLKthq9USmdLBBDrPBriGHZ9r2zwxvda9FNZFxYMf6Avt4Bave6CpZvkyrZYiCQ48qTemsTcwHob",
  "key25": "3nAFATp96utsqjkErejVXsenDNe5dx2TRtLustgKS2gQxnE3uNb4jD1tt1nNWMkXxhXvUqRg5BFa99qcTjjLTQAz",
  "key26": "XDNUvLw2oKkCnUcPrhg6A2BDBtyNhaR2wKpGJRo1QytZEjUfeQUmHbcEx4E3VWLwk4zaouty3Y2TSvhCpDkcRpH"
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
