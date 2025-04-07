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
    "5LSEw4AwCRuhCHpUdj9J9d8GmKv5fQZtpVgyY33CKYgByjiR7gNtV2C63yo68jLREnBDcVsoFUkMRDqhzoRQudVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PqUBaFQb8TkjGYZ5FWLzQEEj7TXbL5AMi7ANfFs3pzt95WZM4VAz3qsUCUvKtPYvExFzLvJV38ES2vCPeFWeLet",
  "key1": "3jDKp1zZfUBCJG27LeKTKRWZUMWsXqUgCqxyE7EGw3Gx3xSUv9iCBJbv1Es3tfBJ4jVGT2WFVRNaatdhs9swqL7t",
  "key2": "1JuzHSrueGHrtcyjYDL2LpvKh9cKTggKKGVZRNki37WQdpkbw2BXafX7fD1b3CXbagiesj3Big6aAKukjJ1ASJh",
  "key3": "4u7CVP75f6mWFw1tKDBzyGNaK3uzYaBoiQ7pprhR84yoM2wxPa8kY42F8KqSvGBwdeSr6fqgHCnXGv5gNQYKKXg8",
  "key4": "V21FMeWszy2t8vSubAz7KaxgNxteUW37nmxgFqfnrR3AqYpbaVTgwsUM63vwVMuWCoj2HMMaJwQj9zKm1tsY3tn",
  "key5": "5D9QqS683dop9G5UWGnP61v3e9XvMFBUxT2ZGhYb4wip2niZpK87a1GGvcu8WQ35ZaNuj3EqhikRzLKXbtXtGXco",
  "key6": "3xeLMNcwtRiNAZfawBSTws6bKGojjcxb97Q6AG3jjj8KfbfQzVrBKUYbP1ujWQeVF5XDoAMx4AA1pFUoqnv3K2eU",
  "key7": "atHRh6Cq7S7n5Xvwac5cpy1vfZ7zvq6bf4Jd5q1x6M9492zyRULkj4GsYbVyex5CUQCTGWMAE56EpKSt6Ln9ZxP",
  "key8": "3Bg5FS5Gxxhht29Gr8hUf5BxBKLNPfGX85FWPFqRSHybTetb1qWDqrCQSdfZ9SNh11HMFyDncHR6mf23G9cdPyMG",
  "key9": "4Gtvm2LHwXgcjdEo7Xa77r5LXQjJdEbFznFSop2vwpSLtn6XUGxgC4hZG9XmAnkcS6uB7J21CyEDW4rFtkZp8VZZ",
  "key10": "4mN6pjKvLePQdx1kjJ9iDnFazDmgNQj8w6AXSTBgmBZgqbKWZ1ReaGaB4TQHDp5Q77Pqk4ZGHMfVGjKTnN67N61F",
  "key11": "4g2aEnDaWUuBY3K9sjCbZbBxV2U7BAd1fR84J6T9MmguCsyAtkt2hztWynpNwh9fhNbUtiufGLHVVdbeG1jKbNUg",
  "key12": "5S93YYhjN44wVdZkGTexj7oCNFRx6i7Y5m9neknKEDwptDhKzmrmgtD64mDKVozsFB3UUfap8waeNwHVrYqzXHH5",
  "key13": "4dJ6eCeY2AcSKGWwAfJ44ZdatNWAVm8S8FBTWUHtHAoYjngBExr65Coyhr8VMqwH6H9RZQCSrUjkUJ6eCdkqe6N7",
  "key14": "517eLGpEENPdRmmWUhwonYRHauX6JNhwRMuCjmU75dUuCXnSKduhsh41qHnk4MoXCR39ZHkS5QpwvWfxANpWWp1k",
  "key15": "6uT1khbZ5ge5MiAjcZefPM2p9C417MT3BGc7Pz3JGcEB9RpLFz9acSnUgdqgFtwSZEwm3ytKiqwEzQDa4hSBGGk",
  "key16": "5k2B9FG828NUe162TPMeSBTKhXqn4UQxU6yaBaNhtkSy3EiK3UteH1DeUyJCG3wUfnmiyURqcKVbJBauWo1L4dcy",
  "key17": "5H2U7HrbT7hxrxiBzBwBJMf7y7jo8Evpk5y9GJhaq1DqH6KhCv7kSNtvZ563cmNksAmWbsQpfqcFZvvpuUmaDVvN",
  "key18": "3NdWk2XLTpe5eLSb8AGCs7rXrcFG8KnN9E8j3UwfsEoL1xF34CqvTwGGC96yGpm2nhD9STN9vsVKXQW91w7j5ZGb",
  "key19": "5sk9sCfeeXBtKJhjtqfLGTCpudE3UgWKZnSwFHsZ9R7pdgnte2sLEdkHdBq3eWXas1LuK9ghMxuuuVULtgouyM73",
  "key20": "2YLLL2SXnvnnwazL6TQV1UATwLnAtS95tP3EovtBLScSRqB8Z2LbhUvNNqwvgu77ZSpaQYTqVg3tJi6Xxw7XCMqu",
  "key21": "4jwLz9DjCu1rYTZitdFd1Voc3ud887GrLkXXk9sEj6NCFeSDGvFCMFa1JDcVHEQBVot9XHXWUpQGByqLc1AViHXG",
  "key22": "5UbFUDNFF1U9GqfxCSGvoheVfGvCfAZ6t7CNBb3UJrkSDQC8WgPUSofNPNdepZiPGEmZLdjCtJn1ngpH7CTTgik7",
  "key23": "5gD2XfpZW7Vijdf9S9MXbU5UwZnckkDebVvG36hWYeHrSMX9862SjX39uof7zWz6QXhgr15N6FJTX7VkDBb7cP98",
  "key24": "3vrxZQBLbUSBdo9czQozbzFhv1NdEKUUrB6G9WTd3Y2bzexvonsys6abKhdYTvWCegm2mwYoYbsaxD7HWFK1mffh",
  "key25": "4iFe2SX6nmR4VX3sy1f7b7M13C7UbbNyRJtWN5VSwNBbQ8Cc7Z5ziJQCfjY5S56yTLkhYP2bvoGraDhF3SihxMMQ",
  "key26": "5FLT3L4qRs5d3L9JSuccCH5rUEFZKV1Jc3K3LkrEWYhYqZbvbqHdGpTkEpW9YreXJga6wh1pqQ8E8TXz1xwQqj5K",
  "key27": "4XFHsdvVWhrTkWTMAKNjR5zDYM9K3NMPv5zAvmoq6MyCmkQcunr5RwqhKPnXLjczomYdHrjgcCDTuMtN7rkxpqgJ",
  "key28": "3m3CEomnkq4y5ybt6kVevMdQfbbf4JmnyMGsLd9zRFjrzVqvh8etJ5JvbhFyBV6i2hY49sw48fwGfA2mxwmBCJbH",
  "key29": "5LrdM1zrxrCJEVhnU5P95eFT5XE43q7JKmX9RWTippDbehQ9FnDraCq1cpPpGrBH1z2Jrd86Mxy7dtS4GjFkTwaF"
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
