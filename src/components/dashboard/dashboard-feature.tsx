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
    "3BCSwt6RggzNKBNosRi6ipjhuo7r3VdJkbRd3VTPrmEZXo442dEx3DviheFxG9zeJwBG9jeNTgvKBugPkzCgHNab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Tbw27oaUbJty4EEEaSAqnE8Y3fWYcB4TJSNZoUYuHR8rrQpD5tXn3tQ7oU6TprmPfbS4cKztvw9A48UTB25kqq",
  "key1": "2PwfWi5e9VU5aUTSnDr9yEmuqDU6z4KnzYam7QGZbcWfGMXMMWMMz3JoUKgyk9pCmnFHGCPvpM7umF8g5URY63ok",
  "key2": "4NVSAcJhZBYmTuXWK9bHBBT8hqojufba2VCZGKXf2rAaZ1RHbjpksSdYdexhaq8bKkZotCEaUjNLy7Je4vwPto1J",
  "key3": "U8Ye4nfXQiVcCJUiT2WYk3MUSrtnhky1Yy3MksnfJahyXzc7RBGaUVTUnsnf7qx1Wdsk9hEHtTsCvb51f6XYMJ6",
  "key4": "jF9ENt9F8bE7WYK92E8kfGMemQjSKCAHzQpgPERTRVRUxaUAR5ehaUFtfMfhRh9iwtx3rQvFsiYGGDANM6gb2YN",
  "key5": "436CXdCNS6LTse9U8zvQHpLjjwecbKM3j8cze6LHxkB5DWnERw23YAJtTvZ1YMshu8g3iN7n7BbhGiV2Na9X7igG",
  "key6": "2FqRBbjdNafUPAZjLkwASqpgujFhiAM1Tf8v613YthbBZ8sKHZfxKfebJGyFfGTJxKMqpPFfTtZ1tNR7CoURFHLQ",
  "key7": "2HGtMHJfzcjFrc7kpvkHMk2DELhZdoiQoXP2JSEtigHorw7d49PvFbUZFh6r56cUkfmgtFzX7LoecebNwFzuzZRE",
  "key8": "i5BtLDZTZU4yMU3X8ENByCj7kvVpb1STmQhFTcfhrQuLg8hKxHBj5iTQVqwiw4SYy8i38dev6cwxHxJxz6fdiHG",
  "key9": "39k2h5XwzRSbJ9K1fg5U33HuLRco12GH4UP7MCQAhMSrFKKTCt3c6gqawHFSAu8dutq2NL6YByvgdFbYW6XpPf5K",
  "key10": "5Rq2sXFHdne5f5Gas1heFYCY25fSwJ9aMJCdWUsjYdB1aYqv4Tiq6EixhhQ6ZMiYobAarPMFXBkpxpKfZJddz7v",
  "key11": "5PVwzSktBGDGSDrfzbuMB6LorpKBmhLAF8xZi4jTAGtZeW7ijici4DabJCLPsYDmZhAXdpof5FY5HBuUNxecf9Ac",
  "key12": "1t8pCqf9pRGb6Z8fyL4Xyjj9gzYsXjg8yQLserEJuu1wfpgZ4j6xfSpjG7ZJ2j9YdCEHHjxe2pD6vRSKYzh4qXk",
  "key13": "23DB8UjAtH5hZFwamnbqPrzuizCxr7suoPyuYqpj4uYgaVbXbkAPUbaq4yKjo73tc3Vp5XJhQXeV3DAaDYjNGKnK",
  "key14": "HTkBBRoNQoDPRJjgWqrSqZ9jdnGktHvCCjVBEra1Eih8fHjaSWoFKdUjqRt3RA9LqaUKJhyL8HZN6GJLRLV4Lc5",
  "key15": "2L7cfDouqMuXJjcj4sbaHQKU1rofCftRexaVcMWEaWnG262WXF24KZGpuTapsFyrgXDe8xfosXWCtL6KJmuLpBy1",
  "key16": "nFRoKYUtHHk9XLtXbQ1LtA635CN7sLoozSrVUpsFAHA8DoUSbWUqaAtzkGx8QBiTh4nfvkYFrxB3e6etAV8F1G6",
  "key17": "3cPJxKcRQGHVkeaagqYhMbXoDwzFp7SHSveVuq6yeLc6QvM7A5SAycCAbAmMSAoBVuwVms5fsPXAw3vRPs3uRTLA",
  "key18": "3vAd2JajpL69UKdkemNPhRPgg4fHyp2M84x47dVoY2UAGpkNFcEifC1CaehZWEiHvHvD7Mrwctp8GJkTxJJd4cxR",
  "key19": "2m7YXtPTsQfWy77XLdbERYSo6MWgoGi8UZCVFQ9t4DU2PVsWaRxBjR8NEfS9wz16vDBM3T2RESmwLnG9s1kTJ4Nf",
  "key20": "63zJLKaRLPhcKRrzFGiWPoBwB2ecX4zGMWadkHUDJHGu7fpyPzHMJJCWTib43466nUEUTTB6Aer8qNNEZwgcnj6Z",
  "key21": "5MuWXAMEwTkGJNCJ9qibGqgfVm4D7m4YJRn1FUPbmKRkVEYU72gDoLyrVzSx8MAdy8sLqX1gtWnbe1zE5UEahTxF",
  "key22": "qmAbHpUbP3xeaDPiGH7WFdmgb6usLAGFgK6ESQqGhEPVu6bCVrw9MfXsMtagjLFczfDh9KkYkEssJ41JEMvuDGJ",
  "key23": "5Y941Ty8UwqsR1PjbEGZe8VYLCuWBQxFJZsCQGKDJGrwnF6HDzmyePiD36xskcsQNJcZLrFQtZzJJYbvCLNd1qsG",
  "key24": "4cWiWa9x8FoLuoJwZWyDwM95nYfF3JvoeFJFxtESNRCgPY8Fidr8umuXm67ydvgPNdHKPaWAbgAxgPfr5QrxskLL",
  "key25": "3yHbcZBN9KL77SWSqLXYisey3csCPqZweESoZ4oFsFHnWH6KUSnSpBnwmt94s5d2684vFmKFDii81RDa3nGmxWJV",
  "key26": "5CjkUWpE2jqZqoJXrFyrdPGBkaNthF59eFoyyJ8QqQQbdo7z3UpqA3uXCpsGoBLRWdTeq8TbkNxMq4nWKKUYodzA",
  "key27": "3pS3trJAnwPx37JRqYYqu2eSEk9si4dsq41kjpTkBX7SoVP72hEKa2UCqd76epRTDiCze2E4uYiBEY9UMhJuaF2s",
  "key28": "2Aj8jsiJ4iaFWnEiPhcEuj6U9GmucKxjrqh9J4oiTLoe47swQNYdwcvTjjjk2BAUxPW6pShaLqx73DgxN9TX7hYD",
  "key29": "3m1g4oZMkDYA3KBJTRYfZaw2QDkCjzndG3hyj6YWDAEHc2ACkdPqEBo1qpD2FxeEKVW9Fjhs1ZUkGgxtJEKF59Lu",
  "key30": "5c5qA6aPc31roYQBufdYjxnxqREZX5TEq5TYZXtzvrL2qeacUE8AxFnWDJmVSrsqtjNBBskdswrjLmiysfUnpGYn",
  "key31": "4yvEzL3oKKVRfjpnaa7UCaWK9aUaHguAsfJvUnE4V2txJH9iRRuBgBtRxLcTYqfLxqsVjBedx45FYuNQWqpm2eZa",
  "key32": "32VgzYuE1Jwk9A4j5rQPTtAFC2cch8k4H6FZ7vU4AMs45AdrPZYnbG81ikb7QKEpDf4mCEpfZxkbFrBnAj7Lhefz",
  "key33": "3jt1WwoV5ZmZ2vHBPJFDbiNmDHxqtmASztdf2wer4W5AgFesLXtv8J1x1FvcveGs2Mwy1B2muBcpSrc9S5R6UTWR",
  "key34": "kpKa36gqaygVAWCkGsvjjmPBofgP39ExqU1njWg65rd3mmfe4XH7LmsJqqURTeQfqCiDq94y2ZmNPbzELoNJmXJ",
  "key35": "5bDH6GZ5GwUu2RHGXrspnv3agS1cJdvbtBwJE5NWmKGthZU4BFUtLkeQyDzTpAvTWGKp2fJLPSi3zsxX9VUinwSr",
  "key36": "5z2wpjUAYm3a1sdSTm4HxLTYPXWESReGNeK7ci3ehKdBgWijuSE2LhaR2Adoy3bbmx12A5FVwr7mpWuUTV6LHfT8",
  "key37": "5E4ChE67KKYaYPSTQ5wKjtMErJ7t1ewavDPFptJ9cNMi19FFqK7TkSLGj9KvQ2JCznNJgffk44x9fomjUH8rz7G6",
  "key38": "3hkWVMu6pd78tmXJ3qFDCBC2fQz8aCu2LPqv5pziH7d6Kj3d7ah8kWV53jtqzhFd7e18uhvLNsgw3euYMaFUyRV9",
  "key39": "5kLmfydcJCCjux2rgPDLEe8vaKgYMKhRQo5aWmRe1SUnpUL6Nsjd4uSV3pHMdGXbfgj3rh5ao8DsuF8NUydNcfQ3",
  "key40": "2gYTu8TPrmxKk41zpeGxSnZnuGRaLm3yyJTvTG2dsD8PuCqNNtrDcgnMCJHsBYDn1zChAvGm9q537uDxUwVqmWK",
  "key41": "2bcs5tFiDiUS7ADnu7BczrK32X7rPNTFARC6nNGS3iakyPSCYwaiabQhwjRwEYw3eNWHdUoK3FAeKv3NQtMNZrYc",
  "key42": "4Qx1D4QE1p4zQYpFZLDYdVXhahzrGaDJq8Xa2jFzYVsQ9RBdTTpfm5UnaQjutj7jEhxkyaPSBouKaPBMAxQfQuHd",
  "key43": "41gpR74W8eXLTHuUKrPxTWGoW2UPJZMrgAQfkFRMXB3GvW7ojAmwLTb2fhepxazjfXJ2c8Yey1ib1GuwCZwdc8WF",
  "key44": "4zi9QRM3HnikupUnc3KJkoYVmePS2xeAf8o41Sx8QZPHviAwJtynNxvFqJZPJn8KePfLBA7Vh9g8NuJnRF4NSiP5"
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
