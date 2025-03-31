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
    "53yAH4wTgMvLFnYM1tdoktYuKnT3cposbXfwSRrjLkn9gTzC1tt68BeP77i5uiJbhkMoLALEA8sdz1noMiD3TEUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdWbWyPckCcnhXLftZRECGDRjeFafSnRKkMgU9hSVxmXzKe3wEYhXimLJafskccmuS2QEznf4TX5waCWGCgeCER",
  "key1": "2Lwnu1YpWCYamyWfvL5QJo616KMfDC5h8fe5xdAggNVxciXQvSzxTzg25NSKjV74wptYB6DR6jd9munMzrYqcH4T",
  "key2": "64LNZkeFWTHBxmRhofoM5gFC9Ff231TRhchPYvFq99L9f6NkeAFAt6pjLUrEcmD9S92JLDwyPtTWCx2VfKtbDy6D",
  "key3": "4osV1RFdMH3AhWkXtSedRLPUy49qSVK1CF28NYtAVsHKh79c2bQz4tVpSGckC7irkHSVyp689rPQHwGjiJXGjait",
  "key4": "2DRHCKLwRQvABQR4y9wbVRWQV8E6nkMmaKairWgSKH3bqGyshmoZ1wkpnpyvEaW8EpsJFE4BbUCUjWbFFSoTvQFa",
  "key5": "29iUCXKVNPcEdB3vwefs3YwFQZsvcx7KJToau1oNcoeqbEUEndDjB6tirtXRPfSrw2DB5RBysNfyWRjZVmzth887",
  "key6": "3gkdaAJMxnyi5jkXYEWnvGKG51sxg6pdRTPjx6CdouB6Bh5xwgqcf4z7ygzrHn7AZNSN5yrwvK4EDf9Q2mgUHjvW",
  "key7": "5BosC2uvMP6jipPsBQYjeHew3N31nJKGCkg6M1tcyem3xL8bW4ajkBv9TeCybB4hnKoDqknqC1zS7FNgfiukyPmj",
  "key8": "2PfPobM35H4qF8RMEAvXTzAUMkCanEBugf3D9acKUFtpXYiMUXSBdzS9Wy5yrcAEqrH5DBycFzrVGKU1SFCf4HWk",
  "key9": "9q1qXzDwYAQFuXfHbBHKZYnCLyNvQtkbFzTWNmxRCTkifyTKSjTz6rCgDUuxUSbqXFhYGtFUFu1M8VtQda2Jy4j",
  "key10": "3Ts6L2Z76rNmnzNguizJPoumEUVegRweoUo9NYz5ond3woq71yjXZYdKQ87uQJ711nShh8NTPoY3MWbfZ1mhsDRw",
  "key11": "5MuhLMcH4BpKjKeu2htN68i33z2wAnGrvbf2ETzefT1zVaRFUktsb4mqT9oXUUJubQgQrLCPUG3TiUJUjSwTBqro",
  "key12": "5ABQBk3twCGtyBD3V2gHuHeSSRiBw9DyBF57YYBFiguLrjx2epxXeXw7K8i5zztvCbtEX6nGiehpMqruMFHZqxqJ",
  "key13": "5ra9WnyWv65CqgAUz8JiBEfdsPWkbyKKMU1Tvi76DqaKyMa6FqHTtrdZE53KTC6NvNHMr2kq3yfP7qh9hZciAuDQ",
  "key14": "35iTaYaDSCMXcPBrcgSmApjMi5KPzfpv61mZ26VvyGR999nfuVtZVYjpnnh1quNpXhihoEJdJ5hq1PF4DtLuH5G1",
  "key15": "5AmZipLpCFH4rM5bk3Cwr25dTk6hf8So7yujJW3Z6HyVLnQV5rGDwta6uQ8QCyskZjSmd35yPyPwsd2NvDTKrkQk",
  "key16": "38FkKwhVeu6KsHpwdCt93pP7NHLYY6yjptL4zkKBu7GGFfdYEfTBobuT3YMgX1vJH4MpUJ6ym9zw2Xa82bJ8fNbZ",
  "key17": "4LkykPoLZ6VHGzfarcMazMnyWMNCQeoMjn3hNGBdTZCJq2EockpBxYKxg2hcLfAWbbAzfBPgU1v3PrWwFJTMeNCi",
  "key18": "kso7SAGBavDpiaB7SFZRvG8F7ePCZexAVjXGd4fEg3eFB1zHU8DuFVYzt3GZQEkU9jraRUpFddxRaxSFNjFWH2a",
  "key19": "4P7fQ2gbPtDxU45LfMGA238tivhKvjbvQyPT4dp8dvRvMJvhaxVBo3QEkP7ApBDUG85rKqCJnyJHRFRS8F21U9RM",
  "key20": "4ddYmgUZYD5XZoDLdd3xdTWk14FLMbZLrGA8TMNcvTtMaNrk8TM1vKf3b7QRzy1rQgYYVbZ74aA1nmpSLKsz36r8",
  "key21": "2KiXsZ8nX2GGzgnQTMa22931EJ2Q9GaFCAU6JVNXjvntheJJQeqsuQ1NfURR8aBQS2FELZiKA6h1zFhBsKGqhfgg",
  "key22": "5kSufjDNc79PV3nEw45dcmQPQn8gnC7hvPCR9kEYh7QHvvP3Pe3EDL1Ur9eNJgnJf4g24hetwSCzmsXmLmkuC9Wv",
  "key23": "5YQVnfyXFCzRbPcnE16gcjJDxc4vuz4vDhCSEjMvsgTJqWDNbo9wKbmnCzq2BFSPrcJhDL6z3gmtuLgEhxgJgopY",
  "key24": "5ioMJp9tXdXyuGrYXufuEDm8iySUwxdLzV887USiJRzodQWshLbkpTTtiJRiLkDvWVjCpejBng3NSWCUszhmVppj",
  "key25": "2T8d7pM2o8geV4qrwAVxcRZzBEfMz45Ukmbx174wuB5Z2NNbiv7FYPGsJcJZBdWCy5TPWCMrppqwtg9mjTZZUh4X",
  "key26": "3wfWsAwE2tr2zpAHx4H7ieG42SJQ2gkw9DPkdaGPANa43Ux2LMnCdvn7pzp78ZWjpKHGyrNsi13QkBx4wAKpNseV",
  "key27": "4KtdbQE1zEPbzizT6UvWbUTzTwpHFAEGFsJtgru47yZgPmbubiaF5Gos6bX2hKGiPmYgc6fnWcQfiywrzgxAcutQ",
  "key28": "4UwBhxtPe7gUNNFp4QhJrHDRoJLk8yXULHEZvmEPBdEjBLezDUjuFs9zbSdQzbLGNCP8omA4Z21RwXJux1QjjjEL",
  "key29": "4wfKCXJFh3ztDMn5BdNU3ZVKbjbxGnBzkGrM7aFQjhbB75F5qziy7Nem5fzJgQmgzvYpLtgkxRgruVD4ysnkmGJL",
  "key30": "4EGSCzsR7mFGdBFKbbkmB52sYMSddHYdZCVA6jUEmMF8PhJxPtdXzsGnS8A3fKoY5yxkkbJKqFtjq268iZ2VZWWg",
  "key31": "24KzfBLjSBHSsGAvMVN3TFp4zqLWPGimh27VoY9vFMHoFrmGfT4CcSUjBi6bkjjn3i4DPeY2qFDL6EGHenC9TTyd",
  "key32": "2ZxXR1tRATYcVsN2DTyztzWSn5RDVPdpxdi1uT1s7baCVMFpW75NP1dmk6WPC3EhKuQLgf8a8A5TWKB4xun8kqpM",
  "key33": "zbRzJGvREWihSxGbA1fcvyCj2PFWwstHjezYQAaYK7iMNLKm6jRz6JcxaqymkRpHbXzRFkQ6khxUck9qZsEbNZP",
  "key34": "58PX9R71zXLg27gkTMgW7a3YZnp7DDKBqkBz7pXEknMutYxxx7jYNtpfHM6UQF4ZAKV32YW6v8NKoDx2V6EPKNDs",
  "key35": "3759HUiZWXmsKXFsztxtd6QqizAArPv3fyZTragkDiFrLTy3qzarMxSspbqP1rs7aV8Zcb9ZyfcPnWs99TcQMkc1",
  "key36": "4GnfS3edgKKeDqarGjMv1VkMNmDmKrCtHvWkw4oAgqErQoZ3PA4sAiErEXH6S5QLqreFS77HtgB8LfQWbe9G9YVX",
  "key37": "35iTvTUGWDja96te4SrYktZmgMV7SZjHZxeuTzBgavKqmJYSjkYH5xtCoQwqpbrcb7U1BS5Z8pfQR2xJgPyFC4Tf",
  "key38": "63cLku1FnC6b7X64UViKh3itjNbGtWBQRCRBP9EdkVTCNPQjD69HVV4ipG5GHhu7pbCADxFevBgfYK4aPAAWbaRr",
  "key39": "3Mn6uv1pAKJKGUvBCt5dZuSdhTj2rCmAx61NkKAzBgUD1G4KTh48YsV8Qv2UT59HGExhBi9Kb5Kn3zNkfRTmcX3R",
  "key40": "kesSANkLDd8HfGhEJFtM6cetz5VEmEgwzf5xCktbtHC3oYhb3Fd6siKurNELzM87QxVBWW8SdVNdUhamc7WX6M4",
  "key41": "3zidSfoTWHoPfNaKVw2eg7pXBzCHQFNKQkLvDaUatkLkUjbwXrNadHhUoCSbtrCaCuMShx2cDbkwJvm8GTDVtThp",
  "key42": "5zsQwjwqcKPUUZWn2Vs16buXK6MDU4ntgFa4dp1NYkrzgwpqTXVEaVHz3q3br64NtqW6dnaaGD9hoBTzx8NybR4m",
  "key43": "Vh5qLC38T9rSuzkaRdmJLNaWhTeCLkJNwkPeoFdwDNf3Yjovmi2bPXXCuNFmpChj4uDrLgrdiLgavUupZvHB6ai",
  "key44": "4N88BhFDTjcV4wdV5yk51XTtBb75TPh3m6RgBA69h3cvYHGgf7juxkN83j7zEtCwCfy63noLK66UkfjgU2eivWzx",
  "key45": "5p3zpA1G7dDzxh6eAgmFK2ZSgMx8wbxB6VyJNianXXZWqLLCaHo23jxjjfJkiS2N4TBVvM6ARSNFjh9jMNBovyXy",
  "key46": "5wDx6r8YEsNuqT7QLEuAsAsSFFzMdNLDc3Xqp1jAcdgfWSfwP2q9x8pPJd3jYNnrwmjgnwLpRCP6B6G8tD9vJnAu"
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
