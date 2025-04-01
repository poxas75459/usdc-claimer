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
    "4x3HXf7Cmz4tJP4zuykQjVNay7QhfzMHWWu8tkMCPr3mJFx2Ljip7w5mPA5KucorfCRYsMcqZaKtLvm2faA2YFwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hv2nijzPRXa194Fzme55uVcZErpHLjWiGKsV3hpUTGwZjmAhG1SRd7EteyotKxqmRSzX5K1okTeGrfKkccmbChX",
  "key1": "4jPHF2aQjxMRkxnztZfMq8D6JKc9ea7R7gAvHM9mxqaCkUvS2UjR6n5hzM8WA2JMWU7eJsbPEyVGEDW4MPx9Yeg7",
  "key2": "44XnjkCib5ppm7oeGBpvTFeU2p6a8gFAF4PphWcsf82QjsVdifQkfdwaryaWuTR9QX2NUu8X34w394RN4UkLVwPZ",
  "key3": "3hfqRk5iPzqPkUuXr1XJizJQethYQYM46dv8gRKhLKc8sSW6BzemNgHtuuay2nNjZhjkt7XPrymGpR3FbbYdbxHm",
  "key4": "2bw8C2qRAcNbDxSyceXqswMcDV8ZRu7ctg7h2A5A2RGjvYS6Jwrdyeo9vR64HNgjMHGVgwffzEhiDr5WXE6B4iWk",
  "key5": "62ZsNZafu3g4zqxGhNcr4Sk4CSZ9wJ2LxgLPtkgNkVA8FvURfMReGWim3ox7EVezi1uJkjZapPE7vkPmjbiN2Yhd",
  "key6": "2Qp4aLGPTE84koh18ApDr3H4Qjq8b6EyCEPVavj4UDycZ56wJsjZefx8HewbBr9mmrdhN4cGSEMq7eByxw3kiguR",
  "key7": "4ZoKz3g4hwSvzSUcM2bxEpzZPvYhvgZahCKMAA2ASV53to7xTCGeukswe8CmEab8teoJQXNH57gufeYzQtHpscFD",
  "key8": "2YbmwYKyHYk3wFuPPcqapf7JbCaLmoFgukzN8wY2f9cRFjLxpfAeJ72zZhtUfzbCkKUz89fDfaENdRQ4pBp67nuw",
  "key9": "3QzovicfVoTZRpPGkzv3oRHRxudRdb9WhXH6G1XzSKWCy52jNKqTpUwk8joLMngNen6SCMv4M9gNBkYDjsNXU5uN",
  "key10": "2XQ6eDwJMyaFQT9Va6ye2RbcCLh5U8nXHPurLHLpQm5uUHUhBMnYir9e3F6vh9a8s2iQ5hiqzhn4DxyCZWyCqCVP",
  "key11": "2BmTuEWgLNgKGvQZfDvJGbThkrL6fDuATshQ51CEAAQwiXM7bvHnmqf43zhuckuzpkzuUCy9TwKhoKqAZKPqCXDr",
  "key12": "2J3Wa2VkiuLoP1ktQ3nkiBK5jf1FGXFWZjRxZxSciMfFfU3oRZUb3gutJ2FP9SBmKthtJQHmzeU2r5Jdzymk8Gke",
  "key13": "43zTh4Z4ruY6iu4UcriADkwCXvN76rkNtwYtKEd3AUDGzSRnTKfYStcGkFrPpDkH8CneBRhRsXPbpHpGfV5Ranj2",
  "key14": "5uKv7idq4HpWWiZ5b3E36YT8mBKP6gEQzS5oLQMF2mxvYCur4woaCUnCamNUZHhAZAUpR6XqYCGBUXAuxdiRJ5Zo",
  "key15": "KXpoEdwwWQbJyzTJQskEfXiDMV5uGpaJbpXaiSzMcyLbKpFxsQMR6rBPt6iVk8MxevWNWZBjK8L4VbeeFuaUEEU",
  "key16": "4YKEGcwSWiRuRtmkiNg1D8XPkaMtWwERaauGc8G6tbmvqnEfc3UjXWEmUp3ZticNtT2DSG7qSZ8tni24cHtwYBfN",
  "key17": "3CoVpqjwW59MXrs57WE2XbBhQhpxwtN6mKX23LYWUqtP47r7K4WPrafiYwvXxddQCUnGGctiWCBXKsQHcsqZR2nd",
  "key18": "3akU6Y3JdZKxCYkp73kRAjJ39WS9r14ggcJQvpr2GPPdu6Rjt22U2KPsKZdaVCrmnwYrrnNHmDavukzikLES5ojB",
  "key19": "HJbLtqgrRvsAbuasXezPCh91yYn3nLdBHgRcSjHCyWipeHiAMxUruvCgxkiFyFFDGiizBRgb6b7TgEYP9gdUBzV",
  "key20": "3MrFy3zEtqw8YLkWqdoP8qkeK6dwjvNKD5MsSih56TQGqfh6QCqnrnAZAuWgnNdydBnpsnKLAvi7awCwxaLuyzQQ",
  "key21": "tBZqnQTRWyiH8ChsYHHUE41nsx9njwR4RJSj3CGM7R5fnCUyjuXdA6ubz1echDyocAP4EFWTUHwEg6JVGDVuJ73",
  "key22": "4k4kV4k7TDmbVgQfL6c7FdEanmV5734m7ZwUqNAChfkVVxi2ZHqbXuQdgue2iEjRT63sWt83SEUhScqS5MFXh41S",
  "key23": "4U6JYkDLM2rCWeKkkYSCKLJFECwQVPEp6q6931gTZVXppSFdKp1VrZNyxipPiCfySFo2gXM9TuzQE5n67tpWTadR",
  "key24": "5g7tSBLtRgqAoZsnqCadEJkLVGpWbxzfufPVFEP1vCgESaoZrKqVQZ9RyiSBzmTu7FSThAdqXfH25pRtdfjNzKhA",
  "key25": "5wR8TFNkq3AeFeroRzXdSP2zrkrMJwTDsyHsaRYryr3GtpDQvvSWLmcbQxr4TnDJgMJev6duLaN6Bxh7GGYorrPZ",
  "key26": "5DLY1jKdBKuftDJQ1c1dj2Ku8J7HPPqqn7DX3EP5GpMY5CxCKjFYYt1jfuofoMdTNz5qymofNyckWTV5zE6nJdt2",
  "key27": "4HwWL8HUV62rdS6uY3S1Nv3wExG7inxo374EzinvELH17nJo4RWALzo23P6fYxkKm7vfG2X8Kr7eSdnbik3nQ1eW",
  "key28": "36snM44nMoo4YWFSz1QRnw3guUfEGxycLCZCtyAr8MNXvSdDDySmKhJyEw6LzJLjzMKLmwRMwbG1ZY5hYgg4gj3G",
  "key29": "5SQhptRJeok6GdCDzPiVpamLGsMusQymkCK3usNoZZgMidHizQWRYoKaxLyE8oAKGv2ew8GXQTETiM4kuAYJTkS3",
  "key30": "4s4TGdLKrNirDLK1YwqD9vFV2rA5LNWDccPxv6DYYjJ2vBWF1ZSv3YqGamMnf2kAuf9GFjSrHTA1Koy6Jrv4vYRY"
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
