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
    "357Z5izCyZu6Q7ZmeUvg4pzTbVRazYUvM7KydfK3ZyqATiyEtQ3BBnBkQZmBikx7nHXF88bUSP6TAGHiQerbaWvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KonEbZawjoM2fXk4NbwcDNwjhhvmDw5SPuDWxubwzrZ1USNMvzX6p1FGtrZw7yTtvt1jL3TAzgaWnHGeuZcMUo8",
  "key1": "cTNhRLuiuXZASuUbgyTnbWGGYfDVk7GVrFQch6NHd7YHmEMsYwfYcwYAfWCYLF99AcNv92cGCwii6d6VX3PwtZE",
  "key2": "3rJEJPrNL4TsLiQdmq5opjeiTgq233BAnhGqvH2KAT5tCvBaX6phYWTTvaELdtuM23uHQdf6QyfQmbaqQS9GV5iG",
  "key3": "kQHMsgmGyTRJo7QyZj4NjUQKZvSvQHZwh5bd7fHtP3yPfmhoVfwFPFE1dMsJwubZ2xmYbvmEGKdWwihjThtof2w",
  "key4": "3mBFvZD3vGA7CCJhBpbi4n8nLbbgpcJRBbHhtbJfFGqXHEfXiv3i5drdgCbwQCUsYaDmDEbWbHiHpzxZJ9QRzt7d",
  "key5": "vcPVWQfGoN7t5Tdyv9fojFw1okvaMi6nQEyb7NgFy1n9uTsCbZshwrBS2ZVWb1dfqYwNU7HcF61wJWRYPBsCHVo",
  "key6": "5acJBLNTaYeA9NZvenSMcebXQko8XknZBNwn8xoaYFHy1Lw2vugNX4BwUGz46zbhDdF6zXbTqtfuyUjUwMPA4mgM",
  "key7": "3U5pJpBdFoMiH6xgvaQZeVvX8zP1bagNXUaUo3SqEH4L8K5mSujw6p7knsyijtFX7iKR6NyccxfT5SLhmY1QTPsF",
  "key8": "595PGAaV48v7BiLQZ5HMHF49zBAFXZbTPdZtEoe6sXry3HhHxWHEd14cfc66F4ECTtjPHrqZRwUmC8xD9ALoHS5p",
  "key9": "VVc3hLKZt8RpJZB2PsP4Cj2snzAwdCmmXMauS4F7zeasVVb1Vy2yaR7SuSLnTfJcwsuS3RwwAttExpF7Ejz69bn",
  "key10": "2D64ztZ2M5PTbHQq5bQjXDnboE4in7fFRpJWZoJmo3QkfkSC19h7ip1miS7KhgBKBJRMrG7A94oq9zFmXHfRebiq",
  "key11": "2cTvijn7yx4XF6F1uUpHET9gNQya1rK9T9YTsFHScoCtd6NqgdHVUsM5x3yKE8Yk9EzxSirCKjEWxa2b9f4fDjbJ",
  "key12": "2xBDAKGBDi6YAPGwVp64c1mLeJjmp6m9DgzwH8zbFJWSzexyZUdX8wmTonY5MiWb8jJ6mHuR3avB942wzwV5VDtT",
  "key13": "dMW3dwcpRzrj9QgHvSBBj35Sfo8pL9KLs9zgdFXBZkASE6iWqa3RNMeYMDKCShVzzoe5j4BzU4p54VeiGCZ5BgP",
  "key14": "3UNnfgaacJcABj4rDtWTfxjSd8JdsMLF3tZQCcZGKenBTEVCrHByrqLnWoJskea3j39Ua1Er63Ua7pconWAbZ6tK",
  "key15": "fatY8fADoj5w3GsUPyY2mQE4gRfTkAX8ZnwmrRNoxXkpRCj2Y9DKF9t3Xc2k36rEowMpcMFaCtQGw6S8tW1XHTq",
  "key16": "2dcR7B9kKJyqb6oVeuPPq8qaND417FcFYzTrd4rJ7FgPob9tm6JyMDAFE27HjrDCt3BPbAFEagpzvmRXb8t2UrUh",
  "key17": "rkb98UL6itYkTKanNkeXvQTHYg5vW6BHfwVPh5ycKzM7usYxmNTLN8XpR4uf9gSw3RNGeVeNAfvo8DMRpZJzD9Y",
  "key18": "4vfnuPvcVsgS67Ch17aDhB2obc9Z9o4ZERLJdgcod6SQDLRJeHhQaDGv2R6GVAtpVNqSwbtdjwMAZMq9zkncMFQg",
  "key19": "2SMb2A6sEbXrk1JrFTkdVbvwqXg9n3bW9L9ygkUkZd3kY7urUax68PrbqcUMhGZpZF2FBas2gdct9Y2dgP99FiGU",
  "key20": "4V3n3cyuBWtZZcL7yi92VD9ctCVpGWHmjvbnX8Dze2fmKtRd8R4ss7V64n16rakK7dxNFsGBGuWe4qUpWgATMiiH",
  "key21": "5mGdbeKkuRaqDa2yuFLq6sCWb4t2Vt2qy3G87tASW3usgguG7eZ9axMZ27j4P8ZfmXPzor9QN2GGP8gj8C214m6r",
  "key22": "5vvUF1oShhEPUVhAujB86Gu3syU5TYXMwN3GwysL9dRDrfbipeHpyacx8f5CfrbuEYLfRiz58F1UhrRVTmGinSEt",
  "key23": "65nmfF4QFjzCgczfHqgKpgQiik3FsMw1iud1WhavBPVPR3NGNS3hUMtX56TH4C9uzu4rdsxtWJBwX17UfvrthPCY",
  "key24": "2fX4YCJLoSemfbRWhwJpjWjYfovJz9YxvTaZPpYmFBeC15jgkEs1gPSjMVw9ixPGCe6mnhEBrBAXw7DqC6EqTJeH",
  "key25": "dLjDsoX5TGoGeB5zaFuxhrB3dGk4zLb1nBXDNCA7FyPfELA5vdz4Lzk3Sf1jkR2Pjrzggh5Zwx5ncXkgzbBNqzz"
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
