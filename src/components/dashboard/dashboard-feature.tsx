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
    "3Fb6TNZrUBjUq8aZs2Mpk23cX26aRZyFbTEJbxhYEqryTziao93ejhVdfRocxpBwrYvgGGvAVqKnooC4BVYo3QAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QsccwD97zsZ5SFXJ24jpSBFK3n1oaAM9uxyT7k3qZo17PZz8iSHpgG42dsU6ejahXfQaHnHvkZ8LUhUsawDg7jz",
  "key1": "qCrFL2nmp8DGb462XskfWHGTrJFx9McdZMtXmSuZyHShHpivPkkc4RnyEEnyqse1DNThRxVHQ2ghXv1yVcNMEs7",
  "key2": "3dc3kEUtcCSE5P762Spu7Fp9mhNCFP89GWiDukKKXAaheQ1T96Bce3iJkyf5Dg995TpqiKZWZuyiiGSsCtPSAWD2",
  "key3": "4AnQ2P3wLsf47iA45Ncgtyr1nYDaEntPGzg9GRfRowYRYiamRyMzq65k2xRmDMRNX7AYgH1HRtxvmFaJ3XRLPDcv",
  "key4": "3ByEo8JSmJZT5L2783DJyhqa7H7HxR9939FYD3H1Uj91BYk1vTCwn2TLUecZYS78ckuP5Fjiu3e18e2RziSMfxMQ",
  "key5": "4HDtHDr4s3BZCftzXa2Sqmx2WyDydf5QG85CQuQP6uYAC1acpAbkg4cKr8n3WWXQazpvsrVyZDbPH84xDsbeSAUZ",
  "key6": "Sr2wn8vZ7v7LkzUbmkGHJaj6vTQeUAiVirpnxQx5APrPTjDYSMppTLf96PUUsbkz4hXLLmV1UMq3TpTFVDitX2j",
  "key7": "2tFdRGAAhsJAAvHjyynNf3YsXYcdcdW45z81e6T4e4NyHaGomNuUxec4xWwBiGHgAKpqshDRUwav7Bay1znKRksH",
  "key8": "4ZL7Hi4ekJ4HwYjE2rGCPE2BD8FdueakwoNaCwnR7U1ChZqHjf16HMvSHEu3ZkhDAuJsJNcbo32BHGWzwPS7FgJv",
  "key9": "5rxmEsfSdmtuJPEDEVaL8D41HgEp4HfCSGsax6SEWYKr36CuJJsh4n7iQeddhXjaZKcS3fxmZLkpdzbHZZmV69bR",
  "key10": "5J2wxYVYnAWg2exjRr1t33fUUGKfM1w7ayWSj6e48gHFJx2yAPuH1QSCd6Xpp1N7Qbbx1HmPfjyBeZQyaHTiG3Vq",
  "key11": "4r9qjtWK61UTkj1kvQxrQgntFJ6tNNxmC64KdDckuG94xLyxmp2GdsR1hCweWMuEGrNANAWJN8oy7c49RAkL2Ljb",
  "key12": "41uJ5VDv1nsncqLcB31ziTGDpWF2sMg2uEC5rMHHhFmV1oE7HVpkjyRz4iskevLHgYxf2TdiXPEeewp76UpuucY3",
  "key13": "3dyX7qjQtENPf5byFSLWCJ42MBi3byaNK6v5kUrfhFrdMDYLyxz1kCzDFT2ujFWuczWYpiFXGqkdYH7XxSvRDjcw",
  "key14": "23csCkghaJWvGrAJFfsQMYH3ytqHWh74acBdJnPeDHBVvbQe3r4PbE1eSwwq4ov34hpEF3Wh2f61t6yz7qiJWwgs",
  "key15": "3qnauxWaA6QbGEEybsffTnMjVpJomQKUMNjTTXKaKEVkAstxTKyB8QfPv66ys64N3KKaR4JMcwBSLbJJU61VnaPh",
  "key16": "4BETcmmDTihPQ2cMS349F1rjK4zZuUZ8TrG4RZ3yQWNt72L6rABAp4S6C1ge2okrUHyeP2bZLFQfFf5Mzx1v22NN",
  "key17": "3LS1P1DQw3VcfUE12YXUJKzSUpA1NJzcVjxymw3cDSMtr5ydDKrNxHB6DV5jKXJ4pZpuFNYsMfcMpC4VrwbwokZQ",
  "key18": "2XR5VxY8VZd62D436wCFurUKsu4iqDmRek1BtuDw1JMZvoQeecSS8kLJdTkvCLNqnXPSN8E9iuuT3Viien1ZNYQf",
  "key19": "2ut4R65SADgtkwiYhnMksrSVgw9XDfkZipqNcncKwEWsE7XSY37MEnoXhhPqPjBJR4MeKehSdfgw2VvcqnBoKueZ",
  "key20": "5xSc3wr1D89hQfXU9kNyMZaADj9ZXmTMLArGNNy5ZQPwyhQXihSXvKtjNBeUbxddLeGetMcq2Us2QQZJEQjrEifq",
  "key21": "44mcBNgY2KXCEAKBeUEQ8j2t75Dj9Kmq6FtGi2jN8VtFzqsrjbpS2NS2Cd3xc1v6PDJExHzEFA5dKS96tRsbDNaM",
  "key22": "2HPQmJ1evw1K6My5acFtrYNGoSaFRdTtD3JRniLsuTYqBPGB5XviLARSu7B6QaewvNUC6x29dvpLk8ymdMkJTdAn",
  "key23": "NrbswTfa6UDkCiN4MqianSyNKg7GwTXNkEYrc8uxepSvKH9wQsNY9Y3g6WE3kyhDy1ZHzpcKCVFNa6GhFNFiKTc",
  "key24": "4FtosCwogpXPumEUHy1Cfz1gAMJHtNVFLqwxVafpx77pTeayfH9g67SmBEHW1bNSKXwjnUFuxAATtmLuq3UcGV5w",
  "key25": "5p7ChHTLgic1L6pm3r8iUpGR3Bj1H2WsYUgQfY7nf5g4aNnQ1W2ZdPKU4M1Eg4nRQ5CDtVSa795XznNQApPahVLJ",
  "key26": "2RMmJGx3mFRYJFd3uNg9EJQzArtUxdbcrE6HLMN9skE7CpjJzFeb6W5PcAXPh45b8MmAxMGTgCRStxghCVW3ztGi",
  "key27": "3nJPR3VM9GhiWa8QeXFaPcz5MMJyZsTFgazJBiXWu16qoRXNSnA4tMFgjtBCnqrTojvHsNzLpe259mNjdoKa2SfB",
  "key28": "zioZJ4PXDLJdnuquGiUjD4TsGf37JPGFzY8Ufz6JykyVVoa3VmhFCot6Yh9x9tofgu8RtH5LYYqE3Ss6GrnmNfM",
  "key29": "3Aqo5pzurpvKc2hVrQrWGJiioeU4pSecMNikRN8RAYzGK1f5rpMaANvhZ3eNZYuFaQwdw8dQdo3xVuHFDfEsHfrK",
  "key30": "2CBjVuB7TJYExcCywhPbqNSRFEt9nzVAGP4yEAa6CWmJeRPuz45Z8K4NjEAWAUjs7c4oknbZzH1cnQzopmnVMNVo",
  "key31": "614h6eheHi9stmqPTU6G1im3CejphgogXvErirpPdnUnRzRKQfC3PWzyFGvsPqZJQKDat5xBnP3jmKSKdEy7BEWR",
  "key32": "5NA1Y2Ytrr3Mnb5QjuGiqY7cmxHQBF3zRvZTNZZPuhKoN98RoDeiVMXHFJYBatZrgv4QG7vkQkpcKSz9jpNB6FWm",
  "key33": "49VDF1Rf23hQbL5BJKmuLFYCn1yaFf2xm37APduJQPsUBTMq4q44dEgSt5SDLAiz2UwtDX6iGGktdd3HMZ8xL2vH",
  "key34": "XGoxcSjjPgBwRyoxG9djVrBiXb9bwMeXNb4AKDUkkC3eGFC2khkMSRYuTvhPgYnaFYrPWE9bF69yr7QWjigPRQm",
  "key35": "3P31UhrooLii7tNpgmygsd3DNcACiQZigS92gDywmJGZyrjmqKDZ8vLruCnazfY2s8rT6hoD9GujXKTY43LXGKUj",
  "key36": "3Lj1Zb6CZDV4z5jQbV6FsSo3Le9DBR7Ho3NjfLTk9ECt11GozcwhLe9waj4kBG6BZZLKPxviNdCSg1VQQWeVVr61",
  "key37": "2rxxhQ37XbP3Nv7Lz9nirbDdtSt63rRQBa5YKMNWJ7ye8MyyxPrZca3KyWTpKENLc84JQ6nCfdeJ9L2QDjccANDa"
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
