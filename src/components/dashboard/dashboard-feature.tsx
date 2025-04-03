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
    "1VgLGvf9aECdKYwoLf6td4sGhcap2w41jSiGmStNemYZxcDgn1SrHQeXBtZaQoxJovAsZz9LBrRJ5gUug9BN28Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4km2iM7GZqRS3FUWYyTfDAfqZkHsNggi9nPjiivLkLyhr4cM7m5iViCQfNLD8nMBcvUwaSA2fcWE7YNK1eNmUEse",
  "key1": "46eM3YGtK9GdZJiscKR7GFQ9HxZuAjf7gmD6GfYJCLm7fH97t2qnbyyuDnutGiQvFEad3P1LQZdhn55LBYQByt1v",
  "key2": "56NZzxAP7mYCrUyCFviC1bVNJ9rnK6pDxFE7in2YVFsH4dYbvmXQkeU9JArEaR1xYSYmNNCJUGavZcWZujfre1yL",
  "key3": "3jRnXwr5MimBivMGcArFiHdqSCzUufSdV8Q6u3UyxdmVYGQuRm6xdt4dKTYf8V8YzH6TaLpbfZntsNvwvP8CJv16",
  "key4": "3pmMtmKgskPBV7FWhMEMBh8CSJompARBQpqRhEySx19wxXkjZYhohBBMVAQGR9xuukMVkNRpVn8R1fCBfJfT4ffo",
  "key5": "3v1dXm9Hb9uiY2VXWnp1t6dpDc5nCj2HCMMs4S6rdr8XHEAsE5gtBrqb4L74Ru3WZZjg3NTYHtsK5cxvwNnobAjX",
  "key6": "3PobVmvoiQsVjC5STSEbB9UzkpcALmAxTdSnm4QTMcdPvhvpif6vaybR1JhWs5T5wC55Bwfh22QpwHc6asf29HZS",
  "key7": "3o7VLkft4shJcLMXybuu9ywiSMbkDJWCobwhPGgSHwgsA6iEiWTmNy5VMeFvFRP8d1ksm5MAZ466WzRo3j7vvPQm",
  "key8": "4zk3MULZ3LLGyButVmnxT6Mgf8HaQDNvvZzrxXDduX5dbeH4vPKJiAeMeVFHANysgBtqC6uyx2vGpuSQvnumHPC7",
  "key9": "36oaeKMhnn2JuYvioj4VgwYogpkb3BaXbYbBqcMT1oVS3KPVEteYfBnjaxvAyT4mf8Hn49zjoErE2evqg5LyLKXt",
  "key10": "3wyUn6WZ2RkppniqA6h7ySvChzPQ2cSVeKRF8KNhhHqfcErkwDpjzwgTLsqkW4Ekk6rYvvQeyuvaRj7ZZ7qqtAZt",
  "key11": "4oLfkZMwAWDX4aJLm5iGKHVEKZyfvA1REMEvBxoQJ37GUXUUPeBkGdZuLSnzacj7j4bmywVsJjtoKy1pb1Dgn5Hp",
  "key12": "qFNZTWhDQ41b3WCPhhmX1kmzTMvZ6cVBJ4myhWJ2QrVSNjJEENXkxEBHSGAhBxW7xq1LnbbDh8LYdSY1ZuoAQ3w",
  "key13": "4uR8L94JTN8cWtZyJTKvtRinEM1F6taBXDudEUupFe23TzL88eBMKN4DoCykuKkdkYp1soyzqi8jToGj4RjTnxdt",
  "key14": "2MyHdBmU6ovAJ2YNLjmVTMKtWxwKWfCMHkLxbqAeFcucGdBiRjo2KRC1NWp4xUJb8YAgyHJ6w4oL9uYDF8pwNak8",
  "key15": "4T3B5ffXTi9MuoyY8RaNi1e3tPcK2FM8YpJrM7tXP99d3s8FukTYBYKokhrvoaXXJtafNKZR3SFo15hoypzmxNa1",
  "key16": "3bj3VFEhcu9vedZLBg92t5hW4H2R75kkWAGKPkG3EmRPrB4Sm1hGJ6zqK8bkWTa3pnZZfrLyCoMnxsdD7AnV64UE",
  "key17": "2QubMUaQtYrEaj1cJKjZbjsr3tVtwTgt2FwoGoz9UndZzQtSGNjxLNjLWyYm5CLn9d8z5ZFRTYa9Ksja9EeXFsTn",
  "key18": "dqXUG4z4GrFJPUbx3nwaiUPoPfsEkgWxFVsrvsUVNWtnhoB5oFBjwv5goCiwct76Z3VLmUqm5sFAYC8VJFknVzy",
  "key19": "3zkPuJocmZoY2LBjjusQy6UwMuxwt7jrYpu1V8rUZz98U8HwAqQYA4YogXzhFTxz4Gj9jLHGhtXnJURn25YXSXG2",
  "key20": "2TGukHFiXG2m5jGTvP54C1if5sEFXzhF2SXGdvZFBjdR8AasQnu5Do83sD7w4ffCjUhX715k1pixYw4Vqwjufvhb",
  "key21": "2KQB1YfA3VMZFhE1HnTSMxvixkDG8osJT3W6X2oeqdGX9WBkrJYGekiQRNjB1ornJjTEU8FQPst4vZR2ipus5Vvf",
  "key22": "iFf8GwjhkacgiNGBr9mdPsZUw81XgHtcrBrJE9eMyXkAXLCmoVVBgNLT9T8jQWPMFkWz1SXe2aVuH1ULgxE85Rs",
  "key23": "nQGFea9YyxbUnhqy2CJRb4Cj819E4g8NFaDiH9mSVA8J4sVXcrHUxyTZiR4HBqVpPXUwBspbQLkFiU2BNC22DtQ",
  "key24": "4TpqZksfzHZ1L3JEyVbqd3SjBnQ6XV7PX7B8VjuWHrmzXAZG2BkLQPrUBQ9WdxiufefXucnS3spTwf8sZcGgBgyP",
  "key25": "3sok3jRa42YFes2Xv5gA5K8eDFSLgnjT2T9NafkLVBKSAjgUvJib35sGhY6Hf4quRqo5JKYi8e1kg7A5PYDQ1rd4",
  "key26": "4gw48T7F2KrGnPc9WCpYL8c2Q4Lww9ybFpTw7qMm2bvnXQz5aj76NcwiP1jvWzYYV29LxsTCPa4y85vz64caYNuZ",
  "key27": "3UcwqezSLJbK4E3uZs7F1FzFE8foxySQ92ArL88bDAHurmJpdKAeu7YhHYjrLLYoxEAHNuPXZyUfw5JkrxhV9cPN",
  "key28": "319aL7PgRWr69dVSDZY2hejsJdVPbyTmeCNfuBNiaKqcnuukevqauTDL4zj8f5KWZEmw7YemPKKBTAFzLzkFKD7e",
  "key29": "2tXZ9XhnhMqWBMit32NMDQKQqRhzdr5mHBzi1bWGqnecpxT24eU4uLijaBynFWuHAgH9rcmFhUQtusqU6UGQHvg5",
  "key30": "qkaVetS31SpmG568EEq3gGZjwCWEDjnCaEF4M2vVQUa6JPqSATt3jgjr1sUTUAg8t66ynqKTLSiEaR9sh7WJ7HS",
  "key31": "vqAHXuLZqYMZkiLLmuz5wdRQMTrgYfMLsyx1ZDXLbSFj8tJ6kws5V5YyhNHijgqokpCFWnq2Zvg8qNoL3yakp43",
  "key32": "42nwaDjuBBrkLGE3UUrUSi9R4jTzee5eTPVwZvjVfBMkPQCu2wGzHSnJeCJY9B45NYA3JXnKTAbwo7ENb9UEgB8o"
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
