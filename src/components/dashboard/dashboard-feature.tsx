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
    "5gubuPtDtu75oh5yc7n6ouFn2DqkkJnXLTsRR4tnXYA99xxSPR2fJ4PAvYLAj33NJefLaPToEWeHNWCZJSR121Rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uH77ps69N9j5bSpPvpTnEMHjzTNoGo7LLFZpwBLvUz6fFR4SQPaUtLHPoa7Vdq1etwbQBwvwBvXPaNmpjW8Twvw",
  "key1": "2p9pcVNUhJpiDQweXQ4RM7SQkGKFnXdwyPeRkU216JRpawwZsaXTrE8CtCmoQbJ69PpehS246TreMTZc1aprL85q",
  "key2": "2mdrXdZ5aA2zBWJG7CmSavqpgArGQLoJcUXyzBnG6LpmRUh3tCr7PCHpraekzF1r58rfX3YSAVmKFtNaqTxZcn8C",
  "key3": "5Lmwu1VsWLRgC1h5R9winmVsBtdNW8i1VLyVSvfNXwr3QRpgtSyHv9GDuSp1SEcgrit37FLDHreSXJrue2Qp5RM",
  "key4": "4Zv99zcKVPj5S8dut4565PZptfSpnhRyC3B9VVQspVKuzq3J15Jp8USMyRBDD18bn6DSNHjLggqd6f7r6sZhoYaG",
  "key5": "2oQzPh165SNStiMn3FAcNmwDFeSBgeh8bn15tqndaTAWaEofttRPHDWSgcm4PEtbusv5r1frbZHVzrePQ9uy6tUe",
  "key6": "3TfcLKPhngcGNToWtUnfi3WwZjksZaGrPVLcuDw6Z4TC7Qnyo3YLkCq1ArZnfGSxH3qXFQASXcwou7hYMKYpTFVq",
  "key7": "44Sg8T5ZAnyUEHb4WFQrb5D8JZJ4saZej7BtR73Q3u7SKis721fqvFnCzkx8bhj5iYFf88FxgDbxp5kNEMexKbeY",
  "key8": "3QTC8AuEdjPp3RMKhmCrdtSny92ugN1XLHiDb57KZVPbmzq2Hn5PJua6tHSNKaPqDDkNW1GPh1oFFjr5g4129yTj",
  "key9": "2bTr5J1kd3fcwUQNCiASPy3iboVxKH1kWRRPEpuQ9imFYSAPeUuaiYiQpMRT9PVWxZxU4L4xgbGx3hy6Wp4t8Mvm",
  "key10": "5cmBFLnnGAbLniKPaUxDaxSEBVKp9bMKxMyf88Qo9ae75VusgQ1iEMYfyuLoFqYXVD21sFRN3WQaeiUcjdDM3BWZ",
  "key11": "29HStCiVk58F3GCHgG8FvgkzCGHMq42KZU4m8Vup9RzQJF1rQ6UkD9diTQZGvWevtMm7RGzk3it7eQiuaDGP4pyS",
  "key12": "NRpn5P6YxajCDUTSzXj1rkFUDhpZnT3vgDaAhHg1J3zQCMLY8un2NAhji1oKpv3o2eoHLYTtjBZcCpB4Akdsc5F",
  "key13": "3gsR2KwsWtPk4kWgEoJhQNquhqLSQTz87Kcrp47aVAdvumncUavoCnwg3U3d3McWvqSaA5NS8ZDyfTEU48EQMrau",
  "key14": "2YHF5K1jTaEDiyY4hWGNEcaiVUYYQnsfdEn9qTFgsHsiqCN6Ti5VDkUrphQV7wXNNajmqxTvd9SfiAr5a5vB6922",
  "key15": "3HJtUmWqqNoFsf5Qp5qDTxafqCqDREBp5hfMvh7sSjmCqbrbuMQ3eYWRXDGvsU1ytNrHbiUDGZ1J3yn388JCXMGi",
  "key16": "36M8sbj3jHNjqtPgLZz1PyfV8b7sEeGbp44FW59i6DYc73HmHnEJDjU8rJd1EVpCEJsKN4EkMARiCc8wuN3CjosQ",
  "key17": "MfjL2jMD1M8nvJqFp3aXSN8bRFMVqZbf7rYobEWKEZckfm4ZDRtetMwxLiWrxqadUCNWjhRBuww3XRx9GhGVkof",
  "key18": "4N8i38xP3fZTPxw9bqtgLvN4HbEQNLSmeezyyp8HJrBHuWdt49MT3DMygYykBKx8KGeeW3hQV6ZvBrJ4r5MSZgDU",
  "key19": "5ZKRB2ycP5iTbhP6oMv3vLSZwMWM939T2KSBPf5UhNiw2EQc7qv5Da4NkFgSZnyR4oi8he2FYNKw4qUZM6RwAqAy",
  "key20": "4JrdQr89sZTzxwmubHeqHceCqNrUeAVgx32NLmQ4ouDy8tvrK1rACBCQ5LT9PCa3eNit5u4kPtJU2HhTjN4wKpai",
  "key21": "2Fgsvi9kQJVeGtfGtkziBLktsYBLtWs9LicFFtVFANqC6ektRRPW9MGsTK6UVgXBW4fKiwPuggZ2keEpcA3yYXTo",
  "key22": "33Hp1NuYkLL94AiQDpuRRsUpkvW5Mst5oDXQ3bKH6Qt3AAQnqZqYw5q36sx6dhtUVtGrWfwoeqNVrYvP8ZjZvzDc",
  "key23": "5ob1LG67ctgn55eQ3uS8hkAjdTVmi7ZpZtdmT8bbQf1CrW7cAmkjR6yrJd3bTQggWRmNh4mtVoeF8g6QaKvXuq2Z",
  "key24": "3yhaHPBenQgBF1X5mDnV3eumUfMxXoPVB36bH6NMjACF4kDJr5dvBDkdSRANwfdGmdSTzw21UjqHmsLptAq1Esfv",
  "key25": "42d2dK2ZmvFUzLMCL1NffnPoSsUR5HrFoJYweDYKcPT4XvsCXnYFJ3WQPBBCg62Hq1m31YKc1fxYQ8owKr4483xq",
  "key26": "2mUBimro4vE7UXSuWtpnqTjQYvUysuPDxcZ3DMVRJaLtH4tFCsj3MGwyzrtmdZy3hJCLVdU7KfShPCs92WHESnNx",
  "key27": "2hYbM5TE8BJwMAVX6Vuxpg8GFteNvJxdoYUBANexgjCiai9So9pwocfF7S4TvpEywovZb9NgAd8dhbjiLoiw7dvZ",
  "key28": "5XZ9kTxYRa9x7vveKruwh2kFocrS59GZcUBphTMX6j4mtEMuZodUhu2frpeeE7MKahMCaAD9AbvDx9CQV1Ch6y8m",
  "key29": "3e7dciRCC6gvVdJhbuSWdMSt3h7GnQdRJvycQzXSWgxCYfiqZ8SrgUbGpi9Akj1R2BCuNybT9LahbbxrFryQzcJ8",
  "key30": "4Q3CxzacnpW6cWncXYNYfrSEgzUrYdgyis2c3oCw3SJHEDR9X3wMmG8XRfj9cHLKRF3zMHAug6wWYHd1q1SqxZUJ",
  "key31": "jHcfGVz2U5wpEMmD1uW8xtruFucJ7Eoc66izqWNnkqppw6vFikrFbLB26Nu9843AavapPdU26zsQwCgFSwuqtpE",
  "key32": "VdeDeYcY2GjKesspxoRLPsGB5ZHgqywxpRFFesgPvvo6uQe6gGw5mrebkE7wE4Vid8Hn17k5zVYawqCVCXvUsC3"
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
