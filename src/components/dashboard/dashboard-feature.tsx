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
    "2e5uNQr8P88Sn1P3qj69asKpFZgfheKRmxDeBKHD5DpZfMKmz5q5CLjGzrasYHHHJth5D6EUB2pjMWgJzG2m8Y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25apSGYSkCFUnWmD5qBApA49ZsoTaHTtNPsqN5ZLbZxmTttStMBb9HJ6kkp51cqQs3sCvZL8Jdpw7fq1HtFQCE2g",
  "key1": "4Nq6YsEe2P4VckgxcFP6eYAp1qtuJLnFaY9nPcN1TbDrZowX6Ny79qi7b6DMEJqMU1jW9EiySEPe8JeocDDb7yUG",
  "key2": "227AWtZTZcZ8syF1jzKTwWm5V4qDMb9GT9qmnHikcJQNvKVST2aXRNk8db3mMHuFpfimmg9eKbdaWyuBZ5o2qGCt",
  "key3": "2eZCU6wyrc1nuvkzn3yDqSyfD4fwNhTSL7taZtFJE3qXmJZMn3EmfG11XbNt9btE3VcZZJXQbGeGiKwZxj7ecZRr",
  "key4": "okoJbXJBXuCetYskDkT1UhvQjxtx52kxn5L7fwQdqD5nuUwTVFDUk744DS386vAcizFGA7n2jLDD3KK5dxgc3pa",
  "key5": "BHfcY4munxYH4CrT5NFQrW2gnsQY7gbZ2qfA85Zs5zNcKk3kL3Y4b5xmZbDoH77eSgu9XsQ2ENvPMJ8GtvQ6CVD",
  "key6": "3v8hE9Wd7TroZ6F2WBMnwnH5xkKwejfuBedeSyaD8Ea4bMAtK89K29WWcrRRYyShRZURixJ4wwH11rUM7tCgyyCf",
  "key7": "3eVRRpAWCtJBFDBw1nXacYDJQmrMR6qtyKoAjh8m6FbSNUJAx43caohewQku7EGBELr9wuohQinx3bCXEsV93Cxn",
  "key8": "2amWoVDumeFxbBPss1ez2PwhAvtERGDuNXWtWLUhG67TyJTeYkJCWdeXZCbkrW9HybcdMYo6LJKenfTmyHvxNNyK",
  "key9": "5Q1MwT6ZoNb2jK9V4gaEfduAqhoJEAmkaexwdcSdk3v5ziNhhS2uEG6gzPrn7vq8M7WV6MRtPUzC7BVfVMMLvoaz",
  "key10": "3rwy9m1sddwynedRJaG1jpYUUKRK2ZUA29nNptyQGpKEHBT8VASWEPAiZ7sAr3qkVYyRqDn7uVRg8KF4gRLP4bsD",
  "key11": "5FcmPJCRJ7XcXrhvAcYbbruh2L3PwZz4TQrwHnmsVQp3BzRTmdK2P8hwWWHawXqWaXwND8v4NvJBTWUN6nnqpDxw",
  "key12": "4CFszgUkAXaGSBXax68CiHjfPUqbEcx8fViVAhoUXuzVdxL5bm5iHXjkn1nDN4QapM6gUppFrRg4R7dKAygwf2st",
  "key13": "27MJ4i1CM58ULBZPDc5cbfZczBcnNJKir7HFQavAasEHPjq8JbTULbbWm2xVvvGUQsUKA8ZbqQUeEbCjQASiXMba",
  "key14": "hL5b2hq9618KEyhPLj8wWzbzZzHXiwEikQhx5hiwXVfJUUuN8fkeEsGiZp5aYCrEENHRP8Ng3LLLo33avpN1G3J",
  "key15": "4SyriEsTgM6SHQgFHBVL7EsNrAa3p22Z2j1W7kgtssJuVa4Dxv2z8fHb7DadFkfJb95jJ3YMCrPcPsKBobxjfwbg",
  "key16": "42vEsPkRSeoUwqgdQgRuzqoFWWpD7MJ4zYRmNGs1ykTTmWPLA8ez3kSb1G993mk9UKnn13vXstqK1rBvTKKVq1wx",
  "key17": "3tG5X9fByp7aKZ7LmYo9yfrstdj5KvBJq41R88rNbpiu6S4DzCCLqmM7K1UpVijF6NBzBSJ6KGH3EY2oE4K2Gn2G",
  "key18": "6sumd4xTaHYwyNkxT4r69kZr5G7Uv7Xhnr6yYmPgw9BeUqZT5XfJTpTyjDbTFK2gwK8vwTgJjUGEp5qcpWLzYGq",
  "key19": "4zyQJ2VeuvwZWKuf2VcX6g97wcLMUydBRnynCtW3emqdjEn6tCmBuDcCroKLkC7dqYYk7LMUoscuQFYkt14bnPCW",
  "key20": "5BdGEDFr8iUdSFNFFerFyYefuRUHUNkDbyNRCcuoWjFapzgKNYWn2mgc6Dt5jpQQ41zHo9na8GNrpShDkVziZBCk",
  "key21": "31qjQpcgCCpGpDja7dHqWddHGGz6RTTyxhYAw1un4Nqv1DuBBGnEdNyM1yWaL1Aq22wTbq3CFtaTHd2PU9mJTACX",
  "key22": "69uCwQHCtqGDEhhQJ6a6vPUdj5V54z69HVGrjGu3B1WcjjZp7R8RdoqjD4XEKSZvYSApGYvJAQKdpZyHyrhphFM",
  "key23": "3VSjhaScLNp7Sb2YJ6agtmBgs4mzo1zQr86Z4dSfDf9EJcdEC5LZAgMtmfJvuWw3UeqJJnFsFqRqkRvuDH7q7KKw",
  "key24": "66RBFJJGUaRXDveDQ1617WSPLoKBqDh2L2p5m3fkzVwdYKcnArqdfzbr8WViMgg37UQ7RFc5fSntkJnXPyYC3ZQJ",
  "key25": "22V31qKKhzSEMnDdYWErsGmgT61StSAuFSdqPdsdZgT4prHn6mpYcBUqbHSrdsr3uE7JzrX1TowDK4NvSyhCR9NF",
  "key26": "5ocut8mTgZdssquwqsNmddtBAonyqeHpEy5iCGVnj1v45XweE7DRqut9Ve1boTFzuiY5f4Km88TNeTkMi5MYXhDD",
  "key27": "J62wuVMvWhDFHtDFcttXytmnZ3jbdR4TNM7tPekuzRpyrSgJ8uRk8JsM7FszGiGiH56fMHHinfLiB934f4JBydk",
  "key28": "4H8txwZeWLkXRoxYwhrZ5KH8DYaSF6NUjY89SNfoNHF9YcdAapXignNwXuLZcu6dWNYnukQrV7BwdiKg9dJooKmv"
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
