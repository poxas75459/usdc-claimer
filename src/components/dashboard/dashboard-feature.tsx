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
    "4BbLCWz18UHrcHW9AZhPqZKAoU6G2iR7NQEapLG4GtGiRxFF7oJxyLtjriFdVFy9tpfeZkYs3kXRn2185uunBHhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57D65djTrpEfFwqevN3qG9Ecjia69pdmv9Gf6JoD5bXvRwcTUA72YNGLcNkWUtFUJrq1CqSyTbdrPLL65KWbb4ft",
  "key1": "2hZ8ctQxW6EXRJTcYTfq61thkBw7GnaFWuiy1PnBLw8mzkqKvbrwr523EZEDCvDgWFNJxmFM91BajUZg8s2LNGW2",
  "key2": "R4Xo1mXsqBt1NkuMjYFq3NsQiAM4SgKjCJqtqekYtvLKAga5vQHouVmGJU8ntTkd9TuPPWxZj3X28zBjxT7F2Hg",
  "key3": "4pkYm7i5Hvct8T41yZxV3SQZP7hoYkwpshHs2At71dF6d5rnBUrH1H612cWNDK6nrcztKwJXC1jg6pdAUdoq1MTN",
  "key4": "vHNHuFYgZ3r78kbLUAMd8bzv6un2fwzhRDNKHbcpEhfrYGXG6BYoUFi3M7zj7mnVDpVz7cM2Qb2nZBHKgaUwnnX",
  "key5": "Ae3C7h2r8fNWhXufwFn79XUxEWDahYKrMmX5yayMrCyMHzHWkgb3Xw5ALv8pTz2LuaziwSdc8mtwsQh1BizKNCr",
  "key6": "2U3v561e2w7rkPitxjzpUBHtJq2hqcMQSDiBFtsvX7aFh9zmUEKPEvBfDbAibsJGuqDeJ9CiMDzZXfFPx7NRyp65",
  "key7": "pPUPSysbvWpyByZNXdvuamx7L7CPYjtChdQKer2NVAm5bhveCvCFRrvjCipAycg5dHdjwFK5YE35jc7dZKb3qRs",
  "key8": "4PNN2tmgwLt15VAWAPZKsaa2g1rB5759puD9zdu2vm1mhB1PcWEEWc2Wz8E1z97gVFn8HzYkvYvbT3ce56DJ2wg7",
  "key9": "4zj5q9wA1qnsgNiQ7YsF2KftutrqnnzMhAG6yCU82vmJwvJAzpDBWqW6QVyqL5PY329RfFQxYuqBmFJ1My2y8ENc",
  "key10": "fDzm8K7guHxUS6BpCfGXTH37utPc92KWEBMt75PJzkib8GghJKrXpVRZjXvkuuczN7izmoK21SvcckcsDNuEBTY",
  "key11": "5L3rtnK4swLELWnZKiX8VNw75GHGKztNvhL9qzEg4ra8mm8Fn9aTxYHjB4iYMYCjyuAwrSMGGBHbQ8Lwg4uzLJSv",
  "key12": "2Uwj4VY2GPPDw8QUHVHdHC6sFCyN6FiBnEjbNL2T7qAZ1phgcVz2AztLyagmfzUy1fV4jrwTAvbbq4ynZny9jfjh",
  "key13": "22LTojEoTazbLxYJLcQgcgZR1fA1s6eBWaMCjMUsmY9wrLCSkHmP6GR9LJsTmfSYU2NFC82yxv3TXB8tbox4pD1d",
  "key14": "3wbwA55CkPcvZTAsSnSK1V1MeckBeqTqVM84FpAf3UjnFAFbHQKmWw5GDCzJVmPuyBuv5cQEEYCvZ8iJd4M6w8bN",
  "key15": "3b8pTewtdT5mgyeZJTBd6fgFSxcL2bdv63cA8xaHx7TajEvb7dYtNWjfEgekV2pMM5e9SNjtJcLsJvPFBdcBjzHM",
  "key16": "2WktdR2BuEhBEWfMqv9PmEHbQhWxQid99RBd5JA3rspb2FCysnPCoJkjRAMA4uCRXyWS9DMpLRWbtMUweuMR8W8S",
  "key17": "3t4cFSmHaYuGDHTFz76uM7KvyBA1Vxpwz177wL2AQd3EZ32hfeafLj56E23mXp2LjphGCQwjCbZeAndwCHEuy3j1",
  "key18": "429VqW6j5coqbe4KxXVAqPTNqpiLd7J6kwsXAUMMm3sdKXPbMoeKTmza3NKdPV12vVUVs15YgLKR2qbREYYE39ze",
  "key19": "4aWLysFpoQCxNK8oVJwhug8q1sK9cvi5dcFa2fLd97mYx7unebLWkLDRfBivTaQX4g78hMTX3FERQKVmrJPDuX3g",
  "key20": "3ZVrWtZaVwk7dKwsYtqMgv66BUDRS71SvQ63KJpujc9DTA1fDEMFq6JfDaKwSrqYJBP7hsPrAeJeSRgyAkyErquw",
  "key21": "2GeEnxsiY2yvNiUAseCHR6SSFx1ift5tXrYrMpvsN4mCqrGzBZzwKa5Rgn82EBP7FdWsPV6QxERu8RuuQJN12Usr",
  "key22": "3t95gffyoms2BjYFqV8rzYCQ8QRV82ZRvZBmTNnxsCepYWqMqD81gHGJVptQq9nighC7fXrDdeVo3m7TYfc6gxNK",
  "key23": "2dQUoMrfoGUks3fdeLukWHWYq5LKTc5achaHRH5U3gNrVXTbUFC62SPh5uXE5XqomivzSLLvnJfFxpWHQ9jhbThj",
  "key24": "56cDACtFpntUUQ5AmwByJM7wct6yMbaPuRU6iTe2w8TCeQmrGQN72ba33FNAogH8gUQXUqA4qqXoN46ycEBc8qKi",
  "key25": "3S7QFp4Upqsveh38ngfd5j6MzGo1G4AEbqxjrt4UBc2A6tqVyt9BQLpwLk2kffaMevVeVyG52PksJVssP5fHXwiP",
  "key26": "5SH5VCKWQNcWkE9QDc43LAdUsEnrBzWG85vFfFf4zb1HfaTw4LHFuQD4zZE9imTkg9Vs4U9T8MQwwuBCzcJco2i1",
  "key27": "43yvXdHUwSpHY6vaXp8GBiNrsdVf1U22PvBE1sLAdB5iMyRD7YidNnyujrqFp8HQW4NRocWZjSBscFU1PTgmpzhK",
  "key28": "5bjEkXf91tTxQJZXgiMojh4BVJEXGfkbLQPovYTTDKgYeHiFUvUJRiUPsMdR8gwumEJWTJXEDfpQPZqMajYbXFAx",
  "key29": "bpoppdTABX8MchVNkPLkTie3C9RfNnbLG3KkExMvsHed6BpWdQ94CrRjFodHyVUiHCctATryFzzXFd5cZfgkYeA",
  "key30": "3riTqRxz2VP1szAyVcDUTdM6nbfSFuvjpRPmUZuJTYd5UbtLyXgnrZwdUP9o7rL17YU2P21MgA3GMMNp49nWZcsH",
  "key31": "4ywdwF3sFgPVXpbF4hiM77y6xUUfJpkcPj5DY5cq3qDn3WTENiqBnV6c4X1fDGXnDW2Ch9Uc4Lqam18t1iJhQAH7",
  "key32": "51aEqGf6pKQk9ouPa3ohoGMSUa8EpkL1cvhEKRaFHURSGMShqwYzDqK5L3PdbyZDgM5dSNpjonBmrxo1mAQgCE5N",
  "key33": "3g3VZAXGhsb7pJ4FrfaCPGVijz1ZQyymrGZccHY9gm49QU3dsGPJvdEXk6AHgyAtPeQcKFmssHNs9aL321qdP5Kc",
  "key34": "4gY9is1KyR9iwXhgnZtxAkByjeqTBPu7Fwbt1jZjVqZBAXtZYG91Fs7vLtLnTSyaMhgsg4FoQSfjjTctqNW5CwLR",
  "key35": "3u8Xa4qdJ3oJoBEchJ4on7CTsCV47NN3CbB43cVhviHL1Mr2J2k588DkFYmqqUkieZT1X776UxWi7H5bmFhcCGyK",
  "key36": "K6frBQfKXefK3ZFZNX3Vxwo4UWbU2tRxKJum7RdMVDDSpdFDq997PjZcwAFAvBTCWc14EAwUjv7FT5FodCZqxW5",
  "key37": "4VrYvvFxxsiJ25saiqraLqinNhPDf7EYC2Dr3rnMcLLSitBfYYkGTzyPq1uR1b8zUAt8ebZY2w2YTTLoo4xFV7ZH",
  "key38": "5yLLHebe7rKH4TSCZbLFQFsYb8et9MVAMPfApiEmTHahbbSvCp9oEhy6yzV5hRsvS5DG9QAMyBLKK1VxbyrBfBTP"
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
