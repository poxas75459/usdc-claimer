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
    "opQTyZpgVfvgtqds8aVXKauGiXubLMdKPJbS16QUm6uUQvEwnSRikxR9HSLCiU3RH83hey2tbGJoJynVWdYUxRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GzpvqotNu4Fj11bz2viCDMyskUpXuNHzWn2ZCpbuS8q4YV8mgMQFg9SjnRBJndBdhncefF1egS43RxbWNbck4b3",
  "key1": "65tbJwQ6XMSSfzZSHFnrHotKk2uz4ZcL5iiHbPtTkRjAdJ4A369AwtW8TLtG52rbxkp5YC5B7C3jpcnUZ62GbQcc",
  "key2": "2JmJk3L15DXVFdyuSQPxKRUmC27TSWJyL832rLYX9Xd9hKXx9NVo762kbDdbQcbUGrgxQxuW4jS6RXRjY2Ex5WUP",
  "key3": "512T5h8Da7JLtPQoW1vcE2FHi9ML52AmJX6bojCbWeueSMb1jNf8GtbFVxkuL4VyiNu4mWFUJvqw6cvy5px3kM7k",
  "key4": "4WfvGimANpdJtb9GaDZ6DqqkSemyf2q449ajbwQnad2BCzjGHtGajXoxozeZhnHYUS8v2bqaP88miZVU2HfDEVub",
  "key5": "2YS3Poq4zv4qDJiUKwwdJUBodk7dE3AA3YEiQSTJQ25niqFN8gyQ3QtxbVocPqvSE2v9nzDpsCK2SKzzEsm6Na22",
  "key6": "25Zc8muvH3ZqsFcsRvjQWGZXVwuzv2rVtzNoW4kgoHSuLvppL47zcRHKNHjqQHf2BDnshokohNeyMbBHMYMhiJ2b",
  "key7": "3BQKJsn5HFKvnPCKuEdqPx95HaHDFfNzNMpnKJfWZRh3MHa2dhKJZuLde6Wy7BRXhKZ2Z1NSExcPKvJUXR4tz9NA",
  "key8": "3SFKRqjHaHm3fd4hGuxMzWqyDVqENTYaEYYFVYre5PfqcpiEd7GKXSH5AQHDDa7Wg8YNfSjP1MAQihqQay2X9cEQ",
  "key9": "3Qfcfo7z1cT5bkSYXBohnJxCo1hdNDmnXcxL8mHxvhkitguy1Eg3s6es9zMsMUbJy51tFhirepEHcUNFMGgyB89i",
  "key10": "4FuD7aeBm5Hh8aX14nS5Ln3oh3ELYBfUytdD8YfrrrRS99TD421USeQ6oSpLCLWVSuSaBageDHU3gMi4Bp4AAr9D",
  "key11": "3DGhgzYz7gVMm7mi7iZUTnvJbfBVEuzhEjhBvywd4TQ52cnSYW7RKH1RQmRyJM9zx6xhf6aENU6MqHmkqbPG9D7Y",
  "key12": "38KZguqWg45kqc43zjJRXDsVCxZR7RMwjRUkcjoxfzSJQipg1FMfSDgcpKN2MAv4C25Q7opLdDHLutsGT8wtndMk",
  "key13": "2Ny6nQiVnTx2FKL8jpMBComi4c2ataa9pNZUev2gptFSMrfgMN9MVKYw6NWCxtsad5BGfC6uCeynuBwHGyh4z18p",
  "key14": "x7FMq9sDq2QR1Dnvokz5o89aV4ZKVbPTrYXNXrNfhXzXsVynQrsjNcpuLpgeznnCYwnKFAVV1QkqjmYz8kJgM8q",
  "key15": "56zr1pJrK1y2QhrN9uDEjMyK4F1FfUC2bjxexmpkoLWhjGZuUa1c8BiYv9WGvd3o5f7T75i687sFmnVnuARGK3m9",
  "key16": "5gmrmAC7FL63eEe8HumUg8yxX2XevyXhADSLjARfVSrmuPPdUGNP26sQTqYJgZ4uHh3iL81wMq7UW1EPXoPfFnWW",
  "key17": "6rJLUZkjr19auiCKkBAnpCoMBiUo6xFHySRHMUCZzabm4XHrfMaEgHYmUgMVxkamidFs7xnw75LtscWrxQYft3e",
  "key18": "4Nuve7Q1aXtXnLDFGdTPaNjYxZsLTZ2TjurEK4udMiAjotVmZTpiSwWXT6CEAbvBeSfhKjthMGPDhEHdWr7Bwec4",
  "key19": "4caSQc5SdmQcPZpSLs5TvZJbWtqMdVUUDwiG9ep5xzNh9V5Ntkd8K7SN3JJ6J212UmTjdSCDk33Uv6hBGkSqqT7q",
  "key20": "49TV6xyPSWdtPTkLACPS9oSPBmX1qFhbKhrFdp7JLF4ZVxo81WAk6ctUsFBbpGsWL5KeDaasrzX9CVG7NvscGDey",
  "key21": "jdUcMGfE3mdSdLGMqxVQq6CNM5yopfFRmpM9STBNowkgmLCfh7R5uq9fAaBXKyc5dtpB2bX7hmmLSokdDyQPTBE",
  "key22": "424DUoJC91Fo1tZvZFa6BZNY1uhNfzJEEsNCnrmDfeva674grgz3QifZa9Fsw5byXdksKB4KBBSGy2evq9412DnZ",
  "key23": "36W5kKMQAtWGfvEGJ3wRtTjGA54ojzZfzsNaBgJEJZ5rUYX4GAsTSwgX66gQ4BhciduGsTj3RRxs73SiqDN4zUGK",
  "key24": "5qpxGSNx5G8ZbqECUPQhuU4T16S7KA1kcMxEkM8yJdDqTMUskCmgGrq7WeiqAADp7eHVugCKfHFKwSm1f7sRECuu",
  "key25": "4MhDcU9BQKhMkxxfXFdYp69fRKWGrnAYMubybCqPz9FK2BRRyaxmNPiUepW9LvTZ747BaNSsR8YB59fot59bXWtk",
  "key26": "vnS3p5efauVysF3HTr3yhgiUqh43dUT2qhWCyNvZUz8D5zLxmjhyytmKgFJSqxzRTtxaG4FEifPmFuENzVzpsJs",
  "key27": "22n6kAov2R3Jdv8cb5babSMaXDUzxui8pVPRCDUk6PykpMKmEMVMdrquE6FeMNmUAoS7qesA8op4G7SbjcYKS7Li",
  "key28": "3yxXLd6rj5CGyqZSErJoQpu6k7AHoaTDyr2aQtHY6qgii1nsrLdc3vePMkBEwTtQPbg5f3zYHF8p6WW3yH6k8557",
  "key29": "54NWDSxhwpfmJuvhd9NGzR974QGmjkEsN8J8CjNr1sKnuUDiNQBuRN8vTkw57eYyfAESmJYQ3ZSkGGMsT28ojEg2",
  "key30": "58jKX6GfpZWRAZz5PXThmyZHeeabM2PqUWvDcne4P8ZP19RBbXqpZynhJxiP15SUg8zATehAC7b8yiTwPaQpMsuR",
  "key31": "m1io6v9X8YVAHAAx9zMQLoEBJNKQeZxEPpedqNs6CayGbwY9c9P2VQJR3SrvezcMH9M9FuGaXMzCLUFeUYBTZEu",
  "key32": "5X9xjZBR3M5YYiYonPqFRf7hmSbo62yFwzuogJUWfZcwPwVW3Q6vkbpJyv89RdSMD6eMG111DLAdQeSgidAN6ww3",
  "key33": "3gngtSyiCUvmR15VwraWEDkedEFLCyW2JLKj66w6ebuCQncMcrSELKaEM8dA4PvLHzoNX9uiAkAPrrfRqzrcqyES",
  "key34": "21AFuAMCtadagfiiFpYaFMUJtNmTy4Mr7CeL6c5n7z8JRwkA1WDawpzHhFbL2J3bCAyDkWqo9CB5XB8mPzvdrwrj",
  "key35": "5H5swukXxYBmECZmzU6sFfczsjweira1aJedbMVyDy43M3advEzkrsfWNvHbUrH9GnVmrDZM8SVt3vNZWJufrogP",
  "key36": "5ETerw6dMa3QX7fcL53yTSo4SKnHZSYSgyktx7TPpamaPax3F5he2khQBMSCfL8QmQgE5eCfZx3ASj91T665qcch",
  "key37": "5W2Z4PtYkSzkUi5gkqns7FUQ1fuEqmY8n4RZmmfaYBjW7YEWwomuoTLMk8LSc1wt8ZgcBBfcKmXkkbS4J4mT6hhV",
  "key38": "sNottmEm8iFvo7KqHWVTamtcWba518qr9dThbo3ZbkbgDjf8qG2d1RLw8sPp1qPz59ZnCfTFoBEZihc6TgtxJUG",
  "key39": "651Y1JbcmBf7VXb2GrJFT2rWJaF6Vdsb9w1WuRc9EzpdR8KjaWiEmUVnauUoJQtgaugCGgoPM6atatgz5JoAFZ4i",
  "key40": "2CCJ19oiGtkFLpVtuAKdk3aManJ2Fc7MDt2ABZ9CvkZawMYAWns68f2CNagRVmaRwijoMPkf4CJeW8Bn2RxqkcLD"
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
