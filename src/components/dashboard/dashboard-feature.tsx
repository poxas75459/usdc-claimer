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
    "2uAWybhrtvfzF9ZaLQT7ooZEzmCLQr6UaH7rG2561JarVDym3byPkabdPUc6BBsqrkKPqHDdTcynybMM7Ukz75mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nMxYigCSpFHJ7JXcAyfAq6ywxLmuELzEYKMZdVDzVRdKZj4wFWBE43AVZRgVGiwnyzPZ2Zst3JMqveeii9pFat3",
  "key1": "4rxHAru48TynERBzhiygfEh3MweRamM4PL4XyAfgkGhsC3GLg5srRnkQ5fWyzgwbN4oshX3SRBbYUFwYv14AfnAj",
  "key2": "4BfWE4JA2UNx9SqzYY99ykbXGyv9h1EJhzH5qwKBgaCCSqgxqq5hFaYoWMCcG3ujtDeJV1pCzusdwi5MU3HckcS1",
  "key3": "dd96w375n3ybRFPo8xYcjw3ZAwjKLgddozutS6eDvCKiBAbKyNQ3CN1Gn3FQNiqpPsvcNBD5U8TvefvW54oVTsb",
  "key4": "26z9G38QNZcSBXza3spUKJmaGCmV9bvXHAjSLPtFuibvcgwK7xYoWzb21Mp795ExEj1RVgku6xgn1pGS7Ujfd33g",
  "key5": "5L2gKRTtb9eqHMvtPjoUmfCmjPDDGSPu3qRRmGg8EHLxpR7sNjRneRMzZcuoxRdBTEKXgQN5pPJezdQXg81HgDdj",
  "key6": "59LbeLBRiUqwKzjUYh2WZZt71Q8KXjL5H4WtHQiPRsGPg9y1C9Xex6RjBG77pqf1trdiZ7k4tGEeGp7ymWr6hDCY",
  "key7": "4cRqKZimkADTMwzhy6UKkf4CNukMWAp6v87qPXnvduQN2VsP2oB3DoTmnzepwAKLhjN5Zi1Bka75TzzAwPfGqELB",
  "key8": "YtoZ57D6mz1EAwfzMrYiSbiL4sG2QhKmudFJJc6QzACyVvRc23GPWGxQfdveJrHQgu2YiinNCdySPeVudRfVdA4",
  "key9": "2oiKGmk8yeQtEJuDqiRmjYozDsjHgutT5PwCZyE1YqKChn82Dg1sT1MrihhC51F5dwJnu6rqVsK79Qn9163JCUHg",
  "key10": "2oPVBkYa6FrgihuxuhMcn43FXsojjeTKJ6J3nmZnSP55iAYbN59pypnZeLDP97BsUmhb83zMbs9wFXKxq1d9tVkh",
  "key11": "5fbW5m439qS7nFZcAPn7MidMVADzLewofAFFsBhsrHwp7hwYjeJ7yunxoNnbPHqxY2rY8fnHqT3KS5L7eWkfwkxe",
  "key12": "2vpcGebRRg9FNpauEydEyuF2o4QYdgaRaesGKnzyJRG6Jf6A8sJjVxCkXXWreqjY3qJZVPopiynCJGk6xcWNjHjD",
  "key13": "GByuqQUw93FSBa1YQa4Lx1JfE2V1u1434qo2tZmBSp1PH9ddPBuqv4ajwJin2aPYzYk6HkJApdMgjrgm1kfb89A",
  "key14": "4zq4shiWK9aVLsw8cRvKPVQaNyLjZkCSc9B3H65q37p4AxfSfjWUZLWhZDHAHuyWaPEHHNZr3kp2yYA8DeywdGvQ",
  "key15": "3VuSPqBZDoPrBaREJifyBDN7YDvxU3AX4gpXrWyeSyA28qNzecBh17J5eDGoB9C6nUJQFpMjdCmF2drtfGzECRsB",
  "key16": "3QT6VPVcdf3ikg5x2d72Btq3az7u1d1excW47jAE6bSrpJbqPSNs3Wh6G1nEVkm5mGnak53Xzvn9S617cHJZRYRV",
  "key17": "4NbcNhCLGjbvQR3qgLvpYTXLedxSpYHjZQRT8CoLqB6QytBmNfeJY15L3rGvbJf6pWeaLXYMzF42VAtNqCL2QcQ6",
  "key18": "4ipndTmHenQt8KfRPxRWestkne6xB55v2KKhF5s4P5eu1PUcCJ6JDePq7Vu9Q5FecdWQvuVEsWKa52hBfnkJNtNF",
  "key19": "4tz75yr8ozg125GjmP3rSH6r149a7iNTsAnFQL1yupMAHfQ2tPNcpxgQZqsf2JACd6Vdu9LAP4X3NeMpGDJ9Y7BX",
  "key20": "2o6rmHNCgBVeYxyxHkw2NeDrs9wGJveA7YCpUK2dzo6Lfxf2wCBTsHGtJyGnUicS1gQScEJ8wEyYcD7rvNjr9Qk9",
  "key21": "5GfhvKx8hzAk58MHQyMYUMmEPJdCRsiUEKLzygEiWxfALySf4cqEXvFD6XEYrDLxvdJ9J3rm9Bc1Niy3WLVA9Mva",
  "key22": "51QLkVi5yc4utMryMuxCa3y6DZbS8u4y6edhC9G9cosg6GHnQmoVi7ZU4JtSc78w7BuYCj5sos5iE76vatuXUsAS",
  "key23": "pWh4QYsDgboPvRNAdaRdA29vgwFpm2YeS32GrmyrQgcFhVr3XdTrdwyjDfCBCn9UbN7BHV4n19YVQQYgnRdo6MT",
  "key24": "5Q1w3vQbHcDGDCAhUNLudNn71JxHxvrBe8J7PSmE4iDrddcRJg8BuF4vzJhdWPJa4VCeGRZJ4CHcQ3HDNHZRuyHN",
  "key25": "3JR8pNixds9QHksvkxV95p5P9w6AH5xuzsRQTYeuYXpu9uP61QLWbxs51AgFkiTTVqmAL9bNHjUiMKcu2KeZBfJg"
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
