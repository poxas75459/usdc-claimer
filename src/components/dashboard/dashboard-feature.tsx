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
    "5ZaFAfF9d3NKnNGczUEgHKPx4XZNjHXqc9DMe1T9nudeuTossWTXNyT7KeFeUC3ijjz31RaxAAQKac3a7NuDgJia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nigMhMkGWk43pnJ5VeVNgtSYD5u3RKDPUXU8F2pkSXiqE9cs6mcUvH77pPN5gTo5gSLzsWLQ51kHzvGaRDoJseE",
  "key1": "yN1pn6SgZUyBHTYEhKjWQ1cfo7AxEsiTKMtF4iUnEqqYnBUC8tgoZavcSoNSwMZq5qXB7yCh2fCeX8xL1zLs1Zp",
  "key2": "45Meh2cYgcN5QVQaKRh4UvX5iykyrjmWwGi2W4qEWQLmi16Q5aeAkVpphH3KruGtHwVPkMBxTvkG6TNBQhHwKgP1",
  "key3": "4guqtjT77Fzig1eM9HYr4sTPSsz9BTTDCP7r9WUSSBSfFDGQjMh7ZwWp9tVEMFYGKRJbEKizC8ERY9qfw8g5bz4",
  "key4": "hnmwc4Kj5A2aEKvMPq6HtYb1ntBYL2QjSHJN4yH2dSARt74LjrY5rBdQokEEGCBpJfE9v5cqj2j6noakwEda37y",
  "key5": "2zsvoF6TRtkgSv37Bb3U53xD2bAXdCNLUm2j9QNdyoEEqv6FMEUDrbV1BUEnPkR9oSZ2Lf5DMXqUjD4sRGZ8gGMY",
  "key6": "3L9LjR2BkYF6sqXdPjj4G7rQggud4FYpdszgyX3rMTdyy1dzGV8oZHtBEQo4bL2WMnwVb7u9WXSAqzTjbj9xrKUK",
  "key7": "3RRzDW65UK3ywACTcnvDuqFxGg9XSfRxEPCsi348iVnmYQGtGoC7VPuqCan4YYkmJTyDqnJwYwH6TmiutbH8Wua9",
  "key8": "61hvxBCxVpjgEhLvr4wZuNMK8iW12rCEWsBTg8X3Kcm5PH4yFMPBPUXiiC57YqbPkEX3CUz7GGasyi7mwNdhyNvE",
  "key9": "5Pyrnz3KHUTC9H89zAcNh6ozJ7sjgHJd7vjySEeP2oyTAK3f3Ea3f2muDP1yLw4y8fZypPk5KRRcTt7AzRuBGWXn",
  "key10": "3NqCs3FWPFkYP8JfXFtKxosaQEjv6s2MDNfhRjbKKJg9GqkZj6KDnx4HT3Ljc82RDrGLbiWMaM9NYt3NjeDNQHVC",
  "key11": "2BFSMXRXHBuJMQe9DkREsZQszPPU6JgsUa9DBLvcU9i7TJZyoPacJ2ad3A1VYh2TSc6EKbqU8npMg1CrxYcMegop",
  "key12": "3VhgHkvqDVpJonk5MCpHGhJTZAaUgpfnNNYMsJDHAyrAugbW8zGDj19VUAWsgaCk4s589BN5W9euatXoqGnsxSfa",
  "key13": "3Qhtw9nq3wcGBAM89wu5kChkwj16wEYXf4xr3zf5r9DNomGXGuBa1eSNJzXr9pHbGSDvHQeE2irHPUkq78mMurcD",
  "key14": "jfuFokCCDnkNaTPvQuK7QWzSQGXbbSbmH8RPjZvMQMYMD3XbGY9B7qX6mcSro8LD6Tw9gTD68LxNWw9jpBHhqSq",
  "key15": "4pdCdEqLcjUGJ9gmXSVXNh1RRX6jPJbd14hjRxJfXLfZAkpRnQr48J95gRgp9FVTHm7YXbySabKJsaeQpv9wZ4wu",
  "key16": "V7BJC38VoNtgp4dF7A9cvTudkDuxibfaLJR3eWTwXUi2Zt4SLUKY236mDDdKVkeLhX875HUsTuqDkWMMC5gYK8X",
  "key17": "rnSVFNeGVg9chvSevedG7JQzBK32y7qRssER74oji2EYbgQs636jpwYxayJmzgGEHKtpzJrsLmTS9MXhUY8FknS",
  "key18": "3piYhruKfhpb84k5iQvLLP9cqQGdscBEZ8bthQGz9hD145U8DiNEEGzV84tqn8mANRDC8t79f3dzhFdhhQFptP5i",
  "key19": "5cFRngRcHu2ps2jBHzsFJmCb9iuryWVKb1XJdzfwiiFXXgxTFjmSpsJJrXc3CU7BE89quKtzQtbmShaqUUjjbdUS",
  "key20": "4ZKY1WFwMy2koUBtPTrreo89PwqTApLeNfrHQPSRpeFUbg73VdJtrgAQeNXLJa6bKxDFRW9xukdM3DakdWMR9iva",
  "key21": "2WQpRQnbH7u1MqgLKPY9MJLJ3s7dHMbKVizbXe1SXNQSm9u5a4aBwYzyedpEwBFHT9ewd5cjvLVDmFAA35HyzWAj",
  "key22": "owRvrdoXgTtEeFrSVvWE4ZcBr9NpkcFr2Na4YHa76McuiAET5MxkvJVTHWsDCfh2g5uWhhqta4dahYioKdeQ19i",
  "key23": "2YthpyxqniFHVzLTGXBMcGBfKmsCp5zBS7sGghLVEedy48CPqVb9apwGn6GJMmXfb6gsJqcTLMat9QyNxegEQd3J",
  "key24": "2bfc45oTcXApRKL9qCZBSoJ39EmGAay97oisDZKnTFyu34LfLUTKdBUCUGJmzkuwd4HMvwPRE6wpPxKnrsTBEeY8",
  "key25": "4mBSyQUVN1mdarkCVCpQBqVKcmR6rzi7PV2c6QGoiHraqYwRkgEdcoVMuvP51h8KM3jnEtnpmV5rwYByQmMvaSb4",
  "key26": "2TNhDX1MErqqqsyHbZqTcyDmf4caVgNjF9JB5ZwPdtQDJLH9enqyagd9we2uAXRLqcLrdR56Kf4V5TDRcwkr4RZJ",
  "key27": "5Lgqz2rVTQZ5dman3tsMU1b1ZfthNo9svKqPxbBm6z2m7oWgKS3N6FPNC2ZhYYg5hBJrjbUsZZeYFcqRgoNAW3vi",
  "key28": "3fUMALdw4VCcDAJ8QtU1PMRwpsDZgPcsX1QbyBhVhbWRRUX8TtpzfrWUD3VTyyBijw7kCKwBuHGQrRvcxyZwcE29",
  "key29": "SacoooZKagxzk6Z2Nz1a6CvyhFYYfBnbet8juWJLTfYPAbKGacfyueJBxhHosRnig7G2BLtiDe4xVVLgZY1Q4HT",
  "key30": "4KoW59V5GbSkK1oThoRFgj7EgVcJmPLFNu92N2ikT6SDbeut9ZzAU56A9QNeowhYMuKV3zsvcpbotf9vScMcVjwZ",
  "key31": "3PBZ44hbLNotAU7HgpB5yPpNu76PbmSWWH1Tbwfbrau1CiBvybMvFtiG8iehx3XyNd6xZv5ubSyq2aJu6JdYUKur",
  "key32": "5mETBboh6qvTemd8mhpFNP8DZDN9aZ79yoowFdjSwF46AuvWxSCFiKGuckkzu4Kp7jYwbTDDhsAqW8GZ84MpX9VF",
  "key33": "37CHcxg6QpbTGnTh7HnUksW6th6zbWuFYAHtG6hLKciBXBUAH4cnUP9oDn9jTXrEifSTsSMzRYSnKeSQ5MSeWFbq",
  "key34": "4V5tmmD1ShvSH45K3PaWYSYqdsVNgWUW3waLYLEXGkw8SgGJKSeNMUpphqmFRMnJgZDkFkwRuBixWG21iYTa4BUB",
  "key35": "5jWoYUP4T5mCAcxrYLCtpcmAxhMAbbDRQbz7LV3wQJaheRYvF6a8xMPw91VETCGVYcSDnCmsg8q1Px7T6ipoeUmC",
  "key36": "557vRDeSER8dbkyNrdcVPSYV2M936CnVH4PATCFvjGpqip4m6AnFxDMyuKFoum76gAVsfiBohzW9kPfX7ZZDZfjS",
  "key37": "4wHXGpfg6DthPRroTDEJENfkxJWBAz6GHWL4nereMNwqXyYbKRMMx23dGoAFi6aTFi3vaMtXvoUsuD8rEdtyWAt2",
  "key38": "sLobdJjzsC5hpiMhDPiE47v3zjSM5Lh9FJnX2YFHacj8uV3cTt9bAYMo6EsUjxPHutm4ZxC2VnhRXDCTAqahzip"
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
