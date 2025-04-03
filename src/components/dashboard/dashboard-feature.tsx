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
    "4QjmqKYVNeAt3c1VQVESYN4gkAT7pvG7S1vFSX8MpDPgxo1uqt8amE58pgkxXf6hk3QQXVmxbNvGif2AuTdCr1ak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pGPqs83S4DT3ru5LfFhu1CJuuckc8wBfo1xEmN8JGiHM2Mc8DmeYCSwJnN1rNdieXdpXV64m3h74Y2mhpDY4qS5",
  "key1": "siaZsSeVcSGJFcc3XH4C6kRrYAUZ4KStYd1EogjFGN3arcBR1yqc3gkFcTgZQRrNoHWohyw28pgZr9M3Vc1nGgU",
  "key2": "MPJn1VzxRAJDPX4JBiaejkn7mqyukvNgbHDB5d94dsddHvLiG5uH7rKWVYt79npWLJeYXkaq8sUsdCK3TXG6UrN",
  "key3": "5jcgP9YuFEAxi59CSPgbSeqAwwmx3uazhj6E6sZ8hmF4CvXHxJ6wKyJtcqqJFx68p73YrNLyWPzAcZTd73q17MGb",
  "key4": "QDWDJfpB8SqpJjXSauuhc3AEdQ94TTnCof77hXqoLsqP5Cex7HC3QMwzS8PeNj6cjqPV9ftey2sZoJsLVvh65gz",
  "key5": "iCMuSuWwTDEAxfrJ6VrQfezTEaC8qmDbCWAJJUXkDaUAnQ6N8mk3H2CrGDtfmrZjL28HtN5hA5UD6gFUHtCNsb9",
  "key6": "g4ZnJQ9ceoCbg8MmwgnLHxbQn2nZn3ztRasMncsKo3YFnJJePw4m96WjsCF1pkziZJTXex1okyyUcvCnV3UHVr9",
  "key7": "4L5T1Jjt99bu3DKiUhsHQ6vVNv2heX4EozH7WSUW6AWNrKywB7tjaGsHncswVo1znZm1ymzs1NPKnnf2vbLBWKJj",
  "key8": "5wQ671qNMN4N5UgJYjQjJVEuamJbVJmTuun9vyQaBPk6HCJk5A5jLs7L7eFrjBJC1WAyZD9VLUPoc9q9bkBwXsdD",
  "key9": "5EoYtkkdyhEjp7vA1f16SzBPgmcseXZisKUuMcJq3KC8mmf86v1yvLwdhSp6jedfKQvDCosSV6WfBGYQnURgWuAB",
  "key10": "4z4ADZWoushE5GsEXdBwKyTpeYwCvGg2XjqSTRUFYrJVDM3avuUqWZQXXk4LXpKV4cU7yXUAuBxa1hAhTd6CnX8j",
  "key11": "2u7L1KG4F6XWtkkMFWyfAL362mjxxn9oD91JXM76yvUSxLpbL8do3UxVC5FJMyRHJtySXqW4doFBPGWDQFk9zrK5",
  "key12": "26m8wYh9px1L5BiokmfmGZxRRNFqkik6jbL5YUU1twdy64LN8H5jYXF5P2E7HB6FAnsrDTgNkHTk9o1npvhtuC9s",
  "key13": "5EZKAPnRHCVf7kKgyXe5Lzn66d8TSPbyGmrCswSSfjZfrogis4SgAA2cBW22kmg38jJ8REJcihKLPWqeW92mhGLs",
  "key14": "2pyJ8SQdBkDzKgNmWATKA6H4RrbrPhPTsAqjcFUD5md7AqYnTy5jw5UKxuWWREmHJEMrTCxsoDVEh6huk5LgCfvX",
  "key15": "3QBxYT4uup4kW2UfvBWmp5w8kmYtu2NxrNxsefCw8Q8ubNXCMMLXm9LCEz52hViYGBJcZ3CkZ6XYzBPqjvodMYyn",
  "key16": "fyXEYGtJEF3tBUkARhpTWobsVFWrXFhg5iS9UGn47raxXAfwtjowuz9v6K36B6eiY11bX1pksYT9VQNmTbAk7Kk",
  "key17": "uPR11oaKqefWwec3STzcFdCBh83F794TeKZq5n4rzyZaMKYcKkLVCPjwj8dsFukAu42uSLx1E2u5M3niZZqaG6b",
  "key18": "3uvsAhBvUQiB61QeDHs8oURjS6nZCsgZw4CbP78VCY29GdfqgkRzWffWzeRAYPzmfbW2ibLYbKdor4TGJ8cKVjFf",
  "key19": "Bk6a1JY93gBirgyFDz6XDytZx8j36iF2qTKpqB2qVyE3o4FEiGN3L5rTCUvTejPrGi9Zpqpbv2sZcdRT2tBFNEj",
  "key20": "44UCwAnthphiWNKwQF3UfCrCfkht3oTDwkQwPfKSagRx9sRwUzNQr5XSvV5YY2EotgmmdRsxnMzWTTC3qapm4Qc2",
  "key21": "43Vtmco9J7tUd15Hfed5omX41VMZrgBLChq2bprUcHVrKvyYF93WuLQUqz8oNNEUY4LwiEyRDWqGs4qrGap48d88",
  "key22": "48xmj4ttA8frU1a3czUhCrh8DsBiP7ZmfJNvcsi5M7dSrFiUi9m1QrGiT5pY88LptybYLRMwo4GjHPixDmfoySdE",
  "key23": "38kVPo2V3TRAJp1GwdRKFs9GifCwSasmAFyrKUvS7BVT8qroVPnQaDq5JJr4PZ3oZYb4C3U3ZCyFpxnMQLJhGj5p",
  "key24": "17xf7zjNNdkMfV1Sa3WsE52x5KW2NF8Nsv7vH1PQ7vkKgbwrygMQf8MXAB1VE8LRiZ4nimEjjC4URaNFYwv4UKo",
  "key25": "3wPKXgq12DrfcrK3bkCsttzrchSpCEDfCLczYyDxRHQmGMqLwm5cFyj8mzy8dqgNz1j9NSF515BiZUyyk3btW59f",
  "key26": "28dQQaYTnAZzDbrUiHnEgKC2dDWYNUdDnzCjHKpKGfDkvNcieNjobeMFHRPuu2yg9e8xpNUoqXjhNWQ6LadYthbs",
  "key27": "UG3ZfBqjMJfWPmY4WdR8shgB32jAZ1oQLjj3kGV5obmWYqTcVBYLhL3V5PUSdNbdSxHcNEpjGSVtKwAGAcia9uz",
  "key28": "59jbHjeTupKNH5DtWzhSL17irp716ZsrdVHbKT3os7eWHaybDkr5kDethmg2Nsi956a24JcioXi7LfXkh3BJ5UaN",
  "key29": "3GH6g7AW992yduAB9okVH7kNfjdoY6GrgPCGkPpDihAv8PkCqcXntLaFBcpmBJ55Bduczh94Ab9Gp7aemc1GcEY8",
  "key30": "3xypC71nEQeNtGqepMMnwqcbHR4uRMyc9DqkozvBEJiWyFwuyH1D9hXx5EScBw7KVLNmZEeSqnD2Dy2EjGWvBEKC",
  "key31": "3ta98fARJff2pkmUk7bysM2nyoVE6bRmCZuMtS5iPsZpygm2638kX4vtbh81dR9Y8goRDBjyeqiFWpyr6NfSyDXm",
  "key32": "5uRhdbSNQB4GtFuH569kNCZATVWRe5khvJ3LqGpCu4rCty1qA56cGKAtPZR1zjZz9MdJxsnxv6HGpZu1CXUr5Pb1",
  "key33": "28LcUwUpD2j3HRQ2LYXqPTCQfJtu7tuBvQfcYQuF8MjxiqvkyLrwUzy9iTedqWkec5TbmUGWAftz1XhST3bDP9Qz",
  "key34": "7T3fXW45qq1Zp5E5d4yV7MPtxuNLd3GvDJ5AwdCggnWCJBJVFGHFFnFhyMYBzhWae9JP9FHbx3ZjsSnPnZoKJUX",
  "key35": "RP6G3nGdFhuNnHyeqvM5jqf1cfh3XVmVZyFxSRP1gBfjcimJyxYwDmxhucwxCZ8KscwcNiwTmVTRrNMjRCrhh91",
  "key36": "9vZ7y6Jar2BVpk7dgZXNpcuiBp1RGifKkRcrb275BqtHZbQhpKbC2LWirm2rjZxkejE3TGmvv9yqSfHB7pZNX4z",
  "key37": "3pSDf2GYm5TJe3m7uUS9hJs6nAz7Nw1qDnon2qHRtWn6dy4Ayz6uciJg92RVvb6DZJMWkVy7N2Yiu4FmGSaRiNH1",
  "key38": "3piY4174RD2qfnaRDa9dNLvf6dvacwAfNkBLFsm4M75QoUcAubW9K8r4wCV2Cg5vFEb4Bpt4KyeHYWdaT8HdGCkf",
  "key39": "2dvWt4JcvPYmedT1nrSN5HLfz9NrhcFp7SakZ9WYBEGtqEwy6evTAw5EnWL2EdDAip6HPjRVE92QZt6TpvRtauiq",
  "key40": "4JSk6pyKAxKuMxwWcRE6QCCgb4zV1T91sDT7Qmn15skRJi6eKWbcFfkcEnYxMN8QeVeHDpF8KyouYjKuufsmhgtE",
  "key41": "4uzhprRm8szGqbGHy7mdS6VqqkPiLDwNu1NQpeogoks6jteHVu22frsToMH1coq3UBQH4VbFZ676MHfzdMr3EeVc",
  "key42": "5tJ8P7Yn2L3Sfx8PWD6TVUodWsCD9zkADbB6mE8f9dENNvCmbDTpQrUpo2AAHjCHUHb56rZktoEpTNugHZNsLfZC"
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
