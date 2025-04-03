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
    "SVEhvuFh3UE7AT7rd1kZXa5c8SdQQjoMNb7fpvh12NKKt8M9iTvSdopKuastiDpMPFQTnum2YstdPxAGCZv5YYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A3DdTNUGRkpSaTBSU9Ne1eGcMPyeRookpFicKTQeyFeurAdsh4ZBRSvVXUASuCN3smBNNUgpUKX7vW2fQDdzq7q",
  "key1": "8TZp4xCR7D6wkmNb6SsfWtrByHU9WSuA3RNVdK4pPTwW4SvbadPdqKtoccD4LiJdyPDHB6YxgTw6zyYamVq7cPV",
  "key2": "FtNe8XS1Gfyp2eC3ARLd6iKD5rTjuwPW1iC3pwrP6CQHGUac44Re3JrRm4GNw35DwGBmGeUhUEJAhjwNrpzZnDs",
  "key3": "i8GVu7sJL8WFN836SxVB5UGXNsVmygCNUWNPTjsmNYs8pRAWtDkchXFmLZJeK9GsVuA11Ae7f99AxCPpT1VYrPL",
  "key4": "5miqr296gdJHURGSJ6dBwdWLCxPrbgBiK368CsbbFe7AAFqHMXNFHohbTLn97GALebP1i2P3RUYsYMH55idzoDCH",
  "key5": "5DztTLniT4bDojiQZZmXLShUJJGtudcDV5fpfBssrLFJApKjQiCS3dFAcnhx1Hdc6woaAgPbyfKr32DFiZ4tw87s",
  "key6": "4eTtB1cPrXUz7YgSqqoSdcMoCdPB38zqmLVAdPzdHQN7efvaS7kJeFxUcfJvwGZHjcJNYMBmCjCBtASy5JmFscLH",
  "key7": "Ss1vmdRtFNtSf8K2bAMkNqVomxWZ7vpCoc5tqAJBCmH9GJUbRTcz3EaVxsyTFMuDXRPp7UkBt5DwdaEYN2TaEDM",
  "key8": "3c5MAAp9qR3otdUq5HvkG59bnN9tVQeuRZQDURKCFoHWLzzPcZbHsjNaQ8r93ktJHcFNEWTPiUakeu7mCkFUKr2v",
  "key9": "4iXiKUnCtuDzL6Af2E4kriBnrJsUfef11BmtWfyNXPjCN9LJzdtxXU5u8kBdCKigpPje4UoqD6F8KchfHXpaqFac",
  "key10": "L27ujkpzRhkSVki6N3qK6iGSKPTjLnV8dKeo2hARQuv3tQPvNKP2b5xMM8VihjJjr9nXLf7rJMpq5AAZmhsFcXq",
  "key11": "3yMMs6LrLYZZpwPHCZbbhTxivCDk7szQPGTKoTH4Kek23D16JuVk2gzKrt8989G3WAwZhYTfQY4SvksPss18ciqy",
  "key12": "5HR935LoE6dfbTzzGfQJWRQ8tEfVmPgTiQ54V8X6vrJKFfYtc4T9b2jgAQRjJxfz4EGpZhU91vcWpMzrh9EnxtEd",
  "key13": "2zZvjpDZ4BxqexSo35S7wCz2DtS5zdNHDJtkMD2MVGy4t1mewNv8FD7iywwaBHrXXiJFDPNFGmf3JvfL9X136JdP",
  "key14": "4j1wLDmu2NSXqJWEpU7FJrPPxeiHrMc99KGWcYcj9f58KvvMWYhXmDCamBMEjZF5aM1SgaNoxWje5zxNYMhYtvBa",
  "key15": "3fvPRXoynEfy2xRxyy3b3Tp6237u2AAEhWuCPTwDnUWEMUHrid5nwHjxGei1foNHz3y2KPn5DVuw33Mw3oKRMXhD",
  "key16": "22tgzwKdDGMtHjyL53fHtVs4Zb4i6HHscePBF5jgrGT6W1YmKSpir5J6xeSx45Rk8wr47du6W3Tym9Mqct6goMqE",
  "key17": "5kXa6X2N8VV49kjAc9f3STkgFKN2DCXUKPqAunWLJLTJ5bQGBNjpfaRU3J9PBM7nwS3hFwEoCJs8BUVBg1pNsPNo",
  "key18": "5hHAJmsFRyar3QdzcSxDMGNat95wQwKZH4JMWyjYw7yasWy3R7nLmmrbQMu5ZBcosQWCEe18Xpb96bezuUQHWdL1",
  "key19": "3mQHriXqDZbTxH1Tju3uhKKaMq8eud1pi6r9VPxNpWn3FLMa65azM9kVJ1UGu5tRSYkUCJLoeJnjeAAC1G4L3VDm",
  "key20": "2vMf3ugKe5EVQoyR1HUk8whg2cDCJnBAx7QL5h8T7wvXTBwNk3SeyyqFK4EeSPcUHJbrmoqkhEZZxPNr7HbrDGdH",
  "key21": "2g2MbcqM9pxQ4jWrCsMQutZSRqjb7KZVxb8EygicRqT4hAWRyMWVGLZmLHa2Nh9SxU7LBwS1NYdDPEPBazonfEpc",
  "key22": "JtGdnkcguRxwCF4NPurWzv2hTxPMxbDA2azrRW3SXihpNx5j4W5Ksz4BjATcRgK5cTHUY79YwyuQkLL7h4aVumW",
  "key23": "LjyQMuGPhXNr3pE9wZeYcs7Y6qB1MKD1YfQiAzPpTDacmBEMHU11EZSi6NVwT894Zn13cZftAbcFQdsMoDaR95B",
  "key24": "4nBbw5xJiVV3MRvyYZbVwt2RFVMKebQMJBNVFGrdU6XXsuBsVonAo7FYTjfSu7NuX5hrCHh8okBgW6ZbDryF58yq",
  "key25": "5VxW8whE6h6RdksCa1CXeiHKUKUjv6HrRrTbPiqsBs4zjo15J5ZzWzSDW2dFmRAHm9xZ4kgARK42YhpEiXxQnJLN",
  "key26": "4b2iXEbbfWKmJscv3JZ129G1GYNmL2UMw9rJ6iSKArna5UZnA9J52Win7Co5xiq13sonbESfdi3eMYjRctd7jxJ3",
  "key27": "5pu8rs8FZ2CFi6ZXMd51PSHubqZDiiSY7eYKnm1RZ97wTqKhUEQ5ubKfhUMZTF1DUKJmKfggTxYdENhEcJ49XJY2",
  "key28": "RZrHY9BXa3Q44yydQt5vNsL5UxJdKnVc96gJkPqxKn2stnsGQeXpgSTEw6ypo2GmepFaDnmmWfYZXPsgGj4fTzG",
  "key29": "22wB5yHAHDmNVCtV7GEMVexMGBhmesJDb8Uxuz6bDwHrV7jajyLBnYbjwF1zNRDejwUUeX8W4Xk4GJ1rrU4sBwR1",
  "key30": "okuFPG4poKm8hMqYhezKVTnZDkp7o6jPxDTN3rLdoTGjm6crChtEDqyYbNSTJ7b5vMhKiFL7enBJKZpvmgzQptn",
  "key31": "229Fp4ohqLeTHkJGUtTPDj1HnnMH5ELcE6Rx33PcbfeeaqH2YWbBkD8bKSTe9RQJYJm5TbmmpTrH5mWVXSSWChUo",
  "key32": "28YUF3AUPEdh7A5rWTsC21Qqnp9U3C7w3TmW6HC4dSxKa2ZZLegsmeCEekQYniaMhU4dUHuVPvq9ox6WgBAonED3",
  "key33": "4FA4DSHchE6PuZnscv4usKH9w1rJqS1ocdc1a5virDd2xGkvuis4VB83nbE8ocKkC7uhm86TwmravDq4Y18h7ZAA",
  "key34": "2PY9uisjQHkCwuG9fKNVk4rqfuCWTLnepmTb1pGeh7pf7XGriGxsbkWWkoAN3Mihj3jTpvweLevAwA6KL3J7Kv7q",
  "key35": "HZzR1vDJURnU84MatkaBh3aDKkb8iDQwRApEarMnesxfm8SZAwNuoEtUHmi9AfLdAYgCdFHr7YVQMUwe9LQ7JrA",
  "key36": "3nyKeMnQhdGNaHtEDySoiLy8BeojoXkynfdTQxbuM2e3JiHqXxbhzikjKKMQqoG7o2sytn9tz4WWz5jgp1bAGLQp",
  "key37": "53TGeUzPj1PLMeYEu8dmrYwjoTwuaXqY8mMXAE9ihKxCSWK98fRoba48iEPiiZrSw9RUtZqifszZN71eHb2ASJ1o",
  "key38": "5BcE8sUCxzaQ4JXtZThibYDv16LvirahhXBX69uXa9BYpTBWXhpUuWHRHfHUq9QftiKpJeJaqkuXwBWdTDUPDjA1",
  "key39": "6mUkfAueYDgCkD7Kn5ukLdtxFJpcZNC88dwTmqFtPaaNQAJryRASsbNjX3nRiDh7nR4MYKWEzhrzExPjZ2TY7zn",
  "key40": "477Xf1LVfEHbkC3ZN67ooCeGQmHegmt1zSXSWRV64rYjTUjj1D56eFLHqCTHnZ6AMRabwS8NV9kMk1adH1g58NWV",
  "key41": "3CXpn2WEird5wJTdjZmqEWX4P4vXNX2yYFMQgNjMddA2A5rBZTs7ndMp4kSLSgfMFmr8Zkrzkfwm7XsriT5WPmBr",
  "key42": "2zv5bhTovivcErmVHdB6LC3Xj6HGA7Fn1ZrdXowRLkiEnCmtLTv9qbhXP6vBt6nx4Q75nPoPWP1DiTYLhCB91ZDN",
  "key43": "4xzhofF1JHPw7TdLJpPovAMZkNAJESLnepDQ2Mw8NzZJddLvWWZrkv1dPcGNHpAPoEWNx4M6sC11moCkbrCf8re",
  "key44": "4vPquFbhyegqrJPeyQBrSvCQH296xzkfbkX7o67s1ehnC7oktTc2ZwPkEcPijmTC7QSYrbJKuiUvEDN3KyzD77Su",
  "key45": "jdX3pN5cxpwuoQyYn5et3ZDiqQTSafKaAsP7uyxPdpwfVV55H9awGEJj4LNoisx3PsugZXmArUDq4ahppKmh3Qd",
  "key46": "53hfMRFkPewcuYdK5Cz1148H4tBhTmzTF6sQKJqyJAQZR1K16enfYHavmNqmowGfeQDRH23ckBBh43BPQGYicgUL"
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
