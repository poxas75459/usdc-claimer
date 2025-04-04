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
    "4qYyNimdxELFFrMCqVPv2mp24zUwZEG19qo4sEwubTwzWHaZ42RM4kQSvpn9nWDwyGB6tyuHdHHwfzwhEBVqCpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45SAR8YcXHQB3neV7kq2mgH9FvLkF7JtMp9dZNszookLScvGgQTmz1XHm9QxfiKBY3RjUa3pMhyvAE5hfpZwY7dU",
  "key1": "3Rz5ug3KQScVGmwo1RC4funpsPAkFcQym4YkwzuanNWSabsayqjTm3x5QaTYDtx86DLG5gCaJigcBSt7e7SrnHmk",
  "key2": "3gomTGwdWSUnEg64fDzWvDk93XKpsX2e8CVeFjqW7EQ2ay6f8SaeuwgQPtKJxJKy7vbdkcNStfm5E1gtbuc38WoY",
  "key3": "33UmAvJBaagnD8ipyzo5zErQpYFuPV3KCHMbDJPgM4qiQRPTtbaGEyMa5M96ajz17od37FwY8EUPj3sxTQtSxhqf",
  "key4": "2xBTw53Rfir4JTWWymDqq3hCMCazJu3FNigzA13ooAUvHknVQGJHiYXEE1KB1BfzWAaviTzBau5XYPfFRDPuH1Fq",
  "key5": "2qg4dShQ1S3MdjzQrZ1ZLHQiQDgt32xf1WYJM6HxaA7qT47tB39vxhuMQZg8oht2kqyzME9UAHUTGzbai3qCrZsb",
  "key6": "66U6F8FEcbyMvLHCS345bknfrv8UbbtQdrpbnJ8utvxC9Pqua9yopggRvht3BHGMEa4EfxTGuUJHo2SS4Spj9d7q",
  "key7": "64uRGTVJbXdYuF86NtXZbMRYKj4rU5papKn7h5vLDc17u2VLom8fE298GSiqkgaFyR7dZVn7PvXVtwHPoYq6ExXR",
  "key8": "29BFjMW46TrBx8WZuCZ4wNQ6neSKT8ftvSva5CKTfpvXaQPTVJ1q5VTsGKKVmRkZ9MwfCKUJGZEpLGa1awDkEVCL",
  "key9": "3nqPgiHpvTtUVddjuKmHqsmPrjs9r9k3ndeP3AozGuTmMWBq3Nn9mNL9SoSVF5TduGszbNXEWSSfhaz4wih1uNi3",
  "key10": "5jwYQB2eUr4oDGACMBSAYPL2S1YjCDWTfC2gdhFSJDJpNTmKgsmx75yZNXVJhrZYqAukqCpBLZkLc1CHQFGqKNwB",
  "key11": "3ywgK4sBYnAm7yHVUPqobit9aaEp2PWQW9KFiJRVXz3Xy7buxjGfJgKVpVmavVcydfCras1zzCPL35jQJhtLJLjc",
  "key12": "5RJqxAzp23PZNjsVLxh74DTEaZKuL65hAB4rwGGsRCQgbPcC99rRfHZPsQeYrKssVuJdNWnk87TYNQhfLUSErWe6",
  "key13": "5YoFY8K9Bx7tqzTfmLhGMgxYua87fKMuimuUDX58ZWXeKwnqdktTK3mSXXvFPjCjbqw1M1L5zAEC4CEWJUTpLYHZ",
  "key14": "24pSDvAg4ntQwGE1hPNWMNmwtRK8uVRVgkWwJqWQThx5pp72bPgnNrZBisAqLcyaE6mjGFg2xFLqDnrYxWQfML9M",
  "key15": "HABhubZ8pAXcSsJt3XpkJqNvy12txqtECVVkbz8RRYw2dLLNGnB8fcgddxypJpVZRgWcbfZQGZ5262oCotsMqWE",
  "key16": "3BThwC1WRK26tF3yGXRgCcNL6nBPS8NWrQ2wvbkp38RuMyzydmwC1Lqp9zKio3m6ncWEiaUVSphg8q37WA9Wqf6H",
  "key17": "5jKNDhHDxqqjivW7GnVnzPeX6TUNSoAG2wKuNqnrV8VN1PqvDZjYbm8PrwtMfnEwMgpb2nT4Zu7e12MkPnuW7tWy",
  "key18": "22aUpsBhcdFeicNYxxnAgSdBF6tAy2PozgNmpRxSSMZ5m41p7uJmvhjPboymJrx7ieSrVFHCT1JTYVoxbnb12AxA",
  "key19": "dLso34tRQscnYKmx9zkELF79xUfksPBeMmfaZApLs49wHPG6DDsTpUJ6YfUjw39aFrjmNBemwhyy5Feoy6d9d7Q",
  "key20": "4sfdE1zPCijhSnaDM6pZ1VweMcDrLgyFCwyxS41jDSwnCABrXB9e8txCVwZpujg485khwmYySU22bAaQKFGZnyRL",
  "key21": "5DoqTBe7BWdVvHNksU5cbkxZhQ8hjkN8DBiziTXGHm8KCQ9CX3zp4rVHYLb1591ZLrosCf4trVHw6pjv3EbYawQX",
  "key22": "4yRZu9wnMzpraGjxTA9ZzQmE4XryyH7qYNe4NJyybvyWPBXdnLycvm9Lgw3r7ED1gWEC8KbsTdYiyF95YBo4WvoP",
  "key23": "33vtyMeGpGbK3E3YHjwuPSeZjMjXb5YXVA6Pcf1DzYgiAdiymicbWhPeCuMT37ckorGhijRzLshvvKf76Gn3baJ2",
  "key24": "dTZu1UGJjwzDrK1niAG8gzkKfT8HFUD3JMfPvEeAThmQMVhDPyUi4rFGYksp5nzW95yX81MUVYQjo72z1RSTNGk",
  "key25": "2bbA3FxXQnqS4duppMYs8Dy2LuPQRdFzZQhaY9WGPeiZatJhNrDEAfFv6GLMhcU6kjQNyknwPbzvKrW9qekXYxy5",
  "key26": "5xXR4graQcStB2RCTsKMwjDPwGfG1nG9jr5UCqVnt1qm6XxfeZzjkkTwfwsgGEPT2UC7hHgns5vcSYaAUjCjK9rD",
  "key27": "3xEKyAZY5sNsvt9T4RWVmdbUREiSibiM6tRnr4b8Eig6tkBcXUNb9wyNoypRA72mHJMRGxmzjRrQrrUATFDnhTqw",
  "key28": "3GG9DdzuYmZYpyARQsFF33wYv4yqdwr73vmTVsEVTk7waEK25BiWEzSRCBdsS8Bfkim1L29XErSzjsoWgWomdtxR",
  "key29": "2h35bvkCFLEVpGxSMRqi1Qa89FZX6S1bTF4RJgDsND6vDADCfMFSHdsgmySAeVKnXCi5XKngHwPbZtjW3h3ngDgF",
  "key30": "3F6jmePmxpVrXGczTLKWG9RW1B6sBtmiubmeRHfZAfrCh75a2My7oFPnDD5UCNDc67ZMSDohQnLY5RH1e28AtJ5f",
  "key31": "223QQvwpet9pxqRKgbe5bYfaXRfshqMgS4NhUmGKWZMgd7QCsq3FCEiQW7uaxVY2DmJZdrij4qiUTi3XEdjYhbhQ",
  "key32": "2cyV1NNBbVCgssDPtK8jmFT3HF9Lve2iPuHPpB3AhuwEB4iRvN6QGoNv7Fof3nhVvnmXa2GhbxGT6bmcoH2wvSq5",
  "key33": "Kyn3fmTkhC4E8vNC377Lf2vQ97pWhF2fBvQ3KaNHgTzSbM86EGnQSqJ9fuKHGS7XVWktpYjD5Ywv95LU3YC4BjV",
  "key34": "htkGq8h6qoDDgRVj4FpKZRp262U4r1RdhWMwaSdxZoabNx6WgLi2sDM9zFWYuuYQehEAF4e25gdaYaeoPvwSndb"
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
