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
    "FEvRaTt9BK3bfTMjSmv5sRJztimuadAMVasNiQvj2qSoSLRYez9QjgMhb4vKcN5GaGUBdUGDgnQKuhVAmQRuwdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ARMywNKcEZgY2iwWxKWtoUQ41YNzimWfhX3eNy1k82CffneZgRg8BSFo4jgB5QDp6gH6GJ6xkhcWqnaV8qBFtU2",
  "key1": "3BUbfqakRso6Nd62EubcNfbos4hD7BT4azNhxneWHiUNkYUngCgzBKMPmupmznxK7wwLKafHvkMCmWroY1wuex1n",
  "key2": "WNtJSVwy4vETEC8KttNBGUAK9AxoSuBn8wfDL5Le3uU4PfSVLqv1UtWWNdmJsKe7hGaHyRLBf1ZEBr5qCoyKh25",
  "key3": "4vdPKaRiGL38rcFQP1mbCcRiTVRBVryZeDVDLqHSCsBeyjTS6a2P76rxo2vMomamSTxnqLumXFYRvGYfaNLueoYi",
  "key4": "2n5ZA9yuxHWQkKVrYUwpQ8kemvmUeZxw9PLPdDcrE2f4D6JG4i72sQhHRYJrseHp812bDdRbSMUSmBwgAYd1hqy8",
  "key5": "WRo5YdBukuVotSnVcgqfCByj6MzsGcVM41923XbjNWTZbrQ84QniDz9Aq24WuTSnmbsVQ7eFWbLDjstcssyAxMg",
  "key6": "3XsdHmwKRvnZTM1wFyaM1gu6LWHsDXog78iEp57N8GiwjgYos7uCTaFmC5a6M6aMx6Sb3LQQoDRJYxkpSbscibbi",
  "key7": "2vh6QpUbdnxFjsZASr8hxebjUktFKY3n9swtN3MM45dQ6EryA6etc37pwMdkT94DDVn4gjbv9RmGtzLmefMoK9CL",
  "key8": "46jmGvunPM3yMQEPYLscEb5waCmgrgWf3iqRzBaJ726KX7fsCYGHfucknCoQTwm3FMEt9VrwNf8onJfMUaYi5EhK",
  "key9": "YpAEejt2TTByVtdbx1Yaf12S7WT59GyZuLVf6Pi8YtVxrnZWXwQEqyNRch7M7n766RU9VTBhY4R1zpHrZRKstsj",
  "key10": "4ubW1FQXdrYwG5L73oWBbqrdxy3jMwtTYNMjtKy5xoeco8NuQJtgGEQFeBBQ4pKmo9xFQJowuGgPgFbp68DBsdac",
  "key11": "27sDYaov374f6Lff64gBrdQxo6vuEzzP6oFDGcbXgsneduWxPLRrxhVXwn7ec5CQaJyH5nnGunrUg6HE44iHzBM9",
  "key12": "5UuavUJuVg25kN6gmLJ9e5wKTkDaZyuAVGuvpzFuvWsUuMMkS4BXAVWqLcVN7iQM9veqg16fNCgWZ3DCHQANWaHk",
  "key13": "AAWfUfenVp7xcSiwiowRNte4RPvXwAmn6gpLAA8QcHknfA9g1EoBQfx5D1z31yzRQgfU2HmhPGSgYGyy3zHtF66",
  "key14": "3BiZ9Vmn8iL3CzywYPkdY7KPyy7E4E8ywyfnJBqGHY4xjTj6nybp1MMHJX4VmorBUXmCu1cEcvFUHJCwDZvmaPCt",
  "key15": "3Tcb88s6dZbS2sfpQG7ogGxv4YFQgd32yjFYrjXLb2Ah8NPLSZJsRnpidUC77LLqTPoWStEgQyRqFmznRB1gzYF9",
  "key16": "4AGTjANW6WDPJyUPeYBk9ZQqnXx1TBA5tBhMJ7LSmQurpgL2tLJeNWENCgwADgAeUVe4YVbvYEjSNnePWVozx5sp",
  "key17": "2hJnFWQktK6pSrXYCsx19UjUqnpeLgqPiyG6TU2Sw6Jbw37QSuDbzN3uxcGrtFMezkZRLKK3mmwPdKsQ2UX6QHUJ",
  "key18": "5VEAP9i9g5AvmzLaNeiTtn7brwkEfNf345QmamvGe7BcGKywCrJfm1UVusbx7LeEJQsXyTh4REc6HMiaRFxU7Jyp",
  "key19": "73MM4xr39ksKCm4caogmehfxnNdoFsjigu6ccrbbjWCswddziYToT5VQJ8SdeRJ6DeD7vSmgz97nSM642W4r7Vu",
  "key20": "Stzdn94uiQmJDYobWsLwW83HjYNipN7JxVbq4CNAZQHk1ZsiNPo7MndjqriDPtuWCQd7NPMjLqyp2GvArRMhyFJ",
  "key21": "tdrxAoZtX3zd1fZoqPURixoakPx3Dr7K2vb8oZYWTaNmpW9QP6zDKdjykJRSPyGpXQrXPHfqhx6nTkWdcA8o4gp",
  "key22": "4JqbooXUU78UDJ5DyUrQwcz1n6tHiSgDTPdLVWRniWjZBNDYvZDHehL526Fsr8H8p6H2jTv4Np9ACfdUfB13gREP",
  "key23": "4vLQH3cAsWyrkGs4Jp5poJi21GYYTmRR1FVbJ7Q7Cj5U387F72zw8RXyZiSfCENTQ7KVokvqNro4aPp8k4YvyRFK",
  "key24": "4v7STBCTkY61SXvw41tXLXxgT4jrYc1aQGmYZoFCF97eUSJJ99VMshg82hPKX6VTqrP8PMPXaNNsbZeFdGpLnvJw"
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
