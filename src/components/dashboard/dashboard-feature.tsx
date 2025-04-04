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
    "33c9v8qCQtLkhj1152XGToHa2p49uaSFfGZBg9pJ6PFMYWpo88LVfa4fiSyphZ8tDMG1wFy7tQGAkKPgsWiiJdNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nxamArCvitSJSwCqstA4g9U2fH6sY4ULDfDHUqnaNE64hgen9gA1t9hwTNuALR3dqVw4YkuokoSSHtVsrgQvFws",
  "key1": "4oKK1pUiscaMtyvn8RETGWJetch5VnQVsZGpiMFvv8EEhbXtLqQBCohwhoGra493f1QcFEmRtwXroNLN7ywS7Ghg",
  "key2": "4SAxL8avfr8fZPopshCxwxGARv913xamoLoPMTaJYKXeUe4G6VS9NioQFjwYwYUtxwZdpkGYMcERE5hAMQnbPNd5",
  "key3": "4iUBWkkAHaA6jsSQ6AWY7C3G9o9u4kQTY8WVVZEJnYpuDz7cUe2YpPJttJM5KjQRxGXzUuvou17VZU1Egq2nXzuQ",
  "key4": "2ymy8TR1R8VeocChB36CWyRjnBBuhJ4vLEg9TZZVS1ndDCcCJauGq9ZNWnapPeJaTkcoC3PwmQyGAogUpyvU292k",
  "key5": "2oB1kro68fooAGhCnbqt9ZZtsm1ZrAAmPLx2dyX1CY3nSyGwsdL4z3ZUcTvYoUgScHw7hAoFChUJV4jRm3uLwhJw",
  "key6": "4rTRkHWmYCZhbEdz7dyS5B6s7uqa3A9xCc7AnTVNNWvvm74A8B8GRPPTk1iyDzXGsL51cUBY8o51M7ARpmCzKqsc",
  "key7": "3Z8fYNCVp6VS19yEGQz8WU5yBV77a6JXbP1jHtEfhUoSE1isnEV4o1XPiNZ8HnkWEch1ksnPcffGjFsbaZVfDHCx",
  "key8": "55Wd4FFGhqHiQS7RfksQCSoECowqxvaYsFNZ1DAsujvA1jFJVwfYFVk9poujK9HN3G39G7x1XZUA9Cge3pGtuJaH",
  "key9": "KPYJkDBNfKoJAU1j1MsPtkM6N6yZdJZzHEcf8MDQzZv7EnU4FcuV1P6EDbapLGyWhdxxsrqhaNTBvN5paj258JG",
  "key10": "5VjVo9B3eXiyaGmaFZSUs2MaxFphL639krd5bzxX1irs29oE6KErAYPcuRkDEjg4w6TF3VpuZwkfSCU836wxrxqA",
  "key11": "3fRHrbwW5mJ8jbsTxRmn4fCaLXMVci3qdGweeCRAHLdcEqq53VAuQbc8g5WyTWhKzDzkid2gC8yf7u8SZWoaNS64",
  "key12": "zan8vJMhuz4VNLFV4woLWEX1awRoqtPwH6XPpERaiVsEWDnAmmsGKbEZ1M1PCuNUmSs5astEofRGP2h15SFRGoz",
  "key13": "2Z9TAnEGC4ChkAMV5286rR61KyLdXhYaNW6Mzk1TjPRuQajtcAjxVZAuafvVpuGngazBNB5CTARncpEct4G8hBEm",
  "key14": "3WddcAiAdRwtU5orFj6DNcbQcz6WcYnBE8zFnSbKP9c8sELCHi9CJf62wc8W6aeBd92Luc7nEn55YhVskFNP3pYQ",
  "key15": "ujj5pErEJn8SzH37bZ1jC9Q8vSjhcQLm32md9iWhJfhkisAJZkKnUj2RgjnkqaZSPwuqJyKJ5P9L38qPuo9XVgG",
  "key16": "54CHnJ3TJEj9u5XG4yQCwRSfMchgZpiynhJXHVByd1fFaWXb2rbGNcFUarJFG2BVCSvvfFyoCgg28cCLaVWSHew7",
  "key17": "CZ2rQyKHSnhKRZhe7vbGDiD9tSxecvKwJJdJq3DDgaFUGBx2V3bn1szwmzDw51kpXEv3L4WzwF6CQeWUTaT2gba",
  "key18": "5h9VFCnwtsNfmmxBtVVtJJkKoyaRzkV9o4CcuAupPwjAqY1i1fBAihUpQAh9CdcJAUG9YJFMFpgUXY41D8oPFBwh",
  "key19": "49zX7qcSoEGoZvgEMKiMhHHfjVqbLs8rmsUicPB5xZwY2nS4ef6j1wkmyQ74GxNH4amS54e4FapDSjnrYhUDNtZp",
  "key20": "c6qNHYS1dJgm9sidKTzEmbQvK8w3LRqjY8T3z31JvKueMwaA8CibetDyGZhTMsxwLRBGhLdwbRwbXS8P3MEFaoR",
  "key21": "2uQRgrEb3sJSh76R9dqdYHrRsJW2d3EZnrAWaXmzgfpfn1d5zarL85oHX3urL19n1s1hp5GeJhF1eTFQJu1rhTa5",
  "key22": "235kzsmGh5QXF8zKrvcmxdVzsUbdtuEdNkxNhSPtwb4MkLLT7W64pgFpyouiV6jtGf4aDGFXP1hijfKzSgUFZnhR",
  "key23": "NyoQx2gouXHr4Vcajfevof5PprpchVuEU7NV4bvDj1ZqqePQuQDBo8AquNXGQaruC7MaJj9F3f3P4EcmGxVk5jY",
  "key24": "2dEbHEMs3bzzQG9gpPLLdbeoZ7zyNkVVjZGL2PEauNXeZgvEJmRbfAF8gjNTapRPxRNAug81nif9RRWAU2Xnfz95",
  "key25": "4jDR22SZ4fDQ3RdB8FYAkhBDvqKkCxQ1VDpytoN3FbE9TA7V8AALBLet3mtHp39BjSiRHvfDvxxytnpPwmizBhD",
  "key26": "2LwiYn9XctqgXiHqY8mpGuQkpnTtQAH4agNhae4edKjRmbNKNBqvxDwYUr6E47QeiJgQd7oydk4urHqUYKyhAWHA",
  "key27": "mhLr7HystaZbnDmtKRGTCeGwmFekQa16mFH2psKcag4UADbWDxhwH8tbeLJgyyAWxxLdJ9SfnVEersCFVDy8ktB",
  "key28": "5ah9WfNNerMiRPC4WMv9gDppmLiVzzQJF6hGD4KLj5mxR8c4E8cmipd4n6QRptx7DpC5RJEo6nhYYkFzSzvfquEG",
  "key29": "2fQBEn4AhFPTsNR4xc4WMMAQggW2GS2mtdLp8x8JChCFWEG7GuuULs9SQ9xgyUgnaBfjD3o2K5asSZBfjxpRYoKE",
  "key30": "3fzy5zRqrmv58z5Nd63XJAGu9UJHkXwYojS2ngqEi5ARvhxnqhYyfXTY7LcWKpW7VTTAY8qKNRaF33PGgKhNhCyu",
  "key31": "2tCbE2aq9rwLxni5ybztWuESMoMHvsUszv435WmxssDx4pdZJR5xroHAmbZuw7kvbw4S8CEYpQNorHVnkJHgyf2Y",
  "key32": "5kTndU2ZCiDsnYzcDqqBxUJNmScdwD18FL3VBAWBV96LcWAcBZjRsvd66GCnUfYzuL6LjDeHiNmerqubp4cS7KKU",
  "key33": "2jyrEL4uZq5doDTVpBoUGuC8SYubqmVzFUvsZEccFZufr7rMJ7JDxC7BsmRnk6k7c6nNUprNrMSSEfUNsLtvNo2h",
  "key34": "Dj2xqqoXVRSjF1r3LVW6aRbVrdWt9KBpW8MqLxQLNgZAZ8GkkJk8oRpvthYGbSRmaV9cQrGaGzwKqxyNvCgzN3J",
  "key35": "4CfnFJAJ6uSgDgk8QdSGpo2f32ghbi8xXrb2GsAe9ApjgGBxyQu14GBd6HyDsrxL7wtE3v9sy8NGxQetb7czkDcy",
  "key36": "2u7Ymnvnwo1Ps24TMNjPBa1UFBzNFLKvieLNserSSztpw2ULg4AgBmKpyLtT6ufbek9ttyFEEYx24gNUtGToLWFE",
  "key37": "2FXfgc2JQuJnJgRM1SYRWDiAhiz1gGscm8MvU1uThGb8AD8Dn1uQZBwGtqVZCGybwuP38Vh7uDWM3TM61CDwHqcS",
  "key38": "4ffsLmKwXzSrzKCXaVaAw9vTWiTd93rxKkPV4dgCSPBnx9sHSq7VahtKj37RoCfJWuRi2UkFMvxum21CtinKmvXA",
  "key39": "2bEgCrPDZHxNDnbeaiqssj8n2NPKQMVVLWfQFyoVcFYiNKc4QW9trrHWCVnYy7UxEZCmFd9VbQMmE8xvirdHGGVk",
  "key40": "9QHEdRdGQtVRRp4KDXwnXKCQ5CFMcnj2vX1oatpByHYPY9XXVPk22saQ1rMabr7PuncmY9zAAfhXEo8sX9vns1K",
  "key41": "3MHCKbYedzuATCkVevak8NEmAmGSWubr3p8k8yYgphGKfJ6MQYzxyH7g9Mih3sgy62EUxGkhD43MgxMTisSaPS8B",
  "key42": "5w8RRhDWX3rV9SJPoJra4iYEWcTbd2P4conSb7bpiayEuETQv3dVHvFsfRZJy2G4FHnYS94n16M3YDCMLvErqGKW"
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
