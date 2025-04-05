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
    "4v9Lgp7Ge3tLpUWszHQTbLWu59vQNXKEXv5J5K83r9yv4gvZuCCHd2hFidKksj8uEPL4hmGPha1Pd9d4bKnWDHv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XALHezR5RagtrWBzPnxVWB67zbjBvqQsHihHNtVdabBcSd7uw74TymvhTMMmAZ2RiRD2SqZXTHfbzhmbtAfpNYy",
  "key1": "2Qd9WchVyuiNxBRVtZ9qum2ThKy7VWAUy5Ug1Uuso7t1MZrMi6cTsBar9XJF65Bh7EBsF5FHANFzVXgsSZ1sWP2G",
  "key2": "3nCHjBgs9AGQgE6XcyKTbxEofKkFDgtaTaDmx1ksgNrzU4kxS3YwuRKD7itFMpJapLCEt2Pvy6aWukF8bvzAJnu9",
  "key3": "rRHADnqYddMWHALjjzX729VFjenb3zgmoKnULhBJoWsX165DM8w77VEQZZaH1ucxLJgUVnxgAiFkTNU7DhGJu3Z",
  "key4": "4XuY9BwMX9oZs6kxQfMbRYaoWCdiYFJoj8scZc8SgXemVuJBKjMscJYrxjRVRSmoTn73ijD9iDr9WRbZE3vkascF",
  "key5": "4tCX1U75m7rkxQMPRnGDW4UpxskhZo8qZSRPLn1JsXFEqHtkGCbpyxGksdJRuyX4H7iXzdHL64x4d8dQD4pewKf5",
  "key6": "SmtS1bsCSSBwy7NSW7qsi7P1ijkzzbBvXVWmJWkVRjqrshc2czDyPt9BvZAburvZsHmaRZNsQrs8BqQV8gV4QB7",
  "key7": "227JMZD1SKXa5Bu8LLuWHgq3KsP1k4ActTXjyNzNUwyftwQXayA2r9xJU8LChQSanfByLRB3vLwC1cCkF15WzUPy",
  "key8": "2pz66DQ8XuKj9V5fZmd1S4L63Nj6LeiYcfuxv5BeTFi3x9pCEHzeuFuUEVRKoQ1QFFDKDMNMQNbDvqYR7t2CTkB8",
  "key9": "36qSVdSkXGGFQgc9Yu8EH5xWaDsMjL9J4jpQdcrKCHfmte8VHUfrAsQpc8T7G4Z5n47ozTH8gMfvy99i623AjBNp",
  "key10": "36kTKggLWDhS8eFixuJJ4k1tNhE5MUQPApt8WSKbtWaSV3KaXsp5qixQsS7wfeyNpUd8rdcau7dztTpQ8of4cpsf",
  "key11": "3qTjAd54ALu5DfHFx1sf6ZuWyJx21JQ9UogD6qndE1qor2qXHgCjBrSw2NVvkfftv48DhMx1aLRMXMiErYyhKvWw",
  "key12": "RmCxrRoVcNHA62SZRfJ1uBbrx5HockSrwikt7WQXTT1QK2wuys8MZhogFwqR1YsqeY3SkYTmRkCDZXBGgbcQQci",
  "key13": "G173cGoPEtC1PZnuHBfVkg7Kfjg8JVL4o1mQuvzazqjuzKiZ6W59uuD8sXvma6vim13LhHyoeewLHTKEfUnYYR3",
  "key14": "5516zsgbVu2W2ijXWkKHsNEVT4WzDLcduxkvEYuKiKPA9fWEPbGiUCpHqh9SaSoMJ8arBJsKRx14UgQzRi6unZs2",
  "key15": "3JWgJ44AmED5NuRiNp92abMbeH6metJ2gJQ6yDNZnd6tenXFqfDzZMahBetV56TqbB4zgx8sVKHTufafVoLgDtY9",
  "key16": "65aZsNgjkEwbCzDpJXCWH8VEptDBr6cbKo6VFDkuerxYixAZaNd2HMz9RaRqppXfuY2RUbkLzMqTfGrQ16dAZy6a",
  "key17": "4s6qyFriRUh96uPAybutYjpY6UxFks9EKHc1XmzWDt7hGTq1wvSsLmtUKVMUazMWzZF2JjH9dzguVS7VWkEoCi5K",
  "key18": "5Ke4Kq6ZYFdK7moYsjTsQ8DgEy3eHihnL13LrW6r2QeEvvWuMmtF7DAV94DGvuZd5TiwJHHbQ5gZ4RtegE6iogiD",
  "key19": "4gXe5FD3tQ3QSHn5MJUxQ7Fdm1WSAX2WtxVJkqBkzphiEgGGZkXs8ncLKFNRf2iHgq2N2rDLXMwv6vSQPkekAo6x",
  "key20": "2AXSKHZp6eoNcZAsDBrTL3XmtBmPQ8yGbsxV2ie3LFSEDjBPCaRrff9jKUzfb6BhKNAqc9nJWukZ3RCDZvFT3fcF",
  "key21": "2GDjEwjwyaaVUukBQX5xZbbsxEKY8L9HP4NZ7dqz5qKS1wUMEipK869dGwnkyEAYUH7S4Q3YFP4B6WyUkmAnyLUP",
  "key22": "4azjTEKX2axmL6RGbJijecUeGyHJJ34VnTgzQPN7DWB8JiUiHpEmrRcd88Sf6FVjnLkTunYoCNcyWZYVGPJJoFhc",
  "key23": "4iNnxwKpANWJ96yMajutHS3kyy384Uq3RBxmhuAdw15eJhpoCe8NXXcVVJf8VdavXqofH5nsF52SJtjPGHba6aKU",
  "key24": "2e51yFab74fY8nW3aFm3nUZi6meKDuDiiSjBsMoTx2RQpQAfCYpGG98HB8db9HEavA154uyNz6FZQwH2v5Nuvkfy",
  "key25": "5369RRHw4ykn8vVXyX1VHVQ26pt2wHw1Z4zkV3wifBDsfEwbMpZmr8GhaE6pvuicVdXhpyCLjx7n1kjfhfvmgqF4",
  "key26": "4ArG1PGxz9QTBZFyxKpAfpjeqp46uJWXSVSsevdYuRXWvom5wiKaMV54Y6CXhu1Fmg4UcS9DRwKFxofUuGkqy6bP",
  "key27": "2t9qfyD6Y3fb1gdrP65djhedDEPNthN8UQeQGSYsxZ4Eh275ZNGBzBRvew6tcjL1xAdYAikNX1ppUvgYY23WfNVp",
  "key28": "4HP2LvW2EEB6pZB61Qgv6CPnFPhoMVaK3VckdCo9yfXgQDTiozrYCkqrB1v1Xry9L88938CFnWHKXK3viZTCGnSs"
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
