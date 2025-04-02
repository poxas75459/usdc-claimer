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
    "3FJvWi2R7JU4fMurXgw6utXkoCf18jNW9aHsDFXG1nYkzXxcSEUzCZ3Csueb876vSa3GCkW4t7bLdNbCLvqxc3HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PBAStb7pmFzDGipFcgV8Vqu1xm96kNNFGSNT4Cq188U1d2XpDB6m8TiSAaju9in4BuAAYXugoks6TVXZUkd7RzH",
  "key1": "3BeQQ1NuroabCbPcQ3PWTJCzZkvmnxWdZSp8imLUpK1mFYC9a7XhAefUXM9T13r9Wp5L3XHaevsKAoSLig1GLopi",
  "key2": "2ooPuuxKMDi2NYHAxdesKDG2C3Cjq6aWsRzCAgaK4mKiDJrFqU5Z4rffMwyko9YuoHqkKv7JiahLSEtJ483NnpwV",
  "key3": "duxdvd1dkSbi3REaY4jFhJCQQQCsUpuvAe3FZoisKq31ewjcwQGLSi8HcHTStNG1TSsr7khb4gQXfK2UiuxKWPj",
  "key4": "5grkjADapNsFkF2BzX1AKj9Rr919idKsf8TBXTXkiumPAFLVALrZ2Acn8qbPxMme5VdXSmeB7ggCa7Q32XKYbHQN",
  "key5": "5qGznkiuLbhCqRYaT474RRzisnrYeJDruju5jUoGnmpq24KJvVHjZtiec6WzkGp69f519Pg6KQ7gmrrpwfUmfyVb",
  "key6": "Q5Hymsh3QTQk1266P4ipeqaGgfpW1tgtvKspdE7EW7Auzp4W3S7A6uSDFFBKzSFkaquembTB89v1sVY5ymn6PuK",
  "key7": "3sftYtHQqhhQFhXddDZKCMvMdas68yfraXMTeRC5ThNtZzzi6913yncC3yL9AioxFrvz6S6MAVBUabB2yD8R2ha9",
  "key8": "RrebXnLZyPEDGXbGNcaaK3vdxjdDavrREmCx7pwufQVJgHYcDL6RSgMN6ng2hJikiD2MG4yHXfjZVYL9bDADtsR",
  "key9": "3GRGMQh3LqBSzgBcdWyVHA3SRzFtQPsj8SdQYsE3o75aJ4hci36JCX9nesjgpVAFhUqcd4fKHTR63bskNe3rcE5w",
  "key10": "bXbeE93LP8yFhapXDyWUW5pQiWguCXCLw3sXAfb6wBrVdX8PPXz1VnmVconKfutgRxUtSqWDfCS9DrAt3SiCzks",
  "key11": "4XS1TxMcLn7jyoRVEA5jBexnWZ4yEyj3Q6jRdAGpCDwrFWd6YbPDAp3txoeb1e54qs5FGiuFeQExgt6LNqUh3ES9",
  "key12": "iCCGb1yUbbwYiERwDEfmBnMaaAxuHvqqLDQPt3t4EiFp52TggM5HcV1ZaG5HfYkSNfriAwowKCEKSDq5jMvdhUM",
  "key13": "3nsHbQX6FqRWozqTnCrLrihgLsFqH4DS4GVMo28cGZMyxJ9vPeL1FzRGUQnCVmn14p6R2uAgcE6dXyCMzR6Caacm",
  "key14": "4gA1T6Rf9DrueFtvmBDmkCN5MvXzEU47k4fYNxjDx9Udp5FpzUBvCCothbJ4wq22HwwseVMVia11KhhqEGc8ZEjh",
  "key15": "3zMxyp2rkz65jndWVh8wnD6ebAnGhB1LrknvYyEuhCPFzzBTUNn2j9VDuNAYSYFrdGyijDKt57ZS5zj2YygUCcQ5",
  "key16": "25oqhZxNsnxLYfvtFSk5285Fz2XoCgABVEQ13CHrUk9CrSuL2jd9T9k7YbJBJ1GGabAorw37GUvUftNVfPikH9TH",
  "key17": "3S8NbnyxghmsRkTcy4c36yvdPqVHfnGmaQm2XsdcLxdJVtqvYTEWQ4EUsCrF3HLQyuARrtWqtWVGx1yEGAdBw6iN",
  "key18": "5kuxeWHui57yvTZV3U1b1YUKrjG3iNcJaD1nE8dM19fHyR2wEnKBzTBd6pwfnP9EJzYuFXs8qJzjuuKKc1ZUN3SE",
  "key19": "65SvSComUbMmaWMWKz4bbfFu4wgtJE4akqJkvzeBisSfVzSY4MPy63vXTUfYL7FwBsKQ2ABujKGCk29BLLtkNeQp",
  "key20": "2sDZRgoj7mVMCWtbTHVEVTsUooCVxMTBqyq7fFXAjLwPJKdEgWkPkEBC1hbcRC9UsiL6YDVx3YRcu92Hv1cUsK4t",
  "key21": "swVCuQsAPQmYSd8GP6yRizM4w4N1dL4GArZNGrDcy8GiZkV2x1Fi9CMBus2aRGJ7eWtE3xrr7BJppY6dk1AJqTn",
  "key22": "6LMVbNQWkgNpRCUmz7gMJp1EPqpz3yoMsT2zXH1rxbqL9huZjxM66r7Bd52oz3YxSYA94myceRAHYB1JCHoQqtm",
  "key23": "18KLX7bJ5jxHZo2bMyTqMqoJJwREwGm8op9bHvwyQTV7MQbYsWfRR92FMQ8hoaVpmkLAiknaHMuAgX4eCsqtXuw",
  "key24": "58AciVBrk3H42iYd89kDAVhP8tgEHr44Eos6PmZ3bZpudJQWkp1ZL75kc8PQWsBLC8ekMHi27mfotuRYnnbRozrw",
  "key25": "4MrVXvpHTj5wmqaPrsSjMTmifXsCERLjS7bDZCzTgJDWd85CpxN7d43nsoNd6rKTV6T7RoqNTLstKE5rrEZwCCkT",
  "key26": "54AGZVHoATceTMMJ9xbyiCtzx6agUFuo9nGgU5nzygkTunAn47gQLWAvTveexdUKp1KfkCFNu8WotsuKEJWLyxxb",
  "key27": "3beAqiJ2kpXyZqwBF4w3HnP2gSF4Coy3v9r8CqeNaqN8gsNghaQQSqobdncQcmysPvtPusx8NXML4Akv8hoNcwA4",
  "key28": "3yCXeBig4bzq4n1qwHxYxKvvMuyGYp3DdEYmAwhZhaTWLwYDyFHoQiJGHchkAFEs4oGx3qgPJSwxZWfpQ7wbz8fS",
  "key29": "2r3aqMuFWZ3rCBMBGzqGCPonDurq5kvQRQs8NiFjnUVsWbsnXPwpnSUgdcGUkPkKtvSepeCsvHJwJfzrGLKyE17a",
  "key30": "2JZx5UQJXNjaACqggua1W6t1Y2BeWTTUnMRK5Gf2hNVWC5TyiaV1xGYQv72TCEAVfgng34GF1um3W6Smir3HjF5W",
  "key31": "2V7BtcosutDZvy98QnUA79A6AZXb8wpfTmbjUV7KbeinrZkp4H8QCcLN7bqJ3i4kLQBFpJvx2emiGEHwLsFBdrBv",
  "key32": "57CMZWU9MoUHo2YyWgb7uPTnv7asEybs9XFr9bvELUtCgo2Ccx4RaNyJax7CHikEJN8D75LiVUApntLqNanRGerR",
  "key33": "4jtF6Vgn3RbLZtx6PhJcU1LCY7atyxrNhDCuiYSREhKrhpnmDnyRWnXQgDyCqxVMU2rV1tVHSy95G57LEtnGBsdN",
  "key34": "4cU6bZT6STLks4tXpaEKx1Rf1RyVssCw8tQHaWVSYJH1zPAPQamBEdSSfP1KBXBecM2zRDWtXjjPHKP77HcaJWKB",
  "key35": "4qg1J5QKbuqQuFwgUvQVXNaNbosf4SrdkRr5QQZswApDX6iqpCE46SqS4YWjnJrteR51a6jr2RRFSZEQ7Gcj2Yqf",
  "key36": "WCtvjVH2fMm5X7Xeoxe5xKWZYgaCYK4RCMmqYihxSwe6SodFxuqcpL3SwzhMZQ1JpiZCQQZ3zScGfXeav4RK7bt",
  "key37": "5uBAQKHfjdoQXPUtTYZLx8XPrka5LZRisCV8zgjE999pHfjyJxDSGnrviSvkHUkLsQmKJczJ8Wi46KwgaiAVC5Uo",
  "key38": "4mwEjUGW3nGDzeyoogZMEwRaAC665z6ZH4W1UrnBmkzkcPBtFaWKyHGhSpPF9QJd2wtw1xcdixv45J3mM2oaHK24",
  "key39": "3EJT6enc6NuWFwF75ffSqwKVt12kuHbv4seaK6hMVtm5nsiNoJY3rVwqYFpTTimwst6kxGStwBNs1gyg8Mtr3beN",
  "key40": "ucXi7b62rTeRTKJp6tiHdxntxXEgNudVLVx8RzLiC9gtugLnNAnv3eVQRBbUfchK3GocQegW9GMeqsHjPm7hLAi",
  "key41": "A98VZakjfcZMxp5CSsR8unH2tRJi3wraBxAKUzvfS5e3SWLBBigTNfWYEMqaTVsvMbdq1gY8acVBDjyYCHXBKdV",
  "key42": "61cPJFYbj1PfnQjxqBeiF9HqorEWQQF2izehGLwyo8e1gu8hpqQjV5odwy9ahiAm92zwM7QC8pp4DcYyQEqzMMqH",
  "key43": "62aPeL88G7HgKuZiJKj3wQkzeURadDjs8WCXVihALSriichfpFjnXhQdWdK5cigkeh2uhAAd4KYS5aTyj96z3DPg",
  "key44": "2MrMNMUe4mgnkND73wv1T3eKGztrr594zsLaG28KxiikXwJxgVSVL2gPMWG6xiqZYBA8FhSCRcqnxDDb68wcAou9",
  "key45": "2w1ERpJq9QAKtebeBAn6pQBq62mDnLFtsBKjR7NaRfmknDdrsRrH7zDTx2DKKvKTG7gYHs4DfoWp7oHvzo6ZrJfe",
  "key46": "447NwqDzQdxtVDE4BxWeTc5ndA9rafGrvjx9eP3X4gfka1p7wnatEdqB4VS9mARXaCKxmMkQwf5gWH97RSsHFUQq",
  "key47": "5YARTQ9cAHYsC8hyUmwz6nVzBSaSHBPUeVoZLce2MSL1bkXgf5uY1qRuoxJYTZpyk5rxkRak8JAe1EbHuQrCtmrp",
  "key48": "277z23Z3Jvn9i8vr5BNFUDkfj29hmVqNqtaDFN6XE23jzhguhyKpi4pjKdkKsRFos9oicSJMaoTu2Cs4dECgcuUd"
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
