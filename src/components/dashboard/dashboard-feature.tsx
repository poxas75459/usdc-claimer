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
    "3iyE6N7yRbmy5XPyqcHfckEZptmKcjpJMFXPUZG9FRFqmsZRRsNb646vZbKV4EoAimud521TkZGPQnaGnCSznVip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QzwQdaJjhujXuqKhFBHeWpkdB8eMdictHbN9qCMqrCskeraoQdCmUxhDFrcgLBsDSJeGZxPmmFgdwGgaPdqovQd",
  "key1": "49zBa8EniF3J4XaXUvTrXmL27obyERDrBkRswAN6Pft54bvxyp49tscEg8xjT6uXzL1hCF4MBKv7AtZ3523qsY2s",
  "key2": "4HFfXWgif3p9oCEwbmdLxyqShzgrugpj9YoMoby9nrMwR3n4fvp6HZKDV8PeRkc7PFCVPfwTAuAGE5tmts7ajGmL",
  "key3": "m6B6iMDK6EG1vY2am4Zi19KHhwybKurD6XnoQKZVyek15NZ3ibzkBEZVmJEUm5zTANt4QFxU3L6GKcdCLoQHznx",
  "key4": "5C218oXw6j9CueqR6eJPkUmw9aR36n42aU2Jdu9HVRuUj5pgy3iipBauszfWo7RZ2fy548aLqioBd1j1CjQVr5Tw",
  "key5": "3Av75q8g8GHuAvJNh3MjWkmenEy83ncSJd8qLnTniz9v94nYAbff38aGPZLshKUBXMqp1M5nnyE3KV3JN5ganQk5",
  "key6": "4YmUjaQtovoNnHEsNnqaGaHDwrELEZLniuGWPm4VqAUN3Ztj3Tp3tnRgWDRDBhBcsVbQr6DbAHRkbSaUWZUMttn2",
  "key7": "27gdfgz1mc7A4fFAzQGfARaDjkNrrbHhNm2R6L6TwG9snbXat9iLwvc3dRQcDTzBC8wp1N7NRyvjEs4ubH2rxBdS",
  "key8": "2eKQkbadPZFySxKkxEjpu2TXiqz58HpVpHScH8AWkr5urVYT813xWB8tkumrcmC4mdYiPbQqG3r7fHp8NxDDafRN",
  "key9": "2ihk7gdZ6c7zGvs1xun6co2QT1sNVj4WrZTSjwZUZc1cpLKsnnNSemVPyVrajm8HpaBXrpWEr17rzM3DvbHz8o1j",
  "key10": "2oSzybEnVNtU2rzXZ3nqUwi7yVG7TacAhk23vC3RZfsLypYjnyS71ixYxsGK4BNixzTFZVsJDBUBxJuGYU9zhG7T",
  "key11": "5Rwi39yFzjzbWKTmMYUDKMMWZXPHJ7n8ejMuPESEguP4k3nE23atzJri1hsrXD3FpuCpQ2MwkQXg4cakVhHDoYfD",
  "key12": "4FUv57BGtQJA8W9ZHDJAcT7z3fQAmnbeNbESBLYmYxbpXdTrZAwBuwA9Wr5LVfr7RDrfg71bYHhnfHseFPPL5u6T",
  "key13": "48dXnfRBH6MCj7CjXx73F4ykU58B7W6VBfhPURNcAuMFxh1eCdcGdRg6qpMRcU5hoawaAtJYRWbhHzrJbL1tkELf",
  "key14": "4buk9SLJsU589aCSTnwNZux22hnmn2taM2VCFHZ7oWR4NVZ4EmjYJk5V3aqSd6rtdD8fdaTjbxZLmnFnQ5Sef3AE",
  "key15": "3ZmeoLvaw8seQyFw3SJFxefcp4cZeKnv3hQ7m7WZvqG9q8VeCQu75P5ApPrxMZRrgLRaufLTJnoi6QhTTKh8gGVS",
  "key16": "3ScxaKG18eha7KMozkXdWotT4gUATRyxf3GKYzQzrcX5XQh8r8rfjxCcaJTHuKb91w8zBxAJnicijFBmKFPgecRZ",
  "key17": "2oHwTNGRYV5qCQmsc6gh75eMseVFsQXDh9yyCL1Kr6hsRRAvxjrgs99FuzrdcGebLpjGBqqpAThHacbWf5r8iJAs",
  "key18": "58SRHzBiTFr88GsLPoPPsxfN1GHKsd5vFwb6mN2MT4Uzq3ZWpfguErqont8hfsuYkesW2XpzH9GtuZeVFFiPwsVC",
  "key19": "5CU3dkGr9DGpxMKTGcLR9HycMwnUC9x4URdnqDSH4BEfYuMHoTLXy2oGDZ9X3rDBe47jbSQeFcZL4RrLhLJY738c",
  "key20": "eR14XREZwvFeCWZBw9da12gdRRJ3fRRYxfMYfx8kwCha2ha4FXUpy1oMjvqckx6XVima5yiqxnPAGGdjKbFQ11C",
  "key21": "rNsAkaYNBmFa2R6SLeTy3t4WtTvuUmNPQY6WMN5tvp46pCugSAhD3wRb3vyNHy4nDtVDPfzouu6iAiCG9X4kXZt",
  "key22": "qJhETHXruzrygfQtnLHr3jDE39UgR8zopbiZWj3eenQkPnwK5LKaUt9cU9Q85Kkqbknj8Hqe7hgyR7M4JpMgbK5",
  "key23": "59j3T7zEQaxcZT7RV8bp1PXogtKKHR27V9WDBpuan3aaCVwfGUurMtVcqPsvtz3mxpnL41k8hjcnMEeUAVkzFr9g",
  "key24": "47CbWWXXt7qXfoEYi62LKW2RxqCgHeufxgSqEND9Vszv1WxxTURF69vRAxckTZse4mEgmHede3i3qmxGaNGtPEED",
  "key25": "2zSF4iA7KnFmyersUZLkFbXgp2GNux78GZyJMsf4PFikXvrenHZjHpLakuGp8kUw5rYmN1251ZuMQG4qxY5NGb6z",
  "key26": "4J24XG7BUqW8HJiEuLpDPRaPuTPD7oURD4i7YgJ6Wi2KB7L9ancHnEtXi5pQpnPKLBo1xi6zFwziTVnAnpXGWFYL",
  "key27": "4Ps6e4ztfp6QsM7ixcJ9LSzLNPJBm7boLQnbgJnLHhBJhDZuhjHzZM9LHunbk9bE2piuY6NKtKwTrYh3V7UCwFTs",
  "key28": "5heRLVbD8ZSgWWe5o3MAtE5yrjxXhUZttFNRKGU5L5WSfWgnM5GvhXemvkhsSWU4i6aAw8FaEFVzWC69dqPXdWQE",
  "key29": "5ds6xswiFsSQ7AbSwRCeiP4jJbiJ6ZNdoHcSmGWAkecer9xfeeY7mNo7MgysDLyC5Z49Lggr2QXESK2k4mUTLZ3E",
  "key30": "4YHxfdMwsYtqBHBurEMqxxj9EKmb1PdE7PzD2N1KxRk2mBu2fPN7vknK3yooPDHYhqMbWCLtiRWjaQwJnxyx6764",
  "key31": "4iTXffSPXNAZD2TvMnokZKDDmv6f3YCtzLJcH1jafhrtMX5JUCo7H8a3QxphT7CyZSnTmS4fQHHAc1QLnDDhYeKZ",
  "key32": "2Nz6sqQGNzYUBc1WPsB65QGzCfjQ1xDt9JZpHejdY6qJogiexhnrKVhZo8uGxq2wj9UePwhQCUKbRXF5isMBHg5o",
  "key33": "2uyYgKjDHhxemoLzm8nZUJhXy2fksPFmYD5b5WjVmtPxjJ7LZPYkf9ptrd3afsTNSAgLKRvaigNDtfQPDTBSq8so",
  "key34": "5XbkVdLucx4v2aFJh947XgzYf7pkLizG23VbRGa8PMGqzqw8aFsWEWezgT3cqb2QrXhzw6tq4o3KL6tLaKVhBhkx",
  "key35": "3uW8KS9kLhKydsLw8YV5aNYg6X8vPjBgnHGzb194LUgR9V8CidUPnPoq2YF9qE4C4n7riH8tFkVsdVHYySsba5qc",
  "key36": "DKneVM5jtocs7UrWZ7BJeCCTFP8JK2mcxCrbt14cvDhetDoK7YymVEbpGEhz3m749dw9RqoaQ6jyJ5YAkpSvFRh",
  "key37": "sY9NGAxfmJS8fSbBeWa7FZbuAh1EJqoNn4kprtGUJ9grJsm7QbHK66dUDC6sNE8n74LoUo9Ft54BQmuGB4h2Jmp",
  "key38": "WXdEq4zMFUS1vCqYDCJCwy19hsVsWJYcfMV74s3zwTG5YvwdZYadf7fHbQfkXvoFqXsSjMiMUvtLXoP2RbgraWJ",
  "key39": "2Vkfva2cwMssaxLETYBpNeyJyXph3PjL3bfCB4pAB7qHwKpxMNizRhwiHFF7E9VC1zfKmawRp8cSv3D6xBsiPv3F",
  "key40": "5SeiM2ZAKsnRB9LKdgprW7rjr9uXviU9CUgdkEWidMrTwVSVxbZT1AtbiGMxnwCvbbFzRj8SvUHtqBuTeEsYKERK",
  "key41": "3uhngD5oUSQZfSXvNBLPbJupaHaxcXyMi82QmGhmSAkVaqs9wEoizCAb2Th415c8CTyjnXtTGUAWHxPSFL5phKUe",
  "key42": "62Fz5KTkY2ubVhPyhrtBJevTsHU59A7oE5cWDGquPJZLUHnaijm59k7RAZmpJcDGtDifXPVwJDPuUENHrKcvvqh5",
  "key43": "419jJgY1pFipo6ZYhr3YC9ok1vC8k9LLexMwoKv5NJYQ6cLYKPVtvSDyE8nFNsW3MQDSDJYVLZT1HUnQHBLn5i74",
  "key44": "sMi5tgPx9Wh9inT77uFXDzvZmDFHoi5vLZTkXyjXWXFYAXkutGRs1JSB1Zj8czYkpg4EPkwd8HY8puWNiep1bfa",
  "key45": "5o2CzSC634amenjfDeCyvzUWPzNngJvHTYim4VgWKN6TtMyqXaH9PxJwRRupDGWQcnDV6yACruDEF5ZLdj1mVZRi",
  "key46": "5Mi9EKuNzfR3sJ1asECXADXWggGye6cZQuzxcPuEBzRL1kjFYXpRiowEaWJMLC3KPWCfbFj2LXf1Ye6dyQ3aHjam"
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
