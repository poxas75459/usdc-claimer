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
    "24pNSaoEFTRoue5SrzGCyeqnPFUgjsSr2bKPiDArYP49ThJp7oG2GRiMsPb1gSbftB8D5BNs2uxqBrTJ9E2zdeFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYFPUH8gJmNF7my8WziCKQMWuYVmSczD6zAnt6C2fkjpztMVqP1k6k3Rf8aThq1X35AWN131UkrdgA8jm6ShCFZ",
  "key1": "3QpzthC6eBpCz1YzksGTUSF8gtKUaAwGp4PapDNMrJKXKToU7ADB8z5dHF5WHR6KzYV5geokki7182si7CGiNDV6",
  "key2": "646ngN1awrNReJj3AxRNCzArjFMTH18wr471rttBFZyrdq8awNXJXk1YSFPXA1c4Ezm3xQCTDRvt5riY9RTDRWqi",
  "key3": "4s1rQqdDqyscyee2QXCQqCh8gUDxk8fTp2RyHSsYCKmJ7AaZJERRFesuF53NnXjNiMAra65EFS7vsTt1ZshXXoJ",
  "key4": "4zEEqnZWjRF2MrnCLhKq91mfEZZGLhfYEnvAADiaFKTNdWpeUwcP2SYopcPbcnm8rnnr2Y1jryGmvT1hUPErgTq5",
  "key5": "4amvZBMuFLyaCMWaA5RcB2uqvr6rfksHs7DyweAkP165FFvaY2whfBYMmVCcStZsvhPzLLvTieoXvQnzbtMGdG7Z",
  "key6": "5RCw1m4LNUYUUKvmxTngbzjMNUexHXxNXxt4jv54syxuFkFSbhri78v5rHckdSbeZ2Uv2gjqU77NmPYCfpyaXUqd",
  "key7": "4Y1WhMStaqjdbpTQ4fS9CMUo4kcdzbDYqfyEsa8EE1S9FWbbdAdavgvd75saUAE8sTspdJsZtxBqPfkSF7z67r16",
  "key8": "2zCeUM23bsJCHUBZDh2u3J5mUCYovLWhuW1D7qwv1aNfJmZ75BS5ZwsRfVnm24Lk756YdPJ3QAjV46L6JfxPdNsX",
  "key9": "5qphuptstTiuJ8HC7jA28ijsVfrjxBG2poCJ5FzKo9YmUAUwCrePnFAuqAhY9TrfaVHK8tmPn1BL3hKXRTPwnDRg",
  "key10": "3VdFCrLp4p69yp11z2hQeHeaiWWVUTRLWdHHNmmaiNkgY6oJpE8XAAQZUxMFppbRojuh837WH1UQErEnJ6hBQWwh",
  "key11": "E1KM9yHm9GpFrfWb2tfm8BZx2LAEfW1Gisj5BgefQ3ov8yMfppAW23TumBiiFK5q46m6CgVZ9v6FqxTCbhBHqv7",
  "key12": "6nYGj2LyPe1AVBQXfgBdq78RPoJZq9aBq81FQNSjf5UVJWHNj2UHBV13hxzXjEiZuruSRPDg1pLHbc7qE4V2YMY",
  "key13": "3AFYaT7rbHTd3gvPXVfHxY5vTvPSnY8GLKFy95qd864DbVHFUV47KHbxsUytF1dXKYnetR4z5ThbTkyuQGWjX7hz",
  "key14": "GLuK4J2isFPg9DyEGTSG2pkaytPVLBokZKeoEMpeE4GkWcg4iVf667wXFpUTVGUx6kYLA3vmihej6rLQseMNUGq",
  "key15": "4cvpCKUdwawpCwgXBRJ852BN95vE5myqvByKvQqXrc4W4meU5R2ffzPtcjBcZANJnz42dVYf9g9prGdxsdja9CUw",
  "key16": "2dJaacYYJY2zg6kCWq9GP9NyA5aBunFaGQiWAJgqi8r3hFT8eWeNrcKdn6uXwgNjaXucwzANdznm2FuHQGg7dN5w",
  "key17": "2PL1Xsjs9pYmD5vppkQ3C9ZHFCJZrJhBbyvdCeKZUxh3Jxmjn3pcCReoDfaMU2Vmk6WDr7W1DPjBYCJ2XVp22TuK",
  "key18": "5raTcBUL5PEDCkMeP4cqwBtcv9JJKTRydLdFDUgsJcuF4swVjtZUuWe6uYY83mWQSLvy19fpZi3kcLGPucwM37qs",
  "key19": "3xtrBJvSMQgysEeQoZqM8yaPqGHn7xnWCbi4UKU3Y7s2KGxVxezntNGv3vvtbbwZgojpwwASh7BxdDeAvf24L4K6",
  "key20": "5737rAGDi3GFFJ1UW8CCPLe2rYaausoiykjxpewzMzHL5W2b6vhi5Y3qMj9eBxQD5jYPLdr9aJAQgFFH4heL3MjP",
  "key21": "tyAhLe2RW4ARLmgBZ3g2JNM86KgCc47rr31EVCzXGcodfhnddM7CgSyChMAUz8amq5NtawDrYSBRjSXnLgkMstz",
  "key22": "5ddkrREH6w32iSRsXBS7yyN9xynzzLyPMLjRgR642zcv9bUi842S5gsodGS3jtPZses281JBComEjYetiSaHd4s7",
  "key23": "5LN3Pycq8VTH6exrijnF7QsgbCBJkKuWp6EDEsC6wLnbStmAz7xsBSjRRPX3DVCNXm2spR9zdPnnN5ULkFwWZcy1",
  "key24": "2sXTyhkTcyeabWZgugD6e9wxPZhmHJFGKrGedfoZ5sWQ9GyNQXuYNsjFqJ4Guq1LkePCKuHAxjexR1cpNuAKVX8Y",
  "key25": "55eo78xz5x4NnPXu26i1hT8z1pVSVWL4HjRAGCYB9RqCVUJr4TRQP7n4sf1WZHJ2JcezZCp87g1bVMvCxCsfP4LC",
  "key26": "291fAkmCYMWhDgDjqFhyNC92juNFiZEf2YLzJmzhqbtWz9dMK3sWwM54v1n1t3Q1c3ZE1wdQywqqPoXaMcrqq7Fn",
  "key27": "5kDSgLVnYULHL8psdLCe9GH4hgQv63sQWa3wMRT7Cb7Lt3BD1hLtQwRNg431ZkC2M3h2W4JMzrbafpjcWonb87iA",
  "key28": "WW16XS3whrGukuv6K5VsowSkJfS5thNMuGkKdEojYKYQAxRpb23dRrqeGNhdN6aGMiiNv9G2fXXEtLudg17ivGb",
  "key29": "4scmQ5icwWGci1fKFbAnxpEa3cw4QXtbZVsXdZ6AMDmcmW1Y1dU21f6geCvDhu8MAF9WBATEc36hw275XuZ451FS",
  "key30": "5NFXpDXJWJ552YdCdry5rW3fwctHt4WJKf7fbkLKXia9HycXsw5kYXACgixTFvoSmZra7CntncYLjMoSMoWsYzDU",
  "key31": "2gR5TU2FxBxon5qsgiJ2NkMdB9QabJc2SUHic38HGhLtKowR3WY9uUAGhwJDA4SnxxwAH1nz6XTXDJBqPgKph7xm",
  "key32": "vKWEgFu9E2xw8FMXYsVgZW7xXdcgaeBLMQcHPKw1DzTCwqrUHkdvf9pa7aw74bToMXTtEqKLe1mmGQmzdWQW7yk",
  "key33": "2PextZdQEqsNPYkQxZGq1Bea2UyWy6D79YEqkgq2ac8gRWFyYVihdP97Wawcp5FD4TuJuW4aKJ3Qfn8q1YB4PBf5",
  "key34": "4NNVvJ8cdGnpSVZBZsk2CjSYKpcmJJpzzjymgRebXiskeRH2bPdB7yMg68jyEXaobk1LWhcFh3mW3gDi1h8KpPoL",
  "key35": "5wVpTVqFCt1iF9bwZo9oSeT1QQytGYtDMGo9NZodqnqFPG1WMhFLgoiFCyTamW5pUMH99a8PFqzaQQovAac7HUWV"
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
