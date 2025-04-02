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
    "PemHmCMzy5fiYWRFEGxi5RTdkb3Wo4fpWoMYrrUJHaosPgSWQ73FgRGvJYDKTuwko2YHBcau33J6fn8zA4EFFoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qk5tX1iY3FFU6ycEYA9CFjJQYMGj3xNQDm6AAqE471YsyBgpmtk5g3Z29HogK5MKRdFpG1M9MMLGdae14odtS9G",
  "key1": "5nMEFG4zPURSPYP6NKTjSFs2TUH7Ke5tNJJCh2MPKPcoEMsPmC3kamHJxeVBi1oeob7UyKN586E3Xxot3oYoJbk6",
  "key2": "tzwSbaZZ493LZGeGRGZBwxmeRPCftyJYCKVUFpwd4mPX7dj3uN1UaiRQa9nzB6TuyzjwCk9SG921Zn7f5wDpjHx",
  "key3": "2zUtPqSxa6Y8k6JBXggubY7DeVrxRcw9MKUas64sZEMd6igc9zVjXQ4UGeNUSNWPx21B4MAxftMimZBCqD27b1cH",
  "key4": "Dj1y5uzHXoRJ4hvZASfz2qM7wCUS3uW7xAuDEvSqvmMwVBbfPgyCErg8QvHXsgrDmKihs2Z8tRjJitumhF1wBi3",
  "key5": "4ke9WX2uDBf4XmuDWaJYheir7i2QH9MZUVkJGnN3uh1EYgkJyFnRCmatYY4ZpvW1TBFEXgitGfmJsJrJmEW5KvUu",
  "key6": "SPXayFgHDbEBd1oxkrAgGZHCMtqt4NvqdaDqKS2E3oceSj8R9Yzuk1vqum58jb37gv5gbchxVrmGhhpNAeCke2A",
  "key7": "3ga2vfg28RNQiLjGhLAz8Ucm7hPfG7EDNjo8iS4f4uQPjG5Bus3BSkRtunmtQYuphdfDVtfYEHnr1tpTKQhbYzfC",
  "key8": "vkWYvBEj95eDWuLoAiyAiAUKaAQHzkwK3pfVNfE5gXjaCFde1fjjpd2Y8nJ7SxZ6ZCcuGTwe9yjXfj6PhmBWuEf",
  "key9": "KCKyjYLebxK9txFjEUvNT7H7ii1JqTeyWStvFjPb6uPwXzgt2Y8t97QSHJ56FZYnEZLte6JEvMNZEVGAPcXdYcR",
  "key10": "5LrAinxGPshmh6awjaBXLwstRX8asXU9EipWm6qTLhgHhnpsfkgheMbBqJ78nKkW5Hh6YoqrE3s3vFzvRGwhGQ5q",
  "key11": "4F5D7tLewTHsQ9ftZgt9wEjKSudBAKi6ahde61w1KJPczbDbSme9qcnwpgVjuWUX3kC6MZcDbHKUfRc7zjCVFe7j",
  "key12": "7L1YQ3FaLfBWMKPLG8XRNGqxZwGf4dtVvfGez5wBN2cfqiLEzaMPfk2vbDAYkQRX1PQwMECkxTzThe3179cChDb",
  "key13": "3MDJngKkmCp32hpgiWrJqwY9Q3CoxmUoQv6hFzbC82hPJP7fANBBiKSssLxYou2xRmUdkqCVMqwkUfAQboNdZu37",
  "key14": "2vrqJ3zqMcYCUVfys6LSWE6n1tYuBCaoWR9u45D5gNdWSxt5JoAXGmEGr7xP3EcyEdwCjR9qusdrSZZS1WiNk4k9",
  "key15": "5CmcGik7zKmNBonYoQ4mNHkrC3tdBgLCBvWy3zegBvWPG9ehrmqTkFmEnP4HmKhMjH2wJkMVR5MSscUDk8g35eD4",
  "key16": "5UHTUqWyCgH2LFoNDLdxG6feyryjDe6bhpAkATTFQE3Bc7KJaXo8EPGYBhWwz57VpVCoJAwAtKydNkCKLpRg1Bym",
  "key17": "SRdiXD8CSPDzHFNSYeGWWg5cwbyp7usdKSQvBeYFxuyJnrAXMTxWbkebP1XxExSSvecM1jBad3ELPdbXw6WMqBe",
  "key18": "263D2paLHVH9z3rDnumd6NiZ8DjvDRHYf9qRde3SrUiAu1LvtECyagW1DjHWW3cSCBbzAg5Pjby7exnJG1237qSK",
  "key19": "5BxH2sX6u4kxNCfVbRDZ591bJkw3G2sodVgFEDEJxgaqXu3rUXXLhDDLoo9BgWENxckM6zZawSujSXEVfBbTA929",
  "key20": "2D5c1gS9nNUybNTMDRMdmToqXnCSLKCKG34XTeccCx8BTWvfeKRwaqUrpJLe2tRZx3QAQ8xJKfNqiDUygmRqsW1R",
  "key21": "2t8PAgE23KJpjncRU4Pr7H26DGeymyrTrnC5ZF8gr8zdnio4GsFroRuZT3d5fPsCSLewZ8ARMzMJL8tfra9vwssU",
  "key22": "2iz9bNh6WMKTeD7667mJqAEVuYi579TcYgNE9cbctmb5U5G2YyL3jqryQdRaZnwukVEZzbktt5sfFnNp3K6B7PAP",
  "key23": "67j3K7kmMi7PT6aemgu32bu9ZMBvT11C7rt2iemggVDvEmKAb8Ps2HhREifeZQMVJr1gHnLTJD9QRwtQU4y56knC",
  "key24": "kgmRh72uRibxWQXoWkLXnAw1odto94XHbVexA5ewx31dUPXC99KQHpxfD5ahnRhKeHZmpBU98ambTz22T5ADTMR",
  "key25": "2ohmzc1YPzmDaYMPrjrAAxfVfdebujRJBbFT3EhoxTipfpMAvg1AC5nzLwuVrNdcYfTPb1n2TxPWSMfKASdk31KA",
  "key26": "3jMg3FkD8RLoWT6fPT6n5Ynu57j7EURMQF75jKgDpGPyY3gVBnXJT2UqwQuA85t7bJJHSMTnhLjfFaJ6UfLKfhex",
  "key27": "2EHhENcULJtouW9rpcbCwPHkwyTyuaqCsvTzLK9s4q2CgTtt1UwkwP9SYYKRAyeYrF8rq1DWx9qi3DQzrUSAvSxS",
  "key28": "5txFj67SHqMXPptyBE669kNyoMX7z1Eg6AMKiiQYwdoHWkrXBWtDSoACrgGLsNz8iQqMemyCaKT1nAuocpofGwGt",
  "key29": "4FuuecUMgWXZ8cUfBHB9qgRcWdwtpGtSwrt99mtaHyGTVQhqL8BJTvpt7uMNn7Utc2bDLuNE91ZaWwpPE6cQPc1D",
  "key30": "2s4cqVdsjZu2c1F3MLFHy3TpkMxcjcfcZf2ChUorY336qcmq7YXKLLvatUS8G2QALhjNCcSw2dkHxN7siUdtjDyh",
  "key31": "4QL3PV3dwPrNZdxEqZZXbPNegvgVU4zd23Kx8GWhdcZf73SVZbN55VDmuLvo5yFqexsoYZwHBrsXGFAt1Hh8SABB",
  "key32": "RYhNnuP5s8KwyVjabv4U5i3FkEcsDV82hfEXWfDxLrRM8wQNPwE9cfzP7StSChZtes1YLS4DfQ3s3Fxob7cdG3c",
  "key33": "2Nm4kBJikG72KdEYa2R5mBg337GM2yBvBZyuVkDSWfpokRA5kcpihh9yZBDUPZdm32f9hLUH6Xd7SSsbuPmirnQp",
  "key34": "2iUaFG1YnH4Q7HWtD7q3J7Nmvefxm3btjVDeoMwS2rQQyQMopP1ncyU9kNAZo4AAn5mYxvzWAZHEfjXZWNZgogCd",
  "key35": "4UJbKUQ6kq4MNtWfCSMsw42L5aDFo9xoSNSjwXyDucRky7jQPvFhdZtqAFihHteuxTCgJahekGxmYzwEnbMReWVZ",
  "key36": "4tpwCLjkNeAWPhgwaFnMNttN7FVaBV6KBX9P23Kaqt1LLjkdFXnZCvnutNV4Ctf7S8zKtgnAkg2XqCA4Wer8EpPZ",
  "key37": "3i5NeoGXFYNHErYwZ9gVUbCM4Eysc3HDWTQCd2Jjcs5u2MueoV8hxnpMtV2ryDsFNhqZCd47iHEseTB3rgupQYnL",
  "key38": "4oD5PguteBMoicCZhtyTCVaf2cPFEzjfWGg9VHSsYgUqgwA2VhmXUdaKiscP65F5mG9Q1yF7T5Yxufviswnx4fgQ",
  "key39": "2AHmVjTDyfopnnEbbdUs86KiwVR7cxmsg6NGq1MSy1EizHxaRJjzHAVZM14exVvGFC4jWYSALkSx24jDEa5LZ2sk",
  "key40": "2wB7myemq29G1Wymuwqf73qXuMquuxY8wxYAG5kTTfCMat6Fn1HMXp9mfNcZzfJkPWxH4sUF5nd9UPJ7gxz1X4Mt",
  "key41": "4i9pBnUnPgPbXYjLbekaMpMV8PxvV4gwsPe82VD3zbTuirA2tb1WEgrAQZ2DMGAV9YBJZEPL7CxAFETozvgJFnZk",
  "key42": "5BQ3woZDE3K5Rry6RdXQqH9cBwE93bRQfEeXzz8rZfMBMZ4EKnV9gY5dkJncbR3C9iadmjFBB99TxXGBnZFbYAT4",
  "key43": "12A47oEjpXCribYMd1t5ktA3i3AQ5DnW7rDQMhm6CtpCZB8Hqph4jELsCFibewDo3mZ67kXYbAWB2rbyNvnJbwAS",
  "key44": "iYcXVfFhT6cXVBuoaWJFMhajJUNoGa5T7Syzbwpo3wkiG6baif4P3j1SjoZ6y7oM6n7EovAsfp29CNJVE9tn9Bm",
  "key45": "fsmrFVNcfK6QcdYrHZUvaj3ABVuwbTK6MSaQQwjMCFMjUGzTKiq9HLL9NijX6mSHGQuUTjWhezhF7TAUvjy5Zpw",
  "key46": "392FkeTRmiSk4JTeZiXZYo7RYxR74KfrSj6kCSZ53Qn6aKdirXGkAD3QPBftjn9PWHPoRqF2Wepenf3V1KrMbxLb",
  "key47": "4qeiv7beSdmZ7bHxXb5ddMMTmHdbbA3p1zAzkQST8TtAdie5F6vUiGFPTG2EogKWeqw9yGWGVQCyJKAyUxnUuUg3",
  "key48": "3aoPWZykxhNGCfGqGEXoiZuYVqyVBRd6pvY6kGjCGWSdum3pbj4jiXUffdpCpaEioTTFizb2BycaVAJRmB4Lt4sB",
  "key49": "5sU48KQukoUEjQt6xNfdcSXKate4LADeeY3nZnwVGKCsPzPn6kMGo9rLG9tMqwqWy1cVrZW7sYdP8Y8BVdfLBahv"
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
