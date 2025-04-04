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
    "5FL19zfg9wjXrsm1BLtKvZRfKhfPHmJi34Vqzsn2RKcpmRtFox3YCWQ6oBQRVQG8cxcL9Hb2HAhXdvHZHG7jh7Kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X1B1QCA95VWbrgomzMQao4nwxnLDFjoWYQxCNmR9TaY1MhpVJmw8gyk54EgY58xocqDyfrwXamugUjjYyUdxh9V",
  "key1": "2CDuwFgb6Cc2upyyUYZ6GVMU1SBSLriyE9ZohCNdj9eMzwkQM3VUamw8aRVCydKdo1AajxbWpKz73aMhDZr8dN2S",
  "key2": "2bhDu8MFiN4cKFjTufc7Exff3wrmYoMAfgxzFQ1LcjgygbYT1wUDLdv2mETojLVtjsJrKuGCXCW49gnMHeQsHeQr",
  "key3": "5BdDKYVsXiNKD1rKiiMGT3sLaiNDJ2fnqSNqGATjukzqSm5itwWrp4wz2s9rhbKKxB51JrhqoF8qRvuQveWUf8ea",
  "key4": "5R9G7wBhGBPcFWrZnvrvNK9XZ4wnmPgJ6h4zbh1i8RHA1YpLkdu9d2Ut6jMSSoa7FoXP97hrZN344jpF9mdphtAd",
  "key5": "VpvotMBYrrRDit9Pafmu8Jngd7hbz5jSV9DSQ7DLxuXYSeePVouPtSnwkkEF6mWwhwerzSd8wxC6mer8FFssNu2",
  "key6": "25TZQazdK7JTyJ4es2Kq6K82ciMQQEgwgC7B6egxqUww983TteHaxuErHBQw9VYfgSWVhTaH6Te7QfnQZq16zuoi",
  "key7": "4hY5Fk9u5vCDiEFjE5LTaeAvD8oBsxxbKZxXMsCpnw2azxruPH8xrQafP8yeZoLN9ok6T8VaQd4Ezj6DQCfFBk3M",
  "key8": "5bpN5VjKYcmw3sCwwh7zSn3oyaWpmdmB95J9FvWMfCPQJEiQXGazYWKYyyzi1DzoKFEdsPcPFGEYgdU4eCYYs5fb",
  "key9": "3VXSDfhqT9qZd4Lj4fJYtuKuAENm8CxHKef5JtBivbQpi53qaWpTNcmDgknDp18YMGtBWKFDDEXTkSyHG8erk9n4",
  "key10": "JzdtwFojprVb1Mg5nTxWxujHMhaRvqqEbhqVA34Y75GKNwAgm5giFaThakb4uno3UESEAdWbHYGQ9NczgRqZG5G",
  "key11": "3GCfBABCMNz7y5pWBznkm8pFx2bK2QN1AafKDcqK3EoNMPbXpN7KKTFnPRKzBhWB2VvGh5M9hK7K5aS1pGmgEj6G",
  "key12": "MR2qUoy7jbHwX2Ds96gnVZs6ioFHTgU2SoWUWZ8LNoMAN7wJvN7JVwBUjxx298odtxaSxt7TWbKMS1kZSyMhig5",
  "key13": "2z3SwrEbd8o1LoqPM2sEAuXnMe8wp1jbHAN4gyE9JsfEJpPGj8etQam6Ye5Tv1BTP5t5kJ96TekGLYvR7yt3thS5",
  "key14": "ifdftNfVNNKEp6yMt5x3NC16FQmxwM7KHGH9VszmHcBrEQeqa2KjKUpdgSKkXSrQxjy4vAnFmxEJrYqPLopD96C",
  "key15": "3jDDsW7Uo9TJa2FUAns7ExKoD9srj5jdoK4QR3JEMKxbQQKUDA5s4aUu942jCYvRtNfRNhtQHjGdqEK4LjRiaMXz",
  "key16": "65tN4MTuhLPXGWzLPNGHQQhac2KuHXDFpdFLeMHJuLbM9wh6nUAi8Gj2qEgQieBXsZ4UsBoEccsFpdkbywgn3nH6",
  "key17": "52T6zzBvBLZKwABPN7AbcfZrWGeSkbLVsSQNyiWQHH1f4DQLh3KpCEAvzaAtgyK1DSciuJ4ao43BA2PS9WKgvDzs",
  "key18": "3K2EBzWyQuvHHNjBdNrTcBF7L2TezzSLTL44X3mqRDmcCLNUDF3QJmLebMnLfN1ChSFcKrPz6tHmn4Zp2Qv1eeiJ",
  "key19": "5C3MVGj7MdBXXFHNneBpYbR1w126FZzQ7jo6AJj6n5TpHxNqYSe8hUkJW4uxce1eihYoADwS7z2Xs1Dp4WtKRR4t",
  "key20": "4vtPcZUNSis1CYVYhePh3DPxG7kxA3jYeSUWxnhqk7a8HShPZ7gAeqybtTNghPyYTLMQs9KeJ7yvqDufvkjbGBjk",
  "key21": "38f2T2oEPcvkbuDZSLh3HLipWVF3YsripuNZjnZJveNwuGmXVpBmDyejYcmJP2tf3JnR8YZMjKvcoEdn14i9Nn85",
  "key22": "3UtW8Wip8xaK2qvihkRntpYvrNqaRoFpX4BqvV2R3K7ZoUTL8RRsD1uvU3SiuBMS1DstpaKiWorvcREEsTghXkVV",
  "key23": "rFxdvwVemwq5dQ3NXwsMHkKFNeaXGQZ9vXiqTZrARrcF1bg7p56iBkZSyZNpxif6fnZva77oUX67haadH9NCACV",
  "key24": "3HZZQkY6J7RWe8eUXmeDb3wnE6XenMvuBrRHoMbPvfWK8L4rbAtzfexXujjHy9UHiY3jKPFKrzG9b8TmNYjjPqVn",
  "key25": "4xH5uk7XocUWrE2dwE3MUVSwhedwtyUr6Bh9qkb4K1E8WzKTqx7ggkCzyfAyJy3bipGVHgcBH6SSyKpW5fNGrWs8",
  "key26": "5CqXw5mKG8xXCAuWrCejcCgGUtjN79nXd933DChfjv2RmDbVjKqXDDmQT1f9wjedU5zhDr7trheofCj7aa25d9nj",
  "key27": "4EucMpuAq8YhXZtMdN7gC1xCfniudouvhcwjeSPWcMBgyuj8RwGWunqKh5v3QJwNW4a8QRMEG78FG8tiYUnifUSN",
  "key28": "5vVqTpFUr7D1F3pjePrTQpKvnidP1eq76o5gHQTTuzPLybfujN2cG4ckAbrLN7wGzXKXfNiAVRtWdf6uAyHgb9JF",
  "key29": "4srUFRH38yiaSQ98Mh96VwWwAnGnpoTcYxnkxAFbazVSBcfiMJp88k1UGntYD8z7mz7hUh9QWJFgeeZGNdeyAUkQ",
  "key30": "5eFakgD7uK6LTdSsMKy4FM6Puh2AMsLd8R1bACoCAZPiPPSqGy8feLJH2YhjQ81XX7p93VBFqmLchP6yfZAeazWw",
  "key31": "8TS3P8fVKxu2k7r3XLTDtGp1tUiEeeLjWQh7vHYbsAamyNuy6pe3zUR57Rz3qFVTNhKBTDQEFHMDNy7boKztFcy",
  "key32": "6EkDi4LGgaPfnbvJ6BTzhz6TPoHJr5WUL84c9CRtsrkE8V48J6qNRmWmdYPf1E9Qc6hWyDuYfMuoSKigPuo4pvQ",
  "key33": "3wrfsdv7TMfvssoVrQ9cwp8bvCkTqPGKZ6cyopqYEUr2XaEgZJotsP3aSCvud79Rydv9BcofPgSRYftGvFTfN1Cd",
  "key34": "coxMdGsdRPJjRBtbTFLkugpH7Tq5rEHMuzEWKuHoNmfeoSwd5ExybrZbLSPvNU7mm9TMaJfUtc8AkPSWXgJ5cvA",
  "key35": "s4i4isy4yKLujZEVHq4mpF2UuzbWUJMDSKo5mAB7pqDVhEULxTsHxtUUx3eC4ATSwZdW4pyYpqqAeQZsGqsCSKN",
  "key36": "4z4dozN3sPtmwUMALdeMYK1cmSBWAeAWwFYXezZME98uL1EfHr9rPpxshUXbsMC8sVGAJqKXP46x5ZavVctbCaDv",
  "key37": "463eFcm1XSZCzXi5qLt3FJi3GjbKfeugRJVscLNXCtoVgySmczQ8BnBGKpT1T2qKHGKLrS1kQnTg6MhoqRAacJN4"
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
