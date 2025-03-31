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
    "4scbczq8bNw1PRcKxQbDyL1suW6eyUmh76S12jeTvadKKk3FU5yMwP16rmMK3DgXDjCr8sDtvCk4t3BJBxdfpsPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjTTKdqFYuuUde1AFWPWChc7nQCfdJRJJ4f74sgh8Da4GGd9eoAZi5kv4f7TPP61CZQYCrYVs6ALVUipwKuNpZc",
  "key1": "KspsWqHT6nusJqq6B7H8MnmSQYp2xrZWt8jHFoqFn3ybvEuU95kUbdsqcsJjXLUR1N5dTmkToCshiDzZ13CUxdh",
  "key2": "5by3Wmodk3a85DqiBhDW8BZryKZMtMLj5RHcNEEKBdrfcURR5KKYVGRdxYWnAB2wx2UEy9SKbWMkcyHZ4if2UcCX",
  "key3": "5vV8jua2ZUzekwLNpLXnFZzYGX8CvfhzksNP2CLTxnQgJDYuk9AypX6vL86CHgC34xVLiyNSUN1QkP8RSnz5pivU",
  "key4": "29zF6WX794zBBcdpgWrT9EiKijANN5SdJwsPBSqawPJ1frjtx2hjJNsRA1PSUtCgXP3rE4n35MMZfcTSq2bVde3L",
  "key5": "4DSaBSyxbjFwHohaXc41fqZ7EeXVsQJthGTTZ8NoeGukjznhzv8BCXUUivEBZmXsXgPRArcarm5cgZNdmJTp1fsv",
  "key6": "4a1zbvhEfVPv4ezUNCms2vMu6d9tB2BjiPgAomRTBsFAztniPuvhDpcgvUDrU1upVJB1fXwmNaAhmwWGAhoLkLUr",
  "key7": "5XHuYDvtSoknptDTvDcutjKmRwXNKCWkTUdv5Z2hhh2cDjfyYbJgasZfvGqb8EkXA8uuybZcV4Ea9d93tPgxxLHN",
  "key8": "5hFddPKpWrEi1BshvsECGN7rAbSP7mJwJinMthzV2QsXJhhJqjQtfAFxFSMCj8goFJqvmKFH9ysMTrDpd6NEcdAV",
  "key9": "2Sv4Ng1GeEhqjUvyAmuvdzn5EmVZsKKPcc5WGQzNQ6pfrVTdnKnigZUxp93QNq3srAod6ZiC1yvGB2a4S3rX1rek",
  "key10": "4pVpsTMCuf439uTntqzKoe2hzkDLUayi93ZYsQhVFgYxKWQGhs4UM8pXMkJ6BerMDNjuNQCtaKhRpbTgUe3kQFwi",
  "key11": "3F8YmJTCd5eu32RdweKThNSksYyah8uPgUNY35g283g8bEwPfuxCM9FuRTDro44sUTSxub5PU81msMjaTtt2cYBd",
  "key12": "4c6YZDVunu7qStZQN2ThqztvVMji5wiwrfm3Yp52iR9B8uhB62MaZ28YQYTJp2aUPJ11Q1do8vpL3KqmE1uz1njH",
  "key13": "24xsgzoxMpCBUTYPjz5BzcaAYqi8CxNjmZddju5kURk1jxZLb85QtLmf4WRqDvmnc43L5HmggKiENS2Bt3fRzM55",
  "key14": "2fF2h2GVjz2KEzaUKohYmgmTnuhoRfQmBWdA5f9WAvkJADzQKfJwzZL18Sgy64CJUUnkGp8hHc2wu2ggbvtxCAVV",
  "key15": "3m375piEC1p4s7ihMCGEKW3N47qQ58ecbLAe6GSNqM1a9jyuKSc1cqjdnnytv5ysVcXdq5h7ZrczPAWmbu6SFYhx",
  "key16": "3TnTVGyMfLbxgZU7MiAr1VBFXMn1qT81T3MiAyFqR9jvdAX7akpUTzt1cCyX4zQvC8rQ12dhE2t2Z3rsJhA4UFaY",
  "key17": "4sR6xWtMsWHDrUbtooSyUMVaNYka2Yn8QwCVnSeKy8AQmdfi3sQVUvbutHepUqNno6a7BzRVcbbmt8YeWepd7WvG",
  "key18": "4YhwLAwgupqmWJQQ4ndiDLJJ9ce91AtALvbJKySaQNu7owX8fRTnG4Utu4ivX4F7bATdzFW9HjXWGWVdmagayvAw",
  "key19": "5aUdUo74fe3Kba4V3DChL1RgguA2CnyERuWe1ffF7v1m9v8C1NscCxnw3omSHQf4d2P8Hh1UQeu7K51BoeKDAb1P",
  "key20": "2HFCmRKSxTECqLWmXBQWAktHHTx6g34UJ8cFNqydTcne4ewmzTKHy45SwYJxQAsX4XAj3LFzqcd16VpNCBC9rA9M",
  "key21": "4As7RE8rM5DDLuiQPi4yg94LF3ASnBZ52pB4qTtcPXE2UccNZeNhMnuUi4e1mdxCyMhFFMM35USvg3Q5n8mUQDtS",
  "key22": "5nQQBhsX6LS9jPtrMzuz6q6td6FWrAPjkFub1yKfx2mxxAYLFjanoCxzTdLtffeX1S5mc9GeZcv56ZvRuPMJsnBU",
  "key23": "5ncpQk7Eqsz6ZgqH5Yt8vxyovEjTfM8d4sN3zTMBkUXFpqz4L7Wdh8Ai2ZrSPujVZXH7nKwNqjAv2iuhumyVegWJ",
  "key24": "5TEyggZchexZBHuDHi5D5yp51GG7J8dfVdSi1iQw5QFmsWvnZBm5LV7gG74yPevBo6K9RzXddmkjxD1JNzZGECtR",
  "key25": "3X6TsQNsr9zpbfgWTXGZ2GXvpqVvWo8YaC17Vc9Qk4QDfTANdRimZVJ8WSEjbgYWz8V4VgRN18Anxsbgg5yTeeR1",
  "key26": "3LSzJFkrwhzLnWncXJUdKjBm4dNTePtyRKz9N2aapGn1W9csqcWgBUaxmeg6LVPqgqrem7YUG2YFDoS4C5c9FCac",
  "key27": "v4LRvf1yMArEZewF2zZXWEAz4kw3n9dh7BQWmQytQYxLHLaPqqiojZys6BDK4vSKtKhcpnj6wXvrvsz5tcmoKJ6",
  "key28": "2eYzaFbdimNHrkzE2oFakfHKFbKsSdXcS2Xuo9UqvKDGk4r1fb2eBtcD9FcDEJXH66Y3TEUG6yZ6jif641hoTrPK",
  "key29": "4jxfr4KVsDn36Kw32jWSCmZNd8d4DYzFetrc7Jgs9JWvFk7XR6cbchACaxYNVwT5L2c5CvMUimnpfKatZgz5Dxa5",
  "key30": "4K25LbgtBZYCQzgN8TDYT7xxs1XdgUitZ6J1aVnZmMwrc39PDDQ2RJmwBwXmWN1eF7FEkzeH18vEZjP4tFtJW8HJ",
  "key31": "54TBgkr2JL1ZqJyKpBCV5ZxP3GhnHdYcmF3W6AYqGw91M3dxuh6FS3agDCUxkor8NcPDGj2fsTjwThL1w7m5rLqa",
  "key32": "3ATLAiDxVTMAwEmtyxL9tTjPJuwWUZfcjySepcqATrcbcaoUVWqAKNRhn6K7Yo2cACwg1jXHNV9Z5SZ5ZN5ZoCLA",
  "key33": "5ZGJCqBeEEBPR5g6Q4DaLPAWDiijHfxkBkf3QG7RJX1ocpjrL9tEX5sRAdBSRFcLgjhGNf6AJdK1Jy5T2UEPWaJW",
  "key34": "2WVGR8xATZWd7DWAnfiVL24QNSnmHqgkezgQWSWkK7JGsEhdzVcRbsGcdLbQyuiVxzZEx1JkKNdEUmUrNU6tEYJu",
  "key35": "LtydNcAMBJujKsQeeNVbxUrmidnVPQ9fpKWAJT1geyTQUDu3L7axvfAqwpVha496wLEFDCJknEFK21wjDZJoNSc",
  "key36": "4w1zuKJGKyAThaHAguJdxy1HdfSsCnS8ke6mkiFXJnCUWM7BUf73roKHn8tdcbXuuougMzYhgLEuZwbqGhMDBVn",
  "key37": "4ZJVN7DQ4zBUioMgX6q8wSWYk9fmqJtB1mjo7VaNv7VURfFANMXCfZTLMVLZnVBo6KYaHKUerEvjhUuVonsatThh",
  "key38": "w8BcUrbFnhL8RoRdrzdDMjQYYLrdVuCb9N4ojPfYRFoctJBa8yvwu1JbhfUAJbf69XPxjtX3QUMEXZZJwENnBje",
  "key39": "2pF7qrWxJ2fudqFghwvf6i1RwUc3KpxTm8Jha44xsFJjAuwCcxmjc3nYdHdSwWRtBiDPK7MA4B12CaEgLGxC5x8i",
  "key40": "431bS5hF9UN377XbkpweVGo3UUQ4GfnqoxYtRBbSzbBk2eKXR2oBikH6FEKUTEb8vuEPtBGzBwdRD51XCD7vym8b",
  "key41": "23tPb9y7vyhKJQeCnEmXRzkVpzgPFbLqa8BVE95PFvjvucocWZkqyBYehfkmkvgmuFV92hxHx7V4peW9DpqbZgQL",
  "key42": "2n9eEfUkh5nF2A8MZCtCGASq1Ykgn2KmHr2d78eYSL5oxM7H5x64cnpDRoV5jxfeULMA7gADZcDxe46tsEMVWXzN",
  "key43": "3TZei2KFeqZshTzTA9DCSXLFu9HVevzvhpoee24ctgMuVjaodb3ztYnT9EMvBBEHz2dRNpZLuwjHGgBBBBR4MrjA",
  "key44": "2bddwDzRVJjmKkVtjRSoJcocTQAsMo9LXU1AaVPSCAcVi92RbRtZ3Jg5K2VZ6h6CgxsDptbMwJ3hc2CQQGNkgACn",
  "key45": "2LxHhGRwjwXTMCbaykBE4UHfRa2ZP9D4dxw8KesP7MjSwFY4Y1REgvnQhmpnRA7jJYLGTgWtZX9XQPGaaGdNcji6",
  "key46": "3uPxYMZiSFrn73SvkX9kf3RnV7pChNUnuyzSp6o8sL4Hw1CGM7Uhx35crZJTveMgWtG1NwidyfR8zZ7YcrgRciKK",
  "key47": "35PFbuWezjNYEdaSeTaLo2mbbTRmfrp6vjJkZcTjf2wYfuEndgTopxDKkevq61Zv13zDKmMWG5ABYvxvojo5bmp2",
  "key48": "5BRBAEd6Jr7q1Vr8Yvp58KEQpS3FBV83h4Dik4ENjytUoo5myJtRyTDmP49ReywEaq6mCEmsWpfSAbtEkBBNVATN",
  "key49": "RgJ179YAPoihSUniMsXHZcFbTjz3wRfAPdgbzJmX2zZe5pHUMLWkdJTsKw89XGGJWwNEnG22stzFixzaSACdmF1"
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
