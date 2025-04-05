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
    "3ZSBKAnZCjPCUhJiyZYBvuv9FzbMcUHBsyGkPa3dHtkXkiXxPW9Bukc4DYk5siTH9aeQwUwem3Qy9x49BatprZk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9n7r2K8fjRVKSP4K3T3CTeZaA2h5ZH8j4zBxyobNzRm2Xmms6N3w84c69LDMu3Mz1raRqQPk63J9z6yLy5jY1F",
  "key1": "upacJpgwXnqYcQWLhZ46oz4q4SxMPWjKU4Kcuo6dy3HBdvFQ3fug7DuuvcDbUze2SRmyAFVQj6GsSc2GZ7mif8X",
  "key2": "5rXG4b9TPyGwQoCHzHZn9hRtH7zuMBY7qXiDfYWvWZn5YUhtnGLQZ86jmvbXuR9cZ8SvpmECrxFpfJerk4fjh3iC",
  "key3": "4NrNajc9vYiLKWjJGDoo31XNpMAKDRts9pTB47Cx7RyJEB8a3ThbscvcFCu8j6x4jbBpDQGhgt5yKk4rMnPFbYB9",
  "key4": "2kg2q7eWgp3fd6K8rPbbkvUMjifQFugA2V4kGedE1ctZMZGpWattRcmy8uJZZNJWMoaSV89ZKWVidbvmmBcAvFG8",
  "key5": "23wX39cV4mHafYiZTEZZsPFKJ6uRQ9pJSKF37LrjoiYZzZD5d3iq2J1H4XQtjBWTyUcdWqrMdjkFgkNpujHB8Vjj",
  "key6": "ucQjHdbqag4AWkszaSnDJKt3XEyyJCAGFT3J7TpPpSY3YxxsHE2SeZ4AUhxa9Yrqw292ntvA95PL4nXZWeC2YF9",
  "key7": "2BT6CnpyL4s8VziXD2BuDUz2kPGcyg3mjLXJDyVdpE1i187LcJJ9QMGLV9QJL3tv4ioEcYWYJs7fFvcBoJrHpct6",
  "key8": "3Txkh7SahLDsH2roRZ2j8SqgCwwhCCFkdNkhpfTSkEfCXrVSD33kKVhR1srT3RxKb8T9v6hJZS37YwjwWG5r4fXX",
  "key9": "5U1K2R6A44yTVHFMwusKfHphaQFWqjeLtvRzFUShY4UXpyYtuvi54C4AncBQNVCjseXMmSQLGxWshSGHgfWQoLWW",
  "key10": "4bCAh4RpnUCQ93hWLZ9Q4qARsX7g6QPZzACpfbGjvFH6CsWQnsJ4GX5YU25LduKD61VVqp1FieySRp9a4C7rs9Mg",
  "key11": "2W1e1HfH1Vh4mwp6pqyNZsx6ao5byYRhj6GFcnRVM2iS2PktC3f7CXuWFAwtp1qzsVXA9bcTtHEw1ytn8GxU1ek4",
  "key12": "eLpYzdbztMK1wXFJZbMiMYJCu4MnDa4zbPzcyVKi4DJLDM7jAgRWXTU37ZRX3e9ZmAnnqwf2st6vXANeGWsbCzu",
  "key13": "SCcxKAFBU2VSLQ8yYSzfxTwZATXcmrysiSAvKMz4AjRSALoe4QQxKLg2brSbAUSTwn7HqVZthG7HzwpQgbnZycQ",
  "key14": "3ZdSUGzUWrdj3vU8sMXbpNbGr6vQEwMMFEqxKVRZXFveargCe7jmBXf46sgYdezBBp3TfrgoyJBvysRN4c7Qx4gG",
  "key15": "2E6BstZA65cCBSq67h7C2ARF2pCh6YV8JyMXjNWxSTAN483eFGz1XpzwFiMqEgqmaep7Gj9UKjdasFyATTU2ozfa",
  "key16": "3nnFagjxzC3M7r32ZhMPqgSfkqGgSo1PokQBDnqzZsjjZ4Jv8vcxZ1fJqkRUUabLkr6AhdEnPuhmsy6trqUoVJEM",
  "key17": "4K9q8SquXvnPFVZ81pgBK8yQX9oqxr5F6QXL7jJtkJQ2Y2qbj7yLKJEc9yTpkvAUrtc7Pv37JqzvF6p9L7PMiET2",
  "key18": "42ekKQVyr6tT2K5bhMMW5xHKCgzsRs7fp7kgqkgB1fHHBgiDVWJWuzkdzp9mX1oPpZVgGnSCDpu9Q3BV3yvpxRTb",
  "key19": "vpD63rJJTmWY1VwZv4Jj4S5m1xfQbPKFfF72qETgV32Ufi2qR2JStrxWLZ4NnEjXUVYP1jXNSnvuZ7wAcfLNx6k",
  "key20": "d5wmFfZ3nzEYM23sSLwkzv3TZhQ2wo7uefPhq5PBMW3bZnKeYzTFECNXEnqMf3ajZy6GvJUPrrkZ9FkyZNGpP2B",
  "key21": "2RsZSTRKt4WYHpP7H4eAH8G157FewuVh92PNJG2LpSShz6p2zZJYctA2om3Y1YFYubwYvgq2nfkwRAx6SXawM6rb",
  "key22": "CotDo3vESxg6S9eaJvGYML3jjqDtwkBpYwKi7V6cCoAVrUeSUuNoaDM4G7HcNCrjqjWCMs5z2Ya5aNSc9Vz8zRt",
  "key23": "3kB8wAqK8cms6UU31dzvdZZYWwKKhWMVA6d9cFqQ2aSF3VxQG8U6brGenQvzR8NomSRRkK2VNv7ZhiHczRSATR9K",
  "key24": "4P37eFLi96r8fR6dNV1pTk8uqK9qp6S66iARTgyrh2xsJvR1Tu8qWUjNuYjzPhCLXSdStV8dTQgG1W1PfnfVeML5",
  "key25": "3TJN5c4DBbmjgN7oS3LnysTK8yB8rCAriuqFMTbeW9MnzfVwqkkruFPsuzUsce9GgUkjruCHxChMV1mCtbkUAhZm",
  "key26": "2jhDnRCmrXYU7qZYuzk3Ad4TvH9TDP6p4rgo6SBatru4AU2C8tHVeY8b1cGu1rvM19Kr3w5NFvs8pJtJqwz9Z9ib",
  "key27": "2PPoeHmHYsruK83TZSMixVZkhTpR2N6ZMd6i7YYQpGWuLMamXeZxL8qcz5Yuppn2149bwWPpUhXebaRPXW69XDCv",
  "key28": "4wJjssfuZVhYAQZcb37XL8PcaaP2gUVRLTod3W7vpv1UHb3Wh6TKD99AzLfL2S7XwYoEv34MwJrht1MyBTmDoKEt"
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
