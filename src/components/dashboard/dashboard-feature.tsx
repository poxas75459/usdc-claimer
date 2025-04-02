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
    "zf2nXPYqtJQ718RxQpTsSyUUVrQE8JfKTYXDnAqveef9Ec2ihEFzo2rDiMYc3N8Cm1Zov7H2bNNkg9jB1Zv7Roq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39S5L4qQuKkBXDXMgwafuSHw53fFmobddjT4PLYbiFX9PE625LqqbmfmPYkEsjYKiCvfpQmmnAHKBZozT68TczLf",
  "key1": "ymKoFmn1eEgxNFTBj2a1rZ2iYJcZ7LTmexcSKJoQBnvSP9Xdymt39qv9aYQrMu77VND7LvexC6D2Sb1WMJEQepz",
  "key2": "bwpGuTVMPffNCCsLbC94LthqHAZ6gkS7dEacPpNvr6bkmjYLrxXUsPi27yCFdurgTMVnKwVYbAJh28oeJKPgHxN",
  "key3": "4y4v6B8rJHFEhGf51sodMSbu8GERuYMGbeqVtfPbQwfoyYXMT5U1qGpKS3H5DTy77WoJ2ZahGAnfta4m2NSgiXc7",
  "key4": "2wBWv61e437RBrCRTmU5H6NqqRE35xvEC6UJZp4sqTbTNDhk6dcxGScfKa6xmDVaLngjgaDtRAhsApfeE9pVDUAm",
  "key5": "67FtQqNZraQLg2us8QmNcmKBZywiVSmCpZ3XLCSmMo2oBe6NNNN6ZVjk1wbx2RwzHYudoKtSZDXi4dAaDVVBj5wS",
  "key6": "3n7okqcE8UxGhdmXixoYz5j3qZC4PNW7mwRsop6438NL77MrPQw9UFLC9BhNpoiV1Yqwd5uyWGaEnxLPNn7dtwor",
  "key7": "66zshSQCUeqYStwJRaw5dhyXDwcyLSRqdTRfSbDarJwEY74fTT2rbWVuPBBDki8653vPUNQztUSRZz1YwdPiviZV",
  "key8": "2JqqcVKQwB7C4zFv9eP6CDDTETU6bGbW9sRBFACG9KNjCncY5nHYqva98NXuYSuuGytv3MENHo35tp3dv5d5Hbbc",
  "key9": "3uHYNbzDzUKch4yiRvRAhqXpgjCi1kGFRpFs5M4yRG5kMcmf2c7Tw4K5f42BkTTHLEn9bfViJ14gt52JL79mvJhW",
  "key10": "3Te786jSd5WPSzgHBf3r7MGTvmJRkEXCg5DHowbPD9vd5YNBhYwdKnPQQd99t4WhviZy8rgmC4dZj3DyYV3FPoTz",
  "key11": "2syMMFKycMjzbryctALuEf4r9Vppnfa8uyg3LZwHYm4veDr9wHMdrz9HwC9mTpxpsbma9tt3kR2c7AJexsiMVWHL",
  "key12": "5D1UWsCkhEiBQgokcWSkoFSYm9No8oYPBDRZwk2cAXspBXZH4mGiMKdK8Cad2jv9XZdcgsPiTZpan2QxxP1jVGkk",
  "key13": "41Ego3LU5aDewuLW8QfG49yyn2GQ459yLeqMqAtnzhniWZa9CXEQ6EBnDAx1DhtUGKmtWc7sk7wgSurSZ4WqBZvP",
  "key14": "4diEiLVQq81JKDcTwrUAxdyDtnLM1uuvDUatbDgzohfkguNgMH79iEdufoh2h1554seQjGZXLer2bZNxFEXwwx6C",
  "key15": "LiyDCdezNsvxNiA3X1G1FiThSSRmUBYUQtd3xzjM5viMdAMtr5bKM4DtwXEJonmTfRM8ypTP3ksVJeRHnTkqiTc",
  "key16": "2E6b757twDdL9ZXhpkQJY4XGZ6F7etqsbcEqXwMQXcht2jxaAELTYZMeTkZmNc2pLjzhTxYRTSaHjUc1Z41Z5RYn",
  "key17": "5Dpcrr7XSN3RJibXhB4vvgNadTwt5Ara27vmgrkohDXVNEzjaf3VH3tbM7vsD3ZMji9976YjU6CNbeyxLx487b1c",
  "key18": "2BXXtLNaKnanGCvNToguxxqc4kAPDduqKx6ZgHN1Q9acFhY7QALapkFWmxGme1ZJgTonhKwXvWRHAwEmMsirfXke",
  "key19": "4LUVPe7qwJsjRwR9Ycw5zSCGp5ExaGdj1mhmU7vHEn95cZBfUzVNkFZJqH4TmiLXn68X5JSH8LdSqQGKTP854WWz",
  "key20": "2wruZnZSULYA6CUb3etF99iLhf1eZdi3Myum1DtocNEAtzVzsexcnVy9ffYaTmZv9Zgkntu1GK59ScZMUMtVcPCD",
  "key21": "2Fy77aUYsuAhW7nXxneaKkk3N6wA4ojUssDMjGv81ra6S6hyfpkSVP6ZF5ikC1zahpYD6yRNdm17Mry2bNv2Ro4k",
  "key22": "4p61vQDynxZ2RDkGvV4RXG8xE6rRS88igNCtEkfQU14QPHXpo1xP6mKCh4riJZw2SAr4bFks4GrNUUmWhQ7gyCs8",
  "key23": "MdndZFFvxenmTJzCn8so5xBZRafWZiuTtZL5rGxSxaKssXkPDwQhdJNuihdApX4v1w69g5we2MiRCTvwNUL8hvT",
  "key24": "3bfWo4mVXY5UGKgJRTe3GX9RX1guNyFZUGq7gBwY6P4AM4hPLBgarVVJzqQHjbuRjQm6n1VLJk7hwzdqUne7887o",
  "key25": "44VnMvpho2ucd2EkXUoJeDXF9qBmp4GizjB11ZwSeToadxuVkf1aPhQxmouZ1Y2DuuEWgCtwn4TJxLtyf3mJamZy",
  "key26": "GDpfe3R2yPhsYKHL2m4c9DFYoRmr4id7pY3goSeVa1L6ByN24uX6GJP3TDAweUg74M9SJRJ4thd69YbeKDT9kT9",
  "key27": "41p4ZhPG9vd1pD2oU8zJErZRuQPfzQshJcAZ2JZKhyABVsW1rTjXZ12WtjLS27cFxNL19zP3PexYBRGq8MDudsuv",
  "key28": "4Rm6LEygeiw2z3g5D45T1JQdtJv4tm7fT7WHPXBpT96sdnnBq12KQqccE3Sk1Ad1rf8syjoLvu2AGUyPLXoH6ATT",
  "key29": "2fjGhiqb2ZEUZCqdN5nLLQHdJD1p4bMKmEos1FudgEBb4xaU5zjYTJFuSwxca6LCuca7tS3M8YbXrNkRU7LuRQ9U",
  "key30": "4xUYJcg2jazfBEYa5dFUE5ZUmZWZqQZShGsGkftps37phHrHKrNnXyDyjcdc7jidheZ5vKoHR2hLjEHTmHnJYdeY",
  "key31": "2b83bRddqTShwZGx4F2x4u4Hpx9rCKVi2xzV4fY2b1CpmmL2dq5cX2gjGmokdv8DoapkZfcMVTvszZPSpRujsxqD",
  "key32": "4n3mrG4dJ3KvL6pohaFYwikK28A1DbVUk7vatjpRKvAy6tWyXjbpStrgyvVut3eqkSb5H8W4Ga4vS65yTXREA1Bg",
  "key33": "55eecNW14xL1FvDi2UdTmgDEhhPV3Ts5btiiaPPf98q3hLfbTdPs9nu1K2uE2dUiRcbkbohnzWRF5L9AqeCYM2y4",
  "key34": "aNpFNG51iYKxM9V7hbsRK1CYED44qofaCrU4Y6mPxKQQH2ySGNLy1nPgLLbZzjvnYRfhACcY9Yg8juofmPXdaUD",
  "key35": "2goa1QjKtPdpPh2qJT3WVFnHQ9YvHy4GB6pSdf4xomfGxPfphKyBfxvzvzS7jfdiy454NYJ4Aaqy8gTwFRwY8K8K",
  "key36": "5abc1dVGTt7s7F4jDBAqQ9sx4i3fe9NQtA6VZonfnhmLq88pe719mnLmBSJTcjSpBSy2XWZZoy5N8j3WEhaugLqB",
  "key37": "4KDTCU9LZ3XxooTutzxjRWiZrJXqJugLh35LujGLBNarwkyYtQLME8xigNQyunqU44iChUEg1rfapykmRayYLdK3",
  "key38": "o7tDm4LGFxArNte4Y3S9oME1E4cu6zsgGh8dtbYf29pBXVMvXBvL12uVjrXbkdRXVBJMeoBwrHK3VaPrqbVJ8xS"
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
