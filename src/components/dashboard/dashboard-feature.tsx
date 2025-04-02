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
    "3REiQV9kZYsFShUayag65xNKpTpv4xFi4BRB7kUAzKF61Re9tm7dbqdS86P7pRDBhNmVJX5Db1tUh1S6XpDhHWEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35pYMPN7qPbNq4mCy8ee1MoPpxkZemLx9C9LcP3BJCdFrGkHEPopCyoGPYro8jgQP1177Nbip4J4LGYBvvRQLu5Z",
  "key1": "57wpQsYqKU4NCP5QUSgV4Toavh832n9b5cJDDYmRUCYZdBYqAq7EUmcd573dfPUAf8niUTTkAw1HQWFwdv8Dt726",
  "key2": "3LBhvjJWmMHMDDwQJjtZQaXsobW8vH5wLD1Q12ohf6NF7JiQTc4veNQR29eBVpMMsBMpoNYKrX9juSM9eShR3azH",
  "key3": "4RH3dz5q4HFM2ccAs5XTxjMWRdZK8iGpdMSDGQ56WbU3ba9kwuYoHmceUi91D32EyJ6oMLD9z5awSXqjYJLPFhwx",
  "key4": "3LMzMPvWjovboTmXvfHiwu4U4uYKT3dWN7DEbR6AJTvzcJ18RZQvJLM6du1H4pYy8hp7a5nNYmSxXZc5gkJi3uZs",
  "key5": "45uBw6nACTwRL7kWx9uHjvQNRpTGvaykB82JDHSxTytsXcWrW7YAk6C519JNqJVnaL1tDPr77AqJZNUWFuB4HBW6",
  "key6": "5Y1dVssaoDWuQ5EPfvY6pqpS499FyJnmFJEgAUdGEHBgAD59FQ1krRS7yUorEZzq86G7ghvRuugN37PHFJnL1BHc",
  "key7": "hCbjWbnEXSm7wtTsb329WAHctcCmX7qj2wH3c5kSPCYRnGdj4VEzqCkQhtuLW1ZdCVw2dKDjgTZjCG1wZUbZWUP",
  "key8": "5vV9dQoRHeUiNdt2134qUDbXtV9G1UWF9fpB2M1GWCBwTBaxZwaQuDefm3t7JLC5px6yhP3rW3JkYTDEaJxEyHRs",
  "key9": "Y3kZxqF96AgiYPMHGnwoUsmGNKakALu3G3mQ7HY39jE56n7WqGFgLNzNHWhnqcEh3TVc1yMzEAVqHjpDKDBCFym",
  "key10": "4ou9GryL4oG65RvipNpGtGTtemJU2EgpGyXQ8rSeAaGucNZ11wcP7vz7jQ7EHSBCSPNMQ7NVqmEvAhNTaS48FWew",
  "key11": "si93tLdKD8wbSrc6Lg6XTHU4pE7ubLm9CgBL2Hb2ub7FAaXsUbfvAmL9AdkUaKvjsEg8LDytECEv5dcNnuqXCiQ",
  "key12": "4wP3BZr9qGBPgUir5cHU72ooCnyzh2JgLoK4PuUnVyjEEjnvo6q9Emc1o5X7KeDeqQFsnwt1ewYzuuPF5TrCyn4C",
  "key13": "3tDcFSo9g6qCzvgkXh9PApFjQAhT8eXTeRKuvatsvoDZ2BSF9k4TwER2jtk4EbCwkhyiUrq9wvZ7W8KbRGS4ftjk",
  "key14": "3idJXhtkTNxYXE7jitpc9W5WMobKXevpDVE77TnvQNEaiVV2fKKPSawiKDB1FMqrDheL6XVDx1RmBeprKnrS6Ls2",
  "key15": "4epQsPGaAMw4q6HN38CCqdASJF8nh31xzZwS9wUYtBx6PPL7XT8hHxDKrMTE3BNeLS36qqkpN2JUYUHSvFFuMZyc",
  "key16": "5LthAF66GrqjYTK9QPui7VBFSqN1Pyqb2VDXVYy23i53BxvcZWku2b5seb89eMDRX9FjtZpNmDk3fTokq8UkgfgX",
  "key17": "2Njgh4vT15r4ZcyDzk21jYgmM36Ewo7BLqrHLSMbCGsTUR44qsor7Hdan7DnDeAmBJ5ro7yEs7jYwz65XiSWFGrk",
  "key18": "4SSxH9sAvK1aZdBGDnLe8SxTnE9kvqAJGgSMpX5PA4M9RBwJxjPfLz5zEhgq6aMMDmm4g68nsricFKsEgKmEyktr",
  "key19": "5hbibAuRsYMkuRbFjKmgVK8YcmnjQkNT8J9rwtHkMAeG2EvRAf42FkYcC7AyEYbinDYgaCNWkfUJJuw1w9aYaSi4",
  "key20": "5SiL7iQGrnus8aLcNTRENkuDfx2LwBUrCN8ZBidd8nkHjH315sQ7WcfzZiUrsHANmkCzYPipTTjRg3TeJvt5ajss",
  "key21": "2xMMvdt8eNLD9Wtt8ddr9rWbSJjMZZL1s53ZkbE918VrVSFdEAw7X1t1pn8EyYk1J8U8jNZQ1AsvbJu8xRecFB3U",
  "key22": "SxLrtazpXdht7Etav7FBmxreyeQqWvBAbUrfPx8SrroQftCN4F5B6HBE3yCgWNMLPjmFdfseLteGoZkYBeZXWYw",
  "key23": "gUhgVqGWkyLMrV1A1xNML154JKfYvbTRge44ueofLHEbYxMCajA98xzDyH2hRjfzdE8km9z6xyh5FxaifZGMWrg",
  "key24": "5BjTehi3tkiRk6WEhcqAzDdRigfPkC2SJSgszaDyq4QegbNSvdqM2RgaF3f5JZK3fQASGtzjzKG6UyWJsPx3dwT5",
  "key25": "4TPphA2mChGx94GH5XGjZ5P1ZasrE6MztbBLQm4deDryBehW5ukufQ7F2hCdeGPrUJFgNn7bydRrTJU7p3N31Pmh",
  "key26": "4X8Bw4fobvgBwnuVyLvkrnNa8A5yfCj8QG79xgj4r4kFrZ6dAgE7TYZKvvmdhKeCmjt7NzrW7E7rowPRyop5HAR2",
  "key27": "4Xb6VeHuf2BzDKv4k6JVQozJtVfarbRPvH61E61BQjqc5AxUC7m76JStxqmNhw1mKXkb81NgibaS9DeYri2PsmME",
  "key28": "Gbwgf8hvkXL6tQXPVyP4tFAV656s2ot9FUxELcup7f27ZbHW8zi9SukW8rSATMyZ3aiBCbE9qtFuDkmPWfgCdCf",
  "key29": "2eoaMRn5gpNvohmXXSBogVdxXSBrS6KHC6yv7rAmstqjzzbyGcCvGGYSVJv1NNW9KasdsmjLFYqKCnCxHEEjczV7",
  "key30": "2t2JH52YKv8WzrG356mgyS3kbY2aTR29SrYCjgKsVzH4dWqSF9NY4mra2Bmbw9bACLidxYnhurKAbZfgBLB4UN7s",
  "key31": "2VYm54dRGuPxYdGwv3UYy1Rv2gBCWB21Dq2tRAFbt1AVwKiDvQN1JJ7tUQcrR5hgpKJpfeXRHC2Xo5tcKhcS7fDn",
  "key32": "4aK8Np9eqtmaL4bbPTBJJwfmCSbqgPffbGawKmScDt6EZ1CYs9y7VsrDPfspZNygzLB6XqpfzcYkuyqsSbtkpoL2",
  "key33": "2Qu7QwfYfYXkUkDj7nuYygsogwCuvrQGix42P6QDzJpeucgPaBexw5BCaLmZChMUfiMiuViVxMXuJyJabXRMZhzD",
  "key34": "3ZzvQ12MPBvn7pbRfLBZGyRswsfkurmBAafqPTbZ9mHYksWdhXoTXKbHUocnk1rVAiXVmAMDVvCWuVmw1XwHqup2",
  "key35": "bm7VyFBf1LHBVNfz6pSFPuGSxsBNUa9AidLrt5MJLSc6b9kKWpSXFg8YXiWhr9zAXrU4bEttmZxgat6DbexeQey",
  "key36": "hPqxEhY4TPKwZFpQnQw2taBzkvvgmw2Rqjcr9y3dFcBeiTjKwh2B7Xe15h57Xt7VD5Evo3JqfE2Kf1SvMeDdJ1S",
  "key37": "3J2bnJ7KF77pGX7NpJnpmpb5mA9nHsQtE9ZaZsfxFJxbUBztXgbxxzJ9vcoqnT6hAjRv2ZyMQHqSbCweLGXu7E32",
  "key38": "33wmhd4cFZacNRnGHg42rCfH7t6HPj9pidNhmfF49UpxpN4srf9WkHtHtKbpyj2Dc1Z63pXnE7cKnPDjayAQFQoW",
  "key39": "63n4jMUbG8p1cN47a9g4NQyzvwbEDVoJ5fqsxdhk4DTYAUeTDkzJgrQ3csun14xTmRjfzzHhRnRfgJdnY8cbS9R8",
  "key40": "25TeddDq7UFLMBBTa55VqBvVmAp1hwQfUyx2TipkTSTGUtiHVtFH4mv9AFkRBw5GgnUrNtHdNJEG5zhqddhTvpHo",
  "key41": "4T74FSXZfd3NxuzZ34hHgkrpzFeoLTUC7QmmupgNnxfJGHkY81tF7GNERAfLz3ty6vY6hBytEuaDLEdj81FWYjdY"
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
