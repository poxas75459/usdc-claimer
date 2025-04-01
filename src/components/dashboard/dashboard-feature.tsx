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
    "5w4Dtae5DLX7vf9X7YJourq9K4JCq9VdFjCaRDpyqhm7GT2qPmvWQwy8us7jTkQbvCChzRcKDtLegH9WAf3j64eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rWw7t1jWmhrX6fbju7zWh1DcXPuxEUAtbZzuavUygcS25HY2vM2E6mkK9pWv1SsYSRnw8BCc5RYjn4G8powcJfU",
  "key1": "XHQCRRtgmZmL1fRhx3wH6LvXgnfsrQAV6LkZtvm5gQsejk4eGx3g9LHfZ9HkYN3kMYrnYcneyZxdQ1gvBjZchZK",
  "key2": "64Q49UdHGFn4aaJRD3suAa6Z7YBzNGvRc4itBynFue9F6R4J69VPXj2VximwH7R4tADQJf1ub1D21EYhx5eXHEho",
  "key3": "KmZFx1dXaTqG8Wko5Y3HezWvjyZPAbJRhR5zpzkmAhwCwnNEQFHWNQFEMLQSGDxHc14AYTXBzCeHDPEUFgdCoJh",
  "key4": "3ESxo32vH6u9EakmieZdshiySWzv2Sc2VjGdEtvPLy1BiSiQm2nTKLm9ostabkNKHa5dgcjXUpH42QmcsdNKKLyM",
  "key5": "RfhemkUx218cJWrAKW5mAjNYLrFyLLSH1UdSKGnwFENuUWRwuybkiL5Vn7WN64crnE1RpGKL8mBTJNjYaW2ceZM",
  "key6": "5foP1mTP6m4TwuVsPjiXd4KUVWaUfbeEkjRoCHzb9qAQ3PzDXRqtqSTi2thvBJgTWsfvdSqcQEpCQfJ2gygm9NuT",
  "key7": "iKqLwUX6Z9HX3chYEwNK6dGxHceVYB2rNDTNkYfRTiM35vgAjDaA7wgYgnwxjTuwqTwrL6ZYRQfeqD5ykeXYKyf",
  "key8": "2bP3GwK2w3vHbWxwwV4gih1YvK7WELhwxK5hdfWttrN4Prpb6ss9nvESE3aFZdfibk1jxqwAVd8h5kHonoAHoT8T",
  "key9": "5215xFrwSn9TXFGpRj3Pk6R5986hnSy18qrj8cgE4wDzqNJFeoJGEvC78KaY2KsH7u8mgt9kXn1hXeaPFg4MFbK1",
  "key10": "4eggFgAuYfU5aJh8bMxtLs75cokMKJMUZUZGhrqG8XFMKzfgxF62KQJrMTnzKuaStT6V6bqmpLRcurxDvrqDFVsd",
  "key11": "3RMrXpCRJYXShvkgfRHVGcHHhBYmYUaZtnX2HNqNFK2KpmC9zDmmojd5ydWCs4QFZsNaydkcyVXFQW9B1vTUgWgy",
  "key12": "46n7usJGpVRqKZpspgtkAKV7BALsLCrNvZSzY99irfBaSqDA6GMz119oEf8Pj8Q5nS2UpvzcEWTgRfy9mYPFbBm6",
  "key13": "7mMJP3r6Z1N8RHtK875LUwQwhMo5abCZPQGj8wv3rDQQg6jgYG2cM8QsbKdnuQH3yuYKm7AkMo6jCpkNDHNqTVJ",
  "key14": "4J3HE4hBPFrLZUtM3LxdBY5D7WZYhBRc9bwUUXEFVtuXrq2jAZRvUTNaw7zjRrVVVQZxSgkka1ojbRoggjA5sdBC",
  "key15": "5jfM8npsWeaZwwcrDXbnAx8cgh6rzmNTbdEF9U7w7uk2m3XPWCmeRDbUhVmcqazPHmHjQU7kq8u6vTrMGzjYb9nP",
  "key16": "392JMm41vke5XAxCx3TrnQBrdLA757qnFEt1Xnd3XqYZjuD3ttQgAEp8jowEuy1Kbda5vg4LZkEF9J63e8c19Sgq",
  "key17": "4TjDATqf89YbLi8B7zFQREFD9gmku5TutkH2XwQj5bwh8oxn6fpmnnfx7BaLQN754Qi38qhdQtvPmThB18qkqJHM",
  "key18": "5Bmk9DxH26qUFGsBNNMykuo95E4uJ6cmHjhq8txom4tVHnEM6vhnJ2h6Fv6Tc6idSLTSJ8EqvpoGD1BC8AV58L8f",
  "key19": "5xWB9icLDdiLL432As2BrCZJ1FU7jCm2atFKv8h54eY6onFWvJH2amNXPqYnBwmoEC821dSZFH8HMpbt4A1TbniK",
  "key20": "BT3fpJZM5Y6ZjuJRkpzHs59hmkuF6Wk3SGkRRAkRigi2K146q4uLy7yDMXtRTtDzR1LVwGTC3bPgkDwPm49uL1M",
  "key21": "2Gk4T7MengkmbxYbudhmtz3D7cnqNtTGh8JDQ8rRTgNcjYS28Mwzd3wzyRVLcn33iixaiHdj8HGW8UDUQMKhzYXF",
  "key22": "56KGANn5C5vKtWcWRZ3CrqZJkRV5auWk2125HpsWhBzcBMQwyGaETHf8vKtVZVjv72xWc9q9y9Bz5tE6wwuy5XHJ",
  "key23": "28M2LkEFUgHcrrt9haWirngBJVU3Mk4pQwhd83NGWeQczLRN5D2TRxgrb4iZafoTe41sck1vU7hqjYCjpHxX3WEP",
  "key24": "5K72E3zD7QGwo3TANAcQ6U1FQngr7frQyNmEyHTUL44KTZcyfMdwgWDugP5rczWvJZXJQoCPjWFBznkcoLyjSKZ3",
  "key25": "2P5s2AKv2jKFk5jy7xM1FR7Rzifg3xt8YH7GEk6U1NbMeQHnefCREMo36QnTH5dRiEcBa2kP7EMmxMyUBycqJDqA",
  "key26": "tsmFHX5NoU74fuc1ZMx4odWk2XYMRfHL11hCcYqaLgME25dxiSQLNuX6JwyvKWg6n4GBRnoHyUVxdXCodvXZtQZ",
  "key27": "2mJMRfYdL9Ptt5dgDvE6tVL88ieWiT4zpN4u5VC2NSNamEZYnq3D8zd323ctw2L6zgvPV82dg2Bh5B258dRiDzgi",
  "key28": "BQ1SqdU3XXASXLDWuzTveV1ydxe9P1mp2rM6zpcuX18kgm1SwGsNG9b8mvMGbJ8p1FcBf9RUiAcjVpNr6buiZsY",
  "key29": "4L8oigmqoUnkGnrYAJFvFeBkQyQn4oGKRxJgqvDwJjpW1oixvS5gjFukBbjjgnAJWcU3zhcejEAmxppj3BbUpaof",
  "key30": "2DVLNGfCq4XtEFrMj8c1nozmwx2sfHvK8EjU4pFp75xmPvS2RBmW6kmtGVBYyQXVerhFQYty986XYhhYMULMsBvJ",
  "key31": "Xu8PdU5TxzuSLnr4764DKGCahPrCNfxMfL1TmQG4qL1Zzy662MK4AbzbgjYJL6wWiyySkeHezdPL64UD5zVEHDu",
  "key32": "26UTQeSzJVUcDvtcBmcHA4o5HwSAvy7PNjLXfjM4PYChecfEK1hhYPasDQPzpYVUAH3jAmATb8RTxzR6ffGsQFS6",
  "key33": "Z1vA1rGGkUSDfHCR7khSu4Dwt3AnyNv9ngNY9XtQjKAAXHHKXCxrztDXTEYedLPzqyYP7Y89B1r4W8J5zPQAq2z",
  "key34": "31mka4rARCJgYktYVWx5qXho9ZhZKdt6H1c9vncnv989dBWAYhvwfDeMjSHEELh42L7JVBg44a1jq6XqGDRBxRY9",
  "key35": "41f6g64VkajEtr9tBzMfxysbRP3rdgKdAb92MuKbvBTWHaSUnJ42SSbU9QWrPDUFQG19BFBooK82eBvFUS53tyxW",
  "key36": "2MtbkXdQnzQsMKpj2zzJHao7Urn7oLruHu3Aa73dD3VKt33Ddr6dE94Je74YDv7HZRZaGxTG1V6jN4iJR2EwSeHW",
  "key37": "2eNvSpFKqKeRkvoHvadcEixr8mg4FE3gzbvuypJ4ZXHEo7MMjnfZxJ8sGKoBiHMtXdyjXLmHcwRGpPowoeYV2Uki",
  "key38": "4o9K77DRLSEHXMKj7pb9YUDNnH5p2wM1RWcxDqnuypTdHurU93HvtxczwovsCos2wi4NA2gykZTJmMRxHc8Zrat4",
  "key39": "2USiHPHkwr4PJaa2N4VAVpgRKSr3ZPKvUmnKnuUc23HcMAFC37RGpu3xm8JyrwLqHW5VK9p2UHPv8BFhL3ny7kut",
  "key40": "2puBCHhdTb25fUmNtDcYVkq7fDcGFGcx71cD9yuBG7idX5S5qj93ubRENdFujHxcn4HTSwdZzttn8QUREZbsPBQS",
  "key41": "5a7hR1UWdyKL9st2iWyg6rqyLhTSSBrKLchd13RwgaNa8SRLs8NrTMPN1pEWEowPBNYsPPuFmbvoYvvxZLsHJY29",
  "key42": "5DC1Byi8aNLwDqMjpW1MrWSNMEWNTeEYKaphNb7AucSGKTr2diEtYhauPZ1osgjwwQQuph9Ys8Pd4dvieZyuEWVm",
  "key43": "2z7Mu7dduhpWtekRMNq2W1YmppVfBNvteFuqLWzSvX8jBfyu7oCEeCzRjWvK48cNYW1puJvo7eZCrPmEqVZMbALL",
  "key44": "2ARgVSpmRbcwtYifa2REzvsp7PuF8Zb3j5cKoz2EtFxqucGubVzPDZp54oY6phqvG8D41FJpFPRA7GMG6TEfBBNm"
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
