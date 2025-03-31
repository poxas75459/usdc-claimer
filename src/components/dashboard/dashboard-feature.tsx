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
    "5j4Lfunz6ufkdAy3AmD7XXF3cRQuGzgUhWCUfxZw9yEYHCL8B2kUFPcZzLDuv89uG8hRBgu1oZLnyioAa1kea4TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wtecpf3VfjJ1JUbsDja3AuwpWRA2kQB6NE5hRNRti4FiLqwUV8DHc3ipF5iZ3x5EamyM5Kmc65ggQXB2d3ExUiP",
  "key1": "4y6W9mnzhbAwNRjWG8syoCZGqMHGddqxA3dk9SNptRceZAer44XRYdqehDa76NfGgKF3kuQa6i2MN6TBA1YqTkgJ",
  "key2": "2TrhyQvpCGs3VnEKkFEsUWmMM7XTAxPCBMQGsbDLb4ywAUC7tV3b6yk483h1dT2AYNcitVXatEcHJjA99CWvd5zg",
  "key3": "3fZaCacmsceticDSmw7mxgwhgX38qCZ1ZAjRHqdbaMfWFjdYxXbaDghnEaoX6fqxp4FtdvU8ygwdx8fKJM5fWvv4",
  "key4": "5FZXRFhJBnoGoKxctuA664gS9HQt8nvRaBRVr45iEpdxnXaFMk6B8kRfRbyKTWTTYWU8MdBCwLbB38RbMTR8U1EG",
  "key5": "3Cfa5L1MV7V9Csbwt5XsXo1pbUHnDNqjwxHdKPZcgGnudx6u5rebiggYEAcvcF4fBV6udh2XBUhfzbtXRY7irajj",
  "key6": "rbr2vgrdKSiPJwcy72dp9VMmQoFJ1o6TF7oeuZDfJt5EKnQitX3deD2rYBxnF2BSRDv3pUjvHhfQFXRhjPu4GeV",
  "key7": "8U6MntdnRx6u2RymfgYCeZXzgiQsL5GgqMCJVT5GobgTU4YR8t9SGKutr22nYe4UeebXekg7PBpHHYFRVw9vxPB",
  "key8": "5LKH4zkkdPffEWKrUciadpSLZfBkBCNw2844AsJLwpNRnC7aDGeMUuURBnMbsU3EUizrAg4fhK2YjexDPmRhUovG",
  "key9": "3DneXXiYMhVAfEgdP8By2N48SjcJxadN7QUbo21qgZ41htne1Atk7QDMKuaFpC9fEV8fpMQjANpcKiLrey4hg9jy",
  "key10": "3y3Bo572p53kugc2uMCFLTjiwBm43Gw8LLzWXXB7KxpK6ZeWPqihQbhDDGQ6xGKq45SGYhtLMWscSkrTgUvY8Qzt",
  "key11": "49PRnveH1PsRewqWtGAsaGyEevUYXqVVEejPCQ4utRgK5LcuVavobMkFtAVxswvfZM9FZCZMwWz2114KStCHQ11F",
  "key12": "2eAvmAzg2BdumYr3EgktHafVNKgMotwakpo22vteyfkpZKivw729miZsyZA32iNxvcZuGg3FBwkzPi6kM8QRfhDi",
  "key13": "4pTdbXnymixeC4CZe3tfFTENuTT2g1mxMREZ3jWxbVG8cZh7UTcZ8bq5ks7CEce6VkTayjkpPhyTNnKMURm9BSp3",
  "key14": "4sq32MrtL9rErA9KyzLv5vCivmE8s97BZ2PGvHr3p8Y4J3afW1eYWgWzRpddLNx2dqith4V93ACAN4emyYRwqBDw",
  "key15": "YhPWfne24wSd75eJ6ReYXz8i4vaPoYNwRRNxr2hzqmve4sJdVe5SCAGKdeWWZq65K4NcquXdBsxvYjAGPrzc8ML",
  "key16": "3Cht7wDWJkXcgoqwGttQVHjUgdmsc14iL6ED8ytdbibk17EbWFtikvjhnrHftjzmN3NmDyvvXhmnoXPsbyZwMmA1",
  "key17": "5x38LvRpQq6ZxW7PmHoni14Ttr5ocUEoaaUnB5oX4d36bzEo88XqAAScA5HZ4yr9mCy5JMgQ7yB3gDtHCQuvF9Na",
  "key18": "4CePKYoGZszSJQNxwpuyHrhtinxTy3oDUNwE7MBYKwfcbgjkJr2t8i2V3yRdzeCmjfu77MfP4LAFsvjprzUZ7Hmn",
  "key19": "WNFRQFwKHsUbKYoydw3K8cXfqpXh9uELDbwJdoKQQ1VipRiWNNhmWdfvXU9B1pEFwepA9Z4E3KFHp4AjN2uZqjB",
  "key20": "2XT5SciZkoiPbaHPfEGz19UMXXzycyVqsqsEeiDLC13EfLAjv3RBtAkx9tiiEW5HBeduV128q25G7fYTQ4dmv9Dp",
  "key21": "4pCEJVqM1e1Ed9i4QUZjfh7RRWkhptDsrMiYPw19kyXD4kXLyPLCGdHjhqFLPtbQefox1DM65jVR2mrMH1ak5Wa",
  "key22": "UF39MpoFjTAMo2B267MsK2WT1HBNLrPuEGY3i8mSZSKi3efCxm7XpfkiHTq9JevK5Ys2ftnSsibiRT6eiEzWe75",
  "key23": "4VcfPou3vSUnKwcYRSskZuXwANeWBiwAgAG4LnqwD8j1VVZa56ZtGbVuLKtfQAb2aiUfwWzYTi9ZkgqFLqaR6w67",
  "key24": "VmsAR6PFo9DPRLKnfEJAWb5Qfb7AkyNc216up37H1DSf1WaP3axNY2zKsZAYEaGoRG7QaempYxSt1oYiwLgG8mK"
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
