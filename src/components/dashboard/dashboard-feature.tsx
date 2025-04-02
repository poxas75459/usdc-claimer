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
    "4jH1V5LnrotHqbvQ4XhYQPtEie79ksZm3fYTLoz5Hu7R3b7pL5VJqCAAi57M11VbDVnqABKULhVy2eiC2Xn6aVUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "237HoTuGGC8PmzB9nD3pXw7jUw4dPRdKRm4sfr8b5EyG4gHUHcJSy2wmHddBQFHGXw52cyhwErkWLczQwpVeZjpD",
  "key1": "Xkauy8qYTZSTfPs3mUqne3GxvsKiduzCWoRmGkt5imYeC3CLtfKyGADAsDHjdmwEc4Sdc1q7gPDNV6MWrXGW5x4",
  "key2": "4ADCNmmkdmdixZq727Kz9N7Bi2hYwDoUHtDhRSgPR4qhuta64JAhXRU35Vwtw62vrEej3Zf4WvsxjPgEztBrQEgi",
  "key3": "z1RW3Pk9yH1gmWA391nrUe8FZHYamWEn7YdBHsvAhWskCxQr7w3ccRcVM5fLMGbaW1XmBbHqYaUFYkyQGLvrULM",
  "key4": "StJfdfXzV8Qa6UpwiqqJ2XAibQCwvGHr3yoV7LzuBr9inNMjivuLiVSv7sbsGBq1k6htBKDbYiFFKKtGb5mQguS",
  "key5": "3ggi667Vp91VNqCkdtLTpSJK7CR13aiGtTMFb6zSjXvsVevvFnJZ2RrWeDR5mb8uSCz34YLDHAZQZY9FsbJUKYoH",
  "key6": "4s9ZSNWGUnEB96mmuXGJYmgB9dWZbR2GdspebRomGiLwT1anKXFPqGa1uB3D8zMbGXdWJqbGctfHagrazyTvp9s",
  "key7": "7NeWq19LxF3aK198XgQJYW1ve8ALdEvqCEinUdUp3uVZt6QSNSYbMPNg4rWVyNSbhNnY1NtKgHEhJnbFkKk3Fk3",
  "key8": "611DK9SxAbb1P3CnRA2zHvB95ecb1197HUx2V2Fmn4MSGAmPA2xeWPGesH5H36zzzyn6TVjv3db49d5WANcwNXYw",
  "key9": "2zzwbVmdxLnHxjAPLJjoeSKEFByt7tUBssvyVkpTDSYFj9u2G2424FuTz2NWLcVVTkVT4nFwaadQzEHAygHZuCx2",
  "key10": "2yQkmhfiHi765T4yxQnaiVPLVuHhp9wcSEZQockyC1EyAEUwVoroWs4L8smuMbbR8XmSuUa8xXx6DhMghhfPkuyK",
  "key11": "59VC21tuTBqF9cqzB3Vxj1eJE9ukiugy9aqiXA9EzbizqayfCP3ENWDkH7pqKV115yFk31zJGH1SvEzs8AduFsH5",
  "key12": "2dC45ZFhPs5xz6rPNqZjJy3eGabBWdL6FWRWJkkptoEAg5UofYdXTkaH8GmfVTkS87bLpqfK621RM4P8v9ot6CQR",
  "key13": "D87uJkTzbBM938EZ6YJaezQi7tRdP2KaQD2Xnem5qJfmQxxUFz7iQuAzgRQWVSr5eTHCyWxGAVJfjzANHxdsS6K",
  "key14": "57EdzcPk7FuhV9nVKmPwtxNwJUUZwEwARGM8FusCF6iv9m2QFEFmszTE8YmAfyPkg7GnFmwSnfPjL9Je1ahFR7WS",
  "key15": "3jn9XadTzEoK934bHyKAFwrTGzpHE96b83dVSsQqNai6GneMuSrRTJvtUAQbucaG1Hm3US4D2MrZVwfeo5Ca81NE",
  "key16": "3pMu3iTbCBnnjCdtiCdF4px4bRrbtN5nVguSHXzuPcDLU2bpyDzSbPh6vRreLUaavEozaEdwC8H7oYzFrfUajrgK",
  "key17": "q15zA3hvpTvXjGFKXew9fNjuBeTeEmyy3WrVN37Hse5RZAu4Nk5Fe5Gi4DgkR13b44cKB1uf6GgZKwXMi3kYe14",
  "key18": "5eNFTs9HmiJatEg3SRqXAQFKKDRg2RisLn9us5VzKn4iYcESNUE7VF5iPWgH8bcL7AQZ4TENSzfWXYS2DgxAhZLM",
  "key19": "5EtiNn8MwTvCnrpFHmDkzsgLraf4BbrjerKxD7q9ziNEyCTFcbtNJY8S2Mh5q52NmqPJ8sYi3uoVUfspgV4akceN",
  "key20": "4PW9v3PEHr55W9HjD4iNzoELptpYhhd5ia2Woudv6q8LT94RbHuvkSZXvX5d6D1sDoEN1rKnsELnaN2q5uC74vgh",
  "key21": "2A8FdyEPUGDy4vrzMVGRePgkxMK6oexGVk5cRorfApwfMSMFxgoiFhGAftZVX7FWyKmKqPJwd543K9eBTgz9su1V",
  "key22": "KVvwbwcC1FzFWzNAkRdXuHHQW9S1G1AwYF3GNsUBotbW6Q6pyddSoEPUy6VQ768QiduX6EeZ8BcxKEBokCtLaaB",
  "key23": "4XhDFjSqNhZJKmSfVfxTxwYAUFeou7UbNLQLcz9PUSLKiUivuJ6C38sCnLFMp4moKi8MZLDP7FxzWQ8vacdf53yA",
  "key24": "3ydvvth4KfeikXsYAvzN2sr84PXjxGyrnmuqgLD8ZBnfeFC4h3KioY4uFsiPWnUB53XjvEduYuudLC8Dt9D8kB2X",
  "key25": "58LJ5GWzgraXtNE3LKdvUTQdZ4aeyf8qJrPLpeWLAQrcJLNHVcF27FBsstMaF5zYZfghmJDbgwDfV3vssEmTpBtz",
  "key26": "3xLeY4NFjvTmsu7Z4s9bvk6LLBxuR6oq8nRM9NGmBaT1yYDYxV6CWmUU2LBeb16pK2duc6ynR2g8u3U7fotg1Rw6",
  "key27": "3aTC1eACAvUwtg1ZoAkS9x2hG3oTjG4x2oGwPUaguRMg1ZwVhqy1VRutnBw3GuTEN1cgx25QEs26v3UGabq2YtGr",
  "key28": "4mJ3k574rLW3tQFR8pgQQneLbdUaHKmoPFTYY8J2KU3dBKmtxyA2a1j3uRAKjrTF1d8C1JFsC2HnCnBU9NTqEKGD",
  "key29": "2sVqi1mYfvGwKrZcfPY7gDutXMjzqCVtvpNTaWPinKSUtaBp68hQRh1QnsguJubB7HFXHqUsCPyZLfb7qqo9dNQe",
  "key30": "4ynbgprvNHaP85nQJQf75FujeRWgV3GKVXwCUw7psoGRQvJ1CVUhMoqLMYHs8u2WmQKwYoS4Y1CNrjBcV7uCJUW5",
  "key31": "3qd3uNYQPRQGNjZL9UyroBpPTfb9kJNyvLegpULakkZRKiyLTaUHtPCUhz6n4ZXaN1Lws268mZRV594k3dvVnzKu",
  "key32": "3YKjP6FQ1BxUENenTv3ZDytyg1gHHNn2kDXaGxci5pB3R8g3mrvWHwWYndHcx9RRfEonGinN1wQuPkXsSkaSPCKH",
  "key33": "4RtcGYLAocdB5pMdr9tR2saNHeNHDDBQR6vitBZkjGv4UNuvDZPSS4RDTBKjqjJVyxyGdV4uBeN1w5PVEHAKCW5o",
  "key34": "5zmE3drDS3mx6ZQmVez4Cn17wgbDGDbXk5BTV4KznqbYkzbbExFowJDCssBNkWM69rFRDdVsdgvBcPdkwoxHUQCA",
  "key35": "gBy2H8R8BqABYRqMJdjTALgmuw8JMsn4v33FpYcXghFR4SwbvNoB1XSDLDEqVsLYBWb7LizFQjkUhAKeAB5rKC9",
  "key36": "2zbr5fxUgbttRhf1fVc1QQMyKFyYx8BdhMUczgVpqNFfBwY3TkAYJUSveRow1rnN99WWjQQU4HUenUPy1jajZm1t",
  "key37": "2JbuRVXb6QCSj9uK2cWJNRrmKvJE4YGsT3bqbCN3QWdz68XVVUExcvSH4Gwgtz9emPJv3GjNq2SDJh9MVNJwbtQu",
  "key38": "84w2PCgSmAaBFYG7LSWay4c2U7zRb2QXQHHC265UogfUya2AKRR6LxFdVvpyKTfk8pwjhESn71vkbp3sZtpPbpw",
  "key39": "5JHKQAa7GPfMqpGJYPDUBH57LZNdcWgDCXuYTVW6iAHcJAENmjtCSDoKSpm8qdvACB7cbAeMnfJ7V8T3owBDeGZG",
  "key40": "5T81U2CEeWwx1Zz6rrZ8PU7cDF3Ku2SoVRpF21DthhqV2D7FGE9agY4S35616oUMzBVJxrRK8RtSXByK5BoYkBQe",
  "key41": "4Cf2S2opVhfXM5ujXToCNKM3K8hWJRkuWsNBoDwaF4Gu1mTqwffAEMyz89ZaVFceet4hmkJba2dnANPKJdEYgtA2",
  "key42": "YzpnEQ4xeboj4K1UCvthdSKKKURhg5rYjPPrpKbxc8c88GMBSvLdeD39A5og1FbWZHBEfyv7YZK31YJPSQCCiiQ",
  "key43": "5djbdachjkY7H2aB8hdRQxq7uvN1qQpPZBzoAztfmfVrg2Fz2SQaPF4a8qCsgFt2pEhReTyRnhv6WAU1w7PHfMLZ",
  "key44": "43CWncZxrpGEaXhLJm8joUzJCJFDheXA4zaJX26aUU1iELSgWn2qNQTqfgZDKZ8zFadoJXBFWQgyLYNEkGvKukgU"
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
