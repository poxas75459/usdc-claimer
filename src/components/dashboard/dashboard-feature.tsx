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
    "4RsWN4nDsSbV1gg6dsPaTJeS5CiQ9vQDqSW4fhmQ2AkGEiLfsDrACg7ScCK2FSFh3HGNNWSDKHF8UxVyZga2Y75s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jtfPTEdzzAX8r9Z2do8yt4vCYPGAtMxQSFurvLVq5YKGg7k61tKfei5PgeFKHzfbxij4H4KwA8caRAxU8ER73Fr",
  "key1": "Hua7Xv5QJqi8zwg6DBczpd5BeraSBC7mY2eVemT2CgWRDb9WnPkASYzcKCxgcAnd4zuit6KmPgbQSc8Qexbuvcx",
  "key2": "3upZRkjfvUt572n2o4nNJVi9KCftZM2oLJcDedkx3iu2mfMqCSuTYocZGqNmp3NWA7ywBpWPK95zmZdRUjeVMX3G",
  "key3": "znH5cAuf2X21q5ZHYAxNr1bVZU7j5HDE5ShGG2csN7E7TdxwU3zv1kfGN79AZ1htL37wguyhDDWiqZvqsRjhY4e",
  "key4": "342E7FTGaagTb54rMYQTb35tbUmt4vQpbwm5SRsTNT9BkQEi2WaM1oPTwM7qYq93JJ7JqjjS5Ni8ednBFTQweSNr",
  "key5": "59DMqP1WjJSstJj4KZBHmtDj5fRfVqqVZCeHPtygHpJi6HRUK1FY1DRc5VTVUg3kqWqmFyAVqdk4LnQJvBasnbXN",
  "key6": "3tsyi4ecSVn61ME4qd1Kyrjidv1ZWeQREcTAJzN1hdzWeVSBVBG8tWYyFddfoBT9QyaTkRn71GPBRGKad4CtP5fr",
  "key7": "4ntzrvjmrSJTwuuLqawvNifzi8zZTc1r4X2KUrifiV9vYQfSKPpJtemTXbSBpWieDtQbTFWhwkbyUnR93ece2SzK",
  "key8": "3cwmSZFUFNDpMGSfma1dUN5vArcksd99q1ujjggXbKHyHUy111Y5fCysju2hAcSSyy4w5agNoafMmwx4zzqwk7b7",
  "key9": "5s7NrJSHXDPoEqtHvrNWxfR2WYyJxCptdHKnFYzhDq3ftUmGcceYyBV4MibedopxeVLzH5iSvEspxtdJtpoRvHft",
  "key10": "3miBybv5GJ7K4qoDyvq6fjfy89Mo8XAGESaxYuof614rKjpVqnwDb3LVw5THXUzQVHp8FuNscoC4dNARR5Cni387",
  "key11": "5NxoXgdKh6jCKZYr7VVyX5q7ZSHz6qYXPMWto45HUHs6UXMs4eFUihKz3dDGVdP9zL9xchzPYgcyJaFNkhtKcqDA",
  "key12": "KLLziSp4Qg1WKgTFpzrDQRCKAX9qBLZzm3NHgT1n2vnr2KPEcVaBWxYqYwuqg93dcsaQTiTH97eD7yrH48bR413",
  "key13": "24uBMVtFzTGAcCNzuSdvsxjpCsG1KnQfiSbyxWE9PrTH47YAcAkd81Jbwu7FSiK8WbNWipc8rnrhNe6xiQ3w6eys",
  "key14": "3qag1vWpf77p2UMmFjyGtftmDHEcqToCuWKK48C7AzQHMtTwN9vJedv8HLoGsarjJP8Ypq9snRuZBuecjCpkPmM5",
  "key15": "33CyYV1Pbg9LGvweeoviTM89n1uExVbHjxQemye1EBoAtwku8nYJCKMCoiyRR44aR1unqTfQJcqJRcbnyjsihoop",
  "key16": "78Yag2TEkaYWSB4t7HnygwgX5V77G57caT1d8ZwGq8qFJYnb2MWWaaJNs2LWDAALKBP3PCWmzbXHP5xN9VMN5rL",
  "key17": "37eBWAg3xEHKuzDqU9BrS2VBZCGkZVJrcALiMC91hfaUxWTL7GpmXWtMg66Tyw552aW9t41VyRPEt7TLXwuxZX4Z",
  "key18": "4prKw2wUNCU3nKyuLC6ZRpibL32idsXyqhSCW5CLZhpqd9koLadXPJyiWnodBhPS2qCcRAn5sj6R43X8Mkp4qSuj",
  "key19": "5v3MNJ7ssai1Wfvno5oZdL9WYUMG6C2qXqWvs2nZhpLQvbnecXise9aNj5bSKNn8xcEgQqWkFNqFzAWsiM3Rf3ew",
  "key20": "4XNZKiQ5zxf3zyk99PCfpCBLs7CPG7e4ZGwQQLPUyHEza3LdDKhCtmcLFqEWqK2dLGP2DchP9vaKU8nkkkB9zgSY",
  "key21": "59M2t4o7emPcMQYaLXgm9pPJ2i4NE83iABxC5vQR18NDVosmcj8NYKCWJ8UTyjD5zEwbXXxHycRvMcKCxyLB8Bya",
  "key22": "sWsk4ctWrZ6VUtX4QZtwuKbsFKfqxzVZBdPAiq6APvEtju2eYV5oevwqBC8fuLD4wtKkV6XSEXPUkQsoHudH67P",
  "key23": "2R8ricLcZRUq5YKKzpF1HXXx5ywv8P9kbfDriSa52ZgMxCafgY3mfGweWevQkD7ZeC2QkvGqroo2sztu5iSRFQgq",
  "key24": "5CVBgMajL2FRJZTTd3Yq79B8Tha5B1CvG2Jk1odwDLqjDN7bmqNGmbM3ZQ8CAzhBZScwWv6pjZARpfzesqawNDPA",
  "key25": "2nceXba5WRznn2dRsEicDxnTcej96cVHhRHAJtTubp7L9djMsH16uYZgFKpyQavyaCfgJG1ftF3zVdM64qG7hQCT",
  "key26": "5skW9swtaYGJynf68AkFF2vgPMrwqnmL3hcKKL3WDHjKkAJL55tY6NCw6GGi2CMGPC7EURSR52uWAohkVWn4XKz5",
  "key27": "2dbkVFeMN2hp7PE7E14tyZ51hA4ty3c5xkXCnYgRSGcjqs2k1SFHEzSDJdekq5qSSjkozr5b4rtJt3v2YnJckgzL",
  "key28": "2ptqA4i2Vr7NE2osBDgUtC6SBZQV1CoHGpTDFYhwpNvK4kwMf2c93rtQKBsUJjvb5v2Dux9ZRR9PYWMdsWfYRiuz",
  "key29": "2PMTu3ohMVQgPPhcJGTBLvS374AGtwwnc9vW4qTLBdEd1mT7kNFRy2DPAGSLky9GhyJM8mc2bmTEMHLsZiaiXjn9",
  "key30": "4kEbBQkWYPPvkm5CSGu7s8gem98KJ6zn28XHHR58kTS8h5G4mYTkS3jCZAizdKf5bSCDf9aTwDCpQhK664j8eUjg",
  "key31": "5UT9yHMiZjfYahzzwVX8t376CiFHKor8SE44jrn3D6BzTe9Z2R3CQPtqnn9HQ6Gq8wcSSBBeagJHvrmWetfceJrR",
  "key32": "23ks7nuGbRG475FBmi7ZFFsXQXK9b9Z7pAd7sbn4MW9RxgTY3H2u9UQ9pPvQzKfWBwMcevH411gTy6HwAthPjeR6",
  "key33": "sDa6Q15xB4YmtkiyuYnXf2Vqa7WXKrssaTHFtHcWia1QdjKTcg5FT6agchcwbzzw7rkQKLXVxvSWHZyhGj4CaBd",
  "key34": "5cV1EGz1UJZtUvuaQuJoS981roStKcauYE7M98kV5JXcBxGYHdb5QnaPEk4MYfG4bUtdgtceUp6Aer35vCWxGCj7",
  "key35": "UJTNttmp1BVbdWKwef4fL4r1NNEg47bBkYVtRKoV2D2McXsjfBFe4E86vAb51kMnytNXy6Aa2qABTxveAVUhxu6"
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
