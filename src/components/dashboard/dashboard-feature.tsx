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
    "4YksVf8f315f4y66iuE1aSoR3BbNA5meJPDXZwKEuvzj91ifdniDpucM8zZ6kvqXvGspheRkBjU3CU8CZUbDJAe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X4fc25vnskymnQbfX9fFhgAm2u7TLm5HViteSMjYeihhm9PcPJmM4chAQgQMNfFTqcLiYcZSNJoE5wN5a2tuXQM",
  "key1": "2QnEoiiWvdjSi6U85Uy5PC7Epz6S3mjr2rG2byVYP22GHibLheSqyFMz82b1bQAqq7wCgnfVHPtmK2DVQTSiHaZ2",
  "key2": "47cQvhfQyRpgXRUVictRWqH2j5LQebgHqnURqMv65iv1U7ex6cYqCV5f4MwBmyL4wCAHtossRxGtuxaCYWUQJ1My",
  "key3": "3dtmujs4rETfzkxLPWtyGbT6Z7jRoSCTVGQ16J6UR3JtH9WBzUKBhcA1TusyPP9MWevfyLCMsNVFjANTEcjyshhn",
  "key4": "5ZNwiFRvWG6diE8fWco7nBg7YKQG8P2mi5mudejCDShXhyz78d8x5fhi7EtwsGo8ZsnNUhFz34KYuKMcFRP1bKET",
  "key5": "5eFq7KBn3rUZZxv8J7wNAurZoKd6XyrZjjKur3929UqmGcsKEJVvUJw18h7V8mxEhEM67neCWfPGk6F3eK7HFXVt",
  "key6": "2FRxHRVzbtVBkdxvTqCuodDJgGtGndbxeoPZacHBN3VBqq3WP3QN3iNyCFcem6BEPKw6hKBt11MGtAC1p3x459Re",
  "key7": "5HHVpZzNv8D5PBKj81UUPLWU2uPMSYcpZfw9kscueKAGmZ4pmvnKNxjxyCa1jjKyDuJ7HAc3d5HaokPb1C7y8wYd",
  "key8": "Wzz6UxHnbuWTAroxnBk551fnSmPiV7XAusfFV3e1p1pCnjVDAacBarq1rsbc9com46SzyPDN5KrwMMADjrz81CU",
  "key9": "JneHieTxrqav1iG1TgGnFhY9aa3eVLDrEDRvxjNvVfrg5pSpwYt52VkXBMTxjbc9ye493Uc9JeSy8k475Ar1ihq",
  "key10": "3LKm7EQeoi97S2GUDDxsph8PwgwWeJo6G3DDLNECbu4M6jb7vd39v2zubPF1xfSpLxRhtNLHE8TpiT8uVLS2cvmx",
  "key11": "2o6jfTrPrQQcfH4Un44xXe3CeAq2At8xQm76ufHans1aYZQtR9sj4v1ZczXzs86t5TJWiW62Ng2Wbchz183CNtig",
  "key12": "d1yAoWfbLgtGkmWPTocJj9qiDwx3bSu276KN7XKXujNTLHx9TuDQqQU6KYBTrhtAxHytvrKWGyXqnfq1tDDnuYW",
  "key13": "5gb2yAAZEQi1g9RxjEy4ca57t1sVroe3WHuAHPPKGdpFLdo9BqBF5jnT58qGkhRCvPSSEhQaStB1pjkzC6dZ4LtU",
  "key14": "4F5j9qCwG2scLPn5UqQK9cpRbpNNQu9eBB6raEJp3gZf1kKAwvL6Hb1GN5SCLFnkhMck3HNUqpiwZ44rjs5afyaW",
  "key15": "5YVEwNogTxgrzAY2unvhc4iGJiGWS333Y71F1L3KS6kD2xa7djh8nDDHMo56nr5ybDdyrjFW3mcxuFW7ABdL9ba3",
  "key16": "544MLN6i1TxaXC2vSDAnzNctS1DttCXeQivV9UkzmDYrKeKTYN821L7vJAht45dMphHaUBKAeMkK9VQUE1YW9G1C",
  "key17": "312suYvpzz7thomtjS3AcQPRXfjwe6is2317DZ5gr9NAwChpuaGUYqpkupqCgk6PPYTEPzK4rDGtufLvnL8PHomB",
  "key18": "3tnadbv54vz4q5YfSaQJLNLiBtHbgHtQEkm7GkwScoHY9qT4vCtdSrDpS56BL4qxB3Jzdnapbwn37Wc4wQbbQNHv",
  "key19": "3358TnaXfWMWKvTErjV7WUkhmhEkzx7KiUcVzrEijAtFrxTq75YNnjVbQSycmLZnrW27aodoF2bTsTSZdX5UhZbt",
  "key20": "2w8EGPNDqrDyyAWQUjrkUfVPKtqVWgBGmHwKnikjXWwdwQ7Fpz13TDExpRwYTouoNdWWbFCuALWMqVt7J5KfieMu",
  "key21": "9kCcLon8ezVKMqzMbPezRZWdkZ5ksZrzFESQCSuR86rAYzCz3bRZPTq8fhk9R7Ek6z9gYoUzPepgCms7eAhDrhd",
  "key22": "4gLfbwktGVpja7JCC4fHQKiXnFZMEKZFRcJ3iRCoR8j7fYLs7fSVYuLC1A9WXqai4aDY8ggWt8JAhgbvAo5xjtjG",
  "key23": "2F7dw6fG5ALfgnYm9dHruAhQwRFXSYWHYsmWFa8G4vYNZPPWEwbcestYFiNNATARmXgyCmYE9W6UGn25CefiRffG",
  "key24": "4R97ZSggaksJk6HpmTfUar2hFrH8qwXsCKJS7vBZZfn87RTHKLvGTzeEFxpJiKvfX2D3efJWWWvY4uzrAPbSTfyj",
  "key25": "5JEuy97e1Ds5ZRXJxku9grZ9NUMEgDofWUJprdSSYVfmS23wPqMcAY6zYQ4dpuQHi6g9d47sunkusUJLPMUj6KRF",
  "key26": "y3rzcfQBYdHAWccFR1tt9nksjMRUqfpqgvHgVaAH4ZuPcj4NSSXsXr5aRt2V2L69xKQdrNX8fSpZkwqNm2mkaSG",
  "key27": "21vNfWF2qNAC8NGsRZsPxUM7xxbCrKRzaJEKGmpyDAeEmZqZLKK688xMUw4SKAKfuCqUJ2NkuR4Qr2UV5xwVfBRG",
  "key28": "3jtDuKYHE33kPxL41tfQeT6JWNkjHLiaiivKdKidzFCpPRXDfhS8dYyqVCEi9meFd1HkSAQpx2gUwzxb7nX5LNnm",
  "key29": "2u8GJzEfCoi7w1QwTvWX5HzADFoXjCq3xY13eFmyjjrx9AddvtaeTZ5dpMvPrPVipnC5eXTrsSoowGTqiRomx8BS",
  "key30": "69SKiBYGce8XsPNXtmpvxthm6Dn22eAPVVSJRLJkfvqpBkKtG5PVrAysv3dDQFFXAHgKAwiosdaTBxuwQBNKKW1",
  "key31": "4UmFQywLJkSn49Q6tH1HoAttw8aZwzhaWokgWdiPnp9NncoruZoaHVLQZbFwYnYEGdGMMk36dqJYnKoSj2SACKRS",
  "key32": "5ALiDL6nCfTbX4bCtEf7JwgobHFfqxPgwtrL1cfhuDQbqiRm7ADJTm5b4J1hCVMbhFkGR8qnbeWbcUuhWhhnWbuD",
  "key33": "5g7xNwfwEPeG22LqNjHfwakLBWr3o1yCvvgsZEN3xYKPeA74WhJkbx2wxfeVH1uQVVsAPttA17cVsNXqBLDN3tSA",
  "key34": "66CvMCf6CgeLGHVVh6LRGRh8PGY37nQTm4fxTBaaX1Lmjc2VE38tXtnwthJPdJpHr5xAZ7vMVaB6f1YqFKAWH4hU",
  "key35": "2B5iWZVLKEHXsy7aZ8RQXfjyL3CuUXm2KWp12rLhPZXomfQt8AZyBbcUm5CXTDXas8zzFcNBvsPQwvdkipUpDoJo",
  "key36": "46Zt4sQpz3VTQEvFJc3dz9ofComwtvv9Zsrb19KssCkbUgDuF9gf8rkrj7JZVCZAYtAsCGCcH6hu4NEPxsKCRXNn",
  "key37": "3KsaJT46bYmfdDdJ6N5keNjJy68eMPhaJnS9uNSfisNZYgrzWVrJRhLftZqk4aTdaTcqYzqeNEUP3t6PqxVvvRi8"
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
