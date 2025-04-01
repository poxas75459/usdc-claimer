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
    "3FVnhZgJrmd2fnHiFH5gQjmLpqAQjKT3YmEy3DoL1jfhkDWpGLJdZtV6JfyLpKRMjCB7Ktjtk77X9A2JogQyLhPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j86L1Xttzu9eAGWYus4MWa3nkf9UoqFqpqhKAu21usZ9qCtNCeqqXqM1TyBNkvCrTFhHqmQJSnQoQWj17vSAuFo",
  "key1": "2BKo8ZBWUWrsLDRYgQgSUoXrJxGtUiwvqGqaTnVK6SpoTNxstnb8Mq9XxYxojT5NzpofpAFMPKmnEgiEfRFPBfaJ",
  "key2": "5cQHLiyd1FZC4cqHFvtMBCTi4pNwYi6d6KoNMdSYheeP7YMQVfpci3J7ojxP4DVLcFtkDjAuduJFv4iEGLK4j9vn",
  "key3": "24isjFmdSycCEraqDCeT7VrKdJ4iWpK8JSsooR6i6MiR3Srfi4ZJYTbocVUuG3FH8ZqjHYN3e6z6T5GfkwBA7AKt",
  "key4": "5YJRAnfeh6WEFxKumZPxEaMpXQ6nXzDmrfQXwtQxdEaXgJXobpduiZP4CZKXVgpbzHGBb8G3YqL7yvmt6oVZXguL",
  "key5": "BgoUdSDbd769NiW7qd1gVomoBYp9YnyidKTKP4WNKUdmrF7UpRPXXtkeGT7bwmWBs4fCZoYjypsmkMNGWpLeNHw",
  "key6": "4tgwJZCkpUmV3nriMSWzq5xvQ57ELkVHDnT3UriqeiGU5rq1mbZU2MU4YshpUMcAP1vTuopyqV4C6EVwABY17Y1A",
  "key7": "XJ5kfnUz3KjBazD1jmt64TgeioxThcPfB5ZXL2gsQE9WSo2QS748txrZHQjRMFA2TAYTF74iZGPqTCLtxpdb18n",
  "key8": "3xdidZwNZXdvUtEjMmMPpNeComs29AuRVmWStKbQJqQjmennGJxBAvuj6uJbrQ2Yid4hjgowxDz6B5CrH9Tdyxhu",
  "key9": "mjmm1qpWLdZf19y5iGEgZyXoZa39R17A9VjuRpLo9dcFDGtUnvMzchDh1oE9Rrd7GnSuQPk2KksSJtLfgyf3U1D",
  "key10": "4JYsdSS3Sue7AiLVGrSMnoK5Bh1Bs9QcsmskM6sfc5AxyZcWTjxgS2a9AY7EZ35ZJD1J7Ybtucb5YqBWQibjNhTM",
  "key11": "5pjXk8ktfZgt43ttMzkkez6aVWrS8B4rLSEo1yauUeHz5S9Mvfkb1jgTB57xvQW3ywhkDSA4fZ3jz7sKcKWpF2QD",
  "key12": "4bGw2vRwaceAtyBM6pUhTD5UtA5B56KkyEF3zqEFQFEPkmwEf486nnoWQYDb4MTvXHL7c4P3EFV8BZpcMCxKYmcE",
  "key13": "2yWhUUfAje3A1bKjqhvuSRSZXm9TscXmVerMkWyR7npUrZU7M2sQFNzsKVwizCf3xJxUftA5HQ8isgMvbYd7RwZe",
  "key14": "PH3k5sJcuwARDgfD1hP3SjG5ef8RbvFerdNYUrj6hsBbg9qcTNyF9UwDKshHW3kfU1TufEgxyVkRHQvAQJ3HzFD",
  "key15": "4TBUDN7Muk5JssJ9w2drv9Dc91JcYGPLX3n5roK1cgeiU66XABamj7UGBgDZipN5MNJ9gm2wb9Tq4KcMgAqS5uLH",
  "key16": "3Szv9XjeVuRfvTrYQqvfMwUWXpnrmuQ4XLRR92ncjdhnbTxvL7MKBzamuJPh3wDHUnTxDkPrFzByHsYCJsGQEWMW",
  "key17": "56b1fvmRpFN4vnpWwe8PmoX2ruauQ73tF87HjLvLN7kiF6auwo6LqdcxYhqmYuMbozejNyoGiy68GoGDgN1hQafR",
  "key18": "3WppEoYZcmDPANjrLZ2Vn6FXfcZasY2LMGSwJLex3MfhsyiB2r1KxYpMEdnqeSsMFLgn7ZuZUqFFa2nvheyWXnqV",
  "key19": "t2PEShEmf1DVd9qVm4ipGDX7h5WTe9vZcTyNS5ryZHLDAWPhGF1MQAksseM6FLbwtojSsS4MPCdQBaH1ALYuvPm",
  "key20": "qAujpSb2sSnf1Z7Uurrai9vJ1AgBPbAySNduroYGQ5r3CSvPBBzsLAWTuSHW5yyAtL1vN3Q3f4rjs4TSPFrKD1Q",
  "key21": "4UF7WsnxV9NMrvk7mQkS5ds1QrsRhvuvtncxpNWyRsy1hWrTCNuz95tZBzkgUKWnMAUb5rQxoZ9dmHfaoVGdavw6",
  "key22": "3XDSC44AtNYMHtpTZFP7kzYnwAY3DdiF7YRajV57UjszdhpUj59W5KhQAV21WbTEEkoUUA2bMWDB4ue2bLeATvov",
  "key23": "4KkPzEKJe8uM3kSRt2GsXidS4KZuM1KBPiPBK1Ddq9xtg78jZPbkV2rRYTNtBkZypAvFrpHpAkMFLFnU9MZ4zV7r",
  "key24": "2Kb7ENZpLkkoboEx821ZKpRWjQKUPBxU4dk2PMKJ2ALXKtmMXnbHYFVDmmg6s6LD4yzRuKLKDTNmSBvhFzbhfSRB",
  "key25": "2fLhjV2EH37pdHou3g6tHWmgNkAezxFS4dPxzmxBh5tktZZ7mEn1eXUjoLoC9uaK7b4PZLqUDK59Y1UUNnKosorQ",
  "key26": "3tqenHUuspWTE79ehB9NWSSAcdYRGaGQEtkgXKPgTjaEEBuJRraygJx8FfCqaszC4Z8i1HPxe1ZAxg575GWzgGGL",
  "key27": "4PciiDPk6CNktYNWEQKWKs36p6RFqUwqTvAiku7QidnNJLraBwK69jcwccZLsweQFuFKwpdGXSrqQdQcHG8Y4qjY",
  "key28": "59oZDh4LGHzTiYy38Dz8q4Xn5mTkCjKBqZUbUWn25KqtnzubjE8mdRxy6PhUZVbUNjFuobtRwGjgmVNzqYuGnpEo",
  "key29": "Ecm44W1q9fMYBB7VmK48XsEj3wtRjMze6Se7A6KwbhU2FY5MAwmSv8EHDRqAA7o8tXnVhCuVf6qkAuRekb3GwvK",
  "key30": "4pwrszDNzMSF4kGyNHRzyKq9KMpRGgwjpfTb2Wq6dyYnzRf2gwLhhdxUvqnumGM5A4rvRNJrKbmmj2DPqQ5BPWCZ",
  "key31": "6yfDoZcq3M84FzpFTZev47cbPdDJdg6VXSuypn4q2ieTDfEhW7E7N7Ga696Ze7dX1VU2DPt7DNfhTuVmAygej4i",
  "key32": "679bhHBHEYwrETahsFVWTpW3mcbcLerdPMHCimajbYUzo9zw8j6WspNAnYjwFKHAUSCY6MfjGQgNR4BFKbEYKBsS",
  "key33": "3CqRrRUUFjDH3RWobvGr8p9yHq9AQj8moDbVPZTpj43dtKfFbK959xBLJaCkwVJUVLbsRCkmCAttgZDotwCFch6t",
  "key34": "4tigQ6GZvipx1Atn8zJphbTMrQNNumcHqYFQ7rLVt9q6PR5WHu2HPEuddsJ9ocfE3Skrttc2UAssf4VMzSJWKPgL",
  "key35": "VRzFCTkbH28CyfdqamV2pvDnaYsrxDGfvFGUrKF3MQPnFF97pBU2X3DEnvNN1BZq6vTMSmU9oorSqc3LC3KR9cR",
  "key36": "41vGtuCtj2hRoP2XtWqMi1rS7k7n9oNm2VBbK9AtQjzFtSkqconyUWrWSmVhrPj6wHCw2d62xDn23mkSbk37npg2",
  "key37": "2PRBXUQ7B3pVYENX2NkceLL1mwcDtKGfPd2pg3KTikXWZhDxGkfphvb2WpShpac8C3Z79SHsqaYgSaBaTj1rFKYs",
  "key38": "3B7Ka133qm7E7HWrUfVna1YeirU1HcNWt8UG7u1xdxBUjBdorbGQjDonsjPpXjyDPSUDt8YzgwKV2sbnGsrsTGW9",
  "key39": "2VcWV8yHomtfKCcFdBPTJSRDcRrdWAYnjGvgPa6iNEkquYBt29v4CQEz1HqV7mh8rxbS68hQtE8mBaMuTDRnVJvR",
  "key40": "2STC3z5fuL7htNPRFmTRbSaMj8X5y4atgc6BpjytBNuq4gMsm7RyGp6a1ATQW3JHmiEb9DHWj5J1x8KGLwCjhs84",
  "key41": "3Ypi2CL6MsrAnVqdxhvr3KKBccCCjeawPsa5RsQMnSpEoXpM2Zqk1z3zGh54abcpfaSXXCgVJU7UdCpfLDkWgdtS",
  "key42": "3Qwb4fUxYamTTrtTMDH3xpKL4nxo6X5rGJvteae9s8de9dav47MF8xtHkxYjZVNcGzeg91zNLikeFiFQi541Yezm",
  "key43": "LQsfBueLzshMZf7AYLdLyLrbteZy4cV8Ym7Dd816XdhETUu9wu8bLPguD1rDbF6MEi3qXr6JAzNu9GkCZ7mcH6Q",
  "key44": "3imbmBiREpUrkCEFgmK9q22qVGZVY8GhYzRJ9gpdNuCDN5BEmNQ2Enoy7aAgAVuf9k66LZPRvHL3VkPJJcggv3xP",
  "key45": "48FgNvsQ5W9Tpk1fGFWDvLPYEFyzK4W5sLHfLnGxr8t9w8gyKG2uSZgNhBLVQ6vHa1SPNJHQRiej3vF2QFd9bmUH"
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
