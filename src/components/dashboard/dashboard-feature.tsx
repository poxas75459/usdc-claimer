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
    "4Caxehqcn3t2Hq2NwRwZrkG1B1hD2HNF93SNZx9dCBDyFqUXGhMcWwvWdzqfxLhRwoNXXtKJD8tnGYmWgwYfHi8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MTo9EQQqPCoLAqSEdVxggDeLrKNfGgj1FBfJpYKAhMNtYAjN1xtJLQndnHq14s5zkGCCCbtoTtgybctKneDjWwm",
  "key1": "LNXJPjpHxKo5sgot3sVD5tV2HTLTQUy2gxx9D19yfG6vFmodNdNo8JwyLYx4bfJDtsZGWgYmdvuAL9jCAZdKon7",
  "key2": "3a4m5Zch6TeoNXq8JZesbXTFGmuUpx1H8aE4pqRQiwfE5TDkLuRmDC9ABE3oi5wn9R2sH9ufKpVXVKYuPMKrDFYd",
  "key3": "4Sf9VBahay1u36kCvuLJWAFa3hWN1CAbigLJa6685kYHYvqj8dSJ2Tc6kT6PTab2ByZyhwwiMUqavdjdgSYqdjWo",
  "key4": "59hpuPNox4wuoqFfZ3664jJY2cmw4639M2dmN8vaQoZygJwF93xptVx8i8hsuoDByRLxz42bS4yKxwQfQVxzcMoh",
  "key5": "2gVEHEWBksHXAxwJ7PTLL7fR7hcsL881MkAVjtbRpRFarAMPuXKEJ1k3AX9KsuEzH1Gp4Puwgf3S2Ni5PnAovuxw",
  "key6": "4uhNwgrReJRrzwJQQLgeTaR1ki26ouHswwDMYTWi8KJnanoiUBh9737phgHke5uq6ikUEUnu6gy3JPc5NWCD3So4",
  "key7": "3c3XNRRhsMsDq4tfJdEZzTyantAWnvkWa7w7XJSJjw2BMocrACXLNrkQBQE8VugGEvZSDciXA94KYCZ7eZYaMazX",
  "key8": "2kDMqhjeN3p5eMSAtvG4Lgx9LJBS2iMD4N8wufLafmAZAsPuQJKZmTDomGrvhwigHZVWyzJ59LcNEqAzuusGGDa4",
  "key9": "2jjYzqvrDtXpSKLQDFf93ZJeNHgRXdpovYVUFJeJWpHiNanYk8vRJhw18XcHUiCs6eMXcSKBrarZtdZig8SAey9x",
  "key10": "5wgbuojW3M8ncEPar3ff5VmFrdGMkuMNyP8pMVnNZzhT9wVWoRg6MY2Sk8Sc4RxgmSEpDxdP5aqoiJC71tDimUuG",
  "key11": "2WdCBAeY2x1vTQBPC44GoUPjw9RNMgsvAzFtrouvnUFk3gF4v6MRQzYnxKVgu12PgW9og9ow5Re1F6iruNDG51y4",
  "key12": "dK9rvY4rCM1uHw2MXsBW5SY8e8mW7zV3MHqLHqKbRNKF6h2zHrk3pxuzJc6hdePXSQQw5waVaKvjVafNp4xAxnX",
  "key13": "4PezfL8qPSys1VbDLPGZgkeWJdV7r2KAGsybyjdGHBdyNe16x3rHWLTfe4xWLyrLzoDmdEJZiQve8KPCypruGpLv",
  "key14": "2eb3rypNcwZ5rLL7J8xpDgmiLuo2tc4g3WpJw9yecsWVUbGqGmSt78fftNi61VUQjbzAw2qTmmpVCug91f7oB6uL",
  "key15": "248nXnKnmBC84caQdsKNxPGJjoJWFeWnsfymBYMK7niKZczJakVkK77z97exKAC1VdtXq1irQQk5WFxjFbzs4cgJ",
  "key16": "27UQwhtAcmZvsijYADYk3kSea9pkKnjirmZMUu3YTGfsXDw1RdcGWAHAg9W8too1CKKp4sLTTSwQQW4dQNvU89RQ",
  "key17": "2ajHu41jy96hFGtaescCXmNBQH7DrshbVN7DmZbtKcg8La3VnN5ZSNL2cj1WXBFX8s83MMMj7jrR4nykAPL3EwN3",
  "key18": "2TydukfLg7hfw6TUCDwCD75yiXwBx38r8FHDzbmMyxJiGHHhfE47BVhDwKoEcjKossMSqfwG95Zamx9VXLVAfRz8",
  "key19": "fvAux6bRxiMtDfYGg9ECVb5YLgPQQe31DDYVDoY7Hf7D8xcb5Mi7b2AFKijByfrG1rrVwURj3fGAdbwcnUwPoeh",
  "key20": "cGqBwbXmx4Lrf3coKCKKNFB1SrseKLChRBQDSF8a2BQU5t3hrgexh9UpHuCJaVd2JXhdAisiR589oyxb799KC1m",
  "key21": "3HQoKqCkbwSsDiCdZgRa6Qvxiuay4Qsd7CvZ1RrqQex4S5QdJz9U4AzM2yKrpBaMN8rppDgJNdVAkbfRFdNiia62",
  "key22": "3UGD3cn8qqWgyWqG9vXw8Tj1M1Ja9Pqa4oXfWTTRTnYi3e8m3hpvVzvLYaP1ggBs7k1WPx2GuLe1sZN77FsnwjPy",
  "key23": "38Z9azgsXf3X2x9y7omBHtWgUMdXiQ6hXFD9VATWhDj6kkjCiMTxmw3dNEybaSsBYbFCewy9e4yPaXYngNwW4hKA",
  "key24": "3vVtoEUWtMbYYpw5jmskw7QemNtwnQRDGzhTLy8WJv3N9yUL4esMLDKoxYa7icZ2U7qDcpMFHK1RiG8fDfJ2BQmt"
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
