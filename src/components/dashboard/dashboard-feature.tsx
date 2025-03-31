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
    "5iuWXry9gBsoRPYFGAge3VRvdU8GpQjxU3bcrndVwE7iWmCQsD8apMzcf1Roiq2s9LGC8NizkY4FS3F3J9FJWs1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38sHxjreNwZb6WRQPDcnhS163yDj6vVoSMDpjP3NHKMsHJQD6GhdXh8pvGd9vzStHyjT1yR3pfRvTDopc6qHY5zs",
  "key1": "pigLAcT7gH2hi9Vk87LgaqCoAn7rGPed8bFEbyTfjaVx74yfboJYFz4gAieo2gU6AMLgR4S4DWPCnY8JTfSwZpZ",
  "key2": "2GQEUxAt7EqbNzVsVb4CtHRedWTDskB25uoDdEeGTXYE78paR8xWL7ABNXTagBtPjvL4aooMFcNoPJ6PuXeAPnFc",
  "key3": "3qBxgknAShUfEXz8gZoH8rMhzbVhoJvrJjUrzUFYdXcdG3sBD2aUJhRGTpFH9STYcZBeqLFkqHyKd4KUyfdRJYa7",
  "key4": "2feLh8BrzxPNowwErtJDVQresw7eyigWo2NdyKPacBpF6HMu6XKTaSGc9HGTDbW3g3y1GJ1s7mLmSLGusxQ8EJ1R",
  "key5": "3r2pPX93udb9TcsWWb3CSB6YoUGCUAH34j8rUcRVD4X4jBMhSAkksEpnsteauoFhCCZ6bXZjPyLQYuHCXrwv6pRv",
  "key6": "5iNeNR9Saq2qEP8HYwAjidtjxV8wXTaoD77cGQ8TFtFRGLNBG6ULfEGtFANaT3RHNY3A6oMj9mcsgNSX7X73AyPb",
  "key7": "qj8hz5BhiA38FzKq4JWXrv9mwgE274qHbjaPCjiW2Phwfq3ri5aBA4hDmnXLqYpK4EZJiV1hx1BZT3bZ4KTCSz8",
  "key8": "5UkNDy1minpJupnQMNPZqsa5opdMg9Py3iHzuS6PjyS1QFBXPDebxKZV9AW9nUu3ZYbQZ1gjRbuLr49Zgxei2Dg6",
  "key9": "9bkVNcKEtjZuS1bcfDqc68BiC7xAfiKhUq2ATcaSCijCgVMxKa7RSpDRtTSP4gBk53GzADQREz2pEiENNZ6Djf8",
  "key10": "3AVF91GYt37dHwA8jGdSRouSaY2EJEqZz4PSoL1DHicxgS3KhRrga3ivi3EZ4bDYg3j2dNFdoeSx6h8PsrhoXnwB",
  "key11": "4YqXUKYVWWrurz5ZB1hU3Frh15UmrmVLMd7zaB74QWtop4CXBPar2RRYvBGgk8wYosiXGAhjDuR2mNvbrpw79aZL",
  "key12": "4uPFirNqwTDM2LVrd8RMR7xaz3aqgnqBhCdezFFq2kkpXUcoSsRrCJANjzh7cbRtCTbYYSLNBDtxP9cvM47nAEfJ",
  "key13": "4aKk4p2XJVkwEWQnS99KQVFMUXSkATMJVFhAuNXWJ8c6v1zVTdxQGQWVkgPVXJkftuNnjrXqVSZeGmnKDvjS9Prb",
  "key14": "3QhHBzWu7xF1y8JdjiNq52WxxNPFeVyn5CMa47di6zwWP2QhffupE13xvAbmbp2EMXNtdhihuYrtuW7uNmmiUHW4",
  "key15": "CQF4B7QqMDhTF5VU8q4Vyg2LUG5NU3FxWXbMT5esRMR53EzgjfhGUUogc4kQiEpmWKuoRPCbXXf5R7P3WFf9uKJ",
  "key16": "aAH3jRGbpUhRcrpjRtZTNrnopuSkQXWArVpeZ9MYsczoTd23LTwdZyfu88iQ1jmptg7b6PkjmhYjPv7eWxF7yqN",
  "key17": "3DY6BTMyMQvCzAkvffmdjbJVtx8k8V7gVV9SjyPDHcknqapKHsjWBZHEPXh5xEGqfnhUn3Azvcs9f1MUS1rVEvwB",
  "key18": "3RFzEKPsH8HfwvtjH4yb7GzLMejweVVyyciuXuNVZX5BFBZBPPvdiwnDbbQr2xFcCZeeYsMsK5kjzbbnaoJaimBG",
  "key19": "5HyGHPQGgj5ve9G2MDE6aUVuhz7dTnATsCtukBkZPcphAFHisBYoD6ZEY3MnjYZciDPkoeaDwjXN3B17qi9yjW8F",
  "key20": "4s7GbKXWNYa4z8E7UVSwywKpx9rU34W1VwzMogNsFMPtUdAhxxXTpznyyCy7oF4Nwmoxdhs4RHWvweUrGXzkXCdu",
  "key21": "29iWiRhpuiU41A2JKNXUdthpqbjzvJc3dhdubVuAUpgQQh3BpRypdwPR3GHh8CvpWwV3uf5RHNLfqqDzxKd8ag7w",
  "key22": "3Fx6357DrqhmFbYBG5w4nLqwtJQCz9RigNJDohVgchENdK2v54hB3wKTJxvrM6iQcVWefjTTCsTS5wroEHfXVnhL",
  "key23": "4MfoKeyumE1eHkC3GDyAywWwZWJXwf1XNuEQWcxfHTuKgisLUGnHzamjRU88jHKt5G8skZYG3z6n7rLSNdc7Ugu",
  "key24": "2HNuAp2TmUTaEJa8GUq2tNKXKLsYrN3e6Fwwgx3fz9QH9oBraXbbJSuTetuADQcSXHrKC8B7K2rL5cjwCqvTB7cA",
  "key25": "2X9Tq6ArB5ChM4WKporkk35tSMboiHwZYPqa1BLiau6dnE7b34Sr3Js3gcErtzFj4hC6T4mFt3tMuLmsDCDgdwcJ",
  "key26": "28s4NtH7frJWJywVgMccw2UWAHyDxm6UK3NCEFXeGdGZdu7KYw8252nCtWa4TdxLQq2edrDSdR1SjF4NaBFcovZE",
  "key27": "4v75gAnRdDXBjeMbLHVsHHshoLBrzRybTQJNRTCTQUhgZD8CKypju259GpDHFraqqzFDeWNvGXvkPMtiJBD3DLZu",
  "key28": "2EDnpJ9NfS5t9GXuE8fff3vZswtwvJRnYKU3yT6zoHgcCE9qzSV4L4pcQa6UJFCQ9xzMVz23RhpcHENx82e7Y18r",
  "key29": "wc4nrSmJ7R7zhAYohKPS6tEAk9EpW1aGUdX3LR7ozsGENf82mDMxMmxgArmpGCSJxGwcDHrim457MQ488u3tant",
  "key30": "4MmqBH72yNMKYkU6q7sq2xuRJXdFsAjZW1KwdzDgTVur7AsdAiwPoRTi3FmNepz4GqRJfV3azwFXtns9ok8ZyZzE",
  "key31": "23SWeSeGR7rtZT3EXGA8qLq5TTzsbofyb7cCGLuBjJK4PNn5PoyuFRXkqT27ouQCEzZxYwPGU9xnmTtH2o4QcH39",
  "key32": "2UWJhKavJBecMEMRiED6CXQq4ndMasGESNSK5ZzVURzwruuUapZMiE7eFtUQkEWgfzH743FxrJyydJy12x9FTW1g"
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
