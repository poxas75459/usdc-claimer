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
    "584iTVcpfTTVrAV6arrYYbteHfPphHbmqpSzJFeEumEBVXy9MqZHT2QDpDiny5CkxBYauiyX4JJ7RTAr11qV4ZgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8wHoA8RNAf6MWZdpHXEg4LEszSdwfiqhgLxczqcPzyZvtNWFwB5fPAzX4kGFdWk7FimK9Wogywt4xV923iiVBk4",
  "key1": "36vNRPopPuazrLV71WfdztWQ52LX6sYc54s6U8eKiDZD6fiepVurULuGwdWe3hH4myvAjnJFvQdWrUb9oSHd1jjQ",
  "key2": "3qJ7qWMkKSsTsE9fUSDb685ViU42KDSQefPqxBft1E2ML7b7srW95yeavVuVeQqYBKeyDPdpcNwA2btYm1FsBMbt",
  "key3": "2rpADsiCuxW8T47JW2rw3jbgXthzpNvJxfRCw7JJZ3yQQmphKRT5eQDdV5C8TT8fwxVgWMCbUDJBrduFQuSFaStL",
  "key4": "sg33p88wBMSuG8Q98mVQ7W6VD53AWeshxA5STVgzh4MxVzqWfwzWdU3zEFDbUUGUbZhFA181ZoEvB4Fz5Km4dUt",
  "key5": "3y5dPgt1dsxNdXeuViCWXeXcL8EDLAxnzgSZ8WjqYiZdc5echuLZDfq4kvJWSebEi1phbRGXrLmVu9Ab4X1m8GTY",
  "key6": "5dBi4G1Y6ujZzPipk7DXn9Mq7rNGWxE5Cjb5Fm87pYZdTUy1nruVKFH9H34sCE8EHsJmetUPjVDG6p7v5nCHDrBg",
  "key7": "5c68sX7EdyE1nbTr3xTvyB4vpjFZJjEcoQMQrYTDsvhYfFxhiFicC2tSkjkRuX4tz1t2ctPpbYt4CEXTYSGMqS68",
  "key8": "2iJ2p6WyL1bbg4pYV2pMTnfUwDXJ1Sgj1FhVzhRr4PWckaKoFSqcETn7gPSPCsTQNFK6Bxf8hu35Ubd1XguCQ4vg",
  "key9": "2mk5CFJDAAi5AMyiXogQvARAc1rN6DQSDhUJCvuHF8rKmw692isn8GpEGHh1rDsHJAUmf23dmabJEBmsVM8fATGC",
  "key10": "5r2ML2MGtdj4bDE9oQhyHbXYYFYUHESduaptGx3ZbF7Kc3cTgZV8Yr59MmZpQwrXaZY2gnSqYi34h8g59KpCzHgD",
  "key11": "2Ltbdg9WPe43ViHLpZa3sYYHfuwVdK66hiSZopzjkjbF1H2A83ZohnavgKTt9v4W6jfb85cWA7wXw8LXdz6eUyRN",
  "key12": "3iUfSNfqwaVG7W6g2XHLdwyVP5yNPyKeNRTDyoXCKVd6njGVUdBGaHaHY71Fgays897HmqKPt2dUbMLYKoz3eBmH",
  "key13": "4otmCydFaEZmqVm4Z8RpCo9JDAPseULgcbfXuHhrFxGXWCXb93jURvQgE8fHAQT8wfGmytF4YLAjvdCAjAWZQjJP",
  "key14": "4gFfy2mptRNoZYvoRLwm9BbQmQcXzAyMBCMdACjm3Q7htYpqLJwBLpFpvhQsT8F7QFdhQbTpiXwK2RePFtW2wYWC",
  "key15": "2E1aHwVW4Scj6oV4wappMFjKjTEPL6BV1sjh5Q263DKdYnQjFsEJi7P9SdFym3ZAAmivKPUWi3w6X8b5c5Y2Dveg",
  "key16": "4qALp44wtKBXqT8r18eqYMTU5cMa2x9sgS9vFk76LmZ6qy5pei96f5h8FfpiuFQDkzM9B1Ecctv5jSbcSoUmDVva",
  "key17": "516qiuQPHHdWvLWyBj7CvunsH8BDQVBLd18s7dMk6NUUHE3utRPWX7WAK6E3wAUPG47Em23SW81PeAUVBt6hnV9z",
  "key18": "4thR81jWRjm5oyrC91aUN96gkNsmjxQ4vc4miTqQzjctbxirR8xSJU4HLKYHQTJ6CNtaxSe3a4nRoceA4ykm2FDR",
  "key19": "3p9gUVnsSJ7Mwh3AbZ816PbPDeczUxc6CAQty2CoWdpMmP7quFVEqcS1mC5cTvVYdUoVMndSZWaB32t19JRDppbz",
  "key20": "5NBdWm3qESERriYqAUxFcPp1DZpUj1z3X1vnEJ7TMi8iSzLxoCqntGBCoQ4kwP6DtHV6p5wFLzt79728DGmAErz7",
  "key21": "4Stv7NDisXfLt1h5mGJoLJuz6nphrReD218fvSeQy3HxmpyDNvbn7CcYm9KFkA6gyMptLgZP8zKTVTTYhnPxDw8K",
  "key22": "hKNgycpRdXEASeyxSpJuesY2VQ23c7aYX8HEqCjByJjToMCP8BmayhJkFVCAzmaRfsVMf4gNKeoADStJrSB5BT1",
  "key23": "2t6aAQ4XkHkbjCzzV68VxA3WWB6r2hexLXP5zt7emAG9o7tFUyTK935qE9MLmHUjuvBqhAe3p8jGWPVrSzEaxZ7a",
  "key24": "5pcyAyN1EiYFQjpqHCMiYfupfRJ7Uiti1FBcJPMatr6FhKiWcXFyxybuETbPTW2b43kAetGEyL1VHW9obe4s6ghT",
  "key25": "4GsazZ6S5TZxuig8dLvU33749nm1spfX7MSCFUPYXh4mmV2KiQSqa34MLi8Tj9XJo1PmZiMduoAPjzJoEoc7kfZ4",
  "key26": "2StFpj9A4woctKmSzMtJFN22KgHBYdMWtqYxyuhPCifcJhttgMUcvFk4uRoVs7Cnzx8GCv5jqyKyyoyQCSprT5J3",
  "key27": "3iFEGMCDdKGpta6cpaGarxC5ErydJqZ2sbzSMejxz89QnTYvFQLhnDQTuAdaCZZSwaLGH61Pd5MfuXBYVD7oDxV3",
  "key28": "2k3UBGL6kPfJ34a8B1z9Qzqnq7GAR3HPXd8mzvDtS6q3drRurq5K9HSsho64Mfz7DfzNGLytGSRy43W1mCByBLWd",
  "key29": "5oiCxbfhH7NKUaKZ5vxgQr3bVGUDjC16hh9MVgiLVkvMh8Z4qBf7y9dC2iiPzqRqDLSVigNec8NdxR4pNfwftVsH",
  "key30": "5aFSfQkivXcvnN6wHvv7AhKPD9UmEMgT8CMrVjjBMMxHLCbnGMfuFKXgiJT7HzeFkoDeDNg5xYYnDQM6BUENYfjK",
  "key31": "5U17jHyzsZ6ZxeDFTBBeFukLCHQDpwi4DWDn3K1DaiCKEteXBvbQvTb1TpKNNfbHnC81xB1iK96R471pM7e3prnk",
  "key32": "2YGYq3B2NEz1HEH5PsMnGrsJZu8xEDkCmUzZWDEnA89v4PjFDB8kT7LEiaWVDewMQrV1YBLpnXGnvJnR4BLdJiHV",
  "key33": "3awaZqTtKNCqnw2REZaChgieqTFXFhpvVAtfXuZ4HixwHU8GJVmtjC7TtYLA5sTKDrPasSy8XKkCbvfPnbiPVG4W",
  "key34": "5tQYvFbj9CecosioR2c5VhRL7nGmL7swsWyy4CncizhJFmhSphpFrbQCKukEPCHAMiRFQvaHp81SuSHCKDuKfWVC",
  "key35": "qYreifTWo9D2WdfJ2i6ENNEsn3Yeghr78x1kC45kswSWVZWeuwWGvbEVQgC97UHuSMxNb4dHChVxTgnKta2WAeV",
  "key36": "5xxHDPnQ3NHZ45puQfpt4C8BKCGJZDZ1my7hatihNBLn2n8CycWQZCu831U1LLMGVchFfhUWB6h9dC3EdYv4aZWi",
  "key37": "pp65m1zKbAou7Coy36PCR31UiWKm5fXdmEocruLEKYpB2mERdLLnUVH2hYzFHDd7tyn6YyL2XzRUFoJCuaKRJQe",
  "key38": "5pxrxPbd4CyyWKEKK3cg6iUTi5D7ZoysKdSZPSpqQ13RJZkLnf68PUi6yyhAvYocVozvxy25kcpzZzxxnXYpr8sc",
  "key39": "2mLe9F4o5MbrSMTGSpSBJjppzYAZMnRgGDK5Jbs4jaRLi7CpS8x9j8E5x82nmJrgtvAHehREGPCNCcRuhTcWR2vu",
  "key40": "3ipNWVZF55MJg63hi2hxxqhEu8jSMntkj3ssepg4egYjhQ8ZCbxvz4R99QNbyTrtj3JFDPi1GGmQzWyfWnTzdCJk",
  "key41": "36yG7zb5KcCNTavvzRhGCDrj1dHWeQUfGr52KuNTVeAVN8M1vFLvosYP42VMaEbmN1ve29EpUmmeS2mR5MbuXkvB",
  "key42": "2vKZqSXMxB1CfSEPJdjzJXrHydyBdDXZDyN3dm4hRLdghPYk1G4N7D7gPHtTBDQ7j1EF18dLpyjxUa6pnTv6wKp8",
  "key43": "61ssiK9dUBNvLBYqfq2Cvn58A8himG5BC2q8L4goLMqq3GSJj1FJtN5iqqjsFwzf25uFdXRvoXo4P6S1wUe6mbV8",
  "key44": "39zBDBSMKUoBZ7xk4UDc996XZprQ57AHYmEgL3P2C9GofYADcnsk8VW3nH95Gc4sN7z5uP6z1foQeghB48LuJk58",
  "key45": "bEF4CFYjPuEd3WkL7SR1w238oE1sUbYNpTqiVz1Sxsx9XX8V2wGNCFF8VrkFYEgPGH71quUJnb1zgVkvRyCj8nC",
  "key46": "c5EKJdR4X7dnz7i9oi4KtTYEQ9mYy7RR2M2wz7noVyqJyiufh9Ync9bnLf4bLsD7v6MBBBaBt9XjngLuT5sxnmh",
  "key47": "5R4d12MGVNRDA5DYDbdYvTbPPnCGuauw6sQWiUzWqivYrarPRuuAcTjKfH5B7HU4nLQdbAcvkh72KvpjAwdvQwsk"
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
