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
    "3ZBmNgFRccKz9Hm9PrZ6gXWpEdbE5PPt8avS2cSxxdRJiW3Rua65JP6RQh7V5J8isywrfGsPhcpquvE8jQ3kdHUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CixbeD8JVAGZvcd5RfvtToTG3F1jZPBuknia1Vhf6W3QEHgXe5k95xDzrAwvCJ436NFeRdjF4HeKaDmdPviT5q",
  "key1": "3yTZrVCoMnE1gmUqkCFwhsGHpfHCyxtWkwCCndRz9iVWVV6CWYfJ1EygbUhnZdhMXufwXa1976grsPYVSmpaRNKA",
  "key2": "2JmXdKofcRJdgwc48uApkWZEMcrsWL7WJEZLxzTXgUBUMtJPBLpdaivMDzn8P2Zwm97bVPSafyoKRyeqvUfKt1a3",
  "key3": "5abdHVb9EqUdPRDzYbbYHF3CuyvNv2jpWiSvKSf7QwF8cfqrgGuZBpXPut2QLqzXyeVBEcdrxsr88dvySzNYA6A1",
  "key4": "XnXudPBK9EecakfMv6jpL75n6awK9DnXJUB3YWoJoYpb1JLEzc1bKRhTQvknPPVxP8UdYdqDCpWXCnSRBJUc6qo",
  "key5": "5Bohd8DPtdrW7LDdNSEhE8tBbEm35VK5DP5ec8262y93zm7LpMZg7bpPFQ2dhMJe7FAP4Pjw2oqTKSUVxZTV8Lzx",
  "key6": "36or5U3EAXfFS5MhjpRdgok4N6qCFXxRA48di2zTiT6xqLnbzyb9JfnD3U5qKQPwUcjUV19guPvgPLymn99RgXRJ",
  "key7": "CpqxjyTeySm1nNMtEHfRgqXWSfKJ9kuSKnRnY5KT8DDoysohhYNCpPEmGogk1FCQ6cVjvMBSyQ8aecgFBTgCE32",
  "key8": "4vY445HjGiDcdGgSQ9j8j2aVS4MDb1NyipqzzTaTmEoosCXbMLVyqfRQF39aMbyRRyvUGCvuLddvuxexy9pFz1ma",
  "key9": "3MC3MFauc2QVnwxjNcjaTgMczMjLvat9PnHtJVx8f3Wh2yFZqZ1JJ5URCs9TkZn3E8Lg4aTDDSCdaiw9MEAKd77C",
  "key10": "3jiBXVkvnZvEQuFqX7EMN3iDZ5BnGguH3Z3HosAfpomUf1SpUYyNfB6iJZzqUd1FBYpnA45sSCh1wYwggDGRjnKq",
  "key11": "3wcsEhjwhexjwExvqfsfBBLbdgZi3YARtBVS39Jk4pCQ7QT9qb1vcbdwkuyttEpHPjwtXLYkBAuaCVkMTFbxvcHL",
  "key12": "3fnXYet2iuoUFKsWdVwG29T8FogaWNdbJm7wZVxk9LeTniXQgGGtL7ZvW7hHpBpiriCxEY4xM2f8m8JJRYaerbx4",
  "key13": "3TXyBtzsGn9aAnJnbJyo6UNAzW9tdFY1FTvHeDviRTc65ULWfuU1Tm1Hy9Xutk9RwxKE79EtmcrWLoR7zc9p7Fm8",
  "key14": "Btkfx5VmSHf1nAvHni3xNfqy5rtynFgdDiXqHj9NbxeBtJcqBcDzXzumG4jDMy1F59bznBBechetErf2BKDuz5t",
  "key15": "2TruhnqCQ3Kneaf4aF3G8ToYbh7f9HqtzzYYwHuAhdAbjqumvXtpCvVLgdq8G8ykAZbJ6Vs5CdECNBsbPgvKnhqT",
  "key16": "rC2LnCSsnHRcZxSHYPy61jmFvSbHZWt4t7VoxXtTbWGW6UpWwoCJGNaBj9jTEqbDdRy4RMHG2kSTYcHCDSV9eUh",
  "key17": "2wg7FXmhRBWFTb9ForTZNFXJjs8aip8yoKDeVHNNGo2Gr33JfCqJv6bYH7rUcvb5rbmuK84PGT5FEuWfHWUAjx5g",
  "key18": "2W6cDoR32JdcCNWMHUmxQkiBYEEd97tSgdkSZnVrPXgq6geqFjqqkhnx5AKKih3dPjx7W2jwawizvg1n4WzJKby8",
  "key19": "YMhCJU7KpPEpM395UzbiiS1CaZ2XYfCkaaoiyuR4kc6rGVYmfrom1sktwR37zoBrgR5PLQpqoWxcAsA4FzW8kA5",
  "key20": "3qG9GWfrj6UgphYnTuNENeHvtX5VZ5cbYhG9aLrByjFtmGE4QefNcvya4uLqh1VafYEtxLGAgdMFa6jErBWBXiw6",
  "key21": "hgNfXU9wFWVp3TYnrvKWHzNCNrfX5rTyaYYkZzeaBGbwrewXUjHrGG2QL1kncWNvNJ9k6mLbxmZxaEYZkbXpuxM",
  "key22": "5KKxRu3GqdVNHtTXbDGvqZTrLMkVC8wwJcXuFqy9u4tC9kAA7PDBB5KB1JWTumJ9z2XEZepohTz4GqEYY3nedYP8",
  "key23": "4wwB8iaaJSx9YV4aWp3VLbvJXgoBrQ4n1Bsxn8q1Venj2EcMVv3y9srrcrDpcJFms79SQ3Ccc1AGMTcsPdr5cXYG",
  "key24": "szqnUWbZPSLcVM5cR4AS9QmpkW6HJCprHL6jBAFNA6dFstzQnkkf2FTxPTx9WNx9PXqNjajxutpY38a7KgNujzi",
  "key25": "5wnmfTDBrB9d3udXtha3YYSze8YEpALoT8VF5U6Mi4RBVn559m7REgEUtTgy9XGp221D3fbiXW8nx1fFfmaNt6nG",
  "key26": "5H5QYwt7upiSCYsrzSbvZKHYBN4ouHdcmqS3tdvdbGjPZtpSe1sBSrw8N26T4HjZinuhWmLCtc8WD38QbAqkjHgE",
  "key27": "4WazL9cpwjhN9o4JMjWveyrvmMfdojZSnu1mognzv8SXvBP3ETaZqLPWE1pf85dyG1uG5STxCEYsb3H4xHUvhjmK",
  "key28": "4w7PhnLJHtGuSK7JEA8Hfsyrinwam6hcsGvtoNTwy4Esxvvp6TZ6VehKZi6Xsb3oHpDbMZNF1Zq9DrNHjJFdPTV9",
  "key29": "6jqXXkuMEDCQmnubuMSvk4bYiGjRDUeHyAL3s6PQNx33ik9KQX1xw8uGmTboJptrotJQhnjGXiDRWX6W7zBSVC4"
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
