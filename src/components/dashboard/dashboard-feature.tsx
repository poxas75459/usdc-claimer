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
    "2eRpQZFrhedcBkF5iCyQyquSBScusVaavM52rBC8Kave9qsE3JrNeuk8XeU7RNbyxQqYFoihVGbJVdYHhsikJMhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2K67LzpiSraMWMrzCupFF8iNPFuJteMZgTbaz57BTSWuWYBLRXCC3QZHLuoW5Cy7bDLBGs9G1dKsMHstwAV22Q",
  "key1": "4b9oB15wJ9wp4gEw7sURhZYiP4sLTYWgdrTKPjqfsB2YBibNbnksqs5DJHgAkT9PqdFvBHLz2AGSJL3F5P82Hcqn",
  "key2": "4tjjDjEpPf3iYQDCDhJs29npii3AMiHK2FcQU1zyNBQnLvByUtz2rqEot3JoXP87nExqa5St8AuuAPyL9xL1A8Fe",
  "key3": "2PCZv69jHSj2Jh7xojzRAaG1o8EccYX253WszDfAUUAkVhTT9SUqtUZQCNC1rJ9ToNTpPmCqopxaqu6RnenKQM7e",
  "key4": "SvoCDcpgvPthxkxa5Lsnrn131UoojQYPNPjdcgHmSFU9GsYP1KJ3a3c3Lk7q7hF61iZrGaTCfmtGLwkonXxcvjg",
  "key5": "cbQEYiYuZ9bAkGX9EKXs2JSHZJRCzYThZyKyJbscig1yLRXGfktv8zvELWoaL8vThtzXjVtNprK7sbVWQTX5Q7G",
  "key6": "2EjiJtN7ykHEgxGS3ZDvi1KvkoStyzBRQcjV9gUnwXcnXBAhDAC8sfzZdSt7GWSe8WfYSfaAeeSnET783yJ7KbDz",
  "key7": "5AVHvrKmfz4FMB2Fc1ypSFiKq96r4Q9YTWuozz72Y3GmuLjbEFvJvPjcU8AgJenpzrDT2ggGbuYoZJKYwkX6oKYx",
  "key8": "5HX3oN5kGAtBy7RRZmDjuuJzx13v5HUKkfpShGiWZzkGPm2QJy2C3uZ4ARmZCSTv4EBj7vYivg4rNYqvfEtw6v2L",
  "key9": "4H18RsbEHipJ9yE8nEJjfvxrodMm1TbgmRnZiAbsZB4TpFEp3MWdbAzQYbcjVKqvS9VM3RnrrNUspAPAoP1yan7d",
  "key10": "65eU8GaN4BPkHdUAmtwJFVMqEFN9bkBkUC38CnQvVHLQXvdqPA2xkRaUJPbvx2co6dosrUXNqkHuZ4feupze1Ps3",
  "key11": "45BvDTaQ5CY3gshLcJ8xTPhTSoju1C6GKb2rZaYnregHCVTFchthymLXoYBW52S8xCuWBw1PS4v4yXUkEm8ZFcdP",
  "key12": "aJa5gBbuJsqEe1AfscuEJ4zeaRb7xYYLbgENH1zjL6SKRPCdzFpbBSrdc8eyE39716sMsAnkX5MoiBbjabUW78Z",
  "key13": "47eJtWyHPLKYorKKyDpzTzFrLR3Y2tLDgvLp6w2T9t3hg4CvZ213x5N5exAyvXNricjVXkAkMgVf3PZwbf8h13qk",
  "key14": "5SHtbYUneX1ygqFaK4x9JZc9RyJdPtMk44tPwbzFpg1AsQ7AKzTxtUmJBSpB1ck63LD2ymim8NnbAS5Xeh9y5QHY",
  "key15": "2HFSZBtjjap4sY5LzBYeBcXuZRvebztxkZZJVVTc55fABjTTcR1CxtCrWHPSrdLWmfU31Y4ymJw5BjY2aecWi4fu",
  "key16": "593eFFk7ucJoGYFGSBdG2gKos3aj4h97TccAivvWA91p491FSRRs68pDbrVtnLFfdfr1ThmTa8coin8Wgcgy7yPC",
  "key17": "4GjZVg5mdAn2wU4SKmkR9C5GNouuFp1pPP2vJFTjwmSRsNE4hp9hpNCDnEiTPza6A6NiMGQE75W56xFFpR5HgsEu",
  "key18": "4giEddrkhdD6GLrAhgvnZDtrivbPVSc7sAir6d8MYnbvnYVaHkBZUTwnuQY2SdqCcCzkEKdVvqPGNuUyLhWkZsLi",
  "key19": "4CkadifpckJ1BYiJxnkr8zhwa59WkGCSahcycc6jEEq3tturwYNvMHZ1JrhntM9hVHW2sWbqurfHTfdjeDJ9c4c5",
  "key20": "333timR161uEoHNBRZsiBoaHgkCD6fwZPgypcRYDzGPpZ6oR7BTeADRVJTeKVMBvYdk85o94jJWNoB2eNWcx3y63",
  "key21": "4KQbn6kupjxPoRufpxNRdo1g7zRu9F7NMoniEJn8L2RBNjZpD972rB2jwaLACDpTWjAJt3WoCJiGDbqjPvHXqwYy",
  "key22": "2pTL75Rnda3VesJUBfvtFkNThdTyJojCrmHgaGVd6QMAxaivCMH8VWdxXFny3fmZYBgfzY1hh8LP8bB2zvCR9L81",
  "key23": "5g5PhfSJynzdE3TPnLZFU74g6PrQNSPkLjYr9AG16rnjyifPgyvFkRzjvtcbCUT5msAC5G8xvbnyTTxBsdtAVqwn",
  "key24": "5aLmfJ7ubWdFcbgpwKokbPn7CWboGuo5oSZFZAgCrBNBSQyGEyWoioeuJ67v3obTCyPUPERNimdWEtyjgYaJWMQY",
  "key25": "4wTMj85k2imawGY7utmwtRVthnuQ7wBMTJoDkZUuKz4Y3vaYz8AAiS8CZ3BdzXNF7HuLLCrYjCsGQDDUpMqEcmBe",
  "key26": "hQGHREc6wQ6xb1t8hC5djRFSbvkYwtoWX8hXAeNpeLPrMfe1KrG26tcfMogVzBywJ79MPZh47tkayQqaK5237cH",
  "key27": "3V9G2eytzXtyaB899TW1aR3uLYBCcqzX1nWLkZUQTZr2Vf6DPBmoXQocQwFbv6niRt8HWyGccbxKPdNuDbPPi8bh",
  "key28": "3z4sLmLRkKHNDvqi1Rkx1g8uy1Zkzbru1knhPiFkqdk93CxdsCvfUx6csv5G9dSbbfLPEuuEZ2KpfpxzHssaJf6D",
  "key29": "y5wz368taEH6HaAAsDou12gHFznYXXNu9ynKXPoX3PY44kL7cx8xEcQzSczZpwQPsaGft12YZW3EN2TkUNf1QBk",
  "key30": "3rGnTAgLMAozCC4FxDaNQ8CebrgmSbNcEFeVryu8ZeEfhkHrJEp9SskzDhpXXRyyzNmLWSsmkSnY3JutqWfPAMPi",
  "key31": "4BfKLqFMFevhJ3nn6eooG6zaTX1iGKbBNvL4aSn6pqZpwZG9mzg9dCrZofuawKdfgA4ZfYoHTuxSZRzeZDaAZ8TK",
  "key32": "2SjDe4ViJXZCJSAAx4hMeNM3ojQ45qvwDXTvjhAdYgkNQC5uLeR9ux5byAMyK8ESP7DhQiZAMwyMrYYTKvATwo4j",
  "key33": "prLgUiraMbK6jqokGF7bFtD9PP9oY3yp48JNkB3tLV59fa542LPgPAhaEbK46UoDFqzxR2YS2zikmCpwNeiZfkv",
  "key34": "DoDq7Whh1oVZzknDnTJp4k6R1dKJz6HwQmGBiM7GkeNniGTzxYu8DdviwxGjAzjdVwQBVMz9HWfMy1fPoBU4sEn",
  "key35": "3qekCryvCJQ7T5KdTFEjtsU5hiPbmDKu1mJCSex5qn7rzTNQ9scJG1NjgH9VcoE8Ym7yCE2Ktd6Qm9PsQs4xbHpb"
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
