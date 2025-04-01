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
    "2P9inNXuKRhGW4HFeDNvnf6rnu1GLWMk6xmPSLthedVQA5Ehpm1bFdxHVE3W2u9j9V4dLLEG1UzNUcvHQkMVzohw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VETvxKaSa9dPdq668Y36jiQP4kxa3XSL8udX9b4WLy7SPDEjsWSGQw7LZXA1FW2YjrYxMxdH7NGra5YUNWtwW3L",
  "key1": "3hXCxDKmDhriZDbJ9jEnPVA2ofCMvca1xbLgTYeMHc1hGFutXyQjrHt1Y3nRBToz5CLCFz1o2ZmSnAxiZXj4FKN3",
  "key2": "2aoVwVaPkvNuQBW8VzQEoWDiTHk2xT8fNbz8zhQfjdoq2pj6amMeJHVnyzZRPWTHTJVE4CK7g27eD2NVmae3ydbR",
  "key3": "5qXVA27fhPDWEdxmRr7da4PsKKFbYLYw5VYkKZ168eGVLpRJ4oV2JCnpcZzS1j7VEyCCyZDEmRjnvf9tCHwc5bUw",
  "key4": "444VUTjNH9EQX3zebLxuETAk8dHokcRVDLFneiyrN6veLdsKWE4cpps7Bye94CRNjH1FZ5zKq8dFBQyLtt2tN2en",
  "key5": "2wteetc9wUG1M3WuWBgmgEpa3KWZ4zhjNPpADLk54kCfy542RBW89Q9ouYDbZjMFZeiJwMBSjq3E8m9AvctJSeM9",
  "key6": "5siq44RLGcukGqD57YJFCjZzFux22CKw3qSFb15KQaSU6Re5mnNhK15LVvWVEipmRbR9KE5hyyTxEGgH8cQeanNq",
  "key7": "AopfSpbmWSNmN7G5Y2w35SqCxaMhAqJy71zax4gtGrPfgedEAPKy12PxfSmEvozbfWEpuNfR1bt6Rrt3pcJmiJt",
  "key8": "2WwzKUu4prMoWPTYE5Vc5j3CLNcaeEnngtn8Snw8BE61Tc3URtArtLmkgG2baLqzoAo7mB7jXYkAcnygbXph7Boq",
  "key9": "4YKrPfRreDyNFPi3PWTb6m9WaBQukwFUyM4tiP8dALvK6fN29Q9JiyY45gdkbZetYmBgt4Hoz8F4jdV9voUjHcoL",
  "key10": "2UiRNTfsMxCiNQXa4JTSDwvzYfA61DinL9AA8QRMZGTNHmUeixRRoAxg1cR6zQwf92JuXkB44HMzra7gSAsJZQSv",
  "key11": "3yxQ7P3GxFog7JyHZN35y8YZ8Y3EjowKtCPqtPwrvoaAyRNDMYnHW7PHGvUWQrEHfFjbAqU1By2dK69FEmhoXQDG",
  "key12": "3c6Rev1mcwHBPfCKqxurN7VAFz3PxHRsh536sZB7GK7u2VKjDZ8vngnA9KPc5DtipybQix6DN8MdK5YXSm3Fpmqr",
  "key13": "rTxdVsxcUdab67MX8Kh29roW1gQAbfthDeKvuJQnigJqac9gL3MZiR6275oMkNveMLtGjABg6djCdP9y1Z6JqCk",
  "key14": "h4pEACkxXk2jfYfAD4ZNnB5KradSEtELwTh99gM9LBBsXfjfCwMHdR68yDeyik2fZ7FRo5HEgGMXDQXerUN6NUx",
  "key15": "4hdCCksh1e1UGyCtTChGghsb6DcY4SUv3gaEjjvgYQZ2hYX6qtheGkPZ3ym1vX2eiQUN4UKFhXz5BgdFhv3f8h2N",
  "key16": "2WU3UQvkhvhm6SUQ6AiurxyGVp96tPEFgk7dMuMacA55tM72xG1yum9wuJrcLQ6cx69Bx1HBPswk5KRBQBhYC71T",
  "key17": "2KfvH3ugaygGqofjhaKWEXemk6jtYUiUKDwKnRJt3KXUNZAt5NrQQwSvuo2Q4daWDAgzMhRwydDf73AttQoBaWCH",
  "key18": "2nShGPbjEG5eBCBfjgi4sazG4nyLHX4cKGs6e5coe5N9qeYQYeuiYedbcphSk3MV6r7T3d7UwSXpCecJJpcTzhHE",
  "key19": "2obyfqZzzJa2R3NrgM9nEHjtvHzknqdEjzSNBfuWd9tftkEUbv3DhyFzZ4saiwv5FbFVZyeg9H4KFfRkLjgpXFVd",
  "key20": "2VcdM8cPRRY6dcqHHtc3RbPhxs5BVioedUiNBrn2RGN7gLm5GvZRBDpda7XNhG6rD2QwaKWBmL6XaUPVZE7U92FS",
  "key21": "3imBBaPWHHu5K6z6mSxhy11ri168LCg2NwCPaGJNy2sFAN1qwVVUYMGv3vtkkWUdm7gP3hT8XbJvi42d1ivWsbAA",
  "key22": "4BNwMuKt9A63RxKScJNcFJ2VYCLnnyKGYbHryASmgYMLizr6CTGHv9dt6rhMin6uQFY6VbdjJ9YLfGbaKNgquPZo",
  "key23": "627PQGoJJWEjB5YSDiaTp1zswu59ZbYDdJeN8g3xRW7s2za3CnaHuukzc9WZEZADhx36PP9Jh9swFv7dCWVQELu1",
  "key24": "5C3c9dPiZdiq2iK8PfGvNSvK9u1AgNkxXJAYatr1w6Dt52TNcBzLgJzGyNbFqPXqHdE8oe5j8y5rUxLGmCUyexyo",
  "key25": "585d8RXLrJPwvuCqQGCPczzC4eGxVGUavqC3iHCJ13K6BUNatsy2nzmwpQbUMC8RDbCAPh3HrkMZ67jMz8zTWYKe",
  "key26": "63k3wfJRoaAwvx9mhkoEZqu8YAo9pDiC5vYvuTSJqfVQ3hfHHobk7fkUJHsDVf4tMRNL6jjPMHdk59BSEc7w64YW",
  "key27": "aptc4HYyoBeqNevhoTM3nAujZdc5gpJvejwbQACRx3BurP3TLM6cQ7r1LVLFajJ7CHHteUa94inMFf8mAhgJz71",
  "key28": "iQYUivNf1AH29k9ANwYyfyePhnWLbAwuh5ghSdAyunCbLNHXwzgVw5U1KQyEMdB9CCLTwq65yyDVDif7BDzmyTQ",
  "key29": "5xrW5UZcxyso7pq2L47yjW4FzvrFS21dMkyAyfj3z5sKHunsG71ACtz6DPKBtrfiKd2AYjRZJ6Lbr6D4W33FC9aM",
  "key30": "54GphpwzRHcjm54xNbgrSVKA355VeRemMGNHCmpD8wQYEPjbcR6B7H5GAaM16kuxLD5WyFTNFZZ3v44qw2CGrtTi",
  "key31": "5dN6akwRav4kXqN7GxeNyKUhFW1M8rarFgPFZa56KyP6jg369QS79X7ZgUf5fRwMNdTxHfmZiF5vvivWWnHqNzc4",
  "key32": "3JPBe2rie4owsVeeDmDouQYeeufVX5ehksZpVNpjapsKstEX7nnZxh11ao9PiYwLmAHa2fuiTWBWSeYK8mbFUrPg",
  "key33": "5o1zT7pbiugSUYaQtvUU5BdZqAmG8JVGv5dR3xEYiTSXx6VcoayDUfTQ9gVPqcirqPxneeCYY3XgtKpBFnMw2vUe",
  "key34": "5M6qXW1Yfz5M48r3QomumiLJVYMbPfxNuWkMbn3WjoDEMr8Dp1sKs7r93qK9gNc7vvoXAuLJ3rjpinrPjo6qPw4T",
  "key35": "UZwgWygsBRhrPiFQXAmf6osnQTf3ysxXMYBYJTycadP9cqR3bGG4VxiNoKXgKUZofASb5scEnGUhXyo1HpoN2Mb",
  "key36": "hJX4csG5qLsJiioxzvieY4RN6u76yRN45QKWpQEM1k7AW5HkBXNns9knxUU3kQt4CCWd38RLCEvGaAJybqi8AJW",
  "key37": "41xde5jzVHNHpo7B1z3S3jJ4XLAsremcyAsTkzPKzeMqQM3LYm2CccvsnHJ28CfEvRJEzVNpXbtL6v1WHwEdtZr6",
  "key38": "639s1rPQi4V1zUMywziT8tHyBUexLpPAD4V81tWpV6FJT7icqFvPe4UnUCmQvtZ8f4wuadPtV6NPk9nX2ri9LPSU"
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
