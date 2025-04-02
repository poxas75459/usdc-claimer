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
    "2LtXabg6XoP29UYAkukTr7WwvQSYURvyX4HRddtr4yVEF2JtN5cejdCamMf4v9vSm1suRJ58eMHcsPVEQbXERnVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxcVAGsSND9dgieajNkonhy2A11X71YathDqbivvapeiobG5MUw65Tx4QYphrvV3Lba3s8nVBbGm49dmj5WK1tc",
  "key1": "3cCX3BG9jdntMYsUhPfZxdzBSkMzYPuNynRMiAx798SHY8bNQHvnkYqstMT2e6uBPKCeedeKuiVZDq9BXWSmTSuu",
  "key2": "2r5gvnpjdPtSZsXWWY4DaHTQF4usw9gzHZTpAp6tW4kpbDPbne7FFRq13GqJJm19EQbdJeyAMiigqLPKK1Waseyv",
  "key3": "C5XxVbKzcHLqEqWqXU3tzgq8NjNsp29GLMFZWA4uMnjNs3DvGadNhrovUoJhfoLSJyvA8HsbxFnac63SHWAfEud",
  "key4": "5WcK8PHzBqNyiLzRGi5GepEpRuczNX1Lo9fX7Y7N8sTGzYxPXUjHejsGYFhJd3hDGfC639hmh8EhFARcXWe8ZKed",
  "key5": "2zVdZ4dFoNAa2Dk27m2Ke59TMkgeLqP9Tg8VBWoqCnzQCopHmCp4XMMjpgFauzm6Y4tKYrYkwuxP9KMFHWkQVXr8",
  "key6": "31BgrXZyg74uvQGHbNCwMRcXdUEr7mJyB2AKusca53hniBw4zXX7XFQZN5Kh3icLERMMX5oQK5ypf2S6sfqsjhkJ",
  "key7": "3NFn93yNQkNDWLA8e2RJC7Z23vJufCT4JyVoXbzCajMSsdX87HnQ5H4YNudWbJ47XnCb5mm2BK4UJe9GqEJRgQLB",
  "key8": "5CphMddhvNdh2Cdv8uBsZAG6UJQopuc169KAdckCMGSA9zHWdQuB6i6MELZ2Qae89GhkHBE84TNBs78YmwpYSU9V",
  "key9": "5oksScUbFnYxB9KcFu3HZgDFTFRvRg4k4kNP1G7HgdbyPSzyT3bCKbBqReKU8vMJFXcqRsJvbuJxHq7bSk6AnSc3",
  "key10": "4CiWTqyCcoLpR69WVRBqHih2UEE22rh4sd8UtfGM9rq5nKQonR6bgRA4XpPesbrp77im6h9Xr6GYwnkHvYMhc191",
  "key11": "2jjR7JRRFj9G7CYSYzwdDPPodiHJY1YVtPneznr5xFdy1DJUF6324tDvq453rqhBxF6Hk74ks9V2LeEFZB4mVg4R",
  "key12": "5CqRMoWXKEmWcy7gWwVHLkvZeau9UYGDSkZ1Agw9ysHSSgcdMkycHzkNCf9tJ6Z7a9mU7C1AttQ2FssYEfEBkY9L",
  "key13": "3wT5uyEtMgrjxerdC8qqmUq7gMs2XfV29wSa5A8ErL1SRfe6L7pSfx8rpAruk1ajGRs52ScDBdi7MgcFtLT3n9s4",
  "key14": "34N9LrmkUwWWnpFFztMGjVhNLPBWivobMq7QbRcPaR7gRqm5kDjyMfh6Aem4DG2Pcftk3vW629R8ouAiqoRQ61yG",
  "key15": "5fc4t96pQU2ZqYyiSSsEjvgjG939WoHDFZhDTUDx2wNaZji6W6E1GdWCYvwPmgcsaG5nyoBh5n9GaEtnXWNzQiuS",
  "key16": "4JDdafDsaUEJ3WDGYVFYz42oqM2skTEKTKoGsPRHJeYBzGPQSAMbtYdVhgvqXtQRALWCfAyC1pSavRzLWFPAmoQq",
  "key17": "2Z1MEPGCwuKm6MoYc848PSMMdtY1iapcBTi3xjdcbo8KDVM2KYKJiB1PP6zQmUmSfvj1i72TSLTG22fD2sYaSbWP",
  "key18": "4noVisBbqufndAvRUPn18xAqdKH1qTxrvmxeenxvo93kY4SzcgqxHV5nGgtbFCjcEGd1pbXs1ymhsDxBpMW8PjHU",
  "key19": "5azt6jqCys2YqX92sWwecZLPs3n3orMTiDYwqQY2XV3zsdezoc5ZgrpSj43nwrG3EuJmesb4n9r1ScbJrx1MKaZv",
  "key20": "Kk9EfjsUtP4p6FAEV1Ej8vNhKn2Wv7FUjMt6MRfPUwejhf1uA3tWdhYQqvtbPQJ2SAyosbLJaYTnkvXAsrfSN3n",
  "key21": "BeLvrjYyZHxmeCAc5L4bTqKrCUwVNQ67BkRytJPeYirM173JfpgxexshC9e1YimZh77Topa5YYxx88SGx2PUEB2",
  "key22": "244E6b8iWSDRgo4hrVKn1CTLtBqcwK1wqsBCKsgUGWEAhrMPFmpVsVXq5WBdFprzSpcxEMe45LRDEcmu2PMxaZ6n",
  "key23": "2iQkd8DqSsgoR2NC8kBxrnMbJ88eVLXQPbakkRFQQ5PSLefTmi1vUk8gtVZXzZap49XRaCvsE73D5JDewGz26fGr",
  "key24": "4azXurtTjPsY7ojxKA4Fuyna4NQvPKFyyp81mLSTiixtrcN16NmoeFZULjifQaAnJvaBuNQWw6gvEQ3E89RoUN5s"
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
