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
    "5TUz88EunrXh14h7FfbMJtqP41MEdzo7BBNmGxWB8AdCSdZ72MJx2M2BLqHc28aBWWTNYVeoTLvCydo57hfQrX8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "544RoVvUpZggi8ZpfwaitPYKXsvke1zgHHVoj6BJQuwoTjmgqUbMJeRYuxaV5TNe57g7SP3rTS8oV6mwKGRf9pPm",
  "key1": "4KJcghzE1ov2AYrDnRHyK8nRrdZWPcuTd57orYhGruXeKY5QhdLMNJk27AyBkjbwbk25c2Jo6PYSQMoihFvd2iHn",
  "key2": "53yp9eE4hNd7TQVxZ7dWgXayg2Cqj9hznuRk5YFQEzzAs8Ux1H71jsp962imZ2R2YXEFLzKrZVfixHBnnbyCyjvm",
  "key3": "m6h1s7jrPrSjiEpRLEccmWtNYAHVjnDFqYyQzfXrpQbK9Syi3SprWbaVVPh1xVYAkkJ7fyAjAn2jb3X4w3X7jBk",
  "key4": "38YSPnAuSZ7dxZmsvHszi22CQPWqjFgnmypT3FhUBAb5qHwRDi848RzM3fqZ8FrhfXUMawtTnwSnLoa8jufH2LMy",
  "key5": "3PgmCHvmtUR7haP1a21PHxiu7UMGh2AQyhdBevvk4A5BQv2kXWAewAP64VB1rJu8HtdjkKD5ocvMbGAvgN5FwcEb",
  "key6": "qybzXznjiBTjFFciaLsbdUGwXu9BmzvbB5z9YMZm6UE8siKtMY68bo1bP1fSGTyZfP8RrKWavfK66QT1Xvhq9eP",
  "key7": "2pEDtqNf7kLjChrzxkFar1KEcUhCGPz13bUaCC4Sd4RjP6UYBUp9DSbJwCt6v3TkMcwkcY2ugtr8RSZjRUKiRGu8",
  "key8": "2NPrc1sxedkUa2WWmjPAsoeg9yVqJKXMRURn2AyBRWpDJEGDFAkPQpdSdCgpMc1291T1zD2EmPpMnF8w8DEmA6xm",
  "key9": "535sAWEqeBVGURQd4WC29vvqE36ekK436CFHqExj4YX7m4pfntcfujxFQbKvdm5FQJnAhb8WwoPP3BseWCZ8zthu",
  "key10": "4KQhbhH6kAEuUKFutrSr2eT7QkBdpkRJi2opxrzbM6Kx3Uz6iQ9iUpw3UJRmiBu3AWvAweR88wVbyFCf1L84uaJR",
  "key11": "2HRDQjdW6Ak2gvmPKHzHd9reuZbU26rrw5Z8uBZ73JoyHMCq4MK9xFT5iAGLMfRdFkvuP6jbxTAGDBXnGocepLVz",
  "key12": "2eh5QKxYgPAK7qwgNQW2Y1C4Ane1SZ8cH98AEpjhr2spyNMePdLWBqXQj9DV3tmfV83bqFajJZanfguKXD68Mwsd",
  "key13": "63B628NoynZ8hvZ5js3u8tSte6Vop9kdkkRrSdnhEWXcjL5VVE1KpktvqfdhyP782RnAAu49BfimfyiruYuggNem",
  "key14": "493jd8KeVy6a8JufSigfc9WYHYBHL4BGqDqD4MWn9G4SpYkx9A6c3DVMipbN1yUGK2hXt9RxnBYFksBDsJQLWjC",
  "key15": "3Fxmu58Y7hJ4vfDiL9KgUyxueLXsESchTtkwrQcGvuSSzFA9Gm5BzBcnvvjs6o2cTEHEfJxVTT2wm167AK222CQT",
  "key16": "3WKNLw4ExJahm3Qrp6wvkVnGvZLWQGBPQFHTpEZKrmjLgHiwuuN8wRT9EhQtgi6W6TptvnmE1aZuRRnxBd3WcXHr",
  "key17": "2ot6eM27LzZ4PCrr6C7wBZyX9usGRp9goUju7uSzeQ77BivLAEadqhgLCERrGbBJSeuWP2K16k5bWqWFRtx46gYA",
  "key18": "tevcQ6sJnsZ9za59ZamW1tnoqu8mXuHer3zyzD3wtBX9T6QQAvm51yFynjqydFJ41Y37kZqrmotZd8SPpvnLyr3",
  "key19": "3QnJgetfS578FytyNafk2cZWxZM9JU69si2bBsVBAEchwiGkTFTHrXGtwvyptvuxDcvTDZaXeMSaYXsotahc5FdG",
  "key20": "4sAm9oTLq1o5JvzUpFsfnLR5S4Z9NV963VP12mFw5sVXJLyDEHLRgepC5EyS2nWDm8HeuScMzsoGZjeuURHEmij1",
  "key21": "3TdREKe13FLmLzRcgsRiF6N4esysLdZbXMbKRUqkaGvFaiVkRAjt8HthgEigNHoK67VrGWezksAuT9k1q6ipAicN",
  "key22": "3MZNGdjZGFKpUzM3MwBEh7GZXwDbeHfq478owXW8ZHoFxXmDv7BLDjrTjkQKg4A2pQ9GySyWvAcvTRCwjnJyg3Kt",
  "key23": "5aFd3gJHtmSio22Gcgw7EYzkXtVW4n9eNR4xyYyRvtrhQdwLf9vkkNAzT7okDfvpwCMcLhojz4JtqkydcreqmkFL",
  "key24": "qFX5RfEYZBthXBwyKHmLXCDmXeusk35sFsXrTtEhXyFWtBYEuhW2JKEHuQHfk8EcVDeCXF2mP1yrFpDNZzyzGH7",
  "key25": "3JFP8R4SqtWCv5KzrYnFmFTzAeg5VZngsNgHCTfk6qChoguh2GAJ4YEX4UQdjuhcFceKoqqfZ2X7GTPc6H2sFTAg",
  "key26": "dCY4qxmQ9VniHRwjUN6vvgezjzwfCR4Shm8caC4adfWEWVve4CHcpF5DH3camBbG72fxFonBD4Js8Ngmg7gGmWp",
  "key27": "3MhUekKzLXGLtkY8B1FiAUHAqaaBKysUw8tGCaREcHgkY3m1qT9N9EacqTeeQokKNjXiuuhrxKgS1PKtAYbmYMyw",
  "key28": "SNU9NTfXrkJihZhPjPfgqLJCfTSQMQ1EMnsWh9gPKRgyRaqWSr93FRnY5NZkUbhzgemGSKneENqDr6nvJgJAo8k",
  "key29": "3mvS5C2F8WM1djo3fMhkaaXxN46MMiycZXVnMTj1JH6sq8RMwbuP2uniBCE2guqinw29Ac8msMEZk6zeAd9ByB7R",
  "key30": "5PwCAwDDMUtd8if4MBK94hnCdebsfhJTtt4WWHcYmbKWGYMbRZQ384iJtPdvXKyVcf2RK6wDKDL4kb9pTwBQiAs7",
  "key31": "2uijPBa68BtfnrfriRsWy6XYjV3Bis6X8st2Trg1z4jKH1crWzY51JpXNExxoMpp624xYQUnPZxibevbBsJtAdkG",
  "key32": "xyDaghjpQem1YbA91bt6ENv9NQaycaivmT9UdyJoAL637XyUfPg4jYhn11ovuCYKP7GKqotK2WBYcFoaBuiAwCZ",
  "key33": "5FR7UyNekcohJK2xXPEsWmx5zVQBgytjA7CgFyDDprFCzxFSyZGVpEnRzwvTgmV8RFRo8pX9XqrTPvaedc22n5U1",
  "key34": "sxDSrXrUoP14cE1ZWVP1sZ96U4brtMzT1DJN6kVfrDy9F4rKsULZPqUtEkBwwwfxaDaGAfNUwaju5fSaj8sYiCx",
  "key35": "3rs1bj31j4y3XWbDQ5jHvmrtWmBsx2fRfkxSCTzyx9TRTRvF3WpGveLGC6C6sJvBKkgYfjdgvGxVQkSNHGYfCKjx",
  "key36": "2dX81mjybVxxA2dUfRS8ifLAmTDKCnAWEepVTbeSFN996GRYfLDwWNsyCd6oswU2Ex7Aw5ZG6ZPRa1adQvyBpsDr",
  "key37": "TpzCWqw3Jff8VahXrCNWXP5ty4AmZGMDez1b8DzuLBVnBdVDj9HYpBRKoR9xBwFXMhzB6bZZnKZa1VHtmf8qi3a"
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
