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
    "2T3CkzBsrdSakV1amrQuAnYScQ3TnG9S4nK8YkRHnaN7BWJ7k7urzzbVhW99FrVgn2AisEj9noB9mWkUdYdZXn6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybLP3DfVnA9uYQHaquks2TAL9vveYzk6jt1eeFebC2pFw2HxjPayNUyGki2MC3ZfnTBu2unpSnBwpGihYNpeeb2",
  "key1": "2443Mj8gJGGJnuj3G1GSyY2DTKBbQcfVjrU77ew6H5RKTRHQGsuxxu5JKvnDhTeunqQ5hmtbE7QMUnqhRJTXbNad",
  "key2": "4qF6XcTcw7DkKTpMse42gy9d72pTWf5oRDYb1ubzvKAeLbqAgBEsyaTTFs6ahvDR5Spz8oUSwGiULVHUrephbefy",
  "key3": "5wfqpdL8zykc8GMt2bQcAoXp3raMrrnJBqk6BFkoCDE1jFVmAwuVcvLUoouzbaesG9JaYsoHRju2WURsG52toVrh",
  "key4": "ZutTkzsSiHyEAoq14x3UshFtdgfCkjAkYiN4z8ayQWPFkKNrn6dSH3rDysHKcFwy2N8dStP6sXNQWGyB8xTaViz",
  "key5": "4iYutM5k56ZYEzy8T4ecmuTY1JBCz5hJjR8h4yCGcnw1ucHVFrYiJChYuPeDf9qLZipa2GhgM66QU3dkG7RbCLtD",
  "key6": "5FvzvtuLd3L34kyVP9bBMnESNriYarRyTuoSFP1hDj47cFY34o7dHfogBiPfsoUjcVL3GfJirUYFhaDmi8QNaZdN",
  "key7": "52PeuKPtGw2jGmQKNsxTj8emZCAYpqxgWMZ7GD4TKkFF22Yk5GboUYgJnPTTHMtnnXb5T398yHtkDfNhN1Qr95wF",
  "key8": "3uFc9iBCh8vSJm8AVTeqhBVnzdthHttXyvNubsDeX13wjTfLsQy4uFvvqiNDwPobqqaht6HCoj5ZHia4apCVzd2B",
  "key9": "5z6aeYmwUDnp1Wkm2x8E2bLrck3N1k1VsZ4S5ptFk29NeSQBkTC8Gwrn5tbmyqDH4rDyeGyCkBSRL4Sq3omtVaKX",
  "key10": "57QT2uxiQEYqpgdf8HysTyEJYnU1mss66oHJBSv9rVpBJW3UstDjdyFefJRsNQDyi9q1eYj3PKzAUUUmktoCqbpR",
  "key11": "2Bocp5HdebKptfFqgJ3JHDifWVvDH5haSRsadUj6sA3TyS1hvvb4cZCzaUyZxPCwGseuwatriMTTvjZkrRQFfGFT",
  "key12": "2tDSAhnmRf14wd1QgC8EDvaUN5HTLCZLoGfz4kCA2h5mWrUYKANRALzv74bQzCG6K9W7TNRgPmeS8bT8PZ7NsBFN",
  "key13": "2UoWhUzBvERDPsQQHpTNX7cR4reTsQuSxCWb4neqAakCJySymqGHSU4VxxUueGRsXcK6YRckivpEQA8H7kqDbWwP",
  "key14": "42eDZCWkXtdxCJV8vyevUb9xQNMABBErtLxDUKSwqWM9eQD64W98oeQDx8SvjCQr22S9Bj4VFKyRA55iRgTm8G4x",
  "key15": "5YpiLEpShhgL3a6VFBW78eR3RsAj3CEv1EPNFSgu2JXmR85x43cFznCL92WGViXLodPENZuFQrZ4rmWApj56CLfi",
  "key16": "5UH6EBkDnEVJZxwFJchdW83d1P9egVXqCyvkQf7XNiJQNXxCZgDRDcWXkGRfpTi8xgUNAzNQ5Ev8fK9nnYpLjxwG",
  "key17": "QY32wZGf7q5VKjYYQR9Bn1TLsRRMw3NuDK781W1GFxRyeno78X96DH4RocyCyVxsD2DBaacHC73nfcwJM3YCAG9",
  "key18": "2sLT728noqr4JcwpbJFpPPGcqeBSqfDGvQTXM6ikyiwFsRD8Y6W4m1tkavY2jthgV6pzRxQ6B9jdsSBnzG5K21vo",
  "key19": "337fRAark3G5d3ktLNmvtVChL3cgqHwd8AzpWaNboitUatZZqTRYYXmiw77vCoUMDyNcjQVAuTEkvMXG5NXVtE9m",
  "key20": "3AHZAEeAQJJE24NK4GQ6pknUWrhHLHhqbJsfReBuqotiCjhucgFWbfxMdjnrigqTH8kood8qCcMAwvmc549eyxQE",
  "key21": "4NNmb2kWQFVTdecFSkTZPdy3mDH3XQWxV8FVRmakLFaWX6ZZDq6ACbwWLUZBiUZQYsVvsEvg5Sm4L7rJ6LRCV8f4",
  "key22": "v1TgknyS6fMUh9QuMkVHmf6E9XZZpiBGRij9Vx6SdtzKf1Dzuwim5ueinX4KeUUhdr7hnFNk8hmBDWLdtxkHhPh",
  "key23": "MPhG7BLPA9GAB9Hrxb3na2aGEnhRqHxmmrq9gegHoNG8h367qQmVtJ7GB5nMCwajGp7Jk6mTyw5bCH7peJHhNjE",
  "key24": "52WkCvAWmcivHSiQphUeJE855PSREN9Sd5ANx8iAj8NG2jZLCzSgYe3Fd7qUh9juhFY1xcLo76aJA3f5uKNF1aay",
  "key25": "2qhtmYNNQ94gQRrYo9fdS2F6nXV538zqaAWBqnicvdRLV3fgBDmAhMkM3rXkAr63DcSHpGkZZDHZzksmeHWSKXBp",
  "key26": "bhBxU8bj9N48VmQwkBTCmExu5x43kSi5kP7cbkTtLmoaXdFMURiMFAYLvFRS3fGC4sn5pey8QjQq8B4kpu2u1Zf",
  "key27": "5yc4LV7ZGKguWVGiPrzzgRVqpH5p3UM5tS5hHLGAYmUm7q9pTLEJhA1BzMViQJPcVG1n5wBeK4hzY1yMtUyC32X7",
  "key28": "59o9qSPQ3Et2iT2TqDV21WMx6VB1a85uivhXfWuTt5kR9hSf3iVTqtNF3DUUvLyGTDUaPQg5tfeaCEqEp8DXb9ET",
  "key29": "v4KxUeqWnj2LX3QVixu5f9VvVdaaUeyeTut1fCUYfRgovEhi6fsoZsH8h7Byhkm6m4QkX8GpPZzzvKg6BJARFau",
  "key30": "gKA73vDBG2PtrhtPGZSU4BwrkpRhWpD1nfCEgT7c3DRidHWr4xfGapWxBbGA141vGmJwLitoyx6z1YipAw9QuG4",
  "key31": "Rzx5mYuGPVFnVAG5nS3DLPdbozm3MCeakPniNdd4oZjvBZfh1uWfa3q1QbY4qdFxMjFddgZV5Bm3Vc3W2QxTfSW",
  "key32": "4omLDJvc3p2857RCwVmuJL9LLqhhvj4BerdAY7EVPgb6mos1wbpSkgGEWpqjSxBSsXGc4RGceKmw4ohPJpmDfb3E",
  "key33": "4UY7A3oYynajTv4gG8YmGSk5cuYPkpwvccoxFP5B4FDc1EJM4RyvmabCCTQAbFPZzd9do82VyFAzqYULjRUgCJLR",
  "key34": "5LQGJTAKwj9fzFhh3fxhN8ykVhhMrGGA4pZuPzbzidzTUvVNyXzGm3nnA8nYt5HpPDHPnVKfQ2PAmQ69x8D64BTX",
  "key35": "43m3UKxjvVrrjWTEUAMtoJ6xkPEJABQGNGkDoAt8PFL6jzSw8pTEhz159fgtB6YnqfcPN3MnuBW8zPrvwN8xUtP1",
  "key36": "55wPZ66XCnEA9JcdSwBfbdFdAzuxf8bsefpoEBscV3wXAxSFBaVPWjXVr3PKcukjhwtogi39wmNCqpRU7WAzhckF",
  "key37": "4oNAjionCHD2qMstca63dTy9UzHzUerba3Sj7FomNvyyhSmjCdAZS6KuopsEe1CMsB5u3quo9S733bMpBewZxr16",
  "key38": "JZrv4r13z7swYsQiEW9rYPGma2uMXzJXtDJ6e1GPnk5c7TBcBUYwoZvjLhjLLyBnYNZBnxxQgpSCeDsJk1o6CTX",
  "key39": "sexkmvWt5La2EQZhScqKZmYoJ8togDDj9GZJWW3CkAC18AGsjfgRMFGyYgGJmTDWBaAZ3MPwHj4amx1RPENB3WT",
  "key40": "3xinhMgQ7275m7orzZAm5xzRgVJt7UEtadaYdYLhAaiEjZTF9Jm7tzUTwgnyWKr7KkA29RNWYyhG3MUvWcjk4edB",
  "key41": "5dYQRLgW4mAnKxdCHoJksKnnhTVPATcnscjM5SuaL2jkKncahu2xN4mdT8JUdZxS8VgLmr3oje8TmJbgDC2EkKSB",
  "key42": "4MYa2geT2TTB5ZwRQKHQWJBaAmPtCLSR9AMyiydzAcBp6Z3zb6mFu9nT574kCY9ouzsZHjyf7wuopXbF1DFdpugN",
  "key43": "5H5SEXC2XPpypeSTBRzLs774cJECFgjZNod6xhsPoHM9bnWp7Y2XZyUi3boMu6vGExKC2WainXRVU5Cu9fJNXb3V",
  "key44": "BnJZArZtkx9zJtZzNijUz3bq4acbWkkD9j7YD2Ljx2FkKUuSTA8wDfU79r7SyKtRLt28vEFV9Auj8XdyVJugdH3",
  "key45": "3BK9X51jvsKKwMsmGa8n5c4hpPiwFmTigs8Z8KYuudG6QGQ5cT2t3Q4AHFgyAiwh4e8RJXmiMGDLpLvre5yehA8s",
  "key46": "8KPvEgKwx2RQ6ydLncLLxgW7dpGciBHfvyNhfgpAB6bAxPzp9j1MpBEsYDtNfscQRbi2bWLDDnxXRNr6C72qh3X",
  "key47": "JSD5JhvuqSLqUyFwPFTn1LnmaXG29mmVt3URUigqzEcnLrpQA5njEkYPrvaUppm8oNQrzkMMkaEbpBkrsQBfcUt"
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
