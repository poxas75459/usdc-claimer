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
    "5AWkNQJPL9sJhBbj5NU6XhT9jtgBhZii3hoqtKc8Vz9iRZXD65ocq2RaE6G9k9LGjbYskTkeuhBNr1ZwB9VSqcdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rSG5N6TuAEj7tAUJpKFos7tCzUvrffwb6ERvLJjwJam8HbLJbjPMsU6gKbgsK4sdQnhsM895i7dk89d4GdqFL2T",
  "key1": "4CzyteiLtE7Fcf6CKfxwjKxbYxTsePJUJTYvHhU5c6yzgWNGhb2ZTVXgE9nkW7cEa4SEYzBvt2e1jmh3oS9e56pU",
  "key2": "41byWX15RaNoDSPWDFP8FqqkoLExUMn1HbY7tuSKECAhrN3i6p8EU3fUua4ib3MJ7L9VixLZ1AminKpnJcHZpDAX",
  "key3": "4XcRQnefHNJnJYVMqBuJNp5i31Tfk687xffKxdqucBk1Q5jX2QM57XDagiJDyHXivUiR2jRR8tmJz8RScxb7BKHt",
  "key4": "3uSLitsseYzGpQKwAd5shbpRHovQDUDq8zfCbEzpAU2wqMELb8CUdrzq1ET3FeF7K4TEJBEXZLZT9EqHLX4RZVMx",
  "key5": "3sUYd7mXP3LQyxDDVK45Uw2GwkYYy5CV14ZDPpWmyULJ6MSRC9MCP5g9vUh2fz8M59LWCjbwQQxuV6f4NPbYq7kD",
  "key6": "5LHAUs9bgo7FCthCP3AFDoS4CuZYJSgYBUVptrE5395XhhnjAYmTNxGF8JYUkMPHG84c2NhsG2iHUc2n2buvZ4Yy",
  "key7": "3zna6ZyJ7EUUYoJYqUGvpm5kHN96JwBwKACF24kpSq1ftgfffPNRiAWgxM27axxJQxwq5tUoiCqVKuN4jLP5LCJQ",
  "key8": "43p4qxbeWxbis4EZ8WTWgL3ECTejvSxzRrToUTKVtjTFDvzhi59kay6sa1z9qLtWpb4z2CosFVEj73EQ7nStZK4K",
  "key9": "5CdwGYuN7miwXrs6NP9QZ456fwWvTFPc8APoa7jpMUToWw1F6nirpZLHoB9Mq9u5N4Hs4xgkPcXucULZSwWTdDxj",
  "key10": "5qm1XZwJQZYmKjEKa9eTD5PW7DWkmvEg7pJRpCWw22oHDNuQsHoisEncmtjJPToarTiFkvFPpzX9xYLx8mdzPGbs",
  "key11": "5vCTLBBsPS794K4A2jvMTq9wxRPkwcErNTE5GQWL3SiyjMhqSpvTqatBaUL77TbrevohC9UqvCfAQBtekQgX5GE",
  "key12": "5kpLu6y2ZRJqJtCMFYbdTQNVTduTNEimdQfdixRKHjhnV6nNwEbBqwrAus8gorq4kNuKDaoEZoHTCyu8N9FB47fu",
  "key13": "5HkXE3dLtYQ1XJGbNrUhQVU5Z4EqhKqoYQPZj2kDZB7BbULuCspBRrKs59brBKZEMjpTVTpevWRB4bmkHpM4e7DJ",
  "key14": "M436myVFgAr6NKG2J8udxWowXQeLDWLXJfzkmq3fnqA8i2wV8qgx2esF2GQ3QxNmEpGBuKD88duhNv9KXwf9KSC",
  "key15": "6k6b5GhASSjQNwfKRPaT5jtNdbN2tKtyiA5UNDgqRKiZS9udxGiDXTrQzWvzhJoSxeX5Z6ns1gYnmcBp69QHAau",
  "key16": "2ZchmKzyTdEpbMa1qe8vWJKu7PEQ3vXUQhHgdeLzNy92QmJXKKiqyr4JDuBmLjpb79LVzXnfGKXhsZGbcebwTnGA",
  "key17": "jyhcjeePKXzkJBHNKgHaUsBuJRdDM7WoNEtNmoJMgjBZN6xWu5Eq4F14ZZazFK23zwCBomiMKB2rS8B6opzPJsA",
  "key18": "XYefg11nTx6o9evY592rME5L4HHfrEWABGTWY3CH1m6szYcHUrwyAN1uzQ65FjpS5Wv89AVw1BLcYUszF2Z3mDd",
  "key19": "3vd49WbaRhhfLFuCjXvPCEGMN17aK1pKwbSEkqdFt76mUv1WLrXbfNyaRJFXck8ffubYpu8J2PNcELrHDUbCH4p6",
  "key20": "2rPdedg8VJKJB2Azy4Zhj9p7eFt9B2pUp4ANHVJtHnkTVbxthUJwMig5ptZoYZqcDBnW245bx3isfjJrCvnTquJ5",
  "key21": "4zvJpQDAh2pmDrACQpzuoAfLXVW2G5KCLq6uKQ6ENTRzsDmmDyyGiR5F2qFxzUc38UXDC2NwsdiMa7W9GJP7LTdC",
  "key22": "4KqAEvcyUT2EZrWLBg6uGjMRGgiWUwX8hcDXyQeBdeANMxckaNnKfd7iD8TJue7qvhrryhSEGeMPvikGtxmXnJxH",
  "key23": "vRbxuCMZWzhWpQgRrNDy33hct11h4mW8zCXwcKNuZKXDHamMYweb2SjKYdW3UPev7MCWrxqYWhXgrQJwoXFAqnR",
  "key24": "61xt2uQaJz42hNgVC8A4YTVu9ijgw1dkyeJF3Jn4xxw936yNjW9CNPTc6EwnkgMzRpfg5bq4a747p8VDRtXKEKCr",
  "key25": "2tQ7bbNoTZ5mtV8RaCRRAs7wnP3mrneYREe8zSkUjjpTsCUDS4KanmZyioLaZPHM4rh9Xt58xManbgpbv776vf36",
  "key26": "5BvVTDB9mb7Zt7gTvaV7eLRbhxU8Z5fYqjVUguZeNDCNkGd9QBDgZ3Q6JHMVfbWcErRwip4q1hSrF2Q5EadGWBmx",
  "key27": "5TYpoLYt4o9bFpNSsLHk7CxDzNNuYYD8Z6zUNgA3LipHjmCBmAru6G44quEEe8cUGQH3re9gUCakLtr59dJLE174",
  "key28": "sdyzwHkhoQXT22GHeeMZfmaJXaS6dAiP7VvfdA9MypQidJgTKiuLvZFGJa12MHnko5pcADykCqL1KGeU3KWFfY5",
  "key29": "2AtMjqM27Ub5Ss7eZxrrjJhVtFWgwFKYqWvybZ2g3BUxoLHyUSpNk9Z9kde3Tm1WeA5knBE9YM7STzCrPDoWwZSc",
  "key30": "NNdCMZoFA7vt45d1u7HNqkHWsus7f2W3uMZ5Pcs9qJjnoUBmT2yFD3KhgRLStdktSeGKQ7zQosuTTLdYLytA9qk",
  "key31": "VwQZ7rETtx41LFvfkmxoUtccLyiTB4k8LPq92E2zMhFGq8GptccCjXn2LKbaaKYkBcZVp7VJp5ABXkNKBXheoCq"
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
