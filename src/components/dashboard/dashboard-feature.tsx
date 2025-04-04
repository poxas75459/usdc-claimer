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
    "5g3b4TCJy5DWNWc6vMndBCbZkKJouaA5madwDmkjzyAwaNU7PYZ4xeVxgMkjs7Qp4XquZEmTEAY4QuropBBThAcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RzRMRynHBJDTwJnfkoGoQp2J64eW1zK1WHKRRHW3B9ZnXgmkwmP67b6QdVppn2b2fLLAYkFRvwF3ydBgaJ9pXZ4",
  "key1": "57yHw6ULfjzRCa5igqDmHku3tPGKKEN4wKkMFobfDF1ctBx4ynVSfuKDwCmKVSmKTYy1YPWvo1rHgwyqkct1WSq9",
  "key2": "3oKLxMUyiuMTce9pqn7FshJirVDcG13nEBthqJj3EBcoy4AdVac7dycYExRZkadyvhyFMBg1SZF32xwqp7pLPpbp",
  "key3": "2oSXL2zQ8wAsSFk87nPHnbyE1kNoZWeiaPmJDmav9uSm1MHHF2FSPhMRZYnWijJVyNFaFPHmGzVhkzpSZfjpspVa",
  "key4": "2HafmY1ASKdCgpVZ3Jze9XpVEqS4LF9haLzc5XKQFDHBVJWSiikTDpTSAaFnew6YLZhnk8h6ypZkSKFqDteLosfa",
  "key5": "4qWjC4tN7f5mJoVxkXJHcndRLkx3XDKAgL2JLac3GiqeywxYa5SSBSLQKSKKYKNAfxbzbriJbJSUoBzhtFRme1EZ",
  "key6": "5YgAnVaPBELXJ7gYTxcDaQNJq5Me8MKQ5k6Ac4DMqjWJ8XyMAPkP435BPLKFq6ZX3YdPkKx8HT6ojcVJi76o7sLA",
  "key7": "4fYoBT8XvWiKfPsTDU2JQgs2pAWMpmSMtbAarEzvs2AtyXS6ytK6KZMW8sL5hwMYs4rsX73TVXJUPCV4AcSjXzh7",
  "key8": "oouyH2DHugLdxgHvjsJS8HmXn9ooohaUxKkXTwB1LQA3s5kVuo9LdKCuiVktJ5WeE8yaYmcVSM7tvM95Lqz2uqn",
  "key9": "2qCb9b3f9FBPh11jMQ2xEKZQmuNEGpKGaML56gMjU1Kt7UyywqmN9aEjc4Th7eMsuRUxUQqRFdMzFmosSWucfkCX",
  "key10": "4HnWZa4rughktQ61dBKhMPd3j4qv87QzDYsu5BosoEa8cVkMbGoqA42d8acivg3ttuQEQBR8X7rprz2LYHigJfm9",
  "key11": "5DJtC5Xsad4KfzQwp32VDkTysnEChhYJsE6SJHdGdLcXCNjtouRJ3R1v9Xu5GavD2VgJ69zWvQif87tZ89Rmmp3N",
  "key12": "4oU8xfE3nS3iTDyJ2rBudY6vdvxufXoQsLtanvKvYc1KK6mtgnUp9CcjhVqtNzq1AN13WpdbtzcVUFbxGLajpK87",
  "key13": "4kY4oqqG6tUhLkhm5yyB8NZ7Td5CJNVsK55UHXyBpGthH9LJLVdHzJyoAiAePLhLPHuziU5VSptJmzxAQ5QxL2Ed",
  "key14": "51EwnV4VFeKkBQHH51HuVGh7JnMqkjrCrC4hkMAP1z6uCzjeBoeaeNwd9zdxVq5XtyN1KFw2YtHfS8PErfMMwHx6",
  "key15": "3hg5yN7dzNfDtcuLWaQQYXkkBuAd1m5paFT8CxdpoHw11PkyERXjDrJnmVX5WDb25h6UsCkiT2SZvpTgLBSekB8M",
  "key16": "4eJWitcHhuKVktrVCoUPb78xYxdZL3YfgueGD75d8ndcSy5cPZMjc4qLjqkCYv3xy2ddvzpn7nDgDHe4MTZETW3q",
  "key17": "3f75ha9uVk6TswNL9NG542gEj5cuGBr5h5XYqaaCkqMq6ukVhubZJxoB8RnPYxDRzoCF5RVt7XGfFSvvDtj5oUo5",
  "key18": "29X5vWHdfxvjcp3Y3aim51QFSus4Etx7nrHA3h4FFQ1rq6uiT3HEQg3VWZnUAmUUtQkmCEomeQZssp4m4La4jreV",
  "key19": "5uWb2F1yMahAnCL5HYCG9YYHDiPQLoY16W6mPKMzAECKsNGyyAFRfKgAMizv8nomrsUJpcDVMY3mYBK5W1jSxkhh",
  "key20": "5DEqLZTrZssiNC3Rw8P7scZoHnXHf1bh4pV11Rda4ZLYC6fAUq65aS8Z82YkvBHdynF9cKBKuU5Ae2QBWNzrA5Jf",
  "key21": "2GYK7DmDHCpdp3Xyi2or7eFYAqwFMDbmunUWyVK8HRqGTo9tD1YkCPWX7e7ksL3uBhzm6UDLCGF54o9y22rgH3Pi",
  "key22": "4yqZwLwVHHrYoDYUHQna5ufUszaBuEqAoRGBscQLJamGTqok3mREsfjJgpNQu5zbeK4WYvrAMowfwFommvqKbZMe",
  "key23": "4Lg7DSivrLkiE8u3q8kkiBGHE3JknkJriw55HktuSDaNcPMuUU4Gu3rv1BeNxZd25RV5a6xT7Aup39GQSXuSpxPK",
  "key24": "5SJkF29wGmBE5GG6JNBDyvtESCYyRE8P9wwnJVwQfnh1CyhwvoAwaPEc55yg3qHCNfr3NQZHVQpAiRDTwgBRhxW1",
  "key25": "3Zp6VKEviduCHVwaGEfxoxH9xGoaQywdaarGYPDbD1AmwfaaT2mZgzRMYkX2RsWjEUxiPwH4RJ2c56a31ev95uFw",
  "key26": "2dtezFr2Z9Gs4nfK9yKFxVEfUeWJywuTovZy1qruL696sgvJxFJWnHygm9VBge7zPfoA1DBBnJE9um5F5BhnqzFS",
  "key27": "bJEH5YQLdmFrHiE7BQsmT11qw4EDbjdbMiWJ8XyHL8qGW8qEN2UnxrAm8K8R7fP2a1BZNFAXjoqmcG3jzqZ8hiT",
  "key28": "5zYkPgFvifMCADhBMoVtAeCL1WUeN8FNt1hfkk8BS2CqKUUaB3xqbcR5itJPEN9AEox9wPmgJLCJEwKaNNVQ9maw",
  "key29": "2A8QodDK6gwHqjEYqGaQbDnF6JWtKZKqcxMPgxFp7gfKcmgUTgTWBTw8kmxaLQ6FqSqiQX2BY6GYy92PLYzuuocZ",
  "key30": "4rnVEzBcNcPDpBpQWU11fwn3oDUTibzs1MiZxYsxVphsWcyc1PCHYdg9AAqfoqUqzhRYu3ieuWhxCJcbEhsFHyb6",
  "key31": "2csgTUN7HqAvfJ28rnkFwoNpJpCRZzJg8Prg5QkjKqHE3KFGdWsoHovd7i3T3BPSyRZGWdMSFeLb8kXP9yaHZsoe",
  "key32": "QYNedieXk9XLDP3wXVTUD9EuBKwEGqgJUfNTdsg59EfSghNfnWBd8KPRmvWj2CR5WY9owwznjWcCQCFyrkuLABw",
  "key33": "2UqdcALCiAuiX7aPLE5i4m1Dxjf6wSnwatX97reN6ospHP8ystv39wjomBRdRqZW4USywMDAEkhA2FixTrG4asvn",
  "key34": "2yGJ6RE5evsn7JUXRWwMMVadesrqkKzXkk3AXrbmahtKyf2AudtJEbXMZZ5pyY1WfjrNDXmGap1Kpk1cbaoiZgYT",
  "key35": "dsMKhagojhxRUCuAuUJPdFED7dcaaKKZBQEJRn8o5uKS1AK8qufPVa3CMsZDxEMMRGd89zm1YuWVkirYPZd7YvS",
  "key36": "2sEPWbjuAda4Yu8tiiAL763zT8nQhpAW2mDcefTVLxYQQD77rCzumL4ZC1HwS4WV5JHCA3zRghVU2fguRavHasnR",
  "key37": "fs8zrDjJrNkq6T7MS1S4dSYfeztmUP6KbeCjYjWombM2Ca7XJN2yyZxjLPmf5m67W3EipWLmQxQvGTctvKYptxV",
  "key38": "2aMTJa8B1512aQXY2SH18EVVt1MLy7JCtquJ67Jg8AxZ4KUb5ZuLzi5cnSxaL2vNnRezuxcup8trqcx6UQQM6Dbu",
  "key39": "4CPyZ2WLXYDkhfG1maKPaM55Ewf6UqzRv1onTuFrPfWjrojSgs4JGtdMtBSVpSpDNgTHsam47qPG4a6F4znH6zGp",
  "key40": "34bDhpPimXfj8qFgjA9waC1HSebxkwDwqnsnyn4AuJ83zEQg7G4NPCf7LBLCj34d2cvNUZ5TxieEo7RFoBT3mpZa",
  "key41": "4EtfKeCmddWGywAH8ZbvrHtqpe6iqYsivrW32MGKpaDhQq4UhdJw4TPkmqWLDYiPRcbFuJPZiQuak3R3WRPSdTFa",
  "key42": "S2nhUkaiwKUu3Xv8mPSbD9uN7zPZHaRswKafyzL5viRyi511Zjw7QjhXb8y4WGZQA6XfNP4Jg1dXEGzHsK75twf",
  "key43": "UfrnXrBQxmZpRgMpbavhYm5aBicc6DYffSvgoUK9tjJ8tEkEZ4k4HK396qhCs8CWiitxDx6v6aFXEQiuRJizt9n",
  "key44": "43dYdrQpGY7d6RSiwHDKhWxdMfvb2YwR5kzPkhaxGmryn4x6CJzjJsG2Aa11bWdrcbGwQ5M6BM1VrmMMZ8X9Nojj",
  "key45": "VmuG7QzwM3CfGv4KrumhbZ3khiwqnDCS8vjtbUjqRpP742BurQk8p4cMf6J12YvckN1UKcZhzPF1qTeNFYYP2R2",
  "key46": "5Vmy1ShfTnFTqkmbqvWhYZnEWznF8HZMM1ZMohp6rFJeyYrU9WUxjK5LDw3aakuuJ88itzs86rTCXpeiR1Rf7EDk"
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
