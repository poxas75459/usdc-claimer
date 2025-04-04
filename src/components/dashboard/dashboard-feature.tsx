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
    "3fpQg1eWRq9kksE6J1jHGAvAypy7fZ1VGmWFY2npoahRQk2TQe8VUbHGDSu8h3n1N7TEwZLaDeSQXvsySenTd36T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCLUCeQufPpoEcZ816U1EB1Qs5ULQcqvTx9PfB3CwbJkbgandHFbs8HEceXYQnGy8xx266YbxMLy6wg5BMDReB8",
  "key1": "5seEkRWzWDei7MTJ6h96pi2doznsLAv7CR7GmdgNVLHGiec8qGrXEU95yQcE9aswB49MQsf9oiVMUXkQFgcnfEoi",
  "key2": "2m3ESPoQZUNwiV9FPu7as1UA7CbaEWAyig6AknMhmN7UvyLNH5aMGqhwhKJALXZWX3gx67H5UNqdA1GNRdcZqGZL",
  "key3": "23gpbLTpTSUNnMfwN3XLEABw39f3cRYQN91Amr4WXJMy8VV1Lpz7A1FWiF5DButuQgfJh6zdSRK82tF6zaN7QeeR",
  "key4": "2PtMpBDcjh4UWAcqdx1GSVEqixWUwFf3So3boYruWrXSYAnXCSpGdxG133PT2o8ZPnTAdASiytNszEvquffCc48o",
  "key5": "cdGUaSohHv2AEKCh71WFFn6uPAwyMTu8768antgtv3exJWrJns5dovHRPjFFtUrmWd6ZAjbcchqhu47LdgccbFA",
  "key6": "3Vm9pJqCV87tAnb6SeoQKBDkw93j6Wi29A7tRCeKd5mubbUfeZSnB2XJqoLFsgsgu61qvUwd6FjgV6HM4ebMC6ty",
  "key7": "32cN3TrFKBNqxTr75fovYomeXgELkt4aK1iLjTE8oQqnyBY5NQj2zNTZ6nJAz3n74iR6PqHLtFQ3usS3avWQPtHV",
  "key8": "4zAtgotZKG5x4sXpLQUgAPxJWKTCsdWyypCaEV1mDS1vGLDEQ6ChxNCNq682yagYr3sQT6BpXqzDTTZ4VxasNtM2",
  "key9": "2ByD7C7ZJvNnoghc6hiXpNMDzagkkbYfQraqKK7Z6pwYSXWZx8kRRWUU6Vc1Qe2ryNq8pF93pRRo9qHmDdh9Nnum",
  "key10": "2egCi1eoyVqEbjHwAmvKz46jSqAHE9rGT4Uc25EuEwFfj6q485ods7kCyrZhuwkyErqMhcpH5vZNYtMTntfMEi77",
  "key11": "2QH7tBYNR6siN6UEzigLm3GFxm65EfZ7cxaKTNzBDTfpgNkK6gfUeo4yeQE1FFe5kBPCrL2bDPMvEL62gV28ZEvt",
  "key12": "4R539bsYVJdiF6B6HcCuyLKo9QDuySb1fbbWzTWsQhDesdnrqP3J4rwhBJu3AWu7YjejPA3nSVxUbRu2CaXoBgMp",
  "key13": "dJG48D2DTEwiXpv7Dwt2rZVPoQN36gm666PUtfMRxtfSCdgARoBRvXdUm7sSQBzjxcWPcwB51kjGx7DVa7wuhQr",
  "key14": "5F1HCZpffwFkiPGooPLBcCJRGRZaKEpa8RHBxEWCGb64moWLryretSaibYvg8C2bdxKWboV7dStL6DA3WY8WPtjn",
  "key15": "5h7vNXqkqNfpe7d6CHRqD7jbEjbXBmKzGPrU4fzu3uehz9G5HkYtf4YAiPUukuRqXKC6hMa7uYZ9zToZLrYa2L6h",
  "key16": "4ibyzeEXMXdmSyxE2nHpbtneqDdVh4VaGice6bf368u5kKGKUUwB45qQAraAseqAF3bVUQi396z27GYHZBCKnARv",
  "key17": "4XX2j7ERwF9MjP8KeikTWqX138LHmKS2e39kjGMJfdkpzZmMvqqvSuKoWHaphRK9ouPW69BXsqr8j8LnzyFvWhsL",
  "key18": "QSG4p8memomrxgM4m5VSdZJFpuAay3BjGNDTZ3dsYnVojLbqLr3F6QmCCKsxwJA9Tx6f47AuxtatqjdeANQYMoz",
  "key19": "58UqwGzbW8RsvtyEhFARXkp6SL8VyttNPa8XCVgg33sRjEW4xb1oHuZpvDgf7xjRrqFUxSAJ7oFHRED8p5yZ2wYu",
  "key20": "5ETbN1vVLPX7RbmVtWHo6Jh8JJN1LKWCk4iGQE1ZyyJRoyKmEybordDRjP3JZWjmvpipXevLCHDvbgVJLz6JebpW",
  "key21": "RaLgGmdcF2jqaxavXzNkCJ27hxnG8HDc6PBs1nR2Se9BKCTVaauT38RhmGiUu8WvLtYktccvSGtxxZTUNZ6L6Jf",
  "key22": "4P9xpE7LssfCH4S5yXYGSbBTPyWcyvqyVEDPQJEXWkzW8JbNMvPLer5uRvhVtqR9v7xHAyMwauy4pKB7tdHBaZKp",
  "key23": "2tXoiJNdFc3dnZ4cqZF2NZsqpzXzuhzpEhJbMexJCFojw956m8t9cWt4j7n5YaVpJ2D5rsmxs1Bse3ysp4tbNKx7",
  "key24": "2f9KXCtmn8Ufk5pxSGX4Ft5En5RJhqjwoVeYJsuQCkBoV6GyBRccykR1xbzQCD1MT7GfganSfYt5cMKrWs6cfoU1",
  "key25": "2wgNzgEMB18j8WzL9XBS82T26AdYvBdDPhRbcMsxh4j25srcZmF2f6dftpjzC7ULoEsahqBHcJ6karAmYqjGzd8K",
  "key26": "hxMZNU23tXXUAY4kT9NMznuGX6FY7tBLSPAwrJVfryLKbieUGAnX4mqBsGyRJqL6hHdRXEjBxBhm2KRbET8rJ2d",
  "key27": "5uvB4TZ4seWJffvxNoVJ7bVtYGUKnaWcxLom292ANZjW9K5dD3vJUgDt6AU2jFLgiGBn348tcV6sb1WHk1BGk2N4",
  "key28": "5iNUwV5SWMDLzYtQUvt5x169U5mnbwUbMsrURytjwcGg1RyrmGUt7GAZLNjorTDXeDv5rBh5cBGX1H93hu2PTkZR",
  "key29": "61RdUwcfdnVLAvZ8ompfbskVMcivcJBG5LdwaDWpYg7B14yvjV3M5whvWy5RVPP4dFhxFSjNtFWjsbB55UqMYgvV",
  "key30": "2PTmQMMSfKzzVGnx3NqgcYaprnDdCeJvnKeS7v56XvRgRFTvYgB7kYayNXUkEPZrKg5pvvT8BuR1JLpgAFNkJsdw",
  "key31": "8173hLUTmX3cydxQvEfuVsvsw6iL8iWBJb268WAu5mWeBmqTNCSqfeytP1uQm51SWH432wRs4z2TxmUHQ4qFSSL"
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
