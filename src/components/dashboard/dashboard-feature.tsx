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
    "LMr1X84ZoXyoAyK7pfvH1uxWd7REvkGLLkeBwEgHBGy8gApjJ1tpHcAxKzkj3EjLathkctsW1rEdG4WWMVunidb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFdNXeqXD88hhnMx1gJNwjvaBY33snsbPvdGSR9TLiTzXogK5QCcvnCWZnigYZbAQMCWLzk7bnHB2mCPcqXHYxT",
  "key1": "3LLv8DWwqyuVEj856SfUd1igMZGmhdvKhDCMvpsrZcZUsPoTT1suB5hXL222wadeEpA4wFTkKzBH74zgQrh4xaTC",
  "key2": "yPDPHLS269RZKVvpFS8baUCrBN1QRwpXbkeT19j3pQ9bqtSWj2fLFDDW5gyweG9BGnSNWzpemG5seKonB31W9Eb",
  "key3": "2CsRcAm7m7U4KNmZ5wrHsCfrsMNLAxtgFrNCSQDVCZSSf5kELh9sDD8UnTbVLVd7YjrFeJbSq8KaXELGnG1893R7",
  "key4": "3e15Hviu9wrZ7xgLebJS8rHemSuq9foVPWDwM1SG24YfhXg62y6s6suxXpP3cNCbkNsPikUM4kWRze8wT18tHfph",
  "key5": "2WUvR1pZGqeSeRz1BofpnTqjX8yVCFsrtYeeCaMvgtZox8bLhaYzwptmvtBaAh1z54T4wSBrLJ2eCCUrLfN5rt4v",
  "key6": "5wZQ28oHnJDp9pbwa8hZcNSKsaYkGJaUAJyARjbtdRSGwCsdvQ8GkWdfHGN6SY3uZ86vRLZmgZfFcjEwQjZxtSvh",
  "key7": "2GKu7aMkTkivBvvS26tcdd5QSrSzM9k4JhaVRosycRXESikmPYa96ZJvgUuQPxXS9C1rZHEPVN6qMy7XSyCTJ4jg",
  "key8": "4Bvf7wJEzyyWxKp5U6wvPVB4xCAxM9pFTDarHodPaffcArnMvStt41udGnCQ9SjzNkA77ATp74YtcptH4fDKhHZn",
  "key9": "2S9ghv49SVmMCCTfgTLA46oA6zar35GBsqVsGpJpaAqKQ5e65Ehnn6jaBcmkLyBBSG2qPzEemLu17kfEjM6s2up",
  "key10": "3V7husaY7SFDYYmskF1HPXkYDn5mCUcKtjFmsyPsGb3TfNMyWmRwG28CAgsTzRA6z3w4UQERh5EjPSGVYyGEQ3e3",
  "key11": "5xcqNQc7hdZ23VdhCWoroQaTW9nWgrBV4zEYS3bfNvZHhNAvPJy3N4E2hhsiVLoLWd4CxcsZXP2QD5m1pVq6sFXv",
  "key12": "roR3JJJ6CfJzTNhnmMSwrweHxJx4uBdKssJcWyiDF6BG387Z5V8gJN1RcxNQwSgrWh2dVJ3zddSp9tmg2y3oVp8",
  "key13": "37G5SmP2L3WZnEWLVJLNUtfS3c5fnTJq6c4o8riv2jZeNdKcwPCh9VY2W21qcbN9xxTx5PkegXLN6AZUANRwPf9J",
  "key14": "342QXrTRwGGRSqbTVY8Rgo5xXStpqyKvGfPRC6zQ9eAnSCECiVweMz9rxzhXHd7S89UiH3nGpd5GRj5Pc7FgXR9Y",
  "key15": "Xu4ZBSbVzUoEfWhyL4q6oZedh8Eg133xWQTXBmDuZsYUAhmxHuBXb4p5GVLaRp3vgCwYVFPD65bKmCuWtGVqV4b",
  "key16": "5cRcW7XD27s7L9oy3jMioaxZ9CRZSyzNjHHv7nrn11ZShpHyuQpGvySB4EL9TWTASSGUinhAXMjwBcGSx2RJuKD2",
  "key17": "61y7VvJR5AWvYHBhFrdvBm4zajcCntbJrUw8KupUxnYcdgiEpkDnSLmEDJKx7LNs9fh9Bfo8emt3upVfduCtpwHA",
  "key18": "23SaEDSL8vNS2wUVKB2jPqhNxgPFPj5wHiyDUhnYRbMeNPiveLL2kkMmFM8ochGLb3GTAdAcVUr88u7XZG91gTu4",
  "key19": "5Qbvb8qTEpHeB4fJzZaP7GZtghFxTenzTC3PEEytBFnEtykNvujf8QyAvC33j1NrPQfuwMkrZyw9tW8QYvBRvyCr",
  "key20": "5ihBBe3fM4WkAeEmacS7JF76J2SM2WvqzJZmCWxyMdA5gzwSEAyU1P1bTGJG8gJ1ceX7nTnqCSMP9gqPLqi8rXkv",
  "key21": "2eWsQ9bR8WRH5ZVSZe5s3WnjWanBQHrcdbwaJFZnHWdGFvQbQ88K8v62jPYyG19KXk5Mtht7mvJ4wAd3eFw7CBKM",
  "key22": "2RmeQkicHsXa2RLnUbqgB9KK8fk1jcsfdSuMGHgNroniSqUvngD9DP1D2UYxKmhXgx6SiuR5zt5ZeicehCY9EHQF",
  "key23": "RXvHo7HstVu4SkbbGs47gr8WSK4i9aoabseJPg2EtvsTQ5j9MQbcwnNrjwtGGgAGHN73UxTLok5ZVtcyLQD2uVL",
  "key24": "5WfNrAvvjEUntUVT9TM1PtEgBBKEdqy71n9yUBMEuqkwfz3YvrwEMy3s8GEV2bAijh9ELXeQJ3cFZaEa1uJNFdtK",
  "key25": "4VEb1NGFBJDGKKGJzL8KZ73uAkqWHVWGGBeCtRLHFHKUjq1n1h76T8Ppkm83w5ALQVQfM2DHKT71eTLFvTAYmYAq",
  "key26": "24q7dgdWDt2Pd41Dew5G52fXNHofkkUCfA1Pjb9PfPPYtz3QPUuDubyr9LTzFoXzMmFVh89x5nWjDAsJU2BwwGC6",
  "key27": "2p6Xuxr22Jw9Y6vBacjTctLp59DVqyVyWfRUhUv9YoLJrLZAGsvcv5sim8w8JV6gQJd2cspEDfvSMCKw4sBrrZ78",
  "key28": "5Kn3L7NFSqLCH88xet8d4MRTuBMTB5Q7zPmoTTc2ZqbHubSZKMDr2Ab856cyammQL21jwVR2Lmi4MXGFjZuTo7wT",
  "key29": "49JvNmwjtXW8FXytS5YKuQixYUdE4xsrDVSpeQGMbZXsxnFW96nuw7Ar75MQ4gqWbinUpQVUZWM4QRv5iZFLMx7i",
  "key30": "51QxoXcZ8XpmEKEjQ5owpKn9nDR9pUedgyvcbH3vAS8hsFu1aWsY585kLvQUBd1Z2DBxcQ7o8Lu97pw689JaveUe",
  "key31": "4QimuTYbJPCdWLvqvbJkWSnQg425eqDhYKBJ6RNapw9QHhT5JFfUQuTCPHfmaEAnu1zPZ7fgMrux2tKkZYntCTBL",
  "key32": "5VcrfXVBj1EXaDygbNEQjgYDc5E2mD7DtJV1VgrKWguH6H6fjTbbSPraR5WP46R2NP2Yi3BGKVosXBpX2q34NjAh",
  "key33": "2dHxGYkDCYV2n3P14MejiLep3g8wX15UkcLfgMBKbnmeZ5Bo9aYdBrwHxxLh4bHXjEheQ7zuoJsKubTpbXsQ2X7D"
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
