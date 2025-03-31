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
    "3Do1oVM2QxWkafoRvcpiaSVQdr7Yyb4AhPfS6MpC3H5nh9R9jd9gX9qGb297BLE1uZVFJuYomyDggA4ciRzWfwR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F56yQ1Cb4vo27mJV84a9QwCi4XyASR9XHSAuE1sjGmBnxKbNMY2PsUct2XicdBGGDKmEWxU2st4bkqkB5rvN7NJ",
  "key1": "2bgpupRNWd1jnqDhuKKYjoKWTyszFQ2JfwXuyxsoymiB5bSrMDTKY76bvmeCKBrsfndPhFMZmfZbkMVwj9ZPXmYK",
  "key2": "3HZEGt1N3yrbmYbmkdpBK8U5Gr2CW5cH1AcTxG4ccchBdZsx9x86FyLgt4pns1UWyPignLzx6bAcMZXpdJ1HjmsL",
  "key3": "5wyAgvo8YtSTD4dyUueZ1EQJqLeAhDoWzNm1z6gHW154CSWhFM8fgfaivQo5ChiW8QAibKbsmUGusLeuQgFrEGVj",
  "key4": "5Mzd3CKCFgQvK4RzQxE17qQv32roNVd3MNZfqMTHGgGQL5rvFp2FkdSkhi6CaafKdqeJFds7jAWmDuGyTM3QzNLG",
  "key5": "4nRv1MkZDqTBdnUvUvEjhZzuZEbmKLXXdzDyfiKydkLTuzC9i4hkHDofyC8EPoxC1etoqtE8h7prZKDPjzqJXJ3D",
  "key6": "2jnLwfcAajWpfHC7y2Aqpfbja9C5DCYUusz8JhHqzzKGBosh4MwDgQn7uhhJwTs3YP5YE6RzHuX1UFCtwXQcVG9F",
  "key7": "9t6SmKeY16ZGFHZdWCRQjwjjExhTxdMKsSsDH1G8dkoVNviioURZhkepMr1Abm3S4ewjukXXG52C4rcmoki2aBY",
  "key8": "2LtQGE6KUQbdW2f59s6tH9sFk9FFfCUPbPyhm2fycxz8ejL6zoTFPX3df4ECQJWqKuEWdad3fPjsnt82GHtEJeNW",
  "key9": "2Dvrt48hYn8JdN76pWM14U2ssQeyKksjNFXEYh22uY8TaShkCZ84Uy4rS8vjo1PDk5PnWLBiUPTiKBsxqU1rfcTP",
  "key10": "47xivvY7Aq6LzZuFuXSK4bmS6E6SL9P4oJL6okspBM2nFBh3g8q9sH4eD1VbvBdExDxUov97sTf25nnDWHnqZu59",
  "key11": "3GpD3ZpdbxGn5v4nwmDNESBYVNg4RvHnypTJk9VAtiXRpGhTVAE6YjEx18wQK4TfE481kSi5rK8QibcetxNNY2Dw",
  "key12": "3e7D2aLNwgoTaHzH53MbRzifgtEmkcbfEkGDmWY3Gd64F4FygkgsMWX7kBgC4cjR4W4ix4d8rWrCd7rm9j9p92B8",
  "key13": "5bpqzNLz2vnHw955VhFCr5hgvncUQ469BMWypQNhUBsXnLYHpmiajtWjk2DJhmx17Vhu5oc56CpXEqorPjaA9j32",
  "key14": "2YbvgvZ75dXXvRAm74zzSKgeQnyx1aYbRo5wLePxsB7QHw8boZ9JL5L7hsSeCxWAAq3GXnG5mVA1D2pk4gKVHpEj",
  "key15": "2GLtaP75tTBRcjsarmHVKEg2Kmd9MukCd8n55cGGygG1qnLj5iwbvXPj66MWjZC2TN92kDyRUuwMhL3n5pn9gQ5Q",
  "key16": "66vdTGEAmiqGqma9Pio7N4PnDk8nr73Y5nT3rMdjLYooCoaSFLAwXmdTJxfqb1jFg8HLZbidqhQB1PLFZ1xwF3WB",
  "key17": "2pdhKLrXNXvWV6nmLtr9AQZy1UMCk2EFtwTk8JwzKDzSaXPbWmu9gLeRmJvnPeStdHsvH4pmvZrF1PZtDfmowZLW",
  "key18": "5HaKJYTdy8YhrkUoPkoZt91vR5gKtya6f5VBgHM39618pKBAuCcqjJEpv6b534HQaP5PQJcTZJVfCB7j8vgPzPB3",
  "key19": "3m6mshPdCgEa6t7DetFmcdTykDmhUM2GF9e9c2WReSeYc5wq3brmr7igFZiFEARo9p7bKewg9UqPyHjagfHWWmbu",
  "key20": "3EqC1ZSD9eGkgu6BitX2XQTv9DaguV5YG2XBERf4J2A5dKtYgQiESjRPJoPrzaA8qqvdtBSMHh4FkP2o4QuNEYKG",
  "key21": "4DDfUDa3wLB48s6vRunS6ymUeSQLi1P146KgKEDfBrNyVC5rF7bEpiYW9yhKUBDRebLrpGV2vmKQdVBFFgqCYDVs",
  "key22": "25B1xnYVTZKt6bqx4SwZUJhT6kXsQUwqTV1tDqppBmAcB2ZVfMEgkqkyfGQyhhC7tqYP8veXbvSMtdL7xPRRZyms",
  "key23": "3CdhtjrRGHTrNuTqkzmeqHxnjPkpUqau8ZcEA2c2jvkN5hZbLCFWtkdjGGSjLD5kmTzXPFbdW9FRATnJwV4VqcdE",
  "key24": "2ynyFputVBmFhywRDHuHFUTyzj4K6YoBnLQeDeLnh85iYB21mnihFm7G57gEKxdubfF1LbqagfjWo8jMqkM9tc2f",
  "key25": "1DSL6AZur8YB3hGDV2gcqP3giGrX9VGC1dwmyH2ipqPo9qc3bZRbGe2g1ByFT7CS8aFCWDxvV23fCvZqUMbE7aE",
  "key26": "55e4947uqLVG2tcrVMA19fK5mBTvZ94BtcVDJkufwrRDUZpCSeUDy19qNX46WBmKxBQiVMQQ5oTJBKjgDRDr3kp",
  "key27": "49NRS2wmmHRXSEEAbFQawChCebsqF96cHq2KWG7uzop2kDSPgw8kZgNJ6XAGwEHR8cxrNGFVVcVZDVi3DcAz6Wca",
  "key28": "29ouvvPYhFDYSKfedaRNjn4aorMS3Xt61WPDYax4C1sShSmxAdM7L1VMRZWEEzCC6MkE3EgsiyktDmrFYkXCp5rb",
  "key29": "5t4S142UGo4XSVfKNTocu3HGxiYzmi2XrUDwfEW4GSWNuo4xCZ5WXKUGnuWr1utoDa4TqfAM3cJLzsGbZXaL2h9a",
  "key30": "2ngGPDxgQH7fBHc64s3L1bKFQQVdc8cgFodoh2jV8u4kEYyyoyQUCgKivr31VfdhFtGMCzfdfTHvaQb2a8bD2Gox",
  "key31": "dYnBCBJBGPxoQquwx34CC338N4bUhAawXtaXFmi12dyiUicGAnUKtCqZNR8YFswQJjNKEGGNFaWCeGYe1a9kbr3",
  "key32": "3UPSe4SLqKJNW21rtKPEt5BNHsNLiXuR6x1up7DqJLd9BquaCwchi9EDduaN6d4sVjS2sA5VoCNZdSCHo5kGmRd7",
  "key33": "2NRHfaZKGiot8kA7Xb6GtWmLLydHXbndgAe8Jb3wwRKiq71JS3m6xdXYfhEq8nfdYKzx3HWnXgr9Wo4JMByrFdmR",
  "key34": "5zWS6uePnkeHmh4Jr8c1ehhsC6S8rmdSPTtP8utjZ5K4ZfWtTTs4Tg5fgkpAKBYjKTz21B64X7NLULkqfEsCX4z",
  "key35": "1288dRuscK2khSJsnvmhUtGdSoTMLuiNefHNiJev5M8Ww1ZQYeNG2FxH9N5gQvtnY1rHPLrg7nNYTihgLnrPRFgx",
  "key36": "3ZaDSkLZ37SxZTfHoFv5ALhBfPjYLkc3CrqfeW4LCTCg5LbLJ6CmqPaDUGFWZccUMEmrfVyxmeC6tLPHrDiq2eVB",
  "key37": "3pcP7FthzQmigF14ba4fwSfu8mDd3SPFCRtYF1sonZmqmQwBu7aQPudnqapgQmy9S5XqjSyKMRWC2N53p4N2C6yj",
  "key38": "5NzqU5Mw3FPEFz6pWSvnPU3RYmofkPTJDgBLi4Vb9gr1h8WniakMfycJAK38D8bqSiRET1jFCVoTjkrr5ViWoNPW"
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
