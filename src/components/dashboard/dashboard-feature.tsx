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
    "5M7NEo6FWAcmYH8Avzrz9gEZyM4huSJok8W6TwBu3wRRek36UWfUNBbYrFCexBWjokSf4Mvsn9npSy4BVAjJCgSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MqxVxfU8LTxfVjTTzZnryYxJg1FdqiQNyWszCyy41n2ubXFsXfnGRywcYomi1E1C9LvnsxBgbEJ6euWNa5aFfgM",
  "key1": "23jd5fT6aaXWiNUg7oKzZdvfz1TZ4qZzr4n2RqL6PomsXNRws2KkwLo1eS6ep3FBG4BNAfKE6WsuDT6qcMYUtSa2",
  "key2": "qTVrNaxwz4N5rBg9qfFwiyHwWR7co2kH5VwrnpBAyUyU4bDuiYivLHtWFQdkwhbHqUYJr82SQMRi2TPj9Yhe818",
  "key3": "3XAR7jj1pGzJ5sDb3buL29AfpcLz4FcvwLcxAiXMBEbfrGP5DrcqotefkenFQ3zy836Lkk4fMpQvfvLv4EhKe77f",
  "key4": "22ufhWpsTeGUFUrLdPbGVHBu6cEjHtxtoKv3EKiyknftbMwfxxb66ggSam4ALeZhNJ8QVamkmZAbpJ1ZjBq38aqT",
  "key5": "25FYsG4ZVbdZ2sGHikT52BQTz9dNLqV21MAnem9b8nh8GS7MHbGHmKhskbL8Rmj9yHvzgy3rVkX3r3ZXFeFzKTBx",
  "key6": "5HRRqKSL1ADemmbJ9AY8N6dmhf2XwTKAgCXYThteAsaVvRkoav8DCeD1crwaFfa43L5BM7sdzjDrZsmX1VkDzEpP",
  "key7": "3QhfG8XrJJUmB16ziDB46mb8Kze8o9R24gV7VSVWuKY5XHvBunaBxuZuZ5W1ycrmDYtW93ZytsQjzvTtwqqxY7j5",
  "key8": "369AjhekZWVx1juJ9x8gYWVhYaEzHVmjzXWEyxJEobpnUE87SaQXYNGApyc2kroNnMCihF8tujkuPQXygTPrfxBF",
  "key9": "3VtJ4qdHCsjm7cSu5DVNPHKoetNTpfuPBRwKhomJiEdGqzZAAR1rFEeAv3xYyj64UJHBUU5EDbuqUEsCj4qEFos2",
  "key10": "3QnTFGMxvHqV28HyaqrnfeeXRjrh1EQrTaoQHfVLT6fAKhGJz2TR6XJ6tkbXd1ymudQ6jQ9CffAotmYaARWTj7eR",
  "key11": "77ZHMFwTnFfQAexGHgCxnnU1XDBdTKwxBZvDWAHQL5JpaCG4DdCVWnCAamDKYmZsaDhZMXsrUpPcydKfHgJkMeS",
  "key12": "QpVsHvTga2vKy97MYynrJPpwDn967spaX7WkGAMv2ymmDLK9UXiv8iRb8HeYNWui5fTfLKA4FoTgUhh2LoD5ad2",
  "key13": "46QFdLTvbo9SkfX6qj5athJMEiXoioNuHQXy7zo9vkYRs98ik4BwCL3zvRfKLKeM8q8c84qzMcbKMDM5cCqVEbbf",
  "key14": "5pm1HyB9yHjYPWxDnnRYuat3b1eBJtnWStWZGscxRXKyKHpuFmAy3bPbz3kF3o6CYnZEn8moYX6MWBdgy3ub4YeS",
  "key15": "q31gTseQfRkFo6XAaAwA6My5fhAwPgtsLFESfkYHxUvCJ1KeYuN3moEbozxY9tgQ9kzTY5no23qjgfcDkjCh5Kr",
  "key16": "4fzrsGpABrHURu91TVL3J1xwxyh5xpLwMWHY1wSZg3LZaWa4sKrNhCm46pUdW1eHhkhKZam4m3ChSthtRE1sWYYx",
  "key17": "5ZWEEKvotmUQSsMnwQBhQPBu2syS1TnsBLHzVhpSZ6yPHwe9hbiXGKSmG6NxiJFSpEWbQBrQPaWTn7CynCFq8ewP",
  "key18": "wGsfoj1iyFLGUHoGefDYWzNKxsrbgc1shAsRfkTbdSu4WAL44KQVCN4w7T9Y62ZxL2HXw7QorxHVYWAzC5JmQfP",
  "key19": "42fFCps38kPto6SFJyfcMKaCThsSZeuc9mHjed2ASsi3ZRxdrBBECJCXqcXhW1CFGNCpPmwjmbiyM5x3NwZ6efFx",
  "key20": "4VsAy85XtPnU5LBTaZoQoBkZ89XGj8bDf9rhHXMbhiD4FwFXTYPYCUoi5bMADG4hNuuv6bUj7GiA5d8mtQGsePwH",
  "key21": "27yNo56ofUQ6ywHAtNMQ1s193mMZkd37MEdE435cq7KNCJd6TL35eqkGKk5Y9smz7FionJXekdECFDm3TX4SBqdb",
  "key22": "3BSmyJULZ7bAz7MnfvujWVCkUZjjyJxFPwGdJypgoev7js9QR1sq4hyeN5xUz4Uh2kCbc86HhJUPwyftyyqhAhPr",
  "key23": "49LAgQpfvWtqtAQ4XADaYaA3EBHg4yueeGXoVo7eBwSqUkgq5BAeNL62b87A4aRnt8PEU5iptPqjjqSWWNZ8nW5b",
  "key24": "5NXEMqFw2ZDZ1VqQbSwa7q5EUqgmEYD3jhAspE8GLbWkSN8hR3SPNTHZg2CXZMXBapqDEoJKQVfrWNFtGbEvUGn1",
  "key25": "36BuqfJwup6s7FD18962ReWEH7VdECNGB5A7oHTggvfge5xG6YuRbmq3ByqUTAiVnBdzGziV2joS4EubD9ZmD9Vn",
  "key26": "5EBd7U8qgdHpNYX6cwNDDFoJT6NJLrhfnjaVL36ph4bqzxGLZVxBBR9TmomEDoCbopq7TU2AxHzy3AVeRGU77g5s",
  "key27": "3kXiu4aLsn3wbTmXNgB3v81HtPJSXRMh4PGyB3f6aAE9rP4HpCTZBPee66XNkg6kxvVBrY3hzRoYwukaLTyavJRM",
  "key28": "38N6QwXCx1rvSDSefVzfeoYPyAt1U87k1N3qtwYnaovD3EwWoYv6NdkYBoEEzKR3mVMdzPBMk1ufEYv4691Atgw5",
  "key29": "33oSeKJnW6zBANt6FT6PKTBuWcK7TpF3rD4znatx2eVkFnkSYUdXzYxpsh65KdMtH6ATGLNmiWud6nu1rkdWwt9B",
  "key30": "2EX9gb5mvdXZA9FoWQXYj8fdKUGtGLFsLnycFQ4qnpev89gd2NuCiq5WDquNpCXcLEZh7CwnMrWKsUJUVA64Djtc"
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
