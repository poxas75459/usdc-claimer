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
    "P7fy8iQ4NhLAgrug6kYV1gR1g3icsbrtsEQxfzDxZ7W95jSNkVXUXYWC6mgT6aA8czpCHsr81aY86JeKm7Fxbtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gphTksiJ4Dq3boMjNYjEMdEwTUMmkHqq6fnZLK4Wu9ZwUHa3BQsLNYunfDcXGvB5cqPbNUK5TqLsxZabH5h97je",
  "key1": "5LNRdXMNjsYcSYswu8DgWw8esYgnDP246kbBs4BuSr4rkwK1XoJFKjciu3bhJxwWVbJMnZbKST9qPmy5XcXR7QUY",
  "key2": "5Mh3g3HA8HXNad5TEKZsgzfoX4niN4shSXLdLoskkrg8DNZu3mttRHjcJN1dcsXeGkMfqEkby4bNKR9LbKZHYQkU",
  "key3": "fjy9mLg7Kh6GU9VQv4G9SksvS9vbg7mMHoN1gZfG3hwU97fQGNwenurpvL5gGhMhBaMcgsC68GfRaq4saNdDga2",
  "key4": "UxGjoBX2QZcuKCMTUGkae9cto9wWZg2bDuJ9WPA7i2DjZQAWbDK76szuGDVYagFxobvRvJsrZCgjUdsYmYo7jBo",
  "key5": "HhWs4EmftjcaGF9BoHw428omScaCBykpvmDpXBxavu3wenamk4UjoGpw4Lw3P4UvGGxGV48zpdNKexxtseKuG7i",
  "key6": "2T48ZRLhahzYbhkoECf3bmrzkMM93s5VpYHitB6rUx1P4WxjeZJKVMjJke6qX81SR6krTJkVNKKuQPUSiSMKMrrs",
  "key7": "2DuMhtTzGSX2uvgoqwKb2rowFcJUFsHoW5uZaCJZKrGw8E3mm4PaXNGNBf1hvJYU8ypcZxVtTuotiu9gkhJhQ5Qo",
  "key8": "oaRk6ntU3WsAWdj48SVq8actbWN7PEBLMgcAFcBUoD6boJY6w6Qm11ypmmUhQTW1aX252tDqPVW9G29v92Jn4tM",
  "key9": "3o6SfsgEajxYnNt5YETThKJq9vGHdJ9b7t5w7WbhikC9HT1sQ9CxFM4eUrQ4pU9wpdyDrL4qLwH7x4FibG6DKff7",
  "key10": "5DkQM8ww7V6PAx8U3853qC9Yfr2fTwUcFR7CCqnNLE7VSyV77bcapmumYoZCXxn7H4Z6gqUs4dex6HEfBq7HjsU7",
  "key11": "4jtbvJoFqDU8T5bTFLqe4oaW58DwsCg8dGug5GmS5RS9xqwuPLPTfvc13hEVe8U6KPQ8KNvy8jJ8aTCDjTK1iVAY",
  "key12": "3pdi1x8acRjgS8Xgy3aUPZy1k6X3TtVgHGMmRdNMXtbDHpce97StzX8ETSvbULSo5LJWNHyiGfkVqSF24eM2iofV",
  "key13": "5yBkeNzSqXbPUXStDkvszQesvkh217MFEYviVGoi9MLAtDifFrEzrAGzPhDHdXVKSodBDDu9zLg5eUtrVNib6Eok",
  "key14": "3WnhpeWudvRZsA5s5uZMvViuKzw9fUnoaJr5F75Ke8jCqYRBsqkn9UK2TVqJeUXDQ6zp7T5g8PZqzprw9BTSvqEH",
  "key15": "23XhMjFUgH564AyBrrREVRZj9ZgQx8v5bRHGGkNCFQQ3ooFezTxRnbdJo49VRxQDVmD14gPaon3De7VW7FNJY9MG",
  "key16": "p8WtwUghww1XqFdPaQpKAHLcdZVhESrqegLTB9pGtWmVV2mT78qVWnLGQatqFqJ1KJ8DgrCQRbJrEwD5AG61379",
  "key17": "4MbhmQycKNGCjEtLXJVfpJgiEqWyxzAmbPNtrbc4Kdbda1cLi6g1G6N6CXCjHYfd6jnBP9ugo11zNhPrNuK4T1wF",
  "key18": "2oSYy6juJxZN5KXFxoKFhiqjv14TxJGV1xzV2ZnhygAqpkLbXiVGSzzke5tVGGJBGHfcQEyvsibKKbjcrdZGyvey",
  "key19": "5x5X8cLSnGbekPrQ7WdcHPwxzgYnLwMuZFCiuzS8PYnaT4u6ggigLG2H1yBKj9j3b6LNh7VCXzTiikwpV5uBUgPu",
  "key20": "4Hmz9XM1XrXxJk17tic61LmWnGigmgcXRq7P1SWX6BVXG6UkVR8aphw235xkdHGsesmstHtr5AgnwvCWbw5yAKd7",
  "key21": "3YNvBbpGVRFAEaA6qMd62xvDRFo2dMg2K9KeA7cCbvbKwM7EsRLaS59KSRVEGc8H78EMC1pQRQJGrvyS3dqDVNJR",
  "key22": "RxXshzyRnuoMVMeRi4oMTgcqbpg9LMmUvBSb5zuJnUwk6d45AdX5ARwfoUnY1JkUSB5pH3pFmFgW6MSegoFAucP",
  "key23": "4ERLMXtURWkGmU1SFTzPbr2tGiN4SmJyKda1GNBuCqyFXrVmd7w4TsK3BduZhfMYAkv25XyCWGXa5nmifodMx6UK",
  "key24": "57BRKtXknJLkzUEZsBJUTj7yfAJvcLvhWi6dFcqqM5r3S62Fp7jQ53UJLmxd1hxsghaKjtf8nZy9GTBtGrHoRpYV",
  "key25": "3pR3E1xo75k2vbJArkLaJEVkQzT5kQChgdDzKmmZVFNbG6SHneJKnrxsBvs7osvjyL9LksRTTDWCd8h171G48ShP",
  "key26": "sgVvns6MBL4rFrchv5tpYpcRoRtxziaoZjdbGrtDvqi4dBubp5eMC2KHS43AqEZnjFXFVBGh6fhD2znWQq6vgHT",
  "key27": "357gYm7iLwxKTUNurUghKUpR6StorxAk8FifoAHufKsqQZ6oJtwbhxjyHxyCeKDo6FdidUBU8WkUoYrfbtJSEtnR",
  "key28": "FR1r8Z4uWTC24pzoe2uqb8UHdR5kJNmy7eh3xvTrc8Sk2GYjWs8gWaJRePDP6UPh6ZGMHGEyPbPCfVWHYwFJCMu",
  "key29": "3jpC54D7hxfzRckj28g1eTFMPjsnDDh6LMspiwayPokB9v73YJJWqirc1jEYB63q1migVjYzjHEx1XjRdQJYvxPt",
  "key30": "4f26jdsL4Lk6jnLcsY9thx4d6BeDHi21rfnfQBHjtNV5z88PZnpEQ32JMFXNtbvZZbmusEEuiM2bwXG5mnRWuHHY",
  "key31": "3rM5mSNqhXJKJ9GybrwLqMPVMyx3UjsRhNaVT6Z1Xp4toctK875R45NjnKDDT2k2V55ADGFCG3zB8x7RYmx3jNn4",
  "key32": "2YzgA7KTToVVHN8T8TjYxSiso2yJJ3YCo9Ac5Mw617mpMEC3ihsXQELKNPmgHUNX7LCV4MQWQDyRyJK2xxdUpQ2g",
  "key33": "ZHf45928gz4vcNVTsCLfZAwoQLH382Ekeijjywfef7RPN1dKQjbQGN1FbcRCcBsVbd7xAaMuWb7uyDaeQVCRDA1",
  "key34": "63YYwc9DdH5ThWCpSmnx7UBAWhbj1pNB11CgpuzLzDuYRAmgAPi3ucnUCnVyjneELwZaFZ32c2xgafsDH99YpXZA",
  "key35": "4n46cpkgwrR7ehMiYRNveoaeDE6eJcJn6Tx3a8K6TkAW2kxRAL8LazHoyGFomgCjWC3q7o6mtJW4DuHSkZ5HQKVX",
  "key36": "2aqNhLN6DtmpGK9Z679MERzj3C7uMm8ZGYgnumaJvzWSFGqzmSY8LvD1Z89smA1KTuohE2dxYBbj2WtAnLwPyFEQ"
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
