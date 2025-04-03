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
    "3gND6kWudqJSQbuhRBfPQYh5TZUKfzwRDLXmuHnJcGLW6Z9UJ3oVmZ7Dx2Z3hExYKmfQREj83symhPKAxPwAVjb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SD78wr6McyEftP4FZkdMhiDyhyc9xf7KPQqWF7ByJA6oczV3pHcUn1JsyETxNMmhQMihDxJgxd4R8kbcbPBTMT3",
  "key1": "29WsX1eEZG4xeY3meCnbuyHnaAoDTXRmeobDaxcpNJVixzc9QX1kXXVDqfTxpknUunKsofYQgLv93v8sVQVuz3Pi",
  "key2": "3xaoPwZj1iWgrE1Zpf7nrgAMDGGEshDxe81fw8Xm8B1kFxecU6pYzcke1Zf3YsSRfcujQYjQMCuaZYwkKMDWuSKo",
  "key3": "5RpXnihccbYMYNdUbg5vLDj476KjNAmre2drYPym7H1bWYwkC6Tg5GXzC3xoTFPwxDvgA73B6hUnhUDEvsX4mRpP",
  "key4": "2kEKmZYZUaQgyPQUB8pHzMFApjUEi36jHNwp84iVDjsDQYSHgajAA6DQpbEcGxYW3aAruzk9nwuiYyLEVJBQk3Ja",
  "key5": "24f6PymfNuKeY4a9hQcqYgrGJv3KTfj8vakZAi5SLFHXCnNaSM7mMKFroKW1Mn4Njud3oaGbKym2xrH1RbQi5bX7",
  "key6": "2W6zjdi5mdqEUasFPosbathHRW1ySYQKxPFae6d6rXDjNys21d7DZPgZrnBKJn3vShk1NpxdAmZAuQGNePEBfWt6",
  "key7": "3byduMRq76UXbpsdvwm5MZioASspX6WbP2FaoLX6ZcH9XeCigbXsPoUiiQ1bQPWKQDLriF28GUK4W8t8phqN4WvL",
  "key8": "5mg5zJ5VF34JYonkcEEgfnSMAoanXM2tfwxhH5ZDuE5xhzcrdPZbeg6jtcyW7MR5P2jCHgXuWwUJdbpF7rLcvkCn",
  "key9": "kshgbi4sbamWJQ74KqFKghR21VGyQv14bSpo3epiGsT6HqQS7qhdrWV7ZY6PKnuhWjFzuvobCi8MKfWT44gk7Uw",
  "key10": "2gb2S6AqFFAVDTW5m6YiC8Wd2duZdjxMFqADGshyy6Bfca8xAAihjNMMdi8zJMMR83Zia1sMKedADZAuxT4gCmQa",
  "key11": "5GWkV4BTG1fcAchLbCswWBBmiboLwdZLJFaQwQ98LwwxJoSkzgHdjpwZRv1WnxgMMrPxkD2uMDT4pQEbgmuVZado",
  "key12": "5pVG6aJAY796hkGrkte8tG6iwZNrfUJLU5FQfBAnq5PkRGaDmzQiiYM8FjbS1MKhKCMd9bUyUBepuktmL24V4uHG",
  "key13": "4yJX72uzwkLrqB5RoTX5ALcskmZfLyNvGQndQML9G6tCi21fVXkxbuCbSb7X4wyFyyhcSPdK1BawL2Xq8xCzXHPZ",
  "key14": "5QD6KAXLd2rT93AGbka7oBbZYtYpFR8xvxWzuyU5eZHYtCcCSTuBBaNf55CJqQaVjZLzkEPZRPcuYT16mTne842v",
  "key15": "4gfuP2xpqSfjctK5Lj2YpjikLBqcBRV5kCMWpCbv3LQBeEbbh5XxJcQBKv5xAAaaLZedTAnommmUG4K1XzReYQxF",
  "key16": "2ok7upGnC2D7CEPWiC3wqJ4hhLJMztQtxDfNBPd12EXu6VkogDSXqq59PgMJFrP8EiajHTdyKWLNVNTxdFQ4cFCE",
  "key17": "2zC1CDcrinwDuXEPGLnnXxmtu9ogtR6Rdk9ytet56nj4RhowdYUuBJAkajGYFeMbHP6SZRUEbttgVQsKQ1qjdfTv",
  "key18": "5BL9r18fh8FK5xcNXvswdvsB7YepJoWRo4hrX2Ca9g2Grzdc3bWTSfrzgM9U4jZiECTQW3pYg7TmaJqpeSRHfumM",
  "key19": "9Z7vMPY7yZj4ahjgxTG2A5E537CxkFB31cY8ktfvdnC34awCZnJsZXpNC3JVmn5Pui64jGM5EFTMifWLDtmo7U9",
  "key20": "2KCxN1sfkttSyNp7tksu9AVhjBHvDzj4gUDaAj9KyHeFPQpZAo3WnZ2oH1mzDzURhTrgXR89D1RjeoXTnQVGe8dV",
  "key21": "24MUBvJLwfse5JypdVogCzTQZDbmpASVc9PK5YQyp38FXrMELrBzPUfwGLCikzrUvWBdcPAE7P2xYg1yZd4ichiQ",
  "key22": "PCcu1fqcW7J1MESnuHHo3YWYhSxR4pQBnCd9MVvRVGCXZNcqNgBQqpZA9gnR5vYWAYi9Zaadg1snYdvCPHVRsKL",
  "key23": "4kp5LiaThvQYkjEPBwCnYym2sjMAc9hQFbkttakrcNzc1NQXJxJ2zVVTnbtPb2DgMsty9mwfUngGimnZXpHcwMa",
  "key24": "3movJv3qQcmztFNzBQW6xRFcTxYqZaFfthF5cCEuwFBPWU3SJEBz9hJmgsP7wAtwzXKy2gReDzbXpvBXFGmgv5yX",
  "key25": "536ntgupSbmZoBLZHUBjwaqsGDiTjbr5CS2Gds7B91SeXdgyQRQRaBzNRDzCf9ocpaTJgPzkNvJWuqgopvX2tgBg",
  "key26": "cARaTreJupVyoFC5wtFR5jjp3KUacMGCXfqrCP3pTzLRYCmPRPy8DxXQL5DDokzCrnLaiF2ARDj68dmvHp5Jb8z",
  "key27": "3LVP4FE8xm8PfvA7YRAJKmf9hZcnZiWvFx6SPGiYTrMNbwjeCJyic39MD1XCB3ZRA5Ya1dGFA5T9UJURSwvkgqeA",
  "key28": "38dz6ZUxRpu4S32miWnT7sJT2CZcef1E71HXEFGW14tYnt4ww9s3bg6Ng76SjdfWw41azUYNPBQtvMTRcsY7pKsm",
  "key29": "GbVeP52EyDueQvrw1mxihkr3ywCUwcGmMpEC52WuiCHBtFaErHz2GTSwvruZZqvM7cRUrnszjf76Et6EGG2DjY8",
  "key30": "Z1RNCSj8rqggECcGekwgzgACDndXA5bXrbz43hfYU2aoc4oK6icHTNtqonbsAoPyVUS7UbF92DRwiLuuLpY3HxM",
  "key31": "euAysJDtaEZ2gdQ3B8Xt71Fm2aBbB98Xq7tQTMWcrKPaibrrtEf1PztrRYtxvQLrsQMjrTgdsSu1c1emWLd7nSZ",
  "key32": "dgk4yscDnMboRbr1QM6S3QEG1c9EVG1Zm65GAHSdRRFQzVjFunfTLcfH5BsFEkcvKWYDUKzHE3hRiydnY2ujRsy",
  "key33": "2pTiQXdryp5hq5CkKPnM62oRXkLdKp73MVe5i44S2MDJ5D3NkESfdSzpHenWb1iUQPEH6AG8DsoXRTSq8PYhM5d7",
  "key34": "cfrcscZfa1wMxpp3ngzGFFHMnRdrfVgB7BS27x2c1kdRtfztZk4CH7LFn5CN6v8MPvLFxmYvYje96kzP5N4DuMR",
  "key35": "3ig6xCeLJCh6Udhh6nr6hPMtKtbRCgeiqJ61TSC3kR9bBYjhDzoZtiuiQodw4GpXNKjXGVJP2rN4JLDtzvGopiee",
  "key36": "3nvBMvZwgkjsFJ8gZ8DZYPwn3JkEE5LiWSRtuz1sCquCBg1bALhMWa9PEDkv9qjW5ZzvQp1h6v5YMGttDG8KDWYn"
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
