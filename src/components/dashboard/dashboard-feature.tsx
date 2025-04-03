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
    "4s1qtnAYULriW8AjBP1CmjGpSpJCyfF7QUjRGrGr9J6dmCJpdrvvDSFghDswjAXNTkYZU1k43MJGqNJdW9cyYG2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xUeekALL2Z71JSMEDr5d3SU6rMmHgw9CVLEPgQe7tNNKCo6nfTBuPvieS7Seh3VBrz1havDZxkzVvTaaLyjWsfD",
  "key1": "4Bvad9eQ1rx6PVRsuJXvjtuwBb2GtcN24vrh77N2ZfCwzEvvXGSDsNqrDBApM3gAKjzqZBWGD9Q6m2mv7bc9cgoL",
  "key2": "pEfWgihC8K1qZUQUi27DZm7DnU4tHHbfSTsVh1zyM62mBtrE3pYum5eFH7W24xQa6Mc8iC1DjeHbAt3DdPXYdXg",
  "key3": "2JwAZFJw2QCtsXqqEDxKQebaBN68AWxG15kaSr1Z2rHULvwY1YG1GW75m686xxteACdcbHRYmscMnsVFQHPdQbgv",
  "key4": "3iAY9Wcrj6KMMK1VCGu3xfyR7oavBceJsc4Sd9AD7rBTrsfTu36x1FJNNQPjeEap3X2S7nRdAzQquDWhHFwGYByv",
  "key5": "4Q4aZFG47xtWB9M2QcRNQ3ASupUFL7aUd94xx2GhSwiq7NRkyBHfGaDZX4nHtjpa1p3vB4ACuWFvSsWwU2LVvvs",
  "key6": "5PtJzn7VxyGNetCrPN8k6UnHtj5ntKchLkkPt783jZJekRMy5NvZX2BKaX9UY9uoSZx9t4qyn79hb8i4v1vtxwSH",
  "key7": "4wFwexMG1zyQ2g3AJdN6cnG5Z7epSLjDrvuaThmSPYgDsT88dGLgE57b4nARCev2foxNTUNN2XkDD1nVV1J9PB6W",
  "key8": "reJZ6gvMSriBum858r6hgzzfsPJwtWvJMHHai2BAATBaTubmXSvbX93kDy4ztLqu5YaU1bBZt2YAXGS31K8oLcb",
  "key9": "3hSJDu7JsZ1f9qAvLJdcd5y4cwZPfymXeBS7Tn7h54rvCAWnqsWq6i7PEjxXgQfzuPDL9Sh6VH3FZBCCL4aNTsew",
  "key10": "3DdbmZ1kym3eKckPvbeJUuxrrbYY44JMq8Y112Rg2bnHvPsHUVhHS4KZFG6K9yputdTvs9zGzsZfAZxtv2CRo2P1",
  "key11": "3gPhue7SSCte54DoDcTo8X7Fwv1wBoAbHt3DpsaVqF5AyEdTzaBWGedX4HeLhDhauq1BHYaKE9qbG5zVj1WJaHvA",
  "key12": "4Z1zY2aK3LNxXt9o2f9VLH8mdEvkpZ96xyLSSBfBLE9TSbPjncZCKpASok9eAzm5i3NStVF2a3bwFwswccSyVRL3",
  "key13": "2YuUSoGedwtSBDjEPqNk2of1VRR6wZksf8yA1mcKTNGy4WPJuK2oMy3gmoyJthHSXE6uwdh5rAYFR98bf8LrerT5",
  "key14": "5mJJw8Fvnr5kCma6WqFjXSqXCucb2GhdT6T7XhSSoWgJB1xTRsKf4eHAMeuTfEY5FQCis5Wzr3KxMAzxnriC9pcV",
  "key15": "xdHQaDMYKwQvaGkd3keSg7Fz8Y6AJPziSeomZVRCZ1PXdXKb5YUKS1391j19uuGcBw2WiKhb1MVpdFvKUmrS7HT",
  "key16": "5efzC5qiyYHWFhzQDXoMr5xoeY8HHNCFYPFodk5ykwnv5TW4Ee6HTW56xDjU7vAHGoekNhn1AvyfujazpWvL4YNf",
  "key17": "3ZeNRVjppSdcASW3AjxRs8ES3cEj4gcyhYHyDaQh83ZcdX9yRW8Z7vRaky1aQyZzymzfa2RuKgwWbSLbZmMhFjFW",
  "key18": "4cL2bpJ8z5efPj53Da4Fyh7pBoWfaY3ijp6ThqpCysmjcSxkxtdyhCFV4d61SSfDxH6cxC3r8khLaHvEyLa75RBe",
  "key19": "dvsSUXZpKGppXgPKvF7UCV9h1HmVk9vMwrt1J7dtjH7e1cnAQrYq8WWnpLvVatkno9wqDHSuoWcBd9SMV7v32Fu",
  "key20": "2Ywznkqvj4pCJQ2HsEQ8bnL4dYwLqMBsLQGNAftQLqhf5XnUVfHFhC3Y7Ka3ZxyRnbEQfqJkppcifWLJ1W21KQQC",
  "key21": "2s8gvgphYnZhwVoAy8pvxJ9wACqZAocarDek7zfARUawX158wDvRckBLPPuoW5L84T2N6fs4AWvqisHhj2xLmrNx",
  "key22": "41xLsfGiaQcA81QcN8ozofdjaNeSXHajCppCmG5s64pM1VEbRvLz52XXK2v1AKQTs73tFgT1mjbFEAupZRojSZnN",
  "key23": "4tWg5BPCBJFERDjGL1mUTKtLRUW99Eg1RdzQuFHk84HFkRN7F5XJ6WHohH5VNqT16mRWZYUsZsXFcFwBaiFtjeWT",
  "key24": "5iV89kDieXK8MoZ9M4BT25yBa9fsj7ngH8TB9koqfziGJRKnHRuaPis2feyKCEiS66mmowndggCu1CJZR3R292eH",
  "key25": "4fj7TnUHShqzxLTnscoubQNEYngXdYssBqjSgRoPAENX7ShcS4FBp92TFsKL1BbGKqYD4VXJCqSLUiMYH1sfD4Hk",
  "key26": "5cZQEwqe9Uj4zX7tUtyjXR3LbgrjKkNyjA2V67ti6LdK3LLuqQbsjaBEcopABhFvyyaLdkJm6aWqUv34qvQfPyEq",
  "key27": "5mqDxfWkkDHpffQkAYgWYB7agv9uaCyKLDpFF6pFBs3WesVUWfVo5hxnqikCNUofY8o2BuVTNzeGTKaaAxxwCxQ",
  "key28": "2CQxoFRtcJyPNjbiXP7X9HfL8BJ2D6iQWrgc8zw5DmxC6KmVG5KjdJWcTYKsBFkXqJWBnjPwYW6Z2gGSXkwFQ2wx",
  "key29": "5gEFFqsENTS3pUG4AUTKoiDQPQtvb2FszJRVsncW3mpHAdSxvgQEyK5aASGyfnQefmPRA11M2VQcyut5649CyYtZ",
  "key30": "67oNZ6Jfw5L11mLrtLUoCbiwD1XnVogZB5swxzwRxkVkcXXBLaeK7AcHGCCZ2nG6gRA5odcazNfj4C2YEt24At5n",
  "key31": "66smHsiXsuv98aLToPBQhBEeXaU2KF2kWrBvNrVbSoqTaZrdhJHPpg9dHBuGTpLWB9NwT5c2pdrHcsuN3DiUc4fR",
  "key32": "2hmhXM2LipYPGKku4r4XoxcKyPGbWxsBTJJtFmiu8VXxxDmPSMRjFc9BVCzcFmnV78qHx7w1JtsDjBySUmM2uQWm",
  "key33": "46BvJC9CZu8uLecVzHFE3KDc26TUP8spqjTJoUMXTG4B7qVJvhFrLawnJ5ySHUa14Ry15cJoQQy3voaLostcptNp",
  "key34": "2kmsHBdYKA4uoM9NJoDrEy3ZiHYi5Bh5ZRc1vtJt3hvCzwPHqiqvyDffCAcsRhhf4uSox7KmPLpSqH46irtb6Daa"
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
