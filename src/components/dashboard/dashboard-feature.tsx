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
    "4ho6CZb3TTUDf2vMEYqTf2kbaL6SAmKm78dEU14xwYLtRZUMPqyzrRGnGF6BS4o9FupFAtZZinoEvsBzQC9ADcWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zPWq7TADPNnoU669bBPbJraPf8jimRiSz5VkiwvmtdKJ76keraE7SzfRTqDwk7c8bpSKU7afgUxMvVuexQWWBW",
  "key1": "2ip2pdRCfAWUqrzgsBY5m9HqeFCT5NMS1Ny55Q1kWTvRAE5eyiLreHjJSaGpdn2L6AuAHNLifu9DXEvKdkHneQD",
  "key2": "2LqQ5q96TveWwNi6z4SWmR5mB8MBhjSkqcvj23WA6TV9pX81F964HgS49cBdPAT4oUkjAgB7HCa4XakfJyaH1YBS",
  "key3": "5z5v4SRmmccD18kJ1bcotX6MDpSf7hkWib6kHPuaXnEaNSvtiBnPUjtXJNC9sxFAPveJYPy2ReThJLiHDjLbxXHn",
  "key4": "2tQFiVvo4cuuckdWRQtNtWuzFQmFbyVjgzgDF6Fhiis1hssWpZqknHWcBy1zTUMg7o7C7tnwzJmHeWZptEtK718v",
  "key5": "4GfrupoDA7VGU9EtyWNTm5pzXWKiw9L88Jq4qLZ3wTcik8JbyZfsDe7Thn3e5ZaSkUBeqfRsPHaCD1WHrLmZBXjY",
  "key6": "2H3AwdF1rgkTg3CSMg4abEZVoh4eWF4gUvR6RXeX3SGdnQjAk5kmG918nmYeRuFK7K1jNhJvh7cxsmS1uXP5J6pt",
  "key7": "4NG7CoUhPCcJMqrDwJ8SUBT3mtMFzdnvoG1m4MeakhGo9Hhwk78ttBSVCf8h1urv9gYLcueAQxAgbn1rb7Wky7BE",
  "key8": "439CeYo2XuMVD6ujXwEhK2X5sTk4tTmBGB4Z9Mw8qyzXCB4FPRh2SQkTe7bgwFEyHk7CARoVQnjaDwKFQKd6BFAV",
  "key9": "3sas2qeMaPtSzmbhWBzGoXpwZTBCRDg2KxbFTHfhCHmiKjPxbty9SeiVedjHYR7FiSsZPiuRm8ZiXebuivpcVNd",
  "key10": "2AgqDKHZ3pojgQiopVtdoPaCFE3tdXGzPGUC8bqDDLHf4PVg44UYyfPbGqiVxxUMwtKY9xMvVNZKBzYSrLs1jrgP",
  "key11": "3qY7HANWjotEpMm2zGdbg8zTv3doBcHPmLcLDcKuZHrGyiFmuB3fnvDzvTedwBDe7ukKey5RAj4ydeRn7Twpn8pm",
  "key12": "3M8D3qhSz3PXZ3tLqePfKAFPAeVJkKYfptNyH3jp1NMGtSa69SZ1P82iUkcuHQsvZ7Gh33yNCKDvyg3NXCqtbEJm",
  "key13": "5rJcMhtKfrz9SMVbe6TsvRJQdkfVcHHztSsVJsRAfmAv6VxBbki4Eo5t8fEMqKqQBFBmGNtyKLivciBkosdW4b8f",
  "key14": "5QJmBcCzdQMQAj7kZvoMKGmxYfnVb2Ni2xp7MJDzz1fwcdPvJoszC76U3rFgXctSQTWQh3P3Yrk1425rPXk3UtDo",
  "key15": "uTuKZEmYwWd6ED8aT7SzkL5nRmhFaro8ys5arv2KVvY4giFNW5f1HouwaPtyENnFxtK8knfDpDjGSXSGzEC2owP",
  "key16": "47moxdZGL5Aj3vahJuXaNSJExtR4z7xAUSCsqNkcX8Y2vpP17dHfNZbERLG3voobgbytiucnwww96cHrnyxYtGbx",
  "key17": "5oKTteEmgN9zahmePTgPnXG1qGDQpHeZNk5TJM5dy6Uz5Hs1x7hwfTWNkMSdqv5ZiPBTptCth7CSXneeLWCVU8MU",
  "key18": "2HxGLvp1rVQetDJExFJBkcpQndVHCvdwWUPXyaSoPEvbDRujnFxKgrNiBJR9D84qoqoUdwPNMfJVV3c81EoeAGGV",
  "key19": "5LdJygxzK8UL13oiKjPn1GWHXYMchQSyGNgZR47nGZfLbv5EFS6tJQ7qbspPvzYUGRzeDMNs3X5CMmkC8cVNMHxc",
  "key20": "5Cw4dSsN5ok6PSz328ADR1GoyV6zXcDJZRSpPxNpGpksKiVQCa64mkRgSTVCTufzPs7HpUp49jniQmh2Cv9ytJrd",
  "key21": "2YkHgjXqXHvXYZJWTZ4W3KXaLMSJeXXfVqUCj8Rp3yawZCrUxkASqf5yKxZh9MRXgRAdGQwM7wZuDXtXz5NyAsTi",
  "key22": "2jNKHwzvamJwV7gSuguvPoaSjMjjqcWJxNXWy7gTNsnRwAaC9F62huu7SZ7Xby3rFkhU7HtnXExhZ6w6knHgyy5d",
  "key23": "5NrgB3Q9wNuwNP4Jkz7asZbx12dCbtfdim6vFf1Mir12zQd8ntEXmhYpnBZJrtuws5Ro8xktxrXwHgXSRYpYDf9N",
  "key24": "H7SvC8irKenkWqG8SUsA98VsAoycZmbBEgtS1qyvDHu9bR34ia6vGcbRFPmffr1PzftYhobWZ8vZsofhHNHdBFp",
  "key25": "4ooU122UkSreXEc3fQoY5yyx25pNtn2Fh7kR5xEk2xyoQ5kgv8gdcQMUm5k8r8gii2ogruwmc2BLshm96BEkuife",
  "key26": "2N4P3JoZW9crWiAvyMaQ3ixKYBUdcBnoGVp471vi9W5QBAWTuqzn1AKJtWc3toNNt4MRzURwvMtcFYMzitZr6D4J",
  "key27": "4HNXe68eqbzkWvPzkhwnfFHgTpUtiSUyoa5CMJDBGnMUUEbnkfa3RYQFNai5DsLndv5HCskgZSZG4LkPF2YZ7yvs",
  "key28": "5cwtXpXW3zoCRSpG4A5FYWuHZ7SD4A2qLT2iYcAi7mwvebKy3hoQfJZ2gM6bvbwRFB2Xt2oeGoSmtNXdeKAR2hux"
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
