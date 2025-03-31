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
    "4NiivdGRYncewHyEuG2RkbSEWKiRFh1cx3oXSoqj5JxMebcfjMD33zTnNyshKhm7Hd7NsZ9Cv4uChHCnvj7NgKWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8tS5qfLnqdsYBnHw7UBU27RojaRnxSRsDwzJbXB2uZe8iAWLu7b6bwZddnpD2cxsHV96tpQig1th14cZkiaeEA",
  "key1": "3eYndYNMhptUstkNFhxeit2suKrDPumHXob6XzLqRvvzgAycm3bEV2z1of24AnKjutzqw14982uRsMmZodEkepQE",
  "key2": "5iKkEgLB2z66ft8B1CSYqrEVnvXZzaXEN2zHddjXuDUmZARt38jpLrcQtaGV35VNkkmvNP54Eypw1dBZEqp6eyNQ",
  "key3": "5b7tnAuGxPp5U7LTr6Cg817w9y1gKJ1ye1qxAXFQUxPjaAmXgSyD3VSz7FHjKV7sSrgkbTbhugQucx9MwwFJ7p1f",
  "key4": "f95fMzSk13w9i9j1UC3B44axP9LU2SnnQuTk91vpqBEkBpC5JGkvbxBkqj2X8QSqJiJbuqEJvsiwqTgFzM7R7fu",
  "key5": "w4Dmz2Jr2nqBQzZtGZEvvAJENFoVtLsYPj4Niti5d1QjwaZPyFrHudDiJvwHcBmbcsiY8ftZfRKXv7y5RkpJVz7",
  "key6": "AANQuivgkPFGcSKpLrJWxBLcDPgizWeaV7buuvt7ALrcG79fd2KfWDUZe3LivD7yegLpaPWs2bnKk2LcjVvFm5K",
  "key7": "5Wc8CAhcAB7yd6eBnqCZEmThJAeyQGcPkYSFzfFa55ZVJqR4Q7hUkAoQmZyMEi3uxEGrJrDLUY9BDUmKiMqotQ7Q",
  "key8": "54g3XALrytBG7rqFfGzDrzcDjDU3jCYbCytDzFaGUh6KqjF5TaYhf79TY57jvTS3ticT3xMzU9PioKozYAUJUWzq",
  "key9": "532sfYyzsWVZxcLkTSCZhf1SeP5Hgby1M54FVjkqryMJ2EWEmPckvgj769vwf7TQu88HzDiLjjKyHWWxd97p8orX",
  "key10": "4h3ynXW3acbAxhchhJkTxy5Y8pK6n6UunmkFUTh6657EjHWbH9ArKkQiinkcZFFbWV95rVbQHMeTd7UigR2hBZTF",
  "key11": "5m1Rv5XoKt9rdEh3eCWLkdg4geX6p89urjm1RPgXMYH4FXVqmFGw6T3Q22h8pSDLmGkdAWqLnvM19CYDtok68tT2",
  "key12": "4tEmnVoRncvHZD9RuhJvZE8FyVJRBWVydXkmQ7vqgcs5Pk8rgXMeVFJGzqqrsHtdwUbw1J3hQGuYtjJfYYiDGjKA",
  "key13": "5mif43okjHKwqJYnm4WUnSLGgkpQBg5wBFA329BgnRYxVKMUZokpuooVKrH3uN1QBjPKjBEijAMNemZqAb3ms3X7",
  "key14": "3ZFmv97cF5STNi5C7b3kthXPkUhejnVk7uNrBgWgL3qfwLBk7ve85PdCB3UCKndpVnykPFYJzkHFMEPKG4vUQ6XY",
  "key15": "5VZctjPyGAn4xfcKS49tVSQXYfSZ6jttphABgkF7SvFHwRBemzgYyA42XCMoNUtCvAje4S2qf4TSxs9VsKtmH1cW",
  "key16": "4z11jzz464HAQyT25uBwBMoVygmVmNxrDsn77dLTsMoi1XeW8dexHsWkWBCNVycUUu6sScVoKdmf4YwmS2ugyBmS",
  "key17": "nyZya9HSNxwdnCavPGaYKDP9kb7arBdN1W2wNsxtsohXg7KSFquxDBW3twhXfvrKsoFXinCLGkqLTkMjosY4as9",
  "key18": "5CGbchyzvS3Hx4nDr6XJCmeBWMpF2YFBSTAG6ayKZ8fNXPrkFFLtMUfddYtA5oe5JRUhvnC78vc1yvRUxLML8zbV",
  "key19": "3K3M1Q4AgQNEnaY5iip3au3cDCjoi9scqPBScRRNnkJL1SAacmF8uEhV24CE395QDzw6QaNk8gB46FY3D1UJsZti",
  "key20": "3W8bQsskyHnmjc1PzENgMbdhKULVBdUuq4YKMJ2i4gNCgQPvjQqdN4Kdw7eyu2xjRk3i9dLWhTu8MsmLdQrFxAMh",
  "key21": "NyLBqFaVkLHkU1TkbyxF6HksiihhY8v3AHjBcwKTx4sP5RNyxXPZgYcqHsxky5TZ4WiGnuGSiPqzUtReLopfK5u",
  "key22": "4gABeKKJGq1TEyGpBPTGE2xFksoAKVpNMbk3kN4wbWPHmXyfo4XUN56L5ABbABx2rJ6LLxSAKCbvW57BWromA11G",
  "key23": "UyhbYb7Wj9fftHfHYpqoacsihZeQRucqn4fweAHhFisnZp7L2QeV83Uso1XSV5MsZHQyZCV4zPViDWkdZQsqtuc",
  "key24": "34waqN5aU2eDgddvRnpqB2vk6NC36YN4LMqXcSMR4wggGLo1ZcNdhbF99o6GzrbBXm227dunTZumXMuDDt7KaDfQ",
  "key25": "5MH7WR7smRHjWsCXBUHvN7ZRMxEDfRJHcFydGEACJnppyMAqNcwAP7VEwBvzJMJo2ea1qN3k5iycCbFfcJhrLwCb",
  "key26": "3Vk8Fi243YELFhqbiofoTtR5MF4iKfAx8KaJJ9sT7KtQZVM8Fh3B6RJoiVjP72zTrJd3cqFFnMFuMmn6RUVocv9f",
  "key27": "2BtpYrSCz7RcJBU83mSdZhZrB6vD5a2g9YYQKDvr6DjbAw6xZeFwNEvHxY49JyQ4V4w2T9XTiU3ksx3FJHKT1pyw",
  "key28": "2TAmABBy4DvmsrjPtSY4PfC6ta4GswegiMQFazANFSSR2kmw6nNcK2tKBo9GZo4A4ya9EuH1Z6t8qg5BUxEVyMPz",
  "key29": "3NJ5EWQ1uzuyNyegN3U7S8E7cmDqgN9nMyb5pxLcCiesbHMAVRvUPCRaNzZmkMKaP6Jn6cPVyCidFqJ6HxuZE5kM",
  "key30": "5SX2rjZNUEc6PgepH8eHXf39ridY6UCjSWPdxPviv8gB7V4vJ1XTBm7CN7wWJVh1Co5SSRL9HmHqviBaq5JJya6",
  "key31": "4tK6PRd9kGYcB1V3x9toc5Q84iSJLmz5oER9pjKKZZvf2y1HqRgwmxGTrPqybuus3JbDCPod6tGCGFVnk5r3Y5Ra",
  "key32": "5vrB5qpcV96dd39WeCujrsffauXum3YE2ABQcdeh25SW9ohrtAhrZbjn2ipoznQyEVhriNEuqSnwHLeMP6xzN59n",
  "key33": "kdpxHW88RzUKhMhfZJXmz9GnhKqEnKuLfFiv128k7qsHRZPk1CbjXwWhfQZCC8QDAkQtJtPcUvt2op3wnntVvc2",
  "key34": "4PZ5pKU5eAtHfvpUCe7nhM8K1TmAaSmySEdrd22RAT4FezWem9nbF8EoP32mheGNkpDH8ZVXVtbH6zejHV3DyUta",
  "key35": "58CnuYmgviWUGMx6AZBh4QenRh9rCJzu9FNJcJTbfGtJdVzpnxFyfBKvde7krhwYx7DP4ufD61ESxpphMj3NedBH",
  "key36": "4ic3JMvzZtDFwwm5K9ebvWpQ1qbvjhozoCh39JyeVqCxvd5hvh3RrUjAht1B9HF8peHTMwK2Mqc7mrxNtP63KdUf",
  "key37": "24emx7qB13ksSPdBUyJATBhCwoeS3oDGL1SyBoXELFKj7yPUgh49sV4XQ9byncCJHz3K91nFznBS8bdaKoEeQ5vp",
  "key38": "5Gst7gSGCWPMjsk6Pc35HbzPL5TFgAe7xTKHPJULKwrR6eT23FJLGMF1QqQTKnAN6inc5EuXm9rJ5ZaeJcRhqZ1a",
  "key39": "35JfNNLX4hTYR8jhAtG9MkGGTUo8ymDYwoLYbfc2cF2dbdLAm1n4SRjZ6mSaXC1jTRdg2kmQwPZkv8KA7CRzeqhU",
  "key40": "3ZEteC5MwLkDHbJmYQNEajAgJa98ZqRWvDcaCv5oej2YBtCxBX1HLk2rPg4dLvLFvV4tDLAeNayxNEazuSuZfxDW",
  "key41": "2R2WQ7XAhTCmzCkfeZ2Dah5Q5kRdjhMEnyVNa1edQPoFmA7sLzN3uSPLnoon6NCFxJocbjk15xtYextpqoGPvyCe"
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
