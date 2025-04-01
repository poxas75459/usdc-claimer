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
    "4Vn4c7bn7PSt3dPNUmA7SkE49spwVeRbWEmEsj45jrN4ziEGEEq5ofSJnra18w3jen2h9sofCiMZQHnxQk54iavb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WMTrE7pJTZ5JfK1XByosy8vzK5WUBq5fJWAWapBoFXDLaQK5iEHkDSncTcHH4Q6k51KYv7d73h2eC4W99tkvNnT",
  "key1": "5SDU6mDiNTJe6Wk33QZnwqpUbUdANGxbbYk6U9ZPPiSD3H4ARTWkiAG8wrFvn84xM1sSSjxouG6EtoxT7ciFNi3L",
  "key2": "5FFxoJoevwWnnfYSEpYpC3o1NhSJAmi2oD9vFboqLSXKgGcUyMutphf9UjDY3eYk9yLtAmdy83Q4R6YUNb7bD6f2",
  "key3": "2JahF45hDQbaF3ftTfwKv9XQnxB8vL5fKjA4pMaePCD7hbv6EhJ6xFtfwzd9v8U7Hs6iXMKP5jovcvtSDVKKtWAU",
  "key4": "EoZA6LU4ugqmpv7C2uZuYn53HpggBDhbp17fLeaCZtgLujdjN48HzDyYmPRfnbr4tAvN6qYcJus2LCWG8f6D4xS",
  "key5": "2uVCmwtoRpVMPX5mxPSqryzQMxcaa7Pbzmr1B4oJMiBPGG9ij452vzPuG3JnGZWt4KCG8UdMu6AwwsQdD31L5yBf",
  "key6": "3NSgXmWi56RLUwov1BeyQbZUSDmCQnp9qcJAcQrXQS392FP9uQ9St1xVrGWpfYqQ7Sgm3e2XGdPoxtoBip4kjQD4",
  "key7": "NN2KqJzxaHdNKovMso3EWcEH13msp68ApXdwQ452nm1YVbxwjcot9RwjEEuS6pdFduEqwUgLqNWKX1PHiFBPtHC",
  "key8": "363rSgC6sySHvs11Wwe83bJU71AEBgNCUaPNH4k16FxPApfkDs1hc9mqkWCxEyeUH7sHcjYcVTGV3cZY5m8gfPwz",
  "key9": "3kmmMMi73wVQLxGAogFnkc3R8NuSsTJgas6NLNXbNFMb8xmZ8ptZi34yBzBovtMUpoQ5K3ysW254cZpuiyhwqueM",
  "key10": "3JXhVZdtDRkNpbbDJTNfPqPD3SDosXGVvFSf2ahC9vXvkd6G87ny1P668KMZrmEeVWpzrkYR2aa3uZkw1drDGagD",
  "key11": "2V7teqiinvtrcF6aM7ykBb3RuuW5ZkeM6LfCt6gCGdLUgYb9nnSSq8FTdfiy24jt7qeyy7U7JhusPAjqxGUehqxu",
  "key12": "JZj1BJtXpWzYmif8MuiruxnyMBRgfBXKoUYW6bZSs7QfuY6VCS4h1RKKjg6AGQ8BmF7bGvuA3qz3x638tJCeJGz",
  "key13": "3YWkVK7VvJRVjErvkmCMLmMHCEYoTZKiiwbiRH9M4h7Yj6qQczX4JkfWv35B9DcZgeCmZ9nrK5StAx39JFp2bvyy",
  "key14": "3dRUcD1aMKG3Qimghtuto36YmYczeN7BCup8FHs1qNYoR18gWR1VXkSLNkwWaLMnumSvSi9nKcGGR5uFDRZGPkw5",
  "key15": "4fZRFfLJzCHnqFjEgxBs8CTPbyZNeELuDq9WnRziAtaunFXayGcF6ZGjpMo2jwF3eahbRbYYP6sf7BWTYryR58Yn",
  "key16": "3qocjXNhFGT66Wee9YxbuzwBPsCrv81PKkgppPjccXoZ51mpMMJGvhDwMTzK5MLVPNVeRBxpSJ9Pbmd3C1At13Mu",
  "key17": "5TDcf3Qn22AzfU9AYDMQrXkH6Bac3kdy2Dee2Ke5EezQtbNPGDpUKNDFhcmzdwR9iUjMEyEcUNQY9LUzGvQp8Dxn",
  "key18": "3SmRrZCs8gCqBJZnCsSvb2MyJ3JBqum5GG1jDWZVgZ3KUvyGsejkBmDY6pkrZm7YQW7xMVZde1GpivzQiRpp6mAL",
  "key19": "BYa6WPfSYT4ps3QBP57k1JDkXXxbXaB5a2LFsFsaSdq8ET13Xekr7V9HAQSWfNGGR6RX6qGuKju2CZgHSBnAwp7",
  "key20": "4tjK7zXx8kUgcEWfLetaowyBD18uAHKXYxzjBHoTJzcLGSFK9J1nS4JjGWAwQ2XxaBdEqoPw5AqbQpNKxauYPPx8",
  "key21": "39p5wszboehukSvLJvHTYQwGnWAqRpmQ4pmJxoJRzgXTASeREVKZHDprbMKN51npnF3vsQDbQyPVCf7KQ1sMSypL",
  "key22": "316m6UA1rj97N1oJPHKoq8wFZeJpT1mdasys6oUb1acRuvUk5V6vuiPv1BUxGA8ea1bbdwTLPs88rP6tttiW9KXE",
  "key23": "55n2JBPcVJRBvVvxu28T4tcaoBZCTY8dV1rbrvysca1jwL7ZVaMokei2VsnzBLybemW8RaQQHisvfiqPpXQeG4ai",
  "key24": "2eHry2w4xCH2Y8BTgRqa9xNGPxscvnGcuW8bbCMkVQRPKfmCNWhHMs819gM4KuwXm12LrECsidhjdbJNztG1JbYM",
  "key25": "4f3gihjSyXcPq2ormQJJpAGqEsBtJF7odaDuJwNmQLUt62MvfTkpY5VHsZ65CT4Ba4yYWK4zj1dEQHYAkXoAxhiQ",
  "key26": "4L6qEL3XBeQuaqT8sCBeTwDiPgYnE23gienaSVPM1Cmi1LivzkYBxTWTkJuCBACriEtcUPsH4KijdfS5rH7zJNKZ",
  "key27": "5B4q1wCcbmgrdGVFk534ePquux22e8rdp7N43MSFHCSZKcS6tisjx1kPEMTGGdkctwPaGDsGRvU7aVWUShQQ9qaf",
  "key28": "4JC6ihDhN2MyQ1A6BSjWmio31vB7RMbAxbHy7MV9WmMkMhVH6EvQt62ZKxUZ8nA88WFYGoBAdjkuUco3NKdyqcYX",
  "key29": "5he3SzqVYxLVbhSxV3B93EjUeZBdaviAv3etYrh1BYUS3gET6sD1ozKZxPrnBvYez17np7VXo8rkpkZRwQNb2qZg",
  "key30": "2DwFLRdiotYLgVwdV3cynVu9Vhx4fRf94PSSWFyVKDUBtnWgpktrTfTchKCELCevso2GyDzm17UdZeqgbKnD4frD",
  "key31": "4eEWE7W1dLooXSuacqMWJYJYgBtCtdbfCBDXiKtUaUUQv6imoCAAyBVRSgG1ntUGT34G3VzTBLni3wAZbmGkNheq",
  "key32": "3d3RGqs3Cn6n65CxecAawZSq6cd1zsBWtXiVHiSqRTYdMzETUz4q9H4Pc1JF4DDNuv2DfWnxzbX2LRvprSsKY3mq",
  "key33": "eD2GeKqDdJ9t34Efb7k5eD511npo8hdt3MwchxiesRuX9U5oMaGCcwPS6ae57EqeBCTQLqxgzekAb7qgJDcTrgk",
  "key34": "4ApbHftu2Uyu9rUFQWREkUopexvnohorUoGFtWeCFquJhV4Zy5m1PDQKXiFgHWL6Fsy92aZmbYW3uptQKLWNVb4e",
  "key35": "3NmCyHPmfSuPtmvDxTKF2VHWT2cFS3Z7GBZy11U6PgdCYYnLxN9yrJ34gqLTYTapcxTJULJ2pY2Eo5WAEpt9zKb7",
  "key36": "5cRFrtobvptFpAycLhfxWMRXfQmg4WZyrQBkeNcZyzTK3MX38Hyxe8Lnxjwg4T4c7UYTVeGDpAPvwCkXrQD5N6X4",
  "key37": "4rTyLqWcj5SPEYCVpi2PVnqJWfVz7fsPui9SNGfC4FhkxdfKuWrq2dRwCWvDYgRun67tXJMM2gfj1QQYWghp83QE",
  "key38": "2EdyJCfPSza4fko6xsVjvdqjV8A8iPayduGxm4gre5hbPaYnwJ5mr4uog4dx1qrafqugY6sJMk3PsAbxGPpMASEG",
  "key39": "5mAVNdF9V9JDMyWNFk9BAxnY4nQ95RxA5JWTDH1eCGu3UvvjNSTKyj4tzP3E9Gnsp3PsgjV8TpYeKoqHtubHumD3",
  "key40": "5vkuiaNn6VVwxcGeKKahL98765KekqXfRkGxu9zFzakfnKbhrUAbPoYvcpBnydWfjbFjDRtWGX5T9Jg998eXzv3s",
  "key41": "NUwGLVwPJpWHVE9UmqyovxcVhMuhViJw7PsvevLcLXYojkaUrc9WAtpsdc3sPAT58vj47uf52sXgHFhJwpCFfct",
  "key42": "3qVsn5R4skdMrPSwo5xoeZ5eSWHZGKwCaBrgY6qr6zrNfAb3xhH5JqacUd9bZjZdVyhocJnkFtz3oJwxABmjRRqp",
  "key43": "65rFKc4a4morvcjP4VfQv7mPKQo3AEhYHZNjwB57rynGPGvi8mLTqEkpiHEMCPQN9UT1Jzxskhzkn9BnuT4KFC1p",
  "key44": "4X5L3PCd6Ta3BS9M31ujaDTHbnAK9RxWaSUZokd3HgXGvQuA9pVvvfAYxN3SqRC57D8Hf1nTo6RF1MvDtRptHEmf",
  "key45": "63VBgoVbUgymjHrjtvioSsHXcEH4mvtAzLNVqi8q7BLVoCpFeFSPtjP4bzkrh4Yyrb9YjmuPYn6JP5mwqS2SvaMv"
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
