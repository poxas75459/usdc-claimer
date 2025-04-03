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
    "64VPMYE9CSaTtZe7t1RsLwQCRFGJaRCCXqy7YbikPzdyau4hcJwq1FRNk5JTUfFXeTDEphoZf2YfQP7svvfhCv9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rc28Ap64AkozvTtabHrsgudft8dPWzkMjqEzYvC6fHDmAg4hT9EHBMpG3MZVB9b6HZQXxqMuxAMUs59TA3ZuDZu",
  "key1": "4fKHcynhYb6eZ4MqJv2qd1urcjVLpL4gshDXQE7ePhFc62sruVdBycbzkErqpdhvqKqgYicEe3J3xsx6Pocgt2Eo",
  "key2": "3imsdx8covXPbKWTKY3PQPDnsEDj8GGDgPFqU7EbM3oPzGdHsMqDNyCw6csC9B7ccnzwrBR2UPrFgKBGaypmMhKn",
  "key3": "4ZjuNgCYZjsNbRFCpCascnK4qjKjYunXxFHyZLN9z8aKDMSSooJf7KxQMscvGqEZJ8tk6uRwtSRhuxXtiiqTnAtm",
  "key4": "4nhEmPs7MoA61da3Hu9nTkJ1xZAHHKv1kK73tXkmXGP6UmbQSYyzf4W9FAmu6kkWGbCK2itg4VVyeiLJfXvtnTbk",
  "key5": "63S9nvYARBSDHoiffNhnpHzLHiYeyr4wVfhSz7gUMmY9YBMWC33Uh2HRFVSAzDmeJXZdfEo9zeK4tLee7Bpw1drj",
  "key6": "SszXQUnKC9A47ZQcP1rUje2JCDUft8MHSAYEvUiqsyzriXUYUZ7FhRKWG6pjKaXZxRQbjGwsZCgHd7BpQZPrwYr",
  "key7": "2qfS91j1tqtyypnWG7e2Z8NvZBgA18pqRRHyBrgnswhwgTTfG3RtfRZcPYe6RTevBqy1poBVquf1WH4mbpHfRrNw",
  "key8": "3opzuRYy2JwZhR7NhpgFUZXEHujYeD3XDAzpmV7eqkDBcSDkxF3KUgAJ9Zu1hCAyFH4PrP2pwxxXfCSvLTGYo3XT",
  "key9": "3chp5FiNUke9Kn1hPnWAvehCZ9eYSsWTirqeBs5HMFbse5BfTR8hdhJv9R8SnNjzBXLpiscEvAFXr1NtJ2gYM8jv",
  "key10": "4Huhy7pJtJrLragwtM2J4mQXDGL81k7Z7PBZ46NE5eUtXSGWP2BSBV3mNdhfffrTf5UqYTYPRq5Y3cezjCtjXqVT",
  "key11": "4KTun5QRmqi3hWMGuJKE8ewQ2y6HCQxGANBhSkkhHDGJzdTvMjBm8f78rrJfhjEyJtWL6J5ZML22mo6pPiUF1wVa",
  "key12": "b4Qj2Xue5L1iKPe2xhJ7RN2dpoXkeXuu8swVTd68FVxcxssoLkPjqmLDig1Xo7WQF9tKUbzyQM4XvtzazkB3Thv",
  "key13": "5E6vHxBK86PTHwytsh8Vg4kQ1inazDCK8bxaxxYmhdpJRn5kAamSVx7QyskcURVh1KTmBiKqfapojDRysrug6gdN",
  "key14": "5cVaad5twSqr161fcTpYBiZjYoX6VhqnB2Kz5z7i89bCBwHPWL4jobXtj5pCm1cazsH6QcMNKm1GwopCMWUQX8tC",
  "key15": "3SiDbXUFSXAyz3YcGEAJKeR3AqX9Mabg7ab8ZPSvqY16TAd9xAPsPzBMp2n2ea2ocbbnmE7JyAq5N8zYTUv1rumV",
  "key16": "LK18BDoQfxfJPno8GXWe4CT1aZ1qDL1sFq8mVtDxwrXs1gWrxry6NAFLsBJUP93LmgYmaRGdVyTVjarVEhPfyrc",
  "key17": "2sAc7Q4DiCpb1gLXuGeqLheMKvLmzS5rMfkvwSFC64yMGmJATraoY8Mk6VCJa5K91pYPLztHWwDY9XQ5m42LhrVA",
  "key18": "3rVSzxPDuaRfMtyUNpR5162T1BeABhwpMqd4oRDCeyXQpRKJHm9VGxKL9Gm28KEBG8LfmFXbmW3S44Hm8kM1vfSM",
  "key19": "54humhqKnckLHAGaxH8UiNrt3ipGkGdiXztRoZ4vCmhtQP1Kd623FnkUnz5g4T7W5X1Z2t5UcDdbFjmnsG1sXXrj",
  "key20": "59C42vCJsZ2a8Vo17qFk1WaaCjUgwp4AYwKoqj1Zi48gYtbWN2B8db2h3heDJ1RS2PBP9Ez9F7fVK4TTox6m4pVg",
  "key21": "2AcmnGVnk9hzTpAqhGftb7oFK6HU1Nuj12q7UQhWWxqdE4bLoh1kS4uUYaEMHCMPxJGUU3eWcoGuwqFgu9wNLndL",
  "key22": "iW9hPoTpJeVTErQVK3TU8rDixVi7tNHSyhdMKvkVBk8pHdyEw8mveKR5Acua1gC4fp62ch4Wzvzov1G4FqJ71Mx",
  "key23": "2eTV2kksEvMR7asASAzCciYUxKBMrKMXdHBAPzCvt8trHMYvaHNegjM7CTwxY1KNofbzhA4MmsXaMxcHMByePpY4",
  "key24": "34f6iueeaiVCfTWxjmiENSZfMFavtNy1MejGG9Z8xT7LqSMHDLPBd2jLat1M4GmWvC1CEwZzr5z5eDtLpKA1m5co",
  "key25": "37SjJzeZ1CYGDojm2T72RmHGSbzC389Ha5zbh32QjDK5GC4uDCuFoYzERJt4fVerUbAhb525pVFzaoAaHtqVLsAG",
  "key26": "2Lpq13dxykD4gcn6GwtjiN3NPKszx7FPTdpz2bfQpcBgrjJXqMgExz5BDtZ6RwcP9x31TuDJLDS6mWAHTzQRs9V9",
  "key27": "4G1DkhjK18qizrmYzBkZCqdXVycCBqG3SC6esasDG9HRUKHUzudkJggUhNjNBnZzvdqqDYXb13t8ALtFfAYYeeT4"
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
