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
    "483rA35aLikXnzeVKQgPjivw6xmmq9zeEAVXYMTgkVbsuMP5nk7wsKyaGRZYCzHB92XQDWRWc4cy92c1T2WdKsHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "siHFb7Xzfa3ybqVrbifMaX2NuWMDv7AYLYPtKe7YA38MquaVVQSYusYWbnVVxLfCx2g6Fdkn2W4m6roprU6jxDj",
  "key1": "2mzNuQCB9569sUEQnLQyjXLeTByqkkA3xK4WTBP133KLfachcwA62wF9uujmQnNhitnHGXsHdb4upu2i8m82cQ8D",
  "key2": "5mP3NwqnbZGC8U3cCxR85fNouySGSVYMkjkoJtHSHFQrfvS14siRBN8ZX21QP4xG1jkMDDYPz1Vw4Wv4U49pdr3d",
  "key3": "iXppwvweL6KFCZrFSfLw1ZGzyyfi6wasywNQ22mToHL65C5pya82P27asDX39TN6CPB4gYNTxe2Lkj5QUwrdQT8",
  "key4": "4DpAWG493gmzwppY8LDahf4UJVHWvJa8tmiCTm8x13waubKCLaR2ssXZRe9njcLeH8TPuUVfrZPgdStfmhZi4bmT",
  "key5": "BqW5VyZSb8Rmi4SugAYzCq8sCHk8kAzmRvsBt6SaBQyBcYyAVH7y7HhAcPvFZcmK9iRaYjaxJ99Z5GSQKPEyZxb",
  "key6": "33o8j6SVuUQ556htk2kGxMgwG2Lj73yypX4gBnysa8TNQcjVADccmQ3MMLLbGsogrd5S9gY8oNHReTu6EKERWJ2A",
  "key7": "HHg7nGgwDRz75PoaWzbvAX3JeGvnGreTDopfmpirS72w1WH3SqZttXJ5aKLh37ci5RnvpXkgFwjrtSBBrfehYCL",
  "key8": "2gbv4T6iDMHfPaL8E1Y2CLHdxpX2DGsYsGJfpUPkVGBbFc5diB7jnS4a9uerg7wSwY1ytb579J25aZ9hEEUwXNcZ",
  "key9": "5u3KAqsz6HQp4wXkahjoPMm5aA23p8SAuock7b8PBNrjh8i2xFhJEcWBC3ToFWJ49n3bHf79CrgdwC4dxnDBaHvh",
  "key10": "4PM5exqkDGLLpb7kgnzJo1ZXmVf33HwcVBBHNvZe4M6SJn8eFtRy8toDWhztnTMzHjhbWVd4mr7a4MrkLFLLRY4i",
  "key11": "3ujSGq1VMJKqDM2kjMCFW9AfCwaBrNpFZwBeax3GZXwadWHKoRaCB6vpCtF2duCfDH79GiwCm5LirrZ3dUfCUuG",
  "key12": "fRpCew3hXGLgDeNHEJxa6V2uuKSABqxgkPaCLwCmKzhox9nT1LoNyMtXqAgwe4qccfeX1BoSCvgtQAvum4qoC2e",
  "key13": "4s7p5NXALesqNtMpDafrd1YYbpvdtkc8kizEMSuVVAUS4693sLL7kYp9MguwrppS1Kn6Qv6HEREt99DWz6uGmMEA",
  "key14": "5HZfRDfTTtfrVEyyk7ZpVMKanxvoE7neHM43QHZoHfmPggmsco2Pkt3z1S26AiT4jMe9bKdmCK7JfcGMDNyY6mQE",
  "key15": "2xekiZ2QXhFaPYRBqTuVN1EkZiXdKwDKnHj2MSRj26q6CSkiu1zEmPfEqbChTcPKNo4WPreFABrQr25axrfWFnc2",
  "key16": "oGnkJ7HaeEVVpYemdAPg1Kvm43NyEH7dtuBjY6waBNBtd9WgnwgWvjDUySYT6VEzWJzPYtKkfSm55CJ5MjiEQmm",
  "key17": "hq3YS9EdrogSvin8zPydeXWjAeE6dZHJWQsEBJMLkS6dSyPYz4tuc7AnxYutuUnywANN5aWQZcbBgcrZNsevzaM",
  "key18": "5qr7R6484iyeYKHidCtxN3j6n3UCxu8J38PqfhAiEaSUmv27vdEBUvMvEHaqMPQtbjfrkhtqoSBFVa9XMs1DWxh7",
  "key19": "3E5WTW74u8JGePi4aEXiFye9ZD4qZodaWmRYd8jcqAxeSaamPPHmAshdBV5RjeDxzfZRTUmB3vKhnC5vDb8xv7eJ",
  "key20": "3wxeZdL8JeUbg9nr4Qt9nAz3LKmc9DMcN12MXTuarTLioqnXbZTPh6h4ForkDsWb5tyPQvT1EP6xnaBK7yPHC5au",
  "key21": "5CcBNN3C7ePSRAGSjmC3HXsJhdTtnN1eP19JGLdMmvX7D1WWFd23tv94LfCRQ6r9n1WYqqKa7cZXVbys4ESfCUkT",
  "key22": "3XEBJMYBnoTR18CuNu2yTUrUr2147GP42s2TrBz5cFiNXWuLPte5J773PJ3a5Y2ybTSLrRPXvJGxG3UNSwaSKJFF",
  "key23": "q4jjxC4HSSnS76944HyDGVnCAYB8p3bprzoh94Fk6V7sfMMqC3UdGbKaKBXYqHDpbTLa4HSCMHqdrMG7EN79tcJ",
  "key24": "23xkxVPDHhQZYet9uFa75ZZLHzmemZc5Tax2hqGq5y8EJ9em5VVsvaGaWtt5BSdCbBtMNhTFodgb1y3cknH5ty4e",
  "key25": "s7oiA3twXyjHQQxnV4LLWhcah284pDy3j7Lx2W1Q95qnJrFrXDMJ1LE51qLbtikztY2zwKwjmjkvRetu7x2wH6d",
  "key26": "2ZcNorG4fSdCMDGdiXrnb4QiVDxRDcwNkirGfTarcQsfWCPjn2K1ahFT82pWy2z5ZbeiatNSBqgZe2ztMyc13JTa",
  "key27": "3MFa8zejQ3oLBQiiCUAz6k58roissfr6agWDNZ8SZ4bJcNbCGoX6XS3Wyqw2sMqDvDyrftPhVEe4VtH1Y6xetPm1",
  "key28": "27z3FGbJ5dvZWkXTAZqh74vWi8SkxFazC5Y7RReK5ndEYyiGgytjxcCob282pQ9n66SqK1y2vrU2DNq2PLi6tuie",
  "key29": "4hafeFvaCFkqzCCbjh2QUBemXyqJfYA6QvXJA1GgwVVC6nkBB4yAZRuCg2WRcwF3tddkdZV69q4Z1X6hxvco7Tom",
  "key30": "2WkzeiwcMpMHyWKiWc45rSq6nbcZfWqLx2iHyNhDEuHvKAAn4d518zXhsuQsPS7X4nF14RXaRUgRoXEU8s6JSU6s"
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
