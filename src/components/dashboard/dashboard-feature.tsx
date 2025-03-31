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
    "2CuxGotvvQKE38DLoybyrd7s1ngfhSM1oFLUHfv4ETV6Q76vjmbCCqDnBNhNuhNfMc2N4BjePJqm7yV6gfa9Q9wN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "126v569WbVQ6anJZaw436j9QxQUtWqMxKCT7oVdb4YQ791p984ZM3UwfA6nNg63zQnEBWYhmPPjXqZHeWtVq8PSn",
  "key1": "hR5zV11i8QFpTiTV9q4EPZqdG8HuZ12dRTtHKoMA2G5tdq5yCunn8y3mK6JdSvpMu3JmficzaC7uKFvvkZYLcwv",
  "key2": "3Q1WuEBbzZWrMbXhNAVkFrGdHJmLyn9KGt2yxspccQXU3v5Yw3VtKADbGj4k73bppjtDTSQXqcsZt5ZUsyT2gYEp",
  "key3": "4939YC6toXxAU8HvzYrVMGfWSYQvYTUkmWP4PyU85Jt8gVCr7SJwnaBjAbYuV6UEYBmvnKAuj8QLskV7JHA3L8tw",
  "key4": "2EV8LH54Ph2zDvFANwk66BU2hp5nrFoQvAVP9wgiKggtFmK3aZ3ka77qU1oQPXWCF62tefv4d9wY21VkjUZt563h",
  "key5": "wWj9q4dgZZGF4fT4KfYPH8aN9e6zboMznCKtvmh1w77pSe7LaebCqvCVjV4DvrUq2fLAhDeGyL2Zww2Q5KLrKNr",
  "key6": "52enh8bzK5G6ZM7tHc4BGvWbwy4r6u6xKn2izKGXbPYqxc3a1ibaEeUDf1fYzzcuaBqhvrjx3afffShCViyqCLQW",
  "key7": "43sCXm7ABggwUh5eXGH2H66xcAFyoaPX3PvueS2pDDskpkXzYzmNTsU5BZqxVToiaSaJCwszAenzhx7jw1Rs5sZb",
  "key8": "3De5pqi9yUcah19hUeSsJSAXS3xnJYtT5AetneVegzotwihXtAKD7n7wS4Pq7GMfyBx1puDBs8RqEoFGCCBpZQX4",
  "key9": "26XRPT26y2KbBeAxzQu9hkKv5ckJ5g8gp5swthDmrPM6HMnEC3h2CBQrtBevYJLNaFbL8TUQ7kZ5Yxwc9D5aMkRr",
  "key10": "4DhWUXNJq64C8xbcRgecX7ESFMhLGsw1fhQrgqEjYWsqmp7mQcB7i7quk2fPmCdKa71TMtK3bbvdQg8YviB1GMZ4",
  "key11": "5RwmhAgYLwSzo2DG95GB564t8oUom64jAusGaoPFir8VyeefcV9RDmboeDiNWkGX1SHTE6nbWujmrKqN1NCgu6UW",
  "key12": "58G5JBZUr1q3njYrGSUWRk2ctuG3ZNtozefa4kX9jo3jEcY46yGU9C6M8XWhsD6NEiiH3KrRUcRZtZoSL4CGcHRN",
  "key13": "4xykCP6nUXUTMEurHhWLMgTp5SYNt2tfPrp2CYgAPVxbpdd3XBfJsHFcWkBwisfQyWqxUsf8LtoTrvJxWSTJPXtq",
  "key14": "fc1YvjpLgUqvMCi1uAthGPUA1ekskUfo1QiZqx8zGM3meokBUTDYhjFyRkwpuzQTADbjhpkCH3VgJwEwxxCVT1G",
  "key15": "4WejRCERo3M4ABnyHwxWuBqZ6yhRpXyetjrwXYBz2QenZ7nRD6V3yvtFo3p2MapHKABd2QhwLRAPsiSEnkhjCYpp",
  "key16": "5vWEUBETgAKFrWsCKLMJehM7eGMGyZupkjYC4eR6X7C5u2FgbyLLVcLZ3zKQUZCNpZ7fayqwHhtTZitbVywA4GRS",
  "key17": "4MXfeGwod5KwX1yeDyDNVGoch6eSioKpPsBUao4exNnsVUVDSQTYEWvHxSFEEpK7qVfkcRGZJUv8bVVNBnYGV2EN",
  "key18": "37YgJnoZ39ky2yNcFYNNZm6FuXg8CdBF7MpeoperEojU14sPcLm93L7tTHPQMt4u4QPs5mCYbv124DgTnNaUeNTc",
  "key19": "NRAkmgN9o5uCbgP8tMkn412Bn62K3RuRcka43PPQNCXsdD9NaY4y9Gc1BWWra51XgCJKFaWtpbKSyXxSCH9XDDQ",
  "key20": "5p5G1Qa3qt9HvAZDjBoybs73b58nVvpSR9KcNiAmupUB5y81iVkzeLFdqFQkJfiHdZdd9gUzz8eLExbejY2srVwZ",
  "key21": "3VtCz36USsnP3tSQEd3vLGhtMTAGjWuLM1R256ubNSuB2KMBXvREmZuzFzSJdrHGGiGwNS15y9aKNPCoTBXY4W2P",
  "key22": "3vAav52tKJEeExoQCwNdSGTtdoqYNsvJ7dN9hzAqe9KGFPeJCXP5neANbSqzhij2SguzQu3pbQS3wNjaobpBb956",
  "key23": "32WWoqNgJDnKj9bLESTTg7ViZkdoupwtQyFwH7jenBEw4dsVanvHC2UHEK5PurTCzR6R2cKmfdQeDKa1eBpzkRSP",
  "key24": "3fhm8pzLrMiPNoQxzvj1o1c2SU2jRFYr8xSJuwkih9iWsdBwHxrMV5QxRZEaQ4P6iMEf3cPRoNCVpdWr62MiiFQa",
  "key25": "46wEtBRpcEVJM2C1SCjN92uVb7nEK9VUacnBzSSMkjYL3D8eFzfRwShniH53aXULPTK6d9QRDakm6CtkNCfBcrNK",
  "key26": "YDTqt9NCPSxNgdcZgQu9ezSnULuh2qpaFj6JoQxnMoTLefPciqKdq67XxkwC6V2YS3c8T7AnYap1yrvCHybWu2n"
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
