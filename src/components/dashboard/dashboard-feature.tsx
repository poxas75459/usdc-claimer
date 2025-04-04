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
    "3ZvyjYd4oHK96kwJ7ttVbFLBkGhHEvf7k4XuABpD1K5fzTQFFDBHiv3gGRkseXtgjKecJsziovaFSpS31u53Fq7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pYcWyjRtWbdgAU6D9ZB7tZ4U3SdqsLLfehtv6YRtj1enypEXswqcQebMRGicquSzoqMQSoyMbWmjqzUMVD2t1nG",
  "key1": "3EbCw3MUtBpYkQCo2iQDk4usTST32TfcjWxkHZbYXko617YseMJ6wJeS23CLTyG2FSNsNB9tcHcyqWFKmnW7gRMw",
  "key2": "66PutnrVfd3hYEaVcmY54hNXjCTMoTXbbGS7KgFUk8rE5ewdApiuGVAUYpzvGq53MMnsFUhDMmj2uRDDBZomCnbF",
  "key3": "j8HHQPpmTYvbCy3hhi7Sgh8R2YpTksh8dv4AbppppKJtxcX7XQKvXPT9u5xd3MYxvDksrtVtHkhvLLt78ugNSXm",
  "key4": "45CfwLJ98hMagQJpTcHxVNkdfVVD2CmRa5gEAJ6S8KfqwYQBP22Wn29HVgraSeNMH3LkmujnwExn9PPmquWLP1jE",
  "key5": "42SvnbeRX89634yeu6623HeakYELYF8p3ortDcjJ5JY1PPKMvhQzX1YEzpDoNxroJZwHBP2sN26uuPDYB9h6LBfk",
  "key6": "5wqr48im3Bv3rJv9sgMTc2XGMajchYMsMvNQHu1wVhhSHHq7BNM3ir3xSuAEZk8u8h7vp7hDqQA6MMv5DjDn35q7",
  "key7": "jWwdZ3wH69oVQ6Cok64Y9AjnviUThnCDF9vMPw4tnPc2DRmgF6CsyAp83vGBfxD3g91tvto8kB51WAerhcTVxWz",
  "key8": "2NCoqxU4VRa4cKb1ZBaYra8aLF3KXcbV9W2CBH7zSwseEr6nU9K3fS5SazFEsqThJqC47WqtwRtokMGrBQxaogrP",
  "key9": "2QH8fbrJ6qqXmMorvDMLyp5C7sbR3CMZzVMec3f2zHvtJXiRe2gZWK28GMUZdz3ZswhF7VFK5x6M4PTUW5fGm2Z3",
  "key10": "3takTZDSQREo4XSr2bwufULcthjk278V9JSABHrtbr5FUaxFgc3FQMzYgXcqrb9vH6Bg4U24RHYwVVv9vQ5aPAx2",
  "key11": "3UnqJg9gPEGMqyRoiBqUeSnfMSNQ6EaFe3NYbwPYDs2HyGbEP4cRr7Jdu1mUNvfPza5sJJ77SdwQ1kytkvq4GAsN",
  "key12": "4RqkiZohCFEc3eRJZAD8CWNaxvSQThoFtJkmAAfFwCuVVRgVzoPVwgnAEffeJqHtbVbaHX2KXQ9nFRKPj9PKHGBU",
  "key13": "2k55YR7ME4XvYERGqot2eQVWNb4hfGvPebHUjtS6A7FQmrBPKGakgzWECLaaLZhuj9QASaUicXSo9nGN3FWHM8hM",
  "key14": "3hBryQcbpffR4rVPPBZZkGnhG7mRWUn3z3rxHNFmFbw4cT9vosifMhQft3JKNoJqn6akWVpzoJRfk6FWqgJdVHng",
  "key15": "4RFPj63eVfq76PwHKcxAHSvpBYkgGyft4NcCzbU6Bninq22DSX9RVbLQ4VS4nmzBBz16nXgGqePfPUXij3ag3fW1",
  "key16": "iyacPqLFBSParkH7WM2d2rZVtqj1bYY1feYd5qpLwkD9ebzUnp2GKUowgsLYHM7AXaC9xF5R1wnn343J43GMLot",
  "key17": "ZjPdDKoEi3tykFTkZxxUsa2RA9ZuXD12fHTeZ1QFFsaTyJbzxJu2izieoG55YukTKGGK37KgGFDgjAuJNJkduD7",
  "key18": "5mypA2duzcoFiL9ZQNta74Uhm37Zveoefmcwa1c8G2mDNacztusLJUPiJzHkA3C77UNro6v5x3Jj1B85W11pifZk",
  "key19": "2XVpLe7HnR5a3YYAW6iUVspFKf7KU3zdeYWCJmZGxfByNkLbj5oEHsac9hdAHMUjotgVWS4bzsj74VMGYFU9EePH",
  "key20": "RfkfmN11zSp1fuVfWo7AJj5uCVrqRwxsqaH3mAqqVvQxiCZqZscbKyrnsaBDn9f2yJxEG6JyfAzW9JBToWXvCpw",
  "key21": "3MiGL1NENk9V7xmNudtdnV5AsHFGWQmaXLbCNt9v5ASGhmmsDFxyVKQwRC6tToUURjZ7mpKXuFAW9VTEcugJTiiF",
  "key22": "5LWcSJUY96Vyy1wZroBvr96dVzTfFhu977ReMwYG9TP37QroJ1YBxnkgTFPDFaET3czDqxBcAADLT8zfZoobVbkK",
  "key23": "6fWr5ZSC8pj96Fg5QDeZtsA5PRyDdUEYhd7LFr6Z46vcNpVXejUGhWdpGddmuwQwm9Ac2KBDqqQDaZM4Z8g7Yc9",
  "key24": "57fvdciqFTAigNbSALYLE7fRf3wpBUuxXAx7waozscod7Ruqf6YXLHR8KqD5cDPwhhWdUmTm5xtAUjhzJ5f8agZ3",
  "key25": "5Wi659qRgMLr5Mz1JGm3ec6RKbYv2gNxK6EhpWZWWEx2576XWHqXMVzERpEN7kRZHERBvf8Bj8jnMxCgnCzowfuE",
  "key26": "4MTC3ir9nKbP71niTy1hR8Y5VnCdFHrBhFikEFbMNiMHAqCtHhrGNv6ipcX94niKKfQ2m392s84aYK8XdizrTPQd",
  "key27": "5tHsMttYcfEDhRtvpzrYXVh3GqsMRNWMXVEUHymjqCqHQW1dxzDWhBRSsfQGyAf4ux6PT3Va6fuQw5YVxknkteE4",
  "key28": "KVZSdCasRFhFamsD8kh11R2UeskaKmHhyyBzBQJuniVP55T8YZhrNCgwbP1UigSnyYUCCT3ynjYTR2rrgcsyFzd",
  "key29": "onnHCwEHfbAVxb8DPkXasSnKPyANsupGkeJTMrGpu9zNMnHeHsAj1xkUuL5ky6KwoWQoua6XZUSaV4AiG1KSP7i",
  "key30": "52NwL9oyQQZWcPg6iAhc6EWNxHHFqP5Nbp3VFAGt3gbk1Cm5vj8hkbU4EDBeNNf6TnbvJkEqC4X8SuyK9otobaaX",
  "key31": "42MQB4KcZkC8hWnvAYVmfaKcEetXXYpQRg5iHMkdL5KysGSW5vXGL4NtjRcW6dNah68JT1RHmmYWSyfnq6HKswmK",
  "key32": "R6hBvhintYpC6yxh7PxYeEZcr5PiaSYdp2ZMLVTQuRGCCW7JAEUmRbQo6T18LdCfKczcKgAZ3813X6YhrWAjVR2",
  "key33": "4mTrkKeSKje42fQs573fSrZTCyywQfGREytzjZoWLmEdVUNNGwvfbU7pBZapPhu8V3BC29iHCUgXX9ST83V9EcCi",
  "key34": "583fowG1K1a1uE4fNqWTCXLW6UPzaczaHCbtE6185aL1juJEWAz2E3UNCbj5tAZWFL9UvDbmZgnfuEFKmae1pyKR",
  "key35": "2PaApKRdUJL9JgScaZCi8apUmRPYbfzrEVe1S1cYpGnKMYJVase2HQjXmzGGEqJPAKcDgbmAsSZjP8Bgjz18Zmqc",
  "key36": "3cdicZE9eU4Su73Q6hYFJzjjDp2SeZg6vB7ABCZgfNXDfjG1t6ExTxGA1CxjbjnXANrHLH72d1RBoV59AhCdToHV",
  "key37": "2kSBfHbjyt9hksfYbvFaJyVqptHambveZ9ot8Z4VrPY8iVvUxhV4Yh3gocQfb1FT4MRNL1SGQAe7iHfQWPT5Rjev",
  "key38": "2cvKiKQie61TnyNhRSHggV8QqRSda792KyVxZkLgYq5N4p7Kk6LdpR2vWBFLNgvSEfrrQ6K4JAjSvFoCFxxoHPfe",
  "key39": "3eeLMhUr4xnwX5hcUta8B1GYSigGpox4KfaxBb9wiREcBa6K28T46iUVQCqPprmPQme9nCA7TpiSrVhJYPMYvNWX",
  "key40": "5BVupYA2pwpN5eNd3WjqPmMbevxDEiKBR1hp8t9LAiFYSV4n73aPR9HSPjTPcNZf3MvnyJSxsQZJPy5tg2QiHCWV",
  "key41": "3F2ztbktUB9jQ5coEWweNQrCLgwunLSmg3z1LRH2dhDbZbeV7XNDxpVLnLauo7nAGHEL646trPfNQRQrZBXaKMmi",
  "key42": "5FKC71NvYuXQ9MLn16B9pT6aJFoG34boT7YAwS2J71ehGNUgHGu6jNiWjFvDxEQejwQHKEkxksWp5TKjWQBp4kcH",
  "key43": "2UhwDAer3ueZX8oT9DwGtkiiLcQE8hrE6MXceD9scTBL2UwfiSUQrzfe7nrhRzkf4Dx8uRtdTvSZF9eYfdosvmwm",
  "key44": "7rbQZBbCY7baYDLqWtP5hVcxdHkMGSxkgzZizGAyVtQagERU6D3zt4t7Xp1KAtmYuaNN7MWqYTed2LeCSfkyKQL",
  "key45": "4GgiHTPxoC2KC6h75Q8oA97ePQnviTvCDHGZ7yEgVNEaVYo3PL8nUpQHVHtdfAcTSMxZwcZsx7bDn7rPRyWnNgia",
  "key46": "2s8Nka7KykvPSJXfcLMpbWVcrJLpKxGxCGhxmMQqQctWzoDWHCgerWANy6Xddvd9MAZECfq2cDyiYsNebXzqAiBz"
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
