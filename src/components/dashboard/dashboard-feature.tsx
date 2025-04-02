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
    "8mYoZyGKfYpjE5CZ6maZ6wXAfHYdWAvxMHZTPoiZ5Fk8bhSe5nQG7zJmphCDKouAzkh8TpjzxhDqisPmg1nZpNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VawNidjpcmpstumejCor8t5mV343moCqit61GrdVtH9rB7eieCYqpi4RjRerBPhWF3WFdqYhVsRmWtrKsHhowxU",
  "key1": "5w83reTxDL2YgWvUfRpCdu16Ys8g4xqCisdHYR7Z8bMjCfC9n5vaSoL3LmJS5yvBjwjXWGgeCxdguQcooebXCWoy",
  "key2": "YtBGEEutSuudKvpWptyQDvEDL9dmxDTxry1aFm6MBgNZxYhqDdbSAKtb6ss8DabGV4xvcxwG4uese5ajfciddeP",
  "key3": "5QsSrDKsSqCwpjbWASSnG5TsEJZJYC6AuroQZHf1DMy47ajrnRKbjoy5SvpA5UEPG5ca3YWkSMq81odGkr9Zj7Bd",
  "key4": "33yiyAfKYN1Fhjcys3NHPCoDowabe817nyd7rFkZx4tcZcLsoWLPEGAjcMxbwKz8nfWtngFyHXbj1nAyAtVneeJL",
  "key5": "63HWaNiWTooz7YrrZ6rS3PerDTMwpL5yUywqeW6JnLeqbmeecMdTRSzkX7oJwGFn3bCcVbrtDcxtCbzAvJktYPo6",
  "key6": "2dD4b17ioUWAzFUAQf9r6WYMCfWVZ3mPqnenfoLVFFCxbmruxw4SKmPXNgpFVB4i1Ukda78zEpY9CfHHPwCxBBsD",
  "key7": "bXfVeuV8EkKv3EmNsfdqxz5yccriHK1HbL9aLJerYRbj9Bi3KNgJCdkR6pybb6uniNfC9aXEegZqfQ7nTESrzHc",
  "key8": "Xs5TPEVyFPmdBRkFYxxx6gKeJjpzHvfXuovNJXnkam4GUW36dknCGMLLHufHxt3u6N4E9C4bKKsjS8QWc1jmM19",
  "key9": "QBU4GbEeuN25MW3xWUa2LTKxCCUy17rUHJjtHFeAVbibrDWugv1uMFJdipXoagNEH6HkzrwQrLD5WzJW1YSrM4i",
  "key10": "5GHAnQH9mzorzJGPFQb9nYkFEHAxnpXMZW64Pvd72M4sYt4v9gJ8dbJfbbYwnsEkkJh87NTvrm6gn5nnP7WdbbdT",
  "key11": "2ZaajdcHH2QqEqbTaB2ZSEyaBxGGvzku1yq8SoE4mFm5b1TucV1xN3gkTP9uBSeJrRaefjhq1op44fhUUUjfrAYZ",
  "key12": "3BPcuzb8E4LMvkmiJhZfRyeZJCfAdoNtR5BToMSdZogJsNrReePhULLWFoUJU8ghGLfZBr6AzpQHjvyw1aUeSxXV",
  "key13": "5HFhynd9s4pJa1Dn9PuSFeRyE4eWWaXc1CLPTZBf3Sww6nyKhretH6erK9c7UGsqp5Vfbckf1s6Dyr4ifBaSG2Mt",
  "key14": "24iJAiz7ADSy3myHG3gnZy1jBaemY6nQSbLtDHeZzHHiddor7STfi6uJT91r88ndBLi2VhgAn4XGWn6xVsV6pbwU",
  "key15": "27zcdqp6Q5ixs8547oYLMS5QUGU3wNemrwg46UBrjAce2D2kinYR32e9wK6mjdGG26iaGipvE51XfZBW3qN87nWK",
  "key16": "2V8g5M9ECckWQjBErQJetbsHfGYxng1Cw18PmtRJyiVok8SdKVaFaKK6cFwF1CMqXNY798NG6LREEFEQpHL6cf4k",
  "key17": "44jBBrmddx8aVGwdWRvxZXKsJW8sCjgauCFYTDLpoRxGPktv74fgR5nv6RSnEv6Sk5xy4WGEyj4XymmkDCDBNSJu",
  "key18": "43tMMK9AL9JcbT4RQBePuLoW2W2JVq9sHw3bdxzt7ZvU4nGwjR7XRgJ6U5ydx82Q7Huv3ZBkAHFjfjvBrAjbz4Gb",
  "key19": "3PM4NnkgwVhnNb8KTwVUKL85qQ796heVeaanScAXzsVKZjMJ3DFqG6iiTmGoGh1fh87iNajvwVaKDGvw5RGk2Gaj",
  "key20": "2KUPrZGui77yCaPhjKDWX99853XtkprYcypkzT6XGqPd2EybR7JGCRj2SerpAzStVpZpAT3ehyHZCQHehCdKuYM1",
  "key21": "2qPk2Gcsy4X2VXwgF6NJVhicuAoh1RZNaHpUqQRBY5bYvJo7e5xS48RyFEQBUtbC4m26nojpwyV785WV4pufcrgy",
  "key22": "3yHcBZQpb5fBFpFRpYyiQXsCEiJWmhz4eqUugjTWRfNGDSisEo1CFapobt2kwX89shxHyeBYKbwHrQv16Q78dpY4",
  "key23": "m6Zits4viKG4Njo3aYDX52BxEaUC86253RvsBvs57Ljm7KPfcHEajzU4i9jPaQ987ztTzKfdNChZpzUKYEqHaLT",
  "key24": "2Xv2GvhdUMXNjS9SqZH9dGrr5rmnPe4nsBMSithELen1scyVfaheWjeLJsJ2gJSabaTzhyRGDfsSanJDdNVEDz8m",
  "key25": "4YSSKY4D7Z2nDcduWabQswaDspgZ8SPPBQ43HxaJiCGq3BVo1VAnK7QKeNx8jM6EcyHwtz3TAvaKf5FpktLqTgDk",
  "key26": "66k233njahTkZN65imw3isugiTxR1gdC2pKSr2eMPr86rvW2soXQA11HrZNr31fVHKMeJMvSXNAV1PzP3gFfyNcY",
  "key27": "4mwYKYG2U6vZcKbFNBkL26XR1yXhCad81ihpDwDd169ZefewUrGTbVp2aVHQjeHQMisjPrm61SvjwwDsZVnSUrFx",
  "key28": "4VEfJMBQ4wumP6s13kM1YVaWPdoFhzHCJKC6JsvKAAHEFsmdLxNgLCVK4vC9pHYLCpSxYfqsGNGyW1xve7T7FfAm",
  "key29": "5pDJmkDY5tjrTjzmiW9sa1aujVn68AcfMkHx2nB3C5kRVVevMsiRzTTW21TkEnVktAxiw48FrrUKw7WwMtJyEVUy",
  "key30": "4K86map8nDVShjWnByT7DHvi16DkPzEp9tyyBnY7tHgqirXxpWt1rZQQgpAf5uM82cSnxyV5oCFk5YBHtPE8kxMP",
  "key31": "2nqP921bzLrDxyELNgLNYXtPj2ntBNGsVQPXfUcjuXiTiQrr55msEGmJJBDpZQ5vEeQJ26Aat8APV6JJtt4Yrb9N",
  "key32": "2QvHbVpAvB9uLM6XBD39hZhK6aLkv4XXV9tt3WN3EoyjckE24AAqg7wUusqe8QKThwyDqEmpe8B5DbDezRSBT9RA",
  "key33": "z2MsqnwHEBVnZXcAVTZVFVcg9d6zi6drCTW7jhAd87GKcXip15fpgxHfeoeH4aYrG4bp7o9EVNiPKLcQToG6e9k",
  "key34": "4GaZuLGxP6a1QNQVd2B7f3xT34phBgEN6KqnuZ5hj21vfunchoEosTn6Mq1Bi3BU6Bf2HEVebTFCDPoc2oQQ5w1w",
  "key35": "5HZo6ppSEjGTHW6vCcNQi6eTUPFs1oFW6ZhwXDzY1bBGA1eBTf8zA3APgWC17D6p1Kyqkp5rP2d8XYyVLLVrJHKB",
  "key36": "3MCRaCBb27127eS3yqwAs6kiVmeuqz1qAdtVj69tvXbipvnkvBD51kWqkD9PCwFinJkUsgqNYADxTiBW2GqpjzRi"
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
