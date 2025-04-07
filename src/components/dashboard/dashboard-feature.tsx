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
    "2tCAyFJV3Vhk2NB6nLm2poh47SDP1QK4Z4u2rKXwzGVCZxM3sAWKZ5iTkWQtUbAMx9LA8zwVaP9Gs2EpXug41zKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sAwE4qdAtEz5MDCwpwrc3Zz9M5fJWSrPJujDbE16pzVD57sRNRf4atToyeXsfUjburjxwAb23qU1mFuczeUfBiR",
  "key1": "42gw8kqy7iJ2KvTPdu5Nx5qaUdvHdtEGMwj3e9ZLs6KJnr6rYNzNE6pMp6aAJhW5js5RisGh2kR9UADaRM2qAEDh",
  "key2": "2wT3jf9vLy3yi5TraAmkYVALT3dY449qt7XoxRzTt5rdYYA8Ppk7j9ucrNrsvfF5d5A4GvVi9YX3UWJScZufKmfx",
  "key3": "3qdFefo2XJJiNSwHwHSe32wmpbEjGgCxS1qDQgMDq6gVzAD4sqDMxR1tA6U47SLV2zBupyfXo4rcfMb8cuNoobfa",
  "key4": "3L7T7vQmcAq51JjpgzLzKuTx55EaXN6RJKixorFxZ6wbWAxJPqJUtBPyXwfZUXKwMEpyWjsurZ43WDw864p6617P",
  "key5": "326mMTDVw9xdZhdXetHzt3JxXcVAnqgyV9CXZiqdLzS5v911RpDkLE8ZAmzd4mBCzMuD87ktWaMRtNxdBy2p8Mz8",
  "key6": "3ZupFVdBpdEbtF4zDPuTUw1zhRveNzmJg8qYeiZepwZtrfPHr2DtSYAVXNJyLSkHkR8DUm3PfMy8sJ5cJYYFPmtM",
  "key7": "4b9K4PWvohViYtFYYh4KrCPFnEy1DkK1ion9FZatcAXTMLeMXTCi2afbbMGpKjWgwZ4i5rZDcKmmAuBnBEcHoLMP",
  "key8": "5i5GMxRUyU6uNhjHRcZ9dLF8cjf171pTXEwb2mwxQks69PGgL7co23XDuURHyPRoLi3wWFMBHMpdBcTjrLD9jYXp",
  "key9": "dwdEPzMaj8CShMKwSYfFnLP1tq9sMHniMWH6hpBz6k4SG7RYXZ69VUemxASsx6XCykqaSHasa5d7JeoxyCgfcZY",
  "key10": "4tCYGy34iVzLCTSH4HjhqQgZ9D576VENo1G1JGLUNBPqngZytc4bdewRKKGGCLxbdN1uKTwRSrAgGqmLMuwdh3Pk",
  "key11": "5gWf962LzB5EcYEyTyC3nFdMDZzqpNDHMTobXrvVYwfdcZRUoAH76abKedd6Lo3t6DfqA3SSDPxAsVS8CY9MwNfX",
  "key12": "2p18m4xQRT5rC1DibB5MBnSdZxngpuQCdskrPQW4kkRQ354LtVVdKn2ySrjNo7JZQ8vg32ZyZ8aoAUurXj2VT7Yz",
  "key13": "455P99MXSyoYtrF3sarew8ZsHZiNXXfMaE3PN1uJqDKsAjtRU681kXCz7iSMarUmEm4vsjdQac38X8KEGdznTTi5",
  "key14": "5e84ushargoEPA2YRJ7aMJxd9ebmuQFKTzgemZqMgyBzHzQJuNLydeinWUatXAibx1jhHWWTyGXXAqZ7j7VUy9Mz",
  "key15": "2frtRivQU9EzeWjf7gTS3pVpDQePK7tejYizDgey4VEQpEiHXdcz9y5waXG1rjzPXo2tbR2LVLSe86WyytvVyFNn",
  "key16": "32312Aac9mWagNnpLB6LqUq3BxAGK232xjmdPkYamqpm6GxFY1b6ft86R11teH37EfXREWoauJbB4PWtKnEHFjxZ",
  "key17": "3XxjMnA8b67ShgjuGSju7MeyU2ubDALYbk6aHjM4TDDWYTazdAtTfDtgTJo3KZP9CgQefmsPyqt1E4P52nQihcfP",
  "key18": "314bwYcMuKz3q7X5WZaWP1tvN1eaFaJC487jNZ8JP4AStfFoS6zuFqhRErz3eKLSTjLVzcc8gsxC3DbCVWjVqsdt",
  "key19": "4fsxLCi1km1dWtvXxYyu8HVwTN8PGDVcJDF22hHmUuzdEnKPnWUvCP8DWKH7NpQb1aDGJ2FLdsY3q4t1WLdWDMu6",
  "key20": "EJK9Bvm6Hm1RYrMFsEycJ4ZaHrDcih85y31YWkfHbEqf4J6kGEtapeMgTaaN8gsxpe3QdRvZfFGeLK5zXXzc1QR",
  "key21": "3eenN2mnCTtSewBgLZEXMeHpAUPqAnL9XbaqACxDMutBRy98Y7oTvKPSbA6wWvCZLEZaygdAysZsaQoeLBUQkoJr",
  "key22": "2mLdPQ7HCWAjA4FjSLUZipBGMJM2nTVad7AUXwChVF7fqfbs5h1dkD3sCDLcGcj7fEMoLoKaV1ipspBPSru6xqQ3",
  "key23": "57AYY5sVWfZp9D2G1pQeXixzKbRxfoKZeBi9pT8QwGXarhUN38VVjAarmJbwDzitiP8y7gLmMcTKJ4WVxC3HXrPw",
  "key24": "c7J1A6nHqjsamHEzq5szCnxrKTXvBVvQt6WVY8fTeZcijr33mywaqMSTfhbdFBfoQ4dDUbVckgwiqSsX66ZuWbS",
  "key25": "5TYWe2UiWhi7xiKs4SSmoXM49M9LhhfNbuviQ6Kk4TgcSAEKojjing6NKkfd97fMontN7ru6Cb5WRRufqn9aAjpq",
  "key26": "3n4tA9Svchh39trrVY1rsF9c54M9qK5LX9SdmtcBqSsMndFSkkyzgFc5w3csJBewTX6Ku46qfzwsJyMxyxYzEo7Y",
  "key27": "3NryWKasZA7Wve2xfbohXNJqjC6bmqRbTqfwvvCQzWEvw12JYsG2pNKRYNaDXxrBJNSjhBckgzFzAPyPu3QQpsdh",
  "key28": "2ASkSNcR5jrEBRFWWdU7ZYDQK8X5PuEP4SKJv8SbayRM7ZqdxjFFLFe2mBFim1wtvZvg8tNyVRbnzpFmKeDUCqMq",
  "key29": "UmZQZW7UqRaeZ5iAXYUfCud6xaxY92eHRHNWjio8xjFGntEz8y9oSCcYGoKTQzB8v6th8YyZwwCm4UthdvwfHCQ",
  "key30": "Qgjddqm7QuWthHH4UPjvMvVUVteU5dyeFiFXmCBzWbfvUTyJSnw7TzQzGgtL7dMweqK5X1yMKvTDub4qP23K53z",
  "key31": "T5ajqE82MdYxD72TvL62gqaAoFrz2NK5RFTNUXC6NQ9CogQbjcJw7TWwgZMEMQAUaY2mkNzRgQWN1b9uGBzXKK9",
  "key32": "4G9RiqGEWyhUiv8HY1iwnQ25Ja4pBKcxX8V793XrhkM11p2zWGni8SDBHn57GQdgBBqYGmj12DySBSSWsRM794Mi",
  "key33": "2URutRYu4kN2o1QTFPTxQc8NN59Y9NAey87doZaX4aL4TVRUJCG2L53rDgChmWBzFyc3c985gwBcdUj5YeaEbyBF",
  "key34": "52ZeZgXJ5R3gdtbGEeP5puv7ct3prnGR6xELMvG2cZftLx2uEgUFmvziLeWi7qqxo8bSmNJPoWisvUNKcfxYbSmF",
  "key35": "2RGm5iEMtD2cocBSQ6ve3n39BkVqKHVowSDmcc2VvAchWKwsmG9HUtPtWGgSFivJjsuJJzEwNcbhgnEj19jYXQPd",
  "key36": "5ARukmNM7wzzPtJL9nqQsSD3b9yYbg2Ckh7rNJQsCcMWcH8Ad45i2DALifVYoYvEHcJrJT4TAQH9STDYfzTh4vLP",
  "key37": "4bPWFF96qHBVEBkhNDm2KauVTa3HVMrE3x1PGDjUwZJEJHsCY1V6edHCFK3bEwP9YMjHKKKDP97EZYTEPQZUhUFc",
  "key38": "4aZE5v8FwZU4R2dqLY8HGPUv11ySwSBknrYHF7EipgonQGeaUCKuaDiPw7nXUYvxZ6sCSLmomqyT9eaeWuu9AzsQ",
  "key39": "4zPpHRd6uRiRRubP4QDXpeWvbTrbZkxJEzf6asieagR4Pv1cXYw1WyW454ZsPJxw8cV6fSP5qpCMYok6GzjWPMMQ",
  "key40": "4axaThe4ejBMKTVTEDPtJ1Cmpji3Kgx76eXXV5nrU2M6JV85LYSAe9uUA2pF887WjmtuyCYW7E1VPWsfHipjBHBL",
  "key41": "2cbURH5pk3xFxDU4RSVd4aTQ6MTEHtaCwE8Uz9oL3DTLHEYmTEQgyJaAdCUgexbnkdms87fNMC1kWmGqQAkUifbf",
  "key42": "8tFXrR79fscu2h17hFdQeGNhYLSmipX5hXavU4w9nFFPvxsAmmGk7UUpSStjefgKi5m1tWPS9C6sdo5TRdngTXr",
  "key43": "ZBFrapqnfFMk6RvegBCwDo6nuoYfDLoN78aCUTHAET5xrS2hYiwyS9JXX7Ltb4jyPwfgqMidbSBG9nXQjWJ6dUD",
  "key44": "5mwcUSRQucyQNpt67SZh3BWr1XhXxXEBt1X8YGv9fvvms1hTGxeXdUK5PB4YSRVz4xFCyueChh4gJW4ZerkPBdvK",
  "key45": "3YENPewy19x9KM28faFRqsaG5CPNjAx8KigChjPnMsorWLnLQzpLq3UszkBddnyEtxyLBBRif4F7k87nKjQzMjSo"
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
