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
    "4HZYr4kZHxcxh6VkCBoho4vwJVF6LpBN6uotgvj1HLpXL31fPV8hbN1xBPZUUWhoqyiFKuL45u42gDowoaBabztS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TteXUpT56d3gGpWtPy8AoP9gQayZVrgRsCenujNQA4k5ABYnfYoQSMxGtJ34Uxpe6Y1HRU28hJw13wzeTsdaKKF",
  "key1": "3m1CpKKR5msKGbJR7QdbQYhPHwBuHzzJbWhfbUtgyaQVGHuR1iV4KqqhLJPYHV9GivhGkLQi4xATRUQAwQroXkwR",
  "key2": "5jGL1zT7zCMikUV29RS83PX4Lg8y15q2hzhkCZ3MT8UMH4XHmtohhPYrXRk5Jn2UAADRehMforBxMRgoUXUxc7hy",
  "key3": "4XfvCcFVyvCqKxf9ZWWGzZdDL4ERshkZadDCbewJUchNea7J3XgqdEkFLD29pGW7P7iLkqvZtguFGtBxsCUpgip5",
  "key4": "ivqr5gJKpdxi8uuVkqcWzGSvLNMwi6W7wVSKTYyGoGZ27oRf5o9KXDxa2wzwL2JSx6GNyNZywUL7B2iTEYCwnU9",
  "key5": "4FXk9qH9TaNnpUPX2JVEK8fCcEh5WsbpE3etPVvW9jp1RhjJRuxnmftzk5mS2sHyNZKSgZ8f3JoWMcgpNBH8aRDY",
  "key6": "3BQh56QUZHMvcVtuaYVzGSmi93Vy4qa6GRoVh6rNUyT71obRG8JRxqnX55zhntFj6YRcarw2mrR3VpzVkuuJpG9e",
  "key7": "5ieNCriGy2oCGEA4u95EXDd3kY8HsfnJejqRmapXvZ4mhrJeRfYjwtvFFsh7KDi1TSHj1bu2c9VX23671vuXNBBM",
  "key8": "4rZjj7doj2xxURmSgPWntsTxe9ppPFvjU5XRVngWppM3zruaDiecuvhXt2tTW96TAEbSY6wKU7WQZqPFQ7epCdoC",
  "key9": "355CdueNRUcZLxLHtbMNChfMK7e6DNXh9VqENH3c4LVLjnzSQBNYJuDakNcroHhZHMnktHxrDZrxV1UV88TczEmg",
  "key10": "3CH43BfvXrQnomYX4HfN1MnSANUtc3QssacRm1vdFuE5SfnA7ztbBLd2PCxQapuzFc4zeuXZBUn7DUpKkrP7GkSM",
  "key11": "28dmJK6exAyDVw5PjyYfE71nd45eYEZR2QQbaD9f8sTRosGRqB6rR2kTAfuV3Scjq2kX87ihMWYJvkdxZJ1pDFmt",
  "key12": "5eBR35LqiXXiPigyV6Sz72BhzLVTiMBkd7nfU7HeWSAN8ZMBZPjNtmnjnjUwuET8KGgWqPuKEdscnuckeFzizmYc",
  "key13": "4TSX7g1zfAjsyPXqDZWB6wgHZnRTMGD4Zj81nWPnArqfFCJqBYRVtVtyzMQ7pGf1dhsAt3J2uixwoX7iVqDANxgr",
  "key14": "2LvAAe4gJQHQ4yhMKg1bitt6MJohX7B65wLWKx8zna39TFQmmm7h9d7juqyikn7CAbsvQJoG2hbQcWSx9yzG88kz",
  "key15": "5Jq8Bbzf312pZiY7QFXCGuZ4dJ4987HdHeAGobQLDNNVB7oFFPqm8zzDfhsEPqk5mnEehJiSVAw4upMumSmzQBAF",
  "key16": "53gaP8hQN1wYB6C1N7oATFj3ougDEArRJSC6FEkuAbkmtAjXp8F537nKZxpWF14M51xUz9YVquAwSnf8Qn72ChSC",
  "key17": "4xtSF43wZNNZyRWjGpJzV4XFPS2tQ6XXpXtZ8Ed87xZECv9S5sLNW4YRpvw9CzBzFouWi8GEwSGnkmDBjPd9VGhQ",
  "key18": "m4d3NVbr91zPmWtPxYfceVkgVrTmZL9yz3oyJVUaaw4dKrG21WFKViT4FzYU4XfbSQMT81S3jHE8abvuDyL65kx",
  "key19": "ii5DtGy2pHRdpvQtq36aEQMb2R7Q8GBZHaVJg3hFmanVpqz8TEWw85C8KpEMMpXuSwQ991Z5weSobQCddkxo3tX",
  "key20": "5WrV6CeF5g43Q71VGspAWaVSrrQFErbz8g8vqFUoYuvXuF7xod79tUiyRA824noksKkBZNMviLhufRvnKKtMb31t",
  "key21": "2KaDKwQEneFJXTtB1DwkGnkPRZxsYDfSKjAR9h9zTTPt4UhzAaqorxu73BJtEqjBXyxsuzVxeJfF5TLiwLmae8nN",
  "key22": "3pF3GA5F6gyrYi4Sp2HjZtkCrDGEYrUnRVJ6Lw2GoBbpkqjgLb3fbPwFAgxSvJzJrSpW5FeDA2egKgQyKdEoGUYb",
  "key23": "2jCoARR3CmDwWwUQiCWreyFmrHkE1F5JUrWPRDjotxsGCYS3T9jvWMEenJnSo52GxaEYMgg6vgMGZjEmqfqeXMV",
  "key24": "5thXkQCyYqXKQY2Y3VftNfvip6uSMFPjVJpvAMmtHxmVu35PwSZZeDqpSwFizFWTpEJxTX4xWMfHnQzJyG9WBVXU",
  "key25": "2prcKANo1LmbpxDZwRq113Hfpe3xEwi11xg5cQ7xGHdhwSTkJYCEEYJ3jQXUAByoPmDYxZoPpiUkDnzD5ofdwcqR",
  "key26": "5RuqMeSkcY1VFarBuu3rC8VbMxxvxPTByUWHBne9rR94buHvsNuaqREVmZor3DiCmwNXLYvEdsK7qdGsKVrQCwFA",
  "key27": "3cxBb6URt71HS72q2a8en3mJ23U8fZTyeT3zRJmdJ4x5iCbBz69gggP611K9P1CCwdbdQSxXLPdTvQFhXNVQkfGM",
  "key28": "5oaW4n6GxEW7WEat3DUNzM263SbMmtmHzJCyUJc9p9Pp2EcTG59JPJh5AFfCbuhootp5tVKwft3ij888aV43Lu1X",
  "key29": "3tCdFM2fhq36ZqLB4WSvciwp8cHLGXhftuiY63qENDpyr4ZsJBxRU3UazK5bPn5h6CSDW4jrn2iQCrmMRQqwggan",
  "key30": "5rcfUkQBrjgSZGQJrvLjJGRxScPLxwEyWDP7JzYVMmTASeKFrykDrQXo8pxWEv8LRmMVy6V9K2Z6qAhntKQR6q8K"
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
