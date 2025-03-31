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
    "dckvPBTmrzJR8Dw2HDEMC4viPjPCvHANfUJ2QR79kxVX54uUXA8BUL6n5p1ZSN5HyWUcjs9h1iWxg88RgknHsrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xaSm6G1zPAK3zNNuxQT3CSwZSL5QTwP4xh4RXT2itwRF6eEngsnegNYRCatoJ1DZJi1XWNBBPasxf9ANwEukbrJ",
  "key1": "2gfG2mW1reLtt336s8GA4Ab7YZ6cxJY849EQFX3fcuhNC18jPRqsC8NaZ6rUA6gJ4Q4gm9NfMe9oALNWLZ769xf8",
  "key2": "39bkEEpuXEHUX9A3qfUCAX2UcnrCkAcFucVzCePDehLpGCSKCRyhVLHvECb9Zx3YRFg4ehw7FEC32fwwmSBucXif",
  "key3": "3Pqx9jR6zYCcCGENKGkJ8KkcWhhrJzu3aB9nHkaKFk1FgRbeTaDGxvcdJDgs7Bb7BVT9ybQCFRm56ZaL489tPutL",
  "key4": "46jB5yL5zp8C8cBHhXANJFiEzQD3GceVf4tyT3EFdwSka8QjpZWNHiuUPmwQtpsbx9daSZCNMNnWCYTmZ14L5rM6",
  "key5": "3uW5jVzqXLt5Hhme6YbYDRRibkdRptgSCoRW9C8WqvFC5X4y1Brp99KT7caBW3XT5mUW9ceVUNqnfnznoj2X9n4M",
  "key6": "2yo4RvJKRC2NCzm8ggCungMRiCfUfrcqQU5HHoiuKLHNmNLjSdXPWhGvDSLxM6Te9fRFbhfCaMC14UarnAVvqCTL",
  "key7": "i65mnb7CaKJaaBD4zH2uVB1CFQpZ9D9Z7Xbdm45nEYGGwQMWkFiDaCdk438EMXMr6Hk4ripzxxcSot9466VRmyV",
  "key8": "36WdVBcEi1JjSvVt9bnpGvHqk6y81pVb3QWfGxiBbaEXJT1aoZ5LYWxUhux7hWsHtAD8fyFZF17B25FCiT6i9zqf",
  "key9": "4sFhwPiBfM1HwhwPfUywgpUUQ7VsXK4CrgWs7mb2evVzHTZLsU3EiuPP4UqDtVboZLmoXjpqve2uwewu9Xhm3vZR",
  "key10": "59PafKySBmM4ZmYbWud7tFnZqtSeGEhjkT7Bd3pVXew5sne2odq89t8TVSGr7odWKG8v5RHFKcyF7uBbNBYr9Koe",
  "key11": "5m3AykBPYaB1yuGwJhS2JwqofocgmiMGQrE6uJuFY7h8ugG3aF3UcLv7CdPrCEZRkSnjW9EEmgEgLQvzox36JsSt",
  "key12": "2PxRQR2YrGDL3vrXBAs4m4wi1FwJPNK33reiUEzhXgrpGajThjPtGf6NNfUqMA7RJRsKdfm6o4SKyztq199Sr5Aw",
  "key13": "4AyM2eUjgwAGKQsENkxwyQ2udjjN6tntvFPjT2JVFxvf6LSwGoFu24XbTQdwiWMSAKpzHu4X2GXqynfaLZH9aA3V",
  "key14": "571zsLw1vKzpNejqZs41wUddHmc119xZYzFXTMoewuTFsbzLnSHoPjEi9VuBobFsV983QGG7YU5oAHRVUwBRBAyp",
  "key15": "bFPdGWwFUxDvYcnxdJgY63zozTAgTVt36aRzMLv6EhLmiReKpXUAWTXzrS2cYFQrqkpiaSNYVZbPzPukuQcV3L4",
  "key16": "5hgfWVPdcyY455VLK2mZb1WVKUK92kAm5itkJkPSYVkbr982HrgTVZ5aB9aC1UwriUUk9kZJ7YWadgmxkjZRPVGe",
  "key17": "j8yG4d3U5D2UjteeGp6QuhZpFGSTrHTBXXo8wViB8KSA1Hp4pEiebwWP9KCQpnm8CijSrf7KiZPuWbRgVpu4wDL",
  "key18": "5M1mcx7hdwjhwrejFv3CJh4xVKKNWqPneW73BMWKWhKkzmtbRf9mk9NsMJbLyy3x9hgZsUXWKVcEHqmZHjjLXiu",
  "key19": "37htXcv14X3LGcsGXANtFci41oxqGaqKdAuvk7o5Yfy1SuMNj9WK1NTFi3pimWWUFEX3QPRbMYL6JzB7bTKYdyCE",
  "key20": "2m4Aoh3NtJDfKVszJRFTuueSvhMxPc2wcwyp6EzSyL2qoUs8n49GNKHZYBiU5noT3EyLyjUvS6zuHstwKmueZR3A",
  "key21": "5LMjECy815YE65AAR4TEd1WajAii2zXKFq9yPJgRvM4BQvfLHzqqLMXTZAR163mKViGk7JGRJYa78BLoUMDJ7Y96",
  "key22": "3BxDPHebVZ3v7AcumGnPSwQRxdEh9EJyYrHqd9ZmkAYbTyhxFkhazEtYjS564NchXUgmS9fW7oQBeVjubNszVxs3",
  "key23": "bQUJz8993bfqAjMKxvEroX5BcRK1Ce18T2nCDQd4zA9i72gK7C4uSYaHjE1q5496WELWzxMsQThwW341CMqsRut",
  "key24": "3Ec8v16t6mFHBzFGTbJSCqs6nubEFPK64nf4MDVhbD6V5VKggGxbVHWVFNxCv8ikPtvRe31xb8xWNUwXmVa7WqQf"
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
