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
    "2CkjCZgAko5M5a7Xc8EWmN3sE2oQJAuPMmxpsHS34z4fbuvzTzXWYnKWi6RgbEF2YRTXL1yaUNfcKWxm4fHBJZtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VkSXmAaRGVyEduJpSfxoejjaWqh9gH7iLVCXiePFpeUZudDgkHtA2RWjJELaZYwwUbLp6u7cdf3JGRZ7mtoW44K",
  "key1": "2UP9dWMYYjf3FPRXfikvHDnVknvRFC7hmg7ziWADDpw8TM7ogoUJdXr1zSAR8JoiWSC9GP589e1aDMSbbnA29sQP",
  "key2": "AGAL1aDmxpnWDT8TANA1wXKdFBkpFFSNa9zbwvgkHE4KQu5TJJjdZbzPmXv2u1vExvtmUGToPUU4EJJbrDRbon8",
  "key3": "53CZkZP1p4XquvYnJXtRS6X4eUi9Yk64VL7JBKZrXDxcXVkiNNoCDCtLPoH6tu5UpBSQynLfkhiC7hLtsomqwyDJ",
  "key4": "v4tGsna6o4d9Vq98rh1tTVZw61BY3MibSuUfw3pTsHrYmB7VaEp3yTfwdHqT7XvGoe83fnQGXZoRVdmNZzG8iZ6",
  "key5": "2JyoDCikbpwSJp6MxAizuBW1P2E3L1mnXUUsfK3f85pdBiFBvXZjgmNKhA1MhW4gi5qRZK12YxdqZ1ssee9ApqoY",
  "key6": "2829hLRrGrY92MgBF7UM9Je4AKXM1dwGmXqbZkNUuSqU4T5df7sUtF7DbFT14rzM83SYMp4GYb25WTmc4hTGqT71",
  "key7": "2YVeBT3ux4cxTHF7o2q24WJkBZNb68bjQimA9DQ41zWNau2NjbMcancgemfLethHTUYptDEukU5b5G8crW8BizyZ",
  "key8": "5VdwBnWcCHpVYUUY92xtq6JVL5Gq3xfig67XRab1PNTUHEZVbHZa19nk7TazK8HVEz2nJuM1HQ86231P8r8epPAX",
  "key9": "3PbXFeSkmoUGyLGPAiUmfe4xh4TM7JL8NhfJZNn7jKLtmfZNtfy4Cck1kRVtiMj12YQcbLmWjzzGz1BGcVEcrGq",
  "key10": "2KjL3nn7wEnaXEfoNkfmY6NW5HBteDCA1r35qKoSsXAhX7p1zGToHgW1ATdAgiWRAoqJjUn2ThNg9B8p2KkiWyQs",
  "key11": "5dKXZvx9fTZDJ1LQ4o45Xw7KZNcQc899Bs9PmBX6HNZHwX7hBuPP7ArqFSxYiScSHJiVbpZ9hfZvgHiAZe6JnR3B",
  "key12": "y7z26LrzhPUiwmnJpp2KD6mWT7uYvx5wdqatBVkN78qEf6myokNgcPxMymw7k2fDtUDwv1jV7wM5R4E9tdLxvsE",
  "key13": "48VrXioYgcWjHZ39p2co7E2TKQTeQpt4hJ8RTpZeZKa1NxbPv6fxvv74Th5DBfV7MZwM446wsrKZ8wmPyY23biA6",
  "key14": "1gUGdcqPe5bWA3686KeMjajjPKbSXqBBmDRVm5SXc8y491oSDrAi5ZNrBvcE7Srk6FiBgsXsnHSPFKXYYyKXQnq",
  "key15": "55m7kAyzeDVxZ3NYUwSmWKeg9gz6nd5MEwKCPDutmcJkmrLsHJuz5wEs8ncfet1NEhYtFk6xu4Hw8fVoa2fSe9w4",
  "key16": "3c7YHvLSQvc6YLHbekvN4nZE4YNRfPb8QbqVQvR7opajMuSgnuMhh6ukCPZ8kt47UWLwV7ptumGV3HqbE8Fj5ekr",
  "key17": "jQFmnC8oNQZkh1GxPcg4LheJxQQuQ1nJBgiPeavoyz1Fzru461LLFiadCeEDQFgrBKQCH4NLTujCSyChBK3ELTw",
  "key18": "4pr183AgCnrPbehJoUCP3N3PxQ3sMivP9C7n886H5c5WsAbxvj6PmMVTUWePvDTZxdxVC4PePT48bvk9qegDcCKp",
  "key19": "2VqzM2W3AS8PtFnGdr3mvFM4ryeQWTRvkkeSMS8evzfbwY4QHn2Udmf3r3kqnsDPDsoYGPMSuBzXNmk58StAWyqw",
  "key20": "4kQ9tFyAkWtST1P45d6mwBo4RyXzsqpRHRXf3mFSZtu5F7pjjzNgZ4xC4smL7vZTybbWEiEov55RrdFVkgU6XmdC",
  "key21": "5i7meqNqCeQyMLgFJzTjoRB8i1d4XiK7yVGSu9CKrPQRczCHFTiJcW4hLYBAW4cgFPFwPcDaqU9At7WxuHbeZa6E",
  "key22": "5oooMniqX8AXhjDybn2DvMFmkZLZd8ZVeGEgFJPXddQzMRMhgTMjiUbT1xUFbWW6b2FTWTfNc2UihSajF68eLENf",
  "key23": "5h3rwDV2HkW922Yd3AcC5c3f5tEWDgiFPDjnLjYgMrB5B9Hn91jh1J357YU4Stt5W3gKg3qH9EvNSGQiaBVE59JG",
  "key24": "3QThiLmMFhNP3nckdkkoDvn5Ef8YfFAB6W2PMR3KUwVRrmqGJG3QHaQfXRz1jBnShm3VM7UCTz2fzmDAfmmSYNHc",
  "key25": "3FHKHT6i6BK26j5fvyXGNZrrnUaespvmLSTKX6F6GRtNRdFRCRAjAwkvUyAqLEe98ymMieXVc5uzD6bZL2PMpnny",
  "key26": "541kg8kTotPrD6cBhcNFdThxPTtBXDN6ZGEfLpsPoDHrCdxtFECmSzGCT4PztBTtSeYF9sCAXNYBfF6iLMb3n5w7",
  "key27": "BWwbUSNEHcc8zjEv5TLpFeVJANGxLwMKiCgyVWgeRMiwPe664taHbcAvPYz5HEQjo8xE4eTNBRGunXcch9m3Yj1",
  "key28": "392qeW2zDbjNBT7GDTiwHU4GYKRoK6SEpqEsYMoqvDoE7RJ26EEXYx48SbEviuEXuU6tfbCwGL2FV2jxjSe7ra6J",
  "key29": "5cn4au8KV3KAHUWWGEkReLKdmV1zJzGAqLVqGV34JfFS7vTuJ8pHZifWqgZmwjwsC7LkYYbX8fxYpUCgxDJVYT6P",
  "key30": "3XKYiSTstC5qT7mnrfrGeU3YBVuapZu7gwahYLg67PRAF38VestdvveVMZ1WjpcZz1J6VWvPARxtckLoACcWE6K5",
  "key31": "DrYRvY2SezdAuj5Jwgu7d5M21h6ah9Z1BBD6YqVbGcJG5UKVzdVizjuFKVMYq3gNqcJiTdh81VwQU9eddwHw46w"
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
