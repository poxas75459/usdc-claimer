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
    "3uUPWEppgi1myMv1Fi8wz8xhDaDuidiZ7GoRQAVAfpDoN9yGfiEkFoENRiBFNBiNQ7cWzoAHBSAi2SLtm2xBbDbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CiNnAxJr63mUr3zMZuzsRUzEJNVkNqXnMVRg5QbfsPy3dKsEazPuGbybugj6kgD1kyECoTjGgDrnFJ5Bbdm2m4M",
  "key1": "3239HePrPYf7VnQkL7DnyV4hMV4VtE2pRpNfbDn6sMkLbhsGDSqxiC4E8sPweZt2KyUkNHmbeSFoHGyuSAP9X8hR",
  "key2": "4vt4qF2GmHpiLNfiHYMuscf7TSoocdHkW7DGcwfvkvrVqnsU627pL4T4yNDiZaxTAshvcqcoLxPZTkBDSzztXPLN",
  "key3": "2fNncWJLYy1GhHLZrJXN8g8CLUj8S8LoQD3KVY4ARVxymrBZpkXbiDcVaC6FqnSszr5bTKQ5o9d8VrssBDNhsusk",
  "key4": "29Y8N6n8CXjxzD9DkEWN6BsuJDcLa5qcwR6gM1hKQPDkRHWCZfvpEUZS1qhgo6CyPAwU3ZsFukLqZHUrBa6kXS2y",
  "key5": "4jrsheqeaBrofi8ZdHmUSXLjjnb8gk2p5WrLy1YGeiiNt3SmHGzKUquhrfc5J7WghMjg4ZDVQzuytmWagmcJeQt",
  "key6": "5yfixojDtGfjSU9GWRKKnjtDeRpMbNwrxnmTLRoyNmtWTTtPm73Q43Zs9x6oj7jaPQ7922QXCZgzbPze1yRx8P2P",
  "key7": "GePkHxNCa5jGiP6yTL3CXi6YFxvgpsytwMG8vCV56G46BWmfDhG4UcMG8VC3h641waYbZHXRbCSQPs1RqawUdHx",
  "key8": "z8WdLt6WcCgMKMEvDjyQpMQSDVucSdDPbLYCc6b1zQvHBc8KkKotHb5rNw1zGrtsrLtqLHZo9JLb1orXE3ZfSqi",
  "key9": "Gfcxt8cjad6tihTx86eeYMLSpxeFTBumGkHphF6UtXTErbUGXbavTWzMR4fa1V8zcVejTMbiyqDqUk5kPYVsawN",
  "key10": "2GpRioBv4uTsY5GEh7XudCiqNzaYK6uRcv9qRxs9SPerVYkjtbu1qUGrKiGZk79dDG4eSs52Ejv7z6RCoTN9LPR1",
  "key11": "5YJWA8Q3SbUiWJA44vGphqYLSFYv6xee5X5W7c3yKpnR8qTStcXCfVm79dpgCvknictJ1PoGujeYiDNDXy7mXpUc",
  "key12": "4AFUWiSnuSWtZhWS6ToHcQ5xJg1fv42yJg8An3CJUqAk8M2A1LDMqrVgY6RJ7cQpXZBh9NU3T5oQqRkqHBvARdPN",
  "key13": "5n4ZGXBrerz5LgRQGKwaojmr1WTehgkHzfDjvzDNvHqYW4APRDH6da1sBxxTCzSc23WpT8F6ASxvpNsdjCn9gfHK",
  "key14": "5V9dwhaD1ASyWxNyXyY5suVc7R7cMU38eyyfzzXn2bKumPAmSH79m6GGEhBbXrVm7Er6CtrDnmpn9B1VjGjAZ3yA",
  "key15": "2yNKq2v7YPVmszrTDyEzhwNcovYt2A8Tpb9w7HrNFUShFfez2ghjerExQ5L9ug2h3SyV17mnqJJhbAw658FgJfJC",
  "key16": "4CkzEPJUfBUCttXN2zxpYWRa7f5DddY5PoGtPAMoBDFkEg7iVisWRR1bey1DRabGL2enXqrjsRYWy6soUGPNtwYY",
  "key17": "4VA39yz84VipnLmwGQCDs5cL6CCe5QP8kpDKBAj1Tgt29SKwDF1HnPzdqH71ytDNG62fhicvMtgfB6GdQj22bgdC",
  "key18": "44cz2DBj9S8VM682VSHXWDBbn9mC4SqxUqGJEYL8DDCS7aYp5TRR7vVwvtboucDMBLPXs84AGQ3Q35RAfGzjMMXy",
  "key19": "5hbMauwWpEjXJpVig5T4SshMNiBV9TZwxv5FQmVFwy1ZhYboWnib869BYMo2UthPT5FzBtc22Af1kM9qPZ2zY1oP",
  "key20": "2E1FpP68HA96EKpfBySmnghRrhQEGWo9suifdfWRVp5nAqujZ4SYoQ8CmZV5KAqRCaKEMoSgtk5pRJfXP2QCparQ",
  "key21": "5AcK3xpsSuX5Dq85sYNji2kPuHLkUpQxiGMoXomhQd4huQkJyv6PHwayoUc1mwAKBBW1HTuTz4APrnwRg8QZRSfR",
  "key22": "2aUSXCfN6QJ3Z718ATmifirRPtDmteKypRcmW6h5smfk1cKkAhwArAZ7FkS5SZJ4gThNwnts7pBU8g96CWZEnmAY",
  "key23": "2qNpMt1eLgJstnpxTvgjAAf5hjXdnNqAYkkie6qtGsZQBceJz6yXgbpPQDY5cKcYwHd2DVjfNSm1Fv1sD8VCbiNG",
  "key24": "4CbigvjFf3XHeuaCCugD1EBa7WbEoxMRrZ9kmKnGD7LXAEdXaz2chZvtSX7GPJ3fG4TzQgc9VA51EkLYiFRHMcZx"
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
