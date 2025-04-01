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
    "5uEXLXcoy8dcRs6f9sBZoHcHRQuZaY1pnerHcvQDhWs5mkPMM4VgPv7jucTtyiks3oPsTDVrt8c3yuXRJ977WdGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPsFLAjPKj7YtMJwURprNm5CawrMwxWTCgS7iFGjV74XGXBGV2EdxCfPwfkTuEDPQF9oLvYQpmTWLQ9EbnMEbLR",
  "key1": "38EdPJGgx3Y9q9EoZMHUQwpucbtZ7pQhGyJgzz9Dr8yDGdxp55zvkMdDZn1eDriJscLMH3LGAZpac7U3NHKQ7twP",
  "key2": "51RzT9zXCMELEuFhV1RMvdwth8y1mVUYqGj5XmTgHGWLDkJjZV5gtxde6SAUSUDphDYTXFMGyuf4sgzHpWcNYd5s",
  "key3": "4nHXTwyjXyQXopjZqbR41a1CoByHjujRLSQouqQx739V4WJrjwP9qGcYgSKdK2Wjj53GdpoNDnm1A68jiKyLgFWG",
  "key4": "FtU2Yi7T5rpbMn3vwFJWXcQH99NTZycqGGmgKCMrHQzVCLcQWKpoMVWdTgB7PnWoNWmrSu5RL9kdK3XFThf9Tm4",
  "key5": "4C4x6u5sFQGjKre7y8ehLhA8JykKCCVBoqsG4qa9hZ6613vrRCC2SLpY8gGjpJJWb9chkZ7kqL46qF1eZ6Bi7GR5",
  "key6": "62pkR1AFP8iiTAsUgC1NoCp5STkLvy4GoAu82x6tED4h6YSiwNC89kxjKFpgjSnNzbPZMWrQyragrE25JkPc2SCH",
  "key7": "4nGM8uc6K4tp73rP4J51QU7jLVAt8ysuAWJVyZ292ToP7X9sVhiVMw6w4eCvsswLziCT4Ltwx4oCv88YpRsRYEik",
  "key8": "59GJE4oJYaAYoALtUVet7rp2ZkfAYd4BzBQCFcxsUQXKePgK487LiXQXH6BWwDYj9d2aojQDRd2TnVe43nGmS7Gy",
  "key9": "4zXM3y468zdbBicc8UbUkxK7WJdm8zkBwatnTuMJ6JrNqA4KJJzoWC15XvTTxpWvA4WP5CXB6oHzwKn3dKsEXCZd",
  "key10": "Doz8dW2NTg1NKCYpdCcubwfiepTUa6jTwwDbyRJNa7UgKNTudM38RGRXmBUncnAxHDCKKVSCFmzhDgVL9W33EgD",
  "key11": "2hdmGfMhymuoiUK2x1hEfbLwUVssvEjsy4VxpxLkRirLBrWagxsxMjqKpuZhLV1gGHeppv27eGVXrcer5unBGr5x",
  "key12": "3J9V8WHSyxeDKPfiHFDdaerogm2kSxVLJaHLXr9MZJueKYj9pwVeA8uNmcGvgZ3UTjBwufsCnsq3ANsemkgQt7WC",
  "key13": "LYS7gVKZGHj51jo2KtR53pdkcARVdQCJofmnpmQYuDWFLcgrx2CYaHopgnWzn3taS5ZmsHTkmFYZLzMPVYuZgh7",
  "key14": "4DgkPF9svpvrP8ip2WnELLgSiGsBhvwNJVUoKoYzWQANjkn1QHzAQSXgsX4yXRG3aqZCmUQyyDvfNrqiGBGD5CYj",
  "key15": "48227i6Y16kwthUTpqaVfZMDxyXMGUDSyujgAt9QH6NicDM67dwhNJVWdQYAZPwFKnEgzPx4iby1rVTo6NhRpZX9",
  "key16": "4xsXbbwA8UD1GujfFnEdEfKuxzX5go7yJTWchRyjNUAnGWkdu4K7cFpiKK31PHJVgHyYhSmBTvvnkncMTVfDiaGQ",
  "key17": "4Vvbth2v9xHHoYU9RqFoosjCMnrh8hdq5g943KiJFijqcSU8rUa6yf6TFxfQQWpvNtpESogPugbNB9u8YUT4Y69b",
  "key18": "356qvG4rJgtuSLjBwf8srLXrxEXhfTATuR2evwtpWCAKqAZQkCTDbPDLP1DhvFrhhfBR1Y375qZa9GgzmWMwxLRr",
  "key19": "2bhL35pfT9i2cXDRnrJ2kLMArS6NS7wEzEm4omHw6jVrNLKrDsfdPtwxiYk6iG7mWe5e72rV9wJoHsRjE2roTeLk",
  "key20": "4VLBe1Agyf8Xfw1AmphLj4D8cothqY25cDWPAcG9UmYEcwwAAcAcYKzbv7ZJwCFsF3rsQFfvdTkC5wHvCU61VS5Y",
  "key21": "5u1Y2FGP9QboUGcmU98XZVHcapSKVsFcryozmZD6X9ZQiEwJBNVRGXRw9VYgTffvTh8BAiC3VpQVLHcfbSurSBQF",
  "key22": "2x7zbBJLRJbc1Y5b6QwxXF3kp4JqGzjfSjowB5LzXbYMX2CAYMkb2oYgX7odRPN5s2Lqf6wJXFXnjLa7qh8n2qs2",
  "key23": "5vJ5tLN6DWaGVv3W9hQZTvPw6Rw25yCMBQsXBvXfepEEpo1rc7s1Nyf2n9WpMqzxJp96HvyZijP7u2nNWNokCc5w",
  "key24": "2DF4fnu2eJGmCXhyi9x6j2FrgN1gv3CF3ZjSVXoyD4sL7sN2ZYwGqTZAUnerb6ho9BBrjDZm9vfC9o8XgXkVFh7j",
  "key25": "4YmpR8ixWC1t6LAmYokNBY2bCmxyTNmF6RaYz8MddS7gxFqsP2wZqm7QyidZqitCrxMcLTqXsZ1wCoWi6bX1HTpb",
  "key26": "5cgxj54MMYG2RPyM743XryNpmU9wZ12gRzDYpmSTiqbYU4mvPZdCb8v6iGcKxYfZosxfrJJ576P9rwTDoS9vyyuh",
  "key27": "5SsKFsU2i8qyWrdz3uL9Lfhoe52Uj6RttH3qcYPcAC1PJmcaxugazgCC8LCTtbdNrs4tHXUFzkZWFyrRcjR8EBbr",
  "key28": "2ppdmoaQHt9UfewsA7kvi5SN2bWztKKdBi9bATZbCwonvtFhmthrrFpGKJrKuTc6bBmENu8oXBnQZWNVXEEdCpYK",
  "key29": "4DpafRcW3GH8Hv17dpJp5a3eRcUWm8Du4CVx3XJn3wS39jZUHNrJaqhwXwqhfEYW9Vj5zFFM8h6qVhiqx6rWKNG1",
  "key30": "2MuXzQsXqH59HSfQL32KczfjG3hCVs632Pcac9NvLyLfbj37rCx8UJwVVGDvr7WVRdU1oF4KZbvhj2e2ruPrNykx",
  "key31": "57DADHZitdjUp1QAiaDuGyGSeuQhqT9YRrCk4WoZzWY5cqf2f82cYL9Xxan3qFtSEJaq4AHfYkgK5GzMZjxHdMyd",
  "key32": "ucCJZtFX6cHPgTfkMzHRJTvXGw7zuvrXNMGuBG4JwrFcj31hWJyiRrzX2zS4GZzHuY4CGieArJxt6yCFa3Myu3K",
  "key33": "HHAAkJXmryGHeAPNkddZUHEWw5ZaTa1nwa7jSierN2Z2FpaJcu2Rq5kft6n84Zh6gsUD8Uj4BVGmqHENY5RABZq",
  "key34": "3oX3EqfWQSEP8uNme452HCwmd6bh54UyVFpK4ZgVnvrdGAzvHFLVj1b7W9Knox4uLM1Xomm3L8tA3Yfha53CwMHp",
  "key35": "59jD4vE1fYiqZJnSGmRRUWPNHm4fWWH3WcBHXSZsQ5U2uZS6gQoyaK8HqySEMVQowve3Y3U76WmQwPF3bYwq3MYe",
  "key36": "WkYqA1T2re8hJasRS8yuSNM4GXYDdZq4YLgHzx3fDckyhR3CN7iGQi2Z9Zn2ZsA94tQ9STFncbEzFPGUkJHg9uA",
  "key37": "4HfP3zLjx5xQSqFFQHpuwbGWTcw2Curf4HueqSvJtUfFpRPYfRu11q41mT6z3p5759hkthZPtT25QWECWStyqiqF",
  "key38": "34ABYfcSQcQfxv7YqGXQ8KZG3teghxTrrPCUztTihCTxcZYKHFGx1WmQ5ejmTvSAyupyvehc9h1FLCfkWbnRsLcD",
  "key39": "2zEjqtkEk33F1wmaEriHbQLqZkt5nQebPwg2BYcaFi5VR2e4dTj8wnqr1FjXiyCzxvec3mcweRB5E5fEbcQE3xhb",
  "key40": "5HqM9TqAEFCzh2Z6EDEbFUeDkD9EFgwXcnLGDDmikqD2HdB56K5pvYVbqZkDwDrw6HpFGFgZ2DiqEtQJy4oLyNz7",
  "key41": "5yubGWDy9evs7AGQCkUXNtdpbtLBcZzGBg1BwBUkhuriHKFtUKpCWe6PPGUd2mdVGMcG7aVN61QQQGSXmi2MyEf1",
  "key42": "5Xw6DeT6Lx37PwoKPPqntSzHoh7n4fLT4kkHy83C86tWc8vDP21EtXeMfLmdfsNRzbvh8b29DBHkye8K7KSpScmK",
  "key43": "35MeEPqZgTyFQjBSdmDerffzgQhMHTtYjr4vykm7jNhoySjgm1cQWC9RxcSbHycXRcnVzHsjd6DTVZwgYNF9tzGF",
  "key44": "43ntZKti166ua1LtqUeP7sqCFpw7qMv2rqjwWEYB9MqTgFNesWXHb45auK2zABugBu9NH8bx47bcq1Qb41hpznjf",
  "key45": "3wBkPP5mwE3XXYh4Gh6Mys1LaZ2ykHmS52YZTgZUnKhywhBpLiVym2Fxq6PCAukgbz2kzMcJeq1Zt7J6iHr6Htu5"
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
