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
    "5NidcDgxY4iD3C616XKPEEFCm6AmHbi5k2uJB6cbSC8hPmuxyJ4uv53fqAyf9Dpzu1qdAVPHqbcm2fasKnG6tndk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6cpqba6EVMbKDcoQHvbNNVkQhjn2yDLmBfnyAh6m5tB1zbaz263kMu2rCs9Pbn4hg4ZnV83uXQrzurE9eMPHHpT",
  "key1": "27jsPcrVNuusrzHkQLJx5QXpmFtQwcs9Nn3KXzStfgQDJGaNo3hJtVf3XzUTb4kGonF3rw8wrCn15JBhBza8fgsB",
  "key2": "4TX7yZR7ouMvw2jDCKePmogEDbq14ZxeKqmBmy3xqSyEUPS4HZXyVKy51qAPdqECCkKRb281wC6Pjr5RyG64qSMG",
  "key3": "2HHTzE5KP19D3DSV9gegWdziGvaRXboHmXZ6G2sHRvPoQPpEQMuFKSiDhSnQufrZp3jp8p1ATY87odUYkwDkzYqJ",
  "key4": "5SrJMKdMA37TKJzpkHhg8ibzp5E8GbXiMs3zSCfaS5iehKY19iV1ARvT8tTp8BiH7WP75CV5nh7KfxMit3nMowXt",
  "key5": "41qdg2nhbKKaJvY9ieVm4oftu9DEqPFQGBNgZcrpNqUTWGpmT8t774HQmwreGGDhErT2vWjrVsj7VbwdC7F2Bwvb",
  "key6": "3nTYySEuYoDXkVyVWmFRRD1mbZJWcuH2XxkmjsL9XNkhPtAL34ZVGadfTEKkn8w6PU9YMWrrYTdMYY8Pc3ayXVk5",
  "key7": "2QAXGb9B3a1YjUrWTLJyEQTTPoKaoLXHMPH9VPD5Q9HcQ4qRT3sjifBgypQVgU1YTjUJTcJfFuMmYr4ASmHZD3RY",
  "key8": "5ff5BUxTBetS8s9uw4HvReeQJFF7xpkJojNc53rbYU1x2awysv4VPB9X8ovmEJ5amb9GerxUME4zB6DZzskRgATa",
  "key9": "2SE9owVptw48MYk1Ksu5RMgXZbH9XBb3XDgQQ7kWhaj4rsEYDe9HLj9wza9gXKZbAUZy3YMBuPXw3Wx9Q2HH9ppd",
  "key10": "pK2FcTVPSUr915unrs2aHdFKtfWnDrep466jCSCNnbGNfdnPW57yEm9nrikwq1oZzaVQT1BedcQ6FTSKn9GNSUQ",
  "key11": "64WBnXCc4AqWqnyQshsCJ1rTi2thav5bzBdUykewzwc12Kh84qxEWDqxjk2nKcpiNmaipsnPPBwiGHFDVbZe7GMX",
  "key12": "2Fv1PtGjWK2D9jXNxrbASRK5vRPPzsvKjFYMgEdtrENjZPnnTJoBCGreMWnn4q7pc4Leo2Yau33jvA3VAJdczaRB",
  "key13": "1js5js1hAnL8JuagttvMgyCUWA1BYKsQuV1dRScvZWDfF5YqApwehnn4w2LYYQjakxAVB8esXNAaBnf8DKgSdYk",
  "key14": "3v6Jq2nL1gmYQx2ubaKiWvCooJGexQkLUHT2aZ1Ub1CF1xRnBsF9HHQvA9cGiEZ5B5kQBcefm9UFPjr9NS7sT7fe",
  "key15": "67TRSWjo7FzEmqdPW7EbtVmswDPVMurAYrKrDNDWrk4p22hEmXtupoSRNahNrWLGisRUM8N6zgT2imJJvEWApJYe",
  "key16": "5t893aW63PHAiMa1YvVGEBwGhA4RY5u3J5R8311iwUo4UzLx4yZvcX7dFQVy2k2EYjzDPxnQ6JnmQQcg7jKdMoPw",
  "key17": "2JwjmBBwV5D6RHMDKGnTu1tWwoVPEfp7x65pfA1bpQH45AFQjTTueDztik1S8LsTZMwFERuRon5Hd5vv2ypARQmU",
  "key18": "Zif7qBSa2J6s5vigJD1WBzS27C2LZsA7w77fSqRkKrTHEByzjRWQRQ8tojBLAJzRVMXMShWUpwWssqpSTEKKCaK",
  "key19": "3TG3QWh5QLcN2gpDx4DrNJr7qYKqRUG7ooPAiFLoozTrWuwWrrbKtVC8f5DF4ajN1R5L8k3S7miA7KbbAguZ8eC5",
  "key20": "3LgRWM5LruVaJSiUZNiYRdQkt7JTHWV1Bp3mpJfSv66HrLHUVbpXUdoEHop7LDk5eJF6wAns7jQLsGGV6k33YE6S",
  "key21": "5yQmx97Sg79xCoBKntNEFbzvkTzGzooPRFuZoXdbiYdwrUKra7fvwdbgVaCcsWtGzNNPqsMSEny1T3bjkcQs65xo",
  "key22": "4JNjfXqotexaixBviS1xPqrpjk4G2abVnmEWXpBrT21SdfGps1XMNPspTdEenZ24Qq5vrSmYPkuaLtPuW3QtVdCh",
  "key23": "2Em1X1vcCtq6CQ6hmRYnSo3kgBViQm5w6KQSoLRitpTZABN73uAbViu4v5VHdQsfiQZeepuCBq5GTwYihkVuALp6",
  "key24": "E91tRKkq75SirfdoMejn4je7iEdAn7boamN52P6ZjcNAdbSmqvjXNrQ9aWMLBg4wa2cSpMnR4ybYiSBkQyhjrSQ",
  "key25": "4eQKWnLQPx6zw7Jc5f92jzb5kj3fWh5HXaMewNVjPFecLCK5whekSA8cxHDFa9mhqWWhABm2Qt9YRmQFcwdVLea8",
  "key26": "2qRonZ2uyQtw21EnFbmdGy8XqhsaAc1HUiFDYi48wEbwBo2xq5GYQUEevKmXwmvBgApnr812FkQ19uNBZCuBQuKK",
  "key27": "2nyLmcDPKPd4m1Sn3Yc9zuds3mDHCYMyLtfFcSVEPFgxnX7CYTeZrQvrvvE7Docs6bAxFQXqGaNheLEXRZdo4vYJ",
  "key28": "2AmgJdhJ5UZqccfzz6tGDp32x6ojqEqgvtd1SFfjbye81d8GQxEvJWD3uphTA7RB7FPTBUjdAcf96Rr2GTqSgpXB",
  "key29": "2oAv3a6W4HN87Uci5PJX2KwVYZ6cZdvGTDhgmsFmbbsmh4AbunVqWXxapUJebd7eJf5APA52SVZAS3V2LV7gRLZe",
  "key30": "2Y2yDMzxoZyvmvcbypEeNmqS9PQLYCyF7kPaspioixCg68bczUVvZN1fUVNth6wvNr4LsZ6Am64qWc6cHzD2hgLE",
  "key31": "5dQvjsSh89dYNreov35c2ECzwX6qoSCmDoHRpynQ8KZ97nHiYy7Xoexddat11Awr2tw6wPe1hwGkGYHwbVoA27mA",
  "key32": "4DokbBwH2YaYrKmXzrpRUbeUS4tVCGwzNmMGE2Qp24J6zypqa9ajfu2y2qiqsA1cmQMHNB9SEQe9EFY8Rx3c2XAx",
  "key33": "59LRJb3BF1gqWbvqfhGE6U4waVHSKq9Xpj2JwoJmt5yvquQhbvvycCXWmsowdEdxwGsiT7reBo6VCgkzxtNzAE5W",
  "key34": "e2xJDXqQYB9Nug4nnB3To8hzixQhCEdCz7MoWys6UxLhJDCMAGRpTYuNkWFGwioAKmqeHJM67ni5hAgySEPghZk",
  "key35": "52acmZXveSHbsbRFmLbkRdV4UFTxPKrqUrw4ZQiefkJTKAQzSk4dok7p7fTWUK8JnrDDcfCp4G8sy4zVzd7nXbA1",
  "key36": "436pZN82MiKC6pyWFucPSwBZGscSjXsgK7GwpNwEWrnWvi44xF8Be9tHVSk5zVH94AU4PNSCwa7gGPp3L59zEzQP",
  "key37": "guAQhxUjhuWoDcVNK64knMpK4MDa72JpVpoZxkoZhiHRMa71Mnw5HrAKgboHXmzx2HcpqiKzbz1sAj7bWrg7xQm",
  "key38": "nnG657ChdAk86W3K1Tv8x6KWt8v1XeV2ZAmwe7y8CrZf2qiZjaRWceqBVmzNrWMAmeuFDa9cWyYfgh3Zbyj9CQu",
  "key39": "3Uf2xPq9QwXiS9dngHSEwfmKScaw1VaEaKuJNaGPzgXRJN9ygPEHutHQBu8NyxNpPJNxNuAsryDtia3m5tJjeSDy"
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
