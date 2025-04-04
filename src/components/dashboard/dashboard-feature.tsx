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
    "29uEAsa3zTA5cdKfqWmepAPPhgaw29M2A595NWeHnLEAueiUaHQrWAds3s3CBTbboRwytZmpbft54zQQQDPxjZGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hnC8h1FvGyaQMJdM8zxv5Bsc1LFNmJ3yzLQ3HMJDMfnbdLZAXh7jN216zuzsBJWutYaYLqEddGuawEPZDis63VK",
  "key1": "2p56W1jx45gnLMvtiiWpsKDL1zR93uDh7dxZbCK4EFT5GStdGr8SH18Snx8Dn1p1UoqqNa5shmuWkRvFJsvpYnJj",
  "key2": "4p4SjFu9YBcJ9x2PRDXS5PFmfAH6PHbpLTy9KmFhwKRn81oYm2okzHqAKjSUSFPCEK3MNqDDVUQi8PBXQjQxYAVm",
  "key3": "2P686raV5TQkNnBsNQLj9zQu9FnLW92xG5PTjDrYNi9VyoyvVgV9jtwT4jPrX32WZNT15p9nzNHZpxggvgNU5miL",
  "key4": "5Q1hP3QhNiXr4AbY5yuspDXSN71AdJErRj2yUNfVtv46e2zTLj4nuySMiuLCmEchtcQCBaVsSUJsuTEce1xgu67H",
  "key5": "thPEbbxXsWbWHi6HqHytGDUuvDnqFWCAGVyvUCbcFKy7CddUfPyRpftLhapPiJChMuyhMYajACWmFQfMdaqqa1v",
  "key6": "4CzALLavv7EPf185whLq9EEjCarNFWApGwtwSCEg3YxgSCdJdZGXoP5AW8gHJjbZV7e2RQQDmUPC32pjfQPL3bcn",
  "key7": "qsELTXZ4QL9rDR9QE8eY2FDCca7Fxv6i7kSuxkoeGraB72TkDgFwYYESMSgKHJ956i7UnXwwcGURWbCfRv1BWXq",
  "key8": "ykYLYam8QiAdT75X29hoLMDYFHbgmUWD8LQjttV5eCnSzXyedYgvEHthitSccDGiDojGWXeQdU3vHZ6F4uH8obM",
  "key9": "3i1hkYfKEBGQswi1zTwW8KoXXywC6XPiuRH8uCJrSdmz5MKE4pmFsNWiwmdpi5xY93p2ftY2GqN3KDyYpYY4WxG7",
  "key10": "2jHBJth7jjMF7HQMF66oKYArAK6VW8mZ5z176dTxG5uvTMRRKt92aN7WmCaM67LLJpqxMS9BetynRyaD8THeKfTv",
  "key11": "4nWDcJDCxUDzkbo8Y18u45TTitkZxbBYxDgou86TTELBAXDtjzjduxaM1Mwv5z5kJ3VPt257Uj6zJmzZqFYVLbzH",
  "key12": "mq8U9zjv53Sspx95ibFTaVLixU5kG5rzPx1HQrrzZWbVyTVa6mF5888rw6gSeZcgBFimqrzFHrDh73eNFG8DiT5",
  "key13": "3DTvmmqCM5GreDyCjHYpW7JzKGPGn1C9ZEk3hUJyQEQXHsXTDkVDfr2FpYFoEuFx3dVsGahzka891KdxcfwFu9AV",
  "key14": "5KgoXQtHECenjmDEUZp5X8iqZiXRGcLbFTpKv2BWbQq3Q6u7SYoC8H1VVxDaov44tFQ6Pa9ABo32Xzs97SGs8J6H",
  "key15": "3QPysdMKNDCStye5FGmtKZLQ7jo8rHJR13mbg4NSbhFk2cgKDbbK7MhuQpMpQtC7ZgxVvFuS1XoApEbGrxDeiNv2",
  "key16": "5sQufV3UhFndG7VAnNvEfs2Jf4mCGwBRHdxSnAKYaQC4erZ7E4vp3pagCxsDmfLZQkVjVLwhP6Qrdp8SuGR7o8NX",
  "key17": "3rUxFYeZGVofQgej7xs4TRVAerB9WjXDxUEf8VU1cQ4k3xdNWBf5bf2uNgzkMvvq6EfnLYUWSzaBe28TGorkdxit",
  "key18": "2qZyjDBvPgKBv1WaNmURbUvyajvzjHBMtDWtK3aco11ARPjaTLG3vaDp9Fko3J3CLyWHWJtkuR9eJLee5XJvZy7c",
  "key19": "z2jZev8se3f33H2Kda3i22GXgfx2HwrqXYJehJ7kqZnfL8Dy6Bt6AVnaF8EhhU7ZQFdL4an69zKH7cJ2UuvNuWN",
  "key20": "5edfdYnFBLiohBy7kxYCzR6mDh9vt8U7qmeJgDFyVuAzJG6bXKLGAFQLPryoFxEuY7xYwEbT2ehWooQhXF325yXY",
  "key21": "4Ax6z24qEuc9VctH5xYWodCDhvsQ9WnhMnD3QzCXJDZDUESu83feebwZ8Z7MUbFqwkwGT2e9TFdqKEaiL8E7DX74",
  "key22": "521LWuVCiBhvtqCzFj3ChizdogwuCmq352DUrsMgL5xhvN8t1JXwxbmHEUfAx4fkXR46F8XQGi4ANWwDBRCX6e9r",
  "key23": "5UrU2psSUTnqhGpXSJRSuyARff63uvVEXz73GvfKudAbu618yCES2UhiW879TzYp9JMr28o2BUPEa51sc8NoyxmB",
  "key24": "3NvSaXaptLtCyovCCXYoUX8ZdJRSThGLSMhfZiS9Ad3GzD7FSoUc7J4bFuu6PVrqe6pBy82mtUisvH8ttDVsb9L3",
  "key25": "2yavfvLQFsHUW9uQCdpMAUhw2Jdx4k9U8z8cnwzMja8X9Ctwc3X7wWBzzSxqLgiaNLFk3UjimqU6QxLTkXaFzDWc",
  "key26": "bpeu1hu2je1fUvfXMqjBM6JZsxPrzKDaGy9p97T3nf2n4zaXCR2cPign9tVKKoX5UEYE6nWx4ZCMWNLWGHg5k6y",
  "key27": "b1PJVcU2AgMQNDLTyxzfWEBJE1iEs3dzNT6xGhZrYvVwk4u9NW89SG9nkjQSNWK5NNrVCpJX8YVNAfQhJBpLCYM",
  "key28": "2Lfz6cHDMzG1ro1y91Wte2dpBF3ux2rhGEJsT9SQHDiCjtxt5Y8tCSnFFRHSft2fYzf4J9X6W2q7eBiSaVYfY8SB",
  "key29": "2QkZQnozvHdrEQcXR3ptyt5r2YzsTrSyVQkGHBWuwfN7pYk1aTvuAQLKHTqtmaJeHWAbQDef3hYsxJC1RwKhQAPh",
  "key30": "5k8TkqmSAbbx9SimgRb4TNhG72s32pKBWb9zuTfh5F7pVeLZwjcELM3TxLAhoCnp9zUz9u9oWa4dEQyJPKn7w25m",
  "key31": "5cJdczYZoAEdJPSg9UUYLZCem2ESd7jUB6gk3AqyKvJRnRDbTtwm5oyn87Yhj8f2FUWqR54hZfXGMhLHD1yMkVoB",
  "key32": "SZr8u5oqTg8tU8r9yvxQ1DTm4hsqbcjneMeaaaThSVHzuorWGZUgMTktNtoLsG69MYapP1S6mbC9LHtJYLU7e9E",
  "key33": "2qLE7rorn1qFXysPSQ7GNbZ22qWpRiihYiPZRk7jwMRgmxSzbM1wxJ38MuFeTNRwkfhT7pH5JxZa9P5J2Q9qsFFs",
  "key34": "J4p6MJA4vxN5gqRDwEb6xXp1wt9GLBtJZznadrp22k1cmrvu3jq7pXob7Y25L24ZGWVqSR6dsC9WqkpYhQYxUsm"
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
