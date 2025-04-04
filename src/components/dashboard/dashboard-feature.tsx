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
    "5kfdpPsvhQTdfyDqnsxA3pyavwf7xd6qdsnWcmDwaYLXHYTc9LQRdoZoDHTzaZ8yh3zaBgVACW74ksDUN1R6Xhbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DagBiLuf8ZSuVP2sdoFRVBdqpbQWxkQGHzKVeRPank5TVSAD1y4NgiNbgnHf3HMb71HzhBcGeLtDraFQcDLeoQV",
  "key1": "5VYYs1pVozsC2fSUGQNkunhiBkY4NR9BGBqCzGUzav8jqqJ48i1DkMg3YN33TkuYyG2TtCaf1tFanMfptVhtdJkH",
  "key2": "5GGAPFNqFkUWosfTKZUHLP8Sd4GZT9C19CnTFx8rgJiLyTGVoGR5oAKxpEDjxJ2zG8wPY4HEB6tUXrnmy4jskF7n",
  "key3": "37RGodtavRGgsJJUr7AvteHyeeXocRc26RFatvjVXsB9w92tapwuDPJzcuneorwQkV9G4T9nBFuFMTuBr7SSsbih",
  "key4": "3FPxSHC7Jpm3tRYFDuUib7JQjG2iJqb86uvaxSUMCL8xUQ1XAKbhwZRCKP83R32NFEFCiYh27yyekb6SXDuaktjs",
  "key5": "27QR4bRzEVmVnZQX6K1F4svSVSQcVHibNmCKrEw8zvAo8ZnBC2zrWrzUKxD3YWhgRGXzec4uRK3mx7nMkYaCqhJq",
  "key6": "5WsxbQp4EGc3XsEogxSMWbkwttHKFpuf956j6ZgCQARD9yeFXkirugGWfTs7SimXm5Ecvi1V8jEPePytjVywac5H",
  "key7": "3XkuPFecoc4gmVTLp8bskabjmMh2ySqHQfUAipg43tZ1fdtXKmGkzBVJk5MkbAFW6qLqmgH6tG6crxYR3pqt2u3r",
  "key8": "22UFzpoqcfijDRKwkxvyH7gxTHwxZg7WuftTb1cQBTpVDVD7n9AhFDLTGETTD3cjaA8Bi7M6hTYvJ8kQaHQjNaSb",
  "key9": "R46kTV1P78D1B2mfycJtNHLeJoBhbbCxhr1FzW3UQr2LM7ij7g4BhD8TVV4HrDhCB1LMo6dJMGdyat2adP6T9AZ",
  "key10": "2DnNfYUxmdJkZckFK3niuaxc497XGykUNDVTw2oL2PEWngdmFPUeNRgSTCbtGVaZPzmLmWnC2eWbjmUQZmNamk9B",
  "key11": "2iza8guPEC4NFAmp6EBVdoB4gvha6YLJFigcinVHA6S8U2HfWm2xoaC35qzzcwj2hCdJNpDuTXUzDcuiHCPrnfuY",
  "key12": "BHDAi6xGgNKJxkCtHsbRx9dvehC3ZXHMi6EkCyev9Zs1FhDvKW7YBmD91DGy5u72HCKm8ci9PHRMf3rbSrRztMo",
  "key13": "3n7eqeu56FhEWPujw66NvSNWfjMnLfw2jf9jy3tn4oBLVmVu4mbrE3htZoJ9WbrTQt5TcwmQGynhBWRPkfz7eCmS",
  "key14": "4HGWD7KuTzmegJ4oDBEJtqZKPuBcFoizd15vdKW9b87vHJTYkcQNdkBqpxKLLpvvr8kPWhHfuaDHoin7q8UM7iqe",
  "key15": "2TDezCimBqVBgREhsL6tV8XBBxhYVm6oQXXD1gxX8qKnA967R2rLtbDE9X2mAz2p9wrXrT4PZf1MdFsZUv5WMBqK",
  "key16": "2Xo9DftXg7XAhnx4itmk7wDsGdz76P6PBPhkn6n3o4E5Ldt6DQiM9aKdSKt5cQn7R9XTXJfi9vcGztHWXjXXo1Le",
  "key17": "4pSqEZZvHCF5NM4weLonwjU3WGCYpzXHesgUmvvUtq8aTu1FU5VBpAGb41np8nGYSaaKg8FeMsmGqQ7nk8TtyNNA",
  "key18": "9rBVjPWuVGqM81wy9AtjPsRUmvHEhZzF492iWBse3VzgQfWHEdmYFBYBdUP92vtMoD2NsPR7FAgNbm61rpPXRyX",
  "key19": "3ZW6N3Jxev28GKW3HbmUpQBprMxuL7eBxoJnKnv9ZS94qKe2G2LScRn2sHD4VcYWnR3FEh9D1jmNfdbK747jGock",
  "key20": "5K87pvNsBdp5mGkYSTYaK9FDgzGHr7uWJgaJbuMg4Ubcn6TDMQbeo2F3EgUF3K23wwoMXAvA1qexEkLhR4ZERbGc",
  "key21": "3DEvbZvp2nogunkWxVAjWZGZsjMZyjMfp6eRoJYSjGRKXMW2wD9bqPHrehTY4yda2azoFQFTpXuydLpVfg5dnexS",
  "key22": "wafNzqK2Rzmw7tLFQcQXPD6T12z4N2HUuqtv8XmJwF3i3JpjjrkaJV1FCZprsGAcpvsxV9f5Hz1CjcsjBMnczss",
  "key23": "3nHnQSZKXNG5mEGSvTwyiWhtE3eoRCiyRWfc4urqbH1WaCDaTTZ4PF9nTJLW97TQCzKuLB3fe6nQPq4gGpLyx3Vc",
  "key24": "49SLShncqAZA8iQZLVdDapaPoNDftusTHWBz17WvFR9gXZshYPrvwo2TXaHaRiwLZNVZx3CsSE6b5tyqWqkAEtkg",
  "key25": "3eScnVKhvNgFCjMRLWmrgT9MG5XpUaNsUka3YUMh6FDnPVUNck26cj7VzvoSP3QMVtJbT5nAPHS4SURvsY6oBrhP",
  "key26": "VQKPfPsNieQYNS77j8qMWSKSHEh2a7DghRexWQUVJt9KLxUnzQKBFVsYaifn3kN1CcDP8LDUAhdtsbgjsdjxjpC",
  "key27": "2BgJoocCpvGWokDEYyhCS5mUJQP4CibNZBQ5MHzkwezMq8yCZu36kwiYYPmE5rpUVsHXjfp8NfPxFmk2RRoA2qwf",
  "key28": "2WHkQNwuiRz8wHkUbQyfktW8oYjpWrQTbmusztk7gL9QjMVcRNxvGucSPYh5KR3RR1NhB3gxZi8yZmVjEhR3zDEC",
  "key29": "656JutykmMyB7JuPMLP9K1vPjeTJgXJnSfaTJ3LxYcs3Cft6cmZGqXf7yR7yVEoMAG5AgQHvR3HbzB65eRohXcVy",
  "key30": "3gQEiTLfEkGRWK7Zixsi7Hn2Q1sXjoFEkkjQ9KCEmeHS7fV1TJGxy74fTex71bSGPE12TSiYhKBEfhZkUERudBEE",
  "key31": "47cEbXzmxDybpariE8WyR7Gzii97U5CmUCMM3em3Em4zNCpZabmE2ngSFo88tGwbq18QrYmAMPh1BNMuMTAHYc5H",
  "key32": "2wuRsW2E3uav8ExjtSEKL5JMQEmyjSqKHk1JvxF3B5wKGPUJKkyGrRu4H5Xe8fc2nqsDoMqkMAbZqEQQJVxTco4Y",
  "key33": "1vF54AZAYhYJzp4Vjs7L2MuUpyhziCEEy7bBVwczYNp6tZedNxaXEoozWRFKZvZZAG4JjUJstUWXghVHGNthZX6",
  "key34": "5xniEe98vz6jQHWRcWTx4KsbmaGFSCPqBkStennAp1nmGfGpWJXVrjzF7VmYkupfpNVBti22zYVWtFqFxjrMwsHQ",
  "key35": "3ZRpgqxbdZMCYmBMxbZcwJ5X9ESvEaWvcbpmun9sB6xMPumDHqGeA1GTi36NShnRj9PM9axKV6Z9EbBDis1WCQnQ",
  "key36": "3kYWUXah7vidYiVcxD6tX6tpi9Bw1SU7RoWx5dZeHegJqBXBhySL5xMQXKYetF9BbmrUSdjndES6vWS5KGJQBwAA",
  "key37": "4ecB1bDGvmJzD3pkXbsUYZAA6qVEL1BQshABxQWXnsAWXs5odRNdZMG9yzKHBM6im272sxu9g8ToiN6EVQrBayS",
  "key38": "51DzJEothGy5ekmx42Sw3kRzxqnaf4Hw7j5ePfw6RQE6Xyz67MNjHayvFas2s1soASmKRg2NYcvG5Bq7VFmLWkAc",
  "key39": "37RXnJWY2AgTb6NwLMGBe2YhApZpkiSPsbp4woZK27gred1tV4pP5iwavtK8CkB5ZoGQmHcsysDQGXMp8Xnv4xmz",
  "key40": "4vWbRsJViyzg6YYHSAok1NFFk8czmoPQrPfYbeaL5RTXbhVCQNwSkSgwRFJ9G17zimAudLcwiTRf3Ccq8bA6AfnF",
  "key41": "5JoCeVHD8PjAnUxhqiofaX7Pg3X3UN8sNEjeGXu8YF728hSd1UXRjKCrG33KKEiHBwcvo2gSQsZPgVmYZ2AL2Cut",
  "key42": "4sGYfBiYVq4HdffF24EeNRAUiQUH8hv3EZiC68T7RX2H3yLywEZCn1JaxosVQdu5RtJjFSHk7LwhqkUJtLK4mYPB",
  "key43": "4MS5E3nQxCAZVVNPpHSMkuyy2JHkdNjDP4h6bu2QmqQCXTbqDXZeTridgGRJpy3HuNq9STTenFWzJdB4Bte641Rn",
  "key44": "4BHGSr6pwmqH6fv396iS3onXLTuJPdvFbBC9WwRwai32XQMn1ZhcjbcMeA1q7eb3RexDbaZQ2sPJga7faEjWvJKs",
  "key45": "4eBXfr2RLNLhCfB9aLM22qifBrh8NBKKUqykjrsN97g2zsV6brd9RVbqPzxS6GFc526d8n6hLHCmy1WbpdNQSq22"
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
