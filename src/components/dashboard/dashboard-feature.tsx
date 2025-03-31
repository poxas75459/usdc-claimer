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
    "4TK7DJYkdypevsYvQXrt2H8JdqA7UijKNAE2ePea3jMbjT88tFWEP4q8pSBpVkaxxNC9L7VbnMGo9ZyeWVJQMGFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26eEBKq3w8i9bBm9PxyFHZifGZ7qNXSvLrWuBrijsR6dWjYDyi8LC8yQZ3ENowG7JnByDxwmnYVAQrqNFL8WCHw8",
  "key1": "3X1gTLCRZgcdJ9hiZo3jUNPZLf59husmq4DuvY9P5wc4PV39NzLLG3eRFkxWECmvge8S4kspk3uxkW24iAgwUKMt",
  "key2": "Q5wF1V3VW9wSFWeyC9ocrpX8o8SohZS2AmhWZmLvQecx2Do5Df3kMrL8NnA8CzhE3ySzxfWufuEertcVo5NSTGg",
  "key3": "51KuKMErnGKC2yQPzLcjeM8DmwytBD1u98dNTwGMKJdXz3vhzTMgjP2QijLWaj4PZ4q2UAnN8XVW4mLjkEND6Ehp",
  "key4": "43PhcbNVkBA67kme6AAw26eUmBpMA2zxUCuLqv6YTGPuErEMZvx38uNc4yohPGUR265HP5ZHzA1dfD8XPe9JKDye",
  "key5": "MnFNibYc5ePYjf6345NrY5zLAwKvueWKQWYgacxxVVQYV3N7XoWqzJgkEDqSGJxsJJF9TWuYUqov4iw77Qva9wL",
  "key6": "5svdK7KxnatuNUyyDzcRq1TBMjW2g3Ur18faLFfUQ8Dxr84QxCtb5uV3PVmy2RnfH339NDmx9FmoWb8eNnx8X2Kp",
  "key7": "R1ST1K29876sWrS7UAawR2ktHavrKM7FQ8pZQPbLcRcMvVtbYs2iQKYn87BYGxtVGkhJ4HBQ73TTxFbU2wVjTMo",
  "key8": "vfSCaq9VamzfHHUyebTyCMMPQi8nr7wg7FewSTJv9cNL4e9wLcGTmGMJuwTAATj3qGMo4tH6bqUCfM7YvBYA6gE",
  "key9": "KxDRAukB7GLNfeYLiWBbJBQUNK36ddSKLkrbSrezc7jCC3Lc15qYAXGbkNwtHhuWqYHK9xbdWiyhyBQ79TQhhqD",
  "key10": "4XRxjjo6SL9gQcP5847bfAY7yDbxMvDzc7Xtv5fyqukYXbaVGNESpD3pqwmW1hssxQ71Vw8uMFPpN6eeBtPP1Fqs",
  "key11": "5eybgXpS343bQCAyXZGrwrqFWWrz2D57RTi6A57jfCxzKN3kSZXCSiE7ENdsuQ2PWeqADAfnWuVrCh1M4Bm9PHNv",
  "key12": "5PRvrSQspSP1r4iN8Dqs2ziAxnAvLzvC5ATc7ZUX26n9TdU8CQoui91MkaZ3tQcC73JgekYPVDJaT7RSt2iqPAe5",
  "key13": "5vdvRKvaR9EyKTJRcjKSw12eBPD5EjqoWXmZy1qrHB21kz4eSEtmG727E2gSnqWEKqQRvMBmD9S88A6Hq39WpSTw",
  "key14": "614q4RtxCM8WT6Y3RDqgGECZo4Gm6zu1ttUsjmQhu3mdtECeECdw2vQJwVyrRAEAzn2SVVtqhd5HwDmD9eoGT6dU",
  "key15": "4brVBYaWJAs5o1ugrEhJhLP6i7i8sUpexmjmt85GXntQxDhC6zhnbSxhTNFkf18ooU4htY4K24Ggzz1ABsAXvhJq",
  "key16": "3JK6F8V4iEZXHHWfGoJJqz4Zpbc8t9u6b9qaeAwYgxm5dYyyVKyJyNCas7Bx3GDEpt3Umk24ivTYbXJPEhQLt3kK",
  "key17": "maTeZ7Z4mUSEPtm3CxsmcpZX8pgVYVWAG8HC6MREwtkk17Yj35FJXUZBymwL37UMoDZLDigV6PrZaCyTDrDeF7V",
  "key18": "2cWW6teJJSDGdY7byBvzzUi7tciJkpnJgLmDwNz7X7dNy3pZA6d99AV8MSfNTUhqMcT6svhCFdtjnfywSgpQXyVs",
  "key19": "4J3qPsYGZBvD12gqaNMfjMe2mp1Cy9WQXdoZFCp1RBR5rDe5CXXHpu3dE8nnoy1ixNv9Cw18sV4bYyYu2hCcLz1f",
  "key20": "3LpkVXTvfJLwX6AVXS13eDvhaogSJDZyAfEyaqeauNQww4uACGTGjT5tSSSwjF83AoGWszfGYEjMD5PE6RvQJ9Dw",
  "key21": "2oNq3ymXS9V3ZjKjqjy7uV7ZDNCWxximt9TRhy4yt67nGKm9hkVv1wcCEcfr8Pdt9bQfLwUuVrkjr2MjeYxy8mHp",
  "key22": "3t1CCWYijvMetqjiMYYfHQ5ZqTc5KwGRHfDq3FLbvw6Fq3Z3Do2x8YpmU6cS5gzki6utUV6rQ9UWNegDLsPnPSxN",
  "key23": "24SKzn7yv5VYuDaWd3dBKizGCBHwHocZWBtBp5ynaaXFWJTcL4njxDk8CoWxSC2Z4i2PMMsJocLzCnWQcCkad3TP",
  "key24": "3GFJQTAgLVgyruSefHJg6CS7vRWZojis1SDScB7iaXFVvrPMh6KqzAyfebJyKMbikSX6H2VqUbjqz2jkrVjCANbq",
  "key25": "1gHRSH2AZVrzK182g6pQ5J1buZhY2p7WALS6PzsRBgwrXBg7Yxkqi6GPTtZ4CkQmX4C4v9cpZh62PE8o9rm8Rb7"
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
