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
    "2PT9oCbZJKbYXzS897iNAcMwaHLcnsZ6wWSvjVbz7nQQeA4pZ8nyUU5MUPuny5AHnNmE5KYAn5xrx4RNZ3b5cpXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cFzquaYPKi3b7dpK7KupAYQYJ8vEkjRWYWk4jXAA6XZBeqknooB77K8vZKqEaDCksAB92TD7cCCinCBeBzSRoUT",
  "key1": "4m3g5ELcmrhJ5uT9Xd9f7TH2MeJCz2LzhsWFp8HZBbmwW8ZUd5SS235DCWXBLLbBhMyfcAs6q8bPFoYTgE4W2efB",
  "key2": "5hbLv1fycewyd9AXemBDycGE3qbDfC5QjUKaTyKD2fzuWVx7t36cRM11XzaERdXLQV8r7sWVy9UP7SpuutknGa7n",
  "key3": "5M7wq2wTW3CueShqXzDKdCr3Ynmtkg7BKggWGMM149gmcKSvUaQEwdcoYcpw5FH5JjvBjsqhypcKT2UyigPVPnKb",
  "key4": "5XrZhsY8HymndWjSRy8PwSAnwF1THbyWU1nKdxJ1mUgLQ8YGD7efaZ4AFzrZZMTmxae219AcLxkG4mv32VtbWTAq",
  "key5": "aSc4f1yeryjqqaq8yP1jNxaHhFvYsF6JcUi78bBQ7Q5mhk9m6quc9pV8vy8HGF7qFMRSQ1TQNwyBTedDzTQn5rU",
  "key6": "46u44DGRSV5VYmJgRHKvs2wwfXbuTDXLSzvkFZ7HoRf2DxX2yHNHqhbwTQEtTnEXppc4cncpARiZBQUegvdHxLox",
  "key7": "BriEJB9Z6cUzD6J1Uzp1J7iYDiQ6tJgBbt46axVhz5sTB5eCp5DjAp6gYwXzMCdKjUAThusScSrcoFTfYQsTfPk",
  "key8": "3z4aco8XoPG1Mzb4KuBVR7FEwPiqnPi1xU3T3iwc85ejSyifVLomUGj8UNCU4ny8wUMvqPXLvrfA4ufBoReQ4VVL",
  "key9": "64GMiTfQNe6ZHVMj1DHz6xakuYjwEe9EvMjqfsgW7BdgizwmxXC1PjdUHo6Bz53hoQwd8wM2LJ9Jeu6SHjQHXesc",
  "key10": "kHJJqdaLQtorV9H1ByZAks1icJ7oyUgPzpSNHmB9xNK2LQHVd5918UHABCVeWfqVhCQsAtbPwjPkH1yw5nTGRUW",
  "key11": "5R7gXAWnudXKcVaKWi1nPzV3NMzPbPTRuQMMxz4Xse1VLZg6SSAyxLzGtTCip6qq4tNMrdpmbTErdCv2kaM7wxkq",
  "key12": "4xKsq66CDwfuraCjxn4fQ6kw64YuZpUEVEVbUA9swJ3UiVr2Y3hPU6PyzTR3NMzbFADzduyznLN2FTohPrLsLUmD",
  "key13": "4mNyLRrHFXHv8PpGEgya2WV5dPtbDGbf4qxfAzRQrXEWgDEdbWyQU9NtFadDbxZqc4iWSx2WzxHSZmqXrPcNkK6x",
  "key14": "vzdaHeHHFZQL7zjx825kjX9rD2rbSkgksnhVASNrKYDMgZoV4HaJtWtL8YfHKWNhvGQaUJo52ac2r2QZAgP719g",
  "key15": "3CyP4JgsQkChVywnswWqJCY18vHUYVeWGxhPXYauZ17UHS1Fhmp8sezfyq5BC8Msx9SgVFgZhYFZuuLTdCdCTSGQ",
  "key16": "4niDXZcBoP8uix7wR8zSk968X3LEntDpq3ARXoeVp84zAmARWxVaKwMq9wU7xWUyXFrAKqTHwxizTRBs9x9xJ8e4",
  "key17": "5ECH7zsVjdxWfXKajYER4wzaSS7ZeSQA7zww2TNjzwRhwpQ7Yq3nG2rWBrhjumgespqFxRyYBPyaUvCd9GPGtV1J",
  "key18": "5hTMcfiSDUwT17wgoswA79iuZvXj4PWs8ztsCuX52NYvyCsAjkfskntptcz99xAdLqyVKEQREQdUjH7GgWCFNAMY",
  "key19": "46tZJrjRPEMN1oUEmWckLM7nbqcbbveFaJUkDzNGdAzo73LtsVu4PsPk3CkRJmbSfAhywnxgprUeTCbwjAp2hzrc",
  "key20": "3qHFJJ1b8xTEcYkTjB25Kd2k6cHVpN4ZP7WVZs7TQv4vsoBnw5GghK83digYHjgHWdzzoLymLRdct3GsEDBY3mN6",
  "key21": "4JiXp1EPjr22Cdn16GKAVYRNziKXuLVQk7wF8rgV21u7qPNBNoeoSL5hRNie6A5UR5JzyiQcJzPeoZFk91LDKaJ8",
  "key22": "2fBa4v5Q47QkjTNnsvvmN4rsRh3cWhDcT9228tBPJHNBQB4nTABYURCAN9oTmBehZ2EuavLpZG3xYHd1ignSz43Y",
  "key23": "4BnwibSWqcgk9HzPr2btpis4X5TfnM1bB2gvHin135zkDDpUJMQSBDPaNgtyC2gjviC7DEfhupJ3AFzubu1SJ63F",
  "key24": "4cnpwk5nRKpcRV2XxZUj6gx2KNDzGB9apFZ6W9XbP18CxpmDCdYLYK6zpitFfVaCuAEDLZHaVdmsC9pckP2gpEzv",
  "key25": "23zPHmNitHD9hMM7sHnWA9WKkqaJ2Hz47mrjDWZDa1j4yyeHKUugnCU5HFchSWrsS5k9RsuksgCgeYKaVz1hsfkS",
  "key26": "5zR53Ztuzc1J42rTW5CNoFQy5JwZe7foN8D3AyN4Rv9Z396ACh9AYho2LRGWTzAPy3fttjidGt3hZAzWxszyEYCL",
  "key27": "2taexAD21NLh8xjhZpAtKDqpsBMhKsn7gGnkuswN8kh1QmeQViBEA9NCMSv2LtM7xKSwzPEoRPF7b64q9PCZYems",
  "key28": "33Y9kTsesGTxWZt2uohVU2u12Ejc1xKxuMNNmjZDQC3qbpnozGwQgyGnYFKqHtF44cjN6fzNi3LbeZ8rY8sjkTTE",
  "key29": "2StMRp63CSJvcG5Wkb7HvT6hCkThcSvb58f8H6SA7R3JW6wsrwSqyN7RWXSX2z26jsLKr23Hc2QHMbpb5DQAmkjD",
  "key30": "FJpRhQCzqAY3HXnEW6JVVxDJ6RoACC7KNx1HM5GRPTNJWnoMdF5ibtt4JoTwPszPTJXdbxMFLwpbaPBcEkaTHjT",
  "key31": "2mJA3xeNvEX4ZLfjHHzKLbvRwo82goCXbiwuoH8p3yTQEz5itwfaQm7GMAXo48LCjMfbBuW6iWQUgCVQuTzhckps",
  "key32": "5kfuA3bzRH4ZUHSAD5LzmDJhgv6e7p582mXZeeZUaCDWsLRLMohQANmDj3ZL19uNMdFPiXkS5rq8CLyFFrUQA3xS",
  "key33": "4ANJaFkAA61XQ18esRqDvEWmQvGaGfTASMBUnDskm2RVQXYaGpYrhp4pEVGouPyy1Q5A6wR9htRNvQjhJc1HQPvG",
  "key34": "gdRpyKiUgabWh9uSZsqJBTZ1SisvEyjdJTH95xpahYos5BhhsYdhHns2Q1Fanja7p7sd73Lem6ER3NVdauZdFDm",
  "key35": "3H7yKVJnr8xnm7kfptHStgpgdx1jmyCYS5DXi8sKNVUUNRexwUUZhqGC5Ae6tH9a4XjDbqutGtu3umfsiMTBCfHt",
  "key36": "2MYm6s9EAY5YziRMtiMRitfoWJCMfcwsty7PZnLdWYr1XQpjCYv93m3BKTHwU5N9GAtzKvKm6A7SNQRrrrjgF8RL",
  "key37": "2ghwdpUxwAEGuo33BEMp6yEFetHyKfFQazaSsYV2A2s2dAdq5HCuenxxRi8pCPQNf85jTS8eJiJXdUpjTkRVQz7d",
  "key38": "2La1o1SMVdxc93CeW8AsRyMDsbh6zyymf4BpaDGNmdiWDniuERofeKTVLdybREix4jwQ8gPdswrHrtdjQtJVfRq4",
  "key39": "2ZXAFEhiuryoixiuuuUTDHZe552nJT2LQwEqrwmCjdkb6TZf73JBmjxWKjh4ybrWzmwqLreZ1JXC73QFNvGX9AGA",
  "key40": "5gkuvskgcBHiUmCWsFXNEVmWTCFTXVrSC398afoXer8KuUXeRG3GimrZxJzFocJ2hKhtNTDvHrkjdLEugBjUeMJD",
  "key41": "2Kesm7aaKUjjdfRSCQqpYdDX7DKkfRwkLxGm8zPepHmLxQcoPW9oKfBH1bL85Mj1gYh92LRBkAe1PwMpFhYp2aiy",
  "key42": "1Kc6HpCNhBHtjdnSGucJuGrcESagYy8TuYUNDESiQrQEufr1FsB1Y2HQUvKX8iAXo6b8mmrnsR2tX2LN9JkHueW",
  "key43": "5DDkgKR5U4ijwNQoqvVVLvdNh1xngCmwdSYCg613b98iiQ4VzWRUPguhvwnhWJM1eMrm745kRqRfs3iPza66TmLx",
  "key44": "4oSpcePA3aXcHC5Lk5SToXAr9EjDiYzuwJFcW4GDyLMXeBJUG8edFtkao2RKQEcnUjfBaF9XL7YZKVo3bNPyohZE",
  "key45": "5xWzi8XkznSoy7BUKSdnUg9n3pTkPKBonzafmhpQmT2hgTZckixYjH2PkVCrJTXCWSd5N7ZnFk28GAJ6GGYMJWcc",
  "key46": "7s4GoUcgJHR4DX1kMbuiPAWeWTdYLP8o6W5fYo8kkXRAxLDo2BXgiHiPvgU3RH1pNptYuDXzdJSDC5T7vnAnStM",
  "key47": "5EbsncSuPZawQoJUASU6k64ZxMxrtR9U2K2MhxZEv8E5sh4rUDEdJ4mLMzKFzX2E7EDD3ULLrK8jDLQx3aiCs7Td",
  "key48": "3HGHyfZ3dpaeqACdDEyzdLycbksUr3XHboVfRwcKK2EGR26gY4mizJHJrRT9rUfXaKp5FfnR6pWQjVhuuKzvFARB",
  "key49": "9C8X2AURT1hna1Fv2BhjdKzLtHtcbUxW56jDbir1FdKvHCNRbHW8PG56cJUv9heXBPiHt9K7P5ogwk7s2vjVtsD"
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
