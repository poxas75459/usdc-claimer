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
    "5axw8u8P8h6hVUCDd6tNPfPtr2gkDzxFNJzHg9375GBeHp2y81AmzTQ27E9MAHTMP469eRFNQUMvebzQV6yr9Lus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J6mLTvowYGLby1vrH7bs7gubsknX5yCUSL3nBYtgTdAPnJ3vEdWji88Jr9qJTFzXUPBc2xi3q8JsKhU3UPNfdbM",
  "key1": "4xXTSooBwm2o4M6QDPKBwyDxrdH845nJhf1J1zP7veKj8d4FLdJKXnd2fWE8B2A54aJ8cDm7XfKcQKWbmV2JR9kH",
  "key2": "2jHc4gqU924ztH4x9Xe7B7Sy1qjBfme7YVXAjuPop9DnJXigv4i3KbH17e8JvzuTUzpU7xocJC1PuzfxLqViefqg",
  "key3": "3cf5UMpv7v1jmZCb7XEmfLHskxR39WMhJuDHgVjUj1JsKac76TphVyd77eVfxzQYYht3s4J4rn1uFhcZvxt1J7zq",
  "key4": "cgX2jZo33aA5i1uCe9qrmDFeJ8B5sTjZhqgWufUU7qtg2B4UHx9A7GtvDqg6ViaPq9G17AgZwHdbjkdsMwk2dyZ",
  "key5": "2bhUTEZf9LuVuyuffjfPxuC8iUADMA8FnWubPBTGD2vr8dHrBnQXw6n9TXdrSFsSziPRE8LC82M62jEzvvscpWsS",
  "key6": "47w5ygNG1ukvdP73Z69bqbMiY234Td9aGr6JguVZh5FaNf31kc618vjH8TX4ZuYY92fWPKadmHNotBeiuRn4tzcz",
  "key7": "4Jx8MvK23AssJkM6uizbgcRbkwzwxQc2TijiXExZoWKj2vqCtfkYPJTSsHiB5hr2urAkgKHGHUgCqb5aynMBdAJ3",
  "key8": "2ADoEEgGMQuEvwu21zKhHd43NDUt43c2zXfkJLwDNkGTgzSJJ7fU6E9uRhwun74wT3NrbUx9R1DuLPhozaHsTyRy",
  "key9": "3Vq92ShC9GqDjXWRiQ7NSotixbsZ9hskcG2TTcgvzxAVzpKxuZtAL371GM7MMejTf8458qKAwMbd654X2xpWQLhp",
  "key10": "5MhFxZxQrVYPPGtN37Q44XspJngapK6TLVxGhmNX9xoUVutDMw8WdfmXdScqbWpH7wJKrPkcpZ3we6ixz8wWc5eg",
  "key11": "4mpBzJH1AAqoVdkRiVCqTeWQrYpnZRTd4BdrwG88Jg7HKvhu6Ryzcv53Pb3ccJTGh1Sw7Q5EbPSfajorWLy99RFc",
  "key12": "3fdqZ9F3As8sevj13yUWAhAmBfExZL72GLwcRMBCvXpz6tWdHcSUm2NoURa2ci2weMWiN14jYDc8iHNsTNbvSkVK",
  "key13": "5ENBC64VUxazdkj6sL5gwSXP4b3W3w3EhYfexZpvoVVcwaQFSqvAbLy8DUE4a2x8SVyfhFEva7GxpDdQVbKjG7NZ",
  "key14": "4DhQaiEjWVk9fuuun2DSeqxMtJNxe8bfztpMxCgHc5vKNWQJKX3UUj3mBWE9Ri9bq4f8qtBqWZaR9GNuHHmJEF8o",
  "key15": "34kcSpEK91eUYaSXRZSK32xJu2haHMMsaaC9LKVvn5fNzn5fLn6nBFnrDyKaRbGzF2DL8W566EwC1MvPjX1mQW9L",
  "key16": "m2yBAUhLqADyrNXFhB1k4jmEByRpQPzgTmwy7ptp8iSFvb8UiA2PiUBwPZbyfkpzkSYBPp6BLdTQPmBpunySr4Q",
  "key17": "45j47SbFQjEunkCrk6ieRoXU1nbSUtQcP6LnQjMUd7U8Pyzy8B5rSSBNpS1T6kqLwKXWQQ6HiXGZ78CHVj9GFbUG",
  "key18": "66Tqrhm8XjCiKDucDkkh4k77mXY2R3Sp2MXUTjBHgCgSvbEMaSZy8qM7zTnkEZQP42sruLAwoTk1Yi1nzJr4wmFq",
  "key19": "UyWpepVu5ykCnPJpvhNEP4WNgTJ6q4hW5dxueu5QYpXMfU52ScEDBp7kiV178VoL2tQj5uctAaYA3PMtMjTb8UT",
  "key20": "4G5XoQG6g6s64pB3dQDVkCUsoMbjCSULVQ64UNx3gmnLXQVtZxDxmswXLvBBexCmFVRE8nmVWxqSQJcSbqJ8pWHk",
  "key21": "5ugdKPn2MQ5wwZn7J4unQAE3siLQeAKnnfkyM13MgWWvGX1UNY2kQE4Y9RTp4PJbpArp3SaEQwgqJ8uU7VfkBNTp",
  "key22": "3oud42abRXLTQ3RfAo35D5YwcidK2bGG4brZnMQgZGWiHkyqE8vz37dmzgeqVCTbcfWLZ5F3E76JTW8QVJxS6EYx",
  "key23": "Np7gcu2bVjsjQgjQ34Zsdf5Z4DwsiYqs7EwCuqzyANjuRAh9VuaCd21Zsbxk4PJ2eSACTUqCb3YfPpPx9y9XvBa",
  "key24": "4tJJicCZ999xrzaGW9mMLDVJcP6YEs7Nskf3gzEKiUiYumkonLwHGWkK3umnX3sdYsHMrQRUxoDTMnAmUCq8mNDm"
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
