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
    "3YuDripA29SUQ1rJAXQHs5idsKjywTC2aTADXzAax2E9JVTRJnpkox6s6RanZzFtWrxDS7U7z225SYzpF35Seb4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eswtTFKgqx2RDnyN3iCGih2dcRs5pCQmoh4Nbaq4LfFf6YdpSMuQftsc6QBnxpXSYCVgM9iChSnMC6DpaNehXD3",
  "key1": "4e3EZgTjSMz3U57imT6G16ZpDLV9DhVd5NSdGrySsrQd9zxweU2BRhBS2Jo9yboVNsxXrqon7F1Eb73cST5DBV7v",
  "key2": "2LirScfw2Unhda1cQDSqoW6T97FAQH5JNPZEb6SWHnYCB5pPUGWwSm3mKiqk4RQuPBdkqiUYvJFMCe3kEgKCu7Sg",
  "key3": "2kfSsB1aNdXFxB8SWb3EAv5CJpdqYS8agouRx4oZQM1Y4duXsaRdZxGbqKB3jXmhVzqMiy9r5fp67s3txtEM3ig9",
  "key4": "5k575kF4nJ7i46b4H1jt3rbCn9W2xtRH7Zu6jNbTwKpohH42GG9268pXQfhUHKJmDmBVtwafCJdmwBhCfHU3siLG",
  "key5": "5UKudUYrSmGC7XmehgeXMeN9b8xKe4vpZRbfHCw81iprTxC7RB4drezTPoTtxTEdCUzaDNikWCb2uVeUAg9UW3F",
  "key6": "5VCcyxxLWXVM9ENfDJVcGnrL52BoyjzVVX6m7ShggW5yCm5D1aMhiGnUmmRuHSMuRKnCwcGuCtebSowY4RLbtx4Z",
  "key7": "PcHqfCpEiQ5qyz3ii3R77Cj6zavyqWG2mXGaRuebZbHk9ehCFVrTd6Tbuja73dumbWerYk1dCK7LhdKUk2gav8R",
  "key8": "34sxMMCgL97knJSp7L5FErVDWT7y7feC2hYMPoTppsSvvokssMDbZMxueSpFZ1Ha9NxLTiMm6ijDCZjcCzTfCwkd",
  "key9": "4LikseRhuxWKUyLNYySmVcoa6xQNgw1naq5MG1RjZfiGTcUSGnspg5WK3or9i4AEQG3nGsPcbJZRXdRzVeRqHvXa",
  "key10": "2vbAArLC5pmxzFbowtAMXMimxFxxBNz2FrZAKaNp1r5gvXZoXPXhgoF7VQpVPpmQCZYXynQ376b8JB37jNVuio6P",
  "key11": "2HaY2XAjsMNe2T7gdCxdPoJhcGPzxddszvzkBdMevs46zbz5FJ63jWGvcdtUzaAiRoxhqf84YS3QET9ozidh3dmG",
  "key12": "45fGJbC4EGavHEcxFDvP7JYPcVj4vNXPNxtFZdf8WiaJWBvoUgGXwBZwTwYb5HQEWw9jtQUgr27GFFXC6GYgk8a8",
  "key13": "66huGhy5jBgSe9zFhhb7LzehifNRTmXw6R2hfUWqCe8fhcn1Cx1Y6hXdFYKDqZeVu9CJiND8Ctd3NdWEznx7zozt",
  "key14": "nuHHKBgz4j3e87LQ3udg5XgtT22y95HzNjjaCSwVFdQvpzfhUuagsavHcuuVDgS7nS54ztaNfZSq8QwMvHvbkLk",
  "key15": "4bAY6ZG4iKW6yqNBJSvhDhbRnQhk2aBn8dXHXz5LKJQUsjeLMUSgYKTZY99anHc62tGaoQRLAHYctCTMh1yfwL6H",
  "key16": "5ix2MVR8sXVJ39xQeKNyc1ZGhJDUd8Wm4K7TLsRaZ1HZ3vrexoZSEFphqmVF9SfRnBp8THxEM8oppnm4cSi3YrFj",
  "key17": "5BJM9E8THMhtgdsmYXEqbL1j99yDJ3iza2yxPu1bq5fmttjeWqGEew7VxbupU6Z64D5bE8gSHS6p5uHsS6JkvZUd",
  "key18": "5VQc6svBQjDQYCEnTPEVY5stzWGjNerxsT82t3PwZKyyZEuCZLEuTgxcTr12cNBnivUQWqmjoQh5zRRs2C4rtuvo",
  "key19": "LGHk2gkXcrLZYoQSkVsKX7GQRXLPbHPfRgKWHBY5XNSzNaAtyDPKyGkzoC6AWa8P7sYzuEGHoedToMxfaSQD1mm",
  "key20": "2MfdkdpxA6u1xQ75pgiZcYk2BomkkroDxAiGJzxUYNRJEfsgxjLLhAY5nPp9M6RD6r2gAaXvVeyBFN6f5AyRHEsY",
  "key21": "5kSGdBMuKJ9aQXdigaHbsYVa1jxMEGZEEJh4LAUw6mxb2daYmZ29gkX7WvvJz4f8Q5XhKfnBi5NN2CSe3NExxyZs",
  "key22": "4Vk1s93PnQpNKWaVLCPN1AReutNfukDWSCoCgjDaBmyZ7oto3w2MnsgGJv1RmdsukomuSFQ1HpuX7NReSeM4CzME",
  "key23": "4xLJWg9fKFwCm476kt7ixSBj2zzXhgvapawR8fZ9a71Go6kkBWjxTpw4une7z8V4C7TzuFhZq5C9iN66RrXon25p",
  "key24": "uHQWoZgLZdcDLjfcPDHJh4vEmpxbNzGQyoCRgRBnzrUdbXv3qazHTWxjxkYdtY4KcBcjtJyF5P6UJTy1GLFaQdX",
  "key25": "bBPpiXjTS9auMd3mGD5fteF1aAMZBT6nebokjDQvuG3WPdudE99dH4VTRv22ugPSuMWqkyvSaDatnPeL4DUBLmA",
  "key26": "3YPs1kqfbZAUGzLDc8yvmiXxztPr4EcvTzqKAujtcAy5wzfNN8FtZ9zzQMFWrD7TyRiireq7y3o7jzULxsMXK8mN"
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
