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
    "5NdhASRkq6dtHWPWcNUGv3z6vi7gjZtcytgRNPwXURM2LQcdoCMSftAVYYodH7YLXRM2S6mChpgSjQLGgEnEaeyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oxr9V9pCjXTkVx8w2NkevQaL7zQTX7W3Yqjn1nbRLCws2r7C9L2iPf6TqYk1PLQPfTTakRmAHgif7qQfuCoYXHC",
  "key1": "4bJQAUkrp1aSrpda4riH63tEj6uCy2wLiBJdqrgTV3zqTxMgjbNiRjE3jdgK3emJChTKJTyp8tZmwiew5rrJoRaM",
  "key2": "64CHn87EGgNRBYCvwijpDM8oBNNWzMiDwBN1d1jBKYQWTY1hZaocTH4hv2KVFhgEiDNQ44rtPT8MnqCYAZCRzDcz",
  "key3": "44quLWcK24patFmeSoPHdHYmWm9wDbds4jczFq2QPn7M2KzBi6D5kBrGn8u6spj5SQsteS2q54nNyGKDXXfxsC4Q",
  "key4": "35AUQMk6EfmQ5Fqs4CVeJ3hCoUNGNaeiJLLhQ5gXwf9wawcpZiJDWiVJFsPNbfXAMMdas1vnv7Pv1m8ANZvyLBZM",
  "key5": "67mEkJNAX1MdmYJnCvkaemf643mjTXEkF9WJegf8Mkvha5WhQ5jm6Y2SkjY1o5LXf2FN9fnVnB9EY5rg9yfdsUZA",
  "key6": "5HqmXj4cL9uDTJwDKRuyns1ReoiXhnuRK7NQxVB45jqbqorPdPPFqWL54zG7mqWr9ijDLmXYv3JMTY7a9u1ZfRUq",
  "key7": "5D6TnmvZ6FXfgw9rxwzg9v3VzLLphVQC5L1RQW6xEVLPRm3zibHKgorDA741usiCD1T9uKfmkhKYqQ89WRPdXKwQ",
  "key8": "5Y7h48iTche1afxSxVx1MxXV3tc9VjM9rzZPZ55cVraEEgZ2eWbZ8i7JmEXtGhsvWATYc9Wu45vdBDeNWBnPKhTY",
  "key9": "47TzVKxtdVUBWHcnStFGXUB3GbxULzkEaeHNNEgfUE7w581ujYSYuzF9b2TXpj6r1vhYcsa6eLw3Ruc9LCLaqZWu",
  "key10": "sedgFAdNRtwS6nm1a7yips9oHsZd43BQjGwRg12ExfG2nKYKKxPrQ9QFF3JTzJRc89aEp4Ez8q68u2YxM3dQyG6",
  "key11": "ECagcaN9QGmjjnUAt3FSj2hqmcciaj4nkP7i8vKZ91MDmN87VWSt98SArUMcSMLdChgC6CPSiYYUbReDXQThDzS",
  "key12": "64aDokpmnk7aAKU7own9TtRsrLFFpvxo8t7xPMfC3r2jdY9MX9J4R3HKgBuvzvuoD2QjPiEX1DpYegswTjM6ZbRh",
  "key13": "xvpMcveL1Py5MXghYQgeEo17AoYsZifL1FGnETWXF9pNK8ap3SUV5SdeeMN5equLRnpjKQYxvXagyPtpTqsj8Jp",
  "key14": "XnhFMJZNeKs9oFZXTfJoiYjuC8HDoJBPvaVfYKvX8wRDUEDPcWtLBeu2EFoN9VJyGDqdXBjCniL9oDQ5izgdvED",
  "key15": "4dsULF84yh9rTnWM5dfJBkmnqZrQcehCk8BT2YNcLogzbfVDb8rwFMvKAK5XystL96cfdU2q9ueJT4f2ZEraAYo6",
  "key16": "4niNi1ktMx1PwBEo1r3h9DzpDtjwm45ubC5H32aqeXXoQUiRw8cQUkorSVyrnptn2Nn5keC3e1YQv5mbgdEXWCrW",
  "key17": "62KrGMzNkKgRrpv3yuSWe68RZ2XLWhvWDuzJzkVmrfQDbxEXgchU92Z6YcfGhg3G2ynMfCEmHp5GwxosZr6EreB5",
  "key18": "3e8sePPKpH4bjiHdxKS6GbRk2qjqDYUqdFpj5vGKKnRo2ZqfnvRhVaRWWt5rraoFBVB2aMZvxCJ2zXfsfoWpX7rf",
  "key19": "2h6RZDoJLXyuXYFzMFeanJk11g44oGFGLPDw1uZHi1WdZh9Bq8g8AdHj5KxUzQXbJGECZTiqWivjrmeH4Svrywcr",
  "key20": "3k1TTRbMmKtCqGt8DZqmCy1pKNn9aQRAMSY9viMoTgHBe2fn1b3Be7fqe2BWnfsdHyovRFcuQ8fpPSG24jcT3v7X",
  "key21": "5Dn5rrFiboYKcnAMscRoLtqNz7jCcM1sLGbwUykSX4Aggd7MyeTgqgTajGWXf4F55rjukk7Gk9DKa9kuwvJcKsL4",
  "key22": "4Gf9zVEhjdXfG97jnoEDP3MriEMX4npFHU6Tc38PaVyPGecEXhP4T6cpTzUKoiES5jnvzVB3hrmvogxiPaDuRa9A",
  "key23": "2hAk7BxTyiSUwBnKpLXWiQiyzW6G9kyG4PJcFFRKRnemD9QJUAt3nyxMExhX47N9zGTpSWv7XF2BrQS1hdZ8QQ1D",
  "key24": "49azmqB8sWvUs68An3jRduH6F81dVS1KSddFnWa95r9uyXHCjzAtk7HEhJxu21EyQwKecSA9R2zn8W9xgMeHJ5d9",
  "key25": "2Sq3jkN4VncNdE4CYYoAq859ZW8ZZSuGatvdjhyRFstMTynTCLphwLSBbh3MFvH5JUCRStb7ZwNieV1R4VY2dTvq",
  "key26": "4WwiekXJfVjM58YeXNWGr3aeTDiqN6brsCqwSgnAr3U5JemZtcQroBq1ZMaTnMoFp2aRRzhJxF5YqXwcdYtLJJPi",
  "key27": "4ma5CYsZUeaVv6Tghkan97mitETpWBegcE4dt3xPdhC92FD1EkPZvXToUhAiozFyWFi2N3VS2ohup7tic3tiXm1N",
  "key28": "6wrrAw5Ns1A9RLqy9izY9EwomnAoEk7E33JAAZsKxZKqq6AuPk4jq32QutjDogqWgb2FdxMKDe1gdGhws3qyUTT",
  "key29": "3syAD7HXM2b2Qm5722iM6m9BjiLcFEUXLBG47VHnSqR8eMjcsgqj5HuXyRwyPbyNgAtXhe1FDMV65fKDEFffrCMB",
  "key30": "3XcU9ERB7rX5bLRNyDM3LA5gQNfAVv7gqP2i1Zd8pVHZb1j2WQRnh4SYwPjmPwvqdXmi5GkjN4may1Nq5A2wNa9T",
  "key31": "3RLbHycwK7trVtjfjq3c1jaNKCudt6CxgNV59iFbrs8YN724N92Rxx5AQBHmCvSNAZkkAsvjKhhYCD4Vps5G3SC",
  "key32": "2RrvSu6YeCUuNtqNpBQ5RpxeF8cbVh4KrQ8o4Z2Z28SvFFih68Fw3nhoay5EfhFjqQE6K5JpeppuMdFknjWieNyZ",
  "key33": "51KESrKMKy5AyG1vKpVMUGTZXiCWt4qnCYeAikxTxXaU1abUKHkuqLstJHyerJkzyeX49aBjey42ek1EgoQynFCy",
  "key34": "5P8LU3xuUM88TY3NHTGxVBMZHpoDsbDi55bhdPZbZ76SqBoHzfpA2QD6n3UpQJzZVx7eZUCPvZQMWSQeGX8BrxwH",
  "key35": "4q2DXKiwAjxvgvvCNQfZkDdf26uHx8uQPn6MoiT8Hbuowk5RhSQMpibj9K4qAtC7poRU4i9MZgEyPKbYebnxVHJn",
  "key36": "mW4BvcbTwKnuVYnw8Gm5E6Etn4b8DvhX4TZAUPjWBU3gkLf6biju5A8ddJjrfkKT5Wy9STf9JCnusYCdRpEVD5Q"
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
