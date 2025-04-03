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
    "4LNgZZB76kJ1D3ufhtYbkhwrZABbKGFtpLHsfxW37jMKD1ReGDeefRvJxtNm3NfLaWpNWThBvkSSPWu9TjZ5baAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aqP4zUgz7cYKFXCEKmWFw8CBziL21SYKsX9yqsWZVfUtcLozQ5AHfQDCkJisyQBhge2rojbnu8QWNNMXdha7z5Z",
  "key1": "3rZJ5fPxUtgVbBXd66MsPXaJTrLzKsDMegtBiNZ5YAfjiQsRuEfghAb7mjpJa8TPt1Ub2n79R95WJDVw8ffxqg4x",
  "key2": "KqCeALcqERLNYeR5R6k9vZ9VxN985S44SgH7rwrR7ds4ErYSHCzpwBtekRFjv766Rrv44B93B1cnisHg7FeESpb",
  "key3": "59Q3tfkjfeHxWh4m3QPxJu5UZyy5EbnGCMpb34ULSmSXCAy33uQCYdCqust38mtiyuzCRdub5eWKSbL24HgcqoKb",
  "key4": "sLG3DuExYpR4QkzMm17o15JbyiKpgmMgnSJDZDSRa44RiaQje63ZjnvJkbSX17jtfNYvkeqMu3EYAM57okad54C",
  "key5": "dCXgka757tyfnkHGgyMv3LgheH1pBdyiFcraE8LxQpadPhmUqLwGN3jXZ3yzt4fv5YF3ViFgSr8FF4iovzKHinL",
  "key6": "3TpQY6XpVqHSj4P3YGgCxKjK7kMg7UbfhTcGtYptKv9Eh1zrTQ9ViiYSEBXuZDJn252pdFRuhr51EpBepomVnAMM",
  "key7": "2kC64N6uSQHu9DJkjWL8kcXSGAr31smPYDQQ1LpWvBM8sG1PpEGzn18RzNhcKc9SN6CGkXdCsk8rA68n76pzL6CW",
  "key8": "47aULWRZ6hkLvZJL5oaMdUP8zArz21JAKe9KmdARmKH81bLsh3uhG2VeQdmb28mZYiiRYHg689kFPUjt7nwWiJAA",
  "key9": "5dYz17yKJZh3pa3XmnEVBGmU9S3QyTDs57sFPiBipDikwf1jQboiQcG4Juqj48d6t2FfsnWRvYKYECeyLTaGNue1",
  "key10": "gM8PQRvuxfQwsLZqg65e9QUj83fCUZzZrc1T7XCFntZtGMe9XDUTTDBMNqkRG24qYgG9PfKnTdhEVtUNBGYvDHc",
  "key11": "4y1PXWGr7iwZ9FP9GPLLLgJEyvaLDNUPKDaPy7FVuutmFbvsmeH2kq9CVQheGjW1QExc7Smje6pwLhyxerpLpf7x",
  "key12": "2d795dZv6sa7eQt56o19MmCL77id2RLefCEVHgwk1kfetYTp2NNpvEHqZ1QAzenrmxKTMNJkXvUPWc5vNJFV16Qh",
  "key13": "4pEajyqUYjKa8q3iYsddKZW24b2tB8sfxfPWoCojEqc8UsDtvs2yVWXr4ngTwzqWbtAjyeKnVCkimiPPwvvxukPW",
  "key14": "xGnLESf7WVPuGfUsPnEaaF5RYNV1ZfV3FtT2CnKZ9k7Xn45dSatAEoyUWcJNdBz5985q4U1q5vTp75SbCZ87UYz",
  "key15": "4h2TU6bf27u1VfU9wt5hzuDAGNDpGDtkXFet7YLEZe6uBWdKJ2CBtbd7y1AbLnEKCjsFEf3XmMDehJYdFGyh3rsw",
  "key16": "9xn8ac2TmmQUVE3Y1xwVa24uVYPUWZVbfJA967W6rAfP5bdNQZqJuJCUUtBx8ACGymMvLzj5HswZ5gDjfM2w93o",
  "key17": "4oqYCubiBGWvZ5P6cRmjnjabAznspum5bumwjVg9JAPD9FYCuAUyyCFEXyGvd1KKL355B1zVKuDBNNC7YUtCWQpY",
  "key18": "37iop4sD7C15z96XuUgdXFrZxdNMvDEEi8dXFswy5R357uZueiaL6TPLa6cD7dtBCFEGKDUS1LRJ1BQUuE1ie7QY",
  "key19": "5HopdTkjRs7hDKbquLgdhstD9oy7NSffiqR4uXbkr3GQWC9mpuqkjP2GK4XDvLMmwB1eEaFJAmJ1cqXRYBcquwyG",
  "key20": "33aUituRjo32DRbWFrWfwCTS9tKfc193cTJya72wwHV15TFTUiXPsaBhqjjJPB5YAByBowqHgHRkeNdsknit6owE",
  "key21": "2L2uTYZJkfcfGwwJGCFNaCiE2KGzXuyekobRfcWV55cEsL4GeFr4CwKGb7VdkNwALN9DvZVd4k3V4PxfG9mu2cHR",
  "key22": "3GWrYkuWAb6tbynY2H92snLEq99mp6KEeYjc93RPDDdHVFa8ZENBvAZ2pQeF38k5HGhsByGBXVvCwcoj1z8KCwA5",
  "key23": "2zxUGLwh5Jf6HSpPiXDJSp6tmFsoo46Xw5GvFNX5YpZ35wVBufxiBZMytEgckhAYzq4yKP2fvCG8h4SHqXF7ZYLW",
  "key24": "2FTkLTQYg1vbbuzsh1pmwwftbCvb4R1GxSZaZseeTZgdARUShgqSbCzLJr4JbmswAtL2JhEdwv8uQhKNmoij9DVH",
  "key25": "4u9Gm28pasvY3WgpifXwbDuNMknPohMU291SXCGYivDkjztUPz2oQASueLaFYUd5rgkfH47T8bbvSJZXy2ebn4fL",
  "key26": "2DbY6CroEX8d9ifArsFWnAEdmtw5kf5mG5Xnh1hJ9tVzjf8osJR7vRdE8o26NWUuf5kDoUSvypBKix6kbFyegtH",
  "key27": "35HffhewWaQNbi2nmXjeQZ171Ygb2TG9XAzJjYRzfBjfQcx3t9NyEk9eT2pLXDxn5ATvYMQxCLbSAkVfahRQ7mA2",
  "key28": "3GAznpw1mNNnu2BDwuKjxgXrcckRP7Pvjjwk7SKkfP9m1Ap15NRLj9s7QKTNqh9HAept2Ekmxwhwvdntacn7CMev",
  "key29": "4ttCybVL74nUXiYmUkBFmU6gvgWtDAnzGsdzTvjp9PzxdfsVT6eQNkXys7eMgom47aTTVFcz5LFs1dh47D4FwZHL",
  "key30": "6yrX8pbPVnko37jQdpPJA8q8zbuUBzn5e359cLByRXgzrQYQ6rSG8pHQ5jtiJ1UyCefP7yTSkK1SEkAFhDDG2Tq",
  "key31": "4DjRcWBrnWKqp6DgnEkGho3aGMpHfVv1TfUcPSZNPgZ4Ccrv9sS2PoWV8K79f8jz6LcjmKBRCku14LrmHbzTPP9F",
  "key32": "4L8mov86VJd42zT2U59cjuoR73PxpBCZ55cdoXpTkYrRT1DNxnrp1CLrHwzW3uMx4jArnoMjqtuEN1unDyeWt3BA",
  "key33": "RVVDEUKE6ndR3gKwHPthXHmHY89LqjG4RU9RiLAdGaADBLApbbTgHm31VSJPePePVVsCcXuv2cSGHcPTzPutkdp",
  "key34": "cNi8omKe8Vr4EXjZTtypgtt4Jfp2CCxn23Yn7Lj5787SJMrUPLG1kNEsGMCMwR8mHna5xgrsLUTJfdDvGzWiRb1"
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
