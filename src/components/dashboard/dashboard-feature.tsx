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
    "5KLUR5acpBoZc2CZnEJQt89XpC5zUcn2WXpTj1LENQ8Mp6FaiLg2nLjCawyXzitHizzZ9pHLMJrULoT28yB2A6mG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JTACvhMGrmDWZCt8LBqAqh2YcvkHMc27WgBh6Zgyas9nobjyYafxtXb7HbedG5zKffeJNU5wrEaKi8udaWMEyUz",
  "key1": "3yGL9jRN51MrB1nRGb6LDkyimvh1BKXv9YH3Y8pNdSQfAZBm7jTvpxGYRA4F9z7Ueo5JHtHAdgkdWXeZU1mAoyL9",
  "key2": "4mxiKYDZkDRd5hKioAmDH3nqv7bdQHxtRD4Xu3kduspjVa2dLreHjKqWKi6Dgoy3pLDDfQZTK9N34gedc764b2GA",
  "key3": "51BtPrP9Puic4BsjQiWvwezLMJg4tSX13Hefixfn2m2qh8FKB2TpzeMrvHmQHGAAeAeFi1b3reKYZfzEqepeS7r",
  "key4": "5muw3yNc5H2aKq29E6bRVeXroBLzmqN6qinDcFYSJoUXz5yNXuT5RoxsP8CyJN1R4NDBKCNDJ1WWUwkHNoUMv4EV",
  "key5": "2vogrvWdXCeNxAWCe4g7mLKJbwSstVWvQDSpnJ49C27GQgmvhSphzXsK6nb1B36dwnbDA4FYuw8nWRe2XA66ZiBv",
  "key6": "2yXYySdZVCn2EjSNxd6KekQyEhobgNhe5NDTEYCAtSpe2R8empSG5PaG2gUncnRcFnPd3LyRfd7aYJmQ3qyn6Vip",
  "key7": "2bVKToRKaTckDs7VX3cyrKT6Bknb7E93UJnef14F1HNRaSodPKeXkbFD7m9BfqvVmMEWXzSg5JmKrTePrx2wGpTK",
  "key8": "3F15epsDJB617LBph55tQV4ZhRRTiBzydKD6S46yHF1ZjB9oYt118wwHMxALarLe9F7tVVmd53aoJh51rzE7EfqX",
  "key9": "5nT7ujD4usFPrgk86jZgfZBQeoYhRJS82oNurtyoPXPGAurtt3oo8Ji9ZLpkozWYtgMpvfFs8vuiRoraQB9YPeJx",
  "key10": "4hNSixX4GyRo66m1BGqCTmweFZxwrr4r8uajz9w4u1wTA89T76yt3KE9fb4RRxM4LkJTEsoRjcmGANndKhSVKQtC",
  "key11": "615jQQWB6emvFQNeBHbpAcV8xJpuqTFT1jEVzoAxCxABfuXTGbYs2fchaqyjnP2mRsmirDWear7KFUTdkG44LtQj",
  "key12": "1253ELKzuK5k7BQ6YztNhVSd95FaLg5zN4GZKckWXE42zrMA8dqLTckmCebmxtfSzY6Q49mNRjw9jQxN71g293Ev",
  "key13": "5pFAXsGJXiYNfVqyQskugTncumuFogpVkLtnEbTriNR7LPBvV3nrEB4dSFAGH1NFLVEf6Vv3vBuL8zY32ApLcpHU",
  "key14": "29ykoZAZLAf7zaTYwFU6HQLdBoUQ2P2VonoNQH9EMPxUh8yiBkREUPwUz2g49K1v5avtodAfTUc1M7ZqQbGiZRid",
  "key15": "2V8KQrbhbfad6gB1nhxWABkrcEM5h1T9mCzcPWa39xs5d1LuTuKwSWpF4UxuyqaA17aoAMCbwvBekBfj6pWTMPRp",
  "key16": "2UJodTjm1sdEMTQeB3jgDaBaegAHfe53jaDuZw4xx1P2noaSbahFuBzVDMJG61iY8tZwEXhbcpmVvq8x2FreS9c8",
  "key17": "3gY37oSybWF8X1qU1smWzb29SVy9jioaT9x9fDs7jBppMggW127277hLYBuKx8eBNt6scHNW949Gbwny8doZCtJE",
  "key18": "4DPxzz8prPcRivwftQzpdwSG8QCmfYGwfmBYQwbRxY5aY3svGBzEq2vYyAxj1ch5VhtXA85iE4iHbCaXZFkxozUD",
  "key19": "kx1vbyWHEz2t1iKFFZsXpTmCArk7wWgUP3nfvDFwwNFAd55rfsTbu6MYuL74dF8dDqfYAWBoYEMAxbfLSvZaoSc",
  "key20": "3uNsFQXYMShDw6oCXQHcsMcrrbd9Gm5qsWmyd8mQrd6XdGTUy4KSx5h2zR35mWrFXiMbZixpTogMNTP65sxw722z",
  "key21": "3i4GJULx7AAXwUwakagpyHcdGkmEnsXy1VcNZtGUnZPJT7Lqtwi8hYLaAY3F62UCLUM7a55UpQLSAF9vFDwbd58L",
  "key22": "2JE8aEVyw1XwDkzvBQTZve25JX19myofJFVE9DPb1pfAHcJtXPfzR2xYGLSraqH1w4qYzN2NsYbAPLvGYKpBHf2",
  "key23": "3dfphJf3utMwPwTWqRAPaNYRBqr8c19h3X8tCMWbSxfQHVvZXexffZoeBKy6JT8FxTJGtz2uie3kMs6SC5UJRxpT",
  "key24": "5ufYNGfPALwdJDHs58GWo3dJ95x3ammzkq3s6qmvvUzVMgwcTqgJGfnpKYUsYnGkT7CpRrDRqS63oyfrJYcrY1Eq",
  "key25": "dctmXjASTQmZz6yeb4o8oTYdTTsV9mQtWL6ue5ktnjcXNgdoFRLbd2H2iYrP9JehjW1tdetdGnCgBGQUrrSnDJX",
  "key26": "4q3qvDkGdKKE6vihAxTeag2t7usaTrRiMh4o9YJU2vHnoBHCy5oNPyY6ya9TEfVjavnrjDqDetKJrsMLDoy4CysW",
  "key27": "g95HpcsEKQbt99ssmoX4MZWrXbu4PwVa2hE4ZqNajBHzHYXB8eztnfA3V7vg3cLwjV7RuFg5Go72uRErJRimnB6",
  "key28": "5MhkcD6iEMk2J4zigya5DGrjNqnXVJ3cAcX2MsK4814nEbLdWNSh18gwK4LWJFdk3NFxwET7E75zuVXAGuvJ8y6d",
  "key29": "4rWVByEmerxZdxd82Pp3NezDzEjhRoYJt1ij1DyaRDvZCogLBMxVt1a5TbSN7ombAnrbghVM3xGzcnhsEdwjNXGf",
  "key30": "5Tnua1vwEzGETvaEZwxV8K5u1iMYLwsW4fhmuWGrST26qQsNzSW87TerGajhorp1Y2Co1nRBsFkGQbYWW4M2CSL8",
  "key31": "28ZvTeNicDRW64oK3HDjARG1QcEeqgAqoaZojym94AyqYpnMKMyZWDjAiMStKJNRWKv2UVLmKss3kkG5piM3iPpz",
  "key32": "2jEmTQCjVAyWhcYjG7dM63Dh61winPLULagTA9GeaifJ2QQ1fo8qZ2VoJhpguM5mESRZzSzdW9CMX8wepmZssiqo"
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
