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
    "2pdMnTpfmfeHAzZdysXimEQXdgjEtLcRLcyfxTE6zAsrEBogS5RFbCV1dgtZSmQ8ERZwsQ8g6ZYuUcnxM2e7FsjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3totB4ZvszXHoHo2SGCNKmjbvBBp7tkZ3VxJ3reBfqr63nE7myGcUv1yyj59AAHcrVZbKkSq1s9Cwv3AVCm6Qnx",
  "key1": "5yt3fqAJRZrwhVin79KVmPfrGrNu5RdZX4C49wB1mdemGKg9H1xViZ51ayumpoaFgRmCjrghjp8TqknSGqPs9wWt",
  "key2": "47pHdvYXpoeH9ch2F8oaQTV379YrzhZXodGLy4PG2g2j5zmGn3eLfCr8a9ZqYpbzNr3XcQEhULkq3NLRQXGbEkDS",
  "key3": "erwC7UrLVqnj5i49MLFbhGC4C5ZY27X2avpxQ21xmTAgDDPtT8t8VApc4MEcsSWqbE4T5nLmxQSyoHQgSFkMHxu",
  "key4": "2LDE32a8ZHA19ojykPhnpSyw22aYoz7s16qM74ZggQsQowKHyGzWzirWCcop5JCdrgAvJrkPQwdYZtZbc3xvuF3g",
  "key5": "2oBwXEUwty1FB3bDHJLiMc2i97hG9bh5VVuSD1HyMTPh6w2p6d7SXJrEYbmDLPAqy29pypvW4GWzA8vJ3sDztmZB",
  "key6": "zKW5Ksa8uYpFAkvQNWeoZtj8enGMHXTpozZWTNeBozQ8zusy8EiYVQhM8rXiXPsHtoYfyZ84zQfmYh6YD3KKBT3",
  "key7": "67eimmQGnna5j3Txp1Tf9qjQAd9ETVYFPHe8nvoSd55gV991d9aZrjcPXkHjzpMw5Maf8i3cfbbMmEW53dH5Vq6w",
  "key8": "4DHvcnXwE37Jv5cdzcQNvGxgtasADkWvuXev1px6sw8kvcNKoafuxgZciwGTtHhnSUnJXhVPomRpi3x1rgQq6MTF",
  "key9": "GUyy5QYmtSVYfuDJFbHd8PgtnQmdDpTqVamseWSexUFChLxfxMmrGaofEp15izoJyihjZgTtP78HVUVu2E6TbDk",
  "key10": "3dzFiX8zVY2TGC6SFWpKSGbkw1w2PcqmpPWSudPC1kJGMkyFfmgzuLmgGfw9KSS1P1MgovwgFUdKBZZEq6nuVoMM",
  "key11": "5roj9mpJuK7sKaVLq967ieC7my4pVbXX7zJC7fH8dnnNPtc67SLEKWSFMgvtq2hN1KJcEbFQvwd7UXG7DjhHGUPi",
  "key12": "2Sh8qkQbKVq7XeXoXWDzva8Kv4zCZ1wMQN2ezwGnpeZ69znSSBWYmARP45ffdepBrewb1bGEfVVkkX2mUPNv8eD",
  "key13": "2zbHCBpbSzRGUYLrpTQtZCwXzBDQ8bfzfnZzrBX7iP7yidMsaq9Uc6MKUVufUmxvTdYM3fa5fKScF8vJGy5uPsL3",
  "key14": "A8SpwCNz1d2tyzddAPxkQE3eM9tVNZ63H3dsKm4wFDFjJuU3iF2xcFQCyu4Je2QXfg3ybXReFG1poVSR78MRNLt",
  "key15": "5CwtUBhBVkV3FvLdAwWjUr8RXgk6iF22sWLMBedsnDM5btXnuhe2Jw9rnzRd4R7896Q7CgetHCUU93PZp1PWhtLg",
  "key16": "4QcrusYnPuAXEPPpz5355bA5HjdzDKTA7enBYFP611VdRcarbxf3i5M9BNqU83Y1VkJUWkxprSCThsjo2P6WRC1g",
  "key17": "2XJ2P2KuXChQmTNmJer7KETG7bQQSM9bu8vBeyyMgB7pvEjgJvtgkMXzH9TUfzZrYLmGknqGqDvM1UMD2gVAnhQJ",
  "key18": "4E9EpQWwk7DitxZVN7LDszUR83VTFE24KhhNJF7859JUuohrmdaz66mzGYDzCp3MrsKSEY63Kmr43vQWDBp4dyEM",
  "key19": "r7ZPJWxf4VS7qB6NvaSs74by3bHoxBreaXKCk92yv4v8Wb9CnNfADupJLkoaQtd7msse9UMp6pGnYUosFBSd1M4",
  "key20": "4XGmnPo8DU1L22RkqRuzq1NAbxsTr1VwavxtRw2KyFA5FoVEMTQ8H9K4aAtgoVnpHD1BNDruXHkNYWMADZY5oTaL",
  "key21": "9Dq9G4fgEvqXFBSjufyxEFiKfTzGaqT99LWSsrmgtZW5c8YMxMfRpKpkq44xjD8UWeZfqsBfP9nwV4Ddqd31GaM",
  "key22": "4oP9quFDmSumJJPWS8tFSgdyoHrHbwpgy1tqNAzhNZZCoXQK1KjeF2mjhQ5ZkN881g2QbbvnstsYp4SffwuYodKS",
  "key23": "tuJGy5hKNfEqykz2dtVk8A4Nno8jnvpuiShdXUGgCLAstFGahoxctQiEfmFxX4y7uhgDg2A1LadV1Qj2JSKF254",
  "key24": "3NGaHDTWMkEuUM1GJUYrRNTtNzoVEYcXEbZcX1FgbrvfZEKLNq1DGsLqiBRGDiyDAv3JNHVW2HjdnFBTCBjCmXEo",
  "key25": "4ZM7P5DigDBB8YyKd6aHBA6eXwJ5yp3RJGEuVozJBgiBQZ13Le7kxcE3nZxiVgaugoWLypSaq74UWdMwDXgwC8tj",
  "key26": "2jqtM1RuRrg9iV7b4RiRaQ6TZTfL614cAzVZNy4b8vxrqEDg7wMugtMHCTJHCsVTMbSycJoWJcqv9tLrc45FFL5V",
  "key27": "2AGwq3jzCGtMKAC5jWMZVSDThWbi9osBceVrxTffVgWjxwrWpDpYZzf7ifoLJHQJgdmyCHijN1t3n3JBGy4gH49D",
  "key28": "pgagA2jGQDg1GZnMDpcPaMhAkjxU1R8X9W6D7CQGCMoTcsGjioJTNAhHmzrj9FPdZmSJvVzuDtQc9zxE9rhwcua",
  "key29": "242sUETffwwV5xtoaDu5fg9vE5pgdMn5XyziDBB3wA2Ap7VBsuy7CNK6mZvw4dEVGVJsUTqnJgB7pV3XamqrY6GS",
  "key30": "3iAbUbwA83demVQs19zFjqJLb8Woh1ppFT4Z4pdzuM28F3CnjXqnaP4W2MpS5wQA8xH5ryNUebc1gTUKT6AtB1do",
  "key31": "ouQX43th3tSREyfKfLWvmY4sRZGDmgkybGUKLD9fL2Fz4RhFj5zgwRKSMtM77ZGixAojqrZmBAc1oAkzuYMB1pi",
  "key32": "3B2zFjCiHVvN9Srh8ysTuYLkFj6EYwTtznzaBK1LdvGcNkKis8kRTGRbiBEx7APd7GMwtvEei3eD7RMFq8C1mKU2",
  "key33": "2ufszcGJfxoqh1rtYkHqLrsQbvEFPxbnLeKVe2wcjzcqRdYhQf5Fq72KrqB3gTF1DfqQXKH6KFHEjHbk5FokRUhq",
  "key34": "4yQLHhkqE1Ry86Sy5nju3srNDa8q62szSDuWJNGLoyTTQwXTF6AQ8Ai2u3dRDUNgRe8SWDqH3uaFGNYSmVgeZQzj",
  "key35": "2c6PAfyJK3mH7BX1DkeuzCzC622SJcGrnt9gXJpQCk9Nm3hpP4DhwDF6ZaCk64w2fdPkzBY112WSLQtnEpLExBQ5",
  "key36": "52Joy6QmnGzkYkGx4rA5WghKi3qiekHKTpstpuExbbRWHMf8mapBoJ99id2LVFccaWQfVKMhX83b8uLdy6awyvjj",
  "key37": "47DGTaHG9M2XJi3Vkya6Vcvth4HhWdPFrdWgGdbzP2yueWMLufLDWgosoGPT1K3oanRFBMD9h1g9ghHJv3abHUR2",
  "key38": "4R6bgtdCVrtkpTHfdzQbQCpYx5AFogEAqBNc4VEAY3qnoNm3PpY2CejAUMCCCD9a7LJrNCuToCQ3uihauqUSYEex",
  "key39": "48YUbKr67ZFbtWrGKVKRNaZFHV6LCMHh6CpnEhF1ukhiWv6z63hGxGEknKCS6BanSRKo7KqneEbirHZsvbfCbsFe",
  "key40": "aBWAC8FCC1iU7kmxqcrF65kEkF4skVLzwir23QWt4vg9nTjKv6WsFpvAGp3Y5UPVSjBGHpsNK1y5VhYgCBBy3Fp",
  "key41": "4ZGjCkBwzYebxicFaLdyKMzaRZUSWLrEiD4Rx7g159E7aDW7g4pyFVGjMHBdBFB59HKRH1UUXSf3AyNgTERjhHi7",
  "key42": "Ds4MzJ9EHTdvJqu1yB41Za7rChfWT9h6HnK6af4YgF3SkEmTj2QaLBQ9YFicE6ZDpSBVXPgXZmKVPC1LJhT6Q8j"
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
