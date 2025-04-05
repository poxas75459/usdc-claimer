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
    "4f3ywrHxFciNujq1xSxCJksDYxtosQxBKVwh8sCQitPypGqXeg2d3ycVmzGDbUuh9gVVDCpbP4QmVBcB1tm2NjKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45qh2v44xkFinPK5u3xmaQadiJc7gXFca3P19PTfmQegbixDT5h1pPax6V7dtbyN1kNXm1ERr7dx1zMwDEfiCLSQ",
  "key1": "3tGVLHVZZfKYzFsosV1jX3bVWSA1yMujViSrGUuk7U2RDdiUhQurfene5z2jKgK2YNZe9Y8jCowB51RQv5JvPDti",
  "key2": "5wtQndUqMimuoryvNwD4yx2otGAmhQ7TAu62kbcYWVvGc325d1rCNv4DjZjD1WwH4hxPXYWCbaYAtdrDx5cbKKnN",
  "key3": "w4JCFTbNUBqPfduufXPnoQpJDGkTPjfxuKjQ1MKkZpaiDq9PRV3REVenQ2JLkbCRHrz8uPf9uKP3n7RaDAky7j3",
  "key4": "2zQnN1Tjazr8YF5KbSALcGWhkKr8szxuv63hVt1wewa8dYysnDGRs1rNZjvhxmauAqgXm41GHBHPzedauyB67HPu",
  "key5": "5C1iE9R8xMzFGvRmAfunAPJgXPC6W3bhz19tQRNwzB7o1iNDNEo1a6dCS5ekGFuJCrjRrfnVJjtUhEnHPbyStdpp",
  "key6": "5i8WM6SxzJo6kX5M47NKdjNwyATvTUX5ZpHCAjnE1pHBqcQJSUKXBmG7XFQYzWK4o591wBBXVubEUzRdeomZBts1",
  "key7": "4ruwPeGv6RsH6GBkYJ9a1LtZfMv68ktAYWCsp1jWZADAt5rDutfJNmWqeCPrrLNxG1iAtYdJ2rptqQ91SJSrV8jc",
  "key8": "rQgzD7bS28FgUvn3tX32Nxi1fy1VbmF6hJy5qRmi8mhTZNxpNWtaS8kVjBLKayJXPvN7yUrnux5DyPr88ZLpyHH",
  "key9": "2uVcM3EeakEwUNG6LMsFNTREvYYJqvyHaNCygpxeiN8gDTdyZYFgjd7zTbdm7wWWwwVj9CBtVCxXTftF8Xd8poq1",
  "key10": "5KNJHNhQnbpjdNjgxN3tD72jW8RDNeom4VEe1khJHyoUuNnFVFrW2ECSaMirq6dsEycL6gMyN7C4edz33spHeR6c",
  "key11": "54H1enQqgcZoefXw86LruNnPVPY2Kmo5AHPrxT146icab9mKYueK2mG7cDgN4vcUHKKhkMCn9ZtctjtLdPDaVrAh",
  "key12": "5QQsohg78ADAqk1AnofAgoc5dNqJBe3S4BPLei1WuykRibRgEAbBDdqfZjwzJpzUmJQt8H93sb4ZMgkBLLUGWq6F",
  "key13": "2fb4y9r6tew85EkDJVpHL5Cs2sVWCXx8RiiC9RpG2jon47QEcVhwnNSwzE6YQhuypbaS7kgiffZkdJ8G7nUzLXZh",
  "key14": "4BmiYQmvQ7EfbvZ3QXHmbfgK6MNyYhmxiLBVr8gmfuKQX4zA7f2X3ToLEQaa9hFcyH4LEodLduVom6EC8T4HmCeA",
  "key15": "4ywz9Mi93H86SHqxprYAbjG2twdbf5GqabX4imZzxPbNhQjM8YZoxzCY3ZxaXkWMr9TPrHPBPG9nEoxyyhFcBL1K",
  "key16": "So5n2CQkr4zwFPXYfXP4JyuQrHNsMaBpT4UhbXKtibxrgLwjiJEpSBLBSKHZv6a7ti9m9jJy5cDAamuPVjhtkud",
  "key17": "4iH6aYFqsDxJDMni4hjEtfiDxxTzFgnUotyvL4Qfyc1yvVV2PErFyBtuhBTnn8CzvbD2kRDNyz8qg4tTbjUowmZH",
  "key18": "5b5LjvybyaqZr6wBqQYnMbC71NuszSPRMJ9KX4V9n3sUwrSAWjCbq6pLeMToafe58Cn9Rag5tsWST8fFETWE8sys",
  "key19": "37YqpX2HE4BKkBzZ7Srr8nptvMZdSPXnxM5w6PSTqsfF2n8JrkJNB4hJpr3S66KUwQD28WpJ4KJqUR9SWsWDxsc8",
  "key20": "MLUyZGLueXnKVBxUz4DBMfngtKB1RnkfKjxey55H6GcMFjYWshh7tRm1p9EYFbNpwP7AfAUQVKecYfgxvptUXpn",
  "key21": "2AzJxu7qhhaKLL69BeTTyyRcnV7kxCt3DLh941bvwSgbGLcZA5yZVjkDxsMJnnFugZWpn6a8rw2ZESUwc2GnMpgr",
  "key22": "41hrM7Rw47DjyFVKVrLk9oUuwSopFUTDJbDoaG61z37FY2KDCXyrCCseb4Ufkhsc4v8AzeBsJ9EH9GEw4HxxET8T",
  "key23": "5ufNscjaw2qVD5rAiyocbCVwzLutV65bvG74XYNdZfjYekyut9WGsJJtfBUUSHAfgyhdfx4YUfyrpeWPs93QNQ5R",
  "key24": "3cpFgxeZHgaoLfxrFMoE2sJYZABoMxSrLZtCe4vDc7wLpo694rkY6N1PDCc6JMdZP4QQ48HEnK13ym6tSi3uZb4M",
  "key25": "4wur77e4finqPkJuFGz2mJYhGNYuBZ11rKoEaBxayg1D9B8ByHAFNSLjF6EpSEyJDMJLP13AgVQwVWwYxmG5HM9C",
  "key26": "5T1MUEuTaVU3wu2fU47DttN4iMRH5azFpbjpYhD4BYFiTT29WoK1wDaWbGCxtLzuNaaeJYBv6iTkfP3oWB2CHphY",
  "key27": "mCDzPzdqJZt7qqdeqiYUwipBCUYU8DCusmsoGXZeiLUwBFL9T7fdtGmupstjSpdL3r1T5oCpuHH8jDtNNmwPGNp",
  "key28": "2pmKRwaypZJPXdwxLEmx44a5mSjmd2ZcdmrZuaohwEdHLiq7L7VBMGgboT6Fe2LPrxeMiiykyRTWZqtJXt6zzdbm",
  "key29": "439LYpwANAiScNRVaG2T9nka5WzqahqF6zxMyFXbaXqSFLFW5bfRNoMSbRA5YX9DxZUdXwKZvySBnXsFgQdGHGzg"
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
