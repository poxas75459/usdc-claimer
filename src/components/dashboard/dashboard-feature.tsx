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
    "66UvrbVgxX1ZetjWXGzr4aT3tgTNMixNQCdcgYpTPgg4jWnV5iueSDTkxAQHiY1H9n8Evadb3N798YZeLjx8ttri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kTCroVqjHBEYUfFxiya4Rqbj3ACL7DeBE5fxLHAS1QdMuYVTb4Ae6gc4H9jkGv8prNhZU6a55mU9z7Xt5fXsu9A",
  "key1": "6Z9CEUjZdapgdKbBJtxgV6y7xkfZtDy6GWxEk1yzXngZDSyVNoc7fVcEp1Tq2z35GSW5mTtJTMzUVV1vhVLv1f3",
  "key2": "3kTApTznipiq78Ci3FhQe2AgWU4HJeoEJ2pFanvYMvSinCzH9hJ1zmobuhwqRMppmUyLe8DiPCyPYtLf3wGMFeGS",
  "key3": "25FagXDrt6V8yB1KBuUDJTRvVxqyDJu4jU6vATAphd6fu8KCKoeJeFXUAyeQjGrFebG6n44AvxmBi9QC4ZUCFtxD",
  "key4": "2jfFwzt9DZsMZoseXyx1hGX5MWoKmeDEuWU4qupiTGr9hjJ6CRahgc7NNezQda3ZZSRn2DqKjTwHdEvKajkqpmvV",
  "key5": "3YZkbtq4iDv5spPW2wUJTBHHJn6PBuakH5NHXABSYDYaaW1cXbtiBUZevMPtnbjUGbccJK8rHho9aGj6zrcCqH8h",
  "key6": "3SmaiMAt9AJUDaXrwd6HxuG8t2ifdguwE8ppvc5GVzwj8ZuqfiJQa3KJqLf9LQmUwcwwseZZPz3RtZjQmyCa5yjF",
  "key7": "2xUFaWkNiA5DCRsyH3xatH57vtvc2hddpD3YEJxoaq3iRd4WCainjAq8DARxu89a5Ca9KJSt6Nt1kPsQevE4mMGg",
  "key8": "2HKN89tfQmy3u52VvPueE2JzHVmNgKe2mW7PVbCcRTEXLXMMcdquCvL8uP2aU9MyYTV9bhQBguVHqwsUV4okhN3J",
  "key9": "4VookEHgSc9soNyQPy3MevKRkE1bZ6Fvbg4ASAxas2VVgTfRUStiAmcV1WHTiquxkkF4tnDXUdMEa8Acqu23ZrRo",
  "key10": "5oF3LatQJRYqnroTnCGRHzxNjCDpQWZ95dgx388MWAo6zXD8J1YXCPK1mpfUNtJpCgfQHwt6ejeFm5BrEWpRcYoa",
  "key11": "HdXbGsV51Nrp4s42RcjfscnL1WLY1S4wyc1goHUxMUmJhdMkdXXGfT5162m2ZxwCSxqYsX8W5kzJRbFBFJCz46Z",
  "key12": "4WoyR6cFHsQ5j4JyJqyntVxsbthve4xz6FPtdBojBTHm9gofb9BcS5TyibXn4sG92ZfESYwwT2jj5KbPNEWfcd5A",
  "key13": "xxqJGckJAWVBTDvcbKp7F7LjPdtrhGegd9jnZoJeQ97GF2oKtgEVJSTpHEa6XVZQNnbMDxE6KN2ndRiWQLcF4VM",
  "key14": "2M9MMBDvqbh3f6yGwrWEeHmfRYC7oFXpG6EzipCbQrHLHVjHs726syzKQSXNx3RrBkk69PEC2F9nxDWkfHYVGpLK",
  "key15": "3ZBD2ZFnC1fauQc5JWVkskJDF9QrTpMwZHjfWbUJjTX28MTMyJWXtsEexG5xSwhDE5nq8XPa7jbRBBsXsXDrzV6V",
  "key16": "ikkqFuWH3DNyqPJi3xhiYGxL79Ufp8kYKfuUhZHznwHZHrC8aoAW49C4ZPGWkqwEv379Vi2MXVE3t3zjx4Mg8Vb",
  "key17": "XZHKhabs4y3WkhvozrZDLjyAbxZrFqtT39ymcEtVbCnustMSQbvDr98eZdt6u1s8ipn2opQCPQfATxF8d11ntjG",
  "key18": "SU9gRSTThvA4Zr1nUedJy9wZnYhNdyp8aVcPMLbHV3zTu5nCwxJEGyKwaMnkL5qS82f1NwtzbVf3dqMGuG5emt5",
  "key19": "ktPuHtuSp891FGDAAYT5EuN46ubDsfrXjsitaaNPNqju3cqH31LwKF43BcEPndLf1QZbN9Yrj2yVQWkp3iMfgAb",
  "key20": "3fFH352knXbfAuRTyj5Nk3a7EgMPqTeswps62AbDhGE9Pd1f3Z5m1DwgQ4wtsSHVT3hGhAnEqHo5TsR77QBqRv9S",
  "key21": "3VsE7gFE3ypbt2Hw72B9wvXgGuUTDNmmTsP9kJWn25Ry8unjAwVhnFdaVEDyB8FpHxQf6axwicN5gfKK2H6SNQtc",
  "key22": "3QMVncjHrxMzaCrP1wU12pqgtuWvLDdXe2kA4LStzkR1YL1bEx1YcJTCrXu8UxkcuS7ek7SDkkgJucGbyres1yYH",
  "key23": "2J6NEK9CqCDqFdzpfPBheMBNqsvK9amh7c22EZhaUpVR1BdR65W9LpuJfkxkC27JwH28fUjsFcP2WGztb5U6outP",
  "key24": "2c3EzGWzMzu2LCKMFjK1iwLeZv1DzTW2jUDTvvtD3VPHSqgfMcvfr3jUn4EU2A9823VYyp8SK5EXQVRUND1DmiUq",
  "key25": "65UyXnguTMtGMmWRCvLyDeB5sNqJMBw95UHjV7hp6vpZsQvvLS7Fpc9Kb8pSDrMtND6rPFmTPVrSoqhpj7JC8x66",
  "key26": "qMjXqY5pmwFf6UuYioRJsg8fhPY4tb92Dq1H1GWRLLw6xxkoe9UGfTrtMD2aYvg3g4YMCcd36qvvEKS8LToadZv",
  "key27": "4TmoAbMzMyhQ9i6ZgYAXU96tuyJmD9hZYHmbginrNPzMY6LcfbV4BTnkJqnYN6avUiWdp85U1pdfx7UBBnj4WApd",
  "key28": "3Q5nzgzZEyjt6ZfxqbmSiuYzYzBsQJ5eByenYJVDdqBHBmQg3kDgYRZFhGyxdshHxaMFgcc2tUyMxr7LPgxqZoZ9",
  "key29": "5WBYxrvUM221vZPeJe261zy82HD6yUdfskyxt96c9fPynBSh4rtXTzZjFWEJ2Vg2CMdjvikZvRAaBSsDDDQzqTzp",
  "key30": "4TqcmLWafWiXAKY7mhX5Gx6BXGMTzsU6qHKEuvJJNDUhMwYdYtv54bFon6WCY3KzN1is5CJZ83TGZ8WeDU1CLJ6A",
  "key31": "22CLgSD3oGCSAaQoEuvxb41zw7ANdUWsJ7eWN8CYK2AyPWYyGMTGPm98Ze7fkot4UoHfHhEob9rP2zyfXmx4BNqY",
  "key32": "4Z794VSwEzs3HCNY8QRQK29e6BmSLTjuUzmq9dhdGymXD1qfqWWJRgbvaKvgJc5opnfuUg8fZZnhsULrjZf6vrDJ",
  "key33": "24GYtSmNfp82JPoJ7DBSYPenfJgH6yHa69bugeEr9Mf94WxmHy3gwo3FdVPCRjkS3f5g34isfrZojinMAa2yYBsy"
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
