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
    "4bpDAAbBvZRSawotKcBMMXN6iDMXHUR9NWVqoi5So4DJwAHiURPvwc8R3LiLiLNgL8xNuzVtRe7DmuoqGuzWNmAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVXrArwi2TauXX7VsXXjZDSgCPknujR6gbXKt81Zq2zBwnf32XbTDLP46bzgSuCPiCWcBMawD2QzPPKYrThPtto",
  "key1": "25Y4iSoqy3XoJKv9RrZvg2unYWZG5pjqCpAvkc3hUitJ6cnWTbFbDCV9giCZ24B6CxMFn5iaACukzXVg4rYv8Vs7",
  "key2": "67JdxDDonU7noCMDwd4APuRCS5pewVQow4KzKGZW4iVbun4pE1rZEVEMvgwCeAKhp7rm2WGB1ZeyBBTpyGKSDWy4",
  "key3": "4ewzJRUgE4ajQJxUnbXY9GLCMRLLJGUQSQjYYKNJc5zTeLu7fPCVvbS88VMEExRdAZhJ4zjo1pgzxBuTgk4vsLRR",
  "key4": "5SUg3bQPKGzWtrF2zYnr2xmNTWjmJ7vY1kkN7HTqbV7B6u4oSv4YLmb8xa8TkWSGsJ2AWUEMRf87XLPcw9zQpWo6",
  "key5": "4VFo1rzDoyoZWGeVUhYjemamT119iei6Aqt6WCKqYb78arqfgW6L5LBNkQSu3qaa8hw5SFrPMQuvyxNHF794imcS",
  "key6": "5w8L7pQ2eseSKpqE5X1kYKK4S4YaUaM8obvg69pHapyVuq73x1iBWg1KzDgPE9D9Ugiep8sC3M993YUgv9NFW5PY",
  "key7": "5EK3KFPBhUTj7jvs5ubCM3hmdvCcFcEVeFMiBodAGZc36qV325s7p57aA4p3NpaKeZcMDJQohXyVbUgXxgefDPgx",
  "key8": "4ksPgBvjhbYosaoMVyiiAXVU7j6hYAkeL6iYKKSDT2i71Jm6R5h2KH3kjgdpQZRuGgzVqJXjEZMK8f4h7UgF9RNp",
  "key9": "5rJrzV8mZkhxVetbkPVdYcGb7on8AVvJSa896a6BxHNaQQZWU6js43LFZMAi98494fittLJTY88qBk8HV9Wh5VwA",
  "key10": "5uWxZZL3z9GtpAresaPZ71ztfoajb4w2xYx1m5KFWbHTBzmx8g2Xko6WE2NRaA3u9pjvCbCwKDHY2cEoqR9Mfm6U",
  "key11": "M3nzHBuk6Wrm2aGGSqq3mq38VV8e6DLfN2Dejq6xLbAFuKU4BoigM1To2ogbxfEWyfSitXYyLMEEr5kx9JjyhTp",
  "key12": "6zxH1cSNgvgcSFQh7YUNdiW3xFoZcMVfx1C1K42x3oYGswDXGNurvca65PsbFSAoFRd89WofgLS4fBu8fSUWuLz",
  "key13": "2Mj3rsmiYCuU6Ua3dyGWeKifYkJr6VVqfrcyQY8qxPSj48dc2LnAAnTa28x4FU8f5GrrjLyiGDmiLtYHCaVbWSbt",
  "key14": "o8sCEmNNdmaKFVTqFLZKt9znoWyPBLSY6wE8dufstc2G4vTmwFqTxQaTRuBrppLKEFfgbDoE2rub37AvJ37M6T6",
  "key15": "4UzirTiLF3pR8H6FsrJrtXGf4cB7btnFYKexwSAkWM1UEG4F666CXXJ6jR8bC2UQan8b3gTkhpEBPE99DwKvZwTH",
  "key16": "53KAPUDhNWQMNJyj24nQx2jPnNVySfgU76Rg127LdUahYkfJDYyWSBT9zvpgVvui2TzJY1zN7KjHFuoMEAitXG2L",
  "key17": "5eokJuLNWerXAiiBwhUeNxjM51DupLDTH4n2D2WJeYW8VhQPU8sxRoe8DW5n8LdMoWZMQ2F7hiaVikcTvsCMQJWe",
  "key18": "2WW6LW87UbReEwkWdMmh474xDPGSSr5mVRhw2y9D5HzDvAFkSmhTxwPax3VWpSHg49RJHBHscCoARApSmmoPrNB4",
  "key19": "3QGhuTKCQkctPkuRwyfcmvs6RYGg7sW3k5qKFWBw118VKvHqCTPY1BrjF2KbRdNRnRUVxwGmKzRNWdoQqjY5RKML",
  "key20": "4uUDuvA4DzoiSson23wL3JyMUKWzhKeBstCh6bshEdp1frJJt4VLBnUvHVCktWeyvy7a4h3Hz94pyd3hcLsogYtW",
  "key21": "4tCgjeyoUicZp4qVZaBSNFZUa88emhxBqoiL8LCa4u5EdBfZc9ECrv1uZ8HRq6MjnT2o3NtkaFUbN1SGggYrywPv",
  "key22": "cE7YKzy6uA1uTm3mPneAiQszmKFT9UtsPvACB3wZyNiAtBpWkg23VGALWqwDSSDxdC2YAVQJK5d42LgQcZ7ATpV",
  "key23": "57YWrD25wqYHessBKjnQrZEY7Z66rrtQ5TydsN3xeLDfMc7vAMcXLj6aWLAuKShKSfS2uFFQy6qxdxoBkmxADDMK",
  "key24": "CSCrAH2yCY6jFVtsodAH7ccWjfU9ceFyNKNqSPXJzRegiAXqggESHqQM7eYBdDCNy7n1fF9udBcHhMLdZGGv4Xf",
  "key25": "23NG9ZYtAh3u476Y1bZVtEE3usoXFyPRRAd962szbXz9qadC9hAYYCA76RwZyDcSDUUXL7dYwGXJB27p3UqbBFZT",
  "key26": "JPZghoqjg2bSouaqQJ5dZ1AQdaHHvW62wqFi8VCemthWGQpJ29sDzJ4mQNuPj6kXpfCu1qRLhzoVCg9LgFmoMdt",
  "key27": "3PAQEAbNn2L2LJvbSGUbg4jrmCv14CniXZmvufgXKYVTK4Wg6pBGYvL1Erjc3n5VDfx6fmXnkrMTdxbbKDXyHtv2",
  "key28": "2BrRqsvNJ3ogW9mT1eKF955nLBDjeq2tQjdYvdKHv1qJqhQHs9PrP7ZMXfjq9XurwLUzywRLGSCjLLALTDNDz75s",
  "key29": "EjKHhrgDGYFTBLLmRRMwVVMr5mv8R9aQZWGxFENGGae3wHnE4TmbVUyCTfcNFACrDiBGfKLe4xsySN9zVHQDrXQ",
  "key30": "3RyCMs2ZvxYSab3Y5vpPJNr7kCdjGdFSQvmpXA567pVE4cZ42mQi1uaozAwTpeEFMU2sGCTmDctPLFfBaZkf5eXd",
  "key31": "5wuzUVTvS9VasS3qniPCUsAAYV5DYizW3mX2xkB6fNthcuWxP3fHhsQNddu7ReJDjeCZN3UKNMyTLX418kCfb8eA",
  "key32": "2mTdHFt3KAx3j1X3soAUtLvko8FbqQtP4gBmRTjsoS62wW7GBiQkx1NwHdT7YhtgBafESFrg6prChjCm1NngwYg6",
  "key33": "5qg9Gg6CiRpSDh51VqtYpqbTsry816LKaMcSjYtGoww63axjHp6mYuUDQAGor5tjHBeHEPrv1Ssh3Uat9asoLhBQ",
  "key34": "2M9YRQbAqn53WwopCjmKZ4kgdyMzeq1bqrnF7TYGTnHLL9HfjhBeYnEg9jfwNh1AifyP83HF7MCRJoUcrG53jgqF",
  "key35": "upanZNPAjS1cjvzqhzXgQsFTRjHyLUs2oMcctYPsXhMBba7qVsKwwnnuPFUA4E5imEdXmyQAKXpeWqew8Hc26RJ",
  "key36": "4AVpcsSWV5yewqh3E5ybtt9DBwwKJvateaFogF42KV1J9hz2j3GaUs2RRVDL3ekbaANHUQrgs1kofiSv8uQRYJPN",
  "key37": "sXEqHf8DkR1q8BPiDLaYviKxZiqL6fZGpmQP3p2Yo27hXKqLVgWDPR7ZVhF5oYDCedRH6puUjTCMcAfqPEx7dvt",
  "key38": "558M1Gs5HA4CzUnWuHZkqt6CbYxf4yiimR8tq5NGmaSJUbjRqynkpL3vVzwx7yeZagUnGxc8WFEqGhTZQCV1y8Tp"
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
