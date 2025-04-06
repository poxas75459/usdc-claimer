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
    "54oL37gijmjiEJRcG81QTVdqUfKXFv2N9N648ZwfRKypb8wHuXYbzSxkMUtuGQjrU4tXb3EudwQrvzgbULU519SZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zTPppNLuPQ5nuBBkzG1AHen32id4xuhiAs46esCxah1eAK8YjwLdMdaffYQY7Za1A1pheD5nnD6RnD6oqrGN7bF",
  "key1": "4rVLr7U1ov5ScyVfTq5GDpVcQUQ26kgH4rszV9j8YrMU7EQ2yhVeq9PC7TtKDyk8VLD3gNrSuoNEku3K1ze4iuFy",
  "key2": "5fSCggEjvACihKyvKpAdZSNetRWr3aUKpBY3WAyJej9rhWhoc1KqY6XYrfyLb8VeYGp7esGai7EdkqyW1Uhs1MPq",
  "key3": "2tnWYo9camRoZD5qqYijXhE33Epn8LrkJ7PkTY6LGdBi2Cf46WcmwrDKafiACxUHpjw43JBc7xbNm7XnZ2B4fHj1",
  "key4": "3BkT7zpjcdXrQcYWcHDiBzgbFLXKdywkTFJ3bTJXTZbE1websZKVkJ24X8LEVCVq6hH2YYHLjMKfG5r8bqKbQHL9",
  "key5": "4WvKvp2qi39ee63fcbQcGe9Xq3fviVD1RJ5q1wCQpZs51Tsn56zjCKhBkhdD2goAQgirpjw2kDacFotj4twbcgfm",
  "key6": "2oMRi1AejhNxzorwNYDfUhS71Yr7M6Vg95j873wnvxk6LtGrYf8XjJwebB5FUN2pgybHVAjHgD3Fij5kkhdJYN1H",
  "key7": "3XrYXSRMDzQdjesWeupTAGFRnPf9RexKNx3CC3qXepihP2Gm7aZdVzF8aiSvv7XEkCNrXjsxnmggEaYKhHcmAmdw",
  "key8": "rTAwtS3Yggs2ash4JrX5ta7MbDQAUr9qry948QLbzCBMyExX91oQapArY3uuTNSB7Jq1CG2jP18jTjW7W3WqfUp",
  "key9": "3sTNmcTuWPKPRAEVcUjJLbByfNNVL6vhzxXC5gYgXVeYfyxxJSDAKvftwTLc6k6UKUe1wz8drrEgbppZW8Pe8QFY",
  "key10": "2NEs1g1GDLGqwj51dKLSC4gDbteW87ou5pMf7nG6S7xtDQejNVXMALivEtkFCTxtwfhKtiRSLwRvfYoDG5JsFofU",
  "key11": "52s1kLqikKzQfzfPsqDRDr71NFbeW9mxmfRWysF2Rorqh8sjuTmb6QTyXcKwve9X8sSJ5g3Nt6k284geTdczbqhF",
  "key12": "25T6bTrpMZ49SNwm9PJ9z5rkU7S1Mb7BYjv1eS36L7gaZbJx9fogQ7vqfZxx5BXDnRBSbDK2DMrdcL5WeKFvNNrH",
  "key13": "2kUhH9WLsA2hvDTELGMmv8E1wj8zAnmymwX8Yx4KFsWQT8yLsJa29nNhLA2fKs4xs2D2Us33NHKYXZ59KoYmXzig",
  "key14": "4uXc7d61qf2FUZhpe82aPHiRtqnUAFaMk3F3Ldm1f4gu4PDAqbcP4JE51pvrZfirFVUQ1d698QZWumtZxY9TQpZB",
  "key15": "368wXKnMJXmEryMPv6T9g8Xa3ce3EicDibxRbQScjougaAgnTsZ15PkhAwxdqjLQSAiw8p2ydDfCjS1kEV6f9G7i",
  "key16": "3jM8N5NW87fSH6ZUmHToMrUDjHxig9LABAqNGJ5ZvshC12XN2scDcv4TEhNeHeuQyC8k5F18kztT4VVkfVMwrFtj",
  "key17": "2a8X2e55yNEV7D5eZJWRn2kL4TRgjkupaXPZ1mRuQpHsvEV3UJgTXZ6w1dAzt8f3UmS9mhS6N1KtyCFP2qDs4i7h",
  "key18": "5brGmKRa1JoanjCF1ziMNCQwXXh91zFoy9MzF9WoVQ1XgveZPSW7YrNDoXvq431bbNiGoXinWWJ8GmbS9BGCp5nH",
  "key19": "3eZogCudsrPWjyCNmWmAbUqCagd7mQUEUMBqFs7KkVtmThumH7ndBmAoccmGn5v1DzoXrvVU2q5XXJsmoV73NTZZ",
  "key20": "3x59ayvRKrKgSLvEijNS3pqDE4AZoi41nJM9DyTLfvS7rEgwp4tiWt4NM5vxU3BfkBxXECKVjnHiEURgTqX3eyoj",
  "key21": "4tqetFFz8QqBFDbLrAhXQfnm93iA3C9uKZkLYypV3Fo3vaPbC6YDcVeGt6zpYuCmsx3mCJETu6cWeSdvsEnQrjtT",
  "key22": "45iP2HoXdsvwPGYTrB8cVRG8zWRpyMHbAZcMwAyw5azMW4aN46LFoHJxq3sKChJk6k4etJT4Ja5B1N9LtxWRXNut",
  "key23": "614Lrz2wCaUZBaUQjPq3LAWdYmMqdnmaZn1bBRpAepg1JDKC6cQdtxmKL18Sj1bUxHco1jwDTBk94sRJ25L6LGr3",
  "key24": "5KLv3AD2GoXryP6CubDAcRxvGwG9S3QNksqeL9EssmS2XMnv97tLSXdyrBgxHLarcFWbvcAjkYVuePwbVJjeVMh",
  "key25": "62dG8i7DnvAkuEfKN2EPfQMFU4CgsTQ4jBK5J4W8dVrdPo47pZKhPjWFmHvWzBa38cukMyB2RS8VSyCGQZ8BLbaL",
  "key26": "128wmBd7MAuQRYtYKdh59psGn1R2Q3428vYiGb3ATAK4mHhxL1u9bLPLgiopxVQWs4sikYQnTbWSfVer5royUqBN",
  "key27": "2fM5dFijQa3i4KSBAXjCpH152DctmShaRKn9iSd823ghuZfSfWjcunECkWRaFY3WgZdPKESy4uJiU2Bxmyxe9HS6",
  "key28": "4gY4Vxm32mAPcJ6MWHz3ARrqf5o7DHPMT7aCPW3ESJyXeL6pmXZFHRoHamKdGzMKu78soxYSkCNvJaHxNHYfFa85",
  "key29": "4USYjXvhSgnQeSoGm8Hbo1GbY4jWSmiqQLdd2R2cv3oRcRQHW6oEFuoDcWLxDcSmDjkx9iUNLKoHv15EQeQErmsj",
  "key30": "eM6MZ5K4vrECg3jcij5SB2tC72HwRG5PpJVHG2kvcuDrmm3Tm2qkUsL8HRS4wCHYG6neM6TknFBsihLfMQtEuMu",
  "key31": "2h1t2B1vySbQ7BFHR2QV3Y3KQQ24a2HyWNPkW1GzQ3dDtfm5uZ63QxBF6eK8w3MpoVZqJQBtbXe9jh9vgfQborWP",
  "key32": "WZTMqraW9YR5iHHry33CQGbtiR84YSnG188eti1qrQ6N3H2PT5xgvih6zpBseQ7B2fqa4tYs4dHwZpCUDMhQZT8",
  "key33": "3c2yuCXy7b885Xd1wJYxANFeb7Vivz66kdoy76uzwqwrcDdouWv7NvBjwjtfTXCWCkPVDyg139Qqi7ZnpqR9Pizp",
  "key34": "4GTXpFoju6yGsjyk44W3Atdug2NbcgNXLfkTapTzvPyEp7c8rjnUauxpCyBZutGd1PpXuezjMXYpzs2D9UoaNDa",
  "key35": "29c2geX3PN41XEAtEHXNkqqJvxVdN5EVkaGV9iSmdhQtk8WCP4iBCAxkTN7q3nrS17Vz652zJsfyeSrp6bSSw8Wo",
  "key36": "3GLoKMBHaN5AqMd4pFoSvPatdJGvXoxatv8VujAD6wQPjDxUGTWYxgBcpMFfy5rxHd9TeHvTtY2HxVXLXmSJEQ2s",
  "key37": "2Sv6TD39RS6LEF99RBTxTf9XezNoti7p7X4pjBwQUej5ysT6Noh9JUg4Y6WWJsK9a2v7w79b3kYziJsAc3wo7rUJ",
  "key38": "3pgci8soDqLz6CUqNCSVrC44HHdXpK8EWokFiZFjQeVPkHPZTkc8GDgTRL4ziqyDFuHPB4ecCjSXuxsbfXBdHdEt",
  "key39": "48LUM2LrP8nfpvuiyo4KiKzb44buoNaTfbJYhSV2LzauYjftjNdBEhTAdQdYkSGKgjhzPjcXH4Ew9FPu1kmXa6Qu",
  "key40": "2qrsfzniK82mpyq7cwMc3gWkszgwivVxf3q5ZRGBX2WFnJQwDZZwH7TF1oDoNwUMv8ohqW3Xzv9KPpHcQFTZxboJ",
  "key41": "2Bx4B9GwPb97tk8Qd5amrjU1k5YWE3bZFHXCPVT2YSWFQ5yRJtF587MvpCeSrNLkZ1HX8YNFKAaedArCyiN4fupE",
  "key42": "5TNzvTJmDcyQNXuZrehDM1ihqzSiwEsizS1poivVeFm9qrmPizvtN7xWzbVjY3JwQYnoQnLatqSp9sghxvAb2aNZ",
  "key43": "5GULfYCDhYSyV4YwmqKBizxjjKqEKhJPeYc7JmbeesQnURJwmoeqsxev8XaqYsMMgbWaPrsWUovmsAVMENLEB2Gk",
  "key44": "5TeJQzsR7JnM8uSSBPiWQoiAR9sAY4UkS37vesHjgHMRCwvvCVBRquD18p1RhTpAgS88DRL9FnrK5jMvqv74bhHk",
  "key45": "5apuf8tCJdv6pDx5EeHySJY8vFoaccksTkS4vMQ43L6tutd5gGDvu8JVtDPci77ADHdsg9sJnrHTzerzZphbAnLy"
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
