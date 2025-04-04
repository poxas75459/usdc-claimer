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
    "2oPzBzeJsZDbT9En2gL5gMKTdvtjU8YNUZ1utpLba83MfuCpZdh9QU8n2oXu7ZBV9FAm9NhJk4trkXtw3mzrC1J9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yHVqno5PLPVs3AKmTthrk1EcfgSojdQNQ1kAKSC2Nd5iPzo4MWF4WftoosmHQnPtWiLDuUaPTR3SrKPuGNJBWXv",
  "key1": "3Cf6Z1wF534cjJf4jL3UyKGoH7XvPrnW75A2Z62kDbFbcqUmbMucs3KYf8cgf7LvsxpWD6JKfAwdeVziuaKSFHVV",
  "key2": "5XHmxP9jffq4wv94dPx3sttSTHVY9PVSreYSCds6tBswc2YpB8Kvh5dG3q1UksZFFn4kqxZSzgLXwzZTMqfYJHwi",
  "key3": "5fjDzXbaTcYkhXBvREjDFz51kNJPPEfHAyrvxuu6javvRBkx5KcadAm1u9gZ4Ej9w2yPUoaBnwJQZzLjHppLNtg4",
  "key4": "2BQDBmRxaiY9vEkSNvhv1ZqW4k2BeAYFxf7chtfGZ7gGT1CmUM1g1GQfjxGN9QuNwSq9mLVACx3fMVKuNt152jRi",
  "key5": "2QBjs61uXydPqB3YfwrwWb7y47KwmxABYLUWjUW8N1We5JeJbtPptq4r3ySdUE1qqMB3SUE97QkMMpLfQCeWf922",
  "key6": "5ZEv5pEQuH4japcdKWxVieZPSVmXQcZUWrApm6WMABPY9FwbHyPYzmR2okutbRLjsWrkaMtjSFLaTUam6mVkNVB9",
  "key7": "5QpJb27SsvTmrqhGVyGppo1mU98xhdEQovjtC921BJtAooF5TGKFFtuBb8UEiBpNnJjYJo3xKfqqdsMVdKjfdE9c",
  "key8": "2TapPFR2qiCBEkBU2t1CoqntQsbe9iQBmoxYHZHFwF32ojKJoLB2KGqqHSwwZR7P3ESzLXzCbDm8cpNPzZm3yG8",
  "key9": "4e8uFvTwojz2jWjP45VFb7K1NAV9juaZVXYZNr8nxqwKr1SdHaWDJBvL91WCXWNBeoAAMiSwah712LcWqk3QBech",
  "key10": "2DSBGPBnPwwH87EsVDqbexrNw72EDHzxY5huUDAqftbCvjwqgYnHbN7xRyvBLgsoYQzKfY4SK5Y9ZWy3CtTPpykQ",
  "key11": "wULDTcLH3hMUSVgwBNGS3mwqspTPRb6ANdWJJUBZ3VoXmdTvQTGnmg6Mz9g96DPdnJjDYHqpyELZqFbDqpG6gQj",
  "key12": "B8FN6kxZGoNGRoJyqdEjJizUvyW3N4QPJmebADG3zDRKLazpWuxfgjpP83jrztfBAVjHcMuXVpV1xSGy4GwnxjY",
  "key13": "24YAam3F5kJ3PQdsX4SAb9ewJ1Ubr13Kj5fE9SmC2TcodVbn5VeYdStrqVj9q1ceo6PdrbxjSbw4d4eGjWfpTxQy",
  "key14": "2GALakSWSxzT4na827LiNnvZDUJ8giwGDxgty1XEZhWwqRfZu9phqDcTwRJiVknGm1McGHn1H26tMFWZsU2Aoa2M",
  "key15": "5TGtVkNEVbyhhArBnrAoPwH5bbNGfzaTWvE27LKG5HkbSVkmySzouwMk1Wnitt15iJ4sDuWXdx2fWAPCTocJr5C8",
  "key16": "NPKMv6NARvJU4Tg5ct5tazFqnWLLgE8zisHKGjjKVQMhSAU1gmqya3azenrMboPCofpqCrofmJ1iqRHndW91kj5",
  "key17": "2mTJEJ2UH5rNXKxvgCzZQPKU1YJXYxBRasbvw78nut8rHWnBKdmQRq6YJrQcFqmayWFSQpXpBHaQza8S8bXc94b8",
  "key18": "2qX5NKkWQYkLTHBqWom9kq55VVAB77wgAPChN9WzYVnkDi4TVPZeUtYQQ31sHaJNQjcFAFjWnseFoyrTnkmUsnjH",
  "key19": "38mdBjBG1FhuoSHvYTEfWtCjqCBLWiayxiCdwDsSCAzfZMaHWgrDp59PxKKuN7XNVzfDktG86d7u3DF3g7MdLPka",
  "key20": "25bnWhkY5r4NRMFeVt8WRKA41qW2Wc6PXDA8AgMFe8ujFnpsoq6Ti4egLt5jSrsZVe9tKe9YzhNLSqGE1DWtNRfy",
  "key21": "3Bb46ZxjhfMwUFaPVCTdFGErcZdgUrTsAS7sWzfmrLfvW4TpEpLdQ5fqUWRVyvxm4qM1iNRn6AXVEam4gpNFE2Bg",
  "key22": "3FBzZid7h4adchAFoRnmtwKJQzMaThdJ2H4KWcX3fapN3kAf3xJwQzZJmhC512WYiMv2NKieC2wCEbh1AwEFiWN5",
  "key23": "86njrCEzBLZccRXFdi3vkrCbgFzhYWVg3BMtwceMY6QaHtR3PxFViFCun3VE3JX2ZaCnvzwm52nZeQTV3URHB1s",
  "key24": "U2SSeJa9bxC2rbVxxQPhVxLJiDG4XEo37WvkYgTCKTvHD3wkQBEhY4XeR65to5rnBnAmkuGt9rucmh6xGFfx2QR",
  "key25": "3Vgf3z4WJYAxFCmZMRmQSjjR6ar983gU3LDeC9MmpT7FSU8gf3puJ4RBMJ8jZESvvt6yWPBEDbckj7dcutoTypR4",
  "key26": "56DN2cJpxnG3Ybtxcbaf4BgDbygFN5ReDZChb18K8yDs2ZVngfhvqtY1KXD7NXS3uxorPxsW7GXHzipW8VhpHKCc"
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
