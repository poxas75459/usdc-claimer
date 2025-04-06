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
    "2rJ4AW97F2CBHWstSVufcXMT1Ha3JzrHZ7SRzvQMvVwbwHuztbqrqqU3n4rSjxgy5z8XnLPi2TXQuV2TeWTq77EE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TdSHTKNmJ1UKAPp2mdbZ3aRenqzbqLSv5U1CRbvBVp33fA6gdyUEYGaozMazvWRTWmq8h18T99fQ2JNxKLKJK4Q",
  "key1": "5j6qbKiS1MftuSkt78KGSiQM8CRZjHMNa5cpJmzbcUT6c8kRMJgWYC7NxwguZVzVisAsAG46Yh1bmcdPMUcpBeBc",
  "key2": "58BXu7oN7Vqa1o1TJReU3imtiYFBeCAyZDaMSjk5VNyzyx1rbCi2cU6A82DwJd8tPrFjtcuggkkm1ziHFx2k9ZR2",
  "key3": "3TDj1gpJyi8ZqRejVwLR9agaQaFMx8N7hooKovK8yzXg5jwrcoCr5ESkRx9hC8KULaQ5oUFd3ftDrmR1EtxXNo1L",
  "key4": "qqG45gnYL5Zf7fX3iAdH8ZNmYgdaVy6aHjLytCRPogkZpNLnhXVJY6frF93nvQkVD5DEN6Yh9VshfjJArZ2Ybnw",
  "key5": "ByriuDVUAPeXasaArKDjSipv6ShMtqEVS4GjHFgSan1UxeNQ6fH1RSr18M1hCz1hxpkq9puJ1FE1VWAtXXEP44z",
  "key6": "5p7ATuWzYawwGiahoyyw82K6xx5ByS9QmSrk6ikWQDLs9xzDKvnTe5EjASptHrjbBm1Ehm2QFdfTi6FqSiMNoSf6",
  "key7": "vW2VhQa8p9biMzBd3KNDmqXMM4UTC8xNDmPRPeGiWYhBHay9Td74bzru55uMY3wh1rWzj3QnNWrykNeYJNt2KRj",
  "key8": "p8ErLxPTKw1qyNMAPs61iLLMXN6j2Jh6zEvrotuME9mjjQMSqnLQskZw7R8udBqgHTWCFqeGYzEPTZ1JtegXq87",
  "key9": "5apFh8N23Es7xgjm413Ui18ZM3rJMeJ69zgnyCfGWGXJKKosuksgcMXZukiLcY62cVHW2KjYVQaJ2NXxTUSa69Ck",
  "key10": "kSi8Fx1iw8ZXamxpp3jmPr4NYkqSpRAWCJTamZXLkEcpmM9KsnSuy24bRSquRbV7uK5vPWir2nVbDKTuFsz43D3",
  "key11": "3Nk8vgaXcSsxNFoipCiDuM77Xs8KfkiPYsSYEt8H9TVUZ3CVxB1Sa8etLM3xUxhFn6srCPfesnsEfJtffY5eb3i7",
  "key12": "3eUqhPgqhKxw7Bzvdpt6BK5xqvZ6bTZWWSsKakSGYmnj2FAY1cssqamqRrdqwxYJfh9fbCX4thYeT89QuKEFocvq",
  "key13": "44U7n4j3Hvn7r3WJTRrefg6eH7o81o3F2yf7djXNad9tztUYatDBWj21B1BBHWzh2Va9eUcocSnQ3hLZZD7CvjSj",
  "key14": "43su2V7EG2eCtHohtTjbv5BhMTMyby5iuCrSveFPo84PfisPu4y1khrBN6893spS47NG6wRyBKLFqcqBdL2ski2G",
  "key15": "hbH9sX93267Lx1tx2LEYNKVjz4LFYsL1gUy9bmvXzs9HF2nHqGGDfcjseqovAdTowbQNDaRAjR3EhRcJzQaxqds",
  "key16": "2kcez3sH2H1Jf9C7KT4998VmrvhzsVrXgjWizUDCqVKXHV9nQoxmm8njc3Wp3hsV6DmFhmbkoteLh2L6eHUwFDkk",
  "key17": "35zLGeWvCVQc9fxvsqARafComAEG7R4N671qpipWvZcv4ssEAQGaBTJugJ2LC3c6f8FK1p5FADJUxQhr1kcRW6F4",
  "key18": "34qnzqzTE4pR3byDs1NFSB3USbyVFw6ko6mKXRWdRNu9oba1QBwWAN2mxeAupYuFS5mAx2wTs6xzRnhs2iMMLVfj",
  "key19": "3aY3i8jFMtphEWnhW9vWAzrQd1sz16qZwbB1xEkrxfnv2CFdEfTFDP23Prq7QWhSJHQsfywXuZDy5xFC7AzFd9Ww",
  "key20": "3veEQaXPsu8n2rtiLsqoHCFnNU4AwtZ6NJZi3f8DsVVjF9cAj7EmNXvp82rAoQKBBiohgRtGWT9wm49Y295fDYyk",
  "key21": "58ARC58Fk2oFdpUTxDWnZBmHg1yaqmjq687XUDZPqLhPZfX1MxriYtfJBH7sgyHtNTh2PvsPSMKzoSnzwEMxgVmc",
  "key22": "4jMsdTsSUNKWiLbRMP32FFKH8ejQoFNBh25SELTjr7EfEX5zmA8DP98JTDVnRoL3HD5UdmuDyw1zM6DxxhkpFfM7",
  "key23": "2jem57rk4tmPAgCFPnR22y1LfktWjTyLMZon2Wkqr1ioZeTfPZ7BzbHPUtLqoSRaLPVPY7QK3JSQkuWKsuw5sYZX",
  "key24": "4kAGFbZ75E8CPLGu9gU257KqoWDR9qBwp1s3RGhqjc15bz2dei77iNinrpp7JEwG5Fm55qx8XJSBeEANq5WRbGna",
  "key25": "2XVW3TiS3tB1kK4A2RfmawedbWMLPu5segC6pMMb7UxPtDpi4Tq48gYGCrTbfjutj5AZusv5szCaaDHZuUpiRx6d",
  "key26": "2CVqwRs8w5yBy2GqP6ghRXJ1up38stJqZCu6AcdpTArCZw8bfQxauL4QEugckDZhGvKNQByo8pDzK9sUD9Z7jh1L",
  "key27": "62raj9Gzx93xgb7sCGFB2TDHA1xkYaf5gt8AwFfvGznwnEWFpKuM7PWM1ZzFDgGpe5vVDkubCKuNNFYNc92XhbLr",
  "key28": "4cvMyFJM1t53cuyFfvBGCVeWEbBnzdw4hAcrFwsGgJpmdc5udjRbESKbpCtKymDrUozqseDgTLVBQu9zVT72wWi1",
  "key29": "qJX4EnpaBkdQTyJTsVhBPa99gBj7zxn4AMx9GENoCqokRvgvUv9FwrQ1YG3Vc5qQiLiokX4Vxg7ZQipvK2Ce637",
  "key30": "5ZanqrckjcmCbzmUtL3m266wo24t8fGLWiUofgt66Amw8sTLHBuXGy7vpYSYcmp8PtBw5HK1PZpQV8V9HxE5E2nk",
  "key31": "3RCtGu3YZkvHrcF4ghX4uFV18VvQweinUNXf1JVUPqaSsN4wf592QMb6uGwvP5NwPhTwnnLwMadGVBKEGMiunGAB",
  "key32": "2U7c45KmNt7gp7zhrdLLCC3xDfexAncen6n9eSqxLHZejHb48q9QnSGAiMKiDYxJDpKG5yLQpg9yd78Fi3EaLKGL",
  "key33": "57p6zFHrkZfCvoxdnRd3bsHUfNGCmtHfW6e7N9n8LgpDsYdCJz2PhTKfv6LiMTqtMQqbgnNzhR5J52a4DMYA2xx1",
  "key34": "p7pDoN8WF2uNhwMLx3uEX8LoYEscoYfeJGvt1GDFmud4jaZJsopvmCnZzGZ2qXEL8PYC1r7Kweh9mWVYB9YVdmf"
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
