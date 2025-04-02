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
    "4rBiVd5nMVFXXoX14gb1RYytmEfqHjd9sBs94NbmVQGR9xvVaLGhJLKBgKfnM4myd8h1Qu7JRPkxYUR1QEVWAeFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BeZWau4JTXtgJh1Khym9cPf9fDyos8ZYAEA265kiVbSrpnnYhUwJuw9s6XVCvjCWpTdT7hY4uNkqecjMn5bsP5c",
  "key1": "3HMFwwFqWPW9EwkFdq2aWNjSgmSpLNGUoNGo4y7EyLFoRQiBVj1vquSs8ZBG21QXfg5wfznPwLeC6wLGwFg7iCCB",
  "key2": "PC3QbwEXxZUPikM9xdSPjVq9jy9sfJxZNP5dheQ5sLYpWL3R11dLGhcdcbABbSq6RX98Y7DbRw2sTeSTsSMcpUS",
  "key3": "5CciiCcTJnuqagYgkcfpaRr1CTHYaYX94fnba2134Xed7NWgZtzmxYB6xkRMHjg3dZcEdNTVPVz24AHJCJ5vfpTk",
  "key4": "4Jf8kAFaDh85u17ZzUGab7L8mn4oXueUvFvjBh2F4MfhBsAuXn3yXjz2pEVGHqrddABuEt592WvLjs9eDuWm6XTb",
  "key5": "5TG5N2DvUK6jeA4w2KpKinh6J8AZafVM2CffuF989WJWnWSZvpWQNtamEZXpxcHxpKKW7HEa5EYwbAi9yuz4nB8s",
  "key6": "E3sasc39tpsaLbD27sKP8g59TV8HMga3txDrBfeqVoEzEz8u7yw47rXKZC7iEDNkRijoAg8mAQNdaNe4g8WKPX8",
  "key7": "5ToHXiXE5e5S5J4Vdvd72pdEsDNNAVbYnXffionoKTdaRBKnJp69HMvqFcJociWEd578HM4vqi2FLzfHEnYnH8MS",
  "key8": "5nQAjGyPzJL4921HhDSCZ8E6SB4G25uUtfPf6xYMwzMZDznTv24bxb5qhm89jDGW2oqCqPM9Mfamzx3QfWFo5h53",
  "key9": "65etDtmFhuEKwFNKS1UQXtajMVvmGperJn5RawdfSUEAEszxnYnsJr4f8uo56qJmNg91RKrheJo7Y12Uk8p77PGA",
  "key10": "2gj3dfmK4dnpcS1moVGtyppLKXcpsbjDhGsgStmW2avyX4yowHPCxbmLNVB916A8goEQwDsHHVSL38XgXM3dqbrJ",
  "key11": "25jRUFeUxnL3aPbXGSaNubQr4qwpwkRkePTcKH8vtpnjxrmJT73UEZybqzS7Y9x2C9UYcpiV55MEdp9zKWaCB1U8",
  "key12": "64Xz6vC2k1x9MUehpca8dqp8QnGaokbqainpzbE2ev51PAuRzcSSQ3RteffSHFkzgS32GczkiGZ6Hf9LGjkNtX93",
  "key13": "3QiTkMK5G15sgfgAVsLtY19f8C6KW1mvtJsnUoSVPTsFTQQ8rN4aKwHGKntDkhekamGxhbAiTMvwbLyQBS8GD6CF",
  "key14": "5q8XjjWhFQi7hAzey5W61gqe4gVnuDd3bd3rW6RkUDtV3MW2AVmgbv4qASBFAsjSq2EXqvKzyEvkZgtw8hTSny91",
  "key15": "5uvSnq1Tg7CxNCy7XViDqSs8NQyaCqMLa6kSL72k8oLpEdaJZiRykRRF1r6JFuyirFyirPE2vW8CFifTJwCF1HX4",
  "key16": "376wePmazWNrGHGMXS6Q2EbrshEjgkK46DDJ1MdiwQ3Dm39Xaug749gzbTP5w5F5UCgzfiZUYSTgWiwMWoLHY4or",
  "key17": "4bjEWGobmD8iQGHT65ao22SMgpmdLYs4VmxoUmyLJGBm73CccUAyeMrpVa74nSvnXjFszfTztfcHuDHcdhQmes11",
  "key18": "4hw2iTgk4oHgKS1TWyFvYUjVUR1ooJqourRgzN6zC52yeVNZ58jD7BuV3rC9goJacoBL9ihTfK5LX5SJY6mCXvXi",
  "key19": "5qwyLjr9ai11mWcs91HcZ19NNhfrXzdFpoBGfhTXDuFGxfuVBXYaqmZuEFxaxgbUrrG2mkV9gwAnFBqZP3axsR1S",
  "key20": "64c3bYDa2GbpD8yXmLTCE4Uxq9bfn7mQaHGq4wtcJx4cYCUQyvVe6r8qzw1VzxGRPVzyqVtB1B7pFzw2Xch9gXgo",
  "key21": "63DN1x9pCwygRd8dW2saPU5YNKjX66yVEBCZMZs6DwUToy3drM82Uf8xYagp344rcMbANgMsMaCcZzQ7g4b3HCXN",
  "key22": "31KM3o3rAuLh4fhDX8PWQkaSSCFLRR8yqRA15FVzbsBDqoPYkChfcX4QnCay9GdRhefEjiCSYvtEwiWhkmJGhx4N",
  "key23": "3cF96ZEtfeZAd2S7KbaDq7GVcFq4187Uu7gMCZtnWtc5iBVkLkRQGPi6ZzCvWiUM93SqfQQ5CAiv9SeKgzc2hvKq",
  "key24": "25n4c4JsBzviGC3hADCn6f93mujSjVisT2qAGpd8nsc3mYSujQuEhHmpuuaH8BVoK5obuPNZ3vf7ZBcuJewPTwa8",
  "key25": "3Z5cKXQBfsUMK1Xxa9zYAuRPLB8G1PdcY7UKUBPN9WrYQMcMLzadtQtYxBnPx3mkJUXrGSGDctmpMfvokq9xXAUz",
  "key26": "CnFFaqugMG83vgCKPgiNPcYe981xQmJdzd1cjpA4XKxVtNPt2t3YUwffWXSQ5TMNERLrDtZ7hq4o28z2X45vRSq",
  "key27": "34eKCwT9GvSAL6cezkMdRNhy9goHDUKkRNzntXMZWKadih58XGQwjWbAJkEMQZDjNGqPF3hkbjzZ1aPVdvGwzrYC",
  "key28": "4qNihTzCRQgysjWczxFCK8i9fzRg8Vs1BpvhzVJvkbG1avYUfSJUu1QEy3k8BSCkvmZEB6CW2zpkfjAwDaUNRX9n",
  "key29": "2hLg91rkHw3efwWgy6Y3BUFXsya3RRQG5ZQctZ1b7aC3tiNp6oiWGvHwfV7GycBwHcZbjoFqhATXTWEprqiWMFGQ",
  "key30": "5mKc7rJteBLC2eyCeq4BknjuHJ5m6Ayo7cw2W3F28hpD1czbvJ2cepL4EPH8zsXJ3Pkq2Lq1gYhUyX6BEzr69AAY",
  "key31": "JFoJw4nx3BP5mHTKaXYzjpXxRkNiV2TEeM6H3vNY7GspLJsW2YjeoWp6G5VRKmJmHuXerh1PYhsPgvNEziN1bFh",
  "key32": "3TnZybVyUidWxRL8eY2KXNWErUcfiasDrq28k2TBwF5zBWhSD5KTJWTgcVH7GhErGjPcBkRcGnhpaEFHmDDfn7A2",
  "key33": "exCEhHnuZSs9Enh6rZWut6FrhETsumEWwMJV2sNMmYRFtLQnvPf7mPVq78iyEiJ6eA34p1WNdSxxj2iNSA1EZ7S",
  "key34": "39svHkNuXZpZwnKg2MexBUdnqs5jWwhC5STUWvdyuBi3svUq2upShTnaVH8mXZGA6wBZkkjr5in1m9yEqAkQvwNc",
  "key35": "3BaTH14yUCRWbrUojKvJS973EjUJh8ffvpegtUauQGN8dBuHKPc5FoWzowqw2RM3wYTJUKR1fRVBVLwbKDGSD7yk",
  "key36": "4ExUDZdUZLZmkmAe4gkXH3BAkWQfopbp9vnikV3fJ4wjRk97XBoCdPJFufdYd5q9r6bxgyWMAbq5BVcEQjwGiJji",
  "key37": "5rE2uPH2dcG7ktj5LbALXqmbNXHXu8xksSQkRwsFSAQ3t1TdUVfsXW2NTSmk6436UDAuCHcgnf8raYb5u1raPY3a",
  "key38": "65AKKXsCRYdeDXBVHb3HSxp5B4qL5hZ91Wqp7ByEQQ8HBpiz1EpJJFQMVzf2yxvHbj3N6Br6BuHucrkDvcZnB65q",
  "key39": "5YaD1Xyk1HQMvvgLjDsLz45tXvE3kwfMyQ7rZL313DGStpZmYQE4Ys78yycum5guVn5Qtdjh2mBAfVggAjt4fvtP",
  "key40": "4WmDqidXNbzGo3iYJSPezJ9MmjviNuD7wgf7aCkoAqMLmLet4bsLkhkfRrzK4SiwnY6qsaGohsqCG4a8jgHzmVvW"
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
