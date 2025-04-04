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
    "36KMhV7hN6BzgDsufCwGWYCVWdS3EYTdbBkoe9Y63mMs2QwSdhDanqnFkuod1W2FTtQ9igPnqRAFyLDzZb8EtsfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cijzTQhxqkdfDgVeR2GtcK9pvDvD98rp4ut1o1pLvmcWKgjCHBxHtA82z76drZzYJczzT8t3FN6gpmzxAC1MAqe",
  "key1": "44wZvApMeN6298HQZromvwPaGkS34uYQUFTJBay7SfijksGHMx6XD3WhZR5K95xPtBhvKVuSSnJmvsyart83wtoy",
  "key2": "2hfCw5D4PRByabGjycXAGVBmWM5rHTAvyDP6eudGQQnjGE9whCTJ1d3UbSddaiSuTeEGdhoQSsjviDHVLQowvdBF",
  "key3": "4SYLJQTmFHP46RnByoGuoXmmZJDrmJ9stJVZXuZraGk6j2pP8xvmpJruMhqEwSLy4Ax1vZh8qVKnFfSoXDqQw3aZ",
  "key4": "2US9eSZEMZtkSKax292bNmkjgjcn87GZKB7R1o361BmjNWYh3bnGFcZUMhr5GFkPHjR3Kp7hy6SC8ZfHfw2ztc9f",
  "key5": "2hfmipw41ED3aJTKeFQ3NJM63uHrs34iuN5Sk4gUskEQad3CSPyFzUwh7JHMvf5DiUNiKUDj24a636VGCCGTyoi3",
  "key6": "5LWhHD7AqNmXc41ZxqptmRf8LEy9ftuARXTYahTtHjEztZj7TucCPt4gTo39V3YHX2DiJH6SoJTcJqyzgajEbjNg",
  "key7": "2VBT9aUxpEnDBfxy5ctUMayWzSRe6AtV8aKkjUUo211YfSNR3bvjZ4fTBsDxxWnboMwXgneqSXF1ZyvdH4Kneh2d",
  "key8": "Kq79UkGvo3RqQtK8xTdNsJRzZPxRzR5aZj26YUKdhDtbxSe5NHJAYKcNWdq6Hv1ZArH2RhAFNnP7SXiPDMLpw4H",
  "key9": "4aUCmi7vPyUEzhFSwrjTehyTRbqzGuP6hGGB56Z41uiWEqCZidNWKfPRcnfMqED4mbMSD8Vgn8GxzMjh7NyvYjUH",
  "key10": "4fsd6JfkcgQxuoNpPQh4afWp23VVaxejtL7P6T23Ld3m1ZRPZ5bFt3ehxomfjeSnjVDn47sM9YTEKNdT1wFEFRY3",
  "key11": "CWTWxd2raVTR8azWSvd1LwgRi6FAnZAirfBn8Sef5JtDWRpEKXRR6EM49pKz4ugczpLfcYS157Fro4tAJBiNrUp",
  "key12": "2S8t9AKdr23KutVSLML6LATXx3mcnW3XAbHVh3phqA4thNNs4QXZfhowKnX4bCMBkaHMYD2khowLvbVgT6mCgeiR",
  "key13": "66C8MLJkAXUkGhKGXHeqWgLiLrtBSNPyTQNyERdARijhWvBqPQqNmHcTeujfoJ8pWwnJnPhmdL5fRqo2jp8gT9BH",
  "key14": "41XsJA9hzHGxEMzSMnJTcyffTcKFZjgvtMy8SMbmPDekb8ga6GBUt9Hq2oSQN3uLDNMVKDwmLXrxE4xph3Ur8UW4",
  "key15": "5HXR43dLqf8mdgd99HQE3xmK1KnBvmJkw6D4Qv4CJRJSQwxhMiEdJsH1e4GNGD3qUc58DACf93WKHjy9AKQbTGQB",
  "key16": "2LxcBr5hWTxRDrqipcxZFppqsqnapPw3ZpiKhYtxchmUHitMVan48nTuYkJxn2zkzek4xTmFTJ6Fc3egXSSu38Vn",
  "key17": "5pH7QXgT8WjHEevjqNxhbxy6fLBGZuH7iyPDQ1mcj1V4HGvwFt3RbvLBHj2fzR1pLfpAykJrpBcinXvASsZ4r8f6",
  "key18": "29iyDFaSVC7xPK7RgkyPK5aMTQd5vSVEU67h22cLfpdTpYgSexSr7wnRuKYBjA3Agh7ZAXxinGgEydbcXdQ3PmvB",
  "key19": "3BwgvzNkcTb2vpD5jazHjernstC66aenrkCvTMcfjB9XE8xcMddtoE2V1kRCnt8QhR4ZGYD4GW4wW3syBeRfo7fA",
  "key20": "5LfsdJyQpMx8tGJWbwoxr2kP2rRrWj3pBZGYTq4c2Ae4pMmbexhq527t7RqFKU2prqVzxYpBMhy6daN6JT77zT5k",
  "key21": "5NZRDsxmTnyCQexLc41Au8Qob4dYiR2S9nxf3NPwCzaK6apeDtMhGN9zQ1oi21bQVeDewoAxKZ6xbo3AJsrarPvC",
  "key22": "22DqZbQrGGV5f2ZzpR45hiRHvjgCJHFqi4bUW6Fj3jzmoLWH9nLJ1y1bLmd4aAHDpgJvF5wKHwgzv6EKehTTqbPp",
  "key23": "iCEY2cX9UAXP87bLVhBMTvPgB7J3NRAgXH7EAE78NFKXvFxZGdz99ZbWZVvAcsd825zXEGsWJKEDnWFwqUikV6g",
  "key24": "2rKeq5KUbHs4TD7o1gUvqAgZcFsJaDX8KwjAfrQZ9zwnQBdQWGkWDMR2RiV2ewi9KXR69CXZAZQu8mk4Dpd3UDVq",
  "key25": "4FTcHyiYB9rAqX9xm1bKCF4tEqa2SRjaPeeehELHtZ8pDDN22WueLuoPTyL4auCn28tMXsvZmvPbDb8jfoGirz3h",
  "key26": "4rQTnfEstrK2WuLfJ3wqkJF5Egf2WXuhsDtK3YTNwPusKRxKtPochRYYjNHzctfYnw7RNnTQrgWELa9nyGvZ38XE",
  "key27": "5jhzmC7LH4G7v7VjNMoTunw2QfKsk1UqK16JM2kLFU5CjrXG6WDSLnweV2gSBzEkX15AgQL31cSTVmoHWvWMXXeT",
  "key28": "2CR77L1mzyzdrGsvwpKxFFiwkgJkNLU9MSxVvRU7etQddoYtEUE2xwqyQgnhmGW6xXXRf4c8MHRecKTxWXAckxhG",
  "key29": "59mFij5JBLBHrHda3i4CkEexVpoJNH53LNc8GzLYXPrz68WTerQWkNLUgd3rcPM81QcciuhTTmeVDmHRcnNbt1Sn",
  "key30": "tX1cdtJdkVuqUG2auAncpv4xN4tHRFqrpgbj5SGkYU4WVUMxfRPmYFPBMGzD5kPBkGbpky4J2mNUfaPQLTGN3mc",
  "key31": "22NZXw4mYA5DTownmz9dbbkFMWbYDiVo9WptxRJ4gFqiHrks645FMNAipDEuWaMBRG22PCVpZsDQ6aez8SoYqNWT",
  "key32": "38oBGZE3XRjgwxAJmgEiqhgbyT6Zh9847WQbEfy6EXV8hA9p9feEEgej5a9FPtVoqhCuzydADmBXR6LL8X13iYTS",
  "key33": "WbCnepmdCoppt1J7RT4NrNbAiaRJimbPjjnxRaVMrs9SJZVoRnZ8uNKa293Bm72myHjwSekk9Ndsr4zmhHd1SE2",
  "key34": "5v71dSTqv9DdzQwFDkoeFAz3NLhxrLj2GNEnFzJ7tY7A58P5t1RqQWdwUduUBd85uP4qWAWivkwFGg8zc1wXBrHa",
  "key35": "3D6BEnmoFBALgrVyy8j2mAEEhgvuEyPn3p7Us9iHdheZER5u2S6ijnmpRW5yAeD54iC8cgahTDSHfPfjKhzo51A3",
  "key36": "3g16PZxGuyqtwU1YF9eQ7ueFZY8nZxdwqXfWPEGQHxXhPNWyTb6nWw2Ct8ccUwsDcU46cpeKvfkThqXTRC1N8GVo",
  "key37": "4MJZs4bToqtYrkXrdB3k9KQJpQSaVSoGdBBwjhWd61826mqomdcS4Q1tMJVfLGxgABBTsuSS7vAJEJyYyymTHemg",
  "key38": "3aSKPDVmorD567X7P3JMGt1kyaYDZuwRq1Dneeo93ooXnKAF7ynuxGyHLBx4NiKX2wYY1RQzmiQyLNPgDST5P5h4",
  "key39": "5mAFo8cSkyNH9TpXpappZp6gJPhaVTVZhhTsDTNwYL2nUSpptUoAH1QFG38MTc9ab775RNepQUrewU6Vijkm27Yz",
  "key40": "5m2Fy6yZoTqXph6ewzuppmYetVxFYDNE9eUBVpLSF2Czg9P2F4pFLFK3hnsE52C5gaE3ugucbwr9rzhMAVNXV9Qn",
  "key41": "3houPcyAhuDE2gNp3FPgVZ2Dg385BMZjQ25vb4qFzPxQz7MyaGsyVFFyMedXYoS4XHixovxtxbRsd6e9LofvjgJD",
  "key42": "5ey954mTBkrz7Rb7586A5JmC8deJF9jvmMCxZu5aeLxUbz7dAgvoLHgyvdaCQ7rT6x7LfRpt2M2H3ffTa8RrRimL",
  "key43": "5sx7aMCRpjKCXvQMZqdD318hBPKENxjB2EvxMMH9gwGYVpEvbmkMBAZ3qCQ4BgzfPamJFWiBVA5xtRHyUwkczcq2",
  "key44": "4kkUHxxPny5sn3NbZUu8HVgmQ6Xf23wV7eZHNadbQgXwpCMr25bZ5gkLhAo57sEXD2yhzkLv1GnTemUK9AzrATMk",
  "key45": "4b5pwFLugWhz79c3L3nwYb6xVChBCJVZH6dmzV1SD25eTkk2E6wyoYgbTchAcrbvtDoBmHYfqye6UiuuRbvsSJcL"
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
