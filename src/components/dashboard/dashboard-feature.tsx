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
    "4yNMvpkyqjJcGtoX1Zbw4n8iUZZWUD6WraP4aEeNuNoMEBrMLtM88EjMsPHun25FVZRRt7xsnz5j4NAte9jTV3DM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j2cS3KzRfjSooWtKXHkdTcLt3rLsK3UQPwU5B5HKp4QeWTLzm22HPtT3bDhq4UGQ3Tsc3H6Mp8y2n6DqiZNACPi",
  "key1": "5Za12ojhmygfK838eqQbnaC3kiKiNuTG1zEVqxXDaJNSmMWXVnjfnNJcPcTLpnNhVtPsTRM7Xs8YBvcbbYKuz3F3",
  "key2": "37vcEvTQzQoYrVNYmBagV9T5eVmvT4gbYQctv22tr39rXFwdGHJWmH991gpQdpGzuzgKiN1CMKbvYK5nHXZZN7TV",
  "key3": "2XjRP97cLecU3KQ7kCpRopjtfX92493qU2kWoB6tSTH3HdSzVxA1k3n56pdM1AZaboZbHnfHDQTFsR3i9A7a7Uim",
  "key4": "zJBvozTe2oEMUFBedRQQSUpDgjoJ5MSUdj5Ke4p9gXVLMfrbSpzDhFv4Ectt7qAn3P7DVWQDqankVrNS2GQaWMZ",
  "key5": "3kY7nScuTTpaJjsZnaKez9PosNugjsWeioQjqgBXyLmYny1TuF5TsGsgEPwW1pfPJ12sahRzRd6NScduw1Wq8g6j",
  "key6": "4eDS7ELtk1wDZzS7KGRzZAwgTiS3r2R5ggyPJp8Md8wusXosZCR2qTb64LGPsRmkH8RFe55j3KigiNTFBtnzqCaG",
  "key7": "5PtCo3xUY5MYjFXN9dGZVyTLctzqMAvdBUn2PJkJY7y75xMd5cHPMb96fUKDLLHB8VXs8ArFcXovZiA2d7vs6YdB",
  "key8": "4cuhycdWVRsUTxjN3Ht8SUtTNajEZSZSf3bvMqYa1igxi2289c6BHxP4aZu7TxrA6N3GWcvJRwjb9s8KwUSHJzyt",
  "key9": "23ujiKF9Ud16Dcur6XW45HcsHgstmpDFEwkuThpy2mAqwgPzkFwLA7vj9jNC1qbEpD495BDX6tqGZuaWYpBNjcGa",
  "key10": "5Y8fVgi7bR6Cnp8E6cwzDLvKhwWpFu1S2eSbRWqb4MFnRMzUENRK6ASKtHPTtmPFVc1yvUDs9jSnonxKsCztpWLB",
  "key11": "2ToK8NSVAzGAzfdFMaDQDXgN9nxgUjjP4M5YsDEysFMFTEvK5vh9GRdruZSzY9YMv4VBLpZZUAddU3ucwwMcbXZg",
  "key12": "32p9M34u99P6B9s69jZQkhrhKHafq129tzbKzcztnHeNNJ8ZrqjjezwjrLS2zxTCYsmcQJn9tA6ZZ7E3av1gZcx5",
  "key13": "ezmGNbpnEk6cZUu5sypFvZwMaZqUb67m2PCaDuxgXNfBXFfuyeRQWGY42fuYmgsrUPi8RS2zBpNvAi4QgfBcmea",
  "key14": "driD5AEi3P2Cj3NKaUvhpFRJ9uRWGeyB6oEZNBhMVQJCbUu1HMpUM48tKZdmdcSkKFMVYeVjhsPPPR2XhRoHtzR",
  "key15": "2VsAgA9vsYxQp1ML43bsqiqDMC9TXRWke2zD43vomNFCqtPEUbXuvqxeRheBJQ1d9QUphTSEGdJLRZp2aEhcXG8e",
  "key16": "4hNMsmustFcPK6V4Rh3p7Kja9f4MidWV2fHGbbbjudcKXjCuG1n2GE66FeLeNP5kirYKdLEicZAeu3fUQLQhN8kz",
  "key17": "2LuYvTVaFyUXp9j5axngCZUu3Nb7rmMkmRF5yKimEZUpNCFePWQkDF9eQQ3xAxTMZSfymWt1i2LRoduqTCczhzxh",
  "key18": "4mUfGLE1xEu1aXPMaSW8CVc3YZmTGpNGjHL9bcvpeTTxRZ9R7LpkyDjD7mQU3JrKi7nAMDXdV6sNJdhiy51KNNEH",
  "key19": "3T3DYGNbPhVjALgqNRWu3SWYLjaEkUXj6HX9cmUP2AUWUM5JtuhkAAykwmGkBV6qc4CmiaA4opwWsszb4YtPnQd5",
  "key20": "m5uvySRRxeqVxUb8Zd4V6bNdhfuXLxrMa4zUtZJYeEEZHkcc9Y54f2LmbCpMQgABm2ZwQd7YNPAATE5mTo1fkjX",
  "key21": "3U54efZAVTMmxUrL5T76Qjz6rh5sDk44bagMZr9BMYMSKJXrRq7tnx76xE1NJZRgD7GSwSF7WpMwN8LnaS2YawHN",
  "key22": "HPVcsNHpiT65CY7ofMsUF3wA4aWQ8iof6ZTg7DUqVL5MvmxBJ9ndiZDfceXLAxURGj2w9t1B3xNY9irFDMMn34K",
  "key23": "5tWXzPsaYQcXdhgSvKagtKMq748mJnBi7YFDLtxjvQ1qakMyXAP8npdiCKrdQpivGZ8txfCLPBS5eFgCm6q7TCHo",
  "key24": "2vwZT9GXHDZd1mDazmVx4ieWwfWRmM4dzLNQ1sxPjmqHWpHs1RMgCukuvNN8o8HYrn5jAMCvnTPwaWqhGFYN9nou",
  "key25": "GhUEhDihC8AymFSYxrqUXhVA6nSrA1Ug2kWdtnoBECh8KfTbDSb6xmrVmZNzWpnzo6Cg6yHuKBx8efM9orDB1pe",
  "key26": "48ZTJtx4AomHYhuah3VDQ6NWaCyw2x9FiPv3jHyBMgYNBZF5Y3r7XHjHAyvHznocysWpLZFqWEy1oC57iGs4SxwD",
  "key27": "5fg4Cmip7LEqv66pKHLqVGNS71QqwjtFZjVzn13VGn11RFtJk1Y7r7ZoL7x1cezXscxpdoDnBe5m5rzhnrru5hDH",
  "key28": "h34ZatqdqNEioL3DRAnsYfJVHgxzfsUGx95sYytzFPmtsQ88M8jTo9k35vbKvmWEjywMuXPPLMpDMFDfhCkUhGr",
  "key29": "5Nuf27pEZ6eb3JF4CbwXFKNBGU9qDEoigoJDKMKuQjjotxRo15VJYCZzZJsisJTY9EmyF4mAhbN3buhNQ7wUztqu",
  "key30": "3CTn2Sonx2f6R8hTrZdA3bgj5yfVHfjRPgfJejNDWjw9bdCfjEt1hgMtqLRucgHgNnp32GjKri5kX2TChHgb4e9j",
  "key31": "4MdxHqJxuRNberrUMWcsc44A3tQ93CnzRqDiQ3YKYwdW6GJdQfUCkBXK5zWmFhd4c9QRR6chL74Kw7QocU4xgCSK",
  "key32": "3g48E3Ra3iamd2eqSaskRPypZ6WWXnCFjeqcQwzF18EqsZtjHtW1FtE1hqGMnRthBJCGR5K8RMeESGqX5Z5qVTzj",
  "key33": "2DFPtXxu6vHNUAkNso6Q3tTYYDXhZgnkY8HTeSdNgZC7AnFmzhj8ws5SjkHf14SRqLAAjviSA41xX5dzaibha43s",
  "key34": "2WRgH6TQJioxHzBiFBDMLvNcHKE9FVUTyR6wGP9mC6VqCR8QiaLUrydUmZcqMAG5EvwF7YNhyuK3cjTzUUt3QaXK",
  "key35": "4Dx6EuYm7STGeVg3LZbiWR8zNezLUGzMBpfaaj6HgvLxeBmsjxHht5WcNECT81dMMHnHGFazXojqFU45Ts6tFqqs",
  "key36": "4B4FQPK6Z1MkyoCvHatoNqrhTprwPyPturg9HRnYP6oG92uRb2sQSdzkJuj24oCJAt5jrMXbmbMKwH6ayh5bm2EP",
  "key37": "bomjEX2CFdk5PE1NFEYTwzpB6JraYVap12h9Dp2M9GnZWT2HtaDCTwspdJonb4F6SHnpKpYUCUgRdK9NLoDN5S6",
  "key38": "bZ8aHf6SeDuSi3VCZMUHJuXokXkXN7mrnQ8GFp1wwY5qtZfghoDmjDPcU1RUUXgp7Fhxrxt4nzTmJLivVCg3BrN",
  "key39": "37MFUn6au8zFG5SQstTyD7Ftv3YyghAJkdpvDkRELxJqgE4JEBaEJCkuGo9VEVQ5T35KM1tPP6AxzKYh3B3dcDg2",
  "key40": "4n137bfCGNW53QLXboQGG2xH9y5FySXzankCR2LLnFfybKbwg46fqgusUD35q4MAZPNCz63xTTMNnXjVBXhL8vpf",
  "key41": "4VFPVekveQRqFra2M8qspRY3qaQEToYw8VKFxh3VqjNXAWTzMMysMU98UFPYi8N6mFm6oFeWEPuTrAHnMBHwkUh3",
  "key42": "4wbmFu23qgL98iRiteyutphaoyeMTyLbVGhC88DwK9NvD1SJSTaqiWor8KdfP69FUGyB4kjnBeu1n4gBKMiWrZm2",
  "key43": "5skVWx6hvCZqQhkKhV76pJqQLxxtX8D6eeK6uXKVQGWwRtWMAb6nGnDWZsmFUo2frsUZs4qwNdVTst1e5Ht5PFuz",
  "key44": "52HCR7NsQzevL3AopSyWtqzJFtKEtcEHbU9aZbMgLVyRVJm42HtPL5C6vbwLkr22WBdRkie9RXaxSpWekdQRQSDW",
  "key45": "uXWWc1raXJba75ixdMmsYq97UySuo17QoyQXSPRE1WbVpgjFAMnz4EuyCqMnfRy216kGeWDuPnXe52Jx1Hg7w2E",
  "key46": "3F3mG9KRcNHR5djBRaFXEMtzRmiUAW4vhuPd8HjLj97bVmeEfmDVV8fr7BquStiTTNi2bE93cwcRAGq6oUXbLjuT",
  "key47": "5YoUcjzAWiJHYkNvjdjQDDwMgFfzacdPZymwPn5Bk1iAhHT5vbdjqjF1rteLnyS1TzRFDkDbUZEUfFxXb8WNiUjs"
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
