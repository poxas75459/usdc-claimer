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
    "4yRskaQdCj2u78gqUVedJnNkYsJUjBtkwmsMJrDnvkgMu81MHu1PVZ5KbvooziNZLtrFo9gU5GzAGiycjb7fEyW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y1TeV9qK6Sp5NG3xf93qF1YMGCShqY6r8BaUxgGUhTPbJovFRMv7JF76Po2CYGB9aGXNxzNNDTz1hGiDQV838Du",
  "key1": "5egMY4wNGSqppcoykrJBpopNrLjS9LjZ2PMJYaD9zseYX6uJiKWbXxKe4YxYyhe1K78u94TZocapprequ6mc7nuB",
  "key2": "3A8giBk7EYvmKP4uNijv99Hd2AZd759rSZx1BfKHcJDK1xzGaDxpt1gR1YNeeMfGXMiamN73p2Jx48T4VKVLqsng",
  "key3": "45iCt15iuxDEUXLyi3RuyxMXyzK9fHVXdZ4EnprWBGmamZhQF1qVn2VmfssrUCSgRoC9dkUbz4uefK14mWBSD2ef",
  "key4": "3ByuSQLCdNKiycfBFtanqNAAje1yPGN8sFPmaoQyWs2WMbbipJdv4jTvqJknrzQzryCzdydWuMmrU5LybxuX23cU",
  "key5": "2KrYmt32ZYG45QruzjNb5imrbopWQeZ2nJfgf1YudgJVfZV1ibR3ANqWkkJJwcHTfweTKXiufoQYJRSLWJsrC5S1",
  "key6": "XhXLx8dbRM4WQT7tFDuaBXhVJKw5GQky5eTTP2QZff3Z7ouE9wbMsQviC91Edwp6hGzqX6zC4aQkPCjBAfmViB9",
  "key7": "5dksC2LWwWTXgbbY32BHBeUV1PYPkbHUdhsZhae5BfjfJHEL1ap1miLJoWJpHswne484gkDBbE61Rx5LvhXfJSU7",
  "key8": "4AReDrdopgYae9xw4cTeoM8FNfa8CEv8YLMdeRmv57RrJNV8FR9BPdcoVijGyK1wct1eqTrCa1ZjmaxDhqdf7A7g",
  "key9": "2DnEKeX9Fv215WzHJ225J3CMKc6UYL7nDxQezU2CwS5UcyEKuygvhoVe9xfX366AySdRUPk2nd8rEAJedGA6uEk1",
  "key10": "51zSDMkdVMBwukwdRX4jMPHegyteKkf4LwwtidSRnoxJMCQaf6vMy6gQAEFhYjPNSJHWekXZKyctS2AceHGcKLht",
  "key11": "59mEsdCj1RSjxkB3WKTSaNLcsPkJEVkm4BhmPnhT8YBzRPEoKeDRCg7DcetnQ9C6GEcpw3dxvCVZkL5bze3iyCbx",
  "key12": "5FoSoqfE7CCH9aqrGdKmxj7mqgFm9acfoz1CeExS6nNhkFW6HwS6NDfxmydAdN8oN1ZBNTir5GcT6y4BsEPWS99u",
  "key13": "3nMUEKzKtP4QDVFKbT2XLgY71HW9Uvmj5brqbZ8Dmo4rbBfsD893unynHKkYe9v8GuySb3JMvre2vWoT8LNwAo8h",
  "key14": "2JPidz4HGuCRPxw1QRWysgCZ3ugxRJquGRvaSnjxECBmMFNTm2TvANaQ2PBwwKWRQEws371LVKGSA2rUG4VagRNj",
  "key15": "2SvYwyTdBbTR1cCRQ9DFs53nkMq1xEnuokrpehfEXpwWH5wLyJ2taCCQPqiDq2mGBb6WU8UrkDMEnaX6XsLcrio7",
  "key16": "5hHZirAXKWjZTuNFfk17RFytADJNqSc8gTcWv72PcuMmTFE2qUFmjxUPmVPtgCACy4CrhdzMkJTe4qs7HhAhwHjH",
  "key17": "29bLagd1HNyWVBarTCFMjp3ZT2cMZiZQraiy7bAmt4JA14f9ipnzEVWYjFpHmzPSXUQk5jBQLZxWhDeXvFkZtf5c",
  "key18": "UibNEe6wUSFghwUuQ93JRJv2Eq1sxT13tBH4MEYdazV6pC43nyRPTcfHAVjiSqCh6TzxEtkaULiA7qV9BAN3baL",
  "key19": "5V6Jy9owxLiFLQn8KbhmJe6ZxFyaSa7xHtwfQ8qbeGjwnjYDQRyi1WYi2q4ovFLyEkQmREu44CkntBxLEAD8nTLU",
  "key20": "3C6ywG96ox84t8PLt7ZLTTjsUqFj24e8V6QN1zHpgxh3mY7iGaUdeFZSSrAQjzU2yeuTDHL2eHdgeoNTJrcjVDNw",
  "key21": "38dhdYijhbHskBYM9igGXieUKCVdYGRStYjkZQCuSQgtvzKMTY6kLUq5XyQkyVeaBvt9EFaUj3PFdQkoKpzGDaFg",
  "key22": "4pYtqDQ73yxDMQJiUV6fqCesrszzSX18qB79L7b8q8iom5aWdbaYUn7kcD3PmQTkd2SvRTHEss2HAJKznWHrgr9Q",
  "key23": "4G5giyxxQFzn7TjPTW715VDzAgjSByRFttXPY5ehLUHZVfDaVC9rnvCRtbk6yPq9GAPp23aGVG5ihd82wdmuJB99",
  "key24": "xaJx5bNz78XUot3zPEmDMp17p2iTk7d73r7j3VYLdcmgt3r6v51BDq5VUcgKvvdXic3g4qiwL7VFKzyppTuKvMM",
  "key25": "G7Yb3g4DjfBSXdE3xfpv1m6j34qszaKW1PNugGKGbpG3oFZHmkLkfSh1hS1sjyTsjArpAa35YqrnNVtczAVXaqM",
  "key26": "5zoYTWk2dxiaEyEyQ3G6NuWCths81FDRQobHbQ79PTzGfP8gza8nJKTZ9mK3SH9Q2pSwLQS2p5yUYkxXz2E7wRYT",
  "key27": "2zNphQh9uzKZQvWSTnCQBRVx79qkKiRupee9P9NafRRjPJKnZoFiMFGkhB9L5nhMawfRUuKmgKkoqCqi9XGyviD3",
  "key28": "j6xKMjC4esXSuXJyhajonut1EbKnvtezrEJ1rhF3fQ2GzmprBcsRHGRaLVowuMa5Sb1CKkhjakG93Y72ft7twwE",
  "key29": "2iTfmnidKCBzjyFXDu6HyfCXiVHGertVVoGC5AgwcLGWK6UCby77vSmeBJ678mDUi7y9sY9UvhT9G5k75iUtSKjr",
  "key30": "4B5ohS1b6rsc6SEsbeUkRTxedRqzpu8aAc4hWcmh9oAeB7Bmtj3VrSg2V3HwjDbw1k4EhYWoHvQV1A6h4XtnpgjE",
  "key31": "5KUHqDhWc2Fu71iK7dYxhcuLJEYFz6Wx4yPbme9TcfJzRmmyUUB94n5wcgnbW8JrVC4CmMURMLee2xeuFsgtKnrb"
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
