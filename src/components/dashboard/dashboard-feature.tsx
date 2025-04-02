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
    "6oj1oQ6yZd2EHYvStrAwZPBZdTLcPK4fD6aCZ2Ay1w2JtU35CVcp1zYHGpdLNBHNGMWxTJLdJ34qfN5JWxjx5PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M51UUMwpsUMWjyiKKDyEiseeK2b6AKsKQQbqNj6UFuDTyhHFAb8skpJGJ8torxAe9na8xQFnc1dGEg1Thfp2ABS",
  "key1": "3qLjVfqPGN3jLWtnpzkPMh2tuBmJgZSXaJ92dA4tvXHrLPPXUjR2RgMymQXdtR3nyq89KEq2vjxUAqJzbnttvwVu",
  "key2": "65fMdj3BJgo2KWVud7B84ZkSCMbPFfWRrNvHaTd1rHDgq9DR5hhrc7EXPzd8GK3rvpgawXjdaVYKssyDVdq3LpCk",
  "key3": "5TitsLnc45WfZ4tUCh8WAKE5xSP87mWJA7eZwr4JU2t3G1P8pG6zkWvcY2GnNVCWPUfS9nmmJ9YfojRcK5g51svS",
  "key4": "35t3wLmM4tkCpd31GNJYwT4SsqfpkycwGYy3RPXk14vWUHrtxyunZzvTMMy5EoL9LbLZSwTMYGznJaCusdsPhcA4",
  "key5": "61EHwJ7ZzB456xe3mW8BdSmpZVUmdKeAAYYnB2SsZjNFE8oUsxkptb5XZzrUcvxmaSonweL6hs38jBNGJdjgX7bC",
  "key6": "2oKUps7V18d88Bx7DPodSVSPYyyuvGtfzmh1sGNp3oZYXC99QmmWMSf48r8v2zibt3EQcrJkLPb8bTtRGCPfuQEs",
  "key7": "2ckV49CofmMqSJUnFhrCit15R9hUAthpuGfkr8Whxb36qpSyDc8G4B5SCYp4tfXBRy1hdgUUNZQPAjiCkrb9aZha",
  "key8": "5a9TYsjchM1fhuqEHvz5JCSZQi6fWkvXGm61hTLLZqCkmurHzAQFwajByGjTWLM5hK9eUvnHnQGAJekwpw8ddrKe",
  "key9": "654RJhDYfrCgMne5NbCBxzav6YGZpZj9VnypiKFQqkwa9fhFb3C6yJ4B8CPEhCGULB1St3FkDJEi8UcdkVtbUggK",
  "key10": "dzkiLKmmZt4ZfcesQUbT3DWq2jD8DtF2WcQfxU39RNf34NF1iHngVf9XpgCzTzxxrScAZXgPod4ezhGRNgnudtY",
  "key11": "5ULHAYHUuK9EgWGoiXXCYKCtrYMrWBRx2j99Jbf4HRs1BDW6SZwY3BsuA5GaaDN6QHZ1zRvr9f1D41cVjP3JJ24V",
  "key12": "2Wi75upGd5BXJyqP29VhKHGYx82nAMAPWrk6KXjHL8WHztQ1KH4mSoeBqs87MKeQwzdtUjS2yEwFDwz8TY8ejFNy",
  "key13": "4HJwsZ7fzjVBoNezeCprf6qyXzL24gLsFwMikoR3sb1LX1FcrYQT33KGs9GsMTHdpRAFG3aHkq5EkBNJ6pNbcjes",
  "key14": "5xWZpb6LKienhkn34LDFTCJdPgpB6cA3pYBD7UxWHFF3eAShACQB73ZEdfhnaySofeWTCLGL6SChuiHAjm56v3rW",
  "key15": "3kbjtAweUK9c7VM9ptTgynkcomgehkZVfWUHYQRqLEfg6Sdg5mbL4BJEvVPwecZM31vE9Zay89PH5tXerbf8TZkQ",
  "key16": "3NDbmKDh8DdrcrMktoSaJeoU7neZPBv1oum7WD6myvUPtSJ6SwpHG6jVj4eVkdrCn6kyBX9NicpjibMbceLsFHnU",
  "key17": "49XZXimVxQGvqhKVRxA49yhXvNs6g2KyRDVreaNpDZXz3NRijE8YQpostDYZb4kG1VbggtKJ6SeimgTYu1jBMqaF",
  "key18": "64y4bfm42YNcjMC1kZfFse9ZfVYccob8KXSav5jLc3QAZm4yxxFxDsiXwoqGCj95n8G8TAEukiS6CVQ3sLeFrAnY",
  "key19": "zEQWGKPfAULSYFrHeWhBf558PqGZY7gq77AHgfeRcxo2LjBD6wwkRwxfjehiLw64dggQz8kBnTECwtH3cZhMEKz",
  "key20": "nvFwC82yDTshnheD19tAgF7rYjhS7M1HCuWA3sKxVAzWVtUd4Rn3CF5tok4iSoJjt5mcnYz8ic5642pK2U95A7m",
  "key21": "CxsnbSfD4NANx4hrmQuHKEGXFp918F91tkTHc8n4n5zLB7TRSuYceHMkXibQoSmWyxfVRU4RNx4ZViHaBXNChh3",
  "key22": "8fNJrrDqhkMTmZyzNBFPNMWAkRJ7a4SsXiyk7XbmRhjt3mrKyRxdqfzfRKvRojtNCFkYSuYqaFpMGqwA8cYySZe",
  "key23": "27JMiRJspj8TCsZQADxsyv516pBTV4sDzYBDPhhXiWHuCCKi5uNgcu9uek7mwsFKdomo3RyminLb7SLjN5EnPaQj",
  "key24": "AriR7StsV23bNUDuGPatvYHdSJEm1kyUnheRfFi9EXWwV1Xf8eQZYVbHw3p7uWmmS71pnJXbC6mJMXtcA918xy3",
  "key25": "2WSMXpZhqUEfyxur71waeoDTPSmxfQ8rakEd22FaZhYxjn9nAuXhwcEw5DjcwiQ1ZnF7ZwsVXrX1dkNkvPp4BSf1",
  "key26": "4UJmPK7sE8W41VwSoTCX3MoXnNi4ussNw9TF1cFr6UTDUQ9r7j5dqLcGuwNLYfCiDjZ5YCPYY83ELemHozd7Q2DE",
  "key27": "5sjRS4o7pkU44oFxNzm2xo7JjPY5Lzhhsqu9zv2cXZB9S8GHYC6yiZ6nnQGYqSvue8AAzCXPRn5EgR6e5miBXC5z",
  "key28": "34eSwhGSwiQcDnCdmEdKaeYNRPZZdBJBhCWWeCVeKaKECWCJRgcRUset1PVpvtz7VmnJdDuwShjaV8GxS8VeNxuL",
  "key29": "4VUtmwPYzRGy8UYXrqP2deYjEfDw87yMe9hnmPnMXVn8PvQbcdVJp8rsZWhtAXe1GBrt8VbjAHCNjXj88EhC68Gp",
  "key30": "39SM3T4drqTZEFRgVwfEjdrPnwncgL6Kfw2vKWaSCZdqkP7wvvjYgvcvd13m7tHuzGurhkoXteec6LUt2Vt65VYt",
  "key31": "3RfX1Xf1U5xeEy2BsftQTjpCyAxgVYT1VHoG2oEAp7KtyLYEbYQ8an1zNnRyea8MhXNHnA214d2dKti38NrWPfaN",
  "key32": "UkSCTSkZC21XPu9KZkwiPJo6mb8HgpmbrMXrXCAn4fdNkiw7mwtzyYVeF6mbbTVKi3peYPCCCAvEiE6PWLyiQoG",
  "key33": "Yzjz18tVvbTvWR3462Uatdj7frFF5y9sXnj6PUd1xLnLqWAjiYP4XyyHpau9qTkLhk2E115HaUDD45xWabaRfkg",
  "key34": "jW4Er9QuX8R2iNn8PBC1kVMEykCR4LxM5d5fhAmgnCYS89dbxqUbS9dHJ8egdC8U4JktWg9k4Ac6tbpZfaTV2e8",
  "key35": "3hgJt4zVqKZwUxvyzHyPisUfL7WWWn4iiTf5axkmfGTDPD82mzvsCQH8djDAm6UDbCMnyj6ZVjCntNr17BwVN7Re",
  "key36": "3JGzQdsZhT64ds61onuv1DKvS3T9UCUFrKsFVQ2GiRas4y86Kzd81hw8imLxhC1CGsTj2EaTJ5bJq1duCpQsjfKF",
  "key37": "3g5KdQg3XMR3SG8WVPPUm3pCex49JD5s84PB5N98AdCSaLYNcZnVFMt3atcM33ALyUScFsCFKbgmSoSKth1ZLtie",
  "key38": "4QoEHwRkAdGf6oGqifSTJDan9MhuX4zWJ3gLQCFv5LFFyhy3n4JN3wCMUF8bKRWhCuQfpDap9bVbfd1XEKoFVFeG",
  "key39": "5WP24X1KvtpCDXnyF6rrPPU5BJJtEzgnpNAZJkSkz9MtsM3L165r6cyjAdQ2Yo5M7yc2qbhm6VMC76qGBuyPrQnj"
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
