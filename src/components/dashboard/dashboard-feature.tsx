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
    "fNLg9u4j3QpTSbEJJqwYgxxRDTHZKmU4eUh5RTjvZejhzj3hXHjZfao7SuftWdfSdaXLxfkgdNsZHXZUuYmqrUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RegDNsPb48LUtQLNFRRQQdk5Ew7XTkULnsqoGVx2EbgudCquKi7YrrD82vAAmjYcCmEEzfr5ccbBcKt3ExcN2Ry",
  "key1": "5u28nCfxLFkkVYFeGBPhJsA5xRk72K3Y2GYkZ6fFzETh6GcnKVb1CTApdncZrFxAgGcbJQbg1tmyj34cqgL12EeX",
  "key2": "5LkDFaXaXJATm9WWhmigN3vTFgup8dDxE1ozVNV6WVPjzPaFC5fHqoemf3DnEmuGjcwjJUemtfSUHGDggMmzdTpj",
  "key3": "3vv9x9Hky86AkhXjXGqRNiCM7e9k3jFyrGdCAfxWvT7Ferh5oaETzYXgnYq9dkwPqmniHgR2BPXhPTTRbBPp1g1w",
  "key4": "5GaHEeC6TUFeZC9ioaxHQZeLyhS5mYYTTMvZUYfYyqeiDbwrG5zvPbDzvtL5htQVKtd6VBSdMWd4r5T7YSNsoEo5",
  "key5": "5PU2YnFweyJzzPsThncj2UHgrz1fN5PtnaPMjncHmKmNJxDfTjqNQUvpf9RrTxQ8HoBuRRinhxQVUb8sFT7usMdp",
  "key6": "2q6JSt7M3qfNRXfpPUGRz88FWuPLPZrNeUR69DGdgDyQtPwnzNa6zjPtxpLmTNUg7uc1ccvwi2QpP2xoWzGchHoC",
  "key7": "3jga9gpBJiBupBiztG57g6pU6QipXTWRv6zonFZ3SbccgApWv3yMLMGEFo7fPjzUVfZWbbY92VdL9jtUeyBC9TFd",
  "key8": "QAm11SbjqvCAXv2ES1Lz5fKBQX431yyW1gAGRa6kBaRSUiShrRxkGRQ86PV6oHCNhXkfvPKSKFbNSV66qSR9uem",
  "key9": "33pjtqLKmBkF6QQvBLexXRvn7neDPB5xiAVvhxWEKWm79C1mnmpPMm5nchY78bvxGYfDAz4qyB74YzoUX3r4eLoY",
  "key10": "3cCA2yHxtFQKRQpdKttJQqpdQnThQHJx9Q57hDT1Fms63EV6CHPLJGFSGr66cU7SXVqPv3X91ueQNFpQhewgm4Ti",
  "key11": "46zTV1HRM6cStKpciuihN3DnAGQcE638xyeh1kpErsGBZGpHi1Em5HFW57WhniXA7YJektPDGkE1YTSBCspR51zS",
  "key12": "4ar1LjW7JpZNGpEz3YLjtQa9N6Pcsa7RXz7wd3C83GpepKuj6yVscJ4otAqHCvXJgeUkeSvNkaBVNCnWSCUA2VQ1",
  "key13": "5DCNbKo3N6iV6ACMSHGCrGNSzpo5acRByqRKaZ7C7FEFYGFdUwspNTQyjy1vThzyGmPuePvnHDzdQZbk1ARH8JEy",
  "key14": "2g9TEZqQFGdtwfD5wSVrzA4MCKiYAzN3moKcxtzdHG9uaveXtwS5UH6iM1hXQjjarQPCH2UYLSrmgyp3Uk58d3iW",
  "key15": "4hTMtcBsXM7FpBTYpUzUPDbtXQQSuhFyBgcUBtfqG38nukGqfHh1ePcd6FKjXiPmmkCQHr9vnMefja3brGKZ9ciz",
  "key16": "5DLPMhYBeafJu7VpavBFdUqnstZ4h7vpwtLgeAbBxq3aCV1fzrbEiViWj8URouge3aXbsfJBfy186K1PiCE6Yw8n",
  "key17": "3xowk47suf5eD6hHL4aoezPrN4niD2HKs4LnStBUxx27XSUFTnx6R2EhWL6eNGjSoM65RqyakQXDnYiPjxHNamWz",
  "key18": "5fZi7fN6gYijuVwPnY8ELLcWj85AC5KdBivWi8kzXddnsXLeGduWAMNgo7xQ9vWcpAkT6qhxk5oyY2R8LCF11AuL",
  "key19": "2ju4VvLgYvSkx1NbZKYPfZJshQr14Rx9H5mouUFsah58hiaxJWSDqXpBVxWVzsGybV5Vh5kSKyDnDek3uAHe5sRd",
  "key20": "3hAW1QDxsY6rxB11un7Nfu2RPdiCttnRgct5jfkZYL7Q1KLcf59RkczSkYs9Lgzxj6HDE9GzrDvEXLQfyXBvFB5U",
  "key21": "ri348KSR92m1PjMimorK6ZKCFv1F7SVPHW3bxeK7psQ9joFhvFoZK9oJTKJkfq95wnAXVKunWNgyV1kVBGS66dS",
  "key22": "2CUBJDUEqRisRnjreHhbmx7w3iDsZPBec9PsbuGoFmySobrgK8ymkbnwHAyzVKRWiyiZEAX2FCo91q2HjWkTZcxp",
  "key23": "5Mr6TEJLhVEYV98ujFtdomGyr3PsAHceNqQDiGAjEVKu3L6SHfTEufZKbt6Pc7nPsihYKHzpKYyfrKo2DsiM5RH9",
  "key24": "46xsaFR6Pc7a7oYTDMB8NSUo4cPTjauPpcaKHsUcmy3tC5xJqVVkNe8q7iCiuW7mmwm5NddZsvPWEbm85dKiRBZH",
  "key25": "2mGqGuzb88AtWWftYtNYSR7BS9sLrsD5Wu89wyau5sAjeiSxG2CYRMVc37wdN76hheBFKSbHLqp7H38cLj2Caphu",
  "key26": "RokcKQn2iTfjcd8mqUynwcLuBqn9cbWyG55Fne4KA2XE9zvFNJ72v87gq8xUgnaig7AnYAdKt1Y1eSLsDT9NFMg",
  "key27": "ncExSfTvU5aJpKe5pffrRRzpcikmFparEpTgZ3iS8i5oVy8y81K8uYAGbHoofbbj3iYrKbqy6m7yjkHkXRMkecP",
  "key28": "65B5kLjpwiA97i3yK4onJLwJtyL4FxZUQtTKEmWKzTceo26UM5iCZ85BWCqPNzCDX6JhJ53TJtKV2oZm7hoSUdSe",
  "key29": "JV4TAB82KFRdYxmQJykg1XKKqxhXMDJPqp1GQyhKF1f55z3TXGe3oj5X4bPXgNzRerNqQh3EDMZ5FQQPu3cjGVE",
  "key30": "3mdQS9ZYDFpAWxHbxhHyPNU3tvqTw1aobV4izpQQGaCiqpaMmZgX27PUMe8SVV9pW1L1gDWaFthcNaoSS2pPW2Gr",
  "key31": "49E4bb7WmZLF4ZXum28TopsRrGdStGE7xKRmAAN6Kmkj5uEcZneH5oN242FHaTAPzFg7nDnBYZrU4mCHWfNhHnuV",
  "key32": "HhU5gDWNuwFU93sDzic29WUdwjKSz9zhntCYTRRg9G9wRdffkgTC12r16oEBxgxP1EciWW6ywqpiECgjzwVTPmq",
  "key33": "Mbd52p5JeW9ktXBEvKrFefx6hu5tKJzTf2oTB8JnQ8ck8C9RsCoxhtLeB7Mhaz2SShhKW6szcz4mujMVPC16dkk",
  "key34": "5xJGzdUDGgA5nEy5Bw7xn1b25df1jjLbVZ43aq7FqtNHcg6Qd5AftphwstLJ6xrr8GVmY4qDXNz1NFNFSqGa8kKF",
  "key35": "2Z5pjSiLAeAqoFdekTzdTmzeu9mkT9jBdx5wekF8mSzktu9Y9EyczhBfjW7HBsuM3nSdJAteWuZiRPQYbbvUhcqb",
  "key36": "5bwr94yizyBhUnsEhz3YNbSyhcYSDkqucHZR51Bsk4jnLCp9evjxVBsMJEQjniMvs1158sdqbt7KngcfrNT5ADMS",
  "key37": "5z8wGccJutYxmTv13ckT2mbDovhtpFVWQvjrycNS89uXDLmarvAzAGWCsijHhpNx6STwcK9TrXHGe7PEcrzXjtz7",
  "key38": "26JHgBLYLDwPtbwtm7XG21ywt9o2yVPhCxGqiSbtrXfU1yoKSrxmi9K68mpuh1mXajSFRzrJ3mqzXiWwu8wPhXi4",
  "key39": "2H4x5BZ21S9eSMnWQiRjTEGnha983gaJK76NPLaW6e44g1ofd538wLnRrkrH68WfLStQ5yFo26rD1QCpZjvo1NXp",
  "key40": "5gtEewSJTHrQcv3Wbqvt7nhQjR15if6U93qiNt75ejPPQo6FcJQ5Dos17AN6Mqssa1jUPdCKH6gfYdKu6nSFQp7q",
  "key41": "5KBWSt7cfzFExPBBGituA7bfM8QR4zbcVmt6EXYf7LEnZRaTZ9QBru5ABpyeqFhgSuNu84Aa9kkibmeKAU6FzY9a",
  "key42": "2KvtnDbfJ5B7PSPRSXgUtzCiv963sXxunnUTfbfVsxVE9zPAfMkJJzHwh8UJX6vCP5DiTpb3KR6VEzYxFg574MY7",
  "key43": "rhpYDdfxawarhbHBbPQrsimwktQxd9o84ifxQnNHvwvWNiDkcSTA9ZD1VudcYJksWeVSoGpibYr1B8cjPEDPLbU",
  "key44": "HHngxHAfnPUCzHELjr8AFc6tCXeVq4iMbvctd6bfC3y6yefw4favQNu8rGkZDapKsLX68MarsXcHvHQUiuNU65c",
  "key45": "3v4f3cPoLHgTHQhZMRvgCLgbEyKT9LBPpYpDbY95HVpcP5mx82XAj2L4VAbTUmxMqkLNwsBaSabQfspRQTWLc5TJ",
  "key46": "5K51jMEcSoUCdw1yCuv2WY1SfpaXpSBa7BCB8BvK9jETyAg1Esdjqmyb3iKdj3PMFpx15ku5m1KUE4VSMNGMsxN5"
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
