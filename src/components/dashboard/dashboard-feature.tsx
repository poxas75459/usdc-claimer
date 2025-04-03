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
    "5ETpDfjicRREkcmwogE32yw3GNLBTcYaq8wfgcemT4c26x8FVi9opgBCD194obuE8cVahewLjim7j8VbpFMKyCY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NsFNEJSfEKgdQrp7TdxVMW1Lhw7e7DfLTjnyK8q2iaZ8K9vMgiSgEnU9bwoKN12pUEBWNMz763dXdYf3LFpBQgk",
  "key1": "2sLXVJZGRpZ6kmV7pHmtRrUja8q5bkXwYW3eJ44RJg7UMjAcLgNPBV8MPcgQJbHmSc2tTagQtcpc661ow12yywp3",
  "key2": "5uwiAzjXNnv8WrN5Pn25kT52aUVuN6jWgB6ccjhihmd4DhdiHhCj7m3J9kgEhv3qByuPnicN5MU5SraiCp1NZjeH",
  "key3": "2uLoDNty7SBaLaTdeW64wXhVihGC26aytUtio83tX7EbDR2Jfyf8fCR5RUbnnYszPRyr7J3GEqC6oCzgfBHKMfiD",
  "key4": "2kLtwu9UnvHCwyj61qEt5MMDgnKWzssaGUqmnooXkU99CrK2FzmX7UEjLS8g3fiUwU54r5gKZa2Gu16HUw5sLid",
  "key5": "5r54enYcmzwSSk2jbZupDhWM81uuuv4jJVWa3CTAQmZBG9xJzU9mmYgAj9X4dW3UzmkvXRTHcUX56z1QtUyYESXw",
  "key6": "3hU1jjZFoQPqJPGrbfyNDVdoHyZv7f5yQM27kjrRF11P1NLuAuLPQbdPUsKRiTiyDueDoc2aLpUGYFQatbDRAsZB",
  "key7": "4x3GMQmYpK6qvGSt1nc41kFod1ujuuym4Rk1CK3LQh8U2XhaT8GWaJSKpyJzXTE652bpX4HeneZSY3eu2HtFrJ7W",
  "key8": "2oqwW2DAUZMRDz2XSULSrGXxzP7FbT7sk36js8H4m6jSxFD8ABX8WQqDBXMDqLHfwQhjV6rfJTKV8ehNC9n3KMAX",
  "key9": "2QDNJ9FHfpLV9PDG5h6M2jwsPJKmcMTKTwZCpxWxNiNB28DKucpCsyA96ZmDpFPeUgEJDGzptE2VVdhmbwbrJpwU",
  "key10": "2nL6rzU2zWpztgM7cLPVFdBtZQWD5wKTA6gStuXmdWPWcEVGspKujUY63KsVuHYmj9PqhLiB8q3jiy9ZRQF2pbR6",
  "key11": "4twmKPYrAtPQRupgcpK7d6Y3eX8J2DpNCmhwroJTCrXbBcvYmBRArxgTU4EmSvoW77X2JZVNT25N2ptXKNBjMEQ2",
  "key12": "37z8xtAWHCpkJKGesUhTEjyxXEsoYpC3uhwUBgYojtVVnqJ9BMhPBT8ZeBrPHA2tNB88cAS6yNifuuGaMXkzYw8f",
  "key13": "3xViUEPwEFZ6BJi2o5bjXamUG7Eq6iLWy8ci1wU9BCzV6Htz6wawqDRoUBuHekzbSSKT8yAaAD9tNrtZTzinWdYj",
  "key14": "2TtTufYgC7UunxCLUFQwZ2qeSnS1yQFe5nEY6JAccWLXqDwxduAJH92BUVgz736jRMD6jKwveygg5yAwQHQfpgqn",
  "key15": "2xXPQ3cJHi9ZUPker1RhdowZWkejaqLKii1A3ZHVzyBANw6oDhUo8cvyriN95hM1KppMqoYsUoiNc1jjddKBsHui",
  "key16": "3cazniUo5FqgibAfcbKhHHgDUCLpXxUffC4DK2CgjhEDbj6DMuv22Spdg4MW3Hcer3f19JK951ZA73G6J5Uf3BbN",
  "key17": "5bG6t8Dg6PgyBZo6eFH4w4ebzkrRTDwaFNCD4Y6b39orgxJ77wbnidgrAYG2ZXBPYz6UVpsR6BhFF82WzahYCbNb",
  "key18": "3eJB8Rk4i1dQ61pGpHL8oRTVNQjUGdvkFmpTMNTG2bZdRcsEjqxC3PgmJ35JY4bob1jcJ21pT2stDMmHEUavX4sh",
  "key19": "9wgwS8jL9v7Qp9ZPsk6iSDcNPypasvAGSpbU6k6ccvxJ1q76cYBgK1ZHWpZBqTkMXKZcRs7Z6whiasch85frgSK",
  "key20": "3fYWLbaabbbMr6AyAHk2EyAJCNJfDsKJaePvmHVUqmtYwVG3d4vipoPJjuGydUKxcsnYsRxwdBE7gMXoTuN1kQ6i",
  "key21": "5mT5pEsazJC4sumGjhCvkAZ9CqDNSo1FfPi3ZJQ9Kzz9qh9khGAzqvfjj2MUapiKCKVTCx42C7i5ji9SkhEVkYJu",
  "key22": "2f7stSTUk7zwVPHDgiaFPuWxHu2uc8TLWMbsH8Z6B7cLeRmkEEsZLEV8ZPFpVY3msVgn4QmuqqbKv5ytxpgVeUrH",
  "key23": "3JudDBEU63s66sodagTS6vdqD2CGsH2ms6wX6MJRkWz8vu7jpjKWiJ1aDSp7BaE96FgiBXFvuWEeMf22UGbzeHY4",
  "key24": "5Q7y6pasDphpJCfMtGa5yPySSJFH9AsXk6QERAFxwJuQAntz4tQia8ZYch4dkyZ9tbpKWcHJboQx73z8qiXx4UHB",
  "key25": "2g95RNaANPaZSnzoQzKM59pBPeGr1VPX9LeRH8sPLXekAYPs46WYyMNKi3GZpYuAtAD2zMFuGnotZNh7dmPcaHYe",
  "key26": "3g9zjbRqGTgp1t5vR3NTmo83nVNB2RtbxiHCj659aePnUWdPZFpfPi5EgjXLabybuHAcqtfQ9kM5js3wxxA3Gv2E",
  "key27": "5DhtvNrcA8Ny7mb5v4Gndbq9du2qjsQtEFhZ4wPoE4f5v1ixDTX8SVN7tw3KM7kAKdpLso7jqDaYXZQYrjkdt8EN",
  "key28": "38tXy1BPFsaA8pMC24Tc8FpDrRT4iDWPc6bTF4uLSxTt8586yvRzwJj88yX2JeM31xYPKJpAYMpdZtJL8eePShX",
  "key29": "EwfGMig93wR5tcU3VuLzpmqj4g1ewhzuRweZJ3qhZ9jg5HU3CbhSNxkdicfzhxEmXmBisziurbxXAzxZGoCi5gG",
  "key30": "4aW5jCtnkvde6GMVm3hDxqRXyhUK3hwgFUFcL6cvmHDJyFTVxosnFwTiyTzF91BULxH4gwfZNE7S91towh9i2YAV",
  "key31": "573VpYQJn72YPqMj8NmfPB8PGmnb5dcXcFAeJBxotr2v9QpeyUe69Mtg85g1Xfe2esZkupEtnZjod6XNi4pFY9MP",
  "key32": "aztQQsJ9YeLegUmgD9PBh7GUQJXSy6p6FGpp79Mryy1cUarB3XcqFxjVVZM7E21Zc2SGhVynDnqX28RUNNnUGb2",
  "key33": "2CHeVfHC9NDGxQb8bVCp3XrgkdBTTWGgdaNKtTSjZN3vMVP8CWE1KXKY1mcajsbcNHU6nXTzycnts2AqL2v1msw1",
  "key34": "48UR78xhTy8Gn7y6SkVwiWYEds6RUpUXsxncJBsA6fQUaAWtAAbMnjfa4WSMFpTBRFoyHFDxkpFDjMUqaruhqTAi",
  "key35": "3xCGaC3qBQGtjDrpvevurqC4YDLtRoRA9Piie3vv6Hx5AQHZtxoCXPWaP819dUG3H5ou9GaBScqQwg3R3Us63Hao",
  "key36": "5iE7aEERvD3PECZpcopnpmqfTNrt5gCGSDbCNZ13yxP7a9QGS2sxJWnPwFTkHLraUfi9Wf9Pgu2WpNz67ax3d143",
  "key37": "2uq9RHArw55uaue6mkZZCHWQYm548q2HC62uqPZFtGTzmpRXfCQgw884uhYR74k3UNS1FyuCVcBUmz58reYeAsen",
  "key38": "2gQwuqphr4M6gLnfo81c3FuddroJKj5XkgdRAwGHb16wSiSt44xbpBXSYTrWtBamZ7pcPT94qhwh6fDB1DwurPwP"
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
