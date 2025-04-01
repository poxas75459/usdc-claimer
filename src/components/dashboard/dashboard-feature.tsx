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
    "ECchFq1ujrbt98u2BwMkHiRsC3DHdW9kf9kaTGfSP5yfHjs4ukQDX1RSZHzS3JM7r4bqmYWSeFThngDcXD6huMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NXz8VsaTVELUUGyaV6rvq4jm7Sr3ZJmEbwEQG2oPiTZB7JpZoApq2gDMwTdHV8oxSTsdgeyig7pY8bHbkzBBDM6",
  "key1": "358jSwhEfwftdCFaYv8QwDfhGRSJWKBCJJsgvjTQvXjM2bFuo6tqTVjxCGKBv9wsRczLJnmD24NFLYk56m9DFQsy",
  "key2": "9TDac9moWYSZgcPrnwhg77x3s3GEtm5ctFKNV6vGWbyn5KTVadDzmAtomjhHMqJMeMtKeaRe5AimXJp8FvCgPqB",
  "key3": "24UzddBSyhfSBiq9YhTXtFZYo9wf1rbFYABKTSMgW9TkqAagQ1suY2gdqY7qP1ywL4NAUdDzsWjQ7JXSG3eRsmp9",
  "key4": "51nLD8Tu9nmq9m1XMBndqK5a9pzGwgRbHER4Apeyv52dEw2awpXanYkp6bCju9MPHZ5esQqMFTMDvtTiSDnrkQK7",
  "key5": "4miDRDd6SDzJJWrdZfiyxfknN3CPPEmtMgEjnYRBtSZPy8UznN8trcbXgxKnEMGDDVuw7kYMyh6hii5BPFCi9Xy4",
  "key6": "UkCiGePqPrEqMTBiP5bkachm9SFm3mvN7NTPKZYQS72RSJ9wiU8A2Ah3eLyYXWyno713Qy9q9NubKjug81gi6BX",
  "key7": "3pkGJDnDVt8Z3dYKgu6GYihGgNd3R78gbgCtDSTUVPRXL12YSCeqoqE1eQyjux5q7xHghPtPgpWxUm739JhkewsE",
  "key8": "dhdFTnfNRWfZHub5AkeP7RWPoTtCSvfayT8DLdZKYF7BU3YbbVnzxYtbdWdto58nConps2UC8rLGF8cC9FJ49Br",
  "key9": "2nBYFMmsiQtfYELLogtKoDopXZoNuRYotTnkq4aVxTqRwZ1XT5jxM2uBMxYXiS9aTtktY54urmQohs7aXLqeXXJM",
  "key10": "KFCFqnUeRmtgwu7sGXuey7yEEm1P1JBBcYXLKSofA3vpybEHS392KNbi41mt7G8hHYRSjJLqXLuCknFs7U84bQW",
  "key11": "3Jd1ihXJ8q5RhK6AfjHB2d1E26gzgZUTNwsfMg4PXcMD2WuL3YUv2SGeQcE2WCrsAPqNM8UawEtLiyUm3jdkFTHC",
  "key12": "5LY8nDCveQkt65WhyJ2NWT6yQTLMt7cenLr7pYUUPoQffc6rgFtJSWC96Q1tZRq7MxyHvrYGPnWnNSKzYWXEoejW",
  "key13": "5G5Zb9VmFZ6jGFJLwGA7X3fgVQ3bCajyCQWzxVgnSachzzJCWcymxXDEPDyGWozmiXFx9Hc4C25kz4UHpBnWpbcu",
  "key14": "5qZUKBNEGjdJBCM31HRWu9emtmV3rbpTF1bQeSRjHwCJLGabFBj4bxVJ9GneV1zQAsdtJtWvhx3pSkGAnhuMm9qP",
  "key15": "3ybRXfvTV7ovLWVknP7VZh45C8dcKFfsdEY6ounD9Vw5VyRPudCv74byKjAvS3y1bYwtueULcQZLJoXXuAnQiAUG",
  "key16": "47jPeAMZNG9LqD6AdkR5cJdz5P1TF8iu26P9NEC19f9KWCixBfgQACdT2YFpmJyJWTsJALjmyAbFpPadiPEm894N",
  "key17": "2EYT9mhghQSpW62rMUjFMJhmcVku3Znv8ZW3XQ7wxBPFFB6C4VJqbXZFArY97QffvLW6LDnq4iLiRgha1YWjyHB6",
  "key18": "4zWXyyh1s8g1kZ3iWy4QiCsoDEdBihpRdHPLvmcWGivgHqW1fBW4HLcUBgX4bvDTK14NpDkR6DxCy6GD5qyrmrcv",
  "key19": "2iakLfmAtW6g6vgqecyjnGoSZ8rbWnYH4WjBctGKLGHbqZ5ZTczh8kETyfLUFy1JGCwUh5nbstUZgWU8F9y7Dp9u",
  "key20": "4JB5GRFPBALGFoh9EHT6ccYUNWD8722FvWaz2BkHWsSxoUSKcczZYKUbfrNcQUh6ftLSX78Y112TqukYn3ns8EuY",
  "key21": "3bxwXNkXHRrVNQERcsDpW8HATWVdYb1SGX1r8udSBQvA4vjUeafi9c7bhAkbWo9CxqrJNfvpNwpokdz6CpGR7JVx",
  "key22": "48sCGsgFLJLZVJ5PSNwVP5BqahdqQXhTVouMbLPowVANAFSTSk6KfqnLyzxwxWEUqifCpMphM97jbqzbfiE6NDNJ",
  "key23": "4EthkEnA9cJck9JZhVBwkNeas6vvxDSZhKxPnQuAAPXzujWJgrnzRvZYVHipw6PtzrMF8btMr1CHYjh28u6h6x6T",
  "key24": "4Cd7o27B59xgprxMQJ34cF6eLBCyHS6J85V1TjWYLhFqnfC4EraTemRPrW8zuDSzoCk5T3fycUx9Q9gTCXv843Dk",
  "key25": "4tPoS65S51RT6zf8nZwMif8vpsYMhvHJpNptWyzc1kgML3K9qVQRMH4XSUTriWWaXBqhrp3sVHeAAwVffDK6Jfwe",
  "key26": "4d2MARU2iuCV4jDhxgfsT6CjPzAJ322JtQTMtmxvTTgfpqS3g7Cx7m7aeuxLcwDT5k3HmqdbiZr9AHKs2D13MbpV",
  "key27": "s4Lrpm65XWVukK1xYQS7QgJ6NhUNBohCujkhknABCTkkZxz1ZUzCRy8gKdP58crfn155twmDPx7LUiqu1LWcZti",
  "key28": "4ex7M2Qmiq2gcwatH44hAy7CzgJiPm4STWf3um7pFSJPsmhg6woxRxmktAii5eL91Fn8eENvT5RcjSHuQEg8Yue2"
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
