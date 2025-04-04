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
    "2CTJrJan1iy1ibmAqabif9RuiewXJP6ivpmjXftr38ixDtsmDzgFCvNTEBAZ5HUVz3vXp7o12tzrUEhpAZ2JmZTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NFWVprNp8qoNrLpBMs7gvomRYCRg8vtDmDssBqA7znpjSYdHBR6yWKCqiV62oCDpcMSU3ymw17qaPLw5Tdtsgz3",
  "key1": "3u9N1CS43cB8ss5Hky5NBMwKhuNTDmreAkXdYQHHhCduyNnWk2tkhEpABVkc8PLqE9dow7ii9k7DXsJHFbDjXuJ4",
  "key2": "9HjvHMGt6jgUM9ohzxTZhH2kdAWhcwSC4JvYQyDFQXqA8NHDFEkxbRfmvnFrykK7Y1Sf35BJQXAUS136v9virtQ",
  "key3": "2cST9cH9XduynnQ38srQXu4xjDWotDJycm2QoutYWZVAEcgb1s6bvH32B4KMSWSvvU97GVJdfpBb1ndSQVexUunQ",
  "key4": "2fhrtdB6beQffEV5xyK5xn651PQawgctXiYqVESMBMEoqCUAeNp5FzFEWFSS7gVGHnn3VxQJGni1zMiPfFVsViWP",
  "key5": "5eGM1yVx9BKEQzCRLToHbRDSFc47ndweE3nEVokmdBL7eEt75gihGGTtA5ibfAZrMhMY48WXHL2tB779Q63S21Yk",
  "key6": "41wYxTgbtcJiK8DuMFHgqY96bWtdcmzhoHg4RpB5YydE1Uz63NExUXKEy5Xpf3Wzb9wZ3oe8Cjrk7ZBVq23yWDvS",
  "key7": "45NZ8rbxZ6ZUhNgtD8aCQbTpp2fznEEfGg2qdUJwdri5UWjKh5TJYtwu7xUxHUhBrcEjMMkGPQWDpFGDoE1eZWgz",
  "key8": "4QpE211QoQcoDrQAEnbYy7MWoSeaGGN8yBT4Ebc3YdDZP5AXFugt9zmYxKhLJg8k5WVzrhoaD1yjethcXfDqWAPP",
  "key9": "3whtZbXwPgcPJW3rbqb1gRT7M6e4GGEeyJDEeEwdyvi5HseZoYHsRepHATt1AU7tsLqS4gCnS26wh2s6LyQjqB3V",
  "key10": "39VWzWGBqVUUCBTZXPf9VvS8hkTDrcg6RrYyJVoHqfKssFaxaVmtB1cifePKxNHvF1fQLswVcWgtawJYBc9Nmqvb",
  "key11": "5yHLKpwpv7jzj9FYoZtP38x6FF23xuXjwiMeqBf58Gs22wVi3oobYsQ3R4fSuv9xZhgMMBo75uP7DsB44ygs3ibN",
  "key12": "3b5RDyEXD26CSU4S6b7emfoZ6CQ5xoDK6jzTSUFyxQmXi5gsRkN2kaj5FmeLtExWcxtbwKVWWHHN1mvGySVx7jwZ",
  "key13": "4yD8u5P79LbKxmBGXp5Bf1EbVbv1V2kQg47DHbpj75R6uq4cZ7QVQjqSaGrRTPqXNXdUvL95BMLtcwBKipCWePH8",
  "key14": "3W2EkU7Ch8YRHXRQuuVorV6wjZ14wVNeQXZMnVwcZf68bDpPG2aGtjThjttVzu5kTeNG5SsUsuNZJ834nE49adRj",
  "key15": "3fz98f6EszfpwVzA4bNg3onmZcstrPSQugBnrPf67jP5GhbfZtECPi1bsR91pgM3haZJuiDym8nfKia5phjDJSsa",
  "key16": "E8TC6qi8AJCfkYqPko1ZL6bvoetX8hUdEz4h7JKGJVnoSBPgE5QsT4N85xbdgZ76d8Xci6AnVvbRBJWQbzCjsca",
  "key17": "g5unrMB3m2GSnoXs7oimqA7gEhque8Zn4MLU24vd8eQTjQaZhxgoe5ViowGBB4L2b2vnviUQpWrWURdCqBSD7zP",
  "key18": "45NgH5S8AFtWyABdHpshtRTVCnbjhjeVZZgJyGWCiapcddHzWZXip7siLA2KELePc4AZA8ehUUv6AXrbby9gAebr",
  "key19": "9CLwe5ZXMs88iHRiZyQNm8WD725Mw8Qkzk7hyHk1YXKYN3g1iDJ8sKGsrDrs1dGX9yqkAfSeetoBsvW5XNCcfgd",
  "key20": "4cSjc69wM8MEcvGv1VzD6NPThcLkXe4oJ8hRWHXM9yGoXY2dzaDAAQ6t82qZ1gpZy8TWEDdJgfXNCqkUcj7WyGW3",
  "key21": "4a4JYZNRAvbMh6MXJDdDKVk5J6jffXcz4Mfi5oTe4DDKN4CSoVS3jKd1Nm4BDuqSgPrrfWfoFiRnompRFvABxrLH",
  "key22": "65HFE2EoTxgKhKVEtiXrLs4Yoza3A1K5sJzFtDBgdxStiG27j2A4fJWb1fP399iJJeEmvkVP4PVSXLZ77mLbhUvb",
  "key23": "3ticTgKYNDxH6c7A87QoUZaaJZdDfM8aeDi4c7uCEMvR4sEsXeCHPakQqDUBBs4fdZzuVwacdmoALhXsF8b56NtE",
  "key24": "BYkUmmWHMfUUijZiTtY7GrEwJLLaXcJW8W1cMdJHyG7x5Avpex2rGShQLiVmUdoDhT2yBR4KCpZAYkPvayEBqWz",
  "key25": "5aAgjmLQ2yTnbgH9bdGzQ7i4NwxRX73im1rtEJg1L6rRhH7LSKxyZvjeQg1bRmFVzUKmL6SosovCowm6Vtz855Vn",
  "key26": "444RjoiE8oLVHrLAjWAFdUoXkPctrvKoKsnigesWpTcHvN7CzHx7GuCvnr2wVi5tTdxjfZxcoLUXV9MRHAexB26f",
  "key27": "YTWTodFLMpSGsQ5jWXggXo1odqXGqDw7e86GZSedwLdKrsNtbfPwEoZQCBpNnLyjUyp9XPRtcmjLoDCvmD8AYgB",
  "key28": "3HcKyyNBDjb8yFopXhbGGafX7wzSwPfhBdFpqocUiR7rLopKPPVLNks1Ebx7ze5W8LFcFnRVmuU1LNeyJtxYaZ9B",
  "key29": "4goHu2VqNf9XvViqoMijgRMpUkcStwY7Q4YcHVRgPbTkR4UCfYLPDShmKc1e6TdqYfPhfsAU7Ku9NxNK7QrnyRVX"
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
