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
    "5oKo5PdiB2hoocREDCAgvQiEL19t5ezT99wuesYNAxKzVLkUvmhgVDhFaBZoe2i3nA1A6re4VXQs3h5KBMiFw3kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWGSW6mJFYiAsm26DHV9c7NRh9XNPA8rWgedfN1NB2DVVaMZTmPzXDm8AtvbF2ntJDTmtHqvLBRs2QgyZrfZHaJ",
  "key1": "3E6LNkwqULmravx8D9Yk4ZyooCPUQLHPw2GwuWe3FDoTES9nLyHR7Ez4W3V1pVxVeLu5x5FCyoSHaZEU8f5A7tSc",
  "key2": "3mBH51QQGn98gsFtZyM2JU3mf84chVgBCeWwzmmqxaGhcaqoBKAF9SFVVmcont5xT21jBRSXRb8j3xVjKkZQdvaH",
  "key3": "52iU19GmkXPPSvhcXxPXcyV9dKZ6bLc7kUb5VeVka3n5siGhHrZjxKnctPT3X9fs72EDrtfwRvfTbyZAZ7jAeDY6",
  "key4": "3uaawcRzo8ZVB6XSUG1wZi3BRddsYHnEEfUrG8hU8vq8FGbLfUSNgLtAS9oj6scAjxkkzPbJBCaHPLN6qRGw9QZ9",
  "key5": "34rcmr8GXsYwinSD2UB7iVkLFtQUKKEdLmUUqkZoHzV6fyqvu2DVPhQj69GoYCsqumS2Z5CfCziieKL2VeD1k3hF",
  "key6": "4svP4FvBKupATPi9441VHzen2XMjzUsRTDU98Y4rBARF8c8VNcdg3rfxyPVTLrcsk2VPM2zkfqdK3pYiVD8osBnK",
  "key7": "2eaqX75z878poiLRaic17MjdhgwH7gw3ZrGHtCss1x6oHbNboMn1BZNiQMAx12Zct2sVUztCAm4CqNKsJ5Maf6mM",
  "key8": "5RxCsicoK1f3Y3KekbcgXiXpqMcbPPzJAqbkym1fACNbvZpLTakQH7Y7o8b8ZwrDmpFX2NbbYokqahwn33crHFXN",
  "key9": "fyVWUdmXTdzRZKDHfCZQR8zoQnvvC5mYMKGTP1SScjBX2Aw1wTvn49s5SkCh9T4Kap9A7thaxMpdZWKcGg9UanG",
  "key10": "47nktdd6afKgvTqimfVy2FUhcXvHUquVeSPhf2zLyZxFJBNmMkdsqFkwJz6o1qAPGXn6SNJ4BnsPPD6hp8KiZCm7",
  "key11": "2ZgFoA9fZo5jUZ9znHiFDNxo7jvGq7jFC3CPEVmNkgNDdtt3wWfqYKQruzKkYrjkmEU4rvJj8wnMFUMBenZ8mTcx",
  "key12": "3ga8AbnMR9Fco1B8PCK7NyBh58huiLivZbpmxiCNmvaATzGMHnpagHM9yqYL7wqvsE4sM7NMzKM8agqinoxTXMoT",
  "key13": "5T11BqKWv8mqH6RB53ZQaiWJRAR1EQMaGSxtpC8YW9nzmJwZM4NS7GKM8sdxLfvKo3zXviAEtwUhRgPYsGzGWars",
  "key14": "2SBTPWrg2YKTenfFm92QaTYc6v3swh5PnKoE4Bzrk89uESeV5ptsLJi2S6wX1KLFfT3QX7qZGwD3kktq6Zn1tAVb",
  "key15": "5D4JUMXN8Eg9a69fuww3RfhRiFDHShFzN2TYj59ZNqKK9iozxeyuwRgjHf5DdkW7chv9dsCfuTiVG4Z7rNURXd2G",
  "key16": "5MANRw9xKbA6EY1WtvmhiVJ5Li8kfDo5Rkxuj24AUVhu24P6fiA5YskECQsbmwiQiHgJDvoEN2tar3HCJYqqH5Ya",
  "key17": "5C8ftB2pkqZgjfPKAbgvBLZAAyArNVmdxyJVSR9SAS1SkHAUFvKRCjtTK6pZxmpdRXuxBc3xDQBNSBnCijSC34Db",
  "key18": "5UacPH46y3DfLxXrkST8Y63W1A66wmAEacuAy1baovs3tGsQfApMFnWYh2S96cyWRJLz1w3iLBCcukC6ZuCsmjc3",
  "key19": "4pVq9k4qtQDnzkCRHPtcmFYkig1bw3HetJaj6JK9AxrVeR8rurdzaLJjuU23ysuNhsp3WxCriS9jEbrSViZhdYqw",
  "key20": "52rhB4uyY8EQq3uQ1dKvGrdyrXZH42zxML2n66nGVhvgNuN2UQZ21YSvdaxGDfquQ7E8r5LzjHNzy3RPimreLmYJ",
  "key21": "4hEKXVYBRPMuUdb6LAKmZHjrJFfojDj6HmSWFJaq6Ef93fWfq4eP6qb39Q9HvdGYdBWQ9wPo6fQTMhA9UkuVvzfT",
  "key22": "5omYBKfCFfqbVVrSNNX8TkSEQfzChtGb9uFrEeRDDwjqWgkaRUZv882rHomUr6dYMzHvFMjKTL11ap9Kxti5KQCp",
  "key23": "2QS14Bi9urzxoyFCbcqMRxexZCdg2wLXBek1z2vqj1UiQAmdRykdpcwEcH4biHnGuKnEsYy4M3pcQ26QDJ3P1GCC",
  "key24": "5PQASgHVye2NHU9Aq7iat7qFqoZiqV7wFiNATRSAMbZzF1FKB42XCUZ3UQWkCBP725jF4RiaTtc7A8rxyAtz6JLF",
  "key25": "2FwtRL1sBjTrXEffdcLTg9SEnYPwLya8siErLavXscwjP5JMJHtNziSeScnvj9b5Hsbeo3ZnrJdMFLWo3euPGNbe",
  "key26": "MUXnU6hWuDXt8AsEshCbwPry4ANT3fwyjLChhnSM1o8XpDJ39FCL8Y5T2tpVa3rwBeQo56F8KxW9hX8i2A9V4BH",
  "key27": "5phQebdpd4M9GLdjN6TKBUKKNwo3b86JBUwXTcNJvgiCsKWQsegXHbv3KLGKgjFMFQL4hJ7qUoyAEDXsrbZmKmes",
  "key28": "5xdr5sFfotUTSFNJkunFyAxJXiMnS3Dbp1pLe8HrZyaduCJduMb6Kq4zT6NPJCLpSeVgZB22dRJGfjToxbpLGi3K",
  "key29": "Jg4Vd818FEgDnz7svEZ89mT4izyNsnEq9QXSV2Uc3gJd5JiMbaLCMp4PEp2QhKuJbUfXcbQzv2MjdT8a8RS7mje",
  "key30": "4LuyRHuBQ7Qb8cVChLUexnHZ2TckRsN8g1AwBxMXesP92ZtLbpoxp4kZmX87YDGoTxxMjovFVHt8UJQPwoE8c1Cv",
  "key31": "67fJt7fTefnMSWQjBFpWgTf1qvm3UTDXr4Gx9SekZ9rDwBcuJ9HP6muP2wtyA892t9dTovbpBtjMNKsGuNSktkBf",
  "key32": "3P8F12EvgBMU1nfQmyTq8vfyeMV2TuYaB6gj21TrT7ifLqXw8ARU2owAprJYHig4JPbsNrRsZ4sGRE6J3hHGz2cS",
  "key33": "4RLrbvV6oU5F8JQBoggW7DFvpuQFsxXMVBVjD11yGj3oysySbXNXiUki5K6z7RftxRWGkC4n2RYbj1WMWswWuPqa",
  "key34": "uRGdgDDv6wRa9ThpYBDjq3547RL35vkGsYGxtpVd4NuQDGHKd8XPSxziummrBdegVG8QZqykRUkFSoazneQcGPR",
  "key35": "hmXcByMZeQoYjzo74tncSw3SwcuKLrtxGF4RUJrZVVVqk7LtDnXtYyP1pRrmBGzLNAwwNFMGZKv3Ca8mXeZeHHZ",
  "key36": "38j4cEyTGQDSshoCXPoCBmJiWmkoKryfFwK1GBE3v5jLr8Xic5BFwvwxEnufv6TM6AhoRRSnatWNJ1anbzsKpFSK",
  "key37": "5DBdPA58rQmPJd1ztR62TAGRF7yCzQ9ZgSBJrZXB9Km85hBRJp1o12FzG8cspfphRre3jmJtRgTTGV8rCVnJoDEo"
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
