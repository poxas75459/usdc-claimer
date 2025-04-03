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
    "4WYQXBdj2cuioELTFcbd5TX4rPs3Pm5remztJcnxfmDqMmnXF5ppFaWvLrCbKNUaens7Jwha3qFPuEJpdJcfPGzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grNpY4PUpwitVKqwcEs4ws4qwpei6WEzxugHBkjQmerSdmk8yCpmnTBHFuVQG4pqdGKujS4NwuRNCyV4qet3i8p",
  "key1": "3UaJCujmZ17tcpye4buVpUJa9LGB6M2PdtEjJmpL67oNFUkaTjWkE5VtWVUx91SZnFcQLdbCuEATewb7PehuUuRE",
  "key2": "5hFp13twqVFePyfr9upcoXkcrrWRQoVFvTbPFERtRzs3tB6d7JipuQSDqkWBgxo4C2PSq9xnyS2PDHg8JBaAhu2x",
  "key3": "2EccFbipeBBgjde3VTYoeBvbndgEjEPtkkhoKWFL2ibFx8Drypx79T5k2C4L2Bujrdu6NUkKzFY3ZmKWhJmpWCxr",
  "key4": "5hESkBub6t2zSzNJdikQDUBkZwVQA72PrMD7t2dSGXTZsKwGsNEMhL3Vg3K8huf2JqRc5ytVgrgFfLnxJxdvvxvp",
  "key5": "3Kvm7PkHcF2Z5oMVWhBCGM84a9EjoazLE67NCbTtKoDnX382UGdpVS93Lwh4Ys6XgAquX1iwW4a5RyXgE8MPcKhx",
  "key6": "5hHMT624kUWiM8HpcYYvMJaeWZ2m4QUU2MhiLDMxwaQAgZj3Vv3vMsHk9peYJwa8PmTDQVMtQcLnb8RMEd8Qkzac",
  "key7": "5r6Y2yjPAHtMx2ByXqCHPcJazea25TzYNDVm3vPNAzrzSf6MdPmafqr9khJWBaCsQ5B3UNMDVnBdwsb5197FgZFi",
  "key8": "4pHCYdpaQY6UVn8FXpQAXj7M9t6F2iFiWKoxRhk8k56A93p2oUNnYHWDHbV17izsrHV2Q1pb1gwwRzKEu6gMwVkZ",
  "key9": "5We2NEU3c3xd3fbF6M6wLtHHrm7DiAdZPjocUtouNbhDijRWkNe5T78dq2ZSQ8cmG6o9MVTf7SvTQ1YJkCvm7qKw",
  "key10": "5v21iJufAevoesU7KyCSnDQqoAj7aSQk3g9pyUYjjGC6dT5vjL2aeq9NcvygGDdYo6TEcbvqBNAC6xVhX7xNWy2X",
  "key11": "5gM5arNwv6xcYR3WdbgZiXcJ5SGA6pTd58zMTKvo4rPZ36fNt3bEdv1bYHFxzfWaoH9C5ev65nGEp179X9Ei6N9r",
  "key12": "nmAZNiQYcPT1wrb96JzEmT3BNnrCWkCk8BuA5tLeEVvNAB55ascLeJzMDZvfiuvVPis79ZMar1TBbu6x5b3gcvs",
  "key13": "2NE5h215TDLLVxR7NB7gmdSdTwBcDh4FoREgBqXKPpjVkg25619fdaYoNCuL9MbpkUkxfN7DbsuQYBXUBwPu4sZf",
  "key14": "4eMXockf9KMVQLG9qSRpHXiqqCpa1XTz4v7tYJRnmzAF5tH5zcYYTXYHUsimX9jbimE2xFTqhPTKK7MfmHY6hFxw",
  "key15": "3ancZHTJEhhaN391bTL9ug2GhueZdFyPeSUrUsFhWxVX8toHQ3oPAbYCYno6iViBMemcSKFb87E2NAJ6132zmPqY",
  "key16": "2RAVunBMVjBQenmxvSXyhpGLbN93CqCbB1pKxLFEv1rftfb9TmRBm6jrtdGB2DiBc9N1E5wAQSmPQws4TCLiTUAD",
  "key17": "4kubXjboN6cvVAvh8xZZTvpALVnWLAVqz69BFMvDdr9Ru22RJ5nFJvrqss8A2i65N7BjAaZZD39ReuEbudQCSbzj",
  "key18": "zQG1rDxSLeofnMFE8TvFfgssGKS76i1SSedY7eXaMKpPGaBPGLnH2vy1TjMwHtzeUnbkvSAY76vPHPDejwmFzoh",
  "key19": "3mzzfa83xsWF8TK2Zk4F1ACd818ciy8tL6pVVyJK7Jj7MY7iqst7PfoCaZRPFniMFfjBaMYPyJ56NskHtDK8QrAB",
  "key20": "2bRR88ifoLM7daicSZ69B9m6xsjE6EEwGVfm2xvDFWGesEB9cakxWUpyHTSnLA6D9mwRXRRWhZb2cvYKbHcXhEQy",
  "key21": "5kbAvZFRdh7m2s9bAPBTHw8EmbYUZZX31iU7x8grkdqsFmJS5tpLcCKJb5rBqYCf3NikauTSLfJ41DFsEjzPJZD3",
  "key22": "129CLZGCNZ5LC936fD4YrcY4HkbSFgixtPY49NQPqbnPJ8JbtQWUqxSxSAR591q8QbRBSmJBHheqq1T6zcsdoU36",
  "key23": "23emKFXxafGFJRssQjdq8CFB89c8FCvDCrpi1jnXH6GpoE2Mcg5esj8WD47JzxVxE5jhrVexrK9n2wypHuQ5fpTH",
  "key24": "rdz5VGWwyXQRSoC6nsPvuUbzamYzWXktfLq185etQsyYhMuXmMtZCvVwCf2fZKJkjyMU6Xu3h3LsGG4B1N79Rew",
  "key25": "6wBsJ87LFWHckobwy9CbpjCv24dFFEXCdnvi3EQkvTqGDW3mHgcKjNmpZUTkUcPLJWj1K58DENyS6MhDH5wbyJg",
  "key26": "3dDxVhMRnjHBvJjk5kWLZADKQQQgKfHkJXWz3DuivkwtXhL5tHgivycXatpJ8eMRTzmSv8XazmozB7WNpLF8bjct",
  "key27": "4tNFH1rd3YR8htUvcMKnUJmBsQdskbzX7Z5A5opFu2sAeskVMWJDkGaQX33RtdhA5b9tLA9bxdNXwCJaWDj3zGD7",
  "key28": "NuA1GmjQo86hk3pRs8C75Xrdz4q6yHFHLU1c3dLnRmjc6kvY2L1vBhTw4MbbUnp6hYBJZrpJ3US8EVHvi8vNhid",
  "key29": "2MxefzQGP444NdmfLirck2a4Epe3xZtutsMH3LS3myMUngpkQv6qwY3LfvKgTHwxEnnm8A9AX8AFQHdZdRkU8F3n",
  "key30": "5ndSfzZFuQUSVcdSMcShM5vzoE1bUdbPXodpuWBRUDVqAWkZ843afzP1483GgUZ6hZU2kpj7YxHEau6MDVqmDq4s"
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
