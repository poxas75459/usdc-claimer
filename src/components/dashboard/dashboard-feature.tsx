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
    "3RSs6kC7uJiVbWAEVKksXeZWmYFB7VH2N1oV2gmfDQhYT1AAb6k7w8dhvVQJmWi517zVSwRDEK3GtuevGWbcY4UE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BJyHPbSMNeioBY7VsVocweFY7od2HZwbgKQv1qfqQxz9yY5ujpxzg2hoUsEeLZ6XfMZkt7yBXCURazmVRWivKPS",
  "key1": "241mqkDoaquKcV99Amrr46wJQWSjnLhJYSzVvfwudh3VX9aAN2pPFkNFXYqY5xcQ4K9PtGDTZbsEBFmcNzxdWYFJ",
  "key2": "2dnrCotjqrG72yMu31DVgyPiefrwoiXmd6YLL4gAQuDwLdQpS6huA9Yd7g3XBDfLjSqsV15mPjR8LxebPwLz48Vt",
  "key3": "3FZ48BR42MzNmf7Ko2g2aDALrpNevwxR2WfVk4VRf7PLC5gHcn8ZxEdLTxiHvHPRcb2cJdNJaL44VzHDdhcJKpMB",
  "key4": "2hKkvQMRynzmfqcgpnRD7pADhy73qeKQDCrWc9LTDGyJWodiyTmVeB6k9JXc231eqpj5gxc9JBz8ZnAs1EPUBWc2",
  "key5": "38jXeg39NjnNsjrzveVG6w8uzJkRFydCSZ9RJxMDFjKHZuTwKJFZvFdXDPnBRDS1Si4y2Cm9KfHzbXktkXJt11p4",
  "key6": "AJSTxfQr5X5NV7E5Y2oMYsePSBgDpaZDWGMpRhi87MKqtkoXDz4AFpG6yNCfRgm7rHKyyJ8vP7a7kHGMAa138Co",
  "key7": "2gQYDig4tSeGtkDfu7hynH61pE2Dz5YDQ7QAWhSf3BdPVPCZKg6vGuyddReLcMvZhG6f4SWEJptZ1mzqo1xE1kgH",
  "key8": "5B6skwGLP5ARodX59uRJR4eZJZKCDDyBaBsYH4HiBbm1mfU67XAiWz1YJmMdNsrHtyABwTjd4TyVhRtG86NepumN",
  "key9": "2LYWoRjJYqotcpwRM9JokYaUn4cGhcVBSKoRcizGjt6keMR7ZfXYqfRpBBeDxZv2PRfdowdVFSqdETFrVpAmSdtH",
  "key10": "VzSEJub8EVGQkavNriwtXCANEp25W3ZteC62q8Ym6yaCoeAtRCY2jx6SZAqtRUi9KvH3SwgFuneEkCdywPhMLYP",
  "key11": "2hEcrSi83Xxa1HhU2Rktm8dLZxF4QVWbisgmsFDDRtHiP9hDDVKB7KzQ7ng73yiS7nTA99sc4rGEc9DqYmfeRopL",
  "key12": "3hVCGc6f1DzbPnhofc9u433V1ALHH4Z6W26GhWFNRyv4MEmnQo3tK6cpikbeJr8tqFSEpZVrDaZ1MZwpBFCiec5n",
  "key13": "nJ1apUD29jmxsKZQeNwDdV5YBXECrvJBow5jj5x2LGiyuMP5uzhcgcp93GRgitipx2aTRW89h5mEvUYgNQNRa1N",
  "key14": "5hMyZaB1fmtLhncLD7iPxB2iZWT7ULAnZfGtMhNSyRP7v9t8z91etnxLKVgagYrB9zonNxRdKqbhKJBbck62fzoC",
  "key15": "23VDGDuGJR5PaocWzFEQpVp1L5dF4coc6YYH3RME7FeadJ6ann3chKjWQuxX7LWK9nfxGLTkyDt9oYAwE92XdPDz",
  "key16": "2E2nkGQvXLYEeoWcPfFDNd5TZ32ztqTKr79MrdVheKpeznjfHeRgkYXNcTDNr77Spaj4isUnGUhFXn97iSaRDfPB",
  "key17": "2yD4HARZXGq21ZoLLF34Hxbb5cjEoMb5Gg8FeaJG7vVj2hWX6quWMuuhPF3aKdRMS9MNxA8mJT6JxE6SrFdNgKJQ",
  "key18": "3XAiQ44b5mUKx4LQvdnc8sN1YAoAVaKH3761eQEYizzV17Rjp4vnpN9jrWo7pXzfQz2mioAQknTmMBcVgD3fxfy2",
  "key19": "4HPcRtg7KtsWXuJs7UmJHVqTQtwTQMFiyz7C4B2hs5iwk3Dfc83ZDN5p9MpcEYMCLwDJvBXEY9F22hSKYER2RrK7",
  "key20": "4cXZSuMZnCFZXfGNyCZGPiwhdoYqKYB6kbC2v2GdnxUd8GrDMgBGVcSC3WyAUtEeJM5vfW2hPdExb6zZtzKVaWcy",
  "key21": "2Brzydbeo8LtpBSikDRGkDin9iofQt2Pc8jCkbZ6tMzpnMpgRjiMQQttQY7uY5GcnivqTdecqY7xhaEysEKqjeRV",
  "key22": "nhx2FZn8Kd9MS2FUypycYWfsbazQpef2pPrC4kxQfWuc2QtM7rwrQPfxyrSPidDjiqK2CSUf8hPb5zLzivTn9uc",
  "key23": "51kgEm128fetAWqaRtvkrLstTf4GuCFJPzzCG3EE5frwN3PrUzGjWnLTJZbtpGKdcmqvM7hGHdYhsD7BAAiKFJSk",
  "key24": "5MRycPVHFMJL1S5BqSeRXvmKLur7KKF1wHwqs9cLBbE8QzYzZjW29NjnKur8xusfE14oVyuNjRk4U6Yng731tJHD",
  "key25": "48e8ymzr5rZhfoebo1WZEHB9DEC13SYDfuFz6qwzSEwtMQoNimLEUpnrLMM46cZzwMffa7FNtWr9WXdNWXN3ghbB",
  "key26": "2rN5yes7E7GaEaKLFMZ76PdcEbQoCwvCcaiZDW5a8861Hk9Didka5UZeDR7bSzfivaxP8FeRPXxQBjUTwPsF1JBb",
  "key27": "5G22H1nFThaBmrYxGKBAC6RvoirvkCAcBqz8wa77euzzXLTx9i8aZarqh4dDnN8jGcqC3T2UrXctM9QxAwtMmG4k",
  "key28": "4hZB2Xb8KVhR5MUCa5jgpbEcXRyPArNgXr7icpk4dHegG4XaUWCZyZwAhkNZZR1eBYgB2eBBYr4t9XVSX1FbUzi9",
  "key29": "3nqvxponsbZLacwHCkWHrPe7Hh1L21Msw97AQyEradkPKn5VCwU9MVbdkxaxibPJVkJ7HUNBY8zvRKynd7oWy6A",
  "key30": "2s47hFbxWWLQHyYQHQajjX78BXmUmH8MtxgsbfeDCbcn1MSisDoeW7NTN83moaSwxui9HvAKEK2Np8BUVuVTQ3hK",
  "key31": "44noFM9jUgRpnw2kf5Y9Miiw45XouvRJMS9bxJoXH26dbBikByDfiGhK4bhfs8YJp8w5EfwjXAxVPc81GoR5XCxk",
  "key32": "4ym2to8gNTE6mbAtiogu9Eq13LkgbkF8VeNbajV8CSiCVR2gkKRW8Gtgmgc1Nj9ch7J1z65Cx2b7RJZ4pmTFQqUK",
  "key33": "BRp4BvQKWrGNtA2WAQRDaMboLHekB7H4AErbNwCWeumjkDtfFN7yvk6g943JWn9NXDqp8mCJTNVHgmPmSikrDbe",
  "key34": "3hR72PrCQzrPA7YQJsWfqxGYMii3jM4LFkRPEzd1CZ6s5RG2hDoRRComq9YwjiH6Yh4mKQx6oX5M6YsS9ML1bVXe",
  "key35": "2VkKMwfUAP5dCTbo5bJcXHZZRLZNLqwBPdCp5VsUtRegtxHDRoh1tWfkHndy82R7LDrjTwBCcuBWF5tKyinr5o96",
  "key36": "5jzjr7vX6DKo5bpSBDqexVF7XRqbFnawP85EFwKHiuK7LX9T1xVRjoX5SN6xPW7EWZhX4KWLZmZhYCmu3tUEymGS",
  "key37": "5RDGE1VQmgGsifvgVRQQYL4njFpZtsG6rWBMyWnEPv48mywK1KowFZfNd49xRXSPQj132DyHqAupGFmZdPNPDoLv",
  "key38": "bTwJZ6KSobei943819TRNvPz1qPZ7r5C1zwvr4ttQjyk3R7AKSqHVtPXY3ZrygjgtNATHzTcxmCMpeHnAYFhRq4",
  "key39": "4kMWkDF3PMcjRDU397BY2V9sLXCEPJA4AniTvVKNzdjYAd9YjnjyGtQymC1b2dTGLszp39Y3NaxTwbkiSGuHFfxm",
  "key40": "2NXwpQzGF9qWC575t4uZA31TtMdY8Zi4urdraVZYYqRR8KGXDVHY1MS7Mxpx3NVGUHttqiqLhVXcssmntCZTvu4w",
  "key41": "3YG5t2ZB75gixD1Dh4crDsMT3is9MTPHjwCe8AAaQSy4nRM8hgHVDQbyVvR4jmWdeHFm4t2wY196dkETprHHbQxf",
  "key42": "4xPs3gTYoHTCQSkhBtbktX7xpiinaudsv1fXmRYKYqZdzvhDSMfsBJQDnGryFgjQLKzNfVAZHmLtfihJRsivDukz",
  "key43": "4ca9nMq9Y2CAxxqAzkvGUXcA7T2YtFs98nLesdTVfyusRuX22CJH6Tg1mrNveQKzmEEFWGPVgBtrJQzRLeEuFdG2",
  "key44": "2o1Y29Zrewidxd1Pzcy9vMitNtM137r161xsKe59PPwpNnfern6GMqTH48p63ct5NpF6N9sk3edyL5xf4T8EamEJ",
  "key45": "55vyar8ZMi4joQ311WJGZjLdTWnJAAwavAanyeFVQGd7CnB91E2xqfEcCAVYMfSKyN2ynRRziFUY5e6ES9uN9Pnm",
  "key46": "ySdnkkgNgp3qGXZxduJZrM1KekZXX9LtVnKifR94XYKFXYoXEm3taNMiFpcZrYD5eREy3Re1YBr4n1Et7KQQDrB",
  "key47": "2cJYDUb8dzwLfxjtv8kn9agaNMxma6w5TNCqiW4KPbssGso9gd6EAZUEiuNtxqh9GZu6ciw6jE5j3R9JAZgJeFLU",
  "key48": "5TJpysuE3bVafXKJkp1kZQP45QduQStk2nz35hq3bKYQBZ1fUZmmRTfQA1tGyXLATqhizsuTUfLKbuAZcFFbC7mG"
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
