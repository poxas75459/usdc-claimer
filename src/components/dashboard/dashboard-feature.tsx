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
    "2BJdrFMGD12eKtta93b2W3JuyTzxAehQpbD7pPivMxezqw2H9rJoe6wSi6DwKvo9tXaVY8amKaNXGbvzXMKi1gwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3otHNLq8KCxPfUMnm6Yp9UEYms6VH88NpBr5v98gZudatKcxfneJqHBHienrCRPGfzFJAg4E8yu67zeDbTkd2mAm",
  "key1": "4k41d4hV8TAgXT6jeeaGrCJXyBN6tGUcTydATMJn3Mb45yeFhYuAT8vLfw7oi3quKTqKoMGwGT85qBbrP744cbrb",
  "key2": "4XnXUEoW44Fu8S8HG8prgWfmxjN6FK7BBnmozVqzvPhQABhvCrE8wfGcMT6MaaAUnX9HZLVWnPH1XQDzkq9c9uNY",
  "key3": "616kCr1pyVE3aaJSR8JCkGP5J6ovPxYYRqUPvXTWhWC3mJg4zXYgtJhfs9WSbk2cfBG8J5PTkiV1ikqNnymhCmGo",
  "key4": "3UxwtFg6gbwfK8PKwLdruu4sdqBnyNa8vfyZAEjhnAwVJUyiBvG1hD1bYwEWnLBVAXAVsgDimSCCRvprfoK7Y1F",
  "key5": "4bsP7iBGsqG94mesQ5TLNDudbru3QGgogoFiHN4zpxiAk6yDybpe5xrXtVxnNSeodRsp4bonxHK2NbBRvqLngJ5X",
  "key6": "5D3NCofkc1ta1eAgE9FsYogL7hobeKeX5z7sb1SgW6xQPWJMhE7oSPTS8wpZMQ2pDBNagJdo2FBDDvdgrNtbNnBd",
  "key7": "toBfQWKncQLDcLtAnotAoVRWXS8wQJu3abHbmgomM2WLR9HvtVRq6CgE4UqDdSAV1sKuYpDxm5J6Z4WoJdvjEB6",
  "key8": "5jPmFEgykGxaz66NE1jdWkeyf8U7NuvPFuwSU8BAth5MvEPP5vsksZdpyC3dJYo59rDjm71CbtLXtfCaXYht81dr",
  "key9": "q5dWLvLyhbuEA3Gj9hrreytF69FivHRe6rXmoCR99SXPPbPDT5k8eJczXRfWBD5k6wjsGZLidVB19XTtz4ARWJ2",
  "key10": "5oH4rinq8N883Md7JeiMfdVbC9u3qeKQaAorBej8VUjtFYece9LG3eDXTvBTxCEFeyHbav6ZJL8kg8mEt4UKF5ud",
  "key11": "vcLtWg3JH6f93Bvx7hJERUmRNdiDBDZBncYQpjT1BW1Sk31t5Qvrb9xtqqgdTSFKTxB3LtRrWVCzdtpX9bHFdxf",
  "key12": "2m53EMYCVocbw2Wg9r85VjtoScS6pupmvLBteDXRmaN3qET9XAAagtsewKGNXmQvJwjmZvm23g5QVAugTvn8T4CA",
  "key13": "4XfHjcRrCZvYYFBPmPtqe6b1kvDjX2HDZbzm8Gsk3TbVceioFibKEDNRMNbjdMHmrL9S4D18ZvDmgFK7mNd988Kq",
  "key14": "5T4t4p3xuwJpxWtXva9p5vzmo9tHs5ucy67fP4wddFe7xxbp5kC17zvywewfC96icLsQnoatT2nCpiA7jxmvowUq",
  "key15": "29YZAHZffg7z2xkhRZGHR9KLD6oJt4JMtnudkYFHApBpSXT15s1a3UbpQ6uMEDyT8icWnnurG4MQwf5X5574nq28",
  "key16": "h4drVP5RXsHMMZeqcqW9mC2AnzUHzt9SsMizUcUbLkpMakBqGb9xsqz4jKqXf8dLy5M81C1bc8RAaid5xLLf8N9",
  "key17": "3gc4VoxWGSNVaPiRdSV1fzddQrdSLpjQgWLJSMdWPETLimenecQ2FpWfQKbc4AMaat7XRPSd867KmHGK12Hgw54g",
  "key18": "615n8pstjV8GLYyyTDhjpAFQCXSC3atuXH6hcv8Ctj543gTbWyei9ZBDpfKJcXdFicdDns4YRUbuh5DDe9UyHfv7",
  "key19": "3Ku5NVWgW7EPLwUNm4J5VqRxpS3YL3oCncrDHMKrofKSpKTpyCcAv53b3DNTJemnhVE1ZY394L1zHidzyseuKRGH",
  "key20": "2X7wvt3ecdiq1CNLbDKzg4AjpXLJr2HgtZuoHF5YoHGxTJYDjD9bRr4cBnmi7NprD6uRNqwM3zyTzUxZkZhegL8s",
  "key21": "4FpQySbQw8wB4biVLptLaLw5qtxbfdsJsvpQ7up5i96wqb8ZZnHiU492dGn618vWGgwyDPaqVtMn8qmGdTDmvhQ7",
  "key22": "5RQc7EaBGkie7GiamiLJEekBvsnJhypTtswEgFMs8nuCiKD5Rm81eHecJDXBFKXxVp693gkxrCFFZCaD29TdcQwh",
  "key23": "2cTJ5cw7neUj6xySu6zDHUzNGwwZ2UHR5WKAP31MtMF87yaUVuzwsmtrS6CWfBdeWHe6jBb1yP31yQ8ceAefh8ix",
  "key24": "269jQqwHQYsfyeUbN3L1khhWRzoYhCgiRC3Te1KsH9rAtPoWfxjiPdioMcdULd3UK5kx8URUqHkmfGqWN6pdcTMR",
  "key25": "3MXaQdtuqTNvfkyFSnv9iuVxMEKL28CAQCNFNmFb37bbTMWN7w4T5EfXXQxNQNpXmQpuUVw8ZkRvW7hp8f2mQQoD",
  "key26": "3c77cLfN3fHZS7hw8Pqq1UaJWALdfeDoimFenXaFATwXyU7f8tDX6DGGtu144xsXt2yJbTS6YWuR55FMu2iiAhvf",
  "key27": "5mqMkRQXR1CqgkkhaLtDMjgA87vweivncy6oQ9FfrnY3aCWrQEMgBSibYHxEiBUrcPW5bPgA3uyzuWmZEVAgW1zc",
  "key28": "4n5dZKUDDmZir8WizZhUc8TgCzWyrUdJReUsWcVysk7kdTdPvhsynCER198JrB4YmADqFgEZGCDmHqymoaQZg5H7",
  "key29": "23gsKhvS2fLLdbfe2ceHRHCsp8ufUmsAnavivKLfym1AftALckv7KAcBHQFtcUerqTXGh88Eo8dXueTAURyQhDgT",
  "key30": "pVWybJMvpSwu39B41L8KupxSdtNdtPcfEGRmSeqxjahmF59AdpMJAdGtPY92uGZqFwi9LkDH8nBU5yijhwU2yad",
  "key31": "4hStvXDd1pieoTyMUsd2AVapB4yFjzMv9VyVYwDWAZwazb8x2aBsuJpgj2R3AB34Hj6nCb6rzFTkgkMTX8UAEno9",
  "key32": "2i5heAn8QgSyxhndBwoTtc5N4Bmsa8rGnBjaZ4jeVyKDEDaKbWLBwCdknKZ1pzK6hAhSggEq42xUWTc6bFtr5LjX",
  "key33": "57XQxPzZqPnWU1gMzBUxZnoUDgSUYcJRU2u6X8T95kZK3vFf8idBVF1XREVwsKrgYLDj5oR9K9XFDV1Du8Hqnugs",
  "key34": "zHh4cico9ckh9DeNUAXAQhzAJkaAheQ1ZMaP8pPd3rvhbMgYHmXRkp64LKm536vZk9zte821RYwgd5mpTKKGeJA",
  "key35": "3TtaT5qS3SXH9zaRFeUbndYibwFHszDiWj3jfLfGWU7qsoxzDND1TBC2pVoS5WVpz1rWAGRTnS3iqSUNcPeCt4LC",
  "key36": "mm6kkrH5aqGnJMtxZQbTdaoooGnmW8UBjjJNQy6KhC48piC3Kyn5wN62Dnp7Mv8Cdk7tnVv6JRkinfFHyvfEab1",
  "key37": "DvihXjoFUmyM3QQRMY1a2ZJPDMZvarsY53sERhBkmkwxcoCjvjiPL8oGjuRLVnuaBzMi11D1jrf94RMikP6ZQax",
  "key38": "KQ3fZLaeMNWtP6HY8SfJ4uTaXavirVocRoSto33oJ5sp8MwkEGFgT2WW67teiREbHF3R8xrTd9iJL6KzrVSgjWz"
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
