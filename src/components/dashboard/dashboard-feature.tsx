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
    "5AtZsxrwy7XF1BXRwoqHGoV6ShZvd8xs5YpG5XnfvexRCnuAkKMcCzLs33KSL6SJPiXy6P8GQzq1JbkGjKrLZmuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LUcXQus1vhURA4kyDnymwZQ516mug3xJbtGnQHJDQj5zjBaAXe8qXGwtHNR3TjS6tHYgJpnXnRjXAviDUmV6JCj",
  "key1": "4rJsKCoQ3z3QCYMN9CaqWsodk7Kwwq6FLbeqCtfkddhQg2p7Qhp4uBkMZtvLJsdQauogCMpNqs6A3s3TKmt5hNE3",
  "key2": "uG4iiUpjtQ2JoaxiD45y2ycDAg6DiPAsGdwS6Nk42K9fXoWic6nv5yFJyPzqqmRNYDD5T2qbndGft3ZxVuem5EV",
  "key3": "4qbZfoEnwi1xsEDV3b4okEJBqdJBvjLRhtZ4dpVL98Nc2SdMFJ54f4HdLEbRjNrdFEZvss4qbgo59beqh1mRkM74",
  "key4": "13DK28cDktatiSyKvDmwTYJabQmkF2AKY1mBJSpniP2N3dsG9RhbNtGtP4YSVbGvgKaFmBbqNdhrUXbwh9Dtetj",
  "key5": "2XAA9WtQvU2YHYaL3UkG1NfVLZfrov6pLN9wgheBpYse9g9XdYm9sq6jutKt1WBjBK24qVMSvj8mDCsgWf8ttkbG",
  "key6": "4PXyEV2obnVsv8HDqzZyEhsKunNQGXLwjcEDUtPbK56vLuTRzQ7GAu7CGyCAWY8E8TVdtpc8vRAEbQRTwb2YC16w",
  "key7": "BTfeMmWhV7Ti7CoccbrHhGA4D7MkY9Xr6LcDFX3QCmFGEAU6Xix8AdHMNrAHff4Z6gjHZw5CW7ZizXYbpPapJNx",
  "key8": "3XqJNB32EtiHyd16DCBQ37y6kjeWUbrRimwoPL3svobb94nehYo4Ti7T6YDgPWNkC7D74udGQ5TW2NGp1HPt6PWG",
  "key9": "3N5ZGfYadx6wtEKdYnJtbXJhbAsLwzmHG9z75uC5pb8bGuNjqn2Z3GkXKKChscujwEy6k5bjmssxSPMY7RE98ZBB",
  "key10": "p79dXMyRVxU4JzhFTGMZkFpgfgMXLX5sPbbUvjDS1pCCGBwc7vcg4Mogd8gQQK6SjfS8L7Wz4SsWHYriBAje4v2",
  "key11": "62FnZGM1D5YriXa1wpLaa49DKX12CPLZcxbHWkvn9SegMAFH9vyrmLDPPwJd7SMufX7yniisYTgiDFKFcsFRW9qc",
  "key12": "2eoTLZuU2zL1UAbncAxj98d5KXQeQQnDcmVFLv6Dw1KYCAJcaX4PRTfBHHXvR9UQioS5mPfBKWuD8ev1iV8QuVfd",
  "key13": "5SaULypxKUoxi147ExYmxEA12Rghn5VNq7V4dyNoNmcPtFhAzYgGdENC7oSM3dZSZqhbY9kPSSb4Gz9PA22yJ1Fz",
  "key14": "4GZuTJJhjFwsraT4W7x1DfEuQFV3eqbpQ2YfkMv4fYaR44y3aS3d5s1vkdtEuQSz9BHDPzpP9vJQNygCfGThxgUr",
  "key15": "o1RzvyWbKQb2fgcZqCQ7hWpUriyDJnMH9JfeXYNxsPT1t7PpBG5EmW9aTcyRiVf543yLFT6Sumh7pDgGoMnN3aU",
  "key16": "5YTpXBjop6f8Fsp8duqGwZDSnscrc94v8Rybcmu4LTQqf6uQcqNwCSLuktvyvgwKNx7rPLzF7c4mS2bxdXsmK7rR",
  "key17": "3wdj8XeH9Mavd8QrbrBS8CkxzoWMQaxtnVG8rBFctmcF7FssUniCKWdyrGLUCXpqyuPz4ddCrQQtaKkRoMZSLsbf",
  "key18": "2aU3rCxAHyJhD7geESRJU1V9n7wrpHVeCG7E3U2WbXt3wDuYJ8MZYkWwu7knyDCw8kuWb3s81x58ebxo8k612gdi",
  "key19": "2aVwi913J754VfzPS81fJpBFJMzeuZgT3tUyZ8ooiLzpSFUcb3PtT6w8s9ypanPuutfwzEo7axHjf5hCQ7FHgcJs",
  "key20": "2z9UJdPDszeKudhzPonNpLZKTZtGGPPgEYupcVLbkPKZ4JLtSRdcLcKP7jdPTWp5EYWiNhsx4sisP3NAGHAa3Fp9",
  "key21": "26k9DXaXs6ThAsK36AsuiGLTExehmrCE8j5zcR4Y8F6Xpshx9Vcf5vU6X7sNCpVNGywYaim1qUm6UwtWrkkpaWGv",
  "key22": "3ZWc9DQwNFfH2eHh34kWBCa8K6D6dTt4pq1qTcBBBSdpmGNDjSHWMGeSp9oYw8k91tjcVMgvDpGogtayGTnns4EH",
  "key23": "2Ju4nGAbFWgMkQTR3vKwgbHbMS3aAP68n9ycrsfPBCfVsGrRZhhQo7qSBkYXdWSkkJeqCG7jxLCi8wsF8ptJmwF9",
  "key24": "5qttSHgkb9xKLchyCxYRPFPyvoduRydPka8BRi5tEkHQXwbohJzhJyUhaRb9UAqUPqJPqwRk9roFTzkGN6aVJ9AM",
  "key25": "3ePZgdUCSZC8aTppVejiK8tRXLtRHy116PvvNvHz33Y9njvnx2e2r8g5uw1MzBXP9jub4FzXNwcvLrV1PtoUPxWW",
  "key26": "2QD9X8nMwnfoMkAmFdGqJXTdodb7KekJURxZaiZrMDaM8Az22HjVE9YLxR6ERpMLf5xP7AdsDKVbvuB7BkgU296U",
  "key27": "5To6VCeY3BYtDwavHWn4o1MBy6TH1CVc6BLKmMukpXpoLHChhdK65SGZLW4h77FfqerXzTiJBSbjDdrS8RN3mf5H",
  "key28": "2HjRGdvM5Z1jfwsapA4G2HBBaSUSjDA7LbKQHw7ED5AWucNS72ekspPNig161kw1pQH16KEB7LNNnMrik3EKeBnq",
  "key29": "4rNBw2A5GWpAirZg2RvbNSsuJPqi7nzuVaf2d2qSdBxoHtuqfotKZtu5DccHrCyfkBkd8urdUVq7LWaQMrkpbVLJ"
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
