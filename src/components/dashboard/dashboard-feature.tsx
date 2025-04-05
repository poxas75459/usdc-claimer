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
    "3a6ZngKQsJDF6NRkjU9YL2wykr5ofR8YkPc4cs6bf7wJBvch8YpkDNCQPnVybgDXXd3NkcyBM8nTDJE6ZgX4hQ9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mnTmGkGiWiJMHAGEAQce72uQUYiiKe6NVNEPCQmUpysZZm1wW6E3VLPNi6Kx7vsv8nkqEU9hZbbwZTaSUfyAvRG",
  "key1": "3ywiGDBvZfgHkkgepb8Tropix45eXwXBiBa1kXiNcSeM1wtV5szBCKvwGKn6bG1pLPotSRkukH4dCfLL7eqmnwmR",
  "key2": "dfXrLcgyT6d9wKpCUfJ5X3GUyJbri4iSamNx7HdfdzJH4JTdU5W6aYognb32Z8CmDSjb7rExVE6MzfFhofcHssa",
  "key3": "5Vihvg8AifRMKM78GrQVco8skjqcJFRuo2JxCuhm2G3YHHyyG7hQsqJmtwX7wRoRGcAtHLUyN7AHPdQyiGk2Sp1B",
  "key4": "tjBBjBTkRauJdpnhhSNZvJo6rc7FBhtDogudFmdUood33uLCfQouFuCqRC8fSyJbZm6KqrXXyq9Aqa87cDswJVQ",
  "key5": "5wu777wvDxyzfJHdGT6fz4cyJSRCrhXLEAykjGBpkfsGoVMAeK9oR821TMvDRRLjds32AqWfBtMXrHSUHvodAMrN",
  "key6": "39qvMouu9G4qfnmQek4pmXyhuph8vfoP1Vq6mkzzK1Y5kKMLuQ4Mgb2hEVpwKF3pXhVs8ouYZjtm2y9d5MJrNEC5",
  "key7": "3pW9nzZhPRn9TJMk5tVQxZuo3HFijKNxn8WxMYBQGbxG2HjHEFEk2YxNGkmmFP2MJf9mBkyvs2EuLBMdfJ5P4EBB",
  "key8": "5KGrNXD6xd9dvqgDRjCUgm6Qz3U24cfHBh6qjDVuvkEGReqvwa2bc9wkybpgBfFjngGMoQckNMpTfzBnLq3H36sa",
  "key9": "5V16Tkf5JmAYgQvwfcznwE6tYVj98q4GXByLRYmkxFXJUV7HHim65B6VfiTnFD5dbZFo9s9w7by2ABtThggYqAFq",
  "key10": "3YuTy7Eq6kRbA76NaMqGen3422RWBvk8SnNbUgYWhN87if4AoCx1aCkobXt2NZwfdrTvgRonGqx87obgHzjZAanZ",
  "key11": "2nknTiY3jTfCZT28AVXnDb5TTpGcTW4LjBbtSc91xRk8nQ8fGZKR8Z5D3AgPxyoM1L4g3NL3CGmHCvmJj5Cpcd6Z",
  "key12": "2o27GorgKcSqiT2AGmEtKeoEyMmuiKBvZVokR8qHZkqPpmWUM5D1qWUBEFtwUKuaTGGbJmQxUrRqGy2HUt2PCwqb",
  "key13": "Cp2AA79YwM9MjdLWxb9kcguRX7p1DBNca3tC68TEbn49Nd6TU7zSQtgsMiBenGJiyzZ3prqx3CnBfvP4UeRu5By",
  "key14": "4vPo4csUgu4sF44sGjJDzmAtACmNguJHaCZMT7X7nABfu1RxnLKK4TkJXcxPnRt9Upe26F2PdY2BjHkC8kfGmhqv",
  "key15": "3TuNtmerDD19TU7ixST4GVcbaYznMjWoQRCY6eUnEWTPV8SeHU5Em3rB5BrbKtpaKwYkSKpB6ePE1AmGakVFf9BT",
  "key16": "EZ2XdAKUC9rCAFnZ3PiAACbdBZUf8sYZGW491agT96ecMToUbJKeSZwsDc2FytYxjmXfYm5xWCw57fzqo6TDijp",
  "key17": "368uJc2bCQdLPDB3XVTD1cNibnYCbFBGEUjAkn44RzLbyGQbRTJ3X2sycBnBi5p2ijvqjKJMQJToPLPqN7Ztf9S8",
  "key18": "22qik974oB9fLpyVvx58TJzB4BKSpejtEtNq8WdVJJ8av2J5bjQUnbVoNs3caunpzTZ3Z6AM5maK5a9UH4nFqnju",
  "key19": "3JErwUysZL2duk71hNWhaPHKN9Cm2gj7tKkj4yro6m5xRGWDH9f48K3rScQnHEhNEDpn5DGufg6Rr2xFSed66n3U",
  "key20": "5GZyZzTRFtDQ6Kqvj35aCUYQGsBxvET34YNeG5NjrMe8dWwW4WwQgEY3wcebNF2KYkUuegncPzgmxu7ftdZyv9qr",
  "key21": "4M8WAd5ZhGiKJXww1FcmWiGpyL82hWattYrYu742LiPHYqohEDNy95QW9bKkbMspLDcx8E1dcHfiCRWazJsaE2WT",
  "key22": "AbtpreyKpGQ7NA2PuJabRgV3N2fcvAapvzb6jkdb7uyupDyUJrh3SfRBACpw7JvaoEmKgfMaEw5tY6rEv83VufV",
  "key23": "Ami6MXXFS8Ao1TCSPmNL4cH5R5hotH7F4CtSknCwr36vZqT44WfLVGGEvYanfmbXDWUzvdVo1kp24qprqewGQSk",
  "key24": "d5yonRgbRAL8zEsQRSP2p5hLgCJJ6Ao7MPB6eozm2BrymsKC4d57e6TzHTwEEtcHZfXBRhT6jdMVccY7fJ7zaRZ",
  "key25": "5UbTR7A2VZniMk7Rj4frd1UnjF8rnbbWAWPv2tbxo8THT7bbtKbgceCFkyWsdBar1xVU2XY8bHa7ECf1x2eGPSCX",
  "key26": "5sFoUwXDE1s61uU4y1QPQvZ7JwYtpPkY7UkdpNEpXJPfPHvRiw1PTMgKvJprEftsCi8MpSWcBbRLYGarFNxkZoFL",
  "key27": "3rkLH53DkKM8tZa15ZKZnVVyonV8k9YyEkmVHYdHfC51gTvAbadXd3kSCykUKQBmQqNUSS6WVo425TzB9GE8XXbe",
  "key28": "4DUk7z2LR7qovqa46DJA9KvXA7jTkET8uN7KuRxvzjjdtv7cTYWAmCxyvKVxwJjNUjKW93814RGVNXsAAugwDCKo",
  "key29": "2GzJq21nboeVgzE7YAZ5fj5436g27oqBtHbmxyRFXji5YGtafro8KcRUR1CCJW7jSKUaopck3axUTs6cjwkM2kPX",
  "key30": "5ZpnMkQymCazTqyYJrwtaFdeUtpVancx6iDidCpoxMdvPGGkRLnBvShBt5cJ1isbUJpdahWe75mQu29QsjtPNFuS",
  "key31": "jBECezG5whdkdSbKSYqpUZj8PScgky2i35XRuTv88RNbTcux4U2D5eeE5sJVJPDQ2tmRn4xCGncVio6p7Ck7kq5",
  "key32": "34C9tHgYW7Nk2Z6YC1ofMpgYkdmNUacogzRv53a8SKEL3GZosGYfGmoRzfjDSz7nLNcogwSHcMuGPsJRDDMTaNt6",
  "key33": "2GWvN9wboM7xCFEmvLqw3JY5uV9pMbGhbY58c8yyM2yrkfS4e1pTY4xhBf2tepbdVPwDECeqodFBy88nqoEZcEQE",
  "key34": "3MXQUj5R8KJTmgfetQL3xyBDT99aDZGintsufyw6TycSWjTwVFGPV3sywurYqeAjnNtysWnFbanbzRJCX88ttL4U",
  "key35": "5GoZPXQfsfxsJ1ijSPZ4pfDN7PKrCcsWfXdHafMnTUXV5gkzbpVSpr1YgyCJ8QgFHxdKXS3Nhnx4bvDKLdnXUENP",
  "key36": "DvqRVQLLh7ErZH4a4m2cuzuU15ZWr1j5RZiDZvpBhWrwcjnm5CnpJ4CDdzgwmP7MUH1hNUAyn6XrzWBWE6GjeEP",
  "key37": "5QWTPHhzxSgT8rkRjekuM65X611mAz1aaArMhsrgRJo76WY5ooA1snpxJJBoN1oseJ7pFmDcyXnntswxitYQuzgm",
  "key38": "3Uw5hit8Dt4rAFCtQpFnTgLY73da3uayCTgroTpLpjhCg3yqs5ShxxKtKVYaf3HtZso39o7hLcWEagaZkcx3zZGP",
  "key39": "4ahBXFZX4yEKR3E2UY5s1DQHzdYXGGhh8WtAjghZA6pJ4nfXu8vYPPdKwjVUwG5gR5GEZvHN5pPh88vLsRTCLiap",
  "key40": "5kLFgHVtbBP1awt3fEN18uHqvrGpWuUm1BygnmAmgm5Rg3wXw7Q5snD1Ytu3aUPRW1f4EYw4jLXoecDpXqh5fowz",
  "key41": "2zWyaVYEwdRzoL4tzRYuNPnH76zG8MHCaAEDBTem2R9VVh1PToGBDWKsKshLxQgi2G2uhfQURnxKepjAjvvN7kgL",
  "key42": "2CB34hkEqd1Jeda2TZfHvWzfJpvp4HiHkkUe59ceh2cJ8q2reN3BysAGb7feMXircQrr29hCsU4xX71hJA2vebGD",
  "key43": "4HdKQcEmrVVjsfDJfYSoj3iZ9qS1oguLti9N86w6xndAV9Dkpecb27GojNKWitVzm7nHxd9zsJbwCSHrdoPebYhh",
  "key44": "PkGrvbaFfCf8DSG4YroxCDDJueYCwwPpLjpmqNAwJvKrmTxArkHWXdvgrxKJWwye38P12T2Nd2Un3Ncz6vsHZJ4",
  "key45": "2ckT8pnZKA2h4gkgX6b5NcKFVXBdd1it1JhSMhTiuW3Hx9J2AqDShTBfcAv6XXq5ntbWgiAPUKCiNMdshMS4nRyU",
  "key46": "2drc8tFbcFUTgTZD2QYAvK17tEQrX5TyEx2QGiMPY4szmRZ3faX63CwhktzeKXptFTbEhZdDmzutTcsEFMiNLics",
  "key47": "25cD7g6cjf5b4Kg4ryEKzyWmgY1NP8ALfXGkCE8bGgBAsMjc33zpHQ36PibVUUFioHxP3wD33LjeQRf5R3zAU3Ud",
  "key48": "3PPuxJ2wKeC8w7aKiTAzZRQJFvqZ2s3jbDXvrdbdy41WksXAwWy3wUQv6zhn98cRCxEEcXHhbTZ6hjWLYxjuLrWD"
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
