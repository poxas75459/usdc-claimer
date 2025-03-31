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
    "eu6L9RAJAUb53hAeYgyiWPzdpAdRS6hnKKGGszf4S2ZVuN1LQ88oxLViqxfQwyWwqr34yEc5x8NavT1rjq4EbZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rQtey4buxQqZEbNRrTsHekb3r6JoQbVoy6DbtZo5iY2q9F2PHTnG1zv41oavycVimHcbrk2RzJGWrB8HbHkEsmV",
  "key1": "5yZK7nVVmC32LDq3XRRvUVRH3WhraQMc9SHi3eciKnRPD6E1fsoy6hWXmcwwNjjoL15NYsgWC898aJthkYtxGgkw",
  "key2": "25MYWsMGt9G4jvuUdVBWQGsH3QWKLV3fJ4cicgZFq1uMXfh1iFVeFzfPcgDhtmcVnZsMhLjkG2ochdF4zb5WtXxB",
  "key3": "5Ewt594Suaz72tCR7qdN1Nk1kBSkfqMqPTpvA8qBqGXFZydUVz38SdvyvVjCLQhw9Ej3SHAAGKocx3TNZpVt7Uw9",
  "key4": "2KHNpb9FsmGPH1JRwpJLfHMdWHyWH4juZfsZrF1rcXv6zZW6LXn1eq1jToz48SWcdHPg4pLQwJL1C7RxGLspNZCD",
  "key5": "5hfDAH4aySdkD4XfkGm99gdp4NE7bwB1o6s7TsgE6rWuLVxfQJKY2LKiDCudQB3fRv7y7JooaY4Ts7Jhdn8DgU2u",
  "key6": "WBHMqN61P6oHuqbin1rBPtojpWw6SYsVZTkGtuynqAyMfWXaDJV8VqkrZYQhCep72oyMxpR5aVaeExFcKpjptpz",
  "key7": "4moZZvmVDPGbdYXSKYPhxKVC8SNTQZxxvoskTvXUEsJ6aZ3k2DVX3NVbcrmpNnejFwkgpmuAXx96R9sBbNiHecnE",
  "key8": "5dvWuGm713xskFW5rkXkPL8aR7xm9yRokQTZPyKY6wN61fib7t5jsUBUuqreZepXwtNBEDANKUcZ6eiWeLLumjTs",
  "key9": "3ENf8Gk8igoSeo3EArD1Z3dyJGe2PqmN9DLi6ANYBE6Ndk4TWExWbxxqts3sdA1tJN6DqDb7FHsGKtgBeLp1Swbd",
  "key10": "dQU4REwMAvpU1y4apRm9y3VKd56jiaAyU5Ld9kkuKqxxv9MUMgWsW6qHQkwXw2cBuw8NdP6nu9jst787e4iaNdV",
  "key11": "3eeq7pg1tjrFBnyq7e8Rjkk4gmvB9Q5jUF5ga5eSWSUC2uXj8MeztKZFHyR7ut39YY5sTPnkyXQM8J4EqS981JNu",
  "key12": "4A65FHMNmhUG9upks7hNsCkvggvCeacs1hXU4939ADYLqZFSMrPRq4DTf86j1strXu6PBpDdnvpDrbArazLP3yaE",
  "key13": "4LASkohezGijfzirNHsZE6fiSNSbtF346DjuH6c3DJPfDNz1EMTacfpBiJYPBYWYjaS3GwoxoMXDsBUNHeJ5jJHy",
  "key14": "54tKsMW92VNPpvPsuZzNV4NmM38uUu3Pe8wUdgKuxnWKPh2CiTPmMEmtPGoR6aACmLnx9A7TsyM74B7R318MtETP",
  "key15": "tzZjgjKnuZCGFjFeCjbbDWAnyzRkNfWMr1i2U7ngWSbjD96gA5V2RXRfandUNXZt1qr7F6Cc7D31LMcVgWB5auH",
  "key16": "nvUAr9xPzMs7ANdRkkbaqBXSDhW8fbvdNuvjRGuBpQhpKG5oicrCDXcGxDgZ3o3upGNYd98YGQuh62yiRX23RAs",
  "key17": "3y55ffa3gCMxbruj5LG5bJq3QyedrYh4HPJAa8JdmCWhBPnRTJUHE2MPQDAUgU4T7fWB21vnLgkTph3wuZZWmRLT",
  "key18": "5iUyCdus2yPQSonPq63HMLSsCvqyKnQv2EahhWozURwsKb8KL55riQQWYRXDqMWy4SSjxqXWniFwEhu8EvG1rqv8",
  "key19": "2fPxJCPbY919KHWrEgvv2syR8dg15oceSeKYMziEiF7fodWTmQtEVq69dWKExUtCUvwD3n14rpj3yuGuLjQrKT1W",
  "key20": "5aB15TXoRhneH911mtPPEon4hCsGU3Nnr14CBx6A2ncp3bVbPMdyk1Ygt13bwdMQpkDTFRweat5ddWx5ZE2DTKYb",
  "key21": "4m5v5zPmZ78iLADiuQf2GqsFyF5oogp7dos3p2sPemAjA8ytffGtyDN9vw22gCzBisDByszHMVxy2PcJ3MRN4eKq",
  "key22": "4remXy4qHKFzmtqAnmFujVVa1wtypEnuZCXzESgMpUo25V44xAEoYZzFRvvVdN81cGwbMWWsMprsBJmnCz7EzxHU",
  "key23": "3Qvy66y9f5RhHe6a5zHiqJTskbNzSGY18pqB8BVX8yyC1SoTo6Yngek7iyzaoFtXYXXDMUZL5Jo6TPrwmtHjFwXq",
  "key24": "5V2rRbSWVbA7qARUbTop7QoihjmXRp1MStNvGHVzZbud2wmHr7YbYyowvx3ck8qe3Pruz6Ro4DrCFWckRpp4EmT3",
  "key25": "3uH2AFKJ63ZFgw5eKXkpcAvSFcfKvrVrph9EiUAG8i6R48Uw5EuBzJ4FnHbvM3t37RCY4vHWm7CMWpX7vjKcc99o",
  "key26": "4wZiTKZnSzFMigoAjz4bB18e5d1u4sqV8Nnko8vNF8SM4akqr7uy8EKnSVFxdP9x6r6pVaPQ1kA9wLRpEQDvLa2G",
  "key27": "3rmDT722g8fXCcQyiwvA5AFCJJad1uqayjXchznTu3zwB2GxwN2xfn5gL13jbDLyNDZUBRGLKNYm5mnQ7vquZpMs",
  "key28": "Ef38A2vzWirJgf3fitnAnLFnaC5YPAt5pus7Y51S7vA8HEGGYKc7VSUWVXXAbfZMWi151jhsUTJogovpdJ1emcw",
  "key29": "5EkQ12vsn67cj1gZDQs4b5VGHVPZVMaTYmiYSa8XkPFE2Scdnk1WjCLQCBW9em9XeJjakgxSsLwYWhKrXg9BKmvd",
  "key30": "2Yp3RwC2tVErjTsfUq3wdfSFUjbnqAdgsh1M5vNyTaqJYQ8XRQbMmLe7yRJR8nyJbnCnVCM6Me9zXosR9yj6Pc6p",
  "key31": "hBvHwtBftExmRybMXhwQA7wK7ThoK87VVdK4vAQkGkTjwE1f4qFk8mFaCvP971sWZFRJgeymeUkeUTLyktKC8RC",
  "key32": "65miR5h9y1UoZCzTYEu1v63yQTZ4qTqZyoX2LzgPjgzRs92wqRAFDHiEab7m5JpjnHVrkBuqy6j7z147Umhpxso3",
  "key33": "3gzPHB1B4F1m1K8mkhXuvAod4rv7LbBjHK6mG4w44szzmF9zMbLXgedvgFipEg3ZpqxVVcqseLMr4WodKypKaTNy",
  "key34": "21g7BNpK52LQ9Z2NKHhFeC5kdfSvGuEzSyzu9E6s4MJJogxqN2SqFHf8theZHzRHyurJVSaDwrY9y9dpRR2g1qrP",
  "key35": "bXvwouTH7HDeYK9nGbgkSQjh3NM8ZwxwKimek4pAcFgookzDYw4MXVAE3r4mpz8gCg3V9cFuMBhTm8fYq1T8ip4",
  "key36": "3ngz9HUpSntrYPxeWjvRPRkBA3gXdKeXErrsiNTjZjrzgukAsm5iZSU51bRGVer5ZMVxJHNzP4J53VHxApaMZY1Q",
  "key37": "4MDSjrH5TkGPobV2MVAY3rhJpbEYMy1iDJLzubJxntGAwaTSBAtwZKXZUvhwVMmFM2iED4a1GXZrJEz9M9cugBk4",
  "key38": "4Edp4XawK7cgg5h4BVEwm1xENSvv2y7kRGGsFNBPPnv1wK6DeVLCNemK54iXjPvaDvqwbrNscfEoHPWAPZd1AWMP",
  "key39": "4GRYfuHy2EmnZFPnMWhYrBdR12aLRwa4j5o9fBv6ZdmHyS8nXPqjhkNn5rsJ5C5EWPJqVeWovEysBhhHZcVb7SMM",
  "key40": "36ouZANQLX9fLX7qWSvVJkNjFvnmv164Yq3xnnxxxcRXsvwTGbfuo2pKPwXaBbc4FLHiGjV8XZBt5Fmw21Ncq5bP",
  "key41": "4mWxEztvsfUoqnCVuL1U1SbTEed4eTp9RmCPzJi2veyjizstZEaBteMBFLQ2HmuTe45LXZ5pxoHmLo8uc7pzhaVb"
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
