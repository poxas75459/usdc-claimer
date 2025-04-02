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
    "5fyVeTGd4X8aGX2PoNPYymp4J1fXQ1yET8kPQADwUDnAs26DnZYrA16PVX1Ubie2a2S8kPnUCmT1nhG66UwNjto9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35cNk1RFwVu6qBcGgim2nfahDomyGiojUQPHsKvz7vmaAUhZwAyceugTmStPg6R212ZvQneVeVCV1puxs5YpsPx6",
  "key1": "5FNqxRvLYCEGoMtiqWRwVsjzYT4HqS4ai1CLkz15xaRk3yeqqtJCprNohU87gU5tCRqZWN8zY6NiLxMBYfv2p8et",
  "key2": "hcmHXBn5SVjaFuHTQ2CP2AVUfZLDfFHJu1JPv9whxHyZ7vxS6RxDBi3JJeaYaRW54HLSuxsf2fGGMnEFnKri3mf",
  "key3": "39ibK9TKZPxBeKVjzseMpwmzp7kmyyYzZQsBJ375he3aEFt7EiYbEbncrqSjXtY6RW1pcyBowPfmDdbCUFPeE855",
  "key4": "3pkqFvmugWtKewxqxBmBxX5Rhn8j7de2nUbaT664a87318nqYWSNsGURYSJykG32dm99HUPqmSt6xs9aQxZcMetC",
  "key5": "3SmBV7NPnHVUqAsg3Dyy3QeSYqQoyGNGJJ1NEtgMyHr8McPyTC6M72AxQSN4mKvyBiFQcYcmJJp8DYTSuj8CBMi5",
  "key6": "21y49ctZxYWn47CbrijZ9iMrXDW23VT8RrXH4RKWNXBKCHorEwgd9poEaUJTtL5yiiMbjLEKsyNe8UcknsJ5wL6c",
  "key7": "1ZnHJBkvb5kBtqwWaFzhSwghzPyLz5U6aZWdQwvbfPiz3Zi8ipAHUZJDuggF9UpqS3ucA13tB16q2Y4ZbDHjFsi",
  "key8": "5kdr53w9wWnt3KoekpQpSAQ63mt8XwuwaGwCzFShnv4NtYAbLh4j6oLjNoXZZD6YuowyFZzmH54WL2XhkaxpvobM",
  "key9": "5Ts9R8fef1Q7UpqGfA25Rr1EnikJ36UVxAXn37vBrgEG4HhuXRZBq4r9GqhkWi432XJHkJJyJ4RUScfb2N1ZcxNQ",
  "key10": "64GBXyr1M76UMC2UPcDk1aGoF2py8nRUKiwnuLLViChfH2B6FdhDyo9h9DJLEvFrrdSwyy4xQ29wZjK6BEXRm8jT",
  "key11": "33VzabQhR6dDhaZanjBXmZy9vp98Kwh4D9PPC9Ge16ZBZDQKEZF7tmHUkKHs91rpr49x9QEmRUp5eLvMkzvWup9g",
  "key12": "5XSGoiyw6pDRr2oJhwpoEaHrDNf4AwW6hPEx7z39ZrKCxucTDaTZqLxg3NpWpHXJsxYe7kMfFpsqGRH3wHi7sk6w",
  "key13": "2Np6Fv7pVshN4KNC7gYeCzYW8AgLH3NAg7RXw1NutBEXSZhp9vBZWKxfiBQtqi7v7WSLeceCMEs2L12CABLZ4gaG",
  "key14": "2d7kRaEFPDrg5r36B6zEMRqEy9AbtUxh55oZtdJ2CPr5c5Re6qiCjPSHwALd2uuumun7SNVxuECkgLnAPoSHGvot",
  "key15": "5dYWPqLAhAXYFo88bX291VZgVHb4NboeZmYmnqAFCgK7Fbs7Dm4qKBpnZrF2sU3eZNSfzPZYFwKv25CK4zM4inyG",
  "key16": "5WNXNVsAEPUqxnHbFmU293iyrBRMQXbDGiuCMhGrD2ywzcNvgXxbcsezZwPWgMcWmqBfCfyaPBuT8dxMcpu1j8xc",
  "key17": "qDSk9gmpP5BEQuSUXts6KVp85V1mLLgaTrLxtvRJ95g4QBSRPWxpmS2hSyCGuMew7AnRbNDLg4dK7f5yJGbZToK",
  "key18": "5pxj7exb3aUd7A6gPcwX8ijAzcZMPjQz4vwJ1KKJqUuLQZoDdBmfQrGJY5VnbjzupBnDmHqeVqarkvUHk5Yi54nK",
  "key19": "hy1qS3cVBAjztTqshqwguUTipZSHK93LS3dChqeWPMLNKJNG9QEw2p5CvsAxkWbbBKeMMkcqVvsY6yLE4xxeLar",
  "key20": "615Sbnwpd9EVhvL7EpprEb5VVZTcFDn1zj2XfqCk6yLnjTnCPCTUavsRhFzfCiJivefqxyGsywqQpMTn1it8rugD",
  "key21": "4aWnWKkhBcjzDWMqesMNVYM5y3ihjjazNTeZ76DzFm1Lj4AU2qHgMfRJoLfkDix58GX5gZ4T4CzbNBGyuMFahV9X",
  "key22": "5zWuuxd247w8tbx8MedxJ3b7En8NiuJD1e4LJK8a9cjyj1Png3CVsLDPbkyMwQ9ye744t7784PoGXNvPJ5gFysFL",
  "key23": "4kcTCexqVgoMkSEcj64gjBs6NuudBRiKAQAbVgDhZd7Ew2EoVBan71Kpurw2RhQcqsDnr9LdWAUzz8HPsAV9tmik",
  "key24": "34qanhQrPgQ6V6tK7XfK7oH9SXbDsUw1r5PCxpMntUMiv5TX1LwJRE4rL8UX2wqC6WHyqFiVfQWkt9sJWtSppC8Q",
  "key25": "2Civ1AUsEnwNBvYZYKg7fwbbWeoALvL5C2EkuXpw5NzmKy3JpfZ5e3Qcgxispsy4vabA8E1daRZRFazHd6CjJjHD",
  "key26": "67R8BfCjfjhXLheCV7kxRPshTUvu4An9m78H7NjptpZ6LBBiBisA1pkCqqMrgt3vTtLmF8t4EXhKFcyeJSWfyoe7",
  "key27": "36XwsiQpbvs5rnxBQ3D762RHisAVDJYvfHbwj5pu7PDdYJSQxyn4jvR1xpzufGqGTxSuC1wVq2RM6bdQe2fw4Sy1",
  "key28": "zumYr8yBuWifAw598xFkBXoFnwbuSMxyGsAbAd4N4269U3KuWT7XK4SY19xnmRjePcLsseMsL1nzZT1DExjTHpF",
  "key29": "4K9vcf8juZhMyAtXXfej46XkGDrBMPAutTcYmmafNztocPmqK5iReMgEJu2RPzNRHhgNZTjFFctKt1eYKsG5Nxeb",
  "key30": "5cBcFiKPoDHJoTgpq9KQKU6bhStaoAyJwhuuZEqSy6PEAvQ7afgiRJgB4H7qPADAFVdTL2PHZfCQMYuiFF6fruhc",
  "key31": "pY5kFycjSv7gDv1anadthWhBwNUkvnTucmN6acSHW7ezPGkUssXypaxx7Bnptjt2Ts3MWwzMN94PTWaG9abH672",
  "key32": "3cGGMz74ahUWjUT9dKULSBzJ4DYEeZahDFKB2nWgF5egibu9VYQpri2RA6FM1tNLEbRKrCTdySiH7sodKje7BfMe",
  "key33": "4RexT8roMvMe8BP8Lwn1AngD21TnnV93LC7tmhYzvXNpLnZhpQo5QH7BdGxQoFEwiefGm6iraB7ATeNhANPZi6vG",
  "key34": "5BmTcCTN8gAeiUzH3AMp5TfxtycviA826VJiKMbxP6m5ipX6GirebVF7EHUdRzkwNqbEMvKb7paYWjDKcVNcx7n1",
  "key35": "7BSbb5rJjhH3MQFcaBsQGZKW6ahptrRAhJQXfjV5w4ES3TNUHmypS6ycbGh6c1Vj1sSkWJtt3e2RC1cxCSwuyf3",
  "key36": "oD9tDEm7f1Qgr8RVGrHgogj8Ze8f3miwcxr1PdNPUK6kUXFHhpGy12Rzi6ZZbia6Mksk1maZUfAXZXqN5T6Swak",
  "key37": "57pyocwNkk94aErDSijysBiznW3tndFGNE35772WqJjs7fnctwz2e1TRAFqLTxnwUfPE54X2CZRFTvvaNGEW5At4",
  "key38": "65XcqWX77WT6yYjnFQP25YpifJkzPnVii4xbaduSTqQ8yE3d7oLGMeTHZ6vTY4mVgCnLHiABSFLHhUQZxQd81Q2S",
  "key39": "33FWcDjCNs7CH6qTkvNmF8ZxM8PgKcFBy7679cG6Msg1W2qLYXM2LtLcJaDSvPZW4pWUUtKwFKwmCHyP7kidSGvK",
  "key40": "fiYuo9Fh2pCjDNfecCeb4wHReiqjuXSyYkwYAT914F6Gx1ryfuuvS91LmhRFwcQmkb57UbiDDyqozb25ypdcZro",
  "key41": "2WG1AvCyineEyhdk6waRakUdCZmEEqA75F8yhNpBTaRPUyV3X2RM1CscGzaYa1rxGZyQDDhGnJCwriSo1DG2mzYg",
  "key42": "2xt4hyxS1XZX3UQmEcuVYzuZCuwQ7TsAgUrWWXi7rHjDCHph2UKtxh52gAGQB1mLKo7yHzLT89pd2vogfzaWqkr9",
  "key43": "AcFBTUH2BJPoQWn7YtpfFPrh8ZgdqyEDmVfiRvyyu35NUvbcBMJY4yYPqCwzR4Fr1mE9tpzP1giC68Cp3ygXLzC",
  "key44": "364sCm39zBLBm6pfcDajC2xqAkrRwaVeZpgEjd1eNX5ABPUZWusAdWvyWxcLYEFtN22dFriTR8x2cFKgQYgUtL3T",
  "key45": "5i4PTx7WJD1FjBebi7YmRbTJCZXR3uCxouotGRhFCsndEj3cbMUGxrAJeoAx7tsRxs9KL37sYUZ8EJ253SUq2ZGA",
  "key46": "WWSA91wnxdobFaHKciNC99NoTyNRTnmSFjMXJpUC8c3UZNnMqpK4ejQ5kcDaMz9HSsvjjtUMG3V6zoD7PX8dchi",
  "key47": "5u4pBPqa3dPiE5Bs5r3f24RQqWjZnd9pEZPzr2WXo7ZkjdxF4x6yLPrkhSyLrBnxokdBhSj6p9SuPrFgzXpQKW5Q"
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
