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
    "2pcmWbHFWCiFZqg9XpR2VKy7wvtW7ijsXJTAQiHLpMBcaK6tSc7X2nRxpTJmAt6Yvt9LzdsYtdapBi4h1oUZZXdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uK7Vaz26DmP72yGLj8VfwHNrw2bpf2HwfZT4LYneGP2ttZiYQFsRKohe1B2vU7wZxbL423M4gVNyncJ5cYmwPUd",
  "key1": "3RNu5WGRpPgjcG2PZm3bNgKLrEk9fnj4swkgSqSVR5kVLXJrPPEcBc6RcrfNeygp3myZUZFCyeDb8X5ao1m3X5Kr",
  "key2": "3XeHFodRSt4CUceJDkrsPMFUzdGcDjeK17bZdrMuUxARgUzCUsuV6mYPUHHCNhDUmcnCmB6bkWgnF14d6Xe3s1wi",
  "key3": "2vNrQZBnuCTuv28BMvbjVRythMczFNugoBX2unXCVb9b99LPJmEmiQ7uwbxv1GCGeE1rA6fJtRpkHezMh4FSH91j",
  "key4": "2KHzfjieWagYwZRYKjwa82cc4W5XSpz17WU2vSpuvuxVSUnnCeTTVvyYg1wtgDMmx6PAUymvreYMzHE3s4LhTgWZ",
  "key5": "658Vy24RrpHFs7H5TygnsfUjFwg15fWT4vHLz9k1WnXz5aJjbeDs7Myhd49b4i85AgJqoTui5qbfbHFy86yPwXM1",
  "key6": "4ASoZjB9DPBW5EZoqbBiL2cYoQQZfrd8WzkNrprEi9kCseiHMfRxTyrAZxQWoaomxUM4bD7ggwKD9H9KhM1seLuQ",
  "key7": "2xpLY8sZmUcEQ5fXjotCtzTVQEcUZg6QyhpAP6cAE1NJumGwNkaWALtvXE2mHywFyjZpuQX4rt94vcwyCU3gz1Qb",
  "key8": "FZNhVSm8qurBfQWohnwUV6TPbsKzwj31rcmsyM61mUZp8wuErR9mnSb15qsi2ePWnAkUBpb36tY6WNiq2QQdKi7",
  "key9": "AyhpeQuTaY5VkGHLYypBJL2Ba5H67uMLUCM3n4YJuBN3WybNNfBBh4DP2TDCTHCWEQMNjHsa7WmhDexLrPCs4Yu",
  "key10": "21eRK5u8z3yjmMm2QizjbLt9w2u4byxq2TFymMWV95PWLaxnCJm7jNdAGBxoBZShW9BLJgPiw9Rgpegz3sCF8Dq9",
  "key11": "4E9KSgEmjHqh8PLS1aN8fk6Ewtz64gJQkugyxsW4eUeutRTVAwBtj4bXcduGVdHsALSfyd5WK64QZEm3Wc7foZBm",
  "key12": "3sK93xffjzd9WESfGhWWTP21fPTG2yXrpUDGKYPK6QdtdtrB9paocY29VtDQjFNAp1iZaKYmopBeTouNmJvPRiZG",
  "key13": "2odCoHYhM1EuxFiCnZ6MMBJ7x1c3WJz7B1ZcZ9MaY1wEDYxhmdiHJ5UJZhMexCviGs6pVhBXx8143Gpzn8TgrksH",
  "key14": "65iKYTBdUYcTh23t4zxtQm7QU9B8FrqCULnRCPuGcddNm4wNcd3WdWCCLK4xhV2EeQuqKvYPz3S2fkhHCTURjVXf",
  "key15": "HUQSbmuEjuG6ZwT2X84X1yG3x84H3s39veGerv9aN7TgqrMe6jsnQmQJJLhX5sqsUimANzFV4g64JMiDuiwGSyu",
  "key16": "4P3MiGfMBVSW6YHpCR1Cfig8H8ixsmdthYnLbKLyncVAqsubRcWcWT3P2FNrHqPwKGuLQu8HzRNh7JQ6WZbcLNZM",
  "key17": "5wFn6zJToc1gnaF6mmN7zHdNoxbiC1EQ4GhoahxKv3jcBz5bgSarsXxaAbo98iJ643UqeQD62znruj3PWn1cCDeZ",
  "key18": "ptTKpNNbkuquFN6K49mAYMhZFP42FAWk2n75h7FNQ3Kk6nphX35WAuemAqcNSgUBUFa8PmDvtpLCjSJMihMSWZV",
  "key19": "m3qMckj26v3QNQ6aQYyjjaFoT1fsPywMxzYAdVaArgYaw8GeadjgoFMT8HrtS3esxXriHtpo3cDFTECvyM4vhff",
  "key20": "2vZyYTxXkvgDoyncRi7VVdwwQCvipVBtKPHa4V4KTHfHDuSnKpNn7qcu2TnJg6eZYq8kER6bMRKNEfCRzkpkUgdY",
  "key21": "qm8xK9QpMrSSGZHbZpZwNqtp8w2msMAbejeXVEWitLfkU3VQefXybSzP6a3AcWCoGXP5cA5y3JDk2kxXJPmR551",
  "key22": "3PeGpTTm3YJCWHVbfztjHoCSihMtg8uPgNdMifCkqSoK2RyaVWaFKacbaT77Whns1h2yhJX3VpohsyS4NpEkWZZN",
  "key23": "5YsZeiMLhrPSQnLcBX287fCiAgxcbvb27xruYgyNXb6T3TiLJGYw3RNDtJcmXgQxt9249MbbattKAHBydnub7Zm3",
  "key24": "2VyYsZCJ6BsJYgFLbVvM1a5DtCXdsrYAkTbDCpooZTRDbg3f4fiDKhvDi5mM3H8SSqUtrJATkk3fZKNkMaJ9Tr8V",
  "key25": "3oZaQGjSjstFBnRNBvxYvxRU1NQnLvihgNR7vBPdf8JHjoSGWNSBVX9yEhkKUHAce76CrECJWUmsFjHWaKeGC6mQ",
  "key26": "5wKRkn3XujoDxQPipMQfsQHDP4n9PZA5W6bUfraVjyzMq8TRTngyAFLTDR3TyNTYaaCgdyCd529wQNeBZYTJEnho",
  "key27": "2usLR88MYS8CsttN3UmqaqAg1pXnurPMnVeCZ3U4ZwxcpdCXnivg9QdiRrpPcjXxZM78dLqjAAALJQBt2H9dnA7c",
  "key28": "3r9SYhJzf7Sv4k2YGQVMpu7SCZhdRDV4Hotd1QpxrD7hJ58VgC7QVtwfLuFNbVY6G8zqYQdYBgs6XsxvsjVChG1f",
  "key29": "28WihqFKmVJRzBQbWFBWdeC2xhg1bUFTUXQFJUaMoGKEzu1aTq8SqveR4dL7UbsuKqgc8ucYqyoh3fYdB3etErhk",
  "key30": "4JLFVQtvf2NWmAsR5CxyAtRqbhr7zRskrKAHd3HHdHM1jqsSyyBdgdBGRfSwwDrevpUKU2zXW7MSLtQ8r4gwXRzb",
  "key31": "23cagUxvGoaYNT7i1t33VCe8ro45mGm16g5A5hpkWUtiB1L4TZcghZBSbhMGZALKk973JbjkxdWwyyWnBx8yvFPH"
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
