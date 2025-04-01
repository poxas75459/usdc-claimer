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
    "4tRfJPQKSHt8Duqwhym19pKjm3VAjZ7h3wL3C2dM9QtDn7i2VJPRLNx2J7XM82KfHQ8ZSjLUFN8zfRUbV11wEwir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNX7aUmR233yfbfg2Y56kUoig9g2gaSZzn4ZtveVC6CBT31dsPT1zXyg6MQo1S9JgcTdm3zjmcCXGk7LKKdUM3Q",
  "key1": "4ewFM6ZxMqefKFjnTxuBZkpDaM61R4QfeeMmiBwELbTcYhwjmxvN4u977o98uyymYuV4qNYMQe556ZQLgFxEzqxQ",
  "key2": "3U8LvyGfiBRcq8MijtEsnr4ScKHE9Y2BM2FfV4BtiJ9bdavermCqrjFnXMzHrNDRp3E4wirLyX9oDk4ZzRccGt73",
  "key3": "2MozjFc7CfUgpTMBjHKwfgvBKTyNQMbuTc75238ySVxoMu5PitASwFHQUroka5PUyJevZ7swPqtVWeMm9YGqqrgk",
  "key4": "2fGqv1tmi2KancHQHU9Eoutb7qekSHcBd3jPScQZHYWDakPzCAFxhGC653FYuvVcrdTGuw3XebuFgGNU3rXmCmS6",
  "key5": "47uBgqTJA4pJahstAiej6rp2VBc8B7TwMbfUS2Q2Knj5DuTPUgxor7s5aqnnqNKB6xXsEpseBd4PxgYVAvgu1QUb",
  "key6": "4dmbvv4EpkfAM645i3duNBpN6AHKFQB6C97Tjh2UPgR5C8izDKk3sryK8uerXsH9k7U3cVVYqArEcArSqNFbRmQs",
  "key7": "4HUdTZ8wciGpXnU2XNpoFmuRkamyevaE5eqN62QYcXkY4sHeHCn6jt26XQ4GAuyMBWwbaGZ1zhAJqWSyjrwsRuBf",
  "key8": "4ABMhqcskKUb8SB1HG2wwRbhHjvGEFoYy21tQvCjM87miLND3qiCg2ueomMTVGDbmm8m6xSpi9H4jMDtcd5R38mK",
  "key9": "3MSMgvn6ASCcFLxHPmdvp1d5wyQPt7zzQ5onqbkTLfcx72PHypANb3dDwGUrq7eyp8SqvHmzEb2vXjHcD2J1YfVB",
  "key10": "2MBN9BBJxCFD4J8oANZhCavAmRzWe8iYZ5NyQvaDDGMyXW47tozf35oMmHhgtBpmcWDwCeRigdH7ehwEGWeCcWsf",
  "key11": "4bicr2bVaaAfPiYExzHTrDkSYDWMjMTcA6sChxpMPGLr2FhgpD4y41ipaBB6L81h3Yppy9By1pYPjtCZfwCiZg6k",
  "key12": "51gYrFijDZ9j8vorPsZpNjQgX3fsuv8XggpsvXm1ErV3bAE9thYWXn5quP49oYxWNZfJqPfRYyRBb9BWjnYDwxVJ",
  "key13": "4Uu24zXspBdYoRJvGuhtT7YF7CMMonx2RGmnTbbf3dP7724tsn4QX2VN3Nk3rWvAdp6nb7Wk3ovuZN9T7meGg4AQ",
  "key14": "5p5BkqgxyQJfwumLX6SaujqiekNjBnFcM666yVDddAxDVXP4GA8TH8oUsj1YyyXt5LcL5PSdgYfn4EW5FgV8Ptuv",
  "key15": "4FJLCyy5fedXU7aMhyCxGa5TrLerTFMgGK6K4y2eoY3cW6ZWPr55Pbj4wSYmK8KEnqQzrGvtbSQ33Cior6P8fLb8",
  "key16": "oUdByKc5X3soVfwX7X8qVQSipboKC3awDgVKtfT6XvKXSYL4NMYo3jwAFHqqvLAJ4CtMRaNJ3QS5CSDtJR9YedV",
  "key17": "2mZb3V2bmYkaMna368WpoaDTtCe8g4SramRMmzSTz5DWK7jV9M4Wn9Vp13XVEnaL4NwRbvPrDgFCC84zBibLLSFK",
  "key18": "dtmV2NZeRFYDjjPWxLXfUMNhLSVBQz8XgbhTQhvaBmtTNzCQCq4cGWt15y1efxXN15ErMpyLtJXsCkyXr2mYnFA",
  "key19": "3D16mgMViRxGAyVBwjGvqJ1zyeY4EnWagE2MrkvA3wt2bFcxGXSgm62mFz3gErAsqWd46oi5CHsUXBAvdvJALxyE",
  "key20": "5HQBFhTptgq8wdusdXVUFEu3Sy2ASsYhBe2q9fUBAG4fWJg8LgtBXttnuQaE6ELe8dT2BJdxx7SkT9FmSkHFXHqS",
  "key21": "22NJnQMgAXFA9Ze3iegFDjMpxRLBe3PynQfkJrSxknJt9cXJWazfGytjDLTLzoYiissz1edNZz1LosyBwHfA8wBV",
  "key22": "3M3N5PWejTLFpfRR7mBLuDaAxbkaVGQ9rWEntr7BwmoKCHGhaWEJeWevBhwsbsL9DSXtF3MvZwdd64HhQrGdufJg",
  "key23": "5FEvSdfhrhNbnsrjPbdpWG2esMSXjcm4n6GiseHkqiaWniXp86f3DGmdYLdHbT1A6fym88iLdNAY3T6CNEW5pZqA",
  "key24": "FuvVWQ6S16aFUwxMcr5495EQdxfkAUcknoM6eeNjE7LNXvxTeX1qTKL8jipfH8sRAzcwEb1bhy2MJaMCKS9LHWH",
  "key25": "46teCCFJ7zBwFZeJSPXniutY5RSw3YK82JXCaovgXe575c7W46jNyjZFMfkSaxjk36DpqpkZU4B9ESsBLpW2uAX1",
  "key26": "23yBYdYTbd2sZ77K3wgrbc5eXak631rTEdYKyFWxUN58PFwZWPd3iMRcai7UBK2B3HATwPZZBRQ3fNNXAA8H8MfU",
  "key27": "29A9ATwCEAUW3WJwkyxaYJnBNpL92VMjt4Z3WoxFqYzjZJFfyy4Ya8tModQkCgzBK3Z1LyhBRGTDPep6LG7yh7mx",
  "key28": "6W9c83zwzXCCQd6yV1TDBHgcjWT7j25pYn5nRqzgTZpgjyn69wJ34NnVfNAaBkVCmT8svagycfXoB9CQm7kwmLv",
  "key29": "337u8b2VMcfiES4sfeP7Zg6UNGKzd9rdthuqPoEcYcyKBiC648tKVthtb29MhDAvv7XRVc2gzaMTiw2Szu5VyEp8",
  "key30": "24H3fkCcdp84NhsQ1NMeXKywHCgEC8U6BjTQQsv49QwFJT5fQmFqu1nbEm5Fp2o64F7ybmHktsuswBUsoSK1vmXP",
  "key31": "4QsfnStLr7xpTa8mCZyzAsiG4tgXDrm2nj6K1JtZVWc4JgaLsBkJpoTbueSyhXqAzzyMwwvhLZoR6r8D7hRUcLCk",
  "key32": "6oMyd4UU7mifsfChgbihv1NjGvK4Y4vaaS91T8wRU7JoYbEJNpWKtUdABWM9k6wtupQ5ABgF9DbNYu2uMHra8uu",
  "key33": "VZ22Wo8jhTsyTKsxotDPpYJYURnzEaArRux85ed26L9zuPKcyVLirhY2MvyfxvDmuENTX6MZRniBKTTiSQkjnZe",
  "key34": "216GvRDH7nm5JPtY2VMTaLKWmneRbjTKsVJhqizBX6X8STn65vLjdjRd8PxXK4FXFjcVVPYkNLJc6wKgkyreCqDy",
  "key35": "2Q8i2Yusn1jevM8CWceBJ4Rs1VKDBJeoPnXbSnUW4GfTRqy8enqFJaJphfh4qRjqzZS3o8wkWDShQJK7p93G5hNz",
  "key36": "44kbY31szrMHcJz7Cq1h53MJSuY5iRKKtSXUuzCfQGVHjo6dSof4ova7aVs8w5NPYstvrx9ihLvoNUj8PM5P451c",
  "key37": "4PyHikdsXt26iBdvMnaVkd5UdswKRTCePUgTgErxS9upEkHVqtgo8vwX2P67CWLwjsUjg3XPrEs3tFyHF3LVo69c",
  "key38": "2p56TuhoeAuU1unwj8GYUapR9xj3jKJGMAXJneuLHb9Ex41bapeaVoJzUJNxAo695pTmPZFgvrZPoTDntitK7yij",
  "key39": "3dQPERJmthvvjFMB8ea4JsspUKx2FeCJqvMxT2WjRW73Gki2JQqmDWgqWkTa1Rwtwi8RpWnDPYVEdiMLRS2GwkbY",
  "key40": "2PiimuqrFEG7cQtT6X7uWZkuQTzLn9bN61j36qvaHpyv6MvYAod37TvCTyQbnEJxnb591R4Mg5PXp1pNipmS21AB",
  "key41": "51jN6aCrDutx2iNz9QkEPinpRpjWxc98Ad59pFtbaXhMzsaBDi2smA1gEEK2cDC7kjEjwyf4Sy7YGq6usCkk5jbY",
  "key42": "WyzyebsxRYRUFSvNoW99GbVzDA8AScyPQvPDjq8wsrfe8QG4A9pA6cowMJ2JfX3YWCLYvS1VNp48ThHoiSe3Zuc"
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
