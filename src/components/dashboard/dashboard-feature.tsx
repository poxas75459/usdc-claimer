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
    "mHMJ6CybNPa2qhTTZPfg3MgQAjZAq37hMpuW6i7Qb3BXCWG39BKRRRCJDReRLiE7bxH1kuXtU5wVkfP5tceaUSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6KDgru8pFqoNGMFVv3xyFshpA8xicxm5JAZ4162GniFyvEUCSszsKqE2UPekdf8wKWsMnJz87E3sGowWTzMU3j6",
  "key1": "3ZG2HuGARYoU9jA9jNPCtgikDr6zGn3FLhtyrsj6ufr6pyRKHVPgiHjyKP9wjc5D8PsbbDBERNkB9tKqMAbgKRFK",
  "key2": "2Eohty6WVpbYsxrfLeV7BvaRbHgmi7oj32H4JxPXyr3N6hVuotw7oVPNHQqCfK9abdYWfvfZnX26YZTno6LjSxeE",
  "key3": "23ZS6hrEezs7Brbp64m9cxH7Y9VXesV127Yi1zy5p2k71vcAVDse6kaNsXwh38GxEt6FB91FNMCFSdrjgDyYuJAm",
  "key4": "RcQxHVKc1ZnwoX7CRH4iGWRgRwMvpKXh9cAj7Z4BveD4fzv7rd4HWtQU6D7UZ9W7KAr3bwGJCMJCzdTsADikfuh",
  "key5": "3pkeEgesfpGNbBPUP1icSFdXVQhPwT2W6hEKiMykRWYTuKg2ic6CzpRqRhsCh3mdXH3LyqTn6GKBeRZtjNAD2kpm",
  "key6": "5YTh6SRfLhAgaAXJkNqvMqBZbduLfiUEsysJSTzshWsbLLSTQf79RhoDiphTLd1NsvTAqnrjq3rkQHG5UaQofCwN",
  "key7": "3GLeTpuJeQYvAch5QMBEa3maWiyQ9QojeqRgvn6h8prHgpuFsPBMMZUEgokQf5fFEKnrnu74UCTeuw3U3haMmSRk",
  "key8": "5HvKAoYAshFPH5PfYX1HkDkuEjmcVDDbdenobZ36mzpRvsLTthkRitt1XtsBtPS8iYgAbVNjFYCkq7Gfg4ctM824",
  "key9": "4k62CXbmo2yJoPciaGWtSjWvskzYW5YqnMv8erAaPvWxZWjhFKUXLtPf1jfLNc1RyoBZkWWnYt1RmEYtkyY972if",
  "key10": "2Zw7FjcgVSZLUs9ZaR4aQGGoZ4jKngnaFTgJZ2x8tRPQJj2qyvmd5WGBpdrvwuSmmJDbGSUdPFsEnRj7VNXmuL3i",
  "key11": "4NjkQ4C5PGtqC1NspyroowrDXEoGdWFAmwYoyKFRsAEAD4ZtjEQWBrucbnwUMWWxXAszKaG43hRNBj1gxU9ZEwHA",
  "key12": "5V5Leaadtv7SHTswFz7iMjL4fEw8z8VaB3GoAXXUxsxqmNoiy4HrayKast6mFFPPCBrWv4jGM6vnZAjeYdWy7qLx",
  "key13": "2frEoavLgEmFizBSmiu9SLocUmtCFNDxr6R2xXuHMNXVCsuRKQDQggcDGMdFLtNfrwqAkMEvg5H48L5LW8VnaPoo",
  "key14": "3uv5MjJSChjPVnnG7B2HW1Y9qNp12CaWpsM4gqLSyucshgR9j38rXmmfVmhbsNpEE4g3WLoMKQ2CkBMBZY2YLrBB",
  "key15": "32qbMtFk89urfKFpiHrx4V3uSZ9txmSbBxMy6jgMuUHSyth8Jb92jdev1JwEfsdpCbVWPtbyfwJymdQhQfFPQ2v9",
  "key16": "5Y2X3jfLs2QDY9KyjprKUaeRqT8UxC4v4mgYgV9YuzzFAXDXMSp6GPndC4DmTkEys2FKru9B8uomqFzLfnphEF46",
  "key17": "2ScpC1BhTFPAwJ9ejhPxzTwjTXoBvz5DEsJG2KDNTUmGcfM4Mwfy8wQG3GrbMVL6eCnTbQMvpQ3ZJGv5h7tKaxTB",
  "key18": "6xWL5xmFw1hqD6cifHPwby49uAMVw8E49cBJSDoYWfnFiTyHecuWqy9NsHu5q5bZPHydSHwEP4xHMxPrUBaLvbC",
  "key19": "3JDUd1K7ZN17JEGTaJTQoEtLd97uSkQpWa2ed2S15M124roQAPTZwVGefDF4DcVa5yGQLXRGriSf3eceAmNeHznB",
  "key20": "3tsxdupQPF6jjQSCaGAWQGgaT5C8fV54BkXAroRYEXDJhjFPZ9n7Enkes1xB74eQJEBQFSy5UvjBgQHhSoUzGits",
  "key21": "5ssBUqoQt3oy5oVX7KeXDkQ7CsoKntpfXMe5vTUuoCqEXGotAcmNiiXao2XmzLEZ6qSGZodkokQBiDXk2TThjiFR",
  "key22": "2k5aF3xYfo29r9PCV6RM4J9K5pqAaggUeTShruUESd6dDWD75dzziTKQ5wFvtFAJcjbvZAMuFLi49H6HJZLRGjeR",
  "key23": "mBa486VWADD26TeFHzcGvzcBk8vjCmUqxp26b9wZbMtyjDhNE17Htny7nhGoEkQUYfyimjdkjz6mnGC8QdT1eTX",
  "key24": "4oXxJi33sDBYtwwn7ixZuLdz2AnHRwcP5CchDEfgRcQ5Fa8GghLA3Y28rKK6szvoK4sg9zy7aj5tQboFtuBPGSY6",
  "key25": "5vqXr7SfWjkfKwTeYi2D8AAgihmujFyA9pDmNB3pdaxySNrFxgz6eyLrBwmshZtdZZNh1qFWb1c3m6LATbHrjqpG",
  "key26": "mBch3izbN9hqKZPWjfhGiRvCjqXLNi1sUk5tPWsB32zSMnvF9w9zqBXtcPALoBbtNvymLbgDbnwFWPeurVXCHBY",
  "key27": "3YGWCoBsZjVQzrFpHdC4UUMoa3sP6pzWNGPr8UFtfXMrRkSBE52djFyedCZdD6AomBcg78yDXcvqMiYFTPJbagz6",
  "key28": "5kkCxunffoDufZyw9adjtq3HwqGbxcQKrGDG4MKyLpCTEtckMEfWMwoEnsh5m9VzGN9BZLw95ynYtbJxqyamowyS",
  "key29": "5uTgAzvcTbKzeULHVrZ7uhmNfzv8kCUhF4pdGAKy9gdVXVkR1ceDKtjdpG2mwkxKvdUdVhrpBg2rukhAmiU1NYLk",
  "key30": "5YLaHWRopZp8TjbqKJpUsTV9FGDi727zf55GM8ohckJJyuSEJJoUySzpkVLr9C3EgZWRvZMcoCprVbB2H6n9gv7N",
  "key31": "3w8XpJEtwMb8Pem7va8UyFqJLwhMFfaRgG46saWpWbhErkvvovSS9yZWtEshoNSYj4AZzCSfM4X5yaLLSimRmaoz",
  "key32": "37hZVcYvaxiBVJA9nvxaL56q3cNaVBMTVXahEwqepG5cdY9YxJcqRxvietjNt1i99nTmXjHLRPcAsJpEvNeQwkDA",
  "key33": "2QPgHnw2wVUtz9MquD8dZ7MXKJP76H3Y97xkz3giYd8Fb37JJa9izcgBguRuQ8XEATNyk678mtNZULaQrYJu4vQD",
  "key34": "3JSqwnrrFrpUPksfDgYcqUvmVrPcEHZAc7FWNd6JGCfB8cRK2teRh2GYkBUYFqXPmDXcVAKbLzXuUSsn3ZWXS2vt",
  "key35": "2wgmYPuoQ4SZqbhEDDWCJBq8ef2XnaYEBTQDYcrxYD8xnnq344LM9VB2YgHMqxJc5gxPvhrRTs6VHRsdM8ayEk1f",
  "key36": "3fQDYWUEgPApHDijLteG6Tn8QGrwSxPbi5PQspC5hG65NUXx4keFhGDpCDF1a753bQ9ERSoTvGb1Gdiv67u9mcFU",
  "key37": "224ZQwnEKHpLFXuPYeoSQpiMkepPraXahL96rFL83R8VBFBhmyR3fSXW4L2yw1CZG6ev6XVUCo9NK14oquvBXqJ8",
  "key38": "zXBEHt7DvED9GtCC69xYc947Dmnoo6Mo7LRHvKaAurbq3KWkCRmKKT1JkiTQkpxryVeDFD1PgKEoxyLrwQZd4iV",
  "key39": "5A3AS7KpTPgoSdBsKck3TYLnQ7YpHspkaBdQLtu8YQp5yksKZ9tCoNeRdH7n1952DoLZGjvPdLq5rBTXDVXJmPfY",
  "key40": "4CQfp4wT8Qe1Fo8PXaj3Yp6FXBTA8UqnnKusUEGsZi3xnaQaELzeVPZqUPyr4E3mAvtgfNSDxCdQUPuojqrkbEpm",
  "key41": "86FVMzG19R4jtCAXaGPRbkQQALyFs4xuFkaSpHAEJgkxBTECbKhafBKeEoCnAwNwVgrSJxsGPGUwSFGd9GbAmy4",
  "key42": "2Mh2e64WwFDvGGXtuGSVds8J7cfx3xr3wvGGZM93qBwKPSHn4XwEnBbbLtkpTu7TXPN3H8AwNFug8QsndCK6si5x",
  "key43": "3HEopEbvv6sY9D8RGtkiLfTbdahCw84hyWTQGMcQ5HxacKPcroffuqqwDBFJFdbwWQJz4NChaJLNzWLrSLsYJi81",
  "key44": "2qemzDDZ8tLRkF7UScZTFuCLYL6VHUAN9vCyrNwpTUYuoeEg8JsaZmyt99onZKNcw4ByRWfHNyymZnkZrq3B7wXZ"
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
