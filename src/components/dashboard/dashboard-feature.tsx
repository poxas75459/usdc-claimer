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
    "2z7117CpnhL9gDeCakWnkBtJg5h175Uc5SmFwMLZVuic69Raj9vC91VgswLFhcEu3exhpySf1iUfZBDZxR72vmXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QodNSogqE5SBD2XTGgpNWDweZ1tEsp2b8ciqnwxBiEGETpbinhvVnFfy4ZGuWj4rZTSf1XcJLUwwaFyfdGeyzQz",
  "key1": "479GPz7M2oLLXdQXCmsHn9tcshTbYCVevsuP16tRoCteujVPDp215J43VZJZgfzPsJN6cpgpQbkiW9vezHkzKvzd",
  "key2": "4KfGqscK2A3xZgu4AmHkuzRpYsTTxBoFrXuHR6efhKd6mmc2nSn1eg1atu26NvJfScYzZ8DadMiDa7yMzuq8PBv3",
  "key3": "4y5rTthMCWUjhw51WB6QDDgtDKTBRb45Cyz2mXshivUt46jP4rbBSctGqu1wQFghcuyfb9Qkscbh8L8xD1m99Jg8",
  "key4": "4Hp8cNZ8xZuXavTA177T3oBnspQFyU2RnhLodeTj9StAjM2of4HE1XGGLpwQraWNFXfRtxbHy68uxKGuBxkje7K5",
  "key5": "2ifziboy8K2gQTEQTdvMwJ9dYavFPmuThVrP4g4EYANdhk25X92tzLh589MuEenoB2RBHeX6tEXQyvwVhbkHcmm4",
  "key6": "63Um2WctkkKd8GZxDA6gR9yJgprtqq3jeDYgtw4wbsEw4UJHDoEuVgHvzJETSwzJE5ASYfXeUTa97zLNvfcnq4SB",
  "key7": "3ooJdcST3mMStugtom7h88mrvpfs3zjcf4J3QMCaGweXq3hRXUwMuH2j2XcYhKCWHZFzZ5GQZKWWFoQzfcQe6DvL",
  "key8": "2i1H47SnfsJ4UfK5MCyYuvhateg5zBhArpJ7Ykix1SzT4yptqizTWsfCgcKbxc47z6zrU1B3UdzhqEzo8mMaQAx5",
  "key9": "2wm9fWkvg6wGfSJk3eYx9xCtp8WS7t4E4fDwH6pgBwHZewL26wz1RNxUzDWJpCLBGEq2gqmWvRkmC8c8yF42bR4t",
  "key10": "48wPT3E1B5MgC7VjMUVQi4ucuEwvfFQcYvzFsaxgC1iTvUqkta1FbE5bkWZ4dxKuL5MKuePYc51KjJcafn8oYW6N",
  "key11": "5yap5Kc2ooLihpfUK8umUA31R89K92igqZw8E5QFpiPkcLjDVXfQHcm2NjBZAmdfSPGq1noAWyN3XR5StT2vJUBi",
  "key12": "34zVtPLXChah6RZJs2VHXuStqVYmLFGYxLSfn1EpCEgaCYtaTzRM1CJTn4nef9uVGVvp9wgmUXnrUngW4MwNjsPQ",
  "key13": "5Qe9o618zT4k2iqnMzFVMGt91a8hVQyPz59Qgr1bjQ6159RyhEP5bkKxB9ovg9H4V3LsAeXgSkcfABGsQkWYC15y",
  "key14": "4mxbeqSJWEWzCqDYtB8sRrFPfJXaXo4a5TjNi5uAstZbQRJiMcZUs8ksggtPcEnMGBpqE5qEW79qXJrJtJ5AVKEB",
  "key15": "1XvV5vLDsWTW52iQkyohrx3yqTj4c2HdFZp2yumAJCjbtHWbCpsLf2JyX1LZae4mczKNvQsXXYX8PkKNcLSqfxs",
  "key16": "Ncr7pRAwqEUBPs2PWLgVCzv6oFeTYKqjJ46L4gRci9MCCoMGTxgMkGRazki7djpcZemNGt9a76zSjv9wi1BrQjB",
  "key17": "32e8orMhayYHRcYCUcbWP9DYDQ48ogj2jH6LrxJLqEZqoMRd8QnFcVnBGv9ziZbpwQxbqemRzr5j1Jn1U9YTXram",
  "key18": "5Ycnjz6g4z7TPhP7ruAPw71ykv5cMyRwm5FzJ1SFZDyQ4eXABeVQtFuPoF2vtvy9RsDRNSgi2SfUYMvMEuGt5Jxh",
  "key19": "2X9y5wbSYENpAEtTreA7Xeap1w5F9XSbxv5CDTx13PFtfw6kTfw75XgaauAEpkDhv9obS8y5PNqx8eN36rUESZtQ",
  "key20": "4LCoszZTL4Erj5Z5bMVsihAVv16o9VmrGVExksRtJbGn9VmJiRwjvgY3AVJXzrDK61X64e75Vh1MLpP3MFbQpWFb",
  "key21": "5D8Gn6da3gLwNtAt3gj4ramNMwkZvv7JJF64mZ9nQuCJ1j4UGUx8yycvBZe55daadvEQ8iu4BKJv32FLR4GX76cg",
  "key22": "4xB65zPc79SiZekXd4ndA2afsPDaVrvx5mpLtBu1HqB5XqxvdgdCMBi2spLrme9yUA7y7MgfYMxUPXFjYMcS6hyH",
  "key23": "NbiNSLMKW6gNV1Muh4bivFJHiTzCexCHmzeZegWwukCgUidcKVoVFdno3GyuUt9UtVBVXeuxZoaRay6earAT7Yo",
  "key24": "4Xe8FCbMUfPofpd4WrCLuT4GZvuCSnFEVjjLFyqzv3i4HiD5eNKQkkCw9FnSTPPGKRMUKNKDjZBmjhdDg5taRjeg",
  "key25": "3ENB4ALx3AqMywbr3wTywvTc9RXsF3PgmzRVb1mWjGBi387itoe8wCNvqHxAyyd9W6iVWTKMxLguACWQcnjzhjCJ",
  "key26": "GUipH55PhPa3QDRiaLptmi6SDjHCZd6PpMeLyLeirMT6aw9CghY7MUgFyNhpggqsrhFLDEKgAWQPaUgGgpqq8XG",
  "key27": "2yXF3P4D7aeY7P1YmA5K8xAHewNnma85Nc1zqq4BkoJgNv8VsN2dA2aU3ejmBzQaMPdGtbwt3KJQD65hUdxDcea9",
  "key28": "4HfPhHLUTUyrSg1V3Y1XdMh2UZtjtxxm9ZzfE1i9tCDQ6fPRzZyB81AfHFVHra4ffwbnTEFP6ax9tMPjSxj1J8jk",
  "key29": "24GCbzJXhy2ddXw3SoaLFgZA6dN31p7mTBqxAAt3pAR7GfhqgykNhd6MvygzKZAxkGVXRF2MavY6RkB9FKqq6bg8",
  "key30": "5L4LT4n3DmyQF6ULLcqcMqbCeAeN6jUueuzCYZq7ShQYkCCLVgtVG5uKEE9FjduwXAiS3xd4fkFpjJQ4WLHZJ4RS",
  "key31": "G158XaHTPvBKJKSRCoM961awTfd3E4dBQT5QYcxTQ7isMbMN8CgRfKLJpPhGkU3VjxUd4NPXp6R9pZ5y1QcHskQ",
  "key32": "4J3WRMWiSTFso5syjhKgt7oDzDxm3t4b6iqDGsq5abrQE2JVyn7mizCk1xbWuqVSsmp9HGn6HL4N1vggHqjvizEt"
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
