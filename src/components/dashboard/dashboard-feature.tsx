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
    "fjcM1HprMp5gY2zbYZURpgrktwKpJdbeCpBfDHq3upfSUpTWubjUajrz1vcT4XBZfpRaZcruwK5rr6GyGQ5c9X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A53ostPY5pE4k36jjxQD8uTLxnKWupe58VMBgbVaAqCMuZAXGXTEVkrYYKJhMe4zKfPhreYiHge2AvvwmEnANJP",
  "key1": "3ZpspDR5UQ6Cty9KbzC46yAPyRiywHtDHvZb7zbY8SHFA6PsULs8mNxDTW287ktudYb35o3vLz2yxGhC6N7PewUc",
  "key2": "4qYPGPS4ZQgWVrn9wDppNhuTQQxvi6PeMSyCvVt29pq2B4o6hQdWYHnNz8EC2A8JY1bgYZF7qKYWV4gJ3CDkiiNi",
  "key3": "iW3j8esXWW3SNV2Rmfghg16ew7wsFYq749HtXSZwjD8h9BPUt4z8tim1o2UcXjQ6Pd4aAKMnXhGvjZ1fdR1dsxr",
  "key4": "3h23dJduN54TdkBKTWfawFxrkmaDJ6n1Pk7o6e5iKxW8eZPGMj8ScfLoYjwH6NndKgFxXepzeY1HCBqGVgbewcK7",
  "key5": "3rt34TA5ii9XuFqwAxtAM7nW24YRzuwjAoWNx9T8ubfJvYHszsJPaK6eqbBkjK2YHzm7U3dBEcdTSF2ktgWnYdV5",
  "key6": "3UxpjxPNpoEwxq4iBYWQEZsDh9Loo98K8Tp8EhU5MiaZ8sgGVn164QWaZHUBLEF1UMcthhPY1BA5i31oy3YXaMdd",
  "key7": "2nPek53hUhbeuPwHFnfEb75GrPRhv4vCmojMzBPCfm3UJz7RdsDEG2gYm2LzMvNq4GnFzrpCHKA8NqV4tR6kGT24",
  "key8": "7NRiE1EGftyauNMh1KBMMZDjDhfEPp9oqsPKxP7HMVSTDNSZXfkmx8669Mpa4cNAmqKikAwaW3BWEapBAdpJR1o",
  "key9": "3fJ6ofRpTn5tvr1pkG5hsvG4YY6nhg8sXmbdhJ7tBrYpRLBEftH5Zt1ND8siW2bmzGwwjxrKm3zBxsn9ZMzMUwag",
  "key10": "28dBBE8gUXoDbAembV7k5KTNaVrxg1Yi99U9wEZMzzgSo14YL8wL7MWnHK4TZW7ym6yiMGwX4LC7DTxkLnv6WXZ9",
  "key11": "58c1eNUE41AyTCZ7Z7zZwipvwyyfTk6vwDCiSeNAnMKnuhD7gUnvU4Ah9DcaEmCV4Ue6655AJFTtm1X251yH9yC9",
  "key12": "3ArueBSFJMVQ1zYYHKmAdHJQKhAckECGgvi8dPhmPjmTCnLLv9qq3VCjzbMgBUiULbWg4HMMWDF3QA2yEqwUpmqd",
  "key13": "81vQJXU13Ess4iQWM6n8UtbHS4sq36qmbqYxzQ97u21oYP7ieDft1pvj1sLCG7qacLvPrLaPCeoRhbVhqahXgvR",
  "key14": "5rkxRFKUAN1RXwjkcAyLQ82zREZsyQyUmP6iVUqr3QAJWUqFs8f5LMPS6oqqn9mDjuRjS2eqtLKAVBGqqsBzbkyL",
  "key15": "5HctqaLacbXVKrfTaVbe9sv3NBHGK8MJFhcPzzwgjhWuHnxP83Wd2w4YvyNTA3HwjhyFnAcbAvsEataGQ9jnWbZK",
  "key16": "3bLPfHS8oguTzq9ih26H6rDihP3s7S66YPUwgx5sdrbtd4pgbHsYwyfHCHSgY5mwA2jt1i8bvjw9ptqjSaZZyf2c",
  "key17": "45KjbbXafn1goHgEjoHSAPdBLU3xQEWu56HTCyLkWBfqoC3rTHr8wnkCoZhuiofTdtjWD7kEU5AUjvTAPxcLmvZK",
  "key18": "5ZsrirzSLfujxSXT6EMKYA24xGWApzhdiKLCPd8DiH9cU1vuwBrq2WPq4fLBsyyXKMfjGfhFDWxBqZb3mgGr5JpW",
  "key19": "2mHsqAbd7zF5zRXusk5i8BiKFN6iVtX27yRpeL32VWgWGSLBd3eyc6PuHpaEUfpS17uawS8oZ1XuM4QtXQMCXZeP",
  "key20": "2RFWPE7J4CXUr2NCRBRn8xfoZmGJcRgRapwnzPmEWwnCuacZbLgYcP1oRWU3g5nQE7ewqtNjaaLfzTVLvrjD2cci",
  "key21": "4NkYPsQBDZD2xX6UBiNV8zcDgKDDenCngDSoK51Y2rQWQS19D4zWXCSHBRhY469evkScvJhifVhNnHApkNm1G46L",
  "key22": "618Sv2xHkBt5YSuJfrea6pSQYpErdX47VWpApbaV6YjBBmMissnCt2X2UTQo28WeuBuGDPEioB8iKNjYXHQKCjqM",
  "key23": "581qGDE9eEre4rm74kZAcwufEvQxdMAnvkuzrPdKrMfrb8wXda6dvVGWoWybzgZiZah3pxHhifs5i94zKTgrNqjg",
  "key24": "qUtTFBp7Ma6jN5fe7dXqMmAaH6V31syJdFAG6he4zWiXfoZnREBmkqhh7yotQu88GTXVfH4uBKHgLoBsy1HfpxP",
  "key25": "3Y57XBexgJCiiBPsPKgqxWGQvYGjJED9uNjXXjUYzQXpX6DECpeC1HbMEreV48wgiEpJC6voR3eduQksbqiCD4Tm",
  "key26": "3Z6RmscT28Xrh6wDXqFs38MY2VqNzYf1HGCZ3q2FXfhtMkFZxoDBqUuQeMRR5a4pNG1vjrn28J7524CynhnM6yd8",
  "key27": "4VLWtunfGBVn15ey9xZkmWbWwmHX7ujzcQJRRzHxHp6nrjyf3EoBbHgfzt73o6tPhTjPuEyyKdrbrquLnnEN1K6h",
  "key28": "61rBEpFZSagKirzTW2DSkFJxo72cFznGHmPuJjy1qa12PRbd8doAEUuSMD9JMTB8x4EV4dBA6GEkD5CJBs1tTay7",
  "key29": "5qWLjvBx5mUTnmUhAGWRpE1AMEXKaV3FiyLv42hLHkP2N6BxnaSBP7gYGBKSUYcR4tfCqBGEiGmR8d9XbCainWRn",
  "key30": "3e5io4vD2Wm63MEE6YXBbfew2RnYfi3Hj8CyA5S9dtm8kyzMsEH9fNKtgjfqFUPas7TAbrSHxJ2eJxCH8u6yr34x",
  "key31": "ojGrqQ2JwdruxgzGZV4DuixnHMWLLU5oyDKme4fpvzhQVT6cSr5cLFsA5c5Jd1Yci4VFaAfQuBxhkjugXQNeohc",
  "key32": "328tSvk8Rtos7H137YsnSPpFcJPbD9URyYGq4ZAr2gtP5hzK4i86a796CKuousMGWq4qzP6u3DbV78dGqGdcpYxW",
  "key33": "2JmQXuzkCH9mFT5SF7zaYimATAHnkS6ByHuWJ2PVSKRSsjbneVe5VVC9agh3zwBgEGw3LNrWsw56H5SHQJm5nse8",
  "key34": "2rtCABBdWsbhJmmXRbrXxHBjZAyF7JBqbC4Q9uhd96E8pUrVMCZWvYbxtF3if3DWiSbn8ThjDDq2PQepKta5KCAq",
  "key35": "2ZQMrfcCbEwHmpKygPPL1smN1twhdA1U9q1VVDoh3fKJxJipHgR1gPJNQ1SQqk5uwZ8dYBbEdZjQMQ3tS4ydi266",
  "key36": "4xSH7ntP7YBeE9SizKHXR7L6pHhhgnPTsURE6jLZiSqN7zugmUvWcEg59qVPdNW7xeFk8xibRUbhBJY9niwqqnQQ",
  "key37": "39xd1iazwhyuqQXfUrhmyH7hptDAHWehUQFpSnYdgpyBW1sBmw8Wh2VsnfYfEwYfGF7KTDCxDEGpfFYUCb8xyjQ3",
  "key38": "5jWi8QDrLXQwuXdeAiCUaz3CQptnmyfo613mJpfhHsHLcZnW855mJm9GgTfcGMA4bpatGhDpwqhJXQWGT5h1AjDo",
  "key39": "4A5nuwrwVZJRmmdtXPzMCden2BZ5AND5zH7VcjpdkpxHUHbnkXXHd8vJ161PjQiGJAXrABd7efHLJ9gFUkbaQT6B"
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
