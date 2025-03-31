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
    "4AMdeA9BRXNjgpxTwc16D9GbAqCoquAwtxsk2c64JeCPZkuDG5nBen2RJ3MVfLM8QhesVuLudxMjfahPHYW1QiHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mk4NWPFrhqTBA2MUYWvXnKYtZ6FX82ftqwtAAoWGMGFCSWhetyMZXd9RWhHt7S9RRG9jXNRcZmST3kAMpWzsE5T",
  "key1": "5Pjoeunrzmeh2HHmz4CAU5B2SnyfHNkgicbJNczM4jjJ6A6oWZ26KKrZwaaTKfZhWRiguGr3EdbgygRXSmDam25i",
  "key2": "3Mtu8eCdC8Wj2UvdNfjqeQNzqfqMzavNMUNNxYiZJGn1qpxrmLhaCNzvdymKgQhQvHQV4jGsLawTKF4vH9Na3prF",
  "key3": "66h5eiL6HopqqM6pDh2r1x9CS8kwW7R9QKQrbg1kvadosdVozUM6yTe8Ji8h1vRGGYajHARfQ8BUMfA1KWfgm8Z2",
  "key4": "3ThTW4XwEfgDQaJc8rLHRwzGQSzKYroZW61Rwr56G9kHFAZ6pDz4qoRr9Wr1i8co6hxJpE6REi8yyAky9myZEvcH",
  "key5": "2LJpjmXerovBZCkU5wDdp6Y6sBMoDBP4f2xNoi5prKqdjvFPawutFDH1sfoqpptFtnnZGaeViLBNuenERKAAKAjn",
  "key6": "5DpyaMKv7a3wyArmtBKGJpoKBVjkmErX4FZyaabGbzEdiW2Mq3TQ78n5EaySXKV1vWje8xkjzVAdVS4HwazcnS72",
  "key7": "4WtydNoZvmcCtBe98NZkonHDsHFBhTRwoWDdoYMS6SVSsbScbYkfnRBGUX7dRHje8mzEPS4m5bhjjebVc9xU7Gqz",
  "key8": "21kQB9tU8PaUAdiiqR5u8paRvmcncPMeacWjeg68g6AU6jPCn8Kh98A38xgbwhGt8a3hQtCLxCTerqXoN9zPCPaq",
  "key9": "5Z5DjExZjPusu7sTZp3T8MWfkXPgtkTEKSJcn23GqEwH6sdn1YusNRh3r2UFtcfRM5pcWZno9ZqGemhojHc7XrMv",
  "key10": "268zkxEDiydw2xSSvfjnT2D74XhKApUDsGMzLorUXMuKaXnAWmCFfT8yGHWyZkvaQbZKXjN1QcGvSyVzRnLjFSyi",
  "key11": "4p3Shoq32G5z5HTwcxSjNWxxQtJ6G8kNGHFD47PUsthWpdKEnHGpyhbh4SKj6o6B9fxn7MShtDTdqspBjsYr5X1e",
  "key12": "sfY1hUZi9ioJPbUV6z6J6hWb6vmhagWXrUCfZBpGnW7Pud7fQyAKtNAx9p764JuQWdiHG2yLSLkJ1wb73qPxXFw",
  "key13": "4oCYe9LcViPjwoY9JP3QxojvNPaoNWaaG1pXb1gjQvgmqcAWjLes92i42HsvPc8chCmGmSuG1WNYt2JpS78GVmEU",
  "key14": "47nMdiqcGkXKyaJgb2rHpjCpCzSCjznT79HbBVLVHu1QuE3dF87Z5QKLFsWRVN1JZ4hKq4pZWoKat6q7vGS4yNMH",
  "key15": "49wWWHvqPSq5KmguKQjSqpiFDaBicZEhjHyDJVQZz92dibmTcMZ1RdXy53XjKcNi5WLvtsUaLZqek9DP1Wvj5wmt",
  "key16": "27yMw9BB4oMqHrGWh9i4VY4A728mA2wYmECosSJusRXqfSjtkY8Q5aEkmK7CD9oufQdrfnXQ7NydNP41kqw3pZeD",
  "key17": "3WXLpaN9S71DDDgNc96czzHuDwkKmJmnxf4Lmg71WBbGPikEm5SjGDTdqdcoTDhcJvXyxnz9zProM3dE5JDKxMUL",
  "key18": "4EyLUAu8Vfj3aHHu8pCXvPQhJ5ervfJPGmXcG9MjgnhTdctb2ArMCCxrkMTAJkNjXkM6y4y4exMaBaN5Zi2ZZQ3f",
  "key19": "4EWgSZxZD1CqTguMueviP9idEo7L2F2qPPcKL44wMiMpWQe6Vo2dCbPaZAYqPe7g9qDMrj1EZ9Ny5ukj2SiP1nfm",
  "key20": "21GJo8xQZioAwzFNsH6oi9aGohBfUaYqy9zts9oBDZetkVuqgH87bcNam5XcrjPQeoL9Q7wXhnhXotYdHcDKrhcj",
  "key21": "46apdgdggT8HRHnWh38pqc4aXxgQdMMpvGuLKpErdR3LheTgwP1UrYqQhRvLHNN27gnk7cxPrV15GoQ4JtxqAp1G",
  "key22": "28JTfeQZugx8zXCjQs2aKddu5Hu9mEEBGvvUQ83VFZpCnjjExAw3Fxzw2eiPk7UanRmuVi3SneQfrvMrtBW8aXQj",
  "key23": "viJ9DPgDNcW9LuyyEbw3CVBDtcpLUS1rwTwXRKKuLqUab62acLcNvdvxyuGgWfyGtaKBPso5vWDhe1A9m5JV6Db",
  "key24": "2md6RYvGDQ9sPDy2UJvzQMQDU9URRcGTivjDnxbTihPDFdhwpxwYg48dMqtLMd5nF9G5EFPz39bXYT72zgDQziKU"
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
