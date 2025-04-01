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
    "58BJrqN7yxJHvWYLMEp9xFWxa7FZbbxPcx1Ufz3tcQV9ZwyJxsVeakidmEPxbXQe52gY6GLj3YqCz2JHJbyHFLha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fpd3TZveV7Td5afYFcKQS5nXon4C7k2QBrnRfz8dbmBhMYsXXJa1EYFSYaPJB14UxneD52CmDH9dNiEjdqfmwEh",
  "key1": "2C7bkzhLf46EBX82eE82RoA7cmg7uib8mHB7tps5rZuapiBnePghfJU5gukYWd8qrzSeJVrdL884bQRmz89Jcgaw",
  "key2": "5URAnwSwC5MSwx5qt6B6EpSHJBdwETX48ZvWvCRSZr8JN5343KreUQjbc9C3cregjJP1vEz6ymWCpnV3ppG1zrM7",
  "key3": "2R8JLbEo3BWVkdbQq8QqqZJpVUsyyEVUMYCro3aTKbj9JpX4PHTYQVT9WXNUAYkc7KzZC3Ge1uGVc6wERKM14woD",
  "key4": "EWmYvwSZVftCaDZtjRncTpy2LrfUh9JyrnppaH6hzuM4VwcN23B5cTp5dciaqo5NZjKwfUzKuMWjjFSUWfzaMKE",
  "key5": "22GzsrX48D68k7vWYWT83sA5rCtBxxS5HVu5jVeV9nLT8U2rwckz6FM82iw7jhW1ExX2afa6ig396FxxobYV9vFt",
  "key6": "46yUEvnnARPFNtwX4g6udt99kmdTWVaCQ9J5gVijYzLwMpeHcydF6U39suxDxDN13ZT1g48QhvzzMtr4HKuhsyEU",
  "key7": "rreYjaPGeemZTQkNEyL3NzncQMRVS6VWCZNCy3jifsZMRgXNVRm7aHW4QwmMsw7rV9VPSKqaEJLVWLD4oN1cv6T",
  "key8": "4xPf1GQzt4zsoXWGpDaRi4G3zG2Ui6UMUshuHgcTBg4LnG4dbNF3hANz4wUcP1rFMZ3TwidHwwYkJhvt2BwCv43q",
  "key9": "5BcT8rsAY5YgoktoPV5Z2kz8WfENRY1NtPyJsVde2k7HCDUBwKb2sWWBDeF3tmQ4wkdkP7ZShiCnLrevs8ftZPRg",
  "key10": "21W84LWkGWBGamJihKTa6jCeBdrx2TUiuu8rdJDqbjDGBbY4mfVw4JCf5ifHg9T9EdDaiRuRXv498NC8FVedPVxs",
  "key11": "4ZxQRyoYDXsknWT8nit4SGbkA2kWsubhiKHdkrBRaNKQbe9aWm7oSHXJLZdXdyJpAYTbjrUdXWwdXZJzhGBEinY2",
  "key12": "7HiBDqJTNbiCVKcGAq4cLaWwHz92CXnKPuRGNBNk97R7teaqHFKiGz8BUZYFbYeQJc8fPeEz6vRtQ5HS4C8BaNZ",
  "key13": "4kouKhraXegXSdfD4scJBjLGCyFyJz7QEBtmpXys5qQNJmb6QZQKUe72dMjppuhTBFZFbhha5cHyxXABQeSQL7Lw",
  "key14": "5RdKxR8ug2Vhcgo9J2vjqmGkA7je9yexvBBGQ2WMKggX3r9ZMmqtqrbAymUcG1jj9tnxH8uLjXLFSkZXPT8TtTgM",
  "key15": "3Mn5o5QRLASJ79z4JTMDsNqrdnBYupr2fRqxRvAsojkL4T9J4Utzu4eGqP8yCYmjFszzUXgaoht9BN3qd6YVy6fm",
  "key16": "5u6tkSzi6MqbBtLCR56fYiUDBAAy9iwc2EPUNmaVcvAAGgcKo3zXAUWCapPfUSMb1extVQnKiKzanbNqk1G8pbX7",
  "key17": "uqzJX5CM9KdxRHEmcMciYR9Mv7djuJHDAVGpwg4AZuREqrS8r7H3CwJaCyD4t9PEaxvjBbKUorXTFD84QVDM1r9",
  "key18": "4yR7aaJP2685Qige58GqjDz63TBoPeYQuPsBnyE2ViPQaiGTbEXRqQGn2pL6poYybzi5UN3GSmAMRbjTxF89BCkJ",
  "key19": "4zC5VEdPsQN9GtAa1iuV15pw62ad8XALKfKHPHi5PF7rYMh822SARmruScxLRCEQ1REXYAHMQ4SReZfBKcSvAdX1",
  "key20": "2NqVmWcU9r8YScfZcXqKSwGi1xvZpQeUCoo5W8GrgXTm6BSKDqLJixaLTvvnYDAvSeVWV9DemZcwZ53wopxeTMXh",
  "key21": "4nphTaogL7sxtQuYQat6aMAvAxR4Pe6dx4atG2wwbadGgWgaPq9SfpQ6tVE2nmTQqNsqvdBDnqPzUfb9XNbFYddD",
  "key22": "4nJX4649gFtD4yboQstSkHj6WptLzXXNa99x1R8dpcUHNCLbMmepJFPMCMAFTh1hC4AHLhhCpovQvv3ArZmEwDyY",
  "key23": "2MDSrwuCUThkp4k7V2nmnfgLHS6Cjo1T45xRt3xkwaNN6wQkvpJ7Wt5ecwgEZztkUk75VP6oZAyhxuEd3i3gXjtT",
  "key24": "2vnStuoaoUPyLzA27cUDmLs846xWSaaTPYZfpYGBDWYpyfM1eeVhgnAZPqDdgVoTbbBdxLvmFohXJBE9exTXeKi4",
  "key25": "59cBrj1hMoYaKnLkpwuKL59skuEUd64SGVKDWD6hSvptmAxgibn85cdehkFTWo6oZ3PjXf6w3Ne4qJHw4QEC917i",
  "key26": "22RAkTNc9eXezYbLw5HGg1vEQFHLboYhaBRMcusughnSEogFzGA2ss9MZxk8FgT4rFBWzN3oiYY2gGyQCaqPzRUT",
  "key27": "2eDDaSGNYZVg9KVJUkFJvSxLtYPXQsRKvAadSrBwjuAQUMqHY6chWaux9dWepA5bHjSu2QxECR6pQ6bC8mCtEAEK",
  "key28": "g3z545gQApDMECVtkU9TSxusYMV2yoTnc2sathVQB1rZPf9iV2fqQmUzbmhC6XuX55qWknuUSwSu157qPNgDV7S",
  "key29": "FWNbM1ncAxVecuqfuNnF6JjHYQjHQdazLWA71cYUz9W53hFZJnSM9CCU8VHEbEktVULhMgryADybkeuvvCoUJjM",
  "key30": "nk83jZF7BiHU1gN93zmYZ8vyNDXsFSGL6wRmfinKTo2v3HdmvVdsr3WZU5uVVzNveUm1oWFimt7E69tVbTJuvsV",
  "key31": "4QLShRCcgXQfsn28wJWsHuoq6L73LdNtSvjUonRMFbwzDTEt1zeH5zX8UtpAAryHx7oDGc46RL6KKoB7Up8ZV16Q",
  "key32": "4J1jymvLSv8wM3KKcoqWBsP27uauEBVKhfRTKo4JTycUF9zTSGNgfRSh3kYta2aM8vuCT8tczrQkLavY56Nt4jFW",
  "key33": "51cRq6ebg1MByGyX1r7Mz5wpkkLkr3LBUaYVUtxpuaBkuvLXupF2h1snyweLeJWRe9iLgQVRCg7gKivCQXPTpWJ9",
  "key34": "2obihoETaYbuWNLdcTbYpEKpzrrWpr8EdRAneXv7GEhGSjm2EsTZQ16ioL4Dat1u88rBykRZqmh51q2VqjeqBGLu",
  "key35": "4Lo4S74C68JM9Gpieh7x2kTe8EoVv6ZNVYc2Xj2oDyrMBKvfCuWfaZrqAyp6e1PpUZwvNDTjKRXb925SkZMkecTs",
  "key36": "4QYPAAAYMUNSR1AJS8hU9qDsNHBkAw2AVazUsvqkTphexyeWpb6Vnv26ccfXTffcAwJvpE6KziEexELVqCPpMfDV",
  "key37": "2RZ7nbFCCGhf2HPEtY17N4bYT5VATvcENi84Bf7kgC8SCJ1bWeeaCW8iqa1TzYXLY12ss27Wv7ibDAe1GSvoMDFx",
  "key38": "oYcqwPBtAK3z6iEpkBjwsCC14N87Tf87BmCiYcFKT3N55FEr5m6dqjLWxKieVAZCiFVXM7oKphZkSQDTNPztzfL",
  "key39": "4XbuFT6yXxFwk8kLnGLch4wxfeSiHcn77L44sc6LmkM1w5jwNiymUEhRQRKdWWhMuQe2oXNgWZcoEqWh2uBziwzk",
  "key40": "3xKDwPtLztkgUaKXPzzjbf37FAx4BHQwaLgpRi8EfPrBjnZwEGehmGG5ifHmSJt1JGDA6PxsEQZyCHKx4ansq6L6"
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
