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
    "3jEZFRZY3xs2SrnPoF2VdDKjQpRjpGwrmEdPkYFbDCG18owgnWMiq6HV1zLd8LykTSkoZwbP9Qd854VDttXJ4g5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pL2RXiZuThykvNs5bSbgFba6bxXBpq9nyJ9o7yVRW6LudTEHLFMVX1G1JGMLkiiE2WruunWf9tFxUfooHspyKek",
  "key1": "ahztwR4xuGmCmrgT5dVdjH6d3RSq1rQk4KfCKJDtbpU45dSE6DBTFtJ5zJLQrTz6To5CxUNGq2fnpoYLm6gcw3R",
  "key2": "3y3nmtQmtxkuyxMJqmRUssZTeSsUCu4B3xQ5AJ6YKxqtA1bcjg1eciggJRQd2TxxEJM28dBbk9bUsh4pytkTFntr",
  "key3": "5nzwufCgKVVwP2DQghwEL4ExmSDwvJmSFq6RN86saoJgMaucLX7Myn2HzRtr14nRMLua8rry2XoD32bpFcPJ7igC",
  "key4": "RA8H2C2KHqmfXjAg2N76EW2M9pzsqL5LYHBxXPJs2GmzzgKKxNVLies6NU8qNjgLQArTxmrn9zoJzhSFJ4WyYhP",
  "key5": "2XPJUnbm4mNgRjjTvVYEANkumdYKFQYGAvQXkdVCcMqsEqM7q1bK4UHgWqtDqaL7UKJfK57DUhCm8prA3TcC2iT4",
  "key6": "5ez8x5aeXJnPxyD6K1tT1G3jqzk6ppZaL7cQPi38JsZxTSoc7QKphAadVo8aTZoJkfu61UbATTYHKBih8JpE5xMb",
  "key7": "2HDckiomWxsWmcMUCZPYjzkYUWxQZtuJKi2Gce4YnD6uexHPsZWBv93nE2Fe64NWYv1b6Zn3kvGgJdguXrKNy1qM",
  "key8": "T4rbFHdpWQToek25DS63R6piBzUArazgw7V1sxMY434C6GWBg6CJY3SGyCw1WNFQLuWNiKmDqLefRgELRmPcmhj",
  "key9": "5cymrE2Aowy1zMoztuBWWt4t2gKSm8yGEmcUMdUEsfndNrDxdnSyWxngaPuzmqiDFNqYi7G5rw6RJo1UPpDjpvSH",
  "key10": "3m5eCLwL46ttbPccyB7nprsy8vQhggizJedVFfoUrdmaJhP5owyWT7fz2Di2TYVZf9gMLTJxqeZ7oQCzaU2Kr7VB",
  "key11": "3wUiDxk1TAwMXv8hhG4JhBU8inn6ydwVGVoLFb1kWJiuZvtMkK5iwrbeZUukQhVGFEQJTSTY75Gr8omtRQreMFmV",
  "key12": "3Ei6sZtnMgHGKMFLN49zrDRkDt9MqPCvJcAz1i9wWMznqbqxsfHWNDg2Cds4ovbqvpLof52QGHZGzXcZSAi5zjxt",
  "key13": "4g95pucqbLawK7FcTguE36ekqnxAsdLogmciUZGe631XUqHL6B2MPiQYcpnqqkV8zSe14DXdYeJk3FKjwtAWHECt",
  "key14": "2FnbrcRKJ7fagu9NuUXMh9UzuhqvJWVJcYF9BSL76HWDPZVwLXofyUi1b5DP375mQnzEDfMBexNUPqHHyHytz1dX",
  "key15": "5VK8RTzZjMVx68sk3fbXDxDwePPk9A8J1BRvsfHLfM6KL2yjassBrj2mvEsoUAnBrtfpAahLvs4yQdVKeeN2TzJB",
  "key16": "LBDifdR2zHUFSrUT9AKm32yaf5Ba4TdVq3EodyS7iU821cgqEfWjit7UKafWupfFbXyRJdZuMwDakeuNRGajMzP",
  "key17": "5ZD4EZTK7zTB2BDXCUnNnWwH4rr63NSrPe8T6En7r1Ets8h9jfU9Jg6J9bhHFJrfTuqdKah4v2VySc276rrMSPEr",
  "key18": "5Tciy4UwhYC7amhgP9ipT3W26VG7x7LWat48AtYoG6g3z9vSZrEjMff6edwNML7GxPFkuwiaxtHa75bgQ1nA16EK",
  "key19": "3WJq49dyJ2BfukhAtxHM4NaEzgbf24mScdNfDp7Z4PWA2wbgKyHGtRNrdRrDk8uWGkUE223rzmdbS462aG93uafw",
  "key20": "2JfqbBawF2k7qU9YqAKfMDq6aNUSWfC4UpcE4ThM72QhS5Q2aXY3CsGDvBbrhWMPaQESewjr6YEB8BZGLd6RNfTz",
  "key21": "43H89MdShe6yQg3hMPZoXbNz3MEocSCMtWwN9aZEdER8HCf4e3SQV9xcXKbx5fggoX4XA6RCFwmsuZbh7tCQ1Zmu",
  "key22": "4tHZxYZzwJzn8gWdgddDC8DhJMAZpjiQkEpq3rrEGS2s2Na6fvPQskpFoxmQZ2g7191q6SrWC7HZLxeqwcUmTGUJ",
  "key23": "3YxB8QmNV992o8ynJo6k5Q2GVefVMT5QXjFWhB1DTs3c3Xq73BZ5YGfhyNMdd7PRv6t99CMce4pzAsei7BQLdKCd",
  "key24": "2Fe5StcGH7z7B3pmxxemf7MppvTwnLnmYSMsqsh5jyLQxL8YEG6oCaQMaxXr5MgzUfUch8xdXVMdx4W9o6hJnRVk",
  "key25": "FyaAmYWYgYeaW52hRxPz7PJLuWnCGYBk8ZjfFbnK43HoAzCr7o7jGbKThnRSA3HGTyjYJBX6no4h7dpoLs8LYHZ",
  "key26": "3WBJNX3XVa1LYnydDZ58uKU9g2vQGuEEvgugnufoSBL7bRAahWx7ELfUh9FcFyDKKBECCDoCjxG57RvUFH2a1EfQ",
  "key27": "3NgPr1fwe3PVT64pXFydaHxgm5cfMDPrwzpqFQWJFJikFdqSGzt2q6CtsZGQTFbjvg8qaAvBRc37LATFec9LpoXY",
  "key28": "BQYcx1ewRaw7swFcJqZ6L5GA1xjJrgYoCV29n4ua5snrPrHfV4dDkVenaZ2Eeu6iHpARUqD5t74h2PagMGjDGM1",
  "key29": "2pRc9fTjNKPMQNjjXk8VqCNCgs167CP6fDUJKssuSi3AW7NQX7SdiDaULwPcCgShpctT4YbibYejzKj1nF2pwZsv",
  "key30": "5QQR1pVE9gKeriMB575j1GJfo5XNxP9YuCEWpCpvVAFei5pAdyFH1TLaooQTeVJ1394eXqmLcGWUJH1gAEGRAJ4M",
  "key31": "27Xrw4rMhKQd4eMDAthARxaZtAHMvF7KhBwMktVxAzwdjGqMLxh7TD2fLEwCSGa51Rb5SEHPpu3MNztc7H63XC9P",
  "key32": "4P9DQV9YbnnnAF5pTi7pPESiqE7Zxb7bTb7vvLMfGbamSWEPEa8CzU6F9DgFXTWzvfqbSt7PigLhjyWdiBtvKHfq",
  "key33": "nLBND7tLzg1XH5RNPvDGFoHQFxEopvLYbFmqC38VQ3jdTQLDGBBKpnNx93WURts9cwTGtzCsnB1gmBDK6zSg3D4",
  "key34": "2wZUbvSaP6ThbLqeejrZx3wgGmHLp2tCJmrza45kgcMRvgSZ6Tvgwn8QreQDdtcKL14SamLFMYg7NiHs3ZYouXmw",
  "key35": "tVmcKEDozZZAPPrgTRahDFQ3NUCkfc7fEcNe9aFDfKGjWi9cefH6XeuYhH85anNwxNFc9SbgmwJmVxbeP2JwJL3",
  "key36": "3kZQ7g2bqjiVuXWvsB7GqrWRf94eSvWvGapvpujSQuX7CsuD6hBYd5wD6p5wXnKUF2hYSEiBX9cbvNLjGww6ksS1",
  "key37": "2bqtg4eQjrKbnhuMumSj2nsycvUVzdhnRCfm4t9F95fJN8vTiWrSMsgvNQycf9CtZiZm1PLgx7j64mbpbj5xKs3C",
  "key38": "4itKhgLtczjAyU5otDBZBoeirEN3NpgQDdyvQdDutQM9jSWK8FfsNUS4G27QDXwnUCA2owgcNHM9xfNDTdo9uimX",
  "key39": "3p2LGV7T1spZ7xQJyFfg1iaBEMKWbJdEiPKZFSXiBa484hiqfYFrbUJFUsraUB8RBtXY9gdamuEvye6TSE8fMHr4",
  "key40": "5raRK3h2R53h1WBxQSvBpVYaSFJ3T7v2zGBvqDns9G3NHZ3626HeYTgcbWBucwjYrdmBDNGw89EyesDKxZV5158a",
  "key41": "5yKk1A9fDekKcEkNYaq2mJsVWmnjEm7i7HnmSLwAEwD1qiBz3JX2AX4cxTBP62pGvX86xXCAJ5euouCotvwWkLxr",
  "key42": "4mSUKrKG5FNs1ENwdRL7egoP3MshJ3fgosGETBA4bQ23U8oaiac5fgX4jVcWujHmk8Ar2sbMsFY6QEnHz5uxsUZX"
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
