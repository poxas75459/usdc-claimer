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
    "hbehcwngKdCh9Yax27PySXp8wNprmwCnLiTED84YPyA37gVLJVf6axBYUCD5S9LgK5MVbR5FRLs55swxZyttrEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nWyK1bVjJoVxdVnrpbei7Etd8DoREBr5Sfq9R22i4JjigCy2ZUJwjgjJ82vxFwzgeT161XanTGWdKD1pdYS4S7d",
  "key1": "5cU2A6VBeAciQqfrruqTrfaYo7h9fa1eHhZYkmKZRrNsiUxRstkJHaksX3AYYDyNFVQixU1ZN1YgsQoxADMAvSBi",
  "key2": "3BCscTRD9gfq8SALZM2L3nKc4JkkMAvNCtYpU26XUCWb8JcxPNkzfAnBHCXupVyjK3HcGFQb5myJPiXqCUcZAuXJ",
  "key3": "4Wc5aZ5XeVwWjTwcmLBNvDGsauaxyMyYN22pkjGZuWrntdqYQfKuF5XjiTBWwTtsgVgi9SbDfEBmxeQFjbpJR3CJ",
  "key4": "5kS2N5vKWaVq4R6NV82Ja6rj7PEHziMHfGWRT7QyPerV6wEsT1NgczGNquXSyfoerY8iPrriddJFuahXxCZaS119",
  "key5": "3yjtpEYFHB4CtxLAcco35RXqwbfi82aRgdDAUnjmQWBDc2Ua9A3oB7CyqWDjwywubzx3g4GRHVBcJmTagsyvS7nc",
  "key6": "2rz8JBDrbNi5RqmrcTv9VaAe6Xt6FJfNwzB8V8EYDSz6PKaG1KP29YaLYnCG5pNHN5XeRmph6vZouPxWxCfDMVUM",
  "key7": "2TpWuh8htMNJVm3eGxFv7Esqax2G8jETS9S7cBKAPQ1N9CZBHeR2eAabJkGGSdAFnHvGriEBEFHZCjtxdV5sk9u7",
  "key8": "sY6XLho6oSnqcALFpnLuCA6CGdPxQAUR4HVtpti1vpy6T5QJtm8wFEVPYe9DxX2MCTUv9cc49ALDN3VE6GHzPfC",
  "key9": "4wFRPRckvTGAstgCRV4JTrAw3kQbUFBeqvRyyAcaihzHs62UEDfpgwWUSXFKfmaC52C95Y1mFnHBmFEXJL85C9xe",
  "key10": "9VRTbS3qMRXfboNMtWFsXv9KsvDaANSsbJmr6VLmP63YJHe6ugqT38AVEanL3cbGE9oGU2WY8aLxmWfaFdwt1v4",
  "key11": "4coPj2wpaUBWRAPWnBDh2Qmzh1rmHEKunvQFjqnztkvi78MwqFQeypJ6TmJfsHo2jJC6pL7XdLdfDVgE8Z9RcsYT",
  "key12": "2cVUa5A6ECbVVdRa8JHHpyXLGgbMgLeswvcf1gs5rxQsw2VKQrwo7Ef7aNahvJ6b2UdqvDrKs6Ckkse4dfLaJGzu",
  "key13": "28Zwy9jEDPFn6HgFCy8Leo6yig3qbLsdNnkD3nGS4f9Z8VuGBf6EBsVz5RvQF1itbUbQanSFPPPusVXoydcv8edB",
  "key14": "4Tg1zUNuEKqgjx2XVz2vnjhxy4i4gSvFMj8SxkGf7kwMX8VAhhQRgoAi7pRAXU2LwL9KkoeCVwyb8KmfAcYT7jQT",
  "key15": "3Re6Wg9x9XtqvpxpttZvAGhgSpG9PuVSq9M5j3mGFPcxSRPWT8CmjSiNhqdfC3yhQAZPP21DgNbHRwYTgifNAMvt",
  "key16": "41RBMZz4eb9DSjwE8dK8FFeNDoyuro6nZysPRviwZQRhwXpjT2bk1eFo6Gvqqff1RvUtTNMy3PpVa7BdZSdszH7N",
  "key17": "5zYZBC4y5EHKns8hGyfez5yMDk4MrAFZm8FWpLoTENyoGSUTYk1GF6NsbqUQyZ6T7kw3Cm6vjJMi9jNN4vmBFLXt",
  "key18": "36SYvNbAjz94eftUvixpRMUr1ycey3nHhZBG11chn4fkTxTXrLU7tPPVbRwj23HFoc2mj4hRSgJHpUs1oBxkrWzF",
  "key19": "4QWcrMKgncr9VaifyqHH8xok4LsAXtNDoRTrZJwrbqsymsTdhaTdzJKNgfU84ZEcqXTAdWVQWojw4cBD6SmKNTst",
  "key20": "4LDCVaZFNuZ7CWcm15bsWTPBsxmGoZukLK1PpeW3FDxmoV3dqgWJ4V4f1amb9kWv9rFd5VTatHpXStGEmHD6nj39",
  "key21": "3SeP9xRS8aDqg7UHYRqfVtVDezY5foHGmnCfRQXXpXnusUePPty8VZfhomrwxbgvzdHfTuuSmJ3E2tAFxKCWemW5",
  "key22": "2jxvHaxnw3xgwC3xfXSLre3bFGsNz8g4raXr6bWXgUqKNC1eaJWqndypTxxGSLFVpenWBVWe6GG7x3GoJaBpviJF",
  "key23": "3UiZbDc9gxmmDUJYs6QiUeTuAsmyuzNnafo63KVEmfqpxpEz2L9DHfPaTfiLfBpb8bCdF9CYdM8q4yjKPcMr49wk",
  "key24": "2kvG5ouCVBRcXQDxWnpTwMhC8Mc9zdoZUt7BXb6tRbG9nvjsMe68ggiaLaRFk5gDkpWJEvd5cu5CYN7wTywiWvTc",
  "key25": "5uzFjLbp9gAvLS4Vcp1D73sk8seZ2aBsZGCkCaksFnaroKK3ALvYAfgESevZyUkt1RDK4LxSTSKKfipYNZbcrDp",
  "key26": "HCL2DQtXK1ruTCxFj5EUCJKozmLotn4YJWBDVHA25pHA33SkD9H8n7ayPJVe7xwZahF9LxSNEATmk8hGPmY6rxh",
  "key27": "w551zB6maLzEyMcJJjWpUJyc2DcmT5iyjKCjaXuWkumPheqUy3s1BhLWPF1tqgEgipBwC6wWV4v6TXYuJD2dJsb",
  "key28": "3HFoTY6C8UB1R5pLkPZCcmzcrgqNarXStpz6tCLH3bT9E3mzeKG8SJtu4YW3Kp5BbpC7n2sc64GALZA1nfNV88RP",
  "key29": "4Tu1PvREf4Eu74ambUtxXimey7KMgANWoJyhgQQr6D9qHvGzrYWZ9DizzCbCfF7iQhz9fi9Ce1GZmL9ppSoyzf1G",
  "key30": "e6dKJPBZ41JgS1S6Ydtv6Cvfb49zznD4g38Qf72WZ7qRuUn3RRq5MsKHeBcUocjMpQwRfCLwKp83QdX4gTwQMu5",
  "key31": "5ZcmW1cpcBpTvwhHdCJaHJoTTBtcTjgh6HY1ZmggEo2DsBonpp3jyk8rfB4SxvXxHLxAFiWyXGpVkw2CAM7hRyF8",
  "key32": "61hQXupRqxYLaGjXRVYoSMKZ4Gs7iS2ZdD9T7UUf9m8DjxP44KFwhoJ8aLcJaH1NUxqsHvMow1bfbTfW9AMW2Bgz",
  "key33": "2YmJJcp8EgRf8VQJVJjWuY1myDnLkg4pqLh8DppsdxD94G4YFdT3rdaDFwxcJdnzSpdPDjV5i2k7DjYRESzts2sw",
  "key34": "2m9xKrhGnTuBT54q2XeV5zzJfvNfbnHEErN23wQZmRq1nr5PJof1vSxBwnVVDbS8EgXe5PDrqvikwjrgMdSTqyNa",
  "key35": "2TjFjqedexcVEy2jh3osUvdHjB6YYzRGxjNerQseBWKk2Y7H6FiChCdZBZXxVorazPfGRZXLHjB38ytzphEaUu1h",
  "key36": "2vbtNUTMXjfSb3jLLppRLVgSbBjibnjLiKtvxE2Ece7sb2cEyBPrgPnGdhc4SuBUNh3BnHuxwLFXobxVPVTf1SgK",
  "key37": "26C18U3Zhti4HGHYvBiyPgiBaQU9KitoaGMk1gVyXwq7WFMDj1sRZpBDaKdHDQSyomCDaviTQmtYXFZ7wy8Qp5TX",
  "key38": "62NPDeaMsa8LpREiSGSLaC78qmv9grC6BPoCDYmAqx5py15ske1NXuWg7c4x1vKteoR5a54UYwmc7dgRsrLWfCCV",
  "key39": "4uwbc7avvfjipNjHagxkz9p4JzfN7hTQzsuJ9HX6h1gdU6aMs52XBWrXxvr42QMLc2E3seo3GTxGqda4f4Uc8ACo",
  "key40": "2i7SSdZ2ZadaNxoo8hyoKDgQpXePya1vY1uhYF6GdThsk4n3ewMptDzFsRSLiYohUVVGw9oMwmCyiyHK6XLoVNEd",
  "key41": "2A72FymF49ww5nNiXqXvKTXdqkrpDyEWqfesSHb4nXZLWK54aMRhdGWZKUEv5RvBquzeew7QU1EHKvJaKCCry4fs",
  "key42": "2zsmpQLodjWYiTexgS4G6fzPJQW5fxHKZ67aD6NDzkn4dfiU4tPHR3XTUgHyRspLcuesgzeWXkCz7UNvPPu7qKyw",
  "key43": "2drTFmdo2n3LvDfZgTfCUG3pXViNHGGMZRBg1rJZ5EqdYRi9YucpgfRNityM4K73sRugzuEsp4fhtg7JRwsHdF2o"
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
