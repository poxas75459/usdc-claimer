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
    "62S95guKzm6c4iMtG4oKevNG6THr1LsbiKHkS9PZsiW3danJj8GtFjKM2tLmD29iZgtjNCGnwaSnbohD6BA5pUKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QiwYYuAfmJJbyvexPegyfGaXHvFWzaqPNXXWs9J48uUQ4tYbAtJK8xS4XHxquGWvGDS2bZrFNHaE7EB9BBighYm",
  "key1": "3GMRVfsDQKR36i9ghXkvAN95BzoSkf7ymLB1vUSAQYX4vrdLeCxonAorypzurhsBbCG9dKP9Ug4uXEA4wkxTEcZe",
  "key2": "5SRThC3zL1yDUmwrDQGErtNJLieVddMAXpRJ9WiVHbnrugxb86hsnxhUj63xvgKRzPHnW1yfReWPSWRTZXDp3vt8",
  "key3": "4XMc9odEJ6nQ7KjXYwepogyxSFeLSxsZL3DTWzcEnQRLyJi6VwJoMTZdhngUK2KrUU365F5AwvcGsutQD22HXNzr",
  "key4": "hmFDEJacdTM1EHkiHQXpg9SEBWfdM4DDGqM7mZc8iQYFgWwdhahhikZK8PUByDcWmtQCm7tQfcFSryBBm2XixbL",
  "key5": "2AGaEt625KTpYddopigvFoPii5fWiaCGUtWsXdeC7MBmhznmRpBY9jWoEGpJi7o2osskzVJ6bXPUaZRWe4QzDdmG",
  "key6": "5wdqJY1JA2EK1DWYhgTrnwW7A9DEpEjNwFnNuxwVKjVXAf73GLZ8M9FxJPdH7oWifsc7XFBabDJSKdARTEALJvn7",
  "key7": "2S1bVrJqgSx6bv8LcMYDPJxi7jb2NXPVBTjFLrh2yALRi3uyk3RUBUJFKQKKdPZ6m5F6cjXhirVsibLJYmBDmSeF",
  "key8": "5XpNhVcCod7sFV3yevn46PKHLF8vL8hEQVUTwNHJPSm7AUJjAdDTCxik3AmkEvEeD8JEoFeWsirCVvNbDh7MmRkx",
  "key9": "2dDTkjF9grN7zrFiK1PZoQbM13iA5yWVCVXSHWVeKztpj6hSAopmeEWKuQcH9gPGL7dPQjskzPzJ3z61fwPmwt9b",
  "key10": "36qphkFun5VXayt5FBqqNLY86LYycg9w1CKX74KfzjY36W15tW6yF8nJzBmKiUW8ZkFRkSJnMuorgTW1NLW8eL9d",
  "key11": "4YLSkHwiBvci7x93pSrnZMAfSz2mg38xSFqVAQVnzZTWCvAddDqhYJHnsRV3XXU6ye2wAXbiZk2tYHW6ha8jN28N",
  "key12": "5fXBDi99Cs5rHrnwJM4JhVVDrR4w8B9Dg6NmHhYNGwpYxT321i1GnewH3VTndnwCjt6tZeYf7FTW9zzfef6mHgVR",
  "key13": "5QQ3kPQBzsSTvLeieUPPRfmgrvpm43KpBZWtyX7iMeKqePyvqk9QboH2gHj6YGWZy5hBGsSPwh62nk3uAK6WUpFr",
  "key14": "5updfKwP4kmfYejWnfFU4Eq1M9Z51QM73k3vwCjv1BJTWvgDwamKEwZDCE7YuST5iuH7vLYe36x86mA5jG75FsA2",
  "key15": "3rHD1VGg7xitM8mPthLn7Jy4zDzs4CiaZsDzrrCxdyUBDGmZMs7ShojoKZrDLGvgpR8d1svAh3uayptWRPjpzw8o",
  "key16": "3uuNxsEhCQ8fcswZ1vf4MPW6NpYx83WhXaDaPXGyDuTuFJwvaUrSiZMSmDPAKBpYqjrvRx4HJ6F6V3nskvhpfykP",
  "key17": "2v5L8LcZo4kNzdGUyF27Bcns6siJ71x7rRJnyA6HrrfacRA5Sc7tPYKMipzDoKyedMPwWw8p3rrB6451qCiFLunT",
  "key18": "5WBPuBtST61WZk2kwtdY5EXtDA8RYBZwmKvDaQGqx7zi3jp8YREdQzibKTs8THgjcABSGFRrSAM4BKPbsrJeGScb",
  "key19": "2erKu8mXnw4iYv2xks7YVRap6fHCHBPWvSTEx6vP5AY8w4MGHEuJDz9F5drDAxd2C8vrB91T9RzoenTPkg2beZED",
  "key20": "rcMASCPmNxu64m97FtZ7DuVkdVCstDvKgZSJz38spZpwR9hSp6GRUqLeCRF8XH5NYfetVRoQLiuVLUNYA4xHXTy",
  "key21": "4PpqNuYGvxhUXg3u3s4EkoJTHor98m4NBhiefcaXxU3h5DqSEKZkWrATH4a7Vk5LvAJL8KEH7ZikuG4JkBL9MmG3",
  "key22": "5iZSfEEcCJPVVCt7J9BY9mgkkgp38AK3MLEgHpaXWBpFC9ZFajcdTSWa9kHb45oEtV8yN7DXCXQAg2YARrfpQzHJ",
  "key23": "49xu2b9xq7piLZn5wF4BwJ5FQZg3BB69Ph4B76zBq1XSDMWX6JLKHMTwLYquBAjik4LY8PGAe6cZpawxGD9DF2L9",
  "key24": "owXzXeLdu5dtrANuukKGUgZ1CDfwcwDBsSXVL7qKXgpGVmdkSjHC78NR7GxK6hBHN3zGkSmVe6HG6hiG3ei9oBC",
  "key25": "5P7xYhJmgnDZQQgi2WDNCrpWVG6mMaBu47RF3yFbcDa8dqmoH73T1WhhLXBK7GgvcwS2mYBD8haLzAYKipqj8mpK",
  "key26": "38BSPULXj9TaTh5SuEboAA46Gvg5sZhmENoBE1oBagoD87eNGNVXMsEDKUHXS1GCS3o8VqirV2SkZhTwC4HTUDqu",
  "key27": "4QZg3sYJ96DhiPByHHmsBK1qvuqcxsVXWQZdEktSyYuZ2bhNCN1u6mtc2sBD5cs4GM1F5AajMKzwomabFiwtc5XF",
  "key28": "4bPjMwr9AW8sw9eHyQDdk8j1r1QNz59xnjodBN9AxnpNsFVtZkA8kw8ktj3dinQyL4zphCLRL7JPStKuYozJyb1A"
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
