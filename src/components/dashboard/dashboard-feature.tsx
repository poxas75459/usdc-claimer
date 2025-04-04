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
    "3Nqyo7hzu4LXi9NSg65stMsMfMTm81aiJRUXyiBJXQjtJvkypBJT78mGRP9i4E1Z4uSSTvmo3wmcM194AiDA9DvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zu2PzY1Ema1jp31qHv8ZZgmakypHPeCMbNMcXb37q4w93sPDzoYFB3SoZB5PmasYqNTNTa7xAf75ayGPmTzv4SA",
  "key1": "3Y5h3iEGcvPqrkZUJ1QtATQRX5eHr46SijCiH8szcQxDBpUhgp7JTus16bhZ7NnD5NJHLTUVG9UnFE9Ls77ZGETk",
  "key2": "5xBVHiC7ERV3qXGhvM8JuqPSUS71KJqCXG5WSpu3RSbHFmWRrNt1vipZicFkCrBB2b5gYsLw7iHb3madouJLnyg9",
  "key3": "3VwM2uDhymjLnZemsir8qCh396hDxhBAzJbTmTKmuu82EGb4JW8P4FFQUgqvvzf8GbTyWXW6iU1qd4j7U37jo6f7",
  "key4": "3tBjQdmiX7bKuUBiY7Su4Pa4fMkHw2N8JBx3kmhCVqaT8WBXvLni2uUbLfiojAfMKbUK6W1C56oWh4Pqs182eFM3",
  "key5": "2uQs5FCxbJrN3f7GHUqGUNAJ3RxZV8uHUSvSgiHR9UPizpXp3XThUqEshufWk7FudxMtQ5yBktjhjFK6LPyo5ARN",
  "key6": "3bjjyvdTK27tYAqzHTwNZ7guHay7YqqGhqx4jkhkZHTeZh6FtymJRvRysKaeEegN2dLrRxVgLJc1FHZXn1A1d8aB",
  "key7": "4SyrCLeuxdebyiSTahrs4kKKeeZhwGnaN6T8mkDEaipvtupNCa8Rgk6oR8qj9hwXj5V3hmn6Wo1tk4NR33bLbyTM",
  "key8": "2bo4AmmJiy3cnNWpu69J7vVWGC7MaDzhjTipWnBSfLkv3kowR9S7vJhbzxh9LjLcp8iT1gAmwAu33HKY95YkCSzj",
  "key9": "4nQ8kLg6P4M3jA1CM4WXjbxUtfCPHbQEaBoj67khbWgN8jEko7H17whyC1J17G9zgzz8gGD8kK83hMw64zTAK4bX",
  "key10": "3TAdVGitKMXogA33UNs8LX7TwHVPjKkXyLdGeKYuY6v96pwomMqGCQFE6Q2wUUA6jj3FYj11ZyLNoS6f3uEjGNYD",
  "key11": "3sBrkb1Kt5C4TfLdPVzCkmYoc9JVFj1wuQHJ5SQJyiw8QmXkNaeGDqXCMCAnMzdjyXEfkMbokcDzrGrQm3SSjHvS",
  "key12": "4EycCZqYQotr15xnWiRuFmy2Ruxg3ckUnXqMcsTouegrRFDHfqSoFJKSthUMc4kK1acZWKRih51RfQtjvDbQi8sG",
  "key13": "4YBJL8szVXf63zgfvwyBjtKChQ2frfsLWcREjjAGNy82AbfR4SZcDVeM5t2ppBAPjH5zU2ufvaUG4MGxBgsitqC7",
  "key14": "5RYKASgQCMYBdLMUKwT4gSPjE5gYzW8PxF3ox46fKPgjBwWje4ohppw4smLiSC6E9j4Q5spuoruRkKuzpEHwmhhW",
  "key15": "3zWWy4MHQRt4KkvQpcRDuTe6DNamLqM7PbV2CoQYzPrLbq5thFbYXXQUjkngS5hZNdnZhddKkjccEmaXJ1no1Aqe",
  "key16": "5wFT1DHdbKHKLSvFL5SCBrdwmUkYfSid2Dhc2Dxr1a3NXB5hMfzUYUBPoB1cXoRkThNrd8MxsDKFh7UuSTkMLQja",
  "key17": "2GEtDLT63PxV56Ls68HRfxCJCT7dcWncVuCEkUbA3FB6eQVpgAsTZFLMgyGJZaMPtXk9exaQQo2HJCZhPxsmeazo",
  "key18": "2VBcFiufLNPrtTfuzjS7dJnfaCr61m7Kkz33V6NLwq5gZovADtKChaFkBBU36ijQXMpSVdk69FuYiedv7P2adhQh",
  "key19": "4nMHbU8f24ecFRxAvmQ9cj6AyufVtC3MS73qFcqiJCwmsSaAEncWCKPeJyDnBF9Tu1vyqEnffCrpot65DYfCr6fi",
  "key20": "3o2PRQ2McmNH5YGJNpycHW8Zw3SypnMaWvypATJ3J1kLsrQXTYfNVN79nDmtPuxwjCL53uUZr6fgAtRwC48CYuhY",
  "key21": "UtTkNBdKeBkVysQwCHv9bqE9jjJ32o3noZRdgXnSMEgBYmCUx1EHynGaNdFJTZZsvnWf2X5endhbcsKu68QWUDD",
  "key22": "3GH96BenWCKzqR4RfWLD7Ev5GG1kyDqSMTTx95arUiiyoeVLU4SxLFsDN6Z5JioY5WGvvxsumkBYuTrw5wehyJwc",
  "key23": "4tDrbcZKtMSzpZBySzpFdu9siXwNjXVyjLy9WVV7nWP7BmyE6vHB8DLvcRGCbB7CYArRa1Zd36KeyyHd1Pu8fv2D",
  "key24": "g5CwePHbYcTZ9xhUGAuZwgT9nm9LaMiNLrBxiwGKbrj8RYD4vQ5EgPu3RjDQqQSK9Xx3G1cJBtKYpekdpYLkTYw",
  "key25": "4DCrMFRNX4Hzss2xbq8TXPZUDtAU7SiUrztF4hFk3gAJN793dUJVNRWHdZ6mcoCPB4WkshumVFGmYTLALCLoij6y",
  "key26": "2GY9LMsbcSSVounYBewvUdPaRBkxHZfhJkRwLuhK99ooJMW1vVVwQeoooouhfehrDjcXn84aj14DQQHjQaqrM5tp",
  "key27": "48zZTkKfsjBTrsqH7NAArYG9ePBHafWa6AvprSi35UYhtMsVvBBRsqmY5H6yBpTYGxKAkgC6nuRNd7ifQn7PZFWV",
  "key28": "5ZVqTAC8TaxYWeHQP5GjKedNrSh4XFzGRLk6LqCDjD4c6jNWpvp9QoHVWKtfuiA1VQxevjLMFtqKtj8uWAKjYVWg",
  "key29": "4eZCTKEWZKgP7DAp4pHGpdZgm72V7LAZZgjmVHLmA2ZmCKu84aLXnMCs1y9BZjwdaZHYGSMVzPrHrqUsXpJTmCfh",
  "key30": "3gZPESpRMnc2is4cxLJmzATssPfxAFFyD2RTLAjwKeu7pqbzrsdxPYQviMDZEMeXuANBcVefKFBarbZ3Tcyb14Mo",
  "key31": "3fqypL5ChQ7yJB1ES39bMDa4Lbj84t6NL1t634UscQNHqn3WNQWKAKmU2G7XeE8cjXJ2MSgKgyhTMR99Y9epivu4",
  "key32": "4bCiphMvBpQUoqLa3sDPWE6VtYHt879GVbXDC1ddGowhs4iAJRMhptTkxNubpejnWCdKkPMcjR7EkjwsS1a5V6yf",
  "key33": "RWnMSMeCaAjiiu8XJQsY6aiXwwk9pgcUz3ynRxBZKVyKRWmAWPAbvNtuoUAwpTSYahkZZ4yMjBsXkLE26VR1JVb",
  "key34": "5vXc5TE8yfQi1vWEbGQRY6mXEERA8Cr64H233aJHbaiUXnGUfGUVg6DuGjghGX2p8RrB2jcN3LCRiT5XjawWji5o",
  "key35": "2qsfKcvLpCQVoMsfm6K92sFgv8f3aU4ZG7ardN4LhWidMUucYA8VawLNtDrgTg6u6cE3m7hGxDXfY4mmRozwh7PU",
  "key36": "awaTfvm5KnC5mTgKy3br8VG459FPPBydaLCr9vhPRUBVqKxpbjBFUxEBMP5kucAw6WtypBkGhYhXmHUNFzqDGva",
  "key37": "4j8kHy6mPjsF9i1apxfKjmDYyeab4xWygYAPCGniM6L8nZtj557QqfpcXZoYJaLPCskz8jHGkC5dy3pSJ7N4uz2B",
  "key38": "ihemy8jD77kTjE7N25MbpuieerznAk4S96e8Dqw29jdaCvnbpMC7wTqBGTTxVmmRsxm75MUvdzf78aB36LP6X2r",
  "key39": "GCWepu9wJZA2Lmq3ftQiqr7CreTBjwzvUDTAt8b3zBvWQEDYvudat9gtQCTe4efD5hDTYuEaF1DSj762G44azDk"
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
