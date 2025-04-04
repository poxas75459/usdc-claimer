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
    "EW2D7QJUHH7FTShsjcPfPdDEubsGjn8Dj4hZdhQ4Sj4S7Aq81LtjmoXEmdGNC1Az2rW4EMfX5p3wC129y6a24TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ed86f2PaXqPudtVpwuxznFNM1sZCACu1Z7fe2yRBmuj9NPcx3wugKGaAbQ1RbzyxWzdmVsnHFwugkmVzkKgcaJS",
  "key1": "2iDkKAijgEGsfL6QLLdSmU55i3moNRG6TFp2rL1wF68GinWcAkvEkbBNyFEnuyNQ9ZHodTfq5ZspSGk2CeUdY3vC",
  "key2": "3wk3EUwYkDt1JRxWsSQ2JiNeyzrZXT78vCR977CBbTqkP6tsvYu9JPodDBoDhhjRjf3aQcvy6bo31FdgnLdynhxS",
  "key3": "3xFoZzjzKZSo4nnWNZ9zWx7ssVZ2SGK79jEcEE4UJ86J8vdTPvWXmbfntzGQe41auKmraXwqEZSZS2C3hxW56Xtm",
  "key4": "2og3oB5HSkQd4CvJ7KvyzPtBE2UFiPe4G1d5W8jf3BfXVcxWASCXsXaZZUBzcjUuYWKDrrJbCzECoA48hvKYnp87",
  "key5": "dTmRMts1HPu97dvQU5PiQER4be5MCiMwerBqJQMEWjwDC9G1iCMgcFQM781QpQxKPTvcydoVPnc2L7cvEuZM99i",
  "key6": "529TPDhbBcWMdtPw6s1YRJ24hbbFssBJVyiMJsVtQJuKP8R4xg9nvdUsiMxWxPUuUAL8iScSkUAr14s6Mivq2DjG",
  "key7": "58WBBy4zdMex7wAZjjj1niroa9tSJNTK4bMYu2FZKtFd8i2yPNQYy8GQZFn1fEJpfLYJ8YNTm6emvvjTftFTYcYE",
  "key8": "49vbaJLouWh3eweFo5iuHXNv4t1CPKi3Sk1VJfj8MGi6dgyQdS8Cu9C4HD1mt3prk5NaY8wegECmfzyz6GDVCF3K",
  "key9": "4xJCcsZBcz5vddsY7tbz396jx2vwbh59akUFPjyXoGUGT8Ut3z4bwfiz51anHyuXpPxsHgpc2abpEgs17mX1AnQ7",
  "key10": "Yor6nsKoXrsgcAdcPeu3VNq8Pyn6kUN5sGiB83ybkAdRF8zXUdPq73SzJ8FqazxPkMiukvWspQeNPagcw4zUyF4",
  "key11": "5bQBqMfyhnFAYfwLBZRpYmhw1vVcRGHV1cjY1Wh9YPwjDbZyYgZUGMwvFz3p19zodBmiYbZQzaN9r8yPKEZGoxuJ",
  "key12": "3iUq4DYkFQZi4x7eg8Xex3bjYoN1YgxMfRdFYz1jjQDB3dEMyoimycFjeFyUpXfRKcjMTtLXrb4hd8LtDbHkU8rL",
  "key13": "2zuLHJQsMBRLDjpxDbE1SYL65asrGUFtcNBgYYx51SZVtwENjC3KnkqHGgqRdTdRMsiQX4Fov6WfM2qSQEmfN2ZP",
  "key14": "67YmRS1BEb4dd3T59nhwqVBu2oAsmZVzRetsHuGyUdYoPu8ryFZuc4MiKV3ZPyV8hxsjxLoDFkw8tTEmfmktYX89",
  "key15": "idfUr56278KRRmcXS1RvNAPvdj4Yg6hPNmSW92nxRHdEYpmcotsftRC5HYqUHiMYkiXHcpHbjkJSaNYMAzKKD9h",
  "key16": "2KrWy1yYm3RwouGfuH9cRcZbdCtkyHRjAheHHFKFE754oYN1tQjptQGq81VvsyQyVRRKjz5xvkPtjQfkHmjv2vJQ",
  "key17": "XojBjfFtGgWguuxxpNiR9WkcZN5fYsUTA5RN4LEafrXdUUsRmAWXZxUd45P8Kso195n1s4w7HyC6L2eepEW3q1Y",
  "key18": "v3CS2wJyPjurPYxAW7XxjVpC3Xf4WxvsNnFwd8oNcBgasojfT6zZLm34MryVJKs38kcrxd9Gx4xkHqhLVBjmaB9",
  "key19": "4NrYGfxNU9TKRgZSFAPt1CNWbyyMcJYU6d5mg9MBfJ1QTv33sjp3efvijAKs4Q9YyWLu663dPJ8zepAbH1Ywn68G",
  "key20": "FRWCYhyGE7jasi3xGKmFWPUH7d1JAGHsRCJLKAKswRn1GPcCPKwBhxKQAMmRuBAWHP5qVjiMn8TW9io6VR8syKq",
  "key21": "4ExPeWGPpFKxPH8GiRFFDj3dzVfqQqnbC4dbXwjLQmrfaDxUsCToi6fYomxyxgUY8MZjiLrxmakCQ1Qzj6fy5W4m",
  "key22": "49Ch7bKxSS9D5k98fDDX5ra2QvQnEFWgMfEXXqZ8KVYRhyJNYrnyyCSRW4r3wXXrkFZNkpG8d7nVzpupoqgq4h1C",
  "key23": "2XCUZ2Mz6eZMS9iQ85czkmm4tyRk9WtXdnGcFYBNYLTRdjK1uwSdD2Zg7mwamd3AFg2m1bJAdLXDEeXEzx1gKxmQ",
  "key24": "AgGUYrVy6ZiNSjLzSojgCZLwXeJrZACMmiT1UgGmzAiLNvtSSx8hJShLCgBpoNcEnuCo8Y9b9pnd5TdQLr2HdyF",
  "key25": "2EomuVxPtWLeVXWPNLGqd6vU8eo7ZmSdqpRtEpxq6f7waMyExCbekWMyVFzofNAeyGfvo7dzuGAJRhUjn5huGPEF",
  "key26": "66q28yUXygJa8PUmN9CxUvNZTLHgGJPwdZsCnb3gbmuHJgERFtxNBVC8jTZyVDPLLryrTvUb5BEtVW7MyktinQwx",
  "key27": "67KzmGf6jYj2LMgzWQzFvjjLMPbzsFE6EEQE7KukoQL9VHpwNLaRrNY5wEFXnVpQe4v69asBWWfq4ogPoK8aGjVT",
  "key28": "3ED8jyQrWbWaHaD1bG9GxidmCgEcuhXmd5LRZ8sdv2eKfRuaB51SfTy1SJJRAwVJiJEKo4Hi5v5yYBanT81yKPJX",
  "key29": "2aGunV3UtJ4haf7Y4zUuySvKVsTNNCW9Pf5zvGPjsfKgWR7a7ga5SN6Tj1K9L6X9KTMvm9jSRwwb6yWgXPWEDWGd",
  "key30": "58gweqkAAtJ7yxCr6DLBJoWRmF27ebVMo1wH7KKdMouGWTRK9vmdK9PXPV4TvpS6zC6x1ijoVTFJBMHhMJLXcx7E",
  "key31": "5rPbE12Y46AfNXLKReKE7WyRxwyCHfV8EMAZJ5YdRF3b7SLpUikg8n8Nn8GykFRSX2KBL2EthXzPGXmMoK1u7kTz"
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
