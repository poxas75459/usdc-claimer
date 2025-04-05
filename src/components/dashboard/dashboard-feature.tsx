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
    "656VNAKTGQhQ19wfuLY9Xogpooz2W4QBbMt9fjtSQJyfQhN3aeCNntEuLhncsVGWHjLFTJyzPE81CmkXbkby8VrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sJ3mA78srNN1ALpwfZJQHY83kZBPqZTwoV9tP9YPhuYvuUYy8x47sWAdH4wMCXbv278vuXQocM5N76xH1jzR9F4",
  "key1": "4VMA87n6G7pJnnQpfnVcWSk4kbDTqNWzZhBKkYAsS8Z57nD5pAii1wYQGpyXWSV44dvF6fE16SgGiUFkATEjZjhv",
  "key2": "4QE55gKmffgnvenFvM9FrwySp3kxzmzj36XhZamzRz3Wg9qanBnvCALEViQbEoDdurdSehm78S9dr2fDM25X5XLR",
  "key3": "WsBgECAKkT4ZufKzZwzWqFn3a2XH5pVydQ8H4u9jZsNvmb812YC4noEAhvnAwuf7J1jPadKX6LpVdu5udYT95UC",
  "key4": "BH5bAfSHHWXttdHcUW5WdTUcUtetSueGNKL5gxhQ5sBL4bmezjuEjq5TTMmiXUPzmseGYtrQVi4ifnnqKTgeW8U",
  "key5": "5twmoPgHdtoe9kWHRzsUkvuhUem4d4US2TrMVYrJ3HfQwiiLGuj2er3ew1gy9bW6WD2yvJqATL7kPg4EidR9Y36D",
  "key6": "STLbdNLDDa94UWsFYPds5EEv4wQ91ehyhAty4gYjuo5p6THDyvWRjaX5K9MG85HKuy5G8QeUsrp581pd8egeT4i",
  "key7": "2rL3fqeuGQuxZmeFpFnd4Dbpk2VJH9Ry4NDHG1QwQB2hEMCD2m1hUnj8BPmFHkV6v7ckeKS3A1SaTFxSoVoU2F6Y",
  "key8": "2nnKpce26x1GTR6t6sXWnKQE5ZjqnTWVpx8yPLpDBSQmFxNRMS7vuWcosxMZFyE467uuv7tEWmYf514jAnZT4oZG",
  "key9": "5rSSg43jLW31LPZoA41S48ShmU7x13gXxaTkvaQzrssMAMUa8yT9kviyq6p14swUKLVgDyyLde9GkEATnLKveDhp",
  "key10": "27S867GPJiduQTPzxHNft5PMXZkx8VspjPpAXihai8PD51DDrBkdN9odijJbkFcqhn8tkKWkPaYSKGSsg18ZLZt5",
  "key11": "28Z75eoduaAt3Tc5R6bkQDyvMhfGjqwe4k91kW7fpJ7qv1EBFBeXh8SMCVTgsLu1vNvTqGTxyRQPAbDVz5SXNGVf",
  "key12": "1MV3CmHdwbGMMyiD9YWQnfJCcz3mJ1iKBzhzzF5ahunzBfBqqSqohc8Lfxyso9d9BCphaWs9cWqo9aZG6oH2LBP",
  "key13": "4aLzhDKSdmmVgeB84GD3ipEYLxZ5xboQV8Knbb4z53HQNP6GFMaQaPFr9AnqzWSjpK8LXSbAUBUtAPH3udM2q9XK",
  "key14": "4hRUdyvixZfjmUj3xN7nAkNVqvAdQ3zxj1TKXTB2Q6NZpMwz97ovBgxC6Wi2X49thaokkdAdhp9kjNiDXm8mERk1",
  "key15": "M9RyfpKfdDXuFVPcYxNkrga3sqCQyRfry94BauxcK7ahqAqax6bFBeoHj5RJJBbviqr13ZDAJYkRfSKQKkcnAZR",
  "key16": "58WxnPb1KAhkhUZ6A84ak4aarwecHVexsz1fnH3WzWWt6VNb7W2hWSehZqpu78wY1zoEyD1Q64ZCk3uu8dikrqGc",
  "key17": "4CTCxhAaDGgmu9tSfVNzNQSsyS41tefhGDKcCE5AJyimmktNdkWURvVeqH9TJU2c8QqYh11QXSaxen1TLEp674fE",
  "key18": "3Y91XuYJcGH2NmQm8SXTEqMiXnZqZgmk2r4BXnvBRH9BSra2z16GZofVX2ZZ4Wk8JXRkUjvakVpkjzuiBtqxu4uD",
  "key19": "5AGDSMvgmVA1h9wACNHbuuXUV6DVNumDiPv3wXYHCzutGnesREwZWbwy28zWnicPdn346YmEerWB9VhJ2HQ4Bfeu",
  "key20": "4kdoBTcpwg7D6dz1tNqUaz7qQkN2Qu5zaGETdS2hHzvuhuHv68J9ck35X6U9TR2wHp4mrHnDGSpmndToHG4TQha",
  "key21": "1drDwF8MuUzuGb9Q24WM4yXy8mtFZvorZxkM5SPWxAhhM6wAQxgJ3XBpJxBW6vTkNxQuuLhZTMiwrh9sUj6LfgC",
  "key22": "3t2GKAAJr5BetwoaCF7nz2DzQG79wJutECg3cqHajCd7AQTytb4jtXaukmAU8Wfwgfr3fuz3j3TJkat9LsWoantw",
  "key23": "2AqsDyUJ5xSbykrY6CfLpib911WT7G12sCbdfjHzJGUMcPWznNjJcbRquz6MJ6NZ8uyTfZu2PMMKQBnLUYUpxr5i",
  "key24": "5DjXCFAbCebCoKNLPMHS5UhxWJRZkYwfuHJytRbswHtrnexzcWdPk6WwNC92Vjyp3RsJ3fQcUcP1Vn7Ggk3qHDy5",
  "key25": "2Y1HuLQ6f49rKb6jkbvhC6qq17HEstuProEaKY7SFy3BSMNGLnZ5XSF95i2tUURcW6373hchvgCUp9PBQXZAFgWA",
  "key26": "XTwKg6547orSs5s4aepsELRxSsuNfv9B8tbZpQa2e8xHwhG7uXxVGuMK9qKvba2YuitzJz99JaLWLLETWrbhoWu",
  "key27": "2DQAzSG2YfRMRXfbBJnpjo8wwFJdY3jYUxY1JRgGk1phJqkB2eLdGUxQgq68uK1sXt26Yutubek9UjfHfjfKNFWo",
  "key28": "EtDqE2F6gw1Zd8t4MKHjZLZ6mm58qao6By3yrVDRKSoR54VApJSHvDFrrxd2BQXfW7u7sur6FF7CgzMeRMN9gZP",
  "key29": "5Z5yEMFRAbZbao3CnvBsSBuvyS4SE5qjNJxT7jeWeCkec9HCeqMav3SSsNT3VoUz28TH51ZwVBQ1CQHj2cfNVMgt",
  "key30": "35rgVxrP4RjPu8bVyCtvyhunSz9v1kcEXsaGBPQhywgCS42xSTtLyQmwUCKEuYavRj1eBvxNJ5pf1pja8pUpezMB",
  "key31": "2PWd2c9zhDHXZU6XyKdjRAjbkCmWqpoW6KeCSBtMDpS1jE1To4LwUEFaonFxZ9G7VgtbvUXpGkrHUDr1ZSa5uEVN",
  "key32": "4ymxM4de5WbF21o8kTJ1V9S3tBQW75pppTiehNPCS4LQK7G2BKdDhMtFqy7nKjgYjRaTRy3dET9xNPguBa7x9HT4",
  "key33": "2fghQj6ox8er7vUcj38q8KebUmrw27KZVwbLC7VNt1p6ZSm7jT7VRLqJgPJf8or9smPfeRr1thp53KajFJEDpdZL",
  "key34": "fsLPCBh754PXLyz4zZDC9apNZJmp6fU8JmZGMwcuCBec2yEpW2eEndcCaH3YRVJ93jv3sUe6LuAoVjauZ5cyRxu",
  "key35": "366g6xJ4URzLYF95PR9o589QVhQUmcHuRXiozUWwGBnuSmuNbnMs38QYGSNfqLD8p3ZjYgoSxPWVeTvo2rMWCYyu"
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
