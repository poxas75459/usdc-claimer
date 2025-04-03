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
    "22CRwNNfJX3gv1ksLhMPN2i5mfG4b9t9BaB5T4Wsj51DdWDBLWbQEWd6yzxihwDGxEkgXWg5Pu6oiZiESFQzXhUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65AyDysdbAyG5tzxNngekCVHuDMCCL3K5RFkwg8G9AgrAa34fMdhMZ1H3ZnxUwTDNDFCEyjYBh7i8D46ppBaAdf9",
  "key1": "63fnD9qxtwoMSAa6bMxvzksLWHhx9fPJ6PqdtLtZ5KtUbwa9JxQtY3RZbtjAc3rb11hFGCzP7haXeXA8DrY4ifSg",
  "key2": "2yq5tGcV6XpAaXoNTGx2JaLtnkdcmLQ1gC13kmGvWTtxiuMDrxPbgLgxGXHH8W1Bf1qGSQ8KgJ96ztjFW1JbipX3",
  "key3": "4JB7Ry8waxXQ1swFUxjL1nGnxxDJ6EbNSJ7r26Urdbehj8ktfRs3hhZj5Gj7Fra4a678UsDPqZ3xsYmKuUJzQwGc",
  "key4": "3CwtLgjtHh8vxuz2bZH39u9xWroi8ifMQuQS7tAw31aHPYwijNQcxDSXkrZyG4aEJ69qpynnQ8Dz638TsqSVVt3H",
  "key5": "j5Yw8TTu8RKrEFLoDw1uxxEuNPKvg6sGe25VPHSU6uus23wTxXyP8Ex8oHrCF8ykVftrd7Ae9Wo5XJEXiNF6ZRy",
  "key6": "42SBcmT8oaAD3ycKf86JHWGzhoPR1bf8t8cMKXQkujgenSSn6XMbMZNFfAQj6Cno68ggZUHkSymTSQHtCwBthgTH",
  "key7": "58fn3QLSQjEtfzSwKyGs1nwUZj2xLm53cHuxo1v4VP61DCkcPp5YdwdBoNLaa3eYAVxd6pw7MDASVL9RpZ7is2F8",
  "key8": "4ztPs3iFxkxmfm5h8hEVGJf4v8qGattmpYWTC7f96kH2yxtjiBRrSeQb4HzTUtEXTsobtb8XGCSFfPJUUSde3ezQ",
  "key9": "3EkYbmbKv63K2YtoUjuiNyXRoq6xbfsA93vJoMjjdaCap5Z71sKPM6x39EUorRvssDj9P66zKPKixRbjKhrbzxce",
  "key10": "3w6iXEwDjrAb8QYrggfTvFUFDMRJnwsP4Agh3BG5JrYncNh7FvXLiRn7rG4smhFv8VaS9ApvbhXxW3pbfnDbHJoj",
  "key11": "4GWRaXbsBmT2M2y9HaRumLzbJFJi7ToC4kjDF2quv8fhivAW634UQAs3hczvqULYxAQwHTgZSVEUNre22CR6fXeA",
  "key12": "3rzRhr2ZjiKxNhDJ6RBkWfsaD1QWbSQNm721cTycMXBqfD9TjgtoZGopG3Tohofii1YFBAw27MXLajvPsce9RTTJ",
  "key13": "5wB3z7fxGp7TSubY6xQ5LqRRuiJmX7QasWFaTmHmYMGUu4r2LSuduQPYd3KQaEA8V7ebHwu8oqamBssr2P74vxC2",
  "key14": "3jRKwahjSraLTr8iQPCMrhfA7BQD812SDmXxy3L1G3mFKajntukpn1JmUBiwFxisQQYEuXyHimwh5KQP1aWCPCXB",
  "key15": "61LPMyHxajiwczi6CVYYqt3aL6MSz8aDY51f3SLMhG9T32fpGMcTVetH8t4DBtUyfJhpbZTEE58fJejU77xUjuk6",
  "key16": "6GUHCfwQHaR8Jvt1akbsbLmAG2NddpdtBVqLdLgV2uDVHF9XcPdcC4vwCENam9ZzxDTDsKq4jsJ6rcKGEnAcbF4",
  "key17": "3dwAywNAY8EqQ3RjdUtztcbmizdyPTsYbsJ575JXUoisqZrcAs4tdrpSYoNHk4iqxzgRr9DSjcPxMYqbutJ5WvbW",
  "key18": "2QX5bA4sbvKPRojJ4P138NqZ2voxHUzqK2aUV74ecimNtXMy81s7ErubguYWENrvxmefAWyhAcN3jKNMNxMQtpx1",
  "key19": "2U1KRpd3tH1LwovLDvo7ratKe5fffzRRqDvJHoPfw85qJ4brUeY9gLDdXh1SrPGwvnd4xUgRcx4LXarz2f4F7syL",
  "key20": "4EDWCWt1YvwJPnjK4Aw2pWJfDsVi3HxQ4E8eLy4tzhtMnRdwCtetpvGKypgmHcKs1cxpC9RZjurCEb3UBC3muzok",
  "key21": "3LKc6FmnorPRCzoFb56eAhkXdjBJ84FLTD5ppwbpxNberhUCYkyH24fpx8hJq2cXBCwTYZJ8tGCZBxZFmT16WmDd",
  "key22": "3aFzPM7D3ub6TuPWv8u69kKteiKmqxYEHUS77GvoQCDQ2cxdonS6Zfqwf2jMCWy61s6FSftemjqGaTCxd6gxdri1",
  "key23": "39KSErQiT84cNw9nZNFtw5goUa8UC99FAruitw7UZmzMJ5vG1HSSgTCRELFzynWpiNfXHQjhcjDdVNc95Vfa7uqr",
  "key24": "NtKSxAY7nVPP3FoLEPSJNyWocupMxXB2v3mQWL6SDxT6d5tLJLiHgtwmJQvJTAL2Np5cfeNWSHNPhgnpGAhtcHR",
  "key25": "263d6WRpj6LaeqB8b8vpWWshVtNCdPUE2eXg3zSraBrNyTJejbqaKphenXG1UP6L8Ywokd8sDaL8nBic2d7gmvhK",
  "key26": "3cZQbmG5gztBdFaDf9sYMpeM8odqkut6m3zRwoyAbDY6osyD1asYnQp5w9nTCc7xELQiDPyK9XhLz6ux2RkDRaLp",
  "key27": "26b6xsBchxrYNLSFvcua34xJhiAJVByFvqf5UZaCCo9UbgtRpUuDzLDELDbJuCm6gdMruRZtQ3nLD1MZLZn12d3n",
  "key28": "5nuWEkxeiBVyknjv146asN8jwdcckq81wAijmvU7WFAPWR5tgMEzYPgfuV7CvhJ64TJRxmKL8ZT18PiMiYnKUSWQ",
  "key29": "67MGBRQaP5K7f4LtGj2pNC5Gcsh6fWdyUNThSK8VDanQvzsrdPeW619Mr9zpUznwsbhMp6gPLD5HdusZLeVvCNnG",
  "key30": "2uR3Lxc1yVaVNz5vohnqyGdZ8bVmzvh3TwHukwgABNHKHPGkaRpXB8CG6p1oPrVNqkmz8guxnSFXV7yuSh2rWJyv",
  "key31": "5JDD92yHwRHS5j5mK2FA43NSyK9PDVPygc9AdLCcHTUikMqFfVAUkrySYG1DiR4zpbcFq8GhFvXDzC71eKBFhxTP",
  "key32": "d9f3RhK2ToxM6jwGyc2rsGzB4QDkihp9yH8mMKVsUGCZp9pGrpAJpLc7WpXPGCzHHZCKVoupnpQBBD77BsuCPgX",
  "key33": "4nbonSLKSTp6SBwEvQj4fSW2rtLq97jnpCtY5VpwoaGoKkaUE6rFciTcsGYr1auxQvFQZHViK639pcgLepjmhKfb",
  "key34": "4h8VjRq7fu79NnhUoNFsA78Cs9LkA8maWG7r42YeiYcybfrstoSfk4vnsQnjMZHrny5J3JCqsh9qmeXqB8Ji37zA",
  "key35": "4XtiaVPEVhRzJ8EV6sQjSkhEdiMPyyj99vSFWEq1oRTjQ3dAwvHbEcQ76jrw6tfiLTh7sCdum7SxyrQjadZBZK18",
  "key36": "4cWqhvWHyzpJAwo62n1P2nVTWdSVTxyAr2V6i7CUEYvtaAdAqSwVSPfu1h6q7w2RCxf5bMrcwRkvEJZKFvGKg6hB",
  "key37": "fZVskZuvrwzowCw67BGhfviKzPGoraLqTA6yHS5jRsbFHuXAJ7xvgd7G5dft9r6XzUpSNRHYjfTwNocjCSamows",
  "key38": "31ET9juhcUK3BGeEY2TibvMErwTLuSb3fq7JfPU5gTDDn9UkiLezbhwUCcrxPpEi3vzGA1PwcwUHF7deBoXV9m7B",
  "key39": "55gt8ysi2T86zdSbJnGtzTwqKfgcD2nFSgJh9XKeJMUKgvEMCv8W8cxZdE9H1edWGtsNPFpeWrjDmshkmCX9GFm3",
  "key40": "3SxG5nEvnMTAdmHoS6LXX9UMQmqkb9kAVpbKyP11oLpAKQvrafsf1kL8Vff2vMQyDB6v9FK24jDpdPeRkq1Jhy6P",
  "key41": "gA3zVxM4nbkborSTbd3PuJsoyEXn6HMCW4kQMEKcL1T9CoeDpUh5gajBeHik1KNj4JLmTgqXGjTv8teyETXqjEz"
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
