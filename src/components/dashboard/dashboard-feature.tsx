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
    "3oV6L4GTCTXY6amYWm7TtBunS5WBBPNm6etBoij5vbfwLvMapvpoL7VeVE6HwwtjKYXHsY1qkApR9yK2YwZGDhnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39gQQsFHjLTzkySz3sfjw6VfH9E9W7y4N1FojERCr5EMrbLrPQQ4GAU7pLJxfqR5rBPwBmNoL63HSX7uqctTpyxw",
  "key1": "5SSgdzA9NcywVKjme6DMjLYi1b2GyteMkAjj5TMt8VsHpr2rzuxpmyyMXGRiguiF4rQzNgXnfNVCjRHKEQvXa9Ye",
  "key2": "33eGSXB9exbBmpse42a1cCHevBbnzV3EPjJV92ZLQxHcyNzkwatEGG5npXtdccuQkBw21TkLeGkw7nwuBDAh6J56",
  "key3": "zQKqiW6DDVxC9cBevSt34xFzHHARGw7DGumcSUqbeaoJ7uvnimGARzeZ9cqF3Z26xy95Rv7AVv33XWeRKWB48kM",
  "key4": "Pnu4XuW6rm6WSuJHuYPfMgyARDYC4LB164VN758khJmZEcWquGodU7G1nc5LX32tE7UPhs6zU5hYLrub15MabwU",
  "key5": "pXwN2XpNP3v4SukBc2gN2T127bQbtXWNtrD2jNFjuVx3mU5sKHQSK4UPs6tHx9fKfkh5eF1KUaFr3Tkear15R8Q",
  "key6": "R7xPdy2KMUq3BsVKdEH1kNwqFH4frA3y48vdvse4KZyDjxQ5MZnEDbsWGv2D81nCYVekZhKTtCZmqHBNP1tnLk5",
  "key7": "3KtFaFo7zX6QayuDTkMMMBa7kfhndSEs9VfPXnhJEcrKWSDWYv9DnBKfeFgBiqK1ALXUN8CYF6U4JeytpoGKBXiZ",
  "key8": "3TNiEoJoUYNz6yThbs8X7uNRdZnq8z7eofhQiwABGEWkAHY8cuSo11RUD85AUneioNTG3VGhp2i8tYnZVuwM9eJy",
  "key9": "3L9wBUNDtv8ER8zsbWMdXX939peCYWzPrZp5V4BHzd7bsS5XG5PDwyN9tkLhStzbrcGpijuzHC8cgDCa7SPViTYL",
  "key10": "2dK321CjHogHVqQVYUqMpeXQxvp7UJmPRnmUaqBdUdf3KbCqkC7XvfJk3hZ76oWBDHX14bNbZT9QR577tPgoeuvm",
  "key11": "4E2NS5F328tPw9VjaW1oEVv68FhJxbAzHjxnuaEBYYueRyUxTBqBtSaUJ6XQemLFBsBjrfiJJXdD1c7XoDhkiqUt",
  "key12": "2DLwxRVBuSdVb9QaiDZNwN3qCioQD8tmZF9mosRdMUav1ZQca4X75z7V2bgzNNqRtivE3rpzt14qeKEtzWYZ7HtY",
  "key13": "4ornfr1XEm6j99Ytd3KCEFMKHDf5MS5ZX3eoufj2mfwFykUAikDeC5sumCJWVVWXM1sLgYzi9wd4dxJiThaZHYmR",
  "key14": "4ihvZk4mwMiAQBeEhiEmovFWSbtFvS6TFRrmod7ESASA76kBhdC56yYivTi8K8HNewfhX2CBF7fU1gPyAAuXssrF",
  "key15": "5FZcnkH2Wjt6VQKpZoGymSwUNnWnZWJccFhtYnvjNygrbPXVcLdCqxean6fusohZp8P2s6VoTnwGFA6GEs1KbQKu",
  "key16": "4wEkbtCcWPd3x8Ho1MRG8K7cAiLJ4XiYLThoJtRiGLSGhQYZsYj9z2iA7eX8fAe9vSviNcZcmrnYRJBzBy3cYD8M",
  "key17": "59HpycjMC8S1NKyodJ3NUZqM6LyBWYRVcmYfJzvSBLCuSNCy8fr22xmDEiG8NQB9pgR2GijH5YygQrE5FgmWXnAD",
  "key18": "4Yh3woVU6fyn4c29pV3sXJibUvyF9gjbp65NDq6px9J9jGM3Gm6ySj5WLxYVgPYU32r7MgchGra1jYMctUTXWpUP",
  "key19": "5dsiwG8UVvdfufnZEYR8T1xdRCBQ8NzD4sdqiothhMc81MYgk33PLztbaaJqgws8jSrNCD4WDHc8So8e9mRqaLp",
  "key20": "CL2AVNwfvXshjB87ygCLJiXBFNYmGzV96yXEE4NmkKK1Qg4bjFR1kAAv6hmjWav6ruZZNnDmQdLbCGFXZmuJJ9p",
  "key21": "3TBbso8LWqPvhoRrfuCQfaz34EuUkFPHNRNMu9bN6FqjjS3sd4Jaa1snCPi9Acog1onazaPoa2HqCoRFJoDJEM1Y",
  "key22": "5gHkgjvprhH1E7JMA5Pjd6BSZFxCET7XZiFgkhN33C3RvwkM3x7FjfCCeVYHRudkdqfMMWXbgJBiJ2xKMDaX6yAu",
  "key23": "YUGpQEYQjTQZHcTijoU6N4ugGLiPY9yWvBSe84bh4DoMpMVRceDRGwwMKEjYq23HfWfwNEtNkaNYdnXu5jkewK9",
  "key24": "3Ktb5CzYXSowG8bquNKgM1ojGPXxnpKWR1hkJUvTNn3PD1VnAYirjqx9C64mfpta67BaZrtUKRFSRa9nfwiB7qY5",
  "key25": "2tYfyphSFAv2Fpc8Xfofgz4Mi8UBtRcjKRg3321WFQgAArUPudyt1f8iD6eP11CDvr7Y5AWM3uup4Q3fYJ2kU5hv",
  "key26": "DHAXVjViNWXPJhEJhR8nA2QAWwMLu9BFbZrQuPyvmGC7MBUMcXMWQCDpsUUHgkdfYntpg2RJ6d3jYzMzEih8o9B",
  "key27": "224ZPb82KrJ7VfaBUBfCYczBjwQCaCfGoTQK9vvxQY5qCLs9Av2mfBRVCa9ZUdhusDh9i3LytLwXMpe9d4u9pLdm",
  "key28": "3tCKBSEGNUwPwjuDSNaYkNTuLWy7FPwoMApu9tiTHdyAvuxgempHjT3o3AHsMtrLK5L6vwMekYLp4knJmKnPKxJc",
  "key29": "3FtjAX1xq6D6c7JQvoEbvpoZttAWSxrUzcY87yttQ3mJSAgZQ3c21b9AXvLyF196rHFbK7uqwkw5W6VBiU1HS71d",
  "key30": "3mUBtvJoPFLMP3WhymTCta162F6E84RtkBtezzxZTEayYJv1p37ccc15PABsLepKRaGtQ6ZV92bkQBfaWShtkM5G",
  "key31": "613iD2g4EdzefVH43cCmwqPLeTtoB5X8QmFtHbmvX9UuNJGd32k4VH6R9KmEi8MKbkRknH2jcYgJZm1usYqknVEF",
  "key32": "4mUFHxrYo4NZXbPHHyoYoUVqRRsg29GzeRG9TEVVmv5GjFGBqcnvHFAHYHruDQiW15QXySdob34F3ATkB3GpKDiA",
  "key33": "26PeHosQZ37miZXLXrivdfgde6otoJGeJ9YFajsi9CSWMp2Ldup7DVfpVrAM5WCNSpdEuXRs6ZhBZRCRjkrcKy9d",
  "key34": "26kk7Aou8eLhXrDNhpqw5qgAXhBXsCyhv5svEGcxQ1ASQtnWpkumX6gmDD6um5VrYZiLZVT3xR6A2aRDsv3Gt4yZ",
  "key35": "5U2YizcmB4TfVhFu9Sm3sbvhFBBCTjkwRVSBjStfUAmve668uyzEBcrpSK4Pb8xdB6MDWSsjcSePStQdzDzS9kB",
  "key36": "3CPKGbRd4nTTctUKLTb3UyuNZkQjbwWZKMkP5i1XoKPStgceus8qyT5HQCiU7vdMpvAcvRh716W864ttQ87Kpk6L",
  "key37": "4AuPovYMjuG9S9FT6TaZfCDSzrq8TNoWVo8GQDHuoK53gb3pmV2Hb4nyrH7MnfwfzQHbbx3yvPJU7LFjdEiYcNn9",
  "key38": "3hNoq7QjBrEf5QwBZB2vftXDjbiZmSWbspGo3Cqfxsjfrt7NmWB5fzQW7JtZZopKwQpjkG1H4dx5epqVEcFpoCXs",
  "key39": "4neS66hrHNakW9cWPwjLVE6JXPh4kLDXNxjjgbphzxjWdcJzqzcUohBEyqHtGymZeNpWPkBNjgc8MV4LG2B1oQYE",
  "key40": "2CNNqiXtTH667sTqYRdKApgjQpE445AzDieWjFerJSpAqXZb3nk5wpwQMiuaYW7rBwA4QRNmmvDV7JmnjwfuUxd4",
  "key41": "48jgYxEdYEXAeRHEYyf1isjeDEPF1r4xJca8Suk9xn1Pa2irKVHtQ349WYNU16n1uV5U2czUhYXmJxNbKz7onRyX",
  "key42": "3zMwvvKdn9MUvsZF5rw7ST52y7Pzg4dboM43qp12jcSbnApUExN7CaBVLtJUswffKemzmWpX1QVzQWv2SAUBsMND",
  "key43": "Zg5kchGaAcu9UgBUrbrb1aYUpuD6PGoUUeQwZyzF9Ju9EYLjwGfjA9Eqgr1FTy1Aoun3Y86Saf2S2xyLxpWrgsJ",
  "key44": "4FPfSNgq1KeUbwYAmPA7NVMj4gf8XoYiZsjoNaANoCa4Jw5B8QVLJXfmW1ZoumtLyCcxXtHHt9Ro6UVuXApUXxNq",
  "key45": "3GSNMWdFEjyoHeApsvCZ88r2dfhpimPCxh12a7etnCrMAFynPKUfxeTwsTZAGp8wG357yg236CY7V9WpfvVEN9X9",
  "key46": "3nnRHyX9n4yUbXy5uKrspJhocoKUd4kzXttgN21crtZoaYQCHetCdsm1mf4uBHgaM4K3XgSQKFHeZAWU8aR7YiZ8",
  "key47": "3pLFUcPYFY6ZLni7dPFWStfd5FEgg63gDBNnZoTH7ciQdwxVhxEY1XrHm5diL8EkStjziTURUtf8LLvxDp2cAoqV",
  "key48": "s6cE6Ay3JfdsLdMuSYvRDv2Q3q5HZSqCLBuwyPfHoo67Uue3qn5whtgR6tAm8ynx32QAB4WZ7Q35ioywkG3v3UY",
  "key49": "4dJ3guRiDA6pQXSvKWvJvveJEjrTEzAegGkPa4qdMfTciLGuvmmdwCehTqLiWQPgrBcZW6TFuUtze1YrJhjjNQxC"
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
