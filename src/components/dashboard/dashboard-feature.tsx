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
    "RhgEnQKz8W5trfDiAzgsn3usBCePcUphyzqLVbEtdWxWCbziJxA8ZnierGyqVMY9C222iHbPRy5fepR11FHC1Kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jzn4wvWsn8RWBPvFtVdFWUTbkExYqnJAvRiMFzvgVm4GXwqF8QorJAtFkMTtK1wvrPqHR7VZwwaBaZJoZAPJwzM",
  "key1": "2DqEWsUknPJevpHeRvSqpaZBYPKatozPjJTD4FNifQqWDPnXNXLCFk5JYJswbj5qu3vbECfuq151nnmPAh4Neam7",
  "key2": "5xZvrBj35HhYN8L8PkaaMYVDUbQDDjmEHdVx3NYcQC1mQ4DbwU8S1u3NGkMUg6TrE1ZeSyKk5ZRqXpwGr8qkwfnH",
  "key3": "4fA7Xsi2223qF4i7vRReEwEsYDvD35CHZSDZcdhxTLqf5Lx35Lfh51gEjSd5DtNmiFgVkWdy4Uc5bqAABCZZUPCL",
  "key4": "4jTZm4ae8PMkWXAeUEwiVhQbW3M5aukNkHddezwJb4FuNfKUCkG6C8BkHS4n66L15faDD38JcpCV548ymCnHu8ws",
  "key5": "Q6i5WoJV7owny61mh25V3h8g6XpquC9GkavBNiHsV3cH3eTEtkk8kBNQwNFpQj6mB1FyiaVLMfqhLsLVzpUTqP5",
  "key6": "38RrBrqCrz2gc87EyCuCEEirSbroJjEoGmy8ZivX66HQAouMcyQiB7FwkNkS6GXNfSTKA23vGexSAR6BuBe6v1Zf",
  "key7": "67KZfV9cQZEZmLqwnfVrqAfbpQ9QgyqEKLBbXPiXxy1C4rpv5MzN4RXKjtL6bEfGdUNpz4Lu42m3D1H3tkXsjUux",
  "key8": "5Fpqmg4b1ausYH6sXGtHEHJV2tj4795eWiSkuLSmir6dpTwaJ9vmnD2BWGNTr4EtpSKGpyrFDMzLetnTbjgUAMDK",
  "key9": "5LgwKbyt9or8j3Vnyg1t1xnWwXUoxmqhufJHdzdq5nSUZ8NiXP6oQdD7LYzYaxC6S3QPT5wwHNDN5UH6j4Pj6q8s",
  "key10": "SUk1nnK4zpE4hooNHe22SZ4NGEHty8m16j7eGpAnmXLCu29D6HmaX6hiGJbHdrVQgkn1pt6hikbF1TZzgqX9TWd",
  "key11": "4tAo5yLRg452LLmdwMmK3G9Z4Qt2wfdFzpsFGg2MuCWB7bWgMWi147TTNcU4cne1haYwzzaNUi8M6WtAKBKTAonY",
  "key12": "4e7fS6hAuCCqQVg52FUCXg2nXbbLMwekJUxPm9mPR4mbR7WA5e8LhCtAyPwVw1w4mD7BAvAUjY4K7YPdtppX29dU",
  "key13": "YmhUqEHQEtUax5FgWDb747BEchdwfBM72BCLhrep4cLzKjMUvnQZLgZpMjPSGzvw3zB1EovXcniDpEj5SGG7knJ",
  "key14": "4YhP2QFBzkhoMrSV5G4axfWpR3xWabjzsmbajzrJAfMmotTXQ9gNhq13Dk21N1P4v7oW5HgXAc347ka9WzU3H9rP",
  "key15": "4hrUEWy4oZcyecKLaUGc38EL8NfmhqosJuQW8QnsCxbBKgwQhu26HXdDgwG7k9GzB5Jv5dBWsHZxmrCdsu4PeNPg",
  "key16": "4KBuLH1v8BdigtQXBjmWwePPZKCR1nRq7wRn1xpfbjxhY2SjTmRgVxnRTC5DvNM2A16fx71wUMdDcT7muLFptJvB",
  "key17": "3wr52wuEWYQCHQ2aacfuoNQ3x6zJJYdLdq5GLWoSbpodbHi5Kn8qWUvVbZx3RrqtQY8kHW2bvThJJffhp38ejSnY",
  "key18": "378yFbCocEzLC1u5Jz5YJepHbe1YNEwN8H2aw9aG7ivM9H3BvLUwpaXB7WGJyyWYxtxU8QE4t3qtVJCC913cxi6r",
  "key19": "4zAXHxoqM69b7i9Y3VEFDQzjgqUFdthpJCwBtWxC8a6vpPFPDA5AhUAKRYK82BSWo4w9BsWr7mWfQXtqVuxfLJZn",
  "key20": "4snuH4dHtRgZhLNQak2arCJbpuBLY97UpBGiuNYAfcC6CyUwTRcB2sUgf1xLhRicJYMYoy1buqrLvAzSLRLDXSch",
  "key21": "9t4pQSNAha3Qk6tvjoeuMVFAMngZk2p268BKas4jWZdn7vJMMrFPXcsNN2KkaA4PHcFy3oKw54bPfSXioMfUgHw",
  "key22": "4zRwpwGD4SApKdXYR2b9FzEpaXYQCrEgKbqJa8f6u8nmjRH92CT6rzTHVqx9EQwtsAqhbkMgYu1qVLmkbeVJPiMk",
  "key23": "2TcTGNQgFvE9TE3ahshPbvGXVfmUzXDJY26s4Q4zYvuuLKjh6sGtysu16BoNqxdbSwmZ25CeG1659t1pjEPqCa1t",
  "key24": "4hKD7dwdBBeLu1NnGDPEksGnqvsdqNKrt9SfpruLdibhAofnu816w4EiVre85h2t4zWvVqWRYLmFFUL6Qs2EWpW7",
  "key25": "3jwd7pqq2aE8hdzVoJXyC91LZTjYhiC6CNEiWY626kSZADtsQdRxk6LbNuKgZZ8iCsFTMg2ziSLX5ADnQ9tLPjz4",
  "key26": "2phvbUFSeha4QzjJeowAwbG9m98JCfCxpoT5fDi9yPAGv4hSzCyTr7nAHuqRDvokdU1qBCisVVQTZdiX7jS7xS77",
  "key27": "5TapNqRBfpCWLquZvAtNS7MLZGsbAAs114jQBPsyrvzdQWhkRXBpZRnL2gNuqfCwMsEoYu4qNJH69eb7SsTbtStb",
  "key28": "PyUSw5S4tsxWbjAVgrEQxWkuvTgbXRFyUYYzRPnd6zCjCWQP5KAiYYjv7qikUfuxL9KKa5tYcagfiSoTkfjZxHk",
  "key29": "5BNZFh9RzyLpZcE8dsRVQ6C9feXPYraKDpbuWN18nTaKDovCV6eF7WPLQMSyJbFmsLxE27LvNM3qaevL8csHLv72",
  "key30": "3sjJb4aHDtvL6MpFRdXWvghhLmAGYQntbzeABLdvFZhaJnBXCDwrZDp7Fpgq9EdLvzpneVVShVJkKi6pPmRKVcrj",
  "key31": "43QCCGBeqebKnN7tB1ZntLUCohWCe5MjNGKfsQBy8kpeLBSwwLkYXBKfWUCv9wREiiVuGcLrLTx5xWTpcvcUNJ2G",
  "key32": "63dsk8Qi44HqBvCKVNpmPLES7dMvK8oe9M7o5uixacitviVYSGpjaotrRPwBCCY2fK5SgVNvuVmLJsfwnNS2vVzr",
  "key33": "5crtmPuHJukKif4vKTc7dUTjdYdtnjvFW21KuzLZnfczaXVGGVhPxqLkrVokugQhE8UfBYhUkWAeatS7CZ32fMgM",
  "key34": "66SyABywFut5u53iJJYUK6DWQi45mmMzXFxvtDTWNG2hc2e8sAAEFyEfY2NAXQ4k5xVBNPC5TEF6dmdyYjwzMQRh",
  "key35": "5QwXs8XBiHA2oZGREbrRjrBA1vzVe61Z87UkryBitWJNToMaZffGTrJwB7hyAFWBQXKgmNu7w9HdugJZHMZbyM5n",
  "key36": "5tAbm8qwpKkaUTZCZARw5ujwPgGLEtDbUeF9f3kBzr8vUpRDsPPaxa1iXu12iqNqFj7tiZVjxxeeXj2e3uAnGtY2"
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
