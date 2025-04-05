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
    "2NZFvMhYKw1iwsxAGb3AyP3kBMs1A32c2nUwAoiGqwWUFsKrVEgxMcH2zuGdFQVQeSZfkNks54VV7ksxEQjwEJAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gq5rCARqTLVcrhPw3z3jcBYz9acvKexS3Q6sQ1N513xFPgsgHWZusN7DnXVu5HVTf9dFewfasj1LAuHM2zefoXp",
  "key1": "2hY7FsbswQZgx87cvGPp6SMgypdoPrFKGATzPoSr9tmJuqSysfAyP8xhnLkETSgz1DEJWH8pBcKADLfqz3xRHfbp",
  "key2": "GiKKEwwDEhV4c3JTDhn3pFyfpb9t3nUkU6uhuD3MugbjnM9qSo9jqzCo5tNH3qg6Fr8cmgz4MXdY7R7dYThxLru",
  "key3": "ZiGd8BWSdswcQBurbLFcMowUsa6fBssYqj7Dwkaz3FFKYSN6FakX5eheGXaWarXFTXbzqjmMCSZjNiGnNW17xT1",
  "key4": "37W7J2Cf7eB4eqEXExfwzEELdRrtwSr9rWLM79iB4utsDdqNvhHVYxQtewHnWfNTv8VozQSNgvUDgusexJnrVnXn",
  "key5": "2Tdx4fmjtEFHDwbdM8Gnif7BzGJpH2qZdGD4e6TfDX6d54NeCERJLB8RkFK9rKouNtDZDhJqxXyzDHyFWowyfiKE",
  "key6": "2T5s8UyaVVsW8Zn2JzGpRc73Bi2mgmLDoRKN7uoqKsGYgwVThUGLG25QAE6DawoqkPVaHdoPrS1NfxBZLiRAFDuG",
  "key7": "iemKRcW7U3uMb4S7fih7y3P5s47XWfqjssRWeNqvacBRuRCV2bSXG3nWcHE7oYHhgPkimkBgKCFnPSV8Vjyg1VJ",
  "key8": "53gqvsSiiJPnuVHfjB9RLbCPofdjsR8tAH9ewX1p1x1UGX5imYSangBZc545yonPYBiqHikNf4XHQyrJ9Zh2rQkw",
  "key9": "3FdodCpW8c1QKexwKspwJKd6Hv66znxpZ1JkrTWhLDM1xKE3fV42whGnFtifCggbha1MwjkRAVejSZCx9imG1Btz",
  "key10": "4zXJyyx3Tj7q9VjMYVeCYBQf6tX4HVZtPRCkNqUnMNYSzWWqvBkx9rAzq41vSAdN1rtxdstCtmww8TCXmsAGujCm",
  "key11": "4J8EoU8HcW11yXWzd5269rC56HfQwx2Cju2AJbgyuesnXb6qqsiguzTLSB898rHsrpCj3UCiPa6ySQ7Mrh44TnkN",
  "key12": "3iPLqYbuiHkyebwtf313E4dQrgh36gXBXCuZwRndaEaDo9Lpt8C5QwaH79V5pYkk9MJFYJXj8itwmpkXieosi5Fj",
  "key13": "5EZtafyJ8mVWyQA72UwPa3J6zTqBh6Vksxypx9oGVixWHdkbJZ87zWhbvNk1TtJtjwiFcbdbBJGkgxFwznP4uxZ9",
  "key14": "2p7prNtUSmuPSh2C3BPkhPjLpdYaViSvoZH8b1UWuuZvEY2TiYPbpHkwE1SgTueapAWZmNVaTeGjNZ3PXxmFaxaH",
  "key15": "3Gag1ocd6q5W2rRKwUzp7GiG3ujCX6fYJ5SUFFk5U5F7Fm4XuXD1S1ZRyCWpftygt3aQM7BgMiXMiyWqmikfFn27",
  "key16": "5PVkTjWG7dVbmbwPzAWEpRRjqd7Uy6Ccy7GdZGC41QEqH45N6vcpXni9FdMYXtgNn12CmWVqC68zqWXA5ctDVPnt",
  "key17": "5PaWNoYZLYjYqECVuVpGcKZR4j7VjojASUUtfJ8TcA4HuKtQbN4G4NfWSzpZYVqV2RRkKeUt1rNi1aswp3paqhSp",
  "key18": "2SrJY7HGYrMj4mBjwmmjDt7qYGSNvsqZSKi93qHM9t3rN3gsSKt7Q3QtH1A4G9NBaiV9dymesyAgNNweWoSHEn85",
  "key19": "65qLzDg844KaCPD7yUViVNkdkAUsouSHfEEdYKV9BhAjxBxTwmGSNB8ghtGD2h72FbZoonGGmLiJviXVRNpy17Mq",
  "key20": "5vefMgiepVXPQqi4Zb7YystnsiUAskXVjjR56YjeEJ3an59hymSd2oHC5gW2TnEu1HwHHqH6T47tWqCggdmqESnK",
  "key21": "FHdxVS28FJDiQQ3irs9adESUxCjAED5MJaMC875m1eYeHrAP8mWWiPLERNm6rFLb6q2x9AjhfcB172fPtpddRRh",
  "key22": "3YZ6u8iXSLHyVC9qFKGH1KAmGHV2AyRaDcYQiQDxX66iEutcJWJZzpgXj77RuSBnVnKmyruJMbvE8SKcyEAiaL9T",
  "key23": "4odWvBd4LMZGWmUY8RekuD4TLCsneyJDNrAcWD75tHKVe1SnKteSr5GBHcreDYXz77A91fDtE7XGUTkis9dtyW9W",
  "key24": "4LqWXu5curZ4apcEooDvLhb9txNK7doh2AKmLG1W2rCRkoWf3B5hvfcUYDf9vtW4eMsdAqbrdKUsb3nLYvTMZvkE",
  "key25": "48B5aemVEKDKmJrVx1neivFwcHvVNbYUEFqFQUVA2sLjEGBNgsbtvT9iU1xS5PWmxv7XBYNEB8FnQfZZbbqXzWTj",
  "key26": "4JBtrN8c2JyebsSkjwevuzATeBmXBeU63eo8tqWeTXSGMLkhGMfmMLrjwkjrpcKyQbKkB5aioUGREY8Yt6ez76QV",
  "key27": "22S5yVF936vhA3y35ehn2qoyLMmyKE2iKqZfYu6QKnYtSW8gVakQtSmbcmigXkhyDzvBJ9LycTr9PWYRWftg19Yd",
  "key28": "4YHTB653L4wmqEFTzBeZKu99pqxvAqHsXyD4mskGLpJf8ubU9TpHQMut1YF6MuWwqRyLQHpS7d1bWYYqwFG13Pus",
  "key29": "2xE2Qaf97VsuzzxdMMjiuLRXhf4LSLxJAfBCFGf7T2vZu91HwCihAJejMNnUaDdswm5wHNg95G2xxxzSrhVFgxn5",
  "key30": "cQyRpyVnQYhgNjzC6TGCZXzEiRNLQeTwg3FqJFeCJtWZHWEhpgu5wWK7zfjCMsWgiXK2TQvbHFKA5rRBcdH8Eto",
  "key31": "57PP8zixAJht3AmFAV3BWGCKwFMkmAHsPhYUogFNg7fdKouJ1QkRyG1LrrrBcCx3EY2HSUwVPz5W9TRXCi7GgFEv",
  "key32": "bQCG8M585NWmci7AaLV23EVKLndR4i6xaTjSwGzSMmeHsq6JkZMqLeCmTgZjMapiEv8M5gEgNgVFBKEGNkyyCin",
  "key33": "1iP1XY7zwLuUy2afC8Z35T9RdcMJjQZe9g8rRYxGiK2oU6QnD3juJZGQCf7BJHLPWQ4XdqU32MkHeFZwgRHaQj6",
  "key34": "5sHhSmegRhYAZPEFZdTK1b6gP61geCc2AXerkcEaSGPyoxMVTaFuXtK6dqQSUVkQQb3K9HAAeohmaxj1iuhVSGto",
  "key35": "4TeRwh7mKEvgAv8FWGt8ATKMtiUAYqGsizgC7FhstMi9FuTdGBcPdLsDPGWDm7nzKeusg7kArtRx8ycURre5PGZH",
  "key36": "5Eq51LKi2KzfBn1ZCnMqB5cKJBkPG3owoZ67zkcNxZPn4RYm3fiXoxWMnJQAvGK7GLYA7XmjukPAtwtS2DczT5Gv",
  "key37": "4ccSP7jW8S4CL3cdCYn2Rje58y7xxyFYafhEprYr61VzKy6UrWasmnLVbifRMHAXsTYFJs2YYpdTz3isj6hKPjm6",
  "key38": "49UgRmTiJjH4efipH8JGrvKMEVnEfddTqnW8nQJgcRt97CqrtWcsxx8UG4qnQ4nRhbbq4GEHzH572vVkpHjEYoa8",
  "key39": "4YUhP158K9q7s3GFhgKhSVa3Yv1KgSUwGEiF4GqUQxuQCKxzpSJvzXXh4U6tB6uxfu77f9qj4RJtJdCcEY1sFvah",
  "key40": "4q8QqpUwBWBUBpeUZPfHCNJwkycfgWpy9AXcX2XKv72ZERTrbjnYihpzbXgyLiMkC3QCdCPSTrB3ydgCUSiN1bLs",
  "key41": "29YTHsJqF9bkpAt5vCN9uUogL2DBLm812ADNnYK1D1v7p3jDUwTJinBiRoKi6PTBovzS6uEQwydZZMRsX2hveWaE",
  "key42": "2EMqCXryx9AombsSeA6QRycq2y1rv5g6HKmroUUYEVvjXrDJg5br9cWP8YcEAKnnQUrGYgtTBqYJ4EuwE7zXDGgb"
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
