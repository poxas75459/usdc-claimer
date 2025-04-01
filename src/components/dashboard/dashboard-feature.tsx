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
    "3b9YpKkPo6TJB9u4EzeGaKibRJYYT4TQ5D6S4YTCHr6wQfgyAp22djCStRf4oNnzHV2n62dwQPCmV5C3tycSAwBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3opyxLzcBMqyQPnpZyD3VfvoaVAteQJiyB9qxWVNBeRBApWidMmDxyFNuuErEj3orqT2b4XChQJoMWBLq5euZQDw",
  "key1": "5LGozMWM8JAkWdQPoPUBkdFDCZWTeWGAXC46bqJBUx4WW5Urt33NMSS8C2pEUdGJY4RBzU9PbETGwQ8WpJ4zH8Ha",
  "key2": "3F6g19xGN1tgZRgzrVizY35Yj6SXvvbMCn8fBRCwkda83jCGUEiCba2FNa6wFAwS988sevKuAkSwY8LEG8WLe69q",
  "key3": "JWirn311fTB8GoCgpgUyt7WzX5zDAQeUg4WJMJ183p9oXtPHeJHa6wHjZ7fDiriM5tWxSkAYHWgWe81Ft8tqi6d",
  "key4": "3jjPtSbQSMzfPUHMe7hZ6ZWTSQwT72tfwLQn9R5Uo4Hirowkwz8ty4b3iZY4pvjkgN3mQyuCn9xK3FYseUC9yR6D",
  "key5": "3KjVcDijLgW551438dNidVHVAdBwP3QDwU5A6QqwczeK6YosrMcJfJwKFbqtM5qW6aAT2V14WJp2JD1JpPWR4hQM",
  "key6": "wLPSJm7bUHGt7WS4oxXAxSEYjBoGvCxe8YadJ3FZihnJ52u9P7zJaXt1nwM7TjsNrrbVogu5Q4vSKdFRvXvYupn",
  "key7": "5sXzHfpefvGYZGHbfmpgtbgt5QtSnKqhtpKbpKbC7Kmyncrs225ZWHNXYysxfDy1obFtXTuz88rcWYRCENnjHyk6",
  "key8": "2Fq8fTRP39SGutgcYahyekYUkyg7Ww7WfPDpFaJ5hexUXd8UNBK27y4r8xhwRDSi9VnWpM2Lu2djpHLywiJakcw3",
  "key9": "4WZqtnHVemHizzqY27rhsfp9VzHKTEhZ3rxHNNk2Mmgm16ZXLh3yS4cR1qycAG76SNvTQjcbwZ8HUWF4ZS9wByTT",
  "key10": "4WA4w6QzGXCgXoc3TPjRevNrHDqhcPoqyCYbA8sjwwfYXq897mZefLkfaKACJv8vS9qKnL14dbPzHSSV1pQQXsXb",
  "key11": "v99oaeamA1n5b7NFxs7GAYDtrwAJ4q2iPqnHuPSHc4JkdJKm6p2od2mgB2tEF1sDLzyiNV4ajN7CJLf6umyVUGm",
  "key12": "ZdHRD4BKPwQQy1mEDJaKjitRy7eezYSEuzKSCNppW8ZXKaVgVCzixFuVs8rW2LKHR4bxzGhRfW9YfyrrR4UsmHs",
  "key13": "2MQmPzNUESTP8qXNHPmZzSjQuR1acfEQTJSFJKEjv9A9HeuH3zaDCaKfDJeoRgxx6SL3zBB52h6Kh5YgAJgaRhkf",
  "key14": "o2CFn7GhkFjbdsuZQQVkX4eF28hjEW2fAmsMg4Qo8s9WXHBtyJxt7keyKyFLA387Gj2BH2AsFuA5GoDzvUB7QTn",
  "key15": "4X7gqygdpojQbattKnWBFSAEFG9UiQEE15DaM12QbpCzzQ1t2rEpqbqArdZHq4qjctgtC3cf2sgC5FJA25nJZyRy",
  "key16": "4jxCG1uki3k7wQKujZTZK5tYKQ8AZs93eaN8qVp9C8sTPsPsu6oQPTC5qTKwUMCUgkbC1ML5WhJJEeuXfZgU9Mfy",
  "key17": "39CfZuvkpki91fFNvzdeRqpdKsaMZUV6vL1QmEjVVVkVKuScUvtE63gHhuYcT4fQsfqTP1gQWTPWUDVgEBc3q5Vp",
  "key18": "3vJA9gtVAUyLXgEKxs1VLs9WFini7weGgX2oHrSWWHBCgK6TBgfjWusu3XUaDD5yd4EGh9gi9JnxaevfZTySQqfp",
  "key19": "fRXZ1i9dNdpcgRFXaEZPuyJdQfAkYEDf78icdFynP4arGMaCtujFW1LmJVFwzvyStLqEwTLpBVHKn86PAURYHFk",
  "key20": "4vugy9tmjmF7hiyMeZJA615YJ5nTbbPvaPGRk8cp2BJV5H4HvPXnEBhKmjvQXYi5LEzphcwqdkztM1rH4JHVsd6L",
  "key21": "2PnEM3PGoi5ZjVFLfRDeMZWeE91jehJcUbKW5nuG42Bi8RC5EundTGgJsEY1w4F6u2wiz9ejyx7LaVuPRqhNvcVu",
  "key22": "3Ub5Y1NK3dw8PzHUEq8uLBbRjsBex9SzyseMNEymYDinSvZWxox5ARHH1a6X6fZN5qTEPZc7b8M3PJn1MhW6BRZh",
  "key23": "61ZRBch77vn7ckcUXhMYmA23ECHsG3frHbhuzkvEWxtDisTZoXKVRF1gtUEm5PJVMWbEanjTCCfCWjCEVK6rZTCS",
  "key24": "2DuAs7KawwfG2ehMoPbEA22vsGUStEGC1Q1PTrw6bvux5PvXjPoJVP3HCXLPKtx52UNDJqZtdVEQhVaQKbniSgP4",
  "key25": "43NGuHeGY4ZE74a8iRspe7LaFPQKMXYVGBoiSP8zp24yEYKbHmeyFcKaoAtbbECSVeardtTikFHYVo72v2HCUgrR",
  "key26": "5ozrxuhRq7YH5ZbSGYNJkR7pMG3R68mM644skb6GmAKxFwWXzLfdAFJTudPkHWWUhZoGsGBJqrwww9WYSMVbbJ1b",
  "key27": "48JgWphvn5YthfQL1U8e7WqJnxDAAQJtaTfFxEwJkEeDtDBcrBmCCLFCrNovWhELGSA9m1YRPUzHFYrjMVytrDrz",
  "key28": "3ZWPgPPaynCzrHWqKWdWxnFLi2oS2V1HrL7fekqAadchxqy5L89ApS2YNUKPv9P8BDNCBgYoPkeMvwJbQB2wCcvH",
  "key29": "3ZPWm3d6fLsW6Gb65dfNMwksZKZsxQ3KzuJjbA7J7Db478Zw1Qx6YdQ4X8pLb9niqkWFsEWKp7BHdb5r1sU2op5H",
  "key30": "5ZBntmgKSWyuKncsG62y9UxBw6KEuHQEkb2no25RXhJdGGaePxt9xYeYGHSV1e5dzaJZMgk5kGiVmikxRzSs58nn",
  "key31": "2w5Cx3VUCc6Ts49VtS7pXfd1mFC1UQtBhwPufUHaLnVCaWbTqFZ5vg6qUoSnNwbitLp5Pbv9SdxYcUT4x6F2TWqa",
  "key32": "7xtSJ9uzMJNwtfNkE4eVnq2h58B7PqPNV6HPJm77srYkVVZzHcpBfCKtTpyTdGfpADq7r4DV7x2UgWVDnTVmU6R",
  "key33": "5p4fPhwKBSRjVY2h6FyUQLzcTZKmLSYHqmVe3fZvXYtCrBxFJMqBamHbdqqxhda4RHuVH8yh5o3gRzDRp1cafU6g",
  "key34": "4tcuBGqwYz2j7nbobvkb1xgdFd4H26B3h4BwpBCY52oQeg7iKLs2jehXEi84p16Q39rfK3STJqBv2EXmyfm3RvPH",
  "key35": "46SBKvFq6ptSdNoqVnXTEXFsxD4Uvjb9NhS7xfyH7ShrNqY8ZSLudJXbm3TxY3uWFtar9bp5hq2wrGrLT4pR9D35"
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
