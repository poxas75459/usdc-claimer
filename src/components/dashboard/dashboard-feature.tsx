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
    "CH6opmfK8tAXAQkmL6AJy1HWiLSRbayykFgB4sA2XmW8feJfKEpRevfBwiwKjBDBJkfmbUprUCX5twAPPRbDrY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1pQ5pCpGkeapn7tKGFYKVA1utvPKFAG39QDnaJui9t9NrGWUsj15BeXVS7ZbsRGbLamBC6sYnTFH9Ab8N9WAwg",
  "key1": "4e4XVjAz3V58nJPWFMSNakU735JfpV8Xp7uGYanyUYmRyuQ7UB6zWSoW1JsFp4GpgbX7rmmmRCTYwtQCXLgeqTLa",
  "key2": "2vh9vX2aXbArQJw6BtzYwNUXZoLsNepQSC3ndfGf2FAG1eaK7Bz168FqAFQ3fjyeQCoCbNwoCNRQxcX8CLwveLE6",
  "key3": "2wBSnTXztDKGv1zEMNfAkj3WvtFiMMFNnji3eQwjaQd67VD3X79msgo2Pntd7pmcUshJ1q9JFyfpZzcHGa16acsx",
  "key4": "HB2buwPpqLwq461hNjfYLVkbxck1X7iFNcrEyVMSMzBRk9zCTNrwCXvA5JdjcgSD2KvQSLLtBneenNbg2S1fXc8",
  "key5": "5oRb9mWMinr6NG96iGssESv7UDuuM7zz1ncferbYnbToyW5k85DeGFiXWiYMx7Petn55iZv8krZiPfykTpdKa3tW",
  "key6": "5TwBhui98mg92hdHV5SeS3EYeSYf47b2LxCdESsJPkmmhKP5GYNuKCSDgcQScV5qnRpDKDoGmhC3uiutmfWabwZg",
  "key7": "3tVung4Z7ZNJe5q9w57rKxUxziRxN4SWzxGAghr3DxQB5gThYK3MGooPpj21uqsEYkQnLt2oZyCXHZViAWJJqX6u",
  "key8": "2rVmoNdvMnLMLCZX5EmRV83CygHjm1VBbQd69Y4REGRXkXMefmtinWW8faULV1kVstg5xHa2pAnfUfF5eESHM3Vy",
  "key9": "azmfMYQoqytyV8nnPGTm6aj57Xv9ZW56pw5bfYkCVnS2AmgW7tJ95HV43dDnHgMw9SnEKynLwdpmSnPjxX4apFn",
  "key10": "2k6RZSArKWHFADeyXoDc32iKNGV9mdoxD39ryASSx9pSpXVmGEDtWrjqBTqB4nzjvr7KPoHUgDWr4rmQErf5PTqQ",
  "key11": "D4ALoSd5CP6NG8XhSwFfCd6FcRRnp133hwZsEFSCVLPP6t4fQJjdqniyAGMGCrGFrEwCyBNWWjZVVvcmeH2gnzJ",
  "key12": "45PDjBExWbtHjxwRHyQpX5HL1r2tnf4PYRRPdXq9UcAeRrHPKexCBckCHS2AQM3vYsm9G7ab5LKm8MpnpaKgUNfA",
  "key13": "3LBc2GTgHntAyzMcKgQ64ujSqyTz9E42Mz9vHtyrQMXiC41DoHC9SHUtH1kfcoDqG5PfSxacFKj7w4gsH34czffY",
  "key14": "2kfhjiSqfXf3FYfmp7pdpckPGKMSaAKrNhchpXsA8Fx3qLrJrNZrUsNMzmCRqjCU6RdhpKKevtyWqTsG5sYBCek8",
  "key15": "5147pAixU2dhFHAqMDwdZoDC6jxCGQyUy8Rso4yEbxMLR4WzewXJNWWZDizRKpEbC8p6mNPYXeehvMh735hy7RjY",
  "key16": "4efQgDWYjRWVffmk9vAAyPdAGPmqiTanp3WcEw2wi842d5JHvYNnLHVjE72NXfZs1MKyRWtZQmGtcLG1dAPhroGB",
  "key17": "2x4TPZqtJxRftHka17MviBtKh798Qy6oWWmddraZ9w8v7VSkoR92GBVYQ336N6xTqwziQWgekZynNxi7Lm1pcTxF",
  "key18": "31pZBHam2nacQHGvhp3FbPxwUXaXHBrY9bYFCh1QiYetk4rTmUmi5k3PHHYmme9jr7BFut8oDVRm6HiGTfo7kihp",
  "key19": "3RrkKPonUPC5hG2t6Mm3NeLswFB7MfQRmpBPgoJvt3dc4YG98Mc3x46LBnS3SmbNdVQ9zyvLrEFQ2pcfLJYwkrbL",
  "key20": "2PpoSG59raMb9JXeoYTCpXDiF153YatTittGgx8frFfHkwP9cDENTJ3pENqzFsn8huURdTSJFaEMMFLXkBibk1bh",
  "key21": "5gR8WbTyWji6LC87Yr34BPzHgSZcsGF2zBFGhj9kJBZqc5rK2iNJuXiMuixzBgpad5Wq14qcD53PzNx4p4QhEhqz",
  "key22": "2bmxfezxmEcQhi5zew74HvF5qcATZJxJTV8CFHnybxPQHtZea2oHprvAobnBXicapc8uhDbDERXufy9YGe6caCEZ",
  "key23": "5reTZrir3L7qBWSPVa1YNi468Q957EQhSGqvLynjQQRkPeV5JC5ZaVXpMSNDNQ67ECpzYuHFyx3eQ5FDNu49nqdK",
  "key24": "8obRUf2HG3BFtPC8mGtwAJCrev5iFaFp2E13inonBaZmTjYwU1LXY9orovgn45aUJe72RGMEF1H2gNE7jN72yQV",
  "key25": "61K32A5eaFJofZ1PFUEKo3ucjEsoDKmLFU4EQZLiaNJJtLQGBH1SyUTP3PYrhV4oxUP5LQ9SQk8B5w2N7PX2Q29U",
  "key26": "5cc4HvJeLBasDfpbNaDz8iS9Kj6Mgr4Fj8mkLW47yHXKqurCgYzsodRRA6XkHcQG5xfLqjxRyGAs2tiqjGrVsWBF",
  "key27": "5ZrRkA6Uu1cdQwdRM33QXoJLVcKAkxFQZkyaHWoJbEKW93vz6Bb2NoUqKZLDpKpHZoFicFQuU5N93roPigWdrXoS",
  "key28": "47darreTSTugGrTNZRjiyryQaDEw27upR8XB1JwYb9EcczVvrhN64wVFQvnGU4oEGFhCzh8raCjBaqQp92zUV7rL",
  "key29": "4zoSkvXyQxuQv2M1o9aMt6CTzZ7kQoaQuvaoDTPZKvGyEXpzU1deMEb3ZEju34DCNLHDQuXMXpcMTpbBkziNLRWA",
  "key30": "4y3wjPYgjrWvQ1CC38esThMpCN6rraqvw6yoWpGwz4FyjDAD2ioQ1gowoALst8qinFprBxeVB38QDnBWzdmSyHPq",
  "key31": "4D2DoSS171nM8UisXZrNJkuVNGHPPNoRY1FhCeRTQtsHfrByDpYVJyqKJqheAg86oskoHsm8trbiYMRC4JALSg6H",
  "key32": "3wHY4d6y2F77wjS1XyWZW9yEbKHoBg9vdSNJVXWk6j8WXZJjhzPF3oRqHcGbMCHZfZTGyGYspW5Q6PyFnq61xDXZ",
  "key33": "124py8DWKcN4WphkDban1qTrse3M5w372WZ812gLkuqxb6VGWRtaktJb6nkwBuacMTGcX2Lhkr31XHHzLSgFobZy",
  "key34": "5Z4G1xTGQj8dAEEGUfcygG3sEwA4ENaVDhSXP7b7iiKpMWHQtJGyezJzikNBdc9uePvKY8vd6yG8foPWwbBWhqiQ",
  "key35": "jv7kKhe44nqm8VhwynHaZKF3uDfyx7nxo5PyccUaGByJV9MqPhejcwNSwgn2XVx25ybT5WeMELK9p2uefy3WJNb",
  "key36": "31GxrE7fWiSrN8Bzn3RD9iQLkE5mwVHHKFNpQojN9ZpkFnkHEeiCy3FzQboYno4wcXgwUtZn6nxnLB5zJxqnUe1p",
  "key37": "5gNEFDGpfRCCmRt6KMvJE6zF5KNonVD5pnTLAbBR8VDb8jV3SfdoPis9xyMdX8rKHk6WK1gbev7TEjgaWSkdXw8D",
  "key38": "3oD8eyUYC6JnUUaeZz3YKVQuqVzNvFiR7MmoieTvYKsgsGU79ogFNUChWY8avg6wu7rVpedA5HwtXk6opKFyJn2E",
  "key39": "yMKaK8nUB1T8K5PfbBDgz4o1dZfgbqQvxdXxZuZa34P2r7jneb3XhZsCV3kkxnc5BEM9i283hSXz7ZBCkVPkmXo",
  "key40": "3341WxvCPZZTxqGi55TbB4bA6CikC7wa2GPAayfNjcJB69RkUhxn9E6gxaiCJ5z6vzLBNNK3q36zywStWNauZXcY",
  "key41": "2doCmraWG7i3vGuxs3V5AT3W9D7ypiTEmsLFjCEU7VfSzYA4JkQqmRykebU1coY5aB8JsN5DGGxwgZGqzKBRBhjH",
  "key42": "3YvvHTnELjnBzWXu5EBZ4t1UtCazvno3h21kkzLuAiQ4dWJ7CbX4ktdctyJ5h3bovdTLG4EhdJV4e9qMjY394aHU"
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
