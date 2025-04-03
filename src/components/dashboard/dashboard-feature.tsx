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
    "2yJrxCFy58WPawQzRbYSSiQAw6nd6fDszRWYESGW941LM1czGBizicv4rRyMYQx2HwftDeiN1wzyhDcdMzcejY6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rXdR1JFaEidSxMJY6HVhonAxbjZybkERAzhSsPqaM8f3SP8MCXj345a9imVBVFNFzyAng6EgD9vaD3ZFFkkTpKT",
  "key1": "4Kbz1T3RHuXyWLKdcdVbe5HtptXZGjSq8Lq8txQeZ7YmWhxXvY1PurPm9Z2GMMDesWPtqqMr61pbzXDUfPQf8emu",
  "key2": "61NhGWSvt8kXS4ysy8vvsfrQDjw8C483hsugQa3C9UZzD4F7jN48ZR5M1bFZBu1J7WfirpoTxzFwseVfHcpY4Xy4",
  "key3": "4jb2M8xnYCn6jGEyBZaMhPYGzza2pyz6zLVET2CAZuXTo4GsSuW3Xf3q4xV8kLwGt6PEbTxyzFF6XqjP1C6WoRw6",
  "key4": "KSDKHmzzypYmo9xUwqvRLh45oY3JGu9HYa1vqa1XxBGL6pHaUirCTSaZspsrMAA3w4eXHE8L1bga1XFPdcF4fRB",
  "key5": "3sC3tsJaxobyWD6Mo2ieta8QiUXqq3LtrWkMfS9fmZcu5iHNkfBX4iQcWjMvajUjTTGiPXh1SrMbKuqYp5Mdi2vF",
  "key6": "24q2rNTAeGVpjnDdDcubnG4Cy9RTujmAtJg36yGnoGp2RVpRm9QiQPoHAJVUxSdVSj8HK98YPZBD4qdMcyyFnTg1",
  "key7": "5ZED8HqtE74WRBHwgkpopudcLQjiaLkNYPzjwR1vWbYMdh4fUGHEiYPxreHMLtFrrRpVbQVGLp7opK8jkVaNb6bx",
  "key8": "3DhT1toSxyxfVwB7E3SgcHCLmTPk4B21Ft9Tv558MDmU9WB8E9WZz2Woq6Bt3qYrvaXVpCJD329jfsxQy3eSkRNV",
  "key9": "3BvQZqhBsjicia2nhFqnPwDKJneKbA5xad3HCtQZJafE8xCF9acbfBdWWoqbSNgLKU13AgYt8y3Qk9bEy1uUaM6J",
  "key10": "pp3hC9Zrz97rQf3HWK8rssM1M1CDNMSEMhz5xKuCE7YrxfGVozAoHvNJ22WJxKPWLubsUmGnuGtFX2UiLUGiNBG",
  "key11": "2bdPK5iHcc7jxmzWzbJ3CtN6uLndXSEYHUpHkmmTpKFpewaPaTdg29Czuqg3jBe69R5jMJ6KvAS14efUEN8wRWFF",
  "key12": "89ErJCHdS3xtHz1MeZiNkXYUWP4dZ7NLARtBtQ723wWfrym11cxsBCa6r3NQnVSrGwNCPWqs3pAk5YqHwowXZ1f",
  "key13": "3VqdWv5pSrPfYuMDyd64TzZPvgJBbo4cXSfAJfQGQu3h4TeDCS2oAwDejncJ3JbHPM8YbD2Zrgp7HYmP9Yoy6SpP",
  "key14": "4HtP9yEzBBryTc8qozMQNnfbuVwXGiz7GQjbL4VSXBrx9SrvvSitKqdor3QTpnSRWS8e3QkcALMrL1NCR8rrzD1z",
  "key15": "25EohZkoWhbYEtYBS4YMSvKs2upSfN2EMqGMuWmj1p4gt5YiwUB2qqbipqxTE9HuDbrZzMnqQ7ZW8THbjU2Vbvxs",
  "key16": "5SYSNvSGauJvTGTSKN7Qwsy1GLdwboYBUFcRtXGgvnXFCMXzrKh2SKBvqVqWBjFVjnbbyJUE86A2EvQExHQ319F",
  "key17": "yqYg81Df2YFzYev9MMEkcUssbpwtvjuccG3VY4exTocx32ieLUrN1YP9mqyRxW8PWe27iayxQgsh1eJYxQidqLW",
  "key18": "264H9WkT24dpD18r1iYXhnKt5hLJ87aZwp7HpHbdNpPvFQXc6wxEuQfdyyUREFou6JM6rYJfARhEAZtKuZ1aAtqk",
  "key19": "3gg57YGnYTEdL9vRNyqmYg9Un21AJTwXQJ6C1yjrF3C5XpNt7H22fsMRJAQUK3v9YjVi6MMntTH8hr1d9Do6LCrB",
  "key20": "3M79FzRbprLuyg9ymVerkaDLzj5cDGDrY4V5KdKnms5HHYTHJJr4uYLbPUgjSG6DKk3s3YrF8FqdMxRxwXACHd6g",
  "key21": "22pAW6G59yfihDA3xoPvDcRVs4za216PxRi4aRBe36JapTTZuLYzWTUpbJA2HGbd5SXcbWb9wUVh12TEq9nhvWxF",
  "key22": "44H9VXrK9k1YxDA7YycmTuHbx1aHqoPfBMAoijj2vz6e9h8ExWo5dz4tFv5nVMezzGQugCZQxPAR7a1RmEyHC5WY",
  "key23": "25ajiSobGT2sjt97VA3uQ1VHVAPCUwmy1AMp29tcoNo6KZAgyPBY1VqEbqPEVbyYnESYY3sFiH8A1mngxasGC88E",
  "key24": "2Qq77gG8ffFSJMK15xahQVi2WA6xGyDfqW3jMTEya6YuA4Hn3rfkBcAsPKztsuF3UVpSXHgEMqNP8VuFmBFYpmgK",
  "key25": "2m7YRnPsWNWjtdLBCWiZxzSr54kJ8m8PTkqngjohE6647P1YSBWzVaGUKD17YQAPedKF3qFx66QR26aVMVZS7gH1",
  "key26": "JaSgZRg8DGiX78TvWKBzbHJUFaPzFkqBiCdcscv4RzBtmDdY7gThTDyH2qdcdC4qnSFBwhkqVYiadBhZMLirRmc",
  "key27": "4chQSce3m7ABxycg1CuJr6LbmguN9hU7AQSV3GGECY5xgXWiFCKfxJBihCiLATFJdeh6YqwkLQCDW5Uymm1JfmMJ",
  "key28": "2Ba5NUWoB33C2PdndbsGYnYB7jrGEU4Fc3UApWsvQkRoYxwaZqDSvQmYJTVic8ZdrNjTvzPM2Tgz3SKo5z9grxtq",
  "key29": "2XFV1U9t93AdRmjp8sPvv8QG29FvAhMTZJEvLdTk2TnpQQUqmYPmKp8CyTNcK9weftqkrJLbc6n6VJ13CFfzGKM",
  "key30": "3214eeQEw4pvVFr3UR8aqr6yqTaH3Kv73CkMpgBQ34pMJvKHeyerX747bLf1X5LiKZfMDkEm6j76qGyMdxwn24LP",
  "key31": "4aVkjsAj16GEMrAyT2RG1kqsZBUMmtaiSYLtAGAEnu9hfczhPXdN2LSp3nEBLqFqBP1KXrGfn2ssfiLMrCHUckAQ",
  "key32": "dLfqzV1eCE8Dkhr9TXdVr2K54wVcddsPMCd3vSuGqsedLxeBPhTJj8a4BeEtzwDy2YasAfCvAuNxAvQpCFDmCNK",
  "key33": "2vEedXcX8XfjNBDiQKZ3ht1CGvtasZ2TdAjN5PZ7Vox56C9yAxfkkAGYXxDTUuBtp98igB3eRVEqSfkH1jnubuRf",
  "key34": "3e67Uw2gFFtXrgE4uWg2rhEa4wVUFx5pBc1VcMiYsE4Sx25FD2ehusv98vBpp5N2fbkz1ozqUETTDpJiCkaW7ajR",
  "key35": "3RiZVT23VXMDzv9a1H8ae3wGZpZckirhGVqRtvvxvLeSWuZe7htM8PLXqs6xWc8BXsBHxKoXRNirU17vxoGwMKxt",
  "key36": "3iVQuv2ZbCapSpfpNMLvau8fhkQDZauLVCvYMJf9xjT2Fmv5UQaRLscdNNqCxCwEGM5L5Tw4MhQbHjbCdRAeoXk8",
  "key37": "5rPrBUi1Kk4ASwYh7w7vTVqvMkQpFfHZK9smhKy82JWbu76nr8j2juyxNsLeekYNUmR3oun4VW69LB2Rn7KPRi3C",
  "key38": "4SvKGJQwvJVb6sPS1BRs1hc3LfwSKUCSLLrkKbCFiwAFj3MLZFRYzQQKF6xdPWoWqP5TedMLMtqpCbHh93DQbFSU",
  "key39": "4EhFKS5TSHUBhRv9vSWxjzEZYceBh9Mj9U3DTCy6Bje8UQZFRdA8WtmWpwUKCuB65Zq6AyCb9NRCDkArfJozSyzG",
  "key40": "5UnCe341z4t7nrxvncVWV5FQM8QT1jiHFYr8eKwpFBHAdxVg8odf1A55BskSaKEh7hW2KXT9gfF8s2wpcxKoxxR9",
  "key41": "3H3QQcUeqatt4aKbGVrz8TBvGdgBMqWNx6gFvKEaDW4N7i5MvpnS1hd74yV2vcB4z46tYy4vYRZGMjgXLJHaEsKC"
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
