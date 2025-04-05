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
    "2MvPUpBFwD79ddej86yP8nrWFaZGc8ae1tUDThAJEup9YXh5dn3oH3h87AXLVuvkqyhKibqnDUgakqFP8ZH4u1Co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ptFLpuKfEKcE1sRkivs9bhYNCxTQLLgq6hhxYrC2PTwFhTnN4rDnvLhqyNfTSjqskoVX8C11iv4Xny9EyqHciL",
  "key1": "3yPTcJWZHByJ32rFvpoH1iPjxhJ2k4xyoa2HwCxNLTorBwVJRFb7uMhEqDzQKg1L8tUSp9r6UTTHF66YYbMthYGN",
  "key2": "41RtCDfK5vR18HLTvTycevNmVEzcVx4dhBxtT6yz9m8DJAhBN4N9fc3wrU8d4e18gSKVqJBvSysmc7ph4Xqw98Es",
  "key3": "5QTWLFbhTMzAwB3DdnReyYWeuGvNVV2hehacKAkvEPp8MGmCQCE7auGnW5gcceacpQ8C5gKJz96hkkZZmRNvyAzB",
  "key4": "5NoJ97XQTvMhUTBkUkBB3JydQXqTKjWMtTZdvxv9ssxWirsL3QiKthgPjQvVnHaYjsFReJurtrKdiKzn11zs9q1P",
  "key5": "5GuEwYBxqYCsDMPs677USVbUWS2JCCU1m5wbfVqzQQnkkM1Ng5EGyVr5oWWyYwEJBmd8CUCmDHjvbBg2hugSTQwx",
  "key6": "4bdtEiQNihnUyAwLCFvsK2jtjX4UhJnJ5i8QiSnCJfvhTnbfQEF97XgJYeu34XmoMFwrtMT8kNUpTCofRGDmdjCs",
  "key7": "3Bp5Qk4hkGMH22Tdvobz2nS1SGXgeee1W8yaNVf737t898z3VZ3NDou5Supnkvs4NByS5DhwtUXHhoXc82SX5jqM",
  "key8": "2n245bgQrpXxLpXt2sr4epdKigzMeuVo5LPR8DZMHffGBjUDxKajRDWMY6JGdaGNx9EQfb67xVC5QnCBKWT9L748",
  "key9": "4e49JZ68oZAPm9GcUiV9C8p9FyCwCtkrRvTAXtR3LANwrGf2a5ukBSSK2BmxJGaPgnXiKRyxZWcmQ7ugdNPes7FG",
  "key10": "56Ky5VJhWFqExi9fgD5bsDaJDphJAe6uTt9wzo6fCGs6rq2pWj9u17i8MeV6U96GHZY9T4PTXfNtz3KiyBDWYqrT",
  "key11": "64MkBu57Ap6F4wPBo8W4pGckUDkghUh6BeeNhWYxSwqHoqxtDSazXPGBF73UzjwS2WDxNmfHTV7KjjccmMzbj7UK",
  "key12": "4ac3mreYHTRphYdJMtAZsvPYNWcVbwDCohMNQsPEUJSAPvFuA6K9BWTkug5Gv1c6W1Ysg3gS5knP5ySoZUtkeDLf",
  "key13": "5RK3EFqaup4gnkvLTJWh1ayZdNKbGQC5DxYAGbp4CG7Kpr7q93g1iPDVNfriqeCgDRVkxVPc6v2W3myzZbb9wy4Z",
  "key14": "5CWgc5JmUqSweghWQUVpVRL4xzyAiJoAqGWfsSHBQjmUjbbY3y9pm7xGtK6d3qxrvpbSdbD8QxSEZBa3BUxx71Sw",
  "key15": "4mveFUaf4sxfWJndpgEXYSjDBFCBpxCf9zCnySGk8CXgaADwRwzd2QX9voY2zS5NtFMqUY83z6Yw2PWBtdGpyXna",
  "key16": "35QCT8nrCpxYVhYvjRyLs4PV71uyffYJ5LaL6CKNbQrMtRVpnVzNR4xoSjExE2K2EFdkaugWVBiZgF3yjWDgZa3r",
  "key17": "5bGwQqvUvEvx6vkqQeNQsvdqxsVXm7saNwTcCECEduaHYpWxYFdu7bXvRbqTvCSBhUXTEny2k2jwRm5vuTrZxt3W",
  "key18": "5tosDeKrqBZ7KH5qtqDJAcq17xbcpcCEnQL9XNwVnnoQxDQpa5H6JvwCpbztFB28xBHFy4h8d6mxXz92n2Fmr6AC",
  "key19": "9pk4ngcx3SMPYVFf21bNt4rVJzcFqvvTDksrARZLvjfJitH3qax8eS1coBkbGmDBX5bW9ZwhQouRhb4Pt1SrQsv",
  "key20": "4LE6ojYwvWS14NkiRgGCaHEQsbGCjQZAmSndpvib8SZAYZSAwC9GCBPthnW8WfWAj7QTnZ8bXEwyFZyMJ9ddmBCa",
  "key21": "5gtkhMXjSMgkZYgHfZvx4EyyrpyqppFdkc23HeM128Sfj7WzDwtfZGnwKtxRRymvUQ21wurUqAZgtPcYGJQtpKAP",
  "key22": "4Qjs72eSchBf9LoyCWQN69aLWwsAjdYLq6cdKtt72KcAFmBnuMwL9SfnA7azRPfsetJsbVXhcJ43QVZao6CqQWfB",
  "key23": "35usnDhJ89YEubT6c4xomdyTYr2g7Mhb8PgXEer2QrcE1ogwTvwAuRJhhw2zo3TmbV1yjDmJBMscxAPKiXDQ8Agd",
  "key24": "5qd1xMN9KpoveANWPUiWFxmLyk2akmdnuS8c4tGo49m8rWssyhP8YDYgZUQP66GAgxMcyRuoq4bUykWTDCX9zHQy",
  "key25": "r3oMj37ZikEoAKzoBZMwhecSY884JmMhfByQ856Y92panE71RhPpfPig5DX4DcYCnQBwKs8SEwbPLcKHexRWc38",
  "key26": "5HaG5RCaYqKWeTwRJ2M5c3N3VGqJB8JzMEJ2JBg1bD9zaSCHoq5tTxbMi8hL45p6MxBVdk4twAoNAoMoCVXMfqh4",
  "key27": "472MfFMBioWe4JZh25xThuoqKv3aVBCKuEjU9chvRYH9PG9cTpH39ddYW4C4AQui86ZDCvFmex7ZxiqQAinXcq9z",
  "key28": "4nQ1Gk9sVRVKLjPmG1iT19xzzwaFbr9Tu3MaA4MdGM8aSrNaSZAhyceYpCPiXNUHpt4KFsrgzCLvdXFtxNHpiycL",
  "key29": "4VZAXfkQSDmtvyRSp3GcXaVBCsZtefyHZ11ayx2dq8FTLoBG1NiA4h6zzGhocbZjCN1PDEWvT2cvyAwJNxhK3dqn",
  "key30": "2HkvbsXhD9P24y391pTcLGLeSZRwmaoDs8a5GHrhZxZj6LqZxPvpLzM6E5ydLc6crP7MXXBgix46XCDzCNEAPoVc",
  "key31": "2ArMK1WVTZxQjMCzkr45a8QJWh42kgpHpHodkvXmdystYCfmkHzStT18okbbxLncGJQBqBeE9eSWtMh65wHPF7pC",
  "key32": "5rKaFgpLPzt38PWz5o1AzFAfZQAQd6uG3SmxAVMsa9fCJcf4wv9MUYLGh5LGzYaKhs3LJa8NnLG6Q3kL2YxE1eev"
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
