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
    "5H4XyCAP1rL1NNcWE8PrEzBPLHcQm5BuWLn2iF9F1CSsiS1UobbBwxMYeNdCfh7Q4EhkE8fwyQxwRgGJosEHBAp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbBoQWB1ZfRGMCTyENzfKP7yxy64Z1CjpaUirxTEGArCkKJYEJiRtCjYRVnZSk4wQyobPJEaWMgEBypwGAqfiWq",
  "key1": "ZFxWgQgszjFYgp6DaMeWraLJE3eDA3ta41uFWEACaRxLUHAbqiH8pPPjSGQJfYLx4kYKukiFGQJwHiBNh4HQYeK",
  "key2": "5AWbLd7nUPo3kDXcAxwNog26dg7tGJe8QYKwTcxRLgRW5Uk9hLtJwqxUWYAvcZuoax2gRyTjD7gn3swRMLdxNbt3",
  "key3": "2SSoTg9fCaYw2qeSdC18ai7L6etsrDwSUFR55LojgQk8ZgXCcXKmy51zktQxajaezDGFPd3NRqY6x1bS4QHHALhV",
  "key4": "5DBxb7jKHTNc3ZBsENMg8NtxfAM7b8fKor1PKqotRTS4vso7neguo1DN2T3GjGzfG6Gx5Fb9UTo84urN4RPzBiLb",
  "key5": "5tzhgBhPxG3HwuuA5LMGP5jLDcmjNhdFbwpZzGGZvSSsPQdZ3udeQ9vCsVugZq4v22cEWqMCEdctrhEaryvBEF4n",
  "key6": "5pa66uQbUKUo1pHGecm7CNBGscjXf5fmVkg8bYCTF9y49pvHC7YQEeM4qHKwVKW9BUYacZBTsPp9bHJnovWMAViz",
  "key7": "2PtwFLKhZAvMz8Wr8y6AT6jt79B8GY8KaHpwDii1VdZKp7mU49JWNk6xpftpnSGBvozudVnsnD2R4R6dcnuCFHAT",
  "key8": "2yJeo3xnUbfiyMeiMpsJkpuWGftARQmLLRTXLLhHwY1nx5zD5DLn65RjM9ZeBtNYsyR75z8x3VF2TcSV9k37AEsH",
  "key9": "5TzjSJHPMzdkkA9URgeLJhJdee2qKtvj3bTMtFbXFoPQEJyRWSaLVKjNnDXjYRi6vxpKeUwkZoBnmnqYZC2SPXV2",
  "key10": "2YrANjmqCoEv24sbsgCMzyoMUqKs4JSA7VF5sLDcrA6QGrW9z85BzJP1jMExiJfxjyGaSoDsXUgR3u3Uu3VfoQtZ",
  "key11": "3MunuHNmMaVFEVP2NoK7BdskWXTLECtqhewicpgefUNCwJmXU5KXzX2sCWHuADvLg6xHSTVXaEtYjBUgjRfPtHEC",
  "key12": "3AdxM7abih7xTeP4t4eGMXThUNnv7PLAxKgXe3bMy9i9ffpCkeA7zpLwCHKb3sVJcE6BaUmsQFZT3hwJJo1ASZiM",
  "key13": "4fjCBmxnppjybe9E8JoQpJErbrd4ewGRBnGrbrThEPtK73umHV41kPJ9esWD3NA9XM5AHCyXWFficXHLEiMgSuxx",
  "key14": "619hGUZqTFhGzyEsHyMvRmh9LACNEHLqq5aDSRNkmV66oCRo2Q9P8V4UgYkzVxsENWu3xsyk2vK36BcrcMKjEdNu",
  "key15": "3dtiMCLnWrYPVsYZUBQgaAyr4MkxmcWKHSFukpoYnaSwLmyaSztvfvxeFiwXmP9UbJZaqbmpTeqhAGMGke2UGr1a",
  "key16": "55igT57nDRpTTKi1rCAbGZi21B3vyAePcwsoWyQDxnpH8mvP7P5QGpRhfAQH66fWGizsBAxQnFvA8Yv3WRyocKuT",
  "key17": "5QxzxodenLSzTdgjCztKbWK9GUgZwP4YJR2e4n81fLiiTDdf6gMm8Uez6xW9B3ZAZ8kygAADDJZfUzrfCpsJh2rP",
  "key18": "5XZnAkFpwGfGva3myHgW3JfLaqca4fandMjEAyRDdYdZwHwzv4jsM5gXP8itRLTev3YXZtMtZMTHowKAr8cuA1kM",
  "key19": "nyJKrDshS5BaTG6LNxbzvsEqTPbTxA9SGX75VNtmNiXH7r1b5b7BbhT4UUbbjTwB6SJ4CHNgMugj8ph4joDwLK9",
  "key20": "33NWkEcTThXChaGHZtSfHeLxn5Paj2yywAHbRipQS1Xk3KVkeWEN5k96yf1cW4e27oYqB13B7W3G73nhXJcsuKrn",
  "key21": "4bzCyG8bPrcwTcBotbhvSKtwYeH6DxKDeKYedzLMP9ZH86uaZ4ubLWK3ChQY7R2nBrSpZ2CE9xVasKzRKLLG33P9",
  "key22": "pHW4PrsoKKFsVrH7xRgDT7PGkvfi2UYh3dosxkM98NfCQyc9SUtD8ip649Jfdj8kw8heBfJ8Fyz9z8gGtmsQPu5",
  "key23": "53cNfQwK4qWsZxEoastBQ6JhMdzVG66gQjN7AwWdsUnif8EmAnpNf4sLyiZxwZPHMiBr7vyEsufdT2VfPUJMW8gL",
  "key24": "4knUJUhuR3b7FFFMdZVYfwVWxLL48TocLniVs9WDgf9jaN8PcC2EWvvQgpuCGkVnn9SDhZY7Ky6AaP8EyRamzkag",
  "key25": "2gktPxtHxYfUfP1t3Ge4wfq3Th9bogQDVnv5ufXaawCp2fmGMhmL36w7yoL6F8Rm4wCvb2afDQpCFLUXj95yUPsn",
  "key26": "5V7dD33FJs95kJKYFjraX1pcWwbpvzKUzcHYw4gz6dDB4xoqTUFJA3adfikormB5ZAWtCvr393zr7E1WVgLMRnwS",
  "key27": "Eky2pfCZxxX2a4GRqXJqCw1fz3mQSKdZFbZRyQAnLaopEiB11JKfSM3VT3LFt3LLq1GECb4eQ3S9Xjnn63eagaj",
  "key28": "3yBevRPAKTs9nL9oUJV6qTEViDfso4yBbb4FG3Zo5zuZjdNFuPM3Vtgin1r3v2dcVFMKdhYv9mZwu8qkvcZos4rN",
  "key29": "qNC64haYUomLGzwmyAqHkruxBUtDsburBRZgpgDa6rrdVsSXRc59Yg5NQ87ReXyWbh5Vs5fnGJzoFdHMeN3pwWP",
  "key30": "3poohCRxg5H2fp44unBqFAwZA4Sei5fgoVGosTn91kKHGCG1YZEwe25AEnfWPwm6UnxRC9HihJ1UAUhDxAT1kNst",
  "key31": "5UHugapjYYMiYDL3tKHBVXLu6opcgJjefsCBfLrBYUaz6UcSJe4F4pJi4Qm4stFFczrqWX2z5gnKcwaZUBV1eTYa",
  "key32": "3ftfQwaCQ6C1f6fke2Pe41T5nLPLyyU7EPRUHE3USjtZ1Q4oWPjxsVF1dfk2jVJdsQwjkHyYGG62jVm7EDtZg3X5",
  "key33": "s5B8iLwSxkA5kgoHRwL8vdJ4zHR841dUBbVT9Lxiagx6exJXZbmqkf2WvybcGCmPhNfZVRqSVuxWrw9qqFD6Qx7",
  "key34": "2CzRutDRCaoCBGpqw99yR7L4DFfwBo9SHvuDrBNfPPKZSPpXeou1kYyUBXn7Rrn8ACifQH5Py2gLnXEvZfELWw9k",
  "key35": "5hrgsruQ4b3vS79d13krGB8wfpjCmEx6YEnws3nLKRfKt2AaxXcD1es7pKraq3A1HvUg2aEaa4h7hSMhx8dyE4fM",
  "key36": "42oHwvD2EJdmACNsRi5aFE3nbvYpzq3gNvSU5CbA7x6K8TtGr153nR5W5uaK7hBTksBw5rBtdY9cseWYwffdRoq3",
  "key37": "8WbTcjedmf5kc1f6qXK7RNjD6P4xtmJMJAvzb5cfSj74i1kHmAMD5hvd12VtVLt4KPVManEEMcV9g3FRqU6jfQm",
  "key38": "2Wpi2BHrNQaFB1v7JjDDKuP24k9zTKuNF4A83VAXhwmPsfUT77gdieUCypD9te3DP1DcrPM7hJDXz8GoeeWBMQ1t",
  "key39": "4AgVrK5svQPXa2nuSR9rKMKvEbZ9CTYihf98NX7orSZ9WmQFq2qj4eUtWVEWZrQgamf8zBL5fRnb9uaovM9eCMC4",
  "key40": "HcZDU6YTgrbmw5LJU31yncQTzZYiF5AoXaMcPJLjNANEEbuTH6HhDVUBCiPS2ZxnF3nihNe8N1Y8nC7Czf1CRtE",
  "key41": "4wRSP9NPqiFnBMVAQQiVqvhDe3WQsVMjyqb2vGY1tu4H56MC9F1cSaHxmymyoePMmVTXPx38ffWnu9UdkTLjaLPn"
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
