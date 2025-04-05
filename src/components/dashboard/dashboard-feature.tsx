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
    "2Fg1hwDyvgJB6RVQCa9mt9SdJTqCRxh6JSikNexe6MbYFuuaQ1BvMsY6Z5quYwDbrTWLgRwykVuKYL67g6LPRwSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ryXkoLAoxCfM4GAb1n7BB1KMiprsLiB9NrTi2bCKXf1Qj7mjr7SgpBg5GEhM4QXqMHTM4gSJxogkwSrMpasfgp8",
  "key1": "5Z1A8sYpCPS9NwWz1ybUPduGJtYSwWAYwVie2o2RZZQdzzhr3Hpf4htGod99YYCZu8cPziQ8r7zQ6MUFnKbqZ9d2",
  "key2": "4GaspKFD1CML38ZR2hkHsGjeFN7Vs55sHtr2sbSMfmo8rREnCEGgDuHd1WxZWhMaXnUVqMVWFGrwWBqEk1sj5fca",
  "key3": "5E4bbGioNYEVuj7UuVRWKZWwneYGKrrmyje1Sc78JtD3o6syu9FSSWUkoNYaotnewmFYcuPvGhxSQADfmWjRiyBJ",
  "key4": "gF6qLfSXmv4s5a6k2tewGva5F4TBbKwomW7F3dWNGXAYTFpDLd6ZRkNWG89mofFux6DezXgVUGLM9CCBV4L9qKG",
  "key5": "5m4gpBtKCE4frjoAk4q1Ni3z3ad1b6jwWUBun96MvjfZL8PeUZ9Yzvth7Mv98husenWYCzRYWod3ULCWmzDF4sZf",
  "key6": "521Hm3TsgToJHqR6mhsaE7Hoz5TR2r3Bmu3tucdeW7B393xqMHsBYb9ikZqyuSQALFivw4DdEZcgABqGvrFKYozP",
  "key7": "2np3c7Bs145UFDPMGweMenA6ErvxNuHz7PGBU3nvjSDwnVyNAmAZbBk79sYvw3PXEuNUnbqAxNPooNPHULP645eW",
  "key8": "365EmpzBu9tZyp8xAxwmHjD1De3PAvbHWZ34msEfpG1sxqZ2Ad47PMdGZVbGNcRXVZ2z22Xfw3wYBTAB7RnYBP25",
  "key9": "2uvmJamuPCwC7LuPhZ6HPhfckX35rmyJdUjAg8nECvK6qLC7QNqpCNjWnVcaxLe3akRpXFVwgRcXPeYxuCmkCvPz",
  "key10": "3mQsfwn2BgzojZmb9ToatHAKgxdkGGxDdgzmzTXnNdQ1p8d2pb8HZUjNcjRSYmucDf1gKUED8v77eLzceBAGdGkB",
  "key11": "3NmSQXji7F9HkAoN5vcY9ydeonrpRPqZ4G4mHbtZqkXpm2Kgd5SxMXfs8QnUePvuU9ouo7tT9rsUCNmGqJv4AdC9",
  "key12": "3CAwqxm7nPY1DoYZNDjrYxsZCTAnXTApAsuPrs3waJ9PrXJVnbvHsQdu1sbCEEYvSz4J9G5wv32ExMY97sWzHVYG",
  "key13": "4D64g9L4JGm7KGtTRrsazA1wvPPD1JkndQZJAmhoQFgzFn5cx4ygAxqQo7eBmGexkzaeBoQq3CyavirhoRdnekTX",
  "key14": "2uKK1TaiYhbKPNXvQogSka9ZkL4Q2Ub1PHPvCiHuR9sAVMGkGe8K2u6S9HoS8f5mvqCEuT3vKsqPcUbBD6e7HMMS",
  "key15": "2v9PL8wgFJougQBEBmfkYc1nNv7dGCHnZE7JtuMd5mUPbbBjxkmP9o163taPUw4TeJrPHBXJdTz7zgg79mmZeEk5",
  "key16": "KRr2bEEhrNU7YburiT4m8AgU6PyN7SnPNbnXtTyHsEadeEszTXWRro2DjaFhxyNQWZ9jLfzpTpjekGra5ZyuzKF",
  "key17": "3aa5XQ3DYLSzihMtzRjvKpWUYhAsgBxF3oGf3x9EA7zvPYxzUfwyUmK97GRZ5ekva3NBw754JErbbaXHYbgrQzRz",
  "key18": "J3JdfGYm8tx5wZXVWM7ea43mdfEkiPjPS6xKoAgBaKiBbTRMer5YZsiNPqdwRvCdy9Jx6HzrdazuVRrZmUbu1Uc",
  "key19": "2qLDGidkcT5SNmK5AvFDhvvni9HNkGmEAJYbYM4z1hiBadVgczcHJedreuoy5uJgjH3yQ35vux2SLm64NRqHhGYJ",
  "key20": "22m954amtvDfyqsphU6DGM6dAk7x2xqYohCYx467c4MCffvoA2TVTz9m4a4D4y6zEV4G2qPTYSTw7W1mDqL67Fr3",
  "key21": "5Uj8oBuUEJikynxTrGi1VA8Hn8LExEMBMmt2cV5nVCumfGE7KYy81VTgjvmjUAYL5Yj29f5mcPETvFWuS4AJgSez",
  "key22": "52FwMm8nf6Y7TB7m2T1G64jwa9UQEiGAh7ya7HdcXJLwKQS6pynxS8K6faaBgw7Lj9NunykqYBoaua4VmEUY19K2",
  "key23": "468teHiTBJ245WeW1VoKLegXU51BN5YzZcp9aEz71r6LWcAamP2CTzxpiz2qJv9swQMocEYNtTx64M6rC4kAXWph",
  "key24": "cDWFEJqqZvBwg5LgYgW9MQGJ5VnijkhxtUzGWh7rCAyLUSHoD26XW1SWxQtf5Vb14xcMhz64KDY1MsJCQPe4qno",
  "key25": "3PQ3MK3cyV6aCWbWh1XjRwBTGEf23QQN8Y5t8wC6V2bLha8tynJ6kVcvgDuWMgjZXq7imZDvvKHtUNHcEqVhKg8s",
  "key26": "36RQ4YScvxZxT984xwKcgHZonmkYjsFWAkDMNTfthE3jwBt1eby2tVSvCYbWpiHESZvnc2TTSbWrAuiNBdhwoqGN",
  "key27": "27TZcn8rQMD9QnShMANYMbnAae1o6F4QGGMx3F1eJvdReGn3ZCtYm93ERKbwsRrgUH23bHM2qAz8vWtUmBD6Ckoc",
  "key28": "3a1GmPvEMfneY9foTT3s8raCdw7p1REDRTg7FD1T4oUfVoUckMUqHrENCt5xk3u2qCc5sA3KhrseVEnx1nRhwyYu",
  "key29": "2SyjWjdyn7VGBK163eG1gCFjYgYvDEANvuWbQWKrYF1ovn5FxhZBXSvcZPwHSzXdT3RAmt2U6kyAVznhie5axmfH",
  "key30": "2XhWmtxvWy5Vzy6mbE8YHTziiWPJpi16ShNe1daAAxR3CxET7MiS85EJ98V5FL2iHZ1WcPyGktkt3nyvM79behzD",
  "key31": "5ZPvuxKLJnPoSeQSMVjvxGsJos1syHEcHVTZXV9Zx4RhFnwfuBwsoERSsGcBnwfkUchfErUeV8EiemWE2uD6fi9d",
  "key32": "3c7vsyX114iurVoi9xSLriYjcUpAcqAd85Xtn8GoNg4RtVFtMooetHTWWQnyq3oRvaPxE57TRjco2xiKnAQbZyDo",
  "key33": "4SF8NroHPqmwqhcnMCneuB4FyjDcGnpH1jh35DbCvdYquApCooYmwcHsxaAuAeS57h2K3x24VxvuR7eY3sL9doHC",
  "key34": "nrB6TuZJBZJhnsndYasdFXQeHMGcgyiy1SXg3L3fpssjqK7FcGnzsLdMN3SVcuJyfqVLqiqvNBepQJZDWewGPbi",
  "key35": "5XtxVvexAaVptNjxRzKocueWKqfZZidiTmMeBozr7rPqoSy9tnP68SUNDALrhCMrEDp8euEmaYj4G1gmwXBshYQw",
  "key36": "5777Kc1WUMpyZXaRVqq3VwTUGjuiLGicfanmDPbWH9qREoWcc9z6bxo1qX4as31KGr5iXKwK99t2aSd5rGmrn4uq"
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
