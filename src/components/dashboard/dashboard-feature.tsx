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
    "5Z9YHofbfwU9Q1tZSXWFkiccaXfCMdKfJgV68tG9hiqkxroHzYhSKPt1kajZiaJBCGRZpcbCLmdtcDg3wgTmFFX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PgD7yob9eEztZzTAwY2tZeyiNQjjFEtaPcJ7dCPYKp8eToea5Rbp66YqcCBBMURtqzEojVuWc3f7WyrnGPHKpwG",
  "key1": "4Vh8FciGNw6i9Vb7vcxtG9emx7jgxkaYiasQ9yfuAfcrEURBwsH2sLRPXpCHv4M5Bjaqr1DM22pRT77nQr4rGGj7",
  "key2": "qxsG5ACZVqLsp1YGohVskoZN2LRBPPYm3YUmSQSfT9NgxTTZdSBtUuFQrgt26HqbrDoJx2XmhzasFHYShkmUTXg",
  "key3": "3PM8wZxPuMG3M2xysqkpYhDDjgovGmGnCEeyaPxyCCvjwu8prNRBf5B5rCwKTjeRGcPW8nUrhf4HsEzCHPZTHvCv",
  "key4": "35tMM9z5q4K6d1Pmu6uzTAkGF34X17UfbNfisR87LQ4vfdt4tYndNc11PCBSZKB7Gky4W6ZuAawfzhpV9YFSYWeU",
  "key5": "5C8XMeVKYA8MnkZJrgGEsbVdFUUuefvsweYJTRHvwdcadArEC4tij1D5XboAejM9tRQrSB4UfCy5FuuBgo67ViL4",
  "key6": "3Gfd8FpL5wuhXrunxnSyVKLsxfRBL2B5bCeT1XAMUZM8QY1KVzYW5YWBwfeeksPBe2beT2Hs2XWwBN2Q3YsfFAUw",
  "key7": "4mc8s6xYomJXfJiS8sQubEzRYQ2j8ufPxrNPmZyyA2g8zDg2LaQmiR8KgdZdvcWhghYLkXDvA5BersH4GFyP62cx",
  "key8": "5cYa1VgjSeNYbeScf43S6tbM53AkhaF92nPJeRS9Nid7anW1t2gEfZyv5XwsqJw5MCCqW2WXWapiuK4DhdiQYMo9",
  "key9": "TfSZpf2m1fZSnkFnMrFGvbacA5xLUDVL2YD5Ekxp31rUbn6YUuqWHAugfKUL7pD7mFSquJU7cvkJ6jx5ULCyFEu",
  "key10": "GV99sNDBLShrCAiUa5Ut6UwvkHnY311ZytUQ1tGg6kyCDSsep3m99e8Zs5o83d9Dyk2yZpEFyyj6zfxFxvZkTcb",
  "key11": "2o8bvNnDgnz11FaPrsKUKaCWbMD9Awc9eXHQoTGA5AZNs35AVhYF8qJiWGXqS6NnuA3cg3UwaKo9n5kwtw2xRfsu",
  "key12": "2soCZR7WRxtbvtc8tzMX1KwF7bL7iMBxKJemGeFzvx7tLMYZgLTmNPJNxEwFPU5UwhakCXcd4YgAg5d5V9FyU9zq",
  "key13": "2k3VbffUor9UMpAwEw7hUBMhiT9JhNL5MujVifYKBXgF5e22fEqkg7TGrUE3KnG78L5oWUe5QnUrxzoRXvzqDvnD",
  "key14": "2ofvZ5JUdcWszC9Zx7PKtke6Mq5k6xCWpEQXAsL6rXtJbynyzmeAfqwXo2nnPXxhHQnKwy3j1a9dnx7LxAwgQAGh",
  "key15": "3zVeCpUFoom7smAACshcGL6bwvPnLfoAMt1YLdWJHeg1vowpe56D2BM34YN2MZ73FjjoxJ2bw6nxdVbNya4udstP",
  "key16": "3m6tnH1P56dYpCfTXzTMNxkTejPUVH4RYETEsCTwV4m8AxMmW9cAaTnDTUxTcWgTdTs68r3Ls68iD8uUyMpn6Yah",
  "key17": "3iWA8kb3hUHjmot5RszK2qVZuJUd1o6LDsj6oqs3dvbSc9oeweR9Aqji15tL3AiMaCVkBnpinyS68Fu5z8o61qeh",
  "key18": "2SJTcAr3ibnsW6EfxHw1n6AHktH8bhCsjDws3GLepXhAGtSmHkPTrxQgZAZ5pn3EfGQYqgCZqirPkPKaqeLWm51s",
  "key19": "4AUZehkADjRm4SUiTgUj8GcAmzfQNW3Wgxu1WUxo58hMges3Lom6uy4J1beTth8CeZtJC9H4jqh8Qfc7jw6chkB5",
  "key20": "5Z5easKa8HcbTNujTi9gxG51h7vpY58d1cnVaXWwiFaggRNZbL1CnMjb2vTh6qPXVXdRwPiHT8mY5Jnz7Bjz4PCz",
  "key21": "2NfhnFX5ELS9hrrsRSuxwB3nmvJBpmN7rVmvyp9ZHjc5ZfPa8Q9aBbawKN6hdmRHv1cSvFAQj19Jnyq6Pr1ox4QB",
  "key22": "4wvWyaT4EVbKE5MhDMLS2jcgkxsiUmT6JcdMWEY5o1BkFN3V5LMF1b1ZpqUyo8AcC6mBnmUQnnmHzvktVdXxmP3z",
  "key23": "u4kuoEYWwZAeERQa7ELW8FBokUQMRqwHto78C7cnQGyuB1GGWXecWnnNUX15PUnxyCTQAXzahgUA7S5GcWfVydZ",
  "key24": "2ARMT5raW5DdLBsiDM4pkaJsZTbJrp3bM1MqjnYVmHkWfLyr4PEPqiBv9UM4NNMkpzzqPgGj1Y4QNezCnq4ciSge",
  "key25": "5wGUXTeUhutrbemGCXifXoxjHqLiAYdJXsP55P8pHvLoXQaLnM5jyqzwRWqYdzKA2VgskDdGLxFoUP2gxZsRjwAY",
  "key26": "4WUPGRCkfqEgHxgRx4PssDLjoSmkT1BbwrkpbDeK8wngaHkbkJxWsq4tzcZJv9E8UoSV7qBTCTWeJaeSCJSqLyWD",
  "key27": "5keeb4K4x1z8FBJheMNf5TpuKycY2cZTL8EBLqonyF6VAYtDm8FyUyRGCtpDwj2CVeN8W8HsYdJG3cJp9Y1mr2R4",
  "key28": "2N1JaJwTPkLyK39hHtxcJRwhkSwSnapRRc6EAKWch3tqQjopkW7anRXpvx1J72nZZjbmQB8PAVjrFZWR82vcu3cr",
  "key29": "2cqDKZR2HVEzjXWxDATXn69tNRuYAT3fwsNXcJdUPgFThQ4KgDbr7TdZKK3mcbbbyBGYhrGxLN66W41C69Pu872m",
  "key30": "5k1sF3NqKwd4KnzkfsvgywXUMghnzC6jGHM1zbfmc3wYbAkk7kG2sbnr3UimPWPD8yCQJEUq3cm8J1qfvSY6jm57",
  "key31": "e7Lu4jfLLbychn6Q4BQBLDBu89wM4rKa4ETpdRMGZPY11xA7t8ddwR3FVQgffZTorC4xJ22Shy8eCmDxB3KpJtw",
  "key32": "66hm16QoDyffachtRf2vjQj8mKAQRYs2yXWJb3fkvvzixsXqnP9JKNfH6RmG1HHLjrZWRvGD6oUYnxMJzqMLfELU",
  "key33": "5TqkcXD9bP76mpgt2NjbRFPUgDbfTtXJEHfjoVVeZJ2G4swx6MHhBxnEm99hN7mJCadfKcmiMGvgzD9H4GA5N9uJ",
  "key34": "4zp3D4jjvBp5Utn1xmW3EQPDqbWDZm39p5PtZvkH3FsaCQsKS3BScoNiY2bpvPv2WgQEDm3dmiksyVpNxXPvbBus",
  "key35": "5icvfUSSoTUaC8WudweZcnhtjUfkbARUGXqMdJZs45YikKPERTG3EqMKdUxjsLxKAQ4nEpUen1TYkiqoiYzyBim4",
  "key36": "2qFmvdN6jMNa7Jh3T5wj2c1a84hugViq5n6i2HsHiZwtPLeEwM6ZgL9Da8BmFpwbdf4ceE9dfQvEE5sYeQbF5sy7",
  "key37": "5yC12eRGHFHkYGhVSqaG2QhDMggtwwXw1nY8zFW5p9XJgCGMgpdcguyQacnZLN5g9MiT9Apo6XuyPzCr7gzsqjy9",
  "key38": "479vsqDfQZz65jtyDGZjcRSY5xoibhvow4iwSBwAV4bfke7zFmgH3wjDibE49XoGGZH57rw3jDzbGjP1NxBWXXns",
  "key39": "XDixFCHrKuVNstWpjFo61vdySsHkqYZiNuCYQsRxeSUyQDffCs1p1hsMNqq7u4cBL9DagsFAJ3via3nXbdvvR8V",
  "key40": "3RKVwf7LCNhf13PLBfyqJbmzx1bProWmQ6Jeu14Xczy6mRovNyGvatk3r46FEMMKMC6dyqd8W1S4whMtjaaHbpkQ",
  "key41": "5zmpULuEpw2RQBef4cVETdNNSqFk7Ny2DbdxFLRkgN4LmSb8peRwncs8FedeuhGRJK18bWe2bjPvzPSGwk8pPpcc"
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
