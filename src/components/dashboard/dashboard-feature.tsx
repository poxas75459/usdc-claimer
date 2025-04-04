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
    "56sJrnAFE7UbETBoJDmwD9MMFJ2uFKq3bvwxJH31ru7bZosWhV36e8jH1XHNeaJpjBjp6WRB9cJsuQ8X92S3A9fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UeyGEzD5vkDaM9FuBYBEr9x6WjmBRKf2i8W8xr6eQF9FK1oxh47AvsD6SzG28Hw4vec4RwnjuhHsd2Sh4WABYe8",
  "key1": "2zD9sMSLSYhck6gHLb1PtQgYJXmN1nQGLDVQECWmqNZHtNxDzg2pWFB31a5aLAPSSR9KkpLUWXKXnBQgTynBC3AA",
  "key2": "etAynvE4XUgv8FjDCxG8B5dKX8cwzFwf4iCH8fFYLPLBJbnQ1u14BjS7TeZfUq5C2UuvBLavcT18SDjzGid2NCw",
  "key3": "5kjfRshWZtdFh6mF5NE3KancT6xi18LKBrVnp4r4sNzuyaxxfz35xwLPTTrxS6eMMDLNdeSBVLLKRqCjTKqf9fYg",
  "key4": "RYkiVpB8PyArUXGs8PrCUHwdGPuc9JptdpA3Z5amFJCDp3onMCHnsKgoV9WA5oycRwJbHaH4KdC72NRrdh6kLoz",
  "key5": "64DgDpfe1cGGLh5Ugk7heYExcYdft5dTeCKd6GoYNiL3fUDy9sqTctkY9CY8EXSfLVCMuNcbEM6AXwUQ96BfY6E9",
  "key6": "R4UCYd5hs5kqzQpnFKrUbRaHrSmwFdHjuRCdcXMkT7ikENi1koWPdokwiQz3SW13gCPnDarggRu99RiKcy5Rqva",
  "key7": "3yuin2g2xi1KPcLynDTopYztTbFnfJAkd7mdPbiDw2RGUrEsq4wrWZcAjBDwwTYL2HSXgNnnAsQetaVu6SAapWB1",
  "key8": "2khxxTKMx8qoPHZ78oxGLMBUyXSyABncELH7FW4FHAGagCtTPTL9nrpWsevAwJZ8uy41vq2hAbX2EdDDTXVTzVVk",
  "key9": "3Nu9kxa9Wj4RwWDpY3qCBbtP75oDhDPDpVokE8Ynx47yyYWooCRKwT2dkh8ccoSZmkXkiGibdMQ6S4DKPF7zCpvT",
  "key10": "APkUNZLNEPDLNhZib1hUqdNJcWNRCL8g9Pemjqrrsi71shKGdbiJwiMzzfpDe6pxi5irbt8Jxykqx5eJMkXsBNP",
  "key11": "384S1oTuUWQK3QcKsHDJ1bAQNYpcEPL9UhqM9gKAfMbpjpNfaXfJnmoWVtUzD8k5Be21tCtkhSFt17QdaXGD3Fdb",
  "key12": "2pdCfMG5BkmTb2kcyDRzEqdvmFXsWyyS8iYskBdRvXRTp7i4gT9YQyZHd7tDw4jkB2GR89Svk1kJqcrkEfJhvcRw",
  "key13": "4rbsopfSQTfUA9pDEoZmq2apseemjgNvZzyYAFiZDhedErUsxea296EPibpuGQgq9ZJsucV595mmvy7FBQqjxqhb",
  "key14": "7WiDMZz9oQT84VfY1QYEFr3ykUCB6KWqJWBnM5QFNPyD4RNvWsXQTTHwMKqXTL9wtRnht39ZNthVc17n4cQfExo",
  "key15": "xRb56Ewk2FtMTWxd6NkxSGgRABL7yHDo5CvqS3nT66g7iVoPPD886csa2fMGDwDBWZsCKAzgCd3eK9FaY1ByaY6",
  "key16": "hfHwp9kWLFBbBCejuBenX33PrLL63yARqusHmCK2aZomH8XUvNLPNcrMcGbCLn4ABeKJP6D2sytyHTBbuuajpMy",
  "key17": "2Eqmdvd9sq2DRadiEJh2W45pJjiVB8pp8Xk2ZCXghFEA1LZtRNgGX8c9qZgH9vZajZGmznSNvoA2M4fEixwVqjbi",
  "key18": "4FwVfCy2yfwGC15K33wbW8NSMgiiGyjrizLH1tHwpi6hZCVXuxxCVoa3hokEdVgjCS8LPxXrPmg4tHxj4WAptHgs",
  "key19": "3dobaRVmXNDMKHkKdfZJQ3qpwuyP9ZHVEzAxfP2NvBUz6Xybye8Rrx2ZDCpouYV2dckbZKkbzJJd8uAxWmPNv9aT",
  "key20": "3rMQ1N5MZuJrmtiLa9j29RzhMFKJbVguRAp7Zh1K9YTfEkNuA6dd5oLwvA4uDh1U7gE9qFK3kLkg5C7Kyz1WPaRr",
  "key21": "5bdoCzAfW5fZzeUmYKidPdTXr8KhgpXwFHnZDB4fxQdMqgwgKAS1d6NhnAzqwWJBe8ViKb6hzWbP3aFZc77d2KjD",
  "key22": "4ynBM6zHXXgyXXK9dLPDLBLCTugkd6WTQSzy6hPDxdCPspAxax1Fd7C8X5XEsz4raZux3YUuQ2z1dEtoYrAYDpre",
  "key23": "44cVeNtMurPQKGfLLmPTbqMTC4cnQT4rFxKzUwgrfjq3Gy9Peh6iaz5TWsdpfTFZLgyLYKg337jEguRTRm2rVi57",
  "key24": "4jTmqtpn2H8rs1xjWt2eaW275udDdYSUngesfm4zAPqJk6jVRAQXYrw5g61rMj7vD22t23EKUgrbapZsKu5kY4za",
  "key25": "5ApFv2BktLZXCoMhH8jzkuVG8dFXMfBS1CCZo9ADZruRYV8Sy8VVDKmBk2YUWQx7E7n4hFQffHDCphq7p3XDHu2w",
  "key26": "5PQaYa9exLoTWAJuBTwsaiSBGNZKo1TrUPYevJA22fT74ViJwSGusUhJgdbKFhSdki5SPFqVHN5PLBZhghqRwXZw",
  "key27": "gRmfRiXAGzK9pwzEYpL3CB13r2zyqUYqhogQoBHoewF247Z55fCPGHBYogzWeefTweb7vjKJfWd5FABdt2GV4em",
  "key28": "2rJz9wCMAoiWqu1houbpECsg9cxW9DiBXSRQxMPZ8qvbE1JgmBAv9HQUrSjX55EkEo3U8HF3E3CL7KWTZKKrBaLu",
  "key29": "5ztFJPM6Wzupc6Yi8ZqepKa9n4ad77V7eeCof5tg6NMtCLbKgBwvKt97WNXmWxtNF2LvN5UmrKSrNWC6ZASrUu4G",
  "key30": "4ivzM4Y3BJpaJYrxxCB9kCU4MWxpv82k6HLWmeX3hkXi1JBSxDmBJzLtXeT6VQDuPQ1yXSuM5VjxCaST6Gczwf6J",
  "key31": "iQMi2N5uzVex7YPniwyazLVP3FbESAqPoJd1WkQ1iYqr7YTrFdbYBNQZDaEZSaUJr44f2BBVmnE6B3QUvPVGZZG",
  "key32": "3vmMLi4hpPgXFAqi6nRFeFL4n6PvMqh27568EXCD8pcfDGXdebgfyasgy3ikswDkf9vVxwJEqD2aFK4DygyAKN65",
  "key33": "3TU28MQp2QvNe7vs6amhHjU2Kqb9geqj42d7zBz21VoEk585ka2uVb781v1FKXDc8KoHKSZ86kkmwxdoTkWPBWP2",
  "key34": "4MKAMnGcK7mUgHG3U2UTnm412JMiasAYNRmtro3Y734PJddt4UMccg7y7afkfZzdG59j29RBJ9QB4t8VwT3gRt98",
  "key35": "jWt98MwmQcfaoqmabdhJ2uKyoG21Vt8pX4uARTZc7zxz23j3iYkZzakXuEuUHeryiTpuuBHmhfwzNrPC2hC3Huu",
  "key36": "2BZXFnEyQk7nuCAB5wxGWLtmWnmucJ29SaPJgRvpqys996R35nyJdWRxbjMmWZHWxD1TBq5wzFV6YvR3N3uPXD3A",
  "key37": "atLq7qMmFiaZfAiEYvY2TbanyJmY4CTeA1rgXLHDZLyoAn5i8k8uE3dKAVxGwF5HouaXzwPVTsvgUG97SDzXcTb"
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
