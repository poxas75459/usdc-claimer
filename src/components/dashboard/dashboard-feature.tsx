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
    "3C35SjJtFMFii9FwD4zTQPyYdXbcH2vbwnaL4vFJPSpPm73yXdPPAw6G5pJZYTxBM9K4591qvKPPUBVytVa6WSLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51dLg3JAB1pJK4YXpbZjhcA3Tbvb6cw6uCYRjLwSm4uz5XBwvo75MnQnazKWDWR5KxAfB22dnt4fvScfuQw1DCZg",
  "key1": "47SWkpVmGPy2QFSQE4wGULUBRsZmQ1A4YKkmZ29cL3FcwdzMqKb6qn8riz1LKjZegdRyFa113ahY479YLBaLRkWU",
  "key2": "3KLQZASkZxeWbjJpEa7DX337Y7jYrMshzuLCRMebJXBDVskYMEr3V9S3bX8A6bRSboEhq4raoixkyH6hS5eQ1xat",
  "key3": "22cUeiM2dnf4VmQ9y6uZget2rjviSPmfieQqGUNcYtHi4DLTx8odPn9q7gkfxiLihsxafuBJfP6U35ZcFPnWknQY",
  "key4": "4TaSbGQmeaBCkM9fXqJgg9xb48omibz1XxDtjNu3vpj3jTwkdeFa7gEgoqi8rteiBBCGAjJAhgymkXtPBZfYk9u3",
  "key5": "2WfqVbcLQuyos7Ky5ewxyNkxRKQ3keTFGSr2SCCDxQnic4aEjQLJtQJtuhnGfNgJCxPA7JJZGo8vnwQPNrwyN1BE",
  "key6": "djb7KD9HnQLJVouTX8o8EcUikPLq4CjD3921iNuiPhEc5PZ6PXkNnCBYCrmrTS3qiuxT7mDjEGVt21CAWC28trY",
  "key7": "2v97SwDCXdxbWNMx4XJE6j5yvkfiF3Ww4FmbCxVHgTdjn9C4dTnV6Y3wt91mz7d8VKePActwAJt7DVFrUqG4VtwM",
  "key8": "53ejLVcMcr9qk5HBQpkpinX8dVmeYZDbBsGBpFGTEC3xLmH85W1uUqZ9tRnihcWonJsPBsB3LhuUREMGdJcKpnQi",
  "key9": "46eiDheqTLL3eeEydLWdvLgsUynSxKuBxDn9qV5PcqXZQCXx1jJki4mmKxhFVF3cvD5rr4hTYAMDYMxbcF5vWP9s",
  "key10": "4SpLE8X6mV9V823u2z1AL4tSEkQ35C1wgYt3wPNXp31Ra9jdGSCeL5wbMe6qxDwA7xKmwuod2pNnoSG2TgCpZrCW",
  "key11": "5z8sg5ztPPzgKwDcxX9J8KhNbS7mMWd5pkf6miFfYTkr7oUb9K41HpATuvpfJGSv6zHFzw6Fy4tBUfB6Vf43XWDi",
  "key12": "3L1A8dbphG7yaHCovGhsXnzbQUCHHEeFbRSr51gs1Ly4tRNEUJf6Y9viJZ1m2znEonMPYBaTYboQ1SVw9sHsRh4F",
  "key13": "4VgFNT5mhYpTMpwNhpThmvCu74Q5VuSGp2uce981HyNy45AAg31XiEHMFqPpxPNA3MdyuC5KyPvkrcq6hoHE78SX",
  "key14": "2mAZ1LqkxJ3vrHi4WaWf5VwhowNvpabLXnLD82KnArjniqBXery9bGY3w7jS5VAiWcT7pVxtp6cV2JBZHFHJ6tHk",
  "key15": "4oJWignniLr7x5sSbevebTCmcrZ436SshPehAdVvVJmjodQB9zUWj2MYyps1cacXA5ujsA8dUEKYwbPUDrFMZczv",
  "key16": "4pB3pAQaEWc28MLeWUPVs9QWCJGVcP9CFqLDiJLPxCjRf65wc4jhZ4qyyxoag1MjuNcS66jcQGWns4CH8oVi84Vk",
  "key17": "nTDgWBXr7PWiFm2M6B59AsuBii49zFYwzrgmZsQr2bnPRNurmeAm7Me669qrR3PFeV7SmbWWvsPPTct1FSXsfp6",
  "key18": "3UnCebfBqc3bU9kGmAUh8JwmTxqMJc6RmjchQ5y2ujuocLCqbrDv34kxEZYYKNXAMZLkU4X7VKVviZiUiPbkGkRA",
  "key19": "51a5c4s64fZ6avxA6y9tTErxpPiWEjxLTZ3kijNdcvtAEEqXxdpNCNK6TY5jxAkuGAoTRj4EvDYBKcGT6zrc11qy",
  "key20": "3MWoYFnt1QTxyUQtFEvELs8oKdpDYHtYTHy44cr72gcdPCeU64B1BAKc5LyjqwjgijmDA9DePdtyhZKAxrmG7Smq",
  "key21": "5b6q6kuk7yQkgoo9c2QU25rVyiJK4kL7yiJGKKz1owyboAfjjZZuGsVEp17BzdNVi3zLNUBq3qoUPQbh2dQZjYpu",
  "key22": "4Wp6vqTL7f5f19qrvSJ89TUAoJ5QAborz69NkaLUCciYDuhPmrqY75qytJkvgoESbFXQnvi9n13SASGfbVjSUGHq",
  "key23": "PJa2MT8YnL7KSU4MGCXdXWECcGYGUrsDXcNJXDUjCrvfhyWHuNFkqSx3CGznkQ7uxEyfvMKdbq12xfkUKWPsAxn",
  "key24": "zMb3dqiocbJH71rqAkfPdH17MEKjZr4Dr5542YBFV3E5gJyENVghjdNozNxDKwWuN3YStN1e6C1UAfZtvyqCifx",
  "key25": "2eahx9Mpq66mj1rVESJ3jYrFyic38iJyLbYcSToxsguD2TVxXogbET83YntAy7qfMtaW5aVbjZC6k1H5PAZnJZZC",
  "key26": "5LLUfSoYUFD3Kgdy74BCz3nhC4FSsJEUyLrQEhRgdxT3crTMiYPabCEngXH3EVsnGavYr7mWfNUbXLA9E6Cr4qLh",
  "key27": "4Cm6PryWZgdoWXYNkBbUAwbaEmSJ1Hk9p6QiqzpqPzBfE5GNbYDgBetxWE3nJ6ZSeark4BGXRRmckJMXV52HFDXJ",
  "key28": "4igtH2ggskBeYCxuipMeLv3pwU8ibPDCF9igSbZSiXwKKSHz9ZRHG4oGno6gy5VNcs1U6jp2xc3BTzxqc5wmfNcs",
  "key29": "2swNuBiAbCWf3D9Q8SK2nYWzAsB8Cax5rzb6ij9UAUtKKNSSy7s8vcJnH4pHYiinaBHVQMsM1UVdcdwueYkJdPr6",
  "key30": "2EL7WvZmwpVuUmtGjzcYR4QV1VRGKnj7hPGpbPUM7P7S2nhd3ywwof89qtpTQ2f9e3172Fvx7DdvFP1sDKM7JsnD",
  "key31": "2oAHBLwUVjXZEewoja5KRijWt2ndA6NdiAtVVunvXhKaAnh88mC6iGkiPmccr7cv9XddTPn5Mn9YAKVSsLuv1oK4",
  "key32": "3J2NeM3BX8DZVFNd8VYpnykfNn127rLpGjonZwZuG9HPdVcwxmYmXQFhruKJpnZFLAXt4kJfZb4vtmxwZMJdbYzm",
  "key33": "wvSKRr3N2YFFtHZDUeeMezjEAkVmP2zv9F97U19jJeUgz7vDMofUa7siK2HsnLhPsbwSsw3fsuXe6ECE5E6EpRj",
  "key34": "2jSq8478XBec7U6Bdt9ZDB8XWscKWrHdgsGBovVWU1o1KgvLqhWspfqPRGg3WfY7rfdA9M2cBXF1kA8xYsbc151s",
  "key35": "4xqCaQLbwrqzGt7APe8jqw3LstcknfMzD23yASeWmFDRfNq6i3SCfqFp3AZQk82Ew5kmpnq6JN3r9V1paF6bnsrE",
  "key36": "2aqr3kGu6oLTHsGqeEr2AKLnguy9UPbzSaKTLTjsqc4J5rsCi6wijTY4A3pU9npF6sRiy5S82U5EZj1KoPnxphmo"
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
