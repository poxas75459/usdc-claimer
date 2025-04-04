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
    "SA4AUW98MyEU1bKYyJJDaoxhjF5G2UTAUmJdiMfBh19aBemBcPMssuzgKk7tSyh5Pcp6rdPsE5f71PJ3GREdRmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YemeExX1ySFNQyV9yvMNiLHMDYwbYMobDcmvHFKbu7B8vgJzNLrxxQaToAEpJDSuTg3CBhz9gP2eByysRuENpB3",
  "key1": "38sdrqtfEHPqjTQKoCsJrLFw6HrS9txYCYHHzvhtH1gyyvEi5f4S8JvMKESpASY8C7xkP3jcZBDRQ6BJgbtbnT7N",
  "key2": "44TipbpEenBzpBxvTU5TieuxjikgcsSFiNeQK9Rw2hydyhrU3MXKmyjXudc4TgQMj6uBXkbryDVSq272HNh7xexr",
  "key3": "4RidHR6HNgkfaALfDscNdKvKcsHoPhHqqrpSHZ81h2P9zXEgugUiuGuXQkThGvFypww3yUogZk5q144R1GNv7gEt",
  "key4": "9PXAiq3NUM9wMfcPSAKXpFsDBQoU9gksAaWSAJp7ojTc9tjLajQC3GEJZ97Z9fMZCyAo6nVp9wyuxYUsEgha4o6",
  "key5": "484DFznxfZmNDjRV6zTLHLD3iMoUN71tnwrHqBsyt56yUDFY9a7HW6D26YWap515bJJyTir9UQturNqnPs6Avmvs",
  "key6": "a6Ftqv9CyUXjzbTQVuXZjWk2eqVxkp5JQcoF4DCJqooQZ51WAYVJQ7tf1Bz9fAXLoWHhBfALuFQNrd1JsRhKSyE",
  "key7": "4CGaLCzH3rnpgRMDubxReZRfXrbohLrMkyggW7qguo546DXCq9MYCPexy2ASop9mh9TmNSSJuasvquwTEMY8GAxE",
  "key8": "YgwfR5WqxTP7RejttqCzFGGHWMat6tukJUmLmSYHWvtUF2qHUnbZcuyHtnphk3Becj1m1L7im6ygoFWNJ32wQrj",
  "key9": "3KdXeUoawGo4Hdc1GS1TPzqnup8bTtfPtqv1Xi14ZWwNBZtEwNZemYmHPY4AyPKxAE2YptXHtRkCbCoi9NkKj4MM",
  "key10": "5sAiJvz4VNAHfQTg9jUe6z4GajbkEbQe61PipB8xKnEehRjTwP667CUeTR7tYgCcrgjnwKfPsjyFPEGvLAMeS5k3",
  "key11": "4wg3pFQ9HpQs1Urno8p9G5mQNLHw9RXpk18km7YmmpX6pdB5yhiHuNtHpLvMiLezTdTyQDKmTQgpCoxnnPstcp98",
  "key12": "3yaCjvsV1qmJkoY4Knr32RqaqnkiwTQUVPXvz1LpVXHLcpbh6m1KBRgjTFacY7RsiZUwuQ4TEq9QMMY6XvxNt7G3",
  "key13": "27cMxPRrAWK9nKw5yqEx1tU4Kkb1mDy9e3KCkVY5So2miJMNKdZcynwD8evXDf88rTawnDeaun9ZoLsCXcCEH5c4",
  "key14": "4hRRqZjjZbWYwCvbmYAqEKi23AGjXfoBch9dqtuW98Uks7JcKduc17wNQ9ZhXxcBdnHg2ZuQfqShsrB849ErUH1c",
  "key15": "5eQRsxodcbh2bLp9GMSRJ6mt1QTmX1dK8ronY8eGez5r4Y8dhGHk8urCSPLYyCKHea1BrrHKR3S4uAY9sHSBSFBE",
  "key16": "3EVdsSzGqeyvUumoiNVF28KJ4jssQnVLyUhEowXSxqPFsnqtF4JLSbfA6HyKkRrk1wqpSchaLTgSHdKfi28eRy3g",
  "key17": "Vz1dZnxNChcbHZ5jucvsDwG21EeGozCXqE3yB1oLG8V7em2VpkNzEKDLZZCiYSTLknAiP7YGZFpEYSpPVbiqUUi",
  "key18": "316dDaENWfJsGVdeBR6ANzjxzRuJTMyhjakcChgN7XCohe7DL2L6y9GowbXFzcDq1DK36B8T8EWgupgUSTbiz5NM",
  "key19": "52nnoNET7gBAWW7KyNHwJVFdbznEc31hzuwDJqj8Sf3NAhEYENXEBQS5afF93wcjdswR9ZSbGVuBJ4NS8gNDwdBZ",
  "key20": "5hhTG1PtL6z6z9YJnnipTUcjXo5XfZiQGPf5aHiCFhtLfKZ3GPvtbScez1Lk9XjLycEvZcyuv3t7HngEJWkcXocx",
  "key21": "4vgrBBGDwcjpc4bW25C51jgUsqPk4GgKP12g375wTVXwzyHJpap4YnzAgPykEPMKF1Kisei5WSQ4PyFv9Mj3MNdq",
  "key22": "7xGt4YzGh16ypf2kwhACEukJTJgAX5XEk4of2qsuDs3azroMQBMZjjpuLp3Yov3HfW4X3Xavc2nxMALfUDcdnRr",
  "key23": "5wAptABBMNuXrEzugzMjkLBHPRsCtt4HjMNjx4ba8vyscfQxJd7euXMQCSW7vFRVYAekMhKPReU4RGVshgx1V2PG",
  "key24": "41VqohDuhR5U7fDonkKnJ1KsWz3h4HJT3DZBMyWosARFg8S893rXkSkmEUrYBpGaJowpeMhyAZZBYszk4WsLRH6q",
  "key25": "NTqfNacRDzS2GPPYHy73jhRqLUHFuVgXgmwkz4nXjo6Hh4sG627vmEheYys7xWFLVrS8vY9HQWLbTxkCAcgNe4t",
  "key26": "3QDdomBDWzsawGntWUYYnbUfPpzgU9iUxGBHVthJiHFoYXjFsKnL6sfgcKrDVfSo5hejwRmCebYVFGs1Vnj9bWE2",
  "key27": "2ZtUWKUUXLTVdWtJ3Fcj2jxEDos1YwFhb2XfH9j3yMj6RsNyH7ZkhK1kE4VRb1bifEexv5zju7hJHr9Kz3DUoxZq"
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
