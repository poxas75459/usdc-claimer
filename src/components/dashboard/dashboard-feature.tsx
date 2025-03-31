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
    "3UFy9CCe6LiJHDgVUxujW4MEyjnTqqZfMHSDudpMsfxez74rmWdP6pvS7DEiWBhcP5QY1bKRzPm1Hx3nkghKp8Nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ULCsxoY42GquMq76vkANn4eBLicYisPoBTHSYsvz8y4P4B3iePvPiKz2rquwxi5XM2eyXtLdBeGhJxNT49ajHYY",
  "key1": "3dBCCg7NaFnNsrD7j5craTX6zdaYyEnrzWGZbxgkP8BK6zckmauTHhZdAE1T4CpQcS6fsEiwfL34cRhgS8fi9GZm",
  "key2": "hDXdB9dheyHQ6EHE9HrZZaSjYPCMUz3e3qawGCg7suQHbjBacQP1djw7REyeDjxhKWpKGifSYDwsdDc7kYhT7ii",
  "key3": "4UY4in87MTJVgACta8RwUYTaLXQXtRfEm7eRZzf1iWghPqvsNXhHscrKy2zZVGAcCtfvJw4HhVPH4APY4Kh15Uwv",
  "key4": "SKAALpBZGCuNCswVo4a1rmZF9SeZj26df9rtb9YTNtfmHWqsDBKrwrnJ382RdpYfsg1Xif8hDYTEvkSbBFREtrh",
  "key5": "552xG4wVghb2QqPZhSwAQhjob7MnBGx1jLVDQF5jLuHkgjrdKKzgMdQgniKb8pdpS36wpgXoZoEjLpyZBge79iXC",
  "key6": "39mTj7jxAAT74XGXq1mJGBgWHvqovcGYAJSvkAZmphfybnnG3cD1qb8NkxdgUoGcyGvUKT5Mj9rTrvdRPUHRkVPK",
  "key7": "43ybhFYzohYSUpc5tXY7uTB5hdu1iRrpoah6W3uSgopsFjxH7E4M7MFs764eEFf8W37q5gxZxcMc5GxhmbVEHF34",
  "key8": "XGa1UqHFHwcDmtQgp49FrBTie1eFzNWyd3eaXaGwYeNqKMveL92yRX8y5fiQGesmkduTHF8Y2BeJfcUvLR3zRLP",
  "key9": "4juaNXsza9e43G1HWj4kJabaJK5hTTkQU3c6sCsvME5C2TNqmRuLk5bCTx4Sfg154eZ1egE1jPdM1GyUH6iZoSZ9",
  "key10": "3PLcw31szFFM47djW425NSoRm5fWw9sGzu7JXBs5shbZEb3CSFzsbLCHx78prc5zLJwwzZh12stJBqcDJnZRV2up",
  "key11": "3iRYynUbUC3o5HGhLbQ9x4QaYJRqAgPwqZHNocw7Gbvo9ZN6y7gzbhhCs3uK82gyU7gdf9VmcggYG9PUsMcuctRs",
  "key12": "2xkThxrbSU98XHX3u4QhoYzWyd4sKRAxhkBWh4pE7cMJCKnRNXuTEfwbHWfko2AvJPgBcCz4FRXzwmNYSHGSi4zq",
  "key13": "krg7URzkNQ2bkdEqsk6WzbdzxAKU1HdbspZFak1zxDMwMRjHBGvE3UpZm5AymVvCvRVtxEacDHoVnPmV9zXbcMK",
  "key14": "5WKoG4JHWAc6UTbNoSyRn2DxN1o7nvzchGSu2FVA91RXwQsxuMwhcCaET1VimimdDGexZnqCn6QtbA1gZ9qjNSEK",
  "key15": "33fLjNaK4ft1pjbRJngHJFzcXXWiYNuy1tbiLMeR6C1DnHfbAuNrLqfQKGCcdYzT9u7wBL4fS6rkkPEEhGjifkiM",
  "key16": "2VwHdi9H9JCZVxfAJyV6TZfbhZTz1zSj9dwxawHPzeaYomQk2vNJHt29aB83CeP96biFhTLA4EXt1JmaSCLrt4ao",
  "key17": "53UiGansxWEmBvEYiQAqVuP23Fw1hzGaMmrxnb1NSK6Qyg8Bvcf3WWnrZAEU8CFCJVT296fmDDPUFAotp1UPCFZH",
  "key18": "2HdixXCnVYeP3BqZBhE3x5bUDHQ8URDchPXRvv47CkErPmjy4JNPU5cppTxPECjNxeQPkmPiHEKiN3eA4nUH9ZbD",
  "key19": "3EtaMd7tDoDPMkn2mZLE8pohQGLFT1a6NZUdkhVWyFMhWYHcQ1sorKpKitSNJci2xiT11oZwgBc4Y8kbP18Q2wQX",
  "key20": "57iJgoW9Dzv3zJnvGLKCfTDbakj3asH3FpgrTJCM59rcq6yRkrELgXttEMjA4y6meZBkcAYrCmU7xfquiY55U18V",
  "key21": "2FRt5pSXuz4cgbUWyzsUfoTJDK6meSCZZu5H9kSYTWBkxDRWa9BR8Fj7s7rePW4f8kXrqYbFSgQoryaZg9uvE2bN",
  "key22": "5rJwmBDH8jdMVabeEaF2d2fPVrR3wpWkK9qYvfCcMPeuo7SnY7ZTs628ocKi2v6aE8U6SccjUcQDSrHJC4dka8Hz",
  "key23": "45TpEc62RJrqUp1nDLtVAHw6qN5ognvBkUnSbbnsP4ZacYmj5XMnLyrmnpyzzykW7YazPFVpb2T8iBvpgbY9G2iV",
  "key24": "2eJhq4V4G5yhdPmPbjTxmGQ4RS6pfQNWGLU7Erjh3JnBExRFkt59aLN28N7PZwT5HfZ69PzA6iq3GMEzSBQ6dhLR",
  "key25": "YgcYiWaev64JxFymA6CDWJ9vqaBB7TMR4tvywebab2uwtXAd7gvA1rcEmeP7x84tKkmpjDc6SLeoimVCGE4pirq",
  "key26": "8KxxAHEWDARdhak9C25jEGxcus99C6YAQqbhFWHtBnKuJtQWWrSiM7aMQT9cmCtkjY3ehSES4aUpDwMeW4nE9nL",
  "key27": "5tKg9A9BYYs96JRVYwnVLg2VS6Jmiq2BXjcv3ELeQckc64faVjut8sq18LDJBWyw1P12xtkefe1GExmnGGZUuyr9",
  "key28": "3mZYdS163u16PZwaxVS3cQ1P9DLrCaMfdDhZ2R7RijgjN3xipmPeAMnz2JKba62iK1uq55aKJDLXTcRCpUVGdNSd",
  "key29": "4AhUuT4oCaJ6mspHUJuRxKzpczhppHVz8m4cWu1JL38HJwQJUKMm3EAQ5K4vroHNVYcx1qMJwqsWET78ByiUM2qN",
  "key30": "YrPEFJfENMfX68YnkpEkv6p59n1BMnvHG43JFCqWLVz2G2tkGPb6FjWYpw3dfanWwNK8zvE3T7BfMrT2BEmEvQj",
  "key31": "4c2G4eFB9gNgCErDiDWFnHb4QKotFzkm3iWU6FTaH5ey8oau9KcLYvTgLKvvxwZrKj5PdYuC4KzRh3eJo9L5WAQs",
  "key32": "56PHwctqP5i2qf9FqeqwzrdkcKE4rNLDMRi1nXbXno8yNCfpFLjk4E8H5xLiKFWomhaFtwHaNquYDKNUFCR2nypv",
  "key33": "2WoktP3UGR5ftgkcyBuui1288B6XpftfwXs5Xr377rYDgumsJakT9kx81vGp8ehfSXsRRMV399u6zSqoEKdwEbd2"
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
