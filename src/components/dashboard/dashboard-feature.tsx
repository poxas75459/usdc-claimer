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
    "4LEQjnnXXFp7c334h37EmF1JPxALmu9rK4wReDpPf2rdEUP46dFtQYSnk9s6dzAtX45Gn2EF4mqnxp1rwQwwCkYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59pr3PURN2qiEasaoq87ke7sKYR6zGrcZ7W8QFpUBS9SQzUCCLH8KPLfQsCxYUnwKzhT1u2Z7V423Xwi9Httr5KX",
  "key1": "4UnY2D6STykFNsZKUyYJV7tWPBPLuSWa1eMSzGteH2Aey2gGV5QkCZdugoJ8zQcQRqhVgAxEHJkcRquHVbgxEngu",
  "key2": "2XJQfd9EYt2V9Ybhb9U47roTki9Bu7WM7HQWDCPHMwRyQK2zQ5yskpUK6E175ojKwQsY1GKQHdXzUGoY7bznsn3i",
  "key3": "5qu3pRRLHPDc8YZUqY5tiW4ohQBkPzoa9Xz11ydzYs1XemmpHUP21umrbJ6sTftoNXBDzR7cBT6TxinsL5emHZYj",
  "key4": "43R1BDzMY1m4Avyp1xLJD2eAYWzTiJriPEy7BspG89gd8zPTCFLg3Sqggg8AkCRBxYc1vkDBNDBDJbmXpewEDd5z",
  "key5": "2sCkyUpyiUAjEUgGCtpXVgA8abJYPbu1gwCk1H2frBLt46jt1v1DH2spkiD3bqLGRqfLnHCZ1zxwgT3NF778tSGK",
  "key6": "QmrwSJ3M7ds1RNjcT91eHg93xVik91A2dNMrwqVU7xsF62FFNEDhjh11TAoyC6E36BMBndQZHkkAJdPnVyjRKBC",
  "key7": "37rFVvBUShC4vgYVSRrWQHfhZhampfspRjNaY6xbQmVhrMHbReezaZnLsXtFDsdGzEcRbw1LefiwKuuoCq7kunVx",
  "key8": "3vamPNEwZ7pw3RMyU4jw5BUAaZWzmEQ5AV4UBk11Wbw8JpTnXm1tJJMDNRLZe9fDDGrmcUJFEWGpnTGHMFZuKXxD",
  "key9": "xxn4PbuvdjuuktQVKrv85H4VV6akBCQ89iGk8bZ65wgpKve9xDnRv3BCTnYDZjhK9Rka7S9ijiBxaHKNJAhxTt9",
  "key10": "5uPH6RqSXdxEDVWe2RDoJSiRk2QPRYuYVr2aJBwDW3HoFLjJt3c5uuB1sk7QHqvRH5CWgbyfoCJB4eqDogxnKxnk",
  "key11": "2zqLe8mwLSATZi862hdXAh3EojSRRno9LT1wtDdVNVDqY6kepA2DdCz9qNyUHwUeZ5NrXvfPdsMzt4HShv2TZEe2",
  "key12": "2wiy8ToazXvAtX69XnD2eEkGop8AxTnrKv1d4RBBwK7pLvpbESKyzMbZW3jnFD7ewtm5WYUeXt7er7wqVdp5FAzq",
  "key13": "2dJX67775vsppqWxapcsJKLZwPiYgy5rm2cPFoscxE8Tdaqo88XX24wogEC4qkqZCtuUWEYEiAckB8tUSbqAsfY1",
  "key14": "34YFjfrX1AiqETDaLiJShFB7RcMAXTE4fqHDmuHMXPLGvrbXceZybMuKAcbgScV8sfUbv3VrqrJfDpYFfjNDk3QP",
  "key15": "4i3EK5FWipBpgQnHBRq5Uqfaq3qqiiVndvtWTbp6KTkXA4LArRYg8oVx6ZJqZsvhATnG1c5CQUiv7yFNFicAaW4U",
  "key16": "3cz6UvWmBiZiYQX8R99mePwnxEh6scNraQfTYgFijpyjJvqb2yHbpeXKAcMi54t6bdTxKErW5TwQNFcKKNocrd6m",
  "key17": "3DyuUtZtqmE9PoPaagPL5v1z8QHQpFSZ3abRXX1zY3cEZMQdb7NFf5ccGaf8aTk3kCteMgb7DprJrRrhf9TTJXSN",
  "key18": "4AR5cbgoE4PqfPrJdfJYkRrGYafz4SGUG4YamRoBiGgmTwCfykUkNBsTs6BWPvSxdw9nViiE1FD9yBiKMNErVFkv",
  "key19": "246sb1ACy4Kw4P5KN4DzARFqm45J2FUfeyqdS1Wp55jVcBkdeGhT33dQCGZXL4tcFmTSQ4ZGy1obkBsrUrum8PX2",
  "key20": "4CNRBhSgyyc794hBmMCCrKeiYNuFLe2TR4GTJ63rCr2pEcuhmigcatnkgRrMXq6qo7Teu4VYbRa16Fvfhkaygh5d",
  "key21": "XMdWnWuZJ3Rr4dPzeUpZAYBxmwAAuUSyp6bJBHe5dpio9oiDTEjfEDb7obGMPLmbAbjBjjtMGFdGQ8nygNAoQgj",
  "key22": "2EM8vhTaaRsqKegxiaXzmVzfYCqcBJ4VGocRr8k5cPubguaCRNBG3hYjFiaFtMKsTUoCggTbR8svGhchAiy8vN9E",
  "key23": "38GY5YPf4jA7rZuVSf3VJ3i9Jkp35pEVa6V8aCm4fy1sLWZFSaCnQoFUDE7qcx1HfErq5nUJbbLaw7TaE53K9dWd",
  "key24": "2PHvpCAqQ7QTbWDYNLvAEx69kcccKWqeSKWxCBaazqY9mU4d9bPi37QCZxqbwSryJuz3JhhWZoaE4zCinYmepNgE",
  "key25": "2aVoGCGEkvren2xMH5CMZEJa4i6erVZW2oGkv9xVSpWfs5YqERPgPTxZFT85BddJHUtoEzvE4SLvhieZPtzX1gdp",
  "key26": "35BhTZmnjxwSizhAEDdinngYrF9RD57KXMQMmNYP5LhqaBpZYVdf3t5S7Dz5pyyfSJtPCkpeYaLuN4dzLArTMMce",
  "key27": "wQGFVy9bQc7d8sZXUrijKJ3cjjEvowBxNsXuC2H6TBzXYHDyCusKag3M9sXnAK9NUERtCMRxwb7218DJW31E2oV",
  "key28": "2iUbWRm1pZ3GcQdkSR6J4bAkwnPrQJzs2dKGY8XbvdsxYK3dK88CoWqRgeZbGtSDYQ3xG8EwLQsPke6s3fmguHtw",
  "key29": "4SGaiZvuRZKigEoYWQKWzKd7o8kyWGSW243bsasc5j8fB4pMxctehAn8p9GC1mNidFxsEjavgzD8AuDhzfZ4Rszg",
  "key30": "oJTCKgTUVmTQUi6a9pj4jTTaQ9Vb854AERKv4Xs6L9w8HrR4gLM6tE9jK2NRF929PuKayvY4GcrMKWmcHNtCEJM",
  "key31": "25Kz1JEJFkXcJnZJwitC5VP45fX3ABiZqrWjEE2BEbcdkTpc5zdpj9xwtuZbPa6pPe6KeSLZTnXyvyUoV2HgeupJ",
  "key32": "4vUkcqLJjHp2Fkoge82jii5KduDz2THUAQjQPQMaRarH6nzNYQSNrNsDc3rW9bqxuBDdxQ8P24Hgt6MR2H4RwBpK",
  "key33": "52csHZhLTUKbfy3iqBPx4TjxQYuH6gVDngkcdbNxLN9C7M7Vc899WvAwytm6EUixPiVK7PTR3QGMqiZfX2YqXQaK",
  "key34": "5rmykvXB3E67nKtTwHzbWG25RVDHr4EAACtjSG5iU7j68BPamQkjK9yAbTgK4siJ5aPw6gNuZCm9LTh95SZT6Nuk",
  "key35": "2zoZQcb1gDKwbCcRFpEApQhBTPEVs7E1jLTBXsCwxEqjPwTspcg6yPP5dgc4fJAGtWJDSLpGKn4cz4WWcDtnmD3X",
  "key36": "gVs9aaXdACQLx2KtEJavJqVTXTHxSi2LV82Q5T1oARdQfrdNaHDLivrUDsX86qn3J6NKg2xb4K6486hPG7wt5WR",
  "key37": "sYHPZcgi27XZcU47nZBGmGzdXHoMJRiFvNXf4bZcdgaPdjYVX8ridGPAfD1TGJsFdbg12DjiivXJZz1wymdVqvD",
  "key38": "4H1WrHXXx4tzKnSDvuQsFahZgMkeEfFENYS5izeQWzckvw65GVEaGYmDSMg61GCNn6BBbkwb5iosh2h4XheUSkH3",
  "key39": "qaRjCCnG8eXhyH8WPjKg7ikPqQPskfK54ByUxH2y1xAaZ3CybSUrhgAG9UKJJtGH8kDydXtTSr5L5Hdo9VBPbTD",
  "key40": "upv6wqrnhn1NWCPEqYHJ2CSYiHpUemAN8URE2c3BzM6bHkbbMP2nL4aPFTyK5fgrwAVgvPgCoJYmQ61JN5v5pew",
  "key41": "6s12G3MY7wvCpQC75SHWkEyK8iJ54qmKpZTTZeZrzSoZMcHDoG3hJPUU8irh64fHYw3JVyapacWpJvQqUaChzkW",
  "key42": "CkV9ceRruQGS3cHqGnNs3hdAVAn6FcbJtrzLpmgkGCvww5R8RrPGcE6SBMEr8mzoPCxVvji37qoJoty3jk4d6ip",
  "key43": "5TwWYaZZHRSaYfwj5RtZAuZMsPvuMenkB3kbFxZCV1F6Yq4LY7EH1yt4HRG58CJuzeUYZqGGR8hb2G7cw4UdPDGe",
  "key44": "W7w4gqehK5Sq1YCxDchybqzBzYRFyn4Ga8teg3Q4SqNijjND4zvmZAbtUrXVxMhKRs1LXkAUJQLv1jR9xK8kvWN",
  "key45": "4e7bAKVbU9YM3hUNvTedM4JDFBoroGHPozRPULRe3YzPK4kuv4wufFRXf8hMz4KBCLQVh617REPJ5TK2QYSyqhWE",
  "key46": "2G3ZKqFE1chTGrMFTz97u2fV668m4q7DyD2jxFuVr8Y2mjHdMphpQ37rpJT1z1Fc5RGXmy8zXoBQWjbGJJUwD9ft"
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
