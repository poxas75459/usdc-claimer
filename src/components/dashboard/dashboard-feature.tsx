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
    "5N7X4zpkA6L8k8dYdzVQxcEBwn3JmcB7PGnuxeXS1kZdJSHuybfXGtX6BQ5GDDguoAoiCVRPWvTGXdzq1oVoxZiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CarPLmMiuLGK586jxAAwPxnDveb64MiS9B13Z8RKJg21piCNcHqHDavSxNx4bMyc4EEvBnFH9uXnqycsAtqQJFB",
  "key1": "423RDEVh9vknmtMroQ7nzhqsumFSCUcXdkFfgYrmNJxEnNKEJRoDzAzfu9aNZHDhrVafNAnMdtzpSpKcnZr5tkzZ",
  "key2": "2FNjQxywtFr4dAgtL13Fqc7J8zw3bfTLXsB66XEWJhPpH9Dn4dXV1K3oMm4cNEXQHQhrXFzKjvLjYd73mr277aaT",
  "key3": "5NUrgaP7Pycd1qQBGajZM4NvPuC88WKxQNfrCrJDQCfdY7WfThM7iUxwGSzoJg1EZrRcPASiw1x9EpbwayV9sGMj",
  "key4": "3wBJN7xjEv5385ercqjmg8s8bse4H2Mq2DTjBVbp1DmdkKZ9tMoYMHNTJFYVCMkmo57astrBj4HZz7JesTkY17sa",
  "key5": "2hBhr3VAc1B2X3AesP3pZxGph4jH5xbPHo9CTZ9CfMRuAh5eCnkcznBxfKeoVuCXRXmcbeyGBFpVvnJnEVV8rJ1u",
  "key6": "4LxdDXfe6dKCAyhf2YW4vw6TiCtApFUuVdjg7Q2muwKjW4HoeouiRdpyB2mCBZjTq7sDuEquEyet54468CWLzNoa",
  "key7": "2FZWzPDFVTzNarWmnxRc2BmzJEaeMCUVUkekBXPAmbQTkryGhJHV8yPm5BkUMoD347k5UVkCen5Y98RxsuDcKu62",
  "key8": "3rJ6eBaS89qC4JfDutXdY4BL77EGzHJRdxbcYWdJN9kByzfpE64BZDLJg47AAyoJnLvHxUqbiN1znkR7TokYFVjT",
  "key9": "3TCQfPXseS59eY9WPUD8Yrp713DLRKST7QHP3VjmDz2iQwoSCu1iUk9oDKtwXLXrqyiVgvCs7XWPKVXRY8VcnPPS",
  "key10": "228YmLfbwBhthh3XyjACtffggavKfRtYDfbLMmZf8s81M6sMLVeXWEwoB5N4SvkCfWHsokNHZrVUVwntUMgk4ng1",
  "key11": "49hWGKZV8zTgdoDhYsNrBn8xtB72sMjx82ZxjkCKG35LmK35trTS34C8CwfCKywL2vpgdfnvJmB69iD4H92W8jpJ",
  "key12": "4JgeGTqryUidpbotHXvTafCaPeY16c2AV5zMGc9btFqrz3WkwHC6k93CkcNh83J5RP7RCAfA6WBxeJdiiwFC3Lk2",
  "key13": "2iVmS3wqXYvi936vGS7KuUcA6A483z1iZDBn94DJ2hEezBhr2JBMyKF45i6i27c2y8fS6mti1Aez2ra7c6B5b2G5",
  "key14": "2ZrrB9JL9KRtvDBcCRDUjTSUnJuuRH9fqc2EW8LcwxDTvn3bk8pVwycvPgdEPYYbTh9dYjRidJvtxwo7aRiyfF3q",
  "key15": "5A5eZG9qTMusmugmPDE492SZ34Zv4FThoDmGtCEP4HdaaUqYNzJviM2fQmt8WuysrbBRPDM6y13xeihWpL9mshEi",
  "key16": "4oPtgQbGZLrioBLfCeDCgdqVEAFEGZTgeu3B5mcgw6xxofvHMxjdTsLYHDTiSzzeoCNPRxp8Xkq72RSeQAYojMbv",
  "key17": "HgzW7sak45kdij7WLCXCfbCcHopKM3ZUi9SUZLdwY9QuBrYQL7Lw5BZ7KcMd2V5AFUMH5toWTvKRQokHw2gMZuv",
  "key18": "66F4yCYme5oBSmTyiXtyCEYvQxmcBjpYmbZVtxfBpDGmrSzBgUmTcuCyeUmWAynqujJdnrCq9JtG25H88yK86wGC",
  "key19": "4fufJDja7yf55Rtod5ou4Zxs7UPDHHK4SMSugrcbUvg9MZgMWoWgPexGxSmpJGr7XMYKcj91ERSbfYkvcxtqMzf6",
  "key20": "3YJ846zcUwnm116JNzQg2nG93fRnYM9iTYbMsAEe19saZXh7T4iUPsDCCCVfddsiveU1YuPiNQFycLUgfewWJGi6",
  "key21": "dR1pFTy9J4SGJNgwcxvA7gxcnLcXFGanuoRAkkBX7ByNfYQ8o7UsCGTX2MfLi3k3DUFKHxsZjtKBHKhZymCTMrV",
  "key22": "47RNcRm6rErKgk9HsXeFp1AdNJzZttZVZU8cjxrRapYRrgFCZHzoQw4uVTPjEpU3if2Tb8x1nkuKupMVXtx3meYa",
  "key23": "5MeHNprFJ8PkuBsxDbc9rpKDoQXEYvMNXyaVjcbRvckbic9LHZV9Kwe6NscJfzDtS8ZTQR8y7faNwdJUM3RRcuRz",
  "key24": "5djnmsp2HEY3ZdN3VP49gFqFx434dXi7xNi45eFryXHmdJtLEgydANng54A1gAgzX19dvXoSpn2bNwgLLHVit2dR",
  "key25": "2kVjA5wx6vY5bDZb8Z7U2KTNpDYTRRUP5vUhNFQngBovvmHMyjiBzGrwMkkgBgaUJErBEJREo7fje6KpMec6YzLV",
  "key26": "5Q1BdVUq158WMFGB2ZtPkc3oBkmJjf38HSxrFpz5cY4zBYgWbRPudXvQYGyqQn4e6mj8rpsVWwbdGrmhFojgPXNg"
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
