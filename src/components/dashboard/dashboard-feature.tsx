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
    "5qvZrTgZqEbPx86Jnc8jmR1tfyw3pcmD4hQW2rmSffE1qVHLeHwSS4ZbSMzQNdFZ2YX7xgGBBa1UJZAz7C4x8RCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XDa1YUzhwkm3dcjJQwunRky9qo5Ay7RWzWMs6XYX1ZDQhFvhFfgATHtarGEmAYUQPjE15Sxb3xG59MMZGTABEjW",
  "key1": "4KW44oYoyXjX9tmnkjXEajVJTqSQ2wwtSmwc78Ez7fiYBjh7RaLZFK1qwZKFHb317pSWW4nKqEBDnbtpipSqm53n",
  "key2": "543zbhWq2dgzSt83JGQRpC52Afo8YBY4CNRxBmYKtYE8UEakjksTm8GHa9Y65KyZ67HbmxHxfqmkaRvp2Jta2y1Y",
  "key3": "22FmAPjDvCjcXEohyBsfd5mY5xqVkSegBtbVqZ7hpkABen7BsgGSwCjcRdLqWtqotf312rw2e5tXRiwuRyxiTHGC",
  "key4": "2UEsL6r4hZXhi3CCjsqz3FqBQkEfjc8sFZXzjU8a9BhNFAnLvNjFXdsWhqEETtq5KMmt33cKptgk2RqnA2ckXduN",
  "key5": "3A3yMgdF2hG8d1SGaTiM3M8dBCWENmZhEqKSoQhdinXXTZREHrRWekSMGpfwxbMDpiBfA9jZfsw4oLgWpfwmiPs5",
  "key6": "ERhNUmffrujzBxuvjKz3zNSsApQwe7EVkuUX7JjMyVHsZf6AYKHxx1tZEP497ZCgZ4sAZ7KRvh14rB9ee4nRf7j",
  "key7": "4zkmiD9KjDw4wE2Rn7YaiNssnGkgSQnneLXWMg7fTk6LuwFsGqQJ72rLXzrpNfWWZSBkego5zFFAAKU2Gy2CtESv",
  "key8": "TZZSYRpsaZsW6eVEesKBsMK4dvCLFNhHi8WkxU8azTK3ACdU4opEiHrSP8vebLTJvVCsJeGWcHupQeFjNSUBq5G",
  "key9": "3FwQXGfRLdCuL9Nq637tgb2DbmTyts9D6chm54gQGWGQXCk293FaUorUhayYrMPKttRRT2j29is2AdkGFVh7AuWZ",
  "key10": "3cP62CsFSmQ7mRjJx51a2nU4bPpX8mrZL5v4yR1jzNG69R23ZwhUcTQuGwh3rSMtyUE5SYQjnUi21hGjFXcTh7Sg",
  "key11": "2ZvcEtvZchAbHAdbHYjr5m36bcr9i3T8xgeuy8L6nHbC4pVzWrjWq42uEAQF2bV9LYZDvkPDK1J5phSPP6Mynnc8",
  "key12": "4ppTaWAfL3oMhoRhWbQPrdwyy3GXUquwRJqP3EspiB25aogA2uT299ezpi98jVfbVoHzq7aWMzaG3tTrpAj9aFpa",
  "key13": "61Y9UvoUSjfbRNBag1E3tWVKLw2ip8dM7MwVVmaVYo6wXkos8ndGj3Cw1Jis2DyUJVLWLXnLcppJkiza6zu6Fhze",
  "key14": "4EPFc9tjCmGiSxe7K6NHduPWZRk5SRh1TgCDxRgM8WU8E8Lm8mRgeDXvF6ScA66Bv62G8Ksk5ATk7dPiwg3rxuFt",
  "key15": "5tBpeFiZzpgy9UoEb9D5zzjR78g4j6HUWhj3iuThmGjXJde8tYJY6w2ooMnFuhv82vGan719PLohYicPybWYmidt",
  "key16": "2MkyiDtibcfKrHzvKEPM9h5C7oksLV6qT7nP1bZjGdtvhbQKMo5aW2E9kUzAKB2ELgYo5GZ9Zk8JYW64fZMqicgF",
  "key17": "efbW2eridv31v6oMf6kWXcWPmwEPDwy7WJMnswVg2Y8pKfMDBT3nUR1uEgzGa8DdwJZ4PrPE2LM8WUbBAmtRMte",
  "key18": "5ThsKR6uNbekfXotg6V3znGTgF8TsfbMrb529hPNnvRf1x5o4WNNJAmfm9KZpfn7aTZCLxpbXqZpKqmFwM5crrNF",
  "key19": "2zF1txbuAH3gea25ZGjpqVKDyVDbSJfAsEHdRXAwDqxKUjoC4Qsvys39ZkNcxcGAT5KbzYeLTrC43TZWFJHkk84D",
  "key20": "3N5DGtoHLSYnPEk5AkMRvk3h8YXX2RcjNspqpmpwZVHQvvdeKgJBP8iy4W72bAxQ5FAjVKXsZprHL9JZ1SXpiCQs",
  "key21": "42szF5ZyHCpxs7fZZyoEVNMwBiiaCxLUb2uKuAtpTYT7UzfRbr5yuqtGprTtdqQBRoLv1HLPZpxdKKU3GpEgojTi",
  "key22": "645ezaUs9hZ3duZZxy5D8zMmDtea4cqbx6T9zPH8rMFN5aRXGUr7ADEESYwEjg2LJpn1RqDpvyt88Rvy8zt3LZKo",
  "key23": "S22qWb57cQVjHutqSWdURbo4VtpdPaqDy5ZGYJDF2VR3aeSMQPwUBnUmqMwcfMRdmmzyonmpEg89pKiwvhV8f5H",
  "key24": "3Yzp2bsFbb8EUEAjxkHE1sTaPyEiHqaKLhCHzkxuVyW7hxtva1ynPY5QHGry96EjHjaSG2AkJuzRr9wUQZrbXEGc"
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
