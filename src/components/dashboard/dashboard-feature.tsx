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
    "4Xjj4X4t4TnoxKmHGTwizXB4PuiSwGrSN1znmsnqXhE2GwEguYjZZVPuCrdNjnoqkgkve6yrDiicweE2rcajMQxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "358W4FakhuUfp324htJYCqJKEgcsYPKMJAB1j4hLQxgPiAy2NKivPoyLRvKpVkaBWSmiN4mMoxs1qqsxC7NcKwke",
  "key1": "2YBSzySeyCK2kpnrDuMn4DbhiZTkXaHFG4BUKjhu7m4aPehNHGrp3XvREShcietHSLvnZKz8RJk9EjxdaoBSf6KS",
  "key2": "5Rta4Td9F3k6K851BN836EP55BbyoNgw1W9SBzbzSLroAQa3u8xYBQ7EGPqjs1kSWGiD9zJhia6Ar2YqSwruNxZX",
  "key3": "34DLjScYn9Uz26mNF6z7Q8W4Tp8qjEEBTFNoUqcrLSgkYJjxjVv62QDySoFfFgapuC6H1vaKWMQEGnhXYCjsTfPV",
  "key4": "29kZScKAYfDxe9qcUy7zmHU4sL6cvNU9AmgxwkvsV13BSjhJhoxqou8Cj7Eow4PGs1LseYpf6WNmVTTVLifMYnR8",
  "key5": "4Q2t3PD87bcrk8knWqxYcsfUbTumeq8KaNjv6idJuwKnqrRnvbh4F6qMCak96AyTDnSbsp457P3vpWzNMDQqQnjy",
  "key6": "5yKHVXZh8h2JDzK7mjzVS5EBE3s3xd38LtxvXuBW4btTumtrhFZwLMAH6J7AK2BU8MMpryECyhXnWnYoqc2X8CZt",
  "key7": "3nMLCoL7uC65N5aDQtDeEtZq7jeiaP52RkeapTdQ9HCokwxmMes4zbGJo51phgQ372MDE2Swi1bCNTFZjHVrEWus",
  "key8": "4i4dSRAZtutHyKZDB4aixenkYpxQ2ZSspktVXVQENaBUdi45PyerwYUaD6e8BCJPKAFvJSX3b6cmBTx6dk8UVyCr",
  "key9": "qPoisYyNGv2zmRbSzYvnXFX9sYaKKPm3Us9sTpsqccf2u7iSgejSvbuG863zKiLY47go9i7fqwGb459TwK8rf1p",
  "key10": "4MLqDHjGoDRdi5q4Z8oJsXuWb3s7LQgBXUh83qT7NhXfdhULAwHPYKBJJWPdJketMizbmR34H2TtTtCuVJRm7UKY",
  "key11": "2hr78vWY3GKHsmUgxHmWDxkt1FviS4dEfzM8cRQG9j8R47XvB1TKJuAmSttNXsh8mJd2Vmy2JD4vYRTmTZKGX4R7",
  "key12": "6tza6RVzy39a9TzDpaRy7apGT85y4qAKfoH4qDtqffyTyTLLWR7CXEpx7FZYkMAQ8KH1iSSY6JtUzCAbUfk29UZ",
  "key13": "3zCBoGYLnEhPD9pK3tpNQoqBqVcgyJK7LDEuzXguHQngayLFECuDj1RssvXRLNyLi3KnkQvib39f4f9YLumxiKiT",
  "key14": "48vEV8n5qTuswmZsHKtd42zdjvAgXJqGNstr6gP6BHiy8qikmFaSmRFAd8AZF324AmnLdoHgm4THpxnyihGEWBNr",
  "key15": "54JSWboh73gfqJ5aLBeKHbKr3pyqBomcfQau8hyhfSuPaytiYDQRvFrTfebD8ncvUstYHj8Qq4NgiLm6ChKiMqnm",
  "key16": "5dCJocG1rywmAZsysEvc1SLBzHPKT7ivpRcCntDW97FoNk564hMq8bqq1pMfsxkTxv7t4Aq9mUCKQvpcX79yCJVE",
  "key17": "KKPrtzhoTo8vL1jA7bXvftP7VwCTSjcj2pu8u11DEty4gi4Wpb3ZiFy8A7hn8gcu9EVhGXP9LopjAbLaBLWWw1Y",
  "key18": "3dPd2tG2db9W1zayPoD8zLRKDshbrbKA9s1uG9aJ4AYfEkeU6ojZBYaPh3HU4p7AXeNtU17hTiySm9kwa54BWD6n",
  "key19": "pPxCoR966tE6Fwsw49AFqoUqTjsHbSemdgsXSibPQvBjN48mK2SVtQ3KRYbCjEW3Z7NyVykgYPQYpTtJnywupBU",
  "key20": "65npauZbrmVojQdoVtjt5DeQm4PpSnJnWgMvuNKErchxG6JJXJEZM71tRCDwpQzBKi4ai2B3whGBbo8HQH73RDfT",
  "key21": "PnsBRcPPEsisXe8CVTNLS7BB4auEmHF41UgX46G8yyY6rfC2qxyQHPDVKktchbH8ffiGkRQq3zvPmxRebw4YMv7",
  "key22": "3EK4fSWpohk49hBDihn6yhXoQz6m1NDpgTDCua6TkAMR82ap4sMPVauLyGntcUiL9bBLw3gzt5A5rQrNtRgyiUyG",
  "key23": "3SkBaZr6rQ88yDH6EeYoQvnvb6PZUAMfVaNpXLNwZ8ugQSsS6ntYYRC6Xq1BXWUg21y8p2CGehpaAxWWCXdXesqw",
  "key24": "27Au6B2gr8zUnYZ6JESSpXezTgpMKyEZU21DCEuAvRN8S4mNKeTTMKZHwtZLT8anjq8QdDPMex56z7svHPTsCjrU",
  "key25": "2wQz1XGPrVXU5GWbmtTiovkAybU6kW2tUJnf3Luydwiv4gZ3cQV82Ew8nfAq5z4dQXbdXfQhBvZ7pQFNRL6kWxLY",
  "key26": "31ztMT5PygVNieHsKBxpazuHQ35SpLszK3dVVMDpb7TBAzCovbQne6QNBdq3ikUcaygGkmTLr3EnDmNjdusRRypC",
  "key27": "4dTnCVmk2cbiZHxbtmNVCu4hdt7v8FkZuMETG7uh4aT4L8autSyNxmBRkpL3nNGMo3SbbLu8eppuuvQ223Fmgak5",
  "key28": "2PnYGxBVN5ZrBuA1SpbzT5pKKMoeQRo8HsYBkkMpc2AkF1feF2rx9KKA8p1idUgSJFgBXT67Afau1CX3MCN4F5bJ",
  "key29": "29mLMyRvhFwwWjXRwK8F8pL1tmWPGXtrVjPYQuNqr12nGYTeRtuA99fbX1xdNFGWqik9jvfQFQ9gV4brmv4kYeWv",
  "key30": "4dDfYYAUbBEj1i2qYXLLMjsir1ikJCBj2oQJcijhbcXz3qLf5DJKWdrf5JDtGf4NjxqJ1gSnpoVEJKFUH1cuRsBR",
  "key31": "4Fqrj9g5pwuSPAQhqCN9MbWGUt753eVR8i95exgSErzyhEL7vHy9RyMbaVAWovmeXn7hjwktYVdzTv4VnAerNKoJ",
  "key32": "4XcUbFKF6LiujmCdVAe9v6Wxw6K1oCyaChJp3xSmpQNpLJhUruJ6TRSqaVieKQy3DVNo96AVsjVpwrvAA8sMF3W9",
  "key33": "59JW1WTvjUvz44vixivKTQTSH3QBWx8dXZgLqwfaQRsk8zrt7TteoifY2jH3zd5sw8S3f3BvXwKVKPjQrR3Gh3U3",
  "key34": "fWcR134CP5iWfrsZ7M1Ef95CtKdHydoGxceJ8WpxEy8b4FF6QPEjErXAjEJffGXZgwmAgvHWYp9hxnEtF746FH1",
  "key35": "3PXcuYQsZJ9iJYK2NKC2pEi2BsrNJwiYiX7YrZZDHtseBGzkhZS2fQrWBLE7XVseHjAw3yuvnz6FV8AZE5fGkBem",
  "key36": "4y92EU51MCydBmZcAvx5ifJ1GkijQaNYwBh2XYRz66JYPUUtGRYX5fuWRFq9Vye3FGKCQU8vX7ZoGben5feJk8o3",
  "key37": "2eHazHBmbaGbHygUGYw9KmSZ87UWVGbN1yzQ34WhZwv6fqX256bphxWyv1pYbXKw8FEWBVkraEL4zFuKW5X3ybrk",
  "key38": "4GNUdbAZbKaKY1AvRcyd1nDCFRB3GzBNfSTR7uoKPZFsWS8AynxcR3PvEk851Tnj4FmGSrKHZ3J64GEEnRzK9dcu",
  "key39": "5sThbQ75G1Lkoft4FhqeF1MFb1Jh2Ur31xCGf3uwEq1dG6NLt66QUN7Fzn2wVzRQbWJdjjn34JwsATMXbnbzVCdp"
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
