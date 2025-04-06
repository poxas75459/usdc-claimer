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
    "3un94agNArBLrEJoPpEz5c6H7AonKVo62gPDfYXdY7fYetp2Wy7aYRaHForAfpRz5BPSHuETAVDKReA1PZzAdm7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y8ZgPRLArrDfA4ZzJbBrTNJ94Mygvt2aUvAKAgVaf6DgvAS9xfjYLUZKKcNLJFrmCzpHmET3rqdpgNQ4dN3b1Lb",
  "key1": "42JGhpswRo1gCG6j6VQcov6KkPwsGSsEBGPXJe8Xnn1GucwEJsUkBr1qy4PMwxYNbNuotvZ1DXxceksttujZk39g",
  "key2": "2Vx3C2TX4mHV56TQD5bg3AurQh9siP2WQ82xfTTja7oA32NtcRP7dtLycCpxAMjd4ar2UH6qHZwQjpcMrfMBeP7q",
  "key3": "65GqQ49sYxEPT3hqbyxXFBNdH6A6kAeCbAooahKcgC6rBCv1vw31U9fhLYLD3G5VEYRVhYMkyqy9wRHeeTBrpvHG",
  "key4": "4FXBxvgNHnEMUfxTzfx1gFmCi6Ek2o4tE6zsja8VrpcGfFvMapWqXptw1znSSn1Wkb19DxYukCifpiziSptLiPJs",
  "key5": "iVmBK6tgHTJCJdo3x71r82Ywo5HZ9teTpocoqPeD67pAsGGHDDpTrbi15fjK1yQsrvnuaBPYhwMMFH4aSqH6ZAP",
  "key6": "24SgKYpHQLuUhtteNhef5Xxo4S9cGJP2Htn74qLkGyqGbckGWFMJuLHtjffv1LagpvkjBHHU1UdZEv62So3AaLTS",
  "key7": "41ZWCpYY75tToGU1c9c3tjgb7nX6iKsTbmnZhuCZSsJHuvLwJabpMiX8isLYiAwfeBNhq1EYtCQdnJCSs1ZZ8oJZ",
  "key8": "3h4LgoY728f95UWQLW6F2YN5toXxmxxDk1PQvwPzRse8gYRgPww4kRv4vfwFYcv5mfqt5xGZAerbfNZjeV6u1Fet",
  "key9": "2w566mJsiUVQv1RossxVea2NE6GLNaw3RfWz6PWuGTCnD8Hvj8U9xSGqtYA5mryu4BzcC4YdZw413hKoPnHTZybx",
  "key10": "5K2oTJu9r3uiRDaR2pj3iQHBRN9c5ArebSaRNzSFmRv5tWhfd5i9eGSYH4e7gtHzvsHwzwgwZkziNYiu4BNpAszD",
  "key11": "5BpFMhFPC8oj7TG7FADbrDpyL8YUXb62PM4XJFGhk3Bx7amcdPGnHJ1L5Rx7A19NzzKerfo84NZoHZ8QCfrkGQBL",
  "key12": "p3DSRnjRkNySTR9GLBPzv6jRV9Bgr2WDwor8d8udA3oXKm951u1tK6rFUzvCSHwqxxt13HLN2NkEaCvEq81EAdv",
  "key13": "Ro3hFMC94iUmhXAeAUkxyRxYyvJwjzJSihv8uNHF4LzYdgCDo3aCE9CdENaEMN8a5PDHNmzCBFQ2913p6aLpjzx",
  "key14": "e3ht4ZPYwHUjKW4ixjhjeG7jmVZJHpd1EMdtAHWK2YAgvxKwHLjQ355f1r77m4rRgxn7paSwEejuhevxhw5jzbS",
  "key15": "4WeXy8KtUY5jgn8hNtGu6TRLibQL9jCf7m3T9tfat2n2zKiVDJCV6sDMjLe2C1VwVkgHzkupupweErZbDHBrABcG",
  "key16": "37umRbmmEcFXBZYi6xPQNZkxqC2XeAEv7GmcU4XxnBjV1HAkXYPFJw14nsChho2KxzEJWkAZ7t539XCzwqXgSW4E",
  "key17": "4UeBzZTPZW9TgENaUhQq5bYjcAQqng6JKDraUgfK3i9pMVUBa53GysaoLPh8u8aruUa46yEMVE1mxACADroA9xAs",
  "key18": "4XkcmxEq84iT6aPkzkqpmdDa1zNSPpAgg3K6FNDt8noQ5STNASjLbJzbvrG9b3WUCswjwEmRwPbDGiaGeGVSpKkc",
  "key19": "3RuLMQDxXHwHdSbP4FEzJ5hVNa89mKj2AeDUUSH3pyzRMidsQDjG8CAqrHbmnGoXArSiLhAGXxbQkW2D9uRqbcSb",
  "key20": "3Ni9JzjGWRCZZzCNkhK9SsssUFxqscs3puWt5W6rfzF9YkgSzoptNptxBxZpGApiNfvEKAVTNiB4PhmodSDsRJAv",
  "key21": "3m1HV3TBDPJevshujCxSyRC36yRMLoj6dnEa3FHMs33xnQQBWs3349BWqChjXVpnfGVr1wL2J6cxPGffCYX4xUhd",
  "key22": "4TyQbCzxSRgwaxUD2v6e1sm9T9wXDPxRT4vrmiKf31cdoPbQTefnTMx1ksJr9pvdy9QGmrrMEXyxztAoGZTk7daR",
  "key23": "V2Eh2cvGHUqDqMdNeyYnfvpVVKn9LgNbCAZ9Jb7Q3UaUr2sdK8t7o4AhjUjZj6maycZTXPEqhG2w5Zxhx5NEM1W",
  "key24": "49daC8uecwc6CcpMiLV2VqgevcbbgfkbKpAzaHpvSgnsukMTgr4WVuN69MNq2w4MDLPVZr2KgRH4BYLFXGo9xUU",
  "key25": "66perVDHwgY58yfaUEA2fRNohqAWfnYYDooVMPo8F97YXepRBgcAuadzByB7wES4eQE6S2ezLqiSQUoGuyEhUWBT",
  "key26": "pgBHHUfg3asqnXW5hWKUuP5XjwWXv3bGJBkNXK3z47SxZUgY5tGtBWPiW1KBRHYSm98hMFnWV6sXaeHDJydmHkQ",
  "key27": "EEbymRCxVZE8UHcQK5aJmk2fQQjF5WmnoiDRcUhBJWrLozp3vmvaewjgjgaG4ZuHsHS1jo3nSfWuF9eCpgfRang",
  "key28": "4TPYDua1RH3BNPTp2eWCbUL4NCWAV12hEG6L7iVi8WsQaMWA7iNd53udSfyTPWYzz71vW5dhQapKNg4rsSxzCLYV",
  "key29": "23dfgaN8j45sb8caikAxwff2TKmqPy733NkXvyFydd8PYpFjc3qr7gdzKwReCTgW2MrAKRv1dvqvA4TLSSM5AHaT",
  "key30": "3tZM41tQ2FsWa7x7q8bdaKvjMgWoLRVJ5SJJPPmUUZyDnBWFS44y9Vg5LdCwRWssiymGYJp8jEYmTxRmH4DpfsPk",
  "key31": "4n6o9DTikE9jPJkB6ukgGYjQQTScGSbhWjyxHm4F37CP5aNziExSLVUDPsUyxkQeW6e1J9CiidiRGhBayqfJ73Am",
  "key32": "Y2v6wjPSziys8fbecyJGwa3xSHBB1rXqFEdRouqiZ6gD3d6pd4Z156hfxYs7oYmZaJNSfjvyDr5DjTn4FFncoam",
  "key33": "61gYp32uWXsKZyT4QyQUYaWJGmTb2at2xwWQe9RRe17SHpVonRGzFYd7Ex4JeQ9vRfDRKg4xNd6mav7G2LEDWur2",
  "key34": "4WcuePPoB6dnkAuqHesT71NERfFadKgskKjoUSA1Joi9K5aWvLvLyKdNDmrdCSSxYCJVEJ3g7TPF9nPbZvSYoCY5",
  "key35": "2CjBMSep9DW74M2ASenZ9wkUwGmQ33stWjuajQQpCFbXrQ9w2gs36gAHWFFU4WjMVx1zLwWcyTUQteS83gbJHZ6P",
  "key36": "3CyBrE6MvQHzoqJEHZvsrjrN7bD2apuW3oTE9ABnyCbUhUySMGiYdTtm43Zout5z7AFtGrhrrhYMFRAjNkoWm48x",
  "key37": "3YHfhhEXeebSXdpLEXXVe8iG4VYzQRcSeaTNS29GGnRc9nysZBCJoqf69oqt7cMhxxvFyr1AMvYKQX9jpSubgVLm"
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
