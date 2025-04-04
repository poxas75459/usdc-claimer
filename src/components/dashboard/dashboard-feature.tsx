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
    "4D6TLxNHR1GmzkRo8tNEgBTjafB3Ti1TTZEetsbAr5N3QZWzcXf3HDchv9x3eYr56yHKaeYAGqvcn1wzZ35z3ePz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JfcT7BJUhpbuRDFmJbbRmpL4qhJfk6HaNMvJ9d6EFDNwgfys8eMmG47JukvWngJ3mosx8Ku5NCM6rjyt2wk8vxt",
  "key1": "2rWPaTnc4184CjCPc1GF6t5fBurx1Jqo1J5X4dKQrdstLpV4x4QwQRjExXC3B7kSJ6c5LdgEqAskuFgFUoeF5yr7",
  "key2": "5cGTUcf7jwUtweCFBDJTCBqP5KYfXDSQ2Ag5QVjLDyLrR1RLvRt8wYZdb8qQseK1mhge74rBWNyNKXCH2vD9oS16",
  "key3": "3k3zWakAXVnxVKiQVUJ5hRessbpacdaJ2tCVRaCs6YJvh7XK4C2Vc25yTGfGVNUp8U1tf2qXXpxrkFq9kKxAHgzn",
  "key4": "t2ScQWxC6LdirX7XYYBoeeKHiNtMEB5gmxx3pvRFYZ2Kq9t1jhqEghWcXC81ER85DS94tawcfosXFdqvSCwpPMe",
  "key5": "5Da1N4spVi8yP2Swx2K5aahGGCCQWdKJw2LmtS2nsqanbmV6LJQgLQXW5Hw3yyw8usfpSKDgUBe7aSJkjm6BmgiV",
  "key6": "ji2tVcruFsb4LmHPuYStCbMSxHfXYfxY2HLasEb1NYs6LiYZ4THzUkMCX44v4EN5wxPFnJxNyTn2z9KGQZkpwQq",
  "key7": "TVqHF6mLLh8Qk92nB9ZGnW63xsfXa4Ao6xqsjzKzZ7pmj2pFdemKbL1gMWdZ21WKAs9SPEChfTYM56N7DGRJD9g",
  "key8": "5A2dghUFJ7uoJUgBkAM9RqUPxcPikAfqZ9K4YCxttNkpVZrgfdy8fVoJYAom8nb7HKdF4WQcLZNBw2sW4nfbbLqw",
  "key9": "2bZ4tH8m7Tv9jC7QDqeRH2Sha2BHwUgtQkV9ECb7qfSkCYLjVbN2tPpAeNeHVQFBCGGZhvKKUgNpMxYXBd1YtNCo",
  "key10": "3EQJN5LRwHzRU8NbCfkbF1jRw3oJGMzY2RE6gAujfyvvzCeoGWsPdfAZhJsrSE6tHktxjnAUQEpRVKKJ8zbxDKDi",
  "key11": "3Tkmbi6qYpBcFaiHWqpWxHAiTfhes7WxuH8184pTQs2qDj2nxc2dHB3SJgCqc9A6WgsgDMKyfMcKgHDayeYWAqNa",
  "key12": "3PMC4gxngGjRkG1pJaw6Wvy2JBMMoL55CBUgCVB45PAdCkiLVK1pHmvtA2F2msh2ETTDF1E4acYkssd6PLNQrMYq",
  "key13": "3ASXHfCGjBdfdFhGMxxJQxkM4Zas1aoJPQCdo7gCne1sdcVJ1ktmh8Hht629V5rwhFJYYkVpFw29pSqeheDv27Fm",
  "key14": "4nEUy8Rxb9LHZ1rBPoce2NYABUn4kdNB1mFuojM9dhCTorGrEcxhcBmEN9QX6wmLYEwFezxnVvG2GqzJemipV2k1",
  "key15": "2M7FsS34pAgMTyc3yLVWJHVUWEYAwJ4zktv6ahUs1Du5vBL5dPgAuaLpWpBn46YiQrPRSpmZfHQcHH12fSwNncVK",
  "key16": "2rHomp7cKkttqfEeUExqdtwe8bkgqMXhyKAiscNweWePwqZwCDRWRf4taAZaNepGicFywQMbYQv3mQLjx1twe1QR",
  "key17": "56GiaQVufX2W75b2CRxbrndVhCDqy9ApWs1vynbvsFzBDtaKwAB9dmMbPUdrDykLHREJgQCFecd7csj95ggHRGsC",
  "key18": "59RBx4VtTqyfwTzNaJhXcBGxH3gKop15rbRQ781YtJ489tSmXgQHNmCDgw6HhekHFqimppFVGU8eWeFJVSKH1ZAP",
  "key19": "5NqiX6SAcuBYdDdCfdr49xniZopL9A6SVrs9C2Hxxgvb5KJKgWiv2oBR2z9uEybzHyAPxji97h1yA3fBswhtZfDg",
  "key20": "25xuvPcktfp8KmvGesvd1p6n87NAPs8EQCr72H2w58hLQBnUBobUKQYCHqxUqFj9GW6pVJXQbWrUtszDU6oJRodD",
  "key21": "2ZCwbjfX7qTDXLSXfvVx3588W7fqk8BPpckR95BZoNkDHCSAeQhVq5yEGpnxGvZ6aeAv5sH67p1qqKieKQFCe3bQ",
  "key22": "4QXS1hBsFxrfyjjLmPvExUaPM3RmgLRssLK5ippmhsAFkBnxE9EYsznGzic1icRZB5AYsNPVAC5vTpSKzanm4L9J",
  "key23": "4DefqEYP4Y1WUSimjWDnuDi36op2e9JMN3J47L9mkNzqnugr996wCmbKkYAoRePKdv6v6RUJSHvF5ENyXpBinjTf",
  "key24": "4iSy8xr2gYcDkrWTq6Z6eQWafopignMnMYVkWV89zR1ujTReBFF6QHBrveETpK6T8oBeomETssWmGfmg6EXxHFqz"
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
