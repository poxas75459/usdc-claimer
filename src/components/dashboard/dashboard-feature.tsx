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
    "5QnR7TvUkHvbwTyQG9LMhkCBzia8XTRbQ1BkZU6xSn67wW2SUxieVxKgsY31gT2tzpXn4eTzMaGfBQ8o8bSxg4fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CvxDEfEYURtNjy7LxcnVv6VdpcoHi495FRiCzauckCoeGT9PKSMpSp8Arj5DagksAbfPG5x1fWSHmyEMhwqp6i8",
  "key1": "4cq7ZnHPFsaX2h3mQJD2CK6Bwxuyrb3UtWtZG6W92gFcumAWJKoFnuFAxab7gmYVfBkNKNsfXKEgqYyv84TmxACv",
  "key2": "ucMJyhx8HqYs4zDqh6MFbBBJhEYM4zcS6mTYKcQUCfJ1GXYa5fU4o5tB6xEtgUFtiqs6fTJfPFUFyJTtWTp56bw",
  "key3": "5uzbR44isjnSMwCVCtsbREqqS56vg4uAK9FKhkagARgApCRxoSmLnV6p5n7CJAaEMTiy5WSg8JyCPY2bWAbukdU3",
  "key4": "2qTUW6SUp1Srid3z4NmE5amiwp5gWfNikg8hLvZYt94mXtCzKmZGWnyjSeKQqTQrEwgmL4RcBrvSRwKzx9eud915",
  "key5": "48XkSzuNQUDXWsxEFT3T1HmBGWDidWzbVm3aNekqfqw1yxPPvtiGh3vQKEFQUrYaoqr1v58XRG7zqrfeAvgPANaJ",
  "key6": "3AKzYDjQSmwbUXbDYG7Fx4cGsXxCY5ndZYLAbxPf73pYDDZK3sJFTXri4LwoVuPpRaK3zDJZKTu83rBLrvcttzK7",
  "key7": "2wxib17cv9yoddTuCPYsGtKKrRhVkRtshwiVvMEJxa2Zwpu6fehVbicEwRCG8kbUjaJJHRy5aWMVvq1dHJa8uiK9",
  "key8": "2cJjeP1dJrbo924etBxxmEhH4WdJgANhJgnhg3AMsTbweYDeJd9ph8VWP3bcH81g25RMwGrLRPrwmmu9595k6E5T",
  "key9": "3Aaj33KpAproKnvVhgQ6sneoFCVUrXFKFLXcAdrdHYrjRp6dEFGrgSWY8cH5r1btJts1YNWda4ADm7abFYJFZ7h5",
  "key10": "2rRcsmXj9JLBANuivZxrqgtfyyQ4t9C6qDsifaS5nR5P4KvwTtD1m8YnNFzm5xJnFpe2CVn5nEQTWog7M6pP4KNo",
  "key11": "592GrpgDJNNNGRDug7nbF4H2MUU5gd3iWsNMBE2XEVgXssszbeTWWJ2ZGGNEXBE8nFJZkyrUQf1LMAYjEmKPNCRz",
  "key12": "4YAHqeLrSAPJrBNEQgeGtCZ5FXzafXdKBStP7PWzTyj4F2jA3FmMn5QX7G8EcFcLuhDdE8tq7v4y63EoxCsGWK7i",
  "key13": "4CjfZLtWtPPuDtXYW2s5ySo4tmU8TtX51aDmQGEghwAAgXddFvb2VvSTCse8wPLHJENvrCpaJ2nxDSHSu12zQYAM",
  "key14": "JTVyosWcbxqcSxCA12z3cXXE6a2M8i9zi3LgMexr7nx9VQ4mHmK7LET5Y6bkEoRMEk3PWoVeqWDevj8cv5KRZfK",
  "key15": "2E7MVP7JGxrpNM2288mn8A3zpr8JT9fxYfohZvTKyi69nBNP58zh2N7XvtAfnTWD89okSUAtoYu5vDaDaxhcw64Q",
  "key16": "3JhMKxnZbeWarooFWmdCxgRhZX4URohhkStCGgGsXixtHGAj6ZgNV1gzboEW22vUFumAGejXYyxX3Pq8re9zYF3L",
  "key17": "65Z1piJN68fF7hZUcmQborFKLZrh6RfwAbUyVd1YPttsAW2DifL53WFy24wwrbZFSQpMEVWnH3DQZnWVFVS6WQLY",
  "key18": "3mYMcQrUkEjxarTHfqFKhXzy3yGWLxbUFQepc2aRGw89P3jjQfN5CapteVNj7aaiKVgNntQkRXSQKQ94ov4pHUCi",
  "key19": "2VQ4V7QDMK6G5bfZQVrr7WWJpqqUUNimzQGo2QbGSkKMsUPaGr5KquBWuKVBDr8aCoF7NaBZ9bXFkvkuUkHbMo64",
  "key20": "5LgcwuiecFHMvkMBdKxgqb8i9wyriUKuzczrx9ArH18U6AkYAh5gq5zGXuJzsDxyQ9smezXsYAaFELrS7qxLL2cS",
  "key21": "3wFmCAbGyJFTjkcEccMixD6qgivn4DhcVyu3jCdTbiZnMAWLG1xwXLamj8y1o2zuoo6ioeub2zzzUK5NphfHK9SX",
  "key22": "3jkB9EKFr23PLiyPLTPiBHVLE2mJ6aUp4Bak8ADvDcL8TF4Wejg7fxXGqPxRvpWF6nEqpjK9Dk9dF48bWv2pxLdq",
  "key23": "2VFurHUHTWrNA529hdb3MYUVSXjUNZUoFpiULp1ojGZDysZKw8DDCtCT6ap6nGdEzP4qNLYwkV5JYxPjQA5MPHZD",
  "key24": "62Qt3g3tENLjsB4TySc41KuT7V7YH8U4wcdS1g4myTEcTTDJCFe7MAdhkDnEfda3SqF5BYdjtKJNcg6j4QRSJpNF",
  "key25": "55jCNujkCu82qH8LyM8TcHhGhj8b2diAw29MdDiBNAfqUuyryzSWvv5EFibmfAy1GURLvgKNs59AXkmi1XrjTfzM",
  "key26": "4dpsBxJAQ4u1hm9eaPmNYQMr6R5EkWqzizgeyLmsavZnHgdwrFh83LBRR3YZdfWjrV7mX5SMzdhDMLQPJsF7EVmC",
  "key27": "4Wc5efxbudpt4GeDykE58BQiE4wYCXxR3AxiMbPMUh8FKCeacBSQPw6hvTDKvRRYAXVoZhyPkNwV7DK4Y64NQhdt",
  "key28": "2BCZj6CpvUATXyRYUgH7ypJ2DpfRvsDbLcGSw2sXcRxRpQfrCU1aw9oRjX9hMb4GBnrpsjTssNtEq13aSM6gA6bD",
  "key29": "5NbDajUHcPe82uxfXBsELUmseQPWqatzbbsnzHTuqc3GvCyNKMvEP3CSYLjGXdbtjWZAM3X57CqfYWUJq3fPWtNn",
  "key30": "3Fc24vpv1h2iSGFiCz4QoRPeiJJDv2fHgmCHsVvkgv4AG75GTP4zREqLTAqDLLpEMUGG5XB9asp66e8HReoxrtqL",
  "key31": "5dovoYD4md8yy2A7LoT6wvaKPvaHdGKGJNadogdF15vAQhFHf69fXPUtkSJkxzbtYSRMcqJuXh1uXQHeApFgsQ26",
  "key32": "3Gswb2TM6LMESLKBRngpNagn8rpSkhUBjwjSYXtreaaqBT5PWRQ2UF8d65JLaX8FUkT8m6BHWtS9ydV2qu5zzbwd",
  "key33": "4hRU1NMH4tjA4XiWTjA3xfvFpkVLY7Chv1FXC769wqJahusrGRm7qgRU31mfyiSR6K7aYAAHTH689wbgP7WPcr1Y"
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
