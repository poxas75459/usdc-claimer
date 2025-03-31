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
    "63wUjJNzHLbuGftHRgkTzdoCksV5atoecWVptGY2Df4HCn3CodpedgfZooCMDKYwVwustgLhqGwR9AjGUVTdD3Cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GYVcPPvxx4yEPCsE1nsTEGAuCLxTd4zMjYpc7YUfUcmR8zp7rkwzWSQPxoU1ehECA7U5r9tPZSdjUDqA8p947nF",
  "key1": "3exETauRcuF3ivC12BSsseDRY8aH6YXrQFzwCWAk42gy4cLdChSBBqcXXu77A5vjQjDRZ9SgbWahYnoFLsqkcnUB",
  "key2": "3mSJEtV9H9Fxd5AMmMyFJXa1LnWv5agLgNXi2ntqrSfpqMH368jXzdypgdEijDE47XU1DbdEg1EBkNZCBNZ5wPoj",
  "key3": "67UKWZPLt1CuNBi26yXd2NneudHQ6sdgkoHJZN9FsBU35JaiJjg2rLjDWhSF2PD5AvM2ouNFRNFDzJxCqrjoFQBK",
  "key4": "26HnBWe5w15Loqk8bySwdJictq1V8jSKpapmuXttc7gu7nPyd6z3vAdLXkEvcbABzVNgUBcr7cBkviFqGXdEVDVH",
  "key5": "53qzfBWhtWaFSmY69QT86aYRL6PNkm4j416crfmb2Lyym9Q7cxV55VJmRiKo6om4zTsPXhczeA1RBFjpYVjJxuka",
  "key6": "3atVjGzJAXjNenUuXYmY7qcisDydy88ZtBAmGLYsu6svygW6k7Wkkr9mQYUBpDf1ctxPscHZY6WdpXfA7wMrFXEd",
  "key7": "65Xg6VDCW9Lsech62hbbrzgDw7eJfbcS6LoRcJopCVkGYDdb8CmwBKP4M2EWjRNfv5zpBhggcxjNyAyxCvXp92e4",
  "key8": "5iVDVLTMeB8HJFVNpEGTVDTUFvs1CNxuSszyF3YcSvodeUmLzrfQ91BQ4K5UsaFw8Bqro9LRuzK1qz857xj2gCes",
  "key9": "2v4KWrc2Mu2esLAE1ELWc1Hv673Ywup7wynZu4q8GrctJ7sPgZjuUB5hVNmicYtg7az898PCjrdSamv7MV77zdrT",
  "key10": "2hrG1bsgu2rgjWk4xtEH1EoWbvtZoBwmvPGzP3ZeE1ZX661i5g5xnDdj4JQEXD6pSG9YNG9cXxzFwey1VqhKSeBV",
  "key11": "2ByM2QPGYzJriXW4oGi2rkoF5fMk6vejzNpuoGQjuWmzd43cHfHQSJKDp9hX19T2pYWNX17NNBwYrm1tM3cRy5ZN",
  "key12": "5EB3AjZYemiauexgeAPEGQSdsJhHLJKLZA3JiapYhJ6aKtpY4YF9VZWkxk1J3GrjDNkHwx5QKCTQXAdfUUqjZYjm",
  "key13": "2EC4cky1FnCArS5c6jxhKJR315hXJT8CvZhUUydABMtpLMGZ4YBnRjxP8hWHnf8hi2VdQ7HC2JjChK76R3NaUTfE",
  "key14": "L3nLmkNRCxM5tGjK7pQ1UbpD1mjEmCCNEAMgregibVFESiSuw4bJbW5PqUXn8gUkAh9tC9k4K2T5PwNPQ2yATAR",
  "key15": "33haPsYuvWZJngKHUaMJBAY867H918uLqBFmFCChKzC7oTaBCLkfV1koDexfiQLVKMsyqRkZLtsBp3PkYoXwukLn",
  "key16": "2jnvAnv6dEE6QYw7x2bYHhjduxNRTqq4sVtQ1rmWw1vhUMBySsqaaWeh7NmzADDdJAapXA1iCXzJY5w4SUw64VkH",
  "key17": "2tZFrg4QgJWwM5JPB6LsgEiEyuKca1TdThSzhUgqNUMDpGqLgLqwsT1euMfwczHk229jdosSS8xSP64Z2TCnHA3c",
  "key18": "4XhU51Xk2bwqPDWjcq4g3jCBYSq5Dssx7QuwApbkhKv3UbdbrS7sxqMc9UhHKqvKybjgyYxsDJDWSxz7qz9CjtkW",
  "key19": "KVRcqJQqss3M9644cLZHXrWGPUTL6RDiaUkV9vL8dfyK4dajjgurXdThRqaJfVSCwoHpRd6KJ6LkuNYcUdSoriw",
  "key20": "UDgySSo8tsc6YCHyQo8Mg41xEy9BTGn1tkZBPmbeE7ZYyKGpheCGfa1hvNZTx5TosMzsVnxqFFSAXVqTS3ynFBr",
  "key21": "5rVG23wnW7jithLnzMR8RFk9UsUXZDpx4Hx9aHmk9sSKoV2iESrRHictLgtPA1docYSJ1VRCDhcwbTfHf8CvWpae",
  "key22": "2Np7BNuRbfVzNACWdn5drPNRb3MccYZgLLRK8oo9sdECeFajoiGxPZcUCDCw1iQCHbj189N4mk41PqP6z51KPsh4",
  "key23": "BnY6UZNWW4jeQUyEMUfbBMR3uy6NGxnyv2bxPe42fHSsqkjgVw9QPpntgKajt9ocraTDApvs48dw4offB2tHCW3",
  "key24": "4SjrUbVhHGTE6g3LZ3ibYyD2AFWXDTARGnoix7CWYgTgGwyJPYHM4ybHJg4HedLMePh7jqa2TsF9sWTFDisxaYY9",
  "key25": "5tq1sTQrmE8WkrowQ45qTesrFyCiP53irHLRMX6VEsHoyMgbQaSMYzsQQMa4tXAMVpc3s4kTdfwTRBXXyjEnBEgz",
  "key26": "2MzAp5dpPKoCFyDbqpiiC9Avu5ZExjXnFRa5zqrKMsVcFGJMj9h3zBD2be8N9kdKHSVbxB2BUxCVTYP5jtJkgTAH",
  "key27": "wLL29o9jwD63NsACE9jW8iAKXbG1HBHLUz44DfF6WPQho8FEwY3AwTwqLEGoFArAFJMZhqwUWFgE3dnMGPFcBNY",
  "key28": "2mqKAZvYH2EDdV8xp84R5fUDcd5aqJ7aEKk2EzHVrhZM5huP1jnpmNgB7ndEMvL2CeC3b9vKBHRjcJoBwT7VEbk6",
  "key29": "3MWxWAguufZUDpraTHueA2Ai5K7zhJzrLWX5DbX3JPJHy8ncSqGw1eXXzGncsG6BqmUtBb7PF8WiXYpBsWX14T34",
  "key30": "f63SFvYNLejAeqzBFV1AUEwCQhW3HgLzzh9ZWQdLNodbW4YzouzNBneYZyiYggofdqUJKhBUhqFzSNGSMwEX1Rq",
  "key31": "4ApBaViXGMLi9ZPCrii4zG9KNUwndrCfCrW5jMpBcyvRZojfmmt9FVZBsp3v8E9GEpD8VLjnW1Six8gMHzdba1gz",
  "key32": "WjnVjYZqgcv1yy1mNpJduZ3BQ7v5yfHrdYWQUhXnQjkSwELwBJbQdwkBhT6ii4aAMwJKhH3qdfAkitMqX6Wbeix",
  "key33": "5KfMjxCRbuX8pLqy9C6QioxiQVZ2CWS3vKdi3yNN8UkZaGKeLVBadojDmj1FQX43wx7CTVzHJ1zDx8U9t1ANhbF1",
  "key34": "37Y6xcBdyfZXxgMHMNdBB2jshcgnsEQUKiopj6purJd65aFbij17RESgthTJDtyZn3qYTLBmxAvoo5WTTZ1T3G7k",
  "key35": "31Sx4LgknMaESxGX4XvjXr3LrXsaqhpj6PdLJJ9D6PMc6zP4WUMFwjbiFCYDZib443CHomiZsGYYj3Et9j3Eyimp",
  "key36": "4J19mqsGzaGjk6qg2waBR1cr768B2R4iD9brgef8YrFyE8cBr6T3PCwAinteddEbG2gxJA3U2TNz5L7ECiL7YTKB",
  "key37": "4MoYFzYm5hNVr6tzBVnQ7t2Hb7GNdtwMfPgMc2NwWUTcn1HBg899uEUE3LzeUrC1m5JhXyQr3xSvoxtoqDCmLWKW",
  "key38": "2kt8mcbMLuaYK7KzuKtR28uP49w7oyP51DTdwDrYDppM8sqX5Ae99MA7Uf6rLnb1ehmbfRrKjHY1bnVxqX18G9SX",
  "key39": "h3JGvAz3cHHVoayfARVBSsC4YnQ1Vc6AU5fbUMJjZi8mCHeBuqZtdM3JowaSuCVb5TbmWowtMryYBdVigkSv5hC",
  "key40": "2s4GoNwU7SuhTA2f78NUaKruMxdLmSxEipnp6UdFAjDjMTSqpsJjB6tgaz7RvAjsQbAnCpLgxhWCdUPo7ZNtDjVM",
  "key41": "33p78QCFgHS5opprXvNQGCDGF92eRKHZWPS4d9Xd6kqs7mzFqXKaYJzp8PWc1GyziZHiArUquAVoGgHdQShvd7XH"
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
