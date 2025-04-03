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
    "51m12vBuYXUttgSKwqDf3HgqNvezscYxSd6dQHB5yemE1AdMjgGWaQuwhq5J2K4o2annfpdcJ3BazNpzcp1bN7x5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5322cwYwfebFbbLrJ86BJA2gDDmoaZKCsAXq8V4qX59tq1s6mV7pkyEyiE9p7f7J43vTSEDbXcdaHjXgBs5UL",
  "key1": "4ShFqZvvYS1DAHotNEsLyJva3mP2K5Nt98mhTdTUQ5hcHEehn82WmL15eoUd9AyAhamsV5ypw77P3QykvuviCPZQ",
  "key2": "UpBFmaC5dU3fQ8i83r5ykHW1s17hUmccAZNWYQRjwtA2AB5krWjH21R5zdN6eYvZZ8WzSmS67D56VDQKTQZqqQ8",
  "key3": "wpzyd3VTRUFUQNS1ZkgZizWDCzL42T9gBndsgfesbisGRJWGNDvfdAwejJEH3TQk2N8AcUdap7NiSvUo45DfxqH",
  "key4": "61EjvtNb9mvRLkCvZLYdnBxf6npRnshYp9FUsuCfD3GhpqvrZSUrLHkbN31R8U6634F19TfHoPmMEz62ADN19iAj",
  "key5": "2CuhkRs1fCufS8FFLh6q9qf5gjjLbtercqCNwNiXBm7a2oeZAWa8bkqCyeCxoGAmWhFkBTUjyEn36VoyM5ZLhJo2",
  "key6": "5t52JhPJCjruX5s41ZLZSfKZSrSLYsRm886bBkH9Xaxcxp2zaCgZgb4gvYHZUiz8zosDLvor8EBURdrf8ySsztfs",
  "key7": "5X4ZJaUjm86hi1zQKTS2vB6eqhiYeRp1SYgcTuvxBR1A6Lnz2ZtYdKNVoSSEyeiSVehFmpTEGE3R5hHnGW2XRKbv",
  "key8": "5KZt8NRFCtdFSGAWEKoPKkZZ2m9KuwjMPqqnvVnj2taib6kHzqekFdEx7mMKXUPv44BAX41m8nbU6v8Wz3Eq33CY",
  "key9": "3TvUmgXi89Jddav4VD43XV7gLYT9AeUQyQrRqrSj2dF8VhbFG57E5pTWyzq6iKdvpd4AR58h1XhLBsTLpA1HW3SE",
  "key10": "2k7AwAAupQGxKhVntmVsm6Cs54xqJhHbE9vSwnrLAhgsnekk8EfVff39JScxswMSoyA4M2M2B49kgrZ7GFZmd6pf",
  "key11": "TdGGi54Pm3vLBe91x494TkftUhKWFv7GNL3SxgwqBirpT2sm5HExUZFGRWEstkCDZoyZFxrouwiojwH6wb1qfrh",
  "key12": "3Yp7Ade2kDWdMt2XWdxEzgQ5waGtsHM2Mgiw6Y7XEjdz6tTV7qivSvTuQLHTZ2einsvbHnnYSjxpxkFimy6fs1r8",
  "key13": "5ZAMmtT95Y7gSnWmDuhSghqz7PZkSoLyEy1FaDz6wjHCzVqojUyMJrvY2ANn1Ffj8s9VkCkDQ9Zx7v7gtexzEZUG",
  "key14": "4WbR7YGhiXWBcmt8aJANf3UfaWUGyhyKVLVXu3CzpUAgCTbjtRv6NGEevWSdqRFcmVpUoogHf1ZDjZ3KHByqUAiU",
  "key15": "3Sn2U67SoPjTXxcZDY3myWBsSLgAVsFH2Tm1WVHgHGGskKjadDdWHG3wb1QdM2ytYMdvtBYdRnHM3dX8oRWoLtXV",
  "key16": "3AEqW6MayGsB5BuK1oeVBxzkur6osXTPeCAnt7vCZyhfAgx25EqU9A3rXLqEUrQnTLK7gPpdjn3Rw8xGTKYbLCAQ",
  "key17": "XAKErQ2gSuYbSAekiESgk9ocU5F1hkuB6DFZNWJv47Cqjw1LkjfDbKrcUbegMZURSu8TM7SKqi8Ru8FcK5zqVq5",
  "key18": "5A8iPNeDmzTMFdNVzhUq1UCqajPUr1EVAc3tMb5E5bK17eaFciUVQofmjTxQLNZ2xVSdFQVtbbD1HNLpBWgfkLNB",
  "key19": "4vqufqNtm8Lz7tMtB4eDneGaHC2VBdqy2snePeJ6Bjcps7eUHgk73VsCRgnW4fq8Fjsy5Ya8JMv5Vqp9DaiCdGCR",
  "key20": "5dEnK7ziNkAe9DQhuUsCeuKYWPjxqHPgeGsFzPTjDUEgo584x28b2vziE85QVZBnELf2KLEFnEpuJnqaNCifuPXi",
  "key21": "xAf9GCiqEeNWbSTnJWzsqgjhqayuGrxvzQ4pFeC13hzjztJWM4PAKB7svoE5jDniZMhvhqMuRpxxdiNmEhfRxbo",
  "key22": "4tyqkzga2AaoQMJ9ebCx5tEMKirHTAXREUSB89eySvYED1cCVcySBf26rpbytjE3Qekf6MzG55zZQwahfcw3DcdP",
  "key23": "679zKwqwzJMr3QK39UefbCSoqGuG8CYifaBw7E5MUbUyo1F1speYkskYs2QoNWKXNuagAg9vaNExnpXwKCsWRG3G",
  "key24": "dCcyhHwk9SmJm5K8QmPqFASm8SqGowCb2CzDY5BkLZiYvg13S2XuURGJ3ZGUx2sMuKDgifCy6sbB5Z6hWV11Fai",
  "key25": "3GPfrHnibcPhYg9rKiD5B5CgDUVVEWjRXJpnuHNVdWqPYWuv9eWMJAZwTF8CuiVh7iBrCzQDUuCEsezum8H4mhxB"
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
