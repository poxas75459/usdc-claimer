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
    "3yiCPaH3VVj75oJ55x4mCQViXVr5YBHqnqnK3ka8MBy6ELD9z8tMpnYFkreEiwqYAq3RZ92Cvp67KSq9jDrJ8A9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TD4uvey1VBuRLdS6fBGCkRAdKS4KQrW396qd621ELMVgDShDeBvXmnKTxFNSoP1XEn9gSSsDmJZ94qEobjoFGct",
  "key1": "4sQNsB6RBeKxyUCPeEF8PFrdCz4sQG7UBJJ4xtTz53Ybdih9KAUK2miLZHDrknB4Jx1Cjn9wCvNjVBH2Z4yUXp3D",
  "key2": "3FZU76NvPB8bZ9C26PxRUG4HY9gx2cJ96YkkC6nCQFUkNC8HJokMwG6d6Czc7SANP13F493D5Yi6qBipDwBqpHYb",
  "key3": "5e8wJ6qrwWAmXoYNTjVUzpzZ9KRu8c97Ltpr9vkE3feN5wGYjuUxmKPDSsV2juwM11gYhiGtEU3uZx8eXRLzj721",
  "key4": "3SFXrcEkVyz6LDTqbtnkfAihhrgSHEG35GW6n1VSnJ7Hww35KH8ts58GGQ6tFkFHANLwGqCSAEEsMmbuC6M4hqaB",
  "key5": "2fC9EWFc7hTisxam8MEtjfdz5X6b33jTdWJteFYGM34oBkqntPandaumeQPGqtqrHyPn1BTeL9BvZhrdZTTSa1pC",
  "key6": "4JkDrXtjy96oWxN5xoKGhA2PzDEmzg9HPUR9f1uapTQiLHpVY4bUVdasxfPKqVVkrc5xfJz7pSJwrL6ZMbVXGR1W",
  "key7": "3wXW32RDqC7cVGTeREcXu4m3fzHV1C7iBvYv4ijJbgemFoXwP2HoWzJ2su53jSeJy1hwhLgKQXCVn5N6FHBnkTa3",
  "key8": "43izDxXmijPuF7EuQt4gwY3bjov81k2gTiXsEZD3Dh7GM9ZR4ifg6i9D9brkJ3tpHeYdzqSAzJXWUuUKPu28j8sV",
  "key9": "5sgCEkPFgZdQRjiY6bELURh3EK8LdC8iqGtJMkQFD7UFCE6TsVwsMYNuDgAozbRs4sWATtiNswb46Vufsz4iEuep",
  "key10": "4Y9AL7PpLnWqjZK7dSgVU6DPZDy4d2ZzGFnhEG8UXLhCKNxMq6wBZ9ytoLeqYg4uvsjowXJED6r2rsntrxoNNGb9",
  "key11": "5GBx3RvDNQv5rcN4YEmYjEp9jgZWpJidTErBV8ymYHGEpa7W1umcjjbHMx5b1WxBK7GUAvRmJVTP5Fe3B1GqABCp",
  "key12": "5DyLAYHzNLrioroqynm9yk4BvCTyiLp7JjpfEqdSTYxAUTbvWeVk2cFfLLdCdQ4X9SCYUfv7naJfThSpKzETMJAo",
  "key13": "2uEG5Ms1m84RHcdszP2mwZ9STucHeaQUqR1JAUMXiX4cY67gn5ezTs3gWPHsmRJ1Bu9xypT1QKRjLzyA2QKQgbKv",
  "key14": "gKMNxADqhuexXCv1bErxRMM8dZ3mANomSn4inVANpEYB2bJQLw4bqbbahDdmqMDrac65SLetLQpJg2A3T6WGwB1",
  "key15": "3RVZHDvGuCzDfEB4sQmQUyhfzufw5KXRXtjTit2x4VWiz2MA3WPQXaFs6GKDtcH753a3y7jQD3n5ytfhYWfSybnB",
  "key16": "5Yh7fwfzo2b1LL1qPwULNthZwLFFzcoz1jz4Hd3sQcP95UWDbUNooK5GmyrAp2WfpjhKoGquNu7ndPHmvmru1GTN",
  "key17": "2kXcf1wWgWiakATyTRpkJjZsGcutACEQpBUhd7Ap7Xm2tniyyVFCusDwFAZTWaWXNxrcSkVWGoEJQVrTn8XS6Nvf",
  "key18": "21LcqPMwAQgM1pqjKEmJcPqRgc8UoqnRJF2pzvSnf2G7PkG8WMph3DHkbxfWFAWSnA2PziU9ZscpXCoDEsUdetyW",
  "key19": "3JQDSeh2zu75saMMvXfsVb4iE9hB79XN1teVMZMyV2cxEXm8R2EuEQxKxyVHrjtAEi71frnCmpSJ6bkA47Wcsgib",
  "key20": "2CoLA2cVwu1zjwdFZTfL1LREYbEkCJPgKjVyTXMfHSfkPD6ieVYLbr2TCNjKuB6sZDfr6SzssKJx7hvakh76ipqH",
  "key21": "4Z99KjXHgG96JKjax1U6pmxkoLYCajswk5G7L6fVEzv9tW8vEJYeX23z1AqcaPCJYE3Ue6Sd8ezB556GZvna8YyB",
  "key22": "672RTM9H34DiHDd35KVpdfBbb2tn4uZ1GpJHRjAUirJ1C2vgDt6DBejdkDEPd12BjgFoPj5oykzYaAjg6hdQ5weF",
  "key23": "2ikboSuovNo9MMaFZDw9rWkYkfMWVwJwoMkk4secsqWaZZEFkGTe7eHzh9MMNqhk65xv24b1w7fUqie8QcxW45bR",
  "key24": "3BDZj2ANF6BwrCrZ31pFmfznfzG1qAXw82csLg27vazFWumLa5Y34ApGCJob8qyw9fmvVfKdp5D4FzrBeQxShaiM",
  "key25": "4rqXFr75nY7bAVqUSu2YPVEZCbEDTVa34ottGdeSpDhHReBa54ZDRHvxcJmKxMyq15cHUciNRbamtHgWdUQcVo7j",
  "key26": "3kVQU3CtDPp7FvJq96JgCEm2u8qzVgaF29ZtcJZ3B4dm8vKvAjEa19drYEfPbaDhfLfoHVADWf3JZ6FgEKkjqxRv",
  "key27": "3YNsiAKgePnXE6Jk8udyE86WxjvtZ9icxdV34CM7Ek926VF5vUA2Nb3HjA9zFGsN5wtbNjzXyMSAd6QVp2KQ8D43",
  "key28": "487uZpA1jYBsLWkKVA2yxpmMWPgBhiiyuo7EntkzXXRXkWqz64TzM2CbKiftfykzvya8ZhcZMUpvdnc6mesmxfGq",
  "key29": "4qWA9oRTb8gVkHjKciMXr3TEm54XqRTGnqrxav4Ji5jUEUtJUQgquyLZySQkHBKzT8jJVQ3gnGKnQH5bXMq3862n",
  "key30": "51ZVnVpC8r8ZdTnqEDdqti71oK53DdycsGXz8JNQPLoWQLVBB2NhUxodbvxNX3nJwhbHcV9h41f63NPFGRnG27bC",
  "key31": "4NRrBV62rNwf3xQpy3goo2rsue6a8FKB6QzKSKf7sXJdwteodL9Cmp9i69Sz6edFe1GzMd9FZpjhNSqQSVkB23eY"
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
