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
    "b3YzNQj7R9UpnMZpopXysA72fiPUbuSeqPUdvPCNdTnZnz3Xxyxh4taAomwGPaskHCWBBs26cRskMxX74bNcjzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kgb4o2urNduDRsEcTC7YPWPGLYyHFmXZkvi5xAt563tUGFG1jbT47hS6LxUk1CFa6ETtSgMk75HJnpwGUeK4uLC",
  "key1": "5VBLW1UPE2VigeAuk6y9jGgDhnPMyuEDxoo7BbfaCspU2ycWnJYp8Q7XEPNZeqMrTHt6AbF8Q47iShHYyAtwF3i6",
  "key2": "scAsrVwkQbE1jLdiBkLwFtnQ9E2DJEhuqUV34N19dKCKdFv8f7sChQgw2H2FVth7FNHvN4HugKSR6vM8hwbyfCP",
  "key3": "2Ys6jZAc49S7PJfpz8oE1BPHa22WvuxdPD2dVTDETSux8mFAhMRW5kNkuKgqb72vzL3ySDr1PqQP5hNLS4htwDob",
  "key4": "515VQyZAeWsTmSUV23mWn2NR62dY295jNnEhwM6PHFKue4suhCLCuU8hQHVW8nLNNgdERbT8XVt2HL4t78Wy4Lft",
  "key5": "3BCWUJJueG1wt8fdQTYREFUDz6ZFoAkvrrT8a5sYGopjRwiNLMtNks4s6YiZRJkFgyjLif7Q2QS6KW84ouvuXwkt",
  "key6": "33J7Gi9kqxd63S9scrFrNwKGqnN5SEUBEMhJKEPr9pLNjreDyrhmoVQhLix1N51eMwqRAdZzHEtgJ14p8XczKBTR",
  "key7": "3wWgW3ySAuNK8gxYTrU4cHPunhxa9zwma6Qr169ShrXN1ufZgDTuqXAV7LQPiEks66YcY5DRtV4qofGLc2XzMAoo",
  "key8": "25n2CbCLxFvf4YESW8nJesSojVKchBNdPp9zN5Ytc7qAP6nw7gUYQ9BzGFd8pFvBEqMsq2wuARs5PYJSdHxVJ8Mx",
  "key9": "5goXbkqg7K6EUciLEyq5r2GHKqX9YvoBrZpi2C3x6px1JuJqJWcaoiM95243eSMFCtpQKNN1gK1b3MQriV6rQrf",
  "key10": "3fK6ZV6yj2AgiqeHgipEoBDADxrTLdU2Hvr7LjfjFLtZN8NHGZPq5TqQ9EPR5e7AgjKCevRkHx6PStinpSYqUkZL",
  "key11": "dyiau1bqaazxmb1nHUoywFwYbDKDbepdh6byPFDuCyhAaCxxzPDzhkfXxbdVjxCtvX4WGtWhBLqrwcdfopx1UHc",
  "key12": "347tSPC5TC2FQ2poGcRs6DqALABQUVWBw17QTGCRzdQ8uJ1BW6zqyaarGhdi6tHsE29aWf59GU7uuL8hLP1DSQvE",
  "key13": "3T2QDpCDk1tXCDJo1CztUBawpRL6MqpJZazRUAZfCDW3oUsktxnh85pwH1JTPZTdnMZ3r8UJ3KwpQjsK6SucAdLv",
  "key14": "4bpYTJiew3M8QxdsGpB9QWfj44P11MRX59tRHVgqUzyaadQiZ6yHtqABEHbY7cZMmPP8bSYnnh15vmTMWudmBXon",
  "key15": "5kqZemSirKbz8Wd6VHuDkPEbTeJB1gp2qqw7zdfBCwF226wGBPhHoCiXfkB1GodGWF1jz1M6VGcV57LYdGmb8sNX",
  "key16": "2xu6WKohTbZUftiiuYULdAny4FowxyQmZfBJxQTh71gbYrnRkzj8Pdf1QJVEZY3udqgvAHYUUAtBQQmJ2jnPiUWt",
  "key17": "3dm7wSTcL98jTa5MyWXRMawz8tBSGkpEttcuCFDdTt1yCsPCW4AZupWfa63NWppEMqVBQzWfDvZg8Fd7Bk8BPhiB",
  "key18": "3MmUz1aanbr1k8hFH2rR52pCawAkwnwKWVyiJcFpBeA8LfqoFbYzEv4tstJbSwqJQhve7BC9KSHMhjTwi3ro4EPL",
  "key19": "5dXJMfM8te18DKgj3cr6wz33K3Q2baNhakrVagoEFxRQvNAjYRWSU1bqANixPGCQKE9iSzYXiai9YjPsxPwj22V",
  "key20": "3e2FXPTBiL7mfDXqMDfgRFyQ5Tyb8rP5oS91zDHqE5fq5VM9EA5JJ6AsBtQLrRWJxGotmJCKMRsR3XgKUZkQrPbQ",
  "key21": "4G71hD1Y8gey1YnvbSNqHwS7uRiop5WZbfFPm6BX6fvghtbMJxojfHDvJKrQp6vWaYUGHRvnsqv9H6vGmMKbYLrt",
  "key22": "5Vo8wpAgBpfSPdKYAKmJcUvz75EdQeg6Xz5mYuXfJpt5Vc12nscVPboo9JEShyHYmnneTnaW42vCpbTtMzMWPPsp",
  "key23": "4Ks71TKiHqbaj7pDu5gpfDAhc8u5edGVF5pA6PKxrbP6THJCmjvzHksHduVQRHMBYQVyZHqPPidjUs8dbPRLSs1q",
  "key24": "zqMtP1wHNgfHDQ5Fc529kCBKNEbyXasyXYoHYjLee1WngiZr2a7CaKV6Q9WLncxcd2C68tvdrHQuysTiLDU3NXT",
  "key25": "5cQ1X2BTDreeEXehEVqfjEy4mTTWWKEVeb3wiZxGe9gLKKS5m454PfPsRcceFKzhmZCf4qQeXmuJaoiUXcPsJ4q9",
  "key26": "2jZi8f4npC1E1QCzkDMrLjcvN6z7d66NN4JCCb158vQrfusrmC2zFBdcmX2wNCD3wMysgj8ZqJfTW1ynsnNGTa6i",
  "key27": "3BrwsQaYKuiygrqLBDsoyj6K4QXRyVXUZTzEtu7cabcmXE1eAgT7gwkUEJfyQ7EMh2aDMrHRAdKCdYrmwmQF5oUn",
  "key28": "3bKUJBsGuYfDq7EUbrwMmRQf5xZoVqZqGWTVuw7VYzbg3iAyRa4kToYNXp1kuaCaz4U8yMwQFqn4n8WBNgT9eAFy",
  "key29": "g4QMviZg1sw3VSMDxx8RR6tovumTVTUKscafeVSfm7BCZhfTVkryEyo6ZnT7d6JUuLLSUFpz2TnZhcfej7VKoWw",
  "key30": "5hvcyD9Yc1rRVShGr5hK6fKQuTqTX7q5BimN9iTKG5kYh47sSdyLQm4S5nE6TMLFGD4TNbcT5Mnaseu3hRXyyda4",
  "key31": "2eSg8FjjDNbhWvQVvb7KJtGitPTKvo5JNsE2EUjMu2B4ukz6rxQdHtMgCygQ98v8Ng9BXKLtnzK3SUxWKL7fkuzi",
  "key32": "4nxHzxAui3waJtayiviXxjZwcMHrf3ayvhyTgGw7hpxdYjmU1t6zp9NyG13SnqQhgpncrcnaq5wUbPKyU63H2z4P",
  "key33": "2LTzyv6Z33KjHXXZr7LPxx5QdeNstvb4TRbVG8Zpw51k33erhdfkW7DeLjRsTT3dK3GhZdm5VEqZcmickk7jqay3",
  "key34": "2fNXD7dDTDCnfK2gMz9ovp1dzjagWsHjdn78sT9mvGvYK3a6u7LPC1cWgjbZrVEwBVktmmWJqRQbpTbAowY8pDgr"
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
