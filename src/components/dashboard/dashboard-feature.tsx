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
    "5FTbWQYLyZb9DT4Rq5aJYtDFv7jSLP8piDQ4qkH866YdVWPjj164dg3B7XUvpVgzqg4M66QLoBUWv9tvxgfhtNFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kZNKtbpS6QbEgspc7oVE7U2fxTTh1o23mqD9zjjYVSVC1gCVJf8fxDJpU2TTLUtbmFUcNfWRYnT1ngVBqWTNN3p",
  "key1": "d8a4eDgmvPae4Jmcjw85138T2JFPnBs1cuw1qWgPLcHYZgVsrEbYBQmC2ETHkGb5f3tdRErQ1BnjAX5ff2LrdZp",
  "key2": "3DHqyLGQP1GhenBmy12k4Zo9MV1JHzXX2CpvjL6Muiwu6ySRMADLNmqWAXZx77af8ig4HDwKKyvcT8QqWrgmq6Gd",
  "key3": "5YBw66bp3fJnUe3ekxTjGqyRHWaCQUiAsWeY7KB5gSyM1HoGBmgwhz5j51rCKAxZFdCSfVSTbt96nNVM88s5PpCH",
  "key4": "TjyjDzdtaixa4ZYEHnSFGGcUeABdDSL7B24WT5MkmpizgKjWZ8FB9eBT4MhDHF4hKd3r2P14yhuSzu6rD7RaQut",
  "key5": "5WizHxXWu8WsMXWAHCCkx2yQ5JZAwcUrGzJsJ7sYsZPm9693iVDRnpjeh5uUunmPWrb3mw15KqeUMiMzZu9Tjiu4",
  "key6": "5Mn4YirKWbaSuo3aXcU6SgqLZC2cq1hZVeVCJyykMLTExC8d6DULwTXpU4dCuffQbZDXRoCyjBjaMWprWSFx2K7W",
  "key7": "zbakBfP6YxW4pMy4Rcs3xva5rF2jqSaoEckQnhA2GcQXUCokPd6b3HThKo41ENaYK1Rrg2gUyAN2G7XeJ9GkyFA",
  "key8": "5o8Tv1grJXL7BUXAfh5b9CeejjghUb2gC1Xp57RNXqLMsAHCVyctua9Py9prkDchNkYbDucdso66rSyk8JRirckq",
  "key9": "5VBxW7TwEjTYTwLL8YEiJoFSjZdjVJViiBgphBGmMbTDWt365ouuPQMHAaFoPg562bJyqkr9cUGoDKRHzWWQx7QA",
  "key10": "53pME7gpStfQsHCEEYGLybtoPRmRKAMCpUk9FpsPeZmKghuZrehY5NhRqzcxSzUGmCGeGwJcQCDPcjgDftDgEnX4",
  "key11": "28qg3f6aipWBKL9mZmJfjEnFVotDkfKhX3yrmjjmUCDmN7Bnn2zwfobZkMNEiC7Bes8YzLPU3Ty9vFGUCFybigWY",
  "key12": "61KzZ75Xa7GaTXuXSdSd7SkPhdsGe47QQo4m1wgWZS58HpKL93JFto8DvNSq6zdz6sbwnvgt9dLbMHmwKB8SeLaL",
  "key13": "5hmEKfc4YSQwDakNd3PDhuRTqQAwUmP1MqYmBD5sn5LjuVpUjVviNv4WaRFBeEe1iqp1UaZoG2stPSu2FeFVMZag",
  "key14": "4e13TnwqLBBoqCzgCGNEU85oXG1v7cHMyTiboRbtEAhq6vRpwN6Zq9YzA7Bp1LjSmahmwf9hvbqyotbJN3T4684S",
  "key15": "4zMETeEpw5RgBgSE7vF3vCCYmYGmQf9PshpiXaA6PtP1GKZ2dUWbVj4E2Qv88LC1hgWWRnbeLuAQMQHmHCDUzVbY",
  "key16": "3Ve6BSnfnknPKdNbY8trvo73gDMiA63dFcNQ4uAEkuLt4j2BqtvBLydFyqgDbNAn1SN6dz6E4NgqsDfwRhimUDDp",
  "key17": "2fEvKVcHxrue4RFRTcYD5GwuqfRHhEKGxgZ7osMk6G8bsV33qHjznvJzbaQRHgHe9pqy141VWLGb9Fr6JSyzCzvi",
  "key18": "2HjJ2LBCzcy3FaVENw5syavzv1h85w1JgWuqLEmA96de3kgGCpGXwGZ8fr9keSSmh4Xx72uwhiEPNU9F2UoP4e4k",
  "key19": "3PUttUQuR6Ys8Xv1eehBvQdEWQivKhunfzbnHN2D1TUKguw66eg1vPx7ysgxT8259Cf9khBhUzgEq53YMYgwVVqX",
  "key20": "3WpxVMa8bhgfV4Us4Dy3uN6xtmZq8CgkiQpjm1AV2bwsgd4cYGwdS5rQLjMVjaBYrZu85yQ1SPuFHoGuv1qENXRt",
  "key21": "Zd68nQddH8XM2EgbqjLqwy1VbUhhMkEaihqwTsHwLCxav6xNkof64dqmGDsG6nayWDYdRmwAhBry3JyJU13tmbm",
  "key22": "3iuvj8nYKpXkfKgLuMXBLydyBv6adzGiNqizwn15opHqyfG3KhLS6DC3dz6JLWzehTv8J6r4afBmbDgyyETSAtDH",
  "key23": "5fw7wWFhDuE5NgP8P7DMARuJErDGaB8ARj4RsyzLyxKJPeS8JZ1KnV1suHJFcCTgUefVFPjYjSBAQo9cU8wnyHYR",
  "key24": "5EMiU2kNcHnvujcubraj2de7Do1Wa4kqp6xGKn6ib7KHrVevvxTXFUVZW8wqRSDAcyG92GGHvFnx5pxbcLgWNM82",
  "key25": "3eJFMty8ycKxKhtnncTkFScedXEHZt152Q8kZjbX6aXnrfcQDBnpzp59z8DNmr8tBubU6VAp1DXdLPpSi67CsN79",
  "key26": "2Qc3c6Pc829g5Kve2Ag3nMHc47CXDWvEF3KEoQmJ3wwMDWgVTmrmC6UbcmvWy8Y76Vn4VkzFPxunddTTvZ1ozAmW",
  "key27": "51urNhSgKVUdg6c3PZYmpbjZg2T1ECGUJHrNwU97HmUBKdgXdksupxitPZbZLU6FUR7tyMnasnkeBzrydHWaKQwj",
  "key28": "4gX9zMEsTrrN3rt4UQBfeACv9WD34vs5MgVfTZN8A1wnyQ8PyjanPkMrK95L6BWkWLm7wjv88ANRw5hvLtYgKsEW",
  "key29": "4Hj44ue7PgkNKhufaakqvsNrectceRRjnLyqvVqbFdVL7iKZA9CPRUNpXPgsQoVaeYdp8AQY2rDSMFm62sy7Vxrz",
  "key30": "5WUbx3bPvbDnPdB8XAmSCwUTop5nMb2UMLXFk86iYPzj3GBYYGZsFspdHyUKyYEZjsfu6u8UbdYcSLo8yBV8TFgx",
  "key31": "5BMUHH2Dk3yVhr9NhW1Z8qQFyvCe2MiJBuFismiXzVBZE7oi7PsqPpXoK8LsHYonEa6uqNp8fnDmJ7SfAfmHDiLp",
  "key32": "3SSELhcWg9bX22Q8ZMr7AM8kfBeJ3itb2NuTQenZVwaX3XT5maixJAMUDpS7dpZMTczZMc2tkYVzqtrP5G8jomwz",
  "key33": "3HkGJUqWFC1wehw2bw2B42znLuthaNapKgVAXCM8oLUMahjUb1LnmSyy7BDAMCPgefNgU7qdSiz6n2c5HT7GVcWV",
  "key34": "5kwf7Nbs7YD9HgNrjS4hUZQUqQcCw8uXmjGyT2wfFHNwoCazKJWFU6pt32vLe483kzvmJFdVGZq7bhZLq5fADgFA",
  "key35": "5NjexxFUxLA9Zc6wcm2CE4Ekvj8ic5tHiZwxNPBLky631ZaBsuHaSeF94u8GtpyqGgDxZCkjiA4oGVzXcSZaFDiH",
  "key36": "iDkoK9EuoSAtQDPzEHnMbCtwCUXJHWDGmUBt8uTi6iHqVQXhcooEh4Ezz4FxbFyP4EvDMyLuTLpHi8Sh8V3yZZy",
  "key37": "43tBWDrcUMLduzZXsGFjA7RA59GJCUMpWGhnwYPBy5bUPFy8S1QmUd8sxLZL9wdWiQeEP8Vu3pUUH7Wkvc6DpX6r",
  "key38": "5KaLz1TH9PB6jV2XLVKYtNYxQHJDctEEmmoXQrPj5WuGG6ih2ho3qPvGxAVzKjA48PQB1pdFgEnZ6L2jLK92yFGL",
  "key39": "25QM7Wv2STHy3Z8v8JdseMgzExDXm6aMLLH3vaSQ9SQoLrsw3ugNcyKpkFTqbR6kgewWvYF7ozdufT7wQnbMaRnX",
  "key40": "3pKYKWH5M3RNpNvz6ppahtRbuwDfVSLHX3jofXZGNunGd461whiU4p5LzhFEQ2baNVMidNe9sw4Au3XZ3eF3cYks"
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
