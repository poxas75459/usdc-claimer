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
    "5JWhfBA6uMYUtbMdsCusgciD11R5PfQ4rtqwnZDgVP4HXxyW6uxYBcQR5JY85PjSVo4NK2pFDeQM5X3cZ3wNKKdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7DmUAaGaUrjUDPBR4EESd94CGYjJD6wTtV12yC3Eoe6iLQSukW1Ai76M6YBt3RCnPAexzGPt5dRoVdW6aBqcwfJ",
  "key1": "43FvzBck3Ayb3mrcikn7yuUqL7hALR3uzGAxgdwoFLrjsSpq1ERba6g2Xrs293KGZhd7cB4uKZ9xfbn389fVFQcq",
  "key2": "5ZxUJ3bussR4GJsPnDWNckXyEnM5aRccfEnsow855kuNAVQCFeBfT9TskAe2fUrA9pJC2jknNpaqE4EUkjVJ1xP",
  "key3": "KuAw1jybtMgrGT3fXMHiMZBH3vL7wzmr2r2seNQgc7NEzS6nKBCHmR6syd58PokyYBK8PHfbebS2CngxjbB9Zkx",
  "key4": "4jA5dHBLgysGwkJUdpwMPVE6FhDVBRyJfqKhrUkxzx4VdKpKheEnZmpN8s26LbuRXR266K1mqRhsYLXSHBrPeqTm",
  "key5": "4wJN9qkrh9L5kAp27zPCD7NEqV9AUpHwAHnDueVUBFj4A2SYAnKVwxvNDmRmBCJzSnQ9QtzVK3VXMkpew9i32GsM",
  "key6": "57qcam7FCxPXtDLxv8h5fgVXv8HpwPdn5mT3XKCnQMNBGDisxoUTs3dpQtwUMrY8chPRKsH7ixEGL9qtBm35xzjy",
  "key7": "4P51BNE1WzPUZe4mUiVb3xb8jJPr9BqSzGXbh3W4hrGURz2BgSL4yZ6xULsF9HkrnT4TCuERG3inSivktSFZo3DP",
  "key8": "3Xzczy6qUBCxw8nYyLsheCgSgVw87kpDu9bzZKsPHS85T51TMepHEstP8zQb4suAVCXNpR8ggm3ampSL9fgLRwhU",
  "key9": "4ADrHTjjMxccT6z3EUiEfaMFvFRhnxJhLurBB3GmnUXw79v9fpVNqHDxLu8hYGJZwZPgrLDwqMce5Ag34ae19Gc4",
  "key10": "5YeT9VUrazNmLLfcVM5um3KzvVCjBQVCCW79Jn6AHckt9gJkwSsZtMKMJBaumWe4ASMTt4hMLKMkQxojAP9QU9qm",
  "key11": "4kLCEj5Dk1a7i6nD4wdN13P6QuoFpNA4Qs2QxXWvKJMBrSpfjYA4qVbfVEcouYb5n6G8LstnNVwCDGb3kvTpKzNG",
  "key12": "2s3X2ZjCuykA6iTF5ZeDGfRZ7bTRr1TsbVjPiwpZAhp2VBBRopUZQ4BMUjtRbLQXtE4ABEontV4Ej7Yft7KygLwj",
  "key13": "3rDfPBxAvW4EWZnWHn2mrzjpQBwUvDebaim82nQWSUFucu5nnPYjk9ay1wmsigdzXDyJh82HHY4gdrYrRqyFUFZn",
  "key14": "3PqJuBa66gei2Ah8oCBfdae3PC7XUahQSe8BJxYHSoXkuYUUuMknEUTVBffzuHsp6vTMWbsBwLEVU1Z7EL4pvViP",
  "key15": "2x1ZnzDSzBg51UJPYtk6Pxu7jrzYaJUgcJpcnmAZXmvTSWbNmGRUYiWfe2MgyFs3L1H7PgphEAjGXCAVeFQjySgz",
  "key16": "4Y2pgC5gaqnscPC9u4hLKbUz3Ffq6BT3NhRdXj7Upi7y96HZVacWVwYRgrneU2etp8vuCaG3PyHT827NpmrDULWa",
  "key17": "247Cv3uoQXaryVzwmsRLY59P2hKLJHbfXNtdU5xK4t2gAz89vnV2f49N6XoNhAyi9dgzQBWSFUSt9QSbLJAQiNNn",
  "key18": "4cFD7fjKGNPZjS8sAqQQZ288CXnBjBLu8C1EfiHzRBHsQ76yWRpfT8uvCGQq8AvZCuYWVhX9k8Zj5zdSyA7mgAc9",
  "key19": "3D3WdodsASbv81XAMq6UHpeiqWPXLahoQPTuFBbRXvNHg3gDvWjgnUjRJjk6fo5dDhdcBoHoyPFWNcwrnGcgwnQt",
  "key20": "5G7eEq487PSjmrS7yN4F4raxAxsq2ChZ4jSFpibMpbvRdBscrAdjHCwhSS1SbVQJ6n7dq4axQkwf9DcKpiSStsRV",
  "key21": "2ME4QAfi4R6NcdPGMXUuQn8aaCq3DZvSNjZ5Z1JNYak2ynQS7QPVNFCczfheRi2USCzVKSdP97P5ZovAjRmrCnt5",
  "key22": "ajFBA49UfAZxPeTRdRJzNG4bAvZjR8eJqfqB8VHm4UpQjxYLbmXZCMq53FvT5VrXubQpxxR3LvACdJaeE9oshTw",
  "key23": "GTis4AZ4qpGpS2HMEyKymRZroRNCNivFCwu89coJw39fXBLfpUqPfQPgvjA8asT2b14yuSVjGDaeUtkW5JzJa2d",
  "key24": "21BSTejirc93gXnJt9PD66wHFA5p5pJkCEDQts8KPfLwv3t1bZyXMgubdoZHzLX9A8AqP7sQvdWeqjazbUNXB9AL",
  "key25": "7jv19BAqzAvukWfxe44LSNFov4D9z1dEjPcUdJcDJQSBQJXFcaD7J4tiFCc9C5gzHNroHVkwh8ntuQkZjhGcBhh",
  "key26": "5NR5sKAvVUHkz4So3vHW1KvKuiHhrhJJ5WT5Uebe9r9EpmsSVpU8oGvMxX7MahCQn7jBrwZLPPsev1CAtTeSFpb7",
  "key27": "3NeZ5vKc9m5em7sfmqNr8XPDPJQJng55AqWgq29Y1GrUWZyPPtoRfhfAANzYt3Zg3VQk2SE79ZhqMktgEuwZ37wT",
  "key28": "2Y9bU5ZaKzgNo5EwCCGeCePhbLzzAraRymr9DogiiAzodVnvWFSb9SH1CPESHLkj2WTLJ5ehTWSqF9RsuBVq1ibq",
  "key29": "2BRa56wfgtutneYxFwdDmYyAbntEoVAyoQxquJvEQWr8WYE9sVERxksVsDqJHcsDQPoQvkSp9to83BNcGUkhc2mY",
  "key30": "JhUxVJVQJWgLQVb8EGKxhNFtrrihPSQAMVkrMqzDWEuVDS5zWNXC5wrWeh6V1Y8ePh8x6opntzx7fkPAfYzeafj",
  "key31": "fJB71x1itNenageiFHmvebKczzn84PLgKf1q7zAF99yjbPaGuq6tcRyKSQgTDESXsKmG3Z8KwsaBqCv4ecxeqnd",
  "key32": "2FWqeRpqcwbTFqkpCAUSGjYzAPaauXJofJhvkcDhZuKdQJmL9CdrNMqbmPXwb12tbPxVQJm36XCwxogxvUSqgW6x",
  "key33": "daz2KWwQf4baZoeoApKjFSxRo8oUCL7NgM9pjFFnLyPNAnezNzsPoiTDNkXqnfz7GL7uN7jDDnXFDC6qLNqZnMZ",
  "key34": "2opN1vuxVucA7kARwRxYiZEX4e4Fg9t8tcQhHjM9EMxBUKUgiRo2UUfyqAYdW1EqR51kjzrrbxqAPiYSboFcT7Pi",
  "key35": "3krgBioMzfUQ347tx5428Bh1cr2raQzPmjftuEE5rKEuXPA7Ht5s15qaeXZ5tG4k4irmH4h5Ncne2eyfEcxE3Wxf",
  "key36": "2aBcGC6izAjz3JS8YgTBBGnAyHDzoYVT4LvJ8emQ6FP4Sxg6tMifHaagFyQ47ffbFrPY3ws1CxVhi1FyZuuJLTZN",
  "key37": "FyZD1VpJsu9BGriyUUzKMV2o1e8SYYkewLrCv4FRPfJZwVsuiCXTYVFpZwHn4kLynpPcsGkhvQVcPN8tF9rgZRm",
  "key38": "5iUzXb4FZsEBaFRrVmzWHJNXoaBX1x9qwcsLXhUicKALPgkVpcYEJrBfxo4zPV8yKVuR5UPxKJrBrvCyZ66PHfm7",
  "key39": "2qCRJMmgenyt3bXeeja4z2NnY2ncZT7juzSpvMWSLqd1J7Yhu5nEKfAiVNJ2fQfcttox6fBhhy2sTgBuV2ynG5KL",
  "key40": "4bckCkieEVUncHFtv7oCm9BAgCWEMAXkpSqeNs32edGwbcp2jCNLwaVwtf3FixrdGPF6AbBmHvJwx3DmbfySbKV9",
  "key41": "5uh5MZAd2sHqEULEKJmkZcEQatkXCJ66ikkWzRXemvtZgjp9ro1wGy2XowiyZquyf3pmPyUNyMevJS1hjZjeMWRk",
  "key42": "vTbKVohdQEwc9pdkYA8gTkZTbsvkvR7zT6fxX1VmzT6auQVuYCUDWhNFDGDasaAAfGZ6nhrGkAptwSPgAAoe9yn",
  "key43": "5BCz8j8HuRMF77CRoDfcuY5QiM2dZ5TK1HPTSHpsH5fbtks2WKciYNqWCkgTLk55J63bYKjkRcou8WqdULaqDiZT",
  "key44": "236uA3rbmNR2WsybsPFXMukg22D2PLHg41oJe1FqxXbXH1CcK7bLfGepM8WKxm8DewUhW4U9UCQ7Z8BDw1dn9o5n"
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
