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
    "57ZXLiKdenwzEzLTCQWqUnqmG8Bjy56KknhCY9NAFzin9LykdBCkPTLLmc8SubKM6hY1aLdKaRrtcDtJ5M1NTaac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHsmVkegSjdoP2hUoWeseDdQ7T8xbzaYAwsUgMdaRtARyVdP4t4gs9tXXbiEm12H3Yrh9LWjG4mRs7MoM52M5fQ",
  "key1": "3ppYtxfVeXuP2NB4hdQGdwMjbwEJwPrxXNPSnMdsnhwbsbbxMqPSU4TXqeXaEpCcKqKZkpk8xCLdAHmT5c93A7b3",
  "key2": "4oq23czobabnPfnEjF8age527VDMfGajoGphYpEBX8ixbVrm4MwP38scU1dCoZQjgZDDVnsmLN1ynYAgDZbtptwQ",
  "key3": "pxHvJrWuYwMJS1XPckEPrqwriNWe5yjx4nb8cmMRJZPZ1DvHfe9BGFxDqSUxt9Me7wbz6KWgJ9Z3otneTKH4sh7",
  "key4": "xQXRofDGy5QxYmtrS8DatR8TRR7rYFFWZaFmh9XjF512Hz3eJp7wtXU5CG4xfDmgybUgSe4C7qb6GwAXbYnZESP",
  "key5": "41okd3hjNc879snsnVodZEcaHHDrKmTivpFRrhZrek2tFF2NUK6EeURSk9pEKMgr31fdn7n6hge9yFVm1RV95Mgz",
  "key6": "GeF2xsqmCVX6AP9u3wCaU2Du68dDXjfKNB9E2xCTLiU6cKTU7rgvwfdEwwn9ruofTcXQCh8wkaXt6cTc2SbzpKt",
  "key7": "2C8qkEeqBkZxAciHQDF4Q7LVwxxPgmnnvPuTuR68yvLvSeFdhFvfwvxMQvukmGqrjcJ75GZVbDNG6MY5fuQtwc2X",
  "key8": "3fTwUyjqqRYcisSzavqm4TkBsBrrmLhfz5MwV2dgAmKnJ9AMzAky9FN82kHyZgWXCVVcJpDCd73wKoyn8cKu55ta",
  "key9": "2NmMsa6fsA7LszkeHZXQdzjGSPqTh91Q3bL1yRs6kn9YSDpDJjKZmjWF9SMoAVVeDhoEqFEPT5CQJzZe85ETJdjp",
  "key10": "Ks5NfoGLMtBbamCfYXotPGsfrRHJdkcaYBobPuotf9Bn893fkmGxetFGGdGwVv8UhW4BXuQfGKZiWhMFYog8LR8",
  "key11": "ATNHDEXrbpzTUXSUZ8neMzN9hzs7CjmLdddaVZTK7gcGJ15NxBgeDwpRmdwALn4825qFDxwr4Jt8ybATpeTEcdS",
  "key12": "5piax1se2GUrtx1Kn9WvyEQySKyKymwuW6h78M8XN97cDdvNKzjP3s54JRCx7qDYbgpqwT4TuVAwAdif7PCSKEY5",
  "key13": "5s6oHoons9mn5SWh9RtYHbxBiNRzdbTtbRWQT4eE8Jx3xduJc8ePDRgBYTGMnYdJvAMdCeNUt8RB1W3nXAYKY3T8",
  "key14": "2dv7Vx76D54FyCpFe2LQcrGoFv12yedNDQG8h4cSAAyk7u3uVz5mPyJeCd8Z5ZbXrFDts7CNgz7wdwGdXQWaPjFP",
  "key15": "2CBHcM9JG45fhPohML1Px3Cx5MW9f3DPe9mwNZPCMf3uYq9cnFRcYrMHiry6Jc2eQupsJ7kBrsAMbNEMeNVrUVh3",
  "key16": "5kxcEb9rVsSj4rFCvcDkNe2v5WRUipcampVAFr1zrQe2MsFaxmSUgBzZHiqV2U4jBQ1zCsxwj4bTc1WCuqQLsC5X",
  "key17": "2B6cVqpjLgFopYsGh1HsRUYdmjf4egnmvtHc5KiqgZuADbezGtL4WTudiwVGSgzAecoCsMSzXALLtoexCRstBKtW",
  "key18": "432nTN8YTboNNHWsHoUiStPDvWAkCXfVycsm9GoaGtJBARiLs4y5gRsN3Gxh9VpUTkMU2btHBHznxv6ohbjgYTBf",
  "key19": "5K2yd2nCw7fbS5uwLzhQ1KZR7CK42Ghi4CdhT8KrX4PP4TyX5H8WyrS1R2tggDiS2KDctfxUDXm32tdbcNcyQc78",
  "key20": "3hhsyc49iLTnoSae6baS7ER32TVswh9Qe2ELLDKZkfowTaHgDWTDxVKc245b7GbDV1WmLW2gjrvoY9YgC2o8Gos",
  "key21": "8U7MMVa7MiUtdE83DwaZgm6uePRstrRJySKc8CTnESQ4XEFxesQQ8n1YPMeMBa9TyqxozwVDc5cuhWTeW2Ntzgm",
  "key22": "28EVxerDQi2Rg9XTLuYcdDKzoXHsSDgzFfgqE9ZRkZeNLJegMEWQyhBtvfSWH2jjJkf5Xn5A9T5MSYMpaxfGXQVg",
  "key23": "2U4xtASag7HpJfGZvUooErwPQK5JyYWmAt8rA7zbZSQzEdXSJEcbPWpUoD2WqnJdGL3bSiJoM77MzzgoPAYZdgd1",
  "key24": "45cDtG5hUpUeZtsPZda3ZbirvxUx6eDXrXjR7YmakCgB9wtuYv3fQHCHEFiMvbQpT43vm9hgNZdA5QATtk781Vk7",
  "key25": "64snn4YiLF9MJLU6z3HQWmk1GogzSE9v32AZU1X2MgxZrCMjSj5QFpWySMR5ShuY7AqBgPv8rQLQNqM6oUZckADY",
  "key26": "p1tryqGQh6eaC4VxzxMHwfY9W87jvrZ5tXbyvST2uEXWjeEQSz98aZNTid31RFvaAcPhUWNGjz3GznQejsKM9UB",
  "key27": "39PAQPo2QPHc2XeKajERhVfnj95BdoD9MGTmWNr63CL3zrxVSsmunKfRVNQCSjd5GBUuNHB8ExXLx692pW1qdeJS",
  "key28": "67eU2Jf7hgDSgtf78cqUfDPmNtFA9p8Apr6NYhgZaBXTfkjf2GrnrVkEYV4QwzifsHsWmTDcX3wXnzrLw8BoMn9P",
  "key29": "EU4xWNDaUhSbvxo4yGaZowFXjhMNPJTekae1KEjgYsoNKanKnxDF3as1Rwu5kGmBYY7kno6gn7ysH9tE6unwn4s",
  "key30": "5nZmtKxYC9DAvgnPC5bBVcsZGW88ACPnxW1sbtZ92KQ7qMUYSmyP87gJ6WH7KbdnPHzSuyGWyCPUKDGkY8wiCZYm",
  "key31": "64qR48YqXD7iT83E5vcFMoEyyAVutGoDwMgL2pmYaL7JdBcPeGNon4g4ZeXz6BSfkaRYxZkJaaDHQnMHL7GPVUJN",
  "key32": "4ni9YbT1gKEyN1nJ7h1PYgsH7Cp15JiwEa1nHQjR3G7xxm4VvEzVCenEZbXXFoXWiBUToqaRzMom2W7njFCT54zm",
  "key33": "5zAMZg659rjo2UbtP9x8yo3n4pXvJbrNEgm7WRhBy2acGeuB8bgHuzJJJCNEzUJ9BY6spPRcnLvUHNPP4RZbhVhK",
  "key34": "4Hy2gxfEwgbgWm9pDBrktv4DiFxKXcincpTX4Mg244ppKetfuiNPbDR2Hm2MdtVKVKcczJyu12ZfdjmtR5J8HXAk",
  "key35": "2rNoFg3apiqcM43fdJozHjULFGbJ9JHV7YRdjeLoAxTgCDKL5b6mYhCQjxXD4wq25w1hg9bhsXaAmKAZPb2bD9T7",
  "key36": "fjFaJ44Dv8YCikt8nXyPYkDGueDYG9im9LWDRPctEGXWg5hYL9BbHzpuK4yNs3XHziNECE3YafCKMX2U5aBwT7V",
  "key37": "2DinBBjzjq2fTpqEsXscnnbEMdkqMuNHr5bP3knJ2shbWKiEmMFAsEPWKCNfp8Hn97F8y6mJv3zGmKGYUXZJQNt4",
  "key38": "MV1BSTfuExFcVvYxWuUtoCBPpsxQPYz1fLuSucHBQMWezjqUiCbj2ZUAQoKBabsUekWZ9aqDexkPX6Tydz2YfyU",
  "key39": "21Jvmape52SFeev8rkZ1KGgoXHuz7npPHF6pbmfFfPK6Hig2pMPNsN76bcVmyssyCDuo6j2APNF6ifc629mKPJWF",
  "key40": "5EBFzMmGJkqxBDi9vyrsPAXRxpczaA5TTupwQHAdndLU92RJMBiQMtxv2GUvEECsE69aUkgTrBzjGSa3foNw2eCF",
  "key41": "3cxSLK9d24Gkgh2m1jKv1qzcepjGabuMix7ACwtwv1qbnu91i17Z9drbumyQHZ2MG21EWjADndh2v8hLAAwvdB6J",
  "key42": "2hL3PtrXaE7fdeyydN4aEdD6HkcTkUgHnst8Kw2S2k5TENiV5xzsp6ymS7Jn6J7XM7JCQ1PdvfyTs68wx9U8MNA5",
  "key43": "36SvD8Fi5Hyi3QeBUdGgb4X4eTCtwA5JV6S6XqFxWXA8Y2zjcLmGBBtZ3EMjbARxmib4moxAQMyUWPYwVPG22V6y",
  "key44": "5vtkLLrMqfpQnY1k2soKdq96VkW2G6R7TCyLqqybNaTK7hALyPHhoEhogsYQVQFfyceoaXcZgKSrvrcpmNAqNgtn",
  "key45": "2sHUryvUDm3P84XJM334QemTYpK4cg54rdyUjNoH42JkVLtz1rBzgKvssp6hULpYEuqZW5yoH9fxwfURwDzQNg7t",
  "key46": "5GwYiq45ggRwR6nNnpgwBynE37NFZYCnV43tuk7ZYMB4r636XURWTT6J9prR4KPPndqrVACoN1zSkpnMsBUpUTw7",
  "key47": "3fBdkx8CCZLvtxUe6JwsEJk2s7t1Y2VP9mcMmf7vrajQdFZQKP2GajS7CSzejUerF1fjrSuZHsFNNgj4ejJjzV7W",
  "key48": "3NgTzxmj2JMCxTEdtgB77RUDqxatdZCWBZMimEzZUF4e92cQHqrc4rhYnbrFm5ThsUHdyvDikx1Qz3dRLM5oC97L"
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
