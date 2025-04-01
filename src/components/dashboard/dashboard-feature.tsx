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
    "4U2yGhVvDWeYejqzsMRrpgNgFL2U4mR1FaYV2Qqs4MGJEEr4HKWZLwEgAuxkB8PExuv8cxKh6VpGjkC51wF72w8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J4iRC98MS3ttLjRMJUUZTbzJK6h4ThHJbVA7ugXTxoEAf2mM8NznrHQZFZuNUY3y2bay3PmYBcuyoVYCjJxTkKL",
  "key1": "2mgyB7Z1KkbeAsm8sW9SFDGSxyeRymMfLmHDELrzgzCot77M4eS7vPjA4K4FW3V3UXnojjeQLFNwfFcuo8VM4LuG",
  "key2": "v4bDcUUbXGTFin4ZaN8uWEWGSe62A39ZDEVT9gHe7AQG255suPTxoEekt5mZew3ciqCFkHGG37UkiRcQu9F94fs",
  "key3": "4mvUJFUtkwZD2ANmgYLwgRZDuzYZomW4i5xhhHLoDrRvV6bSbMKbNvFZiAsn2s9sYFmMLQkn3CUJuycekPGX9ivn",
  "key4": "33Q3Fvnudf94jsBrkuMdmUCmtt3R74iwWQgoQbGFJLkT1arr158zQjjetLf89qRdigUnEMvX3BSwVubwJtv4u6n9",
  "key5": "4dHLfK4aQBp6SCEbq3MfZZ2youoYqPdAUnWePjWiEarM4FG2Wxg4WhYwgTsy4Vj4jJKaJg7VnCuRhDuy48CYn7wo",
  "key6": "5JsCeUU8q3UHorCx4JEoJV23EVo9Ez5mghD9eYF9DGz74r3cmkNascxfNad5g9FDMYnaedRr4mCZB5xt1hYCCpan",
  "key7": "3U3XYAo3AmY7hTBzk7cFjkCAKnJKr7ewMDQ9MYfa8xdrUqFmPggtnMdvezdMz5PsEQnn4Vr3t3pRbFt7kyjrPkpH",
  "key8": "3Ggw8kEXsngvpzeu62quNWSCEP2ctvnURrva7uJCXTcT7HFXKU9RgRArEYoG2zoeN7eNFrC2MT6cynno1tqX8ufZ",
  "key9": "2ZdRNZff1jG5LniYssi2idqzM29qRZ6XPmpXSpH3j4C3sgC4PheTQyXJXUtTyRTCL69PPtMgBz4mYZbwWXMGhGT7",
  "key10": "3LFAmmVwp6XaTBt5qhqbcPJ1CXu1hJFcd7SUqQPF6LBWq3hg3tdmjzdZdwoxzfGY2SqK41oRMhNGdumoSxdAiAjS",
  "key11": "2agrcqZpqURjVwSoSh5PX6cjEVe7ZbMVkbqL83W3oLPAgQePh45RWswbA2k6MPPwWgYCx7PzmgJvYvHvUr81n1q9",
  "key12": "3ALNVQy5BWDKqDT7wwSvQ6MoW8PMqHMcsXxasRTHYTCkHwLTDyjSj97noNy9x4KSFsCnp4aYybZmuWu7jwkJDqeD",
  "key13": "55s7J5U6yPiYAgiv1RZaroysJhnrST28QEhgdhEHMFn6uVWEog4ZVQNMf4QizrdrGPx9ipnH4LCJgHWwR8JwhJ3m",
  "key14": "yiDYKMChGfqbxJUn7KJvHV5jnW6gMJ7k2geDVdHsK33X6ztMSKRiACPiGuzcVhMT68cSuweQ3zd35i48ExoN3wZ",
  "key15": "5xm8qAdK2ZxEgN3vsA58LMMHr7LWs1kmdXwbPij6soVE4FUAq5JdCGuZtBTk5pceBoFCJKf8WsVRkG59YnzHe2PG",
  "key16": "PxXmPimdMb1gPeLuqAer5DsVL1MtTofhhGN2dFLEMgwCAU6Gemm7mCpva2WyVUebGa3SCkxWUpVuPt3CrFjJNWD",
  "key17": "5a5SV3ypYWn1P1VoerDvRsWLmLN3doydtdL19x5W5w9h2cFvWXN94m9tGNscvczq8K9bSpvCdMSHr5VHoCq2CH9E",
  "key18": "45jy9qC94Fm7bKbyE7r9uXSpCiKtRDXwpbJAjHsnr4LW5XURPNcMkcrGMudzygzZf7zfGchcP4MBhPDX2LzNcKLE",
  "key19": "4MWHHe1sWx6FBZnivzv3DEAunrAAaXieeioubVcdMFMuwhviJfh8KZcmCggwe8o61iJa6AbrWvQEUgY88yJJFtP8",
  "key20": "66DeFzHiXGckzRCosdQcDtJ2y1UdvkBgEJsHisau2tcAUBgLPzUswNJ6Xeo8nHd8pmDSd2zsQ3C8mhjyoTVvZuEz",
  "key21": "K71uZ5NYmjSKgAGQkwnhtqCoZzudQdhd6PUYfV7PZtiTE87TAFGGvvo9A6QuXipmY55r9gYGvV6QwHM5dkLZw9B",
  "key22": "4JWSbn3pjJAxdmKtUPCm8fUqx1tVGHQgyw69j5AHJpwyJRu17BubfQ4oeoe5fiNE3LzB24T4L7vAQ1UiaTwhHYgE",
  "key23": "4fiwnDYdRAdWfjho9X8fq5s3g1QASAk4o5YPYX141HrajTXLMKZ6Z6bCpNkKVFjK2SvpzP9fw6JBbfJL79roUd39",
  "key24": "ZMk1VUSpmv7tNjLhtfnuyePtEjdrCscWFUdu72DAKZbkXucUqVepW918U1Vo3V3fyzyQXwdcB2qZnvZkinm1qn6",
  "key25": "4xWRdoZMhPsR5rjbJapvaQ63xnHhJ7f8qjVUB9aKhtQqQEdepEjMaxuEsHyt1vuDDSBkpkKz765z46A5XZv4pYZU",
  "key26": "4rnfWb7uMVCwf8xhBauUH3qDqvKt86gNQYQsWweD84CxxFP8H8p5WXLTpVNeKLQ9ppipTAk2ZTqVuXouW8M8V2H3",
  "key27": "32FcXcGvrDGBjTaWvZBUoDHAJLQdPAAb2Wb5KQn845qTCegQz1rRyBPv3cGt8bredRdBQwcSvLB4Y4B8T8SZ65NG",
  "key28": "4MpLbEzukwMqeLKhU5EyL3ma9KTSXFBj7RsW5m1AbSjnhnMH8Qm4QxVS4ejccCF7M4z4PhoPHnBjeWXA4S6ShLKE",
  "key29": "2nNqivjRBRY4zSyn7gfvXEY2TvQMXuzjj22Ytpb3vChWpJNX9W2bPWic8q67SviphgKX21S6HagRNRJnAzLRQb4o",
  "key30": "L2tFATM4232aigFoTubGqwzHmgYhH4hxeUtP5NVVA4QC5tJ9hwyUrukfwmRvu7omyRtQsMPE6bCPKwBnWpn3HyJ",
  "key31": "2X8sdLGjX1BhMLSKmi8iRJ9tPkdACARBmRY6sYoNZU61PDHUB6KnnBRSVkBrpF6MFz2HzPt7qivJdrrpmqCZQjvQ",
  "key32": "3JkPTiMGtfDjrSsAnubfxeKtH7PL6NzJWaPchnxNmvXsNKyUuYQ9cxq5w8sreEn3HSZf8rNrdoBUG4r5T3XixkV4",
  "key33": "3VMbTtns1VCv2P8j2X51MaPbqKpEPFxVC6a2M7GEnfqx2gXYNL35gUp7TnHXoqiHAja5S4ie7Hdp3gZPSa3qLSya",
  "key34": "5mHzMDuigmXoF1XJj92LgdXMEY1qjvyt4DFwd35sP89KUzDH4sRm4B1AxJvYoBicYdhkANg4FZy3k9EG6L63y7ZS",
  "key35": "58gSFsLiA7pivmwSkmBgdU5Pt3aRUJk9zBH2UG8eFkiEoKMTFTWTo5ejSKtfxyvuLv4sxD3az2pxkaRGM5eJsNjk",
  "key36": "7zPJdEJSudY6vyn6e9Y8UgNqc7XGGB8TbgyWwCs3J3kAxoiByfAZhhbxVneR3LszQxK6nV78bW3swERv9EePugv",
  "key37": "3QtUsGdjZz6Wc994rw1nxjs6g6xZKbGTJyxxdTf6u3xc5yrJRwiM2LhUXUEFbibXoQVAd5wGDaDYHJq1jdzfAzu5"
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
