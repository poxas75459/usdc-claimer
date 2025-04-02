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
    "64iA6qEte9wLphkqFKMgTrxTanLPaLRtVNeT9w7ZbWcGUgHdSPJrR3sTML53L7g6FtoU78jsxCueWU6ytqd79nW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qNuqnYEojWqK1KFa4dk7tshLyEkgfu2tSh6wUJn4tupvnZ6H3mb8RUSauNNUQwYyQfHJj53JgQ9ZFdYsbKsmat2",
  "key1": "2qEP66PRH5dwmxJyT9XWZpmgZCB3JJctTTd6AgvEZrGVBCLSAUEwWWJnPuNYhwAFm9yZVq1gUCB6CUHWo7iDrmZK",
  "key2": "GEpZT6za3LPF1Vg6XSxnQkK1ybHGSGmAwVmi6UYktkfaxmCxdnWVvfvnrEx4xrmUXvCoeD1dwoANaC6n14Ngymw",
  "key3": "6hRfFz8f3H9pC4Dgdsi2TiAsvLLZbbS9k1Cqn4piTykeFrAy8wGkSFewoGGZWXXTQu8bH6uvNtDHNLpzceZBzQJ",
  "key4": "36jS1ASvAoJBocjDLCvUSfdMrtdhgcCq3CXbqqu9ayS896j6Lp5MdAhK14h5hnHLbv45ZVRwfQeXTagK2ZXo7np",
  "key5": "4o4u7nGkfC3KpMHvbiFGaKgihw2AHwJUxpZNh2YnuXarvVZub1z5objLuAMSwxxiPZrFD4JACXVEd2Fc9MLggxgp",
  "key6": "4YZyUMUbsKBjRtA3RGM9sdxAzvWK4uQ8a7dHB8PrmPJ3cUHKPDtHN6JxxPPkJJroa9mPPcfGMfzs1xdXdVwwmxKB",
  "key7": "zpaMr5gsosa7SjYg96h7NaoSw9w3hXXvRmFNjLc5T5Kse9zWtayFWMz3w8XC1XEdRNyxcxZsXcfUfQSsF2eBekR",
  "key8": "m4dL66Edfhe1JZ5mNKrLwizj2avUFdf7i6fMYMDahbf78ZkxBk8GgaryByyF1CmELab8SC8mqj4cP4t13hLjf2v",
  "key9": "4JwPQEdcSYbzGKRGX3eMuq7vgi6q3dwhMbQ5xaVJpaLPR29minqWax3EjYHwWZCiYK5ZkQjfv2xfA5gZgX6dAGdC",
  "key10": "62PJu1ZJtnc4SX9sZYEkxP822pVtC6XDMv5Q1jJ9etpybkMhtR1rSL5XrbRNDyxMemUvWwjHnfS4Xx4wvD7fz7da",
  "key11": "4f5bWBBp64DjoZ5SoxP7VPitaCmRbo4bCBD72JbPPiQ7P4Vo6ypuBEZ6UvpyE1iAs2ReQzpA7LzfLkuSJ9THr9b7",
  "key12": "2eBCkt6R6HHyaync6B2vhRbHPLbttZZjnzmEcv8Y4W8FeaH3QzzjvojLXX4o51M8FvMaSCY6KR65zYj6CeiDu6gz",
  "key13": "5D44nKrJRRGAfcHnZZkP99ZnGVhotWqLnFy3G58dxV4ccZp2TKBGR4JffCa7WcQmkbHwGt5UM8ozUehJ72NKU6j2",
  "key14": "5n6M2QcmVmKZGNDHgLYzjEShQv48oHZFXdjAXFd3pvS8fhx2iEDZhFxwNoJCSnSc5HXyy82JbSwMMJvBZBxqSXC3",
  "key15": "57X6usvBjQCfyYbA79zgo5xHgHxUSTdjY3ArFUk71hX5KAajso2rjSyLm6Np1CCEKtLAcs8R3yS1T57D8TJqcMbo",
  "key16": "2GRcNnZxpywGvErCm37UqCBLbWGW9tLNry117vRPykig53HtbcyHbrNxpkZUi4CqyML9nxyEadEZ7d14DFNSKJ6q",
  "key17": "krwF5RivCY6SskEEEfp7dhZTkBfErfLCjEm9BLwspRacQNz9te7VyVpBke7BGy4KnWY8jQBSBtjLStNY3N1emkd",
  "key18": "4Ka5SLkkXVGqyXmzG7GMDGE8RvWZKKXqEEJUTV95ZTz1aQQbrYuD6fnYZMMbWzqy2dGM6fUtkNnSEAki7xCMK5v",
  "key19": "3ZA2iL1gTP1trUYv8nL9x3XydHbBWtbdD2ZpYHb1C9bcVQw624HESYLWj37dcfveaXDSUTe7kvAXGkELTijLUNbD",
  "key20": "3i59j7fFnaxzMTDCAq5MReJdAoiRzj2tFddvU5B8dNXhgqMWUSAKmFejWFbwmRTBBB7X57rHmh3eCcwbfVBLg3Ea",
  "key21": "jjoyKEnj7ZzATJkQ5cWYMuoWkzJotxhF84531EmMvSyH1tve217zwdgAmx1zWCr9fsnbNW46EckKW3tHvX27uf1",
  "key22": "57wagbfnrrvYH8xSAqUi5kk1nUnHimZ2qTViQXmtpqTx3hF5X7wXxpWi8FRf11ettv7Qfi1QhTfqsVZuHMctpLPm",
  "key23": "4nraGCK3C8bxzwyEu9gPqY6pYSy3BPftr2rKWGvYkhKc9NJk2TxVM1sm55MubYk6ynfaSoxHjfWLZo4jsdE8LiiJ",
  "key24": "3SY1XnGfSN9ssxrGHWC3ABb6mPNdHFwkBYpKVqGEuHo99Wdz4fGxm82LjHHdcusHAE3BaQLYSEziFvcHJp63TEeB",
  "key25": "58RZqxVrPThmUXHzBvujxz8U71gXcJKyWWiu6tcvdzrM9WTqynric7k1ZP37mj9Rgw2T9G8AgotgtvPaTm6HA4YP",
  "key26": "63ZSjcMJNo9dZAB6CLTVmKUAHK9uta5LcoRo8TL1EAu5c37PryNnJ5TjrN3gGU8Cwh62eD8LbF1A5xeU7PGeGHBX",
  "key27": "52seKFMjKAoriBvmKooizRTmY65SZby8QjU68ejj7xyZC5X5anvqQLDogygWj13c141MADVrM8DJoJWHZNNVoh7H",
  "key28": "64vrK7bsvgiu4wDLkw6ru8SMuNF3vGM97nQoc4uUWmf5x12xW4U6kL98gchZ9egMgZXwcEzdY2EZf6c84duQhxRn",
  "key29": "Uc1d4qgC1qnc3uBeMDnKjfAJ2sTPM4aTDngvH48D1aU5gJqEYEDWdP8jrdMSrGrrURfuptpgWwQcZamnVbeLMNF",
  "key30": "2cZ3KwWTpoaykzbHjcsMkuga41R1VJrZWJGYRnZtt3gQGbB1R3XPAEYU8ubq71BCRBG5yyscNBzazMrp76BEQ5F8",
  "key31": "3LvLVpBxELDJtzppdXVZ4b1YhrKK9yEZ5GPfY2fMWSzo5psTQ4j4Q9BYRgeFauEcLxT26SpgmTfgnewayFpDdLXr",
  "key32": "ytbVPU2ZWdB4zHtFoqvYmkLVLmB8zxJ9MHHZ6yGtzvBw7MwQtbZAznuxn4ZCP9zcdNVAjUmugKi27v8pS5Wvy2S",
  "key33": "3eGtiSdfE6SYHfGqP2bKXvck96rhf5KXnnXf3omxWpjkS1TBpwy3yGRqBh23tvu2YKN3h27xuHwG5SHq4A4FsccX",
  "key34": "4dhoeW2Xg8nSVeT2JC1Hk6DaZ4LPxgtGcKEYSFT3FMHKb6jaGBtBcTEt3h4RwzAwE1zb1bEDUw5jLmv7h6opVMLh",
  "key35": "2L92ovYWr6cTngPMb9F8Kc6KWKWGMo64g6HDSPqBso3mz2ZQG7xiPgZ7KFdLD1sZaXkmzsgBrd5NukNSvqtMZRPi",
  "key36": "2tVZ44rBN5kjS1fHvpJkbVoonnvwh9etWPX4cyqggJ7zZeQRQPS6j34ZjkJcJrUukbV1mw964nSw65eT6ex8MjSU",
  "key37": "4C1FJPhzJ1xsoHob4TeJxKVnTBBUxRSZr8iA5mJvqjwphLfhZcrhVdMGNF33VUyu6c7B45WrkKqGKNSna5v3N8P4",
  "key38": "UFeATR99Mww1ZxGdgmLVP9UqcNgQjXmMRUe1veXQm2KuG74ztj2purwdHDRbXByphjqcFRu4cBZwDxUMHbzZEqv",
  "key39": "24vovuELNPkQpSnci7yysqvYUv86A9Jdzfndsy1q6PUJ9Dqktdik7bXBHsrXarRjeGEmsWVmYtKQ6yCrpct2P5dd",
  "key40": "5wJwAg6jMGQtg6y5GVWTm2bKsLZzmn5YtbT2MUA1RvUir2dsRBBQ8dwwUVpxgvHeP1DXwacZ5hBDZ1dqDj6tiwaw",
  "key41": "5LmnpgkFvdTTs6Honxjh3FYBb41d9SyJJzzxxDsPBAb3GQAY4VzdRK8qHtoHaTuADrFAC333MgGK5JMPAJFcMTL",
  "key42": "5BAFVG9NYNQtndpEqRm4ub3KSCXAWpYW3CDfmQmfrQFPNsfguLkVfUK2hR13uU2FUUX7ftp4Z45zET59i5SBBTwc"
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
