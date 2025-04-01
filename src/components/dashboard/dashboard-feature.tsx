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
    "3x6f8HBPYDWg9JYyhnfgyBPoJtqW3A5sPTtBXLyT3946r8kF7EaWX3iuWvXEKAcQfpb7s6ASNvhoHRL7rwCVWzsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xfBWVSitCernPyk54nKnkb7n4mM67AyUVgue3Bk3zbGXJ2Nmv2CebB6TxqkhEVE5AedWEyzds6exycNSb8mdCyE",
  "key1": "2pMViHHfRmznoHKbrFn1xxaZjmFt8ysN9f3r44du2cvij4WbwKrArxZrGzGnXrPbwfjvYk3EZ1aCELEB43MZ7ig3",
  "key2": "2bj61FS9aNJPn9wwDrr1jUQwmMu5hThoDKsFVhMEuWEPszFidT7pR159XZ91ufSW4nvdK8mkQUucZ4Mrkv6L41Uv",
  "key3": "44xoUcBfwZwoMWPAq41FCGSj3sHZmzTHvYDDHYqQj6jZBHh2qh5779cXXXwUYB16AXhuZ2FQb1ddMXuDKeANQUT4",
  "key4": "jYHhVFhkGNjepcf732qycAoZfonCerGGnVHp91hD4u7ha2g9d6cTgyejDMANaBpQYpKeX5yVDRAdhS7FEazCL3D",
  "key5": "2LdA1kDp6fFr3X3jbPr6ZR7TA4rcJ6yHTVRzEL54SXESK3d3hBQEsueUiF6meMjGbuR8w6s9YshChutWhEpZfNKM",
  "key6": "3ZzniKr4VFDg49QBrFar8HaYtUAqKkZSU8forUsRU3WkEfePNFJ8oqmQMHJ9H3YCX4A6FXvAjgE2eSQSaVW4eskk",
  "key7": "4fAWH1VuwkmH86NY5dFdsZdpJF4srRdSdPDW8jTpdzMdgYbt7xC4NqWGyMcC38mXwJe7jTLG2juYTHVxatT9tJZd",
  "key8": "toHMx9yVhMGBDfUyWaXa7mi5peiG9Dr7dRZCVJnVNGJotXyPkvWa9DN3wwLnBFpmvxVNrGnCrFEz7EuLL8AQBis",
  "key9": "3ZmWYgmPBQBVWtF79J4ith5GUtS8LM3zYFqtb6XMvSYrLhxPB32A2R3V54grczaUDcQcJJtgT5gGZAZdLB14PAHB",
  "key10": "2wT6sA5dYtxJDDEfN5iw1EeTSoK8711cBZTDffX1kLDP6JYdtDUaoxwjfpbFMgGZ1fnGMAqUaTkbZPQb9moZDDj2",
  "key11": "2UW2AhK7EGR8nHQaKSPNfbMDzshj28sEbPMBtV83GTK7xYkn5jNM1yg13r1LJM583fwtyZfCvuCBBXbsLQfQTPUf",
  "key12": "2DMiEb759trc8JmBsoEieUZbB2ftmjNj36hnmELubhy1Xdzgiqya53zfNhmtW6tX17Mbr8xYQaTjuzBV4mgkq87b",
  "key13": "4knfTwEH9fKkTfeTasqAKJfk4MLhEnfudifK4JYsVfWyUDeqQxU7TvWLRKA7yULh3ww1usyjrfWy9QJ7tWauyBHq",
  "key14": "3GJD19dXX6ikNy1PrfkKkyR7S7j3woTm3V9AkX6KeuLV4FZJ2p1i82JJ5itEE8aJjaqVv188vS4TCAiNr8ihx2Du",
  "key15": "5cVey8kSCWrRymXwac8fNtXWmZC1zWbUGSnWzZa2CKeLitiRkuuxYMgpueFnd3h9F6TnSmEnt2nywExGhHawxn8h",
  "key16": "5ebNz5JAfjuYt6Yh2Hqi7BchdwZwLzB2icmBQYxSwz4LwkxBLMSi2ZYZwgCDysF9gGYvcf65ViovioAwry3qKgrW",
  "key17": "mfCY5Tni1HhoyecKw18bCjvxQdBYuzBLRygokXbpXsCi2CbkEuq11bXo33gf19po22ZTbHE2X8JghoJXupQTS4s",
  "key18": "2NU1BsZPaCKF2RkiDMjvGbWzfPbxquQZPHmK1v9rNwCBjxo5SGkh91vsofPfPKmHmRp1xyivNmsqXC2xnatbway5",
  "key19": "tHyqP2WpS25iMRoFN74grLpHS8kCz52tngcY8Pj7G3H5HT9aTYy54xF22VZmPySywZBskF6tsProcYzDN4daSxV",
  "key20": "2miyX26v3ZC5K3zqWERNUm3vzGC46rPuT4CiBA18uR6FF3xZVgsqkf9LGL4qAZ1xReyZnPWKM6HPF9uR7grMeYTM",
  "key21": "SifXVbRq99gwEj9gHDmsdgVRBkqjmnpPqZaXViw3K41rpCw2EvtNcPMyeroJAZ1BqucaM33pRQYuq6EjoParq3P",
  "key22": "3SP7YQeCoaycVaJun9FVTJK1ydjhfuwATKebeoDAYPHthGKwaSba5KaEVus38hg3RxXTXe2EHpZvGKLymB6AjZh6",
  "key23": "2g5zAYgqwrpPx1MxDY5agc2hGBywHN4jdswXGdzcwWLHeShv3kYvx559UE4z5aeR6N4pNCEXR6Me4MnTWpmbU7S3",
  "key24": "3nJHLgFmegKMnu4Nb8neEkMbeyN5qAJuNztHXcyujgVyGseg6PzfX5i36eSPZt6CERAqpuabyngxTDamMrP6TMX5",
  "key25": "228y5gkFAkaBki7zmgwx4q61NhFZPsuYc9EHabpH4hWb5nNo2CPhwi3DowKfHseKqozCsF77R4GManFgHyEyJ2sV",
  "key26": "4UDW2GcwzViSSpZnVUYpVFv9qak9qJdfmewCgfJ5DB8pH6y4FpBfbzuawudcQz3T4owEu6hcgxV9RaGWwpiQmdjD",
  "key27": "2NpMVXmqKRL8trRp55fshDYcnM2sPwhy5u2iPmj3bvgriSXcKqPuXHuxdTi5aWKKMGV6heARFEuchMLCs9prndph",
  "key28": "525pdkLgGPT85eVNTaZNjAE2VN5RY48UANMqNUBbC53JSrUu9zSQRDV6Tk3fe5vmgc7nvSdve4E4ZWKxSVW7dszU",
  "key29": "3wLUgGtGL8ELpXYeiYTofHPVy3v5DJukXecs2jSKnbJwrnsYPcqrs98HRQBuysB33sFL22ZoSbAHvDvWD4yLcpAi",
  "key30": "5EvbK9dpBS8gjmAT5Fp3tGTsdpcvbbcjbjD3pKXXqkYoYUn7UFubTN73L9AAVSKv9G2eLkmDsDZWUzo1oeFdWL8R",
  "key31": "3icnYnRL88EJc6gYjeMAoWsDFxP2wgWnXLfJ4HA3mwCwkaUw2VeS9XEjB3FRdEaTv2ZFnKxdvzzhTcd3xU2ncDCj",
  "key32": "3jyjf5fCfw9z47B7zh2XPM6udhnAXsxY174qJM9GPgiSZHTqubTbkpt6i3z7Aqt9bCz3btVym9MVYRiDmqUJEUzx",
  "key33": "EbLHFXiNd1VLEGef5QtbK37Uz6CL5X4SsjKbFdxwksj4qEMNkCA3vKGet4vhRUH6299GEkc1dDj5SXfgCKKHv6o",
  "key34": "46qRWLoGtZ6pv6msDNGkbMD8GsKuvfkVPRv7f4wudy89Q8PuvawnW1nswACqnundX8pVMBwScz22B34YUbhh5hMJ",
  "key35": "5Ztn9LPeyiT9CcdZ4zMTt3BKf9KhbtXMCwi8Sa6uNXCkPRnMScA7PSQiyWm1QBCpqUiexwXtyL6Cw85x1bgcq9R",
  "key36": "2itmhq2oQgAXGtWfEjgEpnG6HKdXxhp4guRjTqBhp5GpGr2NViGGHwthDC6RK3RhfDa1EK2wbiEJELPEj3U95o3G",
  "key37": "5LPzGb3ioEengMd3c5Jxo29mfEd4nwwEZDmQbPLQzQhX6Eip2D9exb5TeTUy2kPXdsyMgWwJH7FLDmr3u1EMYhp7",
  "key38": "jaF81asszjC5enaPCY5UBPfA6wPDBhFHd582ZMWG62pQoBHXfBcKiajeNZFz6AEZ66zwqNSqtHsK5Fk77udob5U"
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
