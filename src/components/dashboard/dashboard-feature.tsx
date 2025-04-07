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
    "3K3AbEGgQMV8Git9j9nJ55tT9YygNrgShgS2FYT1PdRTKKsyMm9cmz1WPUNJ7dE2AfSXe2vtUP8ZdCU8T3fvooPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZ2CghYYvevatEsrETgTmWWeDJDHJnYxusGAjDje1iWAs8TcgnpTE5Leqb41qGU5HKEYEbdneZH1nbVWWPY4UNs",
  "key1": "61tp9WwZsYcDqqDBpLuzz9wt9gT2N81pxUnPugfZfbx8tVCAWxTE1g64Hmrnx7H3ADPyzv6c7UyazXpyXMafz4Fu",
  "key2": "59n9TMY8J38wW2qJEVR562quDHrb2CeiFKuyxcDaeEmijY7YSifaTTnphj92HEF8kYCf3uqTjBGJMpywrFErC2vL",
  "key3": "3DSAGKMSatV8GWW1HTkrPFjF5VPJKgy924etoyxiDisqmjeez4KsMWEGpCpa1pF4HnFHDsAtFQniKVaXg4HH75iX",
  "key4": "5ndkYBx9hJApZNzbSGYNAoHK6kzASyLR6c5Q3RCb6hYpyNKNzc4FpqNzRGpsbDvkcvZHm1ygbsG8sh7DaTSbvGeK",
  "key5": "ZoSG2TpLQ72K4nLap4FFccySTBxrt1GMMtVF3GhpmHkq7tALE6A1tejL4qwwhue7TQnRXYwuf895J4VgVPdctRu",
  "key6": "2RSecUrSwaS47iX6zGdSHGa8nwAS5UyhKtiQ7QJziTSK7F3ixnerqRzybPY6pab7CD9ZRhNiuHqRDoiXb7M6Zfuf",
  "key7": "ZqFv1PkWdD8xQSL6U8cDdcZ6RKAiPjHfyVoViKHNH14mKHLytAMjP6VGSik7xAsptf8ASZgi2eJJCSXGxKQ13gA",
  "key8": "3yjBW5LGKMzyzarGfANsPwgw6doUfCBh5eaGSwa7ZHCrjhtTvVW5uTk7nDpQDgQdfDBdbivtBU9bWcxnkFWZ7txr",
  "key9": "44r525HP1GC5fPycGEQzS4qDL2KJDgebtH5fjMqA2GoqRpZDUHzT1HkBS93PapQ7d6ipAVRHRg2SgTewgU8JC8vE",
  "key10": "5X6XcVy1FxarU2y8eDLmvDJUcd3JrymNvxEXGg41T2CtCHkyFVGoMMPUzPrxzVBj1svWHT2GU9hoWprN9zGmXmgE",
  "key11": "4PVvoL8TuNFELqofZketSQzjAK1aKRfyatAQWfrb66ERUo4Q7Nt77qwXf7KhUwUkV5E186eTx4FqMRtYGaBjhCit",
  "key12": "P2pB1DPW5RHWyEq4BRbNoWe3uxKM3b8mqCkgDcADfrHtiaAbfknXimPADJGCN1b8vKaLh7K1UCjpVSi3H53sabR",
  "key13": "44n9oFwuQDccCN3hko2E7uR1JXoC8oi6KkBrVcUAnbBjbYogPZQoNMCLrx6n6wfEBJ88E11ojkEvQvVYPeJ5iry7",
  "key14": "sch3iX11GyDSq8qA7HaUyXT95XLjMwy3Z5HSnxKLwEjHdyuYJaYD54WgLH8Q9uT2py4bHJrcPygQnz6dUGR4b1U",
  "key15": "39WvDc3BGtoT9vUUoMYmt7jzVpSX7q2mWx2PKoLAtULxtWx4gu5VdtDDyjmyZa5N2BeVi5rSHeeQq3fqEydAT1h",
  "key16": "34qoAJm97G6heV6vU4EcbBz4i72A5VxpUAdXULRa4GXVxEWBWLXee15BWS6K2JJGAWMifTYf9ZNxTuFdv3dXgUGp",
  "key17": "2XuCPkFayE6N1BG1FL5ccaqfBv4CDpm3ES1mumyuGAEUGgdWCg2TKcEr8tkQdimBWEyEZVaZjVcVZ3vxniF4PQgx",
  "key18": "5HiQgVJcBz2JQ6qSPx3mGg7hLVERiW8VMuh2UBrju7Lk1ogTRBH5UU5gBQWHF9zFh1jTAL6oXea2mToWDVxRm2Ti",
  "key19": "mpUrCh8RJHcgLSmGwrxGaZ97dmPNsaUtETWMGJ6oH4qqBsyp424J688Y96SEgjnhPFDa7coDq2Hyrpur6fdqwaZ",
  "key20": "5GFG3EqMyXUpjsuvsmEAy8aVQp3hLs4AMUdu6pPqZXeFoqZkhaWniof417jEgm6eFZdoGJewbjq4GpcgaKvH7xZT",
  "key21": "4EHVnfPt9U4qeEAZugTfvQ4vuHwGKJVdfwJaTydQ3uGWUD2HdwcMwa8THnF455ZrWb3FJSABNQ6MzuMZsD3ChCBg",
  "key22": "5qsSaFtR4ikvirrdJEeQjj9Hv4ctbQis75u6xJNAUyx837h94cyeHBCZTaNYYJ9UQu7CYQFxDJSdRFcPvbzFbJEy",
  "key23": "EYHdRWtgmhA9JBfXEgLp93aLzymWTsJNbCKqASmMNqV1sPaGirUWp2w3QJYArAxdzkSqXnBZg6vh1q7uKYs13SH",
  "key24": "3s8QuCQEwEXUZw8fU61HfbHdYzHJHhKszXJJtcCEitrM5nYtdynTroopajTMBFEJZP6b2oyqmXXXj62RXLXYWL2u",
  "key25": "31z5wZsHGw1ALCf5ZB12swCCJxt6iwvfB4n1Tn7WMFCbgwZKupj5mHbiz1kEdeL2mxGv3Be1jW2V4QSo7FEfsFTY",
  "key26": "3SnPNV2s1Y1eqzxU7aFUzHJN5YrDxSGErLQJD5bb54ctp9A2g1mQFJ6dTvGAV1tYusee4qzVMKrbu2AJUiHUR34X",
  "key27": "3ZSQfMtY1pR7uWADAVes7pKjaD1zZnNZadckVsR1waLRiRgoLyD2P56A5AWY3nQDdDeK3MmQpexNkE9vtC1s72qJ",
  "key28": "5hGMRXyawypMpW3BNDoSCNhBcft9g59LG9aMRBADCDAbqURq6ZMcsyNwDpepgmjsoDtVJvL9LJpgaxdGWMkQHMG",
  "key29": "3p8nqBN9yd8bwxBeJo5m5erkGARr7vYQtH6yR5r1CZuTwQYDdjGZpnX2EQzmrixoTz83prYLiDsF6FJNt3P7yyib",
  "key30": "5yC3CbHZdxw3Dh6NepvmjJpqWqicoFKXbZLSkHgM6XX22yvLoJWd7jb2KkWNH1kbVDvF7tTUZG548dvikhFavhT4",
  "key31": "665qUfr1jN6Mrxo3DgUy1ovZwrmiBAFPMHwkRkjE5AhL6gA5o9v4if4G5vcpwSkVDP3Pdesy67rWiqUhHazdecNG"
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
