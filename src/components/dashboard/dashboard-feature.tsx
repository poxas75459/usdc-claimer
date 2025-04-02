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
    "44J8p6D4UD5Egm1z7yR2t9dDMk5Xjvp8KFFYDUyjDbD2cUM9uztn5KKG7skFamSkmipGfCZWoHvVWrFBFReBm1Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bwQ9nM52azFya5YJTv9pv9o3YevZpurA3t9D48U3pAWhNraHDNJYf9dZD2tD76ynCLiS7KnYsUpiFKGkwfUronE",
  "key1": "4SUJqkTT4WZ1FAZEwto3mkrzjWHeY5YLPz6LwbQ1ZbEPaY4SYqxeJLqNcXdXgLEmLhCR3FNYmk6VW6QCPvEKi7js",
  "key2": "56SX79kzWTW6yyJww1LsuJuuqUPvwEcbHLEyEBACLyRFnwd8KpnuRi5Tj93LMATbdmebFxLXV6XKZdQvnTScQ99T",
  "key3": "3MYqnsRcsQtjPz2pAACvKHM68fqmYAK2fDTEAmKiC9e7zf7cY53ApwW9WqYCgfWmL4dmotxrGz1L6kJB91opZoPc",
  "key4": "63wY7NKaVNh8ygJA7TBHHLhaV8h2j9vKiF2niPwcQDBGXd1hgZpkDzdbVcyXbbqHSKUdh9uzfVrdUVVUdu6NQ8ke",
  "key5": "3gEfcgXeSCE94GBjkPPvo3gAkq5epYJ39A3FJUqwikmNYz7ZJpKK2DQJa5pdFbM7DPzpCYiji5gPgEJtusXKBwGT",
  "key6": "HEMnUfWRV7nqqZVQT2LAzEJ4YM1qS72hZ5CmpSoitzko9ZDRJNSJnBaEeJt3AvG8CgV9Vk72NGYxUnK3eZWw8Yx",
  "key7": "4tKPK1cANA9bJrF4VCfebvK8Mrdeqf96NBh3u7sAgkBgvoP1dVZyNW18V9eXdwEWaPgAXF2nytYFZqTrc9WN2TTQ",
  "key8": "2ZcpfhNbaqDJ9Zp4GJhJdj1TkELT3rF9rdotB5ZhizcYohhPB6u1JvKQksZkfSFtYfqpwzov5YBrHtbyFh93ACAh",
  "key9": "5oCnZkfCnGVXfzJvEDMNMjtaN1F5YWMaLh18eryqWv51dkc39y3Gn9C51XBqFMPhdJ3HuV9bPutnwC1N5pu18sXe",
  "key10": "2hbcmfJW5NPqBfT3unj85zd7s45aVnGFj18rS7RMJ4Xhy6deFsGbYcY5Jz1RnzkztkJ93D8AUhu3rxTDRK5iUtgy",
  "key11": "64Gvgbcg7VZap1SrACopjbsR6mNWnckRuFLNh1FY4dZZ5do3jkDE3yetxLQp5qzMQ7ccEyRoLFMmRoHjAV638LqK",
  "key12": "2ArMM3odXr2ZfEqdiTxzCiNzdDTQChgSnKXmZagaCRoPLi21cpQASSn6UiaqhVtzNY6hQog1LL8McaJtfPjd5VZG",
  "key13": "BAKMqA76UdJvTink26ZjW4ifQb8dZyrgR3vGyG5CgvJ8VUwGnsJABNMHEXn3qdYRRWtCEmAShYgYUb7jPWKVcjX",
  "key14": "VcmZxQQacWpm39hVPaVEt34TdG7F5TYxfpMVATFkxxpTZmSmdpHjYEEfm5tPyzjLXBY7VByu7gfL35sSufQG6fM",
  "key15": "4m4xwtu7oqfC1RvdmtvXosycntcjLjAkwQSnkBu7HDeearDuZVX9qgrH3FiG3gPr9AvZwd4uMhTDJehE2KCGGT3U",
  "key16": "znW2UcUW6qPGdHPa8dx9vncUfoZcqKshNaefeMYQnZa7RUwN5wysKRoP84DTAMzcsaRsy2j7aCRz9NnPC4deXVt",
  "key17": "24YEcD8xtw5Zhzjh65iiqCJ1dndoRhPJCDsuLsm4BohGvkBJSDLg9iDzbV13LKyx35oQh7SDZtmvebHo2FWKqg5f",
  "key18": "4m3AMoPMmohRmmzpWgLpZKgUtJRwKpXBTRqRvptqoqshti7Zo1Fn1HaAdrtUxUbssiBHk4pca8np55LwMUjvJoD4",
  "key19": "8TUkV7Md52T4KudV5r1mXzRskfF6xcS7QvxskbcktU49LpgEzxm3g2Uk7fJrZSbco8sMSH7UTURVDEYYzaEc4Pq",
  "key20": "32SdJBkAxTakadQqybCGPLbytuuvRr8Y68RPacC6kCXhriiwM5LCEF3eF2so3NVVNwtZex8E4gcRu2zY27jhX7ef",
  "key21": "3Dz6qVgVchcewcLHgHJtTp5dS61Yu1jcER4AN9kgc7ZCXgTPfuUK2edJeiaiDS9MqwemMg1duijre1gJR12dPCEn",
  "key22": "2smNYCnwNnBvHCJYb85CKQjKq36jHkbTLxfCu9z2PtGVeb6xNMdGLkzeq5XXtHd81JmUFRKuBhNbK5D1XDG9kFHK",
  "key23": "5BBNk99e7YV6KgYCMBTbKJmAJtuHp2todCeqFu8vrrETz8cuLg2eoK29B65tXfKhqq1k9dsqdiGoXSxqVcKmwZ7t",
  "key24": "3AopfYvpvZWJ719EvKzPJQepx3fZQa9fNNuRdJ4UecUmL68sMkAo62ydabn1oWhr4qvvsfgRpHp1fcXp3rQWerfp",
  "key25": "HwKcH4rhPdcWJ162WpReZxVVt6GXe3jHpofQGkcmqg7vu7ogKG4iMdLwEj1WztrFPZDxm4VctLqUD1L46PuRXUN",
  "key26": "58fdkcgDWYP9UTzwurkbmPdEf8TS7YWM64d3Rnv2A1qo52LZ27xo4tw4zVKE7Xam3jPrb4nZyc1qRntVQobV3Vbr",
  "key27": "4ncVL6V9QBa7edvnzdcqvq5TrRnjJTHFUSYeGoneECUpW5PDnbShvTkKtzrSkwXdQSBgmh1dBKDx3qKbhWPkoDNE",
  "key28": "5kSueavxgovnppTkqDikkwuhUPcVXa9CdaXVLyD2hbXPw6ca3sBbuqJddfcV3SqG3RqLpKLgRncX6AF4jDoLComx",
  "key29": "5fUd4zQWz7UkCEUKi8fFZraenrLc6LQTyB6ZJkpMqTQSomysvs9riNrNFXKBxMdVkiX75PvfoFMGkMp6rBpDdxpJ"
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
