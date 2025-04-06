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
    "4WAKRxQp2QzGEcnPKwNuPW7F2UurqqTCXvJZS8DeTFz4cohwgoyPCxm4bWssyq3i8hMtMoC8YPmm8ZoNNr2x8ant"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t5Wp9oJGB9V9ozxyPkbTvbBgHS9Ks7Jt8ePQTyfepPSLjsunTUm2GABp3u8QC1MNA8QJ77e1Ev88WfDAuePxxiL",
  "key1": "C5nZ1BJhv1fDCFU1DWMpVfXPoH1odfu6EqxR7ZKWEVUMC7SAQj3njpLKW8K9irWy5NHLy68zhjVd7SG8jHgH9hV",
  "key2": "JWZKH7sQ7RuGcsZiSBGLhgErzyXJ5XSo5MBuwoxeGqSz7C9Ap9JbKWyb1fb3csWyVBKh92XGkBp32kNuE3eCaAu",
  "key3": "2pfGHne1JKg1v4MkDYc5Hz6LGiiib8PvN2SZAWP4mzT5qtMyZnL86f7FvKXuQAKkpyPaYdsY6iNig59Phb2aXTa8",
  "key4": "584uinYs93ygNHPCs5qVq8a7opQ5zNXm86SEPgtNmA5uAFCV2gT6uGvUGayMZB4z6HDBUcYN7yHPBdaXLYThgH3M",
  "key5": "5YAefwPxR36ZuckvrZzwE8Lyfx8umQgbnrhC7XRR3B6eS39MWMnn3S4wQYfirCPPmWMxPsPrfD9T8ezjTufcrPsd",
  "key6": "48WSonYrRw5eV4DwNrwLQ4mWPVvYpPmjH2AvVydW23itBXqizEJHZWGGbRkw6jJf5TeVUe4X4ihy6iYjr4FR9pXa",
  "key7": "3PwkK9AwfLdpa3vzoyRWGjcNEsf4eudAmvwyijGdx57NW8mfdMwZbepvZNBJcU7a8XzCyYqv4bHeuD5PfNdEwaiP",
  "key8": "3VtgdbBW2TDaWxmeF1yvrzDfA7hNUx6KBYN41PFLXKtDNKT5EQWddJAF2t18AtLyGCqTWW7xqoAA14R7WDXm3jAR",
  "key9": "iCh1fNLTXCKyoL8fWxThsjjF9tPpWYCiYryxgQufZk2WYXd6BVuoi2byDUngEYonbaDy8AwDLA4FBkQVcK1Xqt9",
  "key10": "5FeDKL3Ztbwm5MizKFMLQiWLbcR4bZGZ2nmo2sZRon2pnoBF4H12iSzB58TXvuxP4A3CXgRaqReLAKvMQwHKWJ5y",
  "key11": "PxmXDLzid1MLJdnxahAAJtbiphoZ76DLLmvvdwyL2Awe8Q5V53mrviSJ5QU62SpYepbs5FSqbzsbMFVuXQzSxEj",
  "key12": "5FSPErogYmLHXSF6wittaXGVsXWDGyW6Uk8ifkscFbd1t1ahKXAysguXSgdNwXwzDMcoy8XF2BW9sa7mwPJVzCMD",
  "key13": "3Bo7rs39o45egfnYNTJHCcvMBAPoyoP9UVrc5FU61m95FCwhjdVAeSPW1SAD65GUb1oidtBTeUPDqvbu5pmpixLV",
  "key14": "S6qYoz7gUwgXvoFpZHnozrAiJNahvVA9sZENDmhKB6bdaM13MgfvftKSnsH7ApZWu7nUTJRreQ7vCetEYMab861",
  "key15": "4F4UsA8i9Ut7KfhDTxp1HSdFMP3ko7Dtmt5L1oyZEKTgJ7HLuASwpEDfzUeFZnK7mFvds9gnAaxiqjm4FptTdVtr",
  "key16": "3GnCCoaJ5wcd3ooqPYF1MmEmPNn2oQFVtf2H9ZGA4XfPZqFrakmtTdEakH8rUWrzsdJK99i1osNDoEbzdBSiZSHA",
  "key17": "4VmHwJ2EUg5Q56ZzcUSpSbdh3SMjtVP9yoFZbdLiMNeUAASZAt6eDUjojGL2wZsgH3EpcMwdYTcueUQ2JmBhyg9d",
  "key18": "3UBzbePi1PEt8jyCPqTvYSqkvBJ8JiZhgkZqnccxtHvjX2soySKHPAUvq6xJLQu6wGQG3r8toVWnytN9mytrv8kN",
  "key19": "2w9eCjThSYRJJ1fBTWDGfAKp9mDW2rbVCfEY53FyeZvdwdHrfGPkjUEsfAid1iN6JqJcxGpc8bYhcv2Aj4PKBDVN",
  "key20": "1G3WLGaDoPCr82xCrwk3ASA8U8RLHwvdFPZMUMEeiZptXEDwaptxNZz3NAbGrWgbkryy46cfyXjDJNeHfuv9d1X",
  "key21": "4rfg9D5KpYz1Sk9gTMoM7NAdaDANU7yTfRjiPoKxepQoCFV9w3gJQPHyitHwMYGUyX72Bhs1dvyKD55Lx3iLKNw4",
  "key22": "4tYeGLjGgqUhKKvHWnsbJJ8ckm1wZkE4aweVkL8yhBiYt8xRsCUoRotGx4M2TurdGgFeEEETTWuBFbj2b5L3FmPY",
  "key23": "5fA2jhce7H9k8hVex6Gs4hXFErfL2LKUpyeAwGAiFARH5aK8krSRJ8G7mQugexpPvxz1XeidQCAe1gkvwcZnxwaQ",
  "key24": "3u4F92uA9eBomDi3d4U4r39kL2Fvr7fy97ZEbvpoth47Vyz2x6h5sZ4GCzMAiKzbP6AGzZypbS2GjBPNsHACGKS4",
  "key25": "2EhrxuyjMw679YSq44vDdSVE7LKbGHajtnunaqMv3DaiAju4SvomEihb4NEdsrzjK45N77g4PFmACQDFV7ZQeq16",
  "key26": "61dYpo4b28c7juRZw2WpdMW8ecKVrXNok6JSNv1C5UK9Jr85wU8aYewwQeEHoQJwDxnVsj5UNs9Gy4qFqP2UFxko",
  "key27": "3DePnpUtZ4rHBHuKKMrZ83vi96cLQsf3MVJBk6WPJp52nsvW4xZMAnuZ5XvZp54ursxyDiNqhZZATGR52s1FzaGk",
  "key28": "3ZEHKpd91PKXYboh1qxbNkkYPGj2N5LiLuUgcWZgFYmZ8yRD77LQXtf46jKk7ugEVuybbu6nBNR22zn9h3ERHR2q",
  "key29": "4AuPjoawmErpj4B5v6TVTmKkK4dKobsNyN1AL7vSE5NwEzAfGb7gMmaFAWQ6MVRVSUCbi6sisSab9s5BJsgKwDqC",
  "key30": "47D5dRjPc3sXxuGUk7sDvBtnD6jqJV5rANGNxrQgpipvaatqGZfhkwRUBuqQTmk9AVk7E1omf5Zc3fDmAz4xeFXe",
  "key31": "3jghu8YF4MhR8VsCKqZYfWRKc4QKP5Mz8JS6N2nSeSuWuzWE7RJDSRfrVd5qgmonWDPi1iHF2vnqqTqJRdPabj2P",
  "key32": "hY5x2mmNK42AAHxFQ5azGZ6GxxsZzmiF36Ds9Kdc939HKdKU7Ze6BScKSr8Y4jpZNhQbCw9KBvRFw2SdReCm1ub",
  "key33": "32w16VVX2mGSe83fFNKTfoqBKj5xNT1sQN3qSBrVVMvhax7RT1MLFAJA2rFT6YgarCZ9iqmcVYXVZzAKDtSkP186",
  "key34": "2gvPZeCz9HTDKyw7yWDF9Q9UbuskzH6nHNqJdeP9aYoeKDDW1h9Awr7RtUkGhDHmtCTBUxfsckgke1SVJ6YpqgMx",
  "key35": "HaTYiXrPjktsz4tpvdtuNGHAdN7xkf7XVBWCh9EKvMqnAcz7EuGuxJxZdH2CLYkow58ijzPDQMdeCg3nLYtaKzm",
  "key36": "4fdDLwtNDtnrkzXHXn217AurZRDEHXrUXHGSSarAGSKgJNXmhEZPPDiSSddPgyzacD4RnkpC5W2cvcJRfUXWtBMZ",
  "key37": "3L7D8JyNTafeo4dq5F2xqVM6rV4jAXg8sNy58ukzH3HFxi3LhgmzDe1xSfAGdZBW6aCJb89qQ5o24dxDRJusKahd",
  "key38": "3wyapMXFeRBWzvkDhbkrzKDNp6o8P4LzRffCRytgCDTWTZnF6g5RYTfWW5aAbeh7Fij1vvQdLNjr3ZUJofRaQ94x"
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
