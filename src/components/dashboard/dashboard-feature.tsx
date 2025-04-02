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
    "2WPyuTxf2wsA139g7dpAeyTqcZNkjEMWxTP4p5u7ob5assQffXWbpTgsSGHCxfRHHfHDLfuSnPTFTKwKAmQ3C4gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2egb7H9jWAKdE7FvD1mCGSx21etXusGbBy4SGMCVi6ZLJuLjFGv4AC3NzFaGgefxSP8xrGCQEgzaqvWmFS5QFCE2",
  "key1": "4ohxEQHKfdixqgbz4cZKpcsgc7UVmHQZqGY8QnLpkDAfeb9MUb9Wipug4LVHHKBertMjwhYYpMNuT6AvgAYQuUCy",
  "key2": "2w3HNiYTs6w33FGRRZGN5D8v1f7wJeB5aZJrchEQ45acN99nf23SmmJEC6d37N7owC8inNT9xbYkYBXsgrodxgsX",
  "key3": "4gEmeyF4BiahWLEizPUkofMcSXsEnrVS8JjDbpPsw7xMM8gscABpVRdGgcRtUKHXiR4w8wvEV498azd4qAjuqnXM",
  "key4": "57ceiDNtamd5ohRDt5KAaJKyhKtBnz4tg7mDCKtwK1rZNYhNKrLexJw9usrSdR1gc2Fcr5cK3FDztPKW4LmfN7af",
  "key5": "5cimoTwExevtZdkLuQqb3nD5DB79WAzmFk3SEgNenL2RzjSNvALRz3n3wcA3w7hCBcMRBmKdfAbmnqv6FV3ZZJ51",
  "key6": "AiYpyWYaRPub1AgKmdTWHTBLRrBEVCawSBBCE5zgMhWKMCrqRcER2ZTpK9gSTZZVbHCgT9YZ8QigSAHk6Sni4oR",
  "key7": "GShq9XtW7ENnSLXP4hSjtfHB45dGbT6qjF19qLiPhJSMvdX4rqSbEriGSBEQR36mdkLcb56KwoHsZjiPJF9yNYH",
  "key8": "5fZdRMZX7yPkCyfpibcKw3oDXzYCFZPZEMFJnxed4UsyBkqriPVh9bWWLtNPoU71Cm4vS9EF65Z1FMuDt2ZvZZiK",
  "key9": "5nEi1jWWFfv6uujYKnpsA21KUpcp5JqSCuUnsrFk7kGAhx8J5aBLYyiMro43PncVrSLt5VkEeaZX5FPyjCj2DFXp",
  "key10": "4adeLjC6GZZ5DeBMe1MqAFuvHqnXgqUiG2nWcswdBkVDw3NGgGDMMxGYDwzBUJ673ipm56xSA4XYG76aiWeVcakx",
  "key11": "3ZGvuQXBDaqwdF6iMizhMV4AqEQAP1Sax5RYq1JH3Ev4Yr4Vc4rZsgndcMJxyrx8VS1jfeYAQmtHuQJNAbXiMJNW",
  "key12": "5TtRt3yWp11miKu3u8xEKJtToZ336AjsRdWkfXsLakYEYDWRon1FmHEM6TSmYgvKzcmReihWdTnaQfbEvpK7nDB9",
  "key13": "4cLAYw91fiYiv5wkbEaeUHHYU2PHfsbrPGD7pPsjedMvGKrRbt9bjEMoGKXPEVYenYx5Ged25m9CL9TPj4yQtRqt",
  "key14": "2iDDcpVnvsnUgFMLghxb7Eu3sFbDpAwsW1Ev22ytA8hgMpYYCGhpEKsCSiDQQop5JEzqfmE6F39aBXEKzZdN2z9o",
  "key15": "9NYA1uVg4sbjjbzeMRFz5F5FeYwXj2ZsTm9JeVQg71TK2UXiNMSoK88qWx8q6ixV5gGMiLRdLjwEfCQmeAkupC5",
  "key16": "43iyCSKZqTw6bnMAmt8F7HMnY88dx8LUzmU1CnYiwRcUC229qdCQYrJBZoTfCUnBDg4ve5QKHvUrzYRrNQrRu2Wa",
  "key17": "2Dpo2kVq5yMHs6HwJD3JV6gvjc6QVS8jYUMETnFB4Z178VEc45XNdE2tHRP3Uh1W9VaJFDTEwoZj8eAoowGVZdGb",
  "key18": "g3YqnNC6xPtTWK8d6b9DFK9tnQA5mHVVzcBUCcqZVETVrX69pMXwRENCYo78fzrAkyFa1N21a5xUFUZCVkF5sCL",
  "key19": "4BiWHWLdgCP4XqxvwHy3ruC6Yyzj5YJVHttfzqMyEfPBmy8icvdf9VFaqBUYJkM5snHJeFbcREnHt3qEo7y5RYe4",
  "key20": "3KZEGVomdw8N9M1UH7Dy6wGqc3xaNQj6uiLfNnoCdLkcQbrPGiS9n6uCkRYC5FvPXz1tPqCd5EAPcgtCzp7jQ8DH",
  "key21": "62cssRjEMdjXxNPzbwsm86pU85whxTFk3WitH7LXgEtoBHeWPXHjBWqkDG3UWBLmbAe5xHyrD6XCjjenW1J9xHzU",
  "key22": "4S5UXjB46NPu6geKQx43jsSHxVmrhrhgF1U9xk4cqzNWFjrF6CgHJVBVgMR1iNTWGvTMar4BbUcEns8RgtK8QSLh",
  "key23": "54ba1isvnu9Cqp4zs4aa5tVuvtVHsRC9GsRwFr9jv5GzS2isLj9CQC4Mu3WjbbP9bwpVMayshYRWRFpc9VJjqcem",
  "key24": "4oNnPUAV9K7kgVpcdyd6X4ZwBL3F7eZEcwRaVPCTebBmMSMk7yuQ3PxYi4iHCYfRj5nJyv5JcXi3Wgw8tQHZ5nmd",
  "key25": "3R1bT8J4L31rU8HFDaw979fUdfK2wd46BdVzh4oANsH1CYDJnLiwZ9ga2JTXzFqDwxVqf2PAh2eJ23iHbQ8yGu6w",
  "key26": "2jw97v3zXCbvgpJVE7nwgXQi3RWupQ4xmcskBQBAcBWbhXYQTDEbyNxqsA9VjaMdaXGchR29KwkSgcGQphY5Hc7g",
  "key27": "3rvPMG8VQGVcm6zxZW9Fv4oTqdpVPuoQt1rhXzEVyzkoe6bvPpLmYoGWroCqEvxr5NRmgjSQFc6sqnsgLArBLRgj",
  "key28": "4h3Yu4pTsLYLNi9jw7uaApMwEphvQGMbTDtyXm8e6L4BBgRQAA4KMuSJCyvw9t93S4krLf5o1KG4Us4wTrkxWaqZ",
  "key29": "QD89R2unmKVCSfPD5E1ELZVpdWD25MaAYB6BrCU5tycFreQ1gwREReYUvBorQ2bYTg32kUYcSXThqytT5QpJajM",
  "key30": "2wdaDJGPS1YbJdv7vdQSFJuRpgRA1DiXyjduNVVbEh6LUapkT5g6CtetzJ49cgJoYAyFwAfYsfnD7t7uCaoffaX5",
  "key31": "4YLs6wUgKGAq4Why22mYowCbaNAzedSqmfHX44RgMCDwMgwiB19LuM6dkdmYMRUyGUUgJWiAA5GefxGtCu4x1jr7",
  "key32": "5M6HxbFnMPQtp45J1erBTD8ujeGZqi98w1dTfW2GFiuNJi91mSz2uimaWyDJNzt2FpFzwLHKc7Yk5yvKa2qY5LKi",
  "key33": "1sK4maagJtvr21uFSChA9oSAqqXKorXoYpJ9z5MST7AcY9U6mWLy75Qku7iPpgVurRJRKZoEV6ouyBYDzG3Ybax",
  "key34": "AqF8Xe6p44HSCAfdeEtDbUoj9MNgrVrda5HcRy7Lb1hVYgDvHUki3wyLdfpWRRr7zieDxKe8Z11e3jzh1ydnuB3",
  "key35": "42vAb4kaWNzCaMpQgh8WwDqgXASP25u3RPFBWL8wZ9hdkNPP2sLcHsLDceout6a8BrRo1Ji9BHHWzbJ5sMcr42tb",
  "key36": "8Ly7kXWFzrufBce9An2kjMk3hiXUcqsgMKuPaSbrekLRT1id9VivSnfAyUdqE9YtzfVz7YqokUYLAVnNU411xhn",
  "key37": "4DHHmp1PqdjTne219DvH7Nbnq1cHfAKDxJLHPRwMiWGS9sb2LAZUJJGjJZUZrZkTWgrkcZ5iQWSsTjoxBCwCzu1C",
  "key38": "5inXMnEMXjQSf66QjiK9MP2T4MT8sy9jXLEj6gx4xSdMP9zNrN3mNXspXbYDuQPatHYhnGPK4t7AGfxGDzKQZsy6",
  "key39": "2i1but8y2BwErfWfBKNyQitfVAfUJZPTvETM8Qnco7A9q84afSvq8WUfgKwxKBysoBxTmTSiAePbFzjFg4SY2jqW",
  "key40": "WresbX4BUSJCWpP7RLsLsFQ8355aAYa5oyERo2dyZjKihAgCbtLvCUGhFYBxFgzS4qUhzcv4BH3p5pF8b128dZ6",
  "key41": "3xaHJYWaHdCA3PN6UMRWKQ6PqnhJ6D4gyjrGx1tb9VC2Gzu5vwY4b46VJJCkTeju1eSWdBr2PDQ9LWKEtZt5Hkif",
  "key42": "3nCDFLC86UsvPJKuexKdkY3vwEB2kAuqbJWHSW8haBwtx5sn8SziF6SSjjTGmKUywYVcbqvBgsx11D1MAKTCM6je",
  "key43": "5xMpBJUQVExpA9AzyKC6aenNivUeG7bADoa1WmRxrttc7ovFmuoQfiyJCmrNiVGXmJoYAAs3XqZNvUW2ReT6Bnap",
  "key44": "ZpSrWwKUs3fVWBfvw51yPNUSiPSh4FAsEQzjCkKb1rqsFaBTLAidemspSVLr2Vh7geYGopSb2BZLLaEiAfRjYTn",
  "key45": "5nyA6D7wPp9eLUEWPiTd573RAAhm3AkVYukbUKeNRuPPhJDuXqeHdF6dUo1TqP7DN2ErLBnfxGwQdZ5bxzyPmkgT",
  "key46": "5TDhwHuFUn6g11JupgfFfi9RVoTXCJu2rwYDo4NyiBW3VUFLDxPE1SbtAi3bkvoopBkpVQmkvRR1R2rHwpiVMEFK",
  "key47": "4TJ4X6qEr8CypGWsPemZRtuHChvLX8iMVbHJRofXsZXWdLoET5kFvqm1UiU9vFe6u9eAf7KpsWS4KSahgmUK4ttu"
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
