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
    "2bChhpGbbZSkvyhScKYUzfRGCvbcqC5C5MXk29uhnNoTxsNs3ab59ofqpkdFf2ksaso1waQsXqpZyyDw3NoZfxf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PeMA1dhLMjJrptn99CxGSeZPkod5r8sQ7WoCiQv7H1P2NjXhBVKJJSefGi1BrvwjqNiCa5CnPd7JGxCKxDxP7x2",
  "key1": "2ZHRByXAcYx758Uuv9x9hX1t7xVLm9AKKFX2TPKQTWcwNJCc7LQMbxVNx8pozaNuotatrMQiBFww1BKWsKosfb7o",
  "key2": "5PPH3kRiLaRKfhSEoPkR33FP7DRKD2TjAA1tzQBHwVzVqcEDtHefzvYQzb2kXQV7tGvy9bQdRiNm9UUq2MxG3qVu",
  "key3": "43VHLfPM3F7CawVoqhyXSEMNcjZuxT4xgW9MhUFjkJoaZ3koweHSWdv4n5wjh8oBwwL1W7tYQhGhi6PLk8EbZcov",
  "key4": "3V9FuWeRVxwVquFdUCuRwpuNw1raFoCPdcWy5KBMsvgqV6StBNkbL5XJRRPg7WZRDF6JifQj49DRfRfQQKtpGomj",
  "key5": "88KgqKmjyBsRLhFjHQzac5QqH23akXBSEB93TmAo8J4S8FxoJUFxBymZYuqP4P4eDf5Qh4rEeCPRQdWK8uoUiJs",
  "key6": "4hsthkuAR5YvStPhmVHo1p32AP6jSqHnrm3HYwMxVd5tDpgikRu3tUgGWTAerFLLCgnBNDYo5fBbmRaZMbd27ory",
  "key7": "4sQrXoQVCRtqgtsT3VpizAafoi8DCJR3FPJac2hv14bpH6RaGgxBrkJ5DuqBgrR4ehtuKBqMziuzMX7J9HRFxj2U",
  "key8": "45mUSv8nDYJwuhK9peEeBYYKGek8EvvKUM2emjdnQHx1MxZa2R6mi2qx61L3meMRd87u3qKHzusJDi5hz5RnLTtz",
  "key9": "2yeNx5YkFdXYsrFejBYXcffMxxJRSvRmNbjW2C4aX5zGrpqNg4JxhfcrSSeS1r4vC77RK2xu8Mga8em8ojuAo2Na",
  "key10": "3fbYQS8qw2oTCmqSjomkbxNXUs42Yp5K2DPi6HqrGS6ivHg4GUvR7NsL2eNvwKNVpjAXFXseDddgLCnRxBFKNNtL",
  "key11": "2z7GsK3RKWorbByKSL4JdBZzHGi7P3M8YZiPNKsEmoAebLPttyGvJXxhZBFAkTNnUL28A4VK72NzZ18GGavonm9L",
  "key12": "3P4VBATKd3SkypwfZPRwtXPU41Hb6ViudmXs68LnbFxwJbLn97wFHp37wd3khi9oz93TGTXhe4PawZyFzZEZ6m2b",
  "key13": "5FfWfrqvFQCtwFuVFMzjH5U6t6TwHs62cDCwwaXGUn2ffBCSiCcR4S1Gcy4LXdcDJ3GfzgRBftjY1mDuaSRjpwVo",
  "key14": "4RWDuCMA7zU9RZvi2zEGo5NS517B9V4PGYUEfh1ND8yJAU9eWoz1m6AzYFCmkJRj3dTiQ433qMCfk3dwXqsHy6M4",
  "key15": "3jW5u4Z8kw4SDJDGhbfZGmgCFHiMLrJivWXJawzXxaGfrkkDz13SLXCPu5FMVpar6mkzBF6EkcGwztM4uDJCr4ow",
  "key16": "3ixoosuNw36bW9DEaxFUKCxMRsYLwvZvrXrseFDY2j4qGfVuAWFaw1R8KEgW1WLao64GmWuqa5ov4NBTYq8a8851",
  "key17": "5vqXCZYtmiwK5U8zPB4PcP3jR6gLhFL7VHuk1TTRH3LcsWRjbN6fbpo63TuZQD2Dc4j6wDUg9ARnTBExPoSprdL5",
  "key18": "3ReebBJXNADGoj3VTNfCKvrRgmAQELPqfSTejyWJ4dJYCyKcxUoLZRYBMNR6UWhoGFSpPeBY9oEVMgegEc9iei3H",
  "key19": "28JBfwxE87zKwyESjpGsDFPmhqJe4Ffsc2SeDUGugmn3tXrUac526Qx7FQNrk9Q1ZFYZRXbtNx5Tq6io76qNcEV7",
  "key20": "5x6AZGdkGk63g1ugmo3d7pnBtyrz4hoNpWQk1dVXLn4Po2Ej647aKuGcdSJ9ExHweE88yC27LQj8LmAcgjfrdcnF",
  "key21": "3xojZ1j9ijyfkQVN98x1vjV2fpneuQUkTgreeezf8hprkFqQac4NJvMF8Qhmvge7MsS56f1NSpZr9TPFSHTWoibr",
  "key22": "4tg5GuejqLspSB9Ugg6tRfDLMHkHg7bxNHFjFzs95GbKgGT1jZKyuf7hXDUzsohoEyveyEEr7WN95xEwP5sC5oLy",
  "key23": "5F9dzuMzmMxh2sdBqjhFDCGEiCRzkKmUDWuqQSBs3qLbNTTqdXztMMrhWswmtwxGTTtnetiQRmQuMgvCKuYHzv7u",
  "key24": "2RDJQRdJ8P3SmEFQc6av5ftiTyxEfeG5gXpMorphsaV9ERLEQpJTvWsu5XQyp1McgyofYH7zGayWtT5ELtQV8uH9",
  "key25": "3qxBU3T9tc3xygq6cdZPonJvzMVt47T4HVgZKDPvuELou7ZkcheCTyuauT4qstwo9YePbZ5oUCkcfQoAg81VYJ4R",
  "key26": "5MzXruDCd54bYYq8gLjbB7HiekZTZUfGroU8qFaoPqh932AmshuCSLhEabi9NjPUS225vFnQ7tzVhvfDUrUJj2hB",
  "key27": "4UFHESyR9yNGoMjiggpiTN5UoZAejfDTit27pc4ShKaE87ePdQQHPVyryW75PFmogetFLyizoKqyKpCCgZzoVUdM",
  "key28": "2JTSJBnV5HWQebUFe4qvJzb18rmmsb9cjK5g2ueCB9agDjMtdk7Fa4RBUXGQeKcQunYN77ujkyTahYWrbes2hMBB",
  "key29": "3pmVgf1ae4BLtzLpsi6xhMFupiezPdqwurZmTiZS2f4wkjmXiiroToMAw38aRxtGBKkjBAoi8Cdkgn5wXdvxLSnY",
  "key30": "27pvom6rXsZgnYrryD74NVKcrn8973DDe8L1mSUYQjg5qEfJCddiFCuGCxPqyvMsXcTbCVcApNEwWW8b47MaEAKS",
  "key31": "4YMrd9dANRg2H3TJNvSnLcCZc2fX1Q7maRUNTFsk7LWVKSNZwXVmB1dw1rkVhj6a3cwU2KbyfpELmbg4z13DriXc",
  "key32": "5VjX9F5Ep42g4dSy47vmuCYtrp3RB3ahXFZhg4YWGP6ZUmughRtbZRns4dLcTLEgJF3v1nGiav5tN6tYdwarWbJi",
  "key33": "4zDNhiZX3eczUisyZBHHxbxWz6zefbme324dBR26j2mUVTatDMksHZWrYerHrLJFWwT5L6nsNogRQ2gMgPVa28Hk",
  "key34": "5thGULeJKRtuu3wyPytToXwS94D7fkskueyCKw5ukNyShpxBML8KisBSFQsiyCZnFG72H28gY7NkS7kKoqFR8a8i",
  "key35": "3WX7txcziKJa8eJF9xm5Cj4k2vFggFqaUpTzWzuk6defeXnyzMxPsLaeLoLaH3NcsteZZWkTaJNxyfqaTqqsHnDF",
  "key36": "UdB6G6sd35hyPqCsXM34yQJq68sAPGuGfvvsDguQqKdyVThSnv9N5g5CpdK8RWdVYwKQcBg9JbQfDKhR7Nga4H9",
  "key37": "ih46TUC4HGBZADxCDd2AcJFePbSjB2jNsDa7CPXn4Xy2tALDumZhsvTf3fKVkrKqMHWztiH4QfFoTjTbi2rQFCj",
  "key38": "5jtcSPmhg2EH1LTNwHqLg4B7HTCMCYJqTu4gRu8A9cgEb1yMF2ZxuJ4ttTLmVGnoKr4tBZhZ4sUWZhofBGnN29AY",
  "key39": "5NFKhNAZq9o8vsp1NzV6kgtgBAoyPWJ9xXthGjGXzUDwjjDcX3G36FexmajyFFowFAKii8NPxSLTSGZSrF73d2uZ",
  "key40": "5YjYNDG4aRbUsgA3bTzHG9XZk6yC3DH5VT4ZFYQwC2WvLN8LjE1qmRCXJQx8DYAVNvcchNNkoaV36AsyajdXQZgX",
  "key41": "2TZkx24XVWUJh4jDXRL5xgB37B2r8cRfFQa5bWC4gc3XiHQxCVwKdPN93d2vWH7UzHKMryyYBwRHc3xhP9xgvkET",
  "key42": "2KkeBibNScJqKtkTM8KKdXsjUJJDdHFH9F1CkCEtBF7uHzm6ejHNnqzt22wa1ufSA4tdFRbyCgRQeY5jZWkus9Qj",
  "key43": "APvBmC4TeLg2NswvENEAFC6B1G4dXkci3sUnnyqDA4hvmfPW7BsbchF5XJVRVc5udVwpxvP4XhH4nXjRzAD6BVi",
  "key44": "4VckszuNngUvgedYiAG3MBsVXE3P6pBDrmd3LbryjTeb2uTksqyTz9Km26jrF9A9vqvhi7WErCK4DNeZVARH9t8p",
  "key45": "2xK79K4Nj9h2c1BjSho2mKyfMWSDiVYRG5Xk6s3hd1i5vPKyY7HU2rAZxxwJzEdnqD2t7fSQLqdqMHGEopWDBDtr",
  "key46": "2Ry7Ta53qJDr384yCnwsNhbsGQDwPN1U4YUYqVHZybWCYcw8eXsNqMVoQmvFY7iWtjWsLdLCmy6Ue9ECDwWaxQS4"
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
