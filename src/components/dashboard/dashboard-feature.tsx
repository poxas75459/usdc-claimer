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
    "r2NGVB8RnY1VrDsivAXwqYbCq2HphPJKWthhb5ksotoBQFbWGB4YBbxJgKcHk8No9wgUCWocP12cHU3JRbDDeAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PCcfr3vGcBCfimr55ksQqYm11Nqr17Beo7VdEtpGkjUsrbcQWZovprvU3VuhiLFg9foFV8QCXyWZvMcB57xSgvs",
  "key1": "64Ciugf17kaZVYDguPxE1LP8JXdikAzp1dkJHXwsSHvZM2pVRjdNYrTRePBW7wJpKwjhf23AmUfq6obysHZivRQV",
  "key2": "2XomD7SNUuGgpgcaBV5u8LDx9qAsoGFopUTsUCibNz4ksjmSnH71dcTxekhPhzTkohoEzmPj8F2Vaxj3bj4LsYiP",
  "key3": "4p4YFhmghduLgUxpMjFkRUB2RfRTfTEVNM8YdD1mcGNMja8q9ZYSzrz1zeLHZUGE3DuW27TPdPHzaSzLGZbK8w6h",
  "key4": "4Di5mJ8Yx9PYHu4EsFwGheqaRgmmmzJ2wT1poxLoVXrnQ6zVviLHmm3TpcGgnx2HkfjFFHzcAx95tee1g4XSk1yv",
  "key5": "4PVhH5kSmCj1K2QLC7fkQXBYR9KZgM3JBtHeufdfSqvsEhmp8T9JAqC8aYJFKVweTYFmXcns6PnMetYr5qzZfEpK",
  "key6": "5vWYMcpMcyzLGwvF99KrknLkG33W17RQWDTbzB9FmGPQHfXMHCxqzpZAEvLiGYxTze6AmsE3VUivTBhaPensXCDh",
  "key7": "46on1MTdV6FnW8YkfRfzMJKrzXR7DkvEJQ9uevUAQrJDjyMQSXZhdUZmrzhQG4Xtigy7EBMQ8BzfVRB2VNYGCsvH",
  "key8": "4UJNeb4hpGbBaRR1UDv8xDNTFPvpmzymeHbWnjUcgveQukV6rkqQ18cMMijtVtBKAqtzRaScxYgBMZAFbVaGDF2m",
  "key9": "35CA8Groh646PaZbwY8hTV4Zytyoc4egRrL1j7KzbzAa6pNcHqKkgafNd9bDJay8g1vKogorgJUswhsuW8wo3ZYc",
  "key10": "3iiWqgbQ8gBFs8CuU87Yv5WTbmUaPbwrA8VJQGtW5GkbUMmGKWBKmau1Pn7XLUKx1211NTuh4YgKJm9UMdk2Z8bE",
  "key11": "4rrojNHqWFxfPPHKSBoAGYsCrqU9ARL5V5ojysDTNabfts5rC8aNCdSo6X8C9PgjMK6WAfbAToRrFgJnV1oiwwoN",
  "key12": "NMHo5sShuVh8FZueu4zyEfXrK4VPRsKeDw281ap57gcdUNa77ueVKScdModNqBLy6QfLNA8dgEum1zYcuBqi6hC",
  "key13": "3Q4xWYkxASvuRR9NZU46RS9FbMEK2WEVFtQ4nNG26DMcjY5hEkPkvgWu63KucZnC9rmPRvmwueRr9E2UejkxfgsH",
  "key14": "3v8mbcGBxRHBULxWGXB1Ah7D3GouLAumEWp9gN87N19Dwjh3v3MvLVEmy3HJtzZwyUGc3hWK3AcezLVhtKk4SHUB",
  "key15": "5FVowYBbRAdj1AyDTjNLFXiHpX2D9tJwE6zXqPbGLt4A3twXvf9GhoA7u7LBAPkFQP3aYi6mtJc7jG8yUvhMY1jP",
  "key16": "cTKfKcC2tb2SJemA5KmPz9eFMsdQPhypGrhXLjdDZizi1mPfJUotY7maqrmpnDFpArLPVvFYMcb8L5PYZ85ZjvH",
  "key17": "LA3T8Y51vCSdF4epziV7RBxjWGoThnPrKKGD7mkRbCDLHoGvKw4RcED1PpZE5Nfxr9HvzQqCzo7rabz33MSjzcr",
  "key18": "eW13dC2wPUUX5uR2eGoUcQpEbRsG9QFY2WK1dNLe35nntk4pPPBzDqwMFNR5wSFZVLPNvtPyJy7jBzY2iJry6K7",
  "key19": "2KaiNtk32zWsKi9hK8cFghfMmRWXcRrXyPEH1DsVBjNUxcErD8bFxYEFNecyaymho65v55KpzgDvqqeGbE9Qohg",
  "key20": "4AYTc3it1DbkMtwDmDmjuiAGGZqi1XV9vkDeMZAg87BRvqJqG2FwERRBzwMxGtEbCjfmnvfsPdEcpfLHZw6fznWy",
  "key21": "2LNQfvfriDEdLJua27rMk4TNkg21zyjkTUbKMfEjfydVhkMKDWis8nPnKdhqNeQHKbahYsLxjjLdo6S87X1xFJZS",
  "key22": "3zVr7dqnDJRA6yo3M7iwxr86JH5pF6FrB3fxXJXDWkGtVxFDe2qvx5YuwDVDA1wGkmFGssrEB9j6HqNHhGGekGoY",
  "key23": "MFLE6NBwztkUKPMZd5bjEH9GJv7ecafWfpVcrKa6emFXviF1VHgf7CMUh1gdkXQyvHoiqWNhsdcqdmbNz4Yysnu",
  "key24": "3BGpQ4DA9fZxBT9h9c2XEAYejd6iSxZ3h7gyxCu8xJjj2EX5yhWNPSy2n2LkgKnweLzepcvjYqjgxCghrxLk5tQL",
  "key25": "5Y9re1c8sB1MeGCWBRSy21cN2dSbKqqfWgJJmRDWhrTr5ZDVACfbM3C3NYc1dJJqucXSs5B5Pc2wmgHLcRV8T2fM",
  "key26": "2QsUGE2axvFmzNpyfbuQaMCfy4XMPz2GmNKYEwRGKxXxk8oL7DD4muwN8SAkBQ8FWS2KgXVKeZ1YyqYfxdoMsQFL",
  "key27": "3GiTksz1n4qMXQeTdRgjXTthkopjy1A2vQ9cG9Mu5Hs1Jk26bN5Lbzsng1JPazKLuPRzMyJYMgkZQnAsdULb9iUB",
  "key28": "2B26TefHqjLQ7b8mktHEZEyrusnTPUAht8UY8CbJubDsR2uaq6HJTNs7dVB1rrG3HTxgcS7QEqokPKQKPr7c1TMM",
  "key29": "yYwEw3EoY9k3YCw8du4fj3Mt7wkyPa3nrzequsbgyUYW1ZKobz317QS83QBT1323bqsRjTabhekSLDmEG7Vg5MX",
  "key30": "3NSw1bfw3mmJbbb52xoevpZMmmUYRzkGpPtoaYwYzD9qqM4FfrkBVLoyvoZ8y6GzgFZb11PLVTrdRTKnrTHye2iE",
  "key31": "32RU37Pt1EbdGsFZt4vnfe9TZhuh5R4bnL1BkkYTvMvbmsF9sXhQsHkVzC29d3T22iya96J4f7fnZAqhBLqDSe3p",
  "key32": "4Gh7U2ypgZt4v7V4ADPokjwAzYpUjUnMYUdcP9g3wExBhnfeKWrwwTFpw2XrX7a76PNy3oN4ACCCQMZx46oJM8jK",
  "key33": "36sLZanVyDzD58dKDGtQLYvb8LnMK8tGD3rwUqqDcKa7x6Wr4BLk6eq6pBxaHwQpdRdSwCBL7GMPvm4yRuwGKQ8y",
  "key34": "bM4e895QuTL8PSA1bgj6cwseMGkHpTtRYREryPxafAm5f4EApURb7TjFwu7CH38Kt7j7KjQVKM2pDHLYc7XxZwp"
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
