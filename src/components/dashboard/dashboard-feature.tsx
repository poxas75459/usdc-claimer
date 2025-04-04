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
    "5UWrqAU85sxQkd7u3X5MLSGJgDrdpGNiwungQ6HBXecLm611p8i8sLcFuN9KogUQ3TzuZteVEknpQmzLYptFK6yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T4M9pLj7vjsXmdPQXN9oS9EdXxtXU5V8cGZ3ere5o3Y3DfuDVmGL4CZ28pjVKQpLDLASADY8A8eLiboRbZf5GpG",
  "key1": "41oYkcwqAwiYeVhwYgDfDs8zBm8mFMRqKsxwpaCNHmtifXrJRe1aE7dQVzyqcdZrDRLM6pQAqkRAAuWZJFgQ7vq8",
  "key2": "MDUPeKEmcXwJcR5fDZsjTJG4oSVAjNV45GTfkAnGQiyDRxW9eCqfcYAXDArrYM8ZBtCN3kfTgzqrNVHGRx9M6iG",
  "key3": "4GVgJjrMs5MF2qsFGRvVW4iHvr7wqpNmnNeRQZfoXeKeRp48eMA7xKEkfW8K9pVG3pcr9QPKqMgG3gADzFhuPJ3R",
  "key4": "37nWFsPYnxEZ1CWs1ZqKJtVcXP3ciAqYn9sL6UQNduQAniZJPvgNinp4iNu5SMF7m31VHybtkTkUvN4M4RTbGGv3",
  "key5": "5Ae6xzqS8Lc7APDHCWD2yi6KC85JBe5APxGGuoqCDBjJQAYVjMiHAEkJLK3GL97VjshjH1pe1sf3FjRVkQ2tukNF",
  "key6": "3tNoJgT4nq5VzC7KYzbwcxT9dkNpPAYnpBrqxRHH4Vbe1coiwVHnb3McWYGvok32LMgQKNfNZcu6s78KH93nAJHr",
  "key7": "5n5dgEsTe3FQLYXfGeLLRSSymU7BWp4dNwivP3zzaBF6jDskpbMGrwuxHjviE5zpqdZqmiN7WY2453gJym1EvPf3",
  "key8": "2T7ciorSY55tu2NV5rzA6S82gEuyaQhpcSkKiqWsawDuw8ho11MUhUfVfGQq8qsR7AHPxtst1VD32feu2GqiKFbR",
  "key9": "EK6s7h6oQ4NSWxXMFyk5ayFuddBa5jFLdVGipYM2SrXXnL63y3rjijyrpxubeViad8URJnk91i53DW9N9tz9B1v",
  "key10": "5BkShACqZc42ZkkRZvwxUqNkfcaepG6f7qxaj272LT4aSeADNEk8bSuGgLrtUFAeqfWQ8Wu7gDKD8zCFNYdTpZq3",
  "key11": "FbJoMVbWD7Xi75tZGK6yn1SyFdcVVrTivY8t5Rpcy9476sGBHsH8M9M7LSeDkht5CPqMLdAJJB66CM1Tw9WEDSV",
  "key12": "5n1nRBvHTA33P4mHbUhgWYDpuLx1cgKfftQboyVnqXoxwDZAH5aYYfKAr5pTehwcSqP1m8F1ZgZQ6NKnP69FMvFz",
  "key13": "3ijdRvSnxgDx7Y9tBpPCUMS8hDeVCNDTDr4KABnGT6gLFutqVZJxY2EWXfNo3naipjsTqy9ZhMA3D3fyUJRXiYbA",
  "key14": "ZoCWUUo85UMw7AFvRfkoXWGZ6Q6u3hqwMhji2zzVaMZwcfGuzpnShg7sLwjusCHXUTpzNg6zu4PfWz3pUkLur3x",
  "key15": "4CeVf879tMyPy4fgSTo1o1xrhsKTK7t4LPHYTEQyFQPboYS27aLC97FvrakakQneFSxvjyceNvo4HoGGFWkqvfud",
  "key16": "4wKeXVCkVYnuJKh2itSCA39WrVFD5z7dQCBzv9e992ZhMNm2NG7pJM9FkFBEh8k9DryhCaNZKo22Ws2A2Ngnbchm",
  "key17": "Zw41fusTbYJiRdyq5emcVdwCYUHX4CxtnC5GuWgyfHAfZXgD9TcSKwh8iR8x6abUJoSTyCip4pmANGF8xhLQFXg",
  "key18": "3qxfeFaXxuzrT3Y9F1N4tq8LBtZ6GYHynJwxHoNkzwQxzrRjBDcPcJpuYHuZdgQqvvQcK9UjJdHLpodb62SRocGM",
  "key19": "3Z1H7Lkg2emk1qsMNBLe4sq8xaaNRTea8TqZWco5giDo4NcTsJSzLdkfT2AjD8j6qzrp7pqnipYptNmyN9whrCUS",
  "key20": "wLzqWutmLWjLcRhGrZeijfg47euFbA54EutU5tf3XdZ3UEGgt57ZMk6tszPKjCZywe9Uw5R2cYvhSXk8Uir1ga2",
  "key21": "53vfHWzs4MhdfYBxBQijJAqwj4wrciGT4KuKW5UygNMWeshjo69kivyBeMvJEJZD8iubmJVYPksM9NpNa5vC9aLR",
  "key22": "3ZLAaJ6JMampKEkHvCQ4dnMuNsYrA39Gygx2YKm5JHnSxozowD7bC1osj2ws7NAqdG3HomVJTXPGUBLEv4GjJzcE",
  "key23": "HSHdMbApoxjKZNgUBnxaHTmr9geiJNvTKc6NW2ybbeXZV9DtjNc55hM3fyMs3txe5Egiy8u1qKLH5EH7Ng1BF11",
  "key24": "4AhJW2AJWpwAFBrbt4FJPVkHiUKTina781Dr3DTgw1wmdUNbVt96sxzkPU2SKfvfYHR7ZPDALubrNb48spHtSGbZ"
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
