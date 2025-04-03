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
    "3w2TWrCbBsYQ49HvZyjW5HaudYXpZ4RXo2qRksaunnXt6ZzNmz1a3gLdecXayv86RNBtZRT4ZS6LWKH6Mzi5dSDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dmYA3sLMipqwZtjiFwzEXNyQHAB2HajrZJtb87o41r4rtZbogtrnNTUPPnZDBFJiQcjy9fesfuD2sMf33KtUQKQ",
  "key1": "59oFmWeyx247tNxERYNdkMK4Nfj4sqmBjN156Fa6SrdUhZQYUkSLFLTy1MNmD2J9PBLenqWkNETowso1u2kJ1x6",
  "key2": "3wUigNoUf5PWYVXEf6SdWoxQnc128W7jw418EV7wsUdFk43i7HW577vtqvLJhyiKvrPQ7pE6ZkVAhSs2uknWBGyw",
  "key3": "2ZapyQp7zt41YZ6MiBofvBvzsLVRE3MRJc2AgHWbMvgE97daEdBzBhsvVsTEUn8E9BW5fkF3GpCMdHbzRPRYoGVZ",
  "key4": "3hWLSjdAofcRJgmhktFgPunCiBWBn65JweDLFTKczBpnPkUbThEyLfQZLLWH6jocouLUqynuKCidn6o5sQ9DmKUm",
  "key5": "LmAC14uuv7zp5sW61adLjEyDhFnin1fSWbhRYiQdshpkK3HjQXZo4qx1rrzhKvmT4dUKukcAm7A7CjXPCPQd7qj",
  "key6": "uSsnBHD2km7cJYizfjusE1dmsS39fATnqosbcxJdBE1RKqiksPJzVXrCm3jBJgmHqu3mNSWvfqjCHWMgXRW6Y52",
  "key7": "dWz5R2nHSvDi37TyMCS5JiPsuWb7HvBgaNnV1L3SWSegwwzLxmPmo8grEnPi8gvpFdrqFPk9Qgmtg7bsKvDEiK9",
  "key8": "3tktNVvS5HsRsCCsvgjq45vLLzrCXVeDgmfZQ9NMKQLQTGB5tMCWy1We6TBfF69hyrfQHnHoyXj6KL77jfQfKzWX",
  "key9": "2CRn9hcSa4MWfSGJnQGs9KkThsimfLSUnsrxSdWuD6ez7cUnkxNH2EnjsWUuCztJGBgz8hkq8taAKTXrc617LC2h",
  "key10": "3S3Zwe3yXuT3qqsvMvKFGsmFqRKLEsAqzhocugVDMQ6XprFkKQ4DnstMJdnmUVUwJafwcdNkqB7NDWDnPb8Etwsn",
  "key11": "3ZGGPXpazkkQ6UQBtNdktgMiT1Mm1SWTaRRECrZUqpJLWAqs9vokXgsAeA8vJVsxL8NUio8QLdjPLcbKe5VURu9z",
  "key12": "wA5TNUJoMvJxKjM8LZ1RpENVxUZ3Zj6RzQ8T8ogtu78bo7WsPrAkwejc5fsZswMWeMh6gmGJ3RiTLpmDppFTtoe",
  "key13": "3ddYAsWzgi9eV7MNfrs5iC4BGoKfG3X3h34HJVFtNwjHsLXEzEArmVLw6vCtqfAZBtmxEhgNg25qhxHAayA8DxnW",
  "key14": "2ggqPriLwh57wP8iBvuGV6K7qTqTjwTxFN1zqM5xTjD6vxAdxqtrwWEMkTcbHgLrTxBeYtpYB4WgJemJUuK2E8Dw",
  "key15": "1xYUt8XGpi5pPr1s9MyWBsYCapbArJKMf3oPykHV7kAD7TiDC873rrc4EHqsDJByJd8Bkf7vEPKezeo44TQnnB2",
  "key16": "3fbSEQE3VB6qBPuG9fH7Vzcmc3iQfd9JfDkmmMWHoQKscE5iEozdeaz8Pj5JoX1LjrHWhsGMYEXpVqTcYkYvA9ew",
  "key17": "4jsMK58DDjToz5YYwvNd5JycaJGbcuEmeGS68Br8RGkxc7ZhzcTYWH3nzPjYJTbTdyeobP3nwQqSbpAsAVhxh2HB",
  "key18": "538K7qTbYtLcRsxSkJ7YVmuKW8fD1ewLkzgbJB7Q2bWkDM9sbDi8pmDU8npjjZ83ZhFSbEvLT3ccvtXnx6HZGWn2",
  "key19": "2R9vBNypF8G6S6XfUvAnoomZn66Mn9TLLAYVosJceqTEKbb4iiG5wfYN3QiuURU4sWX4PnPSaYXEn85WiA6VspRT",
  "key20": "3N6s7fsL3dmue6e93jgVJfnaTj7pYhHYgh56DnqHLoQcv5CFwgZBWmgDxbzw4Yy3iUk5Qmva1tjKEX3B2bjZe4T2",
  "key21": "4xMGao8ri2drLmPy6xq9RfUJ15srutVfpb2DAf7xN6gzuYrNarKwE7PcCFZW6irzkRPZoKXW8MDDLdHuhwxorMzw",
  "key22": "375BmYp8kjk5WvyHCXLQTPfLAcw2cWMfA8vE5uyfDp8EorL6R8XFhPcKwCPpRi3TCQRzgDfn8bn5vEuuH4Ln8CkT",
  "key23": "kQ61YKsNYE6pD9oeW4W1KC8D1igQB1xBRuWSMwFHEbupysD36MqxAzJNk4hRbEUhANwSHwdbgCThiTtgnUFaf33",
  "key24": "q6dvxYujVp6WN1sqy9jUgfAEVmXxszftkRfoS2xYL6xgz4dUYp9nFutinUuTGFbhmCcmhADAjQM8y8zJzzZKTFm",
  "key25": "5QLYf2cqjRheVdskmV6LZDaVvcTvUya88eUijgxfAG4SXdaG93K9i7uUK4ckoqB5hT4jDEkyCW7wfsvTrb5vcujH",
  "key26": "hTdWMLrmPcCu46oVZdNCL1TUepWgGGRVZAyCTVrBGwLJC4tEYaeak6EqBacFHYVvzd9x88fFpUBWBbYddwzM7ei",
  "key27": "2Tj6HYKJJ3HFXRNcbCcpCm48LqpDdddYJHNigfoQNT893yhtFG2sk1CTB1DSGjSJFLFVCX1CgU55erdd8R8tMN3m",
  "key28": "2zNW1ev54u2xzrxA9DRF3Bqk1AjdexAGAHtcS3SbTFb55W1jfr7nN3YyH7MR4Cm5vD3PZGYUb83XG5ZbT42TewjD",
  "key29": "5LHJYekAjcEbDsYnq4y83UcJXmMX8R8JAoQcE6Du3x9CY5CgNQHyq4Xqeufe97QQBS6kqtUEmmvFkvQmtKcHXeeG",
  "key30": "3ofTcCERXLQTWWaJuUw43sKe4VPyPUbvKYhMK7uS5Mnb79GjmmE8qkLsP2vmmenBLvXQ76pffj1CgJxtaVBzb8HZ",
  "key31": "hzufrpYi8vbDvmepEzTyR55JVc22v3Zw168VCVKKHCFKubqdtpbu19K62dT4d16CRY3dmysySQwrdB1Bd9yYYPo",
  "key32": "7eKG3iL47yk8bBdR9JUH1uY5oJDFg2c1gumkPnFCgwJfoP5YN2VDWQcGSwebRtnbL4ATBKfprBboKR2QcTig9VE",
  "key33": "41nAmFsmR23Dx7EtSD1GhR2Xb7yhHtrqCaW2zGPJ1K36eyLf69Ger1KnDtukL8ad494MB356xFaDsVUKQY4oasJE",
  "key34": "v9XxZG6XiTLi2yuE5ikPCUBRmrSbzZdfK9rDUgcetCao9waJZn91HJAtmeQfwq7NPg2xcRVUifXMWhd7LRhx28E",
  "key35": "3F7n5ACF6cfCrypXASm2msxWsGabJZtkZG6uuKZbjmBz8aopL4johhuSDwmUtCdLEHYYDwJEBBCAFKVdb1i3JbhB",
  "key36": "5kAt52Y3CkPPXhhCFDmfVTau1LkqC8zNPQwenVxGkuzzscHN59CKyBeJJ6v1Q1RsAwf8t6VFrWSmKHNjoPkHuzXe",
  "key37": "G6WPCEwGJY6pq8r8dzSDER8TqRkheC18zzLmme7zhM12Z9MBGnTAvW5hXsGmzBLDkjz1n3z258NA4Dpmjknpq2t",
  "key38": "5VWzKTjjT1tUnzJeEEZhYbZJNZnwn1rMYnrQguaUJ6JvxsnZphXbQKHJBpzKFBpPpX2TVo2HVUS1DYLZp8L5ZN9b",
  "key39": "5ZDA9ekuiWDSH8p3wdErthPKXA72aSXqgnzt87cPBH6kLBH1Ay3URCZGv3bhe6RFb7WnExQxyAsYTNUCXcnfbVho",
  "key40": "5VWo9SbzP2gKPqXATnAp4CvhDoSVszzBj3AvkArXNb8QUEHG8hVWQ1iEJuPWWGhf71YAGQkWz2fd5GhRkM99cnkY",
  "key41": "DSWJtiaRRpJGqxN138FHmDZ3EQ7mzqsP7jpEyLkRrUkz4CPKL8Wc8Y1fge1TLTxdfuH8kFy8hethpRgEHoERSdS",
  "key42": "4J8kyh6ScoiMrYb3qq1f3MppYk9jN3SShnDajnbQRWJ9zPEAKJ15GpPdmQLFsgn6wZU8H2GByvxTJrw3tryLtywW",
  "key43": "3bZpdcu5tNZJw1wcgL6VUP6MVQuxBvtUAQfm3Qp1qfijAQv53fYVhkL6Rc9sfQMtqkLvTBn93NvG6e5ieWaK96kK"
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
