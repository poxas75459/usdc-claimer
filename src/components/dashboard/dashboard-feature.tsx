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
    "622dJ6xZV4PK2SUmtvjKzQrNuPconqzKKjde3mXbkoWRMz2AqokGCgCb1xFsR561aSUeaQxA5q9DfzCJhADs7UQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NGWkZmgUhQ2Ev5h2Fz1kYQDzgweeY6saxvvLHvNp6sHgCpTNpTRV7EzLJDNzWj2Eo8zSpLxq6wDegPYqBqghik",
  "key1": "2zcQHSFXeSh8iSH54voU5XXrvbzPmAjb8gJLrPVsXsQjsdc17wcfy4cfJj63wmiF2yZ7ksds5MoJ4Cfvgf5dvCRE",
  "key2": "3iHEPz2bJL8YoM8Z8R9Mjy9vma3vo2XvCxuCkYJM8YPPd6F8gXDD2FKHCuznUnZUNNk8Jxzx3xGQVMLg349xcFHJ",
  "key3": "2pJLeoTgLDAFYy7zscVv5a1ChtYNtE7q4URKvmF6ykySVerpTqtiJNf9WoFLC6NvErDgu93b94xT3F6YEX9d8fAo",
  "key4": "T3xXdwrNi1ekGK2SN7HZGpeSGdRViSfpLRoE2MFDaYmnF4uSbSyNmhon1qAVUyXWp25npb8AT3Q74es4J8ps4hp",
  "key5": "3eW5CGwheFvYz95PHd2jjWsJzhmc6Pkwgs5ghUq4ADgHidU2oCP3jbyH2LyiYf54gv9rJFL56fjR3R5mdh9w3uF4",
  "key6": "2v34sbAxdu2JgW3uwPyJZ1UeFSws7afeKkDGsMvwzafpemUr3wB4dWbhu94jqRjJjZjPdQad1LyBwarFQ7dU1Ty4",
  "key7": "VN8GH3qBXyaeCVZ8vqcuus1kvqWhD85eskeMZAzahZB2FLVGL3hTssRZKti3fCtN2NTfx3SGU4Kmdi3bt6gqoAy",
  "key8": "2dMMaXqT3a83wNW2pjjWN1CksSeqRdynL26KXREPzfA39YNvu4HXRq8TzgiDdb6zkSkofN2ESEp2dZJ5g44DkiD8",
  "key9": "5tmePiN6fmEgyZHPy9LiYuyPrfkDJEo6UNoLAhYhkeg2GS4JnidHe1kdY6aNrM3P1YWpbU5pFVKVf6xUXfyanwNW",
  "key10": "5kBPnRy54gPKCpw52xNrVGtqTSwdeQabbwLsCDkQzb95mrJ2MXWHk7t7CAW5QbcUg31gHX4UPhqrzY9q3ngqSw4K",
  "key11": "2bt5wq3zUADZnUG38Wv58LGsK4Mh6fCU7s5JzWBufob4LLaswTHsQ5g6ydE7Ci1oenv8sYa6BTDhr9v4K1u9uZRE",
  "key12": "2ixSQN1RaF5HDq8weYHcgtA2cFi93bFUQG3rmUNqqPGXRQDbVHK1UvtU8NPdcLAtmi2CXbijJFokhMnZfVuVWqzn",
  "key13": "MdSgHJmJwi6sttu8DxfW7xigX5tA7zJSJq1boYBug8EuydH2d4GjchEij61XxJdWRXXt2YBHKDuNEY9qSnzAbo8",
  "key14": "3w1SwhCe6Kvow4H2Sg2UKKYDHPDLnmLMjPXHJLpVDmfqQ4boWeSmtGR91WFxySJ2miHJokshTWwjSdNZQLyNcp3H",
  "key15": "WsHtiYD5tZaAwVvAaCdy63Pb2DxvmjZG3TSjiHMymKDXWCrRiU1VWm8Vxj5cFZQBDniSnuqGipLTN8aRpdYA4ik",
  "key16": "x6YeWf5ZAYKTCkaGupEZSjitrBS6L23bphX8uvqZ1i4XYs7RvyNZrBjUErJmgvvFt5QE1shw18XgwVcwxQ17YA3",
  "key17": "5iwu7BXdr9LQ1gafDBHVsoHbrtkLCXyoCgqhtFiB9Sf9Qo3S39QgVdAbrbLPspH9MzfW5FKT9B1kwAjCJMcSfunn",
  "key18": "2GtPWAQ9gy7jHKLp6u8PYJR3amhPgWBKk5cwNgjE6HP3FyBG2V4UkvGUkJwtSsXmPi5iGLt7qidZWbNvi7psW9fv",
  "key19": "sD6J1KJ37ap7zm26j31hPFocNkutxvt9ehNqre9Quy4ca3SU8yhqEU1GSjt8V2AKXFrhZEVKex3inUWvVLX1BxV",
  "key20": "5qykDgfddM9NyJsHhdVLREmuTnUrbfU5owYLrxbQ4gwtLAWeiK4D9GtUmE1qp5xZAMTJr1JU5GmKjyYsstV9pWUZ",
  "key21": "HVpP5Vieqs6KYqjAdKE3g4vM3ziek2TB3HQxdC9MAnVB69ENd1SYTB2yoheZ3b3S6N7XQrjrnSAGjpRhXDVMNc2",
  "key22": "55BqR5rtkwLqmHMSYCs6agWBBNLEQb3YwvU47rbBhS6XTBYsHrDLtE2MPcqhCuJz9h5XkeqeqpEiNGEh7PT9w3eh",
  "key23": "2UH87YusLw4i2K4SDeJL8TjaS25UyfaudvPg19HdAkFY6q9qVUyNKTgiswt1DhD62ZL1FoCuSnSh6KJp87FWxkwm",
  "key24": "5UTck76PjxNrCxgKGqf4wRZid5pzBPphfbD9uYJGMNSL36mACVFZ1Q9PNsfsUuGaCTc2e58wXsEfFNBG6QbPyVK5",
  "key25": "3yt9pv47ce49Yk1BHdZX4WpQ73ZbkeaJJjNABA6eu7eSCG5jCxhGae2mMkHTAvztnexjSHEuEnULFsT36b93xHPj",
  "key26": "z6zZKw69t5wwcScaLUiVvic4VFceKxETsUwFRf7ooLH5V5WafPzc2G2DaHMU9kfrLTsqkahi5yreajjBQLkvz4R"
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
