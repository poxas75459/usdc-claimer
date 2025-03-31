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
    "5ahJxK1ft3RmfboAfdVQBooNC9R3RcAYPbbU58S7YwHttpLeZMWWZXBWbihi9Gx8BCn3y5UbDbHNhMVcm2muwr92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ko2jGeHzpQ1trHYyZmEWcv3agjnmqohhFyfDVEbv1mJp2ZJ3KkRsHUDuapJrcrUCVBsc6XFPJe8y5c2avTC1CDe",
  "key1": "3kNpmtXCpS3TmPxt1fcxRYciYJtVshYMkMKsoKExvRstH7XTNb41eW3gUxXupCbwMqZVctqxMJcJdgFki7onpcJA",
  "key2": "2KJLBMGN6Dh4xwNA3RvLEqruwrt1Ea4X5ow7wy5LMusg3iUGVnzgyqC7QvNm9pc8mTeJwsXoTZyUE6JUyiLzq4Ht",
  "key3": "5AtfnBYYbuMuKi9QDFEveqjC4ZNjr3xPgmLSPsAAvsGe9akUengsGQ7eJ9kXjoSNXrJJxHxhJDS97VubxrUTLk2Y",
  "key4": "3oGWb2kgESSafgaMwkee3Up175hpzLY5dBa77QNXKAqt9fbS3Ms8JfRzgwJ7pg2fyFvKTaBYxQEwJZnSrR5Wxn4j",
  "key5": "UZpPmwSz6RCV4JRkd8DZ1veUMmFo8i7CyfvizWMq79WL3GsDZ89JTr1qcei12JTxWKVigeAZJEnZjpYkqhkAUpM",
  "key6": "4Nz6LzBY8v9PVAgzqRVfbF2AxauZs4bMu3CJ9F5vzqWsC5pVW36HuHkMLp4VgWNN5K3fM2DbgnxWJeQQCnLbp44X",
  "key7": "32xcKWos1cAPtWTCrU48b6gsiCWUi43N2nq5bCqSYFybTLFBbT7o4oaP2KPLUN8aMMjUtjddRuqiELZGipeSKNCs",
  "key8": "5uMuHShSpp6mFpgxsdH1wRcBmxUyvT3hEWeYyzDWbgPy5FFw7i2aqLz99YBcdSPWaVn92VqZ3r9XM3kLST5Yh6de",
  "key9": "Jwf3oJBKW19iRRaCDivnz1avhALdzSXkUVAzb8hR8MsPfBaajGYu6J62vNk8W6GVVWnCFh53EfJXxNTG9rh5kmD",
  "key10": "3SSYTWAyeYsrLB91kbPCQWYUNPtbcAdXHydSoGxzA1tiE8NgkJBBi3EU328g7u8nhxGxAJZ8QVNSZvvbKRCH1Fvk",
  "key11": "3SzqwqLKcMuawZCGa9b9weoeZidNTHD3xCPgd2QsHHjC5bQp1Z8FYfWCZ5zw4QDZY4Uq98KtMPcJo6fkTSiv2GbS",
  "key12": "22D9AW4bv2xrBDE9k7wzmK8YbgdTKsn2ruzJA9deiuuEAqqRgCRNy8qq6Zq7cWUmYonw6PXuxugxaAzMCAKUguLz",
  "key13": "3XoA2QeJkKqbmjhZ42eR66N4jyBabVqjd9yBj4BZ2ajsXV8tb4sBAPtV4iVvFLFs6Jkz5LgAtrDVqchXbDZDnvJu",
  "key14": "579Z6BdRaJ85CweGeqL4DnjoHvx2XNtVsJKShi2V2ibfs8g9TRHX29hRzET4dFnmYmY4aALYn5HR3fGF2JnqUnQj",
  "key15": "442ZJjS3mUL2Wq1zrgjE2LcFwFzcfypFWSUF5XshGvWLBhoEwh8DXznDnydKonMWtq3a9Xi3NtbwLv3xbyfoGgAV",
  "key16": "6HU5Fu7293R1KnFcwtdi1XfkEQmJsRZiJdL2GDE9XuaA4AFSeAQZEUWizhwskLykBfvpTgvsUujt1xZWmcunPwi",
  "key17": "3tHS8emPe42pAupmFbm2t6AFWyecnVj78Qud9wx8f7tRGoBHNWgTaMRZBFFsqd8MzqVfJ2BbdSrwfMExAPB2r2h8",
  "key18": "534yYZYvcFBKZrqf5SpN25mbW1AefykT7gCXAEjT1dBUnFeb5rKmtW8mXcD8StBbMbuF8iGyYnz1X6fT6Nx7BTCX",
  "key19": "52iS6avVz3Y7Ns42CoSqgXpvNaocP1WQjS6SzyXVWxe3Vny1WshPFxhocaQy1gz6ykxwZZEeDBezPtMEizZZ4nbc",
  "key20": "3SDqjMQPkfnpQweWKMxGNLky9WusyqCHHAJsSpoTPrfuXGVa1zrtvpJj5RJtFfLpHoZJGwmRxYdUnkp1Gogi6k2p",
  "key21": "5R5u574rqgQSLaabo8Gc3tph7eyUCzdizci7KohRMfnWUZkifanBAr2vnudxqhRzqtPMf8xqcUFKwitiowQqWsME",
  "key22": "3n5FBe7nqkse6eHtMPCSYB9rz3htzPUeNefhjJCJ6iCUgaXijUkkJ6zwkN7LVew1ue9ujvxZd85hMK2YTxf1NVQF",
  "key23": "4S4SXZf1xBUDYV72MHqXQEJq6gCiwoyMFyVMR1b6nDxcfsQiqT7RSPJ4S1cSd6DTVWc27WFuXHw2gnL1q1cMc7vN",
  "key24": "5XkMEGQswcCW6ZeT2ge1wctpneNKb6WisqwmyM4jAfHg451op7GYsHAxbaQHUTAC4C4sUfYGdHtLSU9yTkdRELE6",
  "key25": "2Gh5FfTYRUNbU7epKsRUP278yzvaa9euRUE1koWdwNwEGkHs2zLaYvezs8gcgnfsb6e4vA4vo5urodhtEemxyh31",
  "key26": "5AC1WFZvvjCWjVTtGTLUvWmFJhkuTSZencBqBSu5oQxk2Ku1K17LsSZsVrm6XkMDMXkQ9DQ9zwwHhZ9PoRjaN9EY",
  "key27": "b1WgXaqCxKqMCPx79TZ2fxv74ibuQ4cXTxJfd5W4p6se5RFMmEwT6uu8wDheP5nAbkSrMSfFYkqAb1sYMjwEKmb",
  "key28": "4uq1bMhwAhQf2MowNkr6KPYu9grziUFqwMEy3F4MjY6fUuyFp9dUAur2gr8NzojzxCw7RsR1asy4qav4wn2U426b"
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
