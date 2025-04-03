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
    "2nhJw4E2kgcokWG2LAZqudEJjE7WJx4EjBAkLxHQwE1myGKKBpaeKutKFpKLj2MeqTzmK4uaRTieMZuSPLH3U7q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kKqrhow5op4um9twP4dadu9ERHi7SfK3dMgqzJBJ9meYYiimkNwrGKBQvWiwsNS5AJi9ehZxXJPK8BweufFoj5Y",
  "key1": "4fA2ZKV3cMgXXRkFPayZjwQ1Sq2NHomz36bFcdU6wQxr8LAsmH5dFKBCuHmAjmV8rQLpdYixdMGgJJhf7LMDK4rz",
  "key2": "4yWA9UUQEJwagmBBywetMmhy3cqDbrDTt5XDtDmawgbePfQosEPSf1AG2AbtVnqF41b3bgQxihy1TdwbEqYZSi3j",
  "key3": "B9SA39DiMgu69ot6M7foBKmFYnHqBXiZWax9NcHYmQfiAqqsPHvJ5rDRRrNsywbvXcNfnPSynx1pcMc4Xy4CfLF",
  "key4": "2KK8wFfCNfj3xHszWWbJxSG9gQp5WKGdi3CjJ59Fr8zKujAAV5Y4zWzocn4ZkcfrChFDx767afak6GkWPbAJr5ty",
  "key5": "4sr9t1mfVstjWn1wn5xYFPJXHrD1nkRRv3hsckLw98d34kJYREEZJa1zzHefhEAdeJ4WoPQgqbyTj3MHnAxDhYL9",
  "key6": "5GpMnoHP1EV86TRxu1JfkMFXYk1XcavWRxaDVHJEm1RsJKEn2SSDtBVwiFjw8tvp86ZKGeJqYqPeTw8ZbMFG9ZGU",
  "key7": "4ecZ3gBpuYGQizQeSn7VY5FQvvn7hJtVmS3WnworsX6du8Q65iFxEuUYPfBfrttaHCGGxUk3AW7Korq4vg4bWiG9",
  "key8": "xZ8X8Zcmjat5Y6kdEYbhfuWsH16CGoJ2muG75sypicVPq1Znz6U7UKGBB18pLE9sEu1ZUSuSBSbVDrGAyXhiwD1",
  "key9": "T4zbo9kpmdZ5aKoFTriFEaagfF17zqSg7xu4KPjdfa131jA6CMcwU4hi8JzEWcXtNJB7bCtQytoiD58H4oWpWYM",
  "key10": "YTb3dr4XNnr52KYWGAGCodRtcD1CxGN2iaArSUgZJ34gC9m3gqTqnnSquHXhCbWcPLNjP5ApRa52CLnBdUXpACN",
  "key11": "36PqhtMcjchuHNBi5SUFVWxn3w25sQmsEfv5s8pwidpw6jUrba2ev8f6Lazc4noszZqLphNBxVjLfuecPr1oT45E",
  "key12": "5oyzvtqtc4qKjFXyx7hcUYWs4aaawBadJQLVGnfe5UW13HR1y2qo1qFaPVBLU2qovAb3sLjVDQWk52nvdCT6W8dQ",
  "key13": "4jq2GxddPt8dqY76iipScNY64nVKUKs3CudQgAyTxF5n7DEYTj5mUuRkJ9QNsoWc8ZDVXUqBYJrXSwz1eANM8Ge6",
  "key14": "3GNdbWPo1zU2PjDhHksoJFvkUWuqLVVR7KmWLttWo91Uc76VeM4qGS1zECi7oaDExM45k4bUwTjcfPwuLqRnuuF2",
  "key15": "5ycpBnWHHmVFTdWAU9zndxC2UY53KuPocnJewNdZKXSerfeKuHbHkPrBTmD46gNfuvsTv4GaNWAejZ2up6sU3bcm",
  "key16": "4CuFDf2XNbzjfKynLkg4Dd8wKrgqDbb9qCNXYx4pwPayT9LmYtorHh5u9dME5LjacEjoDwXhMjWh1GhnuzfaqBEh",
  "key17": "3E3dFZ2CRcUmPvzxHDC8tWgEnpMTXxHQRgjMNJwTYETchmGoEGhHEV1Yx9So6oFap8U3H4cK1phoMB7Ru6wf5i2R",
  "key18": "2UPB7c48gcvUayQ9swXv4Gbsk4keCqxFZQoDL7kVc1eTE8Yf29MzCodkMvPo8Kig7NpTt2RBqWiMhS6GvKuweLXq",
  "key19": "2WxL9FrDFGFCmMGUzSUVEdTHenL6Zs6h9RwufQUaKyDgWQV42h56Ga53bxrXKix35d8m6VmJvpGwyszWd9AyBwKg",
  "key20": "4aNfp37DSSDNyCPiGhoJ18GcPKjgSwvNUkuJPdjCYSMhynYGzfjUwg7H1bf4CHqRU8GTaRBeeTC9BBPr4TpgrxYr",
  "key21": "1fGXcWbZNpfYZAEkcBupdFcTsYNwGqW3JXC5oMyK8h1Dufnc9F1XG9qGTBHRhoNBfPjT6wjm1rX6ASG99RqfQeA",
  "key22": "3DNBV5JW3s1oFa2Lrrzkej59YqmyCZrvYYTCWLdE1D9vWizgF4WKB78pt4f4LdBoyZReyByjLvi2RZ4WAyDZVDrP",
  "key23": "3YScDXccWys3FrV3Lcn4bGkN7ABp5bmRCsRMUGUP1mMPzWW7B8HpCXi92sd1Gv5HWjPeX9etDjiQrrb3TshdVpti",
  "key24": "a4GSRtmCFRvRUS2XLDFnrjPD5cM5HR8fQDzM59Bt4H8igoseXjRZwkudM8DioMemQTZ7jLSHDurREvudk4xyA9E",
  "key25": "2BJ76D4fYsM6nC4X1A3efxcnkv63AeTcxwPwt37PRV8HEHVZ1JKNEvhD1k26Jo6PHgfh6rTxC6a2sjd77HoMgkFg",
  "key26": "o55S6R7rUoV2iyCd4bjSqVBs5NKrYUgBJDdjkRkQceZo5wiWAw1XCaQqmkLZ8VrNjFMB4cFMjvzBjZTjCibq34Y",
  "key27": "3KU1tnLLDSLt3PWspGbMy8B5x9EhTDryQcKmb9yTZ3VK9ZeumsBAihRaDni5JQejMZGtoi8zm8duKjSJFgLRgnYC",
  "key28": "4TWvFoimbyfQZgiA6HfgCp1Jr58VbLSbsKs7iwYc4b92LU6Te23DHU8KXWKLMw58GUDTaHtD3qY5u6NWFiweZdWY",
  "key29": "64urxrfs9x7V9nZ8cbVCYqNcaV1LCWsyo3SRPUNfrBe88S8F5LgHTyGaDCZukuHobZJDNdjL1iye2sHz6q9Gq53t",
  "key30": "5z6CYN3zxciDatJZW4ow9d1hv5W1ELWsp7QTWruy1JxceA3b9ZNhMp2aXyuX2GsfCvhmXNA9Rk9QC4M6HXPkbaSk",
  "key31": "p2DuFtzgHuDxiJ8AjDLfvixkZ4ihKpMXtGEA2yjtUhe4KxztTeMqPg6toQgnQyTuBW1VQ18FbQhXKqMsnw4Aowz",
  "key32": "29d6XXX1j1kitnQt9X5sdwc6jAm8Xq5AoyJ1ugJ3oDc1k1AN7QGaBqZMHfrdzP9aGiZuBUr91JD6FH5x4YowCcUX"
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
