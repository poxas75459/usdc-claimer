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
    "3CXFU4J4zciiVYEqZfKrqHAfCdM8oQrG5xTX4MyCZjLQJhXCzRGTRSyuQq9ypzaPkacMXns8JrwgNCbj4hea8p8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4piroL1ru8WUEByCctkhbW1J5R7BAWLg9Pkk81C1YLPpPJmogjWRWDCyZ2NzcV1kxLc8gMgZss8CGWbjoHe5Hh6G",
  "key1": "2t6pVsJPWLDdPF6XikTbZ7gdaRiNDhSQ1jfeCzLZ3UJJpLRBnK5N3YwCQTp67PMMQsC3u2TwDaqjCbSAmyJsPvYs",
  "key2": "6SzW6NjWtvkKrNyCvQiarpY9VFzYwtyycHP4q7Xk3z6oMn4gbH6YtGmzq5ATMkpyQvTXKHaQNLuMPeFMqTv5B43",
  "key3": "5dTE3PRdHFzv45ABG9RdbF9BYGouXzgtCKgSavVB56FFtdsSU3tWhn3uXcsfKJkshX6Y2ze4HYxrHv7C5BkwzVeX",
  "key4": "3QiscPgoHw6M5ttWFbkexLXZWX2KYJumEqWgpvm3BFMYyaLw8FJ7LdsaV5eKdm2rCDVc21yCf9M8iTZgX9AwfHa9",
  "key5": "36EcfwpK6jDBF3bZYyLi3pse3wi1r2bEiP4Y9SkHYBwF2VThBp1XutAmt4pfXBsYRPAh9swT2EexFZ9Ax4KSTEzd",
  "key6": "Zbbjq2E69rVKVzQRwAx8Nt1hxgJygkLQPeNmVAozUdPFFJAs9ftvySAD73u9MoGm66vvdig6VxaMUYRwtVt9me1",
  "key7": "XrnYPSBvtE7QzLMRWNUZmLuS5hb7DPEaJ7RvT8MnVYGH81pURXBtaAJMKDz6s5e6Kz35TUe8MxavLfBEwPMjKdr",
  "key8": "eB5FJeJpPLRWwn53Fy2LrVBrhWB5FPsqXPoBnoS7QWXTpWK42hkhQWEqrcYZ2SAx99neqLR1AsvAHnAKXEJjYr5",
  "key9": "QkdxP5rvRPqnzaVv1DU3LLuBaS6HyemZBkGNhTns5wmF1opWgUDSZ9m7i2tYg9DQ7amg27RLYKSGAKPkGh9SkqW",
  "key10": "4vsrvWquEC4Djk3vriDihdRePvYzsgRMQHCN9BC6uLnXKBrQJ9yTbUN9Nvnv5cQ4oAs5k78jg7yAbP8RDmo2wDz6",
  "key11": "4dp1wgNFV83hcpVvL97mcDRTaCC9E9nqx56C6ksMNSMFxCFb8bNceyYT8w5FzPpUzcz6cZ2YyMVTx2H2qSzws8Fe",
  "key12": "2PJ699pE6Rz72EwukXhJT64jgiBzyK8wUKFjmPUVhVw2yEcT41PkZFd4m7CBZFRzGw4Fq3Fo9owwcZwpXxS7e57A",
  "key13": "2Ptm5jszekJrK88iBFvGxLqnu7bUiDpx4vmhtPpRsVsuJwFciT9AWUFPE4B6pnm2wxsBeJWu5bdXdM8yapUVrMML",
  "key14": "4pbFUsj9TvfF5zuXaB6SVv1tvFmpKSExSseK3vW6rWFKdf4Y7sHT2DcnfKrxuzdU7MSCzuTRwGswkDLRR7oMCysC",
  "key15": "3YNmqkdY6RTyzESwr3uPBfPjUsgMbh9Zwstq2NNnE9RwDFxYKxPLvDNcnLHbjmK6MCSi7Fp1S5cekot4ZDESUbVV",
  "key16": "3eoemvUxRajxuXxso6u3kx8Mfgf7pJJo1Te6zSRk1cnRd3iS5GKnaVYhGP5xc75B5uu8ANSocW1GsRUfjR4aCxVo",
  "key17": "7rmVRkYSJovtASkcNhxxZbUbwNPhrg1kPytVHx69QZSMCi478faHcsCHvbiyR4skmaeqczyzjsPb33xx26tMBTy",
  "key18": "2V2wpAiredDyW56wXTxLabv83Ki59FhckJ44m9xeNjzhvgUtktYe3ZX7PUjhRLWbywXmFDHGPXUVR6s9qVrTREoB",
  "key19": "nZxuzaMWydxcRNFaQF2UGxBkg2NuGhH7sBg8CUDV9Pz5vYjJSoxSpSYQweujUCTXFd57nW7x1MrWi1kJn5eHxUZ",
  "key20": "4wy4XBsXVwT1bJGuAui6dWK4h5yBocns8jUyxvKjCKt5hsGTSU69wKZQNm3nnUzNrn5c6MWa5SqsJc4xBQTE95jX",
  "key21": "2HTXUzJZAKZTvkM7wvat2qqcJJFsAQVxoQMUyTS8CbUMU7EukpRBSMRxPKz58xeLuAjHYCREJRcP9S3icxBncrcL",
  "key22": "1to2nMFofESRQWsjC9hcJni2Typ4ALyR4Sf19amSKeG9HNr6BcLGE9cvQq2A7ugGW8r1oMaKHBsss43CyNmthEB",
  "key23": "4UKU2ngwMsiwuNmHThYYxyH39nTDgPmtbHEkkijE2GHtKYQHesbMrYzJtRe7Ux1N9PQ9cP5f96y9fyhihU9KcmeS",
  "key24": "3qGxXcx9qzuzfYpFmmnca3XLj5R2NiK1czTUKHGxQHNMCkNSYGjoPXFnBGYXvZpiiE8VkfCWvGZWm13wEAqgpS1r",
  "key25": "45JaDFfvhYX3s1jnKEcGfgWPKKuKk5MRsHHFvx35ajDcHfXuYMTFx17zeWDFyS7faFhtkWV9urAGGG5r5k2RDd1x",
  "key26": "2rczNfy4phVqBJ3ezz2fECL3Z8a145FEsJa1gJDtVSVuNqqgpME1iH9uF217FapSqwD2e5br5bNbPruKZTuNPxgn",
  "key27": "3qmrVBfy51LKhyokUCrUoyVhAWn7SYiPbBkJRbwzxpWbDznurS6h4zPoKy6DCi7aqsbiCheJYBUEASkyJqhAWKU1",
  "key28": "4MAJgpEqFLPFzR4vNFs8zvnzyuBEe9TAM3KRumhxumkhiCX66AGULh6bkYogtebgzG2NPg7gMxy3TjvjnvBGfbEm",
  "key29": "31Njr7FcFcGVZNVM3uL6tUWSYQuWL6nrDcsgjCGYeXmUaeqBB1455u7VoZkcxMunxeAyzoGuzXXCD5BTwMYDqC9P",
  "key30": "2aazdL3Lav3SBS2MaULxZRFc4h4z6XVeuJ6P1smuayTuovuR4pQLDYMFdwCG3JonBZm8HL9qd4Wa9NSDMSJ9g6vg",
  "key31": "36Kxtarf4ZeQeRi9zoZbbt22STiqtMCVej9SEWuhvA7BFJMsHCsHym3CqKH8nxETTPxtSXkTZGhiphV3YjBFxc9Q",
  "key32": "4CCNnmhN86YESAjMMSoGwjwFAC6TzCTowzC13ZLV8LJei6Xg6gwpY7Z25EG3nhD7RcFY9RMWsWPbPMbCSeYmsP5m",
  "key33": "4yiqNxGgtPByGaVPaNLPWybjrV1mgJbfQfKqj5UKj2eaiHoPGrWV3V4H59nR56gc4fKE1oR5nrgcygCxxLUEv9Ny",
  "key34": "2L2oVBmeZVNdxdXjLrpNruxU42rRdGDAk9vKn4Kgd8Qk4BnMBmwLUR77EqEpQgdbKPh6EgVqzbSKFtBty4MkrsZX",
  "key35": "2BrFjoz4YyJCgXmZuadbdZsxvHscc7zTCLkRCA2eYRugbsdkxVaACVr61BaYwHrhHRKf7LfMSfd74RXtPkPpMRgL",
  "key36": "2cqvZEZ7zR3TSC8bSRmH5Xo52JVoUYrmLLz4jyY1kgJYrsgf4eh4FykToCcP4XUVE8wBdUVTPY9zdQb5MJ98DNA3",
  "key37": "2vemh9a6rsggDczzY2vF8EKhi8uQ6KY3CxgXEkxGBi9cKPmHZD3Z1Esoa2jzbxFLdYCmyFGteggYSDUa4bMzLwWB",
  "key38": "4w9b6UqrxSwJxieMd4DcS51tK9qtAZjr2exfRSax5npt4dCwgocYVV7PJmy4AvxYtdYYaHGsjRwKLv19FbGtqHjm"
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
