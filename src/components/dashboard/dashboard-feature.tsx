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
    "4iwbQNUSJvZE6K3n3F6f9aDyzvydFrpbCLccxurzRsjTMnudggTzpLVH99ebKrDv4m8xPdeT2h5AJvQbrNuoWdju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5muEL9HZqQ7Ua52uiZSzDrfoXWz5rJt3zB1CqDHUamPgds6SxFeXCoTH4TmiNCTWQGLubbyAvrHQaU6cor47PUkC",
  "key1": "9kEX8YKDMDvy87MXP5McNMaxpSMzftUB4xZWmoPBWDKNcWUjE2J8Cc6sAk24xcmyfbNR7MyKen6HcWBuP9AdoFC",
  "key2": "3HWz945JgB7JUDU8Ajv7KDCccepC3jjoS9K599YYRRdfa5pnpdDnsVwiUYH1GA8dheeVhB7CJezpxGAZ2ntkThvR",
  "key3": "27CojRnAybnsLxmYpxf8JN51jFjJzjyXLBEwZckwryL4wDccnrN42AGtB2GLCH4nzGpsUhsaqH4qCvT36nsJ1baJ",
  "key4": "29J8JfqHFgCcdWYuVnTSYqEaAJ8jtjc2oY8SSLkJXB6hZ85VnkF6wJt9eWJws2qAgHYuRU7499gW2UwsiMwEDf2V",
  "key5": "57gadGtEJE13mnpRMdGsSaBw4CecBvZLv5WGbKf8JXQvXHZ8kV2zLcgexzNsVdmsoaktr9MKXZyZGhm5ZCWubQbN",
  "key6": "2z9BUJ8cYtc6ShYYPa58JZxR4xZk9o6sBBy8XN6gYthcXTBRsB5SXqTw2uzF4KqjDgtmaGrmCKrMfifRazXhurBR",
  "key7": "4iZf8jwEECoT6mMDsUmLUXy1VtvpBeD5rsVVFHjkYFo7XB83KdNiKdS2jqBrQXybNFCqptVv7SzSncQWeT2dePKZ",
  "key8": "3HjvzFMKZSgaMcWm7wbkcVQJdkxjmf7LVRu78qk8P27RMfCifALeGFdWM9aZN7ynZ834ABsWcAmFwzyvkrcWMSVs",
  "key9": "4AkUTjUCe7bxjDZ1qSTaSujoh1dabrzGDJ5oPNxnXMyDbbbYMwKBBYcBw9SKuCzEspxD9SZ62f1Hu1XYBWnPXEtj",
  "key10": "ditYbtGh8LNc7WFE3aKM68MVX5fzvGW9mq5RJrMqEjydMPV77GW8DRwpfEku1rJZRMCr2NRyiVtpri4eUrfNybJ",
  "key11": "j33Rc3deqmxK37tzh6dfkxtxYQEXEETmhw2nTH2Hr7C5VexxrdvEijzyvawY7CHy5wUaCuaCZ5t4iSG26LYLSgz",
  "key12": "TVBjF4K5Su8njs2tQZsJcA586zpyTGzfGsTpmLEak8cmWzJU92DNK6aKLfgR2jBwh1PVBSNpghpGZB6xKFb44SC",
  "key13": "5DkcQuHitLHHKgT586vfLL7gbVBgT8yUrdHeMxbDYBGpLKAM1VNaG8VA8dSKBhpw9jYQKLF9zW8wayW3KBVGLtJG",
  "key14": "5ezj1rqPDJuPxVSt6zaKGvMpdS2RWBdKPJtjyBb6R9MJJG6cZCs4DTawtPmjMJgSH76y8wu7SoP7JQwQdzVYVGdo",
  "key15": "2wkCUfRjs3h24DtunwvbwxtDjpGy32NEy5qmYvxGc2weTgu7HEgYkyKBK2WZPsXdTSMHkb7JmCP91cGT1C4DxrRB",
  "key16": "62dKRqECPdaBaMM1eeRjgRoL1NNoraEnnFt8sz4PcHwuzqmAHNZwsS9ui2TafAg1oiwqAZqXwgx95CMexoSAqagM",
  "key17": "4umHjf2LohgbffFt7pvy79ggaJMREKk6ytcG1p47sizv54k8FLNy2c9hUNmCL8RXSZtvkNLf2wuN1FFFDvv5BcgW",
  "key18": "4Provf23gk7ivE6JYca4aRK9BM3bjfKg1AyYgPY5Gfk5EWc7GbdBiFGTiRiyVuRwZ8rxgYobWnXKmWvhiy2meXhX",
  "key19": "2btrNdsqU6dVfLo8oDpXGyEei5KLc1v28BG8ewwR8bf4zf6hvCY9R3v8KGzniYTGo84kW5ZcAGVZv9drfisztDM7",
  "key20": "56CUXTq2yCtMxjr81fiQD5mYvuuR3jxq2zr3p2roqaAoaQeHn4LMos9eByT7LAofSgWbhJrR6sViZM6z61fB6KMJ",
  "key21": "5TB49gedMXRwdd4KkZo8BbLt5NuDiZvQLR7xHsjw91mPy6BeMCif6ihAnX2FeD4sFasQ5GAYcyZCPqceTCbVLjcq",
  "key22": "HvjVJLRnZAU15K3XjRfyhd7mKDyWFhL1GhB7WRkUwubhqB3XJ1raUBRYkcUuy1rPmQnJgdosw4ATXkzNCx3eUQW",
  "key23": "2rj5bk9sqqmpXCs4N5V3Dybs1ma2JNnJCaMYaGhcDQ9hpmGiWY5L9HrCZ3BqfHB8gT16ujMD35rQXVgVURQdJZKA",
  "key24": "5iC5qqkWWKoZyYHz4ZbAwYvKPz7EhUGrX3qU4VHwEKEdXg8qSdF6hm6NR8HUfHR4c7F7S2BTHRd7Pf9WQpvSUCFv",
  "key25": "38yc5pZh7v3DeofpDQELjy1awd2L5SsqgdiraaGbMSbKJ5nx59ya3QQbEq84DZLmU74DCRkxXT57eL3EoywrihVT",
  "key26": "3f132uD3S6UL3xWbLQTENfrkK5Xuhex4zWKsbkTNy31ibim2C8kbdHGUtDVucRti9iYj94yhKA4gH1notaWpVwXa",
  "key27": "4RU2KrCp4cPfdgsSqN8khk3HYiXzAFzUmCNo7WDMJdJguiZh3niJT22LiY6q2BjweeVAeCeC4Z7wcyeF7agq8Got",
  "key28": "4m8Tbba4khPoteNs6ZB4Maj8cdxZfj6tNeEfkVAFmmppZX7pdHnVS6kfKeJGV4ZojjqYAFuf9jPorkq4SwKynzp5",
  "key29": "9jHPXhTikc8EPNLhJ5ajJr939uQK92tLtRvagojY7BFpF9uuBXfAP1xxrVZsCz6Y1Rt5SkTWgv9K79VUXpSEs8N",
  "key30": "56zv31oN2QiWVnW8bsezqH24iMMBLqHXXxYWoThKx6jZciAPR6gX97T4TQQRUM5vwdTUdCfxFag1SySAz6c2V5ew",
  "key31": "V9y9PYrtFxMCeriUnkAA245b88t5YG4S2Sm4BMV53YJdoN37d1z9rxqtX9zK2xDSycCCgHz3cq5CShH8xQtvrZW",
  "key32": "4h6vbyEC7Djg6rR2qMyPJYvm7SAvKCS5QMdgXRCh4MrX8Lz3VdSkvKb9iR7SY1EePKM6VGQWPzKShnL1L38DtJuS",
  "key33": "3fmd6myXpVq7GUvLbkA3TccEZoQLWpGX9U74krUvRHN1mTmkKpmYr7KpbiAvKNsnTTdg2oh19HH5PMQH5ACRXET1"
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
