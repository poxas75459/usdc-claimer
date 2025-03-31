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
    "4mhqtC8b8oCxhL6XJhPg2srJ426pGnrN4kMxZyYjKQRhsU2uuxXkxeaZLLTZkLTAR2NBvKon59EjtaxZdKwSB7ku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WvAosKMQLouEofCGQX5hNeKRSG6zLE9J4zZwC9oo6Uor7sYvi7XFv48GSEd8d5iF87jpxBcCzFy5c7zWzY7QxSs",
  "key1": "DDebMzR1f6k5xL7AcW3aRfVcJmkJkucajbpDDRATBxKTFsQyQYTHPzrLcS1cXKWpDuMANPSR4zDaiRuXR6r9mLw",
  "key2": "5kg19rzheMLEwMpb8S9SzH5pfixb3pstDiKYCpfL2DXtxQUKPWfEWwo6owphs1N3YcRchinbj13niYmTu83dRzJy",
  "key3": "sVbC4mLM6qTiqrtHrLZ9QDtDTENUvB4YBGLsiCTqX7g4k7BTEcNQYDBrvHKYVaDvFA2J8UCfDa6UNbqQZxqgLKq",
  "key4": "3omZnTsbzJuZRKXZNCouw7puRPLXo9hJmeK5DHUmD9N77VXZ6LxK2M7g6XaKSVebYCTtQpKPb9X16HYAbjyuKfaV",
  "key5": "GnAti6HssxHp98aMLQMw9JeFQxAWcoTKePVajcURmisSUBSQg7i754HTvGLq9FPsxjntR5jjJaTDWFwrXpmdgKS",
  "key6": "56atZjRN5BJVDyGVhUtJccmCrLFcWJxWuPvcb5ongZn81dgMcdDYBDh5SGuK9TqjZVBxkVbcmqwYYSLYszA9s5G",
  "key7": "3CEgcTTUfatux9GJkCLzGPLxMy1MdWafbKRZ67yKfaR1UqWnWbD52BAKX2AJS4DfKHTLUGH6TT5fatVUjeTdjyZ9",
  "key8": "4DJ5ntQXWQVY4TSRbkGE8au4hXeoTQQUuZgpfKp66nN9tv5vPsVamb8UQuLrTNGKNPCBnABFgLXMUAZudBGV2fqM",
  "key9": "25mpJBoriU72uXDixuDa4CbXJNvn8NXRAjVkSf4xKh72fwCbHQuXZmZ1P6ZAtxgqiciG5T6PeQQuGKazA2Up47pn",
  "key10": "7kdCYSPUjnXvWDiGnZayz84dAjzBYtfVg4Rog2JTp7bC75ugsiMFiXx597Np6MgN6GdRJoAuUv64WDd2AjoiMTj",
  "key11": "2nZjdByUpst7xnPXMS2TAxYhKFmS4snytbRgdcKEUtNh1zebouWqx4PEAR62obwAYEPgo2KoUHatFbh28Jas2yjj",
  "key12": "5WE6kdm64mJNraH82cuuDFod336Ejga5QgRqsBumyYzaEYwPJySRSLfNWxNdggNp9M6s1heCZ95HyKJQE6cDHjvh",
  "key13": "3fMjLeFRAzeWpYCR6zRQQCfDXn4BEpE5kj1GeBG2eJh4sVzs4pKYXiYFcxzu23iwT18HecsfhuPnYN1GtDEF8V3A",
  "key14": "3UaRHYATT8e2HFSCWsn1LbakGFH4kwsseCMeoYcRCNR3kqDoeWNtQFzZC4ARXGiPArJhV8GxwUYBUCwHCSgvcPHt",
  "key15": "2ZnTaLLUQFvTFZkYCfTE3A4eMvNLnzmt5m9Tb9Y8izegeGeptMY9DFhkSsXfVD9xDA8m2XgRVPmWj418KUsh4S1v",
  "key16": "5rrCTfUYfLac47z8gFsLMjYhFbMCr5ifCKg7tP8AZrmPWgCfZ9dL8WTzC8mp4f4NSEVyEsxkHDvqgdYzuK1H7Frg",
  "key17": "5F53FMjnMLjBhofD39ze3oD6h3c281Esu7bMojAhGcX6PUHfBNyQUvs1aiSaDyrWoPgp7qGfaKUwPsqeziNLwRjy",
  "key18": "2gAtED5shsgJwPENKqWo492uRYN3zPnu8yKqo9y1EPNYafETVn349hqWSaeRRdsSJz1qFAuX2kbgpTGxqKkPwPsA",
  "key19": "2h2cAZAgDk4owh1UsguwUvxeGWk5vCvuoju3cVezA5x7YSTLtqR96bAncQiZpv1BfT8NMC6APGcEa72CdckDTyVb",
  "key20": "2XMhwefwD4jnPDfugLyehgm7Wei9K66L1Cz5PZ5eLUccAe2wuq3zSonBhhZ9qkJjxNWfRb1N5Z5XkNeK9fpqVPpW",
  "key21": "M6Ncrx9pefcXfqxYUmBqezTQJ5HjkesdWc6r8F14LYL9vPeYv5M1CWdBstfjKvwvieKYVVCXt685Y3fHk5wB7GT",
  "key22": "4EvVDGCLe134ksBCymue2zZ3NMuTJLdxW8nqmeQMfLMQWwRMN1kq76tnwywaEHbiwSSfCzppVrP3KsGpJhgsX8oZ",
  "key23": "2wEjGLQPzv5hFr65M3jQ4XEZ9axwwQekPjYyB85kSgau9n6NBguZiSYurhxeAqG2ZEL9wK8fL2xEQYihL2gjtaPt",
  "key24": "SGDtCXH6YuvPAC71dyxhF7miJPG14Ha7BgcCju32czq5RvGJyhFfcqJeUL7R4LTt3qQ7XP4Gpk1xrDHVYHc2u5m",
  "key25": "63AuPQ1j3Z6QZDi7RnKiuSkYXmEJKdQcNbhXBsjAQo7HPV5CQ3MbFazgUS88KYFZQqRwS8yTPMkY7yqqG2oM2JXt",
  "key26": "5ggRmtfdgTCDGX2Y82xFztB4mDa6HtcGaDPe26coPSp5wYrPmUpA5iWBqQaEx52abc1UZqfsAG5MfRxA4SMR9dVm",
  "key27": "NfE8zsv6xNKw2v7fidiqBK7JNEn7BRCQsU8iaqA3xSa8cwkMSna7yw6ec71nw4UHfqNw2ofpUZ7tVVcpPpBy8Nh",
  "key28": "ibUeDdGoSKetAXQhWoNPy7WXG3XthRX9W1yWZ7EmnVmeRAM4rToaWqf8FpSGK8jjbur3WjrsXE2n6WSFmhEfz2j",
  "key29": "FAC6WKFrhu2NUAH6wLKkheDW2NYoCJgQD6ZqBA9cgKkxmaucu5dGhGqdazecMdgjdPExqPKpSSr6wVh1nEJVEyi",
  "key30": "5MxRFsKECv9MRvG9etC2tzvshmVyaARQJoGrNX6BH8TN7wTGZd4QZi1dDGtJkcdu2tLqUTGik6j9DrgnqXr6ubeT",
  "key31": "6bYCEg6ttb56voGfE2X7CSGWcdJKdCBXjkB4AY1NL7F7dEP1HvzVohGXg41fopT6pMLBNeWB8RHLZy2NNrvxHHm",
  "key32": "2GYJZ6Ytmm94ytSPysRoZAsYwpLWft5MSQfvvNPLTXiXFyeLerZE7mTWzqcJ6xRwHzSWQnZTnC4SvCkQV2UeJTPq",
  "key33": "3Soyhmh8roBm6rmRonXvEFachaGuDWC55JpwDeTWMdNeTPTREJC5QT65zkPWYxWhVfiL5eMgSnXphRnLriUK6KpD",
  "key34": "VQ465wTLbepgQQHieUKg95um64ru5X24o34QfKjJaTYFAcXZ6M4MbR3ya2J7qjzbJ48zmBfbBzo5g4aSj8UfuB9",
  "key35": "qCY9E9rNzwhDq9EiHZXR8f7hyJYUpsYGb6r7rhaNZCd4Ycg4BohLJ4YveCAPpedcSedoH8XhxABxBbxj3UK9YZ6",
  "key36": "nbk2biKf6cgk4wtJDzoDTRrnuZJptMZPqtTN8aLX3GJMRoMdLpN2ja1RdJWyqYUBqgSfHJ3qJYWRkCnMAU43fN4",
  "key37": "2zTpEfuHdyzgduhVNs2JnCkpxdHwfmmZgRVzQPaefSgpaDscNeG5biZ2f4CpWXn52Yq6MS3oS2VpPUt8DJDoqiJ1",
  "key38": "31r2Zt9ARXzgN69M9bhS9S4rLiRU3BL9JvURu3aEn3vtTZ4SH1cVgQpqA2Qtk9BueQ1T7p24hbYQEqcgdbeRhjWV",
  "key39": "2vCDZa3WuA17RFPqJQ7VUZ3NYHt25STiS5tYxrT3BWS6jx7ZVPtAQDXfNtTfgFXWHXP1cAzQm6gCbz7oyRTqGqXW",
  "key40": "3A7KbSm5q7ksfY9qkExeTfxrW8s4zjwADdt6xDDezZYLXFnQhbFQmRFW4pmtmrLujVgnZDZhF795FqNBVLDRn753",
  "key41": "5pAt1L29WSJHtJVuauh6bQdmfTczVMuaWhY9W6U5idpdWTYSRqebB6hEhmPkpcsmKKSZvf15oJoyEBASDV4AV4uJ",
  "key42": "25oHpCPwJYXNijGwjY7AmJ92rHq2J1UvMwark7VasLynK92tWg8RW8nucscQFPxhgVYhsXdJ6SiVkqXUxiXrhb2x",
  "key43": "8TqBA9v3uZ19xXhZ2xRhwCyQP2ZXfnpi5JmH1g19SVL6trgA7WBr1e1VPxNzr4Z4wggnULucA7SikPseh9mJvLE",
  "key44": "78eUtYAHspa3SoiGUhbnUuuV8E2yPRcBf2RRXJozermL5L3tARhuxP24rLowCjF5JUPz7kB8ubNYi3s5A3xR9tK",
  "key45": "4tTgy4eebaoyGAWUbP7R6B8oGxHBgknVExCLccwKYXrTWtgy9pX3VWCF7LA24eBd7GeweBScFmRXhWB6pHsyo1fs"
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
