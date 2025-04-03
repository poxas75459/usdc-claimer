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
    "2WEF9dqF9tAWKWWjPThMrsFTkAmd9wpUeZLq3m8spmpT2rv4M7cfubH4swrUT2gfUzxSvX6cfcVJxtW3GgsgSyCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZDFHTGJjNXWAH25Y38y3hvpVX88qzB3b3WYaQYVHFnjTa37oCyqNtDnDjAL9DVvTC6Py1FYu2FSwCavZvnXRLZ5",
  "key1": "3maNRqaSwLkBNgm2Kcex21KA8XFn8yUoRdT2KYkDyozWaBmdT7RienGS5cbWWf9nUriRCytSCqKhpB6StNsT1g7w",
  "key2": "5XBfAPccpu15CfCYwt6qfkuu43bwyg5csHftJhE4Fsk74dbDcs21pdyxpEtMMKDTH7nbuUyMCuUt1mzgh3zq17gx",
  "key3": "5uga3Wk9FcVYWoNZY711nSM17HMJd9BQKj2oQRe26GZvY7xD6rPZcg6oW6EDzNsQteG6N4mJ6p8fynuUTbh7tRQh",
  "key4": "3nadJHmZkBKwZEJJTdemDqMxucKv8kg4QjxW8aH24gF8rNKXMqjRQz6fGRGJTyk2Ud3m3josE5shchrj5fup9sqT",
  "key5": "KzHroos6w2HxTYbVJKzUWG6Y67m5pifmoFiaMhwBLoAShAY1WX2kf423SENtgZi85HhisraFgmmh2LrwZg1nr9i",
  "key6": "t6jeKnD76WjcesHR593gURAdLMMyCaBZv5CxNWrNWhwZZ68mhruLzyS54KLLdsNDmCmJA7aqsZuLqgKpcwErgBg",
  "key7": "64gRqSPccooQaKdzfhNPAZSAGd2JM8G2gbypUHGmEo4j1YNfK5GJJEn6xLFJs9FtkkpxNyqKxUm4kEK1bkWgCPCJ",
  "key8": "3zHBAUt5USGcRwyxsLxdHhVXzZDxa86wdafv9uw5XMMztdmJpFLXuvQ8tZrtMYZYxdeEtiirpFfSWZVrsKmtru1",
  "key9": "4jg8tSypUwcaY1dhmkniYuVPBcrJRegmTWzRMtxswEniy2ZQZRvaqMQqmXwDW4jjXdpquBZgeWysBcDpoeNc3sy7",
  "key10": "o6HrifE9jDEPibuEVvLQavPMiD5W5hL9BEuiaDXCV2u9v5DfLeKkW9Ww3BDpAMnL6yX4kDnN5LnvXJjkpLzdTwo",
  "key11": "3mF2Lq8Wxemoneq8mjbdQpfAWYwfDEQT8HbYSgNWaExcZv3DskSDjE9cBsffyms7r2vPNSGpziyM7e5qvKg4qUso",
  "key12": "2HhtZhq3CzYFwoaXd8pbAAwJcj18KatLG7utXjnh9tfHaJC9Cs9rTDVEBm7iyQDbqYrdS71yd5yUMtYQ6B7TmRDt",
  "key13": "2VWZQJFFqCBJjmHAdkoU6GRiPrqeGZxdxRBQXSuQtuEziSppdbjWtMfPNuCmxTgafHi3z1fffHqR8Vcj6cWsQRRk",
  "key14": "3GtsHCnZyiTvhhsLN6EYxeF27dEV2es4T3KW9JutNFfYzTEEvBaNiXygm9QVL46kHy6pSC1FZtVL7Z6xqKXDXBWJ",
  "key15": "41dRiJQdApPw3GrGydcFm42T9XvpvgksCRGYF63M7kYqCjfPCJLsxq236RrVbsc4GiH6xJYCwMFkxdmnKfrS4Q9t",
  "key16": "2hHuzEj7SRmA3DUhyeip52nciSHrnqJQn95m9jkvewUv9g7ssdjEH8mK5q3AtQc2JJkD2B6MJemELXPf1u1QU569",
  "key17": "3GXrFnaqqKtudZyuG6LKQBSJ18fsu1Xxp1yTNYDPn18tAozWarNZqFN14SsVNP2y3UeWYgbDFxitn8DCnqfhm11i",
  "key18": "2mYPM3wmW2KzSmQC42T4UA6fd8eGqVJm8JGkxnyvwvHzLnhLV7ibpgUUHJaWcfKJgcgTxW4b92YX61hDtpjMUPRk",
  "key19": "3Gr4g6qxhNA7mEHD7u9MRD2YArLQ4PxsgaPkuVJPJ7aFQNvnjSaxFm8FK7TKJTuBYMj3JRhTaNazAv4uqDhGSMJZ",
  "key20": "53hGARrfnyvbxcqpUfRLr8pgxyqyh3dLhw1TiSmAxuykDuzBgLnD4171dosgV994k63CPUy616jBiE7H5QbLmEUX",
  "key21": "4QJmDUxrcquWQ6Ud8adKPifZ3HSKLrvPG5HLPCK141fKQMCSdmRscv9s74gfxTuoJBSgUgmQDKffDTb1hrSUQ5J3",
  "key22": "2r2Y39FEDHg9QxEeQ7XFKPuecD3E1FGYR8BVwvcwDbjGcc8xgq7zjXQd8YmUbQVcwsXFuwXWzWUvK656uTRWi2Jt",
  "key23": "5moroa3GhzHL8jo5Ko8bKZaVaogJScc46U2prubC3xjM8dU1MJwP9HRipLAYF5aKWWsgDWJsjjpvi9ruAmR8bvAs",
  "key24": "3RwLRCtYC3tt6STPe6g7ZQMBfBfBxpn7QgBGA3hT7mDQFx6mFKnd7n4tMTsAH8qcsiVsD1jsPPhT6XWe8d14NuNt",
  "key25": "3XpryXGoJ9mxXhR7jyreHHAqJVzV2xgDLEKVvFz8eUuom8hVd4z4siTyDvuEN3MU8b55kLy4aJ1gq6LF14Y4Erqt",
  "key26": "4WmpniW1nmhH9pU1pBfSpZa5gQcPkNhbSRCheKhgeWdcwkU9A5z4wXQ1gii6NJzWmaQ1fdXsm3iUHwMfdNGgB44f",
  "key27": "3hNuPsYg5q7HGVpgwrcfRvBj9yHLNHnGo7UhsxgZven3G8FVQQU5DtxALF9ArzTmDu82cjpMdZLjVqBhvy3GxguD",
  "key28": "23stpbNTQ5gL1wRjWVixpF24xhLbrGXufkqmjFi4rFsh2Q7hhFzgd5KLdZFpCndzT1NPrL59JhGESg22qsUEJ54L",
  "key29": "2hQMhnhSpM6LZb2SjS75ZpRhKcpGcapKXX4KoTro2pF95ApXgVo9aTS7bN8Ug1n6RV6RmuzAna2FJRmaYAiFRmsS",
  "key30": "3F3SLod7n94ZRCRZBSYbmdqc3FCsfxT77ayPYYP7JkXUqRYTqv9TxnYUbrARMuMU6VR5qSakCcBdbZrdKwWJ4VGm",
  "key31": "27EtLzGWzUszPqetZFEG45KoU1PamZ9F9nqKdWcf7crLZWP6huSeyXiZ8h6ryMATRCWhSbGbBBAX2aKhjdrHeHgQ",
  "key32": "3DoR4fivSyWDVfEdvEFeEW7dHd4ygCENN5YnLkPc6muDYeNhcGX4W8fKcbdNuNRy9s3GA61S54J9byvqaT5BNm3q",
  "key33": "3HwCvinPLDwiPgzLxcjTshueSPjoG9MK2Ncdh7GvP1Esmcs63Zs9QTBecJTAyZCBxSnKzTgFFuEkFGixM8qq5Ayp",
  "key34": "2BsynrfoaitW3GQJZr2jGM7Y1YTrFdZ6dBtNfQP83peAcAq7zzB1uZ9j7sYFZVhNknqteqfQ3SDvX1z7FXFU2eHS",
  "key35": "29hBm31EEhGZQXGDVXp6vdJ4AjustcoTcU1VANVCvB2YUTRnKEfM97yJDk4wfUKWGeLTJzFue4nHxxX1gALE1gMH"
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
