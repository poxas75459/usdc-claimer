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
    "52PeXPFAVqaC4MhueYtdUP5ABcju6XQPz7GWCuT7APHHgfk7KEpyeTYk1FPNNGkyet94pe5mZVJ4uCd6JGixznUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AKrwZ7gLfhQsfYQphM1BG7X8MGDdsmSN1BAkAdbVW9cSHMUa1wpqc6hPSW3VFhyYDfZkSdgYqLmEPxjsL58Qi1m",
  "key1": "4hX3yKsAb4f1RVZx6hVXaViU3hVgb96suW1Xu42UpojL4w8RDo4US6UckPf3ka9ueLZAz9SbNP2Fs27jpN8arEv1",
  "key2": "A1Tx7WmCkaYyY2YVqYDdAwb1ipbbbCHK4cJ9DafESNSygfxXZnu8wzVqz15MqzcEZrai5pFYD9r2LvJNCcy5ejw",
  "key3": "4r8D4xotBCWCwrb9A3WUDpHaHq4HU4yKwCSuELKq6iRSxqzB8iyFnVwYLugXgqapRGL9uyhYSe5jVRzFQuRRxP6F",
  "key4": "25eQNFKjnCAYQC31CNHNdUVS91fQpeqWLMK8t1QGnHvE7GwpTqpvFXKTQtdsLq4ET35KpBxr25MKnh9BkS8JupFe",
  "key5": "3qApzd9iEnMzTBUnJRLwYR9SNvVr4n6e2fTvtQUgo1uJWc5shBbiwXfzDJvfMNP47RWJqUTJEf7ehYPKvGNQT7RW",
  "key6": "3KM3G5yzLaTrJb78J3yMNy3cy7Ygnoqbf44B31zPhvg1RKqL22F2ND3kevaMAkGE8UpmKWhmYECvZAP6VZrYjwJ5",
  "key7": "5cLYq2RyfPmqJKFkfZNcbY2NoXDkrxVjYFgNzbg6EaLZx1ud5XVnAzv3r7ANG69tr9RaAGQ4LwkFCoys7UbEqy44",
  "key8": "54EWqkM3W1igWua5X1jN9kEeVXH4HuFV53cfp3SWj8YAbkAAiUMQo59UPrqQdMTHgr8DvTGiUJzJMN6nUA3PbmxE",
  "key9": "4hBTiQedgKBnWTsrSDP7fYZ3PJs6Nb8aLcbfwuXS244N33uqwSaQAGycbWtKRFjFGC9BMRbJFzR4oKK9kqxNr7K6",
  "key10": "2dp5THApeCKb5HEnEip92SUcXELNuS4bUzkdp7qQf4RASbmxDzA1cvBkatJaenLNq4yBTATy8pxeSrkXDrxyyuux",
  "key11": "BM5JEsa2osExUzZhNpAicNAJ2gFYV76HMAXzhfVfYXLamrdH2F3xr6RCLmM8NyW2Mv2zTS9EDXGXE9287f3s2py",
  "key12": "3J1rArpXnwiAoB3tVSLEtfoK1ojT8Fee9xcpB4GzaaHxGAsii3cuwWiJeJmWzyTf77KKh2dJJCcAaAyiNTHQ283r",
  "key13": "3t11R2FjHbyzBJTGSMM1SE5bWWYYZ1CvZNjM1LgYZew9fqReixz4dx9kW3CfVSMGt9suyEVtxxEUrRrVCeKxcBwo",
  "key14": "BwDVnCF339A5TGAdQGzUGy8GnPJdo6LaFc5b5UbGeSJ1p1D9VNwm7ekLftorWsXivXpcMEbxSibkLsGSVdkyZJi",
  "key15": "66D67pv1yyXJ7zVajn6dGd5v1wbbXKEfqWshnw8vFArdBnFi5p5a4PYVMqEYApw7K84DAqqMqYDvFsVs9Z9NA7KH",
  "key16": "414JxvaoSBEzGFAWGYyyRFkE95P1g2P2N9dig6Gv1sv9SCRxYb6pESAys4TEogNusGeoLwxiS9AaBYeWAsN82etp",
  "key17": "3zWyrJV5Yn6LGr3sHY6XB7w4VhUdsg9sVAqHUTokSWL1VzW7TfQoPCxT8CwvMeTBDgUnriF5F2E1DxV1qnXVUPxB",
  "key18": "125r4JGXZt7NiXuGHBE9E6wga8tVFnES4ddx8eCCf5oEQfQmEUXuXNHKbC2xLC28EjAtWE2HvmvNZg5CRt2L6PfH",
  "key19": "4oZ2ypb24fYTT2f9pGtvNoQmNutkTDNDHV292aEBdjFLacYkZQmry55yUM3jBXhMgCvefFnGJW4tR7UpmjbbZbtZ",
  "key20": "2cyPkXKQUDi8YA9KhT9yttCSuPLg7m3CJt9x2qnfjZccvf1WmwzyUwoSDvQhRyiha6maRkKh8qo4EaXhgAcqfUuD",
  "key21": "4Fagd9wVv6EvF3WwhNeujX6cFKgJPRYdWtiBPx44jGpmRYcs6exhe7SgazxZAvpXkT1s1qansC86yrRYvoFDnmnq",
  "key22": "3T9ePVkRLUVsD371WSQshmXa66yhePwntNqEHizYHm8mAmX1bm7vSKSQRL8UQY9SDczaMTTuUdnY8ak34KpQFD4T",
  "key23": "655Rqdc7nZtaxHcSWTCGitUPZfVdtfKMgECQNocCZXAf1EMFCahAURfubWuVvAWX7r4AX8yHGnFkuubtx6F8B9Z2",
  "key24": "3twztBaQG1gSqLcQ96Zx2m8wBW45rvRoQNLjL51pXcnX7EF798smt8d8B3xwGSiCdszgTMpwTtvCqHzveLq2rG8",
  "key25": "2zXKBTbDnLkvM1DPoSsDWJDrCrLuDK2wfBswLFuscAXgG7Bc34yZfBgTbGAd1aJGmLc56NJgFgkoubaEMrpk1yxz",
  "key26": "2Dz4Ty84YKn5PxyXNGvEWLzwNqz92PZiGygtLndjYFC7ZxRiR7eiUqf4g7ALaWYQMYSisFtUT7hi6UmCQ6PFABKx",
  "key27": "5GHtXGDdYvLZtJBGyKU6S9iSmHV55wZenncG9JSxyk7gdDtwd9bjfSsnMgkNQZP9exSnHeszj4ZrZjcgnhMFLnRY",
  "key28": "2seRJk5MJm8QTtvfxMYBjqizbmnr7DzdMJHLFL5mU5UcN2LDntb9i8MUa9wXhS1vpSVaeN6d4hZF3UYTekdxYY8t",
  "key29": "5vMjNZqsU2d5dancMuC7htNXE99zAtSi3h3Hai31XSLnc9hfv54NaCGp2LppWVKya8VNwQgcBkZc7NK3bxfPCUnn"
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
