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
    "3xf1uuvGTtMJzC1wnRrcAjvBRwFqxt8QbGgtgLeh1u4G6h9VnoBZWNauBxSErAqiTdBbE5VLVZYk7f6Bb33zAyGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jqUDGtVRX3MzeTYcc3FUS86Uch8x5LVXq9zXgcz6JqKLBtNgRCYXcRjYDKmU8CY2kHsfsoVud1hKZe1rLvHhKZ2",
  "key1": "C9DLRtLgsRuwPxQVq67mMWQBa567pqejdgBySo4QaK81eeFAQRX8v8GyZWx7GTHvqQfUUQ1eG1XrKK4Ev7fEfuH",
  "key2": "faYxz6jbuS4xtA2qXdzWQ4SBNmzrjUTrKdr4xiYUCfdxSoQCPE6yCzhr7msZACKVLrJgARSoXcEEr1WepYHYrAD",
  "key3": "61kvpHoqi4KshbHpjWoEaxFhKWAzsK2eWnCT6hnFiwZxToAy7bNd6J6gekYcs5Zzh4YrMGKM6ozGCKRagqCyw4YT",
  "key4": "5Lbw1DMQLjmcVQsNqbCZW6zQSUuAZo1NFAixdFfEP15SEGHvDReGXnWakdXDs5mUuZHqyzG7Uv13rkoh3NFa5X3u",
  "key5": "2y7Ys8EQv8qSrPBuur92HKWnjTgtkWmSMJ1VnB27QaFUhNzi1Hp1iceTphPegHSH8U38Z5W2PoMjehRgNZsCS7uo",
  "key6": "4QZoE7zmdPc1nFhJpFfeiM4aTLag5yLoFzScerEJMsXUFasxscq2wCAsgR2tddCm5bQA48SKWaVXZERUdjwYP5mS",
  "key7": "5rpRjYkkFD8G4d2Egy5QaLL1QtCsd5GwJwx3vzyMEnhGHDGoD71W6ojD1vgZ9afKabxNkPnw7ZAnfyWP8fGYap7A",
  "key8": "2naknP9wqV9v7h41RLNucU3jGkA8tKLGsVM3rzEpLKKsZrFxNDEjwXhBwGmercDz6xq8tzX2iKYky1WMVU6RQ5C7",
  "key9": "3CGwc2TznL9xzoZw9P3MqeAMHB7hcTCAafwHPyyTD2ZQde7efgh3fVR9UbQBrhJeLWscGfwErcQjToZ2qCdsv96t",
  "key10": "5LatuMQQzCUXBw1PzvDiovu5uswaLUr9V7VoCPhVtU3NvfZQAcJTCy6StRt8XouPXjrpVsSL5wkNi744ynGKEo9U",
  "key11": "5U7qx9GFio2kSJ9dXoHYoyzQqrCdPAimGEbQBUhoeEUF6RGkk2Dmwyp6gPoLR7uSfidYRK8wdvaExsEHUM7dXVk2",
  "key12": "qBYRrqvEiJrdMY7CP52MNhbL6F7gcQzbJ552AgRotLE97mhF9RDdKhDs8eNhSWZcoZLZ2DeaB1RzKhSwLg5kaB8",
  "key13": "4KhBfSt1hvNVxSBgb1rii97DYmHfY84F6aagf8FnAAHdVq4CAgq3JxcwNdizAfkQ5vYEyCgkrWwEUFxGHYCrh1wA",
  "key14": "5J3WiYJeooSRsJ7WYg1aw7ytuupcZebuPDFpA88pcP9HRAAQ2DAe41NptneYhtaZMddGPYKpPT6CnjDoFYxjp5nX",
  "key15": "3kPF2qYT1L8YPEYLxbVJmCeBJurGhj5Sjtc5GLbpf7JRZFBraWz96huuuhR7Hm4A9bCC8YtTU2kUw4qo4ky6vA1E",
  "key16": "3VbvatBHXi6s8CPBHSwUQ2yTSUtet1QLDTdvDMT92rAFFLzxr6jEMaYnkSFfrDeDQujuZ8uGD1BZ973gaZjxsDX",
  "key17": "3smGmoT8ytGLG8rXY1r6LBd3W3oV3ZnWBrfPaGmYcubvEKAW6MxadoX7EMAZbcV5eeiGoRtRwB4NxhTHAXCfrd7Y",
  "key18": "4dtSFwSG5U22apBNPnqpaJEcqmWtgVnv9GUUrzogriMa8ePCagwqs24GBXLTGrxWGG1wFpMbSYw1HzZVHoay8z6H",
  "key19": "2csybfK62p15UQ7b8i5rg5M3SNeWjscwYvMJKsFyf6y5cezvK3XqZDpzyymiTdfA2HQPGv3gXZa66kymy1FM6A4z",
  "key20": "2BDEYdD5eBax14CsioQUCXJSevXB5K74ZShNjRuCL8SBJUUDeCKcPXjrhZPdb5sFG6oA1z44CnXRRteDxyUAV8ot",
  "key21": "3yuTU5h2e7fy1znpSzgyMtzWVfbPAw9x5nCtgi9HnNDfW9tgSvYtfwfRG1853NPDpt9Wu1vvY1MTkdRMnCQ7pnVe",
  "key22": "FqGBsq2zMNomPmTJys1rerEaZrBAmnshZGYybmNZTXHHxP4V8aspAt29kDjCtEncPCyUctJBGNsbtS36z1knFJu",
  "key23": "5sP48GEJNB14ZmhDhUpSZRBs6yAQkGkhVXxhtkDCUdDdd2SfCBmwQsY2JVgkqwVjSMsQmuYCYfPofNDevpvh3uwc",
  "key24": "z5ndWsqWY8MZj6vm9dWDPnbr3p6bDHWzfPS45kbVQvGYZ3TBM715UUa6NPzEExxyxSpPHZuyHESGJneHjL4xwie",
  "key25": "3Kt3h5Unh1giuV5RW1119c49UHoNJbPRboTxewkAHWKZDZ5UFSL3mhp7hgET7hzpBh9BLDoVV7KdZ98XkEvqKaST",
  "key26": "5KRch7xbGKRHif8rVpoFTfG8TWPBjS1FP3odbrM8T4zN3PTZnFzaGcWpTU96rMb2byeDFYXSESP6mo9vG8QwZDqk",
  "key27": "XVvG9dM9PmiinGgxQtVVfiqLFjSdy3sLB56CrABsDkF89Gw5QS7LVrE8z8h1W8xUtfjJtT4vkqjhcsj8DcUpXog",
  "key28": "2ZhSQiXaeRHwwizzxywxynuiriMxVTSmS6Cy2FTE8LPVJaJ7aJuRmfVAZo6azQ4zsEE5zbsMNVxy3eJCSNc7Aj26",
  "key29": "PVX7BVhKi1vdhG3DS8NcysAyx4fzJFgUDt1ZGjAaCiVA4NJTJi5Rd5sE4EGN53zx35sppANUXuNcMazC2KdhC4c",
  "key30": "29dCkXhVdxtLEgQ9TG8eceBaoY4snYH3d9eWKxFVHuQjZa8iMgAwFbwtjjs4pDZUChmcsDpJ68vA4WaKZUx2h1qU",
  "key31": "36NWFkwooWyWFiP1Kzt12raWkZXSe1RUektmytXicFiLhJpKDq5NCbi5WfPaZ8PZQbi6QYr2WJVx737TDk5SXxRi",
  "key32": "p98MWgdAKUbu94YEHLAfu2RyVArMb2FUtjekZVVzV4XmXB4hhzZjqxkcoEPX8A5S9KDsJN4yniEzcoNHq9Xo7iN",
  "key33": "mtpfGfcZmkNBiaJFCf6qWQsHsm8QibWKQ5iV3NDQFtCMj74YgfLqpMhJuFUcF8fismgKU7Ph3p3XLRZgGRi2Jvj",
  "key34": "c4vJaXsMoY637pzfyKRR9zCabteMeSfyMmCv1xEygxskMANWC4J3GAV6FqHEpeJBgiy7puh8AzMxWLxvytc6dP9",
  "key35": "57F5K5gqzye2Hpyt9Sno2j5bWEvoyThaxRSa3scACEFYAmgPXE9Sm1fGkkzKxSywFLgWBxRxt9UfbDPsNvqiX7ZN",
  "key36": "Z7Czj3GRTBVHRrYnsyLDdQYBnRhcdmnkB8cjn8FYyhwPRrWjVJTDramTgtnprH6fz5Fe3YxN659xtvnMZnohhAq",
  "key37": "2vMVmufg2mnbeW3Cm94fCeEjUkfLQq5tKgXLuCEbyy6XmrnXYqYv5noRJCq3aghEcHAgigDsYANsApb3CZs5cTSf",
  "key38": "565LH9mKYvw916Yvnf7JZBJgABB352Kf41TkLvzgFQ1gX1Su9jeEqS1GPyUWh8rMExqVXBrqyZip4mDiF1eLnQzP",
  "key39": "5W1D3cbf7VzUpcDnd9wsPAqvEkMAdDqP52Vin6yf61TLABbWpGHtC8K9mWmYSERiU2zmKJyoaANJ8ukwW6RfBSrR",
  "key40": "3pNjqgK2TmAwCoEnu7YSr9RiKSVuFNbU3NFHGoqturFfMgYqRkbEFyABYgyymgRbVSQVjkAdhLykGnDDwRdwWb9s",
  "key41": "4rMNufwtoyzzufKUNfKosRfFHYvgGpzyRyk5jRXzdcQafsJgi1hxQmSzFCyfbJptTc8p3uwcYRMmToxvVN7bc4Vq",
  "key42": "TK6jtPQnBt2G9NoSwZXg1Xo3CPbKhujrzti4wMqhy6fhQ7aBoLPPraFxCXSnaGQTWmax1svMo3rGLX7oB6CsXw5",
  "key43": "5osE9m9He6fU5hu6jTRkzpBDWLhcpEy7N6Xrhp8o7p5gQrJZExo7ZxJbvEAUVcRH79Bsoxejojfy7Q6KVgoSQWpf"
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
