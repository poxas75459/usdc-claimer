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
    "2iz57FNPYjgXqdvxf5zTukpZFMahyWnbidt1KaMHuRSuRTf31Hu8aWZpLwfHbRBgKPstCeXhriPavpZxkCP2c9Ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNkMBqxo1sZcD681VsrDZ6DKNzfoX8Uu4D2XrwnbjGBLcKSo6HxLJEQk8QYmcXzz2sB4FgihNsfGtVsFvccGUyc",
  "key1": "5TLwqVZbpZ7UfT36BPbBwXS1EcBnX7KoQjP4S9p1CRKkXd99bBeUUEwgcbSfPMzc9Tcy3xyEyBJk8umoiys3Mvzc",
  "key2": "3jLXTejeFbZkd7CWs7vfnuwQwuWhRieCiwEG9tkncFLaas1VcvRpFt9K3Q72xvhtXG6FZ7WCrppMgQZa1TXJ868Z",
  "key3": "3MmoYgDs28KyXPj9otL9PLmNetVrWPazoGhfLwsm4Y38vT7i6yDJPWWHGX58yPWCTSYvBnKVdVFFRgVzkrJwfGeK",
  "key4": "3gqFn9QVCYbVJJYMNra3dxuQX5HgeeWVoGV3hpEV2uu1PQxPqmMpYjw3ovLytc5qdU9CMwt9sM4kMq1obF8dNnFU",
  "key5": "3w3nc7NGFunE1HyZLS1UXzioepwUvhEYj8xTwAsZDZvdNzVAYSUJm1tCku61dns3oQvgTZXZZ8JMDv4pzgjthupZ",
  "key6": "2P5gxhDF9vFUYUGFyxyCfHdNRPifyuMb9irMVumo1HeRh3eTp3533E5stNSvgZayVVags1QQ5fXnpKFBeWccSQpM",
  "key7": "2g5MSqzUe69dL7jp3xJ3aG61dnuLrUw1ECcTxhZPFiXEZeEsaNfKQc68GPXLQxcULFcMk283G728QYmePms6KpGj",
  "key8": "4Y5rEhppc8iutGyV95DXfeGdwxUzNFsRCUj1PGWodZ3AM8frB7CihudvevurG7YWjaT5MiczfMmrozf3VtSn1b6a",
  "key9": "3ZkiwWUBAtHe7oAdJsAxwbMLCgQWrtVhcuo5tYLqeTmGJsX1SBnUCEfZR478bF9LLTZC7HqGQL2XkM9YxDvT5wPq",
  "key10": "YBeSp9bqNgzxMvSLEZ9AUyvsEYXZ6Gmdty2fwqTx925FngF9nB3WkBkWkZFMwZ7EGJd2LpDYimH7GFHD2L4nnn8",
  "key11": "6ua78nP728B5cfDwdS9VgPGLmfgpSkTCs6GVZwDWru1d4H1rM5YsC3Agm4a3b2uV9dsgjhKVRb4r3Wvk8Bwqdtp",
  "key12": "eEu18rkpyWU9bS6T1cC1utB5LYDJQ5YADkNGdiKJjVJbsdYu5gZS6FppYt7GEYNpyPjmQfg9jv2to5sNRXMvqcW",
  "key13": "Q53FUnhteGa8D5xwpwQRvmR5CeRKPdz4w7oy8o7RJThfgqk4an1zxVbGLY5JgPhbGTGx3V1cdGEsQ677cq1RSGn",
  "key14": "2dUGsQHmdVx6dcEtVCb3CwtzBWNfPnCeNH22MLNAziV6yTy2EwLwBzL68xcZzyuHECmy2WpdoghhH16sxopijyof",
  "key15": "61w4ZQgpTEfuyrx7WAm1Bi6kUtLZNMddSa1GyULPEf8xwmheJqw7zjkuGxhgmzoCrHiV6WtAtXAjpQjBoZmCcPSu",
  "key16": "3cSS6EeLgrabztWfkzyEEScQwv9w1nc7KgWWdSf5Z6HtNRkcA4LMieFSCeub834pxtzG4LQnDarnhA637G5TyRzs",
  "key17": "43rD2uKHSHVYRUkpZ9n5xF6YfdSKGTXyYRSMBwERN7yobyn4fATKA2BVENVrQtjcYV8bK9g2BBsA1kjgALYbhpnR",
  "key18": "5eJY2qEf9QzRRKduSgM8pU59wQnAnH9Q5ZQ3krNfLXqLB7Vvv81vrPvZik8hk3wnFzwH1kDZ4dDXjd5EZSc3D9oY",
  "key19": "5dXXAdeFGh1iNNqa5Tn5GFnAcvZi4BkSSqF8mTrwi8f4XnSPoMRnQLizeukX5ZVEehiy63YJJRjaiYXW4hCHuTB",
  "key20": "ZRLLVaCd36YnViVSJ3BMaZ8is2Uf61Q7VBqXCHo43UqHnAFuax6FZaNZy56HSN5usKGwYRwJaQVQ1Lj6uyYc7Xo",
  "key21": "UVMJhqpYaaK4rUa4HPtkLPzmq8NiMsjcUiTRNpX53evXFY8jkh6cSM2BGK42Nw7Km9vNkZB9VWqqFDSeSJyebmR",
  "key22": "2GyFVni7cfjw7CBZC8TFQm1Soi6CKUX5rhbRABBwPZdJUGPgCYnRATx1apceT2boQvLpgsLwA1UhdvmCUHciADz8",
  "key23": "4S9zhFf4QrABUQzdcsfVhGSaxsxqc5zmzMs49XQucGecBJY1QLu2EDmU45mRTcpDigHZYwizhtTF5WUVmwLd6wHJ",
  "key24": "3dmKDZ66xwPSTqP4rsUFVh2u1qtaQ1HDotcgbcZo15Gd6P8Px6Ac2p8zWhEs1mm4cZkLYeib7f8uws769HNsn14Z",
  "key25": "2vuh2zJf19T63bwceJLjNGaVjvMAcgvJKzTMZZKS7ZCzfeafK6CdQe2DNVhBTYV6wZwv7GFGXjvEFa9AcUXinLid",
  "key26": "v9aP5NGzNLUKpd1aieV4g9octJTBbvH7CnrDLrU4Pwm5A6Y6EAZZbXGeJL1GY3HKujCDLhaWoPw1J6DmT2GcHBN",
  "key27": "3tmAUbW8K1WwuRZMx8qsEKLJdGNQ2ba9Bz8qFZxQGaLuEKujmYhXwV3cvLGYpeaV1zL9APRHppyjgn3FirDA1Wbf",
  "key28": "35vGyDMvvorkmW4Tr6C52qAYSno6Dz98YTxswx1RS5GMVQkDeqzAHq6YmtMrDXtgzNspwxxXtqJxezXnwE6TEusW",
  "key29": "2hPuEwfduXKdSECZ2K4WpcQuvcc2TEnYcRinw53VvjrNNGJW9ziLLh5K3Q7BZKebp1erKyo9NXGGga53JzRShpg",
  "key30": "5Gz9pU8hrGsmBvcqhcX8B2y75kx4x19TgC5c2TZQ4De9Uh87zR6H83eUeXQCx7vjvfLn9U4AQWLLntJNjTnLuhdR",
  "key31": "3efBnrGQ8xz7R1WSUxDbPG4ws8ekorwJWVquXyoKVTA9g2Kz4XTT5n5aUTS1RKY6a4j9xeUUwbBRHYvXJ1V7M2E6",
  "key32": "4zBR5Mk3TYcHFmWrsvH1FzEuvDJ3NUzq7H9E8Y4Cfm6SWy9TvGzvPycASGoLWQiJ9oJy1yh9b4qAuvmUzjyUGeya"
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
