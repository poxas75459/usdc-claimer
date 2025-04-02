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
    "35LYMCNKFi2tkSTUGzgnEAzCin7uzfthJR4NiZVJgsUMMU8Z2tMVoTuXKfNPHhsjgk9cp1aWbAoro11QcGg56bp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gQafLBf5DwmmSRkzJXQYxgEdXb4YbeVW7r66pqpwvJxkVHHZgHfzAzEUwpJFf8Pb3v6CH8kYsipVzavLY9TpDVN",
  "key1": "3zfTP8HXMnFLge51QYB71sx2A5VsA7xT8is2z6xid5uMFc1q81xG8EgmoDMutmPdhQoXma3pbh9XTiNPnQXiYvRr",
  "key2": "5zAPzVQUe5zFrt58K7Z9gHaMihQSEaF34xG41Q1VrYHJMchkh2N6h8vPxjGdXDFkttMHvTF8UbP8KUXVn3tsdb3W",
  "key3": "3HpDnxojdUv3NHnAPu1h2HdgxkqdcLtw7e6LRShHgNcVrAMakv1Ngq6wvZLVSmVsG2CZi16wn2syd1THw65RWvsS",
  "key4": "3NaZnAkZRq2xvbigJ4BUssmBEemggMruY8XYudP8vXCcU4QoD5Q1XNEJegQfECdTaH5gKzsSskjWvZHrNXNhS8Fy",
  "key5": "YsGsPGpknArYj9S556zjuqeTrYjGxmP2LJuHivrRNCrpGWBjga7D7Tofqyma4VzvTtxJHefaLV3CGy7PrNDkdEo",
  "key6": "if6tcVBdYwoHJUYUgP5SgRJCQTy6akdCNro7KpQRZ87wkkm2tRwFJiWAYpVfNzN7VxLuU8pCV8jRWRmPcEBGwKh",
  "key7": "2BAGa4zeGwirrD47Jsdj2mrURChmLHyppWkTxWN4hrPsB4m5NnSyJ71x62KriDin3RVmYixsXfZD6FoPi3jVuyuQ",
  "key8": "5PgkYfUQ9ncUNccSUir6EDjkdQXJQ3iZN6SGfvYkgyorQxpgsr316CD41LeFvv5fkeqLEQJ3aA5Lrxa3Tw1CZdLU",
  "key9": "2D1EJGSyjDHE3uBWu7TCezuLkrL6y9qBwVNwseLVGN5r41AcDRKZ3hpGWHm48QCoYR6Ep9ciAXSaDCUYYgwTTZbd",
  "key10": "27aVacQkNsaEiUCY4obscodEjAxfjWjwmsgg2xD1CduWfvhXQLoDsHifectT5Gzm4re3uwDHnZNj7MMj918occp9",
  "key11": "3DVcfLvapgCtRc7qLcZrdh3S2fEU5ffN3Tt8BkJRG43KV3FF5QrRAs3vkTgAQt4ftpqR4vjqCMEc4YLExmVEKjdN",
  "key12": "3q4HFp8q7XeADc8cdKgNPcy5c75SNnw3wcu7tRFZmWdQLwXkMFed889nTdBYhuPBTFZRLMXv1cpxnbUt3DrS7njY",
  "key13": "2psQA8NFYxXoGPymscVC2T5CUntZv1rZ6vLtQcdQFvEx1wvxPkdgeD2Fk2W3zs87M2XyDx6YALZ5QbvsfmjoZpen",
  "key14": "5UvwXkgUAhByhXDPxnJycGZPY6BmUtFpxK3eNSuWRPCEuLRqyxV4gknWTgVUjZdG1waXyCeCjMVqcMXMSGZagcWv",
  "key15": "3EoxwRiTq7PFCxXup4WMhiD1Q4WpNhQiARPeMs4ujv7XHWUgpkHQnTFEwXTgmLahX1dSGdPkmwoDCuJA35GAypZ6",
  "key16": "4XmddBwSzvafX7TJsidfkDoyqYW2z1pNCSdQ9oszCBLFPAPSEdSM8aenPF15Lti1wc43D1MmikCQDNYWwqryL4PE",
  "key17": "x1ntWmhk3DMt2eiZXw6R6vwAUAkXDnRCzLr6ZSTHGwad6bE7gopGsWgWJrcj9g2yoUhxVk7SNYVxepDLDzeHnQc",
  "key18": "2gCZYUBaxEVPtsTzgnkwnQy6mKKoD2w7ogfxLYnarx3v6vJndq1kVixm5oFzpEJBnWWoD2A3TF9epQjK4HujECxY",
  "key19": "e1JKDZi3m3GSmd8X2LiACHYVypH1wYBXNL6w3yvEEobHRRJnWfzPcEX3JEMreoGJbyHQAUDX2Kzm4Yw9UCTKLff",
  "key20": "5TJGEF3BmqQ52FNdDScegSEPTv32MubGwvPxXXkJrTUFKZTkzFPmt5u5M58boQt3rEm5uhgyoWppgXfW2naz4UMa",
  "key21": "27uL2mVvwKLQp6aiymcefLbnb7PAieZToUe6APC4xsZzFQx72LRp8yiDnFnbKrqFWp2i1fSPCx6R7YXXdGkCr7jU",
  "key22": "4KMvg7JMsoJEoqXum8FXt2jQSjNnBHUeQSw8ZWHNENTV78yVD9uJ6cWPgrYcFTxqjVkZcvGYvpghzpoPqxG6veb",
  "key23": "2AH9g39Cj7ghkBNAfgkFgKV6mzWLoENqx2zcFgRvcb7aKpe8cBoy7JUZbqLjDtKTWiPQ6qF6bcYAmzFyFwYsgnrz",
  "key24": "i2vH4EzGj6cenvPhar5Gkf47SRBHFdWaE9gipNGQUhUDc8sZggMiBUThqMoYu2CSXSKjNwACeDL999wzawACJ5n",
  "key25": "5KfDCb4SGffUSwoXo33gueEcamS6bgueri5tcbnGVYSpZGjycNYCYgG5U9CPkPrY4DZAiAWCa3s7Fegs6oYjUKdD",
  "key26": "2mkKw6wB1svoDQgMiR1VtVuqXvcGEzeWk1biv2sGNxothqAtZZ5KxdWtDhHkKeKHBWNdppXKmtu7bZCDLiyRpZMj",
  "key27": "5Acc7D9XZ4qtPSYaehuAR9Rz91US9GdiVPD861pvhtzdvYs3kHfmYbveeuSMn43154uifPoV2LJXdTmtv6DrRa5G",
  "key28": "5ZWeQUXZrVRF5DaMra5WD67Vv3utB2B9BVTCiyUJvdAYQTp6RpdibZ475DxQnZsC2Lbk2R5U7AjfJghToJ9Xuxru",
  "key29": "2TsFoERNyforMQP9z4bU8oiwch7uzwV1dQrtDETbYNMhqbhmuY6HErHhbAHMgrGRMwVHdECMMxR4YjEf93AwuEHp",
  "key30": "4BVt7pvpoSaZMiAZLoorhfCiHewYPMBRcqsSJCDgkvURvTQgGEpwWA9VzmZfSRWRKpPWJHXRLij2WUtNK4tQohxQ",
  "key31": "4nDrhudCUY26kSkXemAcZZEiNzEXp8yyxKneNAvqeLw7PhUqYzcGxsjn3PVtDnXv89pw8rUDjG3j8szCFd2NATiV",
  "key32": "313FRXyxALWC6ZGFyR7QJHSuoC91y4pkoMuh5B6ao5rDVGPhphdKGxqiKTR9otYWnRtDd84aajR5P5ccGzTmjmo9",
  "key33": "kQ4m9fHeBxeVVj9yj3veZN6cRUZ9tRFX45Fs2jMGpiTUvaKG51gV5jQP8VkBxK89NinwAT9YNLqhDL8ir6uRmyG",
  "key34": "23gMFJEq8YJaHxtLb1BkkQ4A7DEvYLEpjmoBEqyEB61sqy9Zefei19XPZUYozRF4Q5SBAc3hqvggU2r6LXAyYjFj",
  "key35": "2feb4SsTPPEmcR5GRutkhNtvjyFpQXm1vVdXfMgRJLdVUh8iNRLpWkTWYc68vVXrSK8bvEmD9TwTdTyMyeqytBDW"
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
