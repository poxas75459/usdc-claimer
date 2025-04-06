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
    "8UGk3YipvVGCX8hTUX5hxQx8gFSNCoKsyBSiRFrS4e1sSvuqtXrsc8apEH1va6hT99WJCSiMPiC3UccmAV7TtiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6YvaVL3A2t6dpvPHVCDTprEdn9RtePyEDZ1TQVkqf8t61qTY45JjL9bKzVaqH6pJu4JAoCb1LLdhArE2R84CWA",
  "key1": "JvKT87BwaLfRixQWN5snu227Y5cNTd4fX3PaWhEwYYG8ZdikZAcgUctBjL9Xk2QKiPDLRACtm1FUAJ8ZveBNHw4",
  "key2": "54hH2G6Kg5muJwWN2i3BxS94uMiSd1zmQct7eedBXRHuuDdy7pbbaTtzpzadthhDCJs8wLSM9pC3iQ5xUg9rzDLw",
  "key3": "3ngG7Qu4nYvP3kdbWf9CeGKJzKLLsY8JpeT9bRqFmtsy8hbUG9FBdt4SeDRJEKd8DA6fD8J6qiJsmtuX2UW9pG8D",
  "key4": "2acBf3rFMv5Qv5YjN5UooMxn2dq2z66i7Zyo5iTuKaXWaiHa18dEfkaV6j3h7Vm7opDhUCw9YtBZFZa4kmKQ4Zaj",
  "key5": "gpkweCobX8nwTMYpr6vKnS8qEZHGLNTztYMuAGGoAB5bxu5CK6eBQEXF695yMZ6Epfjizm737NzBbayY3FQpu5D",
  "key6": "2ASgKTGPMPHHHMmfKV7P98vPZKDWUmEkW3sYHG7J2VdMb7SxSn1GmiXfUMpV858J2EiY9oWpHwx8TuhBBVrSQNDF",
  "key7": "5BjPsuePrenDkNCJdy1GgvLxNMHQETfx9fJbdkkvQ6RxUfrge97QVvTY1VhUsCxSFZ99DXRjB4JgQanyWz3B9bav",
  "key8": "4KepMjeUhVrREWqPRkAQREQdDUjhyXKzg9hufUkYNxF4ciqtdTW6HPro2vbFyrdKQh4SX6uVxFUv5CLgrTocqSy5",
  "key9": "2ZdYUQ9rNWWyGv3unESh57XDFsoRiCvuT7EeRvMHQhrcqez9tQnbe9WJCaRiTscJq1eQVn8W44Jig3JJEDCiYg2A",
  "key10": "4mh4HrNKP4J9yZaB5XMvdw7M1H8hfzyFQE3rK5x4yAMxBUuLbEA2MKmB1xnqwe8E89wtuLpuGr2M7qpLvGWZoztP",
  "key11": "4Uhv5eWgDNJArP1R31rBgKStYPi2PjQY3C2BTjuqzTXRSU2pkEiPfxS2Y43zwSFb9bXwKqAAdLpifX9E123zmjH6",
  "key12": "rEzWNCD4KeYwJuNAVcxjBMgD6QKGxFWE6i3qxNRHvS7ELDYTNv3kLAnngq7Q91D5ARPJuu83fCQAeCSjzrzZEz3",
  "key13": "4uhzFU5FWQXkqyCnErVNFyrhhhnzm5BwzzQFsJ8WsvnngLR7rYTAM8HHDLxiauswSTT9ELdpC4YuNtsXfgfFFXte",
  "key14": "3HhtrjbtiU9BLYreyQUJmR9hSZYvnLd5CoTBhWy3zwjMWtbSPw1AZ4Nf6veQEK9XEkkWyL8GYQnfEHw8F13dGWGr",
  "key15": "37enXGfG298hEAxEogf7BHkMZR2eNPDuXzg5uo1xYC8NG9BopPcPcEbMvdZM6qhRuvN8PZf3cS4AZLgRjxqdgv27",
  "key16": "5oVM1NBduNNezSgf2X7YqhrBFaosES1rzpuSuYLwXmDNMSS7GA5cSC6zYc2oVPG3NBUhrzPJ3U4dfbzHqAE7d5VB",
  "key17": "2bKwQJD6hRwa5VStnFZghSjs5LiGYTwYFz8okbVDqG2tn74AU5aPRcyGG5SC1hrMwcU7mrjSzNRa9Mq5wjEntx42",
  "key18": "2GS5MaQtm5LAsmjMdu8TY8YTHSDvRXr8HaE9Lgf9gJRJemD6Hcxre7xjhKpatAWVBkEfCizySS4ZHWFVysnVzwKh",
  "key19": "3jhqo9RFY7SP5fp1fhZ8qJQGxUyQkmhFXK55WMYk9KYQLu8Y9gajALTuq6v6FvnjbXZ6vKwTDHeFhzPpue43vhYc",
  "key20": "aPY5T1Vd8uuNFkebwc9U5qXWSJBVmmxn4MRCfmFjd8EWFBUiNxtnZMusUgMsRygAneBeEA2yT9dN6jbMs4y3G6Z",
  "key21": "eDJjqcYaAMANvkbem3Dau5romghYd5saWnm1pGADULcTQvkesVzGGjNxRxBN7EFLzKsXjpeyeAPAEiJQNrdMvmk",
  "key22": "3k1T8uvxbC1wqJCnGkVcRtW6T1NS7gqanFEScZdvnyzEvR5wBVRqdNYUA7LjPdvyPuQK55eaorMNnuuS7VGBhYrY",
  "key23": "5yLPmKKk3q4ZbSKtbUoRrhXbX5XVyfztpo24cQCWfkCHn9PBiuAB2pSrTCSoypr1LRcJnYuk7PCQff5mxWe3BwTu",
  "key24": "47sQ95NSp3mnLsMmXaoVJxuVv4ynj9HGEbCJ6HHf1MtHVfafsGRZsB2obvEz81aKuUq6DxrzPRYmMELN9kKJDRty",
  "key25": "5eSDehncm5wYsdrj8GR8S86ZKDgJvgmxjhqGmMFKAR2XwrCSttwSEEvec2H7NJ6D5y5N8q1hrALUSJWQ3uqkQwnS",
  "key26": "5HT4zShZa9H1ckUMcSDMMqkayygeCC7ims5e4HT64QKo8q7zHdvvGxUwgZskRHHfKHhwUf58NhPFNJRnxArXtbyQ",
  "key27": "62yBdu4TGqopC7h2iobkXikjz9zwHHEC5CRnH8QxYvqh5rD4DykgYiFLfj7pNwHSA7vbPGkHZek9LZ6q2vTeFBF3"
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
