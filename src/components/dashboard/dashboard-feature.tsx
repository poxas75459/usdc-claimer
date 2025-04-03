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
    "5oVujfdRacoJcj5ZneKSjXwU5vHstHKyqkXE5Ksuf7GsGoPByryJRnJmmwoHRLKGUqUGpe82HxdjLpbW4cHQ5jBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pUhdtksQhHTNZTHiG3xVqeFGcRrjgJF6seAQPHZztEtN566wjffYUVHM5VGy47YvonC3GJxDhhKG4F3GoQGhWvo",
  "key1": "21bfqcUrZi4dYqzGVMGUkg2Z6CT1aNXNHfWjbjfpYFocm2dyGUMqX4oBVZ14BitpMa43NnEiq2m9tYVqvp9R72F7",
  "key2": "31m3JAQNwiM4WuwMP9ggE37qih4qRsZDb1oNJ66v2nDBzrNbWrcikvkbgrK4qBPhnq7K1psGcP8RZYkFAVp7V1i5",
  "key3": "3qT9jesua1ANMVZ5DotgwEdzSnu4xRgwrvzbYqn5B9CCM69KhMsBtKBr489pqYKLDrUDFQSNEmfgZKNmCiTVAAU8",
  "key4": "BgN61j9HB1dKTogcDaMnKMRbBawWUGQrJNNTXFg4JDUmHebiaayMWnsxTVPpkhLADUFHvGBoLPgtpKbL68t47rN",
  "key5": "2XBz7WEsMTgGCRJCcsaTsnF8ikYYnWQVjX8nyHPVyerPSAs2G4QZf1Rzs5qL3WPBRdWKbavfmmogK3WsPKi6bTqm",
  "key6": "63S6Qt84xmzP8Px8Vd9Eg1QXHiYw6wvcXWd7Tb3FtSyfUrbSfPpgv1DnDeSetVzqX8EDLNGmom4YbbRjU39f4utJ",
  "key7": "3Xv9xuygXPnGxsQe4PbJRbj9vczzAvoHHZLXBkaz8U1yHpsiJZJGEVprdECvHUVtr8kfpHqBuNoy65zLN7KTnHDX",
  "key8": "251tUkF7ZLdH2Vi7RpsJMeyLejxtCpCsrVmHu59apBQoxCUas6TmZVReghizmMAnPReGg21UuBXDUu5ceDsDq2r1",
  "key9": "4NoKMaT2wJhjGtEgxbKUw5mxErxNQzMD9bb66vSty86MDnLTW2HBNYMncLtpLRMW6uWSRZYeEnmR66tZJLSYeEjm",
  "key10": "4yJ4qPseyVsob2geWVy4RvALoTQtAt1WrQFdBqFpj4WyD4LCx3RN5eQy5FgbMtPSP7xCuXBpNYpF8ne33GdU4skt",
  "key11": "5utQ5uD4QyY5nYJR7VsoN88BD43bAMDhQp31PJNX3mm3xQKB4WEQpXz2nkvjzS9JiyuHm6AqgiUEU9eVPdKxmPw7",
  "key12": "3o8o3fKKPuF2zzoMw6QndVezJLZ14sJX8gKKm3TSnyWndj1sM6pCQy93pZGREztHiK36f2LSRJV5wYop8HjUvgbz",
  "key13": "2fSFfSbwjLrxiqdV6S8ydtBmqw9u2uTMx3MJwCda9z3WLLAMEW5xvHkV4hu13ebTidyzDSS9rRLXD1sRd9qgJBf7",
  "key14": "36vjPyhFoPFrDeoh7bH64Pq339EXu7peiM4MkruySPRdT4uBpc5uWuiZm9JJLhCGhoL4vKDPwUTxuZLc2sAhBKyb",
  "key15": "2BPeWMvzhMuFRJv8KaSFe82EyrbXReJowXBxipxy6X4mjvANMoh5Jb6uJRdUGLcNKhnWiRduqrGzucX1SmSywocx",
  "key16": "26kDdB3K8GZqbNfpqcPjHnN3XxS75h7oqTjEpdsu2XtJDCnnjKbJCcZdb8gHR5fNqEq9NdogfQBQSi2KdJ8tZtHy",
  "key17": "5ne36afoHohMp9Adia2wbsXvYTowVqZPz5GkyoLcH5McgJtKEYFkRL421Bvo7PBCNJMKKjhj2q6Gs7iqzgb7Tvnn",
  "key18": "3aM9WxHgyqVhVGKUwZbSCCkb3bnNqaBigREPqVrBor8pE2NxrgHgoHag71PhJQ7kA2fewh4nzoBfNXCL4eDNsuvM",
  "key19": "3NbMzjJn3UNHw9m8Kj6LapcmJ2EHoYBZPYeCeECZNsSp9nRhg39kPhEine5kfAMokdddc9uFkC268W2ha26PgyFu",
  "key20": "2rbfAQsq3tkMyfKKn5NGehWAszbHsGMxWrKsLGwwkwpq52Ci5vm2m1rooreo7rFLj6jQbNxbFMDq98aRpZo7ZU2W",
  "key21": "3KxTofLoH4M6CsCMcYxLj34jgYazX3sLSC1LJVHNrvM1ebUyemckVNhzGtzKvajN4x7kuyZAWcMjytSLqeU4yVm4",
  "key22": "2UPKPH3GWPbQZ2EBhPuWsRY9FzakmYWke1QdEaSYWRqT8GHv1UkJ958VA8cqHwqJJ4ZvdadVF4PEnhonF7jqW5MU",
  "key23": "4eExJG25NVt8bd3g2j6nJKEXLursSVTsr7vuybAerc4az9AnERgZV7T6eQzJbeBF2EYFycSYKx97d2npVdSfDFBK",
  "key24": "Ke9H6VSgJWJ6BK5MFotdWMJFn3SA4XyqeMpftf7K1d69NRGZ4hdkmZV4YSdZJGCHZwqNbHz6bqMSvLmovu34iL5",
  "key25": "5AR65dtBTW2aiCdS2ESvK7MNyp8PQ8jYvjFKZyxHXG1RCGvtCdYyBubBywHT3jn8e6ZXbqSdZhtueTq6gtCpqgxA",
  "key26": "3YZbYYG93oLogVPzRZxt9G294TxrRaKLbFsVpy7TxaXs6ERzMi2m34zV2uGNujQMahJEnbidvRMK8BWThoerniYm",
  "key27": "58Tnv4jDXukTwres6sqT6NuLj31bJR5d4nyjKZBTUQbHUbqVNws8ZM6a1nJp9X6cdmxZhnxA63P4xbat4vYwwFms",
  "key28": "3e6w8jByCXqAAiFNcJdoGQjGFaHWiRHu4tLTj4jc4Kk93EnAERErErUtQFR21J3DrWZ8h3ExDncyUn7hXyu1e3yQ",
  "key29": "4PRbZHS75He98h3u762EAgEYUastPqLL91MRqePRbzKbkjmkUNBCLA7eZbRj1xXSdCdoqJ8AJdMFqS9hMp7mYeyG",
  "key30": "4dFY8Rdxi2UqWqWgMhNbN2XF7oiUvX3jH37eJagkUgZ6ttkSTG8iSShmhiJBvCyaqooH1HHUaynEXrTxMW7xHbjH",
  "key31": "FmLbwk5NxNg7H1Tqeddd5dSkG2NpZAdXy2CUtzrdnWKHavZZvTxok4xVtFnRLU2dkkfHg9hFdeJLWWVKPLbfxDN",
  "key32": "No5HYyPu9g4CkqMGgd1a4vRhoVuymG6nmacTWpWwgLEbVDAgAGZ1z2CYwT2Bk6ouNvamAQdBzpjUMFHYrcMgTZ9",
  "key33": "3FvPhmSpHwdDUQeQNYdiNGNBcuVzV2YWuipwMwthhfqyYW9PV2QrYk3PUkcptT2BYuJoyshLXVC9v52tjdifH8nR",
  "key34": "BF8BEtimuPtNmfxBg7pyXmQft3eASZab3zgUZbVQGxkUVLozeKvdhRpLTtxvgauJ1tXwXaCCyxZ8BWLtdT3LwMT",
  "key35": "KJaE3pZPWxZf3gt6g58canqXYWdpp4U5sNZNU4AkHBZEtwjikNPmzFtCSt7WXKu6Bsh5uvqckmuBKE86TNjp59j"
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
