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
    "5XuW8nNJj4qaDk2CHGFGVRmk1FS7ps6zKwNMMcHsb1hpstT1AJSjhRXVFUehpfYtvWsknrgH3tNPbrGGL1y9PgTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31xvL81dQenudbeF8NnJVNF5yGm7P5NwiLSii4ogH1Rs1CeNvk9YHUXuRwEHLeYzhqRHCa9g77gZgyix6Yjcj8VB",
  "key1": "3oRN4sTD2gWXYH2RKtT1p8jDhyHCMANtTeQFjAKnWVq2LdW3LcfqGtWE837NX2k1yx293y1gBAiKJvGa3eWgQXaq",
  "key2": "3S6a9DdL6r3XFXiJDrDNAsHFUxtjS1ieSZ2cVjLPRkpfkn43wDpPmsDe5ZkhxJiz2XKGvLz3ZNK3o1q8Z9s1cStR",
  "key3": "3GizevQbynY2bVpbpNAzUhPop5FySZNy7nqeWcTzNk549AkRBfcZy6atqwJ3sCJCn5h44LvnrQ6xbUYf6wd73r5W",
  "key4": "37bwQ9q4PWXjudzE6pZAf54TvUthnf1xjrW3U718jswxZTYTS32tDYyxpM69H8qW6Mf5VaGBZwZugTgva6HxUQ5G",
  "key5": "45xQ6QcdZTmR3BQNVNjA19REA3t3LQiGqzLtUcyfDEBF2QdZSDFf8XitK32RuvBdCu9YdKwrba9hxQiNZTkjfv79",
  "key6": "GMem6WmNiBFGHFad7nNjACsMvmh3vVtn4jTR2yZEVV1FKVpjDKeegxDN4fgRsdZ1onY8CqL657CUDWqLJvVHjqK",
  "key7": "4gwEFfcN4VksRDf4FaXaxVUakFXVWoXGowRjhdANDXjDFvatZBWrhmf7bSjtncVza8w6YyMuSc86diw7DAEcpKRp",
  "key8": "5L9NovU661oKeii21hr95ReTwixC4H2Ra8duJhkfAHwu2XdHHuighF8rnFApmnZUaPqoWwkX13D8frKd6jYcJVmA",
  "key9": "3ChR7JH9ZudJoTKhDzFqqxct1Yh6C8XvsdvxoqJD4UAcnLRA5EFbYnXHWepbd2AUcPzxhKMGpgD4GaN5MMHNRkJu",
  "key10": "4M6fGFdPPpD71anNWzXHqp5K7AeRhgPP5PtvkdsevRoEtJ8mKg6BHPX2QWxiwvBd12JFFDwMMDgSu4JceusSmC4q",
  "key11": "59JM1281E6BXW2hcyagPn4pxmEA6qf3PQKCE8GC9vqcyfqQQZdWjUjJLsborsNwBqoAiNUiysK9T9Zc4PzNw64LZ",
  "key12": "2tZJTowiUScEVzg1DHcFW3WyuzgT9DrBMuDPTq6TykBanVUgc45Z5SYZSs2aEfhs1qEGC8V3PgDB6CMGFPuYXTDp",
  "key13": "4RStCipUkJyFw4rX7jA4CZsCymXtPSRPbMWDEngBhhWTn8bJJwHrzmontbr1dicxJ18p1m9tXPxGVKQcvnPpknya",
  "key14": "22PkRrrqGFLLsgcwYLxJcHVWtrpgMhHJMT7jU2uDQaTyXoxG3mNtRBaZePeAFLBdh2LvkTF6agKdkRxSaWYCgbep",
  "key15": "4ctBSydPmPociVdR83xrjLgPV4u2Z29BdGbXdEvt5oNeVMJdsMzn6TYyVuEsJ3ZQDXZMi5ZsHJgDPRaxarRvsoRp",
  "key16": "7NcfdwBTbDdPU7YT3guGFQKZxTjtxgeZ4fXeD4dgTLq5oagtVoVE7SeEWffwAD9HqUEgC2S37Mmsez1aPLomMEg",
  "key17": "3cR9DQq3UQjFqncKh7Adh5E9nMsQSsk1ANj95DavuyZtEwo7LXBFHvn1jW1dNxFGNXGUageLqvAwqMAgzoh15wE7",
  "key18": "4Db2vuWS5WoSsYFj52jYvQockK3B7CHmxY2Pj4RKZgWJMVSoGHiZQQYUwSjfopovJdkZdjws37RxPUVSKfvwN4Rz",
  "key19": "2WkuExxKtPJaz1YRJqMXQpoDBA78M3RouDLNABjf4N1oYywKyYMShNhfhFNgzchqPyTFgiS5wMmKyMKwqgtN69Fx",
  "key20": "5Fb9sC4me77vRTVC7wNEE5TmoKLhHLzdBreuwpupbZMR1MGp7dSMRWmDtmtUxXpxbJLPPqWxYnspSKHitFvGWHrv",
  "key21": "4gKZJxkrmpgSzK76zK4iMhp1qtWuZgbo2BFrutTGGFR2nshpdscm1mrnmPRwwjfvLx3hWXqda9giFFDJ5fso9PSM",
  "key22": "36du4XUadS946grpGZb1ZYeVnkLYbXG8ZRTq8o8s1ZaPycCcdJnXfrnnyYn6qhW7yj5kcVR8cB21Qk7LNYPaHy4t",
  "key23": "3P28RYAWHZMPiggttFabucS8YeGTV5NK3sjVfCeRC4Y5njoNcbb4FcBEB8FNLLRjdZoTjvh63ydUirr3x79ae3Tx",
  "key24": "4zPS7PdZD1sKTj46p6ALaBSK1Pw6f5wUbNcWiZsCeDDWxnQRzXntr7Afgy6osrPi2858gBLp6MQKthohd5CHLr66",
  "key25": "4t8aCt3EPCsS9HzYyQWe6JrSc8yazUUmziUiS83mjxevoqN2crnH6jRpdu7d6FZEYnn1deKtiUwEJ7xmvoMwdLC3",
  "key26": "rE23GArUB6sSZqSQWa5i23KtS47z9Mvj852A4RpiBAW2Ptw3cqg5axqhA7DUxKUADxx57ECdfNJbKxgvWLmaJH2",
  "key27": "63isukXGx4jEnRLSo7RmjLoMfZFFaxADLwVFeDQif1Gc6UHzmWLxZgJcDxu3rrbQaXjAqsDcNWftMpxEhDaB1gxw",
  "key28": "525a9yxTt2L5ZeXQYHJVHrThfWE9sSxd1uoam4bx59fEBbRDwxcYXgug4wh8DXgzRoUP8RTNyn6Sk7FtiMy25gyC",
  "key29": "5R9KVFWSSNEfNjio4YTWwD2DcJgqRYQDYVMzBVuAvjkqVXGpgYGGTX8Z7fwQycSK356StQeRpkbf1xpaik1x49XV",
  "key30": "5PVAW5wb7ZNKRnS4hYDEacuzHtFtTMq3U5tuXcwLbFrK85WKsX2bBgKzdXeqfpj8hESKeNGST5JqDwrS7CapJ3Ty",
  "key31": "4uHJK7JG2Hzj25z4cib93W3XPkhWKftcsNu3WfCAQsQ4ZL6Li1YBNxJTCYS4zqzDb1rXpzeEbYkthtT4UbWozzw2",
  "key32": "3P7qdJQD7Z23vqLud6vgVy19qZCF9vw1f4TJ6BBSETdtngLyh18396FYLnDjZ3dde9W3zfzJjMk9CJ9d1u5t3yfE",
  "key33": "3xCZWNXNnT6AMKCNGf799ZCueAo6FBwnjX4Qx49cob9cC38AYKzoMVh6Qw6fk2X2JkX94Bi7TVL8oiBHRws2PcYQ",
  "key34": "2UuGDRtjb5Bx6iQMaJjk8DCrSNK5DEzY5Nk9Lkfe3XRRcuVchCAtr3dztPCB9PJXoSztjaLFgke64RPYU4i4dLr",
  "key35": "5sngwjmaNh3Fgke1WYzXbdmamaMCnmjVBxBGENZcood5KCnnRtZacAgrBPGDVkiqLWy4yPLtUa5je5Ls91ijcmVn"
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
