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
    "4Kg9fm2meg5GAswRo15jKN2erxvFbJ59PnMXdEbMuJLuwxSQFkPHXL1GMcMZ1TCPLJeUXGeFtS5avgYRNSLQQhG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gopuo7gKsvvLc8SbsCBGSBpVXSqdTWkB7SuFPhgpePt3BfvPwSp7kxLAutxt3vYej4EVQU892swvEnJzWxkWhmM",
  "key1": "2ZKp3ZNVaqhBuytv5Mzx4eoKw4H27sK1pKMVXZSt6z9eTKYwLi9dNJfpGHwQ5kdstqJsV8uB3AqE5wqQWzxQumcD",
  "key2": "2XWogtUHQhqZUMcJFDVWzaacEDahiituzBDPh7wNdUMG45nYaGJmda9FuLrUqjmeA3PRyoRV9L8Pg22RqMUDHmpj",
  "key3": "3zpTY87QHWb6FPBc62F7tZzNpMZabAK3XFDm5z65N7qavB54TGYyCSPY38tG8LWjP2BVCAuMfdJ3Zn7RnpHr2eLY",
  "key4": "61YNbpgj7Y6PrsnEYWzV4kgw17PyguerRpvzbbiGonpTZajK4qmdgnr8dYZLeQeBsZUtpEP8fQrZgyF1KqjrjRmi",
  "key5": "2ATgy8wVcRASqFNEyJR97AwTqFzBULn8yEd3Xzzuv3vWJWvCPMp3uCtmuEhNgBhGHJMTdZjCUAjnEbenSProDYhU",
  "key6": "3SpVkpha6P9eCcR1XA5yuPeUMjn4q9MHK7p22jryv9QYcLuLtHV6Enwmc8jEHrKqqFKSQvYCrXWqEWYMqF5KEvMH",
  "key7": "3W9oCX9FyQ1N5vaeibQWVBBHV33bqX6SdSw4fS9Cnf7TbKjEJMXnrjfxvfb5zchja3rBhUQQ27QcPh4Sy52yFV9G",
  "key8": "4yjP5GzgXTMR53S4QZdKSHh3ku2SGU2Q6tdmmtJn8RUoziRcpESyWoV8go6PXe6jvNhaWmX4rG4DYiGRtvBenJR2",
  "key9": "d9t9hYH24EbkB9jr3YFip9BBsk2RViGyQcxrJYcL9YxDcYLNXBbCpCU3FUZuhT1mMCnEDxzfBdfizPEct65M5iS",
  "key10": "3WDNoywd6wepiJNjezUf2hYejK2q18BJKPwejMjfKKu44y7srSEyk6ZtL9vm8aPe3JNPv6i3C95okBRR3cXycFXX",
  "key11": "swWC4R2U5WQjUKKZ2EpboLZXUGqWQGVmN9TTWYD3YWyLceYwZiQrs245J2FfUjMePjcHFkSrgwJhvP9Rci6Ssvi",
  "key12": "5bZkwWmUj7LMACeHosaMRN2gvwsaZ9H3Q7PJ1ymEZFZSSDaqSeprhexbYqNtpRqog5XJjZjtpPWSbWeqGPWmiTgU",
  "key13": "3sUFhQofVYgvbooohZ3DxssCUX3vCa1Dmuy53DKrFhZTLjZqYqXYa4Y5qAzXEEc1wB9fVjysnkB9xge8cJE8N2pR",
  "key14": "5kXGhHd9NgEm3rkbrPUd9CBHMFeWcrdXx6dP5NyDpMN3SgcovowyQNavE1FvuFpdKQtx6cjzKrp4wgo7reenepy1",
  "key15": "58a27jp3so6UcnAebFC8QXekbRP2C8maNpNahh2iBfWRvaKLBdgNR1LrgGF5raVrUXUY36RCFMbR5udrrxEikWSG",
  "key16": "45EB4wzpVfhBLfBTwiZZvZZAUxK5bCDVbmodZrXUWerr3KCgxSLeow6AZ4263vuxLjkPxMWdccUPm4pBbaWp6neL",
  "key17": "2Dna8RQMmUoxtoPsDnQrt1r3u2e8F1hrrF289QWkhTmcf5cfP42PoSw5J5RdYgYMBU7kVkxfiSnDPmh6JxAgaTnf",
  "key18": "31ja5oYMheSkxJch3CuuF2D1dbczfcQFKwtgnuxmuauTPfjQjvdbg4qMp1L3ZAAUj3ebPMa9SLSEw2TgmFkjv6RQ",
  "key19": "3ce7KDgwjPtpp7Do8xFAGcz2TtUeWUigKQR7X8ZZrHNwnijZh15JrTSUUwnqBavvM9fs1YD1W9SHbDTR77nP3taj",
  "key20": "5rqpxfzqVJDF28Lx7ao4mSKSiZfCSz6MpFYAyiSQWk9cYAEXE6hatoyDJkawzSgPw8sPeHfcXxYqQFpGjPg8Auvk",
  "key21": "2pVhcsM5gR13CQAPm8QyoDfEUbGsJJG3ut7rRJhaUtTDtgsyAEmZchwpkeugewKZ1osQz4wzRr2FDWYRJ3VjUxuz",
  "key22": "cfjzoktzsj8kbLAyfyFJTN6hVFyyaWuSNAmfCPShBkf1BhZsFhCgtmDy6fsQKs3Kh63Wb229uy5rnL8GckDm9ZZ",
  "key23": "3oY3GzVeDWK7cB2Tkzk9wJ4G8US6VpnHsq4PPfnnyWUvxKWXn2UzKC8JEXT7j3PoxvW2Pn9wsDwJBYnFyb8uPEA9",
  "key24": "2m4Fz83zS5mmp2LsJSKtiRwQ8GEfsnvLNSg2p6m75A4ecLjdfRBxoZT5FvqUKfKV2N44NMpP5AEn3M85aFWZSoit",
  "key25": "3PKsSjrpNDF2jZH58esTW3PHZFkrs2vkn6GBVq5XvHbJ4vcFLLUgxWVxsSkUDiwkChVk5XQsAZRjBAQndvPHkSj1",
  "key26": "4nDWFyuomAVVExT6m4zSe9WhbR9haewJoKTB7fNnkRoqE9jiJJ9Dmvq3gfzk6xnWUoLiNHf5TC1rEBcfY2d2adfL",
  "key27": "37HCzWHZMbTrXwJ5G8zSszUj6ZxbnAfaYQScysWcpU9ff166AiZnH5zExrmQ68U6ijEDnpuREqgUWSHnpxHgHyPF",
  "key28": "5KegHreCeQeNNje61S7wi4pvtJW68Ly9ZrQG3QpdTbsrX8JvYcdJLLdUb2kxQXwYDAQHsn2psPikeEmXwtM4dYWM",
  "key29": "2CQ77MFuA8Kp545G7gdjAmzeZCp79DqrpDM8ShkXHWXgJ6yRS75ei3BFxGupkig75YmqRygtDUMwqT1ENfTmhXFt"
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
