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
    "3LeBN6o3VnBVEidMLcdodYRRLAGDr91RAcSE6ZKWJoCgttdHxEWEDrWvKi4we91PM1Cfr4JKWc14dFwExdtedmUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LxFc165vvMNdJvVmp21pS3NrYGQ2BSgQughmJwzMGBAknry8amchcfYV9VyEEiMrGyStPdfq2vfCnXV111zMqLa",
  "key1": "4jypUgaNLHkaaB3fnCdeKprkxKEmg2FSeBik63w8aFjdN6H8XHabGjLnY4577mfC9KfL22d5nvohzBBkXmqLpG2Y",
  "key2": "5Tom53PY7Fv7m3acQxYvodmKWRZErFJEGLhpqRMhc6Psw8f5CMN5UpTyrnNKEi79K3pbVCZqenfrCnTD4GkWMawY",
  "key3": "qNBX3fv8udHVNaYLgTvAA83MvvfrhHNNwo9vYiZXdWN5fGK2KpnnvD3t2E5Wut8fpsKuUr7P8ayqRWW8QR78A5U",
  "key4": "2hNnumP6Ye8Kp99ugZ9nKdgg7rUpb1XVR5LCghxy1cNkCaqzFQdbMV7MQdY4KcEZkLHJDjSCRHdxqDxywDkfFvnS",
  "key5": "2TrdUEyYZHA3Esf33W37myNtAEZcWu3UtbvAqpXC89WdMfM34vUBNkiZ6weiBBZmzKhxEP55b3cgScgR53VWmqiF",
  "key6": "MQRGoDGAyETDgjUWrHEhNVDpPmfPN3A98iasVY2tvrBTiAfzNSVE1n8SeLKiKAphp7f9Vzr69Fh8N7Vfo4zh8xQ",
  "key7": "5h4NKT28oahYG9LdmhPzTh8cTWsUNJJ4Jehb2ejrfpWxBhKkxwRv2Prc5YSRxsVHYuS9wgatvF4qguEx2NoAfoL2",
  "key8": "459cgnF8a7Z4Z24NPHXwmUxk6rgNBktGECr4rdLgx4vYQFvdBu2nuVaQVhh4jewqDfRqKyGVbqVTae92kKbVceTK",
  "key9": "2m4MFmJ7PUofBcApjLFN8oUg298xriross37LgjRU38BTAo9suJ9MLygegV1oWGKi1zbCq3mbdztHkECbWBnCWUu",
  "key10": "ZwZJkzJkdXnLGz3HAtcwVbay6iseN7aDrncF94vNbcH6Gfy5Tpfs52F79ubA9QDrSExLsnQ4yyjcixBe8yMWedr",
  "key11": "nht39C5xWF3gTsnkLarGT5615qTdinH5Cm65GteGTenDpqRzmrZVGwye2FkkZaB4Yfswm8HzPoTEwKMxpGFNS2T",
  "key12": "L4oM8uu24iwoeiepRp1oTcbt18zsdLnmbk3Qwk7hHCD977uSjWGH31Spf8LkWLsMPtQCx6u3znYjYq7cmZr2cBu",
  "key13": "3YFBgfAzJcf6n6qDGPKE9p5bm192wWmC56Z7GBsSUnQGzMBBkRNJhSDD2mM9XjURMtLQeomATZjxkp14n1dy4tEV",
  "key14": "ap9nV5doBVCHUbHjjRss1gdBic16uM4nbtWuNCyK7DoUVisWnpH6BwKXSFW1ExyvpgTRdo5AHjGXZPRWr7Dpj2a",
  "key15": "43qZfcv6SoVZEXyTDxsWRTKTq6iRgEA7mPWm2LszvocqqtotQZjLztZxidwnF4ijh9KXG2qm93MpMsxSabuEDWLy",
  "key16": "hDhjwpoE6C54dPdojyTkKWQJQXZCc4o86dhYExZwEgg5G2eBPHUcF8eKJHXqgdtBs5vnhdrV3E7GfnzbecqHfxS",
  "key17": "2816ziD5HHZmXkv5NBT8jydkKQY5PngZeqbN1mnUjopta8FQnbfQy5kVvZwgMPKjA87fGmHSkRbB4tt4grFz9U51",
  "key18": "2VQQek2Qy74u65WsNGBsaYzCfNjA72GrpRYKF6nYfcXuDPctZ3mvH7KZuqHV6R6oZhsiRae6A7T9dYfMSCF2iCcm",
  "key19": "5YAdcYU3tEDPgBoB1fHaZ2JNEZAkBHsNF1QDG1kyMBkLAUcumDd1GQWE2ZnN4GvnsqpheULbBUrQZecm7wxF27gL",
  "key20": "S8pYhs42K21orx57S1V7fDHVfqHB4uHkNsBKzhgq6pNNok71juPSxJbCBJ8dYUB5cQahUef2AYs4ocbZe6mSZNt",
  "key21": "LcrGStv63DjLdiCwG9zqgRV61udp5gKMa77zqttUh5ypqmwQQ7gbdUTzsuSik3He44qMLg3wpGqyA3t4JncNQDC",
  "key22": "5Hmxw2ve18CzpEWxi6x1UstwnniS8f5WdKCX9SW8bR9nKpxvAf1MVg3Ek5Uq7VmmrTQPUXT6V2FqrmY8TcDR2sUQ",
  "key23": "3N8G3kSb6jxjBEetcR5XgoUZmV2tqRDfhWC64mun4xMDxK1wXUqJug5N24MYtqx8QPRJhyecmMRc552NkuUmuhLg",
  "key24": "57kGRKwgatPDqyVnpLUkAPzsJbTFeyRMUEmt47DQMx3DCek8NgyvUv9zjqkGihC9VD9EpVsefZFyH9waFUzno7Za",
  "key25": "36jiDoELxi8m2eNF1Vjrp4QWrV9zSaBaapHkukmNufozQegsitB5J2q6x5SJZWoCCjCy3V76vKewyNQtF3A8wKH6",
  "key26": "2JwvsLf3iruvvh9YcnCwVE2xmPe9eDmW7pXCwUkWuQQcLiov1Wx2Pg8offLieHmfrKAespJDZPvaM74DN5UPxut1",
  "key27": "4jdQwJQzTUmZJ9aEU8zhKt8DKTyccSK7fUKM4kk6ECWJHM5f1uZZuZL86xtPCjeFCjvpQU54jT4apGPn19RPWBBJ",
  "key28": "NmhTwDMgYEWVaQrKFXQtxLy14apxf5dZeqw8roWoDcRFFmQTcaNJy9gWSeXRuuBR3naaHhLwomi3977GsPHjaF5",
  "key29": "63qu7FWqZpaEtx5v5a7o8GqDKX3Npvkmb1ouvnKTD1ZcU5CbRDQFCFYqUXP6FqaCAEuQJ963CsK4cRC4ZkedxXgL",
  "key30": "2GbzE9UZcSrJ7ocZuYE2BXvypqJSEFDawF5FGMsVSmaHK5unyEYcn9Z415Nkt3ZaTjr3gh4add32PoxgFNSTLyrD"
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
