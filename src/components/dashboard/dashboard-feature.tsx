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
    "5MbhU3ZmTPCQMLaTb2FAU4BSeZ9pm8SGmyxY32nXc7ZvHDLiWzTJSTiq4hN8C8Ei8zGVZyQTb4PqQ7akUxp5eQ4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62QDjJL6vq178zqJLwu71zsJ81LnncYnfBfJjdBJDcnG441KHycbrFGhd2BXLirdC25KZJ72m3v5e9HTePiu2LFR",
  "key1": "3UGG2wBNHL6iTdXC2Xdf95SUJjZkSHArbep2GzEkrbbsF33TyhcophZiT7VTMu5WdKzZSh87FHTPmz9vwxCttgJs",
  "key2": "3iYE4kWwroh846dKmgFqq8UH8422YJcvVY6Cwr6XAJbVUTTsfdQtdADWizkco4SaPhnh8sBgoC7zhg4N96v322e1",
  "key3": "6CBQEYckyY3nye4sQQWEzbhHj95sKu1epPCnacdDMHGCjhexEmHcLBQ8kBt9st2oZgk3gLA6QfzDYSFjcRwE7dx",
  "key4": "3TaTUtm853KrLpy4H16iXv6kaszjCFBD2hSrstee4UJWSki3vc6hvF8Udd8oxe6aPxKrmAiQ97W9NLsVwZnEvYP",
  "key5": "5EYiXRK52v8HbQi4LYyC8dYu4EvMQtSH8NUH4NFBzMrrSb8WS1hSCXSxEepzAmKSw9utz4F9hQkqWecGnxjA5Fyp",
  "key6": "3cn2P6zGqfPdQZKQhEBT8rJeT7a3BNggVENHxpe8jD8Dfc8v66NG2nCQxhBbwRFTMDsT4iZ4MqZXKEQNfqtCW8k6",
  "key7": "5vLypqwsCzwqiXzLpQ73J2gZFuHqQL3mSrfVunPogrHdgtgiVxwUc1gXgA8ZuVwCKZHFiSNkD78RKgpE5caySzTc",
  "key8": "4jsQoCzDb1fNk1YspEtWbfyDqubiqn3FfWASKKBtiRYXYiXW5CBdjSU8GMktgQKAwkWDfeKcGF7k8T8nwdxoBbcu",
  "key9": "55ovq42pff3m5ZskRvU8GxRHzbyFYcWw7an7spsvNSYiWVj9mZoztp95929TSgSkGc5vYrW4Vs9iDbPcsPXVLji2",
  "key10": "377m15kX6mrFc53gdEanNZHKLzUTXunVyzxFyMpHcQECCieBUPq9EXw9q2T1t7PQxdGLSpMBKmzshu3BCdmgpiHu",
  "key11": "3PrYWuJ9Ff1xgjw7s8Z2Ab51cqDWaYRzxcRJ2mv55FyRZXjFrML7Hp4TKkfQmH85c3qThYDnWL4X1M36DRdM9ace",
  "key12": "2639iXShK7rqjeWfQRxJVqxp8LxeJMpfMXNmJvpXb6njz5L7MVyov3SogfnPrb3W7uYNdNQRetSkF47hmtskn5eV",
  "key13": "mENQ2QnUQSfznxHDxdAB3QyuSsWSwGLBcjNhPmtccrT9C2KQ7dfbhAgahMNnCEuk46QQtaxmJ4kk6g3UFm7MNiB",
  "key14": "4sYVT1aLEJ7zP17GZrqyt2w7h55wQygcbZqZunJAyZ3kyRmYS4vy16ovNgkB48fCucCCUand2E6pHwSfvL6hLM9J",
  "key15": "43TNpFEcGwMkvTfZe2pk2dYNMJJjSiRdgwqa8D8FYbL8K7HViW7KpPnbVZkWsSxLUpY8qiTfeYcjvp7FAfanwSZE",
  "key16": "5m1Tv9qnp7N5MzheHZSXmYiPnqz4RJg639jsMoiwoTf1drtBzhbpbHLhKzExzae5BDZxaMfv3YsQqa9DBoYAv7eZ",
  "key17": "2oEPK17Sz4YoH1b5oAMoYkuBTJnu1ZL74L2SBhbA5g41ToGSgCKNWx41HYiKv67V6yB5ZLztpQCNg92aTPd2Wne6",
  "key18": "4tKdjDgThXtaQGuqxY1Q4CGcRWYg1AYX9pSjtF5ca8FbWLkt8TpALdohwzmy7gTRCgEYbWGtBkpE3ftoonEU9vh4",
  "key19": "smtjPSw2MYp4xT7CYnsmFnbR3zESAdwadhNnEN6r35U4qk9jvDng9Dg1jdYKgTNjt3c8S9bfjdJoedRU3S2N8db",
  "key20": "33jKLwwe1vUo8WbWXnXszjSPfBnXQgrTz9Ey4soiyvCU6YBQM5j4PSAggD14xAD5YwsVNW7GxXyK2TGhPfaVPtN",
  "key21": "3AZ83mAbxSZDVKNUHJnEmueBKMkiaJ7H12LRdJLFTEds5Xapd9w5LCC9YaqA9QSHQuUn5R1pEBQug7yZZeD23fZq",
  "key22": "5WjoNc7gHSyZs2epS4A24jFj4vZJLCc7WFpM5JMESX1dEWboPLKGcVQDT7UY5XtG8QCoe5SBBhM2DrDaXfu8uBDn",
  "key23": "286ePvbcbR4RJbEDmaC54hvLGL4xsLFY98pPCmAAYc8fi8zG9DqJfcb863zH6HMDBmbfKsgpjfzJTH1zAiju5YTn",
  "key24": "4NZRmgmYeYatdc43Jowdx3eYdphq3EhairY9yzji4jLRAhuikY1FykFumMzPPvJRDF9duCM2pNTbr6y9pWeJfdHF",
  "key25": "3p7xrbq1gG5a19y5LZevoxQHKbBr43K315JpFJUNQTp7hKBCabdfUFhWCwigq4JXq9cM9NhsFwvTPApkrAsxt5ys",
  "key26": "2LgsehuMDFEZFpR69QMpKcDmPDUdyjeFhjz2nmLgq1LycfAp84mgQRP3YQqzx56PCKN3DSvUyKpapkZPfh6AYJsZ",
  "key27": "5cnx2tmibn6SGfBFpiWqW2babh941AY7gPkLWGwyTb9EiaF4WEMXUmiH98TuDgNmNjC9XDRqBaXuF728JsyRjVej",
  "key28": "2rkWdBiGKNFJmWJH4mKjSZuohsfUFGL2KHCzTGRmCgE3gTQrxaSTkEjkXgwJRfd1hoBAVWjMbuGsTKGHmssj2Jh9",
  "key29": "5i55b7LGf7oYipEss3wUJYq1WTeyLBKp8VLmJShh9FxP1r6XxW9aEmmnhv3cqintoqmo4SRwHySSNLotAKHafgB7",
  "key30": "5eHjtc2VJ3sRvTsu6HERTBGjfHXG9ZZmNrttdse2mGXKN44omnuhGyeeSgdRPteLdgDMiH9ceJhvhPEJNEcc1kaM",
  "key31": "3EVAwQncFuHJyorXVwaBJDmXEPEneQWUJTjfGATQMsuuSDZSg9NxnDZUB9kc9QtKYHggki9gR5Tnao8Ja9u6nXtM",
  "key32": "3K5hwwWSfRzCWpSTXGTbq8nU2Mp9YZbqFssp4dPQjuC1rvcY1LKGUxRfwEepbnhdvQ2GwgZMj1YeLADVvbrCd5QY",
  "key33": "3z2449sT4oeoyVrWhRXQZnxNmruK1LNFv622ANMBNLdDHXvoqNps8R4ZZR44v2L3tvfYFkAfedJFpP1yubQsDQ45",
  "key34": "4Xxe7ZQVmWdBoHHPN6n5abgcU8t1rGhUR3ZSX6rNBL8P7D7TsG6ep5H6aLf3XgeG5ZuZxA2WNjoLLufLkNTtnq5A"
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
