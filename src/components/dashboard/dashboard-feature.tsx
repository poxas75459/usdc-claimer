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
    "5fZExdqie3vEMqZW7nruepsvovVK3gqoJeuXC8NjMMoYccShNfhqgcAzuBNyydzPNbz2f6r9mccXZ6RoCeuLuJ9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f7dbCG32s8cL4dGkuh7Yf44zgpKsPz7huQdYUKvZosx2d9s4zaAM6ZGtVtsfan3TEE6z4a6SCUbBRmsrtTh3roH",
  "key1": "4y5xLACNG2KCQoT2YDVAPAH3RtLaBVLxYamzuMwtePJ3eGqBqHeVgcBhoo8uGQ3qq64yaKfg79XbzYhn7rckYL7u",
  "key2": "2AuUkLwyEjFku7AkmbfKcjiYqd6sDodeGQ5ACNBPmiQQAHfLkN7SY8qNypiyy83KZPRn9sCpSmbn2ugKt9PYSDcJ",
  "key3": "4NMeQfraJCW9TMXBZz7rZZEseNwBxZG6phAVUsNee6xWXxSonbZLwsmBrm754aJY1ndBPcm2wHaJtbcDmn9MNBk6",
  "key4": "2zS2Le6gsYeYGRqSJUo3FQf4EMvtjCQQqbJnJTo7pQ9iavQfRyGdosbnuUNWHCaFmyxGS5duUCjug8uvayzQmShb",
  "key5": "HzcrKZdLuqXCykMVeg2HjtESvM7sH2FfePrrzVbcM731xH12nEs1k1PzJaFrpaVtY3YQrfd67Eacz4RfeDtBPKQ",
  "key6": "66KdwtoAuJfzZu7Bi5zqP1oaNKEv3L7fhmHGYwin2vThBY3CW2rb3qhvD8Mk9xzmXxtN6cZ1DK854bWue6ws7UEP",
  "key7": "2QkxPbKUVMtimhU7Ut1bk9xm7jV4r4QvCbGtY1gi6rUJJ2JS9SWqbJtKz7PgLrmcL11yt8axd2vE1nZjTnnmxbrL",
  "key8": "4izzxW2Uhysd3EMi9JgQZkdtoUFe5Z2isdBv2k1EimjkHwNWasiaxDscFZzJSjWc6ZEbH4iCoxs6h881P6rmJgAu",
  "key9": "2mckoT89mB5JHRrTsexdhabb6fJ1yStBLGa8hS83jj8EVLJekeLfAtgNs2iurWU1e3veY8SWZ5WW7YaRK7fs1ZVk",
  "key10": "e5FHqen712YukSWUgjuUPqHG4KtwJjb3wYN9zpLq87WQBisCeRtiELZ26pRMmncfFn28dp1s41CVSxWdu92mMQ6",
  "key11": "5mDvmmMAPYzhhGYuj2mgvdSnZx9vM2fewzQP5EfQ2BchAhMHcD2RN1sraEzNMpRvsf1eLnJWcnxRwuhyfg9cSz9F",
  "key12": "36gsh8adCythvkU1TUwAqbhmHmvgHc4AU4iMmPRHieRvkYN1XJRyaA7eEv5wDgsrmAMRga1WBGJSX9NFzyHQwgGb",
  "key13": "2BGLomaypQk2eY7gnWjERdeURt8fSFNt42SgJWYaHJdx5YnNBbzEPZsc9swTe6Kw8XFxPfdQ9bqF8sGLvr7VwJ4",
  "key14": "36jBSh3pRztZxmqVJfjKzaSgkcXrdAL5kYbrUpaFVnQw343XkUx2PgMYiyfEmx4LjDzaQxUGUY9ahLgZpVEbKKZw",
  "key15": "5TbarTPwwvmfBPnZfhMsrUKBVRXGP42AWQzsnGoCDRfBHzRQRaZKfvdys7E1tKh2aPNoWb5NoGzohb1uDJKKG5tg",
  "key16": "5BQK4eq24ZEKTqYJsTYgnon5VaZgHnu7DeRzVcJgwzMDczi9wkoK77sziUT45DXcChEm4ZVxjrYMGxJWHBpMU3GB",
  "key17": "2ZJVJ8JZkcryUiCYnGYW4ZW2cLrMzzyk36fc93CUreTvVt6PjLQz9Bi2Xp64JkCBpF1WonFLVqEhst6H3PcYbE9B",
  "key18": "3eV5U7HLnNV9TpqGHDvW25hjAtp68GCbLPpU678Z5ofrAGeMv1SoSs6htB3hzB2WEK926YNjNspLzH824XXJQD6F",
  "key19": "28bJKjFQB9g4XBQvwEQwgzLHy7cmXNfBHYPJTuiRs5AeVZhLxFPsEo7wdBr2gaHaQgQ7vXAbotMA3CN8ULoLsADd",
  "key20": "4xiv5m74smwooAzQ4gGtNLhFDaSBf5KgfJinzHJNYo3gs2KHipjyaAG43RzTFFo8XBpv7WkmSf97sNtYBXzMUtWo",
  "key21": "24tFbbcLqqah63ou1WFNY5EE5ZHCHUFfVtCQ4ZDWS5p1YqeyyYaufyPie9fGNmeL6JGbgqNVuthJYk3p2LhvmP9s",
  "key22": "raijRGKVLgzS4pdMDW5ouMQs5gV5ThnjWyMwyvf1WtL1ixz3ni5eVWNnXRtcHZAJwShHfs7QGJ6SpWv1FZoVwar",
  "key23": "5iqK8uhr32DJskJ4MGjAriNnCUDkgUwcP7C6QAhB57RNQA3xfbi7dLdPnRECxFpLV76mMFe7jhVJ86Hj5fWAFekd",
  "key24": "Qg3ndsd4UAkpyGi9hPBMvTEpF2QF7Ebu2AMajMcscwv677hYWL3FVyqAG22se6q7K35hWdRdwdz4rTKrC2viXSj",
  "key25": "3qQ35oq8mNRiuqpuuYte63WgfGwoRySakFBS5F8yuPE7RN1AU7yY4LA2wfUk5RJt6KxVr8jdq4V1qPsqdK53fxxy",
  "key26": "3qK24GfMkevA2AjyDaD5b29FerM8B81ZcwVqtQSHdMDX1qBsi3mRAfuj9kxuQKvf4ECmaMMeCJzUyPhe1A7P7TF8",
  "key27": "5aNfdwuayxiZ2bqnNQ5feE3Cd26H5gsDvycu9C5ra9WE53XehoheHKwNGJ2oKxCKCFwyKSBpjNwCGqqRfKiuihfX",
  "key28": "LMj7DgbPYwf4Xz51HFkk7df1iHe7rTUQ9xRjxwTTrt1T9qHNLYGdBsTeuv1s8NLm2Zkkk2g6HHYjEjk1NLfpc7h",
  "key29": "PpjFphmp1Xdh3e6ex2wbb6o8yA7eMkoTjTkTphsrM9neCwCVFTYScCeXwG6Sf1Fewi7BdkpXrnfpizyNqzAdT38"
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
