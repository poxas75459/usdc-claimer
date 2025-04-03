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
    "36GaRD8a5J9UEJKhzydDWbEjNermRc6f4peqgPVfziT5Ao69fjFio7XUYNVyVoSEJo1cmbTJhncJiGP3znHL9FzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ixtwHTqZo1TURS8zPvmDcTxhLCJMHHFWtFGUyi7fXCsUNJ2Z5trEcPSQk3rYZq74hvXqYQ91nvgjfTvaMktu8vN",
  "key1": "5Tafoi6ZBM6e1RLGtDTNA8sjVTJ89nTVso1XUA7hszk6bnuWBsR9cqBdpoMDC2Wo1LsFfewf7MijJhdWQ28jJYp",
  "key2": "zUYZEcmw6FCiiixtagxSKYTExxDrebW97STcunzEpmxbQpAvkvDaPYD7uNLEA7rqNujKDgcamsVRY1cRh2Srs4z",
  "key3": "4n4CUiZU1aydsHrESbveYnxfZ6xJF272mtw4Rx4F5eoPAVQFWUyCrP2H238Mt86aakRtqFxPVFECvqa2zYcq67t9",
  "key4": "3nV6QVckU45RTVuBTVwnYi7j3QUCcJxPdVUyzSPDCNm7d6P853CJWt4AqVco3Umi16wDnF5hwFHQesFCjufskwyU",
  "key5": "2MeXcpr4eZu7ARJFuQotruqRAZm9WzUye3FaEckkDxqeUysAuEv68bfKkaVRgTLJ17MyQTgfpkRnmJde47pPXAfc",
  "key6": "3qnF2VrZ6YUnFfZE8ezYqmY9DJgVp1BqCvWE7sD2RqZLwwCyPyvmxdV22fbd4TQTDqVmjmrsy2Wcew5a9RwCDJpK",
  "key7": "sbwkoMt5iWnjufvB9DaaEY2eYBAsuNQxxWPaW5Rcanq2m8PnuuoNFnwkVP7HLP9GyxhEbUV1DWBDdXUWMrgh9xn",
  "key8": "4xkuyc9FkxKukKTiNftm5vF9wt2AWWyUo47akhNXB5fBtJhhubrWDQh5BtoVju3dnwRemPrtK67bY7a6ayNt571p",
  "key9": "uiwodUqmaNZ7Q66cnjEXDrhrML6vbY57mrzscy7xQhR8xGmsq8XybRt23xEVDk4qSy5APYNcey5nnQ2eZBNKPHB",
  "key10": "5WKavuUeQMghJQEqNSLGth2p9YmkdHngao7DW5XkYE8qR87xwYv52JY8LBE3GjJugUeKs7CfGmMz8LoT4wsFQ6Yz",
  "key11": "3TMBLZYzjiSNtdx9TzVX4eL1FkgSgcoj9vh2dj8bAMTMSP6ZNY4Z9nPPB7JHHgiq2jTWPDS4P3VC8xR4sKdY9gcF",
  "key12": "4PMx1qrt8xNhzdZaVHtwgiTaAhCiCvbKKgYEQhtRzZB1HGmUDgGVYFScnRAZtmutqeeWaitd4oKhxf5nADjhaqL6",
  "key13": "2wUgEpf9wrqRoHV3hA1J3F3uekWcqg7zCmF67yjSsJBVS5TBrrsRKr2P4qhbUgdXLzPEtYbgob8hfMb81AcDJbXf",
  "key14": "3wYgL6YZHiDcUP5S8XZFeX5pvi8F5Y8GRitS2LTrNRegHxMGrLSJCtLyYCrgKGrLsbfN7Frc2A2DMZgo5iTTT5FK",
  "key15": "2URNjcRoYLnHSHxGp9nUz7qCN8oukgjMT1bzMLA2jmarXAD22mWH1nzfNN8RBJPRsixpUbeNgDkRFQcjwhoKnqJw",
  "key16": "5xzgAN9yLXzzGyCAGq4PQdkNKrk6jveKV3WfRq2MJCFH3LzAEa94tNysZW4TweLdaL8AoLZ3M2SeTrnF5Cdwx3Yb",
  "key17": "67aVyFavJj1P2szn2cPpkugzb6QtU6NTuoaUiZeX92YAooPjAXADKyi6uiVtsLeS4rwY5nujtpsvfFwsTwbBbga8",
  "key18": "3A1aMDRsubF1fRRJvynWDwf5MuSwAgwr9fVqEUNmFJbmKxwVdjo8TT1EzYiTyTPXHkqzZuxEmQ6bLkTTBVr2jVd1",
  "key19": "3YFN8N64zBU9M7oARVRm2VV7cRQuseiHc7Bj4R6h2oNBwhvw8mYoySpcuJv1v68AmveTSM9vxsYGjWHpXtKJSxvv",
  "key20": "UyUYYyHKCLjd51nuRnzibt4QrgyLCrEvUE4G6Kr63JMYt2F39WwWV8hQJ6CPKkFgGYLdzbYwSQNyzGgSASoNbQk",
  "key21": "285jgqAxQknJSnB96Gxzodpzp3AqS5ymVdtVDeBU1nwtujuU2HV9bWeQmKdWZVeREAsMirHiXEQNchD5MC9jMAua",
  "key22": "474yQDv1JfHCca73PxKsJ3v4oDuJPJ1jav2gmrcnyf8TDAyUNnsGfpfSicTHAfd1TChGfvBeVB8HuESnsvWtdqT9",
  "key23": "V19GFPG4xZve2EsujLXLGhmbot3yk4DACuz16kHT1fGsmeQZCdiVA7VQZPnynqPLEdrvGo4c1HPHa1RW6rtrpAo",
  "key24": "gt4bH7DhSjTx27tUxFfyU3Dimzduj3aTNk1SXezZYbE9NALfUHAdBwKibKQrvCRsPEDq8jHpAPixHNNStr49qHh",
  "key25": "ntvsQwfWqT7oTbcjrmzZT5pMwQAWmMpmptEQ7yKmBV9oZGo5g7J36pA3btZCqHnuNut2QA2LzLkug272AM8MF3L",
  "key26": "4pQaDciQMxg7q93E7Aep1hPNUNzZWCXPobiA5FPqR22ZitsKJKkzBkLAKWKs4ojbFP7nD8gdGogi1AebUs31Pocq",
  "key27": "2udqQWB82vCny6qKHJRLf3zvXpm19g7uVgC67micf5Rc4vnYUcTAm3SiNUV1aSKVzaq9bJ55oo91nTJQum1wu2vJ",
  "key28": "4mdMji6Y7yH1aVxMDBpAfoezVxEfJ1XehLfRaDAVC1Y5uDUraaTN3kysSXYA4k7vocacptXQ7t3mp93jxBdDRRDz",
  "key29": "2Pxv9KxGZFDHrYTwRaPCpt24StrM1QcH7g153CnKhXBNga8f5MnGtHkfqjSBp9cjBaXcCcnEUof89BYwFteVaMUc",
  "key30": "gBh4dnnaNiLvWzPFze4ZQvaRcTD32CFRN3GJbtVymT3nFJ43ZgcZjMiv693aahjdnUryACRXzogs3KAAwHm93LY",
  "key31": "3o2eSRBiwYJH7ovtsTaZ7YcM2bU2EEptZhqzNPervrzoNedL3PFxSQRP6nWD5Pv5vWFdDTtGnaU4yqc1VE2BMSJe",
  "key32": "3qCuHZqwEGr3crCMbHxRmCwqvMpSKpfGrKM81EBKRHzsbVpYBfZNTYNj7DGtvuiBzxDduemKmd8Fibfyiu5JYsdj",
  "key33": "59BTXb3YSBmFKhhBN1yYcx7wDfNdTUm4psBFonYSBVyRD6x3AgpTwQyFccgwR1heMUS4fQHnsZfTw8joqjNPKcXE",
  "key34": "4uDg4Qvp8wgbfeS2SZhqHknw4kUnStTD4QzS761qCCuWVV77H5SrTdEDwyx65d6DQEbgF8JQbJdH7io4bYjkUbCf",
  "key35": "3Jjm8aopX9Jga6fi4RUVgbbkvGMVEZThGnyXA8grnqADrGm1XVi2VR1dP5sAjGiyxjMQgXbEZSAYAALwzmtDYBJS",
  "key36": "1mzAZqXaMAPKn23zyHjzxX39HXHPaoBpcxeHxpRYLLSMbe2c7ytr1XJY3c7LxgkohozH5dXqAfu3Co4bp66z99H",
  "key37": "5ju7kaLhaY1G2167eZExaoD7kGSsi8JzWX1NnzsgEUe6vnGSvx3toswMEWP85NQNXRB1AR7ADk5vx3WLD27sZwVS",
  "key38": "2tnd5uEEB3aqZCJBo523GiLCFEnw3zty4uSGgmYJGvyMZdh3a7QnreUmGThzNeZU4kbo5uaUb7dY3jfCNZpfKq29",
  "key39": "G1jHGcPDjDkrKfbgNMXamhR5LtJ4uMpKyzA6W3gLmChqcwSQn9Yh23EtDRFBuGrfMN3oFp1JMcoL67oB8dsvoJi",
  "key40": "4REokF6fPXXu3ZnoNbujkdr1DTR5i9UmxX4VXQ4BQRo2hhLjy2VPN6KmNzrzAaikHHK6ffEVe17NyQieQLPKUj25",
  "key41": "59voRdVqkqUrSfbnktyukx4TX4MWNVTy6f3E8HHjNdpJp9DMTcgnYXcKWduYwNHXjw8ZUxCstsr1L8BhQjBwsh11",
  "key42": "2vwdQxP9kYgLh2ifNrkEqY3mzAwLSwUKXtboG8XwrQax3hfLc4bf8VRpZYsKhS9Pcrv7FeRuup4rygF9ULxiz9zk",
  "key43": "bTUTH5KEtSW8n79uvcx9xiYNWriycsqMeE6YBa5NpfM3nTV8WZwktFrzzNEJWfLMx9ThoEFeFxzvKEGvjXKhss6",
  "key44": "49VJdzaKFb4ypHbVWdun4FBVfA1sgcuMVarzHSQiZwdthevn1qsonCELTitFWzsj49WLaUgGhJLSQ6RMw65TcSQS",
  "key45": "3sicTCVNgT3zdwzkf5x3dhi9Hsd4rfig177R1A8Tg6swNWFnZjf5UjWwsDJBfucXixgvebYBPV4mUiVcfERWkWKB",
  "key46": "4KagbxxY9jP5eCRnRog2sNzwzxxFJPU9EPAmMWcCmPGEkedJv4K3MjuCnkfwv2EwT9FCMYqvNAgEek6dEAp9gAHB",
  "key47": "2bwYJ9CzcewVniHVEtrfcVayNBrXjCjKAUGLZHWpmZ17gLTbK3jtkMscMTh6bc6rDRWxMkJYwUAjtw9cJyDF4pdz",
  "key48": "2VPsHp5JWbH6eKfyREEJnzwtroQtDkke8WhwFJxDcV3ykPW3uxSBJNEoqUyNtu81Uttsrp8YAjpLC8iVENUGGUhf"
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
