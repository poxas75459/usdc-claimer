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
    "34MigsRVHuKPa1wzptbcqydbo2zPWH14QszpJaqQpH73NP5iHAAfAc82N179mmHRxZuXQvSnHWU4jVbLoWcjPpxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5731JWaUHQ8DbUKC7cRqt8HDLGzLKf4JvjVXk3R8q4cQNkMFyYbXu527Ck7MJoHTY7o1wj1ndyQWhG4mmpemWHGY",
  "key1": "qWaFhcYYCscE2khfrZ5zDUqKBiTHXzwHvYLhKQmKV6MBzzSRyoSwQyTzedX7cGpRTHgGLTn6i1ahCJgfLWqonvX",
  "key2": "2jNKUC9VWvikWbxTyLSyMbbrdrFxGLkkcd5bTcjhigfoYmzFhQvHHwbCTRdoYa6Zi8GxkGhooWvatpaKrAtaaxnq",
  "key3": "65PEPm9QH2a64FpT9Y8XSpRnX3sswDpQcuNjwE8RqRSRxRm4FKrVvTQHC7d9XStTwBJoSuxmoRQjpjXJKtmR6Mpe",
  "key4": "3m8AxYEafSUK1LK3gcHya2VYzgeDFR47Qs1VH15NU5dXGZd2jEjibqzM7MSt1vBHDcj9vXSWz48KkeLoTvi7ft2b",
  "key5": "2dbXhZchSPZ9F2RsPW1cmfNozreWKKy7upfKQ1jqvP1zaTff1QpNhQrbmQGQZ6PKRjw5KdZieH7o6H9inMMHeXbB",
  "key6": "36y6ftumB3nGgstbXp3oDQT1z62EerEoAFBZRUWs4FKvfWj66Xav7SNoFFKAUHyBhA4jQwR7PgJdY2NPzzQ82hCV",
  "key7": "5WpahNYcTnm4i8HHYdsmJK1XCBSYr9PNvpxVSPCMWj7j1iAHo3TTHsCJ11sKcRL9zVf9ePJRA3Vx8TSAn3p4jVB7",
  "key8": "34Va1agppFbHzBgyEPbBBFjQrkTS32j5eoEPrcdvhvwb7mhatzMdUy4Wbg9fNLNTGcUmgoJSdaBrxEgHyVcFt9LW",
  "key9": "3KyR7xPieQKmYrDNabem7Cav44nHDnSsyrxR42VsqxTAiamndDrF3NrnCbPnvx7e7NT2FsxaHpXExwmFW4HBCoGo",
  "key10": "5KEM4j5Ky5utTB9LZqf4sYjUZqzmYZqFEV14HsNcBesRbqpeGYzXW2epcjSbWke23o6wBoKZZKD1RBmHwCHGoXSe",
  "key11": "3V5xqjUUsfF7YY2ST34RsYpFYxZDdmN3tN6XqWVSw8zkuBRPWpchwDAB3PZsNuVftkC2wQsZ9TizU4D9q6QXei6b",
  "key12": "4xHgSigpLwrzp15GYA7YduiMBdDSvdekRv5hRPat8fYZmSJSgCAy1oXimkP3hZxHmFGwNbn6jP4XTNpX35U7XsNB",
  "key13": "4zzsE7ZSSt1cKB52fb9pVdibm8pnbg6xWAUfN2BCdNuPiDG11CLAG9RARWtudUR4HySycRQkJrbCfi2mj3BGQjgh",
  "key14": "3Uah5QPvqGoLZ3wbmN6mvfs2MtjptvnwUpnDhYKrM4Q7e7oP4bYdEVqAfoKdEf5jh5nDFNJDvf7wTyDsjEhdXSeh",
  "key15": "3aFJVkgUD7GCaMsxuQeG1VJWLNmDL7TtNN9sN6TgQyiHkmoURPoh9PE5bEatcv4Lk7Jd2BqjtxfdNc2NBLJC6jNL",
  "key16": "3X896KdXvpKa6yt9oQqNXNUZF1FzzRGggGesjjb7rW5Vxrd8F1Xaitp9eTdYmhiccKfWFaGesLT8eFLfSBvGqqsy",
  "key17": "3DWRngF7rSWDMHJyaLZvfTHLUe1zMkwuuBMs5gRrqaMWRnGL6TVRTpiMTN54YidayejsvzrdYT4qzp2buxAs7PoJ",
  "key18": "4Ghxcqkfh6f16hxA8V2yx92PP1ZufcxmtFPP9jZwf7UkQu821CnXPdTrxb5vsHu3iswvh4kvWYUniRpsiTwnzWFv",
  "key19": "qNpmGbAP5ft4KwzWqLgiDUrG4wV3WDB3qQDusGr4Y69ughDunUGBmMYkrLyMuQUB6gd6yBhnVW2J25naDV1bgtv",
  "key20": "37JcdpBMSCky16oXcGZccBkfqtb5vJRN9cWJaYvTd9cKiYWLAJNdPziNYB7JNeYom5jnRGuAKQBNhSHTwbgR9SVu",
  "key21": "zaWNWnXLXgtqmJmEDGL95rvdmP5Z2Egdy4gF7CCtmRhfXDtdLeqMFhBjmUUHzH8tLD4iARJvswsXK33ZWbpS2y8",
  "key22": "DKu1e6wVscaJPHDDixZ7NJZtdACUuoEc7PfQR4c7FgvSN7yZxAL2hL5VVbTNcmRb5mdQvbWg8mWzQWoXApK3J4F",
  "key23": "ZbwhevUdPWqc9EfRpjQsB88bRXrYy6LhVjY4q24UPrS3mMZ6g4EHruav5p5e3ndAq4TeFqfCKDwM8YWVA2nrMNS",
  "key24": "3R5eHyFDU2GRdJWAdmWxz8XVHhLEiYebzcySjypqhFh6FL4zxwpVqUi3CfGrRmciVz9kS9bxRCrR4JFXDzRrBPYU",
  "key25": "4YRH6dqHrMSfGaMC9nKEMry8DM8VYrrSS7fNStLkV4YeBaEdq3DkT4gMdApFQPrbwRJBKqqVSttoUe15ZaYfY4Dq",
  "key26": "Gb3sRcSSws3QzpJVjU22E9aWtbunDLGvFcp8QRATB8JfRVSgo8UQza6wc1ujVUUd5WUDSrNr4XM7Gu26eXVLCAa",
  "key27": "2Lec29hmvULTZzztfgAcrdBBiLE5MWneBhJn5qaV4KwDCuyDvWSV8X2fDiKPGCmLE2j3S66rPmEuuLfFXGUQNVcR",
  "key28": "43aKLZs7fAWfafQPwm931LCqSiyQLDiYariCvPZ7SbpsmdcsrWyd5Bqy6i2kb9UMoDgLBmL3eqkrUjKCP3uSps4q",
  "key29": "54GCvZuhyL1cXhYFc4v3UNyEM2j8dPQbURzphdKsprdPiiUQmfvhoovqtX8qJDo1EyYEk7t6HKWr57LZ479VKTKx",
  "key30": "2yjuGdRyUE1MVrVGdMwZCizdDi9etnPL16q6cB7oFcaEDh37Un9y5kEA3zatxq6uZ9M1dJpz61mV6VY95dnjgLSz",
  "key31": "2o61wsDqTDh6PpZgHgWYqohGaATCDpYLtqkkHjj34Bqa8cCDZFGb5K8TBSBKfTDeygdQ9EAMK2LQXYFeLB8cLjcC",
  "key32": "4qUzs6bvSqnV4Zby8UukLGM7Xkofts4ntd3kKtYPPhzCLdqLvWgeUbh6umzXAcx3B9z8a78WzZDcpvyz87aRynbn",
  "key33": "5g26Ahp7b3TaeeZW2Uhnk34MBge8UzqC34vXsNCxLTi2fgwvfJxmWZQFjS6wx28sRRZvASmymJAMWXinXkocjtNk",
  "key34": "3A55p4cxbVD4aS5ohkJdfwzQmNjW2EBgimHJq2TzoMoSpdYUnYRN4GNycEPaZU6LwEvy4f3V5GSqRC3BntULh1ZR",
  "key35": "4f2dXFtmEYUzijw1roBVo1GE1WVeUDZ9q6K1C4o93TidCs2hUTvqNdtcvew7WxESaYScpUJbQJ32z3FQQhu2N9iP",
  "key36": "aYqi6WkMawyU11Rvr8oLtpPtYSzyQfsHh6dmqTugDR7JymAAxJDW36oRxQWZVaqKXNjFiXP1ssURwiKVZQxEHGf",
  "key37": "4dYNvgZX9MbCAMEafeuA9S8iCXoznw7YvRPcCJppqr8NQZmrdxTdsupn5raRWMbwwguEfaB3AaDzvgNKkH7jovWS",
  "key38": "cEsjaL4QMBMtjkAqVtrzYiLBvx9p3WBzfSGcU5cieUhUPeCqKnJVgYNT5tCwmgipSvmzoW867PDVZwvKk1tdTtg",
  "key39": "ZAtX13A9nXfNRMHwSTAsFgGHx6CUirn5AmqDRrnveHEvfm5tdN7nhnCKZgwXeeXXDjkDimqcegBKci2g9C8AZeJ",
  "key40": "oLGBoQsGzaBaUwmAX44DsFbGjNUCbvpaLFWAqNfR9EPM37UdvB9VCZqt21qXYhW4ydFk6wkg79pPthhk2wn2YF4",
  "key41": "4k91CDjaCxQG5ZYiEDc4318FfRwY5ru4XQRNitcYudPz9YoCJxUiPviUGaZz3hQVNZi4n2GM4ptZjdYLzbh7t2Xr",
  "key42": "3nQSsskF74UuM95iFcMD8FnfV7zeMGMrJqgJLkMBBiFaRJzpJ3eZTegckQ6mN1ZeBPHJTKiWYp9ePVRbUErHDbiZ",
  "key43": "4BwyA5tJJjukgm2tzJ4kv6aMjuMgYWXhNynpnFfNRHnCwrBPHe6v86a5AY8S8DHEK9KJhf8N5cHXBCCrpdKFE1xF"
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
