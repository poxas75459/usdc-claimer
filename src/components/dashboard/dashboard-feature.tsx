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
    "3TrZp9W7LdHTree8SEvqD8Y2mQpYSMRQN1n7dCAovohkPL5Na5HQGPtoGQPEkCxzPZMUhVvMYNcBrocZSFBsqgas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SvQNa7DG2rqw5aZPWvkX7MJXHjjYLYJukCfioqaegaJpRF9pCSeV4jyPVJAUM2BvTeYGojtwFkTQMwyWmrgJWCB",
  "key1": "2ZnEgBPRJxnYkMvHYKMV1j3U1Tk9sJFmQ977dzzYqbBoBfstab4Pfo26fGLNHKXHMdjaAV5EWuJhsi3hKVcbqXm8",
  "key2": "58ugtzExv49HdFK7gL6DdovYAA2FbExASotDVKAdrAHzFR4o5Ai9NXe2W9HThrPSVuytg8PVhGPGrYquDGM8Xkrd",
  "key3": "35d8AzoDadXz18LSSWrNbmsGe639FKjb6rtynnAk7BZthMsiS1kvXF5DwYjG6CJmiS149QZhFBamqVeEfTqEZms1",
  "key4": "32PaQ5x2TPVKATVbLvp4vnCRDeSqkEtuPiQmNpwecAE1TWzmGWhaofJ1oV761jqf9SNocx98E2SYCtha1gon1h8u",
  "key5": "42PuXWSsJbxFcwJFbV23ssV3ChhjQ4yhjNTHYEwuzp6fYfaN6kGpmQipk16oyPiDD9RcXk6wSMttSRjb1SXGzeyQ",
  "key6": "2yJgi1KoAekfedF328gjUB4157DHCTpgzyeoeqAABLXDWbiz38xDiT4FFXnCfK3QbM1rShijDDtxgVNxrCYvKPVa",
  "key7": "29jZnepA3B9L8jwuC6dGsaHgbiNgoE71LntLo91gPdrXAooxmEZBDHPJtJSM76HFt8mx18XXQnd7TzacYqPFmY5w",
  "key8": "5NLMprAqx6sS7ipX9Y7CeJzt8ZeJu8725f5fmftKG9ScDfhzQeW2mvQrWiYHFy2P5euZzxwtYVHH6bvjv2nX1M7S",
  "key9": "djZ6dbozCBjEbySfewoPkq6D5XkDoQQESFiEH8uHbWkoMkVFmgKHPuGB2qJkwozAqbkYp9oS7T5MXD4Ju44mPKT",
  "key10": "TLmsi8NNBjJeahR6bA7xoj65TjzpYBB5mJJp2FB3S5JxAVf5obgFordpqiWv2QkYZxwRgWzRKD6psk5JGXuNkxG",
  "key11": "qmJYzLP4tMGxDuJgc1sSDB3tKN8m3oXDNCtWcZeb2s7N5m9eiPmdHds3kaKYNW2cm7t5TukUUjEQMsS5RHjZxBw",
  "key12": "2vhtX7rP8wtyrAd2nCxGFb34HgHRZQcA5o31ugvg2GobBFpLJmro88QuyvpJbsLPZxEDE13XhEYRMymvdM9zsFYQ",
  "key13": "35KAsF6xUoqfAYTPafz22iZsUypHpNfrM3m1PX3bdi2RSN5ezLPzinXQPnweUFwig9CWNHXpsTuB2kZYQ8QyoJYT",
  "key14": "YNmPp1MrxVs3CgTNP38hffxMHdXxVcCcGWapEWtKYirZHmnhSvWxegE1P4knDzbSdmUm4eVCS4cMZxoo1RCJAuc",
  "key15": "67EJL2vt5H9nUE3SMkEXZE9jc4nJLQDu3KNXDbHh7gxDrGPFDJgWCVcD5hSq9GbZGjhUW9M3nrCsui2rr8VgMMy4",
  "key16": "2coj5Ug6FXvXEfuEmKa2Ht6mKjC5A9hQsqMfCL1mdZRWigfXxfHLqD3rPudjD7e2FNKjiKe4wo7vzjYnfSPuwRFo",
  "key17": "2YdrW3FLzqci5oP3VAEjr1oSWV387eb1sdeHuNVGncoHNDsLHqHwAZ9TgUhkYeBzrtGA3rgoeqybz8fA5Ukuj127",
  "key18": "5TYQE42ANJwHX643KAsMWgYF4s4hcevbvpzHxkAKGmoVFfhFXsfRe2g1wxywQdngLV5NLQNXL37aL4EdGNJvG1ha",
  "key19": "2xvR4A7M93Q7Qd2TvzkGfQ5eCsEXhVCxGvj6eRvq4ryJy3tZR6cRLnbZ78FyLTEFq1JaU9bFHE563LDRZTwTAtCN",
  "key20": "2R2xTC6wCiHyZKu24bfhtHv5CotJkYQn1AJ5L3ehnvLahZoA5ubyBzYwns8rYE8mfveaTwTrt25GHuLjJ7ZirBwk",
  "key21": "FFs2Yp7bsBi2zrGUMJKYecds8z1TLhn9iqFGjdDZKHyVTH1mMJLZNZq7M76DB8A3iVJfAqwEkKdueEPhw15mK4D",
  "key22": "wbR9xX2nn9w5RsZ7UjyHbh187Leb1SfoGRfFhGW4692h6SEmYxtVRzoYKUvLN7XBDTJYLuJ9Yqrbtopj9GzzMny",
  "key23": "4NSyo96eEvuPQfwEACDuUQb3jtNzVpkbxuVCd3mqYFX5u5BMjHhP9yAUHRkGZTAsA2V6xXjH65M2atQe4ecHkZVZ",
  "key24": "5FcZ3a4dTCpAXQXN2M1EsfaQ85D3W51FGBMy7jX8kQzXf1vQTEBsiFkqSWbF8o9aRPZfZdfQqqnFqpaZkFniVWSR",
  "key25": "5VPmiNsD8pFnxvtwRAdck95AnoVeZjxrWYyH6pfopCRmyvnjpAjB7PbdAQBPWgc2LxxvH7aKMGTKyvCudYhQkMVG",
  "key26": "4KogXqb9zbFpStoZpwcxRQdx2CXyk9rqwFFXXncrKm5zokJuEuQYLYga2HB1KoL2MBxrxqNgiPwgHvGu7aLudY9p",
  "key27": "sH1XPBPDVWv5UeVvaXdj4eakkfrkGSzwifFpzHwg69T6uZC6sdJrQQ3YFEAF3qw8B4eCsh4APgRw4wNLBj41btY",
  "key28": "MqAo7CzTeCdbKTeAkhpEFwgRrFWSjGFZ35268Ja7CtoF5F4k6SY5bPUpDDdvLhPTvWhHrNeUuVpB27WAZgV22cw",
  "key29": "48D9oHMLFcSswjkj1QrvqQaxSKt66KDGUWytDDxDYgQ3W2KiarMqnwemJsZYnt9CMuRWejdGtDFs165diN4zgv3C",
  "key30": "3L3mWdsHpGQng7EwXvowC6uc6U3B4NTH8VFbUcZk8hyHq7SNr7s5uZmxh3p6sgEJ6ymWAnC7nwsSmZ1N1U4YDrJG",
  "key31": "5vCGvq5y5XtvnHUxjTLQNvjCBvU1Tf5bBtNfpf6gXdh2G5b9dWpkkL9aeUhFSqkYRFUwJawxdgZJrxYGjWDQYcFu",
  "key32": "4cdmyrxdpJLoPvff4Mw5U6umu91a6MDEo26r7ww7Mzki5ZVTio4wVerXffFb3TL9yVNrTR5bXkNSth2xQRB1hHE2",
  "key33": "24q6uhdvehzQzsX74oErJEzFbRGYqYaudNPhutN5VSseQjzHxMAXvxhwmRTdPtpxycBkPFcrkk3dFDNe7GmQvNRG",
  "key34": "Zoouhj2sCpfEhHWcJyjbGM2bxRDipBTiRQtPUfcQr7wYuGDjWzHAgvovoe7broyoTbyCAusFXfTEMx6PyfkLnKm",
  "key35": "BRq6WRMmL3gbhRUEJv13ZjVH2jndpKZsTNJN6tpae3rco1CbZkHioJRgzctoo4kpUFACUCDBbmk1SxmSf551NYQ",
  "key36": "3rbBWJcC4S3ygSZQwzwiXF7YmXENjZn2R4HEKbsq8PhZMo2EKUVv1Bk1iZnxAaJV3JX9kcpirDMD1GWkW7vBGTzt"
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
