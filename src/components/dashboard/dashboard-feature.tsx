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
    "pC6n6VYjK39mhf7VE79e6jBLGWVpLk9Ukr4yBemAY2X4vkTFpcu3d1griEMnskFGHU5cwCs54KtKngoECA4Jcra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kXkzcFXmrLxVueTEwYznXebSWFaMTahpzdVTx7QqpbxiufnTc3oBZzuvBmjb69VbakfYYGGDjcSU5yjdbciDEV3",
  "key1": "2QcLvTRdNhqudDAnHJ1zhT5qjGZ7hSWFczuxs5EKopwzWqbGZ27h4JkNA4bRgAkkBpzYTkMW6JRHeP2EK3pHdxSD",
  "key2": "4yFU3eXdAJQKj1qLqbA7rSQUFsCcnpDaVtpxAfeNNVLkr272sCHyozzwnPeJQJENkZ2k6LySEBR3DTVTv9poZ81X",
  "key3": "5yd74w63VbBAvdUH2MMAeVCCvaMndvuYhVvR7GVz8ZURS3PrTBFj2fJ4LNzjtYLtnUkF5ySGrc1rCGLkA9Jx1pYi",
  "key4": "2qayo5bEeddWZd1BjA7hVtimMa47Q9biftFroW6DMdGnQmuUTiojomfQYwyuFCT37kMFx1QsAEpwgecfmatXJQCD",
  "key5": "3Js6ZQBnLih9ed47WypsGjfb7pDpmkYmmGHE6tmSrQustQUonH6zugPUvW2Be83nWMDksStxBnZpiGUR9H3W753J",
  "key6": "4gwYy57NVrhVqSpcLKbnhxFGxGRdJwvt3xA3mg61WUjS8M93vHHAgiJFEfqpSygvdM9K6YC9rBtsZvJws9gLqbTt",
  "key7": "2ZzAV4aT162w1LDEx6JTJBRzcWer8gis8VEhpktwpTa9oCdKGHK2gF5vHMEpAM8EKjdZwchwwp2McPxGguvSpQct",
  "key8": "Wh7YRxr5xrqZjF5s3VTFoNEgS8hVGfDkPn3VRAVyHUbQgrNCwhqdTWcNjiCxHFmZZQCVMxKpJZj9yaryV8GF4rV",
  "key9": "2J7mFNfNrAFoJQjiomYnHnMSgFH6LZsbm9wjDW2H6WX6v17vWQyzaXyfuL4GV3HJfEdNCnazATLJPjTwP3DN7Rjg",
  "key10": "32PFPMSSFPmRTNEeFyT1iMm57T2aR3E8ZUbYBzhWRiKh6zwALWYVQvBGDL51jzFch2LCdwbDkJCyejr9fxnoNU9Q",
  "key11": "38CdCsvJHSg3jL112TEdcA6zHEJV99DpcY2CEYENYPf43agNE8D23hPCKB4thJZiAu6CujKCoB5uMkgBG4DAtjTq",
  "key12": "fqugv6fwBBCgxgpAfJfyqDiVkmWDEmL1yf1GKbMb2ty9pt9Krz2HThtwJUJ4Xkxe2cR4rR3vaftvkNayZWYqU1D",
  "key13": "2uvbuE2RHEQpcrbCFEcmxRyQBYdAngf852JeqaJyhBMPAvs4fiqTKPE7AP19TWFaRCEV3RJCCwy5oLvhY5ErkTgT",
  "key14": "3yf6ijCxSCAtPCLZpG5EiFuKwigcTmCTDuwymmtcBZbnogpkKz2MNSYjPySZTFPEwW9ybvczU34eYwbwyBZbVVDn",
  "key15": "8J6tnEjWQ9qf1bX9eKKG1UDFNwx2GhoL9V68iHiUGcynJPhi4YPudU2g4S3Z6T4NYMBiaVVkLt9FQpQRPzyzvEs",
  "key16": "4hGVJxEywcYGA3dmHS3ksSyGxf3LEfkKPQkHKudFYSrHcm6tGgcSLUa3ih4HUannCs9xhy4DmscLo2riGNLXAdHA",
  "key17": "2Eg3wzfSkKwPUUBh6HYAxmvjcvZ69j42uL3ThruxnxQq5cUN2KHBDDGC9B6anzMHFVeLA6DgBs4JnAhd7XX6g3HC",
  "key18": "4xuAmS8KJu4DoBB5wcCJfdNnNtkeHTC8CyXmN9XMDpf5zi4FwrsZ6j5vjMQKeGkoVYFyxszmRrXWhASxzfimA67E",
  "key19": "4sTCyvSLMFbMwLfd9VESzocMkGKWJip1dVRQUJckn9pZ8HLvyovFAzWpxaTaoj47ELUScGGDPj9F9fWY1GfC5usc",
  "key20": "4KB7myeVZcWQ8D5qxXAn7XqTSt5Cs5x3cpr2ngGp9cQJc2FZAAFqyriqfXRkHWLTfa5Bkgt2sB7WWTRXVV1JpG7k",
  "key21": "4eT5DKXzJQm4u6QJ4sfgdcJc8wzrJUdxcxeuFC4j1ExX3cPemD3wGzj9J6APbpihHHb7ABc8uNFb8xXEwD7a2dAn",
  "key22": "LnfraWkbofUQCFtnWqRT5egb4ahJP2Suu2azTrzCdpnzvXMtMkGCvZS6YeCC33vLEaMJS3sgBx8KSfvZ7R8Ys5E",
  "key23": "YG5W5RZ4xJXC8AerQf6ebkMV6Tqbea6CxZCYwiNUxH6Smj57by88JSgGDwNApHY5uAN1xpAMfYXnbgGLKEK5ZeH",
  "key24": "5Cy8MHVJKwChkwFkRqPGgBt9sZvFRnLjBdwerD9wrLMf5B7XWzTKLoKnwVSo1gz4vHw4X3tCSgg23Bb5Q5UW1WHv",
  "key25": "4qPes7E78iZt82umdYqXKoa6z5LzJzHemMPyRxscZzXZCFy9pEkHjnvM19bbbn55gMBNFSWWQP6XW1edRFTSJwNd",
  "key26": "3CGB695jE5ZHkjzRVprGSNF1s5iMhgVLWHt1w34JXPFWmaX9TPPqVc5Q94JYT7cAEkUsBswY1fkZwL2ScN1tcD7Y",
  "key27": "5cCiVJGwtfB8yykDaZtKEd1BL69Hh8k7xL3vBd3W8Cr3oj3E6YSvUYCURmhkAsBGcuctUU7H63pYrhu1USg6XePE",
  "key28": "qDnVRkvQMvkhqt8aczejcskjVSKQfuNxFgPKu4iYarsPczYvvE41jo9J69YS3M7wNcN1Y1Vb4CjvUWcqqYmxMVm",
  "key29": "3igt6FofwzSTVs9r4FfxExrFt7rj17YBDG2XHyKG4wqF4MR9gL9dTEX7JweYQZSMHErxLNNyjGwv1C4cXzmdngMj",
  "key30": "3bcUoHWgmqaU7oyyJAgJJgrb2c9k4aHsbV2jth5YakTP18v2sP8Y7h37EU2XjLJu5LLVv9v7kC7qQ9uMCvbRuEy8"
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
