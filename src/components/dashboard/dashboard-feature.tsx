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
    "2yrGdbdxLwaqBzreobYHtoBZVyWj61XDumm4BKXX2U7PgXvsc7ok4aV2kiaTtCPrQj4EdiRvVGsNj9udJhP3d2PT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hamairJPfuAsfdccEZAzMuB8NinVnGHqutM1CA8C8b43rQPyjstBCbZXAJ7WBHwEQPRoEPcAG4P5wfzNi86RbJw",
  "key1": "3CVFAqrUFAXr8vBH5qgE4xvuMFApMrzfYG6M9s3G8tDKaCV5gMeHHCzoYcwwoKaJoWw6EKwMwDxQoij4SmgdDDW",
  "key2": "5VjBaYkBADafN4HhLu7i95fHHDmXGsM5VhTUtyxsqu1d6ZWw46P3GdoG7rb2tL3bBjKNHKinB44ytMzLnyPmGWaJ",
  "key3": "3cakAh2ee7o9VRfpzcFokGD6FDZUKeT24KUCqx8RWdRk6hJcDPZ834bL5KV8FU5XHyFYQDNRBqtYhQRmCiBtBD2S",
  "key4": "YMp1cLbC6AhDx8D356U1Bim6ZBt6KyMZKsQaZmHzNw84Hf7H8iJmYftAN1GjcZCLJbSpqkmzSsFH2S2szhQpoA5",
  "key5": "2MZq18vFsWk4tYPyd9RZzKvkiEedF6VCdqqoW65qu3V5dJ57xKMwaHJt8dv3nmtKdHBNMsFLnLoe5EfgL2bcPci8",
  "key6": "5SZnyWaCQ9V1uq4WK9ca2oN1SKKQUzPN9Xt6ayPxvXngu2WWGF3LEp3SyGz41WYVFp9BKUgJ4JGf9TBpJWrv7fjU",
  "key7": "2SqEnxLDRieycFDaTFw1CyPpAxb5Zf3kyFdK2NT8g1JK1NBNuYxHWFDdFJx8BVvFPBhS7V9LQ35kwmp4PRSpFXkF",
  "key8": "2itGxJHZ63FKkrmFYrktUx7JqdLi6n9vKvhLvCMcHyZMR9bAB7ykptVs9sTTGyKvj52PFTgH5NV6GNEzLVR9mLQW",
  "key9": "3YmBgiz6fdRHb4deCVJurxAxQy6svLgcxLpffA1nqXfWLv6Zts3MmBeyJj9i2LR5m2FvNrsq4Gkoy37BULbQvk56",
  "key10": "eakLtdKoZ84ykGNtAfn8i17raJhHNxWsFjbsVLJiYVjMfYvUBdB5JQ5oxoLbtJCEhdMVHePwKK55cUARqAvXTGk",
  "key11": "5Jui6R5wNHCQwZioALzLShm3pwjHeeaKAvkfeL4CiDux9yDMjPvQRcoa9bLz6uB7nuCzRbBc4LrLVngL7iYbv7aA",
  "key12": "36YHhu5JYccfF5dMwZfiKPta7MEsVGipmPRL7VMmeoRiSBCZ1ZuLTfQdAf16tg57fXtZsxBRfcMrVmqCnSRjJrtu",
  "key13": "2sxKoKNys4XAvHUd6DZ2HCaWWzMunqeDfP3U6xW12NmBC9RyKrCZYBTqrTRU8BckF477fTkLQC5koDE6r8xBztou",
  "key14": "3H64s68sELoW9rx9ZANyWsDUKbQyJFkseSccRH68TmtJDgiAzXs3maV8gfFkrCSaSQmn4wLVFeVdAmqP4aDXUM8o",
  "key15": "47zdB29apTUn2U6jgdkJMWV55rwmD2odaErWUhUC3oSp9gQ5sP1xGUj1bxWfUfpAGqJkN885DjoaCm49v6zEPWPK",
  "key16": "4TGueAw2gPCztU74FsghdR5rtVDPwuF2nnGr3czcuhFRQe7ogXtKLAqnioU9LGkR7SAq9rGcrYcgjdmNUMtBV8w3",
  "key17": "2sFRS5ncVrJ31noBvorqXo7UeHWHPVNV15PBhd5bw3N7rDGqVstJi9bj5MEDWeon5yyQBPAn2ZLt55Y6vcDzhzwM",
  "key18": "BZ9fCyzBjxKBKsVfKc9c92Y5BHDACMe3b88eFGJKpatrpnuJdY6LALV9hhVARGmpRN8dm1yQ4P9Z46Fj4qxrEyr",
  "key19": "5CiUvHCeDqxLZ9XDyN1DyvAStjyooABaiZKwWjM8pa86ZKTh63i5fm4mv17j38nUH1nZLt2VaEXgEp8BD7pjMqvJ",
  "key20": "4E6sYYWRXhvCkQtLm6naFsMKV9khDK5QCq83VMXLNd4aaGmbhMBNgm5D9j8zVcMeBGV4yfgCNLVEW9zyEUeHBoQd",
  "key21": "aYUZctZJvrK93FWpLRBpbYP3hQEsQpHygqb5zvUr7FNa4juYG2GEUSbAwkYid3S2QagzBEgLBuoKe67YYRNV2ao",
  "key22": "3w3WqGJ147M5SyfqMH9gXGyD9oFggd8pqHW1A1FDZto94tS1gMhHpofNGwrN8PPb1kkssprtmmsSZyNWGDFuQvyD",
  "key23": "4upVyPq8ni5pAGcM4yu4jae6SYSLSb6xYqE3GC1cphcZH2TvTL54icg3bMC2uRo9dezVUh98Se5Ff8zr5ZJ3AdnL",
  "key24": "62uFTxQniEvgMHNvjYrvHxwQdyw3fWcG9H3nR112dHXnrPVXngsu7ZzAVKZoW4eXWVGhFfoVvpeH3EqhWCj8yvCi",
  "key25": "3NKqQLiLcF9mW7xVUZ9DDHCJTdf4XZUBt3HYS92Kk2NcZx4UDyvrwTWrwRnPgPugzn7wiBCgxr6PGNa1yL9ye8uW",
  "key26": "59rmSvpJte9vxXmyHiuECvEd9ySyGhG22asGxn4hxfnvwihFtx61b2uHC8C8RJpcCs75twocCQyEcokogYdeMHHo",
  "key27": "2ct2ZaT5H7V3av9L2wrtpMj7fiDMJRKC1paKtahmELJjaTFpSt6L9vgPhy9ykuFxLFpfp7f7uD7g4HUVB4b7YUMW",
  "key28": "axrTfGNpjToC6J8u4DaMWfkiyU1F9AB2ao6xHH5gawFxr1HYVjwwfG66cdcjMWVoHBsTAnDNs35zCSaKiAH9794",
  "key29": "2MzcdCDjmDpuZRw5o73nf6SY55n1YSB1CTrABYGbWxq3vaZapQwnjvAnZj5u8T1z41qaS5U3q2rGFghnHi5efrkb",
  "key30": "3aQvDqEvENk8wGnZvCq78NaTKp8rByLeuuvUMaKRFYsS4AbWQxXpUgcfmUArcbhAbjbafzZZPjQQY55Q8TASRSQF",
  "key31": "2CRfb7XFkvhdNiQWikV3LSnAFbMhH3jVKkCZTJyi3ib2VQjqY6KkHZaCbAZLoaNyoPg6RmJgACwPJqkbMYMjgg3x"
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
