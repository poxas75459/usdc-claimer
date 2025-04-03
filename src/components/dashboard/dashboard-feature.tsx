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
    "4djpWSqQu8pc3MLFXaGgU2t6coXbuyTgVxfKd3XCayRxeuZ9catAmi6p2rEaodnVBkB7U3J88Zd3ADCcRXXNT2az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULgNudYPjrSwgCiT2FFgCYhX7W4iTAnmxugszfFU5ELmmBMBi3AvwaP9oaDA1wBhmNs8teunNK9phByytT7hwCX",
  "key1": "5wHBZuKeLwJSZWCoQUiXRYKEXL6c6UcWCvFdYq2ZhS3UncRZhsSowDvTKxi9kgFXZTVNm8yBksJbRfDqJRM5gL52",
  "key2": "44P5x83dKm2zRhM7SZN8wBDfW9D9CMf2GACmWKTciLMTnCrBbZhKktorbJEHUA2Y9tA6R5AHvvckWnbiKPAjpgdi",
  "key3": "5UPc5pZY3YxJtJfGs8oLr61d3y2kAM4n9yKy9VmSzwuE28o6tqTFvaMTtrUskmV734i64Zrkfq53sS8E7VYRLZen",
  "key4": "5SKvqLwk6AeMRaj1JkzZjXxosGpFH2SEd55Ny8JAi25wFwb7GJKruZ7m5Zy1CkWViDeWJHnyhanbqHyLyDbjo8Kk",
  "key5": "5HxLP5ZhCENrnUZb7S5ST1LPwhZAjus7fReH1F9byRFavHeSVV5y2FBEp7SX6cvhHT5dHhq5Qhk4VdFhfisAVTG1",
  "key6": "3WbYNbsonLWBDRUE7Xt2oYW44Hu4KrkQBe7rqsoih6phYae8Dtbr2VqBsuNYZwMpe52gPhYoozZxUsjGRmFQ88qx",
  "key7": "iuKNbh1wejCu3hLhEyhqPf8Cnnw6DE9SGS4jjrH1fS5dthdSL5sAWnDoRwnSvLLJfsD4PAwg7dXTPGpKsDzYfbm",
  "key8": "5ye1Wf5iyzTp1HHA2WWKQBWzgCxnRhFYDQM4HPSJ8pZkNMu6q7FPAVyA9dacPG6vQPg71MWDpeLrMyCv4LGGj4X6",
  "key9": "5jBYeUf91WXrzqpMkpi51kRnHuPJnzXdoqJUmjKfvTZXSvMa7RsukDdWfSULfGixHqcKZbR8MDKVicCcbbt1NaJF",
  "key10": "46mFRFAqicsc1STep5QWQJ6PwDK2VrucVwJ1QAFpcUa8cqAws3b4Yz3QvZBnmcvURCY9t9FshzzZJQhr78JJdJZy",
  "key11": "5m9Rd3X489gTbEuVBmKNTUhcbRXKaTjUTSxfcjQow8JYMWak5RSN3sbR3qNG4fTMfpojMVRu4NfuHWv65V12XKGF",
  "key12": "3QPxXAtTbJzn2RR54L1mWPGUCPszdrcRXUp8Q5g1wzbKGtJ4itvAQdsvYrKXEaybRNzDSqAunBHDS9TrGSWTmgDK",
  "key13": "QVZCdVfbPwMCx7tMkbUE8SQmyKzYxRMaW5KrbBNk9s7V2Mqto6xoHT8mweg7qX4Esx1RbCoe9CbKWL61mN23MYa",
  "key14": "3tL9eVEDFwvfgSuwLJJYbwugZr1o5X4fqBkH1DyuaHejDcFHC44pQCBmGyACXKW6TmNqgNTLBDZm6a7YL3JCfDFd",
  "key15": "5vGwxE8Dut5WiZexWjMYEZysW5bEbDx2RXYvQnEXGKoswpePmfsGC7SU9UkaMHcoqsRf2V6x5Lfwo3PpbXmQFrtE",
  "key16": "ce9SSrddxmENbTaxvatsvXweW958KH9PZovoUcDfBN6tqFPfw25y9UgyCTZXaGnECWVis2ibHoseqyuSzA5QGGu",
  "key17": "48vzHpaBtkmr5XkcgCTYochNvcinyP3Nm7U3xb4LSUPCTfJ9A2HEt8KkjQrRYwfg487xLPuS146FgoSfjTsxyd33",
  "key18": "3BiD9ANHATVqoBjFFbmX9TQBfUVY4CPdNjVLpT7mDH7tjZhfrFRFviYgSbqpzUssUmtXxFaYU5Wj1Ta327ajQYV5",
  "key19": "5BmB9dc4SwjfGj4kHomW2yvGE1GwskPZTf6cpzasDGtSte6kT4LhvRYh7wMrSVgn7bYn6p2i4XrsjdCDQpBxUW3C",
  "key20": "3d3cELPSoRR1nyw2BjWVhfuq1u2BB75D9mhmpzwWsxbvSDa8Amgf1jvGLfQxr5htsboY8xqSEe9KMcnXiqbHk9RB",
  "key21": "2zUJgtyQaSSTjc5vqe8L8fKRS4DHgM6GytfocgyWW4dcTYZKUEEUbM1Q5jttPCB9rKKJEDzEWu3v8J84cEKTVeuz",
  "key22": "7ctK56bDYcLw5AVfcr3LHQG4Xud3gytVKzfMC2gzggPQFEpEv1tD8XBphUbxozJgZiUvRGX8V7g6b79GtHYsQ2q",
  "key23": "2hFhm2ActnHezj9W2SgcQys6kro4enBKCDiqyGTen59M9ukoezTADpDNfa9txfYpR9HZY8s6QWREBHbbXrxSX7QM",
  "key24": "3NCVAM5ki67WaKZsSynXZ4eEhx6mAujK6CYBJFb2q9x9cNH3tKjBERafX3G3Xeq7BrbqmysZSxtaBVL91LaR2pwn",
  "key25": "4VZJg2HxmJWWrdaKvVFu7vcSRiALdYvixNbccGDosm4j9xwZyJgZ7xfm9PgEQk3uAcVGzkeEKtCyvgQjFLBxzvKM",
  "key26": "5yiBveWz3u7hA8q9TZEJsKc2BDtNfJe7CmBnA2Bbsg5X9TnMdd5e4YXBzZ9dDVHDJ1wgwGoFpFZPgQ9LGgjNpM7x",
  "key27": "4nUyv3DA8ePZfFtktWCaHwP8TUBVRjPy7DHDaSNSe5v2KJMhSjxsza8gb1QprxmTSgXjop8ERbu7C42gFkqub3Zz",
  "key28": "iwvVWyeCd8FdkcjUr9WFk6gZpPs6V9Sb2na5ya8mzh9N6ndbjSVNPSUPkRrnqRRqwcvXHeukZmeUNH2MqN4bQhS",
  "key29": "tb5gUZBEYEnL2RU2KYPrAahRicJYZY1FFU1rdZKvkXZbP4qqRrAU7Yb9FtDf7ZWKTATMCzexwBjJEVcvgAQFo77",
  "key30": "4hV6NP66DymWAujiBTXzpbszxxYhPq8oue6Y3HViuNRVS8r6faNoUJbxHDJuvMMoq6y2Nu8oY6DLBCSTvQNaGR3Y",
  "key31": "o6Em1uhpfn77spvCq9U88eKF7Qee4faiCDLjeUVAPoegWdvTHXK7gfatcTyFJyQgzfeNykDonhCgDBHGjEy6Z39",
  "key32": "5WVpYGjFqPbgoeqoNMY9NhJnibivbKS3hHLyUL9GBf5BNgkugWkT2rkc7xshkE8Hif1axgWJWoVnjQBga4bTURxi",
  "key33": "2Guuv9ADu7inAAbJ38cD1QTczuJmBGoN1yRWat7mBYevqQVw4eEHRhbw47ra1eCnAjoCszwzCAehSHj3zNU8gRyo",
  "key34": "4xHqPPvqCq17iAAmDuz3PoAcqTdtEXmix6bmFgxr33WsQJDGeNY5ys5oUWNvZ7UPybssd26pJUw16rr5nAppBdHT",
  "key35": "3dWpMyTvn7usaBJcdWwjBc7zTziByGemHNPaaUjkZRgsgo5Fvs8aPdXvT7k2UdoxbJbj7pas1xkpWVXXFmHUw921",
  "key36": "26yjSNecikY3DGLiMj8DcbvgnaQUs7gWW17ugxq1fmULeKjQigmrBWdoWWQWDWAxUe7qtNArmPkZpM2uAesEWYhD",
  "key37": "3fHSJVhbxsYTCJ77Uicw5e2e5YGh7DWdsfCk9MUEdEToc68JMD3SYujLLD8tJy7gmLTkxZahR4rJAQGpJTNufBb6",
  "key38": "BMaMs86jNBa3hc2L4nwdGNUHbPVdSyP2h6au51mh1ghpMRo6mnkFvbD6yAtkE8XRsKwy4y1PGoRQuKdkhqxefCJ",
  "key39": "5fYmZB1LKbhGRcfNVhFXUwCdXjrSMnxv5ZCJV7xXeVyc366rbfMgcfRNJcnmbBCSHPfxVZbJjYMgw3z6Wq9uL9vk",
  "key40": "4F1J2L6zMsqJLw3BJBg2rqkiebFR1iNVbhhEhhrkvRAJCbAfPRRAGyTNS9u7K3xb22WSHbXLBc4p8d5vsMKe5QTs",
  "key41": "2yRGRAYBGHffaC3j5kAiqeAhsXMjEdhvA3JwshVs4yYsUNhpArx7tWG9LdxDZ3PzbA4GLwuphQLHZDvkytnBYcLv",
  "key42": "tZUN9YssWWa5JQhg4Kk8TnDxqauQ2XB5Lm7ZrkEjRmBdS3fPQLU7NEsctPhG1SocFHM7KyFSQTDxSb3tryjLhWe",
  "key43": "CxAyYMnQhyeu7xuzebm4d7mxGAGZWfupw1GTm6TtZATtCgDezpnNDWonorWE23cKZSwfFdyQ76JEa8sxnY3bent",
  "key44": "2yC4F1PXTppYix2gDfUeCkQsobZPQgWwtGKcscn8Vmpd7xZwtDgiZQohzLdSsBQ6HJi2XmbehGyuZPeEWxUJn6rM"
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
