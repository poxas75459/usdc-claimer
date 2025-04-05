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
    "48bCBCUmeTAoBGfBPtbmUMVzTUr5u1eJwuwZ7thTFQWekj7P5YwKGeFsYxXDtnHbytELcNei72YPgXoVKUa6WVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKRp1K9wDjN86Z9iZ2UmEHoCxwzZsvaAhsRVKTv1JTDta2nzSWptSCcGftZxWxtZfYSAZmufmMoHBEqkSHiVaAH",
  "key1": "4jAbaXLyznc23Ym8FDDkqezSsbksZKCSrsvVz3qB6n79XwHVQQmd5yt3QB6xf5uRAHmwoczzJC5aXfJKiDzYAJVn",
  "key2": "tzfj8St6F5HWTc7JyrWqe3TRdm5sWkCnHh1cpCZH2p7i17Dk5koZfcZMTVFgnFuAdYoyM8yVWiffLGQHfyqoSWU",
  "key3": "5pPMjXMCTSdaWK1yvcJcogVhy94JhaPXnhh5MJTuCHtiN56RCUKDfiNr5CqBKDgfeEqpBiRPjRBQv2Q3BZeEm5KR",
  "key4": "4JaryLQsDyRcRpnVRW2pgz8hH9NVroWej3hFv9UVTr4wYMpMpciiS9cA36eyjMqBtMJ1BcXpAks5G9fZ4ajg34UV",
  "key5": "3zyKBP3c1ynhwW7Cb5ZRqhdeDjzcmcg4XXf9gZUgiB42SE11ejzvyqp2t22Z8PgV91Xdi8mszBsqxETsSFa7euHi",
  "key6": "25pZWbfiFvBSnv13Amac2eDPAXhbfdsVE9oLNxkhi82CAS8gYArDM7dgoSrtbQUi6twmqtgfS9u93gN2XrDB5aKj",
  "key7": "2icWg98ZpE3iiig2kcNGEMPjEWYAfcnWDYDZDip1mhHHaXShVqdwBBiNTcZAcGYRm2kFH7Lsb8yUY59PxKSHVrwh",
  "key8": "5HCEKLBKChysDs25QbuGJrkdXGr6ZHrSvBtHBppN9i494i6N3Pt5bmZjo5DG5W1GME8uJRNGgqxUH7dUaYZk2W6s",
  "key9": "3xFwr5MKsph9UZ6tDPrvC9rjhgM72rVLuat3D1zpUjjfPYowjxdmkvtbcXyU7yE48fRcBCfYv5CkromC6ehtrUuH",
  "key10": "6N6NZa1h4FJiyR5vUX3kbuupGjTFpDr6PyrfiVsfR7Z9A8mk5pmeeffAiAenTwXiJfv4aZDWZQRDBfaMDffztaP",
  "key11": "55zEsrhgt1iDmbaZZ1QTkf9Q7rhftGecUfMnea2UZdt8qhrUZjuLjuGNG3fMNWtBoDZLm5FHxAv8KuPpEyfVLd9L",
  "key12": "63MRNYj8WRSUAZuBtbKdDsdWypifU4zJDSKzpLpvxAvkoFhTXLKgvu26VyNz1nXk9UZbBppDJX7ZTQgJeNiivewK",
  "key13": "3uDfkoK6nQkdd8XTNUnz2dDVMwWnu2QYKzFiTe5JP4W1wBfA4C3X96gdBicfK2Co1u8XxNzKxv52SgdFH2cgcunK",
  "key14": "5t5NBomfaLBxme13zwY7rKc7N3wKgF8PyMabmsq47fM2QcpXxHcGp825rACV9djHvvJC3Uj8bmKxpAWNnxBm2GLi",
  "key15": "2xMBhQ6LbZeqvSsBSAFmjCVtMzh5KhQY1iA5vEZ69GWPr9zidmUzqW8Xp57SxUHYYfFtjmQDaREKuYmtzcbgFYTC",
  "key16": "2LDeUCmJZW4EPcPc1bdMDqU93ebqeJzCNtZpzvNou3f6HFyzwBoFpHPFR4DmqKgexNAbiUZ54aa6jRiRZiVUKW2s",
  "key17": "2f9W1UANiBH4DRcfM999HJBjQRXPhKDABnpJTFntgSynQhXWdyk95wYJGLksXgWX6vMqhxZsDZdNDDJkKN4Jm3bS",
  "key18": "59YxB7usaicQCmPTkRu1u82vzAXD2FbBuo6PsQUqusovMAJHMD69EsuTfwEA52Az5of4ZULk5j7pduyrxzc8xU1c",
  "key19": "4prCUK47WEhL6rbwhaZJckDkthVkHUop7A1gJkSHnL9Nv4nSZQ2RYMiCArxdh2PY9EGbNZJeHn9Jhh4spXKqBehD",
  "key20": "4iS41k3CU38WoVWu6QuqdQXyTt4gpJPkpBeAF5Y5Zuoq25cvMka9zV8gEZU6YnwN8tepVT2ha1kqHW9tG1Kxn6VK",
  "key21": "3WviAg2ubqUuQ17gVsqf7yVSWnt24MCZTbS2KDLnre5dLbJVkipLJJKXBsdFQic3t4G1Z1bEntpjLiWfTw34Lxhg",
  "key22": "5xpwyNwBRf5psbZDUPHzwCzNEbhi3Vz6DexcpxZcsSTjzYpEcqcLhL11pw4kYTwmrgtiSNZ78vN4D3xFDTJZfUEm",
  "key23": "3ZYuZL7yJdykoh3i4hHsRjygQycAzVpyYrqgYeKf7qfT7LSnGjR6BNYMTq1bQtR2CRKee4ucEqRT4cFwEnDCCkzT",
  "key24": "3px5vsfXayWXjN9NzB26sacaETnxWxgAy7TJDPPJaMNA43warCz5r3qZDAZAvrZg5XNunZ9QEZvP8fgsktBpdqCi",
  "key25": "bznMwdRnLdWhN7GaH1qMLMDtvuYjQGqSUPJzsuNtxRbhABmx6JftDf7eBSozcYMnJBu1xfVyeEmiMnuXYYoKvK3",
  "key26": "4xgBmDqTXdxZEr8EzXdEAdrWf3ZNgVjBtHh4S7dZGuc2CvjxgAxaEQgu1pye9Pv5BFdWiirVbD9LkCpdT1Vmd2mv",
  "key27": "59Kh6DSvqCpegPsDbGJfz5VxmEFtzKZMNRt2YNtbyRpocvZfGMjioiQYZ2L4kpkoQVN7F31u2gufC51NXrcgGNqm",
  "key28": "2CZZnmRgrGvX77LUySjoeRwr3zgEdfMx8K3jbsFFKM5UNNcvhMVqKBsFGQdjrkh8QnnNMPHdMDeDroffdJDtwKJW",
  "key29": "2ViReFSgiyTPPecan8nT5Ek94UpHEzFH4FDNveN9YoZhpm3Djhx6UJa3gFKyEqGB9CbmekrZAMQJB5gnrrzatHtP",
  "key30": "2cQajAMCG3kWmWT73E4PD2yFbUZ1ViqukNmuARUd6LpcR8bJPwxGPrwVNKTyiQBi5vH5BpGtVM6xpSatUej64Gzn",
  "key31": "62UZ3549RWjKkVq2qfUNKdvgYPbpcd3HpJHqjiWrbJuhNb3FSqPz7Zw2XbBz9AkwuBGWi9TUcdkxMF3zqUy1nHJJ",
  "key32": "tEytkYmVWGprE4VKu8mXDzyBNtiWURUp8R78WrdZyVDYxwyBPxLQonUZbUHZ5tUyuea1pjKjz4VtANHhWvj9sk5",
  "key33": "2h9FoiRcuTJ1GK9Z1oerrZf2GSWfnye9J5Fb3fmvkYh1nSFo4FviqXnkc2hEuMBZMJEmbhiJRo7ZSGKtYef3CyZs",
  "key34": "GNhW2JYbRcYrxARBUg8JVnbPA7sHPHLLJMci927S6qnkSqPWUG68pntznx3GmSaq3T6HPVzDL7TnjoSPAy3f8Av",
  "key35": "51GBgBEvswEkC6ugfrVQvHcqe9FMRNVXTWhvdBsTMKz43d3kMR1Bfe7kSRjaoMmb1AkK7ABHh8U9asUcFxzMB5NY",
  "key36": "3xHaq2sKQsNVnbXeUefMhwxQ4G7fkqWtFioesmLmKn6hBjJb1R6WQrfSVyo9KWoJbgBbbnHUVMbu9apPPXhEGDEK",
  "key37": "5bMnW3zoFPuLR5cFsFSDrcJxQ2LZeNhdgnPF7QognxmPaWukWZEdbpVNjMLQwBKKaYemRCjCtGfKjWBLCXEkikFX",
  "key38": "aW46uiPDf3ggEgTCZpBhHe1TqorWYGZT1C5Z3RnCf6BLLoptyVxiLiGPE4dmn6g5Dc11PnzkYzuQxssQ77VkEQy",
  "key39": "3CSMWKQHhQnJk3LDXkhoppEzyVBfa3rrsbqpQWnAoAWqrtU4ipWe9JEJS8boXrizyfsHviGSs7WGwmuJvFQgTNV3",
  "key40": "4cZUpj8s5j9rDYnZEGNMgfpvyEE6zQiT2QtDxL8pBRhYcmDJiBHPvwda7kRDLSuPei9YEUVRYrJGe8oeq5c4d8AB",
  "key41": "LNqdnvhxKLcsmC2yEGkq4oq9aq6DTogDKfKNFte4Z2jHmBstfrviDnLUZa7tasoUdP1anjWaKbvagdaTfRm1sMx"
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
