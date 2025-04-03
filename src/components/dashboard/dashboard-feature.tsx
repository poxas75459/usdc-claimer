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
    "5rEfXAtw44mZLcZiSNows4v5HD6nNv7J1f2m5qtL1TLZVPecTuEPenb3R8ku4Wa2CRxBmTxCjsXn29VPN36g9GhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BXN5tfexQiBD7V5mobNqNhT8JPEAYYnHVBosCMNcZ5WxHRdKYDi6vm7FHMobu1eUbyQr8nLScDCF714PaCzr3E",
  "key1": "21soBUMWP6TBM8AibiDTQjgQtmyVNDg3WLUkDY7PvTn5dzVmbRWEWsUS5bkA7ZGZzafD9otfUWDcuktZU4DLrycx",
  "key2": "LyD4Q2kFqju7vhi971Luwm4RfrUXdSo5SSbVefiCUczrLUjo1RdCVybm7sKKxd8Mswu6WoSNDC35fDvkCcQqKcg",
  "key3": "4j3ZbjxfHKH24L1GaRMg8UwLWAFJRrjR7td26pV1APmzoGTmxB55CvHAxub4x4YMdHeEBts43LSLWUTCKApnCQBp",
  "key4": "N2Tp8aVYct2tVWNHaPwx7WzfSmgkwoUZtZr6c1LjMxxiSTugJux4ziaRKxvBm26bsmmPM431cGSELooqzSBnNGZ",
  "key5": "5UhhdyR3mLnhvGJR9EQoBipUA7QqDCynHF97hgQX2MeH2ctFgi5ZQA6ukW5TJtVVRvpgrRnTMidAbjtHyBBTLv5Z",
  "key6": "32FgcYJT1VmKstSEpBgkFYhiUy6YtuDZtaGCYKgWVHco51Zrem3ohRV3rWHby2xPm9SkVzjM2D4oVCuEGufHMgT7",
  "key7": "5D9nsMAmuSQwkTVMPwEUHYkVsmR82nCZocvth6Qtyz9ggs8X8URm3qorrSU7kFDh52GARnHcwq2vRFiZy3N72eFH",
  "key8": "4yFcpVsY8BBsjStjfbQ8v2d688DAQL3Yxsu8tJHf24hdCLFptR91hJCEow3N6RfcbaK8HcQnsEqCzpgN5E6Ci47u",
  "key9": "3Cyxn3TpXidTEeQGGCEgMz7GEw7DsMvLtnDNnYg3KFChyqhPRPLd9HfZiwmWrKUZLZ7rMD9UDFNsADCqBJmxTR61",
  "key10": "7bJdu9oc6q46ymNcMmXhaQVUHuPa3tAieYi5eudinae29VbuMNFh1CYqfRfqXPWJctZQLrSaVNNNnA5rapKsMC4",
  "key11": "28Hq2zzV4WCuurwtPXfCcBktW8YSZqKNSpbpRcHvTKFJqaTxDgkAhvLJaGmX7KhNr265N3meZ7L8oTMDC81PDuJd",
  "key12": "45ifNJHoQPPVL9EvY6R2krtcMQxYqgMdqNzWBTXQhztkuWp3NEisRNc8LM4EdnfZfqECnc9eod88T63MCMmXokWM",
  "key13": "5Fq2Eea15NBFQWEhGqFjKQ9MKWFtJ47qg7eq1aqu4JGKtEcdAMZ1WQx3xrJeBS66fGUtMWaqnzpGuMq5a1KPASUb",
  "key14": "4EKbf3GWqPjt3aPpkNC5uS3SxYejU36rHb6kW7rhPBXGXL3Hu92XL4wBaymYambTJw3eQDouy9Q8f9dp6Q6xrMTt",
  "key15": "3CC1Y3LLqmXGFsnEMv4KAJqNH77574inkhXcu69hxGYF5qpMWRJ1XNchwTu1itwcTsT3Wch7Yv3teTWyiKhb8yEi",
  "key16": "2CjN7wPthBqn484KnYHTJdu3hyNcs1HUWhBdCNkDQgRHFvr6dEnt7scjLwdyomRb2Xc1iwMrimRsKbvMwDwfd92V",
  "key17": "2qGDf9M8awKPy2YhR8nuiKiP4MxkK2Myri7Ztk2nTTFU8zPCKwvKZPAKHmDZyNDwaHYSJzZKCQ5mdibYa5VQmvmU",
  "key18": "4B7Tji3w41diXFW9RiuJfWJ7jkWbAmw48t9owgYRFry4hTPoGwnFu7K2pRBKmJDDbARYK8eKa6eC5fF57EXr5zT",
  "key19": "4jabuBGUdii88Dh2YC6kWskcLWTH1EPHESgnuFxamMsX9S383epikaNHx3GrDuAbRomNhZz76p1TfaAnUVQqXPwY",
  "key20": "XT44S54GQQrQK7NmKiudgVTgxSefXH2Qe6uskXzxeQgpdwtH88z7tKBM6UzuzNZtD4yfg6Wm39MYCog9feFnPay",
  "key21": "7g72Rvgc1A4Gam9TQ9SupgE7B2uoenEHU98TKu5dHfNDSL5fosepuMnVrvB27bTHd6VVq42iujzsq7xr6dk96VB",
  "key22": "28Cg2bZKKAALT1gALVwJU1vYae1EP9Xj5gdnphrD2MgoNDPQcqTvLschjWpTPUv4Ct763NGzdnDXmQEXdMjXGdPv",
  "key23": "bAFnmrMhBQxfuQ9iDFTbbLBGytrWBhDpFSqVFMXfjkXZvu9WncWBZcjDegJCJx173aDJEfdUCuR9CxW2k4muy6D",
  "key24": "4GaCPMm7pYPGXU4uhgN9EhG4ZUL8utNQ9Kn3BmRVPySZRbfWkYdEbgGKDPn9DVsYmXJKXtFxBn5WB9m9tp239u2Z",
  "key25": "3M4rDyAK7Mg6s8qrxZgm43NdHQ5LtEz4r4hkNvoyBj1dKjM2F2AiSxAxuYrZ1WPE81LDdEvPBXNKSrAuqXGVgrei",
  "key26": "cSw2pENkrckmBQsVoxhfY4tMt7D3ZqhEmCDkcTbVAgpmooK8fYmvnr8io3q4PtnnSZ7faeQTyZLboBuoPnqbeZo",
  "key27": "vSm86FVEEvVvdzaZoWNcoENTLnawiyBwaGD71XMmhDj2cEHUaYvX69sz1xc5qq5R1ZfFxybzanCJfUS6bAeSmSd",
  "key28": "5KmTBztvMZdugTYi3hTN6A93c94grKhMGeqRwuv8GSUiUaQuj19Kyboz4VA1cSWzhvPzVG7VTGQ3gjxa9nENS1vA",
  "key29": "5ynAFaecH2Sn48d6BqXg8GxgvdAFRA8gBRs3PGAo1r9BgZwkzBT5AT3KWY5jJiaoays2vrBJFWPyY5uxzbsE4eoF",
  "key30": "3NVGq6L3NuMhVEPCHG1virH5nEhLy2txQkNNbmeBZmeLT2GQqNWQFWNpL4Xj1NJ9sMYJ3J7s2ZwdETW8WJ2vWLNk",
  "key31": "5dNqZfjXN3e1uc4LuQGRijE6s9RgW5Dc8aNNPoxzhwNpD5YruUbGTvLVL5Ci54JFo2shTtV7vbYBQrn9uB7uwFW7",
  "key32": "3Di2x7ikZFwMbqJPkKkMqg2HN21G5v4SjZr4924hpp6oDx7kHMGFGS7HK4nwgxQsCdtXdnZTo4BjoFwU8rAf4ELr",
  "key33": "K5uJWdennj9nLUn81Scf3e8FXWH9XDB4vR1cBWNYsjnrvCRfSG8jUXq9kFBKPZx3t7UGuBqPdM3nkgjBPrNCT7m",
  "key34": "P46P29vz3WwEYkNRJY2E3QbL6T5ieqEgtAiLL7CUyn55cJukv2emBc6roobDrZ6vRRWqU3dwrgVu5fqRDGL19ak",
  "key35": "2V7PnGy34oFonHu9VYF2KRvPZ7AUMnsbMp34JXvTdbyTmkDZtc2PmoqBMWugcer9S1jJ86WmVfBLqd77pvKqwGbJ",
  "key36": "2GQXmNNgP4DHrpv642ntPLosTPU2UqLEPY29h4yMvgCpBU3ngz5YV4uTGLvEX6drEMf5S3k7ZfkzgWeRVrnLfn8D"
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
