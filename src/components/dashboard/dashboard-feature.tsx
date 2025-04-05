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
    "5FjKLMsXwdJ5NkMf4yEj7vNxEJKEMudXES2BsqXNWHtcFCChqiGE4yjxG8b1mVJuucayxs4ZshoPhbek2L69WRFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vxWNbVLLbSHG6FhT2bFJvcRccuAjGMTWpjnqoh9SzovyD824izdK577Ynnb89najvjpvUrtt4XpLuvT6eJP5sdf",
  "key1": "36wQQWHK2yk2onX5Uh5fNE5BxZKd2pp3aw73NEf7afYnunMJDjLSz5UKcJybbkUgu8aCa5XXV52foLci6TX95vRR",
  "key2": "3hR9M2Gcw6fWoxq7W4Cfo5vFUfkiQmvNghBAAHAhKKt1jLzAZa6zQCHt6b2fg56KpJjBweYQ5QwuBp69xfnSzd7b",
  "key3": "Ym75wLBb4vyFhkXcgratD2DwAPm2PCChk5cZfpMpmrWk2A48yrgYDmYRm2CWMMT1Ff7JG8HkWEojj4KcKTrSarn",
  "key4": "4TGiTBwrGAMRZ68g7KPpXaAxgV3drSVrAUcWYGtnzutdG8sB1J28uqbf9NQYsz9yd716GcGy3VwDpEKxs3SHtJpM",
  "key5": "2tn1efnXJVHwqbrfM3R4vB95bZ1PDuiwKNrKwoovEqgU1H5YBy8RXPTbWFJqPTuvfmwosCTCZjx8jbUPCsGY2pNB",
  "key6": "4sKYip2ecsxQJpi7VYD3FvUhGY2GqR6DACWv4Co3SYHZKodsK4BDqzQHgPzBvn8ZFpQ9Vsccs3YZD9MfenrTsa2",
  "key7": "4zVG2sqRxY1Gi9hcrFeFH2rcGVUGfMzQQBT4Bw7LZLdXcUkL96Qabkhy6nUkbUUsyZfgmb1EK3Jgxjvd7Z2ckrbP",
  "key8": "5MBPdKCSZN83qYx6ZKyYNBV49zst8SFaqr841ctpXEfyGdbLhGsVCPmshLtZQz6MTTGnrNpFpgzG4fPgpcGAV76m",
  "key9": "3cXGgdGj1NriaBTn8EtQaRDJzJr67uiFq35dvTjaA4bTdpqBfW7jSpur4N8PpCXr3qDqiv7PtWHV7NvbdH1xVcC",
  "key10": "5zuuSHkBMJSRbNiVm5UH7tZL1vGsCBaGvNUdGFpoadBMTD1m8wTmLUg84CqL17jZTW87cyFjMC6Z8m4bHUf9amy5",
  "key11": "5fBH6GEv942H8UFZ6kmZL4uVvjop16CFCMEdz9tYBv4EfiWNN1Nf2786bDi9zAAM78TpCyAsVWBVxS2tabceAPRm",
  "key12": "5y9NTMM5yiqfeeMdghiqGg6qjMD1Dv1LZgVxtvB3Ei597eHW5NJ6Bay9VWVQ4GnRjULqjBtFrYgXz4HJHn8PSXZC",
  "key13": "3KdAPND96fzZuQwY32sYdZdBYast7NBNGisk5tAWoBJex6LSNoDs2m9achatp7u3znj12uXUtswJQHcyYoDmwhUa",
  "key14": "2srreRuTC7zeL7XGkhna2cbUMH6WvPEDsmWjcUpFFFMsBCeWbmGJkMGwHyoSPNvVDtc5qjVx2cvpq2nrLiFk5hr3",
  "key15": "27gn3jQA9sTuNKiN3irCigX1No7U7p9U5JjUVc8uNtBNtobxULy7xmgRkPQbq1vXr9DnZpMzEndWzQJw3YhmD9cD",
  "key16": "5rQr4tkrhM6QGepwCTicV7Vi1xqMLq1Ny8p1T4jRPCqETYzsTxoqSDydDwjoYUFK5u7JprFctTMt1cnWkGuH3ewD",
  "key17": "4ntD7U5ULk1b8KfJWNFtde31cwhSCNzH97V3JCiW4Q5BzCPi68yTsmv4A5rb8nQbR1xzVExUhoMDNc5j4WwWcmsy",
  "key18": "4MY3FS57xyK1EffvDZ1Jz1yyK1xUihhs5BnRHHx5eM8krCFhY9vQuKkp2ZHsg1iY6Lgnv47F8BzG8tVTi7SZ8w12",
  "key19": "24WYZH6n6fjY1Zqs67rKY9gQSQVZsUNz1ioy9LJ17QXjJpNWApec3ZVDSc7hQL82x86dQ3ddUC3GtSXXGfkTwCpd",
  "key20": "4HfTFbKrpgKXiTNw8v8rdUYnPy5kYi8V8AiCtDUc9rLvQyriMCQboi16G8jH4Kipw53KamM8kvxSivmd4jyURVvH",
  "key21": "4kd6yAqzp6BDryFnRSnj9Ke92CL5RqyJZ54UArVBGVtZEdVsPVQyCSkpurvsfL6ijDpBRd1X6XGn5jsCSSGBAbUf",
  "key22": "55XCWWjNMyDpNbfjuK26DHVqSPknkZxyjdQrfQNCmKqnSAYqS5MGSDHgHvoGMhV8goJqfeJ8Ks7Ryw2mQNzZHsp8",
  "key23": "S3aEfotHXK3iXSuUwTb9mKbyJ3pP9s9ccDWH4dG9eDU8Cw8GSx7N8VJ2W8vdyMCSJY8s2eiotwPnB48W6hq3UJR",
  "key24": "4rbwinF3JhGUryGxMQiZZXPjWP3tYZwPyfyC74SoB7ncekJP1wxW522dLEiLEBigWoCyt9tjEWeBqzeFvQ63BYyg",
  "key25": "2ZRwT4bCrXm8R6qA1HRTzN5q5ayTwf1ix7J5G3Ewwnq5oSu8cv5y8ZPC3HoEbwLjaJUPmfxTjWfGsv38GaJdtu5U",
  "key26": "3bQgEaC1bxbmc1aovEU4hJkpiWnW1deZg2nQRgbdx9fG3AUcNbsHJVmW2X1B9CnBM5EK4WiHReY7qA7wPVhFMQc",
  "key27": "x6eZfoqFy2Aqcv16YZ3Bo1CkVUBVBcRY7mtpyuuQSLrw3axPwXSQyVjWjAmTacWS6o41DwASHnejEG6pCD8DsnS",
  "key28": "3nfRX7D5yt6DvxjnvfEKEGZnHcxt7xDotDE9KdTdQvL9uHbhovvMw1rYYNjrwSUeVtW8BLopp1kdWZ51H1M6e4fX",
  "key29": "5gZCNXZc3DG4daVsGhPMwNDMVQXLxDqDYZuJjmvz35f7y7PACdMnUSmF1e2QAmEHKqrQtucxUoJ6mCqB4Ps5EVnx",
  "key30": "2xYUcWvZAX4Wk4EaXFQF5vHVvdJGEmQbgytknC6RTWXcXPfn6gDVF3WG2CZW9gyUDvptWMUaVPZb1Hx894wrUzS7",
  "key31": "5m2rQq6z6utxsGZzSiFUxUEcATdq7sCYBhVxLuK3LtT4sEELrsk3C9spYSfT3D9RQUtgiNHMGcWrVR3j9P9VqKm5"
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
