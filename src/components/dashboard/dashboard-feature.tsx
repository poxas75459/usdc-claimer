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
    "EYC1ZPzMb36GAvUh2tcDSDwEQLaNcEjVpAiF3XLSZ72pMjfBVefrzSWaijm6pShCp8hNAWQsHDrKpPAa1yeeSo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KEJu2cfDfbwjc7USih1QSCSBtw7CezRXGu9MLMmQN6xd1ypgqk39amewBR9AL8moAjfF3uviGc8g5DzjXtfBbYd",
  "key1": "4b8No8U1pW9G1cGPLmnYyVg4SGZY1Vrea5vXh2dS51gqVaQzweMpvJhNoFNDqz5ha3jZpAWgA7vcjmHtqoJPmHva",
  "key2": "2CjvWyfQwraoxFZ4Lfk5hX6CHUtLQ8EQKR7rSgJcwkMk1dB2Z3rR5QwVWT7pCjjtySf7FZfDpteV8iVTymdezt7d",
  "key3": "5ktKVukKCEpJdeVSunAtHmZwxUVE632KDXqZQMvmfmUurCafegBfQuoVzWLyzfcZopPRN2TuJmUy7hDhpyfhDeW",
  "key4": "3xEmLRfriSa3sYMxFqjg5UnGA7J8EXvj4TQ23oVunK3dmh8hbgZgd2x9org7ek3Wh9osivkzV4Ls8XQMXdheTWfQ",
  "key5": "3xm2rrxFz4QzPsJCPuaPxwQW37S2cnrakzdpTJ9iBLZvuZWPxZB1MyGBggMH7LpRhdc7t4Azx3GNzuA5xoHv9oaB",
  "key6": "2ca3sR3zgFCwmiXT37VMoDHHZ3JxtNj3U5e48uFoUcaNymcxPt784omHPruRsZxpZE8UMUUs9jhZmRwE9mTrQqcd",
  "key7": "5WtTRioEC8Rt3UHp2BUBp9wGTjdDqxqhL5pWM8rCyquSZX8aFCQt8MXTNHrY5L8PWATRZGNEgFrDDjBgLWZotTFU",
  "key8": "WM8nbiJ8iWTKJZh5wwtFwMiALivXxrF6M2hjnq7XEs1BGijCknsxCMHB2ksuCwroC7NK2HTzV5x6KfAZKbiWbUE",
  "key9": "4QbhKUJ3U6HQ2Q5jk1tB5HxFvPGegCqAwi2bvzDFwttz4Ri23redLJ8ExVexRKM4S9dQnZiZq7dYZpwTnim9WVPC",
  "key10": "4GoHwcBwZ9JESYonRqR8fEgUMzy2rN5eQ6mfqg9wHdaNa7jcHKyNYxQ4Yq2SBg4A8GHC8LdL4XNXk5Maf9eGp9bu",
  "key11": "3YAw37dJeob5Q2swVNZw7ENj98YrDHbfiScoBFeXHazUUS4vxEVyoh8ss5UcXxWswxbHxEogzUCyLuWDM3Adn7pd",
  "key12": "5uxFmNzh8dLE7JeXCmB5sRXpMKKhAmWy1RKpvSKaGAuqPs4LFsGzvzQkf8MRgj2ecWWTRkSzcNMm8P74VRMZ9qwm",
  "key13": "2kNLxwxQLf3dgBxGTLx151fA23XCRwp1h5uQizWsATceRpUHq1UFh1HqjY1triEyo6xFFABozdggF9bnufDKkiAb",
  "key14": "5FarjNUTKvRafgNR56TfvgdEQBGmChrxqYZFVgSz1ByG2xjEUY6kK7FXrNSDyFA9ZE859Umdyt1HxqWu4DZKm8Hy",
  "key15": "43EGsabbgb1DyYTeo9WmzB3gnWJGSeXw4SDXnaZoJTFVvqGJpMQyPAoCM92R1oq533sfzKuMBsxkZwDi7qtMZc6y",
  "key16": "53burxxws7H781DxKozxcGsmEY4i9PmxozrnXbLX71cDPDyxbyMmaG2hkUUJ9eEPEkb7o1U5yfKJCBEq4KL3zVDh",
  "key17": "YaS6hUjUzZNvro52XEEmLyEPU326DQXmJK9CnQwPa7Y5TXxymniuX7hmHXdNGocbEBHNSrNfBcSRnmu1ReWV4F6",
  "key18": "2Gs4ghbXVxNw7DUjuhNzt8KUAxij1hz4PxxwHjVG2dCM9fxtwWAUKA9QUAomkkVTdDysrdgmGJ3pPgQAq6JQU8Aa",
  "key19": "PUtf6f6Ck7fRE7JNe7YhRMS4cRQtEAf4Kiqco9LN5GJq1wYXyJLszwZnGQiAHAgpZ4rhVTrXqrqYFu1g3bR36uL",
  "key20": "2AWybcsMvbKqt6nRSDnuhg3QV4SKtd4vd5519Qi85m38b2uwhcAQ39MFwtjs6cgxEsmdjM7o35HSyC4VDUY1ULTN",
  "key21": "2NE8yWdwwGCFe4hKLHMWS1ZXG2V3tqg4QTFeEMtUoPjBrQF9PCVYQoCtL1uVTqHtWLXxkDLrM5GMZGKmHYyKC3vR",
  "key22": "5Eq87UBeBJRqWrsJyCHChT42U6osrMs2tc5zyoNLdJRjuVVb2vw3STWM5oU7bqCSmThyR8RPoi8QB2twQdeU5yA7",
  "key23": "ruu2sw7ELSP5rQE7o67sTAuh1Pns5UhGsPkHoXfgiJif83Mo4DPXjgLoWRPVx7KQcDbKDs5peEdSAsTFC7wfSQZ",
  "key24": "446Raisdyq3dpbw2WqajU3M6UaxeRtFhbEPP1xx7mSfRpKt8bjhgskyhjLTdWzHKKcb24KsGYJseyjWRbywQyxWE",
  "key25": "2HubPTv9AT6JSrbeM3fGBmmHryTigwkn18kvWyaLiJspq1jURYJVdczc2s4w6xbcCSyfDHBQ8gRvhqbri6gj9Hjb",
  "key26": "8CVmCEh2XoEnzvPHi2ZTUie2R7DN2EGNJjCNDhzFH73yRvszx5VBr1JeVRVyvhZYMLH8KWfNWXS95DnusfnrJoE",
  "key27": "3kVhDZ4TdsCRmdVdTmfzXCgiJUE4Dp1XiyrpUFpV8JDXF6qdHsc1CYKuViQst4W8t1P85zRrN8nmkiZAT5BCPF4b",
  "key28": "3bR3RKzVCeoqthNzS9wo7PZiQeYbQUfNCipkQ9eY5KdG5yNEKUKRPbEQXENWwUN19Pf2HuDE98YPwnKJcHPGssYH",
  "key29": "4CLnQhL9sCj3K9SV6ePKWCV649fDZmChtNAJtnYazsWCUG2dar6L5RCLkqXnY52nL2T6wfCJ7GQFD4ahKcuQ5mDd",
  "key30": "51QhBBAuMLT5X4gfCcTfEDhMKUfmqJBF4Yj1LuebgwB1HNj2ts6avrmywqSteXB9Zz4t5zi5KSNnkvD6peQK8GaM",
  "key31": "MBZN6Y5nwYd2GodxRFmFcFyRLFMTbNaXLon32CUKQqjcENVDuEwcQvgx8EMqCrkmZJ9XTE7SMisJLkbGsJqR2Jj",
  "key32": "2yY4PAuefLCCny4bVEqbgcgWax5HrSH5LemQ9BYzwYkbiYpvnQxD2iaiDbmYq9TCrTF3dbRpnQkTSiSVcy92KS4j",
  "key33": "5AEtHw7oC6pXnUMas31KN9iPmCqPWN5omcof3fRttLwDLX6uTFwT49UtjUvtjz7W6CP2Neq3JpDPUK83rp5MACcW",
  "key34": "5prxtthpqZH2RDELqLMtqQq7uAQmhyZxW4xHW2eUUnmp2YCFbT6B72jS4ieHkLbNSPczU92mmUiDFpZBL56XvebW",
  "key35": "2JZE2dVCfDzMr4vZmfcKCQybrQajTaJbS5FggmPz6o3QmgP28vZ2A9zoBnVHsERd6ooJm2GgPwPTzytmCg8rtyPF",
  "key36": "5ghetPt4N8QEBdurkzkb7if4G96gZPyVA2ANMMKpajJaDa5fyMigPLfJ8sfhojgewj5EhwMkL8vLcfggsiKPgeZw",
  "key37": "494xpoGKvR1FJEetQqiU6fCmsSMMhHdq96ntV8tyV52bQPqSkSnX2h2FimockAsV89PzwPgepimKfZg97Q43SRSV",
  "key38": "5eJMrRbJQbhBtTx4ipamiy35RqX99t8KRZ35hxFLvmuX55NU9f5oCLu2DYzMP1GbL1C26C49a93HdV4JWBJrjvLP",
  "key39": "2cT12yVQZvVLUU1krQivJyvT56hi5L7nmr9QdqV1enX3QEvPDnLjdd7VJDD6nSxJ1fiSZF56iWuFjD4TzeEaLXaP",
  "key40": "59ZBxSxAJc2BGYbPvPfRnVrajKtjvR5krrCAYaqdHdT7hJMYSdswy9ukd1414idbovyMo8mVTdCMvPAoA9UuTppR",
  "key41": "5pTwrs3NjWCgpo3vsR1wv7puWvVDPFV2hDE4AX1CyxhLzDVpNB6CFohtbn9CSBYeBdUtJo6mLgJ8aFMd5t68cpL5",
  "key42": "5sixQP1ZYF45Y26VQC35MZ8WfRCYF7ugzShdQWbRMEneoCu9BSw8vSGinxr4e7Uvd6Smdn6xVxAi5e6ksr3d8dAQ",
  "key43": "2831HxosW1HNBNU8JMM6AcyzurgnwVuzt7YEZLHABdUy6ugUCV39FxnoFWfHhkBsJj3jqDnWL7v98MgB5KETt2Yo"
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
