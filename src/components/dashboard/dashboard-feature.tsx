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
    "4zTVqgsETiqDJExpVp89515maMyMb5T1XAvmHnyqqtbSVJwTDjiTQcWdafyaawjqvUk26MkbbjAbJPRzJpF747k1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55knrZHniuvfEyC8S5DzDHf1mmUK9N93PCuxdxAsRem9vkeMKWDcePoGeAvXXvmYb4pqwMbwMqKFLt9uYyn8dvjV",
  "key1": "5rAzmyxzTg5RmXrhSq45oDKpfz1r8mdtxKuKWaSJDanERtgP1WpBtGVVvjshQNXfv3AiEUaX4sBnTQhHNu7EUHPR",
  "key2": "57vSMnmR4kUoaJsJTfmw6iL43CRnv1gysZsQ2eCfwGPgZ54WQTnDWN7sqoLTvf7RfMrNAJ8BkDQy7P2UF8ZEaLv5",
  "key3": "5hVje1ZnW1krUBDwzKawpU9fVSJSzYZmAcPFKGcdGSC8SzY4eXenfDnxD7Bh5nsKC97jMPN8vMQE8gh1HsQaxoyi",
  "key4": "2DPvqn7MLZb2r6nmcfwsabv5FrfJsJ6HM24ATZ2c6RNw5txxE2pqeNnuq6rLhFdvkDGhLP6o4JXtj1WV7Qn3rrUD",
  "key5": "3teWb6rfqZfw5Y9u81JTYGcGwwKyz3ByqciPivtp9krWfbYmzo1njrSitomYdbd3nfrEt4vL3ttBrmP4bJ5KgYXt",
  "key6": "4aqa6MBeNordhdenKiLNX7fZG4wPGWbFtC68zKwLckBjRaAW9qkeTjBtzZPkHd1YuQhiBkRNoZG3r5r2QLG4oJfU",
  "key7": "5nvq1WKau5WkFtio3rzv265QynwESkbny3SroWRWgfj1m7DwhxDH1GS6pWMqYUN18VXsbtyLdrezwuNn3jkbgZQk",
  "key8": "2TBqWZNif2ZS7rsLbaTJxDgqPhawqARxqkzvZJNDqHW5xJdfFpk3V7nDz7gVw4H8a9XkgcLSGKPU57tY6723Usko",
  "key9": "3i1wN17kUDqX7SM3P97k6KeFm4BCF4SD3vt5QXc68N2gr6rJ1TUwkBCwv8YP4cDwaiyRozH1zW7LGLtW2VR1BN9L",
  "key10": "3hVvaeY5Ui3wRV6PwP8spCJYKpgjJecy2KokPTDVvSozhAm3rrsDKHbAhwdNDEzLVyr3bipSbEWCPgbKDRLUuSZy",
  "key11": "5HrKXcK8948YTDdaj83yk6pyu8bJL6454vk8UL1QHtMdnZUREcPR2dgnbHB9vYEQQ4K6C6BHxJMUF8dLMDGzMVo2",
  "key12": "4Skhyg4YWHiFdQTC1KqWgVgP7LWgHhnSUhREVWna8ZWQEUdzE4PWHMTANSZQb8s8pGTNKvXD1b3fCoAKode54eQN",
  "key13": "3ekCTkCz5XN3eGX1G5FtCHsU4QtgvLYC9ff2bfjxeupcqrsn24F6e2WoefYtgwt6HrcRF78miaoXNAsgHxFGdxYb",
  "key14": "MDD5QTwRK2x5rhGrFV44r8HgetKDS4varUEuxpzSpocYUKBqChMsuSKLngeFUwTknxhsbLJqYxsyiCLrzphuz6P",
  "key15": "5PU11YAodmzmNEXQv6eCvj2P2FGBTQqxJ31NKjXjcZEaXGppeVQTex2eSD6DAWzsqgp5vKU1v5hT23GAxxNAvsa5",
  "key16": "3vHz4dy9WeS3ma1YLpRYDcLVVXNH93nNnwiCobau7bgd6XXGV6WVtESihS7kjnVTzP74hWnzdmcEWu7DWiDXaEjj",
  "key17": "2TP4y1L1zPa4hpUbC9hY7kK9nz3BxEJLvvVLs8FDTPNn2mJ1SvAGGccozvxRjgFmZfSidJsfdwDmaxXe1wRp1e2o",
  "key18": "2GT1bNpd88UTbZhkAe8tWL7R5MFeaVZ34Ck9taikvtZq4eswuTXdk3BdzgRPySfF4s15ywKnqGNCE44HkRY2ByYp",
  "key19": "XVQQ1o1QdNLPvyBjXsSt625uCxFDeEuLW2RaReaWzZkbfEQ7R2CZQEnBEAAYGPxGXhgb2R1mx6PgSN5eh5o6W3F",
  "key20": "4XP3EnRJUtThqMGwKHWtny9XcaRDcKgU35r8MHC2XkXYHNsxTz8FQh4PV6JZzZ85eSwb9JXQcip56DcLAUuNAZCA",
  "key21": "PKf8n6HGASuTipn5fQFgpEGXXYPcDkSDSthq8ZspuqVCSAoddqNkHok9aDghwEht3A29avLFySH5CFYSgxbfQVr",
  "key22": "4johSdA64Wgn6WVTrWYexY3dHKrnBSSwDqVK5f5hiPeBdMx4Tiu8SvENbm2e15wEGs1QUXeR4iRHU9WsGuCktcA7",
  "key23": "cTMiKqW2bzXx1tNq1Ez5mn3C7LGhZTSkSXRpPqZs9CK5hpwAkaAME9mKQGZXu1yTPkoNEV2vT5eB7LjJVETGi32",
  "key24": "4CqJaXzAmaNhEnvVq2D54E7DHgCbZCXLawUTy63xdotEx4hoGsoNrL1cQuy9dyMJP7JX47N2tdLpihTEX5mtdz8C",
  "key25": "x6Wv7Sp9ntMyk5MjxDqkjVjS4knKEcCPdgU3cwSK6BjcWytAHbg94rRsncpSQLJJe3B3fBfruwJAxV2kpPsReWG",
  "key26": "37nN1Vubn1zrfTWXboLwSLdJjhvGKEqN9aY8jsmZhJ8GYKbvyBiPsQur5h1M26K6TXg376acPYegivW2BUL68zX1",
  "key27": "YpsFSwknLFAc78UnLsbo8ZfgSYtyZncmRrWnkxoetBUu97GqeBaNfRe2qCjXfGbUXjjU6ZEM6zDX9SPvRRoe2xM",
  "key28": "2Pxb5nmgH2YHbwB7wfKH3M77E9rnrjBF5KyE7HW3qPey9EntHiRX1mDWL5M4v2UXJ6xsujPLnesff168o7F8BcEp",
  "key29": "BkNNvGJ7aczG2nATYgdLtUMuXVLzPZPbC3zqZjcEAg2JvwnAR2Vudv3umQokr6MxEJ6gsBqG4zw9bvvX4fdV8Dw",
  "key30": "2y7vm7odksZqmejrzq9y8bV7D8krmoDGcvGJW3TAgReHxs64nEkUvcobhLnPhth7bPBCcUc58f38PmFmPit12jLZ",
  "key31": "5WTAXW78WNFd5A5vdSYcCYWCfWvoswuM5pf1EV4VadvJBPmbbMCzJ6SrJhCBpackDHqtovuUX1k5UUaD82jZ15Hj",
  "key32": "5NXkz5rH895hh77vkeR8FV46vH3u2RvmA4y4HX3wSKVvsLLiKbKcBxouXVGqzdL531VyArHNxXbXGUoLNbrqw2JU",
  "key33": "67HRE2Ueh4d5zRghXupxdbT11uKHpoNEyZpQQ72xuiUD6u2w5yKqfXTFr9FT6BHQYJyrR7GKb1mmT4oFrZqwS3j3",
  "key34": "4SnLNHGxuXZQCGVUtTrBiQ9m1g8aJUC3K26tW1BmfwR8seSMpBenL2zMUD2SLfMmDWm69iTyHB8g7FpMNjsY8Stg",
  "key35": "4BxuCQTFMQTSg75QEAq85Wd4zDFtA9HmMNVNwsRiZXBwNCDjeVLdqqTjM8p6Ndoujqu3zYqN4tzhoCUwksx3hDeg"
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
