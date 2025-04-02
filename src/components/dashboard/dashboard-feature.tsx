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
    "3szvvnyYk6XwpafraVwg6i1wfuwuBuhSFBGW717pbtsxdgo2ZTftbSgWqwga8KUqzm6qwgJ7cWJHVCsjCqpZu2Ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6hmzzXCnaHm7tGh559ufUsbQuyktbr14bH8TFvum4pWkcjxY8VmhhUcMqh2CgmASBX48BhVcL6uJixF6RhFBxk",
  "key1": "3rVeM64ifsNqVJhjvWGmhaYikDS25RoD1seM8b3xf4JfRxhzB1JTpEUD5CfsS5cZwVmFaH4GJdoELSjENrLVQDvq",
  "key2": "4CdVsSvXyJrZC9vFRL6CA7FJaWyivwRo66KWYPhZttdUDfMkVyYj5kEgetaV31kLhTXxH6mq3FVXE4Y6uqTNZjg1",
  "key3": "3xDUXHCkF5n9tmwHYsft8pHqmCq6rwuS3xnFoLRpHNbMP4kFU61PMhiZtdUepHFf2cmrUxbKyNjHQcCBAJ7cAdcw",
  "key4": "5YTNtC9U4JLhaUGvL58K3YuxBSdPaqakJbx4GFhcosCTg3Lzi7UxmKbZCjUHihzKjPg7dBKKGP6zGSsCi3Z1qyTL",
  "key5": "tZD6LTY284SKp6snbt9hCmMSu859KwjsUT9VDpEYnLc1P6qESFnV1BcMXURHZtFcbebWCqfUJQ96TiYFvTvANiZ",
  "key6": "4bsoHbNouDehkWkfH4kCy3jWi1LhLu1YB5tMuxP7ua53DgUJUneKKfXoWpRBP6tZs83A1xpJMoMmsovtZbDnJuLS",
  "key7": "3fbwRmmt4JVUPdBwsUfN2q4AMXpx155qm8rvwsifst68nQfGDVHK1eJE4TvMK9QdewBCDHQHtgp9UHJHj7thQQhF",
  "key8": "4LifJPyPwWjxJcYesy5uK6gMKHFCEeprVsUqJQL6kjWwZPoM9zfhj9VoLe1umjMxZF3XpckGtzDy2AjsjcXPppZY",
  "key9": "sMarfwNVoC9mjKcrZwC3D6QrUkPSswu1pxmBCWA5bxX3xq6nMtKsNDQRuKBLCQMwi6gERcx95SJ2FumFXCJNeFD",
  "key10": "3hjzbKb1CmvkkvAfYNnJWSR6V6jS3CqTw3WodxBvgkdwu7HFCryVaXswBBmgFdsDYsicHiua6HZy1ohAt4aesyjR",
  "key11": "2K8jYR8MrU8gdGBFARNqDaMqDkux3138TRSCiBjkrVmRCQCKZX35EdwTXbMq88PAPbiQZX9Lrt1YLhKgvkxN8rz",
  "key12": "4SLpB7tWeKodQVhvThaqQBPDfRkMMzqA6B4J95TxTsgPBox1eUFkLTncgBvJA2ymqNvZJhjfH4BaoAkzofYvAnt2",
  "key13": "4xaPXDhqEp1fYz847wUyMvrKMZ9nsKckrJwcMfJSywBo43LPizCiMNripNkWt2SSqManshQvMnfF3PuVCQBkUeZX",
  "key14": "3ScHZjeG66Z66Zy9JNpCzfJKjyi8jTaFG9JHc73XPqDb3sBAPqWFBUG98k7NLE1mRQZYvzZXt8zRmztJ5sGUs8hx",
  "key15": "3JfN5NtJidcurMi74h9928yzzVFKEgQM2rUbVX6mL8mM5ibJLGFFrMtTZ2j4aGnATj75pd2Pd3RGb2GKSqBXTfYw",
  "key16": "3x5oR7cQM65x8zAiVDBrVEGcJftdzvT1oGw2jEKBBc5ZwVfb3qDGaMVfEtWbr1jUY8eVPcjdCW5nUHUkpxy6ZFYG",
  "key17": "2cN2DjVnjGNw8XBLHVDfDmzrX4bym2ANJa8tnrtDmUuSrRWrbNkUcVKXSwkhQB6iPEkXhbrWP8DnFSbjVF4Grjm6",
  "key18": "3zo5Y8wbs9YCX4HmkGhWUpWiSGaCMGmkTMTFScN11y7QJhrQGF9xGEyNWnQFQ9ydFpTv6HkqBJfeftP11ZTdE8zK",
  "key19": "2JGbrG4UarQRr3k4cmqvWb4oQuYvvM1UHE7FnxSonRdyC1PDEu9BMYhb3gFv4YNtedod1dsy4Bu63wokDaifFwtG",
  "key20": "2zBEP8nzMPasqkrVtn1SFBabEW8oftRCYvCYPrCf9iSQ9hWVkhaBByosyuHsSk6tpaCmhxjSVhid379FpfsKe42B",
  "key21": "kpMhcg5xW4arYEeEoXv6AjnZdHotHWLhMnXuZuqHxDv8GgPHWF6sSQ7NdkTBS4P3pqfNxjLEBKYPLcH89aCENNQ",
  "key22": "4mRtHfPyEog6Ho8Vv76heYopL8hUZDpUV2p2fvkcTfduuPqhdSfQLUkmkpegxL5vHyo3AWzWHPEttLdsbwt6uQ7k",
  "key23": "3PAZ1k3w4D6wDqhz4StSFMZ9RqimXpdWxSohNsdWx97KDaXcygnacBett3JQxK19tLt3LDRYT78k2H476jCGxqVd",
  "key24": "3HaUY8c6s8tGKEme8r2sevLwDkYwvirBabUZLnZVZT1CM4DKt6rF3J2gTuiaesF4jYNrVBtRZXk1ynP9uH8uynhY",
  "key25": "3QfLHvb99mYnHVAUuAcUaf5rjpSHKpWxYi12ryYm59PYqoKs4RrMYQX9aC3CBciRrZNw1eV12hWXH9dqtS6j5Vsn",
  "key26": "4DSUf3qafjVfEKAUFNWmb9byUfCaBjDC4D7RAcJGkKEJgChqCSpLYrWCZFGgZDsHk49thrvFkRnkcFXYPmecPkcq",
  "key27": "22N9xg4ydMtmRqPYQSPhvmnA5LEcuqPPokxsfinQNjpdpDeQucFbY3Fbq6UFobVwrofCberqvK57ahU9X58ZNQax",
  "key28": "3ExizAkzPB4MXnqYAJNw8coiDoPVpJkGkDTRcsSZiD4BUqMqQSbWMz2u98bJs7YiJRCeiy67X61qUBLXRq54Ksbh",
  "key29": "4DNPakfHvuVu1vMCjnaaiQVTsmykPLo7vbYXqvvUAU3M4V5HzgdAsj5hB6d728KPh72ShbXjT1SNRdr4hu8zhdyk",
  "key30": "43ChavHPF3ANCyPsjDziKkj1Ey9RMtgN4dyDfozvKkukvTeWcEQXPjYNajCYPmkKMdEyMVtU6Yd9krcJiwJMHzm2",
  "key31": "53otcuz3zoAS6pWX9oEvUW25c6tA7xhjMW3TnBPieQKwYo8SfJc53Be3WmMaG9JBnf1zBfkeUahgFbKRkRGKEYcm",
  "key32": "4HCHu46hmsQoRF8VdCnZV39X7r8WdaeW97Qv2oWpRXzCg8H38BfMLxmCqG4jYc3gMKSWR7DYYwMD36tXwN2ai4BB",
  "key33": "TCm5ECrqwcUkqDRicwFjUomBtF5twfL9krN8MnaEBy2NuxnNrnNjL79NCifCcnyvCQM6sAM6W4FQ1pWKzNbHrsL",
  "key34": "3MQmAe458LipkkabRJzx71nDiCt85o9MoCV93VEXrMJitbFb5guqbHQpcMxJhXNDqpfr7DnKoc5BnGuNpLhKzE9M",
  "key35": "qSJ6i4hYeRW2T39Bjnk7pNc14DtgM5ML1m4uMwg9WCmbtXogQtrDhTdE7QGXjqipyXFH3bK3kuPHc98warjz4yX",
  "key36": "3swpQtcXyURePe1et5XzBtkq8uhUu3k4iJbwk24AT4BRrHocvtJCX7KDGgX4aqXuw4ufzDsg4YYoDgU3Kz1uogrZ",
  "key37": "2UD5xqSfMJn1bnrpxpJ2E8gQy2AK9a47VFWn5MBfzqoenSrKCTHt9cPz1bm26H5LNfm8HTDPuob5j4B7owuBAu53"
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
