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
    "3puNGxPjnRL71b5MifLXwu1V3TkZHszzQWJSqioLkEKKfwUcpcPMFbEkHnRw1C3fs749g2WBXH7189fF1eybAatS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oVJ9mn5uGsW18veYjf97CmsRJoxgxgSWqjJoxqTAwDYz3hsRseGsnyDduVnbe76am8FVfU4gr2B9jtrLPYQ8Pg2",
  "key1": "4u1ybV75HE75MEq9D9uiikotXD2ASz1kSUEE2YzZ9TJ7ngBoWM5Ps5bjGGPa3THuChvFmqC2R2oxW6dan5gRtUUz",
  "key2": "3v4meiEikezBxCRNiMVg5bZZNDtxtpKXHaynfZ27GPJf38v6sBeHnnBpS2JX52QSDTf8vsCFsZrhbaeznC6yahpt",
  "key3": "3dHHhqwQicHTgPnFfFhzuwTMZ2ABQaiQYVSVE51Q71tykYBPekmY6ovJXs4jUQJ99UzkVS9xnfJinaLDuyVBXW55",
  "key4": "2Ry7YVxraW8gy2YRg2RESp7mSMwgyZyuz8Tt8Rrke7LuPScUmppYBoTgpyParmfyawLqHu5c7bgcMxoWyWbmkag2",
  "key5": "5fjCX6e3Ne3iyVLiUSWrcSvboSaFEPJkGrjbHdHjrGQ7vmpTDMtUKfbYbWcXG5gUxyKcK5Q7XaNrCaaQ4hd3eVHR",
  "key6": "3JSzH36zuW3wrvNsWnEqg6w2ojQy26zUe81w4ekBsZQNmuhzbdgzVnvTnUEwkeGDrXfrRKTECqLVsghav9w8myK",
  "key7": "3V29w9NFFt5zXPgenmX2vuq5dWo7uaJ8yKYVNvtAJ91xF8Hc8JSL6FP9g9Tg3fA6aJBQr6MVDXdZ3zCtRKAHgQYw",
  "key8": "3RN9Dm86kcsaKJeAJihwEVFJsEa2sW1zM5CSoompWRCdVZVaMfK2grbESJi4PxsdhGMkbEzczf1B5xMZrJAp38vL",
  "key9": "4efyDaTWxj2BvxvTQ62TB5arf4vUNq5LTz4YVzQ4bbmsHYCDaWZpH1xb9ecDd6B43iWLAyaaL9xjh4VBexGKc4iP",
  "key10": "321rMVoStAjQE8bJgACNZYzMyU8wvgDw2fZYpEAUoAjK8Cw3ndrTJoFXAyCFxKHAhnHjBJnnv6GZzarDraANpNSu",
  "key11": "4fVAcWvyruxDEvpoxXGs5CKR6x43WiphsjxfBh8mw3RE5p77NcjNnpWazWRBjXgNg7bQkV6cpuzKKkQoMiBDs9sZ",
  "key12": "3Ufkk7Md1F6ZwyWkuJ3needtsnxhNq83HqJmmVbusDxNNzP7jwkdKfV7gQDaf8em986uVq1jgvq55s8wtJJfDrnB",
  "key13": "2Kg3Gra1KQQ2zCxSr6hb4Pm2vbWwkC5VuygHgkR489PKcH5CWkuwSQiu55czmd4Rkh3PLY6yWVYoDADkMdKDvttg",
  "key14": "3guAKjb6b7W1sZ1Y1zGzu1gdWe7AH11mKNUy6REsqA8uYXVcRjPUFz9vB1PHnQar3VXSH8bXBEKLPYJpqeSqizQk",
  "key15": "2v4EMPgobExbgXc8ifETAuJkbGoKbaNYtDfMTLq6mkCzFESG65sNMnYskuKTCjBB9SyNaFcsZZMnf73pREP4vAJq",
  "key16": "2pJPZLjR4eYBaBC8nnXZpchy8eEky5RhngRJMaL3F4myBYwK5wZfqKbP44F5Wf8JQH6ASt159V4jVDbdhTS3JvRA",
  "key17": "2Jv4yWcCUNXyGWfnYFpWH4Z4Zf48pyFzkDNdbxhvyuznKAMFYbaHvuD6zn58AxccJCaRUEH1MDPdMfza7W5PzZis",
  "key18": "2qvcMTwFnrGprNMMdWG2GUZF8K8zFeTdvncvQde7MG3f5ZQvcmgACYar15DD3Suz733w5TGQD5avT3LQ8b2zaQEt",
  "key19": "2Q7twgZLK8NFw92geWBdqPDi153Xdc13ndGYovRraWMVJpTwns6nMP84hsgf6eu5ccMkeQUJ7mVCVJpXd9UYueyK",
  "key20": "3N1iMfasf6nzcts9Qd3bPQTCVAzu1aZfx5K7c4F4fZRoye6qA51JDWxrQ9GcKehx2tXGGqeDKHUcsVJmkFB8gYhS",
  "key21": "hk2Xo6ncy4rM2JiXY138NNa7kannRaYK5hqBB3BRotdsoc2zCYzmrsRzL8EGSh4WiFr5uPiV6tkNkgnx3Pc1fYn",
  "key22": "3cbcvC1T2v6K261xK7ngeYsx8Z9hWBoexohdrkGFuVVBoMx6TmVDMxUHp4gJaPaHoQFNdswY6FqSvdETFZB2euWm",
  "key23": "3zfZ6ECLeBMe4jdiRuYu6Tz2bQBmzHHW6PUmHbvRAMBJprExAKV9giqs1dZZtW5ZFKf6aAvPiUwsPxvnavrVoLfs",
  "key24": "2XJ9eG4gqvoXhMbHKhTm1sBG2i1yQmPj6WtGZV8NeBzTmTu2naQ1VKmfiRpL53x6vLJKv3aG1hjWS8kQYLKJqgFk",
  "key25": "5XU98yFYmNd7zDaD3XX3vC7YCsbJ61AwGWBJEWuoXsopNQy5a3WDHXAsvVsCB3TZT4j4fC6dYjVsE1DN61MhUvgs",
  "key26": "5sxwEQYVMmoW3JyEeFjvTz8TbR2aEzYwUH1r1WqGbxPQtuvwSRvF6Ep5PuXQeFJxhiuxtKAqGRgFqdZSA884ecQd",
  "key27": "46Pi8rR3GGK5rhhbrB9Z5GasBsegXpjCkPpnQdmkLPZSK6qBxeXQsvqt28v5LZGK6tGV8vScGHXia3CNaHuG4wdo",
  "key28": "5cQuk1fyEjemEs8onzGhP2kdoNAePXLpZqeUrG4fMimLAk6cEm3R44hQXMJRkUrT33NDZMZqAgb9NVrneJrQ5A54"
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
