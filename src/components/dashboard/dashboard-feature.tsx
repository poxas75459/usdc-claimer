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
    "3UaSGTcF9kW3v9n7uFoCMHL9toY6pJFeZpoMFVumeXoLX67Q7e3C5TBtpMsigfjPKQx1T9KUVvxeeaC1vUw9uRPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t82UAU4ZQQppt4wFwZJ1j4b13ES45iUXcNLkxL9G2CKvAxNtrRd4w7nQxdgbBQswktgUJfU2CboaXqapJRhqNFn",
  "key1": "3XgqcXmyqjN2ztExwK7y3vFEX47hQoNgyrwXN2n6xT5FEcz9Mqie4RvcPGhTKCgGdhfyMU5Vsi5txFFZ194yc4kP",
  "key2": "3TVcJ6162Xup9rjSZFWNNaGkt26x3TpU9m7o9tytikoPe8exYL7GGkWf1id7A8rkStV7RbxebB65Ga6KzcQcSCik",
  "key3": "uto17Z88YRfYACPGdCWr76jHYHcLWppS1fm5QWdKXUrPcDXPGuESqaLkraEWD7KsDk64CJMVnjRcS5zBkV3p68L",
  "key4": "4SzRodTZN5wX7CFwMn59AdYvNqmi4xK83aehHhXfFa7YgihSSWisWWiCmZ6FKrVRPqDehC1v8bpBauRV92AgxVrf",
  "key5": "45sY4mjYBYDfFJfcmxzAsxCEEWKzGqr6t8Bn9KZQdSGQeHVBed6ELgUdxYP7TF1vD5iFHqVaWXrk8Hw3v65DwNDu",
  "key6": "352sRbXC8mWnjtwyQVQkTAEJxvfiqjZCKvu1WX1wnPD8JrqYbLVBy3VbaPRicJNFbp3e53C7cMiZyYZL9oSr3Zgm",
  "key7": "5z5edSrRubg8zunrV3KmZGXo9KZBo2rN4y6K3vwc58V31MmzxyLv8axEzezGCUb8TMkWoQiy2TUbZRyVUoWpnbTU",
  "key8": "4hp9RWT3z1VziX5qTM69EuF2hH9t5MNgp9mXDcBejbuPPo3y1K1SvegTtKH2aKdri9GHG2XrZJwCQa6sbbwe6ScF",
  "key9": "XnRiPtoUMu6dxL8b3GN97CwqTAokJDz4ASwVsE4vxcwdAAJWFRHEf61pnRpDbdwfg3ybf3cnNUVVvu3hugr3721",
  "key10": "2zSV7KJdsNHP2VN7JB9svyZYJ1pYwcVDTqYDVKcfA7VmciWBMssdx87sMW6PBnmJLKu8bqRFpbvwfEmfJtMYBbsv",
  "key11": "5HfLodp6oscbtoRo2Zheo8zNgAb35FZ5AiErdcA5jYgkB29YtWdxn6uJmpZqCSFXTjYNVTPHpmwYfZVGqGAQcFF9",
  "key12": "26b32MYY7PqsSRj2ciaifS8yDzFGecEX3g1raPujtPP4i1CuFgDN8GfLxuFVtmmcdg8Jkm1c7BMexn2omg4hrnap",
  "key13": "2oJCSUG6HXL7WyUHmc9ceU7nVTGsCDy6PsDHYGNPJHDFveymgmQvxnUnSDUJyiCJfRmDjbRAfb37XJVtynsGC2B4",
  "key14": "3hGPKMF8nTEr1i9CLdsxgsUjUwnyX28AHcuceqvDqDZZN5p5fS9vBebe8uDy35JWrjg2Uji4mK4c9gsW8wgon7Vp",
  "key15": "4ZA8Ee9R4Ru5yGu4ECtwCwu9TLFci5Qgfu5V7cvyDu9FDxpWAH285wCmpYJuo8242bASvt1GMKwv3NdKunjsbZZX",
  "key16": "2dT62xJDqKWVC6VkprE1LqEs94CivRdxm8Bb3EG24FukmSvEXfLYaVSmrxQNJ2gYedKbRHGrZmPBatPBtGqXSbfc",
  "key17": "4sFoqhJkwYGGPkAFanFz4KhKyGCQ8TrJXFosQmFpQo7coRWWSujuSxpQAtX91MpHFwiVAtTFkUiZ39WZkS9oD2DN",
  "key18": "rsEtYMJaAnDJKhTWCXWCcbBYwN9AR33RLaR1jfG5RE2aLgCzMN2aEroRtpzoA6AQW95bwrNz7HrgqwfGUtKzDNa",
  "key19": "3oqKhZyKatv6LDNrtqhDjRdYUptjNn4T3UUyyH9tRjHW4xuMDBYbe1aQpWScArTM6bps8fcWqEsfXZkXWbwuFGsx",
  "key20": "47Yc9Bjf71WLpmwBNDUUio8neHKSvk9mrBE8jwU3im6977VPh286xqRYxtXJYa5wYLQu9Cy4846EcLWsnD621WSt",
  "key21": "AyAKGohGcBSXDYT7tph3ifx6BhnQw7hxpeCXLSHVi34SwTdbr8wx7iLAFWZhz3zvPne7SNB3ZNKQNo5yq7wHrFz",
  "key22": "4gpeQJCvdMmvsTEDhSDiYNSY7yrGvUwYqqSEm4kjLkR4sdHT4m2ruGgFv1sY175rqgDHrbtqfUZJbLQamZFfa2TM",
  "key23": "2ppBhXYK3tc2uWrzKgJPYajge8LMG2V6v9brUJ4mbCDfC7P6YKPLAJUbvHjfqduFupTj4DpCeAjZjtBe655mqzGP",
  "key24": "3rRhh7o9c72T1yjHC4ED999CmPXkT6Va4rAmByZGDcQXHdQSJxmJmNVv6tqmF8kH4jPV6fyXpfeF89xWXTT4H4nn",
  "key25": "34N2ovfPCTaero1Vqn9z8svxFyn3CVWEtit4UEVVzm3mvPm3Yb6h1pJiBdzLWGbmswDfaeZLhN5gQXXTPtrSnTnu",
  "key26": "4f1x9LR6Gex7ePfe7zxaJXvtTusoJUcJxnoBbD82gTSnbkotmQtbutk3hwbsP5nuq8X5FFCADcpo8jEpwsM84Ziw",
  "key27": "AXG9tmVDUtcBECbYGgm1MiFDPw3GTv3ymujNXkkwUXvijcxgfC8KrzV5URcQZFCfneWZj55T1XgeUzHSBpgJWFV",
  "key28": "3a2KSCybnaDwA84kjE9CSHyQMx9GwZ2Sk975uU8cEZn1brJvJf5STTMwfyUBvHQQkvKwsyizwvzV7ocjATQ6zkfP",
  "key29": "2ZjJmuk6zN89TH5KRHqEFFcGQQ9pPyQvmzdfhsSRzkRmmghQfSB4UQQVzDHVohkqYnqGg7DVQvSsYcfbUkGfjMtG",
  "key30": "g9TKUpRmgtVLReniBRtB4wR5yhXNiNVMQDRxWMUSoZARYbzJzwSUZtJJ2XnuXjWEhRUKdjTJ6AcSgZWk4esiX6X",
  "key31": "2xKP1bXFME1AFy2PY1a28D14cG4rZbAFjsQPuTf5ie9CSFbQAFL3yX6v95GCkJRGidTZg4k2EkDv1t675PgWpPSi",
  "key32": "36rPbLpXKnphMRep8hDdxrk7utoieuNu6XTnwEn7Z5JbMgnywBpZTCbziz1EEUx3j29PhQRztuTyrGr5pBL4QNVG",
  "key33": "fqZj8mMuMqP6jxUEDmZ9kvdFyVV2ZYnD6426p51Dc4z4S3RU2mksyzEEphHF5sS8efQC9pP7cjUm81zLVeEFDKA",
  "key34": "3gBPpnwCcARTeGyBgMYqQPo7xh4dLRU3SnC3rsk8kezTc6qNauWQHofYdPi1ykSDpYhdG2M9eLyiBgJCpJAsbcoa",
  "key35": "46mLdtivvP9Sp3mEoVvoezc1CH4zfLKHSwQGgjTUVdeKr86U8FSHnUzSmo5sGM1GVyD7fV42BLqDbZwNsZRNeWix",
  "key36": "2gnfnohjcSaTcq3g9mXvEMwFpwXHY3umMbpw77owTpKCgKgZ3J4L46scRY33PjYhiozYQ8t4wtstd5LRdN9fssvF",
  "key37": "2VL6ewiBNntsfESLHTiTScTsnR6tzLoUNrMGK3X4d9FQPDaHhF6TguYnB6TdgH4ptor4e1PuChKz8Ufwh4HjPvYh",
  "key38": "2WHovP9Y8PsDsU8ifR9iacGUYfWS35p913Ug2eUit21CRdcrGeh4KTcQdWaSKhJV4Wnw1P4kDz3srXdx6nxDdvfM",
  "key39": "22nQqrUXLe8KuJh28uN1y8aE9iSRJwxj7jSKTaQY7hzb6rJF565CzQHtAyQdfh9iEaNMHKw4ggzzPpHWyqhvUPgB",
  "key40": "fdEUKAuDoKdVWazroC4EkuThaeViadj79ZnFqnF41Sony6Q3nhkj9YXNkDyW56UakGk55GKggoVJi54oPFdyG3w",
  "key41": "3t6zwnfvq4dPzD5HMrQX5euznVFjFtbYVuQ3ruSMc3uZprYUkDaemVuvnb2SkM3Xx7PHWW7zk799vmht1VaA1RsT",
  "key42": "4Q2LmwWQnsERQNmSxT8BTTbVh2zAG3WS572tHv26Re1KqBjdQXtCkPzN7zPT2DCijaFUM2ZAubY5h8UEtjGkqH3U",
  "key43": "65ESsN3cyYnC51Wo1LBKycW3W2Gi5ufFwBYE5f5WdTYWupBq5S4tKH8Q6j3inu441FSNrTAemqfmWM2H2B3QxwPV",
  "key44": "5tAh5W3PyvaMpazGmjf3rYJj5ZJRJDyfbXMumKTbLqRcEeZNcynkjmSaNLA4DdWWkH6KMfM8T37p7tG6ByJd2euC",
  "key45": "2cM65gjJ68e3cB6gvC8saQR1gKeFoJPXsRrjWP1BQoJq43jgZmba1xkNXuzPCntQTUyvcTCcnq2zTVT1QceZDTRR",
  "key46": "26N59kzQFupx4GH3v63VffikQCpWYdf1JHShvY5PSEmH8JDVZQwNjSFYWrVxwFY7XBdmA2ppTbA4mfa9NfPVw7yK",
  "key47": "5akPJffRYiVJQFVSJWfzuQNRCDKQz8mSLp8Yf2nUrqkkWXYaDq8zzxej22DKVoFZmPAHNSSN3extf5aRAiszayMJ"
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
