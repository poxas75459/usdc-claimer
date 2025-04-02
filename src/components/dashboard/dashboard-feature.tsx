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
    "49PedhPJqLs5jt2pEgss7uC8SdL89LsuGYtukmeWQfdcMfMADAXwCruQLz6cXVKre7g6HevR7mHgY2w26YBe3C1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C7QjsEwTAuekhXgUi55tnjUb8uRaE4pLkEa7ZWi4iozPKduFwk1M6M3jpc3JgqkGSh975FRNkyKwcBav3qs7ThR",
  "key1": "CHht9jVnMQUB6bxA4WfaavKf5zgRAURCx5vceEmHapxEdMbuEXs9A8yKBQo684wGg6mqnmAmpd2sGAqhf7RgsRi",
  "key2": "2PR7HjFuamRTJyuRVXYnCCvzrBi5TVU7CMfMxD9w2R5czqScMdsyTWPaCzw4cAH9oxo8gZLLiJRFxk3jW3aVy1hp",
  "key3": "5wexVwk26qYcZMqYQy12r3ZXP6jENwnpN1ur6ia5hkpgpcVw7mUjnMNyaco8viMHKCkUxSQZscDgJ54wPm2BQQtr",
  "key4": "2c8CwPdB35P6Ua6DfW8uA8T5NdaPyYFCekgTxoTRtv7G15wippT2c6s9eisd6Vrb1tPNd4Ri4BYVNCyCeLrnioi9",
  "key5": "3asKzRYTYio3c8dz9Zz8MU9qmxtjm4hJMfo3eopp44RBKEdBddpcj1FzhdRRAM42EGhbrzgoZijtbxjKtLyPWKh1",
  "key6": "2VAv9A1FDdh3LFK6JQVFiG7NC6Kw6iSHKCoWfZ2jaaDyBVKGSAMFSKL94cGn1evYPdABj2CzP12cQMUiemEYsXKd",
  "key7": "35x5UCBDiuTzY1chNUJnLEw5LPH9EX9ppNKUQmE8ppWP21mgDsQWWeYdhEMjPmWkDF9nqb6MK6HyL8DZ8PmCsfoT",
  "key8": "NzvjbbpJBp1soYrb77TRE57koJ6RijioUMRgqMSZE9ZG8zjfLNmvQgGW8bGwWf8p6NHaN8XUtgYF8Ziq4Dp3bpk",
  "key9": "jK4NrxGc6GNB17jCpNzjBoChStsgTVzDy9HSexBH1pXv1pbihSE2e6iB6d7NqN8Zyv29RQbSYuq2G5ERZk24w6F",
  "key10": "jbkvXWB7kgwHQBCTPCwX9trvcgCbY3fn7R2zfttaZk7wecswsZNDG5MF4WnB7ScCEARzf7XUhYnnKELWkboHqoW",
  "key11": "2UU97G9M7hM6JTeXfzf1GuLpTXHEFDqJMEiKUdQ2bbc8HgGEU8wCDfFxXNy33i9AnKq3XgcdChb3pvpPLtwtHSNk",
  "key12": "MqtcGkSs7u8MfSnytULAgoq34Nv2om1HbeorjCfAe6ug8tFJR4r55LJWtWXFfr1axNbbKMmPEfoDf6Nj1L2ejvr",
  "key13": "3akzLimSCBdwSoniEHZN38viSTvSAnJvQVzhEqSc2HDYcJj45UjQQQ9WWQYsos6zLkqNu4cpQoRQhP289RQxoUnY",
  "key14": "TA4bbJ57TrtdRVQycZ7GDmZUFMw7Xy6Qxd7YdPuk179beXt6Svdu5XAPjQGaU7XgfdvVT1SMAUpeu8aRCxbsvJG",
  "key15": "4taaCT2BN78zJhECnVh1AeDSAuZEuNn9Z8MzarBFLiw5zuGc1sJYQXgEs4ARdqCaPFoK9yUsieMMrUexh5JrwVgz",
  "key16": "8E3mTtUFeYS7pD1xw3aMJmuVVJkqzuSbVgRBaXWwaQoLqD2dZJM6KiM3C7mhDreyoif8FQDiUYj9j3wT7RRsm54",
  "key17": "3CUbCTamTkwzG73fCmQCmiHcKfk6a18jqfc5GEmctLZPz3g73q2Mz6kJt19UwaeEaKGhSQf7RFkiXT1Fgxqg9khd",
  "key18": "wddY5jWJi37ho6KLoE6yjzdiyPn9BAdxSfCDxmbKNMaYND6zhFoeEXLMw36jyk1nFgVcgkKo6J3cGmJZTwm4Pcf",
  "key19": "qkmuW678Kf9YpYCNf3UPaZ2NgFEA9ikwuhEk7DsUfsHUQ64s2YjmcKtXsTPSu1h5Y3uYjgXDscXQrA4kef1pBqr",
  "key20": "hZeVB1Fh3U4M9BedNt5mbCCLHPWAuLzkqERnjLmLVh9afUPsXrJGgSySrzzmHfxMe13CFKp86Hsx81MmGF7MYZe",
  "key21": "AAYycfLvr4tZTHVjmx1v416v15kucRT7TSZt3SLu5RSs7rZ42SzGcd8dnqRU8BptEbZMds9vLrEuw1bVWt2oxLW",
  "key22": "toq9x6qX7KKohuSw7KMFJG7xiu5AVUCTv67C6dhF7RPa6AxQ4NN3eDQYUKbptznYUnjJft67hjRm6mPKhMU8sqK",
  "key23": "2so3D2xn4SrW1rZwSwSPACgynEPBmENtdeEizmDzoqAQCfWXyfCew3xG4wECg9ReChYJo3VHMeUwodzi4TT2JsiZ",
  "key24": "4g6dLhxP3XGbSs3AdQcZYDkkP5ZcazssBgbfssGPjYxxwf2xUyZ4szsRHFs2niJ5hsPRUmSCZ8cGDdQuCoj3no55",
  "key25": "67ENQGqsKxaSerHPxQFcKzowLwWT55bBoJpDEF37fFCK3UyPCZvvivx8FRED1j47RgCamvaToesgvfcguhQG43px",
  "key26": "h9PhnCiHFcitzU721S3yp7k71itChjb4tJmgKWYBzj787ZFXFafH9zfkNUkLkjD669N6dYYpt63mDmWgkiJmKfx",
  "key27": "3X2935DAcEdik393pJFziUyGDceqSa6bX2rEgtSYajNBCM7XFfy99TeQ9f681zCWEf7nvfVYToZpCtWHu74Bb7sp",
  "key28": "iLjGpTSokNyzESRMF17eWeCUbLUEz7gmybqoAZTwMZ7MeLD6Rr2AsmJ96qSJ8dNpDs3ryaRtCqJqPAVQZv3acvh",
  "key29": "mv1wZGMKoLQGEaVBE9yPfKEpvS5HihkQBmofj7d6amh8nEVwi6RcuKtJ8c34ahWLwihBDK4t8VcaRLE5V7nt2KP",
  "key30": "4axAjQoGLAxCThFC62HKpjSyESfaRTVS5V87s26jHaPSFBR5nEegSf8dtJJG9c4xqJkJhwpwiZdE6FKyQDCN5Taq",
  "key31": "4iiS8MaLuTz1ukPvywpa1WU5ngkYgAHuuWQtLQ6coPbDVNzXcHgN9vsJB6NGTzcgVJRha1JL8sJAfh7EN8vdrvZg",
  "key32": "A5q3Fxb2i9mjHm57R5RzYFFBcxs75UEAuWQ67hx6m35RWVi6K7iiC2FCnzArpu9UC5oKGBpb7ho5bnECyge1uXq",
  "key33": "5qrr3yhpBth1ydX2ZsoUvd1MjGa15YqAjrYyaak6Hy3K8K4dsJx7pNedxxBc2tqUu4hDQJwwRbAUm8cNGhjvsRkF",
  "key34": "wX6YqSJzyPaK4BaH7FMgz4eJfE79Wim5qr3VWb3TQdFh3co7FfXw29tp4YbkdCwFFJeR8qxiShCKCPeB4jVWPiY"
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
