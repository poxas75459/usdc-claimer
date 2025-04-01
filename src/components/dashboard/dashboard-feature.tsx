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
    "oKmujo1U4SAvvvYyUMnUeoaZyoRMsw5pLiaCNsUBpkPNdyHqrpH4xQiPe7EnYhbHkJnjLsfjVTzbDeDRdrNWsEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RpVdmhHLBeCr5deZMHmDGXWNCZY5QrKEtpXjkrv68fDh6T5X6boLywhBc8UjBb6K7fWj6BZaMRbW1tanFuvX1SJ",
  "key1": "4eWxSf2gGsimneobUNPfMaRqCU2gSLGVUdzJrnksq76qCox7ugfRWfCjoBnjxRor5KPS2w1pD9gpqKJHL7Psx7Sr",
  "key2": "66VprdxVkrhrFf1WTKNqfCrtJBM1dXhoYz2yTSYXcWQhUA8Q92a6KwhqTaPnJ2ayaLSRbX1VYEsZhCiDuxXTU6nX",
  "key3": "4uNiyy6FG9GmRraFwZ2yH3Me7LLHehwHh9tn9H55jFFtnMugkZWtVaSdNjVAf6waVXBUtdX9AJ54S2pqmcekTpm4",
  "key4": "5twXg6KT1vA42QqfDkmTVewshn2NVNxpsQSmHx3oTo7Ve6yt5u1QqNb3fP5rVMoXMuX5B5NMnL1bmK1oALRa5dvj",
  "key5": "5nPj81pMAagG8V9oqkYDdMvR5xnRgvFrRouovEgweFTxakD68P34XGeM3RPhWQFqz9rkb8uoAjfoehgnPU8VpiJX",
  "key6": "vYWuyewwxUVH9ah3GFEk1Gw6JJ6J7PnJtzRxM1tnqusvRgdUrAQDgYL1WvT1rJa7pkSSARFF5qjTmtM5EEvCwbu",
  "key7": "3mkV3rqebrFSgTd4Jhd2gJ1JGqoPG6JSziwTWAsKmPRMgHkymGwLxmEM19CASnN9xQX5eksyqmb4a5FwWFAtuRmn",
  "key8": "4W1a78grGaq3NXgKpm15vieC4tgo99HrdEuLXkLPiah26apQCU71ijZgj5LgLFbQeroPriviyQi3Qa2un51ERTm3",
  "key9": "3nwUXMfLn38Cv6kCZ1FGKVuofURwNuy5FxYih57h15VYHu84QnZcGAAQA14x6tD7qJKBxdKVbWoh2gctZReWhPVi",
  "key10": "5Uqz7Zt8DpfnjZ2EUf5DTCRsb2Pah2Md3qMCxvxgAMDGMJnHPHFmxa8xruwapn59GoycipFDSjXEygpeHNyzzCTa",
  "key11": "2MiGgafyAYAuTxtDztMfzGBFbPLe1yYWv8v45dNF1w8G4Enncpda7d7JGiwAYoUWAsX7xTCMkHRaFjqqL1cAJG5V",
  "key12": "p7FTxEhqXbVtKcok8BQAsd88MsV3CQX6bvgrYR4wkM1U43oW61y4Fn8bH6ycC8oUCQTH3bsGe6DsSMi5ihndLaR",
  "key13": "67n2GEaDmrrEnKzEtj4NSHWdEKwy9cdvJxGSEhNpjtNcCi4ShJKeEaTwqeYvBKbYsFKENNoB6ywgaBcNqXYzdGxn",
  "key14": "5xZV1UFBMpMzDTvjWotCAxE7U3pii8b6EzwCpbDmHQyNmZj6xsyHsSYHJCibCuCY1rUKjJksyKbWeCS2X4p7n9S6",
  "key15": "3LL53nwbWbcY9WHj3oAkJmFR8vcwXQCJ9N1qMsUcWZDEEad5RdkHaHD1g8T9KYrM4Ew16m24q1Q6DboZU7EjVGKN",
  "key16": "5VRqcaQJ9XMrhfj51Jq1FxF3RmK9wyknmKBp6HnuQ1WfPQasdrR3sW4wkxyhtpp9oZU61t9QMunmeyu2TRCmsu8e",
  "key17": "bb7TvkLQAsF2uDL8mxRyLUwPNXB5CJr2jEiaBfu5FGC7SQ66oeb58QTS9RSMocqHC9GkzQR1MzgXUR29Xk6c14J",
  "key18": "83umDheXs6dhXJSPoNNUmQFgQM1o6S1YhQn8u3wjwmaJy4PWaY5DMKT5BBVgweBd3CNqqevCQoxt4KCqUzpiPTG",
  "key19": "5fj5BoZXUYoVuvHAyQbmqBKEjXBzM7FyhNJgUhqNnKVz2YefnDPahijJLWgojURg7v9Q442PCG2QBTKTimBNMwCk",
  "key20": "3dmiKi2DZ17UKEi7eZmhTqx4Rk5jZkmZp487v6o6xcfMk62P73yPDnJF5H51Rq6iChEzV8nkB7AYKr4xiUniiovE",
  "key21": "3XnFqiUXzuBDXS4zwxZWg5Gt9kgfVfR2GSCBnydmD4c1Jc7KE5YZnktk1BnRPmqguaLM7JeDqdv2LqrKdVePmxYS",
  "key22": "2uVcjduHQHFt8z9CSXEDmsG5FgrUsfoubyTJiWzLz6kAqR9ySmWuixEMRus5C3o31wv2LqraVExrxK1uYrtmwRqH",
  "key23": "3ojwhztUmuN1yUenCQoLE7QFZEEWhZDPF1XmztVqNjXLiExNbziVXKf2h5NAmzyZaSTvT2NpbtuVhU7NoEJ79Z9B",
  "key24": "2fX25PV6VtqbEECuZkoJR1SVYk1SFG7M7orUC2yvui4aH7aAXKWXJP7M4PCDWHrt4CBD5fUJun3S1AdEurBHcoSB",
  "key25": "2PufRSis4BxEk1CMkr8eDSLzbF6qNc92R9VZrEfbYcFMfkADiLi6w4UHD71ENxAXbQteKUdeEBVbsDtRmqYmedSX",
  "key26": "2f1GAotYGSJjzYVegBNj6m7k5A5hB1McAprE4pufDNtJfFFNoYFqzkPQekJ4tCsMXBBty8pPdY1y2h8vYjvPbqgP",
  "key27": "5mYo48Tx9rVmHN48cZubkNpQGtXivRNdvFHCJw4PQHPqDHpuktGmmMFcXt7dCb8x6pFRtuXzmbqR9WKAdmY76ekK",
  "key28": "2yRMdvHEvBfUgwFtP9ATgEUTkTWk7KBsiN7LZPpyqZcyV8pU4TuSy2BPC4a57uPLibvWEx7tS1LRDMLzGG27vBw5",
  "key29": "3NTmVnB9Uup5qLd54eMwFKHqkVwsprBF1Maxu7yawtpXiLpSFvQ9TtWxqLXe1UPzDZ8ujaMCLuSYE2sbEHjsQEgo",
  "key30": "3GeMXeM97pkt7CHNWiyZM8TJkmGvbXWX8Dgqs6GYKeAecyRxbKuAaMt5rvLimbTMNg6wriJqHvbxZDWP7pdWtvkb",
  "key31": "Scw8bnitayMgmkXjGANwsWQHG8r9etpZBYrkDouPQaGUrGt7QjahUSWxFKN6B7BLBTXQfQrgtuLFPZi1NPfAdbz"
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
