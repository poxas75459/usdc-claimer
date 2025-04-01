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
    "VDzUwFz4bUYVvtp8ECFsLyw3RBVkGoP7EG2xbr79tgkAhhQ6mw63cSMHagSKYoQ4n53dHJkv212WvJ4e6Jyh2Rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kUDyLPJ6FDc1YbjnGUeVN4H3skKkX62LhpNgDXcTf81rxhGfur2Te8w1baBJS315WRzonBuRsb3jirKoRNhTV8d",
  "key1": "65gNUz7X9mgiuUYDo6jYDEwQwkZ7TKMEcz8R33KKtfXSkdfeUyz5t9Da94jrAe1b4DFdtUVPNb5yQMsmka8ZWdRr",
  "key2": "5bp99AQG89eHw4xU47cfGw1oAjuNmu1JgW8SsL3uL1upLi4F8uZfezCnmkBZ2SezGTJdzgAdzCRwtACu4SE2QNKi",
  "key3": "3Ri4bJ6nUioXcXGzMeUgW4zHrU1WNnDbDWXtA888QvDnLAtrUX2VEJanvKEK2aSTVoBoZRF6jWEK8wq2DZwwPgjk",
  "key4": "5oFxESKxGRfdR2MiFu4FGBBwjrM3pLD9n2h7DAhc5CSYYs1msqifbuWJDXLCqvAZ57YGs9KAUy9nEYH5xP1pvzgT",
  "key5": "3VGmHKRE2dDPNVEUM6E2LLFcv43wgQRVEuEaWEicQwFoyCvT2Tq9aLj1e1x3gZThtNwMs8hSZgGPEVf8UGNsUJuN",
  "key6": "3qdSajFisaGD1unTWFpF4dTfYipRjmVg81JZxJCjTyetA1DMet4r6EUWHgWHLv1vJJrTYxL4xhvi6tNf8pvhrDyU",
  "key7": "5hJsMdBvhixq7xVGFqPNsi66MmGS38ouLKjGE8H83BLK6NREEqqG1RVyQAXiDdnMPy5accME5RRWNqELQhWaGCFn",
  "key8": "34pqNdFCEwv5UNuCLg8j2UgJ35VPd7u9QNnRwvDMP3ysinvfqxs7kAbsdepePdbZ66RPJfeURbHhBpEhLzmrsxMq",
  "key9": "7o5F65B78y8QmhFc5bjvcUd4BjLhGMh3quKcsj8zcV4znc8dnodLvwVbPd5EMQCR1CRXcPj2tzASRdt4QNazxkE",
  "key10": "jBELUBojpVK6hpQjNoqc4ftihuq7rkhAaksWz7GyqjwbL7zSi6FHbTzKDj18Gj4Tw8QK46CDR9Aiy6Vfx4J4vWp",
  "key11": "ygYrb31tSmwQedzVWaDdbTbRQVDndP2gjH7WdzNEuAgfkzExpZf6caxS8wu5n6RvTY855CTZeouVhPQ8KJGURj8",
  "key12": "5yNH1y9nSCnU5UaoT2qjUVB4gK7FPEMQRHrC31sTzMLg9rsKMw4Z3wRnyUXBqeGH3kGV4SnpUf9GgPNAssHqShgH",
  "key13": "2RVSwdbWtLw2gigCoYHW1Z2bo56t8vPr2rYZr5Nh7eVMAkEURg7q2w2KgkS1SHQEskp5PkNwUWSyXFCvLTdu2Jj7",
  "key14": "T2a2i2dbMrmjtYx5Stmu33HJyHTukQ6MY7Q1QGuAYjzmHWxsbjaVwXxdpJAGMDznkCsh5voReUaWe3JQVdnE8Mj",
  "key15": "4VCgQnjzBbj6sygDfC1vRuHrEwoLfzqNJoUdxA4fDdgdMLQmeWqsd7hyy6KMLWpdh8tqdkejGTcXexKN7kEcqDsa",
  "key16": "5PgkwWYKx5P3PfTQfoBZpFabDjDpDU5qA64C7CrkehVwJ7yMkvsLDLUjcBQZ8QkQA9Ud2UR7U6HFcn8UoHEWXboj",
  "key17": "2oVE6cck2NLvwk3deFZ6L28mahz7nEjovwjivxjUUPkyFz4AGbhypkTahhN2TaKRb7Ke2YCEhHRNeoKHY6LACzg7",
  "key18": "43tm4Q6Q23oijkZzr58HNPiD7VzHPV745Ej89zovJ24mNnXHQn26t1LWzxjmtnVLmMJeyAeREr1oEh3X4QhHfrDf",
  "key19": "2GDxAMSXUGFTPqw2PCVabQk9bbBe4ggqd1j6MhoJCwqnGaqUiXZZcBYuWvNSDoLvsBdZvUp9MvUMX8nyXdt3APPb",
  "key20": "5bngsXFs6sbkiJ1KpZbdwntvXwkCeVHtfP9TubtVbeDnYjLFrnfwrNkyVc6stN7gQu1NJmY9VhQtvU8JyMmLCMCX",
  "key21": "35zwQDotwYRGpKQX84Uw3bJf49NvNFx9WHeMqMYyYZUySSvniLpF6Dby5EQ42Mf86ZnkLTfrHDh5EF66UiaCX6Ec",
  "key22": "4jcTdZTYLHhSyKN4FPbEqUXL5VbuYBVxT3fGkzC5grYSZYkySdDkRoRkuyNW5RiPERZFFpmE4wftNcuFZ3FrXjyd",
  "key23": "4jav7ZQM9ZCh9aSudf7utEdhUdPW4yVEQFy1VH1j843KZf7AHj3d1NTnpCyY6BP6T7Fs4uNQQxXyqfgCi6y5w25e",
  "key24": "338WXUHza27ZJq4p9w9c2n6ft8N8exDoEkFy1ssqGtjdG5ZrbdtrtfAkAwjjb1xZj67Eqq6m53YUVK2jaWf4kz3i",
  "key25": "2fpb3ApdTczeRVufHfBxVPjKaKgrrwVmmHHytxR2zDfXJgotMx13AuFwMJ5Vuq3bTNwCVJoKeMphJjL87EGDNJ2F",
  "key26": "UkCgg3uPVdqbYheaLYc5GkkkCWPJ2jqeS9TfFX9Wd7f5y1A6GXFScqhnw2F1CB4xgVJYRLZjbbvk1cTMRVgaGpr",
  "key27": "9fZ2tzHSr56BfUpELiG2rApahUmFrZxB15FspHfFDga4supFyadbhyZss84cYHNo7aoEJJPFPZQw7bmhmn1g41J",
  "key28": "4VWgfWrU8DkKsBUorUxSRXXzCJNd1ckweCQXiGAWTacDtS7nBmbYrfpnq8y9i4zCQHTGUckYjSjPpwLivTBMgAQb",
  "key29": "23U1r4e8HMeZ5c16yWPWBU3Ku6iruCtEAj21EtTJjGFqKFCRWJUesfxmT7WhoGAKM3ud9mRqnjV7BZAY6xFAoavP",
  "key30": "65i6SD4MumUXTYvPi9CWToQa8EcqY3SmDUURisWn4aC5tUdp1npC4ZxM7R4BDYMoQC9XDaZfu2D1YG1CbvBgUzCu",
  "key31": "f4umevJscET5EFDDyJzDqCTjfqEGMS4twDKfRWk1TVK1w7ccoxLoHzKWCLHHBxvw2ddEEgwjcbcz4wSSfLQ9rv7",
  "key32": "5SkK7Bw5keqxc5pKo42yWhyqayUe5uvsGHeSvqnjifz4vg59aZ3oJdk2S4JshdpmPRwVYQN1eJotvitLGjvuiVCT",
  "key33": "yzXKUX4DGk7juWFNAVPtTSsBRnvhYFXSVf8TYZC7AcXmdvnLJeRdmTkKeWdkNkHoP1b2ppTQ6WEQnHHzfwxjevV",
  "key34": "2Jsnj1zSmRSetK6jVXt441BdNPFJbEHQXhj68v6djKcg448zTT4tJLFesmtyPfyT7GE7M8cea1mUo1QMsbkLcpa1",
  "key35": "4Gb39bK2VMJ4Nu3PKHEReDKv9V9eBFewpNGh6Bz9LgbWys4RMDZyspHPhj4WqRVRQ4cyYNAcKQX5bqwh1mGV5i5V",
  "key36": "2HU5eDi792qnSF6QScZXmAqwJjTh3Q2Kv8iZpe36zz2G7NtFg7hXJQC2UTr3Ta5Xjwr1xj8SogrwGsVUy13GxiKX",
  "key37": "4zrJryW6yCSqWBArtJVCKpGMenYUAArE8nbzshDp471UYgi348GusS72puABSi1eUqXwqwGtf9HByW4QysPSHw9r",
  "key38": "3rtMwXXZt1yBTCggb4PzFVmWvJ8fG8DYqdTX61ks7GWGW6iF6VaZFRtCq4AjDb6NQKd5QE6HjzGR9nEDkS9WCsQz",
  "key39": "2vC3uHGvXMEoWHSfYgiknNP2SPFkxcuqLWpKJRBzYV5q9U9fGT9qcZPyQQrb2HVC1WnorweDziTYdNvBByJurGYc"
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
