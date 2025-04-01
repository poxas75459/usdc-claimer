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
    "4Q7BuSWnzfzL79oJEABWSmQENmx4GcFCaxHrArZLiWgGHoAGwqEhBaHy76z5HtAkCLC59B5HXMf9GeXHQRTmAJPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3syA1BXZyX23BEa3pVkT56dnuDWtX4kChXqc2dEYjwMeGRvJNtv5oPVVmdFVd7VUcbjAaUxR8d5SMeqmvJ6gjUqy",
  "key1": "cUoizZfsVeEGZ4RH1e4WhBtkvTBqfpckzZ7Q2v5yxSgrALxwBi43gNC5mcRnNcuGX3Z3uvG83wKFPfcNuZdDeiF",
  "key2": "HJwdKWmX6r3nr5zBQfmuQNWo5JBLmaJq3SRvNfNYXZzbseFys1tLC7ukieGFqysFGqGG7Egek8aynWvV6F1sooj",
  "key3": "5AbWsSMkJwUS8h6PRxzW8Ey7H42E2ucDfaikw4v864v2fjXnbPWaooaZ41ZyE2ye2XR3XXaFU8SLpyhBv6HBVW4",
  "key4": "5NpRmQAo4hQCtzygURnM3rUJqtCZ44o86qd4iNtKJVV4J9Tiv59UhHXjBUGcYLhCJhEB1i41qXVAuYb2VAAihjgs",
  "key5": "pqsFBZn8QnNip51S572UEeXFk8RmHLqW7A8Bow27KU4ahHRD7L6gFbNzZ6aQJF6x3DPh7Pwsg3YacgncUzGApkc",
  "key6": "3cJW4fG8tt4yXuyEDER9DdM35sWzZ4s3HFV2CXS6byK8zjHn1KEiect9FrsDCvV7FcsEuy5jKAEtDcbYRuGwkDQ7",
  "key7": "GJGc1nKUa9ubLLQXNjFLZtiuVuMtdbvj9hQTaLWnsw1dB3XsDTHtRFSagq41GvLhki2rYrwc73ATuiMzT6BrBVh",
  "key8": "4FhSkU6Rmrvbt2PcABBYYwBVEfcx8Bwc4oaEQeGt2neJSpPKD2VdCitBoayWth7KcPStgSPy5Lw9EXSYg554xJTn",
  "key9": "2RedLQr5atsMjsehpELzy7VYRbsoyHxmUxozugqAVewYDi1uJ9LefJQWijycRLSr8xAA1eh5GQnyYEXnREGr2gbR",
  "key10": "foF1t91z1uDWivCVLVQ4tfg3EuG7SavLcdsuV6tTYg6iWC26qjELkLJsuL4Xjvp3dsdaerVcBM8PyMhbdEP4KNo",
  "key11": "4Pi5pnbtArcoWmEZbbeTFtTtHPEGPgtH7ScnzrAy2hG1yGKLwcvocz56RaKEyvW11fcqyLKePFkmLGy8xEzSvwCs",
  "key12": "383pKBGRWix5mpeKxY1y3VaHvyqvdh1vSp5PKXFAm1jCoAvtm5ebAAmdz9trm4pzDZnH6aS5yojpuLAbSmvqU6FY",
  "key13": "4aF69dxfCCw6LovkePVU9DSU55LA6zvz7DyQ6LQUgQWyMDeLCQQkLPBHHArJbGbRTH2XeSGauKWbfKvyk51tCkqP",
  "key14": "y7XNLTejbfeGLNCjWkfv4qPJqYBXkRmSZdTs1fYdhiG33x4npw3Hk8iwNztFPwWcdg7TGiCBPV3nJjgqfZw8CaN",
  "key15": "5Gpw1cAWkKFHvkNVffzed1Gc4GDXAzY3vr7fghyCJXZWWWoL14MDr3h74CwaqMCVWojN9XqTxbE7yBAvUAupvfU3",
  "key16": "3kK9AmymbgVCP8P5qYSt4o6UryyL7V1ZESb6rQxgxYYiZKjVDQ1iaAtHwMiHkMn2CBJGu7ixXqzEbUMBpGjtbCoZ",
  "key17": "5fvzi66Wf5ECbRawhz15YMhsSGUJkCzMf6xX2DgR3BhsTymU46XJ2bAW6jboXoujTNQE5VnHRBZgawE8p4i96E8D",
  "key18": "ebjFrDrK6diNMioRn7GAUrv7kXKgn7JrgqA5HQ74vf3JY8VcwqMTarZefe9TD2H9B6CS6Lnh8XzUcnNqrNTzem1",
  "key19": "46G4msrRFV9WJ6pRQLtXT47Eox9gaKbWAA3AQALHtuSSkqeAMXL7CAn7vLVMUy8cz1q15uJZwdSFCDisx2dmvtLd",
  "key20": "5RaxcQ5ZFNd7xFHKSjKAcUY2ggMv9dAJcbBPV2NazgbhiutRNzLs4CMKMyXAjkE7B5ciLnNo3ExNWQ3rdrtrP4m6",
  "key21": "2bxu8uw4773rdYDf3KZayZ3Xm9PVtBt1QEGwHdsx1a17Guyds4LZTE9mqfd7yfkw5HTLVyQYjXBZqu9V8waWHaeW",
  "key22": "55WCp9RZ1gG3T53kY6eLK1NcBKAk5SQMGQw7bCdL6wLi3RRiUqkwR8des6eggdmGo6MwSdfWLNFLNMVrPERVeWLv",
  "key23": "5wLENbkKY8L69scdWxWd6qygCCix3x8pvqgd4mcGdqo2a2BtxybMWK88waSWx1uP2Ae8QwdzM5A6rA1TNXSQWB3S",
  "key24": "533QYjaAEGKuXEozQiZnL5hejf5qVC7YPBbZnkaUQT5gFAr7zeSvADWDXbxX4y692gjvka4bueSj9qJpZoYHAAGt",
  "key25": "53sC3VPWEuhehg5wFoTi9XDLKTksqRkWt4k6DPKxE65upovemikreF3cV3da3N3M4dUXVW5ceVzBXmcnNYEe6cYb",
  "key26": "4ULur6KidWjMXEscZuPyMxcwR6HD1Uyr4YgGmiWSGbutZ3JBWe64Lc6sRttztYtWZFXwuq1e6RB3VPL61MzyYePE",
  "key27": "4qTumbZbvnApUr4vPzQiP13tnTAb7LZHrxVxg2bmPyKgZxYp2Txs4DP88F9fCzawMdMLyyPmr9gbSJyxig7vPFgk",
  "key28": "2L92vVs9jCbeN86AjrA7taBvtNa4fzongMPZHsNQUsugEZthSArniNDyYwUTw7kTqJ8cmGZfpPXNG7REoRdecFoP",
  "key29": "2eTmWZqGr891m59NLGLZLYoDnH6DsaGJgTwemmbfUbo1cbrAqPienRYrHDWLtsrr91D8kLhfC9DSevL4PQGxTGdA",
  "key30": "5e2uPJ1KNmWUYbdjYbgmTyP6YSW5nPNVwBVzTeHHKWxxLVoSSzCPhHNAMqnj8fYjgbnyT1UYH7EYtKoqmeDH61Rb",
  "key31": "3sGUJQEMFTU9xSVpLCa83ktVHu41AVZZgyaBVPrMfKLH3TVF4mvBNWD5isvGiTsaLbTyaDWfK2PrHQbwCg3YccS8",
  "key32": "54s7of3Ds9YB8B9Q6tj2nQjidjGZWwmhreuxtJJsEytpjdKq44nchUrd5uRrSho2jbNM1kFeawUzQKoFao4o9qVe",
  "key33": "4uC2YAp4LJVQHVX7HzW1bGJVQ2As5yBzDxJxWFTc4AC8ssVRn2WWKHQhe3wy7cgd11A1HS6QGWkdGe6vE95GYz5U",
  "key34": "5NvDwoUwuLGUR29zTTcdWNDdk8UDdNBoNahumWueuLzEL4BUQtaBwQ9C2fLfUbBZjDePRQi2kq12zpmwjBadycJ7",
  "key35": "3SpcU8BSS6NV8x9mLQ4Nf3JX2MYqdYDNq6AvdwEsoBpV2cqtBaQb2RrwScy4K2Hjo13gEsnnuWRTgL1SQEZPdE9m",
  "key36": "2P6nMR7MLunwVNKDvrno3TYiBPXzYmLT7LamxjR1CpwiNW2SD2eerNPaQouyhTSpHZigNKnmCsZKGQA4N7PJnLQH",
  "key37": "5q5JZUSMy3Di54RjpZutM7fA6758d45QGy7EHR3jbyCBZqqLN8piZBgYjqXeTt612HVmoHrfBAeqkUydq7ieSvvb",
  "key38": "5Ge5bZyEX7SUgJN9Vkpsi1Jh7L8qa4RKYE7fgBd1ndphxKYnssmbPwECe1hWof1EcUdx1Aor13KE3QUm217hrFe",
  "key39": "6jGuKwp2hYGXN5wn1xufikiwo8JwjWsMaLMBN1SRo6pm2xJ1WbWWCmFH6QsQgtvMSUH24dexThpHxMDWvbSbJAA"
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
