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
    "2GSK5YM5py9N56ppavNwzHB7EcRUB69JQsb5g5CitoQoHsf8NNSLFXLWfDT7pJTbMziD8UtHx4nr1JqUCtNyGs7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jjMLjdvhZ9EgmQpiexKPydNbSm3xnuEm8da7n9Q53k9dk6WJNgQH951VPbzV21BsMxX4E5p8UAi633RHWJvjqvf",
  "key1": "5u6gT294upWSLbFtufiTr5V7fTXwTXYMnCYLzun7SprkB4daFwAWTyibF11GY9pA19aXqyejQyxat9URi3qTeiUD",
  "key2": "DctsTwU1fp5eeWNEKAbh8BWXhLehbxf3dPbT5YosxPWAZLCraa289WVfF96e5A8ADekoNtdjFitGPZmkHcvfbMv",
  "key3": "39KVXp78rG79cSiLVKWkCX8qgUST1nVQ5ZQa8EAtGhaWW6g4XZe1xpfhMomaBzBJ8CrJTjrzURtTenKpB6sPcLM7",
  "key4": "31BL5qgYaAoYkifhDCdmDVwYaFrxibfw9C56zjUQ6nHdjHuxKj68dtCq9STp3ncGo62KB8jn3xEZc8zar2wfnQb3",
  "key5": "3gz3dRvJTByKK61yE38XcJGi313bDvJ4161tQS3PmyMEfL7Spjcenb2MCAuG146EvtQx2es9qSr3qzaK7bCngXy9",
  "key6": "GBsnQvJngMjR2NXifAC7dkmhAzUJMDgMoTpJUaZL6d4KmFpcFNGAJ26WHPH7mJfU9iCm81sanm1T2eFjfV2P9LE",
  "key7": "NWLWHgTLicgRrxZy9zEn8WqMrMr8ynVJUq7F5WiWdH6eSM4NNsEni2vM2kGD9yDnCUVRSYSUNdDFdpSCLdvPJzL",
  "key8": "2MtQ2LPSSzCaLmRQVkFgU1WYewKJADFA25h9MFF4jTkubYtJvdTr88e65kpCR4fcCCKQeSAFAxuXJEU5VYqUwruX",
  "key9": "4fVvkdtyumJedF7NkspL3c3Fz2tDVt2KCEDMi6tixqJqS4EJtehVxNPNmGN1jESRBPL8VyRCgKQdgW7cCQTb3NSu",
  "key10": "2SzozFr1eLcW1N3deDcS7dMnLeHZ98Je34gozd22ZpvVZpKjdU4E44K1jyitWz3gP1wtTyoDGxJRu16KUY3haBDy",
  "key11": "hqxjxgaQiZyGYwazKKda9yBkpuzEyeoQBKQraWVG3Pat8tVbr4hHBFh9C7fuVL6RckrXC36SHXqcixGgQvP8YxJ",
  "key12": "4oXSLKDQzpVwQWPEjcnLjt3eL9f1CNePHhYJLiiZK1MVRNKRTmzbMWMjAaDcipVXys7yKgEJFTv5aXPN2SdfqouF",
  "key13": "4YBAp3JqLdnSa2JJwCH1TjKrmEHzE9LqQf56YDhzDYVux8FGECjaFTWwVxxR3W6m5c7iU7XFHZ6Mhfj5vcc9RTEv",
  "key14": "HS7XUD6BjEqNb9Lnn3R6q2yEbBq5TdHSXrHfz6RjXeFY2PSErMQFuVAJ1uPuggC4V8TdKJJWZFKYWXuixsbWzir",
  "key15": "523DBNKTQEF22RtbDLvs2j26FMLcGkNBRh5p192GzpDeinjYnDa6VmvyC5S5M5QAYKGMnh2jM16vjF5Tu8vYgkp3",
  "key16": "HSTJJpmDwGDyrV7kA7PweV1YJV6kaUP1JY5fG5yTycWgWRbKfpwDh5jLZBo8R2HTpG2ViA6LpL1VPko1VtoMwaw",
  "key17": "35zuv5KWZvKV5ttU45NekonJFZVQDFcvLmUJiu5DhBMTWK1tqEFVhucBDmkpToAaHVHF8w8tcUcWyJCnGFvtHKpx",
  "key18": "46ttQZ5uuCPtHL5W4ukM8LLevioqVjrHXEKyxkQtkQxqqz6mNYso4C4bWBkyGHwoa1N2VkRS9DjWquUP8Fr9th2b",
  "key19": "4mFAWUX9KVxUF57EsT4xEqqq18RDcDhM3HEWkEUvrq61zcPTGMqyysEoFy9Th6PoR6jkG84shXnYLR1oHgt6YXko",
  "key20": "3bPGHUVrMDaDxeqY6is33jzeJFH6BfefVKa19TiV7iAZKMGMfq2R72VNa6BsVpZWd3CUAQNjjdLAt63CnBfDso8a",
  "key21": "4BEi3QfZ7VRuB2EVKnVYh4yP1A1MghLGFppZscyvohePfi2Zu2QjbtZuSWVQJ9WhjxMjCEnQbivP3GujQkkqnL8d",
  "key22": "5ogGe2hfnBZ69snjVTSxEURMEsMpcw1MJ1Z9ZvCMh62zHv3HxaGhWjeNnGvDnEgAZyaNBKZzqLNxjn28TirzfCaR",
  "key23": "5UaDJhQGMFEM9rwM9N6uvXKgVq8ny6z5B4rP7ThQH9Vk5sruF7cx8poHnBuuELXiZ89EX3Nxq27ENGTgvduWaJ73",
  "key24": "4nWWbFhdLguJFsR1STd1N7cPE9SWh5z2cex7fasfGvgfZuS2CcYTjjUTSjxCTrnEVyHXKikxyU37HB42NemJnvrz",
  "key25": "dDke2FjebnGHwHJ2fF4krv6WADz7brUpYgwhSsbu9SrpY1rqKzMrRi6pNFv2g9fWxiTAYRGqnTp5dAgprPYh61Q",
  "key26": "3gGzwLmCf67WLCbskoWTFqMtJCZdpZVKr4aky2V2azX8vZczTZoWovzFNUbo9qcvZ9KYDcjYYVVScAxaWMRyvGRN",
  "key27": "2vyH1LAJcB9TVSarANpHqMy9unfBjVgtCi4KjQ7NCE2jPbiTaKqMKrpwNshxpJN6zCsyukvgLsEBpeTCSNnGCq1Y",
  "key28": "3GCwGMQHQKrisWqxXobjPHJmmc2mDaznYD7mGHDdxpg8VCW8CU5zNZGbT5BMLgMPmxExqXhAHoMaQJgNnNSNgK6d",
  "key29": "4ncKxGAjtQReLc3emhTRNxupcm5ahfamgxKdcDZBc47KvG5Y65JYtST2oavjDQz1rTTa67wCMoSiNi9kxp3Xe32L",
  "key30": "5YGUV5H7pZxYQ2iaXpjjGRczNzqnkPdosD9uNPegsS7mapKbT8nZgy1N7KqKfTgJhCWigcdGzEBHn5kwE8dY5N6a",
  "key31": "3rQVVowE2GfCzyt8Z3VDSWH5Yd8V5gTWT3yK5sJ95FxM9qkZYfvTVYzUJ7S9h4tCwYvFsQA8r5tHmZrEjtDQDQvc",
  "key32": "3RGdNGrPaM9ot7DZUhJJmBBbrYHiXQjfqkt7jL7eaY4r5fndxVzUXutfwHyya9o3wwmXBwJjPNtHAdkjuJaydD8q",
  "key33": "YuCJxUJnBDttgrnZbYj5Rw2af6r8iAmWCSLpxu4yRTShmfDJiBjRSbM3EkKExBvXe9X7rz8FDx8naG5pN7V4DDw",
  "key34": "3951eMKcuXVdSKyAWVQ8wtAUKFeAaWX7c77xYkH3dHkkWUEZFjRZAbHS4ekTVowHWjzJ6qUrNhEDXqXMb9E862jn",
  "key35": "BRUXzbip51Ha5C1Hqo1ujw3Cw21nRcbMoXHrs5tdkSSapgpW46KXTHe8mRGTZSyMeBgrFq1wGG7SdWDtrzK7sea",
  "key36": "UUMSozHQxE5c1iitieFE92f2X2aV7hjFkGyVsgWPgzox4sDpUJ6mXoMsXGBQNDQJQP2V5irMgugdtVkmvUoZpDF",
  "key37": "4ymYkXfALkGQJLYbZJvwWywhkYNJ5wzv2br5LXFJPk7e85npxpvsHB6jRWMWNtWozE6otX84UGNwLf78Y2iGfYLx",
  "key38": "Fdg8pKUxjrCcomk6FFk276T8kRmQpMULAuA6mitnHyM7aRvwpPMAyavDzzqCpHQZTigYkC48xQGq7Uy6mViHEsa",
  "key39": "2kvwoE4HkvKBwett7pUqd7NkXjy6TpX8yfqhyo7T7gJsz815bybZ5D7MZ5MpkJJgAqUSzyHMwEM4mnXnNetyQJYt"
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
