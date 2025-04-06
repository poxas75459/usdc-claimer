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
    "2YKo924VEkoVWWyoCrekajhMKke2B6zF5wP28736Skqm75xFqutgvXW6NTtAn11VUmWUPazL9G1bcrSZHKxJZbDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rdqCWr52rdGugLRn8sKDhoXtkJBXZ7wKaCFrUyRokJpJE1DqrePxCCdESJTDUtMDUPXdAFwUZXpnKD8MMSQmFMC",
  "key1": "2xadbMhHJQFRg566Y7sN9f2aAKEW29UzX9GZLtiyhUoBLS62tSsXxSLEkKeLaev6Xg1o8r36Gtfp1JHqu3nxsg6V",
  "key2": "4vuD3bfvDa77ex1G1dnrZ2eD2o9jMxjNiEgxiPbNtxmBVEwc1FVHJyWT3znXdfhGnhwAsGvqP7xaUuHicHrsLZoL",
  "key3": "3Nvz9yomLj9XD7zsTa6hnzNp21P9X8QkUqaghqHNmoNMAQ6jpVWz1NpUV5e5aUTXPPZNjnJr29MoZYvVE1QqzG4S",
  "key4": "5Xy2Udc15hv3u6hKHug9UedhpASafACG35PnFPCeemdXB6kk4ohpTz3X6FVhUqaND9tuNvUyHYMLo4Hxir11k5BT",
  "key5": "4VHaedCfHLeRY22sRRV4VNNDPcu1N31e7vTcPsGypE1aAmSNC7kCw2SQjJzD2AEvNuixmtMm6jMPKHP93MwkKqJZ",
  "key6": "4bbrq7u7FdhRRjcTh7AXj5p4ht2z7a12zDEgyHoaRxJWqSaxVCPoLdSDCERQwj6hCC2VFvEQTi7SCxVR4aW9N5B9",
  "key7": "3wncu65ye7qfoAsde4verVuLsUJJ1KTns5ik2TqQGnTFrqW97kgWZNxxUBa7NxUFwEZKyKduaypbFrJK1DeopaDM",
  "key8": "48EQdyj9WhyMCMZDwA5zsw4e99ebF8PyPkLMeAPaBaVj5PakJ11tk8Hqo5Ki71VnvNLJxgV25jpe2bvHNhDUhsTd",
  "key9": "3SY4hvwPmx2EvbzgPWaiYrxyDbvV965Wj46WuMZAZh1MaezAkhyvViXzKbkDb7YDnmZYvtCDEFmM3t6X6dknqbau",
  "key10": "3dfjnuJAtHgnobaXczFbtZFyG9T1r9XFBFwNdmsC3eMb6qg3FBVHZhi4KqEjcx5nJtRTg5ihQSCMNkbiCSZhjFfy",
  "key11": "5gLGQc3FTnnaVWWHrYuwrmgqQpouexiymUAHGxvfoeyU5kof2KyeYyKX6s1jKH1tnTkEV98JPgpmP4CeCKakg7ae",
  "key12": "G78ZQvAnEoJKrxfFYcgYLrCvmK5Lg6Yb9mDFbZtkZN9vhVHDY3XhiUhp81rcBUconyDHTYAfFxEPX1SqvRiGNyj",
  "key13": "3pPadWJchcN9dPaB8dtNQbYrgR82bcEt4GmrmXRriPYXe5u6V3kGFBPNkLtDq4fHrHF5qh453eABgE7PE5ZbMndL",
  "key14": "2SkvECpzvgwuayHXv4J9zaSbkVvKQJoCcyvPSS9MFCXRstNPGCtK5BCcoCD47ey3AKppVWAgvj3JF5eQicbP7zNP",
  "key15": "4A7uevGQC9HbReobpgJ65TTZRt7RmmAsUwqNHR4CKFeN5WuoaaYHzRfhDxhUSJQnrpyJjAJ2gTY5dafZVQpJa2FJ",
  "key16": "4pQmEjQZPQzugXe1CeTuHtC1uqSvzFbzgCq4xFPh141JesEY9YPEyoRtGRFPNWCDtzDV4owJk4VJE6WSqDbyfPpc",
  "key17": "3nK457xE7rTvKsDX3sjvSYJvb3JhBCMFBjAMNcS4VvnLyPvJh3koF58JnnQribKY1ybazxudJ21KM4aQ71r35cWw",
  "key18": "5voXmEKCKwpK4yv9dmBspUmT2NEXNaBqhKmgCQheWdL6hES89vRzw97JJx4Ymaf32GiujhsH3kduBgf3XEm6shbN",
  "key19": "rPmFQp1MCRN4SEX4CrtQBd6ccyJSchJVpP9Uf6BXGdU8NEovnrZcC3kvcZf5FTy7Y39L456RGi53C5tbkRUrpAn",
  "key20": "sScUh7XputWWhJ6KivEix3dNwDkjuZwFrYrd4uceeA2eYcFH5JGS173L8NwrdWCUtNwJ23QoPxqL6CKPzyNbVj6",
  "key21": "3NwnyyGRPzWhADsYbvx5bK24kbrUVfSWcXYDbPtaXGo7aBGjWVHgYPLhXjWVvm7zVPHR3zDXzY1HXRdf2HxnYGqb",
  "key22": "5rmrXPAmEszUF2xhV8feqPyfjtc8LnWbTVzuYjgj26LmFE2inGzsAyJoxwGceeN9LCRm6tPFERSiQgfs4yf2icRU",
  "key23": "2fTTmqMBojZAMrh8sTZoAm9L3RApC72KAZJEFWXvR398fJrsvxDMmGMAku51XfVwwcdWR2EwABjPhisZncH3n34E",
  "key24": "423LPtNFQLivFTz3cz76zFi9GSPNf952wszeYqyofmmLG9qNnkMv7prgtWejzyR5SaTarvFez1jrzXKWd8NaGMGz",
  "key25": "3o1HGjuY1NBjUVa95JuCPWyYrA9NALdCeqmtQyAWBj6rv9mSV5uw5iBJuPKYpZRdVsVu3T1zXuQWtgthH2QUQHEu",
  "key26": "3DWGSM9Cm5oMCzaNB3KpsEhuHinQcguFeeRnwuYkmfwfTjUHA2xwJ7Guz98nGhBZMatJVRivh47o4xFjvAizWxgz",
  "key27": "5JsVPS7aCNPFhYRSdMvVcqXiRs8RgkVF1WL9kefRKUqq88A7W7xFMsybAp3o9V8LWQQ1yuNqRKqXyijDEap6zHyK",
  "key28": "5fmLCLwjirFF4s4ZU4igf2czro79W3pQkHGTcSv7rN1AWRRkNGyrH26HZ2pHo3z3wBdrbvNUqeWDF4sqzqBdBu1e",
  "key29": "DYiHsWnV5QJhmJ6BM22BihdJX8pRWw4V2y8f4pgtGwKBTVgw54k9DR82eFQJxjuBUFMxXecdRv5UkuU3zugVkjh",
  "key30": "scFQ5uqNgzAnuRZdW2tud2PykdnsNK8sJ5zssgDLwnaatGGbBEvuJeKDVa33eMh8U1uiXSJC5VtqdWy1Cti1scA"
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
