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
    "MHs33dDeD29aTrgRPGN67toX1fkygnVTWmCeMp563RkKD2bhUPm5G9ZHaJozFvWPHPGjTPERLngUUTJnAsFDb4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ec9MMV2ZbnEbWMRUsusL6stbokjbCg63pdWrcs8GSF9RGtxsGBESHQdVKzmZCz7RHRopUCFEZ1G6KiNUhPE2KEw",
  "key1": "45XyJawQYRkgzXpyKaGN5CZ4yACSRC9ZcKHESicAzF5omKFHdnbeaRMDPK6Z2FQAhfwz5KGDarxvkTqwwMmVZYke",
  "key2": "cdrLy1nN7CjiPFTKXCagq1myjEsaY9znNKwdQKBqMJUBrCs5svsE8b1vY8eVv5GcEHtvbrZS7g4ne1GjFsw2auD",
  "key3": "41siVyUkW4RYuNZYGamnbAA1d8ii4GoSNLB3sfrC3NP1Zk85z8J3KfN1k75pZx3xQqxVSw9xt44BJMJNnDGSnPMh",
  "key4": "32FCRNdGRsfr7142rzdZ1rxw8obfszZAbcn7EjPTviLvqteMAp7yGEeLkaskyxb3HXWGkbgtnuNeifVsJMidYkjm",
  "key5": "4jM9LjHiipnDDLr48tVPXGGgar7TcbbbE7J1vtAvTm58GN8M7eiAE6VAF9iTMaPYpKBkM8gcP7MNZgDeM1Mys9V1",
  "key6": "5ggoLmSLWPqYJomN8mC8fmaqXivsp7pDfSTvDvQ6M2cLL3BjtWTeWLdB8K95HWfWFT8JLPrjwBkZzzejAghhz7Gm",
  "key7": "5NaWr8VA9FLRQW4WY5TaUCqAgd8DZZYUNZEVvd9QQ6rswsuayVRakwUmFypu4shBi4sZPZLLQQQVg8UdfhXz8DCq",
  "key8": "3N2eFKCiPS25Vcvg5LGr9HFQMhDQc2tGd3zGkVHXzSxvziB1xniUkRM8YuxXDGLer7dAh2jBWUVWi1enUairQSWD",
  "key9": "4fKDy6tdxFEjsL6aJbhCF35RXQ51WfMW2qMjemBbYfkAyiaKdERis64oQEVVcRMTjDeeKpSRRU2xDK6dfocQbZxv",
  "key10": "5NYFTmyQvkdPrFyf1qMY9zCG4mXXgzzFk2h3o5JsxP6oKQAA6J4rd5nJanUVQh3WMogpAXXiVdgAsQsjnHnVQcCr",
  "key11": "3bA1WrPrwbJFJjWZyATkpa26QczExgkwACoSs8SoG7XAM36HKBtuNSifrbuitqhZYj2NaFBM3PTgaiPpJe9VcPP2",
  "key12": "3YXNC87akksHQVsmqFwJDm5aF66pQ4rK4xZSBAeJEBADQtgWtGVxdur1zyw9LUrUQndyWx9DEpQSv7ArmX4vLe1W",
  "key13": "5Y1rpe5b8vLsT18AGr1ULZa5BoUjq9U3jxD7ZVgZ14k6gKEtQjaQvMhqQ1U4WT16dNPrNJ93Gi2eRVq6rtLX8CJy",
  "key14": "5Z3AoEuL4jeT8UCAVipfDSQAUR5zQMin4UccnJhwyeYxe9YVGacRUrWLUNjsZkaGaYM2zBiU4dy2BMc1hoYrzHEd",
  "key15": "4EcbZTfpo9jPpjbeyQoiEkAAyqugnefR4BVNjxwGA4452jfEad384JSDByPdw8T3JBMbD2fjHqbjbWhAsVUeo8MM",
  "key16": "3H3moxMeGq2o7MuhqYwKmuv2mxaKcY7LFUuWXLSThdRt5VT3sHZTquYUMZQHimYfyCm29vVGxEYDtdo8dkBVtX9W",
  "key17": "52NhJdhs6VbqjR643jdkjcHAuw669qDuVJQucgsdnEgDYEQxcPUv4dMXioTE9BnzKn3nWw9B82sU7QvtkZPc2mWX",
  "key18": "5LiPUDL7qSTiAKXsc5Ct6XGjR2tDGnRoMA1vZJ64AsefXQ1tUubwycidQN9fNLrMW4ym1s1D28ig5pchidE6TeuB",
  "key19": "S7NjGMgnWRVj5SLQW5RGEdJPs2KkwBtPD3t6oiKFMJ7kBZJ6zTFHZtEtm5oUpovWJKLdcpyRs1ViAKV4zHeSHKG",
  "key20": "2oZrmhCT5pyjZsnqZzTiXEHv5Jqj5shvTB64aYS5rY1msX9BGTkFEPquqBGiad6Cxyw9YhzG1LqMquor352REo6n",
  "key21": "3H2Nq2DhomtPfNokkcbTZfZzHhWzA7e2TJHn2sjaRM1KMZPdktn1qAQFTRaUZyo2M5KvnwcD57QDRYCz7Yztmj1t",
  "key22": "3FtoUaesTNAH1ydwBiXQURxexrJjWJYKnuwYadKRLmt52ENSnNiQEf9JaNvNrA6WF7xbFxS76m8vmN6uPdvwpMpj",
  "key23": "4ng3qq1oNJxK3nDMzjDovVAXAJtGmGehYxHmpr3M7KLwz8mAiHX3EcY2W16Tiu9B7cTH3T2akZ61AQZ1TkGm23aY",
  "key24": "3X8LKAsJBSaJS25SP9qxSm8pERTpRkA36kncE1XnX97bbcc3qaqDgvEmEW7o4cefa8oKoJfe3S7twUpm8B3Y2D1S",
  "key25": "3sgRYuT6MYmkXXjTWcc6oBnHGQbNQco5vogEPakhn83sof3in4xD6gyJfYuitUd9ZLdY4yRvqyxjq4MGe4E8XnzS",
  "key26": "4F2pfeDZuc9RdmyYjX1CrMaQVsnjtwhtDRBFkvafyAx4pSAeurdtsYYL2X4EgJcXa3bBaeEMgbjDLiVWwVnPMcg2",
  "key27": "5Neax8xuBEUbgDAEiotbteXh1Ha1TYGo1x94UjJfXj32tnpze7Rm3h7gg9T855sjKLrbzqQUvLiBFB5qakfT7rwN",
  "key28": "2hWwz1cjPXRSSawis4a3tU4LN2VsTXm9FHwLEWVoYVibAnDzFPGpo9n1CetXV9hHyw5EXu6HZnnpEYJfgRXwMX35",
  "key29": "3v6T7qJD2ndhoQDszXSvEsinLtSj7f6JY35dckxbKSzwpJr9QyQ3LFy4HLPdWBxS79SN85RUJvSmedeaQTAMewB7",
  "key30": "2e8iE7RKNGbcSTkRcGVFnPR7PpGDESA3TPFpnjy6z3CZJHvzpLgFShsqGUmHwVCW2sBxqBNsaaPVbptySN1LgQC7",
  "key31": "5uTDJptcraqcC6RGRSLvbxHfPyZus6UgziBPhmsrW3d84Mz8RyyHfu1Dt8TzQbSKr8PDfEuVMsoFny7eXEoHsgX1",
  "key32": "5grF6FECR9pJAGq8RpcjAYcShPvnhUWrmxyNjzw8f41wAn6SVKwzdpwhYX5i8MQ5XAtDceTrysZcMVjQ7H3PSme7",
  "key33": "5JRXxvRhkNHDJrZn1ZmPRj3jmtt4VAtp58o7PyyVdZGTnkRcuvHRGUnmK3ZvKmTTbCZVx1U2Mccqk9YEZvHreJmq"
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
