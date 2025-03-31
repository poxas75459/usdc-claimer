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
    "XK8yUqJoBb6uFQBZsGekyR2qjN92BCih5wyniMk9LvJujkAXF4GxTjgihQK1MzV2cuSMdUcTnjceh9XHEHtHAAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qgpAeLZSpwQZDypMUZ2ymmDsMfceMAm1ARdVPKw7V5uQ1DTTNzpmQUewBU9nKcjaghiGRwBCe1A9HCMRFTdjVbk",
  "key1": "5i6LNYKLPbLEoMZgGp6xi8o3XuzXZs6hZPb5WVQcyaqMyvvAXds1A1ahYjxKwZKDbnwrciXk24fK93egK93rh9zc",
  "key2": "53WPKRdEYMzZJxLygZVW64ZmSagdxBnar2UVXBDN57g77BiAPQmqFkmNq5sPWEXGys9QzKbsW76tSzMBUiKDpFoR",
  "key3": "5iZdfQYAdTaEpPPRHoFZs3zLpj5KAnqfMSMZ5TSfwhDRStZaEDQcenRk3RnmwzcxazQ1fFYXGNYnhv1uBFRPQXUH",
  "key4": "2fnFP8qYpJvM2z9WVPf4bpsHsdN9Tq3hbjaG3SBLV7HBXfUYLk7y8dWRm4CT77L7DVLyrvVKXxdXiCbj25CRM3eH",
  "key5": "3V1zJ29NBV13L1wsLegpyfc1FihHsRLnoqvTJa7Ctj7nsxdEGV1Y1Kbg7SiymupX65oEhLjfK1WTFS3vtTmRu5QU",
  "key6": "zA976HhzS91fupp7gv4y6DiQhh1pdPbQ2FuRmsvgTVKFYxmRocDF4D564BMrsY35s4jrefvo3WZNfMpZCdkzfa4",
  "key7": "3hRV1VYTbnf68FqZ53WhuvgZEUqyQbewdmhEtvpUsnxhHqENT2H9k7KRGpX6gcsqxfSDq53SthTfPbn4is7B8Vva",
  "key8": "4fEabk3jgPkefSCe5DngCmM3BsmzrvjmKdmvw81ksVziVgugK6J9c3P5Av1iRDqfSJxPCZxtRT67NCMHRDYvrRPU",
  "key9": "NUHvYM8VJqLD58Rcq9iBfqZPpLGYyrnGYjhqcchyUZrDCoTuvKoheMvRYtZFW5jZaR5oXJELcaeK29wuRFvQezg",
  "key10": "3EaLtoceMjgdkbwFhrb1L5aECuJ6VeTv7aMMtB8RwQ35uVriSvfmmi1gEExTqdeshni93dXtAuvwZLd1ThFmoLY4",
  "key11": "5Ecsy1A4eo4iYWsvfrMdVxDWJQpikLDaXkKyUgzpErY7JbHJxriGGGiJ5FDXVNhHbTKgVnnxhfcwAfkwvzQZvKEi",
  "key12": "4XSW5zrmLrEJWb8FLj1S8inam3hYjhrtdEZmKjbdxsTq6k7V9Svcdqj7swLXKKzwf4tNb4AUr9o2ovHvaiYZeadV",
  "key13": "35LvK4tzuQzXgfq6qzpaRsVB5B4tEjYo2GABkDWxC3X9VGag4rbG8BrY3FCfxmFsvRrnk8SG8dVW4NZoGz7FmDZW",
  "key14": "3LintaLuYak1Pi9NQUffMnQBNk7692uzdRTx7meP7TuNgtV4GP6q6n5yCziv52tEJauNd9H7HKi4dGtJ7UeJFLfE",
  "key15": "3ym7Voi91QXyu8Vg3qXBkLW2ubhjZWwkwobdJLj6TfVdfABiPfebWfHmDgWy2tvR8LSz883o4Wduch3fSxw6kUxh",
  "key16": "2WwuecFhzDSzNrY5Q4YiGagjTWF6NfS26xZLJiV4qiWuJktJMNdcozeXTxyhX7aGbmYufSQhAePySFKNZd1c4ibw",
  "key17": "kPv5kWJF9GcbusDzDMvXQp1RenNGLTrDB7x1N7ztRXkYUX1BKhUketLfrPK4i3CMdtf3M8Q7r5YtC52vPmUsiSH",
  "key18": "zRJTh7BhuCt8Ttv7A7bd5xhLHoQKS7sX5VvktUjVukxkAfNWx3p4HC4EZb5ZKfDXNz5d3W74jQRzZPWbnaX4HVL",
  "key19": "5uzQAYxDJr5oLi2jrhfhLr1KP6FNwMvryHdBfF7qGyp3b7h9XQNo9bUuEp3RciSsos8ED4Q2rQTvBfHQ4xNoZdyJ",
  "key20": "6c3dSv42UJTYSbAEFJtXVYxw3B5T66znsugP41YKzdgWk6Z31NhGsEpvYYAWGFiJMEUFN4BycD1WHmGr4eApMGG",
  "key21": "33JLUrKMMnJbgNHNLUm5GBAVMtY9FY7292Mb2bYzc7RQqSBn2aRXHocYK6nLHgRY4AP3STSiVFrgFKVU82vgrmw8",
  "key22": "2vAoFya6XDJn8PAMasdNcSaKA5tvHfvLNePNuCGcJPNtbJ7DAyPhqsiiJd6pMJoTRSVHSRMN1agW9Nhuco3gyU9f",
  "key23": "5739mcuA7FjpwxxtLJRF6pj7Th6pitWqrw9q9wQdQa6EoKVKcee9Mt8ezjmjqeU7MyFyb4cFwAsrR73gvuDb6YWo",
  "key24": "4yLYAmFfBAjdxzBwQuW4UiW4ruVc17NhnMp6AHnQmG4EvYhnqRsnHqdTUFU6netaq2chUTUEdQvVKRv8TT8MesBd",
  "key25": "2ih5z7LxDJMjJ7WH4ramrRcj1Z2HAwFqkDTdiGHpadJZsxBiKd23J82DCNYjnWuquP8PCVnLiVp8midxpc1fXTaS",
  "key26": "3XyzfRwxiScAxVRyXfaQN6buwDPGGbcJ2iM51STxRGdEG4VSzPJWxhEev7kFjDM75VkcZPA3MHugirvdZ8LxDZRH",
  "key27": "33zedhcvR2m23rRyc39dMUuk6cHG7kAv7MNFRuzrwj3oMQHRfhehN8X25sZTNyPd9znmoZRvAoZLo6XAcvYsPTgb"
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
