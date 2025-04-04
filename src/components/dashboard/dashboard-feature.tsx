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
    "4u5uiYqqDF85e9uzWt826Pa4JSFvY6hapnv3waZPMJtxS1bj5bt9qoGab4QLBGSmFV4AR6hKKgwGe7PUyZcyTnnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SoSQKr8tvTxEsVFY81BmTKFbNzCKngVGSwBFBHX74QweSDorUDFd4S1KSSwEUWehPiw2FUwP8EHYnNrxkdxyZaD",
  "key1": "5ecgpFqQEjgnb2nbc5if4Lef2qvZcStXvCpv5dKsmNj1sZQkQCSr3eSmap3Jdk13xCjcukPCGLjJ8csjdb8xAv8F",
  "key2": "1KtTVK4bCMtB1VibC6ipJLEDt6ZqfrRKKrtuMEujz9MVLgJhCzKuo4zXHVUqWBMnYRKwi3ouSvwiC8D2bLuJcVz",
  "key3": "4CsCXbDkfSgrGD2EtaK5E47UNJHvjD7rKijy8v9JrZRvhHay8YcggGRbFFLEZm9hgBFo5a1VcuijijAyMiPsmyL3",
  "key4": "67aVY67NhMLoSHkecPrYkPqeycrQQTpDqtey1x1EtF9Gb7WHkyGeGc63d5hk2mxrVLQx6SJp3hZ2kH4iJytRVEoA",
  "key5": "3T96wnSqDhZzeyVyEpakSYuVNDbq12B3CS4xxCKSwsjzE4MFVJtomHpJ5BK6sm8wuYPryxawVLNcAziwd74egjTU",
  "key6": "5udBxzsft8fBnYUpboLQTRPBJoGCJZ4DVswr5kPQFKpzuaXFefie3zc628mEJe466HmAdvQ7NPsyf59FvRyrVUsF",
  "key7": "ytFBNDY4seNhKZq6q9ZgzmG5pwUV9UHHjGXUd3NxBt2aXRASjG8X2WC7JfUFVc6dcSvmYvrfzudJM9mPvEU84do",
  "key8": "22EN2SmmFPUSSFQrUNi3ZsNYvK9SQy8SLGJgTtWwW26UeuJeTwpDKFpUhNtYkyhi7K8y5DVX4A81wfNEhPC1YKgS",
  "key9": "3NX9jXPKxQTXFHYVd23p1L98LdsGQBiTXF4GWUUSSmw41vvtACQDNBWAeAE5r5weHi9Ru929joon81iBv3g2ggKo",
  "key10": "3d4t5hqG1U8ycmbxL69N4ZN61iXZ23iorG6f3ata9bFxb5M6QNPQ4TgwFH6h1RrFmUPxrj2KZeyeTeQ8uLDCfugw",
  "key11": "2H8a7DmssSuGVxc9Q2gK6ZnbCqzzsTMBSFmcpuUee5Rich5Ed2FwGmrCmidCPX7RUsbJzHfrEPc6wtivAgvF65Vv",
  "key12": "2dAjoFykkxZj9amd89cgxrC6UJ99rRBmiVRJviQUtemcrZTtK3gDd9Q9XfMqgK7JULRJFnFK4MdvAC32aVPFKfuy",
  "key13": "673oXqNG2MeSQTqQSSaGhuB5oqQCykeQsRjqVcd9P6tvkJLFkGw7o8kdsht8QVpafYg4Pz4bFVy1N1RQhByAN97U",
  "key14": "3Qug7BVL3R73s9RBAQbgdnA5zYMSDg4Phib1s6n1khmYqQgaDipL3f4mZ4rDRWvpesED4Fuc9753shm7CrgcSPry",
  "key15": "pkp6SmvQ1cyDrfVHhF4cne6tjpWSr4YyhVxUbmzJRvChR9JzXDX7qfTnfuChULkpMftom5QYNSvDjTgGKELffbR",
  "key16": "3aVqJitUCTrFnnnrCfjWmnHonXP2WXvB8ua4Wb53nBPuiDxPm2P7A5gG9jGcUyyKqqcXN1bCcsY5zgNd3usNZEL1",
  "key17": "2NVCX4vgR6nDVydVwuLiqkYZChTRky2XcF4SAozr72MrxJEggXMvFvtJfNVuTFTPzTdTN7PJt7SnrCvcFF7qqX7c",
  "key18": "dVDyNxjVFvBg7c5tnvymmsrSwZgpWXdf2tz1s7qttL79AoXYT6yeYc1Fa9Gi6giU9Nd4bsVb99VNDnwUCtwrQAi",
  "key19": "5L1zZs5Cx7pW4wQJN3Uy8yi1GcdKB7bpZNwJFX2UaTK3r8owTJs1Khu6ZwfMK6H4pJxsmhzBa4WfWyoEzpH7DjGF",
  "key20": "5HHZ7QZHn4GBNqXruCSYHShBsWedWTZCgDq99zJCpr7NwSCbkyPy65wxbKb7h9D8x5ekWuNPUCwEsDGiYA13yk3M",
  "key21": "3JqgWnFffjd4mfWZd9Jsdgzhcr8mE45UHgU7iyaiVTdPaEMXDZTmpRFRH33Sekzb6ELfvjKBrsQy1SftqquDxxSE",
  "key22": "3j6RaRSazXjEKzSb2RcQwwe9vtZZGfe4JyZ1WAopZ5ULdk867ums6bEVLR2B15wRQ5sBFPuBnh7MynutSPGmCbkr",
  "key23": "3uyeXxZqiDwmhbB6khW4aLS5ny8tmAV2yC7pqrJ6dCQAq1YTigWaam2eoGPqSd1H14gNVQMkyUjTYEHfSxCt2Yq6",
  "key24": "HmCRnqhZha9Jve16RD52vK6wRKY7tKHzSc6KZda72jHA84m6rmms6aft4EAJLGqpa4Ed8GaAP4u344jRJWau49Q",
  "key25": "5kfRQeptxKycF7rM46YouY46CaqYN5N5LGFrCSC5Fz8bQTKEWWnj2aLrSCZg2v6nHvo4Ux9VEbP4rxexTX7CXei5",
  "key26": "5M3X77vrL3dxb8Gm2JD1wtFAtEkXuvDRdfPTX6oupUAZTqxrWdRoLmTRLL9FbCPcFuWYLptehTWHxyvrs2hpE84e",
  "key27": "23bqzTUZQfJ4sFVhzSLetu3GgdHC2gqwraokb1AwgHJMpqZVC8h1sjV7DHkdjEUPFDoBJVWo8XyChwyg8wNrkjr2",
  "key28": "ohDiCdQbcMxQ7VVgXw1FKRAxkM1yX82PYWosQtxmkr3QfhvJteXNrtG96V7i9qagCj3g8GN3WhPx75Vzp753u93",
  "key29": "4A6JKMdpimRMwrXtpho6MmjyuaibN6owkaNL2A7PpyoozQsVBuXBNR74P4nWUFn3KtLy8DBEa4zPeUB5PxN9NWnm",
  "key30": "5MJ2YvTrGQ4kbMCj4RxN2tT7vo78gWq86fHhPwEKhwRq5B5QiV7pLhj8PbN2GPUVPtHxTW3Qh7zhUA4osVeTpsY7",
  "key31": "k6rgBW5zvYFhEHFk8xocNWcdphsQKfvGAa8eCSXKi5z4JQG3UnVEeumR1NfrpeuG6sQqQwb6EZ46NdinDQbtPtq",
  "key32": "5GRw6MTZVwp8GCV7Jmo4YjyL22xdZkqewHXjKB5ZoJUUBLG9Q3UCczKHiYSwm8LnXXFGnFjxNMswzSv8oQDoABpM",
  "key33": "9fTqVC3m8RCU7MFMEbxY8QWqJhsSYjYRfiofFnAZYwqUgzUTKuY1nhfEJrpPnXuq4q9y8xtQ2cgVJukmti6swM3",
  "key34": "3tf4xdhHtZ12iB2Fz4r414jeqVd3skjJRYGQF25gXhrQRpxwszSZ3uDY2mgnghcveeEZNmusbU9aMX46QgyjZiHv",
  "key35": "hEJc2RoWZFeYeNL6pJvNbCp7FHJDTdeFPz5dtSrRiTjvaWGKfuTsTasgUfXCdRUfFJ1wyP7pj1F7v8CWSPsRZWe",
  "key36": "2C83oU1hVSbMcLC6BZoVQvwuSVs5JPms2eP9w1tDusMUHSdqRc3SUiHMLAsqoAUaqfocZnFyo9wdDQ8X4j2tF7gQ",
  "key37": "2u3BweySjuRBwPoib5ciPvYrj6Fi8Cw6Edz3Rw2uauiMzZjqYxRCRKnGRL2Aw4GFqnYNKghuyDM1GBcM7SPTpWRe"
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
