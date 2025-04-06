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
    "3ftrBs1UgvQ89zCmDrXB7BXFjGS5LJBGSS21Xzxi6YsCiSeKYtAaqUXewYLve4bNnoCnwe1k7EzvkiKSUcRbUaE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24sYzMUJjpQt8kScBoRHxVfbSxBKfMQJAEfDrVVzfyB2gkVFPjKd1wZUPh5T3xopHEGwStGWitAKrQY2pTGnQ1hU",
  "key1": "YEknUmyt1JxzdWVGE8ppPq5CadR6Lk1HwJP2cDGzghsTWztTUErGEfhnUw947FWQcQgE2GsPW6gQd9kCtxsymaf",
  "key2": "3XbfYJKktt2TV1KCf3wgogiN8E19WfELenV4bDvj4rdwmfHqSeeW259SKgoZ76VdYXa33BNUqycnJxNTUit2UA2g",
  "key3": "3RACzHjeTW8VJTWUA5rZFjMmD1VD6G8Bj8jfDSqoqLhuvPtZS5WovG6LpkhZTxZrpUMmEs2KvdYHrPJ5A2gDiDiE",
  "key4": "3pcHvJjMe2Rh3driBAGuXHBzkrnDrg3fTYUbC2DTmJdR5ZwNHUuTsYZpLcVqFUWSGXPEjjpVN51NfqLpLQXd5um8",
  "key5": "42qpe38uEawtqhwiGrfQ62ccVw2G5XdJQEagLvKaU6NGS15LEAcnbFfHGJaxykBQKXt6HSspwATp8LaV5ZKzy4kp",
  "key6": "59AjoHLqDwpDy8gXDFgc3F6Uya3hJfKzSdpaym3iMnqMQjYBwnAKsZrYUozA7FDjHVoEudZmmK7hGFnwHDBCpemR",
  "key7": "5pjASaEVRQoX9BbHDrbaeoCH4qxMNDfuHtuKvYZebF1Bfy7oWxg7KrNb9kgZNFxesFu8i6G5dBFYDkuEmatTVPdL",
  "key8": "3qsfWFPLLxQUtLRyFsvrZnt69dwEPaw64Kn2zutLJzqNE8yxc8K4De6Q8J1UGxc3vK9wio4cFLsHDGCDv78ZTx8b",
  "key9": "4wqwN7u49mws7yFhJzQGtC5gRVdZzRWxCQZW4ZqjyddWR8DR7TooRxD6Wjk8J8hfYCAeePCit717PZPpWS3gPr9J",
  "key10": "5KjfvbAJwNX78o7UWGdFkNqMCsi53fWGkZSKjnvAgb1Uz5f67uMY5jBnWTJLvZty8REfaetbvCS4NKf4SL715SHZ",
  "key11": "d2PZyb9oRsVDAnviDqijtfWvDtYYqVnGw2CdRWUx7dZGfXCDgAFfGV4RHes4axeSy71gtCkXY4D4FcsSWvyFRL8",
  "key12": "4sYEaVQfN7m69wfDtq8Q7FpBWaGYJSWZz1s6hCRenNiYXEPpkXTJdbcpV2LYjz6dk4kSqQDz5zr3RZZDbjdtjQfT",
  "key13": "4npz2eTdevK35u7r46DwgGkQRH9wTQCv5SPcbnWP6qaPzefJjpWnrqtLC8bV9tAJKZZRbUwP1VEN2UA31h9q5Q8x",
  "key14": "4tfNUzHmPmMz52vzX92xidGjHR9awGBV4szWhnnoX53cGwr77TnCBYs6EPxJ1i3Q1ddqhvtUGUs5YcML6nowHkhx",
  "key15": "3iJvRw6k2VkXeNVTjLA8DWQUX927nxdaktgDL7322oue7xo69uQfvq9YP4uMV9zJ8V3ZjLG7wdcT1f7Vu59V2Xzs",
  "key16": "44gGfzY6m6yKZYKPKmzwugUh6D84AZdxkgtbC2SrSjqM7XPx1MXPgJSesi3FWR8UfLCXDyQWbQz7p734tkkE3ket",
  "key17": "3CgVm5MQt3rsYb5sBuo11XypX5JhJt7oxHxLCtZKwNYuskSicr5zQaBFfeaNSxEVtUgNf44ZTuVUv8e9TeXysCn9",
  "key18": "4xxRAZJFosfx1BgKFxiWbaf3gpw71q7RYeaT2rL6zwqDYn36nUZoDsATsVtFWjpjmcvDCZFHtSsN1aiAaddbUKsy",
  "key19": "pvVh2RmqQLLYrxpLfwCi3mqubyCa6rn8jrAvH2jAjeQLogHoKvXu4gHTSEbADuFZ3dVggg19y26JMAoVbSDBwN2",
  "key20": "39zfxjDgg2JBS4zPPZpzMquV5uNamtdJX8GdK4cF6zXQWkZqDLawDb5xVU6db7h96jREpapCbHzk8NjGucx6QGqw",
  "key21": "45SZKtTesyzpmREYnct47rex9pYhwtKGG7H81H2HKeyZtrYhdKoRbzuEd6LiznEzYC94h2fKn2fTJ3Hz7mwgWqYL",
  "key22": "4PveP3xDQR67i9A5QRpzdbpnup3avgP5vbhWPa71UM7g54FrbeDUjvyEL39fZMcpRAzaUnyv4pWiLXCLSoiGy9SV",
  "key23": "2H6PZzgUNa8yP9Bk91GxSNhigkN89nsHD2kCkkkCL6KyJSF27jk4zRkxkyrfviQFAPWF7z6ud1HJb5oewi41jcB5",
  "key24": "5gij7pN4brPvnYFqBSsp4uKBMvbbidhKQZ3Ci4CPTzjdsycJ4uWHnGZREkLnNw45GMhvhm4QWyCzrUXA9TEKBWGm",
  "key25": "3xxMBizoJMC6oVNxENBHX3XQEA7rU45FmcvKroFLwRBQmbqiDR2xta91NabwSA82p2v2WssLQN4Bq6H1UkWjZGbU",
  "key26": "2cc6v7wEPXF3sgDRhxX5LtJkvyd5aSkjNLdNyEGzaHcnm6tLMp3xshoe3uYh7Sw7dgAWfKMHqDY3yfciAhfQiPWc",
  "key27": "2YqigJrDX7ebjzM25nfVad5k34RyJsQyEdqhP1juQns5asfdom5bGiMBZsBJgfau5GD54uG8eYtT1cGz5dgh6vCV",
  "key28": "c9JEgxt6onhAtxVpa6hUjNDFhCmGavucLTsct3eSvAKh7a1FoT2wEu8662MoKwFDHKfaSGGRLY1N6ck22M25AMF",
  "key29": "4iPfw6KmyNdgby4vVFkCJHGPEaZiemmMBLerahDLR76hyyfgiaDtt91kk1zCbUGQNGhn32cq9mKApk1MccTWK5pC",
  "key30": "TiFswmEAabbEbzWRwqjw8FZbi85cH59yCLc71SxH2k1pWzM95rF5NEtff4aPwD53bbKA3JQkYRTgiQvwSmEbMTJ",
  "key31": "3kozejGVSNvzq68Y17zBrJTGb6nvQQjhHzhFgva7etwQyCotw4kDR3iTkVfnVeeQ1QisbedkkHgB6qcWJxm9adDU",
  "key32": "24Mqbsmc7drdPJhh9fXJNAJZ5oNZgMH5VNsJbyZFddepJouDUgjYeC5oW3u8LjkNkXniA1HRVNCLQY4ZnJncZGHj",
  "key33": "3t1X8Ms8sBAtzeHACHfoA31sNAu4AfPkE3YM5zFiGiKb1wPUvyYFi4j8eAyrM9YEK6zzjPeXf8skGxENRhhydsfh",
  "key34": "2BiMBQQLXXeDXRPw8gaLPydfCYpwBzUPGEydXJvsX2ShgkeSzRufebbfS6UUnqRp7TjsRFsf6CG3DA8P4Pemshm7",
  "key35": "5mJqMynHPwvtBRe1EwTUSMT7ZXgHTNHYSy4cWuAYwTFTPtuCjAaA1hjMix8HAmk3ww1aYLtViRtECsAKxSdLCLTe",
  "key36": "5DBoaX74ePWipmjxmNXEbWBjZU1zkAEcpsbH3rT7ugxJ4cAcPkgCgiyLfQzpqYzxC68VQLeVU5nZDEvZeWsypAzQ",
  "key37": "4Xs9TsX4FWwC69j7embHR3GJjuo3f4E5RCNFSDzFejsMeByX8Xur8Zs5XdAdBsAmJJ4T3dLzxx336q6wwfrG9eXn",
  "key38": "3E3ttNEwaRnMTHe8vt2rjY9CBETUBnM1c3aFQrU5Jaixc5zeG54zvC2NzG4TQ6NLKhCqCTJvXPA9bQtcK1YmqSNF",
  "key39": "5stttKVhoP6h9gWbUWnWVbtreBAEsBmaPRqQLzbd1uRjXnQBRzQgtN9ufZie3coshgXrJx5qMmKA8fVnAZ2CJTGX"
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
