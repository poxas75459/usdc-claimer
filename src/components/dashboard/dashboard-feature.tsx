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
    "2BRBPU8B7BUrTfnCrNV6cYEUgpsPW8jfQtuPenCgPev86uBYX1q2mk9o6bnbFKr2pnSPZ8Z9wQ3Y29h9dq886228"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G499Gs9RSf4zLQauvce4wmFNaUBfW745heKRRwr9N32NaGtDA1apzAQuKC68WduW1nyKo6jK36nnEQGUNwfZh3j",
  "key1": "2pA1bm11LNu2roMBRH27TRZBwSCqgVuoewvX38DKb6mNtVypCD2k6ubQ21jRVp1JVMBqmL9ZKwxRfQgbTdxFQuEQ",
  "key2": "2dm4HAyAuv5ajUYU14UdvU8ZuDNB75aiBK1HkAd81uBvombWcJeQAfDpptpHADP8PkCdWu6vhhmJbgPqgbte6mbo",
  "key3": "rRpYrwD1y2Vt3y6W4gM8FSdgXJu9tZE7MdMobmUEXgucErU7HtDg8axPgvi4hNYSoVc9WVFFmvWEAXEvVP46eGp",
  "key4": "2S4VpTLRq3Q9vNwvhn9Y7ku9Dxf68FxrVGPS9FpQWnTkeMJ6hUupUncUwGPXTv4xuxvn9FDWUQoGgirWohFnN9zc",
  "key5": "2FmfJaZAGwhSGyiHkMAEDDuWJ3t6sBworH6rcCTizjiCCRgavjfTiuU5dLt6sHtzYDm1Bq7PNqBGcoapyoGoPJG8",
  "key6": "4b9JwFTuKhLMZcPx5gMuiRBsx9ndSwtgNmCEjofGEdKV3vo9HfDNMjuUYM3Xg4ZEBiUSx85hhduyPruraYxhue8b",
  "key7": "3sedhVbvxe4q3gDYMPK57VdGYk3bAptossPfwb49S358tjcG5iVAu6u61rbs8SnYaN7EyFBTkXcBmVbx1yjQbrDT",
  "key8": "4wR5w6Za9FnWFioPeRpnFfSSYXawQPYybW2H6giVdLvZ1UgUcj7ag36Y6KoPjHsx6fkmwrhsBYgbCotoG9nspoer",
  "key9": "4u92fA8jGimsD7cPX1nnN8aWyaEvNzGkHpEUEV7x9ViBDfUWgdV3Ns1v9ftsVgQgANRbPGq9evnuxk1kSMYJdXic",
  "key10": "4esdiFzpPcQJ5qp6HsPyFCKU5P3AEiV1DASpLy8qPbvi4FLy7ZCyy3tqQnmWtpUn2voahLt6Rks1yYERiQQrWCnS",
  "key11": "34DyPBCYjtNg8b6Spy3ztVBSCYJed2nXmhXyoZYz6S4gmpAoX6tFq9grm1jAFJD1XJoy1ps8rM14v9nHuzddWW3a",
  "key12": "3qXXu1fqkVJsHBVC5qPjE1y6QZ6ajh1uZVJh4V5RfP6LBEpxMJqB7p92xPniJxNruihA36KY41jnsDSDeGhBM2B1",
  "key13": "4BhnFxWVvAkvsrSPPnsYY8TwwVYXtgAbpF8NdWGhkUPU43qosqoHCr3jsF44LpRNjsBnhJQVdiWJ88ZzXKjiys11",
  "key14": "5w5hEijbeVYGZqBn1oWZAvzGkVa3ukej5QX38ZWj1vmZtLNs1pT3bhxzMJPquVJ8Nj8VA1n5zmuFahVRt7GRZA7s",
  "key15": "5iTceUm7WMGLV6Sn2nas9MWBFSftNxFukUG4AfqBXXguB19BiAtTe1qQtHFmXUKhcTiKUP9ExFC8ZQ1rAXxShKZ8",
  "key16": "5CncXdwhpSdDba4j3kWUS97vpBk59Lf5KsbRqCvZQeuUXk6GATUoLTrRSgpkhWxPJ9j3pXdo16shbXsSVGzMK4Ef",
  "key17": "66AdnYG3qbtb5UjzKTWX292kbnaUkXScZ8jvyu86SGuNoG8erZt57Cnr3XMuTpEXcRFmGhxntydLjU1wfBp5van7",
  "key18": "5X1xxWfAChRQCCRUaxU48WXXiQjewynX833JiD3MRd5x8scFiRZ4rqPjm1qi5ocT34whktmW1tHbw6J2at3u5TSE",
  "key19": "3LiZtFzQVCzL1D4VTAqRoZqBeoTUQqdHwT9bKZmvsJPnos8ms9mW9ZnTzhR33fyVM9cPLnJhyLZmiwhGPWTdYK46",
  "key20": "4Zbg9tNwyA7mM9mys3ug41tFKeoYyC7qLJi9qxh6esMXUSw9iy17YnwbRfBd4D4rYUTAhkLBzMpU916SkcY2BLgk",
  "key21": "35PPBHRMdLhPYUECrKTfCHhpRGwyLAJt66YBpVBXeLEBuj4i9fX8gP3a9tH5VHCkavwhacdUyoL311ZxnyV7i773",
  "key22": "5nwxskUS4wmfAwet1eEUVebJgKmUPKAm1dgEW6uBu44XCynTE5DeRYj9PxU7JjkVYpBmM8Dxq7ZZS8wCxbLqmvAh",
  "key23": "5hMEKMVVSSMX3Vz1kGEx4aXfCb2ih7P6WoK3FUXaeiT9xKxWPwW527CEuH1bhZFZWUXxz7HYARVq3uVsCiRf7jMo",
  "key24": "3Sr7RKwPGo7sBxfzjA4V9U1HZZhEbiPY3YonTfkBA8h2SCGa9noiQ56DVW1rZ33fhtTx2pTZC9w4kdZv6MSbpcbS",
  "key25": "2QTL4GvaorMPfXaRLAsPQW3KJuNzz8ZGuucojDW2sbP4nWxRp1c3LqyTcEu1mGuprar6LdfRPXxExeK9vvX7brH3",
  "key26": "3WjEohQiLD3ZDS8epmqdB9NuwUCJsWKPXpX7i8sDkAPpVRtyptoDiYfwYzdZYujdGXqxMrtGAXhhVCjrG5k2pvHS",
  "key27": "2UtrPRpEpuaR1PSh5AKfKWJ2B2pW9iFyd9KzurCrvhc746MQ3YuMgJ6c3dFW5VNLhGDpPK4y9zzz6awTaGW3jYHw",
  "key28": "5ZGn4HRZawyzNnLX5a2jNo1RaKBWbadFxYrfj6LuwzmVVZCzmSrvdXGzZhqC8YR9Vktwbt5bynk7y8nfpwAoJuXz",
  "key29": "5BMNA11BGYkK6TuPksWA6gF36K9wCKqM3AvyLeFRGxfAWyvJHH3wyFi3JaapABPia3BfggWz3gbgWupH4CphuWqw",
  "key30": "5D6V3eZVtmLqDkGhq4qt5PzJ9vx739nGnuGuZvAgJSozdr545YuCW1DqVveswHceUbivS6X62wFmTC6bxeHqsesJ",
  "key31": "2VJbqX7DfwZDPW6jEvGymfQKhCgy3526J4xdRpSHB1CASr4nJ8251qaDsNkQMuk5PzRDwVa7tqvvUvY6M2JkwRvx",
  "key32": "3KuYRWTNrmDYR3xQQJHav8gdwx7CeXtj7EKcBw7UrfyLmURn2nPezA2mW7PzGhDRXZGYpgCoRQLEdg9kgGGqGZKK",
  "key33": "5H2mDd5Uf8DGbsU8tHCRKRUnJFqxXM8eAZvK8wvUgpZXJDGADukuXaokU4hEQBwPbp15UVqQA6j7Mk1uiaBL27V5",
  "key34": "ipgWebkgC9tUAS2kmazrB1hHgA9peXezZBJ5Zkgif6GGgk1ZucSADE32is6wZByjTN3cw7HiKd9XZyY3ubr3YFT",
  "key35": "3hvCte6EpBHmHiY45EcybVsfE8dzr7ycxfFwAGwaGS1FKH45itrVrPHjbdKKS9ASYfXfmvrkJH1CowJtcmGvWh9e",
  "key36": "5FBuRFFx3m1ciox56FUJZrRyQBvgmDJK7rBjbQaUS2GRUeg7XukeDDZqrvC1abmL32tphyMD8JshjB8UxS9Dk2Cp",
  "key37": "2cY3U163s9eJd386dAtCTL3q9fp8YaDPbrWAQYWiGrHQsiKyiRVTLhEwNiNUm9Edm1u2pN6xDqm5C7C8oQDjTeV9",
  "key38": "2A5gPTyKbyc1qKbWqYn1PLrKGtdynozkhc8jbDf3BnrdgcQ6wyXLaw8m2Nq4rabtDaSTNoSYsGrNyhFdbrNJmv2g",
  "key39": "oM4tC8shvZ8VYiTrbXH9Y4ewYUMpyTt7AdaQVpP2wb5rcVjzMC2CS5wjcFo169QC7EA6pxgYG4kVshkTZuUsv2h",
  "key40": "3nSzKQgyFnKLWYvLhuyJY3U7u2Eo8t2VMXnybzXbyi5NjpnZ2bEdgg67L4FbYY3J1Xkc95P8CkUBTjrayJvG7xgU",
  "key41": "42wKtTmzKAXD5sjQMSap9UyfzpkWQPmUY3wDVHrqQF6YexsCkY894iaNwzFGie9Msj9UYKbgiZbS9nKcYW1YrVcr",
  "key42": "g39pBtbWiKwciG2ZhyHXEpY7SNXEvLWwFvJQtd7nbu1nQqrsKYV9rkkWBJVAbB1wiYp6zgyNXN443JcSD6df2bs",
  "key43": "3umWredamxVZqX1cjhu8LDqGKHK5MKUCC3BFVgtg5gaHnojTA85tyh7MgAUp3TWWexDTuWzGcGaLvoVx96A8zY6u",
  "key44": "4kNyf5wWQp8w1UQBpAeMMd6EUupijZripvfuDS2yER4c648WpYPb7XcQ5NJKVmcEDdmrzE1ohE12DJdmoW5J3fJ3",
  "key45": "5HfCgkvbg49bgHPoH6CpN1fbfpTCjAzXcRPM7Kx9YZsnV42QvXrA3TFQYxVJb3UDvTMiukLLvAoARutAFWGsKw9y",
  "key46": "2XRPvsiBHVKxbzpdvLLGkinjHRCnqg4aevRwr9rzr9eYWTKFfRJa3CRjM3FrhCZ5ApWY1BPQd5k4SgP9d7y5stES",
  "key47": "4FcRZxCRNkSmD8NdfNfZQRt7VjbfZ6QNsuqYksB8KwagmpJDtqELgT1tteFRJmTRyJNCUuj1YyZEDwPBphB4WugT",
  "key48": "5Ch83VEgPigMf4izDrx7Mvg3ERoxXSqHvboDB7e111wYbDsKfxSDDTLuDRxaD4TpUEnr3Y4bTxpKU5uWrdjtEbS8"
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
