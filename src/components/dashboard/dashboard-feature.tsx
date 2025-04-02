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
    "3Tzk9oNmC5MLh65ksDZjWDRBxo2WU6qFdgDT2qE2EnntevmNn7uA6qRZxWMGp9tpBqTkHqSPRcC8TJzueq3ogUsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sbkX7WT3Ky8pYe11pJdHZFa9h7vdMH3eSEi1tkBwtjyM6jyz6YVSyUpu6uoZQDfRoyEYoT7LDXTThQbTtJMpH4W",
  "key1": "3E5XZaUk3b8TVYAHwaanDDhjrnPgGSojbmzje3PHrUvNwcvfvqoyHo5b2PC5LmuU3ZFgdCHHqoWCFSGwSLntFLMn",
  "key2": "4iWK4kShC8u6fa13mAT7ktWnU82Up66C3iDu47qfCZ4yTRoBKtKsUFkqXS2m5ntrvNR8CPrJXppmKdsFbppw1dtC",
  "key3": "5QvqwVQ4PBKw5TpbvKtFjzFaYpU7PN9A46UpeM7QgH41yFWPCEMRebihvLw17CGvvC7MmE9jyJWyCwQysgFA6n5F",
  "key4": "4cSwAMrh3Whq2LUKV5gf9dDTMcpWqea2BgF2hRv5N31K2U7sbiddzt51pHMDgaxKD6hkexztZr6aKJd118RVC3Ee",
  "key5": "4YWbGEjrnNSws6yKWc6bNUfxvQGk7NDpgJX7GaWC7QviEtuKLzLvWTnThJKHP4qFGZ33oa7U12gEnWTX3puJxDjf",
  "key6": "3wfLLqdbZfUFVYmn2hyxepjhZFcvafYGt5S8Vx9oTS9P98SummLeRXDPqhKSYTR4pgouamPKyg8YtTWLuebu4GQe",
  "key7": "2AnC2kt43JTtSXrJh9MCEBXMB2xf1JK27g2PAk61csxa6fBdcMAGFr7yoVKihevqcitaYDtpVQfbketQAW8uiBAU",
  "key8": "Nowa9hGEGoRr5nH6w1WWSWzw2NH1HdS3uhfetdfxudU5w6Gs8QLHDNARAdsfxFHw9SRJ9cQ2JK562uTn4YPoz88",
  "key9": "51Zjc59rQXwgK6Wv7Y7umwnawTwUNhYivja76QoPbiFGYdpiTnQdeDdbSmBn7AoQ7RWARZCCqy2BvvMCNav9YpDA",
  "key10": "8YT7HBMfxa8NeYtjThq4rPMtbg7gZzSxkxx7NEwiyNtg7wk2A6232bVZSiYT9zWn7t4kj2NBjFkbiVf8JJD8pns",
  "key11": "5u73ooxxsu5f2QefexPyb3hRzobcKCw9MyP6DNAyf9dw35hYxwzY6EFnYM7kMPQWDJeBCLPFZbp17NMdLRffvXcr",
  "key12": "46sVzq7D7YvjnFMAL2PghYdGenRxwZzZcFYVvjT4s7PciSy2PQsAbwpAX7Z3KK6y1HcAC4VRUv1U2QYbBfVCCcdT",
  "key13": "4EP1D3KV5N8knZyDtYbe1sr2oy2GzTjUEtYY9hGk7LB9TURpYLjKUJarD8rdAHXzwkgJ6CL2r6pCw9KM5YCfxGH",
  "key14": "TBYBABkNf9X8kPkg5DMJs4FP9BzM9TEoTRmZaecGBULE1MoQ8mTVtqhdPtzjBbfdmfwc2isi2pPs8hG2eoatee9",
  "key15": "5dgWRZXqMFXN3hjRNmQV8GfQW2sdzvn6wGDFimpLMdLxmn7mUw6hBrzFxq2G1zGvAQmh8rPa8o3ob58R6HzvDnoY",
  "key16": "NtEABK7e5vWeBWR6nXcJxCqoKRqvkgDrg62VJ3qSzefbzXNzcNeGF3gXhs45cSnDSdUEse9cRfksfWQNNnE132D",
  "key17": "2FipUfoFGLEHxPbZbXDrt6qkxkEeYTpkEYyHTUFr2RNFRNjeUJfDLamiFjR1sr1TFajGcLTTkxLAYmbasoNh1PcW",
  "key18": "3aYBTwPm3RBa9AE8otudeaeHwNoaBksdrScHREkrKTd8CPBrRmCDm3semqwgZtVx3u2bS2wwSsR8hFuoepGGx4yT",
  "key19": "UanJMbngzEQF2exGEn6LbVbYNUg6nsJcxf6sC5h7DJMFtaonr1eiRTSSBwGpyKccRx6dboBWzBwkqdAJGNwUE8A",
  "key20": "5XMFRMbBvvr3XuMMkVeEbarQ5JGYfu7Ybr7hUPUo4PNGtufK6FYpHqn1R6BVTPW8dFPkdq8vEBAFvK7Mg7kg8tXB",
  "key21": "3MK4afXTKcZYbDctXHvkeJrVL32XquhS8WqAw3JxZjBqY6t1f4ZsboExnU5xA2FCKTCQTWTxnJ3sa64RBgDgrA5H",
  "key22": "3pYSbYRRVtKAMazvFm9VCcGq6HumQtHCERaHbHyij8KJdqVgvSez7DVkL9Hv7JXnQsD2hjjEfm9eTkjfvxQxAWc3",
  "key23": "9jzr8oXr2c5cHieaS9u2mpvKYYPbUuwdTrtyTDrQDZzN4kS9NvGpJ6FxFWvLmyJ2U3ZqEJBUihmvvBEjKFW1oNh",
  "key24": "3SZnZYuWQjCrdwD77E39eAfVxFUVkeApgQZEBtyNrFtuxRvjr8YRD9PXiEeLDMmxrw7Pg9i3bKVQPhJ7m55wnuPC",
  "key25": "QUh7ajiu5QciBoujRaKTxgJ7T5LnjkFmqaqVEEYGU95Y3tjVSXtpybu8QuMadXnpVBEwguEyZ1tv4SvQYGf1pwm",
  "key26": "38TDxhTWeEQ8PYxM8nmo3DXqd5aQvsdERdSqdey97U1jWirbva2VMrzPjA6n3dpYpfjw5QAPk1RSGHX5JwsPauvH",
  "key27": "2Jq9Hj8TEhxp1feRwVfBVnEBdZ8R7NsHkpNAiUXEitM65LMXdQU9UAAeviqVFtsvNfGNcZmbQCLCfYoK1Up5W7w8",
  "key28": "2sTMFf8Xr4NRanQrHHBf1GsG1319U1b1xG9MaZxqe8VdMrpi2h34L5tTLscHVXabFeTi8cD2E7ntGMuYMeQFRdHQ",
  "key29": "3PsMwzv24oyzoRMDQCZ2tba4LK1CbTBPCqs4N37wJSLuepnbTr3QmTjRxQmWUmbo8EVo9CqqDRGMboD3bXyA1Miq",
  "key30": "qESH5PQxYQweTLhndZS5vcNbCjLgLzMeQSw3JEh34u8doQR3JoCjyiosAoQGt6PAWDH6rTs96Qxrr8b9KwxtNnw",
  "key31": "2XF8LfDfWKdqYxEuMBybqftZo8ZZVTA9W9cVUdfNp6CrqPMsRL94CRdtKG2UUuyarr9J3JcDoyv8J6ihRYEEsZRd"
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
