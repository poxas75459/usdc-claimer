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
    "JNTPX98QhbrSgXXzDp1ACt4jHx2KTQprftPQ37nHPGHgM1Rv1MpMWdYR3fW8qoe443gWMVwU8JxFaknbUTFAPE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48JkKjtJAZkbV6KpZ1S1MCg2kYxK5BTxhwCYGtQQuTzVJ6THdMzinw1pzAfPZaLsrbYsNy6kxTfB8f1T1oFzGFxS",
  "key1": "WsjAMfdrnu3iGM9RKPNKWcgn57FHWMAkrXvX54EmgKTTwrF9FtrS9FGZ3pgfhipHKei7Bfgedu8V369nUxPK6yK",
  "key2": "2vc3TykU7qMARFgq6y3H5KHSiNGpqFAezCjdyV8f1JfseTochpEoYGteJ1MwzTfCxgtaXnUkbXMTHkU7moUnDQD9",
  "key3": "LWJwdhpJadTHNEdvGX9f1VffxHG2UdqgoSi85Qm6fzWFG2jmyEt11rCSNWUKH4wQPLb8R1yCHpTvZnL7AUW9Vsd",
  "key4": "L6MMN9CPpKwkujESzx5GsAkEmTrCmKemTDem4gDDuY4MHQnJNDHVTEHgK5RYZ2jEF1TgecYhX7roqAQw9yfJRyX",
  "key5": "moxC3j4CAf5g3561s3NkaW6m4qV17q57gs6uTddQ5vSs2W8zFKrpfW7gAeeo6hF12vEocBKDV3MYgYxmgvDs5mY",
  "key6": "3SxsAPcrbuxSAD84eUCJoCh74cjVbbahfeE7pmAizvnGrSjAa1f2mDuochgsHrH2aB83UzACmu7TbPZc31EQCnYd",
  "key7": "3jNqgdyMp4yrbukbgSTpr7Y9cMb8VvhzuU5ufA98y52GhkFcFLMdmq2FYUWdEXrixQyA1Yp2znis7PZ2iG1ePk2z",
  "key8": "64Fr2dnJnnD1ZqAE7w5Z9Giey25g8GkX2PMCKL8oY5s9YUkhauteMLK1PJTadNWANrgxFNhyoD9P7LSekCRaxYSc",
  "key9": "GeHcQ3JBkoBPrLQbpGWc5nuELEsfzULFPnruAWH58LudM8vewPoqk5yxu3U5MfWPN9G5aaJALPEVN4vqeQ5Dst9",
  "key10": "39UWPU7TQW3UEU6LFuLN1wB76oUGae1dMh8wu111TFuhpkaxFWWHKudYG1QeiK153etdyRG9HYbKduRHfhay2NVR",
  "key11": "RKMLmYM6hTG2985CtjUaTUL7kqu7zekBLLAoTfKHBxmFGpkjdXQe6Lg8MT9Udh3QnBRbTM7G3zgXerGgeHjnZLQ",
  "key12": "2bcNh5FUjruRHZFvQXWoDDZCjJAv3YEbYrTqsjAhQBpzhs3SHr5XWzesEEv3SnpRf3tTdAvsqiC8NkAVwnhp4pk6",
  "key13": "38YSDBtzCR5nPafzktezQ1uP5rgBarAKWp8gN9HFF8ssMeLxtw3vyEEFR8DDU6WBz2Gnv9oKbNvx3w91uayjWcTM",
  "key14": "aXU7H3dGgmWp2iRz94BN5xgDwFaheYzx7yusgZuBJ8mirGVw7MzcqmN3GQWQjBa9q5wmHCKWt32DX8jdn88PXFX",
  "key15": "gyXvJvCPqdaBDjsvsenHhxjERG9KiLnCADsxRhAs4idCqrhAKGF8mThXzvuTbD98PnWjaWfRgZt5xniXkA8cfZ1",
  "key16": "2wbYNt6g2ZVnGwkA9tMe4o1FGYMTeGJPGNNq1DsNkd2fuLCpPN3iD6CWTiM7YLK9T1xs6km9VmZFaoaVghEy8FnH",
  "key17": "7zYwsNDr5tbaL3jWTsVyebqQcfH56gGc6GJBf3H1hWRTYMC3s7irD69LQZuPt1DGmvjQDEc37ivYsLJhyLFBn7e",
  "key18": "25LA3nDHAPd9QjtKSQF8sfUP8RvAuHc4AuwAeGghPKjsTtin57VoFVfaj1pkqbtKTQ874KUPW3KzLaYBPMKH5o8w",
  "key19": "5rnsh1a8PgBiQPbxwz8cyGxmL3A8JoAGsse7i2ZgXembJ9dSdQ7giVMJ2BzAzfqzRfPXfWDaPr7zhQa8xDNJbxiV",
  "key20": "BwL6i25svexRL4zghhhLqgtB1eAbj643vLga9zgpKbPNuxb7rMQvX8vy3FYxSgtrxxbRigE4CDxXAFVtoWGng5Y",
  "key21": "23WqvoA9VVwRGGyyJvrmkxt7y1FnaDcVKnvR6UE12uYQTuJiXBz2UJVhDuSnCsBodzvF9AWHKtK2tqdhYbEbHRxd",
  "key22": "2hzqSsyPmb9xRn7tZ1RXQpfrRAw2axmrL3UedNNazhuqA1AVicP2wMAJrMPFDA1dYyf7h4WAXCcVCW3djdVBMCp8",
  "key23": "4DcAkWGD3zP1FfwiUiaXYubyQRQ8kKSPVt9r1hJWzxQSGauU8hxpP5whBhfXXKcZi2Xb7rPjQsFPgzcXWEFREo8M",
  "key24": "35CZ4EpD4B4cggwdrNUNEnTmYwXhedKePLiPjgcu6DaJLpAzVZHbq1e698ypxaEne5F91CuhQSNJ1MNGVDuobiKJ",
  "key25": "oKrQtTjvwMWLZ5FXv21GBmZz8A5iKV5ymP7qj7KiY3zm2jdSuiGdCBmecGWZ9jLKpzsBBpwxAtibDCzCTHdpDuv",
  "key26": "2AXqCUKyZuvzcuRHddnB4dCMFrKfDhmBYgKn5r8xQutgZVqPGzd9pTTVJy5VNSc2oujiuTcPKjgH1RXPFi9tdpuw",
  "key27": "2KHTBsyvo4PknsNqiRSxLd8pS7nLy5HLgdqBsjUAiVj18RVpN4iF4GDvazM2Lp4NCTM5agNENCpeQicYztu2hhG8",
  "key28": "yUHmnXgwotHmDXUxjoMdRvdk834XBCP9YX2Z5zAvCNLMVW4q3aj5nZB1E7Gvt9ZHneQuriQ4fvsenN6HKiws15J",
  "key29": "5QdYo3JmHw9M9gkKwmTN7mZ2eoBiESAoD5CccDD5KieVfjtZL99xxxWoMoQkR776jHWaDKPk9zVBziiaDqnvTJ6D",
  "key30": "5qj3DGqkqNqHAgQdD6XgA8ziZANc8P5qvf2e9NiukHGhydBX8GqmzWiJ4275tRfmridhRefzFK8x92fPUCKWvbSV",
  "key31": "63pSrHZWc6ngfxAn9zsw2gyjRzWMsk2T89rBVZXg437h17tGPt5CP54giaPtfs3amYVcjAdutAXihRYXt4PtfBup",
  "key32": "45jVdv1pjeZFLXLehKS87E9C5YogxgY1yxfw48qz9s419ymejXLxLMMwAdiwb9UAwH5JNJEWH6DcUKveyYvkeW78",
  "key33": "5xgm7yCZex1Fe8XMgtmUyPtWWQHpWRUeCLfDDrzGeZmw17qMh4ZSPGh55tPDJHzQJxG8TA1ytJHwY2FNPkoutA95"
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
