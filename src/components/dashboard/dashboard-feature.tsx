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
    "2EP1TyJzbeaZbXUwBYhHcf594qh5vHMPxfzLF2gu9h9HWBYsv2AQXdExYWCYbiokpGdjEfgDN1RXrs8QeZR3hRVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mNaZJF3auYBrwqpz8Bd2QWAK4LuRXe1pLQQBToq1Zqu8b5cqZtuBLj8DHmMQNhS5Cw2r7bkxDRqp6wH9qTL5sTC",
  "key1": "VmFLrZzCkyf4h8WxHKs4hP4VJbQAs1HFHPo1VFASn5xu6s6iUyinpi3fkofaLQiaBaYGgS92G4PFka41cGa1qwF",
  "key2": "2WicS2XtdGxfAAMPiSq66N2gNdqg2upT9dQcTYNdzdyjyzAHq9zEFAZJgxxrno78iP5WUSbBvLWTAwsBbinpU5cW",
  "key3": "5FLXviFikU6wRvLU8mGAa1Z4jk1xs8fJKgskNEv4qgBJCtnSKVQcLbiU2Swb4UuQrAi1LtsJni2Zj58WccQa5T7u",
  "key4": "5YZqQmFZVnV4g1DYvS3B9xEVFuogoXskdzb8mGGNBPVgZUgGicMxnqZHHhGwPRciVTa2uNuLzxTh3rMQdnLrKRW7",
  "key5": "4KNFAjnpm4sTVYoY8Nk3NqJbY9S2ttaXSfvoFZiXwSjGnxQ5EL4TAcBMTxtJhfbaAfPpLFqDFQwzZe4BXUPmMtdn",
  "key6": "26vjrGvF3AQPA7yAsmogfe6wpa2MiCbw5fw6vRo5EmSc1DETWSQgA6uEPyfa88XKzyWSh7DqFNKxvWEKBdy4C2eA",
  "key7": "2dr1wZRe2BVg5ARJ3ChgXZHaUgiAf4gGuCJYhukYQqQrJ3Ni89hyjdXb9SzV6k42D6BMRiqWz71Zf7c9Fc6Yg63S",
  "key8": "4LvnaJBd3ZjCYh6UGjYpYFfNFZYBNUi2LzWWzHJwLv7bk8Dr76j1HguYAR4dJJbVU7hzrhSAhoCgV9EZrNUiPTer",
  "key9": "3XVDai1qNzevNJh3bKw2i2AjTzBbmeXgahBiZfJbbMi9ArThXm2HeR5gVj2gXyPCtxJq6KFtGUg6SWg2MEV9pn7Y",
  "key10": "4KKXHFBkeHkECMzon6oA1KkubQVmeRiNxhnGhgfnn1twNxsLZstM18FDeypwn9WHxSfb87ggtynFGNPGJJXqLq9h",
  "key11": "u8x2NbT6PHGLJD92ojSqcqVGDvxtFamWdJJ6TQbEftchj5b3UofqjxMtGPu7YB9JqawwHyeucw1Uo5BwSyMXLUg",
  "key12": "5FHhuUiduCn2o7NRuipbq265JZixBS2fmzzfQUQ9WaK3U6uFtmg9teQAQSxAxuADTdBDpZyei9EgfXMQFEGopNRv",
  "key13": "5BCDcr5drXEL6MyFJD6vBP34NjSLCvDpaYj9uKZxj8WKEf92kSQfLt2fcffiKB86MLk6akZaSi7KZZX7Trd3u672",
  "key14": "34FbniqRxGrHUjYHddyb4wLtFPcMffZ7oHDmp3AsXwc3uxabgrNSmdQu9fnukQuXFmFoZfn3Ud1KKBf9H1iuNmEn",
  "key15": "5NDwEoyx4p474jfEyKNnXJdhYxQvfoSMiz1QtxQAcM7NEVmxpgPnV5tSoMF3NftrxSctRf2v9b9UMvE8ceWYuavf",
  "key16": "2UiGsDsmC54a9ZCEp2vNp6csXjtBY6NqPsDsFZADb1ca1RP53kr8GTzJUs4fLfPEqT8VUGQXvQrnVu7ixu3pVU3u",
  "key17": "5WEJUeQMMBdhtEM6wPaFayQmcL7sDGcAreu4BbUmTMgHHJm2fBqBUa6QatYY6D8tgRXfvjetH5648FyDvyMZMqbM",
  "key18": "5ptiKXB1eJEvohe1hx63P8hLFHxiYtmAGK6zNgxsmRYtn66badnA9RvWSZDsJpQVxVKv3VuX3fSMd32UdX6Y1ret",
  "key19": "rJzaSY3gY54Csb8kJNj5LABZBGvLV61xsNYpdqxB8LchVBCiS2oAbUt92Acf48MxHfhmho5dq2TAnBL2Xv2w5KE",
  "key20": "5Lyf94Ei7DWTbUYZcLTLQTp7jMq7iUrua1UL7WE52z7wnx1E3xKZSCGPifYuwRL4YwGSo4em9ibUUMc3V6hu8c69",
  "key21": "4b2iui2r2kGFJvXPAD6inEYSHFKfzq19K52ZQguyWqxhcucrsSP7ndaXVSe9XSRLGCTNS7opX7oNFKjToyjvPpSz",
  "key22": "2dxi13xVVzwX3oqXrgaJWzYQVTpD2V2GSiDnGfVMArr7di9R8Forhi3adjmtRCMxWMQg8nzpiGH6pdoQQc7Fc3jW",
  "key23": "FxMXJZRoVyXRqiLJYpyHinX7XY5TZzDS62p7nawZqFTta1tJE2jBBNcFVwbCexp7SCd6JYUxEcaegEmz1txDBjt",
  "key24": "47vwJGhurrxYF1yfFeJxAc8iUmAGGBVZZVzXjEVgy1UmPhVJPHYmEZjyMFGqeSXhEDfGqH2BxXLRzsZ4HyK3oxYJ",
  "key25": "5bfE6SYBeQZNRufEAMJXrGuQ2aMduvdsgB6z3ea4Mqax7NgVnJoMwn7zanPnyem1AGMY4ANZdBThxGVs6f4ReBZA",
  "key26": "zMc7YtCYYvpJxx8Bmek7nKFuX9MxqZLtmVe3tmbGrZLKn1tpFmkVLyb4SGg3PAHP6dUxW9Vc5z9WXttazPg8jm1",
  "key27": "4ncVqu6Wt37j6VyERi5u9FqyjwhbJb6gbZ7uJuVcaY8iqXFmtkBqmVnh6hbsib5GrX7uwiEkYmwpr2GfyhRBYEaV",
  "key28": "4pKUGtVXAaivhk6kfkTnxosGc55AQusMjBAemN2gscpebfTPEaTum6NKcf1ePUbNp3z2ZbrqfFBdBrCQDZ9ziHCw",
  "key29": "5Z7iEuQsRoQpeKvhk7yaUkzzLg5iCsCNHZ6WY7aTTz35nBTiucGmNNydxDcvtjZwWpwMymbpF8LDiopbAkR7EAzx",
  "key30": "3SsnF65L2e9c1swNUfscV2ao9fhdcQitbrFJg5rDbRofcxCVtcMbdXJDCeWC3tNCDPu95ncgXPXkRLjqH4Vt22BJ",
  "key31": "4rkLxZN3EpHP4bcDSyW7ZmA8qjEwkJrqMhA5p2jdpgu2mDXXpBsZefhgAcBxatXyCbYoKoJYG65qN3zTXhfkurto",
  "key32": "41fgss5dLWJp8qc1sbnn4S3N46pvhD9ChL2TpmBMUoPoDjsc2G6DVDmTV63HATovZ7WaCp2jnkR9rpPpyH9nYSh7",
  "key33": "4DRmghYbLyjk7oYAN5JK2F7Cggt7q79cdHKMaFCwq4VGVNnXKBDY74zYhUeEFtj4pu2TWLaHsDE1bSvFQzfm5ANZ",
  "key34": "4EGskVrmHDPG6xE4MUendL1xSCMRLxuhHZFr7wdQHSqtoJkiLyTVUU5kYNTCJbraZJVwPcbcWtBNyfHzXJSno4i5",
  "key35": "GZmjsiqfJQ5aeWiZYMVDDsN9qYp8np5qkCyuWpJ2yswxfzcp8KtJ82XyR95nbVGSMr6iPUjYho7qhGNQGvCJih1",
  "key36": "3gRSK69WThc4mmyNhdWANsvudvTvHZ314p7DxeuHTJSD8mamhtcuiycrDVwoGyEp2QdRpBjqNk7v8LYJ2uj7hSNd",
  "key37": "4vdUSxcrxJ1ikt7wQbHGaer3LgaZ2mmSse5Z1GL3u4B22eHFhXe9136wJgA9xXE9SgQdPPZZoincQ4viDrz2UbvU",
  "key38": "2fnwhAgRJShScHipMVDyRUrXuS1F82BuH8QinJDQab85WJzyU7YXGA3D1P8vH6G7o5AE4Vt6A3DB1SShuiPSM42y",
  "key39": "g74kUj7HCsgdmcP6kta8owDHET7XFUaqJTKXHqxquZSxQTUuztURPft82y7GDhaZmUzj8a3H2gRQAgRe55dhrWk",
  "key40": "5C4u6FbGNMrN47gNC6cGbiKyiSwwJxBBTb2t51mgAWtN1M1nCdX4wbqt2jZtxhWyHwxSwnQu7yxCgPxu7jb3PTSM",
  "key41": "4EKPMot2885L1fdBkh8QTVYszFRbZQ8RpjUNcFnpyYACC1dZHX1p7T89Zb7XZHrHGoaye1xyGZU6hXFJxYCTAyQ8",
  "key42": "5YUU6b5kbjcQ2EfL5WmjbCx3AjATWV8ejBjWVUsFSG3ZSs5jfNXvbwEh9uyhYLJqnuMz6D91gG8bnUMWBk52A626"
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
