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
    "53z77wFv7AYZC6zq9NWQL2phQ6wuQ9YLdtnUatouukCZKduyowE2wDMWxkUAP56xJ2ZoU7G8JYFsUU5o1bACTn45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JCJ4TgxZfHhE1PiagMJbw21tEwXW35RTkPoVwAd5zV7ENGHNGQnc1eojrUaWdpkRLeUY6yrsAxc2oC8L5pc8HTQ",
  "key1": "2JWcoRckPnoXdRhTdtqvAwBrg1LUTArtB56U77ctLM1FpSb8SVQZaGsM2emjQpfAthzmqu2uTvDB6HdtpusSXtDj",
  "key2": "M55UbyDeCZEdu3CCHMf5aUzTfy1esG5RLUTncKfRYYonGMBvLZbJ9nXTLwhTUeQ6CJQRKCNWU3pT5U9VGXusjz8",
  "key3": "4M3599T8RSLkiKMM8CdLQNXzdPERSf71K6udH6v85o2qT6tw3tw5D4hJV9kTTxDmkdsk47cLoSdXXcjWfs89GAPH",
  "key4": "12fvRbb3qPh2mj1TPvLgehVju5DH7LDf5XPi1sfvM2BPGKPyGDh1x7MD1sRX7mHQC1KH8Ufaa38i3SnWWRfHX4g",
  "key5": "98a4XgUbh97JcgFwsp7Zv8d6abEkWZvzMhr34Bwzzue6po5fmUo2CDymLW1ucsrjruHc27yN8FdfAobxTFCwSQt",
  "key6": "4puSnJnqbkrDkC4F3RaHkdpvb6oZ3PTJXoMvyeHWbGbMcyaLSBMpnyGAGqAUd94ZtfnpPFHCM9otWdcnyTeHJmLX",
  "key7": "5uPXSvVss2kCMbh3T1boTyBj24VDFAbKmm4FcZefT3hhsE1sUGku1T1Nff4jeyoDbVQhQKwGVUApzSpuYVfF6sox",
  "key8": "5PHBbVTyT6XEwqfmGC3DbqQvFeCGxR5QDmGTfDgZ4g1NN5u5SnNavLhjzBNnjrYSxadb3pKSZMt6wQRrcWt4ZL32",
  "key9": "5RAN2iNSV9RPqqzjaHrJJGV6bHyJeeumTmF5yBXngZMLXL8nvWjwQQyJuk1hJ9Mmg6zWPWRQQYnqkDrrbACQXsGy",
  "key10": "4NCTkDzT6tE5KQnQdtSRT4VeEppNEDgvyeVDwjixw1WtdejBdnqguuahQrckDbQTsisLisb6nXTmHAiocmvMFHfE",
  "key11": "42j4iqjWU9GLpLpzwTXGFpf71L2fy4v9QA5775kpTAowevLf8cgcqP5yPoXrxe2T4wHNZuFWbMr7tRpuMSvmEDXy",
  "key12": "1uBvhyy9kV8FZ5K3QFCkja6hRuQ5MPEvFX4BL4ewzNJVs35uTpfCUz5pnFknsPvA9Hj8it3gyRAvtnzYAukGtks",
  "key13": "Y3VsXGR5CAKieV9DDUiK3SvKHEPziV51Rr5SY5nVJzhPAroGTD4ynvNqLbgDUq3o6dP2gxNmCnWVHoMrgRodEfs",
  "key14": "2iRDozVfDdoWvHoL7UU1ty56jRpp8uVBCyiAxi4ZpwwNEdFioqfwfBWhKVzEFGGQfkrKEvQcwaCiPNs4aM27tNHA",
  "key15": "46stRHf7hFEfN5AoV5GcvRLh9PTbpuuZXs4vuTxqF6osA7ZBCwiokovgy4mFWPgGgdSRUoBSYJoWjLjYfWysis6P",
  "key16": "4vxDqyJh4nCN6Z8EVQyQ1ESMbs4zv5PZWfcvbCPQfjw63VGbZAcJnQ9d3dyQ68c3bLiZSurh8BPxB5Nmc6ydic8x",
  "key17": "2yNEg25NPRsLWTC3d573jvYGnBkwLXdST9LxeSJRywsFTXzeqWzNaU53oZZuXbc5xQqV8ScxxsJK7HXwyLFCKwWS",
  "key18": "64z7Wq5yDqziw9p1SciL8MS9QLXXFk2gC3SAvQiriPiYDrFHgFUXwYrLmn3pNRkeqNnej8sSCoegUjRFacaxzNkh",
  "key19": "2wqLKsSGrgabHgdHnVnfShmoxypmEh4LLKEEmeHHMXGz5apKpyfz4gvRAqu7Nc7chCnLYmvKpCFHcireVQDt2GQe",
  "key20": "5qJFgb9QXfJHXQTHbLMarG9FszeLmYKYeUJmPmbA2Sc3h3Q4YJrbGmbAA6nraqAa7VXR5rpcnmnxQzfh6xwgXzK8",
  "key21": "G3vGo8spEAm3LNqG6DmybxZJCre1tsphfqyKHo1QNFU4LWJXAoZptZRXktVW6SuZNY2eu1LBP1G1uYDgGa1cuiL",
  "key22": "3sQwccyKjx2hhmXAc4ZwyDbsz2cbLDj6x41PrsDCxA4NWm5acTWieSfK1oZF6UKUhN44uLc2rUQPwGdTEnvcK2hk",
  "key23": "4U2KKR3twnddv5VHAfLYRsisxNEnsPMkqwhp14dwHM8KcYmz23Cdhieyusg4J7r4dx8GU1MmcKQHo7USsy7FsUNm",
  "key24": "3JhZMCZfMHww7knin2ozfjUEJRpopUng8qnBrZmB8qC42XtofjrHC7XsRQt4Z9RDDrkgseZgy26n4zyCRvE2XvQp",
  "key25": "3DpyxQSWg1BJDbJ8iGschGJRLNZr56VKCncV8aCuCXH2LPNiTz3iSdXrVxW24Y7gtVySkKNrTTv3WrZjMUn3eJzJ",
  "key26": "2ckAiMyQujKj1qeg1y8NM7B9HeqYyqt3Y1CrNpqa33sv3So1S8sHMDmQYfw51Vd5MBTyE5rYYjDBpDQy2BSMf6fK",
  "key27": "pSKJAMHdo2QAoB5MpDADeVpCKzzYGrfNMFt6avigNsMjEdiJffLuyZbRGCH4B2PKpU41PaMobje2ZXBgqePLtwK",
  "key28": "5dFGK7pu3X3EM2Y9VvBw5FCB7k1oPWfAuxDUSUt6WU94HJSVEktCN1gGrc34dgZAqf3wkMEoaSphFydKz8kXyLf3",
  "key29": "5jBJktWZVwDibq7rUqitn8N7TdpPk2c9ApYEXLk1hVXt57pCJXgfUsSFQc2TFieWQhKf6shCnfoveixV2BbQaSwd",
  "key30": "4c6gawpCY1dobr6GDTNNHtRMBBPuLaWhKSY53JwpyGaTivMNvRFqsseABk1utonHPowxxZUJHuPxXz29oUmaY9Cv",
  "key31": "AqyZHRbFZEtJBo24UAeVW5h8wvxK8UATwq93NWrwCnkvYCBruyDDL7bCXEfsuTJti846AQBJYaLsN8B1oLy9v6z",
  "key32": "5obEsQ9rWpeAuAGdKSaA8UqipqgNtTxigboN1g4hDYkeHJ4oGkv8zehEP36WhwiwXFQUHG3DwYCb9DyfrgRL6WLo",
  "key33": "3KCfLu9Sz2GTJ6HrjFqtGNGXWjQS3kpqiLhBkPFsz41mJCmgqe9v8nhyfRN1ab7978PFT1n1ctGFBxuAA196zPZd",
  "key34": "3yweHxQVDfVUPzUGnGxALvmrYySK52puwreRsgWyBjnCcJYbubJ2qqf3iKVsxuYEk7BDQ2xDYPvs5Q7cxn4nYUqS",
  "key35": "cZXBUR9c9jRvTMbs2NixSo8Bj9nrmGH5i8cJCoH4PoiVorq5R8uTDBpThQnCD8eFC8vgcZPoTt2j8AUep1yR9su",
  "key36": "5jv667s8TBnZekfaJTSZapE3n9t2x1DQYY8JQVQwoDGmYGRGuEkbzwSi47mHhFXdDpVBFQkREUExxhm2Ls4zckhn",
  "key37": "4oePqmUvEJtgzvM84KkSk3gAyXBHucBHPphsbLpX3itDM58zEVBzMuXLyVyUCeWDUwP3GXCoXoYkqG9HtGGfwdTe",
  "key38": "2Byq89LWdauyEok8B4JFwC3c5E6D7f6cAKW1NjgRm3HSJMbyvSeJTWA3am68JMu2ms8fNaV24vjcAPYbRJktjay1",
  "key39": "5G6XVhNLu6vtiTTLFNXX6txgG744b5gf7y3zqAtfKqxekaU4HmcvvhcZHMM1BeH7zQk1yVzcZkBbdbvRccREAcDQ",
  "key40": "4nxUsvJ7yD87jUX4v9uYnRUpVzKfyYULEPtNBD9tV3s888RUsGXz2kp2ufSBJEwDTCtvBQszMiiMtZXmkuAmqker",
  "key41": "47v5w4mkzweFQpfn2zfd3GAW6ozsrpzGe4kfbQkuJeN44Aoj2Kvxqfc9KH69j8yc99wNbnqDrqpMP7XG347VMrGZ",
  "key42": "9Ph6Encf5rRppmZgFe1WxMk9kLhwLpDeRn7f9TmuXMpft3DNfeGPZJH5rwjiR4WxNhAjxYa6D8fRvutiyy4VBJC",
  "key43": "5JVxRacPr3LvXMQ76qS9CgiTtFHcUAXsQpxvAFKVLSUqyvFRhtHh29bRcRjRpNTg7kyT8DyrmTBtMNtcXFCQbUjw",
  "key44": "3sMkVL12RF7BMfQ51UStiTsE9jE5QWXRpf9YcvrXEiAykXRiqshyRQGpRD9B6oQWmJ7ykHf3HeYjpQNHLF7YthBc",
  "key45": "237WZ6dT6Y6N62i5dRp2aa7nvP8EebgprUhG6YiwwqKTBqgfco62xBDAYY325a6xiu3vsV54wMzLCYr8knhBHV4k",
  "key46": "28rqcbWbMN5m1uSu1j6sojZFtFdiUBg9YfDKZBSbMUyDTRV5HcJiQ3YgCzGX8a9xVLyLfqyY6BjbWamWBGHJUffW",
  "key47": "5ptf3kpTfxxLuoEcTuR1M3Wdab4WBNGaR4igVEp7JXPxRM2WWB5cbxJfh3AmSGKdMCM5qufmaJtWN1WE4dBTwggn",
  "key48": "5xf729xeVg6jK8pgcEwuPWUMRGjhK6FJXKkhdTE3fQUWjpZdngmJAoRLagmi71wAH6a4EPYVpf5htCrEC4TvTPBS"
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
