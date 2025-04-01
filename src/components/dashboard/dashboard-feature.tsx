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
    "5JrRqeMv149uuoFFiAeSmoaYrgRRFVg2NLnqW6qJhz9odWTZisNJ1RS9UAcuJsaxdhPiC2CjqfGg87fFqKjMndXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkFXtX2Du3hbRzC159hVRc4BvNMWR6rD6Li8Uvf9VRzngk75Nnny1aJtruZ9bm6AQ44HxPhiHwTwQ5JzQGxgx7M",
  "key1": "36PkUQHUyCepZcqtZytHPMX3Na8ssp7LSgEyBAGbziamn4FqyUpmqkouiHoMCgzYuSknLR1Vtx9Ly5p3DDnBvBkK",
  "key2": "4PDStRqU2CGqrp4wYae9uoHXijgfwHcpnHiqE2DzF1VZgabQTyaypnEinLZYNJTdCBxqrTL4fr33hPPWPYjLdNU1",
  "key3": "4P2PqcVq122TNsEZHBnQx8ECeDjhnbDjVi6miwmxSwPPkyp4Poyuem8FT63gWt2hyoXmVQnz8bnGH76gbCqZjeva",
  "key4": "2WLy4zYdMFKtqfxrAifXausuJHxn4DAZCHQEDNtFd7M4fqdSazdxnSwJGnvzwS6UJpuFQQPAzNnPWuhWMpXkpELf",
  "key5": "5Qkydqb7LNDiZGtoicf1Gf6br72wmj4VF1udnVRii6uckCP9hvtWvB5sAZLJM4i7n7wTQxUPggJcrfK4yiFcrVED",
  "key6": "nfQ7r6icb4wWEhBUikE68HUSoTLD7x5t96SjHAMFhhVidYuqsUg89bUq98Nmzph5nCjbhN3RpkbtDZmtdmZwDy5",
  "key7": "54cFF33c5nAgPuSuaTMC83FMykPsWQpJ5a6Y8jFE7Mu6fBge9oMvS1dCgcnGGqzH4skVZdL8Urp1h15Pgt4EjKsh",
  "key8": "3ibJQ3gXFWgNUCinGmCzPHV1xqtKvkNdZWATMirQZrFz49PHcoAuxinLTkB6VBnAHqNFSG4agPexAshHrGec92Sc",
  "key9": "2nkD4cbp2K5cahV2M599vzHrnU4ZYyrBV5uyiT2wZ4Y9L2NdAFZufLTfoGvxqWvFfnS4iY8afNe7UFiz8mvnbhuY",
  "key10": "3HEB91o2M8twMkvN6BkaajjpPozHTg9uYBkHA8rDs81YPWQSVw6saiWRunGwytBiPkPpwWWYRN6iCsBJKkRAtGdy",
  "key11": "cSyYBNyYPsxDCTHKhvqJ58UxTahhAo3XbCUYhX2TP2W8YDfoc8fS3LBBG6Zq4gysiDXTUczAa4E9ZFnThAwW2n3",
  "key12": "2dNf5gB65tRU9rYoCNQ4exx8M79phJYPAD3fr1YMuH8yGV7f7dosGHdzdjBM5snV5u1AGpXMfSHFdhnBjxLbbjG",
  "key13": "3NEUCtcG9rsh2ppmKN9EXqfXpfZpoMDgJqmMfTDAakAfyJsxZBVJjbJA1mWz7cb7cAPBNB2y9nJ57RVoXkzQCTsm",
  "key14": "2DqgBuU2pBpNUoo58jss6Zj9wPNdonRfgfgjvaHMhtT4ak2d4XioCbjH33W7VqYysJ5e7b7a4zutu3FnLHkgUkeM",
  "key15": "LoWwcwc6LXEBkUXv2nMkqVYciKveKHdUUWULmDTs1JZpgBvEfi8J6jtk4nPubhVtFQaY7uT8j3AB8VUeBnaxFUP",
  "key16": "R71mY6uQtLQtYTi5oGwdWRYcc5MARbmisCsdg3kyRRxvcFKdxAV7F1q6QoSpFuiDVPSuJ9e9vzZZVmHzNYn2i1c",
  "key17": "2WuU82PDUzNVYdphsD1PpEiyMmCCrkW6wmSu2PLSGZzDooitSG4TDamwE5ETU3EscfMoiS1jtF8LpiKyUtYrxxxU",
  "key18": "5zCSH2k2Co1qzhmAXBLjPQZ7oCrwtJ7DZbHvNoSJ3TUCuhf3PJ2n411Gb73PEEFixRumzVnfj6741X6JAR3odqds",
  "key19": "5cP9wNHqkKRsfUde4dBVm9tVQA6eiLqA1zAgebyN66pjs3tJPH2FRqtTvnoSz7Dd9ACvPYCWsyDpBweS62zhJn8Q",
  "key20": "2HMXCEHuj8WTk53Rr5z9RDUULLaN55jNK4HCnLavhwUCRa8kULUvoyBmrDNmbb37CZtEbv7H7MYDhey1VNLMzgRd",
  "key21": "5nQxCVp54dQ7A1JhHknSX4sBGG9QiGKqFdqsiQb5EenpgvL4vH69X8qL3J1RXSAXuDkytRZT7nZqTtLv2ejmG7zt",
  "key22": "3QbqApYtfUJ7X9QtUaqrwhH5kboKvQnyrKkFZRGkvmiLfQSokRfh3qYApPfvtR3NrZV8SaEHAT9nAVGGNuVWN6ok",
  "key23": "2bH2wDSExHGfTiRG5VrPQMX7nUREYfC7EsVoPpgxw7AX8tXUvViraWjdddwMwwxBr3aLokop9xBb8y8cm8y3du1P",
  "key24": "GZ32fjT8QyLAZjXbjQsfejnenZNnsqDnpa3wtkvcC6MrUqZfVt87oV92TqcJAaeP9xwkRLMgyUpQyJHME7PSKU4",
  "key25": "35txKNpx8JyxHSTrQTJYG47DvA7ppMj5zCovGFBPRqLmpuTm54CHnm9z8EAJrEA7no1f63JPoX5VvG8gSNrysxEK",
  "key26": "z53v5heVPEMQUKBWuGgYPQTkaKszbUSQcjhMymacUC8iLLvRwLJeGezHxZUD7k4KkgRcU9inbPybC3W2ADzHxWo",
  "key27": "4rp2zoCSpbDxWPBmrbfbfsBBsXaV3BbrBFKVC2cRrEXa8arEgVYJeYcQv32sYxUiAXcynbJpHNFfZ6ATqTXYBGCm",
  "key28": "4kgqA6Gjz1QzUTbhGwKDAGY3RiTSmrTFcqkMJ6GgZaAb15Y7Cz3JTWVF9F2jDJ2FiLhgVnmHn6ZNEAc1YaVbx1h8",
  "key29": "4dTSwi54UtSAv6FZMkBJnq3cFavmKtnai29zEt7TtiGKpc717JcoGR5CYc1aNEvtFBYaHVLFavTkS8QswnNQLJwz",
  "key30": "4rxFu7uoma4tzfgGjpu9dcAVkhAyASUwEXjwAS2sj9bYYPd8VikMHJrgLSDhtKVa9X1PCxkzabsfPuPpQxvTBo6q",
  "key31": "2W2RxwKJ4QCtgyBbCGbEGHgCWxw9ymHDwaGBz7UQKv8MKHNdVTr5eLQDAWdZcUTTaZUh21MXHUzVk6ZFwEVYcvDm",
  "key32": "4uXHma5XqhEZkoBaMZGRdTzBK2DtSpxoFM7bDes5XhSpvjT3Wrf1xvfgCz1CkQ5yHhWpMYUvHTxmHYp7vyJNDX5M",
  "key33": "YvJEidEAdQZpLqafyKVwG6Q7Cz2v5FX2UUAxzPzP243XaiT5HJHzfe4sFzttntNAPY2vCi38QDUHxBoXVxtyNXM",
  "key34": "21ro2jyiWk6Zax6gpJhXGxYrjAZWmG5sWrDGb6tGQD6ShCg8kxp8ybS7tNLZTobDaUbtDoew1zoFhptTegpiPpzc",
  "key35": "NFVP94cGQRPHkkWAaPQ9nqraxcAHEwMecj7JBbQaJcAthL6ZrERVyhRKh43qL4RZwEZSqpLfQig7sJsXHrTqsSG",
  "key36": "5TTQe8uUPKEJEKwXrNFGkap5PUDzMCWiqT9bjTVhZJR42kHntwgxMmf5ibUMk3HfirNSsDhb7box9c81ihBUqAph",
  "key37": "5QV4kjwCuc6a1EB4DL3bjUwdLPcRpNAwZ5nyCr5u6gxTyiX1XviBBkdRdLenrXP6gYWfcku5hCDo4gdCJ1FNt9M1",
  "key38": "3MmdJYQfcHxh5VErgwzoHfCrGuen8x23PfGM4VMbq7PnNYPQzjZGNroRpEvH4T33Y2Qbj2xDSsADua8uLVdAr7Jb",
  "key39": "5qaPkzX5dnDXWpGpMnkHFFHTTTFEmvLLN2tJHmo4ZhwjPgLrD2VNTkMfje3nrbHeNM7iCMGemEtyby9iqEojmtnk",
  "key40": "45AFnTp2btxMRQH9UDgWuLbcYqjBQzgtsVNptC9eAN5xeWQYEqoNsK7TWNZ1Wx4wpXPEmPBCQTnHUpxnC1eZN52k",
  "key41": "G7MYaQv8HLx6zDZQXWMM56HcVGg8Z9Zs6E1juSNdjh2wK7cgNPhGgAGb8Yk1qbMrppG1LAjgTvip1Fvrhn7NEDY",
  "key42": "2fwkN7kvLwdDEppZaUXux5amxRVH7i478AnDHWvb9sfw5APEJFapQmEQH8eGQ2KYpiNDi1qzQQ3GHB8ZVSZansb8",
  "key43": "keVdo3N3TVKFfa9qVby4dd5pLchQFN1SCRC71A9XyWxJNiQWxwvhoYDctP536kXn8BzrXiapzcUUQVKgGyb2DKz"
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
