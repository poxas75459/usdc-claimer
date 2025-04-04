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
    "26g41J5hroErzdrhWa7Qwj7VqNGwdsANtSYCdxTQXMGtvWSQfpissBq329JBPxUbApiCyub1x4Lia1GBCMFFtZHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U8EDW6rCr9W2TLjq26uxXVuAjVrZfZ2R12YXpcuauoToMUh1oAf68p4ZakNd8N1TBvi8VoDSpURapqmA7FjHo4o",
  "key1": "5AATFizokCUekKVnhpt7Hvs5K1vNC1iC342pLTXvZT9bjE2ZoFAAUQ6vdPp1EjLK68JbeiBHNVMSrehMhi4KjxDp",
  "key2": "45BWYvHSkd4gizPVUTyuD6WgxYzzadMDxUroDzoP1SEKFgdfpbhAxtCE8gewucaU6EXzJ3oDFGdG4p1Z44vWQzai",
  "key3": "5VXS74HJU9APSiVfW7mK34HA7yqY5q5Xotj2MW1SPZ7KhqfoRaRR45TEyPywCRrTPPwV8bgbvZFns8cmsstx77JT",
  "key4": "4rk794oYwLhNTodcGKHG7w8y7hPAKpdSygekzTtKPzWrs6B13a8BGYYE2ykkpBEWVihPRXXGirCx7Wpf8doDmgEk",
  "key5": "43voaten4trot8pNWTc2hAqVJKkC8gNzhyzYMPnXGwCRhSYgRNkrSNm2EFJdLma6N2vXLqiAor7b21srxhs3YiyW",
  "key6": "2WVjqvQsT6K3e3w3Q9du19TfSPADK2by6FmKgeLaMEydNLZ3y6RQCk3errkzLPavHViffHs5nrLsdnJu9hEg3nR8",
  "key7": "45YrLMufnaxBsx5Gv2nXtifFjE7WRpzx22RCjVf3Ea7YxNBSG7ii2zKDC93jEqqnW351B555A8Ycf7YPwsS1T3zx",
  "key8": "2ARGQUonLtSS3a21JVtgyFZrt9hvaVdX7T3iUqxMDM3cu1TiPnPt8t9aLMgLtm6gQeNeD17DK1K7yK8PhjTAXCgW",
  "key9": "5wtnpQFQadB7VQfUv48NJaH9MiB4TKVyuMBux1TDQWV5EdS5p1fkEoVmKpGz6tfU31Wh1CowexBdHt28DyyeTsM9",
  "key10": "3QDKqsGhVoDMpHA8knima2bjXG72J9JB4EBMSCM1k9m8zkt9BfeSNbLXpT78W4Ez4R9qQCjsQkKczdeagkdskTiU",
  "key11": "4ZowRMNA9txYpDhFstx79PmRDiFVthAGLQrHydbNhUc44kLFai7oRY3eDaT6osmsY7TNAt38QDYobNfjQTAF3ACi",
  "key12": "UjvJZBBYhQkigQHfXu2LfXL6Uz2EZ2tQLHXLBzKLwyvRaKgLHNqFpev6aHeJejWgzMnycQ5oWuqyDpM6TtXeMgG",
  "key13": "2RpjBijMJvqsQJExujs3cnCniTMSSM3DecuTYgeEYDkhUWvMjb7HyvkzrPSBzDbLte4gqUwShcYBhHTSLrYrSAp7",
  "key14": "5ciExKxoLpemKpWg88gM2q2LTFf7EvCott5bYjDafHPVtHLsPipEsTAPcSG58vb99Jm636Gc3Pg7hVEfbtDS4xVT",
  "key15": "4H6iwg1hpEfDw2Wg9DhfXBDKFYfbWDunsrNFGbHem8goKLxNph6cysnmiTNJwQfXqJiULgQidCohSZRjXSnJ1t7M",
  "key16": "2U1oh8fwVaEC4YvuyriUSaaELzyy8xi4hMPQwB2ARYr8EbwYgUv89cwsBh8TGkqSC5nbT1vQwJQsoLuX7DHiGcTZ",
  "key17": "64saRNHwd5SmX7yT5w76xPAKTgWG25bheYoGLwPiYAzdPQW7pgmNfhtoMKyEM2VeWryMqgFzeWTdfVJMc4ctpkR4",
  "key18": "5HUb9fTG6eVqRAcHHh8N596vUQEWMPExdLfCQB8DSbBm1JyDF2DZhG4HwMUUyDWe2WGm64HUYcZHSsdY2qVjtwQB",
  "key19": "3bMUW9mxBnnTerAAZCpf3nvzs4e7rsbRjeGTheBa3AAC5joEid1DfUEhxH3e8641MAbSANov39U2p5Pe5uMCH3xy",
  "key20": "4VYH4QLuM1TmmdQAH9Gxgma7kFaf9cGRDNLtY8uSwcsXy87zDhHgY7t4NWyXLzfSpHKgmguAETPC5CgdzWS3zsJb",
  "key21": "4VRBVtcg78e5eWZdx3MTBc8bj3vW9CQxjQuQjkVQzmoXFiGo7XRBrn1ybwcKtEtQbJeZVoixqe7StY4Je4asjXpT",
  "key22": "3CeGxx3ACkFAfKZUHjLUyAbRdMV3HAYBQ7vQqU97wy5qoKgJM7kbUefXyFe4oea61ErWrkTZGkQix8kk2fjsmtwZ",
  "key23": "cXGCNrfzQRAY1eEA3Wj1Tafqx78iknuL6kaQeUv1nSQSzXzTaerut91WJYqVqgy5JJ4q98o3uckPUaXN7Amw77f",
  "key24": "3X15sS6AzfEuMciBVzxSPbqopvLUz5ytEH3LDbx6ujaGbi4HdMQY5rkR4dnDPMugvWSYDSadADXs2QgPAXmWZ2x1",
  "key25": "3XURHhufSWgWon342PSihcH2yixSjmLhiG4kTr1Eqjs8xmjA5EJZbyDybnuwhwVbtUySAhocQ4nUe1V9UcwTXiAY",
  "key26": "9CoHAo4JczV4gnBAUK1kTB8vBoiyjBB4ZPT1WHj7NV8umYatfTDHWrei73Hey14ggFxPXkik7kChTpnNmhCSTVH",
  "key27": "3yrafKCUtaDYMYWihbk9U3z29zs8m72WafDv7VwRYAhx4JZijH7ANJSg1j2P6GrfAdE1ssrgPdxakeBCUGQapidS",
  "key28": "5gRp7DADnJn4tzdvxCXsCo6rurqCuwxTdM5ePidX5EjAqJUPHmosXYneCu4zPWNahv4RLRV8wzP36bWNhw2Rsp5C",
  "key29": "41DNUcZJdafkBK5Ygjk3DMs7V6FYyQMbeLjcMKcVkK8rk8t6Edho9JZxKxv6oqpenAxpf57CMvj6HxaTxVWRrS1R",
  "key30": "2hs9DUmWvwoaw1YEWmdWreRsLKaRaBKmxisqbcMV6RuRGXuyUKNwjuHDhK9sVo9kq5o3kaXPvKju7v2EDATK4w3x",
  "key31": "48vpGmxXNGc9ABK96Xr2GYJeTue49rVziHidZUu2aMMhhPSbpoyDRLPP4M77ULXZbzqEYLP5YeGMcbdg5KzHYz95",
  "key32": "p23kpytFiNigT6B6nMU3TsQNfGbLt7kRw2mca2h9FPnd7um48PJ4SYh1DmbZ3nb9fKwAvEqWXi4NyPH3irbmQs3",
  "key33": "4kkT6PKqeC5R8aZcq3whhLGswjyL7CtBF9WG3rsFjbhfrPUMvN5roM3SFigMr4gkVRrXEx2X2GHAwDmGH4vzfExQ",
  "key34": "27ZDkihPS6SMNGYTPr9NLv1voJCZrJHqgbdWjzvF5uAMVtjadWCASCc9GNPkRjLsrTKpEB93YM4HZgLnTRtEVhQQ",
  "key35": "5hzzBgaC59GJ8rrEe3VT6mnNXCp9i36gBzvC9gr1aPKbQEjkyGfDT9LqoVVFFE7whVJLptErhKUvVvvegoXPoT85",
  "key36": "2Wh8NH8QgGf3sVfhhXebsNp9yp937uBAk1w4RwgQw5FU4HWTrzUn1CHhkZEyKsAXLupP15SpgGmkjJF77bY8CCMa",
  "key37": "5k9NERAPf5bgHihQjHrafJhRNe6NQb1xJNrmuBMsqFxZ9WmHrWy2z7owrfJasAjpoFwxo6BzDFzRp5pH99qNP7nn",
  "key38": "kWZXDeh8XCksqhoyhsjFLWZkCdnXQZKuvcKHUHtovkt5XYv9F7zqaZYZevNqAVo7DNdW3Kq42ev3oK5QdY1bixH",
  "key39": "5uh5k71gjihtcVhgjQyLdcb4CJWz4nwn7AQcQKq9kyBWK8CoiFJWbbx2exprCqWz9K4xFAiQCvKCi2CJ2PZmyvZX",
  "key40": "4icyAyUDcQWdo9yHEbmWKBVTeiHq6ThNjQ2vdnJh6wZwXqVXARaCsYv78nG6tvurZokyD3QTYHAJcWjsExKNmtHg",
  "key41": "jAK66mozuSybbH9iyTigDjFereWJaV7Sjo51qEszJAv1eD3F61cKHYSiwpx5fEvEudsAJNuuVcYgDfCPjCj6dRe",
  "key42": "3bcUBvAG6pnnRLkjuhfg3vLoJ9qcpZCWGsXi3YHzwojZYueNzeBck8vRZ3wU2UkS8x1ntwxzCcmnbBvQRJCDMLUX",
  "key43": "4KgSUmB5rM4e3Qrd7jKre2xyamjtZw7fkNYDPAuaLNCDbiUsFisTDr24wqU7CMDGbAXawCu28MNQPS5gHoxvrLuT",
  "key44": "5Hz2C2u7QzHt9QvrtfZLV9ZQJCF9ZcfUi4JC4p9beQneHX9SPpEcGNAPUMBUiG9weyjrKAnFbTBeakoDGjDXP12T",
  "key45": "567det4zGbZUPVJBYetjLK3Snh56WSDNokTKPHEGszQYPGF8Bd2SdAN2mnxdr8yregtH4nDH5Sgrx9X3E6aVPtox",
  "key46": "2f3cr3bREy1RZAvNTZ3EmBjxmkqQp1pMuu6wweNSmZ4xszof27dKMKpSsvtn9krEHBuSqk7zpKiN8Jev6VEgprWf",
  "key47": "3TqiMDDaLWkR1cB1vxEm8z1JFeSHT9ASW5UQ5HjemraYb6LkdE4WRin7XkE83fhBQKismvCaac2mWutkcSV4cAQK",
  "key48": "jT4xKbLE4fpw5TymcP9ziALiYMyd3px6o64joh5Tsxtj6X2KAs8eN4yz1AVb5NRi94TXt8vS6qJ4rCDQBkF4tXK",
  "key49": "2vNxyUtMfv6GZEVvFfN6fv6axB71Ccdd8hhEmjutvKztsxecpELncGNJJuAToWjwNfvbMprBgawvJsSUmQhAg1pL"
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
