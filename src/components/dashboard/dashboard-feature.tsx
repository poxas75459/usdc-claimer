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
    "4amxgh2LqtpMt2zv7azk7jzSmdd83JUbZX4yG4VXJ2W64ACg41ka7tDPzWRG8vo72CoMq8rkTpSr1qahKke5ds2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U1X99Zirpy7TqdLdPkd4BB9akqdC16LgtK1LueiLxg27NFRM7dQoFuzrsjywfvZtFxkMyvpZMNLkU5XfMcuTcVG",
  "key1": "5sfa55cPGwSZvw5syrS5Pp4FSfkTe5orbwMYSN4shWRzzWZQAf9yFzion8SBVMqB6Lm853bVd48hm5BsNRkJwEe4",
  "key2": "3M415Bcu6SEZEt9DEoB8vPyTHmsKKqnGNwxLu3UixG6J3ZwhXWXwAaFffCcUkmsUfjWCHAqiDzUzT9rKBgZ7UGeA",
  "key3": "55iCp3vQR912TKAsqjWwx8mRH59QGmmoZJXr7Ur9nMh5z9pRkiy6XxVBF4NRMrnQTY254YRRuWaQbbVeF68RRhv",
  "key4": "5SBUDZLBrv7ub4WCqww9KAG7yZMF9m4RPR3eSg3CDoL7nT7RW5KGWAtG2BHizoG6ot2RE3ame3DKEnoZv2EAnfz3",
  "key5": "3yxnZX59cNNpKdBd3ksNYxytPq5QqtUodZW7K3LDbvWfnT5TxMqnT5Qw8TMhtv5ksBnKBSbBZd7cUHhXpNtNfDxC",
  "key6": "yCeFD1Jys1CU6WywvpPNg7SyRzCRrL3Ku1hpDVWDVZicRe2uRLu7FSrsnpriXXQX9JdTjzggeQwoqKprQVv5tBE",
  "key7": "3DPzgubSJokGd8qeWhsUUzZTgDPbs4gMWR5xGR5MJp1NMmi4fAhYiDE4APnWFSTuBM7ZvkMqDamh7xfgNos6XLTM",
  "key8": "4uS35WHjqJLJfLz8LkKS711wM5bzGsj3dntkWrwLUG6Wopo3z76Nz1WtZU32oVZU5QkW6wLTKEiyibj1CRgeamub",
  "key9": "5dXnVPokdQguJZqZZV6aywND4CGcSRu2KbnYNhG2rEARHaXq2sQ1KTKiUEhq8KZojRhEKasSPz1NJQ7FBk4ivZHw",
  "key10": "4m2sjbVg8FbZSt7ZVtSZ3qMt9X8uE5w141dYhzWyHcqBHByR4akWr7F5j9nT2SzTLAWmuMTetgnTNmPCwhMCGVfo",
  "key11": "3hMZQ9QoYHdLcx7FhzcWBHkKBNVrHN4HEg3etQQP3HfNUdVZDC2KcRdxpaoU21sLBibRGvV3sgrWLKKUuj8UQVJY",
  "key12": "3aeTRUSe5wK4MRB1sFSmfM57gUvLNb4L1fSY7YKPeW76qGn64zUTDgXXRTbhDC8uW1q8JSvrYfpFBUvAVHeg8YjM",
  "key13": "Egb2gEsLnTwQkHoNYgaVXmW2YXH7Phen9FVR8v1hsKKo6tsxUC49pFyJbrNHhHgYkLcnUdPu8QQuJg73gmZAGD6",
  "key14": "3DVDvqe2DRZsg1R7mcn8aacPSszyCJVU4ngjdckJxKRLV9kPsV5zTDDANEEHrk6yEetB9KkKjixnLkS2p5vdSDRR",
  "key15": "4UJMTsii42gpkRwNrTn4pZKcmiH4173DuZbBxMCgNZrpcqTxvRxCDT1KnNdPtx5H8X4UuJRJ7EzZNMsVM3QSNdrq",
  "key16": "2DGDtxuUf963W3Jh36zZhqFTijkmgWNNYDR76VjkYyD9fq3HmHzXQcBB5VQX5XkvDedCwRV6xsK1TGkpm6Z8if9S",
  "key17": "Ywv5PnvwfrDjW7g5Pdv8Ew6Tj8c8LtPXe9zCPo4DizB5YYmcTECFyVcAVu2ijL5PyCt45PQcjQi7TfqmHPSPAL3",
  "key18": "4raqfrcj9HzT9VnoXvS8ALKTqyfFuw3yKFAeNpkZBDKSePCAPH9xjUit5ULEYXnV6rQbW91Hdcassb5oWbWBLADR",
  "key19": "5PBymrmSRNaRXp6jT8FyCUr3HhSGxVxF71pUiPrX68iFyL3reB3YKdCwe8vmnAgfPrZLRRNhc6L917av6cDGtJzC",
  "key20": "2btnJTD2n9LRjHY2xcai4yF9G2WSgYqr3jjhmRZyqKVxG32PMN6nUAZZDoUGBqD4DmFrVZhEEcwXVTkjcarfCAyC",
  "key21": "xmudo2muATgpWZSqFA8rLFouiMBRwMnhTJD8qLYrL1yB1fbuAiwAohkicCAaWtNcZve8K1KAaiccmG1Y2j4d6R9",
  "key22": "3N4fX4KhwAgLF2eWLNpeTZwgw2jKWr2KQDiHjWxG9F2sEQK66Gs44gTCGbe7WATtAAC2zgaHBTA2HctcQCqVTvRv",
  "key23": "2EYQi4qEzm6qyVjtH5NMMhkDfzVimqcAx72KQCHnXWMU481K645N5zsatzyTCPNVXp9tAnLSt54hYArsXYh5S5D6",
  "key24": "4Q5hVtt7AH2ewCxDkXTrKnJiLQN35EzipifHDKJ92hdmCrS9y1wLA3Ved7VQjd3xQiEhiURnxWn3LxAD4SFEfr3M",
  "key25": "21QwRFcTQGCA1WG56RBpW6LrjPquUERH4XVbRAnMivtunzdJercKFrxGzXndiQi7GhSnTXBR4rv22Zz3u8ah2cnG",
  "key26": "5xmzxHWVNPkpQJFsjoxjRVg9qPMrYqFqYbCLYHQcxuEoEknY7UTvGJeYo5RbXLZYmqHp8U8eg6WtT7A2Yyj5GRvx",
  "key27": "y7K23n6gjyCqJaG1rrZmzdLVAi9gvm24VS71bUPnBMygrSPRKFt9ofdjdXYJCQZBGacB7PEFKQBg5bv3nzUKJBv",
  "key28": "dnzsaJJJyaEV8GCnweHXtmbk3C9gfcxcedvYVGQZrnoYRtreE7Pz9fyAu5ncHXeBbZykVnFttNQTsmeBZopVR9v",
  "key29": "5yySQGDd3N3SC8MwGBC9voTQkCb2PJ7tGPFRZkSprn3eZNPKRSAL4ogjFyc8WwxChpK46RNc4cqaTDoy7mdksjkd",
  "key30": "3hgVu3TkAEQzeSysv8fszsskgDUGoMPQkE52b7hCXe4vj2b9SBFYTQtF2Z82yvGyLpLZG2EuZS4RiZHVKvwofAyK",
  "key31": "44UJHQWQULDf4vecYmY1qurwPVdAvS4XEkpV4TrBcBvPm8tCWufUc3SWHKL1AWSsAqCJ49DgQfVh7r3TE4ZuP9LH",
  "key32": "eSX2fBN1Smp5JaF4nXaVzxsQ5zQo9bJsytqiFTFqHATdERobP5rShto1rUv9H3qNmmNHxa5Cv7CkAyjqm3daArs",
  "key33": "5eoqniYNijfN4w6wfwoFQxVwL8NTUXzikay9ymJ23daxqQbEnvML5E6QKDxFUJd9qZ3t7sfjVfmpfz9483XSgGPf",
  "key34": "33F7M9seXDkBUZo5brMETTbnJA2kJMCJUdVATpB8PbLj3Nt3iJpjG2ko6DshC1Ewia56XG1YDFLv8LfJb7gBnUVk",
  "key35": "PSeu4r4dik2z5b9TfQK6mWXhEmisdGvwEVtFgfZ9F5im9zYpCccwdPAHSuxD1XtYTrDmajGzjjEMViiRoUWhRwH",
  "key36": "vmPsJAPiapRSqxtaY8xfo2iprm8hNtFV49jnQoVc7SguXE4dvGmU3vS1VGYkPtjuN4FghySBxEe14AdUMRBfS4k",
  "key37": "yTkPapbcEfULfq1DeUvAYUDeaCQfioPAtDAoy7egB7Ju8XDiR9fjeGJmYgvQ3uGfuNp4awKuPue2afNKqrNKWiQ",
  "key38": "4Uyqnv9fgSU9QqjEyEbZTitQNKHFwNSwm49tTRqiSwNCYAN1tMxkkwjWH9KSd2wfDMdj674PC7am4ERTuUZ2i54B"
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
