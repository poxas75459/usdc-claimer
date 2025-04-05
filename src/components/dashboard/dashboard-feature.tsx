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
    "9ejowzw4RejeuBbwVHC77iCtiWoCoYRhAip9s3PJVVoLXpPNckrMSEKDyLFZ41jtWycpAS2wxyFpeGHaF653DYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ZPknxFGS6r69N8k3NVbKcc5ZB9MiS6Se6fJRhUiE7J5AiaxRSovyZ9VixME2NB2dSLKebi7DhuKv28Npfoxx8M",
  "key1": "3euP5ba3xS6JaHWn7cLbCQChzoCL9R5mMRR9q1uzoxN4xXixUz8THFcKFmEYDpZNZYENwjUw7RfmG772d8x4gyH9",
  "key2": "352AzGz68MMv5Dzw6i8wE5ccWxuuKhigErg46BmAcyAVFmoAifzXKEoBvRzfznLVRNeAPh9dzr2Mx4m2ZZvuoPh3",
  "key3": "dUAADKRobQmnvpw5HKsGkYMkL8nEb2p7PP8bNWN3eVRYHQxQg4tXFbvR6VPXjShNjs8yor2W2Lhc5hwyCfw5CKu",
  "key4": "sL8ayEwiPaioQGtBkhryCLLuL3hAJXa2TPKfV1aRhosuPambMwSS2MEehqHttQ9R6gK4xUU4YaSg5dvV6PQrcwo",
  "key5": "2YK92Hz7ZdA9gxJg4JrHHow1RqVj9nGDUxqdd8FGTXdSRmSiimXZVC9KaVPuy6jXXebBY8eP65ubmdmNe2WVsFG1",
  "key6": "5bhMkvDonwARMULJbEHzTNySNa4Zcd9cNZqLZ8YyJSNC9Labd26u3GB5FWE19aAFuUyTgKFJjUbEEqDr7MRVHMh6",
  "key7": "xLzkPNpMKwPuJPut7wvvrnmGsLJtotm7QdAfSYAzRth7rTE79HcY6mAqb7pPfhs1vHtyEyyYNYGmygupH5vJ7RK",
  "key8": "4GqCBsRYZ3qmARgShZ4KpYcfBFDYS1217XXXdfgxtjXt9dQcbshHwVJNjzsidbPre374PpsPscx5DDgy6q9kF5WM",
  "key9": "3A7ksGq589RUaHjb4dubaMYAgFPQkFArqnyok2oooqo6AYp9ja2ctfmeaG8PMTNjCmUkoNRF2impHcLkSpUVy7Jc",
  "key10": "2397wiAYr1c57PMBXngEFmzfZopukAV9j8Wp4af1H8JnHkY77yLqqvcgoSKA3sJk7GvoePDWAVQdn45N7Ci6EDri",
  "key11": "53rVhNHxgAXogo7CrfoBNFR1vKkUUFswSzd9QQQF6veTgFuWmh9RTucMdiKQMTD8yQ6YJSGNJ9gWtLRBk81BVMnf",
  "key12": "4bgXniMCEMy8ZxEF3YJekNNN4sewBLQo9fzCJd7mfczMe6Xj9TW462hvQoftQgEYA3QFLHkqYRUfjMR7BrCt8tCE",
  "key13": "2QW5cbvEpxX2gu481oLLWTbedUdR9a8MxxQRmyjFTL1ZNwdsn8iZFyphnQ4TdUicM8uS1dnXcpMQTNr7ttxcaej8",
  "key14": "4uQ2bHu1ufttt6WAbgGSHDens2qiyQU72gX22tEm3UbexKnAqDRCL7oPiUP9AtU3MPY2zekzZcVjtkQ4W8P3zQm8",
  "key15": "24Q7k5W7UxzGW8moAuEGamEVmEFcD1ub8b5vDkF5FZ8mEFinSAV2j3MkCUtbfgnEi4oruMfJA4VJ9x1W1LkAXb7V",
  "key16": "2mFFUuGnNBRctgqpTV27f96mEExgKx33VTUhFkk2BXLHPWFEwk7N4W6kJmVYcS2sAiSzAhpa1WD1Gdqg9Nuf3rTJ",
  "key17": "3b99uQbf26jJCPfW9Qu98ExmkXxLE3KqJHnk2iZcU82ZZyK3z4t2J5LUhYqMQsTnoUnhGPmGtbiixG8fLBg6UqK2",
  "key18": "ftsbfoqW7DSP8ktAegoxeMk3yLqXmgfJC4mDvx7DFnHVGrjQCALog9tbodx4gWoJLrVap9E3o8hLvBVSdmkgLoG",
  "key19": "V2ZTHGggVDyGcgj8ijn3KdniV1zN2zw5HmUahJuMdpGhGhXAkg8Qzcdr2noY1E35aYwdGGHFzCU7Znu5FsDXerb",
  "key20": "44U19zdXhCEhczuoEBBFxvPE9NVE3q86gY9CpwemY3SMkcg7JaZMax5U4LVAP3yEedT95BEjvjTuwNTn6v1y6ap2",
  "key21": "5wjjZNyzGFdz4ydZTEnKHXxRSoWm67hZ9nEMr1vYriteMcdr3QK7Hgs4XpwjfQNj9h4tgsa9SR8fgHtrY41LQT5D",
  "key22": "52mzhVhwm77P8WNf6MnNX7FsW4SFuoc5gqgpsRGjP9dGdUjXPSF1ef3df51zsRHXDSA2z4j92a67RCts7nsfb7xv",
  "key23": "tWAwNLrSex23kwayCWJpfAviXXG8DSqmnet9WJRFN8Jqqpd1s5XjihmG4DsDzJRGTa1zFgs5wdQqF6gdJwNECrb",
  "key24": "4cGWPyeLTCQBRPxs4EgxBQ3yiDJvW3fo2uux4TSM4f9cRLoVuhwey6bJCk9zq5owfZipWc551eybh1VpKWcrwxAK",
  "key25": "3uJDKvfza8gzRVhjAiEKfPCm5c4YbZXUy9u7KZSWGyq2xJcC6cexCytyAGmbKuEFnW5pJAzQ747iKgDHAYGbPjSs",
  "key26": "3a357W9UwSjLbdx9ahTgqrPYqTzg424zkQx4sQxi6mXYKryyX63594546CCYhmBYDNkJVtdsnFvNcxs6GPmVHNC9",
  "key27": "wbfU6u2oMrLfE56ksMe2xtYYUQ2VLAUMtaChnajfz8YtvSqriN4WDBs6Fb1U8i3TtBULhwAM4SoZwMJP1QgfGec",
  "key28": "3R2D9uVXa86mK3Tcib8FrSj4BccLqfSq3urVkSeRnifyBXYHPw8siP8HF3mnsnyc9YQfyrzBJd7uvyinzuZk7xBx",
  "key29": "2BREZFA4cUe1BvDkWBeQtUVYo1jCzEEveLzqBtFsfEfiaYdaBs24yS8uVu7pgMoi36zacoGz9bwraQTc4sHy4dZ3",
  "key30": "fGHhgn34c3HFPA7LA2vx6ZT9zJksaxS5JBPJUwUTkF35gJFQtgVww1qjcjWhjTjZTo6Qt42rG7XhDhWDAsUeY6M",
  "key31": "gCC2T33vBQiA3j48ZBr6bE8zfMX5ofRrRDJ9QLQY8y5SQDLYATumtC1DJMHmW5op9YfPniHKn8kf375qUAqU8d6",
  "key32": "4JdaEgf7FxhW7s7KZ9SSXXU72npCLiN13BAjuDcgJRXk6s1H4KEdGxm6Ar17no58R6fFJMf7LMekTHuzy6kd4bte",
  "key33": "gEJxjyKLyJbko2cpbCYBsuCUjBVjkWpv1dyZ3DiXtXiE8Q1y8uMZhdP7JCa1B8R7Y8diGjNLKbd8HgT8SjAQnuC",
  "key34": "4o91voTjkZavQnBUcNBNZLSuXm2rJenzh1JXgLDfcJdSudeDrWims5MjTGD2ouAeh5mDyMkWPupf87qFRiesJZAW",
  "key35": "4jYv2J64xx5P5b7WEoz8s8eCjzSGqxgnigaUMJ6ohYyfa6HirXBp8EQbwQQoMx3vE3Wkvz4KeYbic1nfVoswWxnn",
  "key36": "2Qf3pHSkG2zAgLYn72DYrDxo6u8HJiMnhxCKgCiyng1LdQDEAzFVAUZbyHq5V44AzGNhViF49o7L8fmoyRP8TbWb",
  "key37": "wnXHSUyLfrEptNcRRdyKnCBZSgSNLzUkisbG9s8NRwP89xxq6HmAPsb5uoq3fQ4ehtbqu6EPzEQ5kTEHw8uBed3",
  "key38": "5gcFn22qTLbMNFxW6XiYEmqBrz2X9XFh46ep5K6bZR5hywLhWUoJjChWX71fWFeQJ5aMMDj6eN28pMA3CMmwfpz4",
  "key39": "38EouieRr2SFn6rgUqS6U9gsbr9syu3aSuXwZDR2h84mruB8gK2TSFbFWyoBa9eMQocS1qR8srsZcXP8DAZ5Pmpw"
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
