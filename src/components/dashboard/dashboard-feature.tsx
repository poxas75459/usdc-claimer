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
    "2n9xAnEUaBeds6QLUBrfvqyWbY4EBRH4L4QouF3kjbBYbFKgH2jKZe1Yo1ZiqwQxG5RQHPjoxvKKb5fW2nrx6N7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HzruZn83bnhBihJ8gqqwRfqPJkCouVci44BADJtiAw2emNcQxEAAvJXsbhiKZvmGKwusbWXNEzSgsXq86TT2XwD",
  "key1": "3zQppYCcKrchmUhDAg3haNRstnsw2miWKy3Qx7qCZBSscevLyzQ1LA3QTjkBNCFdnaeM711BRG3ZyU5ffTqUn65N",
  "key2": "3gN1NU8bMibPWP26MFf64G1Z2MH8MjcKYZyiQhoHDpRWeDfamiHEUXMvCYrzqXSMerqo4PZToPLD6EnRRQ65mzc3",
  "key3": "4QP8ircbB7SYWx2Gutckcdw9pMen9NQhtfjwgYnQ9vFSZeKFmcrSa6GkMQJ1uP69Vn1fCZmgoGY7V7qvAxZg3uKs",
  "key4": "2CLDULCZRNyxPtnHMYGqmKoBtZwfGcSX7TqF1XciELyedNB5Yue8fVJNe4EZCb6aLCe6EbGVxQCfv62asQMMaRwY",
  "key5": "5wdaDkh268oPCHeZAcJZqTnKc8U81AcbjVXQfv15Dt713joT6Am5bYafJnfJkbckjT9eB2rR9tSsMziGnYRAM3oL",
  "key6": "3SC4pvDdhWGnXGHjkbQkthFqxGHzu1G5AEKYpBx9fi57iQ6ujeyHLA39TfY7688yRr9voLHNnD7NX1RvsubETy95",
  "key7": "WhQZXVQDkuHWWJvJt6pdU2nNQZJCVA8KbJcxBGiyEv5GYcVUBzGctUm3vFEWkpmVKCqV9mPD5CzhkA6xwAPVrvp",
  "key8": "PFCeixFQ9Kmm4fRAfK6HyoaZj1czx64JKDop4yrm2JMFs7pii61twmgrXUwApGe5u2hHFLLUnSb89cMe3suAv6g",
  "key9": "33wcSWMFkLTwZ2W1t6oyqW6Jmc5bFACkWiC7sjo4nKLnZCmybS2eK2CLkFNEdVejAJFrd4H4HLvKriJ2KQWcQQ92",
  "key10": "3ZgBrTBSGippQJjK9TuUNbNsLR9Fwk5kidvY5ht5VkqM1Xe81KovuGsAT1Uke2VKHqtUYUzbj2Q9tE3sBdcyEyiu",
  "key11": "2VdHZKzc7TheAUZFk1bu3zedT88scXHzNB5oUpwfsMDUSBQfPx5XQsDszvpZBJAyycHb98yp9ZKx8mKhzoo97qAB",
  "key12": "4ZHGmiFyzfyxmAQpTBwHQnGQ4i5AivkCWHuy9xWxBhT2kP4FRPfHRz3mpFyzTnFbuL6FG7gngJhLdhfkR3D2uYuE",
  "key13": "2BW8PVn5XLPejsRu7BadWEe97ErzZf9DFSbekisU4dZAhJ2iM8SkadbwkiBggmPnwfrZdiP5HXbtN6M2ASbS4iff",
  "key14": "8U8XA85Z4Akj786jvgVSNUTbWHkZ8jHoNe1hTbxs1w7R8Xp2hxaEYEvDkYCgdszJtqz3FcT98e3GUBGUu7JEbtz",
  "key15": "2wYameKBKUVu6Do8D3xWcmjeBSgnDM4ne9fx3qFWHGWTYajbYcCZdWwVEDyVVKdEjPJiWoqoCwDhbmx6KoBpnjFh",
  "key16": "4JLVkBxrUehx6tQ4b27RGZmU1RZoe4bXeEZgEWhLzjWwJ2YMGsGdNJZbNB2keg9ZZLV4NzaxoFNxx3eNEyfPAGoT",
  "key17": "3xhN1kmdyW2isiVU7yRam9taWKyYQku3izaa7f6WjsA3WkaULkB2nhFwhn2BPvM1e8Azr9Rfr1xGKRWrgji2UVo3",
  "key18": "4ojySmovcEfebYSh9FQxaThRW2qUGSzRj63U5x1DgTgcky1qidkvJfmheQ5woZU1hF6X1UMT8CBsQRrKcYqJBjWS",
  "key19": "5EoPp3z1MEgbNgjEwcbT5hgNY54nnUDKYDrBRxFM9rRaHjRXXSyiN3Q4mPS5iBmN6QrWWm7YbsFspUiyv8Jrq9us",
  "key20": "3kpXToft2BwxvcUQ4mS2Uxx1v9bi6ecpahAkJMeP513o4U2byycMQBoXLwvdZuPQrHDciyoKbQEWNrVg5ZBujCze",
  "key21": "4hRHQCK9xsnxKZkSrYdb4ShCLcZkzzHuRxpzbbzhGupPUdHh5Ltj9RNP4crYXBfBmHPfmKApRcNnFLB6wWLuxRy6",
  "key22": "3qLgtJTQKy6q6V4MoXD5vY1PRxuLo6fWn8EMp1vfqBXwJUHue5w2HL6VRFMCAie3jV8WcTPK4FQ2V2Ti7Y8Q8h6A",
  "key23": "4DvocfqGYvge9h7ssu1pTfxSqryHz7hjBiiUJimNbs7mY79RGVpPwtERaWUEnXJSsPHLVzBXBRzWyritZTYBJnhM",
  "key24": "63rwJU5Hb2ScLGoEEjHymJkuccDSw3tbMJGrqg8dfhRr7Aqw38UtNYcaHnYw3jfBGP1ZtncDFpmHhjXH1RCb7AJX",
  "key25": "3P4AuSf2pE4LnLnQwo5Buj8f3Bh7hDRgokqSjnjurmqLeg66kvPoqKVhPuYcPHevagDn6io8HoKv3csh3PcvTDqC",
  "key26": "a523opmpHSdzdvosX5H8wFFVvWbSdLYgEvyrYjNty3Xm9AnC6rEJNKUthEd5XFm1mA7XNiyab6f69psetTN7CZA",
  "key27": "2h7paEo34tNL2nH4UKwjK5swoxsf1gZMLabKDtcjZDw65yXbFoCBJU4Pd1MiQy8hM1Xn24CJXf8M8yuMjeXjYUv",
  "key28": "2vmU1G235ah1eYybvsyH2WmMp71KkzWD7G7vz2NJcFZR2Px787CzGDjsqZwu8fDoJLZPMeK7L7r88d9S7gttDWkj",
  "key29": "5Dns7pdqW7WddyiERc5vkFj4zgGtKp8Zdx2bSx3ssdzN3j2APygCj5pGWVabkw95f94EfjSTCeQYh6cqUHiwLf8B",
  "key30": "3is8T7NQUA1fFr1RhYgLHdF7KUmY6Kqn7coCmiEP3jTsYnUrZ1PZa737xDg6cKgex4Tx1DLet9CaageE6vdNfHcz",
  "key31": "Nu46a1spxLdGUhJtNuXEWWQHN8zg3kUkPAbfzN64rWfRRht3qYHFUXx6xv5Uywiyzq2yYcCxTBrTcHgQ9biRq5u",
  "key32": "5W2wge5HqLtd9LGjqNRZH1fYDpigWT4fgsotrUv9BYuhPfyZy11cpdmadNXfyQbZ42ipeS3epsd7HHm37iG5Zn5J",
  "key33": "3bZU8GGvYEvoEFmVdufyLocU3JTFhZzJ9vMRG2zMsJdiVHXow5eUBv7AS5JZRhaqbB6KfNqa8HfkSJLTBmVZsGp9",
  "key34": "3f4DD81vk8mFURa8RzAVfArbtCV3nBKyNbi1zWhL7DbgTRgGU1hXnLKV3yA6dsfSZuechfhSWxGsZpEfMDv6BM6S",
  "key35": "2mvRXunaNW4DVFAxdXDQNu5pRe6u7pKMda4q4kn5UWnfbLju12SnvvusHJQBL71hgzeGgsk2FTy4JYUS8tKKLmhe",
  "key36": "QGC3ezdsVSBxycXjusqvNgVdsreVNZnKuoMAZ9PdGz2HvqMFd65pWvWNudsDDfJesV2dopEe2ujxVTc51zBS2X3",
  "key37": "2MVZG8TxD63tddexB2NqQettxcWxw4fsYajPswvKxhw7JAK3JHEnovgwnKyARZny3JxjuRbvwufbHXB6XPEmVM1w",
  "key38": "5p9vb218Rtw4Am8EvY9VvdMqSifGu3bef7gBQbay8sKeCEv73VqRrLCFRtCgfJ5NDHm11H78q7tva8EB3N84f2Kw"
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
