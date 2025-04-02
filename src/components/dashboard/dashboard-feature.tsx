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
    "65Kgq2P3dLv4euse4cyzZtBPRybofTRYTFxfyrXVcCzcyRCkTCrypeytpLGaH5wpY2givnbRepQksayLoHEh7gi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYCWRcwQpvYyR3rVzKf2ok8HNveetEFRALmYpoLTkBwiT9dQ6mvVJjeobaugF3pF6Rq7By71Be43qi5QBjfyTGi",
  "key1": "3DusvgLmCGq7f53uQr9Ho4DyVQvbmPjQKDTKwW9qyhmAsY952WrNVtDZQkh37PTwD19omFxX6ZwCahQg1Ub23vKA",
  "key2": "4hvW7C1g6637soqXs9yuwBLLRdDt1SVYhapgVv8cBrCAq23Nki4t9s4x9Mvg262aN1tFwodNePAmriJknQ34VRJu",
  "key3": "2DyAkxCbxjcQSDR8o3FKYhZDHaDhKCJvfhGFjPurQJZf9cf4nbSK4aXfi3UwK9d2jDpeQmAqZvQEvHXE1Sy4ovJM",
  "key4": "aQDUYHjHL5KFDGZ4JneYMmLaZuVmuoipzwQsiRU8gXmNLCsCq9VGTMzrH6ZptJaQWw4uoAbJhkAMCQkExtJXco3",
  "key5": "UZEB3HQL1p8sEHP9kxhKZDaUAvwZVpqnwUzpzrvkmmuZh889jnTpirr1zgrcteexPHwo8UnJoYsXEJEeNCYe7JZ",
  "key6": "5SinCRmBuPLzzy6ec7YzCZ4GL1R6HhK3urbxijFGm7cAB6dum3tyTsg6XGzdf4cuaDGa9zu5Th81pkTPguiSdDns",
  "key7": "2NTWHnyNwSKVd7KS9KqQuDz8qDitE5BSBz3FUu4pKsYEPHUV1oSHMLpCvkMa5VwkGsDT4qdhxpf3AcU3EjVK3ts8",
  "key8": "5DFi8PbqrPiVDsBZrbfKU66jEStggY4WEuTFJ6B1EDtTGk6q1KhqfYceaqqf1F9aCVAGmEEt4TYDU8Hr3oDMJSbJ",
  "key9": "2848dveQ53wyUykgKBS8c7o8M2BoDbmuTjsB12v364ucZs7YcfnRgcFbUwc5AmKbBmVMtesSHWJvmkpGuQLwRnJ5",
  "key10": "4orwCrSJRkpwQfVQ9t5kbXqbStioAnmrwrU4R8rHpjEyXUy59asE1cknkJhyRvia5tknFyVmGsW72ovLHhhEbW1k",
  "key11": "35y3gUzLgGAnQUxrAruMYSRJpNdou4DymVnSkqmM16sUkZqYTWFeCRhWs477pwJdq46BY689ix9Vvh9x6tzTBsJd",
  "key12": "5Jqhanf4tm6RMQhTLSieXXZJuaSKPz2b4tDuD4dGB8dc26GU9rtMsj7uik3Fhe6rZh2Ri9Wyed38dXqhFosy8DY",
  "key13": "62oNSSKG4WwomjGvFo6kKhQcCebU8TzcUfLjT8GEgWngcBZuAyw2EsS5ocJ65emEcaTrQGv1ixps3JU3ToUDBuBo",
  "key14": "44jYmtb135SwmgTzoXyn6j88m4ALpnDWTTrzf6jRVM7PgvXhAQ6d9B6UCbX2AqYwGzbTVEuaJsngJjcq3yg8GZCp",
  "key15": "4NHn4kMV3pCx8gTpcYg8MQM7mKGt2hARkbZhGNpW1YHCqkAgc7hWCf9QaSCQLHEqKYppUZphar9zHvhWj7rnLWmR",
  "key16": "eAaZsXAQgPZ1DJ8iFFAuL1mFzrCUgSJAuoajt1SgzN1aPxiccRvrexyWWd4wwod5XimDBJGJMSNY7Knjb5dBYcK",
  "key17": "44UgT5nqdoNyYGjW1uJneAtYvV4q1SsTP93fngXRBXokaXz13E5eh4oieZ7T6jBo2aSP41J2FXA9AxgaJRExeekf",
  "key18": "ASHw4ushBsxoF1WRM4d3w1UMpTDTYmPD9sTQJzB6UcSLB5ZP6Xb7fJieCFTotikQvCto7LTt9QFBEwNnTYAkK7u",
  "key19": "3ebNdjWRPpd91aV6iWNiY8VdQD1QMD3CiZYYRBYqpr1KJ7Y19LAVqiHUpZykxiuV1ARJwKTitUoyQ5Nizn66Kzp9",
  "key20": "2VohdoyvqPNTNVXyw6ERpArxNPR7P9ynXTGMN4rJUrtJRtWmm2zBtwSHc6CGX1tSuRSNV2eqJx9rrw4mGEQMsMZ3",
  "key21": "2FkDZUUozL2GQ7dmfiHCjAsfrKwbKtajBCQfZRt6NzpekgUGk3c61S1RfFyyK3x7Sdc9qfZEM3n14ExUPPiKWiSU",
  "key22": "YjSxtd6uub1fd25HFCLGucLbV1bRdmwnJvLTb32J36WY6FeaDMsjYgnx1j9jaEDxq2HTiJSU3wmxyRLATuYTy5D",
  "key23": "3RjGgUqzvPoou1kcLTgN2fbTqCL51WVgpRMXaGCCYYvwFM7EBxdomYmtkABBTuyLAKp9Ls1eBui2qzrNYH7E9xie",
  "key24": "5MY2PxNxiVGeQiTsAmC5TQwxAQy1VRYfVMMbXQibrsP7vf5AGeMdMmbGXCR5KXWYR9ZAL3cE2qAkLHFdXBJ8oje4",
  "key25": "4AJEeJG8rjLz6pPSCsMykRcEjDqE7iLioAkKM6NAmESqEvhebb5fuJX2b7ZqpJH8Grgk7Jm9jgW45jPegyPSrQFW",
  "key26": "2Xg2mEBRdrHQrBAoxmFpmZihmX1rCCV5bECVe8BhVwA2gnmRxJGzoqkdL8ft41muvJkyPJNvTxzHHLwnXQpGoWf8",
  "key27": "5oqvYvz2r7HLnuuH8LGBSERhEeCvbgTaxvkDpQsKgDXeuvYKte11Mt1Z6JNxncrvDQCo67wE7aMErVuo7a8QQnbJ",
  "key28": "2CxKWyMwfWmk52zm969x3NoCPTWfnxmrdH8AS2BdBW1ALDbPGY6doNXffnYivakhhsox9885nRq3Nh8yLWZ7Jzsq",
  "key29": "4c2PwYXEnDvZ8duefeaX6V2vWJU8DYbQKwiDsLKYSQSteDDxjaLDB6D6VT949TEThedRXrKodJ2Thgn4SC8inFts",
  "key30": "27Mbbmd3Ef6xk61CPf9vx4PfaBbNmNiUhQrKXyyeicVpmJRs9yozV5Z4qoPSnXjU71ouJ7DyQa99grNrwe4o65qV",
  "key31": "57H6exSSfcBB7LG2z5ohmZJrJK6oPBPWQfw2hYY96NHXBkcmawePGxoFA88QFdDCKUBmurV2821SGRtkmA9xUiuf",
  "key32": "c5Y3pPKwN1LaRCkkQ5WG8cKniVLMKqDsZQMKitFMYH8H5Emg4PX5BXaggjRijgz9ktf36aBHREtQTEoDvVJoKYX",
  "key33": "bBhDsPxrgeipPYptRVZ7bqbjCHLsFXeSPgandeNj4R4s1V5cBCkcdGvNxtnbDrskFG7fCw1ks4zssZgYBHYqiC2",
  "key34": "x3MXnokwQeDFr2GBSh6iBMrxBLh9hMbEva3a9Ks6zPKgYJvF4v7JwtFGGU2Z2FXfhV3aDWaeiPmQ1hCALnpUPaW",
  "key35": "2NJfaf3JD6qJb7oNtwGoXjy5p8F5LY9AXxnpbj7P5MG5JVQKdA8gJgz133twtGZGZKCtHwf1aDE91EjZKk3TwADd",
  "key36": "5pNTJHuSyWbUWHnNd2NekKoht2a1zESS4Npsn8MsVwizXFmQa4HU9nhJcYwtWpa8H8xk7G7uDKuZqpPqLgJ3vuWS",
  "key37": "2Hyu3dCX9QMCF5sxjLayvEAQ5QRVi2bnp1NJ6K2CQYzxE1c3dFMtv3WqND2KYiriSyUtX4wAmX7PbB7b7sJvFoLB",
  "key38": "5zE9G7CRq2CotDXnVQHdtFrxa1A2MMAqPieg5N516jnzN9mUaG8U3bzNimi4a14PVp7xN8eMNUhY2a7TH2bP2WLc",
  "key39": "5eA4hxL9rko49QUnmxzPLLgzYogiMNLyjdp9PeCoW4UtL6NE7j3BSP43Ni8GT6p8BvQz3dxjC5ec6sVP2dwy8eAX",
  "key40": "5xNV6NFVgSfZ9AQLnLTompDtg7Au6NkyKVTGVr5Sv6dapPSbeM3YW2rPvCB3fmsgoWqhg7apHUe7conNCxaLKaBM",
  "key41": "3AvefoVPSzaNhUZdaJkUvSXnPEKrxC9HNsUb9zj6yLS9MSMvAFwGXg9hf2Uiu7bsc5J7nPAeJN52aEG2Kp6PdyHm",
  "key42": "32sCj1S7r3ykLwQNz1SJT7e4LnVEz7aWefZRQoebLYA1aTbBjq2XsvrTri3ALhEugic4TNvRBB1netcdXcfCDV1e",
  "key43": "2p2w1kcMC2gjaRi6EQTdTiD7Bju3VeYHUZoVAUiaZZpe5cz9WgaTNmW8YdUHdkAMcsgVExCeQ8aXQ9MboUJBrrJU",
  "key44": "YHGbKifoYbaN4uaLtHjA58bfnob6LWvBJ9t4Pygux9Vv92MPWRzkuVng1F4pVnjfASbwp5B9uPwYba3TwivSHsh",
  "key45": "6yTxzvZi7WArjpfD4ZYfGmbYHXRjbH6PAvZZdK6fhYH2wroEHCdc5iCLRZgNqNBYixpg9XxKQDn1T11KLkHtiDP",
  "key46": "3MnxSqanqpgCVLhzhBfrNziDMqagNpZqu1UFHadHC5mUTisKwqiWezE8EyUVEiuFuMwJfni1cL57etcNra3Yvm39",
  "key47": "3fjtkTygC7nLgmeKGtaDgJtNNXuaatfp3agChTR7q7kaZpnk8mMz9WEw43PZCYa4veFB7Rw8ggcFi2ntSuXTwBi5"
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
