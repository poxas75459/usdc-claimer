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
    "2Bz4aXiaD4jicWMno5nLD8TnkRjiR36R9WejfKgteNR8iq1R5QzBGiVn7F8v3Y36faUh3wr8s63UB19XjogynmTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Dr8DFQH9Bj393Ri1cgmmx16bYPkqXXv6eYFjo5rJxF9fysqeL9VmwtKwmVZf2zvD7YpDsVn9ntv3r5uQquAqux",
  "key1": "2Z7EJhQSEcaQAyGDeeKDqxv7imwWnoLtwBjmJGaLqWxwF6SSGncn93qdwoi3h4nexmZ98gXKFYPNFfHKRXTd7YPv",
  "key2": "C7ZCuhyUoGgy5tM9Hx9KopEyseTVzip8SwNhhRW352ADxoZ5hJF6CadVMeD3SagV4bqiqhuPN9qMimhqxcMtrwD",
  "key3": "3bqBqaawVMu9EEtXUsmt1WQo1sxenwHnNof9rpzGWKi2YdMQSAcu6WauHaFguVfGYdCZ3kEUqHr6FHLj8Y1AuDtq",
  "key4": "o5ApDqpA7TG5izuVwW2sBZaz8tP4pMNdem41QSTUWopcmhWrwxYdG8qVKVtbSzat4xxfF3n1du3M96YrHLZJdJi",
  "key5": "3Po9nrnG5iwcacweZhJJPy86or2R1LpvUXX6bkCNHXgaoaJBFiTPAkh63rRdahckS3pPGvXnGvxQ2g9U9AZHikBb",
  "key6": "41yLaruhC23vGMMCVECBbY8enYAxjYffLm9hEtmsWxnxPqc8Z5Py1mQBQxzrS1PbKbjQKHfps2L3hfL8CQuUjFVf",
  "key7": "3uAunNrmuUFpBFA9JygYymYp8zBnt4w72c28F4Th5rkWre3SobNYJxKckRYFAu7xdDFwUgYGSgkgGLFRbarMCJ59",
  "key8": "54TZXDXPijwttBstocVfcGHc7rFXdgZdPsxpXHgRDxqUyYzqGAkMrgBGvjdVkzUeXA7iJw3wj8bqY328tBWVKPJS",
  "key9": "2FH73fiUgFcLsETqQA9XXyowe5Rjm7Se8ML2DG88ouarypX6aTHJmmJxcToG5YH8pKg95je9BTCzzXgwti5ZXoAQ",
  "key10": "3bgJ7ri9fMVzLYhK3uC8cUSu1zAPPgfy8MtxNYLGdx59VcxyY1pi66x44qKBpSCiw1AW9QTKSios6LNLw1inHTfN",
  "key11": "55UdTaiKWPknjVqpXUfRhqkMhaEuespcmo9tCefHBpRwVsWaopD6o2qPK3dGgAkeDsTsSB42Dz31Cuof5HFsYaQb",
  "key12": "5rePdtMCSVKE3QWbMDa32uKxQRBhZ93M73gADHPS1Hvk4kf4g6eYq9wVdYXBoQ8SRmnzD7J96gBQmAidKjBSY6mp",
  "key13": "5Q94Rzn1bFzYNKsZMvM38m9LEjVUGZNiGZsneridbKcvRXyH2j1pzeDhefq974YNZR1yFLRMn9oYzsbF46sTQmMb",
  "key14": "5ESK2y97kotxcW2ztBodah4Ey7hCnzZq5xnhghm9GhP9tQchoSU5jVpjjprQPSq5P7AE1Z44tsq1hFdFiJwPT8p7",
  "key15": "2EF4PGuAPjBpGCH9ibAcqRbZGni5CmN2e33DM6H7x1HJN8mPtiRN4jkmpb6j4kkoCdGPVUBz7dCrvRvGN8R4vMPp",
  "key16": "5p4s9eR3ryh4rFPCELUe3S4qqpjYkgTDkQ418DHUAoa8LNLL2625K6aemryEqGMwgkfcg4JWeYEjBfGktUVqmHHP",
  "key17": "NX7DpCNYdTpJkbpWr1E7K4217Y7bxv3RK3fwz5cwYzBX9h4PwdAmVMJecMDrqdTp9tyYCuDKWyReNhAkwDkSDSs",
  "key18": "5i5mQsDSLdnDsgr2tQ8nCVdBrv1GnfdmPYCMWXgpnpwtPvVSqz8dJ1MLQZhNjnDTinvZWqV6oBnv6rXbND6GS8Zr",
  "key19": "zwqoxBhvV5PmCRYrpJGodBb8fWUNdHmw9m1dP2Jq5bXeJ6juhRwFts5ZxNEHb63X3ZQ2AJPHLf2TFosKoHQC3sE",
  "key20": "3HW8MBPgKY5F9yyZxeK4PS6H4MCeGNpShGj5FoVBttgdmeyzd6itXgy8E9GG3NzapZLEsW49oQrafssPJykEQHUB",
  "key21": "5zAbpdR2zzMBqv5mCNP3rboKDQKsCZe6mxR6Zaj1eVkvRHwScH343rmHvrbC42SwSvt9KBS1gY9mdk2NVyXGE3Fx",
  "key22": "5fTyVjtZVp72CR3s2zYZYSd1FUff8ACP3FxyeFsagk6wXZpm3LdLJQhaSqdFQpE24m2ZJVz2RYhVQ43BZYqeG8LL",
  "key23": "3FrHVdt6Bx6BiFMeicKF9Yd6bm5J71haqy4iqfPAhxC9duwvpbKhQBPVvLxc1khCQ53iUzjx4xz2UzctA9HsiCGj",
  "key24": "5cV23Te1H7YYrXD4G2WDbvXnZEJ18bQPpdDkK7Eq7yEVw55hMrCHS1MQQK1ZWjPdqtPhyhxi4GrBB4ZPJsXs8nXB",
  "key25": "4djemnezXdhXWB39yb2xotfBKufCmpXU3NZApgy5mT97paSyxsxFnCiBPSAzwShQtRTaraWTkJFqpXyLRmfmxCV9",
  "key26": "5cn3jsFN1KkVv9jPAz9Rh52BcfXTti1aQxwrrmff2v2cWFmKKm1cmifsKDdmUAG8NaSj96FBQbKxfKMad6ZjoSU9",
  "key27": "26DtZGNKtsLagUQqcibvMkuMnZSN68NMrzbiNgjz11H5KEHGffH2Z7Fx27rAnEydnExSmsGrf3KSFSJ7vcK8jiMe",
  "key28": "5hv19Ty9kikuBqUWG5Jtnpf4PzeFcU4tBgcesTohcT52tYK7ewbh8bZ1U8ydXBRKanWQSZnQorWv1Tjy4cXfUxPs",
  "key29": "21X8bdmo8gJ8UszUcFEJrzxRjztcd4Zgwd8hwqdY8b4GkMVxkqVRgdtVhMVtMJxVMtjoyPkrr2cro5crpPrY3aHG",
  "key30": "4adcmsXzmD4UK1FMk8XeT7HRMB5kkAJC4nD6xrntqCFCttctfxXvw3Zd2SzgvWnGpXjq7za5TyzNEoAvBsz3ycp7",
  "key31": "UrNnxU2RHKXxhGUQKfaqidjavXxBbsdyZdoEyQVELnv4kmJ6rFyr9fURHsDnJLZqkfRRALkBP6vmespsEVW5JdM",
  "key32": "rGfMCFk9f5ebAp16Kc5yh7GcxSnSJBQsav4KwWJ1i4BrnVzedafBXu3fPKv5Kj66uiB38PPSGG6ojyMNJpwPiGj",
  "key33": "5UFZgrGEEXk6FGnJeSZcFUgjaGdaHGWcgLermNK39KjX3K27JtyFkqJnhAqCyCnqAhPk8TpcTvLE4uYasAfxXHqq",
  "key34": "4pmLDF9g27ogFW1yXaYArRc3DyL3u6jJhgQg7TUXywRKL1daPUTbgov6Uaea4uAhuP1UYcHMfibJRMsrK8tv92HH",
  "key35": "4sER4EUa7qnYJnf2sz6R522t8GETCjEC2QVXrEHhVxgtbNhpDCyXBP2Eo7aTztCgKS7eyUqoNex1TW8WtE7SiJv1",
  "key36": "287DUbQy9uiX8GQ2EbTvgWXgTXjxVfG7GMcx7LegMCKaayBF8N6BpZQMxdxYDPYbAmL7gK1vGFjCqYKdpkGm1TEm",
  "key37": "2JSSJGrHq4DqiwS7u6ha3REPsq2783XeYWKPos44HWX5QvzNndRndDBVrpf68NPrtrAfy12LR63sW2oFq6uL2qWZ",
  "key38": "2m7ihmaDMLeYR45BzUZ3zLwwee4u86udLKUJmUx2kGiwDBGrk1VaGwYidTgeujUQc1YJQfcFqvGGun5UiYJBwfdy",
  "key39": "2Tt1rceWhJNhLNeMr7ejAZb52Myk3xK3BUWeJjgS2VRg6eeRGgX3cG5XSAzA7zzNMBm2K2UtgKsNbFvcefReD66A",
  "key40": "2nFBaXSrdAeYyQegJTQF3GcSkGQGQd9YbDFEwUp4DTw5j1fNkBWbKdb5aQYxxDv8PGqBjpgiWHsP2qEqz2y2mnuq",
  "key41": "2J1Ht8BS1EUS3ewDea4QuaDpjLfj7ZHs4gW7NVDF3CbUoCjKXWXx8S69gZ4zvfjg75MUEW7mhaxnssd9W3vND6Ae",
  "key42": "Ge96B7f67U2KtkYvd8VMbfn6xAu5CFEaMHxrbozguVgJ18dEFX3ceKoQ2cCtqHyfjBhsspUuczq5EVmCsnLBfi6",
  "key43": "4jKpdx6brR4JWJXXPwNmJB8kXQjYrWC5koGh8hvg2EKSTfLQc3Lx5FxTMLSsCGXW9QgawdiFxvBcXEFiH3ME53kB",
  "key44": "2hN5cewov7VxBjGPeovTneHzVZLdgh9NbDrDJFUvXVreBwswRXPSr9m8snrHvqmq9GxVoZ1nmcNHrSsdqg74GyJj",
  "key45": "3hpr58NsYKj5hngK3WHNKxBikZGmV79BTzxapHT1xocmKwXDWSjJm1NLvcfR87YiezFCuQcR2ZmRtKeSmbVgC2C7",
  "key46": "2JaDGa73kX55qHBMkKu8UU1uVGJ9j6vJCaAY1zza69ffLH8bcChyz4zyKmA2agTKssASyd6pjuVgQwPiJxq5BoNd",
  "key47": "5eoHeeBwb8gYhYwaK6gVXtCs13s2r8PNytyXZVmJRTQSU9ygavWtcSibKX9JJvKjZiq17Giv1aoFnfkAKAbyAoNL",
  "key48": "5ubv6SoHYJbTZjRm2mUvm58nLcxgXrUxh4nxWB1FAinjAM3GR2AQiTjwsFr9QGnCeRWnq2vTRWKqUzqKnrUVBCGY"
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
