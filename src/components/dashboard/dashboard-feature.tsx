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
    "3PYybmvzdw2pLWjeveaXpL16VANwt59Qs3aRzS76wPnM44giutMPEvQdmABLMgtAb5SjUuCMVfVAfrgns33ZBjKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vBPrm49VK9sg7DXU8JdxAdmpKRcNDxayMfLnXJcxo5SkZqtT5zY9rR7ycmwM467gi6LEvP81qLX7ogwDa2ccFqg",
  "key1": "76rcmARiwV34hNAWpUCBjzymytaRQno6bgcA6PUhKX69xvo3LjdwyXdp19qmNinmnMhKeWyHcWGRSSm69Hpy8TX",
  "key2": "2p15ArUwKgsi4qXuovQGW1RQyRaf9vEjYLmMmZrzkgxqfCRPzpvjQicL18CBvCrQTJQmfinEzQda1aQhK6dbq5KE",
  "key3": "4uGzBWg6sKiZa4d3rYbTdjed3PS2o6d1wr6DhoZqAiGRALTbZbiFL6BxJGuT8xi39vfo9bHuayvV2x6RHLP1KDVw",
  "key4": "2ci13e3ioaUofGVW3uLS4BQW5NDkdTrKYB16e83avtsEfiyzEYgy1v6voybYfneKD8SsJ5FqTgxvDMk8gUVdWfZW",
  "key5": "5iEPnCgaFGLmfC7dqrAmV9stSQYAooUr44NSaSy2AocveW9YHWtrsstVksbuhcr7rojxJNG8U9GkeHhfSMLQySD2",
  "key6": "5h2hErBsL9ff7eEMuBpJZX7TNarHqK1KeJH2zmUb74wqVx5QQjZT3BWssRNVbbrucgEY4HYsvpUiwp6ibA2PsSSm",
  "key7": "2Yz9SKVFS9yWkWtj2yvVQaS9Bti6PynDRLiJnMAtrrWTFA7cyHqVruNKaDf5K5RVUuPpJoSxcZSZHBNPAD7SJXxx",
  "key8": "5FLqcxRaiy7uJvyG2TxrEXM2ExMhLBfj4h7ZkxToorJZ8xpmhbCv2dDvLEqacGEAwbLw8KqTJehzNVbCn3z8Rjo5",
  "key9": "j3qu7LxB5uor4AE2mVgmbmXd5Kt53LYnJkh3Exhmt25yhgYKMksRMjeSXQffoPXyzJacCE7XrSZ5tTWpnV7d5B6",
  "key10": "4LmnCJi2HWeQnbafijoVeqVFBSvy9U8VqJMh2VNKyk8ZFLgbhH24wstTDp71qompoSuzpQnwdibqxCcXrsA81CSc",
  "key11": "3E2Cfdi3GhXLLSuGSHxgfgQrdpQ5UqmaPiKkk7GsAcKg8rhZyJuiYqFY9eot9yuEiYhqTPGivpS4Byncid6VKWZv",
  "key12": "r51QSwjwaKynDUWjJaGq5ySrL7XeEuF6Ln16x38xjzbYFhfnqw8yi3tMhS3ayDfVAQF25621Ur8Am42JqiT8uZm",
  "key13": "3K5j96XeToGSQFyhAeLv5q1xrVmsWJtkvtvmDMnDYvoYVsWA3iZpP3yKRN1sTUCiugDtQhPCfqR5L5GF97w47Ljv",
  "key14": "35MqstrG6ZnLnjUCE9z9XJVD7nrsgY9EhqfogZMuSSqUnKxtsHDJMKJsdrjqko222V3dtXtUUAoaph4oUWCTgZfb",
  "key15": "2AnBC7VzBqcNgGDxNBqToQGk2M35kZVLNEF5QkXnviDcAYyhaTvGbicFtEpiKa82UHPEiRXnsJJfhiiFa57iu4zi",
  "key16": "35d5KXgHT6oB6mBsnABaaZ5PkkF2pgwESrUbFcTeq9a8LYoXWvFGKArjgZVB25yjCb12gPeNuKC5dhdKTrS2bNut",
  "key17": "2ojHW1mAnDUJdvW1Wm7EVQtmKDgwoA1J2uxx4YAyoG6nBxkMxBm4d7or8PRHQ8pKFW1P8PJX5kxFYcYtq6P7WxBh",
  "key18": "2tsGewGioEN8wZQERB7yHLgJU6nZHkqB5aZN5JPMNeiaDEM77Tt2BnPX3ACRaQws5KqAcbRcWSyoiHdoJnV1CrNU",
  "key19": "3nv4Xnn9d7YF14z3SgLKoqq2BAyRdhJjd5ZBRnMSWV2FoJdz6xmFtPSZicpLvtoA4AqAbGmSEhVoRDYB6pQNtyBK",
  "key20": "9ajWzfL9UibY9xM6y7zeiKK6ZmAC6udNfpMGyjHomQPTmqmdiRbHtoGWc8cUDLZdXT47bw4JEQzt3UdL3vDrKGP",
  "key21": "5H86vKZ3g76YeTYGz8us3YesY78KTSqvJXPq9EaPw3xD8tEa2nPHXdbjgaHwpTYT2TLPKoA1q4nDJe4ZPvU3kghE",
  "key22": "c75CPPSD7hC8jq7SZV4TifNkyNNGanVYWixje2idY6WCZhb1zpYA8aXVV9FecefHiqwY7JEVCMVfa3d1c25APop",
  "key23": "5dJP4fYsjodgd5ACtHW6s5i5BnbgB9KFrSJrPgQ7ZGXQu1r34M8CvfVAow7f5niwKxeaJ147wicvs8PhgyE8zUJC",
  "key24": "4TJt1W5UpT4tgddXEofZjrHGGAGwxgJSWCguvg5ks4dv99LJYv2N6u8GGu9YoFN8tu9XRYKYPL4DU1JsBYjpGgv2",
  "key25": "23pJ8YtSnLijS8QzVbSbBthwA7ZToXjyddcq4XwGNKDksHPDL3PzYynTu1TRZx2mAJw6AtQ62f9rx9LmMNqKHxvR",
  "key26": "4v5HoQjxCT8LJe8kkB5V6Uk4j5ubxWQe7T12hLBqXb4sE3CvrKTfLQwTGiC7vdXstjxM3uJFE51Gh4aT5RJxdJbm",
  "key27": "TDqcESr11V64mzYdx7KXa3owXvzxqHAX21W4Fxei1j8a7heJ6iRaAqx3ijVG4cZCA7fDi5vjDzzqZ5ACx7bjpMP",
  "key28": "5j6mhMQDJpGT5KsoFD52XNpPdN5HLuMhtHfxNGUHC729MJuTm26Kzq5JTe9qfnBRGgz1RV4qx3NhFVqUdMJeidSv",
  "key29": "3rGmgmYUueszxuRX3FnHEU1wm3RGUktW9pecX5AT379tNqy7CqAPdC3N3p2zNU4CkB7S5dHZ8UhU8FwC9nqeYupH",
  "key30": "2nkjeTDrpQcusj8D75vnzPPKymnWn2XfmfdZHbw5ESnJM88ErHFk9npNDT2QiM4185XenvWHsj84Ed3xnMVDX5MY",
  "key31": "5s22zeCvKxzCLvtFrx7XNqc2R1eZujFJbiGTtBHuaVqXEsSfP23UectNmAi6ymPuF8adkxCNnZBXJH6MhffQhsPd",
  "key32": "x9dSuhRSB5w2Ai56f2CrGr1o6FWyWaXirnhUJysxe3tnqAqSvvzi9XHjMvs2N3ts9xY9c5jsc9qtCmwodwnPVTC",
  "key33": "4v5WUic3dLz8dbHs4951CzGVQQnQiXLHgMv6TUsR43w8mBXpZ42uq4Q2RnCP8ZyjTFZwjaazpV6LgryNE6YmFgxw",
  "key34": "4gxL5Ci5omGX1jJ1cCQnMMGPpvoV48NHkrk8kCpwaYTJMd4sa5Hx8UYJQRNrGuRf2Xj4Ze1ZJ3LnsBDrwmZQVmeq",
  "key35": "rW2rfjd7Va1Buwy2cCTEdrDhFBMxkQgPKfqRUQNQWn1nSrRhxjwsaXAbt4ECtydHGpvEdzkZuPQNo8XyqcJ7H7Z",
  "key36": "5cpXbLY1bPzdDfPZurBQhdBv6yoeUTybpziVXj8dKx5EVDsAKoCw9uerPyLnKZoUuFCe1df1CNd73q8f4ba4DHM7",
  "key37": "5cHuRhedSuaudofurfXyAeFxUA2MBQwRfMs2j2Tw8xofNzbAvmiRPW3rsYLYM53BbPNngPSCey1UxKW5b63vnnsN",
  "key38": "4b5Y55HMggX3hsswGhn6GuSLswKZmbUYVWUN5CN6exoXhBrDRtRiawwX3AU19jxVMvUp86VsdM5YdPvTFQdt8i7Y",
  "key39": "3MHvhixpn89eExxU4LDRG6vLNdtGZPsX4npTAUH8GQbpWBUvTMoRiS8wQD749c9RA5Ts7t4rDupuheeSbDSqC4WP",
  "key40": "4oUWyJ4frMRm9MfPz7qLbRPnZ44re7ZZg6Q8B4havowmmxAwudLNstwfbATHkLQuwhdtcKJkTncb2tCbdppw7CzQ",
  "key41": "4y9KTwpBT3MJL33EoWXmMy91ffvSuBtpWuDanw3QeBDvxb1YxPM7Myryo4trKf2dW4Fh6dMuFtE5LgVTKB2MdrDu",
  "key42": "J9KdRC3AcF4FZBpf7GNbxe8L6WLY64GkfhSfzdbzq9j67nA1oR5rZMxNCMqgwJDRXsKoCSNsBucR8t83UvWXA35"
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
