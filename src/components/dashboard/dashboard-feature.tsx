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
    "3MdapYZjk7mVh34MNM9Jhcp6dZMKHMmNZ6TsrTbRPVtbMsFZLUYd5LqeNqko8wRBisKRoaJhJ3EWkLegHLdze42d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYkkZ3ofRiMD6o3MpuTyzdNGKknB5zbcFFoLrigLuaekmYDeFzXecumLGSmLMCVM7f11o2gaFEkEt8xPq3jf82p",
  "key1": "WykR42NQWb7yhoGUDimHc4EkV7TFSfXdTvmfYAaxrob6aUen4pMJaxDkxs1D8hX5GfYvRP25Kv6iREevKrbc3Ws",
  "key2": "1mKusvYfZknCWaecmPmauwX7Tm41iYczbwdrFYah7AeHkcRyywDwScEpV7Sx5QqqRpGs5iuRHdJ2C4dHBogJK2t",
  "key3": "63MA3VzTv3piG8sLnDGspyZH16Db5bzfNuE58WWQa73Zb1vASJtEt8zTF3CdhNnnMzTnL8Nagh3UJ4teMJsjJDB",
  "key4": "2FnqbWv9KZ1GfHmqDPhNWQQbCxEd8NpqsaC62bknqjZZN4g3LBEJPYpWQpWTNJYqhCpixX3kkS3AXC9NCfoR5WXa",
  "key5": "3Vpnyy3rnGnhy1pECgVPmBbNVZnwraR3tkZnf2do6j9wKJYtV34AToyNzvCoUV9nFXXQmi2WJ5CheYEjxhoArEw8",
  "key6": "3zGCmFvPrXVLc4CPyQnPK8gXM9AM2qiwkuHmK3N6LRgPwSTTW3AqGCxrGB9poXjwTtmgTf6mqDLiTnvEr4R7Mm2B",
  "key7": "24XSM8XMa8HTNyw7QY1uS2q3yHaszytMgEZjqtqKL7B9uQPXa1kUdKosbTqZJZRYuYfkhc743Lc4N9PPHdKJnhzg",
  "key8": "hM3kgobKTJEWoToK1pB4bbddDWuvCPDe67Wbii8Kxx8LxrbSbEuszM6dhjuxhJkQ5qZKAe8EaCJmeXzJnr7C9zJ",
  "key9": "337VVJ4hWNDJhrwe4shhRbSx9JBQ8dfM2RGWv8LJ9JqLCawjbLsxyWxdfhAMy2xQtodybpLNC1wjoazMfwsfeNgP",
  "key10": "4HBfFgLZR2CpFsbavrgob2wsLHLUkFDEiKMyAQUSQYZKMGzx2yrkigHrU67RK6zGTy3w7ssoAiNCJ5xPtNMVcK7P",
  "key11": "2UdbYcfbtU6yYVRUFWwvsrXVBH92AN1HZV3UWj2UcLJDCRKdjoYcZbKZgwLZarKikxMRaYbE7Ke9ua8DGrky1dsh",
  "key12": "2Ec44vbTSbKfhEgrq1nyESjQh9jAGS8XLzfFwupy9CVCc6byaddvcMmUUDbh6e2H5EzDJxqrH6pg8Brp881cKogq",
  "key13": "5TkFMFRHWf4oUuLKRZ8ib9ZYaMVKKc6p1PJ5YGGJK8MU7SgfKf3KDXcyN96VsuaYWVsvFQ4WKyzfnt8PHLDHM78n",
  "key14": "T9557vLQKu9WjWv2VBU57RNLvpBDqLam5BvKJxBYzaRRysFjUrvyf6mq2CPSqyNaf6gbYk8nAp45ZJH8xCxXUSq",
  "key15": "3aCeeDugjpg1erYQbczyAd3ykQpxB8dYG29TfdCTgMGVruVBU8Z3fSLuwdyTyLBtwQMTozEZ9KVS5YGCmeVMGCUa",
  "key16": "3eSiC3SZ1ANpFEKaHfoiCm3z2qR3nvcR64XUVSeXq8V3jVUrADqrwtQBE9zmU2gXTaL2sAEAqavmnrqL89T91eo9",
  "key17": "5xMH6fscXy5MWrBLfxGGCVhGuYNAL8ST2eruHrYc8ZJMLzxv7Y9j128owVgQp5GwPUTQ6fJttdeB6j2R8g8Wj1L7",
  "key18": "2j87P6ADn6nr8jiiZPQyCk9rRHMoAcURQ7qzCKYAJ5j5PL4AEoug9f8nkGcs7upqB8op3rpzg4JHW1j1zJz6VhsU",
  "key19": "d7FWie4oReE6anNC1tMrhxqeY2bCHzhKm1hmfJM9zDSouasYvNnVxi22APxFn3wUcSJwU1dJsf5uUAjyEn8vKFL",
  "key20": "5x9ZB6VTCLj3kjMabNUtwqkxoMCQjTFuNkMTV82L6sKRVtuqg8Rk3N4SAJpQ9nyEjvMHLeKmovPL3ssPa1PcxT1E",
  "key21": "3jSHM5tYTJKXRkZ68RhC6GDcWu6ZyS2B8xNhYQgV3YD9XEKiE3EazJmAbpDkJemtHtbYuXTduJP4izxZAcYreh7f",
  "key22": "2svWsWiF1dsRkUQEVt8Pv6JeK7jj2NYhVgBqnK32guv9koigo6Qgrjz8n3kXFR7nx2je4ZoKx22Q6z1QS2DjDFb6",
  "key23": "d2vFEkKSZdjwe4nfAN1CA279Cbgf8754AKVUjYXMe6zQDMkgARvHU7tZuBX7uWvehEMLWQivCPqv7N1uSHaj57u",
  "key24": "5wGxr2X9YTxZxtsm8KuRWyu6ghPJDC9M57wHDaoj4XphEbVZgL1jCsiHyF6WjF9jsmzaeLf8UxvNzRgdzDoRGyhd",
  "key25": "34YLdf6A269YmXMnEmdPc1Du6wsFCERwjDGDYtbEq3wKu18GvzGTBgm39xK2CftCa3x6X87GoCFcRhujjbrn1PcK",
  "key26": "4iRAXrZSFwvCYqZujErr8QkrBxC9GNKuwmCLVfE3FgVUZGXHw7GtazXq4C5iytUJxns54eRFZZjkqWfXHRJBL1CW",
  "key27": "2Qw34XVRX9LDaoxiAiQYupqgFCHaHEHu3kCeS57XivBC9G4gzW79iFxkoiSpiLFAUCF45Q2AKkZb7FigqTRxhnp7",
  "key28": "5LC8tsJSBqfbzAf2zuHL2qzWrAEqhN9K9oBYLizmowb53GHT6CNYRB8AXoCHTF4He8W8dWGYZrLviLbLK7nuRuQD",
  "key29": "2QUyJxEkxf5aAe84sEEPrx2sEJwQf8KmzioHsfdf6XgFs1DBbgTjpPBazg8rvLDShonSsCfGf1YyBpSYsXWXgEyz",
  "key30": "58Sfp1znwmJjZkbHGs64dFHgwVLforfUU9rC1mou9QhJ2A8orXtQ8H3d23T6NzkrpGgHY42v1cm6sBaKBBDaQsB7",
  "key31": "TpftvdVXdNj7uhcTAkC3eDEB4jseAYhGC3JcsWQ28Laf9vHYn1SCnn6X8hmuihSPXVQc8XGywqbSKTnDrZf4zRm",
  "key32": "23Cjj4pct59a1zDxYnziozXA47jeT4TTn3m6rS45B5YQS87Z35vEBZx81EsKWr2ohThcmWHMnQfbaJejFpyzK33E",
  "key33": "5cugc87yPsnmTkan4qqFPv2jdC4Q4DGfQhvVZgG9oMpEJMfxmEDDADshh1cbbg5t1SYP1M1Gx8WUFW7xyN2MT3Me",
  "key34": "gjxSAenUKo9wfMFawSvGpNe9sQksYokKMzkCcWkWr2BYCHRCBfLquiPMSbaZafAZq6gpGzCgCuKhhN4z279doZC",
  "key35": "4vBBA5yGSMNdF6wqneyqL3Ye6d9XJsJopeMjBFA3twmhgPT7vgyxEngLSbwQmC1cEK3HyoYgA1KXgAsQCQ1DjKV3",
  "key36": "iMGGjczwp15aH5XNBcJkYFuhMtqUvP8FADSp58G7yMrKUcqku7szML3gaJpJn2PsPUZNG5X3B3gUGC3Mu9zxjLN",
  "key37": "5pKtKLjDpM88gGgXvgKyyHmEg7QJKyhkDWJ2UXxgtCia4B6PXQJprCxgsAmZnDkEkqGgcHKupH8fjq2CuY7s7Qw6",
  "key38": "4MYnLNZc8my6kTxsZSPquWcRcSTnXaoYXpmrqCkjTBHDqLAcFc2kx9REMx7t2tvf7NLaWT5UytJYYb55LARjBHKb",
  "key39": "5ojZYsM2agJW5D2xvXeSWuRUz9Rd5559DaNunsNARZj5KNxTVsksrXhTjv18NgpYsjT7Ag5E72f1Uey2hrynV7yB",
  "key40": "2VUH9dUVtAKLbTW2hASGRMjWoyscBfazpX7JtN8d1rk2oFv7K2okbGVJqut7s7GtJcb31DauDYQy9TmWF4tSDPu8",
  "key41": "3VCaWxCYgee3qdfQ3hYHAXoufSBu38zif3jFfmMXN9mWgHyiyAz9GXE6LowRtWDvFp92hqrTQwwbvqjkLGU6dNEu",
  "key42": "MWiTaWEi49iMUapQCnuHbHus7firdHEcSWrev1hsburWo6JVRqhXZB6fQxKTZbFW3qEvw7FQYDYC9MBbnBRGD14",
  "key43": "5kpkbwawta5YJrqkxJ7R1m5DwsMoB18g4PAwWxzyvMpAThC2VBzZZofpyzQnWPNMUCwvikwJCT1F5yV2YUUbpJfR"
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
