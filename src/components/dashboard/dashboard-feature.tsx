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
    "4RXNySKk7JM1DEWi8z9MU3oLQXHx829h3zReTJduwfefkjxN7r5BQGBpBSKkdXnR869pQXQCgMZERHCkCfyrPA63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "221Jg44ieDSHJZpDvkpYQpphbny85kYX5VbezZY8u5YFWUiijBxqmsKjsEmki1TzJoZEVBtRjhccGnsaz3cakGJ1",
  "key1": "4ykuBTsAntZmvJbXvGzxvemwBqgNLtWZqeVqqQ2hUGY94tiRNDGQtCGxv6xQebjUbm2ZgSwyTSPYD87FHBWYJVKM",
  "key2": "3qqKDwnBaB5WaV5GsPLyngxRjvA9GzYVPJZoWgwmGViUTCr7iGS8E2L8oTaJqjMdZuaZe1HzYmbH71Jafejv4w2D",
  "key3": "38pvnRum1qAhjkqyTkLk3ExzwX1FUWngnyQagBhmRYP755owxqijTJz1NLA1S1ktErYdwBaaSJUHjNAvsgWgKQt5",
  "key4": "4esR9Jsncu3De3AoZ5ztBC3a3dxm9fBiuXbUPWabTVZDdJpQ2E18xuTQS2cRpboAqHPhBcDiMTp8zJoRHRqEbZ78",
  "key5": "3gskZc331ciYUfGQDNuBjwycaoXAXDQ6w4SMNMbBCbkxehHRC8CuKp4qhFqhB2UUDtTFXfBSNBrywRTdjCMNXKwc",
  "key6": "Wg2YwgL8d2FqtMHnHnP5xrC3vNuoLHWKu9G69A9Re6TzzJuKdMB7TxrtcuSC3ZqVxcXso84m8x7bWYJmfxEU8R7",
  "key7": "3uf598KRqWWSNEYmkmii1ArHKKbJCv8B7nn6gWccX9LbHczkZ1EMT1LyV8a5HbZuRt9LwBjWRBAoGhTyDM8pyaG7",
  "key8": "3gdgk5bBaZniEXmcyVV8BjekR9QPZw8ZdG6JvLBGf33pVRTBjksioVccbdsr794bpeGgEf3ptvnuC1JUAhsQmKph",
  "key9": "3CPZniMTGrKXxHMRW3UzbdgJvdtWWeHJZ4Ytd4WfrYYThKjnH1AE7mS9u3BHLtzQTDeuDN3RrAt75udcVpjLoUSF",
  "key10": "5oQTEQkbdfG9kcc6xAwsQ6hEkCYtu3nCS2k9Kp4vtiZQ3JMPQiJy2oBc5oq2YLELKe1XPrZRf9Rc5AnVVa3X12Ck",
  "key11": "5cGRyWtockw3P1MKkZo7j4K8j1qV8yz3vEriwph8YxdUQKXWbJhaDU2oAXWpYmFcC2MqLpcxsa912pZqGEP4bb1e",
  "key12": "3KCW6MfR6VEdR44yQW9oPdNQLPymrF24FqozXuLUBe6wad5AzB2T2EWhoYoxrCdYGdNjbWCmDAwFmsFch6MRn27t",
  "key13": "2GcQqCbTFupJkcSffMxkWGfoDCgxomXGU8AffbtuZnfUYs4QdomRkrSGyes8hL9BoYTqsf4mGAS8ZiDxGrV2BN1m",
  "key14": "4aiNrXP4AV12XE6NBmuTwZ64aPN8pPP9YfW5z76YWpgLgqFb1KyuAoJrxsBWfa78hyR1KJwL1rLmoszR9Qy7nJd5",
  "key15": "22netRRQs3Z4ZXVJiUkDMygehb8jvfAoGZqmmM1PbugdQRzinoqhwPVV35PYCwwvXKJcjTxRzmtyA1anjFDFwG5M",
  "key16": "MD82Fcktt5spKmbt6JiSKqYpRA4vFLA7VTZQAT3cxMVJaPYxkGeeY6LpoBkekhT2Ad3CeBp8XTT4hL3TWMBaxVm",
  "key17": "5zyHHdQtHFhPB2hmQfkVyQMCzURWbKCyUXoA7ZGh1zzxoLFwe6fmTq8xWoMREfm4v34DoEi3wD61hD3RCf9UXJD9",
  "key18": "tppVUfpY4nVUFQiRCZiCSpbCLiqxdWRUH45rnncqkD4t9PnegFzCYdTko8at8JS1QbmhVaAvpzRKZLLsYzRgWCV",
  "key19": "4aAZjETdxjjg4E99U2oaBC7TA9wJpeKG3QqE7XPoe3HmNT5pRdfem8S2hfLRDzocpxFzGbsgzSvuriaDcwkoz4zi",
  "key20": "29YjvPPBp8NfSq1rfrRbEcLzwGPw2LJvqxBsh17Cg2Kxr54LMUj4PLZ4zqSEK8wB2p7mSRR7MuJfdFFicfj8qP1e",
  "key21": "57WPDZXkUQsQdcCUzTWmUyjVGBZMstj646r4zf7u29SsNWFHQnfm4YvH6JQ3S3cQWFh6snFgLovKrZmsJcmH9RHP",
  "key22": "48KHpgpaqFH36pZAVsgFyRyJJhMFSzNQEnKZLVm17JeUAgCnSJZdaPEcFCfD4ePRmnj48j4jhhpK2VJvyrBiEiCd",
  "key23": "4iq6W2hQgUaKFdNyiARfUM5wYY86kX45Bp5RQPqp76dbz8JeWEiEbZ5oHhaNfsEzbr7bu5VHmyAc3aKNHkofRikD",
  "key24": "2smqw8zPRRf23UXqvf28BzoLcrEkv4XoaeeLgsjWKsxYFsTzEUEeR43AUhjaodcU5tVysrZshapGKYaFm58H5W6h",
  "key25": "5oBvkqcNLX2mvZXy8HECWcUqLHWnoW8hk4xjcD1dYUHq6Fo2J3MQjddte5c985uTygh3hNe6ZHiwoA9q1CZDgRig",
  "key26": "4EeWCpPu4upec9FhntGvTT1xjBhhvu8Wzhdq8jcYLBZZPiFGWxextCvF6zb1XRirpJ8SEMqjimRqdKeR4FfKo1oy",
  "key27": "BKnm8UsPTjkSzJcdZaKvmD2W5y2CcqjhYgtSss225L9mEUhC1vYeYNxTkhpfK9pNsM9gUk1Do7SHZixT6EzUMMP",
  "key28": "4i5vPNwqKQLaa5s6iDW5ChnGqfvESA41yMRdjrKdrRmb4r1NjKhipMsxPQ1pCWiFsjYG9ZTFUfQ6owcxot41Bep4",
  "key29": "4mWTQXUEYcFMXkupoYaJtdqQACB765JFkqexeZqSe8HytcsfsCJcr9FMHwVYbFjuXTAGTeVTNX4DHNKgPAWGAKde",
  "key30": "5DQNx1J3ahrF6vDWHXmbce6frvQiPn4vmgWYWzdNzSEszHN7jLRmK23gY91B1zKVZUWJ23qXQpDaB8pHdY5LHoTZ",
  "key31": "564m6UXEqiZB32A8C1YRS7bLkUS3nnXjW1u2ZhJZn3kJdMhN2F33GuFwazFcKZU48xyjpaShZo7uLqEshi59Rq7g",
  "key32": "4wJ42UcEspb1bCqiVPdrPGaeJWg7X7DSeiDdFooUD8fXRCXfKV2jUR7eLBcQtzmqUmGQ4cDDp8CzSTG4dGjjQHMn",
  "key33": "jdMbYgKF4jdKTQP8CF9anVo2XPu163LwSZuBoTA5EsKMU6FnXcTm5puYqwwMUZaJL1uBcEvedZhxZdovkN9iKoT",
  "key34": "5YgqebSoG6EecMMbM1UPkyxqDdGdGRawns4npAxaBbspqjrP6Sq97s2dHvztPPht3kHXJyaERXryWqk719H836mf",
  "key35": "2xmcmTmaJj9UpRLp8FpRCpqWHHQFbRCB4CY3DWFKsS4rJV8VQUFzVvUUaqAtrDmtxiUybA71fv9v6hJqvdqBSYvP",
  "key36": "611F1unrMxDTzLEVZZrRWVVffJ8CsA2b45cCDtG4a9v43pVYAC4bLqPydKbHiooXQ8mvwfHCETecQKeEvwiVVRZu",
  "key37": "4XSihC2CK4eEZNLJLuEsmWFpAf4Kgsbs5ZZ7CrL2kwoFxZCMZHjRVqXce4VA6meC3Wh7SwmVYesQnr4bsLeFMxXP",
  "key38": "QDS22HYaTweDxqFH4HeX7vn6H8L8YR7txQFRxFk5XYEi6eqAtHi65HfHs2dyH1DLhC6amvb1gw3G8XHGBAr6pp8",
  "key39": "3xPDuKLx6UAE6tUGPQTmktnpoyvXSVquYb5PE8y3ZxjXfPWfJXpdXRLvSynMrSC63PWBCwoY1GWi36Hzx6hE2gkD",
  "key40": "RDT8SVKvnH8aeG2PRrB5ZXdVyxfLWNkaS837WpYXgmwjRKKS7BZo5sTgB1KuFj6YLksb8SFUyhWi82iyR4grdgq",
  "key41": "4vXsEg9uPKBmVsHkk98RWacmzV6LnYH6gE4abFDxWTRnbSAHfFDkXQjDU2xjq6L5cMSKwwX3sQ39RCWu7cWKc6TY",
  "key42": "ViM4KE7aX9LuWn3HPJHoNW5WcsUBHACt1R6tdkNoNyyqk8T3eb6aiayWQg68DSU2YXh9ESPysJKrzvS7jtfVtQW",
  "key43": "3yzNvV6wSz5ZB6kFWJLMJr4WQwcCg9PwLyQbmbGNc9zMcaYWKtE38thyJoz5sfeLoE8fnNW3dq5ScxdZwdd2ZFei",
  "key44": "gLePJdu6z3bUCn1eyXXnSiH4vYhZs5br21JLNXfDeyyjHxxAwTYLHyw3797UEFHrdYtNE7aaC9k1ZG9Ti7htwak",
  "key45": "4rcdMDnppwQJ5sJpcUcCA5vopQMbSrasmLuaPxk9MQNMYCoHLibUKWKLwGb7zWVjkgu6hb5b8NLVpnLRUeZ65bWm",
  "key46": "5UwjUwYBhuCzRrNUfcP17h3aarschE1XZGG1BCuxaue9sgfCre1MhnaYobkeguJTEH14DP4z2wvCio6Bv1LFfhRu",
  "key47": "aLwXX9kB4omRcXmPnSLakRiaKkJvnUAyCXoperF9FMpHyEk2L7WnPpiueWuWGxXbTCn9JeaWGnmDCDS8hwwaGxN"
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
