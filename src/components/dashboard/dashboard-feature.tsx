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
    "3yxxeo6RWJkakgwFnUrVid82ZDhoy2CbvVowZvUK13N31ubNLEqF7R7Q4mkf569c9sYZhYD596G3hgAjm4s9GFeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zw5gFo6oBgAXoyTmVyq35hucbtbZK66memV2gThyHDF52vxH3HWryU4mwgbXqLmgqq3LFAyR2557y5YLV49hPJg",
  "key1": "2yEujzfBmVmSv8Tk5sMCdavR4SxdQuRrdGbUpt2XnhR9197vBFr7S1zUcGnPDsnig74V7yR8MxekbDxPgSLoZrm4",
  "key2": "5oCmvztBRq1LwB3WyYL7fMXAUwR4NtnYzLkCKKMde5gsQfTMznbd6gjgGspibtyCjkrXrzYUEyQRvGYtVB4hwPEV",
  "key3": "7WRAQNbyBN2k42heAvUTwxRWiG1iZofZSgSFYshAQr18zW3E9v9qfswm3AsyGDaTAhouB9VZCqjQK3V1gmDpLv5",
  "key4": "55FsiwkU2MZpkQ3fFVEJA42jcSvctGfyuMmSfRckCNTNaWPwYBHFyfnJdRCtwdzpprHLA3fBz9L6KoQbY8h9sNj5",
  "key5": "kAEMN7EhTTHrxSVpJUHn82BKpfLey4UdE1WFuyoBZzbLQMtdmt33KrqF5MMJC4WSoBUonStKL7i1RL59hHzfLJH",
  "key6": "Xn56uTcxazY6Gh7kcbhNaCDbsju59XYCKLkadEUPgEYsi8pdVFBaTGkT141hzdZFVUBZ2vSjJ18kXmypdmDoF9q",
  "key7": "47daFKtdeoUEF4kZ8MYBpc8cLEdCd18J93pTbeJareadrLocUoPEJ5k3GHpWb95WKvGNcsbCcWD3Byho4jHqpQKA",
  "key8": "26kChg4ndfHqUCeGPpazqHbSXjP3qTahomwBRucKTDFbUXGES1YRrBcChHbFmhP5uaX2rB8oCk9Y21bDmhvdjcBN",
  "key9": "3sivKFjsRfEVtXQfsJAsK73oxissmkfZDzQyzDoUERvb747aKeoaEYLZwmQBCchgPQ5KT3nL6b62zmSnGKxUXr3t",
  "key10": "3fXfR7nxADUDnt2buCE4hU6bpAuBTF2nCoYZfDegAqtHkoHMDsgXyExj5VXVPsSe1dtqtPT8ASPzvvB5DgFnQHff",
  "key11": "4AZaBR2EhXrTkBV7gCqrhRBRMWRw9xw4UxJHDSXuaM4fNhSphWDuHpAwgG1mBdQ5soCJRoTSR21HxSE7tjCjdVqV",
  "key12": "3Ec5NnKX2Ne8mBp8jkvepDmE9pYBvcSvoY7FJnHnNguSZjQxy5Cr1P1JZ6F9R5bdTeLx8LZ4gtLuEA3JdzKJFY2g",
  "key13": "ywR8qaTKJhDgJJs74MJHqin8gYszzGfEhS3mvRmK9eXWCb65UZ9WYEwt8K4QUiY7Z5mFn72HftsfWBVKKoG7cdP",
  "key14": "4aCKbDpqLLPAJDc7ZHHbKaZ72F2szEQ4oGjcUWvYYoWUCqZEdShW3xyvroRtYN7Wqqv2U6rDGLiJaP2f54ZDGhfk",
  "key15": "5wE26AmXJRUX4mSTqVGQjXMK6dKDW3GgHQx4E8dgbgdEcURMJd95Cmf4ZnS9irorR5buqVWU4QPja9U4jtfCgqeh",
  "key16": "3YKqEhq3ovDaGYZBtBKBvApHp9Swiij5JaeCfVWugioJEs9DqkzQ3bitYuZGQcmz1cgLDwuBoMVt4hjY1LvCvGaJ",
  "key17": "2tXibv5CFPviWGeXBdKwtDfomYbBMxqGzcMJNCxHLftQLBUCfx8SESrQa6bLMGrNVZ6qzXiyKgXDn4m6AwtAeth3",
  "key18": "F3F9spdQ1KqAuqE7mJVXGH6q9xUe4rnNqmsFwCY7jpG3SC4UtqKmvQkX8D2JXLBdCaGyu19z8nnQ4UFkm1q2QD3",
  "key19": "Lk8UXH6vBJkEHinXASDumLCa5oSUQA86ffPmaMuSe24fwzQwRx3e9bC5jhNPyPXmtyup21i6u2SBPuh4iwTFue7",
  "key20": "4tox42LPB4ncg6f5mLBb47TU8Ng3SciM1pTsG43h1UAsvG1Vjyv7h5kWhDBjJo6sd6ukX1CuX7JqVQqZb8X6KdmB",
  "key21": "3ueiYe2LuEgHqQCCxMd4bGA3rNRYcQegwniMQYXeiDdNmZmGbs6xyChWj1GYp4eW7zc7oXDJj1q8wcJsTzzXoGct",
  "key22": "4KXWdKHf7aWq7quDNRUyYErpKxbkfx2jGdhcZz1G8RMjJtke8iUEyU8yhcRm5qasNdmJ5ALu96tYzY1WfMdmDXQo",
  "key23": "DbhEsGCjp4rEpiMqb8R9X4Ywg816aVY5Rf55LzmoWJ1fWsEX5iSMaCJbBMsso7fxtt3qHS8xLrVRTdS9fPj4Hqd",
  "key24": "5PDWoiTdJXA9ubGkcQbLUc2cxmE8teX3aP8mUkF2QfUwz5tW954khqCRQiJ7k7MufepVUuwMxYrz4ekL26CiEQBv",
  "key25": "4WquprdQcVK1ZLwcLMGavonRUuz2eLR18PtCUNPeV64WPeRJPtRRC2CMjx5H5NqG17LNpKirhyrcY2vKGV78zHKN",
  "key26": "5jP7trc9qMGdauUhc81osVpsJbXTNdYc65rhH8K2TV3oKouvkG6McYmjtRqxeBxa9M8ckQfKCczCzS2Xiz3Vr6e3",
  "key27": "AL7i9tPZCoWmQar2YLE9SnWBnjfP1yWf3R2PTRbgN21r16iK3EhTDxS8BDyTSjCcPeFyC4YPZCZmb2VUUrBBUmm",
  "key28": "36Z5WpbLjSHLuQ1qHBEXRjDsgJ96R7TvSWAUvw3Us7fKaR27K84jG4yLe4AB8kT5cEQd7RqbiWSnGcPZjaPd3Fyt",
  "key29": "2LyCp7iwNVtrxiwsVkupTaekXvtTTP2nwt2oTo6gBH4ZHcZTRHBH44nAmBTszP6Ls1TiUrn4eFM7i69PrwKvSxJy",
  "key30": "dygv8FrrpkBtzA9UaznKrcjnRaSYcSPTfo4gPLacPKiD8DnPVYuRufJc8DP52nWHgUhE4mcftP3bvWeRuG5u2RY",
  "key31": "5MoQ68jFpusnBwCcVYUrjw2BVw1PE9BURe9WwZCUbp9v1WcGCComj68M4pJP1z9MaE8E2LER6QWE28ZDkwogRnZA",
  "key32": "v6nyHbnTEiTwNGSfVqTTKLQGequzM6uy1YTz6MGxztDS4FkFuiEDmEpcS9FKNAeZFygx1GptY6DiGg25gie1Fez",
  "key33": "4gj1URu7FvJoJUmGvhFqngFwTmpw8D1JoLD61qp2gunC6MWDecdWEu59SpyV9RpK5CQ18oAEcrGLkfqjxdzwhhQL",
  "key34": "46VDaQyNxKfFcALV8q3QxALbJhqMVJqBHLUvSnK8ZDvVMjsR4n6nRTv55GJiFNVB8dZDQVqDWpokk9uxHohSSieR"
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
