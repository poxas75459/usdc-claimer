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
    "41vRMqbaPLuVvNMSN5AmytQM4ENB4dceSc3hJCfjddETSpdXvDF6ywZeWspSrT2UYxJcW6taKk2Ykx9dmAUJn2Yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d1EvJHbu1Xq7FCviK5kdbP6zcVsmVSFNgBC5LA84nAS4P1aZcMcVMDmRyjTj17X2pNstJoBMekvJhBxqG9zC275",
  "key1": "5cGbkEKsxFJTgCA9WSNj4NADTgGMFTwE3XnyCAPRF2RH6YjVJGNdXs8EX6eWFzb8XMQz3oJM84dBnBafzdYUtcfU",
  "key2": "KGnTjYENwZpMoZYapG7H5xoLeixDmAt1Hxpf7vZo6vgtXRhikgJuWLu98GNDPQ3T7kB8cG7oxxnghW21Q6395TQ",
  "key3": "2TEoLQDsAz7qxZTeHphzNAqA6BMHoxxFco8dEaoUNTA5UWsPaAyG7wAmyE52MbrspqJLhujo4SFpMpszarWMW9zg",
  "key4": "5JS6S5hqkhhqnxjEhTmuEfLigjw35GdSq2epQ7WDBdEF715xJ6qv8uixDDK5JxxNX9LMueDKNYzf7sQxfv3YkG8K",
  "key5": "4rxvvLqzRcvcqznh3BtAVUadjV33TfK6xrTmd2TvXGLpqEt7oKqJon7hGRjHQYShDftxCvDGUy35y4TpeajAjreL",
  "key6": "4cXcyJnqX63wahonYKBaqAF3gc5jDeejrrTae1EhJTJVtXHZCcqqATbx7nfEcxD2EYeZfaDaM4tsQ3LbhQLMF7Qw",
  "key7": "3cRB3CagWSzVo9eH6QextnJDTgPr8kd5tTZ8uR19Cb9CQnsiwk3JaKHq1LRZNXht4zQUVU1wgBucprHBCPRRwk7T",
  "key8": "FU5zQmfC7V7JqXgtPKcbQ3SN1FGyRUuhjiFbpBS2nzwKUcoWCiiSrrJAtZnjX9r1S3xTEB4fstQQxGSppyomtL7",
  "key9": "vhxa4WRby6TBv4bm2y1S4ZthXKeMFaQX2hseT9eFREeydLqGefDFGQWyx6V5Yd9XUmHXj8HWjdZRXJ2S3uXdEXH",
  "key10": "2374RhFn6FdFsiMSygj6DnhiLKpRcfojxDtfA1yTD5qLrbZBbdCnMWWUseuzgfkx4X6S5c7Uv5HXQVy14pqysgVi",
  "key11": "62V4cFTJYWpWxuifnzaH3MRFmw82p1xVaDSiWwwkDfew32ygJkN7qCLTGg24xd9ZpYxoMnifVUVLYdSPhALC3AqF",
  "key12": "5MVQ1PQC3XmpdV7mnV5pVw72ipTSeMLk7P4X6e25Hxqm6sVbC2nTsq4bCqSE2ZBMa9BFUxiFXbM6XDN7SveD3i13",
  "key13": "3jBq3LJELGBwT5qX79niGdU9LipDua8ujN6rp6pKYLWYhESndS8d6i5vGcnje3gxDSR75bDm9LgLMQ62bTWYpr3Q",
  "key14": "EYsz3MNHGC1GU7eBSekR4YArHdJ4wJFJg7yiQz6EVni2n9iLCcrYrji46haU1W5AGENq5rTYgSxVwcuQjjsnf8d",
  "key15": "34UuvgCyXWguDbhW6DJTDKUCHXLRCbJhZr2MkypSWN9JcCdJnzLLj3strjhrouNbvH8Vdjg1fqdd8g7wkeRyix1U",
  "key16": "5wWpEhD7NQ85dUqAs8E4P37gRcB2ZPGdumCENVFupgGLMJcd5GqWBpqahMF4JvyXhBbbLnTo3KACX3T2bPq5M8B1",
  "key17": "Jx8oPL4dqwMLmtF314z8MxzRqYbsNfuA27xGtqdfhpA8qrJRhk7BKkfLbYYvcuiRVNnj1EgYXpJJ2udCGrhee6H",
  "key18": "2mQpybXWiDDFqydw6ja9TNxuJktXSzD6GFzgTKNZLtN1iqq7R2VyaRLN2p242fHYHM3gzQjbjPEGhEp5Befa3pPk",
  "key19": "43mrEdiH4DuTQWodhWci9UWUxdK6NZENRBjX2Mhxwbq767m17yebyH68vzwFVWdtXVaGVv7vXt23mEbg6vfxLhvt",
  "key20": "56wLLu3Rjfg9eEVG6uKz4NeMrhzu2vkdggRnAzTrtbnLeythLF9ktcHkABBDJTYGG7hvDimMRjnQDryERvS5Dg4o",
  "key21": "63cQaCUYihAthE4AgEDaRgn5UeMdy5sJYbvKumvYtbAeKYH82fv46EH1rzFbLJeyXAwM9LEiLfkwggUxGvWGmUBf",
  "key22": "r2AcAGYMRuKPAetQyQBKtAt2zFdZhXBPwnhq5YD5VUUf2QgdbQsE1TmU75BNFg47ZF6xnZY5wwJYQ8U9tfFJPSR",
  "key23": "2UrD3TmuBNBLLtuhDMsBxanqbL2Q2t8RvDABLZN2f2FnK1D3xtxpy2BWjCgYjRxVCaSYQ7CuxTQ2vWtzs1s6HqHy",
  "key24": "59ctmFFeqGN3uJfjCD1F5YdPDm5wDMnwtpa9FiHYHQMEbmdFqc6FgQVJ71hqaSzB5f5YH5ZVPhLsq6emkd4RsYg6",
  "key25": "4KBG2hXFbHSPXZH1mqSgGd5PkfBsfomkaXx4inLEpPmpd5TGKmx9epXAh7Ris9NR8z8Da8TsZvZYcnvL7aGhqZWD",
  "key26": "3icursj9S4sXQX91jgyrNjKoTkMain8ueucuwrD5Wd9uteXXi7JAhPp8JQbqbvBdQLS9uH3LQgFHVYmchhEAiZGn",
  "key27": "2xhVwpkPMmiw7uzmdzK3vgHtGWu9tDfSQqr5fHB7q8AbfneggfcNikeVioL6RSfWM4NVPREPzv3eiGHUiDkJXm6U",
  "key28": "4ec9v8dGUW8V6Z7xpYUtuLjpLxJprR2SezrTjN43psxJUV5kyUn2WowtXWktV431FMWSFWMcjTVxH7BvPwjyx5Xk",
  "key29": "D7fcB8NrAe1QNHDQRSiuzfRjZqMkSegCowjV9uTwRmkTsdsRWW1cvr6vnPg9kEr3QVULbB3PBY7fLcVQqpfFPw2",
  "key30": "3wL6rwj31DAQvzrG3QTxA1q9BQAuMPoWGvs29MWd6Hthu2FGtkbvdrstcGctythdmNjnt8teq8dYCNvx1bBJat9d",
  "key31": "2JSUrYEYMCFhdk962kkoBaKrGncp1nACTbnqVHQcJMWZvFghLjP5PRitD4dqBV3tcfCMra2b1gJmPudPoeiobRTN",
  "key32": "2cK3kJNjN5WQturLXCy9yye4MomTp9WLh9vhWGCX3WzH63QdCYFDP8p88t91ZStps52yR6ZJYcvc7z2QTU8zrsN8",
  "key33": "42bNNA2UUreAkxWhyHAMsCEp6ox7e8Rqaf4XH7Vrmuiof6ejyWmYpEZp4HxEV85WSFcSbqQQAYsVb3X5urErDWxR",
  "key34": "2PEswoRejM77FQeoV7iuKyVHGjBNQEdt4Qc4uWRKSSNMWtPEjphE8rfMxhS4ZKehdFCPSxq7kg8Y73TjFBMAhXSa",
  "key35": "2ak4MtW82W1qCJjN8bbtWsxWETGs3MfnCcRva2hY2RjyYbsad1N4432NCJmfw5QeJ44LonuR5JtumEsFn6gMofMZ",
  "key36": "2sxjz2aL95G3ZXfTevv8i4MeAVAebTXkoayGxp6eGrbFL3ZsfdRtrvRDGc4DWy75AVXm2DXYfd5tdQebXM3Pz4hh",
  "key37": "4kLEv9hv6TLUEeAhQnHzTbPr4WiuFT2cm5m2wga438RPbcpSaZ8CNyK71rZizcQSAsMcVwwM5qwPR5XfvhyPdsz4",
  "key38": "41VmtA63tyesC4Ecc3mbL8yHRu7AuFBCNqZjJ9KD9eUv1YWs6Dn8q4pWCQh3djLsBuaz6W8tyBKHNFYVvqEJz6ki",
  "key39": "4JccS2tcRbP362qrmeH43zGDdMBx7SnTDPwsuoY5hJSezdGZKwuGXB7b3DaP1H5A4MdfoGUt5d3NNfkY4Dx2192r",
  "key40": "2Ljuirnvax17KJNudr5mVh5KQBzsnQFxCUKNkXQvjeJmJYdVdTtFHoVo9SGfba182JKSQ5AqXkohjsYjX2sdDGNq",
  "key41": "2boGAQFdfd9Tr8VViTmFrz6TnAggwyDHXgBa9b65krtpYBoxmFXw592USwq6EvFFUJxyk5s7PS691eXWgP7SV6P2",
  "key42": "2cXaE9WmbXvQzDawPgk6CCwpJZYwL3zMtNXNUEo2CsAPDKEpWHBepZEzkKXA8XZ8Ej6Ds8Qx8Qbz47Yan1tk6f2w",
  "key43": "3JBxPHWKD6cwjQMgLpouWQGSiaehdXuywG9Aaw6AAJTP1voEbRjngU6g99Y7u14cP53zzjjhWhYZB9FGm67E7XA7",
  "key44": "4CpkLHeJpevzKnhgCHAg9yEJGeGfCkYgEntu9eKexTqT3VAaJbZyZX6RyCNbfK7WyhXSCBBMXcxzjyoHc69M2C2Z",
  "key45": "8rHZ1atw9SqMwzqR4upwDXwoGGqmnMAbz1zkTtQX7dBckB3zFTa5GkBsF2b4Y9YkLBhxLGAXBhJismLr2NdNFsk",
  "key46": "Nw3Dn4DNNaQgsmcUWD744Aq5TCyW9yKUYLHSy22iLz3CuHL1JoTobtdNNypu34X71j84CcsmSVtrLKBWomgEzLg"
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
