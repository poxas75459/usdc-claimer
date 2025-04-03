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
    "3RCrzvYg8bPQV8KgcrcPen8v5hTquGb4JN9ZH6P7G1HdmajzZ1LT1XmLPeBX2aWS7xR2msUzTREEv3AFuMZB2w5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYggbSCxDZGgNm1QQWDNeiLRNvuzzW379iuN8Cd6Sk67gk2oXtDhVEP1NBrKngiq6cY36EEdWiAWC7bcAQ3YcDi",
  "key1": "3W4wp2SQ8EyzSFdjJHsqDaw3Qt9D9cYvjSfJZHhGVras3bnZZVhK3gwj6jmGB6KAent7osbAb8agWGrcrEpCEiwB",
  "key2": "4Q5PgobrjjYArC3efSh8JQyJ9n1x9AqSYGbjBA2XuAjNf3wpbB7zATMWbXy6ENUX2p4Webp4CQub1qSn1wkcupA6",
  "key3": "3UkMRqLHh11tvq9oiSUR6Q2gX5UmShYmoD6Jy8EtUEdyeyNyaVW5uioybxqQLGojntDvVNKDAytmu1AA8u1KxSDJ",
  "key4": "5WqXHiKTs8UTMtsVCNDfdevkbuSvCo36vvJQXCn3M6kSUjzXYoU5c8HyEvJRpU1EQkyGSsXghQMtRCD4GTBjUa1X",
  "key5": "24mWcGfJaSw2qfStEZEDDuCaZvUJSgHzj5En2VYJAmni55dYkUNzemLcuN8b2bXAvFWznJ67R2kRaGZNLrj4UwaZ",
  "key6": "uKnLjxZU5PRdtm8uRawkuxWKXfSC2ASt1jDhnH1niQZD8ACdhFS37Lq3zYQdd4k7Upkq88ta1PrTakFRmFX9Wkq",
  "key7": "4YPMEYDpTNcB4HLbPsEn7gnr9zLNJooXmNZkjGHkQgDK1h9HxhycRB5av3VtXiaR7MiaCQAfTt7d4Ft4mVG1Qfqq",
  "key8": "yCY7G6xKv1mVwQPeuvZf8pJ56w8PLEFazmf56q3RnvW9jMSxT71sGFPTRrxYhBPJBMT2wT91zLFvjpE6TR4eHVS",
  "key9": "3oe1ZWDn9HDoUkDARnAQAgiHccSHg9khzDheWpc1R9QbvozeTqAQ1QHQnkAChtqjKNQa24XK85hFXWMwgFy6efsx",
  "key10": "5kWkSXd6fyJW8dsFs2batgxuZgTPjadLxYCtgHfZGDrjDuumqhsYdnRFXLPMtNep9BdQqsFmTLcE2Ee6fozMUj9Y",
  "key11": "4jJyP4G9E9dKyq3RmsD2yVnFg9NoxgyKT4qYsXQq5UQTD4RNqYDChGA6bNT1SVqCDmWQ26cuRC95KvG347aA9LuQ",
  "key12": "5N5TnBm3UySy4jLsn5CQvsQog6Ka1PniNHxdP1CQhPAnU9gMYtBXSsTFYkPPvDLF5on4G5KypgordRM3GDjmJxqr",
  "key13": "4z4UsnB6m4WUjLLKYr44xyGHP18EwDyWgqhe3nivjBajuAf8YHJ3bqytC8cppT3ttAXyJ87ned6m22WqHhVgWEEH",
  "key14": "qXhZWfXBBaREmiXhtUPpyQ15XsaM32SBeeAwPag96owbh7ZXf81dm6TdKNGpe21XyLcs3EsqgYaRu4Py6E9Lv62",
  "key15": "7Th6XrSe1qEjSwaSGZh57R6Br67LMEeMq19h67gVVKYWR26deMCgc98By7Sdii3BJn4ju1cetvZUYwxcZ1G9hpC",
  "key16": "3iUr9zqDjCHE29BfaD44DKvtsp52d9fzRqY21A8VFtC6NwjLZBcYwnfLDdgiSkE1dEWreRd3akUdoQUtbDjLfQAL",
  "key17": "3PNgrg6eXivs1QtDMiHu1VbhakVKKxgo84KPf9do1AW3gfUqvz8oXcsh728DQgVjcDUurdngVqL3mZGaECx9tYBF",
  "key18": "4NPiNhPKhLYvcex8D1zXFHFXAFRhkrMZ4gLsxNp33FGYb4Z89GpaSZdWm8VcD4qkeSYUrPRkXLLwA1XKKBYeoiSo",
  "key19": "659Q1osRmLXKJ5gak9Bo6vc14KtdycXVsxqimTHWawqxenXAL7QuQmZGZzVS8rYEgDeVAue8Y8KKXUctE6dPstek",
  "key20": "33MKhm5dckaukU4rVdo4g2rgciv3icZYKmKHLzi7aBnSjgjh8MzCa14ZQR75weegmB4NEqoYwPuMkqXo9pR6bViQ",
  "key21": "2pdXw3TZFd8PD9FSPXtigHFAGkDD7tUMWjynK8pR3ABujwx7232XUzyppQG9QEqg3UMjSWu96AGQHhVFxiuNgwg4",
  "key22": "2LgAFPode9oEWBQCdPThDN9j28qTxxq1qTmncEn7bampcNywZbmfCWx9C6KD5sx7YKsZqcXYfzx3xyZ8sQs1Cpih",
  "key23": "4TULFU7GNDwS4ftxQ7ngLJ54kjrSPM9xBwp8GoyYPvmq112D47rwF2cz5nqikdyCBwQG4pZKo1nrgtzVJLRyh3NG",
  "key24": "3n1yet4xehcBb1vTdgRHASQp1DitfvpMSawL1SRJGZPBpGR3RqrZ9yZR48KmueiHG5SXMHKhKRndXzxnahDNjkps",
  "key25": "5pg5X8VWRJH8jVJg4WmkhzfpLUFYkoRFSYCFnBdhmBpc1DRzjwMNj3MkhpWufHjjmoASbFy39BtqZHXf6zz67ANy",
  "key26": "5LurUNXcZkAY3DYZvER6rup7hvq23F4fntbQizZq6SEdpVSqkJmnhq2f2Tebk9yr68aXdTdNSPxu8sMLPKxXP8oR",
  "key27": "476ebeXJ9WHUFE9MtERpBea2DJmenYVpu8KMJSN7yoXXWSetbwZTdWy3sv6DNKpZEeEdeStsyTr4rvn54QLEHgYy",
  "key28": "4ZsE26jqX9QGVGESjnCoJ8Mw4K999WCbCfQzuKkhGvXKYdQsNaveRcZv8oXyNJAzAG8WGB9cEhaTbBFmNDzx7W7Z",
  "key29": "3TqYiFF1ttLo5LiqFHmJgTxcBAPCuB2RMKR9NXNz1WHTxSeVSDQSpeLewx8YH3spPX1P4FuPN5bSrpEbu97fXnGP",
  "key30": "2kWbrPARDoKggcn5LY5DZBbpiD9z6jaBc9FpKjKJ7mTx4jGimMzWSxGSEV7uunGr3zEpDMMKvu1DS5w4mDm44h4p",
  "key31": "4d3GviPR6etbKqp56M7EA3pRYNj6ssuEYtnXCNVcxQd2Vg6r2EYw7LKXxPStCRpdh5a7ByktXjgeRe5XZ4erQiDv",
  "key32": "2gbtjZ6tdYPXydHTbGr81qYrWqMvKH4jggTbsyAoiyhfVoES7y7QdrQYh26ScK9m9GnjrGCzgMygcN6vHqoHYX6g",
  "key33": "qwv47PLgC813KkwQiusR66SUmQw2knxkRxMaywkQR3MkZa2sJzZ6vvvQgEVLWwQpDtFpMcf7NfNqXrvL88AcgRV",
  "key34": "5F5ZnSCzovvRvkaYiAjwq5n6Nq5hJuzPDqWA59gAbhgk96CqFFrEaTWMnNWYkSNBSZhTRG77PhH7pfuSZjo1Dab5",
  "key35": "2V3sGtJ6ztzceNEfsTakAKa7RyaoVUswvamrK6rSe47GzzxJoLepo1gdkWkXrhRGecwB2Dnwu8XpVuQHxJgGte3Z",
  "key36": "2v91SfQ9VB4JXuqkkmgXn1G3eNvcJYs44K6Z5wsYK5WA7dHPQTF9KBz5UbADW8JTaUDBVp6aC7Sfx6amSgzLYM4S",
  "key37": "5WsRAL35aL7bTEqntiyn56wFYmoP6JqxDKccJtuQSLe2xwyMYMpwhFbwiurFznojZPxVnZL3XrceE8tm6a12LCmx"
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
