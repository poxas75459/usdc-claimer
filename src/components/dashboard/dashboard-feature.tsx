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
    "47RuBCKR51oAraMdkicGRVmYviNQQUWVjRdfg4urqYXNyoV3w9JZRns4BZ9RMNxRb7ie87RYnykXFTc3sQW6NCt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zxR5m7Cc8JyiDq41W4jxK73YqJZAcVWLL5EJ6P3KwiG5pTKbSXzmzPt4yabLKnrCs529g8mw9AiKFLZJbA6LGwi",
  "key1": "291JXrcgYjkYpEJHdJrU5Zd1LW5um55RTJDQhj2YLPeQw5jsYLJbfP7DYTKoViSgAdN6Y1MRJVNrW51Vd95ux5yC",
  "key2": "4tGEefxwdvm32VDGHPdyLQjrRS1UfFg9V57Tbqt3sJfRLw9B4eY2hzkUm9DkDgYgy3qdJAi7aPScHSBxHnEQmEa1",
  "key3": "5HWJCjrKvGse3xNmJS1Q3NuttPk873CyEfJsPTX9f2yjfTfYLNqFhbBgdxr9EBZrcdY52keRVU8De5wTyRvKMtYc",
  "key4": "2hijpEDYvKozD9zAHG2W5Lxh6868viJsC7VG3a14FEL1BNCBizjrYh7jpfmkwBmqRw1FW6TkvqWMDk5o4T4eCtsB",
  "key5": "jdc7fdqC2imWkGgjesTxgJmea96qCAeJCR8jPssLSNZ8EeDvXJK97ReevuNa3NQfpHSGG1f871qjH5m5NiYhett",
  "key6": "33JrnTV5f5NW3DKsd8wV8oxr7tH7eLjAVNjNjaGHS98AijCswBfz4q58cKQSTnpzsUi2M1zAdFjaMT84UQ2bzXFh",
  "key7": "5yM5tA2zJywLneAv5Znkhov1uHJhqLSCYUZQa3UbjESb7tc18Zr6nQSzYNnQpNSL34fELHH4Gqb572bpwk3ppFBD",
  "key8": "4mHkW7wd4GP7aPrLEi2ShmNsVkerYiQ7xtxDRZbNLPzP79abp8wJoZi6oomcVbDHunT3shTg15TsSZFK6S18F42",
  "key9": "2GHiWEa1aYqRuSbPCpaW9ywotyZgeQ8o3yGcMyEXft3iRRCk5oeGWE6d5TkE1SQtpnuvsTyrx4yPxQnhmCADRpNy",
  "key10": "2PphYhyVRri6GvX187Y4hunSbavkfY6H2tbmG4oHd6VZEJqfu4dCsX4sX9m59NLeMWirpW8rES26LrWcK5zP36B2",
  "key11": "5xBLDi2bT8bCQFRf8Z33PVMoLAzgFhD2JsR637kXsRAJyZPikFcoi6WKLv2WY7pt68pBmDbP4K9N9bUbXhFhYnAH",
  "key12": "53CfsdJzqCbpPdxLaGgn966eG1ihb1qtnBQFNS5hhf1u28rNmETGhfmrAZJ17mXcPvm3TgMquKQMSbrrJhFRCZmb",
  "key13": "22wZPfBhXpjuo5idZUkYRqU5nUqfAhsw2cRMeAPrNFDaTb1v3gvkeYd7TqYK1q5vBfr4LoyBr62TURpBzGB5qUMQ",
  "key14": "3te5vxqaEvnDpzLNWJx7PfCVPQQLe8nnZYM6zNNt7gq7b8Ue6LycQp2jm8iZe9Qpi1Dz2CxTzpwHaneLSbwmiFJG",
  "key15": "58W1SPhKNLReMVTahNfxUwjmKfqddSKwiLHuF85yqFGqb9p3iDhBaDYE4ZCdr95TDgqtF8cHtH8FrE3wL8iZakRm",
  "key16": "228wLCjncP2kbngBREDR5CfRCENMYKqwx4t8ACS9goQprkjvfktZHCqFHBStksysiVEf6f1Vs5uc2MUFJH5UhkbZ",
  "key17": "5NQBK6Jbafc5URZw9qX92bV2WE563YFnJ3J52MAukgfApb34STEABauTyQ2ZkKs8ouYaCSmq9scpAAdP7YvcCPhE",
  "key18": "4CwWYD6AejLbKJgvaJmtdH4oUiBidq28HLiDtGb4SJaSH6ENhXFCGkjZ2U9AvC6HkbqDiP6XocEFCHBVu61EN6fC",
  "key19": "36tb2oewMHMCHUdc78rMqgx8ME17jXZAW6cLGnKQS2bLiaxCf1DZPYimSJViNVf5msoBxZT9wYrXJs6H3Jh5ir4Q",
  "key20": "4byCBfHR4uQ5ThE2ynPjVQmT1h9iJaM1HxMVveADpTrzEJewp4eWCFxnwNp2t5cTNjxeAArbLCXHF4jz5DHGzXq4",
  "key21": "ZCCbBG9q5ie2481j3Wyg5CDsHEUGKgoMaj3MYxSkTYV7UY4mX1vPY7kpo7v65w2MYVTWHnGnwXbA3S4zCSsMKqx",
  "key22": "5MBH7LRDnBaCCSn6fxPBkAoSD65rjjNxEHSiSX8dUUqEFmVcGJFTfV3hLgsyUDCxJ4cDh9bsmVERKtwghYXr3588",
  "key23": "5zn4o67uqR6r77A9pDwroFnTBWoc2Y4K279YGzeUsq6DfqcyyRcaDjsi7nUyDeaFo3JzkGFH8K5765pHjPwDYCqZ",
  "key24": "4LwkEWQvuJePY21nfqm5RiCENeudDGFPvdgtJsRQLHknnaUmhNYWYbMkVjKSbkDPH8mpBF6YURBaXqGWx1nw88TE",
  "key25": "DuemsExXraEg4MJaRPCysovfBMNPADpiVYKTV1U4ihNFRNJdEeLMypWDgsN37gX31EKCChTC3nPhvGujE1DzZwu",
  "key26": "24PuhMC6PcxnB6f3ppebGueD29gNC65d271xw2jFeQ4Kg9eEiQvQCLbrjqPzeMXjhX5oqLRLGhLXmkoHUjsUzD7N",
  "key27": "X7jcF9Dka4NN4yh2khw8C8B2dDJC8fyCeLYKxaJaczzAte5dotSoD42wTiRR2dyrobwa7Cuexr3T764FALUCh1o",
  "key28": "5fUJcXvv9xvs7vTzYrRFxWVgJMcAAJgDBSBV6Mjg7S4BF7djahSxpvMSDSRaNL52bPXe7UgLyS3bG8paRpsBkL31",
  "key29": "5K1sYcYimCTwp65trMp95if6Ekym7DmgqgZVej8e51XMJzhu9fz7FjttAmLXEWZqv7vZMp5oNx98JdvTpkWSDw94",
  "key30": "5NNst9ww58Te1DHG1f4FtYhMPkcaKXfRwM1hbUi7voqvrMv6mQ81RyU4pxmMZrF7tdvLokTSyzJr9ckFQ4NBwDhD",
  "key31": "67rPveGfJAXURRRjf1LDjHzhoUA12P8VDLYKHWLfxLRuAmWMbcUzwBrAvw8k6nv1yNrZhiPVkX8MBHqMAwXvxoEA",
  "key32": "5EZgBRE5e75fGqNPCqfxLFBoSXBRHtY5dSeSrRkvqDrm2Y6KpqY2eXcwhYC9YNF6nnzZV7ounehPJT1aDQCMae1o",
  "key33": "4oMzHCNx3abi4JZz8mJv3fpNCV8V7vwtUD8yZTLJLDpmAD38o9kDq874JzJvgQpAKbrCAN8EFLtoTwinhn9fes6k",
  "key34": "LpjPGWhkJuFenZd4a6bYt6ngT4mGsLkR7a1iRafwrezbCw5RN9WmmKSHGnCWfWAcr2gL8Y5eLJxBmNNrC82zEoM",
  "key35": "48q84iWVjxvJuQPkvnqjiahUDcqr7Ph8dv82r4WwByGS8HaKcpNsi6Mu15s1YdsXVMiAjTye9kn1TviSQzJmrVze",
  "key36": "GsBbCXaadmmchT7E1J2KLL2tqqzAJNhJq5jgrFUphKMmfqUvJYXbK99RiEeHKy8VYgVVMCEnMTkKqjCQdx4G76c",
  "key37": "3nCBswdejKG51okigVaDTD77TU9LMscyvZbhim1WhPqnZHemAncL7aF6UsgNLEmNDGVuatVYkFTTa6ywMSfV3i21",
  "key38": "2TNtHG9QMK4jNnqGXraa55UWSwiH1ccXf5p8mUFbbXDFTepGWeh5NNdPXyHzUzC2X4BAytBMKUAfjWTokPpLBhq7",
  "key39": "5ZDvJP2RqYo87Ws91UVYamtMd2tPMV4WPsV6aKiCgj4hF1uk5SCrx9HfAR1JcPhwf492xdtjJ9dfkzbBD794Zn9y",
  "key40": "5Pf62cTmwCvgqgWhuajk7XcjZn6T2mF2w8KRhzBdx2Ege6nKrCTxQANzLa3wKsuzmfQGbXZrEwaFyxym9nt72dx8",
  "key41": "4BPSoqauVSNscSiyX3nXHL5E3B2bNcZ9jpyNAgUDYpSF9fPtGv6ZuCGXTbeVKFkhXWwW62s3KbVVdbuWL2p3chjw",
  "key42": "4LCSubBktCwCHu4vtZhQM28JzXpQxyzF9Tsm4AUQFGq8HixTQb6AAv89geK2fbsxTiv6txU4xWVeoa9gTbiSVcNu",
  "key43": "2wfPbGYu5jMsS5aUsob3gZ1f89jUokRNUd1Qx3YD7s83DzNDDsG6KyrtD24G7xzRVTuNVZwvKb2ARHhMBoo4rYSx",
  "key44": "4HAH8KGBruERS5z7pLPh4aQADLYftZK35ZTo7krW9hgXsCz4x95RjB4rBK9rtjzQuUwmCoFkrJbXz63kiJofdJxM",
  "key45": "5CvaDnoLcRdEPq1C2ZuobQngWeB8NB6K6yDMCdem3A3ctqmGjzwhLpDRHUHRNHDa2SoL2B1FtaBZP2WAYSogw64g",
  "key46": "5e3wpaj5h685cV2VJnP8W1YAiJ9RYx1MTNFy2TsG1g2M2hZaZHcFfRngymD9yF2zKeW9zu9Hb4UZDkyGezQYmeM3",
  "key47": "zDWa3DqzXkchvMPyL2tZdCyWiEeqfD6BnP2pSVFNvfuuJP7F4RaX9LNtofJTtXgaW6bvCAj7dDnjzppYE6r7jFf",
  "key48": "46epBhL41EE42V3ZWsK6M7gcGthvKRbSATJYbVfv1fqNnB1oCL7v2HeGScUm4dz9JVPL83JeVHUc2DNoa9xYfXrX"
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
