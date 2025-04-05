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
    "4rJLjgopoaA3E2DV77a6s6UNcVyM32b4Zv4jACsMYFR5VqiK7pmzjoxZiP7Q6YdLc7VusGMMfVZjbFCWvViaKJyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VEVBGoCSGcVYddaZE1V5MsPViHS4SvXNvnJmySFaT3koXVcnLzM8dQ7ev87948kBrmEC4YEuugREGzPMZD4kizT",
  "key1": "49vLP2S4EnvMX1RhhRUAzor3BjFj5evuBMuQxLz7U41btnRCtJuACmDyRvo9uLSAbBNtpRyWiKVzDdBALADawvvj",
  "key2": "3w54mLAedw7VGYs7a2ZZwAiEPbgT6jvhZKM5Akm5wggGAWxChFQyNqSwpTNAD1oWbKj1KgrgbsttmngDHKoh3GCE",
  "key3": "3cHkaTbqBeri1y6HVBgVX2rfE5yxKKBeijFnD3VnUshLhWcV2jiWeNJCcCPpLJxJyi51H5L52Ljr5Aj6c3rXy5Ag",
  "key4": "41MYsb6sLRo9J2FzHy2wiV88PFSGZzKv2bEgQAQ5nvCbw7BJogNjCuM324sgGop35oS6dzEPyF25dTWQHZNcg1eJ",
  "key5": "2xs9WeJh34ioi6xX32ERz74AquDLDFX6tsP6SBwmtYuevRAeBJd9PhdKvamwcAN8WgN4jKPeTtEYD4djveHDzFkc",
  "key6": "saSb6P8m8Yz21dcZSHrrimobN7xCbkig4pzSr1CneSddKpfiQEFnuSkV8hhV7VHHJYfzLaKMiVyF84jqFogrQQn",
  "key7": "4zmtbWCfAh6FPXtf58mynMEu2VZNiemLSiBJPNsThZMW4twiJykCgW11oFHMcMYw1Q5PGXqg6a5cymGf3b4X8kgk",
  "key8": "8U6asRxD5JevH3enHr1fMN5xfMBavEXF3A2jHcguhpAqV2bo5Aexkj9fdUg2sH1St9yYWM3eysWLtFUnDqUDQ6H",
  "key9": "2KtancMFjZjBfivX3KPkh6nJiLEGiJyNdVxfxs3wuyPGUWBRshb5XMY6q1hfdfijGLQ9JereD2TonTU8NKqr6yQo",
  "key10": "3hrnh2S4ggYiR7xsA8fHi6eVGNmyCVvWygpdGaWRZTxipZRGmN3oRpbwsDFPLVbTCCMZhskTtAohASnp5aen79do",
  "key11": "5gvsnP2eAbDhGRNdVi2nFV5DkdsdJNKgGmQW5ipfKmEVSdTrYgUfgw7Yoixa8gXw1GVz5DYUJ5U9vNue9e8VBaJc",
  "key12": "u7FTa24X3fsTYgw2WwpC7P3GrweiBdcJ4w3Le7tSScacYtggMzpsJ5ryQ9WGNSAzQrRddQzZEJx1K1iMdTVNkLq",
  "key13": "QGVVDxavrAENZwyGesPxmb32HTasWQkMLft5Jph5XkHEVsWQoqHi7gxwxsMb1rpd6PbRDjDcftAUxybnU864YPJ",
  "key14": "3FHViQQs4VK72n4GZgUvLrQzfKXphRfZmdz3LYSjAx1mKSCLtvhxi8vxFASFo4EjyYzVWtbv3wEdU8LMk7ZMD5gP",
  "key15": "447xrDGcsg6bAN2ztLzTgGgzVZSr1xbbfwYjNAikWtRwj5EXuYRo9uor9Sm2D6gcgEhVLitvMFWjQ3bWnymVBmbK",
  "key16": "FG57gUTUvhuYtzJc4sCY4WhT33CxFwfgsfUtky2dCWEiMSjVDn1MG3cBAy8HPxJ3xn1HfhNgQ6PovUMtd4mxpzN",
  "key17": "2CWTjPn6qr3ruyYPnCedHAm2d14hgHHkTaNfMk9am4wL7TcNAkK8bC8FCLsGT9SL5N28XHHpq6PHVN9SAQ22dEU8",
  "key18": "5WbTQZdmh1kNgMSUgBqDTRQ8XPUsRDVQ1Hc2mYMFzSXL46DQbGWHRUdsxdm3LEER6r5mNXTbvoyEgx8E9medbtUv",
  "key19": "3mXpkGwHfeanssqf8w4s1HFGnP8YETtHdyKW1fZduxKWKVPWWPsE6AeovFZLnvjqN5cCL8YbY4buojqFWQKnfUCn",
  "key20": "3FxAzTJF4xthKKNfafa9PgBCdzTdWd7WxVPxQsrfc9tnWCR3z8kijVaHrvsa8ba8A5BASQebisiJEyiWtoraNWVy",
  "key21": "5MGyadZRvCu7TaAV3Erj7gQoCsdRnAK7fExDoxPhRh3TR7jdU3xVRpR8uTnLgxMXgcxinnTQXhFsnKVbUwtNbhrn",
  "key22": "2iUDhct71vnoajGMpv2CUrfHgsxLPsm9YG9p65azy5ud6e1xb3BmE1zgc96Pixqudb9Jdx2DBfyaopn6bgkJ8vSV",
  "key23": "2ur5txRmarLhZ6jBp4HAvwBsBvKaWPD6BSnZAKGTphbdNPPDx7Sk1stDddaCD8ZUq6jGC6stfp3VRVytb7tB3pYo",
  "key24": "4HvZjXFZX79Nxjs9FKRnzkkWkVZx8HYD8ZEPe8NEz4avJ7zieMkf94ocyzXkbFCe7gTs5us6QcQkqdP9ZdTDhADp",
  "key25": "3kdxrioTwwMTAiDHYYYgjrtFtSyQavaA5aCr7rMSYwMzB66pXPCdLdkU1VWpseTVjSaTGdFpsConqaj4mdvGJBiQ",
  "key26": "aegmfHXcoF2FsNcUDuQ9zyxCtu1LkgchcJL9qfSqaGwSnEKVFTercrX2QxJGTJfpxp5sPJFBhsVGCQfNWpfVjqM",
  "key27": "49vQDN2AYE2BSPfX7wZ1cdr8wnsYKPUF112SAiuwZEXrbDdL4zYkQxsDjKW7tiX62adPEKiktrjope3wJgDBiA7S",
  "key28": "nCVfb6SsmVf54omKDY1XSJ8CsW9zP9zXLkVT8bLiTM8GLDgLp8n862RUxmRexw7Dg48sj6rRVwLtPYSFXZTg8xK",
  "key29": "5gxtonxsdw1aWnKHDfvKhsHV9zW76RR9248XiT7XDFcXhSnVkRrx7RMdVrynKGsn4mjSUERxY62n66wnawzzofjT",
  "key30": "4PUTQ2bsnEbc6JJP3U1CArfyJbVzKs2CVNf4BxumfT4hEYF9vaUqmrL7RPMMtDRyiu9dZdboDWRskejpcqPrYwSa",
  "key31": "3tBLtoUo6GwCSHM32nLNFyu5PA9XYDgBPPrKwFdREUs9HBjz73z7awEp6ndontGNHorH3KLB7NeE9aLj6hBRn9vH",
  "key32": "43cF1NHbATFjzK9m1Rc37NYmZBNPeDkRPkjEkdMXaEmfj2ManaufPFxapL6eo9XV1xN9KbaMrPDSsBFU55eFdGMT",
  "key33": "2jQtYQLuJVrGYjvuZ43d2uyuBHypvoxbmba7xpCBumkBxvSFAJ4wRd2bdArXK7f4gmQtVZmp9rqWfm7fzBcRt9vy",
  "key34": "2zYLYDTxpSCq3VUzJPEckXhCMMiQC21NTQo7Jch2PcR1QMTzQBx6vF9XmN9enfRuTVKLJjZxoY6GBcb4UhMkAsJL",
  "key35": "3wx2vveGzwXCVgouZX3quvcjrPap9gy3mLMfuCSuafGAAqHGSkDgAMN7YYYPJi9pFvbrzbuFk1M4ZPMwtAYsJhKw",
  "key36": "2SitPeFKjhDwYBKMd8XAybBWumPVM56WNJWtBaqVdwTz3XuDKdzVxaRVsRJYQ77V3CW9YPhF8oKqDav5k7tqRaZJ",
  "key37": "NTxZRVZhn3yqERG4zwNg6nvVH2CCKcMQJzw34uaYg9zapUvWWAsSrRDLxpVVm3LNEQHzmbVcPCSB86k3WZCEfKz",
  "key38": "3i9bKx14avygwVWqf5jDVhTRNHLYRqVuH3QqQg5cYFYMFHYdcrq78VBgo4iajA5E2NfTsE6iWU1i7ctxQ1nM9wur",
  "key39": "5bZYjhg1bYWMAYPFyvN3RdKq8rw6bPxXADnTQyWM91GsxZeYedYbf57J5z5XF7EUXHCTMccFifQ6Aoe6D9VAaJJB"
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
