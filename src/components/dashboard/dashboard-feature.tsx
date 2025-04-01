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
    "2dVLMbhBndeoneSfBt22kgaSnyfD48QNYgmwdTW2KxWnwg1amKXS9TqyvBVaAud5XXa7XDJkmXYrXuZDHRkW39Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwMXy3xarAJhtmkmW8G4LsX5axfFGf7hy2oW6FyTuZ4PLceH5h1WoFQ5uMKMxLs7eDaucHcakWWXGeTnjLF9TFT",
  "key1": "tkD5bsckiiLMVujmFtRbFFAhfdzdtNAz8ugb3XE8faWubjxzCjjRbAiphq6KwuvMFzL4HUydrBrUSM6K8mvgta9",
  "key2": "2rV4a1UF2JLojKemeSnJrTqF7Daj2xBiLHREHpbKaFFCyyd5Bce3WEkpTPLWBZ3LSkLWZDn5vtpu8otvx5NjYRsH",
  "key3": "KDEjFDrLT7sjYuatfULv2Ktvhbuw2UDy7vw4KbAGXzpNJux3pD35Va7LX4EoNSK7wcRZaq5KNYYxtw5pQKacx96",
  "key4": "2C88QXLrtx2EaKEnj1vG3FDqsUnKftoQdi5pP8yUtReSarSwRyFG9zWhwg9VVc3BtUdyvqcpTKzerG2eyXX4GH1A",
  "key5": "CBnzfDxVku5AdKM68Dsi2WWFFeMD3Ngok1RJ98zTuHEwNpJGXAuQWv9dd4hBcafCb5TmwEYgtanrz5GadrTdFYD",
  "key6": "4kYQRJYA2Kr9bRbmqK4o3Jx4u2ZAdTLFBS2PdbuoxYE8devnu7vjuC6DVrepjz5ncEZWWh3hsy7MfRtbxQGBtrVP",
  "key7": "124VXYrMo4hosVfbke2R3i6hRvfWwf7VtnmxwtYzgNFULGvsP9TkNDMPfR5fKWqPHStBHxpX7WbNWZjUJeZrU5op",
  "key8": "59tQ8ozwu4YtU5mjK8jJVU35pqwh3FJtaAHMnQgKp7nRAQgaTH4Jdurpu6DwUKFqiz8tTKfd5Mr5w2sACUdmp5XG",
  "key9": "3oEYEyCCs6YRpzVEZybSRt8QsuB8bQWkKqnLweeGWhi9hCLGFFSY5EQ49YHQ1Am1iauQAkHrXK1GibzNuKNmR1kA",
  "key10": "3Ah7HwzTXGnoFQ4rCCaZcgqHWJtbEtQuLkeN1S6oqypCx4xdh9tYaBX8JRckA7Rgh48jnFAfjqK6tkxw29nnKhXP",
  "key11": "2pAVceX5WE1NSjuoP5mnmKzuYKdg5fgXonHyTd4Q7eKQCHzQsx54ZkBomdfssrQQW6CMfLNG99Y8t8ijn8dD3yux",
  "key12": "2yPNgos7s14VsA9UNxXsirMoqcNUBgLHXXVgy34d6F65Vzk7CDvfr9HB9hoL6kGnzfjv5HJNKerZta5oiXDo3yMN",
  "key13": "3C6R8KjkLFhSheDop5kgLoXCa4rq9hbiKgD83oGoY1ewrCaj7jTjGbpjN588r5ReRxuTNHqRFtoQAwTfjqnUWrX6",
  "key14": "3uTyYa5LBSwAQeFjkrGSjzhsjWC67MSFx9oss6mwtrN5e4m4radWGtAuUTiqXr1ocknh367d5H2sW1cZ1CgsbEKW",
  "key15": "3cpbeRQFof88xaZg85NPyfVA2NSzfAeBNAhG3A1LiEefXLqdYTTNrD8EH8KZLbGKooCmwhW3GxewGEJGEedorWY9",
  "key16": "59NyUJGmmCPGKqoz9upXXSRKXhd87CEqdTzRZ5c3TgTLPXVo3qMUeGCAKkeCyo4aeJjoyLZtv8rrrwJAQaRj9fzB",
  "key17": "2xWnT7xSRnnCoeBQo9NisqjmbBow1fJhDiQTE5MCyooTV5pWHNf9DzHB3QyVWzvcXqXpxMp1zxqJhBWbtncVoNTG",
  "key18": "5p1ZqyJi9SdFvGTQFn1obvuwHC32ojxzqFKBEYTwkHoJ8zPpJ9mcMcqJoSp8EVVnK3Pco141seWKTvJ2smLCHTot",
  "key19": "4LvU9T1xjTjeAeTGmWTCVGSzGr5Wx56q14Q8Reqa3HKd5KmnXgMFEmt9nD2DTfbjqwsgFDWwGVfc4SHMPTafdA5S",
  "key20": "3jsHU3BDx6mnNCzHCw1EbukKcDWpFctNxqtXUxZRNJj9vsNNbE4xLhePZ9mxjH8jCMCHSdeJyr72c8BZr2pK2zXk",
  "key21": "4zmo6UjdDySqvJxGPCep5LKCUFDqKMUYRHU774cDi3yozKfQUpq6UNhRhLZpGk2ybKAze7jGvtPxynQrjBjcPqH",
  "key22": "2zPjiRyfZ445w6DLE9cD2bGuNUpcP1ekrthNKbHVborXBMgmRxpvQ3BmfhsXRkwPRPpKMVXhbcEaqpLqQhzDhdSX",
  "key23": "2TwZDYBsVwU5fLugG6p87ZEgT8SU5qE2dzUydz3zYwN9gVFcaZVbd98baS6QUgx3xR9dTaHABbo9KFUN4PohVfdx",
  "key24": "49WnX7EdPtc7i8cgLMRgbQ36Qd2j7FY8pA64CfFXZKJ1Bdc5fnKRsZ94231r5ynvu1DqPh15mRTJR1R7TuYsoysp",
  "key25": "5CYvtdy2tT9SpAxydskKP87MUH4vP5tkz7eaCSvtPFhjhaAf9KMeLZ3qZEYtRDWpfaBPWXAnqasRCEy4kReceTpy",
  "key26": "5RKxqDkDKSMFpo42RijDALdZBBsEXNVjEotR8fPY4X8RKa85W8nRfb2CMMPWJZLkXYNV2cDzcsanVPXnLMR8bvHT",
  "key27": "5PgBH1ySBRuJykUERAUsj9dqv4PbRsz2j2sqHpkKTyXBUE62mCCWjjeMgMT1NpUF5j82oisVs47okK3x8tYQbCq6",
  "key28": "2m5v5xRZXYPYupw2S55n9u79zssoosM6FLddiXQT56yaN6vjHAkzNa3mxFdaq1NL9C9AsKTp1HaVuLtmMK1dDVkm",
  "key29": "613vEsCLEZHX7khqrsuiMbwEG5HKAhgMyEXgxPSkz5seBRBgUrYGYGKZCbXmYyDuYsCDGkiJGor5gTLaSvv71RXB",
  "key30": "3wtctv7KULZprm21s92npg46fkb2jqfZzefW1HE41yRWGxTZvpofunp2CRBUUnrZqF2f8F3Wxsah4oY1BA856e2g",
  "key31": "65P9PtnMxe884SHw8pNqfUR2uB1f8m1T5Qy43pfqZqwu2tWDXA9FUHs1Uj4cZ3tkQtwwQX37pzy12ohWES1Fb1s6",
  "key32": "rJG7KxuYjBkfrrbXcprYQ3XaH1oHfDMXFCM4GEbNZRo5TmVfAfLPU7WkSQH9KWPUUDcPCMGcydwMpZf2B8ZD1Ae",
  "key33": "btA4pCvmBnLFrJ9nXgxxLornFhzCKrauvWx2d5De8W9d679ZTGvDoLrduLDfV4mdutAVR8Vv4vQZjSoEbNd6Ryt",
  "key34": "4fUZpwYk6oYz3Cy5ZcXVxC2wDd3jFxHRyKknAWKYoxg2CvctuKcteih41FLkec9oxrkNhmdhs2QBLHe9KQnVmCyo",
  "key35": "2n9jgddMp1ZdGk3LB1AJWMPC9WnGjsjDw5izjDBtUPyzouH7nYdLi9aKtYVPeeAXxyHYzeLkQjUkYbXpXt9A7k77",
  "key36": "3b9QKieAqP9oHc6hgUgDBQp4G1RuT6tmqEg2MQz31wASQ9jJUpMH8yfMFwH8thYRh7ZjMPbFRPQdid6i1CihG8Hp",
  "key37": "3cwgMN4NJsanYWmoS4CaaRn1qtKecyeYQ9rGPGJ2zco8bQUyAwiCS3iiSo18V92xUmiQJVCu4SxiHLP8yqznRWyb",
  "key38": "65TKL9Cz8FKyRqkC449Vz9xRBDvApGqkG3EeJcoZTsRNDLTwCXTqvmMxp72pjDCZP65vG4SwWbm1cp9FuJwqSb1q",
  "key39": "2zq2TjmsyUKjUzVLpbVW8RkXyVbU1GrWTRg77SooKKekitcT4FDBNnX2MoxXa6iXbsAxNmGbASw54nKhfdsaVH7o",
  "key40": "2G7Cb6uaT923QPpCgi4Jq7cYRB4sV3pidTA6B9yTiYcnXNdfwyp3CtDBcHvb7aiWmMKE5jBaYfkUWPRvJJbAoAQm",
  "key41": "4EoVvSG8i8MytWSPJ6fSJab6hADHiYbEaKfZrXKUzspPLzyqS6D2tjARaotsoLptvJak3WjaVCpc3Czccu6b6xds"
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
