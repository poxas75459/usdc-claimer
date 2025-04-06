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
    "booyXUaQe3WzfPptFccELVbppXZ3MTohjWH1DyKCCY6aXrv8vgnSWYu1oopP6JnTfQPisWDQYUpcjT8dqCzGSv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jh8ktnJtNmYDkznVQGdvL5GQtSVdYQQeJ2oCrvu6YEMicJAcVQAcx7JKDC8yoQCs2gvm2XNQ2PayZ2xsYhhtrh",
  "key1": "4o5pX6XWFpsTh4cyzBuRo7soG4sur5P4bYV5RKWpzLK93zJSbibg2hP63CysXRKXRBLSKcpAjfYSBciUD7K8B6MG",
  "key2": "5Ub3YyzdPjMr61cBt1DtsG8bmzWphD5hu379itLeaCQVccvB7x7twK29q6FqJAsti7Af1qrVEF9fmxUfJyQRCbUh",
  "key3": "3dcS18BE5sCBZhZx5eLECEFGWNVnsVVuX6c4BG6YkfydYvDcuBexmxzsYgG7LyesXhCshifvJqKvBdshpg7h7gh",
  "key4": "wMGTJyhptjoPeqoC7vs77c2DkHp4UyaFNSGSK1dkc4cUDy3R6oNAnpus9MpuWzrrBoYpebxLEgr1XAecTyCky1f",
  "key5": "3A8wq8pwRZ1SUuTrhMT8w1WjCfrL3GxDmyHYKjjf5PXhQeGrZbFXqorF2wJqTSS61jq9p2TwVU76dQ6ur5M4mtW1",
  "key6": "623owsqWoVbpe4gUXv5md3Gmit5fQXsXQfx9ZWTD8oxMLGG8MF8oTpqKgkiSzAby1NK3LPNqJT7vKtivFjGWpzcG",
  "key7": "4JXaeQDoU7RTz2GUvM3QQi249wpT8TEzavzkeywao71gj2mXLs9FF5ate9rQYMv6RGkQFQ1yZ2riPxE7kwPMTB7M",
  "key8": "5o23dw35vLd1oQeWGBbmNXRSn2kkUqzZVmGWeYgus1B2Kbm5aAZfyUgrQyr8npx2mnzjA5GkT2RyfhdZYyrCFD78",
  "key9": "2ZFikYr3obNmTCpjLfoZP4sEV39PmPewdemSWAe9UHg2SiotcT7YM6RYSTeD6Z5hYXKtxXxgEeyoqiyvWnvMCWq4",
  "key10": "5FbpCVXM7BC5dLFWw48Y8EymhSmJqpCVWTnNou7dcXoMLzoNHrcCmuFeoyzDuR1M2qEVDDCYcJmKKX67VsC3AQ2i",
  "key11": "FFyiJ9TtyCnHZ4eW3EVhf2yT9r7KdajijJ3MZVFjtiZPHCLq8n8XMxWfuNookwmC1M3XxDh9qGV6MQMDRxhyae1",
  "key12": "2oZc11Cs5fkc2x8nEu4pMaa3vahVCDXFAt5mSdDWjGMYYuUQmpLcWvXNTqcqGCqV5pHaGgW5T31h4F7ZqHkUmVed",
  "key13": "3EisvQStNi5CaU6YVpPH8f52dXRniQ9mXpKdcaABotQbggHTXkkWLfHqgNRycRGsead96UBsZPkcRywWSKwcmd2u",
  "key14": "3aFfaEZVqZxubBcrzr43z2zN4LfaCzLJwUjBEPirsxqCBkzMLZ8oqqCXdvxWrK7QYyNW3CpdphAtjvdjS6XeyA12",
  "key15": "5wYkkG1iVkf6wmqo5zbTgfr1tW3vbquRqn74opbdEzXiDhAU8qVc9GSxdtjhkWHcWm1xQkdZP28dSqQJnSfPpweG",
  "key16": "2yb6t8Z9BnJuTEHCr2pAmUgQKndYBkSuvShhqWC2EXdDeRw43MzVLPVBS4mmHW1EfU5fASiSaLCDpPuvVHmSWEsy",
  "key17": "4DhyVFp4jERQ62Lwj5MsAQkGUChHDcSANcv2efXjtvA4Ejn99n7AWoxRc5CFrcaQkGKUfrZHxcZjSVCfSRH8KPsp",
  "key18": "65dmGiHhcVRfzKJDk9DsfzK5smLQMS9s9DzCcdtWUTwLxmPuEzqSbhp6WWEw3wpn7e6hRCP7nRCueJHpgEnMgXAH",
  "key19": "4GfxF77sWnNKFtTvHDekUxJXtWQ8vR4FMFfH5pZ4SgN72CSCb6isePFjYarQkkkDspzmaqkXmJduvA4UtnUBhDLE",
  "key20": "na9UM48Ewch1uFKF2LmsD47Ku1D6nNhPVxGGQ6Ttkv2FwmDqywR6F9hWaW2mq43ZzNiAcU1f8eqBLQfxijgTwtq",
  "key21": "5PUhWTB1NA9bHNMzqekuKDPbPHsDdYBy5gXSaywu1hmn2XX7hfW626KtqHhwgsfiShadzobDmmZ2aVV9347X3GuL",
  "key22": "4v1xSCwNoyRyCdCdE2riwa7Qfyo6c5NQGxRnLH9QyR5tygXaUsPrgpvDCfpSMhKasVjjJrJrdcCtQYDbJug2aiSx",
  "key23": "23jKy1WLSS4sSmEHhvaLT4RUghQYUgEtE7Y4i5NTypzquS86ULjuMVjrBw1itUgLDKFnMqJkxHGpVGguFDgY8wu9",
  "key24": "4LjXanWJw6pdt4ooK7nvrRjpTrzvMx4FdFF4BQgifqEsbLJry9P9AMD6X6h5CD7swShXY4BAybgTR8a2CUAwRArA",
  "key25": "3zts8XXQcemicMT9ay2BdXNuEFaHoQBrb3QAvbQUWH1W8cjcqW5z3ghZhejXYX4txgPJ3gdzkQNLLUBd6yqhTWQ9",
  "key26": "nfSw4bQPE6YxyZDtStmX9F7xjarr1iq7bD51wC1X3uSnzR3JnWQxF5e5YXykfMFoxBtp77Uxvhj18GfeEwCz9t6",
  "key27": "3AGuLzFbsNTECf71XyfXbpvTSSbTLCzcXKcgP5RC2aZre1nFf9DZ6NW3F9aBNhkUwtJyBoiNFjxvAZGh6GNFFeeP",
  "key28": "4HPdHTz5bvV66zELNjamzwxdHtJHKmBBZmxocc1eypKTL2QZau4GsjWqPfH4Kr85wevaMEmCjHckD5CGmNGrZ8mA",
  "key29": "2jdjWQcHxwFrMpBLimZ1YAEsLH8SovNfBMLpj2SfYrUgfYf4nCudAXuu7Z4aT3FZ9ZpiYJ1tSM7UjZ84t44r1oUk",
  "key30": "p89MuhR24xkB8BUMGjfhs3d4RVi5xpN2Vw3dSbtUaWto7e6HoMQTRUVi3Q9z6S3KcWXm6LnrusD8MqmmPTJfQyy",
  "key31": "2YK22Npyi7rL1ZhmNgD7mXCBvhx8TLiRsy7NtK3jthPRARzmc989fspTv2RhuWg4Zoav99tptVYouZD5cZce49fF",
  "key32": "8WZqi9TpXj7EHDT2FbKUXL6DPabrXoURgRAFUkPbBtZiw2AuYh9xGvXbmXAcY6pEh9GsSsVz5aAu62PEV8wPrTh",
  "key33": "ESgSTwpUAfVFWk8SgSFtRp6FcwCkoMLCzKBaGW8LTJGdnPEy4vXeqUd48YHybagGCZnZSrKfqLGWagzQh5N2GHZ",
  "key34": "29c8nfQPvPqzFNPbz8B1mzA3M1BbUSXnYeHSPoNdG95d5K1EMf4CB5qsbd4rD7tSbYg5XtoRwiSi7CLmbw5XiDYQ",
  "key35": "4uCAcVDwm9EaHoCVXbtbo1sLDnrZDcLXM46b4juMuythWzUz66GL5W4KxQfzbMbAGcJKCuuit2NoHD3eKoD9SC5A"
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
