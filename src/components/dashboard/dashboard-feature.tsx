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
    "4B1VbAj69Dai2NjoAtAhLuUk8quLJsBhELYQsebmrxeX1UYf4r6qg18z6WCPw5SAcyoVbDFx6kBwWoFm7Xna4wHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysHa1cVZhvSHgPgQGDLrfDDbgBReLResKbD3gcMSGLFij68MmNYjSeovYA9WzPFDNYKTBDB2PuMDfsmkzKEUicX",
  "key1": "5JhZgD65Tu8VRm6UyDyCbw77oCsaSSKmRHgy2MhZQw5dDNoZcAzAbu4YxepAgH14WtFjnNb6fXxhiM6MUm26YKwA",
  "key2": "2uFyBXhiAMbyUnqsyKNGffPjVvwgMneernJHRGKK8xSjSzxzzUrFeyyLCamCJCPuGnjCCudK4ViBvyRh6hVPVsMU",
  "key3": "4ZnC8RHhW9oLvWC99xhPcGLuSShftD9qwbedVbCWHsPDx5nvbAsYcg6ceqBG1rJXfb5hGxR1LsSwq1agqnFH1WvR",
  "key4": "2Xh4o7zwGcrvre7xVn78YP7TEPqCXH1bWLjmvh1EzohHXmj3BUHopaJywoWcmE3pVSDSwyidM2CqVRB2gBRqgMFs",
  "key5": "4fPVwprKUusnT9RGBnu7h2aXKZ8rRp5YzXXfPnaUhG2YcVuw6QS8Ryq7KzQjqXgRAo5hj5fMNVKQPdUvx8xdMjMd",
  "key6": "3osrBAeNYKhX4SKpyLzG9Hsk5aGNHR1nSy4CMr5wLA14VnwfnBa4pHVQKcDzsy3aBsGHsaYymbN3hRwmThD5D4F7",
  "key7": "5pXPBmyRZX7fsezuSRHpmcRemVjaPfcVdeNqC4FsjZ3HFSvAm8rNJZ4dhTVgdtrjrQ5Be3sqqoyn7S6QU3YtFkMC",
  "key8": "3CYgxKQo1eD9gEB7skx9L7KA5AWf8s2fxVnxzt8LSuG81KXzyR9juLaWQroVbNH4JyqKukqWZmLcc3azxBUqJYqr",
  "key9": "2FW8kpd5nb47yZBC8Y2R6n8GUpAD8ydXJoWEmMJpvANoKhJQ8wyaPSEpRtLht4MtcaErGRFx1v1Aj9kFzGjPj9Qj",
  "key10": "43zsyMdV62wGdnhUnNAf2gXWwvQ4DbYU444RyVhd4huHyAP1A3eJSXZVNyRYkwDuggnVEbxP1h1QDuEk2zEP2jC9",
  "key11": "2XwvW3ZSLncNbHPKLkWsbpDGkMm41PuydZncU7Re5fJwsJUf72zTKg1Ly8wxpC6rJP5QbscorbA8FbuscPMf6XVx",
  "key12": "4nXDcvTxKasnsMzSqFNgNkhWsbauv4HXPbX6gnp7fYc3zf912iw7PGxedXoyBNS78YyoiLtLMWY5UV3zmx6ehjRL",
  "key13": "5G7vRt7E4HVBKS1sKBBAPg1PhYT1wpwDV89zWTW5aWyBL7MmsgXAY1mGK9JzS3d2pVqGhW1EHX7wmcFNWkeiPmkh",
  "key14": "2WYKwFQ9nq8FYCUum2SLGfdPqvHx3RYNJrmfgmgDyQCXYjjC8qHdHXJzVLTnnHHj1AYtDGkjqn3prkb2Zu4gAPtK",
  "key15": "cDLCScRjKyYw5Uco3hcEVujbFyEmVidgBAVrnSWb1kWoUZkViPofrQ3biJTdLRGNjZ8ef8Nb2CGN3MwBkvuTpAY",
  "key16": "5HrZ26wH2PsB1xtaPy3uEYYDadTZzCqU33ND54GWaRKu3HPHARYodU9A1Wq1k2eWfrjpeqGSXxjmupKpc9QLrGhg",
  "key17": "2Rn8RX5fBCg5jCG1rkt9Y6CkZhVywz2jrAsmy1dg1YsWHJRZd8qFTvrmX5cT7V6akoo8zTE9fbwpSS5X3de5hfBp",
  "key18": "4NR1dy6wKACGKZBnKX85exL1NfSxAdw3cEDTjbhnmCECKoXuJ9doeCD5ffMf2teBKLVyzaTcM2fXhAnFGNRYGRDZ",
  "key19": "zQ7xhrK6rdLAP9ucYzRRjFGuNXGsAYX3UHYJDSWdeUgF3qyVRe2YcwUZxaNxSNCdDD5cyrxyi2uHp4CQ624CNCD",
  "key20": "4LTjU8yL9ybcYRSmG8gmNQS2GLo98AH6txrWjA8pUvgSJEdTMoQYcRGjhgVtMH7fPXgmCZywNnZDtHZz9vBU4PKu",
  "key21": "bNF56pqHZ2NS8mPzKBkq7kuYqTk51rRsKUAbh53YyshV6dLT5ofoRccEVnNevX2gsfaJDWJ5byFKzwpBCAiAouW",
  "key22": "23N2qTo7UqdkkxWjyfVzxcHhuCYuQTZNcwp4QkzZRdhpBxBMqrzQ2gwwe5hF7wJTRb4BVijzeuRu1Zuph5qsLJEa",
  "key23": "4ZNsS9UYRPheXbNGMhuR4Yn7dnnHREU3w6xEAEgWM3FgDj71vRSpt7ZE88NHAkeBzCPPQQqjx7eBQ1rBNpgsuZ53",
  "key24": "4yPZ9vsKNzWdDTFM32eo9uzyTe8yWzx5wGSnsCq3mnMJJhzxMpLJTDJRgAtngAJnVtYrW8sh127WUumN1goSTGBe",
  "key25": "HXSoaEGjoEG9s9ZKtb5uzGp5RdhgzZuCpvBMRSEkf9Gt3GxFGZjHx78dijymKvTRzPdxJ4xvViZToawybRnGVT3",
  "key26": "C8GATjV9miiPH3fbHRsALMyriAdhABbgwiPywiKQnLQ3BVUV3mtqQTAESy8k6s3XnZicmSYDxYhzRAmw6LFnrux",
  "key27": "3EoFcuGbTg5KNxWpMd8tLPiCizmCyMSzu3f4AaL5Rvi4pGbL9rN2fFei3aAPcb9DEPCzVQ6LChd7rGvVqbXbYZkS",
  "key28": "2t5fLkM9DY36mZwrtCLZRg2u9Bkz1Teog2NJA4tmHGytUBpgBNRq7bRG2fbMoHSwmKpG9sqEq8SUADsBgxSfUZAn",
  "key29": "5m5qJkgUYfi4KteH486cfqnPJDS6kGNxdEUDYKTBwmTA8YXqHtXMCPP2HNJN4SFt8ESta2tgPf9Gnh1YH8A4iRRW",
  "key30": "2wLdjXTkbwJFdaTUMavcsPiPBxFRivsGyfYotU5ybcy7pwk9gCvs3qCaDpzvH6NEiw79FSttX9oewFpmBDj6fSuk",
  "key31": "YECDg968jYpMGk3ZDCamogMdAFZdT2BTLvRnKPxz7trLR1Jr51oZFQNBCH2Dogm4BmjJRTwVJxh8KrEN763EjLU",
  "key32": "5rnaBm3FY2cndXPf2KZfnEnzDN4hiDUD3RtwW1gkaKm5ejjBZS2Zea7TsyvkimKDvKEeSZUPH6bTyWFyUzrRXn5T",
  "key33": "iuDJGFL2yEYR5EiSNUxLfcagyLh8FN9jSFmWYb9ijXdNf95FcwQ8AGvHfCgNXFiwPkur3ZSPsWjaMqHYe2RSGYj",
  "key34": "4FWbgbZY2Df77jsQtKFYjWdcmgbTDXs7bGbT5X2xiQRAJJTtmsdkidXrAR77ntZuNErXAxMBJA4USocf9mJi1fge",
  "key35": "2FU2RtLhDdxNRD9TcLX5UBJojqeAfta8WwccTnFmCGNL8rfrDEZ9xsAQzacB6ubAeApPBDkHjjrkUseCvdX86rcd",
  "key36": "58fpEo9qFQrUQmFYrim2RQae3NvkbhmKwVjiaZfyycm89HFn9TNQQ115hTi51baMWZ7CB1taBwZB4phMvCUjzNqf",
  "key37": "4bseTeoLLgQjJav4MR3CRm5v9e8PufyE6oGiYkx2DgetMED2VvoxL2yFWqUQHEM9gnao5coCetePNiKZuXEVV25K",
  "key38": "2qVcy28VPKVrrDKCEvunczkPBQJ8tGayycEhDEohPg9xV28d9pJbF7dGWeGNzahmnMFJoCLuB9ydWVWbpunStXsW"
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
