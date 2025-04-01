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
    "3XCmXqcKMdQkwVFmPtYPNu8ttEzGHtYF5iopzLQ9upV3N6pf1i5uAhTfCrQytGYuyixuuMNhmn8be9uVta54vLTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5txi4k6ozjaDQSDrkJKq3qBrdJmk6B9NozbiBDBynMxePw5jevCm5XjE5nFQRGYyLhD1MVRZ4y5CTXbB8ju7gVRT",
  "key1": "4Fur9S7yhcgY5rCaDpw7LwZGDskapsmD6XsXqSzckAfWiTH3iFES1eFDi7uT2wiLq4W1ySHeaLxZUw3KxGoayQFg",
  "key2": "iU9z2gg5BaJEvzjNtaxJ4MNmSdJNowPwACB9aE2wGvAGNdrywxkUnHCeiRLXqxDfugW4WVhUpBs1UyefK7UEykk",
  "key3": "3nC8GXuw8tzJMDrcNqx4LrdGcZr69b2wco3QjS5u3a8BSsYjXVhLLHgREifEobrXQSAWP95eL5UD4UHRip8Gwep3",
  "key4": "3hdpg9fUHA2ygQVyVgkcHoHDvqSszZt4rkDEVtRgnQnXfcBtJya5fEDVZTnbc726vLuF17YNigsFimj7hGdysyn4",
  "key5": "5K8vgEKcoU7gMbyzD9SZy898Zu9RDDvbUU9r1kLxP2t3XBLMPJ1LoVqC3JGcna8VtPSnjLBZfT7Lc9EBHtatmc6z",
  "key6": "3Kwxu2nfTuftYZQ3vEFcfZh3Y8VDayF7qM8pfLBYgTmgD7BnnWN6W67WMTdU6ZURxWTCJqoQsDNzbP9uvKKAXZQ5",
  "key7": "4gqg7db5r9TzTKnzRQMHwzf4WsAJ8nPG1FRcZaAr1AQ5GWZPAUYsdVWh1urQbFY1tnU8hrbsNCUmXXXyV7haeD9v",
  "key8": "3R1qqEFrtHwCRQWWC41CbyDdZtnQchutoJ7TagWGytpaowUT14814TXDgMuMBn7TT5tkkW1j425KT2SSc2vBtLif",
  "key9": "3RsCLcG8mgmqSzq6J744G38Ud9rvZqwiwWFw9JvPnSuc5GXPENcdUvdnxF6vSJUaJvo9anVoxMiiPfxFBnUTFbd2",
  "key10": "5ZgZ1FaMt8m2k2YoenbX6hh1qcRBSFNsz67uzAvhTEJgvQs2FjiaUXn2LfsN3eFhp53wJY8GyD31LTwHqBNAiB7F",
  "key11": "4JQYJQH7h7sPjVdTM3BuuhM4MVLT2n5nGG4KL5ouLpSndHw2eSHCbRFZm39QNPetyKKhCgU6ZtzUxLCcL1t2ydL6",
  "key12": "4tQobuJwB2DZD3AnnWmMwHMtvL14TjNVJDtRsTMcZuvgr7HsqL18jyF6GRS3NKDdPNmHBwG8wkm3QytnnyyWjjPy",
  "key13": "2NRyyfdg18oDDW7WeJZjk159b3mskQvxBQVgwxrXkSJ1wZjuNu3HRQ7emB59PNvwoj8t1WwgQ68tWCaXBFnX91ZQ",
  "key14": "Mq4ueeHZqH4EZWdUUKtVteg77JyM8UGXk7393Tr9QZJf1VTqbC7qWc48X5Zt4eKzZ5zGxtUZaw1UoXpKSfXdhyG",
  "key15": "3dE4jei8ptzuYxUNs3DRGz6YGTRznZATybUMFgMyRrPQxZCnqHrXLriSRYj9QNqgEiS7HMkUjL25c3PTFJ22dzSZ",
  "key16": "4BMmwNEGY36xGoXcrS4UNwuxXgFeZ88P18aE7vntaexD6bTeyJZZovzFotRW7d3H8nym8wNzqddrTACtFyEKHGna",
  "key17": "4ZtWTBVvcvLeMjmPtzzprpcVt72SdJp9MsTCdZ2dh1hVJp1it6r4CMQe6RxVDDeWHCRFakgArCHPhk6zfZh7KWbW",
  "key18": "5zt43MVrLqU5VEyedTZQkkbBTEk8XkeMDyWiYvKrh2zLB2oL8vzHcRR97WNeR4eNm35Coxehz4TVmcxJXJ339Qa6",
  "key19": "2P5Vw319aJLN7ZR1bCWmose7WU8ogpK63HjuSqP2jqBkXgvyHVUi2JMS7MQZB7MyKrpdts6KwfVKyTPn8cCCBqWR",
  "key20": "2P848kB9YCi7Qnn9w219nPPwHgX96jzKxshkSk7r5GuLtGmmSATc9RRxkgvYA63sdR1s2Mkz1sg93PCZQVNofza2",
  "key21": "25RzBbigKaudH4KdPKpBFPn4TMSo2kFGeBDADYJ9D4c1P4y6tDH2YJCaRtgiVRXxdEUTERHjnF44FLgrsT7MSjVV",
  "key22": "QJHnsxYFbxWqz5C89y1qskrNeJTHjNWYQgypyss8vQYJjAd2z5cg6eVBmN6F3qirzebhxYWUrEm7jp2okhKDgVU",
  "key23": "BREknQKA7TG3MvHGwqekfy2udRuL8gRh5Mme5DEQZ5GZGfgoKXUF7dGW8RLDxnT9sTddrktQnir52xvT5w5ocgr",
  "key24": "iJ4zbcpKgCVku7y4eZcMDx5g6x5ArmcWnMRWeMtArCt7G4U76MZacA4VjCUw1MybaXqdx9hB3EJUMG27dXqyQ4k",
  "key25": "4ztNkPmuXNHNFD2aU8o1gpnNDx3X76VBtYN6vna6Cz7DdQQVYcmPEXCD4Bji8UuYkDMU8eJZTi5fCa1ouGfHWKuR",
  "key26": "5fGU4dQT6RRMtV4WHZtx6FhEqm2UmUST3svTqtLzWwqVVB1DYpTAjcoS6vH8KPiVQks3kwMRKtopADGyDGphai8m",
  "key27": "59GTRhExYj3kPpXZpCQ3PUfRNRy5LUECKMRAQ57LbjhnBVA9MavFywLk9bqpEgb5F1xXrqn15UGPCY6pSm7dmxba",
  "key28": "2LWkcKWfaMVf8gKGhhiwzUt59ruMrgG4CJJuSonvQcUCkLbSc3R7bK48ZfZAaBiii7jJVAVV9jRKCMho6t6oTuSc",
  "key29": "36oKZ5yfHjLTWy5Zm2CpDKeFgTFPThiwkRfAH9dMDJ9Tbh4jnYKGCENuxGwnwWhFALFAfeQDdnYYeSPXEG3a8rV9",
  "key30": "5PvCFNPzHpmPteJnt5spvoK9gQ99GC4DPdETyuSjDR3aoFiDbTbGBoKBLkcwf7exZAV2L1Vm8NW5XQmBrEfhrszL",
  "key31": "wEcNPHAJdeuLwA8AVs8Q5tvcb9QLT7gqGjqD7WihGnCBczQ3qTkp8XSp5wchenrVRLDN5LFLihMn5JnhM482AkN",
  "key32": "5QB9BfyCQnDESr5Rp45C9tvZd6zKee2CuKZkHh5cjbchUbF13VSj6Q1Mkrpxm6EeEqJTdacvq2khh8pyDskJZ8Ff",
  "key33": "2nSM3S5z1tNznzBaYDp3htrxhN896riPiLB2SiALSKB7nZQbyWDUadB26ws3JHPLwcfs8iKcVtzS2btxZRPz8ZXo",
  "key34": "53ZpZLUiBWzUo2SrpWAvxk1psfzSqbY8VE1fJBSu5u19KGo58KK1tJYQPPb2GNeXGLsXm9c4UT4rc1n7TJcXhnk1",
  "key35": "4Z6SWHjiN9nkrNNf9MiLMWgrvdbesr3QgYYyN3945mWA8QUiFkyh7ZQZFDwaav86u2aQ3wbkE3VRKw518Dk8uvHZ"
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
