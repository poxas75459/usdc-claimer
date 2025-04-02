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
    "4umiaS3Ti1nQFQy6dKeZ2YivstW5YQCEasufukmDKNaErHxirhnpuRPyepCRpEAomdWrWC7CCqxcDZ22zD3kqJxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AdT61DpqEGaG9x1UUrHQ6RrftwgaLkuBSyAhrXUc6f4sqJEsjBmYejFFaHYCtLcArxWYgajjS9wmEg1Stk8357P",
  "key1": "2Nudmm5GWWkEze1qb47iq5PNz6hzzPDJrXrs5nG7Li4CFjmajW7gpYiijFkKBSMHNjefYvmw2Gz9rfqnPHNRpf2V",
  "key2": "5fh3s4TwfVdEeFHjPTJqBpjPBAhwAdmZbFg3yfFxxgWdvGzJc7c62komrYNTbnpDvEUTY5vpFWHTwZcCSNNMXVgh",
  "key3": "35C4gWFTyz5gDms1NxTZPdnQsRtg2ZCCT448655HtxEaUhC88KTFWezUtB8FmBMdF6xniaGkS7AjBBrZY5gQ1iAs",
  "key4": "4rByeMdRUKEuwPQzcxg1YRY5g1YzdQ6SJ3N3hwePi4VWz3PLAK84GuNb11GszHQSmpR61owJM5DohuicPsogfGy9",
  "key5": "5igYYqb5VUQYNaRwU1dyqRU9E3aqBP6CDS1griyTcmPPD2Ugy2obKDdBaoUPAJSs1QKe7VJ994CGDybdeUG9fvsd",
  "key6": "2hMxdFbV82nRfCn5pEqJAoyrcyfBYfbY7abAVbLxD5t49681dJGFBq2DthCRxUhMUJcjTFNqpvN1uzL3BmtEaokf",
  "key7": "5p8unXCtNwhMhxUfCGdz5jpCF4pxx8vgwyyxT4SdotcUQ5cPkRVHkh36LtQtbEsuh73cJSv5k3rvHEXU2mFGqG7K",
  "key8": "3QVDmkZK7YXwj7QXSxRfDdpXVgevmqh5yjCq4Tkeigd6eYvQPi2R5THxAPf11Y1SViUnp9e92u53i3NFH3hTt46P",
  "key9": "5PYb9m8uVXTkvyw18ZRSpdBLx9BX85e1WHMpwcFwcHr64J8St6Lcy7preLAeEHhvA7skWVQ7DpCEb4nuHYKLb8LP",
  "key10": "JRT9F2NpQoz6reFvLW9WMXjXUz9aZFn7xcfps6VQVK5gr3Lz7jdu48zMsAibGb5wR2q1Sr4VhbyCFS1tEyzwcsu",
  "key11": "2YrveFwPFDvkdqZJLL9jFas7qZ1dPA63XCUp9hcx3pS47jsT5o5GQCcjvDw5rFgFLBda8wjAoqnrxq85RRTBXySd",
  "key12": "2SMUkVUie3VZZNturHZQeQG7qXtBw2CgTRMC9KubnQ9mmdEL4TpVwV7SbBaPgNY4HgqLJUxFxJ6nQEdPA3WtP9oR",
  "key13": "3BYMwqCQbMqrz38YwQf3vHXFa1UdXMWTvugaEpna9h6TqTqJW8ot5o3meNEA2DCBbr1bJwaWXaKXPgbCMJBBm8zM",
  "key14": "4pZ7r5rv91HeGHbwjDQvmkk2g45167Gbb6pDHEDgrfD4tKUeRphiRF9ogCjxkqHsf3fbRcrHYmtUJCwysL95K3YJ",
  "key15": "5QdBkNaB1A4YSzA8nBBJM2AUEVJ3boH8cnrQmzMN96M2JqWQdKtWrjFuc7SwxgL1C6VUyS6mhyFZB5H1wrfjRNE4",
  "key16": "3R8EPKUoHRv4TJZwSXr6K6LhMevVtWwhcCxAeRioLXuyCKwT41XwENVsVMRHS8KzT98bdBF535WcmNutVTssj9VB",
  "key17": "4pLpBCS4xGiJAJTxVnPBKXGEcgFvNcAZT6n966qQUhoEcHgYDhc3thq6P9y49Cr8mk8JzJkMAyVDnvntYKBuqMvF",
  "key18": "4CVVpyxamKryNe52t9BLCETpitzDTPhDZwR4C8ESe5XpdBMncAd5JH58scNiePRhjBwDiyR6Vm8LXDbWsWEnxsEK",
  "key19": "2oXyZUrBfXa2th9Uczhu53TCZW7o8rgoS8APEcUjE3iv27C7UkLBV8Ss5xXRCUmBMBjHCdTj8GQojnzwkDk7i9s3",
  "key20": "5qqdrTkL2pMdnygnqmC3HnYSg2v4vvMenkWtAXNZNaH9nU1vBvZjPuuZXmt5tDayoVMebfPF33uBdrg2ZstBwKUP",
  "key21": "36wAH8MrTpdi53on7hdFdiasyTKFwSsajkZFks5GaHZSCayr6RkRTNU77sHSFkHNFcCL5EQbqUEj5XSejiPLaZR5",
  "key22": "4Z5jW95KeET9GWvvi8uwyMrJHgD1CsHJKvBBDjMVCerv8NzPEGFYevMRSJcDB5eJLoN5fBqnSyAe187QdFyjaB43",
  "key23": "33DR5rAWWyx9Ez6FEHCxS9Ma9LMUq7nihWNRBpWuFts4gGKKbJj1VzWHE7LjQkEJuLCBGWxkXfC3N4HSsCp4A87X",
  "key24": "3bedSENRyhcZS8NVSbfV64xzno9HSfJUxzUWxCLRwKS5cfiNGQxmdCgfo2abdDfY8oXWdHqcTDNJB3WBbCCCccwE",
  "key25": "WwPSBzsEgy5Eh2RfRM8uPV8BWsymcmLgfhPEAg55VBvMCqfWnCnWdkbHUz3C2i1yjoBUzSQSNF7w2U69Fp8G6cW",
  "key26": "3YFk87hYJfLqeoie9CADXPnRVuQJQB1bGqM3WfZro4PnRvQhkCtJKufZ7rB3SCC4EUXVZmLdwV5Y9ecsxXwN3KKm",
  "key27": "2hZdeJ88vYMt16RXtiFoBr77YNLYC7cAJcMTYrrin9Lk9qU4KkUqNpKvj4r9NsW3Cjj3FbmxGZ9CX8uBfxrwQSgm",
  "key28": "5FP75aAKo6NZtJxr2ujeFGQK4awe4xgzZSnHGNPBEbsW8BaZyrCtpprifoXNj3UCv5LyrDYYvtBuyJWvPuhsd5iS",
  "key29": "55E2Wzcm15mi8dV7LzM68G71JSvJ41ay4FPc6nZyLBfQ74kzB1C9o58bVN2oCFiWzPXbJKQHxfVZ997erw1Z1pn8",
  "key30": "2V3hDDtpdsZnk9cjfq3FENLAVwQsnEVZNA6V6v7QWCN6ui1ifW8tkv8Mu2xwEE263gqaKyTzYotnVSTRUmAuR4PA",
  "key31": "2jHTgJjgaRx2RQcSjZHYU2mCGsKvjVrQN33FnGPj1XtyB3sZ1K8MqbvKREr1MnBfay42VKvbii5rgkUQYHtA3Meo",
  "key32": "2mRJPoTQxjFchzzDKBbuiNUKmR47j3PfMfjD4KgfxBz5XhKdV9rSa5BdVuXKS1AMkkEBXYXhrtWBLkPx8GMsN23n",
  "key33": "2TTYVuRewHtt2wdeqtwHXb7B1mQ6X7zPfwfNnKfJbDEMguv5CS7PoRVH4cMysXJEvZjHqD1gATbS1EGXJunKTaGs",
  "key34": "2QHNvRfz1JHQ1y7qFBYZ9XJPtwySBHC6eFvaffZ2hYLvVGwycgmyoTxy2oUNvdEgjBQT5c6XyaTwaFFUYnwUpeAd",
  "key35": "59j9niEVZycM3naeVEhUJBcf7TmVWuc42aUnyNYB1CbhPDKR9tcvnptNkqxqrCG5cibhEfbaEppkqBauDaiysMzh",
  "key36": "27H5X82Mdzhf3T82nENZA89XMqeZvrxaqoLMU3H68vMFMwCPrr9dmm72qgqe1CaPLkqobHnAL1tPbvPE9HL4H63w",
  "key37": "5hCiZWTkBzJBaKdwpjdU819dY9Yusq3fCJnqKqW4CAoEtZzinwXkixuJDH7UsNaJKJwsUcxEEoGa7iSjNkWLMUQG",
  "key38": "5EHHM4Zh4CykGsuMmb31FUnEKPEewj15kBnT6zZYCDxDNmudPUeFvchWGSK1XE6ZRMCZ3dpZtssMfGs9JkeTKQVP",
  "key39": "241ii1spSiiESQFSvrhqJEnRc7GbXd8vgqooBzTZyT93Bccrwa5Fi23RbyZfrb6Q4VUZLUVP8x2JXzhU6BCzeJ7A",
  "key40": "eJhVE1sUGi6ec5dJ2eXPASrLiWTBv7Mvk7exvYoXxWzdGuuYkXY1m5baemtrXGEy9REyabBXr7t9U4oeUHiVhPy",
  "key41": "kcL6ZCQVAPANMacGSgjaeTkmX39Sv7JLUr8gN8YnXUyXBJDUDR2JsxGA9BvwUshCyFT5rzSvUXZr9wXUhqkXsAG",
  "key42": "5cMwEHkYp2DgQ4DpiyVto1Nwg7JazrmM7UnecgmxYa187CtRnBbSBnC2PwADEMZsP33BdCA36ukHy88iojTV4NaX"
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
