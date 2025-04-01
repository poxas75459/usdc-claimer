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
    "3m6RzEiWN452LbwC5vmkoUtwcHmRWTxmxDjr8cMj7gjuM63BG5yWn7thCSnJcPGtvrbmtMGq6tiBU14GnG4AXjif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BRh8LrSLyekNNGahiqBoLD9RCFdZnBtJehJrCDrZeajKXUex3X6GfLqcWDrFhSR8tQdVpe78SuA9YjgEQwbnVRz",
  "key1": "2pRjuJF55Ea9YghKVrt1UEbESvBNFejjXNiu9hKGRgx1KoJn94EjzqMj2wut6yZ9ejj7peoMnSEpmxxumoyZc8cW",
  "key2": "3SJEFkrSu7MN5My9n4sqVqcvo4753MHps2Mm8XJXgP66sZyfd6JLfaq8gBxvSSbPpCNa4QCRs2ffbc2K7iVmMwPy",
  "key3": "3yeT51Wm2Qkn8tzb7v9A6UesbvZShxha9zYmuDqrPAjATMe7sKPaCEYs675SRdb2JAcPnb2r7RRTbMe4BaCzXXHP",
  "key4": "4McZ4pPxn8grJUkXz3FBBwD6VnGTdyt2twzeUd6RLArPqQcqJ4ke469CB9ApfyKSYbZ4Bb55Lrd4Kf8WNjvtofbG",
  "key5": "2sFB5CLkjT9c8Xyg1BKqpnuLMU2bEHKdkKDZpYSotgQKDWW7Lz925i28hr1BYLMCmWZQ1kSgdFcv1g2E8MSp8Qbc",
  "key6": "5CzAX6or4wm7icqbebgxuiwNRsMz8GS6FXYNESdi42H9ttTLQQB7rmW2mBnyG7rmBUMKZdz3jmREDJmsekCzdPNf",
  "key7": "41RkikdZHSv88T68oBdi2AUEsgbNZ9KyMsXi5AB5sfca7EAjeyB3J9piHvEBFJWV61uyvYDsqA9Kma4fLsFGTLsi",
  "key8": "58CyY3TwJs1ZnijR5kPPL4duNvgkUHB5gRaiwW1MuT7yfxG3aRnyhxWdxeQrkZgiKWn8zuzsRPXqmp8Le53f7WGA",
  "key9": "3eJPnGUkvEEdA3i4wsFTFyrFGbrvkATkTdsSCZc4jfdVU2aTiuDkmn33PchZZtZTz4LeLkYRp88pUHdCYNdi3m6T",
  "key10": "61qGSV3ni51htK6HTg5BF9gCXVuJgZeDd3p6m4jk7xeBzS6N3roMctM1DAkLJNxuZ4h7QtfcaCyBtHnYP2aqPQBe",
  "key11": "4VtxPifre6z81Psau44tBjpv2SqSvyGFBxmvNnJbMnzXYo1PFVmSnoyqL6MU298TsRQdFMoLF1b5y74oCQaqQnAC",
  "key12": "28o4dK5v8iCQtKBa8CvEue9Vsn7t6UcHpF6QfZrD5vvr54jHrEFqnRnjEPjitBxrk2SkV4g9bawEHSnFmXRvbsyz",
  "key13": "2CqMKbpGuh2EH3d1tz7kYiyaHmUuUuXFr6KSGXqTWUxJYG93eQdHQivaz9zytdeuMGNzHHAtR8gG5gWNWniBhGdC",
  "key14": "61hi4QQzNWZ9FDKAh7NyATtoFE66BpQeJyaFfFDNJ5sZSYjZvm6k1WjucyFnE7cKv556TgfqHmP2VReyR3s3Tuu6",
  "key15": "4NZJGpckJvLZ4Yp3f6AD62vTf3Gqj6cia4SymqxBQcKqdbxH1AiVW6X5mCt2eiEhG5yz4pTzGtQjFe9jdiA6fMEL",
  "key16": "hzdghyLH3Zv3r5rEVXSZj2JByq72Sf2v6ApB4TqkYwxKeCbmui6fTTEgT7JL2PxmnwHJzHqEr2okFG6aRqzt8rH",
  "key17": "3BVA7b8VS8p6vy5Sn2DfAkJeAakYu3i9wwfTRgUtc8kAzwypmwFxvmY3FdHcnSTGcFvrHPgZSpjSQTbDK8J73CRQ",
  "key18": "5DZ6jc15fDatePPZV7Tzy3UbdafMwWmu4B3qjocRYwzR7YfnouopwuNzbM2rDswoSCgxuPFHwW1iJTNcZNcKrNTf",
  "key19": "48sne8VT3spa65xzRLGhYYv5DsA3NHwgJ7ULkRFbjU1PXQvRdeEoYxdiiRtosiwXtgVxdgoSEpMsQ3bZ2iYkjfwF",
  "key20": "3XsWPstjMXjc3zkm8AP4VKawNU6sMUj8miC2PP3gnRpKLe52dwHYC5hnSy1Cu2JxuYrRjS79Aqbc2ti7PqKX3bTb",
  "key21": "5qYmPaAoZL3pXDtcKsqGvfyxTj2p2VuYNpXj4Rq6L6iCjoP1Sh6Xj2ccBZZKgNirt9BrX33me2wYRr4fainjdZ89",
  "key22": "3P6B4ae11JirBrthodLkv2euywsX1XWVTQikPTGhU29XJKw4marb3q5xXt8nbvLL5BgTd2nfeWXiKTGEnVYo2jjT",
  "key23": "ys8LJ1PoGE7AV4cBvST4wZHx77PaFDe1C9MAeD5VR94JLGKLEumamd252SzLEVWezXxmeT36rxHvqPHVH1QsJS4",
  "key24": "5GwvuFWynfB8dn8yRnd3dKANoS936pkE3Y5mtgmWw3ofhAVDoRNoXkBWNighKLugx8AEx1xSniz3BkTiRdf4fRDq",
  "key25": "65BMk9Q9KMdFbBD9D1nftBASHeU7RDnw8AgFrBaXVrFjRX2Q1R8ktJDUaTH8QSgpxDxrkBvTMMSJ7ZZPWbzjGkDo",
  "key26": "357SxTxnLwzP1vDWe35mMRri2urcaAYqgBNKKRhrV8kbmAVGCzQjUCVCGUTWCrs5SQ8nQW87HMo9qja5vf8DA6VQ",
  "key27": "3Jam6UCAeDJ9FfSuxtXuBHwMCa61paAExBD9759DuavXGdPi6E1q4f1tYiWsM494Qk94kCKsyjyD7BWnZoUqbWbj",
  "key28": "vTie15txuKG4uBwM18qt5uAAHJ5bhRXz1ocbhC8XfcqnHb1m2wixooPH5v3KbijNYLqVscrtpyaizRoaLFP2YS2",
  "key29": "2HCQmgnBJSPddfrxb3Wc3Khn5yy7w9ymrd4ytLhnib4rNEdGGVatmQHSua9VBDqozNbg4GEb7FemL2TtkoucXHPq",
  "key30": "3Wc4QdayEsGVJf6XcKirLVyhkbZ8i12L1x3WZ5P6kNWd82NGHrBAQ7FDLK9vWiMBJr64qv7mQC1No1UU179FRHXX",
  "key31": "cxbXNyZAt2uJguXc2DxYCUtiBuSdXBSYpjDQrsnArQf7EqXcbHMAzAQhPaHaYa29WzDQw98KX5oSsPcwZahqSad",
  "key32": "5zFS1c9kkR7eo1ycdkdSBDqtcv2DzTwGS7udCt3Puh2FEjyDD2EYPahCsVaorYtVXezA6BSctx7mhFCYuVPYiT3G",
  "key33": "3HQ7eGuUXRvDrEdDwhMKxzyZs5Hp7wWifygzBzQe18gKNXvMEPVZWKfzBoP7GJMqFevoVmPNtas7KoQxDwgb1qSa",
  "key34": "5ZhsD9mpRDifijxGKFWG5TTiHSYLKfn7YARA4i4Gc3HokDTuPmQHko48pEauPWaSifhxN75LQDEb3wkRNLnDS3eB",
  "key35": "38U2kYGnjRpPp3SDjDgX2qcX9Y571VeTRt985xVjVsQ4ddPXkVaYAfdFumrPRY74GQ4g6ueNWFgmi2jGvczyKY7d",
  "key36": "D6sXa9azz7x4Pv1EuThteoVZagEDt7Ld6fv1CUfaPvkt3KXttaJsMrovHtJLcAuS3MF5R4SPsVJdRXFqkN7bHKG",
  "key37": "2im6Hr9DDKLswzcm96ivwAutHgMVZ1q3KWeUcTuUBWt5Hzy4xeq7S46Wqw18mz31PtMmvuKi5FUuauXigs4badbE",
  "key38": "2exHJtafxA5aBVPwTJMs2kGa2HGGGwATHeCz5BCLTHdaGYinnMpgsqmaaACY8YJsjvGT1ZrmbSwGQF6WGW4sLzQ1",
  "key39": "3moADT4nnrC1XHLqH9dYMeoxWoeynpC9j9uJ1dK2RnMtLMG84QXCC1rn8U1gEiniKeeQGE6YAu7ApjC9Q5tgPj3R",
  "key40": "5VALybwnwj3LaFf9YTAAaLtUVFvHV6Tv8jCK6CmsYPrkTt46MkcoRTns7iqW2UYpf2fTLBdacnn8FbiU9i1n4VTb",
  "key41": "2vSqSBZmMa3kqm8xRYueFG7Pxoit23zF9HJ5hfpynnnKFghU3kQPktgmcBcaRL8hJAaEEs5kWFKg8MMpowoTP57k",
  "key42": "4KoTExpd1YDcteFBKq6u98ixhHUM74zmvHfjpbsE4dNEhe5yEQ72K9VaxLwC5kQSRGTECpfHz1fFihuU59QWKNwq",
  "key43": "4WRjwfEw7xNqiPHLgo56fEsYhgiMoCKU6PYzrYkKRjnyKsUFrKsguoigcaCMyfsUe6SREzpWH9Cy7XYFpNegTQRE",
  "key44": "2iAdBiR7TGfuv45YK4E789d9Zt6MYSKUw6RHQnt1Pjkz3yACQqfnqP4HjGmR1D8TzFSRuUk9rT1xC6bfhhTC1ENx",
  "key45": "2gnrkGgKxSmHg1YAxzYNGQ1yXL4M6tK4toPi3Li7cHMDotdiRsKtbTT8Vnon3rJpZ55USEJdmvXZwnAeHEM7rTZ5",
  "key46": "QdEru6kRciJJGtYoZiFLGYtGmDnF8jXHWagHFhygXAtkXNTVGWi4AwLuVnUv1gX6vjWHkfMxogUEpvvWHAxLvbE",
  "key47": "63BFFMpRwi389VQ7jYbF69NdxM4Xf8vu2gm5iaj43YgkEVa64P6Vooht19uhEvzHGW8rCCQXuQARVqnWhgTDtg2v",
  "key48": "nQeyZu56tjGVjz6YM95nmGpY5AHFnYTU5yMvKhHzoauxc2Y2dyFK3HKkQbEzqHQsXBeNBys31BLRPH2DBZHSHrY"
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
