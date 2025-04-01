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
    "4UfQ76muY3rq6waNxQfbvRpAVae8vPN4L172npHLdiG4NV3KCVSpwqMHhAcCz1x8vdJ7sXZpoB39f7HyMpNsm7At"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3apB4PRjD2MkKJqhcwbT2E737AHAv8wBXeb1VuYrdRLEN5cnPAhMMVEnCBPyBLtCoJHpYCo6sTEXKd3j9cPqFwzZ",
  "key1": "44YZFf8woBSGXqDo9MtFNkbcePsLL5g79eExBfax2RorpAHJajKcwNNT7xUGvxLLWZZiGWKyzbUDrVh5dPtHuABD",
  "key2": "4eCnnbagMsAN8UxDg4hW75BoqJmh7VnQH8aKvTxANkdWGsWwLaZmtAYQCyVJxZa8SxN79HcAxg3UHP4CY5kGFrCA",
  "key3": "5stBAH2U1MMZh4W5G8rKZ5VJJsC72tZ5pzxieU27T3i8w1DaQQytWjv7VSW6SYUTXNHD9zATm6NSTXjfqk3QEWXe",
  "key4": "2bUxZV8LZMQC1xzqteLgxPDQKavSdGXgGGCWxnhG7vRcaGrfMZdxdq33SsC1KWDYgwXRJYMv2z22QrEFFghTWqYK",
  "key5": "3ncrKV5BzY4K5XFVdgK9ycNYNNuN46tjxDAx3MyUwPnCiRSK5xEL3UYBkgodgs3FuYZRibPmaGGuyTS4f1UF1z5c",
  "key6": "2aihAk1HZpuca3S3jEuuAUR7RnPZcrnciSnp9CeUu19d39wDdvHMsWVTJ3L8MGowLjszJwP9akUS6Qu5TK1UMGJt",
  "key7": "3HmUwUAc394G2EK9FTD32sJYy1fbSpGMatKA3Sq9CM9mqPF87ucFpCs74VAfTvXDsbPAwi6Tqo4dN4KEup5WpGxw",
  "key8": "4xJ1rFjAcQAkiajTVZpc5G7rD2B8a8w63vEGki9aEoHy5PpLfmXxC8fN5HSEJhDVr18CuryDmqw5V3Hxv1hupaFr",
  "key9": "3hQXUe8oKsYZoNpXVRSVvLud8Qyb2kvCnyxAEDCZ8Qk14ztudAwQcFMPY5RBT9kgpVueK7prwapFUA812AtGHeQv",
  "key10": "5jFtZoAufAZ78Vgub4easfZNke6k7C82en5XUivRNyHK66t8FM3AcXBF8hm5cCnK9jCiQazSyaYjf3V5jB213YVE",
  "key11": "2yYT7XYQQ3ahSTcMETtpDkQYk71ALqKjwBqvNeqHKnwhKwoMPq7NyqTMVbKqV9LLfdHRukbSks779FUT8vXPCYBb",
  "key12": "2KLDducufkw61wdKYc7YtUfVwH1bp5uZzshqSCwDBgnzAmwpDFeTxkryetW4gr1eahctysLHkzzQMs8xAswngwcZ",
  "key13": "3vb5EQrUJicZUzn82c8vw1WCsZkCtxwBogLG2TVWqzcBGwegWjg3EFJJJHU1dLBJpS7Sh3B3Q9V7WZK4hxrBqZ65",
  "key14": "3oHz8fpcThrZ9gfBFgEccPbSWuk8abukTrBF89shmCVmpWFHJFrJDKCheJNY6234BvYprmBfKeQCyhyEAuquoy2F",
  "key15": "4ivunNVKcTP8faSQQ31Z3G9TqTCtaDSPYZAGVJ3hiPVS7qPqX2ApjpRsnf2EkkHPA9TGnL2qzSL7DZHAjVPhsixi",
  "key16": "4ctTqQUQG9PSKU7HKfBvwtm34wV2r8ETHbD4aqsR6GKFJz7onK5PukUHXqrCWShBB2VKPibNNPDdKxXD4NA95Vg",
  "key17": "5Buc2Ny5TRr6sSgV4Fb9RVU3q9qy6iMjeFtKeLZShV9T5mviGLLGbcQQpreJ27vzCVb4xSt81SEkbo2qv6vNq6rM",
  "key18": "2bEetJdd7QtqTezctQQYpFjhHkRs9gG1gSTonTsRD3dd5TgPLoCohrRWvpkcVrhxZZqdXNXzx1fpeSp8nWLUXko8",
  "key19": "4XTJQUQ3f6BcEDhxzsaryaVVvrPkbrBjJHJCVMhfHH2caRcKzVUDKEJMQ1AxLnk1ntFAHS6McDEfKJx3BpHvzSnA",
  "key20": "wjbFvYcdEdWg2HHUA7ukaNSddjfAU62xVx1SiyRLZ7m6X3qNPQEUpGgFNU1EMD2ZQ1w4e2S83iPWRtjpyuiRwQZ",
  "key21": "2xPzDGEiWRkUeqahLMSGvbN8sRhpvpWodAN94sJkcGwtCsGD8mZ9nsyefzZRpZ24KzB2QMmLyuqEotgJbN8D6KPG",
  "key22": "3MvXsfBzY9VS8Jpg89oxoBqgBAT6sSKfFUFtcHqBtZ7SLX4C15hqSa7kGWDbEjQnFtfcwrjp7TDBUJR2eNKTPXJc",
  "key23": "3hKdi5DPG2aM7voBPEjRpjenepp6Z8qHromnEKgpitcSKjLzEGM1zngzBcn1ZB2FfGz3pfCEYkyDMDp6vgeajEiX",
  "key24": "2KKrQFCRb8voQGshmi8yjin7PsgUk8BQ8dqynnrtAb9SpHa4iaUdk8nUNt7NdrqffcLfGFhFDLpn4jGyXfRGHRgA",
  "key25": "2m6grUub6cPkvKEKtUSxpgoenjwyeu4CHjEki9ibgsBUrfneiYpnKHgELRYwjESoMSD8R3xbChWYq2aVk2gt3K1J",
  "key26": "ZbdNeo8sG7bspVTQra2PysuCPTJXEQrw4RpVE6gcEgrcY6hVvJ5geVfzpL9niEsraiLAyk1NgmMecvmCKmegyUg",
  "key27": "5jaVyfFtfryfCHARLzQob4pMguiTmGKH6e8M3FsoYfFnGvT5Nj58abvGro7hLfCBy48Hbe55Xbjofv1FV3QeU8oL",
  "key28": "h6yDFTM7Tk6CdB9dBXEJwpuV4EpH97Vzz2tJABHwDDpB1jtMYAEoPwvB6QpTcwrLv8uoKHqevtiWSBymfepSQoX",
  "key29": "5hDi1foneQ4FyQErHuVc825vzNsX7BWBA9BWqjJza1ZD5wm69B3xz5NCW3JiGjQGc7GNh3eDHsxgfkh4gDPbPGTa",
  "key30": "3VhCMefRK8jhxYhWAHKEXC4hj6DpcWepH96dUHSZbBFLViW68DKqcMz3vhfE4uhU4jRjM7KLXi3a35qSazRcqwi3",
  "key31": "4Bd9L8mKmwFxYgfvgVuvLDffDmF2LgUqwKxPG2xSAurP8WCQCLKfHvrAWiWmACJF1jiE9W6YTg4Yff3CuZo4UWo1",
  "key32": "A6yAaym6P4up5PpJDTowwz25YgNH4fMbB1KKXGk9em8vfSbNRWHy3Y4nPNPLTzJmm637eKmT74YDHpU7aT6gHDh",
  "key33": "DgbHR8ZLNvodLZVfo3RySrVUyFY778NhDsoNLoQQpzsYGWJ29ydauPkVDBXD3EoQK4RkWbE232yedwAvgjQ8s1f",
  "key34": "3fVW3rxtZfubAewiMhFVpJ88eEVfhcUnTu3K5KGoaqJE2AJgGBEyMkGrpQdSXYnFZQgFBrBDrvZzngAFDh8apFgn"
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
