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
    "5iYNcbz65viy3hGWGx2Nez2a6v22WBfPfjrt7SFLxkDjbVgqmDFxmGrtMn9YqXCf4WgSCnZA6VKfD4gsZmt1iH5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZE1zvgLhPAq11MMnqHQj92eeGVtp6xxtuWbfSXo7fAfn9bxnGzZznERXDEVTMgZJJjsCpVBT4Zi5vsfBi7vcuvf",
  "key1": "2xYaQAzg9C48YzFAqrLTZMc2awdST86pxCb4S6G34aWqdE8mEeXJ9noxzQK9GmDHuPHbWTcG4AfTxVLGtsu69mRy",
  "key2": "5E96wh5gCmwzjp9pXwehTkL9hwTeFXLqnusUtW7fPiaizkLmn3hynvhSADfPq5i6hhKBPv5HGF6ArAzyQjwEmMQS",
  "key3": "3CuKpzjkBa1ahTgAMZDaLLrrXS6v7VfD22K1iCcn6jjtZQUFAcpc4SbgC8HFFw39Y8qpHe1L9u99yNqQbieNDPU8",
  "key4": "LS9pLAiU2qkLtskq9qbhLz6CGbRf2H9P88uBvLoUj7qpBHwUT9mDtYNieHmJ9U1W3oThma7NCV51r6N49ZZovMG",
  "key5": "5FcukUjZ6Hpkicz8wCfm7Lyb3QuDyJme7fWxYvjyjX1htAHPZx4dMicy3LT3hCRX3VfTbpH1J6MqzqxDdViBTCHm",
  "key6": "5mWwNNcwQUjR96DoPpn3WQ7b7x7ZxHbgZNmC7i8Z5wA9oQvFN7QsAtpaiFfUEaKEAWW9Z6Nknar9vFkpjpJWUGEg",
  "key7": "Pk1XZNHpJpq8hdzKU8M2HzphHcAvoYhB34pCV5d9Vo3vcY987kEpfFrXkdPNUXwRdUeAXBJwFTVh3FTpLxnKkRe",
  "key8": "2J4w3P1qG6G8JjpCEXf6ewcqCBPpxikLs58oEpvkmafUMjzu7wu7z5AXBhnZvAuW2EfspsYaAuWGaeHd9LUraZqh",
  "key9": "4C1jwVkCaYEKAU7TZwEA8gaXAnZbYiCjZo3ZZCSvuZaRJCnVykeCtbZ36qnmqfa9t4EGSsoE1qkMyDKJk6ersbpC",
  "key10": "5WZNsf55guciZqy44K8yRHgDRnX72G9YX8JGedczymRB9AaKnoqmFMkMZCYyT4iPddG24rv2pfGuyyoFx61YugGC",
  "key11": "2mSwAbnHFdiuayoLZ7tFhQ886dLsfXY442oVBVJF7AWtgAZtcGxGnenq8S5WEudb3bVmGfpDRYxVimzuKuggHjn8",
  "key12": "41RmGEy7WtJwoSAANjHf6dP9V5xAVo9K8sTyDLQL2et5UVf5pDqF8Myj3MsXXgiixTTxFy2Y5rjJ98K19KB71hDY",
  "key13": "5qsdZ3dLCpfxQgPRAbB6ZpM3Us6yW3jSgwQUbbXuaNvPG35TCRgSxYE1JUNye4WgsnnBUZxTXpsdwtkPQXL1vmqB",
  "key14": "6Yxm4cKfszb8UzmbiUJo4acoB8L2JQxgCKZPwAD5JgJzY7yWXToXWemnjexbGPd1GzcHYxJdjQqh9gjwLWVynyc",
  "key15": "3DrTnnomVcyftUZ7DL2cqQgyea4keRbVJ5cBSeS6T1RKFyFaq4BUrEaeyFXYokjq3hzxQyWTUfTxkWGGroej5KEp",
  "key16": "4djVTHs3ZURAykpgUqivs4J5TLeictFg6M6QGPXwEnZuAK69aD9XsBsX6x3yRkow1qStRjg6cfSTVLUBfxBu8GkT",
  "key17": "5HPNCj4Ws1DuSB5Uuw9vWP4a9UnQAMMFTKHn2JAMGkJh3HQc1VB2xBgTQXdjE6iEpsPGPLfoeCXK5jhxYTjRRf2j",
  "key18": "44Qtgu4c5G4JGeStToDzTrenH2yuT27iq5dcH1K9ipSFssDNG2Hkx7YxCL9qRQ6k42egFiNwG9fzTgEm9YCVdxxX",
  "key19": "P1gnDCtkrKeAU8FKHBiXgdWUjTARdVuo3vFMGBtQpdPyyJ9yi8o9wew8hp7NN9kgRYEcgc77gVCYZgSJ55KA8m9",
  "key20": "5MZcMpFeMiF41LQWXrX1cyt6b257unejUScR9sEWbRkXPr9ZESTYz1TKuTgudPSjngU1hdggCezmC3ZZik9co3ij",
  "key21": "2yrbUqND79nPBKmrSLRCYaqrLSYsjSjE8aNaEBsAVbSkZ9jSAsGVYMn6LqqNGZnN36syNqyKYRoyQRd8uZBJqi3M",
  "key22": "2yaNvX6x4Co1jqjBwBhdmKtgZXnXEpCkbKR6N5SGqqo9rCHR3Spw8NKAdALALJxvADH9HVAck9dMFF42qXPiTvj",
  "key23": "48tvSeoGwS5SDN41gFCsSHRafiW4tYNbJRySjr4S6V5ZaV5F8hX7ZUudKXRdHi7mxg1WtHghvEPxCjp8PuNTWHWU",
  "key24": "irconYy3p4xjPiVT6sUUejyzZmVq4secwLUrcTtytpVRYoUAtrr3iktzeKyjFKHPQqSmFsv4wAviasi1P9cD4dw"
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
