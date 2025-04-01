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
    "2Qbg7vDFRVfQiwToUHvogvtv7DvUaDyiXoxTHFmcDwUae7AwKV7EDXEzk8dp7J5jxvz8sPBdRqcTqKTugXfGZJfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3quabfPJ1XbEabBJsNUvENaCNA6idaCFoMy3UwC9X9TMKhoXYzZvB33w1ZhnVpzSYyde6b4ghihUA1tAQvm1DvCT",
  "key1": "5pstkSFUoumx8XmpbnzKsYSnyNaHF6fmSJt5WXrzeRN42gRypfDFXxEJjdeUknMm8ikiAKpMbaJHyvGzDf2wiKAS",
  "key2": "3SP35DSWV8dyBnvPYWNH27jeokrnYe9VnCpU4sKZuCY5dBDJqJ2eM4xVe48o6SrvyHJL1eNuP4wwDbfssVY8FzFQ",
  "key3": "2bgucHtbd33GMpcm772L42p1ESGDWGijhpdiXB9YN5KAHgoJArCRs1xk7EUFnB1xZpMy88aygapPQPCf7ASYuAFh",
  "key4": "2qCYFYqv5oZFtJMekEu9U5Pzo1CaWbavN3i1HNvdcC4tavdEw93nPdV2X4W4Ei5DTYjAgaPh9C8bQfMbT5NLSzQk",
  "key5": "63NfYq7dTXEwUrRGjHnnv8t11WZpKmffzCqakj67Jee6x5erk5JoMqmnYHLcGMTvU3EKUXozMQBHmTLLHLfvPQo2",
  "key6": "4YDEQLtUEiMKTCHPgJUbYA88vnug98bbLBA3NPxdw7c7Cr7CicoamLs6J7YpdodDGdV1ietbMxjRwA5ZzZtsxs7y",
  "key7": "37GhewJZD8UveuXP2rzxsByEYt6CF3fRkyCsCjguuNJPFC521iVuAQNW71fpwkqck7guh3B4acuWHWEgp6qhRK8z",
  "key8": "4KxHPHtwVEvHKQFFU6rAXWABHWm4YJAbBRoMtBtoHxxuaQUKbMHR6V3nGqiyHFJn2E9MkdvrYZpmgGxRKPv7SNbD",
  "key9": "5GV1D4QTuNK886mqGWbinS744j3kFK24vvobhK1DfjPpQnfSPwZy4cXqpA7Bz2aLx3XUq76KH756rLcoQvuYjbvR",
  "key10": "3Pp96wFk5hSFAptz1a1Ap1uJxxKEKeYqY8Ut5Bm3KkL8gjPh99aaF6aiz21HjF2d3snfTFiYBJvWgPVzQsVjtqCt",
  "key11": "5Wh2FLAatxBwZUoUvwf4968GfsBxsdEATzWoL76ZBeix8nt3MiUF85QTbd1ddexHKYZEjQmTmeTJLEonBXGoZyZC",
  "key12": "3FLhV5LxtBRBgBXHUWgvYeHTEojuqgvaWxq4hd7ww8R49sSP66wGSagp1FrbMn3qxzwA3XxRbbWpXuyw9NH4BaJC",
  "key13": "4oFWNPoHE4aez9SengHfKv1xeVbyTFrjh1yTJBQMi7byDcNqpJ6AaEa3YUV5GRPwAWKbFCWPwKSgj7PxjqGte9GH",
  "key14": "tQA1xXvBT63kNss7UEFcSrrXAbGaniCD9tQxbJWh1QoQxaXqr61PprXEm3kuopvzcKe2SmgYD6yX4cfqNfDSydS",
  "key15": "3Kw6NvGJPBZJ6wq8bmAhmz72vehEoL1aYgEiNQLVcofgMYM4S8J7CjLo2GA4sC2B231AgYnNZzJcA18grdjFvrnz",
  "key16": "4y2KEd9W8iR89KaDZ6vFjhBP7v5gnSEK5iTHpwQnycpFEHK1yStJ8VkWvQFT5oZGtVqTyjFwK9sVALtCJPkS53yC",
  "key17": "5Bakbpvbj9ujZX4H1uG2gAAEvLkntPVuWpJdFJNnHkSsGtZnZqdT4ZBu3wHXk6tVvH4HTADMdMMbxo3fJE5wZAcR",
  "key18": "Vyg2PcYZ46eXjfub6zHBfhTXCGs6iSeivvmDqjVxnhkVRrJvah1R6XoECjb3VnFTmgDL1Kh8PapWJjPD8X8nyw1",
  "key19": "519fxEd8nGrFFUNJ8YzFqnzfmxvA9HiDmncVP54rFcaRg7AUGDW6sxVERVdd3LwfSRXeoXbacUvDHEgSceZK2Kie",
  "key20": "4AMJ8Szau1ejjN1ttKqTj9uW42LX15bPiUbCFwJEWi551RQU8fsCPnrQDPuDg4fWKoT1F7J8FmxmpyLY1ybBvPva",
  "key21": "38pHeBR9WrXm2fLzja36xcGPMF377K3avgCaD6LG1SGJfBjaugftzpUG2QsCuXA1WUzARghYJqEaS6ZzNiuNYg5i",
  "key22": "uEwwMiaQpnhhatGLVFj5UWsFRHDeZ9yZBty7jd7ngmkYCRW4YLMKWYbF4DWLwHyq5JyLf7ZcmHUXMSgnLbhtj52",
  "key23": "2e7JQmLxmUQdGiHaLs6ZeryhKckW93EuJWESnCYtVe9fyXv6VG7YKLUsb1ZMW7pNnNtfoZJaYYvquTRySE2EgZoN",
  "key24": "62ubd4W9MoEG9S9R5Cx62dLW6PN7ET1varPuSjdVxDjKLDJfNrj4xWRsHkknY3mWwCCiwwTApkDhebAVf9FqtRse",
  "key25": "bZMRnp311XaXKsQBZUtvKNvSreBUw3YxMhJnMkKFeWN9XuvDrD56TGSBvKm1TAu9QqjrMi5A9gpNhwrvidsjxj5",
  "key26": "3pRvsrVsVVpgQKbHVuSxTWUouHpktCwXaLQt9Xi5SyfirxgYySrSvQfvTBjq2TCZn7Ea92VZMTnNxVXHJWinpGjU",
  "key27": "5aBuNB5Bu5wnoitwQkbHPMg2iFUEoWHmAPzVGVw1rnvXtdrrEM4r1p9aLvwAay5opwpiWi8XBhLmrSggQB8FDYVt",
  "key28": "3RPETYNSaLRf8xGEJFirfjauJLGrL4EKaS9R1sStCYKXY7swARGpriffcUbB4LZEJKxqkoHBWxnXqh65ELn4oPAs",
  "key29": "38R2WoL4x9jFP36TDopUDJXXm7gU6aQKu9wSqWDeNDb1S1pLEYkPXicpBAdF2VhgWC6UwbYuQ7ZxwuYSSy5aEuv4",
  "key30": "5sThGSfrzRvVQXvch7Wojt84u2TaDpetr5qi3P5kFhTk4qbr3PJ7VUNyshFM9spbzJtit77pQrAuNZ8vv67AvTXM",
  "key31": "649APwkGNaHuc8E98LzrCWwuQtsp8ugCoMF2jnHqoHXh1pTCeTdSQA75vM3ZXKKuHyQuhnmH3zFda4gjPYvqntxC",
  "key32": "3KtntDeCK1quy2VXvZFqn3CEEyKbNPt5SNnjbfCCndJ5m5Z62G5nD8LLaxLk556HTtx9VPjzqtyrEGPvdUvj7nq",
  "key33": "5tzFRXB6JuYVeABwp1kwLSqTWS5uB86bFypmYhtUx3AT1ruzvxfcnTpnhr6iB8EiCmM5n4s17mY7X6tPqbaxtHSt",
  "key34": "2nV2re2dSQaZqnW3JZMBwCjYh6VghD2bvaJVRUQj7Ts5MMaPW8MxGT7WXpYRwDQ7ph9pgDGkWUnMwXPj1rvwk3bc",
  "key35": "4UPskS5S4BYM9PdT8GKxkuWmM5UHniJtEht4ruXpBPDZozgpFR6LioCPjFJACzFsEum8X4GWAdVPowxSfzhTQyx9",
  "key36": "5Tw52Fz3gmdgdbxXGRUMw9v5zvjtYbBm2zdt9r9t5SSovR6gAnhHeki8JDDpzuRHyQNbf5VB69HotbiH6vwtohRn",
  "key37": "aNeGf2NQMJbRk5j8hFG4Eo3sLu5RSAJ4wX3rRScXEFt63TaRMAeZUTFUc2VTeT3zYxFzfKVi5zL8n33sc1Zfk8b",
  "key38": "3Kb9Hw32CnM6dGj7zqR2Fo8MFuymqG2DzQV3bdXgyvrizRjS9vaxsbKgCnL6fVBdWmZ1u5g4A3EoNWrMBVPKfP3L",
  "key39": "3v6eA7PvTMt2KqspGdcWbd8xDQ3uaXYu2Uxy2aZM6SVo1MQRt9mzXSzsKvDWs6GHxha3gEbbpgvgsnsb1i4aHrKo",
  "key40": "55WXDvoLycy78zUbEEspKxP9EjfUUh6pb51cwxb9XRuJc4kxB8RaCBtgQHMQeTYWCpPfsXHKizjA4TaiKkjBe5Yb",
  "key41": "5Mryh15V11uMWJT7WbgcTZY4MRbKcWbNLDkcW22MiAmD17UW6AP6od7CJSS99fWWL7Sr69hsc1iuaVB5TrtFHLob",
  "key42": "5iUKV3bNNpK8VhCjcU2PKcZSPzEYgCMqe4Ju2qYZoKBSnB4Ma8Df8KLSUByZnnnzdUnqNQhbyCJsdY1xqdKtT4b3",
  "key43": "5QsofKE7PYwpvxu1MTei358jmRTjnZK3ei1M3Da1e9eRcjuXA2corTEG3csWwY8DwGuF3ifqS2ts5nL3Lj3LTcZa",
  "key44": "2J2aNHneNBz7cT87sGR54JDMLNodyaj4z6vDEvnWieoD9KVuJPFXmJXEVZ1vS2kg5pitcB5kV9vD8rZhcAh7AmXf",
  "key45": "64Wb8S4sV3yYfYLC5E7MBkYLZKFXSBriHrhaqCTUxEJSvu5nrakuubUdiwWDZ5HxGa28kGzK2yPrFaq5F3p68vEp"
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
