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
    "F69xcUsuV3kNruogdXo3n2gUGdHz5GxaaFHJjziy6w9CJnYG84kDgyJJ6raHU5Xo4DVJEL46dXCPh8yjjjKKVs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64GZC3GQjnR5hCvrtcAF1iTtSryeHF4uJGMDbdrb2JiFawsLLdpZo4yBgRuRwTLGWjj1e7LYq3WytLFPf2Y8s54R",
  "key1": "2c7wuZz124JrLRo72RE2ibqqqFUaDpj72M4P8muuf7A9k6XwqFzx2BsA5aSsmxxzr4HQczFKTqLtWMr6qw3hjhz2",
  "key2": "5YtoqGZVtPeg7bLCdUPFqxXkLEB4d7dPRrEEgtLujTxJKizKBcHKiKTtgHhkYu4etK9xyU5EEu9mND1DujGYfgQy",
  "key3": "4sFnhMm2QaXppGMtNGGyux8r9ayyGFWS8Cg976W9EVesyjFndqLAPFdtMmQkULrzwNdeR3ayHqDmXsPx2A9TXbZK",
  "key4": "2q2pmFUkNK1Ee2ztBr1WbunrTXZfUXfArdj1zTJ8vRy9RiBrah9BcBkWAvcbCutijnZbsdcjhg1BsyjUah218d3q",
  "key5": "47PaJKdzBn2CiwBZQtsTP5shFEW56ZqKzeXCb4YQJsqEPX5ycKWKjCo5LW2Kastcej5tSTDp2QW3kp2xTj2CJsA8",
  "key6": "M4SKDeXNy9pss1sGapfrsPzVwkrTZEhD7D9PXE45QMFcqNCCVnDwhrQtZcvjwDUtZyJr4P3dLdmen6M3g3pLKhF",
  "key7": "23wTMB4i8VD4YRHzZ4w4TQEruZkYJz848KBXB1aUP1pMFy3BTtS8C7bY2SxthVYoCde2bkERhVMty1Gc2PLCAgWS",
  "key8": "5NGzcreUwzhLU5rspSZHiGfgwBcoBR4LtuAb1eZAFCJhMdZ1iFigc7m54tJWeF5CexwEwnTxLYaeJahBvGFkNnYd",
  "key9": "2ucCY5J1cM4Jfee53RjxjAm4VgyvB3Zk1Ptuh2mKqQBVdjhvUQwco7p8WedbcUstbxcCX2VdeJBsdHPLVbcreQkf",
  "key10": "2x58AHpvrbSEZxEnsRLj1P6QFNfeDqhAC4qL9yY4fTDDPmQ1F9Nb1WoBtcyExBfmA2sq2KX96VtsTu6Gu7B5xQxv",
  "key11": "2ST7Y6arNBoyqcYqUxu2qBGu5mPPXocMMHfuRacdfd3aZLvra7jyiiT6Mo8E5yKWDBiATmikF1HgTuYkVCkCNn6n",
  "key12": "y224PWvYEfM92L6N3MWP92rMfiLDA7eJyPWFRUoFN4E9vQj2HCY2hBAfsQ6HFAnMXau9drbb8RumM2VqpytfpEe",
  "key13": "23WPrbepGYzUZMGR4i5z3s84eXZWDzNg52GVQ93fpDS3YDyvcfWT13n4Zox9ofog27UKcK9frKnkRo5gKYXqbCv8",
  "key14": "5eKJwkPzqCjd3W5Tkx5HpWCj489ARHkzdtiT9AZ9MkgHXQeJQWDTor2Rk6S7gFPrJVDtjMRfTkNFK2vTg7eMiK7g",
  "key15": "eNFHLCJvTwRPUBvDfmQqnzu8JLhpCEZ7bcrDWg8uR2VKRjFcsCqwewZQr2NoEMo83ZABsGf6pgpyHGsLtPA2pcV",
  "key16": "4yBLcHzSAJYrChRvms3GPgJL8sg5XHLtHJTwzc5V8fCebdBPv8xRh2rAJ4KdS98bgbe596k9AqrEJFDammCDCdep",
  "key17": "52TVH9HJPyBvsKiQjRnLSLvzksKv6bMssGBiQKMy7ahfDBmRptTfnjvaskEZyX19z9XxsVTgReNbXrtHNn8xwBDU",
  "key18": "tTF3wmNa7B6pxMohg7ZCosWsAd94pCcFDBPsGMY4KmmvaesmSxk5iyDxDqdXLmcjoj1BLiaL5qtAKru1xHMS5pP",
  "key19": "5X6EHP536n8RZ5PVT2TQqCVYDi3cZdeupgfezhj6fw3xBAyjAxeiuGDqzpZHLg65BbmqZ1xKmRzH7rsdehZP3TfG",
  "key20": "4bruxJ8sV1bjFEmzDBXXYUnyUTajZb8xsYoTDN33UwQPV1vMmhweSQQgacFNHR6ggm5XwYnX4yVVuQ4LKpVBxkuD",
  "key21": "5FXAzYdv18LDAGvQuREmzpCpBFWtc6xyV96R1ndtkRoL28obNmoeemf9bxy5BAdcosJkSS52NMmEnRMmD2bLt8hJ",
  "key22": "qkGzEQj7b6gnKbbG3697d53zBRxQc66CcYQQpbhfcv761DmJheQCRLjorpzR1avT4E6Dqz8yPznkEXgU4DaP9Di",
  "key23": "4XaQ8mSyyEZkUsUv9QimcpDziPHirMVrgLDVzurLy7iujksK39QLMAv5ptiKGRx1hdBSDjroGrKSuviMkmiiYWb6",
  "key24": "2qEsw3fngv1wmf7yJ36tsXMxMFGjCcYRAUUCMfaVYUZM4NQM3rGrMbKaQrvQNRoQoAqS67STVx4hZjLMmfB32DWX",
  "key25": "3o5DUNSxETDuuaed6AeRFRH8hr1CjCgRmew6XRrvjph7uAVd1PhBVHPQS976CMW2Qs72D2KeAzbP5or9rUZm17ij",
  "key26": "5Q8kmPfmU29Vx5U4yG18NtdAWTeSB5ftxifdEFJoM7ZQY32HBuySawiuMB1nMaCronhuikk1EJGW7vL3uhj9DK14",
  "key27": "3yCZB7SutKt9Kw8b5TjcrMispGhfwtz5t4cWLb57Pzsx1Y9LxC9vygvUkfCCPLi3dxrLiS8F4WhyAN2ctUvxefKK",
  "key28": "5ic2o8MWgfPds2vHWaq9RvvpsybJ8YfWGoWdxjB7SVFCnvjisFGu51odogssYeQ2R6U1nFFiphvZ3enJ2WebYgGm",
  "key29": "37X8bE7qifWw3U7AFxUggxQ7MSWCU8WmqT92Z3gHRaiwS4a3iaStA3hDEBSrCuJW22k77C6scAMFvUspYuQy8SGg",
  "key30": "XcD7YepxwfeNA6E1CfDpf8PQEf74mCEM1efbWhRyAa28LUWkn4WTdKFEjuL2LEZY9woXWKRXVSeyMVAofpmXR8h",
  "key31": "fXPaYGDd5NL1QJrZcKy9sqeturarKptpcfAyUscok5D4jBxBGhhAbGYLSPmZkRmBFQXS52wa5HzaPrNu3E2DxQD",
  "key32": "4Y22BBC5TJPtwxLVVsJ7wkBcBPyhHP2LAeF26yRad4JP4f1dgd5b4ohUp3hya4dd4ocoaj8kHh7fJBP6ezbwezLg",
  "key33": "2uXAKaB5nGY4W9yEVofdvmoogj2HQTdUPniAaWQVK8rGwzVxzGPygYRY7SXeb6Q4hLDn7iuXmHKoC3Cu7qwFya3k",
  "key34": "4t9vVgXb1CTejM9sdB6FxDaxqKYdrXFyEUPPW4xUfZK8XJJPCNGAEXBVeiVci6ZdRfdKHdFGGgsc3YZGPV1sHDVZ",
  "key35": "5b23ZfbzvZAbjaaDJXwWrBHALKihL9ySsCUH9a75Uib1SnfgEbJ4m8yq5ZxqbdA6az3HjHpzz4js89HHjDiQhTUv",
  "key36": "3A6eB5wbcGgTAgTiD21xkd5etsidtAh5Yq63EPXwdUmfMeUUrL5Au9TQM5sEWPuB3LexNAHhVr5pFpKjGuSYMToo",
  "key37": "34xZYeui8eLdgYagp12mNCCdcxnt5NEuW1xBxKbL5SMmrg6i3Vn6CnrJkXwMLBKPwzvD7dU7FQt9C2bp2W52e1Cc",
  "key38": "2ApX3LXERyZDQfzqR86gTt1dQ6c7pJ4U4JBgBv9diV394KU3vgdXMB8vSK8Uwbc2YX2FASDMNX4AkCHWRm6PHTA5",
  "key39": "4A6YtyH1cQXuW84LiN6v1iexEyuLGK3vGnceu3pQ7gPWvGdZxxbmUrrLhPjJifsi35pGAsaPthXdwooR9ZKPUaqL",
  "key40": "5gN4gwUMP5yhmC9CMrYVaMbdtQ1zJKBmfkL1J1oYyUUh2RY4DqhRdB2mfU7Pw4hTCbA2rGriwbTDS4mXSu8aooyb",
  "key41": "37gbL5wuYjohgnnaRyEmMMK7g5YeBmbjyaMz27PLpfL9hZu3gccJNcSJdt3J3Bj4bB4RyU3JwrhGFvQzBxtYUuut",
  "key42": "61QPU2U5KPx3GNNdsowPbpwXoMrzQG8cTMmcTi7r9LB9oq2DrvycCwkNe6ZizS7Ce33rx3fhsWxdiZJTUDBUjeQM",
  "key43": "4U9S45EM7tR9fbfaURqt6z7sZ6dw39m3DaxYfvhLbjVkiShnvwHkbALHPVNcpPcJNPjMC3Mf8rieii6d5p4hN3p8",
  "key44": "3ob8KADfhi2oVyz4pXKAYPNFuCeZdYoEhXj58CuzP6oZ6h9wHChBkQBiDpwRwUT9kq2vx7UTqJKjm9g6FxdmrgqG"
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
